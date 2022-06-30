"use strict";(self.webpackChunkdocumentacion=self.webpackChunkdocumentacion||[]).push([[9482],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=o,v=d["".concat(l,".").concat(p)]||d[p]||m[p]||r;return n?a.createElement(v,i(i({ref:t},u),{},{components:n})):a.createElement(v,i({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5133:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:7},i="Context API",s={unversionedId:"React/context",id:"React/context",title:"Context API",description:"- context",source:"@site/docs/React/context.md",sourceDirName:"React",slug:"/React/context",permalink:"/documentacion/docs/React/context",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/React/context.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"React",previous:{title:"React Router v6",permalink:"/documentacion/docs/React/affect"},next:{title:"Reducer",permalink:"/documentacion/docs/React/reducer"}},l={},c=[{value:"Proyecto",id:"proyecto",level:3},{value:"Redux vs Context",id:"redux-vs-context",level:2},{value:"Problematica",id:"problematica",level:2},{value:"createContext",id:"createcontext",level:2},{value:"useContext",id:"usecontext",level:2},{value:"Extra Ruta Protegida",id:"extra-ruta-protegida",level:2},{value:"Hook useLocation",id:"hook-uselocation",level:2}],u={toc:c};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"context-api"},"Context API"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://es.reactjs.org/docs/context.html"},"context")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://es.reactjs.org/docs/hooks-reference.html#usecontext"},"useContext")),(0,o.kt)("li",{parentName:"ul"},"Context provee una forma de pasar datos a trav\xe9s del \xe1rbol de componentes sin tener que pasar props manualmente en cada nivel."),(0,o.kt)("li",{parentName:"ul"},"Context est\xe1 dise\xf1ado para compartir datos que pueden considerarse \u201cglobales\u201d para un \xe1rbol de componentes en React, como el usuario autenticado actual, el tema o el idioma preferido."),(0,o.kt)("li",{parentName:"ul"},"Si trabajas con diferentes vistas estas no estar\xe1n anidadas, por ende Context proporciona una soluci\xf3n."),(0,o.kt)("li",{parentName:"ul"},"Permite que todas las vistas tengan acceso a los datos.")),(0,o.kt)("h3",{id:"proyecto"},"Proyecto"),(0,o.kt)("p",null,"Usaremos el proyecto de React Router v6(router tutorial)"),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"No hacer todo GLOBAL ."),(0,o.kt)("li",{parentName:"ul"},"Solo los que se nos escapan de la mano.")))),(0,o.kt)("h2",{id:"redux-vs-context"},"Redux vs Context"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Redux proporciona un conjunto de herramientas completo para administrar el estado:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Viene con un depurador que viaja en el tiempo."),(0,o.kt)("li",{parentName:"ul"},"Proporciona una API de middleware que le brinda acceso a herramientas como redux-sagas."),(0,o.kt)("li",{parentName:"ul"},"Sus enlaces de React evitan muchos renderizados innecesarios."),(0,o.kt)("li",{parentName:"ul"},"Se puede utilizar con otros framework o librerias"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Como puede ver, el contexto no reemplaza a Redux. El contexto no le permitir\xe1 viajar en el tiempo con un depurador, ni  tener un middleware configurable.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Context es una forma de transferir datos de un lugar a otro. Si desea una herramienta que lo ayude a administrar su estado, Redux es una excelente opci\xf3n.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Por lo tanto realizan operaciones distintas.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.itdo.com/blog/react-context-api-puede-ser-alternativa-a-redux/"},"link"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://daveceddia.com/context-api-vs-redux/"},"link 2"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://frontarm.com/james-k-nelson/when-context-replaces-redux/"},"link 3")))),(0,o.kt)("h2",{id:"problematica"},"Problematica"),(0,o.kt)("p",null,"src/routes/Inicio.jsx"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import React, { useState } from 'react'\n\n  \nconst Inicio = () => {\n  const [user,setUser] = useState(false);\n  return (\n    <div>\n      <h2> { \n       user? 'conectado' : 'desconectado'\n      \n      }</h2>\n      {\n        user ? (\n          <button className=\"btn btn-primary\" onClick={()=> setUser(false) }>Acceder</button>\n        ) : (   <button className=\"btn btn-primary\" onClick={()=> setUser(true) }>Acceder</button>   )\n      }\n      <h1>Inicio</h1>\n   \n    \n    </div>\n\n  )\n}\n\nexport default Inicio\n\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"problema")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"como enviar el user (useState) al src/components/Navbar.js"))),(0,o.kt)("h2",{id:"createcontext"},"createContext"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Crea un objeto Context. Cuando React renderiza un componente que se suscribe a este objeto Context, este leer\xe1 el valor de contexto actual del Provider m\xe1s cercano en el \xe1rbol."),(0,o.kt)("li",{parentName:"ul"},"Cada objeto Context viene con un componente Provider de React que permite que los componentes que lo consumen se suscriban a los cambios del contexto."),(0,o.kt)("li",{parentName:"ul"},"El componente Provider acepta una prop value que se pasar\xe1 a los componentes consumidores que son descendientes de este Provider.")),(0,o.kt)("p",null,"src/context/UserProvider.jsx"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Estructura basica de un componente")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Observacion ")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"Hay que exportar un createContext()"),(0,o.kt)("li",{parentName:"ul"},"Esa exportaci\xf3n la utiliza los componentes que requieren ese dato/valor."),(0,o.kt)("li",{parentName:"ul"},"Puede tener toda la l\xf3gica del usuario el componente.")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import React, { createContext , useState } from 'react'\nexport const UserContext = createContext()\nconst UserProvider = ({children}) => {\n\n    const [user,setUser] = useState(false);\n\n    const signIn = () => setUser(true);\n    const signOut = () => setUser(false);\n  return (\n     <UserContext.Provider value={{user , signIn , signOut}}>\n        {children}\n     </UserContext.Provider>\n  );\n};\n\nexport default UserProvider\n\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Diferencias")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"el UserContext   es accedido desde el Inicio.jsx y dentro del NavBar.jsx"),(0,o.kt)("li",{parentName:"ul"},"el userProvider es el que envuelve a los componentes que van a tener acceso a  los datos.")))),(0,o.kt)("p",null,"index.js"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Para tener acceso a la variable user y a las funciones signIn y signOut , usaremos el context(createContext)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport App from './App';\nimport Blog from './routes/Blog';\nimport Contacto from './routes/Contacto';\nimport Inicio from './routes/Inicio';\nimport {BrowserRouter,  Route,  Routes} from 'react-router-dom'\nimport \"bootstrap/dist/css/bootstrap.min.css\"\nimport NoEncontrada from './routes/NoEncontrada';\nimport Post from './components/Post';\nimport UserProvider from './context/UserProvider'\nconst root = ReactDOM.createRoot(document.getElementById('root'));\n\nroot.render(\n  <React.StrictMode>\n    <BrowserRouter>\n    <UserProvider>\n     <Routes>\n     \n        <Route path='/' element={<App />}> \n        <Route index element={<Inicio/>}/>\n        <Route path='blog' element={<Blog />}/>\n        <Route path='blog/:id' element={<Post />}/>\n        <Route path='contacto' element={<Contacto />}/>\n         <Route path='*' element={<NoEncontrada/>}/>\n        </Route>\n     </Routes>\n     </UserProvider>\n    </BrowserRouter>\n  </React.StrictMode>\n);\n\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Explicacion ")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"Todo lo que este envuelto por el UserProvider tienen acceso  a la variable user y a las funciones signIn y signOut (todo lo que este en el props value de Provider)"),(0,o.kt)("li",{parentName:"ul"},"Todo esto se logra gracias a children (la props de UserProvider)"),(0,o.kt)("li",{parentName:"ul"},"Esto quiere decir que children son todos los hijos (los que envuelve) de UserProvider."),(0,o.kt)("li",{parentName:"ul"},"Todos los children tienen acceso al  props value de Provider.")))),(0,o.kt)("h2",{id:"usecontext"},"useContext"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Acepta un objeto de contexto (el valor devuelto de React.createContext) y devuelve el valor del contexto actual. El valor actual del contexto es determinado por la propiedad value del MyContext.Provider ascendentemente m\xe1s cercano en el \xe1rbol al componente que hace la llamada.")),(0,o.kt)("p",null,"src/routes/Inicio.jsx"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Diferencias")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"Para tener acceso a las dos funciones y a la variable , hay que usar el context ( que creamos con createContext)"),(0,o.kt)("li",{parentName:"ul"},"El provider es para especificar quien tienen acceso a los datos."),(0,o.kt)("li",{parentName:"ul"},"El context es al que llamamos para tener acceso a los datos , el context nos devuelve los datos.")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import React, { useContext } from 'react'\nimport { UserContext } from '../context/UserProvider'\n\n  \nconst Inicio = () => {\n  // Tenemos acceso a la variable user y a las dos funciones\n   const {user , signIn , signOut} =  useContext(UserContext)\n  return (\n    <div>\n      <h2> { \n       user? 'conectado' : 'desconectado'\n      \n      }</h2>\n      {\n        user ? (\n          <button className=\"btn btn-primary\" onClick={signOut }>Desconectar</button>\n        ) : (   <button className=\"btn btn-primary\" onClick={signIn}>Acceder</button>   )\n      }\n      <h1>Inicio</h1>\n   \n    \n    </div>\n\n  )\n}\n\nexport default Inicio\n\n")),(0,o.kt)("p",null,"Navbar.jsx"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'\nimport React , {useContext} from \'react\'\nimport { Link, NavLink } from \'react-router-dom\'\nimport { UserContext } from \'../context/UserProvider\'\n\nconst Navbar = () => {\n  //Tenemos acceso a user del context\n  const {user} = useContext(UserContext);\n  return (\n     <nav className="navbar navbar-dark bg-dark">\n       \n         <div className="container">  \n\n         <Link to="/"> {user ? \'Nombre Usuario\' : \'Sin conexion\'} </Link>\n          <NavLink className="btn btn-outline-primary" to="/">Inicio</NavLink>\n          <NavLink className="btn btn-outline-primary" to="/contacto">Contacto</NavLink>\n          <NavLink className="btn btn-outline-primary" to="/blog">Blog</NavLink></div>\n          \n     </nav>\n  )\n}\n\nexport default Navbar\n\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Observacion ")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Se puede tener acceso a todos los datos como en el Inicio.jsx o solo a uno de los datos como en el Navbar.jsx"))),(0,o.kt)("h2",{id:"extra-ruta-protegida"},"Extra Ruta Protegida"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://reactrouter.com/docs/en/v6/examples/auth"},"explicacion"))),(0,o.kt)("p",null,"src/routes/RutaProtegida.jsx"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const RutaProtegida = () => {\n    return (\n        <div>\n            <h1>Solo usuarios registrados pueden ver esta p\xe1gina</h1>\n        </div>\n    );\n};\n\nexport default RutaProtegida;\n\n")),(0,o.kt)("p",null,"index.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport App from './App';\nimport Blog from './routes/Blog';\nimport Contacto from './routes/Contacto';\nimport Inicio from './routes/Inicio';\nimport {BrowserRouter,  Route,  Routes} from 'react-router-dom'\nimport \"bootstrap/dist/css/bootstrap.min.css\"\nimport NoEncontrada from './routes/NoEncontrada';\nimport Post from './components/Post';\nimport UserProvider from './context/UserProvider'\nimport RutaProtegida from './routes/RutaProtegida';\nconst root = ReactDOM.createRoot(document.getElementById('root'));\n\nroot.render(\n  <React.StrictMode>\n    <BrowserRouter>\n    <UserProvider>\n    <Routes>\n     \n     <Route path='/' element={<App />}> \n     <Route index element={<Inicio/>}/>\n     <Route path='blog' element={<Blog />}/>\n     <Route path='blog/:id' element={<Post />}/>\n     <Route path='contacto' element={<Contacto />}/>\n     <Route path='protegida' element={<RutaProtegida />}/>\n      <Route path='*' element={<NoEncontrada/>}/>\n     </Route>\n  </Routes>\n     </UserProvider>\n    </BrowserRouter>\n  </React.StrictMode>\n);\n\n\n\n")),(0,o.kt)("p",null,"routes/Inicio.jsx"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import React, { useContext } from 'react'\nimport { Link } from 'react-router-dom'\nimport { UserContext } from '../context/UserProvider'\n\n  \nconst Inicio = () => {\n  // Tenemos acceso a la variable user y a las dos funciones\n   const {user , signIn , signOut} =  useContext(UserContext)\n  return (\n    <div>\n      <h2> { \n       user? 'conectado' : 'desconectado'\n      \n      }</h2>\n      {\n        user ? (\n          <>\n          <button className=\"btn btn-primary\" onClick={signOut }>Desconectar</button>\n           <Link to=\"/protegida\" className=\"btn btn btn-warning\">Ruta protegida</Link>\n          </>\n        ) : (   <button className=\"btn btn-primary\" onClick={signIn}>Acceder</button>   )\n      }\n      <h1>Inicio</h1>\n   \n    \n    </div>\n\n  )\n}\n\nexport default Inicio\n\n")),(0,o.kt)("p",null,"src/components/RequireAuth.jsx"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Es el componente que se va a renderizar alrededor de las rutas protegidas"),(0,o.kt)("li",{parentName:"ul"},"Envuelve las rutas protegidas."),(0,o.kt)("li",{parentName:"ul"},"Contiene la l\xf3gica que evalua si existe el usuario. Si existe ,  entra a la ruta protegida , en caso contrario se va a la ruta raiz.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import React , {useContext}from 'react'\nimport { Navigate } from 'react-router-dom';\nimport { UserContext } from '../context/UserProvider'\n\nconst RequireAuth = ({children}) => {\n    const {user} = useContext(UserContext);\n    if (!user) {\n        // Si no existe el usuario , se va a la ruta de inicio\n        return <Navigate to=\"/\"/>\n    } else {\n      return children;\n    }\n\n}\n\nexport default RequireAuth\n\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Observacion")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"el children representa las rutas hijas."))),(0,o.kt)("p",null,"index.js"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"El componente RequireAuth Va a envolver a las rutas protegidas"),(0,o.kt)("li",{parentName:"ul"},"Dicho componente tiene la l\xf3gica para comprobar si existe el usuario y redireccionarlo en base a la validaci\xf3n (si entra a la ruta hija o no)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport App from './App';\nimport Blog from './routes/Blog';\nimport Contacto from './routes/Contacto';\nimport Inicio from './routes/Inicio';\nimport {BrowserRouter,  Route,  Routes} from 'react-router-dom'\nimport \"bootstrap/dist/css/bootstrap.min.css\"\nimport NoEncontrada from './routes/NoEncontrada';\nimport Post from './components/Post';\nimport UserProvider from './context/UserProvider'\nimport RutaProtegida from './routes/RutaProtegida';\nimport RequireAuth from './components/RequireAuth';\nconst root = ReactDOM.createRoot(document.getElementById('root'));\n\nroot.render(\n  <React.StrictMode>\n    <BrowserRouter>\n    <UserProvider>\n    <Routes>\n     \n     <Route path='/' element={<App />}> \n     <Route index element={<Inicio/>}/>\n     <Route path='blog' element={<Blog />}/>\n     <Route path='blog/:id' element={<Post />}/>\n     <Route path='contacto' element={<Contacto />}/>\n     <Route path='protegida' element={\n       <RequireAuth>\n     <RutaProtegida />\n     </RequireAuth>\n     }/>\n      <Route path='*' element={<NoEncontrada/>}/>\n     </Route>\n  </Routes>\n     </UserProvider>\n    </BrowserRouter>\n  </React.StrictMode>\n);\n\n")),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"Las validaciones se hacen en el backend."),(0,o.kt)("li",{parentName:"ul"},"En el frontend solo las validaciones b\xe1sica.")))),(0,o.kt)("h2",{id:"hook-uselocation"},"Hook useLocation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Para que te redirrecione a la ultima url que estuviste"),(0,o.kt)("li",{parentName:"ul"},"Averiguar")))}m.isMDXComponent=!0}}]);