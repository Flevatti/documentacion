"use strict";(self.webpackChunkdocumentacion=self.webpackChunkdocumentacion||[]).push([[7306],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>m});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,v=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return t?n.createElement(v,i(i({ref:a},u),{},{components:t})):n.createElement(v,i({ref:a},u))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1653:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=t(7462),r=(t(7294),t(3905));const o={sidebar_position:15},i="Extra",s={unversionedId:"Javascript/extra",id:"Javascript/extra",title:"Extra",description:"Pagina primer plano",source:"@site/docs/Javascript/extra.md",sourceDirName:"Javascript",slug:"/Javascript/extra",permalink:"/documentacion/docs/Javascript/extra",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Javascript/extra.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"Javascript",previous:{title:"Buenas practicas",permalink:"/documentacion/docs/Javascript/practicas"}},l={},c=[{value:"Pagina primer plano",id:"pagina-primer-plano",level:2},{value:"\xbfQue es JSON?",id:"que-es-json",level:2},{value:"\xbfCu\xe1les son sus caracter\xedsticas?",id:"cu\xe1les-son-sus-caracter\xedsticas",level:4},{value:"Sintaxis",id:"sintaxis",level:4}],u={toc:c};function p(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"extra"},"Extra"),(0,r.kt)("h2",{id:"pagina-primer-plano"},"Pagina primer plano"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Como detectar si tu web est\xe1 en primer plano")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'    // Primera Alternativa\n    // Detecta si el usuario quito el sitio web del primer plano\n    window.addEventListener("blur" , () => {\n      document.title="Nadie nos mira"\n    });\n   // Detecta si el usuario  tiene el sitio web en primer plano\n    window.addEventListener("focus" , () => {\n      document.title = "Nos mira alguien";\n    })\n    // Segunda alternativa\n    document.addEventListener("visibilitychange" , () => {\n      document.title = document.visibilityState;\n    })\n')),(0,r.kt)("h2",{id:"que-es-json"},"\xbfQue es JSON?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JSON es un formato de texto totalmente independiente del lenguaje de programaci\xf3n"),(0,r.kt)("li",{parentName:"ul"},"JSON, cuyas siglas significan en verdad JavaScript object notation que, en espa\xf1ol se traducen como, notaci\xf3n de objetos de JavaScript."),(0,r.kt)("li",{parentName:"ul"},"Es un formato de intercambio de datos que resulta muy f\xe1cil de leer y escribir para los programadores y sencillo de interpretar y crear para las m\xe1quinas."),(0,r.kt)("li",{parentName:"ul"},"Se usa cuando se requiere que un sistema requiera mostrar o enviar informaci\xf3n para que otros sistemas los lean e interpreten."),(0,r.kt)("li",{parentName:"ul"},"Se utiliza principalmente para transferir datos entre un servidor y un cliente.")),(0,r.kt)("p",null,"En resumen, JSON no es un lenguaje de programaci\xf3n sino un archivo que contiene datos estructurados, que se utiliza para transferir informaci\xf3n entre sistemas."),(0,r.kt)("p",null,"Una de las caracter\xedsticas m\xe1s significativas de JSON, al ser un formato independiente de los lenguajes de programaci\xf3n, es que los servicios que comparten informaci\xf3n por este m\xe9todo no necesitan hablar el mismo idioma. Es decir que el emisor y el receptor pueden ser totalmente distintos, por ejemplo, Java y Python\nEsto es as\xed porque cada uno tiene su propia librer\xeda de codificaci\xf3n y decodificaci\xf3n para cadenas en este formato."),(0,r.kt)("p",null,"Es decir que JSON es un formato com\xfan para serializar y deserializar objetos en la mayor\xeda de los idiomas"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Su funcionamiento se basa en la estructuraci\xf3n de una colecci\xf3n de pares  que contienen:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Una clave: que corresponde al identificador del contenido."),(0,r.kt)("li",{parentName:"ul"},"Un valor: que representa el contenido correspondiente.")))),(0,r.kt)("h4",{id:"cu\xe1les-son-sus-caracter\xedsticas"},"\xbfCu\xe1les son sus caracter\xedsticas?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JSON es solo un formato de datos."),(0,r.kt)("li",{parentName:"ul"},"Requiere usar comillas dobles para las cadenas y los nombres de propiedades. Las comillas simples no son v\xe1lidas."),(0,r.kt)("li",{parentName:"ul"},"Una coma o dos puntos mal ubicados pueden producir que un archivo JSON no funcione."),(0,r.kt)("li",{parentName:"ul"},"A diferencia del c\xf3digo JavaScript, en el que las propiedades del objeto pueden no estar entre comillas, en JSON solo los Strings entre comillas pueden ser utilizadas como propiedades.")),(0,r.kt)("h4",{id:"sintaxis"},"Sintaxis"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Un objeto JSON comienza y termina con llaves {}"),(0,r.kt)("li",{parentName:"ul"},"Hay dos elementos centrales en un objeto JSON: claves (Keys) y valores (Values)."),(0,r.kt)("li",{parentName:"ul"},"Las Keys deben ser cadenas de caracteres (strings). Como su nombre en espa\xf1ol lo indica, estas contienen una secuencia de caracteres rodeados de comillas."),(0,r.kt)("li",{parentName:"ul"},"Los Values son un tipo de datos JSON v\xe1lido. Puede ser un arreglo (array), objeto, cadena (string), booleano, n\xfamero o nulo."),(0,r.kt)("li",{parentName:"ul"},"Puede tener dos o m\xe1s pares de claves/valor dentro, con una coma para separarlos. As\xed mismo, cada key es seguida por dos puntos para distinguirla del valor.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"    {\n        \u201ckey\u201d:\u201cvalue\u201d,\n        \u201ckey\u201d:\u201cvalue\u201d,\n        \u201ckey\u201d:\u201cvalue\u201d.\n      }\n\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"La sintaxis de JSON funciona de modo similar a JavaScript. Por ejemplo:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"El arreglo de informaci\xf3n se hace mediante claves (keys)."),(0,r.kt)("li",{parentName:"ul"},"La informaci\xf3n se separa por comas."),(0,r.kt)("li",{parentName:"ul"},"Las llaves agrupan objetos."),(0,r.kt)("li",{parentName:"ul"},"Los corchetes agrupan arreglos de datos (array)."))),(0,r.kt)("li",{parentName:"ul"},"Sin embargo, JSON se distingue de JavaScript porque sus claves tienen que ser strings (o secuencias de caracteres), mientras que sus valores deben ser strings, n\xfameros, objetos, arreglos, boleados o null.")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.nextu.com/blog/que-es-json-por-que-es-importante-conocerlo-rc22/"},"\xbfQu\xe9 es Json? \xbfPor qu\xe9 es importante conocerlo?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.hostinger.com.ar/tutoriales/que-es-json"},"\xbfQu\xe9 es JSON?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.hubspot.es/website/que-es-json"},"JSON para principiantes: qu\xe9 es, para qu\xe9 sirve y ejemplos"))))))}p.isMDXComponent=!0}}]);