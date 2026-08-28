# Website

Este sitio web está construido con [Docusaurus 3](https://docusaurus.io/), un generador de sitios web estáticos moderno.

### Instalación

Este comando instala todas las dependencias necesarias para ejecutar el proyecto.

```bash
npm i
```

### Iniciar el servidor de desarrollo

Este comando inicia un servidor local en la PC para visualizar el sitio web y aplicar los cambios automáticamente.

```bash
npm start
```

### Compilación

Este comando genera los archivos HTML, CSS, JavaScript y otros recursos necesarios para publicar el sitio web en un servicio de hosting. Estos archivos se generan en una carpeta cuyo nombre y ubicación se especifican mediante la opción `outDir` de `docusaurus.config.js`. Por defecto, se utiliza la carpeta `build`.


```bash
npm run build
```

### Despliegue en GitHub Pages

**NOTA IMPORTANTE ⚠️**: Antes de subir tus archivos locales a tu repositorio de GitHub, debes agregar cierta información al archivo **`docusaurus.config.js`**, específicamente en los parámetros relacionados con **`organizationName`**, **`projectName`**, **`url`** y **`baseUrl`**.

```js
module.exports = {
  // ...
  url: 'https://endiliey.github.io', // URL de tu sitio web
  baseUrl: '/',
  projectName: 'endiliey.github.io',
  organizationName: 'endiliey',
  // ...
};
```

Donde:

- **`organizationName`**: El nombre de usuario u organización de GitHub que posee el repositorio.
- **`projectName`**: El nombre del repositorio de GitHub.
- **`url`**: Indica la URL de GitHub Pages del usuario u organización. Generalmente sigue el formato `https://username.github.io`.
- **`baseUrl`**: Indica la ruta que se utiliza para acceder al sitio web dentro de GitHub Pages. Si el repositorio tiene el mismo nombre que el usuario, se utiliza `/`. En caso contrario, se utiliza `/nombre-del-repositorio/`.

Luego de configurar estos parámetros y compilar el sitio con el comando `build`, puedes desplegarlo en GitHub Pages.
#### Formas de desplegar en GitHub Pages
**Utilizando SSH:**
```bash
USE_SSH=true npm run deploy
```
**Sin utilizar SSH:**
```bash
GIT_USER=<Tu nombre de usuario de GitHub> npm run deploy
```
Si utilizas la consola de Windows (CMD), ejecuta el siguiente comando:
```bash
cmd /C "set "GIT_USER=<GITHUB_USERNAME>" && npm run deploy"
```

:::tip
Se recomienda ingresar el nombre de usuario en **minúsculas** para evitar posibles inconvenientes.
:::



El comando `deploy` genera los archivos necesarios para publicar el sitio web y los almacena en la rama `gh-pages`. A su vez, activa GitHub Pages, que utiliza esta rama para publicar el sitio web y realizar el despliegue.


Por cada actualización del sitio web, debes ejecutar nuevamente los comandos `build` y `deploy` para generar y publicar los archivos actualizados.