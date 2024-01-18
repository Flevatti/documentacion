---
sidebar_position: 8
---
# Funciones CSS

- En CSS, muchas veces necesitaremos realizar operaciones más cercanas a un lenguaje de programación que a un lenguaje de estilos, como pueden ser cálculos o utilizar valores precalculados. Por esta razón, con el tiempo, se han ido añadiendo funciones CSS.
- Las funciones CSS se utilizan como valor de algunas propiedades CSS.

:::tip Info 
- [5 funciones CSS mas USADAS](https://lenguajecss.com/css/modelo-de-cajas/funciones-css/)
- [Explicación basica](https://css-tricks.com/complete-guide-to-css-functions/)
- [Listado de funciones CSS](http://w3.unpocodetodo.info/css3/funciones_css.php)
:::

## var()
- La función var() puede ser utilizada como valor en cualquier propiedad css de un elemento.
- La función var() no puede ser usada como nombre de una propiedad, selector o cualquier cosa que no sea un valor de propiedad
- Recibe dos argumentos:
1.	El nombre de una variable 
2.	Un valor por defecto (por si no existe la variable)
- La función var() toma una variable para utilizarla como valor de una propiedad css.



Ejemplo:
```html
<body>
 <style>

   /* En este selector se definen las variables globales */
   :root {
         /* --nombrevariable: valor */
        
         /* Creamos la variable --red cuyo valor es red */
         --red : red
   }

   body {
    /* var(nombrevariable , valor por defecto) */

    /* el valor de la variable --red  es red  */
    /* el valor de background-color es red (el valor de –-red) */
    /* Si --red no existe , utilizaria blue como valor de background-color */
      background-color : var(--red , blue);
   }
     
 </style>

</body>

```

- [Mas info](https://developer.mozilla.org/es/docs/Web/CSS/var)


## attr()
- La función attr() es una función incorporada en CSS que devuelve el valor de un atributo de los elementos seleccionados.
- Sirve para utilizar el valor de un atributo , como el valor de una propiedad CSS.
- Sintaxis : attr(nombre atributo)


```html
  <style>
  p::before {
  content: attr(data-foo) " ";
}

     </style>
  </head>
  <body>
    <p data-foo="hello">world</p>
  </body>
```

:::tip Observacion
- Por defecto la funcion attr devuelve un String con el valor del atributo
- El string vacio(" ") se concatena con el valor de la funcion attr.
:::

#### attr( nombre-atributo  tipo-de-dato )
- Podes especificar que tipo de dato va a devolver la funcion  attr.
- Tipos de datos : 
    - string  : Valor predeterminado
    - color
    - url
    - integer
    - number
    - lenght , unidades absolutas o relativas
    - angle
    -  [mas info](https://developer.mozilla.org/en-US/docs/Web/CSS/attr)

:::warning
- Esta en prueba
- Puede no ser compatible con el navegador
:::


:::tip 
Tambien podes poner un valor por defecto , investiga!

:::

## clamp()
- La función clamp() toma una lista de 3 parametros: un mínimo, un valor deseado y un máximo
-  El valor deseado será utilizado en el css si no es más pequeño que el valor mínimo o más grande que el valor máximo.
- Los parámetros pueden ser valores o funciones matemáticas. Es importante que el valor resultante sea un argumento válido  (unidades de longitud, ángulos, unidades de tiempo etc... según el caso).
  


```html
  <p>lorem</p>
    <style>
       p {
        font-size: clamp(1rem , 2rem   , 3rem);
       }
    </style>
```

## cubic-bezier()
- Sirve para trabajar con animaciones y transiciones.
- Sirve como valor de animation-time-functions y transition-time-functions.
- [Generador](https://cubic-bezier.com/#.22,.36,.24,1.13)
- Los primeros dos parametros es la cordenada del primer punto y los últimos dos parámetros es la cordenada del segundo punto.
- Es una curva de tiempo.
- Sirve para optimizar algún que otro movimiento.
- [Explicación Detallada](https://mmteam.controldedominios.com/entradaBlog.asp?blog=3&cod=58)


## url()
- Se utiliza para incluir un archivo como valor de una propiedad css.
- El parámetro es una URL absoluta, una URL relativa, una URL de blob o una URL de datos.
- Tipo de dato del parámetro:  
   - Puede ser un String ,  que especifica la ruta del archivo.
   - Puede ser una URL , que es una dirección relativa o absoluta , o puntero , al recurso web que se va a incluir.

```css
    background: url('./fondo2.webp');
   background: url(./fondo2.webp);

```
:::tip info
- [Developer mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/url#:~:text=The%20url()%20CSS%20function,like%20the%20attr()%20function.)

:::

## conic-gradient()
- Crea una imagen que consta de un degradado con transiciones de color giradas alrededor de un punto central.
- Genera un degradado que muestra la transición entre los colores especificados. Este degradado gira alrededor de un punto central.
- Si no se especifica ningún grado, los colores se distribuirán por igual alrededor del punto central.


#### Sintaxis: Solo colores

- De forma predeterminada, los colores pasan suavemente del color de una parada de color al color de la siguiente parada de color.
- Cada parámetro es una parada de color, cuyo color es el que especificamos.

```html
 <div class="cuadrado"></div>

  <style>
    .cuadrado {
    width: 500px;
    height: 500px;
    background-image: conic-gradient(red, yellow, green);

}
  </style>

```
#### Sintaxis: Añadir grados
- La posición de una parada de color se puede definir explícitamente mediante un deg.
- Si no especifica la ubicación de una parada de color, se coloca a medio camino entre la que le precede y la que le sigue. 
- Si no especifica un ángulo para la primera o última parada de color, sus valores son 0 grados y 360 grados respectivamente. Los siguientes dos gradientes son equivalentes

```html
 <div class="cuadrado size"></div>
   <div class="cuadrado2 size"></div>

  <style>
    .size {
      width: 500px;
    height: 500px;
    }
    .cuadrado {

    background: conic-gradient(red , orange , yellow , green ,  blue  );

}  
.cuadrado2{
  margin-top:50px;
  background:conic-gradient(red 0deg, orange 90deg, yellow 180deg, green 270deg, blue 360deg);
}
  </style>

```

:::tip Observacion
- Cada parámetro es una parada de color, la cual se especifica su color y su ubicación (deg).
- Los dos cuadrados son iguales
:::

#### Ejemplo

```css
.cuadrado2{
  margin-top:50px;
  background:conic-gradient(red 40grad, 80grad, blue 360grad);

}

```
:::tip Observación
- La segunda parada (80 grad) , se encarga de mostrar una transición del rojo al azul.
- El segundo parámetro (segunda parada), especifica el “punto medio” del cambio de degradado de rojo a azul. Si esto se omitia , el punto medio de la transición de color es el punto medio entre dos paradas de color.
:::

:::tip info
- [conic-gradient() - Developer mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/conic-gradient#try_it)
- [What Is A Conic Gradient?](https://www.smashingmagazine.com/2022/01/css-radial-conic-gradient/#what-is-a-conic-gradient)
- [conic-gradient() - Lenguaje CSS](https://lenguajecss.com/css/colores-y-fondos/conic-gradient/)

:::

## linear-gradient()
- Crea una imagen que consiste en una transición progresiva entre dos o más colores a lo largo de una línea recta (vertical)


```html
<body>

   <div class="cuadrado size"></div>

  <style>
    .size {
      width: 500px;
    height: 500px;
    }
  
.cuadrado{
  margin-top:50px;

  background:linear-gradient(red, orange, yellow, green, blue);

}
  </style>
</body>

```

- Tiene casi la misma sintaxis que  [conic-gradient()](#conic-gradient)
- Cada parámetro es una parada de color con un color especifico.
- La posición se define con porcentajes o pixeles
- Si no especifica la ubicación de un color, se coloca a medio camino entre el que le precede y el que le sigue. 
- Los siguientes dos gradientes son equivalentes.

```css
linear-gradient(red, orange, yellow, green, blue);
linear-gradient(red 0%, orange 25%, yellow 50%, green 75%, blue 100%);

```

#### Otro ejemplo
```css
.cuadrado{
  margin-top:50px;

  background:linear-gradient(red 10%, 30%, blue 90%);

}

```
:::tip Observación
- Rojo sólido desde el principio hasta la marca del 10  
- Azul sólido desde el 90 % hasta el final. 
- Entre el 10 % y el 90 %, el color cambia de rojo a azul
- Sin embargo, el punto medio de la transición se encuentra en la marca del 30% (segundo parametro / segunda parada) 
:::


:::tip info
- [linear-gradient()](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient)
- [Gradientes lineales](https://lenguajecss.com/css/colores-y-fondos/linear-gradient/)

:::

## radial-gradient()
- Crea una imagen que consiste en una transición progresiva entre dos o más colores que irradian desde un origen
- Sintaxis:
```css
  background: radial-gradient(circle at center, red 0, blue, green 100%)
```
:::tip Observación
- center : position
- circle : ending-shape 
:::
- Tiene casi la misma sintaxis que  la funcion   [conic-gradient()](#conic-gradient) y  [lineal-gradient()](#linear-gradient)

:::tip info
- [Gradiente radiales](https://lenguajecss.com/css/colores-y-fondos/radial-gradient/)
- [radial-gradient()](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient#description)
- [CSS radial-gradient() Function](https://www.w3schools.com/cssref/func_radial-gradient.php)
:::

## repeating-conic-gradient()

- Crea una imagen que consta de un degradado repetido generado por [conic-gradient()](#conic-gradient).
- Tiene una sintaxis similar a conic-gradient().
- Para que se repita:
   - La primera parada debe incluir un ángulo superior a 0 grados
   - La ultima parada debe incluir un Angulo inferior a 360 grados

```html
 <div class="cuadrado size"></div>

  <style>
    .size {
      width: 500px;
    height: 500px;
    }
  
.cuadrado{
  margin-top:50px;

  background: repeating-conic-gradient(from 0deg, red 0deg 30deg, yellow 30deg 60deg, blue 60deg 90deg);

}
  </style>

```

:::tip info
- [Developer mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/repeating-conic-gradient#:~:text=The%20repeating%2Dconic%2Dgradient(),than%20radiating%20from%20the%20center%20)
:::

## repeating-linear-gradient()

- Crea una imagen que consta de un degradado repetido generado por [linear-gradient()](#linear-gradient).
- Tiene una sintaxis similar a linear-gradient().
- Para que se repita , no tiene que ocupar el 100% del fondo.

```css
  background: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 20px,
    black 20px,
    black 40px
  );

```

:::tip info
- [Developer mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/repeating-linear-gradient)

:::


## repeating-radial-gradient()
- Crea una imagen que consta de un degradado repetido generado por [radial-gradient()](#radial-gradient).
- Tiene una sintaxis similar a radial-gradient().
- Para que se repita , no tiene que ocupar el 100% del fondo.

```css
  background: repeating-radial-gradient(circle at center, red 0, blue, green 30px);
```
:::tip info
- [Developer mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/repeating-radial-gradient)

:::


## Calc()
- Te permite realizar cálculos para determinar valores de propiedades CSS.
- Es posible anidar llamadas a calc() dentro de otras llamadas calc().

```js
calc(expresión)
```
- expresión : Una expresión matemática cuyo resultado es usado como valor para la propiedad sobre la cual se aplica.
- Esta expresión matemática pueden contener sumas , restas , multipliciones y divisiones  de porcentajes , píxeles o cualquier unidad.

#### Ejemplo
```css
width: calc(100% - 80px);
```

:::tip info
- [calc](http://localhost:3000/documentacion/docs/CSS/funciones#calc)
- [A Complete Guide to calc() in CSS](https://css-tricks.com/a-complete-guide-to-calc-in-css/)
- [Cálculos en el CSS con calc() de CSS3](https://xitrus.es/blog/80/C%C3%A1lculos_en_el_CSS_con_calc()_de_CSS3)
:::