---
sidebar_position: 2
---
# JavaScript Basico 2 

:::tip

Preocuparse por la eficiencia puede ser una distracción. Es otro factor más que complica el diseño del programa, y cuando estás haciendo algo que ya es difícil, esa cosa extra de la que preocuparte puede ser paralizante. Por lo tanto, empieza siempre por escribir algo que sea correcto y fácil de entender. Si te preocupa que sea demasiado lento, que normalmente no lo es, ya que la mayoría del código simplemente no se ejecuta con la frecuencia suficiente para llevar una cantidad significativa de tiempo, puedes medirlo después y mejorarlo si es necesario.
:::

## Interpolacion template string
- Las plantillas literales son cadenas de texto que permiten incluir expresiones dentro de un string. Gracias a esto, se pueden crear cadenas (strings) de varias líneas y usar interpolación de valores de forma sencilla.
- La interpolación de valores es una forma de insertar variables o expresiones (codigo) dentro de un texto (string).
- Interpolación de expresiones
    -	barra invertida "alt + 92" = Para saltos de linea
    -	acento grave "alt + 96"  = Para hacer plantillas
- Las plantillas pueden contener marcadores, que se escriben con `${variable o codigo}`.
- Dentro de `${...}` se puede colocar cualquier expresión de JavaScript, como:
    - variables
    - funciones
    - operaciones
    - objetos
- Cuando el string se ejecuta, JavaScript evalúa cada `${...}` y el resultado de cada expresión se inserta directamente en el texto final, ocupando el lugar donde estaba escrito.
- Ejemplo:
```js
let nombreUsuario = "nombre";
console.log("Bienvenido: \n" + nombreUsuario + "\n");
```
\n = Hace un salto de linea

```js
let nombreUsuario = "nombre";
console.log(`Bienvenido:   :  
 ${nombreUsuario}`);
```
- Con las plantillas literales usamos la interpolación (`${expresión}`).
- Con la interpolación podemos insertar variables u otro tipo de código JavaScript.
- En este ejemplo, convertimos el texto a mayúsculas usando una función.

```js

let nombreUsuario = "nombre";
console.log(`Bienvenido:   :  
 ${nombreUsuario.toUpperCase()}`);

```
## toUpperCase();
toUpperCase() = Para convertir a mayuscula

Como reconoce los espacios en blanco , no hace falta usar el “+” 

Ejemplo con el operador ternario:

```js
let nombreUsuario = "Nombre"
let estado = false

console.log(`
${estado ? 'Bienvenido!' : 'Adiós!'} ${nombreUsuario}
`);

```
## var vs let vs const

#### var 
- Todo lo hace de manera global (no recomendado).
- La palabra clave var especifica que la variable es global (no recomendado)
- Uno de los mayores problemas al declarar variables con var, es que puedes sobrescribir las  variables sin errores.
```js
var estado = true;
var estado = false;
console.log(estado);
 

```
- Tambien podes sobrescribir el valor
:::tip
En una aplicación pequeña, es posible que no se encuentre con este tipo de problema, pero cuando su código se agrande, puede sobrescribir accidentalmente una variable que no tenía la intención de sobrescribir.
:::
#### Let
- Una variable con el mismo nombre solo se puede declarar una vez.
- No se permite declarar dos veces la misma variable.

Tira error:

```js
let estado = true;
let estado = false;
console.log(estado);

```
Pero let si deja sobrescribir el valor (NO EL NOMBRE DE LA VARIABLE).
```js
let estado = true;
 estado = false;
console.log(estado);

```
### Scope


```js
var estado = true
if (estado) {
    var estado = false
}
console.log(estado)

```
:::tip Observación
- Devuelve false ya que la variable es global.
:::


```js
let estado = true
if (estado) {
    let estado = false
}
console.log(estado)

```
:::tip Observación
- Devuelve true ya que en este ejemplo hay dos variable estado (una en cada bloque).
:::

### Bloque
- Todo lo que este entre llaves (`{}`) pertenece a un bloque.
- `bloque = {  código }`.
- El scope es "donde vive" una variable.


Tenemos un scope:

```js

{ variable = x }
{ variable = x }
//Son dos variables diferente ya que están existiendo en diferentes bloques

```

:::tip
- El "scope de una variable" se refiere al lugar donde una variable existe o puede ser usada.
- Generalmente el scope es el bloque donde está la variable.
- También se puede llamar "contexto".
:::

- El scope de un var es global (es accesible la variable desde cualquier bloque).
- El scope de un let esta limitado al bloque (no se puede acceder a la variable fuera del bloque).
- En un  for siempre se usa un let asi se respeta el scope (solo existe en el for).

```js
for (let i = 0; i < 10; i++) {
}
console.log(i)

```
### const

`const` tiene todas las características de `let`, con la diferencia de que las variables declaradas con `const` no se pueden sobrescribir.

Son valores constantes: una vez que se les asigna un valor, no se puede modificar.

Error:

```js
const estado = true
estado = false

for (const i = 0; i < 10; i++) {
    console.log(i)
}

```
Como el scope esta limitado al bloque, funciona:
```js
const estado = true
if (estado) {
    const estado = false
    console.log(estado)
}
console.log(estado)

```
:::tip

Algunos desarrolladores prefieren asignar todas sus variables usando const de forma predeterminada (me incluyo), a menos que sepan que necesitarán reasignar el valor. Solo en ese caso, usan let
:::
### Inicializar variable
- Los valores de las variables let y var se pueden cambiar, por lo tanto, se pueden declarar sin inicializarla (asignarle un valor).
- La variable Const se debe declarar con un valor especifico al crearla. Por lo tanto, no se puede declarar sin inicializarla (asignarle un valor).

```js
const myVariable;
let myVariable2;
var myVariable3;

```



### Array vs const
Es importante entender que los objetos (incluidos los arreglos y las funciones) asignados a una variable `const` siguen siendo mutables. 

El uso de `const` solo evita la reasignación de la “referencia” que contiene.

Puedes modificar lo que hay dentro.

Error:

```js
const miArray = []
miArray = ["nuevoElemento"]
valido
```

Valido:
```js
const miArray = []
miArray[0] = ["nuevoElemento"]
console.log(miArray)
```

## Metodos del Array
Los arrays son objetos, por lo tanto tienen métodos (funciones) que permiten realizar operaciones con ellos. Más adelante veremos qué son los objetos y los métodos.
## push
El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.

```js
const frutas = ["Banana"]
frutas.push("Sandía")
console.log(frutas)

```
## pop
El método pop() elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.
```js
const frutas = ["Banana" , "Pera"]
const frutaEliminado = frutas.pop();
console.log(frutas)
console.log(frutaEliminado);

```
## shift
El método shift() elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.
```js
const frutas = ["Banana" , "Pera"]
const frutaEliminado = frutas.shift();
console.log(frutas)
console.log(frutaEliminado);

```
## unshift
El método unshift() agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.
```js
const frutas = ["Banana"]
frutas.unshift("Sandía")
console.log(frutas)

```
Ejemplo: 

```js
const frutas = []
const fruta = prompt('🍒 Feria Market 🍉 ¿qué fruta desea comprar?')

frutas.push(fruta)

while (confirm('¿Desea agregar otro elemento al 🛒?')) {
    const fruta = prompt('¿qué fruta desea comprar?')
    frutas.push(fruta)
}

console.log('Ustede compró: ')
for (let fruta of frutas) {
    console.log(fruta)
}

```
## confirm()

`confirm(mensaje)` muestra una ventana de diálogo con un mensaje (opcional) y dos botones: Aceptar y Cancelar.

Recibe un string (mensaje) que se mostrará en la ventana junto con los botones.

Devuelve un valor booleano: Aceptar = `true` y Cancelar = `false`.

## Funciones anónimas
- En JavaScript, muchas veces no es necesario darle un nombre a una función, especialmente cuando se usa como argumento de otra función.
- En esos casos se crean funciones “en línea” (inline), ya que no se reutilizan en otros lugares, por lo que no hace falta nombrarlas.
- Las funciones “en línea” (inline) son funciones que se escriben directamente en el lugar donde se usan, sin declararlas (crearlas) antes ni darles un nombre.
- Una función anónima es una función que no tiene nombre y se define en línea.

Funcion declarativa:
```js
// Declaro la función
function numAleatorioRango(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// invoco la función
console.log(numAleatorioRango(1, 11))

```

Función expresada:

Es una función anónima porque no tiene nombre y se guarda dentro de una variable.

La función se asigna a una variable.

Es anónima porque la función no tiene nombre.

Ejemplo:

```js
const miNumero = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log(miNumero(1, 11))

```
### Diferencia declarativa vs Expresada:

Una función expresada  No tiene hoisting

Si la invocas y luego la declaras, te va a tirar un error.

```js
console.log(miNumero(1, 11))
const miNumero = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

```

:::tip
La forma de definir una función depende del comportamiento que se espera:

- Las funciones declaradas están disponibles desde el inicio de la ejecución del código.
- Las funciones expresadas no se evalúan hasta que el código llega a esa línea, lo que puede generar errores en estructuras muy complejas o anidadas.

Las funciones declaradas pueden comportarse de forma inesperada cuando se usan dentro de condicionales, ya que se “cargan” antes de ejecutar el flujo del programa.

En cambio, las funciones expresadas se ejecutan en el orden en el que aparecen en el código, lo que ayuda a mantener un comportamiento más predecible.
:::

## Arrow functions

Una función flecha es una forma más corta y compacta de escribir una función tradicional.

1. Le borras la palabra function
2. Luego de los parentesis  va la flecha (=>).
Quedando:
```js

const miNumero =  (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(miNumero(1,10));

```
### Abreviaciones
Si el `return` se hace en una sola línea, se pueden quitar las llaves `{}` y la palabra `return`.

De esta forma, el intérprete entiende que debe devolver ese valor.

Ejemplo:

```js
const miNumero =  (min, max) =>  Math.floor(Math.random() * (max - min)) + min;

console.log(miNumero(1,10));

```

Lo que se retorna, lo pueden encerrar entre paréntesis:


```js
 const miNumero =  (min, max) => ( Math.floor(Math.random() * (max - min)) + min);

console.log(miNumero(1,10));

```

Si solo hay un parámetro , se puede quitar los parentesis:

```js

const miNumero =  max => ( Math.floor(Math.random() * (max - 1)) + 1);

console.log(miNumero(11));

```
Para colocar un parámetro con un valor por defecto es con el signo igual (=).

En este ejemplo el parámetro max tiene el valor 100 por defecto:

```js

const miNumero =  (min, max = 100) => ( Math.floor(Math.random() * (max - min)) + min);

console.log(miNumero(1));

```
Otros ejemplos:

```js

const miNumero =  (min = 1,  max = 100) => ( Math.floor(Math.random() * (max - min)) + min);

console.log(miNumero());

```

El minimo es 10 y el max 100:

```js
const miNumero =  (min = 1,  max = 100) => ( Math.floor(Math.random() * (max - min)) + min);

console.log(miNumero(10));

```
La palabra null/undefined para omitir el primer parámetro.

El mínimo es 1 y el máximo 50:

```js
const miNumero =  (min = 1,  max = 100) => ( Math.floor(Math.random() * (max - min)) + min);

console.log(miNumero(null , 50));

```

```js
const miNumero =  (min = 1,  max = 100) => ( Math.floor(Math.random() * (max - min)) + min);

console.log(miNumero(undefined , 50));


```

Los parametros con valores por defecto se puede aplicar a los otros tipos de funciones.

### Limitantes
-	No tienen acceso a `this` ni a `super`.
- No tiene `arguments` (lista de todos los argumentos recibidos en la llamada) ni la palabra clave `new.target` (indica si una función fue invocada con `new`).
- No se puede usar con `call`, `apply` o `bind`, ya que no permite cambiar su contexto.
- No se puede usar como constructor.

#### This y la funcion flecha

```js
  window.age = 10; 
function Person() {
  this.age = 42; 
  setTimeout(() => {
    console.log("this.age", this.age); 
  }, 100);
}

var p = new Person();
```
:::tip Observación
- Devuelve 42  porque "la funcion flecha usa el contexto/scope del padre (un bloque superior)  como su propio contexto/scope"
- La funcion flecha **NO TIENE SU PROPIO CONTEXTO/SCOPE**
- Esto se explicara en la sección de JS POO
:::

#### Otros ejemplos
```js
window.age = 42;
 
  setTimeout(() => {
    console.log("this.age", this.age); 
  }, 100);
```


:::tip info
- [Link](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
:::
## Arrow & forEach()

 El método forEach() ejecuta la función indicada una vez por cada elemento del array


:::tip

 No solo recorre arrays 

 forEach puede recorrer NodeList y muchos mas

:::

El parámetro es una función flecha (la que se va a ejecutar por cada elemento)

La función flecha puede tener un parámetro que va a representar el  valor de cada elemento del array:
```js
let frutas = ["manzana", "sandía", "pera"]
frutas.forEach(fruta => console.log(fruta))
```
La función flecha puede tener un segundo parámetro que va a representar el índice del valor de cada elemento del array:

```js
let frutas = ["manzana", "sandía", "pera"]
frutas.forEach((fruta , index) => { 
    console.log(`${index}  :  ${fruta}  `)
})

```

La función flecha puede tener un tercer parámetro que va a presentar el array entero:

```js
let frutas = ["manzana", "sandía", "pera"]
frutas.forEach((fruta , index , array) => { 
    console.log(`${index}  :  ${fruta}  `)
    console.log(array);
})


```
## Console.log  Con Estilo
- Podes añadirle css al mensaje del console.log
- Sintaxis: console.log(“%cmensaje” , “código css”);
- Si añadis %c al comienzo del String del primer parámetro, podes usar un segundo parámetro.
- Este segundo parámetro equivale al css que se le añade al mensaje.

Ejemplos:
```js

       console.log('%cHola' , "color:red");
console.log('%cHola' , "color:red;font-size:2rem;");


```
## Primitivo vs Objeto
:::warning
- Hay un apartado dedicado exclusivamente a los Objetos , te recomiendo leerlo para entender esta sección.
:::

#### Diferencias
- [Los tipos primitivos siempre se pasan por valor, mientras que los objetos se pasan por referencia](https://flevatti.github.io/documentacion/docs/Javascript/objeto#por-valor-vs-por-referencia)
- [Los tipos primitivos se copian por valor mientras que los objetos se copian por referencia](https://flevatti.github.io/documentacion/docs/Javascript/objeto#por-valor-vs-por-referencia)
- [Los tipos primitivos se comparan por valor mientras que los objetos se comparan por referencia](https://flevatti.github.io/documentacion/docs/Javascript/objeto#por-valor-vs-por-referencia)

#### ¿Que es un dato primitivo?
- En JavaScript, un primitive (valor primitivo, tipo de dato primitivo) son datos que no son un objeto y no tienen métodos.
- Hay 6 tipos de datos primitivos: string, number, bigint, boolean, undefined y symbol. 
- Los tipos primitivos en JavaScript son aquellos valores que no son un objeto y tampoco tienen métodos. Además, los tipos primitivos son valores inmutables (no se pueden modificar porque no tienen una referencia).



#### Un primitivo como objeto
- Los tipos primitivos (`string`, `number`, `boolean`, `symbol`, `bigint`) fueron diseñados para ser valores simples, rápidos y livianos.
- Sin embargo, sería muy útil que estos valores pudieran utilizar métodos y propiedades. Por ejemplo:

```js
const message = "Hola mundo";
console.log(message.toUpperCase());
```
- Aquí surge un problema: los primitivos no son objetos, por lo que en teoría no deberían tener métodos ni propiedades.
- Para resolver esta situación, JavaScript utiliza **objetos envoltorio** (*wrapper objects*):
    1. Cuando se accede a una propiedad o método de un primitivo, JavaScript crea temporalmente un objeto especial (*wrapper object*) asociado a dicho valor. Es decir, para crear dicho objeto especial se pasa el valor del primitivo como argumento del constructor que crea el objeto envoltorio (*wrapper object*).
    2. Ese objeto proporciona los métodos y propiedades.
    3. Una vez finalizada la operación, el objeto es descartado automáticamente.
- Gracias a este mecanismo, un valor primitivo puede comportarse temporalmente como si fuera un objeto:
```js
const message = "Hola mundo";
message.toUpperCase(); // "HOLA MUNDO"
message.length;        // 10
```

#### Objetos envoltorio
- Cuando se accede a una propiedad o método de un valor primitivo, JavaScript crea temporalmente un objeto envoltorio (*wrapper object*).
- Ese objeto envoltorio se crea a partir de una clase. Dicha clase cambia según el tipo de dato primitivo:


| Primitivo | Clase |
|------------|------------------|
| `string` | `String` |
| `number` | `Number` |
| `boolean` | `Boolean` |
| `symbol` | `Symbol` |
| `bigint` | `BigInt` |


:::tip Observación
- A veces utilizamos estas clases para "instanciar" valores primitivos o usar sus métodos estáticos.
:::


#### Ejemplo
- String tiene el método `toUpperCase()` que devuelve un string en mayúscula:
```js
  const myVariable = "hola";
      console.log(myVariable.toUpperCase());

```
:::tip Observación
- Al invocarse `myVariable.toUpperCase()` JavaScript hace lo siguiente:
    1. Crea una instancia del wrapper object: `wrapper_object = new String("hola")`.
    2. Invoca desde esa instancia el método que solicitamos: `wrapper_object.toUpperCase()`.
    3. Al terminar de usar el método, la instancia del wrapper object se destruye, quedando solo el valor primitivo.
:::

#### null/undefined no poseen métodos
- Los primitivos especiales null y undefined son excepciones. No tienen “wrapper objects” correspondientes y no proveen métodos. En ese sentido son “lo más primitivo”.


:::tip info
- [Diferencias entres tipos primitivos y objetos](https://www.neoguias.com/diferencia-tipos-primitivos-objetos-javascript/#:~:text=Diferencias%20entres%20tipos%20primitivos%20y%20objetos&text=Los%20tipos%20primitivos%20se%20comparan,referencia%2C%20pudiendo%20modificar%20su%20valor)
- [¿Qué son los tipos primitivos en JavaScript?](https://keepcoding.io/blog/tipos-primitivos-en-javascript/#Que_son_los_tipos_primitivos_en_JavaScript)
- [Métodos en tipos primitivos](https://es.javascript.info/primitives-methods)
:::