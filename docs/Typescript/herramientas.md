---
sidebar_position: 3
---

# Herramientas

## Compodoc
- Compodoc es una herramienta enfocada en la documentación de proyectos construidos en Angular, la cual genera una serie de archivos estáticos muy hermosos (HTMLs, Css o Sass, Js) , pues genera un menú de navegación, barra de búsqueda, y otras secciones super importantes en donde podemos analizar la arquitectura del proyecto, la estructura modular o las dependencias que utiliza la App. 
- Compodoc es una herramienta de documentación para aplicaciones Angular. Genera una documentación estática de la aplicación, lo que facilita a los desarrolladores entender y trabajar con el código. Además, es compatible con NestJS e Ionic.
#### Características
- Se puede usar con npm o Angular CLI.
- Soporta diferentes idiomas: en-US, fr-FR, zh-CN, pt-BR.
- Genera todo localmente por lo que no se necesita de un servidor.
- Genera una tabla de contenido y barra de busqueda.
- Se puede usar con NestJS, Ionic.
- Contiene diferentes temas para la presentación.

#### Instalación de Compodoc
- La instalación es muy sencilla, sólo hay que ejecutar el siguiente comando con npm para la instalación global:

```powershell
  npm install -g @compodoc/compodoc
```

- La instalación local también es muy sencilla, claro, esta vez utilizando Angular CLI:

```powershell
  ng add @compodoc/compodoc
```

- O sólo hacer esto también con npm:

```powershell
   npm install --save-dev @compodoc/compodoc
```

#### Uso de compodoc

- Luego de ello, hay que ir al package.json y ubicarse dentro del objeto script y agregar esto, lo cual hace posible leer el script:

```json
"compodoc": "npx compodoc -p tsconfig.doc.json"
```

- Compodoc usa el archivo tsconfig.app.json ubicado en la raíz de un proyecto Angular, obviamente es necesario crearlo, y dentro agregarle lo siguiente:


```json
{
  "include": ["src/**/*.ts"],
  "exclude": ["src/test.ts", "src/**/*.spec.ts", "src/app/file-to-exclude.ts"]
}
```

- Ya falta poco… Pues antes de ejecutar el comando que genera todos los archivos, sería bueno documentar un archivo, en mi caso voy a documentar una clase que trabaja como un interceptor de errores en un proyecto personal que tengo:


```js
// imports Angular centrales

import { Injectable } from '@angular/core';

import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';

// imports RxJs
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

/**
 * Clase que utiliza un interceptor, la cual tiene como carcateristica capturar y
 * mostrar todos los errores HTTP que puedan ocurrir.
 * @implements {HttpInterceptor}
 * @see {@link https://angular.io/api/common/http/HttpInterceptor. }
 *
 * @author Jose Osorio Catalan <jossekarlos10@gmail.com>
 */

@Injectable()

export class ErrorInterceptor implements HttpInterceptor {

    constructor() {

    }
 /**
 *  @method intercept: método que hace parte de la interface HttpInterceptor
 *  intercepta las solicitudes y respuestas HTTP. Realiza una validación previa,
 *  si hay conexión a internet, luego hace la petición y espera la respuesta,
 *  si sucede algún error simplemente verifica el tipo de error, y según el código
 *  muestra un mensaje por consola.

 *  @param  {HttpRequest<any>} request: dato de tipo HttpRequest recibe la peticion.
 *  @param {HttpHandler} next : dato de tipo HttpHandler el cual transforma
 *    una HttpRequest en una secuencia de HttpEvents, una de las cuales
 *    probablemente sea HttpResponse y se usa para retornar un observable
 *    de tipo HttpEvent.
 * - @returns {Observable<HttpEvent<any>>}
 */

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!window.navigator.onLine) {
            console.log("No hay conexion...")
        }
        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse ) => {
                // hay posibilidad de que a futuro se agreguen más códigos.
                switch(error.status){
                    case 400: //Bad request
                    console.log("bad request.");
                    break;
                    case 404: // Not found
                    console.log("not found.");
                    break;
                    case 500: // Server error
                    console.log("server error.");
                    break;

                }
                return throwError(error);
            })

        );
    }

}

```

#### Ejecutamos
- Listo, ahora sólo hay que ejecutar el siguiente comando:


```powershell
  npm run compodoc
```


:::tip Observación
- Ahora podemos notar que en la parte raíz del proyecto se creo un directorio de nombre “documentation”, pues bien sólo tenemos que ir a esa carpeta y ubicarnos desde el explorador de archivos y luego de ello entrar a la pagina principal que es index.html, y ahí se encuentran una serie de opciones para acceder como son los componentes, módulos, Guards, Rutas etc. 


:::

#### [Documentación](https://compodoc.app/)