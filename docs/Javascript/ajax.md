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

## Conceptos  al realizar PETICIONES HTTP
### HTTP
- Hypertext Transfer Protocol (HTTP) (o Protocolo de Transferencia de Hipertexto en español) es el nombre de un protocolo el cual nos permite realizar una petición.
- Esta petición puede ser para obtener un recurso , crear un recurso , etc.

### Ruta (PATH)
- Es una dirección(url) para realizarle una petición al servidor y  obtener/eliminar/crear/editar  un recurso .
- En pocas palabra con el path hacemos una petición y recibimos una respuesta del servidor.
- Es conocida como endpoint , url , path y Uri.
### Métodos Http
- HTTP define un conjunto de métodos de petición para indicar la acción que se desea realizar. (GET, POST, PUT, PATCH, DELETE) . 
- Todos los métodos hacen acciones diferentes pero nosotros lo configuramos.
- GET = Obtener/Enviar datos por la url. Viene por defecto con fetch . 

### Cabeceras (headers)
Cabeceras HTTP opcionales,  pueden aportar información adicional a los servidores.
### Códigos de respuestas (Response Codes)
Un código de estado, indicando si la petición ha sido exitosa, o no, y debido a que. 

[Codigos](https://developer.mozilla.org/es/docs/Web/HTTP/Status)

[Codigo gato](https://http.cat/)

Es la Respuesta que nos trae el servidor.

### JSON 

JSON: JavaScript Object Notation, es un formato basado en texto estándar para representar datos estructurados en la sintaxis de objetos de JavaScript. Es comúnmente utilizado para transmitir datos en aplicaciones web.

Es el formato estandar para recibir/enviar información.

## Estructura del JSON

- Como se describió previamente, un JSON es una cadena(texto/string) cuyo formato recuerda al de los objetos literales JavaScript.
- Es posible incluir los mismos tipos de datos básicos dentro de un JSON que en un objeto estándar de JavaScript - cadenas, números, arreglos, booleanos, y otros  objeto.

Esto permite construir una jerarquia de datos - [como esta](https://pokeapi.co/api/v2/pokemon/ditto
)

### [Format para chrome](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa)

## Volviendo a Fetch
:::tip
Podes usar la pestaña Network(Red) de la herramienta del navegador Chrome(Devtools) para ver las peticiones que se realizaron y sus respuestas.
:::
```js
const url = "https://pokeapi.co/api/v2/pokemon/";

fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));

```
-	Aquí estamos recuperando un archivo JSON a través de red e imprimiendo en la consola.
-	El uso de fetch() más simple toma un argumento (la ruta del recurso que quieres obtener) y devuelve un objeto Promise conteniendo la respuesta, un objeto Response.
-	Esto es, por supuesto,  una respuesta HTTP sin el archivo JSON.
-	Para extraer el contenido  en formato JSON desde la respuesta, usamos el método json(), el cual está implementado por los objetos Request y Response.
-	El método json() devuelve otra promesa.

:::tip GET 
Si la URL funciona en el navegador, es GET.
:::

:::warning API PUBLICAS
LAS API GRATIS Y PUBLICAS (SIN API KEY) A VECES SE CAEN 
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
:::tip Observacion 
- La respuesta sin el formato JSON contiene propiedades como el ok (Si la solicitud se realizo) , el status , la cabecera, etc
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
- Define la URL / Path / Endpoint que se va a utilizar para realizar una petición.
- Por ahora solo hicimos peticiones GET a la URL para obtener recursos.



### 2- init (opcionales)
- Es un objeto para configurar la petición que se va a realizar.
- Las propiedades del objeto son:
    -  body:  Es la información que se envía al servidor en una solicitud:
       - Contiene la información necesaria para realizar una acción específica y devolver una respuesta satisfactoria.
       - Esto puede ser una Blob, BufferSource, FormData, URLSearchParams, USVString, o ReadableStreamobjeto. 
       - En una petición GET, los datos necesarios para la solicitud viajan en la URL como query y no en el body.
    -  credentials: Controla si se envían o no las cookies (juntos con otros datos de autenticación en la solicitud):
        - Dependiendo del valor que le des, se enviarán cookies de la siguiente manera:
            -	same-origin: solo se envían cookies si la solicitud es al mismo dominio.
            -	include: siempre se envían cookies, incluso para solicitudes a otros dominios.
            -	omit: no se envían cookies, sin importar el dominio.
    -  mode: define cómo el navegador maneja el CORS (Cross-Origin Resource Sharing), que controla la comunicación entre dominios diferentes. Los valores posibles son:
        -	cors: Permite solicitudes entre diferentes dominios si el servidor lo permite.
        -	no-cors: Impide el acceso a la respuesta de un servidor externo, pero la solicitud aún se puede realizar.
        -	same-origin: Solo permite solicitudes al mismo origen (dominio).
    - method: El método de la petición, por ejemplo, GET, POST. Por defecto esta en GET.
    - headers: Cualquier encabezado que desee agregar a su solicitud.




## setAttribute()
el  setAttribute()  es para modificar un atributo y su valor.

1 parametro: el atributo a modificar

2 parametro: el nuevo valor del atributo.




## Practica

[Documentacion de la api](https://rickandmortyapi.com/documentation/)

[URL a utilizar](https://rickandmortyapi.com/api/character)

:::tip
Algunas API requieren un token de seguridad que suele ser de pago.
:::
:::tip
No colocar el template donde se va a pintar.
:::
:::tip
En el fetch siempre son dos await
:::
:::tip
En el template fijarse que elementos son únicos (clases , id etiqueta) para seleccionarlo.
:::
:::tip
Si hay bucle se utiliza un fragment.
:::
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