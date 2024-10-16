---
sidebar_position: 12
---
# API con .NET Core

## Teoria
#### ¿Qué es una API?
- Significa interfaz de progamación de aplicaciones.
- Permite que varias aplicaciones puedan comunicarse entre sí.
- Es responsable de obtener una solicitud del cliente y luego enviarle una respuesta en función de la solicitud.
- El cliente puede ser una aplicación web, de Windows, linux, móvil, etc.
- Puede haber múltiples solicitudes/respuestas entre un cliente y la API.

#### ¿Cómo funciona HTTP?
- Cuando navegamos a un sitio web, hacemos una solicitud a un servidor.
- El servidor nos devuelve una respuesta (la página web que solicitamos ver).
- El servidor no tiene estado (no guarda cosas), solo se encarga de procesar solicitudes y devolver respuestas.

#### Solicitud
- Es un documento de texto.
- Tiene tres datos:
   - Verbo: Contiene la acción que debe realizar el servidor.
   - Encabezado: Tiene información sobre la solicitud.
   - El Contenido: Es opcional y contiene toda la información que necesita el servidor para realizar la acción.
- El servidor puede procesar o rechazar el documento de texto.
#### Respuesta
- Contiene tres elementos: Código de estado, encabezado y contenido. 
- Código de estado: Define si se realizó con éxito lo que se quería hacer o si por alguna razón fallo. 
#### Objeto Request
- Es la solicitud.
#### 1- Verbo
- Son acciones o verbos HTTP.
- Define cual es la acción que debe suceder.
- Ejemplos:
  - GET: Obtener alguna información del servidor.
  - POST: Crear información.
  - PUT: Actualizar información.
  - PATCH: Actualizar una parte de la información.
  - DELETE: Eliminar información.
  - Más verbos…
#### 2- Encabezado
- Son un conjunto de pares (clave-valor) que son metadatos sobre la solicitud.
- Ejemplos:
   - Content Type: Define cual es el tipo de contenido de la solicitud. Es json , binario , xml , etc.
   - Content Lenght: Es el tamaño del contenido.
   - Authorization: ¿Quién esta haciendo el Request? Aca se suele poner el token para autenticarse.
   - Accept: Define que tipo de solicitud es aceptable. Puede ser json , xml , etc.
   - Mas encabezados….
- Tambien puedes definir tus propios encabezados.

#### 3- Contenido
- Es un campo opcional.
- Aca se ubica el contenido que el servidor requerirá para completar la solicitud.
- Cuando se utiliza GET, este campo no se utiliza.



#### Objeto Response
- Es la respuesta.

#### 1- Código de estado
- Es un número que representa lo que se hizo en el servidor:
  - 100-199: Es informativo.
  - 200-299: La solicitud se completó con éxito:
    - 200: Todo se hizo según lo solicitado.
    - 201: Se creo algo con éxito.
    - 204: Sin contenido (Es comun cuando actualizamos algo y no queremos pasarle el registro actualizado, solo decirle que se actualizo).
  - 300-399: Se usa con redirección.
  - 400-499: Hay un error en la solicitud que se envio.
     - 400: Solicitud incorrecta.
     - 404: Recurso no encontrado.
  -   500-599: Hay un error en el servidor.
       - 500: Hay un error interno del servidor.

#### 2- Encabezado
- Contiene metadatos sobre la respuesta.
- Ejemplos:
   - Content-Type : Tipo de contenido.
   - Content-Lenght : Tamaño del contenido.
   - Expires: Cuando es invalido.
   - Más encabezados…

#### 3- Contenido
- Esto puede contener HTML, CSS, XML, JSON, Blobs, etc. Lo que sea que el servidor tenga que enviar en el contenido para completar la solicitud.
- Aca se suele guardar la  respuesta del servidor.

#### Diferencias
- Ambos tienen encabezado y contenido.
- La solicitud tiene un verbo y la respuesta tiene un código de estado.

## Controlador (Teoria)
- En el contexto de una API (Application Programming Interface), un controlador (también conocido como controller) es un componente que se encarga de manejar las solicitudes entrantes y enviar respuestas correspondientes.
- Un controlador en una API es responsable de:
    - Recibir solicitudes: El controlador recibe solicitudes HTTP (como GET, POST, PUT, DELETE, etc.) desde la aplicación cliente.
    - Procesar solicitudes: El controlador procesa la solicitud, verifica la autenticación y autorización, y llama a los métodos necesarios para obtener o modificar los datos.
    - Llamar a servicios o modelos: El controlador llama a servicios o modelos para obtener o modificar los datos necesarios para procesar la solicitud.
    - Devolver respuestas: El controlador devuelve una respuesta HTTP correspondiente a la solicitud, que puede incluir datos en formato JSON, XML, etc.
- Un controlador en una API se encarga de:
    - Autenticar y autorizar solicitudes
    - Validar datos de entrada
    - Llamar a servicios o modelos para obtener o modificar datos
    - Manejar errores y excepciones
    - Devolver respuestas HTTP
- En una API, los controladores son fragmentos de código que se encargan de gestionar tareas específicas. Por ejemplo, en una API para una tienda en línea, podrías tener controladores para:
    - Manejar pedidos (ordenar, cancelar, obtener detalles)
    - Manejar productos (crear, leer, actualizar, eliminar)
    - Manejar usuarios (autenticar, registrar, obtener perfil)
- Entonces, por lo general se crea un controlador por cada entidad (tabla en la base de datos).

## DTO (teoria)
- Un DTO (Data Transfer Object) es un objeto que se utiliza para transferir datos entre diferentes partes de un sistema, como entre una capa de presentación y una capa de negocio, o entre un cliente y un servidor.
- Un DTO es un objeto que contiene solo los datos necesarios para una operación específica, sin incluir lógica de negocio ni comportamiento. Su propósito es transportar los datos de una parte del sistema a otra, sin procesarlos ni modificarlos.
- Los DTOs se utilizan comúnmente en aplicaciones que siguen el patrón de diseño de arquitectura en capas, como por ejemplo:
    - En una aplicación web, un DTO puede ser utilizado para transferir datos desde el servidor al cliente, como por ejemplo, una lista de productos.
    - En una aplicación de negocio, un DTO puede ser utilizado para transferir datos entre diferentes capas de la aplicación, como por ejemplo, desde la capa de presentación hasta la capa de negocio.
- Los DTOs tienen varias ventajas, como:
    - Simplifican la comunicación entre diferentes partes del sistema, ya que solo se necesitan transferir los datos necesarios.
    - Reducen la complejidad de la lógica de negocio, ya que la lógica se encuentra separada de los datos.
    - Mejoran la escalabilidad y el rendimiento, ya que los datos se pueden transferir de manera eficiente.
- No es necesario crear un DTO específico para cada operación (crear, modificar, eliminar). Un solo DTO puede ser utilizado para representar los datos necesarios para cualquiera de estas operaciones. Sin embargo en algunos casos, puede ser útil crear diferentes DTOs para cada operación, especialmente si los datos necesarios para cada operación son diferentes. Por ejemplo, un DTO para crear un nuevo recurso puede requerir diferentes datos que un DTO para actualizar un recurso existente.
## Swagger
- Swagger es una herramienta que genera automáticamente la documentación de una API RESTful para tu aplicación. Su principal ventaja es que te permite no solo consultar todos los endpoints de la aplicación, sino también probarlos inmediatamente enviando una solicitud y recibiendo una respuesta.
- Con Swagger, puedes acceder a una lista de endpoints disponibles y sus métodos asociados. Algunas solicitudes solo están disponibles para grupos de usuarios autorizados, y un Token de Bearer puede ser necesario para acceder a ellas.
- Ventajas de utilizar Swagger:
    - Documentación automática: Swagger genera la documentación de la API de manera automática, lo que ahorra tiempo y esfuerzo.
    - Pruebas interactivas: Permite probar los endpoints de la API de manera interactiva, lo que facilita la depuración y el desarrollo.
    - Acceso fácil: Proporciona una interfaz fácil de usar para acceder a la documentación de la API y probar los endpoints.
- Por lo general la plantilla de ASP.NET Core te crea y configura swagger de manera automática.
- [Documentación](https://swagger.io/)



## Empezamos a desarrollar

#### Progamas requeridos
- Requisitos:
   -  Visual studio.
   -  .NET 7.0.
   -  Microsoft sql server – versión desarrolladora (instalar SSMS).
   - Git.


:::tip
- Podemos verificar la versión en la consola con el comando dotnet --version         

:::

#### En SQL Server Management Studio
- En Server Name: localhost (es el nombre con el que se instaló).
- Authentication: Windows Authentication.
- Hacemos click en Connect.


#### Visual Studio
1. Nuevo proyecto.
2. En los filtros: C# -- Todas las plataformas – Web.
3. Seleccionamos la plantilla ASP.NET Core Web API:
   - Nombre del proyecto: MiApp_API.
   - Nombre de la solución: MiApp.
   - Desmarcar la opcion “Colocar  solución y proyecto en el mismo directorio”.
   - Framework: .Net 7.0.
   - Autenticacion: Ninguna (Luego lo vamos a hacer nosotros).
   - Marcamos la opcion “Usar controladores”.
4. Y creamos el proyecto.
:::tip
Una solución es un contenedor donde pueden ir uno o varios proyectos.
:::

#### MiApp_API
- En el archivo con el nombre del proyecto, en este caso MiApp_API ,  podemos ver la versión ,  paquetes , etc.

#### Control de versiones
- Para controlar los cambios vamos a usar git  y github.
1. Hay que registrar un usuario y email en git.
2. Creamos un repositorio en github.
3. En visual studio , click derecho en el nombre de la solución – Abrir en terminal.
4. En la terminal ingresamos los comandos que nos aparece al crear el repositorio de Github:

```powershell
Git init
Git add .
Git commit -m “Creacion Proyecto”
git branch -M main
git remote add origin XX 
git push -u origin main
```

:::tip
- MiApp.sln es el nombre de la solución y cada directorio es un proyecto.

:::

:::tip
- [Mas información sobre git/github](https://fedeleva.github.io/documentacion/docs/Git/github) 

:::


#### Código Clean Up
- Eliminamos el controlador que se generó como ejemplo:
   -	Controllers/WeatherForecastController.cs
   -	WeatherForecast.cs
- Lo que queda del proyecto, son los archivos/carpetas esenciales.
- Carpeta controllers: Es donde vamos a crear controladores con sus endpoints (url).
- Clase Progam.cs : Es donde creamos los servicios.


## Clase Controlador
1. Click derecho en la carpeta Controllers – Agregar – Controlador. 
2. Creamos un Controlador de API en blanco:
3. Le damos un nombre: VillaController.cs
4. Hacemos click en “agregar”.


:::tip
- El nombre debe terminar con la palabra "Controller".
:::

- El archivo quedaría:

```csharp
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MiApp_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VillaController : ControllerBase
    {
    }
}

```

:::tip Observación
- Es una clase que hereda de ControllerBase , que hace que sea una clase de tipo controlador.
- Tiene el atributo “[ApiController]” que identifica el tipo de controlador, en este caso de API.
- Luego la línea “[Route("api/[controller]")]” nos especifica la ruta del controlador.
   - controller representa el nombre del controlador.
   - El nombre de la clase  sin la palabra Controller es el nombre del controlador.


:::


## Primer Endpoint (url)
- Una API normalmente gestiona solicitudes.
- Un modelo contiene los “datos” que manejaría una Base de datos.
- En el proyecto, creamos la carpeta Modelos y adentro una Clase llamada Villa.
- La clase quedaría asi:

```csharp
namespace MiApp_API.Modelos
{
    public class Villa
    {
        public int Id { get; set; }
        public string Nombre { get; set; }

    }
}

```
:::tip tip
- Escribiendo prop y dándole dos veces a tab, nos genera la sintaxis para crear una propiedad.

:::

- En el controlador:


```csharp
using MiApp_API.Modelos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MiApp_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VillaController : ControllerBase
    {
        public IEnumerable<Villa> GetVillas()
        {
            return new List<Villa>
            {
                new Villa{Id=1, Nombre="Vista a la Piscina"},
                new Villa{Id=2, Nombre = "Vista a la Playa"}
            };
        }
    }
}

```

:::tip Observación
- Creamos un [Endpoint](../Node/extra02.md#endpoint).
- Cada método dentro de una clase que representa un controlador es un endpoint.
- Lo que devuelve el método es la "respuesta" de la "petición" (por lo general .NET lo añade al body). Por lo tanto cada método se encarga de gestionar una petición.
- Como es un metodo Get , el nombre del  metodo arranca con “Get”.
:::

#### Iniciamos
1. Hacemos click en Iniciar https.
2. Nos abre el navegador (sin HTTPS, entra igual), con un error.


- El error nos indica que nuestra API no está documentada.
- Cada “Endpoint (método como el anterior)” debe especificar qué acción hace.
- Esto se realiza con un atributo  [HttpVERBO]:


```csharp
     [HttpGet]
        public IEnumerable<Villa> GetVillas()
        {
            return new List<Villa>
            {
                new Villa{Id=1, Nombre="Vista a la Piscina"},
                new Villa{Id=2, Nombre = "Vista a la Playa"}
            };
        }

```

:::tip Observación
- Especificamos que es una acción Get (obtener información).
- Por defecto , si no especificamos ningún parámetro en el atributo [HttpVERBO] , se utiliza la ruta del controlador para ejecutar (enviar una solicitud) el “endpoint”.



:::

#### Iniciamos de nuevo
1. Iniciamos de nueva la aplicación.
2. En el navegador podemos ver nuestros endpoints (url).
3. Hacemos click en /api/Villa – Try it out – Execute
4. Nos devolvería la información que especificamos en el método GET.


:::tip Endpoint
- Un endpoint es una dirección(URL) de una API , que se encarga de dar respuesta a una solicitud.
- Las solicitudes las hacemos a través de URLs que son llamadas endpoint.
- El servidor procesa la solicitud que enviaste por la url y luego te devuelve una respuesta.
:::


:::tip 
- Cuando ingresas a una página en el navegador, estas haciendo una petición GET.
- En .Net un endpoint es un método.
- En la documentacion de Microsoft , un endpoint suele llamarse “acción”.


:::


## Agregar Dto
- Las clases DTO especifican que información debe ser “expuesta” al usuario.
- Los controladores(endpoints) deben devolver instanciar de las clases DTO y NO de los modelos.
- Creamos una carpeta llamada Dto en Modelos y en esta carpeta creamos la clase VillaDto.
- En Modelos/Villa.cs:


```csharp
namespace MiApp_API.Modelos
{
    public class Villa
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public DateTime FechaCreacion { get; set; }

    }
}

```
- En Modelos/Dto/VillaDto.cs:

```csharp
namespace MiApp_API.Modelos.Dto
{
    public class VillaDto
    {
        public int Id { get; set; }
        public String Nombre { get; set; }
    }
}

```


- En el controller:

```csharp
using MiApp_API.Modelos;
using MiApp_API.Modelos.Dto;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MiApp_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VillaController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<VillaDto> GetVillas()
        {
            return new List<VillaDto>
            {
                new VillaDto{Id=1, Nombre="Vista a la Piscina"},
                new VillaDto{Id=2, Nombre = "Vista a la Playa"}
            };
        }
    }
}

```

:::tip Observación
- La API solo devolverá la id y el Nombre, la fecha de creación NO.


:::


## Store Villa
- Una API generalmente usa una Base de datos.
- Todavia no usaremos una base de dato, por eso creamos datos ficticios en un “store”.
- En el proyecto, creamos una carpeta llamada Datos. Adentro de la carpeta creamos la clase VillaStore:

```csharp
using MiApp_API.Modelos.Dto;


namespace MiApp_API.Datos
{
    public static class VillaStore
    {
        public static List<VillaDto> villaList = new List<VillaDto> {
            new VillaDto{Id = 1 ,  Nombre = "Vista a la Piscina" },
             new VillaDto{Id = 2 , Nombre = "Vista a la Playa"}
        };
    }
}

```
- En nuestro controlador:

```csharp
using MiApp_API.Datos;
using MiApp_API.Modelos;
using MiApp_API.Modelos.Dto;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MiApp_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VillaController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<VillaDto> GetVillas()
        {
            return VillaStore.villaList;
        }
    }
}

```

## Obtener una villa por Id (query)

- Vamos a crear otro endpoint que nos permita conseguir una villa por la ID.
- En el controller:

```csharp
using MiApp_API.Datos;
using MiApp_API.Modelos;
using MiApp_API.Modelos.Dto;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MiApp_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VillaController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<VillaDto> GetVillas()
        {
            return VillaStore.villaList;
        }

        [HttpGet]
        public VillaDto GetVilla(int id)
        {
            return VillaStore.villaList.FirstOrDefault(v => v.Id == id);
        }
    }

  
}

```

#### Al ejecutarlo, nos tira un error.
- El error se debe a que tenemos dos endpoints (métodos) que apuntan a la misma url y tienen el mismo verbo (Get).
- Para solucionar esto debemos distinguirlos.  Para esto vamos a especificar una nueva URL para  el nuevo endpoint (el que creamos recien)  y al mismo tiempo decirle que espera recibir una "id" en la query:



```csharp
    [HttpGet("id")]
    public VillaDto GetVilla([FromQuery]  int id)
    {
        return VillaStore.villaList.FirstOrDefault(v => v.Id == id);
    }

```
:::tip Observación
- El parámetro del atributo [HttpGet] especifica la URL del endpoint, y esta siempre se concatena con la URL definida en el atributo [Route] del controlador o en la ruta configurada globalmente en ASP.NET Core.
- Entonces para acceder a un endpoint con [HttpGet(“AA/BB/….”) , se utilizara la ruta /api/nombreController/AA/BB/….
- Esto lo puede aplicar con el resto de atributos [HttpVERBO].
- [FromQuery]  Indica que el valor del argumento  se obtiene de la query. En este ejemplo, se espera que el parámetro id se reciba como parte de la query string de la URL en la forma ?id=X.
:::


#### Lo ejecutamos y probamos con querys.


:::tip query
- El query es una “variable” de la url que contiene un valor. Es el parámetro que se le pasa al método.
- Las query van despues del signo “?”.
- Ejemplo:
   - Si entramos a la url: https://localhost:7277/api/Villa/id?id=1
   - El valor de id es 1
   - Si entramos a la url: https://localhost:7277/api/Villa/id?id=2
   - El valor de id es 2
:::




## Código de estado

- Vamos a utilizar ActionResult&lt;T>:

```csharp
    public ActionResult<IEnumerable<VillaDto>> GetVillas()
        {
            return VillaStore.villaList;
        }

```

#### Devolver código de estado 200
- Con ActionResult&lt;T> podemos devolver múltiples cosas (el objeto que especificamos en el tipo de dato genérico de ActionResult y el código de estado, por ejemplo):


```csharp
     [HttpGet]
        public ActionResult<IEnumerable<VillaDto>> GetVillas()
        {

            return Ok(VillaStore.villaList); 
        }

```

:::tip Observación
- Con el método Ok(valor), devolvemos un código de estado 200 y el valor (en el contenido de la respuesta) al usuario que realizo la petición.

:::

- Realizamos lo mismo con el otro:


```csharp
   [HttpGet("id:int")]
        public ActionResult<VillaDto> GetVilla(int id)
        {
            return Ok(VillaStore.villaList.FirstOrDefault(v => v.Id == id));
           
        }

```

#### Devolvemos múltiples códigos de estado


```csharp
  [HttpGet("id:int")]
        public ActionResult<VillaDto> GetVilla(int id)
        {
            if (id==0)
            {
                return BadRequest();
            }

            var villa = VillaStore.villaList.FirstOrDefault(v => v.Id == id);
            if (villa == null)
            {
                return NotFound();
            }

            return Ok(villa);
           
        }

```
:::tip Observación
- BadRequest() devuelve el código de estado 400.
- NotFound() devuelve el código de estado 404.



:::


:::tip info
- [Controller action return types in ASP.NET Core web API](https://learn.microsoft.com/en-us/aspnet/core/web-api/action-return-types?view=aspnetcore-7.0)

:::


## Tipos de respuesta
- Con el atributo ProducesResponseType “documentamos” que respuestas nos puede devolver el servidor cuando hacemos una solicitud a un endpoint.
- Con [ProducesResponseType(código_de_estado)] estamos especificando que nos puede devolver ese código de estado:


```csharp
[HttpGet("id:int")]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        public ActionResult<VillaDto> GetVilla(int id)

```

- También podemos utilizar la clase estática StatusCodes que contiene constantes con todos los códigos de estado:

```csharp
[HttpGet("id:int")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<VillaDto> GetVilla(int id)

```

- Con el otro endpoint hacemos lo mismo:

```csharp
  [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public ActionResult<IEnumerable<VillaDto>> GetVillas()
```

## Verbo Post
- Vamos a utilizar el verbo POST para crear una villa.
- En el controlador:

```csharp
       [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult<VillaDto> crearVilla([FromBody] VillaDto villaDto) { 
            if (villaDto == null)
            {
                return BadRequest(villaDto);
            }
            if(villaDto.Id > 0) {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            villaDto.Id = VillaStore.villaList.OrderByDescending(v => v.Id).FirstOrDefault().Id + 1;
            VillaStore.villaList.Add(villaDto);
            return Ok(villaDto);
        }

```

:::tip Observación
- El atributo [HttpPost] especifica que es una acción POST (crea algo).
- Con el atributo [FromBody], especificamos que el argumento contiene como valor el cuerpo de la solicitud (contenido).
- BadRequest(valor) devuelve el código de estado 404 y un valor (en el contenido de la respuesta).
- StatusCode(Código_de_estado) devuelve el código de estado que le pasamos. Recibe como parametro el mismo valor que el parámetro posicional del atributo ProducesResponseType.



:::


#### Mostrar información del recurso creado
- En algunas API queremos que, al crear el recurso, te muestre la url(endpoint) para obtener la información de este.
- En pocas palabras, al crear un recurso, debemos retornar la información de este para que el usuario sepa que cosa se creó.
- Para esto utilizamos el método CreatedAtRoute(nombre , argumentos_para_el_metodo_endpoint, el contenido) :
  - nombre: Nombre de la ruta (del método que representa un endpoint). El nombre se define mediante el atributo HttpGet.
  - Argumentos_para_el_metodo_endpoint: Los datos que se piden como parámetros para el método que maneja el “endpoint” que corresponde al nombre.
  - Contenido: El “formato” que debe tener el contenido de la respuesta.
- Entonces en el código:


```csharp
     [HttpGet("id:int" , Name ="GetVilla")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<VillaDto> GetVilla(int id)
        {
            if (id==0)
            {
                return BadRequest();
            }

            var villa = VillaStore.villaList.FirstOrDefault(v => v.Id == id);
            if (villa == null)
            {
                return NotFound();
            }

            return Ok(villa);
           
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult<VillaDto> crearVilla([FromBody] VillaDto villaDto) { 
            if (villaDto == null)
            {
                return BadRequest(villaDto);
            }
            if(villaDto.Id > 0) {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            villaDto.Id = VillaStore.villaList.OrderByDescending(v => v.Id).FirstOrDefault().Id + 1;
            VillaStore.villaList.Add(villaDto);
           return CreatedAtRoute("GetVilla" , new {id= villaDto.Id } , villaDto);
        }

```


:::tip Observación
- En el método GetVilla tenemos el atributo HttpGet ,el cual le añadimos un parámetro nombrado llamado Name . El valor puede ser cualquier String.
- El valor del parámetro Name es el valor del primer parámetro del método CreatedAtRoute. A través de este método:
   - Generamos un código de estado 201.
   - Llamamos al endpoint (método) , que especificamos en el primer parámetro, a través de su nombre. Con el segundo parámetro les pasamos los parámetros al método a través de un objeto anónimo y por último con el tercer parámetro le decimos que información queremos devolverle en el contenido de la respuesta a través de un objeto.
   - Lo que de verdad hace: Utiliza el primer y segundo parámetro para especificar que endpoint(método) se usa para obtener la información del recurso que se creó (esta información está en la propiedad  “location” en el encabezado) y utiliza el tercer parámetro para mostrarle información al usuario a través del contenido(body) de la respuesta.
:::


## Validaciones ModelState
- Podemos utilizar atributos en la clase Dto para hacer validaciones.
- Por ejemplo:


```csharp
using System.ComponentModel.DataAnnotations;

namespace MiApp_API.Modelos.Dto
{
    public class VillaDto
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(30)]
        public String Nombre { get; set; }
    }
}

```

:::tip Observación
- Los atributos para validar, son del namespace DataAnnotations.
- La propiedad nombre es Obligatoria y como máximo tiene 30 caracteres.
:::



- En el controller podemos controlar si se cumplieron las validaciones:


```csharp
[HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult<VillaDto> crearVilla([FromBody] VillaDto villaDto) { 

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (villaDto == null)
            {
                return BadRequest(villaDto);
            }
            if(villaDto.Id > 0) {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            villaDto.Id = VillaStore.villaList.OrderByDescending(v => v.Id).FirstOrDefault().Id + 1;
            VillaStore.villaList.Add(villaDto);
           return CreatedAtRoute("GetVilla" , new {id= villaDto.Id } , villaDto);
        }

```

:::tip Observación
- ModelState.IsValid Devuelve true si se cumplen las validaciones. En caso contrario false.
- ModelState viene de ControllerBase
:::

#### Validaciones personalizadas 

```csharp
public ActionResult<VillaDto> crearVilla([FromBody] VillaDto villaDto) { 

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (VillaStore.villaList.FirstOrDefault(v => v.Nombre.ToLower() == villaDto.Nombre.ToLower()) != null)
            {
                ModelState.AddModelError("NombreExiste", "La villa con ese nombre ya existe");
                 return BadRequest(ModelState);
            }

            if (villaDto == null)
            {
                return BadRequest(villaDto);
            }
            if(villaDto.Id > 0) {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            villaDto.Id = VillaStore.villaList.OrderByDescending(v => v.Id).FirstOrDefault().Id + 1;
            VillaStore.villaList.Add(villaDto);
           return CreatedAtRoute("GetVilla" , new {id= villaDto.Id } , villaDto);
        }

```

:::tip Observación
- Usamos el metodo ModelState.AddModelError(“NombreValidación” , “Mensaje”) para crear un “error de validación” en el modelo de validaciones(ModelState) que contiene el endpoint (método).
:::

## Verbo Delete (params)
- Con el verbo delete podemos eliminar un recurso.
- En el controlador:

```csharp

       [HttpDelete("{id:int}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult DeleteVilla(int id)
        {
            if (id == 0)
            {
                return BadRequest();
            }

            var villa = VillaStore.villaList.FirstOrDefault(v => v.Id == id);
            if (villa == null)
            {
                return NotFound();
            }

            VillaStore.villaList.Remove(villa);
            return NoContent();
        }


```

:::tip Observación
- En este caso utilizamos IActionResult porque no necesitamos retornar/devolver el modelo/Dto (una instancia de la clase).
- Usamos el atributo [HttpDelete("{id:int}")] para indicar que va a recibir una “id” en la url  como parámetro(params) de tipo int y no como query.  Si usamos las llaves ({}) es porque es una parte de la url dinámica (params).
- El método NoContent() devuelve el código de estado 204 (El servidor procesó con éxito la solicitud del cliente pero no necesita devolver ningún contenido).
:::

#### Lo ejecutamos y probamos con params (parámetros).


:::tip Parametro
- Es una “variable” que se ubica en la URL. No es lo mismo que las query (Se ubican después del signo “?”).
- Lo que se define entre llaves {} en el parametro posicional de los atributos HttpVERBO son los params (parámetros) de la url.
- A su vez podemos [especificar el tipo de dato](https://learn.microsoft.com/en-us/aspnet/web-api/overview/web-api-routing-and-actions/attribute-routing-in-web-api-2#route-constraints) de un param con la sintaxis : {nombreParam: tipoDeDato}
- Estos se pueden utilizar en todos los atributos que representen un verbo.
- Ejemplo:
   - [HttpGet("{nombrevariable}"]
   - la ruta es /api/nombreController/nombrevariable
   - Entonces si vamos a /api/nombreController/620a5b245908e57941d2954c
   - El valor de nombrevariable es 620a5b245908e57941d2954c



:::


## Verbo Put
- Es un verbo para actualizar un registro entero. Si solo queremos actualizar una o varias propiedades (pero no todas) de un objeto usamos el verbo patch.
- Para esto, añadimos más información en la claseDto:


```csharp
using System.ComponentModel.DataAnnotations;

namespace MiApp_API.Modelos.Dto
{
    public class VillaDto
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(30)]
        public String Nombre { get; set; }
        public int Ocupantes { get; set; }
        public int MetrosCuadrados { get; set; }
    }
}

```

- Modificamos el VillaStore:

```csharp
using MiApp_API.Modelos.Dto;


namespace MiApp_API.Datos
{
    public static class VillaStore
    {
        public static List<VillaDto> villaList = new List<VillaDto> {
            new VillaDto{Id = 1 ,  Nombre = "Vista a la Piscina"  , Ocupantes = 3 , MetrosCuadrados = 50},
             new VillaDto{Id = 2 , Nombre = "Vista a la Playa" , Ocupantes = 4 , MetrosCuadrados = 80}
        };
    }
}

```
- En el controlador:
```js
    [HttpPut ("{id:int}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult UpdateVilla(int id , [FromBody] VillaDto villaDto)
        {
            if (villaDto == null || id!= villaDto.Id)
            {
                return BadRequest();
            }
            var villa = VillaStore.villaList.FirstOrDefault(v => v.Id == id);
            villa.Nombre = villaDto.Nombre;
            villa.Ocupantes = villaDto.Ocupantes;
            villa.MetrosCuadrados = villaDto.MetrosCuadrados;
            return NoContent();
        }

```

## Verbo Patch
- Con el verbo patch actualizamos una o varias propiedades (no todas) de un objeto.

#### Herramienta

- Utilizaremos la herramienta [Json Patch](https://jsonpatch.com/).


:::tip info
- [JsonPatch in ASP.NET Core web API](https://learn.microsoft.com/en-us/aspnet/core/web-api/jsonpatch?view=aspnetcore-7.0)


:::

#### Instalación
1. En Visual studio:  Herramienta – Administracion de paquetes Nuget – Administrar paquetes Nuget Para la solución -- Examinar.
2. Buscamos los siguientes paquetes y los instalamos en el proyecto con la misma versión que estamos trabajando (7.0.0):
   - Microsoft.AspNetCore.JsonPatch
   - Microsoft.AspNetCore.Mvc.NewtonsoftJson

:::tip Nuget
- NuGet es un gestor de paquetes(dependencias/módulos/funcionalidades/plugin/paquetes) diseñado para permitir a los desarrolladores compartir código reutilizable. 
- Los paquetes de NuGet son unidades de código reutilizable que otros desarrolladores ponen a tu disposición para que los use en tus proyectos. 
- Básicamente sirven para “importar una funcionalidad que otro Desarollador creo”.
:::

#### Configuramos los servicios

- Vamos a la clase Progam.cs que es donde configuramos los servicios:


```csharp
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers().AddNewtonsoftJson();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

```

:::tip Observación
- Solo le añadimos “.AddNewtonsoftJson();”
- Con esa línea, ya añadimos el servicio que descargamos al proyecto (API).
:::


#### Lo implementamos
- En el controlador:

```csharp
        [HttpPatch("{id:int}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult UpdatePartialVilla(int id, JsonPatchDocument<VillaDto> patchDto)
        {
            if (patchDto == null || id == 0)
            {
                return BadRequest();
            }
            var villa = VillaStore.villaList.FirstOrDefault(v => v.Id == id);
            patchDto.ApplyTo(villa , ModelState);

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            return NoContent();
        }

```

:::tip Observación
- Es lo mismo que put, pero con algunas diferencias.
- JsonPatchDocument tiene como parámetro de tipo generico la clase DTO que se va a utilizar (esta va a contener los nuevos datos).
- patchDto.ApplyTo recibe dos parámetros:
   - El Modelo (una instancia de la clase DTO): El objeto que se va a modificar.
   - El ModelState : Te permite recibir mensajes de error en la respuesta. (Es opcional).
:::

#### Al ejecutarlo

- En el body(contenido) se debe enviar los siguientes datos de esta forma:


```json
[
  {
    "operationType": 0,
    "path": "string",
    "op": "string",
    "from": "string",
    "value": "string"
  }
]

```

- operationType (opcional si utiliza la opcion “op”) : Se utiliza para especificar que acción se quiere hacer. Recibe como valor el numero que corresponde a un [Enum](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.jsonpatch.operations.operationtype?view=aspnetcore-7.0).
- path: Especifica que valor debe ser modificado. La sintaxis es como si fuera la ubicación de un archivo. Ejemplo: Para la propiedad name se usa /name.
- Op (opcional si utiliza la opcion “operationType”): Se utiliza para especificar que acción se quiere hacer.
- from: Se utiliza para copiar/mover un archivo. Especifica “donde” se va a copiar/mover el elemento.
- Value: Se utiliza para remplazar un elemento o comprobar si existe. Especifica el “elemento nuevo” o el “elemento” que queremos saber si existe.


- Entonces una petición de prueba para remplazar el valor de la propiedad Nombre:


```json
[
  {
    "path": "/nombre",
    "op": "replace",
    "value": "Nueva villa"
  }
]

```

:::tip Observación
- El path no es sensible a mayúscula/minúscula.

:::

- Podemos hacer lo mismo con este body(contenido) también:


```json

[
  {
    "operationType": 2,
    "path": "/nombre",
    "value": "Nueva villa"
  }
]

```

:::tip Observación
- El numero 2 corresponde a la operación Replace ([consultar documentación del Enum](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.jsonpatch.operations.operationtype?view=aspnetcore-7.0 )).


:::

## Logger - inyección de dependencia
- Logger sirve para mostrar mensajes en la consola.
- En .Net Core, logger está incluido por defecto en la consola de windows.
- Logger está registrado(instalado) dentro del “builder” (Lo que se genera al compilar la aplicación) cuando la aplicación se construye (compila), por lo cual se puede utilizar en la aplicación.
- En el archivo appsetting.json:

```csharp
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*"
}

```
:::tip Observación
- Logger está registrado en “Logging”.
- Para poder utilizarlo, tenemos que inyectarlo en nuestra aplicación por medio de la inyección de dependencia.
:::


#### Inyección de dependencia
- En el controlador, creamos un campo(variable) privado de solo lectura de tipo ILogger  , el cual su parámetro de tipo genérico es el nombre de la clase del controlador:

```csharp
   private readonly ILogger<VillaController> _logger;
```

:::tip Observación
- Las variables privadas, suelen tener un guion bajo (“_”) al comienzo del nombre.
- Este campo contendrá el ILogger, el cual se le asignará en el constructor.
:::


- En el controlador, creamos un constructor:

```csharp
  public VillaController(ILogger<VillaController> logger)
        {
            _logger = logger;
        }

```

:::tip Observación
- Le asignamos el ILogger (que como dijimos antes, ya está registrado por defecto) al campo privado.
- Al ejecutarse la aplicación , se ejecuta el constructor  que creamos con los  parametros que especificamos (donde cada argumento es un servicio).
- Los argumentos de los constructores de los controladores corresponden a los servicios que utiliza nuestra App.
:::


:::tip
- Si escribimos ctor y le damos dos veces a tab, se nos generara el constructor.

:::


#### Ya lo podemos usar


- Ejemplos:

```csharp
public ActionResult<IEnumerable<VillaDto>> GetVillas()
        {
            _logger.LogInformation("Obtener las Villas");
            return Ok(VillaStore.villaList); 
        }

```
:::tip Observación
- Con LogInformation(“Mensaje”) Estamos mostrando información en la consola.

:::


```csharp
   public ActionResult<VillaDto> GetVilla(int id)
        {
            if (id==0)
            {
                _logger.LogError("Error al traer Villa con Id " + 0);
                return BadRequest();
            }

            var villa = VillaStore.villaList.FirstOrDefault(v => v.Id == id);
            if (villa == null)
            {
                return NotFound();
            }

            return Ok(villa);
           
        }

```

:::tip Observación
- Con LogError(“Mensaje”) estamos mostrando un mensaje de error en la consola.

:::


## Modelos y Base de datos
- Ahora remplazaremos el store con una base de datos para que los datos sean persistentes.
- Para trabajar con BD es necesario utilizar Entity framework core , que es un ORM  (Object Relational Mapping) que maneja las operaciones de la BD de una manera sencilla.

#### Modelos
- Un modelo es una clase que representa una tabla en la BD.
- Cada propiedad es un “atributo/columna/propiedad” de la tabla.


- Ejemplo Villa.cs:

```csharp
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MiApp_API.Modelos
{
    public class Villa
    {
        [Key]
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Detalles { get; set; }
        [Required]
        public double Tarifa { get; set; }
        public int Ocupantes { get; set; }
        public int MetrosCuadrados { get; set; }
        public string ImagenUrl { get; set; }
        public string Amenidad { get; set; }
        public DateTime FechaCreacion { get; set; }
        public DateTime FechaActualizacion { get; set; }

    }
}

```
:::tip Observación
- Con el atributo [Key] especificamos que esa propiedad es una primary key.

:::


- Modificamos el modelo “DTO”:

```csharp
using System.ComponentModel.DataAnnotations;

namespace MiApp_API.Modelos.Dto
{
    public class VillaDto
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(30)]
        public String Nombre { get; set; }
        public int Ocupantes { get; set; }
        public int MetrosCuadrados { get; set; }
        public string Detalles { get; set; }
        [Required]
        public double Tarifa { get; set; }
        public string ImagenUrl { get; set; }
        public string Amenidad { get; set; }
    }
}

```

:::tip
- El DTO no representa una tabla en la base de datos, solo contendrá la información que manejará el usuario de la aplicación.
- Contendrá los datos que podrá ver el usuario.
:::


#### Instalación de Entity Framework Core
1. Nos vamos al administrador de paquetes Nuget.
    - Los paquetes  Nuget que necesitamos son:
       - Microsoft.EntityFrameworkCore.SqlServer.
       - Microsoft.EntityFrameworkCore (Este hace referencia al motor de base de datos que estamos utilizando, en este caso SQL ).
       - Microsoft.EntityFrameworkCore.Relational.
2.  Instalamos los siguientes paquetes:
     - Microsoft.EntityFrameworkCore.SqlServer” (este viene con los otros dos incluido (fíjate en las dependencias)).
     - Microsoft.EntityFrameWorkCore.Tools (Nos ayuda a crear las tablas de la BD).



:::tip Recordatorio
- Instálalo con la versión del proyecto (7.0.0) en el proyecto.

:::

#### Nombre del servidor  SQLServer
- Para conectarnos a la base de datos necesitamos conocer el nombre del servidor de Microsoft SQL Server (el que instalamos) , para eso:
  1.  Abrimos SQL Server Management Studio
  2.  Al abrirlo nos va a aparecer el nombre del servidor (Server name)


:::tip
- Con este nombre, vamos a crear una URL/cadena de conexión que nos va a permitir conectarnos a la BD y realizar operaciones.

:::

### Atributo DatabaseGenerated

- En el modelo Villa:


```csharp
public class Villa
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Detalles { get; set; }

```
:::tip Observación
- Con el atributo [Key] el atributo es auto incremental (el valor se asigna solo, en la primera fila su valor será 1, en la segunda fila su valor será 2 y se irá incrementando de esta forma).
- También con el parámetro posicional del atributo [DatabaseGenerated] podemos especificar como se va a asignar el valor de la propiedad, en este caso lo dejamos como si fuera auto incremental (DatabaseGeneratedOption.Identity).
- DatabaseGeneratedOption Es un enum donde cada valor especifica como se va a asignar el valor de la primary key.
:::

### DbContext
#### Code First
- Code First permite que Entity Framework cree las tablas en base a los modelos que creamos.
- En la carpeta datos, creamos la clase ApplicationDbContext:


```csharp
using MiApp_API.Modelos;
using Microsoft.EntityFrameworkCore;

namespace MiApp_API.Datos
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Villa> Villas {get;set;}


    }
}

```


:::tip Observación
- La clase hereda de DbContext que viene de EntityFrameworkCore
- Todas las propiedades de tipo DbSet  son “tablas” de la base de datos. De hecho, el nombre de la propiedad es el nombre de la tabla.
- El parámetro de tipo generico de DbSet es la clase que es modelo.
- Normalmente los nombres de las tablas se escriben en plural.
:::


#### Crear URL de conexión

- Appsetings.json : Es para producción.
- Appsettings.Development.json : Es para desarrollo.


- En Appsetings.json:


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
    "DefaultConnection": "Server=localhost;Database=Villa;Trusted_Connection=true;MultipleActiveResultSets=true"
  }
}

```
:::tip Observación
- Adentro de ConnectionStrings configuramos la url de conexión.
- “DefaultConnection” puede ser cualquier String y su valor es la cadena(url) de conexión:
   - Server: Nombre del servidor.
   - Database: Nombre de la base de datos.
   - Trusted_Connection: Para que sea una conexión segura debe ser true.
   - MultipleActiveResultSets : Permite hacer multiples consultas al mismo  tiempo.
:::


#### Agregar servicio
- Tenemos que agregar un servicio en el Progam.cs , para especificar cual va a ser la clase  de dbContext y que estará vinculada con la cadena de conexión junto con el motor de base dato. Al final mediante inyecciones de dependencias dejamos detallada esta configuración.
- Progam.cs:


```csharp
using MiApp_API.Datos;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers().AddNewtonsoftJson();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<ApplicationDbContext>( option =>
{
    option.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});

```

:::tip Observación
- AddDbContext tiene un parámetro de tipo genérico, con el cual especificamos la clase dbContext.
- Con el metodo UseSqlServer() Especificamos que usamos un motor sql
- Con builder.Configuration accedemos al archivo appsetting.json.
- Con GetConnectionString(X) accedemos a “ConnectionStrings” . X es la “clave” del json cuyo valor es la cadena de conexión
- Entonces el método UseSqlServer() recibe como parámetro la cadena de conexión.
:::

#### Aplicar inyección de dependencia
- En ApplicationDbContext.cs:

```csharp
using MiApp_API.Modelos;
using Microsoft.EntityFrameworkCore;

namespace MiApp_API.Datos
{
    public class ApplicationDbContext : DbContext
    {

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options ) : base(options)
        {
            
        }
        public DbSet<Villa> Villas {get;set;}


    }
}

```
:::tip Observación
- El parámetro de tipo genérico de DbContextOptions es la clase que representa el dbcontext.
- Le pasamos toda la configuración del servicio que agregamos al constructor de la clase DbContext
:::

#### Crear Base de datos y Tabla Villa

#### Emigración
- Una emigración nos permite crear nuestra base de datos cuando se ejecute Add-migration y Update-database
- Al ejecutar los comandos , puede pasar lo siguiente:
  - Si la BD ya existe, no la vuelve a crear.
  - Si existen nuevos modelos en el dbContext, los crea como tabla en la BD. Si hay diferencias entre las propiedades, se modifican las tablas para que coincidan con el modelo.
#### Como ejecutar una emigración
1. Abrimos la consola, donde vamos a ejecutar los comandos: Herramientas -- Administrador de paquetes Nuget – Consola del Administrador de paquetes.
    - Primero tenemos que  ejecutar el comando add-migration con la siguiente sintaxis para poder generar un script:

```powershell
add-migration    nombre
```
:::tip Observación
- nombre es un texto que detalla que vamos a hacer con la migración, crear una base de dato? Modificar una tabla? Crear una tabla?

:::

2. Ejecutamos el siguiente comando:

```csharp
add-migration AgregarBaseDatos
```

:::tip
- Si lo hiciste bien, se te debió generar la carpeta Migrations con los archivos correspondiente.
- En este caso se te debió generar dos archivos:
  - Un Snapshot : Que contiene un resumen de todas las migraciones.
  - X_AgregarBaseDatos.cs : Es una clase con el nombre que le dimos, Este archivo contiene el código(script) que crea(o no) y manipula la base de datos (modifica/elimina/inserta columnas  de las tablas, etc).
:::
- Ahora tenemos que ejecutar el comando Update-database para que se ejecute el script que generamos.
3. Ejecutamos lo siguiente en la consola:

```powershell
update-database
```

:::tip
- Si existe algo mal configurado, al ejecutar este comando van a aparecer los errores.

:::


#### Nos va a tirar un error porque no especificamos una certificación que diga que es seguro

- Vamos a corregirlo en appsettings.json:

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
    "DefaultConnection": "Server=localhost;Database=Villa;TrustServerCertificate=true;Trusted_Connection=true;MultipleActiveResultSets=true"
  }
}

```

#### Lo ejecutamos de nuevo y ahora debería andar

1. Abrimos SQL Server Management Studio, nos conectamos y en la carpeta Databases debe estar la que creamos.
2. En nuestro caso deben haberse creado dos tablas (que están en la carpeta Tables):
   - Villas.
   - EFMigrationsHistory : Contiene un resumen de todas las migraciones que se hicieron.


## Alimentar tabla Villa
- Vamos a crear un “alimentador” que cree filas en la tabla al ejecutarse la app.
- En ApplicationDbContext:

```csharp
protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Villa>().HasData(
                 new Villa()
                 {
                     Id = 1,
                     Nombre = "Villa real",
                     Detalles = "Detalla de la Villa...",
                     ImagenUrl = "",
                     Ocupantes = 5,
                     MetrosCuadrados = 50 ,
                     Tarifa = 200 ,
                     Amenidad = "",
                     FechaCreacion = DateTime.Now,
                     FechaActualizacion = DateTime.Now
                 }, new Villa()
                 {
                     Id = 1,
                     Nombre = "Premium Vista a la Piscina",
                     Detalles = "Detalla de la Villa...",
                     ImagenUrl = "",
                     Ocupantes = 4,
                     MetrosCuadrados = 40,
                     Tarifa = 150,
                     Amenidad = "",
                     FechaCreacion = DateTime.Now,
                     FechaActualizacion = DateTime.Now
                 }
                ) ;
        }

```
:::tip Observación
- Entity recibe como parámetro de tipo genérico, un modelo.
- El método HasData() inserta datos  en el modelo(tabla) que especificamos en el Entity. Entonces cada parámetro del método es una instancia del modelo que se desean agregar a la tabla, donde cada instancia es una fila.
- Estamos sobrescribiendo un método que se ejecuta cuando se crean los modelos.

:::

:::tip
- La mayoría de las operaciones en una base de datos, se hace con una instancia de ModelBuilder.

:::


#### Ejecutamos los dos comandos de nuevo

```powershell
add-migration AlimentarTablaVilla
```

:::tip Observación
- En este comando, se ejecutaría el método que sobrescribimos ya que se crean los modelos.
- Proba modificando el método anterior para ingresar dos instancias con la misma id, y fíjate que pasa al ejecutar este comando.
:::

```powershell
update-database
```


#### En SQL Server Management Studio
- En la tabla Villas, haces click derecho y luego le das a “Select Top …  rows” para poder ver los registros que creamos.




:::tip
- Tambien podes hacer click en la base de dato que creamos y luego le das a “New query”. Acá podés escribir SQL y luego ejecutarlo (con la opcion Execute).

:::

## Usar ApplicationDbContext en API Controller
- Con el DbContext generalmente hacemos las operaciones de la BD, por lo tanto, debemos tener acceso a esta clase en el Controller.
- En VillaController.cs , la inyectamos como dependencia:


```csharp
    [Route("api/[controller]")]
    [ApiController]
    public class VillaController : ControllerBase
    {

        private readonly ILogger<VillaController> _logger;
        private readonly ApplicationDbContext _db;
        public VillaController(ILogger<VillaController> logger, ApplicationDbContext db)
        {
            _logger = logger;
            _db = db;
        }

```
:::tip Observación
- Esto se puede realizar porque añadimos el dbContext como servicio (con el metodo AddDbContext() en Progam.cs).
- Cada argumento del constructor es un servicio.


:::

- Entonces, en el método para obtener las villas:


```csharp
     [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public ActionResult<IEnumerable<VillaDto>> GetVillas()
        {
            _logger.LogInformation("Obtener las Villas");
            return Ok(_db.Villas.ToList());
        }

```
:::tip Observación
- Cada propiedad es una tabla de la BD. Por lo tanto, usar una propiedad es como hacer la consulta “select * from propiedad”.
- El Metodo ToList() Lo convierte en un List&lt;T>.
:::


- En el método para obtener una Villa:


```csharp
[HttpGet("id:int" , Name ="GetVilla")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<VillaDto> GetVilla(int id)
        {
            if (id==0)
            {
                _logger.LogError("Error al traer Villa con Id  " + 0);
                return BadRequest();
            }

            var villa = _db.Villas.FirstOrDefault(v => v.Id == id);
            if (villa == null)
            {
                return NotFound();
            }

            return Ok(villa);
           
        }

```
:::tip Observación
- Es casi lo mismo, nomás que invocamos el método FirstOrDefault() utilizando la propiedad Villas.

:::


- En el método para crear una villa:


```csharp
      public ActionResult<VillaDto> crearVilla([FromBody] VillaDto villaDto) { 

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (_db.Villas.FirstOrDefault(v => v.Nombre.ToLower() == villaDto.Nombre.ToLower()) != null)
            {
                ModelState.AddModelError("NombreExiste", "La villa con ese nombre ya existe");
                 return BadRequest(ModelState);
            }

            if (villaDto == null)
            {
                return BadRequest(villaDto);
            }
            if(villaDto.Id < 0) {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }

            Villa modelo = new()
            {
         
                Nombre = villaDto.Nombre,
                Detalles = villaDto.Detalles,
                ImagenUrl = villaDto.ImagenUrl,
                Ocupantes = villaDto.Ocupantes,
                Tarifa = villaDto.Tarifa,
                MetrosCuadrados = villaDto.MetrosCuadrados,
                Amenidad = villaDto.Amenidad
            };
            _db.Villas.Add(modelo);
            _db.SaveChanges();
           return CreatedAtRoute("GetVilla" , new {id= villaDto.Id } , villaDto);
        }

```
:::tip Observación
- El método Add(modelo) agrega el modelo (representa una fila) a la entidad (representa una tabla, como dijimos antes el nombre de la propiedad es la tabla). En resumen, agrega una fila a una tabla.
- En el modelo no tienes que especificar el id porque se genera solo (como lo definimos).
- Con el método SaveChanges() guardamos todos los cambios que hicimos a través de la clase DbContext en la base de datos.
:::


:::tip Recordatorio
- Cuando lo pruebes, no tienes que enviar el id porque se genera solo (como lo definimos).
- Si al probarlo enviamos un id, se generará un error porque la aplicación no sabrá cual valor asignarle (el que se crea solo o el que definimos).
:::


- En el método para eliminar:


```csharp
public IActionResult DeleteVilla(int id)
        {
            if (id == 0)
            {
                return BadRequest();
            }

            var villa = _db.Villas.FirstOrDefault(v => v.Id == id);
            if (villa == null)
            {
                return NotFound();
            }

            _db.Villas.Remove(villa);
            _db.SaveChanges();
            return NoContent();
        }

```

:::tip Observación
- El método Remove(modelo) elimina el modelo (representa una fila) de la entidad (representa una tabla, como dijimos antes el nombre de la propiedad es la tabla). En resumen, elimina una fila de la tabla.
- Con el método SaveChanges() guardamos todos los cambios que hicimos a través de la clase DbContext en la base de datos.
:::

- En el método que hace update con Put:


```csharp
public IActionResult UpdateVilla(int id , [FromBody] VillaDto villaDto)
        {
            if (villaDto == null || id!= villaDto.Id)
            {
                return BadRequest();
            }
            Villa modelo = new()
            {
                Id = villaDto.Id,
                Nombre = villaDto.Nombre,
                Detalles = villaDto.Detalles,
                ImagenUrl = villaDto.ImagenUrl,
                Ocupantes = villaDto.Ocupantes,
                Tarifa = villaDto.Tarifa,
                MetrosCuadrados = villaDto.MetrosCuadrados,
                Amenidad = villaDto.Amenidad
            };
            _db.Villas.Update(modelo);
            _db.SaveChanges();
            return NoContent();
        }

```

:::tip Observación
- El método Update(modelo) actualiza un modelo (representa una fila) que contiene la entidad (representa una tabla, como dijimos antes el nombre de la propiedad es la tabla). En resumen, modifica una fila de la tabla.
- Con el método SaveChanges() guardamos todos los cambios que hicimos a través de la clase DbContext en la base de datos.
:::

- En el método que hace update con Patch:


```csharp
public IActionResult UpdatePartialVilla(int id, JsonPatchDocument<VillaDto> patchDto)
        {
            if (patchDto == null || id == 0)
            {
                return BadRequest();
            }
            var villa = _db.Villas.FirstOrDefault(v => v.Id == id);
            VillaDto villaDto = new()
            {
                Id = villa.Id,
                Nombre = villa.Nombre,
                Detalles = villa.Detalles,
                ImagenUrl = villa.ImagenUrl,
                Ocupantes = villa.Ocupantes,
                Tarifa = villa.Tarifa,
                MetrosCuadrados = villa.MetrosCuadrados,
                Amenidad = villa.Amenidad
            };

            if (villa == null) return BadRequest();

            patchDto.ApplyTo(villaDto , ModelState);

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Villa modelo = new()
            {
                Id = villaDto.Id,
                Nombre = villaDto.Nombre,
                Detalles = villaDto.Detalles,
                ImagenUrl = villaDto.ImagenUrl,
                Ocupantes = villaDto.Ocupantes,
                Tarifa = villaDto.Tarifa,
                MetrosCuadrados = villaDto.MetrosCuadrados,
                Amenidad = villaDto.Amenidad
            };
            _db.Villas.Update(modelo);
            _db.SaveChanges();
            return NoContent();
        }

```



## AsNoTracking en acción
- Cuando probamos el Path nos tira un error:  The instance of entity type 'Villa' cannot be tracked because another instance with the same key value for {'Id'} is already being tracked.

#### ¿Qué provoca el error?
- En la siguiente línea hay un modelo/registro (fila de la tabla) en memoria:

```csharp
var villa = _db.Villas.FirstOrDefault(v => v.Id == id);
```
- En las siguientes líneas hay otro modelo/registro (fila de la tabla) en memoria:

```csharp

  Villa modelo = new()
            {
                Id = villaDto.Id,
                Nombre = villaDto.Nombre,
                Detalles = villaDto.Detalles,
                ImagenUrl = villaDto.ImagenUrl,
                Ocupantes = villaDto.Ocupantes,
                Tarifa = villaDto.Tarifa,
                MetrosCuadrados = villaDto.MetrosCuadrados,
                Amenidad = villaDto.Amenidad
            };

```
- El error se produce porque los dos modelos/registros que están en memoria usan el mismo ID y este debe ser único.

- Para corregir este error:


```csharp
using Microsoft.EntityFrameworkCore;
 public IActionResult UpdatePartialVilla(int id, JsonPatchDocument<VillaDto> patchDto)
        {
            if (patchDto == null || id == 0)
            {
                return BadRequest();
            }
            var villa = _db.Villas.AsNoTracking().FirstOrDefault(v => v.Id == id);

```

:::tip Observación
- Con AsNoTracking() estamos haciendo que la entidad(tabla) Villas  no almacene en memoria el modelo/registro que estamos consiguiendo a través de la entidad(Villas).
- Ahora este modelo/registro no estará en memoria y no genera conflicto con el otro modelo/registro.
:::


## Subir cambios a github
- Abrimos la terminal en Visual studio  y ejecutamos los siguientes comandos:


```powershell
git add .
git commit -m “DbContext – Inyeccion de Depedencia”
git push -u origin main
```


## Separar DTO
- Generalmente se utilizan diferentes DTO, por ejemplo, una para el apartado de actualizar y otro para crear una villa.
- Entonces, tenemos que crear nuevos DTO:
    1. Hacemos click en VillaDto.cs  - click derecho – Copiar --  Hacemos click en la carpeta DTO – click derecho – pegar (Hacemos esto dos veces).
     2. Les cambiamos los nombres a:
           - VillaCreateDto
           - VillaUpdateDto


:::tip Como cambiar el nombre del archivo
- Hacemos click en la copia – click derecho – Cambiar nombre. 
:::


- En VillaCreateDto.cs:


```csharp
using System.ComponentModel.DataAnnotations;

namespace MiApp_API.Modelos.Dto
{
    public class VillaCreateDto
    {
        

        [Required]
        [MaxLength(30)]
        public String Nombre { get; set; }
        public int Ocupantes { get; set; }
        public int MetrosCuadrados { get; set; }
        public string Detalles { get; set; }
        [Required]
        public double Tarifa { get; set; }
        public string ImagenUrl { get; set; }
        public string Amenidad { get; set; }
    }
}

```
:::tip Observación
- Para crear una villa, no necesitamos el id asique lo sacamos.

:::

- VillaUpdateDto.cs:


```csharp
using System.ComponentModel.DataAnnotations;

namespace MiApp_API.Modelos.Dto
{
    public class VillaUpdateDto
    {


        [Required]
        public int Id { get; set; }

        [Required]
        [MaxLength(30)]
        public String Nombre { get; set; }
        [Required]
        public int Ocupantes { get; set; }

        [Required]
        public int MetrosCuadrados { get; set; }
        [Required]
        public string Detalles { get; set; }
        [Required]
        public double Tarifa { get; set; }
        [Required]
        public string ImagenUrl { get; set; }
        public string Amenidad { get; set; }
    }
}

```

- En el controlador:

```csharp
public ActionResult<VillaDto> crearVilla([FromBody] VillaCreateDto villaDto) { 

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (_db.Villas.FirstOrDefault(v => v.Nombre.ToLower() == villaDto.Nombre.ToLower()) != null)
            {
                ModelState.AddModelError("NombreExiste", "La villa con ese nombre ya existe");
                 return BadRequest(ModelState);
            }

            if (villaDto == null)
            {
                return BadRequest(villaDto);
            }
          

            Villa modelo = new()
            {
         
                Nombre = villaDto.Nombre,
                Detalles = villaDto.Detalles,
                ImagenUrl = villaDto.ImagenUrl,
                Ocupantes = villaDto.Ocupantes,
                Tarifa = villaDto.Tarifa,
                MetrosCuadrados = villaDto.MetrosCuadrados,
                Amenidad = villaDto.Amenidad
            };
            _db.Villas.Add(modelo);
            _db.SaveChanges();
           return CreatedAtRoute("GetVilla" , new {id= modelo.Id } , modelo);
        }

```

:::tip Observación
- El Modelo genera un id (como lo definimos) y ese mismo lo usamos en el metodo CreatedAtRoute().
:::


```csharp
      public IActionResult UpdateVilla(int id , [FromBody] VillaUpdateDto villaDto)
```


```csharp
public IActionResult UpdatePartialVilla(int id, JsonPatchDocument<VillaUpdateDto> patchDto)
        {
            if (patchDto == null || id == 0)
            {
                return BadRequest();
            }
            var villa = _db.Villas.AsNoTracking().FirstOrDefault(v => v.Id == id);
            if (villa == null) return BadRequest();
            VillaUpdateDto villaDto = new()
            {
                Id = villa.Id,
                Nombre = villa.Nombre,
                Detalles = villa.Detalles,
                ImagenUrl = villa.ImagenUrl,
                Ocupantes = villa.Ocupantes,
                Tarifa = villa.Tarifa,
                MetrosCuadrados = villa.MetrosCuadrados,
                Amenidad = villa.Amenidad
            };


         
            patchDto.ApplyTo(villaDto , ModelState);

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Villa modelo = new()
            {
                Id = villaDto.Id,
                Nombre = villaDto.Nombre,
                Detalles = villaDto.Detalles,
                ImagenUrl = villaDto.ImagenUrl,
                Ocupantes = villaDto.Ocupantes,
                Tarifa = villaDto.Tarifa,
                MetrosCuadrados = villaDto.MetrosCuadrados,
                Amenidad = villaDto.Amenidad
            };
            _db.Villas.Update(modelo);
            _db.SaveChanges();
            return NoContent();
        }

```

## Métodos Async
- Microsoft nos recomienda usar métodos asíncronos, para esto nos brinda métodos para trabajar de esta forma:


```csharp

  [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<IEnumerable<VillaDto>>> GetVillas()
        {
            _logger.LogInformation("Obtener las Villas");
            return Ok(await _db.Villas.ToListAsync());
        }

```

:::tip
- Generalmente hay que utilizar el await en un método async para esperarlo.
:::


- Hacemos exactamente lo mismo para el resto de métodos:


```csharp
      public async  Task<ActionResult<VillaDto>> GetVilla(int id)
        {
            if (id==0)
            {
                _logger.LogError("Error al traer Villa con Id  " + 0);
                return BadRequest();
            }

            var villa = await _db.Villas.FirstOrDefaultAsync(v => v.Id == id);
            if (villa == null)
            {
                return NotFound();
            }

            return Ok( villa);
           
        }


```


```csharp
public async  Task<ActionResult<VillaDto>> crearVilla([FromBody] VillaCreateDto villaDto) { 

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (await _db.Villas.FirstOrDefaultAsync(v => v.Nombre.ToLower() == villaDto.Nombre.ToLower()) != null)
            {
                ModelState.AddModelError("NombreExiste", "La villa con ese nombre ya existe");
                 return BadRequest(ModelState);
            }

            if (villaDto == null)
            {
                return BadRequest(villaDto);
            }
          

            Villa modelo = new()
            {
         
                Nombre = villaDto.Nombre,
                Detalles = villaDto.Detalles,
                ImagenUrl = villaDto.ImagenUrl,
                Ocupantes = villaDto.Ocupantes,
                Tarifa = villaDto.Tarifa,
                MetrosCuadrados = villaDto.MetrosCuadrados,
                Amenidad = villaDto.Amenidad
            };
            await _db.Villas.AddAsync(modelo);
            await _db.SaveChangesAsync();
           return CreatedAtRoute("GetVilla" , new {id= modelo.Id } , modelo);
        }


```


```csharp

     public async Task<IActionResult> DeleteVilla(int id)
        {
            if (id == 0)
            {
                return BadRequest();
            }

            var villa = await _db.Villas.FirstOrDefaultAsync(v => v.Id == id);
            if (villa == null)
            {
                return NotFound();
            }

            _db.Villas.Remove(villa);
          await  _db.SaveChangesAsync();
            return NoContent();
        }

```

:::tip Observación
- El método Remove() no se puede usar de forma asíncrona.

:::


```csharp
public async Task<IActionResult> UpdateVilla(int id , [FromBody] VillaUpdateDto villaDto)
        {
            if (villaDto == null || id!= villaDto.Id)
            {
                return BadRequest();
            }
            Villa modelo = new()
            {
                Id = villaDto.Id,
                Nombre = villaDto.Nombre,
                Detalles = villaDto.Detalles,
                ImagenUrl = villaDto.ImagenUrl,
                Ocupantes = villaDto.Ocupantes,
                Tarifa = villaDto.Tarifa,
                MetrosCuadrados = villaDto.MetrosCuadrados,
                Amenidad = villaDto.Amenidad
            };
            _db.Villas.Update(modelo);
            await _db.SaveChangesAsync();
            return NoContent();
        }

```

:::tip Observación
- El método Update() no se puede usar de forma asíncrona.

:::

```csharp
public async Task<IActionResult> UpdatePartialVilla(int id, JsonPatchDocument<VillaUpdateDto> patchDto)
        {
            if (patchDto == null || id == 0)
            {
                return BadRequest();
            }
            var villa = await  _db.Villas.AsNoTracking().FirstOrDefaultAsync(v => v.Id == id);
            if (villa == null) return BadRequest();
            VillaUpdateDto villaDto = new()
            {
                Id = villa.Id,
                Nombre = villa.Nombre,
                Detalles = villa.Detalles,
                ImagenUrl = villa.ImagenUrl,
                Ocupantes = villa.Ocupantes,
                Tarifa = villa.Tarifa,
                MetrosCuadrados = villa.MetrosCuadrados,
                Amenidad = villa.Amenidad
            };


         
            patchDto.ApplyTo(villaDto , ModelState);

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Villa modelo = new()
            {
                Id = villaDto.Id,
                Nombre = villaDto.Nombre,
                Detalles = villaDto.Detalles,
                ImagenUrl = villaDto.ImagenUrl,
                Ocupantes = villaDto.Ocupantes,
                Tarifa = villaDto.Tarifa,
                MetrosCuadrados = villaDto.MetrosCuadrados,
                Amenidad = villaDto.Amenidad
            };
            _db.Villas.Update(modelo);
            await _db.SaveChangesAsync();
            return NoContent();
        }


```

## Configurar AutoMapper y Mapping Config

- Si vemos nuestros métodos POST y PUT, podemos notar que convertimos un objeto en otro. Básicamente de VillaDto (o alguna clase DTO) a Villa (modelo) y viceversa.
- Un ejemplo de la conversión sacado del método POST:
```csharp
     Villa modelo = new()
            {
         
                Nombre = villaDto.Nombre,
                Detalles = villaDto.Detalles,
                ImagenUrl = villaDto.ImagenUrl,
                Ocupantes = villaDto.Ocupantes,
                Tarifa = villaDto.Tarifa,
                MetrosCuadrados = villaDto.MetrosCuadrados,
                Amenidad = villaDto.Amenidad
            };

```

#### ¿Qué pasaría cuando el modelo tenga miles de propiedades?
- Pues nos va a tocar escribir mucho código en el controlador. Por lo tanto, es mala práctica.
- Para solucionar esto, tenemos un paquete Nuget llamado AutoMapper que se encargara de convertir un objeto a otro.


#### Instalación de AutoMapper
- En el administrador de paquetes Nuget , instalamos los siguientes paquetes:
   - AutoMapper
   - AutoMapper.Extensions.Microsoft.DependencyInjection

:::tip
- Como no son paquetes de EntityFramework , asegúrate de instalar la última versión de los paquetes.

:::

#### Creamos la clase MappingConfig


- Esta clase, se encargará del mapeo de los objetos.
- Creamos una clase en el proyecto (en ninguna carpeta) llamada MappingConfig (Puede ser cualquier nombre).


:::tip
- A este punto ya sabrás que todas las operaciones en Visual Studio se hacen seleccionado y haciendo click derecho.
:::
- En  MappingConfig.cs:
```csharp
using AutoMapper;
using MiApp_API.Modelos;
using MiApp_API.Modelos.Dto;

namespace MiApp_API
{
    public class MappingConfig : Profile
    {
        public MappingConfig()
        {
            // 1 Forma
            CreateMap<Villa, VillaDto>();
            CreateMap<VillaDto, Villa>();

            // 2 Forma
            CreateMap<Villa, VillaCreateDto>().ReverseMap();
            CreateMap<Villa, VillaUpdateDto>().ReverseMap();

        }
    }
}

```


:::tip Observación
- La clase hereda de Profile que proviene de los paquetes que instalamos.
- Con CreateMap() creamos los mapeos pero este se tiene que ubicar en algún constructor.
- CreateMap tiene dos parámetros de tipo genérico: La fuente y el destino.  Especifica que se puede convertir el “tipo de dato fuente” en “tipo de dato destino”. Se hace una migración de datos de la fuente al destino.
- Con ReverseMap() hacemos dos CreateMap() en uno . Especificamos que se puede hacer una migración de datos de la fuente al destino y viceversa.



:::


:::tip Mapeo
- El mapeo de datos permite la migración de datos de un lugar a otro en tiempo real, de manera eficiente y rentable.

:::


#### Agregamos el servicio

- Lo agregamos al servicio, para luego por medio de inyección de dependencia poder usarlo.
- En Progam.cs:

```csharp
using MiApp_API;
builder.Services.AddAutoMapper(typeof(MappingConfig));
var app = builder.Build();

```

:::tip Observación
- AddAutoMapper() recibe el nombre de la clase  que se encarga del mapeo (la que creamos anteriormente).
- Lo que recibe typeof() es la clase que se encarga del mapeo.
:::

#### Inyección de dependencia
- Ahora que ya lo agregamos al servicio, podemos usarlo mediante la inyección de dependencia.
- En el controlador:


```csharp
using AutoMapper;
using MiApp_API.Datos;
using MiApp_API.Modelos;
using MiApp_API.Modelos.Dto;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MiApp_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VillaController : ControllerBase
    {

        private readonly ILogger<VillaController> _logger;
        private readonly ApplicationDbContext _db;
        private readonly IMapper _mapper;
        public VillaController(ILogger<VillaController> logger, ApplicationDbContext db , IMapper mapper)
        {
            _logger = logger;
            _db = db;
            _mapper = mapper;
        }

```
- Ahora que ya lo tenemos inyectada en el controlador, los endpoints pueden usarlas:


```csharp
  public async Task<ActionResult<IEnumerable<VillaDto>>> GetVillas()
        {
            _logger.LogInformation("Obtener las Villas");
            IEnumerable<Villa> villaList = await _db.Villas.ToListAsync();

            return Ok(_mapper.Map<IEnumerable<VillaDto>>(villaList));


        }

```
:::tip Observación
- Con Map() hacemos el mapeo (convertimos un objeto a otro):
   - Su parámetro de tipo genérico especifica que tipo de dato va a devolver. 
   - A su vez recibe como parámetro la fuente.
   - Entonces hace la migración(mapeo) desde la fuente (parámetro normal) al destino (parámetro de tipo genérico).
- En este endpoint convierte una colección de Villa a una colección de VillaDto.
:::


```csharp
public async  Task<ActionResult<VillaDto>> GetVilla(int id)
        {
            if (id==0)
            {
                _logger.LogError("Error al traer Villa con Id  " + 0);
                return BadRequest();
            }

            var villa = await _db.Villas.FirstOrDefaultAsync(v => v.Id == id);
            if (villa == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<VillaDto>(villa));
           
        }

```
:::tip Observación
- Convertimos un objeto de tipo Villa a VillaDto en el return.
:::


```csharp
  public async  Task<ActionResult<VillaDto>> crearVilla([FromBody] VillaCreateDto createDto) { 

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (await _db.Villas.FirstOrDefaultAsync(v => v.Nombre.ToLower() == createDto.Nombre.ToLower()) != null)
            {
                ModelState.AddModelError("NombreExiste", "La villa con ese nombre ya existe");
                 return BadRequest(ModelState);
            }

            if (createDto == null)
            {
                return BadRequest(createDto);
            }
            Villa modelo = _mapper.Map<Villa>(createDto);
            await _db.Villas.AddAsync(modelo);
            await _db.SaveChangesAsync();
           return CreatedAtRoute("GetVilla" , new {id= modelo.Id } , modelo);
        }

```

:::tip Observación
- Convertimos un objeto de tipo VillaCreateDto a Villa al crear el modelo.
:::


```csharp
  public async Task<IActionResult> UpdateVilla(int id , [FromBody] VillaUpdateDto updateDto)
        {
            if (updateDto == null || id!= updateDto.Id)
            {
                return BadRequest();
            }
            Villa modelo = _mapper.Map<Villa>(updateDto);
            _db.Villas.Update(modelo);
            await _db.SaveChangesAsync();
            return NoContent();
        }

```

:::tip Observación
- Convertimos un objeto de tipo  VillaUpdateDto  a Villa al crear el modelo.
:::


```csharp
public async Task<IActionResult> UpdatePartialVilla(int id, JsonPatchDocument<VillaUpdateDto> patchDto)
        {
            if (patchDto == null || id == 0)
            {
                return BadRequest();
            }
            var villa = await  _db.Villas.AsNoTracking().FirstOrDefaultAsync(v => v.Id == id);
            if (villa == null) return BadRequest();
            VillaUpdateDto villaDto = _mapper.Map<VillaUpdateDto>(villa);
            patchDto.ApplyTo(villaDto , ModelState);
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            Villa modelo = _mapper.Map<Villa>(villaDto);
            _db.Villas.Update(modelo);
            await _db.SaveChangesAsync();
            return NoContent();
        }

```

:::tip Observación
- ¿Hicimos dos conversiones, dónde están?
:::

## Subir cambios a github

- Abrimos la terminal en Visual studio  y ejecutamos los siguientes comandos:


```powershell
git add .
git commit -m “Dto y AutoMapper”
git push -u origin main

```

## Agregar Interfaz Villa - Patrón Repositorio
- En un proyecto real, no se acostumbra a trabajar directamente con la BD. Es decir, tener todo el dbContext en el controlador.
- La forma correcta de trabajar es aplicando patrones de diseños.
- Nosotros vamos a usar el Patrón repositorio, donde se crea un repositorio que se encargara de todo relacionado a los datos.
- En este patrón se trabaja con interfaces y con implementaciones de estas.

#### Interfaces
1. Entonces, creamos la carpeta Repositorio en el proyecto:
Adentro de esta, creamos la carpeta IRepositorio (acá van las interfaces).
2. Agregamos una nueva interfaz llamada IRepositorio.


:::tip
- En la opcion “nuevos elementos” en “agregar”, están todas las plantillas que puede seleccionar, entre estas se encuentra la interfaz.

:::

- Entonces en IRepositorio.cs:


```csharp
using System.Linq.Expressions;

namespace MiApp_API.Repositorio.IRepositorio
{
    public interface IRepositorio<T> where T : class
    {

        Task Crear(T entidad);
        Task<List<T>> ObtenerTodos(Expression<Func<T, bool>>? filtro = null);

        Task<T> Obtener(Expression<Func<T, bool>>? filtro = null , bool tracked = true);

        Task Remover(T entidad);

        Task Grabar();
    }
}

```

:::tip Observación
- Es genérico así cualquier modelo lo puede utilizar.
:::

#### Implementamos la interfaz
- En la carpeta Repositorio, creamos una clase llamada Repositorio
- Esta clase implementara la interfaz.
- Primero creamos el constructor:


```csharp
using MiApp_API.Datos;
using MiApp_API.Repositorio.IRepositorio;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace MiApp_API.Repositorio
{
    public class Repositorio<T> : IRepositorio<T> where T : class
    {

        private readonly ApplicationDbContext _db;
        internal DbSet<T> dbSet;


        public Repositorio(ApplicationDbContext db)
        {
            _db = db;
            this.dbSet = _db.Set<T>();
        }

```

:::tip Observación
- Con _db.Set&lt;T>() obtenemos la propiedad de tipo DbSet&lt;T> del DbContext.
- T representa el modelo(tabla) que queremos manipular.
- Ejemplo:
   - T es el modelo Villa.
   - Usamos la linea “_db.Set&lt;Villa>()” para obtener la propiedad  “public DbSet&lt;Villa> Villas {get;set;}”.
:::


- Implementamos los métodos de la interfaz:


```csharp
using MiApp_API.Datos;
using MiApp_API.Repositorio.IRepositorio;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;
using System.Linq.Expressions;

namespace MiApp_API.Repositorio
{
    public class Repositorio<T> : IRepositorio<T> where T : class
    {

        private readonly ApplicationDbContext _db;
        internal DbSet<T> dbSet;


        public Repositorio(ApplicationDbContext db)
        {
            _db = db;
            this.dbSet = _db.Set<T>();
        }

        public async Task Crear(T entidad)
        {
            await dbSet.AddAsync(entidad);
            await Grabar();
        }

        public async Task Grabar()
        {
            await _db.SaveChangesAsync();
        }

        public async Task<T> Obtener(Expression<Func<T, bool>>? filtro = null, bool tracked = true)
        {
            IQueryable<T> query = dbSet;
            if (!tracked)
            {
                query = query.AsNoTracking();
            } 

            if (filtro != null)
            {
                query = query.Where(filtro);
            }

            return await query.FirstOrDefaultAsync();
        }

        public async Task<List<T>> ObtenerTodos(Expression<Func<T, bool>>? filtro = null)
        {
            IQueryable<T> query = dbSet;
           

            if (filtro != null)
            {
                query = query.Where(filtro);
            }

            return await query.ToListAsync();
        }

        public async Task Remover(T entidad)
        {
            dbSet.Remove(entidad);
            await Grabar();
        }
    }
}

```
:::tip Observación
- El apartado de modificar no lo incluimos porque en cada modelo se va a modificar diferentes datos(propiedades). Por lo tanto, lo mejor sería que cada modelo defina como se va a actualizar/modificar.

:::


:::tip
- A un modelo (Tabla) se le suele decir entidad.

:::

#### Interfaz para la entidad Villa
1. Creamos la interfaz IVillaRepositorio en la carpeta IRepositorio.
    - En esta interfaz definiremos el método para actualizar el modelo Villa.
2. En IVillaRepositorio.cs:

```csharp
using MiApp_API.Modelos;

namespace MiApp_API.Repositorio.IRepositorio
{
    public interface IVillaRepositorio : IRepositorio<Villa>
    {
        Task<Villa> Actualizar(Villa entidad);
    }
}
```

3. Ahora creamos una nueva clase llamada VillaRepositorio en la carpeta Repositorio.
    - Esta será la clase que implementará la interfaz.
4. En VillaRepositorio.cs:


```csharp
using MiApp_API.Datos;
using MiApp_API.Modelos;
using MiApp_API.Repositorio.IRepositorio;
using Microsoft.EntityFrameworkCore;

namespace MiApp_API.Repositorio
{
    public class VillaRepositorio : Repositorio<Villa>, IVillaRepositorio
    {
        private readonly ApplicationDbContext _db;


        public VillaRepositorio(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }

        public async Task<Villa> Actualizar(Villa entidad)
        {
            entidad.FechaActualizacion = DateTime.Now;
            _db.Villas.Update(entidad);
            await _db.SaveChangesAsync();
            return entidad;
        }
    }
}

```

#### Agregarla como servicio
- A la interfaz que creamos, debemos agregarla como servicio, para luego poder usarla(inyectarla) en el controlador mediante el constructor (como hicimos con la mayoría de dependencias).
- En el Progam.cs:

```csharp
using MiApp_API;
using MiApp_API.Datos;
using MiApp_API.Repositorio;
using MiApp_API.Repositorio.IRepositorio;
using Microsoft.EntityFrameworkCore;

builder.Services.AddScoped<IVillaRepositorio, VillaRepositorio>();
var app = builder.Build();

```


:::tip Observación
- AddScoped() recibe dos parámetros de tipo genérico:
    - TService : Es el servicio que se debe agregar (Interfaz).
    - TImplementation: La implementación que se va a usar (La clase que implementa la interfaz).
- El servicio (con la implementación especificada) se agrega en los constructores de los controladores.
- Cuando la aplicación inicia, se invoca el constructor del controlador, con todos los servicios que especificamos en el constructor. 
- Cada parámetro del constructor es un servicio que agregamos, que luego se lo asignamos a una variable privada para su posterior uso.
:::

:::tip Métodos para agregar un servicio
- Hay varios métodos para agregar un servicio:
    - AddScope: Crea el servicio en la solicitud y luego se destruye.
    - AddSingleton: Crea el servicio la primera vez que se solicita y luego cada solicitud posterior utilizara la misma instancia.
    - AddTransient : Se crea cada vez que se solicita. Es útil para servicios livianos y sin estado.
- [AddTransient, AddScoped and AddSingleton Services Differences](https://stackoverflow.com/questions/38138100/addtransient-addscoped-and-addsingleton-services-differences#:~:text=Singleton%20is%20a%20single%20instance,single%20instance%20per%20code%20request)
- [Understanding AddTransient Vs AddScoped Vs AddSingleton In ASP.NET Core](https://www.c-sharpcorner.com/article/understanding-addtransient-vs-addscoped-vs-addsingleton-in-asp-net-core/)
:::

#### Usamos el servicio en el controlador
- En VillaController.cs:


```csharp
using AutoMapper;
using MiApp_API.Datos;
using MiApp_API.Modelos;
using MiApp_API.Modelos.Dto;
using MiApp_API.Repositorio.IRepositorio;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MiApp_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VillaController : ControllerBase
    {

        private readonly ILogger<VillaController> _logger;
        private readonly IVillaRepositorio _villaRepo;
        private readonly IMapper _mapper;

        public VillaController(ILogger<VillaController> logger, IVillaRepositorio villaRepo, IMapper mapper)
        {
            _logger = logger;
            _villaRepo = villaRepo;
            _mapper = mapper;
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<IEnumerable<VillaDto>>> GetVillas()
        {
            _logger.LogInformation("Obtener las Villas");
            IEnumerable<Villa> villaList = await _villaRepo.ObtenerTodos();

            return Ok(_mapper.Map<IEnumerable<VillaDto>>(villaList));


        }
        [HttpGet("id:int" , Name ="GetVilla")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async  Task<ActionResult<VillaDto>> GetVilla(int id)
        {
            if (id==0)
            {
                _logger.LogError("Error al traer Villa con Id  " + 0);
                return BadRequest();
            }

            var villa = await  _villaRepo.Obtener(v => v.Id == id);
            if (villa == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<VillaDto>(villa));
           
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async  Task<ActionResult<VillaDto>> crearVilla([FromBody] VillaCreateDto createDto) { 

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (await _villaRepo.Obtener(v => v.Nombre.ToLower() == createDto.Nombre.ToLower()) != null)
            {
                ModelState.AddModelError("NombreExiste", "La villa con ese nombre ya existe");
                 return BadRequest(ModelState);
            }

            if (createDto == null)
            {
                return BadRequest(createDto);
            }
            Villa modelo = _mapper.Map<Villa>(createDto);
            await _villaRepo.Crear(modelo);
           return CreatedAtRoute("GetVilla" , new {id= modelo.Id } , modelo);
        }


        [HttpDelete("{id:int}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> DeleteVilla(int id)
        {
            if (id == 0)
            {
                return BadRequest();
            }

            var villa = await _villaRepo.Obtener(v => v.Id == id);
            if (villa == null)
            {
                return NotFound();
            }

           await _villaRepo.Remover(villa);
            return NoContent();
        }

        [HttpPut ("{id:int}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> UpdateVilla(int id , [FromBody] VillaUpdateDto updateDto)
        {
            if (updateDto == null || id!= updateDto.Id)
            {
                return BadRequest();
            }
            Villa modelo = _mapper.Map<Villa>(updateDto);
           await _villaRepo.Actualizar(modelo);
           
            return NoContent();
        }


        [HttpPatch("{id:int}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> UpdatePartialVilla(int id, JsonPatchDocument<VillaUpdateDto> patchDto)
        {
            if (patchDto == null || id == 0)
            {
                return BadRequest();
            }
            var villa = await  _villaRepo.Obtener(v => v.Id == id , false);
            if (villa == null) return BadRequest();
            VillaUpdateDto villaDto = _mapper.Map<VillaUpdateDto>(villa);
            patchDto.ApplyTo(villaDto , ModelState);
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            Villa modelo = _mapper.Map<Villa>(villaDto);

            await _villaRepo.Actualizar(modelo);
            return NoContent();
        }

    }

  
}


```


:::tip Observación
- Como te habrás dados cuenta, los servicios son “Interfaces” que tienen los métodos/propiedades de la clase que implemento la interfaz.
:::

## API Response
- Por ahora cada endpoint del controlador retorna una respuesta distinta. Esto es una mala práctica.
- Una buena practica es que todos nuestros endpoints retornen una respuesta estándar y que esta se adapte a lo que queremos devolver.
- En la carpeta modelo, creamos una clase llamada APIResponse.cs
- Esta clase se encargará de todas las respuestas que va a enviar nuestro controlador. Básicamente todos los endpoint devolverán como respuesta una instancia de esta clase, para que todas las respuestas sean similares (estén bajo un estándar) y cambien según lo que queremos devolver.
- En APIResponse.cs:

```csharp
using System.Net;

namespace MiApp_API.Modelos
{
    public class APIResponse
    {

        public HttpStatusCode statusCode { get; set; }
        public Boolean isExitoso { get; set; } = true;

        public List<String>  ErrorMessages { get; set; }


        public object Resultado { get; set; }
    }
}

```
:::tip Observación
- Object es la clase base de todas las clases que existen en “.NET”. Por lo tanto, nos permite almacenar cualquier tipo de dato en la respuesta.
:::


- En el controlador VillaController.cs, lo añadimos en el constructor (no es una dependencia):

```csharp
    public class VillaController : ControllerBase
    {

        private readonly ILogger<VillaController> _logger;
        private readonly IVillaRepositorio _villaRepo;
        private readonly IMapper _mapper;
        protected APIResponse _response;

        public VillaController(ILogger<VillaController> logger, IVillaRepositorio villaRepo, IMapper mapper)
        {
            _logger = logger;
            _villaRepo = villaRepo;
            _mapper = mapper;
            _response = new();
        }

```
- Y en cada endpoint ,  cambiamos lo que retorna:


```csharp
using System.Net;
      public async Task<ActionResult<APIResponse>> GetVillas()
        {
            try
            {
                _logger.LogInformation("Obtener las Villas");
                IEnumerable<Villa> villaList = await _villaRepo.ObtenerTodos();
                _response.Resultado = _mapper.Map<IEnumerable<VillaDto>>(villaList);
                _response.statusCode = HttpStatusCode.OK;
                return Ok(_response);
            } catch (Exception e)
            {
                _response.isExitoso = false;
                _response.ErrorMessages = new List<string> { e.ToString() };
            }
            return _response;


        }

```
- Hacemos lo mismo para cada uno:


```csharp
public async  Task<ActionResult<APIResponse>> GetVilla(int id)
        {
            try
            {
                if (id == 0)
                {
                    _logger.LogError("Error al traer Villa con Id  " + 0);
                    _response.statusCode = HttpStatusCode.BadRequest;
                    _response.isExitoso = false;
                    return BadRequest(_response);
                   

                }

                var villa = await _villaRepo.Obtener(v => v.Id == id);
                if (villa == null)
                {
                    _response.statusCode = HttpStatusCode.NotFound;
                    _response.isExitoso = false;
                    return NotFound(_response);
                }
                _response.Resultado = _mapper.Map<VillaDto>(villa);
                _response.statusCode = HttpStatusCode.OK;
                return Ok(_response);
            }
            catch (Exception e )
            {
                _response.isExitoso = false;
                _response.ErrorMessages = new List<string> { e.ToString() };

            }
            return _response;
           
        }


```

```csharp
  public async  Task<ActionResult<APIResponse>> crearVilla([FromBody] VillaCreateDto createDto) {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                if (await _villaRepo.Obtener(v => v.Nombre.ToLower() == createDto.Nombre.ToLower()) != null)
                {
                    ModelState.AddModelError("NombreExiste", "La villa con ese nombre ya existe");
                    return BadRequest(ModelState);
                }

                if (createDto == null)
                {
                    return BadRequest(createDto);
                }
                Villa modelo = _mapper.Map<Villa>(createDto);
                await _villaRepo.Crear(modelo);
                _response.Resultado = modelo;
                _response.statusCode = HttpStatusCode.Created;
                return CreatedAtRoute("GetVilla", new { id = modelo.Id }, _response);
            }
            catch (Exception e)
            {

                _response.isExitoso = false;
                _response.ErrorMessages = new List<string> { e.ToString() };
            }
            return _response;
        }

```


#### Código de estado 204
- No se puede aplicar esto a los que devuelven “No Content (204)” porque:
   -	Técnicamente un 204 no tiene una respuesta.
   -	Una Interfaz (como IActionResult por ej) no puede especificar el tipo de dato de un parámetro de tipo genérico. Ejemplo: iActionResult&lt;APIResponse>.
- Si lo quieres hacer igual, cambia el 204 por un 200:


```csharp
public async Task<IActionResult> DeleteVilla(int id)
        {
            try
            {
                if (id == 0)
                {
                    _response.isExitoso = false;
                    _response.statusCode = HttpStatusCode.BadRequest;
                    return BadRequest(_response);
                }

                var villa = await _villaRepo.Obtener(v => v.Id == id);
                if (villa == null)
                {
                    _response.isExitoso = false;
                    _response.statusCode = HttpStatusCode.NotFound;
                    return NotFound(_response);
                }

                
                await _villaRepo.Remover(villa);
                _response.statusCode = HttpStatusCode.NoContent;
                return Ok(_response);
            } catch (Exception e)
            {
                _response.isExitoso = false;
                _response.ErrorMessages = new List<string> { e.ToString() };
            }

            return BadRequest(_response);
        }

```

```csharp
public async Task<IActionResult> UpdateVilla(int id , [FromBody] VillaUpdateDto updateDto)
        {
            if (updateDto == null || id!= updateDto.Id)
            {
                _response.isExitoso = false;
                _response.statusCode = HttpStatusCode.BadRequest;
                return BadRequest(_response);
            }
            Villa modelo = _mapper.Map<Villa>(updateDto);
           await _villaRepo.Actualizar(modelo);
            _response.statusCode = HttpStatusCode.NoContent;
           
            return Ok(_response);
        }

```


```csharp
   public async Task<IActionResult> UpdatePartialVilla(int id, JsonPatchDocument<VillaUpdateDto> patchDto)
        {
            if (patchDto == null || id == 0)
            {
                _response.isExitoso = false;
                _response.statusCode = HttpStatusCode.BadRequest;
                return BadRequest(_response);
            }
            var villa = await  _villaRepo.Obtener(v => v.Id == id , false);
            if (villa == null) {
                _response.isExitoso = false;
                _response.statusCode = HttpStatusCode.BadRequest;
                return BadRequest(_response);
            }
          
            VillaUpdateDto villaDto = _mapper.Map<VillaUpdateDto>(villa);
            patchDto.ApplyTo(villaDto , ModelState);
            if (!ModelState.IsValid)
            {
               
                return BadRequest(ModelState);
            }
            Villa modelo = _mapper.Map<Villa>(villaDto);

            await _villaRepo.Actualizar(modelo);
            _response.statusCode = HttpStatusCode.NoContent;
            return Ok(_response);
        }

```

## Modelo Número de Villa

#### Corregir error fecha creación/actualización
- Para que el valor de las fechas se asigne bien en el Modelo Villa, hacemos lo siguiente.
- En el villaController, específicamente el método de CrearVilla:

```csharp
                Villa modelo = _mapper.Map<Villa>(createDto);
                modelo.FechaActualizacion = DateTime.Now;
                modelo.FechaCreacion = DateTime.Now;
                await _villaRepo.Crear(modelo);
                _response.Resultado = modelo;
                _response.statusCode = HttpStatusCode.Created;
                return CreatedAtRoute("GetVilla", new { id = modelo.Id }, _response);

```
#### Nuevo Modelo
- Al crear un nuevo modelo debemos:
   - Modificar el dbContext para asignarlo como una tabla de la BD.
   - Crear su repositorio (interface e implementación), Dtos y su controlador.
   - Crear su mapeo.
- Creamos la clase NumeroVilla en la carpeta Modelos.
- Representa una tabla en la BD.
- Este modelo va a tener una relación de uno a muchos con la tabla Villa. Ósea una Villa puede tener muchos NumeroVilla.
- En NumeroVilla.cs:


```csharp
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MiApp_API.Modelos
{
    public class NumeroVilla
    {
        [Key , DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int VillaNro { get; set; }


        [Required]
        public int VillaId { get; set; }

        [ForeignKey("VillaId")]
        public Villa Villa { get; set; }

        public string DetalleEspecial { get; set; }

        public DateTime FechaCreacion { get; set; }


        public DateTime FechaActualizacion { get; set; }
    }
}

```

:::tip Observación
- Con DatabaseGeneratedOption.None , especificamos que la primary key la debemos asignar nosotros. Ósea debemos asignarle un valor a la propiedad que represente la primary key.
- El  atributo ForeignKey recibe como parámetro posicional el nombre de la propiedad que va a representar la foreign key . Este atributo se utiliza en una propiedad cuyo tipo de dato es el modelo(tabla) al cual hace referencia.
- Con el atributo ForeignKey , el valor de la propiedad Villa es la villa que hace referencia su foreign key (la propiedad VillaId).
:::


#### Dtos
- Debemos crear tres DTO: 
    - Uno normal.
    - El Dto para crear un modelo.
    - El Dto para actualizar un modelo.

1. Agregamos una clase en la carpeta Modelos/Dto llamado NumeroVillaDto.cs.
   - Esta clase contendrá lo siguiente:

```csharp
using System.ComponentModel.DataAnnotations;

namespace MiApp_API.Modelos.Dto
{
    public class NumeroVillaDto
    {
  
        public int VillaNro { get; set; }


        [Required]
        public int VillaId { get; set; }

   

        public string DetalleEspecial { get; set; }

    }
}

```

:::tip Recordatorio
- Una clase DTO contiene los datos que desea exponer al usuario.
:::


2. Agregamos otra clase en la carpeta Modelos/Dto llamado NumeroVillaCreateDto.cs.
    - Esta clase contendrá lo siguiente:

```csharp
using System.ComponentModel.DataAnnotations;

namespace MiApp_API.Modelos.Dto
{
    public class NumeroVillaCreateDto
    {
        public int VillaNro { get; set; }


        [Required]
        public int VillaId { get; set; }



        public string DetalleEspecial { get; set; }
    }
}

```

:::tip Observación
- A pesar que tienen las mismas propiedades, es una buena práctica dividir los DTO de una entidad(modelo) en varios.

:::

3. Finalmente creamos NumeroVillaUpdateDto.cs con las mismas propiedades también:


```csharp
using System.ComponentModel.DataAnnotations;

namespace MiApp_API.Modelos.Dto
{
    public class NumeroVillaUpdateDto
    {
  
        public int VillaNro { get; set; }


        [Required]
        public int VillaId { get; set; }

   

        public string DetalleEspecial { get; set; }

    }
}

```

#### Mapeo
- Ahora creamos su mapeo.
- En MappingConfig.cs:
```csharp
public class MappingConfig : Profile
    {
        public MappingConfig()
        {
            // 1 Forma
            CreateMap<Villa, VillaDto>();
            CreateMap<VillaDto, Villa>();

            // 2 Forma
            CreateMap<Villa, VillaCreateDto>().ReverseMap();
            CreateMap<Villa, VillaUpdateDto>().ReverseMap();


            CreateMap<NumeroVilla,  NumeroVillaDto>().ReverseMap();
            CreateMap<NumeroVilla, NumeroVillaUpdateDto>().ReverseMap();
            CreateMap<NumeroVilla, NumeroVillaCreateDto>().ReverseMap();

        }
    }

```
#### DBContext
- En nuestro DbContext debemos agregar el dbSet de NumeroVilla
- En ApplicationDbContext.cs:
```csharp
public class ApplicationDbContext : DbContext
    {

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options ) : base(options)
        {
            
        }
        public DbSet<Villa> Villas {get;set;}
        public DbSet<NumeroVilla> NumeroVillas { get; set; }


```

:::tip Recordatorio
- Cada propiedad de la clase dbContext es una tabla en la BD.
- El nombre de cada propiedad debe ir en plural.

:::


- En la consola de administrador de paquetes, ejecutamos los comandos de la migración para crear la tabla en la BD:

```powershell
add-migration AgregarNumeroVilla
update-database
```


:::tip
- Luego de ejecutar los comandos, se recomienda fijarse en sql server  management studio (o la herramienta que uses) si la tabla se creó correctamente.


:::

#### Interfaces
- Ahora debemos hacer las interfaces y sus implementaciones correspondiente.
- En la carpeta IRepositorio , creamos la interfaz INumeroVillaRepositorio (que puede ser una copia de IVillaRepositorio porque es casi igual).
- Contendrá casi lo mismo:


```csharp
using MiApp_API.Modelos;

namespace MiApp_API.Repositorio.IRepositorio
{
    public interface INumeroVillaRepositorio : IRepositorio<NumeroVilla>
    {
        Task<NumeroVilla> Actualizar(NumeroVilla entidad);
    }
}

```
- Ahora creamos la implementación, en Repositorio creamos una clase llamada NumeroVillaRepositorio (que puede ser una copia de VillaRepositorio porque es casi igual).
- Contendra casi lo mismo:


```csharp

using MiApp_API.Datos;
using MiApp_API.Modelos;
using MiApp_API.Repositorio.IRepositorio;


namespace MiApp_API.Repositorio
{
    public class NumeroVillaRepositorio : Repositorio<NumeroVilla>, INumeroVillaRepositorio
    {
        private readonly ApplicationDbContext _db;


        public NumeroVillaRepositorio(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }

        public async Task<NumeroVilla> Actualizar(NumeroVilla entidad)
        {
            entidad.FechaActualizacion = DateTime.Now;
            _db.NumeroVillas.Update(entidad);
            await _db.SaveChangesAsync();
            return entidad;
        }
    }
}

```
#### Agregamos los servicios
- Agregamos el servicio para poder usar los métodos que definimos en la interfaz.
- En Progam.cs:

```csharp
builder.Services.AddAutoMapper(typeof(MappingConfig));
builder.Services.AddScoped<IVillaRepositorio, VillaRepositorio>();
builder.Services.AddScoped<INumeroVillaRepositorio, NumeroVillaRepositorio>();
var app = builder.Build();

```

#### Creamos el controlador
- Cada modelo, debe tener su propio controlador que lo gestione.
- En la carpeta Controllers , creamos una copia de VillaController , que se va a llamar NumeroVillaController.
- En NumeroVillaController.cs:

```csharp
using AutoMapper;
using MiApp_API.Datos;
using MiApp_API.Modelos;
using MiApp_API.Modelos.Dto;
using MiApp_API.Repositorio.IRepositorio;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace MiApp_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NumeroVillaController : ControllerBase
    {

        private readonly ILogger<NumeroVillaController> _logger;
        private readonly IVillaRepositorio _villaRepo;
        private readonly INumeroVillaRepositorio _numeroRepo;
        private readonly IMapper _mapper;
        protected APIResponse _response;

        public NumeroVillaController(ILogger<NumeroVillaController> logger, IVillaRepositorio villaRepo, IMapper mapper,
           INumeroVillaRepositorio numeroRepo)
        {
            _logger = logger;
            _villaRepo = villaRepo;
            _mapper = mapper;
            _response = new();
            _numeroRepo = numeroRepo;
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<APIResponse>> GetNumeroVillas()
        {
            try
            {
                _logger.LogInformation("Obtener Numeros Villas");
                IEnumerable<NumeroVilla> numeroVillaList = await _numeroRepo.ObtenerTodos();
                _response.Resultado = _mapper.Map<IEnumerable<NumeroVillaDto>>(numeroVillaList);
                _response.statusCode = HttpStatusCode.OK;
                return Ok(_response);
            } catch (Exception e)
            {
                _response.isExitoso = false;
                _response.ErrorMessages = new List<string> { e.ToString() };
            }
            return _response;


        }
        [HttpGet("id:int" , Name ="GetVilla")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async  Task<ActionResult<APIResponse>> GetNumeroVilla(int id)
        {
            try
            {
                if (id == 0)
                {
                    _logger.LogError("Error al traer Numero  Villa con Id  " + 0);
                    _response.statusCode = HttpStatusCode.BadRequest;
                    _response.isExitoso = false;
                    return BadRequest(_response);
                

                }

                var numeroVilla = await _numeroRepo.Obtener(v => v.VillaNro == id);
                if (numeroVilla == null)
                {
                    _response.statusCode = HttpStatusCode.NotFound;
                    _response.isExitoso = false;
                    return NotFound(_response);
                }
                _response.Resultado = _mapper.Map<NumeroVillaDto>(numeroVilla);
                _response.statusCode = HttpStatusCode.OK;
                return Ok(_response);
            }
            catch (Exception e )
            {
                _response.isExitoso = false;
                _response.ErrorMessages = new List<string> { e.ToString() };

            }
            return _response;
           
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async  Task<ActionResult<APIResponse>> crearNumeroVilla([FromBody] NumeroVillaCreateDto createDto) {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                if (await _numeroRepo.Obtener(v => v.VillaNro == createDto.VillaNro) != null)
                {
                    ModelState.AddModelError("NombreExiste", "El numero de  villa  ya existe");
                    return BadRequest(ModelState);
                }


                // Verificamos que la villa exista
                if (await _villaRepo.Obtener(v => v.Id == createDto.VillaId ) == null) {
                    ModelState.AddModelError("ClaveForanea", "El ID de la  villa  no existe");
                    return BadRequest(ModelState);
                }


                if (createDto == null)
                {
                    return BadRequest(createDto);
                }
                NumeroVilla modelo = _mapper.Map<NumeroVilla>(createDto);
                modelo.FechaActualizacion = DateTime.Now;
                modelo.FechaCreacion = DateTime.Now;
                await _numeroRepo.Crear(modelo);
                _response.Resultado = modelo;
                _response.statusCode = HttpStatusCode.Created;
                return CreatedAtRoute("GetVilla", new { id = modelo.VillaNro }, _response);
            }
            catch (Exception e)
            {

                _response.isExitoso = false;
                _response.ErrorMessages = new List<string> { e.ToString() };
            }
            return _response;
        }


        [HttpDelete("{id:int}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> DeleteNumeroVilla(int id)
        {
            try
            {
                if (id == 0)
                {
                    _response.isExitoso = false;
                    _response.statusCode = HttpStatusCode.BadRequest;
                    return BadRequest(_response);
                }

                var numeroVilla = await _numeroRepo.Obtener(v => v.VillaNro == id);
                if (numeroVilla == null)
                {
                    _response.isExitoso = false;
                    _response.statusCode = HttpStatusCode.NotFound;
                    return NotFound(_response);
                }

                
                await _numeroRepo.Remover(numeroVilla);
                _response.statusCode = HttpStatusCode.NoContent;
                return Ok(_response);
            } catch (Exception e)
            {
                _response.isExitoso = false;
                _response.ErrorMessages = new List<string> { e.ToString() };
            }

            return BadRequest(_response);
        }

        [HttpPut ("{id:int}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> UpdateNumeroVilla(int id , [FromBody] NumeroVillaUpdateDto updateDto)
        {
            if (updateDto == null || id!= updateDto.VillaNro)
            {
                _response.isExitoso = false;
                _response.statusCode = HttpStatusCode.BadRequest;
                return BadRequest(_response);
            }

            // Verificamos que la villa exista
            if (await _villaRepo.Obtener(v => v.Id == updateDto.VillaId) == null)
            {
                ModelState.AddModelError("ClaveForanea", "El ID de la  villa  no existe");
                return BadRequest(ModelState);
            }
            NumeroVilla modelo = _mapper.Map<NumeroVilla>(updateDto);
           await _numeroRepo.Actualizar(modelo);
            _response.statusCode = HttpStatusCode.NoContent;
           
            return Ok(_response);
        }


      

    }

  
}

```

:::tip Observación
- Tenemos acceso a las dos repositorios y sus métodos, por si queremos hacer alguna búsqueda de alguna Villa.
:::


:::tip
- Se utilizan un controlador por entidad, para poder identificar qué modelo estas usando a través del endpoint (url).
:::


#### Attribute routes with the same name 'GetVilla' must have the same template

- Al ejecutarlo nos va a tirar un error: Attribute routes with the same name 'GetVilla' must have the same template.
- El error se produce porque no se puede tener dos endpoint con el mismo nombre (el que se especifica con el parámetro nombrado “Name” de un atributo verbo como HttpGet , HttpPost , etc).
- Cambiamos el nombre del endpoint GetNumeroVilla en NumeroVillaController.cs para solucionar este problema:

```csharp
    [HttpGet("id:int" , Name ="GetNumeroVilla")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async  Task<ActionResult<APIResponse>> GetNumeroVilla(int id)

```

#### Lo ejecutamos
- Podemos ver todos los endpoints(url) que creo el controlador para manipular los datos del modelo NumeroVilla.


## Deploy
- Para hacer deploy utilizaremos el servidor web IIS.

#### Habilitamos IIS
1. Buscamos “Activar o desactivar las caracteristicas de Windows” en Windows.
2. Habilitamos Internet Information Services.
3. Debe estar Marcado "Herramientas de Administración web" y "Servicios World Wide Web".



#### Carpeta inetpub
- Si lo hicimos bien, en el disco C se creo la carpeta inetpub que es donde IIS va a tomar los proyectos que desarrollamos.
- La carpeta raiz es wwwroot.
- En la carpeta raiz creamos una carpeta llamada netapi (aca van a ir los archivos).


#### En el proyecto
- En Progam.cs , cambiamos lo siguiente:


```csharp
// Configure the HTTP request pipeline.
if (app.Environment.IsProduction())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

```
- En Properties/launchSettings.json:

```csharp
  "profiles": {
    "http": {
      "commandName": "Project",
      "dotnetRunMessages": true,
      "launchBrowser": true,
      "launchUrl": "swagger",
      "applicationUrl": "http://localhost:5186",
      "environmentVariables": {
        "ASPNETCORE_ENVIRONMENT": "Production"
      }
    },

```

#### Pasos a seguir para hacer deploy
#### Paso 1
1. Hacemos click derecho en el nombre del proyecto – Abrir carpeta en el explorador de archivos. 
2. Nos ubicamos en /bin/Release/net7.0 (en esta carpeta se van a crear los archivos que vamos a generar en el siguiente paso, sí está llena de archivos vacíala).
3. En esta ubicación creamos una carpeta llamada publish.

#### Paso 2
1. Hacemos click derecho en el nombre del proyecto – publicar – Carpeta.
2. Ubicación de la carpeta: Aca va la ubicación de la carpeta publish.
3. Le damos a finalizar.
4. Luego hacemos click en Publicar.
5. Si hicimos todo bien, se crearon archivos en la carpeta publish.
6. Copiamos todos los archivos/carpetas que se generaron en la carpeta publish (Control + E) al directorio C:\inetpub\wwwroot\netapi (la carpeta que creamos para IIS).

#### En IIS
1. En sitios click derecho – Agregar Sitio web:
    - Nombre del sitio: apivillas.
    - Ruta de acceso física: C:\inetpub\wwwroot\netapi (La carpeta que creamos con los archivos que generamos).
    - Conectar como – Usuario especifico – establecer:
        - Nombre de usuario: el usuario de la cuenta con el cual entras al equipo(pc).
        - Contraseña: la contraseña que usas para entrar al equipo.
    - Le damos a aceptar.
2. Luego hacemos clic en Probar configuración para ver que este todo bien.
3. Por último, hacemos clic en Aceptar.

:::warning
- El usuario que especificamos, debe tener acceso a la ruta de acceso física.
:::


:::tip
- Si tenes dos sitios con el mismo puerto.
- Para iniciar uno, tenes que detener el otro.
:::


#### Configuración básica de Grupo de aplicaciones
- El grupo de aplicaciones que generamos al crear el sitio, debe tener la siguiente configuración básica:
  - Version de .NET CLR: Sin código administrado.
  - Modo de canalización administrada: Integrada.
- En establecer valores predeterminados:
  - Version de .NET CLR: Sin código administrado.
  - Identidad: ApplicationPoolIdentity.

#### En el servidor (en IIS)
- En la pestaña modulos , nos fijamos si esta instalado  AspNetCoreModuleV2.
- Si no lo esta, lo instalamos:
   1. Entramos al [sitio web](https://dotnet.microsoft.com/en-us/download/dotnet/7.0).
   2. Instalamos ASP.NET Core Runtime X (el que dice que tiene soporte con ASP.Net Core Module v2) – Windows – Hosting Bundle.
   3. Una vez instalado, reiniciamos el servidor en ISS y entramos a módulos para verificar que está instalado.


#### Desplegamos!
- Iniciamos el sitio que creamos y lo abrimos con la opcion Examinar.
- Nos tiraría un error 404.
- Pero si entramos a localhost/swagger nos abriría un index.html con la API.


#### Usar una BD
- Al hacer una petición Get, nos tiraría un error, esto es porque la BD está mal configurada ya que nos pide autenticación.
- El error se debe a que IIS no se puede conectar a la BD porque no tiene permisos.
- Para solucionar esto: 
   - En SQL Server Management Studio, abrimos la carpeta que corresponde a la BD y en la carpeta Security/Users , creamos un nuevo usuario (click derecho – new user):
      - User Name: IIS APPPOOL\apivillas (este ultimo corresponde al nombre del sitio).
      - User Login: IIS APPPOOL\apivillas (este ultimo corresponde al nombre del sitio).
      - En Membership:
           - Marcamos db_owner para que pueda tener acceso a la bd.
   - En IIS:
        - Grupo de Aplicaciones – Seleccionamos la que generamos al crear el sitio(apivillas) – Configuración avanzada y en entidad le asignamos LocalSystem.
  

:::tip
- En lugar de poner LocalSystem, podes poner en “Cuenta personalizada” el usuario de Windows con el cual se ingresa a la base de datos.
- De esta manera es mas seguro.

:::

:::tip
- Otra forma de implementarlo, es desactivando la opcion "Trusted_Connection" con false y acceder mediante un usuario de la bd (que se tiene que crear en sql server). Para esto se tiene que modificar la url de conexión en Appsetings.json   
- De esta forma podemos seguir usando "ApplicationPoolIdentity" que es mas seguro.
:::

#### ¡Listo!



