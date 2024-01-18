---
sidebar_position: 10
---

# Proyecto 2 -- ShortUrl

## API a consumir 
- [Guia de la Api -- 1](https://fedeleva.github.io/aprendizaje/Node/apiRest.html)
- [Guia de la Api -- 2](https://fedeleva.github.io/documentacion/docs/Node/apiRest)

1.	Clonamos el repositorio que contiene la Api
2.	Ejecutamos el comando npm install
3.	Configuramos las variables de entorno
.env
```js
URI_MONGO=XXX
JWT_SECRET=nWMUUa
JWT_REFRESH=aJCPfy
MODO=developer
ORIGIN1=
```
1. Configuramos los cors de la API 

.env  
```js
ORIGIN1=http://localhost:9000
```
5. Habilitamos las credenciales 
- Sirve para que el origin (quien realizo la petición) pueda recibir cookies como respuesta.

index.js 
```js
// Habilitamos y configuramos los cors.
//cors({configuracion})
app.use(cors({
    origin: function (origin, callback) {
        // Si el dominio esta autorizado
        if (whiteList.includes(origin)) {
            return callback(null, origin);
        }
        return callback("Error de CORS origin " + origin + "No autorizado!");
    },
    credentials: true,

}))

```
## Quasar 
- Es un framework de código abierto basado en Vue.js para crear aplicaciones, con una sola base de código, para implementar en la web como SPA, PWA, SSR, en una aplicación móvil, usando Cordova para iOS y Android, y en un Aplicación de escritorio, utilizando Electron para Mac, Windows y Linux.

- El lema de Quasar es: escribir el código una vez y desplegarlo simultáneamente como un sitio web, una aplicación móvil y/o una aplicación Electron. Sí, una base de código para todos ellos, que lo ayuda a desarrollar una aplicación en un tiempo récord mediante el uso de una CLI de última generación y el respaldo de las mejores prácticas, los componentes web ultrarrápidos de Quasar.

- [ CLI de quasar](https://quasar.dev/start/quasar-cli)

1. En una carpeta ejecutamos 
```powershell
npm init quasar
```

Opciones: 
1.	App with Quasar CLI …
2.	Nombre de la carpeta (A su gusto)
3.	Quasar v2(…)
4.	Javascript
5.	Quasar APP CLI with  Vite
6.	Nombre del proyecto (A su gusto)
7.	Por defecto
8.	Por defecto
9.	Por defecto
10.	Sass with SCSS Syntax
11.	Opciones a elegir (Seleccionas con el espacio  y enter para continuar)
-	State Management (Pinia)
-	Axios
-	ESLint
12.	Prettier
13.	Yes , use npm


2. Usamos los siguientes comandos para ejecutar el servidor de desarollo


```powershell
npm install -g @quasar/cli
quasar dev

```
3. Configuramos los scripts 
```js
  "scripts": {
    "lint": "eslint --ext .js,.vue ./",
    "format": "prettier --write \"**/*.{js,vue,scss,html,md,json}\" --ignore-path .gitignore",
    "test": "echo \"No test specified\" && exit 0",
    "dev" : "quasar dev",
    "build" : "quasar build"
  },

```
4.  Configuramos para poner el modo createWebHistory(Sirve para quitar las rutas con #)

quasar.config.js
```js
 build: {
      target: {
        browser: [ 'es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1' ],
        node: 'node16'
      },

      vueRouterMode: 'history', // available values: 'hash', 'history'

```
5. Habilitamos los iconos 

quasar.config.js
```js
    extras: [
      // 'ionicons-v4',
      'mdi-v5',
      // 'fontawesome-v6',
      // 'eva-icons',
      // 'themify',
      // 'line-awesome',
      // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!

      'roboto-font', // optional, you are not bound to it
      'material-icons', // optional, you are not bound to it
    ],

```
6.  Configuramos Axios

quasar.config.js
```js
 boot: [
      
      'axios',
    ],

```

src/boot/axios.js
- Este archivo por defecto te genera una instancia llamada api.
- Con dicha instancia podemos acceder a una url fija al realizar una peticion.

```js
import { boot } from 'quasar/wrappers'
import axios from 'axios'
const api = axios.create({ baseURL: 'https://api.example.com' })

export default boot(({ app }) => {

  app.config.globalProperties.$axios = axios
  app.config.globalProperties.$api = api
})

export { api }

```
7. Editamos la pagina principal 

src/pages/IndexPage.vue 

- Contiene la imagen de http://localhost:9000/

```js
<template>
<!-- Añadimos padding -->
  <q-page padding >
    <!-- Componente q-btn (un button)-->
     <q-btn @click="access">Ingresar</q-btn>
  </q-page>
</template>

<script setup>
   const access = () => {
    console.log("Me diste click");
   }
</script>

```
## Axios / Obtenemos el token del login
- Realiza solicitudes HTTP
- El Fetch vive en el navegador (frontend)
- Axios trabaja en el backend  (Node.js)

src/pages/IndexPage.vue 

```js
<template>
<!-- Añadimos padding -->
  <q-page padding >
    <!-- Componente q-btn (un button)-->
     <q-btn @click="access">Ingresar</q-btn>
  </q-page>
</template>

<script setup>
import axios from 'axios';

   const access = () => {
    console.log("Me diste click");
    // axios.method(url , {datos que se van a mandar por el body (se convierte en json de forma automatica)})
    // el method puede ser POST , DELETE , GET , ETC
    // devuelve una promesa
    axios.post('http://localhost:5000/api/login' , {
  email : "usuario@test.com" ,
    password : "123456"
})
.then(res => {
  // La propiedad data contiene la informacion que devuelve la API
  console.log(res.data);
})
.catch(e => console.log(e));
   }
</script>

```

- Tambien puede ser 

```js
const access = async () => {
  try {
    console.log("Me diste click");
    // axios.method(url , {datos que se van a mandar por el body (se convierte en json de forma automatica)})
    // el method puede ser POST , DELETE , GET , ETC
    // devuelve una promesa
    const res = await axios.post('http://localhost:5000/api/login', {
      email: "usuario@test.com",
      password: "123456"
    })
    console.log(res.data);
  } catch (e) {
    console.log(e);
  }

}

```
:::tip Observacion 
- Se hace una peticion post a http://localhost:5000/api/login
- El body de la peticion contiene un json con el email y el password

:::
### Utilizamos el axios de quasar

src/boot/axios.js

```js
const api = axios.create({ baseURL: 'http://localhost:5000' })
```
- la baseURL es la parte de la URL que siempre se repite en todas las peticiones.

IndexPage.vue

```js
<script setup>
import { api } from 'src/boot/axios';

const access = async () => {
  try {
    console.log("Me diste click");
    // api.method(url , {datos que se van a mandar por el body (se convierte en json de forma automatica)})
    // el method puede ser POST , DELETE , GET , ETC
    // devuelve una promesa
    const res = await api.post('/api/login', {
      email: "usuario@test.com",
      password: "123456"
    })
    console.log(res.data);
  } catch (e) {
    console.log(e);
  }

}
</script>

```
- Usamos los ref 

```js

<template>
  <!-- Añadimos padding -->
  <q-page padding>
    <!-- Componente q-btn (un button)-->
    <q-btn @click="access">Ingresar</q-btn>
    {{ token }} -- {{ expiresIn }}
  </q-page>
</template>

<script setup>
import { api } from 'src/boot/axios';
import { ref } from 'vue';
const token = ref('');
const expiresIn = ref('');
const access = async () => {

  try {
    console.log("Me diste click");
    // axios(url , {datos que se van a mandar por el body (se convierte en json de forma automatica)}
    // devuelve una promesa
    const res = await api.post('/api/login', {
      email: "usuario@test.com",
      password: "123456"
    })
    //Asignamos el valor 
    token.value = res.data.token
    expiresIn.value = res.data.expiresIn;
    console.log(res.data);
  } catch (e) {
    console.log(e);
  }

}
</script>

```

## Refrescar el token  
- Configuramos Axios para poder guardar las cookies que crea la API en el navegador.

axios.js 
```js
const api = axios.create({
  baseURL: 'http://localhost:5000',
  // withCredentials = Que reciba cookies
  withCredentials: true,

}

)

```
IndexPage.vue
```js
<script setup>
import { api } from 'src/boot/axios';
import { ref } from 'vue';
const token = ref('');
const expiresIn = ref('');
const access = async () => {

  try {
    console.log("Me diste click");
    // axios(url , {datos que se van a mandar por el body (se convierte en json de forma automatica)}
    // devuelve una promesa
    const res = await api.post('/api/login', {
      email: "usuario@test.com",
      password: "123456"
    })
    //Asignamos el valor 
    token.value = res.data.token
    expiresIn.value = res.data.expiresIn;
    console.log(res.data);
  } catch (e) {
    console.log(e);
  }

}

const refreshToken = async () => {
  try {
    const res = await api.get('/api/refresh');
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
}

refreshToken();
</script>

```

## Enviar el token para crear un link / Axios V2 

IndexPage.vue 

```js
<template>
  <!-- Añadimos padding -->
  <q-page padding>
    <!-- Componente q-btn (un button)-->
    <q-btn @click="access">Ingresar</q-btn>
    <q-btn @click="createLink">Crear un link</q-btn>
    {{ token }} -- {{ expiresIn }}
  </q-page>
</template>

<script setup>
const createLink = async () => {
  try {
    //axios({configuraciones})
    const res = await api({
      // Metodo de Peticion (GET , POST , ETC)
      method: 'POST',
      // URL 
      url: 'api/links',
      // Cabecera de la peticion
      headers: {
        'Authorization': 'Bearer ' + token.value
      },
      // La informacion que se manda por el body 
      // Axios por atras lo convierte en JSON
      data: {
        longLink: 'https://fedeleva.github.io/documentacion/docs/Node/apiRest#crear'
      }
    })
    console.log(res.data);
  } catch (error) {
    console.log(error)
  }
}
</script>

```
:::tip Observacion 
- Se hace una peticion post a http://localhost:5000/api/links
- El body de la peticion contiene un json con el longLink
-  El header  de la peticion contiene el token

:::
## Refrescar el token cada 15 minuto 

IndexPage.vue
```js
<script setup>
import { api } from 'src/boot/axios';
import { ref } from 'vue';
const token = ref('');
const expiresIn = ref('');
const access = async () => {

  try {
    console.log("Me diste click");
    // axios(url , {datos que se van a mandar por el body (se convierte en json de forma automatica)}
    // devuelve una promesa
    const res = await api.post('/api/login', {
      email: "usuario@test.com",
      password: "123456"
    })
    //Asignamos el valor 
    token.value = res.data.token
    expiresIn.value = res.data.expiresIn;
    setTime();
  } catch (e) {
    console.log(e);
  }

}

const refreshToken = async () => {
  try {
    const res = await api.get('/api/refresh');
    token.value = res.data.token
    expiresIn.value = res.data.expiresIn;
    setTime();
  } catch (error) {
    console.log(error);
  }
}
refreshToken();
const setTime = () => {
  setTimeout(() => {
    refreshToken()
  }, expiresIn.value * 1000 - 6000)
}


const createLink = async () => {
  try {
    //axios({configuraciones})
    const res = await api({
      // Metodo de Peticion (GET , POST , ETC)
      method: 'POST',
      // URL 
      url: 'api/links',
      // Cabecera de la peticion
      headers: {
        'Authorization': 'Bearer ' + token.value
      },
      // La informacion que se manda por el body 
      // Axios por atras lo convierte en JSON
      data: {
        longLink: 'https://fedeleva.github.io/documentacion/docs/Node/apiRest#crear'
      }
    })
    console.log(res.data);
  } catch (error) {
    console.log(error)
  }
}

</script>

```

:::tip Observacion 
- Se produce un bucle infinito con la función setTime.
- La función setTime se ejecutará 6 segundos antes de que expire el token.
:::

## Pagina protegida / Layout

:::tip En quaser existen las carpetas
- Pages : Donde están las paginas , se suele llamar views
- Router  : Se encuentra el router
:::

### Pagina "protegida" 
- Creamos una pagina “protegida”

src/pages/ProtectedPage.vue
```js
<template>
<h3>Ruta protegida</h3>
</template>

```
### Configuracion de rutas

src/routes/routes.js
- Aca están todas las rutas.

:::tip Analisis 
```js
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes

```
- Todos los children son componentes (provienen de views/pages) que van a tener el mismo layout(diseño).
- Lo que figura en component  ('layouts/MainLayout.vue') se va a renderizar en todos los componentes children
- MainLayout Se va a renderizar en todos los componentes hijos


:::

- Lo modificamos:

```js
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'protected', component: () => import('pages/ProtectedPage.vue') },
      { path: 'login', component: () => import('pages/LoginPage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]
```

:::tip Explicacion 
- La propiedad path de nivel superior(path:’/’) es la ruta en donde se va a renderizar el componente padre. Que a su vez esta anidada con las rutas de los componentes hijos.
- Ej. Componentepadre/componentehijo 

Componente padre = /

Componente hijo = protected

Ruta = /protected
- La propiedad children  tiene un array con los componentes hijos y sus rutas.
- El valor de la propiedad path (de los children) contiene la url en donde se va a renderizar el componente children 

- Por lo tanto:

http://localhost:9000/ : Se renderiza el componente IndexPage  y MainLayout

http://localhost:9000/protected : Se renderiza el componente ProtectedPage y MainLayout


:::

## Pinia 
- Nos permite trabajar con el Composition API (Como si fuera un &ltscript setup>)
- Gracias a quasar ya tenemos la carpeta stores creado con la tienda.

#### Vamos a crear una tienda que trabaje con la Composition Api

stores/user-store.js
```js
import { defineStore } from 'pinia';
import { ref } from 'vue';
export const useUserStore = defineStore('user',
  () => {
    const token = ref('tokenGlobal');
    const expiresIn = ref('');

    return {
      token, expiresIn
    }
  });

```

:::tip Observacion 
 Devuelve el token y la expiración.
:::

Pages/LoginPage.vue

```js
<template>
  <h3>Login {{ userStore.token }}</h3>
</template>

<script setup>
import { useUserStore } from '../stores/user-store';

const userStore = useUserStore();

</script>

```
:::tip Observacion 
Accede al token que devuelve la store.
:::

### Le añadimos  métodos a la Store

stores/user-store.js

```js
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { api } from 'src/boot/axios';
export const useUserStore = defineStore('user',
  () => {
  const token = ref(null);
    const expiresIn = ref(null);
    const access = async () => {

      try {
        console.log("Me diste click");
        // axios(url , {datos que se van a mandar por el body (se convierte en json de forma automatica)}
        // devuelve una promesa
        const res = await api.post('/api/login', {
          email: "usuario@test.com",
          password: "123456"
        })
        //Asignamos el valor
        token.value = res.data.token
        expiresIn.value = res.data.expiresIn;
        setTime();
      } catch (e) {
        console.log(e);
      }

    }
    const refreshToken = async () => {
      try {
        const res = await api.get('/api/refresh');
        token.value = res.data.token
        expiresIn.value = res.data.expiresIn;
        setTime();
      } catch (error) {
        console.log(error);
      }
    }
    const setTime = () => {
      setTimeout(() => {
        refreshToken()
      }, expiresIn.value * 1000 - 6000)
    }
    return {
      token, expiresIn, access, refreshToken
    }
  });

```

indexPage.vue
```js

<template>
  <!-- Añadimos padding -->
  <q-page padding>
    <!-- Componente q-btn (un button)-->
    <q-btn @click="userStore.access">Ingresar</q-btn>
    <q-btn @click="createLink">Crear un link</q-btn>
    {{ userStore.token }} -- {{ userStore.expiresIn }}
  </q-page>
</template>

<script setup>
import { api } from 'src/boot/axios';
import { useUserStore } from '../stores/user-store';
const userStore = useUserStore();
userStore.refreshToken();
const createLink = async () => {
  try {
    //axios({configuraciones})
    const res = await api({
      // Metodo de Peticion (GET , POST , ETC)
      method: 'POST',
      // URL
      url: 'api/links',
      // Cabecera de la peticion
      headers: {
        'Authorization': 'Bearer ' + token.value
      },
      // La informacion que se manda por el body
      // Axios por atras lo convierte en JSON
      data: {
        longLink: 'https://fedeleva.github.io/documentacion/docs/Node/apiRest#crear'
      }
    })
    console.log(res.data);
  } catch (error) {
    console.log(error)
  }
}
</script>

```
## Cerrar sesion 

User-store.js

```js
    const logout = async () => {
      try {
        await api.get('/api/logout');

      } catch (error) {
        console.log(error);
      } finally {
        resetStore();
      }
    }

    const resetStore = () => {
      token.value = null;
      expiresIn.value = null;

    }
    return {
      token, expiresIn, access, refreshToken, logout
    }

```

IndexPage.vue
```js
<template>
  <!-- Añadimos padding -->
  <q-page padding>
    <!-- Componente q-btn (un button)-->
    <q-btn @click="userStore.access">Ingresar</q-btn>
    <q-btn @click="createLink">Crear un link</q-btn>
    <q-btn @click="userStore.logout">Salir</q-btn>
    {{ userStore.token }} -- {{ userStore.expiresIn }}
  </q-page>
</template>
```

##  Ruta Protegida
1. Añadimos los botones en el menu


Layouts/MainLayout.vue
```js
<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <q-btn color="dark" to="/">Inicio</q-btn>
        <q-btn color="green" @click="userStore.access" v-if="!userStore.token">Login</q-btn>
        <q-btn color="red" @click="userStore.logout" v-if="userStore.token">Logout</q-btn>
        <q-btn color="orange" to="/protected" v-if="userStore.token">Protected</q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          Essential Links
        </q-item-label>

        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from 'src/stores/user-store';
import EssentialLink from 'components/EssentialLink.vue'
const leftDrawerOpen = ref(false)
const essentialLinks = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]
const userStore = useUserStore();
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

```
:::tip Quasar props to
Quasar nos brinda la props to para redireccionar a otra url  usando vue router.
:::

indexPage.vue
```js
<template>
  <!-- Añadimos padding -->
  <q-page padding>
    {{ userStore.token }} -- {{ userStore.expiresIn }}
  </q-page>
</template>

```
1. Configuramos el router 

### Metodo beforeEach
- El Router de Vue tiene el metodo beforeEach
- Como parámetro tiene un callback con tres parámetros (to , from , next)
- El callback se ejecuta cada vez que cargamos una URL.

```js
  Router.beforeEach((to, from, next) => {

  })

```
- Si lo deja vacío, la pagina no cargara ya que no se ejecuta el next().
- Es muy parecido a los middlewares de express. (los tres parametros)
- next() = Ejecuta/Renderiza el componente que se indicó a través de la url.
- To = Contiene información de la url actual. Entre ellas se encuentra el meta.
- El next también sirve para redireccionar a otra url.
- Ej.
Redirecciona al login

 ```js
 next('/login');
 ```

#### Una url con meta: 
Router/routes.js
```js
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: 'protected', component: () => import('pages/ProtectedPage.vue'),
        meta: {
          auth: true
        }
      },
      { path: 'login', component: () => import('pages/LoginPage.vue') },
    ]
  },

```

Router/index.js

- Leemos toda la información (incluida el meta que configuramos anteriormente)
```js
 const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE)
  })
  Router.beforeEach((to, from, next) => {
    console.log(to);
    // Renderize el componente
    next();
  })
  return Router

```


### Configuramos la ruta protegida
Router/index.js
```js
import { route } from 'quasar/wrappers'
import { useUserStore } from 'src/stores/user-store'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE)
  })
  Router.beforeEach((to, from, next) => {
    const userStore = useUserStore();
    const requiredAuth = to.meta.auth;
    // Si la ruta es protegida
    if (requiredAuth) {
      //validar al usuario o token
      if (userStore.token) {
        return next();
      }
      return next('/login');
    } else {
      next();
    }

  })
  return Router
})

```

:::tip Observacion 
- Solo se podrá acceder a la ruta protegida si existe el token.
- Utilizamos el meta de la ruta /protected para verificar si la ruta es protegida
:::



:::tip
El método useUserStore() se debe llamar dentro de un método. (en caso contrario no se garantiza su funcionamiento)
:::

#### Redireccionamos los botones de Iniciar sesion y cerrar sesion 
MainLayout.vue
```js
   <q-btn color="red" @click="logout" v-if="userStore.token">Logout</q-btn>
  <q-btn color="green" @click="access" v-if="!userStore.token">Login</q-btn>


import { useRouter } from 'vue-router';
const router = useRouter();
const logout = () => {
  userStore.logout();
  router.push('/login');
}
const access = () => {
  userStore.access();
  router.push('/');
}

```


## Añadimos persistencia de la sesion del  usuario

Router/index.js
```js
  Router.beforeEach(async (to, from, next) => {
    const userStore = useUserStore();
    const requiredAuth = to.meta.auth;
    // Si existe el token en memoria
    if (userStore.token) {
      return next();
    }
    //Si no existe el token
    if (localStorage.getItem('user')) {
      await userStore.refreshToken();
      // Si la ruta es protegida
      if (requiredAuth) {
        //validar al usuario o token
        if (userStore.token) {
          return next();
        }
        return next('/login');
      } else {
        return next();
      }
    } else {
      if (requiredAuth) {
        await userStore.refreshToken();
        if (userStore.token) {
          return next();
        }
        return next('/login');

      }

      next();
    }

  })

```

#### Abreviacion 
```js
  Router.beforeEach(async (to, from, next) => {
    const userStore = useUserStore();
    const requiredAuth = to.meta.auth;
    // Si existe el token en memoria
    if (userStore.token) {
      return next();
    }
    //Si no existe el token
    if (requiredAuth || localStorage.getItem('user')) {
      await userStore.refreshToken();
      if (userStore.token) {
        return next();
      }
      return next("/login");
    }
    return next();


  })

```

user-store.js
```js
   const access = async () => {

      try {
        console.log("Me diste click");
        // axios(url , {datos que se van a mandar por el body (se convierte en json de forma automatica)}
        // devuelve una promesa
        const res = await api.post('/api/login', {
          email: "usuario@test.com",
          password: "123456"
        })
        //Asignamos el valor
        token.value = res.data.token
        expiresIn.value = res.data.expiresIn;
        // Creamos un dato en el localStorage
        localStorage.setItem('user', true);

        setTime();
      } catch (e) {
        console.log(e);
      }

    }

 const refreshToken = async () => {
      try {
        const res = await api.get('/api/refresh');
        token.value = res.data.token
        expiresIn.value = res.data.expiresIn;
        // Creamos un dato en el localStorage
        localStorage.setItem('user', true);
        setTime();
      } catch (error) {
        console.log(error);
        // Borramos un dato del localStorage
        localStorage.removeItem('user');
      }
    }

    const logout = async () => {
      try {
        await api.get('/api/logout');

      } catch (error) {
        console.log(error);
      } finally {
        resetStore();
        // Borramos un dato del localStorage
        localStorage.removeItem('user');
      }
    }

```

## Login 

user-store.js
```js
    const access = async (email, password) => {

      try {
        console.log("Te estas logeando");
        // axios(url , {datos que se van a mandar por el body (se convierte en json de forma automatica)}
        // devuelve una promesa
        const res = await api.post('/api/login', {
          email,
          password
        })
        //Asignamos el valor
        token.value = res.data.token
        expiresIn.value = res.data.expiresIn;
        // Creamos un dato en el localStorage
        localStorage.setItem('user', true);
        setTime();
      } catch (e) {
        console.log(e);
      }

    }

```

MainLayout.vue

```js
   <q-btn color="green" to="/login" v-if="!userStore.token">Login</q-btn>
```

LoginPage.vue

- [Componentes del formulario](https://quasar.dev/vue-components/form)

```js
<template>
  <q-page padding class="row justify-center">
    <div class="col-12 col-sm-6 col-md-5">
      <h3>Login {{ userStore.token }}</h3>
      <q-form @submit.prevent="handleSubmit">
        <q-input v-model="email" label="Ingrese email">

        </q-input>
        <q-input v-model="password" label="Ingrese contraseña">

        </q-input>
        <div>
          <q-btn label="Login" type="submit"></q-btn>
        </div>
      </q-form>
    </div>

  </q-page>

</template>

<script setup>
import { useUserStore } from '../stores/user-store';
import { ref } from 'vue';
const userStore = useUserStore();
const email = ref('');
const password = ref('');
const handleSubmit = async () => {
  try {

    console.log(email.value)
    console.log(password.value)
    // await userStore.access();
  } catch (error) {
    console.log(error);
  }
}
</script>

<style>
</style>

```
### Validaciones 

:::tip props rules 
- Usamos la props rules para validacion
- Recibe un array con funciones
- Cada función recibe el valor del input y  realiza una validacion (devuelve true si se logra validar y si no se cumple, devuelve un mensaje) .
:::

:::tip retorno
- condición && = Verifica que sea true
- condición || = Verifica que sea false
:::

- [Expresion regular email](http://w3.unpocodetodo.info/utiles/regex-ejemplos.php?type=email )

```js
<template>
  <q-page padding class="row justify-center">
    <div class="col-12 col-sm-6 col-md-5">
      <h3>Login {{ userStore.token }}</h3>
      <q-form @submit.prevent="handleSubmit">
        <q-input v-model="email" label="Ingrese email" type="text" :rules="[
      //  (val) => (Validacion) || Mensaje de error
      (val) => (val && val.length > 3) || 'Escriba algo 🤡🤡🤡'
      ,
      (val) =>
        /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(val) ||
        'Formato Email incorrecto']">

        </q-input>
        <q-input v-model="password" label="Ingrese contraseña" type="password" :rules="[
          (val) => (val && val.length >= 6) || 'Escriba algo VAGONETA 🤡🤡🤡'
        ]">
        </q-input>
        <div>
          <q-btn label="Login" type="submit"></q-btn>
        </div>
      </q-form>
    </div>

  </q-page>

</template>
<script setup>
import { useUserStore } from '../stores/user-store';
import { ref } from 'vue';
const userStore = useUserStore();
const email = ref('usuario@test.com');
const password = ref('123456');
const handleSubmit = async () => {
  try {
    await userStore.access(email.value, password.value);
  } catch (error) {
    console.log(error);
  }
}
</script>

```

:::tip Observacion 
- Valida los datos que se envía a través del formulario.
- Si es todo correcto, se ejecuta la función handleSubmit().
- La función handleSubmit() inicia sesion.
:::

###  Validaciones de la API (Codigo de respuesta diferente a 2xx)

- [Como maneja los errores Axios](https://axios-http.com/es/docs/handling_errors)
- Axios maneja las respuestas del servidor relacionadas con errores (403, 404, etc) de otra forma
- Si como respuesta, te devuelve un código de respuesta distinto a 200, se maneja en el catch.


user-store.js

```js
  const access = async (email, password) => {

      try {
        console.log("Te estas logeando");
        // axios(url , {datos que se van a mandar por el body (se convierte en json de forma automatica)}
        // devuelve una promesa
        const res = await api.post('/api/login', {
          email,
          password
        })
        //Asignamos el valor
        token.value = res.data.token
        expiresIn.value = res.data.expiresIn;
        // Creamos un dato en el localStorage
        localStorage.setItem('user', true);
        setTime();
      } catch (error) {
        if (error.response) {
          // La respuesta fue hecha y el servidor respondió con un código de estado
          // que esta fuera del rango de 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // La petición fue hecha pero no se recibió respuesta
          // `error.request` es una instancia de XMLHttpRequest en el navegador y una instancia de
          // http.ClientRequest en node.js
          console.log(error.request);
        } else {
          // Algo paso al preparar la petición que lanzo un Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      }

    }

```
#### Empezamos a trabajar en el catch de la función access:
- Usamos el throw para lanzar un error

```js
catch (error) {
        if (error.response) {
// Lanzamos un error 
          throw error.response.data;
        } else if (error.request) {

          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
      }

```
LoginPage.vue

```js
<script setup>
import { useUserStore } from '../stores/user-store';
import { ref } from 'vue';
const userStore = useUserStore();
const email = ref('');
const password = ref('');
const handleSubmit = async () => {
  try {
    await userStore.access(email.value, password.value);
  } catch (error) {
    console.log(error);
  }
}
</script>

```

### Empezamos a trabajar con el dialogo.

:::tip validaciones backend 
- Las validaciones del backend se tratan de otra forma
- Se recomienda que siempre sea el mismo mensaje de error , para mayor seguridad
- Ej. Ingrese el email correctamente
:::

- [plugin dialogo](https://quasar.dev/quasar-plugins/dialog)



#### Empezamos
- Instalamos el plugin de Dialog 

quasar.config.js

```js
    framework: {
      config: {},

      // iconSet: 'material-icons', // Quasar icon set
      // lang: 'en-US', // Quasar language pack

      // For special cases outside of where the auto-import strategy can have an impact
      // (like functional components as one of the examples),
      // you can manually specify Quasar components/directives to be available everywhere:
      //
      // components: [],
      // directives: [],

      // Quasar plugins
      plugins: [
        'Dialog'
      ]
    }

```

LoginPage.vue

```js
<script setup>
import { useUserStore } from '../stores/user-store';
import { ref } from 'vue';
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router';
const userStore = useUserStore();
const email = ref('');
const password = ref('');
const router = useRouter();
// $q tiene los metodos para crear los dialogos
const $q = useQuasar()
const handleSubmit = async () => {
  try {
    await userStore.access(email.value, password.value);
    router.push('/');
    email.value = '';
    password.value = '';

  } catch (error) {
    console.log(error);
    alertDialogBackend(error.error);

  }
}
const alertDialogBackend = (message = 'Error en el servidor') => {
  // Creamos un dialogo
  $q.dialog({
    title: 'Error',
    message
  })
}
</script>

```

:::tip backend vs frontend 
- Las Validaciones en el backend son obligatorias porque aportan seguridad
- Las validaciones del frontend solo ayudan al usuario.
- Por lo tanto siempre hay que gestionar las validaciones del backend y frontend al realizar un formulario.
:::

## Register
router/routes.js
```js
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '', component: () => import('pages/IndexPage.vue'), meta: {
          auth: true
        }
      },
      {
        path: 'protected', component: () => import('pages/ProtectedPage.vue'),
        meta: {
          auth: true
        }
      },
      { path: 'login', component: () => import('pages/LoginPage.vue') },
      { path: 'register', component: () => import('pages/RegisterPage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

```

MainLayout.vue
```js
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <q-btn class="q-mr-sm" color="dark" to="/" v-if="userStore.token">Inicio</q-btn>
        <q-btn class="q-mr-sm" color="green" to="/register" v-if="!userStore.token">Register</q-btn>
        <q-btn class="q-mr-sm" color="green" to="/login" v-if="!userStore.token">Login</q-btn>
        <q-btn class="q-mr-sm" color="red" @click="logout" v-if="userStore.token">Logout</q-btn>
        <q-btn class="q-mr-sm" color="orange" to="/protected" v-if="userStore.token">Protected</q-btn>
      </q-toolbar>
    </q-header>

```

User-store.js
```js
 const access = async (email, password) => {

      try {
        console.log("Te estas logeando");
        // axios(url , {datos que se van a mandar por el body (se convierte en json de forma automatica)}
        // devuelve una promesa
        const res = await api.post('/api/login', {
          email,
          password
        })
        //Asignamos el valor
        token.value = res.data.token
        expiresIn.value = res.data.expiresIn;
        // Creamos un dato en el localStorage
        localStorage.setItem('user', true);
        setTime();
      } catch (error) {
        if (error.response) {
          throw error.response.data;
        } else if (error.request) {

          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
      }

    }
    const register = async (email, password, repassword) => {

      try {
        console.log("Te estas logeando");
        // axios(url , {datos que se van a mandar por el body (se convierte en json de forma automatica)}
        // devuelve una promesa
        const res = await api.post('/api/register', {
          email,
          password,
          repassword
        })
        //Asignamos el valor
        token.value = res.data.token
        expiresIn.value = res.data.expiresIn;
        // Creamos un dato en el localStorage
        localStorage.setItem('user', true);
        setTime();
      } catch (error) {
        if (error.response) {
          throw error.response.data;
        } else if (error.request) {

          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
      }

    }
   return {
      token, expiresIn, access, refreshToken, logout, register
    }

```
Pages/RegisterPage.vue
```js
<template>
  <q-page padding class="row justify-center">
    <div class="col-12 col-sm-6 col-md-5">
      <h3>Register </h3>
      <q-form @submit.prevent="handleSubmit">

        <q-input v-model="email" label="Ingrese email" type="text" :rules="[
      // (val) => (Validacion) || Mensaje de error
      (val) => (val && val.length > 3) || 'Escriba algo 🤡🤡🤡'
      ,
      (val) =>
        /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(val) ||
        'Formato Email incorrecto']">

        </q-input>

        <q-input v-model="password" label="Ingrese contraseña" type="password" :rules="[
          (val) => (val && val.length >= 6) || 'Escriba algo VAGONETA 🤡🤡🤡'
        ]">
        </q-input>
        <q-input v-model="repassword" label="Repita contraseña" type="password" :rules="[
          (val) => (val && val === password) || 'No coinciden las contraseñas'
        ]">
        </q-input>
        <div>
          <q-btn label="Register" type="submit"></q-btn>
        </div>
      </q-form>
    </div>

  </q-page>

</template>

<script setup>
import { useUserStore } from '../stores/user-store';
import { ref } from 'vue';
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router';
const userStore = useUserStore();
const email = ref('usuario@test.com');
const password = ref('123456');
const repassword = ref('123456');
const router = useRouter();
// $q tiene los metodos para crear los dialogos
const $q = useQuasar()
const handleSubmit = async () => {
  try {
    await userStore.register(email.value, password.value, repassword.value);
    router.push('/');
    email.value = '';
    password.value = '';
    repassword.value = '';

  } catch (error) {
    console.log(error);
    alertDialogBackend(error.error);

  }
}
const alertDialogBackend = (message = 'Error en el servidor') => {
  // Creamos un dialogo
  $q.dialog({
    title: 'Error',
    message
  })
}
</script>

<style>
</style>

```
##  Crear Link

- stores/url-store.js 

- [Usar una store dentro de otra store](https://pinia.vuejs.org/core-concepts/actions.html#accessing-other-stores-actions )

```js
import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { useUserStore } from './user-store';
import { ref } from 'vue';
export const useLinkStore = defineStore('Link', () => {
  const useStore = useUserStore();
  const links = ref([]);
  const createLink = async (longLink) => {

    try {
      // api({configuracion})
      const res = await api({
        url: '/api/links/',
        method: "POST",
        headers: {
          Authorization: "Bearer " + useStore.token
        },
        data: {
          longLink
        }
      })
      console.log(res.data);
      links.value.push(res.data.link);
    } catch (error) {

      console.log(error.response?.data || error);
    }
  }

  return {
    createLink, links
  }
});

```

:::tip Observacion 
- Usamos el axios de otra forma ( con un solo objeto de configuración)
- [Se tratan las respuestas  del servidor cuyo código de respuesta sea distinto a 200 en el catch](https://axios-http.com/es/docs/handling_errors)
:::

IndexPage.vue
```js
<template>
  <!-- Añadimos padding -->
  <q-page padding>
    <q-btn @click="useLink.createLink('https://docusaurus.io/docs/docusaurus-core')">Crear
      link</q-btn>
    <pre>
       {{ useLink.links }}
      </pre>
  </q-page>
</template>

<script setup>
import { useLinkStore } from 'src/stores/url-store';
const useLink = useLinkStore();

</script>

```

## Obtener links

url-store.js

```js
const getLinks = async () => {
    try {
      console.log("Llamando a la peticion");
      const res = await api({
        url: '/api/links/',
        method: "GET",
        headers: {
          Authorization: "Bearer " + useStore.token
        }

      })
      console.log(res.data);
      links.value = [...res.data.links]
    } catch (error) {
      console.log(error.response?.data || error);
    }
  }
  getLinks();
  return {
    createLink, links
  }
});

```

:::tip Observacion 
- Cuando “iniciamos” la tienda con el metodo useLinkStore() por primera vez , se inicializan los métodos , valores y se ejecutan las funciones que llamamos en la store
- Las funciones que ejecutamos desde la store (getLinks) , solo se ejecutan al inicializar la tienda (ósea solo una vez en toda la ejecución del progama (sitio web)).
- Al ejecutar el useLinkStore() por segunda vez o tercera o  x vez  , utiliza los métodos y valores ya inicializados.
:::

## Componente -- Formulario agregar Link / Notify 
- [Para los mensajes vamos a usar el plugin Notify de quasar](https://quasar.dev/quasar-plugins/notify#introduction)




quasar.config.js
```js
    framework: {
      config: {},

      // iconSet: 'material-icons', // Quasar icon set
      // lang: 'en-US', // Quasar language pack

      // For special cases outside of where the auto-import strategy can have an impact
      // (like functional components as one of the examples),
      // you can manually specify Quasar components/directives to be available everywhere:
      //
      // components: [],
      // directives: [],

      // Quasar plugins
      plugins: [
        'Dialog', 'Notify'
      ]
    }

```
Components/AddLink.vue
```js
<script setup>
import { useLinkStore } from 'src/stores/url-store';
import { useQuasar } from 'quasar'

import { ref } from 'vue';
const link = ref('');
const useLink = useLinkStore()
// $q tiene los metodos para crear las notificaciones
const $q = useQuasar()
const addLink = async () => {
  console.log(link.value);
  try {
    await useLink.createLink(link.value);
    $q.notify('Link agregado')
  } catch (error) {
    // Creamos un dialogo
    $q.notify('Hubo un error en la validacion')
    console.log(error);
  }

}

</script>

<template>
  <q-form @submit.prevent="addLink">
    <q-input v-model="link" label="Ingrese link aqui" placeholder="Ingrese su super link" :rules="[
      val => val && val.trim() !== '' || 'Escribe algo por favor'
    ]"></q-input>
    <q-btn class="q-mt-sm full-width" label="Agregar" color="primary" type="submit"></q-btn>
  </q-form>

</template>

```

url-store.js
-  Usamos el throw para lanzar un error
```js
   const createLink = async (longLink) => {

    try {
      // api({configuracion})
      const res = await api({
        url: '/api/links/',
        method: "POST",
        headers: {
          Authorization: "Bearer " + useStore.token
        },
        data: {
          longLink
        }
      })
      console.log(res.data);
      links.value.push(res.data.link);
    } catch (error) {

      throw error.response?.data || error
    }
  }

```

IndexPage.vue
```js

<template>
  <!-- Añadimos padding -->
  <q-page padding>
    <AddLink></AddLink>
    <pre>
       {{ useLink.links }}
      </pre>
  </q-page>
</template>

<script setup>
import { useLinkStore } from 'src/stores/url-store';
import AddLink from 'src/components/AddLink.vue';
const useLink = useLinkStore();

</script>

```

## Composable Y Loading 
:::tip Composables 
- Son como los hooks de React
- Se utilizan para reutilizar lógica/código.
:::

src/composables/notifyHook.js
```js
import { useQuasar } from 'quasar'
export const useNotify = () => {
  // $q tiene los metodos para crear las notificaciones
  const $q = useQuasar()
  const showNotify = (message, color = 'negative', icon = 'report_problem') => {
    $q.notify({
      message, color, icon: icon && null,
    })
  }
  return { showNotify };
}

```
AddLink.vue
```js
<script setup>
import { useLinkStore } from 'src/stores/url-store';

import { ref } from 'vue';
import { useNotify } from '../composables/notifyHook'
const link = ref('');
const useLink = useLinkStore()
const { showNotify } = useNotify();
const addLink = async () => {
  console.log(link.value);
  try {
    await useLink.createLink(link.value);
    showNotify('Link agregado con exito', 'green');
  } catch (error) {
    // Creamos un dialogo
    showNotify('Error al agregar');
  }

}

</script>

```
### Loading 
- Quasar ofrece la props loading , si su valor es true se genera la animación de carga y bloquea el botón.

AddLink.vue
```js
const link = ref('');
const loading = ref(false);

const useLink = useLinkStore()
const { showNotify } = useNotify();
const addLink = async () => {
  console.log(link.value);
  try {
    loading.value = true;
    await useLink.createLink(link.value);
    showNotify('Link agregado con exito', 'green');
  } catch (error) {
    // Creamos un dialogo
    showNotify('Error al agregar');
  } finally {
    loading.value = false;
  }

}

 <q-btn class="q-mt-sm full-width" label="Agregar" color="primary" type="submit" :loading="loading"></q-btn>

```

#### Añadimos los mensajes de errores en las notificaciones

AddLink.vue
```js
  } catch (error) {
    console.log(error);
    if (error.errors) {
      error.errors?.forEach(item => {
        showNotify(item.msg);
      });
      return;
    }
    // Creamos un dialogo
    showNotify('Error al agregar');
  } finally {
    loading.value = false;
  }

```

## Mostrar las url en componentes / Props

- [Componente Card](https://quasar.dev/vue-components/card)
- [Iconos mdi-v5](https://materialdesignicons.com/)

components/LinkCard.vue

```js
<script setup>
// Definimos los props
// defineProps({ nombreprops : tipo de dato})
defineProps(
  {
    link: Object
  }
)
</script>
<template>
  <q-card class="my-card q-mb-sm">
    <q-card-section>
      <div class="text-overline">{{ link.nanoLink }}</div>
      {{ link }}
    </q-card-section>
    <q-separator />

    <q-card-actions>
      <!--  trash-can-outline es el nombre del icono que se encuentra en el sitio web -->
      <!-- mdi-nombreicono -->
      <q-btn flat round icon="mdi-trash-can-outline" color="red" />
      <q-btn flat round icon="mdi-pencil-outline" />
      <q-btn flat color="primary">
        Copy
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

```
:::tip Observacion 
- Tiene una props llamada link
- Utilizamos los iconos que habilitamos en quasar ('mdi-v5' )
:::

IndexPage.vue

```js
<template>
  <!-- Añadimos padding -->
  <q-page padding>
    <AddLink class="q-mb-xl"></AddLink>
    <template v-for="link of useLink.links" :key="link._id">
      <LinkCard :link="link" />
    </template>
  </q-page>
</template>

<script setup>
import { useLinkStore } from 'src/stores/url-store';
import AddLink from 'src/components/AddLink.vue';
import LinkCard from 'src/components/LinkCard.vue';
const useLink = useLinkStore();

</script>

```

:::tip Observacion
el template sirve para no generar un div extra (que contiene todo)
:::

## Eliminar

url-store.js

```js
getLinks();
  const removeLink = async (_id) => {
    try {
      await api({
        url: `/api/links/${_id}`,
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + useStore.token
        }
      })
      links.value = links.value.filter(item => item._id !== _id);
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  return {
    createLink, links, removeLink
  }
});

```

LinkCard.vue
```js
<script setup>
import { useQuasar } from 'quasar'
import { useLinkStore } from 'src/stores/url-store';
const useLink = useLinkStore();
const $q = useQuasar();
// Definimos los props
// defineProps({ nombreprops : tipo de dato})
defineProps(
  {
    link: Object
  }

)
const deleteLink = async (id) => {
  // Creamos un dialogo con opciones (Cancelar y Ok)
  $q.dialog({
    title: 'Cuidado',
    message: '¿Quieres eliminar el elemento?',
    cancel: true,
    persistent: true
  }).onOk(async () => {
    // Se pulso Ok
    try {
      await useLink.removeLink(id);
      console.log(“Removido”);
    } catch (error) {
       console.log(error);
    }
  })

}
</script>
<template>
  <q-card class="my-card q-mb-sm">
    <q-card-section>
      <div class="text-overline">{{ link.nanoLink }}</div>
      {{ link }}
    </q-card-section>
    <q-separator />

    <q-card-actions>
      <!--  trash-can-outline es el nombre del icono que se encuentra en el sitio web -->
      <!-- mdi-nombreicono -->
      <q-btn flat round icon="mdi-trash-can-outline" color="red" @click="deleteLink(link._id)" />
      <q-btn flat round icon="mdi-pencil-outline" />
      <q-btn flat color="primary">
        Copy
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

```

## Resetear valores de addLink

AddLink.vue
```js
<script setup>
import { useLinkStore } from 'src/stores/url-store';

import { ref } from 'vue';
import { useNotify } from '../composables/notifyHook'
const link = ref('');
const loading = ref(false);
const formAdd = ref(null);

const useLink = useLinkStore()
const { showNotify } = useNotify();
const addLink = async () => {
  console.log(link.value);
  try {
    loading.value = true;
    await useLink.createLink(link.value);
    showNotify('Link agregado con exito', 'green');
    console.log(formAdd.value);
    formAdd.value.reset();
    link.value = null;
  } catch (error) {
    console.log(error);
    if (error.errors) {
      error.errors?.forEach(item => {
        showNotify(item.msg);
      });
      return;
    }
    // Creamos un dialogo
    showNotify('Error al agregar');
  } finally {
    loading.value = false;
  }

}

</script>

<template>
  <q-form ref="formAdd" @submit.prevent="addLink">

```

:::tip Observacion 
- Se utiliza la props ref en lugar de v-model 
- Se utiliza un ref del formulario y su método reset().
:::

## Editar 

LinkCard.vue

```js
<script setup>
import { useLinkStore } from 'src/stores/url-store';
import { useQuasar } from 'quasar'
const useLink = useLinkStore();
const $q = useQuasar();
// Definimos los props
// defineProps({ nombreprops : tipo de dato})
defineProps(
  {
    link: Object
  }

)
const deleteLink = async (id) => {
  // Creamos un dialogo con opciones (Cancelar y Ok)
  $q.dialog({
    title: 'Cuidado',
    message: '¿Quieres eliminar el elemento?',
    cancel: true,
    persistent: true
  }).onOk(async () => {
    // Se pulso Ok
    try {
      await useLink.removeLink(id);
      console.log(“Removido”);
    } catch (error) {
       console.log(error);
    }
  })

}

const updateLink = async (link) => {
  // Creamos un dialogo de tipo  Prompt (para introducir datos)
  $q.dialog({
    title: 'Actualizar LINK',
    message: 'Actualiza aqui tu enlace',
    prompt: {
      // El valor que se muestra en el input del dialogo
      model: link.longLink,
      type: 'text' // optional
    },
    cancel: true,
    persistent: true
  }).onOk(async data => {
    // Se pulso ok
    // data = el valor del input
    // Sobrescribimos la propiedad longLink del objeto link
    const newLink = { ...link, longLink: data }
    await useLink.modifiedLink(newLink);

  })
}
</script>
<template>
  <q-card class="my-card q-mb-sm">
    <q-card-section>
      <div class="text-overline">{{ link.nanoLink }}</div>
      {{ link }}
    </q-card-section>
    <q-separator />

    <q-card-actions>
      <!--  trash-can-outline es el nombre del icono que se encuentra en el sitio web -->
      <!-- mdi-nombreicono -->
      <q-btn flat round icon="mdi-trash-can-outline" color="red" @click="deleteLink(link._id)" />
      <q-btn flat round icon="mdi-pencil-outline" @click="updateLink(link)" />
      <q-btn flat color="primary">
        Copy
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

```

url-store.js

```js
  const modifiedLink = async (newLink) => {
    try {
      await api({
        url: `/api/links/${newLink._id}`,
        method: 'PATCH',
        headers: {
          Authorization: "Bearer " + useStore.token
        },
        data: {
          longLink: newLink.longLink
        }
      })
      links.value = links.value.map(item => item._id === newLink._id ? newLink : item);
      console.log('actualizado');
    } catch (error) {
      // Lanzamos un error
      throw error.response?.data || error;
    }
  }
  return {
    createLink, links, removeLink, modifiedLink
  }
});

```
## notifyHook v2

notifyHook.js

```js
import { useQuasar } from 'quasar'
export const useNotify = () => {

  // $q tiene los metodos para crear las notificaciones
  const $q = useQuasar()

  const errorNotify = (message = 'Error de servidor') => {
    $q.notify({
      message, color: 'negative', icon: "report_problem"
    })
  }

  const successNotify = (message = 'Exito!') => {
    $q.notify({
      message, color: 'green', icon: "report_problem"
    })
  }

  // Obsoleto
  const showNotify = (message, color = 'negative', icon = 'report_problem') => {
    $q.notify({
      message, color, icon: icon && null,
    })
  }
  return { showNotify, errorNotify, successNotify };
}

```
LinkCard.vue
```js
<script setup>
import { useLinkStore } from 'src/stores/url-store';
import { useQuasar } from 'quasar'
import { useNotify } from 'src/composables/notifyHook';
const useLink = useLinkStore();
const { errorNotify, successNotify } = useNotify();
const $q = useQuasar();
// Definimos los props
// defineProps({ nombreprops : tipo de dato})
defineProps(
  {
    link: Object
  }

)
const deleteLink = async (id) => {
  // Creamos un dialogo con opciones (Cancelar y Ok)
  $q.dialog({
    title: 'Cuidado',
    message: '¿Quieres eliminar el elemento?',
    cancel: true,
    persistent: true
  }).onOk(async () => {
    try {
      await useLink.removeLink(id);
      successNotify('Se elimino el link');
    } catch (error) {
      if (error.errors) {
        error.errors?.forEach(item => {
          errorNotify(item.msg);
        });
        return;
      }
      errorNotify('Error al Eliminar');
    }
  })
}



const updateLink = async (link) => {
  // Creamos un dialogo de tipo  Prompt (para introducir datos)
  $q.dialog({
    title: 'Actualizar LINK',
    message: 'Actualiza aqui tu enlace',
    prompt: {
      // El valor que se muestra en el input del dialogo
      model: link.longLink,
      type: 'text' // optional
    },
    cancel: true,
    persistent: true
  }).onOk(async data => {
    try {
      // data = el valor del input
      // Sobrescribimos la propiedad longLink del objeto link
      const newLink = { ...link, longLink: data }
      await useLink.modifiedLink(newLink);
      successNotify('Se actualizo el link');
    } catch (error) {
      if (error.errors) {
        error.errors?.forEach(item => {
          errorNotify(item.msg);
        });
        return;
      }
      errorNotify('Error al actualizar');
    }

  })
}
</script>

```
## Plugin Quasar Loading
- [Le metemos el loading de quasar a editar y eliminar](https://quasar.dev/quasar-plugins/loading)

quasar.config.js
```js
    framework: {
      config: {},

      // iconSet: 'material-icons', // Quasar icon set
      // lang: 'en-US', // Quasar language pack

      // For special cases outside of where the auto-import strategy can have an impact
      // (like functional components as one of the examples),
      // you can manually specify Quasar components/directives to be available everywhere:
      //
      // components: [],
      // directives: [],

      // Quasar plugins
      plugins: [
        'Dialog', 'Notify' ,  'Loading'
      ]
    }

```

Url-store.js
```js
import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { useUserStore } from './user-store';
import { ref } from 'vue';
import { useQuasar } from 'quasar'
export const useLinkStore = defineStore('Link', () => {
  const useStore = useUserStore();
  const $q = useQuasar()
  const links = ref([]);
  const createLink = async (longLink) => {

    try {
      // Mostramos el spinner de carga
      $q.loading.show()
      // api({configuracion})
      const res = await api({
        url: '/api/links/',
        method: "POST",
        headers: {
          Authorization: "Bearer " + useStore.token
        },
        data: {
          longLink
        }
      })
      console.log(res.data);
      links.value.push(res.data.link);
    } catch (error) {

      throw error.response?.data || error
    } finally {
      // Ocultamos el spinner de carga
      $q.loading.hide()
    }
  }

  const getLinks = async () => {
    try {
      // Mostramos el spinner de carga
      $q.loading.show()
      console.log("Llamando a la peticion");
      const res = await api({
        url: '/api/links/',
        method: "GET",
        headers: {
          Authorization: "Bearer " + useStore.token
        }

      })
      console.log(res.data);
      links.value = [...res.data.links]
    } catch (error) {
      console.log(error.response?.data || error);
    } finally {
      // Ocultamos el spinner de carga
      $q.loading.hide()
    }
  }
  getLinks();

  const removeLink = async (_id) => {
    try {
      // Mostramos el spinner de carga
      $q.loading.show()
      await api({
        url: `/api/links/${_id}`,
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + useStore.token
        }
      })
      links.value = links.value.filter(item => item._id !== _id);
    } catch (error) {
      throw error.response?.data || error;
    } finally {
      // Ocultamos el spinner de carga
      $q.loading.hide()
    }
  }

  const modifiedLink = async (newLink) => {
    try {
      // Mostramos el spinner de carga
      $q.loading.show()
      await api({
        url: `/api/links/${newLink._id}`,
        method: 'PATCH',
        headers: {
          Authorization: "Bearer " + useStore.token
        },
        data: {
          longLink: newLink.longLink
        }
      })
      links.value = links.value.map(item => item._id === newLink._id ? newLink : item);
      console.log('actualizado');
    } catch (error) {
      // Lanzamos un error
      throw error.response?.data || error;
    } finally {
      // Ocultamos el spinner de carga
      $q.loading.hide()
    }
  }
  return {
    createLink, links, removeLink, modifiedLink
  }
});

```

## Funcion copy

- [API Clipboard -- Para manipular el portapapeles](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard)

LinkCard.vue

```js
const copyLink = async (nanoLink) => {
  try {
    const path = `http://localhost:9000/${nanoLink}`;
    // Insertamos el contenido de la variable path en el portapapeles.
    await navigator.clipboard.writeText(path)
    successNotify("Se copio el link");
  } catch (error) {
    errorNotify('Error al copiar el link');
    console.log(error);
  }
}
</script>
<template>
  <q-card class="my-card q-mb-sm">
    <q-card-section>
      <div class="text-overline">{{ link.nanoLink }}</div>
      {{ link }}
    </q-card-section>
    <q-separator />

    <q-card-actions>
      <!--  trash-can-outline es el nombre del icono que se encuentra en el sitio web -->
      <!-- mdi-nombreicono -->
      <q-btn flat round icon="mdi-trash-can-outline" color="red" @click="deleteLink(link._id)" />
      <q-btn flat round icon="mdi-pencil-outline" @click="updateLink(link)" />
      <q-btn flat color="primary" @click="copyLink(link.nanoLink)">
        Copy
      </q-btn>

```
## Variable de entorno en quasar

- [Manejo de variables de entorno](https://quasar.dev/quasar-cli-webpack/handling-process-env)
- Se configuran en un archivo que te genera quasar

quasar.config.js



```js
      env: {
        FRONT_URI: 'http://localhost:9000',
        MY_API: 'http://localhost:5000'
      },

```
:::tip Observacion
- Las variables de entornos se insertan en la propiedad env( al comienzo esta comentada)
:::
#### Utilizamos las variables de entorno
LinkCard.vue
```js
const copyLink = async (nanoLink) => {
  try {
    console.log(process.env.FRONT_URI);
    const path = `${process.env.FRONT_URI}/${nanoLink}`;
    // Insertamos el contenido de la variable path en el portapapeles.
    await navigator.clipboard.writeText(path)
    successNotify("Se copio el link");
  } catch (error) {
    errorNotify('Error al copiar el link');
    console.log(error);
  }
}
</script>

```
Src/boot/axios.js
```js
import { boot } from 'quasar/wrappers'
import axios from 'axios'
const api = axios.create({
  baseURL: process.env.MY_API,
  // withCredentials = Que reciba cookies
  withCredentials: true,

}

)

```
### Detectar si esta en desarrollo

quasar.config.js

```js
module.exports = configure(function ( ctx ) {
     env: {
        // ctx.dev = Si es true , es porque estamos en modo desarollo
        FRONT_URI: ctx.dev ? 'http://localhost:9000' : "",
        MY_API: ctx.dev ? 'http://localhost:5000' : ""
      },

```
:::warning 
Son variables de entorno publica ya que se encuentra en el archivo de configuración.

:::

## Redireccionamiento

pages/RedirectPage.vue

 - [componente Spinner](https://quasar.dev/vue-components/spinners)



 
 
 ```js
 <template>
  <q-page class="text-center q-pt-xl">
    <h4>Te estamos redirigiendo...</h4>
    <q-spinner-audio color="primary" size="2em" />
  </q-page>
</template>

<script setup>
</script>

 ```

 Router/routes.js
```js
 const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '', component: () => import('pages/IndexPage.vue'), meta: {
          auth: true
        }
      },
      {
        path: 'protected', component: () => import('pages/ProtectedPage.vue'),
        meta: {
          auth: true
        }
      },
      { path: 'login', component: () => import('pages/LoginPage.vue') },
      { path: 'register', component: () => import('pages/RegisterPage.vue') },
      // path = /:nombrevariable
      // Ej. http://localhost:9000/fdghfdhdf
      // nombrevariable = fdghfdhdf
      { path: '/:nanoid', component: () => import('pages/RedirectPage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

```
 ### Metodo beforeEnter 
- Sirve para activar un método antes de que entre a la ruta (al componente)
- El metodo se ejecutara antes de renderizar el componente.
- sintaxis: beforeEnter:método


```js
import { api } from 'src/boot/axios';

const redirectLink = async (to, from, next) => {
  // Parecido a express
  // to = req   from =  res     next  = Cumple la misma funcion , que ejecute/renderize lo siguiente
  // to.params =  Es un objeto con todas las variables de la url(params)
  // console.log(to.params);
  try {
    const { data } = await api.get(`/api/links/${to.params.nanoid}`);
    console.log(data.longLink);
    //Redirecciono
    next();
    window.location.href = data.longLink;

  } catch (error) {
    console.log(error);
    // Redirecciono
    next('/404');
  }
}
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '', component: () => import('pages/IndexPage.vue'), meta: {
          auth: true
        }
      },
      {
        path: 'protected', component: () => import('pages/ProtectedPage.vue'),
        meta: {
          auth: true
        }
      },
      { path: 'login', component: () => import('pages/LoginPage.vue') },
      { path: 'register', component: () => import('pages/RegisterPage.vue') },
      // path = /:nombrevariable
      // Ej. http://localhost:9000/fdghfdhdf
      // nombrevariable = fdghfdhdf
      {
        path: '/:nanoid', component: () => import('pages/RedirectPage.vue'),
        beforeEnter: redirectLink
      },
    ]
  },
  {
    path: '/404',
    component: () => import('pages/ErrorNotFound.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes

```

## Reset Validation

- [ResetValidation](https://quasar.dev/vue-components/form)
- [ResetValidation con lazy-rules](https://quasar.dev/vue-components/input)

:::tip lazy-rules
Si usa la props  lazy-rules (en el input , sin ningún valor), la validación comienza después del primer desenfoque. 
:::

AddLink.vue

```js
<script setup>
import { useLinkStore } from 'src/stores/url-store';

import { ref } from 'vue';
import { useNotify } from '../composables/notifyHook'
const link = ref('');
const loading = ref(false);
const formAdd = ref(null);

const useLink = useLinkStore()
const { showNotify } = useNotify();
const addLink = async () => {
  console.log(link.value);
  try {
    loading.value = true;
    await useLink.createLink(link.value);
    showNotify('Link agregado con exito', 'green');
    console.log(formAdd.value);
    formAdd.value.reset();
    formAdd.value.resetValidation();
    link.value = null;
  } catch (error) {
    console.log(error);
    if (error.errors) {
      error.errors?.forEach(item => {
        showNotify(item.msg);
      });
      return;
    }
    // Creamos un dialogo
    showNotify('Error al agregar');
  } finally {
    loading.value = false;
  }

}

</script>

<template>
  <q-form ref="formAdd" @submit.prevent="addLink">

    <q-input v-model="link" label="Ingrese link aqui" placeholder="Ingrese su super link" :rules="[
      val => val && val.trim() !== '' || 'Escribe algo por favor'
    ]" lazy-rules></q-input>
    <q-btn class="q-mt-sm full-width" label="Agregar" color="primary" type="submit" :loading="loading"></q-btn>
  </q-form>

</template>

```

## Producción 

### Backend
- [Railway](https://railway.app/)
- [Render](https://render.com/)
- [Heroku](https://www.heroku.com/)
### Frontend
- [Netlify](https://www.netlify.com/)
- [Firebase](https://firebase.google.com/)
### Deploy backend 
- [Guia de deploy usando heroku y render](https://fedeleva.github.io/documentacion/docs/Node/apiRest#deploy-heroku)

:::tip Recordatorio 
- Configurar la variable de entorno 
- ORIGIN1 = url en la que se realizo el deploy del frontend

:::
### Deploy Frontend 
1. En la carpeta del proyecto , usamos el comando:
```powershell
quasar build
```

:::tip Observacion 
- Lo compila como una SPA
- Si el comando funciono , debería tener una carpeta llamada dist y dentro una llamada spa.
- El contenido de la carpeta spa se debería subir al hosting. (tiene archivos estáticos)
:::

#### Vamos a usar Netlify 
1. Arrastramos la carpeta spa a Netlify para hacer un deploy manual.



### Error de Vue Router y Configuramos las variables de entorno
- [link](https://stackoverflow.com/questions/56468161/netlify-does-not-recognize-the-url-params-when-using-react-router-dom)
- Al usar vue router para redireccionar o acceder a alguna url, se lanzaría un error “Page Not Found”

#### Solucion: 

Crea un  archivo _redirects en public con:

```js
/* /index.html 200
```

:::tip Explicacion 
- Todas las peticiones cuya respuesta sea 200, se van a redireccionar al index.html
:::

#### Configuramos las variables de entorno 

Quasar.config.js
```js
      env: {
        // ctx.dev = Si es true , es porque estamos en modo desarollo
        FRONT_URI: ctx.dev ? 'http://localhost:9000' : "https://stellular-otter-f7743b.netlify.app",
        MY_API: ctx.dev ? 'http://localhost:5000' : "XXX"
      },

```
:::tip Observacion 
- XXX = el dominio en donde este alojada la api
:::

#### Luego de solucionar el problema y configurar el quasar.config , volvemos a hacer el deploy

```powershell
Quasar build
En el apartado de deploy de Netlify, vuelve a arrastrar la carpeta SPA.
```

### Error persistencia de datos
- No se guardan las cookies que devuelve el servidor.
- Hay que configurar las cookies en el backend para que funcionen en dominios de terceros.

En el backend:

Utils/tokenManager.js

```js
export const generateRefreshToken = (uid , res) => {
    // 30 dias  en segundos
    const expiresIn = 60 * 60 * 24 * 30;
    try {
        const refreshToken = jwt.sign({ uid }, process.env.JWT_REFRESH, {expiresIn});
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: !(process.env.MODO === "developer"),
            // La expiracion de la cookie : recibe el tiempo en milisegundos
            expires: new Date(Date.now() + expiresIn * 1000) ,
            sameSite: "none",
        })

    } catch (error) {
         console.log(error);
    }
}

```
#### Luego de solucionar el problema y configurar el quasar.config , volvemos a hacer el deploy

```powershell
Quasar build
En el apartado de deploy de Netlify, vuelve a arrastrar la carpeta SPA.
```