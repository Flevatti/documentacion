---
sidebar_position: 3
---
# Formulario

Configuracion Inicial

index.js
```js
import React from 'react';
import ReactDOM from 'react-dom';
// Importamos el componente 
import App from './App';

// Renderiza el componente principal en el DIV 
ReactDOM.render(
  // Modo estricto -- Opcional
  <React.StrictMode>
     {/* // Componente Principal  */}
         <App />

  </React.StrictMode>,
  // Elemento
  // EL elemento DIV del public/index.html
  document.getElementById('root')
);

```
App.jsx
```js

import React from 'react'
import Contador from './components/Contador'

const App = () => {
  
    
  return (
      <>
       <div className="container">
          <h1>Formularios</h1>
         
     
       </div>
       </>

  )
}

export default App

```
npm start
:::tip Observacion 
Pueden omitir el comando “run”
:::
- [Extension para chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es)
- [Extension para firefox](https://addons.mozilla.org/es/firefox/addon/react-devtools/)

## Formulario no controlado
- [link](https://es.reactjs.org/docs/uncontrolled-components.html)
-	La alternativa a los componente controlado son los componentes no controlados, donde los datos del formulario son manejados por el propio DOM.
- Para escribir un componente no controlado, puedes usar una referencia para que obtengas los valores del formulario desde el DOM.
### refs
 - [link](https://es.reactjs.org/docs/refs-and-the-dom.html)
 - Las referencias proporcionan una forma de acceder a los nodos del DOM o a elementos React creados en el método de renderizado.

### useRef 
- [Reactjs.org](https://es.reactjs.org/docs/hooks-reference.html#useref)
- [Nueva documentación](https://beta.es.reactjs.org/reference/react/useRef)
- `useRef` es un hook de React que devuelve un objeto `ref` mutable cuya propiedad `current` se inicializa con el valor pasado como argumento (initialValue).
- El objeto `ref` se mantiene persistente durante todo el ciclo de vida del componente, es decir, no se reinicia en cada renderizado.
-  A través de la prop `ref`, podemos asignar una referencia de un elemento HTML o componente al objeto ref.
- Es similar a `document.getElementById` en JavaScript, ya que permite acceder a un elemento del DOM, pero de una forma integrada y recomendada en React.
:::tip 
- React utiliza un virtual DOM para renderizar 
:::
App.jsx
```js

import React from 'react'
import FormNoControlado from './components/FormNoControlado'


const App = () => {
  
    
  return (
      <>
       <div className="container">
          <h1>Formularios</h1>
            <FormNoControlado/>
     
       </div>
       </>

  )
}

export default App

```


FormNoControlado.jsx
```js

import React, { useRef } from 'react'

const FormNoControlado = () => {
    // Creamos un objeto ref mutable , que empieza con null
    const formulario = useRef(null);
     
    const handleSubmit = e => {
        e.preventDefault();
        //  la propiedad current contiene el valor del objeto ref mutable
        // formulario.current = Contiene el formulario(form)
        const datos = new FormData(formulario.current);
        // Convierto un array en un objeto 
        // Todas las keys se transforman en una propiedad del objeto con su valor correspondiente
        // objeto.key = valor
        const objetoDatos = Object.fromEntries([...datos.entries()]);
        const {todoName , todoDescripcion , todoEstado} = objetoDatos;
        // Validaciones 
        if (!todoName.trim() ||  !todoDescripcion.trim()) {
          return  console.log("Esta vacio idiota");
        }
        console.log("Paso las validaciones");
    }

  return (
    <>
     <h2>No controlado</h2>
    /* Con la prop `ref` le asignamos una referencia del elemento `<form>`
al objeto ref mutable. */
   /* Cuando el componente se renderice, `formulario.current`
contendrá una referencia al elemento `<form>`. */
     <form ref={formulario} onSubmit={handleSubmit}>
     <input
       type="text" 
       placeholder='Ingrese TODO'
       name='todoName'
       className="form-control mb-2"
       defaultValue="Tarea #01"
       />
     <textarea
         name="todoDescripcion"
         id=""
         cols="30"
         rows="10" 
         className="form-control mb-2"
         placeholder="Ingrese descripcion del todo"
         defaultValue="Descripcion Tarea #01"
         />
         <select name="todoEstado" className="form-control mb-2"  defaultValue="pendiente" >
             <option value="pendiente">Pendiente</option>
             <option value="completada">Completada</option>
         </select>
         <button className="btn btn-primary" type="submit">Agregar</button>
     </form>
    </>
  )
}

export default FormNoControlado

```
:::tip Observaciones 
- En React el textarea tiene el atributo value y lo manejamos como si fuera un input.
:::
:::tip Como se usa el ref
- La variable `formulario` es de tipo ref porque fue creada con `useRef`.
- Con la prop `ref` asignamos la referencia de un elemento o componente a una variable de tipo ref.
- `<form ref={formulario} onSubmit={handleSubmit}>` -- En esta línea, la referencia del elemento `<form>` se guarda en `formulario.current` 
- useRef es un hook de React que permite crear referencias persistentes entre renderizados. Las variables creadas con useRef suelen asignarse a la prop ref para acceder directamente a elementos del DOM.
- En React se recomienda evitar el uso frecuente de `getElementById` y `querySelector`, ya que React trabaja con un Virtual DOM y administra el DOM automáticamente.
- useRef debe usarse solo cuando realmente necesitamos acceder directamente a un elemento o guardar un valor mutable sin provocar renderizados.
- La sintaxis general es: `<elemento ref={variableRef}></elemento>` -- En esta línea de código, se asigna una referencia del elemento a variableRef (que fue creada con useRef).
:::
:::warning desventajas
- No podemos mostrar mensajes de validaciones.
- No usamos todo el potencial de REACT.
:::
## Formulario controlado
- En la mayoría de los casos, se recomienda usar componentes controlados para implementar formularios en React.
-	Un formulario controlado es aquel en el que los datos de los campos (input, textarea, select, etc.) son administrados por el estado del componente React. De esta manera, React mantiene el control total sobre los valores ingresados por el usuario.
- [Documentación oficial de React](https://es.reactjs.org/docs/forms.html#controlled-components)
-	Los componentes que renderizan un formulario también controlan lo que sucede en él mediante eventos como onChange, actualizando el estado en tiempo real.
- Gracias a esto, es posible:
  - Detectar cambios en los campos al instante.
  - Validar datos mientras el usuario escribe.
  - Mostrar mensajes de error dinámicamente.
  - Sincronizar los valores del formulario con el estado de la aplicación.
- En los formularios controlados suele utilizarse `useState` para almacenar los valores del formulario y el evento `onChange` para actualizar el estado cada vez que el usuario modifica un campo.

App.jsx
```js

import React from 'react'
import FormControlado from './components/FormControlado'
import FormNoControlado from './components/FormNoControlado'


const App = () => {
  
    
  return (
      <>
       <div className="container">
          <h1>Formularios</h1>
           <FormControlado/>
     
       </div>
       </>

  )
}

export default App

```
components/FormularioControlado.jsx
```js
import React from 'react'

const FormControlado = () => {
  return (
    <>
    <h2>Controlado</h2>
     <form  >
     <input
       type="text" 
       placeholder='Ingrese TODO'
       name='todoName'
       className="form-control mb-2"
       defaultValue="Tarea #01"
       />
     <textarea
         name="todoDescripcion"
         id=""
         cols="30"
         rows="10" 
         className="form-control mb-2"
         placeholder="Ingrese descripcion del todo"
         defaultValue="Descripcion Tarea #01"
         />
         <select name="todoEstado" className="form-control mb-2"  defaultValue="pendiente" >
             <option value="pendiente">Pendiente</option>
             <option value="completada">Completada</option>
         </select>
         <button className="btn btn-primary" type="submit">Agregar</button>
     </form>
    </>
  )
}

export default FormControlado

```

:::warning 
- REACT  inserta  el type submit al primer botón que encuentra en el formulario.
- REACT PONE DE TYPE SUBMIT AL BOTON POR DEFECTO
:::

Dos ejemplos que hacen lo mismo:

Ejemplo 1:
```js
import React , {useState} from 'react'

const FormControlado = () => {
  // El valor inicial de la variable  todo es un objeto
     const [todo , setTodo] = useState({
      todoName: '' ,
      todoDescripcion: '' ,
      todoEstado: 'pendiente'

     })
  const  handleSubmit = (e) => {
     e.preventDefault();
  }
  return (
    <>
    <h2>Controlado</h2>
     <form  onSubmit={handleSubmit}>
     <input
       type="text" 
       placeholder='Ingrese TODO'
       name='todoName'
       className="form-control mb-2"
       onChange={ e => setTodo({...todo , todoName: e.target.value})}
       />
     <textarea
         name="todoDescripcion"
         id=""
         cols="30"
         rows="10" 
         className="form-control mb-2"
         placeholder="Ingrese descripcion del todo"
         onChange={ e => setTodo({...todo , todoDescripcion: e.target.value})}
        
         />
         <select name="todoEstado" className="form-control mb-2"   onChange={ e => setTodo({...todo , todoEstado: e.target.value})} >
             <option value="pendiente">Pendiente</option>
             <option value="completada">Completada</option>
         </select>
         <button className="btn btn-primary" type="submit">Agregar</button>
     </form>
    </>
  )
}

export default FormControlado

```

:::tip Observacion  
- En este ejemplo se utilizan los eventos:
  - `onChange`: se ejecuta cada vez que el usuario modifica el valor de un campo del formulario.
  - `onSubmit`: se ejecuta cuando el formulario es enviado.
- La función setTodo actualiza el estado del formulario utilizando el `operador spread (...)`. 
- Con el `operador spread (...)` copiamos todos los valores anteriores del objeto y luego actualizamos únicamente la propiedad que cambió.
:::

Ejemplo 2:
```js
import React , {useState} from 'react'

const FormControlado = () => {
  // El valor inicial de la variable  todo es un objeto
     const [todo , setTodo] = useState({
      todoName: '' ,
      todoDescripcion: '' ,
      todoEstado: 'pendiente'

     })
  const  handleSubmit = (e) => {
     e.preventDefault();
  }
  const handleChange = (e) => {
        setTodo({
          ...todo,
          // // Usamos los corchetes ya que el nombre de la propiedad se obtiene dinámicamente desde e.target.name
          [e.target.name] : e.target.value
        })
  }
  return (
    <>
    <h2>Controlado</h2>
     <form  onSubmit={handleSubmit}>
     <input
       type="text" 
       placeholder='Ingrese TODO'
       name='todoName'
       className="form-control mb-2"
       onChange={handleChange}
       />
     <textarea
         name="todoDescripcion"
         id=""
         cols="30"
         rows="10" 
         className="form-control mb-2"
         placeholder="Ingrese descripcion del todo"
         onChange={handleChange}
        
         />
         <select name="todoEstado" className="form-control mb-2"   onChange={ handleChange} >
             <option value="pendiente">Pendiente</option>
             <option value="completada">Completada</option>
         </select>
         <button className="btn btn-primary" type="submit">Agregar</button>
     </form>
    </>
  )
}

export default FormControlado

```

### Para que sea controlado , hay que ponerle el atributo value a  todos los elementos del formulario:
```js
const FormControlado = () => {
  // El valor inicial de la variable  todo es un objeto
     const [todo , setTodo] = useState({
      todoName: '' ,
      todoDescripcion: '' ,
      todoEstado: 'pendiente'

     })
  const  handleSubmit = (e) => {
     e.preventDefault();
  }
  const handleChange = (e) => {
        setTodo({
          ...todo,
          // Usamos los corchetes para crear la propiedad ya que es dinamica
          [e.target.name] : e.target.value
        })
  }
  return (
    <>
    <h2>Controlado</h2>
     <form  onSubmit={handleSubmit}>
     <input
       type="text" 
       placeholder='Ingrese TODO'
       name='todoName'
       className="form-control mb-2"
       onChange={handleChange}
       value={todo.todoName}
       />
     <textarea
         name="todoDescripcion"
         id=""
         cols="30"
         rows="10" 
         className="form-control mb-2"
         placeholder="Ingrese descripcion del todo"
         onChange={handleChange}
         value={todo.todoDescripcion}
        
         />
         <select name="todoEstado" className="form-control mb-2"   onChange={ handleChange} value={todo.todoEstado} >
             <option value="pendiente">Pendiente</option>
             <option value="completada">Completada</option>
         </select>
         <button className="btn btn-primary" type="submit">Agregar</button>
     </form>
    </>
  )
}

```
Otra alternativa al setTodo:
```js
const handleChange = (e) => {
// Retornamos un objeto de forma implícita usando () en el callback de setTodo
        setTodo((old) => ({
            ...old ,
            [e.target.name] : e.target.value
        }))
  }

```

:::tip Observacion
- Como se puede ver, el parámetro `old` contiene el valor anterior del estado `todo`, es decir, el estado antes del cambio que estamos haciendo.
:::

### El atributo value va antes que onChange
```js
<form  onSubmit={handleSubmit}>
     <input
       type="text" 
       placeholder='Ingrese TODO'
       name='todoName'
       className="form-control mb-2"
       value={todo.todoName}
       onChange={handleChange}

       />
     <textarea
         name="todoDescripcion"
         id=""
         cols="30"
         rows="10" 
         className="form-control mb-2"
         placeholder="Ingrese descripcion del todo"
         value={todo.todoDescripcion}
         onChange={handleChange}
       
        
         />
         <select name="todoEstado" className="form-control mb-2"  value={todo.todoEstado}  onChange={ handleChange} >
             <option value="pendiente">Pendiente</option>
             <option value="completada">Completada</option>
         </select>
         <button className="btn btn-primary" type="submit">Agregar</button>
     </form>

```

## Checkbox
- El checkbox lo manejamos como si fuera un input.
- el atributo for se debe eliminar ya que estamos escribiendo en jsx y en javascript for es una palabra reservada.
- Se usa el atributo checked en lugar de value.

FormControlado.jsx
```js
import React , {useState} from 'react'

const FormControlado = () => {
  // El valor inicial de la variable  todo es un objeto
     const [todo , setTodo] = useState({
      todoName: '' ,
      todoDescripcion: '' ,
      todoEstado: 'pendiente' ,
      todoCheck : false ,

     })
  const  handleSubmit = (e) => {
     e.preventDefault();
  }
  const handleChange = (e) => {
        // Estamos devolviendo un objeto a traves de la funcion flecha
        setTodo((old) => ({
            ...old ,
            // preguntamos si el campo es de tipo checkbox ya que el .value devuelve un string y el .checked un valor booleano
            [e.target.name] : e.target.type === "checkbox" ? e.target.checked : e.target.value 
        }))
  }
  return (
    <>
    <h2>Controlado</h2>
     <form  onSubmit={handleSubmit}>
     <input
       type="text" 
       placeholder='Ingrese TODO'
       name='todoName'
       className="form-control mb-2"
       value={todo.todoName}
       onChange={handleChange}

       />
     <textarea
         name="todoDescripcion"
         id=""
         cols="30"
         rows="10" 
         className="form-control mb-2"
         placeholder="Ingrese descripcion del todo"
         value={todo.todoDescripcion}
         onChange={handleChange}
       
        
         />
         <select name="todoEstado" className="form-control mb-2"  value={todo.todoEstado}  onChange={ handleChange} >
             <option value="pendiente">Pendiente</option>
             <option value="completada">Completada</option>
         </select>
         <div className="form-check">
    <input
        className="form-check-input"
        type="checkbox"
        id="flexCheckDefault"
        checked={todo.todoCheck}
        onChange={handleChange}
        name="todoCheck"
    />
    <label
        className="form-check-label"
        htmlFor="flexCheckDefault"
    >
        Dar prioridad
    </label>
</div>
         <button className="btn btn-primary" type="submit">Agregar</button>
     </form>
    </>
  )
}

export default FormControlado

```
:::tip 
- En lugar de usar el atributo for , usamos el atributo htmlFor
- Esto se debe a que for es una palabra  clave reservada en Javascript
:::
Lo abreviamos:
```js
const handleChange = (e) => {
    const {name , value  , checked , type} = e.target;
        // Estamos devolviendo un objeto a traves de la funcion flecha
        setTodo((old) => ({
            ...old ,
            // preguntamos si el campo es de tipo checkbox ya que el .value devuelve un string y el .checked un valor booleano
            [name] : type === "checkbox" ? checked: value 
        }))
  }

```

## Pequeña validacion
- Es mejor usar una librería externa que se encargue de las validaciones ya que son más seguras.

FormControlado.jsx
```js
import React , {useState} from 'react'

const FormControlado = () => {
  // El valor inicial de la variable  todo es un objeto
     const [todo , setTodo] = useState({
      todoName: '' ,
      todoDescripcion: '' ,
      todoEstado: 'pendiente' ,
      todoCheck : false ,

     })
  const [error , setError] = useState(false);
  const  handleSubmit = (e) => {
    e.preventDefault();
    const {todoName , todoDescripcion} = todo;
    if (!todoName.trim() ||  !todoDescripcion.trim()) {
      setError(true);
      return;
    }
     setError(false);
  }
  const handleChange = (e) => {
    const {name , value  , checked , type} = e.target;
        // Estamos devolviendo un objeto a traves de la funcion flecha
        setTodo((old) => ({
            ...old ,
            // preguntamos si el campo es de tipo checkbox ya que el .value devuelve un string y el .checked un valor booleano
            [name] : type === "checkbox" ? checked: value 
        }))
  }
  // Creamos un componente dentro de este componente
  const PintarError  = () => (
    <div className="alert alert-danger">Campos obligatorios</div>
  )

  return (
    <>
    <h2>Controlado</h2>
    {
      //  Si existe un error , renderizamos el componente PintarError
      error ? <PintarError/> : null
    }
     <form  onSubmit={handleSubmit}>
     <input
       type="text" 
       placeholder='Ingrese TODO'
       name='todoName'
       className="form-control mb-2"
       value={todo.todoName}
       onChange={handleChange}

       />
     <textarea
         name="todoDescripcion"
         id=""
         cols="30"
         rows="10" 
         className="form-control mb-2"
         placeholder="Ingrese descripcion del todo"
         value={todo.todoDescripcion}
         onChange={handleChange}
       
        
         />
         <select name="todoEstado" className="form-control mb-2"  value={todo.todoEstado}  onChange={ handleChange} >
             <option value="pendiente">Pendiente</option>
             <option value="completada">Completada</option>
         </select>
         <div className="form-check">
    <input
        className="form-check-input"
        type="checkbox"
        id="flexCheckDefault"
        checked={todo.todoCheck}
        onChange={handleChange}
        name="todoCheck"
    />
    <label
        className="form-check-label"
        htmlFor="flexCheckDefault"
    >
        Dar prioridad
    </label>
</div>
         <button className="btn btn-primary" type="submit">Agregar</button>
     </form>
    </>
  )
}

export default FormControlado

```

Alternativa:

- En lugar de usar un operador ternario , usamos “&&” para especificar qué pasaría si es true (equivale a un if sin else).


```js
return (
    <>
    <h2>Controlado</h2>
    {
      //  Si existe un error , renderizamos el componente PintarError
      error && <PintarError/> 
    }
     <form  onSubmit={handleSubmit}>

```
## Validación

- Podemos usar [React hook Form](https://react-hook-form.com/)  o [Formik](https://formik.org/) para las validaciones 