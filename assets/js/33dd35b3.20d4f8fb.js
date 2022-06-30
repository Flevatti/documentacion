"use strict";(self.webpackChunkdocumentacion=self.webpackChunkdocumentacion||[]).push([[8226],{3905:(e,n,o)=>{o.d(n,{Zo:()=>c,kt:()=>u});var a=o(7294);function t(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,a)}return o}function l(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){t(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function i(e,n){if(null==e)return{};var o,a,t=function(e,n){if(null==e)return{};var o,a,t={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],n.indexOf(o)>=0||(t[o]=e[o]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var s=a.createContext({}),d=function(e){var n=a.useContext(s),o=n;return e&&(o="function"==typeof e?e(n):l(l({},n),e)),o},c=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var o=e.components,t=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(o),u=t,h=p["".concat(s,".").concat(u)]||p[u]||m[u]||r;return o?a.createElement(h,l(l({ref:n},c),{},{components:o})):a.createElement(h,l({ref:n},c))}));function u(e,n){var o=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=o.length,l=new Array(r);l[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:t,l[1]=i;for(var d=2;d<r;d++)l[d]=o[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},7202:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=o(7462),t=(o(7294),o(3905));const r={sidebar_position:3},l="Formulario",i={unversionedId:"React/formulario",id:"React/formulario",title:"Formulario",description:"Configuracion Inicial",source:"@site/docs/React/formulario.md",sourceDirName:"React",slug:"/React/formulario",permalink:"/documentacion/docs/React/formulario",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/React/formulario.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"React",previous:{title:"Introduccion",permalink:"/documentacion/docs/React/introduccion"},next:{title:"App todo",permalink:"/documentacion/docs/React/todoApp"}},s={},d=[{value:"Formulario no controlado",id:"formulario-no-controlado",level:2},{value:"useRef",id:"useref",level:3},{value:"Formulario controlado",id:"formulario-controlado",level:2},{value:"Para que sea controlado , hay que ponerle el atributo value a  todos los elementos del formulario:",id:"para-que-sea-controlado--hay-que-ponerle-el-atributo-value-a--todos-los-elementos-del-formulario",level:3},{value:"El atributo value va antes que onChange",id:"el-atributo-value-va-antes-que-onchange",level:3},{value:"Checkbox",id:"checkbox",level:2},{value:"Peque\xf1a validacion",id:"peque\xf1a-validacion",level:2},{value:"Validaci\xf3n",id:"validaci\xf3n",level:2}],c={toc:d};function m(e){let{components:n,...o}=e;return(0,t.kt)("wrapper",(0,a.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"formulario"},"Formulario"),(0,t.kt)("p",null,"Configuracion Inicial"),(0,t.kt)("p",null,"index.js"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport ReactDOM from 'react-dom';\n// Importamos el componente \nimport App from './App';\n\n// Renderiza el componente principal en el DIV \nReactDOM.render(\n  // Modo estricto -- Opcional\n  <React.StrictMode>\n     {/* // Componente Principal  */}\n         <App />\n\n  </React.StrictMode>,\n  // Elemento\n  // EL elemento DIV del public/index.html\n  document.getElementById('root')\n);\n\n")),(0,t.kt)("p",null,"App.jsx"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"\nimport React from 'react'\nimport Contador from './components/Contador'\n\nconst App = () => {\n  \n    \n  return (\n      <>\n       <div className=\"container\">\n          <h1>Formularios</h1>\n         \n     \n       </div>\n       </>\n\n  )\n}\n\nexport default App\n\n")),(0,t.kt)("p",null,"npm start"),(0,t.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,t.kt)("div",{parentName:"div",className:"admonition-heading"},(0,t.kt)("h5",{parentName:"div"},(0,t.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,t.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,t.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Observacion ")),(0,t.kt)("div",{parentName:"div",className:"admonition-content"},(0,t.kt)("p",{parentName:"div"},"Pueden omitir el comando \u201crun\u201d"))),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es"},"Extension para chrome")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://addons.mozilla.org/es/firefox/addon/react-devtools/"},"Extension para firefox"))),(0,t.kt)("h2",{id:"formulario-no-controlado"},"Formulario no controlado"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://es.reactjs.org/docs/uncontrolled-components.html"},"link")),(0,t.kt)("li",{parentName:"ul"},"La alternativa a los componente controlado son los componentes no controlados, donde los datos del formulario son manejados por el propio DOM."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre"},"Para escribir un componente no controlado, puedes usar una referencia para que obtengas los valores del formulario desde el DOM.\n")),(0,t.kt)("h3",{parentName:"li",id:"refs"},"refs")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://es.reactjs.org/docs/refs-and-the-dom.html"},"link")),(0,t.kt)("li",{parentName:"ul"},"Las referencias proporcionan una forma de acceder a los nodos del DOM o a elementos React creados en el m\xe9todo de renderizado.")),(0,t.kt)("h3",{id:"useref"},"useRef"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://es.reactjs.org/docs/hooks-reference.html#useref"},"link")),(0,t.kt)("li",{parentName:"ul"},"useRef devuelve un objeto ref mutable cuya propiedad .current se inicializa con el argumento pasado (initialValue). El objeto devuelto se mantendr\xe1 persistente durante la vida completa del componente.",(0,t.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,t.kt)("div",{parentName:"div",className:"admonition-heading"},(0,t.kt)("h5",{parentName:"div"},(0,t.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,t.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,t.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,t.kt)("div",{parentName:"div",className:"admonition-content"},(0,t.kt)("p",{parentName:"div"},"React utiliza un virtual DOM para renderizar "))),"App.jsx")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"\nimport React from 'react'\nimport FormNoControlado from './components/FormNoControlado'\n\n\nconst App = () => {\n  \n    \n  return (\n      <>\n       <div className=\"container\">\n          <h1>Formularios</h1>\n            <FormNoControlado/>\n     \n       </div>\n       </>\n\n  )\n}\n\nexport default App\n\n")),(0,t.kt)("p",null,"component/FormNoControlado.jsx"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react'\n\nconst FormNoControlado = () => {\n  return (\n    <>\n     <h2>No controlado</h2>\n    </>\n  )\n}\n\nexport default FormNoControlado\n\n")),(0,t.kt)("p",null,"FormNoControlado.jsx"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'\nimport React, { useRef } from \'react\'\n\nconst FormNoControlado = () => {\n    // Seria como seleccionar el formulario(form) con  getElementById  o querySelector \n    const formulario = useRef(null);\n     \n    const handleSubmit = e => {\n        e.preventDefault();\n        // Para llamar al elemento usamos la propiedad current\n        // formulario.current = devuelve el formulario(form)\n        const datos = new FormData(formulario.current);\n        // Convierto un array en un objeto \n        // Todas las keys se transforman en una propiedad del objeto con su valor correspondiente\n        // objeto.key = valor\n        const objetoDatos = Object.fromEntries([...datos.entries()]);\n        const {todoName , todoDescripcion , todoEstado} = objetoDatos;\n        // Validaciones \n        if (!todoName.trim() ||  !todoDescripcion.trim()) {\n          return  console.log("Esta vacio idiota");\n        }\n        console.log("Paso las validaciones");\n    }\n\n  return (\n    <>\n     <h2>No controlado</h2>\n     <form ref={formulario} onSubmit={handleSubmit}>\n     <input\n       type="text" \n       placeholder=\'Ingrese TODO\'\n       name=\'todoName\'\n       className="form-control mb-2"\n       defaultValue="Tarea #01"\n       />\n     <textarea\n         name="todoDescripcion"\n         id=""\n         cols="30"\n         rows="10" \n         className="form-control mb-2"\n         placeholder="Ingrese descripcion del todo"\n         defaultValue="Descripcion Tarea #01"\n         />\n         <select name="todoEstado" className="form-control mb-2"  defaultValue="pendiente" >\n             <option value="pendiente">Pendiente</option>\n             <option value="completada">Completada</option>\n         </select>\n         <button className="btn btn-primary" type="submit">Agregar</button>\n     </form>\n    </>\n  )\n}\n\nexport default FormNoControlado\n\n')),(0,t.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,t.kt)("div",{parentName:"div",className:"admonition-heading"},(0,t.kt)("h5",{parentName:"div"},(0,t.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,t.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,t.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Observaciones ")),(0,t.kt)("div",{parentName:"div",className:"admonition-content"},(0,t.kt)("ul",{parentName:"div"},(0,t.kt)("li",{parentName:"ul"},"En React el textarea tiene el atributo value y lo manejamos como si fuera un input."),(0,t.kt)("li",{parentName:"ul"},"ref =  Para seleccionar un elemento en lugar de usar la id o la clase(getElementById ,\nquerySelector, etc), usamos una referencia(ref)."),(0,t.kt)("li",{parentName:"ul"},"useRef =  es un hook para las referencias"),(0,t.kt)("li",{parentName:"ul"},"No abusar de useRef, que consume memoria."),(0,t.kt)("li",{parentName:"ul"},"getElementById y querySelector pueden generar problemas ya que REACT trabaja con un VIRTUAL DOM.")))),(0,t.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,t.kt)("div",{parentName:"div",className:"admonition-heading"},(0,t.kt)("h5",{parentName:"div"},(0,t.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,t.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,t.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"desventajas")),(0,t.kt)("div",{parentName:"div",className:"admonition-content"},(0,t.kt)("ul",{parentName:"div"},(0,t.kt)("li",{parentName:"ul"},"No podemos mostrar mensajes de validaciones."),(0,t.kt)("li",{parentName:"ul"},"No usamos todo el potencial de REACT.")))),(0,t.kt)("h2",{id:"formulario-controlado"},"Formulario controlado"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre"},"En la mayor\xeda de los casos, te recomendamos usar Componentes controlados para implementar formularios.\n"))),(0,t.kt)("li",{parentName:"ul"},"En un componente controlado, los datos del formulario son manejados por un componente React."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://es.reactjs.org/docs/forms.html#controlled-components"},"link")),(0,t.kt)("li",{parentName:"ul"},"Los componentes React que rendericen un formulario tambi\xe9n controlan lo que pasa en ese formulario con las subsecuentes entradas del usuario."),(0,t.kt)("li",{parentName:"ul"},"Ahora vamos a poder detectar los campos input en tiempo real.")),(0,t.kt)("p",null,"App.jsx"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"\nimport React from 'react'\nimport FormControlado from './components/FormControlado'\nimport FormNoControlado from './components/FormNoControlado'\n\n\nconst App = () => {\n  \n    \n  return (\n      <>\n       <div className=\"container\">\n          <h1>Formularios</h1>\n           <FormControlado/>\n     \n       </div>\n       </>\n\n  )\n}\n\nexport default App\n\n")),(0,t.kt)("p",null,"components/FormularioControlado.jsx"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'import React from \'react\'\n\nconst FormControlado = () => {\n  return (\n    <>\n    <h2>Controlado</h2>\n     <form  >\n     <input\n       type="text" \n       placeholder=\'Ingrese TODO\'\n       name=\'todoName\'\n       className="form-control mb-2"\n       defaultValue="Tarea #01"\n       />\n     <textarea\n         name="todoDescripcion"\n         id=""\n         cols="30"\n         rows="10" \n         className="form-control mb-2"\n         placeholder="Ingrese descripcion del todo"\n         defaultValue="Descripcion Tarea #01"\n         />\n         <select name="todoEstado" className="form-control mb-2"  defaultValue="pendiente" >\n             <option value="pendiente">Pendiente</option>\n             <option value="completada">Completada</option>\n         </select>\n         <button className="btn btn-primary" type="submit">Agregar</button>\n     </form>\n    </>\n  )\n}\n\nexport default FormControlado\n\n')),(0,t.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,t.kt)("div",{parentName:"div",className:"admonition-heading"},(0,t.kt)("h5",{parentName:"div"},(0,t.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,t.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,t.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,t.kt)("div",{parentName:"div",className:"admonition-content"},(0,t.kt)("ul",{parentName:"div"},(0,t.kt)("li",{parentName:"ul"},"REACT  inserta  el type submit al primer bot\xf3n que encuentra en el formulario."),(0,t.kt)("li",{parentName:"ul"},"REACT PONE DE TYPE SUBMIT AL BOTON POR DEFECTO")))),(0,t.kt)("p",null,"Dos ejemplos que hacen lo mismo:"),(0,t.kt)("p",null,"Ejemplo 1:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'import React , {useState} from \'react\'\n\nconst FormControlado = () => {\n  // El valor inicial de la variable  todo es un objeto\n     const [todo , setTodo] = useState({\n      todoName: \'\' ,\n      todoDescripcion: \'\' ,\n      todoEstado: \'pendiente\'\n\n     })\n  const  handleSubmit = (e) => {\n     e.preventDefault();\n  }\n  return (\n    <>\n    <h2>Controlado</h2>\n     <form  onSubmit={handleSubmit}>\n     <input\n       type="text" \n       placeholder=\'Ingrese TODO\'\n       name=\'todoName\'\n       className="form-control mb-2"\n       onChange={ e => setTodo({...todo , todoName: e.target.value})}\n       />\n     <textarea\n         name="todoDescripcion"\n         id=""\n         cols="30"\n         rows="10" \n         className="form-control mb-2"\n         placeholder="Ingrese descripcion del todo"\n         onChange={ e => setTodo({...todo , todoDescripcion: e.target.value})}\n        \n         />\n         <select name="todoEstado" className="form-control mb-2"   onChange={ e => setTodo({...todo , todoEstado: e.target.value})} >\n             <option value="pendiente">Pendiente</option>\n             <option value="completada">Completada</option>\n         </select>\n         <button className="btn btn-primary" type="submit">Agregar</button>\n     </form>\n    </>\n  )\n}\n\nexport default FormControlado\n\n')),(0,t.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,t.kt)("div",{parentName:"div",className:"admonition-heading"},(0,t.kt)("h5",{parentName:"div"},(0,t.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,t.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,t.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Observacion  ")),(0,t.kt)("div",{parentName:"div",className:"admonition-content"},(0,t.kt)("ul",{parentName:"div"},(0,t.kt)("li",{parentName:"ul"},"Usamos los tipos de evento change(si cambia) y submit(si se envia)."),(0,t.kt)("li",{parentName:"ul"},"\u2026objeto --- Spread (\u2026) de objeto. En lugar de unir Array, Une objetos. En caso que ya exista la propiedad se sobrescribe.")))),(0,t.kt)("p",null,"Ejemplo 2:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'import React , {useState} from \'react\'\n\nconst FormControlado = () => {\n  // El valor inicial de la variable  todo es un objeto\n     const [todo , setTodo] = useState({\n      todoName: \'\' ,\n      todoDescripcion: \'\' ,\n      todoEstado: \'pendiente\'\n\n     })\n  const  handleSubmit = (e) => {\n     e.preventDefault();\n  }\n  const handleChange = (e) => {\n        setTodo({\n          ...todo,\n          // Usamos los corchetes para crear la propiedad ya que es dinamica\n          [e.target.name] : e.target.value\n        })\n  }\n  return (\n    <>\n    <h2>Controlado</h2>\n     <form  onSubmit={handleSubmit}>\n     <input\n       type="text" \n       placeholder=\'Ingrese TODO\'\n       name=\'todoName\'\n       className="form-control mb-2"\n       onChange={handleChange}\n       />\n     <textarea\n         name="todoDescripcion"\n         id=""\n         cols="30"\n         rows="10" \n         className="form-control mb-2"\n         placeholder="Ingrese descripcion del todo"\n         onChange={handleChange}\n        \n         />\n         <select name="todoEstado" className="form-control mb-2"   onChange={ handleChange} >\n             <option value="pendiente">Pendiente</option>\n             <option value="completada">Completada</option>\n         </select>\n         <button className="btn btn-primary" type="submit">Agregar</button>\n     </form>\n    </>\n  )\n}\n\nexport default FormControlado\n\n')),(0,t.kt)("h3",{id:"para-que-sea-controlado--hay-que-ponerle-el-atributo-value-a--todos-los-elementos-del-formulario"},"Para que sea controlado , hay que ponerle el atributo value a  todos los elementos del formulario:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'const FormControlado = () => {\n  // El valor inicial de la variable  todo es un objeto\n     const [todo , setTodo] = useState({\n      todoName: \'\' ,\n      todoDescripcion: \'\' ,\n      todoEstado: \'pendiente\'\n\n     })\n  const  handleSubmit = (e) => {\n     e.preventDefault();\n  }\n  const handleChange = (e) => {\n        setTodo({\n          ...todo,\n          // Usamos los corchetes para crear la propiedad ya que es dinamica\n          [e.target.name] : e.target.value\n        })\n  }\n  return (\n    <>\n    <h2>Controlado</h2>\n     <form  onSubmit={handleSubmit}>\n     <input\n       type="text" \n       placeholder=\'Ingrese TODO\'\n       name=\'todoName\'\n       className="form-control mb-2"\n       onChange={handleChange}\n       value={todo.todoName}\n       />\n     <textarea\n         name="todoDescripcion"\n         id=""\n         cols="30"\n         rows="10" \n         className="form-control mb-2"\n         placeholder="Ingrese descripcion del todo"\n         onChange={handleChange}\n         value={todo.todoDescripcion}\n        \n         />\n         <select name="todoEstado" className="form-control mb-2"   onChange={ handleChange} value={todo.todoEstado} >\n             <option value="pendiente">Pendiente</option>\n             <option value="completada">Completada</option>\n         </select>\n         <button className="btn btn-primary" type="submit">Agregar</button>\n     </form>\n    </>\n  )\n}\n\n')),(0,t.kt)("p",null,"Otra alternativa al setTodo:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"const handleChange = (e) => {\n        // Estamos devolviendo un objeto a traves de la funcion flecha\n        setTodo((old) => ({\n            ...old ,\n            [e.target.name] : e.target.value\n        }))\n  }\n\n")),(0,t.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,t.kt)("div",{parentName:"div",className:"admonition-heading"},(0,t.kt)("h5",{parentName:"div"},(0,t.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,t.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,t.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Observacion")),(0,t.kt)("div",{parentName:"div",className:"admonition-content"},(0,t.kt)("ul",{parentName:"div"},(0,t.kt)("li",{parentName:"ul"},"como se puede ver, el parametro old es el valor anterior al actual de la variable  todo")))),(0,t.kt)("h3",{id:"el-atributo-value-va-antes-que-onchange"},"El atributo value va antes que onChange"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'<form  onSubmit={handleSubmit}>\n     <input\n       type="text" \n       placeholder=\'Ingrese TODO\'\n       name=\'todoName\'\n       className="form-control mb-2"\n       value={todo.todoName}\n       onChange={handleChange}\n\n       />\n     <textarea\n         name="todoDescripcion"\n         id=""\n         cols="30"\n         rows="10" \n         className="form-control mb-2"\n         placeholder="Ingrese descripcion del todo"\n         value={todo.todoDescripcion}\n         onChange={handleChange}\n       \n        \n         />\n         <select name="todoEstado" className="form-control mb-2"  value={todo.todoEstado}  onChange={ handleChange} >\n             <option value="pendiente">Pendiente</option>\n             <option value="completada">Completada</option>\n         </select>\n         <button className="btn btn-primary" type="submit">Agregar</button>\n     </form>\n\n')),(0,t.kt)("h2",{id:"checkbox"},"Checkbox"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"El checkbox lo manejamos como si fuera un input."),(0,t.kt)("li",{parentName:"ul"},"el atributo for se debe eliminar ya que estamos escribiendo en jsx y en javascript for es una palabra reservada."),(0,t.kt)("li",{parentName:"ul"},"Se usa el atributo checked en lugar de value.")),(0,t.kt)("p",null,"FormControlado.jsx"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'import React , {useState} from \'react\'\n\nconst FormControlado = () => {\n  // El valor inicial de la variable  todo es un objeto\n     const [todo , setTodo] = useState({\n      todoName: \'\' ,\n      todoDescripcion: \'\' ,\n      todoEstado: \'pendiente\' ,\n      todoCheck : false ,\n\n     })\n  const  handleSubmit = (e) => {\n     e.preventDefault();\n  }\n  const handleChange = (e) => {\n        // Estamos devolviendo un objeto a traves de la funcion flecha\n        setTodo((old) => ({\n            ...old ,\n            // preguntamos si el campo es de tipo checkbox ya que el .value devuelve un string y el .checked un valor booleano\n            [e.target.name] : e.target.type === "checkbox" ? e.target.checked : e.target.value \n        }))\n  }\n  return (\n    <>\n    <h2>Controlado</h2>\n     <form  onSubmit={handleSubmit}>\n     <input\n       type="text" \n       placeholder=\'Ingrese TODO\'\n       name=\'todoName\'\n       className="form-control mb-2"\n       value={todo.todoName}\n       onChange={handleChange}\n\n       />\n     <textarea\n         name="todoDescripcion"\n         id=""\n         cols="30"\n         rows="10" \n         className="form-control mb-2"\n         placeholder="Ingrese descripcion del todo"\n         value={todo.todoDescripcion}\n         onChange={handleChange}\n       \n        \n         />\n         <select name="todoEstado" className="form-control mb-2"  value={todo.todoEstado}  onChange={ handleChange} >\n             <option value="pendiente">Pendiente</option>\n             <option value="completada">Completada</option>\n         </select>\n         <div className="form-check">\n    <input\n        className="form-check-input"\n        type="checkbox"\n        id="flexCheckDefault"\n        checked={todo.todoCheck}\n        onChange={handleChange}\n        name="todoCheck"\n    />\n    <label\n        className="form-check-label"\n        htmlFor="flexCheckDefault"\n    >\n        Dar prioridad\n    </label>\n</div>\n         <button className="btn btn-primary" type="submit">Agregar</button>\n     </form>\n    </>\n  )\n}\n\nexport default FormControlado\n\n')),(0,t.kt)("p",null,"Lo abreviamos:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'const handleChange = (e) => {\n    const {name , value  , checked , type} = e.target;\n        // Estamos devolviendo un objeto a traves de la funcion flecha\n        setTodo((old) => ({\n            ...old ,\n            // preguntamos si el campo es de tipo checkbox ya que el .value devuelve un string y el .checked un valor booleano\n            [name] : type === "checkbox" ? checked: value \n        }))\n  }\n\n')),(0,t.kt)("h2",{id:"peque\xf1a-validacion"},"Peque\xf1a validacion"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Es mejor usar una librer\xeda externa que se encargue de las validaciones ya que son m\xe1s seguras.")),(0,t.kt)("p",null,"FormControlado.jsx"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'import React , {useState} from \'react\'\n\nconst FormControlado = () => {\n  // El valor inicial de la variable  todo es un objeto\n     const [todo , setTodo] = useState({\n      todoName: \'\' ,\n      todoDescripcion: \'\' ,\n      todoEstado: \'pendiente\' ,\n      todoCheck : false ,\n\n     })\n  const [error , setError] = useState(false);\n  const  handleSubmit = (e) => {\n    e.preventDefault();\n    const {todoName , todoDescripcion} = todo;\n    if (!todoName.trim() ||  !todoDescripcion.trim()) {\n      setError(true);\n      return;\n    }\n     setError(false);\n  }\n  const handleChange = (e) => {\n    const {name , value  , checked , type} = e.target;\n        // Estamos devolviendo un objeto a traves de la funcion flecha\n        setTodo((old) => ({\n            ...old ,\n            // preguntamos si el campo es de tipo checkbox ya que el .value devuelve un string y el .checked un valor booleano\n            [name] : type === "checkbox" ? checked: value \n        }))\n  }\n  // Creamos un componente dentro de este componente\n  const PintarError  = () => (\n    <div className="alert alert-danger">Campos obligatorios</div>\n  )\n\n  return (\n    <>\n    <h2>Controlado</h2>\n    {\n      //  Si existe un error , renderizamos el componente PintarError\n      error ? <PintarError/> : null\n    }\n     <form  onSubmit={handleSubmit}>\n     <input\n       type="text" \n       placeholder=\'Ingrese TODO\'\n       name=\'todoName\'\n       className="form-control mb-2"\n       value={todo.todoName}\n       onChange={handleChange}\n\n       />\n     <textarea\n         name="todoDescripcion"\n         id=""\n         cols="30"\n         rows="10" \n         className="form-control mb-2"\n         placeholder="Ingrese descripcion del todo"\n         value={todo.todoDescripcion}\n         onChange={handleChange}\n       \n        \n         />\n         <select name="todoEstado" className="form-control mb-2"  value={todo.todoEstado}  onChange={ handleChange} >\n             <option value="pendiente">Pendiente</option>\n             <option value="completada">Completada</option>\n         </select>\n         <div className="form-check">\n    <input\n        className="form-check-input"\n        type="checkbox"\n        id="flexCheckDefault"\n        checked={todo.todoCheck}\n        onChange={handleChange}\n        name="todoCheck"\n    />\n    <label\n        className="form-check-label"\n        htmlFor="flexCheckDefault"\n    >\n        Dar prioridad\n    </label>\n</div>\n         <button className="btn btn-primary" type="submit">Agregar</button>\n     </form>\n    </>\n  )\n}\n\nexport default FormControlado\n\n')),(0,t.kt)("p",null,"Alternativa:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"En lugar de usar un operador ternario , usamos \u201c&&\u201d para especificar qu\xe9 pasar\xeda si es true (equivale a un if sin else).")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"return (\n    <>\n    <h2>Controlado</h2>\n    {\n      //  Si existe un error , renderizamos el componente PintarError\n      error && <PintarError/> \n    }\n     <form  onSubmit={handleSubmit}>\n\n")),(0,t.kt)("h2",{id:"validaci\xf3n"},"Validaci\xf3n"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Podemos usar ",(0,t.kt)("a",{parentName:"li",href:"https://react-hook-form.com/"},"React hook Form"),"  o ",(0,t.kt)("a",{parentName:"li",href:"https://formik.org/"},"Formik")," para las validaciones")))}m.isMDXComponent=!0}}]);