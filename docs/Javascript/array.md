---
sidebar_position: 5
---
# Array


- Los arrays son objetos que permiten almacenar múltiples valores en una sola variable.
- Su prototipo proporciona métodos para realizar operaciones de recorrido y modificación de sus elementos. 
- [Métodos y Propiedades de un Array](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)
- En JavaScript los arrays son dinámicos, por lo que no es necesario declarar su tamaño al crearlos.
- En JavaScript un array puede tener valores de diferentes tipos. Por ejemplo, un array puede contener `String`, números, booleanos, objetos, etc.


[] = Array

Los elementos (valores) de un array se separan mediante comas.

Cada valor corresponde a un índice: `[Numero]`

Los índices empiezan desde `0`.


Para acceder a un elemento del array:
variable[índice]

```js
let frutas = ["manzana", "platano", "pera"];
console.log(frutas);

```

Conceptos claves:

length: Tamaño de array (cantidad de elementos) (NO ES EL INDICE)

índice: Comienzan en cero, es decir, el índice del primer elemento de un array es 0.



```js
let frutas = ["manzana", "platano", "pera"];
console.log(frutas);
console.log(frutas.length);
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);

```

:::tip `undefined`

Una variable a la que no se le ha asignado un valor tiene el valor `undefined`.

Una función devuelve `undefined` cuando no retorna ningún valor.

Algunos métodos u operaciones devuelven `undefined` cuando no tienen ningún valor para devolver.
:::

## Recorrer un Array

El método forEach() ejecuta la función indicada una vez por cada elemento del array

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
## Metodos que afectan al array Original

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

## Paradigma de progamación
- Un paradigma de programación es una forma o estilo de escribir y organizar el código. Define un conjunto de reglas y conceptos sobre cómo estructurar un programa para resolver problemas.
- Los lenguajes de programación pueden adoptar uno o varios paradigmas.
	
---

#### Son:
1. **Imperativo:** (del latín *imperare*, "mandar") en el que el programador indica a la máquina cómo cambiar su estado. El programador define los pasos que se deben seguir para conseguir los resultados esperados.
    - **Procedimental:** agrupa las instrucciones en funciones para realizar tareas.
    - **Orientado a objetos (POO u OOP):** agrupa los datos y las funciones que trabajan con ellos dentro de objetos.
2. **Declarativo:** en el que el programador indica qué resultado quiere obtener, pero no los pasos necesarios para conseguirlo.
    - **Funcional:** el resultado se obtiene mediante la ejecución de funciones.
    - **Lógico:** el resultado se obtiene mediante reglas y operadores lógicos.
    - **Matemático:** el resultado se obtiene mediante operaciones matemáticas.
    - **Reactivo:** el resultado se obtiene mediante cambios en los datos.
### Imperativa vs Declarativa

- **Programación imperativa:** el programador indica los pasos que se deben seguir para obtener un resultado mediante el control de flujo (define el orden en que se ejecutan las instrucciones de un programa): variables, funciones, `if`, `else`, `switch`, bucles (`while`, `for`, `for...of`, `for...in`), `try...catch`, `async/await`, etc. Por lo tanto, JavaScript permite utilizar programación imperativa.

- **Programación declarativa:** el programador indica qué resultado quiere obtener, sin especificar todos los pasos necesarios para conseguirlo. La programación funcional es un ejemplo de este paradigma, ya que permite expresar qué se quiere hacer mediante funciones, sin indicar cómo se va a realizar.


:::tip
- JavaScript permite utilizar tanto un estilo declarativo como imperativo, dependiendo de si queremos indicar qué resultado buscamos (declarativo) o cómo debemos lograrlo mediante pasos (imperativo).
- Aunque las últimas incorporaciones del lenguaje tienen una tendencia hacia un estilo más declarativo (especialmente funcional), ambos estilos se utilizan actualmente y pueden afectar aspectos como la legibilidad, mantenimiento y rendimiento del código.
- Ambos enfoques pueden lograr el mismo objetivo, por lo que no es necesario elegir uno solo. JavaScript es un lenguaje de múltiples paradigmas.
:::

### POO
- La programación orientada a objetos es una forma de programación imperativa, ya que al programar se describen las instrucciones que debe seguir el programa para resolver un problema.
- Utiliza clases y objetos para representar elementos del mundo real y resolver problemas.
- La programación orientada a objetos se basa en conceptos como la abstracción, la encapsulación, la modularidad, la herencia y el polimorfismo.

### Funcional
- La programación funcional es un paradigma de programación donde se expresa qué resultado se quiere obtener mediante funciones, sin especificar todos los pasos necesarios para lograrlo.
- La programación funcional organiza el código en funciones pequeñas y reutilizables que se pueden combinar para construir programas de mayor complejidad.


## Métodos que no afectan al Array
- Estos métodos siguen un enfoque funcional.
- En lugar de mutar el array existente, devuelven un nuevo array con el resultado de la operación.

## Map()
- El método `map()` recorre cada elemento de un array y crea un nuevo array con los valores que devuelve la función callback.
- No modifica el array original.
- Devuelve la misma cantidad de elementos que tenía el array original.
:::tip
Una función callback es una función que se pasa como argumento a otra función para que sea ejecutada posteriormente.
:::
#### Parametros:
1. **Función callback**

La función callback se ejecuta por cada elemento del array y recibe como parámetro el valor de cada elemento.

La función callback debe retornar un valor, ya que ese valor se utilizará para crear el nuevo array.

Ejemplo: 
```js
// Obtengo el mismo array:
const frutas = ["🍌", "🍏", "🍓"];

const nuevoArray = frutas.map((item) => {return item })

console.log(nuevoArray);

```
Otro Ejemplo Abreviado: 

```js
const frutas = ["🍌", "🍏", "🍓"];

const nuevoArray = frutas.map((item) => item )

console.log(nuevoArray);

```

:::tip
Te permite crear una copia del array totalmente independiente al original.
:::
Otros Ejemplo:

```js


const frutas = ["🍌", "🍏", "🍓"];

const nuevoArray = frutas.map((item) => item )
frutas.push("🍉");
console.log(nuevoArray);

```

```js
const users = [
    { name: "John", age: 34 },
    { name: "Amy", age: 20 },
    { name: "camperCat", age: 10 },
];
 const names = users.map((user) => user.name );
 console.log(names);

```

```js
// Crea un nuevo array multiplicando por 2 cada elemento del array numeros
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosPorDos = numeros.map((item) => item*2);

console.log(numerosPorDos);


```


## filter()

El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

#### Parametros:
1. Funcion (Callback)
El parámetro del callback va a representar el valor que contenga cada elemento del arreglo al recorrerlo.

La función callback siempre debe retornar algo ( true si cumple la condicion , false si no la cumple)

el filter debe devolver true (si pasa el filtro) o false (si no pasa)

Puede devolver todos los elementos del array o algunos.

Ejemplo:

```js
// Devuelve al usuario cuya edad es mayor a 30
const users = [
    { uid: 1, name: "John", age: 34 },
    { uid: 2, name: "Amy", age: 20 },
    { uid: 3, name: "camperCat", age: 10 },
];

const mayores = users.filter((item) => item.age > 30);

console.log(mayores);

```
```js
// Eliminar un usuario del array:
const users = [
    { uid: 1, name: "John", age: 34 },
    { uid: 2, name: "Amy", age: 20 },
    { uid: 3, name: "camperCat", age: 10 },
];

const usersFiltrado = users.filter((item) => item.uid !== 3);

console.log(usersFiltrado);

```
## find()
El método find() devuelve el valor del primer elemento del array que cumple la  condición  implementada por la función 

#### Parametros:
1. Funcion (Callback)
El parámetro del callback va a representar el valor que contenga cada elemento del arreglo al recorrerlo.

La función callback siempre debe retornar algo.

Ejemplo:

```js
// Devolver el usuario con la uid 2.
 const users = [
    { uid: 1, name: "John", age: 34 },
    { uid: 2, name: "Amy", age: 20 },
    { uid: 3, name: "camperCat", age: 10 },
];

const amy = users.find((user) => user.uid === 2);

console.log(amy);

const users = [
    { uid: 1, name: "John", age: 34 },
    { uid: 2, name: "Amy", age: 20 },
    { uid: 2, name: "Amy5", age: 20 },
    { uid: 3, name: "camperCat", age: 10 },
];

const amy = users.find((user) => user.uid === 2);

console.log(amy);

```

```js
// Ejemplo con destructuring:
const users = [
    { uid: 1, name: "John", age: 34 },
    { uid: 2, name: "Amy", age: 20 },
    { uid: 2, name: "Amy5", age: 30 },
    { uid: 3, name: "camperCat", age: 10 },
];

const {age} = users.find((user) => user.uid === 2);

console.log(age);

```

## some()
El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.

Devuelve un valor booleano.

Devuelve true si existe un elemento del array que cumple la condición.
#### Parametros:
1. Funcion (Callback)
El parámetro del callback va a representar el valor que contenga cada elemento del arreglo al recorrerlo.

La función callback siempre debe retornar algo.

Ejemplo:

```js

const users = [
    { uid: 1, name: "John", age: 34 },
    { uid: 2, name: "Amy", age: 20 },
    { uid: 3, name: "camperCat", age: 10 },
];

const existe = users.some((user) => user.uid === 2);
console.log(existe);

```

## findIndex()

El método findIndex() devuelve el índice del primer elemento de un array que cumpla con la condición de la  función proporcionada. En caso contrario devuelve -1.

#### Parametros:
1. Funcion (Callback)
El parámetro del callback va a representar el valor que contenga cada elemento del arreglo al recorrerlo.

La función callback siempre debe retornar algo.

Ejemplo:

```js
const users = [
    { uid: 1, name: "John", age: 34 },
    { uid: 2, name: "Amy", age: 20 },
    { uid: 3, name: "camperCat", age: 10 },
];

const indice = users.findIndex((user)=> user.uid === 2);
console.log(indice);

```

 ```js
 
const users = [
    { uid: 1, name: "John", age: 34 },
    { uid: 2, name: "Amy", age: 20 },
    { uid: 3, name: "camperCat", age: 10 },
];

const indice = users.findIndex((user)=> user.uid === 2);
console.log(indice);
console.log(users[indice]);

 ```

 ## Hay mas métodos de búsquedas de un array (Investigar)


 ## Slice()
El método slice() devuelve una parte del array en un nuevo array sin modificar el array original.

Como parámetros tenes que especificar el índice de inicio y el índice final (no incluido). 
#### Parametros:
1. Indice comienzo (incluido)
2. Indice final (No incluido)

Ambos son INT
```js
const arr = ["Cat", "Dog", "Tiger", "Zebra"];

const arrayNuevo = arr.slice(1,3);
// Devuelve un array ["Dog" , "Tiger"];
console.log(arrayNuevo);

```

## Splice()
- El método `splice()` permite modificar un array eliminando, agregando o reemplazando elementos.
- A diferencia de `slice()`, este método modifica el array original.
- [info](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
```js
array.splice(start, deleteCount , ...elemento]
```
#### `start`
- Índice donde comenzará la modificación del array (el primer índice es `0`).
- Si es mayor que la longitud del array, comenzará desde el final del array.
- Si es negativo, se contará desde el final del array.

#### `deleteCount`
- Indica la cantidad de elementos que se eliminarán desde el índice `start`.
- Si se omite, se eliminarán todos los elementos desde `start` hasta el final del array.
- Si es `0` o un valor negativo, no se eliminará ningún elemento.

#### `...elementos`
- Son los elementos que se agregarán al array desde el índice `start`.
- Si no se especifican elementos, `splice()` solamente eliminará elementos.


## concat()
 El método concat() se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.
 #### Parametros:
 Arrays a fusionar 

 ```js
 const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log(array3);

 ```
 ## Sintáxis Spread (...)
 - [Permite que un elemento iterable, como un arreglo o una cadena, sea expandido.](basico.md#for-of)
- [info](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- Es similar a `concat`, pero utilizando los tres puntos (`...`).
- Se usa para unir arrays:
```js
// Todos los elementos del array 1 (…array1) y todos los elementos del array 2 (…array2) se juntan
 const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = [...array1, ...array2];

console.log(array3);

```

```js
// Con la Coma separamos los elementos, por lo tanto se puede cambiar el orden
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = [...array2 , ...array1];

console.log(array3);

```

```js
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = [...array2 , 'Al reves' , ...array1];

console.log(array3);

```
#### Algunas de sus funciones:
#### Crean una copia de un array/objeto
```js
const gato = {propiedades del gato}
// Creamos una copia de gato
const gato2 = {…gato};
```
:::tip Observacion 
- A `gato2` se le asigna una copia de `gato`, por lo tanto también tiene sus mismas propiedades y valores.
- Aunque gato y gato2 contienen la misma información, son objetos independientes.
- Conclusion : Sirven para crear una copia de forma independiente.
:::
:::warning 
- La copia solo se realiza en los elementos superiores (se accede con `objeto.propiedad`).
- Los elementos de niveles más profundos (por ejemplo `objeto.propiedad.propiedad`) se pasan por referencia.
- ⚠️ Cuidado con objetos o arrays complejos.

:::
#### Descomponen un objeto/array
```js
const sumar = (a,b) => a+b;
const numeros = [2,3];
const suma = sumar (…numeros)

```
:::tip Observacion 
En el ejemplo se ejecuta la función sumar donde a = 2 y b = 3
:::
#### Sirve para unir Array/Objetos
#### Sirve para añadir elementos a un array o añadir propiedades a un objeto
#### Sirve para guardar un pedazo de un array o objeto
```js
const masNumeros = [1,2,3,4,5]
const [primero , …resto] = masNumeros
//Resultado
//primero = 1
//resto = [2,3,4,5]

```
:::tip 
Funciona de igual manera con array y objetos
:::
## REST OPERATOR
- Es un parámetro (…parámetro) de una funcion
- Te convierte todos los valores  que se pasa como argumento en un array.
- Es lo contrario a SPREAD.

```js
function suma(…números) {}
```

## reduce()
- El método `reduce()` ejecuta una función por cada elemento de un array y devuelve un resultado final.
- La función callback retorna un valor en cada vuelta, y ese valor se asigna al acumulador.
- El acumulador guarda el resultado de cada iteración y su valor se utiliza en la siguiente vuelta.
- En la última vuelta, el valor retornado por la función callback será el resultado final que devuelve `reduce()`.

#### Parametros:
1. **Función callback**

La función callback recibe dos parámetros:
   1. **Acumulador:** guarda lo que retorna el callback.
   2. **Valor:** representa el  elemento actual del array.

La función callback debe retornar un valor, ya que ese valor será utilizado como nuevo valor del acumulador.


```js
//Sumar todos los elementos de un array
const numeros = [1, 2, 3, 4, 5];

const sumaTodos = numeros.reduce((acumulador, valorActual) => acumulador + valorActual);

console.log(sumaTodos);

```


```js
//Generar un array con todos los valores.
const arrayNumeros = [
    [0, 1],
    [2, 3],
    [4, 5],
];

const soloNumeros = arrayNumeros.reduce(
    (acc, current) => acc.concat(current)
);

console.log(soloNumeros);

```
:::tip 
- En `reduce()`, si no se especifica el valor inicial del acumulador, este comienza teniendo el mismo tipo de dato que el primer elemento del array. En este ejemplo comienza siendo un array vacío.
- Se puede especificar el valor inicial del acumulador mediante un segundo parámetro. En este caso, el acumulador comienza teniendo el tipo de dato de ese valor inicial.
- [Documentación de Reduce](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
:::
Otro Ejemplo para hacer lo mismo:

```js
//Generar un array con todos los valores.
const arrayNumeros = [
    [0, 1],
    [2, 3],
    [4, 5],
];

const arrayPlano = [].concat(...arrayNumeros);
console.log(arrayPlano);

```
## flat()

- El método `flat()` crea un nuevo array con los elementos de los subarrays unidos.
- No modifica el array original.
:::tip ¿Qué son los niveles o profundidades en un array?
- La profundidad indica cuántos arrays están dentro de otros arrays (nivel de anidamiento).
Ejemplo:
```js
const numeros = [1, [2, 3], [4, [5, 6]]];
```
- Nivel 0: el array principal.
- Nivel 1: arrays dentro del array principal ([2, 3] y [4, [5, 6]]).
- Nivel 2: array dentro de otro array ([5, 6]).
- Por defecto, flat() elimina un nivel de profundidad.
:::





[Información tecnica](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
#### Parametros:
1. **Un número (`Number`):** indica cuántos niveles de profundidad se deben aplanar. Por defecto es `1`.

:::tip Aplanar
- Aplanar significa tomar los elementos que están dentro de otros arrays (niveles superiores a `0`) y colocarlos en el array principal.
- Por defecto, `flat()` utiliza una profundidad de `1`. Es decir, toma todos los elementos del nivel `1` y los coloca en el nivel `0` (el array principal).
:::



Ejemplos:
```js
//Generar un array con todos los valores.
const arrayNumeros = [
    [0, 1],
    [2, 3],
    [4, 5],
];

const arrayPlano = arrayNumeros.flat();
console.log(arrayPlano);

```
:::tip Observación
- Como por defecto `flat()` equivale a `flat(1)`, toma todos los elementos que están en los arrays del nivel `1` (`[0, 1]`, `[2, 3]` y `[4, 5]`) y los agrega al nivel `0` (el array principal).
- A este proceso se le llama **aplanar un nivel**, ya que elimina un nivel de profundidad del array.
:::



Ejemplo con Parametro:

 [5,6] esta en la profundidad 2  ya que esta adentro de un sub array.

Entonces asignamos la profundidad 

```js
//Generar un array con todos los valores.
var arr1 = [1, 2, [3, 4, [5, 6]]];
// Que saque hasta el nivel de profundidad 2 
const arrayPlano = arr1.flat(2);
console.log(arrayPlano);

```

:::tip Observación
- Como `flat(2)` recibe `2` como parámetro, debe aplanar hasta el nivel `2`. Es decir, elimina los niveles `1` y `2`.
- Primero toma todos los elementos que están en el nivel `1` (`3`, `4` y `[5, 6]`) y los coloca en el nivel `0`.
- Como también debe eliminar el nivel `2`, toma los elementos que están dentro de `[5, 6]` (`5` y `6`) y también los coloca en el nivel `0`.
- El resultado final es: `[1, 2, 3, 4, 5, 6]`.
- Si en lugar de `flat(2)` usamos `flat()` (que por defecto equivale a `flat(1)`), se toman todos los elementos del nivel `1` (`3`, `4` y `[5, 6]`) y se agregan al nivel `0` (el array principal).
:::




## split()
- El método `split()` convierte un `String` en un array utilizando un separador.
- Cada vez que `split()` encuentra el separador en el `String`, crea un elemento en el array con el texto que se encuentra antes del separador.



#### Parámetros:
1. **Separador (`String`):** indica el carácter o texto que se utilizará para dividir el `String`.

Ejemplo:
```js
const cadenaMeses = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";
const arrayMeses = cadenaMeses.split(",");
console.log(arrayMeses);

```
:::tip Observación
- Cada vez que `split()` encuentra una coma (`,`), termina un elemento del array y comienza el siguiente.
- El separador no forma parte del resultado; solo se utiliza para dividir el `String`.
:::
## join()
- El método `join()` convierte un array en un `String` utilizando un separador.
- El separador se coloca entre cada elemento del array.
#### Parámetros:

1. **Separador (`String`):** indica el carácter o texto que se colocará entre cada elemento del array.

Ejemplo:
```js
const nuevoTexto = arrayMeses.join(",");
console.log(nuevoTexto);

```

:::tip
**Separador:** es el texto que se coloca entre cada elemento del array al convertirlo en un `String`.

Si no se especifica, `join()` utiliza una coma (`,`) como separador.
:::

## Practica

### HTML

```html
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Seleccionar Color</title>
    <link
      crossorigin="anonymous"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      rel="stylesheet"
    >
</head>

<body>

  <main class="container mt-5">
    <div class="row text-center">
        <article class="col-sm-4 mb-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Frutilla 🍓</h5>
                    <button class="btn btn-primary" data-fruta="frutilla">Agregar</button>
                </div>
            </div>
        </article>
        <article class="col-sm-4 mb-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Banana 🍌</h5>
                    <button class="btn btn-primary" data-fruta="banana">Agregar</button>
                </div>
            </div>
        </article>
        <article class="col-sm-4 mb-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Manzana 🍏</h5>
                    <button class="btn btn-primary" data-fruta="manzana">Agregar</button>
                </div>
            </div>
        </article>
    </div>
</main>
<section class="container mt-3">
  <ul class="list-group" id="carrito">
   
  </ul>
</section>

<template id="template">
  <li class="list-group-item d-flex justify-content-between align-items-center">
      <span class="lead">A list item</span>
      <span class="badge bg-primary rounded-pill">14</span>
  </li>
</template>
    <script src="app.js"></script>
</body>

</html>

```
### JS
```js
const carrito = document.querySelector("#carrito");
const template = document.querySelector("#template");
const fragment = document.createDocumentFragment();
const agregar = document.querySelectorAll(".card button");

// Objeto
const carritoObjeto = [];

const agregarCarrito = (e) => {
   
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
    };

  const indice = carritoObjeto.findIndex((item) => item.id === producto.id );

 
   if (indice === -1) {
       carritoObjeto.push(producto);
   } else {
       carritoObjeto[indice].cantidad++;
   }
   
   
    pintarCarrito(carritoObjeto);
};

const pintarCarrito = (array) => {
       carrito.textContent = "";

    array.forEach((item) => {
        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector(".lead").textContent = item.titulo;
        clone.querySelector(".rounded-pill").textContent = item.cantidad;
        fragment.appendChild(clone);
        
    });

    carrito.appendChild(fragment);
};

agregar.forEach((boton) => boton.addEventListener("click", agregarCarrito));



```



## Desestructurar por posiciones

- Permite asignar el valor que contiene una posición de un array a una variable mediante el formato `índice: variable`.



```js
      const nombres = ['Fede' , 'Miguel' , 'Andrea' , 'Santi' , 'Daniela']

    
      const {
          // Accedemos a la posicion 0 (Fede) y a la Posicion 2(Andrea)
        // Le asignamos el valor de nombres[indice] a nombreVariable
        // indice : nombreVariable
        0:variableFede ,
        2:variableAndrea
      } = nombres;

      console.log(variableFede , variableAndrea)

```
