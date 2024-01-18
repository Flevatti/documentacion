---
sidebar_position: 11
---

# Tipos de datos / Objetos /  API
## Typeof
```js
    typeof X
```
- El operador typeof devuelve un String con el tipo de dato que es X
- Devuelve el tipo de dato de X.
  
Ejemplo:
```js
    // Devuelve string
   console.log(typeof "String")
   // Devuelve number
   console.log(typeof 5050)
   // Devuelve object
   console.log(typeof {})

```


## symbols
- Es un tipo de dato que sirve para crear identificadores únicos
- Se define con el constructor
```js
 const id = Symbol();
           console.log(id);

```
- El constructor tiene un argumento que es un String
- Este String sirve para identificar el símbolo en la consola cuando lo conviertas en un String.
```js
          const id = Symbol("etiqueta 1");
           console.log(id);

```
#### Usos
- Como propiedad de un objeto
```js
           const id = Symbol("etiqueta 1");
           const objeto = {
             [id] : 3686
           }
           // No accedemos al dato
           console.log(objeto.id);
          //  Accedemos al dato
           console.log(objeto[id]);

```
- Podemos crear una funcion y hacer que viva la id en un scope

```js
  function crearObjeto() {
      // La id solo existe en este scope
      const obj = {};
      const id = Symbol('identificador');
      obj[id] = 0;

      return {
        setId(valor) {
          obj[id] = valor;
        },
        getId() {
          return obj[id];
        },
        get() {
          return obj
        }


      }
    }
         const objeto = crearObjeto();
         objeto.setId(64);
         console.log(objeto.get());

```
## Iterables / Iteradores

#### Iterable 
- Es una estructura de dato lineal, que hace que sus datos sean públicos y se pueda recorrer
- Ej. Arrays , String , Map , Set , algunos elementos del DOM.
- Un objeto/elemento/tipo de dato que es iterable tiene la propiedad [Symbol.iterator]
```js
  const iterable = [1,2,3,4,5];
  // Comprobamos que es iterable
  console.log(iterable[Symbol.iterator]);

```
#### Iterador
- Es el apuntador, que va recorriendo los elementos de la estructura de dato lineal.
- Es el mecanismo por el cual se recorre los elementos.
- Hay varios mecanismos:
   - Desestructuración 
   - Métodos for  y for of 
   - metodo array.from 
   - spread operator (…)  
   -  promesas
   - forEach
- Tambien existe un  “mecanismo integrado” el cual veremos a continuación

#### Como Acceder al iterador “Integrado” que contiene un iterable
```js
  const iterable = [1,2,3,4,5];
  // Accedemos al iterador del iterable
//  Con  X[Symbol.iterator]() accedemos al iterador de X
  const iterador = iterable[Symbol.iterator]()
   console.log(iterador);

```
#### metodo next() del iterador
- Nos devuelve un objeto con dos propiedades:
  - Value : Es el valor del elemento iterable . La primera vez que se ejecuta es el valor del índice/posición 0 del iterable. La segunda vez es el valor del índice/posición 1 del iterable y así consecutivamente.
  - Done : Indica si ya se recorrió todos los elementos.
```js
  // Devuelve el valor de  iterable[0]
   console.log(iterador.next());
     // Devuelve el valor de  iterable[1]
   console.log(iterador.next());
     // Devuelve el valor de  iterable[2]
   console.log(iterador.next());
      // Devuelve el valor de  iterable[3]
   console.log(iterador.next());
      // Devuelve el valor de  iterable[4]
   console.log(iterador.next());
      // Devuelve el valor de  iterable[5]
   console.log(iterador.next());

```
  #### Recorremos al iterable de forma dinámica:
  - Usamos la propiedad booleana done que indica cuando se terminó de recorrer.
  - Next()  es un apuntador que guarda  en que elemento del objeto iterable se quedó.
```js
  const iterable = [1,2,3,4,5];
  const iterador = iterable[Symbol.iterator]()
  // Tiene el valor 1
   let next = iterador.next();
   while(!next.done) {
       console.log(next.value);
       next = iterador.next();
   }

```
## Set
- Es similar a una array pero contiene datos únicos.
- Es un arreglo que solo acepta valores únicos.

:::tip  Recorda que cuando se crea un objeto:
- A cada objeto se le asigna un espacio de memoria.
- Cada objeto tiene una referencia a ese espacio de memoria
- Cuando comparas dos objetos , estas comparando las referencias de cada uno. Por lo tanto cada objeto es único y NO PUEDE SER IGUAL AL OTRO.


:::

#### Como crear un set
- Se hace con el constructor que tiene como argumento un array
- El array que se pasa es el valor que contiene el set que se crea.
```js
const set = new Set([1,2,3,4,5,1 , true,false,true,{} , {} , "String"])
    console.log(set);

```
:::tip Observacion
- Es como un array, pero se eliminan los datos repetidos.
- Si el set detecta un valor repetido en el constructor o cuando se agrega un nuevo valor, lo elimina.
:::
### propiedad size 
- Devuelve el tamaño del set.
```js
 console.log(set.size);
```
### Metodos
#### add(X)
- Añade el valor X al set
```js
  //  un set vacio
   const set = new Set()
   set.add(1)
   set.add(2)
   set.add(3)
   set.add(4)
   set.add(5)
    console.log(set);
```
#### delete(X)
- Elimina el valor X del set.
```js
   set.delete(3);
  console.log(set);

```
#### has(X)
- Devuelve true si el valor X existe en el set
```js
  
  console.log(set.has(2));

```
#### clear()
- Elimina todos los valores del set

```js
   set.clear()
  console.log(set);

```


### Como recorrerlo

- Con el for of
```js
   for(item of set) {
    console.log(item);
   }

```
- Con el forEach
  ```js
    set.forEach(item => {
    console.log(item);
  })

  ```
- Con el Array.from()

:::tip  Array.from()
- El método Array.from() crea una nueva instancia de Array a partir de un objeto iterable.
- Convierte un objeto iterable en un array
- [info](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
:::
  ```js
    //  Al set lo convierto en un array y accedo al indice 0
  console.log(Array.from(set)[0]);

  ```
  ```js
    const arrayDelSet = Array.from(set);
  console.log(arrayDelSet[0]);

  ```
## Map

- Es un objeto que almacena pares  de clave-valor.
- Es parecido a un objeto (Ambas almacenan pares-valores)

| Objeto                                                         | Map                                                   |
| -------------------------------------------------------------- | ----------------------------------------------------- |
| Almacenan   clave-valor                                        | Almacenan   clave-valor                               |
| Las claves  son String O Symbols                               | Las claves  puede ser de cualquier tipo de dato.      |
| Se necesita  recorrerlo para saber el tamaño.                  | Tiene una funcion llamada size() para saber el tamaño |
| Para iterarlo  se necesita primero las claves y luego iterarlo | Es iterable                                           |
| Tiene un prototipo                                             | No tiene un prototipo                                 |

:::warning
- Las claves de un map  que se definen por defecto pueden tener conflicto con la clave de un objeto
:::

#### Sintaxis para crear un map

```js
New map(X)
```
- X debe ser algo iterable, puede ser un array o cualquier otro objeto iterable con elementos clave-valor.

Ejemplo:
```js
   // Creamos maps con arrays
      // Es un array donde cada elemento es un array que contiene clave-valor
      const mapCodigoPostales = new Map([
        // Cada array tiene dos elementos
        //    [Clave , Valor]
        [49, "Zamora"],
        [37, "Salamanca"],
        [47, "Vallado"],
      ]);
      const mapCodigoPostalesLetra = new Map([
        // Cada array tiene dos elementos
        //    [Clave , Valor]
        ["ZA", "Zamora"],
        ["SA", "Salamanca"],
        ["VO", "Vallado"],
      ]);
      console.log(mapCodigoPostales);
      console.log(mapCodigoPostalesLetra);

```
### Propiedad size
- Te devuelve el tamaño del map
```js
   //  La propiedad size te devuelve el tamaño del map
     console.log("Tamaño" , mapCodigoPostales.size)
```
### Metodos
#### get(X)
 - Devuelve el valor que contiene la clave X 
 - Te devuelve undefined si no existe la clave
```js
 // El metodo get(X) devuelve el valor que contiene la clave X 
    // Te devuelve undefined si no existe la clave

     console.log("Obtenemos un valor" , mapCodigoPostales.get(49))

```
#### set(clave , valor)
- Establece un valor a una clave.
- Si la clave ya existe , se remplaza el valor
- Si la clave no existe , se crea junto con su valor correspondiente
```js
   // El metodo set establece un valor a una clave.
    // Si la clave ya existe , se remplaza el valor
    // Si la clave no existe , se crea junto con su valor correspondiente
    // set(clave , valor)
    // Creamos un clave-valor
    mapCodigoPostales.set(20 , "Palermo");
    // Modificamos el valor de la clave 20
    mapCodigoPostales.set(20 , "Cuidad del Este");
    console.log(mapCodigoPostales);

```

#### has(X)
- Devuelve true si encuentra el valor de la clave X
```js
     // has(X) = Devuelve true si encuentra el valor de la clave X
      console.log(mapCodigoPostales.has(49))
      console.log(mapCodigoPostales.has(50))

```
#### delete(x)
- Elimina la clave-valor que pertenece a la clave x
- Devuelve true si fue eliminado correctamente
```js
 //delete(x) = elimina la clave-valor que pertenece a la clave x
    // Devuelve true si fue eliminado correctamente
     console.log(mapCodigoPostales.delete(49));
     console.log(mapCodigoPostales);

```
#### clear()
- Elimina todas las clave-valor del map
```js
  //clear() = Elimina todas las clave-valor del map
     console.log(mapCodigoPostales.clear());
     console.log(mapCodigoPostales);

```
### Iterar

#### keys()
-  Devuelve un iterador con las claves del mapa ordenadas

```js

  //  keys: - Devuelve un iterador con las claves del mapa ordenadas
        const itClaves = mapCodigoPostales.keys();
        console.log(itClaves.next().value)
        console.log(itClaves.next().value)
        console.log(itClaves.next().value)
        console.log(itClaves.next().value)

```
#### values()
- Devuelve un iterador con los valores del mapa ordenados
```js
        //  values: devuelve un iterador con los valores del mapa ordenados
        const itValores = mapCodigoPostales.values();

```
#### entries()

- Devuelve un iterador con los pares clave-valor del mapa ordenados
```js
        // entries : devuelve un iterador con los pares clave-valor del mapa ordenados
         const itPares = mapCodigoPostales.entries();

```

:::tip 
Las tres formas devuelven un iterador y tienen los mismos métodos (next, etc).
:::
## Weakmap Y Weakset

- Solo pueden almacenar referencias débiles.
- Las claves deben ser de tipo objeto(En caso del weakSet, el valor también).
- Si la clave (En caso del weakSet, el valor también) es null/undefined, se elimina el clave/valor del weakmap/weakset.
- Tienen los mismos métodos que sus correspondientes versiones.
- Weakmap tiene los métodos de map.
- WeakSet tiene los métodos de set.

:::tip Las claves deben ser de tipo objeto
 - El objeto lo debe contener alguna variable.
:::
#### Defectos
- No son objetos iterables.
- No podemos eliminar todos los elementos . No tenemos acceso a un método clear().
- Solo podemos eliminar de uno en uno.
- No podemos verificar su tamaño.

#### WeakSet
- El constructor no tiene el argumento de set.
- Se deben añadir los valores de uno en uno con el método add.

:::tip metodo add(X)
- X debe ser una referencia débil, un objeto.
- El objeto debe estar en alguna variable (debe existir una referencia)
:::
```js
   const ws = new WeakSet()
   const valor1 = {"valor1" : 1};
   const valor2 = {"valor2" : 2};
   const valor3 = {"valor2" : 3};
   ws.add(valor1)  
   ws.add(valor2)  
   ws.add(valor3)  
   console.log(ws);
   // Tiene los metodos de set
   console.log(ws.has(valor1));
   ws.delete(valor2);
   console.log(ws);

```
#### Cuando uno de los valores es null o undefined , se elimina  del WeakSet
```js
   const ws = new WeakSet()
   let valor1 = {"valor1" : 1};
   const valor2 = {"valor2" : 2};
   const valor3 = {"valor2" : 3};
   ws.add(valor1)  
   ws.add(valor2)  
   ws.add(valor3)  
   console.log(ws);

   setInterval(()=> console.log(ws) , 1000)

   setTimeout(() => {
     valor1 = null;
   } , 5000)

```
#### WeakMap
- El constructor no tiene el argumento de map.
- Se deben añadir los valores de uno en uno con el método set.

:::tip metodo set(X,Y)
- X : Es la clave ,  debe ser una referencia débil, un objeto.
- El objeto debe estar en alguna variable (debe existir una  referencia)
- Y : es el valor de la clave.
:::

```js
   const wm = new WeakMap()
   let llave1 = {};
   const llave2 = {};
   const llave3 = {};
   wm.set(llave1 , 1)
   wm.set(llave2 , 2)
   wm.set(llave3 , 3)
   console.log(wm);

```
Tiene los mismos métodos que el map:

```js
   console.log(wm.has(llave1));
   console.log(wm.get(llave1));
   console.log(wm.delete(llave1));
   console.log(wm)

```

#### Cuando una de las claves es null o undefined , se elimina  del WeakMap (la clave-valor)
```js
   const wm = new WeakMap()
   let llave1 = {};
   const llave2 = {};
   const llave3 = {};
   wm.set(llave1 , 1)
   wm.set(llave2 , 2)
   wm.set(llave3 , 3)

   setInterval(()=> console.log(wm) , 1000)

   setTimeout(() => {
     llave1 = null;
   } , 5000)

```
## Metodos de Console 
- Console es un objeto que nos permite manipular la consola del navegador.
### log(A , B , ...)
- Sirve para escribir un mensaje  en la consola . Tambien se suele utilizar para mostrar la informacion  que contiene  algun tipo de dato (objeto , array , string , etc )
- Podes  mostrar un mensaje(informacion) diferente en cada parametro (Reciben cualquier tipo de dato).
- Como minimo , se ejecuta con un parametro.
```js
 console.log(“mensaje”); 
```

```js
console.log("hola esta es la consola 👌");
```

### table(X)
- Te permite mostrar un objeto/array en una tabla
- X debe ser un array o un objeto
```js
      const array = ["apples", "bananas"]
      console.table(array);
```
:::warning
- A veces Chrome no genera la tabla , para solucionar este problema debe refrescar la pagina.
- Puede pasar que no se genere una tabla para colecciones de tipos primitivos (matriz de cadenas, objeto único), solo colecciones de tipos compuestos (matriz de matrices/objetos, objeto cuyas propiedades son objetos).
:::
### time() / timeEnd()
- time() Inicia un temporizador 
- timeEnd() finaliza el temporizador , mostrando por consola el tiempo , en milisegundos , transcurrido desde que se inicio el temporizador.
- Entonces los dos metodos sirven para rastrear cuánto tiempo lleva una operación.
- Ambos reciben como argumento un string que seria la "ID" del temporizador que va a iniciar o eliminar. Esto es util cuando usamos varios temporizadores al mismo tiempo.
```js
 console.time("temporizador")
    alert('Mensaje');
    console.timeEnd("temporizador");
```
### count()
- Registra el numero de veces que count() se ha llamado.
- Tambien como argumento recibe un string que seria la "ID". Entonces contaria las veces que se llama con X id.
```js
 console.count("ID");
   console.count("ID 2");
   console.count("ID");
```
### trace()
- Muestra un seguimiento que muestra cómo terminó el código en un punto determinado.
- Muestra el camino de ejecución del codigo.
```js
  function foo() {
  function bar() {
    console.trace();
  }
  bar();
}

foo();
```
### warn() / error()
- Es como log()
- warn() es para escribir mensajes de advertencias
- error() es para escribir mensajes de errores
```js
   console.warn('Advertencia');
   console.error('Error');
```
### group() / groupEnd()
- group() Crea un grupo en la consola. Los mensajes que se escriban se asignaran a este grupo.
- groupEnd(): Cierra el grupo . Los mensajes que se escriban se asignaran al grupo de nivel superior o a ningun grupo.
- Se puede crear varios niveles de grupos.
- Ambos reciben como argumento un string que seria la "ID" del grupo que va a crear o cerrar.

```js
  console.group('Grupo Mensajes')
    console.log('Mensajes')
    console.groupEnd('Grupo Mensajes')
    console.log('Fuera del grupo')
```

## Metodos de Object
- La clase Object tiene un conjunto de métodos estáticos que puede sernos utils.

:::tip Métodos estáticos
- Es un método que se puede ejecutar directamente desde la clase
- El método lo obtiene la Clase
:::

#### keys(X)
- Nos devuelve un listado/array de Strings con cada una de las claves del objeto X

```js
      const persona1 = {
          nombre : "Luis",
          apellido: "Garcia",
          edad : 30
        }
   
     console.log(Object.keys(persona1));

```
#### values(X)
- Nos devuelve un listado/array de los valores del objeto X
```js
        const persona1 = {
          nombre : "Luis",
          apellido: "Garcia",
          edad : 30
        }
   
     console.log(Object.values(persona1));

```
#### entries(X)
- Nos devuelve un array  con arrays a partir del objeto X
- Nos devuelve un array donde cada elemento es un array con dos índices:
  - Índice 0: Clave
  - indice  1 : valor

```js
        const persona1 = {
          nombre : "Luis",
          apellido: "Garcia",
          edad : 30
        }
   
     console.log(Object.entries(persona1));

```

#### fromEntries(X)
- Hace lo inverso del método entries()
- Convierte el array con Arrays (seria la X -- lo que devuelve el método entries)en un objeto.

```js
        const persona1 = {
          nombre : "Luis",
          apellido: "Garcia",
          edad : 30
        }
      const entriesPersona = Object.entries(persona1);
     console.log(Object.fromEntries(entriesPersona));

```
:::tip info
- [Object.fromEntries()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries)
:::

#### Metodo assign(X , Y )
- Sirve para copiar/clonar un objeto
- X = En qué lugar “pegamos” el objeto que copiamos. En donde insertamos el objeto del argumento Y.
- Y = Que copiamos/clonamos. El objeto a copiar/clonar.

```js
      const persona1 = {
          nombre : "Luis",
          apellido: "Garcia",
          edad : 30
        }

        const personaClonada = {}
    
     Object.assign(personaClonada , persona1);

     console.log("Persona 1 " , persona1);
     console.log("Persona Clonada" , personaClonada);

```
:::tip Observacion
Ambos objetos son iguales.

:::

:::warning
- Nos permite clonar objetos simples donde los valores son primitivo (o derivado de ello)
- Los objetos anidados no se copian
- SOLO SE COPIAN las propiedades de primer nivel (solo se requiere de un punto para acceder a estas propiedades Ej. Objeto.propiedad)
- Pero las propiedades de SEGUNDO NIVEL o mas (se requiere de mas de un punto) se  copian por referencia.
:::

A tener en cuenta:
```js
      const persona1 = {
          nombre : "Luis",
          apellido: "Garcia",
          edad : 30 ,
          direccion : {
            calle: "Calle 5320"
          }
        }

        const personaClonada = {}
    
     Object.assign(personaClonada , persona1);
        persona1.direccion.calle = "Calle 2020"
     
     console.log("Persona Clonada" , personaClonada);

```

:::tip Observacion
- Estamos modificando la propiedad calle de ambos objetos ya que es de “segundo nivel” ( Se utilizan dos puntos Ej.  Objeto.propiedad.propiedad)
- La propiedad calle de personaClonada tiene una referencia de la misma propiedad en persona1.
:::
### defineProperty()
- El método estático Object.defineProperty() define una nueva propiedad sobre un objeto, o modifica una ya existente, y devuelve el objeto modificado.

Sintaxis:
```js
Object.defineProperty(obj, prop, descriptor)
```
- Obj : El objeto sobre el cual se define la propiedad
- Prop : El nombre de la propiedad a ser definida o modificada
- Descriptor: El descriptor de la propiedad que está siendo definida o modificada.

#### Descriptores
- En la forma tradicional de crear una propiedad, el descriptor toma valores específicos.
- Existen dos tipos de descriptores: De datos y de acceso. 
- Un descriptor de datos define una propiedad que tiene un valor, el cual puede ser o no modificado. 
- Un descriptor de acceso define una propiedad mediante un par de funciones getter-setter que describe como se obtiene o se modifica el contenido de dicha propiedad. 
- Un descriptor debe de ser de uno de estos dos tipos; no puede ser ambos.
  
#### Ambos tipos de descriptores son objetos y comparten lo siguiente
| Propiedad    | Valor                                                                                                                                                         |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Configurable | Es    true si el tipo de descriptor de la propiedad puede modificarse y si la propiedad puede ser eliminada del correspondiente objeto. Por defecto es false. |
| Enumerable   | Es    true si dicha propiedad se muestra durante la enumeración de las propiedades del objeto correspondiente. Por defecto es false.                          |

#### Un descriptor de datos tiene además lo siguiente
| Propiedad | Valor                                                                                                                                      |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Value     | El valor asociado a la propiedad. Puede ser cualquier tipo valido de JavaScript (number, object, function, etc). Por defecto es undefined. |
| Writable  | Es   true Indica si el valor de la propiedad puede modificarse con el operador de asignación . Por defecto es false.                       |

#### Un descriptor de acceso además tiene lo siguiente
| Propiedad | Valor                                                                                                                                                                                                |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| get       | Una función cuyo valor retornado será el que se use como valor de la propiedad. Su valor por Default es undefined                                                                                    |
| set       | Una función que recibe como único argumento el nuevo valor que se desea asignar a la propiedad y que devuelve el valor que se almacenará finalmente en el objeto. Su valor por Default es undefined. |

:::warning
- Hay que tener en cuenta que estas opciones también pueden heredarse; es decir, las opciones de la propiedad se han podido establecer en el prototipo de una clase de la que hereda el objeto. 
- De modo que si queremos asegurarnos unos valores por defecto tenemos tres opciones:
  - [Congelar el Object.prototype con Object.freeze](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)
  - Definir todas las opciones explícitamente.
  - Establecer null la propiedad \__proto__
:::

Ejemplo usando \__proto__ 
```js
 const obj = {};
      Object.defineProperty(obj , 'key' , {
        __proto__: null  , 
        value:'static'
      });
      console.log(obj);

```
Ejemplo definiendo todo explícitamente
```js
    const obj = {};
      Object.defineProperty(obj , 'key' , {
        enumerable: false,
  configurable: false,
  writable: false,
  value: 'static'
      });
      console.log(obj);

```
Ejemplo con freeze()
```js
    const obj = {};
      function crearPropiedad(value) {
        var d =  {
          enumerable: false,
          writable: false,
          configurable: false,
          value: null,
        };

        d.value = value;
        return d;
      }
      // ... y ...
      Object.defineProperty(obj, "key", crearPropiedad("static"));

      // Si está disponible freeze, previene añadir o eliminar
      //del prototipo del objeto las propiedades
      // (value, get, set, enumerable, writable, configurable)
      (Object.freeze || Object)(Object.prototype);
      console.log(obj);

```
:::tip info
- [developer mozilla](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

:::
##  Media queries con Window
[Son de sobra conocidas las CSS Media queries, que nos permiten detectar distintas características de los dispositivos para aplicar unos estilos u otros en función de ellas.](../CSS#media-queries-para-dispositivos-móviles) 

**Es menos habitual que desde Javascript necesitemos detectar si ciertas medias queries se están evaluando positivamente**, pero también nos podemos ver en necesidad de ello
  
Pongamos por ejemplo que tenemos un código de un banner que solamente queremos que se vea en ordenadores de escritorio. Este código hace llamadas asíncronas para solicitar la creatividad al servidor de banners, pero si el banner no se va a visualizar, ¿Qué sentido tiene hacer esas llamadas al servidor de banners?

Si el banner siempre aparece en la página y simplemente lo ocultamos y mostramos con CSS, entonces, por mucho que no se vea en las pantallas de los móviles, se estaría haciendo la solicitud del banner y gastando un ancho de banda innecesario. En lugar de eso, **podemos simplemente detectar con Javascript cuándo estamos en un ordenador de escritorio, para colocar dinámicamente el código del banner solamente en ese caso**.

### Método matchMedia 
- El método que vamos a usar para poder comprobar si una media query se cumple se llama matchMedia(). 
- Está dentro del objeto "window".
- El metodo matchMedia recibe un media query (como String / entre comillas)
```js
      var mediaqueryList = window.matchMedia("(min-width: 500px)");
    console.log(mediaqueryList);

```
- El método matchMedia() te devuelve un objeto "mediaquery list". Básicamente te informa sobre la mediaquery que se ha comprobado y su valor (si se cumple o no)
- Si queremos ver si esta media query se cumple en un momento dado, simplemente tenemos que evaluar la propiedad "matches" de este objeto.
- La propiedad matches tiene un valor booleano, es true cuando el mediaquery se cumple.

```js
    var mediaqueryList = window.matchMedia("(min-width: 500px)");
    if(mediaqueryList.matches) {
  alert('La media query se cumple');
}

```

:::tip 
Ese objeto "mediaqueryList" es dinámico, en el sentido que, si las condiciones del navegador cambian a lo largo del tiempo, también cambiará la propiedad "matches". Por tanto, podría ocurrir que esa evaluación tenga resultados distintos en momentos distintos, si por ejemplo el usuario redimensiona la ventana del navegador.
:::

###  Manejador de evento 
**Lo más seguro es que en tu aplicación quieras estar pendiente de los cambios en la medias queries que estés evaluando con Javascript, para realizar acciones cuando esto ocurra**.

Claro que podrías preguntar constantemente por el valor de la propiedad "matches", pero **lo más eficiente es asociar un manejador de eventos para realizar acciones justamente cuando esa media query cambie de valor**.

**Esto lo conseguimos con el método "addListener" del objeto mediaqueryList, tal como se puede ver a continuación**.

 ```js
     var mediaqueryList = window.matchMedia("(max-width: 920px)");
    mediaqueryList.addListener( function(EventoMediaQueryList) {
    console.log('Ejecutado el listener', EventoMediaQueryList);
});

 ```

:::tip Observación
- El metodo addListener solo recibe un manejador de evento(funcion).
- En este caso hemos asociado una función anónima como manejador de eventos. En esa función recibimos un objeto de tipo "MediaQueryListEvent", que nos ofrece información detallada sobre el evento que se ha producido.
:::

  #### método removeListener()
  - Puedes eliminar el manejador de eventos en cualquier momento, con el método removeListener(). Solo que para usarlo no puedes haber asociado el manejador de eventos con una función anónima como hemos hecho antes.

```js
var mediaqueryList = window.matchMedia("(orientation: portrait)");

function manejador(EventoMediaQueryList) {
  if(EventoMediaQueryList.matches) {
    alert('La media query ahora se cumple');
  } else {
    alert('La media query ya no se cumple');
  }
}

// asociamos el manejador de evento
mediaqueryList.addListener(manejador);

// quitamos el manejador de evento para dejar de recibir notificación de cambios
mediaqueryList.removeListener(manejador);

```

:::warning

- En desuso: esta función ya no se recomienda. Aunque es posible que algunos navegadores aún lo admitan, es posible que ya se haya eliminado de los estándares web relevantes, que esté en proceso de eliminación o que solo se conserve por motivos de compatibilidad.
- Se recomienda:
  ```js
      var mediaqueryList = window.matchMedia("(max-width: 920px)");
    mediaqueryList.addEventListener( 'change' , function(EventoMediaQueryList) {
    alert('Ejecutado el listener');
});

  ```

:::


## MutationObserver

- MutationObserver establece un mecanismo para reaccionar ante cambios en el DOM
- Constructor para crear una instancia de mutation observer:
```js
new MutationObserver( callback)
```
- callback : La función que será llamada en cada mutación del DOM. Tiene dos parametros , el primero es un array de objetos, cada uno del tipo MutationRecord. El segundo es la propia instancia del MutationObserver.

```js
     const observer = new MutationObserver((mutations , instancia) => {
          console.log("Mutations" , mutations);
          console.log("Instancia" , instancia)
         })
         console.log(observer);

```


#### Metodos de la instancia MutationObserver
#### Metodo observe
- Nos permite observar los cambios (mutacion del DOM) de un nodo especifico.
- Si no usamos este método, la instancia nunca ejecutara el callback ya que no esta pendiente de ningún nodo del DOM.
- En pocas palabras, con el observe registramos un nodo en la instancia mutationObserve y este solo esta pendiente de los cambios en los nodos registrados.
- Si algún nodo registrado sufre una mutacion , se ejecutara el callback que especificamos en el constructor.
- Sintaxis:
```js
Observe(target , options)
```
- Target  : El nodo a registrar , el Node sobre el que observar las mutaciones del DOM.
- Options : Un objeto MutationObserverInit , que especificamos que mutaciones del nodo (target) deben ser informadas.

:::warning
Añadir un observador a un elemento es igual que addEventListener, si usted observa el elemento múltiples veces no hace ninguna diferencia. Si se observa dos veces un elemento, el observe callback no se ejecutará dos veces, ni tampoco tendrá que ejecutar disconnect() dos veces. En otras palabras, una vez el elemento es observado, observarlo de nuevo con la misma instancia del observador no hará nada. Sin embargo, si el callback es diferente por supuesto se le añadirá otro observador.
:::

#### Metodo disconnect()

- Evita que la instancia de MutationObserver continue recibiendo notificaciones de modificaciones del DOM. Hasta que el método observe() sea usado de nuevo, la función callback no será invocada.


#### Metodo takeRecords()
- Elimina todos los registros que se crearon con el método observe() de la instancia MutationObserve
- Devuelve su contenido (Un array de MutationRecords)

### objeto MutationObserverInit
- Es el objeto que se pasa como segundo argumento en el observe().
- Todas sus propiedades tienen valores booleanas.
- Especifica a que clase de cambios reaccionar.

#### Propiedades
:::tip Recordatorio
Node es el primer argumento de observe()
:::

- childList : Cambios en los hijos directos del node 
- subtree :  Cambios en todos los descendientes de Node
- attributes : Cambios en los atributos de node
- attributeFilter : Un array de nombres de atributos , para observar solamente a los seleccionados.
- characterData : Establece si debe observar cambios de texto en node.data o no.
- attributeOldValue : Si es true ,  tanto el valor viejo como el nuevo del atributo  son pasado al objeto MutationRecord , si es false pasa solamente el nuevo (necesita la opcion attributes).
- characterDataOldValue: Si es true , tanto el valor viejo como el nuevo de node.data son pasado al objeto MutationRecord , si es false pasa solamente el nuevo (necesita la opcion characterData).

### objeto MutationRecord
- Cuando se detecta algún cambio especificado en el observe() , se ejecuta el callback de la instancia MutationObserver (se especifico en el constructor).
- El callback como primer parámetro tiene un array de objetos de tipo MutationRecord.
- Cada objeto representa una mutacion.
#### Propiedades
#### type
- Tipo de mutacion
- Posibles valores: attributes (atributos) , characterData (dato) , childList ( elementos hijos agregados o quitos)
#### target
- Donde ocurrió el cambio
- Un elemento(nodo) para “attributes”  , un nodo de texto para “characterData" o un elemento(Node) para una mutacion de childList.
#### addedNodes/removedNodes
- Nodos que fueron agregados o quitados
#### previousSibling/nextSibling
- Los nodos “hermanos”, previos y siguientes a los nodos agregados y quitados,
#### attributeName/attributeNamespace
-  el nombre o namespace (para XML) del atributo cambiado.
#### oldValue 
- El valor previo . Es afectado  por las propiedades  attributeOldValue/characterDataOldValue.

Ejemplo:

```html
 <body>
  
    <div contentEditable id="elem">Click and <b>edit</b>, please</div>

    <script>
    let observer = new MutationObserver(mutationRecords => {
      console.log(mutationRecords); // console.log(los cambios)
    });
    
    // observa todo exceptuando atributos
    observer.observe(elem, {
      childList: true, // observa hijos directos
      subtree: true, // y descendientes inferiores también
      characterDataOldValue: true // pasa el dato viejo al callback
    });
    </script>
  </body>

```

:::tip Mas info
- [mutation observe](https://es.javascript.info/mutation-observer)
- [Developer mozilla](https://developer.mozilla.org/es/docs/Web/API/MutationObserver)
:::


## Intersection Observer
- La API Intersection Observer nos permite observar de forma asíncrona los cambios producidos en la intersección entre el elemento observado y un elemento superior (o el propio viewport).
- Es una API que permite detectar cuando un elemento entra en una zona visible.


**Históricamente, detectar cuando un elemento pasaba a ser visible en el viewport era una tarea bastante complicada y costosa de implementar cuando recurríamos a librerías de terceros**. Por ejemplo, este tipo de información era necesaria si queríamos cargar imágenes de forma lazy, implementar el típico scroll infinito o mostrar anuncios al llegar a determinadas partes de la web.

[Todas estas tareas que antiguamente implicaban bucles ejecutándose constantemente y llamadas a métodos como getBoundingClientRect](https://desarrolloweb.com/faq/como-saber-si-un-elemento-esta-en-el-viewport) **pueden ser implementadas de forma mucho más sencilla gracias a esta API**.

**El API Intersection Observer registra una función callback que se ejecuta si un elemento que se desea monitorizar entra o sale de otro elemento (o del viewport), o cuando la cantidad por la que ambos elementos se intersecan cambia en una cantidad requerida**.


#### ¿Cómo usarlo?
- Para usar el intersection observer, primero debemos crear una instacia del mismo y pasarle como primer parametro un callback que se ejecutará cuando el elemento objetivo entre en la pantalla y se le puede pasar un segundo parametro opcional que es la configuración.

#### Parametros del Callback (Primer argumento)

#### entries
- Array de objetos IntersectionObserverEntry que contienen información sobre la intersección.
- Cada objeto IntersectionObserverEntry tiene las propiedades: intersectionRect , intersectionRatio , boundingClientRect , rootBounds , target , time , isIntersecting.
- La propiedad mas utilizada es isIntersecting , que devuelve true si el elemento target se visualiza en el root. (segun el threshold)
- Cada elemento del array representa un objeto target que se registro con el metodo observe()
#### observer
- Referencia al observer que ha lanzado la intersección.


#### Propiedades del objeto de configuración (Segundo argumento)

#### rootMargin
- El margen que se usará para la intersección.
- Especifica el margen alrededor del elemento root. Puede tener valores similares a los de CSS , e.g. "10px 20px 30px 40px" (top, right, bottom, left). Los valores pueden ser porcentajes. Este conjunto de valores sirve para aumentar o encoger cada lado del  del elemento root antes de calcular las intersecciones. Por defecto son todos cero.

#### root
- El elemento que queremos observar
- El elemento que es usado como viewport para comprobar la visibilidad de  algun elemento target. Debe ser ancestro de target. Por defecto es el viewport del navegador si no se especifica o si es null.
:::tip 
 Mas adelante veremos los elementos target
:::

#### threshold
- Este se usa para especificar el porcentaje de intersección que debe haber para que se detecte una intersección y llamé el callback. Puede ser un número, un array de números o null.
- Es un número o un array de números que indican a que porcentaje de visibilidad del elemento target, la función callback del observer debería ser ejecutada. Si usted quiere que se detecte cuando la visibilidad pasa la marca del 50%, debería usar un valor de 0.5. Si quiere ejecutar la función callback cada vez que la visibilidad pase otro 25%, usted debería especificar el array [0, 0.25, 0.5, 0.75, 1]. El valor por defecto es 0 (lo que significa que tan pronto como un píxel sea visible, la función callback será ejecutada). Un valor de 1.0 significa que el umbral no se considera pasado hasta que todos los pixels son visibles.

Ejemplo: 
```js
   let options = {
  root: document.querySelector('body'),
  rootMargin: '0px',
  threshold: 1.0
}
const callback = () => {

}
let observer = new IntersectionObserver(callback, options);
console.log(observer);

```

:::tip Observacion
- Un umbral(threshold) de 1.0 significa que cuando el 100% del elemento target está visible dentro del elemento especificado por la opción root, la función callback es invocada.
- Pero por ahora no registramos ningún elemento target , por lo tanto nunca se invocaría.
:::


#### Metodos de la instancia  IntersectionObserver
#### observe()
- Recibe la referencia del elemento que queremos observar
- Sirve para registrar un elemento target en la instancia.
- Te permite observar un elemento.


#### unobserve()
- Recibe la referencia del elemento que queremos dejar de observar
- Te permite detener la observación del elemento.
- Sirve para eliminar un elemento target de la instancia.

#### disconnect()
- Sirve para dejar de observar todos los elementos.
- Te permite eliminar todos los elementos target de la instancia.

:::tip Scroll Listener vs intersection Observe
La gran diferencia entre usar scroll listener y intersection observer es que el scroll listener se ejecuta cada vez que se hace scroll, se dispara a una velocidad alta, mientras que el intersection observer solo se ejecuta cuando un elemento entra en la pantalla, por lo que la diferencia es el costo de computación, creando un problema de rendimiento.
:::

#### Ejemplo Lazy loading para imágenes

Tal y como vimos anteriormente, el callback de Intersection Observer recibe dos argumentos, entries (con los objetos(que contienen al elemento target) que dispararon el evento) y observer . Lo que haremos será iterar sobre el array entries de cara a realizar la operación de carga de la imagen.

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
  
    <html>
      <body>
        <div>
          <img 
               src="http://placekitten.com/200/300" 
               data-src="https://images.unsplash.com/photo-1572294723031-2aaf17070dbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          >
        </div>
        <div>
            <img 
                 src="http://placekitten.com/200/300" 
                 data-src="https://images.unsplash.com/photo-1572391015781-f29d249b6658?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
            >
        </div>
        <div>
          <img 
               src="http://placekitten.com/200/300" 
               data-src="https://images.unsplash.com/photo-1572391015781-f29d249b6658?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          >
      </div>
      <div>
        <img 
             src="http://placekitten.com/200/300" 
             data-src="https://images.unsplash.com/photo-1572391015781-f29d249b6658?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
        >
    </div>
        <script>
          const callback = (entries, observer) =>
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;
      observer.unobserve(entry.target);
    }
  });

const observer = new IntersectionObserver(callback, {
  rootMargin: "0px 0px 200px 0px"
});

document.querySelectorAll('img').forEach(img => observer.observe(img));
        </script>
      </body>
    </html>
  </body>
</html>

```
:::tip Observación
- Logica del callback:
  - En primer lugar estamos comprobando si se ha detectado la intersección del objeto con el elemento padre (en este caso el viewport) para lo cual empleamos la propiedad isIntersecting .
  - En caso afirmativo, modificamos la propiedad src del elemento y empleamos el objeto observer para dejar de observarlo, pues la operación sólo queremos que se ejecute una vez para cada imagen.
- En el objeto de opciones establecemos la propiedad rootMargin con un valor de 200px para el margen inferior, de modo que el evento se dispare cuando todavía queden 200 píxeles para que aparezca la imagen de modo que el usuario no se “entere” de esa carga en diferido. Estamos incrementando la caja que contiene el root.
- ¿Cómo seleccionamos las imágenes a observar?
   - Seleccionamos todas nuestras imágenes  con el querySelectorAll() y  le decimos al objeto observer que las observe mediante su método observe 


:::


:::tip mas info
- [intersection observe](https://marcomadera.com/blog/intersection-observer)
- [developer mozilla](https://developer.mozilla.org/es/docs/Web/API/Intersection_Observer_API)
- [javascript insection observe](https://latteandcode.medium.com/javascript-intersection-observer-1410b743c991)
:::