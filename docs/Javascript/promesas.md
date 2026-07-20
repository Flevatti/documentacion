---
sidebar_position: 7
---
# Promesas, Async, Await , API

## CallBack

- Es una función que se pasa como argumento a otra función.
- La función que recibe el callback puede ejecutarlo en algún momento para realizar una tarea específica.

:::tip
Al utilizar un callback, hay que tener en cuenta los parámetros que recibe la función callback.
:::


Ejemplo de una funcion callback con 1 parametro:
```js
const posts = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
];

// Creamos una funcion flecha
const findPostById = (id, callback) => {
    const post = posts.find((item) => item.id === id);

    callback(post);
};
// La llamamos
findPostById(1, (post) => {
    console.log(post);
});

```
### Manejar los Errores

:::warning Problema
Si la ID buscada no está, aparece un error.
:::

Solución:

Siempre en los callback se manda como primer argumento el error y en el segundo argumento la respuesta satisfactoria (funciono correctamente).

:::tip
Las funciones callback deben tener dos parametros, por lo tanto.
:::

```js
// Creamos una funcion flecha
const findPostById = (id, callback) => {
    const post = posts.find((item) => item.id === id);
    // Existe el post?
    if (post) {
        // Si lo encontro
        callback(null , post);
    } else {
        // Si no lo encuentra
        // En el error
        callback("No se encontro el post con id " + id);
    }
    
};
// La llamamos
findPostById(4, (err , post) => {
    // Si existe el error
    if (err) {
      return  console.log(err)
    } 
    console.log(post);

});

```
## Callback Hell
- Ocurre cuando un callback contiene otro callback, y este a su vez contiene otro, creando muchos niveles de anidación.

```js
// La llamamos
findPostById(1, (err, post) => {
    if (err) {
        return console.log(err);
    }
    console.log(post);
    findPostById(2, (err, post2) => {
        if (err) {
            return console.log(err);
        }
        console.log(post2);

       findPostById(3, (err , post) => {
           // Return de una linea
           if (err) return console.log(err);
           console.log(post)

          findPostById(4, (err , post) => {
            if (err) return console.log(err);
            console.log(post)
          })

       })
     

    });
});

```

## Promesas
- Las promesas surgieron como una forma de evitar el problema del **Callback Hell**.
- Una promesa espera dos posibles resultados: que se cumpla o que no se cumpla.
- Si la operación se cumple, se ejecuta una acción; si falla, se ejecuta otra.
- Una `Promise` tiene tres estados:
    - **Pending:** la operación todavía está en proceso.
    - **Fulfilled:** la operación se completó correctamente.
    - **Rejected:** la operación falló.
- Sirven para manejar operaciones asíncronas.
:::tip Operación asíncrona
- Es una operación que puede tardar un tiempo en completarse y no bloquea la ejecución del resto del código.
- Mientras espera su resultado, el programa puede continuar ejecutando otras instrucciones.
:::


```js
// Creamos una funcion flecha
const findPostById = (id) => {
  const post = posts.find(item=>item.id == id) ;
   // Devolvemos una promesa (nueva)
   // La promesa tiene un callback con dos argumentos , la respuesta sastifactoria y la negativa
   return new Promise((sastifactoria , negativa) => {
       // Si existe el post  
       if (post) { 
           // Respuesta sastifactoria
           // Tiene un argumento
        sastifactoria(post)
       } else {
           // Respuesta negativa
          negativa("no se encontro id   " + id);
       }

   })

   
  

}

// Llamamos a la funcion y devuelve una promesa
console.log(findPostById(1));

// Se usa el método then para obtener la respuesta sastifactoria
// Then necesita un callback con los mismos parametros que la respuesta sastifactoria
// Basicamente es el callback que luego se ejecuta como   sastifactoria(post)
findPostById(1).then(post => console.log(post));

	
// Se usa el método catch para obtener la respuesta negativa , la cual tambien necesita un callback con los mismos parametros que la respuesta negativa.
// Basicamente es el callback que luego se ejecuta como negativa("no se encontro id   " + id);
findPostById(4).then(post => console.log(post)).catch(e => {
 console.log(e);
})

```

Se puede hacer de esta manera tambien:

```js
  // Creamos una funcion flecha
  // Devolvemos una promesa (resolve = respuesta sastifactoria , reject = respuesta negativa)
 // Devuelve una promesa la función flecha
  const findPostById = (id) => new Promise((resolve,reject) => {
    const post = posts.find(item=>item.id == id) ;
    // Si existe el post
    if (post) { 
                // Respuesta sastifactoria
                 // Tiene un argumento
                resolve(post)
               } else {
                   // Si no existe el post
                   // Respuesta negativa
                   // Tiene un argumento
                  reject("no se encontro id   " + id);
               }
  })

```

:::tip
Si no se necesitan parámetros (en este caso se necesita la `id`), se puede asignar la promesa directamente a una variable.

Ejemplo:
```js
const datos = new Promise((resolve, reject) => {
    resolve("Datos obtenidos");
});
:::
## Hell de las Promesas
Muchas promesas anidadas
```js
// Como se puede ver, el then() puede devolver una promesa y se trata con otro then
// un catch es suficiente para tratar todas las respuestas negativas
findPostById(1)
    .then(post => {
        console.log(post)
        return findPostById(2)
    }).then(post => {
        console.log(post);
        return findPostById(3)
    }).then(post => {
        console.log(post);
        return findPostById(4)

    }).then(post => {
        console.log(post)
    })
    .catch(e => {
        console.log(e);
    })

```
## setTimeout()
 ### Tiene dos parámetros.
1.   Una función
2.   El tiempo en milisegundo

setTimeout ejecutara la función especificada (1 parametro)  después de x(2 parámetro) tiempo.

```js
// La funcion se ejecuta despues de 2 segundos
setTimeout(() => {
            const post = posts.find((item) => item.id === id);
          if  (post)  {
               resolve(post) 
           } else {reject("No encontrado por id: " + id);} 
        }, 2000);

```

## async await

- Vamos a suponer que realizar una consulta en la base de datos demora un tiempo.
- Para simular esa demora usaremos la función `setTimeout()`.
```js
const findPostById = (id) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const post = posts.find((item) => item.id === id);
          if  (post)  {
               resolve(post) 
           } else {reject("No encontrado por id: " + id);} 
        }, 2000);
    });

    
findPostById(1)
.then((post) => console.log(post))
.catch((e) => console.log(e));

```

- Las promesas son asíncronas: se ejecutan sin detener el código.
- No hay que quedarse esperando a que la promesa se cumpla o falle.
- Mientras se espera una respuesta, el resto del código sigue ejecutándose.
- Ejemplo:
```js
const findPostById = (id) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const post = posts.find((item) => item.id === id);
          if  (post)  {
               resolve(post) 
           } else {reject("No encontrado por id: " + id);} 
        }, 2000);
    });

    
findPostById(1)
.then((post) => console.log(post))
.catch((e) => console.log(e));

console.log("fin del codigo");

```
:::warning ¿Te devolvio el post?
- La respuesta es NO , porque no esperamos a que se termine de ejecutar la promesa.
- Mientras se muestra el console.log , la promesa se sigue ejecutando.
:::
#### Solución
- Utilizar funciones `async` y la palabra clave `await`.
- `await` no puede utilizarse fuera de una función `async` (salvo algunos casos especiales).
- Con `await` se espera a que la promesa se termine de ejecutar para continuar con la siguiente instrucción.



```js
const buscar = async (id) => {
    const post = await findPostById(id);
    console.log(post)
}
buscar(1);

console.log("fin del codigo");

```

:::warning Ojo
el await debe estar adentro de un async para funcionar.


el async y el await funciona solo con promesas.


:::

- `async`: Define una función asíncrona. Es decir, cuando se ejecuta no detiene el código.
- `await`: Permite esperar a que una promesa termine antes de continuar. Solo puede utilizarse dentro de una función `async`.
## Excepción
- En programación, una excepción es como un evento que se activa cuando algo sale mal durante la ejecución de un programa. Esto puede suceder por diferentes razones, como errores de escritura en el código, problemas de lógica o fallas en la entrada o salida de datos. Cuando se activa una excepción, el flujo normal del programa se interrumpe y se busca una solución especial para manejar el problema. De esta manera, las excepciones ayudan a que el programa se comporte mejor y evite colapsar por completo cuando se encuentra con un error.
- Por otro lado, un error se refiere a un problema o fallo en el código que impide que el programa se ejecute correctamente. Un error puede ser causado por una variedad de factores, como errores de sintaxis, errores de lógica, errores de entrada/salida, entre otros.
- La relación entre una excepción y un error es que una excepción es una forma de manejar errores en un programa. Cuando ocurre un error, se puede generar una excepción que interrumpe el flujo normal de la ejecución del programa. El programa entonces puede manejar esta excepción mediante mecanismos como el bloque try...catch, que permite capturar la excepción y ejecutar código específico para manejar el error.
- En otras palabras, un error es el problema en sí mismo, mientras que una excepción es la forma en que el programa responde a ese error. El programa puede generar una excepción cuando se produce un error, y luego manejar esa excepción para evitar que el programa se detenga o se produzcan resultados inesperados.
- Por ejemplo, si un programa intenta dividir un número entre cero, se produce un error de división por cero. En este caso, el programa puede generar una excepción que interrumpe el flujo normal de la ejecución, y luego manejar esa excepción mediante un bloque try...catch para mostrar un mensaje de error al usuario, por ejemplo.
- En resumen, una excepción es una forma de manejar errores en un programa, mientras que un error es el problema en sí mismo que causa la excepción.
- Una excepción en JavaScript es un objeto que representa un error que ocurre durante la ejecución de un programa. Puedes manejar excepciones usando la sentencia try...catch para especificar un bloque de código que se probará y una respuesta en caso de que ocurra un error.

## Try catch
### Manejar Errores
Se utiliza try catch

```js
try { 
intenta ejecutar esto
} catch (error ) { 
Si falla lo que contiene el try, se ejecuta esto
}

```
:::tip Observación
- El parametro de catch() contiene la excepción (objeto).

:::
Se puede usar `finally` para ejecutar un código independientemente de si ocurre un error o no. Es decir, se ejecuta después del `try` y del `catch`.


Se usa para la barra de cargando

```js
const buscar = async (id) => {
    let loading = true;
    try {
        const post = await findPostById(id);
    } catch (error) {
        console.log(error)
    } finally {
        console.log("se ejecuta si o si");
loading = false;
    }
   
   
}
buscar(4);

console.log("fin del codigo");

```

```js
const buscar = async () => {
    try {
        const postUno = await findPostById(1);
        const postDos = await findPostById(2);

//está demorando 4 segundos 
        console.log(postUno.title, postDos.title);
    } catch (error) {
        console.log(error);
    }
};

buscar();

```
## Lanzar un error (throw)
:::tip  Aclaracion
 - Los errores , si no son tan graves y no interrumpen la ejecucion del progama , se suelen llamar excepciones
:::
-  throw Lanza una excepción definida por el usuario.
```js
throw valor;
```
- Utilice la sentencia throw para lanzar una excepción. Cuando lanza una excepción,  especifica el valor de la excepción. Cada uno de los siguientes ejemplos lanza una excepción:
```js
throw "Error2"; // genera una excepción con un valor String
throw 42; // genera una excepción con un valor numerico
throw true; // genera una excepción con un valor booleano
```
:::tip
- El valor indicado en `throw` es el valor que se asigna a la variable `error` del `catch`.
:::
- La excepcion puede tener un objeto como valor
### Ejemplo 
- Se puede especificar un objeto mediante `throw`.
- Luego, dentro del bloque `catch`, se pueden utilizar las propiedades de ese objeto.

```js
function ExceptionUsuario(mensaje) {
   this.mensaje = mensaje;
   this.nombre = "ExceptionUsuario";
}
try {
  miExcepcionUsuario = new ExceptionUsuario("NumeroMesNoValido");
      throw miExcepcionUsuario;
} catch (error) {
   registrarMisErrores(error.mensaje, error.nombre); 
}
```
:::tip  Conclusion
El valor de una excepción puede ser un objeto tambien.
:::

#### Otro ejemplo de como lanzar un objeto como excepcion
- Se lanza un objeto con la propiedad code (puede haber mas propiedades) como excepción.
```js
// Enviamos un objeto como error
throw ({code : 11000})
```

## Promise.all
- Cuando se tienen varias promesas que no dependen entre sí, se pueden ejecutar al mismo tiempo para reducir el tiempo de espera.
- `Promise.all()` recibe un array con todas las promesas que se van a ejecutar al mismo tiempo y devuelve una nueva promesa.
- Esta nueva promesa se cumple cuando todas las promesas terminan correctamente, sin errores.
- El resultado de esta nueva promesa es un array con todas las respuestas satisfactorias.
- La nueva promesa falla si alguna de las promesas del array falla.
```js
  const buscar = async () => {
        try {
            // Ejecutamos dos promesas juntas y devuelve los resultados en un array
            const resPosts = await Promise.all([
                findPostById(1) , findPostById(2)
            ])
          
    
            
            console.log(resPosts);
            console.log(resPosts[0]);
            console.log(resPosts[1]);
        } catch (error) {
            console.log(error);
        }
    };
    
    buscar();

    console.log("final del codigo");

```

:::tip
el await sirve para esperar a una promesa.
:::

:::warning Advertencia
- Solo devuelve el array de respuestas si todas las promesas se completan correctamente.
- Si una promesa falla, se ejecuta el `catch` y no se devuelve el array con los resultados.
:::

## fetch API
- La API Fetch permite obtener, crear, modificar o eliminar recursos mediante solicitudes HTTP.
- El método `fetch()` recibe como parámetro una ruta (`URL`, `URI` o `endpoint`), que indica dónde se enviará la solicitud HTTP.
- El servidor (indicado en la ruta) devuelve una respuesta, la cual se almacena en la promesa que devuelve `fetch()`.
- La promesa contiene un objeto `Response` con la respuesta del servidor. Este objeto contiene métodos para obtener y procesar el contenido de la respuesta.

	

[API que vamos a usar en los ejemplos](https://jsonplaceholder.typicode.com/)

```js
// LA url CON TODOS LOS POST
// const url = 'https://jsonplaceholder.typicode.com/posts';

// La url con el post que tiene la id 1
const url = 'https://jsonplaceholder.typicode.com/posts/1';

//El fetch recibe la url del recurso y devuelve una promesa
fetch(url)
    // Te muestra el response
    .then(res => console.log(res));

```
:::tip Observación
- Por defecto, `fetch()` realiza una solicitud `GET` a la URL especificada.
- Es decir, realiza una petición para obtener un recurso específico.
- Dependiendo de la URL, se pueden obtener todos los recursos o uno específico.
:::
### Metodos del response
## `json()`
- Por lo general, el servidor envía la respuesta en formato JSON, que es una forma de estructurar los datos.
- El método `json()` permite leer la respuesta (técnicamente, lee el contenido del body) y convierte el JSON en un objeto JavaScript.
- Devuelve una promesa con el objeto JavaScript resultante.

```js
//El fetch recibe la url del recurso y devuelve una promesa
fetch(url)
    // Te muestra el response
    .then(res => res.json())
    .then(data => console.log(data));

```

### Completo 

- En la promesa podemos usar un catch(maneja los errores) y el finally(se ejecuta al final)

```js
//El fetch recibe la url del recurso y devuelve una promesa
fetch(url)
    // Te muestra el response
    .then(res => res.json())
    .then(data => console.log(data))
    .catch((e)=> console.log(e))
    .finally(() => console.log("finalizo"));

```
:::tip
- Por defecto, `fetch()` realiza una petición `GET`. Este tipo de petición se utiliza para obtener un recurso. Para crear, eliminar o modificar un recurso se deben configurar otros métodos HTTP.
- Podemos acceder a una URL desde el navegador porque normalmente el navegador realiza una petición `GET` a esa dirección.
- Con `fetch()` se pueden configurar las cabeceras, métodos HTTP, etc., pero por defecto utiliza `GET`.
:::
```js
const url = 'https://jsonplaceholder.typicode.com/posts/1';

const buscarID = async (id) => {
    try {
        // Es importante el await porque data depende de res
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);

    } catch (e) {
           console.log(e);
    }
}

buscarID();

```

```js
const url = 'https://jsonplaceholder.typicode.com/posts/';

const buscarID = async (id) => {
    try {
        // Es importante el await porque data depende de res
        const res = await fetch(url + id);
        const data = await res.json();
        console.log(data);

    } catch (e) {
           console.log(e);
    }
}

buscarID(2);

```

## ¿Qué son las APIs?
- API significa **Interfaz de Programación de Aplicaciones** (por sus siglas en inglés).
- Son herramientas que permiten crear funcionalidades complejas de una forma más simple. Estas abstraen el código complejo y solo nos proporcionan los métodos y propiedades necesarios para realizar una funcionalidad específica, que normalmente sería difícil implementar desde cero. Si quisiéramos hacerlo, tendríamos que trabajar con código de bajo nivel como C o C++, controlando directamente la GPU u otros dispositivos del equipo.
- Una API funciona como una interfaz que nos permite utilizar una funcionalidad o acceder a un recurso sin conocer cómo se realiza internamente.

:::tip API
- Se utilizan para acceder a funcionalidades o recursos.
- Podemos obtener, crear, modificar o eliminar recursos a través de una API.
- La API oculta la complejidad y nos permite tener acceso a funcionalidades sin saber cómo se realizan internamente.
- Por ejemplo, podemos utilizar una API para usar Google Maps, acceder a la cámara del teléfono, obtener información o enviar datos.
- Una API permite la comunicación entre dos aplicaciones, aunque estén desarrolladas con diferentes lenguajes de programación.
:::

## APIs en JavaScript del lado cliente
- JavaScript del lado cliente tiene muchas APIs disponibles. Muchas de estas están implementadas internamente con otros lenguajes, pero pueden usarse en JavaScript para acceder a funcionalidades que normalmente serían difíciles de implementar desde cero.
- Por lo general, se dividen en dos categorías:
  - **APIs del navegador:** Son APIs integradas en el navegador que permiten acceder a funcionalidades del navegador o del dispositivo. El navegador se encarga de realizar las tareas complejas internamente y la API  nos proporciona una forma simple de acceder a estas funcionalidades.

    Ejemplos:
    - `Fetch API`: permite realizar solicitudes HTTP.
    - `DOM`: permite manipular los elementos HTML.
    - API de cámara: permite acceder a la cámara del dispositivo.
    - API de geolocalización: permite obtener la ubicación del usuario.

  - **APIs de terceros:** Son APIs creadas por empresas u organizaciones externas. No vienen incluidas por defecto en el navegador, por lo que debemos agregarlas para poder utilizarlas.

    Ejemplo:
    - API de Google Maps: permite utilizar mapas y ubicaciones dentro de una aplicación.


## APIs de navegador más comunes

- **APIs para manipular documentos:** permiten modificar el contenido y estructura de una página web. Ejemplo: API DOM.
- **APIs para obtener datos del servidor:** permiten realizar solicitudes y actualizar información de una página sin recargarla. Ejemplo: Fetch API.
- **APIs para gráficos:** permiten dibujar y manipular gráficos. Ejemplos: Canvas y WebGL.
- **APIs de audio y vídeo:** permiten trabajar con contenido multimedia. Ejemplos: HTMLMediaElement, Web Audio API y WebRTC.
- **APIs de dispositivos:** permiten acceder a funcionalidades del dispositivo. Ejemplos: geolocalización, notificaciones y vibración del hardware.
- **APIs de almacenamiento del lado del cliente:** permiten guardar información en el navegador. Ejemplos: Web Storage API (`sessionStorage`, `localStorage`) e IndexedDB API.

## APIs populares de terceros

- **Google Maps API:** permite utilizar mapas, ubicaciones y servicios de geolocalización.
- **APIs de redes sociales:** permiten acceder a funcionalidades de plataformas como Facebook, Twitter, Instagram, Discord y YouTube.
- **JSONPlaceholder API:** permite realizar pruebas utilizando recursos simulados.

##  ¿Que es API REST?

:::tip REST
- Es un estándar.
- Es un paso a paso que hay que seguir para que una API sea REST.
:::

- REST significa **Representational State Transfer**.
- Cuando queremos comunicar el Frontend con el Backend necesitamos lograr que ambos puedan intercambiar información.
- REST es una arquitectura utilizada para construir APIs que permiten comunicar clientes y servidores utilizando el protocolo HTTP.
- Estas APIs utilizan URLs (`URI` / `Endpoint`) para acceder a recursos y los métodos HTTP para indicar qué acción realizar.

En simples palabras:

> Una API REST es una forma de exponer recursos para que puedan ser consultados o modificados por otros sistemas.

Para que una API siga los principios REST:

- **Debe ser Stateless:** cada petición debe contener toda la información necesaria para ser procesada. Por ejemplo, puede utilizar tokens para identificar al usuario.
- **Utiliza URIs únicas:** cada recurso debe tener una dirección (URL) que permita identificarlo.

  Ejemplo: `api.ejemplo.com/users`
- **Utiliza métodos HTTP:** debe utilizar los verbos HTTP según la acción que se quiere realizar:
  - `GET`: obtener recursos.
  - `POST`: crear recursos.
  - `PUT`: modificar recursos.
  - `DELETE`: eliminar recursos.
  
## ¿Qué es RESTful?

- REST es el conjunto de reglas para construir APIs.
- RESTful es una API que sigue todo lo establecido por REST.
- Al crear una API RESTful, creamos una interfaz que permite que otros sistemas puedan comunicarse con nuestra aplicación.

:::tip RESTful
Si una API sigue los principios de REST y permite la comunicación con otros sistemas, se considera una API RESTful.
:::