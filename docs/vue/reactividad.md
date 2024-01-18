---
sidebar_position: 4
---
# Reactividad vue 3

## ref()
- Las variables de la composition API (ya sea con el hook setup() o el &lt;script setup>) que utilizamos en el &lt;template> No tienen reactividad.
- Si Alguna variable cambia , no se vuelve a renderizar el componente (SOLO LA PARTE AFECTADA)
- Los cambios que se realice a la variable no se aplica en el &lt;template>
```html
<template>
  <p>Nombre del evento:  {{nombreDelEvento}}</p>
  <p>Capacidad:    {{capacidad}}</p>
</template>

<script setup>
   
   let nombreDelEvento = "La fiesta de pepito";
   let capacidad = 10;

  
setTimeout(() => {
   nombreDelEvento = "party Pool";
   alert('Se cambio');
} , 2000)

</script>

```
:::tip Observacion 
- Cuando se cambia el valor de la variable nombreDelEvento , no se refleja en el &lt;template>
- No se vuelve a renderizar la parte afectada
- No hay reactividad
:::
### ref()
- Convierte un valor primitivo en reactivo.
- El método ref() recibe un valor primitivo.
- En los valores reactivos, se aplica la reactividad. (Vuelve a renderizarse la parte afectada en el &lt;template>)
- Los valores reactivos son “objetos”
```html
<template>
  <p>Nombre del evento:  {{nombreDelEvento}}</p>
  <p>Capacidad:    {{capacidad}}</p>
</template>

<script setup>
   import {ref} from 'vue';
   //ref(valorprimitivo)
let nombreDelEvento = ref("La fiesta de pepito");
   let capacidad = ref(10);
   console.log(nombreDelEvento);

  
setTimeout(() => {
   nombreDelEvento = "party Pool";
   console.log(nombreDelEvento);
} , 2000)

</script>


```
:::warning Observacion 
- Un valor reactivo es un objeto.
- En el setTimeOut la variable vuelve a ser un dato primitivo ya que se pierde el objeto.
:::

#### Solucion
- Para cambiar el valor del “objeto” reactivo, se utiliza la propiedad value del mismo.
- La propiedad value contiene el  valor primitivo que ahora es reactivo.
```html
<script setup>
   import {ref} from 'vue';
   //ref(valorprimitivo)
let nombreDelEvento = ref("La fiesta de pepito");
   let capacidad = ref(10);
  

  
setTimeout(() => {
   nombreDelEvento.value = "party Pool";

} , 2000)

</script>

```
:::tip Observacion
- Cuando el valor de la variable cambia, se vuelve a renderizar el &lt;template> (LA PARTE AFECTADA). Esto sucede porque ahora hay reactividad ya que el dato es reactivo.
- Si un dato reactivo sufre un cambio, se vuelve a renderizar la parte del &lt;template> que contenga este valor.
:::
#### No se usa la propiedad value en el &lt;template>
```html
<template>
  <p>Nombre del evento:  {{nombreDelEvento}}</p>
  
</template>

```
- Vue de forma automática muestra la propiedad value del dato reactivo en el &lt;template>
- Vue siempre va a mostrar el valor de la propiedad value

## reactive()
- Nos permite crear un objeto con valores reactivos.
- Cumpel la misma función que ref() pero con objetos.
- El método reactive() recibe un objeto.
```html
<template>
  <p>Nombre del evento:  {{data.nombreDelEvento}}</p>
  <p>Capacidad {{data.capacidad}}</p>
  <p>Invitados {{data.invitados}}</p>
  
</template>

<script setup>
import { reactive } from 'vue';
  //reactive(objeto)
const data = reactive( {
   nombreDelEvento :  "La fiesta de pepito" ,
   capacidad : 10 ,
   invitados : ['Clara' , 'Pablo' , 'Carlitos' , 'Jorge']
});
setTimeout(() => {
    data.nombre = "La fiesta"
    data.capacidad = 12;
    data.invitados.push('Pedro');
} , 2000)
</script>

```
:::tip Observacion 
- A diferencia de ref() , NO UTILIZAMOS LA PROPIEDAD VALUE
- Cuando algún valor del objeto cambie, se vuelve a renderizar el &lt;template> (LA PARTE AFECTADA). Esto sucede porque ahora hay reactividad ya que el  objeto es reactivo.
- Si un dato reactivo sufre un cambio, se vuelve a renderizar la parte del &lt;template> que contenga este valor.
:::

### Ref VS Reactive 
Ambos crean valores reactivos
#### Diferencias 
#### Son objetos diferentes
```html
<script setup>
import { reactive, ref } from "vue";
let nombre = ref("Fiesta reactiva");
const data = reactive({
  nombreDelEvento: "La fiesta de pepito",
  capacidad: 10,
  invitados: ["Clara", "Pablo", "Carlitos", "Jorge"],
});
console.log("Ref" , nombre);
console.log("Reactive" , data);
</script>
```

#### Reactive tiene un objeto reactivo y Ref un valor primitivo reactivo.
- Ref:
  - Solo tiene un valor reactivo
  - Si a una variable se le asigna el valor reactivo (el objeto, no la propiedad value ) , tiene reactividad la variable.
- Reactive:
  - El objeto es reactivo, el TODO.
  - Si a una variable se le asigna una propiedad del objeto reactivo, no tiene reactividad la variable ya que el OBJETO es reactivo , NO LA PROPIEDAD.

Demostracion:
```html
<template>
  <p>Nombre del evento (Ref) {{ nombreEventoRef }} </p>
  <hr />
  <p>Nombre del evento (Reactive): {{ nombreEventoReactive }}</p>
</template>

<script setup>
import { reactive, ref } from "vue";
let nombre = ref("Fiesta reactiva");
const data = reactive({
  nombreDelEvento: "La fiesta de pepito",
  capacidad: 10,
  invitados: ["Clara", "Pablo", "Carlitos", "Jorge"],
});
var nombreEventoReactive = data.nombreDelEvento;
var nombreEventoRef = nombre

setTimeout(()=> {
nombre.value = "Otro evento";
nombreEventoRef = "Otro evento";
 data.nombreDelEvento = "Otro evento";
console.log("Ref" , nombre);
console.log("Reactive" , data);
} , 2000)

</script>

```
:::tip Observacion 
- La variable nombreEventoReactive no tiene reactividad
- La variable nombreEventoRef tiene reactividad
:::

## toRefs()

- Convierte un objeto reactivo en un simple objeto donde cada propiedad del objeto resultante es una ref que apunta a la propiedad correspondiente del objeto reactivo. Cada referencia(ref) individual se crea usando toRef() 
- Nos permite pasar propiedades del objeto reactivo a variables sin perder la reactividad.
```html
<template>
  <p>Nombre del evento (Reactive): {{nombreEvento}} </p>
</template>

<script setup>
import { reactive ,  toRefs} from "vue";
const data = reactive({
  nombreDelEvento: "La fiesta de pepito",
  capacidad: 10,
  invitados: ["Clara", "Pablo", "Carlitos", "Jorge"],
});
// Sirve para extraer una propiedad de un objeto reactivo 
// Dicha propiedad seguira siendo reactivo.
// ...toRefs(objeto);
// Devuelve un objeto donde cada propiedad es una ref cuyo valor primitivo es el valor de cada propiedad del objeto reactivo.
// Convierte todas las propiedades del objeto reactivo en ref.
var variable = {...toRefs(data)}
var nombreEvento = variable.nombreDelEvento;
console.log(variable);
setTimeout(()=> {
 data.nombreDelEvento = "Otro evento";
} , 2000)

</script>

```
:::tip Observacion
nombreEvento contiene una propiedad de un objeto reactivo pero esta vez contiene la reactividad.
:::
####  Le podés quitar el operador spread 
```html
<script setup>
import { reactive ,  toRefs} from "vue";
const data = reactive({
  nombreDelEvento: "La fiesta de pepito",
  capacidad: 10,
  invitados: ["Clara", "Pablo", "Carlitos", "Jorge"],
});
// Sirve para extraer una propiedad de un objeto reactivo 
// Dicha propiedad seguira siendo reactivo.
// ...toRefs(objeto);
// Devuelve un objeto donde cada propiedad es una ref cuyo valor primitivo es el valor de cada propiedad del objeto reactivo.
// Convierte todas las propiedades del objeto reactivo en ref.
var variable = toRefs(data);
var nombreEvento = variable.nombreDelEvento;
console.log(variable);
setTimeout(()=> {
 data.nombreDelEvento = "Otro evento";
} , 2000)

</script>

```
## toRef()
- Crea una ref de una propiedad de un objeto reactivo . La ref creada se sincroniza con  la propiedad del objeto : mutar la propiedad actualizará la  ref y viceversa.
```html

<template>
  <p>Nombre del evento (Reactive): {{nombreEvento}} </p>
</template>

<script setup>
import { reactive ,  toRef} from "vue";
const data = reactive({
  nombreDelEvento: "La fiesta de pepito",
  capacidad: 10,
  invitados: ["Clara", "Pablo", "Carlitos", "Jorge"],
});
// toRef (objeto reactivo , 'nombrepropiedad');
// Convierte el nombrepropiedad del objeto reactivo en un ref.
var nombreEvento = toRef(data , 'nombreDelEvento');
console.log(nombreEvento);
setTimeout(()=> {
 data.nombreDelEvento = "Otro evento";
} , 2000)

</script>

```
:::tip Observacion
Se creo un ref de la propiedad nombreDelEvento del objeto reactivo data.
Seria parecido a ref(data.nombreDelEvento)
:::
## readonly()
- Mientras que ref y reactive convierten una variable en reactiva, readonly convierte una variable (normal o reactiva) en una versión inmutable que no se podrá variar. Al igual que las anteriores (y a diferencia de las versiones shallow), afectará a todos sus hijos.
```html
<template>
  <p>{{copy}} </p>
</template>

<script setup>
import { reactive, readonly  } from "vue";
const data = reactive({
  nombreDelEvento: "La fiesta de pepito",
  capacidad: 10,
  invitados: ["Clara", "Pablo", "Carlitos", "Jorge"],
});
const copy = readonly(data);
console.log(copy);
// var nombreEvento = toRef(data , 'nombreDelEvento');
setTimeout(()=> {
     copy.nombreDelEvento = "otro Evento";
} , 2000)

</script>

```
:::tip Observacion
No me deja cambiar una propiedad del objeto copy ya que es inmutable.
:::
##  isRef()
- Comprueba si una variable es una referencia reactiva a un dato primitivo.
- Devuelve true si es una ref.
```html

<script setup>
import { isRef, reactive, toRef  } from "vue";
const data = reactive({
  nombreDelEvento: "La fiesta de pepito",
  capacidad: 10,
  invitados: ["Clara", "Pablo", "Carlitos", "Jorge"],
});
var nombreEvento = toRef(data , 'nombreDelEvento');
setTimeout(()=> {
  //  Devuelve true porque nombreEvento es una ref (referencia reactiva)
    console.log(isRef(nombreEvento));
    // Devuelve false porque data es reactive (objeto reactivo)
     console.log(isRef(data));

} , 2000)

</script>

```
## isReactive()
- Comprueba si una variable es un objeto reactivo.
- Devuelve true si es reactive.
```html
<script setup>
import { isReactive,  reactive, toRef  } from "vue";
const data = reactive({
  nombreDelEvento: "La fiesta de pepito",
  capacidad: 10,
  invitados: ["Clara", "Pablo", "Carlitos", "Jorge"],
});
var nombreEvento = toRef(data , 'nombreDelEvento');
setTimeout(()=> {
  //  Devuelve false porque nombreEvento es una ref (referencia reactiva)
    console.log(isReactive(nombreEvento));
    // Devuelve true porque data es un reactive (objeto reactivo)
     console.log(isReactive(data));

} , 2000)

</script>

```
## isReadonly()
- Comprueba si un objeto es un proxy creado por readonly() o shallowReadonly().
- Devuelve true si es creado por readonly() o shallowReadOnly().
```html
<template>
  <p>{{copy}} </p>
</template>

<script setup>
import { reactive, readonly , isReadonly } from "vue";
const data = reactive({
  nombreDelEvento: "La fiesta de pepito",
  capacidad: 10,
  invitados: ["Clara", "Pablo", "Carlitos", "Jorge"],
});
const copy = readonly(data);
console.log(copy);
setTimeout(()=> {
     copy.nombreDelEvento = "otro Evento";
     // Devuelve true porque fue creado por readonly
     console.log(isReadonly(copy));   
       // Devuelve false porque NO  fue creado por readonly
     console.log(isReadonly(data));
} , 2000)

</script>
```
##  isProxy()
- Comprueba si una variable es un proxy creado por reactive o readonly.
- Comprueba si un objeto es de tipo proxy creado por reactive(), readonly() ,  shallowReactive() , shallowReadonly()
```html
<script setup>
import {   reactive, toRef , isProxy  } from "vue";
const data = reactive({
  nombreDelEvento: "La fiesta de pepito",
  capacidad: 10,
  invitados: ["Clara", "Pablo", "Carlitos", "Jorge"],
});
var nombreEvento = toRef(data , 'nombreDelEvento');
setTimeout(()=> {
  //  Devuelve false  , esta creado por ref
    console.log(isProxy(nombreEvento));
    // Devuelve true , esta creado por reactive
     console.log(isProxy(data));

} , 2000)

</script>

```
## shallowRef()
- Es una version ligera de ref()
- Sólo la propiedad value es reactiva.
- Solo observa los cambios en las claves(índices) de matriz(array) o los cambios de valor directo (propiedad value). No mira, por ejemplo, en el interior de los campos de objetos. 
- shallowRef()se utiliza normalmente para optimizaciones de rendimiento de grandes estructuras de datos o integración con sistemas de gestión de estado externos.
```html
<template>
  <p> {{data.count}}</p>
</template>

<script setup>

import {  shallowRef   } from "vue";

  const data = shallowRef({count : 1});
  
setTimeout(()=> {
       //No se vuelve a renderizar // No es reactivo
       data.value.count = 2;
       /// Se vuelve a renderizar / Es reactivo
       data.value = {count : 2};

} , 2000)

</script>

```
## shallowReadonly()
- Es una version ligera de readonly()
- solo las propiedades de nivel raíz se hacen de solo lectura
- Las propiedades dentro de otras propiedas (profundas) se pueden editar.
```html
<template>
  <p>{{ data }}</p>
</template>

<script setup>
import { isReactive, shallowReadonly } from "vue";

const data = shallowReadonly({
  // Propiedades nivel raíz
  propiedad1: 1,
  propiedad2: {
    // Propiedades profundas
    id: 2,
  },
});

setTimeout(() => {
  // No se puede editar porque es una propiedad de primer nivel 
  // No se puede editar porque es una propiedad de nivel raíz
  data.propiedad1++;
  // False -- No es un objeto reactive
  console.log(isReactive(data.propiedad2));
  // Se modifica pero no es reactive (No se vuelve a renderizar)
  data.propiedad2.id++;
  console.log(data);
}, 2000);

</script>

```
## shallowReactive()
- Es una versión ligera de reactive()
- A diferencia de reactive() , solo las propiedades de nivel raíz son reactivas
- Las propiedades dentro de otras propiedades(profundas) no son reactivas
```html
<template>
  <p>{{ data }}</p>
</template>

<script setup>
import { isReactive, shallowReactive } from "vue";

const data = shallowReactive({
  // Propiedades nivel raíz
  propiedad1: 1,
  propiedad2: {
    // Propiedades profundas
    id: 2,
  },
});

setTimeout(() => {
  // Es reactivo (se vuelve a renderizar) porque es una propiedad de primer nivel
  // Es reactivo (se vuelve a renderizar) porque es una propiedad de nivel raiz
  data.propiedad1++;
  // False -- No es un objeto reactive
  console.log(isReactive(data.propiedad2));
  
}, 2000);
setTimeout(() => {
  // Se modifica pero no es reactive (No se vuelve a renderizar)
  data.propiedad2.id++;
  console.log(data);
}, 3000);
</script>

```
:::warning Comportamiento no esperado

- Si modifica una propiedad de primer nivel y una profunda en la misma función, se renderizan ambos cambios.
- Cuando modifica algo anidado dentro de un shallowReactive , no significa que la mutación no se realice . Solo significa que no se le dice a Vue: debe verificar las diferencias entre M (modelo) y V (vista / plantilla / DOM) ahora .
- A la diferenciación no le importa lo que sea reactivo. Solo busca diferencias entre M y V. Si encuentra alguna, las actualiza.
- [Link](https://stackoverflow.com/questions/73034245/why-does-shallowreactive-not-work-as-expected) 



:::