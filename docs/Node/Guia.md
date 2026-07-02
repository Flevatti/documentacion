---
sidebar_position: 6
---
# Guia practica - 2022
 Iniciamos el proyecto 
 ```powershell
 npm init -y
 ```

:::tip 
 No utilizar espacios , tildes y no colocar nombres reservados (nombre de  package/modulos)
:::
 package.json:
 ```json
 {
  "name": "practica",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon index.js",
    "start": "node index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "nodemon": "^2.0.15"
  },
  "dependencies": {
    "express": "^4.17.3"
  }
}

 ```

:::tip modelo MVC
Vamos a trabajar con el modelo vista controlador

Los controladores , las vistas y los modelos los vamos a separar
:::

## carpeta public
- Cuando se trabaja desde el backend todo esta protegido , no se puede acceder desde el navegador.

- Pero podemos crear la carpeta public cuyos archivos si son públicos, se pueden acceder desde el navegador (ingresando la url)

Creamos la carpeta public y dentro un archivo index.html 
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
    <h1>index.html</h1>
</body>
</html>

```
:::warning
TODAVIA NO SE PUEDE ACCEDER A index.html desde el navegador porque no esta configurada la carpeta public.

Para hacer que todos los archivos de la carpeta public puedan ser accedido desde el navegador usamos el middleware.
:::


:::tip middleware
- Middleware = Se ejecuta antes de la respuesta del servidor.
- use = Middleware.
:::
index.js
```js
const express = require("express");
const app = express();
// Usamos el middleware de express
// Asignamos la carpeta publica
app.use(express.static(__dirname + "/public"));
// req = requirimiento(lo que manda el usuario) res = respuesta
app.get("/", (req, res) => {
    res.send("estas solicitando la ruta raiz");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("server andando 🔥 http://localhost:5000"));

```

## Motor de plantilla 
- Para no repetir todo el código HTML (por ejemplo, todos los archivos HTML deben tener el mismo footer o el mismo menú) , surgieron los motores de plantilla.

Instalamos un motor de plantilla  (existen muchos)
```powershell
npm i express express-handlebars
```
- Se parece a vue pero es mucho mas viejo.
- Tiene limitantes este motor de plantilla, que soluciona react , vue , etc.

Creamos una carpeta views y dentro  la carpeta layouts.
  - views 
    - layouts


Lo archivos que contiene layouts son los que podemos repetir en todas las páginas web (menú, footer , etc).

dentro de la carpeta layouts creamos un archivo main.hbs

views/layouts/main.hbs:
```hbs
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desde HBS</title>
</head>
<body>
    <h1>Plantilla</h1>
</body>
</html>

```
y creamos el archivo home.hbs en la carpeta views

views/home.hbs:

```hbs
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hola desde Home</h1>
</body>
</html>

```
:::warning
Nodemon no actualiza el servidor si hay algún cambio dentro de algún archivo hbs.

Para solucionar esto creamos en la ruta raiz el archivo nodemon.json que va a contener:

```json
{
    "ext": "js,json,hbs"
}

```
En pocas palabras , estamos configurando Nodemon para que detecte cambios en archivos .js , .json y .hbs.
:::
## Configuracion
Ahora vamos a configurar el motor de plantilla en el archivo index.js

```js

const express = require("express");
// const create = recibe las configuraciones de express-handlebards
const { create } = require("express-handlebars");
// Le decimos que la extension de los archivos de views es  .hbs
const hbs = create({
    extname: ".hbs",
});
const app = express();
// Configuramos express 
// Le decimos que motor de plantilla usar
// Especificamos el motor de plantilla
app.engine(".hbs", hbs.engine);
// Especificamos la extension del motor del plantilla (.hbs)
app.set("view engine", ".hbs");
// Especificamos la carpeta en donde van a estar los archivos .hbs
app.set("views", "./views");


app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => {
    // Como respuesta renderiza(convierte en HTML) el archivo home.hbs
    // Se puede quitar el .hbs
    res.render('home')
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("server andando 🔥 http://localhost:5000"));

```

:::warning
- Como la carpeta public la maneja el middleware y este se ejecuta antes de que el servidor reciba las peticiones get/post/etc , lo que contiene la carpeta public se llama primero.
- La línea app.use(express.static(__dirname + "/public")); debe ir debajo de todo para evitar conflictos entre las rutas y archivos publicos

```js


const express = require("express");
// const create = recibe las configuraciones de express-handlebards
const { create } = require("express-handlebars");
// Le decimos que la extension de los archivos de views es  .hbs
const hbs = create({
    extname: ".hbs",
});
const app = express();
// Configuramos express 
// Le decimos que motor de plantilla usar
// Especificamos el motor de plantilla
app.engine(".hbs", hbs.engine);
// Especificamos la extension del motor del plantilla (.hbs)
app.set("view engine", ".hbs");
// Especificamos la carpeta en donde van a estar los archivos .hbs
app.set("views", "./views");



app.get("/", (req, res) => {
    // Como respuesta renderiza(convierte en HTML) el archivo home.hbs
    // Se puede quitar el .hbs
    res.render('home')
});
app.use(express.static(__dirname + "/public"));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("server andando 🔥 http://localhost:5000"));

```
:::

## main.hbs
- Como se ve, se muestra la plantilla (el archivo main.hbs) y no el home.hbs.
- Esto es porque , Se lee de forma automática el main.hbs
- La plantilla main.hbs se utiliza en todas las paginas
- Por lo tanto podemos hacer que lo que está en el home.hbs  aparezca adentro del body del main.hbs

home.hbs:
```hbs
 <h1>Hola desde Home</h1>
```
main.hbs
```hbs
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desde HBS</title>
</head>
<body>
      {{{body}}}
</body>
</html>

```
:::tip variable body 
Usamos la variable body  que tiene hbs , que su valor es todo lo que contiene  home.hbs

:::
Creamos un archivo login.hbs en views
views/login.hbs
```hbs
<h1>Login</h1>
```
index.js:
```js

const express = require("express");
// const create = recibe las configuraciones de express-handlebards
const { create } = require("express-handlebars");
// Le decimos que la extension de los archivos de views es  .hbs
const hbs = create({
    extname: ".hbs",
});
const app = express();
// Configuramos express 
// Le decimos que motor de plantilla usar
// Especificamos el motor de plantilla
app.engine(".hbs", hbs.engine);
// Especificamos la extension del motor del plantilla (.hbs)
app.set("view engine", ".hbs");
// Especificamos la carpeta en donde van a estar los archivos .hbs
app.set("views", "./views");



app.get("/", (req, res) => {
    // Como respuesta renderiza(convierte en HTML) el archivo home.hbs
    // Se puede quitar el .hbs
    res.render('home')
});
app.get("/login", (req, res) => {
    // Como respuesta renderiza(convierte en HTML) el archivo login.hbs
    // Se puede quitar el .hbs
    res.render('login')
});
app.use(express.static(__dirname + "/public"));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("server andando 🔥 http://localhost:5000"));

```
:::tip variable body 
Al entrar a http://localhost:5000/login la variable body de main.hbs contiene  todo el contenido de login.hbs
:::
## CSS , JS , etc
Añadimos boostrap a las dos rutas

main.hbs:
```hbs
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desde HBS</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
    <div class="container mt-5">
 {{{body}}}
    </div>
     
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>

```
- Todas las paginas que tengamos, van a tener Bootstrap
- Y todo el contenido de XXX.hbs va a estar en un div que contiene clases de Bootstrap




:::tip carpeta public 
- carpeta public = trabajar con el frontend = se muestra en el navegador
- el resto de carpetas(incluida la raiz) = trabajar con el backend


:::
Invocar un script que esta en la carpeta public:

public/js/script.js
```js
console.log("Hola");

```
main.hbs
```hbs
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desde HBS</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
    <div class="container mt-5">
 {{{body}}}
    </div>
     
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
      <script src="/js/script.js"></script>
</body>

```
## Each
- Vamos a usar los Block Helpers
- [Link](https://handlebarsjs.com/guide/block-helpers.html#simple-iterators)
- Each  == forEach 

home.hbs: 
```hbs
<h1>Hola desde Home</h1>
    {{#each urls }}
          <article class="card mb-2">
        <div class="card-body">
            <p>{{this.origen}}</p>
            <p>{{this.shortUrl}}</p>
            <a href="#" class="btn btn-danger">Eliminar</a>
            <a href="#" class="btn btn-warning">Editar</a>
            <a href="#" class="btn btn-info">copiar</a>
        </div>
    </article>
    {{/each}}

```
:::tip carpeta Components
Vamos a crear la carpeta components dentro de views que son pedazitos de código que se van a repetir (el código se suele repetir por medio de ciclos (each, etc))
:::

Y dentro de la carpeta creamos el archivo Card.hbs

views/components/Card.hbs

```hbs
<article class="card mb-2">
        <div class="card-body">
            <p>{{this.origen}}</p>
            <p>{{this.shortUrl}}</p>
            <a href="#" class="btn btn-danger">Eliminar</a>
            <a href="#" class="btn btn-warning">Editar</a>
            <a href="#" class="btn btn-info">copiar</a>
        </div>
    </article>

```
## Configurar Partials

- partials = sirve para  separar trozos de hbs que se van a repetir. (menu , footer , etc)
- en el partials puede ir  footer.hbs , navbar.hbs , etc.

### Configuracion 
index.js
```js
// Le decimos que la extension de los archivos de views es  .hbs y que los partials se encuentran en views/components
const hbs = create({
    extname: ".hbs",
    partialsDir: ["views/components"],
});

```
### Llamar a un partials 
Para llamar a un partial dentro de una plantilla

home.hbs
```hbs
    <h1>Hola desde Home</h1>
    {{#each urls }}
         {{> Card   url=this}}
    {{/each}}
  

```
:::tip Explicacion 
por cada iteración , se renderiza  Card.hbs, al cual le pasamos la url como valor de this (son como los props).
:::

Otra manera:
home.hbs:
```hbs
   <h1>Hola desde Home</h1>
    {{#each urls }}
         {{> Card   item=this}}
    {{/each}}
  

```

Card.hbs 
```hbs
 <article class="card mb-2">
        <div class="card-body">
            <p>{{item.origen}}</p>
            <p>{{item.shortUrl}}</p>
            <a href="#" class="btn btn-danger">Eliminar</a>
            <a href="#" class="btn btn-warning">Editar</a>
            <a href="#" class="btn btn-info">copiar</a>
        </div>
    </article>

```
:::tip 
- Le podés quitar los datos opcionales (item=this o url=this) porque los datos del item del array se pasan solo al componente.
- A un componente nosotros le podemos mandar información , esto se llama props en react y vue.
:::
Creamos un menú que lo va a utilizar todo el sitio web

views/components/Navbar.hbs
:::tip Convenciones
Los nombre de los componentes arrancan con Mayuscula.
:::
```hbs
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container">
    <a class="navbar-brand" href="/">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ms-auto">
        <a class="nav-link active" aria-current="page" href="/">Home</a>
        <a class="nav-link" href="/logup">LogUp</a>
        <a class="nav-link" href="/login">LogIn</a>
        <a class="nav-link" href="/logout">LogOut</a>
      </div>
    </div>
  </div>
</nav>

```
main.hbs
```hbs
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desde HBS</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
    {{> Navbar}}
    <div class="container mt-5">
 {{{body}}}
    </div>
     
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
      <script src="/js/script.js"></script>
</body>
</html>

```
## Router
Creamos la carpeta llamada routes

Y dentro el archivo home.js


:::tip routes
- Usamos `Router` para organizar las rutas en partes más pequeñas.
- Cada archivo puede tener un grupo de rutas relacionadas.
- Esto ayuda a que el código sea más ordenado y fácil de mantener.
:::


routes/home.js
```js
const express = require('express');
const router = express.Router();

router.get("/" , (req,res) => {
const urls = [{origen: "www.google.com" , shortUrl: "hfgdohdf"},{origen: "www.google.com" , shortUrl: "hfgdohdf"},{origen: "www.google.com" , shortUrl: "hfgdohdf"}]
res.render('home' , {urls })
})
module.exports = router;

```
Tambien creamos el archivo auth.js
```js
const express = require('express');
const router = express.Router();
router.get("/login", (req, res) => {
  
    res.render('login')
});

module.exports = router;

```
:::tip Observacion

Como se puede ver cada archivo es una ruta (home = al apartado home  y auth.js = al apartado login)

:::


en el index.js

Se utiliza el  middleware para usar el router

```js
const express = require("express");

const { create } = require("express-handlebars");
const hbs = create({
    extname: ".hbs",
    partialsDir: ["views/components"],
});
const app = express();
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./views");




app.use(express.static(__dirname + "/public"));
// Usamos el middleware para utilizar los routes
app.use("/" , require('./routes/home'));
app.use("/auth" , require('./routes/auth'));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("server andando 🔥 http://localhost:5000"));

```
:::tip Resultado del middleware
- Home =  http://localhost:5000   (No se utilizo ninguno prefijo (/))
- Login =  http://localhost:5000/auth/login (Ya que se añadio el prefijo /auth)
:::
Cambiamos las rutas en el navbar.hbs 

```hbs
 <a class="nav-link" href="/logup">LogUp</a>
        <a class="nav-link" href="/auth/login">LogIn</a>
        <a class="nav-link" href="/logout">LogOut</a>

```
## Configuracion mongoDB
 ### En el sitio de MongoDB
 1. Creamos un Cluster
 - Database – Build a Database – Shared – Free
 - Todas las configuraciones dejarla por defecto.
 - Por ultimo le das a Create Cluster
2. En network access especificamos las IP de donde nos queremos conectar 
:::tip 
 Puede ser:

- nuestra IP (para mayor seguridad)
- Permitir que se pueda conectar desde cualquier ip(0.0.0.0)
- Un conjunto de IP (la nuestra y la de un servidor/hosting)
:::
3. En DataBase Access Creamos un usuario
:::tip Ejemplo
User: User_API
password: contraseña
:::
- Built-in Role para  configurar  el Rol (Accesos)

:::tip VERSION GRATIS
- En el modo gratuito solo podemos tener un cluster
- Un cluster es como un servidor y puede tener varias BD
- En un cluster podemos tener muchas colecciones.
:::
4. Database – Connect – Connect your app -- Drivers
- Copiamos el uri (puede variar)
```js
mongodb+srv://<username>:<password>@cluster.xcibc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

/*
- Borramos <Username> y ponemos  el usuario por el cual nos conectamos
- Borramos <password> y ponemos la contraseña del usuario
- Borramos miFirstDateBase y ponemos el nombre de la BD a conectarse
*/
```



:::tip Ejemplo
```js
URI:mongodb+srv://User_API:contraseña@cluster.xcibc.mongodb.net/dbUrl?retryWrites=true&w=majority
```
:::
### En el proyecto
Creamos el archivo .gitignore
```gitignore
node_modules
.env
```

Creamos el archivo .env
:::tip .env 
- En dicho archivo creamos variables protegidas que no se pueden subir a la nube  (github)
- Sirven para no exponer informacion privada
- Son variables de entorno
- Sintaxis: nombrevariable=valor
:::
```js
URI=mongodb+srv://User_API:contraseña@cluster.xcibc.mongodb.net/dbUrl?retryWrites=true&w=majority
```
Reiniciamos Nodemon ya que no lee el archivo.

### modulos
- Para manejar  MongoDb dentro de node.js usaremos mongosee 
-  el –save es para versiones antiguas de npm
```powershell
npm install mongoose
```
Y para manejar las variables de entorno usaremos dotenv
```powershell
npm i dotenv
```
### Establecer conexion
Creamos la carpeta datebase

Y dentro el archivo conexión.js(Realizaremos la conexión en dicho archivo)

```js
const mongoose = require('mongoose');
// Para conectarnos a la BD
//connect (uri con los datos remplazados)
// Accedemos al valor de la variable URI de .env
// Sintaxis: process.env.NOMBREVARIABLE

mongoose.connect(process.env.URI).then(()=> {
    // Como devuelve una promesa , usamos el then
    console.log("'db conectada 🔥");
}).catch(e => console.log("Fallo la conexion" + e));

```
Lo llamamos en el index.js:
```js
const express = require("express");
const { create } = require("express-handlebars");
 // Para leer las variables de entorno (para acceder a las variables de .env)
 // config(configuraciones) -- Las configuraciones pueden ser desde cambiar el nombre del archivo .env a otras opciones
 require('dotenv').config()
  // Ejecutamos el archivo database/conexion.js
  require('./database/conexion');

const hbs = create({
    extname: ".hbs",
    partialsDir: ["views/components"],
});

```
### Volvemos a MongoDB(sitio web)
- Database – Cluster -- Browse Collections
- Te va a mostrar todas las BD.
- Si le das a Create Database , Creas una colección que va a pertenecer a una BD.

:::tip Explicacion 
- Una colección tiene múltiples documentos. Lo podes insertar con la opcion insert document  (El documento funciona igual que un objeto de JS propiedad:valor)
- El documento es un objeto de JS (con multiples metodos)
- Una BD puede tener múltiples colleciones.
:::
:::tip Explicacion como si fuera relacional 
- Collecion = tabla
- Documento = Fila de la tabla
- Y cada propiedad del documento es una columna.
:::
## Modelo/Esquema
- Las colecciones van a tener documentos 
- Y esos documentos están compuesto de varias propiedades con sus valores correspondiente.

:::tip Modelo
- En un modelo definimos el nombre de la colección y las propiedades(columnas) que van a tener sus documentos(filas)
- A traves del modelo tenemos acceso a métodos  para crear/modificar/leer/etc documentos.
:::
:::tip Esquema 
-	 Con Mongoose, todo se deriva de un esquema
-	Cada esquema se asigna a una colección MongoDB y define la forma de los documentos dentro de esa colección.
- El esquema define la estructura de los documentos.
:::
### En el proyecto 
Creamos la carpeta models
- En dicha carpeta vamos a crear los modelos
- cremos el archivo Url.js en la carpeta 

:::tip ID 
La ID se genera de manera automática , por eso no la especificamos.
:::
:::tip Generar String aleatorios
- Vamos a usar [nanoid](https://www.npmjs.com/package/nanoid) para crear ids aleatorios 
- npm i nanoid
:::

:::tip Explicacion 
- Para tener acceso a los métodos  para crear/modificar/leer/etc documentos , debemos crear un esquema y llevarlo a  un modelo.
- Se exporta el modelo no el esquema
- el esquema sirve para crear el modelo
- esquema = estructura del documento
- modelo = creado a partir del esquema , permite tener acceso a los métodos para el CRUD.
:::
:::tip 
Al crearse un objeto de tipo  modelo(el que se crea), se crea la colección y la BD (si no existe)
:::
```js
const mongoose = require('mongoose')
// Obtenemos la clase Schema de mongosee
const {Schema} = mongoose
const {nanoid} = require('nanoid');
// Esquema
// Nueva instancia(objeto) de Schema
// El schema recibe un objeto con las propiedades que va a tener cada documento  y sus restricciones.
const urlSchema = new Schema({

    origin: {
        // La propiedad origen es de tipo String  , es unico , y es obligatorio
        type: String,
        unique: true,
        required: true
    },
    shortURL: {
      // La propiedad shortURL  es de tipo String , es unico , y es obligatorio.
        type: String,
        unique: true,
        required: true,
        // Por defecto su valor es un String aleatorio (supuestamente unico)
        //nanoid(numero(representa el largo del string)) genera un string aleatorio
        default: nanoid(6)
    }
})
//Modelo
// Singular y comienza en Mayuscula -- variable
// models (nombre de la coleccion , esquema)
// Si la coleccion no existe , se crea tanto la BD como la coleccion(en plural)
const Url = mongoose.model('Url', urlSchema)
module.exports = Url;

```
## Controladores (MVC)
- Para trabajar  con el modelo vista – controlador
- creamos la carpeta controllers y  dentro el archivo homeController.js
- En dicho archivo vamos a tener toda la lógica de leer, actualizar, agregar, etc de la ruta Home
- En el modelo vista – controlador, la lógica debe separarse.

controllers/homeController.js:
```js
const leerUrls = async(req,res) => {
    const urls = [{origen: "www.google.com" , shortUrl: "hfgdohdf"},{origen: "www.google.com" , shortUrl: "hfgdohdf"},{origen: "www.google.com" , shortUrl: "hfgdohdf"}]
    res.render('home' , {urls })
    }

   module.exports = {leerUrls};

```
routes/home.js:
```js

const express = require('express');
const router = express.Router();
const {leerUrls} = require('../controllers/homeController')
router.get("/" , leerUrls)
module.exports = router;

```
:::tip MVC
- Modelo vista controlador
- controladores – modelo – vistas -routes – database
:::
Hacemos el agregarUrl

homeController.js
```js
const agregarUrl = async(req,res) => {}
   module.exports = {leerUrls , agregarUrl};

```
routes/home.js
```js
router.post("/" , agregarUrl)
module.exports = router;
```
## Instanciar un modelo 
Creamos un componente llamado Form.hbs

components/Form.hbs

```hbs
<form action="/" method="post">
<input type="text" placeholder="Ingrese URL" name="origin" class="form-control my-2">
 <button type="submit" class="btn btn-primary w-100 mb-2">Agregar Url</button>
</form>

```

views/home.hbs
```hbs
  <h1>Agrege sus URL</h1>
    {{> Form}}
    {{#each urls }}
         {{> Card   item=this}}
    {{/each}}

```
homeController.js
```js
// Importamos el modelo
const Url = require('../models/Url');

const agregarUrl = async(req,res) => {
    try {
        // Creamos una instancia(objeto) del modelo
        // new Modelo({propiedades del esquema})
        //shortUrl tiene un valor por defecto , no hace falta mandarlo
       const url = new Url({origin:'estatico' })
        console.log(url);
        res.send(url);
    } catch(error) {
        console.log(error)
        res.send("error algo fallo");
    }
}
   module.exports = {leerUrls , agregarUrl};

```
:::tip Explicacion
- Al momento de instanciar un Modelo, se crea la BD y la colección.
- La instancia es un objeto (documento mongoDB) con todas las propiedades del esquema.
:::
## Guardar en la BD
  modificamos el archivo homeController.js para que al documento mongoDB creado (instancia) se guarde en la BD.
 ```js
 const agregarUrl = async(req,res) => {
    try {
        // Creamos una instancia(objeto) del modelo
        // new Modelo({propiedades del esquema})
        //shortUrl tiene un valor por defecto , no hace falta mandarlo
       // La ID se crea por defecto , no hace falta mandarlo
       const url = new Url({origin:'estatico' })
       // Lo guardamos en la BD // Insertamos un documento(fila) en la colección(tabla)
       await url.save();
       // Direcciono a la pagina raiz
       res.redirect('/');
    } catch(error) {
        console.log(error)
        res.send("error algo fallo");
    }
}
   module.exports = {leerUrls , agregarUrl};

 ```
 ###  Ahora vamos a hacer que se guarde en la BD, la información que se envía en el formulario:
 1. Configuramos el middleware para que se pueda leer el body, ya que el formulario utiliza el método POST
 
 index.js
 ```js
 const app = express();
// Habilitamos los formularios html POST
app.use(express.urlencoded({extended:true}))

 ```
 2. Configuramos homeController.js para que añada el dato enviado del formulario a la BD.
 ```js
 const agregarUrl = async(req,res) => {
    // La informacion enviada por el formulario
    const {origin} = req.body;
    try {
        // Creamos una instancia(objeto) del modelo
        // new Modelo({propiedades del esquema})
        //shortUrl tiene un valor por defecto , no hace falta mandarlo
       const url = new Url({origin:origin })
       // Lo guardamos en la BD // Insertamos un documento(fila) en la colección(tabla)
       await url.save();
       // Direcciono a la pagina raiz
       res.redirect('/');
    } catch(error) {
        console.log(error)
        res.send("error algo fallo");
    }
}

 ```
 3. Movemos la funcion nanoid() al homeController para que no genere conflictos ya que genera el mismo shortUrl para todos los documentos y no deja guardar mas de 2 veces

 homeController.js
 ```js
 // Importamos el modelo
const Url = require('../models/Url');
const {nanoid} = require('nanoid');
const agregarUrl = async(req,res) => {
    // La informacion enviada por el formulario
    const {origin} = req.body;
    try {
        // Creamos una instancia(objeto) del modelo
        // new Modelo({propiedades del esquema})
       const url = new Url({origin:origin , shortURL:nanoid(6)})
        // Lo guardamos en la BD // Insertamos un documento(fila) en la colección(tabla)

       await url.save();
       // Direcciono a la pagina raiz
       res.redirect('/');
    } catch(error) {
        console.log(error)
        res.send("error algo fallo");
    }
}
   module.exports = {leerUrls , agregarUrl};

 ```
 models/Url.js
 ```js
 // Esquema
// Nueva instancia(objeto) de Schema
// El schema recibe un objeto con las propiedades que va a tener cada documento  y sus restricciones.
const urlSchema = new Schema({

    origin: {
        // La propiedad origen es de tipo String  , es unico , y es obligatorio
        type: String,
        unique: true,
        required: true
    },
    shortURL: {
      // La propiedad shortURL  es de tipo String , es unico , y es obligatorio.
        type: String,
        unique: true,
        required: true,
    }
})

 ```
 ## Leer datos
 Ahora vamos a hacer que se muestre la informacion de la BD en la pagina de inicio(home)

 views/components/Card.hbs
 ```hbs
  <article class="card mb-2">
        <div class="card-body">
            <p>{{this.origin}}</p>
            <p>{{this.shortURL}}</p>
            <a href="#" class="btn btn-danger">Eliminar</a>
            <a href="#" class="btn btn-warning">Editar</a>
            <a href="#" class="btn btn-info">copiar</a>
        </div>
    </article>

 ```
 controllers/homeController.js
 ```js
 const leerUrls = async(req,res) => {
   try {
       // find() Busca todos los documentos de la coleccion(modelo)
       // Select * from coleccion
       // coleccion es el nombre del modelo
      // Devuelve un array con objetos de mongoDB
      //lean() convierte un objeto de mongoDB en un objeto JS
      const urls = await Url.find().lean();
      //urls:urls
      res.render('home' , {urls:urls })
   } catch (e) {
       console.log(e);
       res.send('fallo algo...');
   }

    }

 ```

:::tip opcion Lean
 - La opción Lean le dice a Mongoose que omita la hidratación de los documentos que contiene el  resultado de la consulta. Esto hace que las consultas sean más rápidas y requieran menos memoria, pero los documentos se convierten en simples objetos JavaScript, no documentos Mongoose(objeto mongoDB)

 - Cuando  guardamos un documento en la base de datos, usamos el método save() de  la instancia del modelo. El método save() pertenece a un objeto mongoDB(instancia del modelo) , esa es la diferencia entre un documento como objeto js (usando lean) y un documento como objeto mongoDB.

 - un objeto mongoDB === instancia del modelo

 - La opcion Lean le quita todos los metodos que contiene una instancia del Modelo  . Ej. le quita el metodo save()
:::

:::tip hidratacion 
 - La hidratación se refiere al proceso de llenar un objeto con datos. Un objeto que aún no se ha hidratado se ha instanciado y representa una entidad que sí tiene datos, pero los datos aún no se han cargado en el objeto. Esto es algo que se hace por razones de rendimiento.
 - Se podría decir que un objeto está parcialmente hidratado cuando solo ha cargado algunos de los campos, pero no todos. Esto se puede hacer porque esos otros campos no son necesarios para sus operaciones actuales. Por lo tanto, no hay razón para desperdiciar el ancho de banda y los ciclos de CPU cargando, transfiriendo y configurando estos datos cuando no se van a usar.
:::
 ## Eliminar datos
 Ahora vamos a permitir que se puedan eliminar documentos en la BD:
 - [Info](https://mongoosejs.com/docs/api.html#model_Model.findByIdAndDelete)

:::warning
- Forma no muy recomendada (utilizar peticion GET)
- Lo ideal seria utilizar una petición DELETE ,  NO GET pero en HTML solo se puede hacer GET y POST
:::
 views/components/Card.hbs
 ```hbs
  <article class="card mb-2">
        <div class="card-body">
            <p>{{this.origin}}</p>
            <p>{{this.shortURL}}</p>
            <a href="/eliminar/{{item._id}}" class="btn btn-danger">Eliminar</a>
            <a href="#" class="btn btn-warning">Editar</a>
            <a href="#" class="btn btn-info">copiar</a>
        </div>
    </article>

 ```
routes/home.js
```js
// NO RECOMENDADO , para eliminacion informacion se usa el metodo DELETE
// usar los dos puntos (:) para asignar una variable
//ruta /eliminar/:nombrevariable
//ruta /eliminar/valornombrevariable
// Ejemplo: /eliminar/6220bd6df4eaa23f425ac827
// nombrevariable  =  6220bd6df4eaa23f425ac827
router.get("/eliminar/:id" , eliminarUrl);
module.exports = router;

```
homeController.js
```js
const eliminarUrl = async(req,res) => {
    // en req.params estan todas las variables  de rutas(:nombrevariable) y sus valores correspondiente
    const {id} = req.params;
    try {
        // Busca una coleccion por la ID y lo elimina
       await Url.findByIdAndDelete(id);
       res.redirect('/');
     } catch(error) {
         console.log(error)
         res.send("error algo fallo");
     }
}

   module.exports = {leerUrls , agregarUrl , eliminarUrl};

```
## Validacion con middlewares
:::tip middlewares
- Intercepta la petición antes de la respuesta del servidor (gestión de rutas), incluso antes de que lo analice el servidor.
-  Se suele usar para las validaciones y autenticaciones.
- Un middleware es una función con tres parámetros (req , res , next)
- next = Siga con la siguiente solicitud, que la petición pase a otro middleware o que llegue al servidor.
 - Se podría decir que el middleware es un cortafuego y si la petición es válida, pasa al servidor para ser tratada.

En caso que la petición no sea válida, nunca llega al servidor , sin embargo el middleware le envía una respuesta al cliente.

:::
Creamos la carpeta middlewares y Adentro urlValida.js

Para validar una Url
- [Usamos este modulo nativo de node.js](https://nodejs.org/api/url.html#class-url)
```js
 
 // Modulo que viene incorporado con Node.js
const { URL } = require("url");
const urlValidar = (req,res , next) => {
 // Si todo esta correcto llamamos a next
 // next = eliminarUrl
    try {
        // Leo el body del formulario
        const { origin } = req.body;
        // Se crea una nueva instancia de URL con la informacion del formulario
        const urlFrontend = new URL(origin);
        //La instancia(objeto) tiene la propiedad origin
        //Si es distinto a null , tiene el formato de url
        if (urlFrontend.origin !== "null") {
            // Comprueba que tenga el protocolo http o https y si lo tiene llama al next()
            if (
                urlFrontend.protocol === "http:" ||
                urlFrontend.protocol === "https:"
            ) {
                return next();
            }
        }
        // Lanzamos un error en caso que no sea valida
        throw new Error("no válida 😲");
    } catch (error) {
        // console.log(error);
        return res.send("url no valida");
    }
};

module.exports = urlValidar;

```
routes/home.js
```js
//Cuando se entra a la ruta , se ejecuta el middleware (urlValida).
// El middleware lo analiza, si la peticion es valida, envia la peticion al agregarUrl(req,res)(pasa al siguiente - next).
// En caso que la petición es invalida , el middleware se encarga de responder a la peticion
router.post("/" , urlValida , agregarUrl)
router.get("/eliminar/:id"  , eliminarUrl);

module.exports = router;

```
## Editar en MongoDB
- [Info](https://mongoosejs.com/docs/queries.html)
:::warning
Se hace con el método HTTP PUT pero en este ejemplo se realizara con GET (NO RECOMENDADO)
:::
routes/home.js
```js
router.get("/eliminar/:id"  , eliminarUrl);
router.get("/editar/:id", editarUrl);
module.exports = router;

```
homeController.js
```js

const editarUrl = async(req,res) => {
    //variable id de la ruta
    const {id} = req.params;
    try {
        // En la coleccion(modelo) buscamos un documento cuya id sea igual al valor de la variable const id
        // Como nos trae un objeto mongoDB lo convertirmos en un objeto JS con lean()
       const url = await Url.findById(id).lean()
       
       // {url:url}
       // el each del home.hbs ni se va a ejecutar ya que no le estamos pasando un array
       res.render('home',{url})
    } catch(error) {
        console.log(error)
        res.send("error algo fallo");
    }
}
   module.exports = {leerUrls , agregarUrl , eliminarUrl , editarUrl};

```
En views/components/Card.hbs Modificamos el atributo href de editar
 ```hbs
     <a href="/editar/{{item._id}}" class="btn btn-warning">Editar</a>
 ```
 en views/components/Form.hbs

:::tip logica
  Si existe la url , crea una formulario para editar , si no existe crea el formulario para crear.
:::
 ```hbs
 {{#if url}}
    <form action="/editar/{{url._id}}" method="post">
<input  value="{{url.origin}}" type="text" placeholder="Ingrese URL" name="origin" class="form-control my-2">
 <button type="submit" class="btn btn-warning w-100 mb-2">Editar</button>
</form>
{{else}}
<form action="/" method="post">
<input type="text" placeholder="Ingrese URL" name="origin" class="form-control my-2">
 <button type="submit" class="btn btn-primary w-100 mb-2">Agregar Url</button>
</form>

{{/if}}

 ```
 home.js
 ```js
 const {leerUrls , agregarUrl , eliminarUrl , editarUrlForm , editarUrl} = require('../controllers/homeController')

router.get("/" , leerUrls)
//Cuando se entra a la ruta , se ejecuta el middleware (urlValida).
// Si el middleware detecta que la  peticion es valida, envia la peticion a agregarUrl(req,res)(al siguiente - next)
router.post("/" , urlValida , agregarUrl)
router.get("/eliminar/:id"  , eliminarUrl);
router.get("/editar/:id", editarUrlForm);
// Utiliza el middleware
// Si la url es valida , la petición la gestiona editarUrl(req,res)
router.post("/editar/:id" ,urlValida ,  editarUrl)
module.exports = router;

 ```
 homeController.js
 ```js
 // Importamos el modelo
const Url = require('../models/Url');
const {nanoid} = require('nanoid');

const leerUrls = async(req,res) => {
   try {
       // find(parametros opcionales) Busca todos los documentos de la coleccion(modelo)
       // Select * from coleccion
      // Puede tener parametros para filtrar documentos
      // Devuelve un array con objetos de mongoDB
      //lean() convierte un objeto de mongoDB en un objeto JS
      const urls = await Url.find().lean();
      //urls:urls
      res.render('home' , {urls:urls })
   } catch (e) {
       console.log(e);
       res.send('fallo algo...');
   }

    }
const agregarUrl = async(req,res) => {
    const {origin} = req.body;
    try {
       const url = new Url({origin:origin , shortURL:nanoid(6)})
       await url.save();
       res.redirect('/');
    } catch(error) {
        console.log(error)
        res.send("error algo fallo");
    }
}
const eliminarUrl = async(req,res) => {
    // en req.params estan todas las variables  de ruta(:nombrevariable) y sus valores correspondiente
    const {id} = req.params;
    try {
        // Busca una coleccion por la ID y lo elimina
       await Url.findByIdAndDelete(id);
       res.redirect('/');
     } catch(error) {
         console.log(error)
         res.send("error algo fallo");
     }
}

const editarUrlForm = async(req,res) => {
    //variable id de la ruta
    const {id} = req.params;
    try {
        // En la coleccion(modelo) buscamos un documento cuya id sea igual al valor de la variable const id
        // Como nos trae un objeto mongoDB lo convertirmos en un objeto JS con lean()
       const url = await Url.findById(id).lean()
       
       // {url:url}
       // el each del home.hbs ni se va a ejecutar ya que no le estamos pasando un array
       res.render('home',{url})
    } catch(error) {
        console.log(error)
        res.send("error algo fallo");
    }
}
const editarUrl = async(req,res) => {
    //variable id de la ruta
    const {id} = req.params;
    const {origin} = req.body;
    try {
        // Buscamos el documento por la id y lo actualizamos
        //findByIdAndUpdate(id , {informacion a modificar} )
        // origin : origin
       await Url.findByIdAndUpdate(id, {origin})
       res.redirect('/');
    
    } catch(error) {
        console.log(error)
        res.send("error algo fallo");
    }
}
   module.exports = {leerUrls , agregarUrl , eliminarUrl , editarUrlForm , editarUrl};

 ```
 ## clipboard
 Para copiar en el portapapeles la urlShort vamos a trabajar con el frontend

 Card.hbs:
```hbs
 <article class="card mb-2">
        <div class="card-body">
            <p>{{this.origin}}</p>
            <p>{{this.shortURL}}</p>
            <a href="/eliminar/{{item._id}}" class="btn btn-danger">Eliminar</a>
            <a href="/editar/{{item._id}}" class="btn btn-warning">Editar</a>
            <button data-short="{{item.shortURL}}" href="#" class="btn btn-info">copiar</button>
        </div>
    </article>

```
main.hbs:
```hbs
  <script src="/js/app.js"></script>
</body>
</html>

```
:::tip 
A partir de ahora trabajamos con el frontend
:::
public/js/app.js:
```js
document.addEventListener('click' , e => {
    
    if (e.target.dataset.short) {
         const url = `http://localhost:5000/${e.target.dataset.short}`;
    // navigator.clipboard permite acceder al portapapeles del navegador
    // writeText(string) copia el string indicado (en este caso la URL) automáticamente
    // Es equivalente a hacer Ctrl + C sobre el texto indicado
         navigator.clipboard
            .writeText(url)
            .then(() => {
                console.log("Text copied to clipboard...");
            })
            .catch((err) => {
                console.log("Something went wrong", err);
            });
    }
})

```
##  Redireccionamiento
Vamos a hacer  que el short te lleve a la url indicada (origin)

routes/home.js:
```js

const {leerUrls , agregarUrl , eliminarUrl , editarUrlForm , editarUrl , redireccionamiento} = require('../controllers/homeController' )
router.get("/:url" , redireccionamiento)
module.exports = router;

```
homeController.js
```js
const redireccionamiento = async(req,res) => {
    const {url} = req.params
    try {
       // Modificar en la documentacion
       const urlDB = await Url.findOne({shortURL: url })
       res.redirect(urlDB.origin);
    } catch(error) {
        req.flash("mensajes" , [{msg: "No existe esta url configurada"}]);
        return res.redirect('/auth/login')
    }
}
   module.exports = {leerUrls , agregarUrl , eliminarUrl , editarUrlForm , editarUrl , redireccionamiento};

```



## Registrar usuario
controllers/authController.js
```js

const User = require("../models/User")
const {nanoid} = require('nanoid');
const loginForm = (req,res) => {
       res.render('login')
}

const registerForm = (req,res) => {
      res.render('register')
}
const registerUser = async (req,res) => {
    const {userName , email , password} = req.body
    try {
        // Buscamos un usuario por el email
       let user = await User.findOne({email:email});
       // Si existe el usuario , retornamos un error
       if (user) throw new Error('ya existe el usuario');
       // Si no existe , creamos una instancia del modelo
// userName:userName , email:email , password:password
      user = new User({userName , email , password  , tokenConfirm: nanoid()});
      user.save()
      res.json(user);
    } catch(e) {
        res.json({error: e.message});
    }
}

module.exports = {
    loginForm , registerForm , registerUser
}

```
routes/auth.js
```js
const express = require('express');
const { loginForm, registerForm, registerUser } = require('../controllers/authController');
const router = express.Router();
router.get("/login", loginForm);
//Respondemos una peticion GET  a auth/register 
router.get("/register", registerForm);
// Respondemos una peticion POST  a auth/register 
router.post("/register" , registerUser);
module.exports = router;

```
- http://localhost:5000/auth/login

- http://localhost:5000/auth/register

views/register.hbs
```hbs
<h1 class="text-center my-5">Registro de usuarios nuevos</h1>
<div class="row justify-content-center">
    <div class="col-md-6">
        <form action="/auth/register" method="post">
            <input type="text" placeholder="Ingrese nombre" class="form-control mb-2" value="usuario" name="userName">
            <input type="text" placeholder="Ingrese email" name="email" class="form-control mb-2"
                value="usuario@test.com">
            <input type="password" placeholder="Ingrese password" name="password" class="form-control mb-2"
                value="123123">
            <input type="password" placeholder="Repita password" name="repassword" class="form-control mb-2"
                value="123123">
            <button class="btn btn-primary" type="submit">Registrar usuario</button>
        </form>
    </div>
</div>

```

## Respuestas
- res.render() = Renderizar(Convertir en html) un archivo
- res.json() = Para responder en json
- res.send() = Para responder de forma sencilla.


## Modelo Usuario
- Definir el esquema sirve para hacer validaciones de DB
- juntándolo con las validaciones del backend y frontend la app es muy segura.
- Si no se respeta la estructura(esquema) a la hora de crear un documento, se genera un error.
models/User.js

```js
const mongoose = require('mongoose')
// Obtenemos la clase Schema de mongosee
const {Schema} = mongoose

const UserSchema = new Schema({
    // Estructura de los documentos
   //columna/propiedad userName
   // Es de tipo String ,y obligatorio
   // Se convierte en minuscula el valor
   userName: {
       type:String,
       lowercase:true,
       required:true,
   } ,
   //columna/propiedad email
   // Es de tipo String , obligatorio y unico
   // Se convierte en minuscula el valor
   email: {
    type:String,
    lowercase:true,
    required:true ,
    unique : true ,
    // Indexar
    index: {unique : true} , 
} ,
//columna/propiedad password
   // Es de tipo String y obligatorio 
password: {
    type:String ,
    required : true ,

} ,
//columna/propiedad tokenConfirm
   // Es de tipo String 
   // Valor por defecto: null
tokenConfirm : {
    type:String ,
    default:null,
} ,
//columna/propiedad cuentaConfirmada
   // Es de tipo boolean 
   // Valor por defecto: false
cuentaConfirmada: {
    type:Boolean,
    default:false
}

})
// Llevamos el esquema hacia un modelo y lo exportamos
module.exports = mongoose.model("User" , UserSchema)

```

:::tip Observacion
- La exportación se hace por defecto , por lo tanto se le puede cambiar el nombre al importarlo.
- Al momento de instanciar un modelo, solo las propiedades que contiene el esquema se van a instanciar y no propiedades inexistentes.
:::


:::tip indexar (index)
- Indexar significa crear un índice en una propiedad de la colección.
- Un índice funciona como un “atajo” que hace más rápidas las búsquedas por ese campo.
- En este caso, `email` está indexado para que MongoDB pueda encontrar usuarios por email más rápido.
- Además, al usar `unique: true`, el índice también evita que se repitan valores (por ejemplo, dos usuarios con el mismo email).

🧠 Analogía:
- Es como el índice de un libro.
- El índice es la sección del final (o del inicio) donde aparecen los temas importantes del libro junto con la página donde están.
- En lugar de leer todo el libro página por página para encontrar un tema, vas directamente a la página exacta usando ese índice.  
- Sin índice, tendrías que recorrer todo el libro desde el principio hasta encontrar lo que buscas.
:::

## Cifrar la contraseña
### Creamos un hash
:::warning
NUNCA GUARDAR LA CONTRASEÑA EN TEXTO PLANO
:::
- Usamos el modulo [bcryptjs](https://www.npmjs.com/package/bcryptjs)
```powershell
npm i bcryptjs
```


### Tutorial de bycriptjs
1.	Importarlo
2.	Generar saltos 
- Los saltos son como palabras aleatorias que se generan a partir de la contraseña para que no se pueda descifrar la misma
- Mientras el valor sea más alto , más recursos consume pero brinda mas seguridad
-  La cantidad de veces que se va a encriptar la contraseña en cadena.
3.	Encriptamos la contraseña con los saltos.

Se recomienda usar el async

## pre mongosee
- [info](https://mongoosejs.com/docs/api.html#schema_Schema-pre)
- Es  un hook(gancho) 
- Sintaxis : Esquema.pre(‘accion’ , function ) 
- El pree mongosee  sirve para ejecutar una función antes de una acción.
- La función tiene como parámetro el next que cumple la misma función que el del middleware. (en este caso que ejecute la ‘accion’)
- La función no debe ser una función flecha ya que utiliza el this para acceder al esquema.


Con pre vamos a hacer que  antes que se guarde en la BD, haga alguna acción (en nuestro caso encriptar).

models/User.js:
```js
const bycript = require('bcryptjs');
const mongoose = require('mongoose')
// Obtenemos la clase Schema de mongosee
const {Schema} = mongoose

const UserSchema = new Schema({
    // Estructura de los documentos
  // Si no se respeta la estructura a la hora de crear un documento, se genera un error.
   //columna/propiedad userName
   // Es de tipo String ,y obligatorio
   // Se convierte en minuscula el valor
   userName: {
       type:String,
       lowercase:true,
       required:true,
   } ,
   //columna/propiedad email
   // Es de tipo String , obligatorio y unico
   // Se convierte en minuscula el valor
   email: {
    type:String,
    lowercase:true,
    required:true ,
    unique : true ,
    // Indexar
    index: {unique : true} , 
} ,
//columna/propiedad password
   // Es de tipo String y obligatorio 
password: {
    type:String ,
    required : true ,

} ,
//columna/propiedad tokenConfirm
   // Es de tipo String 
   // Valor por defecto: null
tokenConfirm : {
    type:String ,
    default:null,
} ,
//columna/propiedad cuentaConfirmada
   // Es de tipo boolean 
   // Valor por defecto: false
cuentaConfirmada: {
    type:Boolean,
    default:false
}

})
// Se va a ejecutar  funcion() antes de llamar a nombrefuncion()
// Entonces cuando se llame a nombrefuncion() , tambien es llamada funcion()
// pre(nombrefuncion , funcion)
userSchema.pre('save' , async function(next){
 // Al ser una una instancia , podemos usar el this
 // Dentro de esta función, "this" representa la instancia del modelo,
// es decir, el documento que está ejecutando la acción (el usuario actual)
   const user = this
   //Si la contraseña no ha sido modificada , que siga (llame al nombrefuncion())
   if (!user.isModified('password')) return next();
   // Si la contraseña fue modificada o es nueva la contraseña
   try {
       // Especificamos la cantidad de saltos 
       const salt = await bycript.genSalt(10)
       // Ciframos la contraseña
       const hash = await bycript.hash(user.password , salt);
      
       user.password = hash;
       // Que ejecute nombrefuncion()
       next();
   } catch(error) {
       console.log(error);
       next()
   }

})


// Llevamos el esquema hacia un modelo y lo exportamos
module.exports = mongoose.model("User" , UserSchema)

```

:::tip logica
Antes que se guarde el usuario en la BD , se cifra la contraseña
:::

## ConfirmarCuenta

routes/auth.js
```js
const { loginForm, registerForm, registerUser, confirmarCuenta } = require('../controllers/authController');
// Respondemos una peticion GET a auth/confirmarCuenta/xxxxxxx
// variable token = xxxxxxx
router.get("/confirmarCuenta/:token" , confirmarCuenta )
module.exports = router;

```
controllers/authController.js
```js
const registerUser = async (req,res) => {
    const {userName , email , password} = req.body
    try {
        // Buscamos un usuario por el email
       let user = await User.findOne({email:email});
       // Si existe el usuario , retornamos un error
       if (user) throw new Error('ya existe el usuario');
       // Si no existe , creamos una instancia del modelo
      user = new User({userName , email , password  , tokenConfirm: nanoid()});
      user.save()
    res.redirect('/auth/login');


    } catch(e) {
        res.json({error: e.message});
    }
}
const confirmarCuenta = async(req,res) => {

}
module.exports = {
    loginForm , registerForm , registerUser , confirmarCuenta
}

```
Modificamos confirmarCuenta:
```js
const confirmarCuenta = async(req,res) => {
   
   //Leemos las variables de la ruta (variable token en este caso)
  const {token} = req.params;

  try {
      // Buscamos el usuario por el token(tokenConfirm) en la BD
      
       const user = await User.findOne({tokenConfirm:token});
       // Si no existe el usuario
       if (!user) throw new Error('No existe el usuario')
       // Si existe el usuario
       // Confirmamos la cuenta
       user.cuentaConfirmada = true;
       // Eliminamos el tokenConfirm
       user.tokenConfirm = null;
       // Lo guardamos en la BD
       // el metodo save() lo contiene el objeto de mongoDB user
       await user.save();
       res.redirect('/auth/login');
  }catch(error) {
    res.json({error: error.message});
  }
}

```
## Iniciar sesion

views/login.hbs
```hbs

<h1 class="text-center my-5">Login de usuarios</h1>
<div class="row justify-content-center">
    <div class="col-md-6">
        <form action="/auth/login" method="post">
          
            <input type="text" placeholder="Ingrese email" name="email" class="form-control mb-2"
                value="usuario@test.com">
            <input type="password" placeholder="Ingrese password" name="password" class="form-control mb-2"
                value="123123">
           
            <button class="btn btn-primary" type="submit">Acceder</button>
        </form>
    </div>
</div>

```
routes/auth.js
```js

const { loginForm, registerForm, registerUser, confirmarCuenta , loginUser } = require('../controllers/authController');
router.get("/login", loginForm);
router.post("/login", loginUser);

```
controllers/authController.js
```js
const registerForm = (req,res) => {
      res.render('register')
}
const loginUser = async (req,res) => {
  
}
module.exports = {
    loginForm , registerForm , registerUser , confirmarCuenta , loginUser
}

```
## Añadirle metodos al esquema mongoDB
- Le añadimos un método adicional al esquema, el cual lo adquiere el modelo posteriormente.
models/User.js
```js
//esquema.methods.nombre_metodo = funcion
// Le añadimos un metodo   lllamada comparePassword al esquema
// Tenemos acceso al this al ser un metodo 
UserSchema.methods.comparePassword = async function(password) {
    //bycript.compare(contraseña , clave cifrada(hash))
    // Compara una contraseña no cifrada con una cifrada
    return await bycript.compare(password , this.password)
}

// Llevamos el esquema hacia un modelo y lo exportamos
module.exports = mongoose.model("User" , UserSchema)

```
Modificamos el loginUser(req,res) de authController.js
```js

const loginUser = async (req,res) => {
  const {email,password} = req.body;
  try {
    // email:email
      const user = await User.findOne({email})
      //Si no existe el usuario 
      if (!user) throw new Error('No existe este email');
      // Si existe el usuario
      // Verifica que la cuenta esta confirmada
      if (!user.cuentaConfirmada) throw new Error('Falta confirmar cuenta');
      //Usamos el metodo que creamos
      //Que devuelve true si la contraseña es correcta
      // Verifica que la contraseña sea valida
      if (!await user.comparePassword(password)) throw new Error('Contraseña no correcta');
      // Y si llego hasta aca , el usuario el valido
      res.redirect('/');
  } catch(error) {
         console.log(error);
         res.send(error.message);
  }
}

module.exports = {
    loginForm , registerForm , registerUser , confirmarCuenta , loginUser
}


```
## Favicon
en la carpeta public/img ponemos la imagen

quedando: public/img/favicon.ico

main.hbs
```hbs
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desde HBS</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
     <link rel="icon" type="image/x-icon" href="/img/favicon.ico">
</head>

```
navbar.hbs
```hbs
 <a class="nav-link" href="/auth/register">Register</a>
        <a class="nav-link" href="/auth/login">Login</a>
        <a class="nav-link" href="/auth/logout">LogOut</a>

```


## Session
- El middleware express-session almacena los datos de sesión en el servidor; sólo guarda el ID de sesión en la propia cookie, no los datos de sesión. De forma predeterminada, utiliza el almacenamiento en memoria y no está diseñado para un entorno de producción.
- En una api rest NO SE DEBE trabajar con esto
:::tip middleware
Se ejecute antes que la petición llegue al servidor y la gestione.
:::
- Usaremos el modulo [express-sesion](http://expressjs.com/en/resources/middleware/session.html) para trabajar con la sesiones en express
- Usaremos el modulo [connect-mongo](https://www.npmjs.com/package/connect-mongo) para guardar la sesion en la BD
```powershell
npm i express-session
npm i connect-mongo

```
### Ejemplo
index.js 
```js
const session = require("express-session");
const express = require("express");
const { create } = require("express-handlebars");
 require('dotenv').config()
  require('./database/conexion');
const hbs = create({
    extname: ".hbs",
    partialsDir: ["views/components"],
});
const app = express();
// Configuramos la sesion con el middleware.
app.use(
  session({
    // secret: clave (string) secreta usada para proteger la cookie de la sesión
    // Se utiliza para validar que la sesión sea válida, como si fuera un token
    // Esto evita que la sesión pueda ser manipulada por el cliente
      secret: 'palabra secreta',
    // resave: indica si la sesión se vuelve a guardar en el store
    // aunque no haya sido modificada en la request
    // false = evita escrituras innecesarias
      resave: false,
    // saveUninitialized: guarda sesiones nuevas aunque no tengan datos
    // false = no crea sesiones vacías (mejor rendimiento y seguridad)
      saveUninitialized: false,
    // name: nombre de la cookie donde se guarda el ID de la sesión
    // sirve para no usar el nombre por defecto "connect.sid"
      name: "nombre de la palabra secreta"
  })
);
app.get("/ruta-protegida" , (req,res) => {
  // Si existe una sesion devolvemos el usuario , en caso contrario mandamos "Sin sesion de usuario"
  res.json(req.session.usuario || "Sin sesion de usuario")
})
app.get('/crear-session' , (req,res) => {
  // Creamos la sesion
  req.session.usuario = "usuario";
  res.redirect('/ruta-protegida');
})

```
:::tip Observacion
La sesion se crea en la memoria (nuestra maquina)
:::

Tambien podemos destruir la sesion:
```js
app.get("/ruta-protegida" , (req,res) => {
  // Si existe una sesion devolvemos el usuario , en caso contrario mandamos "Sin sesion de usuario"
  res.json(req.session.usuario || "Sin sesion de usuario")
})
app.get('/crear-session' , (req,res) => {
  // Creamos la sesion
  req.session.usuario = "usuario";
  res.redirect('/ruta-protegida');
})
app.get('/destruir-sesion' , (req,res) => {
  // Destruirmos la sesion
  req.session.destroy();
  res.redirect('/ruta-protegida');
})

```


## Flash
- El flash es un área especial de la sesión que se utiliza para almacenar mensajes. Los mensajes se escriben en la memoria flash y se borran después de mostrarse al usuario. El flash generalmente se usa en combinación con redireccionamientos, lo que garantiza que el mensaje esté disponible para la siguiente página que se va a representar.
- Viven solamente en una redirección. Si se navega a otro lado se destruye.
- Usaremos el modulo [connect-flash](https://www.npmjs.com/package/connect-flash) para trabajar con flash
-  Es un tipo de sesion , que solo vive una vez (en una redirección)
```powershell
npm i connect-flash
```
### Ejemplo
index.js 
```js
const session = require("express-session");
const flash = require("connect-flash");
const express = require("express");
const { create } = require("express-handlebars");
 require('dotenv').config()
  require('./database/conexion');
const hbs = create({
    extname: ".hbs",
    partialsDir: ["views/components"],
});
const app = express();
// Configuramos la sesion con el middleware.
app.use(
  session({
      secret: 'palabra secreta',
      resave: false,
      saveUninitialized: false,
      name: "nombre de secreto"
  })
);
// Configuramos flash con el middleware
app.use(flash());
app.get('/mensaje-flash' , (req, res) => {
  // Muestra un mensaje flash cuya key es "mensaje"
  res.json(req.flash('mensaje'))
})
app.get('/crear-mensaje' , (req, res) => {
    // Crea un mensaje flash
  //flash( key , valor)
  // La key contiene el valor
  // key -> valor
  //"mensaje" -> "este es un mensaje"
  req.flash("mensaje" , "este es un mensaje")
  res.redirect('/mensaje-flash');
})

```
:::tip Observacion
- A diferencia de session-express, la sesion solo dura en la redirección (solo una url)
- Solo viven en una url.
- Cuando llamas un mensaje flash, se destruye
- Flash requiere de la configuración de la sesion (express-sesion)
:::

## Validaciones(Express-validator)
:::warning Aclaracion
- Los dos ejemplos anteriores(sesion y flash) no forman parte del proyecto 
- Flash y Session se usaran  para mostrar los mensajes de errores de las validaciones
:::
- Vamos a usar el modulo [express-validator](https://express-validator.github.io/docs/) que nos sirve para validar
```powershell
npm i express-validator
```
:::tip Objetivo
Antes que se guarde un usuario en la BD , vamos a validar los datos.
:::

routes/auth.js

Configuramos una validacion del nombre usuario:
```js
const {body} = require('express-validator');
// Tiene un array de middleware
router.post("/register" ,  [
    
    // body ("valor-atributoname/propiedad" , "mensaje de error").metodo.metodo.metodo....
    // valor-atributoname/propiedad = corresponde a una propiedad del body(los datos se envian por el body) que se va a evaluar
    // trim() = Limpia los espacios en blanco del lado izquierda y derecho
    // notEmpty()  = Para que no este vacio
    // escape() = Para que solo mande caracteres y ignore html
    body("userName" , "Ingrese un nombre válido").trim().notEmpty().escape(),
] ,  registerUser);

```
:::tip Observacion 
Un array de middleware sirve para implementar muchos middleware en una ruta
:::
authController.js
```js
const {validationResult } = require('express-validator');
const registerUser = async (req,res) => {
  // Hace la validacion que hemos configurado
  const errors = validationResult(req);
  //Si tiene errores , los devuelve
  if (!errors.isEmpty()) {
    return res.json(errors);
  }
    const {userName , email , password} = req.body

```
Configuramos las demas Validaciones:

routes/auth.js
```js
// Tiene un array de middleware
router.post("/register" ,  [
   // body ("valor-atributoname/propiedad" , "mensaje de error").metodo.metodo.metodo....
    // valor-atributoname/propiedad = corresponde a una propiedad del body(los datos se envian por el body) que se va a evaluar
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
- Si se cumple la validación , no devuelve nada
- Si no se cumple , devuelve el mensaje de error.
:::
### Validamos el login también:
routes/auth.js
```js
router.post("/login", [body("email" , "Ingrese un email valido").trim().isEmail().normalizeEmail() ,  body("password" , "Contraseña de minimo 6 caracteres").trim().isLength({min:6}).escape()
 ] , loginUser);

```
:::tip normalizeEmail()
- Convierte el email a un formato estándar.  
- Pasa todo el email a minúsculas para evitar diferencias.  
- Elimina partes del email que no cambian el correo real (como puntos o etiquetas en algunos casos).  
- Ayuda a evitar duplicados y errores.  
:::
authController.js:
```js
const loginUser = async (req,res) => {
  // Hace la validacion que hemos configurado
  const errors = validationResult(req);
  //Si tiene errores , los devuelve
  if (!errors.isEmpty()) {
    return res.json(errors);
  }
  const {email,password} = req.body;

```
## Validaciones en la vista
Ponemos las Validaciones en la vista:
:::tip
Ahora si vamos a usar flash y session.
:::

:::tip array()
Usamos el método array() el cual lo convierte en array.
Empezamos con el login:
:::
authController.js
```js
const loginForm = (req,res) => {
       res.render('login' , {mensajes : req.flash("mensajes")})
}
const loginUser = async (req,res) => {
  // Hace la validacion que hemos configurado
  const errors = validationResult(req);
  //Si tiene errores , los devuelve
  if (!errors.isEmpty()) {
    req.flash("mensajes" , errors.array());
    return res.redirect('/auth/login')
  }
  const {email,password} = req.body;
  try {
    // email:email
      const user = await User.findOne({email})
      //Si no existe el usuario 
      if (!user) throw new Error('No existe este email');
      // Si existe el usuario
      // Verifica que la cuenta esta confirmada
      if (!user.cuentaConfirmada) throw new Error('Falta confirmar cuenta');
      //Usamos el metodo que creamos
      //Que devuelve true si la contraseña es correcta
      // Verifica que la contraseña sea valida
      if (!await user.comparePassword(password)) throw new Error('Contraseña incorrecta');
      // Y si llego hasta aca , el usuario el valido
      res.redirect('/');
  } catch(error) {
    req.flash("mensajes" , [{msg: error.message}]);
    return res.redirect('/auth/login')
  }
}

```
:::tip Observacion
- Los valores que se mandan a la vista pueden ser null 
- Si no se manda un valor , se considera null
:::

views/layouts/main.hbs
```js
<body>
    {{> Navbar}}
    <div class="container mt-5">
      {{#each mensajes }}
              <div class="alert alert-dark mb-2"> {{this.msg}}</div>
      {{/each}}

      
 {{{body}}}
    </div>
     
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
      <script src="/js/app.js"></script>
</body>

```
:::tip Observación
- Si mensajes es null, no se ejecuta el #each
:::

Ahora lo hacemos en el registro

authController.js

```js
const registerForm = (req,res) => {
      res.render('register' , {mensajes : req.flash("mensajes")})
}
const registerUser = async (req,res) => {
  // Hace la validacion que hemos configurado
  const errors = validationResult(req);
  //Si tiene errores , los devuelve
  if (!errors.isEmpty()) {
    req.flash("mensajes" , errors.array());
    return res.redirect('/auth/register')
  }
    const {userName , email , password} = req.body
    try {
        // Buscamos un usuario por el email
       let user = await User.findOne({email:email});
       // Si existe el usuario , retornamos un error
       if (user) throw new Error('ya existe el usuario');
       // Si no existe , creamos una instancia del modelo
      user = new User({userName , email , password  , tokenConfirm: nanoid()});
      user.save()
      req.flash("mensajes" , [{msg: "Revisa tu correo electronico y valida cuenta"}]);
      res.redirect('/auth/login');
    } catch(error) {
      req.flash("mensajes" , [{msg: error.message}]);
      return res.redirect('/auth/register')
    }
}

```
Hacemos lo mismo en la ruta de confirmarCuenta
```js
const confirmarCuenta = async(req,res) => {
   
   //Leemos las variables de la ruta (variable token en este caso)
  const {token} = req.params;

  try {
      // Buscamos el usuario por el token en la BD
      
       const user = await User.findOne({tokenConfirm:token});
       // Si no existe el usuario
       if (!user) throw new Error('No existe el usuario')
       // Si existe el usuario
       // Confirmamos la cuenta
       user.cuentaConfirmada = true;
       // Eliminamos el tokenConfirm
       user.tokenConfirm = null;
       // Lo guardamos en la BD
       // el metodo save() lo contiene el objeto de mongoDB user
       await user.save();
       req.flash("mensajes" , [{msg: "Cuenta verificada"}]);
       res.redirect('/auth/login');
  }catch(error) {
    req.flash("mensajes" , [{msg: error.message}]);
    return res.redirect('/auth/login')
  }
}


```
## Passport
- Podemos gestionar nosotros las sesiones o que las gestione un tercero como Passport
- [Passport](http://www.passportjs.org)  es un modulo que te permite gestionar sesiones , ofrece un montón de estrategias para validar al usuario. Pero en el proyecto solo vamos a configurar Passport para que gestione las sesiones.
```powershell
npm install passport
```

### req.login()
- Lo genera passport con las configuraciones que tiene configurada
- Sirve para crear una sesion
- Le manda el usuario a la función serializeUser para crear el req.user
### serializerUser() 
- Es una funcion que invoca req.login()
- Crea la sesion con la ID y el nombre del usuario (los datos se pueden configurar)
```js
// Recibe un callback con dos parametros 
// user = el usuario que le vamos a enviar 
// done = Para decirle que se hizo con exito
passport.serializeUser((user , done) => {
  // done (errores , {los datos que van al req.user})
  // La funcion done crea el req.user 
   return done(null , {id: user._id , userName: user.userName})
})

```
### deserializerUser() 
- Verifica que la sesion sea correcta/valida para restablecer la sesion . 
- Sirve Para mantener/actualizar la sesion cuando se actualiza el sitio web.
```js
// Tiene un callback con los mismos parametros que serializeUser()
passport.deserializeUser((user , done) => {
  // done(errores , usuario)
  // la funcion done vuelve a crear el req.user
  //  1 alternativa
  return  done(null , user)
  // 2 alternativa
  return  done(null , {id:id , userName: user})
})

```
### logout()
- Cierra/Destruye la sesion
### En el proyecto
:::tip Observacion
La configuración de passport se hace después de la configuración de session y flash , ya que este modulo  las utiliza (para gestionarlas)
:::
index.js
```js
const session = require("express-session");
const flash = require("connect-flash");
const express = require("express");
const { create } = require("express-handlebars");
const passport = require("passport");
const User = require("./models/User");
require('dotenv').config()
require('./database/conexion');
const hbs = create({
    extname: ".hbs",
    partialsDir: ["views/components"],
});
const app = express();
// Configuramos la sesion con el middleware.
app.use(
  session({
      secret: 'palabra secreta',
      resave: false,
      saveUninitialized: false,
      name: "nombre de secreto"
  })
);
// Configuramos flash con el middleware
app.use(flash());
// Configuramos passport con el middleware
// Inicializa Passport en la aplicación
app.use(passport.initialize());
// Permite que Passport use sesiones para mantener al usuario autenticado
app.use(passport.session());

// Recibe un callback con dos parametros 
// user = el usuario que le vamos a enviar 
// done = Para decirle que se hizo con exito
passport.serializeUser((user , done) => {
  // done (errores , {los datos que van al req.user})
  // La funcion done crea el req.user 
   return done(null , {id: user._id , userName: user.userName})
})

// Tiene un callback con los mismos parametros que serializeUser()
passport.deserializeUser(async (user , done) => {
  // done(errores , usuario)
  // la funcion done vuelve a crear el req.user

 const userDB = await User.findById(user.id);
  return  done(null , {id:userDB._id , userName: userDB.userName})
})

app.use(express.urlencoded({extended:true}))
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./views");
app.use(express.static(__dirname + "/public"));
app.use("/" , require('./routes/home'));
app.use("/auth" , require('./routes/auth'));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("server andando 🔥 http://localhost:5000"));

```
## Middleware para verificar sesion
- Tenemos que crear un middleware que verifique que el usuario tenga una sesion activa

creamos el archivo verificarUser.js dentro de la carpeta middlewares
```js
module.exports = (req , res , next) => {
  // El req ya va a tener todas las configuraciones de passport
   // isAuthenticated() es un metodo de  passport
    if (req.isAuthenticated()) {
        // Si el usuario tiene una  sesion  activa que pase al siguiente middleware o que pase al servidor para poder gestionar la peticion.
        return next();
    }
    // Si no tiene una sesion activa
    res.redirect('/auth/login');
}

```
routes/home.js
```js
const verificarUser = require('../middlewares/verificarUser');
router.get("/" , verificarUser,  leerUrls)

```
authController.js
:::tip Observacion
- Usamos el método login de Passport para crear la sesion de usuario
:::
```js
const loginUser = async (req,res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    req.flash("mensajes" , errors.array());
    return res.redirect('/auth/login')
  }
  const {email,password} = req.body;
  try {
      const user = await User.findOne({email})
      if (!user) throw new Error('No existe este email');
      if (!user.cuentaConfirmada) throw new Error('Falta confirmar cuenta');
      if (!await user.comparePassword(password)) throw new Error('Contraseña no correcta');
    // login(usuario, callback)
    //
    // usuario: objeto que contiene la información del usuario que se guarda en la sesión
    //
    // callback: función que se ejecuta cuando termina de crearse la sesión
    // recibe un parámetro "error" para poder manejar posibles errores
     req.login(user , function(error)  {
              // Si hay errores 
              if (error) throw new Error('Error al crear la sesion')
               // Si no hay errores
               res.redirect('/');
     })

  } catch(error) {
    req.flash("mensajes" , [{msg: error.message}]);
    return res.redirect('/auth/login')
  }
}

```
:::warning 
Como la sesion esta en memoria (en la maquina), al reiniciar el servidor se pierde todo.
:::
## Cerrar sesion
routes/auth.js
```js
const { loginForm, registerForm, registerUser, confirmarCuenta , loginUser, cerrarSesion } = require('../controllers/authController');
router.get("/logout" , cerrarSesion)
module.exports = router;

```
authController.js
:::tip  Observacion
Usaremos el método logout que viene del Passport
:::
```js
const cerrarSesion = (req,res) => {
  //el metodo logout de passport
  // logout() = cierra la sesion
  req.logout();
  return res.redirect('/auth/login')
}
module.exports = {
    loginForm , registerForm , registerUser , confirmarCuenta , loginUser , cerrarSesion
}

```
## CSRF protection middleware
Sirve para:
- Comprobar que los formularios sean definitivamente de nuestra web y no de un tercero.
- Comprobar que los formularios son enviados desde nuestro sitio.
- Para dicho objetivo usamos el modulo [csurf](https://github.com/expressjs/csurf)
```powershell
npm install csurf
```
Lo configuramos y lo llamamos en el proyecto

index.js

:::tip Objetivo 
Habilitar Las protecciones (Validaciones)
:::
```js
const session = require("express-session");
const flash = require("connect-flash");
const express = require("express");
const { create } = require("express-handlebars");
const passport = require("passport");
const User = require("./models/User");
require('dotenv').config()
require('./database/conexion');
const csrf = require("csurf");
//  configuramos csrf con el middleware 
app.use(csrf());

```
:::tip 
Se recomienda reiniciar el servidor (bajar nodemon y volver a levantarlo)
:::

:::tip Resultado
Te tirara error en el home.

Eso sucede porque no especificamos que el formulario proviene de nuestro sitio y por lo tanto es seguro.


:::

Para especificar que los formularios provienen de nuestro sitio, los formularios tienen que enviar un token que genera csr.

Para enviar dicho token , vamos a usar un input de tipo hidden en todos los formularios
:::tip warning
el name del input no se puede modificar
:::
```html

<input type="hidden" name="_csrf" value="{{csrfToken}}" />

```
En views/components/Form.hbs
```hbs
{{#if url}}
    <form action="/editar/{{url._id}}" method="post">
    <input type="hidden" name="_csrf" value="{{csrfToken}}" />
<input  value="{{url.origin}}" type="text" placeholder="Ingrese URL" name="origin" class="form-control my-2">
 <button type="submit" class="btn btn-warning w-100 mb-2">Editar</button>
</form>
{{else}}
<form action="/" method="post">
<input type="hidden" name="_csrf" value="{{csrfToken}}" />
<input type="text" placeholder="Ingrese URL" name="origin" class="form-control my-2">
 <button type="submit" class="btn btn-primary w-100 mb-2">Agregar Url</button>
</form>

{{/if}}

```
views/login.hbs
```hbs

<h1 class="text-center my-5">Login de usuarios</h1>
<div class="row justify-content-center">
    <div class="col-md-6">
        <form action="/auth/login" method="post">
          <input type="hidden" name="_csrf" value="{{csrfToken}}" />
            <input type="text" placeholder="Ingrese email" name="email" class="form-control mb-2"
                value="usuario@test.com">
            <input type="password" placeholder="Ingrese password" name="password" class="form-control mb-2"
                value="123123">
           
            <button class="btn btn-primary" type="submit">Acceder</button>
        </form>
    </div>
</div>


```

y asi con todas las vistas que tengan formularios


### Ahora vamos a mandarle ese dato a la vista cuando renderizamos

authController.js

#### De forma manual:

```js
const registerForm = (req,res) => {
      res.render('register' , {mensajes : req.flash("mensajes") , csrfToken:req.csrfToken()})
}

```
:::tip Observacion 
- el método  csrfToken() lo genera csurf cuando lo configuramos con el middleware.
- ese método devuelve el token que genera csurf y que este mismo lo usa para comprobar si el formulario proviene de nuestro sitio.
:::
#### De forma global a través de un middleware
- No se necesita enviarlo en cada ruta como en la forma manual.
```js
app.use(express.urlencoded({extended:true}));
app.use(csrf());

// variables globales para las vistas
// Enviamos una variable a todas las vistas que renderizamos 
  // res.locals.nombreVariable = valor;

app.use((req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
});

```
:::tip Observacion 
- Se envia a todas las vistas a traves del middleware.
- El token se debe enviar después de configurar el body de un formulario ``(app.use(express.urlencoded({extended:true})))`` ya que se envia por POST
:::


## Variables globales 
- Sirven para enviar datos a todas las vistas a través de un middleware.
- Hacemos más variables globales
authController.js
```js
const loginForm = (req,res) => {
       res.render('login' )
}
const registerForm = (req,res) => {
      res.render('register' )
}

```
index.js
```js
// variables globales para las vistas
// Enviamos dos variables a todas las vistas que renderizamos 
  // res.locals.nombreVariable = valor;

app.use((req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    res.locals.mensajes = req.flash("mensajes");
    next();
});

```
##  Cambios en el proyecto

### Verificamos la sesion en las rutas de home
:::tip observacion
Podemos poner varios middleware en una ruta
:::
```js
const express = require('express');
const router = express.Router();
const {leerUrls , agregarUrl , eliminarUrl , editarUrlForm , editarUrl , redireccionamiento} = require('../controllers/homeController' )
const urlValida = require('../middlewares/urlValida');
const verificarUser = require('../middlewares/verificarUser');
router.get("/" , verificarUser,  leerUrls)
router.post("/" , verificarUser , urlValida ,  agregarUrl)
router.get("/eliminar/:id"  , verificarUser , eliminarUrl);
router.get("/editar/:id", verificarUser ,editarUrlForm);
router.post("/editar/:id" , verificarUser , urlValida ,  editarUrl)
router.get("/:url"  , redireccionamiento)
module.exports = router;

```
###  Ponemos mensajes flash que se puedan ver en la vista sobre las validaciones de la url
middlewares/urlValida.js
```js
// Modulo que viene incorporado con Node.js
const { URL } = require("url");
const urlValidar = (req,res , next) => {
 // Si todo esta correcto llamamos a next
 // next = eliminarUrl
    try {
        // Leo el body del formulario
        const { origin } = req.body;
        // Se crea una nueva instancia de URL con la informacion del formulario
        const urlFrontend = new URL(origin);
        //La instancia(objeto) tiene la propiedad origin
        //Si es distinto a null , tiene el formato de url
        if (urlFrontend.origin !== "null") {
            // Comprueba que tenga el protocolo http o https y si lo tiene llama al next()
            if (
                urlFrontend.protocol === "http:" ||
                urlFrontend.protocol === "https:"
            ) {
                return next();
            }
            throw new Error("Tiene que tener https://");
        }
        // Lanzamos un error en caso que no sea valida
        throw new Error("no válida 😲");
    } catch (error) {
        console.log("Invalid URL:"+req.body.origin);
        if (error.message === "Invalid URL: "+req.body.origin) {
            req.flash("mensajes", [{ msg: "URL no válida" }]);
        } else {
            req.flash("mensajes", [{ msg: error.message }]);
        }
       
        
    return res.redirect('/')
    }
};

module.exports = urlValidar;

```
## ref mongoDB
- En mongoDB Podemos hacer una referencia (parecido a una relación)

models/Url.js
```js

const mongoose = require('mongoose')
const {Schema} = mongoose
const urlSchema = new Schema({

    origin: {
        type: String,
        unique: true,
        required: true
    },
    shortURL: {
        type: String,
        unique: true,
        required: true,
    } ,
    // Referencia a un usuario 
    user: {
        // Schema.Types.ObjectId  =   De tipo ID de un documento de la coleccion.
         type: Schema.Types.ObjectId,
         // ref: nombre de la coleccion(nombre del modelo) al que hace referencia
         ref:"User" ,
         required:true,
    }
})

const Url = mongoose.model('Url', urlSchema)
module.exports = Url;

```
:::tip Explicacion como si fuera relacional
- El campo user tendra una referencia a la columna _id(type:Schema.Types.ObjectId) de la tabla User(ref:”User”).
- _id lo genera mongoDB de manera automática.
:::
HomeController.js
```js
// Importamos el modelo
const Url = require('../models/Url');
const {nanoid} = require('nanoid');

const leerUrls = async(req,res) => {
   try {
       // req.user es la informacion del usuario que se encuentra en la sesion
    // find puede recibir un objeto igual que findOne()
    // para implementar un where en el select

     // Buscamos todas las url donde user = req.user.id
     // en SQL sería algo como:
    // SELECT * FROM urls WHERE user = req.user.id
      const urls = await Url.find({user:req.user.id}).lean();
      res.render('home' , {urls:urls })
   } catch (e) {
    req.flash("mensajes" , [{msg: error.message}]);
    return res.redirect('/')
   }

    }
const agregarUrl = async(req,res) => {
    const {origin} = req.body;
    try {
        // Generamos una nueva instancia del modelo con la id del usuario
       const url = new Url({origin:origin , shortURL:nanoid(6) , user: req.user.id})
       await url.save();
       req.flash("mensajes" , [{msg:"URL AGREGADA"}])
       res.redirect('/');
    } catch(error) {
        req.flash("mensajes" , [{msg: error.message}]);
        return res.redirect('/')
    }
}
const eliminarUrl = async(req,res) => {
    
    const {id} = req.params;
    try {
        // Buscamos la url por la id
       const url = await Url.findById(id);
       // Si la url no pertenece al usuario
       if (!url.user.equals(req.user.id)) {
         throw new Error("No es tu url ");
       }
       // Lo eliminamos  de la BD con el metodo remove() que viene del objeto MongoDB
       await url.remove();
       req.flash("mensajes" , [{msg:"URL ELIMINADA"}])
       res.redirect('/');
     } catch(error) {
        req.flash("mensajes" , [{msg: error.message}]);
        return res.redirect('/')
     }
}

const editarUrlForm = async(req,res) => {
    
    const {id} = req.params;
    try {
      
       const url = await Url.findById(id).lean()
       if (!url.user.equals(req.user.id)) {
        throw new Error("No es tu url ");
      }
      
       res.render('home',{url})
    } catch(error) {
        req.flash("mensajes" , [{msg: error.message}]);
        return res.redirect('/')
    }
}
const editarUrl = async(req,res) => {
  
    const {id} = req.params;
    const {origin} = req.body;
    try {
       // Buscamos la url por la id
       const url = await Url.findById(id);
       // Si la url no pertenece al usuario
       if (!url.user.equals(req.user.id)) {
         throw new Error("No es tu url ");
       }
       // Lo actualizamos  en la BD con el metodo updateOne() que viene del objeto MongoDB
       //recibe un objeto{} con los datos que se van a editar
       //origin:origin
       await url.updateOne({origin});
       req.flash("mensajes" , [{msg:"URL EDITADA"}])
       res.redirect('/');
    
    } catch(error) {
        req.flash("mensajes" , [{msg: error.message}]);
        return res.redirect('/')
    }
}

const redireccionamiento = async(req,res) => {
    const {url} = req.params
    try {
       // Modificar en la documentacion
       const urlDB = await Url.findOne({shortURL: url })
       res.redirect(urlDB.origin);
    } catch(error) {
        req.flash("mensajes" , [{msg: "No existe esta url configurada"}]);
        return res.redirect('/auth/login')
    }
}
   module.exports = {leerUrls , agregarUrl , eliminarUrl , editarUrlForm , editarUrl , redireccionamiento};

```
## Nodemailer
- Es un [módulo](https://nodemailer.com/about/) para enviar correos electrónicos
- Para usarlo ,  se debe configurar un hosting (Gmail, servidor, etc) para   que acepte el envío de información.
- Para simular un hosting usaremos [mailtrap](https://mailtrap.io) que prueba los correo electronicos y simula que los esta enviando. Tambien nos permite ver los correos enviados.
### Guia de mailtrap
1. Nos registramos
2. En integraciones nos aparece NodeMailer
3. AL SELECCIONARLO ,NOS APARECE LA CONFIGURACION para crear el transportador

Algo asi:
```js
var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "815fddfe9d615f",
    pass: "8a37d820c188a6"
  }
});

```
4.  Lo de la autenticación lo vamos a tener que pasar a un archivo .env ya que es información sensible

:::tip transportador (Mailtrap / Nodemailer)
- Un transportador es la configuración que usa Nodemailer para conectarse a un servicio de email.
- Es un “medio de transporte” que se encarga de comunicar tu aplicación con el servidor de email (por ejemplo Mailtrap, Gmail, etc.).
- Es el encargado de comunicarse con el servidor de correo, es decir, intercambiar información con él para poder enviar los emails.
- Ahí se definen datos como:
    - servidor SMTP
    - puerto
    - usuario
    - contraseña
- Sin el transportador, Nodemailer no puede enviar emails.
:::


### Guia  de NodeMailer
1. Se importa
2. Se crea un transportador con las configuraciones del hosting
3. Se envia el correo

### En el proyecto 
```powershell
npm install nodemailer
```
AuthController.js
```js
const nodemailer = require("nodemailer");
require('dotenv').config()
const registerUser = async (req,res) => {
  
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    req.flash("mensajes" , errors.array());
    return res.redirect('/auth/register')
  }
    const {userName , email , password} = req.body
    try {
        
       let user = await User.findOne({email:email});
      
       if (user) throw new Error('ya existe el usuario');
     
      user = new User({userName , email , password  , tokenConfirm: nanoid()});
      user.save()
      // Creamos el transportador
      const transporte = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: process.env.userEmail,
          pass: process.env.userPassword
        }
      });
      // Enviamos el correo 
      let info = await transporte.sendMail({
        // Quien lo envia
        from: '"Fred Foo 👻" <foo@example.com>', 
        // A quien se envia
        to: user.email, 
        // Asunto
        subject: "Verifica tu cuenta de correo",
        // El contenido que se envia
        //texto plano  
        //text: "Hello world?",
        //texto en HTML
        html: `<a href="http://localhost:5000/auth/confirmarCuenta/${user.tokenConfirm}">Verifica tu cuenta aqui</a>`, 
      });
      req.flash("mensajes" , [{msg: "Revisa tu correo electronico y valida cuenta"}]);
      res.redirect('/auth/login');
    } catch(error) {
      req.flash("mensajes" , [{msg: error.message}]);
      return res.redirect('/auth/register')
    }
}

```
:::tip Observacion 
el require('dotenv').config() se ubica en todos los archivos que utiliza variables de entorno
:::
.env
```js
URI=mongodb+srv://User_API:contraseña@cluster.xcibc.mongodb.net/dbUrl?retryWrites=true&w=majority
userEmail=815fddfe9d615f
userPassword=8a37d820c188a6

```
## Subir archivos
- [Pagina para generar imagen aleatoria](https://picsum.photos)
- Las imagenes las guardamos en la carpeta public (En este ejemplo public/img/perfiles)
- El modulo [multer](https://www.npmjs.com/package/multer) o el modulo [formidable](https://www.npmjs.com/package/formidable) contiene la logica para manipular las imagenes 
- En el ejemplo se utiliza formidable
- También usaremos el módulo [jimp](https://www.npmjs.com/package/jimp)   para editar la imagen (redimensionar , quitar calidad , etc)


Models/User
```js
const UserSchema = new Schema({
  
   userName: {
       type:String,
       lowercase:true,
       required:true,
   } ,

   email: {
    type:String,
    lowercase:true,
    required:true ,
    unique : true ,
    // Indexar
    index: {unique : true} , 
} ,

password: {
    type:String ,
    required : true ,

} ,

tokenConfirm : {
    type:String ,
    default:null,
} ,

cuentaConfirmada: {
    type:Boolean,
    default:false
} , 
imagen: {
    type:String ,
    default: null,
}

})

```
views/perfil.hbs
```hbs

<h1 class="text-center">Nombre del usuario</h1>
<p class="text-center">Edita aqui tu perfil</p>
<div class="my-2 text-center">
    <img src="/img/perfiles/imagen.jpg" alt="" class="rounded-circle">
</div>
<form action="/perfil?_csrf={{csrfToken}}" method="post" enctype="multipart/form-data">
 <input class="form-control mb-2 form-control-sm" type="file" id="formFile" name="myFile" />
 <button class="btn btn-dark my-3">Cambiar imagen de perfil</button>
</form>

```
:::tip Observacion 
- Usa el atributo `enctype="multipart/form-data"` en el formulario para permitir el envío de imágenes.
- Utiliza el atributo `multiple` en el elemento `<input type="file">` si deseas permitir la carga de varios archivos.
- En los formularios que envían imágenes, el token CSRF debe enviarse como parámetro en la URL (query string):
```html
action="/perfil?_csrf={{csrfToken}}"
```
:::
Creamos un archivo perfilController.js dentro de la carpeta controllers.

```js
//module.exports.nombrefuncion = funcion
// se exporta el nombrefuncion 
module.exports.formPerfil = async(req,res) => {
   res.render("perfil");
} 
module.exports.editarFotoPerfil = async(req,res) => {
   
} 

```
:::tip Observacion
Otra forma de exportar
:::
routes/home.js
```js
const { formPerfil, editarFotoPerfil } = require('../controllers/perfilController');
router.get("/perfil" , verificarUser , formPerfil);
router.post("/perfil" , verificarUser , editarFotoPerfil);

```
views/components/Navbar.hbs
- Añadimos la ruta en el menú
```html
  <div class="navbar-nav ms-auto">
        <a class="nav-link active" aria-current="page" href="/">Home</a>
        <a class="nav-link" href="/auth/register">Register</a>
        <a class="nav-link" href="/perfil">Perfil</a>
        <a class="nav-link" href="/auth/login">Login</a>
        <a class="nav-link" href="/auth/logout">LogOut</a>
      </div>

```
## Formidable
```powershell
npm i formidable
```
### Pequeño tutorial
 1. Se crea una instancia 
 ```js
 const form = formidable({ multiples: true });
 ```


:::tip Observacion 
- multiples = boolean Sirve para especificar si son varias imágenes
:::


2. Usamos el metodo parse() de la instancia para leer y procesar la imagen 
- A través de files (parámetro del callback de la función parse()), tenemos toda la información de la imagen (extensión , tamaño ,etc). Toda esa información viene de una propiedad que se llama igual que el valor del atributo name del input file

perfilController.js
```js
const formidable = require('formidable');
//module.exports.nombrefuncion = funcion
// se exporta el nombrefuncion 
module.exports.formPerfil = async(req,res) => {
   res.render("perfil");
} 
module.exports.editarFotoPerfil = async(req,res) => {
   // Instanciamos un objeto formidable
    // IncomingForm es una clase de Formidable que:
    // - Lee los datos enviados por el formulario.
    // - Separa los input de texto de los archivos.
    // - Guarda temporalmente los archivos subidos.
    // - Nos permite acceder a ellos mediante form.parse().
   const form = new formidable.IncomingForm()
   // Especificamos el tamaño  maximo del archivo
   // 50 * 1024 * 1024 = 5MB 
   form.maxFileSize = 50 * 1024 * 1024
   // form.parse(datos del formulario, función callback).
   // req contiene los datos enviados por el formulario, incluyendo las imágenes.
    // La función callback se ejecuta cuando Formidable termina de procesar el formulario.
    //
    // - err: errores durante el procesamiento.
    // - fields: campos de texto.
    // - files: archivos subidos por el usuario.
   form.parse(req , async(err, fields , files) => {
      try {
         // Si tiene un error
      if (err) {
         throw new Error('No es una imagen');
      }
      //Contiene toda la informacion de la imagen
      // La propiedad myFile se llama igual que el valor del atributo name del input file 
      // Por lo tanto el nombre de la propiedad cambia , si el valor del atributo name cambia
      const file = files.myFile;
      // Validaciones
      // Comprobar que existe una imagen
      if(file.originalFilename === "" ) {
         throw new Error('Por favor agrega una imagen');
      }
      // Validamos el formato de la imagen
     if (!(file.mimetype == "image/jpeg" || file.mimetype == "image/png")) {
      throw new Error('Por favor agrega una imagen .pjg o .png');
     }
      // Validamos el tamaño  (que sea menor a 5mb)
      console.log(file);
      if (file.size > 5 * 1024 * 1024) {
         throw new Error('Menos de 5mb ');
      }
      // Sacamos la extension
      const extension = file.mimetype.split("/")[1];
      // Donde se va a guardar la imagen 
      const dirFile = __dirname + "../public/perfiles/"
       req.flash("mensajes" , [{msg: "Ya se subio la imagen"}]);
      return res.redirect('/perfil');
   } catch (error) {
        
        req.flash("mensajes" , [{msg: error.message}]);
        return res.redirect('/perfil')
   }
   })
} 

```
:::tip __dirname  
devuelve la Ubicación del archivo
:::
## Modulo nativo Path (Join)
- Tiene el método join que nos permite formar una ruta
- También nos permite usar los “puntos” para la ubicación de archivos (../.)
```js
const path  = require('path');
 // Donde se va a guardar la imagen 
// __dirname/../public/perfiles/id.extension
 const dirFile = path.join(__dirname , `../public/img/perfiles/${req.user.id}.${extension}`);

```
## file System
- Ahora vamos a usar el modulo file System para guardar el archivo.
- Sirve para manipular los archivos
```js
const fs = require('fs');
// Sacamos la extension
      const extension = file.mimetype.split("/")[1];
      // Donde se va a guardar la imagen 
      const dirFile = path.join(__dirname , `../public/img/perfiles/${req.user.id}.${extension}`);
      // Guardamos la imagen  con el metodo renameSync
      // renameSync(ruta_vieja , ruta_mueva)
      // la propiedad filepath contiene la ubicacion del archivo
       fs.renameSync(file.filepath , dirFile );
       req.flash("mensajes" , [{msg: "Ya se subio la imagen"}]);

```
Completo: 
```js
const formidable = require('formidable');
const path  = require('path');
const fs = require('fs');
module.exports.formPerfil = async(req,res) => {
   res.render("perfil");
} 
module.exports.editarFotoPerfil = async(req,res) => {
   // Instanciamos un objeto formidable
   const form = new formidable.IncomingForm()
   // Especificamos el tamaño  maximo del archivo
   // 50 * 1024 * 1024 = 5MB 
   form.maxFileSize = 50 * 1024 * 1024
   //parse(de donde viene la imagen , funcion)
   form.parse(req , async(err, fields , files) => {
      try {
         // Si tiene un error
      if (err) {
         throw new Error('No es una imagen');
      }
      //Contiene toda la informacion de la imagen
      // La propiedad myFile se llama igual que el valor del atributo name del input file 
      // Por lo tanto el nombre de la propiedad cambia , si el valor del atributo name cambia
      const file = files.myFile;
      // Validaciones
      // Comprobar que existe una imagen
      if(file.originalFilename === "" ) {
         throw new Error('Por favor agrega una imagen');
      }
      // Validamos el formato de la imagen
     if (!(file.mimetype == "image/jpeg" || file.mimetype == "image/png")) {
      throw new Error('Por favor agrega una imagen .pjg o .png');
     }
      // Validamos el tamaño  (que sea menor a 5mb)
      console.log(file);
      if (file.size > 5 * 1024 * 1024) {
         throw new Error('Menos de 5mb ');
      }
      // Sacamos la extension
      const extension = file.mimetype.split("/")[1];
      // Donde se va a guardar la imagen 
      const dirFile = path.join(__dirname , `../public/img/perfiles/${req.user.id}.${extension}`);
      // Guardamos la imagen  con el metodo renameSync
      // renameSync(ruta_vieja , ruta_mueva)
      // la propiedad filepath contiene la ubicacion del archivo
       fs.renameSync(file.filepath , dirFile );
       req.flash("mensajes" , [{msg: "Ya se subio la imagen"}]);
      return res.redirect('/perfil');
   } catch (error) {
        
        req.flash("mensajes" , [{msg: error.message}]);
        return res.redirect('/perfil')
   }
   })
} 

```
 ### A guardar en la BD la url de la imagen

:::tip 
el método save() viene de un objeto mongoDB que nos permite guardar en la BD el objeto.
:::

```js
const formidable = require('formidable');
const path  = require('path');
const fs = require('fs');
const User = require('../models/User');
module.exports.formPerfil = async(req,res) => {
   res.render("perfil");
} 
module.exports.editarFotoPerfil = async(req,res) => {
   // Instanciamos un objeto formidable
   const form = new formidable.IncomingForm()
   // Especificamos el tamaño  maximo del archivo
   // 50 * 1024 * 1024 = 5MB 
   form.maxFileSize = 50 * 1024 * 1024
   //parse(de donde viene la imagen , funcion)
   form.parse(req , async(err, fields , files) => {
      try {
         // Si tiene un error
      if (err) {
         throw new Error('No es una imagen');
      }
      //Contiene toda la informacion de la imagen
      // La propiedad myFile se llama igual que el valor del atributo name del input file 
      // Por lo tanto el nombre de la propiedad cambia , si el valor del atributo name cambia
      const file = files.myFile;
      // Validaciones
      // Comprobar que existe una imagen
      if(file.originalFilename === "" ) {
         throw new Error('Por favor agrega una imagen');
      }
      // Validamos el formato de la imagen
     if (!(file.mimetype == "image/jpeg" || file.mimetype == "image/png")) {
      throw new Error('Por favor agrega una imagen .pjg o .png');
     }
      // Validamos el tamaño  (que sea menor a 5mb)
      console.log(file);
      if (file.size > 5 * 1024 * 1024) {
         throw new Error('Menos de 5mb ');
      }
      // Sacamos la extension
      const extension = file.mimetype.split("/")[1];
      // Donde se va a guardar la imagen 
      const dirFile = path.join(__dirname , `../public/img/perfiles/${req.user.id}.${extension}`);
      // Guardamos la imagen  con el metodo renameSync
      // renameSync(ruta_vieja , ruta_mueva)
      // la propiedad filepath contiene la ubicacion del archivo
       fs.renameSync(file.filepath , dirFile );
       // La guardamos en la BD
       const user = await User.findById(req.user.id);
       user.imagen = `${req.user.id}.${extension}`;
       await user.save();
       req.flash("mensajes" , [{msg: "Ya se subio la imagen"}]);
      return res.redirect('/perfil');
   } catch (error) {
        
        req.flash("mensajes" , [{msg: error.message}]);
        return res.redirect('/perfil')
   }
   })
} 

```
 ## jimp
 - Usamos el modulo jimp para modificar la imagen
 ```powershell
 npm i jimp
 ```
 Despues de guardar la imagen:
 ```js
 fs.renameSync(file.filepath , dirFile );

      // Leemos la imagen utilizando Jimp.
       // Jimp.read(rutaImagen)
       // Devuelve una Promesa que, al resolverse, retorna una
      // instancia de Jimp con la imagen cargada en memoria.
      // Esa instancia permite modificar la imagen (cambiar tamaño,
        // calidad, recortar, rotar, etc.).
      const image =  await Jimp.read(dirFile);
      // Cambiamos el tamaño  (resize)
      // Cambiamos la calidad (quality)
      // Lo volvemos a guardar (writeAsync)
       image.resize(200,200).quality(90).writeAsync(dirFile);
       const user = await User.findById(req.user.id);
 ```
 ### Lo mostramos en la ruta:
 perfileController.js
 ```js
 module.exports.formPerfil = async(req,res) => {
   
   try {
         const user = await User.findById(req.user.id);
         res.render("perfil" , {user: req.user , imagen: user.imagen});
   } catch(error) {
      req.flash("mensajes" , [{msg: "Error al leer el usuario"}]);
      return res.redirect('/perfil')
   }
} 
 ```
  views/perfi.hbs
```js
 <h1 class="text-center">{{user.userName}}</h1>
<p class="text-center">Edita aqui tu perfil</p>
<div class="my-2 text-center">
    {{#if imagen}}
         <img src="/img/perfiles/{{imagen}}" alt="" class="rounded-circle">
         {{else}} 
              <img src="/img/perfiles/imagen.jpg" alt="" class="rounded-circle">
    {{/if}}
   
</div>
<form action="/perfil?_csrf={{csrfToken}}" method="post" enctype="multipart/form-data">
 <input class="form-control mb-2 form-control-sm" type="file" id="formFile" name="myFile" />
 <button class="btn btn-dark my-3">Cambiar imagen de perfil</button>
</form>

 ```
  ## connet-mongo
- Las sesiones trabajan en memoria local (en el servidor/PC)
- Express recomienda que en producción (deploy) no trabajemos con la sesion en memoria.
- Usaremos el modulo connect-mongo para respaldar la sesion en la BD.
```powershell
npm i connect-mongo
```
database/conexion.js
```js
const mongoose = require('mongoose');
// Habilitamos las variables de entorno
require('dotenv').config()

// Intenta establecer una conexión con la base de datos MongoDB.
// connect(uri)
// Recibe como parámetro la URI (cadena de conexión) de la base de datos.
// Devuelve una Promesa que se resuelve cuando la conexión es exitosa
// o se rechaza si ocurre un error.
const clientDB = mongoose.connect(process.env.URI).then((m)=> {
    // Se ejecuta cuando la conexión fue exitosa.
    // Recibe como parámetro la instancia de Mongoose (m),
    // la cual contiene información y métodos relacionados con la conexión.
    console.log("db conectada 🔥");
    // getClient()
    //
    // Devuelve el cliente nativo de MongoDB (MongoClient) que Mongoose
    // utilizó para establecer la conexión con la base de datos.
    //
    // El cliente representa la conexión activa con MongoDB y permite
    // realizar operaciones sobre la base de datos, como consultar,
    // insertar, actualizar y eliminar documentos.
    return m.connection.getClient();
      // Se ejecuta si ocurre un error durante la conexión.
}).catch(e => console.log("Fallo la conexion" + e));

// Exportamos el cliente de la base de datos para utilizarlo
// en otras partes de la aplicación.
module.exports = clientDB;

```
index.js
```js
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const express = require("express");
const { create } = require("express-handlebars");
const passport = require("passport");
const User = require("./models/User");
require('dotenv').config()
const clientDB = require('./database/conexion');
const csrf = require("csurf");


const hbs = create({
    extname: ".hbs",
    partialsDir: ["views/components"],
});
const app = express();

```
:::tip Observacion
- Toda la ejecución de un código (conexión a la BD y retornar algo) se fue a una constante.
- Al usar el require() se ejecuta el codigo y lo que se devuelve lo contiene la variable clientDB.
:::
### Configuramos las sesiones para que se respalden en la BD.
index.js
```js

const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const express = require("express");
const { create } = require("express-handlebars");
const passport = require("passport");
const User = require("./models/User");
require('dotenv').config()
const clientDB = require('./database/conexion');
const csrf = require("csurf");


const hbs = create({
    extname: ".hbs",
    partialsDir: ["views/components"],
});
const app = express();
app.use(
  session({
      secret: 'palabra secreta',
      resave: false,
      saveUninitialized: false,
      name: "nombre de secreto" ,
         // store
        // Indica dónde se almacenarán las sesiones.
        // En este caso, se guardarán en una base de datos MongoDB.
        // MongoStore.create()
        // Recibe un objeto con la configuración de MongoDB y crea
        // un objeto (Store) encargado de guardar las sesiones en la base de datos.
      store : MongoStore.create({
       // clientPromise
      // Recibe una Promesa que devuelve el cliente conectado a MongoDB.
     // MongoStore espera a que la conexión esté disponible para poder
     // guardar y recuperar las sesiones.
           clientPromise: clientDB ,
      // dbName
        // Nombre de la base de datos donde MongoStore creará (si no existe)
        // la colección en la que almacenará las sesiones.
        dbName :  'dbUrl'
      }),
  })
);  

```
## Saniteze mongo
- Es un middleware para evitar inyecciones(ataques) en la BD.
- Existen dos modulos con la misma funcion :  [mongo-sanitize](https://www.npmjs.com/package/mongo-sanitize) o [express-mongo-sanitize](https://www.npmjs.com/package/express-mongo-sanitize)
- Utilizaremos el segundo
```powershell
npm i express-mongo-sanitize
```
index.js
```js
const session = require("express-session");
const mongoSanitize = require('express-mongo-sanitize');
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const express = require("express");
const { create } = require("express-handlebars");
const passport = require("passport");
const User = require("./models/User");
require('dotenv').config()
const clientDB = require('./database/conexion');
const csrf = require("csurf");


const hbs = create({
    extname: ".hbs",
    partialsDir: ["views/components"],
});
const app = express();
app.use(
  session({
      secret: 'palabra secreta',
      resave: false,
      saveUninitialized: false,
      name: "nombre de secreto" ,
   
      store : MongoStore.create({
           clientPromise: clientDB ,
        dbName :  'dbUrl'
      }),
  })
);  
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser((user , done) => {
   return done(null , {id: user._id , userName: user.userName})
})
passport.deserializeUser(async (user , done) => {
 const userDB = await User.findById(user.id);
  return  done(null , {id:userDB._id , userName: userDB.userName})
})

app.use(express.urlencoded({extended:true}));
app.use(csrf());

// Utilizamos el middleware
app.use(mongoSanitize());

app.use((req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    res.locals.mensajes = req.flash("mensajes");
    next();
});

```
## CORS
- Las CORS (Cross-Origin Resource Sharing) es un mecanismo que permite a una página web realizar solicitudes HTTP a un servidor que no es el mismo que el servidor desde el que se cargó la página. Esto es útil cuando se necesita acceder a recursos de un servidor diferente al que se está utilizando actualmente.
- Imagina que tienes una página web en https://foo.example y necesitas acceder a un recurso en https://bar.other. Sin CORS, el navegador no permitiría esta solicitud porque viola la política de same-origin (misma origen), que establece que una página web solo puede acceder a recursos del mismo servidor.
- Para permitir esta solicitud, el servidor https://bar.other debe incluir cabeceras CORS en su respuesta. Estas cabeceras indican al navegador que la solicitud es segura y que se permite el acceso desde un origen diferente.
- Aquí hay un ejemplo de cómo se vería la solicitud y la respuesta con CORS:
```js
// Solicitud desde https://foo.example
GET /resources/public-data/ HTTP/1.1
Host: bar.other
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:71.0) Gecko/20100101 Firefox/71.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Connection: keep-alive
Origin: https://foo.example

// Respuesta desde https://bar.other
HTTP/1.1 200 OK
Access-Control-Allow-Origin: https://foo.example
Access-Control-Allow-Methods: GET, POST, OPTIONS
Access-Control-Allow-Headers: Content-Type
```
:::tip Observación
- En este ejemplo, el servidor https://bar.other incluye la cabecera Access-Control-Allow-Origin con el valor https://foo.example, lo que indica que se permite el acceso desde ese origen. También incluye las cabeceras Access-Control-Allow-Methods y Access-Control-Allow-Headers para especificar qué métodos y cabeceras se permiten.

:::

- CORS también permite **enviar y recibir credenciales** en las comunicaciones entre distintos orígenes. Estas credenciales pueden ser:
  - Cookies.
  - Certificados.
  - Información de autenticación (por ejemplo, tokens).

Para que el navegador permita el intercambio de credenciales, deben cumplirse **dos condiciones**:

1. **El cliente** debe indicar que la solicitud puede incluir credenciales. Esto se hace con:
   - `withCredentials: true` cuando se utiliza **Axios** o `XMLHttpRequest`.
   - `credentials: 'include'` cuando se utiliza la API **Fetch**.

2. **El servidor** debe permitir el intercambio de credenciales incluyendo la cabecera HTTP:

   ```http
   Access-Control-Allow-Credentials: true
   ```

Si alguna de estas condiciones no se cumple, el navegador impedirá el intercambio de credenciales. Por ejemplo, no enviará las cookies al servidor o rechazará las cookies recibidas mediante la cabecera `Set-Cookie`.



- Aquí hay un ejemplo de cómo se vería la solicitud con credenciales:
```js
fetch('https://bar.other/resources/public-data/', {
  credentials: 'include'
})

```
- Y la respuesta del servidor:
```js
HTTP/1.1 200 OK
Access-Control-Allow-Origin: https://foo.example
Access-Control-Allow-Methods: GET, POST, OPTIONS
Access-Control-Allow-Headers: Content-Type
Access-Control-Allow-Credentials: true
```





- [Modulo cors]( https://expressjs.com/en/resources/middleware/cors.html)
- Sirve para especificar que dominios van a consumir esta aplicación/sitio web / etc.
```powershell
npm install cors
```
.env
```js
URI=mongodb+srv://User_API:contraseña@cluster.xcibc.mongodb.net/dbUrl?retryWrites=true&w=majority
userEmail=815fddfe9d615f
userPassword=8a37d820c188a6
PATHOSTING=

```
:::tip Observacion
Podemos crear variables de entornos vacia (PATHOSTING)
:::
index.js
```js
const session = require("express-session");
const mongoSanitize = require('express-mongo-sanitize');
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const express = require("express");
const { create } = require("express-handlebars");
const passport = require("passport");
const User = require("./models/User");
require('dotenv').config()
const clientDB = require('./database/conexion');
const csrf = require("csurf");
const cors = require("cors");


const hbs = create({
    extname: ".hbs",
    partialsDir: ["views/components"],
});
const app = express();
// Configuramos el cors
const corsOptions = {
 // credentials: true
  // Permite el intercambio de credenciales entre cliente y servidor
  // en peticiones cross-origin (CORS).
  credentials: true,
  // origin
  // Que dominios van a poder consumir esta app.
  // Si no está en esta lista no van a poder hacer peticiones.
  // "*" = Todos los dominios
  // Si NO existe la variable de entorno, todos los dominios pueden consumir esta app
  origin: process.env.PATHOSTING || "*",
  // Métodos HTTP permitidos
  // En este caso solo se va a poder hacer solcitudes GET Y POST
  methods: ['GET' , 'POST']
};
// Usamos el cors con la configuracion que especificamos
app.use(cors(corsOptions));
app.use(
  session({
      secret: process.env.SECRETSESSION,
      resave: false,
      saveUninitialized: false,
      name: "nombre de secreto" ,

      store : MongoStore.create({
 
           clientPromise: clientDB ,
 
        dbName :  process.env.DBNAME
      }),
  })
);  
app.use(flash());

```
:::tip Observacion
- Un formulario HTML solo envia GET Y POST
- Con fetch y Axios (JS ) podemos establecer métodos PUT , DELETE , ETC.
:::
## Modificaciones para el deploy
.env
```js
URI=mongodb+srv://User_API:contraseña@cluster.xcibc.mongodb.net/dbUrl?retryWrites=true&w=majority
userEmail=815fddfe9d615f
userPassword=8a37d820c188a6
PATHOSTING=
SECRETSESSION=815fddfe9d615f

```
index.js
```js
app.use(
  session({
      secret: process.env.SECRETSESSION,
      resave: false,
      saveUninitialized: false,
      name: "nombre de secreto" ,

      store : MongoStore.create({
 
           clientPromise: clientDB ,
 
        dbName :  'dbUrl'
      }),
  })
);  

```
authController.js
```js
// Enviamos el correo 
      let info = await transporte.sendMail({
        // Quien lo envia
        from: '"Fred Foo 👻" <foo@example.com>', 
        // A quien se envia
        to: user.email, 
        // Asunto
        subject: "Verifica tu cuenta de correo",
        //texto plano  
        //text: "Hello world?",
        //texto en HTML
        html: `<a href="${ process.env.PATHOSTING || "http://localhost:5000"}/auth/confirmarCuenta/${user.tokenConfirm}">Verifica tu cuenta aqui</a>`, 
      });

```
public/js/app.js
```js
document.addEventListener('click' , e => {
    
    if (e.target.dataset.short) {
        // El window es global , se puede omitir
         const url = `${window.location.origin}/${e.target.dataset.short}`;

```
package.json
```json
  "scripts": {
    "dev": "nodemon index.js",
    "start": "node index.js"
  },

```
:::tip Observacion
Script start = Es el que ejecuta heroku
:::
## Cookies segura
- Las cookies seguras son aquellas que solo se envían cuando la conexión es HTTPS.
- Esto le da más seguridad al servidor, ya que evita que las cookies puedan ser interceptadas en conexiones no seguras (HTTP).
 ### Pasos
 1. Borramos las sesiones en la BD
 2. Modificamos el index.js
 ```js
app.use(cors(corsOptions));
// trust proxy
// Le dice a Express (servidor backend) que está detrás de un proxy
// (por ejemplo: Heroku, Render, Nginx o un balanceador de carga).
//
// Esto es importante porque el proxy es el que maneja HTTPS,
// y sin esta configuración Express puede pensar que la conexión es HTTP.
//
// Con esto, Express puede detectar correctamente HTTPS real y permitir
// cosas como cookies seguras (secure: true).
app.set("trust proxy", 1);
app.use(
  session({
      secret: process.env.SECRETSESSION,
      resave: false,
      saveUninitialized: false,
      name: "nombre de secreto" ,

      store : MongoStore.create({
 
           clientPromise: clientDB ,
 
        dbName :  process.env.DBNAME
      }), 
    // cookie
     // Configura cómo se comporta la cookie que se utiliza para almacenar la sesión del usuario
    // Aquí definimos opciones de seguridad y tiempo de vida de la cookie.
      cookie: {
            // secure
    // Indica si la cookie solo se puede enviar por HTTPS.
    //
    // true:
    // - La cookie SOLO se envía en conexiones seguras (HTTPS).
    // - Se usa en producción para mayor seguridad.
    //
    // false:
    // - La cookie se envía también por HTTP (modo desarrollo).
    //
    // En este caso:
    // Si la app está en producción, se activa secure automáticamente.
        secure: process.env.MODO === 'production' ? true : false, 
          // maxAge
    // Tiempo de vida de la cookie en milisegundos.
    //
    // Cuando se cumple este tiempo:
    // - La cookie expira
    // - El usuario pierde la sesión automáticamente
    //
    // En este caso:
    // 30 días = 30 * 24 * 60 * 60 * 1000 ms
        maxAge: 30 * 24 * 60 * 60 * 1000 },
  })
);  

 ```




 .env
 ```js
 URI=mongodb+srv://User_API:contraseña@cluster.xcibc.mongodb.net/dbUrl?retryWrites=true&w=majority
userEmail=815fddfe9d615f
userPassword=8a37d820c188a6
PATHOSTING=
SECRETSESSION=815fddfe9d615f
DBNAME=dbUrl
MODO=production
 ```

 

 ## Heroku
 - [Heroku](https://www.heroku.com/pricing)
  ### En el sitio 
 1. Te creas una cuenta
 2. Creas tu primera App  (Deja todo por defecto)
 3. En la parte de deploy nos muestra varias formas de desplegar la aplicación. Podes elegir heroku git (tenes que instalar heroku CLI)  o github. Depende de la opcion , los siguientes pasos cambian(En este ejemplo se usara github)
 
 ### En el proyecto
 - Hacemos todo el procedimiento para ponerlo en un repositorio de github
 
 .gitignore
 ```gitignore
 .env
node_modules

 ```
:::tip Observacion
 Heroku Lee el package.json  y las instala
:::

### En el sitio
4. Le damos a GitHub
5. Connect To GitHub y lo autorizas.
6. Buscamos el repositorio y nos conectamos
7. Seleccionamos la rama que se va a hacer el deplo Y Le das a Deploy Branch
8. Configuramos las variables de entorno (en el apartado de setting - config Var)
- En ese apartado ponemos las variables de entorno.
- Key (Nombre) -> Valor
- Por cada actualizacion en el repositorio , hacemos el  deploy branch (a menos que lo configures en automatico)



## Consejos
- ¡Si esta undefined es porque no estas esperando el resultado de la base de dato! USA EL AWAIT
- En todas las operaciones con una BD usar el await
- Al usar el redirect comprueba en la url si te dirige hacia donde especificaste.
- Cuidado con poner dos respuestas en un bloque , que genera errores.
- En las validaciones no darle información específica  de que se equivocó al cliente por tema de seguridad:
Ejemplo: Mal: Fallo el usuario  Correcto: Fallo el Usuario o la contraseña
- JWT = SESION SIN ESTADO
- Session y  Passport(asi se trabajaba antes)  puede ser remplazado por JWT
- Flash para comunicar mensaje
- API REST = NO TRABAJAR CON SESIONES (NO GUARDAR SESIONES EN EL SERVIDOR)