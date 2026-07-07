---
sidebar_position: 3
---
# Objeto

-	JavaScript está diseñado en un paradigma simple basado en objetos.
-	Un objeto es una colección de propiedades, y una propiedad es una asociación entre una clave(nombre)  y un valor (CLAVE Y VALOR).
-	El valor de una propiedad puede ser cualquier tipo de dato, incluso una función. Cuando una propiedad contiene una función, se le llama método.
-	Además de los objetos predefinidos en el navegador, también puedes crear tus propios objetos.
-	Los objetos son similares a los arrays, pero se diferencian en que:
    - En los arrays se accede a los datos mediante índices numéricos.
    - En los objetos se accede a los datos mediante propiedades (claves).


:::tip
- La "clave" también se llama "propiedad" en programación.
- La clave se usa para acceder al valor asociado o modificarlo dentro del objeto.
:::

### A tener en cuenta 
- Se puede utilizar el punto (`.`) o los corchetes (`[ ]`) para acceder y modificar las propiedades de un objeto.
- Con los corchetes puedes usar variables, espacios en blanco o caracteres especiales en la clave.

## Objeto Literal
- Un **objeto literal** es aquel en el que sus propiedades están definidas directamente en el código.
- Es decir, en el código están escritas todas las propiedades y sus valores.
- `{ }` = objeto
- Los dos puntos (`:`) se utilizan para asignar el valor a una propiedad.
- Para agregar más propiedades, se separan con comas (`,`).
- Las propiedades pueden contener cualquier tipo de dato.
- Sintaxis: `propiedad: valor`
```js
const gato = {
    nombre: 'Valiente',
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"]
}

console.log(gato);

```
## Acceder a los valores
1.  Se accede a un valor usando `nombreVariable.propiedad`.
```js

console.log(gato.nombre);

console.log(gato.enemigos[0]);

```

2. También puedes acceder a una propiedad usando corchetes: `nombreVariable["propiedad"]`.

```js
console.log(gato["nombre"]);

 console.log(gato["enemigos"][0]);

```

## CRUD (propiedades)
#### Los CRUD los podes hacer con el punto (.) o con los corchetes ([]).
:::tip
 - Con los corchetes podes usar variables , espacios en blancos , caracteres especiales , etc

objeto[variable] = "valor";
:::
### Leer (read)
Visto (Anterior).

### Crear (create)
```js
const gato = {
    nombre: 'Valiente',
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"]
}

// Crear
gato.color = 'Azul'
console.log(gato);

```

### Actualizar (update)
```js
const gato = {
    nombre: 'Valiente',
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"]
}
// Actualizar
gato.edad = 5;
console.log(gato);

```

### Eliminar (delete)
```js
const gato = {
    nombre: 'Valiente',
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"]
}
// Eliminar
 delete gato.duerme;
console.log(gato);

```
## hasOwnProperty

A veces es útil comprobar si existe una propiedad en un objeto. Podemos usar el método `hasOwnProperty(propiedad)` para saber si un objeto tiene una propiedad específica.

- Argumento `propiedad`: el nombre de la propiedad a buscar.
- Devuelve `true` si la propiedad existe en el objeto y `false` si no existe.
 ```js
 
const gato = {
    nombre: 'Valiente',
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"]
}
console.log(gato.hasOwnProperty("edad"))
console.log(gato.hasOwnProperty("salud"))

 ```


## Propiedades anidadas
- la propiedad otros es otro objeto
- la propiedad favoritos es otro objeto
- la propiedad comida es otro objeto

```js
const gato = {
    nombre: 'Valiente',
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    otros: {
        amigos: ["Cobarde", "Tímido", "Pegajoso"],
        favoritos: {
            comida: {
                fria: "salmón",
                caliente: "pollo"
            }
        }
    }
}
console.log(gato);

```
 
Acceder a salmon:
```js
console.log(gato.otros.favoritos.comida.fria)
```
Acceder a cobarde:
```js
console.log(gato.otros.amigos[0])
```

##  Encadenamiento opcional
- El encadenamiento opcional (`?.`) permite acceder a propiedades o llamar métodos de un objeto sin que se produzca un error si la propiedad o el método no existen.
- Con `?.` no es necesario comprobar manualmente que cada propiedad o método exista.
#### ¿Cómo funciona?
- El operador `?.` intenta acceder a una propiedad o llamar a un método.
  - Si puede hacerlo, devuelve su valor o ejecuta el método.
  - Si no puede (porque el objeto, la propiedad o el método no existen), devuelve `undefined` y no produce un error.
#### Ventajas
- Evita tener que escribir muchas comprobaciones con `if` o `&&`.
- Hace el código más limpio y fácil de leer.
- Ejemplo:
```js
console.log(gato.otros?.favorito);
```
:::tip Observación
- Coloca `?.` antes de la propiedad o el método que no sabes si existe.
- El operador `?.` comprueba que la propiedad anterior a `?.` (en este caso `otros`) exista antes de acceder a la siguiente propiedad o método.
- En este ejemplo, si `otros` existe, se accederá a `favorito`; de lo contrario, se devolverá `undefined`.
- Si `otros` existe, pero `favorito` no, también se devolverá `undefined`, ya que esa propiedad no está definida.
:::


## Propiedades
- Una propiedad es una clave cuyo valor no es una función.
- En JavaScript, los tipos de datos no primitivos son objetos. Los tipos primitivos también pueden usar propiedades y métodos gracias a los *wrapper objects*, que JavaScript crea automáticamente.
- Los arrays son objetos y, como tales, tienen propiedades y métodos. Por ejemplo, `length` es una propiedad que indica la cantidad de elementos del array.
- Las propiedades no llevan paréntesis al final.




```js
const amigos =  ["Cobarde", "Tímido", "Pegajoso"];
console.log(amigos.length);
```
## Metodos
- Un método es una clave cuyo valor es una función.
- Como es una función, para ejecutar el código que contiene se utilizan paréntesis `()` al final de la clave. Dentro de ellos se pasan los argumentos si el método los necesita; de lo contrario, se dejan vacíos.
- Por ejemplo, `push()` es un método de un array.

```js
const amigos =  ["Cobarde", "Tímido", "Pegajoso"];
console.log(amigos.push());
```

## ¿Que es un Metodo?
Un método es una función que pertenece a un objeto.

```js
const gato = {
    nombre: 'Valiente',
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"] , 
    // Creando el metodo
    comer: function() {
        console.log('gato comiendo');
    }
   
}
// LLamando al metodo
gato.comer();

```
### Abreviacion
- En lugar de escribir la palabra `function` y utilizar `:` seguido de una función, se pueden usar directamente los paréntesis `()` y las llaves `{}`.
- La palabra `function` y el `:` se eliminan.

```js
const gato = {
    nombre: 'Valiente',
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"] , 
    // Creando el metodo
    comer()  {
        console.log('gato comiendo');
    }
   
}
// LLamando al metodo
gato.comer();

```
El metodo puede recibir parametros:

```js
 const gato = {
    nombre: 'Valiente',
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"] , 
    // Creando el metodo
    comer(alimento)  {
        console.log('gato comiendo  ' + alimento);
    }
   
}
// LLamando al metodo
gato.comer("pez");

```
## Ambito (Scope)
Este código no funciona porque `${nombre}` intenta acceder a una variable llamada `nombre`, pero esa variable no existe dentro del método ni tampoco existe una variable global con ese nombre.
```js

const gato = {
    nombre: 'Valiente',
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"] , 
    // Creando el metodo
    comer(alimento)  {
        console.log(` ${nombre} esta comiendo ${alimento}`);
    }
   
}
// LLamando al metodo
gato.comer("pez");

```
Para solucionarlo hay dos manera

1. Acceder desde el objeto mismo:

```js
const gato = {
    nombre: 'Valiente',
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"] , 
    // Creando el metodo
    comer(alimento)  {
        console.log(` ${gato.nombre} esta comiendo ${alimento}`);
    }
   
}
// LLamando al metodo
gato.comer("pez");

```

2. Usando el this
## This
- `this` significa “esto” y hace referencia a quién está ejecutando el código en ese momento. Básicamente, contiene una referencia del objeto que está ejecutando el método.
- `this` no siempre hace referencia al mismo objeto.
- Antes se usaba `const self = this` para conservar su valor dentro de funciones internas, aunque hoy en día se prefieren las funciones flecha.



 ```js
 const gato = {
    nombre: 'Valiente',
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"] , 
    // Creando el metodo
    comer(alimento)  {
        console.log(` ${this.nombre} esta comiendo ${alimento}`);
    }
   
}
// LLamando al metodo
gato.comer("pez");

 ```
- En JavaScript, la palabra clave this se refiere a un objeto (contiene la referencia de un objeto)
- Se refiere a diferentes objetos dependiendo de donde se use:

| Contexto  | Valor de This  |
| - | - |
|  En un método  | Se refiere al objeto    |
|  En un ámbito/scope global | Se refiere al objeto window    |
|  En una funcion en modo estricto| Es undefined   |
|  En un evento | Se refiere al elemento que recibió el evento   |

- El valor de this depende del contexto/scope.

#### Scope de un método.
- El valor de this es el objeto que invoca el método.
```js
  const objeto = {
      color : "verde" ,
      tamaño: "XL" ,
      obtenerThis(){
        console.log(this);
      }

    }
    // This = Objeto
    objeto.obtenerThis();

```
:::tip
El valor de this es el objeto que se usa para llamar el método.
:::
#### Scope  de una clase
- El valor de `this` hace referencia a la **nueva instancia** que se crea con `new`.
- También puede representar el **objeto desde el cual se accedió a un método**.
- Los métodos estáticos pertenecen a la **clase**, no a los objetos creados a partir de ella. Por eso no forman parte de `this`, ya que `this` hace referencia a la instancia u objeto que ejecuta la función.
- `this` se utiliza en el **constructor** para inicializar (crear) las propiedades de la nueva instancia (objeto).
```js
      class Letra {
     constructor(letra) {
      this.letra = letra;
     }
}

const c = new Letra("C");
console.log(c.letra)

```
:::tip Observación
Con el constructor, estamos creando la propiedad letra en la nueva instancia.
:::
#### Contexto global
- En el contexto/scope de ejecución global (fuera de cualquier método o clase; puede estar dentro de bloques o funciones de flecha definidas en el ámbito global) , this tiene la referencia del objeto window (objeto global) .
```js
   console.log(this);
```
:::tip info
[info](
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#try_it
)
:::
## arrow function
- Funciona, pero no tiene `this` ni `super`, por lo que no debe usarse como método de un objeto o clase.
- Su valor de `this` es `undefined` en este contexto, ya que las funciones flecha no tienen su propio `this`.

```js

const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    comer: (comida) => {
        return `${this.nombre} está comiendo ${comida}`;
    },
};

console.log(gato.comer("pez"));

```
- Pero la función flecha sí se puede usar dentro de otros métodos:

```js
const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    comer(comida) {
        return `${this.nombre} está comiendo ${comida}`;
    },
    listarEnemigos() {
      this.enemigos.forEach((item) => console.log(item));
    },
};

gato.listarEnemigos();

```
## Recorrer un objeto

### for in

La instrucción for-in itera sobre todas las propiedades enumerables de un objeto


Recorrer el nombre de todas las propiedades:

```js
const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    comer(comida) {
        return `${this.nombre} está comiendo ${comida}`;
    },
    listarEnemigos() {
      this.enemigos.forEach((item) => console.log(item));
    },
};

for (let propiedad in gato) {
    console.log(propiedad);
}

```
Para poner los valores:
- Se utiliza los corchetes.
- No funciona con el punto.

Recorrer los valores de las propiedades:
```js
const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    comer(comida) {
        return `${this.nombre} está comiendo ${comida}`;
    },
    listarEnemigos() {
      this.enemigos.forEach((item) => console.log(item));
    },
};

for (let propiedad in gato) {
    console.log(gato[propiedad]);
}

```

:::tip ¿Por qué usar `for...in`?

- `for...in` está diseñado para recorrer las propiedades de un objeto, por lo que no se recomienda utilizarlo con arrays.

#### Si existen opciones como `Array.prototype.forEach()` o `for...of`, ¿para qué se usa?

- Puede ser útil para depuración, ya que permite revisar fácilmente las propiedades que tiene un objeto (por ejemplo, mostrándolas en la consola).
- Aunque los arrays suelen ser más prácticos para almacenar datos, hay situaciones donde se trabaja con objetos usando pares clave-valor. En estos casos, `for...in` permite recorrer las claves del objeto y comprobar sus valores.
:::

## Object.values()

- `Object.values()` devuelve un array que contiene los valores de las propiedades del objeto.
- Solo devolverá los valores cuya propiedad sea enumerable, es decir, que tenga internamente la propiedad `[[Enumerable]]` establecida como `true`.
- 1 parámetro: el objeto en cuestión.

```js
const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    comer(comida) {
        return `${this.nombre} está comiendo ${comida}`;
    },
    listarEnemigos() {
      this.enemigos.forEach((item) => console.log(item));
    },
};

console.log(Object.values(gato));

```

Si lo combinamos con forEach:
```js
Object.values(gato).forEach((item) => console.log(item)); 
```
## Existen mas metodos

[Object.entries()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)

[Object.key()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)

[Object.getOwnPropertyNames()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)

## Destructuring Objects

- La sintaxis de desestructuración es una expresión de JavaScript que permite extraer valores de un array u objeto y almacenarlos en distintas variables.
- Permite guardar elementos de arrays o propiedades de objetos en variables separadas.
- Funciona tanto con objetos como con arrays.
#### Sintaxis
```js
// Desestructuración de objeto
const { propiedad } = objeto;

// Desestructuración de array
const [elemento] = array;
```
:::tip Observación
- En objetos, `propiedad` es el nombre de una propiedad existente y se convierte en una variable que contiene su valor: `propiedad = objeto.propiedad`.
- En los arrays, el primer elemento obtiene el valor del índice `0` del array, el segundo el valor del índice `1` y así sucesivamente.
:::



### Objeto
Ejemplo:

```js
const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
   
};

const nombre = gato.nombre;
console.log(nombre);

```
Pero hay una manera mejor:

```js
const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
   
};

 //creando const nombre = gato.nombre , const duerme = gato.duerme , ...
const {nombre , duerme , edad} = gato;
console.log(nombre , duerme , edad);

```
Otro ejemplo:
```js
const gato = {
    nombre: 'Valiente',
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    otros: {
        amigos: ["Cobarde", "Tímido", "Pegajoso"],
        favoritos: {
            comida: {
                fria: "salmón",
                caliente: "pollo"
            }
        }
    }
}

// const amigos = array amigos
const {amigos} = gato.otros;
console.log(amigos);

```
####  Desestructuración en otra desestructuración 
- Permite acceder a propiedades anidadas dentro de un objeto mediante otra desestructuración.
- En este ejemplo, se desestructura el objeto `otros` para obtener directamente el array `amigos`:
```js
// const amigos = array amigos
const {otros: {amigos}} = gato;
console.log(amigos);

```
:::tip Observación
- Solo se crea una variable de la última desestructuración realizada.
- Cada par de llaves `{}` representa una desestructuración.
- En este ejemplo, no se crea una variable `otros`, sino únicamente la variable `amigos`, que contiene el valor extraído de `gato.otros.amigos`.
- En las desestructuraciones anidadas de objetos, se utiliza `:` para acceder al valor de una propiedad y hacer una desestructuracion del valor que contiene.

:::

#### Alias:
Para poner un nuevo nombre a la variable
```js
 //creando const nombreGato = gato.nombre , const duerme = gato.duerme , ...
const {nombre : nombreGato, duerme , edad} = gato;
console.log(nombreGato , duerme , edad);

```

```js
// const amigosGatos = array amigos
const {otros: {amigos : amigosGatos}} = gato;
console.log(amigosGatos);

```
#### Por defecto:
Si la propiedad no existe, podemos poner un valor por defecto.

Ejemplo:
```js
const gato = {
    //nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
   
};

const {nombre  = "sin nombre", duerme , edad} = gato;
console.log(nombre , duerme , edad);
// nombre = "sin nombre"

```

:::warning
No se puede destructurar un método que tiene el this.

Pasa lo mismo que con las funciones flecha , da undefined

:::
Destructurar un metodo con el this: (Tira undefined)
```js
const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    comer(comida) {
        return `${this.nombre} está comiendo ${comida}`;
    },
    mostrarEnemigos() {
        return this.enemigos.forEach((item) => console.log(item));
    },
};

const {comer} = gato
console.log(comer("pez"));

```

### Array
- En los arrays se respetan los índices.
- No se puede extraer directamente el elemento del índice `3` sin pasar por los índices anteriores, ya que la desestructuración sigue el orden de los elementos del array.


```js
const gato = {
    nombre: 'Valiente',
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    otros: {
        amigos: ["Cobarde", "Tímido", "Pegajoso"],
        favoritos: {
            comida: {
                fria: "salmón",
                caliente: "pollo"
            }
        }
    }
}

const {amigos} = gato.otros;
// const amigoUno = Cobarde , const amigoDos = "Timido"
const [amigoUno,amigoDos] = amigos;
console.log(amigoDos);

```

## Getters y Setters

- Son propiedades especiales que permiten controlar el acceso y modificación de los valores de un objeto.

### GET
- Se crea como si fuera un método, pero se accede como si fuera una propiedad.
- Se utiliza para obtener un valor calculado o el valor de una propiedad.
- Para crearlo se utiliza la palabra clave `get` seguida de la sintaxis de método abreviada.
- El nombre del método se convierte en el nombre (clave) de la propiedad, por lo que se accede mediante ese nombre.
- Cada vez que se accede al getter, se ejecuta la función y se retorna el valor que devuelve.

Tenga en cuenta lo siguiente al trabajar con la sintaxis `get`:
- Debe tener exactamente cero parámetros.
- No puede haber múltiples getters con el mismo nombre dentro de un objeto.
- No se necesitan paréntesis al acceder al getter.
- Se accede como si fuera una propiedad.

```js
	const gato = {
	    nombre: "Valiente",
	    duerme: true,
	    edad: 10,
	    enemigos: ["agua", "perros"],
	    // Creamos un get
	    get nombreMayuscula() {
	        return this.nombre.toUpperCase();
	    }
	   
	};
	// Llamamos al get
	console.log(gato.nombreMayuscula);

```


### SET
- Se crea como si fuera un método, pero se utiliza como [si estuvieras asignando un valor a una propiedad](#actualizar-update).
- Se utiliza para modificar o asignar un valor a una propiedad del objeto.
- Para crearlo se utiliza la palabra clave `set` seguida de la sintaxis de método abreviada.
- El nombre del método se convierte en el nombre de la propiedad, por lo que se accede mediante ese nombre.
- Al asignar un valor a la propiedad, se ejecuta la función y se pasa como argumento el valor que está después del signo `=`.
- A diferencia del `GET`, no devuelve ningún valor, solo se encarga de actualizar una propiedad.

Tenga en cuenta lo siguiente al trabajar con la sintaxis `set`:
- Debe tener exactamente un parámetro.
- Al invocar el setter se utiliza el signo igual (`=`) en lugar de los paréntesis.
- El valor que se coloca después del signo igual (`=`) se envía como argumento al parámetro del setter.

```js
const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    // Creamos un get
    get nombreMayuscula() {
        return this.nombre.toUpperCase();
    },
    // Creamos un set
    set agregarEnemigo(enemigo) {
        this.enemigos.push(enemigo);
    }
   
};
// Llamamos al set
gato.agregarEnemigo = "batman";
console.log(gato);

```
## por valor vs por referencia

### por valor
Cuando asignamos valores primitivos (`Boolean`, `Null`, `Undefined`, `Number`, `String` y `Symbol`) a una variable, se realiza una copia de dicho valor. Para entenderlo mejor, veamos el siguiente ejemplo:

 ```js
 let a = "hola";
let b = a;
console.log(b);
//Si cambiamos el valor de a, b sigue siendo "hola"
a = "chao";
console.log(b);

 ```
:::tip Observación
- En este caso, `a` es un valor primitivo porque contiene un `string`.
- Cuando asignamos `a` a `b`, esta recibe una copia del valor que tenía `a` en ese momento. Esa copia es totalmente independiente.
- Por eso, cuando `a` cambia posteriormente, `b` mantiene su propio valor sin verse afectada.
:::
![por valor](https://bluuweb.github.io/desarrollo-web-bluuweb/img/valor.png)

### Por referencia
- Cuando asignamos valores no primitivos o complejos (`Object`, `Array` y `Function`) a una variable, JavaScript copia la referencia que apunta al valor original. Esto significa que no se copia el objeto en sí, sino la referencia que permite acceder al mismo objeto desde ambas variables:

```js
let a = ["hola"]; // Valor original
let b = a;

a.push("chao");

console.log(b);

```
:::tip Observación
- En este caso, `a` y `b` apuntan al mismo array, ya que al asignar `a` a `b` se copia la referencia y no el array completo.
- Por eso, cuando se modifica el array mediante `a.push("chao")`, el cambio también se refleja al acceder desde `b`.
:::
```js
const a = { // Valor original
    nombre: "hola",
};

const b = a;

a.nombre = "chao";

console.log(b);


```
:::tip Observación
- En este caso, `a` y `b` apuntan al mismo objeto, ya que al asignar `a` a `b` se copia la referencia y no el objeto completo.
- Por eso, cuando se modifica la propiedad `nombre` mediante `a`, el cambio también se refleja al acceder al objeto desde `b`.
:::
![por referencia](
https://bluuweb.github.io/desarrollo-web-bluuweb/img/valor-2.png
)