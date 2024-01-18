---
sidebar_position: 11
---

# Hooks y CSS 


## Hooks personalizado 
- Construir tus propios Hooks te permite extraer la lógica del componente en funciones reutilizables.
- Nos permite utilizar los hook para crear una lógica reutilizable.
- Un Hook personalizado es una función de JavaScript cuyo nombre comienza con ”use” y que puede llamar a otros Hooks

#### Ejemplo

```js

import './App.css';
import { useState } from 'react';

function App() {
  const [active , setActive] = useState(false);
  const handleToggle = () => {
    setActive(!active)
  } 
  const handleFalse = () => {
    setActive(false)
  }
  const handleTrue = () => {
    setActive(true)
  }
  return (
    <div className="App">
      <h1>Componente Principal</h1>
       <button onClick={handleToggle }>Toggle</button>
       <button onClick={handleFalse }>False</button>
       <button onClick={handleTrue }>True</button>
       {active.toString()}
    </div>
  );
}

export default App;

```
#### Convertimos el código anterior en un Hook
- Los hooks personalizados son funciones que retornan un estado.
- Los hooks personalizados Retornan:
  - Un estado creado por un/varios hook de React 
  - funciones/métodos que modifiquen el estado que se retorna.
- En pocas palabras, retorna hooks de React y funciones que modifiquen estos hooks.
- Reglas que contienen los hook:
  - Empiezan con la palabra “use” en minúscula y el resto en CamelCase
  - Adentro del hook personalizado debe existir hooks de React (useState , etc)
```js


import './App.css';
import { useState } from 'react';
function  useMiHook() {
  const [active , setActive] = useState(false);
  const handleToggle = () => {
    setActive(!active)
  } 
  const handleFalse = () => {
    setActive(false)
  }
  const handleTrue = () => {
    setActive(true)
  }

  return {active , handleToggle , handleFalse , handleTrue }
}
function App() {
  const {active , handleToggle , handleFalse , handleTrue } = useMiHook()
  return (
    <div className="App">
      <h1>Componente Principal</h1>
       <button onClick={handleToggle }>Toggle</button>
       <button onClick={handleFalse }>False</button>
       <button onClick={handleTrue }>True</button>
       {active.toString()}
    </div>
  );
}

export default App;

```
:::tip Observacion
- El hook retorna una variable creada con useState (Un Estado) y funciones que modifiquen la variable (métodos que modifican el estado).
- El componente principal utiliza el hook.
:::


:::tip
Si dos componentes utilizan el mismo hook, el ESTADO que devuelve este va a ser independiente del otro.
:::

:::tip 
Los hooks pueden tener parametros.
:::

:::tip
Los hooks de React que debe utilizar uno personalizado puede ser cualquiera (UseState , useEffect , y cualquier otro useXXXX que venga de React).
:::

:::tip 
Los hooks Personalizados pueden devolver un arreglo (como el useState)  o un objeto
:::

#### [Mas info](https://es.reactjs.org/docs/hooks-custom.html)


## Hoks basicos
### useState
- [guia](https://fedeleva.github.io/documentacion/docs/React/introduccion#usestate)
### useEffect
- [guia](https://fedeleva.github.io/documentacion/docs/React/api#useeffect)
### useContext
- [guia](https://fedeleva.github.io/documentacion/docs/React/context#usecontext)
## Hooks Adicionales
### useReducer
- [guia](https://fedeleva.github.io/documentacion/docs/React/reducer#usereducer-1)
### useCallback
- Devuelve un callback memorizado.
- useCallback tiene dos argumentos:
  - El callback
  - Un array de dependencias.
- useCallback devolverá una versión memorizada del callback que solo cambia si una de las dependencias ha cambiado
:::tip
El arreglo de dependencias no se pasa como argumentos al callback. Sin embargo, conceptualmente, eso es lo que representan: cada valor al que se hace referencia dentro del callback también debe aparecer en el arreglo de dependencias
:::
:::tip Callback memorizado
Significa que esta guardado en la memoria RAM Y no se declara cada vez que se llama.
:::
#### Codigo sin Usecallback
```js

import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [contador , setContador] = useState(0);
  const incrementador = () => {
    setContador(contador + 1)
  }
   useEffect(() => {
     alert('Se creo la funcion incrementador');
   } , [incrementador])

  return (
    <div className="App">
      <h1>Componente Principal</h1>
      <button onClick={incrementador}>+</button>
       {contador}
    </div>
  );
}

export default App;

```
:::warning
Cada vez que aumenta el contador, se vuelve a crear la función incrementador (se vuelve a renderizar la parte afectada y se vuelve a crear la funcion ya que utiliza  el hook que cambio)
:::
#### Solucionamos el problema con el useCallback
```js
import { useEffect, useState, useCallback } from "react";
import "./App.css";

function App() {
  const [contador, setContador] = useState(0);
  const incrementador = useCallback(() => {
    setContador((viejo) => {
      return viejo + 1;
    });
  } , []);
  useEffect(() => {
    alert("Se creo la funcion incrementador");
  }, [incrementador]);

  return (
    <div className="App">
      <h1>Componente Principal</h1>
      <button onClick={incrementador}>+</button>
      {contador}
    </div>
  );
}

export default App;

```
### useMemo
- Devuelve un valor memorizado.
- useMemo tiene dos argumentos:
  - Una función que devuelve un “valor”.
  - Un array de dependencias.
:::tip
El arreglo de dependencias no se pasa como argumentos a la función. Sin embargo, conceptualmente, eso es lo que representan: cada valor al que se hace referencia dentro de la función también debe aparecer en el arreglo de dependencias
:::
:::tip Valor memorizado
Significa que esta guardado en la memoria RAM Y no se declara cada vez que se llama.
:::
#### Ejemplo
```js
import { useEffect, useState, useMemo } from "react";
import "./App.css";

function App() {
  const [contador, setContador] = useState(0);
  const contadorMemorizado = useMemo(() => {
    return contador
  } , []);
  useEffect(() => {
    alert("Se cambio la variable");
  }, [contadorMemorizado]);

  return (
    <div className="App">
      <h1>Componente Principal</h1>
      <button onClick={()=>{setContador(contador + 1)}}>+</button>
      {contador}
    </div>
  );
}

export default App;

```
#### Otro Ejemplo
```js
import { useEffect, useState, useMemo } from "react";
import "./App.css";

function App() {
  const [contador, setContador] = useState(0);
  const [valor , setValor] = useState(0);
  const contadorMemorizado = useMemo(() => {
    return contador
  } , [valor]);
  const incrementador = ()=> {
    setContador(contador + 1);
    setValor(valor + 1);
  }
  useEffect(() => {
    alert("Se cambio el contadorMemorizado");
    console.log(contadorMemorizado);
  }, [contadorMemorizado]);
  return (
    <div className="App">
      <h1>Componente Principal</h1>
      <button onClick={incrementador}>+</button>
      <p>contador  {contador}</p>
      <p>valor  {valor}</p>
    </div>
  );
}

export default App;

```
### useRef
- [guia](https://fedeleva.github.io/documentacion/docs/React/proyecto#useref)
### useImperativeHandle
- Le sacamos provecho con:
  - useRef ([guia1](https://fedeleva.github.io/documentacion/docs/React/proyecto#useref)  -- [guia 2](https://fedeleva.github.io/documentacion/docs/React/formulario#useref))
  - [forwardRef](https://fedeleva.github.io/documentacion/docs/React/proyecto#forwardref) 
- useImperativeHandle es un hook que se utiliza para definir funciones en un componente que se puede invocar fuera de este.
- La funcion no va a cambiar a menos que le indiques dependencias.
- Tiene tres parámetros
1.	Ref (Especifica donde se va a guardar lo que se pase en el segundo parametro)
2.	Función que devuelve un objeto (Lo que devuelve el objeto , es lo que se va a guardar en la referencia)
3.	Un array con las dependencias


#### Ejemplo
Componente Padre
```js
import { useRef } from "react";
import "./App.css";
import Componente from "./components/Componente";

function App() {
   const elementoRef = useRef();
  return (
    <div className="App">
      <h1 >Componente Principal</h1>
       <Componente ref={elementoRef}></Componente>
       <button onClick={()=> {elementoRef.current.metodoHijo('Texto del Padre')}} >Boton del padre</button>
    </div>
  );
}

export default App;

```
Componente Hijo 
```js
import { forwardRef, useImperativeHandle, useState } from "react";

const Componente = forwardRef( (props , ref) => {

    useImperativeHandle(ref , ()=> {
        return {
        //   Guardamos el metodo hijo en el ref
            metodoHijo
        }
    })
    const [dato , setDato] = useState("");
    const metodoHijo = (texto) => {
         setDato(texto);
    }

    
    {
        return (
          <div>
            <h1>Componente Hijo</h1>
             <p>      {dato}</p>
             <button onClick={()=> {metodoHijo('Texto del hijo')}} >Boton Hijo</button>
             </div>
          
        );
      }
}) 
  
  export default Componente;

```
:::tip Observacion 
- Lo que devuelve la funcion del segundo parámetro , es el objeto que  se guarda en el ref que se pasó en el primer parámetro
- En este ejemplo el objeto del segundo parámetro se guardo en el elementoRef , que es el ref del componente Hijo que lo obtuvo del padre.
- El componente padre le paso un ref al hijo y este lo uso para guardar un objeto en él (ref). De esta manera el padre tiene acceso al metodoHijo
- Por lo tanto a través del ref en el componente padre, pudimos acceder al método del componente Hijo.
:::
### useLayoutEffect
- Es igual a useEffect , la diferencia es el tiempo de ejecución.
- Se ejecuta antes de que se muestren todos los componentes en la pantalla.



#### useEffect
- Este hook se ejecuta de manera asíncrona después de ser renderizado y mostrado el componente en pantalla.
- El useEffect se ejecuta después de que se  muestren todos los componentes en la pantalla.
- Este es el paso a paso que sucede con tu componente cuando estás usando este hook:
1.	El estado del componente cambia
2.	El componente se vuelve a renderizar
3.	El componente es mostrado en pantalla
4.	useEffect se ejecuta
#### useLayoutEffect
- useLayoutEffect es idéntico a useEffect , pero su principal diferencia clave es que se activa sincrónicamente después de todas las mutaciones del DOM. Solo desea usar este gancho cuando necesite hacer cambios de DOM directamente.
- useLayoutEffect se ejecuta de manera síncrona después de que se tenga el render del componente, pero ANTES de ser pintado en pantalla.
- Ahora verás que pasa con tu componente:
1.	El estado del componente cambia
2.	El componente se vuelve a renderizar
3.	useLayoutEffect se ejecuta y React espera a que termine
4.	El componente es mostrado en pantalla



:::warning ⚠️
 Todo lo que hagas con este hook hará que el paint del componente tarde más de lo esperado, lo cual puede afectar el performance.
:::

#### Ejemplo
```js
import { useEffect, useLayoutEffect } from "react";
import "./App.css";

function App() {
  useEffect(()=> {
         console.log('useEffect');
  } , []);  
  
  useLayoutEffect(()=> {
         console.log('useLayoutEffect');
  } , []);
 
  return (
    <div className="App">
      <h1 >Componente Principal</h1>
    </div>
  );
}

export default App;

```
:::tip Observacion
 Se ejecuta antes que useEffect.
:::

:::tip Mas info
- [Las diferencias](https://kentcdodds.com/blog/useeffect-vs-uselayouteffect)
- [Las diferencias parte 2](https://platzi.com/blog/useeffect-uselayouteffect/)
:::

### useDebugValue
- Se usa para imprimir(mostrar) información de  hooks personalizados
- Es útil para sus propios hooks, ya que puede ver rápidamente información detallada sobre sus hooks.
- Su único parámetro es la información a mostrar.
- La información solo la vera en la consola (si tiene la extension de React) o en alguna herramienta de depuración.
```js

import { useDebugValue, useState } from "react";
import "./App.css";
 function useMyHook(nombre = null) {
  const [user, setUser] = useState(nombre)

  useDebugValue(nombre == null ? 'No User' : user.name)

  return [user, setUser]
}
function App() {
  const [user,setUser] = useMyHook();
  return (
   
    <div className="App">
      <h1 >Componente Principal</h1>
    </div>
  );
}

export default App;

```
#### [Mas info](https://blog.webdevsimplified.com/2021-11/use-debug-value/)
### useDeferredValue
- useDeferredValue acepta un valor y devuelve una nueva copia del valor que cederá su lugar a actualizaciones más urgentes
- El valor que devuelve tendrá prioridad baja al actualizarse, esperará hasta que finalice todas las demás actualizaciones para actualizarse.
- useDeferredValue  devolverá una versión diferida del valor pasado. Toma el valor del estado.
- useDeferredValue Devolvera un valor diferido
- Tendrá un retraso al actualizarse (el valor diferido).
- Si el valor pasado al useDeferredValue cambia, el valor diferido cambia 

:::tip Sintaxis 

```js

import { useDeferredValue } from 'react';

const deferredValue = useDeferredValue(value);

```
:::
:::tip  Explicación del valor diferido al modificarse:
React devolverá el valor anterior. Luego, cambiará al nuevo valor después de que se haya completado el renderizado actual.
:::

#### Mas info
- [Su uso](https://blog.webdevsimplified.com/2022-05/use-deferred-value/)
- [Debates](https://github.com/reactwg/react-18/discussions/129)
- [Un articulo sobre el hook](https://blog.saeloun.com/2022/01/13/react-18-usedefferedvalue-hook)

#### Ejemplo
Sin el hook

App.js
```js
import {  useState } from "react";
import "./App.css";
import List from "./List";

function App() {

  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  
  return (
    <div className="App">
      <h1>Componente Principal</h1>
      <input type="text" value={input} onChange={handleChange}></input>
        <List input={input}></List>
    </div>
  );
}

export default App;

```
List.js
```js
import { useMemo } from "react";

function List({input}){
    const LIST_SIZE = 20000;
    const list = useMemo(()=> {
        const l = []
        for (let i = 0; i < LIST_SIZE; i++){
           l.push(<div key={i}>{input}</div>)
        }
        return l;
    } , [input])

    return list;
}

export default List;

```
Si aplicamos el Hook:


List.js
```js
import { useMemo , useDeferredValue } from "react";

function List({input}){
    const LIST_SIZE = 20000;
    const deferredInput = useDeferredValue(input);
    const list = useMemo(()=> {
        const l = []
        for (let i = 0; i < LIST_SIZE; i++){
           l.push(<div key={i}>{deferredInput}</div>)
        }
        return l;
    } , [deferredInput])

    return list;
}

export default List;

```
:::tip Observacion 
- Le dará la impresión que el input es más rápido.
- Ya que se actualizará primero el input y luego el método list memorizado.
- Esto se debe a que el método memorizado esta pendiente de la versión diferida del input.
:::

#### ¿Quien se actualiza Primero?

List.js
```js
import { useMemo , useDeferredValue, useEffect } from "react";

function List({input}){
    const LIST_SIZE = 20000;
    const deferredInput = useDeferredValue(input);
    const list = useMemo(()=> {
        const l = []
        for (let i = 0; i < LIST_SIZE; i++){
           l.push(<div key={i}>{deferredInput}</div>)
        }
        return l;
    } , [deferredInput])
  useEffect(()=> {
     console.log(`Input: ${input} \nDeferred: ${deferredInput}`)
  } , [input , deferredInput])
    return list;
}

export default List;

```
:::tip Solucion
En el console.log va a poder distinguir el retraso que tiene el valor diferido con el otro.

:::

### useTransition

#### Problema
```js
import { useState } from "react";
import "./App.css";

function App() {
  const LIST_SIZE = 20000;
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const handleChange = (e) => {
    setInput(e.target.value);
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(e.target.value);
    }
    setList(l);
  };

  return (
    <div className="App">
      <h1>Componente Principal</h1>
      <input type="text" value={input} onChange={handleChange}></input>
      {list.map((i, index) => {
        return <div key={index}>{i}</div>;
      })}
    </div>
  );
}

export default App;

```
:::warning
- React combina todos los cambios de estado y los hace todo a la vez.
- Luego de hacer todos los cambios de estado, empieza a renderizar para que el usuario lo vea.
- Orden de ejecución:
1. setInput
2. setList
3. Renderiza los cambios
:::

#### El hook useTransition  
- Nos va a ayudar a establecer el orden de los cambios de estado.
- Por defecto todos los estados que cambian son de alta prioridad y todos corren uno después del otro (en orden de ejecución)
- El hook useTransition devuelve:
1. isPending  : Valor booleano
2. startTransition : Es una funcion que recibe un callback
```js
const [isPending , startTransition] = useTransition();
```
- El callback que recibe  startTransition se va a ejecutar(inmediatamente luego de ser definido) como un cambio de estado, pero con baja prioridad.
- isPending es true hasta que se termine de ejecutar el cambio de estado de startTransition.

#### Ejemplo
```js
import { useState, useTransition } from "react";
import "./App.css";

function App() {
  const [isPending , startTransition] = useTransition();
  const LIST_SIZE = 20000;
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const handleChange = (e) => {
    setInput(e.target.value);
    startTransition(() => {
      const l = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(e.target.value);
      }
      setList(l);
    })
   
  };

  return (
    <div className="App">
      <h1>Componente Principal</h1>
      <input type="text" value={input} onChange={handleChange}></input>
      {list.map((i, index) => {
        return <div key={index}>{i}</div>;
      })}
    </div>
  );
}

export default App;

```
:::tip Observacion
- Primero se aplica el cambio de estado del input
- Y Luego de un tiempo se aplica el cambio de estado de list.
- Esto sucede porque el cambio de estado de list tiene baja prioridad ya que se ejecuta dentro de startTransition
:::

#### Ahora usamos el isPending para realizar un Loading
```js
  return (
    <div className="App">
      <h1>Componente Principal</h1>
      <input type="text" value={input} onChange={handleChange}></input>
      {!isPending? list.map((i, index) => {
        return <div key={index}>{i}</div>;
      }) : "Loading"}
    </div>
  );

```
:::tip Observacion 
- Si isPending es false (ya se realizo el cambio de estado , esta finalizado), mostrara un listado.
- Si isPending es true (Todavia no se realizó el cambio de estado , esta pendiente), mostrara un “Loading”.
:::

### useID
- useId es un hook para generar ID únicos que son estables en el servidor y el cliente, al tiempo que evita los desajustes de hidratación.

```js
import { useId } from "react";
import "./App.css";

function App() {
     const id = useId();

  return (
    <div className="App">
      <h1>Componente Principal</h1>
      <p> id {id}</p>
    </div>
  );
}

export default App;

```

## [Info de hooks]( https://es.reactjs.org/docs/hooks-reference.html)
## Formas de añadir CSS
### Hoja de estilos externas
- Se realizo importando un archivo css en el componente
  
```js
  import { useId } from "react";
// import “archivo.css”
import "./App.css";

function App() {
     const id = useId();

  return (
    <div className="App">
      <h1>Componente Principal</h1>
      <p> id {id}</p>
    </div>
  );
}

export default App;

```
#### Ventajas
-	Nos brinda todas las herramientas del CSS moderno (variables, selectores avanzados, nuevas pseudoclases, etc.)
-	Nos ayuda a limpiar nuestros archivos de componentes de estilos en línea



#### Contras
-	Necesita configurar el prefijo del proveedor para garantizar que las funciones más recientes funcionen para todos los usuarios
-	Requiere más escritura y repetitivo que otras bibliotecas CSS (es decir, SASS)
-	Cualquier hoja de estilo se conecta en cascada al componente y a todos los elementos secundarios; sin alcance
-	Debe usar una convención de nomenclatura confiable para garantizar que los estilos no entren en conflicto

### CSS Inline
#### De forma tradicional
```js
 <div style={{background:"red" , display: "inline-block"}}>
      <h1>Componente Principal</h1>
    </div>

```
- Dado que el CSS en línea está escrito en un objeto de JavaScript, las propiedades con dos nombres, como background-color, deben escribirse con la sintaxis de camelCase
```js
 <div style={{backgroundColor:"red" , display: "inline-block"}}>
      <h1>Componente Principal</h1>
    </div>

```
#### Declarando los estilos como un objeto
```js

function App() {
     const estilos = {
       background : "red" ,
       border:"5px solid salmon",
       display:"inline-block"
     }
  return (
    <div style={estilos}>
      <h1>Componente Principal</h1>
    </div>
  );
}

```
#### Ventajas
-	La forma más rápida de escribir estilos
-	Bueno para la creación de prototipos (escriba estilos en línea y luego muévase a la hoja de estilo)
-	Tiene una gran preferencia (puede anular estilos de una hoja de estilo)




#### Contras
-	Tedioso convertir CSS simple a estilos en línea
-	Muchos estilos en línea hacen que JSX sea ilegible
-	No puede usar funciones básicas de CSS como animaciones, selectores, etc.
-	No escala bien
### Module CSS
- La magia del CSS Modular es que nunca vas a pisar estilos en uno u otro lugar, debido a que al momento de compilar tu proyecto, los nombres de las clases cambiarán un poco para tener caracteres aleatorios, de tal forma que no tendrás que preocuparte por utilizar metodologías como BEM.
- El CSS dentro de un módulo está disponible solo para el componente que lo importó y no tiene que preocuparse por los conflictos de nombres.
- Para trabajar con estos módulos solo tienes que agregar .module antes del .css y después del nombre. Tus archivos deberían quedar con un nombre similar a buttons.module.css
- Lo último que tienes que saber acerca del css modular es que se tiene un atributo extra llamado composes para mezclar clases de una forma parecida a lo que hacen los preprocesadores.

#### Ejemplo

buttons.module.css
```css
.red-color{
    background-color: red;
    border: 1px solid white; 
    color: white;
  }
  
  .button-red{
   composes: red-color;  
   font-size: 18px;
  }

  div {
    background:green;
  }

  .size {
    font-size:50px;
  }

```
En el componente:
```js
import "./App.css";
// Importamos el modulo css
import button from "./buttons.module.css"
function App() {
  //  Los estilos CSS estan en un objeto
   console.log(button);

  return (

    <>
 
    <div >
      <h1>Componente Principal</h1>
      {/* Si las clases tienen caracteres raros , se debe usar los corchetes [] */}
       <button className={button['button-red']}>Botton</button>
     
    </div>
    <div >
      {/* Como la clase no tiene  caracteres raros , se trata con el punto */}
    <button className={button.size}> Grande</button>
    </div>
    </>
  );
}

export default App;

```
#### Ventajas
-	Los estilos están en el ámbito de uno u otro componente (a diferencia de CSS / SASS)
-	Los nombres de clase únicos y generados garantizan que no haya conflictos de estilo
-	Puede usarlos inmediatamente sin configuración en proyectos CRA
-	Se puede usar con SASS/CSS



#### Contras
-	Puede ser complicado hacer referencia a los nombres de clase
-	Puede ser una curva de aprendizaje usar estilos CSS como propiedades de objetos
### CSS in JS 
- Existen multiples librerias para poder emplear este método.
- Una de estas es  [style components](https://styled-components.com/)
#### Ventajas
-	CSS-in-JS es predecible: los estilos se limitan a componentes individuales
-	Dado que nuestro CSS ahora es JS, podemos exportar, reutilizar e incluso extender nuestros estilos a través de accesorios.
-	Las bibliotecas CSS-in-JS aseguran que no haya conflictos de estilo al generar nombres de clase únicos para sus estilos escritos
-	No es necesario centrarse en las convenciones de nomenclatura de sus clases, ¡simplemente escriba estilos!
#### Contras
- A diferencia del CSS simple, deberá instalar una o más bibliotecas de JavaScript de terceros, lo que agregará peso a su proyecto construido.
### Preprocesadores 
- React muestra una amplia compatibilidad con todos los preprocesadores como SASS, Less y Stylus para poder trabajar de una forma más eficiente con CSS. Recuerda que en Webpack deberás configurar un loader especial para cada uno de estos.
:::tip 
Puedes combinarlos con Module CSS y sacarle un mayor provecho
:::
#### Ventajas
-	Incluye muchas características dinámicas de CSS como extensión, anidamiento y mixins
-	Los estilos CSS se pueden escribir con mucho menos codigo repetitivo que CSS simple

#### Contras
-	Al igual que el CSS simple, los estilos son globales y no se limitan a ningún componente.
-	Las hojas de estilo CSS están comenzando a incluir una serie de características que SASS tenía exclusivamente, como las variables CSS (no necesariamente una estafa, pero vale la pena señalar)
-	SASS / SCSS a menudo requiere configuración, como instalar la biblioteca Node node-sass

### Frameworks de interfaz de usuario
- Una alternativa, la cual puede agilizar mucho el crear las vistas de nuestros componentes, es el usar alguno de los famosos frameworks de UI pensados para trabajar con React, como los siguientes:
-  MaterialUI
-  ElementalUI
-  React Boostrap
-  Ant design
-  Tailwind CSS

- Cada framework te da componentes prediseñados para solo importarlos y evitar todo el estilado por tu parte

## Componentes en clases
#### ¿Qué pasa si le agrego clases a un componente?
Componente Hijo 
```js
function ComponenteHijo() {

    return (
        <div> 
            <h2>Componente Hijo</h2>
        </div>
    )
}

export default ComponenteHijo

```
App
```js

import "./App.css";

import ComponenteHijo from "./ComponenteHijo";
function App() {

  return (

    <>
    <div  >
      <ComponenteHijo className="red" style={{background:"red"}}></ComponenteHijo>
    </div>

    </>
  );
}

export default App;

```

#### NO PASA NADA , NO SE PUEDE