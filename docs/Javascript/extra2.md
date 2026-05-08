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

#####  CommonJS (CJS)
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

#### ES Modules (ESM)
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
