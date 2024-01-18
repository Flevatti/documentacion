---
sidebar_position: 13
---
# Animaciones #2

## Hover en imagenes
```html
<body>
    <section class="gallery">
      <div class="gallery__img"></div>
      <div class="gallery__img"></div>
      <div class="gallery__img"></div>
    </section>
  <style>
    .gallery {
      height:600px;
      width:95%;
      margin:40px auto;
      display: flex;
    }
    .gallery__img {
      width:80px;
      height:100%;
      background-size: cover;
      background-position: center;
      transition: flex .5s;
      flex:1;
      display: grid;
      --message: "Ingresa aqui...";
      --clip: circle(0 at center);
      --transition: clip-path .2s;
    }

    .gallery__img::before {
      content:var(--message);
      display: grid;
      place-items:center;
      background-color:#1d1d1e48;
      font-family:Arial;
      font-size:2rem;
      color:#fff;
      clip-path: var(--clip);
      transition: var(--transition);
    }
    .gallery__img:hover {
      flex:6;
      --clip: circle(180% at center);
      --transition: clip-path .4s .5s;
    }

        .gallery__img:nth-child(1){
          background-image:url('./fondo.webp');
        }
        .gallery__img:nth-child(2){
          background-image:url('./fondo2.webp');
        }
        .gallery__img:nth-child(3){
          background-image:url('./fondo3.jpg');
        }
  </style>
  
</body>
```
## Loading Circulo
```html
<body>
  <div class="loader">

  </div>
  <style>
     .loader {
      border:40px solid #f3f3f3;
      border-top: 40px solid #3498db;
      border-radius:50%;
      width:120px;
      height:120px;
      animation:spin 2s linear infinite;
     }

     @keyframes spin {
      0% {
        transform:rotate(0deg);
      }
      100% {
        transform:rotate(360deg);
      }
     }
  </style>
  
</body>
```