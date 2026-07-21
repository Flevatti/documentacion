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
- Este `String` sirve para identificar el símbolo cuando se muestra en la consola o cuando se convierte a un `String`.
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
- Es el encargado de recorrer los elementos de una estructura de datos.
- Va obteniendo un elemento a la vez hasta llegar al final.
- Muchas funcionalidades de JavaScript utilizan iteradores internamente, por ejemplo:
  - Desestructuración.
  - `for...of`.
  - `Array.from()`.
  - El operador spread (`...`).
  - `Promise.all()`, `Promise.race()`, etc.
- Estas estructuras de datos también disponen de un método para obtener un iterador.

#### Cómo obtener el iterador de un iterable
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
  - `next()`, al ejecutarse, obtiene el siguiente elemento del iterable y, al mismo tiempo, guarda la posición en la que quedó para que, al volver a ejecutarse, sepa qué elemento debe obtener.
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

- Es como un objeto que almacena pares  de clave-valor.
- Es parecido a un objeto (Ambas almacenan pares-valores)

| Objeto                                                         | Map                                                   |
| -------------------------------------------------------------- | ----------------------------------------------------- |
| Almacenan   clave-valor                                        | Almacenan   clave-valor                               |
| Las claves  son String O Symbols                               | Las claves  puede ser de cualquier tipo de dato.      |
| Se necesita  recorrerlo para saber el tamaño.                  | Tiene una funcion llamada size() para saber el tamaño |
| Para iterarlo  se necesita primero las claves y luego iterarlo | Es iterable                                           |
| Tiene un prototipo                                             | No tiene un prototipo                                 |

:::warning
- En un objeto, las claves definidas por el usuario pueden entrar en conflicto con las propiedades heredadas, como `toString` o `constructor`.
- `Map` evita este problema, ya que sus claves no se almacenan como propiedades del objeto.
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
- Asigna un valor a una clave.
- Si la clave ya existe , se remplaza el valor
- Si la clave no existe , se crea junto con su valor correspondiente
```js
   // El metodo set asigna un valor a una clave.
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
- En `WeakMap`, las claves deben ser objetos.
- En `WeakSet`, los valores deben ser objetos.
- Si el objeto deja de existir en el programa, JavaScript elimina automáticamente el par clave-valor (o el valor, en el caso de `WeakSet`) que lo contiene. Esto es posible porque ambos utilizan referencias débiles.
- `WeakMap` dispone de métodos similares a los de `Map`.
- `WeakSet` dispone de métodos similares a los de `Set`.


:::tip Referencias débiles y fuertes
- Cuando se crea un objeto, JavaScript reserva un espacio en la memoria y crea una referencia que apunta a ese espacio.
- **Referencia débil:** no se tiene en cuenta para mantener el espacio en la memoria. No impide que JavaScript elimine el objeto (espacio en la memoria) cuando ya no existen referencias fuertes que apunten a él.
- **Referencia fuerte:** mantiene vivo el espacio en la memoria. Mientras exista una referencia fuerte hacia el espacio en la memoria, el objeto no será eliminado.
:::


:::tip Cuándo un objeto deja de existir
- La referencia que se genera cuando se crea un objeto se puede almacenar en una variable o en la propiedad de otro objeto. Además, esta referencia se puede copiar y pegar, por lo que dos variables diferentes pueden apuntar al mismo objeto.
- Un objeto deja de existir cuando todas las referencias fuertes que apuntan hacia él desaparecen.
- Esto puede ocurrir cuando todas las variables o propiedades que lo referencian reciben `null` o dejan de existir.
- Cuando ya no hay ninguna referencia hacia el objeto, JavaScript puede eliminarlo de la memoria.
:::


#### Defectos
- No son objetos iterables.
- No podemos eliminar todos los elementos . No tenemos acceso a un método clear().
- Solo podemos eliminar de uno en uno.
- No podemos verificar su tamaño.

#### WeakSet
- El constructor no tiene el argumento de set.
- Se deben añadir los valores de uno en uno con el método add.

:::tip Método add(X)
- `X` debe ser un objeto.
- El objeto debe tener alguna referencia fuerte, como una variable o una propiedad de otro objeto que apunte hacia él.
- Por eso, generalmente `X` suele estar en una variable o una propiedad.
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

:::tip Método set(X, Y)
- `X`: es la clave y debe ser un objeto.
- El objeto usado como clave debe tener alguna referencia fuerte, como una variable o una propiedad de otro objeto que apunte hacia él. Por eso, generalmente `X` suele estar en una variable o una propiedad.
- `Y`: es el valor asociado a esa clave.
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
- Puede pasar que no se genere una tabla para colecciones de tipos primitivos (matriz de cadenas), solo colecciones de tipos compuestos (matriz de matrices/objetos, objeto cuyas propiedades son objetos).
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
- Registra y devuelve la cantidad de veces que se ejecutó `count()`.
- También puede recibir un `String` como argumento, que funciona como una "ID".
- Cada `ID` tiene su propio contador, permitiendo contar cuántas veces se llamó a `count()` con una determinada `ID`.
```js
 console.count("ID");
   console.count("ID 2");
   console.count("ID");
```
### trace()
- Muestra las funciones que se ejecutaron y el orden en el que fueron llamadas para llegar a la línea donde se ejecutó `trace()`.
- Permite conocer el recorrido que siguió el programa para llegar a ese punto.
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
- `group()`: crea un grupo en la consola. Los mensajes que se escriban después de ejecutarlo se asignan a ese grupo.
- `groupEnd()`: cierra el grupo. Los mensajes que se escriban después se asignan al grupo anterior si existe, o a ningún grupo si no queda ningún grupo abierto.
- Se pueden crear varios grupos y unos dentro de otros.
- Ambos reciben como argumento un `String` que funciona como la "ID" o nombre del grupo que se va a crear o cerrar.

```js
  console.group('Grupo Mensajes')
    console.log('Mensajes')
    console.groupEnd('Grupo Mensajes')
    console.log('Fuera del grupo')
```

## Metodos de Object
- La clase `Object` tiene un conjunto de métodos estáticos que pueden sernos útiles.

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
- Convierte el array con Arrays (seria lo que devuelve el método entries) en un objeto.

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

#### Método `Object.assign(X, Y)`
- Sirve para copiar/clonar un objeto.
- Copia todas las propiedades de un objeto y las “pega” en otro objeto.
- `X` = Objeto destino, donde se pegarán las propiedades copiadas.
- `Y` = Objeto que queremos copiar/clonar. Se copiarán todas las propiedades de este objeto.

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
:::tip Observación
- Ambos objetos contienen las mismas propiedades.
- Como las propiedades del objeto contienen valores primitivos, `Object.assign()` copia esos valores y crea un objeto nuevo independiente.
- `Object.assign()` también devuelve el objeto resultante después de copiar las propiedades.
:::

:::warning
- Nos permite clonar objetos simples donde los valores son primitivos (o derivados de ellos).
- Los objetos anidados no se copian por valor.
- **SOLO SE COPIAN POR VALOR** las propiedades de primer nivel (las que requieren un solo punto para acceder)
```js
objeto.propiedad
```
- Las propiedades de **SEGUNDO NIVEL o más** (se requiere más de un punto para acceder) se copian por referencia:
```js
objeto.propiedad.subpropiedad
```
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
- Estamos modificando la propiedad `calle` de ambos objetos porque es una propiedad de segundo nivel.
- La propiedad `calle` de `personaClonada` tiene una referencia de la propiedad `calle` de `persona1`.
:::
### defineProperty()
- El método estático Object.defineProperty() define una nueva propiedad sobre un objeto, o modifica una ya existente, y devuelve el objeto modificado.

Sintaxis:
```js
Object.defineProperty(obj, prop, descriptor)
```
- `obj`: El objeto en el cual se creará o modificará la propiedad.
- `prop`: El nombre de la propiedad que será creada o modificada.
- `descriptor`: El descriptor que define las características de la propiedad que se está creando o modificando.

#### Descriptores
- Cuando se crea una propiedad con la sintaxis `objeto.propiedad = valor`, JavaScript crea automáticamente un descriptor específico para dicha propiedad.
- Existen dos tipos de descriptores: de datos y de acceso.
- Un descriptor de datos define una propiedad que tiene un valor, el cual puede ser modificado o no.
- Un descriptor de acceso define una propiedad mediante un par de funciones `getter` y `setter`, que indican cómo se obtiene o modifica el contenido de dicha propiedad.
- Un descriptor debe ser de uno de estos dos tipos; no puede pertenecer a ambos.
  
#### Ambos tipos de descriptores son objetos y comparten lo siguiente

| Propiedad | Valor |
| --------- | ----- |
| Configurable | Es `true` si el descriptor de la propiedad puede modificarse y si la propiedad puede ser eliminada. Por defecto es `false` al utilizar `Object.defineProperty()`. |
| Enumerable | Es `true` si la propiedad aparece al recorrer las propiedades del objeto mediante funcionalidades como `for...in` u `Object.keys()`. Por defecto es `false` al utilizar `Object.defineProperty()`. |

#### Un descriptor de datos tiene además lo siguiente

| Propiedad | Valor |
| --------- | ----- |
| Value | Es el valor asociado a la propiedad. Puede ser cualquier tipo válido de JavaScript (`number`, `object`, `function`, etc.). Por defecto es `undefined`. |
| Writable | Es `true` si el valor de la propiedad puede modificarse mediante el operador de asignación. Por defecto es `false`. |

#### Un descriptor de acceso además tiene lo siguiente

| Propiedad | Valor |
| --------- | ----- |
| get | Una función cuyo valor retornado será utilizado como valor de la propiedad. Su valor por defecto es `undefined`. |
| set | Una función que recibe como único argumento el nuevo valor que se desea asignar a la propiedad y se encarga de modificar el valor de la propiedad. Su valor por defecto es `undefined`. |

:::warning
- Hay que tener en cuenta que una propiedad puede venir del prototipo del objeto (por herencia) y no estar creada directamente en el objeto.
- Si queremos asegurarnos de que la propiedad tenga ciertos atributos definidos, podemos:
  - Definir todas las opciones explícitamente.
  - Establecer `null` en la propiedad `__proto__`.
  - Congelar `Object.prototype` con `Object.freeze()`.
:::

Ejemplo usando `__proto__` 
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
// Creamos un objeto vacío
    const obj = {};

    // Función que crea un descriptor de propiedad
      function crearPropiedad(value) {
        var d =  {
          enumerable: false, // La propiedad no aparecerá al enumerar el objeto
          writable: false,  // El valor de la propiedad no podrá modificarse
          configurable: false, // La propiedad no podrá eliminarse ni cambiar sus atributos
          value: null,  // Valor inicial de la propiedad
        };
      // Asignamos el valor recibido al descriptor
        d.value = value;
          // Devolvemos el descriptor creado
        return d;
      }
      // Creamos una propiedad llamada "key" en obj usando el descriptor anterior
      Object.defineProperty(obj, "key", crearPropiedad("static"));

      // Congelamos Object.prototype para evitar que se agreguen,
     // eliminen o modifiquen sus propiedades.
      Object.freeze(Object.prototype);
      console.log(obj);

```
:::tip `Object.freeze(X)`
- Congela el objeto `X`, evitando que se puedan agregar, eliminar o modificar sus propiedades.
- El objeto sigue siendo accesible, pero sus propiedades quedan protegidas contra cambios.
:::


:::tip info
- [developer mozilla](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

:::
##  Media queries con Window
[Son de sobra conocidas las CSS Media queries, que nos permiten detectar distintas características de los dispositivos para aplicar unos estilos u otros en función de ellas.](../CSS/at-rules.md#media) 

**Es menos habitual que desde Javascript necesitemos detectar si ciertas medias queries se están evaluando positivamente**, pero también nos podemos ver en necesidad de ello
  
Pongamos como ejemplo que tenemos un código que hace funcionar un banner que solamente queremos mostrar en ordenadores de escritorio. Este código realiza peticiones asíncronas al servidor de banners para obtener la información necesaria para mostrarlo. Pero si el banner no se va a visualizar, ¿qué sentido tiene realizar esas peticiones al servidor?

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
Ese objeto "mediaqueryList" es dinámico, en el sentido que, si las características del navegador cambian a lo largo del tiempo, también cambiará la propiedad "matches". Por tanto, podría ocurrir que esa evaluación tenga resultados distintos en momentos distintos, si por ejemplo el usuario redimensiona la ventana del navegador.
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
- Cada vez que ocurre un cambio en el DOM de alguno de los nodos especificados con `observe()`, se crea un objeto `MutationRecord` y se guarda en una cola interna (es como un array).
- Cuando el navegador considera adecuado, ejecuta el callback entregándole un array con todos los objetos `MutationRecord` que estaban en la cola.
- Es decir, existe un pequeño intervalo de tiempo entre la creación del `MutationRecord` y la ejecución del callback.
- Podemos usar el método `takeRecords()` para obtener todos los `MutationRecord` que todavía no fueron enviados al callback y se encuentran en ese pequeño intervalo de tiempo. Este método también los elimina del array de `MutationRecord` que recibirá el callback.
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
- La API Intersection Observer permite detectar de forma asíncrona cuándo un elemento aparece, desaparece o cambia su nivel de visibilidad dentro de una zona determinada.
- Para hacerlo, observa la intersección entre un elemento y otro elemento contenedor o el propio viewport (ventana visible del navegador).

:::tip Intersección
- La intersección es la parte de un elemento que se encuentra dentro de otro elemento o zona determinada.
- En Intersection Observer representa la parte del elemento `target` que está visible dentro del elemento `root`.
:::




**Históricamente, detectar cuando un elemento pasaba a ser visible en el viewport era una tarea bastante complicada y costosa de implementar cuando recurríamos a librerías de terceros**. Por ejemplo, este tipo de información era necesaria si queríamos cargar imágenes de forma lazy, implementar el típico scroll infinito o mostrar anuncios al llegar a determinadas partes de la web.

[Todas estas tareas que antiguamente implicaban bucles ejecutándose constantemente y llamadas a métodos como getBoundingClientRect](https://desarrolloweb.com/faq/como-saber-si-un-elemento-esta-en-el-viewport) **pueden ser implementadas de forma mucho más sencilla gracias a esta API**.


La API Intersection Observer registra una función callback que se ejecuta cuando un elemento entra o sale de una zona específica (otro elemento o el viewport), o cuando cambia la cantidad del mismo que se encuentra visible dentro de dicha zona.


#### ¿Cómo usarlo?
- Para utilizar `IntersectionObserver`, primero debemos crear una instancia del mismo.
- Al crearla, debemos pasarle un callback que se ejecutará cuando el elemento target entre, salga o cambie su visibilidad dentro del root.
- Opcionalmente, podemos pasarle un segundo parámetro con la configuración del observer.

#### Parametros del Callback (Primer argumento)

#### entries
- Es un array de objetos `IntersectionObserverEntry`.
- Cada objeto contiene información sobre la intersección de un elemento `target`, es decir, a través de este podemos saber cosas como:
  - ¿Está visible dentro del `root`?
  - ¿Qué porcentaje del elemento es visible?
- Cada objeto `IntersectionObserverEntry` tiene propiedades como: `intersectionRect`, `intersectionRatio`, `boundingClientRect`, `rootBounds`, `target`, `time` e `isIntersecting`.
- La propiedad más utilizada es `isIntersecting`, que devuelve `true` si el elemento `target` es visible en el `root` (según lo que indicamos).
- Cada elemento del array representa un objeto `target` que se registró con el método `observe()`.
#### observer
- Referencia al `IntersectionObserver` que ejecutó el callback.


#### Propiedades del objeto de configuración (Segundo argumento)

#### rootMargin
- Define un margen alrededor del elemento `root` que se utiliza al calcular la intersección.
- Puede recibir valores similares a los márgenes de CSS, por ejemplo: `"10px 20px 30px 40px"` (`top`, `right`, `bottom`, `left`).
- Estos valores permiten aumentar o reducir la zona del `root` que se utiliza para calcular la visibilidad.
- Por defecto, todos los valores son `0`.
- Los valores positivos aumentan la zona del `root` utilizada para detectar la visibilidad del elemento.
- Los valores negativos reducen la zona donde el `root` detecta la visibilidad del elemento.


#### root
- Es el elemento que utilizamos para comprobar la visibilidad del elemento `target`.
- Básicamente, si el elemento `target` entra, sale o cambia su visibilidad dentro de este elemento, se ejecuta el callback.
- Debe ser un elemento ancestro del `target`.
- Si no se especifica o es `null`, se utiliza el viewport del navegador.



:::tip 
 Mas adelante veremos los elementos target
:::

#### threshold
- Indica qué porcentaje del elemento `target` debe estar visible para ejecutar el callback.
- Puede recibir un número o un array de números.
- Los valores van de `0` a `1`, donde `0` significa que se ejecuta cuando aparece aunque sea un píxel del elemento, y `1` cuando todo el elemento es visible dentro del root.
- Por ejemplo, un valor de `0.5` ejecuta el callback cuando el 50% del elemento `target` está visible.
- También se puede pasar un array para ejecutar el callback en diferentes porcentajes de visibilidad, por ejemplo: `[0, 0.25, 0.5, 0.75, 1]`.
- Por defecto su valor es `0`.




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
#### observe(node)
- Recibe un `Node` que se usará como elemento `target`.
- Sirve para registrar el `node` en la instancia de `IntersectionObserver`.
- El callback se ejecutará cuando el `node` esté visible en el `root` (según la configuración especificada).


:::tip
- `IntersectionObserver` se encarga de vigilar si algún elemento registrado está visible en el `root`.
- Si el elemento está visible en el `root`, revisa la configuración para comprobar si cumple lo especificado, por ejemplo, si más del 50% del elemento es visible o si se encuentra completamente dentro del `root`.
- Si cumple con las condiciones definidas en la configuración, se ejecuta el callback.
:::

:::tip Elemento `target`
- Es el elemento que queremos observar con `IntersectionObserver`.
- La API se encarga de comprobar si este elemento es visible dentro del elemento `root` según la configuración definida.
- El `Node` que pasamos al método `observe()` se convierte en un elemento `target`.
:::


#### unobserve(node)
- Recibe el `target` que queremos dejar de observar.
- Dejar de observar significa que `IntersectionObserver` ya no vigilará si el `target` entra, sale o cambia su visibilidad dentro del `root`.
- Por lo tanto, el callback ya no se ejecutará por cambios de visibilidad de ese elemento.




#### disconnect()
- Permite dejar de observar todos los elementos `target` registrados en la instancia de `IntersectionObserver`.
- A partir de ese momento, el callback ya no se ejecutará por cambios de visibilidad de ningún elemento.

:::tip Scroll Listener vs Intersection Observer
- La gran diferencia entre usar `scroll listener` e `IntersectionObserver` es que el evento `scroll` se ejecuta cada vez que ocurre un desplazamiento, pudiendo dispararse muchas veces en poco tiempo.
- En cambio, `IntersectionObserver` solo ejecuta el callback cuando cambia la visibilidad del elemento observado dentro del `root` (por ejemplo, cuando entra, sale o cambia el porcentaje visible).
- Por este motivo, usar `IntersectionObserver` puede reducir el costo de procesamiento y evitar problemas de rendimiento.
:::

#### Ejemplo Lazy loading para imágenes
Tal y como vimos anteriormente, el callback de `IntersectionObserver` recibe dos argumentos: `entries`, que contiene los objetos `IntersectionObserverEntry` correspondientes a los elementos `target` que generaron un cambio de visibilidad, y `observer`, que es la instancia del observer.

Para realizar la carga de imágenes, recorreremos el array `entries` y trabajaremos con los elementos que cumplen la condición definida.

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
- Lógica del callback:
  - Primero comprobamos si el elemento `target` se encuentra visible dentro del `root` utilizando la propiedad `isIntersecting`.
  - Si la condición se cumple, reemplazamos el valor de `src` por el valor almacenado en `data-src`, cargando así la imagen real.
  - Luego utilizamos `observer.unobserve()` para dejar de observar esa imagen, ya que la carga solo queremos realizarla una vez por cada elemento.
- En las opciones del `IntersectionObserver` establecemos la propiedad `rootMargin` con un valor de `200px` en el margen inferior.
  - Esto hace que la carga de la imagen se inicie antes de que sea visible para el usuario, permitiendo que la imagen esté lista cuando llegue a la zona visible.
  - Al aumentar el margen inferior, estamos ampliando la zona de observación del `root`.
- ¿Cómo seleccionamos las imágenes a observar?
  - Utilizamos `querySelectorAll()` para obtener todas las imágenes de la página.
  - Luego recorremos cada imagen y la registramos en el observer mediante el método `observe()`.
:::


:::tip mas info
- [intersection observe](https://marcomadera.com/blog/intersection-observer)
- [developer mozilla](https://developer.mozilla.org/es/docs/Web/API/Intersection_Observer_API)
- [javascript insection observe](https://latteandcode.medium.com/javascript-intersection-observer-1410b743c991)
:::