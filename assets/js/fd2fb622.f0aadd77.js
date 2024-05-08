"use strict";(self.webpackChunkdocumentacion=self.webpackChunkdocumentacion||[]).push([[133],{5680:(e,n,a)=>{a.d(n,{xA:()=>m,yg:()=>g});var o=a(6540);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,o,t=function(e,n){if(null==e)return{};var a,o,t={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var c=o.createContext({}),l=function(e){var n=o.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},m=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var a=e.components,t=e.mdxType,r=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=l(a),u=t,g=p["".concat(c,".").concat(u)]||p[u]||d[u]||r;return a?o.createElement(g,s(s({ref:n},m),{},{components:a})):o.createElement(g,s({ref:n},m))}));function g(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=a.length,s=new Array(r);s[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:t,s[1]=i;for(var l=2;l<r;l++)s[l]=a[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},818:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=a(8168),t=(a(6540),a(5680));const r={sidebar_position:5},s="Consumir API",i={unversionedId:"React/api",id:"React/api",title:"Consumir API",description:"Empezamos el proyecto",source:"@site/docs/React/api.md",sourceDirName:"React",slug:"/React/api",permalink:"/documentacion/docs/React/api",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/React/api.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"React",previous:{title:"App todo",permalink:"/documentacion/docs/React/todoApp"},next:{title:"React Router v6",permalink:"/documentacion/docs/React/affect"}},c={},l=[{value:"Empezamos el proyecto",id:"empezamos-el-proyecto",level:2},{value:"API A UTILIZAR",id:"api-a-utilizar",level:3},{value:"useEffect",id:"useeffect",level:2},{value:"Efectos sin saneamiento",id:"efectos-sin-saneamiento",level:3},{value:"\xbfQu\xe9 hace useEffect?",id:"qu\xe9-hace-useeffect",level:3},{value:"Consejo: Omite efectos para optimizar el rendimiento",id:"consejo-omite-efectos-para-optimizar-el-rendimiento",level:3},{value:"En el Array podemos poner los estados(valores) a los que estamos pendiente",id:"en-el-array-podemos-poner-los-estadosvalores-a-los-que-estamos-pendiente",level:3},{value:"Formulario",id:"formulario",level:2},{value:"Comunicacion entre Componentes",id:"comunicacion-entre-componentes",level:2},{value:"Componentes",id:"componentes",level:2},{value:"Spinner de carga",id:"spinner-de-carga",level:2},{value:"customHook opcional",id:"customhook-opcional",level:2},{value:"LocalStorage",id:"localstorage",level:2}],m={toc:l},p="wrapper";function d(e){let{components:n,...a}=e;return(0,t.yg)(p,(0,o.A)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"consumir-api"},"Consumir API"),(0,t.yg)("h2",{id:"empezamos-el-proyecto"},"Empezamos el proyecto"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-powershell"},"npx create-react-app consumir-api\ncd consumir-api\n")),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"Empezamos el proyecto"),(0,t.yg)("li",{parentName:"ol"},"Borramos toda los archivos de la carpeta src excepto el index.js"),(0,t.yg)("li",{parentName:"ol"},"Ponemos Bootstrap en el index.html"),(0,t.yg)("li",{parentName:"ol"},"Creamos App.jsx")),(0,t.yg)("h3",{id:"api-a-utilizar"},"API A UTILIZAR"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://rickandmortyapi.com/"},"link")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://rickandmortyapi.com/api/"},"ruta"))),(0,t.yg)("h2",{id:"useeffect"},"useEffect"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://es.reactjs.org/docs/hooks-effect.html"},"link")),(0,t.yg)("li",{parentName:"ul"},"El Hook de efecto te permite llevar a cabo efectos secundarios en componentes "),(0,t.yg)("li",{parentName:"ul"},"Peticiones de datos, suscripciones y actualizaciones del DOM en componentes de React ser\xedan ejemplos de efectos secundarios."),(0,t.yg)("li",{parentName:"ul"},"Sirven para estar pendiente de cierto elemento del  componente y que cuando cambie , ejecute algo.")),(0,t.yg)("div",{className:"admonition admonition-tip alert alert--success"},(0,t.yg)("div",{parentName:"div",className:"admonition-heading"},(0,t.yg)("h5",{parentName:"div"},(0,t.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,t.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,t.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,t.yg)("div",{parentName:"div",className:"admonition-content"},(0,t.yg)("ul",{parentName:"div"},(0,t.yg)("li",{parentName:"ul"},"Si est\xe1s familiarizado con el ciclo de vida de las clases de React y sus m\xe9todos, el Hook useEffect equivale a componentDidMount, componentDidUpdate y componentWillUnmount combinados."),(0,t.yg)("li",{parentName:"ul"},"Los m\xe9todos que corresponden al ciclo de vida solo se pueden usar en las ",(0,t.yg)("a",{parentName:"li",href:"https://flevatti.github.io/documentacion/docs/React/otros2#reactcomponent"},"clases de React.")," ya que en la actualidad fueron remplazados por los hooks.")))),(0,t.yg)("h3",{id:"efectos-sin-saneamiento"},"Efectos sin saneamiento"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"En ciertas ocasiones, queremos ejecutar c\xf3digo adicional despu\xe9s de que React haya renderizado el DOM. Peticiones de red, mutaciones del DOM y registros, son ejemplos comunes de efectos que no requieren una acci\xf3n de saneamiento."),(0,t.yg)("li",{parentName:"ul"},"Decimos esto porque podemos ejecutarlos y olvidarnos de ellos inmediatamente. ")),(0,t.yg)("p",null,"App.jsx"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},"import React, { useEffect, useState } from 'react'\n\nconst App = () => {\n    const [contador , setContador] = useState(0);\n  // useEffect(callback)\n    useEffect(() => { console.log(\"renderizado\")});\n  return (\n    <div>\n        <h1>App Rick and Morty</h1>\n        <h3>{contador}</h3>\n        <button onClick={()=> {setContador(contador+1)}}>Aumentar</button>\n    </div>\n  )\n}\n\nexport default App\n\n")),(0,t.yg)("div",{className:"admonition admonition-tip alert alert--success"},(0,t.yg)("div",{parentName:"div",className:"admonition-heading"},(0,t.yg)("h5",{parentName:"div"},(0,t.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,t.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,t.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Observacion")),(0,t.yg)("div",{parentName:"div",className:"admonition-content"},(0,t.yg)("p",{parentName:"div"}," useEffect  ejecuta el callback cuando:"),(0,t.yg)("ul",{parentName:"div"},(0,t.yg)("li",{parentName:"ul"},"se renderiza el componente por primera vez."),(0,t.yg)("li",{parentName:"ul"},"ocurre un cambio en el componente.")))),(0,t.yg)("h3",{id:"qu\xe9-hace-useeffect"},"\xbfQu\xe9 hace useEffect?"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Al usar este Hook, le estamos indicando a React que el componente tiene que hacer algo despu\xe9s de renderizarse."),(0,t.yg)("li",{parentName:"ul"},"React recordar\xe1 la funci\xf3n que le hemos pasado(callback) (nos referiremos a ella como nuestro \u201cefecto\u201d), y la llamar\xe1 m\xe1s tarde despu\xe9s de actualizar el DOM."),(0,t.yg)("li",{parentName:"ul"},"\xbfSe ejecuta useEffect(el callback) despu\xe9s de cada renderizado? \xa1S\xed! Por defecto se ejecuta despu\xe9s del primer renderizado y despu\xe9s de cada actualizaci\xf3n")),(0,t.yg)("h3",{id:"consejo-omite-efectos-para-optimizar-el-rendimiento"},"Consejo: Omite efectos para optimizar el rendimiento"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"En algunos casos, sanear o aplicar el efecto despu\xe9s de cada renderizado (de cada actualizaci\xf3n del componente) puede crear problemas de rendimiento."),(0,t.yg)("li",{parentName:"ul"},"Puedes indicarle a React que omita aplicar un efecto si ciertos valores no han cambiado entre renderizados. \xd3sea que solo aplique el efecto si un valor especifico ha cambiado"),(0,t.yg)("li",{parentName:"ul"},"Para hacerlo, pasa un array como segundo argumento opcional a useEffect:")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'    // useEffect(callback , [array])\n        useEffect(() => { console.log("renderizado")} , []);\n\n')),(0,t.yg)("div",{className:"admonition admonition-tip alert alert--success"},(0,t.yg)("div",{parentName:"div",className:"admonition-heading"},(0,t.yg)("h5",{parentName:"div"},(0,t.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,t.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,t.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Observacion")),(0,t.yg)("div",{parentName:"div",className:"admonition-content"},(0,t.yg)("p",{parentName:"div"},"El callback solo se ejecuta en el primer renderizado"))),(0,t.yg)("h3",{id:"en-el-array-podemos-poner-los-estadosvalores-a-los-que-estamos-pendiente"},"En el Array podemos poner los estados(valores) a los que estamos pendiente"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},"// useEffect(callback , [array])\n    useEffect(() => { console.log(`contador  ${contador}`)} , [contador]);\n\n")),(0,t.yg)("div",{className:"admonition admonition-tip alert alert--success"},(0,t.yg)("div",{parentName:"div",className:"admonition-heading"},(0,t.yg)("h5",{parentName:"div"},(0,t.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,t.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,t.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Observacion")),(0,t.yg)("div",{parentName:"div",className:"admonition-content"},(0,t.yg)("p",{parentName:"div"},"El callback se ejecuta cada vez que la variable de estado contador cambie."))),(0,t.yg)("div",{className:"admonition admonition-tip alert alert--success"},(0,t.yg)("div",{parentName:"div",className:"admonition-heading"},(0,t.yg)("h5",{parentName:"div"},(0,t.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,t.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,t.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,t.yg)("div",{parentName:"div",className:"admonition-content"},(0,t.yg)("p",{parentName:"div"},"Pueden crear varios useEffect"))),(0,t.yg)("div",{className:"admonition admonition-tip alert alert--success"},(0,t.yg)("div",{parentName:"div",className:"admonition-heading"},(0,t.yg)("h5",{parentName:"div"},(0,t.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,t.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,t.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,t.yg)("div",{parentName:"div",className:"admonition-content"},(0,t.yg)("p",{parentName:"div"},"M\xe1s adelante conoceremos los ",(0,t.yg)("a",{parentName:"p",href:"https://es.reactjs.org/docs/hooks-effect.html#effects-with-cleanup"},"Efectos con saneamiento")," "))),(0,t.yg)("h2",{id:"formulario"},"Formulario"),(0,t.yg)("p",null,"src/components/Formulario.js"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},"import React from 'react'\n\nconst Formulario = () => {\n  return (\n    <div>Formulario</div>\n  )\n}\n\nexport default Formulario\n\n")),(0,t.yg)("div",{className:"admonition admonition-tip alert alert--success"},(0,t.yg)("div",{parentName:"div",className:"admonition-heading"},(0,t.yg)("h5",{parentName:"div"},(0,t.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,t.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,t.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,t.yg)("div",{parentName:"div",className:"admonition-content"},(0,t.yg)("p",{parentName:"div"},"los componentes empiezan en mayuscula"))),(0,t.yg)("p",null,"App.jsx"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},"import React from 'react'\nimport Formulario from './components/Formulario';\n\nconst App = () => {\n  return (\n    <div>\n        <h1>App Rick and Morty</h1>\n         <Formulario/>\n    </div>\n  )\n}\n\nexport default App\n\n")),(0,t.yg)("p",null,"src/hooks/useFormulario.js"),(0,t.yg)("div",{className:"admonition admonition-tip alert alert--success"},(0,t.yg)("div",{parentName:"div",className:"admonition-heading"},(0,t.yg)("h5",{parentName:"div"},(0,t.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,t.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,t.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,t.yg)("div",{parentName:"div",className:"admonition-content"},(0,t.yg)("ul",{parentName:"div"},(0,t.yg)("li",{parentName:"ul"},"Los hooks  sirven para varios proyectos, como en este caso"),(0,t.yg)("li",{parentName:"ul"},"No los borres")))),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},"import React, { useState } from 'react'\n\nexport const useFormulario = ( initialState = {}) => {\n    const [inputs , setInputs] = useState(initialState)\n    const handleChange = e => {\n        const { name, value, checked, type } = e.target;\n        setInputs((old) => ({\n            ...old,\n            [name]: type === \"checkbox\" ? checked : value\n        }))\n    }\n    const reset = () => {\n         setInputs(initialState);\n    }\n  return [inputs , handleChange , reset];\n}\n\n")),(0,t.yg)("p",null,"src/components/Formulario.js"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'import React from \'react\'\nimport { useFormulario } from \'../hooks/useFormulario\'\n\nconst Formulario = () => {\n    const [inputs , handleChange , reset] = useFormulario({\n        nombre:\'\'\n    })\n    const {nombre} = inputs;\n    const handleSubmit = e => {\n        e.preventDefault();\n        \n        reset();\n    }\n  return (\n    <form onSubmit={handleSubmit}>\n       <input\n          type="text"\n          placeholder="Ingrese personaje"\n          className="form-control mb-2"\n           value={nombre}\n           onChange={handleChange}\n           name="nombre"\n          />\n          <button  className="btn btn-dark"\n          type="submit"\n          >Buscar</button>\n    </form>\n  )\n}\n\nexport default Formulario\n\n')),(0,t.yg)("h2",{id:"comunicacion-entre-componentes"},"Comunicacion entre Componentes"),(0,t.yg)("p",null,"-1 Usamos ",(0,t.yg)("a",{parentName:"p",href:"https://sweetalert2.github.io/#download"},"sweet alert 2")," para las alertas "),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-powershell"},"npm install sweetalert2\n")),(0,t.yg)("p",null,"App.jsx"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},"import React, { useState } from 'react'\nimport Formulario from './components/Formulario';\nimport PintarDatos from './components/PintarDatos';\n\nconst App = () => {\n    const [nombrePersonaje , setNombrePersonaje] = useState('');\n  return (\n    <div>\n        <h1>App Rick and Morty</h1>\n         <Formulario setNombrePersonaje={setNombrePersonaje}/>\n         <PintarDatos nombrePersonaje={nombrePersonaje}/>\n    </div>\n  )\n}\n\nexport default App\n\n")),(0,t.yg)("p",null,"src/components/Formulario.jsx"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},"import React from 'react'\nimport Swal from 'sweetalert2'\nimport { useFormulario } from '../hooks/useFormulario'\n\nconst Formulario = ({setNombrePersonaje}) => {\n    const [inputs , handleChange , reset] = useFormulario({\n        nombre:''\n    })\n    const {nombre} = inputs;\n    const handleSubmit = e => {\n        e.preventDefault();\n        // Si esta vacio\n        if (!nombre.trim()) {\n            return Swal.fire({\n                title: 'Error!',\n                text: 'Escriba algo por favor',\n                icon: 'error',\n              })\n        }\n        setNombrePersonaje(nombre.trim().toLowerCase());\n        reset();\n    }\n  return (\n    <form onSubmit={handleSubmit}>\n       <input\n          type=\"text\"\n          placeholder=\"Ingrese personaje\"\n          className=\"form-control mb-2\"\n           value={nombre}\n           onChange={handleChange}\n           name=\"nombre\"\n          />\n          <button  className=\"btn btn-dark\"\n          type=\"submit\"\n          >Buscar</button>\n    </form>\n  )\n}\n\nexport default Formulario\n\n")),(0,t.yg)("h2",{id:"componentes"},"Componentes"),(0,t.yg)("p",null,"src/components/PintarDatos.jsx"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},"import React, { useEffect, useState } from 'react'\nimport Swal from 'sweetalert2'\nimport Personaje from './Personaje';\nconst PintarDatos = ({nombrePersonaje}) => {\n  const [personajes,setPersonajes] = useState([]);\n   useEffect(() => {\n    consumirAPI(nombrePersonaje);\n   } , [nombrePersonaje])\n   const consumirAPI = async(nombre) => {\n      try {\n          const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}&status=alive`)\n          if (!res.ok) {\n            return Swal.fire({\n              title: 'Error!',\n              text: 'Personaje no encontrado',\n              icon: 'error',\n            })\n\n           \n          }\n          const datos = await res.json();\n          setPersonajes(datos.results);\n      } catch(error) {\n        console.log(error);\n      } finally {\n\n      }\n   }\n\n  return (\n    <div className=\"row mt-2\">\n       {\n         personajes.map(item => (\n            <Personaje key={item.id}  personaje={item} />\n         ))\n       }\n    </div>\n  )\n}\n\nexport default PintarDatos\n\n")),(0,t.yg)("p",null,"src/components/Personaje.jsx"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'import React from \'react\'\n\nconst Personaje = ({personaje}) => {\n    const {name , species , image} = personaje\n  return (\n    <div className="col-md-4 mb-2">\n        <div className="card">\n            <img src={image} alt={`imagen-${name}`} className="card-img-top" />\n            <h5>{name}</h5>\n            <p>{species}</p>\n        </div>\n    </div>\n  )\n}\n\nexport default Personaje\n\n')),(0,t.yg)("h2",{id:"spinner-de-carga"},"Spinner de carga"),(0,t.yg)("p",null,"src/components/Loading.jsx"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'import React from \'react\'\n\nconst Loading = () => {\n  return (\n    <div className="d-flex justify-content-center">\n            <div className="spinner-border" role="status">\n                <span className="visually-hidden">Loading...</span>\n            </div>\n        </div>\n  )\n}\n\nexport default Loading\n\n')),(0,t.yg)("p",null,"src/components/PintarDatos.jsx"),(0,t.yg)("div",{className:"admonition admonition-tip alert alert--success"},(0,t.yg)("div",{parentName:"div",className:"admonition-heading"},(0,t.yg)("h5",{parentName:"div"},(0,t.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,t.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,t.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Observacion")),(0,t.yg)("div",{parentName:"div",className:"admonition-content"},(0,t.yg)("ul",{parentName:"div"},(0,t.yg)("li",{parentName:"ul"},"Depende del estado del componente retorna el componente de cargando o los componentes de Personajes.")))),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},"import React, { useEffect, useState } from 'react'\nimport Swal from 'sweetalert2'\nimport Loading from './Loading';\nimport Personaje from './Personaje';\nconst PintarDatos = ({nombrePersonaje}) => {\n  const [personajes,setPersonajes] = useState([]);\n  const [loading , setLoading] = useState(false);\n   useEffect(() => {\n    consumirAPI(nombrePersonaje);\n   } , [nombrePersonaje])\n   const consumirAPI = async(nombre) => {\n     setLoading(true);\n      try {\n          const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}&status=alive`)\n          if (!res.ok) {\n            return Swal.fire({\n              title: 'Error!',\n              text: 'Personaje no encontrado',\n              icon: 'error',\n            })\n\n           \n          }\n          const datos = await res.json();\n          setPersonajes(datos.results);\n      } catch(error) {\n        console.log(error);\n      } finally {\n        setLoading(false);\n      }\n   }\n   if (loading) {\n     return <Loading/>\n   }\n\n  return (\n    <div className=\"row mt-2\">\n       {\n         personajes.map(item => (\n            <Personaje key={item.id}  personaje={item} />\n         ))\n       }\n    </div>\n  )\n}\n\nexport default PintarDatos\n\n")),(0,t.yg)("h2",{id:"customhook-opcional"},"customHook opcional"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'\nimport Swal from "sweetalert2";\nimport { useEffect, useState } from "react";\n\nexport const useFetch = (nombre) => {\n    const [personajes, setPersonajes] = useState([]);\n    const [loading, setLoading] = useState(false);\n\n    useEffect(() => {\n        obtenerCharacter(nombre);\n    }, [nombre]);\n\n    const obtenerCharacter = async (nombre) => {\n        setLoading(true);\n        try {\n            const res = await fetch(\n                `https://rickandmortyapi.com/api/character/?name=${nombre}&status=alive`\n            );\n\n            if (!res.ok) {\n                console.log(res);\n                return Swal.fire({\n                    title: "Error!",\n                    text: `no existe ${nombre}`,\n                    icon: "error",\n                });\n            }\n\n            const data = await res.json();\n            console.log([...data.results]);\n            setPersonajes([...data.results]);\n        } catch (error) {\n            console.log(error);\n            return Swal.fire({\n                title: "Error!",\n                text: `Error de servidor`,\n                icon: "error",\n            });\n        } finally {\n            setLoading(false);\n        }\n    };\n\n    return [personajes, loading];\n};\n\n')),(0,t.yg)("h2",{id:"localstorage"},"LocalStorage"),(0,t.yg)("p",null,"App.jsx"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},"import React, { useEffect, useState } from 'react'\nimport Formulario from './components/Formulario';\nimport PintarDatos from './components/PintarDatos';\n\nconst App = () => {\n    const [nombrePersonaje , setNombrePersonaje] = useState('');\n    useEffect(() => {\n          if (localStorage.getItem('nombreAPI')) {\n            setNombrePersonaje(JSON.parse(localStorage.getItem('nombreAPI')))\n          }\n    } , [])\n    useEffect(() => {\n      localStorage.setItem('nombreAPI' , JSON.stringify(nombrePersonaje))\n    } , [nombrePersonaje])\n  return (\n    <div>\n        <h1>App Rick and Morty</h1>\n         <Formulario setNombrePersonaje={setNombrePersonaje}/>\n         <PintarDatos nombrePersonaje={nombrePersonaje}/>\n    </div>\n  )\n}\n\nexport default App\n\n")))}d.isMDXComponent=!0}}]);