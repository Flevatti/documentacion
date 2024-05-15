---
sidebar_position: 1
---
# Typescript
- Typescript es un superconjunto de javascript.
- Typescript hace que javascript sea fuertemente tipado y que tenga algunas funcionalidades POO (Orientado a Objetos).
- Typescript es un lenguaje compilado, [javascript es un lenguaje interpretado](https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/What_is_JavaScript#c%C3%B3digo_interpretado_versus_compilado).
- Tiene la misma sintaxis que javascript solo que añade funciones extra.
- Es importante saber que Typescript funciona SOLO en TIEMPO DE COMPILACIÓN, en ejecución no hace las validaciones de tipo de datos.
- Como typescript fue creado por Microsoft, al especificar los tipos de datos mejoras el autocompletado de VISUAL STUDIO CODE ya que también es de Microsoft.


## Configuración Typescript

:::tip
- Se necesita Node (en realidad se requiere NPM que viene incluido con este).
- Al compilar se genera código Javascript que luego se ejecuta ósea el rendimiento es el mismo.
- Compilar significa transformar un código de un lenguaje a otro (generalmente es binario).
:::


- [Sitio web oficial](https://www.typescriptlang.org/)
- [Instalación](https://www.typescriptlang.org/download/)




#### Ejemplo
- Creamos un archivo llamado script.ts

```ts
console.log('Hola Typescript');
```


:::tip
- Ts es la extensión de typescript.
:::



- Lo podemos ejecutar con:

```powershell
node script.ts
```

- O primero lo podemos compilar con:

```powershell
npx tsc script.ts
```

:::tip Observación
- Especificamos el nombre del archivo a compilar y nos generara código javascript para ejecutar con el comando node.

:::


:::tip Documentación
- [Sitio web](https://www.typescriptlang.org/docs/):
    - Get Started: Nos muestra como migrar de un lenguaje a typescript.
    - Hanbook: Nos muestra los fundamentos/teoría de typescript.
    - Reference: Tiene contenido interesante de typescript.

:::


## Sintaxis
### Comentarios
```typescript
// comentario

/* Comentario
 de 
 varias lineas */


```

### Variables
```typescript
var myString = "Esto es una cadena de texto"
console.log(myString)
console.log(typeof myString)

```

:::tip Observación
- Por ahora no cambia la sintaxis.
- La sintaxis de Javascript funciona correctamente en typescript.
- Si no asignamos el tipo de dato, [usa la palabra clave  var de un lenguaje tipado como C#](https://flevatti.github.io/documentacion/docs/C--/guiaC2#palabra-clave-var) al crear la variable y el tipo de dato se asigna solo. Esto sucede con const , let y var.

:::


```typescript
let myString = "Esto es una cadena de texto"
myString = "Aqui cambio el valor de la cadena de texto"
console.log(myString)
```

:::tip Observación
- Funciona, pero tira error en el nombre de la variable. [Esto se puede arreglar creando un archivo de configuración](#corregir-errores).
:::

```typescript
var myString = "Esto es una cadena de texto"
myString = 5;
console.log(myString)

```

:::tip Observación
- Si lo ejecutas con el comando “node nombrearchivo” funciona.
- Si lo compilas con el comando “npx tsc nombrearchivo” te va a tirar un error ya que la variable myString es de tipo String debido a su primer valor asignado y no se le puede asignar un valor numérico. Ósea se aplica el tipado fuerte. 
- Esto funciona así en todas las variables (var, const y let).


:::

#### Especificar tipo de dato
- Con los dos puntos (“:”) podemos especificar el tipo de dato de una variable.
- Sintaxis: nombrevariable : tipoDeDato
- Esto sirve para validar que una variable solo contenga como valor ese tipo de dato.

```typescript
let myString : String = "Esto es una cadena de texto"
console.log(myString)


let myString : string = "Esto es una cadena de texto"
console.log(myString)


```

:::tip Observación
- Los tipos de datos en minúsculas son primitivos.
- Se le puede especificar tipo de dato a variables,parametros,etc.
:::

:::tip RECORDATORIO
- Cuando una variable/parámetro/etc tiene un tipo de dato asignado, no se le puede asignar un valor con un tipo diferente.
:::

```typescript
let myNumber:number = 7;
myNumber =  myNumber + 4
console.log(myNumber)
console.log(typeof myNumber)
console.log(myNumber - 1);
console.log(myNumber)
let myBool : boolean = false
myBool = true;
console.log(myBool);
console.log(typeof myBool)
```


:::tip 
- Existe el tipo de dato “any” para asignarle cualquier tipo de dato a la variable.
- Existe el tipo de dato “never” que es una especie de undefined para especificar un valor que nunca se va a producir/generar ya que por lo general se reproduce un error o algo que interrumpe el método y impide que llegue a la última línea de código de este.
:::

```typescript
let myUndefined : undefined;
// Error porque la variable solo es de tipo undefined
myUndefined = "MyUndefined";
console.log(myUndefined);

```



### Funciones
- Luego de los paréntesis que contiene los parámetros de una función, con los dos puntos (“:”) podemos especificar qué tipo de dato retorna.

```typescript
function myFunction() : void {
    console.log("Mi funcion");
}

myFunction();


```
:::tip Observación
- Estamos especificando  que no se retorna nada con la palabra "void".
- Si no específicas que tipo de dato retorna, Typescript analiza la función y agrega el tipo de dato de retorno de forma automática.
:::

- Error:


```typescript
function myFunction() : string {
    console.log("Mi funcion");
}

myFunction();

```

:::tip Observación
- Te tira un error porque la función no devuelve un string (lo que se especificó).
:::


- También podemos especificar el tipo de dato de los parametros:

```typescript

function sumTwoNumbers (firstNumber : number ,  secondNumber : number) : number {
    return firstNumber + secondNumber;
}

console.log(sumTwoNumbers(5,5))


```

:::tip
- Por defecto cada parámetro es de tipo any (cualquier tipo de dato, no le gusta a typescript) y esto hace que no funcione el autocompletado de las funciones/propiedades que contenga el valor de este.

:::

- Con desestructuración de objeto:


```typescript

function saludar({name , age} : {name: string , age:string})  {
   console.log(`Hola ${name}, tienes ${age} años`)
}

saludar({name: "Pepe" , age: "32"})



```

- Con objeto:

```typescript

function saludar(persona :  {name: string , age:number})  {

   const {name , age}  = persona
   console.log(`Hola ${name}, tienes ${age} años`)
}

saludar({name: "Pepe" , age: 32})


```
- Con callback:


```typescript

const sayHiFromFunction = (fn : Function)  => {
   fn('Fede');
}

sayHiFromFunction((name : string) => {
   console.log(`Hola ${name}`)
})

sayHiFromFunction(() => {
   return Math.random()
})


```
:::danger
- El tipo de dato Function es el equivalente a Any en las funciones y se debe evitar.
- El método sayHiFromFunction está pidiendo cualquier tipo de función.
:::

- Validar callback:

```typescript
const sayHiFromFunction = (fn : (name: string) => string)  => {
   fn('Fede');
}

sayHiFromFunction((name : string) => {
   console.log(`Hola ${name}`);
   return name;
})



```


:::tip Observación
- Estamos especificando que el callback tiene un parámetro String y devuelve un valor String.
- Sintaxis: (parametro : tipodeDato , ....) => tipo_de_dato_de_retorno
:::


```typescript
const sayHiFromFunction = (fn : (name: string) => void)  => {
   fn('Fede');
}

sayHiFromFunction((name : string) => {
   console.log(`Hola ${name}`);

})



```
:::tip Observación
- Estamos especificando que el callback tiene un parámetro String y no devuelve nada (void).
:::


#### Funciones flechas
```typescript
// Opcion 1
const sumar = (a:number , b:number) : number => {
   return a + b
}

// Opcion 2
const restar: (a:number , b:number) => number = (a,b) => {
   return a-b
}


```


### Array
- Por defecto un array vacio es de tipo never y por lo tanto no puede tener ningún valor adentro.
- Como especificar un Array:

```typescript
const languages: string[] = []
languages.push('Javascript');

```
:::tip Observación
- Para definir un tipo array: TipoDeDato[]
- Todos los elementos del array van a corresponder a TipoDeDato, en caso contrario va Typescript va a generar un error.
En este caso es un array de String.
:::

- Otra forma de hacer lo mismo:
```typescript

let myList : Array<string> = ['Pedro' , 'Juan']
console.log(myList)


```
:::tip Observación
- Dentro de los "&lt;>" se especifica el tipo de dato de los elementos del array.
- Se utilizan [parámetros genéricos](./typescript2.md#generico).

:::

- Para especificar un array que pueda contener string o number:

```typescript

const languages: (string| number)[] = []
languages.push('Javascript');
languages.push(2);



```

:::tip Observación
- Usamos [unión types](#union-types) entre paréntesis.

:::

- Ejemplo de un array de objetos:

```typescript
type HeroId = `${string}-${string}-${string}-${string}-${string}`;

type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'omnipresent'

type HeroBasicInfo = {
   name: string;
   age: number;
}
type HeroProperties = {
  readonly id?: HeroId;

  isActive?: boolean;
  powerScale?: HeroPowerScale
};
type Hero = HeroBasicInfo & HeroProperties

const  heros: Hero[] = []

```

:::tip Observación
- Muchos conceptos que se aplicaron en este código se verán más adelante.

:::


### Matrices y Tupla
- Como especificar un array bidimensional:

```typescript
type CellValue = 'X' | '0' | ''
type GameBoard = [
   [CellValue , CellValue , CellValue] ,
   [CellValue , CellValue , CellValue] ,
   [CellValue , CellValue , CellValue] ,
]

const gameBoard: GameBoard = [
   ["X" , "0" , "X"] , ["0" , "X" , "0"] , ['X' , '' , '0']
]
```

:::tip Observación
- Muchos conceptos que se aplicaron en este código se verán más adelante.
:::


:::tip Tuplas
- El type de GameBoard se llama tupla.
- Una tupla es un array con un límite fijado de longitud.
- Basicamente en typescript un array que tiene una cantidad de posiciones fijas, es una tupla.

:::


### Set
```typescript
let mySet:Set<string> = new Set(['Pedro' , 'Juan']);
// mySet.add(36) Error debe ser string
mySet.add('36') 
console.log(mySet)

```
:::tip Observación
- Adentro de  "&lt;>" especificamos el tipo de dato de los valores del set.
:::


:::warning 
- Si no funciona ejecuta el siguiente comando para descargar los tipos: "npm install -D @types/node".
- [Link del problema](https://stackoverflow.com/questions/53936918/how-can-i-fix-compile-time-errors-even-using-compiler-options-as-target-es6-and)
:::

### Map
```typescript
let myMap:Map<string , number> = new Map([["Juan" , 50]]);
myMap.set("Pedro" , 35)
console.log(myMap)


```

:::tip Observación
- En el &lt;X,B> especificamos el tipo de dato de la clave (es la X) y el tipo de dato del valor (es la B).

:::

### Clase
```typescript
class MyClass {
    name: string 
    age: number

    constructor(name:string , age:number) {
        this.name = name;
        this.age = age;
    }
}

let myClass : MyClass = new MyClass('Pedro' , 5);
console.log(myClass)
console.log(myClass.name)



```
:::tip Observación
- Los tipos de datos de las propiedades se especifican al comienzo de la clase, incluso se puede asignar valores por defecto en esta parte del código.
- Los tipos de datos de los métodos se hacen como cualquier otra función.
- Con el nombre de la clase podemos especificar el tipo de dato de un objeto.
:::


- Otro ejemplo:

```typescript

class Avanger {
    readonly name: string
    powerScore: number
    // Le especificamos el tipo de dato y el valor por defecto
    wonBattles: number = 0

    constructor(name: string , powerScore:number) {
        this.name = name;
        this.powerScore = powerScore
    }

    get fullName() {
        return `${this.name}, de poder ${this.powerScore}`
    }

    set power ( newPower : number) {
        if (newPower <= 100) {
            this.powerScore = newPower
        } else {
            throw new Error('Power score cann´t be more than 100')
        }
    }
}

```

#### Propiedades privadas
- Con javascript seria de esta manera:
```typescript
    #powerScore: number
```
- Con Typescript para que no funcione en tiempo de ejecución, pero si te detecte los errores en visual studio code, solo cambiamos el signo “#” por la palabra clave private:
```typescript
    private powerScore: number
```

:::tip
- Como en javascript no existe la palabra clave “private” al compilarlo el campo sigue siendo público.
- Solo sirve para hacer comprobaciones en visual studio code (que se denomina forma estática).
:::

- Lo podés combinar con readonly:
```typescript
private readonly wonBattles: number = 0
```

#### Propiedades publicas
- Se hace con la palabra clave “public”, es el valor por defecto si no se especifica nada.
- Las siguientes dos propiedades son publicas:

```typescript
    name: string
    public powerScore: number

```
#### Propiedades protected
- Protected: sólo puede ser utilizada en la clase en la que está definido o en una subclase. 
- [Funciona igual que en C#](https://flevatti.github.io/documentacion/docs/C--/POO/#protected).

```typescript
      protected age: number = 0

```
#### Interfaces con clase
```typescript
 
interface Avenger {
    name: string;
    powerScore: number;
    wonBattles: number;
    age: number;
    battle: () => void
  }
  
  class Avanger implements Avenger {
    name: string;
    public powerScore: number;
    readonly wonBattles: number = 0;
    age: number = 0;
    constructor(name: string, powerScore: number) {
      this.name = name;
      this.powerScore = powerScore;
    } 
   battle() : void {
      console.log('Esta peleando');
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
  avanger.battle();

```
:::tip Observación
- [Acá funcionan como las típicas interfaces de POO y su implementación](https://flevatti.github.io/documentacion/docs/C--/POO#interfaces).
- Con la palabra “implements” implementas la interface en la clase, ósea toda la estructura que definiste en la interface la debe tener la clase, en caso contrario Typescript te tira un error.

:::


### Enum
- Es para una colección de datos de solo lectura finita (máximo 20 es lo aconsejable).
- [Enum en C#](https://flevatti.github.io/documentacion/docs/C--/POO2#enumeraci%C3%B3n)
```typescript
 

enum MyEnum  {
    JAVASCRIPT = "javascript" ,
    TYPESCRIPT = "typescript" ,
    JAVA = "java"
}

const myEnum = MyEnum.JAVASCRIPT;
console.log(myEnum)


```
:::tip Observación
- En Typescript se puede crear un ENUM.
- En Javascript es un objeto const .
:::


- Para evitar compilar demasiado código podemos usar const en el enum:

```typescript
 

const enum MyEnum  {
    JAVASCRIPT = "javascript" ,
    TYPESCRIPT = "typescript" ,
    JAVA = "java"
}

const myEnum = MyEnum.JAVASCRIPT;
console.log(myEnum)


```

:::tip Observación
- Compila el código anterior y este.
- Vas a ver que en el anterior se crea un objeto con los valores y se usa.
- En el nuevo esto se evita y se trabaja como si todo fuera un String evitando compilar código de más.
:::


:::tip ¿Cual usar?
- Generalmente se usa  const.
- Pero si el ENUM lo va a consumir alguien de afuera que no sabe nada de tu código, pues se recomienda no usar const.
- [Más información](https://www.typescriptlang.org/docs/handbook/enums.html)
:::
## Aserciones de tipo
- Hay algunos métodos de javascript que devuelven un elemento especifico en base al parámetro, ósea no siempre devuelven lo mismo y esto Typescript lo suele manejar con un tipo de dato general que lo implementan todo, pero esto hace que no podamos usar los métodos específicos de X tipo de dato.
- Typescript no puede predecir el tipo de dato porque no funciona en tiempo de ejecución.
- Ejemplo: document.getElementByID puede devolver un elemento input, un elemento canva, un elemento button , todos tienen métodos diferentes para poder  manipular la etiqueta HTML pero para Typescript todos devuelven un HtmlElement.
- Con HtmlElement no podemos acceder a los métodos que solo tiene un input/canva/button.

#### As
- Podemos usar la palabra clave “as” para decirle a typescript que trate a una variable como X tipo de dato.
- Sintaxis: as TipoDeDato

```typescript
// Estamos obligando a tratar a canvas como un tipo de dato HTMLCanvasElement
const canvas = document.getElementById('canva') as HTMLCanvasElement

// Gracias al as tenemos acceso al metodo getContext() que es propio de un elemento canva
canvas.getContext('2d');


```
:::tip danger
- Con esto le estamos obligando a Typescript a tratar a la variable canvas como X tipo de dato (en este caso HTMLCanvasElement).
- Básicamente le estamos diciendo a Typescript que confié en nosotros, lo cual no es muy bueno ya que somos humanos y es normal tener errores.
- No valida si es el tipo de dato que especificamos, si seleccionamos un span se ejecuta igual, por ejemplo. Esto sucede porque typescript no se ejecuta en tiempo de ejecución.
:::


- Las buenas prácticas sugieren que la aserción se haga en la comprobación:


```typescript
const canvas = document.getElementById('canva')

if (canvas != null) {
   const xtx = (canvas as HTMLCanvasElement).getContext('2d')
}

```
:::tip Observación
- Le estamos diciendo a Typescript que trate a la variable canvas como HTMLCanvasElement entre paréntesis.
- En tiempo de ejecución no valida si es HTMLCanvasElement y por lo tanto no hay validación sobre el tipo de dato.
- Si en lugar de canva seleccionamos un elemento span, como no hay validación sobre el tipo de dato se rompe todo.
:::

#### Instanceof
- También Typescript puede detectar un tipo de dato con una comprobación de Instanceof

```typescript

const canvas = document.getElementById('canva')

if (canvas != null && canvas instanceof HTMLCanvasElement) {
   // Aca ya se trata como tipo HTMLCanvasElement
   const xtx = canvas.getContext('2d');
}

```
:::tip Observación
- Con este código valida en tiempo de ejecución si es HTMLCanvasElement.
- Se suele llamar inferencia, ya que Typescript se da cuenta dentro del if que canva es un tipo de dato  HTMLCanvasElement gracias a Instanceof.
- De las tres formas que explicamos, la de usar Instanceof es la mejor ya que Javascript valida si es ese tipo de dato y Typescript lo trata como a ese tipo de dato si pasa la validación, usamos lo mejor de los dos.
:::


:::tip Typeof vs instanceof
- Typeof es para tipos de datos basicos.
- Instanceof es para instancias.
:::

#### Aserciones de Fetching
- Configuración de typescript para permitir usar módulos:


```json
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig to read more about this file */

    /* Projects */
    // "incremental": true,                              /* Save .tsbuildinfo files to allow for incremental compilation of projects. */
    // "composite": true,                                /* Enable constraints that allow a TypeScript project to be used with project references. */
    // "tsBuildInfoFile": "./.tsbuildinfo",              /* Specify the path to .tsbuildinfo incremental compilation file. */
    // "disableSourceOfProjectReferenceRedirect": true,  /* Disable preferring source files instead of declaration files when referencing composite projects. */
    // "disableSolutionSearching": true,                 /* Opt a project out of multi-project reference checking when editing. */
    // "disableReferencedProjectLoad": true,             /* Reduce the number of projects loaded automatically by TypeScript. */

    /* Language and Environment */
    "target": "es2017",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
    // "lib": [],                                        /* Specify a set of bundled library declaration files that describe the target runtime environment. */
    // "jsx": "preserve",                                /* Specify what JSX code is generated. */
    // "experimentalDecorators": true,                   /* Enable experimental support for legacy experimental decorators. */
    // "emitDecoratorMetadata": true,                    /* Emit design-type metadata for decorated declarations in source files. */
    // "jsxFactory": "",                                 /* Specify the JSX factory function used when targeting React JSX emit, e.g. 'React.createElement' or 'h'. */
    // "jsxFragmentFactory": "",                         /* Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. 'React.Fragment' or 'Fragment'. */
    // "jsxImportSource": "",                            /* Specify module specifier used to import the JSX factory functions when using 'jsx: react-jsx*'. */
    // "reactNamespace": "",                             /* Specify the object invoked for 'createElement'. This only applies when targeting 'react' JSX emit. */
    // "noLib": true,                                    /* Disable including any library files, including the default lib.d.ts. */
    // "useDefineForClassFields": true,                  /* Emit ECMAScript-standard-compliant class fields. */
    // "moduleDetection": "auto",                        /* Control what method is used to detect module-format JS files. */

    /* Modules */
    "module": "esnext",                                /* Specify what module code is generated. */
    // "rootDir": "./",                                  /* Specify the root folder within your source files. */
    // "moduleResolution": "node10",                     /* Specify how TypeScript looks up a file from a given module specifier. */
    // "baseUrl": "./",                                  /* Specify the base directory to resolve non-relative module names. */
    // "paths": {},                                      /* Specify a set of entries that re-map imports to additional lookup locations. */
    // "rootDirs": [],                                   /* Allow multiple folders to be treated as one when resolving modules. */
    // "typeRoots": [],                                  /* Specify multiple folders that act like './node_modules/@types'. */
    // "types": [],                                      /* Specify type package names to be included without being referenced in a source file. */
    // "allowUmdGlobalAccess": true,                     /* Allow accessing UMD globals from modules. */
    // "moduleSuffixes": [],                             /* List of file name suffixes to search when resolving a module. */
    // "allowImportingTsExtensions": true,               /* Allow imports to include TypeScript file extensions. Requires '--moduleResolution bundler' and either '--noEmit' or '--emitDeclarationOnly' to be set. */
    // "resolvePackageJsonExports": true,                /* Use the package.json 'exports' field when resolving package imports. */
    // "resolvePackageJsonImports": true,                /* Use the package.json 'imports' field when resolving imports. */
    // "customConditions": [],                           /* Conditions to set in addition to the resolver-specific defaults when resolving imports. */
    // "resolveJsonModule": true,                        /* Enable importing .json files. */
    // "allowArbitraryExtensions": true,                 /* Enable importing files with any extension, provided a declaration file is present. */
    // "noResolve": true,                                /* Disallow 'import's, 'require's or '<reference>'s from expanding the number of files TypeScript should add to a project. */

    /* JavaScript Support */
    // "allowJs": true,                                  /* Allow JavaScript files to be a part of your program. Use the 'checkJS' option to get errors from these files. */
    // "checkJs": true,                                  /* Enable error reporting in type-checked JavaScript files. */
    // "maxNodeModuleJsDepth": 1,                        /* Specify the maximum folder depth used for checking JavaScript files from 'node_modules'. Only applicable with 'allowJs'. */

    /* Emit */
    // "declaration": true,                              /* Generate .d.ts files from TypeScript and JavaScript files in your project. */
    // "declarationMap": true,                           /* Create sourcemaps for d.ts files. */
    // "emitDeclarationOnly": true,                      /* Only output d.ts files and not JavaScript files. */
    // "sourceMap": true,                                /* Create source map files for emitted JavaScript files. */
    // "inlineSourceMap": true,                          /* Include sourcemap files inside the emitted JavaScript. */
    // "outFile": "./",                                  /* Specify a file that bundles all outputs into one JavaScript file. If 'declaration' is true, also designates a file that bundles all .d.ts output. */
    // "outDir": "./",                                   /* Specify an output folder for all emitted files. */
    // "removeComments": true,                           /* Disable emitting comments. */
    // "noEmit": true,                                   /* Disable emitting files from a compilation. */
    // "importHelpers": true,                            /* Allow importing helper functions from tslib once per project, instead of including them per-file. */
    // "importsNotUsedAsValues": "remove",               /* Specify emit/checking behavior for imports that are only used for types. */
    // "downlevelIteration": true,                       /* Emit more compliant, but verbose and less performant JavaScript for iteration. */
    // "sourceRoot": "",                                 /* Specify the root path for debuggers to find the reference source code. */
    // "mapRoot": "",                                    /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSources": true,                            /* Include source code in the sourcemaps inside the emitted JavaScript. */
    // "emitBOM": true,                                  /* Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files. */
    // "newLine": "crlf",                                /* Set the newline character for emitting files. */
    // "stripInternal": true,                            /* Disable emitting declarations that have '@internal' in their JSDoc comments. */
    // "noEmitHelpers": true,                            /* Disable generating custom helper functions like '__extends' in compiled output. */
    // "noEmitOnError": true,                            /* Disable emitting files if any type checking errors are reported. */
    // "preserveConstEnums": true,                       /* Disable erasing 'const enum' declarations in generated code. */
    // "declarationDir": "./",                           /* Specify the output directory for generated declaration files. */
    // "preserveValueImports": true,                     /* Preserve unused imported values in the JavaScript output that would otherwise be removed. */

    /* Interop Constraints */
    // "isolatedModules": true,                          /* Ensure that each file can be safely transpiled without relying on other imports. */
    // "verbatimModuleSyntax": true,                     /* Do not transform or elide any imports or exports not marked as type-only, ensuring they are written in the output file's format based on the 'module' setting. */
    // "allowSyntheticDefaultImports": true,             /* Allow 'import x from y' when a module doesn't have a default export. */
    "esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */
    // "preserveSymlinks": true,                         /* Disable resolving symlinks to their realpath. This correlates to the same flag in node. */
    "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */

    /* Type Checking */
    "strict": true,                                      /* Enable all strict type-checking options. */
    // "noImplicitAny": true,                            /* Enable error reporting for expressions and declarations with an implied 'any' type. */
    // "strictNullChecks": true,                         /* When type checking, take into account 'null' and 'undefined'. */
    // "strictFunctionTypes": true,                      /* When assigning functions, check to ensure parameters and the return values are subtype-compatible. */
    // "strictBindCallApply": true,                      /* Check that the arguments for 'bind', 'call', and 'apply' methods match the original function. */
    // "strictPropertyInitialization": true,             /* Check for class properties that are declared but not set in the constructor. */
    // "noImplicitThis": true,                           /* Enable error reporting when 'this' is given the type 'any'. */
    // "useUnknownInCatchVariables": true,               /* Default catch clause variables as 'unknown' instead of 'any'. */
    // "alwaysStrict": true,                             /* Ensure 'use strict' is always emitted. */
    // "noUnusedLocals": true,                           /* Enable error reporting when local variables aren't read. */
    // "noUnusedParameters": true,                       /* Raise an error when a function parameter isn't read. */
    // "exactOptionalPropertyTypes": true,               /* Interpret optional property types as written, rather than adding 'undefined'. */
    // "noImplicitReturns": true,                        /* Enable error reporting for codepaths that do not explicitly return in a function. */
    // "noFallthroughCasesInSwitch": true,               /* Enable error reporting for fallthrough cases in switch statements. */
    // "noUncheckedIndexedAccess": true,                 /* Add 'undefined' to a type when accessed using an index. */
    // "noImplicitOverride": true,                       /* Ensure overriding members in derived classes are marked with an override modifier. */
    // "noPropertyAccessFromIndexSignature": true,       /* Enforces using indexed accessors for keys declared using an indexed type. */
    // "allowUnusedLabels": true,                        /* Disable error reporting for unused labels. */
    // "allowUnreachableCode": true,                     /* Disable error reporting for unreachable code. */

    /* Completeness */
    // "skipDefaultLibCheck": true,                      /* Skip type checking .d.ts files that are included with TypeScript. */
    "skipLibCheck": true                                 /* Skip type checking all .d.ts files. */
  }
}

```

##### Modulo
- Las expresiones “await” solo se permiten en el nivel superior(global) de un archivo cuando el archivo es un módulo.
- Para convertirlo en un módulo, se usa la extensión mts, con esto de forma “nativa” no podras usar import/export aunque existen un montón de empaquetadores que esto lo hacen de forma automática y  ni cuentas te das.
- El archivo pasaría a llamarse script.mts entonces.

##### Truco para tipar la respuesta de una API:
1. Haces una petición y copias la respuesta.
2. Abrimos una herramienta como [quicktype](https://quicktype.io/).
3. Pegas la respuesta en quicktype, cambias el nombre y seleccionas el lenguaje (Typescript en este caso), configuras las opciones que quieras y listo, se te genera solo el tipado para la API.
4. ¡El tipado lo pegas en el código que estamos trabajando y ya tenemos todo!

:::tip
- Hay extensiones de visual studio code que también te genera el tipado.
:::

- Código:

```typescript
export type GithubResponse = {
    total_count:        number;
    incomplete_results: boolean;
    items:              Item[];
}

export type Item = {
    id:                          number;
    node_id:                     string;
    name:                        string;
    full_name:                   string;
    private:                     boolean;
    owner:                       Owner;
    html_url:                    string;
    description:                 null | string;
    fork:                        boolean;
    url:                         string;
    forks_url:                   string;
    keys_url:                    string;
    collaborators_url:           string;
    teams_url:                   string;
    hooks_url:                   string;
    issue_events_url:            string;
    events_url:                  string;
    assignees_url:               string;
    branches_url:                string;
    tags_url:                    string;
    blobs_url:                   string;
    git_tags_url:                string;
    git_refs_url:                string;
    trees_url:                   string;
    statuses_url:                string;
    languages_url:               string;
    stargazers_url:              string;
    contributors_url:            string;
    subscribers_url:             string;
    subscription_url:            string;
    commits_url:                 string;
    git_commits_url:             string;
    comments_url:                string;
    issue_comment_url:           string;
    contents_url:                string;
    compare_url:                 string;
    merges_url:                  string;
    archive_url:                 string;
    downloads_url:               string;
    issues_url:                  string;
    pulls_url:                   string;
    milestones_url:              string;
    notifications_url:           string;
    labels_url:                  string;
    releases_url:                string;
    deployments_url:             string;
    created_at:                  Date;
    updated_at:                  Date;
    pushed_at:                   Date;
    git_url:                     string;
    ssh_url:                     string;
    clone_url:                   string;
    svn_url:                     string;
    homepage:                    null | string;
    size:                        number;
    stargazers_count:            number;
    watchers_count:              number;
    language:                    Language | null;
    has_issues:                  boolean;
    has_projects:                boolean;
    has_downloads:               boolean;
    has_wiki:                    boolean;
    has_pages:                   boolean;
    has_discussions:             boolean;
    forks_count:                 number;
    mirror_url:                  null;
    archived:                    boolean;
    disabled:                    boolean;
    open_issues_count:           number;
    license:                     License | null;
    allow_forking:               boolean;
    is_template:                 boolean;
    web_commit_signoff_required: boolean;
    topics:                      string[];
    visibility:                  Visibility;
    forks:                       number;
    open_issues:                 number;
    watchers:                    number;
    default_branch:              DefaultBranch;
    score:                       number;
}

export enum DefaultBranch {
    Dev = "dev",
    Main = "main",
    Master = "master",
}

export enum Language {
    CSS = "CSS",
    HTML = "HTML",
    JavaScript = "JavaScript",
    TypeScript = "TypeScript",
}

export type License = {
    key:     string;
    name:    string;
    spdx_id: string;
    url:     null | string;
    node_id: string;
}

export type Owner = {
    login:               string;
    id:                  number;
    node_id:             string;
    avatar_url:          string;
    gravatar_id:         string;
    url:                 string;
    html_url:            string;
    followers_url:       string;
    following_url:       string;
    gists_url:           string;
    starred_url:         string;
    subscriptions_url:   string;
    organizations_url:   string;
    repos_url:           string;
    events_url:          string;
    received_events_url: string;
    type:                Type;
    site_admin:          boolean;
}

export enum Type {
    Organization = "Organization",
    User = "User",
}

export enum Visibility {
    Public = "public",
}


const API_URL = 'https://api.github.com/search/repositories?q=javascript'

const response = await fetch(API_URL)

if (!response.ok) {
    throw new Error('Request failed');
}

type APIResponse = {
    items: object[]
}
const data = await response.json() as  GithubResponse;
 data.items.map(repo => {
    return {
        name : repo.name ,
        id: repo.id ,
        url: repo.url
    }
})


```

:::tip Observación
- Aunque Typescript no se queje, no significa que esto sea seguro.
- Capaz que la API se modifique y el autocompletado te sugiera propiedades que ya no se usan más o ya no existen.
- En quicktype hay una opcion llamada Typescript zod que te genera un tipado que se ejecuta en tiempo de ejecución y utiliza la biblioteca zod para las validaciones de tipo.


:::


## Corregir errores
- Para que no aparezcan errores, se debe crear un archivo de configuración.
- Entonces creamos un archivo llamado tsconfig.json
- Dentro de este, insertamos el siguiente contenido:

```json
{
    "compilerOptions": {
      /* Visit https://aka.ms/tsconfig to read more about this file */
  
      /* Projects */
      // "incremental": true,                              /* Save .tsbuildinfo files to allow for incremental compilation of projects. */
      // "composite": true,                                /* Enable constraints that allow a TypeScript project to be used with project references. */
      // "tsBuildInfoFile": "./.tsbuildinfo",              /* Specify the path to .tsbuildinfo incremental compilation file. */
      // "disableSourceOfProjectReferenceRedirect": true,  /* Disable preferring source files instead of declaration files when referencing composite projects. */
      // "disableSolutionSearching": true,                 /* Opt a project out of multi-project reference checking when editing. */
      // "disableReferencedProjectLoad": true,             /* Reduce the number of projects loaded automatically by TypeScript. */
  
      /* Language and Environment */
      "target": "es2016",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
      // "lib": [],                                        /* Specify a set of bundled library declaration files that describe the target runtime environment. */
      // "jsx": "preserve",                                /* Specify what JSX code is generated. */
      // "experimentalDecorators": true,                   /* Enable experimental support for legacy experimental decorators. */
      // "emitDecoratorMetadata": true,                    /* Emit design-type metadata for decorated declarations in source files. */
      // "jsxFactory": "",                                 /* Specify the JSX factory function used when targeting React JSX emit, e.g. 'React.createElement' or 'h'. */
      // "jsxFragmentFactory": "",                         /* Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. 'React.Fragment' or 'Fragment'. */
      // "jsxImportSource": "",                            /* Specify module specifier used to import the JSX factory functions when using 'jsx: react-jsx*'. */
      // "reactNamespace": "",                             /* Specify the object invoked for 'createElement'. This only applies when targeting 'react' JSX emit. */
      // "noLib": true,                                    /* Disable including any library files, including the default lib.d.ts. */
      // "useDefineForClassFields": true,                  /* Emit ECMAScript-standard-compliant class fields. */
      // "moduleDetection": "auto",                        /* Control what method is used to detect module-format JS files. */
  
      /* Modules */
      "module": "commonjs",                                /* Specify what module code is generated. */
      // "rootDir": "./",                                  /* Specify the root folder within your source files. */
      // "moduleResolution": "node10",                     /* Specify how TypeScript looks up a file from a given module specifier. */
      // "baseUrl": "./",                                  /* Specify the base directory to resolve non-relative module names. */
      // "paths": {},                                      /* Specify a set of entries that re-map imports to additional lookup locations. */
      // "rootDirs": [],                                   /* Allow multiple folders to be treated as one when resolving modules. */
      // "typeRoots": [],                                  /* Specify multiple folders that act like './node_modules/@types'. */
      // "types": [],                                      /* Specify type package names to be included without being referenced in a source file. */
      // "allowUmdGlobalAccess": true,                     /* Allow accessing UMD globals from modules. */
      // "moduleSuffixes": [],                             /* List of file name suffixes to search when resolving a module. */
      // "allowImportingTsExtensions": true,               /* Allow imports to include TypeScript file extensions. Requires '--moduleResolution bundler' and either '--noEmit' or '--emitDeclarationOnly' to be set. */
      // "resolvePackageJsonExports": true,                /* Use the package.json 'exports' field when resolving package imports. */
      // "resolvePackageJsonImports": true,                /* Use the package.json 'imports' field when resolving imports. */
      // "customConditions": [],                           /* Conditions to set in addition to the resolver-specific defaults when resolving imports. */
      // "resolveJsonModule": true,                        /* Enable importing .json files. */
      // "allowArbitraryExtensions": true,                 /* Enable importing files with any extension, provided a declaration file is present. */
      // "noResolve": true,                                /* Disallow 'import's, 'require's or '<reference>'s from expanding the number of files TypeScript should add to a project. */
  
      /* JavaScript Support */
      // "allowJs": true,                                  /* Allow JavaScript files to be a part of your program. Use the 'checkJS' option to get errors from these files. */
      // "checkJs": true,                                  /* Enable error reporting in type-checked JavaScript files. */
      // "maxNodeModuleJsDepth": 1,                        /* Specify the maximum folder depth used for checking JavaScript files from 'node_modules'. Only applicable with 'allowJs'. */
  
      /* Emit */
      // "declaration": true,                              /* Generate .d.ts files from TypeScript and JavaScript files in your project. */
      // "declarationMap": true,                           /* Create sourcemaps for d.ts files. */
      // "emitDeclarationOnly": true,                      /* Only output d.ts files and not JavaScript files. */
      // "sourceMap": true,                                /* Create source map files for emitted JavaScript files. */
      // "inlineSourceMap": true,                          /* Include sourcemap files inside the emitted JavaScript. */
      // "outFile": "./",                                  /* Specify a file that bundles all outputs into one JavaScript file. If 'declaration' is true, also designates a file that bundles all .d.ts output. */
      // "outDir": "./",                                   /* Specify an output folder for all emitted files. */
      // "removeComments": true,                           /* Disable emitting comments. */
      // "noEmit": true,                                   /* Disable emitting files from a compilation. */
      // "importHelpers": true,                            /* Allow importing helper functions from tslib once per project, instead of including them per-file. */
      // "importsNotUsedAsValues": "remove",               /* Specify emit/checking behavior for imports that are only used for types. */
      // "downlevelIteration": true,                       /* Emit more compliant, but verbose and less performant JavaScript for iteration. */
      // "sourceRoot": "",                                 /* Specify the root path for debuggers to find the reference source code. */
      // "mapRoot": "",                                    /* Specify the location where debugger should locate map files instead of generated locations. */
      // "inlineSources": true,                            /* Include source code in the sourcemaps inside the emitted JavaScript. */
      // "emitBOM": true,                                  /* Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files. */
      // "newLine": "crlf",                                /* Set the newline character for emitting files. */
      // "stripInternal": true,                            /* Disable emitting declarations that have '@internal' in their JSDoc comments. */
      // "noEmitHelpers": true,                            /* Disable generating custom helper functions like '__extends' in compiled output. */
      // "noEmitOnError": true,                            /* Disable emitting files if any type checking errors are reported. */
      // "preserveConstEnums": true,                       /* Disable erasing 'const enum' declarations in generated code. */
      // "declarationDir": "./",                           /* Specify the output directory for generated declaration files. */
      // "preserveValueImports": true,                     /* Preserve unused imported values in the JavaScript output that would otherwise be removed. */
  
      /* Interop Constraints */
      // "isolatedModules": true,                          /* Ensure that each file can be safely transpiled without relying on other imports. */
      // "verbatimModuleSyntax": true,                     /* Do not transform or elide any imports or exports not marked as type-only, ensuring they are written in the output file's format based on the 'module' setting. */
      // "allowSyntheticDefaultImports": true,             /* Allow 'import x from y' when a module doesn't have a default export. */
      "esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */
      // "preserveSymlinks": true,                         /* Disable resolving symlinks to their realpath. This correlates to the same flag in node. */
      "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */
  
      /* Type Checking */
      "strict": true,                                      /* Enable all strict type-checking options. */
      // "noImplicitAny": true,                            /* Enable error reporting for expressions and declarations with an implied 'any' type. */
      // "strictNullChecks": true,                         /* When type checking, take into account 'null' and 'undefined'. */
      // "strictFunctionTypes": true,                      /* When assigning functions, check to ensure parameters and the return values are subtype-compatible. */
      // "strictBindCallApply": true,                      /* Check that the arguments for 'bind', 'call', and 'apply' methods match the original function. */
      // "strictPropertyInitialization": true,             /* Check for class properties that are declared but not set in the constructor. */
      // "noImplicitThis": true,                           /* Enable error reporting when 'this' is given the type 'any'. */
      // "useUnknownInCatchVariables": true,               /* Default catch clause variables as 'unknown' instead of 'any'. */
      // "alwaysStrict": true,                             /* Ensure 'use strict' is always emitted. */
      // "noUnusedLocals": true,                           /* Enable error reporting when local variables aren't read. */
      // "noUnusedParameters": true,                       /* Raise an error when a function parameter isn't read. */
      // "exactOptionalPropertyTypes": true,               /* Interpret optional property types as written, rather than adding 'undefined'. */
      // "noImplicitReturns": true,                        /* Enable error reporting for codepaths that do not explicitly return in a function. */
      // "noFallthroughCasesInSwitch": true,               /* Enable error reporting for fallthrough cases in switch statements. */
      // "noUncheckedIndexedAccess": true,                 /* Add 'undefined' to a type when accessed using an index. */
      // "noImplicitOverride": true,                       /* Ensure overriding members in derived classes are marked with an override modifier. */
      // "noPropertyAccessFromIndexSignature": true,       /* Enforces using indexed accessors for keys declared using an indexed type. */
      // "allowUnusedLabels": true,                        /* Disable error reporting for unused labels. */
      // "allowUnreachableCode": true,                     /* Disable error reporting for unreachable code. */
  
      /* Completeness */
      // "skipDefaultLibCheck": true,                      /* Skip type checking .d.ts files that are included with TypeScript. */
      "skipLibCheck": true                                 /* Skip type checking all .d.ts files. */
    }
  }


```

:::tip
- Este archivo también lo podés generar al ejecutar el comando “npx tsc –-init”
:::
## Inferencia
- La inferencia de tipos en TypeScript es una característica que permite al lenguaje deducir automáticamente los tipos de las variables en función del valor asignado a éstas o del contexto en el que se utilizan. De esta manera, TypeScript puede ofrecer comprobaciones de tipos en tiempo de compilación y ayudar a detectar errores de programación antes de que el código se ejecute.
- La inferencia de tipos puede ser muy útil para escribir código más conciso y legible, ya que no es necesario especificar explícitamente el tipo de cada variable en todas las declaraciones. Sin embargo, también es importante tener en cuenta que la inferencia de tipos no siempre es perfecta y puede haber casos en los que sea necesario proporcionar tipos explícitamente para evitar ambigüedades o errores.
- Ejemplo:

```typescript
let x = 10;
```
:::tip Observación
- En este ejemplo, TypeScript infiere que el tipo de la variable x es number porque se le asigna el valor 10.
:::

## Type
- En lugar de estar declarando los tipos de datos todo el rato, Typescript permite crear tipos de datos y asignarles un nombre para poder reutilizarlos, por ejemplo:

```typescript
type UserId = number;

const id : UserId = 123;

```
- ¿Y esto para qué vale? Pues para que el código no sea tan abstracto. No es lo mismo pasar a una función un number que un userId, aunque ambos valores sean de tipo number, a nivel conceptual es distinto, le da un significado y el código se entiende mejor.
- Además, si los creas como tipos y los reutilizas, si en un futuro decides cambiar el tipo userId a string, te va a resultar más sencillo de cambiar el código, ya que puedes buscar en el código todas las referencias a ese tipo y cambiar lo que necesites.
- Esto también se puede aplicar a tipos más complejos como los objetos, muy útil también:

```typescript
type Car = { 
  brand: string,
  model: string,
  year: number
};

const focusCar: Car = { brand: "Ford", model: "Focus", year: 2008 };

```

- Lo bueno de esto es que da igual los tipos que crees, Typescript los borrará del bundle generado, por lo que no ocuparán espacio, te ayudan solo en el proceso de desarrollo (recuerda que es la misión de Typescript, no funciona en tiempo de ejecución).
#### Ejemplos

```typescript
// El nombre de los tipos deben usar Pascal case (es como camelCase solo que la primera letra tambien es con Mayúscula)
type Hero = {
   name: string ,
   age: number
}

let hero : Hero = {
   name: "Thor" ,
   age: 1500
}

function createHero(name:string , age:number) : Hero {
   return {name,age}
}

const thor = createHero('Thor' , 1500);

```

```typescript
let hero : Hero = {
   name: "Thor" ,
   age: 1500
}

function createHero(hero : Hero) : Hero {
   const {name , age} = hero
   return {name,age}
}

const thor = createHero({name:'Thor' , age:1500});


```
:::tip Observación
- Si añades una propiedad que no existe en un objeto de tipo Hero te va a tirar un error de tipos de datos ya que el objeto dejaría de ser “Hero”.
:::

#### Propiedad opcional
- Si usamos el signo de pregunta “?” al final del nombre de una propiedad, es porque esta es opcional:
```typescript
type Hero = {
   name: string ,
   age: number ,
   isActive? : boolean
}

let hero : Hero = {
   name: "Thor" ,
   age: 1500,

}


```
#### Solo lectura
- Podemos usar la palabra “readonly” para que la propiedad solo sea de lectura.
- [Readonly en C#](https://flevatti.github.io/documentacion/docs/C--/guiaC3#readonly).
```typescript

type Hero = {
   readonly id?: number
   name: string ,
   age: number ,
   isActive? : boolean
}


```
:::tip danger
- Readonly no funciona en producción(ejecución), por lo tanto, no hace que el objeto sea inmutable, solamente sirve para generar errores de tipeo en visual studio code.
- Para hacerlo realmente inmutable se debe utilizar el método [freeze()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) de Javascript 


:::

#### Template union types
- Se pueden crear tipos de datos con plantillas literales (interpolación):

```typescript
type HeroId = `${string}-${string}-${string}-${string}-${string}`;

type Hero = {
  readonly id?: HeroId;
  name: string;
  age: number;
  isActive?: boolean;
};


function createHero(hero: Hero): Hero {
  const { name, age } = hero;
  return { id: crypto.randomUUID(), name, age };
}


```
:::tip Observación
- En la interpolación como variables podemos usar los tipos de datos para crear otro tipo de dato más complejo (este puede contener String, number, boolean, etc).
- [Más información](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html)

:::
## Union types
- Es un tipo formado a partir de dos o más tipos de datos diferentes, representa un valor que puede ser cualquiera de esos tipos. 
- Es fácil proporcionar un valor que coincida con un tipo de unión; simplemente proporcione un tipo que coincida con cualquiera de los tipos de datos especificados. 
- TypeScript solo permitirá una operación si es válida para todos los tipos de datos especificado. Por ejemplo, si tiene la unión string | number, no puede usar métodos que solo estén disponibles en String. Esto igual se podría solucionar con código javascript ([ver documentación](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)).
- Con el signo “|” creamos las uniones de dos o más tipos de datos, entonces un valor de ese tipo de dato debe corresponder con algunos de los tipos que especificamos en la unión.

```typescript
type HeroId = `${string}-${string}-${string}-${string}-${string}`;

type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'omnipresent'
let ann : number | string
ann = 1
ann = "Tambien puede ser un string"
type Hero = {
  readonly id?: HeroId;
  name: string;
  age: number;
  isActive?: boolean;
  powerScale?: HeroPowerScale
};


function createHero(hero: Hero): Hero {
  const { name, age } = hero;
  return { id: crypto.randomUUID(), name, age };
}

const thor = createHero({ name: "Thor", age: 1500 });
thor.powerScale = 'local'

```

:::tip Valor como tipo de dato
- Los tipos de datos que  especificas con Typescript también pueden ser valores directamente.
- En ese caso solamente aceptaría los valores que especificaste.
:::




## Intersection Type
- Nos permite construir nuevos tipos a partir de otros tipos.
- Nos permite ampliar algún tipo de dato.
- Usamos el signo “&” para la intersection y se podría decir que sirve para “heredar” otro tipo de dato y así poder ampliarlo:

```typescript
type HeroId = `${string}-${string}-${string}-${string}-${string}`;

type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'omnipresent'

type HeroBasicInfo = {
   name: string;
   age: number;
}
type HeroProperties = {
  readonly id?: HeroId;

  isActive?: boolean;
  powerScale?: HeroPowerScale
};

type Hero = HeroBasicInfo & HeroProperties

function createHero(input: HeroBasicInfo): Hero {
  const { name, age } = input;
  return { id: crypto.randomUUID(), name, age };
}

const thor = createHero({ name: "Thor", age: 1500 });
thor.powerScale = 'local'

```
:::tip Observación
- El tipo de dato Hero tiene las propiedades de HeroBasicInfo y HeroProperties.
- A diferencia de  Union types, acá el valor debe coincidir con todos los tipos que se especificó y no solamente con uno.


:::

## Type indexing
- Podes hacer que una propiedad de un objeto sea un tipo de dato.
- [Documentación](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html)
- Ejemplo:

```typescript
type HeroProperties = {
   isActive : boolean ,
   address : {
      planet : string ,
      city : string
   }
}

const addressHero : HeroProperties['address'] = {
   city: 'Madrid' ,
   planet : 'Tierra'
}

```