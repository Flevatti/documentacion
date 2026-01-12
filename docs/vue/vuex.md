---
sidebar_position: 5
---
# Vuex


- Vuex es un patrón de gestión de estado + biblioteca para aplicaciones Vue.js. Sirve como un almacén centralizado para todos los componentes de una aplicación, con reglas que garantizan que el estado solo se puede modificar de forma predecible.
- Es un almacén para guardar datos de forma global.
- Los datos son accesibles en todos los componentes.
- [documentación](https://vuex.vuejs.org/)
- [Guia de como crear un almacen](vue2#vuex)
#### API de composición
- Para acceder a la tienda dentro del setup puede llamar a la función useStore(). Este es el equivalente a recuperar el this.$store dentro de un componente utilizando la API de opciones.
- [Ejemplos](https://vuex.vuejs.org/guide/composition-api.html#accessing-mutations-and-actions)
#### Instalacion 
```powershell
npm install vuex@next --save
```
## Estado (State)
- Vuex utiliza un único árbol de estado , es decir, este único objeto contiene todo el estado de su aplicación y sirve como la "única fuente de verdad"
- Por lo general, solo tendrá una tienda/almacen para cada aplicación.
- El Estado es el almacen/tienda
- El estado se crea de la misma forma que data() en API OPTIONS.

:::tip Sintaxis
```js
 state() {
   return {objeto}
}

```
:::
- El Objeto se guardará en el almacen y todos los componentes de la aplicación tendrán acceso a este objeto.

#### Ejemplo 
tienda
```js

import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    // estado
  state () {
    return {
      contador: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

export default store;


```
Componente que utiliza el almacen
```html
<template>
  <h1>Vuex</h1>
  {{store.state.contador}}
</template>

<script setup>
  
import { useStore } from 'vuex'
    const store = useStore()
</script>

```
:::tip Observacion
Los datos almacenados en el almacen/tienda lo tiene la propiedad State del objeto store ($store).
:::

### Obtener el estado de Vuex en los componentes de Vue
- Los datos del almacen/tienda son reactivos , pero también puede recuperar información del estado en una propiedad calculada.

Componente:
```html
<template>
  <h1>Vuex</h1>
  {{contador}}
  <button @click="store.state.contador++"> Click</button>
</template>

<script setup>
  
import { useStore } from 'vuex'
import { computed } from 'vue';
    const store = useStore()
    const contador = computed(() => {
        return  store.state.contador;
      });
</script>

```
### mapState
- Es una herramienta vuex que te permite crear varias propiedades calculadas de una forma fácil a partir del estado.
- Fue creada para la API OPTIONS
  
:::tip Pero hay otras formas de realizar lo mismo en VUE 3
- [Como usar mapGetter en Vue3](https://stackoverflow.com/questions/64010072/how-to-use-vuex-mapgetters-with-vue-3-sfc-script-setup-syntax)
- [Usar los "helpers" en el Composition API](https://learnvue.co/tutorials/vuex-in-vue-3#using-vuex-helpers-in-the-composition-api)
- [Todos los "helpers" en Composition API](https://medium.com/geekculture/mapgetters-with-vue3-vuex4-and-script-setup-5827f83930b4)
- [los getters de Vuex son geniales, pero no los utilices en exceso](https://mrando-via.medium.com/los-getters-de-vuex-son-geniales-pero-no-los-utilices-en-exceso-1f2e81ce638)
- [mejores practicas](https://blog.logrocket.com/best-practices-mapping-vuex/)
:::

### [Mas info](https://vuex.vuejs.org/guide/state.html)

## Getters (Captadores)
- A veces, es posible que necesitemos hacer un cálculo en función del estado de la tienda, por ejemplo, filtrando una lista de elementos y contándolos:
- Vuex nos permite definir "getters" en la tienda. Puede pensar en ellos como propiedades calculadas para tiendas.
- Los getters recibirán el estado como su primer argumento

:::tip Sintaxis
```js
getters : {
  nombrefuncion(estado) {
    return valor
} ,  
  nombrefuncion(estado) {
    return valor
} , 
}

```

:::
- Son funciones que devuelve un valor (getter).

#### Ejemplo
tienda
```js
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    // estado
  state () {
    return {
      numero1: 10 ,
     numero2 : 30
    }
  },
   getters : {
      suma (state) {
        return state.numero1 + state.numero2
      }
   }
})

export default store;

```
Componente
```html
<template>
  <h1>Vuex</h1>
  {{store.getters.suma}}

</template>

<script setup>
  
import { useStore  } from 'vuex'

    const store = useStore()
  
    
      
  
</script>

```
:::tip Observacion
- Los getters  del almacen/tienda lo contiene la propiedad  getters del objeto store ($store).
- Como las propiedades computadas, se tratan como variables (con el nombre de la función) y no como funciones
:::
### mapGetters
- Es una herramienta vuex que te permite crear varias propiedades calculadas de una forma fácil a partir de los getters
- [mapGetters Helper](https://vuex.vuejs.org/guide/getters.html#the-mapgetters-helper)
- [Entendiendo mapGetters](https://tenmilesquare.com/resources/software-development/understanding-mapgetters-in-vuex/)
### [Mas info](https://vuex.vuejs.org/guide/getters.html)
## Mutaciones(Mutations)
- La única forma de cambiar de estado en una tienda Vuex es cometiendo una mutación
- Las mutaciones cambian el estado de la tienda
- Son muy similares a los eventos: cada mutación tiene un tipo y un controlador
- El controlador se encarga de realizar las modificaciones del estado y su primer argumento es justamente el estado.

:::tip Sintaxis
```js
mutations: {

Nombrefuncion (estado) {
    Modificación del estado

} , 
Nombrefuncion (estado) {
    Modificación del estado
} , 
}

```


:::
- El Nombrefuncion es el “tipo de mutacion” 
- Esta parte del código: ``"(estado) {Modificación del estado}"`` es el controlador.

#### Ejemplo
tienda
```js

import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    // estado
  state () {
    return {
      contador : 1
    }
  },
   mutations : {
    incrementador (estado) {
        estado.contador ++;
    }
   }
})

export default store;

```
Componente 

- Invocamos el método(mutacion) con la función commit que viene del objeto  store ($store).
- El método commit recibe el tipo(nombre de la función) de mutacion.
- El método commit ejecuta la función que corresponde al tipo de mutacion que se le paso.

```html
<template>
  <h1>Vuex</h1>
  {{store.state.contador}}
<button @click="store.commit('incrementador')">Sumar 1</button>
</template>

<script setup>
  
import { useStore  } from 'vuex'

    const store = useStore()
  
    
      
  
</script>

```
:::tip Observacion 
- Al hacer click en el botton, se ejecuta el controlador de tipo de mutación “incrementador”.
- Se ejecuta la función(mutación) cuyo nombre es “incrementador”.
:::

### Argumento adicional
- Puede pasar un argumento adicional a store.commit, que se denomina carga útil para la mutación.
- El controlador puede tener un segundo parámetro , que representa el valor que se pasa en el segundo argumento de commit()
:::tip controlador
  ```js
(estado , cargaUtil) {    }
  ```
:::

tienda
```js
   mutations : {
    incrementador (estado , cargaUtil) {
        estado.contador += cargaUtil
    }
   }

```
componente
```html
<button @click="store.commit('incrementador' , 50)">Sumar 1</button>
```
:::tip Observacion 
- Al hacer click , se ejecuta la función(mutacion) “incrementador”.
- El valor de cargaUtil es 50.
- El valor de cargaUtil es el que se pasa como segundo parámetro a commit()
:::

### 2 Forma 
Tienda 
```js
   mutations : {
    incrementador (estado , cargaUtil) {
        estado.contador += cargaUtil.cantidad
    }
   }

```
:::tip Observacion
cargaUtil es un objeto ahora.
:::

Componente
```html
<button @click="store.commit({
  type:'incrementador' ,
  cantidad : 50
})">Sumar 1</button>

```
:::tip Observacion 
- El metodo commit() puede aceptar un objeto.
- Este objeto debe tener la propiedad type cuyo valor es el tipo de mutacion(nombre de función) que se va a invocar/ejecutar.
- El resto de propiedades que tiene el objeto, se vuelven propiedades de cargaUtil.
- Por lo tanto , en este ejemplo cargaUtil.cantidad es 50.
:::

:::warning
Las mutaciones deben ser sincrónicas, NO DEBEN USAR EL ASYNC AWAIT.
:::

### mapMutations
- Es una herramienta de Vuex para crear métodos de todas las mutaciones o algunos del almacen/tienda.
- [info](https://learnvue.co/tutorials/vuex-in-vue-3#mapping-vuex-mutations---options-api)


### [Mas info]( https://vuex.vuejs.org/guide/mutations.html)


## Actions (Comportamiento)

- Las acciones son similares a las mutaciones, las diferencias son que:
  - En lugar de mutar el estado, las acciones cometen mutaciones.
  - Las acciones pueden contener operaciones asincrónicas  (pueden usar el async await)

:::tip Sintaxis
```js
actions: {

Nombrefuncion (context) {
    commit()

} , 
Nombrefuncion (context) {
    commit()
} , 
}

```
:::
- Los controladores en lugar de recibir el estado, reciben un objeto que tiene un conjunto de métodos/propiedades del objeto store ($store).
- Los controladores de acciones reciben un objeto  "contexto" que expone el mismo conjunto de métodos/propiedades que contiene la  instancia de la tienda , por lo que podemos usar commit() , state , getters , dispatch() , etc.
- En lugar de usar commit() , para invocar una acción se utiliza dispatch() cuyo parámetro es un String con el tipo de acción (nombre función) que se ejecutara.

#### Ejemplo
Tienda
```js
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    // estado
  state () {
    return {
      contador : 1
    }
  },
   mutations : {
    incrementador (estado , cargaUtil) {
        estado.contador += cargaUtil.cantidad
    }
   } ,
   actions : {
       incrementador(context) {
          context.commit('incrementador' , {
            cantidad : 50
          });
       }
   }
})

export default store;

```
Componente
```html
<template>
  <h1>Vuex</h1>
  {{store.state.contador}}
<button @click="store.dispatch('incrementador')">Sumar 1</button>
</template>

<script setup>
  
import { useStore  } from 'vuex'

    const store = useStore()
  
    
      
  
</script>

```
:::tip Observacion
- El componente ejecuta la acción de tipo “incrementador” al hacer click en el boton .
- El componente ejecuta una acción al hacer click en el boton, cuya función se llama “incrementador”.
- La acción ejecuta un commit() , invocando a la mutacion de tipo “incrementador”.


:::

:::warning 
- Las mutaciones son sincrónicas
- Las acciones pueden ser asíncronas.
:::

### Segundo parametro

- los controladores de acciones pueden tener un segundo parámetro al igual que las mutaciones (mismo comportamiento)
  
Tienda
```js
   actions : {
       incrementador(context , cargaUtil) {
          context.commit('incrementador' , {
            cantidad : cargaUtil.cantidad
          });
       }
   }

```
Componente
```html
<button @click="store.dispatch('incrementador' , {
  cantidad : 50
})">Sumar 1</button>

```
:::tip Observacion
- cargaUtil funciona igual que con las mutaciones.
- En este ejemplo cargaUtil es un objeto con la propiedad cantidad.
:::


####  Dispatch() también acepta un objeto como parámetro.
```html
<button @click="store.dispatch({
  type:'incrementador' ,
cantidad : 50
})">Sumar 1</button>
```
:::tip Observacion
- Tiene el mismo comportamiento que con las mutaciones.
- Se ejecuta el tipo de acción “incrementador” y cargaUtil tiene la propiedad cantidad.

:::

:::tip 
- Una acción se suele utilizar para llamar a una API asíncrona y cometer múltiples mutaciones.
:::

:::warning
Las mutaciones deben ser sincrónicas, NO DEBEN USAR EL ASYNC AWAIT.
:::

### mapActions
- Es una herramienta de Vuex para crear métodos de todas las  acciones o algunas del almacen/tienda.
- [info](https://learnvue.co/tutorials/vuex-in-vue-3#mapping-vuex-mutations---options-api)

### Promesas
- ¿cómo sabemos cuándo se realiza una acción? 
- ¿cómo podemos componer varias acciones juntas para manejar flujos asíncronos más complejos?
- store.dispatch puede manejar promesas retornadas por el controlador de acción.
- Store.dispatch puede devolver promesas 

#### Ejemplo 1

Tienda
```js
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    // estado
  state () {
    return {
      contador : 0
    }
  },
   mutations : {
    incrementador (estado ) {
        estado.contador += 50
    }
   } ,
   actions : {
       incrementador ({ commit }) {
        // el reject es opcional
        return new Promise((resolve ) => {
          setTimeout(() => {
            commit('incrementador')
            resolve()
          }, 1000)
        })
      }
   }

})

export default store;

```
Componente
```html
<template>
  <h1>Vuex</h1>
  {{store.state.contador}}
<button @click="hicisteClick">Sumar 50</button>
</template>

<script setup>
  
import { useStore  } from 'vuex'

    const store = useStore()
  
    const hicisteClick = () => {
      store.dispatch({
  type:'incrementador' 
})
.then( () => {
  alert('Se aumento ');
})
    }
      
  
</script>

```
#### Ejemplo 2 

Tienda
```js
import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  // estado
  state() {
    return {
      contador: 0,
    };
  },
  mutations: {
    incrementador(estado) {
      estado.contador += 50;
    },
  },
  actions: {
    incrementador({ commit }) {
      // el reject es opcional
      return new Promise((resolve) => {
        setTimeout(() => {
          commit("incrementador");
          resolve('Se sumo');
        }, 1000);
      });
    },
    incrementador100({ dispatch, commit }) {
        return dispatch("incrementador").then(() => {
          commit("incrementador");
          alert('Se incremento en 100')
        });
      },
  },

});

export default store;

```
Componente
```html
<template>
  <h1>Vuex</h1>
  {{ store.state.contador }}
  <button @click="hicisteClick">Sumar 100</button>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();

const hicisteClick = () => {
   store.dispatch({
    type: "incrementador100",
  }).then(() => {
    alert("Se incremento por 100  , se ejecuta a lo ultimo")
  })
  
};
</script>

```
:::tip Observacion
- Incrementador100 devuelve una promesa pendiente (todavia no se completó).
- La promesa primero la trata el controlador y luego el componente.
:::
#### Ejemplo 3

Tienda 
```js
  actions: {
    incrementador({ commit }) {
      // el reject es opcional
      return new Promise((resolve) => {
        setTimeout(() => {
          commit("incrementador");
          resolve('Se sumo');
        }, 1000);
      });
    },
    async incrementador100({ dispatch, commit }) {
        await dispatch("incrementador")
        commit("incrementador");
        alert("Se aumento en 100");
    
      },
  },

```

### [Mas info](https://vuex.vuejs.org/guide/actions.html)

## Módulos

- Debido al uso de un solo árbol de estado, todos los estados de nuestra aplicación están contenidos dentro de un gran objeto. Sin embargo, a medida que nuestra aplicación crece en escala, la tienda puede volverse realmente inflada.
- Para ayudar con eso, Vuex nos permite dividir nuestra tienda en módulos . Cada módulo puede contener su propio estado, mutaciones, acciones, captadores e incluso módulos.
- Básicamente, una tienda puede tener mas almacenes que en realidad serian módulos.

:::tip Sintaxis
```js
modules: {
   Nombre: modulo ,
  Nombre: modulo
}

```
:::
- El nombre va a hacer referencia al modulo
- modulo es un objeto , no se crea con el metodo createStore()
  

#### Ejemplo:

tienda
```js
import { createStore } from "vuex";

const almacenA = {
  state: () => (
     {
        dato : 'dato del almacen A'
    }
  ),

}

const almacenB = {
  state: () => (
    {
       dato : 'dato del almacen B'
   }
 ),
}

const store = createStore({
  modules: {
    a: almacenA,
    b: almacenB
  }
})
export default store;

```
:::tip Observacion
- El almacenA y el almacenB no se definen con el createStore , simplemente son un objeto con las propiedades State , mutations , actions , etc.
-  Los modulos son objetos
- El almacen de la aplicación es un solo árbol de estado.
- Este almacen tiene dos “almacenes/store” más, el a y el b.
:::

Componente 

```html
<template>
  <h1>Vuex</h1>
  <!-- store.state.nombre -->
  {{ store.state.a.dato }}
  {{ store.state.b.dato }}
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();

</script>

```
:::tip Observacion
- La propiedad State contiene la propiedad “a” que contiene el State del almacenA
- La propiedad State contiene la propiedad “b” que contiene el State del almacenB
- Por lo tanto los nombre que referencian a un almacen son propiedades de la propiedad State , los cuales contienen los datos(State) de estos.
:::


### Estado local del módulo
- Dentro de las mutaciones y getters de un modulo , el primer argumento será el estado local del modulo.
  
Tienda
```js
import { createStore } from "vuex";

const almacenA = {
  state: () => (
     {
        contador : 0
    }
  ),
  mutations:{
           incrementador(estado) {
            //  estado = estado local del módulo
            console.log(estado);
            estado.contador++;
           }
  } ,
  getters: {
       multiplicador(estado) {
        //  estado = estado local del módulo
        console.log(estado);
        return estado.contador * 100;
       }
  }

}


const store = createStore({
  modules: {
    a: almacenA
  }
})
export default store;

```
Componente
```html
<template>
  <h1>Vuex</h1>
  {{ store.state.a.contador }}
  <button @click="store.commit('incrementador')">Incrementar</button>
  <p>Le añadimos un 0 :   {{store.getters.multiplicador}}</p>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();

</script>

```
- Del mismo modo, dentro de las acciones del módulo, context.state  expondrá el estado local y el estado raíz se expondrá como context.rootState

Tienda
```js
import { createStore } from "vuex";

const almacenA = {
  state: () => (
     {
        contador : 0
    }
  ),
  mutations:{
           incrementador(estado) {
            //  estado = estado local del módulo
 
            estado.contador++;
           }
  } ,
  getters: {
       multiplicador(estado) {
        //  estado = estado local del módulo

        return estado.contador * 100;
       }
  } ,
  actions: {
    incrementador(context){
        console.log("Estado local" , context.state)
        console.log("Estado global/raiz" , context.rootState)
        context.commit("incrementador")
    }
  }

}


const store = createStore({
  modules: {
    a: almacenA
  }
})
export default store;

```
Componente
```html
<template>
  <h1>Vuex</h1>
  {{ store.state.a.contador }}
  <button @click="store.dispatch('incrementador')">Incrementar</button>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();

</script>

```
-  En los getters, el estado raíz se expondrá como su tercer argumento. (el segundo argumento corresponde a los getters).
  Tienda
```js
    getters: {
       multiplicador(estado , getters , rootState) {
        //  estado = estado local del módulo
        console.log("estado raiz" , rootState )
        return estado.contador * 100;
       }
  } ,

```

### Espacio de nombres

- De forma predeterminada, las acciones y mutaciones aún se registran en el espacio de nombres global ; esto permite que varios módulos reaccionen al mismo tipo de acción/mutación. Los getters también se registran en el espacio de nombres global de forma predeterminada. 
  
:::warning 
Debe tener cuidado de no definir dos captadores con el mismo nombre en módulos diferentes sin espacios de nombres, lo que podría generar un error.
:::

- Si desea que sus módulos sean más autónomos o reutilizables, puede marcarlos como espacios de nombres con namespaced: true. Cuando se registra el módulo, todos sus captadores, acciones y mutaciones se asignarán automáticamente a un espacio de nombres en función de la ruta en la que se registró el módulo.

Tienda
```js
import { createStore } from "vuex";

const almacenA = {
   namespaced:true,
  state: () => (
     {
        contador : 0
    }
  ),
  mutations:{
           incrementador(estado) {
            //  estado = estado local del módulo
 
            estado.contador++;
           }
  } ,
  getters: {
       multiplicador(estado , getters , rootState) {
        //  estado = estado local del módulo
        console.log("estado raiz" , rootState )
        return estado.contador * 100;
       }
  } ,
  actions: {
    incrementador(context){
        console.log("Estado local" , context.state)
        console.log("Estado global/raiz" , context.rootState)
        context.commit("incrementador")
    }
  }

}


const store = createStore({
  modules: {
    a: almacenA
  }
})
export default store;

```

Componente 

```html
<template>
  <h1>Vuex</h1>
  {{ store.state.a.contador }}
  <button @click="store.dispatch('a/incrementador')">Incrementar</button>
  <p>Le añadimos un 0 :   {{store.getters['a/multiplicador']}}</p>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();

</script>

```
:::tip Observacion
 ```js
 modules : {
   nombre : modulo
}

 ```
- En ese código , le estas asignando una referencia del modulo a  nombre.
- Con la propiedad namespaced en true ,  para utilizar dispatch() , commit() o incluso la propiedad getters , debes añadir el prefijo nombre/*******
- *********** puede ser el tipo de acción, mutación o un getter.
:::

:::tip 
- Si vas a utilizar algo del mismo modulo, no hace falta los prefijos.
- Aunque esto es opcional y puede alternar entre usar el prefijo o no.


:::

### Acceso al estado global
- Si desea utilizar el estado global y sus getters, se pasan como 3 y 4 argumento a la función del getter.
- También se encuentran como propiedades en el objeto contexto de las funciones de acciones.

Tienda
```js
import { createStore } from "vuex";

const almacenA = {
   namespaced:true,
  state: () => (
     {
        contador : 0
    }
  ),
  mutations:{
           incrementador(estado) {
            //  estado = estado local del módulo
 
            estado.contador++;
           }
  } ,
  getters: {
       multiplicador(estado , getters , rootState , rootGetters) {
        //  estado = estado local del módulo
        console.log("estado raiz" , rootState )
        console.log("Los getters del estado raiz" , rootGetters )
        return estado.contador * 100;
       }
  } ,
  actions: {
    incrementador(context){
        console.log("Estado local" , context.state)
        console.log("Estado global/raiz" , context.rootState)
        console.log("Los getters del estado raiz" , context.rootGetters )
        context.commit("incrementador")
    }
  }

}


const store = createStore({
  modules: {
    a: almacenA
  }
})
export default store;

```
-  Para enviar acciones o cometer mutaciones en el espacio de nombres global, pase ``{ root: true }`` como tercer argumento a dispatch y commit.

Tienda
```js
import { createStore } from "vuex";

const almacenA = {
   namespaced:true,
  state: () => (
     {
        contador : 0
    }
  ),
  mutations:{
           incrementador(estado) {
            //  estado = estado local del módulo
 
            estado.contador++;
           }
  } ,
  getters: {
       multiplicador(estado ) {
        return estado.contador * 100;
       }
  } ,
  actions: {
    incrementador(context){
      console.log('Se ejecuto');
        context.dispatch("incrementador" , null , {root : true})
    }
  }

}
const almacenB  = {
  actions: {
    incrementador(context){
        context.commit('a/incrementador');
    }
  }
}

const store = createStore({
  modules: {
    a: almacenA ,
    b : almacenB
  }
})
export default store;

```
Componente
```html
<template>
  <h1>Vuex</h1>
  {{ store.state.a.contador }}
  <button @click="store.dispatch('a/incrementador')">Incrementar</button>
  <p>Le añadimos un 0 :   {{store.getters['a/multiplicador']}}</p>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();

</script>

```
:::tip Observacion 
- El controlador de la acción ‘a/incrementador’ está ejecutando la función de la acción ‘incrementador’ del almacenB.
- El incrementador del almacenB a su vez ejecuta la mutacion del almacen A
- Como almacenB no tiene la propiedad namespace en true , es un espacio de nombre global.
- Funciona igual con commit().


:::

### Registrar acción global en módulos con espacio de nombres
- Si desea que una acción será considerada parte de un espacio de nombre global, puede especificarlo con la propiedad root en true.
- Para esto la función es una propiedad que tiene un objeto con dos propiedades : root (true o false) y handler (la función de acción).

Tienda
```js
import { createStore } from "vuex";

const almacenA = {
   namespaced:true,
  state: () => (
     {
        contador : 0
    }
  ),
  mutations:{
           incrementador(estado) {
            //  estado = estado local del módulo
 
            estado.contador++;
           }
  } ,
  getters: {
       multiplicador(estado ) {
        return estado.contador * 100;
       }
  } ,
  actions: {
    incrementador : {
      root : true ,
      handler (context ) {
        console.log('Se ejecuto');
        context.commit("incrementador")
      }
    }
  }

}

const store = createStore({
  modules: {
    a: almacenA ,
    
  }
})
export default store;

```
Componente
```html
<template>
  <h1>Vuex</h1>
  {{ store.state.a.contador }}
  <button @click="store.dispatch('incrementador')">Incrementar</button>
  <p>Le añadimos un 0 :   {{store.getters['a/multiplicador']}}</p>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();

</script>

```

:::tip Observacion
- La acción incrementador ahora esta definida en un espacio de nombre global.
- Incrementador paso a ser una propiedad que contiene un objeto con dos propiedades:
  - Root: debe ser true para ser considerado una acción en un espacio de nombre global.
  - Handler: tiene la función de la acción.


:::

### [Mas info](https://vuex.vuejs.org/guide/modules.html)