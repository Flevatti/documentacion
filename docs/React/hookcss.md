---
sidebar_position: 11
---

# Hooks y CSS 
- Un hook es una función especial de React que te permite "enganchar" (de ahí el término hook, que significa gancho) funcionalidades de React, como el manejo de estado y el ciclo de vida, en componentes funcionales.
-	Los hooks no funcionan dentro de las clases.
-	Proporcionan un estado y un ciclo de vida a los componentes evitándonos a los desarrolladores el uso de las clases.
-	También puedes crear tus propios Hooks para reutilizar logica.
#### ¿Qué significa "enganchar" (hook) funcionalidades?
- El término "enganchar" viene del inglés hook, que significa gancho. La idea es que puedes "enganchar" o conectar (usar) funcionalidades avanzadas de React (como estado, ciclo de vida, contexto, etc.) dentro de un componente funcional.
- En otras palabras, los hooks nos permite usar funcionalidades avanzadas (como estado, ciclo de vida, contexto, etc.) dentro de componentes funcionales, que antes solo estaban disponibles en los componentes de clase. Cada Hook tiene una funcionalidad concreta de React.
- Ejemplo:


|  Hook | Funcionalidad que te brinda  |  
| - | - | 
|  useState | Crear y manejar estado.  |    
|  useEffect | Manejar efectos secundarios y el ciclo de vida.  |    
|  useContext |  Acceder a datos globales (compartidos entre componentes). |    
|  useRef |  Crear referencias al DOM o guardar datos persistentes. |    
|   useReducer| Manejar estado complejo con lógica basada en acciones.  |    


- Antes de los hooks, estas funcionalidades solo estaban disponibles en los componentes de clase. Con los hooks, puedes escribir componentes más simples y reutilizables usando funciones.
- Un hook en React es una función especial que te permite usar características avanzadas de React, como el manejo del estado o el ciclo de vida, en componentes funcionales. Los hooks son una de las mayores innovaciones en React porque unifican y simplifican la forma en que interactuamos con el framework, eliminando la necesidad de componentes de clase para manejar funcionalidades complejas.
#### Características principales de los hooks
1.	Funciones puras: Los hooks son simples funciones que puedes usar dentro de componentes funcionales.
2.	Declarativos: No necesitas escribir código adicional para manejar estados o ciclos de vida. Los hooks lo hacen de forma natural y legible.
3.	Reutilizables: Puedes crear tus propios hooks personalizados para encapsular lógica repetitiva y usarlos en diferentes componentes.

#### Reglas fundamentales de los hooks
1.	Solo se pueden usar dentro de funciones de React: No puedes usarlos fuera de un componente funcional ni en funciones regulares.
2.	Llamados en el mismo orden: React necesita que los hooks se llamen en el mismo orden en cada renderización de un componente. Esto es porque React usa ese orden para asociar correctamente el estado y otros valores a cada hook.  Si cambias el orden de los hooks (por ejemplo, al usarlos dentro de condicionales), React puede perder la referencia de qué estado pertenece a cada hook.
3.	No usar condicionales: No puedes llamar hooks dentro de if, for,  bloques condicionales o bucles. Siempre deben estar al nivel superior de tu componente.

#### Analogía: Los hooks como herramientas especializadas
- Imagina que estás construyendo una casa y tienes un conjunto de herramientas:
  -	useState: Es como un destornillador: simple y esencial para ajustar (manejar) cosas rápidamente.
  -	useEffect: Es como un taladro eléctrico: lo usas para acciones más pesadas (como hacer agujeros, que serían efectos secundarios).
  -	useContext: Es como un sistema de tuberías: permite que el agua (datos) fluya entre las habitaciones (componentes) sin pasar por todos los pisos.
  -	useRef: Es como una caja de herramientas que guarda cosas importantes para usar después, sin afectar el trabajo actual.
  -	useReducer: Es como una herramienta multifunción: más compleja, pero poderosa cuando necesitas manejar tareas avanzadas.

#### ¿Qué es un hook personalizado?
- Un hook personalizado (custom hook) es una función que creas para encapsular lógica que se repite o que deseas reutilizar entre varios componentes.
- Un hook personalizado resuelve un problema o realiza una tarea específica, y puedes usarlo en cualquier componente que lo necesite.
- En lugar de duplicar la lógica en múltiples componentes, la extraes a un hook personalizado, lo que hace que el código sea más legible, reutilizable y fácil de mantener.
- Los hooks personalizados encapsulan lógica que puede ser utilizada por varios componentes, como manejar formularios, realizar peticiones HTTP, etc.

#### ¿Cuáles son las condiciones para crear un hook personalizado?
- Un hook personalizado no es más que una función de JavaScript que:
  1.	Sigue las reglas de los hooks:
      -	No debe llamarse dentro de bucles, condicionales o funciones anidadas.
      -	Debe ser llamado al nivel superior de un componente o de otro hook.
  2.	Puede utilizar otros hooks estándar:
  Por ejemplo, useState, useEffect, useReducer, etc., para encapsular lógica más compleja.
  3.	Debe comenzar con el prefijo use:
      - Esto es una convención para que React lo identifique como un hook y pueda rastrear correctamente su estado y efectos.
  4.	Debe ser reutilizable.


#### ¿Qué se hace en un hook personalizado?
- En un hook personalizado, puedes:
  -	Manejar estado: Usando hooks como useState o useReducer.
  -	Realizar efectos secundarios: Usando hooks como useEffect.
  -	Encapsular lógica repetitiva: Haciendo que sea fácil de reutilizar en múltiples componentes.
- En esencia, un hook personalizado es una abstracción. En lugar de escribir la lógica directamente dentro de un componente, la extraes a una función independiente para simplificar el componente y mejorar la reutilización.


#### ¿Qué debe retornar un hook personalizado?
- Un hook personalizado debe retornar lo que devuelve otros hooks de React, como useState, useEffect, useReducer, o cualquier otro, pero no el hook en sí.
- Un hook personalizado puede retornar:
  1.	Datos: Por ejemplo, el estado (el valor que retorna useState).
  2.	Funciones: Por ejemplo, La acción que modifica el estado (la función que devuelve useState).
  3.	Cualquier combinación de ambos: Puedes retornar tanto datos como funciones, dependiendo de la lógica que encapsule el hook.


#### ¿Qué no debe retornar?
- Un hook personalizado no debería retornar directamente los hooks estándar de React (useState, useEffect, etc.).
- Esto es porque:
  -	Los hooks estándar están diseñados para ser utilizados dentro de un componente o de otro hook.
  -	Retornarlos directamente expone su implementación interna y podría llevar a errores al no seguir las reglas de los hooks.


:::tip
- Los ejemplos de esta documentación pueden estar escritos en TypeScript.
:::


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
- El hook retorna una variable de estado creada con useState y funciones que modifiquen el estado.
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
Los hooks Personalizados pueden devolver un arreglo (como el de useState)  o un objeto.
:::

:::tip Documentación
- [Construyendo tus propios Hooks (antiguo)](https://es.reactjs.org/docs/hooks-custom.html)
- [Reutilizar la lógica con Hooks personalizados](https://es.react.dev/learn/reusing-logic-with-custom-hooks)
:::

## Hoks basicos
- Los hooks básicos son los más comunes y esenciales para construir aplicaciones en React.



### useState
- Los componentes a menudo necesitan cambiar lo que se muestra en pantalla como resultado de una interacción. Escribir dentro de un formulario debería actualizar el campo de texto, hacer clic en «siguiente» en un carrusel de imágenes debería cambiar la imagen que es mostrada; hacer clic en un botón para comprar un producto debería actualizar el carrito de compras. En los ejemplos anteriores los componentes deben «recordar» cosas: el campo de texto, la imagen actual, el carrito de compras. En React, a este tipo de memoria de los componentes se le conoce como estado.

#### Cuando una variable regular no es suficiente 
- Aquí hay un componente que renderiza una imagen de una escultura. Al hacer clic en el botón «Siguiente», debería mostrarse la siguiente escultura cambiando el índice index a 1, luego a 2, y así sucesivamente. Sin embargo, esto no funcionará (¡puedes intentarlo!):
```js title="data.js"
export const sculptureList = [{
  name: 'Homenaje a la neurocirugía',
  artist: 'Marta Colvin Andrade',
  description: 'Aunque Colvin es predominantemente conocida por temas abstractos que aluden a símbolos prehispánicos, esta gigantesca escultura, un homenaje a la neurocirugía, es una de sus obras de arte público más reconocibles.',
  url: 'https://i.imgur.com/Mx7dA2Y.jpg',
  alt: 'Una estatua de bronce de dos manos cruzadas sosteniendo delicadamente un cerebro humano en la punta de sus dedos.'
}, {
  name: 'Floralis genérica',
  artist: 'Eduardo Catalano',
  description: 'Esta enorme flor plateada (75 pies o 23 m) se encuentra en Buenos Aires. Está diseñado para moverse, cerrando sus pétalos por la tarde o cuando soplan fuertes vientos y abriéndolos por la mañana.',
  url: 'https://i.imgur.com/ZF6s192m.jpg',
  alt: 'Una gigantesca escultura de flor metálica con pétalos reflectantes como espejos y fuertes estambres.'
}, {
  name: 'Presencia eterna',
  artist: 'John Woodrow Wilson',
  description: 'Wilson era conocido por su preocupación por la igualdad, la justicia social, así como por las cualidades esenciales y espirituales de la humanidad. Este bronce masivo (7 pies o 2,13 m) representa lo que él describió como "una presencia negra simbólica infundida con un sentido de humanidad universal"."',
  url: 'https://i.imgur.com/aTtVpES.jpg',
  alt: 'La escultura que representa una cabeza humana parece omnipresente y solemne. Irradia calma y serenidad.'
}, {
  name: 'Moái',
  artist: 'Artista desconocido',
  description: 'Ubicados en la Isla de Pascua, hay 1,000 moái, o estatuas monumentales existentes, creadas por los primeros rapanui , que algunos creen que representan a ancestros deificados.',
  url: 'https://i.imgur.com/RCwLEoQm.jpg',
  alt: 'Tres bustos monumentales de piedra con las cabezas desproporcionadamente grandes con rostros sombríos.'
}, {
  name: 'Nana azul',
  artist: 'Niki de Saint Phalle',
  description: 'Las Nanas son criaturas triunfantes, símbolos de feminidad y maternidad. En un principio, Saint Phalle utilizaba telas y objetos encontrados para las Nanas, y más tarde introdujo el poliéster para conseguir un efecto más vibrante.',
  url: 'https://i.imgur.com/Sd1AgUOm.jpg',
  alt: 'Gran escultura en mosaico de una caprichosa figura femenina bailando con un colorido traje que emana alegría.'
}, {
  name: 'Forma definitiva',
  artist: 'Barbara Hepworth',
  description: 'Esta escultura abstracta de bronce es parte de la serie La Familia del Hombre ubicada en Yorkshire Sculpture Park. Hepworth optó por no crear representaciones literales del mundo, sino que desarrolló formas abstractas inspiradas en personas y paisajes.',
  url: 'https://i.imgur.com/2heNQDcm.jpg',
  alt: 'Una escultura alta formada por tres elementos apilados unos sobre otros que recuerdan una figura humana.'
}, {
  name: 'Cavaliere',
  artist: 'Lamidi Olonade Fakeye',
  description: "Descendiente de cuatro generaciones de talladores de madera, el trabajo de Fakeye combinó temas yoruba tradicionales y contemporáneos.",
  url: 'https://i.imgur.com/wIdGuZwm.png',
  alt: 'Una intrincada escultura de madera de un guerrero con el rostro centrado en un caballo adornado con motivos.'
}, {
  name: 'Grandes barrigas',
  artist: 'Alina Szapocznikow',
  description: "Szapocznikow es conocida por sus esculturas del cuerpo fragmentado como metáfora de la fragilidad y la impermanencia de la juventud y la belleza. Esta escultura representa dos barrigas grandes muy realistas apiladas una encima de otra, cada una de unos cinco pies (1,5 m) de altura.",
  url: 'https://i.imgur.com/AlHTAdDm.jpg',
  alt: 'La escultura recuerda una cascada de pliegues, muy diferente a los vientres de las esculturas clásicas.'
}, {
  name: 'Guerreros de terracota',
  artist: 'Artista desconocido',
  description: 'Los Guerreros de terracota es una colección de esculturas de terracota que representan los ejércitos de Qin Shi Huang, el primer emperador de China. El ejército constaba de más de 8.000 soldados, 130 carros con 520 caballos y 150 caballos de caballería.',
  url: 'https://i.imgur.com/HMFmH6m.jpg',
  alt: '12 esculturas de terracota de guerreros solemnes, cada uno con una expresión facial y una armadura únicas.'
}, {
  name: 'Paisaje lunar',
  artist: 'Louise Nevelson',
  description: 'Nevelson era conocida por recoger objetos de los escombros de la ciudad de Nueva York, que luego ensamblaría en construcciones monumentales. En este, usó partes dispares como un poste de cama, una clava de malabarista y un fragmento de asiento, clavándolos y pegándolos en cajas que reflejan la influencia de la abstracción geométrica del espacio y la forma del cubismo.',
  url: 'https://i.imgur.com/rN7hY6om.jpg',
  alt: 'Una escultura negra mate donde los elementos individuales son inicialmente indistinguibles.'
}, {
  name: 'Aureola',
  artist: 'Ranjani Shettar',
  description: 'Shettar fusiona lo tradicional y lo moderno, lo natural y lo industrial. Su arte se centra en la relación entre el hombre y la naturaleza. Su trabajo fue descrito como convincente tanto en sentido abstracto como figurado, que desafía la gravedad y una "fina síntesis de materiales inverosímiles".',
  url: 'https://i.imgur.com/okTpbHhm.jpg',
  alt: 'Una escultura parecida a un alambre pálido montada en una pared de hormigón y descendiendo al suelo. Parece ligero.'
}, {
  name: 'Hipopótamos',
  artist: 'Zoológico de Taipei',
  description: 'El Zoológico de Taipei encargó una Plaza del Hipopótamo con hipopótamos sumergidos jugando.',
  url: 'https://i.imgur.com/6o5Vuyu.jpg',
  alt: 'Un grupo de esculturas de hipopótamos de bronce que emergen de la acera como si estuvieran nadando.'
}];

```
```js title="App.js"
import { sculptureList } from './data.js';

export default function Gallery() {
  let index = 0;

  function handleClick() {
    index = index + 1;
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick}>
        Siguiente
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        por {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} de {sculptureList.length})
      </h3>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
    </>
  );
}

```
- El handler handleClick está actualizando una variable local, index. Pero dos cosas impiden que ese cambio sea visible:
  1.	Las variables locales no persisten entre renderizaciones: Cuando React renderiza (ya sea por primera vez o debido a un cambio) un componente, lo hace "desde cero". Esto significa que las variables locales (definidas dentro de la función del componente) se vuelven a declarar e inicializar. Por lo tanto, cualquier cambio hecho en esas variables locales se pierde cuando el componente se renderiza nuevamente.
  2.	Los cambios en las variables locales no activarán renderizaciones: React solo vuelve a renderizar un componente cuando detecta un cambio en el estado (useState) o en las props. Si cambias una variable local (como index), React no lo sabe porque las variables locales no tienen un mecanismo que le diga: "Hey, este dato ha cambiado, vuelve a renderizar".
- Para que los cambios puedan ser visibles en el DOM tiene que pasar dos cosas:
  1.	Conservar los datos entre renderizaciones:  Los valores que cambian deben persistir incluso después de que React vuelva a renderizar el componente. Esto se logra utilizando mecanismos como el estado (useState) o un referencia (useRef), ya que las variables locales normales se pierden después de cada renderización.
  2.	Provocar que React renderice de nuevo el componente debido a cambios en estos datos: React necesita ser informado de que algo ha cambiado en los datos para volver a renderizar el componente. Esto ocurre automáticamente cuando actualizas el estado o las props.
- El hook useState ofrece dos cosas fundamentales:
  1.	Una variable de estado: Esta variable almacena los datos que se deben mantener entre renderizaciones del componente. A diferencia de las variables locales, React recuerda el valor de esta variable incluso después de que el componente se vuelva a renderizar, lo que permite que los datos persistan y se mantengan actualizados.
  2.	Una función para actualizar el estado: Esta función (generalmente llamada setEstado) se utiliza para modificar el valor de la variable de estado. Al llamar a esta función, le estás diciendo a React: "actualiza el valor de la variable de estado y renderiza nuevamente el componente para reflejar los cambios en la interfaz de usuario".

#### Agregar una variable de estado
- Para agregar una variable de estado, debemos importar el useState de React al inicio del archivo:
```js 
import { useState } from 'react';
```
- Luego, reemplazamos esta línea:
```js 
let index = 0;
```
- Con:
```js
const [index, setIndex] = useState(0);
```
:::tip Observación
- `index` es una variable de estado y `setIndex` es la función que modifica el estado.
:::

- Así es como funcionan juntos en el handleClick:
```js
function handleClick() {
  setIndex(index + 1);
}

```
- Código Completo:
```js title="App.js"
import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex(index + 1);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick}>
        Siguiente
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        por {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} de {sculptureList.length})
      </h3>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
    </>
  );
}

```
#### Anatomía del useState
- Cuando llamamos al useState, le estamos diciendo a React que debe recordar algo:
```js 
const [index, setIndex] = useState(0);
```
- En este caso, queremos que React recuerde el index.
- El único argumento para useState es el valor inicial de su variable de estado. En este ejemplo, el valor inicial de index se establece en 0 con useState(0).
- Cada vez que el componente se renderiza, el useState devuelve un array que contiene dos valores:
  1.	La variable de estado (index) con el valor que almacenaste.
  2.	La función (setIndex) que puede actualizar la variable de estado y alertar a React para que renderice el componente nuevamente.
- Así es como sucede en acción:
```js
const [index, setIndex] = useState(0);
```
:::tip Flujo
1.	Tu componente se renderiza por primera vez. Debido a que pasamos 0 a useState como valor inicial para index, esto devolverá [0, setIndex]. React recuerda que 0 es el último valor de estado.
2.	Actualizas el estado. Cuando un usuario hace clic en el botón, llama a setIndex(index + 1). index es 0, por lo tanto es setIndex(1). Esto le dice a React que recuerde que index es 1 ahora y ejecuta otro renderizado.
3.	El componente se renderiza por segunda vez. React todavía ve useState(0), pero debido a que React recuerda que estableció index en 1, devuelve [1, setIndex] en su lugar.
4.	¡Y así sucesivamente!
:::

#### Colocar múltiples variables de estado a un componente 
- Podemos tener más de una variable de estado de diferentes tipos en un componente. Este componente tiene dos variables de estado, un index numérico y un showMore booleano que se activa al hacer clic en «Mostrar detalles»:
```js 

import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleNextClick}>
        Siguiente
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        por {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} de {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Ocultar' : 'Mostrar'} detalles
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
    </>
  );
}


```
:::tip Observación
- Es una buena idea tener múltiples variables de estado si no se encuentran relacionadas entre sí, como index y showMore en este ejemplo. Pero si encontramos que a menudo cambiamos dos variables de estado juntas, podría ser mejor combinarlas en una sola. Por ejemplo, si tenemos un formulario con muchos campos, es más conveniente tener una única variable de estado que contenga un objeto que una variable de estado por campo.
:::

#### ¿Cómo sabe React qué estado devolver? 
- Es posible que hayas notado que la llamada a useState no recibe ninguna información sobre a qué variable de estado se refiere. No hay un «identificador» que se pase a useState, entonces, ¿cómo sabe cuál de las variables de estado debería devolver? ¿Se basa en algún tipo de magia para esto? La respuesta es no.
- Los Hooks necesitan que las llamadas a ellos se realicen siempre en el mismo orden cada vez que un componente se renderiza. Esto es esencial porque React usa este orden para vincular cada variable de estado con su correspondiente función que modifica el estado.
- Para que esto funcione correctamente, debemos cumplir una regla esencial:
  - Llamar a los Hooks únicamente en el nivel superior del componente o de funciones personalizadas de Hooks.
- Este [complemento para el linter](https://www.npmjs.com/package/eslint-plugin-react-hooks) detecta la mayoría de los errores.
- Internamente, React mantiene un array de arrays, donde cada uno contiene:
  -	Índice 0: La variable de estado.
  -	Índice 1: La función que modifica ese estado.
- En otras palabras, cada array dentro de este array contiene la información relacionada con un estado en particular.
- React almacena un “numero” llamado índice interno (que por defecto es 0 antes de renderizar el componente) para saber qué estado debe devolver al llamar a useState().
- Ejemplo:
```js 
import React, { useState } from 'react';

function MiComponente() {
  // Primer estado: contador
  const [contador, setContador] = useState(0);

  // Segundo estado: nombre
  const [nombre, setNombre] = useState("Juan");

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar Contador</button>
      <p>Nombre: {nombre}</p>
      <button onClick={() => setNombre("Maria")}>Cambiar Nombre</button>
    </div>
  );
}

```
- Internamente, React mantiene algo similar a este array de arrays (lo llamaremos arrayReact para identificarlo):
```js 
const arrayReact = [
  [0 , setContador],  // Primer par (índice 0: variable de estado, índice 1: función)
  ["Juan", setNombre],      // Segundo par (índice 0: variable de estado, índice 1: función)
];

```
- Ahora, cuando haces clic en el botón "Incrementar Contador", se llama a setContador(contador + 1):
  1.	React llama a setContador(1), lo que cambia el valor de contador a 1.
  2.	React vuelve a renderizar el componente, y ahora, el array de arrays interno se actualiza manteniendo el mismo orden de elementos:
```js
[
  [1, setContador],  // Contador actualizado a 1, con la función setContador
  ["Juan", setNombre], // Nombre sigue siendo "Juan", con la función setNombre
]


```
##### ¿Como detecta el orden?
- Al renderizarse un componente por primera vez o por una actualización, el valor del índice interno es 0 y por cada llamada a useState() aumenta en 1.
```js
const [contador, setContador] = useState(0); : Devuelve el arrayReact[0] 
const [nombre, setNombre] = useState("Juan"); :   Devuelve el arrayReact[1]  
```
- Al renderizarse el componente nuevamente, React sigue el mismo orden para asociar las variables de estado con sus funciones. El índice de la primera llamada a useState es 0, y el de la segunda llamada es 1. De esta manera, React asegura que cada estado se vincule correctamente con su función correspondiente.
- Lo puedes entender con este ejemplo que nos puede llegar a dar una idea de cómo funciona:

```html title="Index.html"

<button id="nextButton">
  Siguiente
</button>
<h3 id="header"></h3>
<button id="moreButton"></button>
<p id="description"></p>
<img id="image">

<style>
* { box-sizing: border-box; }
body { font-family: sans-serif; margin: 20px; padding: 0; }
button { display: block; margin-bottom: 10px; }
</style>
```

```js title="Index.js"
let componentHooks = [];
let currentHookIndex = 0;

// Cómo funciona useState dentro de React (simplificado).
function useState(initialState) {
  let pair = componentHooks[currentHookIndex];
  if (pair) {
    // Este no es el primer render,
    // entonces el par de estados ya existe.
    // Devuélvelo y prepárate para la próxima llamada del Hook.
    currentHookIndex++;
    return pair;
  }

  // Esta es la primera vez que estamos renderizando,
  // así que crea un array de dos posiciones y guárdalo.
  pair = [initialState, setState];

  function setState(nextState) {
    // Cuando el usuario solicita un cambio de estado,
    // guarda el nuevo valor en el par.
    pair[0] = nextState;
    updateDOM();
  }

  // Guarda el par para futuros renderizados
  // y se prepara para la siguiente llamada del Hook.
  componentHooks[currentHookIndex] = pair;
  currentHookIndex++;
  return pair;
}

function Gallery() {
  // Cada llamada a useState() devolverá el siguiente par.
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  // Este ejemplo no usa React, entonces
  // devuelve un objeto como resultado en lugar de JSX.
  return {
    onNextClick: handleNextClick,
    onMoreClick: handleMoreClick,
    header: `${sculpture.name} por ${sculpture.artist}`,
    counter: `${index + 1} of ${sculptureList.length}`,
    more: `${showMore ? 'Ocultar' : 'Mostrar'} detalles`,
    description: showMore ? sculpture.description : null,
    imageSrc: sculpture.url,
    imageAlt: sculpture.alt
  };
}

function updateDOM() {
  // Reinicia el índice del Hook actual
  // antes de renderizar el componente.
  currentHookIndex = 0;
  let output = Gallery();

  // Actualiza el DOM para que coincida con el resultado.
  // Esta es la parte que React hace por ti.
  nextButton.onclick = output.onNextClick;
  header.textContent = output.header;
  moreButton.onclick = output.onMoreClick;
  moreButton.textContent = output.more;
  image.src = output.imageSrc;
  image.alt = output.imageAlt;
  if (output.description !== null) {
    description.textContent = output.description;
    description.style.display = '';
  } else {
    description.style.display = 'none';
  }
}

let nextButton = document.getElementById('nextButton');
let header = document.getElementById('header');
let moreButton = document.getElementById('moreButton');
let description = document.getElementById('description');
let image = document.getElementById('image');
export const sculptureList = [{
  name: 'Homenaje a la neurocirugía',
  artist: 'Marta Colvin Andrade',
  description: 'Aunque Colvin es predominantemente conocida por temas abstractos que aluden a símbolos prehispánicos, esta gigantesca escultura, un homenaje a la neurocirugía, es una de sus obras de arte público más reconocibles.',
  url: 'https://i.imgur.com/Mx7dA2Y.jpg',
  alt: 'Una estatua de bronce de dos manos cruzadas sosteniendo delicadamente un cerebro humano en la punta de sus dedos.'
}, {
  name: 'Floralis genérica',
  artist: 'Eduardo Catalano',
  description: 'Esta enorme flor plateada (75 pies o 23 m) se encuentra en Buenos Aires. Está diseñado para moverse, cerrando sus pétalos por la tarde o cuando soplan fuertes vientos y abriéndolos por la mañana.',
  url: 'https://i.imgur.com/ZF6s192m.jpg',
  alt: 'Una gigantesca escultura de flor metálica con pétalos reflectantes como espejos y fuertes estambres.'
}, {
  name: 'Presencia eterna',
  artist: 'John Woodrow Wilson',
  description: 'Wilson era conocido por su preocupación por la igualdad, la justicia social, así como por las cualidades esenciales y espirituales de la humanidad. Este bronce masivo (7 pies o 2,13 m) representa lo que él describió como "una presencia negra simbólica infundida con un sentido de humanidad universal"."',
  url: 'https://i.imgur.com/aTtVpES.jpg',
  alt: 'La escultura que representa una cabeza humana parece omnipresente y solemne. Irradia calma y serenidad.'
}, {
  name: 'Moái',
  artist: 'Artista desconocido',
  description: 'Ubicados en la Isla de Pascua, hay 1,000 moái, o estatuas monumentales existentes, creadas por los primeros rapanui , que algunos creen que representan a ancestros deificados.',
  url: 'https://i.imgur.com/RCwLEoQm.jpg',
  alt: 'Tres bustos monumentales de piedra con las cabezas desproporcionadamente grandes con rostros sombríos.'
}, {
  name: 'Nana azul',
  artist: 'Niki de Saint Phalle',
  description: 'Las Nanas son criaturas triunfantes, símbolos de feminidad y maternidad. En un principio, Saint Phalle utilizaba telas y objetos encontrados para las Nanas, y más tarde introdujo el poliéster para conseguir un efecto más vibrante.',
  url: 'https://i.imgur.com/Sd1AgUOm.jpg',
  alt: 'Gran escultura en mosaico de una caprichosa figura femenina bailando con un colorido traje que emana alegría.'
}, {
  name: 'Forma definitiva',
  artist: 'Barbara Hepworth',
  description: 'Esta escultura abstracta de bronce es parte de la serie La Familia del Hombre ubicada en Yorkshire Sculpture Park. Hepworth optó por no crear representaciones literales del mundo, sino que desarrolló formas abstractas inspiradas en personas y paisajes.',
  url: 'https://i.imgur.com/2heNQDcm.jpg',
  alt: 'Una escultura alta formada por tres elementos apilados unos sobre otros que recuerdan una figura humana.'
}, {
  name: 'Cavaliere',
  artist: 'Lamidi Olonade Fakeye',
  description: "Descendiente de cuatro generaciones de talladores de madera, el trabajo de Fakeye combinó temas yoruba tradicionales y contemporáneos.",
  url: 'https://i.imgur.com/wIdGuZwm.png',
  alt: 'Una intrincada escultura de madera de un guerrero con el rostro centrado en un caballo adornado con motivos.'
}, {
  name: 'Grandes barrigas',
  artist: 'Alina Szapocznikow',
  description: "Szapocznikow es conocida por sus esculturas del cuerpo fragmentado como metáfora de la fragilidad y la impermanencia de la juventud y la belleza. Esta escultura representa dos barrigas grandes muy realistas apiladas una encima de otra, cada una de unos cinco pies (1,5 m) de altura.",
  url: 'https://i.imgur.com/AlHTAdDm.jpg',
  alt: 'La escultura recuerda una cascada de pliegues, muy diferente a los vientres de las esculturas clásicas.'
}, {
  name: 'Guerreros de terracota',
  artist: 'Artista desconocido',
  description: 'Los Guerreros de terracota es una colección de esculturas de terracota que representan los ejércitos de Qin Shi Huang, el primer emperador de China. El ejército constaba de más de 8.000 soldados, 130 carros con 520 caballos y 150 caballos de caballería.',
  url: 'https://i.imgur.com/HMFmH6m.jpg',
  alt: '12 esculturas de terracota de guerreros solemnes, cada uno con una expresión facial y una armadura únicas.'
}, {
  name: 'Paisaje lunar',
  artist: 'Louise Nevelson',
  description: 'Nevelson era conocida por recoger objetos de los escombros de la ciudad de Nueva York, que luego ensamblaría en construcciones monumentales. En este, usó partes dispares como un poste de cama, una clava de malabarista y un fragmento de asiento, clavándolos y pegándolos en cajas que reflejan la influencia de la abstracción geométrica del espacio y la forma del cubismo.',
  url: 'https://i.imgur.com/rN7hY6om.jpg',
  alt: 'Una escultura negra mate donde los elementos individuales son inicialmente indistinguibles.'
}, {
  name: 'Aureola',
  artist: 'Ranjani Shettar',
  description: 'Shettar fusiona lo tradicional y lo moderno, lo natural y lo industrial. Su arte se centra en la relación entre el hombre y la naturaleza. Su trabajo fue descrito como convincente tanto en sentido abstracto como figurado, que desafía la gravedad y una "fina síntesis de materiales inverosímiles".',
  url: 'https://i.imgur.com/okTpbHhm.jpg',
  alt: 'Una escultura parecida a un alambre pálido montada en una pared de hormigón y descendiendo al suelo. Parece ligero.'
}, {
  name: 'Hipopótamos',
  artist: 'Zoológico de Taipei',
  description: 'El Zoológico de Taipei encargó una Plaza del Hipopótamo con hipopótamos sumergidos jugando.',
  url: 'https://i.imgur.com/6o5Vuyu.jpg',
  alt: 'Un grupo de esculturas de hipopótamos de bronce que emergen de la acera como si estuvieran nadando.'
}];

// Hacemos que la interfaz de usuario coincida con el estado inicial..
updateDOM();

```
#### El estado es aislado y privado
- El estado es único para cada instancia del componente. Es decir, si tienes el mismo componente varias veces en la pantalla, cada uno tendrá su propio estado independiente.
##### Ejemplo
- Imagina que tienes un contador que puedes aumentar al hacer clic en un botón:
```js
function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}
```
- Si colocas dos de estos contadores en la pantalla, como aquí:
```js
function App() {
  return (
    <div>
      <Contador />
      <Contador />
    </div>
  );
}

```
:::tip Observación
- Cada contador tiene su propio valor de estado.
-	Si haces clic en el primer contador, solo cambiará el valor de ese contador.
-	Si haces clic en el segundo contador, solo cambiará el valor del segundo contador.
- Aunque ambos contadores hacen lo mismo (incrementar un número), no se afectan entre sí. Cada uno tiene su propio estado aislado, lo que significa que lo que pase en uno no afecta al otro.
- En resumen: cada vez que renderizas el mismo componente, React guarda un estado independiente para cada uno. Si tienes 10 contadores en la pantalla, cada uno será independiente y sus cambios no afectarán a los demás.
- Esto es lo que hace que el estado sea diferente de las variables locales. 
- A diferencia de las props, el estado es privado. El componente padre no puede modificarlo directamente. Esto permite agregar o eliminar el estado en cualquier componente sin afectar a los demás.
- Puedes leer más sobre este mecanismo en [React Hooks: No es magia, sólo son Arrays](https://medium.com/@ryardley/react-hooks-not-magic-just-arrays-cd4f1857236e).


:::
#### Referencia
- En resumen, useState() te permite crear una variable de estado.
- La sintaxis es la siguiente:
```js
useState(initialState)
```
:::tip Parámetro
-	initialState: El valor que deseas que tenga la variable de estado inicialmente. Puede ser un valor de cualquier tipo, pero hay un comportamiento especial para las funciones. Este argumento solo se tiene en cuenta en el primer renderizado y se ignora en los otros (actualizaciones).
-	Si pasa una función como initialState, se tratará como una función inicializadora. Debe ser pura, no debe aceptar argumentos y debe devolver un valor de cualquier tipo. React llamará a tu función de inicialización al inicializar el componente y almacenará el valor que devuelve en la variable de estado.
:::

:::tip Retorno
- useState devuelve un array con exactamente dos valores:
  1.	Una variable de estado. Durante el primer renderizado, tendrá el  valor de  initialState.
  2.	La función set que te permite actualizar la variable de estado y desencadenar un nuevo renderizado.
:::

:::warning
- En Modo estricto, React llamará a tu función de inicialización dos veces para a encontrar problemas de rendimiento. Este es un comportamiento exclusivo de desarrollo y no ocurre en producción. Si tu función de inicialización es pura (como debería ser), esto no debería afectar la lógica de tu componente. 
:::

#### La función set(nuevovalor)
- La función set(nuevoValor) devuelta por useState te permite actualizar la variable de estado con un nuevo valor y desencadenar un nuevo renderizado. Puedes pasar el valor directamente, o una función que lo calcule a partir del valor anterior:
```js
const [name, setName] = useState('Edward');

function handleClick() {
  setName('Taylor');
  setAge(a => a + 1);
  // ...
}

```
:::tip Parámetros 
-	NuevoValor: El valor que deseas que tenga la variable de estado. Puede ser un valor de cualquier tipo, pero hay un comportamiento especial para las funciones.
-	Si pasas una función como NuevoValor, se tratará como una función de actualización. Debe ser pura, debe tener un parámetro que contiene el valor anterior de la variable de estado y debe devolver el nuevo valor. 
:::

#### React pone la función de actualización en una "cola"
- Cuando llamas a la función setEstado para actualizar el estado, React no actualiza inmediatamente la variable de estado. En su lugar:
  -	Guarda tu solicitud de actualización en una lista (la "cola").
  -	Esa lista se procesa más tarde, antes de que React vuelva a dibujar (renderizar) la pantalla.
- Por ejemplo:
```js
setCount(c => c + 1); // React guarda esta función en una lista
setCount(c => c + 2); // Guarda esta otra función en la misma lista

```
- React espera hasta el próximo "renderizado"
- React no cambia el estado de inmediato porque podría haber otras actualizaciones pendientes. Así que:
  -	Espera hasta que sea el momento de volver a "dibujar" tu componente.
  -	En ese momento, React procesa todas las actualizaciones guardadas en la cola.
- React aplica las actualizaciones, una por una.
- Cuando React procesa la cola:
  -	Toma el estado actual.
  -	Aplica todas las funciones de actualización que guardaste en la cola, una tras otra.

##### Ejemplo
```js
const [count, setCount] = useState(0);

function handleClick() {
  setCount(c => c + 1); // Suma 1 al estado actual
  setCount(c => c + 2); // Luego suma 2 al estado actualizado
}

```
:::tip Observación
-  React guarda ambas funciones en la cola.
-  Cuando procesa la cola:
    -	La primera función suma 1 al estado actual: 0 + 1 = 1.
    -	La segunda función suma 2 al estado actualizado: 1 + 2 = 3.
- Resultado final: count será 3.
:::

##### En resumen:
1.	Cada vez que llamas a setEstado, React no cambia el estado inmediatamente; lo guarda en una lista (cola).
2.	Antes del próximo renderizado, React procesa todas las actualizaciones en la cola.
3.	Esto asegura que el estado siempre se actualice correctamente, incluso si hay varias actualizaciones al mismo tiempo.
4. Las funciones set no devuelve ningún valor.


:::warning
-	La función set solo actualiza la variable de estado para el próximo renderizado. Si lees la variable de estado después de llamar a la función set, seguirás obteniendo el mismo valor.
-	Si el nuevo valor que proporcionas es idéntico al estado actual, según lo determinado por un Object.is, React omitirá volver a renderizar el componente y sus hijos. Esta es una optimización. En algunos casos, React puede necesitar ejecutar la función del componente padre para verificar si hubo algún cambio, pero no debería afectar tu código.
-	React actualiza la pantalla después de que todos los controladores de eventos (Handler) se hayan ejecutado y hayan llamado a sus funciones set. Esto evita múltiples renderizados durante un solo evento. En el raro caso de que necesite forzar a React a actualizar la pantalla antes, por ejemplo, para acceder al DOM, puedes usar flushSync.
-	La función set siempre es la misma función durante la vida del componente, no importa cuántas veces se renderice. Por eso, muchas veces puedes omitirla de la lista de dependencias en los efectos (useEffect). Sin embargo, si decides incluirla, no causará que el efecto se vuelva a ejecutar. Si el linter (herramienta de análisis de código) te permite omitir una dependencia sin generar errores, significa que es seguro hacerlo.
:::

:::tip
- Llamar a la función set mientras se está renderizando un componente solo es válido si la llamada ocurre dentro de ese mismo componente. Cuando esto sucede:
  -	React descarta el renderizado actual (ignora su salida).
  -	React intenta renderizar nuevamente el componente, pero ahora con el nuevo estado que actualizaste.
-	Este comportamiento es poco común y solo deberías usarlo si realmente necesitas guardar información sobre cómo fue el estado o el renderizado anterior.
-	Cuando usas el Modo Estricto en React, este llamará a tu función de actualización dos veces en desarrollo. Esto lo hace para ayudarte a detectar problemas, como si tu función no es "pura".
:::


#### Ejemplo
##### Contador
- En este ejemplo, la variable contador contiene un número. Al hacer click en el botón lo incrementa:
```js
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Hiciste clic {count} veces
    </button>
  );
}

```
##### Actualización en base al estado anterior
- Supongamos que age es 42. La función handler llama setAge(age + 1) tres veces:
```js
function handleClick() {
  setAge(age + 1); // setAge(42 + 1)
  setAge(age + 1); // setAge(42 + 1)
  setAge(age + 1); // setAge(42 + 1)
}

```
- ¡Sin embargo, después de un click, age solo será 43 en lugar de 45! Esto se debe a que llamar a la función set no actualizará la variable de estado age en el código que ya se está ejecutando. Así que cada llamada setAge(age + 1) se convierte en setAge(43).
- Para resolver este problema, puedes pasar una función de actualización a setAge:
```js

function handleClick() {
  setAge(a => a + 1); // setAge(42 => 43)
  setAge(a => a + 1); // setAge(43 => 44)
  setAge(a => a + 1); // setAge(44 => 45)
}

```
#### Actualización de objetos y arrays en UNA VARIABLE DE ESTADO
- Se pueden poner objetos y arrays en la variable de estado. En React, el estado se considera de solo lectura, por lo que debes reemplazar en lugar de mutar tus objetos existentes. Por ejemplo, si tienes un objeto formulario en una variable de estado, no lo actualices así:
```js
// 🚩 No cambies un objeto en un estado como este:
form.firstName = 'Taylor';

```
- En su lugar, reemplaza todo el objeto creando uno nuevo:
```js
// ✅ Reemplaza el estado con un nuevo objeto
setForm({
  ...form,
  firstName: 'Taylor'
});

```
#### Evitar recrear el estado inicial
- React usa el valor inicial una vez y lo ignora en los próximos renderizados:
```js
function TodoList() {
  const [todos, setTodos] = useState(createInitialTodos());
  // ...

```
- Aunque el resultado de createInitialTodos() solo se usa para el renderizado inicial, todavía está llamando a esta función en cada renderizado. Esto puede ser un desperdicio si se trata de crear arrays grandes o realizar cálculos costosos.
- Para resolver esto, puedes pasarlo como una función inicializadora a useState en su lugar:
```js
function TodoList() {
  const [todos, setTodos] = useState(createInitialTodos);
  // ...

```
:::tip Observación
- Observa que estás pasando createInitialTodos, que es la función misma, y no createInitialTodos(), que es el resultado de llamarla. Si pasas una función a useState, React solo la llamará durante la inicialización.
:::

#### Reinicio del estado con una key 
- Por lo general, es posible que encuentre el atributo key al renderizar listas. Sin embargo, también tiene otro propósito.
- Puede reiniciar el estado de un componente modificando la key que tiene ese componente. En este ejemplo, el botón Reiniciar cambia la variable de estado versión, que pasamos como una key al Formulario. Cuando la key cambia, React vuelve a crear el componente Formulario (y todos sus hijos) desde cero, por lo que su estado se reinicia.
- Ejemplo:
```js
import { useState } from 'react';

export default function App() {
  const [version, setVersion] = useState(0);

  function handleReset() {
    setVersion(version + 1);
  }

  return (
    <>
      <button onClick={handleReset}>Reiniciar</button>
      <Form key={version} />
    </>
  );
}

function Form() {
  const [name, setName] = useState('Taylor');

  return (
    <>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <p>Hola, {name}.</p>
    </>
  );
}


```
#### Almacenamiento de información de renderizados anteriores 
- Normalmente, actualizas las variables de estado dentro de controladores de eventos (handlers), como cuando un usuario hace clic en un botón o escribe en un campo.
- Sin embargo, en situaciones poco comunes, podrías necesitar actualizar el estado como respuesta a un renderizado. Por ejemplo:
  -	Si una propiedad (prop) cambia, podrías querer ajustar el estado para reflejar ese cambio.
- En la mayoría de los casos, no lo necesitas:
  - Evita estados redundantes:
      - Si puedes calcular el valor que necesitas a partir de las props actuales o de otro estado que ya tienes, no hace falta que guardes un nuevo estado para ese valor.
      - Ejemplo: Si el estado depende de algo que ya tienes (como una prop), simplemente derívalo de ahí en vez de guardarlo por separado.
  - Optimización con useMemo:
      - Si te preocupa que el cálculo se haga demasiadas veces (por ejemplo, cada vez que el componente se renderiza), puedes usar el Hook useMemo para memorizar el resultado y evitar cálculos innecesarios.
  - Reiniciar el estado del árbol de componentes:
      - Si quieres reiniciar el estado de todo el árbol de componentes, en lugar de actualizar el estado manualmente, puedes usar un key diferente en el componente para forzar su reinicio. Esto hace que React "destruya" el componente actual y cree uno nuevo con el nuevo estado.
  - Actualizar el estado en los controladores de eventos:
      - Siempre que sea posible, es mejor actualizar el estado directamente desde los controladores de eventos. Esto simplifica las cosas y mantiene el flujo de datos más claro.
- En el raro caso de que ninguno de estos se aplique, hay un patrón que puedes usar para actualizar el estado en función de las propiedades (props) del componente, llamando a una función set mientras tu componente se está renderizando.
- Aquí hay un ejemplo. Este componente CountLabel muestra la propiedad count que se le pasó:
```js
export default function CountLabel({ count }) {
  return <h1>{count}</h1>
}

```
- Digamos que quieres mostrar si el contador ha aumentado o disminuido desde el último cambio. La prop count no te lo dice, — necesitas saber su valor anterior. Agrega la variable de estado prevCount para almacenar el valor anterior. Agrega otra variable de estado llamada trend para determinar si el conteo ha aumentado o disminuido. Compara prevCount con count y, si no son iguales, actualiza tanto prevCount como trend. Ahora puedes mostrar  el  conteo actual y ha cambiado desde el último renderizado.
- Ejemplo:
```js title="CountLabel.js"

import { useState } from 'react';

export default function CountLabel({ count }) {
  const [prevCount, setPrevCount] = useState(count);
  const [trend, setTrend] = useState(null);
  if (prevCount !== count) {
    setPrevCount(count);
    setTrend(count > prevCount ? 'aumenta' : 'disminuye');
  }
  return (
    <>
      <h1>{count}</h1>
      {trend && <p>El contador {trend}</p>}
    </>
  );
}

```
```js title="App.js"
import { useState } from 'react';
import CountLabel from './CountLabel.js';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Aumentar
      </button>
      <button onClick={() => setCount(count - 1)}>
        Disminuir
      </button>
      <CountLabel count={count} />
    </>
  );
}

```
- Ten en cuenta que si llamas a una función set durante el renderizado, debe estar dentro de una condición como prevCount !== count, y debe haber una llamada como setPrevCount(count) dentro de la condición. De lo contrario, tu componente se volvería a procesar en un bucle hasta que se bloquee. Además, solo puedes actualizar el estado del componente actual  de esta manera. Tu llamada set aún debería actualizar el estado sin mutación — este caso especial no significa que puedas romper otras reglas de funciones puras.
- Llamar a la función set de otro componente durante el renderizado es un error.
- Este patrón puede ser difícil de entender y, por lo general, es mejor evitarlo. Sin embargo, es mejor que actualizar el estado en un Efecto. Cuando llamas a la función set durante el renderizado, React volverá a renderizar ese componente inmediatamente después de que tu componente salga con una declaración return y antes de renderizar los hijos. De esta manera, sus hijos no necesitan renderizarse dos veces. El resto de la función de tu componente aún se ejecutará (y el resultado se descartará), pero si tu condición está por debajo de todas las llamadas a Hooks, puedes agregar un return; anticipado dentro de él para reiniciar el renderizado antes.
- Si llamas a la función set dentro de la función del componente (durante el renderizado), React hace lo siguiente:
  1.	Vuelve a renderizar el componente inmediatamente después de que se ejecute lo que contiene el return de tu componente.
  2.	Este nuevo renderizado ocurre antes de que React renderice los hijos del componente. Esto se hace para evitar que los hijos se rendericen dos veces innecesariamente.
- Aunque la función del componente se ejecuta y la llamada a set provoca un nuevo renderizado, React descarta el resultado de un renderizado interrumpido. Es decir, React no va a mostrar lo que se renderizó antes del cambio de estado.
- Si tienes una condición que dispara la llamada a set y esa condición está después de las llamadas a los Hooks (como useState o useEffect), puedes agregar un return anticipado dentro de la condición para reiniciar el renderizado antes de que React siga ejecutando el código. Esto evita que se ejecute el resto de la función y ayuda a evitar renderizados innecesarios.
- Ejemplo:
```js
function Counter() {
  const [count, setCount] = useState(0);

  if (count < 5) {
    setCount(count + 1);  // Esto provocará un renderizado adicional
    return;  // Evita que el resto del componente se ejecute
  }

  return <div>Contador: {count}</div>;
}

```
:::tip Observación
- En este ejemplo:
  -	Si el count es menor que 5, se llama a setCount y luego se hace un return para evitar que el resto del componente se ejecute.
  -	Esto reinicia el renderizado y previene que React ejecute el resto del código innecesario.

:::

:::tip Documentación
- [Usando el Hook de estado (antiguo)](https://es.legacy.reactjs.org/docs/hooks-state.html)
- [El estado: la memoria de un componente](https://es.react.dev/learn/state-a-components-memory)
- [Elección de la estructura del estado](https://es.react.dev/learn/choosing-the-state-structure)
- [Compartir estado entre componentes](https://es.react.dev/learn/sharing-state-between-components)
- [useState](https://es.react.dev/reference/react/useState)
- [Actualizar objetos en el estado](https://es.react.dev/learn/updating-objects-in-state)

:::

### useEffect
- Es un hook en React que permite realizar efectos secundarios en componentes funcionales. 
- Los efectos secundarios (o side effects en inglés) se refieren a cualquier operación que afecta a algo que se encuentra fuera de la función o componente, o que depende de algo que no se puede garantizar que sea constante entre las ejecuciones. En el contexto de React, los efectos secundarios son aquellas acciones que ocurren cuando un componente se muestra en el DOM (confirmación) y que afectan o interactúan con algún sistema o elemento que no es accesible durante el renderizado.

:::tip Funciones puras (Pureza)
- Cuando hablamos de pureza en el contexto de funciones, nos referimos a funciones puras, que son aquellas que cumplen con dos condiciones principales:
  -  Determinismo: Una función pura siempre produce la misma salida para la misma entrada. Esto significa que no importa cuántas veces llames a la función con los mismos argumentos, el resultado será siempre el mismo.
  -  Sin efectos secundarios: Una función pura no modifica ningún estado fuera de su propio alcance ni depende de ningún estado que no esté explícitamente pasado como argumento. Es decir, no afecta a variables globales, no realiza operaciones de entrada/salida (interacción con sistemas externos para recibir o enviar datos como solicitudes a APIs) y no cambia datos en otros lugares.
- En el contexto de React, una operación de entrada/salida (I/O) se refiere a acciones que interactúan con sistemas externos o elementos que no son accesibles durante el renderizado.  Por lo tanto, manipular DOM se incluye en las operaciones de Entrada/Salida ya que no se pueden acceder desde el renderizado.
- En el contexto de React:
  -	Renderizado puro: Cuando React renderiza un componente, espera que el resultado (la salida) sea predecible y no cambie en función de algo que no esté en el estado del componente o en sus props. Si una función de renderizado(componente) tuviera efectos secundarios (como hacer una solicitud a una API), no sería pura, ya que el resultado dependería de algo externo y podría cambiar en cada renderizado.
  -	Uso de useEffect: Aquí es donde entra en juego el hook useEffect. Permite realizar efectos secundarios sin romper la pureza del renderizado. Al mover las operaciones que causan efectos secundarios a useEffect, React se asegura de que el renderizado del componente siga siendo predecible y se mantenga separado de las operaciones que tienen efectos secundarios

:::

:::tip Componentes funcionales
- Son componentes que se crean como funciones y no como clase.

:::
- useEffect es un Hook de React que te permite sincronizar un componente con un sistema externo.
- Esta sincronización se refiere a la capacidad de un componente para interactuar con un sistema externo con el fin de crear/obtener/editar/eliminar datos que se encuentran fuera del alcance del componente y que este no puede controlar.
- Los eventos contienen [efectos secundarios (cambia el estado del programa)](https://es.wikipedia.org/wiki/Efecto_secundario_%28inform%C3%A1tica%29)
   que son provocados por acciones específicas del usuario. A veces, esto no es suficiente. Considera un componente ChatRoom que debe conectarse al servidor del chat cada vez que esté visible en pantalla. Conectarse al servidor no es algo puro (es un efecto secundario), por lo que no puede suceder durante el renderizado. Sin embargo, no hay un evento particular como un clic que haga que se conecte al servidor del chat.
- Los Efectos te permiten especificar efectos secundarios que son causados por el renderizado en sí mismo, en lugar de por un evento particular. Enviar un mensaje en el chat es un evento porque es directamente causado por el usuario haciendo clic en un botón. Sin embargo, establecer una conexión a un servidor es un Efecto porque debería suceder sin importar qué interacción causó que el componente apareciera. Los efectos se ejecutan al final de la confirmación (es cuando se renderiza en el DOM), después de que la pantalla se actualice. Este es un buen momento para sincronizar los componentes de React con algún sistema externo (como una red o una biblioteca de terceros).

:::warning
- No te apresures en añadir Efectos en tus componentes. Ten en cuenta que los Efectos se usan típicamente para «salir» de tu código React y interactuar con algún sistema externo. Esto incluye APIs del navegador, widgets de terceros, red, etc. Si tu Efecto depende del estado de otro componente, quizás no necesites un Efecto.
- Aquí, sistema externo significa cualquier pieza de código que no está controlado por React, como:
  - Un temporizador gestionado con setInterval() y clearInterval().
  - Una suscripción de eventos usando addEventListener() y removeEventListener().
  - Una biblioteca de animación de terceros con una API como animation.start() y animation.reset().
- Si no estas conectado a ningún sistema externo, probablemente no necesites un efecto.
:::
#### Cómo escribir un efecto
- Para escribir un Efecto, sigue los siguientes pasos:
  1.	Declara un Efecto. Por defecto, tu Efecto se ejecutará después de cada confirmación (cada vez que se renderice en el DOM).
  2.	Define las dependencias del Efecto. La mayoría de los Efectos solo deben volver a ejecutarse cuando sea necesario en lugar de hacerlo después de cada renderizado. Por ejemplo, una animación de desvanecimiento solo debe desencadenarse cuando aparece el componente. La conexión y desconexión a una sala de chat solo debe suceder cuando el componente aparece y desaparece, o cuando cambia la sala de chat. Aprenderás cómo controlar esto especificando las dependencias.
  3.	Añade limpieza si es necesario. Algunos Efectos necesitan especificar cómo detener, deshacer, o limpiar cualquier cosa que estaban haciendo. Por ejemplo, «conectar» necesita «desconectar», «suscribirse» necesita «anular suscripción» y «buscar» necesita «cancelar» o «ignorar». Aprenderás cómo hacer esto devolviendo una función de limpieza.

#### 1- Declarar un efecto
```typescript
import { useEffect } from 'react'

import './App.css'

function App() : JSX.Element {
   
  useEffect( () => {
     console.log('El código aquí se ejecutará después de *cada* renderizado')
  })

  return (
    <>
      <p>Es un componente</p>
       
    </>
  )
}

export default App



```
:::tip Observación
- Para declarar un efecto en tu componente, importa el Hook useEffect desde React:
- UseEffect() como primer parámetro recibe una función/callback que contiene el código que se va a ejecutar.
- Por defecto la función se ejecuta cuando el componente se renderiza/aparece en el DOM.
:::


- Ahora considera un componente de React &lt;VideoPlayer>. Sería bueno controlar si está reproduciéndose o en pausa, enviándole la prop isPlaying.
- Al usar una referencia con useRef() puede que sientas la tentación de intentar llamar a play() o pause() durante el renderizado, pero eso no es correcto:

```typescript
import { useState, useRef } from 'react';

function VideoPlayer({ src, isPlaying } : {src:string , isPlaying : boolean}) {
  const ref = useRef(null);

  if (isPlaying) {
    ref.current.play();  // Llamar a estas funciones mientras se renderiza no está permitido.
  } else {
    ref.current.pause(); // Esto también causa error.
  }

  return <video ref={ref} src={src} loop playsInline />;
}

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
  );
}


```
:::tip Observación
- Esto te devuelve: Cannot read properties of null (reading 'pause')
- La razón por la que este código no es correcto es porque intenta hacer algo con el nodo de DOM durante el renderizado. En React, renderizar debe ser una función pura de JSX y no debe contener efectos secundarios como la modificación del DOM.
- "Durante el renderizado" en React es el momento en que React toma el código JSX de cada componente y lo convierte en elementos de React, que son descripciones de elementos HTML. Estos elementos de React son objetos que describen cómo debería verse el componente en la interfaz de usuario.
- Después de crear estos elementos de React, el sistema de React usa un proceso llamado "reconciliación" para compararlos con el DOM real y hacer las actualizaciones necesarias. Así, React actualiza eficientemente el DOM solo en las partes que han cambiado, en lugar de volver a renderizar toda la página.
- Entonces hay dos momentos:
  - Renderizado (o creación del elemento de React): Durante esta fase, React toma el código JSX de un componente y lo convierte en "un elementos de React". Estos son objetos ligeros que describen cómo debería verse el componente en la interfaz, pero en este momento todavía no han sido agregados al DOM real. React utiliza la jerarquia de estas elementos de React para crear un DOM virtual. En resumen, Se crean los elementos de React a partir del JSX, pero no se interactúa con el DOM real.
  - Confirmación (o actualización del DOM): En esta fase, React toma los elementos de React que ha creado (su jerarquia, DOM virtual) y decide qué cambios se deben hacer en el DOM real. Utiliza un proceso de reconciliación para comparar el DOM VIRTUAL con el DOM real. Solo las partes que han cambiado se actualizan en el DOM real, lo que hace que el proceso sea eficiente. En resumen, React aplica los cambios necesarios al DOM para actualizar la interfaz del usuario.
- Además, cuando se llama a VideoPlayer por primera vez, ¡su DOM no existe todavía! No hay un nodo de DOM para llamar a play() o pause(), porque React todavia no agrego ningún elemento al DOM real.
:::

- La solución es envolver el efecto secundario con useEffect:

```typescript
import { useState, useRef, useEffect} from 'react';

function VideoPlayer({ src, isPlaying } : {src:string , isPlaying : boolean}) {
  const ref : React.MutableRefObject<HTMLVideoElement | null> = useRef(null);

  useEffect(() => {
    console.log('Se ejecuto');
    if (isPlaying) {
      ref.current?.play();
    } else {
      ref.current?.pause();
    }
  });

  return <video ref={ref} src={src} loop playsInline />;
}

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
  );
}


```
:::tip Observación
- UseEffect () ejecuta la función/callback que recibe cuando el componente aparece en la pantalla.
- Luego cada vez que se actualiza el componente en la pantalla, se ejecutara la función.
- El callback de useEffect se ejecuta después de que se haya completado el proceso de renderizado y confirmación, lo que significa que el DOM ya está actualizado. Esto es crucial porque asegura que cualquier manipulación del DOM o interacciones con otros sistemas sucedan después de que el componente haya sido agregado o actualizado en la pantalla.
- Ese proceso de renderizado y confirmación, se suele decir “renderizado”.
- En este ejemplo, el «sistema externo» que sincronizaste con el estado de React fue la API browser media. Puedes usar un enfoque similar para envolver código heredado que no es de React (como plugins de jQuery) en componentes declarativos de React.
- Nota que en la práctica, controlar un reproductor de video es mucho más complejo. Llamar a play() puede fallar, el usuario podría reproducir o pausar usando los controles integrados del navegador, etc. Este ejemplo es muy simplificado e incompleto.
:::

#### 2- Dependencias del Efecto
- Por defecto, los Efectos se ejecutan después de cada renderizado. A menudo, esto no es lo que tu busca:	
  -	A veces, es lento. Sincronizar con un sistema externo no siempre es instantáneo, por lo que es posible que desees evitar hacerlo a menos que sea necesario. Por ejemplo, no quieres volver a conectarte al servidor de chat en cada pulsación de tecla.
  -	A veces, está mal. Por ejemplo, no quieres desencadenar una animación de desvanecimiento en un componente en cada pulsación de tecla. La animación solo se debe reproducir cuando el componente aparece por primera vez.
- Para demostrar el problema, aquí está el ejemplo anterior con algunas llamadas console.log y un campo de texto que actualiza el estado del componente padre. Observa cómo escribir provoca que el Efecto se ejecute de nuevo:
```typescript
import { useState, useRef, useEffect} from 'react';

function VideoPlayer({ src, isPlaying } : {src:string , isPlaying : boolean}) {
  const ref : React.MutableRefObject<HTMLVideoElement | null> = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      console.log('Llamando a video.play()');
      ref.current?.play();
    } else {
      console.log('Llamando a video.pause()');
      ref.current?.pause();
    }
  });

  return <video ref={ref} src={src} loop playsInline />;
}

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [text, setText] = useState('');
  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pausa' : 'Reproducir'}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
  );
}


```
:::tip Observación
- El useEffect en el componente VideoPlayer se activa cada vez que ocurre un renderizado del componente, ya sea porque cambian sus propias props o porque un componente padre, como App, se vuelve a renderizar.
- Aquí está la razón específica:
  1.	Cada vez que introduces un valor en el &lt;input>, el estado text se actualiza con setText(e.target.value).
  2.	Esta actualización de estado provoca que App se vuelva a renderizar, ya que React vuelve a ejecutar la función de App para reflejar el cambio en el árbol de componentes.
  3.	Cuando App se renderiza nuevamente, VideoPlayer también se vuelve a renderizar (porque VideoPlayer es un hijo de App).
  4.	Cada vez que VideoPlayer se renderiza, el useEffect en su interior se ejecuta porque, en tu código, no tiene una lista de dependencias. Al no tener dependencias, el efecto se ejecuta en cada renderizado.
- Es importante señalar que React aplica un mecanismo de "reconciliación" para optimizar los renderizados; React solo actualiza las partes del DOM que realmente han cambiado en cada renderizado, en lugar de reconstruir todo el árbol del DOM. Sin embargo, el comportamiento de los hooks como useEffect sigue algunas reglas debido a la forma en que React maneja el re-renderizado de componentes.
- Aquí están los detalles importantes:
  1.	Re-renderizado de componentes: Aunque React solo actualiza el DOM de manera selectiva, el re-renderizado en React significa que la función del componente se ejecuta nuevamente. Así, cualquier actualización de estado en App provoca que React vuelva a ejecutar App, lo que incluye a todos sus componentes hijos (como VideoPlayer), porque React necesita determinar si la salida ha cambiado.
  2.	Ejecuta useEffect en cada renderizado: React ejecuta useEffect cada vez que el componente se renderiza, a menos que se especifique una lista de dependencias. En tu caso, useEffect en VideoPlayer se ejecuta con cada re-renderizado porque no tiene una lista de dependencias, lo que hace que el efecto se ejecute después de cada renderizado, aunque el DOM no se haya modificado visiblemente.
- Entonces, aunque React solo cambia el DOM en lo necesario, useEffect responde a cualquier renderizado del componente a menos que le digas lo contrario mediante dependencias, controlando así cuándo y cómo deben ejecutarse estos efectos.
:::

- Puedes indicarle a React omitir la innecesaria ejecución del Efecto especificando un array de dependencias como segundo argumento en la llamada a useEffect. Empieza añadiendo un array vacío [] en el ejemplo anterior:
```js
  useEffect(() => {
    if (isPlaying) {
      console.log('Llamando a video.play()');
      ref.current?.play();
    } else {
      console.log('Llamando a video.pause()');
      ref.current?.pause();
    }
  } , []);

```
:::tip Observación
- Cuando el segundo parámetro de useEffect es un array vacío ([]), le estás indicando a React que el efecto debe ejecutarse solo una vez, después del primer renderizado del componente, y no debe volver a ejecutarse en los renderizados posteriores, sin importar los cambios de estado o de props en el componente.
- Esto es útil para inicializar alguna funcionalidad que solo debe ejecutarse una vez al montar el componente, como suscribirse a un evento, realizar una llamada de API inicial, configurar un temporizador o cualquier operación que no dependa de actualizaciones futuras en el componente.


:::

- En nuestro código tendremos un error, ya que React se dio cuenta que el “efecto” debería ejecutarse cada vez que cambia “isPlaying” (dependencia) y no tendría sentido hacer que se ejecute solo una vez.
- Por lo tanto, añadiremos en el array de dependencias el isPlaying:
```typescript
  useEffect(() => {
    if (isPlaying) {
      console.log('Llamando a video.play()');
      ref.current?.play();
    } else {
      console.log('Llamando a video.pause()');
      ref.current?.pause();
    }
  } , [isPlaying]);

```

:::tip Observación
- El array que se pasa como segundo parámetro a useEffect es conocido como el array de dependencias. Su función es indicar a React cuándo debe ejecutar el efecto nuevamente.
- Una dependencia es cualquier valor o variable que el efecto necesita "observar" para funcionar correctamente. React vigila los cambios en estos valores y ejecuta el efecto solo cuando estos cambian. Entonces, al definir dependencias en el array, estás especificando explícitamente a React que el efecto solo debe ejecutarse si alguno de esos valores cambia. 
- En este ejemplo:
  - Solo ejecuta el efecto en el primer renderizado y cuando isPlaying cambie: React observará el valor de isPlaying, y si cambia (por ejemplo, de true a false o viceversa), useEffect volverá a ejecutarse. Esto hace que el efecto solo se dispare cuando sea relevante, es decir, cuando el estado isPlaying cambie.
  - Gracias al array de dependencias [isPlaying], React sabe que el efecto no necesita ejecutarse en otros renderizados del componente donde isPlaying no cambia. Esto mejora el rendimiento y evita ejecutar código de reproducción o pausa innecesariamente.
- El array de dependencias puede contener múltiples dependencias. React sólo omitirá la ejecución del Efecto si todas las dependencias que especifiques tienen exactamente los mismos valores que tenían durante el renderizado anterior. React compara los valores de dependencia utilizando la comparación Object.is. 
- Observa que tú no puedes «elegir» las dependencias. Así como en el ejemplo anterior, obtendrás un error de lint si las dependencias que definiste no coinciden con lo que React espera según el código dentro de tu Efecto. Esto ayuda a detectar errores en tu código. Si no deseas que cierto código se vuelva a ejecutar, edita el código del Efecto para no «necesitar» esa dependencia. 
:::


#### 3- Añade limpieza si es necesario
- Considera otro ejemplo. Estás escribiendo un componente ChatRoom que necesita conectarse al servidor del chat cuando aparece. Se te da un método llamado createConnection() que devuelve un objeto con los métodos connect() y disconnect(). ¿Cómo mantienes conectado el componente mientras este se muestra al usuario?
- Simulemos la lógica del método createConnection con este archivo chat.js:
```js
export function createConnection() {
  // Una implementación real se conectaría al servidor
  return {
    connect() {
      console.log('✅ Conectando...');
    },
    disconnect() {
      console.log('❌ Desconectado.');
    }
  };
}


```
- Ahora comenzamos por escribir la lógica dentro del array de dependencia del useEffect() en el componente App:

```js
import { useEffect } from 'react';
import {createConnection} from './chat.js'

export default function ChatRoom() {
  useEffect(() => {
    const connection = createConnection();
    connection.connect();
  }, []);
  return <h1>¡Bienvenido al chat!</h1>;
}

```

- Este efecto solo se ejecuta cuando se monta el componente, entonces podrías pensar que "✅ Conectando..." se imprime una vez en la consola. Sin embargo, si revisas la consola, "✅ Conectando..." se imprime dos veces. ¿Por qué sucede esto?
- Imagina que el componente ChatRoom es parte de una gran aplicación con muchas pantallas diferentes. El usuario inicia su viaje en la página ChatRoom. El componente se monta y llama a connection.connect(). Entonces imagina que el usuario navega hacia otra pantalla, por ejemplo, a la página de Configuración. El componente ChatRoom se desmonta. Finalmente, el usuario hace clic en el botón de atrás y ChatRoom se monta nuevamente. Esto configuraría una segunda conexión ¡Pero la primera conexión nunca fue destruida! A medida que el usuario navega por la aplicación, las conexiones seguirían acumulándose.
- Ver en consola dos veces "✅ Conectando..." te ayuda a notar el problema real: tu código no cierra la conexión cuando el componente se desmonta.
- Para solucionar este problema, devuelve una función de limpieza desde el Efecto:
```js
export default function ChatRoom() {
  useEffect(() => {
    const connection = createConnection();
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, []);

```
:::tip Observación
- La función de limpieza (o cleanup function) en useEffect es una función opcional que React ejecuta cuando el componente se desmonta o antes de que se ejecute nuevamente el efecto debido a cambios en sus dependencias. Su propósito es limpiar recursos o cancelar efectos secundarios creados por useEffect, como eliminar event listeners, detener temporizadores o cancelar suscripciones a datos.
- Dentro del callback de useEffect (), se implementa la lógica del efecto que se ejecutara por cada renderizado, dependencia, etc.
- A su vez el callback puede devolver una función, esta función será la cleanup function que contendrá la lógica para limpiar o cancelar lo que se haya configurado en el efecto.
- Ahora obtendrás tres mensajes en la consola en el modo de desarrollo:
  1.	"✅ Conectando..."
  2.	"❌ Desconectado."
  3.	"✅ Conectando..."
- Este es el comportamiento correcto en modo de desarrollo. Al volver a montar el componente, React verifica que navegar a otro lado y luego volver, no romperá tu código. ¡Desconectar y luego conectar nuevamente es exactamente lo que debería suceder!
- Cuando implementas la limpieza adecuadamente, no debe haber ninguna diferencia visible para el usuario entre ejecutar el Efecto una vez o ejecutarlo, limpiarlo y volver a ejecutarlo ósea que el usuario no debería darse cuenta si el efecto se ejecutó solo una vez o varias veces. Hay llamadas adicionales a connect/disconnect porque React está explorando tu código en busca de errores en desarrollo. Esto es normal, ¡No intentes hacerlo desaparecer!.
- En producción, solo verás "✅ Conectando..." una vez. Volver a montar componentes solo sucede en desarrollo para ayudarte a encontrar Efectos que necesitan limpieza.
- React intencionalmente vuelve a montar tus componentes en desarrollo con el fin de encontrar errores como en el anterior ejemplo.


:::

#### Funciones asincronas
- La función que recibe `useEffect` no puede ser asíncrona (`async`), porque React espera que el return sea una función de cleanup o `undefined`, no una Promise.
- Esto está mal:
```js
useEffect(async () => {
  const res = await fetch("/api/data");
  const data = await res.json();
  console.log(data);
}, []);
```
- Lo ideal y lo más usado es crear una función `async` dentro del efecto.
```js
useEffect(() => {
  const fetchData = async () => {
    const res = await fetch("/api/data");
    const data = await res.json();
    console.log(data);
  };

  fetchData();
    console.log("terminó el effect");
}, []);
```
:::tip Observación
- El `useEffect` no espera a que termine la función async, sino que ejecuta el `console.log` inmediatamente, al mismo tiempo que se ejecuta `fetchData`.
- Dentro de `fetchData`, los `await` sí funcionan, por lo que se espera a que cada instrucción se ejecute.
:::

- La función de limpieza de `useEffect` no puede ser asíncrona (`async`), porque React espera que retorne `void`, no una `Promise`. Esto está mal:
```js
useEffect(() => {
  return async () => {
    await fetch("/api/data"); // ❌ NO permitido
  };
}, []);
}
```
- Si necesitas lógica asíncrona, debe hacerse dentro de una función auxiliar, no en el cleanup:
```js
useEffect(() => {
  const doAsyncCleanup = async () => {
    await fetch("/api/save-state");
  };

  return () => {
    doAsyncCleanup(); // 👈 se llama async pero NO se espera
  };
}, []);
```
:::tip Observación
- El cleanup sigue siendo síncrono.
- La función async se ejecuta “en segundo plano”.
- React no la espera.
:::


:::tip Más información
- [Sincronizar con Efectos](https://es.react.dev/learn/synchronizing-with-effects#challenges)
- [Quizás no necesites un Efecto](https://es.react.dev/learn/you-might-not-need-an-effect)
- [useEffect](https://es.react.dev/reference/react/useEffect)
:::
### useContext
- [Guia](https://flevatti.github.io/documentacion/docs/React/context#usecontext)
## Hooks Adicionales
### useReducer
- [guia](https://flevatti.github.io/documentacion/docs/React/reducer#usereducer-1)
### useCallback
- useCallback es un hook de React que memoriza funciones para evitar que se vuelvan a crear en cada renderizado de un componente, a menos que cambien ciertas dependencias. Esto puede mejorar el rendimiento de la aplicación al evitar que componentes hijos se vuelvan a renderizar innecesariamente cuando una función como prop no ha cambiado.
- Tiene dos parámetros:
  - Primer argumento: La función que queremos memorizar.
  - Segundo argumento: Un array de dependencias. Si alguna de estas dependencias cambia, la función se volverá a crear. Si ninguna cambia, React reutiliza la misma función entre renders.
#### Versión memorizada del callback
- Cuando usas useCallback, React devuelve una versión memorizada de la función. Esto significa que la misma función se reutiliza entre renderizados, a menos que sus dependencias cambien.
- Dependencias: Son los valores que la función usa (por ejemplo, el estado o las props), y React comprueba si hay cambios. Si alguna de esas dependencias cambia, React recrea la función, de lo contrario, reutiliza la versión memorizada.
#### El arreglo de dependencias
- El arreglo de dependencias simplemente le dice a React cuándo debe crear una nueva versión de la función. Si un valor dentro de ese arreglo cambia, React recrea la función.
- Conceptualmente, cada valor que la función utiliza (como el estado o las props) debe aparecer en este arreglo. Si alguna de esas dependencias cambia, la función se recrea.
#### Callback memorizado = Guardado en la memoria
- Cuando decimos que el callback es memorizado, significa que React guarda la función en memoria (RAM) y no la vuelve a crear en cada renderizado.
- Si las dependencias no han cambiado, React simplemente reutiliza la misma función guardada en memoria, lo que ahorra recursos.
#### Analogía
- Imagina que tienes un chef que cocina una receta. Cada vez que alguien te pide la receta (una función en React), el chef tiene que seguir todo el proceso de preparación desde cero.
- Ahora, si un cliente pide la misma receta varias veces, en lugar de hacer todo de nuevo cada vez (preparar los ingredientes, cocinarlos, etc.), el chef podría recordar cómo la hizo antes y simplemente recalentarla o servirla sin repetir todo el proceso. Esto ahorra mucho tiempo y esfuerzo.
- useCallback es como decirle al chef: "Recuerda cómo hiciste esa receta la última vez y no la hagas de nuevo a menos que cambien los ingredientes".





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
- Cada vez que el contador cambia, el componente se vuelve a renderizar. Esto es porque el estado (contador) cambia y React tiene que volver a renderizar el componente para reflejar ese cambio.
- Dentro del componente, la función incrementador se vuelve a crear cada vez que el componente se renderiza. Esto ocurre porque el incrementador es una función definida dentro del componente, y en React, cuando el componente se vuelve a renderizar, todas las funciones dentro del componente (como incrementador) se recrean.
- El problema es que useEffect depende de la función incrementador. Como incrementador se recrea en cada renderizado, React considera que la función ha cambiado cada vez que el componente se renderiza. Entonces, cada vez que el componente se renderiza, React ejecuta el useEffect, lo que provoca que el alert se muestre repetidamente.
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

:::tip Observación
- useCallback devuelve una versión memorizada de la función incrementador, lo que significa que React no recreará la función en cada renderizado.
- El segundo argumento de useCallback es un arreglo vacío ([]). Esto significa que la función incrementador nunca cambiará durante el ciclo de vida del componente, ya que no depende de ningún valor (como el estado contador o props). En otras palabras, esta versión de incrementador es la misma en todos los renderizados.
- La función incrementador utiliza el valor anterior del estado (viejo) para actualizar contador, lo cual es una práctica recomendada para evitar problemas con actualizaciones asíncronas del estado.

:::
### useMemo
- Devuelve un valor memorizado.
- useMemo tiene dos argumentos:
  - Una función que devuelve un “valor”.
  - Un array de dependencias.
- useMemo es similar a useCallback: permite conservar un valor (el que retorna la función del primer argumento) entre renderizados y solo volver a calcularlo cuando cambia alguna de las dependencias especificadas.
:::tip
- El arreglo de dependencias no se pasa como argumentos a la función. Sin embargo, cada valor al que se hace referencia dentro de la función también debe aparecer en el arreglo de dependencias
:::
:::tip Valor memorizado
- Significa que React guarda temporalmente ese valor en memoria para reutilizarlo entre renderizados.  
- De esta manera, el valor no se vuelve a calcular ni a crear en cada render del componente, a menos que cambie alguna de sus dependencias.
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

- `useRef` es un hook de React que permite guardar un valor mutable que persiste entre renderizados.
- A diferencia de `useState`, cuando el valor de una ref cambia, el componente no se vuelve a renderizar.

#### useRef(initialValue)
- **Parámetro `initialValue`:**
  - Define el valor inicial de la propiedad `current` del objeto ref.
  - Puede ser cualquier tipo de dato.
  - Este valor solo se utiliza durante el renderizado inicial.
- El método `useRef()` devuelve un objeto ref con una única propiedad:
  - `current`:
    - Inicialmente contiene el valor de `initialValue`.
    - Puede modificarse posteriormente sin provocar un nuevo renderizado.
    - Si el objeto ref se asigna a la prop `ref` de un elemento JSX, React guardará la referencia de ese elemento en `current`.
- El objeto ref mantiene la misma referencia entre renderizados.
  - Es decir, React no vuelve a crear el objeto en cada render, sino que conserva el mismo objeto durante todo el ciclo de vida del componente, por lo que el valor almacenado en `current` persiste entre renderizados.
#### Advertencias
- Puedes modificar `ref.current` porque las refs son mutables.
- Sin embargo, no deberías mutar(modificar) objetos que React utiliza para actualizar la interfaz, ya que React podría no detectar esos cambios y la UI quedar desactualizada.
- Cambiar `ref.current` no hace que React renderice nuevamente el componente, ya que React no detecta automáticamente esos cambios.
- Evita leer o modificar `ref.current` en el cuerpo (adentro) de la función del componente (durante el renderizado), excepto para la inicialización. En su lugar, hazlo desde controladores de eventos o dentro de `useEffect`.
- En `StrictMode`, React ejecuta el componente dos veces en desarrollo para detectar efectos secundarios accidentales y comprobar que el componente sea predecible y consistente.
  - Esto no ocurre en producción.
  - Durante este proceso, cada ref se crea dos veces temporalmente, pero React descarta una de las versiones y conserva la definitiva.

:::tip Efectos secundarios
- En React, un efecto secundario es cualquier acción que modifica algo fuera del renderizado (de la función del componente).
- Es decir, acciones que producen cambios externos o adicionales.
- Por ejemplo:
  - Modificar variables externas
  - Hacer peticiones HTTP
  - Usar `localStorage`
  - Cambiar el DOM manualmente
  - Iniciar timers (`setTimeout`, `setInterval`), ya que programan acciones que se ejecutarán más adelante, cuando el renderizado del componente ya terminó, por lo que se consideran efectos fuera del renderizado.
  - Modificar `ref.current` durante el renderizado
- Se consideran efectos secundarios “accidentales” cuando ocurren en lugares donde no deberían ejecutarse, especialmente durante el renderizado de la función del componente.
:::

#### Ejemplo 1

```jsx
import { useRef } from 'react'

import './App.css'

function App() {
  const ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert('¡Hiciste clic ' + ref.current + ' veces!');
  }

  return (
    <>
      <button onClick={handleClick}>
        ¡Hazme clic!
      </button>

      <p>El valor es {ref.current}</p>
    </>
  )
}

export default App
```
:::tip Observación
- `useRef` devuelve un objeto con una única propiedad llamada `current`, inicializada con el valor que se pasa como argumento.
- En cada renderizado, React devuelve el mismo objeto `ref`, por lo que el valor almacenado en `current` se conserva entre renderizados.
- Puedes modificar `ref.current` libremente para guardar información y utilizarla más adelante.
- A diferencia de `useState`, modificar `ref.current` no provoca un nuevo renderizado del componente.
- En este ejemplo, el valor de `ref.current` sí aumenta internamente cada vez que se hace clic, pero el `<p>` no se actualiza en pantalla porque cambiar una ref no vuelve a renderizar el componente.
- Las refs son útiles para almacenar información que no afecta directamente a la interfaz visual, como:
  - IDs de `setTimeout` o `setInterval`
  - Referencias a elementos del DOM
  - Valores anteriores
  - Contadores internos
- Al usar una ref:
  - Puedes almacenar información que persiste entre renderizados.
  - Cambiar su valor no genera un nuevo renderizado.
  - Cada componente tiene su propia ref independiente.
:::


#### Ejemplo 2
```jsx
import { useRef } from "react";

import "./App.css";

function App() {
  const inputRef: React.RefObject<null | HTMLInputElement> = useRef(null);

  function handleClick() {
    inputRef.current?.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}

export default App;

```
:::tip Observación

- `inputRef` almacena una referencia al elemento `<input>` del DOM.
- Cuando React renderiza el componente, asigna automáticamente el elemento `<input>` a `inputRef.current`.
- Inicialmente, `inputRef.current` vale `null` porque el elemento todavía no existe en el DOM.
- Después del renderizado, `inputRef.current` pasa a contener el elemento HTML real (`HTMLInputElement`).
- Al hacer clic en el botón, se ejecuta `handleClick`, que llama al método `.focus()`  del input mediante la ref.
- El operador `?.` evita errores en caso de que `current` sea `null`.
- En este caso, la ref se utiliza para acceder y manipular directamente un elemento del DOM sin necesidad de volver a renderizar el componente.
:::

:::tip Más información
- [useRef - Proyecto](https://flevatti.github.io/documentacion/docs/React/proyecto#useref)
- [useRef - Formulario no controlado](https://flevatti.github.io/documentacion/docs/React/formulario#useref)
- [useRef](https://es.react.dev/reference/react/useRef)

:::
#### useState vs useRef
- La principal diferencia es que `useState` provoca una re-renderización del componente cuando su valor cambia, haciendo que la interfaz de usuario refleje los cambios. En contraste, `useRef` no provoca re-renderizaciones; se usa para almacenar valores mutables que persisten entre renderizados, pero que no afectan directamente la interfaz de usuario.
- Cuándo usar `useState`
  - Cuando el cambio en el valor debe actualizar la interfaz de usuario.
  - Para gestionar el estado de un componente visible para el usuario, como la entrada en un campo de texto o un indicador de carga.
  - Para valores que determinan la lógica de renderizado de una parte del componente.
- Cuándo usar `useRef`
  - Para acceder y manipular directamente elementos del DOM, como un campo de entrada, para enfocarlo o establecer su valor sin provocar una re-renderización.
  - Para almacenar valores mutables que no necesitan generar una nueva renderización, como un temporizador o el identificador de un proceso.
  - Cuando necesites mantener un valor persistente a través de las renderizaciones sin afectar la UI.
- Diferencias clave
  - **Re-renderización:** `useState` provoca re-renderizaciones; `useRef` no.
  - **Valor devuelto:** `useState` devuelve un array con el valor del estado y una función para actualizarlo; `useRef` devuelve un objeto con una propiedad `current` que contiene el valor.
  - **Mutabilidad y actualización:** Puedes actualizar directamente la propiedad `current` de una ref. En cambio, `useState` requiere el uso de su función de actualización para modificar el valor.




### useImperativeHandle
- Le sacamos provecho con:
  - useRef ([guia1](https://flevatti.github.io/documentacion/docs/React/proyecto#useref)  -- [guia 2](https://flevatti.github.io/documentacion/docs/React/formulario#useref))
  - [forwardRef](https://flevatti.github.io/documentacion/docs/React/proyecto#forwardref) 
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


### useSyncExternalStore 
- `useSyncExternalStore` es un hook de bajo nivel introducido en React 18 que permite a los componentes interactuar de forma segura con fuentes de datos externas, garantizando consistencia en renderizados concurrentes.


:::tip Hook de bajo nivel
- Un hook de bajo nivel en React es un hook que está más cerca del funcionamiento interno de React y sirve principalmente como base para construir otras herramientas, en lugar de usarse directamente en la mayoría de componentes.
- Analogía: es como las herramientas básicas de un taller (martillo, destornillador). No están hechas para construir el producto final (aplicación), sino para construir otras herramientas o piezas más complejas que luego se usan para hacer ese producto final.
:::

##### ¿Para qué sirve useSyncExternalStore?
- `useSyncExternalStore` permite a React conectarse de forma segura a datos que viven fuera de React (estado externo), asegurando que todos los componentes lean siempre la misma versión (Snapshot) de esos datos durante el renderizado.
- Cuando decimos “versión de los datos”, nos referimos a una **Snapshot** (“instantánea”), es decir, cómo eran los datos en un momento específico.
#### Ejemplos de fuentes externas
- APIs del navegador:
  - `navigator.onLine` (si estás conectado a internet)
  - `document.visibilityState` (si la pestaña está visible)
  - `window.matchMedia` (media queries)
- Stores o librerías de estado:
  - Redux, MobX, Zustand, Jotai (especialmente versiones modernas)
  - Stores personalizados
- Datos globales:
  - Variables globales
  - Sistemas de eventos personalizados
##### Problema que soluciona (tearing)
- React 18 introdujo el renderizado concurrente, que permite pausar, reanudar o cancelar renderizados para mejorar el rendimiento y la fluidez de la UI.
- Gracias a esto, React puede trabajar en varias actualizaciones de renderizado de forma simultánea, pausando, reanudando o priorizando unas sobre otras cuando sea necesario.
- El problema aparece cuando un estado externo cambia mientras React está renderizando:
  - Algunos componentes podrían leer una versión antigua de los datos
  - Mientras otros leen una versión más nueva
- Esta inconsistencia se llama **“tearing” (desgarro)**.
- Resultado:
  - la UI puede mostrar información contradictoria entre componentes.
##### ¿Cómo lo soluciona `useSyncExternalStore`?
- `useSyncExternalStore` garantiza que todos los componentes lean la misma Snapshot (versión de los datos) del estado externo durante un renderizado.
- De esta forma:
  - React mantiene los datos sincronizados
  - Evita inconsistencias entre componentes
  - Funciona correctamente incluso con renderizado concurrente
#### useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot?)
- Parámetros:
  - `subscribe(callback)`
    - Es una función que se encarga de avisarle a React cuando el estado externo cambia.
    - Recibe un `callback` que se ejecutará cada vez que los datos cambien.
    - Cuando los datos cambian:
      - Se ejecuta el callback
      - React vuelve a obtener la Snapshot usando `getSnapshot`
      - Y, si los datos cambiaron, vuelve a renderizar el componente.
    - Debe devolver una función de limpieza para que el callback deje de ejecutarse cuando el componente se desmonte.
  - `getSnapshot`
    - Es una función que devuelve la Snapshot actual del estado externo que necesita el componente.
    - Mientras los datos no cambien, debe devolver siempre el mismo valor.
    - Si devuelve un valor diferente (`Object.is`), React vuelve a renderizar el componente.
  - `getServerSnapshot` (opcional)
    - Es una función usada en renderizado del servidor (SSR).
    - Devuelve la Snapshot inicial que se utilizará:
      - En el servidor
      - Y durante la hidratación en el cliente.
    - La Snapshot debe ser igual tanto en el servidor como en el cliente para evitar inconsistencias.
    - Si no se proporciona en SSR, React generará un error.
- Retorno:
  - Devuelve la Snapshot actual del estado externo, la cual puede usarse dentro de la lógica de renderizado del componente.
#### Advertencias
- La Snapshot devuelta por `getSnapshot` debería ser inmutable.
  - Si los datos cambian:
    - Se debería devolver una nueva Snapshot.
  - Si los datos no cambian:
    - Se debería devolver la misma Snapshot anterior.
- Si `subscribe` cambia entre renderizados:
  - React volverá a configurar cómo detecta los cambios del store.
  - Para evitarlo:
    - Normalmente `subscribe` se define fuera del componente.
- Si el store cambia mientras React está realizando una actualización concurrente:
  - React puede reiniciar el renderizado y hacerlo de forma bloqueante, es decir, terminarlo  sin pausarlo ni interrumpirlo.
  - Esto garantiza que todos los componentes usen la misma Snapshot.
- No es recomendable usar valores obtenidos con `useSyncExternalStore` para decidir cuándo mostrar componentes lazy o suspender renderizados (`Suspense`), ya que los cambios del store pueden hacer que React muestre loaders inesperados o reemplace temporalmente contenido visible. Esto pasa porque los cambios en un store externo no pueden manejarse como actualizaciones concurrentes no bloqueantes (React no puede mantener la UI actual mientras prepara la nueva actualización). Entonces, cuando el valor cambia: 
  - React necesita actualizar la UI inmediatamente
  - Y si en esa actualización aparece un `Suspense` o un componente lazy:
    - React muestra el fallback (por ejemplo un loading)
    - Ocultando temporalmente el contenido actual.
#### Ejemplo -- Store externo


```ts title="todoStore.ts"
let nextId = 0;

type Todo = {
  id: number;
  text: string;
};

type Listener = () => void;

let todos: Todo[] = [{ id: nextId++, text: 'Todo #1' }];

let listeners: Listener[] = [];

export const todosStore = {


  addTodo(): void {
    todos = [...todos, { id: nextId++, text: 'Todo #' + nextId }];
    emitChange();
  },

  subscribe(listener: Listener): () => void {
    listeners = [...listeners, listener];

    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  },

  getSnapshot(): Todo[] {
    return todos;
  }
};

function emitChange(): void {
  for (const listener of listeners) {
    listener();
  }
}
```

:::tip Observación
- El "Estado externo" sería un array de objetos que contiene una `id` y un `text`:
```ts
let todos: Todo[] = [{ id: nextId++, text: 'Todo #1' }];
```
- El método `subscribe(listener)`:
  - Agrega el listener (callback) al array `listeners`
  - y devuelve una función de limpieza que elimina ese listener del array.
- El método `getSnapshot()`:
  - Devuelve el estado externo actual.
- El método `emitChange()`:
  - Recorre todos los callbacks del array `listeners`
  - Y los ejecuta para avisarle a React que el store cambió.
- El método `addTodo()`:
  - Modifica el estado externo agregando una nueva tarea
  - Y luego ejecuta `emitChange()`

::::




```tsx title="App.jsx"


import { useSyncExternalStore } from "react";
import { todosStore } from "./todoStore.ts";
import "./App.css";

type Todo = {
  id: number;
  text: string;
};

function App() {
  const todos : Todo[] = useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot);
  return (
     <>
      <button onClick={() => todosStore.addTodo()}>Add todo</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
}

export default App;

```
:::tip Observación
- `useSyncExternalStore()` recibe `subscribe` (que indica cómo registrar una función en la lista de funciones que se ejecutan cuando el store cambia) y `getSnapshot` (que indica cómo obtener la última versión del estado externo).
- Al hacer click en el botón, se ejecuta el método `addTodo()`, que modifica el estado externo y luego ejecuta todos los callbacks registrados.
- Es importante entender que React es quien crea internamente el callback para enterarse de los cambios en el store y mantener sincronizada la UI con los datos externos.
- Ese callback que React crea es el que se pasa a `subscribe()` cuando React se conecta al store mediante `useSyncExternalStore()`.
:::

#### Ejemplo -- Hook Personalizado
- Normalmente no escribirás `useSyncExternalStore` directamente en tus componentes. En su lugar, lo usarás dentro de un hook personalizado. Esto te permite reutilizar el mismo store externo en distintos componentes.
- Por ejemplo, el hook personalizado `useOnlineStatus` permite saber si la red está conectada o no:
```ts title="useOnlineStatus.ts"
import { useSyncExternalStore } from 'react';

export function useOnlineStatus() {
  const isOnline = useSyncExternalStore(subscribe, getSnapshot);
  return isOnline;
}

function getSnapshot() {
  return navigator.onLine;
}

function subscribe(callback : () => void) {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);
  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
}
```
:::tip Observación
- A diferencia del ejemplo anterior, aquí `subscribe` conecta el callback a eventos del navegador (`online` / `offline`), y son esos eventos los que terminan ejecutándolo cuando cambia el estado de conexión.
- Esos eventos representan cambios en el estado externo (en este caso, el estado de conexión a internet).
- Los callbacks siempre se ejecutan después:
  - Ya sea por el store (ej: `emitChange`)
  - O por eventos del navegador (ej: `online/offline`)
- También devuelve un método de limpieza que elimina el callback de los eventos, evitando que se siga ejecutando cuando ya no se necesita.
- Por último, `useOnlineStatus` es un hook que se actualiza en base al estado de conexión a internet.
:::
```tsx title="App.jsx"
import "./App.css";
import { useOnlineStatus } from './useOnlineStatus.ts';


function StatusBar() {
  const isOnline = useOnlineStatus();
  return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
}

function SaveButton() {
  const isOnline = useOnlineStatus();

  function handleSaveClick() {
    console.log('✅ Progress saved');
  }

  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? 'Save progress' : 'Reconnecting...'}
    </button>
  );
}


function App() {
  
  return (
     <>
      <SaveButton />
      <StatusBar />
    </>
  );
}

export default App;
```


:::tip Información
- [useSyncExternalStore](https://react.dev/reference/react/useSyncExternalStore)
- [useSyncExternalStore: Demystified for Practical React Development](https://www.epicreact.dev/use-sync-external-store-demystified-for-practical-react-development-w5ac0)
- [¿Para qué sirve el hook `useSyncExternalStore`?](https://www.reactjs.wiki/para-que-sirve-el-hook-use-sync-external-store)
- [Understanding useSyncExternalStore](https://medium.com/@dwell_the/understanding-usesyncexternalstore-c06618a32d61)
- [useSyncExternalStore in React — The Right Way to Subscribe to External Data](https://dev.to/saiful7778/usesyncexternalstore-in-react-the-right-way-to-subscribe-to-external-data-p6)
- [How to use useSyncExternalStore Hook in React ?](https://medium.com/@himashawije/how-to-use-usesyncexternalstore-hook-in-react-ffd0c784718e)
- [React Concurrent Rendering Tearing: When External Stores Break](https://www.edge-cases.com/react/react-concurrent-tearing)
:::
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

### CSS Dinamico

- En React puedes crear CSS dinámico, es decir, hacer que las clases de un elemento cambien según el estado del componente.
- La forma más común y limpia de hacerlo es usando *template literals* con condicionales ternarios, o con librerías como `classnames` o `clsx`.
- Ejemplo de CSS dinámico en React:
```tsx title="App.tsx"
import { useState } from "react";
import "./App.css";

function App() {
  const [activo, setActivo] = useState(false);
  const [cargando, setCargando] = useState(true);

  const toggleActivo = () => {
    setActivo((prev) => !prev);
  };

  const toggleCargando = () => {
    setCargando((prev) => !prev);
  };

  return (
    <div className="container">
      <button
        className={`boton 
          ${activo ? "boton--activo" : ""} 
          ${cargando ? "boton--cargando" : ""}
          texto-grande
        `}
        onClick={toggleActivo}
      >
        Cambiar color de fondo
      </button>


      <button className="control-btn" onClick={toggleCargando}>
        {cargando ? "Activar botón" : "Desactivar botón"}
      </button>
    </div>
  );
}

export default App;
```
```css title="App.css"
.boton {
  padding: 12px 20px;
  border-radius: 8px;
  background-color: gray;
  color: white;
  cursor: pointer;
  display: inline-block;
  user-select: none;
}

.boton--activo {
  background-color: green;
}

.boton--cargando {
  opacity: 0.5;
  pointer-events: none;
}

.texto-grande {
  font-size: 18px;
}
```
:::tip Observación
- Este ejemplo muestra **CSS dinámico en React**, donde las clases de un elemento cambian según el estado del componente.
- Se utiliza `useState` para definir el estado de este componente.
- Dependiendo de estos estados, se agregan o quitan clases CSS de forma condicional usando *template literals*.
- Esto permite modificar la apariencia del mismo elemento sin cambiar su estructura, solo aplicando o quitando clases.
:::
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