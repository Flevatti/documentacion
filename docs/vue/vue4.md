---
sidebar_position: 7
---
# Vue #4

## Vue Router --  components/children

:::tip recordatorio
- Cada ruta es un objeto
- Propiedades del objeto: Path , name , component
:::

- Una ruta también puede utilizar la propiedad children , la cual recibe un array con rutas (objeto)
- La propiedad children especifica las rutas hijas.
- Las rutas padres e hijas se van a anidar , formando subrutas.
- El componente padre (el que figura en la propiedad component) , debe tener el &lt;router-view> el cual se encarga de renderizar el componente que corresponde a la ruta actual


#### Ejemplo

El archivo del Router que usamos:
```js

  import { createWebHistory, createRouter } from "vue-router";
   import ComponentMain from '../components/ComponentMain'
   import ComponenteHijo from '../components/ComponenteHijo.vue'

  const routes = [
    {
      path: "/main",
      name: "Main",
      component: ComponentMain,
      children: [
        {path: 'hijo' , name:'Hijo' , component: ComponenteHijo }
      ]
    }, 
    
  ];
  
 
  const router = createRouter({
   
        history : createWebHistory(),
     
        routes
  })
  

   export default router;

```
:::tip Observacion
- El componente ComponentMain  de la ruta /main tiene una ruta hija que renderiza el componente ComponenteHijo 
- Por lo tanto , el ComponentMain   debe tener el &lt;router-view> para poder especificar donde renderizar el ComponenteHijo
:::

App.vue
```html
<template>
  <router-view></router-view>
</template>

<script setup>

</script>

```
:::tip Observacion
- Simplemente se encarga de renderizar todas las rutas de primer nivel.
- &lt;router-view> renderiza el componente ComponentMain   si nos ubicamos en la url http://localhost:8080/main/

:::

ComponentMain.vue

```html
<template>
   <h1>Componente Main</h1>
   <router-view></router-view>
</template>

<script setup>

</script>

```
:::tip Observacion
- Tiene un &lt;router-view> por lo tanto la ruta tiene hijos(children).
- El &lt;router-view> se encarga de renderizar los componentes hijos que corresponden a la ruta actual
- &lt;router-view>  renderiza el componente ComponenteHijo si nos ubicamos en la url http://localhost:8080/main/hijo


:::

ComponenteHijo.vue

```html
<template>
    <h1>Componente hijo</h1>
</template>

<script setup>

</script>

```

#### Explicacion

- En la ruta http://localhost:8080/main se renderiza el ComponentMain   en el App.vue
- La ruta /main tiene un hijo cuya ruta es ‘hijo’
- La ruta(path) del padre y del hijo se anidan/concatenan formando la ruta /main/hijo
- El “/” que une al padre y al hijo lo genera Vue Router.
- Para acceder a la ruta “hija” , se debe entrar a la url anidada/concatenada
- Entonces en la ruta http://localhost:8080/main/hijo :
    - se renderiza el ComponentMain   en el App.vue (con el router-view)
    - se renderiza el  ComponenteHijo en el  ComponentMain.vue  (con el router-view)


### Se puede usar el name para redireccionar a una subruta:

App.vue 

```html
<template>
  <router-link :to="{name: 'Hijo'}">Acceder a la ruta: main/hijo</router-link>
  <router-view></router-view>
</template>

<script setup>

</script>

```
## Vue Router - Query
- Con el objeto Route obtenemos toda la información de la ruta, entre ellas las query.
- Para obtener el objeto Route usamos useRoute() o this.$route


- Ejemplo con Options API:


```html
<template>
  <div>
    <h1>This is an about page</h1>
    <p>Query: {{ query }}</p>
    <button
      @click="
        set({
          name: 'Pedro'
        })
      "
    >
      Cambiar query
    </button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script>
export default {
  data() {
    return {
      query: this.$route.query
    }
  },
  methods: {
    set(search) {
      this.query = search
      this.$router.replace({
        query: search
      })
    }
  }
}
</script>

```
:::tip Observación
- Aparte de usar el objeto Route, usamos el objeto Router para manipular el enrutador.
- El enrutador se obtiene usando useRouter() o this.$router
:::

- Ejemplo con Composition API:
```html
<template>
  <div>
    <h1>This is an about page</h1>
    <p>Query: {{ query }}</p>
    <button
      @click="
        set({
          name: 'Pedro'
        })
      "
    >
      Cambiar query
    </button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const query = ref(route.query)

const set = (search) => {
  query.value = search
  router.replace({
    query: search
  })
}
</script>
```


## Vue Router – Params(Variable en la URL)

### Asignamos un paráms(variable) en la url:
:::tip Sintaxis
- En la propiedad path utilizamos los dos puntos seguidos de un nombre. Ej “:nombrevariable”.
:::
Router/index.js
```js

  import { createWebHistory, createRouter } from "vue-router";
   import ComponentMain from '../components/ComponentMain'

  const routes = [
    {
      path: "/:variable",
      name: "Main",
      component: ComponentMain,
    }, 
    
  ];
  
 
  const router = createRouter({
   
        history : createWebHistory(),
     
        routes
  })
  

   export default router;

```
### Leemos la params(variable) de la url
- Esto se realiza en el componente que se renderiza en  la URL con params, en este caso el ComponentMain.
  
Components/ ComponentMain.vue
#### 1# Alternativa
- Utilizamos la variable global $route contiene una propiedad llamada params  que es un objeto donde cada propiedad es un param(variable) de la URL con su valor correspondiente
- Entonces para acceder a un params: $route.params.nombrevariable

```html
<template>
   <h1>Componente Main</h1>
   <!-- $route.params.nombrevariable -->
    <p>El valor de nombre variable es {{$route.params.variable}}</p>
</template>

```

:::tip 
- Si estas usando OPTION API , se utiliza el this.
- this.$route
:::

#### 2# Alternativa
- Debido a que no tenemos acceso al this en el setup, no podemos acceder directamente al this.$route . En su lugar usamos la funcion useRoute.
- La función useRoute() nos devuelve el mismo objeto que contiene la variable global $route.

```html
<template>
   <h1>Componente Main</h1>
   <!-- $route.params.nombrevariable -->
    <p>El valor de nombre variable es {{variable}}</p>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
    const route = useRoute()
    // route.params.nombrevariable
    const variable = route.params.variable;
    console.log(router);
</script>

```

## beforeEach 

Codigo de creación de un Router
```js
  const router = createRouter({
   
        history : createWebHistory(),
     
        routes
  })
  

   export default router;

```
- Un Router viene con muchos métodos(addRoute , afterEach , back , etc).

#### beforeEach 

- Es un metodo del Router
- Ejecuta un callback antes de cada navegación/url.
- [Como esta  basado en el middleware de express , tiene tres parámetros: to , from , next.](https://fedeleva.github.io/documentacion/docs/Node#middleware)
   - To : La ubicacion de la ruta destino.
   - From: La ubicacion de la ruta actual 
   - Next (Opcional) : Es una funcion que redirecciona a la ruta destino.
  
- Por lo tanto: Router.beforeEach () generalmente se usa para hacer algunas restricciones  a la página. Por ejemplo, si no inicia sesión, no puede ingresar  a algunas páginas. Solo después de iniciar sesión, tiene los permisos para ver algunas páginas. Para decirlo claramente, es el interceptor de ruta. Es un middleware de express.js

#### Ejemplo
```js
  import { createWebHistory, createRouter } from "vue-router";
   import ComponentMain from '../components/ComponentMain'

  const routes = [
    {
      path: "/:variable",
      name: "Main",
      component: ComponentMain,
    }, 
    
  ];
  
 
  const router = createRouter({
   
        history : createWebHistory(),
     
        routes
  })
  // beforeEach(callback)
router.beforeEach((to,from , next) => {
   console.log("Ruta destino" , to);
   console.log("Ruta actual" , from);

  next();
})
   export default router;

```

## useRouter
- El método useRouter() nos devuelve el  router.
- Por lo tanto , podríamos tener acceso a todos los métodos del Router(addRoute , afterEach , back,beforeEach , etc)  en un componente.
- [Mas info](https://router.vuejs.org/api/interfaces/router.html)
```js
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter();
   console.log(router);
</script>

```

### Métodos del Router

#### addRoute()
- Nos Permite agregar una ruta al router
- [info](https://router.vuejs.org/guide/advanced/dynamic-routing.html)
#### afterEach()
- Ejecuta un callback después de cada navegación(url)
- Devuelve una función que sirve para dejar de ejecutar el callback.
#### push()
- Inserta una url en el historial.
- Te redirecciona a una nueva URL.
- Esta forma es la más utilizada para navegar hacia rutas desde  un componente. Lo que hace simplemente es navegar a la ruta que le pasemos al método. Igual que pasaba con el router link, aquí también puedes pasar un objeto para poder usar el nombre de la ruta en lugar de su ruta.
#### remplace()
- Funciona igual que router push pero con una diferencia. 
- Con el push se navega a la ruta y se guarda la ruta actual en el historial del navegador para que el usuario pueda volver a la página anterior pulsando sobre el botón de atrás en el navegador.
- Con  replace el usuario al pulsar sobre el enlace no podrá volver a la página anterior. Esto se suele usar por ejemplo cuando haces un logout del usuario o cuando queremos sacarlo de una página y no queremos que pueda echar hacia atrás  el historial del navegador.
#### go()
- Pasando un número, sirve para decidir si queremos retroceder o avanzar en la historia del navegador del usuario.
- [API HISTORY](https://developer.mozilla.org/en-US/docs/Web/API/History_API)
- Tambien puede utilizar los métodos back y forward

#### beforeEach()
- Ejecuta un callback antes de cada navegación/url.
- Devuelve una función que sirve para dejar de ejecutar el callback.
#### beforeResolve()
- Ejecuta un callback antes de que la navegación/url este a punto de resolverse.
- En este estado, se han obtenido todos los componentes y otros callback han tenido éxito.
- Devuelve una función que sirve para dejar de ejecutar el callback.
- router.beforeResolvees es el lugar ideal para obtener datos o realizar cualquier otra operación que desee evitar si el usuario no puede ingresar a una página.

```js
router.beforeEach((to , from , next) => {
  console.log("Se ejecuto el beforeEach")
  next();
})
router.beforeResolve((to , from , next) => {
  console.log("Se ejecuto el beforeResolve")
  next();
})

```
:::tip Observacion
Se ejecuta después del beforeEach.
:::
#### getRoutes()
- Obtenemos todas las rutas
#### hasRoute()
- Comprueba si existe una ruta con un nombre dado
#### isReady()
- Devuelve una promesa que se resuelve cuando el enrutador ha completado la navegación inicial.
- Devuelve una promesa cuando el enrutador está listo para usarse.
#### onError()
- Agrega un callback de errores que se llama cada vez que ocurre un error no detectado durante la navegación.
#### removeRoute()
- Elimina una ruta existente por su nombre.
#### Resolve()
- Devuelve un objeto $route o useRoute de una ruta especificada.
  
## Propiedades reactivas css

- [Guia](https://fedeleva.github.io/documentacion/docs/vue/#clases)
- [Clases Y Style](https://es.vuejs.org/v2/guide/class-and-style.html#Sintaxis-de-Objeto)
- [Cómo usar estilos CSS reactivos con Vue 3](https://escuelavue.es/tips/v-bind-css-vue-3/)
- [Clases y estilos reactivos con Vuejs](https://andygeek.com/posts/Fundamentos%20de%20Vuejs/posts/Clases-y-estilos-reactivos-en-vuejs/)

#### metodo v-bind()
- Aparte de lo que ya vimos , también tenemos el método v-bind() en las etiquetas &lt;style> .
- [info](https://learnvue.co/tutorials/reactive-styles-vue-3)

```html
<script setup >
   import { ref } from 'vue'
   const color = ref('red')
   </script>
   <template>
     <div>
       <div class="text">hello</div>
     </div>
   </template>
   <style>
      .text {
     color: v-bind(color);
   }
   </style>

```

:::tip Conclusión
- v-bind() es como var() pero de forma dinámica.
- Nos permite ingresar un valor dinámico a una propiedad css definida en &lt;style>
:::

## Composables

- Es una función que aprovecha la API de composición de Vue para encapsular y reutilizar la lógica con estado .
- Al crear aplicaciones frontend, a menudo necesitamos reutilizar la lógica para tareas comunes. Por ejemplo, es posible que necesitemos formatear fechas en muchos lugares, por lo que extraemos una función reutilizable para eso. Esta función de formateador encapsula la lógica sin estado : toma alguna entrada e inmediatamente devuelve la salida esperada.
- Por el contrario, la lógica con estado implica administrar el estado que cambia con el tiempo. Un ejemplo simple sería rastrear la posición actual del mouse en una página. En escenarios del mundo real, también podría ser una lógica más compleja, como gestos táctiles o estado de conexión a una base de datos.
- De esta forma podemos componer pequeñas piezas lógicas y reutilizarlas en todo tu proyecto (u otros proyectos).

#### Ejemplo 1

#### Problema

```html
<script setup>
import { ref } from "vue";
const results = ref(null);
const obtenerDatos= async(API_URL) => {
try {
  results.value = await (await fetch(API_URL)).json();
} catch (err) {
   console.log(err);
}
} 

obtenerDatos('https://jsonplaceholder.typicode.com/posts');
</script>
<template>
  <h1>Componente Main</h1>
  {{results}}
</template>

```
:::warning
- Si yo quiero reutilizar esta lógica en todos los componentes.
- Ej. Todos los componentes van a realizar una petición GET con fetch.
- ¿ Que hacemos , repetimos el codigo en todos los componentes o existe alguna manera mejor?
:::


#### Solución
- Un composable sirve para poder reutilizar lógica.
- En este caso haremos un composable para realizar una petición GET con fetch.
  
Composables/useFetch.js
```js
import { ref, readonly } from 'vue';

export function  useFetch() {
  const results = ref(null);
  const error = ref(null);

  const makeRequest = async (API_URL) => {
    try {
      const request = await (await fetch(API_URL)).json();
      results.value = request;
    } catch (err) {
      console.log(err);
      error.value = err;
    }
  };

  return {
    makeRequest,
    results: readonly(results),
    error,
  };
}

```
:::tip Observacion 
- Es lo mismo que un hook en React  (mismas practicas)
- Es una funcion que devuelve datos reactivos y una función para modificarlos.
:::

Lo utilizamos en un componente:
```html

<script setup>
   import {useFetch} from '../composables/useFetch';
 const { makeRequest, results, error } = useFetch();
 makeRequest('https://jsonplaceholder.typicode.com/posts');

 
</script>
<template>
  <h1>Componente Main</h1>
  {{results}}
  <div v-if="error"> error</div>
</template>

```
:::tip Observacion
- Es lo mismo que un hook en React  (mismas practicas)
- Utilizamos los datos reactivos y la función para modificarlos.
:::

####  Ejemplo de rastreador de ratón

#### Problema
```html
<script setup>
   import { ref, onMounted, onUnmounted } from 'vue'
   
   const x = ref(0)
   const y = ref(0)
   
   function update(event) {
     x.value = event.pageX
     y.value = event.pageY
   }
   
   onMounted(() => window.addEventListener('mousemove', update))
   onUnmounted(() => window.removeEventListener('mousemove', update))
   </script>
   
   <template>Mouse position is at: {{ x }}, {{ y }}</template>

```

#### Solución
 - Si queremos reutilizar la misma lógica en múltiples componentes ,  podemos extraer la lógica en un archivo externo, como una función composable:

Composables/useMouse.js
```js
import { ref, onMounted, onUnmounted } from 'vue'

export function useMouse() {
  const x = ref(0)
  const y = ref(0)

  function update(event) {
    x.value = event.pageX
    y.value = event.pageY
  }

  onMounted(() => window.addEventListener('mousemove', update))
  onUnmounted(() => window.removeEventListener('mousemove', update))

  return { x, y }
}

```
:::tip Observacion
- Las mismas practicas que los hook de React
- Es una funcion que retorna datos reactivos.
:::
Componente:
```js
<script setup>
   import { useMouse } from '../composables/useMouse'
   
   const { x, y } = useMouse()
   </script>
   
   <template>Mouse position is at: {{ x }}, {{ y }}</template>

```
:::tip Observacion
- Utilizamos los datos reactivos.
:::
#### Conclusión:
- La lógica central permanece idéntica: todo lo que tuvimos que hacer fue moverla a una función externa y devolver el estado que debería estar expuesto
- useMouse() Ahora se puede utilizar en cualquier componente.

### Anidar composables

-   La parte más interesante de los componibles es que también se pueden anidar
- Una función composable puede llamar a una o más funciones  composables. Esto nos permite componer una lógica compleja utilizando unidades pequeñas y aisladas, de forma similar a cómo componemos una aplicación completa utilizando componentes

#### Ejemplo

Composable/useEvento.js

```js

import { onMounted, onUnmounted } from 'vue'

export function useEvento(target, event, callback) {

  onMounted(() => target.addEventListener(event, callback))
  onUnmounted(() => target.removeEventListener(event, callback))
}

```

Composables/useMouse.js
```js

import { ref } from 'vue'
import { useEvento } from './useEvento'

export function useMouse() {
  const x = ref(0)
  const y = ref(0)

  useEvento(window, 'mousemove', (event) => {
    x.value = event.pageX
    y.value = event.pageY
  })

  return { x, y }
}

```
:::tip Observación
- Un composable esta usando otro composable.
- Cada llamada a useMouse() desde un componente , creará sus propias copias x y y (estados)  para que no interfieran entre sí.
:::


#### TIPS
- Una función composable puede tener 1 o mas parámetros.
- Un composable puede devolver funciones que pueden ser asíncrona (async-await)
- [Info](https://vuejs.org/guide/reusability/composables.html#conventions-and-best-practices)


## Clases al componente

- Al añadirle una clase al componente, la clase es agregada al contenedor principal del mismo.
- Si tiene dos contenedores o más, no se lo agrega.
- Cuando usa el atributo class en un componente, estas clases se agregarán al elemento raíz del componente. Las clases existentes en este elemento no serán sobrescritas.

#### Ejemplo

Componente Hijo
```html
<template>
    <div>
        <h1>Componente hijo</h1>
    </div>

</template>

<script setup>

</script>

<style>
    .background-red {
        background:red;
    }
</style>

```
Componente padre
```html
   
   <template>
    <h1>Componente Padre</h1>
         <ComponenteHijo class="background-red"></ComponenteHijo>
  
     
   </template>


<script setup>
import ComponenteHijo from './ComponenteHijo.vue';

</script>

```
:::tip Observación
- La clase background-red se le agrega al contenedor principal del componente (al div en este caso)
- Lo mismo pasa con los atributos  y style.
:::

## attrs
- Es una variable global, que contiene los  atributos  pasados a un componente como un objeto.
- Contiene “atributos” pasado al elemento que no se reconocen como props o eventos (emits)
- [info de atributos](https://es.vuejs.org/v2/guide/components-props.html#Atributos-no-propiedades)
- [herencia de atributos](https://vuejs.org/guide/components/attrs.html#attribute-inheritance)

Componente Padre
```html
   <template>
    <h1>Componente Padre</h1>
         <ComponenteHijo style="background:red" class="background-red" placeholder="placeholder" atributo="nombre"></ComponenteHijo>
  
     
   </template>


<script setup>
import ComponenteHijo from './ComponenteHijo.vue';

</script>

```
Componente Hijo
```html
<template>
    <div>
        <h1>Componente hijo</h1>
        <p> {{$attrs}}</p>
    </div>

</template>

<script setup>

</script>

<style>
    
</style>

```
:::tip 
- Acordate de usar el this en options API
- this.$attrs
:::

### useAttrs()
- Es un método para acceder a la variable $attrs en el &lt;script setup>
- Este método devuelve el mismo objeto que contiene la variable global $attrs.

Componente Hijo
```html
<template>
    <div>
        <h1>Componente hijo</h1>
        <p> {{atributos}}</p>
    </div>

</template>

<script setup>
import { useAttrs } from 'vue';

  const atributos = useAttrs();
  console.log(atributos)
 
</script>

<style>
    
</style>

```

## slots

- &lt;etiqueta> contenido &lt;/etiqueta>
- &lt;componente>contenido &lt;/componente>
- El &lt;slot>&lt;/slot> representa el contenido del componente
#### Ejemplo
Componente Padre

```html
   <template>

         <ComponenteHijo > Contenido del componente</ComponenteHijo>
  
     
   </template>

```
Componente Hijo
```html
<template>
    <div>
        <h1>Componente hijo</h1>
        <p> <slot></slot></p>
    </div>

</template>

```

#### Es lo mismo que:

Componente hijo 

```html
<template>
    <div>
        <h1>Componente hijo</h1>
       <p>Contenido del componente</p>
    </div>

</template>

```

#### Los slots pueden contener cualquier plantilla de código (HTML, componente, etc) 

```html

      <ComponenteHijo > <h5>Titulo 5</h5></ComponenteHijo>

         <ComponenteHijo >   <ComponenteHijo > Este componente se renderiza en en slot</ComponenteHijo></ComponenteHijo>

```

#### Si no existe un elemento &lt;slot>, cualquier contenido que se le pase será simplemente descartado.

### Error por el Scope 

- [info](https://es.vuejs.org/v2/guide/components-slots.html#Scope-de-compilacion)

Componente Padre
```html
<template>
  <ComponenteHijo>
    <p>{{ objeto.nombre }}</p>
    <p>{{ objeto.apellido }}</p>
  </ComponenteHijo>
</template>

<script setup>
import ComponenteHijo from "./ComponenteHijo.vue";

</script>

```
Componente Hijo
```html
<template>
    <div>
        <h1>Componente hijo</h1>
        <slot></slot>
    </div>

</template>

<script setup>
  import { ref } from "vue";
const objeto = ref({
  nombre: "pedro",
  apellido: "perez",
});
console.log(objeto);
</script>

```
:::tip Observacion
- No se puede acceder a los datos del “otro” componente.
- En este caso desde el componente padre no podemos acceder al objeto del componente hijo

:::

#### Solución:

- Vinculamos el objeto como un atributo en el slot.

Componente Padre:

```html
<template>
  <ComponenteHijo>
    <template v-slot:default="slotProps">
      <!-- slotProps es un objeto con todos los atributos -->
      <!-- slotProps.nombreatributo = valor del nombreatributo -->
         {{slotProps.user.nombre}}
    </template>
  </ComponenteHijo>
</template>

<script setup>
import ComponenteHijo from "./ComponenteHijo.vue";

</script>

```

Componente Hijo
```html
<template>
    <div>
        <h1>Componente hijo</h1>
        <!-- nombreAtributo = valor -->
        <slot :user="objeto"></slot>
    </div>

</template>

<script setup>
  import { ref } from "vue";
const objeto = ref({
  nombre: "pedro",
  apellido: "perez",
});
console.log(objeto);
</script>

```

#### Otra forma de hacer lo mismo

Componente Padre
```html
<template>
  <ComponenteHijo v-slot:default="slotProps">

      <!-- slotProps es un objeto con todos los atributos -->
      <!-- slotProps.nombreatributo = valor del nombreatributo -->
         {{slotProps.user.nombre}}

  </ComponenteHijo>
</template>

```

- [mas info](https://es.vuejs.org/v2/guide/components-slots.html)

### objeto $slots
- Es un objeto que contiene los slots pasados por el componente principal(padre)
- En API options , se puede utilizar con el this.$slots.
- El slot predeterminado (el que explicamos anteriormente) se expone como this.$slots.default
- En api composition se obtiene con el método useSlots()

## expose

:::tip variable global $parent.
Es una instancia del componente padre, será null para si no tiene padre y es el principal.
:::
:::tip Variable global $root
Es una instancia del componte raíz del árbol de componen te actual.
:::

- En ambas variables ($root y $parent), o en las referencias de componentes(ref), podemos tener acceso a todas las propiedades y métodos de otro componente.
- Esto puede ser indeseable, ya que lo más probable es que un componente tenga un estado interno y métodos que deben mantenerse privados para evitar un acoplamiento estrecho.
- Expose expone una lista de propiedades que serán “Publicas”.

#### ¿ Como usarlo en OPTIONS API?

- Es una propiedad más del objeto, que recibe un array
```js
expose : []
```
- Cada elemento del array es  un String 
- Cada elemento del array es el nombre de una variable o método que se va a exponer de manera publica.
- [Ejemplos](https://vuejs.org/api/options-state.html#expose )

#### ¿Cómo usarlo en Composition API? 

- Los componentes que usan &lt;script setup> están cerrados de forma predeterminada , es decir, la instancia pública del componente, no expondrá ninguna propiedad.
- Para exponer explícitamente las propiedades de un &lt;script setup> componente, utilice defineExpose().
- Recibe un objeto cuyas propiedades se obtendrán al obtener una instancia de este componente. ($root , $parent , ref)

Componente Padre
```html
<template>
  <ComponenteHijo >
  </ComponenteHijo>
</template>

<script setup>
import ComponenteHijo from "./ComponenteHijo.vue";
import {defineExpose} from 'vue';
const a = 20;
const b = 40;
defineExpose({
  a
})
console.log('la variable b es privada' , b);
</script>

```
Componente hijo 
```html
<template>
    <div>
        <h1>Componente hijo</h1>
        {{$parent}}
    </div>

</template>

<script setup>
</script>

```
:::tip Observacion 
- En el ejemplo la variable a es publica y la variable b es privada.
- Accedemos a la variable publica con $parent.
:::

:::tip 
- En setup() hacemos lo mismo pero con el metodo expose() que viene del context.
- [info](https://vuejs.org/api/composition-api-setup.html#setup-context)
:::

## teleport

- Renderiza el contenido  en otra parte del DOM.
- &lt;Teleport> es un componente incorporado que nos permite "teletransportar" una parte de la plantilla de un componente a un nodo DOM que existe fuera de la jerarquía DOM de ese componente.

#### Problema que solucionaria:

- Modal de una pantalla completa

Componente Padre:
```html
<template>
<div class="outer">
  <h3>Vue Modal</h3>
  <div>
   <MyModal></MyModal>
  </div>
</div>
</template>

<script setup>
import MyModal from "./MyModal.vue";

</script>

```
Componente MyModal
```html
<script>
    export default {
      data() {
        return {
          open: false
        }
      }
    }
    </script>
    
    <template>
      <button @click="open = true">Open Modal</button>
    
      <div v-if="open" class="modal">
        <p>Hello from the modal!</p>
        <button @click="open = false">Close</button>
      </div>
    </template>
    
    <style scoped>
    .modal {
      position: fixed;
      z-index: 999;
      top: 20%;
      left: 50%;
      width: 300px;
      margin-left: -150px;
    }
    </style>

```

:::warning Observaciones
- position: fixed solo coloca el elemento en relación con la ventana gráfica cuando ningún elemento antepasado tiene transform, perspective o filter. Si, por ejemplo, tenemos la intención de animar al antepasado &lt;div class="outer"> con la propiedad CSS transform, ¡rompería el diseño modal!
- El z-index está limitado por los elementos que lo contienen. Si hay otro elemento que se superpone y tiene un valor superior a este z-index, cubriría nuestro modal.
:::

#### Solución:
- &lt;Teleport>proporciona una forma limpia de solucionar estos problemas, permitiéndonos salir de la estructura DOM anidada. 
- Vamos a modificar &lt;MyModal>para usar &lt;Teleport>:

Componente MyModal

```html

<template>
  <button @click="open = true">Open Modal</button>

  <Teleport to="body">
    <div v-if="open" class="modal">
      <p>Hello from the modal!</p>
      <button @click="open = false">Close</button>
    </div>
  </Teleport>
</template>

```

:::tip atributo to de &lt;Teleport>
- El atributo/props to de &lt;Teleport> tiene como valor un selector css (String) o un nodo del DOM.
:::

#### Explicación
- En este ejemplo le estamos diciendo a Vue que “teletransporte” este fragmento a la etiqueta body.
- Mueve el contenido de &lt;Teleport> al elemento que se especifico en el atributo to (ya sea con un selector css o un nodo del DOM).


###  Deshabilitar
- Tenemos el atributo disabled para  deshabilitar la función de mover el contenido de &lt;Teleport> a otra parte del DOM.
- Se suele utilizar para el responsive.

```html
</script>
<script setup>
const movil = true;
</script>
<template>
  <button @click="open = true">Open Modal</button>

  <Teleport to="body" :disabled="movil">
    <div v-if="open" class="modal">
      <p>Hello from the modal!</p>
      <button @click="open = false">Close</button>
    </div>
  </Teleport>
</template>

```
### Múltiples teletransportes en el mismo objetivo
- Un caso de uso común sería un componente &lt;Modal> reutilizable, con la posibilidad de que varias instancias estén activas al mismo tiempo
- Varios modales pueden montar el contenido (moverse) al mismo elemento de destino.

Componente Padre
```html
<template>
<div id="modals"></div>
<div class="outer">
  <h3>Vue 3</h3>
  <div>

   <MyModal></MyModal>
  </div>
</div>

</template>

<script setup>
import MyModal from "./MyModal.vue";

</script>

```
Componente MyModal
```html
<script setup>
    
</script>
<template>
  <Teleport to="#modals">
    <div>A</div>
  </Teleport>
  <Teleport to="#modals">
    <div>B</div>
  </Teleport>

</template>


```

- [Mas info](https://vuejs.org/guide/built-ins/teleport.html#basic-usage)

## Transition
- Vue ofrece dos componentes integrados que pueden ayudar a trabajar con transiciones y animaciones en respuesta a cambios de estado:
   - &lt;Transition> para aplicar animaciones cuando un elemento o componente entra y sale del DOM. Esto está cubierto en esta guía
   - &lt;TransitionGroup>para aplicar animaciones cuando un elemento o componente se inserta, elimina o mueve dentro de una v-for. ([Info](https://vuejs.org/guide/built-ins/transition-group.html))
- Además de estos dos componentes, también podemos aplicar animaciones en Vue usando otras técnicas, como alternar clases CSS o animaciones basadas en estado a través de enlaces de estilo.


### Componente &lt;Transition>

- &lt;Transition> es un componente incorporado: esto significa que está disponible en la plantilla  en cualquier componente sin tener que registrarlo(importarlo). Se puede utilizar para aplicar animaciones de entrada y salida en elementos o componentes que se le pasan a través de su ranura(slot) predeterminada. La entrada o salida puede activarse mediante uno de los siguientes:
  - v-if
  - v-show
  - Componentes dinámicos que alternan a través del &lt;component>
- [Ver mas info](https://vuejs.org/guide/built-ins/transition.html#the-transition-component)
  

```html

<script setup>
import { ref } from 'vue';

   const show = ref(false)
   
  
  </script>
<template>
<button @click="show = !show">Toggle</button>
<Transition>
  <p v-if="show">hello</p>
</Transition>
</template>

<style>
   /* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

```
#### Cuando &lt;Transition>  inserta o elimina un elemento, esto es lo que sucede:


#### Agregara/eliminara varias clases  de CSS en los momentos apropiados. 
- Se aplican seis clases para las transiciones de entrada/salida.
![Seis clases CSS](https://vuejs.org/assets/transition-classes.f0f7b3c9.png)
####  Si hay oyentes para ganchos de JavaScript , estos ganchos se llamarán en los tiempos apropiados.
- [Lista de ganchos](https://vuejs.org/guide/built-ins/transition.html#javascript-hooks)
#### Si no se detectan transiciones/animaciones CSS y no se proporcionan ganchos de JavaScript, las operaciones DOM para la inserción y/o eliminación se ejecutarán en el siguiente cuadro de animación del navegador.
#### [Mas info]( https://vuejs.org/guide/built-ins/transition.html#the-transition-component)

## Componente &lt;Component >
- Es un "metacomponente" para renderizar componentes o elementos dinámicos.
- El componente real a renderizar está determinado por la propiedad is.
- Cuando is es un string, puede ser un nombre de etiqueta HTML o el nombre registrado de un componente (OPTIONS API)
- Alternativamente, is también puede vincularse directamente a la definición de un componente.

#### Ejemplos:

```html
<template>
  <h1>Component Main</h1>
  <!-- Renderiza el componente MyModal -->
   <component :is="MyModal" />

 


</template>

<script setup>
import MyModal from './MyModal.vue';

</script>

```

#### OPTION API
Hijo

```html
<template>
    <div>
        <h1>Componente hijo</h1>
         
    </div>

</template>

<script >
    export default {
        name:"ComponenteHijo" ,
      
    }
</script>

```
Padre
```html
<script>
  import ComponenteHijo from './ComponenteHijo.vue'

  
  export default {
    components: { ComponenteHijo },
    data() {
      return {
        view: 'ComponenteHijo'
      }
    }
  }
  </script>
  
  <template>
    <component :is="view" />
  </template>

```
#### Representación de elementos HTML:

```html
<template>
  <component :is="'span'"/>
</template>

```
- [mas info](https://vuejs.org/api/built-in-special-elements.html#component)

## Suspense
- Se utiliza para orquestar dependencias asíncronas anidadas en un árbol de componentes.
- Suspense acepta dos slots:   la #default y la #fallback.   Mostrará el contenido de fallback mientras procesa el slot predeterminado en la memoria.
- Si encuentra dependencias asincrónicas ( [Componentes asincrónicos](https://vuejs.org/guide/components/async.html#basic-usage) y componentes [con async setup()](https://vuejs.org/guide/built-ins/suspense.html#async-setup) en el slot predeterminado, esperará hasta que se resuelvan todas antes de mostrar el slot predeterminado.
- Puede representar un estado de carga mientras espera que se resuelvan múltiples dependencias asíncronas anidadas en el árbol de componentes.
- [info](https://vuejs.org/api/built-in-components.html#suspense)
- [mas info ](https://vuejs.org/guide/built-ins/suspense.html)

#### Situacion:
- &lt;Suspense>
  - &lt;Dashboard>
    -  &lt;Profile>
       - &lt;FriendStatus> (component with async setup())
  - &lt;Content>
      - &lt;ActivityFeed> (async component)
      - &lt;Stats> (async component)




- En un árbol de componentes hay varios componentes anidados cuya representación(renderización) depende de algún recurso asincrónico que se resolverá primero. Sin &lt;Suspense>, cada uno de ellos necesitará manejar su propia carga/error y estados cargados. En el peor de los casos, podemos ver tres botones giratorios de carga en la página, con contenido que se muestra en diferentes momentos.
- El componente &lt;Suspense> nos brinda la capacidad de mostrar estados de error/carga de nivel superior mientras esperamos que se resuelvan estas dependencias asincrónicas anidadas.
- Hay dos tipos de dependencias asíncronas que &lt;Suspense> puede esperar:
  - Componentes con un setup() asíncrono. Esto incluye componentes que  usan  expresiones await de nivel superior en  &lt;script setup>.
  - Componentes asíncronos .

### Estado de carga

- El componente &lt;Suspense> tiene dos slots: #default y #fallback. 
- En el renderizado inicial, &lt;Suspense> procesara el slot predeterminado en la memoria. Si se encuentran dependencias asíncronas durante el proceso, entrará en un estado pendiente. Durante el estado pendiente, se mostrará el contenido alternativo(el slot fallback). Cuando se han resuelto todas las dependencias asíncronas encontradas, &lt;Suspense> ingresa a un estado resuelto y se muestra el contenido del slot predeterminado.

Si no se encontraron dependencias asíncronas durante el renderizado inicial, &lt;Suspense>pasará directamente a un estado resuelto.
- [Mas info](https://vuejs.org/guide/built-ins/suspense.html)