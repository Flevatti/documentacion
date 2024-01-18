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