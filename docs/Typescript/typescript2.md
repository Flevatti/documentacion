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
#### Pick<T,K>
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
- La línea const component: DefineComponent<{}, {}, any> define una variable component de tipo DefineComponent, lo que significa que es un componente de Vue.js. Los tres parámetros genéricos de DefineComponent especifican el tipo de las props, el tipo de los datos y el tipo de los métodos del componente, respectivamente. En este caso, se especifica que el componente no tiene props ({}), que no tiene datos ({}) y que tiene métodos de cualquier tipo (any). Con esto especificamos el componente como si usaramos Options API.
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



## Seguir aprendiendo
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Cursos de Typescript](https://learn.microsoft.com/es-es/training/browse/?terms=typescript)
- [TypeScript Tutorial](https://www.w3schools.com/typescript/)
- [typescript cheatSheet](https://rmolinamir.github.io/typescript-cheatsheet/)
- [typescript cheatSheet2](https://doabledanny.gumroad.com/l/typescript-cheat-sheet-pdf)