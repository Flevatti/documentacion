---
sidebar_position: 5
---
# Actividades  
## Actividades CDN / API Options

## Fetch user

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app">
          {{usuarios}}
    </div>
    <script src="https://unpkg.com/vue@3"></script>
    <script>
      // Componente holaMundo
      const holaMundo = {
        data() {
          return {
              usuarios : [] ,
              nombre : 'Nombre'
          };
        },
        methods: {
           getUser() {
                fetch('https://jsonplaceholder.typicode.com/users').then(
                  response => response.json() 
                ).then (data =>  {
                      this.usuarios = data;
                })
          }
        },
        mounted(){
          this.getUser();
        }
      };
      Vue.createApp(holaMundo).mount("#app");
    </script>
  </body>
</html>

```

## Table user 
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
      <!-- Compiled and minified CSS -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

      <!-- Compiled and minified JavaScript -->
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
  </head>
  <body>
    <div id="app">
      <div class="container">
          <table class="table stripped bordered">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Usuario</th>
                <th>Correo</th>
              </tr>
              <tbody>
                <tr v-for="usuario in usuarios" v-bind:id="usuario.id">
                  <td>{{usuario.name}}</td>
                  <td>{{usuario.username}}</td>
                  <td>{{usuario.email}}</td>
                </tr>
              </tbody>
            </thead>
          </table>
        </div>
    </div>
    <script src="https://unpkg.com/vue@3"></script>
    <script>
      // Componente holaMundo
      const holaMundo = {
        data() {
          return {
              usuarios : [] ,
              nombre : 'Nombre'
          };
        },
        methods: {
           getUser() {
                fetch('https://jsonplaceholder.typicode.com/users').then(
                  response => response.json() 
                ).then (data =>  {
                      this.usuarios = data;
                })
          }
        },
        mounted(){
          this.getUser();
        }
      };
      Vue.createApp(holaMundo).mount("#app");
    </script>
  </body>
</html>


```

## Separacion  de Componentes 

Main.js
```js
const componentePrincipal = {
   data(){
     return {
        usuario:'Jose',
        correo:'',
         clave:'',
     }
   }

}

const app = Vue.createApp(componentePrincipal);

```
menu.components.js
:::tip Buena practica 
Cada componente debe ser un archivo independiente
:::

```js
app.component("menu-componente", {
  template: `
    <nav class="indigo darken-4">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">{{usuario}}</a></li>
      </ul>
    </div>
  </nav>
  <input type="text" v-model="miUsuario">
    `,
 props:{
    usuario:String
 },
 data(){
    return {
        miUsuario : this.usuario
    }
 }
});

```

Index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <!-- Compiled and minified CSS -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
    />

    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
  </head>
  <body>
    <div id="app">
      <menu-componente :usuario="usuario"></menu-componente>
      <div class="container" style="margin-top:10px">
        <div class="row">
          <div class="col m6">
            <label for="">Usuario</label>
            <input type="text" name="" id="" v-model="usuario" />
          </div>
        </div>
        <div class="row">
          <div class="col m6">
            <label for="">Correo</label>
            <input type="text" name="" id="" v-model="correo" />
          </div>
        </div>
        <div class="row">
          <div class="col m6">
            <label for="">Clave</label>
            <input type="text" name="" id="" v-model="clave" />
          </div>
        </div>
        <div class="row">
          <button class="btn indigo darken-4" type="button">Registrarse</button>
        </div>
      </div>
    </div>
    <script src="https://unpkg.com/vue@3"></script>
    <script src="main.js"></script>
    <script src="menu.components.js"></script>
    <script>
      // Usamos la variable del main.js
      const mounteApp = app.mount("#app");
    </script>
  </body>
</html>

```