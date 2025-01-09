---
sidebar_position: 1
---
# HTML


## index.html
- Index : Es la pagina que toma el servidor , tiene prioridad sobre el resto de archivos html.
- .html : Es el formato de un archivo html.
- El servidor busca entre todos los archivos html de una carpeta y muestra el que se llama index.html





## Etiquetas HTML
- Todo lo que ponemos en HTML son etiquetas o tags que a su vez son como cajitas.
- Sintaxis:

```html
<etiqueta></etiqueta>
```
:::tip Observacion
- &lt;etiqueta>  : Es la etiqueta de apertura
- &lt;/etiqueta> : Es la etiqueta de cierre
:::

#### Hay dos tipos de etiquetas
#### 1- Las que se cierran sola
```html
<input type="text">
```
- No tienen etiqueta de cierre
#### 2- Las que se abren y se cierran
```html
<h1></h1>
```
- Tienen etiqueta de abertura y de cierre
- Estas sirven para tener algo adentro (contenido)
```html
<h1>Contenido</h1>
```
#### Etiquetas en bloques
- Completan la línea, por mas que el contenido sea pequeño va a ocupar todo el ancho del contenedor la caja. Y el resto de las cajas lo tira por debajo
- Ej: Los títulos , párrafo , etc .
#### Etiquetas en linea
- El tamaño de la caja se ajusta al contenido. Debido a eso las próximas cajas las puede tener alado .
- Ej: span 
#### Info
- [Etiquetas](../../static/img/HTML_ETIQUETAS.jpg)
- [Etiqueta &lta>](../../static/img/links.jpg)
- [Categorías basicas de HTML](../../static/img/Etiquetas.png)
- [Ordenada alfabéticamente](https://www.w3schools.com/tags/)
- [Ordenada en categorias](https://www.w3schools.com/tags/ref_byfunc.asp)
-  [Etiquetas que van en el &lt;head>](https://htmlhead.dev/)





## Atributos 
- Las etiquetas tienen atributos.
- Los atributos son las propiedades (caracteristicas que tiene la caja).
- Los atributos tienen un valor que se ponen entre comillas.
- Un atributo en HTML es una propiedad adicional que se aplica a una caja para definir sus características o comportamientos. Los atributos modifican su comportamiento o apariencia en la página web.
- Cada atributo tiene un nombre y un valor, donde el nombre define el tipo de característica o comportamiento que se quiere aplicar, y el valor específico “que” o “como” se va a aplicar. Los atributos siempre se escriben dentro de la etiqueta de apertura del elemento.




- Ejemplo : &lt;etiqueta atributo="valor">&lt;/etiqueta>
- [Inputs](../../static/img/HTML_INPUT.jpg)
- [Todos los atributos](https://www.w3schools.com/tags/ref_attributes.asp)
- [Atributos globales](https://www.w3schools.com/tags/ref_standardattributes.asp)


### Atributo For de la etiqueta label
- El atributo for en una etiqueta &lt;label>  asocia ese label con un elemento del formulario, generalmente un &lt;input>. Al hacer clic en el texto del label, se activa o enfoca el campo de formulario correspondiente. El valor de for debe coincidir con el valor del atributo id del elemento de formulario al que se quiere vincular.
- Ejemplo:
```html
<label for="username">Nombre de usuario:</label>
<input type="text" id="username" name="username">


```
:::tip Observación
- En este caso, al hacer clic en "Nombre de usuario:", el campo de entrada (input) se seleccionará automáticamente.

:::
### Atributo name en input
- El atributo name en el elemento &lt;input> sirve para darle un nombre único a cada campo del formulario. Este nombre actúa como una etiqueta para identificar el campo y qué tipo de información contiene. Cuando el usuario completa el formulario y lo envía, el servidor usa esos nombres para identificar los campos del formulario junto con sus valores, y así procesarlos correctamente.
- Por ejemplo, si en el formulario tienes un campo para el nombre y otro para la edad, el atributo name les asigna etiquetas como name="userName" y name="userAge". Cuando se envían los datos, el servidor sabe que "userName" corresponde al nombre de la persona y "userAge" a su edad.

:::tip Explicación no técnica
- Imagina que estás en una fiesta y alguien te pide que pongas tu nombre y tu edad en una lista. Para que la persona que recibe la lista sepa qué es lo que estás escribiendo, te pide que pongas una etiqueta al lado de cada dato:
  -	Al lado de tu nombre, pones una etiqueta que diga "Nombre".
  -	Al lado de tu edad, pones una etiqueta que diga "Edad".
- De esta manera, cuando la persona lee la lista, sabe que el dato junto a la etiqueta "Nombre" es tu nombre y el dato junto a la etiqueta "Edad" es tu edad.
- En un formulario web, el atributo name actúa como esas etiquetas. Cuando llenas un formulario, el name le pone una etiqueta a cada campo (como "nombre" o "edad"). Así, cuando el formulario se envía, el sistema sabe qué es lo que has escrito en cada parte porque tiene esas etiquetas para identificarlo.
- Es como ponerle una etiqueta a cada dato para que el sistema sepa qué es y cómo usarlo.


:::
- Ejemplo:
```html
<form action="/submit" method="post">
  <label for="name">Nombre:</label>
  <input type="text" id="name" name="userName">
  
  <label for="age">Edad:</label>
  <input type="text" id="age" name="userAge">
  
  <button type="submit">Enviar</button>
</form>

```

:::tip Observación
- El valor del atributo name en un campo de formulario en HTML actúa como la clave en una estructura de datos, como un JSON o una query string en una URL.
- •	En un JSON, cada par de datos se representa con una clave (el nombre del campo) y un valor (lo que el usuario escribió en ese campo). Así que cuando envías un formulario, los datos del formulario pueden estructurarse como un objeto JSON donde el name es la clave y el valor es lo que el usuario ha introducido.
- Ejemplo de JSON:
```json
{
  "userName": "Juan",
  "userAge": 25
}

```
- En este caso:
  -	"userName" es la clave (valor del atributo name en el campo del formulario).
  -	"Juan" es el valor (lo que el usuario escribió en ese campo).
- En una query string de una URL (que se usa al enviar datos a través de un formulario con el método GET), el valor de name también actúa como la clave que se pasa en la URL.
- Ejemplo de query string:
  - ?userName=Juan&userAge=25
- Aquí:
  -	userName y userAge son las claves.
  -	Juan y 25 son los valores que el usuario ha ingresado.
- En ambos casos, el valor de name le dice al sistema cómo identificar los datos enviados. ¡Así que en resumen, el valor de name es la clave de un par clave-valor en el que el valor es la información que el usuario ha proporcionado!
:::



### Atributo class y atributo id 
- Los atributos class e id se utilizan para poder identificar los elementos HTML en  Javascript o CSS.
#### Atributo class
- El atributo class permite asignar una o varias clases a un elemento HTML. Cada palabra dentro del atributo class es el nombre de una clase. Facilita la aplicación de estilos CSS a múltiples elementos o la selección de esos elementos mediante JavaScript.
- Valor: El valor de class puede contener una o varias clases. Si hay varias, deben separarse con espacios. Por ejemplo, class="clase1 clase2". Esto permite que todos los elementos con el mismo nombre compartan estilos css (colores, tamaños, etc.) o puedan ser manipulados juntos por JavaScript.
-  Propósito: Agrupar varios elementos bajo un mismo nombre de clase para aplicarles un estilo o manipularlos de forma colectiva.
#### Ejemplo de uso de class
```html
<div class="contenedor">
  <p class="texto">Este es un párrafo dentro del contenedor.</p>
  <p class="texto">Este es otro párrafo dentro del mismo contenedor.</p>
</div>

```
- En este caso, tanto el primer párrafo como el segundo tienen la clase texto, lo que significa que ambos pueden ser estilizados de la misma forma en CSS.
- Aplicación de CSS usando class:
```css
.texto {
  color: red;
}

```

#### Atributo id
- El atributo id se utiliza para identificar de manera única a un elemento dentro de la página. Cada id debe ser único en una página, es decir, no puede haber dos elementos con el mismo id. Esto lo hace ideal para seleccionar un solo elemento y aplicarle un estilo o manipularlo mediante JavaScript de manera específica.
- Valor: El valor de id es un identificador único dentro de la página. No se deben repetir los id en la misma página.
- Propósito: Identificar un solo elemento de manera única, para poder aplicar estilos o manipularlo específicamente.
#### Ejemplo de uso de id
```html
<div id="cajaPrincipal">
  <p>Este es un párrafo dentro de la caja principal.</p>
</div>

```
- En este caso, el div tiene el id "cajaPrincipal", lo que lo hace único en la página.
- Aplicación de CSS usando id:
```css
#cajaPrincipal {
  background-color: yellow;
}

```




### Atributos de imagen
- Atributo loading="crazy" : La imagen carga cuando el usuario hace scroll hasta esta. 




##   Atributos srcset y sizes en &lt;img>

- Estos nuevos atributos, nos sirven para proporcionar varias imágenes adicionales junto con sugerencias para ayudar al navegador a elegir el correcto.

```html
    <img srcset="elva-fairy-320w.jpg 320w,
             elva-fairy-480w.jpg 480w,
             elva-fairy-800w.jpg 800w"
     sizes="(max-width: 320px) 280px,
            (max-width: 480px) 440px,
            800px"
     src="elva-fairy-800w.jpg" alt="Elva dressed as a fairy">

```
### Atributo srcset
- Define el conjunto de imágenes que el navegador podrá elegir, y el tamaño de cada imagen. Cada imagen está separada del anterior por una coma
- Para cada uno, escribimos:
1.	Un nombre de archivo de imagen (elva-fairy-480w.jpg)
2.	Un espacio en blanco
3.	El ancho intrínseco( original) de la imagen en píxeles (480w): Esta usa la unidad w.

### Atributo sizes
- Define un conjunto de condiciones como los media query de CSS.
- indica qué tamaño de imagen sería mejor elegir cuando se cumplen ciertas condiciones 
- Estas son las sugerencias de las que hablamos anteriormente
- Para cada una escribimos:
1.	Una condición de medios ((max-width: 600px)): Es una condición de media query CSS entre paréntesis . En el ejemplo estamos diciendo "cuando el ancho de la ventana gráfica es de 600 píxeles o menos".
2.	Un Espacio en blanco
3.	El ancho de la ranura(contenedor) que la imagen llenará cuando la condición sea verdadera. Se debe indicar una longitud absoluta (px , em) o relativa(porcentaje)


:::tip Entonces, con estos atributos establecidos, el navegador:
1.	Verificará el ancho del dispositivo.
2.	Resolverá qué condición de medios en la lista sizes es la primera que se cumple.
3.	Verificará la medida de la ranura dada a esa consulta de medios.
4.	Cargará la imagen referenciada en la lista srcset con coincidencia más cercana a la medida de la ranura.



:::



### Se puede usar el srcset sin sizes 
- Se puede usar el srcset sin sizes , especificando solo la densidad del pixel.

```html
    <img srcset="elva-fairy-320w.jpg,
    elva-fairy-480w.jpg 1.5x,
    elva-fairy-640w.jpg 2x"
src="elva-fairy-640w.jpg" alt="Elva dressed as a fairy">

```
:::tip observacion
- Si un pixel del dispositivo equivale a un pixel CSS , mostrara la imagen 320w.jpg
- Si dos pixeles del dispositivo equivale a un pixel CSS , mostrara la imagen 640w.jpg.
:::


:::tip ¿Sabias que?
- Los pixeles de CSS no tienen las mismas medidas que los pixeles del dispositivo
:::

:::tip info
 - [developer mozilla](https://developer.mozilla.org/es/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#%C2%BFc%C3%B3mo_se_crean_las_im%C3%A1genes_adaptables)
:::


## Picture

- El elemento HTML &lt;picture> es un contenedor usado para especificar múltiples elementos &lt;source> y un elemento &lt;img>   para proveer versiones de una imagen para diferentes escenarios de dispositivos. Si no hay coincidencias con los elementos &lt;source>, el archivo especificado en el atributos src del elemento &lt;img> es utilizado. La imagen seleccionada es entonces presentada en el espacio ocupado por el elemento &lt;img>.
- Mostrara la imagen que se considere más optima dentro de todas las imágenes especificadas en los elementos &lt;Source> (en el atributo src)
- Si ningún &lt;Source> es considerado optimo , muestra el &lt;img>.

- Para seleccionar la imagen óptima, se examina cada atributo srcset(tamaño especificado), media (media query), y type (tipo de dato) del &lt;source> para seleccionar la imagen compatible.
- El atributo media permite especificar una media query que se evaluará para seleccionar un elemento &lt;source>. Si la media query evalua a false, el elemento &lt;source> es omitido.
- El atributo type permite especificar un tipo MIME para los recursos dados en el atributo srcset del elemento &lt;source>. Si el navegador no soporta dicho tipo, el elemento &lt;source> es omitido.

:::tip info
[developer mozilla](https://developer.mozilla.org/es/docs/Web/HTML/Element/picture)
:::


## Elemento Source 

- Especifica un posible recurso para los elementos &lt;picture> , &lt;audio>  o &lt;video>

#### Atributo sizes
- [Ya lo dimos anteriormente](#atributo-sizes)
#### Atributo src
- Es la ubicación del recurso(archivo) a mostrar.
#### Atributo Type 
- El tipo  de recurso (MIME) , opcionalmente con un parámetro códecs.
#### Atributo media
-  Query Media destinado al recurso , esto solo debe usarse en un elemento &lt;picture> 
- [Mas info](http://www.w3bai.com/es/tags/att_media.html#gsc.tab=0)

#### [Atributos](https://developer.mozilla.org/es/docs/Web/HTML/Element/source#attr-type)

:::tip
Solo mostrara el recurso especificado en el atributo src si el navegador lo considera optimo.
:::


Ejemplo #1
```html
    <picture>
        <source srcset="mdn-logo-wide.png" media="(min-width: 600px)">
        <img src="mdn-logo-narrow.png" alt="MDN">
       </picture>

```
Ejemplo #2
```html
   <picture>
        <source media="(max-width: 799px)" srcset="elva-480w-close-portrait.jpg">
        <source media="(min-width: 800px)" srcset="elva-800w.jpg">
        <img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva">
      </picture>

```
:::tip Explicacion
- Los elementos  &lt;source> incluyen un  atributo media que contiene una condición de medios (media query); estas condiciones  se utilizan para  decidir qué imagen se muestra; se mostrará la primera que devuelva verdadero. En este caso, si el ancho de la ventana gráfica es de 799 px o menos, &lt;source> mostrará la imagen del primer elemento. Si el ancho de la ventana gráfica es de 800 px o más, será el segundo.  
- Los atributos srcset contienen la ruta a la imagen que se va a mostrar. Tenga en cuenta que tal como vimos &lt;img> anteriormente, &lt;source> puede tomar un  atributo srcset con varias imágenes referenciadas y un atributo sizes también.
- En todos los casos, debe proporcionar un  elemento &lt;img>, con src y alt, justo antes de  &lt;/picture> , de lo contrario, no aparecerán imágenes. Esto proporciona un caso predeterminado que se aplicará cuando ninguna de las condiciones de los medios sea verdadera (de hecho, podría eliminar el segundo elemento &lt;source> en este ejemplo) y una alternativa para los navegadores que no admiten el  elemento  &lt;picture>.
:::

:::tip info
- [Picture](https://developer.mozilla.org/es/docs/Web/HTML/Element/picture)
- [Explicacion](https://developer.mozilla.org/es/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#art_direction)
:::

## Inputs
```html
     <input type="text" />
     <input type="password" />
     <input type="number" />
     <input type="color" />
     <input type="file" />
     <input type="range" />
     <input type="checkbox" />
     <input type="radio" />
     <input type="date" />
     <input type="time" />
     <input type="month" />
     <input type="email" name="" id="">
     <input type="tel" name="" id="">
     <input type="datetime-local" name="" id="">
     <input type="week" name="" id="">
     <input type="search" name="" id="">
```
#### AutoComplete
```html
 <label >
      Elige el mejor framework:
      <input list="frameworks">
    </label>
    <datalist id="frameworks">
      <option value="React"></option>
      <option value="Vue"></option>
      <option value="Svelte"></option>
      <option value="Angular"></option>
    </datalist>
```
:::tip Observacion
- Es un input con un autocomplete.
- El input tiene un conjunto de valores(atributo value de option) definidos en el &lt;datalist> que se van a utilizar para el autocomplete.
- El valor del atributo list y el valor del atributo id del datalist deben ser iguales para vincularse y que el autocomplete funcione

:::


## Etiquetas meta
- Le asigna un color a la pagina o a la interfaz de usuario
```html
    <meta name="theme-color" content="#4285f4" />
```

### [Mas etiquetas metas](https://htmlhead.dev/#meta)

## Botones
```html
  <button disabled >Soy un button</button>
   <input type="button" value="Click Aqui" disabled="disabled">
```

## Algunas Etiquetas 

```html
  <del> Marcas las partes del texto que han sido suprimidas o sustituidas -- Es la alternativa a la etiqueta strike (obsoleta)</del>
  <ins>El elemento ins (insertado) marca las partes de un texto que han sido añadidos al documento.</ins>
  <kbd>Marca el texto que debe introducir el usuario.</kbd> 
  <q>Indica que el texto adjunto es una cita corta en línea. Este elemento está destinado a citas breves que no requieren saltos de párrafo; para citas de bloque independiente, utiliza el elemento blockquote</q>
  <sup>El elemento HTML  define un fragmento de texto que se debe mostrar, por razones tipográficas, más alto, y generalmente más pequeño, que el tramo principal del texto, es decir, en superíndice.</sup>
  <sub>El elemento HTML  define un fragmento de texto que se debe mostrar, por razones tipográficas, más bajo, y generalmente más pequeño, que el tramo principal del texto, es decir, en subíndice.</sub>
```
```html
 <label for="lenguajes">
    Lenguajes de progamación
  </label>
  <input list="listLenguajes" placeholder="seleccione 1"/>
  <datalist id="listLenguajes">
    <option value="Javascript"></option>
    <option value="Java"></option>
    <option value="PHP"></option>
  </datalist>
```
:::tip
- El valor del atributo list de la etiqueta &ltinput> debe ser igual al valor del atributo id de la etiqueta &lt;datalist>

:::

```html
   <label for="javascriptFramework">
    Framework  de javascript
   </label>

   <select >
    <option>Selecciona</option>
    <optgroup label="frontend">
       <option >Angular</option>
       <option >Vue js</option>
       <option >React</option>
    </optgroup>   
     <optgroup label="Backend">
       <option >MeteorJS</option>
       <option >ExpressJS</option>
    </optgroup>
   </select>
```

```html
 <!-- Detalles que el usuario puede abrir y cerrar a pedido -->
  <details>
     
    <summary>Encabezado visible</summary>  
    <p>Texto que es visible cuando se hace click en el encabezado</p>
  </details>
```
## Etiquetas multimedia
#### Audio
```html
    <audio controls>
      <source src="/sonido.mp4" >
  </audio>
```
#### Video
```html
<video controls>
      <source src="/sonido.mp4" >
  </video>
```
#### PDF
```html
  <object data="pdf.pdf">
      PDF
  </object>
```
#### Otro archivo HTML
```html
 <embed src="otroArchivo.html" type="">
```










## Errores comunes en HTML

####  Dar estilo al sitio web con HTML.
- Confunden HTML CON CSS
- LO DE HTML DEBE QUEDAR FEO, SOLO SIRVE PARA ESTRUCTURAR.
- Las cosas que se hagan con HTML deben ser para estructurar no para mejorar el apartado visual.


#### No usar etiquetas obsoletas.

- No uses etiquetas obsoletas.
- Hgroup es una etiqueta obsoleta por ejemplo
- Google castiga a quienes usan etiquetas antiguas, que están en desuso.

#### Usar una sintaxis incorrecta.
- Google posiciona mejor una página que esta semánticamente correcta.
- GOOGLE MANDA.
- La sintaxis es muy importante.

#### Mezclar dos lenguajes diferentes

- Ya sea con el atributo style , con un atributo de un evento javascript (onclick por ejemplo) o con la etiqueta style/script .
- Tenes que usar &lt;link> y &lt;script>
- Con esto separas el codigo para poder leeerlo mejor y poder corregir los errores mas fáciles .