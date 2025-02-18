---
sidebar_position: 8
---
# Reducer

## useReducer
- useReducer es un hook de React que se utiliza para manejar el estado en componentes más complejos, especialmente cuando el estado se puede modificar de varias manera o cuando el estado tiene una estructura más compleja que simplemente un valor primitivo o un objeto.
- useReducer es especialmente útil cuando:
    - El estado tiene múltiples formas de modificarse: Cuando hay varias acciones que pueden modificar el estado de una  manera específica (como incrementar, decrementar, resetear, etc.), un reductor te ayuda a gestionar esas acciones de manera más ordenada.
    - El estado es complejo: Si el estado es un objeto con varias propiedades que cambian de manera independiente, useReducer te ayuda a gestionarlo de forma más organizada. A diferencia de useState, que puede volverse difícil de manejar cuando el estado se puede modificar de muchas maneras diferentes, useReducer ofrece una manera más estructurada y controlada de realizar cambios en el estado.
- Es para app medianas/grandes.


#### Analogía
- Imagina que estás organizando una fiesta. Tienes un grupo de personas y necesitas gestionar varias cosas: la comida, la música, la decoración, etc. Cada cosa que quieres hacer es una "acción" en la fiesta.
- useState sería como si tuvieras un amigo que se encarga de todo de manera independiente. Le pides que se encargue de la comida, y luego le pides que controle la música, luego la decoración, pero cada cosa la gestionas por separado, sin una coordinación clara.
- Si es una fiesta pequeña y sencilla, no hay problema, puedes hacerlo de esa manera. Pero si la fiesta es más grande y tienes que manejar varias cosas a la vez, como cambiar la música, agregar más comida, y ajustar la decoración, empezarás a perder el control de todo, porque cada cosa la estás manejando de manera aislada.
- useReducer, en cambio, es como tener un coordinador de la fiesta que organiza todo. Le dices qué acciones quieres hacer (como "cambiar la música" o "añadir más comida") y él sabe cómo coordinar todo para que se haga de manera eficiente y organizada. En lugar de gestionar cada parte por separado, el coordinador entiende cómo las diferentes acciones afectan la fiesta y se asegura de que todo funcione sin problemas.
- En resumen:
    - useState es como gestionar cada cosa de la fiesta por separado, sin mucha coordinación.
    - useReducer es como tener un coordinador que organiza todas las acciones para que la fiesta funcione de manera ordenada y eficiente.



### Funcion reductora(reducer)
- Una función reductora es una función que recibe dos parámetros: el estado actual y una acción, y devuelve un nuevo estado de la aplicación. El propósito principal de esta función es  modificar el estado en base a una acción específica.
- Es una función pura, lo que significa que:
    - Siempre devuelve el mismo valor si recibe los mismos parámetros (el mismo estado y la misma acción).
    - No depende de ningún estado externo ni modifica nada fuera de ella (no tiene efectos secundarios).
    - No altera directamente el estado original, sino que devuelve un nuevo estado, asegurando la inmutabilidad.

:::warning No podemos hacer peticiones asíncronas ni usar useEffect dentro de una función reductora
- Las funciones puras no deben tener efectos secundarios. Hacer peticiones asíncronas o interactuar con APIs involucra cambios fuera del flujo de datos, lo que contraviene el principio de pureza de las funciones. Si necesitas realizar operaciones asíncronas, debes hacerlo en un lugar separado, como dentro de useEffect, y luego enviar una acción que el reductor pueda manejar para actualizar el estado.
:::



## Problema
### Nuevo Proyecto
App.jsx
```js
import React from 'react'
import Contador from './components/Contador'

const App = () => {
  return (
    <div>
        <h1>App</h1>
        <Contador/>
        
        </div>
  )
}

export default App

```
src/components/Contador.jsx
### useState
```js
import React, { useState } from 'react'

const Contador = () => {
    const [count , setCount] = useState(0);
    const sumar = () => setCount(count + 1);
    const restar = () => setCount(count - 1);
  return (
    <div style={{textAlign: 'center'}}>
        <h2>Contador</h2>
       <nav>
           <button onClick={sumar}>+</button>
           <button onClick={restar}> -</button>
       </nav>
       <h3>{count}</h3>
    </div>
  )
}

export default Contador

```
## useReducer
- useReducer es un hook de React que devuelve dos cosas:
    - El estado (similar a lo que hace useState).
    - La función dispatch (equivalente a la función de actualización en useState, como el setState).
### useReducer recibe tres parametros
#### 1- La función reductora (reducer)
- La función reductora es la clave de useReducer. Se encarga  de modificar el estado en respuesta a una acción específica. Recibe dos parámetros:
    - state: El estado actual.
    - action: Un objeto que describe qué tipo de acción se quiere realizar. Este objeto tiene una propiedad type obligatoria que indica el tipo de acción (lo que se quiere hacer) y, opcionalmente, puede tener un payload que contiene datos adicionales necesarios para actualizar el estado.
- La función reducer siempre debe devolver un nuevo estado, que puede ser el mismo que el estado actual o uno modificado.


```js
function reducer(state , action) {
    return state
}

```
- La función reductora maneja diferentes acciones y cambia el estado dependiendo del tipo de acción que recibe. 
- En un contador ejemplo: sumar y restar
- Dependiendo del tipo de acción, se ejecuta un código determinado
```js
function reducer(state , action) {
    switch (action.type) {
        case "INCREMENT":
            return {contador : state.contador + 1};
        case "DECREMENT":
            return {contador : state.contador - 1};
        default:
            return state;
    }

}

```
#### 2- Valor inicial del estado 
- Se recomienda que sea un objeto 
```js
const initialState = {contador:0};
```
#### 3- Funcion que modifica el valor inicial del estado
- Es opcional.
- Nos permite modificar el estado inicial.
- Sirve para modificar o transformar el estado inicial.
- Es una funcion que recibe el estado inicial y devuelve el estado "final".
- La función de inicialización recibe el estado inicial como argumento y te permite realizar transformaciones o modificaciones adicionales para obtener un estado final.
- La función reductora se va a encargar de modificar el estado final.

```js
const init = (initialState) => {
   return  { contador: initialState.contador +100}
}
```


## dispatch
- dispatch es una función que se utiliza para enviar una acción (un objeto) a la función reductora para que este actualice el estado. Es como un mensajero que dice al reductor "¡Aquí tienes una acción, haz algo con ella!"
- Cuando usas dispatch, envías un objeto de acción que tiene, al menos, dos propiedades importantes:
    - type:
        - Es un string que indica el tipo de acción que quieres realizar.
        - Es obligatorio y le dice al reductor qué acción se quiere realizar.
        - El type se usa dentro del reductor para decidir qué lógica ejecutar.
    - payload (opcional):
        - Son los datos adicionales que puedes enviar al reductor para que el estado se modifique de acuerdo con esos datos.
        - El payload es opcional y solo se usa cuando el tipo de acción necesita algún valor extra, como un número o un objeto, para realizar la actualización.
- En base al tipo de acción que le enviamos, la funcion reducer ejecuta un código determinado.
```js
    const sumar = () => dispatch({type:'INCREMENT'})
    const restar = () =>  dispatch({type:'DECREMENT'})

```
Contador.jsx
```js
import React, { useReducer} from 'react'
const initialState = {contador:0};
function reducer(state , action) {
    switch (action.type) {
        case "INCREMENT":
            return {contador : state.contador + 1};
        case "DECREMENT":
            return {contador : state.contador - 1};
        default:
            return state;
    }

}
const Contador = () => {
    // state se sugiere que sea un objeto
     const [state, dispatch] = useReducer(reducer, initialState)
    const sumar = () => dispatch({type:'INCREMENT'})
    const restar = () =>  dispatch({type:'DECREMENT'})
  return (
    <div style={{textAlign: 'center'}}>
        <h2>Contador</h2>
       <nav>
           <button onClick={sumar}>+</button>
           <button onClick={restar}> -</button>
       </nav>
       <h3>{state.contador}</h3>
    </div>
  )
}

export default Contador

```
## Sugerencias

- Los tipos de acciones(type) son constante que nunca van a cambiar.
- La buena practica sugiere que los tipos de acciones(type) estén un objeto
```js
const TYPES = {
    INCREMENT:"INCREMENT",
    DECREMENT:"DECREMENT"
}
function reducer(state , action) {
    switch (action.type) {
        case TYPES.INCREMENT:
            return {contador : state.contador + 1};
        case TYPES.DECREMENT:
            return {contador : state.contador - 1};
        default:
            return state;
    }

}
    const sumar = () => dispatch({type:TYPES.INCREMENT})
    const restar = () =>  dispatch({type:TYPES.DECREMENT})

```
## Añadimos mas acciones 
```js
const TYPES = {
    INCREMENT:"INCREMENT",
    INCREMENT_5:"INCREMENT_5",
    DECREMENT:"DECREMENT" ,
    DECREMENT_5:"DECREMENT_5" ,
    RESET:"RESET"
}

```
### Creamos las funciones que le envían un objeto de tipo acción(action) al reducer
```js

    const sumar = () => dispatch({type:TYPES.INCREMENT})
    const restar = () =>  dispatch({type:TYPES.DECREMENT})
     const sumar5 = () =>  dispatch({type:TYPES.INCREMENT_5 , payload:5})
     const restar5 = () =>  dispatch({type:TYPES.DECREMENT_5 ,payload:5})

```
:::tip Observacion
Usamos el payload para enviarle un dato al reducer para que modifique el Estado.
:::
### Tenemos que escribir la lógica (lo que va a ejecutar) de las acciones que agregamos en el reducer.
```js
function reducer(state, action) {
    function reducer(state, action) {
    switch (action.type) {
        case TYPES.INCREMENT:
            return { contador: state.contador + 1 };
        case TYPES.DECREMENT:
            return { contador: state.contador - 1 };
        case TYPES.DECREMENT_5:
            return { contador: state.contador - action.payload };
        case TYPES.INCREMENT_5:
            return { contador: state.contador + action.payload };
        default:
            return state;
    }

}


```
:::tip 
En la lógica utilizamos el dato que le enviamos
:::

Contador.jsx

- Le añadimos el reset tambien 
```js
import React, { useReducer } from 'react'
const initialState = { contador: 0 };

const TYPES = {
    INCREMENT: "INCREMENT",
    INCREMENT_5: "INCREMENT_5",
    DECREMENT: "DECREMENT",
    DECREMENT_5: "DECREMENT_5",
    RESET: "RESET"
}
function reducer(state, action) {
    switch (action.type) {
        case TYPES.INCREMENT:
            return { contador: state.contador + 1 };
        case TYPES.DECREMENT:
            return { contador: state.contador - 1 };
        case TYPES.DECREMENT_5:
            return { contador: state.contador - action.payload };
        case TYPES.INCREMENT_5:
            return { contador: state.contador + action.payload };
        case TYPES.RESET:
             return initialState;
        default:
            return state;
    }

}
const Contador = () => {
    // state se sugiere que sea un objeto
    const [state, dispatch] = useReducer(reducer, initialState)
    const sumar = () => dispatch({ type: TYPES.INCREMENT })
    const restar = () => dispatch({ type: TYPES.DECREMENT })
    const sumar5 = () => dispatch({ type: TYPES.INCREMENT_5, payload: 5 })
    const restar5 = () => dispatch({ type: TYPES.DECREMENT_5, payload: 5 })
    const reset = () => dispatch({type:TYPES.RESET})
    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Contador</h2>
            <nav>
                <button onClick={reset}>0</button>
                <button onClick={sumar5}>+5</button>
                <button onClick={restar5}>-5</button>
                <button onClick={sumar}>+</button>
                <button onClick={restar}> -</button>
            </nav>
            <h3>{state.contador}</h3>
        </div>
    )
}

export default Contador

```
## Tercer parametro de useReducer
- Sirve para modificar o transformar el estado inicial.
- Es una funcion que recibe el estado inicial.
- Siempre devuelve el estado final 
```js
import React, { useReducer } from 'react'
const initialState = { contador: 0 };
const init = (initialState) => {
   return  { contador: initialState.contador +100}
}
const TYPES = {
    INCREMENT: "INCREMENT",
    INCREMENT_5: "INCREMENT_5",
    DECREMENT: "DECREMENT",
    DECREMENT_5: "DECREMENT_5",
    RESET: "RESET"
}
function reducer(state, action) {
    switch (action.type) {
        case TYPES.INCREMENT:
            return { contador: state.contador + 1 };
        case TYPES.DECREMENT:
            return { contador: state.contador - 1 };
        case TYPES.DECREMENT_5:
            return { contador: state.contador - action.payload };
        case TYPES.INCREMENT_5:
            return { contador: state.contador + action.payload };
        case TYPES.RESET:
             return initialState;
        default:
            return state;
    }

}
const Contador = () => {
    // state se sugiere que sea un objeto
    const [state, dispatch] = useReducer(reducer, initialState , init)

```
## Directorios

### carpeta actions 
- Se debe tener una carpeta para las acciones (actions)
- src/actions


src/actions/ContadorActions.js

- Tendría un objeto con los tipos de acciones.

```js
export const TYPES = {
    INCREMENT: "INCREMENT",
    INCREMENT_5: "INCREMENT_5",
    DECREMENT: "DECREMENT",
    DECREMENT_5: "DECREMENT_5",
    RESET: "RESET"
}

```
### carpeta reducers
- Se debe tener una carpeta para los reducers 
- src/reducers
- Se puede  crear una carpeta por cada reducer y adentro de cada una tener un index.js

src/reducers/contadorReducer.js

- Debe tener la función reducer, el valor inicial del estado y la función que modifica el valor inicial.
- Básicamente este archivo contiene los tres parámetros de UseReducer.

```js
import { TYPES } from "../actions/contadorActions";

export const contadorInitialState = { contador: 0 };
export const contadorInit = (initialState) => {
   return  { contador: initialState.contador +100}
}

export function contadorReducer(state, action) {
    switch (action.type) {
        case TYPES.INCREMENT:
            return { contador: state.contador + 1 };
        case TYPES.DECREMENT:
            return { contador: state.contador - 1 };
        case TYPES.DECREMENT_5:
            return { contador: state.contador - action.payload };
        case TYPES.INCREMENT_5:
            return { contador: state.contador + action.payload };
        case TYPES.RESET:
             return contadorInitialState;
        default:
            return state;
    }

}

```
Contador.jsx
```js
import React, { useReducer } from 'react'
import { TYPES } from '../actions/contadorActions'
import { contadorInit, contadorInitialState, contadorReducer } from '../reducers/contadorReducer'

const Contador = () => {
    const [state, dispatch] = useReducer(contadorReducer, contadorInitialState , contadorInit)
    const sumar = () => dispatch({ type: TYPES.INCREMENT })
    const restar = () => dispatch({ type: TYPES.DECREMENT })
    const sumar5 = () => dispatch({ type: TYPES.INCREMENT_5, payload: 5 })
    const restar5 = () => dispatch({ type: TYPES.DECREMENT_5, payload: 5 })
    const reset = () => dispatch({type:TYPES.RESET})
    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Contador</h2>
            <nav>
                <button onClick={reset}>0</button>
                <button onClick={sumar5}>+5</button>
                <button onClick={restar5}>-5</button>
                <button onClick={sumar}>+</button>
                <button onClick={restar}> -</button>
            </nav>
            <h3>{state.contador}</h3>
        </div>
    )
}

export default Contador

```