"use strict";(self.webpackChunkdocumentacion=self.webpackChunkdocumentacion||[]).push([[8103],{3905:(n,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>m});var t=a(7294);function r(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function o(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function i(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function l(n,e){if(null==n)return{};var a,t,r=function(n,e){if(null==n)return{};var a,t,r={},o=Object.keys(n);for(t=0;t<o.length;t++)a=o[t],e.indexOf(a)>=0||(r[a]=n[a]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)a=o[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(r[a]=n[a])}return r}var s=t.createContext({}),d=function(n){var e=t.useContext(s),a=e;return n&&(a="function"==typeof n?n(e):i(i({},e),n)),a},p=function(n){var e=d(n.components);return t.createElement(s.Provider,{value:e},n.children)},c={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},u=t.forwardRef((function(n,e){var a=n.components,r=n.mdxType,o=n.originalType,s=n.parentName,p=l(n,["components","mdxType","originalType","parentName"]),u=d(a),m=r,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return a?t.createElement(g,i(i({ref:e},p),{},{components:a})):t.createElement(g,i({ref:e},p))}));function m(n,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=n,l.mdxType="string"==typeof n?n:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1830:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var t=a(7462),r=(a(7294),a(3905));const o={sidebar_position:13},i="Formas",l={unversionedId:"CSS/formas",id:"CSS/formas",title:"Formas",description:"Luna",source:"@site/docs/CSS/formas.md",sourceDirName:"CSS",slug:"/CSS/formas",permalink:"/documentacion/docs/CSS/formas",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CSS/formas.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"CSS",previous:{title:"Animaciones",permalink:"/documentacion/docs/CSS/animaciones"}},s={},d=[{value:"Luna",id:"luna",level:2},{value:"Triangulo",id:"triangulo",level:2},{value:"Cuadrado a rayas",id:"cuadrado-a-rayas",level:2},{value:"Fondo transparente",id:"fondo-transparente",level:2},{value:"Circulos",id:"circulos",level:2},{value:"Layout responsive",id:"layout-responsive",level:2},{value:"Logo netflix",id:"logo-netflix",level:2},{value:"Flecha",id:"flecha",level:2},{value:"Formas de centrar",id:"formas-de-centrar",level:2},{value:"Forma #01",id:"forma-01",level:4},{value:"Forma #02",id:"forma-02",level:4},{value:"Forma #03",id:"forma-03",level:4},{value:"Forma #04",id:"forma-04",level:4},{value:"Forma #05",id:"forma-05",level:4},{value:"Forma #06",id:"forma-06",level:4},{value:"Forma #07",id:"forma-07",level:4},{value:"Corona",id:"corona",level:2},{value:"Texto en dos l\xedneas",id:"texto-en-dos-l\xedneas",level:2},{value:"\xbfC\xf3mo usar CSS para que el texto solo aparezca en dos l\xedneas como m\xe1ximo?",id:"c\xf3mo-usar-css-para-que-el-texto-solo-aparezca-en-dos-l\xedneas-como-m\xe1ximo",level:4}],p={toc:d};function c(n){let{components:e,...o}=n;return(0,r.kt)("wrapper",(0,t.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"formas"},"Formas"),(0,r.kt)("h2",{id:"luna"},"Luna"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en-us">\n  <head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width" />\n\n    <style>\n      div {\n        width:80px;\n        height:80px;\n        box-shadow: 15PX 15PX 0 0 #FFDE59;\n        border-radius:50%;\n\n      }\n    </style>\n  </head>\n  <body>\n     <div></div>\n  </body>\n</html>\n')),(0,r.kt)("h2",{id:"triangulo"},"Triangulo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en-us">\n  <head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width" />\n\n    <style>\n      div {\n      border-top:50px solid transparent;\n      border-left:100px solid #32557f;\n      border-bottom:50px solid transparent;\n      }\n    </style>\n  </head>\n  <body>\n     <div></div>\n  </body>\n</html>\n')),(0,r.kt)("h2",{id:"cuadrado-a-rayas"},"Cuadrado a rayas"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"}," <body>\n    <style>\n      div {\n        width:200px;\n        height:200px;\n        background-image: repeating-linear-gradient(\n          -40deg,\n          #c8afe9 0px,\n          #c8afe9 20px,\n          #ffcfe5 20px,\n          #ffcfe5 40px\n        )\n\n        \n      }\n    </style>\n    <div>\n\n    </div>\n  </body>\n")),(0,r.kt)("h2",{id:"fondo-transparente"},"Fondo transparente"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en-us">\n  <head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width" />\n  </head>\n  <body>\n    <div class="container">\n      <p style="padding:20px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit aliquam maxime, autem non architecto reprehenderit hic. Officia deleniti temporibus voluptate, exercitationem deserunt dignissimos, modi quibusdam vero laudantium eos obcaecati.</p>\n    </div>\n       <style>\n       body {\n  background: url(https://images.unsplash.com/photo-1544306094-e2dcf9479da3) no-repeat;\n  background-size: cover;\n  display: grid;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n}\n\n.container {\n  width: 30rem;\n  height: 20rem;\n  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2); \n  border-radius: 5px;\n  background-color: rgba(255, 255, 255, .15);\n  backdrop-filter: blur(5px);\n}\n       </style>\n  </body>\n</html>\n')),(0,r.kt)("h2",{id:"circulos"},"Circulos"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<body>\n  <section class="avatars">\n    <img src="https://unavatar.io/midudev" alt="">\n    <img src="https://unavatar.io/midudev" alt="">\n    <img src="https://unavatar.io/ElLauchaOkey" alt="">\n    <img src="https://unavatar.io/s4vitar" alt="">\n    <img src="https://unavatar.io/s4vitar" alt="">\n\n  </section>\n   <style>\n    .avatars {\n      display:flex;\n      padding-left:2rem;\n\n    }\n    .avatars img {\n      width : 120px;\n      height:120px;\n      border-radius:100%;\n      border: 4px solid #444;\n      margin: 0 0 0 -2rem;\n    }\n   </style>\n</body>\n')),(0,r.kt)("h2",{id:"layout-responsive"},"Layout responsive"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<body>\n  <header>header</header>\n  <nav>nav</nav>\n  <aside>aside</aside>\n  <section>\n    <article>article</article>\n    <article>article</article>\n    <article>article</article>\n  </section>\n   <footer>footer</footer>\n   <style>\n      body {\n      display:grid;\n      grid-template-columns: 1fr 1fr;\n      grid-template-rows:repeat(12,1fr);\n      height:98vw;\n      gap:10px;\n      font-family:Arial , Helvetica , sans-serif;\n      font-size:20px;\n    }\n    header {\n      background-color:#01befe;\n      grid-column:1/-1;\n      display:grid;\n      place-content:center;\n    } \n    nav {\n      background-color:#ff006d;\n      grid-column:1/-1;\n      display:grid;\n      place-content:center;\n    } \n      aside {\n      background-color:#adff02;\n      grid-row:3/12;\n      display:grid;\n      place-content:center;\n    }  \n     section {\n      background-color:#ff7d00;\n      grid-row:3/12;\n      display:flex;\n      flex-direction: column;\n     padding:10px;\n     gap:10px;\n    }\n    article {\n      background-color:#ffdd00;\n      height:100%;\n      display:grid;\n      place-content:center;\n    }\n    footer {\n      background-color:#8f0fff;\n      grid-column:1/-1;\n      display:grid;\n      place-content:center;\n    }\n    \n  \n   </style>\n</body>\n")),(0,r.kt)("h2",{id:"logo-netflix"},"Logo netflix"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<body>\n  <div class="netflix"></div>\n  <style>\n    body {\n      display: flex;\n      align-items: center;\n      height: 100vh;\n      margin: 0;\n      background: black;\n    }\n    .netflix {\nwidth:140px;\nheight: 250px;\nposition:relative;\nmargin-left:50%;\ntransform: translatex(-50%);\nbackground:linear-gradient(90deg , #b1060e 0px, #b1060e 5px , \ntransparent 50px , transparent 90px , #b1060e 90px , #b1060e 140px );\n    }\n\n    .netflix::before , .netflix::after {\n      content:"";\n      display:block;\n      position:absolute;\n\n    }\n    .netflix::before {\n          width:50px;\n          height:250px;\n          top:0;\n          left:45px;\n          background-color:#e50914;\n          transform:skewX(19.6deg);\n          box-shadow:0 0 30px black\n\n    }\n\n    .netflix::after {\n      width:190px;\n      height:25px;\n      top:245px;\n      left:-25px;\n      border-radius:50%;\n      background-color:black;\n    }\n  </style>\n</body>\n')),(0,r.kt)("h2",{id:"flecha"},"Flecha"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<body>\n  <p><span>INICIO</span></p>\n   <style>\n    p {\n    background:rgb(203 , 49 , 241);\n    color:white;\n    height:50px;\n    width:100px;\n    margin-left:20px;\n    margin-top:55px;\n    position:relative;\n    }\n    p::before {\n      border-top: 25px solid transparent;\n      border-bottom:25px solid transparent;\n      border-left:30px solid rgb(203 , 49 , 241);\n      content:"";\n      left:100px;\n     position:absolute;\n    }\n    span {\n      display:table-cell;\n      line-height:25px;\n      padding:10px;\n    }\n   </style>\n</body>\n')),(0,r.kt)("h2",{id:"formas-de-centrar"},"Formas de centrar"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'  <div class="container">\n    <div class="child"></div>\n  </div>\n')),(0,r.kt)("h4",{id:"forma-01"},"Forma #01"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"  .container  {\n      margin:50px;\n      width:250px;\n      height:250px;\n      background-color:royalblue;\n/* Centramos*/\n      display:flex;\n      justify-content:center;\n      align-items:center;\n    }\n\n    .child {\n      width:100px;\n      height:100px;\n      background:tomato;\n    }\n")),(0,r.kt)("h4",{id:"forma-02"},"Forma #02"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"}," .container  {\n      margin:50px;\n      width:250px;\n      height:250px;\n      background-color:royalblue;\n/* Centramos*/\n      display:flex;\n \n    }\n\n    .child {\n      width:100px;\n      height:100px;\n      background:tomato;\n      /* Centramos*/\n      margin:auto;\n    }\n")),(0,r.kt)("h4",{id:"forma-03"},"Forma #03"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"}," .container  {\n      margin:50px;\n      width:250px;\n      height:250px;\n      background-color:royalblue;\n/* Centramos*/\n      display:grid;\n \n    }\n\n    .child {\n      width:100px;\n      height:100px;\n      background:tomato;\n      /* Centramos*/\n      margin:auto;\n    }\n")),(0,r.kt)("h4",{id:"forma-04"},"Forma #04"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"    .container  {\n      margin:50px;\n      width:250px;\n      height:250px;\n      background-color:royalblue;\n/* Centramos*/\n      display:grid;\n      place-items:center;\n \n    }\n\n    .child {\n      width:100px;\n      height:100px;\n      background:tomato;\n\n    }\n")),(0,r.kt)("h4",{id:"forma-05"},"Forma #05"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"    .container  {\n      margin:50px;\n      width:250px;\n      height:250px;\n      background-color:royalblue;\n/* Centramos*/\n      display:grid;\n     \n \n    }\n\n    .child {\n      width:100px;\n      height:100px;\n      background:tomato;\n      /*Centramos*/\n    place-self:center;\n    }\n")),(0,r.kt)("h4",{id:"forma-06"},"Forma #06"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"   .container  {\n      margin:50px;\n      width:250px;\n      height:250px;\n      background-color:royalblue;\n/* Centramos*/\n      position:relative;\n     \n \n    }\n\n    .child {\n      width:100px;\n      height:100px;\n      background:tomato;\n      /* Centramos*/\n    position:absolute;\n    top:50%;\n    left:50%;\n    transform:translate(-50% , -50%);\n    }\n")),(0,r.kt)("h4",{id:"forma-07"},"Forma #07"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"    .container  {\n      margin:50px;\n      width:250px;\n      height:250px;\n      background-color:royalblue;\n/* Centramos*/\n      position:relative;\n     \n \n    }\n\n    .child {\n      width:100px;\n      height:100px;\n      background:tomato;\n      /* Centramos*/\n    position:absolute;\n    inset:0;\n    margin:auto;\n    }\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Imagenes")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{target:"_blank",href:a(5828).Z},"5 Ways to Center a Div in CSS"))))),(0,r.kt)("h2",{id:"corona"},"Corona"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<body>\n    <div class="corona">\n       <div class="picos"></div>\n       <div class="base"></div>\n       <div class="circulos"></div>\n    </div>\n  <style>\n    * {\n      padding:0;\n      margin:0;\n      box-sizing:border-box;\n    }\n     .corona {\n      margin:80px;\n      border-top: 160px solid #ebbb30;\n      border-left:25px solid transparent;\n      border-right:25px solid transparent;\n      position:relative;\n      width:270px;\n     }\n     .picos {\n      position:absolute;\n      width:90px;\n      height:150px;\n      border-radius:50%;\n      background-color:#fff;\n      color:#fff;\n      top:-240px;\n      left:-25px;\n      box-shadow: 90px 0 , 180px 0;\n\n     }\n     .base {\n      position:absolute;\n      width:100%;\n      height:15px;\n      background-color:#EBBB30;\n      bottom:-25px;\n     }\n\n     .circulos {\n      position:absolute;\n      top:-150px;\n      left:-30px;\n      background-color:#ebbb30;\n      width:20px;\n      height:20px;\n      border-radius: 50%;\n      box-shadow: 85px -17px , 175px -17px , 260px 0;\n      color:#ebbb30;\n     }\n  </style>\n  \n</body>\n')),(0,r.kt)("h2",{id:"texto-en-dos-l\xedneas"},"Texto en dos l\xedneas"),(0,r.kt)("h4",{id:"c\xf3mo-usar-css-para-que-el-texto-solo-aparezca-en-dos-l\xedneas-como-m\xe1ximo"},"\xbfC\xf3mo usar CSS para que el texto solo aparezca en dos l\xedneas como m\xe1ximo?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<body>\n  <style>\n    p {\n      display: -webkit-box;\n      -webkit-line-clamp: 2;\n      -webkit-box-orient: vertical;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      display: box;\n      line-clamp: 2; /* numero de linea a mostrar */\n      box-orient: vertical;\n    }\n  </style>\n      <p>\n        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis\n        iste dolorem deleniti similique obcaecati, repellat officiis. Rerum,\n        excepturi? Doloribus voluptas aspernatur aut voluptatibus sit, alias\n        tempora repellat voluptate expedita dolorum aliquam quis consequuntur\n        maiores facere. Praesentium veniam eum numquam cumque soluta quia facilis\n        iste! Asperiores, fugit. Fuga doloribus optio doloremque eius velit\n        accusamus unde perspiciatis deleniti quos ea sit eligendi, harum delectus\n        reprehenderit perferendis blanditiis impedit cum voluptatum assumenda.\n        Unde, quo ad. Repellendus voluptates odio eligendi hic molestias nostrum\n        saepe impedit numquam deleniti? Ut voluptas saepe, eveniet repellendus\n        illum, cupiditate possimus expedita, minima omnis corporis dolorum quae\n        minus rerum maiores?similique obcaecati, repellat officiis. Rerum,\n        excepturi? Doloribus voluptas aspernatur aut voluptatibus sit, alias\n        tempora repellat voluptate expedita dolorum aliquam quis consequuntur\n        maiores facere. Praesentium veniam eum numquam cumque soluta quia facilis\n        iste! Asperiores, fugit. Fuga dolorsimilique obcaecati, repellat officiis.\n        Rerum, excepturi? Doloribus voluptas aspernatur aut voluptatibus sit,\n        alias tempora repellat voluptate expedita dolorum aliquam quis\n        consequuntur maiores facere. Praesentium veniam eum numquam cumque soluta\n        quia facilis iste! Asperiores, fugit. Fuga dolor\n      </p>\n</body>\n\n")))}c.isMDXComponent=!0},5828:(n,e,a)=>{a.d(e,{Z:()=>t});const t=a.p+"assets/files/FeYUGh6VQAAOcWp-a0234d37e1086c8de9572c8dfe666043.jpg"}}]);