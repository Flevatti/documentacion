---
sidebar_position: 9
---
# At Rules
- Una regla-at es una declaración CSS que comienza con el símbolo arroba (`@`) seguido de un identificador.
- Después del identificador se indica su contenido, que puede ser un conjunto de reglas CSS o información que le indica a la regla-at qué debe hacer.
- El contenido se puede especificar de dos formas:
  - Después del identificador se especifica el contenido y después del contenido se coloca un punto y coma (`;`) para indicar el final del contenido.
  - Dentro de un bloque CSS que se encuentra después del identificador.
- Sintaxis:
```css
 @identificador contenido;
```
- o Tambien puede ser:
```css
 @identificador {contenido}
```


:::tip info
- [Regla-At](https://developer.mozilla.org/es/docs/Web/CSS/At-rule)
- [Las reglas at de CSS](https://css-tricks.com/the-at-rules-of-css/)
:::
## @media
- Las media queries (en español, "consultas de medios") permiten aplicar reglas CSS según el tipo de dispositivo o las características de la pantalla.
- Por ejemplo, puedes cambiar los estilos cuando el ancho de la pantalla es menor a `768px`, en la vista previa que aparece cuando quieres imprimir algo o según la orientación del dispositivo.


  
:::tip info
- [developer mozilla](https://developer.mozilla.org/es/docs/Web/CSS/Media_Queries/Using_media_queries)
-  [lenguajeCSS](https://lenguajecss.com/css/responsive-web-design/media-queries/)
- [css tricks](https://css-tricks.com/a-complete-guide-to-css-media-queries/)
- [silocreativo](https://www.silocreativo.com/media-queries-css/)
- [risi](https://risi.cl/media-queries-para-dispositivos-moviles-css3/)
:::

### Medidas estandar
#### Smartphone
 - Max-width:767px
 - Max-width:600px;
#### Desktop
- Min-width:1024px

##### Tablet
- Min-width:767px and max-width:1023px;
- Max-width:768px;
##### Laptop
- Max-width:992px;
#### Large screen
- Max-width:1200px;

:::tip Imagenes
- [Responsive Screen Size BreakPoints](../static/img/../../../FeC2NvSakAAo84f.jpg)

:::

## @layer
- La regla `@layer` permite crear capas para organizar el código CSS.
- Cada capa puede contener reglas CSS y el navegador las aplica siguiendo el orden en que fueron definidas.
- Esto facilita organizar los estilos y controlar qué reglas tienen prioridad cuando varias afectan al mismo elemento.
- Si alguna vez utilizaste un editor gráfico como Photoshop o GIMP, el funcionamiento es muy similar al de las capas de esos programas.
#### Ejemplo
```css
  @layer reset {
      body {
        margin: 0;
        box-sizing: border-box;
      }
    }

```
- En este caso, se crea una capa llamada `reset` que contiene reglas CSS para modificar algunos estilos que define el navegador por defecto.
- El nombre `reset` lo establece el desarrollador y puede ser cualquier otro. A partir de ese momento, existirá una capa llamada `reset` que contiene los estilos definidos dentro de esa regla.
- Entonces la sintaxis seria:
```css
    @layer nombre-de-la-capa {
            propiedades css
    }

```
#### Capa anónima
- Se puede crear una capa anónima sin nombre
```css
    @layer  {
      body {
        margin: 0;
        box-sizing: border-box;
      }
    }

```
- En el caso de crear capas anónimas, no es posible hacer referencia a ellas más adelante para agregar más reglas CSS o cambiar el orden de las capas.
- Si se crean varias capas anónimas, el navegador las considera capas diferentes e independientes.


#### Orden de las capas
- Cada vez que se procesa una capa, se aplican los estilos CSS que contiene.
- Las capas se procesan según el orden en que aparecen por primera vez. La primera capa tiene menor prioridad y la última tiene mayor prioridad.
- Es posible modificar el orden de las capas mediante una regla `@layer`, indicando sus nombres separados por comas.
- Esta regla debe declararse antes de crear las capas, ya que una vez declaradas no es posible cambiar su orden.

:::tip
Los estilos que utilizan `!important` se aplican en el orden inverso de las capas. Es decir, la primera capa tiene más prioridad que la última.
:::

```html
<body>
  <button class="primary">First button</button>
  <button class="primary">Second button</button>
  
  <style>
  @layer reset, texts, theme;
  
  @layer reset {
    button {
      padding: 30px;
    }
  }
  
  @layer theme {
    .primary {
      background: #34a;
      border: 2px outset #6381db;
      color: #fff;
      padding: 5px 10px;
      border-radius: 6px;
    }
  }
  
  @layer texts {
    .primary {
      color: red;
    }
  }
  </style>
</body>

```
:::tip Observacion
- En este ejemplo , primero se procesa la capa resets , luego la texts y por ultimo theme.
- Con la regla @layer cambiamos el orden en el que se procesan las capas, consiguiendo darle prioridad a la capa theme porque está en último lugar, sobreescribiendo los estilos del color de texto de la capa texts.
:::

:::tip Consejos
- Si se indica varias veces una misma capa, el navegador fusionará sus estilos dentro de la misma capa. Esto permite agregar nuevos estilos a una capa ya creada.
- Los estilos declarados fuera de una capa se agrupan en una capa anónima y se aplican después de todas las capas declaradas.
:::

#### La especificidad en capas CSS 
```html
  <style>
 @layer texts {
  /* Especificidad de 21 */
  button[class].primary {
    color: red;
  }
}
/* Especificidad de 11 */
button.primary {
  background: #34a;
  border: 2px outset #6381db;
  color: #fff;
  padding: 5px 10px;
  border-radius: 6px;
}
/* Especificidad de 10 */
.primary {
  margin: 20px;
  color: gold;
}
  </style>

```
:::tip Observación
- La capa `texts` será la primera en procesarse.
- El navegador calcula la especificidad de las reglas CSS que contiene y aplica los estilos CSS.
- Luego, busca si existen otras capas para procesarlas. Si no existen más, agrupa los estilos que no pertenecen a ninguna capa en una capa anónima y los aplica después de las capas anteriores.
:::

#### Prueba
Quita  la capa texts

```css
 button[class].primary {
      color: red;

    }

    /* Especificidad de 11 */
    button.primary {
      background: #34a;
      border: 2px outset #6381db;
      color: #fff;
      padding: 5px 10px;
      border-radius: 6px;
    }

    /* Especificidad de 10 */
    .primary {
      margin: 20px;
      color: gold;
    }

```
:::tip
¿Notas algún cambio en la especificidad con respecto a lo anterior?
:::


:::tip info
- [Crear capas CSS con código independiente](https://lenguajecss.com/css/reglas-css/la-regla-layer/)
- [@layer](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer#specifications)
- [A Complete Guide to CSS Cascade Layers](https://css-tricks.com/css-cascade-layers/#establishing-a-layer-order)
- [How To Use CSS Layers](https://blog.webdevsimplified.com/2022-04/css-cascade-layers/)
:::
## @import
- La regla `@import` permite cargar un archivo CSS externo e incorporar sus reglas dentro del archivo actual.
- Estas reglas suelen escribirse al principio del archivo CSS, ya que deben aparecer antes que otras reglas CSS.
- Cada regla `@import` genera una solicitud al servidor para cargar el archivo CSS indicado.

#### Sintaxis #01
```css
@import url;
```
- La url puede ser un string o una url.

#### Sintaxis #02
```css
@import url list-of-media-queries;
```
- list-of-media-queries : Son [media query](#media) . Si se cumplen , se cargaran los estilos de la url especificada

Ejemplo:


```css
@import url("mobile.css") screen and (max-width: 640px);
```
#### Sintaxis #03
```css
import url  supports(propiedad:valor)
```
- Importamos una hoja de estilos CSS solo si el navegador soporta la propiedad y el valor indicado.
- Ejemplo:
```css
@import url("grid.css") supports(display: grid);
```
#### Sintaxis #04
```css
@import  url layer(nombre)
```
- Importamos una hoja de estilos CSS y la colocamos en la capa nombre.

Ejemplo:

```css
@import url("framework.css") layer(framework);
```

- Si no ponemos el nombre , se colocara en una capa anónima.

```css
@import url("framework.css") layer();
```


:::tip info
- [@import](https://developer.mozilla.org/es/docs/Web/CSS/@import)
- [Regla para incluir CSS externo de otros archivos](https://lenguajecss.com/css/reglas-css/la-regla-import/)
:::
## @supports
- La regla `@supports` permite comprobar si el navegador soporta una propiedad CSS o una propiedad y un valor indicado antes de aplicar las reglas CSS que contiene.
- Básicamente, le indica al navegador que, si la propiedad y el valor indicado son compatibles, aplique las reglas CSS que se encuentran dentro del bloque (`{}`).
- Ejemplo:
```css
.p-ejemplo-supports {
    color: red;
}

@supports (display: contents) {

    .p-ejemplo-supports {
        color: green;
    }

}
```
:::tip Observación
- Si ves este párrafo de color rojo, significa que tu navegador no soporta display: contents;. Si lo ves de color verde, significa que estás leyendo esto desde las últimas versiones de Chrome o Firefox (a día de hoy, 03/08/2018).
- De esta forma, estoy indicándole al navegador que muestre el párrafo de color rojo, pero que si soporta display: contents; muestre el párrafo de color verde
:::


:::tip info
- [@supports](https://developer.mozilla.org/es/docs/Web/CSS/@supports)
- [@supports: Qué es y por qué es tan maravilloso](https://www.mowomo.com/supports-que-es-y-por-que-es-tan-maravilloso/)
- [https://css-tricks.com/how-supports-works/](https://css-tricks.com/how-supports-works/)
:::

## @namespace
- La regla `@namespace` permite declarar un espacio de nombres dentro de un archivo CSS.
- Esto permite aplicar estilos CSS solo a elementos que pertenecen a un espacio de nombres específico.
- Su objetivo es evitar conflictos cuando un documento contiene elementos de diferentes espacios de nombres, como puede ocurrir en documentos XML, SVG o XHTML.
- Sintaxis
```css
@namespace [prefix] "namespace-uri";
```
:::tip Observación
- `prefix` (opcional): Es un nombre que permite identificar el espacio de nombres indicado en `namespace-uri` dentro de los selectores CSS.
- `namespace-uri`: Es la URI del espacio de nombres que se quiere declarar.
:::


:::tip ¿Qué es una URI del espacio de nombres?
- Es una dirección (parecida a una URL) que actúa como un identificador único para un conjunto de elementos o atributos.
- No significa que haya un archivo o página en esa dirección; solo se usa como un nombre único para identificar algo.
- Por ejemplo:
  -	http://www.w3.org/1999/xhtml identifica todos los elementos de HTML (como &lt;div>, &lt;p>, etc.).
  -	http://www.w3.org/2000/svg identifica elementos SVG (como &lt;circle>, &lt;rect>, etc.).
  - Ambas son "marcas de identidad" que los navegadores usan internamente para entender de dónde provienen esos elementos.
#### ¿Por qué necesitamos esto?
- Imagina que estás trabajando con un archivo XML que mezcla diferentes tipos de datos, como HTML y SVG. Ambos podrían tener un elemento llamado &lt;title>, pero podrían tener significados diferentes:
  -	En HTML, &lt;title> define el título de la página.
  -	En SVG, &lt;title> describe el contenido del gráfico vectorial.
  - Sin un namespace, no podrías diferenciar entre ambos. Con espacios de nombres, los navegadores pueden saber cuál es cuál porque cada uno está asociado con una URI única.
##### Entonces, ¿qué son esas URLs?
- Son identificadores globales que ayudan a distinguir elementos. Aunque parecen direcciones web, no necesitas visitarlas; son solo nombres únicos estándar creados por la W3C (World Wide Web Consortium).
- En resumen: la URI le indica al navegador a qué espacio de nombres pertenece cada elemento.
:::


#### Ejemplo
- Supongamos que tienes un documento XML que incluye elementos de los espacios de nombres http://www.w3.org/1999/xhtml y http://www.w3.org/2000/svg. Puedes usar @namespace en tu CSS para dirigirte específicamente a los elementos de estos espacios de nombres:

```css
@namespace html "http://www.w3.org/1999/xhtml";
@namespace svg "http://www.w3.org/2000/svg";

/* Estilo para elementos del espacio de nombres XHTML */
html|p {
  color: blue;
}

/* Estilo para elementos del espacio de nombres SVG */
svg|circle {
  fill: red;
}

```

##### Sin prefijo
- Si no especificas un prefijo, puedes declarar un espacio de nombres predeterminado:
```css
@namespace "http://www.w3.org/1999/xhtml";

/* Aplica a todos los elementos del espacio de nombres XHTML */
p {
  color: green;
}

```

#### Soporte en navegadores
- @namespace es compatible principalmente cuando trabajas con XML (como XHTML y SVG). Sin embargo, no se utiliza comúnmente en proyectos basados puramente en HTML, ya que HTML no tiene múltiples espacios de nombres.
- En HTML regular, no necesitas @namespace porque todo el documento pertenece al espacio de nombres HTML5 por defecto (http://www.w3.org/1999/xhtml).
