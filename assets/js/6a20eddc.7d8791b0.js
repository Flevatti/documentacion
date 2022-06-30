"use strict";(self.webpackChunkdocumentacion=self.webpackChunkdocumentacion||[]).push([[3803],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),v=p(n),u=o,m=v["".concat(c,".").concat(u)]||v[u]||d[u]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=v;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},6746:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1},i="Conceptos de Vue",l={unversionedId:"vue/README",id:"vue/README",title:"Conceptos de Vue",description:"Hay que completarla",source:"@site/docs/vue/README.md",sourceDirName:"vue",slug:"/vue/",permalink:"/documentacion/docs/vue/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/vue/README.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"vue",next:{title:"Proyecto #1",permalink:"/documentacion/docs/vue/proyecto"}},c={},p=[{value:"Como arrancar la App",id:"como-arrancar-la-app",level:2},{value:"Componentes",id:"componentes",level:2},{value:"Props",id:"props",level:2},{value:"v-if / v-else",id:"v-if--v-else",level:2},{value:"v-for",id:"v-for",level:2},{value:"v-bind",id:"v-bind",level:2},{value:"v-model",id:"v-model",level:2},{value:"v-on",id:"v-on",level:2},{value:"ciclos",id:"ciclos",level:2},{value:"Composition Api / Options Api",id:"composition-api--options-api",level:2},{value:"$emit",id:"emit",level:2},{value:"Watch",id:"watch",level:2},{value:"Reactive",id:"reactive",level:2}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"conceptos-de-vue"},"Conceptos de Vue"),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"}," Hay que completarla"))),(0,o.kt)("h2",{id:"como-arrancar-la-app"},"Como arrancar la App"),(0,o.kt)("h2",{id:"componentes"},"Componentes"),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("h2",{id:"v-if--v-else"},"v-if / v-else"),(0,o.kt)("h2",{id:"v-for"},"v-for"),(0,o.kt)("h2",{id:"v-bind"},"v-bind"),(0,o.kt)("h2",{id:"v-model"},"v-model"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.cursosdesarrolloweb.es/blog/v-model-en-vue-3/"},"Estudiar"))),(0,o.kt)("h2",{id:"v-on"},"v-on"),(0,o.kt)("h2",{id:"ciclos"},"ciclos"),(0,o.kt)("h2",{id:"composition-api--options-api"},"Composition Api / Options Api"),(0,o.kt)("h2",{id:"emit"},"$emit"),(0,o.kt)("h2",{id:"watch"},"Watch"),(0,o.kt)("h2",{id:"reactive"},"Reactive"))}d.isMDXComponent=!0}}]);