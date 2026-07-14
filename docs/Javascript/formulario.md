---
sidebar_position: 6
---
# Validaciones (Formulario)

## Expresiones Regulares
- Las expresiones regulares (a menudo llamadas `RegExp` o `RegEx`) son patrones utilizados para buscar combinaciones de caracteres dentro de cadenas de texto (`string`).
- Un patrón es una forma de indicar qué texto queremos encontrar.
-	Son un sistema para buscar, capturar o reemplazar texto utilizando patrones.
- Estos patrones permiten realizar búsquedas de texto de forma sencilla y flexible, abarcando muchas posibilidades que de otra manera serían difíciles o costosas de implementar.
-	Sintaxis: `/patron/flags`
- El patrón es lo que vamos a evaluar/buscar mientras que el Flag es una pequeña ayuda.
- Todos los lenguajes de progamacion tiene expresiones regulares.
- Los patrones no son String

:::tip Aprende a crear tus Expresiones Regulares
- [Developer mozilla](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions)
- [Wikipedia](https://es.wikipedia.org/wiki/Expresi%C3%B3n_regular)
- [Guía para principiantes sobre expresiones regulares con ejemplos](https://blog.hpc.qmul.ac.uk/Beginners-Guide-to-Regular-Expressions/)
- [Crear expresiones regulares](https://lenguajejs.com/javascript/regexp/crear-expresiones-regulares/)
- [Probador de Regex](https://coddy.tech/tools/es/regex-tester)
- [RegExr: Learn, Build, & Test RegEx](https://regexr.com/)
- [Dominando las expresiones regulares: El arte de buscar y validar patrones (II)](https://www.enmilocalfunciona.io/dominando-las-expresiones-regulares-ii/)
- [RegEx 101: Guía de supervivencia para entender y usar expresiones regulares](https://eudriscabrera.com/blog/2022/regex-101)
- [Expresiones regulares (RegEx) en JavaScript: Manual para principiantes](https://www.freecodecamp.org/espanol/news/expresiones-regulares-regex-en-javascript-manual-para-principiantes/)
:::
```js
//    /Patron/
// Notacion Literal
const expresionRegular = /palabra/

// Notacion de objeto
// Esto es de javaScript
const expresionObjeto = new RegExp("palabra")

```
:::tip Observación
- Hay dos formas de crear expresiones regulares:
    - La notación literal (`/patron/`) es la forma más utilizada.
    - `new RegExp("patron")` suele utilizarse cuando el patrón se crea dinámicamente, por ejemplo, a partir de variables.
:::
### Flags de una RegExp
- `i` (**ignore case**): Ignora la diferencia entre mayúsculas y minúsculas durante la búsqueda.
- `g` (**global**): Busca todas las coincidencias del patrón en lugar de detenerse en la primera.
- `m` (**multiline**): Hace que `^` y `$` coincidan con el inicio y el final de cada línea, y no solo con el inicio y el final de toda la cadena.

```js
//    /Patron/Flags
// Notacion Literal
const expresionRegular = /palabra/i

// Notacion de objeto
// El patrón se pasa como primer parámetro y las flags como segundo.
const expresionObjeto = new RegExp("palabra" , "i")

```
## Metodo test()

- El método `test()` ejecuta la búsqueda de una expresión regular dentro de una cadena de texto y devuelve `true` o `false`. Es decir, busca el texto especificado en el patrón dentro del string pasado.
- Sirve para evaluar si el texto contiene lo que estamos buscando (según lo definido en el patrón).

```js
const expresionObjeto = new RegExp("palabra" , "i")

//Devuelve true si la cadena pasada por parametro contiene "palabra"
console.log(expresionObjeto.test("no hay palabra"));

```
## Carácteres especiales
- [] Rango de carácteres. Cualquiera de los caracteres del interior de los corchetes.
- | Establece una alternativa: lo que está a la izquierda o lo que está a la derecha.

```js
	const expresionRegular = /[ua]/i
	//Devuelve true si la cadena pasada por parametro tiene la letra u o la letra a
	console.log(expresionRegular.test("no hay palabra"));

```
```js

const expresionRegular = /palabra|pala/i
//Devuelve true si la cadena pasada por parametro contiene "palabra" o "pala"
console.log(expresionRegular.test("no hay pal"));

```
### Otros 
-	[0-9] Un dígito del 0 al 9.
-	[A-Z] Letra mayúscula de la A a la Z. Excluye ñ o letras acentuadas.
-	[a-z] Letra minúscula de la a a la z. Excluye ñ o letras acentuadas.
-	[A-Za-z0-9] Carácter alfanumérico (letra mayúscula, minúscula o dígito).

```js
	
const expresionRegular = /[A-Za-z0-9]/i
// Devuelve true si la cadena pasada como parámetro contiene al menos una letra o un número.
console.log(expresionRegular.test("no hay pal"));

```
```js
// Solo numeros
const expresionRegular = /^\d+$/gi;
//Devuelve true si la cadena pasada por parametro contiene solo numeros
console.log(expresionRegular.test("5f"));

```

```js
// Solo letras
const expresionRegular = /^[a-zA-Z ]*$/;
//Devuelve true si la cadena pasada por parametro contiene solo letras
console.log(expresionRegular.test("df5"));

```
Solo letras (con tildes):
```js
/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
```
Validar Email:
```js
/^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/
```
## Validación Formularios
- Antes de enviar los datos al servidor, es importante verificar que todos los campos obligatorios del formulario estén completos y que los valores tengan el formato correcto.
- Esto se conoce como **validación del lado del cliente** (*client-side validation*) y ayuda a comprobar que los datos ingresados sean válidos antes de enviarlos al servidor.


:::tip
- Las validaciones del lado del cliente mejoran la experiencia del usuario al detectar errores antes de enviar el formulario.
- Sin embargo, **no son una medida de seguridad**, ya que pueden ser modificadas o deshabilitadas por el usuario.
- Por este motivo, **siempre es necesario validar nuevamente los datos en el servidor** (*server-side validation*) antes de procesarlos.
:::


	
#### Existen dos formas de realizar la validación del lado del cliente
- **Validación mediante HTML5:** Utiliza la validación que ofrece HTML mediante atributos como `required`, `minlength`, `maxlength`, `min`, `max`, `pattern`, etc. Generalmente no requiere escribir JavaScript. Es rápida y sencilla de implementar, aunque ofrece menos posibilidades de personalización.
- **Validación con JavaScript:** Se implementa mediante código JavaScript. Permite crear validaciones totalmente personalizadas, aunque requiere escribir toda la lógica de validación (o utilizar una biblioteca que la proporcione).

## HTML5
La validación se realiza mediante atributos definidos en los elementos del formulario.
- `required`: Indica que el campo debe completarse.
- `minlength` y `maxlength`: Especifican la longitud mínima y máxima permitida para un texto.
- `min` y `max`: Especifican el valor mínimo y máximo permitido para los campos numéricos.
- `type`: Indica el tipo de dato esperado, por ejemplo: `number`, `email`, `url`, etc.
- `pattern`: Especifica una expresión regular que define el formato que deben cumplir los datos ingresados. *(La expresión regular se escribe sin las barras `/`.)*

:::warning
- El elemento `textarea` no admite el atributo `pattern`.
- Cada `input`, `textarea` o `select` debe tener un atributo `name`, ya que este se utiliza para identificar los datos enviados por el formulario.
:::



```html
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carrito Objeto</title>
    <link crossorigin="anonymous" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" rel="stylesheet">
</head>

<body>

    <div class="container">
        <h1>Formularios</h1>
    
        <form id="formulario">
            <input
                class="form-control mb-2"
                name="userName"
                placeholder="Ingrese su nombre"
                autocomplete="off"
                id="userName"
                type="text"
                required
                pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
                title="Solo letras"
                minlength="3"
                maxlength="10"
            />
            <input
                class="form-control mb-2"
                name="userEmail"
                placeholder="Ingrese su correo"
                id="userEmail"
                autocomplete="off"
                type="email"
                required
                pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
                title="Ingresa un email válido"
            />
            <button class="btn btn-primary" type="submit">Enviar</button>
        </form>
    </div>

    <script src="app.js"></script>
</body>

</html>

``` 
## Eventos

Ya aprendimos a escuchar eventos utilizando `addEventListener()`. Ahora veremos algunos eventos relacionados con los formularios.

### Submit
- El evento `submit` se dispara (activa) cuando un formulario es enviado.
- Generalmente se utiliza para validar los datos antes de enviarlos al servidor o para cancelar el envío y procesarlo con JavaScript.
- Un formulario puede enviarse de varias formas:
  - Haciendo clic en un `<input type="submit">`, un `<button type="submit">` o un `<input type="image">`.
  - Presionando la tecla **Enter** dentro de un campo del formulario.
- En todos estos casos se dispara el evento `submit` del formulario (`<form>`).
- El método `form.submit()` permite enviar un formulario mediante JavaScript, donde `form` es una variable con una referencia a un elemento `<form>`.

:::warning
Si deseas que un botón envíe el formulario y dispare el evento `submit`, debe ser de tipo `submit`.
:::

```html
    <div class="container">
        <h1>Formularios</h1>
    
        <form id="formulario">
            <input
              class="form-control mb-2"
              placeholder="Ingrese su nombre"
              type="text"
              id="userName"
              name="userName"
            >
            <input
              class="form-control mb-2"
              placeholder="Ingrese su correo"
              type="email"
              id="userEmail"
              name="userEmail"
            >
            <button
              class="btn btn-primary">Enviar</button
              type="submit"
            >
        </form>
    </div>

```
```js
// Seleccionar el formulario (etiqueta form)
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
    // El formulario no se envia al servidor (la pagina no se actualiza)
    e.preventDefault();
    console.log("funciona");
});

```
- El atributo `novalidate` de la etiqueta `<form>` desactiva la validación automática de HTML5 al enviar el formulario.
```html
   <form id="formulario" novalidate >
```
## Capturar valores
- Permite obtener los valores ingresados por el usuario en los campos del formulario.
- Generalmente se accede mediante la propiedad `value` del elemento HTML que representa un `input`, ya que esta contiene el dato introducido por el usuario.

### Por ID
:::tip
Usando la propiedad value del elemento 
:::
```js
const formulario = document.getElementById("formulario");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(userName.value);
    console.log(userEmail.value);
});

```
###  Por querySelector input
Con selectores CSS avanzados
```js
const formulario = document.querySelector("#formulario");
const userName = document.querySelector("input[name='userName']");
const userEmail = document.querySelector("input[name='userEmail']");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log(userName.value);
    console.log(userEmail.value);
});

```

## Validar con JS

```html
  <form id="formulario" novalidate>
        <input
            class="form-control mb-2"
            name="userName"
            placeholder="Ingrese su nombre"
            autocomplete="off"
            id="userName"
            type="text"
            value="ignacio"
        />
        <input
            class="form-control mb-2"
            name="userEmail"
            placeholder="Ingrese su correo"
            id="userEmail"
            autocomplete="off"
            type="email"
            value="ignacio@megusta.com"
        />
        <button class="btn btn-primary" type="submit">Enviar</button>
    </form>

```

```js
const formulario = document.getElementById("formulario");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
    // Si es false ....
    if (!regUserName.test(userName.value)) {
        return console.log("Solo letras");
    }
   // Si es false
    if (!regUserEmail.test(userEmail.value)) {
        return console.log("Formato email no válido");
    }

    console.log("Formulario enviado con éxito");
});

```

:::warning
Los formateadores de código pueden ocasionar problemas con las expresiones regulares, ya que pueden modificar o eliminar caracteres necesarios del patrón.
:::

:::tip
- `return` permite devolver un valor y finalizar la ejecución de una función o método.
:::


## Practica

```html
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Carrito Objeto</title>
        <link
            crossorigin="anonymous"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            rel="stylesheet"
        />
    </head>

    <body>
        <div class="container">
            <h1>Formularios</h1>

            <form id="formulario">
                <input
                    class="form-control mb-2"
                    name="userName"
                    placeholder="Ingrese su nombre"
                    autocomplete="off"
                    id="userName"
                    type="text"
                    value="ignacio"
                />

                <p class="text-danger mb-2 d-none" id="alertName"></p>

                <input
                    class="form-control mb-2"
                    name="userEmail"
                    placeholder="Ingrese su correo"
                    id="userEmail"
                    autocomplete="off"
                    type="email"
                    value="ignacio@megusta.com"
                />

                <p class="text-danger mb-2 d-none" id="alertEmail"></p>

                <button class="btn btn-primary" type="submit">Enviar</button>
            </form>
            <div
                class="alert alert-success mt-2 d-none"
                id="alertSuccess"
            ></div>
        </div>

        <script src="app.js"></script>
    </body>
</html>

```

```js
const formulario = document.getElementById("formulario");

const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");

const alertSuccess = document.getElementById("alertSuccess");
const alertName = document.getElementById("alertName");
const alertEmail = document.getElementById("alertEmail");

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

const pintarMensajeExito = () => {
    alertSuccess.classList.remove("d-none");
    alertSuccess.textContent = "Mensaje enviado con éxito";
};

const pintarMensajeError = (errores) => {
    errores.forEach((item) => {
        item.tipo.classList.remove("d-none");
        item.tipo.textContent = item.msg;
    });
};

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    alertSuccess.classList.add("d-none");
    const errores = [];

    // validar nombre
    if (!regUserName.test(userName.value) || !userName.value.trim()) {
        userName.classList.add("is-invalid");

        errores.push({
            tipo: alertName,
            msg: "Formato no válido campo nombre, solo letras",
        });
    } else {
        userName.classList.remove("is-invalid");
        userName.classList.add("is-valid");
        alertName.classList.add("d-none");
    }

    // validar email
    if (!regUserEmail.test(userEmail.value) || !userEmail.value.trim()) {
        userEmail.classList.add("is-invalid");

        errores.push({
            tipo: alertEmail,
            msg: "Escriba un correo válido",
        });
    } else {
        userEmail.classList.remove("is-invalid");
        userEmail.classList.add("is-valid");
        alertEmail.classList.add("d-none");
    }

    if (errores.length !== 0) {
        pintarMensajeError(errores);
        return;
    }

    console.log("Formulario enviado con éxito");
    pintarMensajeExito();
});

```

:::tip Validación de formularios
- Para validar un formulario, en lugar de usar múltiples `return` para detener la ejecución, es recomendable almacenar los errores en un array y luego comprobar si existen errores.
- El método `trim()` elimina los espacios en blanco al inicio y al final de una cadena.
- Si un usuario ingresa únicamente espacios, `trim()` devuelve una cadena vacía (`""`).
- La negación del resultado de `String.trim()` (`!String.trim()`) devuelve `true` cuando la cadena está vacía, por ejemplo, cuando el usuario solo ingresó espacios en blanco. Esto permite detectar que no se ingresó ningún valor.
:::


## FormData
- La interfaz `FormData` permite crear y manejar un conjunto de pares clave/valor que representan los campos de un formulario y sus valores, los cuales pueden ser enviados posteriormente mediante una petición HTTP.
- Está diseñada principalmente para trabajar con datos de formularios, aunque también puede utilizarse para almacenar y manipular datos manualmente.
- `FormData.get(clave)`: Permite obtener el valor asociado a la clave indicada mediante el parámetro `clave`.
- `FormData.entries()`: Permite obtener un iterador para recorrer todas las parejas clave/valor contenidas en el objeto `FormData`.
- `FormData.values()`: Permite obtener un iterador para recorrer todos los valores contenidos en el objeto `FormData`.


:::warning
- Usa el atributo name de los inputs , por lo tanto es obligatorio.
:::
```js
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    // Crea una instancia de FormData.
    // Recibe como primer parámetro del constructor un elemento <form>.
    // Devuelve un objeto FormData que contiene los datos del formulario,
    // utilizando el atributo name de cada campo como clave.
    const inputs = new FormData(formulario);
    console.log("Acceder a los valores a traves del atributo name con el metodo get")
    console.log(inputs.get("userName"));
    console.log(inputs.get("userEmail"));
    
    console.log("Permite recorrer todos los valores")
    for (let campo of inputs.values()) {
        console.log(campo);
    }
    console.log("Permite recorrer todas las parejas clave/valor")
    for (let campo of inputs.entries()) {
        console.log(campo);
    }
   console.log("Devuelve las parejas  clave-valor");
    for (let item of inputs) {
        console.log(item);
    }
});

```
:::tip
- Como  el constructor  FormData() [devuelve lo mismo que devuelve el metodo entries(X)](./basico3.md#entriesx) , se puede utilizar junto con el metodo [fromEntries(X)](./basico3.md#fromentriesx) para obtener los datos del formulario.

:::

## String.match() 
- Al igual que `test()`, el método `match()` ejecuta la búsqueda de una **expresión regular que se pasa como parámetro** sobre una cadena de texto. Es decir, busca el texto especificado en el patrón dentro del string y devuelve las coincidencias encontradas.
- Se diferencia de `test()`, ya que este devuelve un array con las coincidencias encontradas en el texto. Es decir, todas las partes del string que coinciden con lo que estamos buscando.
- Sintaxis:
```js
string.match(regexp)
```
- regexp : Un objeto de expresión regular (Lo que devuelve el constructor RegExp). Si se pasa un String (notación literal), se convierte implícitamente a RegExp usando new RegExp()

Ejemplo:

Todas las letras de A hasta E (mayúsculas y minúsculas) son devueltas, cada una en su propio elemento dentro del array.

```js

  var cadena = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var expresion = /[A-E]/gi;
var array_emparejamientos = cadena.match(expresion);
console.log(array_emparejamientos);

```


## RegExp.prototype.exec()
- `exec()` es similar a `match()` ya que permite ejecutar una búsqueda de una expresión regular en un **string que se pasa como parámetro**. Es decir, busca el texto especificado en el patrón dentro del string y devuelve las coincidencias encontradas.
- Sin embargo, a diferencia de `match()`, `exec()` devuelve información más detallada en cada coincidencia.
- Devuelve el resultado como array, o null.
```js
regexObj.exec(cadena)
```
- `cadena`: String sobre el cual se quiere aplicar la expresión regular. Es decir, el texto donde se buscarán coincidencias.



Ejemplo
```js
      // Busca "quick brown" seguido de "jumps", ignorando los caracteres que se
      // encuentren entre medias.
      // Recuerda "brown" y "jumps"
      // Ignora mayusculas y minusculas
      var re = /quick\s(brown).+?(jumps)/gi;
      var result = re.exec("The Quick Brown Fox Jumps Over The Lazy Dog");
      console.log(result);

```


#### `exec()` vs `match()`
#### 1- Origen del método
- `exec()` es un método del objeto RegExp
- `match()` es un método del objeto `String`
- Ejemplo:
```js
      const regex = /\d/;
      regex.exec("a1b2");
      "a1b2".match(/\d/);
```
#### 2- Tipo de resultado
- `exec()` devuelve un array con la coincidencia encontrada junto con información adicional.
- `match()` devuelve información detallada solo cuando no se usa la bandera `g` (global). Con `g`, `match()` devuelve únicamente un array con todas las coincidencias como strings.
- Ejemplo:
```js
// EXEC
// \d -> Cualquier número del 0 al 9
// (\d) -> Capturamos el número en un grupo

// SIN G
let regex = /(\d)/;
let result = regex.exec("a1b2");
console.log("EXEC SIN G");
console.log(result);

// CON G
regex = /(\d)/g;
result = regex.exec("a1b2");
console.log("EXEC CON G");
console.log(result);
console.log(regex.lastIndex);

// MATCH
// SIN G
result = "a1b2".match(/(\d)/);
console.log("MATCH SIN G");
console.log(result);

// CON G
result = "a1b2".match(/(\d)/g);
console.log("MATCH CON G");
console.log(result);
```

:::tip Observación

- `exec()` devuelve un array con índices adicionales:
  - índice 0: coincidencia encontrada 
  - índice 1 en adelante: valores capturados con paréntesis (grupos de captura)
  - `index`: posición dentro del string donde empieza la coincidencia
  - `input`: string original sobre el que se hizo la búsqueda
  - `groups`: grupos con nombre (si no existen, es `undefined`)
- `exec()` devuelve una sola coincidencia por llamada, incluso con `/g`:
  - La bandera `g` activa el uso de `lastIndex`, lo que permite recorrer todas las coincidencias en un bucle:
    - `lastIndex` es una propiedad del objeto `RegExp` (no del resultado de `exec()`), y define desde qué posición del string debe continuar la siguiente búsqueda.
  - No devuelve todas las coincidencias automáticamente.
- `match()` sin `g` devuelve un resultado similar a `exec()`.
- `match()` con `g` devuelve únicamente las coincidencias como strings, sin grupos ni metadata.
:::

:::tip Mas info
- [developer mozilla](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec#sintaxis)
- [test vs exec](https://www.tutorialspoint.com/difference-between-test-and-exec-methods-in-javascript)
:::

#### 3- Comportamiento con `g`
- Cada vez que se ejecuta `exec()`, se devuelve una coincidencia y se actualiza `lastIndex` con la posición desde donde debe continuar la siguiente búsqueda:
    - En el ejemplo anterior, el string es `"a1b2"`. Cuando `exec()` se ejecuta por primera vez, `lastIndex` pasa a valer `2`, ya que esa es la posición desde donde continuará la siguiente búsqueda. De este modo, en la próxima ejecución la búsqueda comienza desde `"b2"` (conceptualmente, como si se hiciera `"a1b2".substring(lastIndex)`) y no desde el string completo.
    - Cada vez que se ejecuta `exec()` con la bandera `g`, se obtiene la siguiente coincidencia.
- `match()` con `g` devuelve todas las coincidencias de una sola vez.
- Ejemplo:
```js
const regex = /\d/g;
// EXEC
console.log(regex.exec("a1b2") , regex.lastIndex); // "2"
console.log(regex.exec("a1b2") , regex.lastIndex); // "4"
console.log(regex.exec("a1b2") , regex.lastIndex); // null
// MATCH
console.log("a1b2".match(/\d/g));
```
:::tip Observación
- En `exec()`:
  - La primera vez que se ejecuta, se obtiene la primera coincidencia (`"1"`) y `lastIndex` pasa a valer `2`, ya que la siguiente búsqueda continuará desde la posición `2` del string. Es decir, la búsqueda continuará desde `"b2"`.
  - La segunda vez que se ejecuta, se obtiene la segunda coincidencia (`"2"`) y `lastIndex` pasa a valer `4`, ya que la siguiente búsqueda continuará desde la posición `4` del string. En esa posición ya no quedan caracteres para seguir buscando.
  - La tercera vez, `exec()` devuelve `null` porque ya no quedan coincidencias. Como la búsqueda terminó de recorrer todo el string, `lastIndex` vuelve automáticamente a `0`.
- En `match()` con `g`, se devuelve directamente un array con todas las coincidencias como strings.
:::

##### Resumen


| Característica | `exec()` | `match()` |
|---|---|---|
| Origen del método | Método de `RegExp` | Método de `String` |
| Sintaxis | `regex.exec(str)` | `str.match(regex)` |
| Tipo de resultado | Devuelve una coincidencia por llamada junto con información adicional | Depende de si se usa `g` |
| Sin `g` | Devuelve match + metadata | Similar a `exec()` |
| Con `g` | Sigue devolviendo una coincidencia por llamada | Devuelve todas las coincidencias como strings |
| Grupos de captura | ✔ Disponibles | ❌ Se pierden con `g` |
| `index` | ✔ Disponible | ❌ No disponible con `g` |
| `input` | ✔ Disponible | ❌ No disponible con `g` |
| `groups` | ✔ Disponible | ❌ No disponible con `g` |
| `lastIndex` | ✔ Usa `lastIndex` con `g` | ❌ No usa `lastIndex` |
| Estado | Stateful (mantiene estado con `g`) | Stateless |
| Uso típico | Parsing, iteración y extracción detallada | Búsquedas rápidas y simples |


