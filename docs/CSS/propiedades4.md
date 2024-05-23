---
sidebar_position: 5
---
# Propiedades #4

## Propiedad text-decoration
- Establece la apariencia de las líneas decorativas en el texto.
- Una línea decorativa es una “línea” que se ubica debajo del texto (texto subrayado).
- Es un shorthand de las propiedades:
  -	Text-decoration-color :  Establece el color de la “línea”
  -	Text-decoration-line: Establece el tipo de “línea”
  -	Text-decoration-style : Establece el estilo de la “línea”  
  -	Text-decoration-thickness : Establece el grosor de la “línea”


#### Propiedad text-decoration-line
- Establece el tipo de “línea”
- Valores:
  - None: El texto no tiene ninguna “línea”
  - underline: La línea se ubica debajo del texto.
  - Overline:  La línea se ubica encima del texto.
  - Line-through : Cada línea de texto , tiene una “línea” que pasa por su centro.

```css
      text-decoration: underline;
```
Es lo mismo que:

```css
     text-decoration-line: underline;
```

#### Propiedad text-decoration-color
- Establece el color de la “línea”.

```css
 text-decoration-line: underline;
      text-decoration-color: red;

```
Es lo mismo que:
```css
     text-decoration: underline red;
```

#### Propiedad text-decoration-style
- Establece el estilo de la línea
- Valores:
   - Solid : Dibuja una sola línea
   - Double : Dibuja una línea doble.
   - Dotted : Dibuja una línea de puntos
   - Dashed : Dibuja una línea discontinua
   - Wavy : Dibuja una línea ondulada

```css
 text-decoration: underline red wavy;
```
Es lo mismo que:
```css
   text-decoration-line: underline;
      text-decoration-color: red;
       text-decoration-style: wavy;

```

#### Propiedad text-decoration-thickness
- Establece el grosor de la línea.

```css
   text-decoration-line: underline;
      text-decoration-color: red;
       text-decoration-style: solid;
       text-decoration-thickness: 5px;

```
Es lo mismo que:
```css
   text-decoration: underline red solid 5px;
```

:::tip info
- [text-decoration](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration)
- [When to Avoid the text-decoration Shorthand Property](https://css-tricks.com/when-to-avoid-css-text-decoration-shorthand/)
:::

## Propiedad text-align

- La propiedad text-align se usa para alinear horizontalmente el contenido de un elemento html.
-  Esta propiedad solo funciona si se aplica a elementos de bloque, si necesitas alinear el texto de una etiqueta inline como &lt;strong> o &lt;span> antes debes convertirlo a un elemento de bloque usando la propiedad display:block;
- Esta propiedad también funciona en una “celda” de tabla.
- Valores:
   - Left: El contenido se alinea a la izquierda
   - Right: El contenido se alinea a la derecha
   - Center: El contenido se centra
   - Justify : Estira las “lineas de texto” para que cada línea tenga el mismo ancho (como en periódicos y revistas) .  Excepto la última línea.
   - Justify-all : Identico a justify , pero también se aplica la última línea.
   - Match-parent: Similar a inherit pero los valores start y end se calculan de acuerdo con la propiedad direction del elemento padre y se remplazan por el valor left o right.
   - Start: Lo mismo que left si la dirección fuera de izquierda a derecha y right si la dirección fuera de derecha a izquierda.
   - End:  Lo mismo que right si la dirección fuera de izquierda a derecha y leftsi la dirección fuera de derecha a izquierda.

```html
 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, nostrum minus, incidunt et magnam quod earum ipsa magni suscipit dolorem vel illum illo modi harum, aut eius pariatur voluptas at!</p>
  <style>
    p {
 
      text-align:center;
    }
  </style>

```

:::tip info
- [text-align - Developer mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align#:~:text=The%20text%2Dalign%20CSS%20property,but%20in%20the%20horizontal%20direction)
- [CSS text-align propiedad para alinear el texto de una etiqueta html](https://devxdev.net/css/text-align/)
- [text-align - Stackdiary](https://stackdiary.com/css/text-align/)

:::

## Propiedad direction
- La propiedad direction se utiliza para indicar en qué dirección fluye el texto
- Solo funciona en los elementos HTML de tipo bloque.
- Valores:
    - Ltr: El texto y otros elementos van de izquierda a derecha . Valor por defecto
    - Rtl : El texto y otros elementos van de derecha a izquierda.
- Para que la propiedad direction tenga algún efecto en los elementos en linea, el  valor de la [propiedad unicode-bidi](https://developer.mozilla.org/en-US/docs/Web/CSS/unicode-bidi) debe ser embed o override.

```html
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, nostrum minus, incidunt et magnam quod earum ipsa magni suscipit dolorem vel illum illo modi harum, aut eius pariatur voluptas at!</p>
  <style>
    p {
 
      direction: rtl;
    }
  </style>

```

:::tip info
- [direction](https://developer.mozilla.org/en-US/docs/Web/CSS/direction)

:::

#### Atributo DIR
- Es un atributo HTML que cumple la misma función que la propiedad direction.

```html
   <p dir="rtl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, nostrum minus, incidunt et magnam quod earum ipsa magni suscipit dolorem vel illum illo modi harum, aut eius pariatur voluptas at!</p>
```

## Propiedad opacity

- La propiedad CSS opacity define la transparencia de un elemento
- Su valor se encuentra entre 0 y 1. 

| Valor | Significado |
| - | - |
|  0 |  El elemento es transparente (invisible) |
|  Cualquier valor entre 0 y 1  |  El elemento es translúcido. |
|  1  |  El elemento es opaco (sólido). |


```html
   <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, nostrum minus, incidunt et magnam quod earum ipsa magni suscipit dolorem vel illum illo modi harum, aut eius pariatur voluptas at!</p>
   <style>
      p {
         opacity: 0.5;
      }
   </style>
```

:::tip info
- [opacity](https://developer.mozilla.org/es/docs/Web/CSS/opacity)

:::

## Propiedades  overflow - overflow-wrap - word-break

#### Propiedad overflow-wrap
- La propiedad overflow-wrap en CSS permite  dividir líneas de texto dentro de un elemento  para evitar que el texto se desborde de su contenedor cuando una palabra es demasiado larga para caber en una línea.
- Por ejemplo, puedes utilizar overflow-wrap de la siguiente manera:

```html
<p class="overflow-wrap-anywhere">
  This is a very very very very very very very very very very very very very very very very long word that will not fit in its container.
</p>
```


```css
.overflow-wrap-anywhere {
  width: 150px;
  margin: auto;
  padding: 15px 15px;
  color: white;
  background-color: green;
  font-size: 20px;
  width: 150px;
  overflow-wrap: anywhere;
}

```
:::tip Observación
- Esto permitirá al navegador dividir palabras largas en varias líneas si se desbordan del contenedor.
- Al utilizar overflow-wrap, puedes evitar que el texto se desborde de su contenedor y mejorar la apariencia y la legibilidad de tu página web.
:::
- Los valores para overflow-wrap son:
   - normal: Las palabras no se dividirán, incluso si se desbordan del contenedor. (Este es el valor predeterminado)
   - break-word: Las palabras demasiado largas para caber en un contenedor se dividirán en dos líneas.
   - anywhere: Permite que el navegador divida una palabra en  dos o más líneas.


#### Propiedad word-break
- La propiedad CSS word-break especifica cuando  se deben romper(dividir) las palabras.
- La propiedad word-break puede tomar los siguientes valores:
   - normal: Utiliza las reglas de salto de línea predeterminadas.
   - break-all: Rompe las palabras en cualquier carácter para prevenir el desbordamiento.
   - keep-all: No se deben realizar saltos de línea dentro de las palabras, excepto en los espacios en blanco. Este valor no debe utilizarse para texto CJK (chino, japonés, coreano).
   - break-word: Rompe las palabras en puntos arbitrarios para prevenir el desbordamiento. (Ya no se usa)
   - auto-phrase: Tiene el mismo efecto que  word-break: normal excepto que se realiza un análisis específico del idioma para mejorar los saltos de palabras al no colocarlos en medio de frases naturales. (Experimental)


   - Ejemplo:


```html
<p class="word-break-break-all">
  GeeksforGeeksGeeksGeeks. Un portal de ciencias de la computación para geeks.
</p>

```

```css
.word-break-break-all {
  width: 142px;
  border: 1px solid #000000;
  word-break: break-all;
}

```

#### Diferencias entre overflow-wrap y word-break
-  La propiedad overflow-wrap se utiliza para especificar si el navegador debe insertar saltos de línea para evitar que el texto se desborde de su contenedor. Enfatiza cómo manejar el desbordamiento.
- La propiedad word-break  se utiliza para especificar cómo el navegador debe dividir una palabra al final de una línea. Enfatiza cómo dividir palabras.
- La principal diferencia entre overflow-wrap y word-break es que overflow-wrap solo rompe una palabra si es más larga que el ancho máximo de la caja de línea, mientras que word-break puede romper una palabra en cualquier carácter, incluso en medio de una palabra.
- En resumen, overflow-wrap se utiliza para evitar el desbordamiento de texto, mientras que word-break se utiliza para dividir palabras al final de una línea. 

#### Propiedad overflow
- La propiedad overflow en CSS se utiliza para controlar qué sucede cuando el contenido de un elemento excede el tamaño de la caja. Se especifica si se debe recortar el contenido, mostrar barras de desplazamiento(scroll) o mostrar el contenido excedente fuera de la caja del elemento.
- La propiedad overflow tiene dos subpropiedades: overflow-x y overflow-y, que controlan el desbordamiento en las direcciones horizontal y vertical, respectivamente.
- La propiedad overflow-y puede tomar uno de los siguientes valores:
   - visible: El valor predeterminado, que permite que el contenido excedente sea visible fuera de la caja del elemento.
   - hidden: Oculta el contenido excedente.
   - scroll: Agrega una barra de desplazamiento (scroll) al elemento, lo que permite al usuario desplazarse y ver el contenido excedente.
   - auto: Similar a scroll, pero solo agrega una barra de desplazamiento si el contenido excede las dimensiones del elemento.
- Ejemplo:


```html
<div class="container">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
</div>
```

```css
.container {
  width: 200px;
  height: 100px;
  border: 1px solid black;
  overflow: auto; /* Agregamos la propiedad overflow */
}
```