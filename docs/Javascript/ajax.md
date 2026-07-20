---
sidebar_position: 8
---
# AJAX Y FETCH

## JS - FETCH 

Vive en el navegador.
-	fetch : La API Fetch te permite comunicarte con un servidor para obtener/eliminar/eliminar/crear recursos.
- `fetch()` es un método proporcionado por la API Fetch que permite realizar solicitudes HTTP en JavaScript.
- Es utilizado generalmente para realizar solicitudes a una API.
- El método `fetch()` recibe un argumento obligatorio, que es la ruta de acceso (conocida como `endpoint` o `URL`) utilizada para realizar una solicitud. Esa ruta de acceso indica dónde se encuentra el servidor, a dónde se enviará la petición y sobre qué recurso queremos trabajar.
- `fetch()` devuelve una promesa que contiene la respuesta del servidor en un objeto `Response`. Este objeto dispone de varios métodos para acceder y procesar el contenido de la respuesta.
- En pocas palabras, `fetch()` realiza una petición a un servidor (indicado en la ruta de acceso) y recibe una respuesta que se almacena en una promesa.



## Ajax 
- Significa **Asynchronous JavaScript + XML** (JavaScript asíncrono + XML). Aunque originalmente utilizaba XML, hoy en día es común utilizar JSON.
- AJAX es una técnica que permite que una página web se comunique con el servidor sin necesidad de recargar o actualizar toda la página.
- Esto permite actualizar solo las partes necesarias de la página, haciendo que la aplicación sea más rápida y brindando una mejor experiencia al usuario.
- Tradicionalmente, AJAX utilizaba `XMLHttpRequest`, pero actualmente es más común utilizar `fetch()` para realizar las solicitudes.

:::tip
AJAX no es una tecnología específica, sino una técnica que combina HTML, CSS, JavaScript y solicitudes HTTP para comunicarse con el servidor de forma asíncrona.
:::




#### Elementos clave de AJAX
1. **HTML y CSS:** estructuran y dan estilo a la página web.
2. **JavaScript:** permite comunicarse con el servidor a través de operaciones asíncronas.
3. **DOM:** permite actualizar el contenido de la página sin recargarla.
4. **`XMLHttpRequest` o `fetch()`:** permiten realizar las solicitudes al servidor. Actualmente es más común utilizar `fetch()`.
5. **JSON:** es el formato o la estructura de los datos que se envían o se reciben del servidor.

#### ¿Cómo funciona?

1. Un usuario interactúa con la página (por ejemplo, haciendo clic en un botón).
2. JavaScript envía una solicitud al servidor utilizando `fetch()` o `XMLHttpRequest`.
3. El servidor procesa la solicitud y devuelve una respuesta, normalmente en formato JSON.
4. JavaScript procesa la respuesta y actualiza el contenido de la página mediante el DOM, sin recargar toda la página.








## Metodos nativos para Ajax

#### Viejo
[XMLHttpRequest](https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
#### Nuevo
[Fetch API](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)

## Fetch API
- La API Fetch proporciona una interfaz para realizar peticiones HTTP y obtener respuestas del servidor.
- Una interfaz es un conjunto de métodos, propiedades o funciones que una API pone a disposición para que podamos utilizar una funcionalidad sin conocer cómo se realiza internamente.
- Por ejemplo:
    - API Fetch → proporciona el método `fetch()`.
    - DOM API → proporciona métodos como `querySelector()`, `createElement()`, `appendChild()`, etc.
    - Geolocation API → proporciona métodos como `getCurrentPosition()` y `watchPosition()`.
- Estas APIs están integradas en el navegador, por lo que el navegador nos proporciona los métodos, objetos y propiedades necesarios para poder interactuar con ellas. Por ejemplo:
    - Con los métodos y propiedades del objeto `document` interactuamos con la DOM API.
    - Con `fetch()` interactuamos con la Fetch API.
- Entonces podriamos decir que:
    - Una API es como un programa que realiza diferentes funciones. El programador puede utilizar esas funciones sin saber cómo se realizan internamente.
    - Una interfaz es un conjunto de métodos, propiedades, objetos, etc. que nos permite acceder a las funciones que ofrece una API (programa).
    - Por ejemplo, al usar `fetch()`, este se comunica con el programa Fetch (API) y le dice: "quiero que envíes una petición a X servidor". El programa se encarga de realizar la acción por nosotros y devuelve el resultado mediante el método.
    - Entonces, una interfaz es un intermediario entre el programador y la API. A través de la interfaz solicitamos una acción, y la API se encarga de realizarla sin que sepamos cómo lo hace internamente.
    - Cuando decimos que una API está integrada al navegador, significa que el navegador tiene disponible ese programa (API). Es como si el navegador fuera un sistema operativo con un programa instalado y nos proporcionara las interfaces necesarias para poder utilizar ese programa desde JavaScript.
- El método `fetch()` se comunica con la Fetch API y nos permite enviar solicitudes a servidores.
- [**Parámetros de `fetch()`**](https://developer.mozilla.org/en-US/docs/Web/API/fetch): si solo recibe la URL, realiza una petición `GET` por defecto al servidor y devuelve una promesa con la respuesta. Con un segundo parámetro es posible configurar la solicitud, como el método HTTP, las cabeceras o el cuerpo, permitiendo crear, modificar o eliminar recursos.
- Antes de la API Fetch, este tipo de solicitudes se realizaban utilizando `XMLHttpRequest`.

```js
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));

```

:::tip Explicación
- Método `fetch(url)`:
    - Por defecto realiza una petición `GET` a la URL indicada. Este tipo de petición se utiliza principalmente para obtener recursos.
    - Si se desea crear, modificar o eliminar un recurso, se debe utilizar un segundo parámetro en `fetch()`, que es un objeto donde podemos configurar opciones como el método HTTP, las cabeceras o el cuerpo de la solicitud.
    - Cuando accedemos a una URL desde el navegador, normalmente se realiza una petición `GET` a la URL para obtener el recurso indicado en esa dirección. Gran parte del contenido que vemos en una página web llega mediante este tipo de solicitudes.
- Método `json()`:
    - Es un método del objeto `Response`.
    - Por lo general, un servidor devuelve la respuesta en formato JSON, que es una forma de estructurar datos.
    - Este método permite leer la respuesta (técnicamente, lee el contenido del body) y convierte el JSON en un objeto JavaScript.
    - Devuelve una promesa con el objeto JavaScript resultante.
:::

## Conceptos al realizar peticiones HTTP
### HTTP
- **Hypertext Transfer Protocol (HTTP)** (Protocolo de Transferencia de Hipertexto) es el protocolo que permite la comunicación entre un cliente y un servidor mediante solicitudes y respuestas.
- Estas solicitudes pueden utilizarse para obtener un recurso, crear uno nuevo, modificarlo o eliminarlo.

### Ruta (Path)
- Es la dirección (URL) que se utiliza para obtener, crear, modificar o eliminar un recurso.
- Indica dónde se encuentra el servidor, a dónde se enviará la petición y sobre qué recurso queremos trabajar.
- En pocas palabras, mediante esta dirección enviamos una petición al servidor y recibimos una respuesta.
- También suele conocerse como **endpoint**, **URL**, **path** o **URI**, aunque no todos estos términos significan exactamente lo mismo.


### Método HTTP
- Indica la acción que se desea realizar sobre un recurso (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`, etc.).
- Cada método tiene un propósito diferente y nosotros elegimos cuál utilizar según la operación que queremos realizar.
- **GET:** se utiliza para obtener recursos del servidor. Es el método que `fetch()` utiliza por defecto cuando no se especifica otro.
### Cabeceras (headers)
- Son opcionales.
- Sirven para enviar información adicional al servidor junto con la petición.
- Por ejemplo, permiten indicar el tipo de contenido que se envía, información de autenticación o preferencias del cliente.
### Códigos de respuesta (Response Codes)
- Un código de estado indica si una petición fue exitosa o no, qué acción realizó el servidor y, en caso de error, el motivo.
- [Códigos de estado HTTP](https://developer.mozilla.org/es/docs/Web/HTTP/Status)
- [HTTP Cats](https://http.cat/)


### JSON
- **JSON (JavaScript Object Notation)** es un formato de texto, es decir, una forma de estructurar la información utilizando una sintaxis similar a la de los objetos de JavaScript.
- Se utiliza comúnmente para intercambiar datos entre aplicaciones, como por ejemplo entre un cliente y un servidor.
- Es el formato estándar, es decir, el formato más utilizado por los servidores y clientes, debido a que es ligero, fácil de leer y compatible con la mayoría de los lenguajes de programación.
- Información que suele estar en formato JSON:
    - La respuesta que envía el servidor al cliente.
    - La información que envía el cliente al servidor para crear, modificar o eliminar un recurso.
### Estructura del JSON
- Como se describió previamente, un JSON es una cadena de texto (`string`) cuyo contenido  recuerda al de los objetos literales de JavaScript.
- Un JSON puede contener cualquier tipo de dato, ya sea primitivo o no: cadenas (`string`), números (`number`), arreglos (`array`), booleanos (`boolean`), objetos (`object`) y `null`.
- Esto permite construir estructuras jerárquicas de datos, como la siguiente: [Ejemplo de JSON (PokéAPI)](https://pokeapi.co/api/v2/pokemon/ditto)
### [Format para chrome](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa)

## Volviendo a Fetch
:::tip
Podés usar la pestaña **Network (Red)** de la herramienta de desarrollo del navegador Chrome (**DevTools**) para ver las peticiones realizadas y sus respectivas respuestas.
:::
```js
const url = "https://pokeapi.co/api/v2/pokemon/";

fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));

```
- Aquí estamos realizando una petición HTTP a un servidor para obtener un recurso.
- El servidor nos devuelve la respuesta en formato JSON.
- El uso más simple de `fetch()` recibe un argumento, que es la URL del recurso que queremos obtener, y devuelve una promesa con un objeto `Response` que contiene la respuesta del servidor.
- Para acceder al contenido de la respuesta, se utilizan diferentes métodos dependiendo del formato de los datos recibidos. Si la respuesta está en formato JSON, utilizamos el método `json()` para leer el body (los datos que devuelve el servidor) y convertirlos en un objeto JavaScript que podamos procesar.
- El método `json()` devuelve otra promesa con el objeto JavaScript resultante.



:::tip GET
- Si una URL se puede abrir directamente en el navegador, significa que esa URL acepta peticiones de tipo `GET`.
- Por detrás, el navegador realiza una petición `GET` a la URL ingresada para obtener el recurso indicado.
:::

:::warning API PÚBLICAS
Las APIs gratuitas y públicas (sin `API Key`) a veces pueden dejar de funcionar, limitar las solicitudes o estar temporalmente caídas.
:::


```js
//fetch(path/uri)
fetch("https://pokeapi.co/api/v2/pokemon/ditto")
.then((respuesta) => {
    // Vemos el status (codigo de respuesta ) , propiedad ok , cabeceras
    console.log(respuesta);
   return respuesta.json();
}).then((data) => console.log(data.forms[0]));

```
:::tip Observación
- El objeto `Response` contiene información como la propiedad `ok` (indica que el servidor devolvió una respuesta exitosa, con un código de estado HTTP entre 200 y 299), el código de estado (`status`), las cabeceras (`headers`), entre otras propiedades.
:::
```js
//fetch(path/uri)
fetch("https://pokeapi.co/api/v2/pokemon/ditto")
.then((respuesta) => {
    // Vemos el status (codigo de respuesta ) , cabeceras
    console.log(respuesta);
   return respuesta.json();
}).then((data) => console.log(data.forms[0].name));

```

## Parametros de fetch

### 1- resource
- Es la ruta de acceso o ruta (`path`).
- En resumen, indica a dónde se enviará la petición.

### 2 - init (opcional)
- Es un objeto que permite configurar la petición que se va a realizar.
- Algunas de sus propiedades son:
    - **body:** Es la información que se envía al servidor en una solicitud.
        - Contiene los datos necesarios para realizar una acción específica, como crear o modificar un recurso.
        - Puede contener información en diferentes formatos, como `Blob`, `FormData`, `URLSearchParams`, `ReadableStream`, entre otros.
        - En una petición `GET`, normalmente los datos necesarios  se envían mediante la URL utilizando parámetros (`query`) y no mediante el `body`.
    - **credentials:** Controla si se envían o no las cookies junto con la solicitud.
        - Dependiendo del valor indicado:
            - `same-origin`: solo envía cookies si la solicitud es al mismo origen.
            - `include`: envía cookies incluso en solicitudes a otros orígenes.
            - `omit`: no envía cookies.
    - **mode:** Define cómo el navegador maneja las solicitudes entre diferentes orígenes (dominios):
        - `cors`: permite solicitudes entre diferentes orígenes si el servidor lo autoriza.
        - `no-cors`: permite realizar la solicitud, pero limita el acceso a la respuesta.
        - `same-origin`: solo permite solicitudes al mismo origen.
    - **method:** Define el método HTTP de la petición, por ejemplo `GET`, `POST`, `PUT` o `DELETE`. Por defecto utiliza `GET`.
    - **headers:** Permite agregar información adicional a la solicitud, como el tipo de contenido (`Content-Type`) o datos que el servidor utiliza para autenticar al usuario.




## setAttribute()
el  setAttribute()  es para modificar un atributo.

1 parametro: el atributo a modificar

2 parametro: el nuevo valor del atributo.




## Practica

[Documentacion de la api](https://rickandmortyapi.com/documentation/)

[URL a utilizar](https://rickandmortyapi.com/api/character)


```html
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>API REST</title>
        <link
            crossorigin="anonymous"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            rel="stylesheet"
        />
    </head>

    <body>
          <div class="container my-5">
               <!-- Spinner cargando -->
               <section class="d-flex align-items-center d-none" id="loading">
                <strong>Cargando...</strong>
                <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
               </section>

               <section class="row" id="card-dinamicas">
                   
               </section>
                

               <template id="template-card">
                <article class="col-12 col-md-6 col-lg-3 mb-3">
                      <div class="card text-center shadow">
                          <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="" class="card-img-top">
                          <div class="card-body">
                              <h5 class="card-title text-primary lead">Nombre personaje</h5>
                              <p class="lead text-secondary">Human</p>
                          </div>
                      </div>

                </article>
             </template>

          </div>
        <script src="app.js"></script>
    </body>
</html>

```





```js
// Cuando carga el DOM
document.addEventListener("DOMContentLoaded", () => {
  fetchData();
})

const fetchData =  async () => {
    console.log("Obteniendo datos");
    
    try {
        loadingData(true);
        const res = await fetch("https://rickandmortyapi.com/api/character");
        const data = await res.json();
         pintarCard(data);
    } catch (error) {

    } finally {
        loadingData(false);
    }

}

const loadingData = estado => {
    const loading = document.getElementById('loading');
    if (estado) {
        loading.classList.remove('d-none');
    } else {
        loading.classList.add('d-none');
    }
    
    
}

const pintarCard = data => {
    const contenedorCards = document.getElementById('card-dinamicas');
    const templateCard = document.getElementById('template-card').content;
    const fragment = document.createDocumentFragment();
    data.results.forEach(item => {
        const clone = templateCard.cloneNode(true);
        clone.querySelector("h5").textContent = item.name;
        clone.querySelector("p").textContent = item.species;
        clone.querySelector("img").setAttribute("src" , item.image);

        fragment.appendChild(clone);

    })

    contenedorCards.appendChild(fragment);
}

```

Codigo con una paginacion incompleta:

```js

// Cuando carga el DOM
document.addEventListener("DOMContentLoaded", () => {
  fetchData();
})

const fetchData =  async (url = "https://rickandmortyapi.com/api/character") => {

    
    try {
        loadingData(true);
        const res = await fetch(url);
        const data = await res.json();
         pintarCard(data);
    } catch (error) {

    } finally {
        loadingData(false);
    }

}

const loadingData = estado => {
    const loading = document.getElementById('loading');
    if (estado) {
        loading.classList.remove('d-none');
    } else {
        loading.classList.add('d-none');
    }
    
    
}

const pintarCard = data => {

    const contenedorCards = document.getElementById('card-dinamicas');
    contenedorCards.textContent = "";
    const templateCard = document.getElementById('template-card').content;
    const fragment = document.createDocumentFragment();
    data.results.forEach(item => {
        const clone = templateCard.cloneNode(true);
        clone.querySelector("h5").textContent = item.name;
        clone.querySelector("p").textContent = item.species;
        clone.querySelector("img").setAttribute("src" , item.image);

        fragment.appendChild(clone);

    })
   "";
    contenedorCards.appendChild(fragment);
    pintarPaginacion(data);
}

const pintarPaginacion = data => {
    
    const paginacion = document.getElementById('paginacion');
    paginacion.textContent = "";
    const templatePaginacion = document.getElementById('template-paginacion').content;
    const clone = templatePaginacion.cloneNode(true);
    // Si no existe (es null)
    if (!data.info.prev) {
        clone.querySelector('.btn-outline-secondary').disabled = true;
    } else {
        clone.querySelector('.btn-outline-secondary').disabled = false;
    }
 
    if (!data.info.next) {
        clone.querySelector('.btn-outline-primary').disabled = true;
    } else {
        clone.querySelector('.btn-outline-primary').disabled = false;
    }
    
    paginacion.appendChild(clone);
    
    // paginacion.addEventListener("click" , e => {
    //     console.log("click");
    //     if (e.target.matches('.btn-outline-primary')) {
    //          if (data.info.next) {
    //             fetchData(data.info.next);
    //          }
          
    //     } 
    //     if (e.target.matches('.btn-outline-secondary')) {
    //         if (data.info.prev) {
    //             fetchData(data.info.prev);
    //         }
           
    //     }
    // })
}

```

:::tip Consejos
- Algunas APIs requieren un token de seguridad (`API Key`) para poder utilizarlas. Este token permite identificar al usuario que utiliza la API y, en algunos casos, verificar si tiene permiso para acceder al servicio (por ejemplo, cuando la API requiere un plan de pago).
- No colocar el template directamente donde se va a pintar (renderizar) el contenido. El template debe utilizarse como una estructura que luego se clona y se inserta en el DOM.
- En `fetch()` normalmente se utilizan dos `await`: uno para obtener la respuesta (`Response`) y otro para obtener los datos de la respuesta (`json()`).
- Al trabajar con templates, se recomienda identificar qué elementos son únicos (`id`, clases o etiquetas) para poder seleccionarlos correctamente desde JavaScript.
- Si se realiza un bucle para insertar varios elementos en el DOM, se recomienda utilizar un `DocumentFragment` para agrupar los cambios y mejorar el rendimiento.
:::