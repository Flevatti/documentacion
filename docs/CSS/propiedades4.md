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
- La propiedad `overflow-wrap` en CSS permite dividir palabras largas cuando no hay suficiente espacio para mostrarlas completas en una línea, evitando que el texto se desborde de su contenedor.
- Los valores de `overflow-wrap` son:
  - `normal`: Las palabras no se dividirán. Si una palabra es demasiado larga para caber en el contenedor, podría desbordarse. (Valor predeterminado).
  - `break-word`: Si una palabra es demasiado larga para caber en una línea, el navegador podrá dividirla para evitar el desbordamiento.
  - `anywhere`: Similar a `break-word`, pero el navegador tiene más libertad para decidir dónde dividir una palabra.
- Por ejemplo:
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

#### Propiedad word-break
- La propiedad `word-break` en CSS indica cómo puede dividir el navegador las palabras cuando no hay suficiente espacio para mostrarlas en una sola línea.
- La propiedad `word-break` puede tomar los siguientes valores:
  - `normal`: Utiliza el comportamiento predeterminado del navegador para dividir el texto.
  - `break-all`: Permite dividir una palabra en cualquier carácter para evitar que se desborde del contenedor.
  - `keep-all`: Evita dividir las palabras. Los saltos de línea solo se realizarán en los espacios en blanco.
  - `break-word`: Tiene el mismo efecto que `overflow-wrap: anywhere` combinado con `word-break: normal`. Es un valor obsoleto y se recomienda utilizar otras opciones.
  - `auto-phrase`: Similar a `normal`, pero intenta evitar saltos de línea que separen partes de una misma frase. (Experimental).
- Por ejemplo:


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
- `overflow-wrap` se utiliza para evitar que las palabras largas se salgan de su contenedor.
- `word-break` se utiliza para definir cómo pueden dividirse las palabras.
- La principal diferencia es que `overflow-wrap` divide una palabra solo cuando es necesario para evitar que se salga del contenedor, mientras que `word-break` permite definir cómo se pueden dividir las palabras.


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


## Palabras clave `min-content`, `max-content` y `fit-content`
#### `min-content`
- Es el tamaño mínimo que puede tener una caja sin que su contenido se desborde.
#### `max-content`
- Es el tamaño que necesita una caja para mostrar todo su contenido en una sola línea.
#### `fit-content`
- Utiliza el espacio disponible del contenedor, pero garantiza que el tamaño final nunca sea menor que `min-content` ni mayor que `max-content`.
#### Función `fit-content(argument)`
- Permite indicar un tamaño deseado para el elemento.
- El navegador intentará utilizar ese tamaño siempre que sea posible.
- Utiliza la siguiente fórmula:
```css
min(max-content, max(min-content, argument))
```
- Es decir, toma el valor más pequeño entre:
  - `max-content`.
  - El valor más grande entre `min-content` y `argument`.
- Esto implica que:
  - Nunca será más pequeño que `min-content`.
  - Intentará utilizar el valor indicado en `argument`.
  - Nunca será más grande que `max-content`.
  - En otras palabras, el tamaño final estará comprendido entre `min-content` y `max-content`, intentando utilizar el valor indicado como argumento.

#### Ejemplo

```html

<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>min-content, max-content y fit-content</title>

<style>
  * {
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    padding: 2rem;
  }

  .container {
    width: 400px;
    border: 2px dashed #999;
    padding: 1rem;
    margin-bottom: 2rem;
  }

  .box {
    border: 2px solid black;
    padding: 1rem;
    margin-bottom: 1rem;
    background: #f5f5f5;
  }

  /* 1. min-content */
  .min-content {
    width: min-content;
  }

  /* 2. max-content */
  .max-content {
    width: max-content;
  }

  /* 3. fit-content */
  .fit-content {
    width: fit-content;
  }

  /* 4. fit-content(argument) */
  .fit-content-arg {
    width: fit-content(200px);
  }
</style>
</head>
<body>

  <h1>Palabras clave de tamaño intrínseco</h1>

  <div class="container">

    <h2>min-content</h2>

    <div class="box min-content">
      Esta es una frase bastante larga para demostrar cómo funciona min-content.
    </div>

    <p>
      La caja se reduce al mínimo posible sin que el contenido se desborde.
    </p>

  </div>

  <div class="container">

    <h2>max-content</h2>

    <div class="box max-content">
      Esta es una frase bastante larga para demostrar cómo funciona max-content.
    </div>

    <p>
      La caja crece lo necesario para mostrar todo el contenido en una sola línea.
    </p>

  </div>

  <div class="container">

    <h2>fit-content</h2>

    <div class="box fit-content">
      Esta es una frase bastante larga para demostrar cómo funciona fit-content.
    </div>

    <p>
      La caja utiliza el espacio disponible, pero nunca será menor que
      min-content ni mayor que max-content.
    </p>

  </div>

  <div class="container">

    <h2>fit-content(200px)</h2>

    <div class="box fit-content-arg">
      Esta es una frase bastante larga para demostrar cómo funciona fit-content(200px).
    </div>

    <p>
      El navegador intentará utilizar 200px, respetando siempre los límites
      de min-content y max-content.
    </p>

  </div>

</body>
</html>
```
:::tip Observación
`fit-content()` no funciona con la propiedad `width` en algunos navegadores. Su uso más habitual es en CSS Grid, por ejemplo en `grid-template-columns`.
:::

## Propiedad `text-wrap` 
- Permite controlar cómo se distribuye el texto dentro de un elemento. 
- Es decir, permite indicar al navegador si el texto puede dividirse en varias líneas y, en caso de hacerlo, bajo qué criterio.
#### Valores
- `wrap`: El texto se dividirá en varias líneas para ajustarse al ancho del contenedor y evitar desbordamientos. Cuando ya no haya espacio para una palabra, se generará un salto de línea.
- `nowrap`: El texto no tendrá saltos de línea automáticos y continuará en una sola línea.
- `balance`: Al igual que `wrap`, el texto se ajustará al contenedor sin desbordarse. Sin embargo, intentará que todas las líneas tengan una longitud similar, evitando líneas demasiado largas o demasiado cortas. Es especialmente útil para títulos.
- `pretty`: Al igual que `wrap`, el texto se ajustará al contenedor sin desbordarse. A diferencia de `balance`, utiliza un algoritmo más complejo que prioriza la legibilidad. Para ello intenta: 
  - Evitar que una única palabra quede sola en la última línea. 
  - Evitar líneas excesivamente largas o demasiado cortas. 
  - Reducir el uso de guiones al dividir palabras.
  - Evitar que el lector se distraiga mejorando la apariencia visual del texto.
- `stable`: Es una opción pensada para elementos con `contenteditable` o contenido editable. Se comporta de forma similar a `wrap`, pero mientras el usuario edita el texto mantiene estables (congeladas) las líneas anteriores a la que se está modificando, evitando que se reorganicen constantemente.
- `auto`: El navegador decide qué valor usar.
#### Ejemplo
```html
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>text-wrap ejemplos</title>

<style>
  body {
    font-family: Arial, sans-serif;
    padding: 2rem;
  }

  .box {
    width: 250px;
    border: 2px solid #333;
    padding: 1rem;
    margin-bottom: 2rem;
  }

  .wrap {
    text-wrap: wrap;
  }

  .nowrap {
    text-wrap: nowrap;
  }

  .balance {
    text-wrap: balance;
  }

  .pretty {
    text-wrap: pretty;
  }

  .stable {
    text-wrap: stable;
  }

  .auto {
    text-wrap: auto;
  }
</style>
</head>

<body>

<h1>Propiedad text-wrap</h1>

<h2>wrap</h2>
<div class="box wrap">
  Esta es una frase bastante larga para demostrar cómo el texto se ajusta al contenedor y se divide en varias líneas.
</div>

<h2>nowrap</h2>
<div class="box nowrap">
  Esta es una frase bastante larga para demostrar cómo el texto no se divide en varias líneas.
</div>

<h2>balance</h2>
<div class="box balance">
  Esta es una frase bastante larga para demostrar cómo el texto intenta equilibrar las líneas para que tengan longitudes similares.
</div>

<h2>pretty</h2>
<div class="box pretty">
  Esta es una frase bastante larga para demostrar cómo el texto intenta mejorar la legibilidad evitando cortes incómodos.
</div>

<h2>stable</h2>
<div class="box stable" contenteditable="true">
  Puedes editar este texto para ver cómo stable mantiene estables las líneas anteriores mientras escribes.
</div>

<h2>auto</h2>
<div class="box auto">
  Esta es una frase bastante larga para demostrar cómo el navegador decide automáticamente el comportamiento del texto.
</div>

</body>
</html>

```
## Propiedad `object-position` 
- Se suele utilizar junto con `object-fit` para definir la posición de la imagen dentro del contenedor.
- Su valor por defecto es `50% 50%`, lo que significa que el centro de la imagen se ubica en el centro del contenedor.
- Permite indicar qué parte de la imagen debe mostrarse cuando esta ha sido ajustada mediante `object-fit`.
- Es como `background-position`, pero para imágenes o videos, no para imágenes de fondo.
- Al igual que `background-position`, puede recibir 1, 2 o 4 valores:
  - 1 valor: Define únicamente el desplazamiento horizontal, dejando el vertical en `center`.
  - 2 valores: Definen el desplazamiento horizontal y vertical.
  - 4 valores: Cada desplazamiento se define mediante una palabra clave acompañada de un valor (ver `background-position`).
- Ejemplo:
```html
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>object-position</title>

<style>
* {
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  margin: 20px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.example {
  border: 1px solid #ccc;
  padding: 10px;
}

.container {
  width: 300px;
  height: 180px;
  border: 2px solid #333;
  overflow: hidden;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 1 valor */
.one img {
  object-position: right;
}

/* 2 valores */
.two img {
  object-position: right bottom;
}

/* 4 valores */
.four img {
  object-position: right 50px bottom 20px;
}
</style>
</head>
<body>

<h1>Ejemplos de object-position</h1>

<div class="grid">

  <div class="example one">
    <h2>1 valor</h2>

    <pre><code>object-position: right;</code></pre>

    <div class="container">
      <img src="https://picsum.photos/id/237/800/500" alt="">
    </div>
  </div>

  <div class="example two">
    <h2>2 valores</h2>

    <pre><code>object-position: right bottom;</code></pre>

    <div class="container">
      <img src="https://picsum.photos/id/237/800/500" alt="">
    </div>
  </div>

  <div class="example four">
    <h2>4 valores</h2>

    <pre><code>object-position: right 50px bottom 20px;</code></pre>

    <div class="container">
      <img src="https://picsum.photos/id/237/800/500" alt="">
    </div>
  </div>

</div>

</body>
</html>
```

## Propiedades de scroll
#### Propiedad `scrollbar-width`
- Define el grosor o ancho de la barra de desplazamiento (scroll), permitiendo ajustar su apariencia dentro del diseño de la página.
- Valores posibles:
  - `auto`: Ajusta automáticamente el ancho de la barra según la configuración predeterminada del navegador. Es el valor por defecto.
  - `thin`: Establece una barra de desplazamiento más delgada que la predeterminada.
  - `none`: Oculta completamente la barra de desplazamiento, aunque el contenido sigue siendo desplazable.
  - `initial`: Restablece el valor por defecto de la propiedad.
  - `inherit`: Hereda el valor del elemento padre.
#### Propiedad `scrollbar-color`
- Permite cambiar el color de la barra de desplazamiento (scroll).
- Si se indican dos valores:
  - El primero define el color del control de la barra de scroll (el elemento que desliza el usuario, llamado `thumb`). También puede afectar el color de las flechas en algunos navegadores.
  - El segundo define el color del fondo de la barra de scroll (llamado `track`).
![thumb and track](https://i0.wp.com/css-tricks.com/wp-content/uploads/2019/04/scrollbar-track-2.jpg?ssl=1)
#### Propiedad `scrollbar-gutter`
- Permite reservar espacio para la barra de desplazamiento (scroll).
- Evita cambios de diseño cuando el scroll aparece o desaparece.
- Define si el espacio reservado para el scroll se mantiene siempre o solo cuando es necesario.
- El "gutter" es el espacio donde se muestra la barra de desplazamiento dentro del elemento.
- El navegador puede usar dos tipos de barras de desplazamiento:
  - **Clásicas**: Ocupan espacio dentro del elemento cuando aparecen.
  - **Superpuestas**: Se dibujan encima del contenido sin ocupar espacio.
- Valores posibles:
  - `auto`: Valor inicial. Las barras de desplazamiento clásicas ocupan espacio en la interfaz cuando hay `overflow: auto` o `scroll`. En cambio, las barras superpuestas se muestran encima del contenido sin ocupar espacio.
  - `stable`: Reserva espacio para la barra de desplazamiento incluso con `overflow: hidden`. Es ideal para evitar cambios de diseño.
  - `both-edges`: Reserva espacio en ambos lados del contenedor para lograr diseños más simétricos.
##### Ejemplo
```html
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Propiedades de scroll</title>

<style>
body{
  font-family: Arial, sans-serif;
  margin: 20px;
}

section{
  margin-bottom: 40px;
}

.box{
  width: 300px;
  height: 150px;
  border: 2px solid #333;
  overflow: auto;
}

/* scrollbar-width */
.thin-scroll{
  scrollbar-width: thin;
}

.none-scroll{
  scrollbar-width: none;
}

/* scrollbar-color */
.color-scroll{
  scrollbar-color: red lightgray;
}

/* scrollbar-gutter */
.gutter-auto{
  scrollbar-gutter: auto;
}

.gutter-stable{
  scrollbar-gutter: stable;
}

.gutter-both{
  scrollbar-gutter: stable both-edges;
  color:red;
}
</style>
</head>

<body>

<h1>Propiedades de scroll</h1>

<section>
<h2>scrollbar-width</h2>

<div class="box thin-scroll">
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum cum doloremque dolores nihil accusamus velit similique quas explicabo dicta reiciendis vitae quam minus numquam adipisci sapiente maiores aliquid, dignissimos optio?
Unde eum impedit repellat illum asperiores, cumque nobis amet. Amet, repellendus blanditiis impedit dolorem modi ad iure voluptas, quis ducimus consequatur vel dolores error dolor cumque omnis, odio exercitationem consequuntur.
Ratione ab exercitationem qui iure vero animi nostrum, at est incidunt? Doloribus, obcaecati excepturi. Tempore sit nulla deleniti, voluptas accusantium in aut quae maiores quaerat, ea dolores sapiente corrupti modi?</p>
</div>

<br>

<div class="box none-scroll">
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum cum doloremque dolores nihil accusamus velit similique quas explicabo dicta reiciendis vitae quam minus numquam adipisci sapiente maiores aliquid, dignissimos optio?
Unde eum impedit repellat illum asperiores, cumque nobis amet. Amet, repellendus blanditiis impedit dolorem modi ad iure voluptas, quis ducimus consequatur vel dolores error dolor cumque omnis, odio exercitationem consequuntur.
Ratione ab exercitationem qui iure vero animi nostrum, at est incidunt? Doloribus, obcaecati excepturi. Tempore sit nulla deleniti, voluptas accusantium in aut quae maiores quaerat, ea dolores sapiente corrupti modi?</p>
</div>
</section>

<section>
<h2>scrollbar-color</h2>

<div class="box color-scroll">
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam blanditiis tempore animi praesentium fuga neque obcaecati, quas tenetur inventore sequi minima ipsum eveniet aperiam mollitia iste maiores quasi quaerat quia?
Aperiam esse quae quasi corporis. Iste, eaque sint consequuntur, id minus aperiam delectus facilis perferendis ad vero asperiores sed amet nobis officiis corporis enim voluptas. Consequatur ipsam magnam libero? Incidunt!
Praesentium officia, maiores error quisquam quibusdam debitis, perferendis, animi ad cupiditate enim ipsum delectus minus laudantium veniam illum eveniet laboriosam ex modi ut asperiores fugiat consectetur. Eaque quia non expedita.</p>
</div>
</section>

<section>
<h2>scrollbar-gutter</h2>

<div class="box gutter-auto">
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore consectetur recusandae fugit consequuntur, quos itaque quo iusto cupiditate rem ipsam similique cum commodi aut? Voluptates quas nam repellat nulla unde.
Recusandae, distinctio dolorem, at voluptate asperiores enim, voluptas quasi iste dolor cumque illo? Harum voluptatibus asperiores natus dolorem mollitia laboriosam, expedita dicta ducimus porro itaque ea aperiam architecto deleniti. Non!
Possimus illum, ab rerum harum quaerat excepturi corrupti maiores tenetur, fuga quos eius distinctio reprehenderit ipsam, magni architecto numquam accusantium? Doloremque quaerat maiores eveniet soluta praesentium ut rerum vel nemo?</p>
</div>

<br>

<div class="box gutter-stable">
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem fuga, nemo molestiae consectetur provident laudantium officiis laborum expedita, sequi tenetur a sint sed dolorem, sunt aut officia magnam dignissimos voluptatibus!
Delectus consequuntur dolores necessitatibus reiciendis numquam, nesciunt vel est cupiditate nihil perspiciatis, quidem consectetur natus voluptatem? Asperiores qui maxime numquam, saepe, voluptatibus quae hic, iusto impedit blanditiis incidunt minus. Non.
Molestias esse autem, nulla explicabo reprehenderit obcaecati labore dicta eligendi aut nam, beatae ea quam. Quia, quaerat consectetur architecto porro corrupti optio reiciendis aliquid, ipsum soluta magni odio cupiditate voluptatem.</p>
</div>

<br>

<div class="box gutter-both">
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic a accusantium autem dolorem saepe voluptas soluta odio necessitatibus quaerat dolores? Ex harum quidem sint omnis porro veritatis ipsa voluptates laborum!
Ullam tempora obcaecati porro repellendus quo! In, praesentium culpa nam quaerat tempore beatae ipsa ab optio nemo, inventore repellendus corrupti eligendi sapiente blanditiis omnis aperiam tempora? Sit quae vel culpa?
Fugiat nostrum quisquam esse neque, earum voluptatibus a consequatur tenetur excepturi sunt sed eaque id iste ullam rerum possimus nisi optio, maiores quam ducimus autem. Quod doloremque distinctio numquam iste?</p>
</div>
</section>

</body>
</html>
```

:::tip Observacion
- Si ejecutaste el ejemplo y lo analizaste, notarás que el navegador reserva un espacio para la barra de desplazamiento (el navegador lo muestra como si fuera un padding, aunque no es un padding real ni se puede modificar como tal).
- Con estas propiedades le indicamos al navegador cómo manejar ese espacio:
  - `auto`: El espacio para el scroll solo se crea cuando la barra aparece; si no se usa, desaparece.
  - `stable`: El espacio se reserva siempre.
  - `both-edges`: El espacio del scroll se reparte en ambos lados del contenedor, logrando un diseño más simétrico.
- El valor `both-edges` solo funciona si se combina con `stable`.
- Puedes comprobarlo modificando el contenido.
:::


:::tip info
- [scrollbar-color](https://css-tricks.com/almanac/properties/s/scrollbar-color/)
- [scrollbar-color y scrollbar-gutter de CSS](https://web.dev/blog/baseline-scrollbar-props?hl=es-419)
:::
## Propiedad `user-select`
- Controla si el usuario puede seleccionar el texto de un elemento.
- Solo afecta al contenido del elemento.

:::warning
- Esta propiedad no es completamente estándar, ya que no funciona en todos los navegadores.
:::

- Valores posibles:
  - `none`: El texto del elemento y sus hijos no se puede seleccionar. El objeto [`Selection`](https://developer.mozilla.org/en-US/docs/Web/API/Selection) aún puede contener estos elementos.
  - `auto`: El navegador decide el valor según el contexto:
    - En `::before` y `::after`, el valor es `none`.
    - Si el padre tiene `user-select: none`, también se aplica `none`.
    - Si el padre tiene `user-select: all`, se aplica `all`.
    - En cualquier otro caso, se usa `text`.
  - `text`: El usuario puede seleccionar el texto normalmente.
  - `all`: El contenido del elemento se selecciona de forma atómica (como si fuera un todo). Es decir, si se selecciona una parte del elemento, automáticamente se selecciona todo el texto del elemento (incluyendo sus descendientes).


:::tip
- También existe el valor `contain`, que permite limitar la selección solo dentro del elemento.
- Sin embargo, no es compatible con la mayoría de los navegadores.
:::

#### Ejemplo
```html
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>user-select</title>

<style>
body{
  font-family: Arial, sans-serif;
  margin: 20px;
}

.box{
  border: 2px solid #333;
  padding: 15px;
  margin-bottom: 20px;
}

.none{
  user-select: none;
}

.text{
  user-select: text;
}

.all{
  user-select: all;
}
</style>
</head>

<body>

<h1>Ejemplo de user-select</h1>

<div class="box none">
  <h2>user-select: none</h2>
  <p>Este texto no se puede seleccionar.</p>
</div>

<div class="box text">
  <h2>user-select: text</h2>
  <p>Este texto se puede seleccionar normalmente.</p>
</div>

<div class="box all">
  <h2>user-select: all</h2>
  <p>Si seleccionas una parte, se selecciona todo el bloque.</p>
</div>

</body>
</html>
```

## Propiedad `inset`
- Es una propiedad CSS abreviada para definir [top, right, bottom y left](./propiedades.md#propiedad-leftrighttopbottom) en una sola declaración.
- No tiene efecto cuando el elemento no está posicionado (su `position` es `static`).
- Esta propiedad surgió como parte de la especificación de CSS Lógico.

#### Sintaxis
- Funciona igual que `margin` y `padding`, acepta hasta cuatro valores:
```cs
inset: top right bottom left
```
:::tip Observación
- Los valores fluyen en sentido horario, comenzando con `top`.
:::
- Podemos indicar tres valores, donde el primero es `top`, el segundo `left/right` y el tercero `bottom`.
```cs
inset: top right/left bottom
```


- Podemos especificar dos valores, donde el primero corresponde a `top/bottom` y el segundo a `left/right`:
```cs
inset: top/bottom right/left
```


- Por último, podemos definir un solo valor que se aplica a las cuatro propiedades:
```cs
inset: top/right/left/bottom
```

#### ¿Qué hace `inset: 0` con `position: absolute`?

- Es equivalente a:
```css
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
```
- Explicación del código:
  - `position: absolute` → posiciona el elemento respecto a su ancestro posicionado.
  - `top: 0` → pega el borde superior del elemento al borde superior del ancestro.
  - `left: 0` → pega el borde izquierdo del elemento al borde izquierdo del ancestro.
  - `bottom: 0` → pega el borde inferior del elemento al borde inferior del ancestro.
  - `right: 0` → pega el borde derecho del elemento al borde derecho del ancestro.
  - Como resultado, el elemento se expande para ocupar exactamente todo el contenedor posicionado.

#### Conclusión
- Cuando posicionas un elemento con `top`, `right`, `bottom` y `left`, el elemento ajusta su ancho o alto para poder adaptarse correctamente a la posición indicada.
- No solo posicionas el elemento, sino que también defines sus dimensiones (tamaño) de forma implícita.

#### Valor auto en top-right-bottom-left
- Cuando un elemento es posicionado con `position: absolute` o `position: fixed`, pierde su espacio reservado en el flujo normal del documento (DOM).
- En este contexto, el tamaño del elemento se ajusta en función de las propiedades `top`, `right`, `bottom` y `left`, y del tamaño del contenedor posicionado.
- Cuando una propiedad `top`, `right`, `bottom` o `left` tiene el valor `auto` (en un elemento con `position: absolute` o `fixed`), el navegador ignora ese lado y calcula la posición y, si es necesario, el tamaño del elemento utilizando las demás propiedades (`top`, `right`, `bottom`, `left`) y `width`/`height`.


#### Dos funciones clave de `auto` en este contexto:
#### 1. **Para el posicionamiento**
- Si escribes:
```css
   left: 100%;
   right: auto;
```
:::tip Observación
- Le estás diciendo al navegador: "Posiciona el elemento utilizando únicamente `left`. Ignora `right` para calcular la posición."
:::

#### 2. **Para el tamaño** (`width` o `height`)
- Si ambos lados de un eje están definidos, por ejemplo:
```css
  left: 0;
  right: 0;
```
:::tip Observación
- El navegador ajusta automáticamente el tamaño del elemento para que cumpla ambas restricciones.
- Como consecuencia, `width` deja de determinar el ancho y el elemento se estira.
:::

- En cambio, si uno de los lados es  `auto `, por ejemplo:
```css
left: 100%;
right: auto;
width: 200px;
```
:::tip Observación
- El navegador ya no necesita estirar el elemento, por lo que el ancho vuelve a estar determinado por `width` (o por el contenido, si `width` es `auto`).
:::

:::tip 📌 Regla rápida para porcentajes
- Con `position: fixed`, los porcentajes de `top`, `right`, `bottom`, `left`, `width` y `height` se calculan respecto al *viewport*.
- Con `position: absolute`, esos porcentajes se calculan respecto al contenedor posicionado (el ancestro con `position` distinto de `static`) más cercano.
- En resumen: `fixed` usa el viewport como referencia y `absolute` usa el contenedor posicionado más cercano.
:::