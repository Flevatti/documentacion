---
sidebar_position: 12
---
# Otros

## Props

#### Los props  por defecto son true

- Si no pasas ningún valor para un prop, el valor predeterminado es true. 
- Estas dos expresiones JSX son equivalentes:

```jsx
<Componente1 valor/>
<Componente1 valor={true}/>

```
- Código completo:
```js

const Componente1 = ({valor}) => {
  console.log(valor);
  const mensaje = valor ? "True" : "False"
   return (
    <div>
      <h1>Valor booleano es {mensaje} </h1>
    </div>

   )
}

function App() {
  return (
    <div className="App" style={{margin:"auto" , textAlign:"center"}}>
      <Componente1 valor/>
      <Componente1 valor={true}/>
    </div>
  );
}



export default App;

```

#### Sintaxis spread
- Puedes usar la sintaxis “…” de Javascript, para pasar un objeto donde cada propiedad-valor es una props.
- Estos dos componentes Persona son equivalentes:

```js
const Persona = ({nombre , apellido}) => {
   return (
    <div>
      <h1> {nombre} {apellido} </h1>
    </div>

   )
}

function App() {
  const objetoPersona = {
    nombre : "Rodrigo",
    apellido: "Perez"
  }
  return (
    <div className="App" style={{margin:"auto" , textAlign:"center"}}>
       <Persona nombre="Rodrigo" apellido="Perez"  />
       <Persona {...objetoPersona}  />
    </div>
  );
}

```
- También podes desestructurar para seleccionar que props se van a utilizar y que props son opcionales.
```js
const Persona = ({nombre , apellido , ...otrasProps}) => {
  console.log(otrasProps)

    const persona  = Object.values( {
      nombre ,
      apellido ,
      ...otrasProps
    })

   return (
    <div>
       {
        persona.map(value => {
          return (
            <p>{value}</p>
          )
        })
       }
    </div>

   )
}

function App() {
  const objetoPersona = {
    nombre : "Rodrigo",
    apellido: "Perez" ,
    pais : "Argentina" ,
    idioma : "Español"
  }
  return (
    <div className="App" style={{margin:"auto" , textAlign:"center"}}>
       <Persona {...objetoPersona}  />
    </div>
  );
}



export default App;

```
:::tip Observación
- Las props nombre y apellido se van a utilizar y son importantes.
- Las otras son opcionales.


:::

#### Prop children
- El objeto props , tiene la propiedad children , cuyo valor son los “hijos” del componente.
- Es el equivalente al [&lt;slot>](https://fedeleva.github.io/documentacion/docs/vue/vue4#slots) de vue.

```js

const Persona = (props) => {
  console.log(props)


   return (
    <div>
      <h1>Componente Persona</h1>
       <p>{props.children}</p>
    </div>

   )
}

function App() {
  return (
    <div className="App" style={{margin:"auto" , textAlign:"center"}}>
       <Persona  ><p>Componente Children de Persona</p></Persona>
    </div>
  );
}



export default App;

```

:::tip Observación
Todo lo que envuelve el componente Persona lo contiene el valor de la propiedad children.
:::


## Router
-  Técnicamente, son tres paquetes diferentes: React Router, React Router DOM y React Router Native.
-  La principal diferencia entre ellos radica en su uso. React Router DOM es para aplicaciones web y React Router Native es para aplicaciones móviles creadas con React Native.
- Documentación:
   - [Router v5](https://v5.reactrouter.com/web/guides/philosophy)
   - [Router v6](https://reactrouter.com/en/main)


### Como Redireccionar
#### Navigate
- El componente &lt;Navigate> cambia la ubicación actual cuando se representa/renderiza.
- Tiene las props:
   -	To : Especifica a que ruta ir
   -	Replace : Especifica si se remplaza la ruta actual del historial por la nueva (especificada en el to)
   -	State : Un estado.

:::tip
- Como props tiene los argumentos de [useNavigate()](#usenavigate)
:::

```js
import { Navigate } from "react-router-dom";
const Inicio = () => {
    return (
        <>
        <h1>Inicio</h1>
        <Navigate to="/articulo" />
        </>
    )
}

export default Inicio;

```
:::tip Observación
Redirreciona a la url /articulo
:::

#### useNavigate()
- Devuelve una funcion que te  permite navegar a otra url.
- Se puede usar de varias formas:
   - 1 Forma: Recibe un String como primer argumento para especificar la url a ir y un objeto como segundo argumento, este contiene las propiedades replace y state
   - 2 forma: Recibe un numero para navegar por el historial. Por ejemplo, si le pasamos -1 es equivalente a presionar el botón atrás.


:::tip
- Sus argumentos  en la primera forma son las props del componente [Navigate](#navigate)

:::

```js
import { useNavigate } from "react-router-dom";

const Inicio = () => {
    const navigate = useNavigate();
    const redireccionar = () => {
      
      navigate("/articulo")
    }
    return (
        <>
        <h1>Inicio</h1>
        <button onClick={redireccionar}>Redireccionar</button>
        </>
    )
}

export default Inicio;

```

:::tip INTERESANTE
Este hook se creo para remplazar useHistory()
:::

#### useHistory()
- Devuelve un objeto history con diferentes métodos para navegar.
- React router v6 crea useNavigate()  con las mismas funciones y este se deja de usar.
- [Como actualizar a la V6](https://reactrouter.com/en/main/upgrading/v5)


#### redirect
- Este se recomienda utilizar en loaders y actions debido a que puede devolver  respuestas.
- Es una función que recibe un String con la URL a ir.

```js
   redirect("/articulo")
```
:::tip
- Se recomienda usar redirect en  loaders y actions en lugar de useNavigate en sus componentes cuando la redirección es en respuesta a los datos.
- [Loader](https://reactrouter.com/en/main/route/loader)
- [Action](https://reactrouter.com/en/main/route/action)
- [Redirect](https://reactrouter.com/en/main/fetch/redirect)
:::
### Componente Switch
- Muestra el primer elemento secundario &lt;Route> o &lt;Redirect> que coincide con la ubicación.
#### Problema
```js
import { Route } from "react-router";

let routes = (
  <div>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/:user">
      <User />
    </Route>
    <Route>
      <NoMatch />
    </Route>
  </div>
);

```
:::warning Problema
- Si la URL es /about, entonces &lt;About>, &lt;User>y &lt;NoMatch> se mostrarán porque todos coinciden con la ruta



:::
#### Solución
- &lt;Switch> es único en el sentido de que representa una ruta exclusivamente.
- De vez en cuando, sin embargo, queremos elegir solo un &lt;Route> para renderizar. Si estamos en /about no queremos coincidir también /:user (o mostrar nuestra página "404"). 
- He aquí cómo hacerlo con Switch:

```js
import { Route, Switch } from "react-router";
let routes = (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/:user">
      <User />
    </Route>
    <Route>
      <NoMatch />
    </Route>
  </Switch>
);

```

:::tip Observación
- Ahora, si estamos en /about, &lt;Switch> comenzará a buscar una coincidencia &lt;Route>. &lt;Route path="/about"/> coincidirá y &lt;Switch> dejará de buscar coincidencias y renderizara &lt;About>. 
- Del mismo modo, si estamos en /michaelentonces &lt;User>se renderizará
- La props exact , recibe un valor booleano ,   si es true solo  coincide si la url coincide con  location.pathname 



:::


:::tip
- En la nueva versión , se utiliza &lt;Routes> en lugar de &lt;Switch/>
- [Como actualizar a la V6](https://reactrouter.com/en/6.8.1/upgrading/v5#upgrade-all-switch-elements-to-routes)
:::

### useLocation()
- Este hook devuelve el objeto “location” actual.
- Esto puede ser útil si se desea realizar algún efecto secundario siempre que cambie la ubicación actual.
- Un objeto location tiene varias propiedades:
    - [Pathname](https://developer.mozilla.org/en-US/docs/Web/API/URL/pathname): Es un String que comienza con “/” seguido del resto de la URL hasta el “?”
    - Search : Es un String que comienza con “?” seguida de los key=values de la cadena consulta.
    - [Hash](https://developer.mozilla.org/en-US/docs/Web/API/URL/hash): Es un String que comienza con “#” seguido del identificador de fragmento de la URL.  
    - state : Es un objeto proporcionado por el Usuario . Contiene información adicional asociado con un location pero no aparece en la URL. Es útil para almacenar cualquier información que no desee incluir en la URL.
    - Key: Es un String único asociado con esta ubicación.


```js
import { useLocation } from 'react-router-dom';
const Inicio = () => {
    let location = useLocation();
    const mostrarDatos = () => {
      
       console.log(location);

    }
    return (
        <>
        <h1>Inicio</h1>
        <button onClick={mostrarDatos}>Mostrar Datos</button>
       
        </>
    )
}

export default Inicio;

```

### useRouteMatch
- Intenta hacer coincidir la URL actual de la misma manera que &lt;Route> haría.
- Es principalmente útil para obtener acceso a los datos de la coincidencia sin tener que renderizar un &lt;Route>.
- Este metodo devuelve un [objeto match](https://v5.reactrouter.com/web/api/match) si coinciden.

#### Ahora, en lugar de
```js
import { Route } from "react-router-dom";

function BlogPost() {
  return (
    <Route
      path="/blog/:slug"
      render={({ match }) => {
        // Haz lo que quieras con el match...
        return <div />;
      }}
    />
  );
}

```
#### Tu puedes hacer
```js
import { useRouteMatch } from "react-router-dom";

function BlogPost() {
  let match = useRouteMatch("/blog/:slug");

  // Haz lo que quieras con el match...
  return <div />;
}

```
:::tip info
- [useRouteMatch](https://v5.reactrouter.com/web/api/Hooks/useroutematch)
:::

### useMatch()
- Remplaza a useRouteMatch() en la V6.
- Intenta coincidir la ruta actual con una especifica y devuelve los datos de la coincidencia.
- Recibe un String  que puede ser un [patrón nuevo de la V6](https://reactrouter.com/en/main/upgrading/v5#note-on-route-path-patterns)  o una URL.
- [Como actualizar a React V6](https://reactrouter.com/en/main/upgrading/v5#replace-useroutematch-with-usematch)


```js
import { useMatch } from 'react-router-dom';
const Inicio = () => {
    let location = useMatch("/:id");
    const mostrarDatos = () => {
      
       console.log(location);

    }
    return (
        <>
        <h1>Inicio</h1>
        <button onClick={mostrarDatos}>Mostrar Datos</button>
       
        </>
    )
}

export default Inicio;

```
:::tip useMatch Tambien puede recibir un objeto pattern
- El objeto pattern es de la V6 y contiene tres propiedades:
   -	Path : Una ruta que ahora puede aceptar patrones
   -	End :  representa la  props strict de &lt;Route>
   -	caseSensitive : Representa la  props sensitive de &lt;Route>
:::

### Props/propiedad state



- Hay una props/propiedad de un objeto llamado status, que sirve para transferir información a una nueva URL (el mecanismo de transferencia es más parecido al método POST ya que no se envia por la URL).
- React Router utiliza un enfoque de enrutamiento declarativo basado en componentes. Lo que eso significa es que cuando desea crear una nueva ruta, renderiza un componente Route.
- Por ejemplo, supongamos que queremos renderizar un componente Dashboard cada vez que un usuario navega al /dashboard. Para hacer eso, renderizaríamos un Route que se parecía a esto.

```jsx
<Route path="/dashboard" element={<Dashboard />} />
```
#### En lugar de pasarle información a través de props , podemos pasarle información a través de “State”.


#### Pasos a seguir
#### 1- Enviar información
- Hay varias maneras, pero todas consiste en crear un objeto con una propiedad State (este objeto se usará como argumento en alguna funcion) o usar una props llamada State.
- La infomacion que contenga esta propiedad/props , es lo que se enviara a la nueva URL.
- En el router v6, el componente Link tiene la props State para enviar información.
```jsx
<Link to="/inicio" state={{informacion:"Esta información es importante"}}>Inicio</Link>
```
#### 2- Acceder a los datos
- Para acceder a los datos, podemos usar el hook useLocation().
```js
import { useLocation } from 'react-router-dom';
const Inicio = () => {
    let location = useLocation();
    const mostrarDatos = () => {
      
       console.log(location.state);

    }
    return (
        <>
        <h1>Inicio</h1>
        <button onClick={mostrarDatos}>Mostrar Datos</button>
       
        </>
    )
}

export default Inicio;

```

### Loaders y Actions
- Son “funciones” nuevas proporcionadas por React Router V6
- Solo funcionan si usas un enrutador de datos.

:::tip info
- [Elegir un enrutador](https://reactrouter.com/en/main/routers/picking-a-router)
- [Action](https://reactrouter.com/en/main/route/action)
- [Loader](https://reactrouter.com/en/main/route/loader)
:::

## ESLINT / PRETTIER
### Conceptos
#### ¿Qué ES LINTING?
Es inevitable tener errores en el código que desarrollas para una aplicación, y todos sabemos que estos errores son malos, algunos causan problemas en la interfaz que generan incomodidad en los usuarios, otros comprometen la seguridad del sistema o simplemente rompen todo y la aplicación deja de funcionar.

- Hay un cierto grupo de errores que pueden ser identificados y reparados antes de que tu código llegue a ser ejecutado, estos pueden ser:
   -	errores de sintaxis
   -	Código poco intuitivo o difícil de mantener
   -	Uso de "malas prácticas"
   -	uso de estilos de códigos inconsistentes.

Estos errores pueden ser incluso más comunes que otros más graves dado a que son menos evidentes.
Capturar errores antes de que tu código se ejecute puede salvarte, no sólo del error en si mismo, si no, también ahorrarte mucho tiempo en la cacería de esos errores.

- Entonces un linting es una herramienta de software que revisa y "observa" tu código en busca de errores que puedan afectar tu código. Algunos "linteres" incluso pueden darte sugerencias de como arreglar el error o incluso arreglarlo ellos mismos.
- Es una herramienta de análisis estático , un proceso de revisión de un programa sin ejecutar dicho programa, por lo general la revisión se realiza sobre el código fuente o alguna clase de código objeto. 
- Hay diferentes herramientas de “linting” pero la mas usada es ESLint.


#### ¿Qué ES ESLINT?
- ESLint es una herramienta de código abierto enfocada en el proceso de "lintig" para javascript (o más correctamente para ECMAScript). ESLint es la herramienta predominante para la tarea de "limpiar" código javascript tanto en el servidor (node.js) como en el navegador.
- Dado que javascript es un lenguaje dinámico y de tipado débil, es especialmente fácil caer en errores humanos a la hora de escribir código. 
- ESLint utiliza un sistema de reglas que permiten definir que es y que no es posible dentro del código. 
- ESLint está escrito en Nodejs y es posible instalarlo desde npm.
- Sus funciones son:
   -	Mostrarte errores de sintaxis.
   -	Mostrarte errores cuando no se siguen buenas prácticas.
   -	Proveer sugerencias para mejorar tu código.
   -	Mantener un estilo consistente en tu código o reforzar reglas internas de tu propio equipo.

#### ¿Qué ES PRETTIER?

- Prettier es un formateador automático de código.

Escribir código es una acción humana y como tal hay opiniones sobre como se debe escribir este código y no solamente desde el punto de vista algorítmico o técnico, si no, incluso se crean discusiones sobre estilos de "escritura" (Famosa es la "guerra sagrada" sobre si usar o no “;” en JavaScript o tabs vs espacios). Estas “opiniones” generan conflictos en grupos de trabajos.

Prettier busca solucionar esto otorgando una serie de configuraciones y opiniones sobre como escribir el código.
- Lo que ofrece Prettier es tomar tu código y "re-formatearlo" en base a las configuraciones definidas manteniendo así un estilo consistente.
- El prettier es un formatter

:::tip Formatter
- Nos permite diseñar el formato del código que estamos escribiendo.
- Organiza el código según las reglas establecidas.
:::

:::tip info
- [¿Qué es Prettier?](https://www.freecodecamp.org/espanol/news/que-es-prettier/)

:::

#### Linting y formatter
- Se deben usar los dos en un proyecto cuando se trabaje en EQUIPO.
- Así todos los integrantes del equipo tienen las mismas reglas(configuraciones) del linting y formatter.
- Si usamos el linting y formatter de visual studio , cada dispositivo tendrá sus  propias reglas , por lo tanto cada integrante del equipo tendrá una configuración diferente y al trabajar en el proyecto sería un lio.  Esto genera cambios fantasmas (no son cambios de código, sino del formato).

### Instalación y configuracion de ESLINT

#### 1-[Instalación](https://www.npmjs.com/package/eslint)

```powershell
npm i -D eslint
```
#### 2- Configuración

- Se puede hacer de forma manual, pero también automáticamente.
- Para que se haga de forma automática , utilizamos sus propias herramientas.
- Ejecutamos el siguiente comando:


```powershell
npx eslint –-init
```
- Nos abrirá un asistente que nos preguntará que queremos configurar y como:

1. Pregunta: Para que lo quieres  usar:
   -	Solo para chequear sintaxis
   -	Para chequear sintaxis y encontrar problemas
   -	Para chequear sintaxis , encontrar problemas y aplicar un estilo al escribir el código. (Esta usaremos)
2. Pregunta: Que módulos vamos a usar en el proyecto
   -	Import / export (Esta usaremos)
   -	Require / exports
   -	Ninguna
3. Pregunta: Que framework vamos a usar:
   -	React (Esta usaremos)
   -	Vue
   -	Ninguno
4. Pregunta: Utilizas Typescript:
    - YES
    - NO (Esta obviamente)
5. Pregunta: Donde va a ejecutarse el código?
     -	Navegador (Esta usaremos)
     -	Node
6. Pregunta: Te pide el punto de partida para el “estilo” del código
    -	Una guía de estilo popular. (Esta usaremos)
    -	Resolver preguntas a mano.


- Si seleccionaste una guía popular, tenes 4 opciones para elegir:
   -	Airbnb
   -	Standard (Esta usaremos)
   -	Google
   -	XO

7. Pregunta: En que formato quieres el archivo de configuración?
    -	Javascript (Esta usaremos)
    -	YAML
    -	JSON
8. Pregunta: Quieres instalar  todo lo que necesitas ahora 
    - YES (Esta obviamente)
    - NO 
9. Pregunta: Que quieres usar para instalarlo 
   -	Npm ( Esta usaremos)
   -	Yarn
   -	pnpm
- Si hiciste todo bien , se habrá creado el archivo .eslintrc.js en el proyecto.

#### 3- Comandos para la consola
#### Revisar si tiene errores
- Lo ejecutamos en algún archivo del proyecto, para revisar si tiene errores.
- Sintaxis: npx eslint  ubicación-del-archivo
- Con esta sintaxis , verificamos si el archivo tiene algún error o algo.


En este caso en el App.js

```powershell
npx eslint src/App.js
```

#### Arreglar los errores
- Para que ESLINT arregle los problemas (que el pueda) :
- Sintaxis: npx eslint  ubicación-del-archivo –fix

En este caso en el App.js
```powershell
npx eslint src/App.js --fix
```


#### Extension de visual studio
- Para que detecte los errores en tiempo real , usamos la extensión ESLint de visual studio , esta se encuentra verificada por Microsoft.
- Con esa extensión , te va a parecer un foco amarillo o azul que te permite arreglar el error , etc.



#### 4- Deshabilitar una regla
- Una regla es "importar React de forma obligatoria".
- Esto a partir del react 17 ya no es necesario  ([no utiliza createElement()](https://es.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#whats-different-in-the-new-transform)).
- Tenemos que deshabilitar la regla:
   - Para esto , utilizamos el archivo .eslintrc.js
  
:::tip

Si pasamos por la línea del error con el mouse aparece: react/react-in-jsx-scope (este es el “nombre” del error)
:::


- La propiedad rules contiene las reglas.
- Cada valor es el “nombre” del error y puede tener 3 valores:
   -	‘off’ : Sirve para apagar la regla
   -	‘warn’ : Para que figure como un warning
   -	‘error’ : Para que nos marque el error


```js
// Ejemplo 1
  rules: {
  'react/react-in-jsx-scope': 'off'
  }
  // Ejemplo 2
 'react/react-in-jsx-scope': 'warn'
 // Ejemplo 3
 rules: {
    'react/react-in-jsx-scope': 'error'
  }

 ```


 - Otra forma de hacer lo mismo es:


```js
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'plugin:react/jsx-runtime'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {

  }
}

```
:::tip info
- [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)

:::

### Instalación y configuracion de prettier
#### Instalación
```powershell
npm i -D prettier
```
#### Formatear un archivo por consola
```powershell
npx prettier ubicación-del-archivo
```
- Al ejecutarlo , nos devuelve la versión formateada del archivo por consola.

Ejemplo
```powershell
npx prettier src/App.js
```
#### Formatear un archivo directamente
```powershell
npx prettier ubicación-del-archivo –-write
```
- Al ejecutarlo , formatea el codigo en el archivo directamente.

Ejemplo
```powershell
npx prettier src/App.js --write
```

#### Configuración
1. Creamos el archivo .prettierrc en la raiz del proyecto.
2. Entramos a su[ sitio web (docs/Configuring Prettier/options)](https://prettier.io/) para ver que reglas podemos poner


:::tip
- [Listado con los "nombres" que puede llamarse el archivo de configuración](https://prettier.io/docs/en/configuration.html)
- [Opciones (reglas) que podemos configurar en el archivo](https://prettier.io/docs/en/options.html)
:::

- Entonces en cada opcion(regla) tenemos:
  -	Default: Valor por defecto
  -	CLI Override : Como sobrescribir (anular) el valor por terminal.
  -	API OVerride: Como sobrescribir el valor por el archivo de configuración . Te dice que propiedad poner en el archivo y el tipo de valor.


- Algunas de las reglas son:
    - Tabs: Las tabulaciones se usarán para la sangría
    - Quotes : Usar comillas simples.
    - JSX Quotes : Lo mismo que el anterior pero en jsx
    - Arrow Function Parentheses :  Para poner los paréntesis cuando la función flecha solo tiene un parámetro.


Ejemplo

Entonces en el archivo .prettierrc :

```js
{
   "useTabs" : true ,
   "singleQuote" : true ,
   "jsxSingleQuote" : true ,
   "arrowParens" : "avoid"
}

```


#### Extension visual studio
1. Activamos/instalamos la extensión de Prettier – Code formatter en visual studio.
2. Luego en el archivo:
     - Boton derecho – formatear documento con - Configuramos el formateador por defecto a prettier .
3. En configuraciones de visual studio , habilitamos “format on save” (Esto lo podes configurar a tu gusto con la opcion “Format on save mode) , y se formateara con prettier al guardar. 

#### Problema
- AL formatearlo, se generan miles de errores de ESLint.
- Esto sucede porque Prettier lo formatea y a ESLint no le gusta como lo hace , provocando que tu archivo este con puras lineas rojas.
- Por ejemplo:
   - Prettier pone el “;” al final de una linea.
   - Según ESLint es un error.
#### Solución
- Bueno instalando el paquete eslint-config-prettier solucionaríamos este problema.
1. Con el siguiente comando lo instalamos:

```powershell
npm i -D eslint-config-prettier
```
2. Luego de instalarlo , en el archivo .eslintrc.js , en  extends lo añadimos:
```js
  extends: [
    'plugin:react/recommended',
    'standard',
    'plugin:react/jsx-runtime',
    'eslint-config-prettier',
  ],

```

:::tip Observación
Luego de esto, tienen mas prioridad las reglas de prettier y ESLint deja de tirar error.
:::

### Comandos
- Hay que crear los comandos en package.json para que puedan utilizar prettier y ESLint porque pueden existir personas que no utilicen extensiones.
- Siempre debe haber una opcion por consola.


#### Primero chequeamos el alcance de los comandos
- Este comando , nos devolverá los archivos que estamos afectando:

```powershell
npx prettier --check ubicación-del-archivo
```

Ejemplo
```powershell
npx prettier –-check  .
```
:::tip Observación
El “.” Significa “Todos los archivos y carpetas”
:::

#### Segundo tenemos que ignorar archivos en los comandos
#### Prettier
- Como se puede ver, en el ejemplo afecta los archivos que crea el comando “build” , ESTO NO PUEDE PASAR BAJO NINGUNA CIRCUNSTANCIA.
- Para solucionar esto , creamos el archivo .prettierignore en la raiz del proyecto
- En este archivo ponemos las carpetas y archivos a ignorar, al usar el “.”

```js
dist
build
package-lock.json

```
:::tip Observación
Por defecto ignora node_modules.
:::
#### ESLINT
- Hacemos lo mismo para ESLINT , creamos el archivo .eslintignore
- En este archivo ponemos las carpetas y archivos a ignorar 

```js
dist
build
```

:::tip Observación
ESLINT solo funciona con JS Y JSX, asique no tiene sentido incluir archivos de otra extensión.
:::

#### Por último creamos los comandos

Package.json
```js
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject" ,
    "format" : "prettier --write . " ,
    "lint" : "eslint --fix . --ext  .js,.jsx "
  },

```
:::tip Observación
- El “.” Significa “Todos los archivos y carpetas” tanto para los comandos de prettier y eslint.
- Con “--ext” específicas que extensiones afectas (ESLINT solo funciona con JS Y JSX)
- Con los dos comandos, afectas todo el proyecto menos la carpeta que generas con el comando “build”.
:::


:::warning Solucionar un warning
- Para solucionar el warning : "React versión not specified in eslint-plugin-react settings"

.eslintrc.js
```js
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },

```

:::


## Render Prop
- Suele ser llamada "render prop" o "render children" 
- El término “render prop” se refiere a una técnica para compartir código(funciones/utilidades) entre componentes en React utilizando una propiedad(props) cuyo valor es una función.
- En general usamos render props cuando queremos dar la mayor libertad posible al consumidor de nuestro componente de definir qué es lo que va a renderizar, sin atarlo necesariamente a un template específico. 
- Algunas bibliotecas que utilizan render props son React Router, Downshift y Formik.


#### Ejemplo
List.jsx
```js
// eslint-disable-next-line react/prop-types
const List = ({ data }) => {
  return (
    <ul>
      {Object.entries(data).map(([ key, description ]) => 
        <li key={key}>
          <strong>{key}:</strong> {description}
        </li>
      )}
    </ul>
  );
};
export default List;

```
App.js
```js
import { useState } from 'react';
import List from './components/List';

function App() {
    <h1>App</h1>;
    const [definitions] = useState({
        name: 'Frank',
        'last-name': 'Zappa',
    });

    return <List data={definitions} />;
}

export default App;

```
En el código anterior, el componente List se encarga de renderizar cada item de nuestro objeto.

Podemos usar una render prop para que el componente que renderize List se encargue de especificar como renderizar cada item.

En este caso App.js especificara como renderizar cada item.

List.jsx
```js
// eslint-disable-next-line react/prop-types
const List = ({ data , render }) => {
  return (
    <ul>
      {Object.entries(data).map(([ key, description ]) => 
        
         <>
           {render({key , description})}
         </> 
     
      )}
    </ul>
  );
};
export default List;

```
App.js
```js
import { useState } from 'react';
import List from './components/List';

function App() {
    <h1>App</h1>;
    const [definitions] = useState({
        name: 'Frank',
        'last-name': 'Zappa',
    });

    return (
        <List
            data={definitions}
            render={({ key, description }) => (
                <>
                    <li key={key}>
                        {key}: <strong>{description}</strong>
                    </li>
                </>
            )}
        />
    );
}

export default App;

```

:::tip Observación
- Render es una props cuyo valor es una funcion que recibe un objeto con las propiedades key y description (esto se puede modificar a tu gusto). 
- Render es una prop que recibe un componente (funcion) que se va a renderizar adentro.
- Render prop = Es la funcion(componente) que se le pasa a la prop render.
:::

Por último cabe mencionar que podemos usar cualquier prop en un componente como render prop (salvo algunas reservadas como key y ref), incluso children, por lo que tras un par de ajustes nuestro componente List se podría usar de la siguiente forma:



App.js
```js
function App() {
    <h1>App</h1>;
    const [definitions] = useState({
        name: 'Frank',
        'last-name': 'Zappa',
    });

    return (
        <List data={definitions}>
            {({ key, description }) => (
                <>
                    <li key={key}>
                        {key}: <strong>{description}</strong>
                    </li>
                </>
            )}
        </List>
    );
}

```

List.jsx
```js
// eslint-disable-next-line react/prop-types
const List = ({ data , children }) => {
  return (
    <ul>
      {Object.entries(data).map(([ key, description ]) => 
        
         <>
           {children({key , description})}
         </> 
     
      )}
    </ul>
  );
};
export default List;

```

#### Explicación
#### List.jsx
- En el componente, a la hora de ejecutar la “prop” especificas los valores que va a recibir el componente que renderizara &lt;List>
- En el ejemplo anterior, estarías enviando un objeto con la key y la description 
```js
{children({key , description})}
```
- Pero en lugar de enviar un objeto, podes enviar lo que sea.
#### App.js
- Cuando especificas la función en la “prop”, los parámetros deben coincidir con los argumentos de la función que se ejecuta en el List.jsx.
- En este caso estarías recibiendo un objeto con la propiedad key y description.
- Los parámetros son los “valores” que te envia el componente List.jsx
- Esta función que recibe la prop es un componente, ósea retorna lo que se va a renderizar.


:::tip info
- [Entendiendo Render props en React](https://osmancea.medium.com/entendiendo-render-props-en-react-dfe22f84f593)
- [Render Props](https://es.reactjs.org/docs/render-props.html)
:::


## Graphql

### API REST
- Generalmente usamos las API REST para comunicar el frontend con el backend
- Es una guía (paso a paso) de como comunicar el frontend con el backend.
- Tiene varias urls para hacer peticiones . Estas urls suelen llamarse endpoints , las cuales son utiles para obtener  y procesar datos.
- Son basada en el protocolo HTTP, por lo tanto, puede ser usada en cualquier dispositivo.
- Pero surgieron dos problemas.

#### 1 Problema - Underfetching
- Una APP necesita mucha información en un momento y una URL te devuelve un conjunto de datos. Es muy común que una APP haga muchas peticiones para conseguir todos los datos necesarios para continuar.
- El problema surge al no obtener “muchos” datos en una petición, obligando a realizar varias.
#### 2 Problema - Overfetching
- Es cuando una petición te devuelve muchos datos , pero no se utiliza todos.
- Es inecesario una consulta pesada si al final el frontend no utiliza todos estos datos.


### Graphql
- Fue creado por Facebook para resolver estos dos problemas del API REST
- Es un lenguaje de consultas, que te permite leer y modificar datos.
- Es una alternativa a API REST
- Graphql en el backend es un sistema de tipo de datos, en el que se puede describir desde un esquema (parecido a la sintaxis de un objeto literal de js) los datos que pueden ser obtenido.
  

Ejemplo de un esquema
```js
Type User {
 Id : ID!,
Username  : String ,
Email : String
}

```
:::tip Observación
- La palabra clave “type” es para crear nuestros esquemas a consultar (información a obtener).
- Cada “propiedad” del esquema es cada campo que se puede obtener y su valor es el tipo de dato que es. Esto es muy útil para que las APP  clientes tengan mas información a la hora de consultar.
- Esto nos permite obtener los datos que necesitemos , ni mas ni menos.
:::

- En GRAPHQL solo tenemos una URL(endpoint) para consultar y modificar datos , ya que el lenguaje permite modificar la consulta .
- Puede devolver respuestas en formato JSON.
- Graphql permite que los desarolladores frontend se enfoquen en crear consultas (esquemas) de los datos que se necesitan mientras que los desarolladores backend se enfocan en crear código que resuelvan estas consultas.
- Graphql utiliza tres conceptos para diferenciar los “tipos de consultas” que se hacen al backend:
    -	Queries : Son consultas que permiten solicitar datos desde el cliente. Son peticiones GET.
    -	Mutations : Permiten al cliente enviar solicitudes al servidor para que modifiquen datos . Son peticiones POST,  PUT y DELETE
    -	Subscritions : Permiten tener una conexión en tiempo real con el cliente (con WebSockets)
- Todas las consultas que se crean , se documentaran , ya que al identificar  el tipo de dato y el nombre es bastante fácil saber que puedes hacer desde la API.
- Tiene la herramienta grafica GraphiQL que permite probar tus API de desarrollo.
- Se puede utilizar tanto en el cliente como en el servidor.
- Es un lenguaje que necesita de herramientas que son utilizadas en el backend como en aplicaciones clientes.
- Una de las muchas herramientas para trabajar con graphql es Apollo que trabaja tanto en el frontend como en el backend:
   -	Apollo Server: es una librería de JavaScript del lado del servidor que te ayuda a crear las API de GraphQL
   -	Apollo Client: es una librería de JavaScript del lado del cliente que te permite consumir esas API desde tu aplicación front-end.

### Peticion GET
- Daremos un ejemplo de una Peticion GET sencilla.
Mas adelante creare un apartado en Node sobre cómo  crear una API GraphQL y otro apartado en React de como consumirla.
- [API A UTILIZAR](https://rickandmortyapi.com/)
  

:::tip Observación
Fijate como en una API REST hay muchas URL y en GraphQL solo una.
:::

#### Instalación

```powershell
npm i @apollo/client graphql
```

:::tip Observación
- @apollo/client : Maneja la comunicación entre la API GraphQL y el proyecto (App)
- Graphql : Te permite crear las consultas (queries)
:::


Index.js
```js
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

// Creamos un "cliente" , con la unica URL de la API y el cache a utilizar
const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // El componente ApolloProvider envuelve nuestra aplicación
    // Tiene la props client que recibe el cliente que creamos (con ApolloClient())
    // De esta manera toda nuestra aplicación tiene acceso al cliente(A traves de Context API).
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);

```
App.js
```js
import { useQuery, gql } from '@apollo/client';
import './App.css';

function App() {
    // Creamos una consulta (esquema)
    // GQL sirve para crear una Querie  (peticion GET)
    // A traves de un  query{} especificamos que datos queremos obtener
    // Cada "propiedad" (no tienen valor) es el campo/parametro que queremos obtener.
    const GET_LIST = gql`
        query {
            characters {
                results {
                    id
                    name
                    species
                }
            }
        }
    `;
    // useQuery() recibe el esquema(consulta) que creamos.
    // useQuery() crea el querie  y realiza la consulta
    // Devuelve tres estados:
    // data : Cuando la informacion exista (se realiza la petición correctamente)
    // loading : Cuando se este cargando
    // error : Si existe un error
    const { data, loading, error } = useQuery(GET_LIST);
    if (loading) return 'Cargando...';
    if (error) return `Error! ${error.message}`;

    return (
        <div>
            {data.characters.results.map(item => {
                return (
                    <div key={item.id} style={{ display: 'flex', flexDirection: 'row' }}>
                        <h2>{item.id}. </h2>
                        <h2>{item.name}-(</h2>
                        <h2>{item.species})</h2>
                    </div>
                );
            })}
        </div>
    );
}

export default App;

```

## React.lazy
- Le permite definir un componente que se carga dinámicamente.
- Le permite aplazar la carga del código hasta que se represente por primera vez.
- Esto cargará automáticamente el archivo que contiene   el componente cuando se renderice por primera vez.
- El método Lazy() Recibe una funcion que debe realizar el import de un componente (este se vuelve diferido).
- Lazy() devuelve un componente “diferido” , cuyo archivo se cargara cuando este se renderice por primera vez.
- El componente diferido(que se crea con lazy()) debe renderizarse dentro de un  componente Suspense, lo que nos permite mostrar algún contenido alternativo (como un indicador de carga) mientras esperamos que se cargue el componente diferido.

:::tip info
- [React Docs](https://beta.reactjs.org/reference/react/lazy)
- [ReactJS.org](https://reactjs.org/docs/code-splitting.html#reactlazy)
- [Ejemplos](https://medium.com/hackernoon/lazy-loading-and-preloading-components-in-react-16-6-804de091c82d)
:::

## React.suspense
- React viene con un componente llamado &lt;Suspense>
- Le permite especificar que “renderizara” en caso de que algunos componentes aún no estén listos para renderizarse.
- Se utilizan para los componentes “diferidos”.
- En futuro se planea añadir mas “escenarios” para utilizar este componente.
- Tiene dos props:
   - Fallback : Recibe un componente que se renderizara mientras espera que el componente de la otra prop cargue.
   - Children : Recibe un componente creado con lazy() . Mientras se espera que este se cargue (se supone que es pesado , por algo es diferido) , se renderizara el componente de la props fallback.


:::tip info
- [React Docs](https://beta.reactjs.org/reference/react/Suspense)
- [ReactJS.org](https://reactjs.org/docs/react-api.html#reactsuspense)
- [Ejemplos](https://medium.com/hackernoon/lazy-loading-and-preloading-components-in-react-16-6-804de091c82d)

:::