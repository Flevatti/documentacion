---
sidebar_position: 8
---
# AJAX Y FETCH

## JS - FETCH 

Vive en el navegador.
-	fetch : La API Fetch te permite comunicarte con un servidor para recuperar/eliminar/eliminar/crear recursos.
-	Fetch es una interfaz (se comunica con la API Fetch) para hacer solicitudes AJAX en JavaScript. Es usado generalmente para hacer una solicitud a un API.
-	El método fetch() toma un argumento obligatorio, que es la ruta de acceso( conocido como endpoint o URL ) que se utiliza para realizar una solicitud.
-	Una vez que Response es recuperada, hay varios métodos disponibles para “entender o manipular” el formato de la respuesta y así poder tener acceso a este ([Es similar a lo que hace express para acceder al body](https://flevatti.github.io/documentacion/docs/Node#reqbody)).

## Ajax 
- Significa  JavaScript Asíncrono + XML (XML es viejito ahora utilizamos JSON)
- AJAX (JavaScript Asynchronous + XML), es un enfoque, manera o forma para construir aplicaciones web dinámicas. No es una tecnología específica, sino una combinación de varias tecnologías como HTML, CSS, JavaScript, el DOM y JSON. Su propósito principal es permitir que las aplicaciones web se actualicen parcialmente sin recargar toda la página, mejorando la velocidad y la experiencia del usuario. Aunque tradicionalmente usaba el objeto XMLHttpRequest, hoy en día es más común usar fetch() para manejar las solicitudes asíncronas.
- AJAX (JavaScript Asynchronous + XML) es una técnica que permite a las aplicaciones web interactuar con el servidor en segundo plano sin necesidad de recargar toda la página. Aunque originalmente utilizaba XML para intercambiar datos, ahora es común usar JSON por ser más ligero y fácil de manejar.
- Esto permite una experiencia más fluida y rápida, ya que solo se actualizan las partes necesarias de la página en lugar de cargarla desde cero. Por ejemplo, las redes sociales como Twitter actualizan nuevas publicaciones en tiempo real sin refrescar toda la pantalla.


#### Elementos clave de AJAX:
1.	HTML y CSS: Estructuran y estilizan la página web.
2.	JavaScript: Controla la interacción asíncrona.
3.	DOM (Document Object Model): Permite modificar el contenido de la página dinámicamente.
4.	Objeto XMLHttpRequest o Fetch API: Manejan las solicitudes al servidor. Aunque XMLHttpRequest fue el estándar inicial, hoy en día la API fetch() es más moderna y preferida.
5.	JSON: Formato común para intercambiar datos entre cliente y servidor.

#### ¿Cómo funciona?
1.	Un usuario interactúa con la página (por ejemplo, pulsando un botón).
2.	JavaScript envía una solicitud al servidor utilizando fetch() o XMLHttpRequest.
3.	El servidor responde con datos en formato JSON (o XML).
4.	JavaScript procesa la respuesta y actualiza el contenido de la página a través del DOM, sin recargarla completamente.








## Metodos nativos para Ajax

### Viejo
[XMLHttpRequest](https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
### Nuevo
[Fetch API](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)

## Fetch API

- Proporciona una interfaz JavaScript para hacer peticiones HTTP y obtener respuestas del servidor.
-	También provee un método para obtener recursos de forma asíncrona por la red.
-	[Fetch parámetros](https://developer.mozilla.org/en-US/docs/Web/API/fetch): Si solo se usa un parametro, iniciamos el proceso de obtener un recurso de la red mediante una url, devolviendo una promesa con  la respuesta. Con el segundo parametro podemos editar/eliminar/crear un recurso.
- Este tipo de funcionalidad se conseguía previamente haciendo uso de XMLHttpRequest.

```js
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));

```

:::tip Explicación

- Método `json()`:
    - Es un método de Response.
    - Sirve para “entender” el formato JSON. Te devuelve una promesa con la información que contiene  el body (en formato JSON) de la respuesta .
- Método `fetch(url)`:
    -	Por defecto se hace una petición GET  a la url indicada, este tipo de peticiones es para obtener un recurso . 
    -	Si desea crear/eliminar/modificar un recurso deberás utilizar un segundo parámetro en el método fetch() el cual es un objeto para configurar las cabeceras, métodos, verbos, etc.
    -	Cuando accedemos a una URL en el navegador, hacemos una petición GET a esta.  Todo lo que puedas ver en el navegador web es una petición Get.



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