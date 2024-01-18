---
sidebar_position: 4
---
# Comandos de Git
## Git init
- Inicializa un repositorio.
- Ejecutar este comando crea el subdirectorio. git en el  directorio en el que se ejecuta (el  directorio del proyecto); no se agregan ni cambian archivos que no sean en el subdirectorio .git
- Dentro del directorio .git se crean todos los metadatos que necesita Git (branch de default, objetos, referencias, archivos template…).
- Cuando ejecutas git init, Git crea una estructura de directorios y archivos en la ubicación actual para comenzar a rastrear los cambios en el proyecto.
- La mayoría de los comandos de Git están disponibles solo cuando se ejecutan dentro de un repositorio inicializado.
- Es importante mencionar que git init se usa generalmente solo una vez al principio del proyecto, cuando se desea iniciar el seguimiento de versiones con Git. Si ya existe un repositorio Git (por ejemplo, si clonaste uno existente con git clone), no necesitas usar git init.
- Obviamente, es posible inicializar un  directorio diferente al actual indicando la ruta:
```git
git init /path/to/project/directory
```
- Como alternativa, puedes crear un repositorio dentro de un nuevo directorio especificando el nombre del proyecto:

```git
git init [nombre del proyecto]
```

## Git add
- Añade archivos al índice (almacenamiento provisional).
- El indice es una lista de archivos que se van a añadir en la próxima confirmación (commit).
- Le dice a Git que desea incluir las actualizaciones de un archivo en particular en la próxima confirmación. Sin embargo, git add no afecta al repositorio de ninguna manera significativa.
- El "índice" contiene una instantánea del contenido del árbol de trabajo, y es esta instantánea la que se toma como contenido de la siguiente confirmación. Por lo tanto, después de realizar cambios en el árbol de trabajo y antes de ejecutar el comando de confirmación, debe utilizar el **comando add** para agregar archivos nuevos o modificados al índice.
- Este comando se puede realizar varias veces antes de una confirmación. 
- El comando **git status** se puede utilizar para obtener un resumen de qué archivos tienen cambios .
- El  comando **git add** no agregará archivos ignorados de forma predeterminada. Si algún archivo ignorado se especificó explícitamente en la línea de comando, git add fallará.
- [Git add](https://git-scm.com/docs/git-add)
## Git commit
- Crea un registro de los "cambios especificados en el índice" en el repositorio.
- Realiza una instantánea con los archivos que se encuentran en el índice.
- El comando **git commit** guardará todos los cambios que están registrados en la zona de almacenamiento provisional (staging área que en español seria zona de montaje o área de preparación), junto con una breve descripción del usuario, en el repositorio local.
- Las instantáneas confirmadas pueden considerarse como versiones "seguras" de un proyecto: Git no las cambiará nunca a no ser que se lo pidas expresamente.
- Puedes pensar en un commit como una captura de tu proyecto, donde se crea una nueva versión de ese proyecto en el repositorio actual.
- Crea una nueva confirmación que contenga el contenido del índice y un mensaje de confirmación.
- Una confirmación representa una versión específica del árbol de trabajo(proyecto).
- [git commit](https://git-scm.com/docs/git-commit)
## Git push
- El comando **git push** en Git se utiliza para enviar cambios locales a un repositorio remoto.
- De esta manera, los commit locales se ponen a disposición de otros colaboradores del proyecto, quienes pueden recuperarlos a través de una búsqueda e incorporarlos a sus respectivos repositorios locales.
- En el modo estándar, **git push** envia solo los cambios nuevos, ya que Git sabe qué commit ya están presentes en el repositorio remoto.
- Al ejecutar **git push** sin especificar ningúna opcion, solo los nuevos commit se enviarán al repositorio remoto.
- Sin embargo, es posible dar varios argumentos al comando para elegir exactamente qué enviar al repositorio remoto.
- El push de etiquetas a un repositorio remoto debe indicarse explícitamente a través del argumento **--tags**, que envía todas las etiquetas nuevas presentes en el repositorio local al repositorio remoto:
```git
git push –-tags
```
- Con el argumento **--all** se produce el upload de todos los ramas  presentes en el repositorio local hacia el repositorio remoto:
```git
git push --all
```
- Obviamente, es posible indicar, si tienes varios repositorios remotos y varios branch, el branch específico para enviar y el remote al cual enviarlo ejecutando el comando en la forma **git push &lt;remoto> &lt;branch>**.
- Por defecto, Git elige origin como remoto y tu rama actual como la rama a la que subir.
- [git push](https://git-scm.com/docs/git-push)

#### Ejemplo con la opción --set-upstream
- La opción **--set-upstream** en Git se utiliza al momento de empujar una rama local a un repositorio remoto por primera vez.
- Su propósito principal es establecer una relación de seguimiento (tracking) entre la rama local y la rama remota.
- Esta relación de seguimiento permite que Git realice un seguimiento de la relación entre ambas ramas, facilitando operaciones como **git pull** y proporcionando información sobre el estado de la rama local en comparación con la rama remota.
- Cuando utilizas **--set-upstream** al hacer un **git push**, estás configurando la rama local para que haga un seguimiento de la rama remota. Esto significa que en el futuro, cuando realices operaciones como **git pull** o **git status**, Git entenderá automáticamente con qué rama remota debe sincronizarse.
- Por ejemplo, si estás en una rama local llamada mi_rama y quieres empujarla al repositorio remoto llamado origin, puedes usar:

```git
git push --set-upstream origin mi_rama
```
- Después de ejecutar este comando, podrás usar git pull sin argumentos en mi_rama para obtener automáticamente los cambios de la rama remota. La opción **--set-upstream** también configura la rama local para que, al realizar futuros **git push** y **git pull**, sepa automáticamente a qué rama remota y rama local debe referirse.
#### Diferencia con git branch
- Para hacer lo anterior, podemos ejecutar el siguiente comando:
```git
git branch --set-upstream-to origin/main
```
- Este comando se utiliza cuando ya tienes una rama local y deseas establecer la relación de seguimiento con una rama remota (origin/main). Es útil cuando ya has empujado la rama local al repositorio remoto y deseas configurar o cambiar la rama de seguimiento.
- Esto significa que en el futuro, cuando estés en la rama local, puedes usar **git pull** o **git push** sin especificar la rama remota, ya que la relación de seguimiento se ha establecido.
- La rama local no se especifica en el comando. La rama local es implícitamente la rama en la que te encuentras cuando ejecutas el comando.
- Por ejemplo, si estás actualmente en la rama main y deseas configurarla para hacer un seguimiento de la rama remota origin/main, puedes ejecutar:
```git
git branch --set-upstream-to origin/main
```
- Este comando establece la relación de seguimiento para la rama local actual (main) hacia la rama remota especificada (origin/main). En este contexto, no necesitas especificar explícitamente el nombre de la rama local porque el comando se ejecuta desde esa rama.
- En resumen, ambos comandos se utilizan para establecer relaciones de seguimiento entre ramas locales y remotas, pero se aplican en contextos ligeramente diferentes: uno al realizar un git push inicial y el otro al configurar o cambiar la rama de seguimiento después de haber enviado la rama al repositorio remoto.

## Git fetch y pull
- Git pull y fetch son dos comandos que regularmente son usados por los usuarios de Git.
- Por el bien del contexto, vale la pena recordar que probablemente trabajemos en un repositorio clon. ¿Qué es un clon? Es simplemente un duplicado de otro repositorio. Es básicamente el tener tu propia copia del código fuente de otra persona.
- Con eso, dicho, para mantener tu clon actualizado con cualquier cambio que se haya aplicado al original, necesitaras traerlos a tu clon.
- Ahí es donde fetch y pull  entran.
- **git fetch** es el comando que dice a su local git que recupere la información de metadatos más reciente del original (pero no realiza ninguna transferencia de archivo. Es más como simplemente verificar si hay algún cambio disponible).
- **git pull** por otro lado, hace eso y trae una copia de esos cambios al repositorio local.
- Tanto pull como fetch se utilizan para mantener el repositorio actualizado con los cambios que haya habido. No siempre, pero en muchos casos hay más de una persona trabajando en un repositorio, por lo que cuando una persona hace cambios en un repositorio remoto con un **git push**, nuestro repositorio local estará desactualizado y tendremos que traernos los cambios que se hayan hecho.
- Veamos un ejemplo de diferencias entre git fetch y git pull en el que entran en juego 3 partes:
   - Repositorio remoto: sería el que se almacena en GitHub.
   - Repositorio local: es una copia del repositorio remoto que se almacena en tu ordenador o en un servidor, por ejemplo.
   - Espacio de trabajo: los archivos con los que trabajas directamente en Visual Studio Code, PyCharm o con cualquier editor de código.
![Diferencias](https://geekytheory.com/content/images/size/w1000/2021/11/git-fetch-vs-git-pull-diferencias.png)

:::tip Observación
- **git fetch** es el comando que hace que tu repositorio Git local se actualice con la última información que hay en el repositorio remoto, pero no hace ninguna transferencia de archivos a tu espacio de trabajo local (el código que ves en tu editor por ejemplo). Podría decirse que sirve para comprobar si hay algún cambio y traerlo a tu repositorio local.
- **git pull** es el comando que comprueba si hay cambios en el repositorio remoto y, en caso de que los haya, se trae esos archivos a tu repositorio local y actualiza tu espacio de trabajo (tu IDE, tus archivos).
- Simplificando mucho la explicación, git pull hace un git fetch seguido de un git merge.


:::


#### Fetch
- El propósito de **git fetch** es descargar commit, ramas y etiquetas desde un repositorio remoto al repositorio local. Los nuevos contenidos recuperados a través de **git fetch** deberían aplicarse explícitamente al árbol de trabajo(proyecto), lo que hace que la ejecución de este comando sea una operación segura para recuperar nuevos commit, sin tener que aplicarlos necesariamente a su trabajo en curso.
- Supongamos que ayer clonamos un repositorio remoto que solo tenía la rama principal y esa rama contenía tres commit. Por lo tanto, mi copia local sabe que está "conectada" al repositorio remoto indicado como origen y mi árbol de trabajo (proyecto) ha extraído el último commit de la única rama presente, conectando la rama local principal con la rama correspondiente con el mismo nombre en origen.
- Y Otro colaborados ha agregado algunos commit en main y ha creado un nuevo branch.
- Entonces ejecutamos los siguientes comandos:

```git
git branch -vv
git fetch
git status
On branch main
Your branch is behind 'origin/main' by 2 commits, and can be fast-forwarded.
(use "git pull" to update your local branch)
```
- Los nuevos commit y la nueva rama ahora también están disponibles en el repositorio local, pero no se han aplicado. Esto se debe a que, aunque todos los commit, tanto locales como remotas, ahora están presentes en el repositorio local, Git mantiene los commit de los branch locales separados de los branch remotos.
![Historial de commit fetch](https://lh6.googleusercontent.com/l9_1YJWaDKk_XEFc_TDq1cbsJXzwYbUpvjE39YhusFh5wETFA1UQOkwqTnLOZGqmqajOn532u8FvZBgTI5L7sVpLmsYwLtl6P51QCVDFRG3UMKBbNkhZIpV4I2zrBonLWlaZRVQS7dGbE8hiEpFXgDz1wK4TNFhz)
- Será posible ver cuales commit han sido añadidos a origin/master a través **git log** y aplicar nuevos commit al propio branch(rama) local a través de **git merge**:
```git
git log --oneline main..origin/main
git merge origin/main

```
:::tip
- **git log**: Muestra el historial de commits.
- **--oneline**: Muestra cada commit en una sola línea, lo que facilita la lectura del historial.
- **main..origin/main**: Esto es una expresión de rango. En este contexto, significa "todos los commits que están en la rama origin/main pero no en la rama local main".
- Entonces, el comando **git log --oneline main..origin/main** te dará una lista de los commits en la rama remota origin/main que aún no han sido incorporados a la rama local main. Esto puede ser útil para revisar los cambios que han ocurrido en el repositorio remoto antes de fusionarlos en tu rama local.
:::
![Historial de commit fetch 2](https://lh5.googleusercontent.com/P0o4_df4lJtQGkHFdGMV8U6IYmIrLeZylG6ZeeeEoi9N_gGFJDBAn5Nt6GNmilW82jTh_W37XXccOJS0y22i8OVu_nZ6lWQ9TG3bDWIChlAHO03UAfNR8Wz60r5oKpHN_21VmYELACSV8codYyEGz-qIHn--baJo)

#### Pull
- El comando **git pull** en Git es, en realidad, una combinación de otros dos comandos. 
- **git pull** recupera (**git fetch**) las nuevas confirmaciones y las fusiona (**git merge**) en tu rama local.
- Por defecto hace dos cosas:
  1.	Actualiza la rama de trabajo actual.
  2.	Actualiza las referencias de rama remota para todas las demás ramas.
- **git pull** es un comando combinado, que equivale a **git fetch** + **git merge**.
- **Git fetch**: Por sí mismo, **git fetch** actualiza todas las referencias de rama remota en tu repositorio local. En realidad, no se reflejan cambios en ninguna de las ramas de trabajo locales.
- **Git merge**: Sin ningún argumento, **git merge** fusionará la referencia de rama remota con la rama de trabajo local.
- **Git pull**:  **git fetch** actualiza las referencias de ramas remotas. **git merge** actualiza la rama actual con la referencia de rama remota correspondiente. Utilizando **git pull**, obtienes ambas partes. Pero, esto significa que si te mueves a la rama feature y ejecutas **git pull**, cuando te muevas a master, cualquier nueva actualización no estará incluida. Cuando te muevas a otra rama que pudiera tener nuevos cambios, siempre es buena idea ejecutar  **git pull**.
- En la primera fase de la operación, **git pull** realizará una búsqueda de git limitada solo a la rama en la que estamos ubicado. Una vez que se haya descargado el contenido, **git pull** ingresará a un flujo de reconciliación de commit que puede seguir dos métodos con efectos muy diferentes.
- Entendámoslo mejor con un ejemplo:
- Supongamos que hemos clonado un  repositorio remoto cuando el último commit en su rama  main era el indicado como “B”. Hemos hecho modificaciones y hemos guardado en local los commit “C”, “D” y “E”. Mientras tanto, alguien más ha creado y enviado al repositorio remoto otros commit, “F”, “G” y “H”
![Historial de confirmaciones pull]( https://lh6.googleusercontent.com/20C6f6AbdTa9mzogrLIQxiioQF3GGX54-esT4zatd4wZIvF30Q6Gzi0waxauDsaZBuMbE7GCubFSyhvplC0r5avnbeDngscmq56La1K8ssEV2hezfytevLjFIXCLU0G2N8D4Mi4r-wWqAFdiHwCGscP1kyiRnw9G)
- En esta situación, teniendo en cuenta que el repositorio remoto es el que alberga la historia "oficial" del proyecto, tendremos que recuperar los nuevos commits remotos e integrarlos con los locales. No obstante, también tendremos que indicar la estrategia preferida con la que hacerlo.
- 
Git, de hecho, ofrece dos formas distintas para tratar con ramas divergentes, con rebase o con fusión.


:::tip
- En versiones recientes de Git, **git pull** en ramas divergentes falla a menos que especifique la estrategia deseada. Puede hacer esto a través de argumentos(opciones) de comando, pero también se puede especificar la estrategia predeterminada a través de git config.
:::

#### Pull con rebase
![Pull Con rebase](https://lh4.googleusercontent.com/cW2ZEYgjG55kqwF80i4xZEgjekAvMGX1P7d7sUkJK3-3DOlIZKTN-bI6K28PAf-LsDqjGWtMQRLyhpx-dBeWoT4RybCLI6mInM14mblZq8E_eY96Jm43MGvQxTD81LMl7d_vQjH-ib3bKXVSftz6HlMcQkDQ4t35)
- El pull con rebase es el método que, en cierto sentido, respeta el contenido del repositorio remoto como "oficial" y considera los commits en el repositorio local como commits a aplicar sobre el historial actualizado del repositorio.
- Ejecutando **git pull --rebase** sucede lo siguiente:
   -	Se reservan(quitan) los commit locales (C-D-E) añadidos  desde el punto de partida cómun(el ultimo commit que tienen en comun las dos ramas).
   -	Se ejecuta el fetch que recupera los nuevos commit desde el branch main del repositorio remoto origin.
   -	Los nuevos commit remotos  se aplican a la “copia” local de origin/main y se actualiza el branch(rama) local main y  el árbol de trabajo.
   -	Los commit locales C-D-E se “reaplican”, creando entonces nuevos commit C’-D’-E’.
- Cuando se utiliza **git pull --rebase**, en lugar de fusionar los cambios remotos con la rama actual, Git reorganiza o reaplica los cambios locales encima de los cambios remotos. Esto significa que los commits locales se "rebasan" sobre los commits remotos.
- Esto reorganiza tu historial de commits local para que parezca que tus cambios locales se hicieron después de los cambios remotos, aunque en realidad, se están aplicando de nuevo.
#### Pull con merge
![Pull Con merge](https://lh6.googleusercontent.com/ovZFopxpMhPDZdYeHmIgeLTff7SQ4t3weJLX20h895us7z58Nc3pbro_4no0KoM66VA5ZDsCcSFax6ZUaXd_74fqYoOAvja1rnPmMPyPlvcauw-zVqRtxcszg1GnvSgM8gKXt4rOtWJpSywGOTSpkuam0ulqQCns)
- El otro método es el de pull with merge que, en la situación descrita, da "precedencia" al repositorio local sobre el remoto, o al menos en la situación descrita podría crear una historia aparentemente inconsistente.
- Al ejecutar **git pull --no-rebase** de hecho, ocurre lo siguiente:
   -	Se ejecuta el fetch que recupera los nuevos commit del branch main del  repositorio remoto origin.
   -	Se  consiguen los commit F-G-H recuperados del  repositorio remoto y se crea un commit especial de “merge”  que fusiona los dos cambios en el branch local.
   -	Se pide al usuario guardar tal commit.
- Al final del pull con merge, aunque estamos en una situación que desde el punto de vista de Git ya no es "divergente",  la historia del proyecto es menos comprensible y lineal.
- La opción **--no-rebase** se utiliza para indicarle a Git que no realice automáticamente un rebase después de realizar el fetch. En lugar de eso, se realizará un merge para combinar los cambios locales y remotos.
- En resumen, **git pull --no-rebase** realiza un fetch desde el repositorio remoto y luego fusiona los cambios locales con los cambios remotos mediante un merge, evitando el rebase automático.

## Git checkout
- Sabemos que Git almacena una serie de snapshot de un proyecto llamados commit, cada commit tiene su propio identificador y apunta al commit anterior, para poder reconstruir todo el historial. También sabemos que Git te permite tener una o más "líneas de tiempo", llamadas branch(ramas), que eventualmente se ramifican a partir de una commit común.
- El comando **git checkout** en Git permite decidir qué extraer en el árbol de trabajo local, ya sea un branch, una etiqueta u otra referencia válida, como un commit, por ejemplo. De esta forma, es posible recuperar un snapshot específico del proyecto en el árbol de trabajo local, "retrocediendo en el tiempo" hasta el momento en que se guardó esa snapshot.
- En el momento en el que se efectúa el **git checkout** de un  commit específico o tag, Git muestra un aviso que al principio podría asustar.
- Dado que HEAD apunta directamente a un commit (el que especificamos con el comando checkout), Git advierte que el árbol de trabajo local está en un estado detached. Por lo tanto, cualquier commit posterior no se agregará al Branch actual. El mensaje indica cómo, si es necesario, crear un nuevo branch o volver al branch inicial usando el comando **git switch**.
- Sin embargo, es posible usar el comando **git checkout** nuevamente para volver al branch inicial:
```git
git checkout nombre-rama
```
- Si hubiéramos creado commit mientras estamos en el estado detached Git eliminará  estos commit.
- Resumiendo, podemos decir entonces que **git checkout**:
   -	Sirve principalmente para especificar que queremos “cargar” en nuestro árbol de trabajo local.
   -	Normalmente, se usa para indicar el branch que queremos “cargar” en el  árbol de trabajo local: **git checkout &lt;NOMBRE_BRANCH>**.
   -	Se puede utilizar para indicar un  commit específico, a través de su id o un tag, para “cargar” en el árbol de trabajo local: **git checkout &lt;COMMIT_O_TAG>**.
- El comando **git checkout** cambia entre ramas o restaura los archivos del árbol de trabajo (working tree). Hay varias opciones diferentes para este comando que no se tratarán aquí, pero puedes echar un vistazo a todas ellas en la documentación de Git.


#### Commit específico
- Para realizar un checkout a un commit específico, ejecuta el comando:
```git
git checkout id-del-commit-específico
```
- podemos obtener el identificador (id) del commit específico ejecutando:

```git
git log
```
#### Rama existente
- Para cambiar de rama (esta debe existir), ejecuta el comando:

```git
git checkout NOMBRE-DE-LA-RAMA
```

:::tip
- Por lo general, Git no te dejará realizar checkout a otra rama a menos que tu directorio de trabajo esté limpio, porque perderías cualquier cambio hecho en el  directorio de trabajo al que no le has hecho commit. Tienes tres opciones para manejar tus cambios: 1) tirarlos a la basura, 2) realizarles un commit, 3) realizarles un stash.
:::

#### Rama nueva
- Para crear y cambiar a una rama nueva con un solo comando, puedes usar:

```git
git checkout -b NOMBRE-DE-LA-RAMA-NUEVA
```

:::tip Observación
- Esto te cambiará automáticamente a la rama nueva.

:::
#### Rama nueva o Reiniciar una rama a un punto de partida
- El siguiente comando es similar al de cambiar a una rama nueva, pero utiliza la bandera -B (fíjese en la B mayúscula) y una opcion PUNTO-DE-PARTIDA:
```git
git checkout -B NOMBRE-DE-LA-RAMA PUNTO-DE-PARTIDA
```
:::tip Observación
- Si la rama NOMBRE-DE-LA-RAMA no existe, Git la creará y la iniciará en PUNTO-DE-PARTIDA. Si la rama NOMBRE-DE-LA-RAMA ya existe, entonces Git restablece la rama a PUNTO-DE-PARTIDA. Esto equivale a ejecutar **git branch con -f**.
- PUNTO-DE-PARTIDA : Especifica el punto de partida para la nueva rama. Puede ser un commit, una rama existente o un nombre de etiqueta. La nueva rama se creará a partir de este punto.
:::
#### Forzar un checkout
- Puedes pasar la opción **-f** o **--force** con el comando **git checkout** para forzar a Git a cambiar de rama, incluso si tienes cambios fuera de la zona de montaje (índice). Básicamente, se puede usar para tirar los cambios locales.
- Cuando ejecutes el siguiente comando, Git ignorará las entradas no fusionadas:

```git
git checkout -f NOMBRE-DE-LA-RAMA
# Alternativa
git checkout --force NOMBRE-DE-LA-RAMA

```
#### Deshacer los cambios en tu Directorio de trabajo
- Puedes usar el comando **git checkout** para deshacer los cambios que has hecho en un archivo de tu directorio y trabajo. Esto revertirá el archivo a la versión en HEAD (al ultimo commit):

```git
git checkout -- NOMBRE-DEL-ARCHIVO
```
:::tip Observación
- Entonces, en resumen, revierte los cambios locales no confirmados en el archivo especificado, deshaciendo las modificaciones y volviendo al estado del último commit. Ten en cuenta que este comando descartará los cambios sin posibilidad de recuperación, así que úsalo con precaución. Si has realizado cambios que ya están confirmados, deberías considerar hacer un nuevo commit para revertirlos en lugar de usar este comando.
:::


#### [Documentación.](https://git-scm.com/docs/git-checkout)

## Git rebase y merge
- Los dos se utilizan para lo mismo, para integrar cambios de otra rama a la principal.
#### Ejemplo
1. Creamos una carpeta y la iniciamos con **git init**.
2. Creamos un archivo de texto llamado file.txt y hacemos una confirmación:
```git
git add .
git commit -m “first commit”
git log
```
3. Vamos a crear una nueva rama llamada linea1:
```git
git checkout -b linea1
```
4. Editamos el archivo de texto:
```html
Linea de texo numero 1...
```
5. Hacemos un commit en la rama nueva:

```git
git commit -a -m “añadida la línea 1 del archivo”
git log -p

```
6. Volvemos a la rama master y creamos otra rama llamada linea2:
```git
git checkout master
git checkout -b linea2

```
7. Editamos el archivo de texto:
```html
[Espacio en blanco]
Linea numero 2....
```
8. Hacemos un commit en la rama nueva:
```git
git commit -a -m “añadida la línea 2 del archivo”
git log -p

```
- Como vemos, con el siguiente comando tenemos tres ramas, la master con un archivo de texto vacío y en las otras dos se desarrollaron diferentes “tareas”:

```git
git branch
```
9. Nos volvemos a la rama master y creamos la rama master2:

```git
git checkout master
git checkout -b  master2

```
10. En esta nueva rama insertaremos los cambios con un merge , entonces ejecutamos los siguientes comandos:

```git
git merge linea1
git merge linea2
```
11. Hay un conflicto al ejecutar el segundo comando, así que ejecutamos **git status**.
- Se nos informa que las dos ramas (linea1 y linea2) modificaron el mismo archivo.
12. Solucionamos el conflicto mediante un IDE o borrando las líneas de formato especiales que se generaron para que queden los dos cambios, quedando:

```html
Linea de texo numero 1...
[Espacio en blanco]
Linea numero 2....
```
13. Hacemos un commit:

```git
git add file.txt
git status (nos indica que podemos usar el comando git commit)
git commit 
git log -p
```

- El orden de los commits es:
   - first commit -- añadida la línea 1 del archivo -- añadida la línea 2 del archivo ---  Merge branch 'linea2' into master2.
- A lo ultimo entonces, se crea un commit que tiene la mezcla de los dos.
14. Volvemos a la rama master y creamos la rama master3:

```git
git checkout master
git checkout -b master3

```
15. En esta nueva rama insertaremos los cambios con un rebase, entonces ejecutamos los siguientes comandos:

```git
git rebase linea1
git rebase linea2

```
16. Hay un conflicto al ejecutar el segundo comando, así que ejecutamos **git status**.
- Se nos informa que las dos ramas (linea1 y linea2) modificaron el mismo archivo.
17. Solucionamos el conflicto mediante un IDE o borrando las líneas de formato especiales que se generaron para que queden los dos cambios, quedando:

```html
[Espacio en blanco]
Linea numero 2....
Linea de texo numero 1...

```
18. Hacemos un commit:

```git
git add file.txt
git status (nos indica que  podemos usar el comando git rebase --continue)
git rebase --continue
git log -p
```
- El orden de los commits es:
    - first commit -- añadida la línea 2 del archivo --  añadida la línea 1 del archivo.
- No hay un commit de Merge.


#### Diferencia de los commits:
- Ambos comienzan por first commit.
- El segundo y tercer commit cambian:
   - En el merge , se van añadiendo según cada comando **git merge**.
   - En rebase, el segundo commit es “añadida la línea 2 del archivo” y el tercero es “añadida la línea 1 del archivo”, ósea tiene un orden invertido.
- El cuarto commit solo lo tiene merge.
#### Resumen
- Con Merge no podemos sabemos que cambios se hicieron en el commit Merge , por lo tanto no deja un historial claro de los cambios.
- Con Rebase no tenemos un commit Merge pero se cambia el orden del historial , esto nos permite dejar un historial claro de los cambios.


#### Para seguir explicando rebase
1. Ubicado en la rama que se uso el rebase, hacemos un reset:


```git
git reset –-hard HEAD~2
git log -p

```
:::tip Observación
- Estamos en el commit “first commit”.
:::
2. Ejecutamos lo siguiente:
```git
git rebase linea2
git rebase linea1

```
3. Solucionamos los conflictos de la misma manera. Dejamos los dos cambios.
4. Ejecutamos lo siguiente:

```git
git add file.txt
git rebase --continue
git log -p
```
- Entonces para ejemplificar:

| Rama | Commit |
|- | - |
|  Master |  1–2-3 |
|  Dev1 |  1-2-3-4 |
|  Dev2 |  1-2-3-5 |

:::tip Observación
- Los tres, tienen los primeros tres commits.
- Dev1 tiene el 4 commit y el Dev2 el 5 commit.
:::

- Funcionamiento:
   - Si hacemos un rebase desde master con dev2 (rebase dev2):
        - Como no hay ningún conflicto, el commit 5 lo va a poner al final quedando: 1-2-3-5
   - Si hacemos un rebase desde master con dev1 (rebase dev1) luego del rebase anterior:
        - Como hay conflicto, el ultimo commit (5) lo va a poner en el final y el commit 4 lo va a insertar después del tres, quedando: 1-2-3-4-5
   - Por esto se hace primero los rebase de lo mas nuevo y luego lo más viejo.

#### Rebase
- Cuando tu commit , lo tienes que mezclar con otro commit , se crea un nuevo commit temporal (que luego se elimina).
- Rebase es una de las dos utilidades de Git diseñadas para integrar cambios de una rama a otra. Rebasar es el proceso de combinar o mover una secuencia de confirmaciones sobre una nueva confirmación base. **Git rebase** es el proceso lineal de fusión.
- Una rebase de Git cambia la base de la rama de una confirmación a otra, por lo que parece que han creado su rama a partir de una confirmación diferente. Internamente, Git crea una nueva confirmación y la aplica a la base especificada.
- Aunque la rama parece la misma, está compuesta de confirmaciones completamente nuevas. Cuando realizas una rebase de Git, estás, de hecho, reescribiendo el historial.
- Supongamos que es un desarrollador que está trabajando en una nueva función en una rama dedicada. Luego, otro miembro del equipo de desarrollo actualiza la rama principal con algunas confirmaciones nuevas. La situación se ve así:
![Explicación rebase](https://www.simplilearn.com/ice9/free_resources_article_thumb/Git_Rebase_1.PNG)
- Sin embargo, finalmente el equipo concluye que las nuevas confirmaciones del archivo principal son relevantes para la función en la que está trabajando. Entonces, si desea incorporar las nuevas confirmaciones en su rama, puede realizar una fusión o una rebase. 
- Si realizamos un rebase, movemos toda la rama de funciones(feature), comenzando en la punta de la rama principal para que todas las nuevas confirmaciones sean ahora parte del todo.
- Esta acción reescribe el historial del proyecto realizando nuevas confirmaciones para cada una de las confirmaciones de la rama original. Así es como se ve la nueva sucursal(rama):
![Nueva rama despues del rebase ](https://www.simplilearn.com/ice9/free_resources_article_thumb/Git_Rebase_3.PNG)

#### No rebases la historia pública
- Nunca debes cambiar la base de las confirmaciones una vez que hayan sido enviadas a un repositorio público. La rebase reemplazaría las confirmaciones antiguas por otras nuevas y parecería que esa parte del historial de su proyecto desapareció abruptamente.
#### Conclusión
- Cuando realizas un rebase, Git toma una serie de confirmaciones, las "desenrolla" temporalmente, aplica las confirmaciones de otra rama sobre ellas y luego vuelve a aplicar las confirmaciones desenrolladas. Este proceso puede ayudar a mantener un historial de confirmaciones más lineal y fácil de entender en comparación con las fusiones, que pueden generar una estructura de historial más ramificada.
- Desglosemos esa explicación en pasos más detallados:
   1.	Seleccionar el punto de partida común:
       -	Imagina que tienes dos ramas en tu proyecto, por ejemplo, mi_rama y rama_objetivo. Antes de realizar un rebase, necesitas identificar el punto en el que ambas ramas divergieron. Este punto es comúnmente el último commit  que ambas ramas comparten . El "punto de partida común" se refiere al último commit compartido entre las dos ramas que estás intentando rebasar ósea es el ultimo commit que tienen en común las dos ramas , a partir de ese commit, ambas ramas han evolucionado de manera independiente.
   2.	"Desenrollar" temporalmente las confirmaciones:
       -	A partir de ese punto común, Git toma todas las confirmaciones que se hicieron en tu rama (mi_rama) desde el punto común hasta la punta de la rama. Estas confirmaciones se "desenrollan" temporalmente, es decir, se quitan de su ubicación actual en la rama.
   3.	Aplicar las confirmaciones de otra rama:
       -	Luego, Git aplica las confirmaciones de la otra rama (rama_objetivo) sobre la rama actual. Esto significa que las confirmaciones de mi_rama se están aplicando encima de las confirmaciones de rama_objetivo.
   4.	Resolver conflictos (si es necesario):
       -	Durante este proceso, si hay cambios conflictivos entre las confirmaciones de ambas ramas, Git detendrá el rebase y te pedirá que resuelvas esos conflictos. Esto podría implicar fusionar cambios manuales o elegir qué versión de un cambio conflicto conservar.
   5.	Volver a aplicar las confirmaciones desenrolladas:
      -	Después de resolver cualquier conflicto, Git toma las confirmaciones que se desenrollaron en el paso 2 y las vuelve a aplicar encima de las confirmaciones de la otra rama. Esto crea una nueva serie de confirmaciones que incluye los cambios de ambas ramas, pero de una manera más lineal.
   6.	Historial más lineal:
      -	El resultado final es un historial de confirmaciones más lineal en comparación con una fusión. Las confirmaciones de mi_rama ahora se encuentran después de las confirmaciones de rama_objetivo en lugar de tener una bifurcación adicional. Esto puede hacer que el historial sea más fácil de entender, especialmente en proyectos con múltiples colaboradores.
- Entonces siguiendo el ejemplo de la explicación podemos hacer el siguiente grafico que representan el historial de confirmaciones en dos ramas:

| Nombre Rama  | Historial de Commit | Observación |
| - | - | - |
|  Mi_Rama | A – B -- C  |  Seria la “rama principal” , tiene tres commit. |
|  Rama_Objetivo | B – D -- E  |  La Rama_Objetivo se creó en el commit “B” y a partir de ahí se empezaron a crear nuevos commits independientes a la rama principal. |

- En este caso, el punto de partida es el commit B ya que, a partir de ahí, ambas han evolucionado de manera independiente.
- Si deseas rebasar mi_rama sobre rama_objetivo, Git tomará las confirmaciones desde el commit B (no lo incluye) hasta la punta de mi_rama (la confirmación C , la incluye) y las aplicará después de todas las confirmaciones de rama_objetivo (las nuevas , ósea no incluye el punto de partida).
- Para hacerlo ejecutamos los siguientes comandos:


```git
git checkout mi_rama  (Para confirmar que estamos en la rama correcta)
git pull origin mi_rama (Para asegurarse que tu rama está actualizada)
git log (Para identificar el punto de partida común (identificador) , en este caso es el commit B)
git rebase rama_objetivo (Para iniciar el rebase)

```
- Si hay conflictos, los resolvemos y ejecutamos el siguiente comando:

```git
git rebase --continue
```

- Una vez que se completa el rebase, puedes actualizar la rama remota con tus cambios. Puedes necesitar forzar la actualización si ya has compartido la rama:


```git
git push origin mi_rama –-force
```
:::warning Observación
- Recuerda que la opción **--force** se utiliza aquí porque has reescrito la historia de mi_rama y necesitas forzar la actualización en el repositorio remoto.
- Es importante realizar este tipo de operaciones con precaución, especialmente en ramas compartidas, ya que reescribir el historial puede causar problemas a otros colaboradores que estén trabajando en la misma rama.
:::

- Después del rebase, el historial de confirmaciones podría verse asi:


| Nombre Rama  | Historial de Commit | 
| - | - | 
|  mi_rama | A-B-D-E-C  |  


- Donde C es una nueva confirmación que incluye los cambios de C, pero ahora aplicados sobre la punta de rama_objetivo. Este proceso crea un historial de confirmaciones más lineal, pero recuerda que al hacerlo, estás cambiando la historia de mi_rama, y si compartes esta rama con otros colaboradores, puede causar conflictos si no se hace correctamente. Por lo tanto, es recomendable usar rebase con precaución, especialmente en ramas compartidas.
- [Más información.](https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase)

#### Merge
- Cuando tu commit , lo tienes que mezclar con otro commit , se crea un nuevo commit que es la mezcla de los dos.
- El comando **git merge** permite tomar las líneas(ramas) independientes de desarrollo creadas por **git branch** e integrarlas en una sola rama.
- Ten en cuenta que la rama actual se actualizará para reflejar la fusión, pero la rama de destino no se verá afectada en absoluto. Una vez más, esto significa que **git merge** se suele utilizar junto con **git checkout** para seleccionar la rama actual y **git branch -d** para eliminar la rama de destino obsoleta.
- **git merge** se utiliza para combinar dos ramas. En estos casos, **git merge** toma dos punteros de confirmación, normalmente los extremos de la rama, y encuentra una confirmación base común entre ellos. 
- Una vez que Git encuentra una confirmación base en común, crea una "confirmación de fusión" nueva que combina los cambios de ambas ramas.
- Supongamos que tenemos una rama de función nueva que se basa en la rama main. Ahora, queremos fusionar esa rama de función con la rama main:

![RamaMerge](https://wac-cdn.atlassian.com/dam/jcr:7afd8460-b7bf-4c42-b997-4f5cf24f21e8/01%20Branch-2%20kopiera.png?cdnVersion=1316)


- Al invocar este comando, la rama de función especificada se fusionará con la rama actual, la cual asumiremos que es la main. Git determinará el algoritmo de fusión automáticamente:


![RamaMerge2](https://wac-cdn.atlassian.com/dam/jcr:c6db91c1-1343-4d45-8c93-bdba910b9506/02%20Branch-1%20kopiera.png?cdnVersion=1316)

- Al crear una confirmación de fusión, Git tratará de fusionar automáticamente los historiales independientes. Sin embargo, si encuentra datos que se han cambiado en ambos historiales, no podrá combinarlos de ese modo. En ese caso, se crea un conflicto de control de versiones y Git solicitará la intervención del usuario para poder continuar.

#### Fusión de avance rápido
- Puede que se produzca una fusión con avance rápido cuando hay un proceso lineal desde el extremo de la rama actual hasta la rama de destino. En lugar de fusionar “realmente” las ramas, lo único que tiene que hacer Git para integrar los historiales es mover el extremo de la rama actual al extremo de la rama de destino (es decir, realizar un “avance rápido”). De este modo, combina de manera eficaz los historiales, ya que todas las confirmaciones alcanzables desde la rama de destino están ahora disponibles a través de la rama actual.
-  Por ejemplo, una fusión con avance rápido de una rama de función en una main se vería de la siguiente manera:
![Fusión Rapida merge](https://wac-cdn.atlassian.com/dam/jcr:d90f2536-7951-4e5e-ab79-f45a502fb4c8/03-04%20Fast%20forward%20merge.svg?cdnVersion=1316)

#### Fusión de 3 vías
- Sin embargo, no es posible una fusión con avance rápido si las ramas han divergido. Cuando no hay un proceso lineal hacia la rama de destino, Git no tiene más opción que combinarlas mediante una fusión de 3 vías. 
- Las fusiones de 3 vías utilizan una confirmación específica para unir dos historiales. Esta fusión recibe su nombre del hecho de que Git utiliza tres confirmaciones para generar la confirmación de fusión: los dos extremos de la rama y su predecesor común:

![Fusión de 3 vías merge](https://wac-cdn.atlassian.com/dam/jcr:91aece4a-8fa0-4fc3-bae9-69d51932f104/05-06%20Fast%20forward%20merge.svg?cdnVersion=1316)

- A muchos desarrolladores les gusta utilizar las fusiones con avance rápido (facilitadas a través del comando rebase) para funciones pequeñas o correcciones de errores, mientras que se reservan las fusiones de tres vías para la integración de funciones con una ejecución de mayor duración. En este último caso, la confirmación de fusión resultante sirve como una unión simbólica de las dos ramas.
- La opcion **–no-ff** siempre genera una confirmación de fusión , incluso si se trata de una fusión de avance rápido.
- Si ocurre algún conflicto , el comando git status muestra qué archivos se deben resolver. Los conflictos se marcan con los caracteres: "<<<<<<<, =======, y >>>> >>>".
- Una vez identificadas las secciones conflictivas, puedes entrar y arreglar la fusión a tu gusto. Cuando estés listo para terminar la fusión, lo único que tienes que hacer es ejecutar **git add** en los archivos conflictivos para indicar a Git que se han resuelto. Seguidamente, ejecutas un **git commit** normal para generar la confirmación de fusión. El proceso es exactamente el mismo que el de la confirmación de una instantánea normal, lo que significa que es fácil para los desarrolladores habituales gestionar sus propias fusiones.
- Ten en cuenta que los conflictos de fusión solo se producirán en el caso de una fusión de 3 vías. Los cambios conflictivos en una fusión de avance rápido no son posibles.

## Git switch y restore
- ***Git checkout*** es uno de esos comandos de git que dependiendo del contexto en el que se utilice realiza una u otra cosa. Un todo terreno, que en muchos casos quizás pueda confundir a usuarios con pocos conocimientos sobre git.
- Estos dos comandos realizan funciones de **git checkout** pero, el nombre de este comando quizás lo hace un poco más intuitivo.

#### Git restore
- El **git restore** es una nueva opción cuando estamos trabajando y necesitamos restaurar algún archivo o el proyecto por completo.
- Con **git checkout** podemos hacer lo mismo, pero **git restore** es especificamente para trabajar con esta parte de restauración de archivos o proyectos.
- Este comando restaura (como induce a pensar el nombre del comando) el estado de un archivo a una revisión específica de git. De manera predeterminada lo hace al estado de la rama actual.
- También se pueden restaurar a un commit diferente pasándole el commit con la opción –source

```git
git restore archivo1.txt --source f544960
```
:::tip Observación
- Con esto al archivo1.txt lo restauraremos al el estado que tenía en el commit f544960
:::


- [Más información](https://git-scm.com/docs/git-restore)

#### Git switch
- El **git switch** viene como una alternativa cuando estamos trabajando con ramas. Con **git checkout** podemos crear nuevas  ramas y también alternar entre ellas, y con git switch podemos hacer lo mismo.
- Sirve para cambiar entre ramas y poder crearlas si no existen.
- En nuestro proyecto necesitamos crear una nueva rama con el nombre nueva-branch en nuestro proyecto, podríamos usar el siguiente comando:
```git
git switch -c nueva-branch
```
:::tip Observación
- Con la opcion **-c** (crear) git creará la nueva rama y cambiará a ella. 

:::
- Para cambiar a la nueva rama:

```git
git switch nuevo-branch
```
- El switch también nos proporciona un atajo muy interesante cuando necesitamos seleccionar la rama master, simplemente podemos usar un signo menos (-) en lugar del nombre de la rama:

```git
git switch -
```

:::tip Observación
- Este comando cambia a la rama anterior seleccionada, si solo hemos seleccionado dos, podremos cambiar de una a otra con este comando, sin necesidad de escribir el nombre.

:::

:::tip
- Si no le pasamos la opción **-c** switch cambiará a la rama especificada si está creada. 

:::

- [Más información.](https://git-scm.com/docs/git-switch)
## git reflog
- Realiza un seguimiento de todo lo que has hecho localmente:
    -	Realiza un seguimiento del historial de confirmaciones.
    -	Si has hecho un  hard reset.
    -	Realiza un seguimiento de **git commit --amend** también.
    -	etc.
- El reflog es estrictamente local y no forma parte del repositorio.
- Git utiliza la herramienta **git reflog** para realizar un seguimiento detallado de los cambios realizados en las referencias de ramas, incluyendo cambios en el puntero HEAD, que indica la posición actual en el historial de confirmaciones. Le permite volver a cualquier confirmación, incluso si ninguna rama o etiqueta hace referencia a ella. Tras la reescritura de la historia, el reflog contiene información sobre el estado anterior de las ramas y permite volver a ese estado si es necesario. 
- Desglosemos la afirmación:
   - Seguimiento de cambios en referencias de ramas: Cuando realizas operaciones como confirmaciones, fusiones, cambios de rama, entre otras, Git actualiza sus referencias internas para reflejar estos cambios. **git reflog** proporciona un historial detallado de estos cambios en las referencias del repositorio, mostrando información como las marcas de tiempo y descripciones breves de cada cambio.
   - Volver a cualquier confirmación: El reflog almacena información sobre cada cambio realizado en el repositorio, incluso si ninguna rama o etiqueta hace referencia directa a esa confirmación. Esto significa que puedes usar **git reflog** para encontrar el hash de confirmación específico al que deseas volver y restaurar tu repositorio a ese estado anterior.
   - Reescritura de la historia: Algunas operaciones en Git, como rebase o reset, pueden reescribir la historia del repositorio al cambiar las confirmaciones existentes. Después de realizar estas operaciones, la información original aún está disponible en el reflog. Esto es útil en situaciones donde necesitas recuperar información que fue reescrita.
   - Reflog después de reescritura de la historia: Después de la reescritura de la historia, el reflog se convierte en una herramienta valiosa. Contiene información sobre el estado anterior de las ramas y otras referencias, lo que te permite volver a ese estado si es necesario.
   - En resumen, **git reflog** es una herramienta poderosa para rastrear cambios, especialmente después de operaciones que puedan reescribir la historia. Esto proporciona una capa adicional de seguridad al permitirte recuperar estados anteriores del repositorio, incluso cuando las referencias normales ya no apuntan a esos estados.

#### Ejemplo
- Este comando  te mostrará una lista de los cambios en las referencias locales y te permitirá identificar puntos de control antiguos a los que podrías querer volver:
```git
git reflog
```
- El comando **git reflog** tiene varias utilidades importantes en el contexto de Git. Aquí hay algunas de las principales:
    1.	Recuperación de estados anteriores:
          - Permite volver a cualquier estado anterior del repositorio, incluso después de operaciones que reescriben la historia como rebase, reset, o amend.
          - Puedes usar **git reflog** para encontrar el hash de confirmación al que deseas volver y luego crear una nueva rama o hacer un checkout directo a ese estado.
    2.	Identificación de cambios recientes:
          - Proporciona una lista detallada de los cambios recientes en las referencias del repositorio, incluyendo movimientos de ramas, cambios en HEAD y otras operaciones importantes.
          - Facilita la identificación de cuándo y cómo se realizaron ciertos cambios en el repositorio.
    3.	Recuperación después de accidentes:
          - En caso de accidentes o errores, **git reflog** puede ser útil para identificar y recuperar estados anteriores sin depender completamente de las ramas o etiquetas.
    4.	Seguimiento de operaciones complejas:
          - Ayuda a realizar un seguimiento de operaciones más complejas y menos comunes que reescriben la historia del repositorio. Esto incluye acciones como cambios forzados, rebase interactivo, y otras operaciones que pueden alterar la historia de forma significativa.
    5.	Depuración y diagnóstico:
          - Puede ser utilizado como una herramienta de diagnóstico para entender mejor cómo ha evolucionado la historia del proyecto.
          - Facilita la identificación de problemas y la depuración al proporcionar un registro detallado de las operaciones realizadas.
    6.	Exploración del historial:
          - Brinda una visión más detallada y granular del historial del repositorio en comparación con otros comandos de visualización de historial como **git log**.
    
#### Git reflog vs git log
- **git reflog** y **git log** son comandos de Git que ofrecen información sobre el historial del repositorio, pero tienen propósitos y resultados diferentes. Aquí están las principales diferencias entre ellos:
   1.	Enfoque en Historia Local vs. Historia Remota:
       -	**git log** se utiliza para ver el historial de confirmaciones del repositorio. Proporciona una vista más completa de la historia, mostrando todas las confirmaciones en todas las ramas.
       -	**git reflog** se centra en el historial local de las referencias, incluyendo movimientos de ramas, cambios en HEAD y otras operaciones. Está más orientado a cambios locales y acciones específicas en lugar de proporcionar una vista global de la historia del repositorio.
   2.	Visión de la Historia Completa vs. Detalles Locales:
       -	**git log** muestra una vista completa y detallada del historial de confirmaciones con información como los autores, fechas y mensajes de confirmación. Es útil para comprender la evolución general del proyecto.
       -	**git reflog** muestra detalles específicos sobre los cambios en las referencias locales, como las transiciones de ramas y cambios en HEAD. Es más útil para entender cambios locales recientes y para la recuperación después de operaciones que reescriben la historia.
   3.	Reversión y Recuperación:
       -	**git log** es principalmente una herramienta de visualización y no proporciona una forma directa de revertir o recuperar cambios.
       -	**git reflog** es más útil para revertir o recuperar estados anteriores del repositorio, especialmente después de operaciones que reescriben la historia, ya que almacena información detallada sobre los cambios en las referencias locales.
   4.	Acceso a Confirmaciones Eliminadas:
       -	**git log** muestra solo las confirmaciones a las que apuntan las ramas y etiquetas actuales, y puede omitir confirmaciones eliminadas o no referenciadas directamente.
       -	**git reflog** conserva información sobre todas las confirmaciones, incluso aquellas que no están referenciadas por ninguna rama o etiqueta, lo que permite acceder a estados anteriores incluso después de cambios significativos.
- En resumen, mientras que **git log** es una herramienta de visualización integral para explorar la historia completa del repositorio, **git reflog** se centra en los cambios locales en las referencias y proporciona una forma de revertir o recuperar estados específicos, especialmente después de operaciones que reescriben la historia. Ambos son útiles en diferentes contextos y para diferentes propósitos.




## Git reset
- Es el comando para viajar en el tiempo (commits).
- Podés perder los commits según al tiempo al que vayas.
- Este comando sirve cuando no has subido tu commit a Github o a otro repositorio remoto.
#### Estado de un proyecto
- Un proyecto Git tiene las siguientes tres secciones principales:
   1.	Directorio Git
   2.	Directorio de trabajo (o árbol de trabajo)
   3.	Zona de "staging"
- El directorio Git (ubicado en RUTA-DE-TU-PROYECTO/.git/) es donde Git almacena todo lo que necesita para hacer un seguimiento preciso del proyecto. Esto incluye metadatos y una base de datos de objetos que incluye versiones comprimidas de los archivos del proyecto.
- El directorio de trabajo es donde un usuario realiza cambios locales en un proyecto. El directorio de trabajo descarga los archivos del proyecto de la base de datos de objetos del directorio Git y los coloca en la máquina local del usuario.
- La zona de "staging" es un archivo (también llamado "index", "stage" o "cache") que almacena información sobre lo que irá en tu próximo commit. Un commit es cuando le dices a Git que guarde estos cambios staged. Git toma una instantánea de los archivos tal y como están y almacena permanentemente esa instantánea en el directorio Git.

:::tip
- Directorio también se conoce como repositorio o en forma abreviada repo. El repo en la máquina local del usuario se llama "Repo local" mientras que el repo en el servidor git se llama "Repo remoto".
:::


- Con tres secciones, hay tres estados principales, en los que puede estar un archivo en un momento dado: modificado, commited, o staged. Tú modificas un archivo cada vez que se hacen cambios en el directorio de trabajo. Luego es staged cuando lo mueves al zona de "staging". Finalmente, es committed después de un commit.
- El comando **git reset** te permite RESTABLECER tu estado actual a un estado específico. Puedes restablecer el estado de archivos específicos, así como el de toda una rama. Esto es útil si aún no has subido tu commit a GitHub o a otro repositorio remoto.
- El comando **git reset** es una herramienta compleja y versátil para deshacer cambios. Se invoca principalmente de tres formas distintas, que se corresponden con los argumentos de líneas de comandos --soft, --mixed y --hard. Cada uno de los tres argumentos se corresponde con los tres mecanismos de gestión de estados internos de Git: el árbol de confirmaciones (HEAD), el índice y el directorio de trabajo.
#### Git reset y los tres árboles de git
- Para entender correctamente cómo utilizar **git reset**, primero tenemos que entender los sistemas de gestión de estados internos de Git. A veces, a estos mecanismos se les llama los "tres árboles" de Git.
- No son estrictamente estructuras de datos tradicionales en forma de árbol. Sin embargo, son estructuras de datos de nodos y basadas en punteros que Git utiliza para monitorizar un cronograma de ediciones.
- Para empezar, crearemos un nuevo repositorio con los siguientes comandos:
  
```git
mkdir git-reset
cd git-reset
git init
touch reset_lifecycle_file
git add reset_lifecycle_file
git commit -m "initial commit"

```
:::tip Observación
- El código de ejemplo anterior crea un nuevo repositorio de Git con un único archivo vacío: reset_lifecycle_file. En este punto, el repositorio de ejemplo tiene una única confirmación.
:::
#### Directorio de trabajo
- El primer árbol que examinaremos es "el directorio de trabajo". Este árbol está sincronizado con el sistema de archivos local y representa los cambios inmediatos que se realizan en el contenido de los archivos y los directorios.
- Ejecutamos los siguientes comandos:

```git
echo 'hello git reset' > reset_lifecycle_file
 git status 

```
:::tip Observación
- En nuestro repositorio de ejemplo, modificamos y añadimos contenido a reset_lifecycle_file. Al invocar git status, se muestra que Git está al corriente de los cambios en el archivo. En ese momento estos cambios forman parte del primer árbol: "el directorio de trabajo". **git status** puede utilizarse para mostrar los cambios en el directorio de trabajo. Se mostrarán en rojo con el prefijo "modified".
:::

#### Indice del entorno de ensayo
- El siguiente es el árbol del "índice del entorno de ensayo". Este árbol monitoriza los cambios en el directorio de trabajo, de los archivos que se han agregado con **git add**, para que se almacenen en la siguiente confirmación.
- Este árbol es un complejo mecanismo de almacenamiento en caché interno. Por lo general, Git intenta ocultar al usuario los pormenores de la implementación del índice del entorno de ensayo.
- Para ver con exactitud el estado del índice del entorno de ensayo, debemos utilizar un comando de Git menos conocido: **git ls-files**. El comando **git ls-files** es, básicamente, una utilidad de depuración que sirve para inspeccionar el estado del árbol del índice del entorno de ensayo:
```git
git ls-files -s
# Nos aparece algo asi:
100644 e69de29bb2d1d6434b8b29ae775ad8c2e48c5391 0       reset_lifecycle_file
```
:::tip Observación
- Aquí hemos ejecutado **git ls-files** con la opción **-s** o **--stage**. Sin la opción **-s**, el resultado de **git ls-files** es simplemente una lista de nombres de archivos y rutas que forman parte del índice en ese momento. 
- La opción **-s** muestra metadatos adicionales de los archivos del índice del entorno de ensayo. Estos metadatos son los bits de modo, el nombre de objeto y el número de entorno del contenido preparado. A nosotros nos interesa el nombre de objeto, el segundo valor (e69de29bb2d1d6434b8b29ae775ad8c2e48c5391). Se trata de un hash SHA-1 de objeto de Git estándar. Es un hash del contenido de los archivos. El historial de confirmaciones almacena sus propios SHA de objeto para identificar los punteros de confirmaciones y de referencias, y el índice del entorno de ensayo tiene sus propios SHA de objeto para monitorizar versiones de archivos en el índice.
:::
- A continuación, pasaremos el archivo reset_lifecycle_file modificado al índice del entorno de ensayo:

```git
git add reset_lifecycle_file 
git status 
```
:::tip Observación
- Aquí hemos invocado **git add reset_lifecycle_file** que añade el archivo al índice del entorno de ensayo. Al invocar **git status**, ahora aparece reset_lifecycle_file en verde debajo de "Changes to be committed". Conviene resaltar que **git status** no es una representación verdadera del índice del entorno de ensayo. El resultado del comando **git status** muestra los cambios entre el historial de confirmaciones y el índice del entorno de ensayo.
:::
- Llegados a este punto, vamos a examinar el contenido del índice del entorno de ensayo:

```git
git ls-files -s
# Nos mostraria algo asi:
100644 5b59584dd332ace68d63fd49c9bc59371ff9a86a 0       reset_lifecycle_file

```
:::tip Observación
- Podemos ver que el SHA de objeto de reset_lifecycle_file se ha actualizado.
:::

#### Historial de confirmaciones
- El último árbol es el historial de confirmaciones. El comando **git commit** añade cambios a una instantánea permanente que reside en el historial de confirmaciones. Esta instantánea también incluye el estado que tenía el índice del entorno de ensayo en el momento de efectuar la confirmación:

```git
Git commit -m “update content of reset_lifecycle_file”
Git status
```
:::tip Observación
- Aquí hemos creado una nueva confirmación con el mensaje "update content of resetlifecyclefile". El conjunto de cambios se ha añadido al historial de confirmaciones. Al invocar **git status** en este momento, se muestra que no hay cambios pendientes en ninguno de los árboles. Al ejecutar **git log** se mostrará el historial de confirmaciones. 
:::

- Ahora que hemos seguido la trayectoria de este conjunto de cambios por los tres árboles, podemos empezar a utilizar **git reset**.

#### Funcionamiento
- A nivel superficial, **git reset** tiene un comportamiento parecido a git checkout. Mientras que **git checkout** solo opera en el puntero de referencia HEAD, **git reset** moverá el puntero de referencia HEAD y el puntero de referencia de la rama actual. Para demostrar mejor este comportamiento, vamos a analizar el siguiente ejemplo:

![Funcionamiento git reset](https://wac-cdn.atlassian.com/dam/jcr:8d616ece-8cee-4fde-bdee-4b280a0a8334/01%20git-sequence-transparent%20kopiera.png?cdnVersion=1328)

- Este ejemplo demuestra una secuencia de confirmaciones en la rama main. La referencia HEAD y la referencia de la rama main en estos momentos apuntan a la confirmación d. Ahora vamos a ejecutar y a comparar tanto **git checkout b** como **git reset b**.

#### Git checkout b
![Funcionamiento git reset con checkout](https://wac-cdn.atlassian.com/dam/jcr:f45c4a34-8968-4c81-83cf-d55ebf01a447/02%20git-checkout-transparent%20kopiera.png?cdnVersion=1328)
- Con **git checkout**, la referencia main sigue apuntando a d. La referencia HEAD se ha movido y ahora apunta a la confirmación b. Ahora el repositorio se encuentra en un estado de "HEAD desasociado".


#### Git reset b
![Funcionamiento git reset con reset](https://wac-cdn.atlassian.com/dam/jcr:bdf5fda3-4aac-4170-ba35-58f7a66ea3c4/03%20git-reset-transparent%20kopiera.png?cdnVersion=1328)
- En comparación, **git reset** mueve tanto las referencias de HEAD como la de la rama a la confirmación especificada.
- Además de actualizar los punteros de referencia de las confirmaciones, **git reset** modificará el estado de los tres árboles. La modificación del puntero de referencia sucede siempre y es una actualización del tercer árbol, el árbol de confirmaciones. Los argumentos de las líneas de comandos **--soft**, **--mixed** y **--hard** indican cómo modificar los árboles del índice del entorno de ensayo y del directorio de trabajo.
#### Opciones principales
- La invocación predeterminada de **git reset** tiene argumentos implícitos de **--mixed** y HEAD. Esto significa que ejecutar **git reset** equivale a ejecutar **git reset --mixed HEAD**. De esta forma, HEAD es la confirmación especificada. En vez de HEAD, se puede usar cualquier hash de confirmación SHA-1 de Git.
![Git reset opciones principales](https://wac-cdn.atlassian.com/dam/jcr:7fb4b5f7-a2cd-4cb7-9a32-456202499922/03%20(8).svg?cdnVersion=1328)

#### --hard
- Esta es la opción más directa, PELIGROSA y habitual. Cuando se pasa **--hard**, los punteros de referencia del historial de confirmaciones se actualizan para corresponder a la confirmación especificada.
- A continuación, el índice del entorno de ensayo y el directorio de trabajo se restablecen para reflejar la confirmación especificada. 
- Todos los cambios del índice del entorno de ensayo y del directorio de trabajo se restablecen para reflejar el estado del árbol de confirmaciones. Esto significa que se perderá cualquier trabajo pendiente que haya quedado en el índice del entorno de ensayo y en el directorio de trabajo.
- Para demostrarlo, continuemos con el repositorio de ejemplo de los tres árboles que hemos visto antes. En primer lugar, hagamos unas cuantas modificaciones en el repositorio. Ejecuta los siguientes comandos en el repositorio de ejemplo:

```git
echo 'new file content' > new_file
git add new_file
echo 'changed content' >> reset_lifecycle_file

```
:::tip Observación
- Estos comandos han creado un nuevo archivo llamado new_file y luego lo agrega al repositorio. Además, se modificará el contenido de reset_lifecycle_file. Ahora que se han aplicado estos cambios, examinemos el estado del repositorio usando **git status**.
:::

- Ahora ejecutamos **git add reset_lifecycle_fil**e y luego **git status**.
- Ahora aparece reset_lifecycle_file en verde debajo de "Changes to be committed".
-  Conviene resaltar que **git status** no es una representación verdadera del índice del entorno de ensayo. El resultado del comando **git status** muestra los cambios entre el historial de confirmaciones y el índice del entorno de ensayo.
-  Llegados a este punto, vamos a examinar el contenido del índice del entorno de ensayo:
```git
git ls-files -s
```
:::tip Observación
- Podemos ver que new_file se ha añadido al índice. Hemos efectuado modificaciones en reset_lifecycle_file, pero el SHA del índice del entorno de ensayo (5b59584dd332ace68d63fd49c9bc59371ff9a86a) sigue siendo el mismo. Este es un comportamiento previsto, ya que no se ha usado **git add** para aplicar estos cambios en el índice del entorno de ensayo. Estos cambios existen en el directorio de trabajo.
:::
- Ahora vamos a ejecutar un comando **git reset --hard** y a examinar el nuevo estado del repositorio:
```git
git reset --hard
git status
git ls-files -s

```
:::tip Observación
 - Git muestra el resultado indicando que HEAD apunta a la última confirmación.
 - A continuación, comprobamos el estado del repositorio con **git status**. Git indica que no hay cambios pendientes.
 - Examinamos también el estado del índice del entorno de ensayo y vemos que se ha restablecido a un punto anterior a que se añadiera new_file.
 - Nuestras modificaciones en reset_lifecycle_file y la adición de new_file se han destruido. Esta pérdida de datos no se puede deshacer. Es esencial que tomemos buena nota de ello.
:::

#### --mixed
- Esta es la opción predeterminada.
- Se actualizan los punteros de referencia. 
- El índice del entorno de ensayo se restablece al estado de la confirmación especificada.
- Todos los cambios que se hayan deshecho en el índice del entorno de ensayo se mueven al directorio de trabajo. Vamos a continuar:

```git
echo 'new file content' > new_file
git add new_file
echo 'append content' >> reset_lifecycle_file
git add reset_lifecycle_file
git status
git ls-files -s

```
:::tip Observación
- En el ejemplo anterior, hemos hecho unas cuantas modificaciones en el repositorio. De nuevo, hemos añadido un new_file y modificado el contenido de reset_lifecycle_file. A continuación, estos cambios se aplican al índice del entorno de ensayo con **git add**. 
:::
- Con el repositorio en este estado, ejecutaremos ahora el restablecimiento:


```git
git reset --mixed
git status
git ls-files -s

```
:::tip Observación
- Aquí hemos ejecutado un "mixed reset". Para que quede claro, **--mixed** es el modo predeterminado y surte el mismo efecto que ejecutar **git reset**. Al examinar el resultado de **git status** y **git ls-files**, se ve que el índice del entorno de ensayo se ha restablecido a un estado en el que reset_lifecycle_file es el único archivo del índice. El SHA de objeto de reset_lifecycle_file se ha restablecido a la versión anterior.
- Lo importante que debemos destacar aquí es que **git status** nos muestra que hay modificaciones en reset_lifecycle_file y que hay un archivo sin seguimiento: new_file.
- Se ha restablecido el índice del entorno de ensayo y se han movido los cambios pendientes al directorio de trabajo. Solo tienes que compararlo con el caso del **--hard reset**, en el que se restablecieron tanto el índice del entorno de ensayo como el directorio de trabajo, lo que hizo que se perdieran estas actualizaciones.
:::
#### --soft
- Cuando se pasa el argumento **--soft**, se actualizan los punteros de referencia y el restablecimiento se detiene ahí.
- El índice del entorno de ensayo y el directorio de trabajo permanecen intactos. Puede ser difícil demostrar claramente este comportamiento. Vamos a continuar con nuestro repositorio demo y a prepararlo para un soft reset:

```git
git add reset_lifecycle_file 
git ls-files -s 
git status 
```
:::tip Observación
- Aquí hemos utilizado otra vez **git add** para pasar el reset_lifecycle_file modificado al índice del entorno de ensayo. Confirmamos que el índice se ha actualizado con el resultado de **git ls-files**. El resultado de **git status** ahora muestra "Changes to be committed" en verde. El new_file de nuestros ejemplos anteriores está flotando por el directorio de trabajo como un archivo sin seguimiento. Vamos a ejecutar rápidamente **rm new_file** para eliminar el archivo, puesto que no lo necesitaremos para los siguientes ejemplos.
:::
- Con el repositorio en este estado, ejecutaremos ahora un restablecimiento parcial (soft reset):

```git
git reset --soft
git status
git ls-files -s
```
:::tip Observación
- Hemos ejecutado un "soft reset". Al examinar el estado del repositorio con **git status** y **git ls-files**, se muestra que no ha cambiado nada.
- Un soft reset solo restablecerá el historial de confirmaciones. De manera predeterminada, git reset se invoca con HEAD como la confirmación objetivo. Como nuestro historial de confirmaciones ya se encontraba en HEAD y restablecemos implícitamente a HEAD, no ha ocurrido nada en realidad.
:::

- Para entender y utilizar mejor **--soft**, necesitamos una confirmación objetivo que no sea HEAD. Tenemos a reset_lifecycle_file en espera en el índice del entorno de ensayo. Vamos a crear una nueva confirmación:

```git
git commit -m "prepend content to reset_lifecycle_file"
```
- En este punto, nuestro repositorio debería tener tres confirmaciones. Retrocederemos en el tiempo hasta la primera de ellas. Para ello, necesitaremos el ID de la primera confirmación. Se puede saber viendo el resultado de **git log**.
- Ten en cuenta que los ID del historial de confirmaciones serán únicos en cada sistema. Un ID de confirmación se ve algo como 780411da3b47117270c0e3a8d5dcfd11d28d04a4. Buscamos el ID que corresponda a la confirmación inicial y la utilizaremos como objetivo de nuestro soft reset.
- Antes de retroceder en el tiempo, vamos a comprobar primero el estado actual del repositorio:
```git
 git status && git ls-files -s
```
- Teniendo esto en cuenta la información que nos brinda, vamos a ejecutar un soft reset a nuestra primera confirmación.

```git
git reset --soft id
git status && git ls-files -s

```

:::tip Observación
- El código anterior ejecuta un "soft reset" y también invoca el comando combinado **git status** y **git ls-files**, que muestra el resultado del estado del repositorio. 
-  Podemos examinar el resultado del estado del repositorio y sacar algunas observaciones interesantes. En primer lugar, **git status** indica que hay modificaciones en reset_lifecycle_file y las resalta para indicar que son cambios preparados para la siguiente confirmación.
-  En segundo lugar, la información de **git ls-files** indica que el índice del entorno de ensayo no ha cambiado y conserva el SHA que teníamos antes.
-  Para explicar mejor lo que ha ocurrido en este restablecimiento, vamos a examinar el **git log**:
     -  El resultado del registro ahora muestra que hay una única confirmación en el historial de confirmaciones. Esto ayuda a ilustrar claramente qué ha hecho **--soft**.
     - Como sucede en todas las invocaciones de **git reset**, lo primero que hace el restablecimiento es restablecer el árbol de confirmaciones. Los dos ejemplos anteriores con **--hard** y **--mixed** han apuntado a HEAD y no han hecho que el árbol de confirmaciones retroceda en el tiempo. Durante un soft reset, esto es lo único que sucede.

:::

- Entonces, podríamos preguntarnos por qué **git status** indica que hay archivos modificados. **--soft** no toca el índice del entorno de ensayo, por lo que las actualizaciones de este nos han acompañado en el tiempo a lo largo del historial de confirmaciones. Podemos confirmarlo con el resultado de **git ls-files -s**, que muestra que no ha cambiado el SHA de reset_lifecycle_file. Como recordatorio, **git status** no muestra el estado de "los tres árboles", sino que, en esencia, muestra una comparación entre ellos. En este caso, muestra que el índice del entorno de ensayo va por delante de los cambios del historial de confirmaciones como si ya los hubiéramos preparado.

#### Unstage un archivo
- Si has movido un archivo la zona de "staging" con **git add**, pero ya no quieres que forme parte del commit, puedes usar **git reset** para unstage ese archivo:

```git
git reset HEAD ARCHIVO-A-UNSTAGE
```

:::tip Observación
- Los cambios que has hecho seguirán estando en el archivo, este comando solo remueve el archivo de tu zona de "staging".

:::


#### Eliminación de las confirmaciones locales
- El siguiente ejemplo muestra un caso práctico más avanzado. Demuestra qué sucede cuando has estado trabajando en un nuevo experimento durante un tiempo, pero decides descartarlo por completo tras confirmar unas cuantas instantáneas.
1. Creamos un archivo llamado app.js y le añadimos algo de código (a tu imaginación).
2. Ejecutamos los siguientes comandos:

```git
git add app.js
git commit -m "Start developing a crazy feature"

```
3. Editamos el archivo app.js (a tu imaginación).
4. Ejecutamos los siguientes comandos:

```git
git commit -a -m "Continue my crazy feature"
git log 
git reset --hard HEAD~2

```

:::tip Observación
- El comando **git reset HEAD~2** retrocede la rama actual dos confirmaciones, con lo que se elimina de forma eficaz las dos instantáneas que acabamos de crear a partir del historial del proyecto. Recuerda que este tipo de restablecimiento solo debe utilizarse en las confirmaciones no publicadas. No hagas nunca la operación anterior si ya has enviado tus confirmaciones a un repositorio compartido.
:::

#### Restablecer una rama a un commit anterior
- El siguiente comando restablece el HEAD de tu rama actual al COMMIT dado. Básicamente rebobina el estado de su rama:

```git
git reset MODO COMMIT
```
- Si omites el MODE, el valor predeterminado es **--mixed**.
- Las opciones para MODE son:
   -	**--soft**: no restablece el índice o el árbol de trabajo. Cambia todos los archivos a "Cambios a ser commited".  
   -	**--mixed**: restablece el índice, pero no el árbol de trabajo e informa de lo que no se ha actualizado.
   -	**--hard**: restablece el índice y el árbol de trabajo. Cualquier cambio en los archivos rastreados en el árbol de trabajo desde el commit son descartados.


:::tip Opcion --keep y --merge
- La opción -**-keep** en git reset mantiene los cambios en el directorio de trabajo y en el área de preparación, lo que permite que el usuario realice más cambios antes de volver a agregarlos.
- La opción **--merge** en git reset se utiliza para mantener los cambios en el directorio de trabajo y en el área de preparación, pero también para fusionar automáticamente los cambios del commit especificado en el commit actual. Esto se logra al agregar automáticamente los cambios del commit especificado al área de preparación.
- En el caso de **--keep**, los cambios en el commit no se modifican ni se fusionan con el commit actual.
- Por otro lado, en el caso de **--merge**, los cambios en el commit se fusionan automáticamente con el commit actual, lo que puede resultar en conflictos de fusión si hay cambios conflictivos entre los dos commits.
- En resumen, si desea mantener los cambios en el commit sin modificarlos ni fusionarlos con el commit actual, utilice **--keep**. Por otro lado, si desea mantener los cambios en el commit y fusionarlos automáticamente con el commit actual, utilice **--merge**.
- El comando **git reset --merge** se utiliza específicamente cuando necesitas deshacer una fusión que ha resultado en conflictos. Antes de realizar una fusión, Git asegura que el archivo en el árbol de trabajo relacionado con la fusión no tenga cambios locales (esto lo logra verificando que no exista ninguna diferencia entre los archivos en el directorio de trabajo y el índice), y que el resultado de la fusión se refleje en el árbol de trabajo.
- Cuando ejecutas **git reset --merge**, Git revisa si hay diferencias entre el índice y el objetivo de la fusión (el "objetivo de la fusión" se refiere al commit al cual se está intentando fusionar, Por ejemplo, si estás en la rama main y ejecutas **git merge feature**, el ultimo commit de la rama feature es el "objetivo de la fusión"), así como entre el índice y el árbol de trabajo. Si se encuentran diferencias en ambos casos, significa que no estás restableciendo desde un estado después de una fusión conflictiva. En este escenario, la opción **--merge** no está permitida, ya que no tiene sentido intentar deshacer una fusión conflictiva cuando no estás en ese estado específico de fusión.
- **git reset --keep** se utiliza para eliminar confirmaciones recientes en la rama actual mientras se conservan los cambios en el árbol de trabajo. No está permitido si hay conflictos entre los cambios en la confirmación que se quiere eliminar y los cambios en el árbol de trabajo que se desean conservar, si hay diferencias entre el árbol de trabajo y el commit al cual se quiere regresar, o si hay entradas no fusionadas ("entradas no fusionadas" se refiere a situaciones en las que hay conflictos sin resolver durante una operación de fusión, las "entradas no fusionadas" son esencialmente esos conflictos pendientes de resolución).

:::

:::warning
- Ten mucho cuidado usando la opción **--hard** con **git reset**, ya que restablece tu commit, zona de "staging" y tu directorio de trabajo. Si esta opción no se utiliza correctamente, se puede acabar perdiendo el código escrito.
:::


#### Diferencias con Git revert
- Si **git rever**t es una forma "segura" de deshacer los cambios, podríamos considerar **git reset** como el método peligroso.
- Corremos el riesgo real de perder trabajo con **git reset**.
- **git reset** nunca eliminará una confirmación. Sin embargo, las confirmaciones pueden quedarse "huérfanas", es decir, sin una ruta directa desde una referencia(un commit) para acceder a ellas. Normalmente estas confirmaciones huérfanas pueden localizarse y restaurarse utilizando **git reflog**. Git eliminará para siempre las confirmaciones huérfanas tras ejecutar el recolector de basura interno.
- De manera predeterminada, Git está configurado para ejecutar el recolector de basura cada 30 días.
- Los otros dos árboles, el índice del entorno de ensayo y el directorio de trabajo, no son tan permanentes como las confirmaciones.
- Reset es uno de los únicos comandos de Git que puede hacerte perder el trabajo realizado.
- Mientras que revert se ha diseñado para deshacer de forma segura una confirmación pública, **git reset** se ha diseñado para deshacer los cambios locales en el índice del entorno de ensayo y el directorio de trabajo.
- El restablecimiento elimina por completo un conjunto de cambios, mientras que la reversión conserva el conjunto de cambios original y utiliza una nueva confirmación para aplicar la acción de deshacer.

#### No restablezcas el historial público
- No deberías utilizar nunca **git reset**  si cualquier instantánea posterior a se ha enviado a un repositorio público. Después de publicar una confirmación, tienes que dar por sentado que el resto de los desarrolladores dependen de ella.
- Eliminar una confirmación que otros miembros del equipo han seguido desarrollando supone un problema grave para la colaboración. Cuando intenten sincronizarse con tu repositorio, parecerá que un pedazo del historial del proyecto ha desaparecido repentinamente. 
- Lo importante es que te asegures de que estás utilizando **git reset** en un experimento local que salió mal, no en cambios publicados. Si tienes que arreglar una confirmación pública, el comando **git revert** se ha diseñado específicamente para este fin.
#### Error

- Si haces un **git reset** y luego intentas hacer un push con lo que hiciste te tira un error (failed to push some refs to).
- Esto sucede porque en el tiempo que estas (commit) no contiene/no existen los mismos commits que están en la nube (github). Para comprobar esto compara los commit de github con los locales (**git log –-oneline**).
- Para solucionar este problema, debemos restaurar a la última versión remota:
``` git
git pull origin nombrerama
```
#### [Documentación](https://git-scm.com/docs/git-reset)
## git revert
- Deshace los cambios creando un commit completamente nuevo, todo esto sin alterar el historial de commits.
- Elimina un commit y hace otro commit.
- Teniendo en cuentas el [estado de un proyecto](#estado-de-un-proyecto) y los [tres árboles de git](#git-reset-y-los-tres-árboles-de-git), con **git revert** podemos deshacer un commit anterior.
- Si ya has subido tu commit a un repositorio remoto, se recomienda que no uses **git reset**, ya que reescribe el historial de commits. Esto puede hacer que trabajar en un repositorio con otros desarrolladores y mantener un historial consistente de commits sea muy difícil.
- En su lugar es mejor usar **git revert**, que deshace los cambios realizados por un commit anterior creando un commit completamente nuevo, todo esto sin alterar el historial de commits.
- El comando  **git revert** puede considerarse un comando de tipo "deshacer", sin embargo, no es una operación de deshacer tradicional. En lugar de eliminar la confirmación del historial del proyecto, descubre cómo invertir los cambios introducidos por la confirmación y agrega una nueva confirmación con el contenido inverso resultante. Esto evita que Git pierda el historial, lo cual es importante para la integridad de su historial de revisiones y para una colaboración confiable.
- La reversión debe usarse cuando desee aplicar lo inverso de una confirmación del historial de su proyecto. Esto puede ser útil, por ejemplo, si está rastreando un error y descubre que fue introducido por una única confirmación. En lugar de ingresar manualmente, arreglarlo y enviar una nueva instantánea, puede usar **git revert** para hacer todo esto automáticamente.
#### Cómo funciona
- El comando **git revert** se utiliza para deshacer cambios en el historial de confirmaciones de un repositorio. 
- **git revert** no mueve los punteros de referencia HEAD a esta confirmación como lo hace **git checkout** o **git reset**.
- Una operación de reversión tomará la confirmación especificada, invertirá los cambios de esa confirmación y creará una nueva "reversión de confirmación".
- Luego, los punteros de referencia se actualizan para apuntar al nuevo compromiso de reversión, convirtiéndolo en la punta de la rama.
- Para demostrarlo, creemos un repositorio de ejemplo usando los ejemplos de línea de comando a continuación:

```git
mkdir git_revert
cd git_revert
git init .
touch demo_file
git add demo_file
git commit -m "initial commit"
echo "initial content" >> demo_file
git commit -a -m "add new content to demo file"
echo "prepended line content" >> demo_file
git commit -a -m "prepend content to demo file"
git log –-oneline

```
:::tip Observación
- Aquí hemos inicializado un repositorio en un directorio recién creado llamado git_revert. Hemos realizado 3 confirmaciones en el repositorio en las que agregamos un archivo demo_file y modificamos su contenido dos veces. Al final del procedimiento de configuración del repositorio, invocamos el comando para mostrar el historial de confirmaciones, mostrando un total de 3 confirmaciones.
:::

- Con el repositorio en este estado, estamos listos para iniciar un **git revert**:

```git
git revert HEAD
```
:::tip Observación
- Git revert espera que se haya pasado una referencia de confirmación y no se ejecutará sin una.
- En este caso pasamos la referencia HEAD , esto revertirá la ultima confirmación. Acordate que una referencia de confirmación puede ser la ID de un commit.


:::
- De manera similar a una fusión, una reversión creará una nueva confirmación que abrirá el editor del sistema configurado solicitando un nuevo mensaje de confirmación. Una vez que se haya ingresado y guardado un mensaje de confirmación, Git reanudará la operación. Ahora podemos examinar el estado del repositorio con **git log --oneline**.
- Tenga en cuenta que la tercera confirmación todavía está en el historial del proyecto después de la reversión. En lugar de eliminarlo, **git revert** agregó una nueva confirmación para deshacer sus cambios. Como resultado, las confirmaciones segunda y cuarta representan exactamente la misma base de código y la tercera confirmación todavía está en nuestro historial en caso de que queramos volver a ella en el futuro.
#### Algunas opciones
- Esta es una opción predeterminada y no es necesario especificarla. Esta opción abrirá el editor del sistema configurado y le solicitará que edite el mensaje de confirmación antes de confirmar la reversión:
```git
-e
--edit
```
- Esta es la inversa de la opción **-e**. La reversión no abrirá el editor:
```git
-n
--no-commit

```
- Pasar esta opción evitará que **git revert** cree una nueva confirmación que invierta la confirmación que especificamos. En lugar de crear la nueva confirmación, esta opción agregará los cambios inversos al índice de preparación y al directorio de trabajo. Estos son los otros árboles que utiliza Git para gestionar el estado del repositorio. 

#### Reset vs Revert
- Es importante comprender que git revert deshace una única confirmación; no "revierte" al estado anterior de un proyecto al eliminar todas las confirmaciones posteriores. En Git, esto en realidad se llama reinicio, no reversión.
- Revert tiene dos ventajas importantes sobre reset. Primero, no cambia el historial del proyecto, lo que lo convierte en una operación "segura" para confirmaciones que ya se han publicado en un repositorio compartido. 
- En segundo lugar, **git revert** puede apuntar a una confirmación individual en un punto arbitrario del historial, mientras que **git reset** solo puede trabajar hacia atrás desde la confirmación actual. Por ejemplo, si quisiera deshacer una confirmación anterior con **git reset**, tendría que eliminar todas las confirmaciones que ocurrieron después de la confirmación que especificamos y luego volver a confirmar todas las confirmaciones posteriores. No hace falta decir que esta no es una solución elegante para deshacer. 
#### Resumen
- El comando **git revert** es una operación de deshacer que avanza hacia adelante y que ofrece un método seguro para deshacer cambios. En lugar de eliminar o dejar huérfanas confirmaciones en el historial de confirmaciones, una reversión creará una nueva confirmación que invierte los cambios especificados. **Git revert** es una alternativa más segura que **git reset** en lo que respecta a perder el trabajo. 
#### [Documentación](https://git-scm.com/docs/git-revert)

## Git stash
- **git stash** guarda temporalmente los cambios que has realizado en tu copia de trabajo local para que puedas trabajar en otra cosa, y luego regresar y volver a aplicarlos más adelante.
- El almacenamiento oculto es útil si necesitas cambiar rápidamente de contexto y trabajar en otra cosa, pero estás a mitad de camino de un cambio de código y no estás listo para comprometerte.

#### Esconde tu trabajo
```git
git stash
```
- El comando **git stash** toma los cambios no confirmados (tanto preparados como no preparados), los guarda para su uso posterior y luego los revierte(elimina) de su copia de trabajo. 
- Una vez ejecutes el comando, eres libre de realizar cambios, crear nuevas confirmaciones, cambiar de rama y realizar cualquier otra operación de Git; luego puedes regresar y volver a aplicar tu alijo (contiene los cambios que guardamos con el comando stash como un conjunto) cuando estés listo.
- Tenga en cuenta que el alijo es local en su repositorio de Git; los alijos no se transfieren al servidor.
#### Reaplicando sus cambios ocultos
- Puede volver a aplicar los cambios previamente guardados con el comando:
```git
git stash pop
```
:::tip Observación
- Al abrir su alijo se eliminan los cambios del mismo y se los vuelve a aplicar a su copia de trabajo.
:::

- Alternativamente, puedes volver a aplicar los cambios a tu copia de trabajo y guardarlos en tu alijo con el comando:
```git
git stash apply
```
:::tip
- Esto es útil si desea aplicar los mismos cambios ocultos a varias ramas.
:::

- Ahora que conoce los conceptos básicos del almacenamiento oculto, hay una advertencia que **git stash** debe tener en cuenta: de forma predeterminada, Git no almacenará los cambios realizados en archivos ignorados o sin seguimiento.

#### Ocultar archivos ignorados o sin seguimiento
- De forma predeterminada, la ejecución **git stash** guardará:
  -	Cambios que se han agregado a su índice.
  -	Cambios realizados en archivos  rastreados por Git (cambios no preparados, cambios que se realizaron en archivos que se agregaron con el comando **git add** previamente).
- Pero no esconderá:
   - Archivos nuevos en su copia de trabajo que aún no se han preparado.
   - Archivos que han sido ignorados.
- Entonces para que lo almacene, lo debemos añadir con **git add**.
- Agregar la opción **-u** (o **--include-untracked**) le indica **git stash** que también guarde sus archivos sin seguimiento:
```git
git stash -u
```
- Puede incluir cambios en archivos ignorados también pasando la opción **-a** (o **–all git stash**)
#### Administrar múltiples alijos
- No estás limitado a un solo alijo. Puede ejecutar **git stash** varias veces para crear varios alijos y luego usar **git stash list** para verlos. 
- De forma predeterminada, los alijos se identifican simplemente como un "WIP" (trabajo en progreso) en la parte superior de la rama y confirmación desde la que creó el alijo. Después de un tiempo, puede resultar difícil recordar que contiene cada alijo:
```git
 git stash list
stash@{0}: WIP on main: 5002d47 our new homepage
stash@{1}: WIP on main: 5002d47 our new homepage
stash@{2}: WIP on main: 5002d47 our new homepage
```
- Para proporcionar un poco más de contexto, es una buena práctica anotar tus alijos con una descripción, usando: **git stash save "message"**:

```git
git stash save "add style to our site"
git stash list
stash@{0}: On main: add style to our site
```
- De forma predeterminada, **git stash pop**  volverá a aplicar el alijo creado más recientemente: stash@{0}.
- Puedes elegir qué alijo volver a aplicar pasando su identificador como último argumento, por ejemplo:
```git
git stash pop stash@{2}
```
#### Ver diferencias de alijo
- Puedes ver un resumen de un alijo con **git stash show**:
```git
 git stash show
 index.html | 1 +
 style.css | 3 +++
 2 files changed, 4 insertions(+)
```
- O pase la opción **-p** o **–-patch** para ver un  resumen completo (usando diff) de un alijo:
```git
$ git stash show -p
diff --git a/style.css b/style.css
new file mode 100644
index 0000000..d92368b
--- /dev/null
+++ b/style.css
@@ -0,0 +1,3 @@
+* {
+  text-decoration: blink;
+}
diff --git a/index.html b/index.html
index 9daeafb..ebdcbd2 100644
--- a/index.html
+++ b/index.html
@@ -1 +1,2 @@
+<link rel="stylesheet" href="style.css"/>

```
#### Alijos parciales
- También puede optar por guardar un solo archivo, una colección de archivos o cambios individuales dentro de los archivos. Si pasa la opción **-p** (o **–-patch**) a **git stash** , recorrerá cada "fragmento" modificado en su copia de trabajo y le preguntará si desea guardarlo:
```git
git stash -p
```
- Presionando “?” podemos obtener una lista completa de comandos hunk para ver si guardamos o no algun cambio.
- No existe un comando explícito de "abortar", pero presionar CTRL-C (SIGINT) cancelará el proceso de almacenamiento.

#### Creando una rama a partir de tu alijo
- Si los cambios en su rama difieren de los cambios en su alijo, puede tener conflictos al abrir o aplicar su alijo. En su lugar, puede utilizar **git stash branch** para crear una nueva rama para aplicar los cambios ocultos:
```git
git stash branch add-stylesheet stash@{1}
```
:::tip Observación
- Este crea una rama llamada add-stylesheet  y le añade los cambios del alijo.
:::
#### Limpiando tu alijo
- Si decides que ya no necesitas un alijo en particular, puedes eliminarlo con **git stash drop**:
```git
git stash drop stash@{1}
```
- O puedes eliminar todos tus alijos con:
```git
git stash clear
```
#### Cómo funciona git stash
- Los alijos en realidad están codificados en su repositorio como objetos de confirmación. La referencia especial en .git/refs/stash apunta a su alijo creado más recientemente, y el reflog de la referencia hace referencia a los alijos creados anteriormente por stash.
- Es por eso que te refieres a los escondites como stash@{n}: porque  en realidad te refieres a  la entrada número "n"  de reflog (representa una lista con todos los alijos creados) de la referencia stash. Dado que un alijo es solo una confirmación, puedes inspeccionarlo con : **git log**.
- Dependiendo de lo que hayas guardado, una sola operación  git stash crea dos o tres nuevas confirmaciones:
    - stash@{0}, una nueva confirmación para almacenar los archivos rastreados que estaban en su copia de trabajo cuando ejecutó **git stash**.
    - stash@{0} El primer padre, el  commit preexistente que estaba en HEAD cuando ejecutaste **git stash**.
    - stash@{0} El segundo padre, una nueva confirmación que representa el índice cuando ejecutó **git stash**.
    - stash@{0} El tercer padre, una nueva confirmación que representa archivos sin seguimiento que estaban en su copia de trabajo cuando ejecutó **git stash**. Este tercer padre solo se crea si:
       - Su copia de trabajo en realidad contenía archivos sin seguimiento; y
       usted especificó la opción **--include-untracked** o **–all** cuando invocó **git stash**.
- Cómo **git stash** codifica su árbol de trabajo e índice como confirmaciones:
   - Antes del almacenamiento oculto, su árbol de trabajo puede contener cambios en archivos rastreados, archivos no rastreados y archivos ignorados. Algunos de estos cambios también pueden estar guardados en el índice:
![Diagrama git stash](https://wac-cdn.atlassian.com/dam/jcr:3a2ede93-1f2d-45ae-9e0b-167cc0362f37/03.svg?cdnVersion=1328)
- La invocación **git stash** codifica cualquier cambio en los archivos rastreados como dos nuevas confirmaciones en su repositorio: una para cambios no preparados y otra para cambios preparados en el índice. La referencia especial refs/stash se actualiza para señalarlos:
![Diagrama git stash 2 ](https://wac-cdn.atlassian.com/dam/jcr:35edaf68-e8b1-484e-b5f0-292c532f048a/04.svg?cdnVersion=1328)
- El uso de la opción  **--include-untracked** también codifica cualquier cambio en archivos sin seguimiento como una confirmación adicional:
![Diagrama git stash 3 ](https://wac-cdn.atlassian.com/dam/jcr:f7dd5493-a98d-449e-ae37-146d6270ccf7/05.svg?cdnVersion=1328)
- El uso de la opción **--all** incluye cambios en los archivos ignorados junto con cambios en los archivos sin seguimiento en la misma confirmación:
![Diagrama git stash 4 ](https://wac-cdn.atlassian.com/dam/jcr:446fad60-0ff5-4383-8177-a5fc2813364d/06.svg?cdnVersion=1328)
- Cuando ejecuta **git stash pop**, los cambios de las confirmaciones anteriores se utilizan para actualizar su copia de trabajo y su índice. Tenga en cuenta que las confirmaciones extraídas no se eliminan inmediatamente, pero se convierten en candidatas para una futura recolección de basura.

#### [Documentación](https://git-scm.com/docs/git-stash)




## git diff
- **git diff** es un comando multiusos de Git que, cuando se ejecuta, lleva a cabo una función para establecer las diferencias entre dos orígenes de datos de Git. 
- Dichos orígenes de datos pueden ser confirmaciones, ramas y archivos, entre otras posibilidades. 
- La comparación con diff es una función mediante la cual se toman dos conjuntos de datos de entrada y se muestran los cambios/diferencias entre estos. 
- El comando **git diff** suele utilizarse junto con **git status** y **git log** para analizar el estado actual de un repositorio de Git.
#### Leer diferencias: resultados
- Los siguientes ejemplos se ejecutarán en un solo repositorio, que se crea con los comandos indicados a continuación:

```git
mkdir diff_test_repo
cd diff_test_repo
touch diff_test.txt
echo "this is a git diff test example" > diff_test.txt
git init .
git add diff_test.txt

```
- Si ejecutamos **git diff** llegado a este punto, no habrá ningún resultado. Este es el comportamiento previsto, ya que no hay ningún cambio en el repositorio que permita mostrar diferencias. Cuando se haya creado el repositorio y hayamos añadido el archivo diff_test.txt, podremos cambiar el contenido del archivo para empezar a experimentar con el resultado de la diferencia:

```git
echo "this is a diff example" > diff_test.txt
```

- Si ejecutas este comando, cambiarás el contenido del archivo diff_test.txt. Cuando se haya modificado, podremos ver una diferencia y analizar el resultado. Ahora, al ejecutar **git diff**, se producirá el resultado siguiente:

```git
diff --git a/diff_test.txt b/diff_test.txt
index 409ef4b..91f7b12 100644
--- a/diff_test.txt
+++ b/diff_test.txt
@@ -1 +1 @@
-"this is a git diff test example"
+"this is a diff example"

```
- Pasemos ahora a examinar un desglose más detallado del resultado de la diferencia.

#### Introducción a la comparación
```git
diff --git a/diff_test.txt b/diff_test.txt
```
- En esta línea se muestran las fuentes de entrada de la comparación. Podemos observar que se ha utilizado a/diff_test.txt y b/diff_test.txt en la comparación.
- Lo primero que vemos es que al fichero viejo le denomina "a" y al fichero nuevo "b".
#### Metadatos
```git
index 409ef4b..91f7b12 100644
```
- En esta línea se muestran unos cuantos metadatos internos de Git. Lo más probable es que no necesites esta información. Los números de este resultado  corresponden con los identificadores hash de la versión del objeto de Git.
#### Marcadores de los cambios
```git
--- a/diff_test.txt
+++ b/diff_test.txt

```
- Lo siguiente que nos dice es que los simbolos de "–" estan ligados al fichero viejo y los simbolos de "+" estan ligados al fichero nuevo.
- Estas líneas conforman una leyenda que asigna símbolos a cada origen de entrada de la comparación. En este caso, los cambios de a/diff_test.txt se marcan con un "---" y, los de b/diff_test.txt, con el símbolo "+++".
#### Fragmento de la diferencia
- El producto/resultado  de la diferencia es una lista de "fragmentos" de la diferencia. 
- Una diferencia solo muestra las secciones del archivo con cambios. En el ejemplo en cuestión, solo hay un fragmento porque estamos trabajando con un caso sencillo. Los fragmentos poseen su propia semántica:
```git
@@ -1 +1 @@
-"this is a git diff test example"
+"this is a diff example"
```
- La primera línea es el encabezado del fragmento. Cada fragmento comienza con un encabezado delimitado por símbolos @@. El contenido de dicho encabezado es un resumen de los cambios efectuados en el archivo. En nuestro ejemplo simplificado pone "-1 +1", lo que significa que ha habido cambios en la primera línea. En una diferencia más realista, se podría ver un encabezado como el siguiente:
```git
@@ -34,6 +34,8 @@
```
- En este ejemplo de encabezado, lo que pone es que se han extraído 6 líneas a contar desde la línea número 34. Además, se han añadido 8 líneas a partir de la línea número 34.
- El resto del contenido del fragmento muestra los cambios recientes. Todas las líneas cambiadas comienzan por un símbolo + o -, que sirve para indicar de qué versión de archivo  proceden (se obtienen) los cambios. Como ya hemos comentado antes, - indica cambios en a/diff_test.txt, mientras que "+" indica cambios en b/diff_test.txt.
#### Resaltar cambios
```git
git diff --color-words
```
- El comando **git diff** también tiene un modo especial para resaltar los cambios con un nivel de detalle muy superior: **‐‐color-words**. Este modo tokeniza las líneas añadidas y eliminadas y muestra las comparaciones:
```git
diff --git a/diff_test.txt b/diff_test.txt
index 409ef4b..91f7b12 100644
--- a/diff_test.txt
+++ b/diff_test.txt
@@ -1 +1 @@
"this is agit difftest example"

```
- Ahora, el resultado muestra solo las palabras  que se han cambiado y eliminado mediante colores.

#### Otra forma
```git
git diff-highlight
```
- Si clonas un repositorio, verás un subdirectorio llamado "contrib", que contiene una serie de herramientas relacionadas con Git, así como otras interesantes cositas que todavía no se han promovido al núcleo de Git. Una de ellas es un script en Perl llamado "diff-highlight". Diff-highlight empareja líneas coincidentes del resultado de la diferenciación y resalta los cambios:
```git
git diff | /your/local/path/to/git-core/contrib/diff-highlight/diff-highlight
```
:::tip Observación
- El comando está utilizando **git diff** para obtener las diferencias y luego redirige esa salida al script diff-highlight ubicado en la ruta especificada. El propósito de usar **diff-highlight** es mejorar la visualización de las diferencias resaltando las líneas modificadas, añadidas o eliminadas para facilitar la lectura de los cambios.
:::


#### Diferenciación de archivos binarios
- **git diff** también se puede ejecutar con archivos binarios. Por desgracia, el resultado predeterminado no resulta demasiado útil.
- Git tiene una función que te permite especificar un comando de shell para transformar el contenido de tus archivos binarios en texto antes de ejecutar el comando diff, pero para ello hay que hacer unos pequeños ajustes. En primer lugar, tienes que especificar un filtro de textconv que exponga cómo convertir en texto un tipo concreto de archivo binario. 
- Usaremos una sencilla utilidad llamada "pdftohtml" (disponible a través de Homebrew) para convertir unos PDF en HTML legible para humanos. Puedes configurar esto para un solo repositorio editando el archivo .git/config o bien globalmente editando ~ /.gitconfig:

```git
[diff "pdfconv"]
textconv=pdftohtml -stdout

```
- Acto seguido, lo único que tienes que hacer es asociar al menos un patrón de archivos a nuestro filtro pdfconv, para lo cual puedes crear un archivo .gitattributes en la raíz del repositorio:

```json
*.pdf diff=pdfconv
```
- Una vez configurado, **git diff** ejecutará primero el archivo binario mediante el script de conversor configurado y producirá la comparación del resultado del conversor. Esta misma técnica se puede aplicar para obtener diferencias útiles de todo tipo de archivos binarios como, por ejemplo, archivos .zip o .jar. Por ejemplo: si utilizas unzip -l (o semejante) en vez de "pdf2html", te mostrará las rutas que se han añadido o eliminado. Por otro lado, se puede utilizar "exiv2" para mostrar cambios en los metadatos como, por ejemplo, documentos de dimensiones de imágenes. Asimismo, existen herramientas de conversión para transformar archivos .odf, .doc y otros formatos de documento a texto sin formato. 

#### Comparar archivos
- En el comando **git diff** se puede utilizar una opción de ruta de archivo explícita. Cuando se utiliza una ruta de archivo en **git diff**, la operación de comparación limitará su alcance al archivo especificado. Los siguientes ejemplos ilustran este uso:

```git
git diff HEAD ./path/to/file
```
- El comando **git diff HEAD ./path/to/file** muestra las diferencias entre la versión actual del archivo en tu directorio de trabajo y la última confirmación en la rama actual (HEAD). Esto incluirá los cambios que aún no se han preparado (staged) en el índice.
En este ejemplo, el alcance se restringe a ./path/to/file y, al invocar el comando, este comparará los cambios concretos efectuados en el directorio de trabajo con respecto al índice, y mostrará los cambios que todavía no se han preparado.
- En términos más detallados:
   - Si hay cambios en el archivo en tu directorio de trabajo que aún no se han preparado (no han sido añadidos al índice), esos cambios se mostrarán en la salida de **git diff**.
   - Si has preparado cambios (usando **git add**) pero aún no has confirmado (usando **git commit**), esos cambios también se mostrarán en la salida de **git diff**. En este caso, se mostrarán las diferencias entre el último commit (HEAD) y el contenido preparado en el índice.
- De forma predeterminada, **git diff** ejecutará la comparación con respecto a HEAD. Si se omite HEAD en el ejemplo anterior, **git diff ./path/to/file** surtirá el mismo efecto.
- El comando **git diff --cached ./path/to/file** muestra las diferencias entre el archivo especificado en el índice (staging area) y la última confirmación en la rama actual (HEAD). Este comando compara los cambios que ya han sido preparados para el próximo commit:

```git
git diff --cached ./path/to/file
```
- Al invocar **git diff** con la opción **--cached**, el comando comparará los cambios preparados con el repositorio local. La opción **--cached** equivale a **--staged**.
#### Comparar todos los cambios
- Al invocar **git diff** sin ninguna ruta de archivo, se compararán los cambios efectuados en todo el proyecto. 
- De forma predeterminada, **git diff** te mostrará todos los cambios sin confirmar desde la última confirmación.
#### Comparar archivos entre dos confirmaciones distintas
- En el comando **git diff** se pueden utilizar referencias de Git de confirmaciones para mostrar las diferencias. Por ejemplo, algunas de estas referencias son HEAD, etiquetas y nombres de ramas. En Git, todas las confirmaciones tienen su correspondiente ID y, para obtenerlo, puedes ejecutar **git log**. También puedes utilizar este ID de confirmación en **git diff**:
```git
 git diff 957fbc92b123030c389bf8b4b874522bdf2db72c ce489262a1ee34340440e55a0b99ea6918e19e7a
```
#### Comparar ramas
- Las ramas se comparan igual que el resto de  referencias en **git diff**:
```git
git diff branch1..other-feature-branch
```
:::tip Observación
- El comando **git diff branch1..other-feature-branch** en Git muestra las diferencias entre los puntos finales de las dos ramas especificadas, es decir, entre la punta (commit más reciente) de branch1 y la punta de other-feature-branch. La notación ".." se utiliza para especificar el rango de commits entre ambas ramas.
- Es importante tener en cuenta que este comando compara los contenidos de los archivos en los commits finales de cada rama, no  cada commit dentro de ese rango.
- Este ejemplo introduce el punto como operador. Los dos puntos de este ejemplo indican la diferencia de los extremos de ambas ramas. Si se omiten estos puntos y se utiliza un espacio entre las ramas, el efecto que se produce es el mismo. 
- La notación de dos puntos sirve para mostrar las diferencias entre dos referencias de git. Estas referencias pueden ser commits, ramas, etiquetas u otros identificadores que apunten a un punto específico en la historia del repositorio.
:::

- Además, está el operador de tres puntos:

```git
git diff branch1...other-feature-branch
```

:::tip Observación
- La notación de los tres puntos (...) en Git se utiliza para mostrar las diferencias entre dos ramas específicas, pero con un enfoque diferente al de los dos puntos (..). Mientras que ".." muestra las diferencias entre los extremos de dos referencias y excluye los commits comunes, "..." incluye los commits comunes en la comparación.
- El comando **git diff branch1...other-feature-branch** en Git muestra las diferencias entre dos ramas específicas, incluyendo los commits que están en ambas ramas y excluyendo los commits que son exclusivos de cada rama.
- La notación de tres puntos (...) incluye el ancestro común de ambas ramas en la comparación. En otras palabras, se compara  el último ancestro común  con los extremos de las dos ramas.
:::

:::tip  Ejemplo con el operador  "..."
- Supongamos que tienes las siguientes ramas:
  - Rama branch1 :  A -- B -- C – D
  - Rama other-feature-branch:    B -- E -- F – G
- En este ejemplo, el commit B es el ancestro común más reciente de ambas ramas. Ahora, si ejecutas:
```git
git diff branch1...other-feature-branch
```
- La salida mostrará las diferencias entre el commit B (ancestro común) y los commits finales de ambas ramas (D en branch1 y G en other-feature-branch). Esto excluye los commits A, C, E, y F, ya que están en una rama pero no en ambas. 
- Este ejemplo es bastante simple, pero ilustra cómo la notación de tres puntos enfoca la comparación en los cambios realizados entre el ancestro común y los extremos de las ramas en cuestión.
:::

#### Comparar archivos de dos ramas
- Para comparar un archivo concreto entre ramas, hay que utilizar en el comando la ruta del archivo como tercer argumento de **git diff**:

```git
git diff main new_branch ./diff_test.txt
```

#### [Documentación](https://git-scm.com/docs/git-diff)
## git rm
- Una pregunta habitual al empezar a trabajar con Git es "¿Cómo le indico a Git que deje de hacer el seguimiento de un archivo (o varios archivos)?". El comando **git rm** se usa para eliminar archivos de un repositorio de Git. Se puede considerar que es lo contrario a lo que hace el comando **git add**.
- El comando **git rm** se puede usar para eliminar archivos sueltos o un conjunto de ellos. La función principal de **git rm** es eliminar los archivos del índice de Git. Además, **git rm** se puede usar para eliminar archivos tanto del índice del entorno de ensayo como del directorio de trabajo. No existe la opción de eliminar un archivo solo del directorio de trabajo. Los archivos sobre los que se está trabajando deben ser idénticos a los archivos del HEAD actual. Si existe alguna discrepancia entre la versión del HEAD de un archivo y el índice del entorno de ensayo o la versión del árbol de trabajo, Git impedirá que se eliminen los archivos. Se trata de un mecanismo de seguridad para evitar la eliminación de cambios en progreso.
- Ten en cuenta que **git rm** no elimina ramas.
#### Uso
#### Especificar archivos
- Tenes que especificar los archivos que se van a eliminar. Puede ser un archivo individual , una lista de archivos separados por un espacio en blanco o un patron global de archivos con caracteres comodín (~./directory/*).
- Eliminar un archivo individual:
```git
git rm archivo.txt
```
- Eliminar una lista de archivos:
```git
git rm archivo1.txt archivo2.txt archivo3.txt
```
- Eliminar archivos usando un patrón global con caracteres comodín:

```git
git rm ~/directory/*
```

:::tip Explicación del patrón
-	~: Representa el directorio de inicio del usuario.
-	/directory/: Representa el directorio llamado "directory" dentro del directorio de inicio.
-	**: Es un carácter comodín que coincide con cualquier cadena de caracteres, por lo que * al final indica que se están seleccionando todos los archivos en el directorio "directory".
:::

:::tip
- Recuerda que después de usar **git rm**, también debes hacer un commit para aplicar los cambios al repositorio.
:::


#### Otros patrones
- Los patrones globales de archivos con caracteres comodín se usan en los diferentes directorios. Es importante usar con precaución estos patrones. Analiza los siguientes ejemplos: directory/* y directory*. En el primer ejemplo, se eliminarán todos los archivos secundarios de directory/; mientras que, en el segundo, todos los directorios del mismo nivel, como directory1, directory2 y directory_whatever, lo cual puede dar lugar a un resultado inesperado.
#### Opcion -f o --force
- La opción **-f** se usa para invalidar la comprobación de seguridad que Git realiza para garantizar que los archivos en HEAD coinciden con el contenido actual del índice del entorno de ensayo y del directorio de trabajo.
#### Opcion -n o –-dry-run
- La opción "dry run" es una protección que ejecutará el comando **git rm**, pero que no elimina realmente los archivos. En realidad, mostrará como resultado los archivos que habría eliminado.
#### Opcion -r
- La opción **-r** es la abreviatura de "recursive". Al trabajar en modo recursivo, **git rm** eliminará el directorio de destino y todo el contenido de dicho directorio.
#### --
- La opción de separador sirve para distinguir de forma explícita entre una lista de nombres de archivo y los argumentos que se van a transmitir a **git rm**. Esto resulta útil si algunos de los nombres de archivo tienen una sintaxis igual que otras opciones.
#### Opcion –-cached
- La opción "cached" especifica que la eliminación solo debe realizarse en el índice de entorno de ensayo. Los archivos del directorio de trabajo quedarán aparte.
#### Opcion --ignore-unmatch
- Esto hace que el comando dé como resultado un estado de sigterm 0 aunque no haya archivos coincidentes. Este es un código de estado de nivel Unix. El código 0 indica una invocación correcta del comando. La opción **--ignore-unmatch** puede resultar útil cuando se usa **git rm** dentro de un script de shell mayor que deba fallar de forma elegante.
#### Opcion -q o –-quiet
- La opción "quiet" oculta el resultado del comando **git rm**. El comando suele dar como resultado una línea para cada archivo eliminado.
#### Como deshacer el comando git rm
- La ejecución del comando **git rm** no es una actualización permanente. El comando actualizará el índice del entorno de ensayo y el directorio de trabajo. Estos cambios no se almacenarán hasta que se cree una nueva confirmación y los cambios se añadan al historial de confirmaciones. Esto implica que los cambios se pueden "deshacer" mediante los comandos habituales de Git.
- Con la opción "reset" se revertirán el índice del entorno de ensayo y el directorio de trabajo actual (si utiliza la opcion **--hard**) a la confirmación HEAD. De este modo, se anulará el comando **git rm**:
```git
git reset HEAD
```
- El uso de la opción "checkout" tendrá el mismo efecto y restaurará la última versión del archivo de HEAD:
```git
git checkout .
```
:::tip
- En caso de que se haya ejecutado **git rm** y se haya creado una nueva confirmación que conserve la eliminación, se puede usar **git reflog** para encontrar una referencia que sea anterior a la ejecución de **git rm**. 
:::

#### Aclaraciones
- El comando **git rm** solo actúa en la rama actual. La eliminación solo se aplica al directorio de trabajo y al entorno de ensayo(índice). La eliminación del archivo no se almacena en el historial de repositorios hasta que se cree una nueva confirmación.
- Un repositorio de Git reconocerá cuándo se ha ejecutado un comando rm de shell habitual en un archivo en seguimiento. Se actualizará el directorio de trabajo para reflejar la eliminación. Por el contrario, el índice del entorno de ensayo no se actualizará. Habrá que ejecutar un comando **git add** adicional en las rutas del archivo eliminado para añadir los cambios al índice del entorno de ensayo. El comando **git rm** actúa como acceso rápido en el que se actualizará el directorio de trabajo y el índice del entorno de ensayo con la eliminación.
#### Ejemplos
- En este ejemplo se usa un patrón global de archivos con caracteres comodín para eliminar todos los archivos *.txt que pertenecen al directorio Documentation y a cualquiera de sus subdirectorios:

```git
git rm Documentation/\*.txt
```
:::tip Observación
- Ten en cuenta que el asterisco (*) se escapa con barras oblicuas en este ejemplo. Se trata de una protección que evita que el shell expanda el carácter comodín. Este carácter comodín expande los nombres de rutas de los archivos y subdirectorios dentro del directorio Documentation/.
- Cuando escribes un comando en la línea de comandos y usas un asterisco sin escapar, el shell intentará expandir ese asterisco con una lista de archivos coincidentes antes de ejecutar el comando. Escapar el asterisco con una barra oblicua evita que el shell realice esta expansión y permite que el comando utilice el asterisco como un carácter literal.
- En resumen, al escribir "Documentation/*.txt", se está indicando al sistema que busque archivos con extensión ".txt" dentro del directorio "Documentation", pero se está escapando el asterisco para evitar que el shell expanda automáticamente ese asterisco antes de ejecutar el comando. Esto es útil cuando quieres realizar operaciones en archivos que contienen caracteres comodín en sus nombres.
:::
- En este ejemplo se usa la opción "force" y se dirige a todos los archivos git-*.sh. Esta opción elimina de forma explícita los archivos que coinciden con el patrón tanto del directorio de trabajo como del índice del entorno de ensayo:

```git
git rm -f git-*.sh
```

#### Como eliminar archivos que ya no están en el sistema de archivos
- **git rm** es en realidad un comando de conveniencia que combina el comando rm de shell estándar y **git add** para eliminar un archivo del directorio de trabajo y promover dicha eliminación al índice del entorno de ensayo. 
- Si tienes la intención de registrar todos los archivos eliminados de forma explícita dentro de la siguiente confirmación, **git commit -a** añadirá todos los eventos de eliminación al índice del entorno de ensayo a modo de preparación para la siguiente confirmación.
- No obstante, si quieres eliminar de forma permanente los archivos que han sido eliminados con rm de shell, usa el siguiente comando:
```git
git diff --name-only --diff-filter=D -z | xargs -0 git rm –-cached
```
:::tip Observación
- Este comando generará una lista de archivos eliminados del directorio de trabajo y canalizará la lista a **git rm --cached**, por lo que se actualizará el índice del entorno de ensayo.

:::


## git clone
- Se utiliza para apuntar a un repositorio existente y crear un clon o una copia de un repositorio (remoto o local).
#### Copia de desarrollo
- Si un proyecto ya se ha configurado en un repositorio central, el comando es la forma más común para que los usuarios obtengan una copia y puedan trabajar en el proyecto.
- Al igual que **git init** , es una operación única (solo se ejecuta una vez).
- Una vez que un desarrollador ha obtenido una copia de trabajo, todas las operaciones de control de versiones y colaboraciones se gestionan a través de su repositorio local.
#### Colaboración entre repositorios
- Es importante comprender que la idea de Git de una “copia de trabajo” es muy diferente de la copia de trabajo que se obtiene al extraer el código de un repositorio SVN. A diferencia de SVN, Git no hace distinción entre la copia de trabajo y el repositorio central: todos son completos.
- Esto hace que colaborar con Git sea fundamentalmente diferente que con SVN. Mientras que SVN depende de la relación entre el repositorio central y la copia de trabajo, el modelo de colaboración de Git se basa en la interacción entre repositorios. En lugar de registrar una copia de trabajo en el repositorio central de SVN, usted puede empujar(push) o jalar(pull) confirmaciones de un repositorio a otro.


![Explicación de git clone](https://wac-cdn.atlassian.com/dam/jcr:5d68ce55-59a7-4840-a896-eb2014a9f17b/02.svg?cdnVersion=1328)
- Por supuesto, no hay nada que le impida darles un significado especial a ciertos repositorios de Git. Por ejemplo, simplemente designando un repositorio de Git como repositorio "central", es posible replicar un flujo de trabajo centralizado utilizando Git. El punto es que esto se logra a través de convenciones en lugar de estar integrado en el propio VCS.

#### Uso
- **git clone** se utiliza principalmente para indicar un repositorio existente y hacer un clon o una copia de ese repositorio en un nuevo directorio, en otra ubicación. 
- El repositorio original puede estar ubicado en el sistema de archivos local o en protocolos compatibles accesibles en una máquina remota. 
- El comando **git clone** copia un repositorio Git existente. Esto es algo así como el checkout de SVN, excepto que la “copia de trabajo” es un repositorio Git completo: tiene su propio historial, administra sus propios archivos y es un entorno completamente aislado del repositorio original.
- Para su comodidad, la clonación crea automáticamente una conexión remota llamada "origen" que apunta al repositorio original. Esto hace que sea muy fácil interactuar con un repositorio central.
- Esta conexión automática se establece mediante la creación de referencias de Git a los encabezados de las ramas remotas refs/remotes/origin y mediante la inicialización de las variables de configuración remote.origin.url y remote.origin.fetch
- El siguiente ejemplo demuestra cómo obtener una copia local de un repositorio central almacenado en un servidor accesible usando el nombre de usuario SSH john:
```git
git clone ssh://john@example.com/path/to/my-project.git 
cd my-project 
```
:::tip Observación
- El primer comando inicializa un nuevo repositorio Git en la carpeta my-project de su máquina local y lo llena con el contenido del repositorio central. Luego, puede ingresar al proyecto y comenzar a editar archivos, confirmar instantáneas e interactuar con otros repositorios. Tenga en cuenta también que la extensión .git se omite en el repositorio clonado. Esto refleja el estado no desnudo de la copia local.
- Por defecto el comando **git clone** crea un directorio nuevo con el nombre del proyecto en el directorio actual desde donde se ejecuta el comando.
:::



#### Clonación a una carpeta especifica
- Clone el repositorio ubicado en &lt;repo＞ en la carpeta llamada &lt;directory＞ en la máquina local:
```git
git clone <repo> <directory>
```
- Si no se especifica &lt;directory>, se clona el repositorio en la ubicación actual.


#### Clonar una etiqueta específica
- Clona el repositorio ubicado en &lt;repo＞ pero solo clona la referencia para &lt;tag＞:

```git
git clone --branch <tag> <repo>
```
- Al especificar la etiqueta con **--branch**, estás indicando que deseas clonar el estado del repositorio en ese punto específico de la historia.
- En resumen, el comando **git clone --branch &lt;tag> &lt;repo>** clona un repositorio de Git, pero en lugar de clonar la rama principal (normalmente master), clona la versión del repositorio correspondiente a la etiqueta especificada. Esto puede ser útil cuando deseas trabajar con una versión específica de un proyecto que ha sido marcada con una etiqueta.
- Ejemplo:

```git
git clone --branch v1.0 https://ejemplo.com/mi-usuario/mi-proyecto.git
```

:::tip Observación
- --branch v1.0 indica que deseas clonar la versión asociada con la etiqueta "v1.0".
- https://ejemplo.com/mi-usuario/mi-proyecto.git es la URL del repositorio.
- Esto clonará el repositorio "mi-proyecto" desde el servidor remoto especificado, pero en lugar de clonar la rama principal, clonará la versión marcada como "v1.0". Después de ejecutar este comando, tendrás una copia local del repositorio en tu máquina con el código correspondiente a la versión "v1.0".
:::


#### Clon superficial
- Clona el repositorio ubicado en ＜repo＞y clona solo el historial de confirmaciones especificado por la opción  **--depth=1**:

```git
git clone --depth=1 <repo>
```
:::tip Observación
- En este ejemplo, se realiza una clonación &lt;repo＞y solo se incluye la confirmación más reciente en el nuevo repositorio clonado.
- Puedes usar la opción **--depth** junto con el número deseado de commits que deseas obtener/incluir en la copia.
- La clonación superficial es más útil cuando se trabaja con repositorios que tienen un historial de confirmaciones extenso. Un historial de confirmaciones extenso puede causar problemas de escala, como límites de uso de espacio en disco y largos tiempos de espera al clonar. Un clon Shallow puede ayudar a aliviar estos problemas de escala.

:::


#### Opciones de configuración
#### --branch
- El argumento **--branch** le permite especificar una rama específica para clonar en lugar de la rama a la que apunta HEAD en el remoto, generalmente la rama principal. Además, puedes pasar una etiqueta en lugar de una rama para obtener el mismo efecto.
- Ejemplo:
```git
git clone --branch feature-nueva https://github.com/tu-usuario/mi-proyecto.git
```
#### --bare
- Se utiliza para crear un clon “bare” de un repositorio git.
- Un repositorio bare no contiene una copia de trabajo (los archivos del proyecto que puedes editar y trabajar) , pero si contiene los datos del sistema de control de versiones de git como la base de datos y la información de referencia.
- Esto significa que se configurará un repositorio con el historial del proyecto del que se puede enviar y extraer, pero que no se puede editar directamente. 
- Además, no se configurarán ramas remotas. Así se utiliza para crear un repositorio alojado que los desarrolladores no editarán directamente.

:::tip 
- Bare significa “desnudo” y suele referirse a un repositorio vacio.
:::
#### --mirror
- Al pasar **–-mirror** , también se le pasa **–-bare** explícitamente. Esto significa que el comportamiento de **–-bare** es heredado por **–-mirror** . Lo que da como resultado un repositorio simple sin archivos de trabajo editables.
- Se utiliza para crear un clon espejo del repositorio.
- Un clon espejo no solo contiene la información del sistema de control de versiones como en un clon bare, sino que también refleja todas las referencias y objetos del repositorio original, incluyendo las referencias remotas y las referencias de seguimiento de todas las ramas.
- Cuando clonas un repositorio con la opción **--mirror**, se configura automáticamente un remoto llamado "origin" que apunta al repositorio original. Esto significa que puedes usar comandos como **git fetch origin** , **git push –-mirror** en el clon espejo para mantenerlo completamente sincronizado con el repositorio original.
- El comando **git push –-mirror** actualizará todas las referencias del repositorio remoto para que coincidan exactamente con el estado del repositorio local. Ten en cuenta que este comando puede ser potencialmente destructivo, ya que sobrescribirá todas las referencias en el repositorio remoto con las del repositorio local.
- Diferencia con **–-bare**:
   - Un clon **--bare** solo tiene la información del sistema de control de versiones (historial, ramas, etiquetas, etc.), pero no incluye referencias remotas o seguimiento de ramas específicas.
   - Un clon **--mirror** es una especie de clon **--bare**, pero incluye todas las referencias y objetos, haciendo que sea más adecuado para duplicar completamente un repositorio, incluso con todas las ramas remotas y otras referencias.
   - La diferencia práctica entre **--bare** y **--mirror** radica en el propósito de uso. Un clon **--bare** es adecuado para servidores centrales de colaboración, mientras que un clon **--mirror** se usa comúnmente para replicar completamente un repositorio, por ejemplo, para mantener una copia exacta de respaldo o para tener un reflejo completo de un repositorio en otro servidor.

#### --template
- Clona el repositorio &lt;repo location＞y aplica la plantilla &lt;template directory＞a la rama local recién creada:

```git
git clone --template=<template_directory> <repo location>
```

#### Url de Git
- Git tiene su propia sintaxis de URL que se utiliza para pasar ubicaciones de repositorios remotos a comandos de Git. Debido a que se usa más comúnmente en repositorios remotos, aquí examinaremos la sintaxis de URL de Git. 

#### Protocolos de URL de Git
#### -SSH
- Secure Shell (SSH) es un protocolo de red autenticado ubicuo que comúnmente se configura de forma predeterminada en la mayoría de los servidores. Debido a que SSH es un protocolo autenticado, deberá establecer credenciales con el servidor de alojamiento antes de conectarse:

```git
ssh://[user@]host.xz[:port]/path/to/repo.git/  
```

#### -GIT
- Un protocolo exclusivo de git. Se ejecuta en el puerto 9418. El protocolo es similar a SSH sin embargo NO TIENE AUTENTICACIÓN:

```git
git://host.xz[:port]/path/to/repo.git/  
```
#### -HTTP
- Protocolo de Transferencia de Hipertexto. El protocolo de la web, más comúnmente utilizado para transferir datos HTML de páginas web a través de Internet. Git se puede configurar para comunicarse a través de HTTP:

```git
http[s]://host.xz[:port]/path/to/repo.git/  
```