---
sidebar_position: 1
---
# Introducción
## ¿Que es GIT?
Es un software de control de versiones, su propósito es llevar registro de los cambios en archivos de computadora y coordinar el trabajo que varias personas realizan sobre archivos compartidos (También puedes trabajar solo no hay problema 😃). Existe la posibilidad de trabajar de forma remota y una opción es GitHub.
## ¿Para que usar GIT?
 - Permite regresar a versiones anteriores de forma sencilla y muy rápida.
- Facilita el trabajo colaborativo.
- Permite respaldar tus proyectos en la nube (ej con Github).
- Reduce considerablemente los tiempos de deploy.
- Las "branches" o ramas, permiten trabajar con una base de código paralela al proyecto en sí.
- [8 Razones para usar GIT.](https://blog.coffeedevs.com/8-razones-para-usar-git/)
## Para usar GIT hay que saber los comandos basicos de la Consola
- [Comandos.](comando)

## Comandos basicos de git

 - Para añadir los archivos a una caja:
``` git
 add
```
- Para etiquetar la caja para reconocerla:
``` git
 commit
```
- Envia a la nube(github) las cajas hechas y etiquetadas:
``` git
 push
```




![Descripcion grafica de los comandos](https://bluuweb.github.io/desarrollo-web-bluuweb/img/caja-git.png)

![Descripcion grafica de los comandos 2](https://bluuweb.github.io/desarrollo-web-bluuweb/img/git-flujo.png)

:::tip
- Podemos abrir la caja y hacer cambios.
- La caja se va a almacenar en un repositorio en la nube.
:::
## Que es GitHub
Es una plataforma de desarrollo colaborativo para alojar proyectos (en la nube) utilizando el sistema de control de versiones Git, Además cuenta con una herramienta muy útil que es GitHub Pages donde podemos publicar nuestros proyectos estáticos (HTML, CSS y JS)  gratis.
## Comandos 
- Ver la version:
``` git
 Git version
```
- Para ver todos los comandos:
``` git
 Git help
```
- Inicia un repositorio, el proyecto se transforma en un repositorio, se hace en la ubicación del proyecto:
``` git
 Git init
```

- Añade todos los archivos en una caja para hacerle un seguimiento:
``` git
 Git add .
```

:::tip
- El punto (.) es para añadir todos los archivos a la caja, pero se puede especificar uno o varios archivos.
:::
- Para ver el contenido de la caja creada con add:
``` git
 Git status -s
```
- Para hacer un commit (etiquetar la caja):
``` git
 Git commit -m "Mensaje"
```

- Para ver los commit hecho:
``` git
 git log --oneline
```


### Pull
``` git
Git pull 
```
Trata de traer la información que tenemos en el repositorio.
Actualiza el proyecto local con lo que contiene Github.

Cuando realizamos cambios directamente en github pero no de forma local, es esencial realizar un pull, donde descargaremos los cambios realizados para seguir trabajando normalmente.
Es importante estar enlazados remotamente, puedes verificar con: "**git remote -v**".








### Checkout

``` git
 git checkout id
```
- Es para revisar los commit, NO PARA HACER CAMBIOS(commit).
- Con este comando solo movemos el HEAD  , no cambiamos de rama.
- Basicamente viajas en el tiempo sin modificar nada (perdes los commits al viajar y se eliminan los archivos que "no existen" en ese commit).
- Para salir te vas al ultimo commit con el mismo comando.
- Tambien podes salir con el comando:
``` git
 git checkout master/main
```

### ¿ Y si hago un commit con checkout?
- Le va a pedir que haga una rama y si no la hace , quedara flotando en el espacio y git lo eliminara.





# VIM
### Salir

   Para salir de VIM :
 ``` git
:q -- Salir
 :qa  -- Salir sin guardar
 :q! -- También sirve para salir sin guardar -- Salir sin guardar
```









