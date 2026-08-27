# Vuepress / Guía 

1. Es una herramienta para documentar nuestros proyectos.
2. Permite crear páginas estáticas.
3. Permite reutilizar código y definir el diseño de las páginas.
4. Permite publicar el sitio en GitHub Pages.
5. Está basado en Vue.js.


## Generacion
:::warning
Se necesita descargar yarn
:::
1. En la carpeta del proyecto , usar el comando:
``` yarn
yarn create vuepress-site
```
Te debe aparecer varias preguntas , las podes contestar o saltear (con enter).

2. Luego tenes que acceder a la carpeta docs
3. En la carpeta docs , usa el comando:
``` yarn
yarn install
yarn dev
Control + C -- Para detener el yarn dev
```



## Markdown

VuePress trabaja con **Markdown**. Es un lenguaje de marcado (como HTML) que permite definir el contenido de la página. VuePress lo lee y lo convierte en HTML.

### Documentación

* [Sintaxis de Markdown](https://markdown.es/sintaxis-markdown/)
* [Sintaxis de Markdown en VuePress](https://vuepress.vuejs.org/guide/markdown.html#header-anchors)

### Encabezados

La cantidad de `#` indica el nivel del encabezado. Por ejemplo:

```markdown
# Título
```

Representa un **`<h1>`**.

```markdown
## Subtítulo
```

Representa un **`<h2>`**.

Por lo tanto:

* `#` → H1
* `##` → H2
* `###` → H3
* `####` → H4
* `#####` → H5
* `######` → H6

### Párrafos

Para crear párrafos, simplemente escribimos el texto y dejamos **una línea en blanco** entre cada párrafo.

```markdown
Párrafo 1

Párrafo 2
```

### Listas

Para crear una lista sin ordenar, podemos utilizar `*`, `-` o `+` seguido de un espacio:

```markdown
* Elemento 1
* Elemento 2
* Elemento 3
```

También podemos utilizar `-`:

```markdown
- Elemento 1
- Elemento 2
- Elemento 3
```

### Listas ordenadas

Para crear una lista ordenada, utilizamos un número seguido de un punto y un espacio:

```markdown
1. Primer elemento
2. Segundo elemento
3. Tercer elemento
```

### Insertar una imagen

Para insertar una imagen utilizamos la siguiente sintaxis:

```markdown
![Descripción de la imagen](ruta/de/la/imagen.png)
```

El texto entre `[]` es la **descripción de la imagen**, mientras que la ruta entre `()` indica dónde se encuentra la imagen.

### Imágenes en VuePress

También podemos utilizar una etiqueta `<img>` para insertar imágenes.

Por defecto, VuePress utiliza la carpeta `public` para almacenar archivos estáticos. Esta carpeta debe crearse dentro de `.vuepress`:

```text
.vuepress/
└── public/
    └── img/
        └── main-start.png
```

Para insertar una imagen que se encuentra en esa carpeta, podemos utilizar:

```html
<img :src="$withBase('/img/main-start.png')">
```





## Configuración

### 1. Limpiar el proyecto

Primero, podemos borrar las carpetas y archivos que no vamos a utilizar.

### 2. Configurar `config.js`

La configuración de VuePress se encuentra en:

```text
.vuepress/config.js
```

En este archivo configuramos VuePress para decirle cómo queremos que cree el sitio web.

Cada vez que modificamos la configuración, debemos reiniciar el servidor de desarrollo (`yarn dev`) para ver los cambios.

### `config.js`

Primero, podemos eliminar configuraciones que no vamos a utilizar:

* Borrar el `require`.
* Borrar `repo`.
* Borrar `docsDir`.

### Configuración básica

```js
title: 'Título',
description: 'Descripción',
head: [
  // Metadatos
],

/* Carpeta donde se genera el sitio */
/* GitHub utiliza esta ruta (en este ejemplo, 'docs') para publicar el sitio en GitHub Pages */
dest: 'docs',

/* URL para acceder al sitio web en GitHub Pages */
base: '/url/'
```

### Configuración recomendada

Podemos utilizar esta configuración como base y modificar los valores según nuestro proyecto:

```js
module.exports = {
  dest: 'docs',
  base: '/url/',
  title: 'Título',
  description: 'Descripción',
}
```

### Más configuraciones

#### `nav`

`nav` permite configurar el **menú de navegación** de la página.

```js
nav: [
  // Elementos del menú
]
```

### Sidebar (menú lateral)

`sidebar` permite configurar el **menú lateral** de la documentación.

```js
sidebar: [
  '/',
  '/01-paginauno/'
]
```

Cada página o carpeta que queramos mostrar en el menú lateral debe agregarse al `sidebar`.

### Crear las páginas

Dentro de la carpeta `src` podemos crear las carpetas que necesitemos.

Por ejemplo:

```text
src/
├── 01-paginauno/
│   └── README.md
├── 02-paginados/
│   └── README.md
└── README.md
```

Dentro de cada carpeta podemos colocar un `README.md`, que será el contenido de esa sección.

El `index.md` se puede dejar o eliminar, dependiendo de si lo vamos a utilizar.

### Plantilla de `README.md`

Generalmente, el `README.md` puede contener una configuración como esta:

```yaml
---
home: true
heroImage: https://v1.vuepress.vuejs.org/hero.png
tagline:
actionText: Quick Start →
actionLink: /guide/
features:
  - title: Feature 1 Title
    details: Feature 1 Description
  - title: Feature 2 Title
    details: Feature 2 Description
  - title: Feature 3 Title
    details: Feature 3 Description
footer: Made by with ❤️
---
```

Esta plantilla se puede **borrar** si no vamos a utilizarla.




## Descargar plugin

Para instalar un plugin, utilizamos:

```bash
yarn add nombre
```

## Compilar el proyecto

Para compilar el proyecto, utilizamos:

```bash
yarn build
```


* Se crea una carpeta con el mismo nombre que especificamos en la opción `dest`.
* Esta carpeta contiene los archivos estáticos del sitio, como **HTML, CSS y JavaScript**.
* Estos archivos estáticos son los que debemos subir al hosting.

## Subirlo a GitHub Pages

Para publicar el sitio en GitHub Pages:

1. Compilamos el proyecto con `yarn build`.
2. Creamos un repositorio en GitHub con el mismo nombre que especificamos en `base`, sin las `/`.
3. Inicializamos Git en la carpeta del proyecto con `git init`.
4. Verificamos que las carpetas `dist` y `node_modules` estén incluidas en `.gitignore`.
5. Agregamos los cambios, hacemos un commit y realizamos un `git push`.
6. En **Settings → Pages → Branch** de GitHub, verificamos que esté seleccionada la carpeta especificada en `dest`.






