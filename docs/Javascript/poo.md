---
sidebar_position: 9
---
# JS POO
- La programación orientada a objetos (POO) es un paradigma de programación basado en la creación de objetos que encapsulan datos (propiedades) y comportamientos (métodos).
- JavaScript no es un lenguaje orientado a objetos basado originalmente en clases. Sin embargo, permite aplicar los principios de la programación orientada a objetos.
- JavaScript es un lenguaje basado en prototipos.

:::tip ¿Qué es un paradigma de programación?
Un paradigma de programación es una forma o estilo de escribir y organizar el código. Define un conjunto de reglas y conceptos sobre cómo estructurar un programa para resolver problemas.

La programación orientada a objetos (POO) es uno de esos paradigmas.
:::

:::tip ¿Qué significa encapsular?
- Encapsular significa agrupar datos (propiedades) y comportamientos (métodos) relacionados dentro de un mismo objeto.
- Además, permite ocultar los datos internos (propiedades) y acceder a ellos únicamente mediante los métodos del objeto.
:::

##  ¿Que es POO?
- La programación orientada a objetos (POO) es un paradigma de programación basado en la creación de objetos que encapsulan datos (propiedades) y comportamientos (métodos).
- La idea básica de la POO es utilizar objetos para representar o modelar elementos del mundo real.
- La POO favorece la reutilización y organización del código.

## Ejemplo Teórico
:::tip Imaginad
Imagina que tienes un colegio o escuela con 1000 estudiantes y 100 profesores, sería ilógico estar construyendo objetos literales para cada uno de ellos:
```js
const estudiantoUno = {
    nombre: 'Juanito',
    uid: "e-0001",
    intereses: ["Música", "Fútbol"],
    saludar(){
        return `${this.nombre} dice hola!`
    }
}

```

:::
Por eso vamos a hacer un constructor para crear estudiantes.

A través del constructor, podemos crear varios objetos que compartan los mismos metodos pero que tengan diferentes datos (propiedades).
### Paso 1 - Crear una Plantilla/Clase/Constructor

Todas las personas tienen datos en común (nombre, identificador, edad, etc.) y también comportamientos (métodos).

Para evitar repetir el mismo código al crear varias personas, se utiliza una plantilla.

A partir de esa plantilla se pueden crear múltiples objetos con las mismas propiedades (aunque con valores diferentes) y los mismos métodos.


- La plantilla `Persona` contiene:
  - Datos en común (propiedades): nombre, edad, género e intereses.
  - Funcionalidades (métodos): por ejemplo, saludar.

Esto se conoce como **abstracción**: crear un modelo simple de algo complejo que represente sus características más importantes para el propósito de nuestro programa.

:::tip
- En JavaScript, una plantilla puede definirse mediante una **función constructora** o mediante una **clase (`class`)**.
- La plantilla no es un objeto, sino un modelo que define cómo serán los objetos que se creen a partir de ella.
:::

:::tip
- A partir de una plantilla se crean **instancias** (objetos).
:::

### Paso 2  - Crear objetos
- A partir de nuestra plantilla (clase o función constructora), podemos crear instancias (objetos).
- Cada instancia contiene las propiedades y métodos definidos en la plantilla, pero con sus propios valores. Es decir, cada objeto tiene sus propios datos.
- Teniendo nuestra plantilla `Persona`, ahora podemos crear personas con características específicas.

:::tip
- El proceso de crear una instancia a partir de una plantilla se llama **instanciación**.
- La instanciación crea un nuevo objeto basado en la plantilla.
- Durante la instanciación se ejecuta el constructor para inicializar las propiedades del objeto.
:::

### Paso 3 - Clases especializadas/Heredar

- En este caso no queremos personas genéricas, sino docentes y estudiantes, que son tipos más específicos de personas.
- En POO, podemos crear nuevas clases a partir de otras clases. Estas nuevas clases heredan las propiedades y métodos de la clase base.
- Además, cada clase puede agregar nuevas propiedades y métodos o modificar los existentes según sea necesario.


:::tip
- A partir de una plantilla genérica, podemos crear otras plantillas más específicas que hereden sus propiedades y métodos, agregando nuevas características si es necesario.
- Por ejemplo, un estudiante puede tener notas y un docente puede tener materias asignadas.
:::

## ¿cómo se implementa en JS?

:::tip Funciones constructoras
Antes de la incorporación de las clases (`class`) en ECMAScript 2015 (ES6), JavaScript utilizaba funciones constructoras para crear múltiples objetos con la misma estructura y comportamiento.
:::

- Las funciones constructoras permiten crear múltiples objetos de manera eficiente, inicializando (creando) sus propiedades mediante el constructor.
- En lugar de copiar los métodos en cada objeto creado, JavaScript los comparte mediante el prototipo (`prototype`).
- Cada objeto creado contiene una referencia al prototipo mediante `__proto__`, que le permite acceder a los métodos y propiedades definidos en `prototype` sin duplicarlos.
- Este mecanismo se conoce como **herencia basada en prototipos** y es la forma en que JavaScript comparte funcionalidades entre objetos.

:::tip `prototype` y `__proto__`
- `prototype` es una propiedad de las funciones constructoras y de las clases. Allí se definen los métodos que compartirán todas las instancias.
- `__proto__` es una propiedad interna de cada objeto que apunta al `prototype` de la función constructora con la que fue creado.
:::




#### No confundir propiedades de instancia con propiedades y métodos del prototipo
##### Propiedades de instancia

- Son específicas de cada instancia. Cada vez que se crea un nuevo objeto, los valores de las propiedades definidas en el constructor (como `nombre` o `edad`) se asignan únicamente a esa instancia.
- No se comparten entre las instancias, ya que cada objeto tiene sus propias propiedades. Es decir, no comparten los valores de estas.

##### Propiedades y métodos del prototipo
- Son compartidos por todas las instancias creadas a partir de la misma función constructora o clase.
- Como se definen en `prototype`, JavaScript no necesita duplicarlos en cada objeto, lo que permite ahorrar memoria.


:::tip
JavaScript utiliza un modelo de herencia basado en prototipos. Aunque no implementa la POO clásica de la misma forma que otros lenguajes, permite aplicar sus principios de manera sencilla y eficiente.
:::

:::tip
Al crear una nueva instancia, el objeto mantiene una referencia a su prototipo mediante `__proto__`, formando parte de la cadena de prototipos (*prototype chain*).
:::

## Funciones constructoras
- Una función constructora es una plantilla que permite crear múltiples objetos con la misma estructura.
- Forma tradicional de implementar la programación orientada a objetos en JavaScript, antes de la incorporación de las clases (`class`) en ES6:
```js
// Funcion constructora = Plantilla = Class

function Persona(nombre) {
    this.nombre = nombre;

    this.saludar = function () {
        return `${this.nombre} dice hola`;
    }
}

// Crear un objeto literaL
const juanito = new Persona("juanito");
console.log(juanito.saludar())

// Crear un objeto literaL
const pedrito = new Persona("pedrito");
console.log(pedrito.saludar());

```
A través de una plantilla construimos objetos.
- Una función constructora es la forma tradicional de JavaScript para crear múltiples objetos con la misma estructura.
- Es una alternativa a las clases (`class`), que veremos más adelante.
- Es una función normal que no retorna nada, pero al utilizarla con la palabra clave `new` se comporta como un constructor.
- Su objetivo es definir las propiedades y métodos que tendrán las nuevas instancias.
- `this` sirve para:
  - Crear las propiedades del nuevo objeto (instancia) dentro del constructor.
  - Crear los métodos que tendrán las nuevas instancias. Al definirlos mediante `this`, estos métodos se agregan directamente a cada instancia y no se comparten mediante el prototipo.
  - Obtener una referencia de la instancia que invoca el método.
- La palabra `new` debe ir seguida del nombre de la función constructora y sus argumentos correspondientes:
    - `new FuncionConstructora(argumentos)`:
      - Crea un nuevo objeto.
      - Ejecuta la función constructora.
      - Asigna la nueva instancia como valor de `this`.
      - Devuelve la nueva instancia (objeto creado).



:::tip
Los nombres de las funciones constructoras generalmente comienzan con letra mayúscula. Esta convención permite diferenciarlas de las funciones normales y reconocer fácilmente que deben utilizarse con `new`.
:::




:::tip Otra forma de crear objetos
- Puedes utilizar el constructor `Object()` para crear un nuevo objeto vacío.
- Luego puedes agregarle propiedades y métodos manualmente.
- Esta es otra forma de crear objetos en JavaScript, aunque normalmente se utiliza la sintaxis de objeto literal (`{}`).

```js
const personaUno = new Object();

personaUno.nombre = "Ignacio";

personaUno.saludar = function() {
    return `${this.nombre} dice hola!`;
};

console.log(personaUno);
console.log(personaUno.nombre);
console.log(personaUno.saludar());
```
:::
## Prototipos de objetos
- [Los prototipos son objetos que utilizan las instancias para acceder a las propiedades y métodos definidos en el prototipo del constructor.](https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Object_prototypes)

:::warning Ojo
JavaScript crea instancias de objetos, pero la herencia se realiza mediante prototipos, no mediante clases tradicionales.
:::




## ¿Un lenguaje basado en prototipos?
- JavaScript es un lenguaje basado en prototipos. Esto significa que los objetos pueden acceder a propiedades y métodos de otros objetos mediante el prototipo.
- En lugar de copiar funcionalidades en cada objeto, JavaScript permite compartirlas mediante el prototipo, evitando duplicar código.
- Un prototipo puede tener una referencia a otro prototipo (así es como funciona la herencia en JavaScript), formando una cadena de prototipos (*prototype chain*).
- Cuando se intenta acceder a una propiedad o método, JavaScript primero busca dentro del propio objeto. Si no lo encuentra, continúa buscando en su prototipo hasta encontrarlo o llegar al final de la cadena.
- En las funciones constructoras, los métodos compartidos suelen definirse en la propiedad `prototype`. Las instancias pueden acceder a ellos mediante su referencia interna al prototipo (`__proto__`).
### Prototipo (En consola del navegador)
![Proto1](https://bluuweb.github.io/desarrollo-web-bluuweb/img/proto1.png)

- En esta imagen, podrás ver lo que contiene el prototipo del constructor `Persona`.
- Además de lo que contiene `Persona`, aparecen otras propiedades y métodos como `valueOf`, `toString`, etc. Estos pertenecen al prototipo de `Object`, ya que el prototipo de `Persona` contiene una referencia al prototipo de `Object`.
- Esto significa que `Persona` hereda las propiedades y métodos que tiene `Object`, demostrando cómo funciona la cadena de prototipos (*prototype chain*).

![proto2](https://bluuweb.github.io/desarrollo-web-bluuweb/img/MDN-Graphics-person-person-object-2.png)

:::tip Info
- [freecodeCamp](https://www.freecodecamp.org/espanol/news/prototipo-javascript-expliacado-con-ejemplos/)
- [Prototype](https://cosasdigitales.com/articulos-diseno-web/prototype-en-javascript-una-vision-practica/)
- [Javascript Prototype](https://arielfuggini.com/javascript-prototypes/)
- [Un vistazo a los prototipos](https://ricardogeek.com/un-vistazo-a-los-prototipos-de-javascript/)
- [prototype methods](https://es.javascript.info/prototype-methods)
- [prototipos en js](https://anamartinezaguilar.medium.com/prototipos-en-js-a3c36e16a1bd)
:::
:::tip
- La propiedad `__proto__` contiene una referencia al `prototype` del constructor.
- Gracias a esta referencia, las instancias pueden acceder a las propiedades y métodos definidos en el `prototype`.
:::
###  hasOwnProperty

Permite comprobar si una propiedad pertenece directamente al objeto y no a su cadena de prototipos. Es decir, verifica si existe en el propio objeto, pero no en su prototipo.

:::tip Explicación de prototipo
Las propiedades y métodos de un objeto no siempre están definidos directamente dentro del objeto. JavaScript busca estos elementos en la cadena de prototipos hasta encontrarlos.
:::

Probar en la consola del navegador:

```js
const array = [1,2,3]
array. 
```

Luego de escribir el punto, se mostrarán todos los métodos y propiedades a los que el array puede acceder.

:::tip
Los métodos y propiedades no se copian y pegan dentro del objeto, sino que JavaScript los busca en su cadena de prototipos.
:::

## Modificando prototipos

:::warning problema 
- Todas las instancias NO pueden usar el método saludarIngles, osea que solo algunos hablan ingles : 

```js
 
this.saludarIngles = function() {
        return `${this.nombre} says hi!`;
    }

```

:::

:::warning problema
Como se ve en la imagen, el método para hablar en ingles no esta en la cadena de prototipos.
![proto3](https://bluuweb.github.io/desarrollo-web-bluuweb/img/proto2.png)

:::

#### Modificar el prototipo:
 ```js
 // Funcion constructora = Plantilla = Class

function Persona(nombre) {
    this.nombre = nombre;

    this.saludar = function () {
        return `${this.nombre} dice hola`;
    }
    // Todos los estudiantes no saben ingles
    // this.saludarIngles = function() {
    //     return `${this.nombre} says hi!`;
    // }
}
// Persona va a tener este nuevo metodo , pero ahora es accedido por el prototipo Persona
// Figura en el prototipo de Persona ahora
 Persona.prototype.saludarIngles = function() {
    return `${this.nombre} says hi!`;
}

// Crear un objeto literaL
const juanito = new Persona("juanito");
console.log(juanito);

 ```


```js
// Funcion constructora = Plantilla = Class

function Persona(nombre) {
    this.nombre = nombre;

    this.saludar = function () {
        return `${this.nombre} dice hola`;
    }
    // Todos los estudiantes no saben ingles
    // this.saludarIngles = function() {
    //     return `${this.nombre} says hi!`;
    // }
}
// Persona va a tener este nuevo metodo ,   pero ahora es accedido por el prototipo Persona
// Figura en el prototipo de Persona ahora
 Persona.prototype.saludarIngles = function() {
    return `${this.nombre} says hi!`;
}

// Crear un objeto literaL
const juanito = new Persona("juanito");
console.log(juanito.saludarIngles());

```

:::warning 
En el frontend todo es publico , en el backend NO.
:::

## class
- Las clases de JavaScript, introducidas en ECMAScript 2015 (ES6), son una forma más sencilla de crear objetos y trabajar con la herencia.
- Son una alternativa a las funciones constructoras con las que hemos trabajado anteriormente.
- La sintaxis de clases no cambia la forma en que JavaScript funciona internamente, ya que sigue utilizando prototipos.
- Las clases permiten escribir código orientado a objetos de una manera más clara y fácil de entender.
- Los métodos definidos dentro de una clase se almacenan en el `prototype` de la clase y son compartidos por todas sus instancias.

```js
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }

    // Método de Persona (se almacena en Persona.prototype)
    saludar() {
        return `${this.nombre} dice hola!`;
    }

    // Diferente: se crea como una propiedad de instancia que contiene una función.
    // Cada instancia tendrá su propia copia de este método.
    saludarIngles = function() {
        return `${this.nombre} says hi!`;
    };
}

const personaUno = new Persona("Ignacio");
const personaDos = new Persona("Pedro");

console.log(personaUno.saludar());
console.log(personaUno.saludarIngles());


// Comparamos por referencia
console.log(personaUno.saludarIngles === personaDos.saludarIngles); // false , no tienen el mismo método
console.log(personaUno.saludar === personaDos.saludar); // true, tienen el mismo método
```

:::tip Diferencias con las funciones constructoras
- En las funciones constructoras, se utiliza el nombre de la función junto con `new` para ejecutar la función constructora y crear una nueva instancia del objeto.
- En las clases, se utiliza la palabra clave `class` junto con el nombre de la clase para definir la plantilla. Todo lo que esté dentro de `{}` pertenece a la clase (plantilla).
- Para crear una instancia a partir de una clase, se utiliza el nombre de la clase junto con `new`, lo que ejecuta automáticamente el método `constructor` de la clase para inicializar (crear) la instancia.
- Por lo tanto, `new FuncionConstructora()` y `new NombreClase()` cumplen una función similar: ambos crean una nueva instancia.
- `constructor(...){código}`: Es la forma de definir el constructor dentro de una clase. Al crear una instancia, no se utiliza `new constructor()`, sino `new NombreClase()`. Internamente, `new NombreClase()` ejecuta el método `constructor()` de la clase para inicializar (crear) la nueva instancia.
- Dentro del `constructor`, las propiedades se pueden definir utilizando `this`, al igual que en las funciones constructoras.
- Hay dos sintaxis para declarar métodos:
  - Utilizando la sintaxis de método abreviado: `nombreMetodo(){código}`. Los métodos definidos de esta forma se almacenan en el `prototype` de la clase y son compartidos por las instancias.
  - Utilizando la sintaxis de asignación: `nombreMetodo = function(){código}`. Lo definido de esta forma se almacena en la propia instancia, por lo que cada objeto tendrá su propia copia y no se comparte mediante el prototipo.
- Para crear un objeto a partir de una clase se utiliza `new NombreClase(argumentos)`. Internamente, JavaScript ejecuta el método `constructor(argumentos)` para inicializar(crear) la nueva instancia.
:::





## get y setter

- El encapsulamiento permite controlar cómo se accede y modifica la información interna de un objeto. Para esto se pueden utilizar los métodos `get` y `set`.
- El `get` permite obtener el valor de una propiedad.
- El `set` permite modificar o asignar un nuevo valor a una propiedad.
- Los `get` no reciben parámetros y deben devolver un valor.
- Los `set` reciben exactamente un parámetro, que representa el nuevo valor que se quiere asignar.
- Los `get` y `set` se utilizan sin paréntesis `()`, ya que se acceden como si fueran propiedades.
- [Más información](./objeto.md#getters-y-setters)
```js
// Funcion constructora = Plantilla = Class

class Persona { 
    // Construye propiedades
    constructor(nombre) {
        this.nombre = nombre
    }
   // Crear un get
get getNombre() { return this.nombre}

    // Es un metodo
    saludar() {
        return `${this.nombre} dice hola`;
    }
}

const juanito = new Persona("juanito");
juanito.nombre = "pedrito";
// Llamar al get
console.log(juanito.getNombre);

```

:::warning Mala practica
```js
	// Mala practica
	const juanito = new Persona("juanito");
	// Asignar un nuevo valor a la propiedad nombre
	juanito.nombre = "pedrito";
	console.log(juanito);


```

:::

```js

// Funcion constructora = Plantilla = Class

class Persona { 
    // Construye propiedades
    constructor(nombre) {
        this.nombre = nombre
    }
   // Crear un get
get getNombre() { return this.nombre}

  //crear un set
  set setNombre(nombre) { this.nombre = nombre};

    // Es un metodo
    saludar() {
        return `${this.nombre} dice hola`;
    }
}
const juanito = new Persona("juanito");
// Llamar al set para asignarle un nuevo valor a la propiedad nombre 
juanito.setNombre = "coco";
// Llamar al get para obtener el valor de la propiedad nombre
console.log(juanito.getNombre);

```

## Static
- La palabra clave `static` define un método estático dentro de una clase.
- Los métodos estáticos no pueden ser llamados mediante una instancia de la clase. Es decir, los objetos creados mediante la clase no tienen acceso a estos métodos.
- Se accede a ellos directamente desde la clase.
- Dentro de un método estático, `this` contiene una referencia a la clase en lugar de a una instancia.

```js
// Funcion constructora = Plantilla = Class

class Persona { 
    // Construye propiedades
    constructor(nombre) {
        this.nombre = nombre
    }
   // Crear un get
get getNombre() { return this.nombre}

  //crear un set
  set setNombre(nombre) { this.nombre = nombre};

    // Es un metodo
    saludar() {
        return `${this.nombre} dice hola`;
    }

   // Metodo estatico
    static probarSaludo(nombre){
        return `${nombre} probando saludo`;
    }
}
const juanito = new Persona("juanito");
console.log(Persona.probarSaludo("Pepe"))

```
## Heredar

-	La palabra clave extends es usada  para crear una clase hija.

```js
	// Funcion constructora = Plantilla = Class
	
	class Persona { 
	    // Construye propiedades
	    constructor(nombre , edad) {
	        this.nombre = nombre
	        this.edad = edad
	    }
	   // Crear un get
	get getNombre() { return this.nombre}
	
	  //crear un set
	  set setNombre(nombre) { this.nombre = nombre};
	
	    // Es un metodo
	    saludar() {
	        return `${this.nombre} dice hola`;
	    }
	
	   // Metodo estatico
	    static probarSaludo(nombre){
	        return `${nombre} probando saludo`;
	    }
	}
	
	// Una clase que va a heredar todo lo que contiene la clase Persona 
	
	class Estudiante extends Persona {
	
	}
	
	const juanito = new Estudiante ("juanito" , 25);
	console.log(juanito);

```
:::tip Observación
- Para crear una clase hija que herede las propiedades y métodos de una clase padre se utiliza:
```js
class ClaseHija extends ClasePadre {
    // plantilla de la clase hija
}
```
- La clase hija puede utilizar lo definido en la clase padre y además agregar sus propias propiedades y métodos.
:::

Si un método tiene el mismo nombre (que el de la clase padre) se sobrescribe:


```js
// Funcion constructora = Plantilla = Class

class Persona { 
    // Construye propiedades
    constructor(nombre , edad) {
        this.nombre = nombre
        this.edad = edad
    }
   // Crear un get
get getNombre() { return this.nombre}

  //crear un set
  set setNombre(nombre) { this.nombre = nombre};

    // Es un metodo
    saludar() {
        return `${this.nombre} dice hola`;
    }

   // Metodo estatico
    static probarSaludo(nombre){
        return `${nombre} probando saludo`;
    }
}

// Una clase que va a heredar todo lo que contiene la clase Persona 

class Estudiante extends Persona {
    // Se sobrescribe al metodo saludar de la clase Persona.
    saludar() {
        return `${this.nombre} desde estudiante`;
    }
}

const juanito = new Estudiante ("juanito" , 25);
console.log(juanito.saludar());

```

## Super

- [La palabra clave `super` permite utilizar los métodos y llamar al constructor de la clase padre.](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes#llamadas_a_s%C3%BAperclases_con_super)
- `super(argumentos)` ejecuta el constructor de la clase padre, permitiendo inicializar las propiedades heredadas.
- `super.metodo()` permite llamar a un método de la clase padre desde la clase hija, reutilizando su funcionalidad.
```js
// Funcion constructora = Plantilla = Class

class Persona { 
    // Construye propiedades
    constructor(nombre , edad) {
        this.nombre = nombre
        this.edad = edad
    }
   // Crear un get
get getNombre() { return this.nombre}

  //crear un set
  set setNombre(nombre) { this.nombre = nombre};

    // Es un metodo
    saludar() {
        return `${this.nombre} dice hola`;
    }

   // Metodo estatico
    static probarSaludo(nombre){
        return `${nombre} probando saludo`;
    }
}

// Una clase que va a heredar todo lo que contiene la clase Persona 

class Estudiante extends Persona {

   constructor(nombre,edad , notas) {
       // Invocando al constructor de la clase padre con el super()
       super(nombre , edad)
       this.notas = notas;
   }

    // Se sobrescribe al metodo saludar de la clase Persona.
    saludar() {
        return `${this.nombre} desde estudiante`;
    }
}

const juanito = new Estudiante ("juanito" , 25 , 5);
console.log(juanito);

```

### Dos formas de poner un valor por defecto en la propiedad notas

```js
class Estudiante extends Persona {
   // 1 forma - Un parametro con valor por defecto en el constructor
   constructor(nombre,edad , notas = 0) {
       // Invocando al constructor de la clase padre con el super()
       super(nombre , edad)
       // 2 forma - Asignandolo  en caso que "notas" no exista.
       this.notas = notas || 0
       }

    // Se sobrescribe al metodo saludar de la clase Persona.
    saludar() {
        return `${this.nombre} desde estudiante`;
    }
}

```

```js
// Funcion constructora = Plantilla = Class

class Persona { 
    // Construye propiedades
    constructor(nombre , edad) {
        this.nombre = nombre
        this.edad = edad
    }
   // Crear un get
get getNombre() { return this.nombre}

  //crear un set
  set setNombre(nombre) { this.nombre = nombre};

    // Es un metodo
    saludar() {
        return `${this.nombre} dice hola`;
    }

   // Metodo estatico
    static probarSaludo(nombre){
        return `${nombre} probando saludo`;
    }
}

// Una clase que va a heredar todo lo que contiene la clase Persona 

class Estudiante extends Persona {

   constructor(nombre,edad , notas = 0 ) {
       // Invocando al constructor de la clase padre con el super()
       super(nombre , edad)
   
       this.notas = notas || 0
       }
     
       set setNotas(notas) { 
           this.notas = notas
        };
       get getNotas() { 
           return this.notas
         };
    // Se sobrescribe al metodo saludar de la clase Persona.
    saludar() {
        return `${this.nombre} desde estudiante`;
    }
}

const juanito = new Estudiante("juanito" , 25 );
juanito.setNotas = 9;
console.log(juanito.getNotas);

```

## Private class fields

[Info](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/Private_class_fields)

[Compatibilidad](https://caniuse.com/?search=private%20fields)

- Las propiedades de una clase son públicas por defecto, por lo que pueden ser accedidas o modificadas desde fuera de la clase. Es decir, una instancia puede acceder y modificar estas propiedades.
- JavaScript permite definir campos (propiedades) privados utilizando el símbolo `#` delante del nombre de la propiedad.
- Al utilizar `#`, indicamos que la propiedad es privada, por lo que no puede ser accedida desde fuera de la clase. Es decir, una instancia no tiene acceso a ella.
- Los campos privados solo pueden ser utilizados dentro de la propia clase.

```js
	class Estudiante extends Persona {
	    // Es privado
	   #notas = 0;
	     
	       set setNotas(notas) { 
	           this.#notas = notas
	        };
	       get getNotas() { 
	           return this.#notas
	         };
	   
	}
	
	const juanito = new Estudiante("juanito" , 25 );
	juanito.setNotas = 9;
	console.log(juanito.getNotas);

```

No se podría acceder directo a la propiedad #notas

```js
console.log(juanito.#notas);
```

:::warning
- En JavaScript del frontend, el código se ejecuta en el navegador del usuario, por lo que puede ser inspeccionado. Los campos privados (`#`) no sirven para ocultar información sensible.
- En backend, al ejecutarse en un entorno controlado por el servidor, se pueden utilizar campos privados para proteger la lógica interna de una clase.
:::

:::tip
- Los campos privados (`#`) solo pueden ser accedidos dentro de la misma clase.
- Para permitir el acceso o modificación desde fuera, se pueden utilizar métodos como `getter` y `setter`.
:::

## MegaPractica Class

:::tip Consejos para la practica
- Al comienzo del script  JS se selecciona los elementos.
- Con la delegación de eventos podemos acceder a eventos que no todavia no existen en el DOM.
- El className remplaza todas las clases.
- Se puede manipular las clases de un elemento de varias manera.
- Se puede modificar el mismo array con MAP() si no le asignas a una variable.
- No colocar las etiqueta template donde se va a insertar información.
:::




:::tip  dataset
Usamos data-nombre / dataset.
El dataset es para manipular el DOM con JS.
crear un data:
elemento.dataset.nombre = valor;
acceder al valor
elemento.dataset.nombre 
:::



```html
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Clases</title>
    <link crossorigin="anonymous" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" rel="stylesheet" />
</head>

<body>
    <div class="container my-5">
        <h1>Estudiantes y Profesores</h1>
        <form id="formulario">
            <input type="text" class="form-control mb-2" value="juanito" name="nombre" placeholder="Ingrese nombre">
            <input type="number" class="form-control mb-2" value="25" name="edad" placeholder="Ingrese edad">
            <select class="form-select mb-2" name="opcion">
                <option value="Estudiante" selected>Estudiante</option>
                <option value="Profesor">Profesor</option>

            </select>
            <button class="btn btn-primary" type="submit">Agregar</button>
        </form>

        <section class="row mt-3">
            <div class="col-6" id="cardEstudiante">
               
            </div>
            <div class="col-6" id="cardProfesor">
               
            </div>
        </section>
    </div>
    <template id="TemplateEstudiante">
        <article class="card mb-2">
            <div class="card-body">
                <h5>
                    <span class="text-primary">Nombre</span>
                    <span class="badge bg-success">Aprobado</span>
                </h5>
                <h6></h6>
                <p class="lead">edad</p>
                <button class="btn btn-success">Aprobar</button>
                <button class="btn btn-danger">Reprobar</button>
            </div>
        </article>
    </template>
    <template id="TemplateProfesor">
        <article class="card mb-2 bg-dark text-white">
            <div class="card-body">
                <h5>nombre</h5>
                <h6>Profesor</h6>
                <p class="lead">Edad</p>
            </div>
           </article>
    </template>
    <script src="app.js"></script>
</body>

</html>

```

```js
// Seleccionar elemento
const formulario = document.querySelector('#formulario');
const cardEstudiante = document.querySelector('#cardEstudiante');
const cardProfesor = document.querySelector('#cardProfesor');
const TemplateEstudiante = document.querySelector('#TemplateEstudiante').content;
const TemplateProfesor = document.querySelector('#TemplateProfesor').content;

 const estudiantes =  [];
 const profesores =  [];

// Eventos
formulario.addEventListener('submit' , e => {
    e.preventDefault();

    const datos = new FormData(formulario);
    const [nombre , edad , opcion] = [...datos.values()];
   
    if (opcion === "Estudiante") {
        const  estudiante = new Estudiante(nombre , edad );
        estudiantes.push(estudiante);
        Persona.pintarPersonaUI(estudiantes , "Estudiante");
    }

    if (opcion === "Profesor") {
        const profesor = new Profesor(nombre , edad);
        profesores.push(profesor);
        Persona.pintarPersonaUI(profesores , "Profesor");
    }
   
})

 document.addEventListener('click' , e => {
      // Si existe
     if (e.target.dataset) {
         if(e.target.matches(".btn-success")) {
          // Se modifica el array con MAP
           estudiantes.map(item => {
                 if (item.nombre === e.target.dataset.id) {
                     item.setEstado = true;
                 }
                 return item;
             })

             Persona.pintarPersonaUI(estudiantes , "Estudiante");
         }
         if(e.target.matches(".btn-danger")) {
             // Se modifica el array con MAP
             estudiantes.map(item => {
                if (item.nombre === e.target.dataset.id) {
                    item.setEstado = false;
                }
                return item;
            })

            Persona.pintarPersonaUI(estudiantes , "Estudiante");
         }
     }

 } )

// Clases
class Persona {
  constructor( nombre , edad) {
     this.nombre = nombre;
     this.edad = edad;
  }
   
   static pintarPersonaUI(persona , tipo) {
         if (tipo === "Estudiante") {
            cardEstudiante.textContent = "";
            const fragment = document.createDocumentFragment();
            persona.forEach(item => {
                fragment.appendChild(item.agregarNuevoEstudiante())
            })
            cardEstudiante.appendChild(fragment);
         }
         if (tipo === "Profesor") {
            cardProfesor.textContent = "";
            const fragment = document.createDocumentFragment();
            persona.forEach(item => {
                fragment.appendChild(item.agregarNuevoProfesor())
            })
            cardProfesor.appendChild(fragment);
         }
   }
}

class Estudiante extends Persona {
    #estado = false;
    #estudiante = "Estudiante";
    constructor (nombre , edad ) {
        super(nombre, edad);
    }

   set setEstado(estado) { this.#estado = estado};
   get getEstado() {return this.#estado}
   get getEstudiante() { return this.#estudiante};
   

   agregarNuevoEstudiante() { 
       const clone = TemplateEstudiante.cloneNode(true);
       clone.querySelector('h5 .text-primary').textContent = this.nombre;

       clone.querySelector('h6').textContent = this.getEstudiante;
       clone.querySelector('.lead').textContent = this.edad;
       if (this.getEstado) {
           clone.querySelector('.badge').className = "badge bg-success";
           clone.querySelector('.btn-success').disabled = true;
           clone.querySelector('.btn-danger').disabled = false;
       } else {
        clone.querySelector('.badge').className = "badge bg-danger";
        clone.querySelector('.btn-danger').disabled = true;
        clone.querySelector('.btn-success').disabled = false;

       }
       clone.querySelector('.badge').textContent =  this.getEstado ? "Aprobado" : "Reprobado"

       clone.querySelector('.btn-success').dataset.id = this.nombre;
       clone.querySelector('.btn-danger').dataset.id = this.nombre;
       return clone;
   }
}

class Profesor extends Persona {
    #profesor = "Profesor";
    constructor (nombre , edad ) {
        super(nombre, edad);
    }

    agregarNuevoProfesor() { 
        const clone = TemplateProfesor.cloneNode(true);
        clone.querySelector("h5").textContent = this.nombre;
        clone.querySelector("h6").textContent = this.#profesor;
        clone.querySelector(".lead").textContent = this.edad;
         return clone;
    }
}


```

## Arreglar problema de Practica
:::warning PROBLEMA
 Ponerle ID unicas
:::
:::tip TRIM
Metodo TRIM
Devuelve verdadero si el usuario solo ingresa espacio en blanco.
:::

:::tip return vacio
IMPORTANTE EL RETURN VACIO ya que impide la ejecución del resto del código, lo detiene, sale del bloque.
:::
:::tip Manipular clases
Se usa la propiedad remove de classList para eliminar una clase y la propiedad add para añadir una clase.
:::

:::tip user id
Implementamos el uid (user id).

Usamos el date.now() como  user id(NO RECOMENDADO , ES SOLO PARA PRACTICAR AHORA)
:::


:::tip date.now()
date.now() nos devuelve un numero de milisegundos trascurrido desde …. 
:::


:::tip dataset
Los dataset siempre son STRING.
Convertimos el valor que nos devuelve date.now() como String a través de la interpolación.
:::

```html
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Clases</title>
    <link crossorigin="anonymous" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" rel="stylesheet" />
</head>

<body>
    <div class="container my-5">
        <h1>Estudiantes y Profesores</h1>
        <div class="alert alert-danger d-none">Por favor ingrese todos los datos</div>
        <form id="formulario">
            <input type="text" class="form-control mb-2" value="juanito" name="nombre" placeholder="Ingrese nombre">
            <input type="number" class="form-control mb-2" value="25" name="edad" placeholder="Ingrese edad">
            <select class="form-select mb-2" name="opcion">
                <option value="Estudiante" selected>Estudiante</option>
                <option value="Profesor">Profesor</option>

            </select>
            <button class="btn btn-primary" type="submit">Agregar</button>
        </form>

        <section class="row mt-3">
            <div class="col-6" id="cardEstudiante">
               
            </div>
            <div class="col-6" id="cardProfesor">
               
            </div>
        </section>
    </div>
    <template id="TemplateEstudiante">
        <article class="card mb-2">
            <div class="card-body">
                <h5>
                    <span class="text-primary">Nombre</span>
                    <span class="badge bg-success">Aprobado</span>
                </h5>
                <h6></h6>
                <p class="lead">edad</p>
                <button class="btn btn-success">Aprobar</button>
                <button class="btn btn-danger">Reprobar</button>
            </div>
        </article>
    </template>
    <template id="TemplateProfesor">
        <article class="card mb-2 bg-dark text-white">
            <div class="card-body">
                <h5>nombre</h5>
                <h6>Profesor</h6>
                <p class="lead">Edad</p>
            </div>
           </article>
    </template>
    <script src="app.js"></script>
</body>

</html>

```

```js


// Seleccionar elemento
const formulario = document.querySelector('#formulario');
const cardEstudiante = document.querySelector('#cardEstudiante');
const cardProfesor = document.querySelector('#cardProfesor');
const TemplateEstudiante = document.querySelector('#TemplateEstudiante').content;
const TemplateProfesor = document.querySelector('#TemplateProfesor').content;
const alert = document.querySelector('.alert');

 const estudiantes =  [];
 const profesores =  [];

// Eventos
formulario.addEventListener('submit' , e => {

    e.preventDefault();
    alert.classList.add("d-none");
    const datos = new FormData(formulario);
    const [nombre , edad , opcion] = [...datos.values()];
    // Si nombre no tiene solo espacios en blanco
    if (!nombre.trim() || !edad.trim() || !opcion.trim() ) {
        alert.classList.remove('d-none');
        return;
    }
    if (opcion === "Estudiante") {
        const  estudiante = new Estudiante(nombre , edad );
        estudiantes.push(estudiante);
        Persona.pintarPersonaUI(estudiantes , "Estudiante");
    }

    if (opcion === "Profesor") {
        const profesor = new Profesor(nombre , edad);
        profesores.push(profesor);
        Persona.pintarPersonaUI(profesores , "Profesor");
    }
   
})

 document.addEventListener('click' , e => {
      // Si existe
     if (e.target.dataset.uid) {
         if(e.target.matches(".btn-success")) {
          // Se modifica el array con MAP
           estudiantes.map(item => {
                 if (item.uid === e.target.dataset.uid) {
                     item.setEstado = true;
                 }
                 return item;
             })

             Persona.pintarPersonaUI(estudiantes , "Estudiante");
         }
         if(e.target.matches(".btn-danger")) {
             // Se modifica el array con MAP
             estudiantes.map(item => {
                if (item.uid === e.target.dataset.uid) {
                    item.setEstado = false;
                }
                return item;
            })

            Persona.pintarPersonaUI(estudiantes , "Estudiante");
         }
     }

 } )

// Clases
class Persona {
  constructor( nombre , edad) {
     this.nombre = nombre;
     this.edad = edad;
     this.uid = `${Date.now()}`;
  }
   
   static pintarPersonaUI(persona , tipo) {
         if (tipo === "Estudiante") {
            cardEstudiante.textContent = "";
            const fragment = document.createDocumentFragment();
            persona.forEach(item => {
                fragment.appendChild(item.agregarNuevoEstudiante())
            })
            cardEstudiante.appendChild(fragment);
         }
         if (tipo === "Profesor") {
            cardProfesor.textContent = "";
            const fragment = document.createDocumentFragment();
            persona.forEach(item => {
                fragment.appendChild(item.agregarNuevoProfesor())
            })
            cardProfesor.appendChild(fragment);
         }
   }
}

class Estudiante extends Persona {
    #estado = false;
    #estudiante = "Estudiante";
    constructor (nombre , edad ) {
        super(nombre, edad);
    }

   set setEstado(estado) { this.#estado = estado};
   get getEstado() {return this.#estado}
   get getEstudiante() { return this.#estudiante};
   

   agregarNuevoEstudiante() { 
       const clone = TemplateEstudiante.cloneNode(true);
       clone.querySelector('h5 .text-primary').textContent = this.nombre;

       clone.querySelector('h6').textContent = this.getEstudiante;
       clone.querySelector('.lead').textContent = this.edad;
       if (this.getEstado) {
           clone.querySelector('.badge').className = "badge bg-success";
           clone.querySelector('.btn-success').disabled = true;
           clone.querySelector('.btn-danger').disabled = false;
       } else {
        clone.querySelector('.badge').className = "badge bg-danger";
        clone.querySelector('.btn-danger').disabled = true;
        clone.querySelector('.btn-success').disabled = false;

       }
       clone.querySelector('.badge').textContent =  this.getEstado ? "Aprobado" : "Reprobado"

       clone.querySelector('.btn-success').dataset.uid = this.uid;
       clone.querySelector('.btn-danger').dataset.uid = this.uid;
       return clone;
   }
}

class Profesor extends Persona {
    #profesor = "Profesor";
    constructor (nombre , edad ) {
        super(nombre, edad);
    }

    agregarNuevoProfesor() { 
        const clone = TemplateProfesor.cloneNode(true);
        clone.querySelector("h5").textContent = this.nombre;
        clone.querySelector("h6").textContent = this.#profesor;
        clone.querySelector(".lead").textContent = this.edad;
         return clone;
    }
}

```

:::tip Control + D
Para copiar la siguiente ocurrencia

:::


## Propiedades y métodos de una instancia
- Además de los métodos y propiedades definidos en la clase, una instancia también hereda propiedades y métodos de `Object`.

#### Propiedad `constructor`
- Devuelve la función constructora que creó el objeto.
- Esa función constructora posee la propiedad `name`, que devuelve el nombre de la función. Como el objeto fue creado a partir de una clase, este valor coincide con el nombre de la clase.
- Ejemplo:
```js
class Dashboard {}
const dashboard = new Dashboard();
console.log(dashboard.constructor.name);
```
:::tip Observación
- La propiedad `constructor` devuelve una referencia a la función constructora que creó la instancia.
- La función constructora posee la propiedad `name`, que devuelve el nombre de la clase con la que se creó el objeto.
:::