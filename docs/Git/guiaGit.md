---
sidebar_position: 2
---
# Guia Git

## Control de versiones
- Un sistema de control de versiones (VCS) es un programa o conjunto de programas que realiza un seguimiento de los cambios en una colección de archivos.
- Uno de los objetivos de un VCS es recuperar fácilmente versiones anteriores de archivos individuales o de todo el proyecto.
- Otro objetivo es permitir que varios miembros de un equipo trabajen en un proyecto, incluso en los mismos archivos, al mismo tiempo sin que eso afecte al trabajo de los demás.
- Otro nombre para un VCS es un sistema de administración de configuración de software (SCM)
- [Documentación oficial.]( https://git-scm.com/)
-  Un VCS se puede usar para otros proyectos además de los de software, incluidos libros y tutoriales en línea.
-  Con un VCS, puede:
   -	Ver todos los cambios realizados en el proyecto, cuándo se hicieron los cambios y quién los efectuó.
   -	Incluir un mensaje con cada cambio para explicar los motivos.
   -	Recuperar versiones anteriores del proyecto completo o de archivos individuales.
   -	Crear ramas, donde los cambios se pueden hacer experimentalmente. Esta característica permite que se trabaje en varios conjuntos de cambios diferentes (por ejemplo, características o correcciones de errores) al mismo tiempo, posiblemente personas distintas, sin que ello afecte a la rama principal. Más adelante se pueden combinar los cambios que se quieren mantener en la rama principal.
   -	Adjuntar una etiqueta a una versión, por ejemplo, para marcar una nueva versión.   
- Git es un VCS de código abierto rápido, versátil, muy escalable y gratuito. Su autor principal es el creador de Linux (Linux Torvalds).
#### Control de versiones distribuidos
- Antes se usaba un servidor centralizado para almacenar el historial de un proyecto, esto significaba que solo un servidor también era el único punto de error de potencia.
- Git es un sistema distribuido, lo que significa que el historial completo del proyecto se almacena en el cliente y en el servidor.
- Se pueden editar archivos sin conexión de red, protegerlos localmente y sincronizarlos con el servidor cuando una conexión esté disponible.
- Si un servidor deja de funcionar, todavia tendrá una copia local del proyecto.
- La verdad no es necesario tener un servidor, los cambios pueden pasarse por email o medios extraíbles, pero nadie usa Git asi.


## Terminología de Git
- Árbol de trabajo: Conjunto de carpetas y archivos anidados que contiene el proyecto en el que se trabaja.
- Repositorio (repo) : Es un directorio(carpeta) , situado en el nivel superior de un  árbol de trabajo, donde Git mantiene todo el historial y los metadatos de un proyecto. Un repositorio vacío es aquel que no forma parte de un árbol de trabajo, se usa para compartir o realizar copias de seguridad. Un repositorio vacio suele ser un directorio con una nombre que acaba en .git , por ejemplo proyecto.git
- Hash: Número generado por una función hash que representa el contenido de un archivo u otro objeto como un número de dígitos fijo. Git usa hashes de 160 bits de longitud. Git puede indicar si un archivo ha cambiado aplicando un algoritmo hash a su contenido y comparando el resultado con el hash anterior. Si se cambia la marca de fecha y hora del archivo, pero el hash del archivo no, Git sabe que el contenido del archivo no se ha modificado.
- Objeto: Un repositorio de Git contiene cuatro tipos de objetos, cada uno identificado de forma única por un hash SHA-1. Un objeto blob contiene un archivo normal. Un objeto árbol representa un directorio y contiene nombres, valores hash y permisos. Un objeto de confirmación representa una versión específica del árbol de trabajo. Una etiqueta es un nombre asociado a una confirmación.
- Confirmación: Cuando se usa como verbo, confirmar significa crear un objeto de confirmación. Esta acción toma su nombre de las confirmaciones en una base de dato. Significa que se confirman los cambios realizados para que otros usuarios lo vean.
- Rama: Es un conjunto de confirmaciones vinculadas que se identifican por un nombre. La confirmación mas reciente en una rama se denomina nivel superior.  La rama predeterminada, que se crea al inicializar un repositorio, se denomina main, y suele tener el nombre master en Git. El nivel superior de la rama actual se denomina HEAD.  Permite a los desarrolladores trabajar de forma independiente (o conjunta) en ramas y luego combinar los cambios en la rama predeterminada.
- Remoto: Es una referencia con nombre a otro repositorio de Git. Cuando crea un repositorio, Git crea un remoto denominado origin, que es el remoto predeterminado para las operaciones de envió e incorporación de cambios.
- Comandos, subcomandos y opciones: Las operaciones de Git se realizan mediamente comandos como git push y git pull. Git es el comando mientras que push o pull es el subcomando. El subcomando especifica la operación que quiere que Git realice. Los comandos suelen ir acompañados de opciones, que usan guiones (-) o guiones dobles (--). Por ejemplo git reset –hard.


#### Herramientas de línea de comandos de Git
- Hay varios GUI diferentes para Git, incluido Github Desktop.
- Michos editores de progamación como Visual studio Code también tienen una interfaz para git.
- Todos funcionan de manera diferente y tienen distintas limitaciones. Ninguno de ellos implementa toda la funcionalidad de git.
- En esta documentación, se utilizarán directamente las lineas de comandos para aprovechar toda la capacidad de Git. Los desarrolladores que ven Git solo por medio de una GUI a veces reciben mensajes de error que no pueden resolver, por lo que tienen que recurrir a la línea de comandos para empezar de nuevo.

## Git y GitHub
- Git es un sistema de control de versiones distribuido (DVCS) que varios desarrolladores y otros colaboradores pueden usar para trabajar en un proyecto. Proporciona una manera de trabajar con una o varias ramas locales y luego insertarlas en un repositorio remoto.
- GitHub es una plataforma en la nube que usa Git como tecnología principal. Simplifica el proceso de colaboración en proyectos y proporciona un sitio web, más herramientas de línea de comandos y un flujo integral que los desarrolladores y usuarios pueden usar para trabajar juntos. GitHub actúa como el repositorio remoto mencionado anteriormente.
- Entre las características clave que ofrece GitHub se incluyen las siguientes:
   - Incidencias.
   - Debates.
   - Solicitudes de incorporación de cambios.
   - Notificaciones.
   - Etiquetas.
   - Acciones.
   - Bifurcaciones.
   - Proyectos.

## Usar Git
- Para poder crear el primer repositorio, debe asegurarse que git este instalado.
- Para comprobar que este instalado, usamos el comando **git –-version**:

```powershell
git –-version
```
- Para configurar Git, debe definir algunas variables globales: user.name y user.email. Ambas son necesarias para realizar confirmaciones.
- Estableca su nombre con el siguiente comando Reemplace &lt;USER_NAME> por el nombre de usuario que quiere usar:

```powershell
git config --global user.name "<USER_NAME>"
```
- Ahora, use este comando para crear una variable de configuración user.email; para ello, reemplace &lt;USER_EMAIL> por su dirección de correo electrónico:

```powershell
git config --global user.email "<USER_EMAIL>"
```

- Ejecute el siguiente comando para comprobar que los cambios han funcionado:

```powershell
git config  --list
```

- Git funciona buscando cambios en los archivos dentro de una determinada carpeta. Vamos a crear una carpeta que actúe como árbol de trabajo (directorio del proyecto) y a permitir que Git sepa sobre ella para que pueda comenzar a seguir los cambios. Se indica a Git que empiece a realizar el seguimiento de los cambios mediante la inicialización de un repositorio de Git en esa carpeta.
- Empiece por crear una carpeta vacía para el proyecto y luego inicialice un repositorio de Git dentro de ella.
- Cree una carpeta con el nombre Cats. Esta carpeta va a ser el directorio del proyecto, también denominado árbol de trabajo. El directorio del proyecto es donde se almacenan todos los archivos relacionados con el proyecto. 
- Vaya al directorio del proyecto.
- Ahora, inicialice el nuevo repositorio y establezca el nombre de la rama predeterminada en main.
- Si está ejecutando la versión 2.28.0 o una posterior de Git, use el comando siguiente:

```powershell
git init --initial-branch=main
```
- O bien, use el siguiente comando:

```powershell
git init -b main
```
- En versiones anteriores de Git, use estos comandos:

```powershell
git init
git checkout -b main

```
- Ahora, use el comando **git status** para mostrar el estado del árbol de trabajo:

```powershell
git status
```

- Confirme que el directorio(carpeta) contiene un subdirectorio denominado **.git** 
- Esta carpeta es el repositorio de Git: el directorio en el que Git almacena los metadatos y el historial del árbol de trabajo.
- Normalmente no se hace nada directamente con el directorio .git. Git actualiza los metadatos a medida que el estado del árbol de trabajo cambia para mantener un seguimiento de lo que ha cambiado en sus archivos. Este directorio es práctico para usted, pero es increíblemente importante para Git.
- Con el comando **git –-help** obtenemos ayuda sobre lo que se puede hacer con git:
  
```powershell
git –-help
```

## Comandos básicos
- Git recuerda los cambios efectuados en los archivos como si tomara instantáneas del sistema de archivos.

:::tip instantánea
- Es el estado de un sistema en un momento determinado.
:::


#### Git status
- El primer comando de Git, y el que se usa con más frecuencia, es **git status**.
- git status muestra el estado del árbol de trabajo (y del área de almacenamiento provisional, de la que pronto hablaremos más). Permite ver los cambios que Git está siguiendo en ese momento para poder decidir si quiere pedir a Git que tome otra instantánea.
#### Git add
- **git add** es el comando que se usa para indicar a Git que empiece a realizar un seguimiento de los cambios en determinados archivos.
- El término técnico es almacenamiento provisional de estos cambios. Va a usar **git add** para almacenar provisionalmente los cambios a fin de prepararse para una confirmación. Todos los cambios en los archivos que se han agregado pero que aún no se han confirmado se almacenan en el área de almacenamiento provisional.
- Después de haber almacenado provisionalmente algunos cambios para su confirmación, puede guardar el trabajo en una instantánea si invoca al comando git commit.


#### Git commit
- Confirmar (o "commit") es un verbo y un sustantivo. Como verbo, la confirmación de cambios significa que se coloca una copia (del archivo, el directorio u otra "cosa") en el repositorio como una nueva versión.  Como sustantivo, una confirmación es el pequeño fragmento de datos que asigna una identidad única a los cambios que se confirman. Los datos que se guardan en una confirmación incluyen el nombre del autor y la dirección de correo electrónico, la fecha, los comentarios sobre lo que se ha hecho (y por qué), una firma digital opcional y el identificador único de la confirmación.
#### Git log
- El comando git log permite ver información sobre las confirmaciones anteriores. 
- Cada confirmación tiene un mensaje adjunto (un mensaje de confirmación), y el comando git log permite imprimir información sobre las confirmaciones más recientes, como su marca de tiempo, el autor y un mensaje de confirmación. Este comando ayuda a realizar un seguimiento de lo que ha estado haciendo y de los cambios que se han guardado.

#### Git help
- Brinda ayuda.
- Recuerde que cada comando incluye también su propia página de ayuda. Para encontrar estas páginas de ayuda, escriba **git &lt;command> --help**. Por ejemplo, **git commit --help** muestra una página que proporciona más información sobre el comando git commit y cómo usarlo.

## Inicio de un proyecto
- Git no hace mucho con los directorios vacíos, así que vamos a agregar un archivo al árbol de trabajo para que actúe como página principal del sitio web de fotos de gatos.
- Creamos un archivo index.html
- Ahora utilizamos el comando **git status**:
```powershell
git status
```
- Git responde informándole de que no se ha confirmado nada, pero el directorio contiene un nuevo archivo.
- Use **git add** para agregar el nuevo archivo al índice de Git:

```powershell
git add .
```

:::tip 
- No olvide el punto al final del comando. Este indica a Git que indexe todos los archivos del directorio actual que se han agregado o modificado.
- En lugar de **"git add ."** , podría haber usado git add index.html, porque index.html era el único archivo nuevo del directorio. Pero si se hubieran agregado varios archivos, **"git add ."** los habría incluido todos.
:::

- Ahora se ha almacenado provisionalmente una confirmación. El índice de Git es un área de almacenamiento provisional para las confirmaciones. Se trata de una lista de todas las versiones de archivo que van a formar parte de la siguiente confirmación que se haga.
- Ahora que index.html se ha agregado al índice, el paso siguiente consiste en confirmarlo.
- Utilice el comando siguiente para crear una confirmación:

```git
git commit index.html -m "Create an empty index.html file"
```
:::tip Observación
- La marca -m en este comando indica a Git que está proporcionando un mensaje de confirmación.
- Hay muchas maneras de formular mensajes de confirmación, pero una buena pauta consiste en escribir la primera línea de modo que indique lo que la confirmación hace en el árbol. También es habitual poner en mayúsculas la primera letra y dejar fuera el punto final para ahorrar espacio.
- Un mensaje de confirmación puede tener varias líneas. La primera línea no debe tener más de 50 caracteres y debe ir seguida de una línea en blanco. Las líneas siguientes no deben tener más de 72 caracteres. No se trata de requisitos estrictos, pero mejoran el aspecto de la salida de git log.
:::

- Realice un seguimiento con un comando **git status** y confirme que el árbol de trabajo está limpio, es decir, que no contiene cambios sin confirmar:

```powershell
git status
```

- Ahora, use el comando **git log** para mostrar información sobre la confirmación:

```powershell
git log
```

- index.html se ha creado para servir como página principal del sitio web, pero actualmente está vacío. El siguiente paso es agregarle algún código HTML:

```html
<h1>Our Feline Friends</h1>
```

- Use un comando **git status** para comprobar el estado del árbol de trabajo.
- Puede ver que Git es consciente de los cambios realizados.
- Ahora, confirme los cambios:

```git
git commit -a -m "Add a heading to index.html"
```
:::tip Observación
- Observe que esta vez no se ha ejecutado el comando git add para almacenar provisionalmente los cambios. En su lugar, usamos la marca -a en el comando git commit. La opción -a agrega todos los archivos que se han modificado desde la última confirmación. No agregará archivos nuevos. Para agregar nuevos archivos, se sigue necesitando **git add .**
:::

- Se ha confirmado el cambio en index.html. Ahora hay dos versiones del archivo en el repositorio, aunque solo se ve una de ellas (la actual). Una de las ventajas de usar Git es que se pueden revertir los cambios realizados o retroceder en el tiempo y ver las versiones anteriores.


## Realización de cambios y seguimientos
- La mayoría de los proyectos de desarrollo son iterativos. Se escribe algún código y luego se prueba para asegurarse de que funciona. Luego se escribe más código y se invita a otras personas a contribuir.
- La iteración significa que hay muchos cambios: adiciones de código, correcciones de errores, eliminaciones y sustituciones.
- A medida que trabaje en el proyecto, Git le ayudará a realizar un seguimiento de los cambios que realice. También permite deshacer errores.
- La página principal del sitio web, index.html, de momento contiene una sola línea de HTML. Vamos a actualizarla para hacer más cosas y luego a confirmar el cambio en Git.
- En el index.html:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset='UTF-8'>
    <title>Our Feline Friends</title>
  </head>
  <body>
    <h1>Our Feline Friends</h1>
    <p>Eventually we will put cat pictures here.</p>
    <hr>
  </body>
</html>

```
- Use el comando **git diff** para ver lo que ha cambiado:

```git
git diff
```
:::tip observación
- El formato de salida es el mismo que el del comando diff de Unix . Aparece un signo "más" delante de las líneas que se han agregado, y un signo "menos" indica las líneas que se han eliminado.
:::

- El comando para comparar el árbol de trabajo con el índice es **git diff**. Es decir, muestra todos los cambios que aún no se han almacenado provisionalmente (agregado al índice de Git).
- Para comparar el árbol de trabajo con la última confirmación, puede usar **git diff HEAD**.
- Si el comando no vuelve al símbolo del sistema después de ejecutarse, escriba **q** para salir de la vista de diferencias.
- Ahora confirme el cambio. En lugar de usar la marca -a, puede especificar el nombre del archivo para que se almacene provisionalmente y se confirme si Git ya lo tiene en el índice (el comando commit solo comprueba la existencia de un archivo):
```git
git commit -m "Add HTML boilerplate to index.html" index.html
```

- Use **git diff** de nuevo para comparar el árbol de trabajo con el índice.
- Esta vez git diff no genera ninguna salida porque el árbol de trabajo, el índice y HEAD concuerdan.

#### Ignorar
- Tiene que crear el archivo. gitignore al árbol de trabajo.
- Agregue las líneas siguientes al archivo:

```git
*.bak
*~
```

- Esta línea indica a Git que omita los archivos cuyos nombres de archivo terminan en .bak o ~
- .gitignore es un archivo muy importante en el mundo de Git porque impide que los archivos extraños se envíen al control de versiones. Hay archivos .gitignore reutilizables disponibles para lenguajes y entornos de programación populares.
- Guarde y cierre el editor y luego use estos comandos para confirmar los cambios:

```git
git add -A
git commit -m "Make small wording change; ignore editor backups"

```

:::tip Observación
- En este ejemplo se usa la opción -A con git add para agregar todos los archivos sin seguimiento (y no omitidos), así como los que han cambiado, a los archivos que ya están bajo control de Git.
:::
- Si en este momento usa **git diff**, la salida estará vacía porque los cambios se han confirmado. Sin embargo, siempre puede usar un comando **git diff HEAD^** para comparar las diferencias entre la confirmación más reciente y la anterior. Pruébelo y vea. No olvide incluir el carácter ^ (cursor de inserción) al final del comando.


#### Añadimos un subdirectorio
- La mayoría de los sitios web usan hojas de estilo CSS y HTML, y el sitio que está compilando no es una excepción. 
- Creamos una carpeta llamada CSS.
- Luego ejecute **git status**

:::tip ¿Por qué indica Git que no hay nada que confirmar?
- Los usuarios a menudo se sorprenden al saber que Git no considera que agregar un directorio vacío sea un cambio. Esto se debe a que Git solo realiza el seguimiento de los cambios en los archivos, no en los directorios.
- En ocasiones, especialmente en las fases iniciales de desarrollo, quiere tener directorios vacíos como marcadores de posición. Una convención común es crear un archivo vacío, a menudo llamado .git-keep, en un directorio de marcador de posición.
:::

- Creamos el archivo .git-keep dentro de la carpeta CSS.
- Agregamos el contenido del subdirectorio al índice:

```git
git add CSS
```

- Vuelva a realizar un seguimiento mediante **git status** para comprobar el estado del repositorio. Confirme que informa de un nuevo archivo.


#### Remplazo de un archivo
- Ahora vamos a reemplazar .git-keep por un archivo CSS y a actualizar index.html para hacer referencia a él.
- Elimine .git-keep de la carpeta CSS y en su lugar creamos el archivo site.css con el siguiente contenido:

```css
h1, h2, h3, h4, h5, h6 { font-family: sans-serif; }
body { font-family: serif; }

```

- Ahora agregue la siguiente línea a index.html (no olvide volver al directorio Cats) después de la línea &lt;title> y guarde el archivo modificado:

```html
    <title>Our Feline Friends</title>
    <link rel="stylesheet" href="CSS/site.css">
  </head>

```

- Use **git status** para ver un resumen de los archivos que han cambiado. Luego, use los siguientes comandos para almacenar provisionalmente los archivos sin seguimiento en el control de versiones y confirmar los cambios de site.css e index.html:

```git
git add .
git commit -m "Add a simple stylesheet"

```

- A diferencia de la mayoría de los VCS, Git registra el contenido de los archivos en lugar de las diferencias (cambios) entre ellos. Esto es en gran medida lo que hace que la confirmación, la bifurcación y el cambio entre ramas sean tan rápidos en Git. Otros VCS tienen que aplicar una lista de cambios que se quieren obtener entre una versión de un archivo y otra. Git solo descomprime la otra versión.

#### Enumeración de las confirmaciones
- Ahora que tiene un número razonable de cambios registrados, puede usar **git log** para verlos. Al igual que con la mayoría de los comandos de Git, hay muchas opciones entre las que elegir. Uno de los ejemplos más útiles es **--oneline**.
- Use el comando siguiente para revisar todas las confirmaciones:

```git
git log
```

:::tip Observación
- Tiene información del commit , autor , fecha y mensaje de confirmacion.

:::

- Ahora, use este comando para obtener una lista más concisa (corta):

```git
git log –oneline
```


:::tip Observación
- Tiene información del commit y mensaje de confirmacion.

:::

- Puede ver por qué cuando hay cientos (o miles) de confirmaciones en un proyecto la opción **--oneline** puede ser su mejor aliada. Otra opción útil es **-nX**, donde X es un número de confirmación: 1 para la última confirmación, 2 para la anterior, y así sucesivamente. Para verlo, pruebe el comando **git log -n2**. 
- Entonces X representa el numero de confirmaciones que desea ver.


## Corección de errores simples
- En ocasiones, algo no sale según lo previsto. Es posible que se olvide de agregar un archivo nuevo o que agregue uno por error. Quizás haya cometido un error ortográfico en la confirmación más reciente o haya confirmado algo que no quería confirmar. Quizás haya eliminado accidentalmente un archivo.
- Git le permite realizar cambios sin miedo, porque siempre ofrece una manera de volver atrás. Puede incluso cambiar el historial de confirmaciones de Git siempre y cuando cambie solo las confirmaciones que no se hayan compartido.

#### Corección de errores simples
#### Rectificación de una confirmación: marca  --amend
- Imagine que descubre que ha cometido un error al escribir la instrucción para especificar el archivo css. En lugar de especificar la ruta de acceso de la carpeta como CSS, ha escrito CS:


```html
    <link rel="stylesheet" href="CS/site.css">
```

- Al actualizar la página en el explorador, observará que no se aplica la hoja de estilos CSS. Después de investigar, se da cuenta de que ha especificado los valores de la ruta de acceso de forma incorrecta.
- Por lo tanto, actualice index.html con la ruta de acceso correcta a la hoja de estilos. En este punto bastaría con confirmar la versión corregida de index.html, pero, en lugar de ello, prefiere colocarla en la misma confirmación que la original. La opción **--amend** para git commit permite cambiar el historial (¿y con qué frecuencia se tiene la oportunidad de cambiar el historial?):

```git
git commit --amend --no-edit
```


:::tip Observación
- La opción **--no-edit** indica a Git que realice el cambio sin cambiar el mensaje de confirmación. También puede usar **--amend** para editar un mensaje de confirmación, para agregar archivos dejados accidentalmente fuera de la confirmación o para quitar archivos agregados por equivocación.
:::

:::tip
- Amend solo modifica el commit más reciente.
- Puede usar Amend de Git para corregir una confirmación anterior sin necesidad de realizar una nueva confirmación.
- Si quieres modificar commits más antiguos o varios commits a la vez, puedes usar **git rebase** para combinar una secuencia de commits en un nuevo commit base. 
:::




#### Recuperación de un archivo eliminado: git checkout
- Imagine que ha realizado un cambio en un archivo de código fuente que ha interrumpido todo el proyecto, por lo que quiere revertir a la versión anterior de ese archivo.
- Quizás haya eliminado un archivo por completo accidentalmente. Git facilita la recuperación de una versión anterior, incluso aunque la versión actual ya no exista. El mejor aliado en esta situación es el comando **git checkout**.
- **git checkout** tiene varias utilidades, pero en este caso se va a usar para recuperar un archivo eliminado.
- **git checkout** actualiza los archivos del árbol de trabajo para que coincidan con la versión del índice o la del árbol especificado.
- Si ha eliminado un archivo por accidente, puede recuperarlo si devuelve la versión del índice al árbol de trabajo con este comando:

```git
git checkout -- <file_name>
```

- También puede extraer del repositorio un archivo de una confirmación anterior (normalmente, el nivel superior de otra rama), pero el valor predeterminado es obtener el archivo del índice. El objeto **--** de la lista de argumentos sirve para diferenciar la confirmación de la lista de rutas de archivo. No es estrictamente necesario en este caso, pero si tuviera una rama llamada &lt;nombre_archivo> (quizás porque ese es el nombre del archivo en el que se está trabajando en esa rama), **--** evitaría que Git se confundiera.

:::tip
- Checkout también se usa para cambiar de rama.
:::


#### Recuperación de archivos: git reset
- También puede eliminar un archivo con **git rm**. Este comando elimina el archivo en el disco, pero también hace que Git registre su eliminación en el índice.
- Por lo tanto, si ha ejecutado este comando:

```git
git rm index.html
git checkout -- index.html

```

- Git no restauraría index.html fácilmente. Por el contrario, se obtendría un error.
- Para recuperar index.html, habría que usar otra técnica: **git reset**. Puede usar **git reset** para anular el almacenamiento provisional de los cambios.
- index.html se puede recuperar con estos dos comandos:


```git
git reset HEAD index.html
git checkout -- index.html

```

:::tip observación
- Aquí, **git reset** revierte la eliminación del archivo del almacenamiento provisional de Git. Este comando devuelve el archivo al índice, aunque sigue eliminado del disco. Luego se puede restaurar en el disco desde el índice con **git checkout**.
:::


- Muchos VCS hacen que los archivos sean de solo lectura para asegurarse de que solo una persona pueda efectuar cambios cada vez; los usuarios usan un comando checkout no relacionado para obtener una versión grabable del archivo. También usan checkin para una operación similar a la que realiza Git con una combinación de add, commit y push. A veces este hecho origina confusión cuando los usuarios empiezan a usar Git.



#### Reversión de una confirmación: git revert
- El último comando importante que se debe conocer para corregir errores con Git es **git revert**.
-  **git checkout** solo funciona cuando los cambios están en el índice. 
-  Después de confirmar los cambios, debe emplear otra estrategia para deshacerlos. En este caso se puede usar **git revert** para revertir la confirmación anterior. Crea otra confirmación que cancela la primera.
-  Se puede usar **git revert HEAD** para realizar una confirmación exactamente opuesta a la última, con lo que esta se deshace y deja todo el historial intacto. La parte HEAD del comando simplemente indica a Git que se quiere "deshacer" solo la última confirmación.
- Por otro lado, también se puede quitar la confirmación más reciente con el comando **git reset**:


```git
git reset --hard HEAD^
```
- Git ofrece varios tipos de restablecimientos. El valor predeterminado es --mixed, que restablece el índice, pero no el árbol de trabajo; también mueve HEAD si se especifica otra confirmación. La opción --soft solo mueve HEAD y deja el índice y el árbol de trabajo sin cambios. Esta opción deja todos los cambios como "pendientes de confirmar", como indicaría git status. Un restablecimiento --hard cambia el índice y el árbol de trabajo para que coincidan con la confirmación especificada; los cambios realizados en los archivos se descartan.


## Practica

#### Checkout
- En primer lugar, intente eliminar index.html.
- Vamos a recuperar index.html. Use **git checkout** para recuperar index.html:

```git
git checkout -- index.html
```

#### Git rm
- Si quiere recuperar archivos eliminados, las cosas son un poco más complicadas si los elimina mediante git rm.
- Para ver lo que sucede, pruebe este comando:

```git
git rm index.html
```
- Intente recuperar index.html:

```git
git checkout -- index.html
```

- Esta vez, Git indica que no sabe nada de index.html. Esto se debe a que Git no solo ha eliminado el archivo, sino que ha registrado la eliminación en el índice.
- Revierta la eliminación de index.html del almacenamiento provisional con el comando **git reset**:


```git
git reset HEAD index.html
```

- Ahora puede recuperar el archivo del índice con el comando que ha usado antes:

```git
git checkout -- index.html
```


- **git reset** deshizo el cambio, pero el archivo seguía borrado, así que tuvo que usar checkout para recuperarlo.


#### Reversión
- Ahora vamos a complicar las cosas un poco más. Imagine que por accidente sobrescribe un archivo con otro, o que hace un cambio en un archivo que resulta ser un gran error. Quiere revertir el archivo a la versión anterior, pero ya ha confirmado los cambios. En este caso, un sencillo **git checkout** no va a funcionar.
- En el index.html , solo dejamos esta línea:


```html
<h1>That was a mistake!</h1>
```

- Confirmamos el cambio y mostramos la confirmación:


```git
git commit -m "Purposely overwrite the contents of index.html" index.html
git log -n1

```
:::tip Observación
- La marca -n1 aquí indica a Git que solo se quiere la  confirmación más reciente.
:::


- En esta situación, la mejor opción es revertir el cambio realizando otra confirmación que cancele la primera. Este es un trabajo para **git revert**.
- Use **git revert** para deshacer los cambios confirmados:

```git
git revert --no-edit HEAD
```

:::tip Observación
- La marca **--no-edit** aquí indica a Git que no se quiere agregar un mensaje de confirmación para esta acción.
:::


- Realice un seguimiento con un comando git log para mostrar la confirmación más reciente:

```git
git log -n1
```

- Por último, abra el archivo index.html para asegurarse de que el contenido es la versión correcta.
- La reversión no es la única manera de solucionar esta situación; bastaría con editar index.html y confirmar el archivo corregido. Esa opción es más difícil si los cambios confirmados fueran muchos. En cualquier caso, **git revert** es una clara señal de intenciones.



## Colaboración mediante un comando de incorporación de cambios.
- Con Git, dos o más usuarios pueden trabajar juntos en un proyecto sin miedo a sobrescribir el trabajo de los otros. Además, puede comprobar el trabajo de una persona antes de combinarlo con el suyo(Ningún desarrollador es perfecto. Confíe, pero compruebe).

#### Clonación de un repositorio (git clone)
- En Git, un repositorio se copia al clonarlo mediante el comando **git clone**. Puede clonar un repositorio independientemente de dónde esté almacenado, siempre que tenga una dirección URL o una ruta de acceso a la que apuntar.
- **git clone** acepta rutas de acceso del sistema de archivos, rutas de acceso SSH (por ejemplo, git@example.com:alice/Cats; estará familiarizado con este formato si ha usado Rsync o SCP) o direcciones URL, normalmente una que empiece por file:, git: o ssh. Los distintos formatos se describen en la documentación de git clone.
- En Unix y Linux, la operación de clonación usa vínculos físicos, así que es rápida y usa un espacio mínimo, ya que solo hay que copiar las entradas de directorio, no los archivos.
- Al clonar (copiar) un repositorio, Git crea una referencia al repositorio original denominada "remoto (conexión remota)". Git usa el nombre "origen" para referirse al repositorio remoto.


:::tip
-  Git usa el nombre origin para referirse al repositorio original, pero esa no es la referencia en sí.
:::

#### Repositorios remotos (git pull)
- Cuando Git clona un repositorio, crea una referencia al repositorio original, al que se llama remoto, mediante el nombre origin.
- Configura el repositorio clonado de modo que incorpore o recupere datos del repositorio remoto(también puede enviar cambios). 
- origin es la ubicación predeterminada desde la que Git incorpora los cambios y a la que los envía.
- **git pull** copia los cambios del repositorio remoto en el local. Es muy eficaz, porque solo copia las confirmaciones y los objetos nuevos y luego los inserta en el árbol de trabajo.
- Puede incorporar cambios de origin mediante el comando **git pull**.
- Git solo examina las confirmaciones. Ya sabe cuál es la última confirmación que ha obtenido del repositorio remoto porque ha guardado la lista de confirmaciones. 
- Luego, Git indica al equipo desde el que está copiando que envíe todo lo que ha cambiado, incluidas las nuevas confirmaciones y los objetos a los que apuntan.
- Esos objetos y confirmaciones se agrupan en un archivo denominado paquete que se envía en un lote.
- Por último, Git actualiza el árbol de trabajo al desempaquetar todos los objetos que han cambiado y combinarlos (si fuera necesario) con las confirmaciones y los objetos del árbol de trabajo.
- Git solo incorpora o envía cambios si el usuario se lo indica.


#### Creación de solicitudes de incorporación de cambios (git request-pull)
- Una vez que otro desarrollador, ha clonado el repositorio y realizado algunos cambios en local, es recomendable que incorpore esos cambios al repositorio original.
- Podría parecer que lo adecuado sería enviar los cambios al repositorio original, pero se produciría un error al hacerlo, ya que otros usuarios no tienen permiso para realizar cambios en él. Y así debe ser. Por ahora, quiere revisar los cambios entrantes antes de combinarlos con la base de código principal.
- Por ahora, un Desarollador tendrá que enviar una solicitud de incorporación de cambios para pedirle que incorpore sus cambios a la base de código principal.  Esto se puede hacer mediante **git request-pull**, que podría tener el aspecto de este ejemplo:
```git
git request-pull -p origin/main .
```
:::tip observación
- Se hace referencia a la rama main del remoto origin como origin/main.
:::

- Esta solicitud de incorporación de cambios es básicamente lo mismo que una de GitHub, que es un lugar para almacenar código. Una solicitud de incorporación de cambios le ofrece la posibilidad de revisar los cambios de otros colaboradores antes de incorporar su trabajo al proyecto. Las revisiones de código son una parte importante (algunos dirían que la más importante) de la programación colaborativa.



#### Creación de un remoto (git remote) y finalización de la solicitud de incorporación de cambios (git pull)
- Use el comando **git remote** para configurar el repositorio de otro desarrollador como remoto.
- Luego use ese remoto para las incorporaciones y las solicitudes de incorporación de cambios mediante el comando **git pull**.
- En segundo plano, **git pull** es una combinación de dos operaciones más sencillas: **git fetch**, que obtiene los cambios, y **git merge**, que combina esos cambios en el repositorio. 
- Una combinación es de avance rápido, cuando el desarrollador tiene la confirmación más reciente en su repositorio, por lo que esta confirmación podría agregarse al principio del historial sin ninguna modificación.



## Practica

#### Creación de un repositorio
- Creamos una carpeta denominada Cats (podemos usar la anterior, pero la vaciamos).
- Inicialice el nuevo repositorio y establezca el nombre de la rama predeterminada en main:

```git
git init --initial-branch=main
```
- Configuramos las credenciales (estas son locales):

```git
git config user.name "Fede"
git config user.email "fede@costoso.com"
```
- En la carpeta creamos los siguientes archivos vacios:
   - Index.html
   - Carpeta CSS
   - Archivo site.css en la carpeta CSS
- Los almacenamos provisionalmente y lo confirmamos mediante git:

```git
git add .
git commit -m "Create empty index.html, site.css files"

```

- Agregue algún código HTML al archivo index.html :


```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset='UTF-8'>
    <title>Our Feline Friends</title>
    <link rel="stylesheet" href="CSS/site.css">
  </head>
  <body>
    <h1>Our Feline Friends</h1>
    <p>Eventually we will put cat pictures here.</p>
    <hr>
  </body>
</html>

```
- Agregue el siguiente CSS al site.css:

```css
h1, h2, h3, h4, h5, h6 { font-family: sans-serif; }
body { font-family: serif; }
```

- En la raiz del proyecto, confirmamos los cambios de nuevo:


```git
git add .
git commit -m "Add simple HTML and stylesheet"

```

- Compruebe rápidamente si se crearon las dos confirmaciones:


```git
git log   --oneline
```

#### Clonación de un repositorio
- Para simular la clonación del repositorio por parte de un desarrollador del equipo, vamos a crear un directorio denominado Alice en su equipo y clonar en él el directorio del proyecto.
- En la vida real, esta colaboración se lograría mediante la configuración de un recurso compartido de red o un remoto accesible por medio de una dirección URL.
- Cree un directorio(carpeta) denominado Alice en el que clonar el repositorio. No debe ser un subdirectorio del directorio del proyecto (Cats).
- Ahora use **git clone** para clonar el repositorio que se encuentra en el directorio  Cats en el directorio Alice. Asegúrese de incluir el punto al final del comando:


```git
git clone ../Cats .
```

:::tip Observación
- **"../Cats"** indica a Git desde dónde debe realizar la clonación (especifica que tenemos que copiar), mientras que **"."** le indica la ubicación de destino de esta (especifica donde tenemos que pegar). En Unix, **"."** hace referencia al directorio actual.
:::

#### Creación de una solicitud de incorporación de cambios
- En este momento no hay nada que Alice pueda incorporar, porque no se ha realizado ningún cambio desde que ella clonó el repositorio. Puede probarlo con el siguiente comando, que muestra la salida Already up-to-date:

```git
git pull
```


#### Realización de un cambio y envió de una solicitud de incorporación de cambios.
- Alice comienza a trabajar en el sitio web. Su primera decisión es cambiar el color de fondo del sitio. Alice experimenta en local y, finalmente, elige su tono favorito de azul claro.
- Primero configuremos la identidad de Alice mediante los siguientes comandos:

```git
git config user.name "Alice"
git config user.email "alice@contoso.com"

```

:::tip Observación
- Estos valores de configuración config se almacenan en el repositorio en el archivo .git/config, así que no tendrá que volver a escribirlos. Cada vez que vaya al directorio Alice, asumirá la identidad de Alice.
:::


- En CSS/site.css:

```css
body { font-family: serif; background-color: #F0FFF8; }
```

- Ahora confirme el cambio:

```git
git commit -a -m "Change background color to light blue"
```

- Luego realice una solicitud de incorporación de cambios al repositorio original:

```git
git request-pull -p origin/main .
```

#### Creación de un remoto y finalización de la solicitud de incorporación de cambios.
- Dado que el directorio del proyecto y el directorio Alice están en el mismo equipo, puede incorporar los cambios directamente desde el directorio Alice.  En la vida real, el directorio Alice estaría en el equipo de ella. 
- Esta circunstancia se soluciona mediante la configuración de un remoto con el comando **git remote**.
-  Luego se usa ese remoto para las solicitudes de incorporación y envío de cambios.
- En estos ejemplos no resulta práctico configurar dos máquinas, así que se va a configurar un remoto que use un nombre de ruta de acceso local. En realidad, se usaría una ruta de acceso de red o una URL.
- Vuelva al directorio del proyecto (carpeta Cats) y use el comando **git remote** para crear un remoto de nombre remote-alice que tenga como destino el directorio del proyecto de Alice:


```git
git remote add remote-alice ../Alice
```

- Ahora ejecute una incorporación de cambios:

```git
git pull remote-alice main
```

- Si te fijas en **git log --oneline** , ya se aplico la confirmación en el repositorio principal.


## Colaboración mediante un repositorio compartido
- La incorporación de cambios desde el repositorio de otro usuario funciona, siempre que ambos estén en la misma red. 
- Pero es un proceso burdo, y la mayoría de los colaboradores no están en la misma red. Es mejor configurar un repositorio central en el que todos los colaboradores pueden insertar y enviar.
- Cuando le habla a su amigo desarrollador Bob sobre su proyecto y este le pide participar, eso es exactamente lo que decide hacer: configurar un repositorio central, que también se conoce como repositorio vacío.
#### Repositorio vació
- Lo que necesita es un repositorio que no tenga árbol de trabajo. Un repositorio vacío tiene varias ventajas con respecto a un árbol de trabajo:
   -	Sin un árbol de trabajo, todo el mundo puede enviar cambios sin tener que preocuparse de qué rama se extrae del repositorio.
   -	Para Git es fácil detectar si otro usuario ha enviado cambios que podrían entrar en conflicto con los suyos.
   -	Un repositorio compartido se escala a cualquier número de desarrolladores. Con un repositorio vacío solo tiene que saber sobre el repositorio compartido y no sobre los demás colaboradores de los que puede que tenga que incorporar.
   -	Al colocar el repositorio compartido en un servidor al que todos pueden acceder, no tiene que preocuparse por los firewalls ni los permisos.
   -	No necesita cuentas independientes en el servidor, ya que Git realiza un seguimiento de quién ha realizado cada confirmación. (GitHub tiene millones de usuarios que comparten la cuenta git. Todos usan el protocolo de red criptográfico de Secure Shell (SSH) y los usuarios se distinguen por sus claves públicas).   
   
   
   
#### Crear repositorio vacío
   - Crear un repositorio vacío para compartir es sencillo.
   - Cree un nuevo directorio(carpeta) denominado Shared.git en el mismo nivel que los directorios Alice y Cats para que contenga el repositorio vacío.
  
:::tip
  - Al asignar al directorio el nombre Shared.git se sigue la larga tradición de asignar a los repositorios vacíos un nombre que finaliza en .git para distinguirlos de los árboles de trabajo. Se trata de una convención, no de un requisito.
:::tip
- Ahora use el siguiente comando adentro de la carpeta nueva para crear un repositorio vacío en el directorio compartido:
```git
git init –-bare
```

:::tip
- Verifica que el repositorio Shared.git es realmente un repositorio "bare":
   - Asegúrate de que Shared.git sea realmente un repositorio "bare". Puedes verificar si tiene una carpeta .git dentro de su estructura de directorios; si la tiene, no es un repositorio "bare". Los repositorios "bare" no tienen una copia de trabajo y no deberían tener una carpeta .git.
:::


- Cuando un repositorio todavía está vacío, no se puede usar el comando **git checkout** para establecer el nombre de la rama predeterminada. Para realizar esta tarea, puede cambiar la rama HEAD para que apunte a otra rama; en este caso es la rama main:

```git
git symbolic-ref HEAD refs/heads/main
```

- El siguiente paso consiste en obtener el contenido de su repositorio en el repositorio compartido. 
- Vuelve al directorio del proyecto donde está almacenado el repositorio(Cats), configure un remoto origin y realice un envío de cambios inicial:


```git
git remote add origin   ../Shared.git
git push  origin main

```

- Quiere que push y pull usen de manera predeterminada la rama main de origin, como si se hubiera creado el repositorio clonándolo. Pero primero debe indicar a Git la rama cuyo seguimiento se va a efectuar:

```git
git branch --set-upstream-to  origin/main
```

:::tip
- Git se quejaría si se intentara ejecutar este comando antes del envío de cambios inicial, ya que el nuevo repositorio no tendría ramas. Git no puede realizar el seguimiento de una rama que no existe. Lo único que Git hace por debajo es buscar en .git/refs/remotes/origin un archivo denominado trunk.
:::

#### Configuración para colaboradores
- El siguiente paso es que Bob clone el repositorio vacío y que Alice defina el origen en su repositorio para establecer como destino de las incorporaciones y los envíos de cambios el repositorio compartido.
- Cree un directorio denominado Bob que sea un elemento del mismo nivel que el directorio del proyecto y luego vaya al directorio Bob.
- Ahora, clone el repositorio compartido (asegúrese de incluir el punto al final del comando):

```git
git clone ../Shared.git .
```

- Actualmente, el repositorio de Alice está configurado para enviar e incorporar cambios desde su propio repositorio. Use el siguiente comandos para cambiar origin para que apunte al repositorio compartido.
- En la carpeta de Alice:
```git
git remote set-url origin ../Shared.git
```

#### Inicio de colaboración
- Ahora que Bob lo tiene todo a punto para trabajar en el sitio web, decide agregar un pie de página en la parte inferior. Vamos a asumir el rol de Bob y Alice durante unos minutos para aprender los aspectos básicos de la colaboración.
- Comience por ir al directorio Bob y trabaje como Bob:

```git
git config user.name Bob
git config user.email bob@contoso.com
```

- Abra index.html y reemplace el elemento &lt;hr> por esta línea (se encuentra al final del elemento &lt;body>):

```html
  <footer><hr>Copyright (c) 2021 Contoso Cats</footer>
```

- Confirme los cambios e insértelos en el origen remoto:

```git
git commit -a -m "Put a footer at the bottom of the page"
git push
```

:::tip
- Si ve una advertencia similar a la del ejemplo siguiente, no se preocupe. Simplemente comunica a los usuarios un cambio en los comportamientos predeterminados de Git. Si quiere asegurarse de no volver a ver esta advertencia, puede ejecutar **git config --global push.default simple**


```git
warning: push.default is unset; its implicit value has changed in
Git 2.0 from 'matching' to 'simple'. To squelch this message
and maintain the traditional behavior, use:

  git config --global push.default matching

To squelch this message and adopt the new behavior now, use:

  git config --global push.default simple

When push.default is set to 'matching', git will push local branches
to the remote branches that already exist with the same name.

Since Git 2.0, Git defaults to the more conservative 'simple'
behavior, which only pushes the current branch to the corresponding
remote branch that 'git pull' uses to update the current branch.

See 'git help config' and search for 'push.default' for further information.
(the 'simple' mode was introduced in Git 1.7.11. Use the similar mode
'current' instead of 'simple' if you sometimes use older versions of Git)

```
:::

- Mientras Bob edita el sitio, Alicia también lo hace. Ella decide agregar una barra de navegación a la página. Esta incorporación obliga a Alice a modificar dos archivos: index.html y site.css. Empiece por volver al directorio Alice.
- Ahora, abra index.html e inserte la línea siguiente inmediatamente después de la etiqueta &lt;body>:

```html
    <nav><a href="./index.html">home</a></nav>
```

- Abra site.css en la carpeta CSS y agregue la línea siguiente en la parte inferior:

```css
nav { background-color: #C0D8DF; }
```

- Ahora imagine que Alice recibe un correo electrónico de Bob en el que le dice que ha hecho cambios en el sitio. Alice decide extraer los cambios de Bob antes de confirmarlos. (Si Alice ya hubiera confirmado los cambios, tendrían otro problema). Alice ejecuta este comando:
```git
git pull
```
- Compruebe los resultados. Por la salida, parece que Git ha evitado un problema:
```git
error: Your local changes to the following files would be overwritten by merge:
        index.html
Please commit your changes or stash them before you can merge.
Aborting

```

- Git advierte que la incorporación de cambios sobrescribiría la versión de Alice de index.html y se perderían sus cambios. Esto se debe a que Bob también ha modificado index.html. Si Alice no hubiera cambiado index.html, Git habría confirmado la combinación.
- Use un comando **git diff** para ver qué cambios ha realizado Bob en index.html:

```git
git diff origin -- index.html
```
:::tip observación
- Lo que esta en rojo son los cambios que “Bob haría”.
- Lo que está en verde son los cambios que “Alicia haría”.
-	Líneas en rojo: Las líneas en color rojo suelen representar las líneas que se han eliminado. En otras palabras, estas líneas existían en la versión anterior pero ya no están presentes en la versión actual.
-	Líneas en verde (u otro color similar): Las líneas en verde, o en otro color destacado, suelen representar las líneas que se han agregado en la versión actual del archivo. Estas líneas no existían en la versión anterior, pero se han añadido en la versión actual.
:::

- Compruebe los resultados. Por la salida, es evidente que los cambios de Alice y los de Bob no se superponen. Ahora Alice puede guardar provisionalmente sus cambios.
- **git stash** guarda el estado del árbol de trabajo y el índice mediante un par de confirmaciones temporales. Piense en el almacenamiento provisional (que crea **git stash**) como una manera de guardar el trabajo actual mientras hace otra cosa, sin tener que realizar una confirmación "real" ni afectar al historial del repositorio.
- En realidad, Alice debería haber confirmado o guardado provisionalmente sus cambios antes de intentar incorporar cambios. La incorporación de cambios a un árbol de trabajo "sucio" es algo arriesgado, ya que puede provocar incidencias más complejas de subsanar.
- Use el siguiente comando para guardar provisionalmente los cambios de Alice:


```git
git stash
```

- Ahora Alice puede incorporar los cambios con seguridad, después de lo cual puede "sacar" los cambios guardados provisionalmente, que están organizados como una pila. (De hecho,**git stash** es una forma abreviada de **git stash push**. Es muy similar a la pila donde se colocan las facturas que aún no se han podido pagar). Ejecute estos comandos:


```git
git pull
git stash pop

```

- Los cambios guardados provisionalmente se combinan al extraerlos. Si los cambios se superponen, podría haber un conflicto. 
- Alice debería ver  una salida, que le permite saber que la combinación se ha realizado correctamente y que los cambios están de vuelta, aunque aún no se hayan almacenado provisionalmente para su confirmación.
- En este punto Alice puede seguir trabajando o simplemente confirmar y enviar los cambios. Vamos a hacer otro cambio como Alice: asignar a los pies de página el mismo estilo que a las barras de navegación.
- Abra site.css en la carpeta CSS y reemplace la tercera línea (la que aplica estilo a los elementos &lt;nav>) por esta regla CSS compartida.:

```css
nav, footer { background-color: #C0D8DF; }
```

- Ahora confirme los cambios y envíelos al repositorio compartido:

```git
git commit -a -m "Stylize the nav bar"
git push
```

- El sitio actualizado está ahora en el repositorio compartido.
- Para finalizar, vuelva al directorio del proyecto(Cats) y realice una incorporación de cambios:

```git
git pull
```
- Abra index.html (el que se encuentra en el directorio del proyecto) para confirmar que los cambios realizados por Bob y Alice están presentes en el repositorio local. Compruebe que index.html tiene el código más actualizado:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset='UTF-8'>
    <title>Our Feline Friends</title>
    <link rel="stylesheet" href="CSS/site.css">
  </head>
  <body>
    <nav><a href="./index.html">home</a></nav>
    <h1>Our Feline Friends</h1>
    <p>probando</p>
    <p>Eventually we will put cat pictures here.</p>
    <footer><hr>Copyright (c) 2021 Contoso Cats</footer>
  </body>
</html>
```

- En este momento, su repositorio y el de Alice están sincronizados, pero el de Bob no lo está. Para finalizar, actualice también el de Bob.
- En el directorio de Bob: **git pull**
- Los tres repositorios ya están alineados. El repositorio compartido es el único origen de confianza para todos los usuarios, y todos los envíos de cambios e incorporaciones se dirigen a él.


## Rama en Git
- A medida que el proyecto avanza, se da cuenta de que quiere que todos puedan trabajar en más de una tarea a la vez sin interponerse en la forma de trabajar de otra persona. Necesita mantener por separado el trabajo de todos para que el nuevo desarrollo no interfiera con las correcciones de errores existentes. En Git, las ramas facilitan este tipo de colaboración.
- El trabajo que se hace en una rama no se tiene que compartir, y tampoco interfiere con el trabajo realizado en otras ramas. Las ramas le permiten mantener las confirmaciones relacionadas con un tema juntas y aisladas de otro trabajo, por lo que los cambios realizados en un tema son fáciles de revisar y supervisar.
- El desarrollo de software moderno se realiza casi por completo en ramas. El objetivo es mantener limpia la rama principal hasta que el trabajo esté listo para su inserción en el repositorio. 
- Después, inserte los cambios en la rama principal, o mejor aún, envíe una solicitud de incorporación de cambios para fusionar los cambios.
- Una ventaja de Git con respecto a los sistemas de control de versiones (VCS) anteriores es que, con Git, la creación de una rama es muy rápida; equivale a escribir un hash de 40 caracteres en un archivo en .git/heads. La conmutación de ramas también es rápida, ya que Git almacena archivos completos y los descomprime en lugar de intentar reconstruirlos a partir de listas de cambios. La combinación en Git no es tan simple, pero es sencilla y a menudo totalmente automática.

#### Estructura y nomenclatura de las ramas
- Una rama es simplemente una cadena(conjunto) de confirmaciones que se ramifica a partir de la línea principal de desarrollo, como una rama de un árbol.
- Si va a cambiar a Git desde otro VCS, es posible que esté acostumbrado a una terminología algo distinta. La subversión del VCS nombra su rama predeterminada como trunk, mientras que Git la denomina master. Puede cambiar el nombre de la rama predeterminada de la misma forma que puede hacerlo con cualquier otra rama. la rama predeterminada se suele denominar main.
- Normalmente, una rama comienza con una confirmación en la rama predeterminada; en este caso, en main. 
- A medida que se agregan confirmaciones en la rama, se desarrolla una cadena de historial independiente. Finalmente, los cambios de la rama se vuelven a combinar en main. 
- Supongamos que crea una rama a partir de la rama main. Aquí se muestra cómo visualizar lo que sucede:

![Crear rama a partir de main](https://learn.microsoft.com/es-mx/training/modules/branch-merge-git/media/branch-tree.png)


:::tip Observación
- Cada letra mayúscula del diagrama representa una confirmación. Las ramas reciben nombres tales como add-authentication y fix-css-bug, y pueden tener sus propias ramas. El objetivo final es dejar que los desarrolladores hagan lo que tienen que hacer sin interferir unos con otros y terminar con una rama principal que represente los mejores esfuerzos de todos los implicados.
:::


#### Creación y modificación de ramas
- Una razón común para crear una rama es realizar cambios en una característica existente. Una rama con este fin se denominaría habitualmente rama puntual o rama de características.
- Puede crear una rama con el comando **git branch**. Cambie entre las ramas con el comando **git checkout**.

:::tip
- Ha identificado checkout como una forma de reemplazar archivos en el árbol de trabajo obteniéndolos del índice. Sin rutas de acceso en la lista de argumentos, checkout actualiza todo lo que hay en el árbol de trabajo y el índice para que coincida con la confirmación especificada (en este caso, el HEAD de la rama).
:::
#### Combinación

- Una vez que haya finalizado algún trabajo en una rama, quizá una característica o una corrección de errores, querrá combinar la rama de nuevo con la rama principal. Puede usar el comando **git merge** para combinar una rama específica con la rama actual.
- Por ejemplo, si estuviera trabajando en una rama llamada my-feature, el flujo de trabajo sería similar al del siguiente ejemplo:


```git
# Switch back to the main branch
git checkout main
# Merge my-feature branch into main
git merge my-feature
```

:::tip Observación
- Después de usar estos comandos y resolver los conflictos de combinación, todos los cambios de la rama my-feature se encontrarían en main.
:::

## Practica
- Su amiga desarrolladora Alice desea agregar algunos estilos CSS para dar estilo a las fotos de gatos del sitio web. Alice desea realizar este trabajo en su propia rama.

#### Configurar
- Para que podamos asumir el rol de Alice, debe hacer algo de trabajo para configurar un repositorio vacío que todos compartan y, después, agregar algunos archivos.

#### Creación de un repositorio vacío compartido
- Creamos una carpeta llamada Shared.git para que contenga el repositorio vacío.
- Ahora, ejecute el comando (adentro de la carpeta creada)  siguiente para crear un repositorio vacío en el directorio compartido:

```git
git init –-bare
```

- Establezca el nombre de la rama predeterminada del nuevo repositorio. Para realizar este paso, puede cambiar la rama HEAD para que apunte a otra rama; en este caso, la rama main:


```git
git symbolic-ref HEAD refs/heads/main
```
#### Clonación del repositorio compartido para Bob
- En el mismo nivel que el directorio anterior, creamos otra carpeta llamada Bob.
- Adentro, ejecutamos los siguientes comandos:


```git
git clone ../Shared.git .
git config user.name Bob
git config user.email bob@contoso.com
git symbolic-ref HEAD refs/heads/main
```


:::tip Observación
- Como quiere empezar con la rama predeterminada de main, debe cambiar HEAD para que apunte a refs/heads/main en lugar de refs/heads/master, que es el nombre de la rama predeterminada.
:::

#### Incorporación de archivos
- Como paso final de configuración, se agregarán archivos en el sitio web y se insertarán en el repositorio compartido. En el caso de estos comandos, todavía estamos trabajando en el directorio Bob.
- Como si fuera bob , creamos los siguientes archivos/carpetas:
   - index.html
   - Carpeta Assets
   - Archivo site.css en la carpeta Assets
- Luego lo confirmamos:

```git
git add .
git commit -m "Create empty index.html and site.css files"

```

- Ahora agregue HTML al archivo index.html:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset='UTF-8'>
    <title>Our Feline Friends</title>
    <link rel="stylesheet" href="CSS/site.css">
  </head>
  <body>
    <nav><a href="./index.html">home</a></nav>
    <h1>Our Feline Friends</h1>
    <p>Eventually we will put cat pictures here.</p>
    <footer><hr>Copyright (c) 2021 Contoso Cats</footer>
  </body>
</html>

```
- En site.css agregamos lo siguiente:

```css
h1, h2, h3, h4, h5, h6 { font-family: sans-serif; }
body { font-family: serif; background-color: #F0FFF8; }
nav, footer { background-color: #C0D8DF; }

```

- En el directorio Bob, confirmamos de nuevo:


```git
git add .
git commit -m "Add simple HTML and stylesheet"
git push --set-upstream origin main

```
:::tip observación
- Como se va a usar otro nombre de rama predeterminado, debe indicarle a Git que asocie la rama principal a la rama principal del repositorio de origen.
:::

#### Creación de una rama para Alice
- Alice quiere crear una rama puntual denominada add-style para realizar su trabajo. Vamos a asumir el rol de Alice y, después, crearemos la rama y agregaremos código a esta rama.
- Cree la carpeta Alice (en el mismo nivel que la carpeta de Bob y el repositorio vacio).
- En la carpeta, ejecute los siguientes comandos:

```git
git clone ../Shared.git .
git config user.name Alice
git config user.email alice@contoso.com

```

- Puedes ejecutar **git status** para confirmar el estado del repositorio.
- Ejecute el comando **git branch** para crear una rama denominada add-style. Luego, ejecute el comando **git checkout** para cambiar a esa rama (de este modo, la convierte en la rama actual):

```git
git branch add-style
git checkout add-style

```

- En el directorio Alice/Assets (Alice/Recursos), abra site.css. Agregue la siguiente definición de clase CSS al final del archivo:


```css
.cat { max-width: 40%; padding: 5 }
```

- Confirme el cambio:

```git
git commit -a -m "Add style for cat pictures"
```

- En este momento, Alice quiere poner su estilo a disposición de todos los demás, para que cambien a main de nuevo y realicen una incorporación de cambios por si alguna otra persona ha realizado cambios:

```git
git checkout main
git pull
```

- La salida indica que la rama main está actualizada (es decir, main del equipo de Alice coincide con main en el repositorio compartido). Por tanto, Alice combina la rama add-style con la rama main mediante la ejecución del comando **git merge --ff-only** para realizar una combinación de avance rápido. Luego, Alice inserta la main de su repositorio en el compartido:


```git
git merge --ff-only add-style
git push
```
- En este caso, la combinación de avance rápido no era estrictamente necesaria porque la rama main no tenía ningún cambio y Git habría combinado los cambios de todos modos. Sin embargo, usar la marca **--ff-only** es una buena práctica porque se produce un error en una combinación si main ha cambiado.


#### Combinación de la rama de Bob
- Aunque Alice está trabajando en CSS para el sitio web, Bob está trabajando en casa, completamente ajeno al trabajo que está realizando Alice. No hay problema con esta disposición porque ambos usan ramas. Bob decide realizar algunos cambios por su cuenta.
- Vuelva al directorio Bob y ejecute el comando siguiente para crear una rama denominada add-cat. Use la popular opción **checkout -b** para crear la rama y cambiar a ella con un solo comando:

```git
git checkout -b add-cat
```

- Ahora cargue una imagen en la carpeta Assets (busque de gatito para seguir la temática).
- A continuación, abra el archivo index.html y reemplace la línea que dice "Eventually we will put cat pictures here" (al final se incluirán aquí las imágenes de gatos) por la siguiente línea:


```html
 <img src="url-de-la-imagen " />
```

- Ha realizado dos cambios en la rama add-cat de Bob: se ha agregado un archivo y se ha modificado otro. Ejecute **git status** para volver a comprobar los cambios:


```git
git status
```

- Después, ejecute los comandos siguientes para agregar el nuevo archivo del directorio Assets (Recursos) al índice y confirmar todos los cambios:


```git
git add .
git commit -a -m "Add picture of Bob's cat"

```

- Bob ahora realiza la misma acción que antes hizo Alice. Bob vuelve a cambiar a la rama main y ejecuta una incorporación de cambios para ver si ha cambiado algo:

```git
git checkout main
git pull

```

- Compruebe los resultados. Esta vez, el resultado indica que los cambios se han realizado en la rama main en el repositorio compartido (el resultado de las inserciones de Alice). También indica que el cambio (extraído de main en el repositorio compartido) se ha combinado con main en el repositorio de Bob.
- A continuación, Bob combina su rama con la rama main de su repositorio para que la rama main tenga los cambios de Bob y Alice. A continuación, Bob envía los cambios de main al repositorio compartido:


```git
git merge add-cat --no-edit
git push
```

:::tip observación
- Bob no usó la marca **--ff-only** porque sabía que main había cambiado. Una combinación de solo avance rápido habría producido un error.
:::

#### Sincronización de repositorios
- En este momento, Bob tiene un repositorio actualizado, pero Alice no. Alice tiene que ejecutar git pull en el repositorio compartido para asegurarse de que tiene la versión óptima y más reciente del sitio.
- En la carpeta de Alice, ejecutamos el siguiente comando:

```git
git pull
```
- Tómese unos minutos para comprobar que el repositorio de Alice y el repositorio de Bob están sincronizados.


## Resolución de conflictos de combinación
- A veces, independientemente de lo bien que lo planee todo, las cosas salen mal. Imagine que dos desarrolladores están trabajando en el mismo archivo del proyecto al mismo tiempo. El primer desarrollador envía sus cambios a la rama main del repositorio del proyecto sin ningún problema. Cuando el segundo desarrollador intenta enviar los cambios, Git indica que hay un conflicto de combinación.
- El archivo que el segundo desarrollador está intentando modificar ya no está actualizado con los cambios o la versión de archivo más recientes.
- La versión de archivo debe estar actualizada antes de que se puedan combinar los cambios del segundo desarrollador.
- Una de las principales preocupaciones de los desarrolladores que usan el control de versiones es un conflicto de combinación.
- La buena noticia es que Git ofrece soluciones para tratar los conflictos de combinación.


#### Creación de ramas para Alice y Bob
- Comencemos por crear una rama para Alice y otra para Bob. Ambos amigos desarrolladores están actualizando los archivos del repositorio del proyecto al mismo tiempo. No son conscientes de los cambios que realiza el otro porque están realizando las actualizaciones en sus ramas locales.
- En el directorio de Alice, cree una rama denominada add-cat para que Alice trabaje:

```git
git checkout -b add-cat
```
- En el directorio de Bob , cree una rama denominada style-cat para que Bob trabaje:

```git
git checkout -b style-cat
```

#### Realización de un cambio como Alice
- Para empezar, suponga que tiene el rol de Alice y realice un cambio en la página principal del sitio web. Reemplace la imagen del gato de Bob por una fotografía de Alice.
- Elimine la foto del gatito anterior y cargue otra.
- Abra el archivo index.html y, cambie la imagen:

```html
 <img src="Assets/url-de-imagen " />
```
- Ahora, ejecute los siguientes comandos de Git para enviar los cambios al repositorio del proyecto. En primer lugar, vamos a realizar la confirmacion. Después, volveremos a la rama main y ejecutaremos **git pull** para asegurarnos de que no haya cambiado nada. Por último, vamos a combinar la rama local add-cat con la rama main y, después, enviaremos los cambios al repositorio:


```git
git add Assets
git commit -a -m "Add picture of Alice's cat"
git checkout main
git pull
git merge --ff-only add-cat
git push
```


- Sin saber lo que está haciendo Alice, Bob observa que el último envío de cambios de Alice ha agregado un estilo CSS denominado cats al archivo site.css. Por tanto, Bob decide aplicar esa clase a la imagen de su gato.
- En el directorio de Bob , modificamos el index.html:


```html
 <link rel="stylesheet" href="Assets/site.css">
 <img class="cat" src="url-imagen " />

```
- Ahora, ejecute los siguientes comandos de Git para sincronizar los cambios en el repositorio del proyecto, como hizo para las actualizaciones en el repositorio de Alice. Confirme el cambio, cambie a la rama main, ejecute git pull y, a continuación, combine el cambio de estilo:


```git
git commit -a -m "Style Bob's cat"
git checkout main
git pull
git merge style-cat
```


- Y ahí está: el temido conflicto de combinación. Dos personas han cambiado la misma línea en el mismo archivo. Git detecta el conflicto y notifica un error de combinación automática. Git no tiene forma de saber el valor del atributo src del elemento &lt;img>.


```git
Auto-merging index.html
CONFLICT (content): Merge conflict in index.html
Automatic merge failed; fix conflicts and then commit the result.
```
#### Resolución del conflicto de combinación
- Bob tiene pocas opciones en este momento. Bob puede realizar una de estas acciones:
   -	Ejecute el comando **git merge --abort** para restaurar la rama main a su estado anterior a la combinación intentada. Ejecute el comando **git pull** para obtener los cambios de Alice. A continuación, cree una rama, realice los cambios y combine su rama con la rama main. Por último, envían los cambios.
   -	Ejecute el comando **git reset --hard** para volver a la ubicación en la que estaban antes de que iniciaran la combinación.
   -	Resuelva el conflicto manualmente mediante la información que Git inserta en los archivos afectados.
- Los desarrolladores parecen preferir la última opción. Cuando Git detecta un conflicto en las versiones del contenido, inserta ambas versiones del contenido en el archivo. Git usa un formato especial para ayudarle a identificar y resolver el conflicto: corchetes angulares de apertura <<<<<<<, guiones dobles (signos igual) ======= y corchetes angulares de cierre >>>>>>>. El contenido situado encima de la línea de guiones ======= muestra los cambios en la rama (la última versión de la rama). El contenido que se encuentra debajo de la línea de separación muestra la versión del contenido de la rama (los cambios de la versión anterior) en la que intenta realizar la combinación.
- Git debe mostrar los cambios entrantes encima del separador y el contenido existente en la rama main debajo de la línea.
-  Git siempre muestra el archivo completo. Git usa corchetes angulares de apertura y cierre para rodear las secciones de contenido que tienen un conflicto. Git usa una línea de signos igual para separar dos versiones de contenido que entran en conflicto.
- Vamos a resolver el conflicto de combinación mediante la edición del archivo index.html. Dado que este conflicto de combinación se corrige rápidamente, realizará el cambio directamente en la rama main, aunque todavía esté en el directorio Bob.
- Abra el archivo index.html y, a continuación, elimine las líneas de formato especiales. No quite ninguna otra instrucción:
```html
  <body>
    <nav><a href="./index.html">home</a></nav>
    <h1>Our Feline Friends</h1>
    <img src="Assets/bobcat2-317x240.jpg" />
    <img class="cat" src="Assets/bombay-cat-180x240.jpg" />
    <footer><hr>Copyright (c) 2021 Contoso Cats</footer>
  </body>

```

- El archivo index.html ahora tiene dos elementos &lt;img>: uno para la imagen del gato de Bob y otro para la del gato de Alice.

:::tip
- Algunos editores de texto como visual studio code incluyen la integración de Git y ofrecen ayuda cuando ven texto que indica un conflicto de combinación. 
- En visual studio code, Si selecciona Aceptar ambos cambios, el editor quita las líneas alrededor de los elementos &lt;img> y los dos elementos permanecen intactos.
:::

- Ejecute los comandos siguientes para confirmar el cambio:


```git
git add index.html
git commit -a -m "Style Bob's cat"

```

- El comando **git add** indica a Git que se ha resuelto el conflicto en el archivo index.html.
- Envíe los cambios a la rama main en el repositorio remoto con
**git push**.
- Ahora, sincronice los cambios con el repositorio de Alice:
```git
git pull
```
- Por último, abra el archivo index.html de Alice y confirme que su versión también tiene dos etiquetas &lt;img> con imágenes de gatos.