---
sidebar_position: 2
---





# Typescript  - Parte 2
## Typeof 
- Sirve para crear un tipo de dato a partir de una constante (variable):

```typescript
const address = {
   planet : 'Tierra' ,
   city : 'Madrid'
}

type Address = typeof address

```
:::tip Observación
- Typeof analiza la variable y crea un tipo de dato que representa a la constante.
- En este caso Typeof generaría: 
```typescript
type address = {
planet: string;
city: string;
}
```
- Typeof es más complejo en typescript que en javascript.

:::

## ReturnType
- Es una Utility Type.
- Funciona igual que typeof solamente que sirve para obtener el tipo de dato del retorno de una función.
- Ósea obtiene el tipo de dato que retorna la función:
```typescript
function createAddress() {
   return {
      planet: 'Tierra',
      city: 'Barcelona'
   }
}

type Address = ReturnType<typeof createAddress>

```
:::tip Observación
- Se usa junto con typeof.
- Sintaxis: ReturnType &lt;typeof funcion-X>.
- Esto obtiene el tipo de dato que retorna la funcion-X.
- Entonces ReturnType recibe dentro de los “&lt;>” la función a analizar para obtener el tipo de dato que devuelve.


:::

## Interface
- Es como type, sirve para crear un tipo de dato que especifique la estructura de un objeto.
- Las interfaces solo definen las propiedades y métodos que debe tener el objeto, pero no su implementación, eso significa que no sabemos el valor de las propiedades ni la lógica de los métodos.
- Ejemplo:
```typescript
interface Heroe {
    id: string 
    name : string
    age : number 
    saludar : () => void
}

const hero : Heroe = {
    id : '1' ,
    name: 'Spiderman' ,
    age: 30 ,
    saludar: () => {
        console.log('Hola');
    }
}
 

```


:::tip
- Es parecido a [POO](https://flevatti.github.io/documentacion/docs/C--/POO#interfaces).
:::

- Las interfaces pueden estar anidadas:
```typescript
interface Producto {
    id: number
    nombre: string 
  precio: number , 
  quantity : number
}

interface CarritoDeCompras {
    totalPrice: number
    productos: Producto[]
}

const carrito: CarritoDeCompras = {
    totalPrice: 100 ,
    productos : [
        {
            id: 1 ,
            nombre: 'Producto 1',
            precio : 100 ,
            quantity: 1
        }
    ]
}

 

```
#### Extends
- Puedes usar el mecanismo de [“herencia”](https://flevatti.github.io/documentacion/docs/C--/POO2#herencia) entre interfaces con la palabra extends.
- Con la palabra clave extends, una interfaz puede adquirir las propiedades/métodos de otra interfaz y a su vez crear los suyos.
- Ejemplo:
```typescript
interface Producto {
    id: number
    nombre: string 
  precio: number , 
  quantity : number
}

interface Zapatilla extends Producto {
    talla: number
}
```
:::tip
- Los types no pueden usar la palabra clave extends, en su lugar usan la unión y intersection type.

:::

#### Funciones
- 1 forma:
```typescript
interface CarritoOps {
    add : (product : Producto) => void,
    remove: (id:number) => void,
    clear: () => void
}

```
- 2 forma:
```typescript
interface CarritoOps {
    add(product: Producto): void ,
    remove(id:number) : void ,
    clear():void
}


```

#### Mismo nombre
- Se pueden crear dos interfaces con el mismo nombre, de forma automática Typescript las une (como si usara extends) formando una sola con todos los métodos/propiedades de las dos:

```typescript
interface CarritoOps {
    add : (product : Producto) => void,
    remove: (id:number) => void,
   
}

interface CarritoOps {
    clear: () => void
}
```
:::tip
- Esto con los type no ocurre.
- Las interfaces no hacen validaciones en tiempo de ejecución.


:::
## Interface de función
#### Interfaz Normal (No Función)
- Una interfaz normal en TypeScript describe la estructura de un objeto, es decir, define las propiedades y sus tipos de datos. Este tipo de interfaz no define funciones directamente, sino que solo especifica qué propiedades deben estar presentes y qué tipo de valores deben tener.
- Ejemplo de una Interfaz Normal:
```js
interface Persona {
  nombre: string;
  edad: number;
  direccion?: string; // Propiedad opcional
}

```
:::tip Observación
- En este caso, la interfaz Persona describe un objeto que tiene:
  -	nombre de tipo string.
  -	edad de tipo number.
  -	direccion de tipo string, pero es opcional (especificado por el ?).
- Este tipo de interfaz no tiene nada que ver con las funciones. Simplemente se usa para describir la estructura de un objeto.
:::

#### Interfaz de Función
- Una interfaz de función en TypeScript es una interfaz que describe una función, es decir, cómo debe ser la firma de la función: qué parámetros toma y qué tipo de valor devuelve. En lugar de describir propiedades de un objeto, describe la función.
- Ejemplo de una Interfaz de Función:
```js
interface Saludar {
  (nombre: string): string;
}

```
:::tip Observación
- En este caso, la interfaz Saludar describe una función que:
  -	Toma un argumento de tipo string (el nombre).
  -	Devuelve un valor de tipo string (probablemente un saludo).
- Dentro de los "{}"" se especifica los parámetros y sus tipos en los paréntesis y luego el tipo de dato de retorno.
:::

#### Diferencias Clave
1.	Tipo de Uso:
  -	Interfaz normal: Describe objetos y sus propiedades. No se utiliza para funciones, sino para objetos con claves y valores.
  -	Interfaz de función: Describe una función, especificando cómo debe ser llamada: qué parámetros toma y qué tipo de valor devuelve.
2.	Estructura:
  -	Interfaz normal: Tiene propiedades con sus tipos.
  -	Interfaz de función: Tiene firmas de funciones (parámetros y tipo de retorno).

#### Implementación de una interfaz de función
- Cuando implementas una interfaz de función, defines el cuerpo de la función. Por ejemplo:
```js
const saludar: Saludar = (nombre: string) => {
  return `Hola, ${nombre}`;
};

```
:::tip Observación
- Aquí, saludar es una función que cumple con la interfaz Saludar, ya que:
  -	Acepta un argumento de tipo string.
  -	Devuelve un valor de tipo string.
:::


#### Sobrecarga de funciones en interfaces de función
- La sobrecarga de métodos es un concepto en programación orientada a objetos (OOP) que permite definir varios métodos o funciones con el mismo nombre pero con diferentes tipos o números de parámetros. Dependiendo de los argumentos con los que se invoque el método, el compilador o el intérprete elegirá la versión adecuada del método.
- En lenguajes como TypeScript, JavaScript y Java, la sobrecarga de métodos es una forma de tener funciones con el mismo nombre que realizan diferentes tareas dependiendo de los parámetros que reciban.
- Una interfaz de función puede tener sobrecarga de funciones, lo que permite que una misma función sea llamada de diferentes maneras, especificando varias firmas para una sola función.
- Una interfaz de función en TypeScript es una interfaz que describe el tipo de una función, es decir, cómo debe ser la [firma de la función](../C--/guiaC.md#firma-del-metodo): qué parámetros toma y qué tipo de valor devuelve. En lugar de describir propiedades de un objeto, describe cómo debe ser llamada la función.

#### Ejemplo de sobrecarga
```js
interface Navegar {
  (ruta: string): void;
  (delta: number): void;
}

```
:::tip Observación
- Esta interfaz permite que Navegar sea una función que:
  1.	Se llama con un String 
  2.	Se llama con un number

:::

- Otro ejemplo:
```js
interface NavigateFunction {
  (to: To, options?: NavigateOptions): void; // Primera sobrecarga
  (delta: number): void; // Segunda sobrecarga
}

```
:::tip Observación
- Aunque ambas sobrecargas tienen el mismo nombre (NavigateFunction), TypeScript se encarga de identificar cuál de las dos sobrecargas utilizar según el tipo de parámetro que pases.
  -	Si pasas un string (como ``"/home"``) y un objeto de ruta (como ``{ pathname: "/home" }``), TypeScript usará la primera sobrecarga que toma una ruta y opciones adicionales.
  -	Si pasas un número (como -1), TypeScript usará la segunda sobrecarga que manipula el historial de navegación.
:::

## Type vs interface
- Con la interface podés usar extends, con type es imposible realizar eso.
- Podes tener dos interfaces con el mismo nombre, los types son únicos y no se pueden repetir.
- Un type puede trabajar con tipos de datos “primitivos” y objetos, las interfaces solo trabajan con objetos.
- Entonces para clases y objetos se debería utilizar interfaces, para el resto types.

## Narrowing
- Se le denomina Narrowing al siguiente error:
```typescript
function mostrarLongitud (objeto: number | string) {
    return objeto.lenght;
}

mostrarLongitud('2');

```
:::tip Observación
- La propiedad lenght no existe en number | String . Esto se debe a que la propiedad existe en String pero no en number.
:::


- Para solucionar esto, se debe “filtrar/descartar” tipos de datos para poder utilizar los métodos de uno en específico.
- Esto es idéntico a las aserciones de tipo, lo podemos hacer con Instanceof o con typeof también:
```typescript
function mostrarLongitud (objeto: number | string) {

    if (typeof objeto === 'string') {
        // Aca se trata al objeto como string
        return objeto.length
    }
    // Aca Typescript se dio cuenta que es un numero ya que descarto string con el if anterior
    return objeto.toString().length

}

mostrarLongitud('2');


```

:::tip Observación
- Typescript analiza las comprobaciones para detectar que tipo de dato es concretamente.
:::

- Otra forma de realizar lo mismo:

```typescript
interface Mario {
    company : 'Nintendo' ,
    nombre: string ,
    saltar: () => void
}

interface Sonic {
    company : 'Sega' ,
    nombre: string ,
    correr: ()=> void
}

type Personaje = Mario | Sonic

function jugar(personaje: Personaje) {
     if (personaje.company === "Nintendo") {
        // Aca ya se trata como Mario
         personaje.saltar();
         return;
     }
     // Si el código llega aca es porque se trata de Sonic
       personaje.correr()
}


```
:::tip Observación
- Analizando la propiedad company que tiene un valor fijo, Typescript se da cuenta si es Mario o Sonic.
- Es obligatorio usar return para evitar que Mario pueda usar los métodos de Sonic y que Typescript descarte a Mario (tipo de dato) cuando llegue a esa línea, en caso contrario Typescript te va a tirar un error.
:::

:::tip
- Instanceof es para saber la clase que se usó para crear X objeto. Es para ver el tipo de dato de una instancia de objeto.
- Typeof solo te devuelve el tipo de forma muy general, ejemplo: function , String , number , object , boolean , etc.
:::

#### ¿Pero qué pasaría si no tenemos la propiedad company?
- En este caso tendríamos que implementar un “type guard”:


```typescript

// Una funcion para comprobar si es sonic

function checkisSonic (personaje: Personaje) : personaje is Sonic {
    return (personaje as Sonic).correr != undefined
}


function jugar(personaje: Personaje) {
     if (checkisSonic(personaje)) {
          // Pasa la validación, se trata como Sonic
          personaje.correr();
          return;
     }
          // Si el código llega aca es porque se trata de Mario
     personaje.saltar();
}


```
:::tip Observación
- En el retorno del método checkisSonic especificamos “personaje is Sonic”, con esto le estamos diciendo a Typescript que la función va a comprobar si Personaje es Sonic o no. La lógica de comprobación la tiene que añadir el programador y puede ser cualquiera mientras funcione.
- Luego usamos ese método en la función jugar para que Typescript sepa que tipo de dato es personaje.
:::


:::warning
- Este método hay que evitarlo ya que hace que el código tenga muchas lineas y demasiadas comprobaciones.
- [Más información](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)

:::
## Never
- Es un tipo de dato.
- Es una especie de undefined para especificar un valor que nunca se va a producir/generar ya que por lo general se reproduce un error o algo que interrumpe el método y que impide que se llegue a esa línea de código.
- Ejemplo:
```typescript

function fn(x: string | number) {
      if (typeof x === "string") {
         // Aca es string
         x.toUpperCase()
      } else if (typeof x === 'number') {
        // Aca es number
        x.toFixed();
    } else {
        // Aca es never
        x
    }
      
}



```
:::tip Observación
- La X en el else es de tipo Never ya que nunca se va a llegar a esa línea (¿adivina por qué?).
:::




## Convencion d.ts
- Los tipos de datos se suelen agregar en un archivo que termina en d.ts 
- Ejemplo:
```typescript title="types.d.ts"
export interface Avenger {
    name: string;
    powerScore: number;
    wonBattles: number;
    age: number;
  }
```

:::tip Observación
- Los tipos de datos los exportas.
- Cuando vayas a utilizar algún tipo en un archivo especifico, simplemente lo importas.
:::

```typescript title="script.ts"
import {type Avenger} from './types.d'

class Avanger implements Avenger {
  name: string;
  public powerScore: number;
  readonly wonBattles: number = 0;
  age: number = 0;
  constructor(name: string, powerScore: number) {
    this.name = name;
    this.powerScore = powerScore;
  } 




  get fullName() {
    return `${this.name}, de poder ${this.powerScore}`;
  }

  set power(newPower: number) {
    if (newPower <= 100) {
      this.powerScore = newPower;
    } else {
      throw new Error("Power score cann´t be more than 100");
    }
  }
}

const avanger = new Avanger("Spidey", 80);
avanger.powerScore;

```

:::tip Observación
- Al importarlo especificamos que es un tipo de dato con la palabra type.
- [Más información](https://www.typescriptlang.org/docs/handbook/modules/reference.html#module-syntax)
:::


## Generico
- Observemos el siguiente código:

```typescript 
interface IUser {
  id: number;
  name?:string
}

interface ICar {
  id:number;
  color?:CarColor
}

type CarColor = "blue" | "red"

const user : IUser = {
  id:1
}

const car : ICar = {
  id:1
}

// keyof genera el siguiente tipo: type userFields = "id" | "color" | ...propiedades
function validateField(user: IUser , field: keyof IUser) : boolean {
  // Devuelve true si existe la propiedad en el objeto
  return Boolean(user[field])
}


function validateField2(car: ICar , field: keyof ICar) : boolean {
  // Devuelve true si existe la propiedad en el objeto
  return Boolean(car[field])
}

console.log(validateField(user , "id"))
console.log(validateField2(car , "id"))



```
:::tip Observación
- Gracias a keyof obtenemos acceso a todos los campos de la interface especificada (IUser).
:::


#### Problema 
- Tenemos dos métodos (validateField  y validateField2 ) que hacen exactamente lo mismo, la única diferencia es que los parámetros son de diferentes tipos de datos.
- Gracias a los genéricos podemos crear un solo método en lugar de dos y así nos ahorramos mucho código.
- Entonces creamos el método:

```typescript 
function validateField<T>(entity: T , field: keyof T) : boolean {
  // Devuelve true si existe la propiedad en el objeto
  return Boolean(entity[field])
}

```
:::tip Observación
- Lo que se encuentra dentro de “&lt;>”, ej:  &lt;A, B, C, …> Son parámetros(variables) que van a almacenar algún tipo de dato.
- A la hora de invocar el método a través del mismo signo “&lt;>” asignamos los tipos de datos para cada parámetro en el mismo orden.
:::

- Vamos al código:


```typescript 
function validateField<T>(entity: T , field: keyof T) : boolean {
  // Devuelve true si existe la propiedad en el objeto
  return Boolean(entity[field])
}

console.log(validateField<IUser>(user , "id"))
console.log(validateField<ICar>(car , "id"))

```
:::tip Observación
- La primera vez que se invoca el método T contiene el valor de IUser y por lo tanto seria: entity : IUser y field: keyof IUser.
- La segunda vez que se invoca el método T contiene el valor de ICar.
:::

- Pero si no especificamos ningún valor, Typescript va a usar su inferencia para reducir el tipo de dato y asignarle un tipo a cada parámetro de forma automática:


```typescript 
console.log(validateField(car , "color"))
```

#### Interfaces
```typescript 
// Creamos los parametros genericos
interface IEntity<T> {
  id: T
}

// Le asignamos valor en una variable
const entity: IEntity<string> = {
  id : "2"
}

// Le asignamos valor en una interface
interface IPerson extends IEntity<string> {
  name: string
}


const entity2 : IPerson = {
   id : "2" ,
   name: "Felipe"
}

```
- Otro ejemplo:
```typescript 
// Le asignamos un valor generico  en una interface
interface IPerson<T> extends IEntity<T> {
  name: string
}


const entity2 : IPerson<string> = {
   id : "2" ,
   name: "Felipe"
}


```

#### Clases
```typescript 
class Person implements IPerson<string>{
  id:string = "121345"
  name:string = "name"
}

```
- A su vez una clase puede tener genéricos:
```typescript 
class Person<K> implements IPerson<K>{
  id:K;
  name: string = "name"

  constructor(id: K) {
    this.id = id;
  }
}

const person = new Person<number>(5)
console.log(person);


```
:::tip
- [Genericos en C#](https://flevatti.github.io/documentacion/docs/C--/guiaC2#gen%C3%A9rico)
- A buscar información porque se puede implementar en la mayoría de casos!

:::


## Utility type
- Los utility type pueden manipular las caracteristicas de los tipos de datos existente para crear otros nuevos.
- Esto puede ayudar a agilizar el desarrollo de sus programas actuales y futuros, al reducir la carga de mantener varios tipos similares.
- La mayoría utilizan genéricos para especificar los tipos a manipular para crear nuevos tipos.
- Veamos algunos…

#### Awaited&lt;x>
- Le permite extraer el tipo de dato de respuesta de una promesa X.
- Considere la definición básica de Promise. Si tiene una promesa que se resuelve en una cadena, su tipo sería Promise&lt;string>. Si desea saber el tipo al que se resuelve la promesa (en este caso, string), puede utilizar el tipo Awaited.
- Ejemplo:

```typescript 
// A = string
type A = Awaited<Promise<string>>;
```
#### Parcial&lt;X>
- Este tipo de utilidad le permite hacer que todas las propiedades de un tipo X sean opcionales, lo que significa que puede optar por proporcionar u omitir valores para esas propiedades.
- Es útil cuando deseas construir un objeto de forma incremental o cuando tienes una función que acepta un objeto con propiedades opcionales.
- Ejemplo:
```typescript 
interface Person {
  name: string;
  age: number;
  address: string;
}

function updatePerson(person: Partial<Person>): void {
  // Código para actualizar una persona
}
// Lo usamos
const partialPerson: Partial<Person> = { name: 'John' }; // Todas las propiedades de Person son opcionales
updatePerson(partialPerson);

```
#### Required&lt;X>
- Este tipo de utilidad hace que todas las propiedades de un tipo x sean obligatorias. Garantiza que todas las propiedades del tipo deben estar presentes.
- Ejemplo:
```typescript 
interface Person {
  name?: string;
  age?: number;
}

const person: Required<Person> = {
  name: 'John',
  age: 30,
};   // Todas las propiedades son obligatorias


```
#### Readonly&lt;X>
- Este tipo de utilidad hace que todas las propiedades de un tipo X sean solo de lectura. 
- Ejemplo:
```typescript 
interface Person {
  name: string;
  age: number;
}
const person: Readonly<Person> = {
  name: 'John',
  age: 30,
};

```
#### Record&lt;K,T>
- Este tipo de utilidad crea un nuevo tipo con un conjunto de propiedades K de tipo T. Se usa comúnmente para definir un diccionario o un objeto donde las claves del objeto tienen un tipo específico y los valores tienen un tipo específico.
- Ejemplo:
```typescript 
type Fruit = 'apple' | 'banana' | 'orange';
type FruitInventory = Record<Fruit, number>;
const inventory: FruitInventory = {
  apple: 5,
  banana: 10,
  orange: 3,
};

```
#### ``Pick<T,K>``
- Este tipo de utilidad le permite crear un nuevo tipo seleccionando un subconjunto de propiedades K del tipo T.
- Es útil cuando desea extraer propiedades específicas de un tipo existente para crear un nuevo tipo que solo incluya esas propiedades.
- Ejemplo:
```typescript 
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
 
type TodoPreview = Pick<Todo, "title" | "completed">;
 
const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};


```
#### Omit&lt;T,K>
- Este tipo de utilidad crea un nuevo tipo al excluir propiedades K del tipo T. Es lo opuesto Pick y le permite crear un nuevo tipo que incluye todas las propiedades T excepto las especificadas.
- Ejemplo:
```typescript 
interface Person {
  name: string;
  age: number;
  address: string;
  email: string;
}
type PersonWithoutEmail = Omit<Person, 'email'>;
const person: PersonWithoutEmail = {
  name: 'John',
  age: 30,
  address: '123 Main St',
};

```
#### Exclude&lt;T,U>
- Este tipo de utilidad crea un nuevo tipo eliminando tipos de T que están presentes en U.
- Ejemplo:
```typescript 
type Color = 'red' | 'blue' | 'green';
type PrimaryColor = 'red' | 'blue';
type SecondaryColor = Exclude<Color, PrimaryColor>; // 'green'

```
#### Extract&lt;T,U>
- Crea un nuevo tipo seleccionando los  tipos T que también están presentes en U:
```typescript 
type Color = 'red' | 'blue' | 'green';
type PrimaryColor = 'red' | 'blue';
type PrimaryColors = Extract<Color, PrimaryColor>; // 'red' | 'blue'
```
#### NonNullable&lt;T>
- Este tipo de utilidad crea un nuevo tipo de T excluyendo null y undefined. Garantiza que el tipo resultante no puede ser null o undefined:
```typescript 
type Value = string | null | undefined;
const value: NonNullable<Value> = 'Hello'; // El valor no puede ser null o undefined
```
#### Parameters&lt;T>
- Este tipo de utilidad extrae los tipos de datos de los parámetros de un tipo de función T y los representa como un tipo de tupla:
```typescript 
type SumFunc = (a: number, b: number) => number;
type SumParams = Parameters<SumFunc>; // [number, number]

```
#### ConstructorParameters&lt;T>
- Este tipo de utilidad extrae los tipos de parámetros del constructor de un tipo de clase T y los representa como un tipo de tupla:
```typescript 
class Person {
  constructor(name: string, age: number) {
    // ...
  }
}

type PersonConstructorParams = ConstructorParameters<typeof Person>; // [string, number]
```
#### InstanceType&lt;T>
- Este tipo de utilidad extrae el tipo de instancia de un tipo de clase T. Representa el tipo que tendría una instancia de la clase:
```typescript 
class Person {
  name: string;
  age: number;
}
type PersonInstance = InstanceType<typeof Person>; // Person
```


#### ThisParameterType&lt;T>
- Este tipo de utilidad extrae el tipo de this de un tipo de función T. Representa el tipo de this dentro de la función, ósea el contexto de la función:
```typescript 
type LogFunc = (this: Console, message: string) => void;
const log: ThisParameterType<LogFunc> = console;
log.log(console, 'Log message');
```
#### NoInfer&lt;T>
- NoInfer es un tipo de utilidad que se puede utilizar para evitar que TypeScript infiera un tipo desde la función genérica.
- Imaginemos que tenemos una función genérica que simplemente devuelve el tipo del valor pasado:
```typescript 
 const returnWhatIPassedIn = <T>(value: T) => value;
 const result = returnWhatIPassedIn("hello");

```
- En este caso, TypeScript infiere que el tipo result  es  "hello".
- ¿Pero qué pasaría si usaramos NoInfer?
```typescript 
const returnWhatIPassedIn = <T>(value: NoInfer<T>) => value;
const result = returnWhatIPassedIn("hello");
```
:::tip Observación
- NoInfer ha impedido  que value sea una fuente válida de inferencia para T.
- Entonces ahora, result se infiere como unknown.
:::

- Tendríamos que proporcionar explícitamente el tipo para obtener el tipo de retorno deseado:
```typescript 
const returnWhatIPassedIn = <T>(value: NoInfer<T>) => value;
 
const result = returnWhatIPassedIn<"hello">("hello");

```

#### OmitThisParameterType&lt;T> (Tambien  OmitThisParameter&lt;T>)
- Elimina el parámetro this de la función t:
```typescript 
function toHex(this: Number) {
  return this.toString(16);
}
 
const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5);
 
console.log(fiveToHex());

```
#### ThisType&lt;T>
- Este tipo de utilidad se utiliza en un archivo de declaración (d.ts) para especificar el tipo de dato que va a ser this dentro de una función o método (contexto).


#### Manipulación de cadenas
- Para ayudar con la manipulación de cadenas, TypeScript incluye un conjunto de tipos que permiten usar la manipulación de cadenas dentro del sistema de tipos:
    - Uppercase&lt;StringType>
    - Lowercase&lt;StringType>
    - Capitalize&lt;StringType>
    - Uncapitalize&lt;StringType>
- Ejemplo:
```typescript 
type UppercaseGreeting = Uppercase<'hello'>; // 'HELLO'
type LowercaseGreeting = Lowercase<'HELLO'>; // 'hello'
type CapitalizedWord = Capitalize<'world'>; // 'World'
type UncapitalizedWord = Uncapitalize<'World'>; // 'world'
```

## Keyof
- El operador keyof toma un tipo de objeto y produce una cadena o una union type de sus claves(propiedades).
- Ejemplo:


```typescript 
type Staff = {
    name: string;
    salary: number;
   } 
type staffKeys = keyof Staff; // produce "name" | "salary"


```
- El operador  keyof se utiliza para un tipo de objeto pero también se puede utilizar para tipos que no son de objeto, incluidos los tipos primitivos:

```typescript 
type BooleanKeys = keyof boolean; // "valueOf"

type NumberKeys = keyof number; // "toString" | "valueOf" | "toFixed" | "toExponential" | "toPrecision" | "toLocaleString"

type SymbolKeys = keyof symbol; 
//typeof Symbol.toPrimitive | typeof Symbol.toStringTag | "toString" | "valueOf"

```
:::tip Observación
- Como se muestra en los ejemplos anteriores, es menos útil cuando se aplica a tipos primitivos.
- [Más información](https://blog.logrocket.com/how-to-use-keyof-operator-typescript/)
:::


## Modulos
- La palabra clave "declare module" se utiliza en TypeScript para definir un módulo que no existe en el código fuente, pero que se espera que esté disponible en tiempo de ejecución. Esto es útil cuando se trabaja con bibliotecas de terceros que no tienen tipos de TypeScript definidos, o cuando se trabaja con archivos que no son de TypeScript, como archivos .js o .css.
- La sintaxis de "declare module" es similar a la de import y export, pero en lugar de importar o exportar elementos de código, se utiliza para definir el tipo de un módulo. Por ejemplo, si se está trabajando con una biblioteca de terceros llamada miBiblioteca que no tiene tipos de TypeScript definidos, se puede definir un módulo de la siguiente manera:
```typescript 
declare module 'miBiblioteca' {
  export function sumar(a: number, b: number): number;
}
```
- Esto le dice a TypeScript que el módulo miBiblioteca tiene una función llamada sumar que toma dos números como argumentos y devuelve un número. Ahora se puede importar y utilizar la función sumar en otro archivo de la siguiente manera:

```js
import { sumar } from 'miBiblioteca';

const resultado = sumar(2, 3);
console.log(resultado); // 5
```
- En resumen, la palabra clave declare module se utiliza en TypeScript para definir un módulo que no existe en el código fuente, pero que se espera que esté disponible en tiempo de ejecución. Esto es útil cuando se trabaja con bibliotecas de terceros que no tienen tipos de TypeScript definidos, o cuando se trabaja con archivos que no son de TypeScript, como archivos .js o .css. La sintaxis de "declare module" es similar a la de import y export, pero en lugar de importar o exportar elementos de código, se utiliza para definir el tipo de un módulo.


#### Ejemplo para Vue
```typescript
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

```

:::tip Observación
- La línea import { DefineComponent } from 'vue' importa el tipo DefineComponent de la biblioteca de Vue.js. Este tipo se utiliza para definir componentes de Vue.js.
- La línea const component: ``DefineComponent<{}, {}, any>`` define una variable component de tipo DefineComponent, lo que significa que es un componente de Vue.js. Los tres parámetros genéricos de DefineComponent especifican el tipo de las props, el tipo de los datos y el tipo de los métodos del componente, respectivamente. En este caso, se especifica que el componente no tiene props ({}), que no tiene datos ({}) y que tiene métodos de cualquier tipo (any). Con esto especificamos el componente como si usaramos Options API.
- La línea export default component exporta el componente como el valor predeterminado del módulo, lo que significa que se puede importar de la siguiente manera:

```js
import MiComponente from './MiComponente.vue';
```
- En resumen, este código de TypeScript describe el tipo de un archivo .vue de Vue.js, especificando que es un componente de Vue.js sin props, sin datos y con métodos de cualquier tipo. El componente se exporta como el valor predeterminado del módulo, lo que significa que se puede importar fácilmente en otros archivos de la aplicación.
:::


:::tip ¿POR QUÉ se importa adentro el tipo de dato?
- Si usamos el siguiente código funciona igual:
```typescript
import { DefineComponent } from 'vue'
declare module '*.vue' {
  const component: DefineComponent<{}, {}, any>
  export default component
}
```
- En este código, el tipo DefineComponent se importa fuera del bloque declare module '*.vue', lo que significa que se importa en el ámbito global del archivo. Luego, dentro del bloque declare module '*.vue', se utiliza el tipo DefineComponent importado previamente para definir el tipo de la constante component.
- En el otro código, el tipo DefineComponent se importa dentro del bloque declare module '*.vue', lo que significa que se importa solo dentro del ámbito de ese módulo. En otras palabras, el tipo DefineComponent solo está disponible dentro del bloque declare module '*.vue' y no se exporta fuera de él.
- Ambos códigos  funcionan correctamente, pero hay una pequeña diferencia en la forma en que se manejan las importaciones. En este código, el tipo DefineComponent se importa en el ámbito global, lo que podría causar conflictos si se utiliza el mismo nombre de importación en otros lugares del archivo. En el segundo código, el tipo DefineComponent se importa solo dentro del bloque declare module '*.vue', lo que reduce el riesgo de conflictos.
:::

## Firmas de índice
- A veces no se conocen de antemano todos los nombres de las propiedades de un tipo, pero sí se conoce el tipo de valor que se usara.
- En esos casos, puede utilizar una firma de índice para describir los tipos de valores posibles, por ejemplo:
```typescript
interface StringArray {
  [index: number]: string;
}
 
const myArray: StringArray = getStringArray();
const secondItem = myArray[1];

```
:::tip Observación
- Esta firma de índice establece que cuando un StringArray tiene un indice number, devolverá un string
- El índice es lo que usamos para acceder a una propiedad, o sea generalmente usamos obj.indice   o obj["indice"].
- Se  utilizan corchetes [] para especificar el tipo de dato del indice. Aunque los tipos que podemos especificar son bastante limitados: string , number , symbol , template string patterns y union types.
:::

:::warning
- El tipo devuelto por un indexador numérico debe ser un subtipo del tipo devuelto por el indexador de string.
- Esto se debe a que al indexar con un number, JavaScript en realidad lo convertirá en un string. Eso significa que el índice [100] es lo mismo que el índice ["100"] , por lo que ambos deben coincidir.
- Adivina el error del siguiente código:
```typescript
interface Animal {
  name: string;
}
 
interface Dog extends Animal {
  breed: string;
}
 

interface NotOkay {
  [x: number]: Animal;
 //'number' index type 'Animal' is not assignable to 'string' index type 'Dog'.
  [x: string]: Dog;
}
```
:::


- Otro ejemplo:


```typescript
interface NumberOrStringDictionary {
  [index: string]: number | string;
  length: number; // ok, length is a number
  name: string; // ok, name is a string
}
```
:::tip Observación
- Se usa una union type en el index para luego poder especificar correctamente el valor de cada propiedad que “conocemos”.

:::

- En los ejemplos anteriores usamos [index : tipo de dato] para especificar el tipo de dato del índice, pero podemos remplazar la palabra index por cualquier otra, ya que solo es un placeholder, un nombre de variable que se utiliza para indicar que la propiedad es indexada, pero no tiene un valor específico.
- Entonces se puede utilizar  cualquier nombre de variable en lugar de index, como key, prop, x, y, etc. Lo importante es que la sintaxis [nombre: tipo] indica que la propiedad es indexada y que el tipo de la clave es el especificado , por ejemplo:

```typescript
export interface HistoryState {
  [x: number]: HistoryStateValue
  [x: string]: HistoryStateValue
}

```

## Decorador
- Un decorador es una función que nos permite manejar anotaciones y metadatos sobre clases, propiedades y métodos.
- Tipos de decoradores:
  - De clase
  - De atributos
  - De parámetros
  - Accesores

:::tip
- [Ver la explicación de Javascript](../Javascript/extra.md#decoradores)
:::

#### Decorador de clase
- Se puede observar, modificar o remplazar una definición de clase.
- Ejemplo:

```js
function Decorator( constructor : Function){
   console.log('Se ejecuto el decorador' , constructor)
 }
 
 @Decorator
 class Persona {
     age!: number
 }

```
:::tip Observación
- El decorador se ejecuta al evaluar la clase (no cuando se ejecuta) y el parámetro constructor contiene el constructor(clase) decorado.
:::
- En el ejemplo anterior pudimos observar la clase Persona, pero también lo podemos modificar:

```js
function Decorator( constructor : Function){
    Object.seal(constructor);
    Object.seal(constructor.prototype);
 }
 
 @Decorator
 class Persona {
     age!: number
 }

```
:::tip Observación
- Sellamos el prototipo de la clase Persona para que durante la ejecución no se pueda añadir propiedades.
:::

- Si el decorador devuelve un constructor (clase), es el que se usara para cada instancia.
- Ejemplo:
```js
function SetAge( age : number){
   return function<T extends {new (...args : any[]) : {}}>(constructor: T) {
       return class extends constructor {
        age!: number
          constructor (...args:any[]) {
            super();
           this.age = age;
          }
       }
   }
}

@SetAge(27)
class Persona {
    age!: number
}

const user = new Persona();
console.log(user.age);


```
:::tip Observación
- La función SetAge toma un parámetro age de tipo number. Esta función devuelve otra función que toma un parámetro constructor de tipo T, que es un tipo genérico que extiende la interfaz ``{ new (...args: any[]): {} }``. Esto significa que T debe ser una clase que tenga un constructor que puede ser llamado con cualquier número de argumentos. 
- Cuando se usa el extends en un tipo genérico es para especificar una [“restricción”](https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-classes) . En este ejemplo que el tipo genérico debe ser una clase que tenga un constructor con cualquier número de argumentos.
- La sintaxis new (...args: any[]): {} es una forma de definir un tipo de función constructora en TypeScript:
  -	new: Indica que se trata de un tipo de función constructora, es decir, una función que se utiliza para crear objetos.
  -	(...args: any[]): Esta es la lista de parámetros de la función constructora. En este caso, se define como una lista de parámetros variable (...args) de tipo any[], lo que significa que la función constructora puede aceptar cualquier número de argumentos de cualquier tipo.
  -	: {}: Esta es la parte más importante. El símbolo : se utiliza para indicar el tipo de retorno de la función constructora. En este caso, el tipo de retorno es {}, que es un objeto vacío.
- La función devuelta por SetAge devuelve una clase que extiende la clase constructor. Esta clase tiene una propiedad age de tipo number, que se inicializa en el constructor con el valor pasado como parámetro a SetAge.
- La clase Persona se define con una propiedad age de tipo number. Luego, se aplica el decorador SetAge a la clase Persona, pasando el valor 27 como parámetro.
- Cuando se crea una instancia de la clase Persona con new Persona(), se llama a la función que devuelve el decorador, este devuelve una “nueva clase” que llama al constructor de la clase Persona. El constructor de la “nueva clase” inicializa la propiedad age con el valor 27. Entonces cuando llamas al constructor de una clase “decorada”, estas llamando al constructor que retorna el decorador.
- Cuando se aplica el decorador SetAge a una clase, el tipo T se infiere automáticamente a partir de la clase que se está decorando. Por ejemplo, si se aplica el decorador a la clase Persona, el tipo T se infiere como Persona.
- En este caso, el valor del tipo genérico T sería la clase Persona misma. Es decir, T sería equivalente a Persona.
- De esta manera, el decorador SetAge puede trabajar con cualquier clase que cumpla con los requisitos mencionados anteriormente, sin necesidad de conocer los detalles específicos de la clase. El tipo genérico T permite que el decorador sea flexible y reusable.
- Finalmente, se imprime el valor de la propiedad age de la instancia user con console.log(user.age), que debería imprimir 27.
:::

#### Decorador de atributo

- Modificamos el atributo:

```js
function ValidateAge(age:number) {
    return function(target : any , propName: string) {
        let assignedAge = target[propName];
        console.log("target" ,target);
        console.log("propName" , propName);

        console.log("assignedAge" , assignedAge)
        Object.defineProperty(target , propName , {
            set: (newAge : number) => {
                if (newAge < age) {
                    throw new Error('Debe ser mayor o igual a 18');
                } else {
                    assignedAge = newAge;
                }
            } ,
            get: () => assignedAge

        } )
    }
}

class Person {
     @ValidateAge(18)
     age: number = 28;
}

const newPerson = new Person();
console.log(newPerson.age);
newPerson.age = 26;

```
:::tip Observación
- La función ValidateAge toma un parámetro age que es el valor mínimo permitido para la edad.
- La función devuelve otra función que se encarga de definir una propiedad en un objeto. Esta función toma dos parámetros: target y propName:
  - target: La función constructora de la clase para un atributo estático o el prototipo de la clase para un atributo de instancia.
  - propName: El parámetro propName es el nombre de la propiedad que se va a decorar. En este caso, propName es la cadena "age".
- Dentro de la función, se utiliza Object.defineProperty para definir la propiedad propName en el objeto target. La propiedad tiene un getter y un setter personalizados.
- El getter simplemente devuelve el valor actual de la propiedad assignedAge.
- El setter verifica si el nuevo valor de la propiedad es menor que el valor mínimo permitido (age). Si es así, lanza un error. De lo contrario, asigna el nuevo valor a assignedAge.
- La clase Person tiene una propiedad age que se decoró con la función ValidateAge pasando el valor 18 como parámetro. Esto significa que la edad mínima permitida es 18 años.
- Se crea una instancia de la clase Person y se asigna a la variable newPerson.
- Se imprime el valor inicial de la propiedad age de newPerson, que es 28.
- Se intenta asignar un nuevo valor a la propiedad age de newPerson, que es 26. Debido a que el valor es mayor o igual a 18, la asignación se realiza correctamente.
- La función que devuelve ValidateAge se ejecuta en el momento en que se crea la instancia de la clase Person. Es decir, cuando se escribe const newPerson = new Person();.
- La función que devuelve ValidateAge entonces define la propiedad age en la instancia de la clase Person con un getter y un setter personalizados, que verifican si el valor de la propiedad es mayor o igual a 18 años.
:::

:::tip
- También lo podés usar para observar, para esto la función debe tener los dos parámetros correspondientes (target y propName) y no debe devolver nada.
:::

#### Decorador de parámetros
- Las funciones para decorar los parámetros tienen tres argumentos:
  -  Target: Es el constructor de la clase si el método es estático, o el prototipo de la clase si el método es de instancia.
  -  PropertyKey: El nombre del método en el que se encuentra el parámetro.
  -  ParameterIndex: El índice del parámetro en la lista de parámetros del método (empieza en 0).
- Ejemplo:

```js
function LogParameter(target: Object, propertyKey: string | symbol, parameterIndex: number) {
    console.log(typeof target);
    console.log(`Decorated parameter in ${propertyKey.toString()} at position ${parameterIndex}`);
}

class MyClass {
    myMethod(@LogParameter param1: string, @LogParameter param2: number) {
        console.log(param1, param2);
    }
}

const instance = new MyClass();
instance.myMethod('hello', 42);

```
:::tip Observación
- El decorador se ejecuta al evaluar los parámetros (no cuando se ejecuta) y no cuando se ejecuta el método.
- Los decoradores de parámetros en TypeScript están diseñados principalmente para observar y anotar información sobre los parámetros, pero no pueden modificar o reemplazar el valor de un parámetro en el momento en que se está aplicando el decorador.
- Los decoradores de parámetros se ejecutan en tiempo de compilación, antes de que se ejecute el método real. Su propósito es proporcionar metadatos sobre el parámetro y su posición, pero no tienen acceso para interceptar la ejecución del método o cambiar los valores de los parámetros en tiempo de ejecución.
- Si necesitas modificar o validar el valor de un parámetro antes de que se use en un método, debes utilizar un decorador de métodos en combinación con lógica adicional dentro del método. 


:::

#### Decorador de método
- Los decoradores de métodos en TypeScript te permiten observar, modificar o reemplazar la definición de un método dentro de una clase. Se declaran justo antes de la definición del método y proporcionan acceso al descriptor de la propiedad del método, lo que te permite manipular cómo se comporta ese método.
- Un decorador de método es una función que recibe tres parámetros cuando se aplica:
  - Target: Es el constructor de la clase si el método es estático, o el prototipo de la clase si el método es de instancia.
  - PropertyKey: El nombre del método que está siendo decorado.
  - Descriptor: El descriptor de la propiedad del método es un objeto que describe el método.
- Ejemplo de Observación:

```js
function observer(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log('Se activo el observer');
  console.log('target' , target);
  console.log("propertyKey" , propertyKey);
  console.log("descriptor" , descriptor)
}

class Greeter {
    constructor(public message: string) {}

    @observer
    greet() {
        return `Hello, ${this.message}`;
    }
}


```
:::tip Observación
- El decorador se ejecuta al evaluar el método (no cuando se ejecuta).
:::
- Si el decorador devuelve un valor, se utilizará como Descriptor de propiedad para el método y por lo tanto “manipulará” el mismo.
- Ejemplo para modificar:

```js
function overrideMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
        console.log(`Llamando a ${propertyKey} con argumentos:`, args);
        const result = originalMethod.apply(this, args);
        console.log(`Resultado de ${propertyKey}:`, result);
        return result;
    };

    return descriptor;
}

class MathOperations {
    @overrideMethod
    add(a: number, b: number) {
        return a + b;
    }
}

const math = new MathOperations();
math.add(2, 3); // Log: Llamando a add con argumentos: [2, 3]
                // Log: Resultado de add: 5

```
:::tip Observación
- La propiedad value del descriptor contiene el método que se va a ejecutar.
- En este caso lo modificamos para que tenga dos console.log y en el medio ejecuta el método original.
- This en la complicación no tiene valor porque no esta asociado a ninguna clase, pero en tiempo de ejecución se refiere a la instancia que invoco el método.
:::

#### Decorador de acceso
- Se declara justo antes de un acceso (get o set) y permite observar, modificar o reemplazar las definiciones de un acceso.
- En TypeScript no puedes declarar decoradores separados para el get y el set de un mismo miembro. En su lugar, puedes aplicar un único decorador al primer accesor (get o set) que aparece en el código, y este decorador afectará a ambos.
- Argumentos del decorador:
  - La función constructora de la clase (para miembros estáticos) o el prototipo de la clase (para miembros de instancia).
  - El nombre del miembro.
  - El descriptor de propiedad del miembro.
- Ejemplo para observar:
```js
function observable (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
     console.log('target' , target);
     console.log('propertyKey' , propertyKey);
     console.log('descriptor' , descriptor);
}

class Point {
    private _x: number;
    private _y: number;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    @observable
    get x() {
        return this._x;
    }

    set x (value ) {
         this._x = value;
    }
    @observable
    get y() {
        return this._y;
    }

    set y (value ) {
        this._y = value;
   }
}

```
:::tip Observación
- El descriptor contiene tanto el set como el get (maneja ambos) del mismo miembro. Por lo tanto, no hace falta (y no se puede) poner un @observable al set y otro al get del mismo miembro.
- Se ejecuta en tiempo de compilación.

:::

- Al igual que un decorador de método, el valor que se devuelve se usa como descriptor del accesor y por lo tanto manipulara el mismo.
- Para manipular un accesor:

```js
function value(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalSet = descriptor.set!;

    descriptor.set = function(value: number) {
        if (value < 0) {
            throw new Error('El valor debe ser positivo.');
        }
        originalSet.call(this, value);
    };
    const originalGet = descriptor.get!;
    descriptor.get = function() {
        console.log(`Accediendo a la propiedad ${propertyKey}`);
        return originalGet.call(this);
    };
}

function logAccess(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  
}

class Point {
    private _x: number = 0;

    @value
    get x(): number {
        return this._x;
    }

  
    set x(value: number) {
        this._x = value;
    }
}

const point = new Point();

point.x = 5;   
console.log(point.x);  
point.x = -3;  


```
:::tip Observación
- Modificamos el get para que imprima un mensaje en la consola antes de devolver el valor.
- Modificamos el set para que lanzara un error si el valor es negativo.
- Se ejecuta en tiempo de ejecución al llamar a los accesores.


:::

## Accesores de clase

- En TypeScript (y en JavaScript), un accesor de clase es una función especial que se usa para definir propiedades de acceso (getter) y modificación (setter) en una clase. Los accesores permiten controlar cómo se accede o se modifica una propiedad de una clase, encapsulando la lógica necesaria para obtener o establecer el valor de una propiedad.
#### Tipos de Accesores
#### Getter (get)
- Permite obtener el valor de una propiedad de manera controlada.
- Se define usando la palabra clave get seguida del nombre del método.
- Se llama como si fuera una propiedad normal, sin paréntesis.
- Ejemplo:

```js
class Person {
    private _age: number;

    constructor(age: number) {
        this._age = age;
    }

    // Getter para la propiedad age
    get age(): number {
        return this._age;
    }
}

const person = new Person(25);
console.log(person.age); // Imprime: 25


```
#### Setter (set)
- Permite establecer el valor de una propiedad de manera controlada.
- Se define usando la palabra clave set seguida del nombre del método.
- Se llama como si fuera una propiedad normal, sin paréntesis.
- Ejemplo:

```js
class Person {
    private _age: number;

    constructor(age: number) {
        this._age = age;
    }

    // Getter para la propiedad age
    get age(): number {
        return this._age;
    }

    // Setter para la propiedad age
    set age(value: number) {
        if (value < 0) {
            throw new Error("La edad no puede ser negativa.");
        }
        this._age = value;
    }
}

const person = new Person(25);
person.age = 30; // Llama al setter para establecer la edad a 30
console.log(person.age); // Imprime: 30

// person.age = -5; // Lanzará un error: "La edad no puede ser negativa."



```

## tsconfig.json
- Es un archivo de configuración utilizado por TypeScript para definir cómo debe compilarse el código TypeScript. Este archivo especifica las opciones del compilador y el comportamiento de la compilación, permitiendo personalizar cómo se convierte el código fuente de TypeScript en código JavaScript.
- El archivo tsconfig.json puede contener varias secciones y opciones para configurar el proceso de compilación. 
- El archivo tsconfig.json es un archivo de configuración que utiliza TypeScript para definir cómo se debe compilar un proyecto. Este archivo especifica las opciones del compilador y también indica qué archivos deben incluirse o excluirse durante la compilación. Es una parte esencial de cualquier proyecto TypeScript, ya que permite personalizar el comportamiento del compilador según las necesidades del proyecto.

#### Contenido típico del archivo
- El tsconfig.json está estructurado en formato JSON y suele incluir las siguientes secciones de “nivel superior”:
  1.	compilerOptions: Especifica las opciones de compilación, como:
      -	target: Define a qué versión de JavaScript se debe compilar el código (por ejemplo, ES5, ES6).
      -	module: Establece el sistema de módulos a usar (CommonJS, ESNext, etc.).
      -	strict: Activa el modo estricto de TypeScript para comprobar errores con mayor rigor.
      -	outDir: Carpeta de salida para los archivos compilados.
      -	rootDir: Define la carpeta base para la resolución de archivos.
      -	jsx: Configura cómo se manejan los archivos JSX (usado en proyectos React).
  2.	include: Lista de archivos o directorios que deben incluirse en la compilación.
  3.	exclude: Archivos o directorios que deben excluirse de la compilación.
  4.	files: Lista específica de archivos individuales que deben incluirse en el proyecto.
  5.	references: Se usa para especificar dependencias explícitas entre diferentes proyectos. Esto permite al compilador saber qué otros proyectos deben compilarse antes de compilar el actual. 
  6.	extends: Se usa para heredar configuraciones de otros archivos. Te permite sobrescribir o añadir opciones según sea necesario. Esto es muy útil en estructuras de proyectos con múltiples configuraciones relacionadas.

- Ejemplo básico de tsconfig.json:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "CommonJS",
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "jsx": "react"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}

```


#### compilerOptions
- Esta sección define las opciones del compilador que afectan cómo se realiza la conversión del código TypeScript a JavaScript.
- Ejemplo:
```json
{
    "compilerOptions": {
        "target": "es6",              // Versión de JavaScript a la que se compilará (por ejemplo, ES5, ES6)
        "module": "commonjs",         // Sistema de módulos a utilizar (por ejemplo, commonjs, es6, amd)
        "strict": true,               // Habilita todas las comprobaciones estrictas
        "outDir": "./dist",           // Directorio de salida para los archivos compilados
        "rootDir": "./src",           // Directorio raíz de entrada
        "esModuleInterop": true,      // Habilita la interoperabilidad con módulos ES
        "skipLibCheck": true          // Omite la comprobación de tipos en archivos de definición de biblioteca
    }
}

```
:::tip Observación
- target: Especifica la versión de JavaScript a la que se debe compilar el código TypeScript.
- module: Define el sistema de módulos a usar.
- strict: Activa varias comprobaciones de tipo estrictas para mejorar la seguridad del tipo.
- outDir: Define el directorio donde se colocarán los archivos JavaScript generados. Define el directorio donde el compilador TypeScript guardará los archivos JavaScript generados después de la compilación. Es el directorio de salida para los archivos compilados.
- rootDir: Define el directorio raíz de entrada para los archivos TypeScript. Especifica el directorio que contiene el código fuente TypeScript. Esta opción se utiliza para especificar el directorio principal que contiene el código TypeScript que deseas compilar. Asegura que la estructura de carpetas se refleje en el directorio de salida.
- esModuleInterop: Facilita la interoperabilidad entre módulos CommonJS y módulos ES.
- skipLibCheck: Omite la comprobación de tipos en archivos .d.ts (archivos de definición de tipo).
:::

#### include
- Lista los archivos y directorios que deben incluirse en la compilación.
- Ejemplo:
```json
{
    "include": [
        "src/**/*.ts"
    ]
}

```
:::tip Observación
- En este caso, se incluyen todos los archivos TypeScript dentro del directorio src.
:::

#### exclude
- Lista los archivos y directorios que deben ser excluidos de la compilación.
- Ejemplo:

```js
{
    "exclude": [
        "node_modules",
        "**/*.spec.ts"
    ]
}

```
:::tip Observación
En este caso, se excluyen los archivos dentro del directorio node_modules y todos los archivos con extensión .spec.ts.
:::

#### files
- Lista archivos específicos que deben ser compilados.
- Ejemplo:
```json
{
    "files": [
        "src/index.ts",
        "src/utils.ts"
    ]
}

```
:::tip Observación
- Aquí se especifica que solo index.ts y utils.ts deben ser compilados.
:::

#### Ejemplo Completo de tsconfig.json

```json
{
    "compilerOptions": {
        "target": "es6",
        "module": "commonjs",
        "strict": true,
        "outDir": "./dist",
        "rootDir": "./src",
        "esModuleInterop": true,
        "skipLibCheck": true,
        "sourceMap": true,       // Genera archivos de mapa de origen (.map) para facilitar la depuración
        "declaration": true      // Genera archivos de declaración (.d.ts) para la definición de tipos
    },
    "include": [
        "src/**/*.ts"
    ],
    "exclude": [
        "node_modules",
        "**/*.spec.ts"
    ]
}

```
#### Generar el archivo de configuración
- Con el siguiente comando puedes crear el archivo tsconfig.json:
```powershell
tsc  --init
```
:::tip Observación
- Al ejecutar tsc --init, TypeScript crea un archivo tsconfig.json en el directorio actual si no existe uno. Este archivo contiene una serie de opciones de configuración predeterminadas que puedes personalizar según las necesidades de tu proyecto.
- El archivo tsconfig.json generado por el comando tsc --init incluye opciones básicas y comentarios explicativos sobre cada configuración. Esto te da un punto de partida para ajustar la configuración del compilador.
:::

#### Ejecutar el compilador
- Para compilar el código ejecutamos el siguiente comando:
```powershell
tsc
```
:::tip Observación
- Cuando ejecutas el comando tsc en la terminal, el compilador TypeScript busca un archivo tsconfig.json en el directorio actual o en los directorios superiores hasta llegar a la raíz del sistema de archivos.
- Si encuentra un archivo tsconfig.json, lee su contenido para aplicar la configuración especificada al proceso de compilación.
- Si no existe el tsconfig.json al ejecutar el comando, Typescript  utilizará una serie de configuraciones predeterminadas. Estas opciones son básicas y no optimizadas para proyectos específicos.
:::

#### Compilar archivo específico
- Si deseas compilar un archivo específico sin utilizar el archivo tsconfig.json, puedes proporcionar el nombre del archivo directamente:
```powershell
tsc src/index.ts
```
:::tip Observación
- En este caso, TypeScript compilará src/index.ts usando la configuración predeterminada del compilador en lugar de la configuración de tsconfig.json.

:::


#### Funcionalidades clave
-	Optimización de compilación: Personaliza la salida y entrada de los archivos.
-	Mejora el desarrollo: Activa características como control estricto de tipos.
-	Compatibilidad: Permite configurar la salida a diferentes estándares de JavaScript.
- Este archivo es esencial para configurar cualquier proyecto de TypeScript y garantizar que el entorno de desarrollo funcione como se espera.

:::tip
- [Documentación](https://www.typescriptlang.org/tsconfig/)
:::


## Tipos de tsconfig
- Hay diferentes tipos de archivos tsconfig que se usan para distintos propósitos, y todos se basan en el mismo formato JSON. Estas variaciones permiten que los proyectos sean más organizados y flexibles, especialmente cuando hay múltiples entornos que se deben compilar de manera diferente. Aquí te detallo los tipos comunes de tsconfig y cuándo se utilizan.

#### tsconfig.json (Global)
-  Propósito: Es el archivo principal y base del proyecto.
-  Uso: Contiene configuraciones generales que son compartidas por todo el proyecto.
-  Ejemplo de uso:
    -	Proyectos pequeños que no necesitan configuraciones específicas para diferentes entornos o partes del proyecto.
    -	Punto de partida para proyectos grandes que lo extenderán con configuraciones más específicas.
#### tsconfig.app.json (Aplicación)
-	Propósito: Configurar específicamente el código  de la aplicación principal.
-	Uso: En proyectos grandes con un enfoque modular, define cómo compilar solo el código de la aplicación (frontend o backend).
-	Ejemplo de uso:
    - Un proyecto Angular lo usa para compilar solo los archivos del cliente (src/app/**/*).
    - En proyectos con múltiples partes (por ejemplo, cliente y servidor), ayuda a aislar configuraciones.
#### tsconfig.node.json (Node.js)
-  Propósito: Configurar TypeScript para el entorno Node.js.
-  Uso:
    -	En proyectos backend o scripts que ejecutan código directamente en Node.js.
    -	Habilita definiciones de tipos específicas para Node.js (types: ["node"]).
- Ejemplo de uso: Compilar solo archivos de la carpeta del servidor (server/**/*).
#### tsconfig.spec.json (Pruebas)
-  Propósito: Configurar TypeScript para el entorno de pruebas.
-  Uso:
    -	Compila únicamente los archivos de pruebas (******/*.spec.ts o **/*.test.ts).
    -	Define configuraciones especiales, como incluir bibliotecas de pruebas (jest, mocha, etc.).
-	Ejemplo de uso:
```json
{
  "extends": "./tsconfig.json",
  "include": ["src/**/*.spec.ts", "src/**/*.test.ts"]
}

```
#### tsconfig.base.json (Base)
-  Propósito: Proveer una configuración compartida en un monorepo o en múltiples paquetes.
-  Uso: Extendido por otros archivos tsconfig para mantener configuraciones comunes.
- Ejemplo de uso:
```json
{
  "compilerOptions": {
    "strict": true,
    "target": "es6",
    "moduleResolution": "node"
  }
}

```
#### ¿Cómo funcionan juntos?
- Los archivos tsconfig pueden extenderse(heredarse) entre sí usando la opción "extends", lo que permite reutilizar configuraciones comunes. Por ejemplo:
  1.	tsconfig.base.json define opciones globales.
  2.	tsconfig.app.json, tsconfig.node.json y tsconfig.spec.json extienden(heredan) de este archivo base y tiene sus propias configuraciones a la vez

#### TSC
- Puedes especificar el archivo tsconfig al usar el comando tsc (TypeScript Compiler).
- Si no especificas un archivo, tsc buscará automáticamente el archivo tsconfig.json en la raíz del proyecto.
##### Ejemplo
- Por defecto busca el archivo tsconfig.json:
```cmd
tsc
```
- Especificar un archivo tsconfig:
```cmd
tsc --project tsconfig.app.json
```

:::tip
- Las herramientas modernas como Webpack o Vite y frameworks como Angular permiten definir cuál archivo tsconfig usar.
:::


#### Monorepos (NX, Lerna, etc.)
- En un monorepo, puedes usar un archivo tsconfig.base.json como base y configuraciones específicas para cada parte del proyecto.
Usa la propiedad "extends" para reutilizar configuraciones.
##### Ejemplo
- Estructura:
```plaintext
monorepo/
├── tsconfig.base.json
├── packages/
│   ├── app/
│   │   ├── tsconfig.json (extiende tsconfig.base.json)
│   ├── server/
│   │   ├── tsconfig.json (extiende tsconfig.base.json)

```
- Ejemplo de extensión: Archivo base:
```json
{
  "compilerOptions": {
    "target": "es6",
    "strict": true
  }
}

```
- Archivo específico:
```json
{
  "extends": "../../tsconfig.base.json",
  "include": ["src/**/*"]
}

```
#### Pruebas
- Usar un archivo como tsconfig.spec.json es útil para compilar solo archivos de prueba.
- Ejemplo: Ejecutar pruebas con Jest:
```cmd
jest --config jest.config.js --tsconfig=tsconfig.spec.json
```
#### Scripts en package.json
- Define diferentes scripts para usar los archivos tsconfig según el propósito.
- Ejemplo (package.json):
```json
{
  "scripts": {
    "build:app": "tsc --project tsconfig.app.json",
    "build:server": "tsc --project tsconfig.node.json",
    "test": "jest --tsconfig tsconfig.spec.json"
  }
}

```
:::tip Observación
- Flujo común de trabajo:
  -  Configura tu archivo base (tsconfig.json o tsconfig.base.json):
      -	Define las configuraciones comunes.
  -  Crea configuraciones específicas (tsconfig.app.json, tsconfig.node.json):
      -	Personaliza las configuraciones según el contexto (cliente, servidor, pruebas).
  -  Usa herramientas o scripts para invocar cada configuración:
      -	tsc --project
      -	Configura Webpack, Jest o la herramienta que uses.
:::

#### Vite
- Vite tiene un archivo base llamado tsconfig.json que contiene lo siguiente:

```json
{
  "compilerOptions": { 
     "useUnknownInCatchVariables": true ,
     
} ,
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}

```
:::tip Explicación
- compilerOptions:
  - Esta sección define opciones globales aplicables para todo el proyecto. En este caso:
      -	"useUnknownInCatchVariables": true:
          -	Esta opción fuerza a que las variables de bloques catch en excepciones sean tratadas como unknown en lugar de any.
          -	Mejora la seguridad al requerir que las excepciones sean verificadas o convertidas explícitamente antes de usarlas.
- files
  -	Está vacío ("files": []), lo que significa que este archivo tsconfig.json no incluye directamente archivos para compilar.
  -	En lugar de ello, delega la inclusión de archivos a los archivos referenciados en la sección references.
- references
  -	Esta clave indica que este archivo depende de otros archivos de configuración tsconfig.
  -	La compilación se delega a estos archivos, que probablemente están configurados para diferentes partes del proyecto.
  -	En este caso:
      -	"path": "./tsconfig.app.json": Configura probablemente el cliente o la aplicación.
      -	"path": "./tsconfig.node.json": Configura probablemente la parte del backend o entorno Node.js.
- Ejemplo del flujo:
  1.	Si ejecutas tsc -b, TypeScript usa este archivo y sigue las referencias.
  2.	Primero compilará el código definido en tsconfig.app.json.
  3.	Luego, compilará lo definido en tsconfig.node.json.
- La clave "references" organiza el orden de compilación:
  -	Si la aplicación necesita primero compilar el cliente (app) antes que el servidor (node), TypeScript lo hará automáticamente en el orden correcto.
:::


:::tip modo de construcción
- La opcion -b te permite activar el modo de construcción
- El modo de construcción en TypeScript es una funcionalidad que facilita la gestión y compilación de proyectos grandes que involucran múltiples subproyectos o módulos. Cuando usas tsc -b, estás habilitando un flujo especial de compilación que gestiona proyectos que dependen de otros proyectos de manera eficiente. Este flujo permite compilar varios proyectos en el orden adecuado y de forma incremental (solo los archivos que han cambiado).
- Imagina que tienes un proyecto grande que está dividido en varias partes. Por ejemplo, tienes:
  1.	Un proyecto principal.
  2.	Subproyectos que dependen del proyecto principal o de otros subproyectos.
#### Modo normal (sin -b)
- En un proyecto común de TypeScript, sin el modo de construcción, puedes tener un único archivo tsconfig.json que compila todos los archivos de tu proyecto. Cada vez que ejecutas tsc, TypeScript recompila todos los archivos desde cero, sin importar si algunos no han cambiado.
- Por ejemplo, si haces un cambio en solo un archivo, TypeScript recompilará todo el proyecto (todos los archivos). Esto puede ser lento si tu proyecto es grande.
#### 	Modo de construcción (-b)
- Con el modo de construcción, TypeScript usa un sistema que permite compilar proyectos de forma más eficiente y organizada.
Cuando ejecutas tsc -b, TypeScript:
  1.	Gestiona proyectos múltiples: Te permite organizar tu proyecto en varios subproyectos, que pueden ser dependientes unos de otros. Cada subproyecto tiene su propio archivo tsconfig.json y puede referirse a otros subproyectos.
  2.	Compilación incremental: Solo recompila los archivos que han cambiado desde la última vez que se compiló. Si un archivo no ha cambiado, no se recompila, lo que mejora el tiempo de compilación.
  3.	Resuelve dependencias entre proyectos: Si tienes un proyecto A que depende de un proyecto B, TypeScript compilará primero el proyecto B y luego el proyecto A. Esto asegura que siempre estés trabajando con versiones correctas de tus dependencias.
  4. El modo de construcción de TypeScript con tsc -b detecta los cambios en las dependencias mediante un mecanismo llamado compilación incremental.
#### Ejemplo práctico con tsc -b
- Supongamos que tienes la siguiente estructura de carpetas:
```bash
/proyecto
  /tsconfig.json          (configuración principal)
  /subproyecto1
    /tsconfig.json        (configuración del subproyecto 1)
  /subproyecto2
    /tsconfig.json        (configuración del subproyecto 2)

```
- Dentro del tsconfig.json principal de /proyecto, podrías tener algo como esto:
```json
{
  "compilerOptions": {
    "composite": true
  },
  "references": [
    { "path": "./subproyecto1" },
    { "path": "./subproyecto2" }
  ]
}

```
- La clave "composite": true en el tsconfig.json indica que este proyecto puede ser compilado independientemente y que sus dependencias deben resolverse.
- La clave "references" indica que el proyecto principal depende de subproyecto1 y subproyecto2.


#### ¿Qué pasa cuando usas tsc -b en este caso?
1.	Compilación ordenada: Primero, TypeScript compilará subproyecto1, luego subproyecto2, y finalmente el proyecto principal. Esto garantiza que siempre compiles las dependencias en el orden correcto.
2.	Compilación incremental: Si no ha cambiado nada en subproyecto1, TypeScript no lo recompilará, lo que ahorra tiempo.
3.	Optimización de recursos: Si solo ha cambiado un archivo en el subproyecto2, TypeScript solo recompilará ese archivo, y no todo el proyecto.

#### ¿Por qué es útil?
-	Eficiencia: Si tienes un proyecto grande con muchos archivos y dependencias, el modo de construcción acelera la compilación al recompilar solo lo que ha cambiado.
-	Organización: Puedes dividir tu código en varios proyectos o módulos más pequeños y manejables.
-	Automatización: Si tienes dependencias entre proyectos, TypeScript asegura que se compilen en el orden correcto.

#### En resumen
-	El modo de construcción (-b) de TypeScript te permite manejar proyectos grandes o monorepos (múltiples proyectos dentro de un solo repositorio).
-	Ayuda a compilar múltiples proyectos en el orden correcto y solo recompilar lo que ha cambiado, lo que hace que la compilación sea más rápida y eficiente.
-	Es especialmente útil cuando tienes proyectos interdependientes, donde un subproyecto depende de otros para funcionar correctamente.




:::
:::tip ¿Cómo detecta TypeScript que una dependencia ha cambiado?
- Hashing de Archivos: TypeScript mantiene un hash (un valor único calculado a partir del contenido de un archivo) de cada archivo que compila. Cuando se ejecuta el comando tsc -b en modo de construcción, TypeScript calcula el hash de los archivos fuente (por ejemplo, los archivos .ts) y lo guarda en un archivo de "estado" que se  llama tsconfig.tsbuildinfo. Este archivo contiene un registro de todos los archivos que se han compilado junto con sus hashes y el estado de la compilación.
- Verificación de Cambios: La próxima vez que ejecutes tsc -b, TypeScript compara los hashes de los archivos actuales con los previamente almacenados. Si el contenido de un archivo ha cambiado, el hash también cambiará. Si un archivo tiene un hash diferente, TypeScript lo considera como un archivo modificado y lo recompilará.
-  Dependencias y Orden de Compilación: Cuando tienes dependencias entre proyectos (por ejemplo, un subproyecto que depende de otro), TypeScript también verifica si alguno de los archivos de dependencia ha cambiado. Si el proyecto A depende de los archivos de proyecto B y alguno de esos archivos cambia, TypeScript detectará el cambio y recompilará el proyecto B primero, y luego el proyecto A:
  -	Si el archivo en subproyecto1 ha cambiado, entonces TypeScript recompilará ese subproyecto y también recompilará el proyecto que depende de él (subproyecto2 o el proyecto principal).
  -	Si no ha cambiado nada en las dependencias, TypeScript saltará la recompilación de esas dependencias, lo que mejora el rendimiento.
#### Archivos de estado (tsbuildinfo)
- Cuando ejecutas la compilación con tsc -b, TypeScript genera un archivo adicional en el directorio donde se encuentra el tsconfig.json. Este archivo tiene la extensión .tsbuildinfo y contiene información sobre los archivos que se han compilado, así como los hashes asociados a ellos.
- Este archivo sirve como registro de los resultados de la compilación anterior y ayuda a TypeScript a realizar una compilación incremental de manera más eficiente. Por ejemplo:
  -	Si cambias un archivo en subproyecto1, TypeScript comparará el hash del archivo modificado con el registrado en el archivo .tsbuildinfo y, si detecta una diferencia, recompilará el archivo.
  -	Si no ha habido cambios en los archivos, TypeScript no hará nada y saltará la recompilación.
#### ¿Qué sucede si eliminas o modificas el archivo .tsbuildinfo?
- Si eliminas el archivo .tsbuildinfo o si lo modificas, TypeScript no podrá hacer una compilación incremental correctamente y, en su lugar, realizará una compilación completa de todos los archivos, ya que perdería el registro de los hashes anteriores.
#### ¿Qué pasa si modificas una dependencia indirecta?
- Si un archivo dentro de un subproyecto cambia (y ese archivo es una dependencia de otro proyecto), TypeScript también se asegura de que todos los archivos que dependen de ese archivo se recompilen en el orden adecuado, lo que garantiza que todos los proyectos estén actualizados.
- Por ejemplo, si tienes:
  -	Proyecto A depende de subproyecto1
  -	Subproyecto1 depende de subproyecto2
- Si cambias algo en subproyecto2, TypeScript lo detectará y recompilará subproyecto2, luego recompilará subproyecto1, y finalmente Proyecto A.
#### Flujo general de compilación con dependencias
1.	Primera ejecución:
  -	TypeScript compila todos los archivos y genera los hashes.
  -	Guarda la información de la compilación en un archivo .tsbuildinfo.
2.	Segunda ejecución:
  -	TypeScript verifica los hashes de los archivos.
  -	Si el contenido de un archivo ha cambiado, lo recompila.
  -	Si algún archivo dependiente cambia, recompila los archivos dependientes también.
3.	Compilación de dependencias:
  -	Si un archivo depende de otro, TypeScript asegura que los archivos sean compilados en el orden correcto.
#### ¿Por qué es útil este mecanismo?
-	Recompilación selectiva: Solo los archivos que han cambiado (y sus dependencias) se recompilan, lo que mejora el rendimiento en proyectos grandes.
-	Integración con monorepos: Es muy útil en proyectos con múltiples subproyectos que pueden depender unos de otros, como los monorepos.
-	Simplicidad: TypeScript se encarga de gestionar todo esto automáticamente sin necesidad de intervención manual.
:::


## Afirmaciones de asignación definida
- En TypeScript, la afirmación de asignación definida se utiliza cuando estás seguro de que una variable o propiedad será inicializada antes de que se utilice, pero TypeScript no puede verificarlo automáticamente.
#### Contexto
- TypeScript exige que las variables y propiedades se inicialicen antes de su uso para evitar errores de referencia. Esto es parte de su sistema de tipos estrictos, diseñado para mejorar la seguridad del código.
- Cuando defines una propiedad en una clase, TypeScript espera que la propiedad sea inicializada en el constructor o mediante una asignación explícita. Si no se cumple esta expectativa, TypeScript mostrará errores si intentas usar la propiedad antes de su inicialización.
#### Uso del “!”
- El operador “!” se coloca al final de la declaración de la propiedad o variable para indicar que estás seguro de que la propiedad será asignada, a pesar de que TypeScript no puede verificar esto de manera estática.
- Usa el "!"" para indicar que estás seguro de que una variable o propiedad será asignada, aunque TypeScript no pueda verificarlo.
- Ayuda a evitar errores de compilación relacionados con la inicialización de variables y propiedades cuando estás seguro de que se asignarán antes de su uso.

#### Ejemplo
- Supongamos que tienes una clase donde una propiedad debe ser inicializada, pero TypeScript no puede garantizar que se asignará en todos los casos. Puedes usar la afirmación de asignación definida para evitar errores de compilación:
```js
class Example {
  myProperty!: string;  // Afirmación de asignación definida

  constructor() {
    // No inicializas `myProperty` aquí, pero aseguras que será asignada más adelante
    this.initialize();
  }

  initialize() {
    this.myProperty = "Initialized";  // Asignación posterior
  }
}

```
:::tip Observación
- myProperty!: La afirmación de asignación definida (!) le dice a TypeScript que la propiedad myProperty será inicializada en algún momento antes de su uso, aunque el compilador no puede comprobarlo directamente en el momento de la compilación.
- Inicialización Posterior: La propiedad myProperty se inicializa en el método initialize, que se llama en el constructor. La afirmación de asignación definida evita que TypeScript muestre un error sobre la posible falta de inicialización.

:::
:::tip info
- [Definite Assignment Assertions](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#definite-assignment-assertions)

:::

## Promesa 
- En TypeScript (y JavaScript), una promesa es un objeto que representa el resultado (o la falla) de una operación asíncrona. Las promesas permiten manejar código asíncrono de forma más organizada que los callbacks, facilitando la lectura y el manejo de errores.

:::tip Código asíncrono o operación asíncrona
- El código asíncrono es aquel que permite realizar tareas sin bloquear la ejecución del programa. En otras palabras, el programa puede continuar ejecutándose mientras una operación (como una solicitud a un servidor, una lectura de archivo, etc.) se está llevando a cabo en segundo plano. Cuando esa operación asíncrona termina, el programa es notificado y puede actuar sobre el resultado.
:::

#### ¿Cómo funcionan las promesas?
- Una promesa puede estar en uno de estos tres estados:
  -	Pendiente (Pending): La operación asíncrona aún no ha terminado.
  -	Cumplida (Fulfilled): La operación terminó con éxito.
  -	Rechazada (Rejected): La operación falló.
- Una promesa es creada con un constructor que recibe una función con dos parámetros:
  -	Resolve(value): Esta función se usa para cambiar el estado de la promesa a "resuelta". Cuando se invoca resolve(), se indica que la operación se completó con éxito, y el valor que se pasa a resolve será el resultado de la promesa. Ese valor luego puede ser accedido por un then().
  -	Reject(reason): Esta función se usa para cambiar el estado de la promesa a "rechazada". Esto indica que la operación falló, y el valor pasado a reject será la razón o el error que causó la falla. Este valor luego puede ser accedido por un catch().

#### ¿Cómo se tipan las promesas?
- En TypeScript, puedes especificar el tipo de dato que devolverá una promesa cuando este en estado “resuelta” utilizando el tipo Promise&lt;T>, donde T es el tipo de dato que la promesa devolverá cuando sea cumplida.
- T es el tipo de dato del parámetro “value” de Resolve().
#### ¿Para qué sirve?
- Las promesas son útiles para manejar tareas asíncronas como operaciones de red (peticiones HTTP), temporizadores, lectura/escritura de archivos, entre otros. Ayudan a evitar el "callback hell" (cuando los callbacks se anidan mucho) y permiten estructurar el código de manera más limpia y entendible.
- Ejemplo básico de una promesa:
```js
function fetchData(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // Simular si la operación tiene éxito o falla.
      
      if (success) {
        resolve("Datos obtenidos correctamente.");
      } else {
        reject("Error al obtener los datos.");
      }
    }, 2000); // Simula una operación que tarda 2 segundos.
  });
}

// Usar la promesa
fetchData()
  .then((result: string) => {
    console.log(result); // "Datos obtenidos correctamente."
  })
  .catch((error: string) => {
    console.error(error); // "Error al obtener los datos."
  });

```
:::tip Observación
-  fetchData(): Esta función retorna una promesa que se resolverá o rechazará después de 2 segundos.
-  resolve: Si la operación es exitosa, se devuelve un valor de tipo string.
-  reject: Si la operación falla, se devuelve un mensaje de error.
-  then(): Aquí manejas el resultado de la promesa cuando es cumplida.
-  catch(): Aquí manejas cualquier error si la promesa es rechazada.
:::
## Seguir aprendiendo
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Cursos de Typescript](https://learn.microsoft.com/es-es/training/browse/?terms=typescript)
- [TypeScript Tutorial](https://www.w3schools.com/typescript/)
- [typescript cheatSheet](https://rmolinamir.github.io/typescript-cheatsheet/)
- [typescript cheatSheet2](https://doabledanny.gumroad.com/l/typescript-cheat-sheet-pdf)