---
sidebar_position: 12
---
# Animaciones

- En este apartado habra animaciones utilizando HTML , CSS Y JAVASCRIPT
- Se ubicara en la documentacion de CSS porque este es crucial para cualquier animación.


## Cubo girando
```html
<!DOCTYPE html>
<html lang="en-us">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
     
   <style>
   

     .box {
      width:100px;
      height:100px;
      background:yellow;
      animation: 4s linear infinite rodar;
    }

    @keyframes rodar {
      100% {
        transform:rotate(360deg);
      }
    }
   </style>
  </head>
  <body>
    <div class="box"></div>
  </body>
</html>
```
## Text Reveal

```html
<!DOCTYPE html>
<html lang="en-us">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />

    <style>
      body {
        background:#000
      }
      .title {
        color:#fff;
       text-transform: uppercase;
       line-height: 40px;
      }

      .title-content {
        display:block;
        opacity:0;
        animation: revealText .5s forwards;

      }
     .title-second {
      animation-delay: .175s;
     }
     .title-third {
      animation-delay: .25s;
     }  
     .title-fourth {
      animation-delay: .325s;
     }
      @keyframes revealText {
        from {
          transform: translateY(20px);
        } to {
           opacity:1;
           transform:none;
        }
      }
    </style>
  </head>
  <body>
    <h3 class="title">
      <span class="title-content">SHOOT</span>
      <span class="title-content title-second">YOUR SHOT</span
      ><span class="title-content title-third"> YOU WILL ALWAYS</span>
      <span class="title-content title-fourth">MISS IF YUOU DON´T</span>
    </h3>
  </body>
</html>
```
## Circulo sigue cursor
```html
<!DOCTYPE html>
<html lang="en-us">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />


     <style>
      body , html {
        margin:0;
        background-color: #000;
      }

      #circulo {
        position :absolute;
        border:2px solid #fff;
        width:60px;
        height:60px;
        transition: all .02s ease-in-out;
        border-radius: 50%;
      }
     </style>

    
  </head>
  <body>
    <span id="circulo"></span>
    <script>
      const circle = document.querySelector("#circulo");
      document.addEventListener('mousemove' , e => {
        const mouseX = e.pageX - 30;
        const mouseY = e.pageY - 30;
        circle.style = `transform: translate3d(${mouseX}px, ${mouseY}px , 0)`
    
      })
     </script>
  </body>
</html>

```
## Cargando
```html
  <body>
    <h2 style="text-align:center">CARGANDO....</h2>
     <div class="barra">
      <span class="progreso"></span>
     </div>

     <style>
      .barra {
        margin: 0 auto;
        height:20px;
        width:30%;
        background:gray;
        border-radius: 50px;
        overflow:hidden;
      }
      .progreso {
        display: block;
        width:0%;
        height:100%;
        border-radius:50px;
        background-image:linear-gradient(-45deg , yellow 25% , green 25% , green 25% , green 50% , yellow 50% , yellow 75% , green 75% , green);
        background-size: 50px 50px;
        animation: load 1s infinite linear;
      }

      @keyframes load {
        0% {
          background-position: 0 0;
        }
        100% {
          background-position: 50px 50px;
        }
      }


     </style>

     <script>
   
          setInterval(() => {
            const bar = document.getElementsByClassName("progreso")[0]
            const fondo = document.getElementsByClassName("barra")[0]
            bar.style.width = bar.clientWidth + 1 + "px";


            if ( bar.clientWidth > fondo.clientWidth) {
               bar.style.width = 1+"px";
            }
          } , 30)
     </script>
  </body>
```
## Redes Sociales Hover
```html
<!DOCTYPE html>
<html lang="en-us">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />


  
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  </head>
  <body>
    <ul>
      <li > <a href="#"> <i class="fa-brands fa-instagram instagram"></i></a></li>
      <li > <a href="#"> <i class="fa-brands fa-whatsapp whatsapp"></i></a></li>
      <li > <a href="#"> <i class="fa-brands fa-twitter twitter"></i></a></li>
    </ul>

   <style>
    ul {
      position:relative;
      display: flex;
    }
    ul li {
      position:relative;
      list-style: none;
      margin: 0 20px;
      cursor: pointer;
    }
    ul li a {
      text-decoration: none;
    }

    ul li a .fa-brands {
      font-size: 6em;
      color:#222;
    }

    ul li::before {
      font-family:'FontAwesome';
      position:absolute;
      top:0;
      left:0;
      font-size:6em;
      height: 0;
      overflow:hidden;
      transition: 0.5s ease-in-out;
    }

    ul li:nth-child(1)::before {
      content:"\f16d";
      background-image : linear-gradient(45deg , #f09433 0% , #e6683c 25% , #dc2743 50% 
      , #cc2366 75% , #bc1888 100%);
      -webkit-background-clip:text;
      -webkit-text-fill-color : transparent;
      border-bottom: 4px solid #dc2743;
    }
  
    ul li:nth-child(2)::before {
      content:"\f232";
      color:#25D366;
      border-bottom:4px solid #25D366;
    }

    ul li:nth-child(3)::before {
      content:"\f099";
      color: #1da1f2;
      border-bottom:4px solid #1da1f2;
    }
    ul li:hover::before {
      height:100%;
    }
   </style>


  </body>
</html>
```
## Texto Neon
```html
   <style>
      body {
        background: #000;
        font-size: 30px;
      }
      .text {
        color: white;
        font-family: "Press Start 2P", cursive;
        animation: neonEffect 5s infinite;
      }

      @keyframes neonEffect {
        0%,
        35% {
          text-shadow: white 0 0 12px, #effd6d 0 0 24px, #effd6d 0 0 36px;
        }
        40% {
          text-shadow: none;
        }
        45% {
          text-shadow: white 0 0 12px, #effd6d 0 0 24px, #effd6d 0 0 36px;
        }
        60% {
          text-shadow: none;
        }
        65%,
        100% {
          text-shadow: white 0 0 12px, #effd6d 0 0 24px, #effd6d 0 0 36px;
        }
      }
    </style>
    <p class="text">Efecto Neón</p>
```
## Efecto Glitch
```html
  <body>
    <h2>Efecto Glitch</h2>
    <style>
      h2 {
        text-align: center;
        margin: 0;
        font-size: 100px;
        font-family: lato;
        animation: glitch infinite 3s;
      }

      @keyframes glitch {
        0% {
          text-shadow: #b4cf06 0px 0px, #0d22da 0px 0px;
        }
        50% {
          text-shadow: #ff0000 -8px 0px, #60ffff 8px 0px;
        }
        100% {
          text-shadow: #b4cf06 0px 0px, #0d22da 0px 0px;
        }
      }
    </style>
  </body>
```
## Gradient Border Animation
```html
<body>
   <figure class="card">
       <figcaption>
         You Spin my head right round , right round...
       </figcaption>
   </figure>
   <style>
    .card {
      width:200px;
      height:250px;
      background-color:#151515;
      border: 5px solid;
      border-image: linear-gradient(
        #ff512f , #dd2476 , #1c64ff) 1;
      animation: rotate 2.5s ease-in infinite;
    }

    @keyframes rotate {
      50% {
        border-image: linear-gradient(
          360deg , #ff512f , #dd2476 , #1c64ff
        ) 1;
      }
    }
   </style>
  </body>
```
## Wave
```html
  <body>
    <div class="wave">
       <span style="--item:1">C</span>
       <span style="--item:2">O</span>
       <span style="--item:3">D</span>
       <span style="--item:4">I</span>
       <span style="--item:5">N</span>
       <span style="--item:6">G</span>
    </div>
    <style>
      body {
        background:#000;
      }
      .wave {
        font-size:60px;
        color:white;
        -webkit-box-reflect : below -20px 
        linear-gradient(transparent , rgba(0,0,0,0.2));
      }
      .wave span {
        font-family: "Alfa Slab One" , cursive;
        display:inline-block;
        animation: wave 1s infinite;
        animation-delay: calc(0.1s * var(--item));
      }


      @keyframes wave {
        0% {
          transform: translateY(0);
        }
        20% {
          transform:translateY(-20px);
        }
        40% , 100% {
          transform: translateY(0);
        }
      }
    </style>
  </body>
```
## Texto con video
```html
  <body>
     <video src="video.mp4" autoplay loop muted preload></video>
     <h1>Sunset</h1>

     <style>
  
      video , h1 {
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        margin:0;
      }

      video {
        object-fit:cover;
      }

      h1 {
        font-size:150px;
        font-family:inter;
        font-weight:900;
        line-height:100vh;
text-align:center;
background:white;
 mix-blend-mode:screen;
      }
     </style>
  </body>
```
## Scroll
#### Forma #01
```html
<body>
   <h1>Titulo</h1>
   <div style="height:3000px;">
    <a href="#parrafo">Ir al parrafo</a>
  <p style="position:absolute;top:3000px;" id="parrafo">Parrafo</p></div>
  <style>
     html {
      scroll-behavior: smooth;
     }
  </style>
</body>
```
:::tip 
- href="#valor-del-atributo-id"
- El valor del atributo id debe ser el valor del atributo href (añadiendole el # al comienzo)
:::
#### Forma #02
```html
<body>
   <h1>Titulo</h1>
   <div style="height:3000px;">
    <button>Ir al parrafo</button>
  <p style="position:absolute;top:3000px;" id="parrafo">Parrafo</p></div>

  <script>
    const button = document.querySelector('button');
    button.addEventListener('click' , () => {
      scrollTo({
        top:3000 ,
        behavior:'smooth'
      })
    })
    </script>

</body>
```
:::tip 
- En el propiedad top  del objeto que se le pasa a la funcion scrollTo() , indicas cuanto para abajo en px deslizas en el viewport
:::
#### Forma #03
```html
<body>
   <h1>Titulo</h1>
   <div style="height:3000px;">
    <button>Ir al parrafo</button>
  <p style="position:absolute;top:3000px;" id="parrafo">Parrafo</p></div>

  <script>
    const button = document.querySelector('button');
    const parrafo = document.querySelector('p');
    button.addEventListener('click' , () => {
         parrafo.scrollIntoView({
            behavior : 'smooth'
         })
    })
    </script>

</body>
```
:::tip
 - Con el metodo scrollIntoView() accedemos al elemento en el viewport
:::

## Maquina de escribir
```html
<body>
  <span>¡Hola Mundo!</span>
   <style>
    span {
display: block;
font-family:monospace;
white-space: nowrap;
border-right: 4px solid;
/* La cantidad de caracteres (restando los espacios en blanco) */
width: 12ch;
/* steps(cantidad de caracteres) */
animation: typing 2s steps(12),
blink .5s infinite step-end alternate;
overflow: hidden;
    }
@keyframes typing {
  from { width: 0 }
}


@keyframes blink {
50% { border-color: transparent }

} 
   </style>
</body>
```
## Menu movil
```html
<body>
  <button>
    <div></div>
    <div></div>
    <div></div>
  </button>
  <style>
    button {

      display: flex;
      flex-direction: column;
      width: 3rem;
      height: 3rem;
      border: 0;
      background: transparent;
      gap: .65rem;
    }

    button>div {

      background: black;
      height: 2px;
      width: 100%;
      border-radius: 5px;
      transition: all .5s;
      transform-origin: left;
    }

button:hover div:first-child {
 transform:rotate(45deg);
}
button:hover div:nth-child(2){
   opacity:0;
}
button:hover div:last-child {
  transform:rotate(-45deg);
}

  </style>


</body>
```
## Neon
```html
<body>
  <div class="caja">
  </div>
  <style>
     * {
       margin:0;
       padding:0;
       background-color:#000;
     }

     .caja {
      width:50px;
      height:50px;
      padding:50px;
      margin:140px;
      box-shadow: 4px 4px 8px 4px red;
      border-radius:5px;
      animation: neon 3s ease infinite;
     }

     @keyframes neon {
        50% {
          box-shadow: 4px 4px 8px blue;
        }
     }
  </style>
</body>
```
## Hover boton
```html
<body>
   <a href="" class="btn btn-slide">Hola mundo</a>

   <style>
    .btn {
      background:none;
      border:2px solid;
      padding:1em 2em;
      transition:0.35s;
      text-decoration: none;
    }
    .btn-slide {
      color:#07ffbf;
      font-weight:bold;
    }

    .btn-slide:hover , .btnslide:focus {
      border-color: #07ffbf;
      color:#000;
      box-shadow:inset 10em 0 0 0 #07ffb7;
    }
   </style>
</body>
```
## Boton animado Sombra
```html
<body>
  <div class="button-container">
    <button class="btn-animated">
       <span>Haz click</span>
       <div class="btn-shadow"></div>
    </button>
  </div>
  
  <style>
   .button-container {
    width:500px;
    height:500px;
    background-color:#f3f9ff;
    margin:auto;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:-2;
   }

   .btn-shadow {
    background-color:#0c6dff;
    border:none;
    width:80%;
    height:25px;
    border-radius:0.5rem;
    outline:none;
    position:absolute;
    left:25px;
    bottom:0;
    filter: blur(15px);
    z-index: -2;
    opacity:0;
    transition: all ease-in-out 0.2s;
   }

   .btn-animated {
    background-color:#0c6dff;
    border:none;
    padding: 1rem 3rem;
    border-radius: 0.5rem;
    outline:none;
    position:relative;
    z-index:0;
    transition: all ease-in-out 0.2;
   }

   .btn-animated:hover {
    cursor:pointer;
    transform:scale(1.05);
   }

   .btn-animated:hover .btn-shadow {
     opacity:1;
   }

   .btn-animated span {
    color:white;
    font-family:'Poppins' , sans-serif;
    font-size:1.2rem;
   }
  </style>
</body>
```
## Loading bolitas
```html
<body>
  <div class="loader">
    <div class="ball"></div>
    <div class="ball"></div>
    <div class="ball"></div>
    <span>Cargando...</span>
  </div>
  
  <style>
     .loader {
      width:120px;
      height:75px;
      display:flex;
      flex-wrap:wrap;
      align-items:flex-end;
      justify-content:space-between
     }

     .loader span {
      font-size:18px;
      text-transform: uppercase;
      color:#000
     }

     .ball {
      width:25px;
      height:25px;
      border-radius:50%;
      background-color:#000;
      animation: bounce .5s alternate infinite;
     }

     .ball:nth-child(2) {
      animation-delay: .15s;
     }
     .ball:nth-child(3) {
      animation-delay: .31s;
     }

     @keyframes bounce {
      from {
        transform:scaleX(1.25)
      }
      to {
        transform:translateY(-50px) scaleX(1)
      }
     }
  </style>
</body>
```
## Spinner de carga
```html
<body>
   <div class="spinner"></div>
  
  <style>
    body {
      background:black;
    }
    .spinner {
      width:100px;
      height:100px;
      border-radius:50%;
      background: conic-gradient(#000 10% , #8f44fd);
      -webkit-mask:radial-gradient(farthest-side , #0000 calc(100% - 10px) , #000 0);
      animation:spin 0.8s infinite linear;
    }

    @keyframes spin {
      to {
        transform:rotate(1turn);
      }
    }
  </style>
</body>
```
## Efecto checkbox
```html
<body>
    <form action="" class="form">

      <div class="form__inputs">
         <input type="radio" name="frutas" id="apple" class="form__input">
         <label for="apple" class="form__label">Manzana</label>
      </div>

      <div class="form__inputs">
        <input type="radio" name="frutas" id="fresa" class="form__input">
        <label for="fresa" class="form__label">Fresa</label>
     </div>
    </form>
  
  <style>
     .form {
      padding:30px;
      display:grid;
      grid-auto-flow:column;
      grid-auto-columns:max-content;
      gap:1em;
     }


     .form__inputs {
      border:1px solid #5e0674;
      border-radius:.4em;
      padding: .7em 4em .7em 1em;
      display:flex;
      align-items: center;
      gap:1em;
     }

     .form__input {
       appearance: none;
       width:14px;
       height:14px;
       border:1px solid #5e0674;
       border-radius:50%;
       display:flex;
       --scale: scale(0);

     }
     .form__input::before {
      content:"";
      margin:auto;
      display:block;
      width:70%;
      height:70%;
      /* background-color:#5e0674; */
      background-color:red;
      border-radius:50%;
      transition:transform .3s;
      transform: var(--scale);
     }

     .form__label {
        color:#5e0674;
     }

     .form__input:checked {
      animation: shadow .3s;
      --scale: scale(1);
     }

     @keyframes shadow {
      50% {
        box-shadow: 0 0 14px #5e0674;
      }
     }
  </style>
</body>
```
## Animation con Lottie
```html
<!DOCTYPE html>
<html lang="en-us">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.9.6/lottie.min.js" integrity="sha512-yAr4fN9WZH6hESbOwoFZGtSgOP+LSZbs/JeoDr02pOX4yUFfI++qC9YwIQXIGffhnzliykJtdWTV/v3PxSz8aw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</head>

<body>
   <button> ANIMACION LOTIE
    <div class="svg"></div>

   </button>

  
  <style>
     body {
      height:100vh;
      display:flex;
      justify-content:center;
      align-items:center;
     }

     button {
      background-color:blue;
      color:white;
      border:0;
      border-radius:20px;
      padding:10px 20px;
      letter-spacing:0.1rem;
      font-weight:bold;
      position:relative;
     }

     .svg {
      position:absolute;
      width:200px;
      top:-85px;
      left:-10px;
     }
  </style>
  <script>
    const button = document.querySelector('button');
    const svgContainer = document.querySelector('.svg');
    const animation = bodymovin.loadAnimation({
      wrapper:svgContainer,
      animType:'svg',
      loop:false,
      autoplay:false,
      path:"https://assets9.lottiefiles.com/packages/lf20_WAdJ6ecbKE.json"
    })
    button.addEventListener('click' , () => {
      animation.goToAndPlay(0,true);
    })
  </script>
</body>

</html>
```
:::tip
Se utiliza la URL: Lottie Animation URL
:::
## Boton hover #2
```html
<body>
    <button>
       <span>Sujeto Fede</span>
    </button>
  <style>
    button {
      padding:18px 30px;
      border:none;
      position:relative;
      cursor:pointer;
      box-sizing:border-box;
      overflow:hidden;
      background:#3f3f3f;
      border-radius:5px;
      min-width:200px;
      color:#fff;
      z-index:0;
      text-transform:uppercase;
      letter-spacing:2px;
      transition: all 0.3s;
      font-weight:600;
    }
    button::before {
      content:"";
      position:absolute;
      display: block;
      top:0;
      left:-50px;
      width:70%;
      height:100%;
      background:linear-gradient(90deg , transparent , #ffffff75 , transparent);
      transition:all 1s;
      z-index: -1;
      transform: translateX(-120px) skew(-20deg);
    }

    button:hover::before {
      transform:translateX(300px) skew(-20deg);
    }
    button:hover {
      background:#00f7ff;
    }
  </style>
  
</body>
```
