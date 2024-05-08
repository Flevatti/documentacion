"use strict";(self.webpackChunkdocumentacion=self.webpackChunkdocumentacion||[]).push([[2743],{5680:(e,a,n)=>{n.d(a,{xA:()=>u,yg:()=>g});var t=n(6540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=t.createContext({}),i=function(e){var a=t.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},u=function(e){var a=i(e.components);return t.createElement(c.Provider,{value:a},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=i(n),m=r,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?t.createElement(g,s(s({ref:a},u),{},{components:n})):t.createElement(g,s({ref:a},u))}));function g(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l[d]="string"==typeof e?e:r,s[1]=l;for(var i=2;i<o;i++)s[i]=n[i];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3321:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var t=n(8168),r=(n(6540),n(5680));const o={sidebar_position:2},s="Select",l={unversionedId:"SQL/select",id:"SQL/select",title:"Select",description:"- Para recuperar datos de una base de datos SQL, necesitamos usar SELECT, que a menudo se denomina coloquialmente como consulta.",source:"@site/docs/SQL/select.md",sourceDirName:"SQL",slug:"/SQL/select",permalink:"/documentacion/docs/SQL/select",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/SQL/select.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"SQL",previous:{title:"SQL",permalink:"/documentacion/docs/SQL/"},next:{title:"Where",permalink:"/documentacion/docs/SQL/where"}},c={},i=[],u={toc:i},d="wrapper";function p(e){let{components:a,...n}=e;return(0,r.yg)(d,(0,t.A)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"select"},"Select"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Para recuperar datos de una base de datos SQL, necesitamos usar SELECT, que a menudo se denomina coloquialmente como consulta."),(0,r.yg)("li",{parentName:"ul"},"Una consulta  es solo una declaraci\xf3n que declara qu\xe9 datos estamos buscando, d\xf3nde encontrarlos en la base de datos y, opcionalmente, c\xf3mo transformarlos antes de que sean devueltos. "),(0,r.yg)("li",{parentName:"ul"},"Sin embargo, tiene una sintaxis espec\xedfica."),(0,r.yg)("li",{parentName:"ul"},"Una tabla en una Base de datos SQL es como una tabla de excel:\n",(0,r.yg)("img",{parentName:"li",src:"https://cdn.exceltotal.com/0103/como-crear-una-tabla-en-excel-01.png",alt:"Tabla de excel"})),(0,r.yg)("li",{parentName:"ul"},"Puede pensar en una tabla de SQL como un tipo de entidad (es decir, perros , en POO es una clase) que guarda datos sobre algo (personas , perros , etc), y cada fila en esa tabla como una instancia(un objeto en POO) espec\xedfica de ese tipo (es decir, un pug, un beagle, un pug de diferente color, etc.). Esto significa que las columnas entonces representar\xedan las propiedades comunes compartidas por todas las instancias de esa entidad (es decir, el color del pelaje, la longitud de la cola, etc.).")),(0,r.yg)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.yg)("div",{parentName:"div",className:"admonition-heading"},(0,r.yg)("h5",{parentName:"div"},(0,r.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,r.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"En POO")),(0,r.yg)("div",{parentName:"div",className:"admonition-content"},(0,r.yg)("ul",{parentName:"div"},(0,r.yg)("li",{parentName:"ul"},"Entidad : Clase"),(0,r.yg)("li",{parentName:"ul"},"Instancia: Un objeto de la clase")))),(0,r.yg)("p",null,"Y dada una tabla de datos, la consulta m\xe1s b\xe1sica que podr\xedamos escribir ser\xeda una que seleccione un par de columnas (propiedades) por fila (instancia)"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT column, another_column, \u2026\nFROM mytable;\n")),(0,r.yg)("p",null,"El resultado de esta consulta ser\xe1 un conjunto bidimensional de filas y columnas, efectivamente una copia de la tabla, pero solo con las columnas que solicitamos."),(0,r.yg)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.yg)("div",{parentName:"div",className:"admonition-heading"},(0,r.yg)("h5",{parentName:"div"},(0,r.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,r.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.yg)("div",{parentName:"div",className:"admonition-content"},(0,r.yg)("p",{parentName:"div"},"Si queremos recuperar absolutamente todas las columnas de datos de una tabla, podemos usar la abreviatura asterisco (* ) en lugar de enumerar todos los nombres de las columnas individualmente."),(0,r.yg)("p",{parentName:"div"},"Con el asterisco, recuperamos todas las filas de la tabla"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT * \nFROM mytable;\n")),(0,r.yg)("p",null,"Ejemplos"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT title FROM movies;\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT Director FROM movies;\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT title , Director FROM movies;\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT Title , Year FROM movies;\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM movies;\n")))}p.isMDXComponent=!0}}]);