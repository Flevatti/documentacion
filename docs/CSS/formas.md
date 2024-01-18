---
sidebar_position: 14
---

# Formas
## Luna
```html
<!DOCTYPE html>
<html lang="en-us">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />

    <style>
      div {
        width:80px;
        height:80px;
        box-shadow: 15PX 15PX 0 0 #FFDE59;
        border-radius:50%;

      }
    </style>
  </head>
  <body>
     <div></div>
  </body>
</html>
```
## Triangulo
```html
<!DOCTYPE html>
<html lang="en-us">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />

    <style>
      div {
      border-top:50px solid transparent;
      border-left:100px solid #32557f;
      border-bottom:50px solid transparent;
      }
    </style>
  </head>
  <body>
     <div></div>
  </body>
</html>
```
## Cuadrado a rayas
```html
 <body>
    <style>
      div {
        width:200px;
        height:200px;
        background-image: repeating-linear-gradient(
          -40deg,
          #c8afe9 0px,
          #c8afe9 20px,
          #ffcfe5 20px,
          #ffcfe5 40px
        )

        
      }
    </style>
    <div>

    </div>
  </body>
```
## Fondo transparente
```html
<!DOCTYPE html>
<html lang="en-us">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
  </head>
  <body>
    <div class="container">
      <p style="padding:20px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit aliquam maxime, autem non architecto reprehenderit hic. Officia deleniti temporibus voluptate, exercitationem deserunt dignissimos, modi quibusdam vero laudantium eos obcaecati.</p>
    </div>
       <style>
       body {
  background: url(https://images.unsplash.com/photo-1544306094-e2dcf9479da3) no-repeat;
  background-size: cover;
  display: grid;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.container {
  width: 30rem;
  height: 20rem;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2); 
  border-radius: 5px;
  background-color: rgba(255, 255, 255, .15);
  backdrop-filter: blur(5px);
}
       </style>
  </body>
</html>
```
## Circulos
```html
<body>
  <section class="avatars">
    <img src="https://unavatar.io/midudev" alt="">
    <img src="https://unavatar.io/midudev" alt="">
    <img src="https://unavatar.io/ElLauchaOkey" alt="">
    <img src="https://unavatar.io/s4vitar" alt="">
    <img src="https://unavatar.io/s4vitar" alt="">

  </section>
   <style>
    .avatars {
      display:flex;
      padding-left:2rem;

    }
    .avatars img {
      width : 120px;
      height:120px;
      border-radius:100%;
      border: 4px solid #444;
      margin: 0 0 0 -2rem;
    }
   </style>
</body>
```

## Layout responsive
```html
<body>
  <header>header</header>
  <nav>nav</nav>
  <aside>aside</aside>
  <section>
    <article>article</article>
    <article>article</article>
    <article>article</article>
  </section>
   <footer>footer</footer>
   <style>
      body {
      display:grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows:repeat(12,1fr);
      height:98vw;
      gap:10px;
      font-family:Arial , Helvetica , sans-serif;
      font-size:20px;
    }
    header {
      background-color:#01befe;
      grid-column:1/-1;
      display:grid;
      place-content:center;
    } 
    nav {
      background-color:#ff006d;
      grid-column:1/-1;
      display:grid;
      place-content:center;
    } 
      aside {
      background-color:#adff02;
      grid-row:3/12;
      display:grid;
      place-content:center;
    }  
     section {
      background-color:#ff7d00;
      grid-row:3/12;
      display:flex;
      flex-direction: column;
     padding:10px;
     gap:10px;
    }
    article {
      background-color:#ffdd00;
      height:100%;
      display:grid;
      place-content:center;
    }
    footer {
      background-color:#8f0fff;
      grid-column:1/-1;
      display:grid;
      place-content:center;
    }
    
  
   </style>
</body>
```
## Logo netflix
```html
<body>
  <div class="netflix"></div>
  <style>
    body {
      display: flex;
      align-items: center;
      height: 100vh;
      margin: 0;
      background: black;
    }
    .netflix {
width:140px;
height: 250px;
position:relative;
margin-left:50%;
transform: translatex(-50%);
background:linear-gradient(90deg , #b1060e 0px, #b1060e 5px , 
transparent 50px , transparent 90px , #b1060e 90px , #b1060e 140px );
    }

    .netflix::before , .netflix::after {
      content:"";
      display:block;
      position:absolute;

    }
    .netflix::before {
          width:50px;
          height:250px;
          top:0;
          left:45px;
          background-color:#e50914;
          transform:skewX(19.6deg);
          box-shadow:0 0 30px black

    }

    .netflix::after {
      width:190px;
      height:25px;
      top:245px;
      left:-25px;
      border-radius:50%;
      background-color:black;
    }
  </style>
</body>
```
## Flecha
```html
<body>
  <p><span>INICIO</span></p>
   <style>
    p {
    background:rgb(203 , 49 , 241);
    color:white;
    height:50px;
    width:100px;
    margin-left:20px;
    margin-top:55px;
    position:relative;
    }
    p::before {
      border-top: 25px solid transparent;
      border-bottom:25px solid transparent;
      border-left:30px solid rgb(203 , 49 , 241);
      content:"";
      left:100px;
     position:absolute;
    }
    span {
      display:table-cell;
      line-height:25px;
      padding:10px;
    }
   </style>
</body>
```
## Formas de centrar
```html
  <div class="container">
    <div class="child"></div>
  </div>
```
#### Forma #01

```css
  .container  {
      margin:50px;
      width:250px;
      height:250px;
      background-color:royalblue;
/* Centramos*/
      display:flex;
      justify-content:center;
      align-items:center;
    }

    .child {
      width:100px;
      height:100px;
      background:tomato;
    }
```
#### Forma #02
```css
 .container  {
      margin:50px;
      width:250px;
      height:250px;
      background-color:royalblue;
/* Centramos*/
      display:flex;
 
    }

    .child {
      width:100px;
      height:100px;
      background:tomato;
      /* Centramos*/
      margin:auto;
    }
```
#### Forma #03
```css
 .container  {
      margin:50px;
      width:250px;
      height:250px;
      background-color:royalblue;
/* Centramos*/
      display:grid;
 
    }

    .child {
      width:100px;
      height:100px;
      background:tomato;
      /* Centramos*/
      margin:auto;
    }
```
#### Forma #04
```css
    .container  {
      margin:50px;
      width:250px;
      height:250px;
      background-color:royalblue;
/* Centramos*/
      display:grid;
      place-items:center;
 
    }

    .child {
      width:100px;
      height:100px;
      background:tomato;

    }
```
#### Forma #05
```css
    .container  {
      margin:50px;
      width:250px;
      height:250px;
      background-color:royalblue;
/* Centramos*/
      display:grid;
     
 
    }

    .child {
      width:100px;
      height:100px;
      background:tomato;
      /*Centramos*/
    place-self:center;
    }
```
#### Forma #06
```css
   .container  {
      margin:50px;
      width:250px;
      height:250px;
      background-color:royalblue;
/* Centramos*/
      position:relative;
     
 
    }

    .child {
      width:100px;
      height:100px;
      background:tomato;
      /* Centramos*/
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50% , -50%);
    }
```
#### Forma #07
```css
    .container  {
      margin:50px;
      width:250px;
      height:250px;
      background-color:royalblue;
/* Centramos*/
      position:relative;
     
 
    }

    .child {
      width:100px;
      height:100px;
      background:tomato;
      /* Centramos*/
    position:absolute;
    inset:0;
    margin:auto;
    }
```

:::tip Imagenes
- [5 Ways to Center a Div in CSS](../../static/img/FeYUGh6VQAAOcWp.jpg)
:::
## Corona
```html
<body>
    <div class="corona">
       <div class="picos"></div>
       <div class="base"></div>
       <div class="circulos"></div>
    </div>
  <style>
    * {
      padding:0;
      margin:0;
      box-sizing:border-box;
    }
     .corona {
      margin:80px;
      border-top: 160px solid #ebbb30;
      border-left:25px solid transparent;
      border-right:25px solid transparent;
      position:relative;
      width:270px;
     }
     .picos {
      position:absolute;
      width:90px;
      height:150px;
      border-radius:50%;
      background-color:#fff;
      color:#fff;
      top:-240px;
      left:-25px;
      box-shadow: 90px 0 , 180px 0;

     }
     .base {
      position:absolute;
      width:100%;
      height:15px;
      background-color:#EBBB30;
      bottom:-25px;
     }

     .circulos {
      position:absolute;
      top:-150px;
      left:-30px;
      background-color:#ebbb30;
      width:20px;
      height:20px;
      border-radius: 50%;
      box-shadow: 85px -17px , 175px -17px , 260px 0;
      color:#ebbb30;
     }
  </style>
  
</body>
```


## Texto en dos líneas

#### ¿Cómo usar CSS para que el texto solo aparezca en dos líneas como máximo?

```html
<body>
  <style>
    p {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      display: box;
      line-clamp: 2; /* numero de linea a mostrar */
      box-orient: vertical;
    }
  </style>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis
        iste dolorem deleniti similique obcaecati, repellat officiis. Rerum,
        excepturi? Doloribus voluptas aspernatur aut voluptatibus sit, alias
        tempora repellat voluptate expedita dolorum aliquam quis consequuntur
        maiores facere. Praesentium veniam eum numquam cumque soluta quia facilis
        iste! Asperiores, fugit. Fuga doloribus optio doloremque eius velit
        accusamus unde perspiciatis deleniti quos ea sit eligendi, harum delectus
        reprehenderit perferendis blanditiis impedit cum voluptatum assumenda.
        Unde, quo ad. Repellendus voluptates odio eligendi hic molestias nostrum
        saepe impedit numquam deleniti? Ut voluptas saepe, eveniet repellendus
        illum, cupiditate possimus expedita, minima omnis corporis dolorum quae
        minus rerum maiores?similique obcaecati, repellat officiis. Rerum,
        excepturi? Doloribus voluptas aspernatur aut voluptatibus sit, alias
        tempora repellat voluptate expedita dolorum aliquam quis consequuntur
        maiores facere. Praesentium veniam eum numquam cumque soluta quia facilis
        iste! Asperiores, fugit. Fuga dolorsimilique obcaecati, repellat officiis.
        Rerum, excepturi? Doloribus voluptas aspernatur aut voluptatibus sit,
        alias tempora repellat voluptate expedita dolorum aliquam quis
        consequuntur maiores facere. Praesentium veniam eum numquam cumque soluta
        quia facilis iste! Asperiores, fugit. Fuga dolor
      </p>
</body>

```

