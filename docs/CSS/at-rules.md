---
sidebar_position: 9
---
# At Rules
- Una regla-at es una declaración CSS que comienza con el símbolo arroba, '@'  seguido por un identificador, e incluye todo el contenido hasta el siguiente punto y coma, ';' o el siguiente bloque css , lo que sea primero. 
- Sintaxis:
```css
 @identificador (reglas);
```
- o Tambien puede ser:
```css
 @identificador {reglas}
```
:::tip observacion
- Es una declaracion CSS que comienza con arroba , seguido de un identificador.
- Tiene como contenido (incluye) las "reglas"

:::

:::tip info
- [Regla-At](https://developer.mozilla.org/es/docs/Web/CSS/At-rule)
- [Las reglas at de CSS](https://css-tricks.com/the-at-rules-of-css/)
:::
## @media
- Las media queries (en español "consultas de medios") son útiles cuando deseas modificar tu página web o aplicación en función del tipo de dispositivo (como una impresora o una pantalla) o de características y parámetros específicos (como la resolución de la pantalla o el ancho del viewport del navegador).
  
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
- La regla @layer de CSS, permite declarar una capa de cascada. Estas capas son muy similares y funcionan de forma muy parecida a las capas de cualquier editor gráfico.
- Permiten agrupar código CSS en el interior de una capa, y finalmente, fusionarlo todo manteniendo el orden especificado, algo que puede hacer mucho más fácil el organizar CSS, sobretodo de cara a la especificidad.

#### Ejemplo
```css
  @layer reset {
      body {
        margin: 0;
        box-sizing: border-box;
      }
    }

```
- En este caso, estamos creando una capa llamada reset que va a incluir código CSS que realiza un reseteo en ciertas propiedades sobre la forma que funciona un navegador. 
- El nombre reset lo establece el desarrollador, y puede ser cualquier otro nombre que desee. Esto significa que, a partir de ahora, existirá una capa reset que incluye los estilos indicados en el interior de dicha regla.
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
- En el caso de crear capas anónimas, no existe ninguna forma de hacer referencia a ellas posteriormente para añadir más código CSS o reordenarlas. Recuerda que, si creamos múltiples capas anónimas como en el ejemplo anterior, el navegador creará múltiples capas anónimas diferentes.


#### Orden de las capas
- Las capas en cascada se procesan en el orden en que aparecen por primera vez. La primera capa que se encuentra es la “menos poderosa” (la que tiene menos prioridad) y la última capa  que se encuentra es la “más poderosa” (la que tiene mas prioridad)
- Podemos cambiar el orden de las capas, si establecemos una regla @layer con las diferentes capas (nombre-de-la-capa) separadas por coma. Hay que asegurarse que esto ocurre antes de la creación de las capas, ya que una vez están declaradas, no se puede cambiar su orden:
:::tip
cualquier estilo con ¡important se aplica en orden inverso
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
- En el caso de indicar múltiples veces una misma capa, el navegador fusionará los estilos en la misma capa. Esto permitirá que en algunos casos podamos añadir más estilos a una capa ya definida
- Ten en cuenta que cualquier estilo declarado sin capa, independientemente del orden de aparición, se agrupará en una capa anónima y se aplicará siempre al final del resto de capas declaradas.
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
- La capa texts será la primera en procesarse.
- Lo primero que hará es agrupar todos los estilos en dicha capa, calcular sus especificidades y aplicarlas
- Luego, buscará si existen otras capas diferentes para procesarlas. Si no existen más, agrupará el resto de los estilos fuera de capas en una capa anónima y los aplicará después de los anteriores.
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
- La regla @import es una regla de CSS que permite cargar un fichero .css externo, leer sus líneas de código e incorporarlo al archivo actual. Estas reglas CSS se suelen indicar en las primeras líneas del fichero, ya que deben figurar antes de otras reglas CSS o contenido CSS similar.
- La regla @import se evalua en el navegador a la hora de cargar la página, por lo que cada regla @import equivale a una petición al servidor de un nuevo archivo .css.

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
import url  supports(condición)
```
- Importamos una hoja de estilos CSS sólo si el navegador soporta la condición.
  
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
- CSS tiene una característica interesante que nos permite probar si el navegador es compatible con una propiedad en particular o una combinación de propiedad:valor antes de aplicar un bloque de estilos
- Básicamente la regla @supports indica al navegador que si la propiedad  y el valor indicado son soportados, lea las reglas css que  contiene en el bloque ({})

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