"use strict";(self.webpackChunkdocumentacion=self.webpackChunkdocumentacion||[]).push([[4736],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>m});var n=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=n.createContext({}),s=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=s(e.components);return n.createElement(d.Provider,{value:a},e.children)},v={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(t),m=o,u=c["".concat(d,".").concat(m)]||c[m]||v[m]||r;return t?n.createElement(u,i(i({ref:a},p),{},{components:t})):n.createElement(u,i({ref:a},p))}));function m(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=c;var l={};for(var d in a)hasOwnProperty.call(a,d)&&(l[d]=a[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},9424:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>v,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=t(7462),o=(t(7294),t(3905));const r={sidebar_position:4},i="Reactividad vue 3",l={unversionedId:"vue/reactividad",id:"vue/reactividad",title:"Reactividad vue 3",description:"ref()",source:"@site/docs/vue/reactividad.md",sourceDirName:"vue",slug:"/vue/reactividad",permalink:"/documentacion/docs/vue/reactividad",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/vue/reactividad.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"vue",previous:{title:"Options API / Composition API",permalink:"/documentacion/docs/vue/vueVersion"},next:{title:"Actividades",permalink:"/documentacion/docs/vue/actividadbasica"}},d={},s=[{value:"ref()",id:"ref",level:2},{value:"ref()",id:"ref-1",level:3},{value:"Solucion",id:"solucion",level:4},{value:"No se usa la propiedad value en el &lt;template&gt;",id:"no-se-usa-la-propiedad-value-en-el-template",level:4},{value:"reactive()",id:"reactive",level:2},{value:"Ref VS Reactive",id:"ref-vs-reactive",level:3},{value:"Diferencias",id:"diferencias",level:4},{value:"Son objetos diferentes",id:"son-objetos-diferentes",level:4},{value:"Reactive tiene un objeto reactivo y Ref un valor primitivo reactivo.",id:"reactive-tiene-un-objeto-reactivo-y-ref-un-valor-primitivo-reactivo",level:4},{value:"toRefs()",id:"torefs",level:2},{value:"Le pod\xe9s quitar el operador spread",id:"le-pod\xe9s-quitar-el-operador-spread",level:4},{value:"toRef()",id:"toref",level:2},{value:"readonly()",id:"readonly",level:2},{value:"isRef()",id:"isref",level:2},{value:"isReactive()",id:"isreactive",level:2},{value:"isReadonly()",id:"isreadonly",level:2},{value:"isProxy()",id:"isproxy",level:2},{value:"shallowRef()",id:"shallowref",level:2},{value:"shallowReadonly()",id:"shallowreadonly",level:2},{value:"shallowReactive()",id:"shallowreactive",level:2}],p={toc:s};function v(e){let{components:a,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"reactividad-vue-3"},"Reactividad vue 3"),(0,o.kt)("h2",{id:"ref"},"ref()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Las variables de la composition API (ya sea con el hook setup() o el ","<","script setup>) que utilizamos en el ","<","template> No tienen reactividad."),(0,o.kt)("li",{parentName:"ul"},"Si Alguna variable cambia , no se vuelve a renderizar el componente (SOLO LA PARTE AFECTADA)"),(0,o.kt)("li",{parentName:"ul"},"Los cambios que se realice a la variable no se aplica en el ","<","template>")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <p>Nombre del evento:  {{nombreDelEvento}}</p>\n  <p>Capacidad:    {{capacidad}}</p>\n</template>\n\n<script setup>\n   \n   let nombreDelEvento = "La fiesta de pepito";\n   let capacidad = 10;\n\n  \nsetTimeout(() => {\n   nombreDelEvento = "party Pool";\n   alert(\'Se cambio\');\n} , 2000)\n\n<\/script>\n\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Observacion ")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"Cuando se cambia el valor de la variable nombreDelEvento , no se refleja en el ","<","template>"),(0,o.kt)("li",{parentName:"ul"},"No se vuelve a renderizar la parte afectada"),(0,o.kt)("li",{parentName:"ul"},"No hay reactividad")))),(0,o.kt)("h3",{id:"ref-1"},"ref()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Convierte un valor primitivo en reactivo."),(0,o.kt)("li",{parentName:"ul"},"El m\xe9todo ref() recibe un valor primitivo."),(0,o.kt)("li",{parentName:"ul"},"En los valores reactivos, se aplica la reactividad. (Vuelve a renderizarse la parte afectada en el ","<","template>)"),(0,o.kt)("li",{parentName:"ul"},"Los valores reactivos son \u201cobjetos\u201d")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <p>Nombre del evento:  {{nombreDelEvento}}</p>\n  <p>Capacidad:    {{capacidad}}</p>\n</template>\n\n<script setup>\n   import {ref} from \'vue\';\n   //ref(valorprimitivo)\nlet nombreDelEvento = ref("La fiesta de pepito");\n   let capacidad = ref(10);\n   console.log(nombreDelEvento);\n\n  \nsetTimeout(() => {\n   nombreDelEvento = "party Pool";\n   console.log(nombreDelEvento);\n} , 2000)\n\n<\/script>\n\n\n')),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Observacion ")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"Un valor reactivo es un objeto."),(0,o.kt)("li",{parentName:"ul"},"En el setTimeOut la variable vuelve a ser un dato primitivo ya que se pierde el objeto.")))),(0,o.kt)("h4",{id:"solucion"},"Solucion"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Para cambiar el valor del \u201cobjeto\u201d reactivo, se utiliza la propiedad value del mismo."),(0,o.kt)("li",{parentName:"ul"},"La propiedad value contiene el  valor primitivo que ahora es reactivo.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script setup>\n   import {ref} from \'vue\';\n   //ref(valorprimitivo)\nlet nombreDelEvento = ref("La fiesta de pepito");\n   let capacidad = ref(10);\n  \n\n  \nsetTimeout(() => {\n   nombreDelEvento.value = "party Pool";\n\n} , 2000)\n\n<\/script>\n\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Observacion")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"Cuando el valor de la variable cambia, se vuelve a renderizar el ","<","template> (LA PARTE AFECTADA). Esto sucede porque ahora hay reactividad ya que el dato es reactivo."),(0,o.kt)("li",{parentName:"ul"},"Si un dato reactivo sufre un cambio, se vuelve a renderizar la parte del ","<","template> que contenga este valor.")))),(0,o.kt)("h4",{id:"no-se-usa-la-propiedad-value-en-el-template"},"No se usa la propiedad value en el ","<","template>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n  <p>Nombre del evento:  {{nombreDelEvento}}</p>\n  \n</template>\n\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Vue de forma autom\xe1tica muestra la propiedad value del dato reactivo en el ","<","template>"),(0,o.kt)("li",{parentName:"ul"},"Vue siempre va a mostrar el valor de la propiedad value")),(0,o.kt)("h2",{id:"reactive"},"reactive()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Nos permite crear un objeto con valores reactivos."),(0,o.kt)("li",{parentName:"ul"},"Cumpel la misma funci\xf3n que ref() pero con objetos."),(0,o.kt)("li",{parentName:"ul"},"El m\xe9todo reactive() recibe un objeto.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n  <p>Nombre del evento:  {{data.nombreDelEvento}}</p>\n  <p>Capacidad {{data.capacidad}}</p>\n  <p>Invitados {{data.invitados}}</p>\n  \n</template>\n\n<script setup>\nimport { reactive } from 'vue';\n  //reactive(objeto)\nconst data = reactive( {\n   nombreDelEvento :  \"La fiesta de pepito\" ,\n   capacidad : 10 ,\n   invitados : ['Clara' , 'Pablo' , 'Carlitos' , 'Jorge']\n});\nsetTimeout(() => {\n    data.nombre = \"La fiesta\"\n    data.capacidad = 12;\n    data.invitados.push('Pedro');\n} , 2000)\n<\/script>\n\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Observacion ")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"A diferencia de ref() , NO UTILIZAMOS LA PROPIEDAD VALUE"),(0,o.kt)("li",{parentName:"ul"},"Cuando alg\xfan valor del objeto cambie, se vuelve a renderizar el ","<","template> (LA PARTE AFECTADA). Esto sucede porque ahora hay reactividad ya que el  objeto es reactivo."),(0,o.kt)("li",{parentName:"ul"},"Si un dato reactivo sufre un cambio, se vuelve a renderizar la parte del ","<","template> que contenga este valor.")))),(0,o.kt)("h3",{id:"ref-vs-reactive"},"Ref VS Reactive"),(0,o.kt)("p",null,"Ambos crean valores reactivos"),(0,o.kt)("h4",{id:"diferencias"},"Diferencias"),(0,o.kt)("h4",{id:"son-objetos-diferentes"},"Son objetos diferentes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script setup>\nimport { reactive, ref } from "vue";\nlet nombre = ref("Fiesta reactiva");\nconst data = reactive({\n  nombreDelEvento: "La fiesta de pepito",\n  capacidad: 10,\n  invitados: ["Clara", "Pablo", "Carlitos", "Jorge"],\n});\nconsole.log("Ref" , nombre);\nconsole.log("Reactive" , data);\n<\/script>\n')),(0,o.kt)("h4",{id:"reactive-tiene-un-objeto-reactivo-y-ref-un-valor-primitivo-reactivo"},"Reactive tiene un objeto reactivo y Ref un valor primitivo reactivo."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ref:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Solo tiene un valor reactivo"),(0,o.kt)("li",{parentName:"ul"},"Si a una variable se le asigna el valor reactivo (el objeto, no la propiedad value ) , tiene reactividad la variable."))),(0,o.kt)("li",{parentName:"ul"},"Reactive:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"El objeto es reactivo, el TODO."),(0,o.kt)("li",{parentName:"ul"},"Si a una variable se le asigna una propiedad del objeto reactivo, no tiene reactividad la variable ya que el OBJETO es reactivo , NO LA PROPIEDAD.")))),(0,o.kt)("p",null,"Demostracion:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <p>Nombre del evento (Ref) {{ nombreEventoRef }} </p>\n  <hr />\n  <p>Nombre del evento (Reactive): {{ nombreEventoReactive }}</p>\n</template>\n\n<script setup>\nimport { reactive, ref } from "vue";\nlet nombre = ref("Fiesta reactiva");\nconst data = reactive({\n  nombreDelEvento: "La fiesta de pepito",\n  capacidad: 10,\n  invitados: ["Clara", "Pablo", "Carlitos", "Jorge"],\n});\nvar nombreEventoReactive = data.nombreDelEvento;\nvar nombreEventoRef = nombre\n\nsetTimeout(()=> {\nnombre.value = "Otro evento";\nnombreEventoRef = "Otro evento";\n data.nombreDelEvento = "Otro evento";\nconsole.log("Ref" , nombre);\nconsole.log("Reactive" , data);\n} , 2000)\n\n<\/script>\n\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Observacion ")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"La variable nombreEventoReactive no tiene reactividad"),(0,o.kt)("li",{parentName:"ul"},"La variable nombreEventoRef tiene reactividad")))),(0,o.kt)("h2",{id:"torefs"},"toRefs()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Convierte un objeto reactivo en un simple objeto donde cada propiedad del objeto resultante es una ref que apunta a la propiedad correspondiente del objeto reactivo. Cada referencia(ref) individual se crea usando toRef() "),(0,o.kt)("li",{parentName:"ul"},"Nos permite pasar propiedades del objeto reactivo a variables sin perder la reactividad.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <p>Nombre del evento (Reactive): {{nombreEvento}} </p>\n</template>\n\n<script setup>\nimport { reactive ,  toRefs} from "vue";\nconst data = reactive({\n  nombreDelEvento: "La fiesta de pepito",\n  capacidad: 10,\n  invitados: ["Clara", "Pablo", "Carlitos", "Jorge"],\n});\n// Sirve para extraer una propiedad de un objeto reactivo \n// Dicha propiedad seguira siendo reactivo.\n// ...toRefs(objeto);\n// Devuelve un objeto donde cada propiedad es una ref cuyo valor primitivo es el valor de cada propiedad del objeto reactivo.\n// Convierte todas las propiedades del objeto reactivo en ref.\nvar variable = {...toRefs(data)}\nvar nombreEvento = variable.nombreDelEvento;\nconsole.log(variable);\nsetTimeout(()=> {\n data.nombreDelEvento = "Otro evento";\n} , 2000)\n\n<\/script>\n\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Observacion")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"nombreEvento contiene una propiedad de un objeto reactivo pero esta vez contiene la reactividad."))),(0,o.kt)("h4",{id:"le-pod\xe9s-quitar-el-operador-spread"},"Le pod\xe9s quitar el operador spread"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script setup>\nimport { reactive ,  toRefs} from "vue";\nconst data = reactive({\n  nombreDelEvento: "La fiesta de pepito",\n  capacidad: 10,\n  invitados: ["Clara", "Pablo", "Carlitos", "Jorge"],\n});\n// Sirve para extraer una propiedad de un objeto reactivo \n// Dicha propiedad seguira siendo reactivo.\n// ...toRefs(objeto);\n// Devuelve un objeto donde cada propiedad es una ref cuyo valor primitivo es el valor de cada propiedad del objeto reactivo.\n// Convierte todas las propiedades del objeto reactivo en ref.\nvar variable = toRefs(data);\nvar nombreEvento = variable.nombreDelEvento;\nconsole.log(variable);\nsetTimeout(()=> {\n data.nombreDelEvento = "Otro evento";\n} , 2000)\n\n<\/script>\n\n')),(0,o.kt)("h2",{id:"toref"},"toRef()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Crea una ref de una propiedad de un objeto reactivo . La ref creada se sincroniza con  la propiedad del objeto : mutar la propiedad actualizar\xe1 la  ref y viceversa.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'\n<template>\n  <p>Nombre del evento (Reactive): {{nombreEvento}} </p>\n</template>\n\n<script setup>\nimport { reactive ,  toRef} from "vue";\nconst data = reactive({\n  nombreDelEvento: "La fiesta de pepito",\n  capacidad: 10,\n  invitados: ["Clara", "Pablo", "Carlitos", "Jorge"],\n});\n// toRef (objeto reactivo , \'nombrepropiedad\');\n// Convierte el nombrepropiedad del objeto reactivo en un ref.\nvar nombreEvento = toRef(data , \'nombreDelEvento\');\nconsole.log(nombreEvento);\nsetTimeout(()=> {\n data.nombreDelEvento = "Otro evento";\n} , 2000)\n\n<\/script>\n\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Observacion")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Se creo un ref de la propiedad nombreDelEvento del objeto reactivo data.\nSeria parecido a ref(data.nombreDelEvento)"))),(0,o.kt)("h2",{id:"readonly"},"readonly()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Mientras que ref y reactive convierten una variable en reactiva, readonly convierte una variable (normal o reactiva) en una versi\xf3n inmutable que no se podr\xe1 variar. Al igual que las anteriores (y a diferencia de las versiones shallow), afectar\xe1 a todos sus hijos.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <p>{{copy}} </p>\n</template>\n\n<script setup>\nimport { reactive, readonly  } from "vue";\nconst data = reactive({\n  nombreDelEvento: "La fiesta de pepito",\n  capacidad: 10,\n  invitados: ["Clara", "Pablo", "Carlitos", "Jorge"],\n});\nconst copy = readonly(data);\nconsole.log(copy);\n// var nombreEvento = toRef(data , \'nombreDelEvento\');\nsetTimeout(()=> {\n     copy.nombreDelEvento = "otro Evento";\n} , 2000)\n\n<\/script>\n\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Observacion")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"No me deja cambiar una propiedad del objeto copy ya que es inmutable."))),(0,o.kt)("h2",{id:"isref"},"isRef()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Comprueba si una variable es una referencia reactiva a un dato primitivo."),(0,o.kt)("li",{parentName:"ul"},"Devuelve true si es una ref.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'\n<script setup>\nimport { isRef, reactive, toRef  } from "vue";\nconst data = reactive({\n  nombreDelEvento: "La fiesta de pepito",\n  capacidad: 10,\n  invitados: ["Clara", "Pablo", "Carlitos", "Jorge"],\n});\nvar nombreEvento = toRef(data , \'nombreDelEvento\');\nsetTimeout(()=> {\n  //  Devuelve true porque nombreEvento es una ref (referencia reactiva)\n    console.log(isRef(nombreEvento));\n    // Devuelve false porque data es reactive (objeto reactivo)\n     console.log(isRef(data));\n\n} , 2000)\n\n<\/script>\n\n')),(0,o.kt)("h2",{id:"isreactive"},"isReactive()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Comprueba si una variable es un objeto reactivo."),(0,o.kt)("li",{parentName:"ul"},"Devuelve true si es reactive.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script setup>\nimport { isReactive,  reactive, toRef  } from "vue";\nconst data = reactive({\n  nombreDelEvento: "La fiesta de pepito",\n  capacidad: 10,\n  invitados: ["Clara", "Pablo", "Carlitos", "Jorge"],\n});\nvar nombreEvento = toRef(data , \'nombreDelEvento\');\nsetTimeout(()=> {\n  //  Devuelve false porque nombreEvento es una ref (referencia reactiva)\n    console.log(isReactive(nombreEvento));\n    // Devuelve true porque data es un reactive (objeto reactivo)\n     console.log(isReactive(data));\n\n} , 2000)\n\n<\/script>\n\n')),(0,o.kt)("h2",{id:"isreadonly"},"isReadonly()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Comprueba si un objeto es un proxy creado por readonly() o shallowReadonly()."),(0,o.kt)("li",{parentName:"ul"},"Devuelve true si es creado por readonly() o shallowReadOnly().")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <p>{{copy}} </p>\n</template>\n\n<script setup>\nimport { reactive, readonly , isReadonly } from "vue";\nconst data = reactive({\n  nombreDelEvento: "La fiesta de pepito",\n  capacidad: 10,\n  invitados: ["Clara", "Pablo", "Carlitos", "Jorge"],\n});\nconst copy = readonly(data);\nconsole.log(copy);\nsetTimeout(()=> {\n     copy.nombreDelEvento = "otro Evento";\n     // Devuelve true porque fue creado por readonly\n     console.log(isReadonly(copy));   \n       // Devuelve false porque NO  fue creado por readonly\n     console.log(isReadonly(data));\n} , 2000)\n\n<\/script>\n')),(0,o.kt)("h2",{id:"isproxy"},"isProxy()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Comprueba si una variable es un proxy creado por reactive o readonly."),(0,o.kt)("li",{parentName:"ul"},"Comprueba si un objeto es de tipo proxy creado por reactive(), readonly() ,  shallowReactive() , shallowReadonly()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script setup>\nimport {   reactive, toRef , isProxy  } from "vue";\nconst data = reactive({\n  nombreDelEvento: "La fiesta de pepito",\n  capacidad: 10,\n  invitados: ["Clara", "Pablo", "Carlitos", "Jorge"],\n});\nvar nombreEvento = toRef(data , \'nombreDelEvento\');\nsetTimeout(()=> {\n  //  Devuelve false  , esta creado por ref\n    console.log(isProxy(nombreEvento));\n    // Devuelve true , esta creado por reactive\n     console.log(isProxy(data));\n\n} , 2000)\n\n<\/script>\n\n')),(0,o.kt)("h2",{id:"shallowref"},"shallowRef()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Es una version ligera de ref()"),(0,o.kt)("li",{parentName:"ul"},"S\xf3lo la propiedad value es reactiva."),(0,o.kt)("li",{parentName:"ul"},"Solo observa los cambios en las claves(\xedndices) de matriz(array) o los cambios de valor directo (propiedad value). No mira, por ejemplo, en el interior de los campos de objetos. "),(0,o.kt)("li",{parentName:"ul"},"shallowRef()se utiliza normalmente para optimizaciones de rendimiento de grandes estructuras de datos o integraci\xf3n con sistemas de gesti\xf3n de estado externos.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <p> {{data.count}}</p>\n</template>\n\n<script setup>\n\nimport {  shallowRef   } from "vue";\n\n  const data = shallowRef({count : 1});\n  \nsetTimeout(()=> {\n       //No se vuelve a renderizar // No es reactivo\n       data.value.count = 2;\n       /// Se vuelve a renderizar / Es reactivo\n       data.value = {count : 2};\n\n} , 2000)\n\n<\/script>\n\n')),(0,o.kt)("h2",{id:"shallowreadonly"},"shallowReadonly()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Es una version ligera de readonly()"),(0,o.kt)("li",{parentName:"ul"},"solo las propiedades de nivel ra\xedz se hacen de solo lectura"),(0,o.kt)("li",{parentName:"ul"},"Las propiedades dentro de otras propiedas (profundas) se pueden editar.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <p>{{ data }}</p>\n</template>\n\n<script setup>\nimport { isReactive, shallowReadonly } from "vue";\n\nconst data = shallowReadonly({\n  // Propiedades nivel ra\xedz\n  propiedad1: 1,\n  propiedad2: {\n    // Propiedades profundas\n    id: 2,\n  },\n});\n\nsetTimeout(() => {\n  // No se puede editar porque es una propiedad de primer nivel \n  // No se puede editar porque es una propiedad de nivel ra\xedz\n  data.propiedad1++;\n  // False -- No es un objeto reactive\n  console.log(isReactive(data.propiedad2));\n  // Se modifica pero no es reactive (No se vuelve a renderizar)\n  data.propiedad2.id++;\n  console.log(data);\n}, 2000);\n\n<\/script>\n\n')),(0,o.kt)("h2",{id:"shallowreactive"},"shallowReactive()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Es una versi\xf3n ligera de reactive()"),(0,o.kt)("li",{parentName:"ul"},"A diferencia de reactive() , solo las propiedades de nivel ra\xedz son reactivas"),(0,o.kt)("li",{parentName:"ul"},"Las propiedades dentro de otras propiedades(profundas) no son reactivas")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <p>{{ data }}</p>\n</template>\n\n<script setup>\nimport { isReactive, shallowReactive } from "vue";\n\nconst data = shallowReactive({\n  // Propiedades nivel ra\xedz\n  propiedad1: 1,\n  propiedad2: {\n    // Propiedades profundas\n    id: 2,\n  },\n});\n\nsetTimeout(() => {\n  // Es reactivo (se vuelve a renderizar) porque es una propiedad de primer nivel\n  // Es reactivo (se vuelve a renderizar) porque es una propiedad de nivel raiz\n  data.propiedad1++;\n  // False -- No es un objeto reactive\n  console.log(isReactive(data.propiedad2));\n  \n}, 2000);\nsetTimeout(() => {\n  // Se modifica pero no es reactive (No se vuelve a renderizar)\n  data.propiedad2.id++;\n  console.log(data);\n}, 3000);\n<\/script>\n\n')),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Comportamiento no esperado")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"Si modifica una propiedad de primer nivel y una profunda en la misma funci\xf3n, se renderizan ambos cambios."),(0,o.kt)("li",{parentName:"ul"},"Cuando modifica algo anidado dentro de un shallowReactive , no significa que la mutaci\xf3n no se realice . Solo significa que no se le dice a Vue: debe verificar las diferencias entre M (modelo) y V (vista / plantilla / DOM) ahora ."),(0,o.kt)("li",{parentName:"ul"},"A la diferenciaci\xf3n no le importa lo que sea reactivo. Solo busca diferencias entre M y V. Si encuentra alguna, las actualiza."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/73034245/why-does-shallowreactive-not-work-as-expected"},"Link")," ")))))}v.isMDXComponent=!0}}]);