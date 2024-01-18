---
sidebar_position: 12
---

# Autenticación JWT y Refresh Token en API REST

- Con la autenticación JWT podemos confirmar el acceso a nuestras API solo a los usuarios autorizados.
- Se usará el Refresh Token para generar el token sin preguntar las credenciales al usuario.

![Imagen para explicar](https://dc722jrlp2zu8.cloudfront.net/media/uploads/2019/12/04/cap3-seguridad2.png)

- Los JWT se utilizan como una forma segura de autenticar usuarios y compartir información. Normalmente, el emisor utiliza una clave privada o secreta para firmar el JWT. El receptor del JWT verificará la firma para asegurarse de que el token no haya sido alterado después de que fue firmado por el emisor.
- Básicamente el token es una “llave” con la cual podemos acceder a información protegida.
- La llave tiene información pública y una firma privada.
- A través de la firma, comprobamos que el token sea valido y que no se alteró.


## Creamos una BD
- En sql server management , ejecutamos los siguientes comandos sql:

```sql
create database dbprueba
use dbprueba;
CREATE TABLE Usuario(
IdUsuario int primary key identity,
NombreUsuario varchar(20) ,
Clave varchar(20)
)

insert into Usuario(NombreUsuario , Clave) values ('Admin' , '123');

```

:::tip Observación
- Identity es como auto_incremental.
:::


:::tip info
- [SQL IDENTITY: Columna de identidad en SQL](https://sqlserverdb.com/sql-identity/#google_vignette)
- [Campo con atributo Identity](https://www.tutorialesprogramacionya.com/sqlserverya/temarios/descripcion.php?cod=19&punto=13&inicio=)
:::

## Crear proyectos y dependencias

#### Creamos el proyecto
- Creamos un nuevo proyecto con la plantilla ASP.NET Core Web API:
   - Nombre del proyecto: ProyectoToken.
   - Usaremos la versión .NET 7.0
   - Desmarcamos la opcion “Configurar para HTTPS” porque no queremos instalar el certificado.

#### Ahora vamos a instalar las dependencias
1. En el nombre del proyecto – click derecho – Administrar Paquetes Nuget.
2. En la pestaña examinar, buscamos y instalamos:
    - Microsoft.EntityFrameworkCore.SqlServer (La misma versión que el proyecto)
    - Microsoft.EntityFrameworkCore.Tools (La misma versión que el proyecto)
    - Microsoft.AspNetCore.Authentication.JwtBearer (La misma versión que el proyecto)
    - System.IdentityModel.Tokens.Jwt

#### Configuración de la base de datos
- Usaremos la metodología Database First (es lo mismo que Code First).
1. En el proyecto creamos la carpeta Models.
2. Herramientas – Administrador de paquetes NuGet – Consola del Administrador de paquetes.
3. En la consola ejecutamos el comando:

```powershell
Scaffold-DbContext "Server=(local); DataBase=dbprueba; Trusted_Connection=True; TrustServerCertificate=True;" Microsoft.EntityFrameworkCore.SqlServer -OutPutDir Models
```

:::tip Observación
- Este comando genera el código para el dbContext y los modelos de una base de datos.
- Básicamente crea todo el dbContext y los modelos a partir de una base de datos existente.
- Tiene:
   - La cadena de conexión.
   - El paquete que se va a utilizar para conectarse a la bd.
   - Con OutputDir especificamos en que carpeta colocamos los
     archivos de clase que representan una entidad (tabla).

:::

:::tip info
- [Entity Framework Core tools reference - Package Manager Console in Visual Studio](https://learn.microsoft.com/en-us/ef/core/cli/powershell)

:::
4. Una vez ejecutado el comando, en la carpeta Models se genera una clase que representa el modelo (tabla) y otra clase que es el DbContext.



- En appsettings.json:


```json
  "ConnectionStrings": {
    "cadenaSql": "Server=(local);DataBase=dbprueba;Trusted_Connection=True;TrustServerCertificate=True;"
  }
}

```

- En Progam.cs:

```csharp
using Microsoft.EntityFrameworkCore;
using ProyectoToken.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<DbpruebaContext>(option =>
{
    option.UseSqlServer(builder.Configuration.GetConnectionString("cadenaSql"));
});
var app = builder.Build();

```

- En la clase DbpruebaContext.cs:

```csharp
protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {

    }

```
##  Configuración de servicios
- En la carpeta Models, creamos la carpeta Custom.
- Dentro de Custom , creamos una clase llamada AutorizacionRequest y contendrá lo siguiente:

```csharp
namespace ProyectoToken.Models.Custom
{
    public class AutorizacionRequest
    {
        public string NombreUsuario { get; set; }
        public string Clave { get; set; }
    }
}

```

:::tip
- Si desea quitar la advertencia  "el valor puede ser null" , debería hacer lo siguiente:
  - Hacemos click en el nombre del proyecto y en Nullable le asignamos disable:
```html
<Nullable>disable</Nullable>
```
:::


- En la carpeta Custom , creamos una clase llamada AutorizacionResponse y contendrá lo siguiente:


```csharp
namespace ProyectoToken.Models.Custom
{
    public class AutorizacionResponse
    {
        public string Token { get; set; }

        // Es true si se genero el token
        public bool Resultado { get; set; }


        public string Msg { get; set; }
    }
}

```


- En appsettings.json


```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "ConnectionStrings": {
    "cadenaSql": "Server=(local);DataBase=dbprueba;Trusted_Connection=True;TrustServerCertificate=True;"
  },
  "JwtSetting": {
       "key" :  "=codigo_estudiante_jwt= esta es la llave para firmar el token"
  }
}

```

:::tip Observación
- El valor de la clave key puede ser cualquier String, se recomienda que sea largo (si es corto puede haber un error) y difícil de adivinar.
- Se utilizará el valor de la clave key para crear el token.
:::


- En el proyecto, creamos la carpeta Services.
- Dentro de esta , añadimos la interfaz IAutorizacionService , que contendrá lo siguiente:


```csharp
using ProyectoToken.Models.Custom;

namespace ProyectoToken.Services
{
    public interface IAutorizacionService
    {
        Task<AutorizacionResponse> DevolverToken(AutorizacionResponse autorizacion);
    }
}

```

- En la carpeta Services, creamos la clase AutorizacionService , que contendrá lo siguiente:

```csharp
using Microsoft.IdentityModel.Tokens;
using ProyectoToken.Models;
using ProyectoToken.Models.Custom;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace ProyectoToken.Services
{
    public class AutorizacionService : IAutorizacionService
    {


        private readonly DbpruebaContext _context;
        private readonly IConfiguration _configuration;

        public AutorizacionService(DbpruebaContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }


        private string GenerarToken(string idUsuario)
        {
            var key = _configuration.GetValue<string>("JwtSetting:key");
            // Convertimos la key en un array de  bytes
            var keyBytes = Encoding.ASCII.GetBytes(key);

            // Creamos la información del usuario para el token
            // creamos un ClaimsIdentity , que representa una identidad
            var claims = new ClaimsIdentity();
            // Le añadimos una notificacíon (claim) a la identidad
            claims.AddClaim(new Claim(ClaimTypes.NameIdentifier , idUsuario));

            // Creamos una credencial
            var credencialesToken = new SigningCredentials(new SymmetricSecurityKey(keyBytes),

                SecurityAlgorithms.HmacSha256Signature
                );

            // Creamos el detalle de nuestro token
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = claims,
                // Expira un minuto
                Expires = DateTime.UtcNow.AddMinutes(1),
                SigningCredentials = credencialesToken
            };

            // Creamos los controladores del token
            var tokenHandler = new JwtSecurityTokenHandler();
            var tokenConfig = tokenHandler.CreateToken(tokenDescriptor);
            string tokenCreado = tokenHandler.WriteToken(tokenConfig);
            return tokenCreado;
        }

        public Task<AutorizacionResponse> DevolverToken(AutorizacionResponse autorizacion)
        {
            throw new NotImplementedException(
                );
        }
    }
}

```

:::tip Observación
- _configuration.GetValue&lt;TipoDato>(“X”) , devuelve el valor de la clave X de appsettings.json
- _configuration.GetValue&lt;TipoDato>(“X:Y”), si Usamos “X:Y” , es porque la clave “Y” se encuentra adentro de la clave “X”.
- El TipoDato, es el tipo de dato que se va a retornar, sirve para especificar si se desea hacer un casting.
:::


:::tip Clase ClaimsIdentity y Claims
- La clase ClaimsIdentity:
   - Representa una identidad.
   - Contiene una colección de notificaciones que definen el nombre, la función y otros atributos del usuario. Esta clase ayuda a autenticar y autorizar usuarios y controlar el acceso a varios recursos en la aplicación.
   - Las notificaciones contenidas en un ClaimsIdentity  se pueden usar para tomar decisiones de autorización y autenticación.
- La clase Claim:
    - Representa una notificación.
    - Cada claim es un fragmento de información sobre el usuario, como pueden ser, nombre de usuario, correo electrónico, rol, localidad a la que pertenece, etc.
    - La forma más sencilla de crear un Claim es proporcionando un tipo de dato y un valor en el constructor del Claim. El valor del claim se representa con un valor string.
    - Para representar el tipo de dato del claim tenemos la clase ClaimTypes, donde se representan los tipos predefinidos de claims más comunes.
    - Una reclamación(claim) es un par clave-valor asignado a un usuario por una fuente confiable. Un reclamo define quien es el usuario.
    - La "clave" suele llamarse  tipo de notificación/reclamo/dato y por lo general tiene formato de url.
    - Una identidad puede contener múltiples reclamaciones; Algunos ejemplos son la identificación, el nombre y el correo electrónico del usuario, por nombrar solo algunos.
:::


:::tip Clase SigningCredentials 
- Representa los algoritmos de seguridad y clave criptográfica que se utilizan para generar una firma digital.
- El constructor que usamos tiene dos parámetros:
  -   Clave de firma: Es una SecurityKey que contiene la [clave criptográfica](https://www.cloudflare.com/es-es/learning/ssl/what-is-a-cryptographic-key/) que se utiliza para generar la firma digital.  . Puede ser una instancia de SymmetricSecurityKey que representa una clase base abstracta para todas las claves que se usan con algoritmos simétricos. Recibe como parámetro un array de bytes (la clave criptográfica).
  - firmaAlgoritmo: Una URI que representa el [algoritmo criptográfico](https://developer.mozilla.org/es/docs/Glossary/Cipher ) que se utiliza para generar la firma digital. La clase SecurityAlgorithms contiene las URI que se pueden usar.




:::


:::tip Clase SecurityTokenDescriptor
- Contiene la información que se utiliza para crear el token.
- Propiedad Subject : Es un ClaimsIdentity. Establece los claims que serán incluido en el token.
- Propiedad Expires: Especifica cuando se va a expirar el token.
- Propiedad SigningCredentials : Especifica las credenciales que se utiliza para firmar el token. Su valor es una instancia de tipo SigningCredentials. Basicamente especificamos como se va a firmar el token.
:::

:::tip Clase JwtSecurityTokenHandler
- Se usa para crear y validar tokens web Json.
- El método CreateToken se usa para crear un token, solo recibe una instancia de tipo SecurityTokenDescriptor.
- El método WriteToken() serializa el token que le pasamos. En otras palabras, toma un token de seguridad y lo [serializa](https://learn.microsoft.com/es-es/dotnet/standard/serialization/) en una cadena(string) JWT que puede ser utilizada para la autenticación y autorización en aplicaciones web y servicios que utilizan JWT como mecanismo de seguridad. El método toma un SecurityToken como argumento y devuelve una cadena(String) que representa el token JWT.
:::



:::tip
Si seleccionas los campos privados y haces click derecho, en la opcion “Acciones rápidas y refactorizaciones” podes generar el constructor.
:::


- Completamos el método que implementa de la interfaz:


```csharp
     public async Task<AutorizacionResponse> DevolverToken(AutorizacionRequest autorizacion)
        {
            var usuario_encontrado = _context.Usuarios.FirstOrDefault( x => 
            x.NombreUsuario == autorizacion.NombreUsuario && x.Clave == autorizacion.Clave);

            if (usuario_encontrado == null)
            {
                return await Task.FromResult<AutorizacionResponse>(null);
            }

            string tokenCreado = GenerarToken(usuario_encontrado.IdUsuario.ToString());
            return new AutorizacionResponse() { Token = tokenCreado, Resultado = true, Msg = "Ok" };


        }

```
:::tip Observación
- El método FromResultado&lt;T>(X) crea un objeto Task&lt;T> que se ha completado correctamente con el resultado especificado(X). Entonces recibe:
   - T: Tipo de dato que devuelve la tarea.
   - X: El resultado que se va a almacenar en la tarea(task) completada.
- Recordatorio: Con el await, conseguimos el valor del resultado que se almacena en la tarea completada.




:::


- Como nos equivocamos con el tipo de dato de los parámetros en la interfaz que se implementa, lo corregimos:

```csharp
using ProyectoToken.Models.Custom;

namespace ProyectoToken.Services
{
    public interface IAutorizacionService
    {
        Task<AutorizacionResponse> DevolverToken(AutorizacionRequest autorizacion);
    }
}

```

## Llamamos al servicio

- En Progam.cs:


```csharp
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using ProyectoToken.Models;
using ProyectoToken.Services;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<DbpruebaContext>(option =>
{
    option.UseSqlServer(builder.Configuration.GetConnectionString("cadenaSql"));
});
builder.Services.AddScoped<IAutorizacionService, AutorizacionService>();
var key = builder.Configuration.GetValue<string>("JwtSetting:key");
// Convertimos la key en un array de  bytes
var keyBytes = Encoding.ASCII.GetBytes(key);
builder.Services.AddAuthentication(config =>
{
    config.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    config.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(config =>
{
    config.RequireHttpsMetadata = false;
    config.SaveToken = true;
    config.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(keyBytes),
        ValidateIssuer = false,
        ValidateAudience = false,
        ValidateLifetime = true,
        ClockSkew = TimeSpan.Zero
    };
});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();

```


:::tip Observación
- la linea builder.Configuration.GetValue&lt;string>("JwtSetting:key"); equivale a la primera línea de código del método GenerarToken(). Entonces  _configuration es igual a builder.Configuration
- AddAuthentication() registra los servicios requeridos por los servicios de autenticación. Recibe un delegado donde configura la autenticación.
- AddJwtBearer()  habilita la autenticación del portador JWT utilizando el esquema predeterminado. La autenticación de portador JWT realiza la autenticación extrayendo y validando un token JWT del encabezado Authorization de la solicitud. Tambien recibe un delegado para poder configurarlo.
- UseAuthentication() habilita un middleware para la autenticación.
:::


## Controlador
- En la carpeta controllers, creamos un controlador de API en blanco llamado PaisesController.
- Este contendrá lo siguiente:

```csharp
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ProyectoToken.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaisesController : ControllerBase
    {
        [Authorize]
        [HttpGet]
        [Route("Lista")]
        public async Task<IActionResult> Lista()
        {
            var listaPaises = await Task.FromResult(new List<string> { "Argentina", "Francia", "Croacia", "Marruecos" });
            return Ok(listaPaises);

        }
    }
}

```
:::tip Observación
- Podemos utilizar El parámetro posicional del atributo Route para indicar cuál es la ruta(endpoint) para solicitar la acción (De la misma forma que se hace con los atributos [HttpVerbo]).
- Esta vez no usamos el parámetro de tipo genérico de Task.FromResult ya que el valor se asigna de forma automática y es igual al   tipo de dato de la instancia que se crea en el parámetro normal.
- Con el atributo [Authorize] estamos diciendo que el endpoint solo puede ser ejecutado/usado por un usuario que contenga el token y este autenticado.
:::


:::tip Diferencia entre los atributos [HttpVerbo] y [Route]
- En .NET Core, tanto HttpGet("") como Route("") son atributos que se utilizan para configurar el enrutamiento de una acción en un controlador. Sin embargo, tienen diferentes propósitos y aplicaciones.
- Al usar los dos para un verbo Get por ejemplo:
    - HttpGet(""):
         -	Este atributo se utiliza para configurar una acción en un controlador para que responda a las solicitudes HTTP GET.
         -	Es útil cuando deseas que una acción responda solo a solicitudes GET y no a otros métodos HTTP como POST, PUT o DELETE.
    - Route(""):
         -	El atributo Route se utiliza para personalizar la ruta de acceso que se debe usar para acceder a una acción en un controlador.
         -	Puede aplicarse a acciones que responden a diferentes métodos HTTP, incluyendo GET, POST, PUT, DELETE, etc.
         -	Te permite definir una ruta de acceso personalizada.
- Ejemplo:
```csharp
[HttpGet("mi-accion")]
public IActionResult MiAccion()
{
    // Esta acción responderá solo a solicitudes GET a "/mi-accion".
    return View();
}

[Route("otra-ruta")]
public IActionResult OtraAccion()
{
    // Esta acción responderá a solicitudes GET a "/otra-ruta".
    return View();
}

```
- En resumen, HttpGet se utiliza para especificar que una acción responde exclusivamente a solicitudes GET, mientras que Route se usa para personalizar la ruta de acceso de una acción, lo que puede aplicarse a varios métodos HTTP, incluyendo GET. Ambos atributos son herramientas útiles para controlar el enrutamiento en aplicaciones .NET Core.
:::

## Controlador para autenticarse

- En la carpeta controllers, creamos un nuevo controlador (Controlador de API en blanco) llamado UsuarioController.
- En UsuarioController.cs:

```csharp
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProyectoToken.Models.Custom;
using ProyectoToken.Services;

namespace ProyectoToken.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly IAutorizacionService _autorizacionService;

        public UsuarioController(IAutorizacionService autorizacionService)
        {
            _autorizacionService = autorizacionService;
        }


        [HttpPost]
        [Route("Autenticar")] 
        public async Task<IActionResult> Autenticar([FromBody] AutorizacionRequest autorizacion)
        {
            var resultado_autorizacion = await _autorizacionService.DevolverToken(autorizacion);
            if (resultado_autorizacion == null)
            {
                return Unauthorized();
            }
            return Ok(resultado_autorizacion);
        }
    }
}

```

:::tip Observación
- Unauthorized() devuelve el código de estado 401 (El  usuario no posee los permisos necesarios para cierta acción).
- Los servicios no solo se generan (inyectan como dependencia) en el constructor de un controlador, sino también en los servicios (fíjate en AutorizacionService). Entonces un servicio también puede usar otros servicios a través de la inyección de dependencia.
:::


#### Lo probamos
- Nos devolvería algo asi:


```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwibmJmIjoxNjk4MDYyMjI1LCJleHAiOjE2OTgwNjIyODQsImlhdCI6MTY5ODA2MjIyNX0.JFbUZ_2-79bZEe4Az-hip2fgBMA-eOK384uawtW6Xfs",
  "resultado": true,
  "msg": "Ok"
}

```

-  Lo probamos en el sitio web [jwt.io](https://jwt.io/): 
   - En Encoded : Copiamos el token.
   - En verify Signature: Copiamos el valor de “key” de appsettings.json.
   - Como podemos observar, el payload almacena información del token como el tiempo de expiración, cuando fue emitido, a partir de cuando lo podés usar y los “claims (reclamos)” que añadimos.


- Entonces si hacemos una petición a http://localhost:5280/api/Paises/Lista no nos deja entrar porque no estamos autorizado.
- Pero si en la cabecera enviamos Authorization: Bearer [Ingrese el token], podemos acceder a la información.

:::tip
- Si desea enviar el token por swagger , eche un vistazo a esta [guía](https://www.c-sharpcorner.com/article/how-to-add-jwt-bearer-token-authorization-functionality-in-swagger/). 
:::


## Implementación de Refresh Token
- El Refresh token seria “otra llave” que el servidor te devolverá al autenticarse.
- Entonces al autenticarse te devuelve dos llaves, el token “verdadero” (el que implementamos anteriormente, se suele llamar Access token
) y un Refresh token.
- El Refresh token quedara almacenado en un algún lugar del sitio web.
- Cuando el token “verdadero” expira o se elimina (por ejemplo, cambiamos de página) utilizamos el Refresh token para volver a generar el Access token.
- La API Recibe un Refresh token, lo valida y luego genera el token verdadero y otro Refresh token (esto es opcional, depende de cada implementación).
- El Refresh token debe durar más que el Access token, ya que con este se obtiene el token “verdadero”.
- El tiempo de duración de una sesion activa depende del Refresh token.
- Por lo general una sesion debe durar el mismo tiempo que el Refresh token.


#### En la BD
- Creamos una nueva tabla con el siguiente comando:


```sql
create table TABLA_PRUEBA (

FechaCreacion datetime,
FechaExpiracion Datetime ,
EsActivo AS (iif(FechaExpiracion < getdate() , convert(bit,0) , convert(bit,1)))
)

```
:::tip Observación
- Iif() devuelve uno de dos valores, dependiendo si la expresión booleana se evalúa como true o como false en SQL Server. El primer parámetro es la expresión booleana, el segundo parámetro representa el valor que se devuelve si la expresión es true y el tercero parámetro representa el valor que se devuelve si la expresión es false.
- Se utiliza el “AS” para especificar que el valor de esa columna, se basa en un calculo (en este caso de iif) y por lo tanto se asigna solo.
- Convert(X,Y) convierte la expresión Y en el tipo de dato X. Entonces en el código sql anterior , si es true retorna un 0 convertido en bit y si es false retorna un 1 convertido en bit.
:::

- Insertamos un valor en la tabla:


```sql
INSERT INTO TABLA_PRUEBA(FechaCreacion , FechaExpiracion )
VALUES (getdate() , dateadd(second,10,getdate()));

```

:::tip Observación
- getdate() devuelve un valor Datetime que representa la fecha/hora actual. 
- dateadd() modifica una fecha/hora y luego la devuelve (modificada). El primer parámetro especifica qué medida/unidad (minutos, segundos, meses, años, etc) se utilizará para modificar el Datetime, el segundo parámetro es un valor int que será lo que se le sumara al Datetime utilizando la medida que se especifico en el primer parámetro y el tercer parámetro es el Datetime que se modificara. En el comando sql que utilizamos, le estamos aumentando 10 segundos a la fecha/hora actual.
:::

#### Hacemos select
- Si luego hacemos Select luego de crearla, el valor de la columna EsActivo  es 1 y luego de 10 segundos es 0 , el valor se va actualizando automática ya que gracias al “AS” es una columna calculada/virtualizada que no está almacenada físicamente en la tabla, el calculo se hace cada vez que se realiza la consulta.


#### Creamos la tabla para el Refresh token
- La tabla anterior la borramos solo era de ejemplo, ahora creamos la tabla para el Refresh token:


```sql
CREATE TABLE HistorialRefreshToken (
IdHistorialToken int primary key identity,
IdUsuario int references Usuario(IdUsuario),
Token varchar(500),
RefreshToken varchar(200),
FechaCreacion datetime,
FechaExpiracion datetime,
EsActivo as (iif(FechaExpiracion < getdate() , convert(bit,0), convert(bit,1)))
);

```

:::tip Observación
- IdUsuario es una fk que hace referencia a una fila de la tabla Usuario.
- La sintaxis para hacer una fk es: NombreColumna tipodedato  references tabla-a-la-cual-se-referencia(columna-a-la-que-se-referencia).
:::


#### En el proyecto
1. Herramientas – Administrador de paquetes Nuget – Consola.
2. En la consola ejecutamos:

```powershell
Scaffold-DbContext "Server=(local); DataBase=dbprueba; Trusted_Connection=True; TrustServerCertificate=True;" Microsoft.EntityFrameworkCore.SqlServer -OutPutDir Models -force 
```

:::tip Observación
- Con -force forzamos la actualización (básicamente sobrescribimos todos los archivos ya generados).
:::

- En el DbPruebaContext.cs , vaciamos el cuerpo del método OnConfiguring:


```csharp
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder){}
```

#### Empecemos con la lógica
- En AutorizacionResponse.cs:

```csharp
namespace ProyectoToken.Models.Custom
{
    public class AutorizacionResponse
    {
        public string Token { get; set; }
        public string RefreshToken { get; set; }
        // Es true si se genero el token
        public bool Resultado { get; set; }


        public string Msg { get; set; }
    }
}

```

- En Custom agregamos otra clase llamada RefreshTokenRequest y contendrá lo siguiente:


```csharp
namespace ProyectoToken.Models.Custom
{
    public class RefreshTokenRequest
    {
        public string TokenExpirado { get; set; }
        public string RefreshToken { get; set; }
    }
}

```

:::tip Observación
- También almacenamos el token expirado.

:::

- En IAutorizacionService:


```csharp
using ProyectoToken.Models.Custom;

namespace ProyectoToken.Services
{
    public interface IAutorizacionService
    {
        Task<AutorizacionResponse> DevolverToken(AutorizacionRequest autorizacion);
        Task<AutorizacionResponse> DevolverRefreshToken(RefreshTokenRequest refreshTokenRequest , int idUsuario);
    }
}

```

- En AutorizacionService.cs:

```csharp
private string GenerarRefreshToken()
        {
            var byteArray = new byte[64];
            var refreshToken = "";
            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(byteArray);
                refreshToken = Convert.ToBase64String(byteArray);

            }
            return refreshToken;
        }
        public async Task<AutorizacionResponse> DevolverToken(AutorizacionRequest autorizacion)

```

:::tip observación
- RandomNumberGenerator.Create() Devuelve una instancia de RandomNumberGenerator que provee métodos para generar valores aleatorios. Este generador de números aleatorios criptográficos crea valores aleatorios criptográficamente fuertes.
- Con el método GetBytes() llenamos el array con bytes aleatorios criptográficamente fuertes.
- Convert.ToBase64String() Convierte una matriz de  bytes en su representación de cadena(string) equivalente codificada con dígitos en base 64.  La matriz es de enteros sin signo de 8 bits.
:::


```csharp
      private async Task<AutorizacionResponse> GuardarHistorialRefreshToken(int idUsuario , string token , string refreshToken)
        {
            var historialRefreshToken = new HistorialRefreshToken
            {
                IdUsuario = idUsuario,
                Token = token,
                RefreshToken = refreshToken,
                FechaCreacion = DateTime.UtcNow,
                // Deberia ser horas y inclusos dias
                FechaExpiracion = DateTime.UtcNow.AddMinutes(2)

            };

            await _context.HistorialRefreshTokens.AddAsync(historialRefreshToken);
            await _context.SaveChangesAsync();
            return new AutorizacionResponse { Token = token , RefreshToken = refreshToken , Resultado = true , Msg="Ok" };
        }
        public async Task<AutorizacionResponse> DevolverToken(AutorizacionRequest autorizacion)

```

:::tip Observación
- DateTime.UtcNow Devuelve la fecha y hora actual del equipo, expresada como hora universal coordinada (UTC).
- Con AddMinutes(X) , le añadimos X minutos al DateTime especificado. También puede ser usar otros métodos de DateTime para añadirle horas, dias, etc.
:::


```csharp
   public async Task<AutorizacionResponse> DevolverToken(AutorizacionRequest autorizacion)
        {
            var usuario_encontrado = _context.Usuarios.FirstOrDefault( x => 
            x.NombreUsuario == autorizacion.NombreUsuario && x.Clave == autorizacion.Clave);

            if (usuario_encontrado == null)
            {
                return await Task.FromResult<AutorizacionResponse>(null);
            }

            string tokenCreado = GenerarToken(usuario_encontrado.IdUsuario.ToString());
            string refreshTokenCreado = GenerarRefreshToken();
            //return new AutorizacionResponse() { Token = tokenCreado, Resultado = true, Msg = "Ok" };
            return await GuardarHistorialRefreshToken(usuario_encontrado.IdUsuario , tokenCreado , refreshTokenCreado);

        }

```


```csharp
  public async Task<AutorizacionResponse> DevolverRefreshToken(RefreshTokenRequest refreshTokenRequest, int idUsuario)
        {
            var refreshTokenEncontrado = _context.HistorialRefreshTokens.FirstOrDefault(x =>
                 x.Token == refreshTokenRequest.TokenExpirado && x.RefreshToken == refreshTokenRequest.RefreshToken
                 && x.IdUsuario == idUsuario
            );
            if (refreshTokenEncontrado == null)
            {
                return new AutorizacionResponse { Resultado = false, Msg = "No existe refreshToken" };
            }
            var refreshTokenCreado = GenerarRefreshToken();
            var tokenCreado = GenerarToken(idUsuario.ToString());

            return await GuardarHistorialRefreshToken(idUsuario, tokenCreado, refreshTokenCreado);
        }

```


- En UsuarioController.cs:


```csharp
[HttpPost]
        [Route("ObtenerRefreshToken")]
        public async Task<IActionResult> ObtenerRefreshToken([FromBody] RefreshTokenRequest request)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var tokenExpiradoSupuestamente = tokenHandler.ReadJwtToken(request.TokenExpirado);
            // Si el token es mayor que la fecha actual , es porque todavia no ha expirado
            if (tokenExpiradoSupuestamente.ValidTo > DateTime.UtcNow)
            {
                return BadRequest(new AutorizacionResponse {Resultado = false , Msg = "Token no expirado" });
            }
            string idUsuario = tokenExpiradoSupuestamente.Claims.First(x => 
            x.Type == JwtRegisteredClaimNames.NameId).Value.ToString();

            var autorizacionResponse = await _autorizacionService.DevolverRefreshToken(request, int.Parse(idUsuario));


        if (autorizacionResponse.Resultado)
            {
                return Ok(autorizacionResponse);
            } else
            {
                return BadRequest(autorizacionResponse);
            }
        }

```
:::tip Observación
- El método ReadJwtToken(X) Convierte el string X en una instancia de JwtSecurityToken (es una clase que representa el token).
- La propiedad Claims , contiene los claims del token en un IEnumerable&lt;T>.
- Usamos el método First para obtener el primer elemento que cumpla la condición especificada por el primer parámetro (Es un Func&lt;Claim , bool> ).
- La propiedad Type de un Claim seria la “clave” que contiene el valor. Es una Uri.
- JwtRegisteredClaimNames  es un struct que contiene todos los tipos de claims registrados.
- Un Claim tiene la propiedad “value” la cual contiene el valor.
:::