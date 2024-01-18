---
sidebar_position: 4
---
# Propiedades #3

## Propiedad filter
- Aplica efectos gráficos como desenfoque o cambio de color a un elemento.
- Es una forma de dar filtros
- Es una propiedad tan ponente , que te permite crear el modo oscuro.
- Tiene varios valores
- Los valores son funciones

:::tip info
- [filter](https://developer.mozilla.org/en-US/docs/Web/CSS/filter)
:::

#### Valor none
- Por defecto , no se aplica ningun filtro
#### Valor blur()
- Sirve para crear un desenfoque.
- Te permite conseguir el “efecto cristal”
```html
 <img src="fondo.webp" alt="">
   <style>    
    img {
      filter:blur(2px);
      width:100%;
      max-width:500px;
    }
  </style>  

```
- Se recomienda usar valores entre 1 a 10px
#### Valor grayscale()
- Convierte la imagen de entrada en una escala de grises.
- El valor es un numero o un porcentaje.
- Si no le insertamos valor, se queda totalmente gris.
```html
<img src="fondo.webp" alt="">
  <style>   
   img {
     filter:grayscale(1);
     width:100%;
     max-width:500px;
   }
 </style> 

```
- Se recomienda usar valores entre 0,1 y 1.
#### Valor drop-shadow()
- Sirve para las imagenes con fondos transparentes
- Le aplica un efecto de sombra paralela.
- Una sombra paralela es efectivamente una versión borrosa y desplazada de la imagen de entrada, dibujada en un color específico y compuesta debajo de la imagen.
- Esta función es algo similar a la box-shadow propiedad. La box-shadow propiedad crea una sombra rectangular detrás del cuadro completo de un elemento , mientras que la drop-shadow() función de filtro crea una sombra que se ajusta a la forma (canal alfa) de la imagen misma .
- Tiene 4 parametros.
    - 1 Parametro:   El desplazamiento horizontal de la sombra. (en pixeles)
    - 2 Parametro:   El desplazamiento  vertical de la sombra. (en pixeles)
    - 3 parametro :  Opcional . El desenfoque de la sombra. (en pixel)
    - 4 Parametro :  Opcional .  El color de la sombra.
```html
<img src="fondo.webp" alt="">
  <style>   
   img {
     filter:drop-shadow(5px 5px 10px blue);
     width:100%;
     max-width:500px;
   }
 </style> 

```
#### Valor sepia()
- Convierte la imagen en sepia, dándole una apariencia más cálida , más amarilla/marrón. 
- Su valor debe ser entre 0 y 1 (entre % y 100%).
- Un 0 (0%) deja la imagen sin cambio
- Un 1 (100%) es completamente sepia.
- El valor es un numero o un porcentaje.

```html
 <img src="fondo.webp" alt="">
  <style>   
   img {
     filter: sepia(1);
     width:100%;
     max-width:500px;
   }
 </style> 

```
#### Valor brightness()
- Le aplica un multiplicador lineal a la imagen, haciéndola parecer más brillante o más oscura.
- Es la escala de brillo.
- Un valor por debajo del 100% (1) oscurece la imagen, un valor por encima del 100% la ilumina.
- Un valor de 0% creará una imagen completamente negra, mientras que un valor de 100% dejará la  imagen sin cambios
- El valor es un numero o un porcentaje.
```html
  <img src="fondo.webp" alt="">
  <style>   
   img {
     filter: brightness(0.5);
     width:100%;
     max-width:500px;
   }
 </style> 

``` 
#### Valor hue-rotate()
- Rota los colores del elemento y su contenido.
- Rota la gama de colores
- El valor es en grados(deg), de 1deg a 360deg.
```html
  <img src="fondo.webp" alt="">
  <style>   
   img {
     filter: hue-rotate(240deg);
     width:100%;
     max-width:500px;
   }
 </style> 

```
#### Valor invert()
- Invierte los colores de la imagen.
- El valor es un numero o un porcentaje.
- Un valor de 100% se invierte completamente, mientras que un valor de 0% deja la imagen original.
```html
 <img src="fondo.webp" alt="">
  <style>   
   img {
     filter: invert(.7);
     width:100%;
     max-width:500px;
   }
 </style> 

```
:::tip 
El valor 50% es gris ya que la suma de valores invertidos da 0
:::
#### Valor opacity()
- Aplica transparencia a la imagen
- El valor es un numero o un porcentaje.
- Un valor de 0% es completamente transparente, mientras que un valor de 100% deja la imagen sin cambios. 
```html
  <img src="fondo.webp" alt="">
  <style>   
   img {
     filter: opacity(0.2);
     width:60%;
     max-width:500px;
   }
 </style> 

```
#### Valor contrast()
- Ajusta el contraste de la imagen
- El valor es un numero o un porcentaje.
- Un valor por debajo 100% disminuye el contraste, mientras que un valor por encima 100% lo aumenta. 
- Un valor de 0% creará una imagen completamente gris, mientras que un valor de 100% dejará la  imagen sin cambios.
```html
<img src="fondo.webp" alt="">
  <style>   
   img {
     filter: contrast(0.8);
     width:60%;
     max-width:500px;
   }
 </style> 

```
:::warning
No funciona si no tiene un color de fondo
:::

#### Valor saturate()
- Satura el elemento
- Hace que cada uno de los colores se concentre en sus colores más fuerte, tirando al #00F, #0F0 y #F00.
- El valor es un numero o un porcentaje.
- Un valor por debajo 100% desatura(desaturación) la imagen, mientras que un valor por encima 100% la sobresatura. Un valor de 0% está completamente insaturado, mientras que un valor de 100% deja la  imagen sin cambios
```html
 <img src="fondo.webp" alt="">
  <style>   
   img {
     filter: saturate(.4);
     width:60%;
     max-width:500px;
   }
 </style> 

```
#### Podes poner varias funciones.

```css
filter: brightness(4) contrast(3)
```

:::tip Mas valores
[filter-function](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function)
:::

## Propiedad backdrop-filter
- Te permite aplicar filtros a los fondos (backgrounds) de nuestros contenedores sin que quede afectado el resto del contenido (no afecta a los elementos hijos)
- Te permite aplicar efectos gráficos como desenfoque o cambios de color al área detrás de un elemento.
- Debido a que se aplica a todo lo que hay detrás del elemento, para ver el efecto debe hacer que el elemento o su fondo sean al menos parcialmente transparentes.
- Tiene los [mismos valores que filter](#propiedad-filter).

#### Ejemplo

```html
<!DOCTYPE html>
<html>
  <head>
    <title>CSS Perspective</title>
  </head>
  <body>
    <div class="container">
      <label for="email">Email</label>
      <input type="email" id="email" />
      <br />
      <label for="password">Password</label>
      <input type="password" id="password" />
    </div>
    <style>
      body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-image: url(fondo2.webp);
        background-size: cover;
        background-position: center;
      }

      .container {
           width: 500px;
           height: 300px;
           display: flex;
           flex-direction: column;
           align-items: center;
           justify-content: center;
           background-color:rgba(255,255,255,0.27);
           backdrop-filter: blur(10px);
      }

      .container label {
        font-size:25px;
        font-weight: bold;
      }
    </style>
  </body>
</html>

```

:::tip Observación
Con el blur() conseguimos el efecto cristal
:::


:::tip info
- [backdrop-filter - Developer mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter)
- [backdrop-filter - Css tricks](https://css-tricks.com/almanac/properties/b/backdrop-filter/)

:::

## Propiedad background
- Es un shorthand de varias propiedades relacionada con el “fondo” del elemento. 
- [Ver mas info...](https://developer.mozilla.org/en-US/docs/Web/CSS/background)

### Propiedad background-attachment
- Establece si la posición de una imagen de fondo se fija dentro de la ventana grafica / contenedor o se desplaza.


#### Para explicar los valores utilizamos el siguiente código HTML
```html
<div class="container">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolorum eum ad quisquam delectus non nobis sequi saepe aliquam similique? Repudiandae dolores quae accusamus, odio eum earum illum totam vitae.
        Voluptatibus dolores quam modi, exercitationem ipsum voluptatem sapiente consequuntur aspernatur alias! Deleniti officiis, neque delectus culpa, porro reprehenderit laboriosam aspernatur nisi itaque cum obcaecati temporibus voluptatem ullam eaque dignissimos. Non.
       
        Molestiae et accusantium doloribus nisi animi aspernatur saepe iure praesentium? Eos impedit nemo magnam quidem, eius placeat voluptate sed ut porro laborum esse nobis architecto voluptatum reiciendis hic eligendi minima.
        Doloremque eos veritatis eaque tempora, quae quos quas est consequatur odit iste? Nulla quia sit provident minima dolore. Assumenda est repellat perspiciatis voluptatem consectetur, aut amet quia impedit eos ipsam!
        Aperiam ea hic deserunt corporis reiciendis quam! Laudantium, amet blanditiis nulla ullam expedita a eum consectetur aspernatur eligendi! Praesentium corrupti debitis beatae molestiae ipsum nesciunt mollitia eius repellat odit aperiam!
        Ipsum ratione iure magni illum. Perferendis molestias odit atque, praesentium vitae corrupti ullam. Nam facere obcaecati soluta quam nesciunt minima nulla eligendi totam et? Excepturi animi perferendis eum doloribus iure?
        Deleniti harum, ducimus aliquam ut dolorum ratione nam nulla tempore dolor porro non vitae quisquam, autem, aperiam dignissimos possimus dolore sapiente optio. Consequuntur provident repellendus rem fugiat totam adipisci deleniti.
        Magnam doloremque optio accusantium quibusdam dolorum esse, labore nam et quam minima deleniti distinctio itaque voluptas? Assumenda eos veritatis fugiat, officia ipsam, velit ipsa distinctio temporibus pariatur, perferendis iure quasi?
        Quisquam quas obcaecati unde aspernatur totam ad officiis modi incidunt adipisci magnam praesentium excepturi debitis dolorem, consequuntur est vel dignissimos laboriosam accusantium aliquam quos, delectus deleniti eveniet necessitatibus! Hic, alias.
        Cupiditate modi repudiandae soluta in recusandae consequuntur, quod qui at, dicta velit molestias cumque distinctio ipsa illum dolorem non error corporis? Veniam mollitia perferendis similique ipsa delectus minus officiis expedita.
        Voluptates omnis sapiente ea nobis cum provident dolore distinctio illo quae eaque, enim ab vitae nesciunt corrupti? Commodi soluta accusantium rerum repellendus voluptatum, voluptatem blanditiis aliquam architecto saepe vel corporis!
        Odio, omnis natus animi quam et adipisci, inventore maiores labore quod eos dolor cupiditate harum nesciunt voluptatum tempore provident maxime quos. Nostrum sequi placeat inventore, libero aliquid sunt fugit vero.
        A maiores eos libero, aperiam deleniti dolor ad officia sed cum voluptates ut cupiditate alias, assumenda optio! Expedita, temporibus? Sunt laborum quos quod nemo ratione, voluptates quaerat earum ea incidunt.
        Amet accusamus, eum deserunt rem esse fugiat repudiandae perferendis? Tempore dicta fuga facere voluptatem voluptate nisi, laudantium delectus molestiae, iure provident eum inventore aperiam ut doloremque, molestias distinctio possimus vero.
        Dolore porro in quas perspiciatis et molestias obcaecati, vero vitae error tenetur cumque similique totam blanditiis delectus, consequuntur dolorem ab temporibus veritatis cum laborum. Rem numquam impedit distinctio sunt quod?
        Quia sapiente consequatur ea ipsum nobis assumenda doloremque ducimus fugiat eius inventore neque tempora quisquam ullam quam omnis, ad ut, deleniti minus autem corrupti exercitationem? Accusantium mollitia earum enim iusto?
        Culpa, adipisci deleniti! Repellendus nihil vel aut asperiores maiores consequuntur perspiciatis pariatur sed. Perspiciatis odit atque facere ducimus excepturi illum qui quidem iusto! Corporis possimus error debitis quam fugiat sapiente?
        Dolorem eveniet, quia deserunt assumenda quibusdam incidunt ad illo repellat laborum ipsam facere libero officiis iste sint saepe alias mollitia rerum tempore placeat non natus voluptas? Laudantium eius non explicabo?
        Temporibus ipsam dolorem animi debitis voluptatum amet molestiae modi corrupti! Quisquam recusandae tempore rem, ut similique ab labore quos soluta sit laborum quod atque accusantium dolores velit fugiat. Exercitationem, eius.
        Veritatis enim temporibus, perferendis qui exercitationem aspernatur quasi neque consequatur soluta. Quaerat in dicta dignissimos nemo consequatur? Repellendus distinctio soluta optio itaque animi porro magnam tempore vel modi? Temporibus, doloremque?
        Saepe dolores harum totam quos unde ullam commodi illo provident ipsum hic perferendis, at laborum consequatur iure pariatur quae ut accusantium amet voluptas, odio similique ea? Aperiam omnis nostrum commodi?
        Deserunt tenetur sequi dolorum ipsa dicta natus nobis consequuntur minus facilis laudantium, omnis, quo asperiores ex cumque earum voluptatibus aliquid quibusdam in eum necessitatibus esse soluta distinctio iusto incidunt! Odio.
        Ratione sunt et consequatur esse facere, vitae amet doloribus fuga unde quisquam repellendus quaerat molestias veritatis corporis accusamus eum neque numquam est nobis aut, excepturi, ducimus doloremque. Odio, molestias veritatis.
        Quisquam itaque laboriosam culpa molestias aliquam odit quibusdam repellat nemo inventore provident quas libero, sit quidem velit cum? Natus nesciunt fugit, explicabo accusantium dolore laboriosam quidem nostrum officiis quisquam. Iure?
        Perspiciatis dolor autem quidem tenetur harum, similique vel, ratione numquam quis quam culpa. Repudiandae mollitia temporibus, at ullam magnam voluptate officiis et aspernatur error odit esse repellat aperiam expedita fuga?
        Illum illo tenetur nisi doloribus praesentium aperiam magnam odit soluta velit modi, dolorum alias reprehenderit repudiandae aspernatur, nesciunt minima atque molestias veritatis. Et commodi pariatur beatae, qui provident non tenetur!
        Nihil, veniam magni? Nihil iste doloremque laudantium magnam eaque nisi facilis dolorem? Accusamus dolore autem et praesentium, aliquam, sapiente voluptatum nobis facilis ullam, repellat impedit voluptates temporibus quae non quas!
        Atque excepturi exercitationem expedita iusto repudiandae, nobis mollitia libero debitis eligendi laudantium placeat voluptatem sed, sunt voluptas! Assumenda natus, dicta consectetur beatae ex fuga doloremque quia. Officia vel dolorem laborum.
        Nostrum, debitis accusamus blanditiis, exercitationem reiciendis eveniet labore doloribus corrupti suscipit laborum similique nihil error! Quidem neque ad quia, iure quae, sunt laudantium accusamus dolorum nisi ratione reiciendis suscipit fugit?
        Aut, unde commodi nesciunt consequatur vitae nulla quae! Eveniet natus nostrum inventore quibusdam aut id assumenda reprehenderit, dolores nihil distinctio porro necessitatibus dicta autem reiciendis, architecto veritatis cum, voluptatum ipsam.
        Dolores fugit aspernatur harum, recusandae quia, labore sint enim veniam tenetur, dolor rerum nisi perferendis dolore aperiam culpa quo ad natus animi ab. Quod autem repellendus dicta? Nobis, quibusdam modi!
        Recusandae magnam atque iure unde nihil iste illum, ipsam necessitatibus. Cum commodi esse mollitia aspernatur minus quia eos, dolores molestiae doloremque quas fuga accusamus corrupti eius quaerat. Veniam, architecto in.
        Quos porro temporibus mollitia delectus odit voluptatem adipisci? Modi ullam iste reiciendis voluptates velit pariatur expedita totam quibusdam autem, voluptas asperiores at, iure ab porro distinctio voluptatibus, impedit sequi sapiente.
        Explicabo laborum nobis, soluta natus unde corrupti rerum consequuntur autem facere omnis exercitationem dolorum at quia nostrum nihil? Amet accusantium odio magnam hic incidunt officia exercitationem. Nam quia possimus debitis.
        Aspernatur facere fuga neque, odit quisquam officiis amet eos error, quod, consectetur officia. Est soluta id nam non harum voluptas vitae perferendis cum! Blanditiis quisquam nihil incidunt voluptates. Impedit, delectus.
        Dolore, officia. Sint iure adipisci quia temporibus tenetur voluptate et vitae sit excepturi! Totam animi dolorem quas enim? Magnam maiores rem doloribus ratione reprehenderit, laboriosam atque sed dolorem praesentium eum.
        Natus itaque nam saepe perferendis quia est consequatur. Recusandae impedit, cum laborum at odio, maiores rem, explicabo obcaecati quo iste alias facilis est? Inventore eligendi nam consectetur quae dolores nobis?
        Nihil molestiae explicabo in ea aut sit distinctio unde officiis eaque beatae porro corrupti, repellat recusandae. Inventore, odit quidem libero repellendus id eum beatae quisquam omnis distinctio, ratione veritatis eius?
        Nihil quisquam accusamus error eos distinctio voluptate beatae temporibus. Voluptatem placeat dolores porro voluptates fuga ratione tempora nihil ipsam, quaerat nesciunt? Nobis dignissimos autem tempora cupiditate laudantium aliquid, natus repellat.
        Saepe architecto tempore delectus natus dicta aperiam. Laudantium corrupti, culpa nulla sit voluptatum non temporibus sint. Quod aut quis eveniet, hic aspernatur architecto repudiandae doloremque repellat est quibusdam fugiat nihil.
        Quos tenetur ratione magnam rem sapiente et voluptatum enim aspernatur adipisci laborum illo repellendus, aliquam architecto, veritatis dolor, aperiam ad sit rerum beatae? Provident, sequi! Possimus incidunt architecto accusantium ex.
        Provident voluptate non unde, nostrum fuga facilis, assumenda dicta, necessitatibus repellat officiis laboriosam nihil cumque corporis laudantium repellendus. Quo totam sequi incidunt fuga, iusto eveniet saepe magnam quibusdam odit magni.
        Dolorum culpa laudantium ea ipsam sequi eum praesentium quo asperiores dignissimos. Laudantium totam sed nam, incidunt dolor debitis eos? Dignissimos omnis molestias enim quam officia dolor vitae laborum numquam minus?
     
  
      
 </p>
    </div>

```

#### Valor fixed
- El fondo queda fijo en relación con la ventana grafica.
- Si el contenedor/elemento tiene un mecanismo de desplazamiento, el fondo no se mueve (Al scrollear el fondo no se mueve) . 
- La imagen de fondo se fija en relación con la ventana del navegador, ya sea que el elemento se desplace o el contenido dentro de él se desplace o no.
- Si deslizas la ventana gráfica (ventana del navegador), vas a notar que el background se esta moviendo (Esto no pasa con el [valor scroll](#valor-scroll))
- Si deslizas sobre el elemento que contiene el valor fixed , el background NO SE MOVERA.


:::warning
No es compatible con background-clip : text
:::
:::tip
Para que un elemento tenga un mecanismo de desplazamiento , debe tener la propiedad  overflow en  scroll.
:::

```html
<style>
      body {
         height: 100vw;
      }
        .container {
          width:230px;
          height:200px;
          background-attachment: fixed;
          overflow: scroll;
          background-image: url("fondo.webp");
        }
    </style>

```
#### Valor local
- El fondo se fija en relación con el contenido del elemento.
- Si el elemento tiene un mecanismo de desplazamiento, el fondo se desplaza con el contenido del elemento y el color del fondo y el posicionamiento del fondo son relativas al área desplazable del elemento. 
- En pocas palabras el “fondo” va cambiando a medida que scrolleas.

```html
  <style>
      body {
         height: 100vw;
      }
        .container {
          width:230px;
          height:200px;
          background-attachment: local;
          overflow: scroll;
          background-image: url("fondo.webp");
        }
    </style>

```

#### Valor scroll
- El fondo se fija en relación con el propio elemento y no se desplaza su contenido. 
- El background siempre pertenece igual (no se mueve), sin importar que elemento utilices para scrollear.
- Es el valor por defecto.


 ```html
     <style>
      body {
         height: 100vw;
      }
        .container {
          width:230px;
          height:200px;
          background-attachment: scroll;
          overflow: scroll;
          background-image: url("fondo.webp");
        }
    </style>

 ```

:::tip info
- [background-attachment - CSS Tricks](https://css-tricks.com/almanac/properties/b/background-attachment/#:~:text=There%20are%20two%20different%20views,stays%20fixed%20no%20matter%20what)
- [background-attachment - Developer Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment)
:::
### Propiedad background-clip
- Establece si el fondo de un elemento se extiende debajo de su cuadro de borde(border), cuadro de relleno(padding) o cuadro de contenido (content)
- Define hasta dónde debe extenderse el fondo (color o imagen) dentro de un elemento.

:::tip 
- Es importante recordar el Box Model

![Box Model](https://www.washington.edu/accesscomputing/webd2/student/unit3/images/boxmodel.gif)
:::

#### Valor border-box
- Valor por  defecto
- El fondo se extiende hasta el borde exterior del borde (border) (pero debajo del borde en orden z).
- El fondo ( background ) se extiende hasta el límite externo del borde.

```html
 <div class="bkclip"><p>el valor por defecto</p></div>
    <style>
      .bkclip{
  width:250px;
  height:150px;
  border:20px dashed #050;
  background-color:#6ab150;
  padding:20px;
  margin:0 auto;
  text-align:center;
}
    </style>

```

#### Valor padding-box
- El fondo se extiende hasta el borde exterior del relleno (padding). 
- El fondo ( background ) se extiende hasta el limite externo del relleno ( padding ).

```html
 <div class="bkclip"><p>el valor por defecto</p></div>
    <style>
      .bkclip {
        width: 250px;
        height: 150px;
        border: 20px dashed #050;
        background-color: #6ab150;
        padding: 20px;
        margin: 0 auto;
        text-align: center;
        background-clip: padding-box;
      }
    </style>

```
#### Valor content-box
- El fondo se ubica dentro del cuadro de contenido (content)
- El fondo solo aparecerá dentro del contenido de la caja.
- El “padding” no tendrá fondo y se podrá ver detalladamente.

```html
 <div class="bkclip"><p>el valor por defecto</p></div>
    <style>
      .bkclip {
        width: 250px;
        height: 150px;
        border: 20px dashed #050;
        background-color: #6ab150;
        padding: 20px;
        margin: 0 auto;
        text-align: center;
        background-clip: content-box;
      }
    </style>

```
#### Valor text
- El fondo está pintado dentro (recortado) del texto.
- Se utiliza para crear máscaras de textos
- Para que funcione el color del texto debe ser “transparent”.
- [Entendiendo background-clip para máscaras de texto con CSS3](http://abarcarodriguez.com/blog/entendiendo-background-clip-para-mascaras-de-texto-con-css3)


```html
 <h1 id="panal">ABEJA</h1>
    <style>
     #panal {
    font-family:"Arial Black", Gadget, sans-serif;
    font-size:85px;
      background-image:url(panel.jpeg);
    -webkit-background-clip: text;
    color:Gold;
    -webkit-text-fill-color: transparent;
    text-align:center;
    margin:0;
    padding:0;
}
    </style>

```

:::tip INFO
- [background-clip - Developer mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip)
- [background-clip - CSS tricks](https://css-tricks.com/almanac/properties/b/background-clip/)
- [background-clip - unpocodetodo.info](http://w3.unpocodetodo.info/css3/background-clip.php)
- [La propiedad background-clip en CSS](https://www.desarrollolibre.net/blog/css/la-propiedad-background-clip-en-css)
:::

### Propiedad background-color
- Establece el color de fondo de un elemento.
- El fondo de un elemento es el tamaño total del elemento, incluido el relleno y el borde (pero no el margen).
```html
   <div></div>
    <style>
      div {
        width:200px;
        height:200px;
        background-color: #25e;
      }
    </style>

```
:::tip info
- [background-color](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color)
- [CSS background-color Property](https://www.w3schools.com/cssref/pr_background-color.php)
:::

### Propiedad background-image
- Establece una o más imágenes de fondo en un elemento.
- El fondo de un elemento es el tamaño total del elemento, incluido el relleno y el borde (pero no el margen).

```html
      <div></div>
    <style>
      div {
        width:200px;
        height:200px;
        background-image:url('./fondo.webp')
      }
    </style>

```

:::tip Observación
- Utilizamos la función url como valor, para especificar la ruta de la imagen.
- La función url recibe una ruta relativa/absoluta como String. En este ejemplo, contiene la ubicación de una imagen webp.
- De forma predeterminada, se coloca una imagen de fondo en la esquina superior izquierda de un elemento y se repite tanto vertical como horizontalmente.
:::

#### Podes añadir mas de un valor , separándolo por coma
```css
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 0, 0.5),
    rgba(0, 0, 255, 0.5)
  ), url("fondo2.webp");

```
:::tip Observacion
- La propiedad background-image tiene varios [tipos de valores](https://developer.mozilla.org/en-US/docs/Web/CSS/image).

:::

:::tip info
- [CSS background-image Property](https://www.w3schools.com/cssref/pr_background-image.php)
- [background-image](https://developer.mozilla.org/en-US/docs/Web/CSS/background-image)
:::

### Propiedad background-origin
- Establece el inicio del fondo.
- Cuando uno cambia el inicio del fondo, cambia la posición de la imagen. 
- En pocas palabras, por cada valor de esta propiedad, la imagen se va a observar distinto

:::tip 
- Es importante recordar el Box Model

![Box Model](https://www.washington.edu/accesscomputing/webd2/student/unit3/images/boxmodel.gif)
:::

#### Valor padding-box
- Valor por defecto
- La imagen de fondo comienza desde la esquina superior izquierda del  relleno (padding)
#### Valor border-box
- La imagen del fondo comienza en la esquina superior izquierda del borde.

```html
   <div></div>
    <style>
      div {
        width:200px;
        height:200px;
        background-image: url("fondo2.webp");
        background-origin: border-box ;
        border: 2px solid red;
      }
    </style>

```
#### Valor content-box
- La imagen de fondo comienza en la esquina superior izquierda del contenido

```html
  <div></div>
    <style>
      div {
        width:200px;
        height:200px;
        background-image: url("fondo2.webp");
        background-origin: content-box ;
        border: 2px solid red;
      }
    </style>

```

:::tip
¡Podes poner varios valores, solo sepáralos con comas!
:::

:::tip Diferencia con background-clip
- background-clip : Define en que área se debe mostrar el fondo , lo que “sobra” se “recortara”.
- background-origin : Define solo la posición inicial del fondo.


:::


:::tip info
- [CSS background-origin Property](https://www.w3schools.com/cssref/css3_pr_background-origin.php)
- [CSS — background-clip vs. background-origin properties](https://levelup.gitconnected.com/css-background-clip-vs-background-origin-properties-e2a15d5d7fa0)
- [background-origin](https://developer.mozilla.org/en-US/docs/Web/CSS/background-origin)
:::

### Propiedad background-size
- Establece el tamaño de la imagen de fondo del elemento.
- La imagen se puede dejar en su tamaño natural, estirar o restringir para que se ajuste al espacio disponible.
- Podes poner varios valores, solo sepáralos con comas


#### Sintaxis
-  1 Valor: Con la palabra clave “contain” o “cover”
-  1 valor: Usando solo un valor de ancho, en cuyo caso la altura por defecto es auto.
- 2 valores: Usando un valor de ancho y alto, en cuyo caso el primero establece el ancho y el segundo establece la altura. Cada valor puede ser un valor numérico, porcentaje o auto.


#### Valor contain
- Escala la imagen lo más grande posible dentro de su contenedor sin recortar ni estirar la imagen.
- Cambia el tamaño de la imagen de fondo para asegurarse de que la imagen es totalmente visible
- Si el contenedor es más grande que la imagen, se creará un mosaico de imágenes, a menos que la background-repeat propiedad se establezca en no-repeat.


```html
 <div style="height:80vh;">
      <div class="ejemplo"> </div>
    </div>
   
    <style>
      .ejemplo {
        width:500px;
        height:500px;
        background-image: url("fondo2.webp");
        background-size: contain;
      }
    </style>

```

#### Valor cover
- Redimensiona la imagen de fondo para que cubra todo el contenedor, aunque tenga que estirar o recortar la imagen.
- No deja espacios vacios.
- Si las proporciones del fondo difieren del elemento, la imagen se recorta vertical u horizontalmente.
- Parte de la imagen puede no aparecer en pantalla.
- La palabra clave cover cambiará el tamaño de la imagen de fondo para asegurarse de que el elemento esté completamente cubierto.

```html
 <div style="height:80vh;">
      <div class="ejemplo"> </div>
    </div>
   
    <style>
      .ejemplo {
        width:500px;
        height:500px;
        background-image: url("fondo2.webp");
        background-size: cover;
      }
    </style>

```
#### Valor auto
- Escala la imagen de fondo en la dirección (horizontal o vertical) correspondiente de modo que se mantengan sus proporciones intrínsecas (originales)
- La imagen de fondo se muestra en su tamaño original

#### Ejemplos

```html
 <div style="height:80vh;">
      <div class="ejemplo"> </div>
    </div>
   
    <style>
      .ejemplo {
        width:500px;
        height:500px;
        background-image: url("fondo2.webp");
        background-size: auto auto;
      }
    </style>

```

```css
    background-size: auto 50%;
```
```css
    background-size: 50% 50%;
```
```css
    background-size: 500px 500px
```

:::tip info
- [background-size - CSS tricks](https://css-tricks.com/almanac/properties/b/background-size/)
- [background-size - CSSreference](https://cssreference.io/property/background-size/)
- [La propiedad background-size](http://w3.unpocodetodo.info/css3/background-size.php)
- [CSS background-size Property](https://www.w3schools.com/cssref/css3_pr_background-size.php)

:::

### Propiedad background-position
- Te permite mover una imagen de fondo.
- Define la posición de la imagen de fondo.
- Tiene tres tipos diferentes de valores:
  -	Valores de longitud (p. ej 100px 5px.)
  -	Porcentajes (por ejemplo 100% 5%)
  -	Palabras clave (p. ej top right.)

#### Palabras claves
- Aquí hay una lista de las cinco palabras clave y sus valores equivalentes:
  -	top: 0% verticalmente
  -	right: 100% horizontalmente
  -	bottom: 100% verticalmente
  -	left: 0% horizontalmente
  -	center: 50% horizontalmente si la horizontal aún no está definida. Si es así, esto se aplica verticalmente.


#### Declarando valores
-	Si declara un valor , ese valor es el desplazamiento horizontal. El navegador establece el desplazamiento vertical en center.
-	Cuando declara dos valores , el primer valor es el desplazamiento horizontal y el segundo valor es el desplazamiento vertical.
- Se puede declarar tres o cuatros valores pero ya es mucho mas complejo.


#### Ejemplo

```html
 <div style="height:80vh;">
      <div class="ejemplo"> </div>
    </div>
   
    <style>
      .ejemplo {
        width:500px;
        height:500px;
        background-image: url("fondo2.webp");
        background-position: center;
      }
    </style>

```


Cambiamos el style

```html
  <style>
      .ejemplo {
        width:500px;
        height:500px;
        background-image: url("fondo2.webp");
        background-position: 230px 100px;
      }
    </style>

```

:::tip info
- [background-position - CSS tricks](https://css-tricks.com/almanac/properties/b/background-position/)
- [background-position - CSSreference](https://cssreference.io/property/background-position/)
- [Propiedad background-position](https://uniwebsidad.com/libros/referencia-css2/background-position)
- [CSS background-position Property](https://www.w3schools.com/cssref/pr_background-position.php)
- [background-position - Developer mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)
:::

### Propiedad background-repeat
- La propiedad  background-repeat establece si/cómo se repetirá una imagen de fondo.
  
#### Valor repeat
- La imagen se repite tantas veces como sea necesario para cubrir toda el área . La ultima imagen se recortará si no encaja
#### Valor Space
- La imagen se repite tanto como sea posible sin recorte.
- La primera y la ultima imagen se fijan a ambos lados del elemento y los espacio en blanco se distribuyen uniformemente entre las imágenes.
- La propiedad  background-position se ignora a menos que se pueda mostrar una imagen sin recortar.
- El único caso  en el que se produce el recorte es cuando no hay suficiente espacio para mostrar una imagen.
#### Valor Round
- A medida que el espacio  del contenedor aumenta de tamaño , las imágenes repetidas se estiraran hasta que haya espacio para agregar otra.
- Cuando se agrega la siguiente imagen , todas las actuales se comprimen para dejar espacio.

#### No-repeat
- La imagen no se permite
- La propiedad background-position define la posición de la imagen.

:::tip info
- [developer mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat)
- [w3schools](https://www.w3schools.com/cssref/pr_background-repeat.asp)
- [Valores](https://css-tricks.com/almanac/properties/b/background-repeat/)

:::

## Propiedad border
- Es un shorthand (propiedad abreviada) de 3 propiedades:
   - border-color : Especifica el color que se utilizará en el borde
   - border-style : Especifica el estilo para el borde a utilizar
   - border-width : Especifica un tamaño para el grosor del borde
- Este shorthand te permite definir todos los bordes de un elemento.


#### Las tres propiedades (border-style/color/width) pueden tener entre 1 y 4 valores
| Cantidad de valores | Significado |
| - | - |
| 1 Valor | Aplica el mismo valor a todos los bordes |
| 2 Valores | Aplica el primer valor al top/bottom y el segundo valor al left/right |
| 3 Valores | Aplica el primer valor al top , el segundo valor al left/right y el tercer valor al bottom |
| 4 Valores | Aplica el primer valor al top , el segundo valor al right , el tercer valor al bottom y el ultimo valor a left. |

:::tip Observación
Como podemos observar, esto sirve para especificar “que borde” va a tener estilos. Si el borde superior (top) , el borde izquierdo (left) , el borde inferior (bottom) o el borde derecho (right) o todos.
:::

#### Valores de border-style
|  Valor |  Descripción |
| - | - |
|  hidden | Oculto , idéntico a none   |
|  dotted | Establece un borde basado en puntos   |
|  dashed | Establece un borde basado en  rayas (línea discontinua)  |
|  solid | Establece un borde basado en rayas (línea continua)  |
|  double | Establece un borde doble ( dos líneas continuas)  |
|  groove | Establece un borde biselado con luz desde arriba  |
|  ridge | Establece un borde biselado con luz desde abajo  |
|  inset | Establece un borde con profundidad (hacia dentro)  |
|  outset | Establece un borde con profundidad (hacia fuera)  |

#### Ejemplo #1


```html
 <div>

  </div>

  <style>
    div {
      width: 500px;
      height: 500px;

      border-color: gray;
      border-width: 1px;
      border-style: dotted;
    }
  </style>

```
Es lo mismo que:

```html
 <style>
    div {
      width: 500px;
      height: 500px;

      border: gray 1px dotted;
    }
  </style>

```
:::tip
Como son tres valores de diferentes tipos, no importa el orden.
:::

#### Ejemplo #2
```html
 <div>

  </div>

  <style>
    div {
      width: 500px;
      height: 500px;
      border-color: gray red green yellow;
      border-width: 1px 2px 3px 4px;
      border-style: dotted solid groove inset;

    }
  </style>

```

:::tip Observación
Esto no se puede hacer con el shorthand border ya que solo te pide 1 valor por cada propiedad.
:::


### Bordes especificos
- Existen propiedades para especificar a que borde queremos aplicarle estilos.

```css
border-x-width/style/color
```
:::tip Explicación
- X puede ser top , right , bottom o left. Hace referencia al borde que queremos aplicarle estilo.
- Por otro lado width/style/color corresponde a border-width , border-style y border-color pero del borde X
:::
#### Ejemplo #01
```html
 <div>

  </div>

  <style>
    div {
      width: 500px;
      height: 500px;
      border-bottom-width: 2px;
  border-bottom-style: dotted;
  border-bottom-color: black;

    }
  </style>

```
#### Ejemplo #02

```js
<style>
    div {
      width: 500px;
      height: 500px;
      border: 5px solid red;
  border-top-width: 15px;
  border-top-color: orange;
  border-top-style: solid;  /* Esta propiedad no es necesaria (se hereda) */

    }
  </style>

```
:::tip Observación
Por la cascada CSS , se sobrescribe el valor del border top
:::


#### ¿Como Simplificar?

El ejemplo anterior (#02) , lo podemos simplificar de la siguiente manera:

```css
 div {
      width: 500px;
      height: 500px;
      border: 5px solid red;
   border-top:15px orange solid;
    }

```
:::tip
Como son tres valores de diferentes tipos, no importa el orden.
:::

| Propiedad   |  Explicación  |
| - | - |
|  border-top |   Aplica las tres propiedades al borde superior |
| border-right  | Aplica las tres propiedades al borde  derecho  |
| border-bottom  | Aplica las tres propiedades al borde  inferior  |
| border-left  | Aplica las tres propiedades al borde  izquierdo  |


:::tip info
- [Bordes CSS](https://lenguajecss.com/css/modelo-de-cajas/bordes/)
- [border - Libros web](http://dis.um.es/~lopezquesada/documentos/IES_1213/LMSGI/curso/UT5/libroswebcss21/www.librosweb.es/referencia/css/border.html)
- [La propiedad border](http://w3.unpocodetodo.info/css3/border.php)
- [Propiedad border](https://uniwebsidad.com/libros/referencia-css2/border)
- [border - Developer mozilla](https://developer.mozilla.org/es/docs/Web/CSS/border)
:::

## Propiedad text-fill-color / Color

#### Propiedad color
- Sirve para seleccionar el color del texto.
- Cambia el color del texto que está en el interior de un elemento.
- Este color se utiliza en otras propiedades como text-decoration , border-color , etc.

```html
  <p>Hola Mundo</p>

  <style>
     p {
      color:red;
     }
  </style>

```

#### Colores
| Sintaxis | Nombre | Descripción |
| - | - | - |
| red | Palabra clave predefinida | Establece un color mediante una palabra clave predefinida |
| rgb() | Funcion RGB | Utiliza la funcion rgb() (rojo , verde , azul) |
| rgba() | Funcion RGB con canal alfa | Lo mismo que rbg pero con un canal alfa (transparencia) añadido. |
| #rgb | Código RGB hexadecimal con canal alfa | Notación RGB abreviada en hexadecimal con un canal alfa añadido. |
| Hsl() | Función HSL | Función hsl() (matiz de color, saturación y brillo). |
| Hsla() | Función HSL con canal alfa | Es como hsl() pero con un canal alfa añadido |

:::tip info
- [Colores CSS](https://lenguajecss.com/css/colores-y-fondos/colores-css/)
- [color](https://developer.mozilla.org/es/docs/Web/CSS/color)
:::

#### Propiedad text-fill-color
- Define el color de relleno de los caracteres del texto . Si no se establece esta propiedad , se utiliza el valor de la propiedad color.
- Esta propiedad tiene más prioridad que la propiedad color.

```html

<body>
   <p>Hola Mundo</p>

  <style>
     p {
      -webkit-text-fill-color:red;
     }
  </style>
</body>

```

:::tip info
- [-webkit-text-fill-color](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-text-fill-color)
- [CSS text-fill-color Property](https://www.w3docs.com/learn-css/text-fill-color.html)
:::

## Propiedad clip-path

- La propiedad clip-path permite realizar un recorte con una forma concreta, ocultando toda la región externa del recorte. 
- Su utilización es muy sencilla y permite realizar formas muy flexibles y versátiles.
- La propiedad clip-path en general puede tomar 3 tipos de valores: 


#### Valor none
- El valor por defecto, donde no utilizamos ningún tipo de recorte (o lo desactivamos si lo había).

#### Valor shape

- Un valor shape es una funcion.
- Dentro de los valores shape podemos utilizar cualquiera de las siguientes:
  
|   |   |
| - | - |
|  inset(top right bottom left) | Recorta en forma rectangular hacia dentro.  |
|  inset(top right bottom left **round** radius) | Idéntico al anterior, pero especificando bordes redondeados (radius). |
|  circle(size at x y) | Recorta en forma circular con un tamaño size con centro en x,y. |
|  ellipse(sx sy at x y) | Idéntico anterior, pero especificando el tamaño de ancho(sx) y de alto(sy). |
|  path(coords) | Recorta siguiendo los datos de un trayecto SVG. |
|  polygon(x y, x y, ...) | Recorta un polígono siguiendo las coordenadas establecidas. |



:::tip Observación
Las palabras en negritas no se pueden “cambiar” por otras. Son palabras claves, NO VALORES.
:::

#### Valor url()
- Indicamos una imagen SVG para utilizar un recorte personalizado mediante &lt;clipPath>.

#### Ejemplo inset
```html
 <div class="box"></div>

  <style>
  .box {
    background: hotpink;
    width: 200px;
    height: 200px;
    clip-path: inset(0 0 50% 50%);
  }
  </style>

```

:::tip Observación
Así pues, inset(0% 0% 50% 50%) parte desde el 0% de la parte superior, desde el 0% de la parte derecha, desde la mitad (50%) de la parte inferior y desde la mitad (50%) de la parte izquierda:
:::

![INSET](https://lenguajecss.com/css/mascaras-y-recortes/clip-path/clip-path-inset.png)

#### Ahora redondeamos los bordes del cuadrado o rectángulo.
```css
   clip-path: inset(0 0 50% 50% round 20px);
```
- Estariamos hacienda algo similar a border-radius: 20px 20px 20px 20px;

#### Abreviación

```css
 clip-path: inset(50px round 20px);
```

Es igual a 
```css
    clip-path: inset(50px 50px 50px 50px round 20px);
```

#### Ejemplo con circle

- En el caso de los recortes circle(), vamos a establecer un recorte circular en una porción del elemento, pudiendo recortar formas como círculos, medias lunas, etc...

```html
 <div class="box"></div>

  <style>
  .box {
    background: hotpink;
    width: 200px;
    height: 200px;
    clip-path: circle(50% at 50% 0);
  }
  </style>

```

:::tip Observación
El primer parámetro indica el tamaño del recorte en forma de círculo (50%), y las coordenadas después de at es el punto central del círculo: 50% en x y 0% en y.
:::

![circle](https://lenguajecss.com/css/mascaras-y-recortes/clip-path/clip-path-circle.png)

#### Ejemplo ellipse()

- En el caso del ellipse() es exactamente igual que el de circle() 
- La diferencia respecto a circle() es que  le podemos indicar el tamaño de ancho y de alto, mientras que en el círculo este valor es el mismo en ambos y sólo se indica uno

```html
 <div class="box"></div>

  <style>
  .box {
    background: hotpink;
    width: 200px;
    height: 200px;
    clip-path: ellipse(50% 25% at 50% 0);
  }
  </style>

```


#### Ejemplo con polygon



- Es el  recorte  más potente y versátil.
- Su funcionamiento es muy sencillo, pero a la vez muy flexible, simplemente hay que indicar los puntos de corte deseados e iremos realizando el recorte.

```html
<div class="box"></div>

  <style>
  .box {
    background: hotpink;
    width: 200px;
    height: 200px;
    clip-path: polygon(0 0, 100% 0, 50% 100%);
  }
  </style>

```
:::tip Observación
- En este ejemplo, polygon() tiene 3 puntos de corte separados por comas (cada uno con sus coordenadas en X e Y), formando un triángulo, pero se pueden indicar tantos puntos de corte como se quiera (incluso con valores negativos o superiores a 100%).
:::

![polygon](https://lenguajecss.com/css/mascaras-y-recortes/clip-path/clip-path-polygon.png)

:::tip
 Aunque es posible utilizar otras unidades, lo más habitual suele ser establecer las coordenadas con porcentajes, ya que resulta muchísimo más sencillo y claro, siendo también mucho más escalable y mantenible si el elemento padre cambia sus dimensiones.
:::


#### Ejemplo con path

- Si buscamos algo un poco más flexible y potente, necesitamos   utilizar la función path(). 
- Podemos definir un trayecto SVG para aplicar como recorte, consiguiendo formas mucho más complejas, imposibles (o muy difíciles) de conseguir con sólo HTML/CSS.
- En los parámetros de path() se pasa un  String que es una serie de coordenadas de un trayecto SVG, o lo que es lo mismo, el atributo data de un elemento &lt;path> de SVG.

```html
<body>
  <div class="box"></div>

  <style>
  .box {
    width: 300px;
    height: 300px;
    background: red;
    clip-path: path("m4,87l93,0l29,-84l29,84l93,0l-76,52l29,84l-76,-52l-76,52l29,-84l-76,-52z");
  }
  </style>
</body>

```

#### Ejemplo con url()
- También podemos utilizar un código SVG (o una imagen SVG externa) que contenga un elemento &lt;clipPath>. De esta forma, desde CSS le indicamos que utilice dicho recorte en una zona de nuestra página, pudiendo ayudarnos de SVG para hacer formas mucho más específicas.

|   |   |
| - | - |
| url(#name) | Recorta una forma siguiendo un &lt;clipPath> SVG con el id name. |
| url(file.svg#name) | Idéntico al anterior, pero desde un fichero SVG externo file.svg. |

:::tip 

- Observa que en la primera de ellas no se indica el nombre del fichero SVG, sino que solamente se indica el identificador del elemento, es decir, el  id del elemento a referenciar. En este caso, se buscará el &lt;clipPath> en un código SVG en  el propio documento HTML.
- En el segundo caso, indicamos tanto el nombre del fichero .svg como el id, por lo tanto, buscará el &lt;clipPath> con el id indicado en un archivo externo.
:::

```html
 <svg>
    <clipPath id="shape1">
      <path d="M 0,0 H 29 L 7,26 H 58 L 34,0 H 65 V 72 L 32,100 0,72 Z" />
    </clipPath>
  </svg>
  
  <div class="box"></div>
  
  <style>
  .box {
    background: hotpink;
    width: 200px;
    height: 200px;
    clip-path: url(#shape1);
  }
  </style>

```

:::tip info
- [La propiedad clip-path](https://lenguajecss.com/css/mascaras-y-recortes/clip-path/)
- [PROPIEDAD CLIP-PATH](https://www.programandoamedianoche.com/2019/09/propiedad-clip-path/)
- [Recortar con clip-path](http://w3.unpocodetodo.info/css3/clip-path.php)
:::

:::tip Generador
https://bennettfeely.com/clippy/

:::

## Propiedad float
- Sirve para que un elemento “flote”.
- Un elemento “flota” si admite que el texto/elemento fluya a su alrededor

#### Valor none
- El elemento no “flota” , aparecerá en la posición que corresponda.
#### Valor left
- El elemento “flotara” en la izquierda. El resto de elementos aparecerán rodeándolo. 
- El elemento quedara en la izquierda y el resto lo “rodeara”.


#### Valor right
- El elemento “flotara” en la derecha . El resto de elementos aparecerán rodeándolo.
- El elemento quedara en la derecha y el resto lo “rodeara”.

```html
 <html>

<head>

</head>

<body>
  
  <img src="fondo.webp" alt="">
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium illo ratione quaerat qui, doloremque nihil corrupti iste officiis aspernatur voluptatum iure architecto in cum consectetur optio ea laudantium ab ex.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium illo ratione quaerat qui, doloremque nihil corrupti iste officiis aspernatur voluptatum iure architecto in cum consectetur optio ea laudantium ab ex.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium illo ratione quaerat qui, doloremque nihil corrupti iste officiis aspernatur voluptatum iure architecto in cum consectetur optio ea laudantium ab ex.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium illo ratione quaerat qui, doloremque nihil corrupti iste officiis aspernatur voluptatum iure architecto in cum consectetur optio ea laudantium ab ex.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium illo ratione quaerat qui, doloremque nihil corrupti iste officiis aspernatur voluptatum iure architecto in cum consectetur optio ea laudantium ab ex.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium illo ratione quaerat qui, doloremque nihil corrupti iste officiis aspernatur voluptatum iure architecto in cum consectetur optio ea laudantium ab ex.</p>
  <style>
   img {
    width:50%;
    float:left;
   }
  </style>
</body>

</html>

```
:::tip Observación
- El texto se ubicará alrededor de la imagen.
- La imagen se quedará “flotando” en la izquierda.
:::
## Propiedad shape-outside
- Logra lo mismo que [float](#propiedad-float)
- Permite que el texto o los elementos fluyan alrededor de un objeto/forma que creamos con esta propiedad.
- Para que surja efecto, el elemento debe cumplir dos condiciones:
  -	Que esté “flotando” (propiedad float)
  -	Que tenga unas medidas definidas.
- Sus valores pueden ser las funciones de la propiedad [clip-path](#valor-shape):
  -	circle(): para formas circulares.
  -	ellipse(): para formas  elípticas.
  -	inset(): para formas rectangulares.
  -	polygon(): para cualquier forma con más de 3 vértices.
  -	url(): para utilizar una imagen.
  -	initial: el elemento flotado no se ve afectado.
  -	inherit: hereda de su padre el valor de shape-outside.


:::warning
El elemento que utiliza la  propiedad shape-outside tiene que ser flotante. También tiene que tener definido, width y height. ¡Eso es muy importante saberlo!
:::

#### Ejemplo

```html
<body>
  

  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium illo ratione quaerat qui, doloremque nihil corrupti iste officiis aspernatur voluptatum iure architecto in cum consectetur optio ea laudantium ab ex.</p>
  <img src="fondo.webp" alt="">
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium illo ratione quaerat qui, doloremque nihil corrupti iste officiis aspernatur voluptatum iure architecto in cum consectetur optio ea laudantium ab ex.</p>

  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium illo ratione quaerat qui, doloremque nihil corrupti iste officiis aspernatur voluptatum iure architecto in cum consectetur optio ea laudantium ab ex.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium illo ratione quaerat qui, doloremque nihil corrupti iste officiis aspernatur voluptatum iure architecto in cum consectetur optio ea laudantium ab ex.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium illo ratione quaerat qui, doloremque nihil corrupti iste officiis aspernatur voluptatum iure architecto in cum consectetur optio ea laudantium ab ex.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium illo ratione quaerat qui, doloremque nihil corrupti iste officiis aspernatur voluptatum iure architecto in cum consectetur optio ea laudantium ab ex.</p>
  <style>
   img {
    width:50%;
    float: left;
    clip-path: polygon(0 0 , 60% 0 , 100% 100% , 0 100%);
    shape-outside: polygon(0 0 , 60% 0 , 100% 100% , 0 100%)
   }

   p {
    shape-outside: border-box;
   }
  </style>
</body>

```

:::tip Observación
- Si quitamos la propiedad shape-outside , el texto del párrafo se colocara  alrededor de la “caja” (box-model) de la imagen”.
- Si quitamos la propiedad clip-path, el texto del párrafo se colocara alrededor de la forma que creamos con la propiedad shape-outside , provocando que parte del texto se encuentre adentro de la imagen.
- Si dejamos ambas propiedades, con los mismos valores, apenas termina la “figura” de la imagen, empieza el texto.


:::

#### Tambien existen 4 valores mas (relacionados con el box-model)


- margin-box : Los elementos/textos se colocaran alrededor del margen de la caja 
- border-box : Los elementos/textos se colocaran alrededor del limite exterior del borde
- padding-box : Los elementos/textos se colocaran alrededor del limite exterior del padding.
- content-box : Los elementos/textos se colocaran alrededor del contenido.


:::tip info
- [shape-outside](https://developer.mozilla.org/en-US/docs/Web/CSS/shape-outside)
- [CSS shape-outside: y el texto sigue el contorno](https://escss.blogspot.com/2017/03/css-shape-outside.html#:~:text=La%20propiedad%20CSS%20shape%2Doutside%20permite%20crear%20diferentes%20contornos%20seg%C3%BAn,ellipse()%20%3A%20forma%20figuras%20el%C3%ADpticas)
- [La propiedad shape-outside](http://w3.unpocodetodo.info/css3/shape-outside.php)
- [Cómo Usar CSS Shapes en Tu Diseño Web](https://webdesign.tutsplus.com/es/tutorials/how-to-use-css-shapes-in-your-web-design--cms-27498)
:::


## Propiedad line-height
- Establece la “altura” que va a ocupar una línea de texto.
- Se suele utilizar para establecer la distancia entre líneas de texto.
- Si el valor de line-height es superior al valor de la propiedad font-size:
   - Define la misma cantidad de espacio por encima y por debajo de una línea de texto. (los navegadores añaden un espacio de separación del mismo tamaño por encima y por debajo del texto)
- En los elementos de bloque, la propiedad line-height indica la altura mínima.
- En los elementos en línea, line-height indica directamente la altura de la caja que forma ese elemento (salvo las imágenes, cuya altura se determina mediante la propiedad height).

![line-height](https://iamvdo.me/content/01-blog/30-css-avance-metriques-des-fontes-line-height-et-vertical-align/css-metrics-results-line-height.png)
![line-height 2](https://www.1keydata.com/css-tutorial/line-height.jpg)

```html
 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, nostrum minus, incidunt et magnam quod earum ipsa magni suscipit dolorem vel illum illo modi harum, aut eius pariatur voluptas at!</p>
  <style>
    p {
      line-height: 3;
    }
  </style>

```

:::tip info
- [line-height sin unidades en CSS: ¿para qué se utiliza?](https://www.jasoft.org/Blog/post/line-height-sin-unidades-en-css-para-que-se-utiliza)
- [line-height - Developer mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)
- [CSS line-height Property](https://www.w3schools.com/cssref/pr_dim_line-height.php)
- [line-height - CSStricks](https://css-tricks.com/almanac/properties/l/line-height/)
- [Propiedad line-height](https://uniwebsidad.com/libros/referencia-css2/line-height)
:::

## Propiedad font-size
- Cambia el tamaño de la letra
- Establece el tamaño de letra

```html
 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, nostrum minus, incidunt et magnam quod earum ipsa magni suscipit dolorem vel illum illo modi harum, aut eius pariatur voluptas at!</p>
  <style>
    p {
      font-size: 20px;
    }
  </style>

```

