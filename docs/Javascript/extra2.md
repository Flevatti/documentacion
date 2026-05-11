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