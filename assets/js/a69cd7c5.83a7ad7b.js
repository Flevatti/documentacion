"use strict";(self.webpackChunkdocumentacion=self.webpackChunkdocumentacion||[]).push([[23],{3905:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>u});var l=n(7294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,l,t=function(e,a){if(null==e)return{};var n,l,t={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var r=l.createContext({}),d=function(e){var a=l.useContext(r),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},c=function(e){var a=d(e.components);return l.createElement(r.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},m=l.forwardRef((function(e,a){var n=e.components,t=e.mdxType,i=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(n),u=t,v=m["".concat(r,".").concat(u)]||m[u]||p[u]||i;return n?l.createElement(v,o(o({ref:a},c),{},{components:n})):l.createElement(v,o({ref:a},c))}));function u(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var r in a)hasOwnProperty.call(a,r)&&(s[r]=a[r]);s.originalType=e,s.mdxType="string"==typeof e?e:t,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2369:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>r,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var l=n(7462),t=(n(7294),n(3905));const i={sidebar_position:10},o="Flexbox",s={unversionedId:"CSS/flexbox",id:"CSS/flexbox",title:"Flexbox",description:"Viene de una caja flexible",source:"@site/docs/CSS/flexbox.md",sourceDirName:"CSS",slug:"/CSS/flexbox",permalink:"/documentacion/docs/CSS/flexbox",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CSS/flexbox.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"CSS",previous:{title:"Grid",permalink:"/documentacion/docs/CSS/Grid"},next:{title:"Animaciones",permalink:"/documentacion/docs/CSS/animaciones"}},r={},d=[{value:"Ejes",id:"ejes",level:2},{value:"Main axis : Eje X",id:"main-axis--eje-x",level:3},{value:"Cross axis : Eje Y",id:"cross-axis--eje-y",level:3},{value:"Por defecto",id:"por-defecto",level:2},{value:"Cross axis",id:"cross-axis",level:3},{value:"Main axis",id:"main-axis",level:3},{value:"items",id:"items",level:3},{value:"Propiedad display",id:"propiedad-display",level:2},{value:"Propiedades del contenedor",id:"propiedades-del-contenedor",level:2},{value:"flex-direction",id:"flex-direction",level:2},{value:"Valores",id:"valores",level:3},{value:"row",id:"row",level:4},{value:"row-reverse",id:"row-reverse",level:4},{value:"column",id:"column",level:4},{value:"column-reverse",id:"column-reverse",level:4},{value:"flex-grap",id:"flex-grap",level:2},{value:"valores",id:"valores-1",level:3},{value:"wrap",id:"wrap",level:4},{value:"wrap-reverse",id:"wrap-reverse",level:4},{value:"no-wrap",id:"no-wrap",level:4},{value:"flex-flow",id:"flex-flow",level:2},{value:"justify-content",id:"justify-content",level:2},{value:"valores",id:"valores-2",level:3},{value:"center",id:"center",level:4},{value:"space-around",id:"space-around",level:4},{value:"space-between",id:"space-between",level:4},{value:"space-evenly",id:"space-evenly",level:4},{value:"flex-start",id:"flex-start",level:4},{value:"flex-end",id:"flex-end",level:4},{value:"align-items y align-content",id:"align-items-y-align-content",level:2},{value:"valores",id:"valores-3",level:3},{value:"flex-start",id:"flex-start-1",level:4},{value:"flex-end",id:"flex-end-1",level:4},{value:"center",id:"center-1",level:4},{value:"space-between",id:"space-between-1",level:4},{value:"space-around",id:"space-around-1",level:4},{value:"stretch",id:"stretch",level:4},{value:"baseline",id:"baseline",level:4},{value:"Propiedades para los  items",id:"propiedades-para-los--items",level:2},{value:"align-self",id:"align-self",level:2},{value:"valores",id:"valores-4",level:3},{value:"flex-start",id:"flex-start-2",level:4},{value:"flex-end",id:"flex-end-2",level:4},{value:"center",id:"center-2",level:4},{value:"space-between",id:"space-between-2",level:4},{value:"space-around",id:"space-around-2",level:4},{value:"stretch",id:"stretch-1",level:4},{value:"baseline",id:"baseline-1",level:4},{value:"flex-glow",id:"flex-glow",level:2},{value:"flex-basis",id:"flex-basis",level:2},{value:"flex-shrink",id:"flex-shrink",level:2},{value:"flex",id:"flex",level:2},{value:"order",id:"order",level:2},{value:"Margin",id:"margin",level:2},{value:"Practica",id:"practica",level:2}],c={toc:d};function p(e){let{components:a,...i}=e;return(0,t.kt)("wrapper",(0,l.Z)({},c,i,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"flexbox"},"Flexbox"),(0,t.kt)("p",null,"Viene de una ",(0,t.kt)("strong",{parentName:"p"},"caja flexible"),"\nRequiere de un ",(0,t.kt)("strong",{parentName:"p"},"conteiner y de items(hijos del conteiner)")),(0,t.kt)("h2",{id:"ejes"},"Ejes"),(0,t.kt)("h3",{id:"main-axis--eje-x"},"Main axis : Eje X"),(0,t.kt)("p",null,"Es la direccion horizontal"),(0,t.kt)("p",null,"Si juntamos main-start y main-end obtenemos el main axis"),(0,t.kt)("h3",{id:"cross-axis--eje-y"},"Cross axis : Eje Y"),(0,t.kt)("p",null,"Es la direccion vertical"),(0,t.kt)("p",null,"Si juntamos el cross-start y el cross-end tenemos el cross axis\n",(0,t.kt)("img",{parentName:"p",src:"https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/30/posts/30183/image/axes.png",alt:"Ejes"}),"\n",(0,t.kt)("img",{alt:"main start",src:n(5611).Z,width:"867",height:"463"}),"\n",(0,t.kt)("img",{alt:"cross start",src:n(7645).Z,width:"865",height:"465"})),(0,t.kt)("h2",{id:"por-defecto"},"Por defecto"),(0,t.kt)("h3",{id:"cross-axis"},"Cross axis"),(0,t.kt)("p",null,"De aribba para abajo"),(0,t.kt)("h3",{id:"main-axis"},"Main axis"),(0,t.kt)("p",null,"de Izquierda a derecha"),(0,t.kt)("h3",{id:"items"},"items"),(0,t.kt)("p",null,"Los hijos se adaptan al contenedor y se posicionan uno alado del otro(main axis). Pero la altura siempre es la misma."),(0,t.kt)("p",null,"Se modifica el ancho de los flex-item autom\xe1ticamente para que tengan la misma altura (se ajusta al contenido)."),(0,t.kt)("h2",{id:"propiedad-display"},"Propiedad display"),(0,t.kt)("p",null,"Va al contenedor para que se comporte como flexbox"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-css"},"display:flex\n")),(0,t.kt)("h2",{id:"propiedades-del-contenedor"},"Propiedades del contenedor"),(0,t.kt)("h2",{id:"flex-direction"},"flex-direction"),(0,t.kt)("p",null,"Con esta propiedad podemos cambiar la direcci\xf3n del main axis"),(0,t.kt)("p",null,"Si cambiamos el main axis, autom\xe1ticamente el cross axis se cambia."),(0,t.kt)("p",null,"Se aplica al contenedor(afecta a los \xedtems)."),(0,t.kt)("p",null,"Flex-direction cambia la direcci\xf3n del main axis."),(0,t.kt)("p",null," Define la direcci\xf3n de los elementos en el contenedor, y acepta los siguientes valores:"),(0,t.kt)("h3",{id:"valores"},"Valores"),(0,t.kt)("h4",{id:"row"},"row"),(0,t.kt)("p",null,"Los Elementos son colocados en la misma direcci\xf3n del texto. (de izquierda a derecha"),(0,t.kt)("p",null,"Valor por defecto"),(0,t.kt)("p",null,"Es una fila, los hijos del contenedor van a comportarse como filas(de izquierda a derecha)"),(0,t.kt)("h4",{id:"row-reverse"},"row-reverse"),(0,t.kt)("p",null,"Elementos son colocados en la direcci\xf3n opuesta al texto (de derecha a izquierda)\nEl main axis cambia su direcci\xf3n pero de manera vertical(no cambian los ejes, sino la direcci\xf3n). El main axis va a correr de derecha a izquierda."),(0,t.kt)("h4",{id:"column"},"column"),(0,t.kt)("p",null," Elementos se colocan de arriba hacia abajo."),(0,t.kt)("p",null,"Es una columna, los hijos del contenedor van a comportarse como una columna. Con este valor, el main axis corre en el eje Y (de arriba para abajo)"),(0,t.kt)("h4",{id:"column-reverse"},"column-reverse"),(0,t.kt)("p",null,"Elementos se colocan de abajo hacia arriba."),(0,t.kt)("p",null,"El Main axis Va de abajo para arriba en el eje Y"),(0,t.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,t.kt)("div",{parentName:"div",className:"admonition-heading"},(0,t.kt)("h5",{parentName:"div"},(0,t.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,t.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,t.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,t.kt)("div",{parentName:"div",className:"admonition-content"},(0,t.kt)("p",{parentName:"div"}," Cuando estableces flex-direction a una fila/columna invertida, el inicio y el final tambi\xe9n se invierten.",(0,t.kt)("br",{parentName:"p"}),"\n","Nota que cuando es una columna, justify-content cambia a vertical y align-items a horizontal."))),(0,t.kt)("h2",{id:"flex-grap"},"flex-grap"),(0,t.kt)("h3",{id:"valores-1"},"valores"),(0,t.kt)("h4",{id:"wrap"},"wrap"),(0,t.kt)("p",null,"Respeta el ancho especifico de los flex-item y los items que sigan alado van a ir para abajo si es necesario"),(0,t.kt)("p",null,"los elementos se envuelven alrededor de l\xedneas adicionales. (Si no cabe en una linea, lo manda abajo)"),(0,t.kt)("p",null,"Los flex-items se comportan como si fueran bloques."),(0,t.kt)("h4",{id:"wrap-reverse"},"wrap-reverse"),(0,t.kt)("p",null,"Respeta el ancho especifico de los flex-item y los \xedtems que sigan alado van a ir para arriba si es necesario."),(0,t.kt)("p",null," Los elementos se envuelven alrededor de l\xedneas adicionales en reversa. (Si no cabe en una linea, lo manda ariba)"),(0,t.kt)("h4",{id:"no-wrap"},"no-wrap"),(0,t.kt)("p",null," Valor por defecto, no hace nada."),(0,t.kt)("p",null,"Cada elemento se ajusta en una sola l\xednea. (Todos los elementos estan en una linea)"),(0,t.kt)("h2",{id:"flex-flow"},"flex-flow"),(0,t.kt)("p",null," es la fusion de flex-direction y flex-wrap"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-css"},"flex-flow: column wrap;\n")),(0,t.kt)("h2",{id:"justify-content"},"justify-content"),(0,t.kt)("p",null,"Alinea elementos horizontalmente"),(0,t.kt)("p",null,"Sirve para alinear en el main axis"),(0,t.kt)("h3",{id:"valores-2"},"valores"),(0,t.kt)("h4",{id:"center"},"center"),(0,t.kt)("p",null,"Se centran los flex-item"),(0,t.kt)("p",null,"Alinea elementos en el centro del contenedor."),(0,t.kt)("h4",{id:"space-around"},"space-around"),(0,t.kt)("p",null," Muestra elementos con la misma separaci\xf3n alrededor de ellos. Tienen mucha separacion."),(0,t.kt)("p",null,"Es igual a margin:auto, para centrar."),(0,t.kt)("p",null,"El margin auto dentro de los flex tambien funciona como un space-between en vertical."),(0,t.kt)("p",null,"Las cajas del comienzo y final no van a tener los mismos margenes a los costados que el resto."),(0,t.kt)("h4",{id:"space-between"},"space-between"),(0,t.kt)("p",null,"Muestra elementos con la misma distancia entre ellos."),(0,t.kt)("p",null,"Le da un margen automatico a todas las cajas."),(0,t.kt)("h4",{id:"space-evenly"},"space-evenly"),(0,t.kt)("p",null,"Da un margen especifico para que cada hijo tenga el mismo margen"),(0,t.kt)("h4",{id:"flex-start"},"flex-start"),(0,t.kt)("p",null,"Alinea elementos al lado izquierdo del contenedor(comienzo del contenedor)(empieza en el main-start)"),(0,t.kt)("h4",{id:"flex-end"},"flex-end"),(0,t.kt)("p",null,"flex-end: Alinea elementos al lado derecho del contenedor (final del contenedor) (empieza en el main-end)"),(0,t.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,t.kt)("div",{parentName:"div",className:"admonition-heading"},(0,t.kt)("h5",{parentName:"div"},(0,t.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,t.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,t.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,t.kt)("div",{parentName:"div",className:"admonition-content"},(0,t.kt)("p",{parentName:"div"},"flex-start y flex-end pueden cambiar si el flex-direction tiene algun valor inverse"))),(0,t.kt)("h2",{id:"align-items-y-align-content"},"align-items y align-content"),(0,t.kt)("p",null,"alinea elementos verticalmente "),(0,t.kt)("p",null,"Sirven para alinear en el cross axis"),(0,t.kt)("p",null,"Align-items: Se utiliza cuando solo hay una l\xednea de \xedtems."),(0,t.kt)("p",null,"align-items determina como los elementos en su conjunto est\xe1n alineados dentro del contenedor."),(0,t.kt)("p",null,"Align-content : Cuando hay mas de una l\xednea de items."),(0,t.kt)("p",null,"align-content determina el espacio entre las l\xedneas"),(0,t.kt)("p",null,"Puedes usar align-content para establecer como m\xfaltiples l\xedneas est\xe1n separadas una de otra"),(0,t.kt)("p",null," Cuando hay solo una l\xednea, align-content no tiene efecto."),(0,t.kt)("p",null,"Ambas propiedades usan los mismos valores."),(0,t.kt)("h3",{id:"valores-3"},"valores"),(0,t.kt)("h4",{id:"flex-start-1"},"flex-start"),(0,t.kt)("p",null," Las l\xedneas se posicionan en la parte superior del contenedo (comienzo)"),(0,t.kt)("p",null," lo pone al comienzo (cross-start)"),(0,t.kt)("h4",{id:"flex-end-1"},"flex-end"),(0,t.kt)("p",null," Las l\xedneas se posicionan en la parte inferior del contenedor."),(0,t.kt)("p",null," Lo pone al final (cross-end)"),(0,t.kt)("h4",{id:"center-1"},"center"),(0,t.kt)("p",null," Las l\xedneas se posicionan en el centro (verticalmente hablando) del contenedor."),(0,t.kt)("p",null," Se centra verticalmente"),(0,t.kt)("h4",{id:"space-between-1"},"space-between"),(0,t.kt)("p",null," Las l\xedneas se muestran con la misma distancia entre ellas."),(0,t.kt)("h4",{id:"space-around-1"},"space-around"),(0,t.kt)("p",null," Las l\xedneas se muestran con la misma separaci\xf3n alrededor de ellas."),(0,t.kt)("h4",{id:"stretch"},"stretch"),(0,t.kt)("p",null," Las l\xedneas se estiran para ajustarse al contenedor."),(0,t.kt)("p",null," Ocupa todo el alto.(Se estira al cross axis)"),(0,t.kt)("h4",{id:"baseline"},"baseline"),(0,t.kt)("p",null," Muestra elementos en la l\xednea base del contenedor"),(0,t.kt)("p",null," Sirven para el efecto de que a medida que achicamos la pantalla, van subiendo para arriba los item-hijo."),(0,t.kt)("h2",{id:"propiedades-para-los--items"},"Propiedades para los  items"),(0,t.kt)("h2",{id:"align-self"},"align-self"),(0,t.kt)("p",null," Es la alineacion en el cross axis,se aplica a los items que quieras"),(0,t.kt)("p",null,"Tienen los mismos valores que align-items y align-content"),(0,t.kt)("p",null,"Los valores son: flex-end , flex-start , stretch , center , baseline."),(0,t.kt)("p",null," Esta propiedad acepta los mismos valores de align-items y sus valores son usados para un elemento espec\xedfico"),(0,t.kt)("h3",{id:"valores-4"},"valores"),(0,t.kt)("h4",{id:"flex-start-2"},"flex-start"),(0,t.kt)("p",null," Las l\xedneas se posicionan en la parte superior del contenedo (comienzo)"),(0,t.kt)("p",null," lo pone al comienzo (cross-start)"),(0,t.kt)("h4",{id:"flex-end-2"},"flex-end"),(0,t.kt)("p",null," Las l\xedneas se posicionan en la parte inferior del contenedor."),(0,t.kt)("p",null," Lo pone al final (cross-end)"),(0,t.kt)("h4",{id:"center-2"},"center"),(0,t.kt)("p",null," Las l\xedneas se posicionan en el centro (verticalmente hablando) del contenedor."),(0,t.kt)("p",null," Se centra verticalmente"),(0,t.kt)("h4",{id:"space-between-2"},"space-between"),(0,t.kt)("p",null," Las l\xedneas se muestran con la misma distancia entre ellas."),(0,t.kt)("h4",{id:"space-around-2"},"space-around"),(0,t.kt)("p",null," Las l\xedneas se muestran con la misma separaci\xf3n alrededor de ellas."),(0,t.kt)("h4",{id:"stretch-1"},"stretch"),(0,t.kt)("p",null," Las l\xedneas se estiran para ajustarse al contenedor."),(0,t.kt)("p",null," Ocupa todo el alto.(Se estira al cross axis)"),(0,t.kt)("h4",{id:"baseline-1"},"baseline"),(0,t.kt)("p",null," Muestra elementos en la l\xednea base del contenedor"),(0,t.kt)("p",null," Sirven para el efecto de que a medida que achicamos la pantalla, van subiendo para arriba los item-hijo."),(0,t.kt)("h2",{id:"flex-glow"},"flex-glow"),(0,t.kt)("p",null,"Agarra el espacio que sobra y lo reparte entre las cajas que est\xe1n."),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"lo podes poner en solo un  flex-item y solo ese item se va a llevar todo el espacio que sobra."),(0,t.kt)("li",{parentName:"ul"},"lo  podes poner en dos \xedtems espec\xedficos, el espacio que sobra se repartir\xe1n en esos dos \xedtems."),(0,t.kt)("li",{parentName:"ul"},"En cambio si le aumentas el valor de la propiedad flex-grow a un item y al otro lo dejas en 1. Ocupara mas el item que tenga un valor mas alto.")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-css"},"/* El espacio sobrante se dividira en tres . \n Dos se van para la clase green y uno para la clase Orange */\n.orange {\nbackground:#F50;\nflex-grow:1;\n}\n.green {\nbackground: #050;\nalign-self: baseline;\nflex-grow:2;\n}\n")),(0,t.kt)("h2",{id:"flex-basis"},"flex-basis"),(0,t.kt)("p",null,"Es como el width "),(0,t.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,t.kt)("div",{parentName:"div",className:"admonition-heading"},(0,t.kt)("h5",{parentName:"div"},(0,t.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,t.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,t.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,t.kt)("div",{parentName:"div",className:"admonition-content"},(0,t.kt)("p",{parentName:"div"},"Tiene mas prioridad que el width"))),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-css"},"flex-basis: 500px;\n")),(0,t.kt)("h2",{id:"flex-shrink"},"flex-shrink"),(0,t.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,t.kt)("div",{parentName:"div",className:"admonition-heading"},(0,t.kt)("h5",{parentName:"div"},(0,t.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,t.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,t.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,t.kt)("div",{parentName:"div",className:"admonition-content"},(0,t.kt)("p",{parentName:"div"},"Aunque tenga width, los item-flex no van a tener el width especifico(generalmente tiene menos, a menos que se llegue al espacio adecuado del contenedor donde entren todos los \xedtems con sus width especifico y ah\xed si todas van a tener al mismo tiempo el width que se especifico) .\nEso pasa porque estamos siendo flexible con el espacio que se saca."))),(0,t.kt)("p",null,"Con esta propiedad especificamos cuanto de espacio va a ceder cada item. (puede aplicarse en general o alg\xfan/algunos item-flex en especifico)"),(0,t.kt)("p",null,"Mientras  el  valor sea mas grande, mas espacio va a ceder a las dem\xe1s.(se achicara para que crezcan las dem\xe1s)"),(0,t.kt)("p",null,"Basicamente sirve para especificar que caja va a ceder mas espacio mientras no se alcance el width especifico."),(0,t.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,t.kt)("div",{parentName:"div",className:"admonition-heading"},(0,t.kt)("h5",{parentName:"div"},(0,t.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,t.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,t.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,t.kt)("div",{parentName:"div",className:"admonition-content"},(0,t.kt)("p",{parentName:"div"},"Se espera a que todos lleguen al width especifico para luego repartir el espacio que sobra (flex-grow)."),(0,t.kt)("p",{parentName:"div"},"Se empieza a repartir el espacio sobrante cuando todas las cajas alcancen el espacio asignado."))),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-css"},"/* ceda el doble que el resto */\nflex-shrink: 2;\n/*  Se puede hacer que ceda menos */\nflex-shrink: .5;\n/* Que no ceda espacio */\nflex-shrink: 0;\n")),(0,t.kt)("h2",{id:"flex"},"flex"),(0,t.kt)("p",null,"Es una fusion de  flex-grow , flex-shrink y flex-basis"),(0,t.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,t.kt)("div",{parentName:"div",className:"admonition-heading"},(0,t.kt)("h5",{parentName:"div"},(0,t.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,t.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,t.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,t.kt)("div",{parentName:"div",className:"admonition-content"},(0,t.kt)("p",{parentName:"div"},"SE NECESITA AL MENOS EL VALOR DE FLEX-GROW PARA FUNCIONAR"))),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-css"},"/* flex-grow:1 flex-shrink: 0 flex-besis: 350px */\nflex: 1 0 350px\n/* Tambien funciona */\nflex: 1;\n")),(0,t.kt)("h2",{id:"order"},"order"),(0,t.kt)("p",null,"La propiedad CSS order especifica el orden utilizado para disponer los elementos en su contenedor flexible."),(0,t.kt)("p",null,"Los elementos estar\xe1n dispuestos en orden ascendente(menor a mayor) seg\xfan el valor de order. "),(0,t.kt)("p",null,"Los elementos con el mismo valor de order se dispondr\xe1n en el orden en el cual aparecen en el c\xf3digo fuente."),(0,t.kt)("p",null,"Por defecto, los elementos tienen un valor 0, pero nosotros podemos usar esta propiedad para establecerlo a un n\xfamero entero positivo o negativo."),(0,t.kt)("p",null,"El que tenga el valor mas grande va a estar en el final del main axis."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-css"},"order:5;\n")),(0,t.kt)("h2",{id:"margin"},"Margin"),(0,t.kt)("p",null,"El margin dentro de una caja flexible se comporta de una forma diferente.\nPor ejemplo el margin-left: auto de un item-flex manda al item a la parte derecha del contenedor."),(0,t.kt)("p",null,"Margin-top es margin-bottom, margin-left es margin-right , etc."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-css"},"/* centrar verticalmente*/\nmargin-top: auto;\nmargin-bottom: auto;\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-css"},"/* centrar horizontalmente */\nmargin-right: auto;\nmargin-left:auto;\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-css"},"/* centrar horizontalmente y verticalmente */\nmargin-left: auto;\nmargin-right: auto;\nmargin-top: auto;\nmargin-bottom: auto;\n// Si lo abrevio quedaria:\nmargin:auto;\n")),(0,t.kt)("h2",{id:"practica"},"Practica"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<title>Document </title>\n<link rel="stylesheet" href="archivocss.css">\n<link rel="stylesheet" href="normalize.css">\n</head>\n<body>\n<div class="flex-container">\n<form class="form">\n<div class="form__section">\n<input type="email" class="form__input" placeholder="Escriba su email">\n</div>\n<div class="form__section">\n<input type="text" class="form__input" placeholder="Escriba el asunto">\n</div>\n<div class="form__section">\n<textarea class="form__input" cols="4" rows="1" placeholder="Escriba su Mensaje"> </textarea> </div>\n<div class="form__section">\n<input type="submit" class="form__input">\n</div>\n</form>\n<div class="form-img">\n<div class="img-container">\n<div>\n<img src="https://i.ya-webdesign.com/images/black-envelope-png-icon-1.png" alt="">\n</div>\n</div>\n</div>\n</div>\n</body>\n</html>\n')),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-css"},'body {\nbackground-color: #000;\n}\n.flex-container {\ndisplay: flex;\nalign-items: center;\nflex-wrap: wrap;\njustify-content: center;\nbackground: #333;\npadding:50px;\nborder: 10px solid #000;\nmargin: 10px auto;\nmax-width:1200px;\n}\n.form {\nflex: 1;\ntext-align: center;\npadding-left:30px;\norder:5;\n}\n.form-img {\nflex:1;\ndisplay: flex;\npadding:20px;\nmin-width: 300px ;\nmax-width:400px;\norder:1;\n}\n.form-img img {\nwidth: 90%;\n}\n.img-container {\nmargin:auto;\n}\n.form__input {\nwidth:100%;\npadding:7px;\nmargin: 6px 0;\nborder:none;\nborder-bottom: 3px solid #1c7;\nbackground: transparent;\ncolor: #fff;\n}\n.form textarea {\nmin-height: 140px;\nresize:none;\n}\n.form-img div {\npadding:10px;\n}\n.img-container div {\nbackground-color: #fff;\nborder-radius: 50%;\ntext-align: center;\npadding:40px;\n}\n.form__input:focus {\nbackground: linear-gradient(to bottom,transparent,#222);\noutline: none;\nborder-bottom: 3px solid #5f9;\n}\n.form input[type="submit"] {\nbackground-color: #094;\npadding:20px;\nborder-bottom: none;\n}\n.form input[type="submit"]:hover {\nbackground-color: #072;\n}\n.form input[type="submit"] {\nbackground: #094;\n}\n.form input[type="submit"]:active {\nbackground: linear-gradient(to bottom,#072,#050);\n}\n\n')))}p.isMDXComponent=!0},7645:(e,a,n)=>{n.d(a,{Z:()=>l});const l=n.p+"assets/images/cross-start-35861e350043e7f918409d7092e41b9d.png"},5611:(e,a,n)=>{n.d(a,{Z:()=>l});const l=n.p+"assets/images/main-start-8661d8082d454c1287995e669b3915c5.png"}}]);