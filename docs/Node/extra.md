---
sidebar_position: 8
---
# Extra
## Buffer
- Es una tira de bytes (datos binarios)
- Similar a un array de enteros donde cada posición es un byte.
- Tiene un tamaño fijo
- Los buffers son los Arrays en el backend.
- Dentro de estos arreglos podemos enviar/recibir información.

Un búfer es un espacio en la memoria (típicamente RAM) que almacena datos binarios. En Node.js , podemos acceder a estos espacios de memoria con la clase integrada Buffer. Los búferes almacenan una secuencia de enteros, similar a una Array en JavaScript . A diferencia de las Arrays, no puede cambiar el tamaño de un búfer una vez que se crea.


- Dentro de un buffer podemos manipular diferentes objetos:
   -	Sockets : Te permite la comulación bidireccional para hacer apps en tiempo real.
   -	Streams : Te permite enviar información . Un archivo del SO se manipula con streams.
   -	Implementar protocolos complejos : HTTP , HTTPS , HTTP , SSH , SMTP , POP , ETC.
   -	Manipulación de ficheros/imágenes
   -	Criptografía.

- En Node Buffer es una [clase global](https://fedeleva.github.io/documentacion/docs/Javascript/basico4#objeto-global)

#### Alloc()
- Para crear un nuevo búfer, usamos la clase Buffer disponible globalmente, que tiene el método alloc().
- Un buffer se inicializa con el método alloc().

```js
//  El metodo alloc() especifica el tamaño del bufer.
// El tamaño es un número entero que representa cuántos bytes de memoria utilizara el objeto Buffer.
var buf = Buffer.alloc(100);
var buf2 = Buffer.alloc(100);

```
#### Write()
- El buffer tiene el método write() que sirve para cambiar o añadir contenido en este.
- Si quisiéramos cambiar el contenido de todo el búfer, podemos usar el método write(). 
- El método write() acepta una cadena(String) que es lo que va a almacenar.
Aparte del String, acepta tres argumentos mas.
- [Buscar en la documentación mas información sobre los tres argumentos](https://nodejs.org/dist/latest-v18.x/docs/api/buffer.html)

```js
buf.write("abcd");
console.log(buf);

```
:::tip Observación
Como se puede ver, el String está en formato binario.

:::
-  El objeto de búfer viene con los métodos toString() y los toJSON(), que devuelven todo el contenido de un búfer en dos formatos diferentes.
- Tenemos el método ToString, que convierte el “formato binario” en String. 
- [Buscar en la documentación el metodo toString()](https://nodejs.org/dist/latest-v18.x/docs/api/buffer.html )
- Como sugiere su nombre, el método toString() convierte los bytes del búfer en una cadena y se los devuelve al usuario.

```js

buf.write("abcd");
console.log(buf.toString());

```
#### Lenght
```js
var str = "\u00bd + \u00bc =  \u00be";

console.log(str, str.length);

```
:::tip Observación
- El lenght es de 9, el código ASCII es un solo carácter. 
:::
#### byteLenght
- La clase buffer tiene el método byteLenght , que devuelve la longitud en byte de una cadena cuando se codifica.
- Sirve para verificar el tamaño del bufer.
- El primer parámetro recibe un String (u otro valor) y el segundo una codificación de caracteres.
- [Buscar en la documentación el metodo byteLenght()](https://nodejs.org/dist/latest-v18.x/docs/api/buffer.html )

```js

var str = "\u00bd + \u00bc =  \u00be";

console.log(str, str.length);
console.log(Buffer.byteLength(str, "utf8"));

```
:::tip Observación
El String ocupa 13 bytes en utf8
:::


:::tip
- Lenght : Devuelve la cantidad de caracteres
- ByteLenght: Devuelve la cantidad de bytes que se utilizo para almacenar el String.


:::

#### Ejemplo
Abecedario en código ASCII


```js
var buf2 = Buffer.alloc(26);

for (let i = 0; i < buf2.length; i++) {
  buf2[i] = i + 97;
}
console.log(buf2.toString("ascii"));

```

### Paso a Paso
#### 1- Crear un bufer
Si va a almacenar datos (que aún no ha recibido) en la memoria, querrá crear un nuevo búfer. En Node.js usamos la función  alloc() de la  clase Buffer  para hacer esto.

La función  alloc() toma el tamaño del búfer como su primer y único argumento requerido. El tamaño es un número entero que representa cuántos bytes de memoria utilizará el objeto búfer. Por ejemplo, si quisiéramos crear un búfer de 1 KB (kilobyte) de tamaño, equivalente a 1024 bytes, ingresaríamos esto:

```js
const firstBuf = Buffer.alloc(1024);
```

De forma predeterminada, cuando inicializa un búfer con alloc(), el búfer se llena con ceros binarios como marcador de posición para datos posteriores. Sin embargo, podemos cambiar el valor predeterminado si lo deseamos. Si quisiéramos crear un nuevo búfer con 1 en lugar de 0, usaríamos el segundo parámetro de la funcion  alloc().

El segundo parámetro sirve para cambiar el valor predeterminado de cada byte.


```js
const filledBuf = Buffer.alloc(1024, 1);
```

Los datos binarios pueden venir en muchos formatos diferentes. Por ejemplo, consideremos una secuencia binaria que representa un byte de datos: 01110110. Si esta secuencia binaria usara el estándar de codificación ASCII , sería la letra v. Sin embargo, si nuestra computadora estuviera procesando una imagen, esa secuencia binaria podría contener información sobre el color de un píxel.

La computadora sabe procesarlos de manera diferente porque los bytes están codificados de manera diferente.

Un búfer en Node.js usa el esquema de codificación UTF-8 de forma predeterminada si se inicializa con datos de cadena. Un byte en UTF-8 representa un número, una letra (en inglés y en otros idiomas) o un símbolo.

UTF-8 es un superconjunto de ASCII.

ASCII puede codificar bytes con letras mayúsculas y minúsculas en inglés, los números 0-9 y algunos otros símbolos como el signo  "!"  o el signo   "&".

Si estuviéramos escribiendo un programa que solo pudiera funcionar con caracteres ASCII, podríamos cambiar la codificación utilizada por nuestro búfer con el tercer argumento de  alloc().

Vamos a crear un nuevo búfer que tenga cinco bytes y almacene solo caracteres ASCII:
```js
const asciiBuf = Buffer.alloc(5, "a", "ascii");
```

:::tip Observación
El búfer se inicializa con cinco bytes del carácter a, utilizando la representación ASCII.

:::

:::tip
##### De forma predeterminada, Node.js admite las siguientes codificaciones de caracteres:
   -	ASCII , representado como “ascii”
   -	UTF-8 , representado como “utf-8” o “utf8”
   -	UTF-16 , representado como “utf-16le” o “utf16le”
   -	UCS-2 , representado como “ucs-2” o “ucs2”
   -	Base64 , representado como “base64”
   -	Hexadecimal , representado como “hex”
   -	ISO/IEC 8859-1 , representado como “latin1” o “binary”

:::

Hasta ahora hemos estado creando nuevos búferes con la función alloc(). Pero a veces es posible que deseemos crear un búfer a partir de datos que ya existen, como una cadena o una matriz.

- Para crear un búfer a partir de datos preexistentes, usamos el método from(). Podemos usar esa función para crear buffers desde:
   -	Una matriz de enteros: los valores enteros pueden estar entre 0 y 255.
   -	Un ArrayBuffer: Este es un objeto de JavaScript que almacena una longitud fija de bytes.
   -	Un string
   -	Otro Buffer.
   -	Otros objetos de JavaScript que tienen una propiedad  Symbol.toPrimitive. Esa propiedad le dice a JavaScript cómo convertir el objeto a un tipo de datos primitivo: boolean, null, undefined, number, String o symbol. 



Veamos cómo podemos crear un búfer a partir de una cadena. En  Node.js, ingrese esto:
```js
const stringBuf = Buffer.from("My name is Paul");
```

Vamos a crear un nuevo búfer a partir de otro búfer que hicimos antes:

```js
const stringBuf = Buffer.from("My name is Paul");
const asciiCopy = Buffer.from(stringBuf);


```

#### 2- Lectura de un bufer

Hay muchas formas de acceder a los datos en un búfer. Podemos acceder a un byte individual en un búfer o podemos extraer todo el contenido.

Para acceder a un byte de un búfer, pasamos el índice o ubicación del byte que queremos. Los búferes almacenan datos secuencialmente como arrays. También indexan sus datos como arrays, comenzando en 0. Podemos usar la notación de matriz en el objeto de búfer para obtener un byte individual.

Leemos el primer byte del bufer:
```js
const hiBuf = Buffer.from("Hi!");
console.log(hiBuf[0]);

```
:::tip Observación
- Por consola se muestra “72”
- El entero 72 corresponde a la representación UTF-8 de la letra H.


:::

Hagamos lo mismo para el segundo byte
```js
const hiBuf = Buffer.from("Hi!");
console.log(hiBuf[1]);

```

:::tip Observación
- El entero 105 representa la minúscula i.


:::

Accedemos a un “byte inexistente”
```js
const hiBuf = Buffer.from("Hi!");
console.log(hiBuf[3]);

```
:::tip Observación
- Devolvera undefined

:::

Ahora que hemos visto cómo leer bytes individuales de un búfer, veamos nuestras opciones para recuperar todos los datos almacenados en un búfer a la vez. El objeto de búfer viene con los métodos toString() y toJSON(), que devuelven todo el contenido de un búfer en dos formatos diferentes.

Como sugiere su nombre, el método  toString() convierte los bytes del búfer en una cadena(String) y se los devuelve al usuario. Si usamos este método en hiBuf, obtendremos la cadena Hi!

```js
const hiBuf = Buffer.from("Hi!");
console.log(hiBuf.toString());

```

Ese búfer se creó a partir de una cadena (string). Veamos qué sucede si usamos el toString() en un búfer que no se creó de una  cadena.

```js
const tenZeroes = Buffer.alloc(10);
console.log(tenZeroes);
console.log(tenZeroes.toString());

```
:::tip Observación
- Puede no aparecer nada o una cadena como “\u0000” que representa null o el valor 0.
:::

Tiene un parámetro opcional toString(). Podemos usar este parámetro para cambiar la [codificación de los datos](#de-forma-predeterminada-nodejs-admite-las-siguientes-codificaciones-de-caracteres) del búfer.


```js
const hiBuf = Buffer.from("Hi!");
console.log(hiBuf.toString("hex"));

```
:::tip Observación
- Devuelve 486921
- 486921 es la representación hexadecimal de los bytes que representan la cadena Hi!
:::

El método  toJSON() se comporta de manera diferente. Independientemente de si el búfer se creó a partir de una cadena o no, siempre devuelve los datos como la representación entera del byte.

```js
const hiBuf = Buffer.from("Hi!");
console.log(hiBuf.toJSON());

```

El objeto JSON tiene una propiedad type que siempre será Buffer. Eso es para que los programas puedan distinguir estos objetos JSON de otros objetos JSON.

La propiedad data contiene una matriz de la representación entera de los bytes. Es posible que haya notado que 72, 105 y 33 corresponden a los valores que recibimos cuando extrajimos los bytes individualmente.


#### 3- Modificar un bufer

Hay muchas formas de modificar un objeto de búfer existente. Similar a la lectura, podemos modificar los bytes del búfer individualmente usando la sintaxis de matriz. También podemos escribir nuevos contenidos en un búfer, reemplazando los datos existentes.

Comencemos por ver cómo podemos cambiar bytes individuales de un búfer. Recuerde nuestra variable de búfer hiBuf, que contiene la cadena Hi!. Cambiemos cada byte para que contenga Hey en su lugar.

```js
const hiBuf = Buffer.from("Hi!");
hiBuf[1] = "e";
console.log(hiBuf.toString());

```
Recibimos un resultado extraño (“\u0000”) o se omitirá de la cadena el byte que hemos modificado en la consola.

Esto sucede porque el búfer solo puede aceptar un valor entero. No podemos asignarle la letra e; más bien, tenemos que asignarle el número cuyo equivalente binario representa e:


```js
const hiBuf = Buffer.from("Hi!");
hiBuf[1] = 101;
console.log(hiBuf.toString());

```

Para cambiar el último carácter en el búfer, debemos establecer el tercer elemento en el número entero que corresponde al byte para y:
```js

const hiBuf = Buffer.from("Hi!");
hiBuf[1] = 101;
hiBuf[2] = 121;
console.log(hiBuf.toString());

```

Si tratamos de escribir un byte que está fuera del rango del búfer, será ignorado y el contenido del búfer no cambiará. Por ejemplo, intentemos establecer el cuarto elemento inexistente del búfer en o:
```js
const hiBuf = Buffer.from("Hi!");
hiBuf[1] = 101;
hiBuf[2] = 121;
hiBuf[3] = 111;
console.log(hiBuf.toString());

```

Si quisiéramos cambiar el contenido de todo el búfer, podemos usar el método write(). El método  write() acepta una cadena que reemplazará el contenido actual del búfer.

```js
const hiBuf = Buffer.from("Hey");
console.log(hiBuf.write("Hi!"));
console.log(hiBuf.toString());

```

:::tip Observación
- El método write devuelve 3.
- Esto se debe a que escribió tres bytes de datos. Cada letra tiene un byte de tamaño, ya que este búfer utiliza la codificación UTF-8, que utiliza un byte para cada carácter. 
- Si el búfer hubiera utilizado la codificación UTF-16, que tiene un mínimo de dos bytes por carácter, la write()función habría devuelto 6.
:::

Conclusión, el método write devuelve la cantidad de bytes que se utilizo para almacenar el contenido que se especificó.

Si intenta escribir más bytes que el tamaño de un búfer, el objeto del búfer solo aceptará los bytes que quepan. Para ilustrar, vamos a crear un búfer que almacene tres bytes:


```js
const petBuf = Buffer.alloc(3);
petBuf.write("Cats");
console.log(petBuf.toString());

```
:::tip Observación
- Muestra ‘Cat’ por consola
- La función  write() agrega los bytes en orden secuencial, por lo que solo los primeros tres bytes se colocaron en el búfer.


:::

Por lo contrario : Si añadimos información que ocupe menos byte de los que se especificó en el buffer.


```js
const petBuf2 = Buffer.alloc(4);
petBuf2.write("Cats");
petBuf2.write("Hi");
console.log(petBuf2.toString());

```
:::tip Observación
- Se muestra por consola Hits
- Los dos primeros caracteres se sobrescriben, pero el resto del búfer permanece intacto.
:::


A veces, los datos que queremos en nuestro búfer preexistente no están en una cadena, sino que residen en otro objeto búfer. En estos casos, podemos usar la función copy() para modificar lo que está almacenando nuestro búfer.

Ejemplo

```js
const wordsBuf = Buffer.from("Banana Nananana");
const catchphraseBuf = Buffer.from("Not sure Turtle!");

```

Los búferes wordsBufy catchphraseBuf contienen datos de cadena. Queremos modificar catchphraseBuf para que almacene Nananana Turtle! en lugar de Not sure Turtle!

Para copiar datos de un búfer a otro, usaremos el método copy() en el búfer que es la fuente de la información que se va a utilizar en otro bufer. Por lo tanto, necesitamos copiar así:

```js
console.log(wordsBuf.copy(catchphraseBuf));
```

:::tip Observación
- El parámetro es el bufer catchphraseBuf.
- El parámetro es el buffer destino, especifica en donde se va a recortar/copiar la información de este bufer.
- Devuelve la cantidad de bytes que se ocuparon para copiar el contenido.
:::

En la consola se muestra el número 15 y la cadena Nananana solo usa 8 bytes de datos, por lo que sabemos de inmediato que nuestra copia no salió como se esperaba.

Si mostramos el contenido del buffer

```js
console.log(catchphraseBuf.toString());
```

De forma predeterminada, copy() tomó todo el contenido de wordsBuf y lo colocó en catchphraseBuf. Necesitamos ser más selectivos para nuestro objetivo y solo copiar Nananana.

- La función  copy() tiene algunos parámetros más que nos permiten personalizar qué datos se copian en el otro búfer. Aquí hay una lista de todos los parámetros de esta función:
   -	target- Este es el único parámetro requerido de copy(). Como hemos visto en nuestro uso anterior, es el búfer al que queremos copiar.
   -	targetStart- Este es el índice de los bytes en el búfer de destino donde deberíamos comenzar a copiar. De forma predeterminada, es 0, lo que significa que copia los datos desde el principio del búfer.
   -	sourceStart- Este es el índice de los bytes en el búfer de origen desde donde debemos copiar.
   -	sourceEnd- Este es el índice de los bytes en el búfer de origen donde debemos dejar de copiar. De forma predeterminada, es la longitud del búfer.

Entonces, para copiar Nananana desde wordsBuf hacia catchphraseBuf, target debería ser catchphraseBuf como antes. El targetStart sería 0 como queremos que Nananana aparezca al principio de catchphraseBuf. El sourceStart debería ser 7 ya que ese es el índice donde Nananana comienza en wordsBuf. Continuaría sourceEnd siendo la longitud de los búferes.

```js
const wordsBuf = Buffer.from("Banana Nananana");
const catchphraseBuf = Buffer.from("Not sure Turtle!");
console.log(wordsBuf.copy(catchphraseBuf, 0, 7, wordsBuf.length));
console.log(catchphraseBuf.toString());

```

¡Éxito! Pudimos modificar los datos de catchphraseBuf copiando el contenido de wordsBuf.


:::tip info
- [Using Buffers in Node.js](https://www.digitalocean.com/community/tutorials/using-buffers-in-node-js)
- [Node.js buffer: A complete guide](https://blog.logrocket.com/node-js-buffer-complete-guide/)
- [Understanding Buffers in Node.js](https://www.makeuseof.com/nodejs-buffers-understanding/)
:::


## Streams

- Es un “chorro” (Streams) de información que se transmiten en “Pedazos” (Chunks).
- 4 Tipos de streams:
  -	Lectura
  -	Escritura
  -	Duplex (Lectura y Escritura)
  -	Transform: Pueden modificar o transformar los datos a medidas que se escriben o leen.
- Todos los streams son instancias de EventEmitter
- [Documentación](https://nodejs.org/dist/latest-v18.x/docs/api/stream.html)
- Un stream es una interfaz abstracta implementada por varios objetos de Node.
- HTTP SERVER es un stream: Es un chorro de información que va a través del protocolo HTTP y llega a nuestro navegador.
- Los streams se pueden leer, escribir o ambos.

#### Ejemplo
- Vamos a usar el modulo [File System](https://nodejs.org/dist/latest-v18.x/docs/api/fs.html#file-system) 

Creamos un archivo nombres.txt con nombres 

```js
Alma
Brayan
…
```

El método pipe te permite abrir el proceso de lectura/escritura.

Entonces es como que abre una “tubería” con el stream que recibe.

Sirve para enviar los datos a una stream writable.


```js
const fs = require("fs");
// Creamos un stream de Lectura con la información que contiene el archivo que especificamos (nombres.txt)
const readStream = fs.createReadStream("./nombres.txt");

// Creamos un stream de escritura , y todo lo que vamos a "escribir" se va a añadir en el archivo que especificamos(nombres_copia.txt)
const writeStream = fs.createWriteStream("./nombres_copia.txt");

readStream.pipe(writeStream);

```

Al ejecutarse , se crea el archivo nombres_copia.txt.

Si abrimos el archivo , el contenido es idéntico al nombres.txt


#### EventEmitter
- Nos permite manejar “eventos”
- El evento “data” se activa cuando se empieza a recibir datos y recibe los chunks (pedazos de información)
- En lugar de usar addEventListener() usamos on()

```js
const fs = require("fs");
// Creamos un stream de Lectura con la información que contiene el archivo que especificamos (nombres.txt)
const readStream = fs.createReadStream("./nombres.txt");

// Creamos un stream de escritura , y todo lo que vamos a "modificar" se va a añadir en el archivo que especificamos(nombres_copia.txt)
const writeStream = fs.createWriteStream("./nombres_copia.txt");

readStream.pipe(writeStream);
readStream.on("data", function (chunk) {
  console.log("Ha leido", chunk.length, "Caracteres");
});

```
:::tip Observación
- El evento te dice cuantos “caracteres” tiene el blog de nota.
- La propiedad lenght es como "acumulativa"
:::

- El evento end se activa cuando se deja de leer información.

```js
const fs = require("fs");
// Creamos un stream de Lectura con la información que contiene el archivo que especificamos (nombres.txt)
const readStream = fs.createReadStream("./nombres.txt");

// Creamos un stream de escritura , y todo lo que vamos a "modificar" se va a añadir en el archivo que especificamos(nombres_copia.txt)
const writeStream = fs.createWriteStream("./nombres_copia.txt");

readStream.pipe(writeStream);
readStream.on("data", function (chunk) {
  console.log("Ha leido", chunk.length, "Caracteres");
});
readStream.on("end", function () {
  console.log("Termine de leer el archivo");
});

```
- Los dos eventos y el método pipe se puede hacer de esta manera:

```js
const fs = require("fs");
// Creamos un stream de Lectura con la información que contiene el archivo que especificamos (nombres.txt)
const readStream = fs.createReadStream("./nombres.txt");

// Creamos un stream de escritura , y todo lo que vamos a "modificar" se va a añadir en el archivo que especificamos(nombres_copia.txt)
const writeStream = fs.createWriteStream("./nombres_copia.txt");

readStream.pipe(writeStream);
readStream
  .on("data", function (chunk) {
    console.log("Ha leido", chunk.length, "Caracteres");
  })
  .on("end", function () {
    console.log("Termine de leer el archivo");
  });

```
### Teoría
#### ¿Qué son exactamente los flujos(steams)?

Los flujos son colecciones de datos, como las matrices o las cadenas de texto. La diferencia es que estos pueden no estar disponibles todos a la vez y no tienen por qué caber en la memoria.

Esto hace que sean realmente potentes cuando se trabaja con grandes cantidades de datos, o con datos que vienen de una fuente externa de uno en uno.

Sin embargo, los flujos no sólo sirven para trabajar con grandes cantidades de datos. También nos ofrecen la posibilidad de componer nuestro código. Al igual que podemos componer poderosos comandos de Linux mediante la canalización de otros comandos más pequeños, podemos hacer exactamente lo mismo en Node con los flujos.

Los flujos son métodos utilizados para manejar archivos de escritura/lectura, comunicaciones de red o cualquier tipo de intercambio de información de extremo a extremo de manera eficiente.

Con las transmisiones, los datos se pueden intercambiar en partes pequeñas, lo que reduce mucho el uso de la memoria.
A diferencia de la forma tradicional de leer todos los archivos en la memoria de un programa a la vez antes de procesar su contenido, lo que puede ser un problema si no hay suficiente espacio de memoria para contener los archivos.

Sin embargo, Streams, por otro lado, no guarda todos los archivos en la memoria a la vez antes de procesar el contenido, lee fragmentos de datos y procesa el contenido del archivo pieza por pieza. 

Este patrón de dividir archivos en fragmentos de datos se convierte en una ventaja para nosotros cuando trabajamos con grandes cantidades de datos porque ya no tenemos que preocuparnos de que el espacio de memoria sea suficiente para contener los archivos.

#### Ejemplo Youtube
Youtube ofrece servicios de transmisión, con este servicio no necesita descargar los videos o las transmisiones de audio de una sola vez, pero puede ver los videos o escuchar el audio de inmediato, esto es posible porque su navegador puede recibir los videos y audio como un flujo continuo de fragmentos.

#### ¿Por qué son importantes los streams?

- Tiene cuatro importancia principal sobre el uso de otros métodos de manipulación de datos e incluyen:
   -	Eficiencia de la memoria : con los streams, no necesita cargar grandes cantidades de datos en la memoria antes de poder procesarlos.
   -	Eficiencia temporal : con flujos, el procesamiento de datos lleva menos tiempo. No tiene que esperar hasta que toda la carga útil de datos esté disponible. Puede comenzar a procesarlo tan pronto como lo tenga.
   -	Función de compatibilidad: con la función de compatibilidad de transmisión, podemos crear microservicios en node.js. Con composability, podemos realizar aplicaciones complejas que interactúan y se interconectan con datos entre diferentes piezas de código.
   -	Utilizado en la creación de aplicaciones: con transmisiones, podemos crear aplicaciones del mundo real, como aplicaciones de transmisión de video.


#### Ejemplo básico

```js
const http = require("http");
const fs = require("fs");
const server = http.createServer(function (req, res) {
  fs.readFile("./nombres.txt", (err, data) => {
    res.end(data);
  });
});
server.listen(3000);

```

:::tip Observación
- readFile() : Lee todo el contenido del archivo (primer parámetro) y cuando termina , invoca la función (segundo parámetro)
- res.end(data) : Devolverá el contenido del archivo como respuesta al cliente HTTP.


:::

El uso del método anterior hará que nuestra operación tome tiempo si los archivos son grandes. Entonces, para mitigar el problema, escribamos el mismo código usando un método de transmisión.


```js
const http = require("http");
const fs = require("fs");
const server = http.createServer(function (req, res) {
  const stream = fs.createReadStream("./nombres.txt");
  stream.pipe(res);
});
server.listen(3000);

```

Ahora puede ver que tenemos más control, comenzamos a "transmitir" los archivos al cliente HTTP tan pronto como tengamos fragmentos de datos listos para enviar. Esto es mejor, especialmente si tenemos un archivo grande, no tenemos que esperar hasta que el archivo se lea por completo.


#### Tipos de flujos en Node.js

-	Readable stream: Son flujos de los que podemos leer datos. Nos permite recibir datos, pero no enviar datos. Esto también se conoce como tubería. Los datos que se envían a un flujo de lectura se almacenan en búfer hasta que un consumidor comienza a leer los datos. El uso de fs.createReadStream() nos permite leer el contenido de un archivo.
-	Writable stream: Son flujos desde los que podemos escribir datos. nos permite enviar datos, pero no recibir datos de ella. El fs.createWriteStream() nos permite escribir datos en un archivo.
-	Duplex: estos son flujos que se componen de flujos de lectura(readable) y escritura(writable).
-	Transform: un flujo de transformación es similar a un flujo dúplex, pero llevan a cabo la transformación de datos a medida que se escriben y también cuando se leen.


### Pipe()

Es un método que vimos en el ejemplo anterior.

El método readable.pipe() en un flujo de lectura se usa para adjuntar un flujo de escritura al flujo de lectura para que, en consecuencia, cambie al modo de flujo y luego envíe todos los datos que tiene al stream writable.
- Este método acepta dos parámetros como se mencionó anteriormente y se describe a continuación:
  -	stream: este parámetro contiene el  stream writable
  -	opciones: este parámetro contiene las opciones de tubería.


El método pipe se agregó en v0.9.4 de Node.js y su propósito es adjuntar un stream  writable a un stream readable  para que se permita pasar los datos del stream readable al stream writable.


Es una tubería


![Tuberia](https://res.cloudinary.com/practicaldev/image/fetch/s--5qpMcc3b--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://i1.wp.com/www.becomebetterprogrammer.com/wp-content/uploads/2021/09/example-piping-a-readable-to-writeable-stream.png%3Fresize%3D640%252C360%26ssl%3D1)

El método pipe sirve para conectar las dos tuberías (Stream) y permitir que el agua (los datos) fluyan de una tubería a otra.

Este método solo lo contiene los streams readable.	

El destino de una tubería es el stream writable 


#### Dos modos de lecturas


- Los streams readable funcionan efectivamente en uno de dos modos: fluido y en pausa:
   -	En el modo de flujo, los datos se leen automáticamente desde el sistema y se envían rápidamente a una aplicación. Esto se hace a través de eventos (EventEmitter), que son como señales que se envían cuando hay nuevos datos disponibles.
   -	En el modo de pausa , el  método  stream.read() debe llamarse explícitamente para leer fragmentos de datos de la secuencia.
- Una  stream readable puede estar en modo de objeto o no, independientemente de si está en modo de flujo o en modo de pausa.
- En modo objeto, el stream devuelve "cosas" o "entidades" individuales en forma de objeto, en lugar de una corriente de bytes sin procesar. Esto hace que sea más fácil trabajar con los datos, ya que puedes tratar cada objeto individualmente, en lugar de tener que procesar toda la corriente de datos de una vez.
- Todas las transmisiones Readable  comienzan en modo de pausa (las tuberías no fluyen , no se conectan) , pero se pueden cambiar al modo de flujo (que fluyan las tuberías) de una de las siguientes maneras:
   -	Agregar un controlador de eventos de 'datos'.
   -	Llamando al método  stream.resume().
   -	Llamar al método stream.pipe() para enviar los datos a un Writable.
- El Readable puede volver al modo de pausa usando uno de los siguientes:
   -	Si no hay destinos de tubería, llame al método stream.pause().
   -	Si hay destinos de tubería, eliminando todos los destinos de tubería. Se pueden eliminar varios destinos de tubería llamando al método stream.unpipe()


:::tip info
- [Node.js Stream readable.pipe() Method](https://www.geeksforgeeks.org/node-js-stream-readable-pipe-method/)
- [What Does .pipe Mean in Node.js? How To Use It? Practical Guide](https://dev.to/arealesramirez/what-does-pipe-mean-in-node-js-how-to-use-it-practical-guide-4kmn)
:::

### Pipeline()

- Los problemas de pipe():
   -	No se destruye la fuente de información: Si el destino de la tubería (el receptor de los datos) emite un cierre o un error, la fuente de información (el emisor de los datos) no se destruirá automáticamente. Esto significa que la fuente de información seguirá emitiendo datos, aunque el destino ya no esté disponible para recibirlos.
   -	No hay devolución de llamada para saber cuando finaliza la tubería: Cuando se utiliza pipe(), no hay una forma built-in de saber cuando se han pasado todos los datos y la tubería ha finalizado. Esto puede ser un problema si necesitas realizar alguna acción después de que se haya completado la transferencia de datos.
- Para solucionar estos problema, se creo el método pipeline() que se introdujo en Nodejs 10.x.
- Con este método logramos que la salida de un stream sea la entrada de otro stream.
- Normalmente se usa para obtener datos de un  stream y pasar la salida de ese  stream a otro stream.
- Si lo comparamos con la foto de pipe() este método nos permite conectar tuberías (como pipe) y al mismo tiempo gestionar si hubo un problema o si el agua llego al “destino”.


El ejemplo que hicimos con pipe, lo podemos adaptar con pipeline


```js
const { pipeline } = require("stream");
const fs = require("fs");
const readStream = fs.createReadStream("./nombres.txt");
const writeStream = fs.createWriteStream("./nombres_copia.txt");

pipeline(readStream, writeStream, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Se finalizo la tuberia , los datos se pasaron");
  }
});

```

Basicamente el método recibe los streams que quieras (…streams) y el ultimo parámetro es una funcion que se invocara al terminar la tubería o cuando hay un error en el destino.

:::tip info
- [Use pipeline instead of pipe](https://dev.to/yenyih/use-pipeline-instead-of-pipe-4gl3)

:::


:::tip info
- [Streams en NodeJS](https://desarrolloweb.com/articulos/streams-nodejs.html)
- [Understanding Streams in Node.js](https://nodesource.com/blog/understanding-streams-in-nodejs/)
- [Node.js Streams: Todo lo que necesitas saber](https://www.freecodecamp.org/espanol/news/node-js-streams-todo-lo-que-necesitas-saber/)
- [How To Use Streams in Node.js](https://betterprogramming.pub/how-to-use-streams-in-node-js-ad1b73409d37)
- [How to use Streams in Node.js](https://masteringbackend.com/posts/how-to-use-streams-in-node-js)
- [The Definitive Guide to Object Streams in Node.js](https://blog.risingstack.com/the-definitive-guide-to-object-streams-in-node-js/)
::::

## EventEmitter
- Si trabajó con JavaScript en el navegador, sabe que  la interacción del usuario se maneja a través de eventos: clics del mouse, pulsaciones de botones del teclado, reacciones a los movimientos del mouse, etc.
- En el lado del backend, Node.js nos ofrece la opción de construir un sistema similar usando el módulo events .
- Este módulo, en particular, ofrece la clase EventEmitter, que usaremos para manejar nuestros eventos.
- Una instancia de EventEmitter expone, entre muchos otros, los métodos on y emit.
   -	Emit se utiliza para desencadenar un evento
   -	On se usa para agregar una función que se ejecutará cuando se active el evento
- Nos permiten ejecutar cierto código al ejecutar un evento.
- [Documentación](https://nodejs.org/dist/latest-v18.x/docs/api/events.html)


#### 1- Instancia
- EventEmitter es una clase que se crea con Events

```js

const events = require("events");
const emitter = new events.EventEmitter();

```

#### 2- Creamos un evento
- Para esto utilizamos el método on(nombre , listener)
   - Nombre :  Nombre del evento
   - Listener : Es una funcion que se va a ejecutar cuando se active el nombre del evento.
- El listener puede tener los parámetros que vos quieras.

```js
emitter.on("eventCustom", (mensaje, status) => {
  console.log(mensaje, status);
});

```
#### 3- Llamamos al evento
- Para esto utilizamos el método emit(nombre, argumentos….)
    - Nombre: Es el nombre del evento que vamos a activar.
    - Argumentos…: Son los valores que va a recibir el listener (a través de los parámetros) de on().
- Entonces al llamar emit() se ejecutara la funcion listener de on() del nombre-evento que  especificamos.
- Los parámetros de la funcion listener y los argumentos…. deben coincidir.

```js
emitter.emit("eventCustom", "Mensaje", 200);
```

#### Ejemplo completo

```js
const events = require("events");
const emitter = new events.EventEmitter();

emitter.on("eventCustom", (mensaje, status) => {
  console.log(mensaje, status);
});
emitter.emit("eventCustom", "Mensaje", 200);

```

#### Heredar
- Podemos hacer que se herede de otra clase.


#### Código viejo 

- Utilizamos las [utilidades de Node]( https://nodejs.org/dist/latest-v18.x/docs/api/util.html)
- No se suele utilizar

```js
const emitter = require("events").EventEmitter;
const util = require("util");
class Persona {
  // funcion constructora de Persona()
  constructor(nombre) {
    this.nombre = nombre;
  }
}
util.inherits(Persona, emitter);

const persona = new Persona("Bob");
persona.on("hablar", (mensaje) => {
  console.log(persona.nombre, mensaje);
});
persona.emit("hablar", "Este es el mensaje");

```
#### Código nuevo
- Se suele utilizar
```js
const Emitter = require("events").EventEmitter;
class Persona extends Emitter {
  // funcion constructora de Persona()
  constructor(nombre) {
    super();
    this.nombre = nombre;
  }
}

const persona = new Persona("Bob");
persona.on("hablar", (mensaje) => {
  console.log(persona.nombre, mensaje);
});
persona.emit("hablar", "Este es el mensaje");

```


#### El objeto EventEmitter también expone varios otros métodos para interactuar con eventos
- once(): agrega un  listener de una sola vez (el listener se ejecuta solo una vez)
- removeListener() / off(): elimina un listener
- removeAllListeners(): elimina todos los listener que se agrego a un evento.
- eventEmitter.listnersCount(): esto devuelve el número de listener escuchando un evento.
- Puedes leer más sobre estos métodos en la documentacion oficial.


:::tip info
- [The Node.js Event emitter](https://nodejs.dev/en/learn/the-nodejs-event-emitter/)
- [How to build custom Node.js event emitters](https://blog.logrocket.com/how-build-custom-node-js-event-emitters/)
- [How to Use Event Emitters in Node.js](https://www.makeuseof.com/nodejs-event-emitters/)
- [What is EventEmitter in Node.js ?](https://www.geeksforgeeks.org/what-is-eventemitter-in-node-js/)
:::

## Process

Node.js brinda la posibilidad de obtener información del proceso, como la identificación del proceso, la arquitectura, la plataforma, la versión, el lanzamiento, el tiempo de actividad, el uso de upu, etc. También se puede usar para eliminar procesos, establecer uid, establecer grupos, desenmascarar, etc.

El proceso es un objeto global, una instancia de EventEmitter, al que se puede acceder desde cualquier lugar.

A continuación se proporciona una lista de las propiedades de proceso de Node.js más utilizadas.


| Propiedad | Descripción |
| - | -| 
|  arch |  devuelve la arquitectura del proceso: 'arm', 'ia32' o 'x64'|
|  args |  devuelve argumentos(parametros) de línea de comandos como una matriz|
|  env |  devuelve el entorno del usuario|
|  pid |  devuelve el ID de proceso del proceso|
|  platform |  devuelve la plataforma del proceso: 'darwin', 'freebsd', 'linux', 'sunos' o 'win32'|
|  release |  devuelve los metadatos de la versión del node actual|
|  version |  devuelve la versión del node|
|  versions |  devuelve la versión del node y sus dependencias |

Veamos el ejemplo de proceso simple para imprimir arquitectura, pid, plataforma y versión del proceso.

```js
console.log(`Arquitectura de proceso: ${process.arch}`);
console.log(`Proceso PID: ${process.pid}`);
console.log(`Plataforma de proceso: ${process.platform}`);
console.log(`Versión del proceso: ${process.version}`);

```

Veamos otro ejemplo de proceso para imprimir argumentos de línea de comando . Aquí, el node se considera el primer argumento, el nombre del archivo se considera el segundo argumento y los argumentos reales de la línea de comandos se consideran el tercero, el cuarto, el quinto, etc.


```js
console.log(process.argv);
process.argv.forEach((value, index, array) => {
  console.log(`${index}: ${value}`);
});

```

A continuación, se proporciona una lista de las funciones de proceso de Node.js más utilizadas.


| Función | Descripción |
| - | -| 
|  cwd() |  Devuelve la ruta del directorio de trabajo actual|
|  hrtime() |  devuelve el tiempo real de alta resolución actual en una matriz de [segundos, nanosegundos]|
|  memoryUsage() |  devuelve un objeto que tiene información sobre el uso de la memoria.|
|  process.kill(pid[, signal]) |  se utiliza para matar el pid dado.|
|  uptime() |  devuelve el tiempo de actividad del proceso de Node.js en segundos.|

```js
console.log(`Directorio actual: ${process.cwd()}`);
console.log(`Tiempo de actividad: ${process.uptime()}`);

```

Un proceso de Node.js se inicializa con tres descriptores de archivos abiertos: stdin, stdout y stderr . Estos descriptores de archivos son básicamente  streams.

:::tip Pero, ¿qué son los streams?
- La mejor analogía de los flujos son las cintas transportadoras de una fábrica. Al igual que las cintas transportadoras mueven las materias primas, los  streams manejan el flujo de datos .
- Si ha visitado alguna fábrica, debe haber notado una red de cintas transportadoras que conectan varias máquinas. De igual forma, podemos conectar varios programas mediante streams.
- Cada programa conectado por un  stream ejecuta una tarea particular para producir algún resultado. Podemos canalizar la salida de un programa como entrada a otro para realizar una tarea más grande y compleja. 


:::

:::tip Descriptor de archivo
- Un descriptor de archivo es un entero positivo que debe ser exclusivo en cada trabajo. El trabajo utiliza un descriptor de archivo para identificar un archivo abierto al realizar operaciones sobre el archivo.
- Generalmente, un descriptor de archivo es una clave a una estructura de datos residente en el núcleo, que contiene detalles de todos los archivos abiertos.
:::

Múltiples procesos pueden ejecutar el mismo programa. Pero cada proceso tiene su propia copia del programa.

Además, cada proceso tiene su propio espacio de direcciones y un hilo de control . Lo mismo ocurre con los flujos de E/S estándar como stdin, stdouty stderr.

- En el contexto de un proceso, cada uno de estos flujos tiene un propósito específico:
  -	stdin es el flujo de entrada estándar y una fuente de entrada para el programa.
  -	Stdout es el flujo de salida estándar y una fuente de salida para el programa.
  -	Stderr es el flujo de error estándar y se utiliza para los mensajes de error.


:::tip
Es posible que esté utilizando console.log() y console.error() para enviar datos a la consola. Debajo del capó, las instrucciones de la consola también usan process.stdout y process.stderr.
:::

### Stdin y Strdout
console.log está haciendo internamente process.stdout.write(msg + '\n').

console.log('Hola mundo') es lo mismo que process.stdout.write('Hola mundo' + '\n').


```js
process.stdin.on("data", (data) => {
  data = data.toString().toUpperCase();
  process.stdout.write(data + "\n");
});

```

:::tip Observación
- Ejecutar el programa anterior crea un detector de eventos para escuchar la entrada de datos, procesa la entrada e imprime la salida en la terminal.
- Los datos ingresados, se almacenan en un buffer y por eso se deben convertir a String.
- Podemos detener el proceso en ejecución en nuestra terminal presionando  ctrl + c
:::

### Readline
- readline es un módulo de Node.js que proporciona una interfaz para leer datos de un   readable stream (como process.stdin  )  linea a linea.

```js
const readline = require("readline");

// Creamos una interfaz que conecte el input (stdin) con el output (stdout)
const rl = readline.createInterface({
  // El input es donde se ingresara los datos
  input: process.stdin,
  //   El stdout es donde se mostraran los datos
  output: process.stdout,
});

function ask(pregunta) {
  //  Con este metodo realizamos la pregunta , esperando que el usuario ingrese algo (todo por consola).
  //   El primer parametro es la pregunta a realizar por consola
  //  Una vez que ingrese algo el usuario , se ejecuta la funcion del segundo parametro
  rl.question(pregunta, (respuesta) => {
    rl.write(`Tu nombre es:  ${respuesta}\n`);
    //    La linea de abajo , vuelve a ejecutar la funcion ask() para que sea un bucle
    ask(pregunta);
  });
}

ask("Cual es tu nombre: ");

```

:::tip Observación
Ejecutar el programa anterior crearía una interfaz de terminal que sigue en bucle hasta que finalicemos el proceso de Node.js presionando en la terminal.ctrl + c

:::


### Stderr
- Cuando escribimos aplicaciones o programas, pueden ocurrir errores debido a muchas razones. Stderr es el descriptor de archivo predeterminado donde un proceso puede escribir mensajes de error.

```js
process.stderr.write("error! some error occurred\n");
```

Ejecutar esta aplicación escribiría el mensaje de error en nuestro terminal de manera similar a stdout.


### Ejemplo 
```js
process.stdin.on("data", (data) => {
  console.log(data);
  const name = data.toString().trim().toUpperCase();
  if (name !== "") {
    process.stdout.write(`Hello ${name}`);
  } else {
    process.stderr.write("No input provided.");
  }
});

```

#### ¿Qué están haciendo en el programa anterior?

Primero, necesitamos decirle al programa que escuche la entrada del usuario (evento data). Esto se hace usando la función process.stdin.on() . Esta función toma el nombre del evento (datos) y una función. Los datos recibidos se pasan a la función. Cuando se active el evento (el usuario ingreso información), se ejecutará la función.

La información que ingresa el usuario (data), es un buffer.

Dentro de la funcion , convertimos el buffer a una cadena con ToString(). Luego usamos la funcion trim() que elimina el carácter de nueva línea (\n).


#### Otro ejemplo

Podemos usar flujos de E/S de Node.js para canalizar datos de un programa a otro en un enfoque de flujo de trabajo 

Para demostrar esto, crearemos dos programas: uno para generar registros y otro para almacenar los registros en un archivo

El problema es que solo los registros impresos por stdout se almacenarán en un archivo. Los registros de errores se canalizan mediante el stderr y se imprimen en el terminal.


![Cañeria](https://progressivecoder.com/wp-content/uploads/2022/12/piping-data-1536x603.png?ezimgfmt=ng:webp/ngcb1)


Primero, crearemos el programa para generar registros.

logger.js
```js
const logObject = [
  {
    type: "normal",
    message: "SUCCESS MSG 1",
  },
  {
    type: "normal",
    message: "SUCCESS MSG 2",
  },
  {
    type: "error",
    message: "ERROR!",
  },
  {
    type: "normal",
    message: "SUCCESS MSG 3",
  },
];

function logger() {
  logObject.forEach((log) => {
    setTimeout(() => {
      if (log.type === "normal") process.stdout.write(log.message);
      else process.stderr.write(log.message + "\n");
    }, 1000);
  });
}

logger();

```

Si un registro es de tipo normal, lo escribimos en process.stdout. De lo contrario, lo escribimos a stderr.

A continuación, creamos un programa que almacena los registros en un archivo


store-logs.js

```js
const fs = require("fs");

fs.open("./log-file.txt", "w", (err, fd) => {
  if (err) throw Error(err.message);
  process.stdin.on("data", (data) => {
    fs.write(fd, data.toString() + "\\n", (err) => {
      if (err) throw Error(err.message);
    });
  });
});

```

Después de abrir un archivo en modo de escritura, utilizamos el flujo de entrada process.stdin para recibir los mensajes de registro entrantes y escribirlos en el archivo.

En la consola , lo ejecutamos:  


```powershell
node logger.js | node store-logs.js
```



Los registros normales se escriben en el archivo, mientras que los registros de errores se canalizan a través del descriptor stderr de archivo y se imprimen en el terminal. Esto es según el comportamiento estándar de stderr.


:::tip info
- [Node.js Process](https://www.javatpoint.com/nodejs-process)
- [Node JS Process: Process Module in Node JS](https://www.knowledgehut.com/blog/web-development/nodejs-process)
- [The Many Uses of Node.js stdin, stdout and stderr](https://progressivecoder.com/the-many-uses-of-nodejs-stdin-stdout-and-stderr/)
- [Using stdout, stdin, and stderr in Node.js](https://blog.logrocket.com/using-stdout-stdin-stderr-node-js/)
:::



## Protocolos de red (Network Protocols)
- Un protocolo en redes de computadoras es un conjunto de reglas y procedimientos que gobiernan la comunicación entre dispositivos en una red, especificando cómo enviar, recibir y formatear datos. Un protocolo de red sirve como lenguaje común, asegurando que los datos se transmitan de manera eficiente y precisa de un punto a otro, independientemente del hardware, software o procesos internos involucrados. El soporte del protocolo puede codificarse en software, integrarse en hardware o ambos. 

- Hay tres tipos principales de protocolos de red que debes conocer:
  - Protocolos de gestión (administración) de red : estos protocolos establecen políticas diseñadas para monitorear, administrar y mantener una red. Los ejemplos incluyen SNMP, FTP, POP3 y Telnet.
  - Protocolos de comunicación de red : grupo de protocolos utilizados para establecer reglas y formatos (como sintaxis, sincronización y semántica) para intercambiar datos a través de una red. Los tipos de protocolos de comunicación de red incluyen TCP, UDP, IP, HTTP, IRC, BGP y ARP.
  - Protocolos de seguridad de red : los protocolos de seguridad son protocolos que utilizan medidas de seguridad como criptografía y cifrado para proteger los datos. Los ejemplos incluyen SFTP, SSL y HTTPS.


### Protocolos de comunicación
#### TCP / IP
- TCP/IP (Protocolo de Control de Transmisión/Protocolo de Internet) es un conjunto de protocolos de comunicación utilizados para conectar dispositivos en redes de computadoras. Se compone de dos partes principales:
  - Protocolo de Control de Transmisión (TCP): Es responsable de dividir los datos en paquetes, asegurando que lleguen de manera ordenada y sin errores al destino. Proporciona un mecanismo de control de flujo y de control de congestión para regular el flujo de datos entre los dispositivos.
  - Protocolo de Internet (IP): Se encarga de dirigir los paquetes de datos a través de la red. Asigna direcciones únicas a cada dispositivo conectado a la red (direcciones IP) y determina la ruta más eficiente para enviar los datos desde el origen hasta el destino.
- En resumen, TCP/IP proporciona un conjunto de reglas y estándares que permiten la comunicación efectiva entre dispositivos en una red, garantizando la entrega ordenada y confiable de datos.

:::tip ANALOGIA
- Imagina que estás enviando paquetes de regalo a través de una red de carreteras. TCP sería como un supervisor meticuloso en la planta de empaque, que se asegura de que cada regalo esté completo y bien organizado en su caja antes de salir. IP sería como un sistema de navegación GPS que determina la mejor ruta para que tus paquetes lleguen a su destino, evitando atascos de tráfico y desvíos. Juntos, TCP e IP trabajan en equipo para garantizar que tus regalos lleguen a tiempo y en perfectas condiciones a su destino.

:::
- Los pasos básicos que se realizan cuando se utiliza TCP/IP para enviar datos a través de una red son:
  1. Segmentación (TCP): Los datos son divididos en segmentos por el protocolo TCP. Cada segmento tiene un número de secuencia para ayudar a reensamblarlos en el orden correcto en el destino.
  2. Encaminamiento (IP): Cada segmento es empaquetado en paquetes IP, que incluyen la dirección IP del origen y del destino. Los paquetes son enviados a través de la red utilizando routers que determinan la mejor ruta para cada paquete.
  3. Transmisión: Los paquetes IP viajan por la red desde el origen al destino, pasando a través de diferentes dispositivos de red como switches y routers.
  4. Reensamblaje y Verificación (TCP): En el destino, los paquetes IP son recibidos y ensamblados en el orden correcto utilizando los números de secuencia de TCP. TCP verifica la integridad de los datos, asegurándose de que no haya errores durante la transmisión. Si se detectan errores, se solicita la retransmisión de los segmentos afectados.
  5. Entrega de Datos: Una vez que todos los segmentos son recibidos y ensamblados correctamente, los datos originales son entregados a la aplicación de destino para su procesamiento.
- El protocolo TCP realiza los siguientes pasos para  establecer la conexión:
  1. El cliente envía un SYN al servidor: Cuando un cliente, como un navegador web, quiere establecer una conexión con un servidor, envía un paquete especial llamado SYN (Synchronize) al servidor. Este paquete contiene un número de secuencia inicial que ayuda a sincronizar la comunicación entre el cliente y el servidor.
  2. El servidor responde con SYN-ACK: Cuando el servidor recibe el SYN del cliente, responde con un paquete llamado SYN-ACK. Este paquete contiene tanto un número de secuencia de confirmación (ACK) como un número de secuencia inicial para el servidor.
  3. El cliente envía un ACK al servidor: Finalmente, cuando el cliente recibe el SYN-ACK del servidor, responde con un paquete ACK (Acknowledge) al servidor. Este paquete confirma la recepción del SYN-ACK y establece la conexión entre el cliente y el servidor.
- Estos pasos se conocen comúnmente como el "apretón de manos de tres vías" (three-way handshake) y son esenciales para establecer una conexión TCP confiable entre un cliente y un servidor. Una vez que se completa este proceso, los datos pueden ser enviados entre el cliente y el servidor de manera segura y confiable.
- Algunos usos: 
  - Navegación Web : Los navegadores web utilizan el protocolo HTTP (o HTTPS para conexiones seguras) que funciona sobre TCP/IP para acceder a sitios web, transferir páginas web, y descargar archivos multimedia.
  - Correo Electrónico: Los protocolos  SMTP , POP3 e IMAP operan sobre TCP/IP para enviar, recibir y acceder a correos electrónicos.
  - Transferencia de Archivos: El protocolo FTP utiliza TCP/IP para transferir archivos entre un cliente y un servidor de forma confiable.
  - Acceso Remoto Seguro: SSH se utiliza para acceder a dispositivos y servidores de forma segura a través de una red, operando sobre TCP/IP.
  - Servicios de Red y Administración: DNS resuelve nombres de dominio en direcciones IP, y aunque principalmente utiliza UDP para consultas rápidas, también usa TCP para transferencias de zonas DNS.  DHCP asigna dinámicamente direcciones IP a dispositivos en una red, utilizando el protocolo UDP que es parte de la suite TCP/IP.
  - Etc
#### HTTP
- HTTP (Protocolo de Transferencia de Hipertexto) es un protocolo de comunicación utilizado para la transferencia de datos en la World Wide Web. Funciona como un protocolo de solicitud-respuesta en el nivel de aplicación y se basa en el modelo cliente-servidor.
- Cuando un cliente, como un navegador web, desea acceder a un recurso en un servidor web, envía una solicitud HTTP al servidor. Esta solicitud contiene información sobre el recurso deseado y otros datos relevantes. El servidor recibe la solicitud, procesa la petición y envía una respuesta HTTP de vuelta al cliente. Esta respuesta incluye un código de estado para indicar si la solicitud fue exitosa o no, junto con los datos solicitados (si corresponde).
- HTTP opera sobre el protocolo TCP/IP, lo que garantiza una comunicación confiable entre el cliente y el servidor.
- Por otro lado, HTTP es un protocolo sin estado, lo que significa que cada solicitud que realiza el cliente al servidor es independiente de las solicitudes anteriores. En otras palabras, el servidor no mantiene información de estado sobre las solicitudes anteriores del mismo cliente. Cada solicitud HTTP se procesa de manera independiente y el servidor responde a cada una de ellas sin tener en cuenta solicitudes anteriores.

:::tip ANALOGIA
- Imagina que HTTP es como el idioma que hablan los navegadores web y los servidores cuando interactúan entre sí. Cuando escribes una dirección web en tu navegador y presionas Enter, estás enviando una solicitud en este lenguaje al servidor que aloja esa página. El servidor recibe tu solicitud, busca la página que deseas y te la envía de vuelta para que la veas en tu navegador. Es como pedir un libro en una biblioteca: le pides al bibliotecario el libro que quieres, él lo busca y te lo entrega para que lo leas. En resumen, HTTP es el sistema de comunicación que permite a tu navegador obtener y mostrar páginas web desde los servidores en internet.
:::
- Entonces el flujo básico del ciclo de solicitud-respuesta de HTTP es el siguiente:
  - El cliente envía una solicitud HTTP al servidor web: Cuando un usuario ingresa una URL en su navegador y presiona Enter, el navegador envía una solicitud HTTP al servidor web correspondiente para acceder al contenido de la página web solicitada.
  - El servidor web procesa la solicitud: El servidor recibe la solicitud HTTP y procesa la petición. Esto implica buscar y recopilar los recursos solicitados, como archivos HTML, imágenes, vídeos, etc., que forman la página web.
  - El servidor web envía una respuesta HTTP con el contenido solicitado: Una vez que el servidor ha recopilado los recursos solicitados, envía una respuesta HTTP al cliente. Esta respuesta incluye el contenido de la página web solicitada, junto con los encabezados HTTP que contienen información adicional, como el tipo de contenido, la longitud del contenido, etc.
  - El cliente recibe la respuesta y carga el contenido en el navegador: Una vez que el cliente recibe la respuesta del servidor, procesa la respuesta y carga el contenido en el navegador web. Esto permite al usuario final ver y interactuar con la página web en su navegador.
- Algunos usos: 
  - Navegación Web : Transferencia de páginas web desde servidores a clientes.
  - API RESTful: Comunicación entre aplicaciones y servicios web.
  - Descarga de archivos: Transferencia de archivos desde servidores web.
  - Formularios web: Envío de datos desde formularios HTML al servidor.
  - Acceso a recursos multimedia: Transmisión de videos, imágenes y otros contenidos multimedia.
  - Etc

#### HTTP/3 (QUIC)
- HTTP/3 es la última versión del protocolo HTTP y está diseñado para funcionar sobre QUIC (Quick UDP Internet Connections), un protocolo de transporte desarrollado por Google. A diferencia de las versiones anteriores de HTTP que funcionan sobre TCP, HTTP/3 utiliza QUIC, que está basado en UDP (User Datagram Protocol). Aquí hay algunas características clave:
  - Basado en UDP: QUIC usa UDP en lugar de TCP. UDP es un protocolo de transporte sin conexión, lo que significa que no establece una conexión persistente como lo hace TCP. Sin embargo, QUIC agrega características como la confiabilidad y el control de flujo que normalmente se asocian con TCP.
  - Reducción de latencia: QUIC incluye una combinación de cifrado y establecimiento de conexión en una sola etapa, lo que reduce significativamente la latencia en el establecimiento de conexiones. En HTTP/2, el establecimiento de conexión con TCP y TLS requiere múltiples etapas, lo que aumenta la latencia.
  - Multiplexación sin bloqueo de cabecera: Al igual que HTTP/2, HTTP/3 permite la multiplexación de múltiples flujos de datos sobre una sola conexión. Sin embargo, a diferencia de HTTP/2, QUIC evita el problema de bloqueo de cabecera en TCP, donde la pérdida de un solo paquete puede retrasar todos los flujos de datos en la conexión.
  - Cifrado obligatorio: QUIC requiere que todas las conexiones estén cifradas utilizando TLS 1.3, lo que mejora la seguridad y privacidad de las conexiones.
  - Reanudación de conexión: QUIC permite reanudar conexiones interrumpidas sin necesidad de reiniciar el proceso de establecimiento de conexión, lo que mejora la eficiencia y la experiencia del usuario.

:::tip ANALOGIA
- Imagina que estás enviando mensajes importantes a través de un sistema de entrega de paquetes. Con los métodos antiguos (HTTP/1.1 y HTTP/2), cada vez que quieres enviar un mensaje, tienes que establecer una conexión, lo que puede llevar tiempo y puede ser interrumpido si hay algún problema en la red. Piensa en esto como tener que saludar y estrechar la mano de la persona que entrega tus mensajes cada vez que quieres enviar uno.
- Con HTTP/3 (y QUIC), el proceso es más rápido y eficiente. En lugar de tener que establecer una conexión formal cada vez, es como si tuvieras un mensajero que ya conoce el camino y puede salir corriendo con tu mensaje inmediatamente. Además, este mensajero puede manejar múltiples mensajes al mismo tiempo sin que un mensaje perdido retrase a los demás.
- Además, todos los mensajes están cifrados, lo que significa que nadie puede leerlos mientras están en tránsito, y si alguna vez necesitas interrumpir y luego reanudar la entrega, el mensajero puede continuar exactamente donde lo dejó sin tener que reiniciar todo el proceso.
:::
- En resumen, HTTP/3 (QUIC) hace que la transferencia de datos en la web sea más rápida, eficiente y segura, mejorando la experiencia de navegación para los usuarios.
- El flujo de conexión y transferencia de datos:
  1. Inicio de la conexión: El cliente envía un paquete inicial QUIC al servidor. Este paquete incluye información necesaria para iniciar la conexión y el cifrado mediante TLS 1.3.
  2. Negociación de TLS 1.3: El servidor responde con su propio paquete QUIC, que incluye los datos para negociar los parámetros de cifrado TLS 1.3. Una vez que se intercambian estos datos, la conexión está cifrada y segura.
  3. Establecimiento de conexión: La negociación de TLS y la configuración(establecimiento) de la conexión se realizan en un solo viaje de ida y vuelta (1-RTT) si es posible, o en dos viajes de ida y vuelta (2-RTT) en el peor de los casos. Esto reduce la latencia en comparación con TCP, que requiere múltiples viajes de ida y vuelta.
  4. Multiplexación de flujos: HTTP/3 permite múltiples flujos de datos independientes dentro de la misma conexión QUIC. Cada flujo tiene su propio identificador y puede ser enviado de manera independiente, evitando el problema de bloqueo de cabecera que afecta a HTTP/2 sobre TCP.
  5. Transferencia de datos: Los datos de las solicitudes y respuestas HTTP se envían a través de estos flujos independientes. Los paquetes pueden llegar en cualquier orden, y QUIC se encarga de reensamblarlos correctamente.
  6. Gestión de la pérdida de paquetes: Si se pierde un paquete, solo el flujo afectado se ve retrasado. Otros flujos continúan sin interrupción. QUIC maneja la retransmisión de paquetes perdidos sin bloquear la transmisión de otros datos.
  7. Cierre de la conexión: La conexión se puede cerrar de manera limpia enviando un paquete de cierre que indica el final de la comunicación.


- Algunos usos: 
  - Navegación Web más Rápida y Eficiente: HTTP/3 reduce la latencia de conexión y acelera la carga de páginas web, proporcionando una experiencia de usuario más rápida y fluida.
  - Streaming de Video y Audio: HTTP/3 proporciona una mejor gestión de la pérdida de paquetes y latencia reducida, mejorando la calidad del streaming de video y audio.
  - Aplicaciones Web en Tiempo Real: Mejora la latencia y la fiabilidad en aplicaciones de mensajería instantánea y plataformas de chat. Mejora la respuesta y la sincronización en aplicaciones colaborativas en tiempo real, como editores de documentos y herramientas de diseño.
  - Gaming en Línea: HTTP/3 reduce la latencia y mejora la fiabilidad de las conexiones, lo cual es crucial para los juegos en línea.
  - Transferencia Segura y Rápida de Datos: Proporciona transferencias de datos más rápidas y seguras para aplicaciones que dependen de APIs y servicios web.
  -  Internet de las Cosas (IoT): HTTP/3 reduce la latencia y mejora la eficiencia de la comunicación entre dispositivos IoT, lo cual es crucial para el intercambio rápido de datos.
  - Realidad Virtual (VR) y Realidad Aumentada (AR): HTTP/3 facilita la transmisión de contenidos VR/AR con baja latencia, proporcionando una experiencia inmersiva y fluida.
  - Etc


#### WebSocket 
- WebSocket es un protocolo de comunicación que proporciona un canal de comunicación bidireccional(ida y vuelta) y full-duplex ( transmisión y recepción de datos simultáneas a través de un canal) sobre una sola conexión TCP. Está diseñado para ser implementado en navegadores web y servidores web, pero puede ser utilizado por cualquier aplicación cliente-servidor. WebSocket está estandarizado por el IETF como RFC 6455.
- Características clave de WebSocket:
  - Conexión persistente: A diferencia de HTTP, que es un protocolo sin estado y basado en solicitudes/respuestas, WebSocket permite una conexión persistente donde el servidor y el cliente pueden enviar datos en cualquier momento.
  - Handshaking inicial: La conexión WebSocket comienza con un handshake HTTP, lo que permite que la conexión WebSocket se inicie fácilmente desde navegadores web. Este handshake inicial actualiza el protocolo de HTTP a WebSocket.
  - Bajo overhead: Una vez establecida la conexión, los mensajes WebSocket tienen un overhead mucho menor en comparación con las solicitudes HTTP, ya que no requieren los encabezados HTTP completos para cada mensaje.
  - Soporte de datos binarios y de texto: WebSocket puede transmitir tanto datos de texto como datos binarios, lo que lo hace adecuado para una amplia variedad de aplicaciones.
  - Control de flujo: WebSocket tiene mecanismos integrados para gestionar el control de flujo, cierre de conexión, y manejo de errores.
- Flujo de conexión:
  1. Handshake inicial: El cliente envía una solicitud de handshake HTTP al servidor con la cabecera Upgrade: websocket. El servidor responde con un encabezado de aceptación, estableciendo la conexión WebSocket.
  2. Comunicación bidireccional: Una vez establecida la conexión, tanto el cliente como el servidor pueden enviar y recibir datos en cualquier momento. Los datos se envían en marcos que contienen un mínimo de sobrecarga.
  3. Cierre de la conexión: Cualquiera de las partes (cliente o servidor) puede cerrar la conexión en cualquier momento enviando un marco de cierre.

:::tip Marco
-  Un "marco" (o "frame" en inglés) es una unidad de datos que se transmite entre el cliente y el servidor a través de una conexión WebSocket. 
- Un marco de WebSocket es una estructura de datos que contiene tanto la "información de control" como los "datos  que se envían" entre el cliente y el servidor. 
- Cada marco contiene varios campos que indican su propósito y contenido. Los campos principales en un marco de WebSocket incluyen:
  - FIN (1 bit): Indica si este marco es el último en una secuencia de marcos que forman un mensaje completo.
  - RSV1, RSV2, RSV3 (1 bit cada uno): Reservados para extensiones futuras y generalmente se establecen en 0.
  - Opcode (4 bits): Indica el tipo de marco. Por ejemplo, 0x1 para un marco de texto, 0x2 para un marco binario, 0x8 para un marco de cierre, 0x9 para un ping, y 0xA para un pong.
  - Máscara (1 bit): Indica si los datos del marco están enmascarados. En las comunicaciones desde el cliente al servidor, este bit se establece en 1.
  - Payload length (7, 7+16, o 7+64 bits): Indica la longitud de los datos del marco. Puede ser de 7 bits para cargas pequeñas, 7+16 bits para cargas medianas, o 7+64 bits para cargas grandes.
  - Masking key (32 bits, opcional): Utilizado para enmascarar/descifrar los datos de Payload data , presente si el bit de máscara está establecido en 1.
  - Payload data (variable): Los datos reales que se están transmitiendo.
- Flujo de un marco:
  1. Envío de un marco: Cuando el cliente o el servidor tiene datos para enviar, se construye un marco con los datos y se envía a través de la conexión WebSocket.
  2. Recepción de un marco: La otra parte recibe el marco, lo interpreta según los campos (FIN, opcode, Payload length, etc.), y procesa los datos contenidos en el marco.
- Los marcos de WebSocket están diseñados para contener un mínimo de sobrecarga, lo que significa que tienen una estructura eficiente que maximiza la cantidad de datos útiles que pueden transportar mientras minimizan la cantidad de información adicional (metadatos) necesaria para gestionar y procesar estos datos. 
- En resumen, los marcos en WebSocket son como pequeños sobres de datos que se envían entre el cliente y el servidor, cada uno conteniendo una parte de la información y algunos detalles sobre cómo manejar esa información. Esto permite que la comunicación sea eficiente, continua y en tiempo real.

:::
:::tip ANALOGIA
- Imagina que estás teniendo una conversación telefónica con un amigo:
  - Inicio de la conversación: Llamas a tu amigo y él contesta el teléfono. Este es el "handshake" inicial, similar a cómo se establece una conexión WebSocket a través de una solicitud HTTP.
  - Conversación continua: Una vez que la llamada está conectada, ambos pueden hablar y escuchar en cualquier momento, sin necesidad de colgar y volver a llamar cada vez que quieren decir algo nuevo. Esto es como la comunicación bidireccional y continua que permite WebSocket, donde tanto el cliente como el servidor pueden enviar mensajes cuando quieran.
  - Cierre de la conversación: Cuando terminan de hablar, cualquiera de los dos puede colgar. Este es el cierre de la conexión en WebSocket.
- En resumen, WebSocket es como tener una línea telefónica abierta entre el cliente y el servidor, permitiendo una comunicación constante y en tiempo real, a diferencia de HTTP, donde cada mensaje requiere una nueva solicitud y respuesta.
::: 


- Algunos usos: 
  - Aplicaciones Web en Tiempo Real:  Permite la comunicación instantánea entre usuarios en aplicaciones de chat y mensajería.
  -  Juegos en Línea y Aplicaciones de Multijugador: Permite la interacción y sincronización en tiempo real entre varios jugadores en juegos en línea.
  - Monitoreo y Control Remoto: Proporciona actualizaciones en tiempo real sobre estados y eventos en sistemas de monitoreo, como sistemas de control de procesos y dispositivos IoT.
  - Aplicaciones de Finanzas y Trading: Proporciona actualizaciones instantáneas sobre precios de acciones, divisas y criptomonedas en aplicaciones financieras y de trading.
  - Transmisión de Datos en Tiempo Real: Permite la visualización instantánea de datos en tiempo real, como gráficos y tablas dinámicas en aplicaciones de monitorización y análisis de datos.
  - Etc




#### UDP
- UDP es un protocolo de comunicación diseñado para enviar paquetes de un dispositivo a otro en una red. Muchas organizaciones utilizan UDP como alternativa a TCP porque ofrece velocidades de transferencia más altas.
- Si bien este aumento en la velocidad tiene un costo de precisión, UDP admite mejor servicios de transmisión de video/audio, juegos en línea o llamadas de protocolo de voz sobre Internet (VoIP), que pueden manejar cierto grado de pérdida de datos.
- Otra diferencia clave entre los dos es que UDP no intentará establecer una conexión antes de enviar paquetes al destino. Al mismo tiempo, tampoco garantiza la entrega de datos al otro dispositivo.
- UDP (User Datagram Protocol) es uno de los protocolos principales de la suite de protocolos de Internet. UDP se encuentra en la capa de transporte del modelo OSI y se utiliza para enviar datagramas a través de una red IP. A diferencia de TCP (Transmission Control Protocol), UDP es un protocolo sin conexión que no garantiza la entrega, el orden de los paquetes, ni la protección contra duplicados. Esto lo hace más simple y rápido, pero también menos confiable.
- Características Técnicas de UDP:
  - Protocolo Sin Conexión: UDP no establece una conexión previa entre el emisor y el receptor antes de enviar los datos. Cada datagrama es independiente.
  - Cabecera Simple: La cabecera de UDP es más pequeña que la de TCP, lo que reduce la sobrecarga. Incluye información básica como puertos de origen y destino, longitud y suma de verificación.
  - Sin Confirmación ni Retransmisión: UDP no proporciona mecanismos de confirmación de recepción ni retransmisión de paquetes perdidos, lo que puede resultar en pérdida de datos.
  - Menor Latencia: Debido a la falta de confirmaciones y controles de flujo, UDP tiene una menor latencia en comparación con TCP.
  - Aplicaciones Especializadas: Ideal para aplicaciones donde la velocidad es más crítica que la fiabilidad, como transmisión de video/audio en tiempo real, juegos en línea y DNS.
- Un datagrama UDP tiene una estructura simple y consta de una cabecera seguida de datos. La cabecera de UDP es de tamaño fijo y tiene una longitud de 8 bytes (64 bits). A continuación se describe cada campo de la cabecera.
- Formato del Datagram UDP:
  - Puerto de origen (16 bits) : Este campo identifica el puerto del cual se origina el datagrama en el dispositivo emisor. Un puerto es un número que identifica una aplicación específica en el dispositivo. Permite que el receptor sepa a cuál puerto responder si es necesario. Sin embargo, este campo puede ser opcional en algunos casos, y puede estar en 0 si no se requiere una respuesta.
  - Puerto de destino (16 bits) : Este campo identifica el puerto al cual se debe entregar el datagrama en el dispositivo receptor. Indica el servicio o la aplicación específica en el dispositivo de destino que debe procesar el datagrama.
  - Longitud (16 bits): Longitud total del datagrama incluyendo cabecera y datos. Este campo especifica la longitud total del datagrama UDP, incluyendo tanto la cabecera como los datos.  Indica el tamaño del datagrama completo, permitiendo que el receptor sepa dónde termina el datagrama. La longitud mínima es de 8 bytes (solo la cabecera).
  - Checksum (16 bits): Suma de verificación para detectar errores en los datos. Este campo es utilizado para la verificación de errores en los datos del datagrama. Calcula una suma de verificación (checksum) que permite detectar errores en la cabecera y los datos del datagrama. Si se detectan errores, el datagrama puede ser descartado. Este campo es opcional y puede ser 0 si no se utiliza.
- Para entender mejor la estructura, aquí hay una representación visual:

```powershell
+-------------------+-------------------+
|  Puerto de Origen | Puerto de Destino |
+-------------------+-------------------+
|       Longitud    |      Checksum     |
+-------------------+-------------------+
|                                       |
|               Datos                   |
|                                       |
+---------------------------------------+

```


:::tip Observación
- Explicación Adicional:
  - Puerto de Origen y Destino: Piensa en los puertos como puertas específicas en un edificio. El puerto de origen es la puerta de la habitación desde donde se envía el mensaje, y el puerto de destino es la puerta de la habitación a donde se envía el mensaje.
  - Longitud: Es como la longitud total de una carta, incluyendo tanto el sobre (la cabecera) como el contenido (los datos). Ayuda al destinatario a saber cuánto debe leer.
  - Checksum: Imagina que el checksum es como una nota de verificación adjunta a una carta. Verifica que la carta no haya sido dañada durante el envío. Si la verificación falla, el receptor sabe que la carta está corrupta.
:::

- Ejemplo práctico:
  - Supongamos que un dispositivo A está enviando datos a un dispositivo B a través de una red utilizando UDP:
    - Puerto de Origen: El dispositivo A está enviando desde el puerto 12345.
    - Puerto de Destino: El dispositivo B debe recibir en el puerto 80 (por ejemplo, un servidor web).
    - Longitud: El datagrama total (cabecera + datos) es de 32 bytes.
    - Checksum: El dispositivo A calcula una suma de verificación sobre los datos y la cabecera, y la incluye aquí para que el dispositivo B pueda verificar la integridad del datagrama.
  - Cuando el dispositivo B recibe el datagrama:
    - Ve que el puerto de destino es 80 y pasa los datos a la aplicación que escucha en ese puerto (posiblemente un servidor web).
    - Usa la longitud para saber cuántos bytes deben leerse del datagrama.
    - Usa el checksum para verificar que los datos no han sido alterados durante la transmisión.
- El formato del datagrama UDP es simple pero eficiente, diseñado para permitir una comunicación rápida y de baja latencia entre dispositivos en una red. Cada campo tiene un propósito específico para asegurar que los datos se entreguen correctamente y, en algunos casos, puedan verificarse en busca de errores.

:::tip ANALOGIA
- Imagina que UDP es como enviar postales por correo tradicional:
  - Sin Confirmación de Recepción: Cuando envías una postal, no tienes ninguna confirmación de que el destinatario la haya recibido. De la misma manera, UDP no te avisa si los datos llegaron.
  - Cada Postal es Independiente: Cada postal es enviada por separado y no necesitas esperar a que la anterior sea entregada antes de enviar la siguiente. Con UDP, cada paquete de datos se envía de manera independiente.
  - Rápido pero sin Garantías: Enviar postales es rápido porque no necesitas llenar formularios complejos ni esperar confirmaciones. Sin embargo, algunas postales podrían perderse. UDP es rápido por las mismas razones, pero algunos datos pueden no llegar.
  - Cabecera Simple: La información en una postal es mínima: la dirección de destino y el mensaje. UDP también tiene una cabecera simple, lo que reduce la cantidad de información extra que se envía junto con los datos.
  - Usos Específicos: Las postales son útiles para mensajes breves y rápidos, no para documentos importantes. UDP es ideal para aplicaciones donde es más importante la rapidez que la fiabilidad, como llamadas de voz o videos en tiempo real.
:::


- Algunos usos: 
  - Transmisión de Video y Audio en Tiempo Real: Aplicaciones de streaming de video y audio, como videollamadas y transmisiones en vivo, donde es más importante la velocidad que la entrega perfecta de cada paquete.
  - Juegos en Línea: Juegos que requieren latencia baja y pueden tolerar la pérdida ocasional de paquetes, priorizando la velocidad de transmisión.
  - DNS (Domain Name System): Consultas de DNS, donde la pérdida de un paquete puede simplemente resultar en una nueva solicitud.
  - Protocolos de Routing: Algunos protocolos de routing en redes usan UDP debido a su rapidez y simplicidad.
  - IoT (Internet de las Cosas): Dispositivos IoT que necesitan enviar pequeñas cantidades de datos de forma rápida y pueden tolerar la pérdida ocasional de paquetes.
  - Etc


#### IRC
- IRC es un protocolo para comunicación en tiempo real a través de mensajes de texto. Permite que varios usuarios participen en chats grupales o privados en comunidades y salas de chat en línea.
- IRC (Internet Relay Chat) es un protocolo de comunicación en tiempo real que permite a múltiples usuarios conectarse a servidores de chat y comunicarse en canales públicos o privados. Fue uno de los primeros protocolos de mensajería instantánea en Internet y sigue siendo utilizado hoy en día para diversos propósitos.
- Está diseñado principalmente para la comunicación mediante texto. Históricamente, IRC no incluye soporte nativo para comunicación de voz o video. Sin embargo, se pueden utilizar complementos y otras herramientas para añadir capacidades de voz sobre IRC, aunque no es una característica estándar del protocolo IRC.
- Características:
  - Conexión Cliente-Servidor: Los usuarios se conectan a un servidor IRC utilizando un cliente IRC. Los servidores pueden estar interconectados, formando una red IRC.
  - Canales y Salas de Chat: Las conversaciones se organizan en "canales" (salas de chat) identificados por un nombre que suele comenzar con el carácter #.
  - Privacidad: Además de los canales públicos, IRC permite mensajes privados entre usuarios.
  - Comandos IRC: Los usuarios pueden interactuar con el servidor y otros usuarios mediante comandos específicos (ej., /join, /nick, /msg).
  - Protocolos de Seguridad: Algunos servidores IRC utilizan cifrado SSL/TLS para proteger las comunicaciones.
- Usos comunes:
  - Comunidad y Soporte Técnico: Muchas comunidades de software libre y proyectos de código abierto utilizan IRC para discutir desarrollos y proporcionar soporte técnico.
  - Grupos de Interés Común: Personas con intereses similares pueden unirse a canales específicos para discutir temas como programación, videojuegos, hobbies, etc.
  - Eventos en Vivo: IRC se utiliza para coordinar y comunicar en tiempo real durante eventos en línea, como hackathons, conferencias virtuales y lanzamientos de productos.
  - Chat Privado: Los usuarios pueden enviar mensajes directos y tener conversaciones privadas con otros usuarios.
  - Automatización y Bots: Se pueden crear bots para realizar tareas automatizadas, como responder preguntas frecuentes, moderar canales, o proporcionar actualizaciones en tiempo real sobre diversos temas.

:::tip ANALOGIA
- IRC es como una gran sala de chat en Internet donde las personas pueden unirse a diferentes "salas" para hablar sobre cualquier tema. Puedes entrar en salas públicas para conversar con muchas personas o enviar mensajes privados a alguien en particular. Es una herramienta flexible y todavía útil para la comunicación en línea, especialmente en comunidades tecnológicas y de interés específico.
:::


- Algunos usos: 
  - Desarrollo de Software: Desarrolladores se unen a canales de proyectos para discutir problemas y compartir avances.
  - Soporte en Vivo: Empresas de tecnología y comunidades de usuarios ofrecen soporte en tiempo real.
  - Reuniones Virtuales: Grupos organizan reuniones y eventos en línea, utilizando IRC para la comunicación en tiempo real.
  - Automatización: Bots en IRC pueden proporcionar actualizaciones automáticas, realizar encuestas o moderar conversaciones.
  - Intercambio de Información: Usuarios intercambian información sobre temas de interés común, desde tecnología hasta hobbies específicos.
  - Etc



### Protocolos de gestión de red
#### ICMP
- ICMP es un protocolo de red que utilizan los dispositivos para advertir sobre problemas y errores de conectividad. ICMP puede notificar a los dispositivos que un mensaje reenviado era demasiado largo o llegó desordenado y emitirá un mensaje de error solicitando que el dispositivo reenvíe el contenido.
- Las herramientas de resolución de problemas como Ping envían solicitudes ICMP a un dispositivo y miden el tiempo de ida y vuelta, o el tiempo que tarda el dispositivo en responder a la solicitud. La cantidad de retraso en la respuesta se puede utilizar para medir la calidad de la conexión.
- Otras herramientas, como traceroute, utilizan ICMP para solucionar problemas y medir la eficiencia de las rutas de red, indicando al usuario cuánto tiempo le llevó pasar de un dispositivo a otro.
- A veces, los ciberdelincuentes utilizan el protocolo como parte de un ataque de inundación ICMP en el que intentan saturar un servidor con solicitudes ICMP ilegítimas para quitarle sus recursos informáticos al usuario final.
- ICMP (Internet Control Message Protocol) es un protocolo de red utilizado para enviar mensajes de control y error entre dispositivos de red, como routers y hosts. Forma parte del conjunto de protocolos de Internet (IP) y es esencial para el diagnóstico y la gestión de redes.
- Características:
  - Mensajes de Control y Error: ICMP se utiliza para informar sobre errores en la comunicación de la red, como paquetes no entregados.
  - Protocolo de Soporte: No se utiliza para transmitir datos de aplicaciones sino para enviar mensajes sobre el estado de la red.
  - Tipos de Mensajes: Incluye varios tipos de mensajes como "Echo Request" y "Echo Reply" utilizados por herramientas como ping.
- Tipos Comunes de Mensajes ICMP:
  - Echo Request / Echo Reply: Utilizados por la herramienta ping para verificar la conectividad entre dispositivos.
  - Destination Unreachable: Informa que un paquete no pudo ser entregado a su destino.
  - Time Exceeded: Indica que el TTL (Time to Live) de un paquete ha expirado.
  - Redirect: Informa a un host que debe usar una ruta diferente para alcanzar un destino específico.

:::tip ANALOGIA
- ICMP es como el sistema de mensajes de error y control de una red. Si una red fuese una carretera, ICMP sería como los letreros de tráfico y los mensajes de alerta que te dicen si hay problemas en la ruta, como desvíos o cierres de carreteras. No transporta datos útiles para aplicaciones, sino información sobre el estado y los problemas de la red.
:::


- Algunos usos: 
  - Diagnóstico de Conectividad (Ping) -  Herramienta Ping: Verifica si un dispositivo en la red está accesible y mide el tiempo que tarda en recibir una respuesta. Ejemplo: ping www.google.com.
  - Diagnóstico de Rutas (Traceroute) - Herramienta Traceroute: Determina la ruta que toma un paquete para llegar a su destino y mide el tiempo que tarda en cada salto. Ejemplo: traceroute www.google.com.
  - Notificación de Errores - Destination Unreachable: Informa cuando un paquete no puede llegar a su destino. Ejemplo: Si intentas acceder a un servidor que no existe.
  - Gestión de Rutas (Redirect) -  Mensaje Redirect: Informa a un host sobre una mejor ruta para llegar a un destino específico, optimizando el tráfico de red.
  - Control de Flujo -  Rate Limiting y Control de Congestión: Utilizado para informar sobre problemas de congestión en la red, ayudando a ajustar el flujo de tráfico.
  - Etc


#### SNMP
- SNMP es un protocolo de capa de aplicación que se utiliza para recopilar información de administración de dispositivos como computadoras, enrutadores, conmutadores, firewalls e impresoras.
- Las plataformas de monitoreo de red suelen utilizar SNMP para monitorear el rendimiento y el estado de los dispositivos en una red en tiempo real.
- El protocolo funciona con un administrador SNMP o un cliente de software que envía solicitudes GET SNMP a dispositivos habilitados para SNMP.
- Cada dispositivo habilitado para SNMP tiene un agente SNMP local que recopila datos de rendimiento del dispositivo y envía esta información al administrador SNMP para que un administrador pueda obtener una vista de arriba hacia abajo del rendimiento y el estado.
- SNMP (Simple Network Management Protocol) es un protocolo estándar de Internet para gestionar y supervisar dispositivos de red. Permite a los administradores de red recopilar y organizar información sobre dispositivos en una red, así como cambiar la configuración de estos dispositivos.
- Características:
  - Estructura Cliente-Servidor: SNMP utiliza un modelo cliente-servidor, donde el cliente (manager) consulta información de los servidores (agentes).
  - Componentes Principales:
    - Manager: El sistema que solicita y recibe información de los dispositivos de red.
    - Agent: Un software que reside en los dispositivos de red y responde a las solicitudes del manager.
    - MIB (Management Information Base): Una base de datos de información organizada jerárquicamente que los agentes utilizan para almacenar datos de gestión.
  - Comandos Básicos:
    - Get: Solicita información de un agente.
    - Set: Envía una configuración a un agente.
    - Trap: Envío proactivo de alertas desde el agente al manager sobre eventos importantes.
  - Versiones: SNMP tiene varias versiones, las más utilizadas son SNMPv1, SNMPv2c, y SNMPv3, esta última ofrece mejoras en seguridad.


:::tip ANALOGIA
- SNMP es como un sistema de monitoreo para dispositivos de red, similar a cómo los supervisores en una fábrica vigilan y ajustan las máquinas para asegurarse de que todo funcione bien. Los administradores de red pueden usar SNMP para verificar el estado de los dispositivos (como routers, switches y servidores), recibir alertas de problemas y ajustar configuraciones desde una ubicación central.
:::


- Algunos usos: 
  - Monitoreo de Estado de la Red - Supervisión de Dispositivos: Verificar el estado operativo de routers, switches, servidores, etc., asegurándose de que todos los dispositivos funcionen correctamente.
  - Detección y Notificación de Fallos - Alertas Automáticas (Traps): Configurar los dispositivos para que envíen alertas automáticas al manager en caso de fallos o eventos críticos, permitiendo una respuesta rápida.
  - Gestión del Rendimiento - Análisis de Tráfico: Recopilar estadísticas de tráfico y rendimiento de la red para analizar la utilización del ancho de banda y detectar posibles cuellos de botella.
  - Configuración Remota - Ajuste de Parámetros: Cambiar configuraciones de dispositivos de red de manera remota, sin necesidad de intervención física, facilitando la administración de redes grandes.
  - Inventario y Auditoría de Red - Inventario de Dispositivos: Mantener un inventario actualizado de todos los dispositivos conectados a la red, incluyendo detalles como el tipo de dispositivo, versiones de firmware y configuraciones.
  - Etc



### Protocolos de seguridad de red

#### SFTP 
- El protocolo SFTP permite la transferencia de archivos de manera segura a través de una red, utilizando cifrado para proteger los datos mientras se transmiten. SFTP asegura que solo los usuarios con autorización puedan acceder y transferir archivos.
- SFTP (Protocolo de Transferencia de Archivos SSH) es un protocolo de red que permite acceder, transferir y gestionar archivos de forma segura a través de una conexión protegida. Utiliza el protocolo SSH (Secure Shell) para proporcionar una alternativa segura al protocolo FTP (Protocolo de Transferencia de Archivos).
- Características:
  - Basado en SSH: SFTP utiliza el protocolo SSH para establecer una conexión segura y cifrada entre el cliente y el servidor.
  - Transmisión de Archivos: Permite transferir archivos de manera segura entre el cliente y el servidor, protegiendo los datos en tránsito.
  - Gestión de Archivos: Además de transferir archivos, SFTP soporta operaciones de gestión de archivos como crear directorios, eliminar archivos y cambiar permisos.
  - Cifrado y Autenticación: Todo el tráfico SFTP está cifrado, y la autenticación se realiza utilizando métodos seguros como claves SSH o contraseñas.

:::tip ANALOGIA
- SFTP es como un servicio de mensajería segura para archivos en Internet. Imagina que tienes un mensajero personal que usa una caja fuerte para llevar documentos importantes entre tu oficina y otra ubicación. SFTP asegura que tus archivos lleguen a su destino sin que nadie más los vea o los altere.
:::


- SFTP es un protocolo de red seguro para la transferencia y gestión de archivos. Aprovecha el cifrado y la autenticación de SSH para proteger los datos en tránsito, asegurando que la transferencia de archivos se realice de manera segura y confiable. Es ampliamente utilizado en entornos donde la seguridad de los datos es crucial.
- Algunos usos: 
  - Transferencia Segura de Archivos - Envío y Recepción de Datos Sensibles: Empresas y organizaciones utilizan SFTP para transferir archivos confidenciales, como documentos financieros o datos personales, de manera segura.
  - Respaldo y Recuperación de Datos - Backup de Servidores: Realizar copias de seguridad de servidores y sistemas de manera segura, almacenando los datos en ubicaciones remotas protegidas.
  - Gestión de Archivos Remotos - Administración de Archivos en Servidores: Administradores de sistemas utilizan SFTP para gestionar archivos en servidores remotos, incluyendo la creación, eliminación y modificación de archivos y directorios.
  - Despliegue de Aplicaciones - Transferencia de Archivos de Aplicaciones: Desarrolladores y equipos de TI utilizan SFTP para enviar archivos de aplicaciones y actualizaciones a servidores de producción de manera segura.
  - Automatización de Procesos - Scripting y Automatización: Scripts y programas automatizados utilizan SFTP para transferir y gestionar archivos de manera segura como parte de procesos automatizados, como la sincronización de datos entre sistemas.
  - Etc

#### SSL
- SSL es un protocolo que proporciona comunicación segura a través de Internet. Cifra los datos transmitidos entre servidores web y navegadores web y evita el acceso no autorizado y las escuchas ilegales.
- El Protocolo SSL (Secure Sockets Layer) es un protocolo de seguridad que establece una conexión cifrada entre un cliente y un servidor, garantizando la privacidad e integridad de los datos transmitidos a través de Internet.
- Características:
  - Cifrado de Datos: SSL utiliza algoritmos de cifrado para proteger los datos transmitidos entre el cliente y el servidor, evitando que sean interceptados por terceros.
  - Autenticación de Identidad: SSL permite la verificación de la identidad del servidor, asegurando que el cliente se esté comunicando con el servidor correcto y no con un impostor.
  - Establecimiento de Conexión Segura: SSL establece una conexión segura entre el cliente y el servidor a través de un proceso de "apretón de manos" (handshake), donde se acuerdan los parámetros de seguridad y se intercambian claves.
- El "handshake" (apretón de manos) es un proceso fundamental en el establecimiento de una conexión segura a través de SSL/TLS (Transport Layer Security), que es la evolución de SSL. Aquí está una explicación del handshake:
  1. Inicio de la Comunicación: El cliente envía un mensaje de "saludo" (ClientHello) al servidor para iniciar la comunicación segura. Este mensaje incluye información sobre los protocolos y algoritmos de cifrado que el cliente puede usar.
  2. Respuesta del Servidor: El servidor responde con un mensaje de "saludo" (ServerHello) que selecciona el protocolo y algoritmo de cifrado que utilizarán tanto el cliente como el servidor durante la sesión.
  3. Autenticación y Acuerdo de Claves: El servidor envía su certificado digital al cliente para que éste lo verifique. El cliente puede entonces autenticar la identidad del servidor y, si lo desea, puede enviar su propio certificado al servidor para autenticarse a sí mismo.
  4. Generación de Claves de Sesión: Tanto el cliente como el servidor generan claves de sesión que se utilizarán para cifrar y descifrar los datos intercambiados durante la comunicación.
  5. Confirmación de Handshake: Una vez que se ha completado el intercambio de claves y se ha autenticado la identidad del servidor, ambos lados confirman que el handshake se ha completado con éxito.
- El resultado de handshake es que tanto el cliente como el servidor tienen un conjunto de claves compartidas (son conocidas por ambas partes) y están listos para comunicarse de manera segura, utilizando la criptografía simétrica para la mayoría de los datos y la criptografía asimétrica para el intercambio inicial de claves. Este proceso garantiza que la comunicación entre el cliente y el servidor esté protegida contra la interceptación y manipulación por parte de terceros.

:::tip criptografía simétrica
- La criptografía simétrica es un método de cifrado en el que tanto el emisor como el receptor comparten la misma clave para cifrar y descifrar los datos. En este enfoque, la misma clave se utiliza tanto para encriptar como para desencriptar el mensaje. Esto significa que el remitente cifra el mensaje utilizando una clave y el receptor lo descifra utilizando la misma clave.
- En resumen:
  - Una sola clave: Hay una sola clave compartida entre el emisor y el receptor.
  - Cifrado y descifrado: La misma clave se utiliza tanto para cifrar como para descifrar los datos.
  - Eficiencia: Es más eficiente en términos de velocidad y recursos computacionales en comparación con la criptografía asimétrica.
  - Seguridad de la clave: La seguridad del sistema depende de la protección de la clave compartida. Si un tercero obtiene acceso a esta clave, puede descifrar todos los mensajes cifrados con ella.
- La criptografía simétrica se utiliza en una variedad de aplicaciones, como la protección de datos confidenciales en sistemas de almacenamiento y comunicación segura a través de Internet. Algunos ejemplos comunes de algoritmos de cifrado simétrico incluyen AES (Estándar de Cifrado Avanzado), DES (Estándar de Cifrado de Datos) y 3DES (Triple DES).
:::

:::tip criptografía asimétrica
- La criptografía asimétrica es un método de cifrado en el que se utilizan dos claves distintas pero relacionadas: una clave pública y una clave privada. Cada una de estas claves tiene una función específica:
  - Clave pública: Esta clave se comparte libremente y se utiliza para cifrar datos. Cualquier persona puede tener acceso a esta clave y utilizarla para cifrar un mensaje dirigido al propietario de la clave privada.
  - Clave privada: Esta clave se mantiene en secreto y se utiliza para descifrar los datos cifrados con la clave pública correspondiente. Solo el propietario de la clave privada tiene acceso a ella y puede utilizarla para descifrar los mensajes cifrados con su clave pública.
- En resumen, en la criptografía asimétrica:
  - Hay dos claves: Se utilizan dos claves distintas pero relacionadas: una clave pública y una clave privada.
  - Cifrado y descifrado: La clave pública se utiliza para cifrar los datos y la clave privada se utiliza para descifrarlos.
  - Autenticación y firma digital: Además de cifrar y descifrar datos, la criptografía asimétrica se utiliza para la autenticación de identidades y la firma digital.
- La criptografía asimétrica se utiliza en una variedad de aplicaciones, como la autenticación de usuarios en sistemas de seguridad, la protección de la integridad de los datos mediante la firma digital y el intercambio seguro de claves para establecer comunicaciones seguras, como en el protocolo SSL/TLS utilizado en la web. Algunos ejemplos comunes de algoritmos de cifrado asimétrico incluyen RSA, DSA y ECC.
:::

:::tip firma digital
- Una firma digital es un método criptográfico que se utiliza para asegurar la integridad y la procedencia de un mensaje, documento o datos electrónicos. Funciona de manera similar a una firma  en papel, pero en lugar de ser escrita a mano, se genera electrónicamente utilizando claves criptográficas.
- Una firma digital es un conjunto de datos asociados a un mensaje que permite asegurar la identidad del firmante y la integridad del mensaje. 
:::

- El Protocolo SSL es un estándar de seguridad fundamental en Internet que protege la privacidad y la integridad de los datos transmitidos entre clientes y servidores. Es ampliamente utilizado en diversas aplicaciones en línea para garantizar la seguridad de las comunicaciones y las transacciones.

:::tip ANALOGIA
- SSL es como un túnel seguro que se crea entre tu dispositivo y el servidor al que te conectas en Internet. Este túnel cifra toda la información que se envía y se recibe, de modo que nadie más puede entenderla ni manipularla mientras viaja por la red.
:::
- Algunos usos: 
  - Protección de Transacciones Financieras: SSL se utiliza para asegurar las transacciones en línea, como compras en tiendas virtuales, protegiendo la información financiera y personal del usuario durante la transferencia.
  - Acceso Seguro a Datos Confidenciales: SSL protege las credenciales de inicio de sesión y la información personal cuando se accede a servicios en línea como banca por Internet, correos electrónicos y redes sociales.
  - Cifrado de Comunicaciones de Correo Electrónico: SSL se utiliza para cifrar los correos electrónicos enviados y recibidos, asegurando la confidencialidad de su contenido y metadatos.
  - Transmisión Segura de Datos Sensibles: SSL protege la transferencia de datos confidenciales a través de formularios web, como información de tarjetas de crédito, contraseñas y otra información personal.
  - Acceso Remoto Seguro a Redes Corporativas: SSL se utiliza en VPN (Redes Privadas Virtuales) para proporcionar un canal seguro de acceso remoto a recursos corporativos, permitiendo a los empleados acceder a información confidencial de la empresa desde ubicaciones externas.

#### HTTP seguro (HTTPS)
- HTTPS , una versión segura de HTTP, utiliza cifrado SSL/TLS para proteger la confidencialidad y la integridad de los datos transmitidos entre un servidor web y un navegador web. Este protocolo se utiliza comúnmente para transacciones seguras en línea, como la banca en línea y el comercio electrónico.
- HTTPS (Hypertext Transfer Protocol Secure) es una extensión del protocolo HTTP utilizado para la transferencia segura de datos a través de Internet. HTTPS utiliza SSL/TLS para cifrar la comunicación entre el navegador del usuario y el servidor web, garantizando la confidencialidad e integridad de los datos transmitidos.
- Características:
  - Cifrado de Datos: HTTPS utiliza SSL/TLS para cifrar los datos durante la transmisión, lo que protege la confidencialidad de la información enviada entre el navegador del usuario y el servidor web.
  - Autenticación del Servidor: HTTPS autentica la identidad del servidor web, lo que garantiza que el usuario esté interactuando con el sitio web correcto y no con un impostor.
  - Integridad de los Datos: HTTPS asegura la integridad de los datos transmitidos, lo que significa que los datos no pueden ser alterados ni manipulados durante la transmisión.

:::tip ANALOGIA
- HTTPS es como una carta sellada en un sobre. Cuando envías una carta importante, la sellas en un sobre para que nadie más pueda ver su contenido mientras viaja por el correo. Del mismo modo, HTTPS sella tus datos en un "sobre" virtual cuando navegas por Internet, asegurándote de que nadie pueda ver tu información personal, como contraseñas o detalles de tarjetas de crédito, mientras navegas por sitios web. Es como una capa de protección adicional que te brinda seguridad y privacidad mientras interactúas en línea.
:::
- Algunos usos: 
  - Comercio Electrónico: HTTPS se utiliza en sitios web de comercio electrónico para proteger la información financiera y personal de los usuarios durante las transacciones en línea, como compras y pagos con tarjeta de crédito.
  - Inicio de Sesión Seguro: Sitios web que requieren inicio de sesión, como correos electrónicos, redes sociales y plataformas de banca en línea, utilizan HTTPS para proteger las credenciales de inicio de sesión de los usuarios.
  - Protección de Datos Personales: Sitios web que manejan datos personales sensibles, como información médica o datos de identificación personal, utilizan HTTPS para proteger la privacidad y confidencialidad de los usuarios.
  - SEO: Los motores de búsqueda favorecen los sitios web seguros y con HTTPS, lo que puede mejorar el posicionamiento en los resultados de búsqueda y aumentar la visibilidad en línea.
  - Seguridad en Aplicaciones Web: Las aplicaciones web que manejan información confidencial, como formularios de solicitud de empleo o registros médicos en línea, utilizan HTTPS para garantizar la seguridad y privacidad de los datos del usuario.
#### SSH
- SSH (Secure Shell) es un protocolo de red que se utiliza para establecer conexiones seguras y cifradas entre un cliente y un servidor. Estas conexiones se utilizan principalmente para acceder y administrar sistemas remotos de forma segura. Cuando se establece una conexión SSH, toda la comunicación entre el cliente y el servidor está cifrada, lo que significa que los datos transmitidos, como contraseñas, comandos y archivos, están protegidos contra la interceptación por parte de terceros.
- SSH es una herramienta esencial para establecer conexiones seguras y cifradas en entornos de red, y se utiliza ampliamente en administración de sistemas, transferencia de archivos y acceso remoto a sistemas y dispositivos.
- SSH (Secure Shell) es un protocolo de red que proporciona un canal seguro para el acceso remoto a sistemas y servidores. 

:::tip ANALOGIA
- Imagina que SSH es como una llave maestra digital que te permite acceder de forma segura a tu casa desde cualquier lugar del mundo. Cuando estás lejos de casa y necesitas entrar, usas esta llave especial para abrir la puerta de manera segura y sin riesgos. Además de abrir la puerta, esta llave también te permite hacer tareas dentro de tu casa, como cambiar la configuración del termostato o encender las luces. En resumen, SSH es como esa llave digital que te brinda acceso seguro y control total sobre tu sistema informático desde cualquier lugar.
:::
- Algunos usos: 
  - Acceso Remoto: SSH permite a los usuarios iniciar sesión de forma segura en sistemas remotos y trabajar en ellos como si estuvieran físicamente presentes en el sistema.
  - Transferencia de Archivos Segura (SFTP): SSH incluye un protocolo llamado SFTP, que proporciona una forma segura de transferir archivos entre sistemas. SFTP cifra todos los datos transmitidos, lo que garantiza la confidencialidad de los archivos transferidos.
  - Túneles de Puertos: SSH puede establecer conexiones (tuneles) seguras que actúan como pasadizos protegidos. Esto es útil cuando necesitas acceder de forma segura a servicios internos de red, como bases de datos o aplicaciones web, desde lugares remotos, manteniendo tus datos seguros y protegidos contra intrusiones.
  - Administración de Dispositivos de Red: SSH se utiliza ampliamente para administrar dispositivos de red, como enrutadores, conmutadores y firewalls. Proporciona una forma segura de configurar y administrar estos dispositivos de forma remota.
  - Copias de Seguridad y Transferencia de Archivos Sensibles: Debido a su cifrado seguro, SSH se utiliza para realizar copias de seguridad de datos sensibles y transferir archivos entre sistemas de manera segura, evitando la interceptación de datos por parte de intrusos.

#### TLS
- TLS (Transport Layer Security) es un protocolo de seguridad que proporciona privacidad e integridad en las comunicaciones a través de una red, como Internet. TLS es el sucesor de SSL (Secure Sockets Layer) y se utiliza ampliamente para asegurar la transmisión de datos entre aplicaciones y servidores.
- TLS garantiza que los datos transmitidos entre un cliente y un servidor estén cifrados, de modo que solo las partes autorizadas puedan acceder a ellos. Además, verifica la identidad del servidor y, opcionalmente, la del cliente, para asegurarse de que la comunicación se realiza con la entidad legítima.
- TLS es un protocolo de seguridad esencial que proporciona cifrado y autenticación para proteger las comunicaciones en Internet y otras redes. Se utiliza en una variedad de aplicaciones para garantizar que los datos transmitidos sean confidenciales y seguros.
- En resumen, TLS es la versión mejorada y más segura de SSL. Aunque los términos a veces se usan indistintamente, es importante utilizar TLS debido a sus mejoras significativas en seguridad.
- TLS (Transport Layer Security) y SSL (Secure Sockets Layer) son protocolos muy similares y tienen objetivos casi idénticos: proporcionar seguridad y privacidad en las comunicaciones a través de redes. Sin embargo, hay diferencias clave entre ellos:
  - Historia y Evolución: 
    - SSL: Fue desarrollado por Netscape en la década de 1990. Las versiones principales fueron SSL 2.0 y SSL 3.0.
    - TLS: Es la evolución de SSL y fue estandarizado por el IETF (Internet Engineering Task Force) en 1999 como TLS 1.0. Desde entonces, ha habido varias versiones.
  - Seguridad Mejorada:
    - TLS: Incluye mejoras de seguridad significativas sobre SSL. Por ejemplo, TLS elimina ciertas vulnerabilidades presentes en SSL y ofrece algoritmos de cifrado más fuertes y mecanismos de autenticación más robustos.
    - SSL: Las versiones de SSL (especialmente SSL 2.0 y SSL 3.0) tienen vulnerabilidades conocidas y no se consideran seguras en la actualidad.
  - Versiones y Compatibilidad:
    - SSL: Las versiones de SSL son SSL 2.0 y SSL 3.0. SSL 2.0 fue rápidamente reemplazado debido a sus numerosas fallas de seguridad, y SSL 3.0 también ha sido deprecado por razones de seguridad.
    - TLS: TLS tiene varias versiones: TLS 1.0, TLS 1.1, TLS 1.2 , TLS 1.3 , etc. Cada versión sucesiva ha mejorado en términos de seguridad y eficiencia.
  - Algoritmos de Cifrado:
    - TLS: Soporta algoritmos de cifrado más modernos y seguros que SSL. Por ejemplo, TLS 1.2 y TLS 1.3 eliminan el uso de algunos algoritmos más antiguos y débiles que eran aceptables en SSL.
    - SSL: Utiliza algoritmos de cifrado más antiguos y menos seguros. Por ejemplo, SSL 3.0 todavía permite el uso de cifrados RC4 y MD5, que tienen vulnerabilidades conocidas.

:::tip ANALOGIA
- TLS es como un túnel secreto y seguro por el que puedes enviar mensajes a alguien sin que nadie más pueda espiarlos. Imagina que estás enviando una carta importante y confidencial. TLS se asegura de que esa carta esté dentro de un sobre muy resistente y que solo el destinatario pueda abrir. Además, TLS verifica que la persona a la que le estás enviando la carta sea realmente quien dice ser. Esto significa que cuando navegas por sitios web, envías correos electrónicos o transfieres archivos, TLS se asegura de que toda la información viaje de forma segura y solo llegue a las personas correctas.
:::


- Algunos usos: 
  - Navegación Segura por Internet: TLS se utiliza en HTTPS (HTTP Secure) para cifrar las comunicaciones entre los navegadores web y los servidores, protegiendo la privacidad de los usuarios mientras navegan por Internet.
  - Correo Electrónico Seguro: TLS se emplea en protocolos de correo electrónico como SMTP, IMAP y POP3 para asegurar la transmisión de correos electrónicos entre servidores y clientes de correo.
  - Transferencia Segura de Archivos: Protocolos como FTPS (FTP Secure) y SFTP (SSH File Transfer Protocol) utilizan TLS para proteger la transferencia de archivos sensibles a través de la red.
  - VPN (Virtual Private Network): Algunas VPN utilizan TLS para crear conexiones seguras y cifradas entre el dispositivo del usuario y la red privada, protegiendo los datos transmitidos contra interceptaciones.
  - Aplicaciones Empresariales: TLS se utiliza en aplicaciones empresariales para asegurar la comunicación entre clientes y servidores, como en servicios de mensajería, bases de datos y sistemas de gestión de contenido.
### Protocolos de propósitos específicos

#### DHCP
- DHCP asigna automáticamente direcciones IP y ajustes de configuración de red a los dispositivos en una red. Elimina la necesidad de asignar manualmente una dirección IP, simplificando así el proceso de configuración de la red.
- DHCP (Dynamic Host Configuration Protocol) es un protocolo de red que se utiliza para asignar automáticamente configuraciones de red a dispositivos en una red. Estas configuraciones pueden incluir direcciones IP, máscaras de subred, puertas de enlace predeterminadas y servidores DNS. DHCP permite que los dispositivos se configuren automáticamente, eliminando la necesidad de que los administradores de red configuren manualmente cada dispositivo.
- Cómo Funciona DHCP
  1. Descubrimiento (DHCP Discover): Un dispositivo cliente envía un mensaje de descubrimiento DHCP a la red para localizar servidores DHCP disponibles.
  2. Oferta (DHCP Offer): Un servidor DHCP responde con una oferta de configuración de red, incluyendo una dirección IP disponible.
  3. Solicitud (DHCP Request): El cliente responde solicitando la configuración específica ofrecida por uno de los servidores DHCP.
  4. Confirmación (DHCP Acknowledge): El servidor DHCP confirma y asigna la configuración al cliente, permitiéndole unirse a la red.
- En resumen, DHCP es un sistema que asigna automáticamente direcciones IP a los dispositivos cuando se conectan a una red, facilitando la gestión y configuración de la red tanto en entornos domésticos como empresariales.

:::tip ANALOGIA
- DHCP es como un conserje en un hotel que asigna habitaciones a los huéspedes cuando llegan. Cuando conectas un dispositivo a la red, DHCP automáticamente le da una "habitación" (dirección IP) sin que tengas que hacer nada.
:::

- Algunos usos: 
  - Asignación Automática de IP: DHCP asigna dinámicamente direcciones IP a dispositivos en la red, simplificando la gestión de la red.
  - Configuración de Redes Empresariales: En redes grandes, DHCP facilita la configuración de dispositivos y reduce la carga administrativa.
  - Redes Domésticas: Los routers domésticos utilizan DHCP para asignar direcciones IP a dispositivos como computadoras, teléfonos y tabletas.
  - Redes Wi-Fi Públicas: Hotspots Wi-Fi utilizan DHCP para asignar direcciones IP a dispositivos de usuarios, permitiéndoles conectarse a Internet rápidamente.
  - Administración de Subredes: DHCP permite una administración eficiente de subredes en redes complejas, asignando configuraciones específicas según la subred.



#### FTP
- FTP es un protocolo de red que se utiliza para transferir archivos de un dispositivo a otro a través de una conexión TCP/IP no cifrada. Con FTP, un usuario puede usar un cliente FTP como FileZilla o FTP Voyager y enviar hasta 2 GB a la vez.
- Muchas organizaciones utilizan FTP debido a su capacidad para enviar archivos grandes o muchos archivos a la vez de una manera rápida y eficiente. Desafortunadamente, esta eficiencia tiene un costo de seguridad, ya que FTP transmite todos los datos en texto plano.
- Por este motivo, muchas organizaciones optan por utilizar una versión segura de FTP llamada File Transfer Protocol Secure Sockets Layer (FTPS), que funciona igual pero utiliza cifrado SSL para ocultar los datos transferidos.
- En resumen, FTP (File Transfer Protocol) es un protocolo de red utilizado para transferir archivos entre un cliente y un servidor a través de una red, como Internet. FTP permite a los usuarios subir, descargar, renombrar, eliminar y gestionar archivos en un servidor remoto.
- Cómo Funciona FTP:
  1. Conexión: El cliente FTP establece una conexión con el servidor FTP utilizando las credenciales (nombre de usuario y contraseña) proporcionadas.
  2. Transferencia de Archivos: Una vez conectado, el cliente puede navegar por el sistema de archivos del servidor y transferir archivos de ida y vuelta entre el cliente y el servidor.
  3. Comandos y Respuestas: El cliente envía comandos al servidor (por ejemplo, para cambiar de directorio, listar archivos, subir o descargar archivos), y el servidor responde con el estado de esos comandos.
- Entonces FTP es un protocolo que facilita la transferencia de archivos entre computadoras a través de una red, y se utiliza ampliamente tanto para la gestión de sitios web como para la transferencia y el almacenamiento seguro de archivos.

:::tip ANALOGIA
- FTP es como un servicio de mensajería para archivos en Internet. Imagina que tienes un montón de paquetes (archivos) que necesitas enviar a alguien o recibir de alguien. FTP es la "oficina de mensajería" que hace esto posible.
:::

- Algunos usos: 
  - Transferencia de Archivos Grandes: FTP se utiliza para transferir archivos grandes entre sistemas, especialmente en entornos donde se necesitan transferencias eficientes y confiables.
  - Publicación de Contenidos Web: Desarrolladores web utilizan FTP para subir archivos y actualizaciones a servidores web.
  - Backup y Recuperación de Datos: Empresas usan FTP para realizar copias de seguridad de datos importantes y almacenarlas en ubicaciones remotas.
  - Distribución de Software: FTP es utilizado para distribuir software y actualizaciones a los usuarios finales.
  - Colaboración en Proyectos: Equipos de trabajo utilizan FTP para compartir archivos y documentos entre miembros de diferentes ubicaciones.


#### FTPS
- FTPS (File Transfer Protocol Secure) es una extensión segura del protocolo FTP que agrega soporte para el cifrado SSL/TLS para proteger las transferencias de archivos. FTPS proporciona autenticación del servidor y del cliente, así como cifrado de los datos en tránsito para asegurar la privacidad y la integridad de la comunicación.
- Cómo Funciona FTPS:
  1. Conexión Segura: El cliente FTPS se conecta al servidor FTPS utilizando SSL/TLS para establecer una conexión cifrada y autenticada.
  2. Autenticación: El servidor puede requerir un certificado digital del cliente para autenticación adicional, además de las credenciales de nombre de usuario y contraseña.
  3. Transferencia de Archivos: Los archivos se transfieren entre el cliente y el servidor a través de esta conexión segura, protegiendo los datos de la interceptación y manipulación.
  4. Comandos y Respuestas: Similar a FTP, el cliente envía comandos al servidor (cambiar directorio, listar archivos, subir/descargar archivos) y el servidor responde, pero todos estos intercambios están cifrados.

:::tip ANALOGIA
- FTPS es como un servicio de mensajería con seguridad extra. Imagina que necesitas enviar paquetes (archivos) importantes y quieres asegurarte de que nadie pueda abrirlos o cambiarlos mientras están en tránsito. FTPS es como usar un mensajero con una caja fuerte que solo tú y el destinatario pueden abrir.
:::


- Algunos usos: 
  - Transferencia Segura de Datos Confidenciales: FTPS se usa para enviar y recibir archivos que contienen información sensible, asegurando que los datos no puedan ser interceptados.
  - Copia de Seguridad de Datos: Empresas utilizan FTPS para realizar copias de seguridad seguras de datos críticos en servidores remotos.
  - Intercambio de Información Empresarial: Las organizaciones utilizan FTPS para compartir archivos con socios comerciales de forma segura.
  - Cumplimiento Normativo: FTPS es utilizado en industrias reguladas que requieren métodos seguros de transferencia de datos, como salud y finanzas.
  - Gestión Segura de Sitios Web: Los desarrolladores web usan FTPS para subir y administrar contenido en servidores web, protegiendo los datos de acceso no autorizado.


#### POP3
- POP3 es un protocolo de red que permite a un servidor recuperar correos electrónicos de un servidor remoto y descargarlos al dispositivo local. Cada vez que el cliente se conecta al servidor a través de TCP, descarga automáticamente todos los mensajes nuevos, haciéndolos accesibles al usuario tanto en línea como fuera de línea.
- Las plataformas de correo electrónico como Microsoft Outlook pueden usar POP3 para recopilar mensajes de correo electrónico de servidores remotos a través de TCP/IP para que estén disponibles sin conexión.
- Según la configuración predeterminada, todos los correos electrónicos se eliminan del servidor automáticamente una vez que se completa la descarga, pero el usuario también puede configurarlo para almacenar correos electrónicos en el servidor durante un período de tiempo determinado.
- Entonces, POP3 (Post Office Protocol 3) es un protocolo de correo electrónico utilizado para recuperar mensajes de un servidor de correo a un cliente de correo local. POP3 permite a los usuarios descargar sus correos electrónicos desde el servidor a su dispositivo local, y luego gestionarlos sin necesidad de estar continuamente conectado al servidor.
- Cómo Funciona POP3:
  1. Conexión al Servidor: El cliente de correo electrónico se conecta al servidor de correo utilizando las credenciales del usuario.
  2. Autenticación: El cliente se autentica en el servidor con el nombre de usuario y la contraseña.
  3. Descarga de Mensajes: Los correos electrónicos se descargan del servidor al dispositivo local. Por defecto, POP3 borra los mensajes del servidor una vez descargados, aunque esto puede ser configurado para mantener una copia en el servidor.
  4. Gestión Local: Los correos se gestionan localmente en el dispositivo del usuario, incluyendo la lectura, organización y eliminación de mensajes.

:::tip ANALOGIA
- POP3 es como ir al buzón de correos de tu casa para recoger tus cartas y llevarlas adentro para leerlas cuando quieras. Una vez que recoges las cartas, ya no están en el buzón.
:::

- Algunos usos: 
  - Acceso a Correo sin Conexión Permanente: POP3 permite a los usuarios acceder a sus correos electrónicos sin necesidad de estar conectados continuamente a Internet.
  - Descarga y Almacenamiento Local: Facilita la descarga y almacenamiento de correos electrónicos en dispositivos locales, liberando espacio en el servidor.
  - Gestión Personal de Correos: Permite la gestión personal de correos electrónicos en el dispositivo del usuario, independientemente del servidor de correo.
  - Compatibilidad con Clientes de Correo: POP3 es compatible con la mayoría de los clientes de correo electrónico, como Outlook, Thunderbird y Apple Mail.
  - Uso en Conexiones de Baja Velocidad: Es útil en entornos con conexiones a Internet lentas o intermitentes, ya que permite descargar y leer correos sin necesidad de conexión continua.

#### IMAP
- IMAP es otro protocolo que se utiliza para recuperar correos electrónicos. Con IMAP, cada vez que un usuario hace clic en un correo electrónico, no se descarga ni se almacena localmente en su computadora, sino que permanece en el servidor remoto, lo que le permite consultar su correo electrónico desde múltiples dispositivos.
- La principal diferencia entre IMAP y POP3 es que este último sólo permite a los usuarios descargar y acceder a correos electrónicos localmente en la misma computadora. IMAP no elimina automáticamente los correos electrónicos del servidor.
- Entonces, IMAP (Internet Message Access Protocol) es un protocolo de correo electrónico que permite a los usuarios acceder y gestionar sus correos electrónicos en un servidor remoto. A diferencia de POP3, IMAP permite trabajar con los correos directamente en el servidor, facilitando la sincronización entre múltiples dispositivos.
- Cómo Funciona IMAP:
  1. Conexión al Servidor: El cliente de correo se conecta al servidor de correo utilizando las credenciales del usuario.
  2. Autenticación: El cliente se autentica en el servidor con el nombre de usuario y la contraseña.
  3. Acceso a Mensajes: Los correos electrónicos permanecen en el servidor y el cliente puede visualizar, organizar y gestionar estos mensajes sin descargarlos completamente.
  4. Sincronización: Las acciones realizadas en el cliente (como leer, mover o eliminar correos) se sincronizan con el servidor, reflejándose en todos los dispositivos conectados.

:::tip ANALOGIA
- IMAP es como tener tu buzón de correos en la nube. Imagina que todas tus cartas (correos) están guardadas en un servicio de almacenamiento en la nube, y puedes acceder a ellas desde cualquier dispositivo, sin tener que descargarlas todas a cada dispositivo.
:::


- Algunos usos: 
  - Acceso Multi-dispositivo: Permite acceder y gestionar correos electrónicos desde múltiples dispositivos, manteniendo la sincronización en tiempo real.
  - Trabajo en Equipo: Facilita la colaboración al permitir que varios usuarios accedan a una misma cuenta de correo y vean los cambios en tiempo real.
  - Gestión de Correo en la Nube: Los correos se almacenan en el servidor, liberando espacio en los dispositivos locales y permitiendo el acceso desde cualquier lugar.
  - Organización Avanzada de Correos: Permite la creación y gestión de carpetas en el servidor para organizar los correos electrónicos de manera eficiente.
  - Acceso Offline: Aunque IMAP trabaja principalmente en línea, muchos clientes de correo permiten almacenar copias locales para acceder a los correos sin conexión.



#### SMTP
- SMTP es un protocolo de entrega de correo que permite a un dispositivo enviar  correo electrónicos a un servidor remoto con una conexión TCP. Muchos proveedores, incluidos Microsoft Outlook, Gmail y Yahoo Mail, utilizan SMTP para enviar mensajes a servidores remotos.
- Brevemente, una organización primero creará un servidor SMTP, al que los empleados pueden conectarse  a través de un agente de usuario de correo (MUA) o un cliente de correo electrónico como Gmail. A través de esta conexión, pueden enviar correos electrónicos al servidor SMTP y a otros usuarios.

:::tip Cuando hablamos de enviar correos electrónicos al servidor SMTP y a otros usuarios, nos referimos a dos casos distintos
- Enviar correos electrónicos al servidor SMTP: Esto significa que un usuario o una aplicación envía un correo electrónico desde su cliente de correo electrónico (como Outlook o Gmail) a través de una conexión SMTP al servidor SMTP designado para su cuenta de correo electrónico. El servidor SMTP es responsable de recibir este correo electrónico entrante y luego de procesarlo para su entrega al destinatario final.
- Enviar correos electrónicos a otros usuarios: Esto se refiere al acto de enviar un correo electrónico desde un remitente a uno o varios destinatarios a través de un servidor SMTP. Una vez que el servidor SMTP ha recibido el correo electrónico entrante, puede procesarlo y reenviarlo a otros servidores SMTP si es necesario, hasta que finalmente llegue al servidor SMTP del destinatario. Desde allí, el correo electrónico se almacena en la bandeja de entrada del destinatario para que pueda ser leído.
-  Cuando hablo de "usuarios", me refiero a las personas o entidades que utilizan el correo electrónico para enviar y recibir mensajes. Cada usuario tiene una dirección de correo electrónico única que se utiliza para identificarlos en el sistema de correo electrónico. Por lo tanto, cuando digo "usuarios", me refiero a las personas u organizaciones que utilizan el correo electrónico como medio de comunicación.
:::


- A diferencia de POP3, SMTP no puede recuperar correos electrónicos de un buzón y, a diferencia de POP3, no los elimina automáticamente.
- Entonces, SMTP (Simple Mail Transfer Protocol) es un protocolo de comunicación utilizado para enviar correos electrónicos desde un cliente de correo electrónico a un servidor de correo o entre servidores de correo. SMTP se encarga de la transmisión y entrega de correos electrónicos en la red.
- Cómo Funciona SMTP:
  1. Conexión al Servidor SMTP: El cliente de correo electrónico se conecta al servidor SMTP utilizando un nombre de usuario y contraseña.
  2. Autenticación: El cliente se autentica en el servidor SMTP con las credenciales del usuario.
  3. Envío de Mensaje: El cliente de correo envía el mensaje al servidor SMTP, incluyendo la dirección del remitente, la dirección del destinatario y el contenido del mensaje.
  4. Reenvío y Entrega: El servidor SMTP puede reenviar el mensaje a otros servidores SMTP si el destinatario no está en el mismo dominio. Finalmente, el servidor del destinatario entrega el correo a la bandeja de entrada correspondiente.
  5. Confirmación de Entrega: El servidor SMTP puede enviar una confirmación de entrega al cliente de correo si está configurado para hacerlo.
- En resumen, para enviar un correo electrónico se utiliza SMTP que te permite transferir el correo entre servidores, mientras que para leer un correo electrónico, se utilizan protocolos como POP3 o IMAP para acceder y gestionar los correos electrónicos desde el cliente de correo del destinatario.



:::tip ANALOGIA
- SMTP es como el cartero que recoge y entrega tu correo. Imagina que escribes una carta y la llevas a la oficina de correos. El cartero (SMTP) se encarga de recoger tu carta y entregarla a la oficina de correos de la persona a la que estás escribiendo.
:::
- Algunos usos: 
  - Envío de Correos Electrónicos: SMTP es el protocolo estándar para enviar correos electrónicos desde clientes de correo electrónico como Outlook, Gmail y Thunderbird.
  - Reenvío de Correos entre Servidores: SMTP permite la transmisión de correos electrónicos entre diferentes servidores de correo en la red.
  - Notificaciones Automatizadas: Servicios y aplicaciones utilizan SMTP para enviar notificaciones por correo electrónico a los usuarios.
  - Marketing por Correo Electrónico: Plataformas de marketing utilizan SMTP para enviar campañas de correo electrónico a múltiples destinatarios.
  - Formularios de Contacto en Páginas Web: Los formularios de contacto en sitios web utilizan SMTP para enviar los mensajes de los usuarios a la dirección de correo designada.
