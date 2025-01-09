---
sidebar_position: 6
---
# React Router v6
- Los ejemplos pueden estar escritos en TypeScript.
## Router v6
- [Documentación](https://reactrouter.com/en/main)
-	React Router es una biblioteca de enrutamiento del lado del servidor y del cliente con todas las funciones para React.
- El enrutamiento es el proceso de dirigir las solicitudes de los usuarios hacia diferentes partes de una aplicación, permitiendo que cada sección tenga su propia URL y responda de manera independiente. En el contexto de aplicaciones web, como las desarrolladas con React, el enrutamiento permite que la interfaz muestre distintas páginas o componentes según la URL solicitada, sin necesidad de recargar toda la página.
-	React Router se ejecuta en cualquier lugar donde se ejecute React; en la web, en el servidor con node.js y en React Native.
- React Router te permite manejar y mostrar diferentes secciones o "páginas" sin recargar la página completa del navegador cada vez que el usuario navega de una sección a otra en una aplicación de una sola página (SPA) por ejemplo al hacer clic en un enlace para navegar a una nueva "página" o sección de la aplicación, solo se cambie el contenido específico que necesita actualizarse, sin recargar la página completa desde el servidor.
- En una SPA, toda la aplicación (HTML, CSS y JavaScript) se carga una sola vez en el navegador y en una sola página (index.html). Luego, cuando el usuario quiere ver una sección diferente de la aplicación, solo se actualiza el contenido necesario, manteniendo la estructura principal sin volver a cargar. React Router hace esto posible al controlar las "rutas" dentro de la aplicación, de modo que, al cambiar de sección, se simula una navegación tradicional (como en una aplicación de varias páginas), pero sin hacer una solicitud al servidor para cada cambio de página.
- Por ejemplo, si tienes una SPA con una ruta principal /, una ruta para "Acerca de" /about, y otra para "Contacto" /contact, React Router gestiona la visualización de cada sección sin que el navegador recargue la página completa.








#### Instalación

- Ejecutamos los siguientes comandos:
```powershell
npx create-react-app router-tutorial
cd router-tutorial
npm i npm install react-router-dom
npm start
```
:::tip Observación
- El paquete  `react-router-dom` es una versión de React Router adaptada para aplicaciones web que se ejecutan en el navegador (DOM significa Document Object Model). Proporciona herramientas y componentes  que permiten manejar el enrutamiento en aplicaciones web de React, facilitando la navegación entre URLs en aplicaciones de una sola página (SPA).
:::

1. Limpiamos la carpeta src dejando solo el index




## Agregar un Enrutador
- En react, el enrutador actúa como un sistema de navegación que mapea las URLs a componentes específicos de la aplicación, permitiendo que los usuarios accedan a diferentes vistas sin recargar la página completa. 
- Un enrutador básicamente especifica qué componente debe renderizarse en cada URL. Esto significa que, según la URL que el usuario visita, el enrutador selecciona y muestra el componente adecuado en la pantalla. En una SPA, este proceso permite navegar entre secciones de la aplicación sin recargar la página completa, manteniendo una experiencia de usuario rápida y continua.
- Así, en React Router, al definir rutas como /home, /about, o /contact, estás indicando qué componente (por ejemplo, HomePage, AboutPage, ContactPage) debe mostrarse para cada URL específica.
- Nosotros usaremos BrowserRouter como enrutador ya que simula un historial de todas las “paginas” que visitamos. Además, te permiten usar cargadores, acciones, recuperadores y más.

#### 1- Creamos los componentes correspondiente a cada URL
- Creamos una carpeta llamada routes/Routes o Views/views dentro de src.

:::tip
- Los archivos dentro de esta carpeta son componentes que se van a renderizar solo en una URL especifica.
- Esta carpeta generalmente se llama pages, views o screens, pero depende de las preferencias del equipo o las convenciones del proyecto.
:::
- Creamos los componentes: 

```js title="src/routes/Blog.jsx"


const Blog = () => {
  return (
    <div><h1>Blog</h1></div>
  )
}

export default Blog

```

```js title="src/routes/Contacto.jsx"


const Contacto = () => {
  return (
    <div><h1>Contacto</h1></div>
  )
}

export default Contacto

```

```js title="src/routes/Inicio.jsx"


const Inicio = () => {
  return (
    <div><h1>Inicio</h1></div>
  )
}

export default Inicio

```


#### 2- Creamos el enrutador principal


- Para esto en el archivo  index o main:


```tsx title="index.tsx"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contacto from './routes/Contacto.js'
import Blog from './routes/Blog.js'
import Inicio from './routes/Inicio.js'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio/>
  },
  {
    path: "/blog",
    element: <Blog/>
  },
  {
    path: "/contacto",
    element: <Contacto/>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)

```
:::tip Observación
- RouterProvider: Es el componente que actúa como el enrutador principal en tu aplicación React. Envuelve toda la aplicación y se encarga de gestionar la navegación. Su función principal es renderizar el componente correspondiente en función de la URL actual. Dependiendo de la ruta que el usuario esté visitando, RouterProvider decide qué componente mostrar, permitiendo que la aplicación responda dinámicamente a los cambios en la URL sin recargar la página. Antes se usaba &lt;BrowserRouter>.
- La prop router recibe un objeto conocido como “objeto de enrutador” que es creado típicamente usando funciones como createBrowserRouter, createHashRouter o createMemoryRouter. Este objeto contiene toda la configuración necesaria para manejar la navegación en tu aplicación. 
- Contenido del objeto enrutador:
  - Rutas: Define las diferentes rutas (URLs) de la aplicación.
  -  Componentes: Especifica qué componente se debe mostrar para cada ruta.
  -  Funcionalidades Avanzadas: Dependiendo de cómo se crea el objeto de enrutador, puedes acceder a funcionalidades adicionales, como:
      -	Simulación de Historial: Puedes simular un historial de navegación para pruebas o para manejar estados en aplicaciones más complejas.
      -	Carga de Datos: Algunas funciones permiten cargar datos antes de renderizar los componentes, lo que facilita el manejo de datos asincrónicos.
      -	Etc...
- createBrowserRouter es una función proporcionada por React Router que se utiliza para crear un objeto de enrutador, una de las funcionalidades que te permite usar es la “simulación de historial”.
- createBrowserRouter recibe un array de objetos RouteObject, donde cada uno representa una ruta de la aplicación.
- Cada objeto RouteObject contiene:
  - path:
      -	Descripción: Define una ruta. Podes usar comodines como "`*`" para hacer hacer que coincida con una secuencia de cero o más caracteres.
      -	Ejemplo: path: "/" para la página principal o path: "/about" para la sección "Acerca de".
  - element:
      -	Descripción: Especifica qué componente se debe renderizar cuando el usuario ingresa al path especificado
      -	Ejemplo: element: &lt;HomePage /> renderiza el componente HomePage cuando se visita la ruta /.
  - loader (opcional):
      -	Descripción: Una función que se ejecuta antes de renderizar el componente. Se utiliza para cargar datos que se necesitan para ese componente.
  - action (opcional):
      -	Descripción: Una función que maneja las solicitudes POST para esa ruta. Se utiliza en rutas que implican la modificación de datos.
  - children (opcional):
      -	Descripción: Permite anidar rutas dentro de otra ruta. Se usa para crear subrutas.
  - index (opcional):
      -	Descripción: índica que comparte la ruta del padre. Por lo tanto el componente de `element` solo se renderiza  cuando la url es igual al del componente padre(ruta del padre) y no hay ningún RouteObject  que gestione  dicha ruta.
  - [Ver más información](https://reactrouter.com/en/main/route/route#type-declaration) 
- Un RouteObject   puede omitir la propiedad path o index si su propósito es simplemente agrupar rutas hijas (igual una de estas seguramente va a ser “index”). Este tipo de ruta se utiliza para definir una estructura de rutas anidadas.
- Este código, en resumen, establece que:
  -	Al visitar /, se renderiza HomePage.
  -	Al visitar /about, se renderiza AboutPage.
  -	Al visitar /contact, se renderiza ContactPage.
  - Así, el enrutador principal (en este caso RouterProvider) se encarga de mostrar el componente correspondiente para cada URL sin necesidad de recargar la página completa. 
:::

- El objeto de enrutador se define de manera estática en el código, fuera de los componentes. Esto permite tener una configuración clara y organizada de las rutas.
- Una vez creado, este objeto se pasa como prop al enrutador principal (por ejemplo, RouterProvider). Esto permite que la configuración del enrutador sea independiente de los componentes de la aplicación, lo que mejora la legibilidad y la mantenibilidad del código.
- Ventajas de Esta Estructura:
  -	Separación de Preocupaciones: La lógica de enrutamiento se separa de los componentes, facilitando la gestión del enrutamiento y el componente de la interfaz de usuario.
  -	Facilidad de Mantenimiento: Es más fácil modificar o añadir rutas en un solo lugar sin tener que buscar dentro de los componentes.
  -	Reusabilidad: El objeto de enrutador puede ser reutilizado en diferentes partes de la aplicación, o incluso en otras aplicaciones, si es necesario.
  -	Configuración más Limpia: Permite mantener una configuración de rutas clara y limpia, evitando la lógica de enrutamiento dispersa en varios componentes.



## Manejar el 404
- Siempre es una buena idea saber cómo responde tu aplicación a los errores al principio del proyecto, ya que todos escribimos muchos más errores que características cuando creamos una nueva aplicación. 
- ¡Si accedemos a una URL que no configuramos y no existe en nuestra aplicación, nos aparecerá una pantalla de error predeterminada en React Router que es un asco!
- Cada vez que tu aplicación genere un error durante la renderización, la carga de datos o la realización de mutaciones de datos, React Router lo detectará y mostrará una pantalla de error. Esto significa que React Router gestionara los errores por nosotros.
- Para solucionar esto creamos nuestra propia página de error, que será igual de fea, pero servirá de ejemplo.
- Creamos un componente que se renderizara cuando la aplicación genere un error:

```tsx title="src\routes\Error.tsx"
import { useRouteError } from "react-router-dom";

export default function Error() {
  const error  = useRouteError()  as {statusText : string , status : number}
  console.error(error);

  return (
    <div id="error-page">
      <h1>Custom Error!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText }</i>
      </p>
    </div>
  );
}


```
:::tip Observación
- Con la función useRouteError() de react-router-dom accedemos a la información de un error que puede ser gestionado por React Router. Esta función obtiene el error que fue lanzado en alguna de las URL o en algún componente asociado, de modo que puedas mostrar un mensaje de error personalizado al usuario.
- Como hay muchos tipos de errores, es imposible predecir el tipo de dato que devuelve por lo tanto al tiparlo hay que tener cuidado. 
- En este ejemplo solo especifique las propiedades que use en el código con el as.
- Por ahora, es suficiente saber que prácticamente todos tus errores serán manejados por esta página (componente) en lugar de spinners infinitos, páginas que no responden o pantallas en blanco.
:::

- Ahora tenemos que cambiar la configuración del enrutador:
```tsx title="main.tsx"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio/>,
    errorElement : <Error/>
  },
  {
    path: "/blog",
    element: <Blog/>
  },
  {
    path: "/contacto",
    element: <Contacto/>,
  },
]);

```
:::tip Observación
- El objeto RouteObject también contiene una propiedad llamada errorElement para especificar que componente mostrar si ocurre un error en el path indicado. 
- La opción errorElement se utiliza para manejar errores que ocurren en una ruta específica o en cualquiera de sus rutas hijas.
- Puedes definir un errorElement en una ruta para manejar errores en esa ruta específica. Si el error ocurre en el componente que corresponde a la ruta padre o hija, React Router mostrará este componente.
- ¿Cómo busca React Router el errorElement?
  - Error dentro de una ruta: Si ocurre un error en un componente que corresponde a una ruta (padre o hija), React Router primero verifica si esa ruta específica tiene un errorElement. Si lo tiene, React Router lo renderiza.
  -  Si no encuentra errorElement en la ruta actual, React Router busca hacia arriba en la jerarquía, es decir, en las rutas padre o abuelas. Así, si una ruta hija tiene un error, buscará un errorElement en la ruta padre. Si no lo encuentra, buscará en la ruta abuela, y así sucesivamente.
  -  Primer errorElement encontrado: React Router renderiza el primer errorElement que encuentra en esa jerarquía de rutas, y detiene la búsqueda.
- En este ejemplo, si se produce un error durante la carga del componente Inicio, o si se lanza un error dentro de él, se renderiza el componente Error en lugar del componente Inicio. Esto permite manejar errores de manera elegante y mantener una buena experiencia de usuario.

:::

## Rutas anidadas
- Queremos que los componentes Blog y Contacto se rendericen adentro del componente Inicio.
- En una aplicación web, es común que todos los componentes relacionados con una URL específica se rendericen dentro de un componente principal que se suele llamar 'layout' porque contiene el estilo y estructura de toda la aplicación. Este componente principal actúa como un contenedor y se encarga de mantener la estructura y el estilo de la aplicación en todas las páginas.
- Un RouteObject tiene una propiedad llamada children, que acepta un arreglo de RouteObject. Estos representan las rutas hijas, permitiendo anidar rutas dentro de otras y de esta forma se podrá renderizar componentes de rutas hijas dentro de componentes de rutas padre.
- Entonces en el archivo main o index, solo modificamos esta parte:

```tsx title="main.tsx"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio/>,
    errorElement : <Error/> ,
    children : [
      {
        path: "blog",
        element: <Blog/>
      },
      {
        path: "contacto",
        element: <Contacto/>,
      },
    ]
  }
 
]);


```
:::tip Observación
- Cuando las rutas tienen hijos, hace dos cosas:
  - Anida las URL: concatena/une el path de la ruta padre con el path de la ruta hija de esta manera: `path padre + path hijo`, formando una URL completa (por ejemplo, /padre/hijo). 
  - Renderiza el componente de la ruta hija dentro del componente de la ruta padre: el componente padre funciona como un contenedor, mostrando el contenido de la ruta hija.
- En este ejemplo seria:
  - “/” + “blog” = /blog --- El path /blog tendría que renderizar el componente de “/” y adentro de este renderizar el componente de “blog”
  - “/” + “contacto” = /contacto –-- El path /contacto tendría que renderizar el componente de “/” y adentro de este renderizar el componente de “blog”
- Como se puede observar, los componentes se anidan dentro de un layout principal para crear un diseño compartido. Este diseño compartido incluye los componentes de las rutas padre e hijas, de modo que el componente raíz ("/") sirve como un contenedor que proporciona la estructura general (o layout) de la aplicación. Dentro de este layout, los componentes específicos de las rutas hijas, como "blog" y "contacto", se renderizan en el área designada, manteniendo un estilo y estructura consistentes en toda la aplicación.

:::
- Si accedemos a "/contacto" o "/blog" sin especificar donde renderizar los componentes de las rutas hijas en el componente padre, solo se mostrará el contenido de la ruta padre (componente Inicio). Esto se debe a que debemos indicar explícitamente al componente de la ruta padre dónde renderizar el contenido de las rutas hijas, y esto se logra usando el componente Outlet de React Router. El componente Outlet se encarga de renderizar el componente de la ruta hija dentro del componente padre.
- Entonces en el componente de Inicio, especificamos donde queremos renderizar los componentes que corresponden a la ruta hija.
```tsx title="Inicio.tsx"
import { Outlet } from "react-router-dom"

const Inicio = () => {
  return (
    <div>
      <h1>Inicio</h1>
      <Outlet/>
    </div>
  )
}

export default Inicio


```
:::tip Observación
- Ahora si accedemos a la URL `http://localhost:5173/Blog`:
  - Se renderiza el componente Inicio porque es el componente de la ruta padre ("/”)
  - Dentro del componente Inicio, se renderiza el componente de la ruta hija (en este caso el componente Blog) en donde se encuentra Outlet. 
  - Se anidaron: “/blog” y por lo tanto se renderizan ambos componentes, pero el hijo(Blog.jsx) lo hace en el padre(App.jsx)
  - Entonces el componente Outlet en React Router es responsable de renderizar el componente de la ruta hija. Al utilizar Outlet, se permite que el contenido de las rutas hijas se muestre dentro del layout del componente padre, manteniendo la estructura y estilo de la aplicación.


:::
## Enrutamiento del lado del cliente
- Primero vamos a instalar e importar Bootstrap para poder usarlo en todo el proyecto.
- Lo instalamos:
```powershell
npm i bootstrap
```
- Lo importamos en el componente principal o en el index/main.ts:
```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contacto from './routes/Contacto.js'
import Blog from './routes/Blog.js'
import Inicio from './routes/Inicio.js'
import Error from './routes/Error.js'
import "bootstrap/dist/css/bootstrap.min.css"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio/>,
    errorElement : <Error/> ,
    children : [
      {
        path: "blog",
        element: <Blog/>
      },
      {
        path: "contacto",
        element: <Contacto/>,
      },
    ]
  }
 
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)



```
- Y en el componente principal (Inicio) ahora creamos dos Link para ir a las url que creamos:
```tsx
import { Outlet } from "react-router-dom"

const Inicio = () => {
  return (
    <div>
      <h1>Inicio</h1>
      <nav className="navbar navbar-dark ">
         <div className="container">  
          <a className="btn btn-outline-primary" href="/">Inicio</a>
          <a className="btn btn-outline-primary" href="/contacto">Contacto</a>
          <a className="btn btn-outline-primary" href="/blog">Blog</a></div>
     </nav>
      <Outlet/>
    </div>
  )
}

export default Inicio


```
- Es posible que lo hayas notado o no, pero cuando hacemos clic en los enlaces, el navegador realiza una solicitud para ir a la siguiente URL en lugar de utilizar React Router.
- El enrutamiento del lado del cliente permite que nuestra aplicación actualice la URL sin solicitar otro documento HTML al servidor. En cambio, la aplicación puede mostrar de inmediato una nueva interfaz de usuario. 
- Para hacer esto posible tenemos que remplazar la etiqueta `<a>` por el componente `<Link>` de React Router y en lugar de usar el atributo(props) `href` , usamos el atributo `to`.

```tsx
const Inicio = () => {
  return (
    <div>
      <h1>Inicio</h1>
      <nav className="navbar navbar-dark ">
         <div className="container">  
          <Link className="btn btn-outline-primary" to="/">Inicio</Link>
          <Link className="btn btn-outline-primary" to="/contacto">Contacto</Link>
          <Link className="btn btn-outline-primary" to="/blog">Blog</Link></div>
     </nav>
      <Outlet/>
    </div>
  )
}


```
:::tip Observación 
- Puedes abrir la pestaña de red (Network) en la DevTools del navegador para ver que ya no solicita documentos.
:::


## Cargar información 
- Un RouteObject puede contener una función “loader”.
- La función loader se ejecuta antes de que se renderice el componente que corresponde a la URL y su objetivo es proporcionar datos que el componente puede necesitar para renderizarse correctamente.
- La función loader se ejecuta cada vez que se accede a una ruta. Por ejemplo, se ejecuta cuando el usuario navega a una ruta haciendo clic en un enlace, se realiza una redirección, se envía un formulario con método GET, o se modifica la URL directamente en el navegador.
- Aquí hay algunos puntos clave sobre la función loader:
  1.	Carga de Datos: Permite realizar solicitudes a APIs, leer datos de un archivo, o cualquier operación asíncrona para obtener la información necesaria. 
  2.	Async/Await: Normalmente, la función loader es asíncrona, lo que significa que puede usar async/await para manejar promesas de manera más sencilla.
  3.	Acceso a Parámetros: Puede acceder a los parámetros(params) de la ruta, lo que permite personalizar la carga de datos según la URL.
  4.	Error Handling: Se puede gestionar el manejo de errores dentro de la función loader, permitiendo redirigir al usuario o mostrar un mensaje de error si algo sale mal.
  5.	Integración con el Componente:  Lo que retorna la función loader puede ser usado por el componente que corresponde a la URL. También puede devolver un Response para generar un error y [gestionarlo desde React Router.](#manejar-el-404)
- Se utiliza el Hook useLoaderData en el componente para acceder a los datos que retorna la función loader.

#### Ejemplo


```tsx title="main.tsx"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio/>,
    errorElement : <Error/> ,
    children : [
      {
        path: "blog",
        element: <Blog/>
      },
      {
        path: "contacto",
        element: <Contacto/>, 
        loader() {
            return   [
              {
                  nombre: "Juan Pérez",
                  telefono: "555-1234",
                  correo: "juan.perez@example.com"
              },
              {
                  nombre: "María López",
                  telefono: "555-5678",
                  correo: "maria.lopez@example.com"
              },
              {
                  nombre: "Carlos García",
                  telefono: "555-8765",
                  correo: "carlos.garcia@example.com"
              },
              {
                  nombre: "Ana Martínez",
                  telefono: "555-4321",
                  correo: "ana.martinez@example.com"
              }
          ];
          
        }
      },
    ]
  }
 
]);


```
:::tip Observación
- Le cargamos un array que tiene “contactos”.
:::


- En el componente asociado (Contacto en este caso):

```tsx title="Contacto.tsx"
import { useLoaderData } from "react-router-dom"

type  Contact = { 
  nombre: string,
  telefono: string,
  correo: string
} 

const Contacto = () => {
   

 
   const contactos  = useLoaderData() as Contact[]

  return (
    <div>
      <h1>Contacto</h1>
        <ul>
      {
        contactos.map( (contacto) => {
          return (
             <li key={contacto.telefono}> {contacto.nombre}  </li>
          )
        })
      }
    </ul>
    </div>
  )
}

export default Contacto


```

:::tip Observación
- Accedemos al array que retornamos en la función loader con el método (hook) useLoaderData().
- useLoaderData() devuelve el array de “contactos” que retornamos en la función loader.
- Cada vez que se ejecute "loader" el valor de useLoaderData() cambiara.

:::



## Manejar peticiones
- Aunque algunos desarrolladores web no lo saben, los formularios HTML en realidad generan una navegación en el navegador, como hacer clic en un enlace. 
- La única diferencia está en la solicitud: los enlaces solo pueden cambiar la URL, mientras que los formularios también pueden cambiar el método de solicitud (GET, POST, etc) y el cuerpo de la solicitud (body).
- Normalmente el navegador serializará(convertirá) automáticamente los datos del formulario en JSON y los enviará al servidor en el cuerpo(body) de la solicitud para POST y como URLSearchParams(querys) para GET. React Router hace lo mismo, excepto que, en lugar de enviar la solicitud al servidor, utiliza el enrutamiento del lado del cliente y la envía a una ruta action.
- Si en el componente Contacto hacemos esto:

```tsx 
const Contacto = () => {
   

    


  return (
    <div  className="container mx-auto">
      <h1>Contacto</h1>
      <form method="post">
      <div className="form-floating mb-3">
  <input type="email" className="form-control" id="floatingName" placeholder="name@example.com"  name="name"/>
  <label htmlFor="floatingName">Nombre</label>
</div>
<div className="form-floating  mb-3">
  <input type="password" className="form-control" id="floatingPhone" placeholder="Password" name="password" />
  <label htmlFor="floatingPhone">Telefono</label>
</div>
<div className="form-floating mb-3">
  <input type="password" className="form-control" id="floatingEmail" placeholder="Password" name="email" />
  <label htmlFor="floatingEmail">Correo</label>
</div>

<div className="form-floating text-center">
<button type="submit" className="btn btn-primary mb-3 w-50 ">Crear</button>
</div>
          </form>
   
    </div>
  )
}

export default Contacto


```
- Al hacer clic  en el botón "Crear" en nuestra aplicación. La aplicación debería fallar porque el servidor no está configurado para manejar una solicitud POST (envía un 404, aunque probablemente debería ser un 405 🤷).
- Podemos utilizar el enrutamiento del lado del cliente de React Router para manejar peticiones POST en el servidor.
- Primero modifiquemos el formulario:

```tsx 
const Contacto = () => {
   

    


  return (
    <div  className="container mx-auto">
      <h1>Contacto</h1>
      <form method="post">
      <div className="form-floating mb-3">
  <input type="email" className="form-control" id="floatingName" placeholder="name@example.com"  name="name"/>
  <label htmlFor="floatingName">Nombre</label>
</div>
<div className="form-floating  mb-3">
  <input type="password" className="form-control" id="floatingPhone" placeholder="Password" name="password" />
  <label htmlFor="floatingPhone">Telefono</label>
</div>
<div className="form-floating mb-3">
  <input type="password" className="form-control" id="floatingEmail" placeholder="Password" name="email" />
  <label htmlFor="floatingEmail">Correo</label>
</div>

<div className="form-floating text-center">
<button type="submit" className="btn btn-primary mb-3 w-50 ">Crear</button>
</div>
          </form>
   
    </div>
  )
}

export default Contacto


```

- Para trabajar con el enrutamiento del lado del cliente con formularios HTML simple, debemos cambiar la etiqueta &lt;form> por el componente &lt;Form> de React Router. 
- El componente [`<Form>`](https://reactrouter.com/en/main/components/form) es un contenedor para crear formularios en HTML. Permite realizar mutaciones de datos (peticiones POST, PUT, PATCH O DELETE). Es importante señalar que este componente no se encarga de validaciones, por lo que se sugiere usar las capacidades de validación de HTML que ya ofrece el navegador y complementar con validaciones en el backend.
- Entonces en el componente:
```tsx 
import { Form } from "react-router-dom"





const Contacto = () => {
   

    


  return (
    <div  className="container mx-auto">
      <h1>Contacto</h1>
      <Form method="post">
      <div className="form-floating mb-3">
  <input type="text" className="form-control" id="floatingName" placeholder="nombre"  name="name"/>
  <label htmlFor="floatingName">Nombre</label>
</div>
<div className="form-floating  mb-3">
  <input type="text" className="form-control" id="floatingPhone" placeholder="Telefono" name="phone" />
  <label htmlFor="floatingPhone">Telefono</label>
</div>
<div className="form-floating mb-3">
  <input type="text" className="form-control" id="floatingEmail" placeholder="E-mail" name="email" />
  <label htmlFor="floatingEmail">Correo</label>
</div>

<div className="form-floating text-center">
<button type="submit" className="btn btn-primary mb-3 w-50 ">Crear</button>
</div>
          </Form>
   
    </div>
  )
}

export default Contacto


```
- Un RouteObject puede contener una función “action”. 
- La función action se ejecutará cuando se hace una petición POST, PUT, PATCH O DELETE a la URL (path). Recibe un objeto Request (similar al de Express.js) y puede devolver una respuesta personalizada o ejecutar una acción antes de cargar el componente.
- Es útil para manejar interacciones antes de que el componente se renderice.
- Aunque la función action devuelva una respuesta personalizada (como un código de estado 200), el componente asociado con la ruta siempre se renderizará después de ejecutar la acción. La función action se usa principalmente para manejar lógica del lado del servidor o realizar operaciones previas al renderizado, pero no detiene el proceso de carga del componente en la interfaz.
- La función action en un RouteObject generalmente devuelve un objeto Response, que puede incluir un estado HTTP (por ejemplo, 200, 400, 500), encabezados y un cuerpo de respuesta. Esto permite personalizar la respuesta que recibirá el cliente, especialmente útil en operaciones como crear, actualizar o eliminar datos. Sin embargo, independientemente de lo que devuelva la función action, el componente asociado con la ruta se renderizará en la interfaz.
- La respuesta devuelta por action es accesible en el componente a través de useActionData() en React Router, lo cual permite usar los datos devueltos (como un mensaje de éxito o error) para ajustar el comportamiento del componente tras ejecutar la acción.
- Ahora configuramos un action en nuestra URL.
```tsx 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio/>,
    errorElement : <Error/> ,
    children : [
      {
        path: "blog",
        element: <Blog/>
      },
      {
        path: "contacto",
        element: <Contacto/>, 
        loader() {
            return   [
              {
                  nombre: "Juan Pérez",
                  telefono: "555-1234",
                  correo: "juan.perez@example.com"
              },
              {
                  nombre: "María López",
                  telefono: "555-5678",
                  correo: "maria.lopez@example.com"
              },
              {
                  nombre: "Carlos García",
                  telefono: "555-8765",
                  correo: "carlos.garcia@example.com"
              },
              {
                  nombre: "Ana Martínez",
                  telefono: "555-4321",
                  correo: "ana.martinez@example.com"
              }
          ];
          
        } ,
        async action( { request }){
          const formData = await request.formData();
          for (const campo of formData.entries()) {
            console.log(campo);
        }
          switch (request.method) {
            case "PUT": 
   
               console.log('Peticion PUT ' , formData)
               return formData
            case "DELETE": 
             console.log('Peticion DELETE ' , formData)
             return formData
            case "PATCH": 
             console.log('Peticion PATCH ' , formData)
             return formData
            case "POST": 
             console.log('Peticion POST ' , formData)
            return formData
            default: 
              throw new Response("", { status: 405 });
            
          }
        }
      },
    ]
  }
 
]);



```
:::tip Observación 
- Gestionamos todas las peticiones que puede recibir la path.
- Lo puedes probar modificando la props “methods” del componente &lt;Form> para los diferentes métodos.
- Cuando envías un formulario en una página web sin usar JavaScript (es decir, usando HTML puro), el navegador toma los datos del formulario y crea automáticamente un objeto FormData. Este FormData contiene todos los datos de los campos del formulario y lo envía como el cuerpo(body) de la solicitud al servidor (usualmente en una solicitud POST). El servidor recibe esta información y puede procesarla.
- Sin embargo, en React Router, la lógica de envío del formulario se gestiona un poco diferente:
  - Intercepta el envío del formulario: Cuando haces clic en el botón de enviar, React Router previene el comportamiento por defecto del navegador que recarga la página y hace una petición al servidor.
  -  Crea automáticamente un FormData: React Router toma todos los campos del formulario y crea un objeto FormData, que es una estructura de datos que contiene los valores de cada campo (por ejemplo, el valor de un campo name="firstName" se guarda como formData.get("firstName")).
  -  Envía el FormData a la action de la ruta: En lugar de enviar los datos directamente al servidor, React Router llama a la función action asociada con la ruta actual y le pasa el FormData como una propiedad del objeto request de JavaScript. Esto permite manejar el envío en el lado del cliente y realizar lógica personalizada sin realizar una solicitud al servidor.
:::

:::tip  Hook  useLoaderData 
- &lt;Form> evita que el navegador envíe la solicitud al servidor y la envía a su ruta action en su lugar. 
- Un POST suele significar que algunos datos están cambiando. Por convención, React Router usa esto como referencia para actualizar automáticamente los datos en la página después de que finaliza la acción. ¡Eso significa que la función “loader” se vuelve a ejecutar y se actualiza el hook useLoaderData para que la interfaz de usuario se mantenga sincronizada con tus datos automáticamente! ¡Muy bueno!
-  Cuando un hook se actualiza, React solo cambia la parte específica del DOM que depende de ese hook. Esto optimiza el rendimiento, ya que evita renderizados innecesarios en otras partes de la interfaz que no han cambiado, manteniendo la aplicación más eficiente.


:::

## Params
- [Concepto de params.](https://flevatti.github.io/documentacion/docs/Node/#params)
- En React Router, Los dos puntos (:) tienen un significado especial, son un “segmento dinámico". Los segmentos dinámicos coincidirán con valores dinámicos (cambiantes) en esa posición de la URL, como un ID. A estos valores en la URL los llamamos "parámetros de URL", o simplemente "params".
- Al igual que en express.js, en React Router, los parámetros de ruta también se definen con “:” seguido del nombre del parámetro. Esto permite crear rutas dinámicas que capturan valores de la URL y los hace accesibles en el componente a través del hook useParams.
- Los parámetros de URL (params) están disponibles tanto en el loader, como en el action, y también en el componente.
- Ejemplo con el componente Contacto:

```tsx title="main.tsx"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio/>,
    errorElement : <Error/> ,
    children : [
      {
        path: "blog",
        element: <Blog/>
      },
      {
        path: "contacto/:nombre",
        element: <Contacto/>, 
        loader({params}) {

          console.log('Se ejecuto el loader');
          console.log('El objeto que puede recibir como parametro loader tiene una propiedad para obtener todos los params de la url' , params)
            return   [
              {
                  nombre: "Juan Pérez",
                  telefono: "555-1234",
                  correo: "juan.perez@example.com"
              },
              {
                  nombre: "María López",
                  telefono: "555-5678",
                  correo: "maria.lopez@example.com"
              },
              {
                  nombre: "Carlos García",
                  telefono: "555-8765",
                  correo: "carlos.garcia@example.com"
              },
              {
                  nombre: "Ana Martínez",
                  telefono: "555-4321",
                  correo: "ana.martinez@example.com"
              }
          ];
          
        } ,
        async action( { request , params }){
          const formData = await request.formData();
          for (const campo of formData.entries()) {
            console.log(campo);
        }
        console.log('El objeto que puede recibir como parametro action tiene una propiedad para obtener todos los params de la url' , params)
          switch (request.method) {
            case "PUT": 
   
               console.log('Peticion PUT ' , formData)
               return formData
            case "DELETE": 
             console.log('Peticion DELETE ' , formData)
             return formData
            case "PATCH": 
             console.log('Peticion PATCH ' , formData)
             return formData
            case "POST": 
             console.log('Peticion POST ' , formData)
            return formData
            default: 
              throw new Response("", { status: 405 });
            
          }
        }
      },
    ]
  }
 
]);

```
```tsx title="Contacto.tsx"
import { Form, useLoaderData, useParams } from "react-router-dom"


type  Contact = { 
  nombre: string,
  telefono: string,
  correo: string
} 



const Contacto = () => {
  const contactos  = useLoaderData() as Contact[]
  const params = useParams();
  console.log('Tengo acceso a los params de la URL desde el componente' , params)


  return (
    <div  className="container mx-auto">
      <h1>Contacto</h1>
      <Form method="post">
      <div className="form-floating mb-3">
  <input type="text" className="form-control" id="floatingName" placeholder="nombre"  name="name"/>
  <label htmlFor="floatingName">Nombre</label>
</div>
<div className="form-floating  mb-3">
  <input type="text" className="form-control" id="floatingPhone" placeholder="Telefono" name="phone" />
  <label htmlFor="floatingPhone">Telefono</label>
</div>
<div className="form-floating mb-3">
  <input type="text" className="form-control" id="floatingEmail" placeholder="E-mail" name="email" />
  <label htmlFor="floatingEmail">Correo</label>
</div>

<div className="form-floating text-center">
<button type="submit" className="btn btn-primary mb-3 w-50 ">Crear</button>
</div>
          </Form>
          <ul>
      {
        contactos.map( (contacto) => {
          return (
             <li key={contacto.telefono}> {contacto.nombre}  </li>
          )
        })
      }
    </ul>

    </div>
  )
}

export default Contacto


```
## Redirect 
- En react-router-dom, redirect es una función que permite redirigir al usuario a una ruta específica dentro de la aplicación. Esto puede ser útil en situaciones donde se necesita enviar al usuario a otra página, por ejemplo, después de realizar una acción, cuando no tiene permiso para acceder a una ruta o cuando se debe cambiar a una vista predeterminada.
- En react-router-dom v6, la redirección se realiza con la función redirect() en los loaders o actions de una ruta.  
- La función redirect() recibe como parámetro principal una cadena de texto(String) que representa la URL o ruta a la que deseas redirigir al usuario. Esta cadena puede ser una ruta absoluta o relativa dentro de la aplicación.
- Dentro de los componentes para realizar redireciones se usa useNavigate().
#### Ejemplo

```tsx title="main.tsx"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom'
import Contacto from './routes/Contacto.js'
import Blog from './routes/Blog.js'
import Inicio from './routes/Inicio.js'
import Error from './routes/Error.js'
import "bootstrap/dist/css/bootstrap.min.css"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio/>,
    errorElement : <Error/> ,
    children : [
      {
        path: "blog",
        element: <Blog/>,
        loader() {
          return redirect('/contacto') // Redirige a la página de /contacto

        }
      },
      {
        path: "contacto",
        element: <Contacto/>, 
        loader({params}) {

          console.log('Se ejecuto el loader');
          console.log('El objeto que puede recibir como parametro loader tiene una propiedad para obtener todos los params de la url' , params)
            return   [
              {
                  nombre: "Juan Pérez",
                  telefono: "555-1234",
                  correo: "juan.perez@example.com"
              },
              {
                  nombre: "María López",
                  telefono: "555-5678",
                  correo: "maria.lopez@example.com"
              },
              {
                  nombre: "Carlos García",
                  telefono: "555-8765",
                  correo: "carlos.garcia@example.com"
              },
              {
                  nombre: "Ana Martínez",
                  telefono: "555-4321",
                  correo: "ana.martinez@example.com"
              }
          ];
          
        }
 ,
        action() {
          // Es lo mismo que return  redirect('/') // Redirige a la página de inicio /
         return new Response("", {
            status: 302,
            headers: {
              Location: "/",
            },
          });
        } ,
      
      },
    ]
  }
 
]);


```
:::tip Observación 
- [Podes redireccionar con “redirect” o devolviendo un Response.](https://reactrouter.com/en/main/fetch/redirect#redirect)

:::


## Estilo de enlace activo
- En react-router-dom, el componente &lt;NavLink> se usa para crear enlaces de navegación con estilos CSS que se aplican cuando el enlace coincide con la URL actual. Esto es útil para resaltar visualmente el enlace de la página en la que se encuentra el usuario.
- Sirve para:
  -	Al crear un menú de navegación, desea mostrar cuál de ellas está seleccionada actualmente
  -	Proporciona un contexto útil para tecnología de asistencia como lectores de pantalla.
  -	Tener un control más preciso sobre transiciones de vista como slider.
- En Inicio.tsx:

```tsx 
import { NavLink, NavLinkRenderProps , Outlet } from "react-router-dom"

const Inicio = () => {

   const customClassNavLink = ({ isActive, isPending , isTransitioning } : NavLinkRenderProps) => 
      {
       console.log(isActive , isPending , isTransitioning)
       let ObjectclassName = "btn btn-outline-primary";
       if (isActive) {
         
         ObjectclassName=  ObjectclassName +   " active"
         console.log("Aver" , ObjectclassName);
       } else {
           ObjectclassName=  ObjectclassName +  " pending"
       }
       return ObjectclassName
      }
    
  return (
    <div>
      <h1>Inicio</h1>
      <nav className="navbar navbar-dark ">
         <div className="container">  
          <NavLink   className={customClassNavLink} to="/">Inicio</NavLink>
          <NavLink className={customClassNavLink} to="/contacto">Contacto</NavLink>
          <NavLink className={customClassNavLink} to="/blog">Blog</NavLink></div>
     
     </nav>
      <Outlet/>
    </div>
  )
}

export default Inicio


```
:::tip Observación
- El atributo/props className funciona como un className normal o también puedes pasarle una función para personalizar los estilos CSS que se van a aplicar según el estado del enlace (activo o pendiente). En caso de no pasarle una función, NavLink tiene sus propias clases que aplica de forma predeterminada.
- NavLink tiene muchas props interesantes, te recomiendo leer su [documentación](https://reactrouter.com/en/main/components/nav-link#children).


:::

## useNavigation
- Es un hook que te proporciona información útil sobre el estado actual de la navegación de la aplicación, por ejemplo, si hay cambios en los datos (POST), si se está ejecutando un action, cual es el estado de la pagina actual (si el componente asociado esta renderizado o todavia no).
- El hook te ayuda a:
  -  Mostrar indicadores de carga en toda la página, útiles cuando se necesita avisar al usuario que se está procesando algo.
  -  Desactivar formularios mientras se completa una acción de actualización para evitar duplicados u otras inconsistencias.
  -  Indicar que los botones de envío están ocupados mientras el servidor procesa la acción, lo que mejora la experiencia del usuario.
  -  Mostrar datos de forma optimista, es decir, asumir que la acción en el servidor se completará correctamente y actualizar el estado en la interfaz antes de que realmente finalice el proceso, lo que hace que la aplicación se sienta más rápida.
useNavigation() te brinda un objeto con varias propiedades para obtener información sobre el estado actual de la navegación. 
  - [Más información.](https://reactrouter.com/en/main/hooks/use-navigation) 

#### Ejemplo
- Esta vez usaremos el componente Blog

```tsx title="Blog.jsx"
import { useNavigation } from "react-router-dom";

const Blog = () => {
  const navigation = useNavigation();
  console.log(navigation);
  console.log('Ver el estado de la navegacion' , navigation.state)
  return (
    <div><h1>Blog</h1></div>
  )
}

export default Blog


```
:::tip Observación
- Modifique el archivo main o index para poder acceder a Blog.
:::


## Ruta Indice

- En React Router, las index routes son rutas que representan el contenido predeterminado que se muestra cuando un usuario visita una ruta sin especificar una subruta adicional. Se utilizan en rutas anidadas para mostrar un componente por defecto en el mismo nivel de una ruta padre.
- En un RouteObject de React Router, la propiedad index cuando se establece en true, es para indicar que usara el mismo path que su RouteObject padre. El componente que contiene se renderizará solo si la ruta coincide con el path del padre y no coincide con ninguna de las rutas hijas.
- Esta configuración es útil para asegurar que React Router renderice un contenido predeterminado cuando el usuario visita una ruta sin especificar una subruta adicional. Por ejemplo, si tienes una ruta padre /productos con varias rutas hijas, puedes definir una index route para mostrar un contenido inicial o lista de productos al visitar /productos directamente, sin navegar a una subruta como /productos/:id.
- [Más información.](https://reactrouter.com/en/main/start/tutorial#index-routes)
- Conclusión:
  -	Se usa la opción index en lugar de path. Eso es porque usara la ruta del del padre.
  -	Las rutas de índices coinciden cuando coincide con la ruta principal(padre), pero no coincide con ninguna de las otras secundarias(hermanos).
  -	Las rutas de índice son la ruta predeterminada para una ruta principal.
  -	Se renderiza cuando el path es igual al del componente padre (ruta del padre) y no hay ningún path configurado para dicha ruta.

#### Ejemplo 
- Creamos un componente llamado Indice:

```tsx title="src/routes/Indice.tsx"
export default function Indice() {

  return (
    <div id="error-page">
        <h1>Contenido predeterminado de la ruta padre</h1>
    </div>
  );
}


```
- En el archivo main o index:
```tsx title="main.tsx"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contacto from './routes/Contacto.js'
import Blog from './routes/Blog.js'
import Inicio from './routes/Inicio.js'
import Error from './routes/Error.js'
import "bootstrap/dist/css/bootstrap.min.css"
import Indice from './routes/Indice.js'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio/>,
    errorElement : <Error/> ,
    children : [
      {
        path: "blog",
        element: <Blog/>,
      },
      { index: true ,
        element: <Indice/>
      } ,

      {
        path: "contacto",
        element: <Contacto/>, 
        loader({params}) {

          console.log('Se ejecuto el loader');
          console.log('El objeto que puede recibir como parametro loader tiene una propiedad para obtener todos los params de la url' , params)
            return   [
              {
                  nombre: "Juan Pérez",
                  telefono: "555-1234",
                  correo: "juan.perez@example.com"
              },
              {
                  nombre: "María López",
                  telefono: "555-5678",
                  correo: "maria.lopez@example.com"
              },
              {
                  nombre: "Carlos García",
                  telefono: "555-8765",
                  correo: "carlos.garcia@example.com"
              },
              {
                  nombre: "Ana Martínez",
                  telefono: "555-4321",
                  correo: "ana.martinez@example.com"
              }
          ];
          
        }
 ,
        action() {
          // Es lo mismo que return  redirect('/') // Redirige a la página de inicio /
         return new Response("", {
            status: 302,
            headers: {
              Location: "/",
            },
          });
        } ,
      
      },
    ]
  }
 
]);


```

:::tip Observación
- El componente Indice solo se renderizará en el &lt;Outlet> cuando la URL coincida con el path del padre y no exista alguna otra ruta para renderizar en &lt;Outlet>.
- Esto es útil para evitar “pantallas en blancos” y llenarlo de contenido como paneles, estadísticas, feeds , etc.


:::

## UseNavigate
- useNavigate() es un hook de React Router que permite redireccionar o ir a diferentes rutas dentro de la aplicación. En lugar de depender de enlaces (&lt;Link>), useNavigate() se usa para realizar la navegación dentro de funciones de JavaScript, como al responder a eventos, manejar redirecciones condicionales o gestionar rutas en base a ciertas acciones.
- Al invocar useNavigate(), obtienes una función navigate que puedes llamar para cambiar de ruta (y por lo tanto renderizar otro componente en &lt;Outlet>). navigate acepta una ruta (path) como argumento y, opcionalmente como segundo parametro, un objeto de configuración para personalizar el comportamiento de navegación.
- También puedes pasarle un solo parámetro (un numero) para cambiar de ruta en base al historial. Por ejemplo, si le pasas -1 equivale a pulsar el botón Atrás y renderizaría el componente de la URL anterior del historial.
#### Ejemplo 
```tsx title="Inicio.tsx"
import { NavLink, NavLinkRenderProps , Outlet, useNavigate } from "react-router-dom"

const Inicio = () => {

   const customClassNavLink = ({ isActive, isPending , isTransitioning } : NavLinkRenderProps) => 
      {
       console.log(isActive , isPending , isTransitioning)
       let ObjectclassName = "btn btn-outline-primary";
       if (isActive) {
         
         ObjectclassName=  ObjectclassName +   " active"
         console.log("Aver" , ObjectclassName);
       } else {
           ObjectclassName=  ObjectclassName +  " pending"
       }
       return ObjectclassName
      }
    const navigate = useNavigate();
  return (
    <div>
      <h1>Inicio</h1>
      <nav className="navbar navbar-dark ">
         <div className="container">  
          <NavLink   className={customClassNavLink} to="/">Inicio</NavLink>
          <NavLink className={customClassNavLink} to="/contacto">Contacto</NavLink>
          <NavLink className={customClassNavLink} to="/blog">Blog</NavLink></div>
          <button type="button" onClick={
            () => {
              navigate(-1)
            }
          } className="btn btn-outline-primary">Atras</button>  
     </nav>
      <Outlet/>
    </div>
  )
}

export default Inicio

```
:::tip Observación
- Añadimos un botón que al hacer click, te envía hacia la url anterior.
-  ¿Por qué no hay ningún event.preventDefault en el botón?
    - Con el atributo type="button" , aunque parezca redundante, es la forma HTML de evitar que un botón envíe su formulario.
:::

## Query
- Por defecto, los formularios con &lt;form> envían los datos a través de la URL en forma de query y con el método GET.
- Los datos están ubicados después del signo de interrogación (“?”)
#### Ejemplo 

```tsx title="Blog.tsx"
const Blog = () => {

  return (
    <div><h1>Blog</h1>
         <form className="w-50">
    <div className="row g-3 align-items-center">
 
  <div className="col-auto">
    <input type="text" id="inputPassword6" className="form-control"  name="search"/>
  </div>
  <div className="col-auto">
  <button className="btn btn-dark" type="submit">Buscar</button>
  </div>
 
</div>
</form>
    </div>
    
  )
}

export default Blog


```
:::tip Observación
- Los formularios por defecto tienen el método GET y el action es la URL actual.
- El valor del input cuyo name es “search” se envía por la query. Quedando la url: http://localhost:5173/blog?search=valorDelInput


:::

#### Enrutamiento del lado del cliente.
- Para acceder a la información que esta ubicada en la URL (query) hacemos lo siguiente:
    - Cambiamos &lt;form> a &lt;Form>
- En Blog.tsx:
```tsx 
import { Form } from "react-router-dom"

const Blog = () => {

  return (
    <div><h1>Blog</h1>
         <Form className="w-50">
    <div className="row g-3 align-items-center">
 
  <div className="col-auto">
    <input type="text" id="inputPassword6" className="form-control"  name="search"/>
  </div>
  <div className="col-auto">
  <button className="btn btn-dark" type="submit">Buscar</button>
  </div>
 
</div>
</Form>


```
- En el archivo main o index, modificamos el RouteObject que renderiza este componente:

```tsx title="main.tsx"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio/>,
    errorElement : <Error/> ,
    children : [
      {
        path: "blog",
        element: <Blog/>, 
        loader({request}) {
          console.log(request);
          const url = new URL(request.url);
          const q = url.searchParams.get("search");
          return q
        }
      },

```
:::tip Observación
- En el loader obtenemos el valor de la query search y lo retornamos para que el componente lo pueda usar.
:::

- En el componente del Blog, accedemos al loader para renderizar  el valor de la query “search”:

```tsx 
import { Form, useLoaderData } from "react-router-dom"

const Blog = () => {
    const data = useLoaderData()
  return (

    <div><h1>Blog</h1>
         <Form className="w-50">
    <div className="row g-3 align-items-center">
 
  <div className="col-auto">
    <input type="text" id="inputPassword6" className="form-control"  name="search"/>
  </div>
  <div className="col-auto">
  <button className="btn btn-dark" type="submit">Buscar</button>
  </div>
   
</div>
</Form>
   <p>
     {data as string || "No hay valor"}
   </p>
    </div>
    
  )
}

export default Blog


```
:::tip Observación 
- Cuando se trata de un GET, React Router no llama a action. Enviar un formulario GET es lo mismo que hacer clic en un enlace: solo cambia la URL. Por eso, el código que agregamos para filtrar está en el loader, no en el action de esta ruta.
- La función loader se ejecuta cada vez que sé que cambia la URL. Esto la convierte en el lugar ideal para manipular las query.


::::

#### Sincronización con la URL
- En el paso anterior hay dos problemas:
  1.	Si hace clic en el botón atrás después de una búsqueda, el campo de formulario aún tendrá el ultimo valor ingresado.
  2.	Si actualiza la página después de realizar una búsqueda, el campo de formulario ya no tiene el valor.
  - En otras palabras, la URL y el estado de nuestro formulario no están sincronizados.
- Para solucionar esto, configuramos un valor por defecto en el input:
```tsx title="Blog.tsx"
import { Form, useLoaderData } from "react-router-dom"

const Blog = () => {
    const data = useLoaderData()
  return (

    <div><h1>Blog</h1>
         <Form className="w-50">
    <div className="row g-3 align-items-center">
 
  <div className="col-auto">
    <input type="text" id="inputPassword6" className="form-control"  name="search" defaultValue={data as string}  />
  </div>
  <div className="col-auto">
  <button className="btn btn-dark" type="submit">Buscar</button>
  </div>
   
</div>
</Form>
   <p>
     {data as string || "No hay valor"}
   </p>
    </div>
    
  )
}

export default Blog


```
:::tip Observación
- Usamos lo que recibimos del loader que es el valor de la query search para asignarle un valor por defecto al input.
- Esto resuelve el problema (2). Si actualiza la página ahora, el input mostrara el valor que está en la URL actual.
:::
- Para solucionar el problema (1), podemos usar useEffect:
```tsx title="Blog.tsx"
import { useEffect, useState } from "react"
import { Form, useLoaderData } from "react-router-dom"

const Blog = () => {
    const data = useLoaderData()
    const [query , setQuery] = useState(data);
   

    useEffect(() => {
      setQuery(data);
  } , [data])

  
  return (

    <div><h1>Blog</h1>
         <Form className="w-50">
    <div className="row g-3 align-items-center">
 
  <div className="col-auto">
    <input type="text" id="inputPassword6" className="form-control"  name="search" value={query as string} onChange={(e)=> {
      setQuery(e.target.value);
    }}  />
  </div>
  <div className="col-auto">
  <button className="btn btn-dark" type="submit">Buscar</button>
  </div>
   
</div>
</Form>
   <p>
     {data as string || "No hay valor"}
   </p>
    </div>
    
  )
}

export default Blog


```
:::tip Observación 
- Usamos un componente controlado y un useEffect para controlar el valor del input cada vez que cambia el valor de la query.
- Si quieres sacarle complejidad al código, en lugar de un componente controlado con useEffect podrías acceder al input con un document.getElement…  y modificar el value en lugar de usar un useState(), quedando algo así:
```js
  useEffect(() => {
    document.getElementById("selectorID").value = data;
  }, [data]);

```
- Y el input quedaría como antes (añadiéndole la ID o como lo quieras seleccionar):
```js 
    <input type="text" id="inputPassword6" className="form-control"  name="search" defaultValue={data as string}  />
```
:::
## useSubmit
- El hook useSubmit() permite crear una función para enviar formularios o datos sin necesidad de un formulario HTML visible.
- Funciona de manera similar a un envío de formulario tradicional, pero permite controlar cuándo y cómo se envían los datos, y es especialmente útil para realizar acciones como actualizaciones o eliminaciones de datos desde botones u otros eventos sin un formulario explícito.
- useSubmit() devuelve una función submit() que recibe dos parámetros opcionales:
  - Data (opcional): los datos que quieres enviar en el body o en la query. Puede ser:
      -	Un objeto de datos (ej. { key: "value" }).
      -	Un objeto FormData, útil para trabajar con archivos o formularios completos.
      -	Un elemento de formulario (HTMLFormElement), en cuyo caso useSubmit() recogerá automáticamente los datos del formulario.
  -  Options (opcional): un objeto de configuración que permite especificar:
      -	method: el método HTTP de la solicitud ("post", "put", "delete", etc.). Por defecto, es "get".
      -	action: la URL o ruta a la cual se enviarán los datos. Si no se especifica, se usará la ruta actual.
      -	encType: el tipo de codificación de datos (ej. "multipart/form-data" para archivos).
- Si llamas a submit() sin ningún parámetro, simplemente recargará la página actual usando el método GET. Es decir, cuando no pasas ningún parámetro, submit() actúa como un "submit" básico de formulario, sin enviar datos adicionales ni redirigir a otra ruta. Por lo tanto, aunque los parámetros son opcionales, generalmente se incluye al menos uno para hacer que la llamada a submit() sea útil en la mayoría de los casos.
- Ahora como ejemplo úsemelos en el componente Blog con el input:
```tsx title="Blog.tsx"

import { Form, useLoaderData, useSubmit } from "react-router-dom"

const Blog = () => {
    const data = useLoaderData()
    const submit = useSubmit();

 
  
  return (

    <div><h1>Blog</h1>
         <Form className="w-50">
    <div className="row g-3 align-items-center">
 
  <div className="col-auto">
    <input type="text" id="inputPassword6" className="form-control"  name="search" defaultValue={data as string} onChange={(e)=> {
        submit(e.target.form);
    }}  />
  </div>
  <div className="col-auto">
  <button className="btn btn-dark" type="submit">Buscar</button>
  </div>
   
</div>
</Form>
   <p>
     {data as string || "No hay valor"}
   </p>
    </div>
    
  )
}

export default Blog


```
:::tip Observación
- Cada vez que cambia el valor del input, se envía el formulario. Que por defecto es get y a la misma ruta.

:::
## Administrar la pila de historial
- Ahora que el formulario se envía con cada pulsación de tecla, si escribimos varios caracteres y luego los borramos con la tecla de retroceso, terminaremos con  varias entradas en la pila de historial. 
- Puedes chequear la pila de historial manteniendo presionado el botón “atrás” del navegador.
- Podemos evitar esto reemplazando la URL “anterior” con la “nueva” , para esto usamos la opcion replace en el objeto de configuración de submit().
- En Blog.tsx:
```tsx 
import { useEffect } from "react";
import { Form, useLoaderData, useSubmit } from "react-router-dom"

const Blog = () => {
    const submit = useSubmit();
    const data = useLoaderData()

     useEffect(() => {
        (document.getElementById("searchInput")  as HTMLInputElement).value = data as string
     } , [data])

  
  return (

    <div><h1>Blog</h1>
         <Form className="w-50">
    <div className="row g-3 align-items-center">
 
  <div className="col-auto">
    <input type="text" id="searchInput" className="form-control"   name="search" defaultValue={data as string}  onChange={(e)=> {
        const firstSearch = data == null;
        submit(e.target.form , {
          replace : !firstSearch
        });
    }}  />
  </div>
  <div className="col-auto">
  <button className="btn btn-dark" type="submit">Buscar</button>
  </div>
   
</div>
</Form>
   <p>
     {data as string || "No hay valor"}
   </p>
    </div>
    
  )
}

export default Blog


```
:::tip Observación 
- Toda esta lógica es para probar la opcion replace de submit() , pero todo este código se puede reducir a un componente controlado.
- La opcion replace del objeto de configuración de submit() tiene un valor booleano:
  - replace: true – Cuando se usa replace: true en submit(), React Router no añade una nueva entrada en el historial de navegación al enviar el formulario. En su lugar, reemplaza la página actual con la nueva página a la que se redirige (el action del form). Como resultado, si el usuario intenta usar el botón "Atrás" del navegador, no podrá volver a la página anterior, ya que esta ha sido reemplazada en el historial.
  - replace: false (o no configurado) – Si replace está en false o simplemente no se incluye, React Router añade una nueva entrada en el historial de navegación cuando se envía el formulario. Esto significa que el usuario podrá volver a la página anterior usando el botón "Atrás" del navegador, ya que ambas páginas (la anterior y la nueva) estarán en el historial.
- Solo queremos resetear los resultados de la búsqueda al hacer click “atrás”, no ir la página anterior, por lo que realizamos una verificación rápida si esta es la primera búsqueda o no y luego decidimos reemplazarla.
- Cada pulsación de tecla ya no crea nuevas entradas, por lo que el usuario puede hacer clic para salir de los resultados de búsqueda sin tener que hacer clic muchas veces 😅.


:::
## Mutaciones sin navegación
- Hasta ahora, todas nuestras mutaciones (las veces que cambiamos los datos) han utilizado formularios que permiten navegar y crear nuevas entradas en el historial. Si bien estos flujos de usuario son comunes, es igualmente común querer cambiar los datos sin generar una nueva entrada en el historial (navegación).
- Para estos casos contamos con el hook  useFetcher, que nos permite comunicarnos con los loaders y las acciones(actions) sin generar una nueva entrada en el historial (navegación).
- El hook useFetcher() sirve para realizar acciones que se harían con formularios o cargar datos sin cambiar la ruta actual. Es especialmente útil cuando necesitas hacer solicitudes asíncronas, como enviar formularios o actualizar datos, sin redirigir o refrescar la página.
- useFetcher() devuelve un [objeto con varias funcionalidades o propiedades:](https://reactrouter.com/en/main/hooks/use-fetcher)
  - Propiedad Form: Es un componente similar a &lt;Form>, la única diferencia es que no cambia la URL.
  - Método submit : Es similar a useSubmit() solo que no cambia la URL actual ni redirige al usuario a una nueva página después de enviar el formulario.
  - Método load :  Permite ejecutar el loader de una ruta específica sin que el usuario navegue a esa ruta.
  - Propiedad data: Los datos devueltos por un loader o action se almacenan aquí.
  - Propiedad State: Contiene el estado del fetcher que puede ser:
      - Inactivo : El fetcher esta inactivo.
      - Submitting : Se está ejecutando algún método action.
      - Loading: Se está ejecutando algún método loader.
  - Etc.

#### Ejemplo
- Blog.tsx
```tsx 
import { useEffect } from "react";
import { useFetcher } from "react-router-dom";

const Blog = () => {
    const fetcher = useFetcher();
   
    useEffect(() => {
        // Establece el valor inicial del input desde los datos cargados inicialmente
   (     document.getElementById("searchInput") as HTMLInputElement ).value = fetcher.data as string || "";
    }, [fetcher.data]);

    return (
        <div>
            <h1>Blog</h1>
            <fetcher.Form className="w-50">
                <div className="row g-3 align-items-center">
                    <div className="col-auto">
                        <input
                            type="text"
                            id="searchInput"
                            className="form-control"
                            name="search"
                            onChange={(e) => {
                                fetcher.submit(e.target.form, { method: "GET" });
                            }}
                        />
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-dark" type="submit">
                            Buscar
                        </button>
                    </div>
                </div>
            </fetcher.Form>

            <div>
                <h2>Resultados:</h2>
                <p>{fetcher.data ? fetcher.data : "No hay resultados aún"}</p>
            </div>
        </div>
    );
};

export default Blog;



```
:::tip Observación 
- Use useFetcher() para realizar la búsqueda con querys pero sin cambiar la URL.

:::
## Rutas jsx 
- En lugar de configurar las rutas con un array de RouteObject, podes usar la función createRoutesFromElements y adentro usar el componente &lt;Route> que actúa como un RouteObject en la configuración de rutas.
- Todas las propiedades de un RouteObject se convierten en props.
- Esto significa que, en lugar de construir un array manualmente con objetos para cada ruta, puedes escribir las rutas directamente como componentes JSX (&lt;Route>) y luego createRoutesFromElements los convierte en el array de RouteObject correspondientes.
- Para definir rutas hijas(children) usando createRoutesFromElements, simplemente puedes anidar componentes &lt;Route> dentro de otro &lt;Route>. Cada &lt;Route> dentro de un componente &lt;Route> padre se convierte en una ruta hija (children).

#### Ejemplo
- El normal se vería así:
```tsx 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio/>,
    errorElement : <Error/> ,
    children : [
      {
        path: "blog",
        element: <Blog/>, 
        loader({request}) {
          const url = new URL(request.url);
          const q = url.searchParams.get("search");
          return q
        }
      },
      { index: true , element: <Indice/>} ,

      {
        path: "contacto",
        element: <Contacto/>, 
        loader({params}) {

          console.log('Se ejecuto el loader');
          console.log('El objeto que puede recibir como parametro loader tiene una propiedad para obtener todos los params de la url' , params)
            return   [
              {
                  nombre: "Juan Pérez",
                  telefono: "555-1234",
                  correo: "juan.perez@example.com"
              },
              {
                  nombre: "María López",
                  telefono: "555-5678",
                  correo: "maria.lopez@example.com"
              },
              {
                  nombre: "Carlos García",
                  telefono: "555-8765",
                  correo: "carlos.garcia@example.com"
              },
              {
                  nombre: "Ana Martínez",
                  telefono: "555-4321",
                  correo: "ana.martinez@example.com"
              }
          ];
          
        }
 ,
        action() {
          // Es lo mismo que return  redirect('/') // Redirige a la página de inicio /
         return new Response("", {
            status: 302,
            headers: {
              Location: "/",
            },
          });
        } ,
      
      },
    ]
  }
 
]);


```
- Con la función createRoutesFromElements seria:
```tsx 
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import Inicio from './routes/Inicio';
import Error from './routes/Error';
import Blog from './routes/Blog';
import Indice from './routes/Indice';
import Contacto from './routes/Contacto';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Inicio />} errorElement={<Error />}>
  <Route path="blog" element={<Blog />} loader={({ request }) => {
    const url = new URL(request.url);
    const q = url.searchParams.get("search");
    return q;
  }} />
  
  {/* Ruta index como hijo predeterminado de "/" */}
  <Route index element={<Indice />} />

  <Route path="contacto" element={<Contacto />} 
    loader={({ params }) => {
      console.log('Se ejecutó el loader');
      console.log('El objeto que puede recibir como parámetro loader tiene una propiedad para obtener todos los params de la URL', params);
      return [
        { nombre: "Juan Pérez", telefono: "555-1234", correo: "juan.perez@example.com" },
        { nombre: "María López", telefono: "555-5678", correo: "maria.lopez@example.com" },
        { nombre: "Carlos García", telefono: "555-8765", correo: "carlos.garcia@example.com" },
        { nombre: "Ana Martínez", telefono: "555-4321", correo: "ana.martinez@example.com" }
      ];
    }}
    action={() => {
      // Redirige a la página de inicio "/"
      return new Response("", {
        status: 302,
        headers: {
          Location: "/",
        },
      });
    }}
  />
</Route>
));


```

## Hooks de Parametros (Ejemplo)
- Este es un ejemplo independiente de lo de arriba, aunque puede copiar y pegar lo utilizado anteriormente.
- ¡Siéntase libre de modificar lo que quieras!
- Recursos:
  - [Building custom hooks in React to fetch Data](https://dev.to/shaedrizwan/building-custom-hooks-in-react-to-fetch-data-4ig6)
  - [The correct way to fetch data with react hooks](https://dev.to/nicomartin/the-right-way-to-fetch-data-with-react-hooks-48gc)
  - [Npm react-fetch-hook](https://www.npmjs.com/package/react-fetch-hook)
  - [Api a utilizar](https://jsonplaceholder.typicode.com/)
  - [Ruta de la api a consumir](https://jsonplaceholder.typicode.com/posts)

:::tip Hooks
- Los hooks devuelven variables de Estado (useState) y suelen tener mínimo un parámetro que lo hace dinamico.
- Sirven para poder reutilizar la logica.
::: 

```js title="src/hooks/useFetch.js"
import React, { useEffect, useState } from 'react'

export const useFetch = (url) => {
    const [data , setData] = useState([]);
    const [error , setError] = useState('');
    const [loading , setLoading] = useState(false);
    useEffect(() => {
         setLoading(true);
         fetch(url)
         .then(res => res.json())
         .then(data => setData(data))
         .catch(e => setError('Error de servidor'))
         .finally(() => setLoading(false));
    } , [url])
  return {data, error , loading}
}

```

```js title="routes/Blog.jsx"
import React from 'react'
import { useFetch } from '../hooks/useFetch'

const Blog = () => {
  const { data, error, loading } = useFetch('https://jsonplaceholder.typicode.com/posts/');

  if (loading) {
    return <h2>Loading...</h2>
  }
  if (error !== '') {
    return <h2>{error}</h2>
  }
  return (
    <div>
      <h1>Blog</h1>
      {
        data.map(item => (
          <h4 key={item.id}>{item.id} - {item.title}</h4>
        ))
      }
    </div>
  )
}

export default Blog

```
### Ruta dinámica (params)

```js title="Blog.jsx"
import React from 'react'
import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch'

const Blog = () => {
  const { data, error, loading } = useFetch('https://jsonplaceholder.typicode.com/posts/');

  if (loading) {
    return <h2>Loading...</h2>
  }
  if (error !== '') {
    return <h2>{error}</h2>
  }
  return (
    <div>
      <h1>Blog</h1>
      {
        data.map(item => (
          <h4 key={item.id}>
            <Link to={`/blog/${item.id}`}> {item.id} - {item.title}</Link>
          </h4>
        ))
      }
    </div>
  )
}

export default Blog

```


:::tip
- Por cada ruta (estática o dinámica), se debe crear una vista/componente
:::

```js title="src/routes/Post.jsx"
import React from 'react'

const Post = () => {
  return (
    <div>
        <h1>POST id: aqui el id dinamico</h1>
    </div>
  )
}

export default Post

```



- La ruta deberia estar configurada así:
```js title="index"
 <Routes>
     
        <Route path='/' element={<App />}> 
        <Route index element={<Inicio/>}/>
        <Route path='blog' element={<Blog />}/>
        <Route path='blog/:id' element={<Post />}/>
        <Route path='contacto' element={<Contacto />}/>
         <Route path='*' element={<NoEncontrada/>}/>
        </Route>
     </Routes>

```
:::tip URL con variable
- El path contiene una variable que se asigna con los dos puntos(“:”) y el nombre
- path='blog/:nombrevariable'
- Entonces si accedemos a http://localhost:3000/blog/1, el valor de nombrevariable seria 1.
- Utilizamos la variable para leer un dato de la url.
- Esas variables son conocidas como parámetros
:::
### Leer los params desde el Componente
- A través de useParams() que devuelve un objeto con las variables(parametros)  de la url y sus valores correspondiente.



```js title="Post.jsx"
import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
const Post = () => {
    //Leemos la variable mandada por la url 
    // params es un objeto que contiene las variables mandada por la url con sus valores correspondiente
    const params = useParams()
    const { data, error, loading } = useFetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    if (loading) {
        return <h2>Loading...</h2>
      }
      if (error !== '') {
        return <h2>{error}</h2>
      }
  return (
    <div>
        <h1>{data.id} - {data.title}</h1>
        <p>{data.body}</p>
    </div>
  )
}

export default Post

```
### Parámetros de búsqueda (query)
-	React Router hace que sea fácil  leer y manipular los parámetros de búsqueda (query) con useSearchParams
- Las parametros de busquedas(query) son los datos que se suelen enviar por la url con el metodo GET . Ej. http://localhost:3000/blog?variable=valor. 
- Con useSearchParams podemos manipular los parametros de busquedas(query).
-	Funciona de manera muy similar a React.useState() pero almacena y establece el estado en los parámetros de  la URL(query) (establece el estado en la url) en lugar de en la memoria.

```js

    let [searchParams , setSearchParams] = useSearchParams()

    useEffect(() => {
       // http://localhost:3000/blog?juanito=juan
       // Leemos la variable(parámetro) juanito 
        console.log(searchParams.get("juanito"));
    } , [searchParams])

```
:::tip Observacion
- Es como useState pero maneja variables de estado en la URL ( a traves de los parametros).
- Con el método get obtenes los valores de los  parametros de la URL.
- Con el método set modificas los parametros de la URL.
:::
Blog.jsx

```js
import React from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch'

const Blog = () => {

  let [searchParams , setSearchParams] = useSearchParams();

 const handleChangue = e => {
     let filter = e.target.value;
     if (filter) {
      setSearchParams({filter})
     } else {
      setSearchParams({});
     }
 }

  
  const { data, error, loading } = useFetch('https://jsonplaceholder.typicode.com/posts/');

  if (loading) {
    return <h2>Loading...</h2>
  }
  if (error !== '') {
    return <h2>{error}</h2>
  }
  return (
    <div>
      <h1>Blog</h1>
       {/* Si existe el parametro filter , toma ese valor en el value , en caso contrario es un String vacio */}
      <input type="text" className="form-control mb-" placeholder="" value={searchParams.get('filter') || ''}
      onChange={handleChangue}/>
      {
        data.filter(item => {
          let filter = searchParams.get('filter');
          if (!filter) return true

          let title = item.title.toLowerCase();
          // Si empieza con lo que introduce el usuario en el input
          return title.startsWith(filter)

        }).map(item => (
          <h4 key={item.id}>
            <Link to={`/blog/${item.id}`}> {item.id} - {item.title}</Link>
          </h4>
        ))
      }
    </div>
  )
}

export default Blog

```
### Netlify + queryParams
- [Netlify does not recognize the URL params when using react-router-dom](https://stackoverflow.com/questions/56468161/netlify-does-not-recognize-the-url-params-when-using-react-router-dom)
- Pasos:
1. Crear archivo _redirects en public con:
```powershell
/* /index.html 200
```
2. Ejecuta `npm run build` para compilar la APP
3. Subir lo que genero el comando `build`  a Netlify.