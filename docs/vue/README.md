---
sidebar_position: 0
---
# Vue #1 -- CDN con Options API
- Es un framework de javascript que nos facilita el desarrollo de interfaces.
-  Esta enfocado en el frontend y en el desarollo de aplicaciones SPA
-  Vue.js (comúnmente conocido como Vue) es un framework de JavaScript de código abierto para la construcción de interfaces de usuario y aplicaciones de una sola página. 
- Vue fue creado por Evan You después de trabajar para Google usando AngularJS en varios proyectos. Más tarde resumió su proceso de pensamiento: "Pensé, ¿qué tal si pudiera extraer la parte que realmente me gustaba de Angular y construir algo realmente liviano?"8​ El primer código fuente comprometido con el proyecto fue fechado en julio de 2013, y Vue fue liberado por primera vez en febrero siguiente, en 2014.

### Extension
- [vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)

## CDN
- [guia](https://vuejs.org/guide/quick-start.html#with-build-tools)
- Nos permite mezclar con varios lenguajes de progamacion web
- Gracias al CDN, se puede utilizar VUE con cualquier lenguaje que trabaje con HTML.
- A través del CDN, se convierte todo el código en javascript puro (esto ocurre cuando el navegador carga el sitio)
- Todo el javascript puro se ejecuta en el index.html , creando una APP de una sola pagina (SPA)
```js
        <!-- // Libreria de vue -->
        <script src="https://unpkg.com/vue@3"></script>

```

## Creamos nuestra primera App

:::tip ¿Como funciona vue? 
- Se monta una aplicación a través de una sola pagina(SPA)
- Toda la aplicación se monta en un contenedor (DIV) , este se suele encontrar en un index.html
:::

:::tip ¿Que propiedades tiene un una aplicacion (un componente)? 
- Data 
- Methods
- Props(propiedades)
- Eventos (created , mounted , computed , watch ,destroyed , etc)
:::

:::warning
- En estos ejemplos/explicaciones, creamos un componente llamado hola Mundo.
- Luego vamos a explicar los componentes pero es necesario crear como minimo uno para crear una app.
- Cuando decimos aplicacion , nos referimos a un componente
:::

### Datos (data)
- Es una función que devuelve un objeto, con los datos que se va a utilizar la aplicacion(componente)

### Montamos una App
- Creamos la aplicación con el método createApp de Vue y la montamos con el método mount.

index.html 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <div id="app">
 Hola {{nombre}} estamos en el año {{añio}} --- {{meses}}

   </div>

        <!-- // Libreria de vue -->
        <script src="https://unpkg.com/vue@3"></script>
        <script>
            // Componente holaMundo
            const holaMundo = {
                data() {
                    return {
                        nombre : 'Fede' ,
                        anio : 2021 ,
                        meses : ['Enero' , 'Febrero']
                    }
                }
            }
        //    createApp(componente).mount(id del elemento HTML contenedor)
            Vue.createApp(holaMundo).mount('#app');
        </script>
</body>
</html>

```
:::tip Observacion
- Estamos montando la aplicacion (componente principal , en el ejemplo se llama holaMundo)  en el div cuya id es #app.
- Estamos renderizando la aplicacion(componente principal)  en el div.
- Estamos creando la aplicación en el DIV 
- La aplicacion (componente) utiliza los datos que se le asignaron en el data.
- Con las dobles llaves {{código javascript}} podemos utilizar variables, objetos , operadores ternario( para que devuelva algún valor ) , metodos y muchas expresiones más de javascript.
- Nombre = ‘fede’
:::

## Contador con el metodo mounted 
:::tip metodo mounted 
Se ejecuta cuando la aplicacion(componente) es montada (renderizado)
:::
 ```html
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <div id="app">
 Contador : {{contador}}

   </div>

        <!-- // Libreria de vue -->
        <script src="https://unpkg.com/vue@3"></script>
        <script>
            // Componente holaMundo
            const holaMundo = {
                data() {
                    return {
                      contador:0
                    }
                } , 
                mounted() {
                    // Este bloque se ejecuta al renderizarse el componente
                    // Este bloque se ejecuta al montarse la aplicacion(componente)
                  setInterval(() => {
                    // Accedemos al contador con el this
                      this.contador ++;
                  } , 1000)

                }
            }
        //    createApp(componente).mount(id del elemento HTML contenedor)
            Vue.createApp(holaMundo).mount('#app');
        </script>
</body>
</html>

 ```

:::tip Reactividad 
- Cada vez que cambia contador, vuelve a renderizarse.
- Esto es gracias a la reactividad de VUE que detecta cambios que se realizaron y vuelve a renderizar las partes afectadas por el cambio.
- Se vuelve a renderizar la aplicacion (componente) cuando se realiza algún cambio.
:::

:::warning  
- Solo la parte que contiene el valor que cambio se renderiza.
- El resto NO SE RENDERIZA
:::

## Evento Click y Métodos(methods)
```html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app">
      Contador : {{contador}}
      <button type="button" v-on:click="stopInterval">{{btnMessage}}</button>
    </div>

    <!-- // Libreria de vue -->
    <script src="https://unpkg.com/vue@3"></script>
    <script>
      // Componente holaMundo
      const holaMundo = {
        data() {
          return {
            contador: 0,
            interval: null,
            isRunning: false,
            btnMessage: 'Detener'
          };
        },
        mounted() {
          // Este bloque se ejecuta al renderizarse el componente
          // Este bloque se ejecuta al montarse la aplicacion(componente)
          // Accedemos al interval con el this
          this.interval = setInterval(() => {
            // Accedemos al contador con el this
            this.contador++;
          }, 1000);
          this.isRunning = true;
        },
        methods: {
          stopInterval() {
            if (this.isRunning) {
              console.log("Se paro ");
              clearInterval(this.interval);
              this.isRunning = false;
              this.btnMessage = 'Continuar'
            } else {
              console.log("Continua ");
              this.interval = setInterval(() => {
                // Accedemos al contador con el this
                this.contador++;
              }, 1000);
              this.isRunning = true;
              this.btnMessage = 'Detener';
            }
          },
        },
      };
      //    createApp(componente).mount(id del elemento HTML contenedor)
      Vue.createApp(holaMundo).mount("#app");
    </script>
  </body>
</html>

```
:::tip Observacion 
- Como habrá notado, accedemos a los datos que utiliza el componente con el this.
- Al hacer click en el button detener , se activaría el evento click , que a su vez ejecutaría el método stopInterval 
- El método stopInterval está definido en la lista de métodos que utiliza el componente.
- La lista de métodos es el valor de la propiedad methods , que como se puede observar es un objeto que contiene adentros los métodos que va a utilizar el componente.

```js
 methods :  {
             métodos que utiliza el componente
nombremetodo() {código javascript} ,
nombremetodo() {código javascript} ,
                 }

```

:::

:::tip Observacion 2 
- Cada vez que cambia un dato, vuelve a renderizarse.
- Esto es gracias a la reactividad de VUE
:::
:::tip 
Los métodos pueden ser asíncronos (async)
:::
## v-bind 
- Tambien podemos cambiar dinámicamente los valores de los atributos.
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app">
      <!-- v-bind:nombreatributo="valor" -->
       <label  v-bind:title="titulo">Hola mundo</label>
    </div>

    <!-- // Libreria de vue -->
    <script src="https://unpkg.com/vue@3"></script>
    <script>
      // Componente holaMundo
      const holaMundo = {
        data() {
          return {
            titulo : 'Este es un titulo dinamico'
          };
        },
      };
      //    createApp(componente).mount(id del elemento HTML contenedor)
      Vue.createApp(holaMundo).mount("#app");
    </script>
  </body>
</html>

```
:::tip Observacion 
- El valor del atributo title es la variable título.
- Por lo tanto el atributo title depende del valor de la variable titulo.
- Si el valor de la variable cambia , el valor del atributo cambia.
- Cuando el valor del atributo cambia, se vuelve a renderizar el elemento para que se vea el cambio (Reactividad)



:::
#### Ejemplo: 
- Depende del botón, se muestra una imagen
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app">
      <!-- v-bind:nombreatributo="valor" -->
       <img v-bind:src="imagen" alt="" style="max-width:400px">
       <hr>
       <button v-on:click="mostrarImagen('https://ciberninjas.com/wp-content/uploads/2021/02/javascript-logo-maxima-resolucion.webp')">Imagen JS</button>
       <button v-on:click="mostrarImagen('https://cdn-icons-png.flaticon.com/512/919/919826.png')">CSS</button>
    </div>

    <!-- // Libreria de vue -->
    <script src="https://unpkg.com/vue@3"></script>
    <script>
      // Componente holaMundo
      const holaMundo = {
        data() {
          return {
            titulo : 'Este es un titulo dinamico',
            imagen:""
          };
        },
        methods: {
          mostrarImagen(imagen) {
            this.imagen = imagen;
          }
        }
      };
      //    createApp(componente).mount(id del elemento HTML contenedor)
      Vue.createApp(holaMundo).mount("#app");
    </script>
  </body>
</html>

```
:::tip Observacion 
- Al hacer click en el boton, se activa el evento click.
- Al activar el evento click  del boton, se ejecuta la función mostrarImagen pasandole un argumento de forma estatica
- En el ejemplo la imagen cambia cuando se toca el boton , esto sucede porque se vuelve a renderizar.
- Se vuelve a renderizar porque tiene un atributo dinámico y aplica la reactividad.
:::
### Abreviacion 
- Puede ser, que en algun proyecto lo encuentre abreviado:
```js
:atributo = “valor”.
```
### Propiedades Booleanas de etiquetas HTML 
- Existen atributos que reciben un valor booleano y que, si no le asignas ningún valor, por defecto es true.
```html
<input type="text" disabled>
```
- Por defecto el atributo disabled es true.
- Ejemplo de como se maneja en vue un atributo dinamico booleano:
```js
  <div id="app">
         <input type="text" :disabled="valor">
    </div>
    <script src="https://unpkg.com/vue@3"></script>
    <script>
      // Componente holaMundo
      const holaMundo = {
        data() {
          return {
             valor :true
          };
        },

```
### Clases 
```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <!-- Compiled and minified CSS -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
    />

    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

    <style>
      .rounded {
        border-radius: 50px;
      }
      .square {
        height:50px;
        width:50px;
      }
    </style>
  </head>
  <body>
    <div id="app" >
       <div class="container" style="padding-top:50px;">
         <div class="square teal" v-bind:class="{rounded}"></div>
         <button @click="(rounded = !rounded)"> Cambiar forma</button>
       </div>
    </div>
    <script src="https://unpkg.com/vue@3"></script>
    <script>
      // Componente holaMundo
      const holaMundo = {
        data() {
          return {
             rounded:true
          };
        },
      };
      Vue.createApp(holaMundo).mount("#app");
    </script>
  </body>
</html>

```

:::tip Observacion 
- Si rounded es true , se le aplica la clase rounded al elemento. En caso contrario , se elimina la clase.
- El valor de :class(atributo dinamico) va entre llaves {} . Por lo tanto el valor del atributo class es un objeto.
:::

Hacemos lo mismo pero de forma estatica 
:::warning
No RECOMENDADO
:::
```html
      <div class="square teal" v-bind:class="{rounded: true}"></div>
```
#### En lugar de usar un objeto, podes usar un array
```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <!-- Compiled and minified CSS -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
    />

    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

    <style>
      .rounded {
        border-radius: 50px;
      }
      .square {
        height:50px;
        width:50px;
      }
    </style>
  </head>
  <body>
    <div id="app" >
       <div class="container" style="padding-top:50px;">
         <div class="teal" v-bind:class="[roundedClass , squareClass]"></div>
       </div>
    </div>
    <script src="https://unpkg.com/vue@3"></script>
    <script>
      // Componente holaMundo
      const holaMundo = {
        data() {
          return {
            
              roundedClass : 'rounded ',
              squareClass : 'square'
             
          };
        },
      };
      Vue.createApp(holaMundo).mount("#app");
    </script>
  </body>
</html>

```
:::tip Observacion 
- El valor de :class(atributo dinamico) va entre llaves [] (es un array).
- El valor de cada elemento del array es la clase que se le inserta al elemento. 
:::
#### Si lo quieres hacer de forma condición, usa un operador ternario en el array.
```js
 <div id="app" >
       <div class="container" style="padding-top:50px;">
         <div class="teal" v-bind:class="[condicion? roundedClass:'' , squareClass]"></div>
       </div>
    </div>
    <script src="https://unpkg.com/vue@3"></script>
    <script>
      // Componente holaMundo
      const holaMundo = {
        data() {
          return {
            
              roundedClass : 'rounded',
              squareClass : 'square',
              condicion : true
             
          };
        },
      };

```
:::tip Observacion 
Si condición es true, se le añade la clase rounded al elemento.
:::
### Style 
####  Usar como valor de :style un objeto

:::tip ¿Como escribir una propiedad css en caso de tener mas de una palabra?
-	Usar las  comillas . Quedaria: ‘font-size’
-	Usando cammelCase . Quedaria : fontSize
:::

```js
 <div id="app" >
       <div class="container" style="padding-top:50px;">
         <div v-bind:style="{
          'font-size' : '2em' , height : '200px' , width:'200px' , backgroundColor:'green'
         }">Hola Mundo</div>
       </div>
    </div>

```
:::tip Observacion 
- Se utiliza la sintaxis: PropiedadCSS : ‘valor’
- Si la PropiedadCSS tiene dos palabras o más, puede escribirse entre comillas (‘’) o utilizando cammelCase. En caso contrario, se trataría como una simple propiedad de un objeto.
:::

 Ejemplo #1: 

```js
  <div v-bind:style="myStyle">Hola Mundo</div>
       </div>
    </div>
    <script src="https://unpkg.com/vue@3"></script>
    <script>
      // Componente holaMundo
      const holaMundo = {
        data() {
          return {
            myStyle:{
          'font-size' : '2em' , height : '200px' , width:'200px' , backgroundColor:'green'
         }
          
             
          };
        },
      };

```
Ejemplo #2 
```js
    <div id="app" >
       <div class="container" style="padding-top:50px;">
         <div v-bind:style="{
          'font-size' : '2em' , height : '200px' , width:'200px' , backgroundColor: color
         }">Hola Mundo</div>
       </div>
    </div>
    <script src="https://unpkg.com/vue@3"></script>
    <script>
      // Componente holaMundo
      const holaMundo = {
        data() {
          return {
            myStyle:{} ,
            color:'blue'
          
             
          };
        },
      };

```
#### Podes utilizar un array 
```js
 <div id="app" >
       <div class="container" style="padding-top:50px;">
        <div v-bind:style="[myStyle , myStyle2 ]">Hola Mundo</div>
      </div>

       </div>
    </div>
    <script src="https://unpkg.com/vue@3"></script>
    <script>
      // Componente holaMundo
      const holaMundo = {
        data() {
          return {
            myStyle:{
          'font-size' : '2em' , height : '200px' , width:'200px' , backgroundColor:'green'
         } ,
         myStyle2 : {border: 'dashed 10px black'}

          
             
          };
        },
      };

```
:::tip Observacion 
El elemento utiliza los estilos de los dos objetos.
:::
## v-model 

Gracias al v-model se logra que: 
- Si se hace un cambio dentro del script (donde se define el componente), se refleja en la aplicación (se renderiza nuevamente por la reactividad)
- Si se hace un cambio dentro de la aplicación (lo que contiene el div , interactúa el usuario), se refleja en el script.
- Esto se denomina enlace de ambas direcciones.

#### Practica 
- Se utiliza la etiqueta v-model en el elemento HTML.
- El valor de v-model es el nombre de una variable.  

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app">
      <label >Escribe tu nombre</label>
        <!-- v-model="valor" -->
      <input type="text" v-model="nombre">
      <hr>
      <h5>Hola {{nombre}}</h5>

    <script src="https://unpkg.com/vue@3"></script>
    <script>
      // Componente holaMundo
      const holaMundo = {
        data() {
          return {
            nombre:''
          };
        },
        methods: {
        }
      };
      Vue.createApp(holaMundo).mount("#app");
    </script>
  </body>
</html>

```
:::tip Observacion 
- Al v-model del input se le asigna la variable nombre
- Cuando el usuario ingresa un valor en el input, se modifica el valor de la variable nombre.
- Si se hace un cambio dentro de la aplicación (ingresa un valor el usuario), se refleja en el script(en la variable nombre)
:::

#### Ejemplo con select
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app">
      <label >Escribe tu nombre</label>
        <!-- v-model="valor" -->
      <input type="text" v-model="nombre">
      <hr>
      <h5>Hola {{nombre}}</h5>
      <hr>
      <select v-model="fruta">
        <option value="Manzana">Manzana</option>
        <option value="Pera">Pera</option>
        <option value="Uva">Uva</option>
      </select>
     Fruta seleccionada : {{fruta}}
    <script src="https://unpkg.com/vue@3"></script>
    <script>
      // Componente holaMundo
      const holaMundo = {
        data() {
          return {
            nombre:'' ,
            fruta: 'Manzana'
          };
        },
        methods: {
        }
      };
      Vue.createApp(holaMundo).mount("#app");
    </script>
  </body>
</html>

```
:::tip Observacion 
- Si se hace un cambio dentro del script (el valor inicial de la variable fruta es “Manzana”), se refleja en la aplicación (el valor por defecto del select es Manzana)
- Si se hace un cambio dentro de la aplicación (Cambiamos la opcion del select), se refleja en el script (se cambia el valor de la variable fruta)
:::

#### Ejemplo con checkbox 
```html
  <input type="checkbox" v-model="activo">
    <script src="https://unpkg.com/vue@3"></script>
    <script>
      // Componente holaMundo
      const holaMundo = {
        data() {
          return {
            nombre:'' ,
            activo: false
          };

```


#### Conclusion 
- Tiene reactividad.
- Si se realiza algún cambio en la aplicación, se aplica en la etiqueta script el mismo cambio (se modifica el valor de la variable)
- Si se realiza algún cambio en el script, se vuelve a renderizar la aplicación(la parte afectada)
#### ¿Para que podria servir?
- Sirve para tener una variable con el valor(value) del elemento HTML (variable = valor del elemento HTML).
:::tip valor del elemento HTML 
Valor(value) del elemento HTML = el valor del input (lo que ingreso el usuario ) , el value de select, el true o false del checkbox , etc.
Se podría decir que el valor(value) del elemento HTML equivale al valor del atributo value.
:::
- Si se cambia el valor del elemento HTML, se refleja en el script (se modifica el valor de la variable)
- Si se cambia el valor de la variable, se cambia el valor del elemento HTML.



## Bucles (V-for)

### V-for 
- Sirve para recorrer una lista (array , string , etc) 
- El v-for se debe usar en el elemento/componente que queremos que se repita.
- Sintaxis: 
```js
// nombrevariable equivale a cada elemento del array al recorrerse.
// Nombrevariable equivale a cada elemento del array.
// Se recorre el array de la posición 0 a la última posición.
// Posición 0 , nombrevariable = variable[0]
// Posicion 1 , nombrevariable = variable[1]

v-for=nombrevariable in nombrearray”
```
- El elemento que contiene el v-for , necesita la v-bind:key=”valor”.
- Ese valor debe ser único ya que lo utiliza vue para identificar cada elemento que se va a generar al recorrer la lista.

#### Ejemplo 
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app">
      <ul>
        <!-- v-for="nombrevariable" -->
        <li v-for="fruta in frutas" v-bind:key="fruta">{{fruta}} </li>
      </ul>
    </div>
    <script src="https://unpkg.com/vue@3"></script>
    <script>
      // Componente holaMundo
      const holaMundo = {
        data() {
          return {
            frutas : ['Manzana' , 'Pera' , 'UVA']
          };
        },
        methods: {},
      };
      Vue.createApp(holaMundo).mount("#app");
    </script>
  </body>
</html>

```
:::tip Observacion 
- Se genera tres etiqueta &lt;li> , una por cada elemento del array.
- Cada &lt;li> tiene una “key” que la identifica.
- Vue utiliza la key para saber que elemento necesita renderizarse de nuevo, en caso que el array cambie. Por lo tanto, el valor del atributo key debe ser único.
- Puede utilizar algún valor de fruta (representa a cada elemento del array) para asignar la key.
- Adentro del componente/elemento HTML, ya puede utilizar la variable fruta (representa a cada elemento del array)
:::
#### Ejemplo con array de Objetos
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app">
      <ul>
        <li v-for="fruta in frutas" v-bind:key="fruta.id">{{fruta.id}} -  {{fruta.nombre}}</li>
      </ul>
    </div>
    <script src="https://unpkg.com/vue@3"></script>
    <script>
      // Componente holaMundo
      const holaMundo = {
        data() {
          return {
            frutas: [
              { id: 1, nombre: "Manzana" },
              { id: 2, nombre: "Pera" },
              { id: 3, nombre: "Uva" },
            ],
          };
        },
        methods: {},
      };
      Vue.createApp(holaMundo).mount("#app");
    </script>
  </body>
</html>

```
:::tip Observacion 
- Puede utilizar algún valor de fruta (representa a cada elemento del array) para asignar la key.
- Adentro del componente/elemento HTML, ya puede utilizar la variable fruta (representa a cada elemento del array)
:::
### El v-for es Reactivo 
- Cualquier cambio del array, se aplica en la aplicación.
- Si se modifica el array (eliminar, añadir, editar) , vue vuelve a renderizar los elementos que cambiaron  y/o renderiza nuevos elementos del array.

#### Ejemplo con select
```html
<select >
            <option v-for="fruta in frutas" v-bind:key="fruta.id"  v-bind:value="fruta.id">{{fruta.nombre}}</option>
        </select>
    </div>
    <script src="https://unpkg.com/vue@3"></script>
    <script>
      // Componente holaMundo
      const holaMundo = {
        data() {
          return {
            frutas: [
              { id: 1, nombre: "Manzana" },
              { id: 2, nombre: "Pera" },
              { id: 3, nombre: "Uva" },
            ],
          };
        },

```
:::tip Observacion 
- También puede usar utilizar algún valor de fruta (representa a cada elemento del array) como valor de algún atributo dinámico. En este ejemplo se utiliza la id como valor del atributo value.
:::

### v-for también te permite obtener el índice de cada elemento.
- Sintaxis: 
```js
v-for=(nombrevariable,index) in nombrearray”
```
- En cada recorrido vas a tener acceso a nombrevariable (un item del array) y su posición(index).


```html
 <ul>
        <!-- v-for="nombrevariable" -->
        <li v-for="(fruta,index) in frutas" v-bind:key="fruta.id">{{index}} -  {{fruta.nombre}}</li>

     
      </ul>

```
:::tip Observacion 
- Puede utilizar algún valor de fruta o el indice (representa a cada elemento del array) para asignar la key.
- Adentro del componente/elemento HTML, ya puede utilizar la variable fruta (representa a cada elemento del array) o el índice.
- También puede usar utilizar algún valor de fruta (representa a cada elemento del array) o el indice como valor de algún atributo dinámico. 
:::

### Bucles anidados con v-for
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app">
      <ul>
        <!-- v-for="nombrevariable" -->
        <li v-for="(fruta,index) in frutas" v-bind:key="fruta.id">
          {{index}} - {{fruta.nombre}}
          <ul>
            <li v-for="pais in fruta.paises_origen"> {{pais.id_pais}} - {{pais.pais}}</li>
          </ul>
        </li>
        
      </ul>
      <select>
        <option
          v-for="fruta in frutas"
          v-bind:key="fruta.id"
          v-bind:value="fruta.id"
        >
          {{fruta.nombre}}
        </option>
      </select>
    </div>
    <script src="https://unpkg.com/vue@3"></script>
    <script>
      // Componente holaMundo
      const holaMundo = {
        data() {
          return {
            frutas: [
              {
                id: 1,
                nombre: "Manzana",
                paises_origen: [
                  { id_pais: 1, pais: "El salvador" },
                  { id_pais: 2, pais: "Guatemala" },
                ],
              },
              {
                id: 2,
                nombre: "Pera",
                paises_origen: [
                  { id_pais: 3, pais: "Honduras" },
                  { id_pais: 4, pais: "Nicaragua" },
                ],
              },
              { id: 3, nombre: "Uva", paises_origen: null },
            ],
          };
        },
        methods: {},
      };
      Vue.createApp(holaMundo).mount("#app");
    </script>
  </body>
</html>


```
:::tip Observacion 
- Dentro de un v-for se implemento otro v-for.
- Se utilizo un array del elemento fruta para crear otro v-for  
:::

:::warning 
El v-for recorre Strings Tambien.
:::

### Recorrer un Rango 
```html
  <ul>
        <li v-for="numero in 100">{{numero}} </li>
      </ul>

```
:::tip Observacion 
- numero empieza en 1
- En cada recorrido número aumenta 1 hasta que sea igual a 100
:::

## No rompas la reactividad , cuidado con el contexto(scope)!
- Las funciones normales pueden romper la reactividad de vue al momento de implementar varios bloques de código (scope)
- Para estas situaciones se recomienda usar funciones flechas.

#### Ejemplo
```html
  <script>
      // Componente holaMundo
      const holaMundo = {
        data() {
          return {
              usuarios : [] ,
              nombre : 'Nombre'
          };
        },
        methods: {
           getUser() {
                fetch('https://jsonplaceholder.typicode.com/users').then(
                  response => response.json() 
                ).then (function(data) {
                
                      console.log(this.nombre);
                      console.log(this.usuarios);
                })
          }
        },
        mounted(){
          this.getUser();
        }
      };
      Vue.createApp(holaMundo).mount("#app");
    </script>

```
:::tip Observacion 
- No se tiene acceso al nombre ni a los usuarios en el then.
- Esto se debe a que vue a veces entra en conflictos con las funciones normales 
:::
:::warning Esto provoca: 
- Que no tengamos acceso a variables por el scope 
- Se rompa la reactividad (no se renderice ningún cambio)

:::

#### Solucion
- Usar funciones flechas 
```js
getUser() {
                fetch('https://jsonplaceholder.typicode.com/users').then(
                  response => response.json() 
                ).then (data =>  {
                
                      console.log(this.nombre);
                      console.log(this.usuarios);
                })
          }

```


## V-if / V-else / V-else-if

- Sirve para renderizar algo en base a una condición.
- Son como “etiquetas” que se insertan en el componente/elemento HTML que se va renderizar solo si la condición se cumple.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <!-- Compiled and minified CSS -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
    />

    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
  </head>
  <body>
    <div id="app">
      <!-- v-if="condicion" 
       muestra el h5 si la condicion es true -->
      <h5 v-if="(numero_uno > numero_dos)">
        El numero {{numero_uno}} es mayor que {{numero_dos}}
      </h5>
      <!-- v-else-if="condicion" 
       muestra el h5 si la condicion es true y si el v-if anterior fue false-->
      <h5 v-else-if="(numero_uno === numero_dos)">
        El numero {{numero_uno}} es igual que {{numero_dos}}
      </h5>
      <!-- v-else 
       muestra el h5 si los v-if y  v-else-if  anteriores son false -->
      <h5 v-else>
        El numero {{numero_uno}} es menor que {{numero_dos}}
      </h5>
    </div>
    <script src="https://unpkg.com/vue@3"></script>
    <script>
      // Componente holaMundo
      const holaMundo = {
        data() {
          return {
            numero_uno: 10,
            numero_dos: 15,
          };
        },
        methods: {},
        mounted() {},
      };
      Vue.createApp(holaMundo).mount("#app");
    </script>
  </body>
</html>

```
### Evitar v-if con v-for
- [problema](https://vuejs.org/style-guide/rules-essential.html#avoid-v-if-with-v-for)
-  Cuando Vue procesa directivas, v-if tiene una prioridad más alta que v-for
```html
 <div id="app">
      <ul>
        <li v-for="numero in numeros" v-if="numero.numero % 2 == 0">El numero {{numero.numero}} es par</li>
      </ul>
    </div>
    <script src="https://unpkg.com/vue@3"></script>
    <script>
      // Componente holaMundo
      const holaMundo = {
        data() {
          return {
            numeros: [{ numero: 10 }, { numero: 15 }],
          };
        },
        methods: {},
        mounted() {},
      };
      Vue.createApp(holaMundo).mount("#app");
    </script>
  </body>
</html>

```
:::tip Observacion 
El código anterior te genera un error, porque la  directiva  v-if se evaluará primero y la variable de iteración numero no existe en ese momento.

:::

## Eventos 

- [Dentro de javascript hay muchos eventos (al hacer click, pasar el puntero por encima de un elemento, etc)](https://fedeleva.github.io/documentacion/docs/Javascript/DOM#eventos)
- Existen dos formas de registrar un evento a un componente/elemento (Cumple la misma función que el addEventListener()).
### 1 Forma
```js
<elemento v-on:evento =”metodo”></elemento>
```
- Si el método no tiene paréntesis, es porque no tiene argumentos.
- Si el método tiene paréntesis, es porque se invoca con argumentos.
- Generalmente el método está definido en la propiedad methods o en el script setup (lo veremos mas adelante)
- Cuando el usuario activa el evento (hacer click, por ejemplo) del elemento, ejecutara el método.
- En lugar de poner el método , puede insertar código javascript (lo que pasaría al activarse el evento).

### El código javascript puede ir entre paréntesis (opcional)


```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <!-- Compiled and minified CSS -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
    />

    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
  </head>
  <body>
    <div id="app">
          <button class="btn indigo darken-4" v-on:click="(contador++)">Haz click</button>
          {{contador}}
    </div>
    <script src="https://unpkg.com/vue@3"></script>
    <script>
      // Componente holaMundo
      const holaMundo = {
        data() {
          return {
             contador : 0
          };
        },
        methods: {},
        mounted() {},
      };
      Vue.createApp(holaMundo).mount("#app");
    </script>
  </body>
</html>

```
:::tip Observacion 
- Evento click = Se activa cuando el usuario hace click en el elemento.
- En lugar de usar un método definido , se utiliza los paréntesis y código javascript  (código javascript) que especifica lo que pasaría al activar el evento.
:::

### 2 Forma : abreviada 

```js
<elemento @evento=”metodo”></elemento>
```
- Es lo mismo que la primera forma, solo que se utiliza la arroba en lugar de “v-on:”.

```js
<div id="app">
          <button class="btn indigo darken-4" v-on:click="(contador++)">Haz click</button>
          <button class="btn indigo darken-4" @mouseover="(contador++)">Coloca el puntero sobre mi</button>
          {{contador}}
    </div>

```

:::tip Explicacion 
- Evento mouseover= Se activa cuando el usuario pasa el puntero sobre el elemento.
- Se utiliza el @ en lugar de “v-on:”.
:::

- [Lista de eventos](https://developer.mozilla.org/es/docs/Web/Events#eventos_est%C3%A1ndar)

Ejemplo con un método ya definido: 

```js
    <button class="btn indigo darken-4" v-on:click="sumaUno">Haz click</button>
          {{contador}}
    </div>
    <script src="https://unpkg.com/vue@3"></script>
    <script>
      // Componente holaMundo
      const holaMundo = {
        data() {
          return {
             contador : 0
          };
        },
        methods: {
         sumaUno(evento) {
           this.contador++;
         }

        },
        mounted() {},
      };
      Vue.createApp(holaMundo).mount("#app");
    </script>
  </body>
</html>

```

### También puede capturar el objeto evento:

- Sirve para enviar el objeto evento al método como argumento.
- Se suele utilizar cuando el método tiene mas de un argumento y uno es el objeto evento.
- Ej. Metodo(valor1 , valor2 , evento)

```js
<button class="btn indigo darken-4" v-on:click="sumaUno">Haz click</button>
          <!-- Capturar el objeto evento -->
          <button class="btn indigo darken-4" v-on:click="sumaUno($event)">Haz click</button>

```

## v-show

- Es similar a v-if
```js
v-show="condicion"
```
- Si la condición es true , se muestra el elemento/componente.

```js
<div id="app">
          <img v-show="mostrarImagen" src="https://rockcontent.com/es/wp-content/uploads/sites/3/2019/02/Consejos-para-hacer-ima%CC%81genes-increi%CC%81bles-1024x538.png" alt="" width="300" height="300">
          <img v-if="mostrarImagen" src="https://i.blogs.es/e1feab/google-fotos/1366_2000.jpg" alt="" width="300" height="300">
    </div>
    <script src="https://unpkg.com/vue@3"></script>
    <script>
      // Componente holaMundo
      const holaMundo = {
        data() {
          return {
             mostrarImagen : true
          };
        },
        methods: {
        },
        mounted() {},
      };
      Vue.createApp(holaMundo).mount("#app");
    </script>

```
#### Diferencias entre el v-if y el v-show 

- v-if : Si la condición es false , el elemento es eliminado del DOM , se almacena en la memoria por si la condición cambia a true (en ese caso lo vuelve a renderizar) pero NO ESTA EN EL DOM.
- v-show: Utiliza CSS para ocultar o mostrar el elemento. El elemento siempre está en el DOM. Utiliza display:none; para ocultar.

#### ¿ Qué usar en cada situación?
- Si el elemento se muestra y oculta SOLO UNA VEZ cuando carga la página, conviene utilizar el v-if. 
- Si el valor booleano(condición) solo cambia una vez, conviene utilizar el v-if

- Situaciones que se utiliza v-if :
  - Loading
  - Que botones mostrar en el Menu.


- Si la condición cambia dos veces o más, conviene usar el v-show.

:::tip Consejo 
El v-show mejora el rendimiento de la app.
:::



## Propiedades calculadas

- Son como data() pero se actualizan cuando sucede algún cambio en sus dependencias (valores que utiliza la propiedad calculada)
:::tip Explicacion como si fuera POO
Correspondería a los métodos GET.
:::

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <!-- Compiled and minified CSS -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
    />

    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

   
  </head>
  <body>
    <div id="app" >
       <div class="container" style="padding-top:50px;">
           <input type="text" v-model="n1">
           <input type="text" v-model="n2">
           <h5>La suma es {{resultado}}</h5>
      </div>
       </div>
    </div>
    <script src="https://unpkg.com/vue@3"></script>
    <script>
      // Componente holaMundo
      const holaMundo = {
        data() {
          return {
             n1 : 0,
             n2 : 0
             
          };
        },
        // Propiedades calculadas
        computed: {
          // nombrepropiedad : funcion 
          // La funcion debe devolver algo (el valor de la propiedad)
             resultado : function() {
              return parseFloat(this.n1) + parseFloat(this.n2);
             }
        }
      };
      Vue.createApp(holaMundo).mount("#app");
    </script>
  </body>
</html>

```
:::tip Observacion 
- Las propiedades calculadas van en la propiedad computed
- Cada propiedad recibe una función que debe devolver algo.
- Lo que devuelve la función es el valor de la propiedad calculada.
- En este ejemplo la propiedad resultada depende (tiene dependencia) de la variable n1 y n2. Si alguna de estas variables cambia, se actualiza el valor de la propiedad.
- Cuando se actualiza, recurre a la reactividad de VUE.
:::

#### Conclusion:
- Es una propiedad que almacena un valor en cache
- Cuando los valores(variables) que utiliza dicha propiedad cambia, vuelve a calcular el valor y lo almacena en cache.

:::warning
No se recomienda implementar operaciones pesadas en las propiedades calculadas.
:::

## Ciclo de vida de Vue
- [link 1](https://vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram)
- [link 2](https://www.manejandodatos.es/2021/04/life-cycle-of-components-in-vue/)


:::tip Links
- Todos representan el mismo ciclo de vida
- Pueden utilizar “otro nombre” para referirse a lo mismo.
- Ej. New Vue === Vue.createApp
:::

#### Observacion de las imagenes 
- Se hace un ciclo infinito con las actualizaciones del DOM VIRTUAL
- $el hace referencia a la aplicación (al contenedor DIV que renderiza la APP)
- Desmontar un componente sirve para liberar memoria. Se recomienda usarlo en aplicaciones grandes.

### Eventos
```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <!-- Compiled and minified CSS -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
    />

    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

   
  </head>
  <body>
    <div id="app" >
       <input type="text" v-model="nombre">
       <h2>{{nombre}}</h2>
       </div>
    </div>
    <script src="https://unpkg.com/vue@3"></script>
    <script>
      // Componente holaMundo
      const holaMundo = {
        data() {
          return {
             nombre : 'fede'
             
          };
        },
        beforeCreate(){
          // En esta etapa los datos todavia no existen.
          console.log('Antes de ser creado . Nombre contiene  ' + this.nombre);
          console.log(document.querySelector('#app').innerHTML);
        } ,
        created() {
// En esta etapa , ya tenemos acceso a los datos
          console.log('Ha sido creado . Nombre contiene  ' + this.nombre);
          console.log(document.querySelector('#app').innerHTML);
        } ,
        beforeMount(){
          console.log('Antes de ser  montado . Nombre contiene  ' + this.nombre);
          console.log(document.querySelector('#app').innerHTML);
        } ,
        mounted() {
          // En esta etapa , ya se   renderizo  la aplicacion (componente) en el contenedor HTML
          console.log('Ha sido montado . Nombre contiene  ' + this.nombre);
          console.log('Se empieza a renderizar ' + document.querySelector('#app').innerHTML);
        } , 
        beforeUpdate() {
          // this.nombre tiene el mismo valor que en el updated()
          console.log(this.nombre)
          console.log('Antes de actualizar . Valor actual  ' +  document.querySelector('#app').innerHTML);
        } ,
        updated() {
            // this.nombre tiene el mismo valor que en el beforeUpdate()
          console.log(this.nombre)
          console.log('Se actualizo . Valor Nuevo  ' +  document.querySelector('#app').innerHTML);
        } ,
        beforeUnmount() {
          console.log('Esta a punto de desmontarse . Nombre contiene  ' + this.nombre);
          console.log(document.querySelector('#app').innerHTML);
        } ,
        unmounted() {
          console.log('Ha sido desmontado . Nombre contiene  ' + this.nombre)
          // En esta etapa ya no existe la aplicacion(componente) en el contenedor HTML
          console.log(document.querySelector('#app').innerHTML);
        }
      };
      const app = Vue.createApp(holaMundo);
      const mountedApp = app.mount("#app");
      // Se desmonta la app
      app.unmount()
    </script>
  </body>
</html>

```
:::tip 
También pueden ser asíncronos los eventos mounted , unmounted , etc.

:::
## Componente
- Nos permite separar código dentro del frontend.
- Nos permite crear segmentos de vistas.
- Sirve para reutilizar el mismo código.
- Los componentes se suelen usar en el CLI de vue 
- No se recomienda usar componentes si trabajas en un CDN.
- El componente es como una etiqueta html personalizada que va a contener un bloque de etiquetas HTML.

#### metodo component(X , X)
- Con el método component creamos un componente
- Tiene dos parametros:
1.	[Nombre del componente](https://es.vuejs.org/v2/guide/components-registration.html)
2.	Un objeto 

- Propiedades del objeto:
1. template : su valor es código HTML en un String 
     -  Ese código HTML representa el bloque de etiquetas HTML que se va a renderizar cuando utilicemos el componente.
2. data: Una funcion que devuelve un objeto con datos ()  ([Es lo mismo que data()](#datos-data))


#### 1 - Creamos un componente: 
```js
<script src="https://unpkg.com/vue@3"></script>
    <script>
      // Componente holaMundo
      const holaMundo = {
        data() {
          return {
            nombre: "fede",
          };
        },
      };
      const app = Vue.createApp(holaMundo);
      //  component("nombre componente" , { 
      //   template : "codigo HTML" , 
      //   data(){
      //     return {datos}
      //   }
      // })
      app.component("componente-uno", {
        template: `<h5>HolAA {{nombre}}</h5>`,
        data() {
          return {nombre : 'Jose'};
        },
      });
      const mountedApp = app.mount("#app");
    </script>

```
#### 2 - Renderizamos el componente: 
- Utilizamos el componente como si fuera una etiqueta HTML.
- El nombre de la etiqueta es el nombre del componente
```html
 <div id="app">
      <componente-uno></componente-uno>
    </div>

```
:::tip Observacion
Estamos renderizando el componente que creamos.
Estamos renderizando el código HTML que contiene el template del componente.
:::

#### Podemos reutilizar el mismo componente.

```html
      <componente-uno></componente-uno>
      <componente-uno></componente-uno>
      <componente-uno></componente-uno>

```
Otro ejemplo:
```html
 <div id="app">
      <componente-uno v-for="i in totalComponente"></componente-uno>
    </div>
    <script src="https://unpkg.com/vue@3"></script>
    <script>
      // Componente holaMundo
      const holaMundo = {
        data() {
          return {
           totalComponente : 5

          };
        },
      };
      const app = Vue.createApp(holaMundo);
      //  component("nombre componente" , { 
      //   template : "codigo HTML" , 
      //   data(){
      //     return {datos}
      //   }
      // })
      app.component("componente-uno", {
        template: `<h5>HolAA {{nombre}}</h5>`,
        data() {
          return {nombre : 'Jose'};
        },
      });
      const mountedApp = app.mount("#app");
    </script>

```
## Props
- Es una forma de enviarle datos al componente.
- Es para pasar datos del componente “padre” al componente “hijo”
- Parecen atributos que estamos creando.
- Se definen con la propiedad props cuyo valor es un objeto.
- Cada propiedad del objeto representa el nombre de la prop y su valor es el tipo de dato que admite.
- Sintaxis:
```js
Props: {
 Nombreprops : tipodato,
Nombreprops : tipodato,
Nombreprops : tipodato,
}
```

Ejemplo
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <!-- Compiled and minified CSS -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
    />

    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
  </head>
  <body>
    <div id="app">
      <!-- A la props que creamos la tratamos como un atributo -->
      <componente-uno v-for="item in totalComponente" :post="item"></componente-uno>
    </div>
    <script src="https://unpkg.com/vue@3"></script>
    <script>
      // Componente holaMundo
      const holaMundo = {
        data() {
          return {
           totalComponente : [
             {
              title: 'TITULO 1' ,
              body :  'BODY 1'
             } ,   {
              title: 'TITULO 2' ,
              body :  'BODY 2'
             } ,  {
              title: 'TITULO 3' ,
              body :  'BODY 3'
             } ,  {
              title: 'TITULO 4' ,
              body :  'BODY 4'
             } ,  {
              title: 'TITULO 5' ,
              body :  'BODY 5'
             } , 
           ]

          };
        },
      };
      const app = Vue.createApp(holaMundo);
      //  component("nombre componente" , { 
      //   template : "codigo HTML" , 
      //   data(){
      //     return {datos}
      //   }
      // })
      app.component("componente-uno", {
        template: `<div class="card-panel teal white-text">
            <h5>{{post.title}}</h5>
            <h5>{{post.body}}</h5>
          </div>`,
        data() {
          return {nombre : 'Jose'};
        },
        props: {
               post: Object
        } 
      });
      const mountedApp = app.mount("#app");
    </script>

  </body>
</html>

```
:::tip Observacion 
- Creamos una prop llamada post de tipo Object en el componente-uno.
- Le pasamos la prop(le pasamos un dato) al componente-uno  a través de una especie de “atributo”.
- Para pasar props:           v-bind:nombreprops=”valor”.
- Desde el componente padre (holamundo) , le estamos pasando información al componente hijo(componente-uno)
- El componente hijo maneja la información que le pasamos (una prop) como una variable.
- Los atributos dinámicos tienen acceso a la variable item.
:::

### Modificar una props 
- Las props son de SOLO LECTURA
- NO SE PUEDEN MODIFICAR

#### Manera para modificarla:
- A la props se la asignas a una variable de data()
```js
 props:{
    usuario:String
 },
 data(){
    return {
        miUsuario : this.usuario
    }
 }

```

:::tip Observacion
- Ya podes modificar la variable miUsuario  a tu gusto en el componente.
- [Ver ejemplo completo – Redirrecionar a la actividad Separacion de componente](./actividadbasica##separacion--de-componentes)

:::

## Ref
- Sirve para referenciar componentes

:::tip warning 
El código que se utiliza para los ejemplos corresponde a la [Actividad Separación de componentes](./actividadbasica##separacion--de-componentes)
:::

#### Explicacion:

- Sintaxis: &lt;componente ref=”nombrevariable”>
- Explicación: A la variable se le asignara una referencia del componente. Similar a aplicar un getElementById() DEL COMPONENTE.
- A través de la referencia tenes acceso a todos los métodos y propiedades del componente.


 #### Ejemplo 

#### 1 - Creamos un metodo en el componente hijo

menu.components.js


```js
data(){
    return {
        miUsuario : this.usuario
    }
 },
 methods:{
    saludarDesdeHijo(nombre){
        console.log('Console log del componente hijo')
        console.log('Holaaa  ' + nombre )
    }
 }

```

#### 2 - Hacemos una referencia del componente hijo.


index.html 

-  Lo que esta adentro del div cuya id es app es el “template” del componente padre

```html
  <menu-componente :usuario="usuario" ref="menuComponent"></menu-componente >
```
:::tip Observacion 
- La variable menuComponent tiene una referencia del componente hijo (menu-componente)
:::

#### 3 - Accedemos a la referencia que creamos 

index.html 

-  Lo que esta adentro del div cuya id es app es el “template” del componente padre

```html
  <div class="row">
          <button class="btn indigo darken-4" type="button">Registrarse</button>
        </div>
        <div class="row">
          <button class="btn indigo darken-4" type="button" @click="llamar">Llamar</button>
        </div>
      </div>

```
Main.js

- Tiene la lógica del componente padre

```js
 methods:{
    llamar(){
        // this.$refs = Contiene todas las referencias en un objeto
        // this.$refs.nombrevariable
        // nombrevariable = es la variable que contiene la referencia
       this.$refs.menuComponent.saludarDesdeHijo('Perez');
    }
   }

```

:::tip Observacion
- El método llamar invoca el método del componente hijo a través de la referencia menuComponent
:::

#### Ejemplos con la referencia menuComponent

Accedemos a la referencia desde el template:
```html
   <div class="row">
          <button class="btn indigo darken-4" type="button" @click=" this.$refs.menuComponent.saludarDesdeHijo('Perez');">Llamar</button>
        </div>

```

Podemos modificar un dato del componente hijo:

main.js
```js
 methods:{
    llamar(){
        // this.$refs = Contiene todas las referencias en un objeto
        // this.$refs.nombrevariable
        // nombrevariable = es la variable que contiene la referencia
       this.$refs.menuComponent.saludarDesdeHijo('Perez');
       this.$refs.menuComponent.miUsuario = 'Perez';
    }
   }

```
Index.html

-  Lo que esta adentro del div cuya id es app es el “template” del componente padre
  
  ```js
   <div class="row">
          <button class="btn indigo darken-4" type="button" @click="llamar">Llamar</button>
        </div>

  ```