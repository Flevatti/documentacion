# Herramientas
## Consola de Linux 
- [WSL2](https://www.courseit.com.ar/articulo/que-es-wsl2-y-como-instalarlo-en-windows-10-ccvtqakuz)
## Librerias CSS
- [Materialize](https://materializecss.com)
- [Tailwind](https://tailwindcss.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Pattern css](https://bansal.io/pattern-css)
- [Animate](https://animate.style/)
- [Hamburgers](https://jonsuh.com/hamburgers/)
- [Animista](https://animista.net/)
- [primeFaces](https://www.primefaces.org/primeflex/)
## Librerias JS
- [Socket](https://socket.io/)
- [AnimeJS](https://animejs.com/)
- [HammerJS](https://hammerjs.github.io/)
- [ChartJS](https://hammerjs.github.io/)
- [Sweet Alert 2](https://sweetalert2.github.io/)
- [Lax](https://github.com/alexfoxy/lax.js)
- [Particle](https://vincentgarreau.com/particles.js/)
## Herramientas CSS
 - [Tailwind components](https://tailwindcomponents.com)
 - [PurgeCSS](https://purgecss.com/)
## Herramienta de diseño
- [Mejores practicas](https://www.checklist.design/)
- [HTML5 Plantillas](https://html5up.net/)
- [HTMLREV Plantillas](https://htmlrev.com/)
- [HTML template](https://htmltemplates.co/)
- [Animaciones Editable](https://jitter.video/gallery/)
- [Lottie](https://lottiefiles.com/)
- [Figma](https://www.figma.com)
- [CodeMyUI](https://codemyui.com)
- [Shortcuts design](https://shortcuts.design)
- [Goodux](https://goodux.appcues.com)
- [UI Guideline](https://www.uiguideline.com/components) 
- [Fondos css](https://www.svgbackgrounds.com/)
- [Crear diseños de post](https://poet.so/)
- [Diferentes loaders](https://cssloaders.github.io/)
- [Elementos para interfaces de usuario](https://uiverse.io/)
- [Devtooly](https://devtooly.com/)
- [freefrontend](https://freefrontend.com/)
- [Spline Design](https://spline.design/)
- [CallToIdea](https://www.calltoidea.com/)
- [Prime faces](https://www.primefaces.org/)
### Fuentes de texto
- [Google font](https://fonts.google.com)
- [Dafont](https://www.dafont.com/es/)
- [Font squirrel](https://www.fontsquirrel.com)
- [Font Space](https://www.fontspace.com)
- [Cufo fonts](https://www.cufonfonts.com)
- [Font bundles](https://fontbundles.net)
- [Urba fonts](https://www.urbanfonts.com)
- [Font fabric](https://www.fontfabric.com)
- [What The Font](https://www.myfonts.com/pages/whatthefont)
- [Font pair](https://www.fontpair.co/)
- [Type scale](https://type-scale.com/ )
##  Tutoriales CSS/JS/HTML
- [Video animación Bordes](https://www.youtube.com/watch?v=Y1tPMuqi9tE)
- [Scrolling Card](https://webdesign.tutsplus.com/tutorials/horizontal-scrolling-card-ui-flexbox-and-css-grid--cms-41922)

### Intersection Observer Scrolling Effects 
- Use IntersectionObserver (IO) con un umbral bajo y propiedades personalizadas para potenciar las animaciones.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <style>
      @import 'https://unpkg.com/open-props/open-props.min.css';
@import 'https://unpkg.com/open-props/normalize.min.css';
@import 'https://rodydavis.github.io/material-design-lite/css/mdl.css';

@import 'https://unpkg.com/open-props/open-props.min.css';
@import 'https://unpkg.com/open-props/normalize.min.css';
@import 'https://rodydavis.github.io/material-design-lite/css/mdl.css';

*,
*:after,
*:before {
  box-sizing: border-box;
}

body {
  display: flex;
  align-items: center;
  justify-content:center;
  flex-wrap: wrap;
  gap: var(--size-4);
  place-items: center;
  min-height: 100vh;
  background: var(--surface-2);
  font-family: 'Google Sans', sans-serif, system-ui;
}

ul {
  border-radius: var(--md-sys-shape-medium);
  width: 50vmin;
  min-width: 300px;
  aspect-ratio: 4 / 6;
  background: var(--gray-0);
  display: grid;
  padding: 0;
  margin: 0;
  padding: var(--size-4);
  gap: var(--size-4);
  grid-template-columns: repeat(4, 1fr);
  overflow: auto;
  list-style-type: none;
  transition: all 0.5s var(--ease-elastic-2);
}

.card.elevated {
  padding: 0;
  margin: 0;
  background-color: var(--blue-2);
  min-width: 0;
  transition: all 0.5s var(--ease-elastic-2);
}

.card .actions {
  display: grid;
  flex-direction: column;
  grid-template-columns: auto auto;
  gap: var(--size-2) var(--size-4);
}

.controls.card.elevated {
  background-color: var(--md-sys-color-surface);
}

.grid .card {
  aspect-ratio: 1;
  transform: scale(calc(0.25 + (var(--shown, 1) * 0.75)));
}

.zipper .card {
  --distance: 250%;
  aspect-ratio: 1;
  transform: translateX(
    calc(
      (var(--distance) * -1) + (var(--shown, 1) * var(--distance))
    )
  )  scale(calc(0.25 + (var(--shown, 1) * 0.75)));
}

.zipper li:is(:nth-of-type(4n),:nth-of-type(4n + 3):nth-child(n)) .card {
  --distance: -250%;
  transition: all 0.5s var(--ease-elastic-1);
}

.rotater .card {
  aspect-ratio: 1;
  transform: rotate(calc(
    ((var(--rotation, 0) * -1) + (var(--shown, 1) * var(--rotation, 0))) * 1deg
  )) scale(calc(0.25 + (var(--shown, 1) * 0.75)));
}

.rotater li:nth-of-type(n) .card {
  --rotation: -270;
  /*background: red;*/
}

.rotater li:nth-of-type(2n) .card {
  --rotation: -180;
  /*background: green;*/
}
.rotater li:nth-of-type(4n + 3):nth-child(n) .card {
  --rotation: 180;
  /*background: orange;*/
}
.rotater li:nth-of-type(n):nth-child(4n) .card {
  --rotation: 270;
  /*background: purple;*/
}

li {
  padding: 0;
}

.list li {
  min-height: 40px;
  height: 8vmin;
  grid-column: 1 / -1;
}

.list .card {
  height: 100%;
  transform: scaleX(calc(0.25 + (var(--shown, 1) * 0.75)));
}

.horizontal {
  width: 75vmin;
  aspect-ratio: 4 / 2;
  display: flex;
}

.horizontal li {  
  min-width: 25%;
  grid-template-columns: repeat(auto-fit, 1fr);
}

.horizontal .card {
  height: 100%;
  transform: scaleY(calc(0.25 + (var(--shown, 1) * 0.75)));
}
    </style>
    <ul class="grid">
    </ul>
    <div class="controls card elevated filled">
      <div class="actions">
        <label for="grid">Grid</label>
        <input checked type="radio" name="style" value="grid" id="grid">
        <label for="list">List</label>
        <input type="radio" name="style" value="list" id="list">
        <label for="horizontal">Horizontal</label>
        <input type="radio" name="style" value="horizontal" id="horizontal">
        <label for="zipper">Zipper</label>
        <input type="radio" name="style" value="zipper" id="zipper">
        <label for="rotater">Rotater</label>
        <input type="radio" name="style" value="rotater" id="rotater">
      </div>
    </div>
    <script>
      const LIST = document.querySelector('ul')
const CONTROLS = document.querySelector('.controls')
const COUNT = 256

CONTROLS.addEventListener('change', e => {
  LIST.className = e.target.value
})

const createTile = () => {
  const ITEM = document.createElement('li')
  const CARD = document.createElement('div')
  CARD.className = 'card elevated'
  ITEM.appendChild(CARD)
  LIST.appendChild(ITEM)
}

for (let t = 0; t < COUNT; t++) {
  createTile()
}

const TILES = document.querySelectorAll('li')

let OPTIONS = {
  root: LIST,
  rootMargin: '0px',
  threshold: 0
}

const handleIntersection = (entries, observer) => {
  for (const entry of entries) {
    entry.target.style.setProperty('--shown', entry.isIntersecting ? 1 : 0)
  }
}

const observer = new IntersectionObserver(handleIntersection, OPTIONS)

TILES.forEach(TILE => observer.observe(TILE))
    </script>
  </body>
</html>


```

## Generadores de webs 

- [Gatsbyjs (Utiliza React)](https://www.gatsbyjs.com/)
- [webFlow](https://webflow.com/)


## Generadores de CSS
- [Conjunto de generadores CSS](https://www.cssmatic.com/)
- [Generador Box Shadow](https://cssgenerator.org/box-shadow-css-generator.html)
- [Generador Text Shadow](https://css3gen.com/text-shadow/)
- [GetWaves](https://getwaves.io)
- [GlassGenerator](https://glassgenerator.netlify.app)
- [BlobMaker](https://www.blobmaker.app)
- [Fancy Border Radius](https://9elements.github.io/fancy-border-radius/#67.64.53.64--)
- [Neumorphism](https://neumorphism.io/#e0e0e0)
- [CSS Grid generator](https://cssgrid-generator.netlify.app/)
- [Generador Box Shadow #2](https://www.cssmatic.com/box-shadow)
- [CSS Gradient](https://cssgradient.io/)
- [Shadow Palette](https://www.joshwcomeau.com/shadow-palette/)
- [Clippy](https://bennettfeely.com/clippy/)
- [Generador Flexbox](https://loading.io/flexbox/)
- [Shadow gradients](https://alvarotrigo.com/shadow-gradients/ )
- [Generador flexbox/Grid](https://grid.malven.co/)
- [Generador efecto glass](https://hype4.academy/tools/glassmorphism-generator)
- [Fancy border radius](https://9elements.github.io/fancy-border-radius/)
## Design Cards
- [CSS profile Card design](https://www.elite-corner.com/2022/06/css-profile-card-design.html)
- [CSS CARDS](https://essentialwebapps.com/css/css-cards/)
- [42 cards](https://us.niemvuilaptrinh.com/article/42-card-effects-css-for-websites)
- [CSS product cards](https://techknowprime.com/css-product-cards/)
- [25 cards](https://www.codewithrandom.com/2022/09/12/css-card-design-25-css-card-layout-style/)
- [CSS card design](https://uicookies.com/css-card-design/)
- [CSS cards Freefrontend](https://freefrontend.com/css-cards/)
## Botones 
- [UI Universe](https://uiverse.io)


## Herramienta para hacer un buscador
- [typesense](https://typesense.org/docs/guide/docsearch.html)


## Imagenes
- [stotyset](https://storyset.com/)
- [SVG repoo](https://www.svgrepo.com/)
- [Unsplash](https://unsplash.com/es)
- [Pexels](https://www.pexels.com/es-es/)
- [FreePik](https://www.freepik.com)
- [PixaBay](https://pixabay.com)
- [Free images](https://www.freeimages.com)
- [Stock vault](https://www.stockvault.net)
- [Kaboopics](https://kaboompics.com)
- [Burst](https://burst.shopify.com)
- [Undraw](https://undraw.co/)
- [stockSnap](https://stocksnap.io/)
- [BGJar](https://bgjar.com/)
## Buscadores para progamadores
- [you.com](https://you.com/code)



##  Librerias React

### Utilidades
- [Zurstand](https://github.com/pmndrs/zustand)
- [Chakra](https://chakra-ui.com)
- [Auto animate](https://auto-animate.formkit.com)
- [Tanstack](https://tanstack.com/query/v4)
- [Formik](https://formik.org)
- [Framer](https://www.framer.com/motion/)
- [React Toastify](https://www.npmjs.com/package/react-toastify)
- [Chakra UI](https://chakra-ui.com/)
- [React native paper](https://reactnativepaper.com/)
- [Native Base](https://nativebase.io/)
- [React native ui kitten](https://akveo.github.io/react-native-ui-kitten/)
### Carousal
- [Swiper](https://swiperjs.com/react)
- [Slick](https://react-slick.neostack.com)
- [React responsive carousel](https://www.npmjs.com/package/react-responsive-carousel)
- [React swipeable](https://www.npmjs.com/package/react-swipeable)
- [React alice carousel](https://www.npmjs.com/package/react-alice-carousel)
- [Pure react carousel](https://www.npmjs.com/package/pure-react-carousel)


## Hostings
- [Netlify](https://www.netlify.com/)
- [Firebase](https://firebase.google.com/?hl=es)
- [Vercel](https://vercel.com/)
- [GitHub Pages](https://pages.github.com/)
- [Surge](https://surge.sh/)
- [Render](https://render.com/)
- [Amazon Web Hosting](https://aws.amazon.com/es/websites/)
- [Google cloud Hosting](https://cloud.google.com/solutions/web-hosting?hl=es-419)
- [Glitch](https://glitch.com/)
- [Fleek](https://fleek.co/)
- [Begin](https://begin.com/)
- [Cloud Access](https://www.cloudaccess.net/)
- [Infinity Free](https://www.infinityfree.net/)
- [Railway](https://railway.app/)
- [Heroku](https://www.heroku.com/)

## API PUBLICAS
- [Public APIS](https://github.com/public-apis/public-apis)
- [Face detection](https://rapidapi.com/inferdo/api/face-detection6/)
- [PokeAPI](https://pokeapi.co/)
- [Marvel](https://developer.marvel.com/docs)
- [Harry Potter](https://hp-api.herokuapp.com/)
- [Dragon ball](https://dragon-ball-api.herokuapp.com/documentation)
- [Rick And Morty](https://rickandmortyapi.com/)
- [Conjunto de API](https://rapidapi.com/collection/list-of-free-apis)
- [CoinAPI](https://www.coinapi.io/)
- [CoinGecko](https://www.coingecko.com/es/api/documentation)
- [CheapShark](https://apidocs.cheapshark.com/)
- [Pixlab](https://pixlab.io/)
- [BlaBlaCar](https://support.blablacar.com/hc/en-gb/categories/360002585239-Developer-BlaBlaCar-API) 
- [OMDb API](https://www.omdbapi.com/)
- [Free to Game](https://www.freetogame.com/api-doc)
## Herramientas Para progamadores
- [Postman](https://www.postman.com/)
- [Generar capturas de pantalla -- Carbon](https://carbon.now.sh/)
- [Generar capturas de pantalla -- PasteBIN](https://pastebin.com/)
- [Convertir el codigo Y al codigo X](https://transform.tools/)
- [Fuentes para editores de codigo -- progamming fonts](https://www.programmingfonts.org/)
- [Fuentes para editores de codigo -- ray](https://ray.so/)
- [Fuentes para editores de codigo -- themer](https://themer.dev/)
- [Herramienta para diseño web](https://webcode.tools/)
- [Motor de busqueda para nombres de variables](https://unbug.github.io/codelf/)
- [Editor online -- CodePen](https://codepen.io/)
- [Editor online -- Codeply](https://www.codeply.com/)
- [Navegador para desarrolladores](https://sizzy.co/)
### Varios Lenguajes de progamación
- [Codigo para varios lenguajes](https://www.30secondsofcode.org/)
- [cheatsheets de muchas tecnologias -- Devhints](https://devhints.io/)
- [cheatsheets de muchas tecnologias -- OverAPI](https://overapi.com/)
- [cheatsheets de muchas tecnologias -- Devdocs](https://devdocs.io/)
### GIT/GITHUB
- [Crear un .gitignore](https://www.toptal.com/developers/gitignore)
- [Git command explorer](https://gitexplorer.com/)
- [GitHub Skills](https://skills.github.com/)
### HTML/CSS
- [Generador de layout](https://layout.bradwoods.io/)
- [Layouts -- cssLayout](https://csslayout.io/)
### CSS
- [cheatsheets CSS](https://cssreference.io/)
- [Moderncss](https://moderncss.dev/)
### Markdown
- [StackEdit](https://stackedit.io/)
- [hackMD](https://hackmd.io/)
- [Readme](https://readme.so/es)
### HTML
- [Valida la estructura HTML](https://validator.w3.org/)
### Javascript
 - [Enviar emails](https://www.emailjs.com/) -- [Ejemplo](https://www.emailjs.com/docs/tutorial/creating-contact-form/)
 - [Learn with Katas](https://jskatas.org/)
 - [Operadores Javascript](https://www.joshwcomeau.com/operator-lookup/)
 - [1loc.dev](https://1loc.dev/)
### JSON
- [JSON crack](https://jsoncrack.com/)
## Colores
- [coloors](https://coolors.co/)
- [Colors](https://colors.lol)
- [color Hunt](https://colorhunt.co/)
- [Obtener el color de una imagen](https://html-color-codes.info/colors-from-image/)
- [Color adobe](https://color.adobe.com/es/)
- [Design gradients](https://www.designgradients.com/)
- [Web gredients](https://webgradients.com/)
## Herramientas Generales
- Te pueden servir para cualquier ambito
- [Reducir tamaño de imagen](https://tinypng.com/)
- [Cambiar tamaño de la imagen](https://upscalepics.com/)
- [Modifica tu PDF](https://tinywow.com/ )
- [Generar fondo transparente -- remove](https://www.remove.bg/es)
- [Generar fondo transparente -- adobe](https://www.adobe.com/es/express/feature/image/remove-background)
- [VNC Viewer](https://www.realvnc.com/es/connect/download/viewer/)
- [VirtualBox](https://www.virtualbox.org/)
## Iconos
- [SimpleIcons](https://simpleicons.org)
- [isommetriclove](https://www.isometriclove.com/)
- [Iconos 3D](https://www.isometriclove.com/ )
- [LordiCon](https://lordicon.com/)
- [Boxicons](https://boxicons.com/)
- [Iconoir](https://iconoir.com/)
- [Icons bootstrap](https://icons.getbootstrap.com/)
- [Tabler icons](https://tabler-icons.io/)
- [systemuIcons](https://www.systemuicons.com/)
- [cssIcons](https://css.gg/)
## Responsive
- [Para probar tus diseños responsive](https://responsively.app/)




## Tecnologias
- [Vite](https://vitejs.dev/)
- [Solidity](https://solidity-es.readthedocs.io/es/latest/)
- [Eslint](https://eslint.org/)
- [Astro](https://astro.build/)
- [Flutter](https://flutter.dev/)
- [Svelte](https://svelte.dev/)
- [Qwik](https://qwik.builder.io/)
- [GraphQL](https://graphql.org/)
- [Angular](https://angular.io/)
- [React](https://es.reactjs.org/)
- [Spring](https://spring.io/)
- [Node](https://nodejs.org/es/)
- [Django](https://www.djangoproject.com/)
- [Laravel](https://laravel.com/)




## SEO
### Consejos para que encuentren tu sitio web
- Que el sitio web sea compatible con dispositivos móviles 
- Enviá su mapa del sitio a Google Search Console
- Escribe para humanos , no para motores de búsqueda.
- Mejora la velocidad de su sitio web.
- Usa la estructura del sitio adecuada para que Google pueda entender su sitio web e indexar de manera adecuada


### Etiquetas HTML que debe incluir
#### Para la descripcion  del sitio web
```html
 <meta name="description" content="Empresa dedicada a">
```
#### Etiquetas metas de The Open Graph protocol
- [Info de las etiquetas](https://ogp.me/)

#### Idioma de tu sitio web
```html
<meta property="og:locale" content="idioma"/>
```
#### Tipo de sitio web
```html
<meta property="og:type" content="website" />
```
#### ¿Que espera ver el usuario que entra?
```html
<meta property="og:title" content="¿Que espera ver el usuario que entra?" />
```
#### Descripcion
```html
<meta property="og:description" 
  content="Descripcion" />
```
#### Tu sitio web sin el triple W 
```html
<meta property="og:url" content="Tu sitio web sin el triple W " />
```
#### Enlace canónico
```html
<link rel="canonical" href="Tu sitio web con https" />
```
#### Especificar servicios que ofrece tu pagina web
```html
<meta property="og:site_name" content="servicios/productos" />
```

### Mejora el Rendimiento
- Utiliza [etiquetas de HTML 5](https://onlinezebra.com/blog/etiquetas-html5-que-son-cuales-son-sus-funciones/#:~:text=Las%20etiquetas%20HTML5%20funcionan%20como,una%20de%20las%20etiquetas%20utilizadas.)
```html
<header></header>
<nav></nav>
<article>
  <section></section>
</article>
<footer></footer>
```
- Evita utilizar: 
  - scripts/estilos innecesarios
  - Imagenes muy pesadas

- En la etiqueta &lta> utiliza estos atributos:
    - rel="noopener"
    - href="#"
-  En la etiqueta &lt;iframe> utiliza este atributo:
    - title="titulo"

### Accesibilidad
- Usar el atributo alt en imagenes
- Usar el atributo placeholder en inputs

### Evitar
- Poner estilos en el atributo style
- Poner codigo JS en la etiqueta &lt;script>&lt;/script>


### Imagenes
- [compressor](https://compressor.io/)
-  [GeoImgr](https://www.geoimgr.com/)