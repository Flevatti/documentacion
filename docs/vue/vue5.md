---
sidebar_position: 8
---
# Vue #5

## Mixins
- Esto se utiliza con la options API
- Esto se utilizaba antes de que aparezcan los composables 
- Muchas veces tienes un determinado método, propiedad computada o lo que sea que tienes que repetir en muchos componentes porque no puedes crear un solo componente genérico que te sirva para todos los casos.
- Los mixins sirven para solventar esta situación. Se trata de una funcionalidad de Vue que permite reutilizar cualquier cosa de los componentes para que no tengas que duplicar funcionalidad o no acabes con demasiados componente con demasiados props.

#### Forma de implementarlo:

Src/mixins/clickMixin.js
```js
export default {
    data: () => ({
        myVariable: 10
    }) ,
    methods: {
        clickHandler(value) {
            alert('Hiciste click');
            console.log(value);
        }
    } 
  
}

```
:::tip Observaciones
- Se utiliza la options API
- Un mixins , es  un objeto que contiene las opciones de componente y  que se exporta por defecto 
- En el ejemplo el objeto solo tiene un método y una data  pero podes usar todas las opciones que nos ofrece Vue 2
:::

En el componente:

```html
<template>
  <img alt="Vue logo" src="./assets/logo.png">
   <h1>Componente Principal</h1>
   <p>myVariable : {{myVariable}}</p>
   <button @click="clickHandler">clickHandler</button>
</template>

<script >
  import clickMixin from "./mixins/clickMixin"
      export default {
         mixins:[clickMixin]
      }
</script>

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

:::tip Observación
- Se utiliza la options API
- Con la opcion/propiedad mixins  , “copiamos” el contenido de los  mixins “especificados” dentro de nuestro componente.
- Mixins : [mixins_especificado , mixins_especificado]
- La propiedad mixins recibe un array de objetos.
- Cada objeto es un mixins (un objeto de opciones de la API OPTIONS).
:::

### Mixins globales


- Se hace en la instancia que contiene la aplicación de Vue (main.js)
- Hacemos el ejemplo anterior, pero de forma global.

Main.js
```js
import { createApp } from 'vue'
import App from './App.vue'

const MyApp = createApp(App)
// mixin({mixin})
MyApp.mixin({
    data: () => ({
        myVariable: 10
    }) ,
    methods: {
        clickHandler(value) {
            alert('Hiciste click');
            console.log(value);
        }
    } 
})
MyApp.mount('#app')

```
Componente
```html
<template>
  <img alt="Vue logo" src="./assets/logo.png">
   <h1>Componente Principal</h1>
   <p>myVariable : {{myVariable}}</p>
   <button @click="clickHandler">clickHandler</button>
</template>


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

:::tip Mas info
- [vue mixins](https://codingpotions.com/vue-mixins)
- [composition api vs mixins](https://www.syncfusion.com/blogs/post/can-the-composition-api-replace-vue-mixins.aspx)
- [mixins](https://es.vuejs.org/v2/guide/mixins.html)
:::

## CSS con alcance (scoped)

- Cuando una etiqueta &lt;style> tiene el  atributo scoped, su CSS se aplicará solo a los elementos del componente actual.

Se logra mediante el uso de PostCSS para transformar lo siguiente:
```html
<style scoped>
.example {
  color: red;
}
</style>

<template>
  <div class="example">hi</div>
</template>

```
En lo siguiente
```html
<style>
    .example[data-v-f3f3eg9] {
      color: red;
    }
    </style>
    
    <template>
      <div class="example" data-v-f3f3eg9>hi</div>
    </template>

```
:::tip Ojo
El data que se genera tiene un nombre aleatorio.
:::

### Elementos raíz del componente hijo
- Con scoped, los estilos del componente principal no se filtrarán a los componentes secundarios. 
- Sin embargo, el nodo raíz de un componente secundario se verá afectado tanto por el CSS del ámbito principal como por el CSS del ámbito secundario.
- Con el scoped , afectas al contenedor/raiz principal de los componentes secundarios.

App.vue 

```html
<style scoped>
    .hello {
     background:red;
    }
  </style>
  
  <template>
    <div class="example">hi</div>
     <HelloWorld></HelloWorld>
  </template>
  
<script setup>
import HelloWorld from './components/HelloWorld.vue';

</script>

```
HelloWorld(Componente Hijo)
```html
<template>
  <!-- nodo raiz  -->
  <div class="hello">
     <h2>Hello world</h2>
     <div class="hello" ></div>
  </div>
</template>

```

:::tip Observación
- Se aplica el estilo de la clase hello al primer div  del componente hijo porque es el contenedor/raiz principal del componente HelloWorld.
- En el segundo div del componente HelloWorld ya no se aplica porque no es el contenedor/raiz principal del componente.
:::

### Selectores profundos

- Si desea que un selector en un  &lt;style scoped>  sea "profundo", es decir, que afecte a los componentes secundarios, puede usar la  pseudoclase: :deep()
  
  Para afectar al segundo div del componente HelloWorld:

App.vue 
```html
<style scoped>
     :deep(.hello) {
      background:red;
    }
  </style>

```
HelloWorld
```html
<template>
  <!-- nodo raiz  -->
  <div class="hello">
     <h2>Hello world</h2>
     <div class="hello" >
      <p>Contenedor pintado</p>
     </div>
  </div>
</template>

<style scoped></style>

```
:::tip Observación
- Se aplica el estilo css de la clase hello  SOLO al segundo div.
- El segundo div ya se encuentra en el componente secundario.
- Se compilaría como : [data del componente principal] .hello

:::

###  Selectores para slots
- De forma predeterminada, los estilos con scoped no afectan los contenidos representados por &lt;slot/>, ya que se consideran una propiedad del componente principal que los pasa. Para apuntar explícitamente al contenido de la ranura, use la pseudoclase: :slotted
  
App
```html
  <template>
     <HelloWorld> <div class="otroDiv" style="width:800px;">Otro contenedor</div></HelloWorld>
  </template>

```
HelloWorld
```html
<template>
  <div class="hello">
    <slot></slot>
  </div>
</template>

<style scoped>
  /* No aplicaria el estilo al contenido que se renderiza por slot */
    .otroDiv {
      background:red;
    }
  /*  Aplicaria el estilo al contenido que se renderiza por slot */
    :slotted(.otroDiv) {
      background:red;
    }
</style>

```

### Selectores globales

- Si desea que una regla se aplique globalmente, puede usar la pseudoclase :global en lugar de crear otro &lt;style>.

App.vue
```html
<style scoped>
  :global(.otroDiv) {
    background:red;
  }
</style>

```
- Mezcla de estilos locales y globales
```html

<style>
  /* global styles */
  </style>
  
  <style scoped>
  /* local styles */
  </style>

```
:::tip info
- [Scoped css](https://vuejs.org/api/sfc-css-features.html#scoped-css)
:::
## Módulos CSS
- Una etiqueta  &lt;style module> se compila como  un módulo CSS y expone las clases CSS resultantes al componente como un objeto  global llamado  $style:
  
```html
  
  <template>
      <div :class="$style.red">
         <p :class="$style.size">PaRRAFO</p>
      </div>
  </template>
  
<script setup>

</script>
<style module>
  .red {
    background:red;
  }
  .size {
    font-size:50px;
  }
</style>


```
- Las clases resultantes se codifican para evitar la colisión, logrando el mismo efecto de limitar el alcance del CSS al componente actual únicamente.


### Nombre personalizado

Se puede personalizar el nombre del objeto que contiene las clases.

```html
  <template>
      <div :class="nombreVariable.red">
         <p :class="nombreVariable.size">PaRRAFO</p>
      </div>
  </template>
  
<script setup>

</script>
<style module="nombreVariable">
  .red {
    background:red;
  }
  .size {
    font-size:50px;
  }
</style>

```
:::tip Observacion 
- el "atributo" module de &lt;style> acepta un valor, que sería el nombre que remplazaría al objeto $style.
- En este caso $style paso a llamarse nombreVariable.
:::

### Uso con API de composición

- Se puede acceder a las clases en setup() o &lt;script setup> través de la  API useCssModule. Para &lt;style module> con nombre personalizado, useCssModule acepta el  valor de module  como primer argumento.



Sin nombre personalizado:

```html
  <template>
      <div :class="styles.red">
         <p :class="styles.size" >PaRRAFO</p>
      </div>
  </template>
  
<script setup>
import { useCssModule } from 'vue'

const styles = useCssModule();
console.log(styles);

</script>
<style module>
  .red {
    background:red;
  }
  .size {
    font-size:50px;
  }
</style>

```
Con nombre personalizado:

```html
  <template>
      <div :class="styles.red">
         <p :class="styles.size" >PaRRAFO</p>
      </div>
  </template>
  
<script setup>
import { useCssModule } from 'vue'

const styles = useCssModule("nombreVariable");
console.log(styles);

</script>
<style module="nombreVariable">
  .red {
    background:red;
  }
  .size {
    font-size:50px;
  }
</style>

```

:::tip info
- [css module](https://vuejs.org/api/sfc-css-features.html#css-modules)


:::

## v-bind() en CSS

- Las etiquetas  &lt;style> admiten  valores dinámicos gracias a la funcion css v-bind()
- v-bind seria como var() pero  con  variables del componente.
- v-bind() recibe una variable del componente para usarla como valor de una propiedad css.

```html
<script setup>
  const theme = {
    color: 'red'
  }
  </script>
  
  <template>
    <p>hello</p>
  </template>
  
  <style scoped>
  p {
    color: v-bind('theme.color');
  }
  </style>

```
:::tip Observacion
- En este ejemplo, color: red
- [info](https://vuejs.org/api/sfc-css-features.html#v-bind-in-css)
:::
## Animaciones
### Animaciones basadas en clases
- Para los elementos que no ingresan/salen del DOM, podemos activar animaciones agregando dinámicamente una clase CSS:
```html
<script>
  export default {
  data() {
    return {
      disabled: false
    }
  },
  methods: {
    warnDisabled() {
      this.disabled = true
      setTimeout(() => {
        this.disabled = false
      }, 1500)
    }
  }
}
</script>
<template>
  <div :class="{ shake: disabled }">
  <button @click="warnDisabled">Click me</button>
  <span v-if="disabled">This feature is disabled!</span>
</div>
</template>

<style>
  .shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>

```

### Animaciones impulsadas por el estado
- Algunos efectos de transición se pueden aplicar interpolando valores, por ejemplo, vinculando un estilo a un elemento mientras se produce una interacción. Tome este ejemplo por ejemplo:

```html
<script>
  export default {
  data() {
    return {
      x: 0
    }
  },
  methods: {
    onMousemove(e) {
      this.x = e.clientX
    }
  }
}
</script>
<template>
<div
  @mousemove="onMousemove"
  :style="{ backgroundColor: `hsl(${x}, 80%, 50%)` }"
  class="movearea"
>
  <p>Move your mouse across this div...</p>
  <p>x: {{ x }}</p>
</div>
</template>

<style>
 .movearea {
  transition: 0.3s background-color ease;
}
</style>

```

### Animación con observadores

- Con un poco de creatividad, podemos usar observadores para animar cualquier cosa en función de algún estado numérico. Por ejemplo, podemos animar el propio número:
- [Animación con observadores](https://vuejs.org/guide/extras/animation.html#animating-with-watchers)


## Directivas de Vue

- Las directivas de Vue son atributos especiales que se colocan en las etiquetas HTML y están prefijados por v-, como por ejemplo, v-for, v-bind o v-on, entre muchas otras. Estas directivas permiten realizar acciones dinámicas potentes (bucles, condicionales, etc...) que no se pueden realizar en HTML por si solo, pero que Vue permite utilizar en sus etiquetas &lt;template>.

![Imagen ilustrativa](https://lenguajejs.com/vuejs/directivas-vue/que-son-directivas/directivas-vue.png)

:::tip
Ya explicamos la mayoria en esta guia
:::

- Dichas directivas están formadas por varias partes:
  - Directiva: El nombre de la directiva, que a veces, es posible abreviarlo con un carácter(verde).
  - Argumento: En ciertas directivas se indica un parámetro (en la imagen figura como nombre, es lo azul).
  - Modificador: En ciertas directivas se puede modificar el comportamiento. (morado)
  - Valor: En ciertas directivas, se requiere establecer un valor. Se escribe como el valor de un atributo HTML. (Naranja)

### La directiva v-html

- Si quisiéramos incluir código HTML en una de esas variables, se mostrarían las etiquetas literalmente (en texto plano). Esta directiva te permite  procesar y renderizar el codigo HTML que contienen las variables . 

```html
<template>
  <div>
    <!-- Se muestra la etiqueta HTML literalmente  -->
    <!-- Se muestra en texto plano -->

    <div>{{ nickname }}</div>
    <!-- Utilizando directiva v-html, se renderiza el HTML -->
    <!-- Aca se procesa el codigo HTML dentro del div -->
    <div v-html="nickname"></div>
  </div>
</template>

<script>
  export default {
    name: "ComponentExample",
    data() {
      return {
        nickname: "<h1>Codigo HTML</h1>"
      }
    }
  }
</script>

```
### La directiva v-pre 
- En algunas raras ocasiones, podríamos necesitar escribir literal y textualmente el texto {{ nickname }}, por ejemplo, y no querer que se renderice con el valor de la variable nickname. Para conseguir esto, podemos utilizar la directiva v-pre, la cual trata todo el contenido como texto plano (No se ejecutan los {{ códigos de javascript}} ni ninguna lógica)

```html
<template>
  <div>
    <div>{{ nickname }}</div>  <!-- Se renderiza al valor de nickname -->
    <div v-pre>{{ nickname }}</div>  <!-- No se renderiza -->
  </div>
</template>

<script>
  export default {
    name: "ComponentExample",
    data() {
      return {
        nickname: "<h1>Codigo HTML</h1>"
      }
    }
  }
</script>

```

### La directiva v-once 

- Permite que se renderice el componente/elemento sólo una vez.
- La directiva v-once puede ser interesante en las situaciones en las que solo desees que tome el valor que tiene la primera vez, aunque estos casos suelen ser casos  muy particulares que se usan muy pocas veces.
- Se renderiza solo una vez, ósea no aplica la reactividad.

### La directiva v-cloak 
- La directiva v-cloak es un atributo que podemos ponerle a un elemento HTML para que Vue, lo elimine automáticamente cuando el contenido que contenga, se haya procesado. Es decir, el atributo v-cloak permanecerá y cuando se haya cargado completamente, se eliminará de la etiqueta.
- Esto puede resultar interesante para darle estilo mediante CSS con un selector del tipo [v-cloak] y realizar operaciones como ocultar el elemento mientras no esté listo (o cosas similares).


:::tip

¡Hay muchas mas directivas que tenes que averiguar!


:::


## Prop ref
- La prop "ref" se utiliza para crear una referencia a un elemento del DOM o a un componente hijo. 
- Es similar a  document.getElementById en vanilla JavaScript. Ambos permiten acceder a un elemento DOM específico en el árbol de elementos de la página.
- Hay algunas diferencias importantes entre ref y document.getElementById:
  - Seguridad: ref es más seguro que document.getElementById porque Vue garantiza que la referencia sea única y no se pueda acceder a ella desde fuera del componente.
  - Reactividad: ref se integra con el sistema de reactividad de Vue, lo que significa que cuando se actualiza el elemento DOM, la referencia se actualiza automáticamente.
  - Componentes: ref se puede utilizar para acceder a componentes hijos, no solo elementos DOM.
  - Virtual DOM: ref se aplica al Virtual DOM de Vue, lo que significa que se puede acceder a elementos que no necesariamente existen en el DOM real.
- Se puede utilizar en el template para acceder al elemento o componente referenciado.
- En resumen, ref es una forma de acceder a elementos DOM o componentes hijos en Vue, similar a document.getElementById, pero con características adicionales de seguridad, reactividad y integración con el sistema de componentes de Vue.
- Aquí hay un ejemplo de cómo se puede usar la prop "ref" en un componente:

```javascript
<template>
  <div>
    <input ref="input" type="text">
    <button @click="focusInput">Focus input</button>
  </div>
</template>

<script>
export default {
  methods: {
    focusInput() {
      this.$refs.input.focus()
    }
  }
}
</script>

```
:::tip Observación
- En este ejemplo, se crea una referencia a un elemento input utilizando la prop "ref".
- El valor de la prop ref es el "nombre de una variable" (no hace falta que exista, luego vue la crea con la referencia del elemento que especificamos) que contendra la referencia. Luego, en el método focusInput, se utiliza la propiedad $refs que es una especie de objeto que contiene todas las variables que se crearon con la prop ref, para acceder al input y llama al método focus para enfocarlo.
- Resumiendo: Se crea una referencia del componente / elemento HTML que tenga la prop "ref" 
:::

- Con composition API

```javascript
<template>
  <div>
    <input ref="input" type="text">
    <button @click="focusInput">Enfocar input</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const input = ref(null)

const focusInput = () => {
  input.value.focus()
}

onMounted(() => {
  input.value.focus()
})
</script>
```
:::tip Observación
- El código crea un componente que:
  - Crea un input y un botón
  - Establece el enfoque en el input cuando se monta el componente
  - Establece el enfoque en el input cuando se hace clic en el botón
:::