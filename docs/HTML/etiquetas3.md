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