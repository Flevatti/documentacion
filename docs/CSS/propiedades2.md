---
sidebar_position: 3
---
# Propiedades #2
## Animaciones
### Propiedad animation-name y animation-duration
#### Propiedad animation-name
- Con la propiedad animation-name, le asignamos una animación a un elemento.
  
```css
animation-name : nombre de animación
```
```css
    animation-name: mianimacion;
```
:::tip
El nombre de animación corresponde al nombre de una animación que creamos.
:::
#### Propiedad animation-duration
- Con la propiedad animation-duration especificamos la duración de la animación.
```css
    animation-duration:4s;
```
### @keyframes
- La palabra clave "@keyframes" sirve para crear animaciones.
- Sintaxis:

```css
@keyframes nombreanimacion {
 

}

```
:::tip Observación
- Con la palabra clave “@keyframes” creamos una animación
- Alado de @keyframes , se declara el nombre de la animación
- Lo que va dentro de las llaves ({}) es la animación que se va a desarollar
:::


#### Animacion con porcentaje
```css
0% {
 Propiedades CSS que se van a aplicar al comenzar la animación
}
50% {
 Propiedades CSS que se van a aplicar en el medio de la animacion

}
100% {
Propiedades CSS que se van a aplican al terminar la animación

}

```
- Siguiendo la misma lógica, podes usar cualquier porcentaje del 0% al 100%
- Ej. 75%, 25%, 37%, etc

#### Ejemplo
```css
  @keyframes mianimacion {
        0%{
          background:#aaa
        }  
         25%{
          background:red
        }
        50%{
          background:green
        }  
         75%{
          background:pink
        }

        100% {
           background:blue;
        }
      }

```

#### Ejemplo completo
```html
<div class="cuadrado"></div>
    <style>
      .cuadrado {
        width:200px;
        height:200px;
        animation-name: mianimacion;
        animation-duration:4s;
        background:#aaa
      }

      @keyframes mianimacion {
        0%{
          background:#aaa
        }  
         25%{
          background:red
        }
        50%{
          background:green
        }  
         75%{
          background:pink
        }

        100% {
           background:blue;
        }
      }
    </style>

```
#### Animacion con from y to
- Es otra forma de crear una animacion
```css
@keyframe nombreanimacion {
from {
Propiedades css que contiene al comenzar
}
to{
Propiedades css que debe tener al terminar
}
}

```
#### Ejemplo
```css
    @keyframes mianimacion {
        from {
          position: relative;
          left: 0;
        }
        to {
          left: 80%;
        }
      }

```
### Propiedad animation-delay
- Con la propiedad animation-delay , especificamos el retraso de la animacion .  
- Esta propiedad sirve para especificar “el tiempo que hay que esperar” para que comience la animación.
- Por defecto la animación comienza apenas se especifica en la propiedad animation-name.


```css
animation-delay:2s;
```
#### Ejemplo
```html
   <div class="cuadrado"></div>
    <style>
      .cuadrado {
        position: relative;
        width:200px;
        height:200px;
        animation-name: mianimacion;
        animation-duration:4s;
        background:#aaa;
        animation-delay:2s;

      }

      @keyframes mianimacion {
        0%{
          background:#aaa;
          top:0px;
          left:0px;
        }  
         25%{
          background:red;
          left:300px; 
          top:0px;
        }
        50%{
          background:green;
          left:300px;
          top:300px;
        }  
         75%{
          background:pink;
          left:0px;
          top:300px;
        }

        100% {
           background:blue;
           top:0px;
           left:0px;
        }
      }
    </style>

```
### Propiedad animation-direction
- Con la propiedad animation-direction podemos especificar la “dirección” de la animación.
  
| Valor  |  Explicación  |
| - | - |
| normal |   Por defecto , de 0% a 100%.|
| reverse |   El 100% equivale al 0% y el 0% equivale al 100% .  Se invierte la dirección de la animación.|
| alternate |   Es como un normal y luego un reserve , arranca en el 0% hasta el 100%  y luego se vuelve hasta el 0%|
| alternate-reverse  |   Es como un reverse y luego un normal , arranca desde 100%  hasta el 0%  y luego vuelve hasta el 100%.|

```css
  animation-direction: reverse;
```
### Propiedad animation-timing-function 
- Con la propiedad animation-timing-function especificamos la velocidad de la animacion.

| Valor  |  Explicación  |
| - | - |
| linear |   La animación siempre se realiza a la misma velocidad.|
| ease |  Valor por defecto , Arranca  lento , luego rápido y termina despacio|
| ease-in |  Arranca despacio y termina rápido |
| ease-out |  Arranca rapido y termina despacio  |
| ease-in-out |  Ease-in-out: Arranca despacio , acelera y termina despacio  |
| funcion cubic bezier |  [Explicación](./funciones.md#cubic-bezier) |

:::tip info
- [transition-timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)
- [transition-timing-function #2](https://www.w3schools.com/cssref/css3_pr_animation-timing-function.php)
:::

### Propiedad animation-iteration-count
- Con la propiedad animation-iteration-count especificamos la cantidad de veces que se va a repetir la animacion.

```css
       animation-iteration-count: 2;
```
- Con el valor infinite, se repite infinitamente.
```css
    animation-iteration-count: infinite;
```
### Propiedad animation-fill-mode
- Con la propiedad animation-fill-mode especificamos como se va a quedar el elemento, luego de la animación.
  
| Valor | Explicación |
| - | - |
|  none | El elemento vuelve a la normalidad , la animación nunca existio.   |
|  backwards   | Al elemento se le aplica los estilos del primer fotograma ( Puede ser 0% o 100% , depende de la dirección de la animación) y lo conservara durante el retraso(delay) de la animación. |
|  forwards   | Al elemento se le aplica los estilos del ultimo fotograma (Puede ser 0% o 100% , depende de la dirección de la animación ) . |
|  both   | Es un backwards y forwards.  Al elemento se le aplica los estilos del primer fotograma y luego termina con los estilos del último fotograma. |

:::warning

- Para  hacer animaciones se recomienda transform:translate en lugar de position:relative ,  para mejorar el consumo de recursos
- Por cada movimiento con el position , se borra el layout y se vuelve a insertar todo desde 0
- Con el translate se crea una nueva capa, pone el elemento en esa capa y borra la anterior capa. No movemos el layout


:::
### Propiedad animation
- La propiedad animation es un shorthand de todas las propiedades dadas.
- [info](https://www.w3schools.com/cssref/css3_pr_animation.php)

## Transiciones

#### ¿Que es una transición?
- Es mostrar todos los frames de diferencia entre un estado y otro estado. Ej. La transición de color verde a color rojo.
-  Las transiciones son para mostrar el proceso de un cambio.
- Una transición es el cambio del valor de una propiedad a otro valor.
- Cuando una propiedad cambia de valor, se hace una transición.
- Este cambio no es de manera instantánea, sino que se logra con una transición.
- Para que una transición suceda, se necesita un disparador(trigger)

:::tip Disparador
- Los disparadores en css son PseudoClases como hover , active , target , focus , etc.
- El disparador se encarga del cambio de estado (el cambio del valor de una propiedad)
:::

- Una transición modifica una propiedad o varias.
- Cuando aparece el elemento por primera vez en el DOM , es una transición (de todas las propiedades css que especificamos y las que están por defecto)



#### Ejemplo
#### Sin transición -- El cambio se hace de forma instantánea

```html
 <div class="cuadrado"></div>
    <style>
       .cuadrado {
        width:200px;
        height:200px;
        background:red;
        margin:20px;
       }

       .cuadrado:hover {
        background:steelblue;
       }

```
#### Con transición
```html
   <div class="cuadrado"></div>
    <style>
       .cuadrado {
        width:200px;
        height:200px;
        background:red;
        margin:20px;
       }

       .cuadrado:hover {
        background:steelblue;
        transition: background 2s;
       }
    </style>

```
### Propiedad transition
- Esta propiedad se aplica al elemento que realiza la transición (se modifica la propiedad)
- La propiedad transition recibe dos valores:  El nombre de la propiedad que va a provocar la transición (La propiedad cuyo valor va a cambiar mediante el disparador) y el tiempo (en segundos) que se va a demorar en realizar la transición.

```css
Transition : propiedad segundos;
```

- La propiedad transition puede ir en el disparador  o en el item.


```html

 <div class="cuadrado"></div>
    <style>
       .cuadrado {
        width:200px;
        height:200px;
        background:red;
        margin:20px;
        transition: background 2s;
       }

       .cuadrado:hover {
        background:steelblue;
 
       }
    </style>

```

#### Especificar dos propiedades
- En lugar de usar una propiedad transition por cada propiedad:

```css
 transition: background 2s;
        transition: width 2s;

```
:::tip Observación
No se puede porque CSS funciona en cascada (se sobrescribe)
:::

- Para hacer que lo anterior funcione, tenes que separar por coma:

```css
    transition: background 2s , width 2s;
```

:::tip transition es un shorthand 
- transition es un shorthand de 4 propiedades:
  - Transition-property
  - Transition-duration
  - Transition-timing-function
  - Transition-delay
:::

### Propiedad transition-property 
- Especifica que propiedad va a provocar la transición.  Son los nombres de las propiedades cuyo valor va a cambiar a través del disparador
- Es la propiedad que va a sufrir una transición
- Es Obligatoria para una transición
- Cada propiedad la separas por una coma.
```css
  transition-property: background , width , height;
```
- O podes usar como valor , la palabra clave all que significa “Todas las propiedades”.
```css
transition-property: all;
```
:::warning NO UTILIZAR ALL
  No utilizar all , Ocupa muchos recursos
:::


:::tip
- Los nombres de propiedades NO DEBEN SER SHORTHAND 
- En los ejemplos anteriores debió usarse background-color en lugar de background.
- Usar un SHORTHAND afecta el rendimiento.
:::


### Propiedad transition-duration
- Define el tiempo (en segundos o milisegundos) que se va a demorar en realizar la transición.
- Define el tiempo que dura la transición.
```css
   transition-duration: 2s;
```

:::tip
- Con las propiedades transition-property y transition-duration  ya  podes crear  una transición.
- Con las dos propiedades , podés crear lo mismo que hicimos antes con la propiedad transition.


:::

:::tip
Por lo general , el disparador se le aplica al container y los estilos al hijo.
:::

### Propiedad transition-timing-function
- Es la curva del tiempo que va a tardar en realizar la animacion
- Define la aceleración o la curva de aceleración de la transición.
- Tiene los mismos valores que [animation-timing-function](#propiedad-animation-timing-function)

| Valor  | Aclaración   |
| - | - |
|  Linear |   |
|  Ease |   Por defecto|
|  Ease-in |   |
|  Ease-out |   |
|  Ease-in-out |   |
|  step-start |   |
|  step-end |   |
|  steps(int , start/end) |   |
|  initial |   |
|  inherit |  Es heredar el valor que tiene la caja que lo contiene(herencia)  |

:::tip
Todas tardan los mismo segundos en terminar pero realizan la transición de diferente formas.

:::


:::tip En la consola del navegador
- En el panel elementos , hace click en el elemento cuya propiedad se modifico (se realizo una transición)
- Busca la propiedad transition-timing-function y te permite modificar su valor (curva)


:::
### Propiedad transition-delay

- Define el retraso/delay que tiene la transición.
- Define lo que demora el disparador en activar la transición.
- Es para que no se muestre el cambio al instante y que exista un "delay"
- Su valor esta en segundos o milisegundos

```css
        transition-delay:1s;
```


## Transformaciones
#### Los 2 ejes
- Todos los elementos pueden moverse en dos ejes:
  - Eje X: Representa el movimiento horizontal (de izquierda a derecha y viceversa).
  - Eje Y: Representa el movimiento vertical (de arriba hacia abajo y viceversa).
#### Eje Z
- Cuando trabajamos en 3D, además de los ejes X e Y, aparece el eje Z.
- El eje Z representa la profundidad.
- Los valores altos acercan el elemento al usuario, mientras que los valores bajos lo alejan.
- Gracias al eje Z es posible crear efectos de profundidad (es decir, dar la sensación de que los objetos están a diferentes distancias del usuario) y hacer que los elementos parezcan más reales.
:::tip tip
- Puede resultar útil imaginar el eje Z como el movimiento de un objeto hacia ti o alejándose de ti.
:::
![Imagen de 3 ejes](https://previews.123rf.com/images/miraleks/miraleks2002/miraleks200200008/143011637-three-axis-coordinate-system-xyz-of-iron-nails-version-2-0.jpg)

###  Transformaciones 3D 
- Para trabajar con transformaciones 3D, hay dos propiedades importantes que debemos conocer.
#### Propiedad `transform-style`
- Indica si los elementos hijos se mostrarán en 2D o en 3D.
- Esta propiedad afecta a todos los elementos hijos.
- Por defecto su valor es `flat` es decir, trata a los elementos como elementos 2D.
- Para trabajar con elementos 3D, se utiliza el valor `preserve-3d`.


#### Propiedad ` transform-origin`
- Define el punto desde el cual se aplicará una transformación.
- Todas las transformaciones comienzan desde un punto (una coordenada definida por los ejes). Esta propiedad permite cambiar la posición de ese punto.
- Puede recibir de 1 a 3 valores:
  - El primer valor corresponde al eje X.
  - El segundo valor corresponde al eje Y.
  - El tercer valor corresponde al eje Z.
- También se pueden utilizar palabras clave:
  - `left` y `right` para el eje X.
  - `top` y `bottom` para el eje Y.
  - `center`: Se utiliza en el eje X y en el eje Y, representa el centro del elemento.
- El eje Z no admite palabras clave.




### Propiedad transform
- Te permite modificar (rotar, mover , inclinar , etc ) un elemento.
- Se puede trabajar con 2D Y 3D.

#### 2D
#### translate()
 - Mueve el objeto en el eje X y el  eje Y . 
 - Es un shorthand de :
     - translateX()  : Desplaza el elemento en el eje X
     - translateY() : Desplaza el elemento en el eje Y
- Si tiene dos parámetros , uno es el del eje X y el otro eje Y
- Si tiene un parámetro , representa ambos ejes.
#### rotate()
- Gira el objeto en el sentido de las agujas del reloj o en el sentido contrario (usando valores negativos).
- Se utiliza con valores en grados (`deg`), normalmente entre 0 y 360.
#### scale()
- Aumenta o Disminuye el tamaño del objeto.  
- Si el valor del parámetro es mayor a 1 , el tamaño aumenta, en caso contrario lo disminuye
```js
//scale(1) = Tamaño normal
//scale(0.5)  = Tiene la mitad del tamaño normal
//scale(2) =  El doble de grande
//Y asi
```
- Si tiene dos parámetros , uno es el eje X (ancho) y el otro eje Y (altura)
- Si es solo un parámetro , representa ambos ejes (ancho y altura)
- Es un shorthand de:
    - scaleX() : Se estira en el eje X
    - scaleY() : Se estira en el eje Y
#### skew()
- Permite inclinar o deformar un elemento.
- La deformación se hace usando ángulos en grados (`deg`) o radianes (`rad`).
- Los valores pueden ir normalmente de 0 a 360 (en grados).
- `skew()` puede recibir uno o dos parámetros:
  - El primer valor inclina el elemento hacia la izquierda o la derecha.
  - El segundo valor inclina el elemento hacia arriba o hacia abajo.  
- Si solo se usa un valor, se aplica en el eje horizontal.


:::tip
- Si quieres que un texto se adapte a un contenedor distorsionado, debes aplicar la misma propiedad pero con el valor en negativo.
- Esta propiedad solo inclina el elemento, pero no cambia su posición.
:::
#### matrix()
- Combina todos los métodos de transformación 2D en uno

#### Hay muchos mas!!!
#### 3D
#### rotateX() 
- Gira el objeto alrededor del eje X
#### rotateY()
- Gira el objeto alrededor del eje Y
#### rotateZ()
- Gira el objeto alrededor del eje Z
#### scale3D()
- Escala en los tres ejes (X , Y , Z)
#### Hay muchos mas!!!
:::tip 
[Generador](https://css-transform.moro.es/)
:::

:::tip
- Todos aceptan valores negativos y positivos.
:::

#### Ejemplo general
```html
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>user-select</title>

<style>
.contenedor {
  width: 200px;
  height: 200px;
  margin: 20px;
  perspective: 600px;

  display: inline-block;
}

.tarjeta {
  width: 100%;
  height: 100%;
  position: relative;
  transform: rotateY(45deg);
   border: 5px solid black;
}

/* Ejemplo 2D */
.contenedor-2d .tarjeta {
  transform-style: flat;
}

/* Ejemplo 3D */
.contenedor-3d .tarjeta {
  transform-style: preserve-3d;
   
}

.cara {
  width: 100%;
  height: 100%;
  position: absolute;
  display: grid;
  place-items: center;
  color: white;
}

.frente {
  background: steelblue;
}

.atras {
  background: tomato;
  transform: translateZ(50px);
}
</style>
</head>

<body>
<div class="contenedor contenedor-2d">
  <div class="tarjeta">
    <div class="cara frente">Frente</div>
    <div class="cara atras">Atrás</div>
  </div>
</div>

<div class="contenedor contenedor-3d">
  <div class="tarjeta">
    <div class="cara frente">Frente</div>
    <div class="cara atras">Atrás</div>
  </div>
</div>

</body>
</html>
```
:::tip Observacion
- Las transformaciones aplicadas a un elemento también afectan a sus elementos hijos. En este ejemplo, los dos `div` dentro de `.tarjeta` se transforman junto con su elemento padre.
- Para entender el eje Z, piensa en `z-index`: los elementos con valores más altos se muestran por encima de los que tienen valores más bajos.
:::

:::tip info
- [transform -  css tricks](https://css-tricks.com/almanac/properties/t/transform/)
- [CSS 2D Transforms](https://www.w3schools.com/css/css3_2dtransforms.asp)
- [CSS 3D Transforms](https://www.w3schools.com/css/css3_3dtransforms.asp)
- [transform  - developer mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- [CSS transform Property](https://www.w3schools.com/cssref/css3_pr_transform.php)
- [Transformaciones 3D](https://lenguajecss.com/css/transformaciones/transform-3d/)
:::

#### Otros ejemplos

```html
       <div class="box"></div>

       <style>
           .box {
            width:200px;
             height:200px;
             background:red;
             transition: transform 1s;
            
           }

           .box:hover {
            transform: translate(100px , 200px);
            transform:rotate(45deg);
            transform:scale(2);
            transform:skew(45deg);
            transform:matrix(0.7071067811865475, 0.7071067811865476, -0.7071067811865476, 0.7071067811865475, -0.7071067811865497, 34.648232278140824);
           }
       </style>

```

```html
     <div class="box"></div>

       <style>
           .box {
            width:200px;
             height:200px;
             background:red;
             transition: transform 1s;
            
           }

           .box:hover {
             transform: rotateX(180deg);
             transform: rotateY(180deg);
             transform: rotateZ(180deg);
           }
       </style>

```

:::tip
- La propiedad transform puede recibir varios valores:
```css
transform:scaleY(2) translate(30px);
```
:::





## Propiedad perspective
- Determina la distancia desde la que el usuario observa un elemento 3D.
- Define qué tan cerca o lejos parece estar el usuario del elemento.
- Cuanto menor sea el valor, más intenso será el efecto de profundidad.
- Cuanto mayor sea el valor, más suave será el efecto de profundidad.
- La perspectiva se aplica a los elementos hijos, no al elemento que tiene la propiedad.

:::tip
- Puedes imaginar `perspective` como la distancia desde la que observas una escena. Cuanto más cerca estés, más se nota la profundidad. Cuanto más lejos estés, menos se aprecia.
- La forma más sencilla de entenderlo es imaginar a una persona observando un objeto en el mundo real: si se acerca mucho, el objeto se ve grande y las deformaciones son más evidentes; si se aleja, el objeto se ve más pequeño y plano. 
- Esta propiedad suele aplicarse a un contenedor. El contenedor actúa como el observador y sus elementos hijos son los objetos observados. Por eso, el efecto se verá en los hijos y no en el contenedor.
:::


#### El papel del eje Z en la profundidad visual
- Cuando trabajamos con transformaciones 3D, entra en juego el eje Z.
- Los valores positivos acercan el elemento al usuario, mientras que los valores negativos lo alejan.
- La propiedad `perspective` determina qué tan exagerado o sutil será el efecto de profundidad.

#### Cómo funciona perspective en CSS
- La propiedad `perspective` no transforma el elemento en sí. En cambio, crea un espacio 3D compartido para que todos sus elementos hijos puedan mostrar profundidad.
- Cuando empecé a trabajar con efectos 3D, cometí el error típico de aplicar `perspective` directamente al elemento que rotaba. No fue hasta entender que debía colocarse en el padre cuando todo empezó a tener sentido.

#### Qué significan los valores pequeños y grandes
- Valores pequeños (por ejemplo, `200px`): El observador está muy cerca → efecto de profundidad intenso.
- Valores grandes (por ejemplo, `1200px`): El observador está lejos → efecto de profundidad más sutil y realista.
- Para comprender esta propiedad, imagina una persona observando un objeto en el mundo real. La propiedad `perspective` permite variar la distancia entre el observador y el objeto. En este caso, el objeto puede ser cualquier elemento HTML.

#### Por qué perspective se aplica al elemento padre
- Al definir `perspective` en un contenedor, todos sus elementos hijos se observarán desde el mismo punto de vista. Es decir, todos serán observados por el mismo observador, lo que ayuda a que la escena 3D parezca más realista.



#### Ejemplo

```html
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Perspective</title>

<style>
*{
  box-sizing: border-box;
}

body{
  font-family: Arial, sans-serif;
  display: flex;
  gap: 80px;
  justify-content: center;
  margin-top: 80px;
}

.escena{
  perspective: 200px; /* observador cerca */
}

.escena-lejos{
  perspective: 1200px; /* observador lejos */
}

.tarjeta{
  width: 150px;
  height: 150px;
  background: green;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotateY(45deg);
}

h3{
  text-align: center;
}
</style>
</head>

<body>

<div>
  <h3>Observador cerca</h3>

  <div class="escena">
    <div class="tarjeta">200px</div>
  </div>
</div>

<div>
  <h3>Observador lejos</h3>

  <div class="escena escena-lejos">
    <div class="tarjeta">1200px</div>
  </div>
</div>

</body>
</html>
```

:::tip Observación
- En `200px`, estamos bastante cerca de la tarjeta, por lo que la transformación se nota más y el efecto de profundidad es más intenso.
- En `1200px`, estamos más lejos de la tarjeta, por lo que la transformación se nota menos y el efecto de profundidad es más sutil.
:::


:::tip info
- [CSS perspective Property](https://www.w3schools.com/cssref/css3_pr_perspective.php)
- [perspective](https://css-tricks.com/almanac/properties/p/perspective/)
- [How CSS Perspective Works](https://css-tricks.com/how-css-perspective-works/)
- [perspective CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/perspective)
- [Perspectivas CSS](https://lenguajecss.com/css/transformaciones/perspective/)
- [La propiedad perspective (perspectiva) en CSS y ejemplos 3D reales](https://www.desarrollolibre.net/blog/css/entendiendo-la-propiedad-perspective-perspectiva-en-css)

:::

## Propiedad perspective-origin
- Como vimos antes, `perspective` define qué tan lejos está el observador del objeto. La propiedad `perspective-origin`, en cambio, permite modificar la posición o ubicación del observador; es decir, desde dónde se observa la escena (el punto de vista).
- Por defecto, `perspective-origin` se ubica en el centro del elemento (50% 50%). Es decir, el observador mira la escena desde el centro. Imagina que estás viendo una película en el cine y estás sentado en el medio de la sala.
- Puede tener uno o dos valores:
  - Si tiene dos valores, el primero corresponde al eje X y el segundo al eje Y.
  - Si tiene un solo valor, se aplica a ambos ejes.

#### Valores del eje X
- left (0%)
- center (50%)
- right (100%)
- También se pueden usar porcentajes

#### Valores del eje Y
- top (0%)
- center (50%)
- bottom (100%)
- También se pueden usar porcentajes
#### Ejemplo
```html
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Perspective Origin</title>

<style>
body{
  display:flex;
  gap:40px;
  justify-content:center;
  margin-top:80px;
  font-family:Arial;
}

.escena{
  width:180px;
  height:180px;
  perspective:600px;
  border:1px solid black;
}

.centro{
  perspective-origin: center;
}

.izquierda{
  perspective-origin: left;
}

.derecha{
  perspective-origin: right;
}

.tarjeta{
  width:100%;
  height:100%;
  background:orange;
  transform: rotateY(45deg);
  display:flex;
  justify-content:center;
  align-items:center;
  color:white;
}
</style>
</head>

<body>

<div>
  <h3>Left</h3>
  <div class="escena izquierda">
    <div class="tarjeta">left</div>
  </div>
</div>

<div>
  <h3>Center</h3>
  <div class="escena centro">
    <div class="tarjeta">center</div>
  </div>
</div>

<div>
  <h3>Right</h3>
  <div class="escena derecha">
    <div class="tarjeta">right</div>
  </div>
</div>

</body>
</html>
```

:::tip Observación
- Siguiendo la analogía del cine:
  - Con `left`, vemos la película (tarjeta) desde el lado izquierdo de la sala.
  - Con `center`, la vemos desde el centro.
  - Con `right`, la vemos desde el lado derecho.
:::



:::tip info
- [perspective-origin](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective-origin)
- [CSS perspective-origin Property](https://www.w3schools.com/cssref/css3_pr_perspective-origin.php)
:::



