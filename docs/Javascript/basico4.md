---
sidebar_position: 12
---
# API y mas

## Navigator GeoLocation
- La API de geolocalización se usa para recuperar la ubicación del usuario
#### getCurrentPosition(X)
- El objeto navigator.geolocation contiene el metodo getCurrentPosition() para devolver la posición/ubicacion del usuario
- Parametro X : Una funcion  con un  parametro(este contiene  informacion sobre la ubicacion del usuario) . Esta se ejecutaria una vez que se logre obtener la posición/ubicacion del usuario
```js
   const showPosition = (position) => {
        console.log(position);
      }
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
      }
```

:::tip Observacion
1. Comprobamos si existe el objeto navigator.geolocation, para ver si es compatible  con el navegador
2. Invocamos el metodo getCurrentPosition(), que genera un objeto y se lo pasa a la funcion showPosition a traves del  argumento position
3. Se ejecuta el metodo showPosition con el objeto que genero getCurrentPosition() COMO primer argumento.
:::
#### getCurrentPosition(X , Y)

- Parametro Y : Es una funcion para manejar los errores 
- El parametro Y Especifica una funcion para ejecutar si no se puede obtener la ubicacion del usuario.


```js
     const showPosition = (position) => {
        console.log(position);
      }
      function showError(error) {
        console.log(error)
}
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition , showError);
      }

```

#### Otros metodos
- El objeto navigator.geolocation contiene dos metodos mas :
   - watchPosition() : Devuelve la posición actual del usuario y continúa devolviendo la posición actualizada a medida que el usuario se mueve.
   - clearWatch() : Detiene el metodo watchPosition()

:::tip Info
- [GeoLocation](https://www.w3schools.com/html/html5_geolocation.asp)
- [GeoLocation #2](https://www.w3schools.com/js/js_api_geolocation.asp)
-  [API Reference](https://www.w3schools.com/jsref/api_geolocation.asp)
- [GeoLocation #3](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation)
:::
## call
:::tip Recordatorio
- This hace referencia al scope/contexto actual.
:::
- Sirve para ejecutar una función con otro contexto (scope).
- Recibe un objeto como parámetro.
- La función se ejecutará con el contexto del objeto que se le pasa.
```js
  // this por defecto es el objeto window (scope global)
    console.log(this);
    this.lugar = 'Contexto global';
    function saludar() {
      console.log(`${this.lugar}`);
    }
    saludar();
    const obj = {
      lugar : 'Contexto Objeto'

    }
    saludar.call(obj);

```
:::tip Observación
- saludar.call(obj) = Ejecuta la funcion saludar pero con el contexto(scope) del objeto obj.
- This = objeto obj  : El contexto/scope de la funcion saludar es el scope del objeto obj gracias a la funcion call.
- En otras palabras. Crea una variable this (scope local) con el objeto del primer parametro  y se la pasa a la función que se invocara. Esta función utilizara los datos del “this”  creado para realizar alguna operación.
:::
- Aparte de recibir un objeto, puede recibir X parámetros mas
- X parámetros = La cantidad de parámetros que contiene la función que se va a ejecutar
```js
 // this por defecto es el objeto window (scope global)
    console.log(this);
    this.lugar = 'Contexto global';
    function saludar(saludo , aQuien) {
      console.log(`${saludo} ${aQuien} desde el ${this.lugar}`);
    }
    saludar("Hola" , "Juan");
    const obj = {
      lugar : 'Contexto Objeto'

    }
    saludar.call(obj , "Hola" , "Pedro");

```
- Si el objeto del primer parámetro es null , se ejecutara con el contexto(scope) global.
```js
  saludar.call( null , "Hola" , "Pedro");
```
Tambien puede ser:
```js
   saludar.call( this , "Hola" , "Pedro");
```
:::tip info
- [call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
- [call 2  ](https://www.w3schools.com/js/js_function_call.asp)

:::
## apply
- Funciona igual que call()
- Crea una variable this (scope local) con el objeto del primer parametro  y se la pasa a la función que se invocara. Esta función utilizara los datos del “this”  creado para realizar alguna operación.

```js
    // this por defecto es el objeto window (scope global)
    console.log(this);
    this.lugar = 'Contexto global';
    function saludar() {
      console.log(`${this.lugar}`);
    }
    saludar();
    const obj = {
      lugar : 'Contexto Objeto'

    }
    saludar.apply(obj);

```
- Aparte de recibir un objeto, puede recibir  un array como segundo parámetro.
- Cada elemento del array es un parámetro de la funcion que se va a ejecutar
  - Array[0] = Parametro 1 de la funcion
  - Array[1] = Parametro 2 de la funcion
```js
    // this por defecto es el objeto window (scope global)
    console.log(this);
    this.lugar = 'Contexto global';
    function saludar(saludo , aQuien) {
      console.log(`${saludo} ${aQuien} desde el ${this.lugar}`);
    }
    saludar("Hola" , "Juan");
    const obj = {
      lugar : 'Contexto Objeto'

    }
    saludar.apply(obj , ["Hola" , "Tomas"]);

```
- Si el objeto del primer parámetro es null , se ejecutara con el contexto(scope) global.
```js
  saludar.apply(null , ["Hola" , "Tomas"]);
```
Tambien puede ser:
```js
 saludar.apply(this , ["Hola" , "Tomas"]);
```

:::tip info
- [apply](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
- [apply 2 ](https://www.w3schools.com/js/js_function_apply.asp)
- [Diferencias entre bind - call - apply](https://www.taniarascia.com/this-bind-call-apply-javascript/)

:::
## bind
- Hace lo mismo que call y apply
- Recibe un objeto como parámetro.
- Cambia el contexto(scope) de la función que se va a ejecutar.
- Crea una variable this (scope local) con el objeto del primer parametro  y se lo pasa a la función  que se especifico. Esta función utilizara los datos del “this”  creado para realizar alguna operación.
```js
   const persona = {
      nombre: "Jon" ,
      saludar : function() {
        console.log(`Hola ${this.nombre}`)
      }
     }
    //Devuelve Hola Jon
    persona.saludar();
    const otraPersona = {
      saludar:persona.saludar
    }

    // Devuelve Hola undefined porque otraPersona no tiene la propiedad nombre 
    otraPersona.saludar()

    const otraPersona2 = {
      saludar:persona.saludar.bind(persona)
    }

      //Devuelve Hola Jon
      otraPersona2.saludar();

```
- Usar contexto global:
```js
     const persona = {
      nombre: "Jon" ,
      saludar : function() {
        console.log(`Hola ${this.nombre}`)
      }
     }
    persona.saludar();
    const otraPersona = {
      saludar:persona.saludar.bind(this)
    }

   this.nombre = "Window"
    otraPersona.saludar()

```
:::tip info
- [bind](https://www.w3schools.com/js/js_function_bind.asp)
- [bind 2](https://www.javascripttutorial.net/javascript-bind/)
- [bind 3](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)

:::
## 'use stric' -- Modo estricto
- Define que el código JavaScript debe ejecutarse en "modo estricto".
- No es una declaración, sino una expresión literal
- El propósito de "use strict" es indicar que el código debe ejecutarse en "modo estricto".
- Con el modo estricto, no se puede:
  - Usar variables/objetos no declarados
  - Eliminar una variable/objeto/función
  - Duplicar el nombre de un parámetro
  - Y mucho mas 
#### ¿Por qué modo estricto?
- El modo estricto facilita la escritura de JavaScript "seguro".
- El modo estricto cambia la "mala sintaxis" previamente aceptada en errores reales.
- Como ejemplo, en JavaScript normal, escribir mal el nombre de una variable crea una nueva variable global. En modo estricto, esto generará un error, lo que imposibilitará la creación accidental de una variable global.
- En JavaScript normal, un desarrollador no recibirá ningún comentario de error al asignar valores a propiedades que no se pueden escribir.
- En modo estricto, cualquier asignación a una propiedad que no se puede escribir, una propiedad de solo captador(getter), una propiedad inexistente, una variable inexistente o un objeto inexistente generará un error.
#### Según donde este ubicado la sintaxis, tiene un alcance global o local.
- Declarado al comienzo de una secuencia de comandos, tiene un alcance global (todo el código de la secuencia de comandos se ejecutará en modo estricto):
```js
      "use strict";
      x = 3.14; // La variable x no esta declarada

```
- Declarado dentro de una función, tiene alcance local (solo el código dentro de la función está en modo estricto):
```js
x = 3.14;  // No causa un error
myFunction();

function myFunction() {
  "use strict";
  y = 3.14;   // Causa un error
}

```
:::tip info
- [use strict](https://www.w3schools.com/js/js_strict.asp)
- [use strict 2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
- [use strict 3](https://javascript.info/strict-mode)
- [use strict 4](https://www.programiz.com/javascript/use-strict)

:::
## metodos y atributos privados 
- Con el prefijo “#”, podemos crear métodos y atributos privados
```js
 class Persona {
      // Es un atributo privado
      #nombre = "No tiene nombre";
      constructor(nombre) {
        this.#nombre = nombre;
      }
    // Método privado
    #saludarPrivado() {
        return `${this.#nombre} dice hola!`;
    };
    obtenerSaludo(){
      return this.#saludarPrivado();
    }
   
    }
    const juanito = new Persona("juanito");
    console.log(juanito.nombre)
    console.log(juanito.obtenerSaludo())

```
:::tip info
- [guia](https://fedeleva.github.io/documentacion/docs/Javascript/poo#private-class-fields)
:::
## Debugger Chrome
#### Paso 1: Reproducir el error
- Encontrar una serie de acciones que reproduzcan un error de manera consistente es siempre el primer paso para la depuración.
#### Paso 2: Familiarícese con la DevTools
- DevTools (Lo contiene Chrome u otros navegadores) proporciona muchas herramientas diferentes para diferentes tareas, como cambiar CSS, perfilar el rendimiento de carga de la página y monitorear las solicitudes de red. El panel Fuentes es donde se depura JavaScript.
- La pestaña fuentes tiene tres partes:
  - El panel Navegador de archivos: Es para navegar entre archivos. Todos los archivos que solicita la página se enumeran aquí.
  - El panel Editor de código :  Después de seleccionar un archivo en el panel Navegador de archivos, el contenido de ese archivo se muestra aquí:
  - El panel de depuración de Javascript: Contiene varias herramientas para inspeccionar el Javascript de la página.
#### Paso 3: Pausar el código con un punto de interrupción

- En lugar de usar el console.log () para ver el estado del código, puede usar puntos de interrupción , para hacerlo más rápido.
- Un punto de interrupción le permite pausar su código en medio de su ejecución y examinar todos los valores en ese momento.
  
:::tip Diferencias con console.log
- Con console.log(), debe abrir manualmente el código fuente, encontrar el código relevante, insertar las declaraciones console.log() y luego volver a cargar la página para ver los mensajes en la consola. Con los puntos de interrupción, puede hacer una pausa en el código relevante sin siquiera saber cómo está estructurado el código.
- En  las  declaraciones console.log(), debe especificar explícitamente cada valor que desea inspeccionar. Con los puntos de interrupción, DevTools le muestra los valores de todas las variables en ese momento. A veces hay variables que afectan tu código de las que ni siquiera eres consciente.
- En resumen, los puntos de interrupción pueden ayudarlo a encontrar y corregir errores más rápido que el método console.log().
:::
:::tip ¿Como cancelar el código cuando se ejecuta un evento?
- En el panel de depuración , hay una opcion llamada” Interrupciones del objeto de escucha de eventos” (Event Listener Breakpoints).
- Haga click en el evento que desea que ocurra para detener la ejecución del código.
- Y listo, intenta hacerlo!!
- [Hay diferentes tipos de interrupciones , que definen como se va a detener el codigo ](https://developer.chrome.com/docs/devtools/javascript/breakpoints/)
:::
#### Paso 4: Recorrer el código
 
- Una causa común de errores es cuando un script se ejecuta en el orden incorrecto. 
- Recorrer paso a paso su código le permite caminar a través de la ejecución de su código, una línea a la vez, y averiguar exactamente dónde se está ejecutando en un orden diferente al que esperaba
#### Paso 5: Establezca un punto de interrupción de línea de código
- Los puntos de interrupción de línea de código son el tipo más común de punto de interrupción. Cuando tenga una línea de código específica en la que desee hacer una pausa, use un punto de interrupción de línea de código.
##### Paso 6: Verifique los valores de las variables
- DevTools proporciona muchas herramientas para examinar valores de variables.
#### Método 1: El panel Alcance
- Cuando está en pausa en una línea de código, el panel  Alcance le muestra qué variables locales y globales están definidas actualmente, junto con el valor de cada variable. También muestra las variables de cierre, cuando corresponda. 
- Haga doble clic en un valor de variable para editarlo. Cuando no está en pausa en una línea de código, el panel Ámbito está vacío.
#### Método 2: Ver expresiones
- La pestaña Watch Expressions(Supervision) le permite monitorear los valores de las variables a lo largo del tiempo. 
- Como su nombre lo indica, Watch Expressions no se limita solo a las variables. - Puede almacenar cualquier expresión de JavaScript válida en una Expresión de vigilancia
#### Método 3: La consola
- Podes usar la consola para ver los valores
#### Paso 7: Aplicar una corrección
- Has encontrado una solución para el error. Todo lo que queda es probar su solución editando el código y volviendo a ejecutar la demostración. 
- No necesita salir de DevTools para aplicar la corrección. Puede editar el código JavaScript directamente en el panel de depuración.

:::tip info
- [guia 1 -- practica](https://developer.chrome.com/docs/devtools/javascript/)
- [guia 2](https://es.javascript.info/debugging-chrome)
- [¿Como usar watch (Supervisión)?](https://stackoverflow.com/questions/27247350/how-to-add-watch-in-chrome-developer-tools)
- [Guia de la consola](https://developer.chrome.com/docs/devtools/#watch)

:::
## Scroll infinito
- Para lograr el scroll infinito , utilizamos un observer que detecta el final de la "pagina" a traves de un elemento HTML (en este ejemplo un div).
  
#### HTML
```html
<!DOCTYPE html>
<html lang="en-us">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width" />

  <link rel="stylesheet" href="style.css">
</head>

<body>
    <h1 class="title">Rick & Morty Scroll</h1>
     <main class="item-container" id="item-container"></main>
     <!-- Cuando este DIV esta visible en el observer , se ejecutara una consulta , formando un scroll infinito -->
     <div id="request-target"></div>
     <script src="script.js"></script>
</body>

</html>

```
#### CSS
```css
* 
{ 
    font-family:'jetBrains Mono' , monospace;
    color:#fff;
}

body {
    background:repeating-linear-gradient(
        45deg , #ff5a5f,
        #ff5a5f 150px,
        #011936 150px,
        #011936 300px
    )
}

.item-container , .title {
    max-width:320px;
    margin: 0 auto 10px;
}

.item {
    border:1px solid;
   backdrop-filter:blur(10px);
   margin-bottom:20px;
   border-radius:4px;
   display: grid;
   font-size:25px;
   place-items:center;
   text-align:center;
}

.title {
    font-size:80px;
}

.char-img {
    width:125px;
    border-radius:50%;
    margin:30px;
}

.char-id {
    background-color:#fff;
    color:#000;
    border:1px solid #000;
    width:60px;
    height:60px;
    border-radius:50%;
    display: grid;
    place-items:center;
    margin:30px 0 10px;
}

.char-species {
    background-color:#fff;
    color:#000;
    width:100%;
    padding:10px 0;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius:3px;

}

```
#### Javascript
```js
const requestTarget = document.querySelector("#request-target");
const itemContainer = document.querySelector("#item-container");
let apiUrl = 'https://rickandmortyapi.com/api/character';
let loading = false;
interSectionOptions = {
    threshold : 1 
}
const onIntersect = ([entry]) => {
   if (apiUrl && !loading && entry.isIntersecting) {
    makeRequest();
   }
}

const makeRequest = ()=> {
    loading = true;
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
         cleanUp(data.info.next);
         renderItems(data.results);
    })
}
const cleanUp = nextPage => {
    apiUrl = nextPage;
    loading = false;
}
const renderItems = results => {
    results.forEach( item => {
        itemContainer.appendChild(createItem(item))
    })
}
const createItem = item => {
    const newItem = document.createElement('div');
    newItem.classList.add('item')
    newItem.innerHTML = (
       `
        <div class="char-id">${item.id}</div>
        <div class="char-name">${item.name}</div>
        <img class="char-img" src="${item.image}"  />
        <div class="char-species">${item.species}</div>
       `
    )
    return newItem;
}
let observer = new IntersectionObserver(onIntersect , interSectionOptions);

observer.observe(requestTarget);

```
## Metodos  Strings
- [stars/endsWith -- includes -- indexOf -- lastIndexOf](../../static/img/MetodosString.jpg)


## || (OR)
- El símbolo “or” se representa con dos símbolos de línea vertical

```js
Argumento A || Argumento B  
```
- Puede tener más de 2 argumentos.

```js
Argumento A || Argumento B || Argumento C || …
```

- En la programación clásica, el OR lógico está pensado para manipular solo valores booleanos. Si cualquiera de sus argumentos es true, retorna true, de lo contrario retorna false
- En JavaScript, el operador es un poco más complicado y poderoso. Pero primero, veamos qué pasa con los valores booleanos.


```js
alert(true || true); // true (verdadero)
alert(false || true); // true
alert(true || false); // true
alert(false || false); // false (falso)

```

- Como podemos ver, el resultado es siempre true excepto cuando ambos operandos son false.
- Si un argumento no es un booleano, se lo convierte a booleano para la evaluación.
- Por ejemplo, el número 1 es tratado como true y el 0 como false


#### La lógica descrita arriba es algo clásica. Ahora, mostremos las características “extra” de JavaScript.

```js
  result = value1 || value2 || value3;
```

- El operador OR(||) realiza lo siguiente:
  - Evalúa los operandos de izquierda a derecha.
  - Para cada operando, [convierte el valor a booleano](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR). Si el resultado es true, se detiene y retorna el valor original de ese operando.
  - Si todos los operandos han sido evaluados (todos eran false), retorna el ultimo operando.

- En otras palabras, una cadena de OR "||" devuelve el primer valor verdadero o el último si ningún verdadero es encontrado.
  
```js
alert(null || 1); // 1 (1 es el primer valor verdadero)
alert(null || 0 || 1); // 1 (el primer valor verdadero)

```

#### Entonces con esto se puede:
#### Obtener el primer valor verdadero de una lista de variables o expresiones.
```js
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder

```
#### Evaluación de cortocircuito
- Otra característica del operador OR || es la llamada “evaluación de cortocircuito".
- Significa que || procesa sus argumentos hasta que se alcanza el primer valor verdadero, y luego el valor se devuelve inmediatamente, sin siquiera tocar el otro argumento.

```js
true || alert("not printed");
false || alert("printed");

```
:::tip Observación
- En la primera linea , como el primer argumento es true se deja de procesar los siguientes argumentos y retorna true.
- Solo se ejecuta el alert de la segunda línea.


:::


## && (AND)
- Se representa con dos símbolos de uníon (&&)

```js
Argumento A && Argumento B  
```
- Puede tener más de 2 argumentos.

```js
Argumento A && Argumento B && Argumento C && …
```
- En la programación clásica, AND devuelve true si ambos operandos son verdaderos y false en caso contrario
```js
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false

```
- Si un operando no es un booleano, se lo convierte a booleano para la evaluación.
- Por ejemplo, el número 1 es tratado como true y el 0 como false

#### La lógica descrita arriba es algo clásica. Ahora, mostremos las características “extra” de JavaScript.
```js
result = value1 && value2 && value3;
```
- El operador AND(&&) hace lo siguiente:
  -	Evalúa operandos de izquierda a derecha.
  - Para cada operando, [lo convierte en un valor booleano](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND) . Si el resultado es false, se detiene y devuelve el valor original de ese operando.
  -	Si todos los operandos han sido evaluados (es decir, todos fueron verdaderos), devuelve el último operando.
- En otras palabras, AND devuelve el primer valor falso o el último valor si no se encuentra ninguno.
- Las reglas anteriores son similares a OR. La diferencia es que AND devuelve el primer valor falso mientras que OR devuelve el primer valor verdadero.

```js
alert( 1 && 2 && null && 3 ); // null
```

#### La prioridad de AND (&&) es mayor que OR (||)
- La precedencia del operador AND && es mayor que OR ||.
- Entonces, el código "a && b || c && d"  es esencialmente el mismo que si las && expresiones estuvieran entre paréntesis: "(a && b) || (c && d)".

#### Evaluación de cortocircuito
- Tambien tiene la característica evaluación de cortocircuito.
- Significa que || procesa sus argumentos hasta que se alcanza el primer valor false, y luego el valor se devuelve inmediatamente, sin siquiera tocar el otro argumento.
  

#### [Todos los operadores, expresiones y palabras clave del lenguaje JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators).



## String() Constructor
- El constructor de String, se utiliza para crear un nuevo String.
- Lo que recibe, se convierte en String
- Sintaxis:
```js
new String(algo)
String(algo)

```

:::tip Observación
- Ese “algo” se convierte en String.
- Cuando String se llama como constructor (con new), crea un objeto  String, que no es un primitivo.
- Cuando String se llama como una función, fuerza el parámetro a una cadena primitiva. Los valores de los símbolos se convertirían a "Symbol(description)", donde description  es la descripción del símbolo.
:::

```js
 const cadenaDeTextoObjeto = new String("Texto");
      const cadenaDeTextoObjetoPrimitiva = String("Texto");
      console.log("cadenaDeTextoObjeto", cadenaDeTextoObjeto);
      console.log("cadenaDeTextoObjetoPrimitiva", cadenaDeTextoObjetoPrimitiva);

```

:::tip info
- [String() constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/String#syntax)

:::


## Math
- Math es un objeto que tiene propiedades y métodos para constantes y funciones matemáticas.
- Funciona con el tipo [Number](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number).
- A diferencia de los demás objetos globales, el objeto Math no se puede editar. Todas las propiedades y métodos de Math son estáticos. 
- Usted se puede referir a la constante pi como Math.PI y puede llamar a la función seno como Math.sin(x), donde x es el argumento del método.
-  Las constantes se definen con la precisión completa de los números reales en JavaScript.
- [Listado de métodos y Propiedades](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math )


```js
 // Devuelve el valor del número dado redondeado al entero más cercano.
     const numero = Math.round(35.6)
     alert(numero);

```

## Null
- El valor null representa intencionalmente un valor nulo o "vacío". 
- Es uno de los valores primitivos de Javascript.
- No es una propiedad del objeto global.
- [Más info](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/null)


## Comprobar si existe un valor
- Cualquier valor puede ser convertido a un booleano.
- Entonces los siguientes valores son false:
   -	0
   -	-0
   -	Null
   -	False
   -	Nan
   -	Undefined
   -	String vacio
- Todos los demás valores, son true.
- Esta “conversión” de cualquier valor a booleano, la realiza javascript por atrás en cualquier operación lógica, como if else ,  while , etc. 
- Entonces podemos utilizar esto, para comprobar si una variable tiene valor.


```js
    const nombre = "";
      if (nombre) {
        alert("Existe");
      } else {
        alert("No existe");
      }

```
:::tip Observación
- Javascript realiza la “conversión” por atrás y convierte nombre a un valor booleano
- Como es un String vacio , se convierte a false.
- Javascript utiliza el [Constructor Boolean](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Boolean) para convertir un valor a booleano.
- No confundas los valores del Boolean primitivo, true y false con los valores true y false del objeto Boolean.
:::



## Objeto global
- En javascript, siempre hay un objeto global definido.
- Cuando ejecutamos alguna función, pero nunca la definimos o importamos, es porque esa “función” viene del objeto global.

#### Ejemplo Fetch
```js
const url = "https://pokeapi.co/api/v2/pokemon/";

fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));

```
:::tip Observación
- El método fetch() nunca lo importamos ,  viene de un objeto global.
- Al ser global, todos sus métodos y propiedades son accesibles. 
- Entonces podemos invocar todas las propiedades y métodos del objeto global sin acceder a este.
:::

- Igualmente es buena práctica especificar de “de donde viene” el método o propiedad a usar:

```js
globalThis.fetch(url)
```

:::tip
- [Podemos usar el “this” para saber que objeto global es ](https://fedeleva.github.io/documentacion/docs/Javascript/objeto#contexto-global)
:::

####  Contexto de ejecución
- Este objeto global cambia dependiendo del contexto de ejecución:
   -	En un navegador , el objeto global es el objeto Window.
   -	El código que se ejecuta en Worker , el objeto global es el objeto WorkerGlobalScope
   -	Los scripts que se ejecutan en Node.js tienen un objeto llamado global como su objeto global.
- La propiedad (viene del objeto global) “globalThis” te permite acceder al objeto global independientemente del entorno (contexto de ejecución).




## History
- El objeto “Window” proporciona acceso al historial del navegador a través del objeto history.
```js
 console.log(this.history)
```
- Este objeto da acceso a métodos y propiedades que permiten avanzar y retroceder a través del usuario, así como manipular el contenido del historial.

#### Moverte hacia atrás
```js
const history = this.history
     history.back()

```
:::tip Observación
Esto actuará exactamente como si el usuario hiciera clic en el botón "atrás" en la barra de herramientas del navegador.

:::

#### Moverte hacia adelante
```js
 const history = this.history
     history.forward()

```

:::tip Observación
Actuaría como si el usuario hiciera clic en en el botón "adelante".

:::

#### Moverse a un punto especifico del historial

```js
     const history = this.history
     history.go(1)

```
:::tip Observación
- Le estas diciendo que mueva una página hacia adelante.
:::

- De manera similar, puedes avanzar 2 páginas pasando 2 y así sucesivamente.
- Otro uso para go() es el de actualizar la página ya sea pasando 0  o “nada” como parámetro.


#### Obtener el número de páginas.
- Puedes obtener el número de páginas en la pila del historial consultando el valor de la propiedad length.

```js
    const history = this.history
     console.log(window.history.length)

```

#### pushState
- Es un método introducido por HTML5.
- Añade una entrada al historial sin modificar la url actual.
- [Trabaja en conjunto con el evento window.onpopstate ](https://developer.mozilla.org/en-US/docs/Web/API/Window/popstate_event)


:::tip Evento popstate
Un evento popstate es dirigido a la ventana cada vez que la entrada al historial cambia. Si la entrada al historial es activada y fue creada por un llamado a pushState o afectada por una llamada a replaceState, la propiedad state del evento popstate contiene una copia del historial de entradas del objeto estado.
:::


##### Ejemplo
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <style>
    .boxes {
      display: flex;
    }

    .box {
      --box-color: black;
      width: 200px;
      height: 200px;
      margin: 20px;
      box-sizing: border-box;
      display: block;
      border-radius: 2px;
      cursor: pointer;
      color: white;
      background-color: var(--box-color);
      border: 5px solid var(--box-color);
      font-size: 30px;
      font-family: sans-serif;
      font-weight: bold;
      text-align: center;
      line-height: 200px;
      transition: all 0.2s ease-out;
    }

    .box:hover {
      background-color: transparent;
      color: black;
    }

    .box.selected {
      transform: scale(1.2);
    }

    #box-1 {
      --box-color: red;
    }

    #box-2 {
      --box-color: green;
    }

    #box-3 {
      --box-color: blue;
    }

    #box-4 {
      --box-color: black;
    }
  </style>
</head>

<body>
  <div class="boxes">
    <div class="box" id="box-1">Uno</div>
    <div class="box" id="box-2">Dos</div>
    <div class="box" id="box-3">Tres</div>
    <div class="box" id="box-4">Cuatro</div>
  </div>

  <script>
    const boxes = Array.from(document.getElementsByClassName("box"));
    const selectBox = (id) => {
      boxes.forEach((box) => {
        box.classList.toggle('selected', box.id === id)
      })
    };
    boxes.forEach((box) => {
      const id = box.id;
      box.addEventListener("click", (e) => {
        history.pushState({ id }, `Selected: ${id}`, `./selected=${id}`);
        selectBox(id);
      });
    });

    window.addEventListener('popstate', e => {
      if (e.state !== null) {
        selectBox(e.state.id)

      } else {
        selectBox(null)
      }
     
    })
  </script>
</body>

</html>

```
:::tip Observación
- Al hacer click en una caja, la “url” cambia pero el navegador no carga la página que se especificó en el tercer parámetro de pushState,  ni tampoco verifica que exista. 
- Al hacer click en una caja, se añade una nueva entrada al historial (con la url del tercer parámetro de pushState).
- Al hacer click en el “boton atrás”, se navegara hacia una de las “url” que se añadió al historial y se ejecutará el evento 'popstate' cuyo e.state es el valor del primer parámetro de pushState.
- Sin el evento 'popstate’ , al hacer click en el “boton atrás”  pasarían dos cosas:
   -	Si la “pagina” existe, se cargaría.
   -	Si la “pagina” no existe, se mostraría un error.
- Entonces el evento “'popstate” te permite “cargar/mostrar” una página que “no existe”, siempre y cuando esa página fue “añadida por pushState”.
- Conclusión:
   - Te permite gestionar una nueva página (URL) desde una URL (pagina) anterior.

:::

:::tip info
- [El método pushState()](https://developer.mozilla.org/es/docs/Web/API/History_API#el_m%C3%A9todo_pushstate)

:::

#### replaceState
- Es un método introducido por HTML5.
- [Trabaja en conjunto con el evento window.onpopstate ](https://developer.mozilla.org/en-US/docs/Web/API/Window/popstate_event)
- history.replaceState() trabaja exactamente igual a history.pushState() excepto que replaceState() modifica la entrada al historial actual en lugar de crear una nueva.
- replaceState() es particularmente útil si deseas actualizar el objeto estado o la URL de la actual entrada al historial en respuesta a alguna acción del usuario.

:::tip Evento popstate
Un evento popstate es dirigido a la ventana cada vez que la entrada al historial cambia. Si la entrada al historial es activada y fue creada por un llamado a pushState o afectada por una llamada a replaceState, la propiedad state del evento popstate contiene una copia del historial de entradas del objeto estado.
:::


:::tip Leyendo el estado actual
- [Puedes leer el estado del historial actual sin tener que esperar un evento popstate usando la propiedad history.state ](https://developer.mozilla.org/es/docs/Web/API/History_API#leyendo_el_estado_actual)

:::


##### Modificamos el ejemplo anterior para hacer este
```js
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <style>
    .boxes {
      display: flex;
    }

    .box {
      --box-color: black;
      width: 200px;
      height: 200px;
      margin: 20px;
      box-sizing: border-box;
      display: block;
      border-radius: 2px;
      cursor: pointer;
      color: white;
      background-color: var(--box-color);
      border: 5px solid var(--box-color);
      font-size: 30px;
      font-family: sans-serif;
      font-weight: bold;
      text-align: center;
      line-height: 200px;
      transition: all 0.2s ease-out;
    }

    .box:hover {
      background-color: transparent;
      color: black;
    }

    .box.selected {
      transform: scale(1.2);
    }

    #box-1 {
      --box-color: red;
    }

    #box-2 {
      --box-color: green;
    }

    #box-3 {
      --box-color: blue;
    }

    #box-4 {
      --box-color: black;
    }
  </style>
</head>

<body>
  <div class="boxes">
    <div class="box" id="box-1">Uno</div>
    <div class="box" id="box-2">Dos</div>
    <div class="box" id="box-3">Tres</div>
    <div class="box" id="box-4">Cuatro</div>
  </div>

  <script>
    const boxes = Array.from(document.getElementsByClassName("box"));
    const selectBox = (id) => {
      boxes.forEach((box) => {
        box.classList.toggle('selected', box.id === id)
      })
    };
    boxes.forEach((box) => {
      const id = box.id;
      box.addEventListener("click", (e) => {
        history.replaceState({ id }, `Selected: ${id}`, `./selected=${id}`);
        selectBox(id);
      });
    });

    window.addEventListener('popstate', e => {
      if (e.state !== null) {
        selectBox(e.state.id)

      } else {
        selectBox(null)
      }
     
    })
  </script>
</body>

</html>

```

:::tip info
- [El método replaceState()](https://developer.mozilla.org/es/docs/Web/API/History_API#el_m%C3%A9todo_replacestate)

:::

## Objeto
#### Propiedades abreviadas
- Considerando que tenemos los valores de nuestras propiedades guardadas en variables.

```js
  const nombre = "manzana";
      const categoria = "frutas";
      const precio = 1.99;
      const producto = {
        nombre: nombre,
        categoria: categoria,
        precio: precio,
      };

```
- JavaScript soporta lo que es llamado nombres de propiedad abreviados.
- Esto nos permite crear un objeto usando solamente el nombre de la variable. Esto nos permitirá crear una propiedad usando el mismo nombre (y el valor correspondiente de la variable). 
- El siguiente objeto literal es equivalente al previo.

```js
   const nombre = 'manzana';
    const categoria = 'frutas';
    const precio = 1.99;
    const producto = {
      nombre,
      categoria,
      precio
    }

```

:::tip info
- [JavaScript Crear Objeto  –  Cómo Definir Objetos en JS](https://www.freecodecamp.org/espanol/news/javascript-crear-objecto-como-definir-objetos-en-js/)
:::

## Null vs Undefined
- Ambos sirven para algo muy parecido, que es indicar la ausencia de valor.

#### Undefined
- Undefined es un valor que denota que no hay valor porque no se ha definido todavía
- Por otro lado, undefined significa que no hay ningún valor porque todavía no se ha establecido ningún valor. 
- Por ejemplo, si creas una variable y no le asignas un valor, entonces estará undefined.
- Donde esto se vuelve un poco confuso es el hecho de que se puede establecer una variable con valor  undefined.
- Una razón por la cual querrías hacer esto es esencialmente restablecer o resetear una variable. Al establecer una variable en undefined, se está transmitiendo el mensaje de que la variable ya no contiene información útil, mientras que si el valor es null, se está diciendo específicamente que el resultado de alguna acción no tiene valor.

#### Null
- null se usa para indicar que no hay valor porque así lo hemos querido indicar expresamente. 
- Si una variable es null, significa que la variable no tiene valor y que el programador la estableció explícitamente para que no tuviera valor. 
- Una variable nunca será null a menos que en algún lugar del código un programador establezca una variable en null.
- Es importante saber esto, ya que cuando veas un valor null , sabrás que el programador que escribió ese código te está diciendo que no hay ningún valor explícitamente. 
- Un gran ejemplo de donde null es útil es algo así como una función de búsqueda que consulta una base de datos en busca de una entrada. Si no existe ninguna entrada, tiene más sentido devolver null ya que se está indicando que no se ha encontrado ningún valor.


#### Diferencia 1
```js
    var miVariable;
    console.log(miVariable);

```
- Una variable declarada pero que aun no se ha definido su valor , es undefined
- Sin embargo, imagina que ya has utilizado una determinada variable y no quieres utilizarla más, o que tienes asignada una referencia a un objeto pero ya no lo necesitas o que, directamente, quieres tener la variable declarada pero inicializarla con un valor que todavía no sabes qué va a ser exactamente. En todos estos casos lo suyo es asignarle un valor nulo


```js
   var miVariable = null;
    console.log(miVariable);

```

#### Diferencia 2
- Aunque representan el mismo “valor” , son diferente tipos de datos.


```js
    var miVariable = null;
    var miVariable2 = undefined;
    console.log(miVariable == miVariable2 );
    console.log(miVariable === miVariable2 );

```
- [El propio estándar Ecmascript define como debe hacerse ](https://262.ecma-international.org/5.1/#sec-11.9.3)


#### Diferencia 3
- Puedes asignar explícitamente el valor undefined a una variable para dejarla sin inicializar.

```js
   var miVariable = 1;
    miVariable = undefined
    console.log(miVariable);

```

- Por lo tanto es una asignación válida de JavaScript, no puedes utilizar esta asignación en JSON porque te daría un error al procesarlo
- Según el estándar de JSON solo soporta estos valores:
   -	Objeto
   -	Array
   -	Numero
   -	String
   -	True
   -	False
   -	null

#### Diferencia 4
- Si intentas usar undefined en una operación matemática, te devolverá un NaN (algo que no es un número), ya que no es un número ni hay una conversión implícita:

```js
    var miVariable = undefined;
    console.log(miVariable + 1);

```
- Sin embargo, si haces lo mismo con null, sorprendentemente funciona ya que null se considera un 0 en las operaciones matemáticas:

```js
    var miVariable = null;
    console.log(miVariable + 1);

```
#### Diferencia 5

- Finalmente, puedes averiguar si un valor está sin definir con typeof, que devolverá la cadena "undefined" ya que, es un tipo  primitivo.
- Sin embargo, en el caso de null, typeof devolverá "Object" ya que lo considera un objeto sin inicializar


```js
var miVariable = null;
    var miVariable2 = undefined;
    console.log(typeof miVariable  );
    console.log( typeof miVariable2 );

```

#### Similitudes
- Ambos valores son valores de tipo "false", es decir, que actúan como false en las  operaciones booleanas.


:::tip info
- [¿Qué diferencias existen entre null y undefined en JavaScript?](https://www.jasoft.org/Blog/post/que-diferencias-existen-entre-null-y-undefined-en-javascript)
- [¿Cuál es la diferencia entre Null y Undefined en JavaScript?](https://lasfi.to/blog/js-undefined-vs-null/)
:::

## Instanceof
- En JavaScript, instanceof es un operador que se utiliza para verificar si un objeto es una instancia de una clase o función constructora específica. Devuelve true si el objeto es una instancia de la clase o función constructora y false en caso contrario.
- Aquí hay un ejemplo de cómo usar instanceof en JavaScript:


```js
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

const miAnimal = new Animal('Fido');

console.log(miAnimal instanceof Animal); // true
console.log(miAnimal instanceof Object); // true
console.log(miAnimal instanceof Array); // false
```

:::tip Observación
- En el ejemplo anterior, definimos una clase llamada Animal con un constructor que toma un parámetro nombre. Luego creamos una nueva instancia de la clase Animal y la asignamos a la variable miAnimal.
- Luego usamos el operador instanceof para verificar si miAnimal es una instancia de la clase Animal, la clase Object (que es la clase base para todos los objetos en JavaScript) y la clase Array. Las dos primeras pruebas devuelven true, mientras que la tercera prueba devuelve false.
:::

- Tenga en cuenta que el operador instanceof verifica la cadena de prototipos de un objeto para determinar si es una instancia de una clase o función constructora específica. Esto significa que también se puede usar para probar relaciones de herencia entre clases. Por ejemplo:

```js
class Mamífero extends Animal {
  constructor(nombre, especie) {
    super(nombre);
    this.especie = especie;
  }
}

const miMamifero = new Mamífero('Fido', 'Perro');

console.log(miMamifero instanceof Mamífero); // true
console.log(miMamifero instanceof Animal); // true
console.log(miMamifero instanceof Object); // true
console.log(miMamifero instanceof Array); // false

```

:::tip Observación
- En el ejemplo anterior, definimos una clase llamada Mamífero que hereda de la clase Animal utilizando la palabra clave extends. Luego creamos una nueva instancia de la clase Mamífero y la asignamos a la variable miMamifero.
- Luego usamos el operador instanceof para verificar si miMamifero es una instancia de la clase Mamífero, la clase Animal, la clase Object y la clase Array. Las tres primeras pruebas devuelven true, mientras que la cuarta prueba devuelve false. Esto demuestra que miMamifero es una instancia de la clase Mamífero, que a su vez es una instancia de la clase Animal, que a su vez es un objeto de JavaScript.

:::