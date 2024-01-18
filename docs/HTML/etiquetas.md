---
sidebar_position: 2
---


# Etiquetas
## Estructura Basica
 ```html
 <!DOCTYPE html>
<html lang="en">
<head>
<title></title>
</head>
<body>
</body>
</html>
 ```

 ### &lt;!DOCTYPE html>
 - Especifica la última versión de HTML.

### &lt;html lang="en">&lt;/html>
- Adentro de esta etiqueta tenemos toda la pagina
- Adentro tiene:
  - Lo que podemos ver en el sitio web(visualmente)
  - Lo que no podemos ver en el sitio web (visualmente)

### &lt;head>&lt;/head>
- Es lo que no podemos ver en el sitio web (visualmente)
- Adentro puede tener:
  - &lt;title>&lt;/title> : Es el titulo de la ventana del navegador
### &lt;body>&lt;/body>
- Es lo que podemos ver en el sitio web (visualmente)
- En HTML son cajitas dentro de otras cajitas y asi…


## Etiquetas especiales

### &lt;br>
- Genera una linea nueva.
- Es para tirar el resto de cajas abajo. Genera una línea nueva.

```html
<p > Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, facilis. <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque non quae possimus cupiditate nobis odit itaque consectetur eos illo repudiandae!. </p>
```
### &lt;div>&lt;/div>
- Es una caja que divide
- Es una caja que funciona como "contenedor" de otras cajas
- Sirve para agrupar "cajas" que esten relacionadas.
- Son útiles para CSS
- Es una etiqueta en bloque.
```html
<div><p>texto</p></div>
```

### Etiqueta center
- Centra todo el contenido que tenga adentro

```html
<center>
<h1>Centrado</h1>
<img src="imagen.jpg" alt="" />
</center>
```
:::warning
- Su unico uso es en plantillas de correos.
- Para sitios web no se recomienda.

:::

### &lt;link rel="icon" href="" >
- Se ubica adentro del &lt;head>&lt;/head>
- El valor del atributo href especifica la ubicacion de la imagen que se va a asignar como icono (favicon)
- La imagen debe tener formato .ico

```html
<link rel="icon" href="imagen.ico" >
```
### Etiqueta span
- Es como DIV , pero es una etiqueta en linea.
- Sirve para agrupar elementos en línea.
- Es util para aplicarle estilos css a una parte del texto

```html
<div style="border: 1px dotted blue;">
  <h4>Ejemplo de div y span </h4>
  <p>
    Esto es un párrafo dentro de un div,
    <span style="color: red;"> y esto un span dentro de un párrafo. </span>
  </p>
</div>
```
## Etiquetas de texto
### Titulos

```html
<h1>Contenido</h1>
<h2>Contenido</h2>
<h3>Contenido</h3>
<h4>Contenido</h4>
<h5>Contenido</h5>
<h6>Contenido</h6>
```
- El H1 posiciona en Google y se recomienda tenerlo una vez por archivo HTML (POR SEO)


:::tip Consejos para SEO
- H1 : Se utiliza  una vez por archivo y  representa titulo principal de la pagina
- H2 : Se utiliza para  subtitulos
- H2 Y H3 : Se utiliza  varias veces por archivo pero sin abusarse
- H4 , H5 Y H6 : Utilizala las veces que quieras
- H4 : Se utiliza para  articulos y secciones
- El tamaño de la letra luego se modifica con CSS.
:::


### Parrafo

```html
<p>Contenido</p>
```
### Otras etiquetas

```html
<b>Negrita</b>
<i>Italica</i>
<strike>Tachada </strike>
<small>Chiquita </small>
```

### Enlaces

```html
<a href="">contenido</a>
```
- Tiene el atributo href y como valor tiene la url(ruta) de a donde nos vamos a dirigir una vez que se haga clic en el contenido

```html
<a href="https://facebook.com">Click aqui</a>
```
#### Rutas locales

- Son las que estan en nuestras carpeta, las que estan en el servidor



```html
<a href="../pagina2.html">Click aqui</a>
```
:::tip
- Con "/" Accedemos a la carpeta/archivo
- Con "../" Volvemos a la carpeta de atrás.
:::

#### Rutas externas
- Son las que no tenemos de manera local.
- Se usa http / https(protocolo de transferencia de hipertexto)

```html
<a href="https://facebook.com">Click aqui</a>
```

#### Atributo target
- Responde a la pregunta  : ¿El servidor en  donde lo tiene que abrir? 
- Posibles respuestas : En una pestaña aparte, en la misma pestaña,etc
- Con el valor _blank , la url se abre en una pestaña aparte
```html
<a href="https://google.com" target="_blank">Click aqui</a>
```

#### Navegar de forma interna
```html
<a href="#codigo">Click Aqui para ir hacia el codigo</a>
<p>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quaerat hic fuga commodi in aliquid distinctio alias esse fugiat? Cumque exercitationem voluptates dolores obcaecati facilis sint ullam dignissimos dolorem cupiditate veritatis nulla deleniti ab, earum est laudantium officiis odio ad magni! Voluptas architecto debitis quia ducimus voluptate repellendus earum, odio consectetur sed impedit. Atque, dicta consectetur! Vitae cupiditate temporibus deleniti necessitatibus obcaecati nam omnis minus incidunt fugit sed ut facilis perferendis aliquam, voluptatem quas! Qui architecto eum debitis laboriosam, animi aut suscipit laudantium tenetur nihil ad quis, unde dolorum odio corporis inventore consectetur. Enim dicta aut est! Adipisci assumenda alias porro sed id quia illo maxime nulla exercitationem aperiam. Soluta molestias libero veniam, ducimus cumque placeat? Cupiditate a aperiam, doloribus nobis ex officia animi reprehenderit velit obcaecati nisi, molestias eveniet, odio mollitia commodi ipsa. Ab necessitatibus ipsam nobis harum! Nemo, neque reiciendis sequi laudantium ab non aut expedita beatae corrupti labore, nam nulla, eligendi rerum exercitationem. Minus laboriosam explicabo laborum, ea eligendi dignissimos modi nam amet culpa. Ipsam fugiat ex maiores inventore explicabo asperiores incidunt molestiae adipisci! Aliquam accusantium sunt culpa nobis iste eos consequatur rerum, totam nihil voluptatum! At dolorum alias, inventore sed non consequatur consequuntur facilis soluta excepturi. Nostrum totam blanditiis saepe nihil explicabo voluptatem doloribus, consequatur, necessitatibus enim ipsam architecto eligendi ducimus, praesentium fugiat. Dolorum, itaque nemo. Dolor iusto asperiores tenetur nam pariatur autem itaque modi, quod a nulla, eum dicta minima ipsa corrupti fugit molestias quam, quidem cupiditate quaerat provident sit dolore quos. Deleniti vel quae totam, quisquam aliquid, quas iste quo minima eveniet sint pariatur? Earum mollitia nihil suscipit magnam, expedita excepturi! Blanditiis, cupiditate, ut asperiores ab odit accusamus quasi, voluptate aperiam laudantium quisquam reprehenderit. Tempora iste odio commodi, dolor, doloremque qui neque nemo quasi expedita quas delectus, laborum obcaecati incidunt fugit. Aliquam numquam labore inventore repellat ducimus doloremque exercitationem et. Quasi cum doloremque aspernatur quidem adipisci quod consequuntur dignissimos, suscipit, odit voluptas minima, excepturi placeat non commodi cumque ipsum veritatis alias tenetur. Culpa reiciendis quo nemo fugiat harum consectetur dolor, libero officia error alias quibusdam deleniti architecto, aspernatur natus, iure optio cumque. Unde dignissimos asperiores consequuntur ab nesciunt corporis atque voluptas placeat nihil nisi aliquam et, voluptate natus maxime delectus aspernatur sunt quia tempora. Voluptatem, placeat quos quia eos provident laborum optio ad aliquam voluptatum velit, impedit illo quasi labore rerum cum alias asperiores magni, praesentium nisi nesciunt ducimus minima distinctio harum. Dolor id ipsa, porro repellat illum rerum voluptatem veniam sed quia aliquam quas! Magnam dicta sit, culpa, laboriosam ipsum voluptatem enim earum repellat deleniti ullam quos a reiciendis esse quidem officiis obcaecati placeat saepe autem? Distinctio sapiente repellendus incidunt, error rerum unde fugit quasi totam iure ipsa facilis! Nesciunt veniam unde sapiente laudantium qui cupiditate perspiciatis deserunt temporibus, cum non. Ducimus, odit expedita eligendi ad vitae laborum. Eius amet ex sequi maiores a error nisi voluptatem voluptates blanditiis? Quis, iusto eveniet quia natus tempore aut quos corrupti consequuntur, adipisci eum assumenda fuga. Minus accusantium, voluptatum enim fuga corporis beatae odit reprehenderit deleniti? </p>
<h2 id="codigo">El codigo es: fhdfdhhifudhfdiu</h2>
```
:::tip Observacion

- El enlace , en el  atributo href tiene como valor "#codigo" que hace referencia al atributo id del h2
- Por lo tanto el enlace se dirige hacia el h2
- Entonces el valor del atributo href seria "#valor del id del elemento a dirigir"
- El atributo id es un identificador.

:::

### Busque otras etiquetas

## Etiquetas para hacer una lista

### Lista desordenada
```html
<ul></ul>
```
- Y adentro tiene las etiquetas &lt;li>&lt;/li> , que son los elementos de la lista .
- Puede haber tantas etiquetas li, como elementos tenga la lista.

```html
<ul>
<li>Item1</li>
<li>Item2</li>
<li>Item3</li>
<li>Item4</li>
</ul>
```

### Lista ordenada
- Lo mismo que para hacer una lista desordenada pero en lugar de la etiqueta &lt;ul>&lt;/ul> , usamos  &lt;ol>&lt;/ol>

```html
<ol>
<li>Item1</li>
<li>Item2</li>
<li>Item3</li>
<li>Item4</li>
</ol>
```