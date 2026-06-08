---
sidebar_position: 2
---
# Typescript  - Parte 3
## operador `satisfies`
- El operador `satisfies` de TypeScript permite comprobar si un valor cumple con un tipo o interfaz específica.
- Se utiliza para verificar que un valor cumpla con una estructura específica sin modificar el tipo que TypeScript infirió (detectó) automáticamente al comienzo, es decir, no cambia el tipo de dato original.
- Ayuda a comprobar que un valor tenga todas las propiedades y tipos que exige un tipo o interfaz.

#### ¿Por qué se necesita el operador `satisfies`?
- Veamos cómo era trabajar antes del operador `satisfies`:
```ts
type personInfo = personName | otherDetails;
type personName = "John" | "Jack" | "Justin";
type otherDetails = {
  id: number;
  age: number;
};
type Person = {
  myInfo: personInfo;
  myOtherInfo: personInfo;
};
const applicant: Person = {
  myInfo: "John",
  myOtherInfo: { id: 123, age: 22 },
};
console.log(applicant.myInfo.toUpperCase());
```
:::tip Observacion
- El tipo `Person` tiene dos propiedades: `myInfo` y `myOtherInfo`, ambas de tipo `personInfo`. Esto significa que ambas propiedades pueden contener un `personName` o un `otherDetails`. 
- Si intentamos acceder a `myInfo` y convertirlo a mayúsculas, TypeScript mostrará un error:
```txt
La propiedad 'toUpperCase' no existe en el tipo 'personInfo'.
La propiedad 'toUpperCase' no existe en el tipo 'otherDetails'.
```
- Este error ocurre porque TypeScript no puede saber  si `myInfo` o `myOtherInfo` contienen un string o un objeto, ya que `personInfo` fue definido como una unión de ambos tipos.
- Cuando TypeScript dice `La propiedad 'toUpperCase' no existe en el tipo 'otherDetails'`, es porque evalúa las dos posibilidades del tipo unión. Una de ellas (string) tiene el método `toUpperCase()`, pero la otra (`otherDetails`) no. Como TypeScript no puede saber con certeza qué tipo de dato contiene el valor en ese momento, y una de las posibilidades no posee ese método, muestra el error para evitar posibles fallos.
- Para solucionar este problema normalmente se utiliza [*narrowing*](typescript2.md#narrowing), es decir, una validación que le permite a TypeScript reducir/descartar las posibles opciones del tipo de dato.
:::
- Para eliminar este error, debemos validar manualmente la propiedad como se muestra a continuación:
```ts
if (typeof applicant.myInfo === "string") {
  console.log(applicant.myInfo.toUpperCase())
}
```
#### Cómo utilizar el operador `satisfies`
- Supongamos que tenemos muchas propiedades y validar manualmente cada una puede resultar incómodo.
- Antes del operador `satisfies`, normalmente era necesario realizar validaciones previas para que TypeScript pudiera determinar (detectar) correctamente los tipos.
- Con `satisfies`, TypeScript puede comprobar que un objeto cumple con una estructura específica sin modificar los tipos que detectó originalmente.
- Entonces, el ejemplo anterior podría resolverse así:
```ts
type personInfo = personName | otherDetails;
type personName = "John" | "Jack" | "Justin";
type otherDetails = {
  id: number;
  age: number;
};
type Person = {
  myInfo: personInfo;
  myOtherInfo: personInfo;
};
const applicant = {
  myInfo: "John",
  myOtherInfo: { id: 123, age: 22 },
} satisfies Person;


console.log(applicant.myInfo.toUpperCase());
```
:::tip Observacion
- El operador `satisfies` verifica que `applicant` cumpla con la estructura del tipo `Person`.
- Durante esa comprobación, TypeScript analiza cada propiedad del objeto y conserva los tipos que detectó.
- En el proceso de validación/comprobación, identifica el tipo de dato de cada propiedad y determina que `myInfo` es un string.
:::


#### Resumen
- Para usar `satisfies` no se debe especificar el tipo directamente en la variable (como `:Person`), ya que el operador se encarga de comprobar que el valor cumpla con el tipo indicado.
- Se utiliza al final de la asignación del valor con la sintaxis: `satisfies tipoDeDato`.
- El operador `satisfies` verifica que el valor tenga la estructura del tipo indicado y, durante la comprobación, TypeScript identifica el tipo de dato de cada propiedad.
```ts
type PC = { name: string; ram: string; price: number };

const pcStore = {
  pc1: { name: "Dell", ram: "10 GB", price: 12000 },
  pc2: { name: "HP", ram: "8 GB", price: 11000 },
  pc3: { name: "Asus", ram: "6 GB", price: 13000 },
  pc4: { name: "Mac", ram: "20 GB", price: "21000" },
} satisfies Record<string, PC>;
```

:::tip Observación
- Estamos validando que cada valor del objeto tenga las propiedades `name`, `ram` y `price`, y que además respeten los tipos definidos en `PC`.
:::

## Palabra clave `declare`
- En muchos casos trabajamos con variables, funciones o módulos que existen fuera de nuestro código (proyecto), pero TypeScript no puede encontrarlos ni saber qué tipos de datos tienen.
- Para indicarle a TypeScript que algo existe aunque no esté definido en el archivo (o proyecto) actual, se utiliza la palabra clave `declare`.
- `declare` le dice a TypeScript: "Confía en mí, esto existe y su tipo de dato es este."
- Por ejemplo:
```ts
declare const API_KEY: string;
console.log(API_KEY);
```
:::tip Observación
- Aquí le estamos diciendo a TypeScript que durante la ejecución existirá una constante llamada `API_KEY` y que su valor será un string.
- `declare` solo informa tipos; no crea variables ni genera código JavaScript.
- La palabra clave `declare` se coloca al comienzo de la declaración.
:::

#### declare const, let y var
```ts
declare const ENV: 'development' | 'production' | 'test';
declare let currentUser: string | null;
declare var legacyConfig: Record<string, unknown>;
```
:::tip Observación
- Para informar que existirá una variable global se usa `declare const` o `declare var`, aunque en la práctica se utiliza más `const`, ya que indica que el valor no debería cambiar.
- `declare let` se usa cuando se espera que el valor pueda cambiar durante la ejecución.
- `declare` no crea variables reales ni genera código JavaScript, solo le dice a TypeScript que esas variables existen en tiempo de ejecución.
- Estas declaraciones suelen usarse para tipar variables globales que provienen del entorno, scripts externos o configuraciones del sistema.
- `const`, `let` y `var` en este contexto solo afectan cómo TypeScript interpreta la mutabilidad del valor, no cómo se comporta realmente en JavaScript.
:::

#### Otros ejemplos
```ts
// Función 
declare function trackEvent(category: string, action: string): void;
trackEvent('button', 'click');
// Clase
declare class Analytics {
  constructor(trackingId: string);
  sendEvent(event: string, data?: Record<string, unknown>): void;
}

const analytics = new Analytics('UA-12345');
analytics.sendEvent('page_view');
// Enum
declare enum LogLevel {
  Debug,
  Info,
  Warning,
  Error,
}
// Ampliar un objeto global
// Solo puedes modificar o “extender” el ámbito global (por ejemplo `window`, tipos globales, etc.)
// dentro de archivos que TypeScript reconoce como módulos (cuando se usa `import` o `export`)
// o dentro de archivos de declaración (`.d.ts`).
declare global {
  interface Window {
    myCustomLibrary: {
      initialize(): void;
      processData(data: unknown): void;
    }
  }
}
```
#### Modulos
```js
// file: mylib.d.ts
declare module 'my-js-library' {
  export function doSomething(value: string): number;
  export function processData(data: object): void;
  export const VERSION: string;
}
```
:::tip Observación
- Estamos especificando que el módulo (archivo) `my-js-library` exporta las funciones `doSomething` y `processData`, además de la constante `VERSION`.
:::

- Cuando se importa el módulo, todas sus funcionalidades ya quedan tipadas:
```js
import { doSomething, VERSION } from 'my-js-library';

console.log(doSomething("test")); // TypeScript sabe que retorna un número
console.log(VERSION); // TypeScript sabe que es un string
```

#### Cómo TypeScript descubre los archivos de declaración
- TypeScript detecta automáticamente los archivos `.d.ts` que se encuentran dentro de las rutas especificadas en `tsconfig.json` (en `include`).
- Si un archivo de declaración no se reconoce, ese suele ser el primer lugar donde hay que revisar: la configuración de `include` o `files` en `tsconfig.json`.

```ts
{
  "compilerOptions": {
    "typeRoots": ["./node_modules/@types", "./types"]
  },
  "include": ["src/**/*", "types/**/*"]
}
```
- Una convención común es crear una carpeta `types` en la raíz del proyecto para los archivos de declaración personalizados.
- Para declaraciones globales, un archivo `globals.d.ts` dentro de la carpeta `src` es un enfoque limpio y organizado.
```txt
project/
├── src/
│   ├── globals.d.ts     
│   └── index.ts
├── types/
│   └── my-js-library.d.ts  
└── tsconfig.json
```
:::tip
- Generalmente, los módulos que no están escritos en TypeScript vienen sin tipos (de datos). Para solucionar esto, existen paquetes (módulos) separados que incluyen esas definiciones de tipos. Estos paquetes suelen llamarse `@types/nombreModulo`.
- Si utilizas paquetes `@types/nombreModulo` (de DefinitelyTyped), TypeScript los detecta automáticamente sin necesidad de configuración adicional.
- Estos paquetes contienen definiciones de tipos (de datos) para módulos que no están escritos en TypeScript.
- En `tsconfig.json` puedes usar:
    - `typeRoots` permite indicar en qué carpetas TypeScript debe buscar los tipos (los que se obtienen al instalar `@types/nombreModulo`). Si lo configuras, TypeScript solo buscará tipos dentro de esas carpetas, ignorando las demás ubicaciones por defecto.
    - `types` permite restringir qué paquetes de tipos (`@types/nombreModulo`) se cargan. Es decir, puedes decidir exactamente qué tipos de `@types/*` se incluyen en el proyecto. Esto sirve para evitar cargar tipos innecesarios y puede mejorar el rendimiento de compilación en proyectos grandes.
:::


:::tip Más información
- [TypeScript Declare (How to Declare Variables, Functions & Types)](https://www.convex.dev/typescript/advanced/type-operators-manipulation/typescript-declare)
:::

### Versión de TypeScript
- VS Code incluye su propia versión de TypeScript.
- Esa versión puede ser más nueva que la instalada en tu proyecto.
- Básicamente, es una configuración que define qué tipos de datos carga TypeScript por defecto y cómo se compila el código TypeScript, es decir, de qué manera se transforma a código JavaScript.
- Por ejemplo, la configuración global puede hacer que, si importas un archivo CSS, se muestre un error:
```js
import "./globals.css";
```
:::tip Observación
- Te podría aparecer un error de tipo:
```txt
Cannot find module or type declarations for side-effect import of './globals.css' ts(2882)
```
:::

#### ¿Cuál es la causa del problema?
- La causa es justamente un *side-effect import*, que significa que estás importando algo solo para que “haga efecto” (ejecute algo), pero sin usar variables, métodos, etc que contiene. En el ejemplo anterior, solo estás diciendo “aplica estos estilos globales”, pero no estás importando funciones ni variables.
- Algunas versiones de TypeScript tienen reglas más estrictas sobre importaciones sin valor de retorno (son las que no se utiliza nada de lo que contiene, se llaman *side-effect*, como `.css`) y no permiten hacerlas. Pero frameworks como Next.js las utilizan, por lo que tienen su propia configuración para dar soporte a este tipo de importaciones.
- Entonces, el error puede ser generado porque justamente la versión global de TypeScript que utiliza Visual Studio Code no soporta importaciones sin valor de retorno (*side-effect imports*).
- Independientemente de la versión de TypeScript que tengas en tu proyecto, Visual Studio Code suele cargar su propia versión, que puede ser la misma o diferente a la que estás usando en dicho proyecto.

#### Soluciones
#### 1- Forzar VS Code a usar la versión de TypeScript del proyecto (recomendada)
1. Abre un archivo  `.tsx`
2. Presiona  `Ctrl + Shift + P` (o `Cmd + Shift + P` en Mac)
3. Escribe:  `TypeScript: Select TypeScript Version`
4. Selecciona: **Use Workspace Version**

:::tip Observación
- La carpeta `node_modules` guarda todos los módulos del proyecto, incluyendo la versión de TypeScript que está usando tu proyecto.
- Con estos pasos estamos usando la versión de TypeScript que tenemos en la carpeta `node_modules` y no la que se usa por defecto en VS Code.
- Esto, en frameworks como Next.js, debería funcionar ya que está configurado para permitir importaciones de archivos `.css`.
:::
#### 2-  Crear un archivo de declaración
- Crea un archivo llamado `css.d.ts` o `global.d.ts`:
```ts
declare module "*.css";
```
:::tip Observación
- Esta declaración le indica a TypeScript que los archivos con extensión `.css` deben tratarse como módulos válidos, incluso cuando se importan únicamente por sus efectos secundarios (*side-effect imports*).
:::
#### 3-  Ajustar configuración de TypeScript
- En `tsconfig.json`:
```ts
{
  "compilerOptions": {
    "noUncheckedSideEffectImports": false
  }
}
```
:::tip Observación
- La opción `noUncheckedSideEffectImports` controla si TypeScript debe verificar las importaciones que se realizan únicamente por sus efectos secundarios (*side-effect imports*), como la importación de archivos CSS.
- Al establecer esta opción en `false`, TypeScript deja de reportar errores relacionados con este tipo de importaciones.
- Esta configuración puede ser útil cuando aparecen errores al importar archivos `.css`, imágenes u otros recursos que no exportan valores, sino que se cargan únicamente para producir un efecto durante la ejecución de la aplicación.
:::
#### 4- Actualizar TypeScript
- Lo recomendable es utilizar una versión de TypeScript compatible con el framework que estás usando. 
- Por ejemplo, si estás usando TypeScript 6 y existe algún problema de compatibilidad con Next.js, puedes instalar una versión compatible:
```powershell
npm install typescript@5.9
```
:::tip Observación
- Después de instalar la nueva versión, asegúrate de que VS Code esté utilizando la versión de TypeScript instalada en `node_modules` de tu proyecto (workspace) y no la versión global integrada en el editor.
:::

## Seguir aprendiendo
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Cursos de Typescript](https://learn.microsoft.com/es-es/training/browse/?terms=typescript)
- [TypeScript Tutorial](https://www.w3schools.com/typescript/)
- [typescript cheatSheet](https://rmolinamir.github.io/typescript-cheatsheet/)
- [typescript cheatSheet2](https://doabledanny.gumroad.com/l/typescript-cheat-sheet-pdf)

