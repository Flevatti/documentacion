---
sidebar_position: 1
---
# Lo Basico de Node

## ¿Qué es node?
- [Info en Ingles](https://nodejs.org/en/about)
-	Es para ejecutar javascript en el servidor.
-	Node.js® es un entorno de ejecución para JavaScript construido con V8, motor de JavaScript de Chrome.
-	Node.js es un entorno de ejecución multiplataforma, de código abierto, para la capa del servidor (pero no limitándose a ello) basado en el lenguaje de programación JavaScript.
-	Al contrario que la mayoría del código JavaScript, no se ejecuta en un navegador, NODE FUNCIONA EN EL SERVIDOR.
-	Ideado como un entorno de ejecución de JavaScript orientado a eventos asíncronos, Node.js está diseñado para crear aplicaciones network escalables.
-	HTTP es un elemento destacado en Node.js. Esto hace que Node.js sea muy adecuado para la base de una librería o un framework web.
-	En términos simples node no bloquea las operaciones, no queda a la espera de por ejemplo una solicitud a la base de datos, node reanudará las operaciones cuando vuelva la respuesta. Esto permite que Node.js maneje miles de conexiones simultáneas con un solo servidor sin introducir la carga de administrar la concurrencia de subprocesos, lo que podría ser una fuente importante de errores.
-	En Node.js, los nuevos estándares de ECMAScript se pueden usar sin problemas, ya que no tiene que esperar a que todos sus usuarios actualicen sus navegadores.  
-	NPM: Cuenta con más de 1 millón de paquetes, módulos o bibliotecas disponibles para su utilización.
-	Se puede hacer aplicaciones de escritorio , lineas de comandos , etc.

:::tip entorno de ejecución
- Un entorno de tiempo de ejecución es un código que proporciona los recursos y servicios necesarios para ejecutar aplicaciones que fueron creadas con un determinado lenguaje de programación.
- Actúan como un pequeño sistema operativo y proporcionan toda la funcionalidad que los programas necesitan para ejecutarse.
:::
:::tip
V8 es el entorno de ejecución para JavaScript creado para Google Chrome. Es software libre desde 2008, está escrito en C++ y compila el código fuente JavaScript en código de máquina en lugar de interpretarlo en tiempo real.
:::

## Instalación
 
 - [Link](https://nodejs.org/en/download)
 - Reiniciar computadora (recomendado)
 - Ejecutar el comando : 
 ```powershell
 node -v
 ```
 ## Probar
 - Usar la terminal integrada de Visual studio code o una consola en la ubicación del proyecto.
- En Node no funcionara addEventListener ya que se ejecuta en el navegador.
- En el ejemplo utilizamos [console.count()](https://developer.mozilla.org/es/docs/Web/API/Console/count)

app.js
```js
const frutas = ["banana", "banana", "pera", "banana"];

frutas.forEach((fruta) => {
  console.count(fruta);
});

```
- Luego ejecutamos el siguiente comando:
```powershell
node app.js
```
:::tip 
- Ejecutamos el archivo app.js en el servidor.
- Se ejecuta en la consola.
- Se ejecuta en nuestra maquina/servidor.
:::
## Comando node
- El comando node se utiliza para ejecutar archivos JavaScript en el entorno de Node.js. Cuando se utiliza el comando "node nombre_archivo.js", el comando node lee el archivo y ejecuta el código JavaScript que contiene.  
- Por ejemplo, si creas un archivo llamado hola_mundo.js con el siguiente código:
```js
console.log('¡Hola, Mundo!');
```
- Puedes ejecutar el archivo utilizando el comando node de la siguiente manera:

```powershell
node hola_mundo.js
```
:::tip Observación
- Esto imprimirá el mensaje "¡Hola, Mundo!" en la consola.
:::

- El comando node también se puede utilizar para ejecutar código JavaScript directamente en la línea de comandos, sin necesidad de crear un archivo. Por ejemplo, el siguiente comando imprimirá el mensaje "¡Hola, Mundo!" en la consola:

```powershell
node -e "console.log('¡Hola, Mundo!')"
```
- El comando node también tiene varias opciones que se pueden utilizar para configurar el entorno de ejecución de Node.js. Por ejemplo, la opción --experimental-permissions se utiliza para habilitar características experimentales relacionadas con los permisos y la seguridad en Node.js. La opción --allow-fs-read se utiliza para permitir el acceso de lectura al sistema de archivos a archivos o directorios específicos. La opción --allow-fs-write se utiliza para permitir el acceso de escritura al sistema de archivos a archivos o directorios específicos.
- Por ejemplo, el siguiente comando permite el acceso de lectura al sistema de archivos al archivo hola_mundo.js:
```powershell
node --experimental-permissions --allow-fs-read=/ruta/a/hola_mundo.js hola_mundo.js
```
:::tip
- El comando node también tiene otras opciones que se pueden utilizar para configurar el entorno de ejecución de Node.js. Para obtener más información sobre estas opciones, puedes consultar la documentación de Node.js.

:::
## Modulos 
- Node.js tiene un sistema de módulos incorporado.
- Un archivo de Node.js puede importar la funcionalidad expuesta por otros archivos.
- Al importar, la extensión `.js` es opcional al especificar la ruta del archivo.


frutas.js
```js
const frutas = ["banana", "banana", "pera", "banana"];

// Exportar el array frutas
module.exports = frutas;

```
app.js
```js
// Importar el array frutas
// Podes poner cualquier nombre
// Podes especificar la extensión .js o no , es opcional.
const frutero = require('./frutas');
frutero.forEach((frutero) => {
  console.count(frutero);
});

```
Otro ejemplo:
-  Solo se puede usar un module.exports por archivo.
- Pero se puede exportar varios/as objetos/funciones/constantes/etc: Para esto se recurre a un objeto ({}).


frutas.js
```js
const frutas = ["banana", "banana", "pera", "banana"];
const dinero = 1000;
// Exportar el array frutas y el const dinero
module.exports = {
    // Si el nombre de la propiedad y el valor son lo mismo , se puede omitir el valor.
    frutas : frutas ,
    dinero 
}

```
app.js
```js
// Importar el array frutas y la const dinero
// Podes especificar la extensión .js o no , es opcional.
// Utilizando destructuring: 
const {frutas,dinero} = require('./frutas');
frutas.forEach((frutas) => {
  console.count(frutas);
});
console.log(dinero);

```
:::tip Módulos 
-	Desde ahora hablaremos mucho sobre los módulos (puede que los nombre como paquete, paquetito, biblioteca, dependencia, etc).
-	Además de utilizar módulos externos con NPM, también [node cuenta con una gama de ellos incorporado](https://nodejs.org/dist/latest-v16.x/docs/api/)


:::

### require().default
- Cuando se usan exportaciones por defecto de ES Modules (`export default`), Node.js crea una propiedad llamada `default` que contiene el valor exportado.
- La declaración `import X from "archivo"` maneja automáticamente las exportaciones por defecto (`export default`), por lo que no necesitas acceder a `.default`.
- En cambio, cuando se usa CommonJS con `require()`, si el archivo proviene de un módulo ES (con `export default`), el valor exportado se encuentra dentro de la propiedad `default`, por lo que debes acceder así: `require("archivo").default`.
- Para evitar esta diferencia de comportamiento entre sistemas de módulos, en CommonJS se recomienda usar `module.exports` en lugar de `export default`.
#### Ejemplo
Fruta.js
```js
const manzana = "Manzana";
export default manzana;

//  Tiene el siguiente formato (es un objeto):
// {“default” : manzana}

```
App.js
```js
const fruta = require("./fruta").default;

console.log(fruta);

```

## package.json
- [package.json](https://docs.npmjs.com/cli/v10/configuring-npm/package-json)
- El archivo package.json es un archivo de metadatos que contiene información sobre un proyecto Node.js, como su nombre, versión, dependencias y scripts. Se utiliza para gestionar las dependencias y scripts del proyecto, lo que facilita su instalación y manejo.
- Algunas de sus propiedades son:
  - name: el nombre del proyecto.
  - version: la versión del proyecto.
  - description: una descripción breve del proyecto.
  - main: el punto de entrada del proyecto.
  - scripts: un conjunto de scripts que se pueden ejecutar utilizando el comando npm run.
  - dependencies: una lista de dependencias de producción y sus versiones.
  - devDependencies: una lista de dependencias de desarrollo y sus versiones.
  - author: el autor del proyecto.
  - license: la licencia bajo la cual se distribuye el proyecto.
  - repository: el repositorio donde se aloja el proyecto.
  - bugs: la URL para reportar errores.
  - homepage: la URL de la página de inicio del proyecto.
- Estas propiedades proporcionan información importante sobre el proyecto y facilitan su gestión y distribución.
-	Sirve para mantener un orden de los paquetes.
-	Contiene información de nuestro proyecto 
-	Tiene un listado de los paquetes (y sus versiones) que utiliza el proyecto 
-	Tiene información sobre nuestro proyecto, lo más relevante en estos momentos serán sus dependencias y scripts
-	npm y yarn almacena los nombres y versiones de todos los paquetes instalados.


Para crear el archivo: 
```powershell
npm init -y
```
#### Archivo package.json
- name = Nombre del proyecto
- versión = versión del proyecto
- description = descripción del proyecto
- type (no está, pero lo puedes añadir) : Especifica que [sistema de módulo ](https://lenguajejs.com/automatizadores/introduccion/commonjs-vs-es-modules/) usar.  Con el valor "module" usa ESM, en caso contrario usa CommonJS.
- el objeto scripts sirve para añadir lineas de comando 



 Ejemplo de scripts: 
 ```js
 // “nombre del comando”: “lo que se va a ejecutar al invocarlo”
 "scripts": {
  "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
  "start": "npm run dev",
  "unit": "jest --config test/unit/jest.conf.js --coverage",
  "test": "npm run unit",
  "lint": "eslint --ext .js,.vue src test/unit",
  "build": "node build/build.js"
}

 ```


:::tip script 

-	Estos scripts son comandos. Puede ejecutarlos llamando npm run XXXX, donde "XXXX" es el nombre del comando. Ejemplo: npm run dev
-	Puede usar el nombre que desee para un comando y los scripts pueden hacer literalmente cualquier cosa que desee.
  ```js
  // cómo se puede ver , escribir node index.js es lo mismo que escribir npm run start
  "scripts": {
  "start": "node index.js"
}
  ```
  ```js
  // Al escribir npm run start por consola estaría ejecutando el app.js
  // npm run start === node app.js

  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1" ,
    "start" : "node app.js"
  },

  ```
- El comando con el nombre "start" es el unico que no necesita la palabra run para ejecutarlo.
:::
 - El objeto dependencies tiene las dependencias que necesitan su proyecto.
 - El objeto devDependencies tiene las dependencias que son de desarrollo (herramientas para el desarrollador) .




## NPM
 - Cuando instalamos Node, instalamos [NPM](https://www.npmjs.com/)
-	Es el administrador de paquetes o dependecias estándar de Node.js.
-	Repositorio de código de un solo idioma más grande de la Tierra.
-	axios, express, jsonwebtoken, sequelize, son algunos paquetes, dependencias (códigos) que solucionan problemas, es tu elección utilizarlos (A menos que quieras reinventar la rueda).
- [yarn ](https://yarnpkg.com/) es una alternativa al cli(Interfaz de línea de comandos) de npm.

Ejemplo: 
- Para instalar un paquete hay que ubicarse en el proyecto en una consola.

Instalar un paquete de forma local:
```powershell
     npm install  nombre-paquete
```
Instalar un paquete de forma global:
```powershell
     npm install -g  nombre-paquete
```
Actualiza todos los paquete:
```powershell
npm update 
```
Actualiza un paquete especifico:
```powershell
npm update nombre-paquete
```
Desintala un paquete global 
```powershell
npm uninstall -g nombre-paquete
```
Desintala un paquete local 
```powershell
npm uninstall nombre-paquete
```
Ver un listado con las dependencias  locales
```powershell
npm list
```
Ver un listado con las dependencias globales
```powershell
npm list -g
```
Instalar una version especifica de una dependencia
- X.XX.X  = Version
```powershell
npm i nombre-paquete@X.XX.X
```


Instalar una dependencia como devDependencies
```powershell
npm i -D nobre-paquete
O
npm install --save-dev nombre-paquete


```


#### Opcion --save
- La opción --save en Node.js se utiliza para instalar un paquete y guardarlo como una dependencia en el archivo package.json. Esto significa que el paquete se agregará a la sección "dependencias" del archivo package.json.
- Por ejemplo, si deseas instalar el paquete "express" y guardarlo como una dependencia, puedes usar el siguiente comando:
```powershell
npm install express --save
```
- Este comando instalará el paquete "express" y lo agregará a la sección "dependencias" del archivo package.json.
- Aquí hay un ejemplo de cómo se vería el archivo package.json después de ejecutar el comando anterior:

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "description": "My app",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "dependencies": {
    "express": "^4.17.1"
  },
  "author": "",
  "license": "ISC"
}
```
:::tip
- A partir de la versión 5.0.0 de npm, la opción --save ya no es necesaria, ya que npm guardará automáticamente el paquete como una dependencia cuando se instale.

:::
## Locales vs Globales
-	Existen paquetes o dependencias que se instalan en nuestro proyecto (como lo hemos trabajado hasta ahora) . 
- Para los locales se utiliza: npm install nombre-paquete y crea la carpeta node_modules
-	Pero también existe la posibilidad de hacer instalaciones de manera global (imagina que es como instalar un programa en tu pc que puede ser accedido de cualquier parte)
- Para los globales se utiliza: npm install -g nombre-paquete y se instala en la PC

Ejemplo de dependencia local:
1. Instalamos [cowsay](https://www.npmjs.com/package/cowsay) de forma local
:::tip
Todos los paquete de npm tienen una pagina donde nos dice su documentacion (como instalar , etc).
:::
:::tip Es igual 
  npm install = npm i
:::
Comando en el proyecto por consola: 
```powershell
npm i cowsay
```
 Al instalar paquetes de forma local, se crea la carpeta node_modules que contiene todos los modulos de node que gestionamos con package.json.

2. Utilizamos el paquete que instalamos

app.js
```js
// Importamos el modulo que instalamos
var cowsay = require("cowsay");

console.log(cowsay.say({
    text : "Soy una vaca",
    e : "oO",
    T : "U "
}));

```
:::tip
 Si se elimina la carpeta node_modules , tenemos el package.json como respaldo con las dependencias (y sus versiones) que utiliza nuestro proyecto.
 ```js
{
  "name": "practica",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "cowsay": "^1.5.0"
  }
}

```
:::

:::warning
Nunca se comparte la carpeta node_modules , solo se comparte los archivos estáticos(JS , ETC) + package.json

:::


:::warning Situacion
Si nos pasan un proyecto con archivos estáticos(JS) y el archivo package.json

Tenemos que usar el comando de consola:
```powershell
npm i 
o
npm install
```
 El comando lee el package.json y instala las dependencias necesarias(crea la carpeta node_modules).
:::


Ejemplo de dependencia global:
1.  Instalamos  la misma dependencia de forma global
  



 Usamos el comando en cualquier ubicación (Ya que es global) para instalarlo
```powershell
npm install -g cowsay  
 o
npm i -g cowsay
```
 Se instala en nuestro equipo.

2. Para usarlo:

 Usamos la palabra reservada cowsay
```powershell
cowsay Soy una vaca 
o     
cowsay javascript
```
 Y nos aparece lo mismo.

 Para ver los modulos instalado de forma global:

 ```powershell
 npm list -g
 ``` 
Independiente de la carpeta que nos encontremos, podemos ejecutar estos comando que utilizan dependencias globales.

## Node_modules
- El directorio node_modules es donde se instalan los paquetes de npm (Node Package Manager) en un proyecto de Node.js. Cuando instalas un paquete usando npm, se descarga y guarda en este directorio.
- Por ejemplo, si ejecutas npm install express, se descargará y guardará el paquete express en el directorio node_modules. Luego, puedes requerir el paquete en tus archivos de código usando la función require de Node.js.
- El directorio node_modules es donde se instalan las dependencias de tu proyecto Node.js. Cuando ejecutas npm install, npm busca en el archivo package.json las dependencias especificadas y las instala en el directorio node_modules.
- Cada dependencia se instala en su propia carpeta dentro de node_modules. Cada carpeta contiene los archivos de la dependencia, incluyendo el archivo package.json de la dependencia.
- Es importante mencionar que no se recomienda subir el directorio node_modules a GitHub porque puede aumentar significativamente el tamaño del repositorio y además, cada desarrollador puede tener diferentes versiones de las dependencias. En su lugar, se recomienda especificar las dependencias en el archivo package.json y ejecutar npm install en cada máquina donde se vaya a ejecutar el proyecto.
## NPX
- Ejecuta un código sin necesidad de instalarlo de forma global.
- Ejecuta algo que no esta instalado en nuestra computadora, pero simula lo que hubiéramos hecho de forma global.
- Posiblemente se toparán con este comando a futuro (sobretodo si trabajan con React.js), bueno esto ejecuta un paquete de npm sin necesidad de instalarlo de forma global o local.

```powershell
npx cowsay Soy una vaca
```
Ejemplo: 
1. Desinstalamos cowsay (que estaba instalado de forma global) y luego intentamos ejecutarlo, esto nos dará un error:
```powershell
npm uninstall -g cowsay
cowsay javascript
```
2. Ahora ejecute:
```powershell
npx cowsay javascript
```
- El comando NPX sirve para ejecutar paquetes locales o remotos:
  -  Ejecución de Paquetes Locales: Cuando usás npx, busca el paquete en el directorio node_modules de tu proyecto (donde está instalado localmente). Si encuentra el paquete allí, lo ejecuta directamente.
  -  Ejecución de Paquetes Remotos: Si el paquete no está instalado localmente, npx puede descargar y ejecutar el paquete directamente desde el registro de npm sin necesidad de instalarlo en tu sistema o proyecto.
- NPX nos permite ejecutar paquetes de manera local o remota:
  -  Instalación Local:
      -	Ventaja: Si instalás Prisma localmente con npm install prisma --save-dev, el paquete ya está disponible en el directorio node_modules de tu proyecto. Al ejecutarlo con npx, npx ejecutará el comando directamente desde la instalación local, lo cual es rápido ya que no necesita descargar nada adicional.
  -  Sin Instalación Local:
      -	Primer Uso: Si no tenés prisma instalado localmente y usás npx prisma init, npx descargará temporalmente el paquete desde el registro de npm para ejecutar el comando.
      -	Desventaja: Este proceso puede ser un poco más lento, ya que npx necesita descargar el paquete y ejecutarlo en esa instancia.





## package-lock.json

-	En la versión 5, npm introdujo el archivo package-lock.json.
-	El objetivo del package-lock.json es realizar un seguimiento de la versión exacta de cada paquete que se instala.
-	package-lock.json sencillamente evita este comportamiento general de actualizar versiones  por notación ([iconos](https://dev.to/typescripttv/understanding-npm-versioning-3hn4)) de modo que cuando alguien clona nuestro repositorio y ejecuta npm install en su equipo, npm examinará package-lock.json e instalará la versión exacta de los paquete que nosotros habíamos instalado, ignorando así los ^ y ~ de package.json.
-	Realmente npm install no ignora las versiones de package.json así como no ignora package-lock.json.  Lo que hace es verificar que package.json y package-lock.json esten en sincronía.  Esto es, si las notaciones ([iconos](https://dev.to/typescripttv/understanding-npm-versioning-3hn4)) descritas en package.json concuerdan con las versiones fijadas en package-lock.json, npm install usará estas última completamente
-	Si se modifica el package.json manualmente , npm considera al package.json la verdad absoluta , de modo que instala dicha versión y actualiza el package-lock.json.
-	cuando ejecute npm install, será capaz de reproducir el mismo árbol que el de su compañero sin problemas asociados (la misma versión)

:::tip npm update 
- [npm 7 actualización  ](https://github.com/npm/cli/issues/708)
-	Desde npm versión 7 en adelante, al ejecutar npm update no cambiará el archivo package.json sino que package-lock.json llevará el control de la versión más reciente a utilizar.
-	Ejecute npm list para saber la versión actual o bien abra el archivo package-lock.json.


:::

## Actualizaciones de modulo
- [npm-update 1 ](https://docs.npmjs.com/cli/v7/commands/npm-update#description)
- [semantica](https://dev.to/typescripttv/understanding-npm-versioning-3hn4)
-	~1.2.3 Actualiza las versiones parches, por ende actualizará menor > 1.3.0
-	^1.2.3 Actualiza versiones menores incluyendo parches, por ende actualizará menor > 2.0.0
- [versionlens ](https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens) te ayuda a visualizar los paquetes actualmente utilizados.

Ejemplo:
1. Instalamos una version especifica de [moment](https://www.npmjs.com/package/moment)

```powershell
npm i moment@2.19.1
```
package.json:
```js
 "dependencies": {
    "cowsay": "^1.5.0",
    "moment": "^2.19.1"
  }

```
2. Cambiamos el package.json:
```js
 "dependencies": {
    "cowsay": "^1.5.0",
    "moment": "~2.19.1"
  }

```
3. Actualizamos y vemos el listado de dependencias con sus versiones correspondiente.
```powershell
npm update
npm list

```
Cómo puedes ver solo se actualizó hasta la versión 2.19.4

Otro Ejemplo: 
1. Desinstalar e instalar nuevamente:
```powershell
npm uninstall moment
npm i moment@2.19.1
```
2. Cambiamos el package.json
```js
"dependencies": {
    "cowsay": "^1.5.0",
    "moment": "^2.19.1"
  }

```
3. Actualizamos y vemos el listado de dependencias 
```powershell
npm update
npm list

```
Ahora se actualizó a la versión 2.29.1 (al 3 enero 2021, puede que tu veas otra versión más reciente)

Otro Ejemplo:
1.  Volvamos a desinstalar e instalaremos sin una versión específica:
```powershell
npm uninstall moment
npm i moment
```
Se instala la última versión disponible 2.29.1 (al 3 enero 2021, puede que tu veas otra versión más reciente)

## devDependencies
-	devDependencies hace referencia a los paquetes que no se necesitan para producción.
-	están destinados a instalarse solo en una máquina de desarrollo.
-	no son necesarios para ejecutar el código en producción.

Ejemplo:

1.  Instalar el módulo nodemon como devDependencies.
```powershell
npm i -D nodemon
npm install --save-dev nodemon
```
```js
 "devDependencies": {
    "nodemon": "^2.0.15"
  }

```
:::tip
 [nodemon](https://www.npmjs.com/package/nodemon) es una herramienta que ayuda a desarrollar aplicaciones basadas en node.js al reiniciar automáticamente la aplicación de node cuando se detectan cambios de archivo en el directorio.
:::
## Nodemon
- Nodemon es una herramienta que  reinicia automáticamente el servidor cuando se detectan cambios en los archivos de la aplicación. Es útil ya que evita tener que reiniciar manualmente el servidor cada vez que se realizan cambios en el código.
- Nodemon es una herramienta útil para desarrolladores de Node.js que puede ahorrar tiempo y aumentar la productividad.
- Aquí te muestro un ejemplo de cómo usar Nodemon para ejecutar una aplicación Node.js básica:
1. Primero, instala Nodemon globalmente con npm:

```powershell
npm install -g nodemon
```
2. Crea una nueva aplicación Node.js o abre una existente.
3. En lugar de ejecutar la aplicación con el comando node, usa nodemon:
```powershell
nodemon app.js
```
4. Realiza cambios en tu código y guárdalos. Nodemon detectará los cambios y reiniciará automáticamente el servidor.


:::tip
- Nodemon puede tener un archivo de configuración llamado nodemon.json
- Sirve para especificarle que carpeta tiene que vigilar, que archivos ignorar o seguir , el delay antes de reiniciar el servidor , etc.
:::








## Servidor HTTP
- [Link](https://www.digitalocean.com/community/tutorials/how-to-create-a-web-server-in-node-js-with-the-http-module)
-	Hypertext Transfer Protocol: El Protocolo de transferencia de hipertexto es el protocolo de comunicación que permite las transferencias de información en la World Wide Web.
-	Intercambia  información entre cliente y servidor.
-	El servidor queda a la espera de alguna solicitud HTTP  que le envie el cliente para proporcionar una respuesta.
-	Cuando visitamos un sitio web, hacemos una solicitud GET de HTTP, y el servidor nos devuelve por ejemplo un index.html con el sitio web.
-	Nosotros configuraremos estas respuestas en nuestro "servidor web o servidor http" con node.js

:::tip Iniciar proyecto
- Al iniciar el proyecto, hay que crear nuestro package.json y configurarlo.
```powershell

npm init -y  
```
- la -y es para que sea todo automatico.
- No hace falta poner la extensión.js
- Esta es la configuración del package.json:
```js
{
  "name": "practica",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon index",
    "start": "node index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

```
- instalamos nodemon:
```powershell
npm i nodemon
```
:::
- Vamos a usar el módulo http que viene integrado con Node.
:::tip Modulo
Modulo =  Un trozo de código que alguien creo y nosotros lo usamos
:::
index.js:
```js
// Importamos el modulo http que viene con Node
const http = require("http");

// puerto
// 3000 = ocupa react  8080 = ocupa vue
const port = 5000;

// Creamos un servidor
// createServer tiene como parametro un callback(requerimiento(req) , respuesta(res))
const server = http.createServer((req, res) => {

    // Para cualquier solicitud/peticion del cliente le enviamos esta respuesta.
    // res tiene metodos para devolver una respuesta
    res.end("esta es la respuesta");
});

//El servidor escucha en el puerto especificado
//listen(puerto , funcion que se ejecuta cuando el servidor inicia (empieza a escuchar))
server.listen(port, () => {
    console.log("servidor andando 🚀");
});

```
```powershell
npm run dev
```
Al ejecutarlo:

- En el navegador: localhost:puerto
- http://localhost:5000/ en el ejemplo

Otro Ejemplo:


```js
// Modulo que viene con Node
const http = require('http');
// Creamos un servidor 
// Parametros createServer(callback(requirimiento(req),respuesta(res))
const server = http.createServer((req , res) => {

      // Respuesta del servidor
      res.end('estoy respondiendo a tu solicitud');
})

const puerto = 3000;
// El servidor escucha en un puerto
// Parametros listen(puerto , callback)
server.listen(puerto , () => {
      console.log('escuchando solicitudes');
})

```

## Res
- Es un parámetro del  callback que contiene createServer(), este maneja todas las solicitudes de la aplicación.
- Este "Res" lo vas a encontrar mucho en las aplicaciones de backend, sobre todo en APIs.
- En Express, el objeto res es una abreviatura de "response" (respuesta). Se utiliza para enviar una respuesta al cliente. El objeto res contiene métodos que permiten:
  -  Enviar una respuesta:
      -	res.send() - Enviar datos en formato de texto, HTML o JSON.
      -	res.json() - Enviar una respuesta en formato JSON.
      -	res.sendFile() - Enviar un archivo al cliente.
  - Establecer el estado HTTP:
    - res.status(code) - Definir el código de estado HTTP de la respuesta (por ejemplo, 200 para éxito, 404 para no encontrado).
  - Redirigir al cliente:
    -	res.redirect(url) - Redirigir a otra URL.
  - Establecer encabezados HTTP:
    -	res.set(header, value) - Definir un encabezado HTTP personalizado.
- En Express también puedes usar el objeto res para renderizar una vista utilizando un motor de plantillas. Para esto, primero debes configurar Express para usar un motor de plantillas como EJS, Pug o Handlebars. Luego, puedes utilizar el método res.render() para renderizar una vista y enviarla como respuesta al cliente.

:::tip Renderizar una vista
- Renderizar una vista significa generar el HTML final (que será enviado al navegador del cliente) a partir de una plantilla dinámica y datos proporcionados. Las plantillas pueden contener marcadores de posición o código que se reemplaza o evalúa en el servidor antes de enviarse al cliente.
- Cuando renderizas una vista, Express utiliza un motor de plantillas (como EJS, Pug o Handlebars) para combinar los datos (por ejemplo, variables o estructuras como objetos o listas) con la estructura HTML predefinida en la plantilla. El resultado es una página HTML completamente construida, que luego se envía como respuesta al cliente.
- Pasos que se siguen:
  - El servidor recibe una solicitud (por ejemplo, el cliente solicita una página /home).
  - El controlador busca los datos necesarios para esa solicitud (por ejemplo, el título de la página y un mensaje de bienvenida).
  - El motor de plantillas toma una plantilla predefinida (como un archivo .ejs, .pug, etc.), la combina con los datos que el servidor ha proporcionado.
  - El servidor envía el HTML generado como respuesta al navegador del cliente.


:::
:::tip Plantilla
- Una plantilla dinámica es un archivo de estructura HTML que contiene marcadores de posición, variables o fragmentos de código que son reemplazados o generados en tiempo de ejecución con datos específicos antes de ser enviados al cliente. Estas plantillas permiten generar contenido HTML que cambia dinámicamente en función de los datos que el servidor maneja o recibe de los usuarios.
- Componentes clave de una plantilla dinámica:
  1.	Marcadores de posición: Son variables o fragmentos de código que se sustituyen por datos reales cuando la página es renderizada.
  o	Ejemplo en EJS (un motor de plantillas): ``<%= message %>``
  2.	Datos dinámicos: Son los valores que el servidor proporciona a la plantilla, como el nombre de un usuario, una lista de productos o cualquier otra información que puede cambiar según el contexto de la solicitud.
  o	Ejemplo: Un título o un mensaje de bienvenida que cambia según el usuario que inicia sesión.
  3.	Estructura HTML: Las plantillas tienen una estructura HTML base que define cómo se verá la página en general, pero con fragmentos que cambian según los datos específicos.
- Para crear estas plantillas se debe configurar un motor de plantilla en express
:::

## Req
- Es un parámetro del  callback que contiene createServer(), este maneja todas las solicitudes de la aplicación.
- Este "Res" lo vas a encontrar mucho en las aplicaciones de backend, sobre todo en APIs.
- En Express, el objeto req es una abreviatura de request (solicitud). Este objeto representa la solicitud que el cliente realiza al servidor y contiene toda la información sobre dicha solicitud, como los parámetros, encabezados, cuerpo de la solicitud y más.
- Mientras que el objeto res se usa para enviar una respuesta al cliente, el objeto req se utiliza para leer y acceder a los datos que el cliente envía al servidor cuando hace una solicitud.
- Principales propiedades y métodos del objeto req:
  - req.params:
      - Contiene los parámetros de ruta que el cliente envía. Los parámetros de ruta se definen en la URL, por ejemplo, en una ruta como /users/:id, :id es un parámetro de ruta que se puede acceder a través de req.params.id.
  - req.query:
      - Contiene los parámetros de consulta (query string) que están en la URL después del signo de interrogación (?). Estos son usados para pasar información adicional en las solicitudes GET.
  - req.body:
      - Contiene el cuerpo de la solicitud (request body), que generalmente se envía en solicitudes POST o PUT. Esto es útil para enviar datos a través de formularios HTML o APIs.
      - Nota: Para acceder al cuerpo de la solicitud, necesitas un middleware como express.json() o express.urlencoded().
  - req.headers:
      - Contiene los encabezados HTTP que el cliente envía en la solicitud. Los encabezados son metadatos sobre la solicitud, como la información sobre el tipo de contenido o la autenticación.
  - req.method:
      - Indica el método HTTP utilizado en la solicitud, como GET, POST, PUT, DELETE, etc.
  - req.url y req.path:
      - req.url es la URL completa solicitada por el cliente.
      - req.path es solo el camino o la ruta sin la parte de la consulta (query string).
  - req.cookies (si se usa un middleware para cookies):
      - Contiene las cookies enviadas en la solicitud. Para manejar cookies en Express, necesitas un middleware como cookie-parser.



## Verbos o métodos HTTP
- [Info](https://developer.mozilla.org/es/docs/Web/HTTP/Methods)
-	HTTP define un conjunto de métodos/verbos HTTP para indicar la acción que se desea realizar para un recurso determinado.
-	Los más populares son: GET, POST, PUT, DELETE.
-	En el siguiente apartado crearemos nuestro servidor web (con express) y pondremos en práctica cada uno de estos métodos.
-	Si entramos a una URL y nos devuelve una página web es con el método GET.
- Get = Obtener un recurso
- Post = Crear un recurso

## Express
- [Info](https://expressjs.com/es/)
-  Nos permite hacer nuestro servidor HTTP de una manera sencilla.
- Nos permite gestionar las solicitudes que nos hacen los - clientes.
Podemos conectarnos a BD y pintar información en un HTML.
-	Nos permite crear una infraestructura web rápida, minimalista y flexible para Node.js
-	Con miles de métodos  HTTP y un middleware a su disposición, la creación de una API sólida es rápida y sencilla.


### Instalacion
```powershell
npm i express
```
Ejecutamos nodemon:
```powershell
npm run dev
```
index.js:
```js
// Importamos el modulo express que viene con Node
const express = require("express");
// Lo inicializamos
const app = express()
// puerto
const port = 5000;
 

//Gestionamos las peticiones get a la raiz del sitio web
// req = requirimiento(peticion)   res = respuesta
app.get('/', (req, res) => {
      // con el metodo send enviamos una respuesta
      res.send('visitaste la pagina de inicio(raiz)')
})

// //El servidor escucha en el puerto especificado
app.listen(port , () => console.log('Funciona'))

```

## Rutas
- [Info](https://expressjs.com/es/starter/basic-routing.html)
- El direccionamiento hace referencia a cómo responde una aplicación a una solicitud de cliente en un determinado punto final, que es un URI o una vía de acceso (sea uno o el otro se parece a una url) y un método de solicitud HTTP específico (GET, POST, etc.).

index.js:
```js
// Importamos el modulo express que viene con Node
const express = require("express");
// Lo inicializamos
const app = express()
// puerto
const port = 5000;
 

// La URI es la raiz del sitio web
//Una peticion get a la raiz del sitio web
// req = requirimiento(peticion)   res = respuesta
app.get('/', (req, res) => {
      res.send('visitaste la pagina de inicio(raiz) http://localhost:5000/')
})

 // La URI es /contacto
 // Otra ruta /contacto
  // Para que responda , se debe enviar una peticion get a la url
app.get('/contacto', (req, res) => {
      res.send('visitaste la pagina de contacto http://localhost:5000/contacto')
})
 // La URI es /contacto
 // Otra ruta /contacto
// Para que responda , se debe enviar una peticion post a la url
app.post('/contacto', (req, res) => {
      res.send('visitaste la pagina de contacto http://localhost:5000/contacto a traves del post')
})

// //El servidor escucha en el puerto especificado
app.listen(port , () => console.log('Funciona'))

```
:::tip Postman
-	[postman](https://www.postman.com/)
-	Permite hacer solicitudes HTTP
-	Podemos simular todas las peticiones (POST , PUT , DELETE , ETC)
:::
:::tip GET
- El navegador solo acepta peticiones GET.
- GET = Obtener información de una URL
:::
## Archivos estáticos
- [Info](https://expressjs.com/es/starter/static-files.html)
-	Para el servicio de archivos estáticos como, por ejemplo, imágenes, archivos CSS y archivos JavaScript, utilice la función express.static  que la brinda el middleware de Express.
- express.static nos permite habilitar una carpeta que va a contener archivos estaticos
-	Pase el nombre del directorio que contiene los activos estáticos a la función express.static para empezar directamente el servicio de los archivos.
- La carpeta que contiene los archivos estaticos se suele llamar public 
- Esta "carpeta" representa el frontend.

:::tip ¿Que son los archivos estaticos?
- Son todos los archivos que lo  interpreta  y ejecuta el navegador
- Ej. HTML , CSS , JS , imagénes.
:::
- Todas las demas carpetas es el backend (se ejecuta en el servidor/maquina)

:::tip Middleware 
- En palabras simples es una acción que se ejecuta antes de nuestra función de ruta(el servidor responda a la peticion)
- El middleware  intercepta/atrapa la peticion antes que llegue al servidor.
- Cuando el cliente envía una petición, el middleware detiene la petición, lo analiza y si esta todo bien ejecuta el método que gestiona solicitud o el proximo middleware.
- Express viene con su middleware
-	La palabra use representa el middleware
:::
- express.static es para ver donde van los archivos “públicos”.
 - Los middleware se ejecutan antes de hacer la petición (que responda el servidor).

 index.js:
```js
// Importamos el modulo express que viene con Node
const express = require("express");
// Lo inicializamos
const app = express()
// puerto
const port = 5000;
 
// middleware 
app.use(express.static("public"))

//Una peticion get a la raiz del sitio web
// req = requirimiento(peticion)   res = respuesta
app.get('/', (req, res) => {
      res.send('visitaste la pagina de inicio(raiz) http://localhost:5000/')
})
 // Otra ruta
app.get('/contacto', (req, res) => {
      res.send('visitaste la pagina de contacto http://localhost:5000/contacto')
})
 // Otra ruta
// Para que responda , se debe enviar una peticion post a la url
app.post('/contacto', (req, res) => {
      res.send('visitaste la pagina de contacto http://localhost:5000/contacto a traves del post')
})

// //El servidor escucha en el puerto especificado
app.listen(port , () => console.log('Funciona'))

```
Creamos la carpeta public en la raiz del proyecto:

En dicha carpeta, creamos un index.html 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Express</title>
</head>
<body>
     <h1>Mi página con express</h1>
</body>
</html>

```
## req.query
#### Query
- Las query strings (o parámetros de consulta) son una parte de la URL que se utiliza para enviar información adicional al servidor. Se colocan después del signo de interrogación (?) en la URL y constan de pares clave-valor. Las query strings no forman parte de la ruta en sí, sino que proporcionan datos adicionales que se pueden usar para filtrar, ordenar, buscar o modificar la solicitud de alguna manera.
- [Query](https://stackabuse.com/get-query-strings-and-parameters-in-express-js/)
-	En términos simples, una cadena de consulta (Query) es la parte de una URL después del signo de interrogación (?).
-	Está destinado a enviar pequeñas cantidades de información al servidor a través de la URL.
-	Esta información generalmente se usa  para consultar una base de datos, o tal vez para filtrar resultados. Realmente depende de ti para qué se usan.
- En Express, puedes acceder a los valores de las query mediante el objeto req.query. Este objeto contiene todos los pares clave-valor enviados en la query string como propiedades.
#### Estructura básica de una query string:
-	Se encuentra después del símbolo ? en la URL.
-	Con el símbolo = le asigna el valor a una clave
-	Los pares clave-valor están separados por el signo &.
- Ejemplo de una URL con query string:
```powershell
https://example.com/search?term=javascript&category=programming
```
:::tip Observación
- term=javascript es un  query donde term es la clave y javascript es el valor.
- category=programming es otra query donde category es la clave y programming es el valor.
:::

:::tip Explicación no tan técnica
- Piensa en las query strings como pequeños fragmentos de información que le puedes añadir a una URL para hacer que la búsqueda o el filtrado de información sea más específico. Por ejemplo, cuando haces una búsqueda en Google, verás algo como esto en la barra de direcciones:
```powershell
https://www.google.com/search?q=gatos+divertidos
```
-  q=gatos+divertidos es una query string.
-  q es la clave (que representa "query" o búsqueda), y gatos+divertidos es el valor de la clave.
- Las query strings permiten que tú como usuario le des instrucciones específicas al servidor sobre qué estás buscando o cómo quieres que los resultados se filtren, sin tener que cambiar la ruta principal de la URL.
:::

#### Ejemplo
index.html de la carpeta public
```html
  <form action="/formulario" method="get">
          <input type="text" name="nombre" id="">
          <input type="text" name="apellido" id="">
          <button type="submit">Enviar</button>
      </form>

```
:::tip Observación
-	GET:Envia los datos del formulario en la URL como pares de nombre=valor, La longitud de una URL es limitada (alrededor de 3000 caracteres), GET es mejor para datos no seguros, como cadenas de consulta en Google.

:::
index.js: 
```js
app.get('/formulario' , (req,res)=> {
      //Devuelve un objeto que contiene las etiqueta nombre - value de los input
      console.log(req.query);

      res.send('formulario enviado  ' + req.query.nombre);
})

```
:::tip Observación
- No se debe manipular datos de las query.
:::
#### Diferencias entre params y query:
-	Params (parámetros de ruta) forman parte de la URL y son obligatorios para la coincidencia de la ruta. Ejemplo: /products/:id donde :id es un parámetro de ruta.
-	Query strings son opcionales y proporcionan información adicional, pero no cambian la estructura de la ruta. Ejemplo: /products?category=tecnologia donde category es un parámetro de consulta.
#### ¿Cuándo usar query strings?
- Las query strings son útiles cuando:
  -	Filtros o búsquedas: Permiten al usuario especificar opciones adicionales como filtros de búsqueda.
  -	Opciones opcionales: Cuando necesitas manejar opciones adicionales que no son críticas para la estructura principal de la ruta (como la paginación, el orden o el rango de precios).
  -	Datos no sensibles: La información en las query strings es visible en la URL, por lo que no es recomendable usarlas para enviar datos sensibles o privados.


## req.body
#### Body
- El body (cuerpo) de una solicitud HTTP es la parte que contiene los datos que se envían al servidor cuando se hace una petición. Es comúnmente utilizado en solicitudes POST, PUT, PATCH, y DELETE, donde el cliente envía información al servidor para crear, actualizar o eliminar datos.
- A diferencia de los params y queries que son parte de la URL, el body es el lugar donde se envían datos más complejos, como formularios, archivos JSON, o incluso archivos multimedia.
#### Tipos comunes de datos en el body
-	JSON: Es uno de los formatos más comunes para enviar datos estructurados. Ejemplo: ``{ "name": "John", "age": 30 }``
-	Form data: Datos enviados desde formularios HTML, usualmente codificados en URL-encoded o multipart/form-data.
-	Texto plano: Se puede enviar texto sin estructura específica.
-	Archivos: En algunos casos, el body puede incluir archivos, usualmente cuando se envían mediante formularios con el tipo de codificación multipart/form-data.

#### ¿Cómo acceder al body en Express?
- Para acceder al contenido del body en Express, es necesario usar un middleware que permita "entender" el formato (Json , Form data , Multimedia , etc...) en que los datos están siendo enviados. Los dos más comunes son:
  -	express.json(): Para manejar datos en formato JSON.
  -	express.urlencoded(): Para manejar datos de formularios enviados como application/x-www-form-urlencoded.
- Por lo general el middleware se encarga de leer el formato/estructura de los datos que son enviados en el body y añadirlo al req.body como si fuera un objeto.
- Se podría decir que cada formato es un “lenguaje” (inglés, español, francés, etc.), y cada middleware solo entiende un idioma. Este ultimo se encarga de  leerlo y añadirlo al req.body ya traducido.


:::tip Explicación no tan técnica
- Imagina que estás llenando un formulario en línea para registrarte en una página web. En el formulario, pones tu nombre, correo y contraseña. Cuando haces clic en "Enviar", esa información se empaqueta en el body (cuerpo) de la solicitud y se envía al servidor. El servidor recibe esos datos dentro del body, los procesa y te registra en la página.
- El body es básicamente un lugar en el que el cliente puede poner muchos datos de una sola vez, y no tiene que hacerlo en la URL (que es donde se ponen los parámetros o las query strings). El body es más adecuado cuando necesitas enviar datos más grandes o complejos, como una lista de artículos en una compra, una imagen o, como en el ejemplo anterior, un formulario de inicio de sesión.

:::

#### Ejemplo
index.html:
```html
<form action="/formulario" method="POST">
          <input type="text" name="nombre" id="">
          <input type="text" name="apellido" id="">
          <button type="submit">Enviar</button>
      </form>

```
:::tip Observación
- Con el método POST , los datos no viajan por la URL , viaja por el cuerpo de la petición HTTP.
- POST: Agrega datos de formulario dentro del cuerpo de la solicitud HTTP (los datos no se muestran en la URL).
:::

:::warning
- [Error req.body vacio](https://stackoverflow.com/questions/66555172/why-is-req-body-undefined-in-express)
:::


index.js
```js
app.post('/formulario' , (req,res)=> {
     
      console.log(req.body);

      res.send('formulario enviado  ' );
})

```
-	Desde el formulario HTML se está enviando datos a través del cuerpo o body, pero por defecto express no sabe  leer lo que hay dentro del body.
-	Por lo tanto para indicarle a express que lea y analice los req.body (datos a través del cuerpo/body), se necesita configurar un middleware apropiado (depende del contenido que se envia por el body).
-	El middleware leerá el cuerpo de la solicitud, lo analizará y colocará los resultados analizados (el contenido del body) en el  req.body.
-	Express tiene un middleware  incorporado para cada tipo de contenido.
- [info](https://expressjs.com/en/4x/api.html#express.json)

:::tip Algunos de los middlewares 
Algunos de los middlewares para analizar los diferentes tipos de contenido:
```js
express.json(...)    // "application/json"
express.raw(...)     // reads the body into a Buffer for you to parse yourself
express.text(...)    // "text/plain" - reads the body into a string
express.urlencoded(...) // "application/x-www-form-urlencoded"
```
:::
index.js:
```js
// Este se utiliza para analizar un formulario simple como el anterior
app.use(express.urlencoded({extended : true}));

app.post('/formulario' , (req,res)=> {
        //Devuelve un objeto que contiene las etiqueta nombre - value de los input
      console.log(req.body);

      res.send('formulario enviado  ' );
})

```

#### Diferencias entre params, query y body:
-	Params (Parámetros de ruta): Parte de la ruta de la URL. Sirven para identificar recursos específicos en la URL. Ejemplo: /products/:id
    -	Acceso: req.params
- Query (Parámetros de consulta): Información adicional que se envía en la URL después del signo ?. Ideal para búsquedas o filtros. Ejemplo: /search?term=javascript
    -	Acceso: req.query
- Body: Información enviada dentro de la solicitud, no visible en la URL. Se utiliza en solicitudes como POST, PUT, y PATCH, donde se necesitan enviar grandes cantidades de datos o datos más complejos. Ejemplo: Datos de un formulario de inicio de sesión o un archivo JSON.
    - Acceso: req.body

## fs
- [Tutorial](https://kinsta.com/es/base-de-conocimiento/nodejs-fs/)
- [Opciones](https://nodejs.org/api/fs.html#filehandlewritefiledata-options)
- Es un módulo incorporado

index.html de la carpeta public:
```html
<form action="/formulario" method="POST">
          <input type="text" name="nombre" id="">
          <input type="text" name="apellido" id="">
          <button type="submit">Enviar</button>
      </form>

```
:::tip
El return en las validaciones es para evitar dos res.send() que puede generar errores
```js
const fs = require('fs');
const express = require("express");
const app = express()
const port = 5000;
 
// middleware 
app.use(express.static("public"))
// Este se utiliza para manipular un formulario simple
app.use(express.urlencoded({extended : true}));

app.post('/formulario' , (req,res)=> {
        
      
     const {nombre,apellido} = req.body;
     // Validaciones
     // Si no existe los datos
     if (!nombre || !apellido) return res.send('no existen los datos');
      res.send('formulario enviado  ' );
})

```

:::
:::tip
También se puede direccionar (como se hace en el ejemplo)
:::


error.html dentro de public:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Error faltan los datos</h1>
    <a href="/">Volver</a>
</body>
</html>

```
index.js: 
```js

app.post('/formulario' , (req,res)=> {
        
      
     const {nombre,apellido} = req.body;
     // Validaciones
     // Si no existe los datos direcciono
     if (!nombre || !apellido) return res.redirect("error.html")
      res.send('formulario enviado  ' );
})


const fs = require('fs');
const express = require("express");
const app = express()
const port = 5000;
 
// middleware 
app.use(express.static("public"))
// Este se utiliza para manipular un formulario simple
app.use(express.urlencoded({extended : true}));

app.post('/formulario' , (req,res)=> {
        
      
     const {nombre,apellido} = req.body;
     // Validaciones
     // Si no existe los datos
     if (!nombre || !apellido) return res.redirect("error.html")
     //Crear un Archivo
      // writeFile(nombre-archivo y ubicacion , contenido , callback )
      // writeFile no crea carpetas
      //el archivo se crea en la carpeta archivos
     fs.writeFile(`archivos/${nombre}.txt` , apellido , (err) => {
           if (err) return   res.send('Fallo al crear el archivo  ' );
           res.send("se creo el archivo");
     })
     
})

```
## res.download
- [info](http://expressjs.com/en/api.html#res.download)
- Es para descargar algo.

index.js
```js
const fs = require('fs');
const express = require("express");
const app = express()
const port = 5000;
 
// middleware 
app.use(express.static("public"))
// Este se utiliza para manipular un formulario simple
app.use(express.urlencoded({extended : true}));

app.post('/formulario' , (req,res)=> {
        
      
     const {nombre,apellido} = req.body;
     // Validaciones
     // Si no existe los datos
     if (!nombre || !apellido) return res.redirect("error.html")
     //Crear un Archivo
      // writeFile(nombre-archivo y ubicacion , contenido , callback )
      // writeFile no crea carpetas
      //el archivo se crea en la carpeta archivos
     fs.writeFile(`archivos/${nombre}.txt` , apellido , (err) => {
           if (err) return   res.send('Fallo al crear el archivo  ' );
           // __dirname es la ubicacion de este archivo
           //download(ubicacion del archivo a descargar)
           res.download(__dirname + `/archivos/${nombre}.txt`);
     })
     
})





 
app.listen(port , () => console.log('Funciona'))

```
## res.sendFile
- Abre un archivo en especifico.
```js
// Si no encuentra una ruta configurada (No existe la ruta)
app.use((req, res, next) => {
  // res.status(404).send("Sorry cant find that!");
  res.status(404).sendFile(__dirname + "/public/404.html");
});

```
## Propiedades y Metodos
### propiedad __dirname
- __dirname es la ruta( dinámica) en donde se ejecuta el código . 
- Es la ubicación del archivo en la máquina.
### metodo path.join
He visto varios ejemplos con path.join, este nos sirve hacer uniones de rutas 
```js
app.use(express.static(path.join(__dirname, "public")));
```


## [Generador de aplicaciones con express](https://expressjs.com/es/starter/generator.html)
 - express –-view=nombremotorplantilla nombreapp
 - Hay muchos motores de plantilla (pug ,ejs,etc).


## Puerto 

```js
// Busque la variable PORT en nuestro servidor (variable de entorno) y si no existe, que utilice el puerto 3000
const PORT = process.env.PORT || 3000;

```

## Middleware

:::warning 
Esto es una explicacion(teoria) , para ver ejemplos  , te recomiendo ver las practicas
:::
- El middleware seria el firewall 
- Los middlewares interceptan la peticion antes que llegue al “servidor” ,  se ejecuta antes de la funcion que gestiona la petición.
- Interceptan la solicitud antes que llegue al servidor para analizarla.
- Analizan la solicitud y si esta todo correcto , ejecuta la funcion que gestiona dicha solicitud HTTP o tambien puede ejecutar otro middleware en caso que una ruta contenga mas de un middleware.
- Si una ruta tiene mas de un middleware , vas a ver un array que los contiene.

### Los middleware  es una  funcion con tres parametros

1. req : Requirimiento 
2. res : Respuesta
3. next : Seria un metodo 
- El metodo next()  ejecuta el siguiente middleware(Puede haber varios en un array) o ejecuta la funcion que gestione la peticion (Se suele encontrar en una carpeta llamada controllers)

:::tip Observacion 
 - Para express todo es un middleware.
 - Las funciones que gestionan las solicitudes HTTP utilizan los dos primeros parametros.
:::

:::tip Middlewares de expresss

- El metodo use() de express es para ejecutar/utilizar un middleware de manera global (intercepta  todas las solicitudes) , aunque hay excepciones como express.static().
- Lo que recibe es el middleware que va a interceptar todas las solicitudes , aunque tambien se puede especificar un middleware que intercepte solo algunas rutas.

Ejemplo:

```js
const app = express()
app.use(express.static("public"))
```
:::

### Explicacion 
- Vamos a usar de  ejemplo un codigo de  la seccion de Router: 
```js
const express = require('express');
// Accedemos a todas las propiedades del Router
const router = express.Router();


router.get('/' , (req , res) => {
  
    res.render("index" , {titulo : "mi titulo gato" , descripcion : "Hola Esta es la descripcion"});
})

router.get('/servicios' , (req,res) => {
     res.render("servicios" , {tituloServicio : "Este es un mensaje de Servicio"})
})

module.exports = router;

```



- El segundo parametro del metodo get/post/delete/etc es la funcion que gestiona la solicitud HTTP. Es la que ejecuta  next() si no encuentra ningun otro middleware adelante de el.
- La funcion que contiene el segundo parametro , puede irse al tercer parametro si hay middlewares configurados en la ruta.
- el metodo get/post/delete/etc puede tener un segundo parametro (la funcion que gestiona la solicitud HTTP se desplaza al tercer parametro) para especificar los middlewares

Ejemplos :
  - Una ruta con un middleware (urlValida)
```js
router.post("/" , urlValida , agregarUrl)
```
- Una ruta con varios middlewares (Todos en un array y con un orden)


```js
// Tiene un array de middleware
router.post("/register" ,  [
    // body ("valor-atributoname" , "mensaje de error").metodo.metodo.metodo....
    // trim() = Limpia los espacios en blanco del lado izquierda y derecho
    // notEmpty()  = Para que no venga vacio d
    // escape() = Para que solo mande caracteres y ignore html
    body("userName" , "Ingrese un nombre válido").trim().notEmpty().escape(), 
    //Validamos el email  para que tenga un formato valido
    body("email" , "Ingrese un email valido").trim().isEmail().normalizeEmail() ,
    //validamos la contraseña 
    body("password" , "Contraseña de minimo 6 caracteres").trim().isLength({min:6}).escape()
    // Hacemos una validacion personalizada para que las dos contraseñas coincida
    // custom(funcion(value , {req})) 
    // el value es lo que se evalua (lo que se envia en el formulario)
    // {req} es para tener acceso al req(requirimiento)
    .custom((value , {req}) =>{
        // SI no son iguales
        
       if (value !== req.body.repassword) {
           // No cumple la validacion
           //Este seria el mensaje de error que se mandaria
           throw new Error("No coinciden las contraseñas")
       }
       // Si cumple la validacion
       return value
    })
] ,  registerUser);
```
:::tip Observacion 
- Cada elemento del array es un middleware 
- con el metodo next() ejecuto el siguiente middleware

Ej: 

si el middleware de la posicion 0 ejecuta el next() se ejecuta el middleware de la posicion 1

si el middleware de la ultima posicion del array ejecuta el next() , ejecuta la funcion que gestiona la solicitud HTTP.
:::

### Ejemplo de middleware 

```js
module.exports = (req , res , next) => {
   // Si esta autenticado
    if (req.isAuthenticated()) {
        return next();
    }
    // Si no tiene una sesion activa
    res.redirect('/auth/login');
}
```


```js
const jwt = require('jsonwebtoken')

// middleware para validar token (rutas protegidas)
const verifyToken = (req, res, next) => {
  
    const token = req.header('auth-token')
    // Si no existe el token
    if (!token) return res.status(401).json({ error: 'Acceso denegado' })
    try {

        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        
        req.user = verified
        // Si la sesion es valida , hacemos el next()
        next() // continuamos
    } catch (error) {
        res.status(400).json({error: 'token no es válido'})
    }
}

module.exports = verifyToken;
```


:::tip Observacion 
- Como se puede ver , los middleware son archivos.js que contienen una funcion que se exporta
- Esa funcion se inserta como segundo parametro en los metodos (get/post/put/etc) para que se ejecute.

:::




## Status / Tipo de respuesta
- Cada respuesta tiene un status.
- El Status es el código de respuesta.
- Indica si la petición ha sido exitosa, o no, y debido a que.
- [link1](https://developer.mozilla.org/es/docs/Web/HTTP/Status)
- [link2](https://http.cat/)

- La respuesta tiene el status 400:
```js
// Con el metodo status especificamos el código de respuesta
res.status(400).json({error: 'token no es válido'})
```
- Por defecto , la respuesta tiene el status 200.


## Params
- Los params en Express se refieren a los parámetros de ruta que se definen en la URL. Estos son “fragmentos dinámicos” en las rutas que permiten que partes de la URL sean variables. Los params se utilizan para capturar valores que cambian de una solicitud a otra (como un ID de usuario, un nombre de producto, etc.).
- Definición de una ruta con params: Se definen como partes de la URL que están precedidas por dos puntos (:) en la declaración de la ruta. En el contexto de Express, cuando defines una ruta como /users/:id, :id es un parámetro de ruta.
- Acceso a los params: Estos valores capturados se pueden acceder a través del objeto req.params. Cada parámetro definido en la ruta se convierte en una propiedad de este objeto, donde el nombre del parámetro se convierte en la clave.
- Coincidencia de rutas: Express compara las rutas de la solicitud con las rutas definidas en el servidor y, si encuentra una coincidencia con un parámetro de ruta, asigna el valor correspondiente a req.params.


:::tip Explicación no tan técnica
- Imagina que quieres visitar un perfil en una red social, como Facebook. La URL de tu perfil probablemente sea algo como facebook.com/tu-nombre-de-usuario. Pero si alguien más quiere visitar su perfil, la URL será facebook.com/otro-nombre-de-usuario. La parte de la URL que cambia de persona a persona es lo que llamamos un parámetro de ruta, por lo tanto, la URL seria facebook.com/:user y tanto tu-nombre-de-usuario como otro-nombre-de-usuario son valores que se almacena en la “variable” user.
- En lugar de crear una página diferente para cada usuario, el servidor usa params para identificar al usuario o cualquier otro recurso, y así mostrar la información adecuada.
- Con los parámetros de ruta, Express puede identificar qué información debe mostrar basándose en lo que haya en la URL. De esta forma, no necesitas una ruta para cada usuario o recurso. Solo necesitas una ruta que acepte diferentes valores (params) y, con eso, puedes mostrar la información correcta.
:::
#### Beneficios de los params
1.	Flexibilidad: Los params permiten que una sola ruta maneje múltiples solicitudes. En lugar de tener una ruta diferente para cada recurso, puedes tener una ruta dinámica que se ajuste a diferentes valores.
2.	Claridad en la URL: Los params permiten que los datos se incorporen directamente en la URL, lo que hace que las URLs sean más claras y fáciles de leer.
3. Organización de rutas: Te ayuda a organizar rutas de manera lógica, donde la estructura de la URL refleja la relación entre los recursos (por ejemplo, usuarios y sus pedidos).
- [Ejemplo](./mongo.md#get-único-documento)