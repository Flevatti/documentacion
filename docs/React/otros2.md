---
sidebar_position: 13
---
# Otros #2
## React.Component
- Un componente se crea con una [función](https://beta.es.reactjs.org/learn/your-first-component)   , pero también se puede crear uno a través de clases
- Para esto , necesitamos crear una clase con el nombre del componente que herede React.component.

```js
import './App.css';
import Componente from './components/Componente';

function App() {
    return <Componente />;
}

export default App;

```

```js
import React from "react"

class Componente extends React.Component {
    render() {
        return <h1>Este es un componente</h1>
    }
}

export default Componente

```

:::tip Observación
Es muy parecido a la función , pero el código JSX lo tiene que retornar el metodo render().

:::

#### Ejemplo con props
- Las props se almacenan en el this.props.
- Eso quiere decir que la clase que “heredamos”, hace que se almacen en el this.

```js
import React from "react"

class Componente extends React.Component {
   
    render() {
        console.log(this);
        // eslint-disable-next-line react/prop-types
        return <h1>{this.props.nombre}</h1>
    }
}

export default Componente

```

```js
function App() {
    return <Componente nombre='Federico' />;
}

```


:::tip info
- [React Docs](https://beta.es.reactjs.org/reference/react/Component)
- [ReactJS.org](https://es.reactjs.org/docs/react-component.html)


:::

## React.PureComponent

- Es similar a React.component.
- La diferencia entre ellos es que React.Component no implementa shouldComponentUpdate() (A menos que lo definas tu), pero React.PureComponent lo implementa por defecto.
- PureComponent viene con el método  shouldComponentUpdate  ya definido que compara las props y el estado artificialmente.

#### Metodo shouldComponentUpdate
- El método shouldComponentUpdate recibe tres valores:
   -	Los siguientes accesorios con los que el componente está a punto de renderizarse.
   -	Los siguientes estados con los que el componente está a punto de renderizarse.
   -	El siguiente contexto con los que el componente está a punto de renderizarse.
- Devuelve true o false:
  - Devuelve true para que el componente se vuelva a renderizar (comportamiento predeterminado)
  - Devuelve false para decirle a React que no se renderiza (omita la re-renderización)
- Este método solo se puede definir usando React.Component
- Con React.PureComponent este método ya está definido y no se puede modificar.

App.js
```js
import { useState } from 'react';
import './App.css';
import Componente from './components/Componente';

function App() {
    const [value, setValue] = useState('');

    return (
        <>
            <Componente nombre={value} />
            <button
                onClick={() => {
                    setValue('Federico');
                }}
            >
                Cambiar a Federico
            </button>{' '}
            <button
                onClick={() => {
                    setValue('Rodrigo');
                }}
            >
                Cambiar a Rodrigo
            </button>
        </>
    );
}

export default App;

```
Componente.jsx
```js
import {Component} from "react"

class Componente extends Component {
   
    shouldComponentUpdate(props ,state , context){
      console.log("Nuevos" , props , state ,context );
      console.log("Viejos" , this.props , this.state  , this.context)
      return true;
    } 


    render() {
        // eslint-disable-next-line react/prop-types
        return <h1>{this.props.nombre}</h1>
    }
}

export default Componente

```

:::tip info
- [React Docs](https://beta.es.reactjs.org/reference/react/PureComponent)
- [ReactJS.org](https://es.reactjs.org/docs/react-api.html#reactpurecomponent)
- [React Docs - shouldComponentUpdate](https://beta.es.reactjs.org/reference/react/Component#shouldcomponentupdate)
:::


## Memo
- Si el componente renderiza el mismo resultado dada las mismas props , se debe usar React.memo().
- Memo() Recibe un componente (funcion).

Envuelve un componente en memo para obtener una versión memorizada de ese componente. Esta versión memorizada de tu componente usualmente no se renderizará cuando su componente padre se renderice siempre y cuando sus props no hayan cambiado. 

Pero puede que aún así React la rerenderice: la memorización es solo una optimización de rendimiento, no una garantía.

React.memo solamente verifica los cambios en las props. Si tu componente de función envuelto en React.memo tiene un Hook useState, useReducer o useContext en su implementación, continuará volviéndose a renderizar cuando estos cambien.

Por defecto solo comparará superficialmente objetos complejos en el objeto de props. Si se desea controlar la comparación, se puede proporcionar también una función de comparación personalizada como el segundo argumento.

A diferencia del método shouldComponentUpdate() en los componentes de clases, la función areEqual (función de comparación personalizada) retorna true si los props son iguales y false si los props no son iguales. Esto es lo opuesto a shouldComponentUpdate.

Memo devuelve un nuevo componente de React. Se comporta de la misma manera que el componente proporcionado a memo excepto que React no siempre lo renderizará cuando su padre sea renderizado a menos que sus props hayan cambiado.

React normalmente re-renderiza un componente siempre que su padre se re-renderiza. Con memo, puedes crear un componente que no se re-renderiza cuando su padre se re-renderice siempre y cuando sus nuevas props sean las mismas que sus antiguas props. Dicho componente se dice que está memorizado.

Para memorizar un componente, envuélvelo en una llamada a memo y usa el valor que devuelve en lugar de tu componente original.


:::tip info
- [React Docs](https://beta.es.reactjs.org/reference/react/memo )
- [ReactJS.org](https://es.reactjs.org/docs/react-api.html#reactmemo)
:::

## createElement

- createElement() crea y retorna un nuevo elemento React.
- El código escrito en JSX se convertirá en un “elemento React” a través de este método.
- El “elemento React” es conocido como “Componente”
- Este método lo ejecutara React por nosotros, asique no hace falta usarlo.
- Entonces este método es útil, si deseas crear componentes sin JSX.


:::warning
[A partir de React 17 , se dejo de utilizar este metodo](https://es.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#whats-different-in-the-new-transform)

:::

:::tip info
- [React Docs](https://beta.es.reactjs.org/reference/react/createElement)
- [ReactJS.org](https://es.reactjs.org/docs/react-api.html#createelement)
:::


## CloneElement
- Clona y retorna un nuevo “elemento React” usando un “Elemento React” como punto de partida.
- cloneElement te permite crear un nuevo elemento de React usando otro elemento como punto de partida.
- Básicamente utiliza todas las caracteristicas de un “Elemento” y a su vez se le añaden nuevas.
- El “elemento React” es conocido como “Componente”


:::tip info
- [React Docs](https://beta.es.reactjs.org/reference/react/cloneElement)
- [ReactJS.org](https://es.reactjs.org/docs/react-api.html#createelement)
:::

## Añadir propiedades a los componentes
- Sabias que se le puede añadir una “propiedad” a un componente.
- Esta propiedad puede contener cualquier valor.


#### Ejemplo
Componente.jsx
```js
const Componente = () => {
  return (
    <>
     <h1>Componente</h1>
    </>
  )
}
Componente.propiedad = "Propiedad";
export default Componente

```
App.js
```js
import './App.css';
import Componente from './components/Componente';

function App() {
    console.log(Componente.propiedad);

    return (
        <>
            <Componente />
        </>
    );
}

export default App;

```
:::tip Observación
- El “Componente” es tratado como si fuera un objeto y le añadimos una propiedad cuyo valor es un String.
- En el App.js imprimimos por consola el valor de la propiedad que creamos.
:::

#### Esto es útil para crear componentes en otros componentes



Componente.jsx
```js
const Componente = () => {
  return (
    <>
     <h1>Componente</h1>
    </>
  )
}
Componente.componente2 = () => {
  return (
    <>
    <h2>Componente 2</h2>
    </>
  )

}
export default Componente

```





App.js
```js
import './App.css';
import Componente from './components/Componente';

function App() {
    return (
        <>
            <Componente />
            <Componente.componente2></Componente.componente2>
        </>
    );
}

export default App;

```

:::tip info
- [Esto se suele llamar “definir el “type” de componente”.](https://reactjs.org/docs/jsx-in-depth.html#using-dot-notation-for-jsx-type)
- [Mas info](https://reactjs.org/docs/jsx-in-depth.html#choosing-the-type-at-runtime)
:::

## isValidElement
- Comprueba si un valor es un elemento de React.
- Retorna true o false.

```js
function App() {
    console.log(React.isValidElement(<Componente.componente2 />));
    return (
        <>
            <Componente />
        </>
    );
}

```

:::tip tip
- Puede recibir cualquier valor, en este ejemplo es código JSX.
- Sólo las etiquetas JSX y los objetos devueltos por createElement se consideran elementos de React.


:::


:::tip info
- [React Docs](https://beta.es.reactjs.org/reference/react/isValidElement#isvalidelement)
- [ReactJS.org](https://es.reactjs.org/docs/react-api.html#createelement)
:::

## React.children

- Contiene métodos para manejar la [props “children”](./otros.md#prop-children)


#### React.children.map(children , funcion)
- La funcion  recibe como argumento el “this” (Como si fuera un componente clase)
- Invoca la funcion por cada elemento dentro de children.
- Retorna un array.
- Si children es null o undefined , retornará null o undefined.

#### React.children.forEach(children, funcion)
- Es como map() pero no retorna un array
#### React.children.count(children)
- Retorna el número total de componentes en children, igual al número de veces que un callback pasado a map o forEach sería invocado.

#### React.children.only(children)
- Verifica que children solo tenga un hijo (un elemento React) y lo retorna. De otro modo este método lanza un error.

#### React.Children.toArray(children)
- Retorna los children como un array plano con keys asignadas a cada hijo.

:::tip 
- [Información de los métodos](https://es.reactjs.org/docs/react-api.html#reactchildren)

:::

#### Ejemplo

App.js
```js
function App() {
    return (
        <>
            <Componente>
                <p>Hijo 1</p>
                <p>Hijo 2</p>
            </Componente>
            ;
        </>
    );
}

```

Componente.jsx
```js
import React from "react"

// eslint-disable-next-line react/prop-types
const Componente = ({children}) => {
  console.log(React.Children.count(children))
  return (
    <>
     <h1>Componente</h1>
    </>
  )
}

export default Componente

```


:::tip info
- [React Docs](https://beta.es.reactjs.org/reference/react/Children)
- [ReactJS.org](https://es.reactjs.org/docs/react-api.html#reactchildren)
:::


## React.createRef

- React.createRef() crea un objeto ref.
- Con el atributo (props) ref , le asignas como valor el elemento actual al  ref.current
- Es el equivalente al useRef() 
- Se utiliza para las componentes de Clases.

#### Ejemplo
```js
import React from "react"

// eslint-disable-next-line react/prop-types
const Componente = () => {
   const h1Ref = React.createRef();
  return (
    <>
     <h1 onClick={() => {
      console.log(h1Ref)
     }} ref={h1Ref}>Componente</h1>
    </>
  )
}

export default Componente

```

:::tip info
- [React Docs](https://beta.es.reactjs.org/reference/react/createRef)
- [useRef()](https://fedeleva.github.io/documentacion/docs/React/proyecto#useref)

:::


## React.forwardRef
- React.forwardRef crea un componente React que envía el atributo ref que recibe a otro componente más abajo en el árbol.
- React.forwardRef acepta una función de componente como un argumento. Esta función tendrá las props y ref como dos argumentos. Esta función debe retornar un nodo React.


:::tip info
- [React Docs](https://beta.es.reactjs.org/reference/react/forwardRef)
- [ReactJS.org](https://es.reactjs.org/docs/react-api.html#reactforwardref)
- [Mas info](https://fedeleva.github.io/documentacion/docs/React/proyecto#forwardref )
:::

## React.startTransition
- Esta diseñado para usarse cuando [React.useTransition()](https://fedeleva.github.io/documentacion/docs/React/hookcss#usetransition) no este disponible.
- Basicamente es lo mismo que useTransition() pero sin isPending.
- Las actualizaciones en una transición dan paso a actualizaciones más urgentes.
- Permite que el usuario continúe interactuando mientras procesa la actualización.
- Le permite actualizar el estado sin bloquear la interfaz de usuario.
- startTransitiones muy similar a useTransition, excepto que no proporciona el isPending para rastrear si una transición está en curso. Puede llamar startTransition cuando useTransition no esté disponible. Por ejemplo, startTransition funciona fuera de los componentes, como desde una biblioteca de datos.

:::tip info
- [React Docs](https://beta.es.reactjs.org/reference/react/startTransition)
- [ReactJS.org](https://es.reactjs.org/docs/react-api.html#starttransition)
:::

## flushSync
- Recibe un callback.
- Obliga a React a ejecutar síncronamente todas las actualizaciones dentro del callback proporcionado. Así se asegura que el DOM se actualiza inmediatamente.
- Llama a flushSync para forzar a React a ejecutar cualquier trabajo pendiente y actualizar el DOM de forma sincrónica.


```js
// Obliga a que esta actualización del estado sea síncrona.
flushSync(() => {
  setCount(count + 1);
});
// En este punto, el DOM está actualizado.

```

:::tip info
- [React Docs](https://beta.es.reactjs.org/reference/react-dom/flushSync)
- [ReactJS.org](https://es.reactjs.org/docs/react-dom.html#flushsync)
:::


## createRoot
- Crea una “raiz React” en un contenedor (elemento HTML) y devuelve la “raíz React”.
- La “raíz React” se puede usar para representar un elemento React (componente) en el DOM (contenedor) con render().
- La “raiz React” tiene dos métodos: 
   -	Render() : Para renderizar algo en el contenedor
   -	Unmount() : Para destruir TODA la raiz React.

#### Ejemplo
```js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

```

:::tip Observación
- Se crea la “Raiz React” en un elemento HTML con la ID root (en este caso es un div que se encuentra en el index.html, este div es el “contenedor”)
- Se utiliza el método render () para renderizar un componente (&lt;App/> en este caso) en la raiz (En el elemento HTML (contenedor) que se especificó cuando creamos la “raiz React”).



:::

## hydrateRoot
- Es igual que createRoot() pero se usa para hidratar (llenar de contenido) un contenedor cuyo contenido HTML fue representado por ReactDOMServer.


:::tip info
- [React Docs](https://beta.es.reactjs.org/reference/react-dom/client/hydrateRoot)
- [ReactJS.org](https://reactjs.org/docs/react-dom-client.html#hydrateroot)
:::