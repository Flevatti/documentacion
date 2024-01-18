---
sidebar_position: 6
---
# PseudoClase


## :is() y :where()
- Son Pseudo-clases como :hover




- :is() y :where()  se diferencian a nivel de especificidad. Las siguientes son algunas de las diferencias:
  - :where() no tiene especificidad
  - :is() toma la especificidad de su selector más específico .Por ejemplo  ":is(a,div,#id)" tiene una especificidad de una ID.

:::tip Especificidad 
- La especificidad es el medio por el cual los navegadores deciden qué valores de propiedad de CSS son los más relevantes para un elemento
- Por ejemplo una ID es mas revelante que una clase.
:::
:::tip Diferencias entre :is() y :where()

La diferencia principal entre estos dos selectores es que con :where() la especificidad es cero, mientras que con :is() la especificidad será la que corresponda al selector de la lista con mayor especificidad.


:::

Ejemplo
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
        /* Si la etiqueta h1 , h2 , h3 o p tiene como hijo directo un span  */
        :is(h1,h2,h3,p) > span {
            font-size:50px;
        }
    </style>
</head>
<body>
    <h1>H1</h1>
    <h2><span>H2</span></h2>
    <h3>H3</h3>
    <p>Parrafo</p>
</body>
</html>

```
Es igual con :where
```html
    <style>
        /* Si la etiqueta h1 , h2 , h3 o p tiene como hijo directo un span  */
        :where(h1,h2,h3,p) > span {
            font-size:50px;
        }
    </style>

```
 Ejemplo #2
```html
<style>
        /* Si dentro del article existe un h2 */
       article > :is(h2) {
          font-size:50px;
       }
    </style>
</head>
<body>
    <article>
        <h1>H1</h1>
        <h2>H2 </h2>

    </article>

    <h3>H3</h3>
    <p>Parrafo</p>
</body>

```
Ejemplo #3
```html
    <style>
        /* Si article tiene la clase container */
       article:is(.container) {
          width:800px;
          margin:auto;
          background:red
       }
       /* Seria como article:hover */
       article:is(:hover) {
        background:green;
       }
    </style>
</head>
<body>
    <article class="container">
        <h1 >H1</h1>
        <h2>H2 </h2>

    </article>

    <h3>H3</h3>
    <p>Parrafo</p>
</body>

```

:::tip Info
- [css-tricks](https://css-tricks.com/almanac/selectors/i/is/)
- [¿Que son is y where?](https://www.itdo.com/blog/css-que-son-is-y-where/)
- [Nueva etiqueta](https://webdesign.tutsplus.com/articles/new-css-is-for-easy-element-targeting--cms-34223)
:::


## first-child
- La pseudo-clase :first-child de CSS representa el primer elemento entre un grupo de elementos hermanos.
- Sintaxis: selector(selecciona un grupo de elementos hermanos):first-child
- Selecciona el primer elemento hijo entre un grupo  de elementos que comparten el mismo padre.
```html
 <style>
      p:first-child {
        color:red
      }
     </style>
  </head>
  <body>
      <div>
         <p>Parrafo 1</p>
         <p>Parrafo 2</p>
      </div>
  </body>
```
## last-child
- La pseudo-clase :last-child de CSS representa el ultimo elemento entre un grupo de elementos hermanos.
- Sintaxis: selector(selecciona un grupo de elementos hermanos):last-child
- Selecciona el ultimo elemento hijo entre un grupo  de elementos que comparten el mismo padre.
```html
  <style>
      p:last-child {
        color:red
      }
     </style>
  </head>
  <body>
      <div>
         <p>Parrafo 1</p>
         <p>Parrafo 2</p>
      </div>
  </body>
```




## nth-child
 - Selecciona uno o más elementos en función de su posición entre un grupo de hermanos.
 - Valores: 
    - Numero Entero
    - Odd : Representa hijos impares
    - Even : Representa las filas pares
    - Una notacion (An+B) : Sirve para especificar un patron . Los valores A y B son numeros enteros.


#### Ejemplos
```html
<div>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, iure.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, iure.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, iure.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, iure.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, iure.</p>
   </div>
```
- Seleccionamos el segundo parrafo 
  ```css
    p:nth-child(2) {
         color:red;
      }
  ```
- Seleccionamos los parrafos pares
```css
     p:nth-child(2n) {
         color:red;
      }
```
:::tip Observacion
- Arranca en la linea 2 y se va sumando 2.
- Por lo tanto selecciona los elementos 2 , 4 , 6 , ...
- Entonces el valor "A" de la formula representa cuanto se suma y en que linea se empieza (SI NO SE ESPECIFICA EL VALOR "B")
- Podemos usar el valor even tambien , para lograr lo mismo.
:::
- Seleccionamos los parrafos impares
```css
     p:nth-child(2n + 1) {
         color:red;
      }
```
:::tip Observacion
- Arranca en la linea 1 y se va sumando 2.
- Por lo tanto selecciona los elementos 1 , 3 , 5 , ...
- el valor "B" de la formula especifica en que linea se arranca
- el valor "A" de la formula especifica cuanto se suma
- Podemos usar el valor odd tambien , para lograr lo mismo.
:::

:::tip
La pseudo-clase [:nth-last-child](https://developer.mozilla.org/es/docs/Web/CSS/:nth-last-child) , realiza lo mismo pero al reves , osea empieza desde la ultima fila (ultimo elemento hermano).
:::

:::tip info
- [Selector CSS :nth-child()](https://www.geeksforgeeks.org/css-nth-child-selector/)
- [:nth-child](https://developer.mozilla.org/es/docs/Web/CSS/:nth-child)
:::
## :has()
- Toma un selector CSS como argumento
- Selecciona el elemento , SI  el selector coincide con algun elemento hijo del  elemento.

#### Ejemplo
```html
 <div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, repudiandae!
         <span>Lorem ipsum dolor sit amet.</span>
      </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, quos.</p>
   </div>
    <style>
      p:has(> span) {
         color:red;
      }
    </style>
```
:::tip Observacion
- Selecciona un parrafo que contenga un spam como hijo directo
- El ">" especifica que sea hijo directo , pero lo podemos omitir.
:::

:::warning
ES EXPERIMENTAL
:::
:::tip INFO
- [La guía avanzada del selector CSS :has()](https://blog.logrocket.com/advanced-guide-css-has-selector/)
- [Pseudo clase CSS :has()](https://www.arsys.es/blog/pseudo-clase-css-has)
- [Using :has() as a CSS Parent Selector and much more](https://webkit.org/blog/13096/css-has-pseudo-class/)
- [:has](https://developer.mozilla.org/es/docs/Web/CSS/:has)
:::
## hover
- Selecciona el elemento , cuando el "puntero" o "señalador" , este encima del elemento.
- Se aplican los estilos css cuando el cursor pasa por encima del elemento.

#### Ejemplo
```html
<a href="#">Intenta pasar el mouse sobre este enlace.</a>
    <style>
    a {
 color: powderblue;
  transition: color .5s;
}

a:hover {
  color: gold;
}
    </style>
```
:::tip info
- [:hover](https://developer.mozilla.org/es/docs/Web/CSS/:hover)
- [Efecto Hover: Aprende a usarlo correctamente en tus estilos CSS](https://felixicaza.com/blog/efecto-hover-aprende-a-usarlo-correctamente-en-tus-estilos-css)
:::
## active
- Selecciona un elemento que está siendo activado por el usuario.
- La "activación" comienza cuando el usuario presiona el botón primario del mouse y termina cuando se suelta.
- Se suele utilizar generalmente en &lt;a> y &lt;button> , pero se puede usar en otros elementos.
- Los estilos definidos por la pseudoclase :active serán anulados por cualquier pseudoclase posterior relacionada con el enlace (:link, :hover o :visited) que tenga al menos la misma especificidad.

:::tip  Prioridad de pseudoclase 
1. [:link](#link--visited)
2. [:visited](#link--visited)
3. [:hover](#hover)
4. [:active](#active)
:::


#### Ejemplo
```html
 <button >Este button cambiará a color lima mientras hace clic en él.</button>

   <style>
      button:active { color: lime; }  
   </style>
```
:::tip info
- [:active](https://developer.mozilla.org/es/docs/Web/CSS/:active)
- [La :active pseudo-clase CSS](https://runebook.dev/es/docs/css/:active)
- [ESTILOS CSS PARA ENLACES. :LINK, :VISITED:, :HOVER, :ACTIVE](https://francescricart.com/estilos-css-para-enlaces-link-visited-hover-active/)
:::
## target
- Representa un elemento único
- Selecciona un elemento cuya id coincide con el fragmento de la URL
- Un fragmento de URL es el pedazo de un enlace que empieza con el símbolo hashtag (#).
- Con estas propiedades podemos resaltar bloques o textos para que el usuario sepa qué sección eligió y en dónde debe empezar a leer.

#### Ejemplo


```html
 <p id="unico">ID : UNICO</p>
  <style>
   :target {
      font-size: 50px;
      color: red;
   }
  </style>
```
:::tip Observacion
- En una URL normal , no se aplican los estilos
- Pero en la URL http://127.0.0.1:5500/index.html#unico , el parrafo se pone rojo y grande.
:::

:::tip
El hashtag (#) puede estar en cualquier parte de la URL , siempre y cuando sea valida.

:::


:::tip info
- [:target](https://developer.mozilla.org/es/docs/Web/CSS/:target)
- [Usando la pseudo-clase :target en selectores](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors/Using_the_:target_pseudo-class_in_selectors)
- [Cómo funciona la pseudoclase target en CSS](https://keepcoding.io/blog/como-funciona-la-pseudoclase-target-en-css/)
:::
## focus
- Representa un elemento (como una entrada de formulario) que ha recibido el foco.
- Generalmente se activa cuando el usuario hace clic, toca un elemento o lo selecciona con la tecla "Tab" del teclado.

#### Ejemplo
```html
 <input class="blue-input" value="Voy a ser de color azul cuando enfoque.">

   <style>
      .blue-input {
         width:90vw;
         display: block;
      }
      .blue-input:focus {
 font-size: 50px;
  color: blue;
}
   </style>
```

:::tip info
- [:focus](https://developer.mozilla.org/es/docs/Web/CSS/:focus)

:::
## :scope
- Representa elemento/s que son un punto de referencia.
- En una hoja de estilo :scope es lo mismo que [:root](#root) ya que en ese momento no hay una forma de establecer explícitamente un elemento con alcance.
- Cuando se utiliza una API DOM como querySelector() , querySelectorAll() , matches() o Element.closest() , el valor de :scope coincide con el elemento que "retornan" estos metodos (como querySelector() , querySelectorAll()) o que "invoco" al metodo (como matches() o closest())

#### Ejemplo con matches()
```html
<body>
   <p id="para">
      This is a paragraph. It is not an interesting paragraph. Sorry about that.
    </p>
    <p id="output"></p>

    <script>
      const paragraph = document.getElementById("para");
const output = document.getElementById("output");
// El selector :scope selecionaria el elemento paragraph?
if (paragraph.matches(":scope")) {
   
  output.textContent = "Sii! Lo selecciono !! El elemento paragraph === :scope";
}
      </script>

</body>
```
:::tip Observacion
- El elemento paragraph invoco al metodo matches. 
-  Al invocar el metodo matches , el valor de :scope es el elemento paragraph.
- En este ejemplo , el ":scope" es igual al elemento paragraph.
- el ":scope" seleccionaria al elemento paragraph.
:::

#### Hijo directos


```html
 <div id="context">
      <div id="element-1">
          <div id="element-1.1"></div>
          <div id="element-1.2"></div>
      </div>
      <div id="element-2">
          <div id="element-2.1"></div>
      </div>
  </div>
  <p>
      Selected elements ids :
      <span id="results"></span>
  </p>

    <script>
const context = document.getElementById('context');
const selected = context.querySelectorAll(':scope > div');
console.log(selected);
document.getElementById('results').innerHTML = Array.prototype.map.call(
  selected,
  (element) => `#${element.getAttribute('id')}`,
).join(', ');
      </script>
```

:::tip Observacion
- El elemento que retorno el metodo getElementById() es el valor de   :scope
-  :scope === elemento context
-  :scope === #context
-  :scope > div ===  #context > div
- Por lo tanto , se obtiene las id de los div que son hijos directo del elemento context.
:::

:::tip info
- [:scope - RuneBook](https://runebook.dev/es/docs/css/:scope)
- [:scope - Developer Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/:scope)
:::
## :root
- Selecciona el elemento raíz de un árbol que representa el documento.
- En HTML , :root representa el elemento &lt;html> y es idéntico al selector html , excepto que su especificidad es mayor.
- Es util para declarar [variables CSS](./funciones#var)
#### Ejemplo
```html
<html>

<head>


</head>

<body>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias eius veritatis iure, debitis suscipit nesciunt rerum tempore in fugiat modi necessitatibus incidunt quidem autem vel animi rem atque, nulla excepturi, quasi voluptatem dolorum vero explicabo impedit consequuntur! Eos id quis saepe molestiae, hic eligendi labore reiciendis iure? Excepturi, maiores illo!</p>
  <style>
   :root {
      border: 5px solid red;
   }
  </style>
</body>

</html>
```
:::tip info
- [:root - Developer mozilla](https://developer.mozilla.org/es/docs/Web/CSS/:root)
- [CSS :root Selector](https://www.w3schools.com/cssref/sel_root.php)
- [:root -- Runebook](https://runebook.dev/es/docs/css/:root)
:::
## :link / :visited
#### :link
- Representa un elemento que aún no se ha visitado.
- Coincide con cada elemento no visitado &lt;a>, &lt;area>, o &lt;link> que tiene un atributo href.
- Los estilos definidos por la pseudo-clase :link serán anulados por cualquier pseudo-clase posterior relacionada con el enlace (:active, :hover, o :visited) que tenga al menos la misma especificidad.


#### :visited
- Representa un elemento que el usuario ya ha visitado.
- Por motivos de privacidad, los estilos que se pueden modificar con este selector son muy limitados.
- Los estilos definidos por la pseudo-clase :visited serán anulados por cualquier pseudo-clase posterior relacionada con el enlace (:link, :hover o :active) que tenga al menos la misma especificidad


:::tip  Prioridad de pseudoclase 
1. [:link](#link--visited)
2. [:visited](#link--visited)
3. [:hover](#hover)
4. [:active](#active)
:::


#### Ejemplos
```html
 <a href="https://www.google.com/"> Se visito? </a>


   <style>
    a {
      font-size: 50px;;
    }
     a:link {
      color:red;

     }

     a:visited {
      color:green;
     }
   </style>
```