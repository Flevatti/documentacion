---
sidebar_position: 1
---
# Vue #2 -- VUE CLI con Options API

## Vue CLI

  
#### Instalacion -- 1 Alternativa
  Con el siguiente comando en la ubicación del proyecto:
  ```powershell
  npm init vue@latest  
  ```
  - [guia](https://vuejs.org/guide/quick-start.html#with-build-tools)
  -  De esta forma, podes generar un proyecto VUE con muchas caracteristicas ya configuradas (router , pinia , vitest , typescript , etc)
#### Instalacion -- 2 Alternativa
  - Esta es la instalacion que explicaremos:
 - [cli](https://www.npmjs.com/package/@vue/cli)

Instalamos de forma global:
```powershell
npm i -g @vue/cli
```
En la ubicacion del proyecto:
```powershell
vue create nombreproyecto
```
#### Opciones
1.	Son las versiones de Vue , Seleccionamos Manually Select features,
de esta forma elegimos que caracteristicas instalar
2.	Dejamos todo por defecto , enter
3.	Seleccionamos la versión de vue  –  En nuestro caso seleccionamos 3.X
4.	ESLINT with error prevention only
5.	Lint on save
6.	In dedicated config files
7.	N de NO
8.	Seleccionamos NPM

#### Si lo hiciste bien , se creo una carpeta con el nombre del proyecto.
- Entramos en la carpeta y ejecutamos **npm run dev** para ejecutar el servidor de desarrollo.

## Estructura de archivos
### index.html
- Como VUE crea aplicaciones SPA, TODO SE EJECUTA EN EL index.html que se encuentra en la carpeta public (Ya que es un archivo estático)
- En el index.html encontramos el div con la id app que es donde se va a renderizar toda la aplicación.


:::tip Variable de entorno
```html
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">
```
- "<%= BASE_URL %>" es una variable cuyo valor es public/ , ósea con esta variable accedemos a la carpeta que contiene los archivos estáticos.
:::

- En el index.html no hay ningún archivo javascript que se esté ejecutando , esto se debe porque vue utiliza el transpilador para inyectar los archivos javascript en el index.html
### src/main.js 
- Este es el archivo principal que crea y monta la aplicación.
- Como ya sabemos, se esta renderizando el componente App en el div del index.html
- Al refrescar la página, vuelve a montarse la aplicación ,vuelve a ejecutarse el main.js.
### src/App.vue 
- Es el componente principal
- Los componentes son extensiones .vue
### Tres secciones de los componentes
- Ahora los componentes son archivos .vue y tienen tres secciones
### template
- Corresponde a la propiedad template de cuando definimos un componente con el CDN
- Contiene todas las etiquetas HTML (incluyendo los componentes que utiliza) que se van a renderizar al ejecutar el componente.
  
```html
  <template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

```

:::tip Observacion
- Renderiza una imagen y el componente HelloWorld
- Osea renderiza la imagen y el template del componente.
- Se pasa una props llamada msg al componente HelloWorld
:::

### Script
- Contiene las importaciones de los componentes que utiliza.
- Contiene expresiones de javascript. En este apartado va la logica.
- Lo que se exporta por defecto equivale al objeto que contiene el componente holaMundo (que luego le implementamos los methods ,   propiedades calculadas , etc), [representa las Options API](vueVersion.md#options-api)

:::tip Componente hola mundo 
```js
const holaMundo = {
                data() {
                    return {
                        nombre : 'Fede' ,
                        anio : 2021 ,
                        meses : ['Enero' , 'Febrero']
                    }
                }
            }

```
:::


```js
<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

```
:::tip Lo que se exporta por defecto:
- Propiedad name: nombre del componente
- Propiedad components: Son los componentes que se utiliza
:::
### Style
- Esta todo el css del componente.
```html
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

```
- Los estilos del componente APP son globales , ósea se aplica en toda la aplicación.
- La etiqueta &lt;style> puede tener el atributo scoped 
- El atributo scoped es para que el css sea local y no global.
-  Scoped == css local  == que el  estilo solo se aplique en el componente y no en toda la aplicacion.
```html
 <style scoped> </style>
```

### Components/HelloWorld.vue
- Es el componente HelloWorld
- Cada componente es un archivo .vue

```html
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

```
:::tip Observacion 
- Tiene los tres apartados (template, script , style)
- En el script aparte de definir el nombre del componente, se definio la props msg que es de tipo String.
- En el apartado de style , se utiliza el atributo scoped
- El atributo scoped en la etiqueta style es para que el css se aplique solo en el componente actual.
:::

## Instalacion Materialize y Axios
### Materialize
- Es similar a Bootstrap , sirve para aplicar css al proyecto.

En el proyecto , ejecutar los comandos:

```powershell
npm install materialize-css@next
npm install material-design-icons-iconfont 
```

- [material design icons iconfont](https://jossef.github.io/material-design-icons-iconfont/)
- [lista de iconos](https://fonts.google.com/icons?selected=Material+Icons&icon.platform=web)

#### Insertamos los estilos css de materialize y de los iconos

main.js 
```js
import { createApp } from 'vue'
import App from './App.vue'
import 'materialize-css/dist/css/materialize.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
createApp(App).mount('#app')
```
App.vue 
```html
<template>
  <img alt="Vue logo" src="./assets/logo.png">
   <button class="btn red">Boton <i class="material-icons">save</i></button>
</template>

```
:::tip 
- Funcionan los estilos y los iconos.
:::

### Axios 
- Nos permite hacer solicitudes HTTP.
- En el proyecto , ejecutar los comandos

```powershell
npm i axios vue-axios
```
#### Configuramos Vue para que utilice axios.

main.js
```js
import { createApp } from 'vue'
import App from './App.vue'
import 'materialize-css/dist/css/materialize.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
// La aplicacion utiliza VueAxios y axios === createApp(App).use(VueAxios,axios)
createApp(App).use(VueAxios,axios).mount('#app')

```
app.vue 
```js
<template>
  <img alt="Vue logo" src="./assets/logo.png">
   <button @click="saludar" class="btn red">Boton <i class="material-icons">save</i></button>
</template>

<script>

import M from 'materialize-css';
export default {
  name: 'App',
   methods: {
    saludar() {
      M.toast({html:'Saludos'});
    }
   } ,
   mounted() {
    //Accedemos al axios que usa la app con el this
    this.axios.get('https://jsonplaceholder.typicode.com/todos/1').then((res) => {
       console.log(res);
    })
   }
}
</script>

```
:::tip Observacion 
   - Probamos el fetch que configuramos con la aplicacion 
   - [Usamos el método toast de materialize ](https://materializecss.com/toasts.html)
:::

## Vue Router
- [router](https://router.vuejs.org)
- Es una librería de Vue que nos permite  navegar entre diferentes  urls.
- En realidad, depende de la url, te renderiza X componente, ya que vue renderiza todo en el index.html
- Ejemplo:
   - En la url raiz se renderiza el componente uno
   - Y en  la url /contacto se renderiza el componente dos
- Uno debe  especificar que componente debe renderizarse en cada URL.


#### Instalacion
- Ejecutar en el proyecto , el comando:
```powershell
npm i vue-router@next
```
### Creamos las Vistas
- Creamos la carpeta views , que va a contener todos los componentes que se van a renderizar en las urls.
- La carpeta va a contener archivos .vue que se van a renderizar en una url especifica.

Src/views/Login.vue
```html
<template>
  <div>
    <h1>Login</h1>
    <h2>Ruta : /login</h2>
    <h3>http://localhost:8080/login</h3>
  </div>
</template>

<script>
export default {
  name: 'Login',
};
</script>

```
Src/views/Home.vue
```html

<template>
  <div>
    <h1>Home</h1>
    <h2>Ruta : /home</h2>
    <h3>http://localhost:8080/home</h3>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

```
:::tip Observacion 
Un componente se va a renderizar en la URL /login y el otro en la URL /home
:::

### Creamos y configuramos el router:
- Creamos la carpeta router y adentro un index.js

Src/router/index.js



-	En este archivo especificamos que componente debe renderizar cada url 
-	En este archivo creamos las rutas

```js

  // createWebHistory = Crea el historial por medio de la API del navegador
import { createWebHistory, createRouter } from "vue-router";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
// Creamos un array de rutas
const routes = [
  // cada objeto es una ruta
  {
    // path : url en la que se va a renderizar X componente
    path: "/Login",
    // name : 'nombre de la ruta'
    name: "Login",
    // component: Componente que se va a renderizar en el path/name indicado anteriormente (El valor de component es el import de un componente)
    component: Login,
  }, 
  {
    path: "/Estudiante",
    name: "Login",
    component: Home,
  },
];

// Creamos el router 
// createRouter({opciones})
const router = createRouter({
    // La propiedad history sirve para elegir entre diferentes modo de historial (como se va a ver la url)
    // history :  createWebHistory() -- Se veria https://example.com/user/id
    // history: createWebHashHistory() -- Se veria http://localhost:3000/#/login
    // Puede haber otros modos , a investigar!
      history : createWebHistory(),
    //   routes : array de rutas
      routes
})

// Exportamos el router 
 export default router;

```
:::tip Observacion 
- A la ruta se puede acceder por la url (path) o por el nombre
- Cada componente se renderiza en una url especifica.
:::

#### Ahora le indicamos a nuestra aplicación que va a utilizar el router que creamos.

main.js 
```js
import { createApp } from 'vue'
import App from './App.vue'
import 'materialize-css/dist/css/materialize.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
// La aplicacion utiliza VueAxios y axios === .use(VueAxios,axios)
// La aplicacion utiliza un router === createApp(App).use(router)
createApp(App).use(router).use(VueAxios,axios).mount('#app');

```
### Añadimos un menu en el componente principal 

- Vue router nos ofrece la etiqueta &lt;router-link> para remplazar a la etiqueta &lt;a>
- En lugar de usar la etiqueta &lt;a> para redireccionar a otra url, debe emplear la etiqueta &lt;router-link>
- En lugar del atributo href  debe usar el atributo to.
- Atributo to = “el valor del path de la ruta”
-  El atributo to “Redirreciona” como si fuera el href del ancla.
-  El valor del atributo to también puede ser un objeto con una propiedad name , cuyo valor es el nombre de la ruta a redireccionar.

App.vue 
```html
<template>
<nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link :to="{name: 'Login'}">Login</router-link></li>
     
      </ul>
    </div>
  </nav>

</template>

<script>
export default {
  name: 'App',
}
</script>

<style>

</style>

```
### Renderizamos los componentes correspondientes a la URL 

- Ahora tenemos que renderizar los componentes correspondientes a la URL que se especificó en el router que utilizamos.
- El componente &lt;router-view> renderiza los componentes que corresponden a la ruta actual (lo que se configuro en el router)

App.vue 
```html
<template>
  <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link :to="{name: 'Login'}">Login</router-link></li>
     
      </ul>
    </div>
  </nav>
  <div class="container">
    <!-- Renderizamos los componentes que corresponden a la ruta actual -->
    <router-view></router-view>
  </div>
</template>


```
:::tip Observacion 
- Al hacer click en Home , la url pasa a ser localhost:8080/home y se renderiza el componente Home
- Al hacer click en Login , la url pasa a ser localhost:8080/login y se renderiza el componente Login
- Entonces:
  - Localhost:8080/home : el  &lt;router-view> renderiza el componente Home
  - Localhost:8080/login: el  &lt;router-view> renderiza el componente Login
:::

## Configuraciones de Axios

### URL Base de axios
-	Sirve para especificar una ruta “fija” para todas las peticiones de axios
-	La ruta “fija” es la parte de la URL que siempre se va a repetir en todas las peticiones

Main.js
```js
import { createApp } from 'vue'
import App from './App.vue'
import 'materialize-css/dist/css/materialize.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
//axios.defaults.baseURL = 'ruta base/fija';
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';

createApp(App).use(router).use(VueAxios,axios).mount('#app');

```

Home.vue
```js
<template>
  <div>
    <h1>Home</h1>
    <h2>Ruta : /home</h2>
    <h3>http://localhost:8080/home</h3>
        <button class="btn" @click="peticion">Hacer peticion</button>
        <hr>
        {{data}}
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
        data : null
    }
  } ,
  methods:{
     async peticion(){
       const res =  await this.axios.get('posts');
       const data = res.data;
       this.data = data;
   
     }
  }
};
</script>

```

:::tip Observacion 
- La base (url fija) de axios es https://jsonplaceholder.typicode.com/ , entonces lo que se le pasa como url a axios se concatena con la base.
- La url a la que se hace petición es https://jsonplaceholder.typicode.com/posts
:::



### Crear una cabecera por defecto 
-  Crea una cabecera por defecto para todas las peticiones posteriores (esta y las siguientes)
  ```js
  This.axios.defaults.headers.common[‘nombrecabeza’] =    ‘valor cabecera’
  ```
  - [mas info](https://axios-http.com/docs/config_defaults)


:::tip 
- Podes modificar los objetos que utiliza la app en situaciones especificas a traves del main.js
- Ej. El objeto axios puede tener un valor predeterminado en la cabecera o no, eso depende si existe el token. 
- Ej.  Si existe el token (en el Localstorage o cookie), se configura una cabecera por defecto en el axios.
-  Esto sucede porque al refrescar la página, vuelve a montarse la aplicación (vuelve a ejecutarse el main.js)
:::
## Vuex
- Es un almacén para guardar datos de forma global.
- Los datos son accesibles en todos los componentes.



#### Instalacion
```powershell
npm install vuex@next --save
```
#### Creacion del "almacen/tienda"

- Creamos una carpeta llamada storage y dentro un index.js
  
  Src/storage/index.js

```js
  import { createStore } from "vuex";
// createStore({configuracion}) === Crea un almacen

const storage = createStore({
  // state : { los datos globales , los datos del almacen , que van a tener acceso todos los componentes}
  // state : {
  //      dato : valor ,
  //      dato2 : valor2 ,

  // }
  state: {
    autenticado: false,
    userName: "",
    id: "",
  },
  //  mutations: { metodos(){} que modifiquen algun dato del almacen}
  // mutations: {
  //     nombremetodo(){
  //         codigo
  //     } ,
  //     nombremetodo(){
  //         codigo
  //     }
  // }
  mutations: {
    // nombremetodo(state , value)
    //  state = objeto con todos los datos del almacen
    setAuthenticated(state, value) {
      state.autenticado = value;
    },
    setUserName(state, value) {
      state.userName = value;
    },
    setID(state, value) {
      state.id = value;
    },
  },
});

// exportamos el almacen 
export default storage;

```
:::tips tips
- Los métodos definidos en mutations pueden tener lógica de Javascript como manipular el localStorage , hacer un fetch , etc . La única desventaja que la operación debe ser sincrónicas .
:::

### Accedemos a los datos y métodos del almacen
Main.js
```js
import storage from './storage';

// La aplicacion utiliza el almacen
createApp(App).use(router).use(storage).use(VueAxios,axios).mount('#app');

```
:::tip Observacion
-  Ahora que la aplicación utiliza la tienda, podemos acceder a los datos de la misma desde cualquier componente.
:::

Home.vue
```html
<template>
  <div>
    <h1>Home</h1>
    <!-- $store.state == Accedemos a los datos del almacen que utiliza la app  -->
    <p>{{ $store.state.id }}</p>
    <p>{{ $store.state.userName }}</p>
    <p>{{ $store.state.autenticado }}</p>
    <button class="btn" @click="setID">Cambiar id</button>
    <button class="btn" @click="setUserName">Cambiar userName</button>
    <button class="btn" @click="setUtenticado">Cambiar autenticado</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    setUtenticado() {
      //   this.$store == Accedemos al almacen
      //   $store.state == Accedemos a los datos del almacen que utiliza la app
      //  this.$store.commit('nombremetodo' , value ) invoca el nombremetodo del almacen
      // El value corresponde al parametro value del nombremetodo
      this.$store.commit("setAuthenticated", true);
    },
    setID() {
      //   this.$store == Accedemos al almacen
      //   $store.state == Accedemos a los datos del almacen que utiliza la app
      //  this.$store.commit('nombremetodo' , value ) invoca el nombremetodo del almacen
      // El value corresponde al parametro value del nombremetodo
      this.$store.commit("setID", 45);
    },
    setUserName() {
      //   this.$store == Accedemos al almacen
      //   $store.state == Accedemos a los datos del almacen que utiliza la app
      //  this.$store.commit('nombremetodo' , value ) invoca el nombremetodo del almacen
      // El value corresponde al parametro value del nombremetodo
      this.$store.commit("setUserName", "Juan");
    },
  },
};
</script>

```

:::tip Observacion 
- Con this.$store accedemos al almacen
- Con $store.state  accedemos a los datos del almacen que utiliza la app
- Con this.$store.commit(‘nombremetodo’ , parámetro value del metodo)  realizamos una  mutacion(mutation) del almacen.
- ‘nombremetodo’ debe corresponder a algún método que se definio en la propiedad mutations del almacen.
- Commit() invoca un método (mutation/mutacion) del almacen.
- Los datos del almacen tienen reactividad.

:::

## Vuex Persist

- Los datos en vuex(datos del almacen) se reinician/formatean/pierden al refrescar la pagina
- Entonces  para hacer persistente los datos de vuex se utiliza vuex-persist
- Vuex-persist te permite guardar los datos en la cookie o en el Localstorage.

#### Instalacion
```powershell
npm i vuex-persist
```
#### Lo habilitamos y usamos en el almacen
Storage/index.js
```js
import VuexPersistence from "vuex-persist";

mutations: {
    // nombremetodo(state , value)
    //  state = objeto con todos los datos del almacen
    setAuthenticated(state, value) {
      state.autenticado = value;
    },
    setUserName(state, value) {
      state.userName = value;
    },
    setID(state, value) {
      state.id = value;
    },
  },
  plugins: [
    // VuexPersistence({configuracion})
    new VuexPersistence({
      // storage : en donde se va a almacenar los datos del almacen
      storage: window.localStorage,
    }).plugin,
  ],
});

```

:::tip Observacion 
Cuando se modifican los datos del almacen, se guardan en el localStorage , en una clave llamada vuex.
:::


#### Tambien lo podemos configurar para que se guarde en el sessionStorage:
```js
 plugins: [
    // VuexPersistence({configuracion})
    new VuexPersistence({
      // storage : en donde se va a almacenar los datos del almacen
      storage: window.sessionStorage,
    }).plugin,
  ],

```

## template
- El template contiene lo que se va a renderizar en el componente 
- Pero tambien podes usar un &lt;template> dentro de otro  &lt;template> (Osea podes usar un &lt;template> dentro de otro &lt;template>)
- Esto se suele usar para implementar un v-for y adentro un v-if.
- Podes usar &lt;template> como “contenedor” para implementar un v-for , v-if , etc
- Usar el template como contenedor seria como usar un fragment en javascript vainilla.

:::warning  
El componente solo renderizaría el template “raiz/padre”
:::
:::tip
- En vue 3 Se puede tener multiples elementos en el template sin necesidad de utilizar un contenedor. (algo que en vue 2 no se podia)
:::
## Emits
- Sirve para que el componente hijo pueda afectar al componente padre.
- Con emit, podemos desencadenar eventos y pasar datos a la jerarquía de componentes. Esto es útil para cosas como:
   - Emitir datos desde una entrada(input)
   - Cerrar modales desde dentro de una  modal
   - Hacer que nuestro componente padre responda a uno de sus hijos

### $emit(eventName , values)
- Con este metodo , invocamos/activamos un evento 
- eventName:  Es un string con  el nombre de nuestro evento. Nuestro componente principal(padre) escuchará esto.
- values: cualquier valor(es) que queramos pasar con nuestro evento


Ejemplo 1:

Componente hijo
```html
<script>
  export default {
      methods: {
          handleChange (event) {
            // Estamos activando el evento customChange  
            // El evento contendra un valor (segundo parametro)
              this.$emit("customChange", event.target.value.toUpperCase())
          }
      }
  }
</script>
<template>
  <div>
    <label>My Custom Input</label>
    <input type="text" placeholder="Custom input!" @input="handleChange" />
  </div>
</template>

```

Componente padre

```html
<template>
<!-- @custom-change == Es el nombre del evento al que estamos pendiente , en este caso es un evento personalizado que creamos en el componente hijo anteriormente -->
  <HelloWorld @custom-change="handleCustomChange" />
    <p>Uppercase: {{ uppercase }}</p>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {

  components: {
    HelloWorld
  } , data() {
      return {
        uppercase: ''
      }
    },
    methods: {
        handleCustomChange (evento) {
          // evento = el valor del segundo parametro del metodo  $emit
          this.uppercase = evento
        }
    }
}

</script>

```
:::tip Observacion
- El componente HelloWorld  es el componente hijo 
- El objeto "evento" === el segundo parametro del metodo $emit
-  El objeto "evento" lo creamos con el segundo parametro del metodo $emit
:::
### Especificamos que eventos activa el componente
- Se realiza con la propiedad emits en el componente hijo
#### [Implementamos la modalidad básica](vueVersion#definir-emits----modalidad-basica):
- Un array de String donde simplemente se indican los nombres de los eventos personalizados
  
Componente hijo:

```html
<script>
  export default {
      methods: {
          handleChange (event) {
            // Estamos activando el evento customChange  
            // El evento contendra un valor (segundo parametro)
              this.$emit("customChange", event.target.value.toUpperCase())
          }
      } ,
      // Un listado de los eventos personalizados que estamos activando
      emits:["customChange"]
  }
</script>

```
#### [Implementamos la modalidad avanzada](vueVersion#definir-emits----modalidad-avanzada):
- Un Objeto que incluye el nombre de los eventos y una función de validacion.
  
Componente hijo:

```html
<script>
  export default {
      methods: {
          handleChange (event) {
            // Estamos activando el evento customChange  
            // El evento contendra un valor (segundo parametro)
              this.$emit("customChange", event.target.value.toUpperCase())
          }
      } ,
      // Un listado de los eventos personalizados que estamos activando
      emits:{
        customChange : data => {
          console.log("el valor que contendra el evento " + data);
          if (data == "F") {
            return false;
          }
          return true;
        }
      }
  }
</script>

```
:::tip Observacion
Esto funciona de manera similar a la validación de props, donde si nuestro validador(funcion) regresa false, recibiremos una advertencia en nuestra consola. Si bien se seguirá emitiendo el evento con el valor no validado, la advertencia de la consola proporciona comentarios valiosos durante el desarrollo.
:::

