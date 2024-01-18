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
## Propiedad transform
- Te permite modificar (rotar, mover , inclinar , etc ) un elemento.
- Se puede trabajar con 2D Y 3D.

### 2D
#### translate()
 - Mueve el objeto en el eje X y el  eje Y . 
 - Es un shorthand de :
     - translateX()  : Desplaza el elemento en el eje X
     - translateY() : Desplaza el elemento en el eje Y
- Si tiene dos parámetros , uno es el del eje X y el otro eje Y
- Si tiene un parámetro , representa ambos ejes.
#### rotate()
- Gira el objeto en el sentido de las agujas del reloj o en el sentido contrario a las agujas del reloj.
- Tipo de valor :   grado (deg ) que va entre 0 y 360.
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
- Te permite distorsionar un elemento usando los angulos creados entre sus lineas horizontales y verticales.
- Tipo de valor:   grado(deg), deg y rad.
- El valor puede ser entre 0 y 360 deg.
:::tip
Si desea que un texto se ajuste a un contenedor distorsionado, tenes que poner la misma propiedad (con su valor correspondiente), pero con su valor en negativo.
:::
#### matrix()
- Combina todos los métodos de transformación 2D en uno

#### Hay muchos mas!!!
### 3D
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
Todos aceptan valores negativos y positivos.
:::


:::tip info
- [transform -  css tricks](https://css-tricks.com/almanac/properties/t/transform/)
- [CSS 2D Transforms](https://www.w3schools.com/css/css3_2dtransforms.asp)
- [CSS 3D Transforms](https://www.w3schools.com/css/css3_3dtransforms.asp)
- [transform  - developer mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- [CSS transform Property](https://www.w3schools.com/cssref/css3_pr_transform.php)
:::

#### Ejemplos

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
- La propiedad transform puede recibir varios valores
```css
transform:scaleY(2) translate(30px);
```



:::

## Propiedad perspective
- Determina la distancia entre el plano z y el usuario para dar cierta perspectiva a un elemento 3D (con la propiedad [transform](#propiedad-transform))
- Define qué tan lejos está el objeto del usuario. Por lo tanto, un valor más bajo dará como resultado un efecto 3D más intenso que un valor más alto.
- La fuerza del efecto está determinada por el valor. Cuanto menor sea el valor, más cerca estará del plano Z (y por lo tanto más cerca del usuario) y más impresionante será el efecto visual. Cuanto mayor sea el valor, más sutil será el efecto.
- Son los elementos HIJOS los que obtienen la vista en perspectiva, NO el elemento en sí.


:::tip ¿Que es el eje Z?
 - Es lo que ordena la propiedad z-index.
 - Es la distancia entre el objeto y el “ojo humano”.
:::

#### Ejemplo

```html
<!DOCTYPE html>
<html>
<head>
  <title>CSS Perspective</title>
  <style>   
    #boxcont {
      background-color: orange;
      width: 200px;
      height: 200px;
      border: 1px solid black;
      margin: 70px;
      perspective: 200px;
    }
    #boxint {
      background-color: green;    
      width: 200px;
      height: 200px;
      border: 1px solid black;
      transform: perspective( 400px ) rotateY( 45deg );
    }
  </style>  
</head>
<body>    
  <div id="boxcont">
    <div id="boxint"></div>
  </div>
</body>
</html>

```

:::tip info
- [CSS perspective Property](https://www.w3schools.com/cssref/css3_pr_perspective.php)
- [perspective](https://css-tricks.com/almanac/properties/p/perspective/)
- [How CSS Perspective Works](https://css-tricks.com/how-css-perspective-works/)

:::

## Propiedad perspective-origin
- Define en que posición el usuario está mirando el elemento posicionado en [3D](#3d)
- Si contiene dos valores , uno es el Eje X y el otro el eje Y
- Si contiene un valor , es ambos Ejes.

#### Valores del eje X
- left (0 de longitud)
- center (50%)
- right (100%)
- Porcentaje
#### Valores del eje Y
- top (0 de longitud)
- center (50%)
- bottom (100%)
- Porcentaje

:::tip info
- [perspective-origin](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective-origin)
- [CSS perspective-origin Property](https://www.w3schools.com/cssref/css3_pr_perspective-origin.php)

:::

