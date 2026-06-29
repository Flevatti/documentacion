---
sidebar_position: 3
---
# Router

- El Router sirve para organizar y ordenar las rutas de una aplicación (URLs/URIs).
- [Info](https://expressjs.com/es/guide/routing.html)
- En lugar de definir todas las rutas en el archivo principal (`index.js`), podemos separarlas en distintos archivos utilizando el objeto `Router` que proporciona `express.Router()`.


1. Creamos una carpeta llamada `router`.
2. Dentro de esa carpeta creamos un archivo `.js` (en este caso `Rutas.js`):
    - En este archivo colocamos todas las rutas (peticiones `GET`, `POST`, etc.) que tienen en común una parte de la URL (ruta).
    - Todos los métodos HTTP se manejan con `Router` y no directamente con `express()`.
3. Exportamos el `router`:
    - Los routers se exportan por defecto, por lo que al importarlos podemos asignarles cualquier nombre.


Rutas.js
```js
const express = require('express');
// Accedemos a todas las propiedades y métodos del Router
const router = express.Router();


router.get('/' , (req , res) => {
  
    res.render("index" , {titulo : "mi titulo gato" , descripcion : "Hola Esta es la descripcion"});
})

router.get('/servicios' , (req,res) => {
     res.render("servicios" , {tituloServicio : "Este es un mensaje de Servicio"})
})

module.exports = router;

```
index.js:
```js
const express = require("express");
var path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname,"public")));
app.set('view engine' , 'ejs')
app.set('views' , __dirname + '/views');

// use('/' , importacion de router)
app.use('/' , require("./router/Rutas"))

 app.use((req , res , next) => {
      res.status(404).render("404");
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

```
:::tip Observacion 
- peticion get a  servicios : http://localhost:3000/servicios
- peticion get a home (/) : http://localhost:3000/
:::


#### Cambios en el `index.js`
- Si en `app.use('/', require("./router/Rutas"))` cambiamos `"/"` por otra "ruta".
- Todas las URI definidas en ese router comenzarán con esa "ruta", quedando como: `ruta/direccionDelRouter`.
- Ejemplo:
```js
app.use('/api' , require("./router/Rutas"))
```
Para acceder a servicios (Mirar el archivo Router): http://localhost:3000/api/Servicios

:::warning
 Si  no te detecta el css

 Hay que quitarle el punto (./) al href.

 ```html
   <link rel="stylesheet" href="/css/bootstrap.min.css">
 ```
:::

## Practica

```js

// router/Mascota.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // listaMascotas = Array
    res.render("mascotas", { listaMascotas: [
        { id: 'mascota', nombre: 'rex', descripcion: 'rex descripcion' } , { id: 'mascota2', nombre: 'chanchan', descripcion: 'chanchan descripcion' }

    ] })
})

module.exports = router;

```

```js
<!-- views/mascotas.ejs -->
<%- include("template/cabecera" , {title: "titulo"})    %>
 <div class="container">
    mascotas

 </div>

<%- include("template/footer")    %>

```

```js
//index.js
// use('/' , 'importacion de router')
app.use('/' , require("./router/Rutas"));
 app.use('/mascotas' , require('./router/Mascota'));

```

```js
<!-- views/mascotas.ejs -->
<%- include("template/cabecera" , {title: "titulo"})    %>
 <div class="container">
    <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Accion</th>
          </tr>
        </thead>
        <tbody>
            <% if (listaMascotas.length > 0) { %>
              
                <% listaMascotas.forEach(mascota => { %>
                    <tr>
                        <th scope="row"><%= mascota.id  %> </th>
                        <td><%= mascota.nombre  %> </td>
                        <td><%= mascota.descripcion  %> </td>
                        <td>@mdo</td>
                    </tr>
                <% }) %> 
        
            <% } %>
       
          
        </tbody>
      </table>
   
   
 </div>

<%- include("template/footer")    %>

```

:::tip Texto plano (`<%=`)
- Un texto plano (*plain text*) es un contenido formado únicamente por caracteres, sin formato ni código que deba ejecutarse.
- En EJS, `<%=` se utiliza para insertar ese contenido en el HTML generado. Es decir, muestra el valor de una variable o expresión como texto dentro de la página.

**Ejemplo:**

```ejs
<p>Hola <%= nombre %></p>
```
- Si `nombre` vale `"Juan"`, el HTML generado será:
```html
<p>Hola Juan</p>
```
:::