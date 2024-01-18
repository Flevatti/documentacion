---
sidebar_position: 2
---
# Propiedades
## Propiedad aspect-ratio

- El aspecto-ratio  especifica la relación proporcional de un elemento entre su ancho y alto
- Se expresa como X:Y
- X es el ancho y Y es el alto
- Ejemplo:  4:3  , 16:9 , 8:5


Ejemplo:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
    img {
        max-width:400px;
    }
       .cuadrado {
        /* Es un cuadrado  , el ancho y el alto son iguales*/
        aspect-ratio: 1 / 1;
      
       }

       .alto {
          /* Es un doble de alto */
          aspect-ratio: 1 / 2;
       }  
       .ancho {
          /* Es un doble de ancho */
          aspect-ratio: 2 / 1;
       }
    </style>
</head>
<body>
     <img  class="ancho"src="https://www.xtrafondos.com/descargar.php?id=3963&resolucion=1920x1080">
</body>
</html>

```

- [aspect-ratio INFO](https://css-tricks.com/almanac/properties/a/aspect-ratio/)


:::tip Elemento remplazado
- Para entender la INFO de  aspect-ratio  , debe comprender este concepto
- En términos más simples, son elementos que no se ven afectados por los estilos(css) del documento actual.
- Algunos elementos reemplazados, como los &lt;iframe>, pueden tener sus propias hojas de estilo, pero no heredan los estilos del documento principal.
- En CSS , un elemento reemplazado es un elemento cuya renderización está fuera del alcance de CSS
- [Mas info del concepto](https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element)
:::
## Propiedad line-clamp
- Solo funciona en combinación con la  propiedad  display establecida en -webkit-box o -webkit-inline-box y la propiedad  -webkit-box-orient establecida en vertical.
- Establece el numero de lineas a mostrar.
- [line-clamp css tricks](https://css-tricks.com/almanac/properties/l/line-clamp/)
- [line-clamp developer mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp)
## Propiedad box-orient
- No recomendada , no forma parte del estándar y esta en desuso
- Establece si un elemento muestra su contenido en forma horizontal o vertical.
- [Propiedad box-orient](https://developer.mozilla.org/en-US/docs/Web/CSS/box-orient)
  
Ejemplo:
```html
  <body>
    <style>
      #cont {
        display: box;
        display: -moz-box;
        display: -webkit-box;
        box-orient: horizontal;
        -moz-box-orient: horizontal;
        -webkit-box-orient: horizontal;
      }
      #cont1,
      #cont2,
      #cont3,
      #cont4 {
        width: 200px;
        height: 200px;
        min-height: 200px;
        min-width: 200px;
        background-color: aqua;
        margin: 5px;
        display: box;
        display: -moz-box;
        display: -webkit-box;
      }
      #cont1 {
        box-orient: horizontal;
        -moz-box-orient: horizontal;
        -webkit-box-orient: horizontal;
      }
      #cont2 {
        box-orient: vertical;
        -moz-box-orient: vertical;
        -webkit-box-orient: vertical;
      }
      #cont3 {
        box-orient: inline-axis;
        -moz-box-orient: inline-axis;
        -webkit-box-orient: inline-axis;
      }
      #cont4 {
        box-orient: block-axis;
        -moz-box-orient: block-axis;
        -webkit-box-orient: block-axis;
      }
      .capa1,
      .capa2,
      .capa3 {
        width: 50px;
        height: 50px;
        max-height: 50px;
        max-width: 50px;
        background-color: fuchsia;
        margin: 5px;
      }
    </style>
  <div id="cont">
    <div id="cont1" style="background:red">
    <div class="capa1">Primero</div>
    <div class="capa2">Segundo</div>
    <div class="capa3">Tercero</div>
    </div>
  
    <div id="cont2" style="background:honeydew">
    <div class="capa1">Primero</div>
    <div class="capa2">Segundo</div>
    <div class="capa3">Tercero</div>
    </div>
    <div id="cont3" style="background:lightblue">
    <div class="capa1">Primero</div>
    <div class="capa2">Segundo</div>
    <div class="capa3">Tercero</div>
    </div>
    <div id="cont4" style="background:maroon">
    <div class="capa1">Primero</div>
    <div class="capa2">Segundo</div>
    <div class="capa3">Tercero</div>
    </div>
    </div>
  </body>

```
:::tip Observacion
- El contenedor con el fondo red tiene el valor horizontal
- El contenedor con el fondo honeydew tiene el valor vertical
- El contenedor con el fondo lightblue tiene el valor inline-axis
- El contenedor con el fondo maroon tiene el valor block-axis
- Para que funcionen tienen el display box
:::
## Propiedad box-shadow
- La propiedad box-shadow se usa para aplicar una sombra a los elementos HTML.
```css
box-shadow: [horizontal offset] [vertical offset] [blur radius] [optional spread radius] [color];
```
#### horizontal offset
-	El desplazamiento horizontal (horizontal offset)(requerido) de la sombra, uno positivo significa que la sombra estará a la derecha del cuadro, un desplazamiento negativo colocará la sombra a la izquierda del cuadro.
#### vertical offset
- El desplazamiento vertical (vertical offset) (requerido) de la sombra, uno negativo significa que la sombra del cuadro estará sobre el cuadro, uno positivo significa que la sombra estará debajo del cuadro.
#### blur radius
- El radio de desenfoque  (blur radius) (obligatorio), si se establece en 0, la sombra será nítida, cuanto mayor sea el número, más borrosa será y más se extenderá la sombra. Por ejemplo, una sombra con 5 px de desplazamiento horizontal que también tiene un radio de desenfoque de 5 px tendrá una sombra total de 10 px.
####  spread radius
- El radio de dispersión (spread radius) (opcional), los valores positivos aumentan el tamaño de la sombra, los valores negativos disminuyen el tamaño. El valor predeterminado es 0 (la sombra tiene el mismo tamaño que el desenfoque).
#### color
- Color (obligatorio): toma cualquier valor de color, como hex, named, rgba o hsla . Si se omite el valor del color, las sombras de los cuadros se dibujan en el color de primer plano (texto color). Pero tenga en cuenta que los navegadores WebKit más antiguos (anteriores a Chrome 20 y Safari 6) ignoran la regla cuando se omite el color.

:::tip Info
- [css tricks](https://css-tricks.com/almanac/properties/b/box-shadow/)
- [developer mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)
:::

## Propiedad text-transform

- Puede forzar que el texto esté en mayúsculas, minúsculas o ambos usando esta propiedad CSS 

:::tip Valores
- [developer mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform)
- [css tricks](https://css-tricks.com/almanac/properties/t/text-transform/)
:::


## Propiedad column-count

- Divide el contenido de un elemento en el número especificado de columnas.

Ejemplo:

```html
<body>
    <style>
      .example {
      
        column-count: 4;
  
      }
    </style>
    <div class="example">
      <p>
        Nunc a vulputate turpis. Duis ornare lacus magna, vitae tincidunt leo
        elementum et.
      </p>

      <p>
        Nulla vitae magna sed sapien ultricies dapibus a non libero. Fusce
        lobortis adipiscing purus vel rhoncus.
      </p>

      <p>
        Proin blandit, tortor quis tristique porta, nisl est rhoncus turpis, non
        interdum nibh ligula sit amet dolor.
      </p>
      <p>
        Sed sagittis aliquam nulla vel viverra. Sed at augue eros. Nam tincidunt
        mi eu malesuada molestie.
      </p>
    </div>
  </body>

```

:::tip MAS INFO
- [column count](https://css-tricks.com/almanac/properties/c/column-count/)
- [column width](https://css-tricks.com/almanac/properties/c/column-width/)
- [column gap](https://css-tricks.com/almanac/properties/c/column-gap/)
- [column rule](https://css-tricks.com/almanac/properties/c/column-rule/)


:::

## Propiedad text-shadow
- La propiedad box-shadow se usa para aplicar una sombra a los textos
- Tiene 4 valores:
  - 1 valor = la coordenada X
  - 2 valor = la coordenada Y
  - 3 valor = el radio de desenfoque
  - 4 valor = el color de la sombra

:::tip info
- [css tricks](https://css-tricks.com/almanac/properties/t/text-shadow/)
- [developer mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow)
:::

## Propiedad object-fit
- Es una propiedad que se aplica a las imagenes principalmente
- Se aplica  para modificar la resolucion de imagenes
  
#### Valor contain
```css
object-fit: contain;
```
- Mantiene la resolución ajustándose al contenedor, pero no rellena espacio.
- Si el contenedor es más grande que la imagen, dejara espacio en blanco y dejara la imagen centrada.
  
#### Valor cover

```css
object-fit: cover;
```
- Sirve para que la imagen ocupe todo el contenedor
- Se ajusta la imagen al contenedor .
- Recorta la imagen si es necesario.
- Hace que se agrande lo mas posible, manteniendo la escala de resolución.
  

#### Valor none
```css
object-fit: none;
```
- Usa la resolución por defecto
- Agranda la imagen a la resolución que tiene que ser
- Usa el tamaño original de la imagen



  
#### Valor scale-down
```css
object-fit: scale-down;
```
- Se queda con la mejor propiedad
- ¿Qué es mas chiquito? El valor contain o none
- El mas chiquito lo elige.


:::tip Info
- [developer mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
- [w3school](https://www.w3schools.com/css/css3_object-fit.asp)
- [css-trick](https://css-tricks.com/almanac/properties/o/object-fit/)
:::








## Propiedad text-overflow
- Define como se muestra el texto que se encuentra afuera del contenedor.
- Para que esta propiedad funcione, se debe establecer estas propiedades-valor:
#### white-space: nowrap
- Esto sirve para que la línea no se comporte de la manera predeterminada (de forma predeterminada  , cuando se acaba el espacio, continua  en la parte de abajo, en una nueva línea) . Si no tenemos este atributo, el texto se adaptará al espacio asignado, haciendo crecer el elemento en altura, sin más.
#### width : Cualquier valor
- Tenemos que limitar la anchura del contenedor, porque si no, el contenedor se extendería hasta que pueda caber el contenido. Esta limitación de la anchura la podrías tener en un contenedor padre, o bien si no hay contenedor, será la propia dimensión en píxeles de la pantalla del dispositivo. Lo que está claro es que alguien tiene que limitar el espacio para que lleguen a ser necesarios esos recortes.
#### overflow: hidden
- También es importante, pues si no lo colocas, el texto simplemente se saldrá del contenedor, apareciendo en la página, pero mal maquetado. Este es el efecto que queremos evitar, que el texto se salga de su contenedor, quebrando donde sea necesario y colocando los puntos suspensivos.

Ejemplo:
```html
<body>

<style>
  div {
      width: 230px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
}
</style>
   <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dignissimos alias repellendus libero ut. Dolore explicabo rem praesentium dolorum amet. Accusantium exercitationem ea similique deserunt quos numquam quaerat totam at.
   Laboriosam consequuntur debitis eaque molestias, numquam ratione nihil neque. Dicta repellat excepturi velit, laboriosam perspiciatis quaerat. Expedita, debitis laudantium dolores provident magni esse ratione iste itaque quidem aliquid ipsam in!</div>
</body>

```

####  text-overflow: ellipsis;

- El valor ellipsis es para indicar que en el caso de no caber todo el texto, que coloque una "ellipsis", lo que llamamos puntos suspensivos "...".

- [Mas valores](https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow)
- [Problemas frecuentes](https://es.stackoverflow.com/questions/210041/no-logro-aplicar-bien-los-puntos-suspensivos-con-css)

##  Scroll-snap
- Nos permite crear puntos de anclajes al hacer scroll.
- Sirve para hacer sliders.
- CSS Scroll Snap nos permite declarar posiciones en nuestro scroll, de forma que podemos controlarlo mejor, especialmente al utilizar nuestros dedos para desplazarnos.
![Historia del scroll snap](https://midu.dev/images/specification-history.png)

:::tip Observacion
- Antes del 2016 , tenia mas propiedades y era mucho mas complejo.
- Después del 2016 , se empezó a trabajar como si fuera flexbox. 
:::
### Propiedad scroll-snap-type
- Esta propiedad CSS se tiene que usar en el contenedor de nuestro contenido donde queremos controlar el scroll y nos permite identificar el “tipo” de los “puntos de ajuste” de nuestro contenido. Dicho de otra forma, le diremos si queremos controlar el scroll en una dirección, otra, ninguna o ambas.

:::tip
puntos de anclajes === puntos de ajustes
:::

| Valores  | Explicación  |
| - | - |
|  none |  Cuando se hace scroll en el contenedor, se ignoran los puntos de ajuste. |
|  x |  Los puntos de ajuste son horizontales. |
|  y |  Los puntos de ajuste son verticales. |
|  both |  Los puntos de ajuste son tanto horizontales como verticales  |
#### scroll-snap-type acepta un segundo  valor 
- scroll-snap-type acepta un segundo  valor que determina si los puntos de ajustes son obligatorios o solo cuando el scroll se queda muy cerca del siguiente elemento.
  
| Valores  | Explicación  |
| - | - |
|  mandatory |  Al terminar de hacer scroll, el scroll se mueve automáticamente SIEMPRE al punto de ajuste que se haya determinado. Cuando se cambia el tamaño de la ventana, se cambia de orientación o se modifica el tamaño, SIEMPRE se moverá para satisfacer esto. |
|  proximity |  Al terminar de hacer scroll, el scroll se mueve automáticamente SÓLO cuando el scroll esté muy próximo al punto de ajuste que se haya determinado. Cuando se cambia el tamaño de la ventana, se cambia de orientación o se modifica el tamaño, SÓLO se moverá si se encuentra muy cerca de satisfacer la premisa anterior. |
### Propiedad scroll-snap-align
- Esta propiedad se usa en cada elemento que tengamos en nuestro contenedor y nos indica cómo se tendrá que alinear el elemento en el viewport.
- Esta propiedad crea puntos de ajustes en el "elemento"
  
| Valores  | Explicación  |
| - | - |
|  none |  La caja no tiene ningún punto de ajuste en su eje. |
|  start |  La caja tiene como punto de ajuste su inicio. |
|  end |  La caja tiene como punto de ajuste su final. |
|  center |  La caja tiene como punto de ajuste su centro. |

:::tip Recordatorio
- Todos los elementos HTML SON CAJAS 
- Cajas que tienen padding , border , contenido , etc.
:::

#### Ejemplo
- Hacemos un Slider con estas dos propiedades
```html
<!DOCTYPE html>
<html lang="en-us">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />

    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <div class="container">
      <h1>Slider con solo css</h1>
      <section class="slider">
        <img
          src="https://images.unsplash.com/photo-1647089490757-673016df4f4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1649437410171-2eddbda2d101?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1652752447710-8bf2a5cbe260?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1639739994690-0d3a27fde46f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80"
          alt=""
        />
      </section>
    </div>
    <style>
      .slider {
        display:flex;
        max-width:500px;
        height:300px;
        width:100%;
        overflow:scroll;
        scroll-snap-type: x mandatory;
      }

      .slider img {
        max-width:500px;
        width:100%;
        object-fit: cover;
        scroll-snap-align:center;
      }
    </style>
  </body>
</html>

```
:::tip info
- [scroll snap](https://midu.dev/css-scroll-snap-la-solucion-definitiva-a-la-creacion-de-sliders-en-la-web/)

:::



## Propiedad position
- Sirve para ubicar el elemento en alguna posición
- Posiciona los elementos.
- Cuando un objeto está posicionado altera el fujo HTML.
- Tambien adquieren nuevas propiedades

:::tip flujo HTML
- El flujo HTML es el orden en el que ponemos los elementos html
:::

#### Valor static
- Es el valor por defecto.
- Se considera que no esta posicionado.
- No adquiere nuevas propiedades.

#### Valor relative
- Su espacio en el DOM está reservado / el espacio que ocupa el elemento lo conserva. 
- No altera el flujo HTML
- Adquiere 4 propiedades(top,left,right,bottom)
- Te permite desplazar el elemento para arriba, abajo, izquierda, derecha (Propiedades Left , Right , bottom , Top)
- El punto de referencia (para mover el elemento) es su propia ubicacion.
- Adquiere la propiedad z-index

```css
       position: relative;
        left:20px;
        top:50px;

```
#### Valor absolute
- Desaparece el espacio que ocupa el elemento  (Los elementos HTML actuaran como si este no existiera)
- El elemento ya no tiene un espacio en el DOM.
- Adquiere las propiedades top,bottom,left,right.
- Te permite desplazar el elemento para arriba, abajo, izquierda, derecha (Propiedades Left , Right , bottom , Top)
- Su punto de referencia (para mover el elemento) va a ser el contenedor (si está posicionado) o el viewport (la pantalla del navegador)
- Solo puede tener como referencia al contenedor si está posicionado.
- Si las 4 propiedades (top,bottom,left,right) son 0 y el margin es auto, el elemento se va a centrar en el contenedor/viewport
- Se va a mover en base al primer ancestro posicionado  más cercano.
- El ancho del elemento se ajusta al contenido (Como si fuera display: inline-block)
  
:::tip Elemento posicionado
- Elemento posicionado: Cualquier elemento que tenga un position cuyo valor sea diferente a static.
- Si no hay ningún elemento posicionado , utiliza el viewport.
:::
```css
  position: absolute;
        left:20px;
        top:50px;
```
:::tip
El elemento no tiene un ancho fijo, por lo tanto va a tratar de ocupar todo el ancho posible para que se ubique en la posición left y right. Esto se omite si se ocupa la propiedad width.
:::
#### Valor fixed
- Es igual que absolute:
   - El ancho se ajusta al contenido
   - Adquiere las 4 propiedades (top,bottom,left,right)
   - Desaparece el espacio reservado del elemento / El elemento ya no tiene un espacio en el DOM.
   - Te permite desplazar el elemento para arriba, abajo, izquierda, derecha (Propiedades Left , Right , bottom , Top)
-  El elemento queda fijado  en el  viewport/pestaña.
-  El punto de referencia (para mover el elemento) es el viewport
- Generalmente se aplica en menus y publicidades.




:::tip
Para que no tape el texto, generalmente se usa margin-top (en el fixed ej. margin-top:-100px) y padding-top (en el body ej.           padding-top:100px)
:::
:::tip
El elemento no tiene un ancho fijo , por lo tanto va a tratar de ocupar todo el ancho posible para que se ubique en la posición left y right. Esto se omite si se ocupa la propiedad width.
:::

#### Valor sticky
- Es una mezcla de relative y fixed.
- Su espacio en el DOM está reservado / No altera el flujo HTML
- Se comporta como un fixed cuando llega a la ubicacion que nosotros le especificamos (con las propiedades left,right,bottom,up).
- Si no usamos alguna de las 4 propiedades no es fixed.
- Siempre debe tener un elemento ancestro con un mecanismo de desplazamiento (scroll , por defecto es el body).
- Cuando el elemento  llega a la ubicación que nosotros le  especificamos y se encuentra dentro del elemento ancestro que contiene el mecanismo de desplazamiento, queda fijo.

:::tip ¿Como añadir mecanismo de desplazamiento?
- Con la propiedad overflow:scroll;
:::


:::tip info
- [Position](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
- [Position #2](https://css-tricks.com/almanac/properties/p/position/)
- [Positioning ](https://www.w3schools.com/css/css_positioning.asp)
- [Position #3](https://developer.mozilla.org/es/docs/Web/CSS/position)
:::
### Propiedad left/right/top/bottom
- Se utilizan para mover al elemento.
- Top: Mueve el elemento para abajo
- Bottom : Mueve el elemento para arriba.
- Left: Mueve el elemento para la derecha
- Right : Mueve el elemento para la izquierda
- Pueden recibir valores positivos y negativos
- Se le da prioridad a las propiedades top y left.
    - El left tiene mas prioridad que right
    - El top tiene mas prioridad que bottom.

:::tip Explicación
- [¿Porque la propiedad bottom(abajo) mueve para arriba?](https://www.arkaitzgarro.com/css2/capitulo-5.html)

:::
- Son 300px para abajo desde el borde de arriba del elemento.
```css
top:300px;
```
- Son 30px para la derecha desde el borde izquierdo del elemento.
```css
left:30px
```
- Son 30px para la izquierda desde el borde derecho del elemento.
```css
right:30px
```
- Son 300px para arriba desde el borde de abajo del elemento.
```css
bottom:300px;
```
### Propiedad z-index
- Se aplica en todos los elementos posicionados (elementos cuya propiedad position tenga cualquier valor menos static)
- Es el orden para poner un elemento por encima del otro (el que tenga mayor valor se va a poder ver primero/mejor/superponer).
- Ordena en el eje Z.
- Por defecto el valor de z-index es 0 (y tiene mas prioridad el ultimo por jerarquia cascada)
  
:::tip
Para evitar problemas en el futuro (por si quiere poner elementos en el medio) , se recomienda usar como valor  intervalos de 50.

:::


:::warning
- El z-index tiene problemas entre los padres e hijos.
- Afecta a las demas cajas que no estan posicionada pero AL HIJO NO
- Ósea que podés poner el  z-index que quieras pero el hijo va a seguir superponiéndose.
- Para que el padre se sobreponga, al hijo hay que ponerle un z-index: -1 y al padre no darle un z-index.
- Esto puede generar problemas


:::

## Lógical properties
- Es una forma de maquetar como float , flex y grid.
- Es un modulo CSS que introduce propiedades y valores lógicos
- Sirve para controlar el diseño de forma lógica.
- Remplazaria a las propiedades fisicas.
- Nos permiten dar estilos sin necesidad de usar width , height , padding , etc.
- Nos permite “simplificar” el uso de propiedades de box-model (propiedades físicas) con “propiedades lógicas”.
- Todas las propiedades lógicas se van a aplicar en base al writting mode.
- Todas las propiedades “lógicas” también tienen shorthand.


:::tip info
- [CSS Logical Properties and Values - Developer mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties)
- [CSS Logical Properties and Values - Css tricks](https://css-tricks.com/css-logical-properties-and-values/)
- [CSS Logical Properties](https://css-tricks.com/css-logical-properties/)
- [Logical Properties](https://web.dev/learn/css/logical-properties/)
:::

#### Ejemplo
```html
<body>

   <div class="fisico"></div>
   <div class="logico"></div>

       <style>
            .fisico {
              width:80px;
              height:80px;
              background:red;
              border-top: solid 1em blue;
              border-bottom: solid 1em blue;
              border-left: solid 1em black;
              border-right: solid 1em black;
              margin-top:2em;
              margin-bottom:2em;
              margin-left:auto;
              margin-right:auto;
            }

            .logico {
              inline-size:80px;
              block-size: 80px;
              background: yellow;
              border-inline: solid 1em black;
              border-block: solid 1em blue;
              margin-block:2em;
              margin-inline: auto;
            }
       </style>
  </body>

```

## Propiedad transform-origin
- Se utiliza junto con la  [propiedad transform](../CSS/propiedades2#propiedad-transform)
- Cuando utilizas la propiedad transform , estas realizando una transformación.
- Esta propiedad te permite cambiar el punto de origen de una transformación.
- Puede tomar dos valores (Los ejes X e Y, para transformaciones 2D) o tres valores (Los ejes X, Y, Z, para transformaciones 3D) .
- De forma predeterminada, el origen de una transformación es "50% 50%", que está exactamente en el centro de cualquier elemento dado.
- Los valores pueden ser longitudes, porcentajes o las palabras claves : top , left , right , bottom , center.
- El primer valor es la posición horizontal, el segundo valor es la vertical y el tercer valor representa la posición en el eje Z
- El tercer valor solo funcionará si está utilizando transformaciones 3D y no puede ser un porcentaje.

#### Ejemplo

```html
 <div class="box box-rotate"></div>

    <style>
      .box {
        background: lightblue;
        width: 200px;
        height: 200px;
        margin: 20px auto;
        transition: transform 1s linear;
        transform-origin: top left;
      }

      .box-rotate:hover{
        transform: rotate(360deg);
      }

      button {
        display: block;
        margin: auto;
      }
    </style>

```
:::tip Observacion
Cambiar el origen a "arriba a la izquierda" (como en la demostración anterior) hace que el elemento use la esquina superior izquierda del elemento como punto de rotación.

:::

:::tip info
- [transform-origin - Css tricks](https://css-tricks.com/almanac/properties/t/transform-origin/)
- [CSS transform-origin Property](https://www.w3schools.com/cssref/css3_pr_transform-origin.php)
- [transform-origin - Developer mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin)

:::


## Propiedad transform-style
- Establece si los elementos secundarios (hijos) de un elemento se colocan en el espacio 3D o en el plano (como si fuera 2D y el eje Z no existiera) del elemento 

#### Valor flat
- Indica que los elementos secundarios del elemento se encuentran en el plano del  elemento.
- En este valor , el "eje Z" no existe.
#### Valor preserve-3d
- Indican que los elementos secundarios del elemento deben colocarse en el espacio 3D del elemento.
- En este valor , el "eje Z" existe.


#### Ejemplo
```html
<!DOCTYPE html>
<html>
<head>
<style>
#example-element {
  margin: 50px;
  width: 100px;
  height: 100px;
  transform-style: preserve-3d;
  transform: rotate3d(1, 1, 1, 30deg);
}

.face {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: inherit;
  font-size: 60px;
  color: #fff;
}

.front {
  background: rgba(90, 90, 90, 0.7);
  transform: translateZ(50px);
}

.back {
  background: rgba(0, 210, 0, 0.7);
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgba(210, 0, 0, 0.7);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgba(0, 0, 210, 0.7);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgba(210, 210, 0, 0.7);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgba(210, 0, 210, 0.7);
  transform: rotateX(-90deg) translateZ(50px);
}
</style>
</head>
<body>


  <section id="example-element">
    <div class="face front">1</div>
    <div class="face back">2</div>
    <div class="face right">3</div>
    <div class="face left">4</div>
    <div class="face top">5</div>
    <div class="face bottom">6</div>
  </section>
  
  <div class="checkbox">
    <label for="preserve"><code>preserve-3d</code></label>
    <input type="checkbox" id="preserve" checked />
  </div>
  <script>
    const cube = document.getElementById('example-element');
const checkbox = document.getElementById('preserve');

checkbox.addEventListener('change', () => {
  cube.style.transformStyle = checkbox.checked ? 'preserve-3d' : 'flat';
})
    </script>

</body>
</html>

```

:::tip info
[transform-style](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style)

:::

## Propiedad text-transform
- Se usa para “transformar” el texto del elemento.
- Se puede usar para hacer que el texto aparezca en mayúsculas o minúsculas, o con cada palabra en mayúscula. También puede ayudar a mejorar la legibilidad 
- Algunos de sus valores:
   - capitalize : Convierte la primera letra de cada palabra en mayuscula.
   - uppercase: Convierte todos los caracteres a mayúscula.
   - lowercase : Convierte todos los caracteres a minúscula.

:::tip info
- [text-transform](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform)

:::

