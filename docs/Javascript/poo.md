---
sidebar_position: 9
---
# JS POO
- La programación orientada a objetos es un paradigma de la programación en el que se crean objetos para la manipulacón de datos y donde, por lo general, cada objeto ofrece una funcionalidad especial.
-	JavaScript no es un lenguaje orientado a objetos basado en clases. Pero tiene formas de usar la programación orientada a objetos (POO).
-	JavaScript es un lenguaje basado en prototipos.

##  ¿Que es POO?
-	Es un paradigma de la programación en el que se crean objetos para la manipulacón de datos y donde, por lo general, cada objeto ofrece una funcionalidad especial.
-	La idea básica de la POO es que usamos objetos para modelar cosas del mundo real.
-	POO nos ayuda a la reutilización del código.

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

Todos los las personas tienen datos en común (nombre, identificador, edad) y también métodos específicos. 

Para eso son los constructores.

A través de un constructor creamos objetos literales.


- La Clase "Persona" contiene: 
  -	Datos generales (propiedades): nombre, edad, género e intereses
  -	Funcionalidades (métodos): que sea capaz de saludar.

Esto es conocido como abstracción — crear un modelo simple de algo complejo que represente sus aspectos más importantes y que sea fácil de manipular para el propósito de nuestro programa.

:::tip
-	En algunos lenguajes de POO, esta definición se la llama class (JavaScript utiliza diferentes mecanismos y terminologías, como verás a continuación)
-	Esto no es en realidad un objeto, es un modelo (o plantilla) que define las características que un objeto debería tener.

:::

:::tip
 La plantilla nos permite crear objetos.
:::

### Paso 2  - Crear objetos
- Partiendo de nuestra clase, podemos crear instancias de objetos — son objetos que contienen los datos y funcionalidades definidas en la clase. 
- Teniendo a nuestra clase Persona, ahora podemos crear gente con características más específicas

:::tip
-	El proceso de crear una instancia  desde una clase se llama instanciación.
- La  instanciación equivale a crear un objeto literal a partir de una clase
- En la instanciación , se ejecuta la funcion constructora
:::

### Paso 3 - Clases especializadas/Heredar

-	En este caso nosotros no queremos personas genéricas — queremos docentes y estudiantes, que son los dos tipos más específicos de personas.
-	En POO, podemos crear nuevas clases basadas en otras clases, estas nuevas clases secundarias pueden heredar los datos y métodos de su clase primaria.
-	Cuando la funcionalidad difiere entre clases, puedes definir funciones especializadas directamente en ellas según sea necesario

:::tip
A partir de una plantilla genérica, podemos crear otras plantillas más específicas manteniendo los mismos datos y métodos que la genérica y sumándole los nuevos (especifico).

Los estudiantes pueden tener notar y los profesores materias asignadas.
:::

## ¿cómo se implementa en JS?

:::tip Funciones constructoras
JavaScript, utiliza funciones especiales llamadas funciones constructoras para definir objetos y sus características.
:::

- Los constructores en JavaScript permiten crear múltiples objetos de manera eficiente, asociando datos y funciones a cada uno según sea necesario.
- Cuando se crea una nueva instancia de un objeto a partir de una función constructora, su funcionalidad principal (métodos y/o propiedades) no se copia directamente en el nuevo objeto, como ocurre en los lenguajes de programación orientados a objetos "clásicos". En lugar de copiar la funcionalidad (métodos y propiedades) en cada nuevo objeto que se crea, JavaScript crea una conexión entre el objeto y su prototipo. Esta conexión permite que el objeto pueda "ver" y usar las funciones y datos definidos en el prototipo sin que estos se dupliquen.
- Para acceder a esta "funcionalidad principal", se utiliza una referencia a la clase que contiene una propiedad, comúnmente denominada __proto__ o prototype, que está presente en todos los objetos. Esta referencia en JavaScript se llama prototipo.
- JavaScript no realiza una instanciación en el sentido estricto de "POO", sino que utiliza un mecanismo diferente para compartir funcionalidades entre objetos a través de una cadena de prototipos por instancia.

#### No confundir propiedades de instancia con funcionalidad principal
##### Propiedades de instancias
- Específicas de la instancia: Cada vez que creas una nueva instancia, las propiedades definidas en el constructor (como edad o nombre) se crean y se asignan solo a esa instancia. Esto significa que cada objeto tiene su propia copia de estas propiedades.
- No compartidas: Como estas propiedades no se almacenan en el prototipo, no se comparten entre las instancias.
##### Funcionalidad principal
- Compartida entre instancias: Los métodos o propiedades definidos en el prototipo son compartidos por todas las instancias del objeto. Esto es parte de lo que llamamos la "funcionalidad principal" porque todas las instancias pueden acceder a estas sin tener que duplicar el código.
- Eficiencia: Como estas funcionalidades se definen en el prototipo, JavaScript no necesita duplicarlas para cada objeto, lo que ahorra memoria.


:::tip TIP
No ser "POO clásica" no es necesariamente algo malo; la POO puede ser muy compleja rápidamente, y JavaScript tiene algunas agradables formas de aprovechar las características de la POO sin tener que profundizar demasiado en ello.
:::
:::tip 
Javascript es un lenguaje basado en prototipo.
Al instanciar un nuevo objeto, estamos usando la cadena de prototipo.
:::

## Funciones constructoras

Es una plantilla para construir muchos objetos.

Forma tradicional de javascript:
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
A través de la plantilla construimos objetos.
-	La función constructora es la versión de JavaScript de una clase.
-	Más adelante veremos que si se puede utilizar class
-	Tiene todas las características que esperas en una función, aunque no devuelve nada.
-	Básicamente sólo define propiedades y métodos.
- this sirve para:
   -  Crear las propiedades del nuevo objeto (instancia) en el constructor 
   -  Obtener una  referencia de la  instancia en los metodos
-	new se usa para indicarle al navegador que queremos crear una nueva instancia(objeto)  a partir de la clase , la palabra new va seguida del nombre de la función constructora (esta debe tener los parametros que se especifico)
-  new funcionConstructora() : Invoca a la funcionConstructora() y devuelve una nueva instancia(objeto).
:::tip
Un nombre de función constructora generalmente comienza con una letra mayúscula — esta convención se utiliza para hacer que las funciones constructoras sean más fáciles de reconocer en el código.
:::

:::tip Otra forma de crear instancias de objetos
-	Puedes usar el constructor Object() para crear un nuevo objeto.
-	Esta es otra forma de crear instancias de objetos.
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
[Los prototipos son un mecanismo mediante el cual los objetos en JavaScript heredan características entre sí ](https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Object_prototypes)

:::warning Ojo
Javascript no instancia  objetos.
:::
## ¿Un lenguaje basado en prototipos?
- JavaScript es comúnmente descrito como un lenguaje basado en prototipos. Esto significa que, en lugar de copiar métodos y propiedades de una clase a otra, los objetos en JavaScript están vinculados a un prototipo. Este prototipo contiene métodos y propiedades que los objetos pueden usar directamente, sin que estas características se dupliquen en cada objeto.
- Un prototipo a su vez, puede tener el prototipo de otro constructor (clase), creando una cadena de prototipos. Esta cadena explica cómo diferentes objetos pueden acceder a métodos y propiedades definidos en otros objetos.
-	Para ser exactos, En JavaScript, los métodos y propiedades que son compartidos entre objetos no se definen en la instancia del objeto, sino en una propiedad especial llamada prototype, que pertenece a la función constructora del objeto. Cuando creas una instancia de un objeto, esta instancia tiene acceso al prototype a través de una referencia interna conocida como __proto__, que apunta al prototype del constructor.
- Gracias a esta conexión, cuando intentas acceder a un método o propiedad en un objeto, JavaScript primero busca en la instancia. Si no lo encuentra allí, sigue la cadena de prototipos hasta encontrarlo en algún prototipo relacionado. De esta manera, todas las instancias pueden acceder a los métodos y propiedades definidos en su prototipo, sin necesidad de duplicarlos en cada objeto.



### Prototipo (En consola del navegador)
![Proto1](https://bluuweb.github.io/desarrollo-web-bluuweb/img/proto1.png)

-	En esta imagen, podras ver lo que contiene  el  prototipo del constructor Persona.
-	Ademas de lo que contiene la clase Persona , se encuentran  otras propiedades/metodos como  watch, valueOf, etc  . Estas  están definidas en el  prototipo de Persona(), ya que este contiene el prototipo de Object. Esto significa que Persona() hereda lo que contiene el prototipo Object
-	Esto demuestra que el prototipo cadena funciona.

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
- La propiedad \__proto__  contiene una referencia del prototype.
- Con la propiedad \__proto__ podemos manipular(modificar) el prototipo.
:::
###  hasOwnProperty

Busca una propiedad en la función constructora y si no lo encuentra sube un nivel hasta encontrarlo.

:::tip Explicación de prototipo
Todas las propiedades y métodos de un objeto no se copian y pegan de la función constructora, sino que Javascript lo busca en su cadena de prototipos.
:::

Probar en la consola del navegador: 

```js
const array = [1,2,3]
array. 
```

Luego de escribir el punto , se mostrara todos los métodos y propiedades del prototipo.

:::tip
Pero no se copian y pegan, sino que viajan en su cadena de prototipo.
:::

:::tip 
No se copian y pegan los métodos y propiedades, sino que se busca en la cadena de prototipos.
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

### Modificar el prototipo:
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
-	Las clases de javascript, introducidas en ECMAScript 2015, son una mejora sintáctica sobre la herencia basada en prototipos de - JavaScript.
- La sintaxis de las clases no introduce un nuevo modelo de herencia orientada a objetos en JavaScript.
- Las clases de JavaScript proveen una sintaxis mucho más clara y simple para crear objetos y lidiar con la herencia.
- Todos los métodos están la cadena de prototipo.

```js
class Persona {
    // funcion constructora de Persona()
    constructor(nombre) {
        this.nombre = nombre;
     
    }

    // Método 
    saludar = function() {
        return `${this.nombre} dice hola!`;
    };
}

// Revisa esto y verás que están al mismo nivel que los métodos:
Persona.prototype.saludarIngles = function() {
    return `${this.nombre} says hi!`;
};
// Creo un objeto literal
const personaUno = new Persona("Ignacio");

console.log(personaUno.saludarIngles());
```

:::tip
- [Los "metodos" se pueden abreviar](https://fedeleva.github.io/documentacion/docs/Javascript/objeto#metodos-1)

:::
## get y setter
-	El encapsulamiento simplemente encapsula las propiedades de un objeto para que no sean accesibles de manera publica y si deseas acceder a ellos externamente tendrás que usar metodos get y set (los cuales se definen con anterioridad)
-	Los get no reciben parámetros y siempre devuelven algo.
-	Los set pueden recibir solo un parámetro.
-	Los set y get se llaman sin los paréntesis ()
- Se usa el get para acceder al valor de la propiedad y el setter para modificar dicho valor.

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
-	La palabra clave static define un método estático para una clase.
-	Los métodos estáticos  no pueden ser llamados mediante una instancia de la clase.
- Son llamados directamente de la clase.
-	Los métodos estáticos son a menudo usados para crear funciones de utilidad para una aplicación.
- No utiliza this

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

- [La palabra clave super es usada para llamar funciones del objeto padre](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes#llamadas_a_s%C3%BAperclases_con_super)
- La palabra clave super , se utiliza para acceder a la "funcionalidad central (metodos/propiedades)" del padre.
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


-	Las propiedades de la clase son públicas de forma predeterminada y se pueden examinar o modificar fuera de la clase.
-	Sin embargo, existe una propuesta experimental para permitir la definición de campos(propiedades) de clases privados utilizando un #.

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
JAVASCRIPT en el frontend es todo publico.

EN EL BACKEND YA ES MAS SEGURO y se puede llegar a utilizar 
:::

:::tip
Con el private las propiedades son accedida por los métodos de la misma clase, setter y getter.
:::

## MegaPractica Class

:::tip Herramientas
Vamos a trabajar formData
:::

:::tip 
No colocar las etiqueta template donde se va a insertar información.
:::

:::tip 
Al comienzo del script  JS se selecciona los elementos.
:::

:::tip 
Con la delegación de eventos podemos acceder a eventos que no todavia no existen en el DOM.
:::


:::tip 
El className remplaza todas las clases.

Se puede manipular las clases de un elemento de varias manera.
:::

:::tip 
Se usa el operador ternario .
:::

:::tip 
Usamos data-nombre / dataset.

El dataset es para manipular el DOM con JS.

crear un data:

elemento.dataset.nombre = valor;

acceder al valor

elemento.dataset.nombre 


:::


:::tip 
Se puede modificar el mismo array con MAP() si no le asignas a una variable.
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