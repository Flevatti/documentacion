---
sidebar_position: 6
---
# Vue #3
## watchEffect()
- Es como watch
- Recibe un callback
- Si con watch observamos un único valor reactivo, con watchEffect podemos observar varios en un mismo callback.
- Una forma de entender watchEffect es compararlo con las propiedades computadas: en una propiedad computada podemos retornar un nuevo valor cuando diferentes piezas del estado cambian.
- Con watchEffect ocurre lo mismo, pero en lugar de retornar un valor, (de nuevo) hacemos algo en el sistema.
- El callback Se ejecuta de forma inmediata luego de su definición y cuando las dependencias cambien se vuelve a ejecutar.
- Con watchEffect:
  - No tenes acceso a sus valores anteriores
  - Podes lanzar un callback de forma inmediata

```html
<template>
  <p>{{nombreCompleto}}</p>
</template>

<script setup>
import { ref, watchEffect, computed } from "vue";

const nombre = ref("perez");
const apellido = ref("nuñez");

watchEffect(() => {
  console.log("Se ejecuto el watchEffect")
  // Se activa de forma inmediata y cuando nombre o apellido cambie
  // Haz algo (side effects) 👁
  // Hacemos algo en el sistema
  console.log(nombre.value);
  console.log(apellido.value);
  console.log("----------------------")
});

const nombreCompleto = computed(() => {
  // Se vuelve a ejecutar cuando el valor  nombre o apellido cambie
  return `${nombre.value} ${apellido.value}`;
});

setTimeout(() => {
   nombre.value = "Nombre";
} , 2000)
setTimeout(() => {
   apellido.value = "Apellido";
} , 3000)
</script>

```
:::tip Observacion 
- watchEffect() recibe un callback.
- El callback se ejecuta inmediatamente después de su definición.
- El callback se ejecuta cuando algunos de los valores que utiliza (dependencias) cambie.
:::

## Vue 2 Vs Vue 3

#### Cuando usar Vue 3 
- 	Si llegas a necesitar soporte para IE11: lo mejor es no utilizar Vue 3, ya que el soporte aún no está disponible.
- 	Si estás en un proyecto existente muy grande y complejo que usa Vue 2: es posible que no desees migrar a Vue 3, dependiendo de tu código, el tiempo de migración y los beneficios de rendimiento pueden que no valgan la pena.
- 	Si estás enfrentando problemas de rendimiento después de hacer varias optimizaciones, entonces utiliza Vue 3. Este está escrito desde cero y te ofrece un mejor rendimiento que su versión anterior. 
- 	Si necesitas una mejor compatibilidad con TypeScript: utiliza Vue 3, ¡es mucho mejor que antes!
- 	Si tus dependencias son compatibles con Vue 3, entonces lo más lógico es utilizar esta versión.

### Diferencias 
#### La sintaxis para crear Aplicación
Vue 2
```js
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

```

Vue 3
```js
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

createApp(App).mount('#app')

```
:::tip Razon para el cambio 
Las configuraciones globales generan problemas durante las pruebas en las pruebas unitarias ya que los casos de prueba pueden afectarse entre sí debido a estas configuraciones.
:::


#### Vue 3 proporciona diferentes configuraciones globales, pero dificulta compartir una copia de la configuración con varios archivos apps.
- Demostracion utilizando [mixin](https://es.vuejs.org/v2/guide/mixins.html)
  
  Vue 2

  Ambas aplicaciones tienen la misma configuración.
```js
  Vue.mixin({ /* ... */ })

const app1 = new Vue({ el: '#app-1' })
const app2 = new Vue({ el: '#app-2' })

```
Vue 3
```js
const app = createApp(App)
// This configuration effect only 1 instance
app.mixin(/* ... */)
app.mount('#app')
```

#### Raíz múltiple
- En Vue 2, se implementa SOLO UN nodo raíz en la plantilla (&lt;template>), pero en Vue 3 ya no se requiere solo un nodo raíz para los componentes, lo que significa que el desarrollador puede trabajar con varias raíces en la plantilla (&lt;template>).
- Conclusion:
  - El template de vue2 debe tener un contenedor principal que encierre TODO EL CONTENIDO.
  - El template de vue3 puede tener varios contenedores principales.

Vue 2
```html
<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="count++">count is: {{ count }}</button>
    <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  </div>
</template>

```
Vue 3

```html
<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

```
#### API de composición
- En Vue 2 se trabaja con Options API
- LA API COMPOSITION, es la nueva forma de trabajar con Vue 3
- Las razones para usar la API de composición son:
  -	Los componentes grandes se vuelven difíciles de leer y mantener.
  -	Administrar y mantener la lógica entre los componentes es un gran problema (mixins).
Por lo tanto, la aparición de la API de composición resolverá los problemas anteriores.
- Las características de la API de composición incluyen:
  - Compatibilidad óptima con TypeScript.
  - Un componente es demasiado grande y es obligatoria una buena organización del código.
  - Se requiere código reutilizable.
- Vue 3 nos proporciona nuevos métodos como watchEffect() para trabajar con la API composition.
- La propiedad filters de OPtions API está en desuso en Vue 3 .
Lo que se hace con la propiedad filters , se puede hacer con los methods.

#### Múltiples v-model
- Como sabemos sobre Vue 2, v-model un enlace bidireccional en un componente dado, pero podemos usar solo uno en Vue 2.
- En vue 3 Un componente puede manejar múltiples v-model  
Vue 2
```html
<input v-model="propiedad" />
```
Vue 3

InviteForm.vue
```html
<template>
  <form>
    <div>
      <label for="name">Name</label>
      <input type="text" :value="name" @input="updateName($event.target.value)" />
    </div>
    <div>
      <label for="email">Email</label>
      <input type="email" :value="email" @input="updateEmail($event.target.value)" />
    </div>
  </form>
</template>
<script>
export default {
  props: {
    name: String,
    email: String,
  },
  setup(props, { emit }) {
    const updateName = (value) => {
      emit("update:name", value);
    };
    const updateEmail = (value) => {
      emit("update:email", value);
    };
    return { updateName, updateEmail };
  },
};
</script>

```
App.vue 
```html
<template>
  <div id="app">
    <InviteForm v-model:name="inviteName" v-model:email="inviteEmail" />
    <div>
      <div>{{ inviteName }}</div>
      <div>{{ inviteEmail }}</div>
    </div>
  </div>
</template>

<script>
import InviteForm from "./components/InviteForm.vue";
import { ref } from "vue";
export default {
  name: "App",
  components: {
    InviteForm,
  },
  setup() {
    const inviteName = ref("name");
    const inviteEmail = ref("invite");
    return {
      inviteName,
      inviteEmail,
    };
  },
};
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
:::tip Observacion
- Actualizar valor de nombre emit(“update:name”, value);
- Actualizar el valor del correo electrónicoemit(“update:email”, value);
- Por lo tanto, es más simple y más fácil de usar que Vue 2, que tiene al menos 2 eventos para sincronizar cada valor del componente secundario al componente principal en el manejo de valores múltiples.
:::

#### Modular
- En vue 2 , para que su código sea modular se utilizaba el mixins.
- En Vue 3 , los separamos en diferentes archivos Javascript para luego usarlo en el setup.

#### Componentes Especiales
- Vue 3 viene con componentes especiales nuevos como teleport  y suspense.

#### Ganchos de ciclo de vida

- Métodos del ciclo de vida de Vue 2:
  -	beforeCreate()
  -	created()
  -	beforeMount()
  -	mounted()
  -	beforeUpdate()
  -	updated()
  -	beforeDestroy()

- En Vue 3 Hay algunos nuevos:
  -	beforeDestroy()  se convierte en beforeUnmount()
  -	destroyed() se convierte en unmounted()
  -	onRenderTracked  se llama cuando se accede por primera vez a una dependencia reactiva 
  -	onRenderTriggered() se llama cuando se activa un nuevo renderizado que le permite inspeccionar qué y cuándo se vuelve a renderizar un componente.

- El beforeCreate()y el create( )son innecesarios cuando se usa la API de composición porque la aplicación llamará al beforeCreate()antes del setup()y el created()gancho se llamará inmediatamente después setup(). Por lo tanto, podemos usar setup()para manejar lo que necesitamos en beforeCreate()y create().

- ![ruta setup](https://miro.medium.com/max/134/1*-Vtm69BGmYVVAUTPNAzUqQ.png)

#### Rendimiento
- El Vue 3.0 se centra en las mejoras de rendimiento:


## V-model 
- [Explicacion basica](../vue#v-model);
#### Funcionamiento de v-model:
```js
   <input type="text" v-model="input1">
   const input1 = ref("Valor por defecto");
```
El código anterior hace lo mismo que:
```js
<input
  :value="input1"
  @input="input1 = $event.target.value"
/>
 const input1 = ref("Valor por defecto");

```

### ¿Como utilizarlo en un componente?
- Cuando se utiliza en un componente, el v-model  hace  esto:
- Convierte esta línea de codigo: 
```js
  <Componente v-model="variable"></Componente >
```
En esto:
```js
<Componente
  :modelValue="variable"
  @update:modelValue="nuevoValor => variable = nuevoValor"
/>

```

#### Para que esto funcione , el componente debe hacer dos cosas:
- Que el atributo value del input tenga el mismo valor que  la props modelValue (que esten vinculados).
- Emitir el evento personalizado  update:modelValue  para cambiar el valor.


Ejemplo:

Componente
```html
<script setup>
import {defineProps,defineEmits} from 'vue';
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

```
App
```html
<template>
   <h1>V-model</h1>
  <InputDelFormulario :modelValue="variable" @update:modelValue="nuevoValor => variable = nuevoValor"></InputDelFormulario>
   <p>El valor del formulario {{variable}}</p>
</template>

<script setup>
import InputDelFormulario from './components/InputDelFormulario.vue';
import { ref } from 'vue';
const variable = ref("");
</script>

```
:::tip Observacion
InputDelFormulario es el “componente”
:::

#### Ahora hacemos lo mismo  con el v-model:

App
```html
  <InputDelFormulario v-model="variable"></InputDelFormulario>
```

:::tip Recordatorio
Para que el v-model funcione en un componente debe hacerse los dos pasos que hicimos anteriormente.
:::

### Otra forma de implementar v-model en el componente
- Es a través de una propiedad computed con un getter y un setter.
- El método get debe devolver el valor de la “variable” y el método set debe emitir el evento que cambia el valor de la misma.

Componente:
```html
<script setup>
import { defineProps , defineEmits , computed  } from 'vue'

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <input v-model="value" />
</template>

```
### V-model argumentos
- De forma predeterminada, v-model en un componente utiliza modelValue como prop y update:modelValue como evento. Podemos modificar estos nombres pasando un argumento a v-model.

Entonces podemos convertir esta línea de código:
```html
 <InputDelFormulario :title="variable" @update:title="nuevoValor => variable = nuevoValor"></InputDelFormulario>
```
En esta:
```html
 <InputDelFormulario v-model:title="variable"></InputDelFormulario>
```
:::tip Observacion 
- La props title = variable 
- modelValue paso a llamarse title.
- Sintaxis : v-model:nombreProp=”variable”.
- Con esa sintaxis cambias el nombre de modelValue por el de nombreProp.
:::

Componente:

```html
<script setup>
import { defineProps , defineEmits   } from 'vue'
defineProps(['title'])
  defineEmits(['title:modelValue'])

</script>

<template>
   <input
    type="text"
    :value="title"
    @input="$emit('update:title', $event.target.value)"
  />
</template>

```
:::tip Observacion
- Como se manda una props llamada title , modificamos la línea que define la props.
- Tambien modificamos el evento personalizado ya que suele utilizar como nombre de evento :  “update:nombreProp”
:::

### Multiples v-model en un componente

- Podemos tener multiples v-model en un componente:

App
```html
<template>
  <h1>V-model</h1>
  <InputDelFormulario v-model:apellido="apellido" v-model:nombre="nombre"></InputDelFormulario>
    <p>El valor del formulario es {{ nombre }} {{ apellido }}</p>
</template>

<script setup>
import { ref } from 'vue';
import InputDelFormulario from './components/InputDelFormulario.vue';
const apellido = ref("");
const nombre = ref("");
</script>

```
InputDelFormulario
```html
<script setup>
import {defineProps , defineEmits} from 'vue'
defineProps({
  nombre: String,
  apellido: String
})

defineEmits(['update:nombre', 'update:apellido'])
</script>

<template>
  <input
    type="text"
    :value="nombre"
    @input="$emit('update:nombre', $event.target.value)"
  />
  <input
    type="text"
    :value="apellido"
    @input="$emit('update:apellido', $event.target.value)"
  />
</template>

```

### Modificadores de v-model
- v-model por defecto actualiza el value del input y/o la variable en cada evento input pero esta configuración la podemos cambiar con modificadores
- Los modificadores son directivas postfijas marcados por un punto.

#### .lazy 
- Actualiza el value del input y/o la variable después de cada evento change
- Se actualiza el valor del input y/o la variable en cada desenfoque luego de modificar el input.
```html
    <input type="text" v-model.lazy="nombre">
```
#### .number
- Se añade automáticamente si el type=”number”.
- Si el primer valor del input es un numero , no te deja insertar letras.
- Si el valor no se puede analizar con parseFloat(), entonces se usa el valor original en su lugar.
```js
    <input type="text" v-model.number="nombre">
```
#### .trim
- Sirve para recortar los espacios en blanco
- No confundir recortar espacio en blanco con quitarlo.

```html
    <input type="text" v-model.trim="nombre">
```

#### También podes crear el tuyo:
App.vue 
```html
<template>
  <h1>V-model</h1>
    <InputDelFormulario v-model.mayuscula="nombre"></InputDelFormulario>
    <p>El valor del formulario es {{ nombre }} </p>
</template>

<script setup>
import { ref } from 'vue';
import InputDelFormulario from './components/InputDelFormulario.vue';
const nombre = ref("");
</script>

```

InputDelFormulario
- Los modificadores agregados a un componente  se proporcionarán al componente a través de la props modelModifiers.
  
```html
  <script setup>
import { defineProps, defineEmits } from 'vue'
const props = defineProps({
    modelValue: String,
    //   Por defecto es un objeto vacio
    modelModifiers: { default: () => ({}) } ,
})
defineEmits(['update:modelValue'])
// Es un objeto , que contiene los modificadores que se le paso al v-model
console.log(props.modelModifiers);
</script>

<template>
    <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />

</template>

```
:::tip Observacion
- Cada propiedad del objeto modelModifiers se llama igual que el modificador que le añadimos al definir el v-model. Si dicho modificador se establecio en el v-model , su valor es true.
:::

Ahora en base a la información de esa props , podemos modificar el valor emitido.

En este caso , convertimos en mayúscula todo el valor del input.

```html
<script setup>
import { defineProps, defineEmits } from 'vue'
const props = defineProps({
    modelValue: String,
    //   Por defecto es un objeto vacio
    modelModifiers: { default: () => ({}) } ,
})
const emit = defineEmits(['update:modelValue'])
// Es un objeto , que contiene los modificadores que se le paso al v-model
console.log(props.modelModifiers);

 const emitValue = (e) => {
       let value = e.target.value;
       // Si tiene el modificador mayuscula
       if (props.modelModifiers.mayuscula) {
            value = value.toUpperCase();
       }
       emit('update:modelValue' , value);
 }
</script>

<template>
    <input type="text" :value="modelValue" @input=emitValue />

</template>

```
### Ejemplo con argumento y modificador:
App
```js
  <InputDelFormulario v-model:titulo.mayuscula="nombre"></...
```


InputDelFormulario
```html
<script setup>
import { defineProps, defineEmits } from 'vue'
const props = defineProps({
    titulo: String,
    //   Por defecto es un objeto vacio
    tituloModifiers: { default: () => ({}) } ,
})
const emit = defineEmits(['update:titulo'])
// Es un objeto , que contiene los modificadores que se le paso al v-model
console.log(props.tituloModifiers);

 const emitValue = (e) => {
       let value = e.target.value;
       // Si tiene el modificador mayuscula
       if (props.tituloModifiers.mayuscula) {
            value = value.toUpperCase();
       }
       emit('update:titulo' , value);
 }
</script>

<template>
    <input type="text" :value="titulo" @input=emitValue />

</template>

```
:::tip Observacion
- Tambien le cambiamos el nombre a la props que contiene el modificador
- El nombre es nombrePropModifiers
:::

### Mismo V-model en diferentes Inputs
- [info](https://vuejs.org/guide/essentials/forms.html#text)
- Se puede apuntar a la misma variable en diferentes inputs con el v-model.
- El valor del v-model sería un array.

Ejemplo:

```html
<template>
  <div>Checked names: {{ checkedNames }}</div>

<input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
<label for="jack">Jack</label>

<input type="checkbox" id="john" value="John" v-model="checkedNames">
<label for="john">John</label>

<input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
<label for="mike">Mike</label>
</template>

<script setup>
import { ref } from 'vue';
const checkedNames = ref([])
</script>
<template>
 <div>Picked: {{ picked }}</div>

<input type="radio" id="one" value="One" v-model="picked" />
<label for="one">One</label>

<input type="radio" id="two" value="Two" v-model="picked" />
<label for="two">Two</label>
</template>

<script setup>
import { ref } from 'vue';
const picked = ref(null)
</script>

```
Ejemplo con un option:

```html
<template>
<div>Selected: {{ selected }}</div>

<select v-model="selected">
  <option disabled value="">Please select one</option>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>
</template>

<script setup>
import { ref } from 'vue';
const selected = ref(null)
</script>

```

## defineComponent
- Sirve para crear un componente
- Esta función se suele utilizar en TypeScript.
- El componente puede utilizar la OPTIONS API O el COMPOSITION API (con el hook setup)
- El método defineComponent() recibe un objeto con OPTIONS API o COMPOSITION API
- Retorna el mismo objeto de opciones.
- Esta función nos permite crear un componente de TypeScript que es similar a un objeto de componente (OPTIONS API/COMPOSITION API) y también admite funciones adicionales.
- [link](https://www.telerik.com/blogs/definecomponent-vue-3-pure-magic)

Ejemplo con OPTIONS API:

App
```html
<template>
  
  <InputDelFormulario></InputDelFormulario>
</template>

<script setup>
import InputDelFormulario from './components/InputDelFormulario.vue';

</script>

```
InputDelFormulario
```html

<template>
   <h1>Template desde input del formulario</h1>
   <p>Nombre : {{nombre}}</p>
</template>
<script>
import { defineComponent } from "vue";

   export default defineComponent({
      data() {
        return {
            nombre : "Fede"
        }
      }
   })

</script>

```

Ejemplo con COMPOSITION API
App
```html
<template>
  
  <InputDelFormulario></InputDelFormulario>
</template>

<script setup>
import InputDelFormulario from './components/InputDelFormulario.vue';

</script>

```

InputDelFormulario
```html

<template>
   <h1>Template desde input del formulario</h1>
   <p>Nombre : {{nombre}}</p>
</template>
<script>
import { defineComponent , ref } from "vue";

   export default defineComponent({
      setup(){
        const nombre = ref("Fede");
        return {nombre};
      }
   })

</script>

```
## Modificadores del Eventos
- [¿Que son los eventos?](../vue#eventos)
- Los modificadores son directivas postfijas marcados por un punto.
- Con el v-on(@) podemos invocar el preventDefault o algún otro método del objeto evento sin necesidad de llamarlo en el método que gestiona el evento cuando se invoque este.

#### .stop 
- Ejecuta [evento.stopPropagation()](../Javascript/DOM#stoppropagation)
  
```html
<template>
  <div style=" height: 500px; background: red" @click="hicisteClick('1 nivel')">
    <div style="height: 450px; background: blue;position:relative;top:20px;width:80%;margin:auto" @click.stop="hicisteClick('2 nivel')">
     
    </div>
  </div>
</template>

<script setup>

      const hicisteClick = (mensaje) => {
           alert(mensaje);
      }
</script>

```
#### .prevent
- Ejecuta el evento.preventDefault()
  
```html
  <form action="/peticion" method="POST"  @submit.prevent="handler">
      <input type="text" value="Felipe">
       <button type="submit" >Enviar</button>
     </form>

```
#### .once
- El evento se activa solo una vez.
```html
<template>
  <div style=" height: 500px; background: red" @click.once="hicisteClick('1 nivel')">
   
     

  </div>
</template>

<script setup>

      const hicisteClick = (mensaje) => {
           alert(mensaje);
      }
</script>

```
#### .capture
- Un evento dirigido a un elemento interno se maneja aquí antes de ser manejado por ese elemento
- Si un evento de un hijo se activa, lo gestiona primero el padre y luego el hijo ([Fase de Captura](../Javascript/DOM#fase-de-captura))
- Maneja el evento del hijo.

```html
<template>
  <div style=" height: 500px; background: red" @click.capture="hicisteClick('1 nivel')">
    <div style="height: 450px; background: blue;position:relative;top:20px;width:80%;margin:auto" @click="hicisteClick('2 nivel')">
     
    </div>
  </div>
</template>

<script setup>

      const hicisteClick = (mensaje) => {
           alert(mensaje);
      }
</script>

```

#### .self
- Solo activa el método que gestiona el evento si event.target es el elemento en si. 
- if (event.target !== event.currentTarget) return

```html

<template>
  <div style=" height: 500px; background: red" @click.self="hicisteClick('1 nivel')">
    <div style="height: 450px; background: blue;position:relative;top:20px;width:80%;margin:auto" @click="hicisteClick('2 nivel')">
     
    </div>
  </div>
</template>

<script setup>

      const hicisteClick = (mensaje) => {
           alert(mensaje);
      }
</script>

```
#### .passive

- Comunica al navegador que no desea evitar el comportamiento predeterminado del evento.
- Indica que la función  que gestiona el evento nunca llamará a preventDefault()
- Le indica al navegador que no tiene la intención de evitar el comportamiento predeterminado del evento, y es probable que vea una advertencia del navegador si lo hace.

```html
<template>
  <div style=" height: 500px; background: red" @click.passive="hicisteClick('1 nivel' , $event)">
    <div style="height: 450px; background: blue;position:relative;top:20px;width:80%;margin:auto" @click="hicisteClick('2 nivel' , $event)">
     
    </div>
  </div>
</template>

<script setup>

      const hicisteClick = (mensaje , evento) => {
         evento.preventDefault();
           alert(mensaje);
      }
</script>

```
#### [mas info](https://v2.vuejs.org/v2/guide/events.html)

## App.use()

- Instala un complemento
- Espera el complemento a instalar como primer argumento y las opciones del complemento en el segundo argumento.
- El complemento puede ser un objeto con un  método install() o simplemente una función que se usará como método  install(). Las opciones (segundo argumento de app.use()) se pasarán al método install() del complemento.

Ejemplo:

```js
import { createApp } from 'vue'
import MyPlugin from './plugins/MyPlugin'

const app = createApp({
  /* ... */
})

app.use(MyPlugin)

```
Otro ejemplo:

```js
createApp(App).use(router).use(createPinia()).mount('#app')
```

:::tip Observacion
- Primero se crea la aplicación.
- Con la aplicación creada se instala los complementos 
- Y luego se monta la aplicación.
:::

:::tip 
- Cada documentacion te dira como acceder al complemento.
- Puede ser a través del this si se utiliza la OPTION API o con otro mecanismo.
:::

:::tip 
- Podes modificar los  complementos que utiliza la app en situaciones especificas.
- Ej. El objeto(complemento) axios puede tener un valor predeterminado en la cabecera o no, eso depende si existe el token.
- Esto sucede porque al refrescar la página, vuelve a montarse la aplicación (vuelve a ejecutarse el main.js)
:::
## Provide / Inject

#### Problema frecuente:
-	Tengo un componente padre con propiedad nombre.
-	Tengo un componente hijo, que no quiere saber el nombre de su padre.
-	Tengo un componente nieto, que necesita saber el nombre de su abuelo.

#### Solucion:

- Con el Provide/Inject solucionamos este problema!
- Entonces logramos que:
  -	Un componente puede proveer de algo (un valor, un objeto o una función).
  -	Cualquier componente hijo, nieto, etc puede inyectar (leer) ese algo.

#### Ventajas
-	Centralización de las instancias a usar por los componentes.
-	Inversión de control.
-	Facilita el testing de componentes.

#### Desventajas
-	No es reactivo*.
-	Puede ocultar el origen de los elementos inyectados.
-	No sigue el estándar prop/event de Vue.

#### Ventajas:

- Su uso está recomendado para la creación de librerías de componentes o plugins.
- Con el par provide y inject, los componentes principales pueden enviar datos a sus componentes secundarios, independientemente de la profundidad de la jerarquía de componentes. El componente principal tiene una función provide para proporcionar datos y el componente secundario tiene una  función inject para comenzar a usar estos datos.

###  Provide
- Es una función que usamos para definir los datos que queremos que se transmitan a un componente secundario.
- La función provide acepta dos parámetros:
1.	El nombre de la propiedad (un String)
2.	El valor de la propiedad (un String o un objeto que contiene varios valores)

Componente Padre (APP)
```html
<template>
  <h1>Componte Padre (App)</h1>
  <hr>
  <ComponenteHijo></ComponenteHijo>
</template>

<script setup>
import ComponenteHijo from './components/ComponenteHijo'
import { provide } from 'vue';

provide('location', 'Argentina')
    provide('geolocation', {
      Longitud: 110,
      Latitud: 27
    })
      
</script>

```
:::tip Observacion 
El componente Padre se volvió un componente proveedor
:::
### Inject
- Es una función que usamos para recibir datos de nuestro componente proveedor.
- La función inject toma dos parámetros:
1.	El nombre de la propiedad que se está inyectando (exportando /sacando del proveedor)
2.	Un valor predeterminado opcional

Componente hijo
```html
<template>
    {{location}} 
    {{geolocation}}
</template>

<script setup>
    import {inject} from 'vue';
    const location = inject('location' , 'universe');
    const geolocation = inject('geolocation');
</script>

```
:::tip Observacion
- Sacamos las propiedades location y geolocation del componente padre
- Dichas propiedades se crearon con el método provide()
:::

###  Hacer que el par provide/inject sea reactivo

- El par provide/ inject no es reactivo. Afortunadamente, hay una manera de hacer que esto suceda utilizando la función ref o reactive proporcionada por la API de Vue.


Componente Padre:
```html
<template>
  <h1>Componte Padre (App)</h1>
  <hr>
  <ComponenteHijo></ComponenteHijo>
</template>

<script setup>
import ComponenteHijo from './components/ComponenteHijo'
import { provide , ref , reactive } from 'vue';

const location = ref('Argentina');
const geolocation = reactive({
      longitud: 110,
      latitud: 27
    })
provide('location', location)

    provide('geolocation', geolocation )
      
</script>

```

Componente Hijo:

```html
<template>
    {{location}} 
    {{geolocation}}
</template>

<script setup>
    import {inject} from 'vue';
    const location = inject('location' , {});
    const geolocation = inject('geolocation');

    setTimeout(()=> {
      location.value = "Paris"
      geolocation.longitud =   geolocation.longitud + 100;
    } , 3000)
</script>

```
### Cuándo usar el par de funciones provide/inject

-	Si la aplicación tiene un estado bastante simple y usar Vuex sería excesivo
-	Si su aplicación tiene demasiados niveles de componentes y los componentes intermedios no utilizan los datos antes de pasarlos al componente deseado
-	Si los datos solo son utilizados por unos pocos componentes. Pero si los datos serán utilizados por muchos más componentes, Vuex sería una mejor solución.

### OPTIONS API

- Provide es una propiedad que contiene una función que retorna las propiedades que va a compartir con el resto.

```js
    provide: function() {
    return {
        getError: this.getError,
      setError: this.setError
    }
  }

```
- Inject es una propiedad que recibe una array con los nombres de las propiedades que va a utilizar del componente proveedor

```js
inject: ['getError', 'setError'],
```

- Se trata como una propiedad mas
- Se accede con el this en el script y sin el this en el template.
