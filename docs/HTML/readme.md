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
####  
## Atributos 
- Las etiquetas tienen atributos
- Los atributos son las propiedades (caracteristicas que tiene la caja)
- Los atributos tienen un valor que se ponen entre comillas.
- Ejemplo : &lt;etiqueta atributo="valor">&lt;/etiqueta>
- [Inputs](../../static/img/HTML_INPUT.jpg)
- [Todos los atributos](https://www.w3schools.com/tags/ref_attributes.asp)
- [Atributos globales](https://www.w3schools.com/tags/ref_standardattributes.asp)
#### Atributos de imagen
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