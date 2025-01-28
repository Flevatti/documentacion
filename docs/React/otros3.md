---
sidebar_position: 14
---
# Otros #3

## Componente
#### Que es un Componente
- Un componente es una parte o pieza que forma parte de un sistema.
- En React, un componente es una pieza reutilizable de código que define cómo se ve y se comporta una parte específica de la interfaz de usuario (UI). Los componentes son fundamentales en React porque permiten dividir la interfaz en partes pequeñas y manejables, que pueden ser combinadas para crear aplicaciones complejas.
- Cada componente contiene su propio HTML, CSS, y JavaScript, lo que lo convierte en una parte reutilizable y modular de la interfaz de usuario.

#### ¿Qué representa un componente?
- Un componente en React puede representar cualquier parte de la interfaz de usuario, como:
    -	Un menú.
    -	Un sidebar.
    -	Una tarjeta de producto.
    -	Un formulario.
    -	Incluso elementos más pequeños, como un botón o un ícono.

#### Ventajas de este enfoque
1.	Modularidad: Puedes dividir la UI en piezas más manejables.
2.	Reutilización: Usa el mismo componente en diferentes partes de la aplicación con diferentes datos.
3.	Aislamiento: Cada componente tiene su propia lógica y estilos, evitando interferencias con otros componentes.
4.	Mantenibilidad: Cambiar o mejorar un componente no afecta al resto de la aplicación, siempre que respetes las interfaces entre ellos.

#### Componentes Declarativos y imperativos
- En React (y en programación en general), los términos declarativo e imperativo describen diferentes estilos de programación. Ambos se pueden usar para construir componentes, pero React favorece el enfoque declarativo porque simplifica la forma en que defines la interfaz de usuario y manejas su estado.
#### Enfoque imperativo
-  Te centras en cómo debe hacerse algo, describiendo paso a paso las instrucciones necesarias para lograr el resultado.
-  Es más detallado y se parece al proceso manual.
-  Ejemplo en JavaScript puro:
```js
const button = document.createElement('button'); button.textContent = 'Click Me'; 
button.style.backgroundColor = 'blue'; 
button.addEventListener('click', () => { alert('Button clicked!'); }); 
document.body.appendChild(button);

```
- Los componentes imperativos suelen implicar situaciones en las que interactúas directamente con el DOM, en lugar de dejar que React lo maneje por ti. Esto puede incluir:
    -	Manipulación directa del DOM (sin usar el mecanismo de renderizado de React).
    -	Interacciones con bibliotecas no declarativas (por ejemplo, jQuery, mapas interactivos, etc.).
    -	Acceso a elementos del DOM utilizando refs.

##### Ejemplo 1: Usando ref para manipulación directa del DOM
- En React, puedes utilizar refs para hacer referencia a un elemento del DOM y manipularlo directamente, lo que se acerca a un enfoque más imperativo:
```js
import React, { useRef } from 'react';

function ImperativeButton() {
    const buttonRef = useRef(null);

    const handleClick = () => {
        // Manipulamos el DOM directamente, por ejemplo, cambiando el estilo del botón.
        buttonRef.current.style.backgroundColor = 'red';
        buttonRef.current.textContent = 'Clicked!';
    };

    return (
        <button ref={buttonRef} onClick={handleClick}>
            Click Me
        </button>
    );
}

export default ImperativeButton;

```
:::tip Observación
- En este caso:
    -	Usamos useRef para obtener una referencia al botón en el DOM.
    -	Al hacer clic en el botón, manipulamos directamente su estilo y texto. Este es un enfoque más imperativo, porque estás gestionando explícitamente cómo cambiar la UI.


:::
##### Ejemplo 2: Interacciones con el DOM sin estado
- Un componente sin estado (useState) y sin usar React para renderizarlo completamente puede ser considerado imperativo. Se puede usar un enfoque más tradicional de manipulación del DOM:

```js
import React, { useEffect } from 'react';

function ImperativeDOM() {
    useEffect(() => {
        const div = document.createElement('div');
        div.textContent = 'I am created imperatively!';
        div.style.backgroundColor = 'lightgreen';
        document.body.appendChild(div);
    }, []);

    return null;  // No renderiza nada en el DOM de React.
}

export default ImperativeDOM;

```

#### Casos donde los componentes pueden ser más imperativos
1.	Acceder a elementos directamente: Usando refs para manejar interacciones que no se pueden controlar fácilmente mediante el estado y props.
2.	Manipulación del DOM directamente: Cuando necesitas aplicar cambios directos al DOM, como agregar o eliminar elementos, sin pasar por React.
3.	Integración con bibliotecas de terceros: Si estás utilizando bibliotecas que no están diseñadas para React (por ejemplo, para mapas, gráficos o animaciones complejas), es posible que necesites controlar el DOM de manera más manual.

#### Enfoque declarativo
-  Te centras en qué quieres que suceda, sin preocuparte por los detalles específicos de cómo se implementa.
-  Es más abstracto y expresivo.
-  Ejemplo en React:
```jsx
function App() {
    return <button style={{ backgroundColor: 'blue' }} onClick={() => alert('Button clicked!')}>Click Me</button>;
}

```
- Un componente declarativo en React es aquel en el que defines qué quieres que se muestre en la interfaz de usuario y que interacciones va a tener con el usuario pero nunca especificamos el “cómo se va a hacer”. Este enfoque es uno de los principios fundamentales de React, y favorece la claridad, la reutilización y el mantenimiento del código.

#### ¿Cómo funciona un componente declarativo en React?
- En un componente declarativo, React se encarga de la manipulación del DOM y de las actualizaciones de la interfaz de usuario, en función de los cambios en el estado o las props. No necesitas especificar los detalles sobre cómo se deben realizar las actualizaciones del DOM, ya que React lo hace automáticamente.
- Ejemplo de un componente declarativo:
```js
import React, { useState } from 'react';

function Counter() {
    // Definir el estado declarativo
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default Counter;

```
:::tip Observación
- En este ejemplo:
    - Estado: El estado del contador (count) se gestiona con useState, y React se encarga de actualizar la UI cuando este estado cambia.
    - UI: Declaramos qué debe mostrarse (el valor de count), sin necesidad de definir explícitamente cómo se debe cambiar el DOM cuando el valor de count cambia.
    - Evento: El evento onClick solo indica qué debe suceder (incrementar el contador), y React gestiona el cambio en el estado y la actualización del DOM.
:::

#### ¿Cómo favorece el enfoque declarativo?
1.	Simplicidad y claridad:
    -	El código declarativo es más fácil de leer y entender porque describes lo que debe ocurrir, no cómo debe ocurrir.
    -	No tienes que preocuparte por los detalles de manipular el DOM directamente o de cómo manejar las actualizaciones.
2.	Mantenibilidad:
    -	El código declarativo es más fácil de mantener y modificar. Cuando el estado cambia, React se encarga de actualizar la UI automáticamente de manera eficiente.
    -	Si necesitas modificar el comportamiento o el diseño de un componente, puedes hacerlo de manera centralizada sin preocuparte por cómo los cambios afectan el DOM.
3.	Reactividad:
    -	React se asegura de que los componentes se actualicen automáticamente cuando cambia su estado o las props, lo que simplifica el manejo de interacciones en la UI. No necesitas escribir código adicional para actualizar el DOM.
    -	La reactividad facilita la construcción de interfaces dinámicas que responden a entradas del usuario, cambios de datos, o interacciones en tiempo real sin tener que manejar manualmente las actualizaciones de la UI.
4.	Composición y reutilización:
    -	Los componentes declarativos son más fáciles de componer y reutilizar. Puedes crear componentes pequeños y aislados, y luego combinarlos para formar interfaces más complejas.
    -	La reutilización de un componente es más sencilla porque no necesitas gestionar su estado de manera imperativa en diferentes contextos.
5.	Optimización automática:
    -	React se encarga de la reconciliación del DOM: optimiza las actualizaciones solo para lo que ha cambiado. Si usas un enfoque declarativo, React realiza un renderizado eficiente y minimiza el trabajo necesario para actualizar la UI.
    -	Esto mejora el rendimiento, ya que React no tiene que actualizar todo el DOM cada vez, sino que solo hace las modificaciones necesarias.

## Componente Padre y componente hijo
- En React, los términos componente padre y componente hijo se refieren a la relación jerárquica entre componentes en la estructura de una aplicación. Los componentes pueden contener otros componentes dentro de su JSX, formando una relación de padre e hijo.

#### Componente Padre
- Un componente padre es aquel que contiene o "envuelve" a otro componente. Generalmente, es el que pasa datos o funciones a través de las props hacia sus componentes hijos.
- Ejemplo de un componente padre:
```js
function Padre() {
  const mensaje = "Hola desde el componente padre";

  return (
    <div>
      <h1>Este es el componente padre</h1>
      <Hijo texto={mensaje} />
    </div>
  );
}

```
#### Componente Hijo 
- Un componente hijo es aquel que es renderizado dentro de otro componente (el padre). El hijo puede recibir datos del padre a través de las props y utilizarlos para mostrar información o ejecutar funciones.
- Ejemplo de un componente hijo:
```js
function Hijo(props) {
  return (
    <div>
      <h2>Este es el componente hijo</h2>
      <p>{props.texto}</p>
    </div>
  );
}

```

#### Relación padre-hijo en conjunto
- Cuando se combinan el componente padre y el hijo:
```js
function Padre() {
  const mensaje = "Hola desde el componente padre";

  return (
    <div>
      <h1>Este es el componente padre</h1>
      <Hijo texto={mensaje} />
    </div>
  );
}

function Hijo(props) {
  return (
    <div>
      <h2>Este es el componente hijo</h2>
      <p>{props.texto}</p>
    </div>
  );
}

export default Padre;

```
- Resultado en el navegador:
```js
Este es el componente padre
Este es el componente hijo
Hola desde el componente padre
```

#### Características clave
1.	Datos unidireccionales: En React, los datos fluyen de padre a hijo (de arriba hacia abajo) a través de las props. Un componente hijo no puede modificar directamente los datos del padre.
2.	Props: Los datos que el componente padre pasa al hijo son propiedades (props), que el hijo recibe como un argumento en su función o como parte de this.props en una clase.
3.	Jerarquía: La estructura padre-hijo refleja cómo los componentes se anidan en la interfaz de usuario.


#### Ejemplo práctico con funciones
- Un componente padre puede pasar una función al hijo, para que el hijo pueda interactuar con el estado del padre.
- Padre:
```js
function Padre() {
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador(contador + 1);

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <Hijo onIncrementar={incrementar} />
    </div>
  );
}

```
- Hijo:
```js
function Hijo(props) {
  return (
    <div>
      <button onClick={props.onIncrementar}>Incrementar</button>
    </div>
  );
}

```
:::tip Observación 
- Comportamiento:
  -	El padre gestiona el estado del contador.
  -	El hijo ejecuta una función que actualiza el estado del padre al hacer clic en el botón.
- Esta relación entre componentes padres e hijos permite una arquitectura modular y organizada en React.
:::




## Renderizado de componentes
- El renderizado de componentes en React se refiere al proceso mediante el cual React genera y actualiza la interfaz de usuario (DOM) a partir de los componentes definidos en tu código. 
#### Pasos del renderizado de componentes en React

#### 1- Inicialización del componente
- Cuando React encuentra un nuevo componente en el DOM virtual (por ejemplo, cuando se renderiza por primera vez):
    -	Si el componente es funcional, React simplemente lo ejecuta como una función.
    -	Si el componente es de clase, React crea una instancia de la clase y llama a su método render().
#### 2- Ejecutar el constructor (solo en componentes de clase)
- En componentes de clase:
    -	El constructor se ejecuta para inicializar el estado y recibir las props.
    -	Este paso no existe en componentes funcionales, ya que estos utilizan Hooks (como useState y useEffect) para manejar el estado y el ciclo de vida.
#### 3- Renderizado inicial (primer renderizado)
- El componente devuelve JSX:
    - En componentes funcionales, es el valor retornado de la función.
    - En componentes de clase, es el resultado del método render().
-  JSX no es HTML real; es una representación declarativa que describe cómo se debe verse el componente en la UI.
-  React convierte el JSX en un objeto JavaScript llamado "elemento React", que describe cómo debe verse la UI en el DOM real.
- Por lo tanto, el código JSX luego se convierte en un objeto JavaScript que React utiliza para actualizar el DOM real.

#### 4- Creación del Virtual DOM
- Se crea un Virtual DOM donde cada "elemento React" se convierte en un nodo del Virtual DOM, que:
    -	Es una copia ligera y en memoria del DOM real.
    -	Contiene una representación jerárquica de todos los elementos React.
    -	Sirve como un modelo para realizar cálculos de actualización antes de modificar el DOM real.
    -	El Virtual DOM tiene como “raiz” un “componente principal”, que sería el que se renderiza dentro del index.html generalmente dentro de un DIV.
- El Virtual DOM no interactúa directamente con el DOM real del navegador, sino que sirve como una copia liviana del DOM real.
#### 5- Reconciliación
- Cuando el estado o las props de algún componente cambia:
    -	React crea un nuevo Virtual DOM basado en los cambios.
    -	Utiliza un algoritmo de diffing para comparar el Virtual DOM nuevo con el anterior.
    -	Identifica exactamente qué partes han cambiado (nodos nuevos, eliminados o modificados).
    -	React hace esto mediante el proceso llamado reconciliación: compara el nuevo Virtual DOM con el anterior y determina qué ha cambiado.
- De esta manera React no vuelve a renderizar completamente la UI.
#### 6- Actualización del DOM real
- Después de la reconciliación:
    - React realiza solo los cambios necesarios en el DOM real.
    - Esto minimiza las manipulaciones del DOM, que suelen ser costosas en términos de rendimiento.
    - React actualiza solo aquellos nodos en el DOM que han cambiado, lo que mejora el rendimiento de la aplicación, ya que no necesita actualizar todo el DOM cada vez.
- React se asegura de que la UI en el navegador refleje fielmente el estado actual de la aplicación.

#### 7- Re-renderizado
- El componente se vuelve a renderizar siguiendo el mismo proceso.
- React actualiza el Virtual DOM, lo compara con el anterior, y aplica solo las diferencias al DOM real.


## Comienzo de una aplicación
- El proceso de renderizado comienza cuando usamos ReactDOM.render() (en React 17 o versiones anteriores) o ReactDOM.createRoot().render() (en React 18 y versiones posteriores). Este paso inicia el ciclo de vida de una aplicación React, conectando el Virtual DOM con el DOM real del navegador.


#### Inicio del Proceso
- Los métodos mencionados generalmente requieren dos elementos:
    1.	Un componente principal: Este componente actúa como la "raíz" del DOM virtual y siempre se renderiza. Representa toda la aplicación.
    2.	Un selector CSS: Este selector apunta a un elemento HTML del archivo index.html. Normalmente, se trata de un div con el atributo id='root'.
- Por lo tanto, el proceso serio este:
    1.	Se selecciona una etiqueta HTML del DOM Real (index.html) que suele ser un contenedor (Como un DIV). De esta manera le estamos diciendo a React que gestione o manipule todo lo que allá dentro del contenedor. En pocas palabras puede modificar el DOM Real pero solo la parte que le indicamos.
    2.	React comienza a generar elementos React (a partir del JSX) del componente principal y de todos los componentes que se deben renderizar en este.
    3.	A cada elemento React se le asigna un “Nodo” dentro del DOM VIRTUAL, este representa la estructura jerárquica de elementos React (componentes).
    4.	React manipula el contenedor que especificamos para “mostrar” el DOM Virtual en el DOM real. En otra palabra añade dentro del contenedor todos los nodos generados por el DOM virtual, reflejando la estructura inicial de la UI.
    5.	El DOM real ahora refleja la estructura del Virtual DOM, lo que permite que la UI se muestre al usuario por primera vez.
    6.	Entra en el Ciclo de Vida React.
    7.    A partir de este punto, React empieza a escuchar los cambios en el estado y las props de los componentes. Cada cambio activa el proceso de reconciliación para actualizar la UI de forma eficiente.


#### ¿Qué es un componente principal?
- Un componente principal en React es el componente raíz o el primer componente que se renderiza en tu aplicación. Actúa como el punto de partida desde el cual se construye y organiza toda la estructura de la interfaz de usuario (UI).
#### Características del Componente Principal
1.	Representa la aplicación completa:
    -	Este componente es la raíz en el DOM Virtual.
    -	Desde aquí, puedes incluir otros componentes secundarios que formen la UI de tu aplicación.
2.	Generalmente es llamado App:
    -	Por convención, el componente principal suele nombrarse App (aunque no es obligatorio).
    -	Este componente se importa y pasa al método ReactDOM.render() o root.render().
3.	Contiene otros componentes:
    -	El componente principal puede incluir directamente otros componentes (hijos) que representan diferentes partes de la aplicación, como menús, encabezados, listas, formularios, etc.
    -	Estos se organizan en una estructura jerárquica para construir la UI completa.
4.	Se renderiza dentro del contenedor del DOM real:
    -	Este componente se asocia a un elemento del DOM real (como el &lt;div id="root"> en index.html) para mostrar la aplicación al usuario.

## DOM Elements vs React components
#### DOM Elements
- Representan etiquetas HTML estándar (como div, h1, button) que React utiliza para interactuar con el DOM real del navegador.
- Ejemplo:
```js
const element = <div className="container">Hello, World!</div>;
```
:::tip Observación
- En este ejemplo:
    - element es un elemento React, que representa un nodo del DOM Virtual.
    - Eventualmente, React usará este elemento React para generar un nodo real en el DOM del navegador.

:::
#### Relación con JSX
- Cuando escribes JSX (como &lt;div>), React lo convierte en un objeto JavaScript que describe un DOM element.
- Ejemplo:
```js
const element = <h1 className="title">Hello</h1>;
```
- Este código se traduce internamente a:
```js
const element = React.createElement('h1', { className: 'title' }, 'Hello');
```
:::tip Observación
- Aquí:
    - 'h1' es el tipo de elemento (en este caso, un encabezado HTML).
    - { className: 'title' } son las propiedades (o atributos) del elemento.
    - 'Hello' es el contenido del elemento.
:::

#### Cómo React convierte los elementos en el DOM Real
- Cuando React renderiza la aplicación:
    1.	React toma el JSX que describes en tu código y lo convierte en elementos React (objetos)
    2.	Luego, React genera nodos en el DOM Virtual con estos elementos.
    3.	Finalmente, React traduce estos nodos en elementos del DOM real del navegador y los inserta en la página.
- El flujo:
```js
// JSX
const element = <p>Hello, World!</p>;

// Elemento React (objeto JavaScript)
const reactElement = {
  type: 'p',
  props: {
    children: 'Hello, World!'
  }
};

// Nodo del DOM Real (al renderizar)
<p>Hello, World!</p>;

```

#### Por qué es importante entender los DOM Elements React
- Los DOM elements React son la base para construir interfaces en React. Cada vez que escribes JSX, estás creando elementos React que eventualmente se traducen en nodos del DOM real.
- React gestiona estos elementos para actualizar el DOM de manera eficiente (a través del Virtual DOM), evitando manipulaciones directas y mejorando el rendimiento.

#### React components
- Son bloques reutilizables de código (son funciones o  clases) que pueden contener lógica, estado y JSX. Estos pueden estar formados por DOM elements y/o por otros React Components.
- La forma de escribirlos en JSX ayuda a identificarlos fácilmente:
    -	DOM Elements:
        -	Se escriben usando nombres en minúscula (por ejemplo, &lt;div>, &lt;button>).
        -	React los interpreta como elementos HTML estándar.
    -	React Components:
        -	Se escriben usando nombres en mayúscula inicial (por ejemplo, &lt;App>, &lt;Header>).
        -	React los interpreta como componentes definidos por el usuario.

#### Ejemplo
```js
// Un DOM element
const domElement = <div className="container">Hello, World!</div>;

// Un React Component
function MyComponent() {
  return <h1>Hello from Component!</h1>;
}
const reactComponent = <MyComponent />;

```

#### Representación como Objeto JavaScript
- Cuando React procesa JSX, convierte tanto los DOM elements como los React components en objetos de JavaScript. Vamos a ver cómo luce cada uno.

##### DOM Element
```js
const element = <h1 className="title">Hello</h1>;
```
- Se traduce a:
```js
const element = {
  type: 'h1', // Tipo de elemento HTML
  props: {
    className: 'title', // Atributos del elemento
    children: 'Hello'   // Contenido del elemento
  }
};

```
##### React Component
```js
function MyComponent() {
  return <h1>Hello from Component!</h1>;
}
const component = <MyComponent />;

```
- Se traduce a:
```js
const component = {
  type: MyComponent, // La función o clase que define el componente
  props: {},         // Props pasadas al componente (en este caso, vacío)
};

```
:::tip Observación
- En este caso:
    - type: MyComponent indica que este objeto representa un React Component.
    - React invocará la función MyComponent() para generar el elemento React.


:::

#### Comparación

| Propiedad | DOM Element | React Component |
| - | - | - |
|Definición   | Elemento HTML estándar  |       Componente personalizado en React |   
|Escrito en JSX   |    Minúsculas (&lt;div>)  | Mayúsculas (&lt;MyComponent>)  |
|Representación en JavaScript  | type: 'tag_name' (por ejemplo, 'div')   |  type: Component |
|Renderiza directamente  |Nodos HTML   | JSX retornado por el componente |
|Puede contener lógica  |No   | 		Sí |

#### Diferencias Clave
1.	Uso de lógica:
    -	Los React Components pueden contener lógica (estado, eventos, etc.).
    -	Los DOM Elements no tienen lógica; simplemente representan un nodo HTML.
2.	Propósito:
    -	Los DOM Elements son bloques básicos.
    -	Los React Components son bloques reutilizables que pueden agrupar DOM Elements y más React Components.

## Componentes funcionales vs componentes de clase
#### Componentes Funcionales
- Son funciones de JavaScript que contienen un parametro llamado props y retornan elementos de React (generalmente JSX).
- Sintaxis básica:
```js
function ComponenteFuncional(props) {
  return (
    <div>
      <h1>Hola, {props.nombre}</h1>
    </div>
  );
}

// Uso del componente
<ComponenteFuncional nombre="Juan" />

```
#### Con Hooks (estado y efectos)
- Los componentes funcionales no tenían estado ni acceso a ciclos de vida hasta que se introdujeron los Hooks en React 16.8:
```js
import React, { useState, useEffect } from 'react';

function ComponenteConEstado() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log('El contador cambió:', contador);
    return () => {
      console.log('Limpieza del efecto');
    };
  }, [contador]); // Ejecutar efecto cuando contador cambie

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}

```
#### Componentes de Clase
- Son clases de JavaScript que extienden de React.Component y deben incluir un método render() que retorna JSX.
- Sintaxis básica
```js
import React, { Component } from 'react';

class ComponenteClase extends Component {
  render() {
    return (
      <div>
        <h1>Hola, {this.props.nombre}</h1>
      </div>
    );
  }
}

// Uso del componente
<ComponenteClase nombre="María" />

```
#### Con estado y métodos del ciclo de vida
- Los componentes de clase tienen acceso a un estado interno y a los métodos del ciclo de vida de React:
```js
class ComponenteConEstado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    };
  }

  componentDidMount() {
    console.log('El componente se montó');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('El componente se actualizó');
  }

  componentWillUnmount() {
    console.log('El componente se desmontó');
  }

  incrementar = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  render() {
    return (
      <div>
        <p>Contador: {this.state.contador}</p>
        <button onClick={this.incrementar}>Incrementar</button>
      </div>
    );
  }
}

```

#### Diferencias clave

| Aspecto | Componentes Funcionales | Componentes de Clase |
| - | - | - |
| Estado  |  Se maneja con useState y otros Hooks. |Se maneja con this.state y setState.   |
|Ciclo de vida   | Se maneja con Hooks como useEffect.  | Se usa componentDidMount, componentDidUpdate, etc.  |
|  Simplicidad |  Más concisos, ideales para lógica simple. |  Más verbosos y con más código repetitivo. |
| Performance  |  Más rápidos porque no tienen la sobrecarga de clases. |   Menos eficientes debido a la sobrecarga de las clases.|
|  Migración | Preferidos en versiones modernas de React.  | Se usan menos en proyectos nuevos.  |

#### Recomendación
- Usa componentes funcionales para la mayoría de los casos, especialmente en proyectos modernos, porque son más simples, concisos y están alineados con las prácticas actuales de React.
- Los componentes de clase pueden ser útiles en proyectos antiguos que no han migrado a Hooks.


## Extensión JSX
- Por lo general los componentes tienen las extensiones .jsx o .tsx pero no es obligatorio.
#### ¿Qué es Jsx?
- JSX es lo que se retorna en un componente funcional (y también lo que devuelve el metodo render de un  componente de clase), y es lo que React utiliza para crear los elementos React que conforman la interfaz de usuario.
- JSX (JavaScript XML) es una extensión de sintaxis de JavaScript que permite escribir HTML dentro de JavaScript de manera más declarativa y legible. Fue creado para crear componentes en React, ya que permite definir la estructura de la interfaz de usuario (UI).
#### Características de JSX
1.	Sintaxis similar a HTML: JSX permite escribir algo que se parece a HTML, lo que facilita la comprensión y escritura de los componentes React, sin necesidad de preocuparse por la sintaxis más compleja de JavaScript puro.
2.	Declarativo, no imperativo: Aunque JSX se ve como HTML, lo que realmente hace React es convertir este JSX en “elementos React” utilizando funciones como React.createElement(). Es decir, no estás escribiendo directamente código para manipular el DOM de forma imperativa. React maneja la creación y manipulación de elementos por ti. Este enfoque declarativo permite enfocarse en "qué" debería renderizarse, no en "cómo" se hace internamente.
3.	Abstracción sobre el proceso de creación de elementos: Bajo el capó, JSX se convierte en JavaScript, y es JavaScript el que crea los elementos que forman la UI. Lo que hace React es usar estos elementos para sincronizar el estado de la UI con el DOM virtual y actualizar el DOM de manera eficiente.
4.  Es una extensión de sintaxis que debe ser transformada por herramientas como Babel en código JavaScript estándar que los navegadores puedan entender.

#### Ventajas de JSX
1.	Legibilidad: La sintaxis similar a HTML facilita la escritura y comprensión de los componentes.
2.	Integración con JavaScript: Puedes usar JavaScript directamente dentro de JSX, lo que permite una mayor flexibilidad para crear dinámicamente los elementos de la interfaz.
3.	Optimización en React: JSX permite a React realizar un seguimiento eficiente de los cambios en la interfaz de usuario utilizando un algoritmo llamado Reconciliación.

#### Características principales de JSX
##### Sintaxis similar a HTML
- JSX permite escribir código que se parece a HTML, pero en realidad es JavaScript. Esto facilita la creación de componentes de la interfaz de usuario.
- Ejemplo de JSX:
```js
const elemento = <h1>Hola, mundo</h1>;
```
:::tip Observación 
- Este código parece HTML, pero es realmente una llamada a React.createElement() bajo el capó.
:::
##### Expresiones JavaScript dentro de JSX
- Puedes incrustar expresiones JavaScript dentro de JSX utilizando llaves {}. Esto permite incluir variables, funciones o cualquier código válido de JavaScript.
- Ejemplo:
```js
const nombre = 'Juan';
const saludo = <h1>Hola, {nombre}</h1>;

```
##### Elementos JSX
- JSX se convierte en un objeto JavaScript que React puede usar para crear la UI. React usa React.createElement() para transformar JSX en un árbol de elementos React (DOM virtual).
- Ejemplo:
```js
const elemento = <h1>Hola, mundo</h1>;
// Esto es equivalente a:
const elemento = React.createElement('h1', null, 'Hola, mundo');

```
##### Atributos en JSX
- Los atributos de los elementos en JSX son similares a los atributos HTML, pero con algunas diferencias. Por ejemplo, en JSX se usa className en lugar de class (porque class es una palabra reservada en JavaScript).
- Ejemplo: 
```js 
const elemento = <div className="contenedor">Contenido aquí</div>;
```
##### Cierre automático de etiquetas
- En JSX, las etiquetas deben cerrarse explícitamente. Esto significa que incluso las etiquetas como &lt;img > o &lt;br > deben ser cerradas.
- Ejemplo:
```js 
const imagen = <img src="imagen.jpg" alt="Descripción" />;
```
#### JSX vs HTML
- Aunque JSX se parece a HTML, hay diferencias clave:
  -	Atributos: En JSX, algunos atributos HTML tienen nombres diferentes, como class → className, for → htmlFor, y style → un objeto con propiedades de estilo en lugar de una cadena de texto.
  - Etiquetas de cierre: Las etiquetas en JSX deben cerrarse correctamente, incluso las auto cerradas como &lt;img > o &lt;br >.

#### Extensiones comunes de React 
-	`.jsx`: Indica que el archivo contiene JavaScript con JSX (JavaScript XML), que es una sintaxis que permite escribir componentes React de forma declarativa.
-	`.tsx`: Se usa en proyectos de TypeScript y combina TypeScript con JSX, permitiendo escribir componentes React con tipado estático.

:::tip
- Ambas extensiones son convencionales para distinguir archivos que contienen JSX o TSX del resto de los archivos JavaScript o TypeScript.
:::

#### ¿Es obligatorio usar .jsx o .tsx?
- No. React puede procesar archivos con la extensión .js (para JavaScript) o .ts (para TypeScript) siempre que estén configurados correctamente en tu entorno de desarrollo.
- Ejemplo:
```js
import React from 'react';

function Componente() {
  return <h1>Hola, mundo</h1>;
}

export default Componente;

```

:::tip Observación 
- Esto funciona porque Babel (o el compilador que uses) está configurado para transformar JSX en llamadas a React.createElement().
:::

#### Ventajas de usar .jsx o .tsx
1.	Claridad: Facilita identificar archivos que contienen JSX o TSX, especialmente en proyectos grandes.
2.	Herramientas: Algunos editores de código, como VS Code, ofrecen soporte mejorado (como resaltado de sintaxis) para estas extensiones.
3.	Convención: Seguir esta práctica estándar ayuda a que otros desarrolladores comprendan más rápidamente tu código.

#### Casos para usar .js o .ts en lugar de .jsx o .tsx
1.	Códigos que no contienen JSX: Si el archivo solo tiene lógica JavaScript o TypeScript (sin JSX), se suele usar .js o .ts.
2.	Configuración personalizada: En algunos proyectos con configuraciones avanzadas, el equipo puede decidir no usar las extensiones .jsx o .tsx.

:::tip
- Aunque no es obligatorio usar .jsx o .tsx, es altamente recomendado porque mejora la legibilidad, el mantenimiento del código, y la integración con herramientas. Si estás trabajando en un proyecto moderno o colaborando con otros desarrolladores, es mejor seguir estas convenciones.
:::