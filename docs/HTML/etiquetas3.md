---
sidebar_position: 4
---
# Etiquetas #03

## HTML semantico

- Es una forma de escribir HTML de una forma más optima y legible
- Una etiqueta semántica es una etiqueta que describe el contenido de esa parte de la página html al motor de búsqueda, ¡haciendo la vida mucho más fácil!
- Una etiqueta semántica facilita el SEO.
- Algunas etiquetas semanticas :  &lt;h1> (puede ser el h2 , h3 , etc) , &lt;strong> , &lt;em> , &lt;header> , &lt;a> , &lt;br> , &lt;mark> , etc.

#### ¿Cuáles son las ventajas de usar el HTML semántico?
- Permite mejor accesibilidad : La accesibilidad a páginas web está relacionada con las dificultades que pueden tener personas con ciertas limitaciones físicas. En el caso de los usuarios ciegos que recurren a lectores de pantalla para acceder a los sitios web . Solo una correcta estructuración semántica le permitirá al lector de pantalla identificar la información de una forma jerarquizada y organizada, porque de lo contrario solo sería texto indistinguible.
- Mejora el posicionamiento del sitio web : Por tanto, es posible afirmar que a mayor estructuración semántica del sitio, habrá un mayor entendimiento de Google. No olvides que es más probable que los usuarios ingresen a tu sitio web desde un buscador, que escribiendo directamente la url de la página. 



### Header
- Es la presentación de la  pagina web
- Especifica un encabezado para un documento o sección
- Define el encabezado de la página (no confundir con &lt;head>).
### Nav
- Define una barra de navegación que incluye enlaces.
- Define enlaces de navegación
- Es el Menu
- GENERALMENTE se ubica adentro del Header
- El &lt;nav> debe ser igual en todas las paginas (archivos html) , ósea el &lt;header> (que suele contener el nav) generalmente siempre es igual.
- &lt;nav>&lt;/nav> : Es el menu de navegación  , que generalmente adentro tiene una lista desordenada
- La barra de navegación (para ser claros, es esa parte donde en los sitios verás las palabras "inicio", "quiénes somos", "trabajos", "contactos", etc.)
#### Ejemplo 
```html
<header>
<nav>
<ul>
<li><a href="index.html">Inicio</li>
<li><a href="micuenta.html">Mi cuenta</a></li>
<li><a href="nosotros.html">Sobre nosotros</a></li>
</ul>
</nav>
</header>
```
### Article 
- La etiqueta &lt;article>&lt;/article> es para poner artículos ( información del sitio web )
- Si el articulo tiene varias secciones se usa la etiqueta &lt;section>&lt;/section>
- Define un artículo
- Especifica un elemento que está conceptualmente separado del resto de la página web y debería ser posible leer su contenido independientemente del resto de la página web; está contenida en la sección.
- Define un artículo, el cual puede tener su propio encabezado, navegación, sección o pie de página.
### Section
- Define una sección en un documento
- Define una sección de la página.
#### Ejemplo 
```html
<article>
<section>
<h1>Titulo de la noticia 1</h1>
<h2>Subtitulo de la noticia 1</h2>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere fugiat ea quis rerum cupiditate ad dolore? Nesciunt, quo consectetur ad officia labore at rerum repudiandae sunt tenetur, minus voluptatibus eaque?</p>
</section>
<section>
<h1>Titulo de la noticia 2</h1>
<h2>Subtitulo de la noticia 2</h2>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere fugiat ea quis rerum cupiditate ad dolore? Nesciunt, quo consectetur ad officia labore at rerum repudiandae sunt tenetur, minus voluptatibus eaque?</p>
</section>
</article>

```
### Aside
- Información secundaria / Menu secundario
- Define el contenido aparte del contenido de la página
- Es la información/menú secundaria/o, se usa la etiqueta &lt;aside>&lt;/aside>
- Se suele poner en el costado de los artículos/secciones (eso se hace con CSS)
- todos los contenidos que solo están apoyando el tema principal de la página son parte del &lt;aside> &lt;/aside> (un ejemplo podrían ser los videos recomendados de youtube); un contenido menos importante que el principal estará envuelto por esta etiqueta semántica.

```html
<aside>
<h2>Contenido extra</h2>
<p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores reiciendis deserunt, veniam iure numquam facilis quasi pariatur praesentium laudantium saepe veritatis minima distinctio corporis provident ut impedit minus ex molestiae!
</p>
</aside>
```
### Footer
- Define un pie de página para un documento o sección
- Es el pie de la pagina, generalmente están los derechos reservados y el copyrights.
- Es el pie de página, tiene la información sobre copyright , para contacto, para feedback , de redes sociales,etc.
- Se utiliza la etiqueta etiqueta &lt;footer>&lt;/footer>)
- Posicionada rigurosamente al final de su página web, contiene los datos genéricos de la empresa (NIF, CIF, ubicación, etc.) y otra información útil como enlaces a redes sociales, contactos, etc.
- Define un pie de página o de sección.
### Orden
```html
<html>
<head>
<meta name="keywords" content="harina,leche,huevo" />
<meta name="description" content="Alimentos S.A es una compañia destinada a brindar los mejores alimentos de calidad en tiempo y forma" />
<meta name="author" content="Federico Leva" />
<meta name="copyright" content="Facebook Inc." />
<meta name="robots" content="noindex" />
<title>Sitio web</title>
</head>
<body>
<header>
<nav>
<ul>
<li><a href="index.html">Inicio</a></li>
<li><a href="micuenta.html">Mi cuenta</a></li>
<li><a href="nosotros.html">Sobre nosotros</a></li>
</ul>
</nav>
</header>
<article>
<section>
<h1>Titulo de la noticia 1</h1>
<h2>Subtitulo de la noticia 1</h2>
<p>
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere fugiat ea quis rerum cupiditate ad dolore? Nesciunt, quo consectetur ad officia labore at rerum repudiandae sunt tenetur, minus voluptatibus eaque? </p>
</section>
<section>
<h1>Titulo de la noticia 2</h1>
<h2>Subtitulo de la noticia 2</h2>
<p>
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere fugiat ea quis rerum cupiditate ad dolore? Nesciunt, quo consectetur ad officia labore at rerum repudiandae sunt tenetur, minus voluptatibus eaque? </p>
</section>
</article>
<aside>
<h2>Contenido extra</h2>
<p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores reiciendis deserunt, veniam iure numquam facilis quasi pariatur praesentium laudantium saepe veritatis minima distinctio corporis provident ut impedit minus ex molestiae! </p>
</aside>
<footer>
<h4>Copyright - Todos los derechos reservados</h4>
<p>Seguinos en nuestras <b>redes</b></p>
<a href="">Youtube</a>
<a href="">Instagram</a>
<a href="">Facebook</a>
</footer>
</body>
</html>
```



### Etiqueta figure
- Especifica contenido independiente como ilustraciones, diagramas, fotos, listados de códigos, etc.
- Si bien se relaciona con el flujo principal, su posición es independiente de éste.
- Esta etiqueta puede ser removida sin que haya alteraciones.
- No es prudente que emplees la etiqueta &lt;figure> cuando la posición del contenido a incorporar es relevante para el documento base.
- La etiqueta &lt;figcaption> define un titulo para un elemento &lt;figure>

```html
  <figure style="float:right;width:500px">
        <img src = "fondo.webp" alt = "imagen"/>
        <figcaption> Descripcion de la foto</figcaption>
      </figure>
```
### Etiqueta strong
- La etiqueta &lt;strong>&lt;/strong> se utiliza para definir texto con gran importancia . Por defecto el contenido se muestra en negrita.
- Si el contenido no tiene mucha importancia , puede usar la etiqueta &lt;b>&lt;/b> para especificar texto en negrita
```html
  <strong>Texto importante</strong>
  <br>
  <b>Texto sin ninguna importancia</b>
```
### Etiqueta em
- La etiqueta &lt;em>&lt;/em> sirve para marcar con énfasis las partes importantes de un texto.
- El elemento se puede anidar, y cada nivel de anidamiento indica un mayor grado de énfasis
- Normalmente, este elemento se muestra en letra cursiva. Sin embargo, no debe usarse para aplicar estilo en cursiva (para esto se utiliza CSS)
```html
   <p>Texto con <em>enfasis</em>!</p>
```
### Etiqueta main
- El elemento HTML &lt;main> representa el contenido principal del &lt;body> de un documento o aplicación.
- El   contenido principal consiste en el contenido que está directamente relacionado con el tema central de un documento o la funcionalidad central de una aplicación, o que lo amplía.
- Una faceta importante de &lt;main> es que sólo puede utilizarse una vez por página, en lugar de permitir múltiples &lt;main>.
-  No puede usarse como descendiente de un elemento &lt;article>, &lt;aside>, &lt;footer>, &lt;header> o &lt;nav>.
```html
  <main style="background:red">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex nulla similique ab magnam voluptates, inventore, quisquam aspernatur ea accusamus iste illum pariatur quidem adipisci quod reiciendis rerum perspiciatis cum facilis.</p>
    </main>
```
### Etiqueta details / summary
- &lt;Details> : 	Define detalles adicionales que el usuario puede ver u ocultar
- &lt;summary> : 	Define un encabezado visible para un elemento &lt;details>
- El elemento HTML details se compone de básicamente de las siguientes partes:
   - La etiqueta details, que es el contenedor que alberga tanto lo que se va a mostrar siempre, como el contenido interactivo que se puede mostrar y esconder.
   - La etiqueta summary, que siempre va a ir anidada dentro de details, y que es el elemento visible y la zona clicable para mostrar, o esconder, el resto del contenido.
   - Y por último, el contenido que vamos a poder mostrar y esconder a nuestro gusto, y que también va anidado dentro de details.
```html
 <!-- Detalles que el usuario puede abrir y cerrar a pedido -->
  <details>
     
    <summary>Encabezado visible</summary>  
    <p>Texto que es visible cuando se hace click en el encabezado</p>
  </details>
```
### Etiqueta time
- La etiqueta &lt;time> se utiliza para mostrar la fecha/hora legible para el ser humano y tambien para maquinas.
- Este elemento puede ser utilizado como una forma de codificar las fechas y las horas para que las pueda leer una maquina por ejemplo, los agentes de usuario pueden ofrecer para agregar recordatorios de cumpleaños o eventos programados para el calendario del usuario, y los motores de búsqueda pueden producir resultados de la búsqueda más inteligente. 
- El  atributo datetime de este elemento se usa para traducir la hora a un formato legible para una  máquina y que los navegadores puedan ofrecer agregar recordatorios de fechas a través del calendario del usuario y los motores de búsqueda puedan producir resultados de búsqueda más inteligentes.

```html
<time datetime = "AAAA-MM-DDThh:mm:ssTZD"> </time>
```
- AAAA – año (por ejemplo, 2022)
- MM – mes (por ejemplo, 05 para mayo)
- DD – día del mes (por ejemplo, 11)
- T o espacio – separador
- hh – horas (por ejemplo, 23)
- mm – minutos (por ejemplo, 57)
- ss – segundos (por ejemplo, 21)
- TZD son las siglas de Time Zone Designator:
   - UTC (Coordinated Universal Time) – Tiempo Universal Coordinado, indicado por la letra Z.
   - +hh:mm (utilizando la zona horaria local) p. ej. -03:00 (desfase respecto a UTC)
   - -hh:mm (utilizando la zona horaria local) por ejemplo, +03:00 (desviación de UTC)


#### Ejemplo
```html
    <p>I have a date on <time datetime="2008-02-14 20:00">Valentines day</time>.</p>
```
### Etiqueta mark
- Representa un texto marcado o resaltado , debido a su relevancia o importancia en un contexto particular.
- Ej.  Buscador : El elemento &lt;mark> resaltará la parte del texto que concuerda con el texto buscado:
```html
    <span>Mi <mark>coche</mark> es rojo</span>
```


### Etiqueta &lt;q> 

- El elemento HTML &lt;q> indica que el texto  es una "cita" corta en línea. 
-  La mayoría de los navegadores modernos implementan esto rodeando el texto entre comillas.
-  Este elemento está destinado a citas breves que no requieren saltos de párrafo; para una "cita" larga en bloque , utiliza el elemento &lt;blockquote>.
-  Tienen el atributo cite cuyo valor es la URL del documento de donde se "obtuvo" la información.

:::tip ¿Que es una cita?
- Una cita consiste en mencionar en un texto las palabras que ha escrito o ha dicho otro autor. 
- Se pueden definir como aquellos textos ajenos que se traen al documento para probar lo que se afirma o para contrastarlo
:::

```html
  <p>Conforme al sitio web de Mozilla,
        <q cite="https://www.mozilla.org/en-US/about/history/details/">Firefox 1.0
            fue lanzado en 2004 y se convirtió en un gran éxito.</q>
    </p>
```

```html
  <blockquote cite='http://html.conclase.net/w3c/html401...def-BLOCKQUOTE'>
        <p>
          <strong>Nota.</strong> Recomendamos que las implementaciones de hojas
          de estilo porporcionen un mecanismo para insertar signos de puntuación de citas
          antes y después de una cita delimitada por un BLOCKQUOTE de un modo apropiado según
          el contexto del idioma actual y el grado de anidamiento de las citas.
        </p>
      </blockquote>
```
### Etiqueta cite y address
#### cite
- El elemento cite representa el título de algo.
- Puede ser usado para citar los títulos de libros, artículos científicos, ensayos, pinturas, esculturas, obras de teatro, canciones, películas, series de TV, videojuegos, etc.
- Se suele utilizar para hacer una referencia al "autor" del texto citado

:::warning
- En versiones previas de HTML, el elemento cite podía ser usado para encerrar al nombre de una persona. HTML5 considera a esta práctica obsoleta y, por lo tanto, su implementación no es aconsejable.
- El elemento cite no está diseñado para citar partes de una obra, sino sólo  su nombre. Para citar una parte de una obra se cuenta con los elementos q y blockquote.
:::

```html
    <p>Cuatro años despuñes, Asimov añadió aún otra secuela, <cite>Fundación y Tierra</cite> (1986), la cual fue seguida por las precuelas <cite>Preludio a la Fundación</cite> (1988) y <cite>Hacia la Fundación</cite> (1993).</p>
```

#### address
- Define la información de contacto del autor/propietario de un documento o artículo.
- La información de contacto puede ser una dirección de correo electrónico, URL, dirección física, número de teléfono,   redes sociales, etc.
- Podría ser usado, por ejemplo, para dar información acerca de la empresa detrás del sitio, el autor de un artículo específico o del autor del sitio web en sí. El contenido de este elemento de nivel de bloque puede incluir nombres, nombres de compañías, números de teléfono, códigos postales, direcciones de e-mail, etc.
- El texto del elemento &lt;address> generalmente se presenta en cursiva y los navegadores siempre agregarán un salto de línea antes y después del  elemento &lt;address>.

```html
   <address>
        Escrito por <a href="mailto:webmaster@example.com">Jon Doe</a>.<br>
        Box 564, Disneyland<br>
        USA
        </address>
```
### &lt;small>
- El elemento HTML &lt;small> hace el tamaño del texto una talla más pequeña (por ejemplo, de largo a mediano, o de pequeño a extra pequeño) que el tamaño mínimo de fuente del navegador.
- La etiqueta HTML &lt;small> define una fuente pequeña (texto pequeño) relacionada con el contenido principal. Puede ser una aclaración, una cita,   advertencia , información sobre la licencia , información sobre los derechos de autor   , textos legales y más.

```html
<p><small>Al usar este sitio, estás de acuerdo con nuestros "Términos de uso" y nuestra "Política de privacidad".</small></p>
```
:::tip info
- [Etiquetas semánticas](https://aulab.es/articulos-guias-avanzadas/14/etiquetas-semanticas#:~:text=Este%20es%20el%20caso%20de,de%20b%C3%BAsqueda%2C%20%C2%A1haciendo%20la%20vida)
- [Semántica](https://programacionfacil.org/cursos/html_avanzado/capitulo_2_semantica_html5.html)
- [¿Qué es HTML semántico?](https://platzi.com/clases/2467-frontend-developer/40832-que-es-html-semantico/)
:::

## SVG
- SVG (Scalable Vector Graphics)  es un formato de imagen que se utiliza en la web y en dispositivos móviles para crear gráficos vectoriales escalables. Esto significa que las imágenes SVG se pueden agrandar o reducir sin perder calidad, a diferencia de las imágenes rasterizadas (como JPEG o PNG), que pueden volverse borrosas o pixeladas cuando se agrandan.
- SVG es un lenguaje de marcado, lo que significa que se utiliza código para describir la forma y el color de los gráficos. Esto permite una mayor flexibilidad y control sobre el aspecto de las imágenes, y también hace que sea más fácil modificarlas o animarlas.
- En resumen, SVG es un formato de imagen ideal para crear gráficos vectoriales escalables que se vean bien en diferentes tamaños y dispositivos.

:::tip gráficos vectoriales escalables
- Los gráficos vectoriales escalables son imágenes que se pueden agrandar o reducir sin perder calidad. Esto se debe a que están compuestos por líneas y formas geométricas, en lugar de píxeles individuales como en las imágenes rasterizadas (como JPEG o PNG).
- Cuando se agranda una imagen rasterizada, los píxeles se vuelven más grandes y pueden volverse borrosos o pixelados. En cambio, cuando se agranda una imagen vectorial, las líneas y formas se redibujan automáticamente para mantener su aspecto original.
- Esto hace que los gráficos vectoriales escalables sean ideales para crear imágenes que se vean bien en diferentes tamaños y dispositivos, como en la web o en dispositivos móviles.

:::

#### Estructura básica de un archivo SVG
- Un archivo SVG básico se estructura de la siguiente manera:

```html
<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" >
  <title>Estructura básica del SVG</title>
  <style>
    .circle {fill: blue}
  </style>
  <circle class="circle" cx="5" cy="5" r="5" />
</svg>

```
:::tip Observación
- En este ejemplo, se define un elemento &lt;svg> con un atributo viewBox que establece el tamaño del gráfico, y un atributo xmlns que especifica el namespace del lenguaje SVG. Dentro del elemento &lt;svg>, se define un título, un estilo para un elemento &lt;circle>, y el propio elemento &lt;circle> que se dibuja en la posición (5, 5) con un radio de 5.
:::

#### Tipos de objetos gráficos
- Los objetos gráficos en SVG se clasifican en tres categorías:
  - Elementos geométricos vectoriales: Estos son los objetos básicos que se utilizan para crear gráficos vectoriales en SVG. Incluyen líneas, rectángulos, círculos, elipses, polígonos y curvas. Estos elementos se definen utilizando coordenadas y atributos como el color, el grosor de la línea y el relleno.
  - Imágenes de mapa de bits (imágenes rasterizadas): Estas son imágenes que se pueden incrustar en un gráfico SVG. A diferencia de los elementos vectoriales, las imágenes de mapa de bits están compuestas por píxeles y no se pueden escalar sin perder calidad.
  - Texto: SVG también permite agregar texto a los gráficos vectoriales. El texto se puede formatear utilizando diferentes fuentes, tamaños y estilos, y se puede colocar en cualquier parte del gráfico.
#### DATA URI
- Además, es posible generar un archivo SVG en línea utilizando un Data URI. Por ejemplo:

```css
.box {
  width: 100px;
  height: 100px;
  background:
    url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><path d="M0,0 V50 L50,0 Z" fill="black"/></svg>');
}

```
:::tip DATA URIS
-  Es una forma de incrustar pequeños elementos de datos directamente en documentos HTML y CSS. Permiten incluir datos como imágenes sin que el navegador tenga que solicitarlos desde Internet. La estructura general de un DATA URI es:
```html
data:[<mediatype>][;base64],<data>
```
- Aquí, &lt;mediatype> es una cadena de tipo MIME, como 'image/jpeg' para un archivo de imagen JPEG. Si se omite, se establece en text/plain;charset=US-ASCII. Cuando los datos contienen caracteres reservados según la norma RFC 3986 o espacios, debes codificar esos datos utilizando el token base64.

- Ejemplo:

```html
<img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==" style="width:36pt;height:36pt" />
```

- Es un concepto avanzado, le recomiendo investigar más!

:::
#### Incorporar SVG en HTML
- SVG y HTML son dos tecnologías relacionadas pero independientes, que se utilizan juntas para crear contenido en la web.
- Hay varias formas de incorporar SVG en HTML:
1. Inline SVG: Se puede incluir el código SVG directamente en el código HTML, utilizando la etiqueta &lt;svg>.

```html
<html>
  <body>
    <svg width="100" height="100">
      <circle cx="50" cy="50" r="40" fill="blue" />
    </svg>
  </body>
</html>
```
2. Imagen SVG externa: Se puede cargar un archivo SVG externo utilizando la etiqueta &lt;img>.

```html
<html>
  <body>
    <img src="mi_imagen.svg" alt="Imagen SVG">
  </body>
</html>
```

3.  Se puede utilizar la etiqueta &lt;object> para cargar un archivo SVG externo.

```html
<html>
  <body>
    <object data="mi_imagen.svg" type="image/svg+xml">
      <!-- Contenido de fallback para navegadores que no soportan SVG -->
    </object>
  </body>
</html>
```

4. Uso de CSS: Se puede utilizar CSS para cargar un archivo SVG como fondo o como contenido de un elemento.


```css
.box {
  background: url('mi_imagen.svg');
}

```



#### sistema de coordenadas del elemento SVG
-  El sistema de coordenadas en SVG es como una pizarra o un lienzo en blanco donde se dibujan los objetos y puntos.
-  El sistema de coordenadas en SVG funciona de manera similar a un sistema de coordenadas cartesianas, donde el origen (0,0) se encuentra en la esquina superior izquierda y las coordenadas x e y aumentan hacia la derecha y hacia abajo, respectivamente.
- Los objetos y puntos en una imagen SVG se representan utilizando coordenadas en este sistema de coordenadas, como si se estuvieran dibujando en una pizarra. Por ejemplo, una línea se puede dibujar especificando las coordenadas de sus dos extremos, o un círculo se puede dibujar especificando su centro y su radio.
- Además, el sistema de coordenadas en SVG se puede transformar y escalar utilizando diferentes técnicas, como el atributo transform o el atributo viewBox. Estas transformaciones permiten cambiar la posición y el tamaño de los objetos en la imagen, como si se estuvieran borrando y volviendo a dibujar en una pizarra.





#### Atributo viewBox
- Imagina que el viewBox es como una ventana que se utiliza para ver una parte específica de una imagen grande. La ventana tiene un tamaño y una posición específicos, y solo muestra la parte de la imagen que cabe dentro de esa ventana.
- En el mundo de SVG, el viewBox es una ventana que se utiliza para mostrar una parte específica del sistema de coordenadas del elemento SVG. El viewBox tiene cuatro valores: min-x, min-y, width y height.
- min-x y min-y son las coordenadas del punto superior izquierdo de la ventana , es decir, el punto donde comienza a mostrarse el sistema de coordenadas dentro de la ventana.
- width y height son el ancho y la altura de la ventana,  y determinan cuánta parte del sistema de coordenadas se mostrará dentro de la ventana.  La ventana se extiende hacia abajo y hacia la derecha desde ese punto.
- Ejemplo:


```html
<svg width="200" height="200" viewBox="50 50 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="100%" height="100%" fill="white" />
  <g stroke="black" stroke-width="1">
    <rect x="0" y="0" width="50" height="50" fill="red" />
    <rect x="150" y="150" width="50" height="50" fill="blue" />
  </g>
</svg>

```
:::tip Observación
- En este ejemplo, el atributo viewBox tiene los valores 50 50 200 200, lo que significa que la ventana comienza en el punto (50,50) del sistema de coordenadas y tiene un ancho y una altura de 200 unidades.
- Dentro de la ventana, se dibujan dos rectángulos en las posiciones (0,0) y (150,150) del sistema de coordenadas.
- El atributo width y height del elemento svg especifican el tamaño de la ventana en el lienzo SVG, y el atributo fill especifica el color de relleno de los rectángulos.

:::
#### Atributo xmlns
- El atributo xmlns es como una etiqueta especial que le dice al navegador web qué tipo de lenguaje está utilizando el documento SVG. Es como decirle al navegador: "Hola, este documento está escrito en el lenguaje SVG, así que por favor, muéstralo correctamente".
- En resumen, el atributo xmlns es una etiqueta importante que le dice al navegador web cómo interpretar el documento SVG y mostrar la imagen vectorial correctamente.
- Ejemplo:
```html
<svg width="160" height="230" xmlns="http://www.w3.org/2000/svg">
  <!-- Contenido SVG aquí -->
</svg>
```
:::tip Observación
- En este ejemplo, el atributo xmlns especifica que el documento SVG utiliza el modulo definido por la W3C para SVG 1.0. Este es el espacio de nombres estándar para documentos SVG. Esto permite que el navegador identifique correctamente los elementos &lt;svg>, &lt;circle>, y los atributos cx, cy, r, y fill.
- En otras palabras, el atributo xmlns con el valor http://www.w3.org/2000/svg es una forma de decirle al navegador que el documento sigue las reglas y estándares establecidos por la W3C para SVG 1.0. Esto permite que el navegador interprete y muestre correctamente los elementos y atributos SVG en el documento.

:::

#### Atributo stroke
- El contorno de una forma SVG es el borde exterior de la forma. Se puede definir un color y un ancho para el contorno utilizando los atributos stroke y stroke-width, respectivamente.
- El atributo stroke especifica el color del contorno, mientras que el atributo stroke-width especifica el ancho del contorno. El contorno se dibuja alrededor  de la forma y puede ser de un color diferente al del fondo de la forma.
- El contorno se puede utilizar para resaltar una forma, para separarla de otras formas o para crear efectos visuales interesantes. Por ejemplo, se puede utilizar un contorno de un color diferente al del fondo para hacer que una forma se destaque en un fondo ocupado. También se puede utilizar un contorno de ancho variable para crear efectos de sombra o de iluminación.
-  El color de fondo o de la figura se establece con el atributo fill.
- Ejemplo:

```html
<svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" height="80" width="80"
    fill="RosyBrown" stroke="RoyalBlue" stroke-width="5" />
</svg>
```

:::tip
- En este ejemplo, el atributo fill se establece en "RosyBrown", lo que hace que el fondo del rectángulo sea de ese color. El atributo stroke se establece en "RoyalBlue", lo que hace que el contorno del rectángulo sea de ese color. El atributo stroke-width se utiliza para establecer el ancho del contorno.

:::



#### Ventajas de utilizar SVG en HTML
- Escalabilidad: Los gráficos SVG se escalan perfectamente sin perder calidad, lo que los hace ideales para diseños responsivos.
- Accesibilidad: Los gráficos SVG pueden ser accesibles para usuarios con discapacidades, ya que se pueden describir con texto alternativo.
- Interactividad: Los gráficos SVG pueden ser interactivos, permitiendo a los usuarios interactuar con ellos mediante eventos de mouse y teclado.
- Compatibilidad: Los gráficos SVG son compatibles con la mayoría de los navegadores modernos, incluyendo Chrome, Firefox, Safari, Edge y Opera.


#### Desventajas de utilizar SVG en HTML
- Compatibilidad con versiones antiguas: Los gráficos SVG no son compatibles con versiones antiguas de Internet Explorer (IE 8 y anteriores).
- Rendimiento: Los gráficos SVG pueden requerir más recursos del navegador que los gráficos rasterizados, lo que puede afectar el rendimiento en dispositivos móviles o con recursos limitados.

## Etiqueta canva
- Canva en inglés significa “lienzo”.
- El elemento HTML canvas (&lt;canvas>) se puede utilizar para dibujar gráficos a través de  de código (por lo general JavaScript ). Por ejemplo, puede usarse para dibujar gráficos, hacer composiciones de fotos o incluso realizar animaciones.
- Proporciona un espacio donde puedes escribir, dibujar gráficos, crear juegos o cualquier otra cosa en 2D o incluso 3D.


#### Contexto
- El código HTMLCanvasElement.getContext() en español se utiliza para obtener el contexto de un elemento &lt;canvas> en HTML. Este contexto es un objeto que contiene métodos y propiedades para dibujar gráficos y otras formas en el lienzo. En resumen, esta línea de código permite acceder a las funciones de dibujo del elemento &lt;canvas>.
- El método HTMLCanvasElement.getContext() puede recibir un parámetro opcional, que especifica el tipo de contexto que deseas obtener. El parámetro más comúnmente utilizado es "2d", que devuelve un objeto CanvasRenderingContext2D para dibujar en 2D. También existe el contexto "webgl" para trabajar con gráficos 3D y otros tipos de contextos especializados.


#### Ejemplo


```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      canvas {
        background-color: #fff;
        border: 2px solid #222;
      }
    </style>
  </head>
  <body>
    <canvas id="myCanvas" width="400" height="400"></canvas>

    <script>
      // Obtener el elemento canvas
      const canvas = document.getElementById("myCanvas");
      // Obtener su contexto 2D (sirve para dibujar en 2D)
      const ctx = canvas.getContext("2d");
      console.log(ctx);
      // Dibujar un rectángulo
      // Establecer el color de relleno a rojo
      ctx.fillStyle = "red";
      // Posiciona y dimensiona el rectangulo
      ctx.fillRect(50, 50, 150, 100);
      // Dibujar un círculo
      // Iniciar un nuevo trazo
      ctx.beginPath();
      // Definir un arco (círculo en en este caso)
      ctx.arc(300 , 100 , 50 , 0 , 2 * Math.PI)
      // Establecer el color de relleno a verde
      ctx.fillStyle = 'green'
      // Rellenar el circulo
      ctx.fill();
      // Establecer el color de contorno a negro
      ctx.strokeStyle = 'black';
      // Dibujar el contorno del círculo
      ctx.stroke();
    </script>
  </body>
</html>
```
:::tip método beginPath()
- Imagina que estás dibujando en un papel con un lápiz. Cuando quieres empezar a dibujar una nueva figura, necesitas levantar el lápiz del papel y moverlo a un nuevo lugar antes de empezar a dibujar de nuevo. La función ctx.beginPath(); es como levantar el lápiz del papel en el canvas.
- Cuando dibujas una figura en el canvas, el contexto del canvas guarda la información sobre esa figura en una lista. La función beginPath vacía esa lista, por lo que si dibujas una nueva figura después de llamar a beginPath, no estará conectada a las figuras anteriores.
:::
:::tip

- Esto es un vistazo a Canva, le recomiendo investigar si le interesa el tema.

:::