---
sidebar_position: 2
---
# Introduccion

## Como crear un proyecto con React
- React es una librería centrada exclusivamente en la construcción de interfaces de usuario, y no cubre todas las funcionalidades necesarias para construir una aplicación web completa. Debido a esta limitación, es recomendable usarlo con un framework cuando se requiere más funcionalidades/herramientas o mejorar la estructura del código. Aquí algunas razones clave:
  -  Limitado a la capa de UI: React se especializa en crear componentes y gestionar el estado local de la UI, pero no proporciona herramientas nativas para otras necesidades comunes, como el manejo de rutas, la autenticación de usuarios, la comunicación con servidores o bases de datos, y la optimización del rendimiento. Los frameworks, como Next.js o Remix, añaden estas funcionalidades.
  -  Falta de un sistema de enrutamiento integrado: Aunque puedes usar bibliotecas adicionales como react-router, React por sí solo no incluye un enrutador nativo. Los frameworks suelen tener sistemas de enrutamiento integrados y optimizados, lo que facilita el desarrollo de aplicaciones con múltiples páginas y rutas.
  -  Gestión de estados globales y obtención de datos: React ofrece herramientas como hooks para gestionar el estado, pero cuando necesitas manejar el estado global o interactuar de manera eficiente con APIs o bases de datos, los frameworks proporcionan soluciones más completas y optimizadas, como el Server-Side Rendering (SSR) o el Static Site Generation (SSG).
  -  Optimización del rendimiento: React no tiene herramientas nativas para mejorar automáticamente el rendimiento de la aplicación. Frameworks como Next.js ofrecen características como la división automática de código (code splitting) y el cargado progresivo de contenido, lo que mejora la experiencia del usuario y el rendimiento general de la aplicación.
  -  SEO: React es limitado en cuanto a SEO porque el contenido de las páginas se renderiza del lado del cliente (Client-Side Rendering), lo que puede ser problemático para la indexación por motores de búsqueda. Frameworks como Next.js permiten el renderizado en el servidor, mejorando significativamente el SEO.
  - En una aplicación React sin un framework, tienes mucha libertad para organizar tus archivos y directorios como prefieras, pero esta flexibilidad puede volverse caótica en proyectos grandes o complejos. Un framework proporciona una estructura clara que te guía sobre cómo organizar:
      -  Archivos y carpetas: Frameworks como Next.js vienen con convenciones sobre cómo organizar componentes, páginas, estilos, y recursos. Por ejemplo, en Next.js, todas las páginas de la aplicación están en una carpeta llamada pages, lo que facilita encontrar y crear nuevas rutas sin tener que configurar un enrutador manualmente.
      -  Gestión de rutas: En React puro, tú decides cómo manejar el enrutamiento (por ejemplo, con bibliotecas como react-router). Un framework suele ofrecer una estructura integrada(funcionalidad) para crear rutas automáticamente, lo que simplifica el proceso. En Next.js, cada archivo dentro de la carpeta pages automáticamente se convierte en una ruta de la aplicación.
      -  Patrones de desarrollo: Los frameworks suelen venir con prácticas y convenciones preestablecidas para resolver problemas comunes (por ejemplo, cómo cargar datos o gestionar errores). Esto te ayuda a evitar tener que tomar todas las decisiones desde cero y seguir patrones de desarrollo consistentes.
      -  Flujo de datos y estado: Algunos frameworks también incluyen herramientas o recomendaciones claras sobre cómo manejar el flujo de datos y el estado de la aplicación, lo que puede ser complejo en proyectos más grandes si no se gestiona de forma adecuada.
- Entonces, aunque React es poderoso para la creación de interfaces, no ofrece un conjunto completo de herramientas para manejar todo lo que una aplicación moderna necesita. Por eso se recomienda complementarlo con un framework cuando se trabaja en proyectos más complejos o grandes.
- Se recomienda usar React con algún Framework como Next.js, Remix, Gatsby , etc..


####  Vite
- Vite es una herramienta de compilación que tiene como objetivo proporcionar una experiencia de desarrollo más rápida y ágil para proyectos web modernos. Consta de dos partes principales:
  - Servidor de desarrollo con módulos ES nativos:
      -  Servidor de desarrollo: Cuando trabajas en una aplicación web, necesitas un entorno local para ver los cambios en tiempo real mientras escribes el código. Vite incluye un servidor de desarrollo integrado que hace esto de manera rápida y eficiente.
      -  Módulos ES nativos: Vite utiliza una característica moderna de los navegadores llamada módulos ES (ECMAScript), que permite importar y exportar módulos de JavaScript directamente en el navegador sin necesidad de agrupar todos los módulos en un único  o varios archivos grandes (proceso conocido como bundling) antes de ser enviados al navegador. En lugar de eso, Vite utiliza los módulos ES nativos del navegador para cargar cada archivo de manera individual y según sea necesario. Esto significa que solo se carga lo que necesitas, cuando lo necesitas.
      -  Hot Module Replacement (HMR): Esta es una de las mejoras más destacadas de Vite. HMR permite que solo se recarguen los módulos que cambian en tiempo real, en lugar de tener que recargar toda la página. Esto significa que ves los cambios en tu código inmediatamente mientras desarrollas, lo que acelera el ciclo de desarrollo.
  - Comando de compilación con Rollup:
      -  Comando de compilación: Cuando finalizas el desarrollo y quieres preparar tu aplicación para ser desplegada en producción, Vite ofrece un comando que transforma el código en una versión optimizada.
      -  Empaquetado con Rollup: Para esta fase, Vite utiliza Rollup, una herramienta especializada en la compilación de módulos. Rollup agrupa (bundle) todo tu código en archivos más pequeños y eficientes que los navegadores pueden cargar rápidamente.
      -  Recursos estáticos optimizados: El código que Vite genera para producción está altamente optimizado, es decir, minimizado (reducido en tamaño), dividido en partes para que solo se carguen los archivos necesarios, y ajustado para funcionar de manera rápida en cualquier entorno.

:::tip Compilación
- La compilación es el proceso de transformar el código que escribes en un lenguaje de programación a un formato(lenguaje) que la computadora pueda entender y ejecutar. Es como convertir instrucciones en un idioma que la máquina pueda procesar de manera eficiente. Por ejemplo, cuando escribes código en JavaScript o Python, ese código necesita ser "traducido" para que el navegador o el sistema operativo lo entienda y ejecute correctamente.
- Ejemplo sencillo: Es como si escribieras una receta en español (código) y la tuvieras que traducir al inglés (código ejecutable) para que alguien en otro país pueda seguirla sin problemas. La traducción es la compilación.


:::

- Con Vite puedes crear un proyecto de React puro sin necesidad de usarlo con un framework. Para esto, ejecutamos el siguiente comando:

```powershell
npm create vite@latest [nombreProyecto]
```
:::tip Observación
- Cuando se te pregunte, selecciona la opción para React.
- Luego de crear el proyecto, asegúrate de navegar a la carpeta del proyecto y instalar las dependencias con `npm install` / `npm i`.
- Luego de instalar las dependencias puedes iniciar el servidor de desarrollo con `npm run dev`
- Aparte del `comando dev` tiene los siguientes:
  - `npm run build`: Para compilar la aplicación, este proceso te generia una carpeta con contenido HTML , CSS Y Javascript para subir a algún servidor (deploy).
  - `npm run preview`: Te permite ejecutar en el entorno local lo que se compilo con el comando build.
  - `npm run lint`: Para verificar que tu código no tenga errores.


:::







#### Create React App (CRA)
- [link](https://create-react-app.dev)
- Es como un instalador , para hacer una aplicación react.
- Create React App (CRA) se puede usar para crear aplicaciones de React puro (sin un framework). CRA es una herramienta que te ayuda a configurar rápidamente un nuevo proyecto de React con una estructura de archivos básica y configuraciones predefinidas. 
- Afortunadamente, Facebook ha creado  Create React App, un entorno que viene preconfigurado con todo lo necesario para crear una aplicación React.
- Creará un servidor de desarrollo en vivo (herramienta para el desarrollador).
- No es necesario instalar ni configurar herramientas como webpack o Babel. Están preconfigurados y ocultos para que pueda concentrarse en el código.
- Ventajas de usar Create React App:
  -	Configuración automática: CRA configura automáticamente herramientas como Babel, Webpack y ESLint, lo que te permite centrarte en escribir código sin preocuparte por la configuración.
  -	Estructura de proyecto organizada: Te proporciona una estructura de archivos clara y fácil de entender, lo que es útil para nuevos desarrolladores.
  -	Comandos útiles: Incluye comandos para ejecutar tu aplicación, ejecutar pruebas y construir una versión optimizada para producción.



En la ubicacion del proyecto:

```powershell
npx create-react-app [nombreProyecto]
```

Accedemos a la carpeta que se crea(se llama igual al nombre del proyecto)
```powershell
cd [nombreProyecto]
```
:::tip npx
- Npx es una herramienta que nos permite ejecutar paquetes de npm, los busca en su servidor y lo ejecuta en nuestra máquina.
- Si usas npx no tienes que instalar paquetes de forma global.
- Busca siempre la última versión.
:::

#### Comandos

- Al terminar la instalación , te muestra los comandos que podemos utilizar.
- Los comandos pueden ser de npm o de su competencia (yarn).

#### start 
- Este comando inicia el servidor de desarrollo y abre la aplicación en el navegador, normalmente en http://localhost:3000. Permite realizar cambios en el código y ver los resultados de inmediato gracias a la recarga en caliente (Hot Module Replacement).
#### build 
- Este comando crea una versión optimizada de la aplicación para producción. Agrupa y minimiza el código, optimiza las imágenes y genera los archivos necesarios para desplegar la aplicación en un servidor, guardando los resultados en el directorio build.
#### test
- Este comando ejecuta los tests de la aplicación utilizando Jest, el framework de pruebas incluido en CRA. Inicia un entorno interactivo donde puedes ejecutar pruebas y ver los resultados, ayudando a garantizar que el código funcione correctamente.
#### eject 
- Este comando expone la configuración oculta de CRA, permitiendo que el desarrollador personalice los archivos de configuración de herramientas como Webpack, Babel y ESLint. Sin embargo, es irreversible y agrega complejidad al proyecto, por lo que se recomienda usarlo solo si es realmente necesario.

:::tip 
- En la carpeta raiz del proyecto , se creara una carpeta con el nombre de la aplicación.
:::

#### Comparación con Vite
-	Desarrollo más rápido: Vite generalmente ofrece una experiencia de desarrollo más rápida gracias a su enfoque en la carga de módulos y HMR (Hot Module Replacement) eficiente, mientras que CRA puede ser un poco más lento al iniciar.
-	Configuración más flexible: Vite es más flexible en términos de personalización, ya que puedes agregar o quitar fácilmente configuraciones según tus necesidades.
- Tanto Create React App como Vite son herramientas efectivas para crear aplicaciones de React puro. La elección entre ellas depende de tus necesidades específicas y preferencias de desarrollo. Si buscas una configuración rápida y sencilla, CRA es una excelente opción. Si prefieres una experiencia de desarrollo más rápida y flexible, Vite puede ser más adecuado.


:::tip Información
- [Vite](https://vite.dev/)
- [Iniciar un nuevo proyecto de React](https://es.react.dev/learn/start-a-new-react-project)
:::

## Directorios

### README.md
- Depende del framework o herramienta que hayas usado para crear el proyecto, el contenido puede variar. Por lo general, incluye documentación y comandos para compilar, probar, ejecutar la aplicación, entre otros.

### package.json
- Contiene un registros de los modulos que utiliza react y sus versiones.

:::tip 
 - Si se elimina la carpeta node_modules  , utilice el comando npm install o npm i para instalar los modulos.
 - El comando lee el archivo package.json y crea la carpeta node_modules con los modulos necesarios para ejecutar el proyecto.
:::
- Contiene los scripts.
### .gitignore
- Ignora el seguimiento de X cantidad de carpetas y archivos
### carpeta public 
- La carpeta public en una aplicación de React es donde se almacenan los archivos estáticos que no requieren procesamiento previo. A diferencia de la carpeta src, que contiene el código fuente que se compila, la carpeta public se utiliza para almacenar archivos que se sirven tal cual al navegador. 
- Contenido típico de la carpeta public:
  - index.html: La plantilla HTML principal que se utiliza para renderizar la aplicación. Puedes personalizarlo para incluir metadatos, enlaces a hojas de estilo externas o scripts adicionales.
  - Imágenes y otros archivos estáticos: Puedes colocar imágenes, fuentes, y otros activos que no cambian con frecuencia y que deseas que sean accesibles directamente desde la URL.
  - manifest.json: Este archivo se utiliza para definir la aplicación como una aplicación web progresiva (PWA). Contiene información sobre el nombre de la aplicación, el icono, y otros detalles que ayudan a mejorar la experiencia de usuario en dispositivos móviles.
  - favicon.ico: Este es el ícono que se muestra en la pestaña del navegador cuando la aplicación está abierta.
#### index.html 
- El componente principal se renderizara en el div con la id root.

:::tip Renderizar
- Renderizar en el contexto de React significa convertir un componente (o una serie de componentes) en elementos del DOM (Document Object Model) que el navegador puede mostrar.
- Detalles del proceso:
  - Conversión a HTML: Cuando un componente se renderiza, React crea la estructura  HTML correspondiente. Lo que devuelve un componente (por ejemplo &lt;div> o un &lt;h1>) se convertirá en etiquetas HTML que se insertarán en el DOM.
  - Aplicación de CSS: Si el componente tiene estilos asociados, ya sea mediante estilos en línea, hojas de estilo CSS externas o módulos CSS, esos estilos se aplican a los elementos HTML generados. Esto da forma a cómo se verá visualmente el componente en la página.
  - Interactividad con JavaScript: La lógica de JavaScript en el componente (por ejemplo, funciones de manejo de eventos, gestión del estado, etc.) sigue estando activa. Esto significa que la aplicación puede responder a interacciones del usuario (como clics o entradas de formulario) y actualizar el DOM de manera dinámica.
:::

```html
 <div id="root"></div>
```
### carpeta src
- La carpeta src (source) en una aplicación de React es donde resides la mayor parte del código de tu aplicación. Es el lugar  donde escribirás y organizarás el código de tu aplicación, incluyendo componentes, estilos, y cualquier lógica específica que necesites.
- Contenido típico de la carpeta src:
  - index.js o main.js: Este es el archivo principal de entrada de tu aplicación, donde se monta el componente raíz (usualmente llamado App) en el DOM.
  - App.js: Componente principal que actúa como el contenedor de la aplicación, donde puedes definir la estructura general y la navegación.
  - Componentes: Puedes crear subcarpetas para componentes específicos dentro de src, como components, pages o containers, donde colocas los distintos componentes de tu aplicación.
  - Estilos: Puedes incluir archivos de estilos (CSS o SASS) relacionados con los componentes para manejar la presentación visual.
  - Imágenes y assets: También es común tener una carpeta para almacenar imágenes y otros activos que tu aplicación utilizará.


#### index.js
- reportWebVitals es una función que se utiliza para medir el rendimiento de la aplicación y proporcionar informes sobre métricas (datos que se expresan numéricamente) clave, lo que ayuda a identificar problemas de rendimiento y optimizar la experiencia del usuario.
- El [Modo Estricto (StrictMode)](https://es.react.dev/reference/react/StrictMode) es un componente de React que ayuda a identificar problemas potenciales únicamente en los componentes que contiene dentro, es decir, los que se pasan como children (prop). Activa advertencias y verificaciones adicionales durante el desarrollo, como el uso de características obsoletas o prácticas de codificación inseguras. Es importante destacar que su alcance se limita a los componentes hijos que contiene y no afecta el comportamiento en producción, ya que está diseñado exclusivamente para propósitos de desarrollo.
- ReactDOM  - [ReactDOM   ](https://es.reactjs.org/docs/rendering-elements.html) se encarga de actualizar el DOM para renderizar los elementos de React. ReactDOM es la biblioteca responsable de interactuar con el DOM del navegador; se encarga de renderizar los elementos de React y actualizar la interfaz de usuario en respuesta a cambios en el estado o las propiedades, asegurando que la aplicación se mantenga sincronizada con el DOM.
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

```
:::tip Observacion 
con ReactDOM  y su método render renderizamos un componente(App) en el index.html
:::
#### App.js
- Es el componente principal que se renderiza en el div de index.html
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
- Como has visto, hemos estado usando lo que parece ser HTML en nuestro código React, pero en realidad no es HTML. Esto se llama JSX, que significa JavaScript XML.
- El uso de JSX no es obligatorio para escribir React. 
- Detrás de escena, React utiliza la función createElement para procesar los componentes. Esta función toma:
  -	La etiqueta del elemento o el tipo de elemento (por ejemplo, div, h1, button)
  -	Las propiedades
  -	Otros atributos definidos en el componente
- Y ejecuta código JavaScript para generar los elementos HTML necesarios.
- En esencia, cada vez que renderizas un componente, React transforma la descripción del componente (lo que se retorna en formato JSX, que describe como debería verse el componente en el DOM) en elementos HTML que el navegador puede interpretar. Este proceso permite a React construir una representación del DOM, que se actualizará de manera eficiente cuando los datos o el estado de la aplicación cambien.

#### Diferencias clave al usar JSX
- JSX está más cerca de JavaScript que de HTML, por lo que existen algunas diferencias importantes a tener en cuenta.

##### className en lugar de class
-	En JSX, se usa className para agregar clases CSS, ya que class es una palabra reservada en JavaScript.
-	Ejemplo:
```js
<div className="container"></div>
```
##### Propiedades y métodos en camelCase
-	Los atributos y eventos en JSX siguen la convención camelCase.
-	Ejemplo:
```js
<button onClick={handleClick}>Click Me</button>
```
##### Etiquetas de cierre automático
-	Las etiquetas sin contenido deben terminar con una barra inclinada (/).
-	Ejemplo:
```js
<img src="image.jpg" alt="example" />
```
##### Incrustar expresiones de JavaScript
-	Puedes insertar expresiones de JavaScript dentro de JSX usando llaves {}. Estas expresiones pueden incluir variables, funciones y propiedades.
-	Ejemplo:
```js
const name = "Juan";
<h1>Hello, {name}!</h1>
```



## Componente
- Un componente en React es una función que describe cómo debería verse una interfaz o una parte de ella.
- Los componentes permiten dividir la interfaz de usuario (UI) en piezas reutilizables e independientes, facilitando el desarrollo y mantenimiento de la aplicación.
#### Características clave de un componente
##### 1.	Es una función que devuelve algo
- Generalmente, lo que devuelve es un elemento React en formato JSX (parecido a HTML).
##### 2.	Exportación del componente
-	Para poder usar el componente en otras partes del código, la función debe ser exportada.
-	Ejemplo:
```js
function MiComponente() {
  return <h1>Hola, soy un componente</h1>;
}

export default MiComponente;

```
##### 3. JSX en el return
- Aunque parece código HTML, lo que se devuelve en el return realmente es JSX.

##### 4. Uso de paréntesis para el return
-	El contenido del return suele ir entre paréntesis si ocupa varias líneas.
-	Ejemplo:

```js
function MiComponente() {
  return (
    <div>
      <h1>Hola, Mundo</h1>
      <p>Este es un ejemplo de componente.</p>
    </div>
  );
}

```
#### Sintaxis para renderizar un componente
- La sintaxis para renderizar un componente es muy similar a la de una etiqueta HTML:
  - Autocerrado: `<NombreComponente />`
  - Etiqueta de apertura y cierre: `<NombreComponente> </NombreComponente>`


:::tip
-	El nombre de la función es el nombre del componente.
-	El nombre del componente SIEMPRE debe comenzar con mayúscula. Esto es fundamental porque React distingue entre componentes y etiquetas HTML por la mayúscula inicial.


:::
















:::tip Info
- [Components and Props (Antiguo)](https://reactjs.org/docs/components-and-props.html)
- [Your First Component](https://beta.reactjs.org/learn/your-first-component)
- [Passing Props to a Component](https://beta.reactjs.org/learn/passing-props-to-a-component)
- [JSX In Depth (Antiguo)](https://reactjs.org/docs/jsx-in-depth.html)
:::


### Dom Elements
- React implementa un DOM independiente (conocido como Virtual DOM) que mejora el rendimiento y asegura la compatibilidad entre navegadores. Este "DOM independiente" tiene algunas diferencias clave respecto al DOM tradicional del navegador.

#### Diferencias y características principales
##### Propiedades y atributos camelCase
-	En React, todas las propiedades y atributos del DOM deben escribirse en camelCase.
-	Excepciones: Atributos como aria- o data- que se mantienen en su formato original.
- Ejemplo:
```js
<div tabIndex={-1} />  // camelCase
<div data-id="123" />  // Excepción para data-  

```
#### Atributos especiales
##### checked 
-	Se utiliza en &lt;input> de tipo checkbox o radio:
    -	checked: Define si el elemento está marcado. Es útil para crear componentes controlados.
    -	defaultChecked: Define si se marca al montarse por primera vez. Es útil en componentes no controlados.
- Ejemplo:
```js
<input type="checkbox" checked={true} />         // Componente controlado
<input type="checkbox" defaultChecked={true} /> // Componente no controlado

```
##### dangerouslySetInnerHTML
- Es el reemplazo de React para el uso de innerHTML.
- Debes pasar un objeto con la propiedad __html para recordar que su uso puede ser peligroso (riesgo de ataques XSS).
- Ejemplo:
```js
<div dangerouslySetInnerHTML={{ __html: "<p>Peligroso</p>" }} />
```
##### htmlFor
- Reemplaza el atributo for debido a que es una palabra reservada en JavaScript.
- Ejemplo:
```js
<label htmlFor="inputId">Etiqueta</label>
<input id="inputId" />

```
##### Nombres de clases
- Para especificar una clase CSS, se usa el atributo className en lugar de class.
- Esto aplica a todos los elementos DOM regulares y SVG como &lt;div>, &lt;a>, etc.
- Ejemplo:
```js
<div className="mi-clase-css"></div>
```
:::tip
- Si usas React con componentes web (algo poco común), puedes usar el atributo class en su lugar.
:::

##### Estilos CSS en línea
- React permite agregar estilos usando el atributo style, el cual acepta un objeto JavaScript con propiedades camelCase:
  -	Las propiedades CSS deben escribirse en camelCase, para ser coherentes con las APIs nativas del DOM.
  -	React agrega automáticamente el sufijo "px" a propiedades numéricas (excepto cuando se especifican otras unidades).
  -	Los prefijos de navegador que no sean ms deben comenzar con mayúscula.
- Ejemplo:
```js
<div style={{ backgroundColor: "blue", WebkitTransition: "all 0.3s" }}>
  Ejemplo de estilos
</div>

```
- Ejemplo con unidades personalizadas:
```js
<div style={{ margin: "10rem", padding: "5%" }} />
```
##### SuppressContentEditable 
- Cuando un elemento con hijos también tiene el atributo contentEditable, React muestra una advertencia porque este comportamiento puede fallar. El atributo suppressContentEditableWarning suprime dicha advertencia.
- Ejemplo:
```jsx
<div contentEditable suppressContentEditableWarning={true}>
  Editable sin advertencia
</div>
```
#### Todos los atributos HTML admitidos
- React utiliza una API centrada en JavaScript para el DOM y utiliza la convención camelCase. Esta convención es coherente con la forma tradicional de manipular el DOM (APIs nativas del DOM) con JavaScript.
- Ejemplo:
```js
<div tabIndex={-1} />      // Similar a node.tabIndex en el DOM
<div className="Button" /> // Similar a node.className en el DOM
<input readOnly={true} />  // Similar a node.readOnly en el DOM


```




:::tip info
- [DOM Elements (antiguo)](https://reactjs.org/docs/dom-elements.html)
- [Common components (e.g. &lt;div>)](https://beta.reactjs.org/reference/react-dom/components/common )
- [&lt;input>](https://react.dev/reference/react-dom/components/input)
- [&lt;option>](https://react.dev/reference/react-dom/components/option)
- [&lt;progress>](https://react.dev/reference/react-dom/components/progress)
- [&lt;select>](https://react.dev/reference/react-dom/components/select)
- [&lt;textarea>](https://react.dev/reference/react-dom/components/textarea)
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

#### index.js
### ReactDom.render() = Renderiza algo
Tiene dos argumentos:
1. El componente principal (con el que vamos a trabajar)
2. El elemento con la id root (del public/index.html)

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
- El componente principal se renderiza adentro del elemento con la id root.
- Dentro del elemento con la id root se genera el HTML,CSS,JavaScript necesario para representar el componente principal.
- Básicamente convierte el código JSX del componente principal en HTML,CSS,JavaScript y lo añade adentro del elemento con la id root.
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
- Muchas veces, tendrás una lista (colección) de datos y querrás mostrar varios componentes donde cada uno representa un dato. Para hacerlo, puedes usar las funciones que JavaScript ofrece para trabajar con arrays, como `filter()` y `map()`.
- En React, estas funciones te permiten tomar tu lista de datos, filtrarla para mostrar solo lo que necesitas (opcional) y luego transformar cada elemento de esa lista en un componente. Esto convierte tu array de datos en un array de componentes que React puede renderizar en la pantalla.
#### Renderizar datos desde Arrays
- Digamos que tienes una lista de contenido:
```html
<ul>
  <li>Creola Katherine Johnson: matemática</li>
  <li>Mario José Molina-Pasquel Henríquez: químico</li>
  <li>Mohammad Abdus Salam: físico</li>
  <li>Percy Lavon Julian: químico</li>
  <li>Subrahmanyan Chandrasekhar: astrofísico</li>
</ul>
```
- La única diferencia entre esos elementos &lt;li> de la lista es su contenido (dato). A menudo necesitarás renderizar o mostrar el mismo componente varias veces, pero con contenido diferente, cuando estés construyendo interfaces. Esto es común en casos como listas de comentarios o galerías de fotos de perfiles. En estas situaciones, puedes organizar estos datos en arrays u objetos de JavaScript y usar métodos como `map()` o `filter()` para generar y renderizar listas de componentes a partir de ellos.
#### Pasos a seguir
##### 1.	Mueve / Guarda los datos en un array
```js
const people = [
  'Creola Katherine Johnson: matemática',
  'Mario José Molina-Pasquel Henríquez: químico',
  'Mohammad Abdus Salam: físico',
  'Percy Lavon Julian: químico',
  'Subrahmanyan Chandrasekhar: astrofísico'
];

```
##### 2. Crea un componente por cada elemento del Array, creando un array de Elementos React (nodos JSX)
```js
const listItems = people.map(person => <li>{person}</li>);
```
##### 3. Devuelve listItems desde tu componente envuelto en un &lt;ul>:
```js
return <ul>{listItems}</ul>;
```
##### El resultado completo seria
```js
const people = [
  'Creola Katherine Johnson: matemática',
  'Mario José Molina-Pasquel Henríquez: químico',
  'Mohammad Abdus Salam: físico',
  'Percy Lavon Julian: químico',
  'Subrahmanyan Chandrasekhar: astrofísico'
];

export default function List() {
  const listItems = people.map(person =>
    <li>{person}</li>
  );
  return <ul>{listItems}</ul>;
}

```


#### Filtrar array de objetos
- Estos datos pueden ser estructurados incluso más:
```js
const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'matemática',
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'químico',
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'físico',
}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'químico',  
}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrofísico',
}];

```
- Digamos que quieres mostrar solo las personas cuya profesión sea 'químico'. Puedes usar el método `filter()` de JavaScript para devolver solo esas personas. Este método coge un array de objetos, los pasa por un «test» (una función que devuelve true o false), y devuelve un nuevo array de solo esos objetos que han pasado el test (que han devuelto true).
- Tú solo quieres los objetos donde profession es 'químico'. La función «test» para esto se ve como `(person) => person.profession === 'químico'`. 
#### Pasos a seguir
##### 1.	Crea un nuevo array solo de personas que sean «químicos», llamando al método `filter()`
```js
const chemists = people.filter(person =>
  person.profession === 'químico'
);

```
##### 2. Ahora mapea sobre chemists
```js

const listItems = chemists.map(person =>
  <li>
     <img
       src={getImageUrl(person)}
       alt={person.name}
     />
     <p>
       <b>{person.name}:</b>
       {' ' + person.profession + ' '}
       conocido/a por {person.accomplishment}
     </p>
  </li>
);


```
##### 3. Por último, devuelve el listItems de tu componente
```js
return <ul>{listItems}</ul>;
```
##### Ejemplo completo
```js title="App.js"
import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  const chemists = people.filter(person =>
    person.profession === 'químico'
  );
  const listItems = chemists.map(person =>
    <li>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        conocido/a por {person.accomplishment}
      </p>
    </li>
  );
  return <ul>{listItems}</ul>;
}


```
```js title="data.js"
export const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'matemática',
  accomplishment: 'los cálculos de vuelos espaciales',
  imageId: 'MK3eW3A'
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'químico',
  accomplishment: 'el descubrimiento del agujero de ozono en el Ártico',
  imageId: 'mynHUSa'
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'físico',
  accomplishment: 'la teoría del electromagnetismo',
  imageId: 'bE7W1ji'
}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'químico',
  accomplishment: 'ser pionero en el uso de cortisona, esteroides y píldoras anticonceptivas',
  imageId: 'IOjWm71'
}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrofísico',
  accomplishment: 'los cálculos de masa de estrellas enanas blancas',
  imageId: 'lrWQx8l'
}];

```
```js title="utils.js"
export function getImageUrl(person) {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    's.jpg'
  );
}

```

#### Prop Key
- Si probamos el ejemplo anterior tendremos una advertencia en la consola.
- Debes asignarle a cada elemento del array una key (cuyo valor es una cadena de texto (String) o un número) que lo identifique de manera única entre los demás elementos del array.
- Las keys indican a React qué objeto del array corresponde a cada componente, lo que le permite gestionarlos correctamente más adelante. Esto es especialmente crucial si los elementos del array pueden moverse (por ejemplo, debido a un reordenamiento), insertarse o eliminarse.
- Una key bien elegida ayuda a React a comprender exactamente qué ha cambiado, permitiendo realizar actualizaciones precisas en el árbol del DOM.
- Ejemplo:
```js
<li key={person.id}>...</li>
```
- En vez de generar keys sobre la marcha, deberías incluirlas en tus datos:	
```js title="data.js"
export const people = [{
  id: 0, // Usado en JSX como key
  name: 'Creola Katherine Johnson',
  profession: 'matemática',
  accomplishment: 'los cálculos de vuelos espaciales',
  imageId: 'MK3eW3A'
}, {
  id: 1, // Usado en JSX como key
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'químico',
  accomplishment: 'el descubrimiento del agujero de ozono en el Ártico',
  imageId: 'mynHUSa'
}, {
  id: 2, // Usado en JSX como key
  name: 'Mohammad Abdus Salam',
  profession: 'físico',
  accomplishment: 'la teoría del electromagnetismo',
  imageId: 'bE7W1ji'
}, {
  id: 3, // Usado en JSX como key
  name: 'Percy Lavon Julian',
  profession: 'químico',
  accomplishment: 'ser pionero en el uso de cortisona, esteroides y píldoras anticonceptivas',
  imageId: 'IOjWm71'
}, {
  id: 4, // Usado en JSX como key
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrofísico',
  accomplishment: 'los cálculos de masa de estrellas enanas blancas',
  imageId: 'lrWQx8l'
}];

```

```js title="App.js"
import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  const listItems = people.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}</b>
          {' ' + person.profession + ' '}
          conocido/a por {person.accomplishment}
      </p>
    </li>
  );
  return <ul>{listItems}</ul>;
}

```

#### Dónde conseguir tu key 
- Depende de la fuente de los datos:
  -	Datos de una base de datos: Si tus datos vienen de una base de datos, puedes usar las keys/ID de la base de datos, que son únicas por naturaleza.
  -	Datos generados localmente: Si tus datos son generados y persistidos localmente (p. ej. notas en una app de tomar notas), usa un contador incremental, `crypto.randomUUID()` o un paquete como uuid cuando este creando objetos.
#### Reglas de las keys 
-	Las keys tienen que ser únicas entre elementos hermanos. Sin embargo, está bien usar las mismas keys para nodos JSX en arrays diferentes.
-	Las keys no tienen que cambiar o ¡eso quitará su propósito! No las generes mientras renderizas.
#### ¿Por qué React necesita keys? 
- Imagina que los archivos de tu escritorio no tuvieran nombres. En vez de eso, tú te referirías a ellos por su orden — el primer archivo, el segundo, y así. Podrías acostumbrarte a ello, pero una vez borres un archivo, se volvería algo confuso. El segundo archivo se convertiría en el primero, el tercer archivo se convertiría en el segundo, y así.
- Los nombres de archivos en una carpeta y las keys JSX en un array tienen un propósito similar. Nos permiten identificar un objeto de manera única entre sus hermanos. incluso si la posición cambia debido a un reordenamiento, la key permite a React identificar al elemento a lo largo de su ciclo de vida.
- Ten en cuenta que tus componentes no reciben la key como una prop; esta es utilizada únicamente por React como una referencia interna. Si tus componentes necesitan un identificador (ID), debes pasarlo como una prop separada, por ejemplo: &lt;Profile key={id} userId={id} />.
- Ejemplo:
  - Tenemos un componente que renderiza un perfil de Usuario.
  - Y Queremos que cada perfil sea "unico" , osea que el estado de uno sea diferente al otro . Tambien necesitamos lograr que al modificar  uno , el otro se mantenga intacto (no se modifique ni se vuelva a renderizar).
  - Para solucionar este problema , se utiliza la props key en el componente que renderiza el perfil.
  - Con esto le estamos indicando a React que cada componente  es unico y tiene una ID que lo identifica.
  - React utiliza la ID para detectar que "Perfil" se modifico para volver a renderizarlo.

:::warning
- Podrías estar tentado a usar el índice del elemento en el array como su key. De hecho, eso es lo que React usará si tu no especifícas una key en absoluto. Pero el orden en el que renderizas elementos cambiará con el tiempo si un elemento es insertado, borrado, o si se reordena su array. El índice como key lleva a menudo a sutiles y confusos errores.
- No generes keys de forma dinámica, como por ejemplo con `key={Math.random()}`. Esto hará que las keys nunca coincidan entre renderizados, lo que provocará que React recree todos los componentes y el DOM en cada actualización. Esto no solo es ineficiente, sino que también puede hacer que se pierdan los datos de entrada del usuario en los elementos listados. En su lugar, utiliza identificadores (IDs) derivados de los datos.

:::


#### Conclusión
-	React usa la prop key para crear una relación entre el componente y el elemento DOM.
-	La biblioteca utiliza esta relación para determinar si el componente debe volver a renderizarse o no.
-	No se recomienda utilizar el índice de la matriz como key si sabe que la matriz no será estática(fija)
-	La key debe ser única en cada elemento.




#### Ejemplo

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


:::tip Documentación
- [Renderizado de listas](https://es.react.dev/learn/rendering-lists)
:::






## Manejando eventos
#### ¿Qué son los eventos en React?
- En React, los eventos funcionan de manera similar a los eventos en el DOM del navegador, pero tienen algunas diferencias clave en la sintaxis y la manera de manejarlos.
- Un evento en React es cualquier interacción del usuario con la interfaz, como un clic, la escritura en un campo de texto, mover el mouse, etc.

#### Características principales de los eventos en React
##### Nombres de eventos en camelCase
-	Los nombres de los eventos en React se escriben en camelCase, a diferencia de los eventos en HTML tradicional, que usan minúsculas.
-	Ejemplo: onClick, onChange, onSubmit.
- HTML tradicional:
```html
<button onclick="alert('Hola!')">Haz clic</button>
```
- React con JSX:
```js
<button onClick={() => alert("Hola!")}>Haz clic</button>
```

##### Manejadores de eventos como funciones
- En React, debes pasar una función como manejador del evento (Handler) en lugar de una cadena de texto. Esto hace que el manejo de eventos sea más limpio y poderoso.
- Ejemplo simple:
```js 
function handleClick() {
  alert("Hola desde React!");
}
<button onClick={handleClick}>Haz clic</button>
```
##### No uses paréntesis directamente
- Si pasas una función como manejador, no la llames directamente usando paréntesis (), porque se ejecutará inmediatamente al renderizar el componente.
- Usa solo la referencia a la función:
```js 
<button onClick={handleClick}>Haz clic</button>
```
- Si necesitas pasar parámetros, usa una función anónima:
```js
<button onClick={() => handleClick("Hola!")}>Haz clic</button>
```
##### Evento sintético (SyntheticEvent)
- React envuelve el objeto evento en su propio objeto llamado SyntheticEvent. Este objeto tiene las mismas propiedades y métodos que un evento del navegador, pero funciona de manera optimizada y compatible entre navegadores.
- Ejemplo de uso del evento:
```js 
function handleClick(event) {
  console.log(event.type); // Muestra "click"
}

<button onClick={handleClick}>Haz clic</button>


```
#### Como maneja los eventos react
##### Atributos de eventos en React
-	React maneja los eventos mediante atributos especiales en JSX, como onClick, onChange, onSubmit, entre otros.
-	Estos atributos son similares a los eventos en HTML nativo, pero en camelCase. Esto significa que se escriben con la primera letra de cada palabra en mayúscula, excepto la primera (por ejemplo, onClick en lugar de onclick).
##### Cada atributo representa un tipo de evento
- Cada uno de estos atributos corresponde a un tipo específico de evento o acción que debe ocurrir para que el manejador del evento se ejecute. Sería el primer parámetro de addEventListener en JavaScript, que define qué tipo de evento queremos escuchar.
- Algunos ejemplos:
  -	onClick: Se ejecuta cuando el usuario hace clic en un elemento (botón, enlace, etc.).
  -	onChange: Se activa cuando el valor de un campo de formulario (como un input o textarea) cambia.
  -	onSubmit: Se ejecuta cuando se envía un formulario.
##### Valor del atributo: una función
-	El valor de estos atributos es una función, y esta función se ejecutará cuando el evento ocurra.
-	Este valor es como el segundo parámetro de addEventListener, que es la función que se ejecuta cuando se dispara el evento.
#### Ejemplo
-  Si tienes un evento onClick en React, el valor será una función que React ejecutará cuando el botón sea clickeado:
```js 
<button onClick={handleClick}>Haz clic</button>
```
:::tip Observación 
- En este caso:
  -	onClick es el atributo de evento.
  -	handleClick es la función que se ejecutará cuando el evento ocurra (es decir, cuando el usuario haga clic en el botón).
:::
#### Relación con AddeventListener
- En Javascript los eventos se manejan de la siguiente [forma](../Javascript/DOM.md#addeventlistener):
```js
NodeElement.addEventListener(event, handler) 
```
:::tip Observación 
-	NodeElement: Representa un elemento del DOM (como un botón, una entrada, etc.) en el cual tiene que ocurrir la acción para que se active el evento, este sería el componente que contiene el atributo que representa un tipo de evento(event).
-	event: Es el tipo de evento que se va a escuchar, como "click", "submit", "input", etc. En React, esto se corresponde con el atributo de evento que usas en JSX, como onClick, onSubmit, onChange, etc.
-	handler: Es la función que se ejecutará cuando el evento ocurra. En React, el valor del atributo que representa el tipo de evento es la función que se ejecutará cuando el evento se active.
:::






#### Ejemplo
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

:::tip Explicación 
-	onClick es un tipo de evento
-	Sintaxis : tipoDeEvento = {código JS }
-	Sintaxis : tipoDeEvento = {nombre función}
-	La función o el código JS se ejecutará cada vez que se active el evento.
-	La función se especifica sin paréntesis.
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
:::tip Observación 
- Cuando queremos pasar parámetros a una función que actuara como manejador de evento no podemos hacerlo directamente en la sintaxis del evento. React ejecutaría la función inmediatamente durante el renderizado, en lugar de esperar a que se dispare el evento. Para solucionar esto, usamos una función anónima.
- La función anónima actúa como un intermediario. Esta función anónima se ejecuta cuando se activa el evento, y dentro de ella llamamos a la función con los parámetros que necesitamos.


:::

:::tip Documentación
- [Manejando eventos (antiguo)](https://es.reactjs.org/docs/handling-events.html)
- [Responder a eventos](https://es.react.dev/learn/responding-to-events)
:::


## Actualizacion React 18
- En React 18, se introdujo el método `ReactDOM.createRoot()` como una mejora al proceso de renderizado de las aplicaciones React. 
- Con ReactDOM.createRoot() tenemos las siguientes mejoras:
  1.	Modo concurrente habilitado: Permite que React pause, interrumpa o reanude trabajos en segundo plano sin bloquear la interfaz del usuario, mejorando la experiencia general.
  2.	Compatibilidad con nuevas características: Como la API de streaming server-side rendering (SSR) y mejoras en Suspense.
  3.	Renderizado más eficiente: Reduce bloqueos y hace que las aplicaciones sean más receptivas.

#### ¿Qué es ReactDOM.createRoot()?
- `createRoot()` es una nueva API que utiliza React y que reemplaza el método ReactDOM.render() para inicializar y renderizar aplicaciones React. Su principal objetivo es habilitar el modo concurrente, una característica que mejora el rendimiento al permitir que React gestione mejor las actualizaciones y renders.

#### ¿Por qué se introdujo?
- Mejor manejo de renders: Las aplicaciones modernas requieren una experiencia fluida, y el modo concurrente ayuda a React a priorizar tareas importantes.
- Preparación para nuevas características: React está evolucionando hacia arquitecturas más complejas (como Server-Side Rendering ), y `createRoot()` es la base para estas mejoras.

#### Sintaxis con createRoot()
```js 
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


```
:::tip Observación 
- `ReactDOM.createRoot()`:
  - Este método toma como argumento un elemento HTML del archivo index.html, donde React renderizara el componente principal (aplicación).
  - Básicamente, inicializa el contenedor raiz que usara React para manipular el DOM.
  - Ejemplo:
      - `const root = ReactDOM.createRoot(document.getElementById('root'));`
      - Aquí, `document.getElementById('root')` selecciona el contenedor raíz (un &lt;div> o cualquier otro elemento HTML).
- `root.render()`:
  - Este método recibe el componente principal (o cualquier JSX válido) que se va a renderizar en el contenedor raíz.
  -  A partir de aquí, React toma el control del DOM dentro del contenedor especificado.
  -  Ejemplo:
      - `root.render(<App />);`
:::



#### Importancia de esta separación
- Separar la creación del contenedor raíz (`createRoot()`) del renderizado (`root.render()`) permite a React manejar más eficientemente tareas como:
  -	Actualizaciones concurrentes: Pausar y reanudar renders para mejorar la experiencia del usuario.
  -	Server-side Rendering (SSR): Integración más fluida con aplicaciones que usan renderizado en el servidor.
  -	Suspense mejorado: Soporte para carga de datos y manejo de estados asíncronos.

#### Cambios respecto a ReactDOM.render()
- Anteriormente, con React 17 o versiones previas, se utilizaba el método ReactDOM.render() de esta forma:
```js 
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
ReactDOM.render(<App />, document.getElementById('root'));
```





## Crear componente (NO PRINCIPAL)
- Los componentes en React permiten separar la interfaz de usuario en piezas independientes y reutilizables, lo que facilita su desarrollo, mantenimiento y comprensión. Esto también permite pensar en cada pieza de forma aislada.
- Dentro de la carpeta src, suele haber una subcarpeta llamada components, donde se ubican los componentes que utiliza la aplicación (excluyendo el componente principal).
- Generalmente, los componentes creados en components se importan y renderizan dentro de App.jsx (el componente principal de la aplicación) o en otros componentes, que a su vez son renderizados en el componente principal.
#### Ejemplo
- Creamos la carpeta components en src


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
:::tip Documentación
- [Componentes y propiedades (antiguo)](https://es.reactjs.org/docs/components-and-props.html )
- [Tu primer componente](https://es.react.dev/learn/your-first-component)
- [Pasar props a un componente](https://es.react.dev/learn/passing-props-to-a-component)
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
- Los Fragmentos se utilizan para que un componente pueda retornar múltiples elementos, sin agregar nodos extra al DOM.
- En los ejemplos anteriores, el componente Frutas solo devuelve un elemento div. Sin embargo, si además del div queremos devolver otro elemento, podemos utilizar un Fragmento para evitar envolverlos innecesariamente en un contenedor adicional:


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
:::tip Documentación
- [Fragmentos (antiguo)](https://es.reactjs.org/docs/fragments.html)
- [&lt;Fragment> (&lt;>...&lt;/>)](https://es.react.dev/reference/react/Fragment)
:::
## Props
- En React, una prop (abreviatura de "property") es un mecanismo que permite pasar datos de un componente padre a un componente hijo. Las props son similares a los argumentos de una función: proporcionan información que el componente hijo puede usar para personalizar su comportamiento o apariencia.
#### Características clave de las props
1.	Inmutables:
  - Las props son de solo lectura, lo que significa que un componente no puede modificarlas directamente. Si necesitas cambiar su valor, deberás hacerlo en el componente padre que las envió.
2.	Unidireccionales:
  - El flujo de las props siempre es de arriba hacia abajo (de un componente padre a un componente hijo). Esto asegura que los datos fluyan de forma predecible en tu aplicación.
3.	Similares a los atributos de HTML:
  - Cuando usas un componente en JSX, puedes pasar props como si fueran atributos de un elemento HTML. Por ejemplo:
```js
<MiComponente nombreProp="Valor" />
```
4.	Personalizan el comportamiento o el contenido del componente:
    - Las props permiten que un componente sea reutilizable y se adapte a diferentes situaciones según los datos que reciba.
#### Declaración del Componente que Recibe Props (datos) del padre
- Las props se reciben como `argumento` en una función de componente o en `this.props` si usas clases.
- Sintaxis en un Componente Funcional:
```js
function MiComponente(props) {
  return <h1>Hola, {props.nombre}!</h1>;
}

```
- Con Desestructuración:
```js
function MiComponente({ nombre }) {
  return <h1>Hola, {nombre}!</h1>;
}

```
- Sintaxis en un Componente de Clase:
```js
class MiComponente extends React.Component {
  render() {
    return <h1>Hola, {this.props.nombre}!</h1>;
  }
}

```

#### Pasar Props desde el Componente Padre
- Cuando usas un componente en JSX, puedes pasar props como si fueran atributos de HTML:
```js
function App() { return <MiComponente nombre="Carlos" />; }
```
:::tip Observación
- En este ejemplo:
  -	`nombre="Carlos"` es la prop que se pasa al componente MiComponente.
  -	nombre es el nombre de la prop y “Carlos” el valor.
  -	El componente hijo (MiComponente) puede acceder al valor de nombre a través de props.nombre.
:::

#### Uso de Props con Valores Dinámicos
- Puedes pasar cualquier tipo de valor como una prop: cadenas, números, booleanos, objetos, arrays, o incluso funciones.
- Cadenas:
```js
<MiComponente nombre="Carlos" />
```
- Números:
```js
<MiComponente edad={25} />
```
- Booleanos:
```js
<MiComponente activo={true} />
```
- Objetos:
```js
const usuario = { nombre: "Carlos", edad: 25 };
<MiComponente datos={usuario} />

```
- Funciones:
```js
function manejarClick() {
  alert("Botón presionado");
}
<MiComponente onClick={manejarClick} />

```
#### Pasar Múltiples Props
- Puedes pasar tantas props como necesites:
```js
function Perfil({ nombre, edad, ocupacion }) {
  return (
    <div>
      <h1>{nombre}</h1>
      <p>Edad: {edad}</p>
      <p>Ocupación: {ocupacion}</p>
    </div>
  );
}

function App() {
  return <Perfil nombre="Ana" edad={30} ocupacion="Ingeniera" />;
}

```

#### Props por Defecto (defaultProps)
- Puedes establecer valores predeterminados para las props si no se pasan desde el padre:
```js
function MiComponente({ nombre = "Invitado" }) {
  return <h1>Hola, {nombre}!</h1>;
}

// Alternativamente:
MiComponente.defaultProps = {
  nombre: "Invitado",
};

```
:::tip Observación
- Si nombre no se pasa como prop, su valor será "Invitado".
:::

#### Validación de Props con prop-types
- React permite validar los tipos de las props usando la librería prop-types:
```js
import PropTypes from 'prop-types';

function MiComponente({ nombre, edad }) {
  return (
    <div>
      <h1>Hola, {nombre}!</h1>
      <p>Edad: {edad}</p>
    </div>
  );
}

MiComponente.propTypes = {
  nombre: PropTypes.string.isRequired, // `nombre` debe ser una cadena y es obligatorio
  edad: PropTypes.number,             // `edad` debe ser un número
};

```
#### Children como Prop
- El contenido de la etiqueta que representa el componente, es el valor de la prop children:
```js
function Tarjeta({ children }) {
  return <div className="tarjeta">{children}</div>;
}

function App() {
  return (
    <Tarjeta>
      <h1>Hola, mundo!</h1>
      <p>Este es el contenido de la tarjeta.</p>
    </Tarjeta>
  );
}

```
:::tip Observación
- En este caso, props.children contendrá lo que está dentro de las etiquetas `<Tarjeta>...</Tarjeta>`.

:::



#### Ejemplo

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
-	Todos los componentes de React deben actuar como funciones puras.
-	Tales funciones son llamadas “puras” porque no tratan de cambiar sus entradas(props), y siempre devuelven el mismo resultado para las mismas entradas.
-	Por supuesto, las interfaces de usuario de las aplicaciones son dinámicas y cambian con el tiempo. En la siguiente sección, introduciremos un nuevo concepto de “estado”.
-	En poca palabra, NO SE DEBE CAMBIAR/MODIFICAR LOS PROPS.
:::

## Estado del componente
- En React, el estado de un componente es una forma de almacenar información dinámica que puede cambiar con el tiempo y que afecta cómo se muestra el componente. Cada vez que el estado cambia, React vuelve a renderizar (redibujar) el componente para reflejar esos cambios en la interfaz.
- Características clave del estado:
  1.	Dinámico: Cambia con las interacciones del usuario o eventos externos.
  2.	Interno: Pertenece a un componente específico y no es accesible directamente por otros (a menos que se pase como prop).
  3.	Controlado: Se gestiona y actualiza mediante funciones específicas.
- Los hooks en React son una herramienta que te permite crear y manejar el estado (entre otras cosas) en los componentes funcionales.
- Antes de que existieran los hooks, solo los componentes de clase podían tener estado. Ahora, gracias a hooks como useState, puedes agregar y administrar estado incluso en componentes funcionales, que son más simples y fáciles de entender.
-	El estado le permite a los componentes de React cambiar su salida a lo largo del tiempo en respuesta a acciones del usuario, peticiones a servidores y cualquier otra cosa.
- Para hacer cambios(cambiar de estado) vamos a utilizar hooks.
#### Analogía: El estado y los hooks como una taza de café
- Imagina que un componente es una taza en la que sirves café:
  1.	Estado inicial: Es como la cantidad inicial de café que hay en la taza (digamos, llena al 50%). Entonces el componente se renderiza con una taza que está llena al 50%.
  2.	Cambios en el estado: Si bebes o agregas más café, la cantidad de café cambia. React usa ese cambio (el nuevo nivel (cantidad) de café) para actualizar la "vista" de la taza.
  3.	Hook (useState): Es como tener un grifo y un botón para controlar la cantidad de café que hay en la taza:
      -	El grifo (como setContador) permite modificar la cantidad de café que contiene la taza.
      -	El botón (como onClick) es lo que dispara la acción de “modificar” la cantidad de café que contiene la taza.
- Por ejemplo:
  -	Cuando presionas el botón "Agregar café", React actualiza la vista de la taza para mostrar que ahora tiene más café.




#### Ejemplo

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
- En la Vista no se aumenta el contador.
- El contador empieza en 0 y se le puede aumentar las veces que quieras, pero en la vista siempre figura como 0. Esto pasa porque React no sabe que hay que volver a renderizar el mismo componente.
- Nada le indica a React que tenemos que volver a renderizar el componente para  actualizar contador.
- Necesitamos agregarle un estado al componente para que React sepa cuando lo debe volver a renderizar.
:::

#### Conclusion del concepto Estado

- Para eso esta el Estado, para decirle a React que cada vez que se cambie (en este caso el contador) algo del componente, se vuelva a renderizar.
- El estado sirve para monitorear datos dinámicos.
- Para datos dinámicos como el contador se debe usar Estado.

:::tip Documentación
- [El estado: la memoria de un componente](https://es.react.dev/learn/state-a-components-memory)
- [Sincronizar con Efectos](https://es.react.dev/learn/synchronizing-with-effects)

::: 

## Hooks
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




:::tip Documentación 
- [Inicio rápido](https://es.react.dev/learn)
- [React Reference Overview](https://es.react.dev/reference/react)
- [Hooks integrados en React](https://es.react.dev/reference/react/hooks)
- [Tutorial: Tres en línea](https://es.react.dev/learn/tutorial-tic-tac-toe)
- [Un vistazo a los Hooks (Antiguo)](https://es.legacy.reactjs.org/docs/hooks-overview.html)
:::






## useState
- useState es un hook que permite agregar y manejar estados en componentes funcionales.
#### ¿Cómo funciona?
-	Devuelve un valor del estado y una función para actualizarlo.
-	Se utiliza dentro de un componente funcional.






#### Ejemplo
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

:::tip Observación 
- Creamos un estado(contador) que cambia a medida que hacemos clic en el botón.
- El estado se gestiona mediante un hook llamado useState.
- Cada vez que se modifica el estado del contador, React vuelve a renderizar únicamente la parte del componente que depende de ese estado.
- Conclusión: Creamos un dato dinámico, y cuando cambia, React actualiza automáticamente la parte del código donde ese dato está involucrado, sin afectar el resto de la interfaz.

:::

### ¿Qué hace la llamada a useState?
- useState declara una variable de estado dentro de un componente funcional. Es una forma de gestionar y actualizar el estado en componentes funcionales, algo que antes solo era posible con clases mediante this.state.
- A diferencia de las variables normales, que desaparecen cuando se sale de la función, las variables de estado gestionadas por useState son conservadas por React. Esto significa que su valor se mantiene entre renders, permitiendo que la interfaz de usuario se actualice cuando cambia el estado.


### ¿Qué pasamos a useState como argumento?
- El único argumento que se pasa a useState() es el estado inicial. Este valor será el que tenga la variable de estado cuando el componente se renderiza por primera vez.
### Resumen
1.	Declaramos una variable de estado llamada contador y le asignamos el valor inicial de 0 usando useState.
2.	React recordará el valor de contador entre los re-renderizados. Recordará tanto el valor anterior como el actual del estado.
3.	Si queremos actualizar el valor de contador, podemos llamar a la función setContador con el nuevo valor.
4.	Cuando el usuario hace clic, llamamos a setContador con un nuevo valor. React entonces actualizará la variable de estado y actualizará el componente (solo la parte afectada por el estado).
5.	Los corchetes `[]` son parte de la desestructuración de arrays en JavaScript, una técnica para extraer valores de un array y asignarlos a variables.


:::tip Documentación
- [Usando el Hook de estado (antiguo)](https://es.reactjs.org/docs/hooks-state.html)
- [El estado: la memoria de un componente](https://es.react.dev/learn/state-a-components-memory)
- [useState](https://es.react.dev/reference/react/useState)

:::