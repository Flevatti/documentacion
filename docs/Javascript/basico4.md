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
- `this` hace referencia al objeto (contexto) desde el que se está ejecutando una función.
- [This](./objeto.md#this)
:::
- Sirve para cambiar el valor que tendrá `this` dentro de una función.
- Recibe un objeto como primer parámetro.
- Ese objeto se asignará a `this` dentro de la función.
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
- `saludar.call(obj)` ejecuta la función `saludar`, pero el `this` que utiliza esa función tendrá el valor de `obj` (el objeto que pasamos como primer parámetro).
- Dentro de la función `saludar`, `this` hace referencia al objeto `obj`.
- En otras palabras, `call()` hace que `this` tome el valor del objeto pasado como primer parámetro mientras se ejecuta la función.
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
- Funciona igual que `call()`.
- Sirve para cambiar el valor que tendrá `this` dentro de una función.
- Recibe un objeto como primer parámetro.
- Ese objeto se asignará a `this` dentro de la función.

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
- Además de recibir un objeto como primer parámetro, puede recibir un array como segundo parámetro.
- Cada elemento del array se utilizará como un argumento de la función que se va a ejecutar.
  - `array[0]` → Primer parámetro de la función.
  - `array[1]` → Segundo parámetro de la función.
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
- Hace lo mismo que `call()` y `apply()`, pero no ejecuta la función inmediatamente.
- Recibe un objeto como parámetro.
- Cambia el valor que tendrá `this` dentro de la función.
- Devuelve una nueva función que tendrá ese `this` modificado.
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
- `'use strict';` es una expresión literal (`String`) que le indica al motor de JavaScript que el código debe ejecutarse en modo estricto.
- No es una declaración como `var` o `let`; simplemente es una cadena de texto que activa reglas más estrictas (establecen lo que está permitido y lo que no) para escribir y ejecutar código JavaScript.
- El modo estricto tiene como propósito ayudarte a escribir JavaScript más seguro y confiable. Cambia ciertas "malas prácticas" o comportamientos permisivos del lenguaje en errores que te advierten de problemas potenciales en el código. Esto mejora la calidad del código y reduce errores difíciles de encontrar.
El modo estricto es como una versión básica y nativa de ESLint, diseñada para evitar ciertos errores comunes de JavaScript. Sin embargo, ESLint es mucho más completo y flexible, ya que no solo detecta problemas sino que también puede guiarte hacia mejores prácticas de estilo y estructura en tu código. Idealmente, deberías usar ambos: use strict para evitar errores comunes de JavaScript, y ESLint como herramienta avanzada para mejorar la calidad del código.
- Con el modo estricto, no se puede:
  -	Usar variables/objetos no declarados
  -	Eliminar una variable/objeto/función
  -	Duplicar el nombre de un parámetro
  -	Y mucho mas
#### ¿Por qué usar el modo estricto?
- El modo estricto facilita la escritura de código JavaScript más seguro y menos propenso a errores. Corrige comportamientos problemáticos del lenguaje y hace que los errores sean evidentes durante el desarrollo.

#### Ventajas
1.	Previene errores comunes:
  -	Evita la creación accidental de variables globales.
  -	Detecta asignaciones inválidas a propiedades no modificables o inexistentes.
  -	Evita la “mala sintaxis”
2.	Mejora la compatibilidad futura:
  -	Prohíbe el uso de palabras reservadas que podrían usarse en versiones futuras de JavaScript.
3.	Mayor seguridad y control:
  -	Ayuda a identificar errores que podrían ser difíciles de depurar.

#### Según donde este ubicado la sintaxis, tiene un alcance global o local.
- Según donde este la expresión literal (String), puede tener un alcance global (afectar a todo el código) o un alcance local (afecta solo al bloque).

##### A nivel global
- Coloca 'use strict'; al principio de un archivo o script. Todo el archivo se ejecutará en modo estricto.
- Ejemplo:

```js
'use strict';
x = 10; // Error: x no está declarado
console.log(x);

```
##### A nivel de función
- Coloca 'use strict'; al inicio de una función o bloque para que solo esa función/bloque use el modo estricto.
- Ejemplo:
```js
function strictFunction() {
  'use strict';
  y = 20; // Error: y no está declarado
}

strictFunction();

```

#### Reglas que se aplican en el modo estricto son
##### No se pueden usar variables no declaradas
- En JavaScript normal, asignar un valor a una variable no declarada (no se especifica si es var, const o let) crea una variable global (var) automáticamente:
```js
x = 10; // Esto funciona en modo normal.
console.log(x);

```

- En modo estricto:
```js
'use strict';
x = 10; // Error: "x" no está declarada
console.log(x);

```
##### No se puede eliminar variables o funciones
- El modo normal permite intentar eliminar variables o funciones, aunque no tenga efecto:
```js
var y = 5;
delete y; // No hace nada en modo normal.

```
:::tip Observación
- En JavaScript normal, las variables y funciones declaradas con var (o con una declaración explícita como function) están marcadas como no configurables. Esto significa que no se pueden eliminar, pero el intento de hacerlo no genera un error.
- Cuando algo es “no configurable” no puede ser modificado después de que ha sido definido. Esta configuración se define a través de la propiedad configurable en el descriptor de la propiedad.
- A diferencia de las variables, las propiedades de un objeto sí pueden eliminarse si son configurables.

:::
- En modo estricto:
```js
'use strict';
var y = 5;
delete y; // Error: No se pueden eliminar variables declaradas

```
##### No se permite duplicar parámetros de funciones
- En modo normal, puedes definir una función con nombres de parámetros repetidos, aunque puede causar errores:
```js
function suma(a, a) { return a + a; } // Permitido en modo normal.
```
- En modo estricto:
```js
'use strict';
function suma(a, a) { return a + a; } // Error: Parámetros duplicados no permitidos.

```
##### Prohíbe asignaciones inválidas
- En JavaScript normal, intentar asignar valores a propiedades no modificables o inexistentes simplemente falla silenciosamente:
```js
const obj = {};
Object.defineProperty(obj, 'x', { value: 42, writable: false });
obj.x = 10; // No hace nada, pero no muestra error.

```
- En modo estricto:
```js
'use strict';
const obj = {};
Object.defineProperty(obj, 'x', { value: 42, writable: false });
obj.x = 10; // Error: No se puede modificar una propiedad no escribible.

```



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
- [guia](./poo.md#private-class-fields)
:::
## Debugger Chrome
#### Paso 1: Reproducir el error
- Encontrar una serie de acciones que reproduzcan un error de manera consistente es siempre el primer paso para la depuración.
#### Paso 2: Familiarícese con la DevTools
- DevTools (incluido en Chrome y otros navegadores) proporciona muchas herramientas para diferentes tareas, como cambiar CSS, analizar el rendimiento de carga de la página y monitorear las solicitudes de red. El panel **Sources** es donde se depura JavaScript.
- La pestaña **Sources** está dividida en tres partes:
  - **Panel Navegador de archivos:** Permite navegar entre los archivos de la página. Aquí se muestran todos los archivos que la página ha solicitado.
  - **Panel Editor de código:** Al seleccionar un archivo en el panel Navegador de archivos, su contenido se muestra aquí.
  - **Panel de depuración de JavaScript:** Contiene las herramientas necesarias para inspeccionar y depurar el código JavaScript de la página.
#### Paso 3: Pausar el código con un punto de interrupción
- En lugar de usar `console.log()` para ver el estado del código, podemos utilizar puntos de interrupción (*breakpoints*).
- Un punto de interrupción permite pausar la ejecución del código en un momento determinado para inspeccionar el estado de la aplicación.
:::tip Diferencias con `console.log()`
- Con `console.log()`, debemos modificar el código, agregar los mensajes y volver a cargar la página para ver los resultados.
- Con un punto de interrupción, simplemente pausamos la ejecución del código en el lugar que nos interesa, sin modificar el código.
- Con `console.log()`, debemos indicar qué valores queremos mostrar.
- Con un punto de interrupción, DevTools muestra automáticamente el valor de todas las variables disponibles en ese momento.
- En resumen, los puntos de interrupción permiten encontrar y corregir errores de forma más rápida y cómoda que utilizando `console.log()`.
:::
:::tip ¿Cómo pausar el código cuando se ejecuta un evento?
- En el panel de depuración encontrarás la opción **Event Listener Breakpoints** (Interrupciones del objeto de escucha de eventos).
- Marca el evento sobre el que quieras detener la ejecución.
- A partir de ese momento, cuando ese evento se dispare, DevTools pausará automáticamente la ejecución del código.
- [Existen diferentes tipos de interrupciones que permiten pausar el código en distintas situaciones.](https://developer.chrome.com/docs/devtools/javascript/breakpoints/)
:::
#### Paso 4: Recorrer el código
- Una causa común de errores es que el código no se ejecute en el orden esperado.
- Permite ejecutar el código línea por línea para ver qué ocurre en cada momento y detectar dónde se produce un comportamiento diferente al esperado.
#### Paso 5: Establezca un punto de interrupción de línea de código
- Los puntos de interrupción de línea de código son el tipo más común de punto de interrupción. Cuando tenga una línea de código específica en la que desee hacer una pausa, use un punto de interrupción de línea de código.
#### Paso 6: Verifique los valores de las variables
- DevTools proporciona muchas herramientas para examinar valores de variables.
#### Método 1: El panel Alcance
- Cuando está en pausa en una línea de código, el panel **Alcance** muestra las variables locales y globales disponibles en ese momento junto con el valor de cada una. También muestra las variables de cierre, que son variables que la función utiliza pero que no están definidas dentro de ella.
- Podemos hacer doble clic en el valor de una variable para editarlo. Cuando no está en pausa en una línea de código, el panel **Alcance** está vacío.
#### Método 2: Ver expresiones
- La pestaña **Watch Expressions** (Supervisión) permite observar el valor de variables y expresiones mientras se ejecuta el código.
- Como su nombre indica, no se limita únicamente a variables; también permite observar cualquier expresión válida de JavaScript.
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
- En la programación clásica, AND devuelve true si ambos argumentos son verdaderos y false en caso contrario
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
- Cuando usamos varios operadores, JavaScript los evalúa siguiendo un orden de prioridad.
- El operador AND (`&&`) se evalúa antes que el operador OR (`||`).
- Por eso, `a && b || c && d` es igual a escribir `(a && b) || (c && d)`.

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
- Ese “algo” se convierte en un `String`.
- Cuando `String` se llama como constructor (con `new`), crea un objeto `String`, que no es un valor primitivo.
- Cuando `String()` se utiliza como función, devuelve un `String` primitivo.
- Si ese valor es un `Symbol`, se convierte a un texto con el formato `"Symbol(description)"`, donde `description` es la descripción del símbolo.
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
- `Math` es un objeto que contiene propiedades y métodos relacionados con operaciones y constantes matemáticas.
- Trabaja con valores del tipo [`Number`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number).
- A diferencia de otros objetos globales, `Math` no puede ser modificado. Todas sus propiedades y métodos son estáticos.
- Podemos acceder a constantes como `Math.PI` y utilizar métodos matemáticos como `Math.sin(x)`.
- Las constantes de `Math` tienen la mayor precisión disponible en JavaScript. Es decir, JavaScript guarda estos valores con la mayor exactitud posible.
- [Listado de métodos y propiedades](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math)


```js
// Redondea el número dado al entero más cercano.
     const numero = Math.round(35.6)
     alert(numero);

```

## Null
- El valor `null` representa la ausencia intencional de un valor, es decir, indica que una variable no contiene ningún valor.
- Es uno de los valores primitivos de JavaScript.
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
- No confundas los valores primitivos `true` y `false` con los objetos creados mediante el constructor `Boolean`.
:::



## Objeto global
- En JavaScript siempre existe un objeto global definido.
- Cuando utilizamos una función sin haberla definido ni importado, generalmente significa que pertenece al objeto global.

#### Ejemplo Fetch
```js
const url = "https://pokeapi.co/api/v2/pokemon/";

fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));

```
:::tip Observación
- El método `fetch()` no necesita ser importado porque pertenece al objeto global del navegador.
- Al ser un método del objeto global, podemos utilizarlo directamente sin acceder al objeto que lo contiene.
- Es decir, podemos llamar a `fetch()` en lugar de escribir `window.fetch()`.
:::

- Igualmente es buena práctica especificar de “de donde viene” el método o propiedad que vamos a usar:

```js
globalThis.fetch(url)
```

:::tip
- `globalThis` contiene una referencia al objeto global del entorno donde se ejecuta el código.
- Podemos utilizar `globalThis` para acceder al objeto global sin importar el entorno (navegador, Node.js, etc.).
- También podemos usar `this` para conocer cuál es el objeto global en determinados contextos.
- [Más información sobre `this`](https://flevatti.github.io/documentacion/docs/Javascript/objeto#contexto-global)
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
- Este objeto permite utilizar métodos y propiedades para navegar entre las páginas visitadas y modificar el historial del navegador.

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
- `history.go(1)` busca la página siguiente a la actual en el historial y nos dirige a ella.
- `history.go(x)` busca la página que se encuentra `x` posiciones adelante o atrás de la actual en el historial y nos dirige a ella. Por ejemplo:
  - `history.go(2)` busca la página que se encuentra dos posiciones adelante de la actual en el historial y nos dirige a ella. Es como hacer clic dos veces en el botón "adelante".
  - `history.go(-1)` busca la página que se encuentra una posición atrás de la actual en el historial y nos dirige a ella. Es como hacer clic una vez en el botón "atrás".
- También podemos recargar la página pasando `0` o sin enviar ningún parámetro.
- El número indica cuántas veces hacemos clic en el botón "adelante" (número positivo) o "atrás" (número negativo).
:::


#### Obtener el número de páginas.
- Puedes obtener el número de páginas en la pila del historial consultando el valor de la propiedad length.

```js
    const history = this.history
     console.log(window.history.length)

```

#### pushState
- Es un método introducido por HTML5.
- Añade una nueva entrada (página) en el historial del navegador y modifica la URL actual sin recargar la página.
- Permite modificar el historial, y los cambios realizados en este pueden ser detectados mediante el evento [`window.onpopstate`](https://developer.mozilla.org/en-US/docs/Web/API/Window/popstate_event).

:::tip Evento `popstate`
- El evento `popstate` se ejecuta cuando cambiamos de página usando el historial del navegador.
- Ocurre, por ejemplo, cuando usamos los botones "atrás" o "adelante", o métodos como `history.back()`, `history.forward()` o `history.go()`.
- Si usamos `pushState()` o `replaceState()` para guardar información en el historial, esa información estará disponible en la propiedad `state` del evento `popstate`.
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
- Supongamos que estamos en `index.html`.
- Al hacer click en una caja, la URL cambia por la especificada en el tercer parámetro de `pushState()`, pero el navegador no carga esa nueva URL ni verifica si existe.
- Al mismo tiempo, se añade una nueva entrada (página) al historial con la URL indicada en el tercer parámetro de `pushState()`.
- Al hacer click en el botón "atrás", el navegador retrocede una página en el historial, por lo que la URL vuelve a mostrar `index.html` (aunque no lo parezca, no estamos en la última entrada porque `pushState()` creó una nueva entrada después de esta).
- Si luego hacemos click en el botón "adelante", iremos nuevamente a la URL que creamos con `pushState()`.
- El primer parámetro de `pushState()` contiene un objeto con información de la página que estamos agregando al historial. Esta información queda guardada en la entrada que se agregó al historial y podemos obtenerla cuando se ejecuta el evento `popstate` mediante la propiedad `state`.
- El evento `popstate` se activa cuando cambiamos el historial del navegador y el objeto evento contiene información de la nueva entrada (página) que muestra el navegador. Dentro de este objeto podemos acceder a la información que se guardó con `pushState()` a través de la propiedad `state`.
- Sin el evento `popstate`, al volver atrás o adelante en el historial, la URL cambiaría, pero la interfaz no se actualizaría.
- El evento `popstate` permite detectar ese cambio y mostrar el contenido correspondiente a la nueva URL.
- Conclusión:
  - `pushState()` permite crear nuevas rutas dentro de una aplicación y `popstate` permite controlar qué mostrar cuando el usuario navega por esas rutas.
  - Al movernos por el historial usando los botones "atrás" o "adelante", el navegador va a la entrada correspondiente del historial:
    - Si esa entrada corresponde a una página previamente cargada, el navegador carga esa página.
    - Si esa entrada fue creada mediante `pushState()` o `replaceState()`, el navegador cambia la URL pero no refresca ni carga una nueva página; además, se activa el evento `popstate`.
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