---
sidebar_position: 7
---
# Context API
- Context en React es una herramienta que permite que los datos estén disponibles en todos los componentes (árbol de componente) sin la necesidad de pasar props de manera explícita en cada nivel. Esto resulta útil para gestionar datos que deben ser accesibles globalmente, como el usuario autenticado, el tema de la aplicación o el idioma seleccionado. Context se utiliza especialmente cuando diferentes vistas o componentes necesitan acceder a estos datos, incluso si no están anidados directamente.
- Context permite que los datos importantes de tu aplicación estén disponibles para cualquier componente, sin importar en qué parte se encuentren. Esto significa que no tienes que pasar información de un componente a otro; simplemente defines el dato en un lugar, y cualquier componente que lo necesite puede obtenerlo directamente. Es ideal para datos como el usuario actual, el idioma o el tema visual.


:::warning
-	No hacer todo GLOBAL .
-	Solo los que se nos escapan de la mano.
:::

:::tip Documentación
- [Context (antiguo)](https://es.legacy.reactjs.org/docs/context.html)
- [Pasar datos en profundidad con contexto](https://es.react.dev/learn/passing-data-deeply-with-context)
- [useContext](https://es.react.dev/learn/passing-data-deeply-with-context)
- [useContext (antiguo)](https://es.reactjs.org/docs/hooks-reference.html#usecontext)
:::



## Redux vs Context
#### Redux
-	Es una libreria para la gestión de estado global.
-	Ofrece herramientas avanzadas como:
    -	Depurador con viaje en el tiempo, que permite inspeccionar cambios en el estado a lo largo del tiempo.
    -	Middleware configurable como redux-saga o redux-thunk, para manejar lógica asíncrona y efectos secundarios.
-	Están optimizados para evitar renderizados innecesarios, mejorando el rendimiento.
-	Es independiente de React, por lo que puede usarse con otros frameworks o librerías.


#### Context
-	Es una API nativa de React que facilita compartir datos entre componentes sin pasar props manualmente a través de cada nivel.
-	Es ideal para datos "globales" como temas, idiomas o la autenticación del usuario.
-	No incluye herramientas avanzadas como un depurador, middleware o una estructura estricta para manejar el estado.
-	Context no está diseñado específicamente para la gestión del estado, sino para transferir datos entre componentes.


#### Conclusión
- Ambos cumplen roles diferentes:
  -	Usa Redux si necesitas una herramienta robusta para manejar estados complejos, lógica asíncrona o depuración avanzada.
  -	Usa Context si solo necesitas compartir datos simples entre componentes en una aplicación React.


:::tip Información
- [React. ¿Context API puede ser alternativa a Redux?](https://www.itdo.com/blog/react-context-api-puede-ser-alternativa-a-redux/)
- [Redux vs. The React Context API](https://daveceddia.com/context-api-vs-redux/)
- [When Context Replaces Redux](https://frontarm.com/james-k-nelson/when-context-replaces-redux/)
:::

## Problematica
- En React, pasar props es una manera común de enviar datos entre componentes. Sin embargo, cuando los datos deben llegar a un componente que está en un nivel inferior dentro del árbol de componentes, o cuando varios componentes necesitan acceder a esos mismos datos, se complica el proceso.
- Esto se debe a que:
  -	Los props deben pasarse manualmente desde el componente padre hacia los hijos, incluso si algunos de esos hijos no los necesitan.
  -	Esto genera mucho código innecesario y hace que el mantenimiento sea más difícil.
- Esta situación se conoce como "perforación de props" (prop drilling), porque los datos parecen "perforar" varios niveles de componentes intermedios para llegar a donde realmente son necesarios.
- Imagínate que tienes un dato importante en un componente "padre" que necesitas usar en un "nieto" o incluso más abajo. Sin una herramienta como Context o Redux, tienes que pasar el dato manualmente desde el padre hasta el hijo, del hijo al nieto, y así sucesivamente, incluso si esos componentes intermedios no lo necesitan.
- Este proceso puede ser tedioso y difícil de manejar cuando los datos son necesarios en varias partes de la aplicación. Además, hace que el código sea más largo y complicado.

#### Contexto: una alternativa a pasar props
- El contexto en React es una herramienta que permite que un componente padre comparta datos con todos los componentes que envuelve (árbol), sin necesidad de pasar props manualmente en cada nivel. Esto es especialmente útil cuando los datos son necesarios en múltiples niveles o por varios componentes.
- Este es un solo ejemplo. Considera el componente Heading que acepta level como su tamaño:
```js title="App.js"
import Heading from './Heading.js';
import Section from './Section.js';

export default function Page() {
  return (
    <Section>
      <Heading level={1}>Título</Heading>
      <Heading level={2}>Encabezado</Heading>
      <Heading level={3}>Sub-encabezado</Heading>
      <Heading level={4}>Sub-sub-encabezado</Heading>
      <Heading level={5}>Sub-sub-sub-encabezado</Heading>
      <Heading level={6}>Sub-sub-sub-sub-encabezado</Heading>
    </Section>
  );
}

```
```js title="Section.js"
export default function Section({ children }) {
  return (
    <section className="section">
      {children}
    </section>
  );
}

```
```js title="Heading.js"
export default function Heading({ level, children }) {
  switch (level) {
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
    case 3:
      return <h3>{children}</h3>;
    case 4:
      return <h4>{children}</h4>;
    case 5:
      return <h5>{children}</h5>;
    case 6:
      return <h6>{children}</h6>;
    default:
      throw Error('Unknown level: ' + level);
  }
}

```
- Supongamos que quieres múltiples encabezados (headings) dentro del mismo componente Section para siempre tener el mismo tamaño:
```js title="App.js"
import Heading from './Heading.js';
import Section from './Section.js';

export default function Page() {
  return (
    <Section>
      <Heading level={1}>Título</Heading>
      <Section>
        <Heading level={2}>Encabezado</Heading>
        <Heading level={2}>Encabezado</Heading>
        <Heading level={2}>Encabezado</Heading>
        <Section>
          <Heading level={3}>Sub-encabezado</Heading>
          <Heading level={3}>Sub-encabezado</Heading>
          <Heading level={3}>Sub-encabezado</Heading>
          <Section>
            <Heading level={4}>Sub-sub-encabezado</Heading>
            <Heading level={4}>Sub-sub-encabezado</Heading>
            <Heading level={4}>Sub-sub-encabezado</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}

```
- Actualmente, estás pasando la prop level a cada &lt;Heading> separadamente:
```js
<Section>
  <Heading level={3}>Acerca de</Heading>
  <Heading level={3}>Fotos</Heading>
  <Heading level={3}>Videos</Heading>
</Section>

```
- Sería genial si pudieras pasar la prop level al componente &lt;Section> y removerlo del &lt;Heading>. De esta forma podrías reforzar que todos los encabezados tengan el mismo tamaño en una misma sección (section):
```js
<Section level={3}>
  <Heading>Acerca de</Heading>
  <Heading>Fotos</Heading>
  <Heading>Videos</Heading>
</Section>

```
#### Problema
- El componente &lt;Heading> necesita conocer el level de su &lt;Section> más cercano. Como Section puede estar en un nivel superior dentro del árbol de componente, no es práctico usar props para pasar este dato a través de todos los componentes intermedios.
#### Solución Con Context
-	Crear un Contexto:
    - Crea un contexto para almacenar y compartir el level. Por ejemplo, LevelContext. 
-	Consumir el Contexto:
    - El componente &lt;Heading> usará este contexto para acceder al level más cercano en el árbol. Esto se hace con el hook useContext.
-	Proveer el Contexto:
    - El componente &lt;Section> usará el Provider del contexto para especificar el valor del level, que será accesible para los &lt;Heading> dentro de él.
#### En resumen
- El contexto en React permite que un componente padre pueda proveer datos a todos los componentes que envuelve (dentro de su árbol), sin necesidad de pasar props manualmente de uno a otro.
- Esto significa que, aunque los componentes hijos o nietos estén muy alejados en la jerarquía, pueden acceder a los datos proporcionados por el componente que está más arriba en el árbol (el que provee el contexto). Esto resuelve problemas como la "perforación de props", en la que tienes que pasar los datos a través de varios niveles de componentes intermedios, aunque esos componentes no los necesiten directamente.
- Si un componente A tiene varios niveles de componentes hijos (B, C, D), y A provee un contexto, entonces B, C y D pueden acceder a esos datos sin que el componente A tenga que pasar explícitamente props a través de cada nivel.


## createContext()
#### Paso 1: crear el contexto
- Primeramente, necesitas crear el contexto. Necesitarás exportarlo desde un archivo para que tus componentes lo puedan usar.
- El contexto se crea con createContext():
  -	Cuando un componente usa(consume) un contexto con useContext(), busca el valor (prop value) del Provider más cercano en el árbol de componentes. Si no encuentra un Provider, usará el valor predeterminado del Context.
  -	Cada objeto Context en React incluye un componente Provider, cuya prop value contiene los datos "globales" o los valores a los que tendrán acceso los componentes consumidores.
  -	El componente Provider acepta una prop value que contiene  los valores a los que tendrán acceso los componentes consumidores.
  -	Los componentes consumidores son los descendientes del Provider.
- Entonces quedaría así:
```js title="LevelContext.js"
import { createContext } from 'react';
export const LevelContext = createContext(1);
```
:::tip Observación
- El único parámetro que se le pasa a createContext es el valor predeterminado. En este caso, 1 se refiere al nivel de encabezado más grande, pero puedes pasar cualquier valor (incluso un objeto). Ya verás la importancia del valor predeterminado en el siguiente paso.
- El contexto que se crea hay que exportarlo.
- Este contexto lo va a utilizar los componentes que van a necesitar  el valor level en este caso.
:::

## useContext()
#### Paso 2: Usar el contexto 
- Importa el Hook useContext desde React y tu contexto:
```js
import { useContext } from 'react';
import { LevelContext } from './LevelContext.js';

```
- Actualmente, el componente Heading lee level en la prop:
```js 
export default function Heading({ level, children }) {
  // ...
}

```
- En su lugar, remueve la prop level y lee el valor desde el contexto que acabas de importar, LevelContext:
```js 
export default function Heading({ children }) {
  const level = useContext(LevelContext);
  // ...
}

```
:::tip Observación
- useContext le dice a React que el componente Heading quiere leer el contexto LevelContext.
- El hook useContext() recibe como parámetro un contexto (creado con React.createContext) y devuelve el valor actual del contexto pasado, que corresponde a la prop value del Provider más cercano. Si no hay un Provider en el árbol, useContext() devolverá el valor predeterminado definido al crear el contexto.
:::

- Ahora que el componente Heading no tiene una prop level, ya no tienes que pasarla a Heading en tu JSX de esta forma:
```js
<Section>
  <Heading level={4}>Sub-sub-encabezado</Heading>
  <Heading level={4}>Sub-sub-encabezado</Heading>
  <Heading level={4}>Sub-sub-encabezado</Heading>
</Section>

```
- Actualiza el JSX para que sea Section el que recibe la prop:
```js 
<Section level={4}>
  <Heading>Sub-sub-encabezado</Heading>
  <Heading>Sub-sub-encabezado</Heading>
  <Heading>Sub-sub-encabezado</Heading>
</Section>

```
- Este ejemplo no funciona correctamente todavía. Aunque estamos usando el contexto, React no sabe automáticamente dónde obtener y almacenar los datos. Si no proporcionamos un valor para el contexto en cada componente Section, React usará el valor predeterminado que definimos al crear el contexto. En nuestro caso, especificamos 1 como valor predeterminado, lo que significa que todos los componentes Heading obtendrán ese valor.
- El problema es que, al no especificar un valor para el contexto en cada sección, useContext(LevelContext) siempre devuelve 1, lo que hace que todos los encabezados se rendericen como &lt;h1>.
- Para solucionar esto, necesitamos que cada componente Section proporcione su propio valor para el contexto. Esto permitirá que cada Heading obtenga el valor correcto, dependiendo de qué tan profundo esté en el árbol de componentes.

## Provider 
#### Paso 3: Proveer el contexto 
- El componente Section actualmente renderiza sus hijos:
```js

export default function Section({ children }) {
  return (
    <section className="section">
      {children}
    </section>
  );
}

```
- Envuelve los componentes con el Provider de LevelContext para proporcionarles el valor del contexto:
```js 
import { LevelContext } from './LevelContext.js';

export default function Section({ level, children }) {
  return (
    <section className="section">
      <LevelContext.Provider value={level}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}

```
:::tip Observación 
- Todo lo que el componente Provider envuelve tendrá acceso a los datos que contiene la prop value. Este mecanismo permite que los componentes dentro del árbol puedan consumir dichos datos sin necesidad de pasar props explícitamente en cada nivel.
- Esto le dice a React: «si cualquier componente adentro de este &lt;Section> pregunta por LevelContext a través de useContext(), envíales este level (el de la prop value)». El componente usará el valor del &lt;LevelContext.Provider>  (prop value) más cercano en el árbol de la UI encima de él.
- Es el mismo resultado del código original, ¡pero no tuviste que pasar la prop level a cada componente Heading! En su lugar, el componente obtiene su nivel de encabezado al preguntarle al Section más cercano de arriba
:::

#### Resumen 
-	Provider: Se utiliza para definir el valor del contexto (prop value) y especificar qué componentes tienen acceso a este valor.
-	Contexto (usado con useContext): Nos permite acceder al valor proporcionado por el Provider (prop value) más cercano que esté asociado a ese contexto.

## Usar y proveer el contexto desde el mismo componente 
- Actualmente, aún puedes especificar el level de cada sección manualmente:
```js 

export default function Page() {
  return (
    <Section level={1}>
      ...
      <Section level={2}>
        ...
        <Section level={3}>
          ...

```
- Debido a que el contexto te permite leer información desde un componente de arriba, cada Section podría leer el level del Section de arriba, y pasar level + 1 hacia abajo automáticamente. Así es como lo podrías conseguir:
```js

import { useContext } from 'react';
import { LevelContext } from './LevelContext.js';

export default function Section({ children }) {
  const level = useContext(LevelContext);
  return (
    <section className="section">
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}


```
- Con este cambio, no es necesario pasar la prop level al &lt;Section> o al &lt;Heading>:
```js

import Heading from './Heading.js';
import Section from './Section.js';

export default function Page() {
  return (
    <Section>
      <Heading>Título</Heading>
      <Section>
        <Heading>Encabezado</Heading>
        <Heading>Encabezado</Heading>
        <Heading>Encabezado</Heading>
        <Section>
          <Heading>Sub-encabezado</Heading>
          <Heading>Sub-encabezado</Heading>
          <Heading>Sub-encabezado</Heading>
          <Section>
            <Heading>Sub-sub-encabezado</Heading>
            <Heading>Sub-sub-encabezado</Heading>
            <Heading>Sub-sub-encabezado</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}

```
## El contexto pasa a través de componentes intermedios 
- Puedes insertar tantos componentes como desees entre el componente que provee el contexto y el componente que lo usa. Esto incluye tanto componentes integrados como &lt;div> como componentes construidos por ti.
- En este ejemplo, el mismo componente Post (con un borde discontinuo) es renderizado en dos distintos niveles anidados. Nota que el &lt;Heading> que está adentro tiene el nivel automáticamente desde el &lt;Section> más cercano:
```js title="App.js"
import Heading from './Heading.js';
import Section from './Section.js';

export default function ProfilePage() {
  return (
    <Section>
      <Heading>Mi perfil</Heading>
      <Post
        title="¡Hola viajero!"
        body="Lee sobre mis aventuras."
      />
      <AllPosts />
    </Section>
  );
}

function AllPosts() {
  return (
    <Section>
      <Heading>Publicaciones</Heading>
      <RecentPosts />
    </Section>
  );
}

function RecentPosts() {
  return (
    <Section>
      <Heading>Publicaciones recientes</Heading>
      <Post
        title="Sabores de Lisboa"
        body="¡...esos pastéis de nata!"
      />
      <Post
        title="Buenos Aires a ritmo de tango"
        body="¡Me encantó!"
      />
    </Section>
  );
}

function Post({ title, body }) {
  return (
    <Section isFancy={true}>
      <Heading>
        {title}
      </Heading>
      <p><i>{body}</i></p>
    </Section>
  );
}

```
```js title="Section.js"
import { useContext } from 'react';
import { LevelContext } from './LevelContext.js';

export default function Section({ children, isFancy }) {
  const level = useContext(LevelContext);
  return (
    <section className={
      'section ' +
      (isFancy ? 'fancy' : '')
    }>
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}

```
```js title="Heading.js"
import { useContext } from 'react';
import { LevelContext } from './LevelContext.js';

export default function Heading({ children }) {
  const level = useContext(LevelContext);
  switch (level) {
    case 0:
      throw Error('Heading must be inside a Section!');
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
    case 3:
      return <h3>{children}</h3>;
    case 4:
      return <h4>{children}</h4>;
    case 5:
      return <h5>{children}</h5>;
    case 6:
      return <h6>{children}</h6>;
    default:
      throw Error('Unknown level: ' + level);
  }
}

```
```js title="LevelContext.js"
import { createContext } from 'react';

export const LevelContext = createContext(0);

```

## Funcionamiento de los contextos 
- El funcionamiento de los contextos te podría recordar a la herencia de CSS. En CSS, puedes especificar color: blue para un &lt;div>, y cualquier nodo DOM adentro de él, no importa qué tan profundo esté, heredará ese color a no ser de que otro nodo DOM en el medio lo sobrescriba con color: green. Asimismo, en React funciona igual.
- En CSS, diversas propiedades como color y background-color no se sobrescriben entre ellas. Puedes definir la propiedad color de todos los &lt;div> a red sin impactar background-color. Similarmente, diversos contextos de React no se sobrescriben entre ellos mismos. Cada contexto que creas con createContext() está completamente separado de los otros.Un componente podría usar o proveer muchos contextos diferentes sin ningún problema.

## Antes de usar contexto 
- ¡El uso contexto resulta muy atractivo! Sin embargo, esto también significa que fácilmente puedes terminar abusando de él. Solo porque necesitas pasar algunas props a varios niveles en profundidad no significa que debas poner esa información en un contexto.
- Aquí hay algunas alternativas que podrías considerar antes de usar el contexto:
  1.	Empieza pasando props. Si tus componentes no son triviales, no es inusual pasar muchas props hacia abajo a través de muchos componentes. Podría considerarse tedioso, ¡pero deja bien claro cuáles componentes usan cuáles datos! La persona dándole mantenimiento a tu código estará agradecida de que hiciste el flujo de datos explícito con props.
  2.	Extraer componentes y pasarlo como  children. Si pasas algunos datos a través de muchas capas de componentes intermedios que no usan esos datos (y lo único que hacen es pasarlos hacia abajo), esto muchas veces significa que olvidaste extraer algunos componentes sobre la marcha. Por ejemplo, quizá pasaste algunas props como posts a componentes visuales que no las usan directamente, como lo puede ser &lt;Layout posts={posts} />. En su lugar, haz que Layout tome children como prop, y renderiza &lt;Layout>&lt;Posts posts={posts} />&lt;/Layout>. Esto reduce la cantidad de capas que hay entre el componente que especifica los datos y el componente que los necesita.
- Si ninguna de estas alternativas funciona bien para ti, considera el contexto.

## Casos de uso para el contexto 
-	Temas: Si tus aplicaciones permiten que los usuarios cambien la apariencia (por ejemplo, modo oscuro), puedes poner un proveedor de contexto en el primer nivel de tu aplicación, y usar ese contexto en componentes que necesiten ajustar su comportamiento visual.
-	Cuenta actual: Muchos componentes podrían necesitar saber el usuario actual que inició sesión. Ponerlo en un contexto lo hace conveniente para leerlo desde cualquier lado del árbol. Algunas aplicaciones también te permiten manejar múltiples cuentas al mismo tiempo (por ejemplo, dejar un comentario con un usuario distinto). En esos casos, puede ser conveniente envolver parte de la UI con un proveedor anidado que tenga una cuenta actual diferente.
-	Enrutamiento: La mayoría de las soluciones de enrutamiento usan contexto internamente para mantener la ruta actual. Así es como cada enlace «sabe» si está activo o no. Si construyes tu propio enrutador, podrías necesitar hacerlo también.
-	Gestionar estados: A medida que tu aplicación crece, podrías terminar con muchos estados cerca de la parte superior de tu aplicación. Muchos componentes distantes de abajo podrían querer cambiarlos. Es común usar un reducer con un contexto para gestionar estados complejos y pasarlos a componentes lejanos sin mucha molestia.

## Actividad ruta protegida
- Crea un contexto para simular la información del usuario y utiliza React Router para validar si tiene acceso a una página específica. ¡Anímate a implementarlo!
- Consejos:
  1.	Define un contexto con métodos para iniciar y cerrar sesión, y guarda la información del usuario en el mismo contexto.
  2.	Crea un componente que actúe como una ruta padre, y que verifique si el usuario está autenticado antes de permitirle acceder a las rutas hijas. Por ejemplo, que solo renderice el “children” si esta autenticado y en caso contrario realizar una redirección.
  3.	Siempre redirige a una página de inicio de sesión o de error en caso de que el usuario no tenga permisos para acceder a ciertas rutas.

:::tip
- El contexto (prop value del Provider) puede contener funciones, objetos, etc.
:::

:::warning 
- Las validaciones se hacen en el backend.
- En el frontend solo las validaciones básica.
:::
