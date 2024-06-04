---
sidebar_position: 15
---

# Extra

## Pagina primer plano
- Como detectar si tu web está en primer plano

```js
    // Primera Alternativa
    // Detecta si el usuario quito el sitio web del primer plano
    window.addEventListener("blur" , () => {
      document.title="Nadie nos mira"
    });
   // Detecta si el usuario  tiene el sitio web en primer plano
    window.addEventListener("focus" , () => {
      document.title = "Nos mira alguien";
    })
    // Segunda alternativa
    document.addEventListener("visibilitychange" , () => {
      document.title = document.visibilityState;
    })
```

## ¿Que es JSON?
- JSON es un formato de texto totalmente independiente del lenguaje de programación
- JSON, cuyas siglas significan en verdad JavaScript object notation que, en español se traducen como, notación de objetos de JavaScript.
- Es un formato de intercambio de datos que resulta muy fácil de leer y escribir para los programadores y sencillo de interpretar y crear para las máquinas.
- Se usa cuando se requiere que un sistema requiera mostrar o enviar información para que otros sistemas los lean e interpreten.
- Se utiliza principalmente para transferir datos entre un servidor y un cliente.



En resumen, JSON no es un lenguaje de programación sino un archivo que contiene datos estructurados, que se utiliza para transferir información entre sistemas.

Una de las características más significativas de JSON, al ser un formato independiente de los lenguajes de programación, es que los servicios que comparten información por este método no necesitan hablar el mismo idioma. Es decir que el emisor y el receptor pueden ser totalmente distintos, por ejemplo, Java y Python
Esto es así porque cada uno tiene su propia librería de codificación y decodificación para cadenas en este formato.

Es decir que JSON es un formato común para serializar y deserializar objetos en la mayoría de los idiomas

- Su funcionamiento se basa en la estructuración de una colección de pares  que contienen:
  - Una clave: que corresponde al identificador del contenido.
  - Un valor: que representa el contenido correspondiente.


#### ¿Cuáles son sus características?
-	JSON es solo un formato de datos.
-	Requiere usar comillas dobles para las cadenas y los nombres de propiedades. Las comillas simples no son válidas.
-	Una coma o dos puntos mal ubicados pueden producir que un archivo JSON no funcione.
-	A diferencia del código JavaScript, en el que las propiedades del objeto pueden no estar entre comillas, en JSON solo los Strings entre comillas pueden ser utilizadas como propiedades.
- El ultimo valor no debe tener coma.
#### Sintaxis
- Un objeto JSON comienza y termina con llaves {}
- Hay dos elementos centrales en un objeto JSON: claves (Keys) y valores (Values).
- Las Keys deben ser cadenas de caracteres (strings). Como su nombre en español lo indica, estas contienen una secuencia de caracteres rodeados de comillas.
- Los Values son un tipo de datos JSON válido. Puede ser un arreglo (array), objeto, cadena (string), booleano, número o nulo.
- Puede tener dos o más pares de claves/valor dentro, con una coma para separarlos. Así mismo, cada key es seguida por dos puntos para distinguirla del valor.

```json
    {
        “key”:“value”,
        “key”:“value”,
        “key”:“value”
      }

```
- La sintaxis de JSON funciona de modo similar a JavaScript. Por ejemplo:
  -	Se usan claves(keys)/valores.
  -	La información se separa por comas.
  -	Las llaves agrupan objetos.
  -	Los corchetes agrupan arreglos de datos (array).
- Sin embargo, JSON se distingue de JavaScript porque sus claves tienen que ser strings (o secuencias de caracteres), mientras que sus valores deben ser strings, números, objetos, arreglos, boleados o null.


:::tip info
- [¿Qué es Json? ¿Por qué es importante conocerlo?](https://www.nextu.com/blog/que-es-json-por-que-es-importante-conocerlo-rc22/)
- [¿Qué es JSON?](https://www.hostinger.com.ar/tutoriales/que-es-json)
- [JSON para principiantes: qué es, para qué sirve y ejemplos](https://blog.hubspot.es/website/que-es-json)
:::


## Observable
- Los Observables son conceptos que cuesta realmente entender en profundidad ya que están ligados a la programación asíncrona y relacionados con el concepto de Promesas. Para entender correctamente los Observables hay que entender de forma correcta como funcionan los conceptos de programación asíncrona a alto nivel. Vamos a explicarlos:
#### Concepto variable
- Imaginemonos que nosotros queremos irnos de viaje y el viaje nos cuesta 1000 euros .  ¿Podemos o no podemos irnos de viaje? . Es una pregunta sencilla y todo dependerá de si tenemos el dinero disponible en nuestra cuenta corriente . En caso afirmativo nos podemos ir de viaje ya que tenemos guardados los 1000 euros necesarios.
- Una variable es una "caja" que almacena un valor que puede variar en el tiempo.

```js
let dinero = 1000
```

#### Concepto de Promesa y la progamación asíncrona
- El concepto de Promesa es algo más complejo , pero vamos a intentarlo explicar con los 1000 euros y el viaje. Supongamos que seguimos queriendo irnos de viaje y no disponemos del dinero. La realidad es que no podremos irnos de viaje. Sin embargo ganamos  la lotería y hemos sido premiado con 1000 euros .
- ¿Entonces podremos viajar? . La realidad es que sí pero no …. tendremos que ir a la administración de la lotería a confirmar el premio y la administración tardará unos días en procesarlo y darnos el dinero . Esto es lo que habitualmente se conoce como una Promesa en programación es una variable que en el momento actual no tiene valor pero en un futuro lo tendrá y podremos usarle.


```js
var promesa= new Promise (function(resolve,reject) {
 
  setTimeout(function() {
 
    resolve(1000);
 
  },2000);
 
 
})
 
promesa.then(function(resultado) {
 
  console.log(resultado);
 
})

```

#### Javascript Observable y la programación asíncrona
- Supongamos ahora que nos queremos ir de viaje , no tenemos el dinero y no nos ha tocado la lotería . Hemos tenido bastante mala suerte, pero todavía nos queda una opción podemos recurrir a nuestros amigos y que cada uno de ellos nos preste 100 euros para irnos de viaje .
- Tendremos que hacer 10 llamadas de teléfono y esperar pacientemente a quedar con con cada persona para que nos de los 100 euros, cuando hayamos quedado con todos nos encontraremos  que finalmente podemos viajar. Ese es el concepto de JavaScript Observable , hace referencia a la combinación de multiples peticiones asíncronas que pueden terminar en diferentes momentos temporales .  Según vayamos recibiendo el dinero podremos ir pagando el viaje. 
- Resumiendo:
  - Un observable en JavaScript es un objeto que permite a los desarrolladores manejar de manera eficiente y escalable múltiples peticiones asíncronas que pueden terminar en diferentes momentos temporales.
  - Un observable es como una promesa, pero en lugar de devolver un valor único, devuelve una secuencia de valores que se pueden recibir en diferentes momentos.


#### Anatomía de un Observable
- Los observables en JavaScript se crean utilizando el constructor Observable o alguno de los operadores de creación proporcionados por las bibliotecas de observables, como rxjs.
- Después de crear un observable, se puede suscribir a él un objeto Observer que define las funciones next, error y complete para manejar los valores que el observable entrega.
- El observable se ejecuta cuando se realiza la suscripción y entrega los valores al objeto Observer según su programación. Una vez que el observable ha completado su ejecución o se ha producido un error, la suscripción se termina y ya no se reciben más valores.
- Hay cuatro conceptos cuando tratamos con Observables:
  - Creación de Observable
  - Subscripción a Observable
  - Ejecución del Observable
  - Desechando el Observable


#### Creación de Observable
- Primero, creamos un Observable por medio del mètodo create:

```js
const observable = Observable.create((subscriber) => {

})

```
- El método create nos pide un callback para crear el "flujo de datos".
- El parámetro que recibe el callback es una instancia de Subscriber, el cual implementa la interface Observer. Por medio de este Subscriber podemos enviar valores , errores y finalizar el flujo.
- Por lo general se usan next , error y complete:
  - next: Se ejecuta para enviar un valor. 
  - error: Se ejecuta para lanzar un error. 
  - complete: Se ejecuta para dar por finalizado el flujo.
- Ejemplo:
```js
subscriber.next('Un dato')
subscriber.next('Otro dato')
subscriber.next('Último dato')
subscriber.complete()
subscriber.next('Me olvidé de este') // nunca se enviará

```
:::tip Observación
- Una vez que se hace llamado al método complete el subscriber no podrá emitir más datos. Bien, ahora tenemos una cola con mensajes.
:::

#### Subscripción a Observable
- Para poder acceder a los datos que tiene un Observable, tenemos que subscribirnos a él mediante un Observer. Un Observer es simplemente un objeto  que contiene tres métodos:
  - next: este método acepta un argumento el cual es el dato enviado por el Observable.
  - error: este método también tiene un argumento el cual es un error. Puede ser una subclase de Error o cualquier otro tipo de dato.
  - complete: este método es ejecutado cuando el Observable notifica que ya no hay más valores que enviar osea cuando el observable ejecuta el complete().


- Veamos al Observable en acción con un ejemplo:

```js
const observer = {
  next: value => console.log('Valor recibido: ', value),
  error: err => console.error('Error encontrado: ', err),
  complete: _ => console.log('Ya no hay más valores por recibir')
}
observable.subscribe(observer)

```
:::tip Observación
- No es una coincidencia que el callback de create sea un subscriber y que un Observable tenga un método subscribe. De hecho, cuando un Observer se subscribe a un Observable, el "subscriber" es ejecutado inmediatamente.


:::

#### Abortando subscripciones
- Las ejecuciones de un Observable pueden ser infinitas. Una práctica común que se desea para un Observer es abortar la ejecución cuando ya no necesitemos seguir observando valores. Para este propósito está la clase Subscription.
- Cuando nos subscribimos a un observable, inmediatamente obtenemos una instancia de la clase Subscription, la cual, tiene entre su prototipo, al método unsubscribe. De esta manera, podemos detener la ejecución de un Observable.

```js
const subscription = observable.subscribe(observer)
// luego de un rato
subscription.unsubscribe()
```

:::tip Observación
- Así ya no liberamos recursos usados por el Observable, optimizando nuestra aplicación.

:::


#### RxJS
- RxJS es una biblioteca para programación reactiva que utiliza Observables, lo que facilita la composición de código asíncrono o basado en callbacks. Permite manejar eventos, flujos y datos en  tiempo real de manera más sencilla y eficiente.
- RxJS es una herramienta que ayuda a manejar eventos y datos en tiempo real. Por ejemplo, si quieres realizar un seguimiento de los clics del ratón en una página web, puedes usar RxJS para crear un "flujo" de eventos de clic.
- Luego, puedes usar diferentes "operadores" para transformar o controlar este flujo de eventos. Por ejemplo, puedes usar un operador para filtrar solo los clics que ocurren en un área específica de la página, o un operador para limitar el número de eventos que se procesan cada segundo.
- Además, RxJS te permite crear código más "puro", lo que significa que es más fácil de probar y depurar. En general, RxJS es una herramienta muy útil para manejar eventos y datos en tiempo real en aplicaciones web y otras aplicaciones basadas en JavaScript.
- Ejemplo de un Observable en RxJS:


```js
import { Observable } from 'rxjs';

// Creamos un Observable que emite números cada segundo
const observable = new Observable((observer) => {
  let count = 0;
  const intervalId = setInterval(() => {
    observer.next(count);
    count++;
    if (count > 5) {
      // Completamos el Observable después de emitir 5 valores
      observer.complete();
      clearInterval(intervalId);
    }
  }, 1000);
});

// Nos suscribimos al Observable para recibir notificaciones
observable.subscribe({
  next: (value) => console.log(`Recibido: ${value}`),
  error: (err) => console.error(`Error: ${err}`),
  complete: () => console.log('Observable completado')
});

```
- RxJS también te permite crear Observables a partir de eventos, como eventos de teclado o clic del mouse. Un ejemplo común es utilizar el operador fromEvent para convertir un evento en un Observable.
- Aquí te muestro un ejemplo de cómo crear un Observable a partir del evento click de un button:

```html
<button id="my-button">Clickeame</button>
```

```js
import { fromEvent } from 'rxjs';

const button = document.getElementById('my-button');
const clicks$ = fromEvent(button, 'click');

clicks$.subscribe({
  next: (event) => console.log('Se recibió un clic'),
  error: (err) => console.error(`Error: ${err}`),
  complete: () => console.log('Observable completado')
});

```
:::tip Observación
- En este ejemplo, utilizamos el método fromEvent para convertir el evento click del botón en un Observable. Cada vez que se produce un clic en el botón, el Observable emite un valor y se ejecuta la función next del suscriptor.
-  En este ejemplo, el método error se ejecutará solo si hay un error en la creación del Observable o en la emisión de valores, y el método complete no se ejecutará nunca.
:::


- Pero, ¿qué pasa si queremos que el Observable se complete después de un cierto número de clics? Puedes utilizar el operador take para lograrlo:


```js
import { fromEvent } from 'rxjs';

const button = document.getElementById('my-button');
const clicks$ = fromEvent(button, 'click').pipe(take(5)); // Completa después de 5 clics

clicks$.subscribe({
  next: (event) => console.log('Se recibió un clic'),
  error: (err) => console.error(`Error: ${err}`),
  complete: () => console.log('Observable completado después de 5 clics')
});

```
:::tip Observación
- En este caso, el Observable se completará después de 5 clics, y se ejecutará el método complete del suscriptor.

:::


## Underscore 
- En JavaScript, el underscore  es una variable/parametro llamado "_" que se utiliza a menudo como una variable de desecho cuando no estamos interesados en el valor de una variable específica.
- El underscore no tiene ningún significado especial en JavaScript y se puede utilizar como cualquier otro nombre de variable o parámetro. Sin embargo, se ha convertido en una convención común en la comunidad de JavaScript utilizar el underscore como un nombre de variable o parámetro de desecho para indicar que no se va a utilizar el valor asignado a esa variable.
- Ejemplo:


```js
const observer = {
  next: value => console.log('Valor recibido: ', value),
  error: err => console.error('Error encontrado: ', err),
  complete: _ => console.log('Ya no hay más valores por recibir')
}
observable.subscribe(observer)

```

:::tip Observación
- El underscore (_) se utiliza aquí como un nombre de parámetro "de desecho" para indicar que el parámetro no se va a utilizar en la función. Esto es una convención común en JavaScript y otros lenguajes para indicar que un parámetro no se va a utilizar.
- En otras palabras, el underscore (_) se utiliza aquí para ignorar el parámetro que se le pasa a la función complete, ya que no se necesita procesar información adicional cuando el observable ha terminado de emitir valores.

:::