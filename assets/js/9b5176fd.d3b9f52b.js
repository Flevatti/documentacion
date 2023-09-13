"use strict";(self.webpackChunkdocumentacion=self.webpackChunkdocumentacion||[]).push([[4425],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(a),u=r,N=p["".concat(s,".").concat(u)]||p[u]||m[u]||i;return a?n.createElement(N,o(o({ref:t},d),{},{components:a})):n.createElement(N,o({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1059:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:3},o="Where",c={unversionedId:"SQL/where",id:"SQL/where",title:"Where",description:"Consultas con restricciones",source:"@site/docs/SQL/where.md",sourceDirName:"SQL",slug:"/SQL/where",permalink:"/documentacion/docs/SQL/where",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/SQL/where.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"SQL",previous:{title:"Select",permalink:"/documentacion/docs/SQL/select"},next:{title:"Distinct  / Order By / Limit / Offset",permalink:"/documentacion/docs/SQL/filtro"}},s={},l=[{value:"Consultas con restricciones",id:"consultas-con-restricciones",level:2},{value:"Operadores de String",id:"operadores-de-string",level:2}],d={toc:l};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"where"},"Where"),(0,r.kt)("h2",{id:"consultas-con-restricciones"},"Consultas con restricciones"),(0,r.kt)("p",null,"Si tuviera una tabla con cien millones de filas de datos, leer todas las filas ser\xeda ineficiente y quiz\xe1s incluso imposible."),(0,r.kt)("p",null,"Para filtrar ciertos resultados, necesitamos usar la cl\xe1usula WHERE en la consulta. La cl\xe1usula se aplica a cada fila de datos. Si la condici\xf3n se cumple, la fila se incluye, de lo contrario se descarta."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Las condiciones son ",(0,r.kt)("a",{parentName:"li",href:"https://fedeleva.github.io/documentacion/docs/Javascript/basico#operadores-relacionales"},"operadores relacionales"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT column, another_column, \u2026\nFROM mytable\nWHERE condition\n    AND/OR another_condition\n    AND/OR \u2026;\n")),(0,r.kt)("p",null,"M\xe1s cl\xe1usulas complejas pueden construirse usando las palabras clave  AND o OR   (es decir: Ruedas >= 4 y puertas  <= 2). Y a continuaci\xf3n se muestran algunos operadores \xfatiles que puede usar para datos num\xe9ricos (es decir, entero o punto flotante):"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"AND Y OR")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://fedeleva.github.io/documentacion/docs/Javascript/basico4#-and"},"\xbfC\xf3mo se usa AND?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://fedeleva.github.io/documentacion/docs/Javascript/basico4#-or"},"\xbfC\xf3mo se usa OR?"))))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Operador"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Condicion"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Ejemplo"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"= , != , < , <= , > , >="),(0,r.kt)("td",{parentName:"tr",align:"center"},"Operadores numericos estandar"),(0,r.kt)("td",{parentName:"tr",align:"center"},"col_name != 4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"BETWEEN ... AND ..."),(0,r.kt)("td",{parentName:"tr",align:"center"},"El  numero esta dentro del rango de dos valores (inclusive)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"col_name BETWEEN 1.5 AND 10.5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"NOT BETWEEN ... AND ..."),(0,r.kt)("td",{parentName:"tr",align:"center"},"El  numero NO esta dentro del rango de dos valores (inclusive)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"col_name  NOT BETWEEN 1.5 AND 10.5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"IN (...)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"El numero existe en una lista"),(0,r.kt)("td",{parentName:"tr",align:"center"},"col_name IN (2,4,6)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"NOT IN (...)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"El numero NO existe en una lista"),(0,r.kt)("td",{parentName:"tr",align:"center"},"col_name NOT IN (2,4,6)")))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Adem\xe1s de hacer que los resultados sean m\xe1s f\xe1ciles de entender, escribir cl\xe1usulas para restringir el conjunto de filas devueltas tambi\xe9n permite que la consulta se ejecute m\xe1s r\xe1pido debido a la reducci\xf3n en la devoluci\xf3n de datos innecesarios."))),(0,r.kt)("p",null,"Ejemplos:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM movies where id = 6\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"\nSELECT * FROM movies where Year between 2000 AND 2010\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM movies where Year NOT between 2000 AND 2010\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM movies where ID in (1,2,3,4,5)\n")),(0,r.kt)("h2",{id:"operadores-de-string"},"Operadores de String"),(0,r.kt)("p",null,"Al escribir cl\xe1usulas WHERE, SQL admite una serie de operadores \xfatiles para hacer cosas como la comparaci\xf3n de cadenas y la coincidencia de patrones. A continuaci\xf3n, mostramos algunos operadores espec\xedficos de datos de texto comunes:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Operador"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Condicion"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Ejemplo"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"="),(0,r.kt)("td",{parentName:"tr",align:"center"},"Comparacion de cadena exacta sensible a mayuscula y minuscula (observe que el \xfanico es igual)"),(0,r.kt)("td",{parentName:"tr",align:"center"},'col_name = "abc"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"!=  o ","<",">"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Comparacion de desigualdad de  cadena exacta sensible a mayuscula y minuscula (observe que el \xfanico es igual)"),(0,r.kt)("td",{parentName:"tr",align:"center"},'col_name != "abc"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"LIKE"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Comparaci\xf3n de cadenas exactas que no distinguen entre may\xfasculas y min\xfasculas"),(0,r.kt)("td",{parentName:"tr",align:"center"},'col_name LIKE "ABC"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"NOT LIKE"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Comparaci\xf3n de desigualdad de  cadenas exactas que no distinguen entre may\xfasculas y min\xfasculas"),(0,r.kt)("td",{parentName:"tr",align:"center"},'col_name NOT LIKE "ABC"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"%"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Se usa en cualquier lugar de una cadena para que coincida con una secuencia de cero o m\xe1s caracteres (funciona con el LIKE o NOT LIKE)"),(0,r.kt)("td",{parentName:"tr",align:"center"},'col_name LIKE "%at%"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"_"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Se usa en cualquier lugar de una cadena para que coincida con un solo caracter (funciona con el LIKE o NOT LIKE)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"col",(0,r.kt)("em",{parentName:"td"},'name LIKE "AN'),'"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"IN (...)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"La cadena existe en una lista"),(0,r.kt)("td",{parentName:"tr",align:"center"},'col_name IN ("a","b" , "c")')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"NOT IN (...)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"La cadena  no existe en una lista"),(0,r.kt)("td",{parentName:"tr",align:"center"},'col_name NOT IN ("a","b" , "c")')))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Para optimizar el LIKE, trata que no arranque con un comod\xedn (% o _)"))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\xbfSab\xedas?")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Todas las cadenas deben estar entre comillas para que el analizador de consultas pueda distinguir las palabras de la cadena de las palabras clave SQL."))),(0,r.kt)("p",null,"Ejemplos:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM movies WHERE Title LIKE 'Toy Story%'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT * FROM movies WHERE Director = "John Lasseter"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT * FROM movies WHERE Director != "John Lasseter"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"\nSELECT * FROM movies WHERE Title LIKE 'WALL-%'\n\n")))}m.isMDXComponent=!0}}]);