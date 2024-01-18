---
sidebar_position: 2
---
# Introduccion
## create-react-app
- [link](https://create-react-app.dev)
- Es como un instalador , para hacer una aplicación react
- Afortunadamente, Facebook ha creado  Create React App, un entorno que viene preconfigurado con todo lo necesario para crear una aplicación React.
- Creará un servidor de desarrollo en vivo. (herramienta para el desarrollador)
- No es necesario instalar ni configurar herramientas como webpack o Babel. Están preconfigurados y ocultos para que pueda concentrarse en el código.
- Ventaja: enfocarse en el código, no en las herramientas de compilación.

En la ubicacion del proyecto:

```powershell
npx create-react-app my-app
```
:::tip 
Podes remplazar my-app por cualquier palabra , ya que representa el nombre de la aplicación.
:::
Accedemos a la carpeta que se crea(se llama igual al nombre de la aplicacion)
```powershell
cd my-app
```
:::tip npx
- Npx es una herramienta que nos permite ejecutar paquetes de npm, los busca en su servidor y lo ejecuta en nuestra máquina.
- Si usas npx no tienes que instalar paquetes de forma global.
- Busca siempre la última versión.
:::

### comandos

- Al terminar la instalación , te muestra los comandos que podemos utilizar.
- Los comandos pueden ser de npm o de su competencia (yarn)

#### start 
- Iniciar la app
#### build 
- Para compilar y llevarlo a producción 
#### test
- Para hacer testing
#### eject 
- Para hacer cambios radicales

:::tip 
- En la carpeta raiz del proyecto , se creara una carpeta con el nombre de la aplicación.
:::

## Directorios

### README.md
- Se encuentran todos los comandos que se crearon y para que se usa
- Contiene la documentacion

### package.json
- Contiene un registros de los modulos que utiliza react y sus versiones.

:::tip 
 - Si se elimina la carpeta node_modules  , utilice el comando npm install o npm i para instalar los modulos.
 - El comando lee el archivo package.json y crea la carpeta node_modules con los modulos necesarios para ejecutar el proyecto.
:::
- Contiene los scripts
### .gitignore
- Ignora el seguimiento de X cantidad de carpetas y archivos
### carpeta public 
- Contiene los archivos estáticos
#### index.html 
- Todo lo que viene de react va a la etiqueta div con la id root
```html
 <div id="root"></div>
```
### carpeta src
- Solemos trabajar en esta carpeta
#### index.js
- reportWebVitals es para tener un reporte de errores
- Modo estricto  - [StrictMode ](https://es.reactjs.org/docs/strict-mode.html  ) Es una herramienta para destacar problemas potenciales en la aplicación. Es opcional
- ReactDOM  - [ReactDOM   ](https://es.reactjs.org/docs/rendering-elements.html) se encarga de actualizar el DOM para renderizar los elementos de React.
```js
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

```
:::tip Observacion 
con ReactDOM  y su método render renderizamos un componente(App).
:::
#### App.js
- Es el componente que se renderiza
-   Un componente es una función que devuelve algo
- Dicha función se exporta
- Lo que devuelve(en el return)  parece código HTML
```js
return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola boludiño
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

```
:::tip 
Modificalo y ejecuta la app
:::
## JSX: JavaScript + XML
-	Como ha visto, hemos estado usando lo que parece HTML en nuestro código React, pero no es HTML del todo. Esto es JSX , que significa JavaScript XML.
-	El uso de JSX no es obligatorio para escribir React.
-	Debajo del capó(por atrás), se está ejecutando createElement, lo que toma la etiqueta, las propiedades , etc  y lo muestra.
-	JSX está más cerca de JavaScript, no de HTML, por lo que hay algunas diferencias clave a tener en cuenta al escribirlo.
    - className se usa en lugar de class para agregar clases CSS, ya
     que class es una palabra clave reservada en JavaScript.
    - Las propiedades y métodos en JSX son camelCase.
    - Las etiquetas de cierre automático deben terminar en una barra inclinada. 
    ```html
         <img />
    ```

- Las expresiones de JavaScript también se pueden incrustar dentro de JSX usando llaves, incluidas variables, funciones y propiedades.

## Componente
-  Es una función que devuelve algo.
- Dicha función se exporta
- Lo que devuelve(en el return)  parece código HTML pero en realidad es JSX
- Lo que se retorna va entre paréntesis
- Sintaxis para renderizar un componente (es identico a una etiqueta HTML):
 ```js
 <NombreComponente/>
 ```
- Aunque tambien se puede renderizar asi:
  ```js
   <NombreComponente > </NombreComponente>
 ```

:::tip
- El nombre de la función , es el nombre del componente
- El nombre del componente SIEMPRE debe empezar en Mayuscula
:::


:::tip Info
- [Components and Props](https://reactjs.org/docs/components-and-props.html)
- [Your First Component](https://beta.reactjs.org/learn/your-first-component)
- [Passing Props to a Component](https://beta.reactjs.org/learn/passing-props-to-a-component)
- [JSX In Depth](https://reactjs.org/docs/jsx-in-depth.html)
:::

- Los componentes permiten separar la interfaz de usuario en piezas independientes, reutilizables y pensar en cada pieza de forma aislada.
### Dom Elements
-  React implementa un sistema DOM independiente del navegador para el rendimiento y la compatibilidad entre navegadores.
- Este “DOM independiente” tiene algunas diferencias con respecto al que usa el navegador.
- Por ejemplo:
   - Todas las propiedades y atributos del DOM deben ser camelCase (Existen algunas excepciones como aria-* o data-*)

### Diferencia en atributos
#### Atributo checked
- Este atributo es compatible con &lt;input> de tipo checkbox y radio.
- Es útil para construir componentes controlados.
- El atributo defaultchecked establece si se marca cuando se monta por primera vez, y es para componentes no controlados.
#### Nombres de las clases
- Para especificar una clase CSS, utilice el atributo className. Esto se aplica a todos los elementos regulares DOM y SVG como &lt;div>, &lt;a> y otros.
- Si usa React con componentes web (lo cual es poco común), use el  atributo class en su lugar.
#### Atributo dangerouslySetInnerHTML
- dangerouslySetInnerHTML es el remplazo de React para usar innerHTML.
- Debe pasar un objeto con la propiedad __html para recordar que es peligroso (te expones a ataques de secuencias de comandos)
#### Atributo htmlFor
- Dado que for es una palabra reservada en JavaScript, se utilizan elementos htmlFor en su lugar.
#### Estilo CSS
- Tienen el atributo style que acepta un objeto Javascript con propiedades camelCase.
- Las propiedades CSS están en camelCase para ser coherentes con el acceso a las propiedades en los nodos DOM desde JS (por ejemplo, node.style.backgroundImage). 
- Los prefijos de navegadores que no sean ms deben comenzar con una letra mayúscula. Es por eso que WebkitTransition tiene una "W" mayúscula.
- React agregará automáticamente un sufijo "px" a ciertas propiedades de estilo numérico en línea. Si desea utilizar unidades que no sean "px", especifique el valor como un String con la unidad deseada.
#### suppressContentEditableWarning
- Normalmente, hay una advertencia cuando un elemento con hijos también se marca como contentEditable, porque no funcionará. Este atributo suprime esa advertencia.
#### Todos los atributos HTML admitidos
- React siempre ha proporcionado una API centrada en JavaScript para el DOM. Dado que los componentes de React a menudo toman accesorios personalizados y relacionados con DOM, React usa la convención camelCase al igual que las API de DOM
```js
<div tabIndex={-1} />      // Just like node.tabIndex DOM API
<div className="Button" /> // Just like node.className DOM API
<input readOnly={true} />  // Just like node.readOnly DOM API

```
:::tip info
- [DOM Elements](https://reactjs.org/docs/dom-elements.html)
- [Listado de atributos, eventos, etc   que puede tener un componente común (elemento HTML).](https://beta.reactjs.org/reference/react-dom/components/common )
:::


## Ejecutar aplicacion 
Ubicada en la carpeta con el nombre de la app:
```powershell
npm run start  
```


## Crear Componente Principal

1.  Borramos todos los archivos menos el index.js en la carpeta src

### Creamos un componente

- Los componentes empiezan en Mayuscula.
- Tambien puede ser .js

src/App.jsx
- Usamos el snippet rafce(de la extensión) para crear la estructura del componente.
```js

import React from 'react'

const App = () => {
  return (
    <div>mi primer componente</div>
  )
}

export default App

```
:::tip 
Importar React es opcional (se importa solo , no hace falta especificar)
:::

index.js
### ReactDom.render() = Renderiza algo
Tiene dos argumentos:
1.	El componente principal (con el que vamos a trabajar)
2. 	El elemento con la id root (del public/index.html)

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
:::tip Explicacion
El componente principal lo renderiza adentro del elemento con la id root.
:::

App.jsx
-  Las expresiones de JavaScript también se pueden incrustar dentro de JSX usando llaves, incluidas variables, funciones y propiedades.
```js

import React from 'react'

const App = () => {
    const saludo = "saludo desde variable";
  return (
    <div className="container"> {saludo}<br></br>mi primer componente</div>
  )
}

export default App

```
public/index.html
- Ponemos Bootstrap
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```
App.JSX
- Componente con objeto
- Las expresiones de JavaScript también se pueden incrustar dentro de JSX usando llaves, incluidas variables, funciones y propiedades.

```js

import React from 'react'

const App = () => {
    const saludo = "saludo desde variable";
    const objeto = {
        primary:"text-primary" ,
        danger:"text-danger"
    }
  return (
    <div className={objeto.primary}> {saludo}<br></br>mi primer componente</div>
  )
}

export default App

```
## Renderizado condicional

- [condicional](https://es.reactjs.org/docs/conditional-rendering.html  ) -  En React, puedes crear distintos componentes que contienen diferente comportamiento. Entonces, puedes renderizar solamente algunos de ellos, dependiendo del estado de tu aplicación.

Ejemplo:


- En este ejemplo creamos dos componentes dentro de otro componente(principal)
- Implementamos el operador ternario en la lógica del componente principal.

App.jsx
```js

import React from 'react'

const App = () => {
    const user = true;
// Creamos el  Componente1
const SaludoBienvenida = () => (
    <h2 className="text-warning">Bienvenido!</h2>
);
//Creamos el Componente2
const SaludoDespedida = () => (
    <h2 className="text-secondary">Usuario offline</h2>
);
    const saludo = "saludo desde variable";
    const objeto = {
        primary:"text-primary" ,
        danger:"text-danger"
    }
  return (
    <div className={objeto.primary}> {saludo}<br></br>mi primer componente
      {/* Si user es true renderizamos el componente 1 , en caso contrario el componente 2 */}
    <p> {user? <SaludoBienvenida/> : <SaludoDespedida/> }</p></div>
  )
}

export default App

```

:::tip Observacion 
- Lo que se retorna va entre paréntesis
- Los componentes son funciones que siempre retornan algo.
:::


## Listas y keys

- [Lista](https://es.reactjs.org/docs/lists-and-keys.html)
-	Al crear una lista a partir de una matriz con JSX, se debe agregar un key a cada elemento secundario (ej. etiqueta li).
-	React usa la prop key  para crear una relación entre el componente y el elemento DOM.
-	La biblioteca utiliza esta relación para determinar si el componente debe volver a renderizarse o no.
-	No se recomienda utilizar el índice de la matriz como key si sabe que la matriz no será estática(fija)
-	La key debe ser única en cada elemento.
-  [link](https://sentry.io/answers/unique-key-prop/)

App.JSX
```js

import React from 'react'

const App = () => {
    const frutas = ["🍉", "🍌", "🍓"];

   
  return (
       <div className="container">
           <ul>
           {
               frutas.map((fruta , index ) => (
                    <li key={fruta}>{index +1} - {fruta}</li>
               ))
           }
           </ul>
       </div>

  )
}

export default App

```
:::tip Observacion 
Cada li se retorna (entre paréntesis esta)
:::
#### Keys
- La props key sirve para identificar un elemento en una lista
- Tambien sirve para crear "Componentes unicos"  , que no compartan el  estado.


Ejemplo:

Tenemos un componente que renderiza un perfil de Usuario

Y Queremos que cada perfil sea "unico" , osea que el estado de uno sea diferente al otro . Tambien necesitamos lograr que al modificar  uno , el otro se mantenga intacto (no se modifique ni se vuelva a renderizar).

Para solucionar este problema , se utiliza la props key en el componente que renderiza el perfil.

Con esto le estamos indicando a React que cada componente  es unico y tiene una ID que lo identifica.

React utiliza la ID para detectar que "Perfil" se modifico para volver a renderizarlo.



## Manejando eventos
- [link](https://es.reactjs.org/docs/handling-events.html)
-	Los eventos de React se nombran usando camelCase, en vez de minúsculas.
-	Con JSX pasas una función como el manejador del evento, en vez de un string.

App.jsx
```js
	
	import React from 'react'
	
	const App = () => {
	    const frutas = ["🍉", "🍌", "🍓"];
	
	   
	  return (
	       <div className="container">
	          <button className="btn btn-primary" onClick={() => console.log("Me diste click")}>Dame click</button>
	       </div>
	
	  )
	}
	
	export default App

```

Alternativa:
```js

import React from 'react'

const App = () => {
    const frutas = ["🍉", "🍌", "🍓"];
   const funcionClick = () => {
    console.log("Me diste click")
   }
   
  return (
       <div className="container">
          <button className="btn btn-primary" onClick={funcionClick}>Dame click</button>
       </div>

  )
}

export default App

```

:::tip Explicacion 
- onClick es un tipo de evento
- Sintaxis : tipo de Evento = {función} 
- Sintaxis :  onTipoEvento = función
- La función se ejecutará cada vez que se active el evento.
- La función va sin paréntesis.
:::
Función con parámetros:
```js

import React from 'react'

const App = () => {
    const frutas = ["🍉", "🍌", "🍓"];
   const funcionClick = (nombre) => {
    console.log(`click ${nombre}`);
   }
   
  return (
       <div className="container">
          <button className="btn btn-primary" onClick={() => {
              funcionClick("Mundo");
          }}>Dame click</button>
       </div>

  )
}

export default App

```

## Actualizacion React 18

- Cambiar render() por createRoom().

index.js
```js
import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
const root =  ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
         <App />

  </React.StrictMode>
)

```
:::tip observacion
- createRoot(Elemento con la id root (index.html))
- render(componente principal)
:::

## Crear componente (NO PRINCIPAL)
- [Componentes](https://es.reactjs.org/docs/components-and-props.html )
- Los componentes permiten separar la interfaz de usuario en piezas independientes, reutilizables y pensar en cada pieza de forma aislada.
- Creamos la carpeta components en src
- Todos los componentes se van a renderizar en App.jsx(componente principal)

src/components/Frutas.jsx
-  Usamos el snippet  rafce
```js
import React from 'react'

const Frutas = () => {
    const frutas = ["🍉", "🍌", "🍓"];
    return (
        <div>
            <ul>
                {frutas.map((fruta, i) => (
                    <li key={fruta}>
                        {i + 1} - {fruta}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Frutas

```
App.jsx
```js

import React from 'react'
import Frutas from './components/Frutas'

const App = () => {
  
   
  return (
       <div className="container">
         <Frutas/>
       </div>

  )
}

export default App

```
:::tip Observacion 
- Se renderiza el componente Frutas
:::

### Se puede reutilizar el componente las veces que quieras.

Renderizamos el componente Frutas varias veces: 
```js

import React from 'react'
import Frutas from './components/Frutas'

const App = () => {
  
   
  return (
       <div className="container">
         <Frutas/>
         <Frutas/>
         <Frutas/>
         <Frutas/>
       </div>

  )
}

export default App

```

## Fragmentos
- [link](https://es.reactjs.org/docs/fragments.html)
- Es para que un componente devuelva múltiples elementos. Los Fragmentos te permiten agrupar una lista de hijos sin agregar nodos extra al DOM.
- En los ejemplos anteriores el componente Frutas, solo devuelve un div. Pero si aparte del div queremos devolver otro elemento:

Frutas.jsx
```js
import React from 'react'

const Frutas = () => {
    const frutas = ["🍉", "🍌", "🍓"];
    return (
        <React.Fragment>
      
            <ul>
                {frutas.map((fruta, i) => (
                    <li key={fruta}>
                        {i + 1} - {fruta}
                    </li>
                ))}
            </ul>
         <p>Soy un parrafo</p>
        </React.Fragment>
    )
}

export default Frutas

```
:::tip Observacion 
Ahora el componente devuelve un ul y un p como si fueran solo un elemento.
:::
### Abreviación:
- Le quitamos  la palabra React.Fragment
```js
import React from 'react'

const Frutas = () => {
    const frutas = ["🍉", "🍌", "🍓"];
    return (
        <>
      
            <ul>
                {frutas.map((fruta, i) => (
                    <li key={fruta}>
                        {i + 1} - {fruta}
                    </li>
                ))}
            </ul>
         <p>Soy un parrafo</p>
        </>
    )
}

export default Frutas

```
## Props
- Los componentes tienen propiedades(props)
-	Le podemos pasar información a un componente a través de un objeto. Llamamos a este objeto “props” (propiedades)
-	Son de solo lectura.

App.JSX
```js

import React from 'react'
import Frutas from './components/Frutas'

const App = () => {
  
    const frutas = ["🍉", "🍌", "🍓"];
  return (
      
       <div className="container">
           {/* <Componente  nombreprops=valor   /> */}
         <Frutas frutasApp={frutas}/>
     
       </div>

  )
}

export default App

```
Frutas.JSX
```js
import React from 'react'

const Frutas = (props) => {
    // props es un objeto cuyas propiedades son los nombresprops con sus valores correspondiente
    console.log(props);
    return (
        <>
      
            <ul>
                {props.frutasApp.map((fruta, i) => (
                    <li key={fruta}>
                        {i + 1} - {fruta}
                    </li>
                ))}
            </ul>
         <p>Soy un parrafo</p>
        </>
    )
}

export default Frutas

```

:::danger React es bastante flexible pero tiene una sola regla estricta
-	Todos los componentes de React deben actuar como funciones puras 
-	Tales funciones son llamadas “puras” porque no tratan de cambiar sus entradas(props), y siempre devuelven el mismo resultado para las mismas entradas.
-	Por supuesto, las interfaces de usuario de las aplicaciones son dinámicas y cambian con el tiempo. En la siguiente sección, introduciremos un nuevo concepto de “estado”.
-	En poca palabra, NO SE DEBE CAMBIAR/MODIFICAR LOS PROPS


:::

## Estado
- Los componentes tienen estados
-	El estado le permite a los componentes de React cambiar su salida a lo largo del tiempo en respuesta a acciones del usuario, respuestas de red y cualquier otra cosa, sin violar la regla de arriba ☝.
- [link](https://es.reactjs.org/docs/state-and-lifecycle.html)
- 	Para hacer cambios(cambiar de estado) vamos a utilizar hooks.

App.jsx
```js
import React from 'react'
import Contador from './components/Contador'

const App = () => {
  
    
  return (
      
       <div className="container">
          
          <Contador/>
     
       </div>

  )
}

export default App

```
src/components/Contador.jsx
```js
import React from 'react'

const Contador = () => {
    let contador = 0;
    const aumentar = () =>  contador++;
    
  return (
      
    <>
    <h2>Contador</h2>
     <h3>{contador}</h3>
     <button className="btn btn-dark" onClick={aumentar}>
          Aumentar
     </button>
    </>
  )
}

export default Contador

```

:::tip Que paso?
- En la Vista no se aumenta el contador
- El contador empieza en 0 y se le puede aumentar las veces que quieras, pero en la vista siempre figura como 0. Esto pasa porque React no sabe que hay que volver a renderizar el mismo componente.
- Nada le indica a React que tenemos que volver a renderizar para pintar nuevamente contador.
- 	Necesitamos un Hook que modifique el estado. (ahora con hooks es más fácil)
:::

### Conclusion del concepto Estado

- Para eso esta el Estado, para decirle a React que cada vez que se cambie (en este caso el contador) algo del componente, se vuelva a renderizar.
- El estado sirve para monitorear datos dinámicos.
- Para datos dinámicos como el contador se debe usar Estado.

## Hooks
-	Los Hooks son funciones que te permiten “enganchar” el estado de React.
-	Los hooks no funcionan dentro de las clases 
-	React proporciona algunos Hooks incorporados como useState.
-	proporcionan un estado y un ciclo de vida a estos componentes evitándonos a los desarrolladores el uso de las clases.
-	También puedes crear tus propios Hooks para reutilizar el comportamiento.
-	[link](https://es.reactjs.org/docs/hooks-overview.html)

## useState
- [link](https://es.reactjs.org/docs/hooks-state.html)

Contador.jsx
```js
import React from 'react'
// Importamos useState(Hook)
import { useState } from "react";
const Contador = () => {
    // useState(valor por defecto del estado)
    // useState devuelve un array[2]
    // contador = valor por defecto
    // setContador(nuevoValor) = es una funcion para asignarle un nuevo valor al contador
    const [contador , setContador] = useState(0);
     
    const aumentar = () =>  {
        setContador(contador + 1);
    }
    
  return (
      
    <>
    <h2>Contador</h2>
     <h3>{contador}</h3>
     <button className="btn btn-dark" onClick={aumentar}>
          Aumentar
     </button>
    </>
  )
}

export default Contador

```

:::tip Explicacion 

- Creamos un Estado y se va cambiando a medida que se hace click en el button.
- El Estado se cambia mediante un hook
- Ahora cada vez que se modifica el contador, se vuelve a renderizar (solo la parte que cambia)
- Conclusion :  Creamos un dato dinámico y cuando cambia, se vuelve a renderizar la parte del código en donde esté involucrado.
:::

### ¿Qué hace la llamada a useState?
-	Declara una “variable de estado”.
-	useState es una nueva forma de usar exactamente las mismas funciones que this.state nos da en una clase.
-	Normalmente, las variables “desaparecen” cuando se sale de la función, pero las variables de estado son conservadas por React.

### ¿Qué pasamos a useState como argumento?
- 	El único argumento para el Hook useState() es el estado inicial.
### Resumen
-	Declaramos una variable de estado llamada contador y le asignamos a 0.
-	React recordará su valor actual(recuerda el valor anterior y el actual) entre re-renderizados, y devolverá el valor más reciente a nuestra función.
-	Si se quiere actualizar el valor de contador actual, podemos llamar a setContador.
-	Cuando el usuario hace click, llamamos a setContador con un nuevo valor. React actualizará entonces el componente Contador pasándole el nuevo valor de contador.
-	Nota los corchetes son sintaxis de Javascript, se llama “desestructuración de arrays”.
