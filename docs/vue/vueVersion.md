---
sidebar_position: 3
---

# Options API / Composition API

## Options API

- Esta es la forma tradicional de trabajar con Vue , esta disponible en Vue 2 como en Vue 3
- Se basa en el uso de un objeto que contiene varias propiedades clave para el funcionamiento de los componentes Vue, como por ejemplo las propiedades props, data, computed, methods, etc...
- En los apartados de [Vue #1](../vue/) y [Vue #2](vue2) utilizamos la Options API
-  La API options solo debe retornar un único elemento (en la propiedad template) al definir un componente.
![Vue Options API](https://lenguajejs.com/vuejs/componentes/options-api/vue-options-api.png)

### Name

- La propiedad name recibe un String
- Establece un nombre al componente . De lo contario aparece como “Anonimo” en DevTools.
- La propiedad name permite establecer un nombre al componente.
  :::tip
  - Es buena practica
  - Ya que si estamos utilizando la extensión Vue Dev Tools (Chrome) o Vue Dev Tools (Firefox), en los componentes se nos mostrará el nombre y no Anonymous Component.
    :::

### Props

- La propiedad props recibe un array o un objeto
- Lista de atributos (props) aceptados desde el componente padre
- Sirven para enviar información al componente. Esto se hace a través de los llamados props, que no son más que la información pasada a través de atributos de la etiqueta HTML (nuestro componente)
- Es una forma de pasarle datos al componente .Los datos se envían a través de “atributos” que suelen ser dinámicos.
  :::tip recordatorio
  Recuerda que el objetivo principal de un componente es prepararlo para ser consumido como una etiqueta HTML y facilitar y simplificar la reutilización de dicho componente.
  :::

#### Ejemplo de una etiqueta HTML (componente) con atributos que en realidad son props:

```html
<BaseComponent id="5" author="Manz" subject="VueJS"></BaseComponent>
```

:::tip Observacion
Como vemos, podemos pasar los props, pero para recibirlos en el componente debemos definirlos en la opción props
:::

#### Definir props -- modalidad básica

- Con un array con el nombre de los props del componente.
- se recomienda sólo si aún no tenemos bien definido el componente y estamos en una fase de prototipado.

```js
export default {
  props: ["id", "author", "subject"],
};
```

#### Definir props -- modalidad avanzada rápida

- Con un objeto
- Con un Objeto con los props (clave) y el tipo de dato que se espera de cada uno (valor).
  Se recomienda utilizar esta

```js
export default {
  props: {
    id: Number,
    author: String,
    subject: String,
  },
};
```

#### Definir props -- modalidad avanzada

- Con un conjunto de objetos en un objeto
- Parecido al interior , pero ofreciendo mucha más información.
- Cada objeto del objeto es una props
- Cada objeto es una props
- Propiedades que puede obtener cada object (props)
  - Type : tipo de dato
  - Default : valor por defecto
  - Required (boolean) : Si es obligatorio
  - Validator (function) : Comprueba si el valor de la props es valido.

```js
export default {
  props: {
    id: {
      type: Number,
      default: 1,
      required: true,
      validator: number => number > 0
    },
    author: {
      type: String,
      required: false
    },
    subject: {
      type: String
      default: "Tema",
      required: true,
    }
  }
}

```

:::tip Observacion
Observa que el parámetro validator permite definir una función que devolverá true cuando el valor de la prop es correcto y false cuando no pasa la validación y es incorrecto.
:::

### data

- La propiedad data recibe una funcion
- Funcion que devuelve un object con las variables que utiliza el componente.
- La opción data es un lugar donde Vue guarda todas las variables locales al componente.
- Esta opción se define como una function que devuelve un object . Dicho objeto tiene en su interior una colección de propiedades que son las variables de Vue que podremos utilizar en nuestro componente.

```html
<template>
  <div>
    <div>Nick: {{ nickname }} ({{ life }})</div>
    <div>Role: {{ role }}</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        nickname: "Manz",
        role: "Developer",
        life: 99,
      };
    },
  };
</script>
```

- Si quisieramos hacer referencia a alguna de ellas en la parte de templates, simplemente utilizaremos &#123;&#123; nickname }} (o el nombre de la variable deseada) . &#123;&#123;nombrevariable }}
- si queremos hacer referencia a las variables desde la parte de los &lt;script>, hay que hacerlo utilizando la palabra clave this (referencia al objeto de la API). Por ejemplo, this.life devolvería 99, pero sólo desde la parte de Javascript, en los templates seguiríamos usando &#123;&#123; life }}.

### computed

- La propiedad computed recibe un objeto
- Lista de funciones que se ejecutaran cuando se acceda a la propiedad en cuestión.
- Las propiedades computadas son unas variables precalculadas que puedes reutilizar en Vue sin calcularlas cada vez que las utilices.
- Recomendadas para operaciones costosas
- Dichas propiedades computadas solo se vuelven a recalcular si detectan que uno de los parámetros implicados cambian, de modo que al calcularse una vez, suele cachear los resultados.

```html
<template>
  <div>
    <div>{{ TOTAL_LIFE }}</div>
  </div>
</template>

<script>
  const TOTAL_LIFE = 100;

  export default {
    data() {
      return {
        nickname: "Manz",
        role: "Developer",
        life: 99,
      };
    },
    computed: {
      TOTAL_LIFE() {
        return TOTAL_LIFE;
      },
    },
  };
</script>
```

:::tip Observacion
Una particularidad de las propiedades computadas es que realmente se definen como funciones, mientras que se utilizan (como se observa en la parte de templates) como variables.
:::

Otro ejemplo:

```html
<template>
  <div>
    <div>Role: {{ role }} ({{ exp }} experience years)</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        nickname: "Manz",
        exp: 10,
        life: 99,
      };
    },
    computed: {
      role() {
        return this.exp > 12
          ? "Expert"
          : this.exp > 8
          ? "Senior"
          : this.exp > 4
          ? "Middle"
          : "Junior";
      },
    },
  };
</script>
```

:::tip
Un uso interesante, en vistas de reutilización, suele ser utilizar los props como valores iniciales y almacenar en data los valores actuales del componente. De esta forma se proporciona una forma de indicar valores al componente (a través de props) y luego que sean modificables al usar el componente.
:::

:::tip
Habrás observado que cuando definimos nombres (en data, props y computed), dichos nombres no se pueden solapar. Vue te obliga a utilizar un buen nombrado de variables en sus propiedades donde, por ejemplo, una prop y una variable en data no se deben llamar igual.
:::

### methods

- La propiedad methods recibe un objeto
- Lista de funciones (métodos) disponibles en el componente
- Permite añadir funciones en el componente
- Dichas funciones pueden ser utilizadas desde las templates o desde la parte de los scripts, ejecutándolas y obteniendo la información que devuelven.

```html
<template>
  <div>
    <div>Life: {{ life }}</div>
    <button @click="decLife">Decrement Life</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        nickname: "Manz",
        exp: 10,
        life: 99,
      };
    },
    computed: {
      role() {
        return this.exp > 12
          ? "Expert"
          : this.exp > 8
          ? "Senior"
          : this.exp > 4
          ? "Middle"
          : "Junior";
      },
    },
    methods: {
      decLife() {
        this.life--;
      },
    },
  };
</script>
```

- Las funciones también podrían ser ejecutadas desde un template con un {{ decLife() }} o desde Javascript, de la forma normal que ejecutamos funciones, siempre teniendo en cuenta que desde Javascript hay que hacerlo de la siguiente forma: this.decLife().

### Watch

- La propiedad watch recibe un objeto
- Lista de funciones que se disparan cuando detecten cambios en variables con su nombre.
- Las funciones watch son un mecanismo de vigilancia un poco más avanzado de las propiedades computadas
- Es un objeto que contiene funciones.
- El nombre de las funciones debe coincidir con el nombre de la variable de Vue a vigilar. - Si Vue detecta que dicha variable cambia, ejecutará automáticamente la función watch de su mismo nombre.
- Estos watchers sólo deben usarse cuando las propiedades calculadas se nos quedan cortas, que suele ser en situaciones en las que necesitamos asincronía o se trata de operaciones muy costosas para cambiar datos.

#### Definir watch -- #1 Alternativa

- Como una funcion con el mismo nombre de la variable a vigilar.

```html
<template>
  <div>
    <div>Life: {{ life }}</div>
    <button @click="decLife">Decrement Life</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        nickname: "Manz",
        life: 99,
      };
    },
    methods: {
      decLife() {
        this.life--;
      },
    },
    watch: {
      life(current, old) {
        console.log(`Valor actual: ${current} Valor anterior: ${old}`);
      },
    },
  };
</script>
```

#### Definir watch -- #2 Alternativa

- Como un String con el nombre del método a ejecutar.

```html
<template>
  <div>
    <div>Life: {{ life }}</div>
    <button @click="decLife">Decrement Life</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        nickname: "Manz",
        life: 99,
      };
    },
    methods: {
      decLife() {
        this.life--;
      },
      changeLife(newValue) {
        console.log("Se ha detectado cambio de life: ", newValue);
      },
    },
    watch: {
      life: "changeLife",
    },
  };
</script>
```

#### Definir watch -- #3 Alternativa

- Como un objeto con una función handler() con el parámetro deep o immediate, según interese.
- Deep (por defecto false) : La función handler() es ejecutada independientemente de la profundidad del cambio. ([Ejemplo](https://techblog.geekyants.com/performing-a-deep-watch-in-vuejs#heading-deep-watcher-over-array-of-objects))
- immediate (por defecto false) : la función handler() es ejecutada inmediatamente después de crearla.

```html
<template>
  <div>
    <div>Life: {{ life }}</div>
    <button @click="decLife">Decrement Life</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        nickname: "Manz",
        life: 99,
      };
    },
    methods: {
      decLife() {
        this.life--;
      },
      changeLife(newValue) {
        console.log("Se ha detectado cambio de life: ", newValue);
      },
    },
    watch: {
      life: {
        handler(current, old) {
          console.log(`Valor actual: ${current} Valor anterior: ${old}`);
        },
        immediate: true,
        deep: true,
      },
    },
  };
</script>
```

### Emits

- La propiedad emits Recibe un array o objeto
- Lista de eventos que pueden ser emitidos desde el componente.
- Estos eventos personalizados pueden definirse de dos formas diferentes:

#### Definir emits -- modalidad basica

- Un array de String donde simplemente se indican los nombres de los eventos personalizados

```js
export default {
  emits: ["select", "send"],
};
```

#### Definir emits -- modalidad avanzada

- Un Objeto que incluye el nombre de los eventos y una función de validacion.

```js
:
export default {
  emits: {
    select: null,                       /* Sin validación */
    send: data => data.error === false  /* Con validación */
  }
}

```

:::tip Observacion
Esto funciona de manera similar a la validación de props, donde si nuestro validador regresa false, recibiremos una advertencia en nuestra consola. Si bien se seguirá emitiendo el evento con el valor no validado, la advertencia de la consola proporciona comentarios valiosos durante el desarrollo.
:::

### Ejemplos

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

```js
<script>
export default {
  name: "BaseComponent",
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>


```

:::tip observacion
En dicho objeto solo hemos insertado las propiedades name, props, data, computed y methods, pero a medida que avancemos en la creación de nuestro componente podremos ir incluyendo las que necesitemos. Vamos a ir explicándolas una por una.
:::

#### Existen otras opciones secundarias en el Options API de Vue, sin embargo, props, data, computed, methods, watch y emits son los principales.

## Composition API

- La Composition API, en lugar de separar la información en opciones, utiliza un método especial (hook) llamado setup() donde podremos escribir nuestro código Javascript de inicialización del componente. Dicho hook devolverá un objeto con los elementos que queramos utilizar en el resto del componente (como por ejemplo, en el &lt;template>).
- La forma de trabajar con esta Composition API es más cercana a Javascript nativo
- Es mucho más práctica para reutilizar datos y crear aplicaciones grandes y fáciles de mantener.

Sintaxis:

```html
<script>
   export default {
    name: "ComponentName",
    props: { ... },     // Props
    setup() {
      // Init logic, lifecycle hooks, etc...
      return {
        // Data, methods, computed, etc...
      }
    }
  }
</script>
```

- El hook/metodo setup() se ejecutara en la fase de inicialización del componente (equivale a la fase created , que deja de existir en Vue 3)
- El método setup() tendrá dos parámetros opcionales: props y context.
- Props : Es un object con los props que se hayan definido (se definen como si se implementara API OPTIONS)
- context : Es un object que contendrá el contexto(attrs , emit , expose , slots) del componente

Ejemplo:

```html
<template>
  <div>{{ total }}</div>
</template>

<script>
  export default {
    props: {
      price: Number,
    },
    setup(props, context) {
      const total = `Precio total: ${props.price}`;
      console.log(context);
      return { total };
    },
  };
</script>
```

:::tip Observacion

- Como se puede ver, se mantiene la opción props para definir las props del componente, pero se añade el hook setup() para crear la lógica de inicialización del componente.
- Lo que devuelve el método setup , lo utiliza el componente (&lt;template>)
:::

### El método setup() pasa a realizar varias operaciones principales:

- Las tareas realizadas en mounted() , updated() o created() son ahora definidas en el setup()
- Tanto las variables que antes establecíamos en data, las funciones de methods, las propiedades computadas de computed o los watchers de watch pasan a ser variables o funciones de Vue, que retorna el setup()
- Los elementos devueltos en el objeto del return de la última línea del setup() se podrán utilizar en otras zonas del componente, como en el apartado &lt;template>.
  :::warning
  No se puede usar el this dentro del setup
  :::

### Hooks del ciclo de vida

- En Vue 3 los hooks del ciclo de vida sufren un pequeño cambio. En lugar de ser métodos que se utilizan como opciones, son funciones que se importan desde el paquete vue.
- [Guia](https://vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram)

| Option API (Vue 2) | Options APi (Vue 3) | Composition API (vue 3)  |
| ------------------ | ------------------- | ------------------------ |
| beforeCreate       | beforeCreate        | Se escribe en el setup() |
| created            | created             | Se escribe en el setup() |
| beforeMount        | beforeMount         | onBeforeMount            |
| mounted            | mounted             | onMounted                |
| beforeUpdate       | beforeUpdate        | onBeforeUpdate           |
| updated            | updated             | onUpdated                |
| beforeDestroy      | beforeUnmount       | onBeforeUnmount          |
| destroyed          | unmounted           | onUnmounted              |
| activated          | activated           | onActivated              |
| deactivated        | deactivated         | deactivated              |

Ejemplo:

```html
<template>
  <div>{{ total }}</div>
</template>

<script>
  import { onBeforeMount, onMounted } from "vue";

  export default {
    props: {
      price: Number,
    },
    setup(props) {
      const total = `Total: ${props.price * 2}`;

      /* Formato corto */
      onMounted(() => console.log("mounted!"));

      /* Formato largo */
      onBeforeMount(() => {
        console.log("beforeMount hook!");
      });

      return {
        total,
      };
    },
  };
</script>
```

#### Nuevos hooks

- En Vue 3 aparecen nuevos hooks que pueden resultarnos interesantes. Es el caso de onRenderTracked y onRenderTriggered, los cuales se disparan en fases relacionadas con la renderización visual de contenido:

| Hook (Options API) | Hook (Composition API) | ¿Cuándo se llama?                                            |
| ------------------ | ---------------------- | ------------------------------------------------------------ |
| renderTracked      | onRenderTracked()      | Dependencia reactiva accedida por primera vez (renderizado). |
| renderTriggered    | onRenderTriggered()    | Comienza una nueva renderización.                            |

### Data

- Equivale a trabajar con la propiedad data de options API

```html
<template>
  <div>{{ message }}</div>
</template>

<script>
  export default {
    setup() {
      const message = "Holaaa mundo!!!";
      return { message };
    },
  };
</script>
```

:::tip Observacion

- la variable message no tiene reactividad
- Si se modifica la variable , no se vuelve a renderizar
- Con el Setup() Se pierde la reactividad
:::

### methods

- Equivale a trabajar con methods de options API

```html
<template>
  <button @click="alerta">Alerta</button>
</template>

<script>
  export default {
    setup() {
      let message = "Holaaa mundo!!!";
      const alerta = () => {
        alert("Alerta");
      };
      return { message, alerta };
    },
  };
</script>
```

### Con el Setup() Se pierde la reactividad

```html
<template>
  <div>{{ message }}</div>
  <button @click="cambiar">Cambiar mensaje</button>
</template>

<script>
  export default {
    setup() {
      let message = "Holaaa mundo!!!";
      const cambiar = () => {
        message = "cambiar";
        console.log(message);
      };
      return { message, cambiar };
    },
  };
</script>
```
:::warning Observacion 
- la variable message no tiene reactividad
- Si se modifica la variable , no se vuelve a renderizar
:::

- Ahora el manejo de la reactividad se vuelve algo más «explícito». En primer lugar, en Vue 3 tenemos varios métodos que podemos utilizar para crear datos reactivos a partir de variables u objetos.
- Con el composition API , se debe especificar que un dato es reactivo.
- Con el Setup() Se pierde la reactividad

:::tip Guia
[Como trabajar con la reactividad en vue 3](reactividad)
:::

### computed

- Equivale a trabajar con la propiedad computed de options API
- La funcion(propiedad computed) para definir la propiedad computada la recibe el metodo computed()
:::tip recordatorio
Una particularidad de las propiedades computadas es que realmente se definen como funciones, mientras que se utilizan (como se observa en la parte de templates) como variables.
:::
```html
<template>
  <div>{{ fullName }}</div>
</template>

<script>
  import { computed } from "vue";

  export default {
    setup() {
     
      const fullName = computed(() => {
        return message + "  hello";
      });
      return {fullName };
    },
  };
</script>
```

### emits

- Equivale a trabajar con la propiedad emit de options API

Componente hijo

:::tip
Podemos utilizar $emit o el emit del setup()
:::

```html
<template>
  <h2>Emitir eventos</h2>
  <hr />
  <p>Datos del padre</p>
  <p>{{$parent.parentData}}</p>
  <hr />
  <button @click="$emit('showCardBrand' , marca)">
    Emitir un evento al componente Padre desde la template
  </button>
  <button @click="eventoMarca">
    Emitir un evento al componente Padre desde el setup
  </button>
</template>

<script>
  import { ref } from "vue";

  export default {
    emits: ["showCardBrand"],
    setup(props, { emit }) {
      const marca = ref("Hyundai");
      const eventoMarca = () => {
        // emit(eventName , values) === $emit(eventName , values)
        emit("showCardBrand", marca.value);
      };
      return { marca, eventoMarca };
    },
  };
</script>
```

Componente padre

```html
<template>
  <componenteHijo @showCardBrand="evento" />
</template>

<script>
  import componenteHijo from "./components/HelloWorld.vue";
  import { ref } from "vue";
  export default {
    components: {
      componenteHijo,
    },
    setup() {
      const parentData = ref("Datos del componente padre");
      const evento = (marca) => {
        console.log(marca);
      };
      return { parentData, evento };
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

### watch

- Equivale a trabajar con la propiedad watch de options API

```html
<template>
<h1> {{datos}}</h1>

<input type="text" v-model="datos">
</template>

<script>
import {ref , watch} from 'vue'
export default {

  setup() {
    const datos = ref("Datos del componente padre");
  //  watch(variable a vigilar , funcion)
    // Se ejecutara la funcion cada vez que la variable a vigilar cambie/se modifique

  watch(datos , (nuevoValor , viejoValor) => {
    alert('El nuevo valor es ' +  nuevoValor +  ' El viejo valor es ' + viejoValor)
  })
    return {datos  }
  }

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

#### También podemos observar/vigilar varias variables.
- Para lograr esto , se manda un array al método watch como primer parámetro.
```html
<script>
import {ref , watch} from 'vue'
export default {

  setup() {
    const datos = ref("Datos 1");
    const datos2 = ref("Datos 2");
    // Se ejecutara la funcion cada vez que alguna de las  variables a vigilar cambie o se modifique
  //  watch([variable a vigilar, variable a vigilar , .... ]  , funcion)
  watch([datos,datos2] , (nuevoValor , viejoValor) => {
    //  Los dos parametros son arrays ahora
       console.log("nuevoValor" ,nuevoValor);
       console.log("viejoValor" , viejoValor);
  })
    return {datos , datos2  }
  }

}

</script>

```

#### Puede utilizar una función que devuelva una variable a vigilar.

```html
<script>
import {ref , watch} from 'vue'
export default {

  setup() {
    const datos = ref("Datos 1");
    const datos2 = ref("Datos 2");
  watch([datos , () =>  datos] , ( ) => {
    alert('CAMBIO datos');
  })
    return {datos , datos2  }
  }

}

</script>


```

## Script Setup
- El código que contiene &lt;script setup> se compila como el contenido de la función(hook) setup()
- El código que contiene &lt;script setup> se ejecutará cada vez que se cree una instancia del  componente .
- Cualquier variable, funcion e importación declarada dentro &lt;script setup> se puede usar directamente en la plantilla
- Al igual que setup() se pierde la reactividad
:::tip Guia
[Como trabajar con la reactividad en vue 3](reactividad)
:::
- [mas info](https://vuejs.org/api/sfc-script-setup.html#basic-syntax)
- En &lt;script setup>, no tenemos que declarar  un export default,  en su lugar, todos los enlaces de nivel superior(variables , métodos , componentes)  están expuestos a la plantilla.
- En el &lt;script setup> se puede utilizar el async await.

Sintaxis:

```html
<script setup>
console.log('hello script setup')
</script>

```
- Los nuevos métodos de Vue 3 para acceder al objeto Context del composition API son useContext ,useSlots , useAttrs , defineEmits
- Como sabes, si usas el método setup tradicional tendrás que, al final, retornar aquella lógica que necesitas, ya sean valores reactivos, métodos o demás.
Pues bien, todo lo que definas dentro de script setup ya es accesible dentro del template. Ojo, solo de forma local. 

### Data
- Equivale a trabajar con la propiedad data de options API
```html
<template>
<h1> {{datos}}</h1>
</template>

<script setup>
   const datos = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta, libero sit amet vehicula pharetra, tellus lectus porttitor elit, sit amet aliquet turpis quam eget dolor. Fusce feugiat nulla quis urna gravida lacinia. Morbi vitae ultrices enim. Aenean facilisis elit nec urna molestie, non ullamcorper elit posuere. Nulla laoreet commodo."
</script>

```
### methods
- Equivale a trabajar con methods de options API
```html

<template>
<button @click="boton">Se hizo Click</button>
</template>

<script setup>
     const boton = ()=> {
       alert("Se hizo click")
     }
</script>

```

### Computed 
- Equivale a trabajar con la propiedad computed de options API
- La funcion(propiedad computed) la recibe el metodo computed()
```html
<template>
 {{propiedad}}
</template>

<script setup>
import { computed } from 'vue';
  const numero1 = 5;
  const numero20 = 10;
 
 const propiedad = computed(() => 
 numero1 + numero20)

</script>

```
### defineEmits
- Equivale a trabajar con la propiedad emit de options API
- La funcion defineEmits nos permite:
   - Especificar los eventos que activa/emite nuestro componente
   - Agregar validaciones para cada evento
   - Tener acceso al  context.emit para que podamos emitir/activar eventos.

#### En el caso más simple, defineEmits recibe una matriz de cadenas, cada una de las cuales es el nombre de un evento.

Componente Padre
```html
<template>
 <ComponenteHijo @customChange="eventoPadre"></ComponenteHijo>
</template>

<script setup>
import ComponenteHijo from "./components/ComponenteHijo.vue";
const eventoPadre = (dato)=> {
  alert(dato);
}

</script>

```
Componente hijo
```html
<template>
<h2>Emitir eventos</h2>
<hr>
 <button @click="eventoHijo">
    Emitir un evento al componente Padre desde el setup
  </button>
</template>

<script setup>
import { defineEmits } from 'vue';
const emit = defineEmits(['customChange'])
const eventoHijo = () => {
  emit('customChange', 'Se ha enviado el evento desde el hijo');
}
</script>

```
#### defineEmits() puede recibir un array (modalidad básica de la propiedad emit de Option API) o un objeto (modalidad avanzada de la propiedad emit de Options API)

Sintaxis con el objeto:

```js
const emit = defineEmits({
  customChange: (s) => {
    if (s && typeof s === 'string') {
      return true
    } else {
      return false
    }
  },
})

```
### watch 
- Equivale a trabajar con la propiedad watch de options API

```html
<template>
   {{datos}}
   <button @click="datos = 'Otro texto'">Cambiar datos</button>
</template>

<script setup>
import {ref , watch} from 'vue'
    const datos = ref("Datos del componente padre");
  //  watch(variable a vigilar , funcion)
    // Se ejecutara la funcion cada vez que la variable a vigilar cambie/se modifique

  watch(datos , (nuevoValor , viejoValor) => {
    alert('El nuevo valor es ' +  nuevoValor +  ' El viejo valor es ' + viejoValor)
  })
  

</script>

```

### defineProps

- Sirve para definir props
- El método defineProps equivale a la propiedad props del Option API, por lo tanto, como parámetro tiene el mismo valor.
- El método defineProps recibe el mismo valor que la propiedad props.
- defineProps(array/objeto)

#### Ejemplo con la modalidad avanzada rápida:

Componente hijo

```html
<template>
<h2>{{dato}}</h2>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  dato: String
})
console.log("Props" , props);
</script>

```
Componente Padre 
```html
<template>
  <ComponenteHijo dato="Esto es una props"></ComponenteHijo>
</template>

<script setup>
import ComponenteHijo from "./components/ComponenteHijo.vue";

  

</script>

```