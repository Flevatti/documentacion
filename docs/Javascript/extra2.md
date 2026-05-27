---
sidebar_position: 16
---

# Extra 2
## Tipos de modulos
#### ¿Que es un modulo?
- Un módulo en JavaScript es, esencialmente, un archivo de código que contiene funcionalidades específicas (como clases, funciones o variables) diseñadas para ser utilizadas en otros archivos.
- En lugar de tener todo el código de un proyecto en un solo archivo, la modularización permite dividir la aplicación en piezas (archivos) más pequeñas y manejables.
#### ¿Para qué sirven los módulos?
- El uso de sistemas de módulos es fundamental para el desarrollo de software moderno por las siguientes razones:
    - Organización y Mantenimiento: Permiten dividir la lógica en archivos específicos según su propósito, lo que facilita la visualización y el mantenimiento del código
    - Encapsulación y Control de Ámbito (Scope): Cada módulo tiene su propio ámbito, lo que significa que sus variables y funciones no son accesibles globalmente a menos que se exporten de forma explícita.
    - Reutilización de Código: Un módulo puede ser importado y utilizado en múltiples partes de un proyecto o incluso en diferentes aplicaciones sin necesidad de reescribir el código
    - Gestión de Dependencias: Ayudan a definir claramente qué partes del código dependen de otras, facilitando el seguimiento de estas relaciones.

####  Sistema de módulo
- Un sistema de módulos es un marco de trabajo que define cómo dividir el código. Básicamente, indica la manera de exportar e importar funcionalidades (como clases, funciones o variables).
- La comunidad de JavaScript creó diversos sistemas para resolver la necesidad de dividir aplicaciones complejas en archivos independientes y evitar conflictos.
Los tres principales son:
    - **ES Modules (ESM)**
    - **CommonJS (CJS)**
    - **Asynchronous Module Definition (AMD)**

###  CommonJS (CJS)
- Se suele utilizar en Node.js para aplicaciones del lado del servidor.
- Funcionamiento: Los módulos se cargan de forma síncrona, lo que significa que la ejecución se detiene hasta que el módulo está completamente cargado en memoria. Este enfoque facilita predecir el orden en que se ejecuta el código, aunque puede afectar el rendimiento, ya que el módulo completo se carga de una sola vez.
- Sintaxis: Se utiliza la función `require()` para importar y el objeto `module.exports` para exportar. 
- Ejemplo:
```js title="saludo.js"
function saludar(nombre) {
  return `Hola, ${nombre}`;
}
module.exports = saludar;
```
```js title="app.js"
const saludar = require('./saludo');
console.log(saludar('Juan'));
```
:::tip Observación
- `module` es un objeto global de Node.js y todo lo que se encuentre en la propiedad `module.exports` puede ser importado y utilizado en otros archivos.
- Para importar módulos se utiliza la función `require()`, que recibe la ruta (`path`) del archivo que contiene funciones exportadas. Esta función busca en el archivo especificado el valor de `module.exports` y lo retorna para poder utilizarlo en el archivo actual.
:::

:::tip
- Cuando se importa un archivo que utiliza un sistema de módulos con exportaciones por defecto (`default`), algunas herramientas o compiladores agregan automáticamente la propiedad `.default`, que contiene el valor exportado por defecto.
:::

### ES Modules (ESM)
- Es el sistema de módulos oficial de JavaScript.
- Es soportado de forma nativa por los navegadores modernos y por Node.js.
- Funcionamiento: Los módulos ES son estáticos, lo que significa que sus importaciones y exportaciones se analizan en tiempo de compilación. Esto permite optimizaciones como el *tree-shaking* (eliminación de código no utilizado) y la carga asíncrona de módulos. Además, mejora el rendimiento y facilita el análisis del código por parte de herramientas y compiladores.
- Sintaxis: Se utilizan las palabras clave `import` para importar y `export` para exportar.
- Ejemplo:
```js title="saludo.js"
export function saludar(nombre) {
  return `Hola, ${nombre}`;
}

export default function funcionAnonima(nombre) {
  return `Chau, ${nombre}`;
}
```
```js title="app.js"
import despedir, { saludar } from './saludo.js';

console.log(saludar('Juan'));
console.log(despedir('Juan'));
```

:::tip Observación
- Para exportar elementos desde un módulo se utilizan las palabras clave `export` y `export default`. Estas dos se colocan antes de la variable, función o clase que se desea exportar.
- Para importar elementos desde otro archivo se utiliza la palabra clave `import`. Dependiendo de si es una exportación nombrada (no se exportó por defecto) o no, se usan llaves `{}` para indicar qué funcionalidad (variable o función) se desea obtener, como si el `import` devolviera un objeto y estuvieras desestructurando. Si es una exportación por defecto, no se usan llaves, se puede asignar cualquier nombre al valor importado y no hace falta que tenga comillas dobles (como si fuera un string) ni que coincida con el nombre original.
- Solo puede haber un `export default` por archivo (módulo).
- Como solo existe una exportación por defecto (`export default`) por archivo, al no usar llaves `{}` en la importación, se asume automáticamente que se está importando ese valor por defecto del módulo y se asigna directamente a la variable que se declare.
- Por último, `from` se usa para indicar la ubicación del archivo donde se encuentra la funcionalidad que se está importando.
:::

### Asynchronous Module Definition (AMD)
- Fue creado específicamente para el entorno del navegador, donde la carga síncrona de archivos podría bloquear la interfaz de usuario. Se utiliza principalmente en el desarrollo front-end y en entornos de navegador.
- Funcionamiento: Permite definir módulos y sus dependencias de forma asíncrona y en paralelo, lo que significa que un módulo se carga solo cuando es necesario. Los módulos AMD son altamente configurables, ya que permiten a los desarrolladores personalizar el orden de carga y definir dependencias entre ellos. Cada módulo puede tener un identificador (ID) único, que normalmente corresponde a la ruta del archivo (sin la extensión .js). Este ID se utiliza para especificar las dependencias.
- Sintaxis: Utiliza la función `define()` para crear módulos y `require()` para cargarlos. La implementación más conocida de AMD es la biblioteca `RequireJS`.
- Ejemplo:
```js title="math.js"
define([], function () {
  function sumar(a, b) {
    return a + b;
  }

  return {
    sumar: sumar
  };
});
```
:::tip Observación
- `define()` crea un módulo AMD.
- El primer parámetro `[]` representa las dependencias del módulo. En este caso está vacío porque `math.js` no depende de otros módulos.
- El segundo parámetro es una función que contiene el código del módulo. 
- El `return` define qué elementos estarán disponibles para otros archivos.
- En este ejemplo, el módulo exporta la función `sumar()`.
:::

```js title="app.js"
require(["math"], function (math) {
  const resultado = math.sumar(5, 3);
  console.log("Resultado:", resultado);
});
```
:::tip Observación
- `require()` carga módulos de forma asíncrona.
- `["math"]` indica el módulo que se quiere cargar, es decir, el nombre del archivo sin la extensión `.js`.
- Cuando el módulo termina de cargarse, se ejecuta la función callback (el segundo parámetro).
- El parámetro `math` contiene lo que exportó `math.js`, es decir, lo que retornó la función pasada como segundo parámetro de `define()` en `math.js`.
:::


:::warning
Para que este código funcione, es necesario implementar previamente `RequireJS`, ya que es la biblioteca encargada de interpretar la sintaxis AMD y cargar los módulos de forma asíncrona. En otras palabras, es la que proporciona las funciones `define()` y `require()` utilizadas.
:::

### Universal Module Definition (UMD)
- Está diseñado para ser compatible con AMD y CommonJS; de hecho, puede considerarse una combinación de ambos sistemas de módulos.
- Funciona tanto en el navegador como en el servidor.
- UMD busca admitir los formatos de módulos más populares:
  - AMD (Asynchronous Module Definition): utilizado por los navegadores e incluye bibliotecas como RequireJS.
  - CommonJS (CJS): utilizado principalmente en el lado del servidor, especialmente con Node.js.
  - Definición de variable global: para navegadores sin cargador de módulos.
- UMD permite a los desarrolladores escribir un módulo una sola vez y reutilizarlo en distintos entornos (con diferentes sistemas de módulos) sin necesidad de modificar el código.
- Normalmente, UMD envuelve la definición del módulo dentro de una función que detecta automáticamente el sistema de módulos disponible y actúa en consecuencia.
- Ejemplo:
```js title="my-umd.js"
(function (root, factory) {

  // Soporte para AMD
  if (typeof define === 'function' && define.amd) {
    define([], factory)

  // Soporte para CommonJS
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory()

  // Variable global para navegador
  } else {
    root.myModule = factory()
  }

})(this, function () {

  return {
    hello: function () {
      return 'Hello, World!'
    },
  }

})
```
:::tip Observación
- Se define una función autoejecutable (*IIFE*) con dos parámetros:
  - `root` → representa el objeto global (`window` en el navegador).
  - `factory` → es una función que contiene el código del módulo y retorna lo que se va a exportar.
- Dentro de la función se realizan comprobaciones para verificar si el entorno utiliza AMD o CommonJS. Dependiendo del sistema detectado, el módulo se exporta usando `define()` (AMD), `module.exports` (CommonJS) o como una variable global del navegador.
- Por último, la función se ejecuta pasando `this` (que normalmente contiene el objeto global) y una función que devuelve lo que se va a exportar.
:::

- Ejecución del módulo UMD:
  - En el navegador:
    ```html 
    <script src="my-umd.js"></script>
    <script>
      console.log(myModule.hello()) // Outputs: "Hello, World!"
    </script>
    ```
  - Usando AMD (por ejemplo, RequireJS):
    ```html
    <script src="path_to_require.js"></script>
    <script>
      require(['my-umd'], function (myModule) {
        console.log(myModule.hello()) // Outputs: "Hello, World!"
      })
    </script>
    ```
  - En Node.js
    ```js
      const myModule = require('./my-umd.js')
      console.log(myModule.hello()) // Outputs: "Hello, World!"
    ```
### SystemJS
- `SystemJS` es un cargador de módulos (*module loader*) para JavaScript que permite cargar módulos dinámicamente (en tiempo de ejecución) y trabajar con distintos formatos de módulos.
- Es compatible con:
  - AMD
  - CommonJS
  - ES Modules (ESM)
  - UMD
  - Módulos globales
- Funciona principalmente en el navegador, aunque también puede utilizarse en el servidor.
- Características principales:
  - Permite cargar módulos según ciertas condiciones o interacciones del usuario.
  - Puede integrarse con transpiladores como `Babel` o `TypeScript`.
  - Admite complementos para cargar recursos como JSON, CSS o texto como módulos.
  - Ofrece un sistema de configuración flexible para rutas, alias y resolución de módulos.
- Antes de que los navegadores incorporaran soporte nativo para `ES Modules`, `SystemJS` se utilizaba para poder cargar y usar módulos modernos en el navegador.
- Actualmente su uso es menor, ya que los navegadores y `Node.js` tienen soporte nativo para `ES Modules`.
- Ejemplo:
```js title="math.js"
export function sumar(a, b) {
  return a + b
}
```
```html
<!-- Cargar SystemJS -->
<script src="system.js"></script>

<script>
  // Cargar un módulo dinámicamente
  System.import('./math.js')
    .then(function (module) {

      console.log(module.sumar(2, 3))

    })
</script>
```
::::tip Observación
- Primero se carga `SystemJS`.
- `System.import()` carga el módulo `math.js` dinámicamente (en tiempo de ejecución).
- Cuando el módulo termina de cargarse, se ejecuta la función pasada a `.then()`.
- `module` contiene todo lo exportado por `math.js` en forma de objeto.
::::


:::warning
- Para que este código funcione, es necesario implementar `SystemJS`, ya sea mediante una etiqueta `<script>` o instalándolo desde `npm`.
:::

## Funciones puras
- Las funciones puras en JavaScript son aquellas que, dadas las mismas entradas (parámetros), siempre producen la misma salida y no tienen efectos secundarios.
- Cuando decimos que no tienen efectos secundarios, nos referimos a que no interactúan con código externo (sistemas, APIs, etc.) ni modifican nada fuera del ámbito (scope) de la función.
- Ejemplo:
```js
function suma(a, b) {
  return a + b;
}

console.log(suma(2, 3));  // 5
```
:::tip Observación
- En este ejemplo, la función `suma` es pura porque, para los mismos parámetros de entrada, siempre devuelve el mismo resultado y no produce efectos secundarios.  
- No modifica variables externas, no depende de valores externos ni interactúa con sistemas externos.
:::

- Ejemplo de función impura:
```js
let numero = 5;

function agregar(a) {
  numero += a;
}

agregar(10);
console.log(numero);  // 15
```
:::tip Observación
- En este caso, la función `agregar` es impura porque modifica una variable que está fuera de su alcance (`numero`), es decir, genera efectos secundarios.
:::

- Ejemplo de ambos tipos:

```js
// Función pura
function cuadrado(n) {
  return n * n;
}

// Función impura
function cuadradoImpuro(n) {
  console.log('Calculando el cuadrado de', n);
  return n * n;
}
```

:::tip Observación
- El resultado (lo que se retorna) no es lo único que define si una función es pura.
- `cuadradoImpuro` no es una función pura porque usa `console`, que es algo externo a la función, ya que es un objeto global al que podemos acceder.
:::


:::tip Efectos secundarios
- Aunque parezca sencillo identificarlos, a veces no lo es.
- Algunos efectos secundarios son:
  - Manipular el DOM, ya que para esto se utiliza `document` (otro objeto global).
  - Actualizar o modificar una variable global.
  - Interactuar con una API.
:::

## Propiedad `offsetHeight` y `clientHeight`
#### `offsetHeight`
- `offsetHeight` es una propiedad de solo lectura que devuelve la altura total de un elemento en píxeles.
- Para calcular la altura tiene en cuenta:
  - El contenido.
  - El `padding`.
  - Los bordes (`border`).
  - En la mayoría de los casos también incluye la barra de desplazamiento horizontal (`scrollbar`) si está renderizada.
- No incluye:
  - Los márgenes.
  - Los pseudo-elementos (`::before`, `::after`).
- Si el elemento está oculto (`display: none`), devuelve `0`.
![An example element with large padding, border and margin. offsetHeight is the layout height of the element including its padding and border, and excluding its margin.](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetHeight/dimensions-offset.png)


:::tip Observación
- `offsetWidth` es una propiedad de solo lectura que devuelve el ancho total de un elemento en píxeles. Para calcularlo, tiene en cuenta lo mismo que `offsetHeight` y también ignora los mismos elementos.
:::


#### `clientHeight`
- `clientHeight` es una propiedad de solo lectura que devuelve la altura visible de un elemento en píxeles.
- Para calcular la altura tiene en cuenta:
  - El contenido.
  - El `padding`.
- No incluye:
  - Los bordes (`border`).
  - Los márgenes.
  - La barra de desplazamiento (`scrollbar`).
  ![Image:Dimensions-client.png](https://developer.mozilla.org/en-US/docs/Web/API/Element/clientHeight/dimensions-client.png)


:::tip Observación
- `clientWidth` es una propiedad de solo lectura que devuelve el ancho visible de un elemento en píxeles. Para calcularlo, tiene en cuenta lo mismo que `clientHeight` y también ignora los mismos elementos.
:::

## Propiedad `scrollHeight` y `scrollTop`
#### `scrollHeight`
- `scrollHeight` es una propiedad de solo lectura que devuelve la altura total del contenido de un elemento en píxeles, incluyendo la parte que no es visible por desbordamiento (`overflow`).
- Para calcular la altura tiene en cuenta:
  - El contenido completo (visible y no visible).
  - El `padding`.
- No incluye:
  - Los bordes (`border`).
  - Los márgenes.
  - La barra de desplazamiento vertical u horizontal.
- Puede incluir la altura de pseudo-elementos como `::before` y `::after`.
- Si el contenido cabe sin scroll, `scrollHeight` es igual a `clientHeight`.
![Image:scrollHeight.png](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight/scrollheight.png)
:::tip
- Existe `scrollWidth`, que es equivalente a `scrollHeight` pero en el eje horizontal.
- Devuelve el ancho total del contenido de un elemento, incluyendo la parte que no es visible por overflow.
:::

#### Diferencias entre `clientHeight`, `offsetHeight` y `scrollHeight`


| Propiedad       | Qué mide | Incluye contenido | Incluye padding | Incluye border | Incluye contenido oculto (overflow) |
|----------------|----------|------------------|----------------|----------------|--------------------------------------|
| `clientHeight` | Altura interna(visible) del elemento | Sí | Sí | No | No |
| `offsetHeight` | Altura total de la caja del elemento | Sí | Sí | Sí | No |
| `scrollHeight` | Altura total del contenido | Sí | Sí | No | Sí |

#### `scrollTop`
- Indica cuántos píxeles del contenido quedaron ocultos arriba porque hiciste scroll hacia abajo.
- Ejemplo:
  - `scrollTop = 0`
    - → Estás al inicio.
    - → No ocultaste nada arriba.
  - `scrollTop = 50`
    - → Bajaste un poco.
    - → Los primeros 50px del contenido quedaron por encima del área visible.
  - `scrollTop = 300`
    - → Bajaste bastante.
    - → Hay 300px de contenido oculto arriba.
##### Visualmente
- Estado inicial:
```txt
[VISIBLE DESDE EL INICIO]
Linea 1
Linea 2
Linea 3
```
:::tip Observación
Así estaría con `scrollTop = 0`.
:::
- Después de bajar:
```txt
(Estas líneas quedaron arriba y ya no se ven)
Linea 1
Linea 2
Linea 3
[AHORA EMPIEZA LO VISIBLE]
Linea 4
Linea 5
Linea 6
```

:::tip Observación
`scrollTop` ahora vale la cantidad de píxeles que “subieron” y quedaron fuera de la vista.
:::

##### Conclusión
- La propiedad `Element.scrollTop` obtiene o establece el número de píxeles que el contenido de un elemento se desplazó hacia arriba dentro del área visible.
- Ese “scroll hacia arriba” normalmente ocurre cuando movés la rueda del mouse hacia abajo o deslizás el contenido hacia abajo.
- Lo que realmente sube es el contenido interno del elemento, haciendo que la parte superior quede oculta fuera de la vista.
- En otras palabras, representa la altura en píxeles del contenido oculto arriba.

:::tip
- La propiedad `Element.scrollLeft` obtiene o establece el número de píxeles que el contenido de un elemento se desplazó hacia la izquierda dentro del área visible.
- Ese desplazamiento horizontal normalmente ocurre al mover la barra de scroll horizontal hacia la derecha o mediante gestos de desplazamiento lateral.
- Lo que realmente se mueve es el contenido interno del elemento, haciendo que la parte izquierda quede oculta fuera de la vista.
- En otras palabras, representa la anchura en píxeles del contenido oculto a la izquierda.
:::

## Método `getBoundingClientRect` y `offsetParent`
#### `getBoundingClientRect`
- `elemento.getBoundingClientRect()` devuelve un objeto `DOMRect` con información sobre el tamaño y la posición del elemento.
- Sirve para obtener información básica sobre un elemento que ya existe en la página.
- El objeto `DOMRect` representa el espacio que ocupa el elemento dentro del viewport.
#### Propiedades del objeto `DOMRect`
- `height`
  - Devuelve la altura del elemento.
  - Incluye `padding` y `border-width`, no solo el contenido.
  - Si `box-sizing: border-box`, este valor coincide con el `height` definido en CSS.
- `width`
  - Devuelve la anchura del elemento.
  - Incluye `padding` y `border-width`, no solo el contenido.
  - Si `box-sizing: border-box`, este valor coincide con el `width` definido en CSS.
- `top`
  - Distancia desde el borde superior del viewport hasta el borde superior del elemento.
- `left`
  - Distancia desde el borde izquierdo del viewport hasta el borde izquierdo del elemento.
- `right`
  - Distancia desde el borde izquierdo del viewport hasta el borde derecho del elemento.
- `bottom`
  - Distancia desde el borde superior del viewport hasta el borde inferior del elemento.
- `x`
  - Equivale a `left`.
  - Representa la distancia horizontal desde el borde izquierdo del viewport hasta el inicio del elemento.
- `y`
  - Equivale a `top`.
  - Representa la distancia vertical desde el borde superior del viewport hasta el inicio del elemento.
  ![Objeto DOMRect que representa el rectángulo más pequeño que contiene completamente al elemento.](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect/element-box-diagram.png)

#### Usos comunes
- Obtener la posición exacta de un elemento dentro del viewport.
- Detectar si un elemento es visible en pantalla.
- Calcular distancias entre elementos.
- Posicionar elementos dinámicamente (`tooltips`, `modals`, `dropdowns`, etc.).
- Detectar colisiones o superposiciones entre elementos.
- Obtener el tamaño real que ocupa un elemento en la página.
- Crear animaciones o efectos que reaccionan a la posición del elemento durante el scroll.
- Implementar sistemas de `drag and drop`.

#### `offsetParent`
- La propiedad de solo lectura `HTMLElement.offsetParent` devuelve el elemento contenedor posicionado más cercano que actúa como referencia de posición para el elemento actual (es decir, el elemento que `offsetTop` y `offsetLeft` utilizan como base para calcular sus distancias, y también el que usan propiedades como `top`, `left`, `right` y `bottom` al posicionar el elemento actual).
- Ese contenedor es el ancestro posicionado más cercano en la jerarquía; es decir, un elemento cuyo `position` tiene un valor distinto de `static` (`relative`, `absolute`, `fixed` o `sticky`).
- Si el elemento no tiene un ancestro posicionado, el navegador puede devolver elementos como `td`, `th`, `table` o `body`.
- Resumen: `offsetParent` devuelve el contenedor posicionado más cercano del elemento.

## Propiedad `offsetLeft` y  `offsetTop`
#### `offsetLeft`
- `elemento.offsetLeft` devuelve la distancia en píxeles desde el borde izquierdo del `offsetParent` hasta el borde izquierdo del elemento.

:::tip
`HTMLElement.offsetParent` es el ancestro posicionado más cercano en la jerarquía.
:::

:::warning
- No confundir con `clientLeft`, que devuelve el grosor del borde izquierdo del elemento.  
- En algunos casos, este cálculo también incluye el ancho de la barra de desplazamiento vertical.
- Adicionalmente, existe `clientTop`, que devuelve el grosor del borde superior del elemento y, en algunos casos, también incluye el ancho de la barra de desplazamiento horizontal.
:::


#### `offsetTop`

- `elemento.offsetTop` devuelve la distancia en píxeles desde el borde superior del `offsetParent` hasta el borde superior del elemento.

## `HTMLCollection` y  `NodeList`
#### `HTMLCollection`
- Es una colección dinámica de elementos HTML (nodos de tipo elemento).
- Cada elemento tiene una posición dentro de la colección.
- Un `HTMLCollection` está vivo (*live collection*), es decir, se actualiza automáticamente cuando cambia el DOM.
- Por ejemplo, si seleccionas todos los elementos `<p>` con `document.getElementsByTagName("p")`, obtendrás un `HTMLCollection` con todos esos elementos.
- Aunque se parece a un array, no es un array real.
- Tiene una propiedad `length` y métodos para acceder a los elementos HTML de la colección.
- Estos métodos y propiedades retornan un `HTMLCollection`:
  - `getElementsByTagName()` → Obtiene elementos HTML por nombre de etiqueta.
  - `getElementsByClassName()` → Obtiene elementos HTML por nombre de clase CSS.
  - `children` → Devuelve los hijos de un elemento.
  - `document.forms` → Devuelve todos los formularios del documento.
- Métodos:
  - `item(index)` → Devuelve el nodo correspondiente al índice indicado.  
    Si el índice es `0`, devuelve el primer elemento; si es `1`, el segundo, y así sucesivamente.
  - `namedItem(key)` → Devuelve el primer elemento HTML cuyo atributo `name` o `id` coincida con la clave especificada.
- Propiedades:
  - `length` → Devuelve la cantidad total de elementos de la colección.
- Se pueden recorrer con un bucle y acceder a sus elementos usando corchetes (`[index]`), como si fuera un array:
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <ul id="parent">
      <li id="one" class="children">Apple</li>
      <li id="two" class="children">Orange</li>
      <li id="three" class="children">Lime</li>
      <li id="four" class="children">Banana</li>
    </ul>

    <script>
      const getItemsList = document.getElementById("parent");
      const children = getItemsList.children;

      function bgColor() {
        for (let j = 0; j < children.length; j++) {
          children[j].style.color = "blue";
        }

        children[3].style.color = "orange";
      }

      bgColor();
    </script>
  </body>
</html>
```

- También se pueden convertir en un array:

```js
const getItemsList = document.getElementById("parent");
const children = getItemsList.children;

const copy = Array.from(children);

console.log(copy);

copy.forEach((item) => {
  item.style.color = "plum";
});
```

- Por último, este ejemplo demuestra que un `HTMLCollection` se actualiza automáticamente cuando el DOM cambia:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <style>
    body {
      background-color: rgb(212, 168, 223);
    }

    main {
      width: 40%;
      margin: 0 auto;
    }

    .input-value {
      background-color: rgb(71, 3, 88);
      padding: 1em;
    }

    input[type="text"] {
      width: 90%;
      border: none;
      outline: none;
      padding: 0.4em 1em;
      color: rgb(71, 3, 88);
    }

    .button-wrapper {
      margin-top: 1em;
      display: flex;
      justify-content: space-around;
    }

    .btn {
      border: 1px solid rgb(71, 3, 88);
      padding: 0.4em 1em;
      cursor: pointer;
      color: rgb(71, 3, 88);
      font-family: Calibri;
      font-size: 0.8em;

      transition: background 0.5s linear;
    }

    .add:hover {
      background-color: rgb(0, 255, 170);
      color: #fff;
    }

    .remove:hover {
      background-color: rgba(214, 7, 121, 0.842);
      color: #fff;
    }

    #parent {
      background-color: #fff;
      border: 1px solid rgb(71, 3, 88);
      padding: 1em 0.5em;
      box-shadow: 4px 6px 10px 1px rgba(0, 0, 0, 0.3);
    }

    li {
      list-style-type: none;
      font-family: Calibri;
      color: rgb(71, 3, 88);
      font-size: 0.8em;
      background-color: rgb(235, 203, 243);
      border-radius: 4px;
      margin-bottom: 2px;
      padding: 2px 4px;
    }
  </style>

  <body>
    <main>
      <section>
        <header>
          <div class="input-value">
            <input
              type="text"
              placeholder="Add favourite fruits"
              id="inputValue"
              class="search"
            />
          </div>

          <div class="button-wrapper">
            <button id="btn-add" class="btn add">Add Items</button>
            <button id="btn-remove" class="btn remove">Remove Items</button>
          </div>
        </header>

        <ul id="parent">
          <li id="one" class="children">Apple</li>
          <li id="two" class="children">Orange</li>
          <li id="three" class="children">Lime</li>
          <li id="four" class="children">Banana</li>
        </ul>
      </section>
    </main>

    <script>
      // Variables
      const parent = document.getElementById("parent");
      const btnAdd = document.getElementById("btn-add");
      const btnRemove = document.getElementById("btn-remove");
      const inputValue = document.getElementById("inputValue");

      // HTMLCollection
      const items = document.getElementsByTagName("li");

      // Add items to the DOM
      btnAdd.addEventListener("click", () => {
        const li = document.createElement("li");

        li.textContent = inputValue.value;

        parent.appendChild(li);

        console.log(items.length);
      });

      // Remove items from the DOM
      btnRemove.addEventListener("click", () => {
        const removeEle = document.querySelector("li:last-child");

        removeEle.remove();

        console.log(items.length);
      });
    </script>
  </body>
</html>
```

:::tip Observación
- Cada vez que se agrega o elimina una etiqueta `<li>`, el `HTMLCollection` se actualiza automáticamente.
- Esto sucede porque `HTMLCollection` es una colección viva (*live collection*).
:::
#### `NodeList`
- Es una colección de nodos del DOM.
- Puede contener distintos tipos de nodos, no solo elementos HTML.
- Por ejemplo, puede incluir:
  - Nodos de elementos
  - Nodos de texto
  - Comentarios
- Cada nodo tiene una posición dentro de la colección.
- Dependiendo del método usado, un `NodeList` puede ser:
  - estático (*static*): No se actualiza mediante cambios en el DOM:
  - o dinámico (*live*) : Se actualiza automaticamente mediante cambios en el DOM:
- Por ejemplo, `element.childNodes` devuelve un `NodeList` dinámico con todos los nodos hijos del elemento.
- En cambio, `document.querySelectorAll()` devuelve un `NodeList` estático que no se actualiza automáticamente cuando cambia el DOM.
- Estos métodos y propiedades retornan un `NodeList`:
  - `querySelectorAll()` → Devuelve todos los elementos que coinciden con un selector CSS.
  - `childNodes` → Devuelve todos los nodos hijos de un elemento.
  - `Node.childNodes` → Retorna nodos de texto, comentarios y elementos.
- [Métodos y propiedades](https://developer.mozilla.org/es/docs/Web/API/NodeList)
- Tiene el método `forEach()` integrado para recorrer sus nodos:
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>NodeList Example</title>
  </head>

  <body>
    <ul>
      <li class="item">Apple</li>
      <li class="item">Orange</li>
      <li class="item">Banana</li>
      <li class="item">Lime</li>
    </ul>

    <script>
      // querySelectorAll retorna un NodeList
      const items = document.querySelectorAll(".item");

      // Recorremos el NodeList con forEach
      items.forEach((item, index) => {
        console.log(index, item.textContent);

        item.style.color = "purple";
      });
    </script>
  </body>
</html>
```
- Al igual que un `HTMLCollection`, se puede acceder a cada nodo usando corchetes (`[index]`), como si fuera un array:
```js
console.log(items[0]); // <li class="item">Apple</li>
```


#### Diferencias entre HTMLCollection y NodeList
#### 1- Nodos devueltos
- Los nodos de elementos son elementos HTML como `<p>`, `<div>`, `<img>`, y otros. Pero también hay otros tipos de nodos. Por ejemplo, nodos de texto y nodos de atributos.
- Un `HTMLCollection` incluirá solo nodos de elementos, mientras que un `NodeList` incluye todos tipos de nodos.
- Ejemplo:
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>NodeList Example</title>
  </head>

  <body>
   <div>
  This is a text
  <p class="paragraph">First paragraph</p>
  <p class="paragraph">First paragraph</p>
</div>

    <script>
      const divElement = document.querySelector('div')
console.log(divElement.children) // returns an HTMLCollection
console.log(divElement.childNodes) // returns a NodeList
    </script>
  </body>
</html>
```
:::tip Observación
- El HTMLCollectiontiene dos elementos: los nodos del elemento párrafo. Mientras que NodeListincluye el primer texto (nodo de texto) y los dos párrafos y nodo de atributos como el class.
:::

#### 2- Colecciones dinámicas frente a colecciones estáticas
- Un `HTMLCollection` siempre está vivo (*live collection*), por lo que se actualiza automáticamente cuando el DOM cambia.
- Un `NodeList` no siempre es dinámico. Puede ser:
  - estático (*static*)
  - o dinámico (*live*)
  - Esto depende de cómo se genere.
  - Por ejemplo, un `NodeList` generado con `querySelectorAll()` es estático, por lo que los cambios en el DOM no se reflejan automáticamente en la colección.
- Ejemplo:
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>NodeList Example</title>
  </head>

  <body>
    <p>Paragraph One</p>
    <p>Paragraph Two</p>
    <p>Paragraph Three</p>

    <script>
      // returns an HTMLCollection
      const paragraphs = document.getElementsByTagName("p");
      // returns a NodeList
      const paragraphs2 = document.querySelectorAll("p");
      console.log("BEFORE UPDATE");
      console.log("HTMLCollection: ", paragraphs);
      console.log("NodeList: ", paragraphs2);
      let newParagraph = document.createElement("p");
      document.body.appendChild(newParagraph);
      console.log("AFTER UPDATE: ");
      console.log("HTMLCollection: ", paragraphs);
      console.log("NodeList: ", paragraphs2);
    </script>
  </body>
</html>
```
:::tip Observación
- `paragraphs2` es un `NodeList` estático, por lo que no se actualiza automáticamente cuando cambia el DOM.
- `paragraphs` es un `HTMLCollection` vivo (*live collection*), por lo que se actualiza automáticamente cuando hay cambios en el DOM. Como la colección es viva, después de agregar un nuevo `<p>` al documento, el cambio se refleja tanto en el `console.log()` de `"BEFORE UPDATE"` como en el de `"AFTER UPDATE"`.
:::

:::tip
- El método `getElementsByName()` devuelve un `NodeList` dinámico (*live*), por lo que se actualiza automáticamente cuando el DOM cambia.
:::

#### 3- Acceder a los elementos
- En un `HTMLCollection`, se puede acceder a los elementos de distintas maneras:
  - Usando el índice
  - Usando el método `namedItem()` con el atributo `id`
  - Usando el método `namedItem()` con el atributo `name`
- En cambio, en un `NodeList` normalmente se accede a los nodos usando únicamente su índice.
- Ejemplo:
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>NodeList Example</title>
  </head>

  <body>
   <div id="container">
  <button id="btn1" name="first-name">First Button</button>
  <button id="btn2">Second Button</button>
  <button id="btn3">Third Button</button>
</div>

    <script>
const container = document.querySelector('#container')
let buttons = container.children // returns HTMLCollection
console.log(buttons[0])// using the index
console.log(buttons.namedItem("btn1")) // using the id attribute
console.log(buttons.namedItem("first-name")) // using the name attribute


 buttons = container.childNodes // returns a NodeList
console.log(buttons[1])// using the index
console.log(buttons.namedItem("btn1")) // throws an error
console.log(buttons.namedItem("first-name")) // throws an error
    </script>
  </body>
</html>
```
:::tip Observación
- En un `NodeList`, normalmente se accede a los nodos usando el índice (`[index]`).
- En un `HTMLCollection`, se puede acceder usando:
  - el índice
  - o el método `namedItem()`
:::
#### 4- Cómo recorrer la colección
- Un `HTMLCollection` no tiene el método `forEach()` integrado. Para usar métodos de arrays como `forEach()`, `map()` o `filter()`, primero debes convertirlo en un array.
-  En cambio, un `NodeList` sí tiene el método `forEach()` integrado para recorrer sus nodos. Pero métodos como `map()` o `filter()` tampoco funcionan directamente sobre un `NodeList` sin antes convertirlo en un array.
- Ejemplo:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>NodeList Example</title>
  </head>

  <body>
   <div id="container">
<button class="btn">First button</button>
<button class="btn">Second button</button>
<button class="btn">Third button</button>
</div>

    <script>
// returns an HTMLCollection
let allButtons = document.getElementsByClassName('btn') 
allButtons.forEach(button => console.log(button)) // Thrwos an error
// returns a NodeList
allButtons = document.querySelectorAll('.btn') 
allButtons.forEach(button => console.log(button))
    </script>
  </body>
</html>
```
:::tip Observación
- Solo un `NodeList` tiene el método `forEach()` integrado.
- Un `HTMLCollection` debe convertirse primero en un array para usar `forEach()`.
:::


- Si quieres recorrer un `HTMLCollection` sin convertirlo en un array, puedes usar `for...of`:
```js
// returns an HTMLCollection
const allButtons = document.getElementsByClassName('btn')
for (button of allButtons) {
  console.log(button)
}
```

## Indexación de arrays
- Existen dos tipos principales de indexación:
  - Basada en 1 (*1-based*)
  - Basada en 0 (*0-based*)
- La indexación de arrays consiste en numerar los elementos de una colección.
  - En una indexación basada en `1`, el primer elemento tiene el índice `1`.
  - En una indexación basada en `0`, el primer elemento tiene el índice `0`.

---

#### Basada en 1 (*1-based*)
- El primer elemento se numera como `1`.
- El segundo elemento se numera como `2`, y así sucesivamente.
- Es la forma más natural e intuitiva para los humanos al contar cosas:
  - Primer lugar
  - Página 1
  - Capítulo 1
- Es común en herramientas y lenguajes orientados a matemáticas o análisis de datos, como:
  - `R`
  - `MATLAB`
  - `Julia`
- Ejemplo:
```text
Posición:  1    2    3
Valores:   10   20   30
```
:::tip Observación
- `10` → posición `1`
- `20` → posición `2`
- `30` → posición `3`
:::
#### Basada en 0 (0-based)
- El primer elemento se numera como `0`.
- El segundo elemento se numera como `1`, y así sucesivamente.
- Es el estándar en la mayoría de los lenguajes de programación modernos, como:
  - `JavaScript`
  - `Python`
  - `Java`
  - `C`
  - `C++`
- Surge de cómo las computadoras manejan la memoria.
- En bajo nivel, el índice representa el desplazamiento (*offset*) desde el inicio del array.
- El primer elemento no tiene desplazamiento, por eso su índice es `0`.
- Ejemplo:
```text
Índice:   0    1    2
Valores: 10   20   30
```
:::tip Observación
- `10` → índice `0`
- `20` → índice `1`
- `30` → índice `2`
:::