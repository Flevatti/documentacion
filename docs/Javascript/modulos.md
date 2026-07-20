---
sidebar_position: 10
---
# Export/Import/LocalStorage

## JS Módulos

### Antes 
- Los proyectos en JavaScript solían ser pequeños y simples.
- En muchos casos, el código no superaba las 100 líneas.
- JavaScript no contaba con una forma nativa de separar el código en diferentes archivos.



### Despues
- Las aplicaciones crecieron y comenzaron a tener cientos o miles de líneas de código.
- Surgió la necesidad de organizar mejor los proyectos y dividir el código en diferentes archivos.
- Aparecieron soluciones como CommonJS y AMD para trabajar con módulos.
- Más adelante, JavaScript incorporó los [Módulos ES](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Modules), permitiendo importar y exportar código de forma nativa.

## Módulos

- Los módulos permiten dividir el código JavaScript en archivos separados y reutilizables que pueden importarse cuando sea necesario.
- Antes de que existieran los módulos nativos en los navegadores, surgieron diferentes sistemas y herramientas para organizar el código mediante módulos (archivos separados), como:
    - CommonJS
    - AMD (utilizado junto con herramientas como RequireJS)
    - Webpack
    - Babel
- Actualmente, los navegadores modernos soportan módulos de forma nativa mediante los Módulos ES.
- Un módulo básicamente consiste en:
    - Mover parte del código a otro archivo.
    - Encapsular su funcionalidad (aislar una parte del código dentro de un archivo).
    - Exportar e importar ese código cuando sea necesario.
- En programación, un módulo es un archivo JavaScript que contiene código (funciones, variables, clases, etc.) y que puede exportar partes de ese código para ser utilizadas en otros archivos. Por ejemplo, un archivo `math.js` puede exportar funciones matemáticas como `sum()` o `multiply()` para que otros archivos puedan utilizarlas mediante `import`.

:::tip `.mjs` vs `.js`
- Ambas extensiones corresponden a archivos JavaScript, pero `.mjs` se utiliza para indicar explícitamente que el archivo contiene un módulo JavaScript.
- [Link](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Modules#reflexi%C3%B3n_%E2%80%94_.mjs_versus_.js)
:::

## Problema 
 HTML
 ```html
 <script src="js/app.js"></script>
    <script src="js/fruta.js"></script>

 ```
 app.js
 ```js
 const fruta = "🍉";
 ```
 fruta.js
  ```js
 const fruta = "🍉";
 ```
:::warning ERROR
Error por sobrescribir una variable const
:::

 ## IIFE

 
- Es una solución al problema.
- Las expresiones de función ejecutadas inmediatamente (IIFE, por su sigla en inglés) son funciones que se ejecutan automáticamente luego de ser definidas.
- Es un patrón de diseño también conocido como función autoejecutable.
- El código queda dentro de una función, creando un scope propio. Esto significa que las variables y funciones declaradas dentro no pueden ser accedidas directamente desde fuera, evitando conflictos con otras partes del código.
- La función se convierte en una expresión de función que se ejecuta inmediatamente apenas se crea. Por ejemplo, las variables creadas dentro de la IIFE no estarán disponibles en el exterior.
- [Más información](https://developer.mozilla.org/es/docs/Glossary/IIFE)

### Pasos
1. Definimos una funcion anónima (puede ser una  función flecha)
2. A la función anónima se le encierra entre paréntesis
3. Y al final se le pone otro paréntesis.

app.js
```js
(function(){
    const fruta = "🍉";
    console.log(fruta);
})()

```
fruta.js
```js
(() => {
    const fruta = "🍌";
    console.log(fruta);
})()

```
:::tip
Como se puede ver, no chocan, no se sobrescriben.
:::

### Desventajas
- No permite compartir fácilmente variables o funciones entre diferentes archivos.
- Al trabajar con variables globales, el código puede crecer y generar conflictos difíciles de controlar.
:::tip Solución
Para solucionar estos problemas (desventajas), se deben utilizar los módulos.
:::
:::tip Orden de etiqueta script 
- Se debe tener cuidado con el orden de las etiquetas `script` cuando un archivo depende de otro.
- Generalmente, los archivos se cargan desde el más independiente al más dependiente:

 ```js
  <script src="js/app.js"></script>
     <script src="js/fruta.js"></script>
 ```
 - Si en tu ejemplo `app.js` depende de `fruta.js`, entonces el orden debería ser al revés:
  ```js
<script src="js/fruta.js"></script>
<script src="js/app.js"></script>
 ```

:::

## export e import
- Los módulos permiten compartir código entre distintos archivos.
- Para que otro archivo pueda acceder a funciones o variables de un módulo (archivo), primero debemos exportarlas; es decir, hacerlas accesibles desde otros archivos.
- Esto se realiza utilizando la declaración `export`.
- Podemos exportar funciones y variables declaradas con `var`, `let` o `const` y, como veremos más adelante, clases.
- Las exportaciones deben realizarse en el nivel superior del módulo (directamente en el archivo, fuera de funciones u otros bloques de código); por ejemplo, no es posible utilizar `export` dentro de una función.
- Este tipo de exportación se conoce como exportación con nombre (*named export*), porque cada elemento exportado tiene un nombre específico y debe importarse utilizando ese mismo nombre.
#### Analogía
- Exportar = enviar un producto desde nuestro país hacia otro lugar.
- Importar = recibir y utilizar un producto que viene desde otro lugar.

#### Ventaja
- Solo vamos a cargar el archivo principal, que será el encargado de recibir todas las importaciones:
```html
 <script src="js/app.js"></script>
```
fruta.js

Exporta algo

Export con nombre
```js
export const sandia = "🍉";
```
app.js

Importa lo de fruta.js, la variable sandia especificamente
```js
//import {nombre de lo que se importa} from "./ubicacion"
import {sandia} from "./sandia.js";
console.log(sandia);

```

:::warning
Al ejecutarlo aparece:

Uncaught SyntaxError: Cannot use import statement outside a module
:::
Para solucionar ese error , en la etiqueta script ponemos el atributo type con el valor module.
```js
 <script src="js/app.js" type="module"></script>
```
Otro ejemplo (Exportacion con nombre)

fruta.js
```js
export const sandia = "🍉";

export function pintarPlatano(){
    console.log("🍌");
}

```
app.js
```js
//import {nombre de lo que se importa} from "./ubicacion"
import {sandia , pintarPlatano } from "./fruta.js";
console.log(sandia);
 pintarPlatano();

```
O tambien puede ser:
```js
//import {nombre de lo que se importa} from "./ubicacion"
import {sandia  } from "./fruta.js";
import {pintarPlatano} from "./fruta.js";

console.log(sandia);
 pintarPlatano();

```
Otro Ejemplo: 

fruta.js
```js
export const sandia = "🍉";

export function pintarPlatano(){
    console.log("🍌");
}

export const frutilla = () => {
    console.log("🍓");
}

export class Fruta{
    constructor(nombre){
        this.nombre = nombre;
    }
}

```
:::tip
Tambien podes escribir export solo una vez y poner los nombres que se van a exportar  entre llaves {}
:::
```js
 const sandia = "🍉";

 function pintarPlatano(){
    console.log("🍌");
}

 const frutilla = () => {
    console.log("🍓");
}

 class Fruta{
    constructor(nombre){
        this.nombre = nombre;
    }
}
export {
    sandia, pintarPlatano , frutilla , Fruta
}

```
app.js
```js
//import {nombre de lo que se importa} from "./ubicacion"
import {pintarPlatano , frutilla , sandia , Fruta} from "./fruta.js";

console.log(sandia);
 pintarPlatano();
 frutilla();
 const guinda = new Fruta("🍒");
 console.log(guinda);

```
:::tip
Todos los ejemplos son de exportación con nombre.
:::


:::tip Diferencias entre módulos y scripts estándar
- [Otras diferencias entre módulos y scripts estándar](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Modules#otras_diferencias_entre_m%C3%B3dulos_y_scripts_est%C3%A1ndar)
:::

## export default
- También existe un tipo de exportación llamado exportación predeterminada (*default export*).
- Para realizar una exportación por defecto, se utiliza la sintaxis `export default`.
- Cada módulo (archivo) solo puede tener una única exportación por defecto.
- La exportación por defecto representa el valor principal que el módulo quiere exponer.
- Al importarla, puedes asignarle cualquier nombre.
- A diferencia de las exportaciones con nombre, no es necesario usar llaves `{}` al importarla.
- Ejemplo: Se exporta sandia por defecto y se importa con el nombre melon.

fruta.js
```js
  const sandia = "🍉";
 export default  sandia

 function pintarPlatano(){
    console.log("🍌");
}

 const frutilla = () => {
    console.log("🍓");
}

 class Fruta{
    constructor(nombre){
        this.nombre = nombre;
    }
}
export {
     pintarPlatano , frutilla , Fruta
}

```

app.js
```js
// import { nombreDeLoQueSeImporta } from "./ubicacion"
import { pintarPlatano, frutilla, Fruta } from "./fruta.js";
// Como no se usan llaves {}, se asume que se está importando
// la exportación por defecto (default export).
// Además, se le puede asignar cualquier nombre.
import melon from "./fruta.js";

console.log(melon);

```
Otro ejemplo:

fruta.js
```js
// Le podes quitar el nombre (opcional)
 export default function pintarPlatano(){
    console.log("🍌");
}

 const frutilla = () => {
    console.log("🍓");
}

 class Fruta{
    constructor(nombre){
        this.nombre = nombre;
    }
}
export {
    frutilla , Fruta
}

```
app.js
```js
//import {nombre de lo que se importa} from "./ubicacion"
// La importacion de algo por defecto no va entre {}
import  pintarPlatano , {frutilla  , Fruta} from './fruta.js'; 
pintarPlatano();

```
## export con alias
- Con la palabra reservada `as` podemos asignar un alias a una exportación o importación, es decir, cambiar el nombre con el que se exportará o el nombre con el que se utilizará dentro del archivo.
- Esto es útil para:
  - Evitar conflictos de nombres,
  - Usar nombres más claros,
  - O adaptar nombres largos a algo más corto.
- Ejemplo:
    - Importamos  la frutilla(función) como fresa.


app.js
```js
import  pintarPlatano , {frutilla as fresa  , Fruta} from './fruta.js'; 
fresa();
```
## LocalStorage
- [Info](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)
- `localStorage` permite guardar datos en el navegador.
- Los datos almacenados persisten entre diferentes sesiones de navegación (una sesión de navegación es el período durante el cual utilizamos una pestaña o ventana del navegador hasta que la cerramos; por ejemplo, una sesión finaliza cuando cerramos una ventana y comienza cuando abrimos una nueva).
- `localStorage` es similar a `sessionStorage`. La diferencia principal es que los datos almacenados en `localStorage` no tienen fecha de expiración, mientras que los datos almacenados en `sessionStorage` se eliminan cuando finaliza la sesión de navegación (por ejemplo, al cerrar la pestaña o ventana).
- Las claves y los valores almacenados en `localStorage` siempre son cadenas de texto (`String`).

:::tip API REST
#### Normas API REST

- El servidor no guarda sesiones del cliente. Cada petición debe contener toda la información necesaria para ser procesada.
:::
Guardar un valor: 
```js
// localStorage.setItem(clave, valor);
// clave → nombre que se usará para identificar el valor.
// valor → información que queremos almacenar.
// La clave se utiliza para identificar y acceder al valor guardado.
localStorage.setItem("platano", "🍌");
```
:::tip
- Fijarse luego en **Consola → Aplicación → Almacenamiento local → http://*** para comprobar que los datos fueron guardados.
- `localStorage` vive en el navegador y guarda los valores en el dominio desde el cual fueron creados.
- Esto significa que los datos guardados en un dominio no pueden ser accedidos desde otro dominio diferente.
:::

```js
//windows.localStorage.setItem("platano" , "🍌");
// Guarda la clave platano con el valor banana
// banana -> 🍌    clave -> valor
localStorage.setItem("platano" , "🍌");

//obtener valor
// getItem("key/clave") obtiene el valor asociado a la clave proporcionada.
console.log(localStorage.getItem("platano"));

```

```js

localStorage.setItem("platano" , "🍌");

//obtener valor
//geItem("key/clave") obtiene el valor de una clave almacenada

    const platano = localStorage.getItem("platano");
    console.log(platano);

//Eliminar valor
// Eliminar la clave -> valor del localStorage
// removeItem("key/clave") busca el par clave-valor asociado a la clave proporcionada y lo elimina del localStorage.
    localStorage.removeItem("platano");

```

```js


localStorage.setItem("platano" , "🍌");
localStorage.setItem("sandia" , "🍉");
	
// Eliminamos todos los valores
// Elimina todas las clave->valor que estaban almacenada en localStorage
localStorage.clear();

```
:::tip 
Generalmente se pregunta si existe el valor con un if.
:::
```js
localStorage.clear();
localStorage.setItem("platano" , "🍌");

if (localStorage.getItem("platano")) {
    const platano = localStorage.getItem("platano");
    console.log(platano);
}

```

:::tip ¿Actualizar los valores?
No existe en localStorage, más adelante veremos que se tiene que capturar el elemento y volver a guardarlo.
:::

## JSON.stringify() & JSON.parse()
### JSON.stringify() 
- El método `JSON.stringify()` convierte un objeto u otros tipos de datos en una cadena de texto en formato JSON.
- Convierte un objeto u otro tipo de dato en un string en formato JSON.


```js
const frutas = [
    {
        nombre: "🍌",
        color: "amarillo",
    },
    {
        nombre: "🍒",
        color: "rojo",
    },
    {
        nombre: "🍏",
        color: "verde",
    },
];
//Convierte un objeto/otro tipo de dato en String
// JSON.stringify(objeto/etc)
localStorage.setItem("frutas" , JSON.stringify(frutas));

```
### JSON.parse()
- El método `JSON.parse()` analiza una cadena de texto en formato JSON y la convierte en un objeto u otro tipo de dato.
- Convierte un string en formato JSON en un objeto u otro tipo de dato.
- Básicamente analiza el contenido del string JSON y lo convierte al tipo de dato correspondiente en JavaScript.
```js
//Convierte un string en un objeto/otro tipo de dato
//JSON.parse(String);
const frutaDesdeLocal = JSON.parse(localStorage.getItem("frutas"));
console.log(frutaDesdeLocal);

```

```js
//Convierte un string en un objeto/otro tipo de dato
//JSON.parse(String);
if(localStorage.getItem("frutas")) {
    const frutaDesdeLocal = JSON.parse(localStorage.getItem("frutas"));
    console.log(frutaDesdeLocal);
}

```
## Práctica TODO:



```html

<!DOCTYPE html>
<html lang="es">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />

    <title>TODO app</title>
</head>

<body>
    <div class="container my-5">
        <h1>Todo app</h1>
        <section class="alert alert-danger d-none">
            Campo todo vacio
        </section>
        <form id="formulario">
            <input type="text" name="nombre" placeholder="Ingrese un Todo" class="form-control mb-2" value="todo 1" id="">
            <button class="btn btn-primary w-100" type="submit">Agregar</button> </button>
        </form>
        <section id="pintarTodo" class="mt-3">

        </section>
    </div>
    <template id="templateTodo">
        <article class="alert alert-warning d-flex aligns-item-center justify-content-between">
            <p class="lead mb-0 ">lorem</p>
            <div>
                <button class="btn btn-danger">Borrar</button>
            </div>
        </article>
    </template>
    <script src="js/app.js" type="module"></script>

</body>

</html>

```

```js


const formulario = document.querySelector("#formulario ");
const pintarTodo = document.querySelector("#pintarTodo ");
const templateTodo = document.querySelector("#templateTodo ").content;
let todos = [];
const alert = document.querySelector(".alert");
formulario.addEventListener('submit', e => {
    alert.classList.add('d-none');
    e.preventDefault();
    const data = new FormData(formulario);
    const [todo] = [...data.values()];
    // Si el campo esta vacio
    if (!todo.trim()) {
        //console.log("te equivocaste mandaste vacio");
        alert.classList.remove('d-none');
        return;
    }
    agregarTodo(todo);
    pintarTodos();
})

const agregarTodo = todo => {

    const objetoTodo = {
        nombre: todo,
        id: `${Date.now()}`

    }
    todos.push(objetoTodo);
}

const pintarTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
    pintarTodo.textContent = "";

    const fragment = document.createDocumentFragment();

    todos.forEach(item => {
        const clone = templateTodo.cloneNode(true);

        clone.querySelector(".lead").textContent = item.nombre;
        // Añadimos el atributo data-id = valor
        clone.querySelector(".btn").dataset.id = item.id;

        fragment.appendChild(clone);
    })

    pintarTodo.appendChild(fragment);
}

document.addEventListener('click', e => {
    // console.log(e.target.dataset);
    if (e.target.matches(".btn-danger")) {
        todos = todos.filter(item => item.id !== e.target.dataset.id);
        pintarTodos();
    }
})

// Cuando carga el DOM
document.addEventListener('DOMContentLoaded', (e) => {
    if (localStorage.getItem("todos")) {
        todos = JSON.parse(localStorage.getItem("todos"));
        pintarTodos();
    }
});

```

:::tip Templates y renderizado de elementos
- El `template` debe estar afuera del lugar donde se van a insertar los elementos.
- Al utilizar métodos de selección como `querySelector()` dentro de un `template`, la búsqueda se realiza únicamente dentro de ese template e ignora todo lo que hay afuera. Por ejemplo, si el `template` contiene un botón con la clase `btn`, al ejecutar `template.querySelector(".btn")` se seleccionará ese botón, aunque existan otros botones con la misma clase fuera del template.
- Antes de volver a pintar elementos en un contenedor, se recomienda vaciarlo para evitar mostrar los mismos elementos varias veces.
:::

:::tip trim y return
- `trim()` elimina los espacios en blanco del comienzo y del final de un texto.
- Al utilizar la negación (`!texto.trim()`), devuelve `true` cuando el texto está vacío o contiene únicamente espacios en blanco.
- Se puede utilizar un `return` vacío para detener la ejecución del resto del código dentro de una función.
:::

:::tip Delegación de eventos y dataset
- La delegación de eventos permite asignar eventos a elementos que todavía no existen cuando se registra el evento con `addEventListener`.
- Podemos crear atributos personalizados usando `data-nombre` para guardar datos dentro de elementos HTML y luego acceder a esos datos mediante `dataset`.
- Los valores obtenidos mediante `dataset` siempre son cadenas de texto (`String`).
:::