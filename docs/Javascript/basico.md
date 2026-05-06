---
sidebar_position: 1
---
# JavaScript Basico

## Como agregamos js?

``` html
   <script>
        codigo js
    </script>
```
La etiqueta html script es para ingresar codigo javascript.

### 1- En el head

``` html
 <!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        alert('jugando con JS')
    </script>
</head>

<body>
    <h1>Jugando con JS</h1>
</body>

</html>

```

:::warning
No recomendado , ensuciamos javascript y html
:::

  ### 2- Mezclado
  Es con un atributo que representa un evento (en este ejemplo "onclick" ) y una funcion javascript (en este ejemplo saludar)
```html

<body>
    <h1>Jugando con JS</h1>
    <button onclick="saludar()">Dame click</button>
    <script>
        function saludar() {
            alert('Hola soy un saludo')
        }
    </script>
</body>


```
:::warning
No hagas esto 👇👇👇, es una mala práctica contaminar tu HTML con JavaScript 🤦‍♂️.
:::

### 3- Archivo externo
Se utiliza el atributo src para especificar la ubicacion del archivo js
``` html
  <script src="ubicacion/del/archivo"></script>
```
#### Archivo Js


 La extensión es js , respetando:
* No utilizar espacios, en su lugar reemplazar con _ , - o camelCase 
* Utilizar lengua inglesa, sin ñ ni tildes
* Evitar signos extraños como @#][+{}, etc.

``` html
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>Jugando con JS</h1>
    <button onclick="saludar()">Dame click</button>

    <script src="js/app.js"></script>
</body>

</html>

```
## Comentarios
Es para documentar nuestro codigo , no se ejecuta


``` js
// soy un comentario

/*
  Yo también soy
  un comentario
*/

```
## Palabras reservadas
- En JavaScript, las palabras reservadas son palabras que el lenguaje ya utiliza internamente para su funcionamiento, por lo que no pueden usarse como nombres de variables, funciones, etc.
- [Algunas palabras reservadas](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Lexical_grammar#palabras_clave)
- alert es una palabra reservada.

## Consola
- Si abrimos el inspector de elementos del navegador, podemos encontrar una pestaña llamada Consola.
- La consola del navegador es una herramienta que nos ayuda a depurar (debuggear o probar) nuestras páginas web, mostrando mensajes, errores y datos útiles durante el desarrollo.
- Para mostrar mensajes en la consola se usa:
```js
 console.log(“mensaje”); 
```
- Ejemplo:
```js
console.log("hola esta es la consola 👌");
```

:::warning
Windows + punto = Para poner iconos.
:::

## Tipos de datos

Javascript tiene 9 tipos de datos (Lo define el ECMAScript)

:::tip ECMAScript 🤷‍♂️
- ECMAScript es el conjunto de reglas que define cómo debe funcionar JavaScript.
- Gracias a esas reglas, los navegadores pueden interpretar y ejecutar el código JavaScript de forma correcta y uniforme.
- Fue desarrollada en 1996 y está basada en JavaScript, con el objetivo de estandarizar su funcionamiento.
- Fue propuesta como estándar por Netscape Communications Corporation y actualmente es el estándar de JavaScript.
- Es publicada por ECMA International.
:::





- String: se utiliza para representar datos textuales. 
- Number: valores numéricos.
- Boolean: representa una entidad lógica y puede tener dos valores: true y false.

```js
console.log("un valor de tipo texto");	
//Numero entero
console.log(20);
//Numero decimal
console.log(1.2);
//No es un numero decimal , se interpreta como parámetros de una funcion
console.log(1, 62);
//Operación con valores numericos
console.log(1 + 1);
//Booleano
console.log(true);
console.log(false);

```

:::warning
  “String” Es lo mismo que  ‘String’  
:::

:::warning
; = Finaliza una instruccion – Puede estar o puede que no (Lo interpreta el lenguaje).
:::


:::tip Info
- [Estos son los objetos base que representan números, fechas y cálculos matemáticos (Buscar números y fechas)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects#n%C3%BAmeros_y_fechas)
- [Estos objetos representan cadenas y permite manipularlos (Buscar Procesamiento de texto)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects#procesamiento_de_texto )
- [Un listado con todos los tipos de datos, valores, etc.](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects )

:::

:::warning
Por defecto , Javascript se encarga de hacer las conversaciones , pero hay muchos tipos de datos.

:::
## Variable
-	En programación una variable es un espacio de memoria el cual nos servirá para almacenar un tipo de dato con un valor correspondiente.
-	Imagina como una caja que guarda un tipo de dato/valor.


 JavaScript tiene tres tipos de declaraciones de variables.
  1.	var
  2.	let
  3.	const


- Sintaxis: var/let/const nombreVariable = valor
- Las variables son espacios donde se puede guardar información y asociarla a un determinado nombre.
- De esta forma, cada vez que se consulte ese nombre posteriormente, te devolverá la información que contiene. 
- La primera vez que se realiza este paso se suele llamar inicializar una variable.
```js
let x = 10
let y = false
let z = x
let n = 'Juanito'
```

```js
 let x = 10;
let y = 20;
let resultado = x * y;
console.log(resultado);
```

### operador =

En JS el signo = se conoce como Operador de asignación simple
Asignación

El signo = en Javascript se conoce como asignación (permite almacenar un valor a una variable).

Se evalúa la expresión de la derecha y luego se le asigna el resultado a la variable de la izquierda.

A esto se le llama declarar la variable con un valor inicial.

```js

tipovariable nombre = valor;

```

#### reglas para el nombre de sus variables:
- No utilizar espacios, en su lugar reemplazar con _ o camelCase (opens new window)🐫
- Utilizar lengua inglesa, sin ñ ni tildes (en teoría se puede pero es una mala práctica)
- Evitar signos extraños como @#][+{}- etc.
- El primer carácter no puede ser un número var 2res = 'algo'
- Se puede utilizar el signo $ ej: var $anio = 2021; (Evitar para evitar conflictos con jquery).
- Debe ser descriptiva

:::tip info
- [Variables](https://lenguajejs.com/javascript/fundamentos/variables/#:~:text=En%20Javascript%2C%20si%20una%20variable,no%20le%20asociamos%20ning%C3%BAn%20contenido)

:::

## Concatenacion

- La concatenación es una forma elegante de decir “unir".
- En JavaScript, se utiliza el símbolo `+` para unir cadenas de texto (strings). Es el mismo símbolo que se usa para sumar números, pero cuando se aplica a textos, su función es combinar palabras o frases.
- Podemos probarlo en la consola:
```js
var one = "Hello, ";
var two = "how are you?";
var joined = one + two;
console.log(joined);
```


```js
console.log("Su nombre es: " + nombreUsuario + " y su edad es: " + edad);
console.log(“mi nombre es: ” + nombreUsuario + edad);
console.log(“mi nombre es: ” + nombreUsuario +”  “ + edad);
```
### Que pasa con los numeros?

```js
var numeroUno = 100;
var numeroDos = 200;
console.log(numeroUno + numeroDos);
```

:::warning
  Aquí se ejecutará la operación aritmética, pero recuerda que si puedes concatenar un número y un string.
:::
 
```js
numero + numero = suma
String + numero = concatenación

```

## prompt

Sirven para  pedir un valor por medio de una alerta (alert).

```js
let apellido = prompt("Ingresa un apellido");
console.log(apellido);

```

```js
let numeroUno = prompt("Ingresa el primero número");
let numeroDos = prompt("Ingresa el segundo número");
let resultado = numeroUno + numeroDos;
console.log(resultado); // ¿no es el resultado esperado?

```

:::warning
  
  Los prompt devuelven un String 

  Para hacer una operacion aritmetica hay que convertirlos a valores numericos

:::

## typeof
```js
console.log(typeof numeroUno);
```
Devuelve el tipo de dato

:::warning
Las variables estan en la consola , si insertan el nombre de la variable en la consola te dice lo que es.
:::

```js
let resultado = parseInt(numeroUno) + parseInt(numeroDos);
console.log(resultado);
```
## parseInt()  
Convierte un String en un int

:::tip
Las variables traten de hacerlas lo más descriptivas posibles, este es un programa simple pero a futuro tendrás cientos de variables declaradas. Además si alguien revisa el código también se da una idea de lo que está ocurriendo.
:::


## Operadores
Existen diferentes tipos de operadores
  * Operadores Aritméticos o Algebraicos o Matemáticos.
* Operadores de Comparación / Relacionales.
* Operadores lógicos

### Operadores Aritmeticos
En programación y matemáticas, los operadores aritméticos son aquellos que manipulan los datos de tipo numérico, es decir, permiten la realización de operaciones matemáticas (sumas, restas, multiplicaciones, etc.).
Operaciones matemáticas con números (enteros , decimales , etc).

```js
//Adición: Suma dos números juntos.
let resultado = 1 + 1;
console.log(resultado);
//Resta: Resta el numero de la derecha del de la izquierda.
let resultado = 2 - 1
console.log(resultado);
//Multiplicación: Multiplica dos números juntos.
let resultado = 5 * 20
console.log(resultado);
//División: Divide el número de la izquierda por el de la derecha.
let resultado = 20 / 5
console.log(resultado);
//Sobrante (también llamado módulo): Retorna el restante después de dividir el número de la izquierda en porciones enteras del de la derecha.
let resultado = 8 % 3
console.log(resultado);

```


Respeta el orden de los parentensis

### Operadores relacionales
Los operadores relacionales definidos por JavaScript son idénticos a los que definen las matemáticas: mayor que ``(>)``, menor que ``(<)``, mayor o igual ``(>=)``, menor o igual ``(<=)``, igual que ``(===)``  o ``(==)`` y distinto de ``(!==)``  o ``(!=)``

==   No compara el tipo de dato , 20 = “20” es true . Hago que javascript trabaje mas  , a usar la conversión.

===     Compara el tipo de dato , 20 = “20” es false

!= No compara el tipo de dato

!==  Compara el tipo de dato

```js
let resultado = 20 > 10;
console.log(resultado);
let resultado = 20 < 10;
console.log(resultado);
let resultado = 20 === 10;
console.log(resultado);
let resultado = 20 == '20';
console.log(resultado);
let resultado = 20 !== 10;
console.log(resultado);
let resultado = 10 != '10';
console.log(resultado);

```

### Operadores logicos
Los operadores lógicos se usan para combinar dos valores Booleanos y devolver un resultado verdadero, falso o nulo. Los operadores lógicos también se denominan operadores Booleanos.

*	&& -- Si los dos son verdaderos devuelve verdadero.

*	|| -- Con que uno sea verdadero devolverá verdadero.

*	! -- Negación (devuelve true si es false y viceversa)

```js
let resultado = true && true;
console.log(resultado);
let resultado = 20 > 10 && 10 < 20;
console.log(resultado);
let resultado = true && true && false;
console.log(resultado);
let resultado = true || false;
console.log(resultado);
let resultado = true || false || false;
console.log(resultado);
let resultado = !false;
console.log(resultado);

```
#### [Todos los operadores, expresiones y palabras clave del lenguaje JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators).
## Estructuras de control
En lenguajes de programación, las estructuras de control permiten modificar el flujo de ejecución de las instrucciones de un programa.

Condicionales
*	if/else (Si ocurre algo, haz esto, sino, haz lo esto otro...)

*	?:   (Equivalente a If/else , forma abreviada.)

*	switch (Estructura para casos específicos: Similar a varios If/else anidados.)

Repetitivas 

*	while
*	do... while
*	for

### if
Un if en programación se utiliza para evaluar una expresión condicional: si se cumple la condición (es verdadera), ejecutará un bloque de código , si no el otro (opcional)

```js
if( condicion ) {
    // bloque verdadero
}else {
  // bloque falso
}

```

```js
let textJavascript = prompt("Escriba 'javascript'");

if (textJavascript === "javascript") {
    console.log("Lo escribiste super bien!");
} else {
    console.log("Lo escribiste mal");
}

```
:::tip

El else{} es opcional
:::
:::tip
A veces javascript hace la conversión (de tipo de dato) de forma automática. 

Pero hay que especificar asi se ahorra trabajo.

En este ejemplo con o sin parseInt funciona 


:::

```js
let numUsuario = prompt("Ingrese numero del 1 al 10");

console.log(numUsuario + " Es: " + typeof numUsuario);

console.log(parseInt(numUsuario));

if (parseInt(numUsuario) <= 10) {
    // Sentencia true
    console.log("Genial!!");
} else {
    // Sentencia false
    console.log("Super mal!!");
}

```
### If else
- También se puede añadir una condición en un else con "else if":


```js
let n = 5;

if (n === 5) {
    console.log("n es igual a 5!");
} else if (n > 5) {
    console.log("n es mayor que 5!");
}
```
:::tip Observación
- En este ejemplo, la declaración if comprueba si la variable n es igual a 5. Si la condición es verdadera, el código dentro de las llaves ({}) se ejecuta, y el mensaje "n es igual a 5!" se imprime en la consola. Si la condición es falsa, la declaración else if se comprueba. Si la condición en la declaración else if es verdadera, el código dentro de sus llaves se ejecuta. Si ambas condiciones son falsas, no se ejecuta ningún código y el programa continúa con la siguiente declaración después del bloque if else.
:::

- Puedes combinar else if con un else en JavaScript. El else se utiliza cuando necesitas ejecutar una acción si ninguna de las condiciones en las declaraciones if o else if es verdadera:

```js
let n = 5;

if (n === 5) {
    console.log("n es igual a 5!");
} else if (n > 5) {
    console.log("n es mayor que 5!");
} else {
    console.log("n es diferente de 5!");
}
```
:::tip Observación
- En este ejemplo, la declaración if comprueba si la variable n es igual a 5. Si la condición es verdadera, el código dentro de las llaves ({}) se ejecuta, y el mensaje "n es igual a 5!" se imprime en la consola. Si la condición es falsa, la declaración else if se comprueba. Si la condición en la declaración else if es verdadera, el código dentro de sus llaves se ejecuta. Si ambas condiciones son falsas, el código dentro del bloque else se ejecuta y el mensaje "n es diferente de 5!" se imprime en la consola.
- La declaración else es opcional y no es necesario incluirla si no necesitas ejecutar ninguna acción cuando ninguna de las condiciones en las declaraciones if o else if es verdadera.
:::


- No hay un límite específico en el número de declaraciones else if que puedes utilizar en JavaScript. Puedes encadenar tantas declaraciones else if como necesites para verificar diferentes condiciones. Sin embargo, es importante tener en cuenta que el uso excesivo de declaraciones else if puede hacer que tu código sea más difícil de leer y mantener.
- Ejemplo:

```js
let n = 5;

if (n === 1) {
  console.log("n es igual a 1!");
} else if (n === 2) {
  console.log("n es igual a 2!");
} else if (n === 3) {
  console.log("n es igual a 3!");
} else {
  console.log("n no es igual a 1, 2 o 3!");
}

```
:::tip Observación
- En este ejemplo, utilizamos una serie de declaraciones if y else if para verificar si el valor de la variable n es igual a 1, 2 o 3. Si el valor de n es igual a 1, se imprime el mensaje "n es igual a 1!". Si el valor de n es igual a 2, se imprime el mensaje "n es igual a 2!". Si el valor de n es igual a 3, se imprime el mensaje "n es igual a 3!". Si el valor de n no es igual a ninguno de estos valores, se ejecuta el bloque else y se imprime el mensaje "n no es igual a 1, 2 o 3!".

:::

- Si tienes muchas condiciones que verificar, es posible que quieras considerar el uso de una declaración switch en su lugar. Una declaración switch te permite verificar una variable contra varios valores posibles y ejecutar diferentes bloques de código según el valor de la variable. Aquí hay un ejemplo de cómo usar una declaración switch en JavaScript para el mismo ejemplo:


```js
let n = 5;

switch (n) {
  case 1:
    console.log("n es igual a 1!");
    break;
  case 2:
    console.log("n es igual a 2!");
    break;
  case 3:
    console.log("n es igual a 3!");
    break;
  default:
    console.log("n no es igual a 1, 2 o 3!");
}
```
:::tip Observación
- En este ejemplo, la declaración switch verifica el valor de la variable n y ejecuta diferentes bloques de código según el valor de n. Si el valor de n es 1, se imprime el mensaje "n es igual a 1!". Si el valor de n es 2, se imprime el mensaje "n es igual a 2!". Si el valor de n es 3, se imprime el mensaje "n es igual a 3!". Si el valor de n no es 1, 2 o 3, se ejecuta el bloque default y se imprime el mensaje "n no es igual a 1, 2 o 3!".
- La declaración switch puede ser más legible y fácil de mantener que una serie de declaraciones else if cuando tienes muchas condiciones que verificar. Sin embargo, la declaración switch solo funciona bien cuando estás comparando una variable contra un conjunto de valores fijos. Si necesitas verificar una condición más compleja, es posible que debas utilizar una serie de declaraciones if y else if.

:::
### Switch

- La declaración switch evalúa una expresión, comparando el valor de esa expresión con una o varias instancias case.
- Compara un valor  con un conjunto de valores(case) , si es igual a uno , se ejecuta dicho case.
- el default se ejecuta cuando el valor no es igual a ningún case.
- el break es para salir del switch y que deje de comparar el valor con los case que sigue.

```js
let opcionUser = prompt(`
Elija una opción:
1: Libros
2: Películas
3: Juegos
`);

switch (opcionUser) {
    case "1":
        console.log("Principito");
        break;
    case "2":
        console.log("Matrix");
        break;
    case "3":
        console.log("NFS");
        break;
    default:
        console.log("Opción no válida");
        break;
}

```

- En una expresión switch de JavaScript puedes usar tanto break como return, pero cada uno se usa en contextos diferentes y depende de lo que quieras lograr.

#### Usar break en un switch
-	Propósito: Detener la ejecución del switch después de que se haya ejecutado un caso específico.
-	Uso común: En estructuras switch estándar para evitar que los casos siguientes se ejecuten o evaluen (comportamiento llamado fall-through).
- Ejemplo:
```js
function getDayName(day) {
  let dayName;
  switch (day) {
    case 1:
      dayName = "Monday";
      break; // Detiene el `switch` aquí
    case 2:
      dayName = "Tuesday";
      break;
    default:
      dayName = "Unknown";
  }
  return dayName; // Devuelve el resultado
}

console.log(getDayName(1)); // "Monday"

```

:::warning
- Si le quitamos los break, los cases siguientes también se evaluaran, lo cual generalmente no es lo deseado.
:::

#### Usar return en un switch
-	Propósito: Salir de la función inmediatamente y devolver un valor.
-	Uso común: En funciones donde el switch se utiliza para decidir el valor de retorno.
-	No necesitas break porque el return termina la función y, por ende, detiene el switch.
- Ejemplo:
```js
function getDayName(day) {
  switch (day) {
    case 1:
      return "Monday"; // Sale de la función aquí
    case 2:
      return "Tuesday";
    default:
      return "Unknown";
  }
}

console.log(getDayName(1)); // "Monday"

```
:::tip Observación
- Es más conciso y elimina la necesidad de asignar variables temporales.
:::

#### Comparación

| Escenario | break | return |
| - | - | - |
|  Detener ejecución del switch y continuar el código. |✅ Sí   | 🚫 No (termina la función).    |
| Salir inmediatamente de la función.  |  🚫 No |   ✅ Sí |
| Uso típico en funciones que no devuelven valores (solo ejecutan acciones).  | ✅ Sí  | 🚫 No   |
|  Uso típico en funciones que devuelven valores. | 🚫 No (requiere variable).  |  ✅ Sí  |


:::tip Documentación
- [switch](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/switch)

:::

### While
- Crea un bucle que ejecuta un bloque de código mientras cierta condición se evalúe como verdadera. Dicha condición es evaluada antes de ejecutar el código.
- Mientras se cumpla una condición, va a ejecutar X código constantemente. Cuando la condición no se cumpla, se deja de ejecutar y sigue con el resto del código que tiene abajo.
- Cuidado con generar un bucle infinito

```js
let numero = 0;
while (numero <= 10) {
    console.log(numero);
    numero++; //numero = numero + 1;
}
console.log("FIN: " + numero);

```
:::tip
numero++; es un incrementador y suele ser normal en un bucle.
:::

:::tip do while
- Existe el "do while" que hacemo lo mismo que "while" solo que condición se evalua despues de ejecutar el código.
- Con el "do while" el código siempre se va a ejecutar al menos una vez.

:::
## &#96;String &#36;&#123;variable/codigo&#125;&#96;
:::tip
 - Con  las comillas invertidas   <code>{'`Texto`'}</code> (el signo se hace con alt + 96) -- El texto se lee tal como está escrito, respetando espacios, formato, etc. Tambien te permite incluir variables o expresiones dentro del string usando  <code>{"`${variable o codigo}`"}</code>.
 - Cuando se ejecuta el string, los `${...}` se evalúan y se reemplazan por el valor de la variable o el resultado de la expresión que contienen.
:::

```js
let a = 5;
let b = 10;
console.log(`Quince es ${a + b} y
no ${2 * a + b}.`);
// "Quince es 15 y
// no 20."

```


## Math.random(): 
La función Math.random() retorna un punto flotante, un número pseudo-aleatorio dentro del rango [0, 1).

[Mas informacion](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random)


```js
// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

```

## Operador ternario
```js
let mensaje = (condición) ?  true: false;
```
Si la condición se cumple, se ejecuta lo que está en el true , de lo contrario se ejecuta lo que está en el false.

En lugar de true y false, ponemos las sentencias.

las sentencias del true o false retornan. 

```js
let mensaje = (numeroMaquina > numeroUsuario) ? ‘El numero es mayor’ : ‘El numero es menor’;
```


## Array
- Los arrays son estructuras de datos que funcionan como una lista de elementos ordenados. Permiten guardar varios valores en una sola variable.
- Características
  - En JavaScript, los arrays son dinámicos, es decir, no hace falta definir su tamaño al crearlos.
  - Pueden almacenar distintos tipos de datos al mismo tiempo (números, strings, etc.).
  - Todos los valores de un array se definen dentro de corchetes `[]`, separados por comas.
  - Cada valor de un array tiene un índice o posición. El primer elemento/valor tiene el índice 0, el segundo el 1, y así sucesivamente.
  - Para acceder a un elemento de un array se usa su nombre de variable seguido del índice entre corchetes: `variable[índice]`








```js
let frutas = ["manzana", "platano", "pera"];
console.log(frutas);

```

- Conceptos claves:
  - length: Tamaño de array (cantidad de elementos) (NO ES EL INDICE)
  - índice: Comienzan en cero, es decir, el índice del primer elemento de un array es 0.



```js
let frutas = ["manzana", "platano", "pera"];
console.log(frutas);
console.log(frutas.length);
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);

```

:::tip
undefined

Una variable a la que no se le ha asignado valor, o no se ha declarado en absoluto (no se declara, no existe) son de tipo undefined. Un método o sentencia también devuelve undefined si la variable que se está evaluando no tiene asignado un valor. Una función devuelve undefined si no se ha devuelto un valor.
:::

## for

Crea un bucle que consiste en tres expresiones opcionales, encerradas en paréntesis y separadas por puntos y comas, seguidas de una sentencia ejecutada en un bucle.

El primero y el segundo parámetro son obligatorio (inicializar variable , condición) , el tercero es opcional (incrementador).

Sirve para recorrer Arrays.

Se ejecuta mientras la condición es true.
La condición es el punto de escape.

```js
for (inicializar una variable(indice) ; condición ; incrementador de la variable ) {
   codigo
}

```

```js
let frutas = ["manzana", "platano", "pera"];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

```
## for of

La sentencia sentencia for...of ejecuta un bloque de código para cada elemento de un objeto iterable, como lo son: String, Array, objetos similares a array (por ejemplo, arguments or NodeList), TypedArray, Map, Set e iterables definidos por el usuario.

Ejecuta un bloque de código por cada elemento de un objeto iterable.

```js
for (variable of objeto iterable {
codigo  
}

```
Por cada ejecución , variable va a tener el valor de un elemento del objeto iterable (generalmente arranca por el primer elemento([0])  y va aumentando en 1 ([1] , [2] , … ).

```js
for (let fruta of frutas) {
    console.log(fruta);

}

```

:::warning
La sintaxis de for...of es específica para las colecciones, y no para todos los objetos. Esta Iterará sobre cualquiera de los elementos de una colección que tengan la propiedad [Symbol.iterator].
Vamos a tener una sección dedicada a los objetos en Javascript así que paciencia.
:::

:::tip
Para ver si un elemento es iterable

Poner en consola

variable[Symbol.iterator]

Si te aparece algo, es iterable.

Si te aparece undefined , no es iterable.


:::

![Descripcion ](https://bluuweb.github.io/desarrollo-web-bluuweb/img/vscode-6.png)

## for in

iterará sobre todas las propiedades de un objeto. Más tecnicamente, iterará sobre cualquier propiedad en el objeto que haya sido internamente definida con su propiedad [[Enumerable]] configurada como true.

Es como el for of pero muestra el índice, no el valor.

```js
for (let fruta in frutas) {
    console.log(fruta);
}

```

## function

Las funciones son fundamentales en JavaScript. Una función en JavaScript es similar a un procedimiento — un conjunto de instrucciones que realiza una tarea o calcula un valor, pero para que un procedimiento califique como función, debe tomar alguna entrada y devolver una salida donde hay alguna relación obvia entre la entrada y la salida.

Características:
-	El nombre de la función. Se utiliza el nombre de la función para llamar a la función y ejecutar el código que contiene.
-	Una lista de parámetros de la función, entre paréntesis y separados por comas. Representa los valores de “entrada” que puede tener.
-	El código JavaScript que contiene la función, esta encerrado entre llaves, ``{ ... }``
-  Para invocar a la función se utiliza el nombre del método seguido de paréntesis, entre estos van los argumentos que se les puede pasar a un método (son opcionales): nombreFunción(parametros).
- Los parámetros son opcionales:
```js
// Declarar funcion
function nombrefuncion (parámetros) {
  codigo
}
 // Invocar funcion
 nombrefuncion();
```


 ```js
 function saludar() {
    console.log("Bienvenido!");
}

saludar();

 ```
- Es un bloque de código que se puede reutilizar  (en ese ejemplo `function saludar() {codigo}`).

- Cada ves que llames al método se ejecuta (en ese ejemplo saludar()).

#### Parametros
- En JavaScript, los parámetros se utilizan para pasar datos a las funciones. Se definen en la declaración de la función y se pueden acceder dentro del cuerpo de la función. 
- Son como variables que se asignan un valor en el momento de invocar la función a través de los paréntesis.
- Aquí hay un ejemplo:
```js
function saludar(nombre) {
  console.log("Hola, " + nombre);
}

saludar("Alice"); // Imprime: "Hola, Alice"

```
:::tip Observación
- En este ejemplo, nombre es un parámetro de la función saludar. Cuando se llama a la función con un argumento ("Alice"), el valor del argumento se asigna al parámetro y se puede utilizar dentro de la función.
:::


- Los parámetros también pueden tener valores predeterminados, que se utilizan si no se proporciona ningún argumento cuando se llama a la función. Aquí hay un ejemplo:

```js
function saludar(nombre = "Mundo") {
  console.log("Hola, " + nombre);
}

saludar(); // Imprime: "Hola, Mundo"

```
:::tip Observación
- En este ejemplo, nombre tiene un valor predeterminado de "Mundo". Si se llama a la función sin argumentos, se utiliza el valor predeterminado.
:::

- Los parámetros también se pueden utilizar para pasar múltiples valores a una función. Aquí hay un ejemplo:
```js
function sumar(a, b) {
  return a + b;
}

let suma = sumar(3, 4); // suma es 7

```
:::tip Observación
- En este ejemplo, a y b son parámetros de la función sumar. Cuando se llama a la función con argumentos (3 y 4), los valores de los argumentos se asignan a los parámetros y se pueden utilizar dentro de la función.
:::


-   Los valores de los parámetros se asignan en orden. Cuando se llama a una función con argumentos, los valores de los argumentos se asignan a los parámetros en el orden en que se declaran.
- Por ejemplo, considera la siguiente función:


```js
function saludar(nombre, apellido, edad) {
  console.log(`Hola, ${nombre} ${apellido}. Tienes ${edad} años.`);
}

```
- Si se llama a esta función con los siguientes argumentos:

```js
saludar("Juan", "Pérez", 30);

```


:::tip Observación
- Los valores de los argumentos se asignarán a los parámetros en el siguiente orden:
  - nombre = "Juan"
  - apellido = "Pérez"
  - edad = 30

:::

:::tip Parametros y argumentos significan lo mismo
- En JavaScript, los parámetros son las variables que se declaran en la lista de parámetros de una función, mientras que los argumentos son los valores que se pasan a la función cuando se llama.

:::



- Es importante tener en cuenta que si se proporcionan menos argumentos de los que se declaran parámetros, los parámetros restantes tendrán un valor de undefined. Por ejemplo:

```js
saludar("Juan", "Pérez");
```

:::tip Observación
- En este caso, el parámetro edad tendría un valor de undefined, ya que no se proporcionó un tercer argumento.

:::

- Por otro lado, si se proporcionan más argumentos de los que se declaran parámetros, los argumentos adicionales se ignorarán. Por ejemplo:

```js
saludar("Juan", "Pérez", 30, "programador");

```

:::tip Observación
- En este caso, el cuarto argumento "programador" se ignora, ya que la función saludar solo declara tres parámetros.

:::


- Los parámetros son opcionales y se puede llamar a una función sin proporcionar argumentos para todos sus parámetros. En este caso, los parámetros no proporcionados tendrán un valor de undefined. Aquí hay un ejemplo:

```js
function saludar(nombre) {
  console.log("Hola, " + nombre);
}

saludar(); // Imprime: "Hola, undefined"

```
:::tip Observación
- En este ejemplo, la función saludar se llama sin argumentos. Dado que el parámetro nombre no se proporciona, tiene un valor de undefined.
:::

- Los parámetros también se pueden utilizar para pasar objetos a las funciones. Aquí hay un ejemplo:


```js
function saludar(persona) {
  console.log("Hola, " + persona.nombre);
}

let alice = { nombre: "Alice" };
saludar(alice)

```

#### Palabra clave return
- La palabra clave return en programación se utiliza para finalizar la ejecución de una función y devolver un valor al lugar desde donde fue llamada. La función puede realizar ciertas operaciones y cálculos, y el resultado de esos cálculos puede ser enviado de vuelta al código que hizo la llamada mediante la instrucción return. El valor devuelto por return puede ser de cualquier tipo de datos, dependiendo de la naturaleza de la función.
- La palabra clave return se utiliza en la mayoría de los lenguajes de programación para devolver un valor desde una función o un método. Cuando una función o un método alcanza una instrucción return, el flujo de control se interrumpe y se devuelve el valor especificado a la llamada de la función o el método.
- La palabra clave return se utiliza para devolver un valor desde una función o un método, interrumpiendo/deteniendo su ejecución.
- return devuelve algo y deja de ejecutar la función , método ,  bloque.  Cuando usamos la palabra clave return es para indicar que queremos salir del bloque.
- La sintaxis básica de la palabra clave return en JavaScript es la siguiente:
```js
function nombreFuncion(parametros) {
  // código de la función
  return valor;
}

```
:::tip Observación
- En este ejemplo, valor es el valor que se devuelve cuando se llama a la función nombreFuncion.

:::

:::tip
- La palabra clave return también se puede utilizar sin un valor especificado, lo que significa que la función no devuelve ningún valor. En este caso, la función simplemente detiene su ejecución y devuelve undefined.
:::

- La palabra clave return es especialmente útil cuando se necesita devolver un valor calculado o generado dentro de una función. Por ejemplo, considera la siguiente función que calcula el área de un círculo:
```js
function calcularAreaCirculo(radio) {
  const PI = 3.14159;
  const area = PI * Math.pow(radio, 2);
  return area;
}
```
:::tip Observación
- En este ejemplo, la función calcularAreaCirculo toma un parámetro radio y devuelve el área del círculo utilizando la fórmula PI * r^2. La palabra clave return se utiliza para devolver el valor calculado de la variable area.
:::

- Devolver un valor desde una función o un método es útil cuando necesitas utilizar el resultado de la función en otra parte del código. Cuando una función devuelve un valor, puedes asignarlo a una variable o utilizarlo directamente en una expresión.
- Por ejemplo, considera la siguiente función que calcula el factorial de un número:


```js
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

```
- En este ejemplo, la función factorial devuelve el resultado del cálculo del factorial de un número n. Puedes utilizar esta función en tu código para calcular el factorial de un número y asignar el resultado a una variable:

```js
const numero = 5;
const factorialNumero = factorial(numero);
console.log(`El factorial de ${numero} es ${factorialNumero}`);

```
:::tip Observación
- En este caso, la variable factorialNumero contiene el resultado del cálculo del factorial de numero, y se imprime en la consola.
:::

- Devolver un valor también es útil cuando necesitas encapsular la lógica de una operación compleja en una función y utilizar el resultado en diferentes partes del código. Por ejemplo, considera una función que calcula el IVA de un importe:
```js
function calcularIVA(importe) {
  const IVA = 0.21;
  return importe * IVA;
}

```
- En este caso, la función calcularIVA devuelve el resultado del cálculo del IVA de un importe. Puedes utilizar esta función en diferentes partes del código para calcular el IVA de diferentes importes:

```js
const importe1 = 100;
const IVA1 = calcularIVA(importe1);
console.log(`El IVA de ${importe1} es ${IVA1}`);

const importe2 = 200;
const IVA2 = calcularIVA(importe2);
console.log(`El IVA de ${importe2} es ${IVA2}`);

```

#### Otro ejemplo

```js

function suma(a, b) {
    var resultado = a + b;
    return resultado;
}

// Llamada a la función y captura del valor devuelto
var resultadoSuma = suma(3, 5);
console.log(resultadoSuma);  // Imprimirá 8

```
:::tip Observación
- En este ejemplo, la función suma realiza una operación específica (suma de dos números) y devuelve el resultado mediante la palabra clave return. 
- La variable resultadoSuma captura el valor devuelto al llamar a la función, permitiendo que ese valor se utilice en otras partes del programa.


:::

## hoisting

Una estricta definición de hoisting sugiere que las declaraciones de variables y funciones son físicamente movidas al comienzo del código, pero esto no es lo que ocurre en realidad. Lo que sucede es que las declaraciones de variables y funciones son asignadas en memoria durante la fase de compilación, pero quedan exactamente en dónde las has escrito en el código.

Javascript mete todo en la memoria RAM , ya luego de leer todo (compilacion), empieza a ejecutar , por lo tanto se puede llamar a una funcion y luego declararla:

```js
saludar();
function saludar() {
    console.log("Bienvenido!");
}

```
[Mas info](https://developer.mozilla.org/es/docs/Glossary/Hoisting)

```js
function saludar(nombreUsuario) {
    console.log("Bienvenido! " + nombreUsuario);
}
saludar("Ignacio");

```
Funcion con parametro

```js
function saludar(nombreUsuario) {
    return "Bienvenido " + nombreUsuario;
}
console.log(saludar("Ignacio"));
```
Funcion con retorno

Puede indicar con paréntesis lo que va a retornar.

Lo que esta abajo del return no se ejecutara.

Los parametros se separan con coma

```js
function sumar(n1, n2) {
    return parseInt(n1) + parseInt(n2);
}

let numeroUno = prompt("Ingrese primer número");
let numeroDos = prompt("Ingrese segundo número");

let resultado = sumar(numeroUno, numeroDos);

console.log("El total es: " + resultado);

```
:::tip

Una característica fundamental de las funciones es que se pueden reutilizar.
:::

```js
function sumar(n1, n2) {
    return n1 + n2;
}

let resultadoUno = sumar(10, 20);
let resultadoDos = sumar(50, 60);
let resultadoTres = sumar(100, 30);

console.log("El total uno es: " + resultadoUno);
console.log("El total dos es: " + resultadoDos);
console.log("El total tres es: " + resultadoTres);


```