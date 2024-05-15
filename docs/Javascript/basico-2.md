---
sidebar_position: 2
---
# JavaScript Basico 2 

:::tip

Preocuparse por la eficiencia puede ser una distracción. Es otro factor más que complica el diseño del programa, y cuando estás haciendo algo que ya es difícil, esa cosa extra de la que preocuparte puede ser paralizante. Por lo tanto, empieza siempre por escribir algo que sea correcto y fácil de entender. Si te preocupa que sea demasiado lento, que normalmente no lo es, ya que la mayoría del código simplemente no se ejecuta con la frecuencia suficiente para llevar una cantidad significativa de tiempo, puedes medirlo después y mejorarlo si es necesario.
:::

## Interpolacion template string

Las plantillas literales son cadenas literales que habilitan el uso de expresiones incrustadas. Con ellas, es posible utilizar cadenas de caracteres de más de una línea, y funcionalidades de interpolación de cadenas de caracteres.

Cuenta el espacio en blanco y habilita el uso de expresiones incrustadas.


Interpolación de expresiones

-	barra invertida "alt + 92" = Para saltos de linea
-	acento grave "alt + 96"  = Para hacer plantillas

Las plantillas de cadena de caracteres pueden contener marcadores, identificados por el signo de dólar y envueltos en llaves ${expresión}. Las expresiones contenidas en los marcadores, junto con el texto entre ellas, son enviados como argumentos a una función
la expresión es código js (variable , función , objeto , etc).

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
Con la plantilla, usamos la interpolacion (${expresion})
,Con la interpolación podemos poner variables u otro tipo de código js

En este ejemplo lo mandamos a mayuscula con una función.

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

#### Bloque
- Todo lo que este entre llaves ({}) pertenece a un bloque.
- bloque = {  código }.
- El Bloque es "donde vive" una variable.


Tenemos un scope:

```js

{ variable = x }
{ variable = x }
//Son dos variables diferente ya que están existiendo en diferentes bloques

```

:::tip
- El "scope de una variable" hace referencia al lugar donde esta va a vivir o donde podrá ser accesible.
- Generalmente el scope es el bloque en donde vive una variable.
- Puede ser llamado "contexto".
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

const tiene todas las características increíbles de let, con la ventaja adicional de que las variables declaradas usando const son de solo lectura. Son un valor constante, lo que significa que una vez que se asigna una variable const, no se puede reasignar.

Error:

```js
const estado = true
estado = false
error:
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
Es importante comprender que los objetos (incluidos los arreglos y las funciones) asignados a una variable mediante el uso const siguen siendo mutables. El uso de const solo evita la reasignación de la "referencia" que contiene.

Puede modificar lo que hay en el interior.

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

confirm(): muestra una ventana de diálogo con un mensaje opcional y dos botones, Aceptar (true) y Cancelar (false).

Confirm devuelve un valor boolean , aceptar = true y cancelar = false.

## Funciones anónimas

En JavaScript, usualmente no necesitas nombrar tus funciones, especialmente cuando se pasa una función como argumento a otra función. En su lugar, creamos funciones inline (en línea). No necesitamos nombrar estas funciones porque no las reutilizamos en otro lugar.

Funcion declarativa:
```js
// declaro la función
function numAleatorioRango(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// invoco la función
console.log(numAleatorioRango(1, 11))

```

Funcion expresada:

Es anonima ya que esta expresada en una variable.

La funcion se va a una variable

Es anónima porque la función no tiene ningún nombre

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

La forma correcta de definir una función varía según el comportamiento que esperemos de la misma: con las funciones declaradas, tenemos la seguridad de que siempre estarán disponibles en tiempo de ejecución. Con las funciones expresadas, tendremos que éstas no son evaluadas hasta que el intérprete no alcance su posición en el código, lo cual puede generar errores en arquitecturas muy anidadas.

El hecho de que las funciones declarativas se evalúen antes que las expresiones, pueden producir comportamientos no deseados cuando forman parte de condicionales. Para estos casos, el uso de las funciones expresadas garantiza que éstas formarán parte del flujo general del programa, lo cual puede evitarnos sorpresa en determinados entornos.


:::

## Arrow functions

Una expresión de función flecha es una alternativa compacta a una expresión de función tradicional

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
Si se retorna en una línea , podemos quitar las llaves ({}) y la palabra return.

De esta forma el interpretre sabe que hay que retornar un valor

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
-	No tiene sus propios enlaces a this o super y no se debe usar como métodos. (No se puede acceder a this o super).
-	No tiene argumentos o la  palabra clave new.target.
-	No apta para los métodos call, apply y bind, que generalmente se basan en establecer un ámbito o alcance
-	No se puede utilizar como constructor

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

- Aquí el dilema que enfrentó el creador de JavaScript:
  -	Hay muchas cosas que uno quiere hacer con los tipos primitivos, como un string o un number. Sería grandioso  usar métodos en datos primitivos.
  -	Los Primitivos deben ser tan rápidos y livianos como sea posible.
- La solución es algo enrevesada, pero aquí está:
   -	Los primitivos son aún primitivos. Con un valor único, como es deseable.
   -	El lenguaje permite el acceso a métodos y propiedades de strings, numbers, booleans y symbols.
   -	Para que esto funcione, se crea una envoltura especial, un “object wrapper” (objeto envoltorio) que provee la funcionalidad extra y luego es destruido.
- Los “object wrappers” son diferentes para cada primitivo y son llamados: String, Number, Boolean, Symbol y BigInt. Así, proveen diferentes sets de métodos.


#### Ejemplo
- String tiene el método toUpperCase() que devuelve un String en mayúscula.


```js
  const myVariable = "hola";
      console.log(myVariable.toUpperCase());

```
:::tip Simple, ¿no es así? Lo que realmente ocurre en str.toUpperCase()
1.	El string  myVariable es primitivo. Al momento de acceder a su  metodo, un objeto especial es creado, uno que conoce el valor del string y tiene métodos útiles como toUpperCase().
2.	Ese método se ejecuta y devuelve un nuevo string (mostrado con  console.log).
3.	El objeto especial es destruido, dejando solo el primitivo  myVariable.


:::

- Así los primitivos pueden proveer métodos y aún permanecer livianos.
- El motor JavaScript optimiza este proceso enormemente. Incluso puede saltarse la creación del objeto extra por completo. Pero aún se debe adherir a la especificación y comportarse como si creara uno.
- De igual forma, también existen las clases String/Number/Boolean/etc. Estas sirven para “instanciar” valores primitivos y tienen algunos métodos estáticos.


#### null/undefined no poseen métodos
- Los primitivos especiales null y undefined son excepciones. No tienen “wrapper objects” correspondientes y no proveen métodos. En ese sentido son “lo más primitivo”.


:::tip info
- [Diferencias entres tipos primitivos y objetos](https://www.neoguias.com/diferencia-tipos-primitivos-objetos-javascript/#:~:text=Diferencias%20entres%20tipos%20primitivos%20y%20objetos&text=Los%20tipos%20primitivos%20se%20comparan,referencia%2C%20pudiendo%20modificar%20su%20valor)
- [¿Qué son los tipos primitivos en JavaScript?](https://keepcoding.io/blog/tipos-primitivos-en-javascript/#Que_son_los_tipos_primitivos_en_JavaScript)
- [Métodos en tipos primitivos](https://es.javascript.info/primitives-methods)
:::