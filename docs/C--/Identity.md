---
sidebar_position: 13
---

# Autenticación JWT y Identity Core
## ¿Qué es un Json Web Token?
- Un JSON Web Token (JWT) es un estándar (RFC 7519) que define una forma segura y compacta de transmitir información entre dos entidades en forma de un objeto JSON.
- Esta información puede ser verificada y es confiable ya que está firmada digitalmente. Los JWTs pueden ser firmados utilizando una llave privada (con un algoritmo HMAC) o con llaves públicas y privadas utilizando RSA o ECDSA.


#### ¿Cuando deberías utilizar Json Web Tokens?
- Autorización: Este es el caso de uso más común de los JWTs. Una vez que un usuario ha iniciado sesión, cada llamada subsecuente al servicio incluirá el JWT, permitiendo al usuario acceder a rutas, servicios o recursos que solo están permitidos con su debido token. 
- Intercambio de Información: Los JWTs son útiles también para transmitir información entre dos entidades. Debido a que los JWTs pueden estar firmados — por ejemplo, utilizando una llave pública/privada — podemos estar seguros que quien manda la información es verdaderamente él quien lo manda. Adicionalmente, la firma es calculada utilizando el encabezado del JWT y el contenido (payload) por lo que también estamos seguros que el contenido del JWT no fue alterado.

#### ¿Qué estructura tiene un JWT?
- Un JWT comúnmente tiene la siguiente forma:
   - xxxxx.yyyyy.zzzzz
- Un JWT está separado por puntos ( . ) en tres partes, las cuales son:
   - Encabezado (header).
   - Contenido (payload).
   - Firma (signature).

#### Header
- El encabezado típicamente consiste de dos partes: el tipo de token (que será JWT) y el algoritmo que se está usando en la firma, que puede ser HMAC SHA256 o RSA.
- Por ejemplo:

```json
{
  "alg": "HS256",
  "typ": "JWT"
}

```
- Después, este JSON se codifica en Base64URL para formar parte del primer segmento del JWT.

#### Payload
- La segunda parte del JWT es el contenido que se transmite o certifica (payload), el cual contiene una serie de claims.
- Los Claims son afirmaciones sobre una entidad (usualmente, el usuario) y brindan información adicional. 
- Hay tres tipos de claims: registrados, públicos y privados:
   - Claims registrados: Son un conjunto de claims predefinidos que no son obligatorios, pero sí recomendados, para proveer un conjunto de claims interoperables. Algunos de ellos son: iss (issuer), exp (tiempo de expiración), sub (subject), aud (audience), entre otros.  Nótese que los nombres de los claims son de tres letras por la misma intención de mantener el JWT de tamaño reducido.
   - Claims públicos: Estos pueden ser definidos como cada persona desee, pero para evitar colisiones de nombres y mantener un estándar (ya que puede usarse en distintos servicios), se utiliza una lista [IANA JSON Web Token Registry](https://www.iana.org/assignments/jwt/jwt.xhtml).
   - Claims privados: Estos claims son personalizados por cada persona que implemente los JWTs y al igual que los públicos, para evitar colisiones es recomendable utilizar un formato URL con algún namespace y así asegurar que son únicos.
- Por ejemplo, un claim que guarda los roles de ASP.NET Core tendría el siguiente nombre: http://schemas.microsoft.com/ws/2008/06/identity/claims/role.






- Un ejemplo de un payload sería el siguiente:

```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}

```
- Y al igual que el header, este segmento se codifica en Base64Url.

:::tip
- Aunque los JWT estén firmados, solo están protegidos para evitar falsificaciones (editar el payload) pero de igual forma, toda la información en el payload es visible para cualquiera. NO INCLUYAS información sensible en el payload al menos que esté encriptada.
:::

#### Signature
- Para crear la firma debemos de tomar el header codificado, el payload codificado, una llave secreta, el algoritmo especificado en el header y firmar todo eso.
- Por ejemplo, si vamos a utilizar el algoritmo HMAC SHA256, la firma será creada de la siguiente forma:

```js
HMACSHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload), secret)
```
- La firma se usará para verificar que el mensaje no ha cambiado mientras viaja por la red, y en caso de ser tokens firmados por una llave privada de un certificado, también se puede verificar el emisor.

#### Juntando todos
- Al final, tendremos tres cadenas de texto codificadas en Base64-URL separadas por puntos y se podrán incluir en solicitudes HTTP o contenido HTML sin ningún problema. Esto es una forma mucho más compacta comparado a otros estándares como SAML que utiliza XML.
- Al final, tendríamos un JWT de la siguiente forma:

![JWT](https://res.cloudinary.com/practicaldev/image/fetch/s--KYV4iGFQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7s02hlfzjv4pwo5pro1q.png)

- Si quieres jugar y generar tus propios JWT de prueba, puedes visitar [jwt.io](https://jwt.io/).


## Cómo funcionan los JWT
- Cuando un usuario ha sido autenticado, el servicio deberá regresar un JSON Web Token para ser usado como sus credenciales. Dado que esto es usado para autorizar el usuario, debes de considerar  muy bien donde guardar el token, y eliminarlo lo más pronto posible si ya no se requiere.
- Cuando un usuario quiere acceder a contenido restringido en una ruta protegida, se debe de incluir el token en el HTTP Header Authorization y utilizando el esquema Bearer.
- Ejemplo:

```js
Authorization: Bearer <token>
```
- Generalmente en Web APIs (y como lo haremos más adelante) que son aplicaciones stateless, siempre requerirá que el token vaya incluido en el encabezado Authorization. El servicio verificará lo necesario para determinar si es un token válido o no, y si este es válido leerá su información (los claims) y lo usará en la solicitud de ser necesario.
- Esto también reduce las consultas a bases de datos para leer información del usuario, ya que el token puede contener información común para poder operar (como username, email, roles, etc).
- Dado que el token va incluido en el header, no habrá problemas con el Cross-Origin Resource Sharing (CORS) ya que no se utilizan cookies (las cookies son por dominio).
- El siguiente diagrama muestra cómo se podría utilizar una autorización y autenticación por medio de JWT:


![diagrama](https://res.cloudinary.com/practicaldev/image/fetch/s--pB1VFTaY--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ld6jbupjkpqxr0w0izyl.png)


1.	La aplicación cliente solicita autorización al servidor.
2.	Cuando se autoriza el acceso, el servidor de autorización regresa el access token a la aplicación cliente.
3.	La aplicación cliente usa el access token para acceder a recursos protegidos (como una API).


## ¿Y el código? Probemos con ASP.NET

#### 1- Creamos el proyecto
- Creamos un proyecto ASP.NET Core Web API con controladores.
#### 2- Paquetes Nuget
- Instalamos los siguientes Paquetes Nuget:
   - Microsoft.AspNetCore.Identity.EntityFrameworkCore
   - Microsoft.AspNetCore.Authentication.JwtBearer
   - Microsoft.EntityFrameworkCore.SqlServer
   - Microsoft.EntityFrameWorkCore.Tools
#### 3- Configuración
-  Modificamos el appsettings.json:
```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft": "Warning",
      "Microsoft.Hosting.Lifetime": "Information"
    }
  },
  "AllowedHosts": "*",
  "ConnectionStrings": {
    "ConnStr": " Server=localhost;Database=AutenticacionPrueba;TrustServerCertificate=true;Trusted_Connection=true;MultipleActiveResultSets=true"
  },
  "JWT": {
    "ValidAudience": "http://localhost:4200",
    "ValidIssuer": "http://localhost:61955",
    "Secret": "ByYM000OLlMQG6VVVp1OH7Xzyr7gHuw1qvUC5dcGt3SNM"
  }
}

```
:::tip Observación
- Agregamos una cadena de conexión de base de datos y también agregamos una audiencia válida, un emisor válido y una clave secreta para la autenticación JWT en el archivo de configuración.
:::
#### 4- Clase ApplicationUser
- Cree una clase "ApplicationUser" dentro de una nueva carpeta "Authentication" que heredará la clase IdentityUser. 
- La clase IdentityUser es parte del marco de Microsoft Identity.
- Crearemos todos los archivos relacionados con la autenticación dentro de la carpeta " Authentication".
- ApplicationUser.cs:

```csharp
using Microsoft.AspNetCore.Identity;

namespace Ejemplo.Authentication
{
    public class ApplicationUser : IdentityUser
    {
    }
}

```

#### 5- DbContext
- Podemos crear la clase "ApplicationDbContext" (en la carpeta Authentication) y agregar el siguiente código:


```csharp
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Ejemplo.Authentication
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }

    }
}

```
#### 6- Roles
- Cree una clase estática "UserRoles" (en la carpeta Authentication) y agregue los siguientes valores:


```csharp
namespace Ejemplo.Authentication
{
    public static class UserRoles
    {
        public const string Admin = "Admin";
        public const string User = "User";
    }
}

```
:::tip Observación
- Hemos agregado dos valores constantes "Administrador" y "Usuario" como roles. Puede agregar los roles que desee.
:::

#### 7- Clases para el login y register
- Cree la clase "RegisterModel” (en la misma carpeta) para el registro de nuevos usuarios:

```csharp
using System.ComponentModel.DataAnnotations;

namespace Ejemplo.Authentication
{
    public class RegisterModel
    {
        [Required(ErrorMessage = "El nombre de usuario es obligatorio")]
        public string Username { get; set; }

        [EmailAddress]
        [Required(ErrorMessage = "El email es obligatorio")]
        public string Email { get; set; }

        [Required(ErrorMessage = "El password es obligatorio")]
        public string Password { get; set; }
    }
}

```
- Cree la clase " LoginModel” (en la misma carpeta) para el inicio de sesión del usuario:


```csharp
using System.ComponentModel.DataAnnotations;

namespace Ejemplo.Authentication
{
    public class LoginModel
    {
        [Required(ErrorMessage = "El nombre de usuario es obligatorio")]
        public string Username { get; set; }

        [Required(ErrorMessage = "El password es obligatorio")]
        public string Password { get; set; }
    }
}

```

#### 8- Response
- Podemos crear una clase "Response" (en la misma carpeta) para devolver el valor de respuesta después del registro y el inicio de sesión del usuario. También devolverá mensajes de error si la solicitud falla.


```csharp
namespace Ejemplo.Authentication
{
    public class Response
    {
        public string Status { get; set; }
        public string Message { get; set; }
        public object[]? Error { get; set; } = null;
    }
}

```

#### 9- Controlador
- Podemos crear un controlador API en blanco llamado "AuthenticateController" dentro de la carpeta "Controllers" y agregar el siguiente código:


```csharp
using Ejemplo.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Ejemplo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticateController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> userManager;
        private readonly RoleManager<IdentityRole> roleManager;
        private readonly IConfiguration _configuration;

        public AuthenticateController(UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager, IConfiguration configuration)
        {
            this.userManager = userManager;
            this.roleManager = roleManager;
            _configuration = configuration;
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] LoginModel model)
        {
            var user = await userManager.FindByNameAsync(model.Username);
            if (user != null && await userManager.CheckPasswordAsync(user, model.Password))
            {
                var userRoles = await userManager.GetRolesAsync(user);

                var authClaims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, user.UserName),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                };

                foreach (var userRole in userRoles)
                {
                    authClaims.Add(new Claim(ClaimTypes.Role, userRole));
                }

                var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"]));

                var token = new JwtSecurityToken(
                    issuer: _configuration["JWT:ValidIssuer"],
                    audience: _configuration["JWT:ValidAudience"],
                    expires: DateTime.Now.AddHours(3),
                    claims: authClaims,
                    signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
                    );

                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token),
                    expiration = token.ValidTo
                });
            }
            return Unauthorized();
        }

        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register([FromBody] RegisterModel model)
        {
            var userExists = await userManager.FindByNameAsync(model.Username);
            if (userExists != null)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User already exists!" });

            ApplicationUser user = new ApplicationUser()
            {
                Email = model.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = model.Username
            };
            var result = await userManager.CreateAsync(user, model.Password);
            if (!result.Succeeded)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User creation failed! Please check user details and try again."  , 
                Error = result.Errors.ToArray()});

            return Ok(new Response { Status = "Success", Message = "User created successfully!" });
        }
        [HttpPost]
        [Route("register-admin")]
        public async Task<IActionResult> RegisterAdmin([FromBody] RegisterModel model)
        {
            var userExists = await userManager.FindByNameAsync(model.Username);
            if (userExists != null)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User already exists!" });

            ApplicationUser user = new ApplicationUser()
            {
                Email = model.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = model.Username
            };
            var result = await userManager.CreateAsync(user, model.Password);
            if (!result.Succeeded)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User creation failed! Please check user details and try again." });

            if (!await roleManager.RoleExistsAsync(UserRoles.Admin))
                await roleManager.CreateAsync(new IdentityRole(UserRoles.Admin));
            if (!await roleManager.RoleExistsAsync(UserRoles.User))
                await roleManager.CreateAsync(new IdentityRole(UserRoles.User));

            if (await roleManager.RoleExistsAsync(UserRoles.Admin))
            {
                await userManager.AddToRoleAsync(user, UserRoles.Admin);
            }

            return Ok(new Response { Status = "Success", Message = "User created successfully!" });
        }
    }
}

```

:::tip Observación
- Hemos agregado tres métodos "Login", "Register" y "RegisterAdmin" dentro de la clase del controlador. Register y RegisterAdmin son casi iguales, pero el método de RegisterAdmin se utilizará para crear un usuario con función de administrador. En el método de inicio de sesión, hemos devuelto un token JWT después de iniciar sesión correctamente.

:::

#### 10- Configurar servicios
- Agregamos los siguientes cambios en la clase “Progam” para añadir servicios y que las instancias de clases se generen en el constructor del controlador y de los servicios (si es necesario):


```csharp
using Ejemplo.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("ConnStr")));

builder.Services.AddIdentity<ApplicationUser, IdentityRole>()
              .AddEntityFrameworkStores<ApplicationDbContext>()
              .AddDefaultTokenProviders();
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
})
    .AddJwtBearer(options =>
    {
        options.SaveToken = true;
        options.RequireHttpsMetadata = false;
        options.TokenValidationParameters = new TokenValidationParameters()
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidAudience = builder.Configuration["JWT:ValidAudience"],
            ValidIssuer = builder.Configuration["JWT:ValidIssuer"],
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["JWT:Secret"]))
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

:::warning
- Si invertirnos el orden de las siguientes lineas, puede generarse un conflicto:
```csharp
app.UseAuthentication();
app.UseAuthorization();
```
:::


#### 11- Controlador WeatherForecast
- Podemos agregar el atributo "Authorize" dentro del controlador "WeatherForecast":


```csharp
  [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

```

:::tip Observación
- Para usar todos los endpoint del controlador, debemos estar autorizados.
:::

#### 12- Crear BD
- Debemos crear una base de datos y las tablas requeridas antes de ejecutar la aplicación. Para esto debemos ejecutar una emigración.
- En la consola de administrador de paquetes, ejecutamos los siguientes comandos:

```powershell
add-migration Initial
update-database

```

- Si verificas la base de datos en SQL Server, puedes ver que las siguientes tablas se crearon en la base de datos:


![Tablas](https://www.c-sharpcorner.com/article/jwt-authentication-and-authorization-in-net-6-0-with-identity-framework/Images/04%20Identity%20Framework.png)


- El framework de identidad utiliza las siete tablas anteriores para gestionar la autenticación y la autorización.

#### 13- Probamos
- Ahora si ejecutamos la aplicación y intentamos acceder al método get del controlador WeatherForecast obtendremos un 401.

:::tip
- A la petición la podés hacer por swagger o por postman.
- Como conseguir la URL en swagger para realizar la petición en postman:
   - En el apartado de “Request URL” al realizar la petición (la URL está completa).
   - Alado del verbo HTTP (No especifica el puerto ni el dominio).

:::


![Error](https://www.c-sharpcorner.com/article/jwt-authentication-and-authorization-in-net-6-0-with-identity-framework/Images/GETPOSTMAN_.jpg)


- Hemos recibido un error 401 no autorizado. Porque hemos agregado el atributo Authorize a todo el controlador. Debemos proporcionar un token válido a través del encabezado de la solicitud para acceder a este controlador y a los métodos dentro del controlador.
- Podemos crear un nuevo usuario haciendo una petición a http://localhost:5222/api/Authenticate/register con el siguiente body en json:


```json
{
  "username": "usuario",
  "email": "usuario@gmail.com",
  "password": "Password@2023"
}

```


:::tip
- Al usar identity , por defecto viene con un conjunto de validaciones para la contraseña. Por ejemplo: Al menos una letra debe estar en mayúscula.
- [Lista de validaciones](https://learn.microsoft.com/es-es/dotnet/api/microsoft.aspnetcore.identity.identityerrordescriber?view=aspnetcore-7.0) (las que dicen “es necesaria para la directiva de contraseñas” son las que viene por defecto”). 
:::


- Podemos usar las credenciales de usuario anteriores para iniciar sesión y obtener un token JWT válido.
- Para esto, hacemos una petición a http://localhost:5222/api/Authenticate/login con el siguiente body:


```json
{
  "username": "usuario",
  "password": "Password@2023"
}

```
- Recibimos un token después de iniciar sesión correctamente con las credenciales anteriores.
- Podemos pasar el valor del token en la pestaña de autorización de postman (el type debe ser Bearer Token) y llamar nuevamente al método get del controlador WeatherForecast.

![resultado](https://www.c-sharpcorner.com/article/jwt-authentication-and-authorization-in-net-6-0-with-identity-framework/Images/PostmanFOrecast%20(1).jpg)
- Esta vez, hemos recibido correctamente los valores del controlador.


#### 14- Implementamos los roles

- Ahora modifiquemos el controlador WeatherForecast para que la autorización se base en roles:

![Roles](https://www.c-sharpcorner.com/article/jwt-authentication-and-authorization-in-net-6-0-with-identity-framework/Images/11%20Role%20based%20Roles.jpgAuthorization%20(1).png)


- Ahora, solo los usuarios con función de administrador pueden acceder a este controlador y a sus métodos.
- Podemos intentar acceder al controlador de  WeatherForecast  con el mismo token nuevamente en la herramienta Postman.


![Error](https://www.c-sharpcorner.com/article/jwt-authentication-and-authorization-in-net-6-0-with-identity-framework/Images/WeatherPostman%20(1).jpg)


- Hemos recibido un error 403 prohibido ahora. Aunque estamos pasando un token válido, no tenemos privilegios suficientes para acceder al controlador. Para acceder a este controlador, el usuario debe tener un rol de administrador. El usuario actual es un usuario normal y no tiene ningún permiso de función de administrador.
- Podemos crear un nuevo usuario con rol de administrador. Ya tenemos un método "register-admin" en el controlador de autenticación para el mismo propósito.
- Hacemos una petición post a http://localhost:5222/api/Authenticate/register-admin con el siguiente body:


```json
{
  "username": "usuarioAdministrador",
  "email": "administrador@gmail.com",
  "password": "Password@2023"
}

```

- Hacemos el login con este usuario y intentamos acceder al controlador WeatherForecast:

![Respuesta](https://www.c-sharpcorner.com/article/jwt-authentication-and-authorization-in-net-6-0-with-identity-framework/Images/PostmanHEader%20(1).jpg)


- Nuevamente hemos recibido exitosamente los valores del controlador WeatherForecast.


:::tip
- Podemos ver la información del token y otros detalles utilizando el sitio [jwt.io](https://jwt.io/).

:::


## Explicación de Identity 
- El DbContext  que creamos en el [paso 5](#5--dbcontext) se utilizara para crear la BD que gestiona los usuarios y sus roles. Se diferencia de los dbcontext anteriores ya que este se crea mediante Identity. El parametro de tipo generico de IdentityDbContext es una clase que hereda de IdentityUser.
- En el [paso 10](#10--configurar-servicios) , configuramos Identity a traves del siguiente código:

```csharp
builder.Services.AddIdentity<ApplicationUser, IdentityRole>()
              .AddEntityFrameworkStores<ApplicationDbContext>()
              .AddDefaultTokenProviders();
```
- Con el código anterior podemos [inyectar como depedencia en el controlador del paso 9](#9--controlador) , los siguientes servicios:


```csharp
  private readonly UserManager<ApplicationUser> userManager;
        private readonly RoleManager<IdentityRole> roleManager;
   
```

:::tip 
- Con este framework , inyectamos clases como dependencias y no "interfaces".
:::

- RoleManager sirve para administrar los roles y trabaja con la BD que creamos. 
- UserManager sirve para administrar los usuarios y trabaja con la BD que creamos.