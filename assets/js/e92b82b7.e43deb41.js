"use strict";(self.webpackChunkdocumentacion=self.webpackChunkdocumentacion||[]).push([[4350],{5680:(e,n,o)=>{o.d(n,{xA:()=>d,yg:()=>g});var a=o(6540);function t(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){t(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function l(e,n){if(null==e)return{};var o,a,t=function(e,n){if(null==e)return{};var o,a,t={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],n.indexOf(o)>=0||(t[o]=e[o]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var s=a.createContext({}),c=function(e){var n=a.useContext(s),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},d=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var o=e.components,t=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(o),u=t,g=m["".concat(s,".").concat(u)]||m[u]||p[u]||r;return o?a.createElement(g,i(i({ref:n},d),{},{components:o})):a.createElement(g,i({ref:n},d))}));function g(e,n){var o=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=o.length,i=new Array(r);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:t,i[1]=l;for(var c=2;c<r;c++)i[c]=o[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},3585:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=o(8168),t=(o(6540),o(5680));const r={sidebar_position:4},i="App todo",l={unversionedId:"React/todoApp",id:"React/todoApp",title:"App todo",description:"Iniciar App",source:"@site/docs/React/todoApp.md",sourceDirName:"React",slug:"/React/todoApp",permalink:"/documentacion/docs/React/todoApp",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/React/todoApp.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"React",previous:{title:"Formulario",permalink:"/documentacion/docs/React/formulario"},next:{title:"Consumir API",permalink:"/documentacion/docs/React/api"}},s={},c=[{value:"Iniciar App",id:"iniciar-app",level:2},{value:"Formulario (Controlado)",id:"formulario-controlado",level:2},{value:"Submit",id:"submit",level:3},{value:"Comunicacion entre componentes:",id:"comunicacion-entre-componentes",level:2},{value:"Componente Todo",id:"componente-todo",level:2},{value:"Eliminar Todo",id:"eliminar-todo",level:2},{value:"Editar",id:"editar",level:2},{value:"Hook Personalizado",id:"hook-personalizado",level:2},{value:"LocalStorage con useEffect",id:"localstorage-con-useeffect",level:2},{value:"UseEffect",id:"useeffect",level:3},{value:"Recibe un callback que se ejecuta cada vez que se renderiza el componente.",id:"recibe-un-callback-que-se-ejecuta-cada-vez-que-se-renderiza-el-componente",level:4},{value:"Segundo parametro",id:"segundo-parametro",level:4},{value:"Se puede crear varios UseEffect",id:"se-puede-crear-varios-useeffect",level:4},{value:"Array Segundo Parametro",id:"array-segundo-parametro",level:4},{value:"Deploy",id:"deploy",level:2},{value:"Recursos",id:"recursos",level:2}],d={toc:c},m="wrapper";function p(e){let{components:n,...o}=e;return(0,t.yg)(m,(0,a.A)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"app-todo"},"App todo"),(0,t.yg)("h2",{id:"iniciar-app"},"Iniciar App"),(0,t.yg)("p",null,"En la carpeta raiz (que contiene los proyectos(app))"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-powershell"},"npx create-react-app todo-app \n")),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"Accedemos a la carpeta todo-app"),(0,t.yg)("li",{parentName:"ol"},"En la carpeta src borramos todo menos el index.js"),(0,t.yg)("li",{parentName:"ol"},"Creamos el archivo App.jsx (componente principal)")),(0,t.yg)("p",null,"index.js "),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport App from './App';\nReactDOM.render(\n  <React.StrictMode>\n     <App/>\n  </React.StrictMode>,\n  document.getElementById('root')\n);\n\n")),(0,t.yg)("p",null,"src/App.JSX"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},"import React from 'react'\nimport TodoList from './components/TodoList'\n\nconst App = () => {\n    return (\n        <div className=\"container\"> \n            <h1>App</h1>\n            <TodoList/>\n\n        </div>\n    )\n}\n\nexport default App\n\n")),(0,t.yg)("ol",{start:4},(0,t.yg)("li",{parentName:"ol"},"Creamos la carpeta components dentro de src")),(0,t.yg)("p",null,"Creamos TodoList.JSX"),(0,t.yg)("p",null,"src/components/TodoList.jsx"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},"import React from 'react'\n\nimport React from 'react'\nimport Formulario from './Formulario'\n\nconst TodoList = () => {\n  return (\n    <div> \n        <Formulario/>\n    </div>\n  )\n}\n\nexport default TodoList\n\n")),(0,t.yg)("p",null,"src/components/Formulario.jsx"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},"import React from 'react'\n\nconst Formulario = () => {\n  return (\n    <><h3>Agregar TODO</h3></>\n  )\n}\n\nexport default Formulario\n\n")),(0,t.yg)("p",null,"index.html "),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <meta name="theme-color" content="#000000" />\n    <meta\n      name="description"\n      content="Web site created using create-react-app"\n    />\n    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />\n    \x3c!--\n      manifest.json provides metadata used when your web app is installed on a\n      user\'s mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/\n    --\x3e\n    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />\n    \x3c!--\n      Notice the use of %PUBLIC_URL% in the tags above.\n      It will be replaced with the URL of the `public` folder during the build.\n      Only files inside the `public` folder can be referenced from the HTML.\n\n      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will\n      work correctly both with client-side routing and a non-root public URL.\n      Learn how to configure a non-root public URL by running `npm run build`.\n    --\x3e\n    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">\n    <title>React App</title>\n  </head>\n  <body>\n    <noscript>You need to enable JavaScript to run this app.</noscript>\n    <div id="root"></div>\n    \x3c!--\n      This HTML file is a template.\n      If you open it directly in the browser, you will see an empty page.\n\n      You can add webfonts, meta tags, or analytics to this file.\n      The build step will place the bundled scripts into the <body> tag.\n\n      To begin the development, run `npm start` or `yarn start`.\n      To create a production bundle, use `npm run build` or `yarn build`.\n    --\x3e\n  </body>\n</html>\n\n')),(0,t.yg)("h2",{id:"formulario-controlado"},"Formulario (Controlado)"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Vamos a usar ",(0,t.yg)("a",{parentName:"li",href:"https://sweetalert2.github.io/"},"sweetAlert2")," Para las alertas ")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-powershell"},"npm install sweetalert2\n")),(0,t.yg)("div",{className:"admonition admonition-tip alert alert--success"},(0,t.yg)("div",{parentName:"div",className:"admonition-heading"},(0,t.yg)("h5",{parentName:"div"},(0,t.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,t.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,t.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,t.yg)("div",{parentName:"div",className:"admonition-content"},(0,t.yg)("ul",{parentName:"div"},(0,t.yg)("li",{parentName:"ul"},"El atributo for se remplaza por htmlFor en el checkbox"),(0,t.yg)("li",{parentName:"ul"},"El button es de tipo submit por defecto.")))),(0,t.yg)("p",null,"src/components/Formulario.jsx"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'import React, { useState } from \'react\'\n\nconst Formulario = () => {\n    const initialState = {\n        nombre: \'\',\n        descripcion: \'\',\n        estado: \'pendiente\' ,\n        prioridad: false\n    }\n\n    const [todo , setTodo] =  useState(initialState)\n    const {nombre  , descripcion , estado , prioridad} = todo;\n\n    const  handleChange = e => {\n        const {name , value , checked , type} = e.target;\n        setTodo((old) => ({\n             ...old ,\n             [name] : type === "checkbox" ? checked : value\n        }))\n    }\n    return (\n        <>\n            <h3>Agregar TODO</h3>\n            <form action="">\n                <input\n                    type="text"\n                    className="form-control mb-2"\n                    name="nombre"\n                    placeholder="Ingrese TODO nombre"    value={nombre}     onChange = {handleChange}/>\n                   \n                <textarea\n                    className="form-control mb-2"\n                    name="descripcion"\n                    placeholder="Ingrese descripcion"\n                    value={descripcion}\n                    onChange = {handleChange}\n                />\n                <select name="estado" className="form-control mb-2" value={estado}     onChange = {handleChange}>\n                    <option value="pendiente">pendiente</option>\n                    <option value="completado">completado</option>\n                </select>\n                <div className="form-check">\n                    <input\n                        className="form-check-input"\n                        type="checkbox"\n                        id="flexCheckDefault"\n                        onChange = {handleChange}\n                        name="prioridad"\n                        checked={prioridad}\n                    />\n                    <label\n                        className="form-check-label"\n                        htmlFor="flexCheckDefault"\n                    >\n                        Dar prioridad\n                    </label>\n                </div>\n                <button className="btn btn-primary my-2">Enviar</button>\n            </form>\n\n        </>\n    )\n}\n\nexport default Formulario\n\n')),(0,t.yg)("h3",{id:"submit"},"Submit"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'import React, { useState } from \'react\'\nimport Swal from \'sweetalert2\'\nconst Formulario = () => {\n    const initialState = {\n        nombre: \'\',\n        descripcion: \'\',\n        estado: \'pendiente\' ,\n        prioridad: false\n    }\n\n    const [todo , setTodo] =  useState(initialState)\n    const {nombre  , descripcion , estado , prioridad} = todo;\n\n    const  handleChange = e => {\n        const {name , value , checked , type} = e.target;\n        setTodo((old) => ({\n             ...old ,\n             [name] : type === "checkbox" ? checked : value\n        }))\n    }\n    const handleSubmit = e => {\n        e.preventDefault();\n       //Si esta vacio\n       if (!nombre.trim()) {\n         \n           // Dejamos el nombre en focus\n           // el e.target[0] === el input con el name="nombre"; \n           // el e.target[0] === el primer hijo del formulario\n           e.target[0].focus()\n           // Creamos la alerta\n           Swal.fire({\n            title: \'Error!\',\n            text: \'No deje el nombre en blanco\',\n            icon: \'error\',\n        \n           })\n           return;\n       }\n// Si esta vacio\n       if (!descripcion.trim()) {\n// Dejamos la descripcion en focus\n           // el e.target[1] === el textarea con el name="descripcion"; \n           // el e.target[1] === el segundo hijo del formulario\n           e.target[1].focus()\n           // Creamos la alerta\n           Swal.fire({\n            title: \'Error!\',\n            text: \'No deje la descripcion en blanco\',\n            icon: \'error\',\n        \n           })\n           return;\n       }\n       // Si pasa las dos validaciones , tiramos una alerta de exito\n       Swal.fire({\n        title: \'Exito!\',\n        text: \'Tarea agregada\',\n        icon: \'success\',\n    \n       })\n    }\n    return (\n        <>\n            <h3>Agregar TODO</h3>\n            <form action="" onSubmit={handleSubmit}>\n                <input\n                    type="text"\n                    className="form-control mb-2"\n                    name="nombre"\n                    placeholder="Ingrese TODO nombre"    value={nombre}     onChange = {handleChange}/>\n                   \n                <textarea\n                    className="form-control mb-2"\n                    name="descripcion"\n                    placeholder="Ingrese descripcion"\n                    value={descripcion}\n                    onChange = {handleChange}\n                />\n                <select name="estado" className="form-control mb-2" value={estado}     onChange = {handleChange}>\n                    <option value="pendiente">pendiente</option>\n                    <option value="completado">completado</option>\n                </select>\n                <div className="form-check">\n                    <input\n                        className="form-check-input"\n                        type="checkbox"\n                        id="flexCheckDefault"\n                        onChange = {handleChange}\n                        name="prioridad"\n                        checked={prioridad}\n                    />\n                    <label\n                        className="form-check-label"\n                        htmlFor="flexCheckDefault"\n                    >\n                        Dar prioridad\n                    </label>\n                </div>\n                <button className="btn btn-primary my-2">Enviar</button>\n            </form>\n\n        </>\n    )\n}\n\nexport default Formulario\n\n')),(0,t.yg)("h2",{id:"comunicacion-entre-componentes"},"Comunicacion entre componentes:"),(0,t.yg)("p",null,"src/components/TodoList.jsx"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},"import React, { useState } from 'react'\nimport Formulario from './Formulario'\n\nconst TodoList = () => {\n  const [todos , setTodos] = useState([]);\n   const agregarTodo = todo => {\n        setTodos((old) => [...old , todo])\n   }\n\n  return (\n    <div> \n        <Formulario  agregarTodo={agregarTodo}/>\n    </div>\n  )\n}\n\nexport default TodoList\n\n")),(0,t.yg)("p",null,"src/components/Formulario.jsx"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},"import React, { useState } from 'react'\nimport Swal from 'sweetalert2'\nimport { v4 as uuidv4 } from 'uuid';\nconst Formulario = ({ agregarTodo }) => {\n    const initialState = {\n        nombre: '',\n        descripcion: '',\n        estado: 'pendiente',\n        prioridad: false\n    }\n\n    const [todo, setTodo] = useState(initialState)\n    const { nombre, descripcion, estado, prioridad } = todo;\n\n    const handleChange = e => {\n        const { name, value, checked, type } = e.target;\n        setTodo((old) => ({\n            ...old,\n            [name]: type === \"checkbox\" ? checked : value\n        }))\n    }\n    const handleSubmit = e => {\n        e.preventDefault();\n        //Si esta vacio\n        if (!nombre.trim()) {\n\n            // Dejamos el nombre en focus\n            // el e.target[0] === el input con el name=\"nombre\"; \n            // el e.target[0] === el primer hijo del formulario\n            e.target[0].focus()\n            // Creamos la alerta\n            Swal.fire({\n                title: 'Error!',\n                text: 'No deje el nombre en blanco',\n                icon: 'error',\n\n            })\n            return;\n        }\n        // Si esta vacio\n        if (!descripcion.trim()) {\n            // Dejamos la descripcion en focus\n            // el e.target[1] === el textarea con el name=\"descripcion\"; \n            // el e.target[1] === el segundo hijo del formulario\n            e.target[1].focus()\n            // Creamos la alerta\n            Swal.fire({\n                title: 'Error!',\n                text: 'No deje la descripcion en blanco',\n                icon: 'error',\n\n            })\n            return;\n        }\n        // Si pasa las dos validaciones , tiramos una alerta de exito\n        Swal.fire({\n            title: 'Exito!',\n            text: 'Tarea agregada',\n            icon: 'success',\n\n        })\n        agregarTodo({\n            // nombre : nombre \n            // descripcion : descripcion\n            // ...\n            nombre,\n            descripcion,\n            estado: estado === 'pendiente' ? false : true,\n            prioridad,\n            id: uuidv4()\n        });\n       setTodo(initialState);\n    }\n\n")),(0,t.yg)("h2",{id:"componente-todo"},"Componente Todo"),(0,t.yg)("p",null,"src/components/TodoList.jsx"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'return (\n    <div> \n        <Formulario  agregarTodo={agregarTodo}/>\n        <ul className="list-group list-group-numbered mt-2">\n        {\n          \n          todos.map( item => (\n            <Todo key={item.id} todo={item}/>\n          )\n\n          )\n        }\n        </ul>\n    </div>\n  )\n\n')),(0,t.yg)("p",null,"src/components/Todo.jsx"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'import React from \'react\'\n\nconst Todo = (props) => {\n    const { nombre, descripcion, estado, prioridad } = props.todo;\n  return (\n    <>\n      <li className="list-group-item d-flex justify-content-between align-items-start">\n            <div className="ms-2 me-auto">\n                <div className="fw-bold">\n                    {nombre} ({estado ? "Finalizado" : "Pendiente"})\n                </div>\n                <p>{descripcion}</p>\n                <div>\n                    <button className="btn btn-sm btn-danger me-1">\n                        Eliminar\n                    </button>\n                    <button className="btn btn-sm btn-warning me-1">\n                        Editar\n                    </button>\n                </div>\n            </div>\n            <span className="badge bg-primary rounded-pill">\n                 {/* Si es verdadero */}\n                {prioridad && "prioritario"}\n            </span>\n        </li>\n    </>\n  )\n}\n\nexport default Todo\n\n')),(0,t.yg)("h2",{id:"eliminar-todo"},"Eliminar Todo"),(0,t.yg)("p",null,"TodoList.jsx"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'const eliminarTodo = (id) => {\n       setTodos((old) => old.filter(item => item.id !== id));\n   }\n  return (\n    <div> \n        <Formulario  agregarTodo={agregarTodo}/>\n        <ul className="list-group list-group-numbered mt-2">\n        {\n          \n          todos.map( item => (\n            <Todo key={item.id} todo={item} eliminarTodo={eliminarTodo}/>\n          )\n\n          )\n        }\n        </ul>\n    </div>\n  )\n\n')),(0,t.yg)("p",null,"Todo.JSX"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'const Todo = ({todo , eliminarTodo}) => {\n    const { id , nombre, descripcion, estado, prioridad } = todo;\n  return (\n    <>\n      <li className="list-group-item d-flex justify-content-between align-items-start">\n            <div className="ms-2 me-auto">\n                <div className="fw-bold">\n                    {nombre} ({estado ? "Finalizado" : "Pendiente"})\n                </div>\n                <p>{descripcion}</p>\n                <div>\n                    <button className="btn btn-sm btn-danger me-1" onClick={() => { eliminarTodo(id)}}>\n                        Eliminar \n                    </button>\n                    <button className="btn btn-sm btn-warning me-1">\n                        Editar\n                    </button>\n                </div>\n            </div>\n            <span className="badge bg-primary rounded-pill">\n                 {/* Si es verdadero */}\n                {prioridad && "prioritario"}\n            </span>\n        </li>\n    </>\n  )\n}\n\n')),(0,t.yg)("h2",{id:"editar"},"Editar"),(0,t.yg)("p",null,"TodoList.jsx"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},' const editarTodo = (id) => {\n      const editarTodos = todos.map(item => (\n        // Si es igual a la id cambiamos el estado (sobreescribimos la propiedad)\n        item.id === id ? {...item, estado:!item.estado} : item\n      ))\n      setTodos(editarTodos)\n   }\n  return (\n    <div> \n        <Formulario  agregarTodo={agregarTodo}/>\n        <ul className="list-group list-group-numbered mt-2">\n        {\n          \n          todos.map( item => (\n            <Todo key={item.id} todo={item} eliminarTodo={eliminarTodo} editarTodo={editarTodo}/>\n          )\n\n          )\n        }\n        </ul>\n    </div>\n  )\n\n')),(0,t.yg)("p",null,"Todo.JSX"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'const Todo = ({todo , eliminarTodo , editarTodo}) => {\n    const { id , nombre, descripcion, estado, prioridad } = todo;\n  return (\n    <>\n      <li className="list-group-item d-flex justify-content-between align-items-start">\n            <div className="ms-2 me-auto">\n                <div className="fw-bold">\n                    {nombre} ({estado ? "Finalizado" : "Pendiente"})\n                </div>\n                <p>{descripcion}</p>\n                <div>\n                    <button className="btn btn-sm btn-danger me-1" onClick={() => { eliminarTodo(id)}}>\n                        Eliminar \n                    </button>\n                    <button className="btn btn-sm btn-warning me-1" onClick={() => { editarTodo(id)}}>\n                        Editar\n                    </button>\n                </div>\n            </div>\n            <span className="badge bg-primary rounded-pill">\n                 {/* Si es verdadero */}\n                {prioridad && "prioritario"}\n            </span>\n        </li>\n    </>\n  )\n}\n\n')),(0,t.yg)("h2",{id:"hook-personalizado"},"Hook Personalizado"),(0,t.yg)("div",{className:"admonition admonition-tip alert alert--success"},(0,t.yg)("div",{parentName:"div",className:"admonition-heading"},(0,t.yg)("h5",{parentName:"div"},(0,t.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,t.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,t.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"hook")),(0,t.yg)("div",{parentName:"div",className:"admonition-content"},(0,t.yg)("ul",{parentName:"div"},(0,t.yg)("li",{parentName:"ul"},"Por convenci\xf3n , los hook empiezan con use"),(0,t.yg)("li",{parentName:"ul"},"Usamos el snippet rafc"),(0,t.yg)("li",{parentName:"ul"},"Un hook es una funci\xf3n (En este ejemplo se llama useFormulario)")))),(0,t.yg)("p",null,"src/hooks/useFormulario.js"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},"import React, { useState } from 'react'\n\nexport const useFormulario = ( initialState = {}) => {\n    const [inputs , setInputs] = useState(initialState)\n    const handleChange = e => {\n        const { name, value, checked, type } = e.target;\n        setInputs((old) => ({\n            ...old,\n            [name]: type === \"checkbox\" ? checked : value\n        }))\n    }\n    const reset = () => {\n         setInputs(initialState);\n    }\n  return [inputs , handleChange , reset];\n\n")),(0,t.yg)("p",null,"Formulario.jsx"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'import React from \'react\'\nimport Swal from \'sweetalert2\'\nimport { v4 as uuidv4 } from \'uuid\';\nimport { useFormulario } from \'../hooks/useFormulario\';\nconst Formulario = ({ agregarTodo }) => {\n    const initialState = {\n        nombre: \'Todo 1\',\n        descripcion: \'Descripcion Todo 1\',\n        estado: \'pendiente\',\n        prioridad: false\n    }\n\n    const [inputs , handleChange , reset] = useFormulario(initialState)\n    const { nombre, descripcion, estado, prioridad } = inputs;\n\n\n    const handleSubmit = e => {\n        e.preventDefault();\n        //Si esta vacio\n        if (!nombre.trim()) {\n\n            // Dejamos el nombre en focus\n            // el e.target[0] === el input con el name="nombre"; \n            // el e.target[0] === el primer hijo del formulario\n            e.target[0].focus()\n            // Creamos la alerta\n            Swal.fire({\n                title: \'Error!\',\n                text: \'No deje el nombre en blanco\',\n                icon: \'error\',\n\n            })\n            return;\n        }\n        // Si esta vacio\n        if (!descripcion.trim()) {\n            // Dejamos la descripcion en focus\n            // el e.target[1] === el textarea con el name="descripcion"; \n            // el e.target[1] === el segundo hijo del formulario\n            e.target[1].focus()\n            // Creamos la alerta\n            Swal.fire({\n                title: \'Error!\',\n                text: \'No deje la descripcion en blanco\',\n                icon: \'error\',\n\n            })\n            return;\n        }\n        // Si pasa las dos validaciones , tiramos una alerta de exito\n        Swal.fire({\n            title: \'Exito!\',\n            text: \'Tarea agregada\',\n            icon: \'success\',\n\n        })\n        agregarTodo({\n            // nombre : nombre \n            // descripcion : descripcion\n            // ...\n            nombre,\n            descripcion,\n            estado: estado === \'pendiente\' ? false : true,\n            prioridad,\n            id: uuidv4()\n        });\n       reset();\n    }\n    return (\n        <>\n            <h3>Agregar TODO</h3>\n            <form action="" onSubmit={handleSubmit}>\n                <input\n                    type="text"\n                    className="form-control mb-2"\n                    name="nombre"\n                    placeholder="Ingrese TODO nombre" value={nombre} onChange={handleChange} />\n\n                <textarea\n                    className="form-control mb-2"\n                    name="descripcion"\n                    placeholder="Ingrese descripcion"\n                    value={descripcion}\n                    onChange={handleChange}\n                />\n                <select name="estado" className="form-control mb-2" value={estado} onChange={handleChange}>\n                    <option value="pendiente">pendiente</option>\n                    <option value="completado">completado</option>\n                </select>\n                <div className="form-check">\n                    <input\n                        className="form-check-input"\n                        type="checkbox"\n                        id="flexCheckDefault"\n                        onChange={handleChange}\n                        name="prioridad"\n                        checked={prioridad}\n                    />\n                    <label\n                        className="form-check-label"\n                        htmlFor="flexCheckDefault"\n                    >\n                        Dar prioridad\n                    </label>\n                </div>\n                <button className="btn btn-primary my-2">Enviar</button>\n            </form>\n\n        </>\n    )\n}\n\nexport default Formulario\n\n')),(0,t.yg)("h2",{id:"localstorage-con-useeffect"},"LocalStorage con useEffect"),(0,t.yg)("h3",{id:"useeffect"},"UseEffect"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"UseEffect es un hook ."),(0,t.yg)("li",{parentName:"ul"},"Es una funci\xf3n que se ejecuta las veces que nosotros consideremos necesaria. (las veces que quieras)")),(0,t.yg)("h4",{id:"recibe-un-callback-que-se-ejecuta-cada-vez-que-se-renderiza-el-componente"},"Recibe un callback que se ejecuta cada vez que se renderiza el componente."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'  useEffect(() => {\n    console.log("hola");\n  })\n\n')),(0,t.yg)("h4",{id:"segundo-parametro"},"Segundo parametro"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Tiene un Segundo parametro que es un array."),(0,t.yg)("li",{parentName:"ul"},"Si es un array vacio , solo se ejecuta una vez la funci\xf3n(callback) (sin importar cuantas veces se renderize).")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'  useEffect(() => {\n    console.log("hola");\n  } , [])\n\n')),(0,t.yg)("h4",{id:"se-puede-crear-varios-useeffect"},"Se puede crear varios UseEffect"),(0,t.yg)("h4",{id:"array-segundo-parametro"},"Array Segundo Parametro"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"En el array del segundo par\xe1metro, podemos poner elementos."),(0,t.yg)("li",{parentName:"ul"},"Si algunos de los elementos sufren un cambio, se ejecuta el callback.")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"}," useEffect(() => {\n\n  } , [todos])\n\n")),(0,t.yg)("p",null,"src/components/TodoList.jsx"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},"import React, { useEffect, useState } from 'react'\nimport Formulario from './Formulario'\nimport Todo from './Todo';\n\nconst TodoList = () => {\n  const [todos , setTodos] = useState([]);\n  useEffect(() => {\n    // Si existe\n    if (localStorage.getItem('todos')) {\n          setTodos(JSON.parse(localStorage.getItem('todos')))\n    }\n  } , [])\n\n  useEffect(() => {\n    localStorage.setItem(\"todos\" , JSON.stringify(todos) )\n  } , [todos])\n   const agregarTodo = todo => {\n        setTodos((old) => [...old , todo])\n   }\n\n   const eliminarTodo = (id) => {\n       setTodos((old) => old.filter(item => item.id !== id));\n   }\n   const editarTodo = (id) => {\n      const editarTodos = todos.map(item => (\n        // Si es igual a la id cambiamos el estado (sobreescribimos la propiedad)\n        item.id === id ? {...item, estado:!item.estado} : item\n      ))\n      setTodos(editarTodos)\n   }\n  return (\n    <div> \n        <Formulario  agregarTodo={agregarTodo}/>\n        <ul className=\"list-group list-group-numbered mt-2\">\n        {\n          \n          todos.map( item => (\n            <Todo key={item.id} todo={item} eliminarTodo={eliminarTodo} editarTodo={editarTodo}/>\n          )\n\n          )\n        }\n        </ul>\n    </div>\n  )\n}\n\nexport default TodoList\n")),(0,t.yg)("h2",{id:"deploy"},"Deploy"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"Usa el  script build de package.json"),(0,t.yg)("li",{parentName:"ol"},"La carpeta que genera tiene un index.html que SOLO SE EJECUTA EN UN SERVIDOR , NO EN EL NAVEGADOR"),(0,t.yg)("li",{parentName:"ol"},"la carpeta la ponemos en ",(0,t.yg)("a",{parentName:"li",href:"https://www.netlify.com/"},"netlify")," ")),(0,t.yg)("h2",{id:"recursos"},"Recursos"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://ant.design/"},"ant design")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://fkhadra.github.io/react-toastify/introduction"},"react toastify")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://www.npmjs.com/package/react-alert"},"react alert")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://react-hot-toast.com/"},"react hot toast")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://www.npmjs.com/package/uuid"},"uuid"))))}p.isMDXComponent=!0}}]);