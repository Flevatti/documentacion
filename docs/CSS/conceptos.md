# Conceptos
#### Syntax tree (AST)
- Como desarrollador, el código fuente que escribes es conciso y elegante, y otros desarrolladores pueden leerlo y comprenderlo fácilmente. Sin embargo, un compilador debe realizar mucho más trabajo para entenderlo y ejecutarlo.
- Un AST (Árbol de Sintaxis Abstracta) es una estructura jerárquica de nodos que representa el código fuente. Gracias a esta representación, los compiladores pueden comprender el código que escribes y transformarlo en instrucciones que posteriormente serán ejecutadas por el sistema operativo, el navegador u otros entornos de ejecución.

####  ¿Cómo interpreta el compilador tu código?
1. El código fuente se divide primero en fragmentos más pequeños llamados tokens mediante un proceso conocido como análisis léxico (o tokenización).
2. A continuación, el analizador sintáctico (parser) procesa estos tokens y construye un árbol de sintaxis. Este árbol representa la estructura del código fuente, elimina detalles innecesarios y conserva únicamente la información relevante para que el compilador comprenda la estructura del código y qué se quiere hacer en cada instrucción.
3. En consecuencia, un AST es una estructura de datos en forma de árbol que representa la estructura sintáctica del código fuente de manera más eficiente.

#### Análisis léxico
- Imagina que estás aprendiendo un nuevo idioma, pero no un lenguaje de programación 😄, y te dan la tarea de deducir el significado de una oración en ese idioma.
- Como primer paso, intentarás identificar los sustantivos, los verbos o, en general, las palabras clave. El análisis léxico es muy similar a este proceso.
- Dado un código fuente, el compilador primero intenta identificar los diferentes tipos de tokens que lo componen.
- Un token es un fragmento de código que el compilador considera esencial para comprender el código. Puede ser una variable, un valor, un operador, una palabra clave o una llamada a una función.

#### Análisis sintáctico
- Hasta ahora, has aprendido que la tokenización divide el código en tokens o entidades, de forma similar a como identificarías palabras en una oración.
- Una vez que hayas identificado los sustantivos, los verbos y otros elementos de la oración, ¿cómo deducirías su significado?
- El siguiente paso consiste en detectar qué relaciones existen entre ellos para entender cómo se relacionan entre sí y cómo se ajustan a las reglas gramaticales del idioma.
- Esto nos lleva al proceso de **análisis sintáctico** (*parsing*).
- Para realizar este análisis, un **analizador sintáctico** (*parser*) procesa los tokens y construye un **Árbol de Sintaxis Abstracta (AST)**.

#### Representación de AST
- Los diferentes tokens y sus relaciones suelen ser específicos de cada idioma. Por ejemplo, la estructura sintáctica de una oración en alemán puede ser muy diferente de la de una oración en hindi.
- Del mismo modo, la estructura de un AST puede variar según el lenguaje de programación.
- En general, un AST representa las relaciones entre los tokens del código fuente mediante una estructura de árbol compuesta por nodos. Estos nodos pueden contener nodos hijos. Cada nodo representa un elemento del código.

#### Relevancia del AST en el desarrollo
- El AST no solo permite que el compilador comprenda el código.
- También puede utilizarse para analizar el código sin ejecutarlo.
- Gracias a esto, es posible detectar errores, problemas de seguridad o problemas de rendimiento durante el desarrollo.

#### Ejemplo
- Un simple `console.log('hi!')` genera la siguiente representación AST:
```js
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "name": "console"
          },
          "property": {
            "type": "Identifier",
            "name": "log"
          }
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "hi!"
          }
        ]
      }
    }
  ]
}

```
:::tip  Propiedades del AST
- `type`: indica el tipo de nodo que se está representando (`Program`, `CallExpression`, `Identifier`, etc.).
- `body`: contiene los nodos hijos de un `Program`. Generalmente representa las instrucciones del programa.
- `expression`: contiene la expresión asociada a un nodo `ExpressionStatement`, es decir, el código que se va a ejecutar.
- `callee`: contiene el nodo que representa la función que se está invocando.
- `computed`: indica si la propiedad se accede mediante corchetes (`obj[prop]`) o mediante notación de punto (`obj.prop`). En este caso es `false` porque se utiliza `console.log`.
- `object`: contiene el nodo que representa el objeto sobre el que se accede a una propiedad o método (`console`).
- `property`: contiene el nodo que representa la propiedad o método accedido (`log`).
- `arguments`: contiene una lista de nodos que representan los argumentos enviados a la función.
- `name`: almacena el nombre de un identificador. En este ejemplo, `console` y `log`.
- `value`: almacena el valor de un literal. En este ejemplo, `"hi!"`.
- Como podrás notar, cada tipo de nodo tiene sus propiedades que lo describen y, dependiendo del lenguaje de programación, estas propiedades pueden cambiar.
:::


- Puede parecer muchísima información para un fragmento de código tan pequeño (y, de hecho, se han omitido algunas partes de la salida), pero a simple vista ya es posible identificar su estructura. Con una representación visual, resulta aún más fácil de comprender.

![Salida visual de console.log('¡Hola!')](https://storage.ghost.io/c/3d/ea/3dea66f2-9737-42a1-a346-5a06228649cc/content/images/2024/04/tree-visual.png)


:::tip Cómo se relaciona con la estructura del AST
- `Program` es el nodo raíz del AST y representa el programa o archivo completo. La propiedad `body` contiene sus nodos hijos, que representan las instrucciones del programa.
- Cada una de estas instrucciones se representa mediante un nodo `ExpressionStatement`. La propiedad `expression` contiene el código que se va a ejecutar.
- En este caso, dicho código es una llamada a una función, representada por el nodo `CallExpression`.
- La propiedad `callee` de `CallExpression` contiene un nodo `MemberExpression`, que representa el acceso a una propiedad o método de un objeto, como `console.log`.
- A su vez, `MemberExpression` contiene dos nodos: `object`, que representa el objeto (`console`), y `property`, que representa la propiedad o método (`log`).
- Por último, la propiedad `arguments` contiene los nodos que representan los argumentos que recibe la función.
:::


#### ¿Dónde se utiliza?
- El AST se usa principalmente en el desarrollo frontend para analizar código HTML, CSS y JavaScript. Permite obtener información detallada del código, como su estructura, la ubicación de cada línea y las relaciones entre sus partes.
- Casos de uso:
  - **ESLint**: convierte el código en un AST y lo analiza aplicando reglas para detectar errores o malas prácticas y mostrar advertencias al desarrollador.
  - **TypeScript (`tsc`)**: genera un AST para analizar el código, realizar la verificación de tipos y luego convertirlo a JavaScript.
  - **Babel**: transforma el código usando un AST. Su proceso es: `tokenize → parse → AST → transform → generate`.
  - **Herramientas de conversión de formatos**: por ejemplo, se puede convertir un archivo Markdown a AST y luego usar esa estructura para generar código HTML, como en `remark-parse` y `remark-html`.


:::tip info
- [Árbol de Sintaxis Abstracta (AST): Explicado en lenguaje sencillo](https://dev.to/balapriya/abstract-syntax-tree-ast-explained-in-plain-english-1h38)
- [AST (Árbol de Sintaxis Abstracta)](https://medium.com/@dinis.cruz/ast-abstract-syntax-tree-538aa146c53b)
- [¿Qué es un árbol de sintaxis abstracta?](https://www.letsbuildui.dev/articles/what-is-an-abstract-syntax-tree/)
- [How to Modify Nodes in an Abstract Syntax Tree](https://css-tricks.com/how-to-modify-nodes-in-an-abstract-syntax-tree/)
- [Comprender los árboles de sintaxis abstracta (AST): cómo las herramientas modernas analizan, procesan y transforman su código.](https://medium.com/@dtianshan7/the-understanding-abstract-syntax-trees-ast-how-modern-tools-parse-analyze-and-transform-your-c3edc7e1e687)
- [Generador de AST](https://astexplorer.net/)
:::