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
- Cuando llamas a `observable.subscribe(observer)`, ocurren las siguientes cosas:
  - Suscripción al flujo de datos: El observable comienza a emitir valores al observador. Cada vez que el observable emite un valor con next, la función next del observador se ejecuta.
  - Recibir valores: El observer recibe cada valor emitido por el observable y ejecuta la función next, pasando el valor emitido como argumento.
  - Manejar errores: Si el observable emite un error usando el método error, el observer ejecutará su función error. Esto detiene la emisión de más valores.
  - Finalizar la emisión: Cuando el observable termina su emisión y ya no habrá más valores, se ejecuta el método complete. Esto indica que el flujo de datos ha finalizado correctamente.
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
- La función pipe permite añadirle operadores  al observable. En este caso, se utiliza el operador take(5), que limita el número de emisiones del observable.
- take(5): Este operador se asegura de que el observable solo emita 5 valores (es decir, solo responderá a los primeros 5 clics en el botón). Después de esos 5 clics, el observable completará su ejecución y ya no emitirá más valores, ignorando clics futuros.


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


## Decoradores
- Es un concepto que se aplica a varios lenguajes.
- No es lo mismo que patrón decorador.
- Te permite “extender/modificar” las clases, con nuevos (y si existe remplazarlo) campos, métodos, getters, setters , etc.. Por lo tanto, se podría decir que sirve para añadir/modificar/remplazar funcionalidades.
- El decorador se define con una AROBBA (@) al comienzo. 
- El decorador es una función.
- Ejemplo de decorador que modifica toda una clase:
```js
@defineElement("my-class")
class C extends HTMLElement {
  @reactive accessor clicked = false;
}
```
- Los decoradores se pueden aplicar en:
  - Clases
  - Campos de clase 
  - Métodos de clases
  - Accesores de clases


#### Ejemplo
```js
function logger(value , context) {
 console.log('decorator called!')
 console.log("value" , value)
 console.log("context" , context)
}

@logger
class Persona {
}


```
:::tip Observación
- Un decorador es una función que contiene dos parámetros:
  - value: Contiene lo que estamos decorando, el elemento al que se aplica el decorador. En el ejemplo contiene una función constructora (clase).
  - context : Nos da información sobre que es lo que estamos decorando (el elemento).
- El decorador se aplica siguiendo la sintaxis: @NombreDecorador
- Los decoradores se ejecutan en el momento en el que se evalúa la clase. Por lo tanto, lo que contiene la función se va a ejecutar cuando se evalué ese código y no cuando se instancie un objeto.
:::

#### Modificamos el ejemplo anterior
```js
function logger(value , context) {
 console.log('decorator called!')
 console.log("value" , value)
 console.log("context" , context)
}

@logger // type = class
class Persona {

    @logger
    weight = 75 // kind = field
    
    @logger
    getWeight() { // kind = method
     return this.weight
    }
    
    
    @logger
    get peso() {  // kind = getter
      return this.weight;
    }
    
    @logger
    set setPeso(value) {  // kind = setter
         this.weight = value;
    }

}


```
:::tip Observación
- En el field, el value es undefined ya que los decoradores se ejecutan cuando “se evalúa el código, no cuando se ejecuta” y por lo tanto todavia no se sabe el valor del campo.

:::

#### Extender método
- El código del decorador puede ser:
```js
function logger(value , {name, kind}) {
   console.log('Decorated called')
  if (kind === 'method') {
     return function(...args) {
      console.log(`Logging ${name} execution with arguments ${args.join(',')}`)
      const returnedValue = value.call(this , ...args);
      console.log(`End execution after returning ${returnedValue}`);
     }
  }
}

```
:::tip Observación
- En este ejemplo modificamos todos los métodos de la clase (que solo hay uno llamado getWeight).
- This en la complicación no tiene valor porque no está asociado a ninguna clase, pero en tiempo de ejecución se refiere a la instancia que invoco el método.
- Sin embargo, cuando se evalué el método: El primer console.log se mostrará, pero la función que devolvemos no se ejecutará hasta que invoquemos al método en una instancia.
- Para resumir:
  - El console.log    console.log('Decorated called') se ejecuta al evaluar el elemento “decorado”.
  - La función que se devuelve se ejecuta cuando de verdad se llame al método. 
:::

- Ejecutamos el método modificado:

```js
const p = new Persona();
p.getWeight();
```
:::tip Observación
Al ejecutar getWeight() invocamos el método que devolvimos en el decorador
:::

#### Decorator Factory
- Podes añadirle parámetros al decorador poniéndole argumentos a la función:
```js
const logger = (logerName) => function (value , {name, kind}) {
   console.log('Decorated called')
  if (kind === 'method') {
     return function(...args) {
      console.log(`Logging ${logerName} execution with arguments ${args.join(',')}`)
      const returnedValue = value.call(this , ...args);
      console.log(`End execution after returning ${returnedValue}`);
     }
  }
}



class Persona {


    weight = 75 // kind = field
    
    @logger('metodos')
    getWeight() { // kind = method
     return this.weight
    }
    
    

    get peso() {  // kind = getter
      return this.weight;
    }
    
  
    set setPeso(value) {  // kind = setter
         this.weight = value;
    }

}

const p = new Persona();
p.getWeight();


```
:::tip Observación
- Al decorador le podés pasar un parámetro.
- Se llama Decorator Factory porque el método devuelve un decorador, ósea lo crea. 
:::

:::tip info
- [Decorators](https://github.com/tc39/proposal-decorators)
- [Decorator Metadata](https://github.com/tc39/proposal-decorator-metadata)

:::

## Patron decorador
- El patrón decorador es un patrón de diseño estructural que permite añadir funcionalidades a un objeto de manera dinámica sin alterar su estructura original. Se utiliza para "envolver" un objeto con otro objeto decorador que agrega nuevas responsabilidades.

:::tip Patron
- Un patrón de diseño es una solución general y reutilizable a un problema común. Estos patrones no son código específico, sino guías o enfoques que pueden ser adaptados y aplicados a diferentes situaciones de programación para resolver problemas de diseño recurrentes.
- Un patrón estructural se enfoca en cómo se relacionan y se organizan las clases y los objetos para formar estructuras más grandes. Estos patrones ayudan a garantizar que, si cambias la estructura interna de un sistema, el impacto en otras partes del sistema sea mínimo.


:::

- En este patrón, tienes una clase base y una serie de clases decoradoras que implementan la misma interfaz o heredan de la misma clase base. Cada decorador agrega o modifica el comportamiento del objeto al que envuelve. Puedes encadenar varios decoradores para añadir múltiples capas de funcionalidad.
- El patrón decorador es una forma de componer objetos para extender su funcionalidad de manera dinámica y flexible, permitiendo múltiples combinaciones de comportamiento.


:::danger
- Es diferente a un decorador en Typescript que es una característica del lenguaje que permite añadir meta-información o modificar la definición de clases, métodos, propiedades, o parámetros mediante una función especial.
- En un patrón decorador se puede utilizar un decorador en el sentido de que se puede envolver un objeto con otros objetos que añaden funcionalidades adicionales. Sin embargo, el uso de decoradores en el sentido de la programación orientada a objetos (como en TypeScript) no es necesario para implementar el patrón decorador. 


:::

## NaN
- NaN en JavaScript significa "Not-a-Number" (no es un número) y es un valor especial que se utiliza para indicar que no es un número válido. 
- NaN puede aparecer en varias situaciones.

#### Operaciones matemáticas inválidas
- Realizar una operación cuyo resultado no puede convertirse en un número:
```js
let result = 0 / 0; // NaN, porque dividir cero entre cero no tiene un valor numérico definido.
```

#### Convertir cadenas que no son números
- Usar parseInt o parseFloat en una cadena que no se puede convertir a un número:
```js
let value = parseInt("abc"); // NaN, porque "abc" no es un número.
```
#### Resultados de operaciones no numéricas
- Cualquier operación matemática que involucre NaN también resultará en NaN:

```js
let value = NaN + 5; // NaN, porque cualquier operación con NaN resulta en NaN.
```

#### ¿Cómo comprobar si un valor es NaN?
- Para verificar si un valor es NaN, puedes usar la función isNaN(), que devuelve true si el valor es NaN. Sin embargo, hay una forma más precisa de comprobarlo:
  - Usar Number.isNaN(), que solo devuelve true si el valor es realmente NaN y no coerciona otros tipos de datos.


## Módulos ES (ECMAScript)
- Los módulos ES (ECMAScript Modules o ES Modules) son una forma de organizar y estructurar el código en JavaScript, introducida oficialmente en ECMAScript 2015 (ES6). Permiten dividir el código en archivos separados (módulos) que pueden exportar e importar funciones, objetos, o valores entre sí. Esto facilita la reutilización, el mantenimiento y la gestión de dependencias en proyectos de JavaScript de gran tamaño.

:::tip 
- ECMAScript es como un conjunto de reglas y guías que dicen cómo debe funcionar JavaScript. Estas reglas ayudan a que los desarrolladores y los navegadores usen JavaScript de la misma manera en todas partes.
- ¿Qué es ECMAScript en palabras sencillas?
  1.	JavaScript sigue un manual: ECMAScript es el "manual de instrucciones" que JavaScript usa para saber cómo debe comportarse y qué funciones debe tener. Cuando decimos que JavaScript sigue el estándar ECMAScript, significa que JavaScript se ajusta a esas reglas para que funcione igual en todos lados (por ejemplo, en diferentes navegadores).
  2.	Actualizaciones constantes: Cada pocos años, este "manual" se actualiza para agregar cosas nuevas o mejorar. Estas actualizaciones ayudan a que JavaScript sea más útil y eficiente para los desarrolladores, quienes pueden hacer cosas nuevas y mejores.
  3.	Ejemplo de una nueva regla o guía: Por ejemplo, antes de una de las actualizaciones, JavaScript solo tenía una forma de declarar variables (var). Pero ECMAScript añadió dos nuevas maneras de declarar variables (let y const) que son más seguras y claras en algunos casos.

:::

#### Principales características de los módulos ES
##### 1- Exportación e importación de código
-	Se pueden exportar valores, funciones o clases desde un módulo usando la palabra clave export.
-	Los módulos que necesitan usar ese código pueden importarlo con la palabra clave import.
- Ejemplo:

```js
// archivo math.js
export function suma(a, b) {
    return a + b;
}

// archivo app.js
import { suma } from './math.js';
console.log(suma(2, 3)); // 5

```


##### 2- Soporte nativo en navegadores y entornos
- Los navegadores modernos y entornos como Node.js soportan módulos ES de forma nativa. En HTML, se usa el atributo type="module" en las etiquetas &lt;script>.
- Ejemplo:
```html
<script type="module" src="app.js"></script>

```

##### 3- Módulos en "strict mode"
-	Los módulos ES están en modo estricto ("strict mode") de forma predeterminada, lo que ayuda a evitar errores comunes.
##### 4- Ámbito léxico
-	Cada módulo tiene su propio ámbito (scope), evitando colisiones de variables entre módulos.
##### 5- Carga asincrónica
-	Los módulos ES se cargan de forma asíncrona, lo que mejora el rendimiento de la aplicación.


## Interfaz
- En programación, una interfaz es una estructura que define un conjunto de métodos y propiedades que una clase debe implementar, sin proporcionar la implementación de esos métodos. Las interfaces permiten establecer un "contrato" para las clases que las implementen, asegurando que ciertas funciones estén disponibles con una firma específica (nombre, parámetros y tipo de retorno). Este concepto es especialmente común en lenguajes orientados a objetos como Java, C# y TypeScript.
- También nos podemos referir como interfaz a algo que actúa como “intermediario” entre dos partes de un sistema o entre dos softwares inclusos.  Permite interactuar con otra parte del sistema u otro software sin conocer los detalles específicos de como funciona, solo necesita conocer qué métodos o propiedades están disponibles y cómo usarlos, no cómo están implementados. 


## URLSearchParams
- URLSearchParams es una interfaz de JavaScript (interactúa con la API de Web) que permite trabajar con los parámetros de consulta (query) en las URLs. Facilita la creación, lectura y manipulación de estos parámetros. Estos parámetros suelen ser las partes de una URL que aparecen después de un signo de interrogación (?), en formato de pares clave-valor (por ejemplo, ?name=John&age=30).

#### Principales usos de URLSearchParams
- Crear una instancia: Se puede instanciar a partir de un String que contenga las query directamente o  una URL completa:
```js
const params = new URLSearchParams('?name=John&age=30');
```
- Obtener valores: Se usa el método get(“clave”) para obtener el valor asociado a una clave especifica:
```js
params.get('name'); // "John"
```
- Agregar o actualizar parámetros: Se utiliza `set(“clave” , “valor”)` para agregar o actualizar una query. Si la query no existe se crea. Si hay varias querys con el mismo valor, se eliminan de manera que solo quede una:
```js
params.set('age', '35');
```
- Eliminar parámetros: Con `delete(“clave”)` se elimina una query que esta asociado con una clave especifica:
```js
params.delete('name');
```
- Iterar sobre parámetros: Puedes recorrer todos los parámetros con `for...of`:
```js
for (const [key, value] of params) {
  console.log(`${key}: ${value}`);
}

```
- Convertir a cadena: Para obtener la cadena de consulta completa, usa `toString()`:
```js
params.toString(); // "age=35"
```

:::tip información
- [Documentación](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)

:::


## Renderizar
- Cuando el navegador carga un archivo HTML, crea un Document Object Model (DOM), que es una representación estructurada de todos los elementos en la página. Este DOM es lo que el navegador usa para renderizar la página, es decir, convertir el código HTML en una interfaz visual en la pantalla.


#### ¿Qué es renderizar?
- Implica tomar el contenido del DOM (Document Object Model), junto con CSS y JavaScript, y dibujarlo en la pantalla para que el usuario pueda verlo e interactuar con él.
- Podemos pensar en "renderizar" como "dibujar", aunque es más preciso decir que incluye varios pasos de procesamiento para que el contenido sea legible y atractivo visualmente. 
- El proceso de renderizado de una página web en el navegador se divide en varias etapas, desde la interpretación del archivo HTML hasta la visualización en pantalla. A continuación, detallo los pasos principales en el proceso de renderizado.


#### 1-  Parsing (Análisis)
-	HTML Parsing (Análisis del HTML): El navegador lee el archivo HTML línea por línea y lo convierte en un árbol estructurado de nodos llamado el DOM (Document Object Model). Cada etiqueta HTML se convierte en un nodo dentro de este árbol, formando la estructura de la página.
-	CSS Parsing (Análisis del CSS): Simultáneamente, el navegador analiza las hojas de estilo CSS, creando otro árbol llamado CSSOM (CSS Object Model). Este árbol define los estilos y las reglas de presentación que se aplicarán a cada nodo del DOM.
-	El análisis de JavaScript ocurre en paralelo al procesamiento del HTML y CSS. El navegador descarga y analiza el código JavaScript tan pronto como encuentra una referencia al archivo o script en el HTML.
- Si el script es bloqueante (como un &lt;script> en el &lt;head> sin el atributo defer o async):
  - Se detiene temporalmente el análisis del HTML.
  - El navegador ejecuta el JavaScript antes de continuar con el análisis y construcción del DOM y CSSOM.
  - Ejemplo:
```html
<script>
    console.log('Esto se ejecuta antes de continuar con el DOM');
</script>

```
- Si el script es diferido (defer):
  - El JavaScript se analiza y ejecuta después de que el DOM y el CSSOM estén listos, justo antes del Painting.
  - Ejemplo:
```html
<script defer>
    console.log('Esto se ejecuta después del DOM, antes del Painting');
</script>

```
- Si el script es asíncrono (async):
  - El JavaScript se analiza y ejecuta en paralelo al análisis del HTML, pero su ejecución puede terminar en cualquier momento.
  - Ejemplo:
```html
<script async>
    console.log('Esto se ejecuta de manera impredecible');
</script>

```



#### 2- DOM y CSSOM Tree Construction
-	Una vez que se han analizado el HTML y el CSS, el navegador los combina para formar el Render Tree, que es una estructura que contiene solo los nodos visibles en la pantalla. Es decir, el render tree excluye elementos como &lt;head> y nodos ocultos (display: none).
-	Cada nodo en el render tree contiene información tanto de contenido (DOM) como de estilo (CSSOM).
- El código Javascript puede afectar el  DOM y el CSSOM, lo que significa que puede modificar su contenido o estilos.
- Si el JavaScript cambia el DOM o los estilos:
  - El navegador puede invalidar y reconstruir parte del Render Tree.
  - Este proceso ocurre antes del Painting, para asegurarse de que todo esté actualizado.
  - Ejemplo:
```html
<script>
    document.body.style.backgroundColor = 'blue';
</script>

```



#### 3- Layout (Distribución o Reflow)
-	En esta etapa, el navegador calcula el tamaño, la posición y el espacio de cada nodo en el render tree, de acuerdo con el modelo de caja CSS y los estilos aplicados. Este paso se llama layout o reflow.
-	El navegador determina dónde y cómo debe aparecer cada elemento en la pantalla, basándose en la geometría (tamaño, espaciado y relaciones con los otros elementos, posición , son las propiedades fisicas que determinan su posición y tamaño)  y en las relaciones de los elementos.

#### 4- Painting (Pintado o Repaint)
- Una vez determinado el layout, el navegador pasa al proceso de pintado (painting), en el cual se asignan colores, texturas, bordes y otros estilos visuales a cada elemento del render tree.
- En la fase de pintado, el navegador dibuja los elementos del árbol de renderizado (render tree) y los organiza en capas separadas en la memoria de la GPU, según sus características, como transformaciones o efectos visuales. A pesar de este proceso, los elementos aún no son visibles en la pantalla. Esta etapa prepara todo lo necesario para que los elementos se muestren correctamente cuando llegue el momento de la visualización.
- El navegador no envía esta información a la pantalla inmediatamente. En su lugar, los elementos dibujados en cada capa se almacenan en la memoria y, posteriormente, durante la fase de compositing, esas capas se fusionan en una imagen final, respetando su orden visual (como el z-index) y aplicando efectos como transparencia.
- Es en la fase de compositing cuando el navegador finalmente fusiona todas las capas pintadas y crea la imagen final que se muestra en la pantalla.



#### 5- Compositing (Composición)
- El navegador divide la página en Capas: Para optimizar el rendimiento, el navegador divide los elementos  HTML de la página en capas. 
- Algunas propiedades específicas hacen que el navegador cree una capa independiente para un elemento. Estas propiedades incluyen:
    - z-index: Elementos apilados en diferentes niveles de profundidad.
    - transform: Transformaciones como rotaciones, escalado o traslación (rotate, scale, translate).
    - opacity: Efectos de transparencia.
    - Animaciones CSS: Como keyframes que afectan transform u opacity.
    - Propiedades como position: fixed o will-change: Señalan al navegador que un elemento cambiará, optimizando su renderizado.
- ¿Por qué se dividen en capas?
  - La división en capas permite al navegador optimizar el rendimiento, ya que:
      - Los elementos en una capa pueden manejarse de manera independiente.
      - Si una capa cambia (por ejemplo, una animación o un efecto), solo esa capa necesita actualizarse, evitando que todo el contenido de la página se vuelva a renderizar.
- Renderizado y Orden: Una vez que los elementos de la página se dividen en capas, el navegador organiza estas capas para optimizar futuros renderizados, asegurándose de minimizar el trabajo necesario en caso de cambios visuales o interactivos, por ejemplo:
  - Orden Z-index:
      - El navegador coloca las capas según sus valores de z-index. Los elementos con un valor de z-index más alto aparecen encima de los que tienen un valor más bajo.
  - Superposición y Transparencia:
      - Si una capa tiene transparencia (opacity < 1), el navegador mezcla los colores de esa capa con las capas subyacentes.
  - Ejecución de transformaciones:
      - Las capas que usan transform se renderizan con las transformaciones aplicadas (por ejemplo, rotaciones o escalados) antes de superponerlas.
- Fusión de Capas: Una vez que el navegador creo cada capa, las fusiona en una sola imagen que presenta o muestra en la pantalla. Esto permite que solo se actualicen las partes de la pantalla que han cambiado, en lugar de volver a renderizar todo el contenido. La composición ayuda a mejorar el rendimiento y la eficiencia de la carga visual de la página.


#### 6- Reflow y Repaint
-	Durante la interacción del usuario o la ejecución de JavaScript, el DOM o CSSOM pueden cambiar, lo que desencadena re-renderizados parciales en el navegador.
-	Repaint: Si el cambio solo afecta la apariencia de un elemento (como el color), el navegador solo repinta la zona afectada. Esto es menos costoso en términos de rendimiento, ya que no afecta la estructura ni el layout de otros elementos.
-	Reflow: Cuando el cambio afecta la estructura del layout, como al cambiar el tamaño, el margen o la posición de un elemento, el navegador necesita recalcular la posición y el espacio de todos los elementos en el DOM. Este proceso es más intensivo y se llama reflow o layout recalculation. El navegador ajusta y actualiza las posiciones de todos los elementos en función de los nuevos valores, lo cual puede implicar un renderizado parcial o completo de la página.


:::tip
- En programación, renderizar se refiere al proceso de convertir datos, estructuras o código en algo visual que los usuarios puedan ver e interactuar con en la pantalla.
- Existen otros tipos de renderizados, como, por ejemplo:
  -  Renderizado en Frameworks/Librerias JavaScript (como Vue o React):
      -	En frameworks de JavaScript, "renderizar" usualmente se refiere a actualizar la interfaz de usuario según los datos que cambian. Por ejemplo, en React, cuando el estado de un componente cambia, React decide qué partes del DOM necesitan actualizarse y las modifica sin redibujar toda la interfaz.
      -	Esto se logra a través de técnicas de renderizado eficiente como el “Virtual DOM” (una representación en memoria del DOM real) que optimiza qué partes específicas se actualizan en lugar de renderizar todo nuevamente.
  -  Renderizado en Gráficos y Juegos:
      -	En aplicaciones gráficas o videojuegos, renderizar es el proceso de tomar modelos, texturas y otros datos gráficos y convertirlos en imágenes en pantalla. Esto involucra procesos intensivos en gráficos, como iluminación, sombras y efectos visuales, y a menudo implica el uso de una GPU (Unidad de Procesamiento Gráfico).
      -	Aquí, el objetivo es mostrar la escena completa o partes de ella en tiempo real y a una velocidad rápida (en juegos, por ejemplo, 30 a 60 cuadros por segundo).
  -  Renderizado del Lado del Servidor (Server-Side Rendering o SSR):
      -	En aplicaciones web, el renderizado del lado del servidor implica generar el HTML en el servidor y enviarlo al cliente (navegador) listo para mostrar.
      -	Esto permite que la página se cargue más rápido y esté lista antes de que el JavaScript del cliente complete su carga y se ejecute, lo cual mejora la velocidad de carga inicial y es beneficioso para el SEO (optimización para motores de búsqueda).
:::


## Location
- En JavaScript, Location es un objeto que proporciona información sobre la URL actual de la página y permite manipularla. Se puede acceder a través de window.location  o  document.location y se utiliza para obtener o modificar la URL actual de la página web. Algunas de sus propiedades comunes son:
  -	location.href: La URL completa. Si se modifica, se hace una especie de redirección a la nueva URL.
  -	location.hostname: El nombre del host.
  -	location.pathname: La ruta de la URL.
  -	location.search: La cadena de consulta (query string).
- También permite redirigir a otra URL con location.assign() o location.replace().

:::tip Documentación
- [Location](https://developer.mozilla.org/en-US/docs/Web/API/Location)
:::


## Response
- Response es un objeto, que representa la respuesta a una solicitud realizada, ya sea exitosa o fallida. Se utiliza para manejar las respuestas obtenidas después de hacer una petición HTTP mediante el método fetch().
- El Metodo fetch() crea un Response, pero también podes crear uno con un constructor.
#### Características principales:
-	Leer datos: Proporciona métodos para extraer información de la respuesta, como el cuerpo del mensaje, encabezados y estado.
-	Formato de datos: Permite interpretar los datos de la respuesta en diferentes formatos como texto, JSON, blob, etc.
#### Métodos comunes de Response
#####	json()
- Convierte el body de la respuesta en un objeto JSON:
```js
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data));
```
#####	.text()
- Convierte el body de la respuesta en texto plano:
```js
fetch('https://api.example.com/page')
  .then(response => response.text())
  .then(text => console.log(text));
```
#####	.blob()
- Convierte el body en un objeto Blob (archivo binario):
```js
fetch('https://api.example.com/image')
  .then(response => response.blob())
  .then(blob => {
    const img = URL.createObjectURL(blob);
    console.log(img);
  });
```
##### .status y .ok
- Verifica el estado de la respuesta HTTP:
  -	status: Devuelve el código de estado (por ejemplo, 200 para éxito, 404 para no encontrado).
  -	ok: Devuelve true si el estado está entre 200 y 299.
- Ejemplo:
```js
javascript
Copiar código
fetch('https://api.example.com/data')
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      console.error('Error:', response.status);
    }
  });

```
#### Propiedades importantes de Response

##### headers
- Accede a los encabezados de la respuesta:
```js
fetch('https://api.example.com/data')
  .then(response => console.log(response.headers.get('Content-Type')));

```
##### redirected
- Indica si la respuesta fue redirigida.

##### type
- El tipo de respuesta (por ejemplo, "basic", "cors", "error").
##### url
- La URL desde la que se obtuvo la respuesta.


#### Sintaxis del constructor Response
- - En JavaScript, además de obtener respuestas HTTP mediante la API Fetch, también puedes crear manualmente una instancia de Response utilizando su constructor. Esto es útil en situaciones donde necesitas simular respuestas o trabajar con datos locales en lugar de depender de peticiones externas.
- Sintaxis:
```js
new Response(body, options)
```
:::tip Parametros
- body: Contenido de la respuesta. Puede ser:
  -	Un string
  -	Un objeto Blob, FormData, ReadableStream, o ArrayBuffer
  -	null (para respuestas vacías)
-  options: Un objeto opcional para configurar la respuesta. Contiene propiedades como:
   -	status: Código de estado HTTP (por ejemplo, 200, 404).
   -	statusText: Texto asociado al estado (por ejemplo, "OK", "Not Found").
   -	headers: Encabezados HTTP de la respuesta (como un objeto o instancia de [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers)).
:::

- Ejemplo:

```js
const response = new Response("Hello, World!", {
  status: 200,
  statusText: "OK",
  headers: {
    "Content-Type": "text/plain",
  },
});

console.log(response.status); // 200
console.log(response.statusText); // "OK"

response.text().then((text) => console.log(text)); // "Hello, World!"

```

- Crear una respuesta JSON simulada:
```js
const mockData = { message: "Simulated response", success: true };

const jsonResponse = new Response(JSON.stringify(mockData), {
  status: 200,
  headers: {
    "Content-Type": "application/json",
  },
});

jsonResponse.json().then((data) => console.log(data));
// Output: { message: "Simulated response", success: true }

```

- Puedes crear respuestas con un ReadableStream como cuerpo, útil para transmitir datos grandes o dinámicos:
```js
const stream = new ReadableStream({
  start(controller) {
    controller.enqueue("Streamed ");
    controller.enqueue("response!");
    controller.close();
  },	
});

const streamResponse = new Response(stream);

streamResponse.text().then((text) => console.log(text)); // "Streamed response!"

```

:::tip Documentación
- [Response](https://developer.mozilla.org/es/docs/Web/API/Response)
:::

## URL
- En JavaScript, URL es una clase que proporciona una manera fácil y estructurada de trabajar con URLs (Uniform Resource Locators). Puedes usarla para analizar, construir o manipular URLs.
- La clase URL pertenece a API Web y está disponible de forma nativa en el navegador y en entornos como Node.js.
- Sintaxis básica:
```js
const url = new URL(urlString, [base]);
```
:::tip Parametros
-  urlString: La URL completa o parcial que deseas analizar o construir.
-  base (opcional): Si la URL es relativa, este parámetro indica cual es el dominio o url que se tomara como referencia para la ruta relativa. Cuando especificas base, la URL resultante es base + urlString, lo que permite resolver rutas relativas y construir URLs absolutas fácilmente.

:::

#### Propiedades principales de URL
-	href: La URL completa como string.
-	protocol: El protocolo usado (e.g., http: o https:).
-	hostname: El nombre del dominio (sin el puerto).
-	port: El número de puerto si está especificado.
-	pathname: El camino después del dominio.
-	search: La cadena de consulta (query) (e.g., ?key=value).
-	hash: El fragmento (después de #).
- searchParams: Un objeto [URLSearchParams](#urlsearchparams) que permite manipular parámetros de consulta (query).


#### Ejemplo
```js
const url = new URL("https://example.com/path?name=John&age=30#section1");

console.log(url.href);        // "https://example.com/path?name=John&age=30#section1"
console.log(url.hostname);    // "example.com"
console.log(url.pathname);    // "/path"
console.log(url.search);      // "?name=John&age=30"
console.log(url.hash);        // "#section1"

```

- Manipulación de parámetros de consulta:

```js
const url = new URL("https://example.com?name=John");

url.searchParams.set("age", 30);  // Agrega/actualiza el parámetro "age"
url.searchParams.delete("name"); // Elimina el parámetro "name"

console.log(url.toString()); // https://example.com/?age=30

```

- Crear URLs relativas. Si solo tienes una URL parcial, puedes usar el segundo parámetro para construirla:

```js
const relativeUrl = new URL("/path", "https://example.com");

console.log(relativeUrl.href); // "https://example.com/path"

```

:::tip Documentación
- [URL()](https://developer.mozilla.org/es/docs/Web/API/URL/URL)

:::


## Api de transiciones
- La View Transitions API es una API que facilita la creación de transiciones fluidas entre vistas o estados en una página web. Su objetivo principal es mejorar la experiencia del usuario al proporcionar animaciones “suaves” que se realizan al navegar entre páginas o actualizar elementos de la misma página.
#### Características principales
1.	Transiciones entre vistas completas:
  -	Permite animar la transición entre páginas o secciones de contenido, manteniendo la consistencia visual.
2.	Compatibilidad con SPA y MPA:
  -	Funciona tanto en aplicaciones de una sola página (SPA) como en aplicaciones de múltiples páginas (MPA).
3.	Sencillez en la implementación:
  -	Los desarrolladores solo necesitan definir qué partes de la vista deben animarse, mientras que el navegador gestiona los detalles complejos de la animación.
4.	Control programático:
  -	Puedes iniciar y personalizar transiciones mediante métodos específicos que permiten definir el comportamiento deseado.

- Antes crear transiciones eran difíciles ya que tendían a escribir una cantidad significativa de CSS Y Javascript para:
  -	Manejar el loading y posicionamiento del contenido antiguo y nuevo.
  -	Anima los estados antiguos y nuevos para crear la transición.
  -	Evite que las interacciones accidentales del usuario con el contenido antiguo causen problemas.
  -	Elimine el contenido antiguo una vez que se complete la transición. También pueden surgir problemas de accesibilidad, como pérdida de la posición de lectura, confusión de foco y un comportamiento extraño si el contenido nuevo y el antiguo están presentes en el DOM al mismo tiempo.
  -	Antes las transiciones eran casi imposibles
- La Api de transiciones vino a solucionar todos estos problemas al permitirte crear transiciones de forma sencilla.

#### Ejemplo
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>View Transitions API</title>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
    .container {
      max-width: 600px;
      margin: 50px auto;
      padding: 20px;
      text-align: center;
      border: 1px solid #ccc;
      border-radius: 8px;
    }
    .hidden {
      display: none;
    }
    h1 {
      margin-bottom: 20px;
    }
    button {
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div class="container">
    <div id="state1">
      <h1>Pantalla Inicial</h1>
      <p>Haz clic en el botón para cambiar de estado.</p>
      <button id="nextState">Ir a la siguiente pantalla</button>
    </div>
    <div id="state2" class="hidden">
      <h1>Pantalla Secundaria</h1>
      <p>Haz clic en el botón para volver.</p>
      <button id="prevState">Volver</button>
    </div>
  </div>

  <script>
// Selección de elementos
const state1 = document.getElementById('state1');
const state2 = document.getElementById('state2');
const nextState = document.getElementById('nextState');
const prevState = document.getElementById('prevState');

// Función para iniciar la transición
const changeState = (from, to) => {
  document.startViewTransition(() => {
    from.classList.add('hidden'); // Ocultar el estado actual
    to.classList.remove('hidden'); // Mostrar el nuevo estado
  });
};

// Eventos para los botones
nextState.addEventListener('click', () => changeState(state1, state2));
prevState.addEventListener('click', () => changeState(state2, state1));

  </script>
</body>
</html>

```
:::tip Explicación del código
- Función `changeState`:
  -	Es una función flecha que recibe dos parámetros:
      -	from: el contenedor o estado actual que se quiere ocultar.
      -	to: el contenedor o estado nuevo que se quiere mostrar.
  -	La idea es manejar la transición entre estos dos estados.
- Uso de `document.startViewTransition`:
  -	Esta es la llamada a la API de transiciones
  -	Lo que hace document.startViewTransition es:
      -	Capturar el estado actual del contenido antes del cambio.
      -	Ejecutar el cambio dentro del callback proporcionado.
      -	Animar automáticamente entre el estado antiguo y el nuevo.
- Callback en `startViewTransition`:
  -	Dentro del callback (la función que se pasa como parámetro), defines los cambios en el DOM que quieres que ocurran como parte de la transición.
  -	En este caso:
      -	Se oculta el estado actual (from) agregándole la clase hidden.
      -	Se muestra el estado nuevo (to) eliminándole la clase hidden.
- Conclusión: document.startViewTransition es un metodo donde le específicas que cambios vas a hacer en el DOM y este de forma automática  crea animaciones para "suavizar" las transiciones
:::


:::tip método document.startViewTransition() 
- El método document.startViewTransition() es parte de la View Transitions API y funciona así:
  1.	Tú defines los cambios en el DOM:
      -	Especificas qué debe cambiar (por ejemplo, mostrar un nuevo contenedor, ocultar el anterior, cambiar texto, etc.) dentro del callback que le pasas.
  2.	La API se encarga del resto:
      -	Captura el estado visual del contenido antes y después de los cambios.
      -	Genera automáticamente una animación suave que conecta esos dos estados visuales.
      -	Se asegura de que la transición sea eficiente y consistente.
  3.	No tienes que preocuparte por las animaciones:
      -	No necesitas escribir CSS adicional ni calcular manualmente posiciones o estilos; la API se ocupa de animar de forma nativa los elementos afectados.
:::

:::tip Documentación
- [View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API)

:::


## Descriptor de propiedad
- Un descriptor de propiedad define cómo debe crearse y comportarse una propiedad en un objeto.
- Este descriptor incluye información clave sobre si la propiedad puede:
  -  Ser modificada (writable o mediante un setter).
  -  Ser enumerada (se puede recorrer con  for...in o Object.keys(), se configura con la propiedad enumerable).
  -  Ser configurada (permitir cambios en su comportamiento o  eliminarla , se configura con la propiedad configurable).
  -  Tener acceso controlado (usando getter y setter).
  -  Guardar un valor específico (value).
- Entonces es como un “manual de instrucciones” que dice:
  -  Cómo crear la propiedad.
  -  Cómo debe funcionar cuando alguien la lee, la modifica o la itera.
- Si el descriptor no se especifica explícitamente, las propiedades creadas por defecto tienen estas características:
  -	writable: true
  -	enumerable: true
  -	configurable: true
- Si defines una propiedad con un descriptor específico:
```js
const obj = {};
Object.defineProperty(obj, 'prop', {
  value: 42,
  writable: false,
  enumerable: false,
  configurable: false
});


```
:::tip Observación
- Estás diciendo:
  1.	La propiedad prop debe tener el valor 42.
  2.	Su valor no puede modificarse (writable: false).
  3.	No aparece en iteraciones como for...in (enumerable: false).
  4.	No puede redefinirse o eliminarse (configurable: false).
:::

## ReadableStream
- Un ReadableStream representa un flujo de datos que pueden leerse progresivamente.  Este flujo puede provenir de diversas fuentes, como un archivo muy grande que no se puede cargar completamente en memoria, transmisiones de datos desde un servidor o información generada dinámicamente en tiempo real. Con un ReadableStream, puedes procesar información en fragmentos (chunks) a medida que están disponibles, en lugar de esperar a que todo el contenido esté listo.
- En la práctica, ReadableStream es ideal para leer archivos grandes, manejar transmisiones de red o trabajar con datos que se generan de manera progresiva. Gracias a su diseño, puedes empezar a procesar los chunks de inmediato, sin necesidad de esperar a que toda la información esté lista, optimizando recursos y mejorando la experiencia del usuario.
- Un ReadableStream sirve para "enviar la información o los datos en partes" en lugar de enviarla toda de una vez. Esto es útil cuando no puedes o no quieres recibir toda la información de golpe, como en el caso de archivos grandes o datos que se generan y transmiten de manera progresiva.
- Técnicamente, cuando usas un ReadableStream, divides la información en fragmentos (chunks) y los envías de manera controlada. Cada chunk puede ser leído mediante un lector obtenido con el método getReader(), y este lector proporciona los chunks uno a uno con el método read(), junto con una señal que indica si ya se han enviado todos los chunks.
- La analogía perfecta es imaginar que estás recibiendo un paquete grande de información, como un libro muy extenso. En lugar de recibir el libro completo en una sola entrega, te lo envían en capítulos. Cada capítulo llega en un momento diferente, y tú puedes empezar a leerlos en cuanto los recibes, sin necesidad de esperar a que llegue el libro entero. Esto hace que el proceso sea más manejable y eficiente.
- [Representa un stream de lectura.](https://flevatti.github.io/documentacion/docs/Node/extra#teor%C3%ADa)

#### Características principales de un ReadableStream
1.	Flujo progresivo:
  -	La información se procesa en fragmentos llamados chunks, lo que permite trabajar con datos  grandes sin necesidad de cargarlos completamente en memoria.
2.	Control sobre la lectura:
  -	Puedes leer los chunks en partes (de manera manual o automática) a través de un lector (Reader).
  -	La lectura puede ser pausada, reanudada o incluso cancelada.
3.	Compatibilidad con APIs modernas:
  -	Es utilizado por APIs como fetch, que puede devolver datos como un ReadableStream en lugar de un objeto completo.
4.	Modularidad:
  -	Se pueden procesar los chunks mientras llegan utilizando cadenas de procesamiento (piping) con objetos como TransformStream y WritableStream.

  
#### Crear un ReadableStream
- Puedes crear un flujo usando un controlador (underlyingSource):
```js
const stream = new ReadableStream({
  start(controller) {
    // Añadir datos al flujo
    controller.enqueue("Chunk 1");
    controller.enqueue("Chunk 2");
    controller.close(); // Indicar que ya no hay más datos
  }
});

```
:::tip Observación
- ReadableStream recibe un objeto llamado underlyingSource, que define cómo se generaran los datos del flujo.
- underlyingSource tiene un método llamado start que se llama inmediatamente cuando se construye el objeto. Este recibe como parametro un controller.
- El controller tiene el método `enqueue(valor)` para enviar un valor como chunk y el método `close()` para especificar que ya no se va a enviar mas valores en el flujo de datos y por lo tanto cerrar el flujo.
- En este código por lo tanto estamos creando un stream de lectura, que es un flujo de datos, donde los “datos” se envían en partes llamadas chunk.
- El código crea un flujo de datos que envía información en partes (chunks) y finaliza cuando ya no hay más chunks para enviar. La estructura del ReadableStream permite gestionar datos grandes o progresivos de manera eficiente.
:::


#### Leer datos del flujo
- Para consumir datos, usa el método `getReader()`:

```js
const reader = stream.getReader();

async function readStream() {
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      console.log("No hay más datos.");
      break;
    }
    console.log(`Leído: ${value}`);
  }
}

readStream();
// Output:
// Leído: Chunk 1
// Leído: Chunk 2
// No hay más datos.


```
:::tip Observación 
- Con el método `getReader()` obtenemos un “lector” que nos permite leer los  chunks enviados por el ReadableStream.
- El método `read()` devuelve una promesa que retorna el siguiente dato(chunk) que se va a obtener del flujo de dato. Por lo general devuelve un objeto con dos propiedades: 
  - value : el chunk que se obtiene
  - done: Es true si el flujo de dato se cierra y no se envía más datos.
- La primera vez que se ejecuta este método obtenemos el primer valor que se recibe del flujo de dato, la segunda vez el segundo valor del flujo de dato y así… Nos vamos a dar cuenta que es el ultimo valor del flujo de dato porque done estará en true.
:::

#### Ejemplo práctico: Leer datos de una API
- Podes usar fetch para leer un archivo de texto progresivamente:
```js
const response = await fetch('https://example.com/large-file.txt');
const reader = response.body.getReader();

const decoder = new TextDecoder("utf-8"); // Decodificar texto
let content = "";

while (true) {
  const { done, value } = await reader.read();
  if (done) break;
  content += decoder.decode(value);
}

console.log("Archivo completo:", content);

```

:::tip Observación 
- Con `response.body.getReader()` obtenemos un lector para leer el body de la respuesta como si fuera un flujo de datos.
:::


:::tip Documentación 
- [ReadableStream](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream)

:::


## Librería y framework
#### ¿Qué es una librería?
- Una librería es una herramienta que contiene un conjunto de funciones y utilidades diseñadas para ayudarte a resolver un problema específico dentro de tu aplicación. Por ejemplo, puedes usar una librería para manejar fechas, manipular el DOM, o realizar cálculos matemáticos.
- Una librería es ideal cuando necesitas resolver un problema en específico sin alterar la estructura general de tu proyecto, manteniendo control total sobre cómo se construye y organiza tu aplicación.
- Características principales:
  - Enfoque específico: Cada librería está diseñada para un solo propósito o dicho de otra forma solo te soluciona un problema, como animaciones, manejo de datos, etc.
  - Libertad estructural: Eres libre de decidir cómo y dónde usar la librería dentro de tu proyecto, sin una estructura impuesta.
  - Compatibilidad: Si usas múltiples librerías, debes asegurarte de que sean compatibles entre sí.
  - Modularidad: Puedes combinar varias librerías según las necesidades específicas de tu proyecto.

##### Ejemplo de uso 
- Si necesitas manipular fechas en tu aplicación, puedes usar la librería Moment.js o date-fns, y luego combinarla con otras librerías como Lodash para manejar arreglos y objetos.


#### ¿Qué es un framework?
- Un framework es un conjunto de herramientas y reglas predefinidas que proporciona una estructura organizada para desarrollar un proyecto completo. Su propósito es facilitar el desarrollo al establecer una arquitectura clara y proveer funciones que cubren las necesidades más comunes.
- Un framework es ideal para proyectos grandes o complejos, ya que te da una estructura predefinida que asegura compatibilidad y facilita el mantenimiento. Aunque impone ciertas reglas, estas ayudan a mantener la coherencia en el desarrollo.
- Características principales:
  -	Estructura definida: El framework establece cómo debe organizarse tu proyecto, como el lugar donde van los archivos, componentes y rutas.
  -	Funcionalidades integradas: Incluye un conjunto de herramienta/librería para abordar necesidades/problemas comunes y que no tengas que buscar muchas librerías externas.
  -	Compatibilidad garantizada: Sus herramientas/librerías están diseñadas para trabajar juntas sin conflictos.
  -	Inversión de control: Tú escribes tu código, pero el framework controla cuándo y cómo se ejecuta.

##### Ejemplo de uso 
- Con un framework como Angular, puedes desarrollar una aplicación completa porque incluye enrutamiento, servicios para llamadas a APIs, y herramientas para construir interfaces dinámicas, todo bajo sus reglas y arquitectura.


#### Analogías para entender las diferencias
-	Fiesta:
    -	Librería: Es como tener una licuadora o un horno para preparar un platillo. Tú decides cuándo y cómo usarlos. La librería no te dice cómo organizar la fiesta.
    -	Framework: Es como tener un plan detallado para la fiesta que dicta qué preparar, cuándo servirlo, y cómo organizar todo.
-	Viaje:
    -	Librería: Es como usar un GPS para decidir tu ruta. Tú eliges por dónde ir.
    -	Framework: Es como un tour guiado donde todo está planeado, desde las paradas hasta los horarios.


## Dynamic import
- El dynamic import en JavaScript es una forma de cargar (importar) archivos o módulos solo cuando los necesitas. En lugar de que todo el código (módulos o archivos) se cargue al inicio (como pasa con import normal), este método permite cargar código solo cuando se requiera.
- Es como pedir una pizza: con el dynamic import, la pizza (código) llega cuando la necesitas, en lugar de tenerla lista desde el principio (lo que ocuparía espacio).

#### Ejemplo
- Supongamos que tienes un archivo math.js con la siguiente función:
```js
export function sumar(a, b) {
  return a + b;
}
```

- Ahora, queremos usar esta función solo cuando el usuario haga clic en un botón, para evitar cargarla innecesariamente al inicio de la aplicación.
- En un archivo main.js:
```js
// Seleccionamos el botón de la página
const boton = document.querySelector('#cargar');

// Agregamos un evento al botón
boton.addEventListener('click', async () => {
  try {
    // Importamos dinámicamente el módulo cuando se haga clic
    const { sumar } = await import('./math.js');

    // Usamos la función importada
    const resultado = sumar(10, 15);
    console.log(`El resultado es: ${resultado}`); // Imprime: El resultado es: 25
  } catch (error) {
    // Manejo de errores en caso de que no se pueda cargar el módulo
    console.error('Error al cargar el módulo:', error);
  }
});


```
- El HTML seria:
```html 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dynamic Import Example</title>
</head>
<body>
  <button id="cargar">Sumar</button>
  <script type="module" src="main.js"></script>
</body>
</html>


```

:::tip Observación 

- `import('./math.js')`:
  -	Qué hace: importa el módulo math.js de forma asíncrona y devuelve una promesa que contiene lo que se “importa”.
  -	Por qué es importante: No carga el archivo math.js hasta que se ejecuta este código, ahorrando recursos.
- `await import('./math.js')`
  -	Qué hace: Usa await para esperar a que el módulo sea cargado antes de continuar. Solo funciona dentro de funciones async.
  -	Resultado: Devuelve un objeto con lo que se importa del módulo. En este caso, devuelve { sumar }.
- Desestructuración: `const { sumar } = ...` :
  - Qué hace: Extrae la función sumar del objeto exportado por math.js.
  - Equivalente: Este código:
```js
const module = await import('./math.js');
const sumar = module.sumar;

```
- Manejo de errores: try...catch:
  - Si el archivo no existe o hay un problema de red, el dynamic import puede fallar. El bloque catch asegura que el error se maneje correctamente.
- Botón con addEventListener:
  - El código espera a que el usuario haga clic en el botón antes de cargar el módulo, haciendo la carga completamente bajo demanda.
- Explicación completa de lo que hace el código:
	- Carga inicial:
	  - La página carga rápidamente porque el archivo math.js no se importa hasta que el botón sea presionado.
	- Clic en el botón:
	  - Al hacer clic, se llama a la función import('./math.js').
	  - JavaScript carga el archivo math.js y extrae la función sumar.
	- Uso del módulo:
	  - Una vez que el archivo es cargado exitosamente, la función sumar(10, 15) se ejecuta y muestra el resultado en la consola.



:::

## Que es bundlers y code splitting

#### Bundler
- Un bundler (empaquetador) es una herramienta que combina múltiples archivos de tu proyecto (HTML, CSS, JavaScript, imágenes, etc.) en uno o más archivos llamados bundles. Su objetivo principal es optimizar la carga de recursos en la web.
##### Analogía
- Imagina que vas a un supermercado a hacer tus compras semanales.
-	Sin bundler:
    -	Compras los huevos en una tienda de abarrotes.
    -	Luego, vas a la carnicería por la carne.
    -	Después, te diriges a la frutería por las manzanas.
    -	Esto implica varios viajes y tiempo adicional.
-	Con bundler:
    -	Vas a un supermercado que agrupa todo en un solo lugar.
    -	Puedes comprar huevos, carne y frutas en un solo viaje.
    -	Esto ahorra tiempo y esfuerzo.


##### Relación
- Un bundler agrupa los archivos de tu proyecto (como JavaScript, CSS e imágenes) en un solo "paquete" optimizado, similar a cómo el supermercado reúne todos los productos en un solo lugar para tu conveniencia.


##### ¿Por qué usar un bundler?
-	Agrupa y optimiza archivos:
    -	En lugar de enviar muchos archivos pequeños al navegador, se agrupan en unos pocos más grandes, lo que mejora el rendimiento.
-	Minificación y compresión:
    -	Reduce el tamaño de los archivos al eliminar espacios, comentarios y código innecesario.
-	Compatibilidad:
    -	Convierte código moderno (como ES6+) a versiones compatibles con navegadores antiguos.
-	Soporte para módulos:
    -	Permite usar módulos import/export en proyectos grandes.
##### Herramientas populares de bundlers
-	Webpack: Muy potente y flexible.
-	Vite: Rápido y moderno, ideal para proyectos React, Vue y Svelte.
-	Parcel: Configuración mínima y amigable para principiantes.
-	Rollup: Excelente para librerías y proyectos enfocados en JavaScript.

#### ¿Qué es Code Splitting?
- Code Splitting es una técnica que divide tu aplicación (código) en fragmentos más pequeños de código (chunks) para cargarlos de forma dinámica y solo cuando se necesite, en lugar de enviar todo el código de una vez al navegador.
- Eso se hace usando Dynamic import.
##### Analogía
- Piensa en un restaurante donde puedes pedir un menú completo o platos individuales.
-	Sin code splitting:
    -	Pides un menú completo (entrada, plato fuerte, postre), aunque solo quieres el plato fuerte.
    -	Terminas pagando y esperando por cosas que no necesitabas.
-	Con code splitting:
    -	El restaurante te permite pedir solo el plato fuerte si eso es lo que necesitas.
    -	Obtienes exactamente lo que pediste, cuando lo necesitas, sin desperdiciar dinero ni tiempo.

##### Relación
- Con code splitting, solo se carga el código necesario en el momento en que se necesita. Esto es como pedir únicamente el plato que necesitas en un restaurante, en lugar de recibir todo el menú.

##### Ventajas del Code Splitting
-	Carga más rápida inicial:
    -	Solo se carga el código necesario para mostrar la página actual, lo que mejora el rendimiento inicial.
-	Optimización del rendimiento:
    -	Los fragmentos se cargan solo cuando son necesarios, reduciendo el uso de memoria.
-	Mejor experiencia de usuario:
    -	Permite cargar nuevas funcionalidades (como rutas) sin recargar toda la página.


## Código síncrono y código asíncrono

#### Código síncrono
- El código síncrono se ejecuta de manera secuencial. Esto significa que cada instrucción se ejecuta una después de otra, y el programa espera a que termine una tarea antes de comenzar la siguiente. En otras palabras, el flujo de ejecución sigue un orden estricto y no se mueve a la siguiente tarea hasta que la actual no ha terminado.

##### Analogía
- Imagina que estás en una tienda de comida rápida, y el empleado debe prepararte una hamburguesa. No puedes hacer otra cosa hasta que la hamburguesa esté lista. Mientras preparan la hamburguesa, tú solo puedes esperar en la cola. Una vez que la hamburguesa esté lista, puedes seguir con el proceso.
- Síncrono = esperar hasta que algo termine para poder continuar

##### Características del código síncrono
-	Secuencial: Cada tarea se ejecuta en orden, una tras otra.
-	Bloqueante: Si una operación tarda (por ejemplo, leer un archivo o hacer una petición de red), el código se detiene hasta que esa operación termine.

##### Ejemplo
```js
console.log("Inicio");

function tareaLenta() {
  let start = Date.now();
  while (Date.now() - start < 2000) {
    // Simula una tarea que tarda 2 segundos
  }
  console.log("Tarea lenta terminada");
}

tareaLenta();
console.log("Fin");


```
:::tip Explicación
-	El código imprimirá "Inicio".
-	Luego, ejecutará la función tareaLenta, que simula una tarea de 2 segundos. Durante esos 2 segundos, el programa no puede hacer nada más.
-	Una vez que la tarea lenta termina, imprime "Tarea lenta terminada" y luego "Fin".
- El código sigue de manera estricta: espera a que termine una tarea antes de continuar.
:::


#### Código Asíncrono
- El código asíncrono permite que ciertas tareas se realicen en segundo plano sin bloquear el flujo de ejecución del programa. Es decir, las tareas no se ejecutan de manera secuencial, sino que el programa puede continuar ejecutándose mientras espera que ciertas operaciones asíncronas (como leer un archivo o hacer una solicitud HTTP) terminen.

##### Analogía
- Ahora, imagina que estás en una tienda de comida rápida y el empleado te dice que te avise cuando la hamburguesa esté lista, pero mientras tanto, puedes ir a hacer otras compras. Cuando te avisan que la hamburguesa está lista, vas a recogerla. No tienes que quedarte parado esperando mientras preparan la comida.
-	Asíncrono = hacer otras cosas mientras esperas que algo termine.

##### Características del código síncrono
-	No bloqueante: No se detiene el flujo de ejecución; las operaciones se gestionan en segundo plano.
-	Se maneja con callbacks, promesas o async/await: Se espera que el resultado de una operación asíncrona llegue en el futuro, pero el programa sigue su curso mientras tanto.

##### Ejemplo

```js
console.log("Inicio");

function tareaLentaAsincrona() {
  setTimeout(function() {
    console.log("Tarea lenta terminada");
  }, 2000); // Simula una tarea que tarda 2 segundos
}

tareaLentaAsincrona();
console.log("Fin");


```


:::tip Explicación
-	El código imprime "Inicio".
-	Luego, ejecuta tareaLentaAsincrona, que usa setTimeout para simular una tarea que toma 2 segundos. Sin embargo, el flujo de ejecución no se detiene.
-	Inmediatamente después de llamar a tareaLentaAsincrona, se imprime "Fin" sin esperar a que la tarea termine.
-	Después de 2 segundos, el mensaje "Tarea lenta terminada" se imprime.

:::


#### Como implementar código asíncrono
- El código asíncrono permite que una tarea se ejecute en segundo plano y luego se ejecute una acción una vez que la operación asíncrona haya terminado.
- Para especificar lo que se va a “ejecutar” después de que la operación asíncrona haya terminado, se utilizan principalmente callbacks, promesas y async/await.

#### Callbacks
- Un callback es simplemente una función que se pasa como argumento a otra función, y esta función se ejecuta cuando la operación asíncrona haya terminado.
- Ejemplo con callback:

```js
console.log("Inicio");

function tareaAsincrona(callback) {
  setTimeout(() => {
    console.log("Tarea asíncrona terminada");
    callback(); // Ejecuta la función de callback cuando la tarea termina
  }, 2000); // Simula una tarea de 2 segundos
}

tareaAsincrona(() => {
  console.log("Acción después de la tarea asíncrona");
});

console.log("Fin");



```
:::tip Explicación
-	El código imprime "Inicio".
-	Luego, la función tareaAsincrona se ejecuta, pero la operación dentro de setTimeout (que simula una tarea de 2 segundos) no bloquea el flujo de ejecución.
-	Mientras espera a que la tarea termine, se imprime "Fin".
-	Después de 2 segundos, el callback se ejecuta y muestra el mensaje "Acción después de la tarea asíncrona".
- En este caso, cuando la tarea asíncrona termine, se ejecutará la función que hemos pasado como callback.
:::


#### Usando Promesas
- Las promesas son una forma más poderosa de manejar operaciones asíncronas y nos permiten manejar el código después de que la operación termine de manera más limpia que con callbacks.
- Ejemplo:
```js
console.log("Inicio");

function tareaAsincronaConPromesa() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Tarea asíncrona terminada");
      resolve(); // Resuelve la promesa cuando la tarea termina
    }, 2000); // Simula una tarea de 2 segundos
  });
}

tareaAsincronaConPromesa().then(() => {
  console.log("Acción después de la tarea asíncrona");
});

console.log("Fin");


```

:::tip Observación
-	Imprime "Inicio".
-	La función tareaAsincronaConPromesa devuelve una promesa que se resuelve (se termina de ejecutar) después de 2 segundos.
-	Mientras tanto, el código sigue ejecutándose sin bloquearse, y se imprime "Fin".
-	Cuando la promesa se resuelve (se termina de ejecutar la tarea asíncrono), el método `.then()` se ejecuta y muestra "Acción después de la tarea asíncrona".
- En este caso, cuando la promesa se resuelve, se ejecuta la acción que hemos puesto en `.then()`.

:::


#### Usando async / await
- El async/await es una sintaxis más moderna y conveniente para trabajar con promesas. `await` hace que el flujo de ejecución se ponga en "pausa" hasta  que la promesa se resuelva (se termine de ejecutar) , pero de una manera más legible y sin usar `.then()`.
- Ejemplo con async/await:
```js
console.log("Inicio");

async function tareaAsincronaConAwait() {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Tarea asíncrona terminada");
      resolve(); // Resuelve la promesa cuando la tarea termina
    }, 2000); // Simula una tarea de 2 segundos
  });

  console.log("Acción después de la tarea asíncrona");
}

tareaAsincronaConAwait();

console.log("Fin");


```

:::tip Observación
-	Se imprime "Inicio".
-	La función tareaAsincronaConAwait es una función asíncrona que usa await para esperar a que la promesa se resuelva (es decir, espera a que la tarea de 2 segundos termine).
-	Mientras la tarea está en ejecución, el flujo de ejecución no se bloquea pero se pone en "pausa" hasta que la tarea asíncrona termine.
-	Después de 2 segundos, se imprime "Acción después de la tarea asíncrona".
-	Finalmente, el código principal imprime "Fin".

:::

## Concepto de estándar
- Un estándar en programación se refiere a un conjunto de normas, reglas, o prácticas recomendadas que se establecen para asegurar que el desarrollo del software sea consistente, de alta calidad y fácil de mantener. Los estándares en programación pueden abordar diversos aspectos del código, desde su estructura y estilo, hasta el comportamiento y la seguridad del software.
#### Tipos de estándares en programación
1.	Estándares de código:
  -	Se refieren a las normas (de estilo) que los desarrolladores siguen al escribir su código. Estas normas definen cómo debe ser la indentación (espacio en blanco), el naming convention (convención de nombres de variables, clases, etc), el uso de comentarios, y otros aspectos (visuales y estructurales) del código.
o	Ejemplo: En JavaScript, un estándar común es usar camelCase para las variables y PascalCase para los nombres de las clases.
2.	Estándares de comportamiento:
  -	Se refieren a las [reglas de diseño](../React/otros2.md#patrón-de-diseño) y [arquitectura](../Node/arquitecturas.md) que deben seguir los sistemas o aplicaciones, como el uso de ciertos patrones de diseño (por ejemplo, MVC o Singleton), el tratamiento de errores, y el flujo de la aplicación.
o	Ejemplo: El uso de API RESTful es un estándar común para construir servicios web.
3.	Estándares de seguridad:
  -	Establecen las mejores prácticas para proteger el software contra vulnerabilidades y ataques maliciosos. Esto incluye la validación de entradas, la encriptación de datos sensibles, y el uso adecuado de autenticación y autorización.
  -	Ejemplo: OWASP Top 10 es una lista de estándares y mejores prácticas relacionadas con la seguridad de las aplicaciones web.
4.	Estándares de interoperabilidad:
  -	Se refieren a las normas que aseguran que los sistemas o aplicaciones puedan interactuar de manera eficiente y sin problemas. Esto incluye la estandarización de formatos de datos (como JSON o XML), protocolos de comunicación (como HTTP o MQTT), y otras formas de intercambio de información.
  -	Ejemplo: El uso de OAuth 2.0 para autorización en aplicaciones que interactúan con servicios externos.
5.	Estándares de documentación:
  -	Se refieren a las normas que guían la creación de documentación técnica del código, como la descripción de funciones, clases, métodos, y el comportamiento del sistema. Un estándar común en este caso es JSDoc para JavaScript, o Javadoc para Java.
  -	Ejemplo: Usar Swagger para documentar las APIs.
6.	Estándares de pruebas:
  -	Son las mejores prácticas para probar el código y asegurar su correcto funcionamiento, como la escritura de pruebas unitarias, pruebas de integración y pruebas de rendimiento.
  -	Ejemplo: El uso de frameworks como JUnit en Java o Jest en JavaScript para realizar pruebas.

#### Propósito de los estándares en programación
1.	Consistencia: Aseguran que el código sea consistente y uniforme, lo que facilita la comprensión y el mantenimiento por parte de otros desarrolladores.
2.	Colaboración: Facilitan el trabajo en equipo, ya que todos los miembros siguen las mismas normas, lo que reduce la probabilidad de errores y conflictos.
3.	Mantenimiento: El software que sigue estándares es más fácil de mantener, ya que otros desarrolladores pueden leer y entender el código rápidamente, incluso si no lo escribieron originalmente.
4.	Calidad: Los estándares ayudan a garantizar que el software tenga un nivel mínimo de calidad en términos de seguridad, rendimiento y usabilidad.
5.	Escalabilidad: Aplicar estándares adecuados facilita la escalabilidad de las aplicaciones, ya que puede hacer que el sistema crezca de manera ordenada.


#### Ejemplos de estándares comunes
-	Estándares de estilo de código: En lenguajes como JavaScript, Python, o C#, existen guías de estilo específicas (como Airbnb JavaScript Style Guide o PEP 8 en Python) que describen cómo escribir el código de manera coherente.
-	Estándares de APIs: Al diseñar APIs, es común seguir los principios RESTful (estándar), que incluyen el uso de métodos HTTP como GET, POST, PUT, y DELETE y la estructuración adecuada de URLs.
-	Estándares de seguridad: Como se mencionó antes, el estándar OWASP proporciona reglas sobre cómo hacer que las aplicaciones sean más seguras.
