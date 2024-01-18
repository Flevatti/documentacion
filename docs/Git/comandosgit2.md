---
sidebar_position: 5
---
# Comandos de Git -- Parte 2

## git request-pull
- El comando **git request-pull** se utiliza para generar un resumen de los cambios que has realizado en una rama local y enviar una solicitud de extracción (pull request) al propietario del repositorio original.
- Este comando es útil cuando estás colaborando en un proyecto de código abierto o trabajando en un entorno donde necesitas enviar tus cambios a otra persona para su revisión y posible fusión en el repositorio principal.
- La sintaxis básica del comando es la siguiente:
```git
git request-pull [-p] <inicio> <URL> [<fin>]
```
:::tip Observación
- &lt;inicio>: Especifica el inicio de la rama que va a contener tus cambios (todavia no los tiene, pero los quiere agregar/integrar). Puede ser un commit específico o una rama local.
- &lt;final>: Especifica el final de la rama que contiene tus cambios. Esto suele ser la punta de la rama en la que has estado trabajando. Esta es opcional.
- &lt;URL>: Especifica la URL del repositorio remoto. Es opcional y su valor por defecto es origin.
- Puedes usar la opcion **-p**: Es una opción opcional que genera un formato de salida más detallado.
:::

- El comando **git request-pull** generará un resumen de la lista de commits entre el inicio y el final especificados, junto con una descripción de los cambios. Este resumen se puede compartir con el propietario del repositorio remoto, quien puede revisar los cambios y decidir si desea fusionarlos en el repositorio principal.
- Es importante destacar que el comando **git request-pull** no realiza la solicitud de extracción en sí misma; simplemente genera un resumen que se puede enviar por correo electrónico u otro medio de comunicación. La solicitud de extracción real se realiza típicamente a través de plataformas de alojamiento de código como GitHub, GitLab o Bitbucket, donde se puede abrir una solicitud de extracción y adjuntar o referenciar el resumen generado por **git request-pull**.

#### Ejemplo
```git
git request-pull origin/main https://github.com/tu-usuario/tu-repositorio.git my-feature-branch
```
:::tip Observación
- Esto generaríá un resumen de los cambios realizados en la rama my-feature-branch y mostraría la URL del repositorio remoto https://github.com/tu-usuario/tu-repositorio.git, lo que facilitaría que el propietario del repositorio remoto pueda revisar y fusionar los cambios.
:::

#### Otro ejemplo

```git
git request-pull -p origin/main .
```

:::tip Observación
- El comando **git request-pull -p origin/main**  está solicitando un resumen de cambios entre el commit más reciente en la rama origin/main y el commit actual (punto) en tu rama local, utilizando la opción **-p** para obtener un formato de salida más detallado.
- Desglosemos la sintaxis:
   -	**git request-pull**: Este es el comando principal para generar solicitudes de extracción.
   -	**-p**: Esta opción indica que se debe incluir información detallada en la salida.
   -	origin/main: Especifica el inicio de la rama que contiene los cambios que quieres enviar para la solicitud de extracción. En este caso, origin/main se refiere al commit más reciente en la rama main del repositorio remoto llamado origin.
   - ".": Representa el final de la rama que contiene los cambios. En este contexto, "." indica el commit actual en tu rama local.
:::

#### [Documentación](https://git-scm.com/docs/git-request-pull)


## git remote
- SVN utiliza un único repositorio centralizado para servir como centro de comunicación para los desarrolladores, y la colaboración se lleva a cabo pasando conjuntos de cambios entre las copias de trabajo de los desarrolladores y el repositorio central. Esto es diferente del modelo de colaboración distribuida de Git, que le da a cada desarrollador su propia copia del repositorio, completa con su propia historia local y estructura de ramas.
- Normalmente, los usuarios necesitan compartir una serie de confirmaciones en lugar de un único conjunto de cambios. En lugar de enviar un conjunto de cambios de una copia de trabajo al repositorio central, Git le permite compartir ramas enteras entre repositorios.
- El comando **git remote** es responsable de sincronizar los cambios. Los registros registrados a través del comando **git remote** se utilizan junto con el  **git fetch**, **git push** ,y **git pull**. 
- El comando **git remote** le permite crear, ver y eliminar conexiones a otros repositorios.
- Las conexiones remotas se parecen más a marcadores que a enlaces directos a otros repositorios. En lugar de proporcionar acceso en tiempo real a otro repositorio, sirven como nombres convenientes que pueden usarse para hacer referencia a una URL no tan conveniente.
- Por ejemplo, el siguiente diagrama muestra dos conexiones remotas desde su repositorio al repositorio central y al repositorio de otro desarrollador. En lugar de hacer referencia a ellos mediante sus URL completas, puede pasar los accesos directos de origen y john a otros comandos de Git.
![Diagrama remoto](https://wac-cdn.atlassian.com/dam/jcr:df13d351-6189-4f0b-94f0-21d3fcd66038/01.svg?cdnVersion=1328)

#### Descripción general del uso remoto de git
- El comando git remote es esencialmente una interfaz para administrar una lista de  conexiones remotas que se almacenan en el archivo  ./.git/config del repositorio. 
#### Ver configuraciones remotas de git
- Para enumerar las conexiones remotas que tiene con otros repositorios:
```git
git remote
```
- Para incluir la URL de cada conexión:
```git
git remote -v
```
#### Crear y modificar configuraciones remotas de git
- El comando **git remote** también es un método conveniente o "ayudante" para modificar el archivo ./.git/config de un repositorio.
- Para crear una conexión remota:
```git
git remote add <name> <url>
```
:::tip Observación
- Con este comando, creamos una nueva conexión a un repositorio remoto(&lt;url>). Después de agregar un “acceso remoto”, podrá utilizar &lt;name> como un atajo conveniente para url en otros comandos de Git.
:::
- Para eliminar una conexión al repositorio remoto:
```git
git remote rm <name>
```
- Para cambiar el nombre de una conexión remota de &lt;old-name＞a &lt;new-name＞:
```git
git remote rename <old-name> <new-name>
```
#### Discusión remota de git
- Git está diseñado para brindar a cada desarrollador un entorno de desarrollo completamente aislado. Esto significa que la información no se transmite automáticamente de un repositorio a otro. En cambio, los desarrolladores deben extraer manualmente las confirmaciones ascendentes a su repositorio local o enviar manualmente sus confirmaciones locales al repositorio central. El comando **git remote** es en realidad una forma más sencilla de pasar URL a estos comandos de "compartir".
#### El origen remoto
- Cuando clonas un repositorio con **git clone**, automáticamente crea una conexión remota llamada origen que apunta al repositorio clonado. Esto es útil para los desarrolladores que crean una copia local de un repositorio central, ya que proporciona una manera fácil de  integrar cambios ascendentes o publicar confirmaciones locales. Este comportamiento también es la razón por la que la mayoría de los proyectos basados en Git llaman origen a su repositorio central.
#### URL del repositorio
- Git admite muchas formas de hacer referencia a un repositorio remoto. Dos de las formas más sencillas de acceder a un repositorio remoto son a través de los protocolos HTTP y SSH. HTTP es una forma sencilla de permitir el acceso anónimo y de solo lectura a un repositorio. Por ejemplo:
```git
http://host/path/to/repo.git
```
- Pero, por lo general, no es posible enviar confirmaciones a una dirección HTTP (de todos modos, no querrás permitir envíos anónimos). Para acceso de lectura y escritura, debes usar SSH en su lugar:
```git
ssh://user@host/path/to/repo.git
```
:::tip Observación
- Necesitará una cuenta SSH válida en la máquina host, pero aparte de eso, Git admite el acceso autenticado a través de SSH de forma inmediata. Las soluciones modernas de alojamiento seguro de terceros, como Bitbucket.com, le proporcionarán estas URL.
:::


#### Comandos remotos de Git
- El comando **git remote** es uno de los muchos comandos de Git que requieren 'subcomandos' adicionales añadidos. A continuación, se muestra una lista de los subcomandos comúnmente utilizados.


#### ADD
```git
ADD <NAME> <URL>
```
- Agrega un registro en ./.git/config, para una conexión remota, nombrada como  &lt;name＞ para la URL del repositorio remoto &lt;url＞.
- Acepta una opción **-f** que  ejecutará **git fetch** inmediatamente después de que se cree el registro remoto.
- Acepta una opción **--tags** que ejecutará **git fetch**  y importará inmediatamente cada etiqueta desde el repositorio remoto.

#### RENAME
```git
RENAME <OLD> <NEW>
```
- Actualiza ./.git/config para cambiar el nombre del registro ＜OLD＞a ＜NEW＞. Se actualizan todas las ramas de seguimiento remoto y los ajustes de configuración del control remoto.

#### REMOVE
```git
REMOVE or RM <NAME>
```
- Modifica ./.git/config y elimina el  registro llamado ＜NAME＞. Se eliminan todas las ramas de seguimiento remoto y los ajustes de configuración del control remoto.

#### GET-URL
```git
GET-URL <NAME>
```
- Genera las URL de una conexión remota.
- Acepta **--push** para consultar las URL push en lugar de buscar las URL.
- Con **--all**, se enumerarán todas las URL de una conexión remota.
- Entonces una conexión remota contiene varias URL.
#### SHOW
```git
SHOW <NAME>
```
- Genera información de alto nivel sobre la conexión remota ＜NAME＞
#### PRUNE
```git
PRUNE <NAME>
```
- Elimina las ramas locales ＜NAME＞que no están presentes en el repositorio remoto.
- Acepta una opción **--dry-run** que enumerará qué ramas están configuradas para podarse(eliminarse), pero en realidad no las podará.
#### Ejemplos remotos de Git
- Además del origen, suele ser conveniente tener una conexión con los repositorios de tus compañeros de equipo. Por ejemplo, si su compañero de trabajo, John, mantenía un repositorio de acceso público en dev.example.com/john.git, podría agregar una conexión de la siguiente manera:

```git
git remote add john http://dev.example.com/john.git
```

:::tip
- Tener este tipo de acceso a los repositorios de desarrolladores individuales hace posible colaborar fuera del repositorio central. Esto puede resultar muy útil para equipos pequeños que trabajan en un proyecto grande.

:::

#### Mostrando tus controles remotos
- De forma predeterminada, el comando **git remote** enumerará las conexiones remotas  almacenadas. Esto producirá una salida de una sola línea que enumera los nombres de las conexiones remotas:

```git
git remote
origin
upstream
other_users_repo
```

Al invocar **git remote** con la opción **-v** se imprimirá la lista de nombres  de las conexiones y, además, la URL correspondiente. La opción **-v** significa "detallado". A continuación, se muestra un ejemplo:

```git
git remote -v
origin  git@bitbucket.com:origin_user/reponame.git (fetch)
origin  git@bitbucket.com:origin_user/reponame.git (push)
upstream    https://bitbucket.com/upstream_user/reponame.git (fetch)
upstream    https://bitbucket.com/upstream_user/reponame.git (push)
other_users_repo    https://bitbucket.com/other_users_repo/reponame (fetch)
other_users_repo    https://bitbucket.com/other_users_repo/reponame (push)

```
:::tip Observación
- Cada conexión remota tiene varias url.
- Cada url corresponde a una acción como fetch, push , etc.
:::
#### Agregar repositorios remotos
- El comando **git remote add** creará un nuevo registro de conexión a un repositorio remoto.
- Después de agregar un registro, podrás usar el nombre de este como un atajo conveniente para usar en otros comandos de Git.
- Este comando creará un nuevo registro dentro del repositorio ./.git/config. A continuación se muestra un ejemplo de esta actualización del archivo de configuración ./.git/config:
```git
git remote add fake_test https://bitbucket.com/upstream_user/reponame.git; 
```
- En el archivo de configuración, sería algo así:
```git
[remote "fake_test"] 
   url = https://bitbucket.com/upstream_user/reponame.git 
   fetch = +refs/heads/*:refs/remotes/remote_test/*
```
#### Inspeccionar una conexión remota
- Se puede agregar el subcomando show para brindar información detallada sobre la configuración de una conexión remota. Esta salida contendrá una lista de ramas asociadas con el control remoto(conexión remota) y también los puntos finales(endpoint) adjuntos para buscar(fetch) y enviar(push):

```git
git remote show upstream
* remote upstream
   Fetch URL: https://bitbucket.com/upstream_user/reponame.git
   Push URL: https://bitbucket.com/upstream_user/reponame.git
   HEAD branch: main
   Remote branches:
      main tracked
      simd-deprecated tracked
      tutorial tracked
   Local ref configured for 'git push':
      main pushes to main (fast-forwardable)

```

#### Obtener la conexión remota desde otros comandos
- Una vez que se ha configurado un registro remoto mediante el uso del comando **git remote**, el nombre de la conexión remota se puede pasar como argumento a otros comandos de Git para comunicarse con el repositorio remoto. En los comandos **git fetch** y **git pull**  se puede utilizar para leer un repositorio remoto. 
- De hecho en muchos comandos, se utiliza la conexión remota por defecto (origin) como valor predeterminado.
#### Git push
- El comando **git push** se utiliza para escribir en un repositorio remoto:
```git
git push <remote-name> <branch-name>
```
:::tip Observación
- Este ejemplo cargará el estado local de ＜branch-name＞al repositorio remoto especificado por ＜remote-name＞.
:::

#### Cambiar el nombre y eliminar controles remotos (Conexiones remotas)
- Para cambiar el nombre de una conexión remota, se utiliza el siguiente comando:
```git
git remote rename <old-name> <new-name>
```
:::tip Observación
- El nombre del subcomando se explica por sí mismo. Cuando se ejecuta, este comando cambiará el nombre de una conexión remota de ＜old-name＞a ＜new-name＞. También modificará el contenido de  ./.git/config  para cambiar el nombre del registro de la conexión remota allí también.

:::

- Para eliminar una conexión remota, se utiliza el siguiente comando:

```git
git remote rm <name>
```

:::tip Observación
- El comando eliminará la conexión al repositorio remoto. También modificará el contenido de  ./.git/config para eliminar el registro.
:::
## git branch
#### Ramas
- Las ramas de Git son efectivamente un puntero a una instantánea de sus cambios. 
- Cuando desea agregar una nueva característica o corregir un error, sin importar cuán grande o pequeño sea, genera una nueva rama para encapsular sus cambios. Esto hace que sea más difícil que el código inestable se fusione en la base de código principal y le brinda la oportunidad de limpiar el historial  antes de fusionarlo en la rama principal.
![Diagrama de rama](https://wac-cdn.atlassian.com/dam/jcr:a905ddfd-973a-452a-a4ae-f1dd65430027/01%20Git%20branch.svg?cdnVersion=1328)
- El diagrama anterior visualiza un repositorio con dos líneas de desarrollo aisladas, una para una función pequeña y otra para una función de mayor duración. Al desarrollarlos en ramas, no sólo es posible trabajar en ambos en paralelo, sino que también mantiene la  rama main  libre de código cuestionable.
- La implementación detrás de las ramas de Git es mucho más liviana que otros modelos de sistemas de control de versiones. En lugar de copiar archivos de un directorio a otro, Git almacena una rama como una referencia a una confirmación especifica. En este sentido, una rama representa el final de una serie de confirmaciones; no es un contenedor para confirmaciones. El historial de una rama se puede ver a través de las relaciones entre confirmaciones.
- Una rama no guarda todas las confirmaciones por sí misma. En lugar de eso, la rama sirve como un puntero o referencia a una confirmación específica en la historia del repositorio. Cada confirmación en Git tiene un identificador único, y una rama simplemente "apunta" al identificador de la confirmación más reciente de esa rama.
- Entonces, cuando se crea una nueva confirmación en una rama, la rama se actualiza para apuntar a esa nueva confirmación. Esto significa que una rama en Git representa el estado actual del proyecto en un momento específico, y no almacena directamente todas las confirmaciones previas. La información completa del historial se puede reconstruir siguiendo las relaciones de confirmación de una a otra. Este enfoque hace que las operaciones en Git, como la creación de ramas y fusiones, sean eficientes y livianas en comparación con algunos otros sistemas de control de versiones.
#### Como funciona
- Una rama representa una línea de desarrollo independiente.Las ramas de Git sirven como una abstracción que permite trabajar en diferentes líneas de desarrollo de manera independiente. Puede considerarlos como una forma de solicitar un directorio de trabajo, un área de preparación y un historial de proyectos completamente nuevos. Las nuevas confirmaciones se registran en el historial de la rama actual, lo que da como resultado una bifurcación en el historial del proyecto.
- El comando **git branch** le permite crear, enumerar, cambiar el nombre y eliminar ramas. No le permite cambiar entre ramas ni volver a armar un historial bifurcado. Por este motivo, **git branch** está estrechamente integrado con el comando **git checkout** y **git merge**.
#### Opciones comunes
- Para enumerar todas las ramas (te dice en qué rama estás ubicada también):
```git
git branch
## Es sinónimo de git branch --list
```
- Para crear una nueva rama llamada ＜branch＞. Esto no verifica la nueva sucursal:
```git
git branch <branch>
```

:::tip
Al hacer un commit y un push , git te da un comando para hacer un push en la rama nueva.

:::
- Para eliminar la rama especificada. Esta es una operación "segura" en el sentido de que Git le impide eliminar la rama si tiene cambios no fusionado:
```git
git branch -d <branch>
```
- Fuerce la eliminación de la rama especificada, incluso si tiene cambios no fusionados. Este es el comando que debe utilizar si desea descartar permanentemente todas las confirmaciones asociadas con una línea de desarrollo en particular:
```git
git branch -D <branch>
```
- Cambie el nombre de la rama actual a ＜branch＞:
```git
git branch -m <branch>
```
- Enumere todas las ramas remotas:
```git
git branch -a
```

#### Creando ramas
- Es importante comprender que las ramas son sólo indicadores de confirmaciones. Cuando creas una rama, todo lo que Git necesita hacer es crear un nuevo puntero, no cambia el repositorio de ninguna otra manera. Si comienza con un repositorio que se parece a este:
![Repositorio branch](https://wac-cdn.atlassian.com/dam/jcr:547aa16b-4bdd-45bc-9fbc-18e795dd9df1/02%20Creating%20branches.svg?cdnVersion=1328)

- Luego, crea una rama usando el siguiente comando:

```git
git branch crazy-experiment
```
- El historial del repositorio permanece sin cambios. Todo lo que obtienes es un nuevo puntero a la confirmación actual:

![Repositorio branch final](https://wac-cdn.atlassian.com/dam/jcr:387f080e-19b8-43ab-a7a3-0921ffd7298a/03%20Creating%20branches.svg?cdnVersion=1328)

- Tenga en cuenta que esto sólo crea la nueva rama. Para comenzar a agregarle confirmaciones, debe seleccionarlo con **git checkout** y luego usar los comandos estándar **git add**  y  **git commit**.

#### Creando ramas remotas
- Hasta ahora, todos estos ejemplos han demostrado operaciones de ramas locales. El comando **git branch** también funciona en ramas remotas. Para operar en ramas remotas, primero se debe configurar y agregar un repositorio remoto a la configuración del repositorio local:
```git
git remote add new-remote-repo https://bitbucket.com/user/repo.git
git push new-remote-repo crazy-experiment
```
:::tip Observación
- Este comando enviará una copia de la rama local crazy-experimental repositorio remoto.
:::
#### Eliminando ramas
- Una vez que haya terminado de trabajar en una rama y la haya fusionado en la base del código principal, podrá eliminar la rama sin perder ningún historial:

```git
git branch -d crazy-experiment
```

- Sin embargo, si la rama no se ha fusionado, el comando anterior generará un mensaje de error:
```git
error: The branch 'crazy-experiment' is not fully merged. If you are sure you want to delete it, run 'git branch -D crazy-experiment'.
```
- Esto le protege de perder el acceso a toda esa línea de desarrollo. Si realmente desea eliminar la rama (por ejemplo, es un experimento fallido), puede usar la opción **-D**:
```git
git branch -D crazy-experiment
```
:::tip Observación
- Esto elimina la rama independientemente de su estado y sin advertencias, así que úsala con prudencia.
:::
- Los comandos anteriores eliminarán una copia local de una rama. Es posible que la rama aún exista en repositorios remotos. Para eliminar una rama remota ejecute lo siguiente:

```git
git push origin --delete crazy-experiment
## o
git push origin :crazy-experiment

```

:::tip Observación
- Esto enviará una señal de eliminación al repositorio remoto que activa la eliminación de la rama remota crazy-experiment.
:::
#### Cambiar el nombre de la rama principal a main
``` git
git branch -m ramactual  ramanueva
```
- O  para futuros proyectos:
``` git
git config --global init.defaultBranch main 
```
## git config
- El comando **git config** se utiliza para establecer valores de configuración de Git a nivel de proyecto global o local. 
- Estos niveles de configuración corresponden a archivos de texto .gitconfig.
- La ejecución de **git config** modificará un archivo de texto de configuración.
#### Uso
- El caso de uso más básico de **git config** es invocarlo con un nombre de configuración, para mostrar el valor establecido en ese nombre.
- Los nombres de configuración son cadenas(texto) delimitadas por puntos (se utilizan los “puntos” para separar diferentes niveles jerárquicos) compuestas por una "sección" y una "clave" según su jerarquía. Por ejemplo user.email:

```git
git config user.email
```

:::tip Observación
- En este ejemplo, el correo electrónico es una propiedad secundaria del bloque de configuración del usuario. Esto devolverá la dirección de correo electrónico configurada, que Git asociará con las confirmaciones creadas localmente.
- Aquí, "user" es la sección y "email" es la clave dentro de esa sección. La estructura con puntos indica la jerarquía y la ubicación de esa configuración específica en el sistema de configuración de Git.
:::

- Un ejemplo de cómo se vería en el archivo de configuración de Git:
```git
[user]
    email = tu@email.com

```
#### Niveles y archivos de configuración de git
- El comando **git config** puede aceptar argumentos para especificar en qué nivel de configuración operar. Están disponibles los siguientes niveles de configuración:
#### Local:  --local
- De forma predeterminada, **git config** escribirá a nivel local si no se pasa ninguna opción de configuración. La configuración de nivel local se aplica al contexto en el que se invoca **git config** en el repositorio. Los valores de configuración local se almacenan en un archivo que se puede encontrar en el directorio .git del repositorio:  ".git/config".

#### Global:  --global
- La configuración de nivel global es específica del usuario, lo que significa que se aplica a un usuario del sistema operativo. Los valores de configuración global se almacenan en un archivo que se encuentra en el directorio de inicio de un usuario: "~/.gitconfig" en sistemas Unix y "C:\Users\nombreUsuario\\.gitconfig" en Windows.
#### System:  --system
- La configuración a nivel de sistema se aplica en toda una máquina. Esto cubre a todos los usuarios de un sistema operativo y todos los repositorios. 
- El archivo de configuración a nivel del sistema se encuentra en un archivo gitconfig fuera de la ruta raíz del sistema. "$(prefix)/etc/gitconfig" en sistemas unix. En Windows, este archivo se puede encontrar en "C:\Documents and Settings\All Users\Application Data\Git\config" en Windows XP y en "C:\ProgramData\Git\config" en Windows Vista y versiones posteriores.

:::tip Como obtener el valor de la variable $(prefix)
- La variable $(prefix) en el contexto de la ruta "$(prefix)/etc/gitconfig" generalmente se refiere al directorio de instalación de Git en el sistema. Para obtener el valor de $(prefix), puedes utilizar el siguiente comando:
```git
git --exec-path
```
- Este comando devuelve el directorio de ejecución de Git, que generalmente es el directorio de instalación.
- Normalmente su valor es "/usr/local".
:::
- Por lo tanto, el orden de prioridad para los niveles de configuración es: local, global, sistema. Esto significa que cuando busque un valor de configuración, Git comenzará en el nivel local y ascenderá hasta el nivel del sistema.  

#### Escribir un valor
- Veamos un ejemplo en el que escribimos un valor:
```git
git config --global user.email your_email@example.com
```
:::tip Observación
- Este ejemplo escribe el valor your_email@example.com  en el nombre de configuración user.email . Utiliza la bandera  **--global** para que este valor se establezca para el usuario actual del sistema operativo.
:::

#### git config  core.editor
- Muchos comandos de Git iniciarán un editor de texto para solicitar más entradas. Uno de los casos de uso más comunes de **git config** es configurar qué editor debe usar Git. A continuación, se incluye una tabla de editores populares y comandos coincidentes **git config**:

| Editor | Comando |
| - | - |
|  Atom |  git config --global core.editor "atom --wait" |
|  emacs |  git config --global core.editor "emacs" |
|  nano |  git config --global core.editor "nano -w" |
|  vim |  git config --global core.editor "vim" |
|  Sublime Text (Mac) |  git config --global core.editor "subl -n -w" |
|  Sublime Text (Win, 32-bit install) |  git config --global core.editor "'c:/program files (x86)/sublime text 3/sublimetext.exe' -w" |
|  Sublime Text (Win, 64-bit install) |  git config --global core.editor "'c:/program files/sublime text 3/sublimetext.exe' -w" |
|  Textmate |  git config --global core.editor "mate -w" |
|  Visual studio |  git config --global core.editor "code --wait" |

:::tip
- El valor puede ser la ruta completa del ejecutable del editor de código que se va a usar.
- Por ejemplo: "E:\\Microsoft VS Code\\bin\\code\ –wait"
- La opción **--wait** en Visual Studio Code (VS Code) se utiliza para hacer que el proceso que inicia VS Code espere hasta que el editor se cierre antes de continuar con la ejecución del siguiente comando.
- Cada editor tiene sus opciones.
:::
#### Herramientas para merge
- En caso de un conflicto de fusión, Git lanzará una "herramienta de fusión". De forma predeterminada, Git utiliza una implementación interna del programa de diferencias común de Unix. Hay muchas herramientas de fusión de terceros externos que se pueden utilizar en su lugar. 
- Por ejemplo:
```git
git config --global merge.tool kdiff3
```
#### Salidas coloreadas
- Git admite una salida de terminal en color, lo que ayuda a leer rápidamente la salida de Git. Puedes personalizar tu salida de Git para usar un tema de color personalizado. El comando  **git config** se utiliza para establecer estos valores de color.
- color.ui es el nombre de la configuración que se encarga de los colores. Establecerlo en false deshabilitará todas las salidas de terminales coloreadas de Git:
```git
git config --global color.ui false
```
- De forma predeterminada, color.ui está configurado en automático, lo que aplicará colores al flujo de salida. La configuración automática omitirá la salida del código a color si el flujo de salida se redirige a un archivo o se canaliza a otro proceso.
#### Valores de color
- Además de color.ui , hay muchas otras configuraciones de color. Al igual que  color.ui , todas estas configuraciones de color se pueden establecer en false, automático o siempre. Estas configuraciones de color también pueden tener un valor de color específico establecido. Algunos ejemplos de valores de color admitidos son:
    -	normal
    -	black
    -	red
    -	green
    -	yellow
    -	blue
    -	magenta
    -	cyan
    -	white
- Los colores también se pueden especificar como códigos de color hexadecimales cómo #ff0000 o valores de color ANSI 256 si su terminal lo admite.
#### Ajustes de configuración de color de git
#### color.branch
- Configura el color de salida del comando **git branch**.
#### color.branch.&lt;slot> 
- Este valor también es aplicable a la salida de **git branch**. 
- < slot> es uno de los siguientes valores: 
   - current: La rama actual.
   - local: La rama local.
   - remote: una referencia de rama remota en refs/remotes.
   - upstream: Una rama de seguimiento ascendente.
   - plain: Cualquier otra rama.
#### color.diff
- Aplica color a la salida de los comandos **git diff**, **git log** y **git show**.
#### color.diff.&lt;slot>
- Usar el valor &lt;slot> le dice que parte de la salida debe usar un color especifico:
   - context: El texto contextual de la diferencia. El contexto de Git son las líneas de contenido de texto que se muestran en el comando diff por ejemplo para resaltar los cambios. 
   - plain:  Se aplica cuando la salida es “plain” ósea sin formato especial.
   - meta:  Aplica colores a la metainformación de diff.
   - frag: Aplica color al "encabezado del fragmento".
   - old:  Aplica un color a las líneas eliminadas en la diferencia.
   - new: Colorea las líneas agregadas de la diferencia.
   - commit:  Permite personalizar el color de las líneas que representan las diferencias entre dos commits.
   - whitespace: establece un color para cualquier error de espacio en blanco en una diferencia.
#### color.decorate
- Personaliza el color de la salida del comando  **git log –-decorate**.
####  color.decorate.&lt;slot>
- Usar el valor &lt;slot> le dice que parte de la salida debe usar un color especifico:
   - branch
   - remoteBranch
   - tag
   - stash
   - head
- Son aplicables a ramas locales y remotas (seguimiento), etiquetas, cambios ocultos y archivos.
#### color.grep
- Persona el color de la salida del comando **git grep**.
#### color.grep.&lt;slot>
- Tambien aplica a **git grep**.
- La variable &lt;slot> especifica a qué parte de la salida se le aplicará color:
   - context: Texto que no coincide en líneas de contexto.
   - filename:  Prefijo del nombre de archivo.
   - function: Líneas de nombre de función.
   - linenumber: Prefijo del número de línea.
   - match: Texto coincidente.
   - matchContext:  Hacer coincidir texto en líneas de contexto.
   - matchSelected: Texto coincidente en líneas seleccionadas. 
   - selected: Texto que no coincide en las líneas seleccionadas. 
   - separator: Separadores entre campos en una línea (:, -, y =) y entre fragmentos (--).
#### color.interactive
- Esta variable aplica el color para indicaciones y pantallas interactivas. 
- Ejemplos:
```git
git add --interactive
git clean --interactive 
```
#### color.interactive.&lt;slot>
- La variable &lt;slot> le permite especificar a que parte de una  “salida interactiva” asignarle un color.
- Los valores son: propt, header, help , error.
- Cada uno actúa sobre la salida interactiva correspondiente.
#### color.pager
- Activa o desactiva la salida en color cuando el buscapersonas(pager) está en uso.
#### color.showBranch
- Habilita o deshabilita la salida de color para el comando **git show branch**.
#### color.status
- Un valor booleano que habilita o deshabilita la salida de color para el estado de Git.
#### color.status.&lt;slot>
- Se utiliza para especificar un color personalizado para elementos de estado de git específicos.
- Sus valores son:
  - header : Apunta al texto del encabezado del área de estado.
  - added or updated :  Archivos de destino que se agregan pero no se confirman.
  - changed: Se dirige a archivos que se modifican pero no se agregan al índice de git.
  - untracked: Apunta a archivos que no son rastreados por Git.
  - branch:  Aplica color a la rama actual.
  - nobranch : El color en el que se muestra la advertencia "no hay rama".
  - unmerged : Apunta a archivos que tienen cambios no fusionados.

#### Alias
- Son atajos personalizados que definen qué comando se expandirá a comandos más largos y/o combinados. 
- Los alias le ahorran el tiempo y el coste de energía que supone escribir comandos utilizados con frecuencia. 
- Git proporciona su propio sistema de alias. Un caso de uso común para los alias de Git es acortar el comando de confirmación. Los alias de Git se almacenan en el archivo de configuración de Git. Esto significa que puede utilizar el comando **git config** para configurar alias:

```git
git config --global alias.ci commit
```
:::tip Observación
- Este ejemplo crea un alias ci para el comando **git commit**. Luego puede invocar **git commit** ejecutando **git ci**. 
:::

- Los alias también pueden hacer referencia a otros alias para crear combos potentes:
```git
git config --global alias.amend ci –-amend
```
:::tip Observación
- Este ejemplo crea una modificación de alias que compone el alias ci en un nuevo alias que usa **--amend** .
:::

#### Formato y espacio en blanco 
- Git tiene varias funciones de "espacios en blanco" que se pueden configurar para resaltar problemas de espacios en blanco al usar **git diff**. Los problemas de espacios en blanco se resaltarán usando el  "color.diff.whitespace".
- Las siguientes funciones están habilitadas de forma predeterminada:
   -	blank-at-eol: Resalta los espacios en blanco huérfanos al final de las líneas.
   -	space-before-tab: Resalta un carácter de espacio que aparece antes de un carácter de tabulación al sangrar una línea.
   -	blank-at-eof: Resalta las líneas en blanco insertadas al final de un archivo.
- Las siguientes funciones están deshabilitadas de forma predeterminada
   -	indent-with-non-tab: Resalta una línea que tiene sangría con espacios en lugar de tabulaciones.
   -	tab-in-indent: Resalta una sangría con  tab  como un error.
   -	trailing-space: Es una abreviatura de  blank-at-eol  y blank-at-eof.
   - tabwidth=X: Define cuántas posiciones de caracteres ocupa un tab. El valor predeterminado es 8. Los valores permitidos son 1-63.




## Git grep
- **git grep** es un comando en Git que se utiliza para buscar patrones en el contenido de los archivos de un repositorio.
- Es similar al comando grep utilizado en sistemas Unix y Linux, pero **git grep** está optimizado para buscar solo en los archivos que están bajo control de versión en un repositorio Git.
- Entonces te permite encontrar líneas de códigos, archivos o cualquier otro patrón especifico en tu proyecto.
- Utiliza expresiones regulares.
- La sintaxis básica de **git grep** es la siguiente:
```git
git grep <patrón>
```
:::tip Observación
- &lt;patrón> es el patrón que estás buscando. Puedes proporcionar opciones adicionales para personalizar la búsqueda según tus necesidades.
:::

#### Ejemplos
- Búsqueda de un patrón en todos los archivos del repositorio:
```git
git grep "mi_patrón"
```
- Búsqueda de un patrón en archivos específicos:
```git
git grep "mi_patrón" archivo1.txt archivo2.txt
```
- Búsqueda con opciones de línea de comandos, como ignorar mayúsculas/minúsculas:
```git
git grep -i "mi_patrón"
```
- Búsqueda en un commit específico:

```git
git grep "mi_patrón" <commit>
```

:::tip
- **git grep** puede ser una herramienta útil para buscar rápidamente a través de los archivos de tu repositorio, y es especialmente eficiente al buscar solo en los archivos que están bajo control de versión. Ten en cuenta que **git grep** usa expresiones regulares para el patrón de búsqueda, por lo que puedes aprovechar la potencia de las expresiones regulares en tus búsquedas.
:::

## Git show
- **git show** se utiliza para ver detalles ampliados sobre objetos Git, como blobs, árboles, etiquetas y confirmaciones. 
- **git show** tiene un comportamiento específico por tipo de objeto.
- Las etiquetas muestran el mensaje de la etiqueta y otros objetos incluidos en la etiqueta. Los árboles muestran los nombres y el contenido de los objetos de un árbol. Los blobs muestran el contenido directo del blob. Las confirmaciones muestran un mensaje de confirmación y una salida de diff de los cambios en la confirmación.
- Se accede a todos los objetos Git mediante referencias. Por defecto, **git show** actúa contra la referencia HEAD. La referencia HEAD siempre apunta a la última confirmación de la rama actual. Por lo tanto, puede utilizarlo **git show** para mostrar el mensaje de registro y la salida de diff de la última confirmación.

#### Opciones
#### &lt;Object>
- Se puede pasar una referencia de un objeto o una lista de objetos para examinar esos objetos específicos. Si no se pasan objetos, el valor predeterminado de **git show** es la referencia HEAD.
#### --pretty[=&lt;format>]
- &lt;format> puede ser oneline , short , medium , full , fuller , email , raw y format:&lt;string＞.
- Si se omite, el formato predeterminado es medium.
- Cada opción de formato es una plantilla diferente sobre cómo Git formatea la salida del programa.
- La opcion oneline puede ser útil para mostrar una lista de commit.
#### --abbrev-commit
- Esta opción acorta la longitud de los ID de confirmación en la salida. Los ID de confirmación tienen 40 caracteres y pueden ser difíciles de ver en pantallas de terminal estrechas. 
- Esta opción combinada con **--pretty=oneline** puede producir un resultado muy conciso en la salida de **git log**.
#### --no-abbrev-commit
- Muestra siempre el ID de confirmación completo de 40 caracteres. Esto ignorará **abbrev-commit** y cualquier otra opción que abrevie los ID de confirmación.
#### --oneline
- Este es un atajo que expande(ejecuta) dos opciones: **--pretty=oneline** y **-–abbrev-commit**.
#### --encoding[=&lt;encoding＞]
- La codificación de caracteres en los mensajes de la salida de Git tiene como valor predeterminado UTF-8. La opción de codificación puede cambiar a una salida de codificación de caracteres diferente. Esto es útil si está trabajando con Git en un entorno con codificación de caracteres diferente, como una terminal de idioma asiático.
#### --expand-tabs=＜n＞
#### --expand-tabs
#### --no-expand-tabs
- Estas opciones reemplazan los caracteres de tabulación con espacios en la salida del comando. El valor n se puede establecer para configurar cuántos caracteres de espacio se expanden los tabs. Sin un valor n explícito, los tabs se expandirán a 8 espacios. **--no-expand-tabs** es equivalente a n=0.
#### --notes=＜ref＞
#### --no-notes
- Git tiene un sistema de notas que permite adjuntar metadatos de "notas" a los objetos. Estos datos se pueden ocultar o filtrar al utilizar **git show**.
- Las notas en Git son información adicional que se puede adjuntar a los commits u otro objeto.
- Cuando usas **--notes=&lt;ref>**, estás indicando a Git donde recuperar las notas.
#### --show-signature
- Esta opción validará que la confirmación esté firmada con una firma cifrada pasándola a un subcomando gpg.

#### Bonitos formatos 
- La opción  **--pretty** comentada anteriormente acepta varias opciones secundarias para modificar el formato de salida de **git show**, las veremos a continuación.
- oneline:
```git
＜sha1> ＜title line>
```
- short:
```git
commit ＜sha1＞
 Author: ＜author＞
 ＜title line＞

```
- medium:

```git
commit ＜sha1＞
 Author: ＜author＞
 Date: ＜author date＞
 ＜title line＞
 ＜full commit message＞

```
- full:
```git
commit ＜sha1＞
 Author: ＜author＞
 Commit: ＜committer＞
 ＜title line＞
 ＜full commit message＞

```
- fuller:
```git
commit ＜sha1＞
 Author: ＜author＞
 AuthorDate: ＜author date＞
 Commit: ＜committer＞
 CommitDate: ＜committer date＞
 ＜title line＞
 ＜full commit message＞

```
- email:
```git
From ＜sha1＞ ＜date＞
 From: ＜author＞
 Date: ＜author date＞
 Subject: [PATCH] ＜title line＞
 ＜full commit message＞

```

- raw:  Genera la confirmación exactamente como está almacenada en el objeto. Raw ignorará **–-abrev...** , **--no-abbrev...**  y otras opciones.
- format: El formato permite la especificación de un formato de salida personalizado. La  opción **--pretty=format** toma una cadena(string) como valor secundario , este string va a representar la plantilla. La plantilla tiene acceso a variables de marcador de posición que se remplazarán con datos del objeto de confirmación. Algunos de estos marcadores de posición se enumeran a continuación:
   - %H:  hash del commit.
   - %h:  hash abreviado del commit.
   - %T: hash del árbol.
   - %t:  hash abreviado del árbol.
   - %P: hashes de los padres.
   - %p: hashes abreviados de los padres.
   - %an: nombre del autor.
   - %ae: correo electrónico del autor.
   - ¡Existen muchos más, a investigar!
#### Ejemplos
- Esto enumerará todos los archivos que fueron tocados en una confirmación:
```git
git show --pretty="" --name-only bd61ad98
```
- Esto mostrará una versión específica de un archivo. Reemplace el REVISON con un sha (identificador(id) de una referencia como un commit):
```git
git show REVISION:path/to/file
```
- Esto mostrará la etiqueta v2.0.0  de la confirmación 6ef002d74cbbc099e1063728cab14ef1fc49c783:

```git
git show v2.0.0 6ef002d74cbbc099e1063728cab14ef1fc49c783
```
:::tip Observación
- El comando solicitará a Git que muestre la información detallada del commit identificado por el hash 6ef002d74cbbc099e1063728cab14ef1fc49c783 que se encuentra en la etiqueta v2.0.0
- Ten en cuenta que si la etiqueta v2.0.0 no contiene el commit identificado por el hash proporcionado, Git no mostrará ninguna información. Se debe proporcionar el hash de un commit válido en la rama o etiqueta especificada.

:::
- Esto generará todas las confirmaciones en el rango de commitA a commit D , ambos inclusive:
```git
git show commitA...commitD
```
:::tip Diferencia entre el uso de dos puntos (..) y tres puntos (...) 
- Dos puntos (..): El rango commitA..commitD incluirá todos los commits que están en la historia de commitD pero no en la historia de commitA. En otras palabras, mostrará los commits que se hicieron en la rama de commitD pero no en la rama de commitA:
```git
git show commitA..commitD
```
- Tres puntos (...): El rango commitA...commitD mostrará todos los commits que están en la historia de commitA o en la historia de commitD, pero no en ambas. Esencialmente, muestra la diferencia simétrica entre las dos ramas:
```git
git show commitA...commitD
```
- En resumen, si utilizas dos puntos (..), obtendrás los commits que están en la historia de uno pero no en el otro. Si utilizas tres puntos (...), obtendrás la diferencia simétrica, es decir, los commits que están en la historia de uno o en la historia del otro, pero no en ambos.
:::

## git note
- El comando **git note** en Git se utiliza para adjuntar notas a objetos Git, como commits. Estas notas son pequeños fragmentos de información que puedes agregar para proporcionar contexto, instrucciones o detalles adicionales sobre un commit o cualquier otro objeto identificable de Git.
- La sintaxis básica del comando **git note** es la siguiente:
```git
git note add -m "Tu mensaje de nota" <commit SHA-1>
```
:::tip Observación
- Esto añadirá una nota al commit especificado con el mensaje proporcionado. Aquí, &lt;commit SHA-1> es el identificador único del commit al cual deseas agregar la nota.
:::

#### Ejemplos
- Agregar una nota a un commit:
```git
git note add -m "Esta es una nota para el commit" abcdef123
```
- Ver notas asociadas a un commit:
```git
git log --show-notes
```
:::warning
- Según la documentación, la opción **--show-notes** esta obsoleta. Use  **--notes/--no-notes** en su lugar

:::
:::tip Observación
- Esto mostrará las notas asociadas a cada commit en el historial.
:::

:::tip
- Las notas en Git pueden ser útiles para proporcionar información adicional, como el propósito de un cambio, enlaces a problemas relacionados o cualquier otra información relevante. Ten en cuenta que las notas no afectan directamente al contenido de los commits y no alteran la historia del repositorio, pero pueden ser útiles para la documentación y el seguimiento del trabajo realizado en un proyecto.

:::
#### Relación con git show  --notes=&lt;ref>
- Cuando adjuntas notas a objetos Git utilizando **git note**, esas notas se almacenan en el directorio "refs/notes/nombreObjeto".
- Por ejemplo , las notas a los commits se guardan en "refs/notes/commits" de manera predeterminada.
- La opción **--notes=&lt;ref>** de git show te permite visualizar las notas asociadas a un commit o a otro objeto identificable que se guardan en un directorio especifico.
- Por ejemplo, si has añadido una nota a un commit con:
```git
git note add -m "Esta es una nota" abcdef123
```
- Luego puedes visualizar esa nota usando **git show --notes=refs/notes/commits**:
```git
git show --notes=refs/notes/commits abcdef123
```
#### Más ejemplos
- Puedes agregar una nota a un commit, y que se guarde en un directorio específico:
```git
git note add -m "Nota importante" -m "refs/notes/misnotas" abcdef123
```
- Luego, al querer mostrar esas notas, puedes utilizar:
```git
git show --notes=refs/notes/misnotas abcdef123
```
## Alias de git
- El término "alias" es sinónimo de "acceso rápido".
- Los alias se usan para crear comandos cortos que ejecutan comandos largos.
- Dado que obligan a pulsar menos teclas para ejecutar un comando, aumentan la eficiencia de los flujos de trabajo. 
- Pongamos un breve ejemplo tomando en consideración el comando **git checkout**. El comando "checkout" es un comando muy usado de Git que, con el tiempo, acaba obligando a pulsar muchas teclas. Se puede crear un alias que asigne **git co** a **git checkout**. Usar **git co**, obliga a pulsar menos teclas, ahorra al usuario el esfuerzo teclear un comando más largo.
#### Descripción general de los alias de Git
- Es importante tener en cuenta que no existe un comando git alias tal cual. Los alias se crean mediante el comando **git config** y los archivos de configuración de Git. Al igual que sucede con otros valores de configuración, los alias se pueden crear con un alcance local o global.
- Para comprender mejor cómo funcionan los alias de Git, vamos a crear unos cuantos como ejemplos:
```git
 git config --global alias.co checkout
 git config --global alias.br branch
 git config --global alias.ci commit
 git config --global alias.st status
```
:::tip Observación
- En el ejemplo de código anterior, se crean accesos rápidos almacenados de forma global para comandos habituales de Git. Al crear los alias, no se modificarán los comandos de origen. De este modo, **git checkout** seguirá estando disponible aunque ya tengamos el alias **git co**. Estos alias se han creado con la marca **--global**, por lo que se almacenarán en el archivo de configuración del nivel de sistema operativo global de Git. 
:::

- El archivo .gitconfig se vería así:

```git
   [alias]
        co = checkout
            br = branch
            ci = commit
            st = status

```
#### Ejemplos
#### Uso de alias para crear nuevos comandos de Git
- Un patrón habitual de Git es eliminar del entorno de ensayo(indice) los archivos añadidos recientemente. Esto se realiza aprovechando las opciones del comando **git reset**. Se puede crear un nuevo alias que englobe este comportamiento y crear un nuevo alias-comando-palabra clave que sea fácil de recordar:
```git
git config --global alias.unstage 'reset HEAD --'
```
- En el ejemplo de código anterior, se crea un nuevo alias unstage. Ahora, se puede invocar **git unstage**, que restablecerá el área del entorno de ensayo. Esto hace que los dos comandos siguientes sean equivalentes:

```git
git unstage fileA
git reset HEAD –- fileA
```
#### Métodos para crear alias
#### 1- Edición directa de los archivos de configuración de git
- Los archivos de configuración globales o locales se pueden editar de forma manual  para crear los alias. El archivo de configuración global se encuentra en la ruta de archivo "$HOME/.gitconfig". La ruta local se encuentra en un repositorio de Git activo en "/.git/config".
- Los archivos de configuración respetarán una sección [alias] que tiene el siguiente aspecto:

```git
[alias]
 co = checkout
```
:::tip Observación
- Esto implica que co es un acceso rápido para checkout.
:::
#### 2- Uso del comando git config
- El comando **git config** es una utilidad cómoda para crear alias de forma rápida. **git config** es en realidad una utilidad auxiliar para escribir en los archivos de configuración de Git globales y locales:

```git
git config --global alias.co checkout
```

:::tip Observación
- Al invocar este comando se actualizará el archivo de configuración global subyacente tal y como se había editado en el ejemplo anterior.

:::

#### Resumen
- Los alias de Git son una potente herramienta de flujo de trabajo que crea accesos rápidos a los comandos de Git más usados. Al usarlos, programarás de una forma más rápida y eficiente. Los alias se pueden usar para agrupar una secuencia de comandos de Git en un nuevo falso comando de Git. Los alias de Git se crean mediante el comando **git config** que, básicamente, modifica los archivos de configuración de Git locales o globales.
## Git tag
- Las etiquetas son referencias que apuntan a puntos concretos en el historial de Git.
- Generalmente, el etiquetado se usa para capturar un punto en el historial que se utiliza para una publicación de versión marcada (por ejemplo, v1.0.1).
- Una etiqueta es como una rama que no cambia. A diferencia de las ramas, las etiquetas, tras crearse, no tienen más historial de confirmaciones.
####  Creación de una etiqueta
- Para crear una nueva etiqueta que apunte al commit más reciente en la rama actual, ejecuta el siguiente comando:
```git
git tag <tagname>
```
:::tip Observación
- Sustituye < tagname > con un identificador semántico del estado del repositorio en el momento en el que se crea la etiqueta. Un patrón habitual es utilizar números de versión como **git tag v1.4**. 
:::
- Git admite dos tipos diferentes de etiquetas: etiquetas anotadas y ligeras. En el ejemplo anterior, se ha creado una etiqueta ligera.
- Las etiquetas ligeras y las anotadas difieren en la cantidad de metadatos adjuntos que almacenan. Una práctica recomendada es considerar las etiquetas anotadas como públicas y las etiquetas ligeras como privadas. 
- Las etiquetas anotadas almacenan metadatos adicionales como los siguientes: el nombre de la persona que etiqueta, su correo electrónico y la fecha. Son datos importantes para una publicación pública. 
- Las etiquetas ligeras son básicamente “marcadores” de una confirmación; son solo un nombre y un puntero a una confirmación, útiles para crear enlaces rápidos a las confirmaciones relevantes.
#### Etiquetas anotadas
- Las etiquetas anotadas se almacenan como objetos completos en la base de datos de Git. 
- Para que quede claro, almacenan metadatos adicionales como los siguientes: el nombre de la persona que etiqueta, su correo electrónico y la fecha. 
- Al igual que las confirmaciones, las etiquetas anotadas tienen un mensaje de etiquetado. Además, por seguridad, las etiquetas anotadas pueden firmarse y verificarse con GNU Privacy Guard (GPG). 
- La práctica recomendada para el etiquetado de git es dar preferencia a las etiquetas anotadas por encima de las ligeras, para poder tener todos los metadatos asociados.
- Al ejecutar el siguiente comando, se creará una nueva etiqueta anotada identificada como v1.4:
```git
git tag -a v1.4
```
:::tip Observación
- Luego de ejecutar el comando, el comando abrirá el editor de texto predeterminado configurado para solicitar que se introduzcan más metadatos.

:::

- El siguiente comando es similar a la invocación anterior; sin embargo, esta versión del comando incluye la opción -m y un mensaje:
```git
git tag -a v1.4 -m "my version 1.4"
```
:::tip Observación
- Se trata de un comando  similar a **git commit -m** que creará inmediatamente una nueva etiqueta y renunciará a abrir el editor de texto local a favor de guardar el mensaje que se pasa con la opción **-m**.
:::      
#### Etiquetas ligeras
- Con el siguiente comando, creamos una etiqueta ligera identificada como v1.4-lw:
```git
git tag v1.4-lw
```
:::tip Observación
- Las etiquetas ligeras se crean con la ausencia de las opciones **-a**, **-s** o **-m**. 
:::

- Cuando creas una etiqueta ligera en Git, lo que está sucediendo es que estás creando una referencia simple a un commit específico.
- La etiqueta ligera se representa internamente como una suma de verificación (hash) que apunta al commit al que está asociada. Esta suma de verificación se almacena en el directorio ".git" del repositorio, específicamente en el directorio "refs/tags/". Este archivo contiene la referencia a la última etiqueta creada.
- En resumen, al crear una etiqueta ligera, estás esencialmente creando una referencia sencilla a un commit, y esa referencia (o suma de verificación) se guarda en un archivo en el directorio ".git" del repositorio. Esto permite que Git asocie fácilmente la etiqueta con el commit correspondiente.

:::tip Suma de verificiación
- Una suma de verificación, también conocida como hash, es un valor único y fijo generado a partir de datos de entrada, como un archivo o un conjunto de datos. El propósito principal de una suma de verificación es verificar la integridad de los datos y asegurarse de que no han cambiado.
:::

#### Lista de etiquetas
- Para elaborar una lista de las etiquetas almacenadas en un repositorio, ejecuta lo siguiente:
```git
git tag
```
- El resultado será una lista de etiquetas:
```git
v0.10.0
    v0.10.0-rc1
    v0.11.0
    v0.11.0-rc1
    v0.11.1
    v0.11.2
    v0.12.0
    v0.12.0-rc1
    v0.12.1
    v0.12.2
    v0.13.0
    v0.13.0-rc1
    v0.13.0-rc2
```
- Para perfeccionar la lista de etiquetas, se puede usar la opción **-l** con una expresión comodín:
```git
git tag -l *-rc*
    v0.10.0-rc1
    v0.11.0-rc1
    v0.12.0-rc1
    v0.13.0-rc1
    v0.13.0-rc2
    v0.14.0-rc1
    v0.9.0-rc1
    v15.0.0-rc.1
    v15.0.0-rc.2
    v15.4.0-rc.3

```
:::tip Observación
- En este ejemplo anterior, se utiliza la opción **-l** y una expresión comodín -rc que devuelve una lista de todas las etiquetas marcadas con un prefijo -rc, tradicionalmente utilizado para identificar candidatos de publicación.
:::

#### Etiquetar confirmaciones antiguas
-  De manera predeterminada, **git tag** creará una etiqueta que haga referencia a la confirmación a la que HEAD hace referencia. 
-  **git tag** puede usarse para crear una referencia a una confirmación específica.
-  Para recopilar una lista de confirmaciones más antiguas, ejecuta el comando **git log**:
```git
git log --pretty=oneline
```
- Al ejecutar **git log**, aparecerá una lista de confirmaciones, seleccionaremos una para la nueva etiqueta.
- Tendremos que hacer referencia al hash SHA (identificador(id)) de la confirmación al crear la etiqueta:
```git
git tag -a v1.2 15027957951b64cf874c3557a0f3547bd83b3ff6
```
:::tip Observación
- Al ejecutar el comando anterior, se creará una nueva  etiqueta anotada identificada como v1.2 para la confirmación que hemos seleccionado.
:::

:::tip
- Puedes utilizar la opción **-m** también.

:::

#### Mostrar información 
- Para mostrar información de una etiqueta usamos el siguiente comando:
```git
git show nombreTag
```

#### Remplazar etiquetas
- Si intentas crear una etiqueta con el mismo identificador que una etiqueta existente, Git lanzará un error como el siguiente:
```git
fatal: tag 'v0.4' already exists
```
- Asimismo, si intentas etiquetar una confirmación más antigua con un identificador de etiqueta existente, Git lanzará el mismo error.
- En el caso de que tengas que actualizar una etiqueta existente, debe utilizarse la opción **-f** (**--force**):
```git
git tag -a -f v1.4 15027957951b64cf874c3557a0f3547bd83b3ff6
```
:::tip Observación
- Al ejecutar el comando anterior, se asignará la confirmación 15027957951b64cf874c3557a0f3547bd83b3ff6 al identificador de etiquetas v1.4. Esto sobrescribirá cualquier contenido existente de la etiqueta v1.4.
:::

#### Compartir etiquetas
- Compartir etiquetas es similar a enviar ramas. De manera predeterminada, **git push** no enviará etiquetas. Las etiquetas se tienen que usar explícitamente en **git push**:
```git
git push origin v1.4
```
- Para enviar varias etiquetas al mismo tiempo, usa la opción **--tags** en el comando git push. Cuando otro usuario clone un repositorio o incorpore cambios en él, recibirá las nuevas etiquetas.
- Para compartir todas las etiquetas:
```git
git push --tags
```

#### Ver el estado de una etiqueta
- Puedes ver el estado de un repositorio que representa una versión(etiqueta) con el comando **git checkout**:
```git
git checkout v1.4
```
:::tip Observación
- El comando anterior extraerá la etiqueta v1.4. Esta acción dejará el repositorio en un estado de HEAD desasociado, lo que significa que ningún cambio que se haga actualizará la etiqueta, sino que creará una nueva confirmación desasociada.
- Esta nueva confirmación desasociada no formará parte de ninguna rama y solo se podrá acceder a ella directamente mediante el hash SHA de la confirmación. Por lo tanto, es recomendable crear una nueva rama cada vez que hagas cambios en un estado de HEAD desasociado.
:::

#### Eliminar etiquetas
- La eliminación de etiquetas es una operación sencilla. Al usar la opción **-d** y un identificador de etiqueta de git tag, se eliminará la etiqueta identificada:
```git
 git tag
    v1
    v2
    v3
 git tag -d v1
 git tag
    v2
    v3

```
:::tip Observación
- En este ejemplo, se ejecuta **git tag** para visualizar una lista de etiquetas que muestra v1, v2 y v3. A continuación, se ejecuta **git tag -d v1**, lo que elimina la etiqueta v1.
:::

#### Aclaración
- &lt;tagname> es el nombre que le das a una etiqueta, puede seguir algunas reglas, pero en general, la elección del nombre es bastante flexible.
- Algunas de las convenciones y consideraciones son:
    - Versiones Semánticas (Semantic Versioning - SemVer): Para etiquetas que representan versiones de software, algunas personas siguen la convención de Versiones Semánticas (SemVer), que utiliza un formato como "MAJOR.MINOR.PATCH". Por ejemplo, "v1.0.0".
    - Convenciones de nomenclatura: Puedes utilizar letras, números, guiones y guiones bajos en los nombres de las etiquetas. Sin embargo, evita caracteres especiales que puedan causar problemas en algunos contextos.
    - Prefijos: Algunas personas prefieren usar prefijos para indicar el propósito de la etiqueta. Por ejemplo, "v1.0.0" para una versión, "release-1.0.0" para una versión de lanzamiento, etc.
    - Evitar confusión: Es aconsejable evitar nombres que puedan ser confusos o que ya se estén utilizando para otros fines en el proyecto.
- Es importante destacar que las etiquetas en Git son simplemente referencias a un commit específico y, por lo tanto, el nombre de la etiqueta es principalmente para tu conveniencia y la de otros colaboradores del proyecto. No hay reglas estrictas, pero seguir convenciones comunes puede hacer que tu proyecto sea más fácil de entender y mantener.
## Git blame
- El comando **git blame** en Git se utiliza para mostrar quién modificó por última vez cada línea de un archivo y cuándo se realizaron esas modificaciones. Este comando es útil para rastrear la autoría de cambios específicos en un archivo a lo largo de su historial.
- Te permite visualizar metadatos del autor adjuntos a líneas confirmadas(se enviarón en un commit) específicas en un archivo.  Esto se utiliza para examinar puntos específicos del historial de un archivo y obtener contexto sobre quién fue el último autor que modificó la línea. Esto se utiliza para explorar el historial de un código específico y responder preguntas sobre qué, cómo y por qué se agregó el código a un repositorio.
- La sintaxis básica del comando **git blame** es:
```git
git blame archivo
```

:::tip Observación
- Esto mostrará el contenido del archivo junto con la información sobre la última modificación de cada línea, incluyendo el hash del commit, el autor, la marca de tiempo y el contenido de la línea en esa versión.
:::
- Algunos parámetros y opciones comunes para **git blame** incluyen:
   -	**-L n,m**: Especifica un rango de líneas en el archivo para rastrear la autoría. Por ejemplo, **git blame -L 10,20 archivo** mostrará la autoría para las líneas 10 a 20 del archivo.
   -	**-C**: Busca similitudes en el archivo para rastrear líneas copiadas, renombradas, movidas de otros archivos.
   -	**-M**: Similar a **-C**, pero busca en el mismo archivo.
   -	**-C -C**: Busca cambios aún menos similares.

#### Cómo funciona
- Para  usar **git blame** necesitamos un repositorio con algo de historia. Usaremos el proyecto de código abierto [git-blame-example](https://bitbucket.org/kevzettler/git-blame-example/src/master/) . Este proyecto de código abierto es un repositorio simple que contiene un archivo README.md que tiene algunas confirmaciones de diferentes autores.
- El primer paso es clonar el repositorio:
```git
git clone https://kevzettler@bitbucket.org/kevzettler/git-blame-example.git && cd git-blame-example
```
- Ahora ejecutamos:
```git
Git log
```
- **git blame** sólo funciona en archivos individuales. Se requiere una ruta de archivo para cualquier resultado útil. La ejecución predeterminada de **git blame** simplemente generará el menú de ayuda de comandos. 
- Para este ejemplo, operaremos en el archivo README.MD. Es una práctica común de software de código abierto incluir un archivo README en la raíz de un repositorio git como fuente de documentación para el proyecto:
```git
git blame README.md
```

- Para comprender mejor este resultado, analicemos la línea 3:
  
| Identificación |  Autor | Marca de tiempo | Número de linea | Contenido de línea |
| - | - | -| - | - |
| 89feb84d | Albert So   |  2018-03-01 00:54:03 +0000 |  3 |  This repository is an example of a project with multiple contributors making commits. |


- Si observamos bien la lista que genera **git blame**, podemos hacer algunas observaciones. Hay tres autores enumerados. Además del mantenedor del proyecto, Kev Zettler, también figuran en la lista Albert So y Juni Mukherjee. Los autores son generalmente la parte más valiosa de **git blame**. La columna de marca de tiempo también es principalmente útil. El cambio se indica en la columna de contenido de línea.


#### Opciones
- La opción **-L** restringirá la salida al rango de líneas solicitado. Aquí hemos restringido la salida a las líneas 1 a 5:
```git
git blame -L 1,5 README.md
```
- La opción **-e** muestra la dirección de correo electrónico del autor en lugar del nombre de usuario:
```git
git blame -e README.md
```
- La opción **-w** ignora los cambios de espacios en blanco. Si un autor anterior ha modificado el espaciado de un archivo cambiando de tabulaciones a espacios o agregando nuevas líneas, esto, desafortunadamente, oscurece el resultado de  **git blame** al mostrar estos cambios:
```git
git blame -w README.md
```
- La opción **-M** detecta líneas movidas o copiadas dentro del mismo archivo. Esto informará el autor original de las líneas en lugar del último autor que movió o copió las líneas:
```git
git blame -M README.md
```
- La opción **-C** detecta líneas que fueron movidas o copiadas de otros archivos. Esto informará el autor original de las líneas en lugar del último autor que movió o copió las líneas:
```git
git blame -C README.md
```

#### Ejemplos
- Este comando mostrará la autoría para cada línea de miarchivo.txt junto con el hash del commit, el autor y la marca de tiempo de la última modificación:
```git
git blame miarchivo.txt
```
- Supongamos que queremos rastrear la autoría de las líneas 5 a 10 de un archivo llamado miarchivo.txt. Este comando mostrará la autoría de las líneas 5 a 10 de miarchivo.txt:
```git
git blame -L 5,10 miarchivo.txt
```
- Si queremos rastrear líneas que han sido copiadas o renombradas de otros archivos, podemos utilizar la opción **-C**:
```git
git blame -C miarchivo.txt
```
:::tip Observación
- Este comando buscará similitudes en los archivos y mostrará la autoría, incluso para líneas copiadas o renombradas.
:::

- La opción **-M** es similar a **-C**, pero busca cambios menos similares:
```git
git blame -M miarchivo.txt
```
:::tip Observación
- Esta opción también busca similitudes, pero es menos estricta en cuanto a la similitud necesaria.
- Las similitudes las busca en el mismo archivo.
:::

- La opción **-C -C** busca cambios de archivo aún menos similares:
```git
git blame -C -C miarchivo.txt
```
:::tip Observación
- Esta opción busca similitudes de manera más flexible, incluso menos similares que **-M**.
:::

#### Git blame vs git log
- Si bien **git blame** muestra el último autor que modificó una línea, muchas veces querrás saber cuándo se agregó originalmente una línea. Esto puede ser complicado de lograr usando **git blame**. Requiere una combinación de las opciones **-w**, **-C** y **-M**. Puede ser mucho más conveniente utilizar el comando **git log**.
- Para enumerar todas las confirmaciones  en las que se agregó o modificó una pieza de código específica, ejecute **git log** con la opción **-S**.
- Añade la opción **-S** con el código que estás buscando:

```git
git log -S"CSS3D and WebGL renderers." --pretty=format:"%h %an %ad %s"
```

- Para que nos aparezca al menos un resultado en el README.md:

```git
git log -S"TEMPOR" --pretty=format:"%h %an %ad %s"
```
:::tip Observación
- Este comando nos mostrara los commits en los que se agregó o modifico el código que ingreso.
- En base a esta información, podemos saber quién lo agrego originalmente, cuando y en que commit.
:::
- En resumen:
   -	**git log** es para explorar el historial completo del repositorio, viendo todas las confirmaciones y sus mensajes asociados.
   -	**git blame** es para rastrear el historial (o historia) de un archivo específico, línea por línea, para entender quién realizó cambios en cada parte del código y en qué commit.
- Ambos comandos son herramientas poderosas para entender la evolución de un proyecto y para identificar la autoría de cambios en el código fuente.

## Git clean
- El comando **git clean** se utiliza para eliminar archivos no rastreados en el directorio de trabajo. Esto significa que elimina archivos que no están en el índice ni en un commit y que no están listados en el archivo ".gitignore". Es importante tener precaución al usar este comando, ya que eliminará permanentemente los archivos no rastreados.
- El comando **git clean** elimina archivos sin seguimiento.
- Los archivos sin seguimiento son archivos que se crearon dentro del directorio de trabajo de su repositorio pero que aún no se han agregado al indice utilizando **git add**.
- Junto con **Git reset**, se puede deshacer completamente de cualquier cambio y commit en un repositorio (local).
- La sintaxis básica es:
```git
git clean opciones
```
- Algunas opciones comunes incluyen:
  -  **-n** o **--dry-run**: Muestra qué archivos se eliminarían, pero no realiza la eliminación.
  -  **-f** o **--force**: Realiza la eliminación de los archivos no rastreados sin confirmación adicional.
  -  **-d** , **--directories**: Incluye directorios no rastreados al limpiar. Por defecto, git clean solo elimina archivos.
  -  **-dn** : es una combinación de **-d** y **-n**
  -  **-df** : es una combinación de **-d** y **-f**

- Por ejemplo, para realizar una limpieza seca y ver qué archivos se eliminarían, puedes usar:
```git
git clean -n
```
- Si estás seguro de que deseas eliminar los archivos no rastreados, puedes ejecutar:
```git
git clean -f
```
- O para incluir directorios no rastreados:
```git
git clean -fd
```

:::warning
- Recuerda que **git clean** es una operación irreversible y eliminará los archivos de manera permanente. Asegúrate de revisar cuidadosamente qué archivos se eliminarán antes de ejecutar el comando, especialmente si usas la opción **-f**.
:::
#### Ejemplo
- Para demostrar mejor la diferencia entre archivos con seguimiento y sin seguimiento, considere el siguiente ejemplo de línea de comando:
```git
 mkdir git_clean_test
 cd git_clean_test/
 git init .
 echo "tracked" > ./tracked_file
 git add ./tracked_file
 echo "untracked" > ./untracked_file
 mkdir untracked_dir && type nul > untracked_dir\file
 git status

```
:::tip Observación
- El ejemplo crea un nuevo repositorio Git en el directorio git_clean_test. Luego procede a crear un archivo tracked_file que se agrega al índice de Git; además, se crean otros dos archivos que no están en el índice.
:::

- Con el repositorio en este estado, podemos ejecutar el comando **git clean** para demostrar su propósito previsto.
- En este punto, ejecutar el comando **git clean** predeterminado puede producir un error fatal:
```git
fatal: clean.requireForce defaults to true and neither -i, -n, nor -f given; refusing to clean
```
- De forma predeterminada, Git está configurado globalmente para requerir que a **git clean** se le pase una opción de "forzar".
- Este es un importante mecanismo de seguridad. Cuando finalmente se ejecuta, **git clean** no se puede deshacer. Cuando se ejecute por completo, **git clean** realizará una eliminación definitiva del sistema de archivos. Asegúrese de que realmente desea eliminar los archivos sin seguimiento antes de ejecutarlo.
#### Opciones y usos comunes
#### -n
- La opción **-n** realizará un "ensayo (dry run)" de git clean. Esto le mostrará qué archivos se eliminarán sin eliminarlos realmente. Es una buena práctica realizar siempre primero un ensayo de git clean. Podemos demostrar esta opción en el repositorio de demostración que creamos anteriormente:
```git
git clean -n
Would remove untracked_file
```
:::tip Observación
- El resultado nos dice que untracked_file se eliminará cuando se ejecute el comando **git clean**. Tenga en cuenta que untracked_dir no se informa en el resultado aquí. Por defecto **git clean** no funcionará de forma recursiva en directorios. Este es otro mecanismo de seguridad para evitar la eliminación permanente accidental.
:::

#### -f o –-force
- La opción forzar inicia la eliminación real de archivos sin seguimiento del directorio actual.
- Esta opcion es obligatoria para ejecutar el comando a menos que la opción clean.requireForce de configuración esté establecida en false.
- Esto no eliminará las carpetas o archivos sin seguimiento especificados por ".gitignore".
- Ahora ejecutemos lo siguiente:

```git
git clean -f 
Removing untracked_file

```
:::tip Observación
- El comando generará una lista con los archivos que se eliminan. 
- Puedes ver aquí que untracked_file ha sido eliminado. Ejecutar **git status** en este punto o hacer un ls mostrará que untracked_file se ha eliminado y no se encuentra por ningún lado. De forma predeterminada, **git clean -f** funcionará en todos los archivos sin seguimiento del directorio actual. 
:::
- Además, se puede pasar un valor &lt;ruta> con la opción **-f** para eliminar un archivo específico:
```git
git clean -f <ruta>
```

#### -d
- La opción **-d** le dice a **git clean** que también desea eliminar los directorios sin seguimiento; de forma predeterminada, ignorará los directorios. Podemos agregar la opción **-d** a nuestros ejemplos anteriores:
```git
git clean -d
```
- En los siguientes comandos ejecutamos un 'ensayo' usando la combinación **-dn** que genera que untracked_dir esté listo para ser eliminado. Luego ejecutamos una limpieza forzada y recibimos un resultado que indica que se eliminó untracked_dir:
```git
git clean -dn
git clean -df
```
:::tip Observación
- En estos comandos, combinamos la opcion “d” con otras opciones como si fueran un solo argumento.
:::
#### -x
- Para el  lanzamiento de un software es común es tener un directorio de compilación o distribución que no esté comprometido con el índice de seguimiento de los repositorios. 
- El directorio de compilación contendrá artefactos de compilación efímeros que se generan a partir del código fuente confirmado. 
- Este directorio de compilación generalmente se agrega al archivo ".gitignore" de los repositorios. 
- Puede resultar conveniente limpiar también este directorio con otros archivos sin seguimiento. La opción **-x** le dice a **git clean** que también incluya los archivos ignorados. Al igual que con invocaciones anteriores de **git clean**, es una buena práctica ejecutar un 'ensayo' primero, antes de la eliminación final. La opción **-x** actuará en todos los archivos ignorados, no solo en los específicos de la compilación del proyecto. 

#### -xf
- Al igual que la opción **-d**, **-x** se puede pasar y componer con otras opciones. Este ejemplo demuestra una combinación con **-f** que eliminará los archivos sin seguimiento del directorio actual, así como cualquier archivo que Git normalmente ignora:
```git
git clean -xf
```
#### Modo interactivo
- **git clean** tiene un modo "interactivo" que puede iniciar pasando la opción **-i**. Volvamos al repositorio del [ejemplo](#ejemplo-1). En ese estado inicial, iniciaremos una sesión de limpieza interactiva:
```git
git clean -di
```
- Hemos iniciado la sesión interactiva con la opción **-d** para que también actúe sobre nuestro untracked_dir.
- El modo interactivo mostrará un mensaje What now> que solicita que se aplique un comando a los archivos sin seguimiento. Los comandos en sí se explican por sí solos:
    - 5: Para salir de la sesión interactiva.
    - 1: Eliminara los elementos indicados. Si lo ejecutamos borraríamos todos los archivos sin seguimiento.
    - 4: Iterara sobre cada archivo sin seguimiento y mostrara un mensaje Y/N para eliminarlo, donde  Y es SI y N es NO.
    - 2: Nos pedirá un patrón para filtrar la lista de archivos sin seguimiento. Aquí ingresamos el patrón comodín *_file que luego restringe la lista de archivos sin seguimiento a solo untracked_dir. Todos los que coinciden con el patrón se sacan de la lista de los archivos que se van a eliminar, ósea se excluyen.
    - 3: Al igual que el comando 2, funciona para refinar la lista de nombres de archivos sin seguimiento. La sesión interactiva solicitará números que correspondan a un nombre de archivo sin seguimiento.
## Git version
- El comando **git version** simplemente muestra la versión de Git que está instalada en tu sistema. Cuando ejecutas **git version**, Git imprimirá en la consola la información sobre la versión, que generalmente incluye el número de versión.
- Por ejemplo:
```git
git versión
```
- La salida puede ser algo como:
```git
git version 2.33.0
```
:::tip Observación
- Esto indica que la versión de Git instalada es la 2.33.0. La información exacta puede variar según la versión específica de Git que tengas instalada. Este comando es útil para verificar la versión de Git instalada en tu sistema, lo cual puede ser importante para asegurarte de estar utilizando las características y correcciones de errores más recientes.
:::

#### Git --version
- El comando **git –-version** se convierte internamente en el comando **git versión**, por lo tanto son comandos equivalentes y proporcionan la misma información: la versión de Git instalada en tu sistema.
- Por lo tanto, ambos de los siguientes comandos te darían la información sobre la versión de Git:
```git
git versión
git –version
```
#### [Documentación del supercomando git](https://git-scm.com/docs/git)
## Git help
- El comando **git help** se utiliza para obtener información sobre los comandos y conceptos de Git. 
- Puedes abrir una página en tu navegador web predeterminado con la documentación de un comando especifico con la siguiente sintaxis:
```git
Git help <comando>
```
- Por ejemplo, si deseas obtener ayuda sobre el comando **git pull**, puedes ejecutar:
```git
git help pull
```
:::tip Observación
- Esto abrirá la documentación relacionada con el comando **git pull**. Puedes utilizar **git help** seguido del nombre de cualquier comando de Git o concepto para obtener información detallada sobre su uso y opciones.
:::

- Además, también puedes utilizar la opción **--all** para ver una lista de todos los comandos de Git para los cuales hay documentación. Por ejemplo:
```git
git help –all
```

:::tip Observación
- Este comando imprimirá una lista de todos los comandos de Git para los cuales hay documentación, y luego puedes consultar la ayuda para un comando específico según sea necesario.

:::
## Git status 
- El comando **git status** muestra el estado del directorio de trabajo y del área del entorno de ensayo (índice). 
- Permite ver los cambios que se han preparado, los que no y los archivos en los que Git no va a realizar el seguimiento. 
- El resultado del estado no muestra ninguna información relativa al historial del proyecto. Para ello, debes usar **git log**.
#### Uso
- Enumera los archivos que se han preparado, los que están sin preparar y los archivos sin seguimiento:
```git
git status
```

#### Analisis
- El comando **git status** es un comando relativamente sencillo. Simplemente, muestra lo que ha ocurrido con los comandos **git add** y **git commit**. 
- Los mensajes de estado también incluyen información importante para preparar archivos (agregarlo al índice) o deshacer su preparación (eliminarlo del índice).
- Es recomendable comprobar el estado del repositorio antes de confirmar los cambios, para evitar confirmar por error algo que no querías. 
- Aquí hay un ejemplo simple de cómo se vería la salida del comando **git log** , con algunos cambios pendientes para agregar al índice y algunos archivos nuevos (sin seguimiento):

```git
On branch master
Your branch is up to date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   archivo_modificado.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        nuevo_archivo.txt

no changes added to commit (use "git add" and/or "git commit -a")

```
- Si no hay cambios para confirmar en tu repositorio, la salida del comando **git status** será algo así:
```git
On branch master
Your branch is up to date with 'origin/master'.

nothing to commit, working tree clean

```
- Algunos mensajes comunes son:
   - "Changes not staged for commit": Se detectaron cambios que no se guardaron en el índice.
   - "Changes to be committed": Son cambios que se agregaron al índice y, por lo tanto, están preparados para añadirse en la próxima confirmación.
   - “Nothing to commit (working directory clean)”: No hay ningún cambio para confirmar o añadir al índice. El directorio de trabajo coincide con la confirmación más reciente. Algunos comandos de git requieren que el directorio de trabajo este en este estado para no sobrescribir los cambios accidentalmente.
#### Ignorar archivos
- Los archivos sin seguimiento se suelen dividir en dos categorías. Pueden ser archivos que se acaban de añadir al proyecto y que no se han confirmado aún, o bien binarios compilados como .pyc, .obj, .exe, etc. 
- Mientras que resulta muy conveniente incluir los primeros en el resultado de **git status**, los segundos pueden limitar las posibilidades de ver lo que ocurre en realidad en tu repositorio.
- Por este motivo, Git te permite ignorar archivos completamente colocando rutas en un archivo especial denominado ".gitignore".
- Los archivos que quieras ignorar se deben incluir cada uno en una línea aparte y puedes usar el símbolo * como carácter comodín. Por ejemplo, añadir lo siguiente a un archivo ".gitignore" en la raíz del proyecto evitará que los módulos Python compilados aparezcan en **git status**:
```git
*.pyc
```

#### Opción -s
- La opción **-s** en el comando **git status** se utiliza para mostrar un resumen más conciso del estado del repositorio. En lugar de mostrar detalles completos sobre los cambios en los archivos, proporciona un formato corto y fácil de leer que resume la información esencial.
- Cuando ejecutas **git status -s**, obtienes una lista compacta de los cambios  en el área de trabajo y el área de preparación (staging). Los posibles estados incluyen:
   - M: Modificado.
   - A: Agregado (en el área de preparación).
   - D: Eliminado.
   - R: Renombrado.
   - C: Copiado.
   - ??: Archivo no seguido (untracked).
- El formato suele ser algo como "XY archivo", donde X representa el estado en el área de preparación y Y representa el estado en el directorio de trabajo. Por ejemplo, "M archivo" indica que el archivo ha sido modificado pero aún no ha sido agregado al área de preparación.
- Supongamos que tienes dos archivos modificados, uno agregado al área de preparación y uno eliminado. La salida del comando **git status -s** podría verse así:

```git
M  archivo_modificado1
M  archivo_modificado2
A  archivo_agregado
D  archivo_eliminado
```

:::tip Observación
- En este ejemplo:
   - archivo_modificado1 y archivo_modificado2 tienen cambios en el directorio de trabajo que aún no se han agregado al área de preparación.
   - archivo_agregado ha sido agregado al área de preparación, pero no se ha confirmado aún.
   -  archivo_eliminado ha sido eliminado en el directorio de trabajo, pero este cambio aún no se ha agregado al área de preparación.



::::
- Otro ejemplo más complejo:
```git
MM archivo_modificado1
MM archivo_modificado2
A  archivo_agregado
 D archivo_eliminado

```
:::tip Observación
- archivo_modificado1 y archivo_modificado2 tienen cambios en el directorio de trabajo  y también tienen cambios en el área de preparación.
- archivo_agregado ha sido agregado al área de preparación (indicado por A en el primer carácter), pero no tiene cambios en el directorio de trabajo.
- archivo_eliminado ha sido eliminado en el directorio de trabajo (indicado por D en el segundo carácter), pero este cambio aún no se ha agregado al área de preparación.
:::


## Git log 
- El comando **git log** se utiliza en Git para ver el historial de confirmaciones (commits) en un repositorio. Al ejecutar este comando  de Git, se muestra una lista de commits que incluye información relevante sobre cada uno, como el identificador único del commit (hash), el autor, la fecha y la hora de la confirmación, y el mensaje asociado al commit.
- La forma más básica de usar **git log** es simplemente escribirlo en la línea de comandos en el directorio del repositorio. Esto mostrará los commits en orden cronológico inverso, es decir, el commit más reciente aparecerá primero.
- Aquí hay un ejemplo simple de cómo se vería la salida del comando **git log**:
```git
commit c0dedata
Author: Nombre del Autor <autor@example.com>
Date:   Fecha y hora

    Mensaje del commit

commit abcd1234
Author: Otro Autor <otro_autor@example.com>
Date:   Otra Fecha y Hora

    Mensaje del segundo commit

```

:::tip Observación
- El comando **git log** muestra las instantáneas confirmadas (commits). Te permite ver el historial del proyecto (todos los commits que se hicieron hasta la fecha), filtrarlo y buscar cambios concretos. Mientras que **git statu**s te permite examinar el directorio de trabajo y el entorno de ensayo(índice), **git log** solo muestra el historial de commits.
:::

#### Uso
- Este comando muestra el historial de confirmaciones completo con el formato predeterminado. Si el resultado ocupa más de una pantalla, puedes usar "Espacio" para desplazarte y "q" para salir:
```git
git log
```
- La opción **-n &lt;limit>** limita el número de confirmaciones. Por ejemplo, **git log -n 3** mostrará solo 3 confirmaciones:
```git
git log -n <limit>
```
- Con la opcion **–-oneline** se resume la información de cada confirmación en una línea. Resulta útil para obtener información de alto nivel del historial del proyecto:
```git
git log --oneline 
```
- La opcion **–-stat** incluye información sobre los archivos que se han modificado y el número relativo de líneas que se han añadido o eliminado en cada uno de ellos:
```git
git log --stat
```
- La opcion **-p** muestra el parche(patch) que representa cada confirmación.  Se muestra la diferencia(diff) completa de cada confirmación, que es la vista más detallada que puedes tener del historial del proyecto:
```git
git log -p
```
:::tip ¿Qué es un patch?
- En el contexto de Git, un "patch" se refiere a la representación de los cambios realizados en un commit específico. Un patch describe las diferencias entre el estado anterior del código (anterior al commit) y el estado posterior del código (después del commit).
- Cuando creas un commit en Git, estás capturando un conjunto de cambios en tus archivos. El patch es la representación textual de estos cambios. Puedes ver el patch de un commit utilizando el comando **git show** seguido del identificador del commit:
```git
git show <identificador_del_commit>
```
:::
- La opcion **–-author=”&lt;pattern>”** busca confirmaciones de un autor en particular. El argumento ＜pattern＞ puede ser una cadena simple o una expresión regular:
```git
git log --author="<pattern>"
```
- La opcion -**–grep=”&lt;pattern>”**  busca confirmaciones con un mensaje de confirmación que coincida con ＜pattern＞, que puede ser una cadena simple o una expresión regular:
```git
git log --grep="<pattern>"
```
- Con el siguiente comando, mostramos las confirmaciones que se producen entre &lt;since> y &lt;until> .  Estos argumentos pueden ser un ID de confirmación, un nombre de rama, HEAD o cualquier otro tipo de referencia:
```git
git log <since>..<until>
```
- Con la opcion &lt;file> solo muestra las confirmaciones que incluyen el archivo especificado. Se trata de una forma sencilla de ver el historial de un archivo concreto:
```git
git log <file>
```
- Otras opciones:
```git
git log --graph --decorate –-oneline
```
##### --graph
- La opción **--graph** en el comando **git log** se utiliza para representar gráficamente la estructura del historial de commits. 
- Esta opción añade líneas y caracteres en la salida del comando para mostrar las relaciones entre las ramas y los commits de manera más visual.
- La marca **--graph** dibujará un gráfico basado en texto de las confirmaciones.
- Cuando ejecutas **git log** con la opción **--graph**, la salida será algo así:
```

* commit abc1234 (HEAD)
| Author: Autor A <autorA@example.com>
| Date:   Fecha y hora 1
|
|     Mensaje del commit 1
|
* commit def5678
| Author: Autor B <autorB@example.com>
| Date:   Fecha y hora 2
|
|     Mensaje del commit 2
|
* commit ghi9012
  Author: Autor A <autorA@example.com>
  Date:   Fecha y hora 3
  
      Mensaje del commit 3

```
:::tip Observación
- En este ejemplo, los caracteres * , | , y \ se utilizan para representar gráficamente la estructura del historial de commits. Cada línea vertical "|" representa una rama, los asteriscos "\*" representan los commits, y las líneas diagonales "\" conectan los commits para mostrar la relación de padre e hijo entre ellos.
- Esta representación visual facilita la comprensión de la estructura del historial de commits, especialmente cuando hay múltiples ramas y fusiones. La opción **--graph** es útil para tener una visión más clara y comprensible del historial de commits en entornos más complejos.
:::
#### --decorate
- La opcion **-–decorate** se utiliza para mostrar información adicional sobre las referencias (ramas y etiquetas) que apuntan a cada commit en la salida del comando. Esto es especialmente útil cuando estás explorando el historial de commits y deseas saber qué ramas o etiquetas están asociadas con cada commit.
- Cuando ejecutas **git log** con la opción **--decorate**, la salida podría verse así:
```git
commit abc1234 (HEAD, master)
Author: Autor A <autorA@example.com>
Date:   Fecha y hora 1

    Mensaje del commit 1

commit def5678 (branch1, origin/branch1)
Author: Autor B <autorB@example.com>
Date:   Fecha y hora 2

    Mensaje del commit 2

commit ghi9012 (tag: v1.0.0)
Author: Autor A <autorA@example.com>
Date:   Fecha y hora 3
  
    Mensaje del commit 3

```
:::tip Observación
- (HEAD, master) indica que la rama master y la cabeza (HEAD) del repositorio están apuntando a ese commit.
- (branch1, origin/branch1) indica que las ramas branch1 (local) y origin/branch1 (remota) están asociadas con ese commit.
- (tag: v1.0.0) indica que la etiqueta v1.0.0 está asociada con ese commit.
:::

- La opción **--decorate** proporciona información valiosa para entender rápidamente las relaciones entre los commits y las diversas ramas y etiquetas en tu repositorio. Esto es especialmente útil en proyectos más grandes o complejos donde hay múltiples ramas y etiquetas en uso.

#### --oneline
- La opcion **–-oneline**  se utiliza para mostrar cada commit en una única línea, proporcionando una vista más concisa del historial de commits. Cuando se combina con otras opciones, como **--graph** y **--decorate**, **--oneline** puede ofrecer una salida muy compacta y fácil de leer.
- Aquí hay un ejemplo de cómo se vería la salida de **git log --oneline**:
```git
abc1234 (HEAD, master) Mensaje del commit 1
def5678 (branch1, origin/branch1) Mensaje del commit 2
ghi9012 (tag: v1.0.0) Mensaje del commit 3

```
:::tip Observación
- En esta salida:
   - abc1234, def5678, y ghi9012 son los identificadores de los commits.
   - (HEAD, master) indica que HEAD y la rama master apuntan al primer commit.
   - (branch1, origin/branch1) indica que las ramas branch1 y origin/branch1 apuntan al segundo commit.
   - (tag: v1.0.0) indica que la etiqueta v1.0.0 apunta al tercer commit.
   - Mensaje del commit 1, Mensaje del commit 2, y Mensaje del commit 3 son los mensajes asociados con cada commit.
:::
- Esta opción es útil cuando deseas una visión rápida y compacta del historial de commits sin necesidad de ver detalles extensos. Puedes combinar **--oneline** con otras opciones como **--graph** y **--decorate** para obtener una vista aún más informativa y compacta.


#### --all
- La opción **--all** en **git log** se utiliza para mostrar el historial de todos los branches(ramas), en lugar de solo el branch actual.
- Cuando usas **git log** sin la opción **--all**, solo ves el historial de commits del branch en el que te encuentras actualmente. Sin embargo, si incluyes la opción **--all**, Git mostrará el historial de todos los branches.
- La sintaxis completa sería:
```git
git log --all
```
- Esto puede ser útil para ver cómo se ha desarrollado el proyecto en todos los branches, especialmente si estás trabajando con múltiples branches y quieres tener una visión más completa del historial de commits en el repositorio.
- Ejemplo de la salida del comando **git log --all**:

```git
commit abcdef1 (HEAD -> main, origin/main, origin/feature-branch)
Author: Usuario <usuario@example.com>
Date:   Tue Nov 30 12:00:00 2023 +0000

    Mensaje del commit en el branch principal

commit 1234567 (origin/feature-branch)
Author: Usuario <usuario@example.com>
Date:   Mon Nov 29 12:00:00 2023 +0000

    Mensaje del commit en la rama de características

commit 7890abc (origin/bugfix-branch)
Author: Usuario <usuario@example.com>
Date:   Sun Nov 28 12:00:00 2023 +0000

    Mensaje del commit en la rama de corrección de errores

```
:::tip Observación
- En el primer commit, las tres referencias (HEAD, main, y origin/main) están apuntando al mismo commit. Aquí hay una breve explicación de cada referencia:
    - HEAD: Es una referencia especial que indica la última confirmación en el branch actual. En este caso, HEAD está en el branch main.
    - origin/main: Es una referencia remota que indica la última confirmación en el branch main del repositorio remoto llamado "origin".
    - origin/feature-branch:  Es una referencia remota que indica la última confirmación en el branch feature-branch del repositorio remoto llamado "origin".
- abcdef1 es el último commit en el branch principal (main).
- 1234567 es el último commit en la rama de características (feature-branch).
- 7890abc es el último commit en la rama de corrección de errores (bugfix-branch).
- Al utilizar **git log --all**, puedes ver el historial de commits de todas las ramas, lo que facilita la visualización de la relación entre los diferentes branches y sus commits respectivos.
:::



#### Analisis
- Supongamos que tenemos el siguiente commit:
```git
commit 3157ee3718e180a9476bf2e5cab8e3f1e78a73b7
Author: John Smith
```

- La cadena de 40 caracteres que aparece después de commit es una suma de comprobación/verificación SHA-1 del contenido de la confirmación. Esto tiene dos finalidades. En primer lugar, garantiza la integridad de la confirmación (si se hubiera dañado en algún momento, la confirmación generaría una suma de comprobación distinta). En segundo lugar, actúa como ID exclusivo de la confirmación.
- Este ID se puede usar en comandos como **git log**  para hacer referencia a confirmaciones específicas. Por ejemplo, **git log 3157e..5ab91** mostrará todo el contenido entre las confirmaciones con los ID 3157e y 5ab91. Además de las sumas de comprobación/verificación, los nombres de ramas y la palabra clave HEAD son otros métodos habituales para referirnos a las confirmaciones individuales. HEAD siempre hace referencia a la confirmación actual, ya sea una rama o una confirmación específica.
- El carácter "~" resulta útil para crear referencias de commits relativas a una confirmación. Por ejemplo, 3157e~1 hace referencia a la confirmación anterior a 3157e y HEAD~3 hace referencia al tercer ancestro anterior del commit actual (en palabras más simples, sería el tercer commit anterior al commit actual).
#### Ejemplo
- En este ejemplo, se mostrará una comparativa completa de todos los cambios que John Smith ha realizado en el archivo hello.py :
```git
git log --author="John Smith" -p hello.py
```
- La sintaxis ".." es una herramienta muy útil para comparar ramas. En el siguiente ejemplo, se muestra una breve descripción de todas las confirmaciones presentes en some-feature que no lo están en main (la rama principal):
```git
git log --oneline main..some-feature
```


#### Ver las ramas
- Muestra de una manera visual las ramas, le puedes añadir él **–-all** antes de **–-graph**:
```git
git log --oneline --graph	
```

