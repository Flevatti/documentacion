---
sidebar_position: 1
---
# CSS

:::tip Consejo
Siempre como primera linea se debe aplicar:


```css
 * {
    margin:0px;
    padding:0px;
    box-sizing:border-box;
 }

 img {
  max-width:100%;
 }
```


:::



## Propiedades
- Una propiedad define qué aspecto de un elemento deseas modificar, como el color, tamaño de fuente, o márgenes.
- Una propiedad es una característica específica de un elemento HTML que puedes estilizar (modificar). Representa qué aspecto deseas modificar, como el color, tamaño de fuente, margen, etc.
- Sintaxis básica de una propiedad:
```css
propiedad: valor;
```
- Ejemplo práctico:
```css
color: red;
```
:::tip Observación
-  ¿Qué hace? Cambia el color del texto a rojo.
-  Uso real: Imagina un aviso importante en rojo.
:::

#### Declaración en CSS
- Una declaración incluye una propiedad y su valor, separados por dos puntos (:) y termina con un punto y coma (;).
- Una declaración especifica el valor de una propiedad. Es la combinación de:
  1.	Propiedad (qué aspecto se modifica)
  2.	Valor (cómo se modifica o como debe verse).
- Cada declaración termina con un punto y coma (;) y se escribe dentro de un bloque de declaraciones “{}”.
- Sintaxis de una declaración:
```css
propiedad: valor;
```
Ejemplo:
```css
color: blue;
```
:::tip Observación
-	Propiedad: color
-	Valor: blue
:::


#### Bloque de declaraciones
- Un bloque contiene una o más declaraciones. Se escriben entre llaves {}.
- Lo que esta entre llaves “{}” es un bloque de declaraciones que le pertenece a un selector.
- Sintaxis de un bloque de declaraciones:
```css
{
    propiedad1: valor1;
    propiedad2: valor2;
    ...
}

```
- Ejemplo:
```css
{
    color: blue;
    font-size: 18px;
    ...
}

```

#### Reglas CSS
- Una regla CSS combina:
  1.	Un selector: Define a qué elementos aplicar los estilos.
  2.	Un bloque de declaraciones: Contiene una o más declaraciones para personalizar todos los elementos que selecciona el selector

- Ejemplo práctico:
```css
button {
    background-color: blue;
    color: white;
    border-radius: 5px;
}

```
:::tip Observación
- ¿Qué hace?
  -	Cambia el color de fondo del botón a azul.
  -	Cambia el texto del botón a blanco.
  -	Redondea las esquinas del botón con un radio de 5px.
:::


:::tip Documentación
- [Propiedades](https://www.w3schools.com/cssref/index.php)
- [¿Es compatible?](https://caniuse.com/)
:::

## Selectores de atributo
- Un selector de atributo te permite seleccionar un elemento en base a un atributo y su valor especifico.
- Sirve para seleccionar un elemento que contenga X atributo o también para seleccionar un elemento que contenga X atributo con X valor. Incluso podés seleccionar simplemente los elementos que contenga X atributo sin importar que elemento sea.


#### Atributo específico 
- Selecciona los elementos que tengan un atributo específico, sin importar su valor:
```css
 [atributo] {
    /* estilos */
}

```
- Ejemplo:
```css
[disabled] {
    color: gray;
}

```
:::tip Observación
- Selecciona todos los elementos con el atributo disabled.
:::


#### Atributo con un valor exacto
- Selecciona elementos donde el atributo tiene un valor específico:
```css
 [atributo="valor"] {
    /* estilos */
}


```
- Ejemplo:
```css
[type="text"] {
    border: 1px solid black;
}

```
:::tip Observación
- Aplica estilos solo a los elementos con type="text".
:::


#### Aplicar a un elemento especifico
- Puedes combinar selectores de atributo con clases, pseudoclases o elementos:

- Ejemplo:
```css
input[required]:focus {
    border-color: green;
}


```
:::tip Observación
- Aplica estilos a los elementos &lt;input> que tienen el atributo required y están en foco.
:::


Otro ejemplo:
```html
<style>


   /* Etiqueta <p> que tenga el atributo title */
     p[title] {
          font-size:50px;
     }
  
     
 </style>
 <p title>Titulo</p>

</body>

```
:::tip Observación
- Aplica estilos a las etiquetas p que contengan el atributo title
:::

- Otro ejemplo:

```html
<body>
 <style>


   /* Etiqueta <a> que tenga el atributo href con el valor https://www.google.com/  */
     a[href="https://www.google.com/"] {
          font-size:50px;
     }
  
     
 </style>
 <a href="https://www.google.com/">Google</a>

</body>


```
:::tip Observación
- Aplica estilos a las etiquetas a que tengan el atributo href con el valor https://www.google.com/.

:::




- Podes usar los comodines en el valor del atributo:
  - [atributo^=”valor”] = Que comience con “valor”. 
  - [atributo~=”valor”] = Que contenga la palabra “valor” (separada por espacio del resto de las palabras).
  - [atributo|= “valor”] = Que sea “valor” o que empiece por “valor” seguido de un guion.
  - [atributo$=”valor”] = Que termine con “valor”.
  - [atributo*= “valor”] = Que contenga “valor” en cualquier parte.


- [Mas info](https://developer.mozilla.org/es/docs/Web/CSS/Attribute_selectors)





## Selectores CSS

- Los selectores se utilizan para seleccionar los elementos que deseamos modificar con CSS.
-  [Lista de selectores](https://www.w3schools.com/cssref/css_selectors.asp)

## Cascada CSS
- Uno de los conceptos más importantes de CSS, , es el denominado Cascada de CSS. 
- Cuando hablamos de la Cascada CSS nos referimos al algoritmo o conjunto de reglas y normas que tiene el navegador para aplicar estilos CSS a un elemento HTML.
- Imagina que tenemos enlazados dos archivos .css mediante &lt;link> y en cada uno tenemos un mismo selector .text aplicando colores diferentes. ¿Cuál de los dos se aplicará finalmente? Quizás pienses que el último que haya sido definido. A veces, esto es cierto, pero otras muchas veces no. Expliquemos la razón.

### Importancia
- Los estilos pueden tener una importancia concreta, eso le da mayor o menor prioridad.
#### !important
- Existe la posibilidad de añadir el texto **"!important"** al **final de una regla**(propiedad - valor), consiguiendo que el navegador le dé **prioridad** a la hora de evaluar dichos estilos sobre otros. 
  
```html
<body>

  <div class="text">Texto del elemento</div>

<style>
.text {
  color: red!important;
}

.text {
  color: blue;
}
</style>
</body>

  ```
:::tip Observación

Observa que, a pesar de tener definido un color blue posteriormente, gracias al texto !important le dará prioridad al anterior, dibujando el color de texto en rojo, en lugar de azul. En el caso de tener varias reglas con !important, prevalecerá la que además se encuentre en último lugar.
:::
### Origen
- Existen varios orígenes de CSS, cada uno con una prioridad específica.
- La cascada tiene en cuenta el origen de las hojas de estilo. Generalmente, no necesitaremos preocuparnos de este factor, ya que nos centraremos casi siempre en el CSS de autor. 
- Tenemos 3 orígenes
#### 3 - Agente de Usuario
- Estilos CSS que tiene y aplica el navegador por defecto.
- Son los estilos menos importante . 
- Su nivel de prioridad es 3 (el 1 y el 2 son mas importantes)  
#### 2 - CSS de usuario
- Estilos CSS que añade el usuario para personalizar, por ejemplo, con UserStyles.
- Son mas importante que los "Agente de usuario"
- Su nivel de prioridad es 2 (Es mas importante que "Agente de usuario")
#### CSS de autor
- Son los estilos CSS que crea el desarrollador en la página web.
- Son los estilos que tienen mas importancia.
- Su nivel de prioridad es 1 (Es mas importante que los otros dos)


:::tip
En el caso de que una propiedad CSS de cada origen tuviera definido un !important, el orden de importancia anterior se invertiría, resultando que el CSS del agente de usuario tendría prioridad sobre el CSS de usuario y de autor.

:::
### Orden de aparición
- El orden en el que se procesa el CSS influye a la hora de resolver conflictos.
- Esta suele ser una de las partes de la cascada que más clara suele estar, ya que es bastante intuitiva.

```html
<html>
<head>
  <link rel="stylesheet" href="index.css" />
  <style>
    .text { color: red }
  </style>

</head>
<body>
  <div class="text">¡Desde Manz.dev puedes ver mis streams!</div>
</body>
</html>

```
index.css
```css
.text {
    color:blue;
}

```
:::tip Observación
- El texto es de color rojo , ya que la etiqueta &lt;style> se definio luego de la etiqueta &lt;link>
:::
#### Si cambiamos el orden

```html
<style>
    .text { color: red }
  </style>
  <link rel="stylesheet" href="index.css" />

```
:::tip observación
El texto es Azul.
:::


#### Conclusión
- La última es la que prevalece porque «sobreescribe» a la anterior.
- Prevalece siempre la última regla(propiedad) definida.
- La ultima propiedad sobrescribe a la anterior.

### Especificidad
- Cuanto más específicos sean los estilos CSS, mayor prioridad.


| Componente | Explicación | Prioridad | Especificidad
| - | - | - | - |
| Atributo style | El atributo style en un elemento HTML | Prioridad 1 | Especificidad de 1000| 
| Componente ID | Número de veces que aparece un #id en el selector | Prioridad 2 | Especificidad de 0100| 
| Componente Clase | Número de veces que aparece una .clase , :pseudoclase o [atributo] en el selector | Prioridad 3 | Especificidad de 0010| 
| Componente Elemento | Numero de veces que aparece un elemento o un ::pseudoelemento en el selector | Prioridad 4 | Especificidad de 0001| 

:::tip Observación
- la ID tiene mas prioridad que la clase y el elemento.
- El Elemento tiene menos prioridad que la ID y la Clase.
:::
#### A realizar sumas
- Para saber si un selector CSS es más específico que otro (y, por lo tanto, el navegador le da prioridad), se asigna un valor a cada tipo de selector según su jerarquía y luego se suman. El resultado forma un número que indica la especificidad:
```css
div { ... }                   /* Especificidad: 0,0,1 (1 elemento) */
div div { ... }               /* Especificidad: 0,0,2 (2 elementos) */
#pagina div { ... }           /* Especificidad: 1,0,1 (1 id y 1 elemento) */
#pagina div:hover { ... }     /* Especificidad: 1,1,1 (1 id, 1 pseudoclase y 1 elemento) */
#pagina div:hover a { ... }   /* Especificidad: 1,1,2 (1 id, 1 pseudoclase y 2 elementos) */
#pagina .sel:hover>a { ... }  /* Especificidad: 1,2,1 (1 id, 1 clase, 1 pseudoclase y 1 elemento) */

```
:::tip Observación
- En la suma , no se tiene en cuenta el atributo style
- Esto es porque siempre  tendrá preferencia directa, ya que es la forma más específica.
:::
:::tip info
- [La cascada de CSS: Importancia, Especificidad y Orden](https://lenguajecss.com/css/cascada-css/que-es-cascada)
- [Cascada y herencia](https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
- [¿Conocemos realmente cómo funciona lacascada de CSS?](https://www.paradigmadigital.com/dev/como-funciona-cascada-css/)
:::
### Capas
- Los estilos CSS se pueden aislar en capas fusionables
- [Mas info](../CSS/at-rules.md#layer)
## Shorthand 
- Las propiedades abreviadas (Shorthand ) son propiedades CSS que le permiten establecer los valores de varias otras propiedades CSS simultáneamente
- La especificación CSS define propiedades abreviadas para agrupar la definición de propiedades comunes que actúan sobre el mismo tema. 
- Por ejemplo, la propiedad CSS background es una propiedad abreviada que puede definir los valores de background-color, background-image, background-repeat y background-position
- El ”Prefijo” de una propiedad suele describir el tema en común. Ej: font-** , margin-\** , etc.

:::tip
- Si queres buscar propiedades que "modifiquen"  algo en especifico busca por su prefijo. Ej : Si queres modificar la fuente de texto , busca las propiedades con el prefijo font.
:::
:::tip info
- [Propiedades abreviadas](https://developer.mozilla.org/es/docs/Web/CSS/Shorthand_properties)
- [¿Qué es Shorthand en CSS?](https://keepcoding.io/blog/que-es-shorthand-en-css/)
- [Propiedades shorthand](https://uniwebsidad.com/libros/css-avanzado/capitulo-1/propiedades-shorthand)
:::


## Box Model
- Cada elemento/etiqueta HTML es una “caja”
- Una caja  tiene “4 partes (o áreas)”
   -	Content (Contenido)
   -	Padding (Relleno)
   -	Border (Borde)
   -	Margin (Margen)
#### Area Content
- Contiene el contenido "real" del elemento, como texto, una imagen o un reproductor de video
- Contiene lo que queremos mostrarle al usuario.
- Se puede modificar con las propiedades width y height.
#### Area Padding
- Envuelve el área del contenido.
- El padding es una separación que existe entre el contenido y el borde de la caja, el cual se utiliza para dar una apariencia estética más atractiva y que el contenido no este pegado al borde.
- El relleno es espacio en blanco alrededor del contenido.
- Se puede modificar usando la propiedad padding y otras relacionadas.
- La propiedad padding solo te permite añadir relleno (valor positivo)
#### Area Border
- El borde es la línea que rodea la caja, es como la frontera que rodea al elemento
- Envuelve el area del contenido y del relleno.
- El borde se dibuja entre el margen y el área de relleno de una caja 
- Se puede modificar utilizando la propiedad border y otras relacionadas.
#### Area Margin
- Es utilizada para separar al elemento del resto de sus vecinos.
- Es la capa más externa
- El margen es un espacio invisible que hay alrededor de la caja. Aleja el resto de elementos de la caja.
- Envuelve las otras tres areas.
- Seria el espacio en blanco entre cajas.
- Se puede modificar utilizando la propiedad margin y otras relacionadas.
- La propiedad margin te permite agregar espacio (valor negativo) o eliminar espacio (valor negativo)

#### Outline
- No pertenece al modelo de caja , pero es útil aprenderlo.
- Outline es la línea que rodea a la caja entre el border y el margin. Se utiliza para dibujar un contorno alrededor de un elemento
- Se modifica con la propiedad outline,
### Tipos de cajas
- Las cajas a su vez se clasifican en dos tipos (Existe un tercer tipo , pero este solo se aplica con CSS)
#### Cajas en bloque
-	La caja fuerza un salto de línea (La siguiente caja se ubica debajo de esta) .
-	La caja se extenderá para llenar todo el espacio disponible que haya en su contenedor. En la mayoría de los casos, esto significa que la caja será tan ancha como su contenedor, y llenará el 100% del espacio disponible. 
-	Ocupara todo el ancho disponible.
-	Se respetan las propiedades width y height.
-	El relleno, el margen y el borde mantienen a los otros elementos alejados de la caja.
- Elementos de este tipo: &lth1> y &lt;p>

#### Cajas en línea
-	La caja no fuerza ningún salto de línea (La siguiente caja se ubica  alado de esta)
-	Las propiedades width y height no se aplican.
-	Se aplican relleno, margen y bordes verticales, pero no mantienen alejadas otras cajas en línea.
-	Se aplican relleno, margen y bordes horizontales, y mantienen alejadas otras cajas en línea.
- Elementos de este tipo: &lta> , &lt;span> , &lt;em> y &lt;strong>

#### Cajas mixtas
- Este tipo de caja , solo se aplica con CSS
- Proporciona un punto medio entre cajas en bloques y cajas en linea.
- Sus caracteristicas:
    - Utiliza las propiedades width y height
    - No fuerza un salto de línea (La siguiente caja esta alado)
    - El relleno , el margen y el borde mantienen a  los otros elementos alejados de la caja.
    - Solo se hace más grande que su contenido , si añades las propiedades width y height.

#### Propiedad display
- El tipo de caja que se aplica a un elemento esta definido por la propiedad display
- Sus valores son:
  - block : Se comporta como una caja en bloque
  - inline : Se comporta como una caja en línea
  - inline-block : Se comporta como una caja mixta   

:::warning
 El comportamiento de las cajas se puede modificar utilizando Flex o grid. Este tipo de modificación se suele llamar visualización interna.
:::
### Tamaños de la caja
#### Modelo de caja estándar
- Cuando estableces los atributos width y height para una caja , defines el ancho y el alto del contenido de la caja.
- Cualquier area de relleno (padding) y de border (borde) se añade a ese ancho y alto para obtener el tamaño total que ocupa la caja.
- Tamaño total de la caja = width + height + border + padding
- Ancho = Width + Bordes left y right + padding left y right
- Altura = Height + Bordes bottom y top + padding bottom y top

:::tip
El margen no se cuenta para el tamaño real de la caja; por supuesto, afecta al espacio total que la caja ocupa en la página, pero solo al espacio de fuera de la caja. El área de la caja se termina en el borde, no se extiende hasta el margen.

:::
#### Modelo de caja alternativo
- En este modelo , el border y el padding no se cuenta para el tamaño real de la caja.
- Tamaño total de la caja = width + height
- Ancho = Width
- Altura = Height 
#### Propiedad box-sizing
- La propiedad box-sizing (tamaño de caja) establece como se calcula el ancho y alto total de un elemento. 
- Recuerda que en HTML todos los elementos son una caja y tienen un tamaño.
- La propiedad box-sizing tiene dos valores posibles: content-box y border-box. El primero es el valor por defecto así que no es necesario colocarlo.


- Con la propiedad box-sizing modificamos  el modelo que va a utilizar el elemento.
- Sus valores son:
  - content-box : Utiliza el modelo de caja estándar. En este valor el tamaño de la caja varia segun el width , height , padding y border. El comportamiento por defecto de los navegadores al calcular el ancho y alto de un elemento es aplicar la anchura y altura al área de contenido, sin tener en cuenta el borde y padding.
  - border-box : Utiliza el modelo de caja alternativo. En este valor , el tamaño de la caja es el de  width y height. En lugar de sumar, el padding y border se restan del ancho y del alto para que después la suma total sean las medidas exactas.
- Las diferencias entre content-box y border-box se pueden ver con la siguiente imagen. En el content box el padding y border del elemento se dibujan por fuera de la anchura y altura (se suman), mientras que en border-box, el padding y border se dibujan dentro del ancho y alto (se restan):
![Diferencia entre content-box y border-box](https://res.cloudinary.com/practicaldev/image/fetch/s--kV-IdEHC--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/88hwiwderf9uk6ildd7w.jpg)


:::tip info
- [Introducción al modelo de caja básico de CSS](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Box_Model/introduction_to_the_CSS_box_model)
- [El modelo de caja](https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/The_box_model#%C2%BFqu%C3%A9_es_el_modelo_de_cajas_css)
- [¿Que es el Box Model?🤔](https://codigofacilito.com/articulos/que-es-el-box-model)
- [CSS Box Model](https://www.w3schools.com/css/css_boxmodel.asp)
- [Como funciona el box-model ](https://dev.to/lupitacode/que-es-el-box-model-4mnj)
- [¿Qué es el Box Sizing en CSS? 🤔](https://dev.to/lupitacode/que-es-el-box-sizing-en-css-2pi9)
:::

#### Imagenes

![Box model 1](https://www.oscarblancarteblog.com/wp-content/uploads/2017/10/MoxModel-secciones.png)
![Box model 2](https://www.washington.edu/accesscomputing/webd2/student/unit3/images/boxmodel.gif)




## medidas fijas vs relativas
#### Medidas fijas
- El tamaño es el mismo sin importar la resolución de la pantalla , el dispositivo y el contenedor. 
- Ej : px , in , pt , cm , mm , pc . 
- Tambien entran a esta categoria las propiedades width y height.
#### Medidas relativas
- El tamaño depende de la resolución de la pantalla , el dispositivo y el contenedor.
- Ej: % , em , rem , vw , vh , vmin , vmax , ex , ch . 
- Tambien entran a esta categoria las propiedades max-width , min-width , min-height , max-height .



## Metodologias CSS
#### ¿Que es una metodología?
- Una metodología es un método a seguir para conseguir un objetivo concreto.
#### ¿Que es una metodología CSS?
- El objetivo de CSS es ponerles nombre a las clases y en términos generales se pueden dividir en dos conceptos:
  - Bloques o estructura
  - Funcionalidades o Herramientas
- Entonces en metodologías CSS, vamos a ver diferentes métodos para lograr este objetivo.

### BEM
- Es una metodología que se centra en el concepto de bloque o estructura.
- Las reglas de como definir clases se basan en la estructura HTML teniendo en cuenta:
  -	Bloque es la &lt;contenedora>
  -	Elemento son las &lt;hijas> de la &lt;contenedora>
  -	Modificador son las &lt;hijas> con propiedades diferentes
- Resumiendo:
  -	Bloque es la etiqueta contenedora
  -	Elemento son las etiquetas hijas de la etiqueta contenedora
  -	Modificador son las etiquetas hijas con algún estilo especifico. Tienen aspecto diferente a sus etiquetas hermanas.
#### Sintaxis
- Solo se usa clases , nada de ID.
- Los nombres de las clases no  usan ningún tipo de [nomenclatura](https://www.neoguias.com/tipos-notacion-nombres/)  

|   | Carácter  | Sintaxis  |
| - | - | - |
| Bloque  |   | .bloque  |
| Elemento  |__ (Doble guion bajo)   | .bloque__elemento  |
| Modificador  | -- (Doble guion )   | .bloque__elemento--modificador  |

Ejemplo
```html
    <div class="bloque">
      <div class="bloque__elemento"></div>
      <div class="bloque__elemento bloque__elemento--modificador"></div>
    </div>

```
#### Ventajas
- Pensado para usar con preprocesadores (SCSS)
- Los nombres de las clases son fáciles
- Añade especificidad 
- Aumenta la independencia
- Permite la reutilización
#### Desventajas
- EL HTML queda muy largo
- Difícil de aplicar en proyectos pequeños


:::tip info
- [Que es la metodologia bem y como se aplica al front-end](https://fixu.cl/que-es-la-metodologia-bem-y-como-se-aplica-al-front-end/)
- [Introduccion a la metodologia bem](https://webdesign.tutsplus.com/es/articles/an-introduction-to-the-bem-methodology--cms-19403)
- [Metodologia bem](https://blog.ida.cl/desarrollo/metodologia-bem-desarrollo-front-end/)

:::
### Suit CSS
- Es una metodología que parte del concepto de funcionalidad/utilidades o herramientas
- Es decir los nombres de las clases se basan en propiedades como color, centrar ….
- Recomendada para usar con React y las clases se organizan en base a:
  -	Utilidades
  -	Componentes
#### Sintaxis
|   | Carácter | Nomenclatura | Sintaxis |
| - | - | - | - |
| Utilidad | u- | Normal | u-propiedad |
| Namespace | - (antes del componente) | Normal | body-Header |
| Componente |  | [PascalCase](https://www.neoguias.com/tipos-notacion-nombres/#Pascal_Case_ContarElementos) | Header |
| Elemento (Descendiente) | - (despues del componente)  | [lowerCamelCase](https://es.wikipedia.org/wiki/Camel_case) | Header-h1 |
| Modificador | --  | [lowerCamelCase](https://es.wikipedia.org/wiki/Camel_case) | Header-h1--negro |
| Estado del componente | . (punto)  | [lowerCamelCase](https://es.wikipedia.org/wiki/Camel_case) | Header.isActive |

:::tip Explicacion 
- Utilidad: Son Propiedades que se suele utilizar con frecuencias como alinear el texto, utilizar float, un display block, etc.
- Namespace : Para indicar en donde se encuentra un componente/elemento .  EJ. El header se encuentra en el body. Sirve para crear un “prefijo” y poder crear clases “únicas”.
- Componente : El nombre del componente
- Elemento (Descendiente) : Un hijo que contiene el componente . Ej. Adentro del header se encuentra un h1
- Modificador: La misma función que BEM.
- Estado de un componente: Indica el estado de un componente. Suelen arrancar con "is".
:::

Ejemplo

```html
 <header class="Header">
      <h1 class="Header-logo"></h1>
      <ul class="Header-menu">
       <li class="Header-li"></li>
       <li class="Header-li  Header-li.isActive"></li>
       <li class="Header-li"  ></li>
      </ul>
     </header>

```
#### Ventaja
- Muy pensado para usar con preprocesadores (SCSS)
- Se recomienda usar con ReactJS


#### Desventaja
- Es muy difícil usarlo en una web clásica
- Dificil de aprender

:::tip info
- [Documentacion oficial](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md)

:::

### Cube CSS
- Es una metodología que parte del concepto de pensar en propiedades y extender el CSS más que en bloque o estructura.
- Pensado para usar con lógical properties.
- Organización de las clases:
  -	Tokens / Utilidades: Una clase para cada propiedad CSS
  -	Bloques : Una clase para cada tipo de bloque
-  Con el atributo data-* añadimos las:
     -	Excepciones:  Para poner el estado del bloque
#### Sintaxis
- Como esta basado en BEM , tiene varias caracteristicas similares:
  -	Solo se utiliza  clases
  -	Los Nombres de las clase se escriben en [kebab-case](https://www.neoguias.com/tipos-notacion-nombres/#Kebab_Case_contar-elementos)
  -	Las clases se separan con "[]" (corchetes) o "|" (barra)
  -	Las clases deben escribirse en este orden:
       - Bloque contenedor | Bloque elemento | Utilidades
  
Ejemplo
```html
      <div class="contenedor | bloque | color-base padding-top" 
      data-state="inactivo"></div>
      <div class="[contenedor]  [bloque]  [color-base padding-top]" data-state="inactivo"></div>

```
#### ¿Organizar las carpetas?
- En el caso de usar preprocesadores como SASS O LESS , se recomienda crear diferentes archivos para las utilidades y bloques.
- De esta forma, tendremos más una “arquitectura” que una metodología.
#### Ventajas
- Fácil de escalar
#### Desventajas
- El HTML nos queda muy sobrecargado con los [] o |
- Dificil de aprender

:::tip info
- [Documentacion oficial](https://cube.fyi/block.html)

:::
### Resumen
|   | Concepto | Nomeclantura de las clases | Orden de clases | ¿Dónde se usa?
| - | - | - | - | - |
| BEM | Bloque / Estructura | Doble guiones (Normales y bajos) | SI | Webs y Apps |
| SUIT CSS | Utilidades / Funcionalidades | Depende del tipo de elemento | NO | React JS |
| CUBE CSS | Propiedades CSS | kebab-case | SI | Webs y Apps |

:::tip Mas metodologías
- [OOCSS, BEM y SMACSS](https://picodotdev.github.io/blog-bitix/2021/01/las-metodologias-oocss-bem-y-smacss-para-organizar-los-estilos-css/#:~:text=OOCSS%2C%20BEM%20y%20SMACSS%20son,los%20estilos%20y%20propiedades%20CSS)
- [Metodologías css: OOCSS, BEM y SMACSS](https://www.espai.es/blog/2016/07/metodologias-css-oocss-bem-smacss/)
- [Metodologías css](https://dev.to/marskdev/metodologias-css-2pg2)
- [Metodologías css : Ordena tu código](https://www.juanmacivico87.com/metodologias-css/)
:::


## Prefijos
- Los prefijos se utilizan para aplicar propiedades CSS que no están estandarizadas (betas o experimentales)
- Es un prefijo que se antepone a una regla (propiedad) CSS destinado a que dicha regla (propiedad) sea leída y aplicada exclusivamente por un navegador concreto, pero no por el resto de navegadores.

| Prefijos | Navegador |
| - | - |
| -webkit- | Chrome , Safari , Android , iOs | 
| -moz- | Firefox | 
| -o- | Opera | 
| -ms- | Internet explorer | 

#### Ejemplo
```html
<body>
   <div class="cuadrado"></div>

  <style>
    .cuadrado {
    width: 32px;
    height: 32px;
    background-color: #555555;
    transform: scale(1, 1);
    -webkit-transform: scale(2, 2);
    -ms-transform: scale(1, 1);
    -o-transform: scale(0, 0);
    -moz-transform: scale(0, 0);

}
  </style>
</body>

```
:::tip Observación
- Primero se aplican los estilos que no tienen prefijo.
- Luego en base al navegador, se aplica alguna propiedad transform.
- En el Chrome se escala el doble de ancho y alto.
- Básicamente, se aplican los estilos de un navegador concreto y se ignoran el resto.
:::

:::tip info
- [Prefijos CSS de navegador Chrome, Firefox, I.Explorer, Opera, Safari. -webkit -moz -ms -o Ejemplos (CU01056D)](https://www.aprenderaprogramar.com/index.php?option=com_content&view=article&id=761:prefijos-css-de-navegador-chrome-firefox-iexplorer-opera-safari-webkit-moz-ms-o-ejemplos-cu01056d&catid=75&Itemid=203)
- [Prefijos CSS](https://www.kyocode.com/2020/03/prefijos-css/#:~:text=%C2%BFQu%C3%A9%20son%20los%20prefijos%20CSS,que%20otros%20programadores%20las%20utilicen)
- [Prefijos CSS de los navegadores](https://www.eniun.com/prefijos-css-navegadores-propiedades/)
- [Prefijos y compatibilidad entre navegadores](https://lenguajecss.com/css/introduccion/niveles-y-prefijos-css/)

:::




## Cheatsheet
- [CSS Shorthand](../../static/img/CSS.jpg)