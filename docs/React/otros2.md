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
- [useRef()](https://flevatti.github.io/documentacion/docs/React/proyecto#useref)

:::


## React.forwardRef
- React.forwardRef crea un componente React que envía el atributo ref que recibe a otro componente más abajo en el árbol.
- React.forwardRef acepta una función de componente como un argumento. Esta función tendrá las props y ref como dos argumentos. Esta función debe retornar un nodo React.


:::tip info
- [React Docs](https://beta.es.reactjs.org/reference/react/forwardRef)
- [ReactJS.org](https://es.reactjs.org/docs/react-api.html#reactforwardref)
- [Mas info](https://flevatti.github.io/documentacion/docs/React/proyecto#forwardref )
:::

## React.startTransition
- Esta diseñado para usarse cuando [React.useTransition()](https://flevatti.github.io/documentacion/docs/React/hookcss#usetransition) no este disponible.
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


## Ciclo de vida
- El ciclo de vida de un componente se refiere a las distintas etapas por las que pasa un componente desde su creación hasta su destrucción.
- La mayoría de los frameworks o librerías te permiten ejecutar código en alguna etapa/momento específico del ciclo para controlar su comportamiento o realizar tareas específicas (como hacer llamadas a APIs, manejar eventos o limpiar recursos).
- El ciclo de vida típicamente tiene estas fases:
    - Creación/Montaje (Mounting): El componente se inicializa y se agrega al DOM.
    - Actualización (Updating): El componente es actualizado, generalmente porque sus propiedades o estado han cambiado.
    - Desmontaje/Destrucción (Unmounting): El componente es eliminado del DOM.
- En React, el concepto de ciclo de vida  ha evolucionado con la introducción de los hooks. Anteriormente, en los componentes de clase, React manejaba el ciclo de vida a través de métodos específicos como componentDidMount(), componentDidUpdate(), y componentWillUnmount(). Sin embargo, con la llegada de los hooks en React 16.8, la forma de gestionar el ciclo de vida cambió, especialmente en los componentes funcionales.


:::tip Componente funcional
- Un componente funcional en React es un tipo de componente que se define como una función de JavaScript. Este tipo de componente se utiliza para crear partes reutilizables de la interfaz de usuario y se caracteriza por ser más sencillo y más fácil de leer y mantener en comparación con los componentes de clase.

:::

#### Cambios con los Hooks
- Antes, solo los componentes de clase tenían acceso a los métodos de ciclo de vida.
- Ahora, con los hooks, los componentes funcionales también pueden gestionar el ciclo de vida de manera más flexible y sencilla.
- En lugar de los métodos de ciclo de vida tradicionales, React utiliza el hook useEffect() para manejar las etapas del ciclo de vida como montaje, actualización y limpieza.


#### Comparación
- Antes (Componentes de Clase): Los métodos del ciclo de vida en los componentes de clase eran algo así:
```jsx
class MyComponent extends React.Component {
  componentDidMount() {
    // Se ejecuta después de que el componente se monta
    console.log('Componente montado');
  }

  componentDidUpdate() {
    // Se ejecuta cuando el componente se actualiza
    console.log('Componente actualizado');
  }

  componentWillUnmount() {
    // Se ejecuta justo antes de que el componente se desmonte
    console.log('Componente desmontado');
  }

  render() {
    return <div>Hello, World!</div>;
  }
}

```

- Ahora (Componentes Funcionales con Hooks): Con los hooks, la misma funcionalidad se puede lograr usando useEffect() para manejar los ciclos de vida de montaje, actualización y desmontaje:

```jsx
import { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    console.log('Componente montado'); // Simula componentDidMount()

    return () => {
      console.log('Componente desmontado'); // Simula componentWillUnmount()
    };
  }, []); // El array vacío asegura que solo se ejecute al montar y desmontar

  useEffect(() => {
    console.log('Componente actualizado'); // Simula componentDidUpdate()
  });

  return <div>Hello, World!</div>;
}


```

#### Resumen
- Los hooks permiten gestionar efectivamente los aspectos de montaje, actualización, y desmontaje de los componentes funcionales.
- Métodos como componentWillMount() y componentWillReceiveProps() no tienen equivalentes directos y se consideran obsoletos.
- Algunos métodos de ciclo de vida de clase, como shouldComponentUpdate(), se manejan de manera diferente en los componentes funcionales utilizando técnicas como React.memo().
- Así que, aunque muchos de los aspectos del ciclo de vida se pueden manejar con hooks, hay algunos que no tienen un equivalente directo y se gestionan de maneras distintas en el contexto de los componentes funcionales.



## Conceptos

### Inyección de dependencia
- La inyección de dependencias es un concepto clave en la programación que busca facilitar la colaboración entre diferentes partes de un sistema. Imagina que estás organizando una fiesta y, en lugar de preparar toda la comida tú mismo, contratas a un chef. Este chef es como una "dependencia". En lugar de que tú te encargues de todo, alguien más (el chef) se encarga de esa tarea, permitiéndote concentrarte en otros aspectos de la fiesta. Este enfoque hace que tu trabajo sea más sencillo y flexible, porque si el chef no puede asistir, podrías contratar a otro sin tener que cambiar toda tu planificación. De forma similar, en el desarrollo de software, la inyección de dependencias permite que un objeto utilice los servicios (métodos y propiedades) de otros objetos sin tener que crearlos directamente, lo que simplifica el código y permite que sea más fácil de cambiar o mejorar.
- La clave de este patrón es que un componente no necesita saber cómo crear o gestionar los servicios (objetos con propiedades y métodos) que utiliza, solo recibe lo que necesita. Siguiendo con el ejemplo de la fiesta, imagina que ahora decides contratar a un organizador de eventos que te conecte con todos los proveedores (como el chef, los músicos, etc.). De la misma manera, en programación, un sistema de inyección de dependencias conecta los componentes de un programa con los servicios que necesitan. 
- Además, este patrón permite que el sistema sea más fácil de probar. Por ejemplo, si quieres ensayar cómo se desarrollará la fiesta, puedes hacer una "prueba" con un chef simulado. En el desarrollo de software, esto significa que podemos probar un componente usando versiones "falsas" de sus dependencias, lo que facilita encontrar errores o verificar que todo funcione correctamente sin necesitar que el sistema completo esté en funcionamiento. La inyección de dependencias, en resumen, promueve la flexibilidad, el mantenimiento y las pruebas, todo sin complicar el sistema innecesariamente.
- En resumen:
  - Cada Módulo externo o servicio brinda un objeto que tiene métodos y propiedades para realizar una tarea específica.
  - El programador solo especifica qué "objetos" (que representan esos módulos externos o servicios) necesita para que su programa o componente funcione correctamente.
  - El sistema de inyección de dependencias se encarga de instanciar esos objetos, y el programador puede usarlos accediendo a sus funciones y propiedades. Generalmente, esa instancia se almacena en una variable para facilitar su uso posterior en el código.

#### Ejemplo de angular
- Definir un servicio que será inyectado:
```js
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // Esto indica que el servicio está disponible de forma global
})
export class AuthService {
  isLoggedIn(): boolean {
    return true; // Simulación de autenticación
  }
}


```

- Inyectar el servicio en un componente:
```js
import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  template: `<p>¿Usuario autenticado? {{ isAuthenticated }}</p>`
})
export class LoginComponent {
  isAuthenticated: boolean;

  constructor(private authService: AuthService) {
    this.isAuthenticated = this.authService.isLoggedIn();
  }
}

```

:::tip Observación
- Aquí, el servicio AuthService se inyecta en el constructor del componente LoginComponent y se utiliza para comprobar si el usuario está autenticado.
- El programador especifico que servicio necesita usar en el código a través del constructor y el sistema de inyección de dependencia se encarga de crear la instancia (NO EL DESAROLLADOR).
- Por lo general, en muchos lenguajes de programación orientados a objetos, como en Angular (con TypeScript) o C#, se especifica lo que se necesita en un constructor. En estos casos, las dependencias (objetos, servicios, módulos) se inyectan (especifican) directamente en el constructor de una clase o componente. De esta manera, el programador simplemente indica qué dependencias requiere su clase o componente, y el sistema de inyección de dependencias se encarga de instanciarla en el momento adecuado para que se pueda usar.


:::


### Patrón de diseño 
- Un patrón de diseño es como una receta o un plan para resolver problemas comunes que surgen en el desarrollo de software. En lugar de que cada desarrollador tenga que idear desde cero cómo resolver un problema, estos patrones ofrecen una solución comprobada que puede ser adaptada a diferentes situaciones. 
- En lugar de reinventar la rueda, los patrones de diseño ofrecen una forma comprobada de estructurar y organizar el código para resolver problemas que los desarrolladores enfrentan repetidamente. Estos patrones son como plantillas que pueden ser adaptadas a las necesidades de un proyecto específico, promoviendo un código más claro, mantenible y escalable.
- Imagina que tienes un grupo de personas que van a construir diferentes casas. Cada casa tiene que ser diferente, pero en todas ellas se necesitan ciertas cosas en común, como un techo, paredes y ventanas. Los patrones de diseño serían como los planos o estrategias que estas personas pueden usar para construir las casas de manera más eficiente. Por ejemplo, podrían tener un patrón que indique cómo colocar las ventanas de manera que haya buena iluminación sin importar el tipo de casa. Cada constructor puede usar ese patrón, ajustándolo a las necesidades específicas de su proyecto, pero siempre basándose en una solución probada y efectiva.
- Ahora, imagina que estás organizando un evento. El patrón de diseño en este caso sería una guía para resolver ciertos problemas de forma eficiente. Por ejemplo, un patrón podría ser cómo distribuir las mesas para que todas las personas se sientan cómodas y puedan moverse con facilidad. No importa qué tipo de evento organices (una boda, una fiesta de cumpleaños o una conferencia), este patrón se puede adaptar para optimizar el espacio y mejorar la experiencia. De manera similar, en programación, los patrones de diseño ayudan a organizar y estructurar el código para que sea más fácil de mantener y entender, y los desarrolladores pueden adaptarlos a los diferentes proyectos que están creando.
- Los patrones de diseño no son código específico, sino guías que indican cómo organizar clases, objetos y sus interacciones para solucionar problemas. Existen diferentes tipos de patrones de diseño, entre los más conocidos se encuentran:
  -  Patrones creacionales, que se enfocan en cómo se crean los objetos, como el patrón Singleton o Factory.
  -  Patrones estructurales, que ayudan a organizar clases y objetos para formar estructuras más grandes, como el patrón Adapter o Decorator.
  -  Patrones de comportamiento, que describen cómo los objetos interactúan y se comunican entre sí, como el patrón Observer o Command.

#### Ejemplo Patrón Singleton
- El patrón Singleton asegura que una clase tenga una única instancia y proporciona un punto de acceso global a ella. Es útil cuando se necesita un control central sobre una acción o recurso, como un gestor de configuración o un acceso a una base de datos.
- Ejemplo: Imagina que estás organizando una gran conferencia. Solo necesitas un coordinador de evento que tome decisiones sobre todo lo que sucede. En lugar de tener varios coordinadores que puedan dar instrucciones contradictorias, decides que solo habrá un coordinador. Esa persona se encarga de gestionar todos los aspectos del evento. En este caso, el coordinador es como la única instancia de la clase Singleton, asegurando que todas las decisiones se tomen de manera coherente.

#### Ejemplo Patrón Observer
- El patrón Observer permite que un objeto (el "sujeto") notifique a otros objetos (los "observadores") sobre cambios en su estado. Este patrón es útil cuando se desea que varios componentes reaccionen a eventos o cambios en el estado de otro componente.
- Ejemplo: Imagina que estás en un equipo de deportes, y el entrenador es el sujeto. Cada vez que el entrenador decide cambiar la estrategia del juego, los jugadores (observadores) deben ser informados para que todos estén en la misma página. Así que el entrenador (sujeto) les dice a los jugadores (observadores) sobre la nueva estrategia. Si el entrenador decide hacer un cambio, todos los jugadores son notificados automáticamente y pueden ajustar su juego en consecuencia. Este patrón permite que los jugadores se mantengan actualizados sin que el entrenador tenga que comunicarse individualmente con cada uno de ellos cada vez que hay un cambio.


## Forma de crear componentes
- Antes de la versión 17 se usaba React.createElement para crear elementos de React. Para esto se debía importar “React”.
- React.createElement  se utiliza para crear elementos de React, pero lo que crea no es directamente un elemento HTML, sino un elemento React. Luego, React usa este "elemento React" para generar o actualizar los elementos HTML en el DOM real del navegador.
#### Paso a paso
1.	JSX es una sintaxis que se parece a HTML, pero es JavaScript en realidad.
2.	React.createElement transforma el JSX en un elemento React, que es un objeto que describe qué tipo de elemento quieres (por ejemplo, un div), qué propiedades o atributos tiene, y su contenido.
3.	React toma ese objeto y actualiza o crea  el Virtual DOM con este elemento, luego actualiza el DOM real del navegador, donde finalmente se crean los elementos HTML.

#### Ejemplo
- Cuando escribías este código JSX:
```jsx
const element = <div>Hello, world!</div>;
```
- El compilador (como Babel) lo transformaba en la siguiente llamada a React.createElement:
```js
const element = React.createElement('div', null, 'Hello, world!');
```

:::tip Observación
-  'div': Es el tipo de elemento que se quiere renderizar.
-  null: Son las "props" que en este caso están vacías (no hay atributos en el div).
-  'Hello, world!': Es el contenido que va dentro del div.
:::


- Este código no crea un nodo HTML directamente, sino un elemento React, que es un objeto JavaScript que describe el componente y su contenido. React usa este objeto junto con su algoritmo de reconciliación y el Virtual DOM para hacer los cambios necesarios en el DOM real.

#### _jsx
- A partir de React 17, React hizo mejoras para que ya no fuera necesario importar explícitamente React en cada archivo que use JSX. Para hacerlo, introdujeron una función interna optimizada, llamada _jsx, que se encarga de manejar la conversión de JSX a un elemento React sin necesidad de la función React.createElement.
- Cuando hablamos de una "función interna" en el contexto de _jsx en React, nos referimos a una función que no está pensada para ser usada directamente por los desarrolladores, sino que se utiliza dentro del código de React o por las herramientas que transforman el JSX en JavaScript, como Babel o TypeScript.
#### Ejemplo
- Supongamos que escribes este código JSX en React:
```jsx
const element = <h1>Hello, world!</h1>;
```
- Cuando usas una herramienta como Babel o TypeScript para compilar el JSX, este código se convierte automáticamente en una llamada a la función _jsx (en React 17+). Aquí está cómo se vería después de la transformación:
```js
import { jsx as _jsx } from 'react/jsx-runtime';

const element = _jsx('h1', {
  children: 'Hello, world!',
});

```
:::tip ¿Qué está haciendo este código?
-	`_jsx('h1', {...})`: Es una llamada a la función interna _jsx, que recibe como primer argumento el tipo de elemento (en este caso, 'h1').
-	`{ children: 'Hello, world!' }`: El segundo argumento es un objeto que contiene las propiedades o "props" del elemento. En este caso, solo tenemos una propiedad: children, que es el contenido del h1.
:::

- Este código en JavaScript no crea el HTML directamente, sino que crea un elemento React, que es un objeto que describe cómo debería verse el componente en el DOM. Por ejemplo:
```js
const element = {
  type: 'h1',
  props: {
    children: 'Hello, world!',
  },
  key: null,
  ref: null,
};

```
- Este es el elemento React. Luego, React utiliza este objeto para actualizar el DOM real en el navegador.
- Después de que React tiene este elemento React (objeto JavaScript), lo usa junto con su Virtual DOM para determinar qué necesita actualizarse en el DOM real.
- Cuando React actualiza el DOM, finalmente obtienes este HTML en tu página web:
```html
<h1>Hello, world!</h1>
```

#### Diferencias entre React.createElement y usando _jsx

| Característica | React.createElement | _jsx  |
| - | - | - |
|  Versión de React |  React 16 y versiones anteriores |   React 17 en adelante|
|  Importación de React |  	Es necesario importar React en cada archivo JSX |   No es necesario importar React en cada archivo JSX|
|  Transformación de JSX|  JSX se convierte en llamadas a React.createElement |   JSX se convierte en llamadas a _jsx|
|  Sintaxis generada| `React.createElement('div', null, 'Hello')` |   `_jsx('div', { children: 'Hello' })`|
|  Optimización de rendimiento| 	Sin optimización específica para producción |   Más optimizado para producción (código más compacto) |
|  Uso en entornos| 	Usado tanto en desarrollo como en producción |  Optimizado con distintas versiones para desarrollo (_jsxdev) y producción (_jsx) |
|  Tamaño del código| 	Más largo debido a la llamada completa a React.createElement |  Más compacto debido a la llamada optimizada a _jsx |
|  Virtual DOM| 		Usa el Virtual DOM para actualizar el DOM real |  También usa el Virtual DOM, pero de manera más eficiente en React 17+ |
|  Compatibilidad| 			Necesario en versiones anteriores a React 17 |  Necesario en React 17 y superior |


#### Detalles clave
1.	Importación de React: Con React.createElement, necesitas importar React en cada archivo para usar JSX, pero con _jsx (React 17+), esta importación ya no es necesaria.
2.	Optimización del código: _jsx genera un código más compacto y optimizado, especialmente útil en producción, reduciendo el tamaño del bundle.
3.	Compatibilidad: React.createElement sigue siendo compatible y necesario en proyectos con versiones anteriores de React, pero _jsx se usa a partir de React 17.
4.	Virtual DOM: Ambas formas de crear componentes funcionan con el Virtual DOM, pero _jsx está diseñado para hacer que React maneje la actualización del DOM de manera más eficiente.
5. Ambas formas (React.createElement y _jsx) son maneras de transformar JSX en componentes de React. Luego, React usa esos componentes para crear y manipular el DOM virtual, comparándolo con el DOM real del navegador. Si encuentra diferencias, React actualiza el DOM real para reflejar los cambios.


## Dom Virtual
- El DOM virtual es una forma en que las bibliotecas de JavaScript, como React, manejan la interfaz de usuario (UI) de una aplicación. En lugar de trabajar directamente con el DOM real (que es lo que ves en la página web), React crea una copia ligera de ese DOM en la memoria.
-  Copia en Memoria: Imagina que el DOM real es un gran lienzo donde dibujas tu aplicación. El DOM virtual es como un boceto que haces en un cuaderno antes de pintar en el lienzo. Este boceto te permite hacer cambios rápidamente sin afectar el lienzo real.
-  Sincronización: Cuando cambias algo en la aplicación (como cuando un usuario hace clic en un botón), React actualiza el DOM virtual. Luego, compara el nuevo boceto con el anterior para ver qué ha cambiado y decide solo actualizar esas partes del DOM real. Esto se llama reconciliación.
-  Beneficios: Al trabajar con el DOM virtual, React puede hacer que las actualizaciones sean más rápidas y eficientes, lo que mejora el rendimiento de la aplicación. No necesitas preocuparte por cada pequeño detalle de cómo cambiar el DOM real, ya que React se encarga de eso por ti.
-  Representación en Memoria: En lugar de manipular directamente el DOM real (que puede ser costoso en términos de rendimiento), React crea una versión del DOM en memoria. Esto permite realizar cambios y comparaciones rápidamente.
-  Reconciliación: Cuando el estado de una aplicación cambia (por ejemplo, cuando un usuario interactúa con la interfaz), React actualiza el DOM virtual en lugar del DOM real. Luego, compara el nuevo DOM virtual con la versión anterior para identificar qué cambios se necesitan hacer en el DOM real. Este proceso se llama reconciliación.
-  Minimización de Actualizaciones: Al hacer una comparación eficiente entre el DOM virtual y el DOM real, React puede determinar con precisión qué elementos han cambiado, añadido o eliminado, y solo realizar las actualizaciones necesarias en el DOM real. Esto mejora el rendimiento de la aplicación.

#### ¿Qué es el Shadow DOM?
- El Shadow DOM es una tecnología diferente  al virtual DOM que se utiliza en el desarrollo web, principalmente en Web Components. Aquí tienes algunas diferencias clave:
  -	Propósito: El Shadow DOM se utiliza para encapsular un conjunto de elementos y estilos dentro de un componente, de modo que no se vean afectados por estilos globales. Piensa en ello como una caja de herramientas: lo que guardas dentro no afecta lo que está afuera.
  -	Uso: Se usa más para crear componentes reutilizables en aplicaciones web, mientras que el DOM virtual se utiliza para optimizar la forma en que React actualiza la UI.

#### ¿Qué es “React Fiber”?
- React Fiber es un nuevo sistema que React introdujo en su versión 16 para manejar el proceso de reconciliación de manera más efectiva. Aquí están sus características:
  -	Renderizado Incremental: En lugar de actualizar todo de una vez, Fiber permite que React divida el trabajo en pequeñas partes. Esto significa que si hay muchas cosas que actualizar, React puede hacerlo poco a poco, lo que hace que la interfaz sea más receptiva y fluida.
  -	Mejora de Rendimiento: Fiber permite que la UI siga siendo interactiva, incluso si hay operaciones de renderizado en curso. Esto es especialmente útil en aplicaciones grandes.
