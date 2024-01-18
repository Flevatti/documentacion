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
-  El objeto de búfer viene con los métodos toString()y los toJSON(), que devuelven todo el contenido de un búfer en dos formatos diferentes.
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
- El lenght es de 10, el código ASCII es un solo carácter. 
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
   -	En el modo de flujo , los datos se leen del sistema subyacente automáticamente y se proporcionan a una aplicación lo más rápido posible mediante eventos a través de la interfaz EventEmitter.
   -	En el modo de pausa , el  método  stream.read() debe llamarse explícitamente para leer fragmentos de datos de la secuencia.
- Una  stream readable puede estar en modo de objeto o no, independientemente de si está en modo de flujo o en modo de pausa
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
   -	La fuente de información no se destruirá si el destino emite un cierre o un error.
   -	No se puede proporcionar una devolución de llamada para saber cuándo finalizó la tubería (se pasaron todos los datos)


- Para solucionar estos problema, se creo el método pipeline() que se introdujo en Nodejs 10.x o una versión posterior.
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