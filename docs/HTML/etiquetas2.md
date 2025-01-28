---
sidebar_position: 3
---

# Etiquetas #02

## Multimedia
### Imagenes
```html
<img src="" alt="" />
```
- El atributo src es casi lo mismo que el atributo href, ósea su valor es la ruta de donde se encuentra la imagen.
- La ruta puede ser externa o interna(lo mismo que href)


```html
<!-- Interna -->
<img src="imagen.jpg" />
<!-- Externa -->
<img src="https://i.blogs.es/594843/chrome/450_1000.jpg">
```

#### Atributo width y height
- Width : Ancho de la imagen
- Height : altura de la imagen

```html
<img src="https://i.blogs.es/594843/chrome/450_1000.jpg" width="200px" height="200px">
```
:::tip
Para que se mantenga una resolución decente, se recomienda usar solo un atributo a menos que los dos tenga valores proporcionales.
:::
:::warning
Si estos atributos están, no se podrá trabajar en css con estas propiedades.
:::


#### Atributo Alt
- Es muy importante para el SEO
- Define una especie de título.
- En caso de que no se encuentre la imagen, se va a generar un texto con el valor del atributo alt

```html
<img src="imagen.jpg" alt="Imagen no encontrada">
```

#### Atributo title
- Es para poner el titulo de la imagen
- Al pasar por encima de la imagen(con el mouse), aparecerá una especie de texto con el valor de title.

```html
<img src="imagen.jpg" title="titulo">
```

### Video

```html
<video src=""></video>
```
- Tiene el atributo src , cuyo valor es la ubicacion del video a insertar en la pagina.

```html
<video src="musica.mp4"></video>
```

- Tiene el atributo controls , el cual no contiene ningun valor . Bueno en realidad el valor lo configura el navegador . 
-  Gracias al atributo controls , podemos tener los controles (para controlar) del video.

```html
<video src="musica.mp4" controls></video>
```

### Audio
- Es lo mismo que &lt;video>
- Tiene el atributo src y controls

```html
<audio src="musica.mp3" controls></audio>
```

## Formulario
- La etiqueta &lt;form> en HTML se utiliza para crear un formulario en el que los usuarios pueden ingresar datos. Dentro de esta etiqueta, los atributos action y method son esenciales para determinar cómo se enviarán los datos del formulario al servidor.
- Para crear un formulario se usa la etiqueta &lt;form>&lt;/form>
  
```html
<form action=""></form>
```
- Adentro del form , se insertan etiquetas input

```html
<form action="">
<input type="text" />
</form>
```
- Un input es un elemento que permite al usuario ingresa un  valor (dato).
- El tipo de dato que el usuario puede insertar depende del valor del atributo type y de las validaciones definidas para ese input.

### Atributos del input

#### Atributo name
- Se usa para lenguajes de backend ( lenguaje de servidor)
- Se usa para "identificar" el input
- Es OBLIGATORIO ya que sirve para que el servidor pueda identificar los datos y procesarlos.
#### Atributo type
- Es el tipo de dato que se le pide al usuario.
- Valores : 
   - text: Valor por defecto , es texto
   - password : Contraseña
   - number : Solo numeros
   - email : Valida que sea un email
   - color : Es un color cualquiera
   - range : Nos permite elegir un numero del X al Z ( X = min y Z = max) 
   - date : Fechas
   - time : hora
   - button : Para que funcione como boton . Debe contener el atributo value que seria lo que "mostraria" el boton.
   - submit :  Para que funcione como boton .  Es el input que envia la informacion del formulario al servidor . Viene con el atributo value ya definido por el navegador. Todo formulario debe contener AL MENOS UN INPUT DE ESTE TIPO
   - [Mas valores](https://www.w3schools.com/tags/att_input_type.asp)


```html
<input type="date" />
<input type="submit" />
<input type="range" />
<input type="range" min="1" max="5" />
<input type="color" />
<input type="number" />
```

#### Atributo required
- Es para que el input sea obligatorio
- No tiene valor

```html
<input type="time" required/>
```

#### Atributo value
- Es el valor por defecto del input

```html
<input type="text" value="VALOR POR DEFECTO">
```

:::tip
LAS VALIDACIONES SE HACEN EN EL SERVIDOR PARA EVITAR FUTUROS HACKEOS
:::

### Atributos del form

#### Atributo action
- El atributo action define la URL a la que se enviarán los datos del formulario cuando el usuario lo envíe. Es decir, especifica la dirección del servidor que va a recibir la información del formulario.
   -	Valor: La URL del servidor donde se procesarán los datos. Puede ser una dirección relativa (por ejemplo, /submit) o absoluta (por ejemplo, https://www.example.com/submit).
   -	Si no se especifica el atributo action, el formulario se enviará a la misma URL donde se encuentra la página actual.
- Ejemplo:
```html
<form action="/procesar-datos">
  <!-- Campos del formulario -->
</form>

```



#### Atributo method 
- El atributo method especifica el método HTTP que se utilizará para enviar los datos del formulario al servidor. Los dos métodos más comunes son:
   -	GET: Los datos del formulario se envían a través de la URL como query. Este método es adecuado para búsquedas o peticiones donde la seguridad no es una preocupación, ya que los datos son visibles en la URL.
   -	POST: Los datos se envían en el cuerpo de la solicitud, lo que significa que no son visibles en la URL. Este método es más seguro y se usa para enviar datos sensibles, como contraseñas o información personal.
- Valores por defecto:
   -	Si no se especifica el atributo method, el valor por defecto es GET.




```html
<form action="post">
<form action="get">

```

### Etiqueta textarea

```html
<textarea name="" id="" cols="30" rows="10"></textarea>
```
- Con el atributo readonly solo se va a poder leer (no se puede introducir nada adentro)
- Tambien funciona como un input y va adentro de un form

```html
<textarea name="" id="" cols="30" rows="10" readonly></textarea>
```

## Metadatos
- Es información que describe otra información(datos/objeto)
- Describen recursos.
- En el html para esto se utiliza la etiqueta &lt;meta> y se inserta en el head.

```html
<head>
<meta />
<title>Sitio web</title>
</head>
```

### Codificación
- Para cambiar la codificación(reconocer caracteres) del archivo
- Se usa la etiqueta meta con el atributo charset.
- El valor del atributo charset(conjunto de caracteres) es la codificación .

```html
<meta charset="utf-8">
```

### Para el SEO

```html
<meta name="tipoDeMeta" content="Contenido">
```

#### Palabras claves del sitio web
- Ejemplo de una tienda de comida
```html
<meta name="keywords" content="harina,leche,huevo">
```
- Cuando en google se busquen la palabra harina , leche o huevo , aparecera su pagina

#### Describir la pagina
```html
<meta name="description" content="Alimentos S.A es una compañia destinada a brindar los mejores alimentos de calidad en tiempo y forma">
Indicar el auto de la pagina
```

#### Indicar el autor de la pagina
```html
<meta name="author" content="Federico">
```
#### Indicar si tenemos copyright
- En content hay que indicar el nombre de la empresa registrada como dueño de los derechos de esa empresa.


```html
<meta name="copyright" content="Facebook Inc.">
```

#### Indicar si la pagina va a ser indexada o no
- Para ser indexada el value de content debe ser index
- Para no ser indexada el value de content debe ser noindex

```html
<meta name="robots" content="index">
<meta name="robots" content="noindex">
```

#### Hay otros metas...



## Tabla
- Tiene columnas (filas verticales) y filas (filas horizontales)
- Generalmente con la tabla se agrupa datos del mismo tipo con las "columnas"
- Con la etiqueta &lt;table>&lt;/table> se inicia una tabla
- Con la etiqueta &lt;tr>&lt;/tr> definimos las filas, se ubica  adentro de table
- Para definir los campos de una  fila , se usa la etiqueta &lt;td> , se ubica adentro de &lt;tr>&lt;/tr>

```html
<table>
<tr>
<td><b>Nombre</b></td>
<td><b>Apellido</b></td>
<td><b>Edad</b></td>
</tr>
<tr>
<td>Juan</td>
<td>Perez</td>
<td>25</td>
</tr>
<tr>
<td>Domingo</td>
<td>Perez</td>
<td>28</td>
</tr>
<tr>
<td>Rodrigo</td>
<td>Juan</td>
<td>25</td>
</tr>
</table>
```

:::tip Observación

- Es una tabla de 4 filas, donde cada fila tiene 3 celdas.
- Cada fila es representada por un &lt;tr>&lt;/tr>
- Cada celda de una fila es representada por un &lt;td>&lt;/td>
:::

#### Atributo border
- Genera un borde.
- NO RECOMENDADO , Se suele hacer con css.

```html
<table border="1"></table>
```


#### Extra
- Podemos añadir encabezados con la etiqueta &lt;th>
- [Conceptos básicos de las tablas HTML](https://developer.mozilla.org/es/docs/Learn/HTML/Tables/Basics)
- [Funciones avanzadas de las tablas HTML y accesibilidad](https://developer.mozilla.org/es/docs/Learn/HTML/Tables/Advanced)
- [¿Cómo crear tablas en HTML?](https://keepcoding.io/blog/como-crear-tablas-en-html/)
- [ELEMENTO COLGROUP](https://www.htmlquick.com/es/reference/tags/colgroup.html)



