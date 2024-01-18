---
sidebar_position: 3
---
# Guia GitHub 
## GitHub
- GitHub es una plataforma de desarrollo que permite hospedar y revisar código, administrar proyectos y compilar software junto con 50 millones desarrolladores.
- ¿Por qué todo el mundo compila en GitHub? Porque proporciona las características más importantes de DevOps que las empresas y las organizaciones de todos los tamaños necesitan para sus proyectos públicos y privados. Ya sea para planificar características, corregir errores o colaborar en cambios, GitHub es el lugar en el que los desarrolladores de software de todo el mundo se reúnen para trabajar y mejorar las cosas.
#### El flujo de GitHub
- Además de ser una plataforma de desarrollo de software colaborativo, GitHub ofrece también un flujo de trabajo diseñado para optimizar el uso de sus diversas características.
- [Flujo de trabajo.](https://docs.github.com/es/get-started/quickstart/github-flow)
#### Git y GitHub
- Cuando trabaje con Git y GitHub, es posible que se pregunte en qué se diferencian.
- Git es un sistema de control de versiones distribuido (DVCS) que permite que varios desarrolladores u otros colaboradores trabajen en un proyecto. Proporciona una manera de trabajar con una o varias ramas locales e insertarlas en un repositorio remoto. Git es responsable de todo lo que sucede localmente en el equipo relacionado con GitHub. Las características principales de Git incluyen:
   - Está instalado y se usa en el equipo local.
   - Se ocupa del control de versiones.
   - Admite la creación de ramas.
- GitHub es una plataforma en la nube que usa Git como tecnología principal. Simplifica el proceso de colaborar en proyectos y proporciona un sitio web, herramientas de línea de comandos y un flujo global que permite a los desarrolladores y usuarios trabajar juntos. GitHub actúa como el "repositorio remoto".
- Las características principales de GitHub incluyen:
   - Issues
   - Debates
   - Solicitudes de incorporación de cambios
   - Notificaciones
   - Etiquetas
   - Acciones
   - Bifurcación
   - Proyectos

#### Incidencias
-  Es el elemento en el que se produce la mayor parte de la comunicación entre los consumidores y el equipo de desarrollo de un proyecto. 
-  Puede crear una incidencia para analizar una amplia variedad de temas, como informes de errores, solicitudes de características, aclaraciones sobre la documentación, etc. 
-  Una vez creado un problema, puede asignar propietarios, etiquetas, proyectos e hitos. Las incidencias también se pueden asociar con solicitudes de incorporación de cambios y otros elementos de GitHub para proporcionar rastreabilidad en el futuro.
-  Es la mejor manera de notificar un error o propuesta en un proyecto de GitHub.
- Las incidencias de un proyecto son visibles para todas las personas que tengan acceso al proyecto, por lo que puede descubrir si ya hay una solución planificada o disponible. En caso de que no la haya, puede crear la incidencia y realizar un seguimiento.

![Incidencia](https://learn.microsoft.com/es-mx/training/github/introduction-to-github/media/2-issue.png)

[ Utiliza GitHub Issues para rastrear ideas, retroalimentación, tareas o errores para trabajar en GitHub.](https://docs.github.com/es/issues/tracking-your-work-with-issues/about-issues)
#### Notificaciones
- Como plataforma colaborativa, GitHub ofrece notificaciones para prácticamente todos los eventos que se producen en un flujo de trabajo determinado.
- Puede ajustar estas notificaciones en función de las preferencias. 
- Por ejemplo, puede suscribirse a todas las creaciones y ediciones de incidencias de un proyecto, o bien recibir notificaciones únicamente de las incidencias en las que se le mencione.
- También puede decidir si recibirá notificaciones por correo electrónico, por web y dispositivo móvil, o ambos. Para llevar un seguimiento de todas las notificaciones en distintos proyectos, use el panel de notificaciones de GitHub.
![Notificaciones](https://learn.microsoft.com/es-mx/training/github/introduction-to-github/media/2-notifications.png)
- [Elige el tipo de actividad en GitHub para el que deseas recibir notificaciones y cómo deseas que se entreguen estas actualizaciones.](https://docs.github.com/es/enterprise-server@3.10/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications)
#### Ramas
- Las ramas son la manera preferida de crear cambios en el flujo de GitHub. Proporcionan aislamiento para que varias personas puedan trabajar simultáneamente en el mismo código de manera controlada. Este modelo garantiza la estabilidad en las ramas críticas, como main, a la vez que da libertad a los desarrolladores para confirmar los cambios que necesiten para alcanzar sus objetivos. Una vez que el código de una rama está listo para formar parte de la rama main, puede combinarlo mediante una solicitud de incorporación de cambios.
- [Usa una rama para identificar tareas de desarrollo sin afectar otras ramas en el repositorio. Cada repositorio tiene una rama por defecto y puede tener muchas otras ramas. Puedes fusionar una rama en otra rama usando una solicitud de extracción.](https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)
#### Confirmaciones
- Un commit refleja uno o varios cambios en uno o varios archivos de una rama. Cada vez que se crea una confirmación, se le asigna un identificador único y se realiza un seguimiento de ella, junto con la hora y el colaborador. Esto proporciona un registro de auditoría claro para todas las personas que revisen el historial de un archivo o un elemento vinculado, como una incidencia o una solicitud de incorporación de cambios.
- [GitHub Desktop registra todos los cambios a medida que los editas. Puedes decidir cómo agrupar los cambios para crear confirmaciones significativas.](https://docs.github.com/es/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop)

#### Solicitudes de incorporación de cambios
- Una solicitud de incorporación de cambios es un mecanismo que sirve para indicar que las confirmaciones de una rama están listas para combinarse en otra. 
- El desarrollador que envíe la solicitud de incorporación de cambios normalmente solicitará a uno o varios revisores que comprueben el código y aprueben la combinación. 
- Estos revisores podrán comentar los cambios, agregar otros o usar la solicitud de incorporación de cambios para realizar un análisis más exhaustivo.
- Una vez que los cambios se han aprobado (en caso de que se requiera aprobación), la rama de origen de la solicitud de incorporación de cambios (la rama de comparación) se podrá combinar con la rama base.
- [Las solicitudes de incorporación de cambios te permiten comentarle a otros acerca de los cambios que has insertado en una rama de un repositorio en GitHub Enterprise Server. Una vez que se abre una solicitud de incorporación de cambios, puedes debatir y revisar los posibles cambios con los colaboradores y agregar confirmaciones de seguimiento antes de que los cambios se fusionen en la rama base.](https://docs.github.com/es/enterprise-server@3.10/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
#### Etiquetas
- Las etiquetas proporcionan una manera de categorizar y organizar las incidencias y las solicitudes de incorporación de cambios en un repositorio. 
- Al crear un repositorio de GitHub, se agregan automáticamente varias etiquetas. También puede crear nuevas.
- Estos son algunos ejemplos de etiquetas:
   - error
   - duplicar
   - Se solicita ayuda
   - mejora
   - question
- [Puedes clasificar propuestas, solicitudes de incorporación de cambios y debates si creas, editas, aplicas y borras las etiquetas.](https://docs.github.com/es/issues/using-labels-and-milestones-to-track-work/managing-labels)
#### Acciones
- Las acciones de GitHub proporcionan funcionalidades para el flujo de trabajo y automatización de tareas en un repositorio. 
- Puede usar las acciones para simplificar los procesos del ciclo de vida de desarrollo de software e implementar la integración y la implementación continuas (CI/CD).
- Conceptos importantes:
    -	Flujos de trabajo: procesos automatizados que se han agregado al repositorio. Ejecutan uno o mas trabajos.
    -	Eventos: actividades que desencadenan un flujo de trabajo.
    -	Trabajos: conjunto de pasos que se ejecutan en un ejecutor.
    -	Pasos: tarea que puede ejecutar uno o varios comandos (acciones).
    -	Acciones: comandos independientes que se pueden combinar y formar un paso. Puede combinar varios pasos para crear un trabajo. Realiza una tarea compleja pero que se repite frecuentemente. 
    -	Ejecutores: servidor que tiene instalada la aplicación de ejecutor de Acciones de GitHub.
- [Aprende lo básico de las GitHub Actions, incluyendo los conceptos nucleares y la terminología esencial.](https://docs.github.com/es/actions/learn-github-actions/understanding-github-actions)
#### Clonación y bifurcación
- GitHub proporciona varias maneras de copiar un repositorio para poder trabajar en él:
   - Clonar un repositorio: al clonar un repositorio, se realiza una copia del repositorio y de su historial en el equipo local. Si tiene acceso de escritura al repositorio, puede enviar los cambios de la máquina local al repositorio remoto (denominado origen) a medida que se completan. Para clonar un repositorio, puede usar el comando **git clone [url]** o el comando **gh repo clone [url]** de la CLI de GitHub.
   - Bifurcación de un repositorio: al bifurcar un repositorio, se realiza una copia del repositorio en la cuenta de GitHub. El repositorio principal se denomina ascendente, mientras que la copia bifurcada se conoce como origen. Una vez que haya bifurcado un repositorio en la cuenta de GitHub, puede clonarlo en el equipo local. La bifurcación permite realizar cambios libremente en un proyecto sin afectar al repositorio ascendente original. Para contribuir con cambios en el repositorio ascendente, cree una solicitud de incorporación de cambios desde el repositorio bifurcado. También puede ejecutar comandos git para asegurarse de que la copia local permanezca sincronizada con el repositorio ascendente.
- ¿Cuándo debería clonar un repositorio en lugar de bifurcarlo? Si está trabajando con un repositorio y tiene acceso de escritura, puede clonarlo en el equipo local. Desde allí, puede realizar modificaciones e introducir los cambios directamente en el repositorio de origen.
- Si necesita trabajar con un repositorio creado por otro propietario, como github/example, y no tiene acceso de escritura, puede bifurcar el repositorio en su cuenta de GitHub y, luego, clonar la bifurcación en el equipo local. Para representarlo visualmente, supongamos que su cuenta de GitHub se denomina githubtraining. A través del sitio web de GitHub, puede bifurcar github/example o cualquier otro repositorio en su cuenta. Desde allí, puede clonar la versión bifurcada del repositorio en el equipo local.
- Puede realizar cambios en la copia local de githubtraining/example y, a continuación, volver a insertarlos en el repositorio de origen remoto (githubtraining/example). A continuación, puede enviar estos cambios al repositorio github/exampleascendente mediante una solicitud de incorporación de cambios.
- [Una bifurcación es un nuevo repositorio que comparte código y configuraciones de visibilidad con el repositorio "ascendente" original.](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
#### Github Pages
- GitHub Pages es un motor de hospedaje(hosting) que está integrado directamente en la cuenta de GitHub. Si sigue una serie de convenciones y habilita la característica, puede crear su propio sitio estático generado a partir de código HTML y Markdown extraído directamente del repositorio.
- Es un hosting gratis de Github para probar paginas estáticas (HTML , CSS , JAVASCRIPT). Para hacerlo:
1. En el repositorio haces clic en Setting - Pages.
2. En Sources asegúrate que esté seleccionado "Deploy from a branch".
3. En Branch seleccionas la rama que va a contener los archivos estaticos.
4. en "/"(carpeta raíz del proyecto) deberia estar el index.html pero puede ser cambiado.
5. Haces clic en save y te genera el link (el cual demora en cargarse).
- [Más información.](https://pages.github.com/)

#### Archivo README.md de un repositorio.
- Es para documentar el proyecto , usa markdown.
#### Archivo .gitignore
- Sirve para ignorar archivos en el comando **add** o **commit**.
- En este archivo ingresas los archivos a ignorar , por ejemplo:


```env
.env
node_modules *.js
Archivo.js
```



## Ejercicio de GitHub
- ¿Qué es GitHub? : GitHub es una plataforma de colaboración que utiliza Git para el control de versiones. GitHub es un lugar popular para compartir y contribuir al software de código abierto .
- ¿Qué es un repositorio? : Un repositorio es un proyecto que contiene archivos y carpetas. Un repositorio rastrea versiones de archivos y carpetas. 
- ¿Qué es una rama?: Una rama es una versión paralela de su repositorio. De forma predeterminada, su repositorio tiene una rama nombrada main y se considera la rama definitiva. La creación de ramas adicionales le permite copiar la rama main de su repositorio y realizar cambios de forma segura sin interrumpir el proyecto principal. Mucha gente usa ramas para trabajar en funciones específicas sin afectar otras partes del proyecto. Las ramas le permiten separar su trabajo de la rama main. En otras palabras, el trabajo de todos está seguro.
- ¿Qué es un perfil README? : Un perfil README es esencialmente una sección "Acerca de mí" en su perfil de GitHub donde puede compartir información sobre usted con la comunidad en GitHub.com. GitHub muestra su perfil README en la parte superior de su página de perfil.   [Más información aquí.](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme)



#### Crear tu primera rama
1. Ingresamos con una cuenta a [Github](https://github.com/).
2. Abrimos un repositorio (si no tenemos, lo creamos).
3. En el apartado “Code”, hacemos clic en la rama principal (main) y se nos abrirá un menu desplegable.
4. En el “buscador” que dice “Find or create a Branch” , ingresamos el nombre de nuestra nueva rama, en este caso my-first-branch y luego hacemos clic en “Create branch: nombre-rama…”.
5. La rama cambiará automáticamente a la que acaba de crear. El menu desplegable de la rama principal reflejará su nueva rama y mostrará el nombre de la nueva rama.

#### Confirmar un archivo
- Crear una rama le permite editar su proyecto sin cambiar la rama main. Ahora que tienes una rama, es hora de crear un archivo y realizar tu primera confirmación.
- ¿Qué es una confirmación?: Una confirmación es un conjunto de cambios en los archivos y carpetas de su proyecto. 
- Una confirmación registra cambios en el cambio de nombre, cambio de contenido, creación de un nuevo archivo y cualquier otro cambio realizado en su proyecto.
- Para este ejercicio, realizar un cambio requiere primero agregar un nuevo archivo a su nueva rama.
- Pasos a seguir:
1. En la pestaña “Code” de su  nueva rama (fíjate en el menu desplegable) , hacemos clic en Add File y luego en Create new file.
2. En el “input” que dice “Name your file” ingresamos PROFILE.md

:::tip
- .md es una extensión de archivo que crea un archivo Markdown.
:::
3. En el área “Enter file contents here”  , ingresamos el siguiente contenido: Welcome to my GitHub profile!
4. Luego hacemos clic en “Commit changes…” para realizar la confirmación.
5. Puede ingresar un mensaje de confirmación breve que describa los cambios que realizó. Este mensaje ayuda a otros a saber qué está incluido en su confirmación. GitHub ofrece un mensaje predeterminado simple, pero vamos a cambiarlo ligeramente para practicar.  Ingrese Add PROFILE.md en el primer input de texto titulado "Commit message".
6. Luego hacemos clic en Commit Changes para crear la confirmación.


#### Abrir una pull request
- Pull request hace referencia a una “Solicitud de incorporación de cambios”.
- ¿Qué es un pull request? : La colaboración ocurre en una solicitud de incorporación (pull request) . La pull request muestra los cambios en su rama a otras personas y les permite aceptar, rechazar o sugerir cambios adicionales en su rama. En una comparación lado a lado, esta solicitud mantendrá los cambios que acaba de realizar en su rama y propondrá aplicarlos a la rama main del proyecto. 
- [Las solicitudes de extracción le permiten informar a otros sobre los cambios que ha hecho en una rama en un repositorio en GitHub. Una vez que se abre una solicitud de extracción, puede discutir y revisar los cambios potenciales con los colaboradores y agregar confirmaciones de seguimiento antes de que sus cambios se fusionen en la rama base.](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
- Es posible que luego de crear la confirmación se muestre un mensaje en amarillo indicando que se creó una confirmación en su rama y proporciona un botón que dice “Compare & pull request”.
- Entonces para hacer un pull request:
1. Hacemos clic en el botón “Compare & pull request” . Si hiciste clic en el botón pasa al paso 7, de lo contrario siga con los siguientes pasos.
2. Entramos a la pestaña Pull requests.
3. Hacemos clic en New pull request.
4. En el menu desplegable base, debe estar seleccionada la rama principal/definitiva que por defecto se suele llamar main.
5. En el menu desplegable compare, debe estar seleccionada la rama que vamos a comparar con la principal, para sugerirle cambios a main. En este caso my-first-branch.
6. Hacemos Clic en Create Pull request.
7. Todos estos pasos, nos pudimos ahorrar al hacer clic en el botón “Compare & pull request”. Ingrese un título para su solicitud de extracción. De forma predeterminada, el título será automáticamente el nombre de su rama. Para este ejercicio, editemos el campo para que diga “Add my first file”.
8. El siguiente campo le ayuda a proporcionar una descripción de los cambios que realizó. Aquí puede agregar una descripción de lo que ha logrado hasta ahora. Como recordatorio, usted: creó una nueva rama, creó un archivo y realizó una confirmación. En nuestro caso ponemos “I have created a new branch, created a file, and made a commit!”.
9. Hacemos clic en “Create pull request” para crear el pull request.


#### Fusionar tu pull request
- ¿Qué es una fusión(merge)? : Merge  agrega los cambios de su pull request en la rama principal (main).
- Pasos a seguir:
1. Hacemos clic en “Merge pull request” (es un boton verde que se encuentra abajo de “this branch has no conflicts with the base branch”).
2. Hacemos clic en Confirm merge.
3. Una vez que su rama se haya fusionado, ya no la necesitará. Para eliminar esta rama, haga clic en “Delete Branch” (esta “notificación” te la genera Github para avisarte que esta rama ya no es útil y se puede borrar).


## GitHub Codespaces
- GitHub Codespaces es un entorno de desarrollo totalmente configurado que se hospeda en la nube. Con GitHub Codespaces, el área de trabajo está disponible desde cualquier equipo con acceso a Internet, junto con todos los entornos de desarrollo configurados.
- GitHub Codespaces es un entorno de desarrollo instantáneo basado en la nube que usa un contenedor para proporcionar lenguajes, herramientas y utilidades comunes para el desarrollo.


#### Ciclo de vida de un codespace
- GitHub Codespaces se puede configurar, lo que le permite crear un entorno de desarrollo personalizado para el proyecto. 
- Al configurar un entorno de desarrollo personalizado para su proyecto, puede tener una configuración de codespace repetible para todos los usuarios del proyecto.
- El ciclo de vida de un codespace comienza cuando se crea y termina cuando se elimina. Puede desconectarse y reconectarse a un codespace activo sin que esto afecte a sus procesos en ejecución. También puede detener y reiniciar un codespace sin perder los cambios que haya realizado en su proyecto.

![Ciclo de vida](https://learn.microsoft.com/es-mx/training/github/code-with-github-codespaces/media/codespace-circular-lifecycle.png)


#### Crear un codespace
- Puede crear un codespace en GitHub.com, en Visual Studio Code o en la CLI de GitHub. Existen cuatro formas de crear un codespace:
    -	Desde una plantilla de GitHub o desde cualquier repositorio de plantillas de GitHub.com para iniciar un nuevo proyecto.
    -	Desde una rama del repositorio para el trabajo de nuevas características.
    -	Desde una solicitud de cambios abierta para explorar el trabajo en curso.
    -	Desde una confirmación en el historial de un repositorio para investigar un error en un punto específico del tiempo.
- Puede usar un codespace temporalmente para probar código o volver al mismo codespace para realizar trabajo de características de larga duración.
- Puede crear más de un codespace por repositorio o incluso por rama. Sin embargo, hay límites respecto al número de codespaces que puede crear y ejecutar al mismo tiempo. Si alcanza el número máximo de codespaces e intenta crear otro, aparece un mensaje que indica que se debe quitar o eliminar un codespace existente para poder crear uno nuevo.
- Puede crear un número ilimitado de codespaces por repositorio o rama, en función del espacio disponible. Cuando se alcanza una cantidad máxima de recursos, aparece un mensaje que indica que un codespace existente debe quitarse o eliminarse para poder crear uno nuevo.
- Puede crear un nuevo codespace cada vez que desarrolle en GitHub Codespaces o mantener un codespace de larga duración para una característica. Si va a iniciar un proyecto nuevo, cree un codespace a partir de una plantilla y publíquelo en un repositorio de GitHub más adelante.
- Al crear un codespace cada vez que se trabaja en un proyecto, debe enviar los cambios periódicamente para asegurarse de que todas las confirmaciones nuevas estén en GitHub. 
- Al usar un codespace de larga duración para un proyecto nuevo, incorpore los cambios desde la rama predeterminada del repositorio cada vez que empiece a trabajar en el codespace. Esto permite al entorno obtener las últimas confirmaciones. El flujo de trabajo es similar a trabajar con un proyecto en una máquina local.
- Los administradores de repositorios pueden habilitar las precompilaciones de GitHub Codespaces para que un repositorio acelere la creación de un codespace.
- Al crear un codespace de GitHub tienen lugar cuatro procesos:

![Cuatro procesos](https://learn.microsoft.com/es-mx/training/github/code-with-github-codespaces/media/codespace-connection-editor.png)

1.	Se asignan al codespace una máquina virtual y almacenamiento.
2.	Se crea un contenedor.
3.	Se establece una conexión con el codespace.
4.	Se realiza una configuración posterior a la creación.


#### Guardar cambios en un codespace
- Cuando se conecta a un codespace a través de la web, se habilita de forma automática la opción de autoguardado para guardar los cambios cuando haya transcurrido una cantidad de tiempo específica. Al conectarse a un codespace a través de Visual Studio Code, debe habilitar Autoguardado.
- El trabajo se guarda en una máquina virtual en la nube. Puede cerrar y detener un codespace y volver al trabajo guardado más adelante. Si tiene cambios sin guardar, recibirá un mensaje para guardarlos antes de salir. Sin embargo, si el codespace se elimina, se pierde el trabajo. Para guardar el trabajo, debe confirmar los cambios y enviarlos al repositorio remoto o publicar el trabajo en uno nuevo si ha creado el codespace a partir de una plantilla.
#### Apertura de un codespace existente
- Puede volver a abrir cualquiera de los codespaces activos o detenidos en GitHub.com, en un IDE de JetBrains, en Visual Studio Code o mediante la CLI de GitHub.
- Para reanudar un codespace existente, puede ir al repositorio donde existe el codespace, presionar la tecla "," en el teclado y seleccionar Reanudar este codespace o bien abrir https://github.com/codespaces en el explorador, seleccionar el repositorio y, a continuación, seleccionar el codespace existente.
#### Tiempos de espera de un codespace
- Si un codespace está inactivo o si sale del codespace sin detenerlo de forma explícita, la aplicación agota el tiempo de espera después de un período de inactividad y deja de ejecutarse. El tiempo de espera predeterminado es después de 30 minutos de inactividad. No se puede personalizar la duración del período de tiempo de espera para los nuevos codespaces. Cuando se agota el tiempo de espera de un codespace, se preservan los datos de la última vez que haya guardado los cambios.


#### Conexión a internet al usar GitHub Codespaces
- Un codespace requiere conexión a Internet. Si la conexión a Internet se pierde mientras trabaja en un codespace, no podrá acceder a este. Sin embargo, cualquier cambio pendiente de confirmación se guarda. Al restablecer la conexión a Internet, puede acceder al codespace en el mismo estado que se dejó cuando se perdió la conexión.
- Si tiene una conexión de internet inestable, debe confirmar e insertar los cambios frecuentemente.
#### Cerrar o detener un codespace
- Si sale del codespace sin ejecutar el comando para detenerlo (por ejemplo, cierra la pestaña del explorador) o si deja el codespace en ejecución sin interacción, el codespace y sus procesos en ejecución continuarán durante el período de tiempo de espera de inactividad. El período de tiempo de espera de inactividad predeterminado es de 30 minutos. Puede definir su configuración de tiempo de espera personal para los codespaces que cree, pero una directiva de tiempo de espera de la organización puede invalidarla.
- Solo los codespaces en ejecución conllevan cargos de CPU. Un codespace detenido solo conlleva costos de almacenamiento.
- Puede detener y reiniciar un codespace para aplicar cambios. Por ejemplo, si cambia el tipo de máquina que se usa para el codespace, debe detenerlo y reiniciarlo para que el cambio surta efecto. Al cerrar o detener su codespace, todos los cambios pendientes de confirmación se preservan hasta que vuelva a conectarse al codespace.
- También puede detener el codespace y elegir restablecerlo o eliminarlo si encuentra un error o algo inesperado.

#### Recompilación de un codespace
- Puede recompilar el codespace para implementar cambios en la configuración de contenedor de desarrollo. Para la mayoría de los usos, puede crear un codespace como alternativa a recompilar uno. Al recompilar su codespace, las imágenes de la memoria caché aceleran el proceso de recompilación. También puede realizar una recompilación completa para borrar la memoria caché y recompilar el contenedor con imágenes nuevas.
- Al recompilar el contenedor en un codespace, los cambios realizados fuera del directorio /workspaces se borran. Los cambios realizados dentro del directorio /workspaces, incluido el clon del repositorio o la plantilla desde la que ha creado el codespace, se conservan al recompilar.
- Después de crear un codespace, el clon se coloca en el directorio /workspace.

#### Eliminar un codespace
- Puede crear un codespace para una tarea determinada. Después de enviar los cambios a una rama remota, puede eliminar ese codespace de forma segura.
- Si intenta eliminar un codespace con confirmaciones de GIT sin enviar, el editor le notifica que tiene cambios que no se han enviado a una rama remota. Puede enviar cualquier cambio deseado y, después, eliminar su codespace. También puede continuar con la eliminación del codespace y los cambios pendientes de confirmación o exportar el código a una rama nueva sin crear un codespace.
- Los codespaces detenidos que permanecen inactivos durante un período de tiempo especificado se eliminan automáticamente. Los codespaces inactivos se eliminan después de 30 días, pero puede personalizar los intervalos de retención de codespaces.

#### Codespaces vs GitHub.dev 
- Probablemente se pregunte cuándo debe usar GitHub Codespaces y cuándo GitHub.dev.
- Puede usar GitHub.dev para navegar por archivos y repositorios de GitHub, así como hacer cambios de código y confirmarlos. Puede abrir cualquier repositorio, bifurcación o solicitud de incorporación de cambios en el editor GitHub.dev.
- Si quiere realizar tareas más complicadas, como probar el código, use GitHub Codespaces. Se asocia con un proceso, por lo que puede compilar el código, ejecutarlo y tener acceso de terminal. GitHub.dev no incluye ningún proceso. Con GitHub Codespaces se obtiene la potencia de una máquina virtual (VM) personal con acceso de terminal (de la misma forma que puede usar en un  entorno local)  en la nube.
- En la tabla siguiente se enumeran las diferencias principales entre Codespaces y GitHub.dev:

|   | GitHub.dev | GitHub Codespaces |
| - | - | - |
|  Costee |Gratuito |  Cuota mensual gratuita de uso para cuentas personales |
|  Disponibilidad | Disponible para todos en GitHub.com |  Disponible para todos en GitHub.com |
|  Startup | GitHub.dev se abre instantáneamente al presionar una tecla y puede comenzar a usarlo de inmediato sin tener que esperar a su configuración o instalación. |  Al crear o reanudar un codespace, a este se le asigna una máquina virtual y el contenedor se configura en función del contenido de un archivo devcontainer.json. Esta configuración tarda unos minutos en crear el entorno de desarrollo. |
|  Proceso | No hay cálculos asociados, así que no podrá compilar y ejecutar su código ni utilizar el terminal integrado. |  Con GitHub Codespaces se obtiene la eficacia de una máquina virtual dedicada para ejecutar y depurar la aplicación. |
|  Acceso al terminal |Ninguno |  GitHub Codespaces proporciona un conjunto de herramientas de manera predeterminada, lo que significa que puede utilizar el terminal exactamente como lo haría en su entorno local. |
|  Extensiones | En la vista de extensiones solo aparece un subconjunto limitado de extensiones que pueden ejecutarse en la web y que se pueden instalar. |  Con GitHub Codespaces se pueden usar la mayoría de las extensiones de Visual Studio Code Marketplace. |


#### Continuación del trabajo en Codespaces
- Puede iniciar el flujo de trabajo en Github.dev y seguir trabajando en un codespace. Si intenta acceder a la vista de ejecución y depuración o al terminal, se le notifica que no están disponibles en GitHub.dev.
- Para continuar el trabajo en un codespace, seleccione "Continuar trabajando en...." y seleccione "Crear un codespace" para crear un codespace en la rama actual. Antes de que elijas esta opción, debes confirmar cualquier cambio.



## Personalizar su codespace
- GitHub Codespaces es un entorno dedicado. Puede  añadir y configurar  un contenedor de desarrollo en los repositorios   para definir su entorno predeterminado de GitHub Codespaces y personalizar la experiencia de desarrollo en todos los codespaces con dotfiles y Sincronización de configuración.
- Existen muchas formas de personalizar su codespace. Se revisarán a continuación:
   -	Sincronización de configuración: puede sincronizar la configuración de Visual Studio Code (VS Code) entre la aplicación de escritorio y el cliente web de VS Code.
   -	Dotfiles: puede usar un repositorio dotfiles para especificar scripts, preferencias del shell y otras configuraciones.
   -	Cambiar un codespace de nombre: al crear un codespace, se le asigna un nombre para mostrar generado automáticamente. Si tiene varios codespaces, el nombre para mostrar le ayuda a diferenciar entre ellos. Puede cambiar el nombre para mostrar del codespace.
   -	Cambiar el shell: puede cambiar el shell en un codespace para mantener su configuración habitual. Al trabajar en un codespace, puede abrir una nueva ventana de terminal con un shell de su elección, cambiar el shell predeterminado para las nuevas ventanas de terminal o instalar un nuevo shell. También puedes usar dotfiles para configurar el shell.
   -	Cambiar el tipo de máquina: puede cambiar el tipo de máquina que ejecuta el codespace para usar los recursos adecuados para el trabajo que lleva a cabo.
   -	Establecer el editor predeterminado: puede establecer el editor predeterminado para codespaces en su página de configuración personal. Establezca el editor de su preferencia para que, al crear un codespace o abrir un codespace existente, se abra en el editor predeterminado:
        -	Visual Studio Code (aplicación de escritorio)
        -	Visual Studio Code (aplicación cliente web)
        -	JetBrains Gateway: para abrir codespaces en un IDE de JetBrains
        -	JupyterLab (interfaz web para Project Jupyter)
   -	Establecer la región predeterminada: puede configurar la región predeterminada en la página de configuración de perfil de GitHub Codespaces para personalizar el lugar donde se conservan sus datos.
   -	Establecer el tiempo de espera: un codespace dejará de ejecutarse después de un período de inactividad. De manera predeterminada, este período es de 30 minutos, pero puede especificar un período de tiempo de espera predeterminado más largo o más corto en su configuración personal en GitHub. La configuración actualizada se aplica a los codespaces que cree o a los ya existentes la próxima vez que los inicie.
   -	Configuración de eliminación automática: los codespaces inactivos se eliminan de forma automática. Puede elegir cuánto tiempo se conservan los codespaces detenidos, hasta un máximo de 30 días.   
#### Agregar extensiones o complementos
- Puede agregar complementos y extensiones en un codespace para personalizar su experiencia en JetBrains y VS Code.
#### Extensiones de VS Code
- Si trabaja en sus codespaces en el cliente web o la aplicación de escritorio de VS Code, puede agregar cualquier extensión que necesite desde Visual Studio Code Marketplace. [Más información.](https://code.visualstudio.com/api/advanced-topics/remote-extensions) 
- Si ya utiliza VS Code, puede usar Sincronización de configuración para sincronizar automáticamente las extensiones, configuraciones, temas y métodos abreviados de teclado entre la instancia local y cualquier codespace que cree.
#### Complementos de JetBrains
- Si trabaja con los codespaces en un IDE de JetBrains, puede agregar complementos desde el Marketplace de JetBrains.



## Código con Codespaces y Visual Studio Code
#### ¿Cuál es el problema de utilizar un  codespaces para el desarrollo de software? 
- Un codespace es un entorno de desarrollo alojado en la nube.
- Puedes personalizar  GitHub Codespaces para un proyecto enviando un  archivos de configuración a tu repositorio (también conocido como configuración como código), lo que crea una configuración de codespace repetible para todos los usuarios de tu proyecto. Cada  codespace que crea está alojado en GitHub en un contenedor Docker que se ejecuta en una máquina virtual. Podrás elegir el tipo de máquina que quieres utilizar dependiendo de los recursos que necesites.
- GitHub ofrece una variedad de funciones para ayudar a su equipo de desarrollo a personalizar un codespaces para alcanzar las máximas necesidades de configuración y rendimiento. Por ejemplo, puedes:
   -	Crear un codespace desde tu repositorio.
   -	Enviar el código desde el codespace a su repositorio.
   -	Utilizar VS Code para desarrollar código.
   -	Personalizar el codespace con imágenes personalizadas.
   -	Gestionar el codespace.
- Para comenzar a desarrollar usando GitHub Codespaces, puedes crear un codespace a partir de una plantilla o desde cualquier rama o confirmación de un repositorio. Cuando creas un  codespace  a partir de una plantilla, puedes comenzar desde una plantilla en blanco o elegir una plantilla adecuada para el trabajo que estás realizando.

#### Iniciar un codespaces
1. En el repositorio, haga clic en el botón verde que dice “&lt;>Code” que se ubica dentro de la pestaña Code.
2. Seleccione la pestaña Codespaces en el cuadro que aparece y luego haga clic en el botón "Create codespace on main".
3. Verifica que tu codespace se esté ejecutando. Se te debe abrir un navegador que debe contener un editor basado en VS Code web y debe estar presente una terminal.

#### Enviar código a tu repositorio desde el codespace
1.	Desde dentro del codespace en la ventana del explorador de VS Code, seleccione el archivo index.html
2. Reemplace el encabezado h1 con el siguiente:

```html
<h1>Hello from the codespace!</h1>
```
3. Utilice la terminal VS Code para confirmar el cambio de archivo ingresando el siguiente mensaje de confirmación:
```git
git commit -a -m "Adding hello from the codespace!"
```
4. Devuelva los cambios a su repositorio. Desde la terminal VS Code, ingrese:
```git
git push
```
5. ¡Tu código ha sido enviado a tu repositorio!
#### Contenedor de desarrollo
- Los contenedores de desarrollo son contenedores de Docker que están configurados para proporcionar un entorno de desarrollo completo. Siempre que trabaje en un codespace, estará usando un contenedor de desarrollo en una máquina virtual.
- Puede configurar el contenedor de desarrollo para un repositorio y Codespaces puede crear un entorno de desarrollo a medida, con todas las herramientas y runtimes que necesita para trabajar en un proyecto específico.
- Puede configurar el contenedor de desarrollo para un repositorio de modo que cualquier codespace creado para ese repositorio le brinde un entorno de desarrollo personalizado, completo con todas las herramientas y tiempos de ejecución que necesita para trabajar en un proyecto específico.
- ¿Qué son los contenedores de desarrollo? Los contenedores de desarrollo son contenedores Docker que están configurados específicamente para proporcionar un entorno de desarrollo con todas las funciones. Siempre que trabaja en un codespace, está utilizando un contenedor de desarrollo en una máquina virtual.
- Un archivo contenedor de desarrollo (devcontainer.json) es un archivo JSON que le permite personalizar la imagen predeterminada que ejecuta su codespace, la configuración del código VS, ejecutar código personalizado, reenviar puertos y mucho más.

#### Imagen personalizada.
 
- Una imagen de Docker es una plantilla de solo lectura que define(crea) un contenedor. La imagen contiene el código que se ejecutará, incluida cualquier definición para cualquier biblioteca o dependencia que el código necesite. Un contenedor de Docker es una imagen de Docker instanciada (en ejecución).
- Una imagen de Docker es un paquete ligero y autónomo que contiene todo lo necesario para ejecutar una aplicación, incluyendo el código, las bibliotecas, las dependencias y las configuraciones del entorno. Estas imágenes se utilizan en el entorno de Docker, para crear y ejecutar contenedores, que son instancias aisladas y eficientes de aplicaciones.
- Al crear un contenedor Docker, lo que estamos haciendo es ejecutar el código que contiene la imagen.



#### Agregamos .devcontainer.json
1. En la pestaña Code, hacemos clic en “Add File” y luego “Create new file”.
2. En el campo “Name your file…”  ingresamos .devcontainer/devcontainer.json
3. En el cuerpo(Enter file contents here) del  archivo .devcontainer/devcontainer.json , agregue el siguiente contenido:
```json
{
  // Name this configuration
  "name": "Codespace for Skills!",
  // Use the base codespace image
  "image": "mcr.microsoft.com/vscode/devcontainers/universal:latest",

  "remoteUser": "codespace",
  "overrideCommand": false
}

```
4. Hacemos clic en Commit changes… y luego en Commit changes.
5. Creamos un nuevo codespace en la rama principal (main).
6. Verifica que tu nuevo codespace se esté ejecutando, como lo hiciste anteriormente.

:::tip
- Tenga en cuenta que la imagen que se utiliza es la imagen predeterminada proporcionada para GitHub Codespaces. Incluye tiempos de ejecución y herramientas para Python, Node.js, Docker y más.[   Vea la lista completa aquí.](https://aka.ms/ghcs-default-image)
:::
#### Personaliza tu codespace
- Puede personalizar su codespace agregando extensiones, agregando funciones, configurando requisitos de host y mucho más.
- Personalicemos algunas configuraciones en el archivo devcontainer.json:
1. Navegue hasta el archivo .devcontainer/devcontainer.json
2. Agregue las siguientes personalizaciones  antes del último “}”:


```json
// Add the IDs of extensions you want installed when the container is created.
,
 "customizations": {
     "vscode": {
         "extensions": [
             "GitHub.copilot"
         ]
     },
     "codespaces": {
         "openFiles": [
             "codespace.md"
         ]
     }
 }

```
3. Haga clic en Commit Changes… y luego en Commit changes directamente en la rama principal (main).
4. Creamos un codespace .
5. El archivo codespace.md debería aparecer en el editor de VS Code y La extensión copilot debería aparecer en la lista de extensiones de VS Code.
6. ¡A continuación, agreguemos algo de código para ejecutar al crear el codespace! 
7. Edite el archivo .devcontainer/devcontainer.json.  Agregue lo siguiente antes del último  “}”:

```json
,
 "postCreateCommand": "echo '# Writing code upon codespace creation!'  >> codespace.md"
```
8. Haga clic en Commit Changes… y luego en Commit changes directamente en la rama principal (main).
9. Creamos un codespace .
10. Verifique que el archivo codespace.md ahora tenga el texto Writing code upon codespace creation!

#### DotFiles
- Al utilizar cualquier entorno de desarrollo, personalizar la configuración y las herramientas según sus preferencias y flujos de trabajo es un paso importante. GitHub Codespaces ofrece dos formas principales de personalizar tu codespace: Settings Sync con VS Code y dotfiles.
- ¿Qué son dotfiles? Los archivos Dot son archivos y carpetas en sistemas tipo Unix que comienzan con ”.” que controlan la configuración de aplicaciones y shells en su sistema. Puede almacenar y administrar sus archivos dotfiles  en un repositorio en GitHub.


#### Habilitar dotfile para su codespace
1. Comience desde un repositorio.
2. Haga clic en su foto de perfil y luego en Settings.
3. En la sección  ”Code, planning, and automation” haga clic en Codespaces.
4. En Dotfiles, selecciona Automatically install dotfiles para que GitHub Codespaces instale(cargue) automáticamente tus archivos de dotfiles en cada nuevo codespace que crees.
5. Haga clic en Select Repository  y selecione el repositorio desde el cual se va a instalar dotfiles (ósea el repositorio que utilizara Codespaces y tendrá que cargar los archivos dotfiles).


#### Agregar un dotfile a tu repositorio
1. Comience desde su repositorio.
2. Cree un codespace.
3. Desde dentro del codespace en la ventana del explorador de VS Code, cree un nuevo archivo setup.sh
4. Agregue el siguiente código dentro del archivo:


```sh
#!/bin/bash
sudo apt-get update
sudo apt-get install sl
```
:::tip Archivo setup.sh
- El archivo setup.sh es un script de shell que se utiliza para configurar un entorno de desarrollo en un sistema operativo Unix/Linux. Este script automatiza la instalación de dependencias, la configuración de variables de entorno y otros pasos necesarios para configurar el entorno de desarrollo.
- Por lo general, este script realiza las siguientes acciones:
    - Actualización del sistema operativo: Se actualizan los paquetes y repositorios del sistema para asegurar que se tengan las últimas versiones de los paquetes y actualizaciones de seguridad.
    - Instalación de dependencias: Se instalan las dependencias necesarias para que funcione correctamente el entorno de desarrollo. Por ejemplo, paquetes de desarrollo, herramientas de compilación, librerías, etc.
    - Configuración de variables de entorno: Se configuran las variables de entorno necesarias para que el entorno de desarrollo funcione correctamente. Por ejemplo, configurar variables de entorno como PATH, LD_LIBRARY_PATH, etc.
    - Descarga e instalación de software: Se descargan e instalan las herramientas, librerías o paquetes de software necesarios para el desarrollo. Por ejemplo, descargar e instalar compiladores, sistemas de control de versiones (como Git), entornos de desarrollo integrados (IDE), etc.
    - Creación de enlaces simbólicos o scripts de ejecución: Se crean enlaces simbólicos o scripts de ejecución que facilitan la ejecución de las herramientas de desarrollo.
    - Instalación de plugins o extensiones: Se instalan plugins o extensiones necesarias para que funcionen correctamente las herramientas de desarrollo. Por ejemplo, instalar plugins de lenguajes de programación para un IDE.
 - Es importante tener en cuenta que este script puede variar dependiendo del proyecto o del entorno de desarrollo. En algunos casos, puede incluir acciones adicionales como la configuración de entornos virtuales, la creación de bases de datos, la instalación de software adicional, etc.
 - El archivo setup.sh generalmente se crea en la carpeta principal del proyecto, que es la carpeta que contiene todos los archivos y carpetas relacionados con el proyecto.
 - El script setup.sh es ejecutado una vez para configurar el entorno de despliegue antes de iniciar la compilación del proyecto.
 - En resumen, este archivo permite a los desarrolladores y administradores de sistemas configurar rápidamente un entorno de desarrollo, en lugar de tener que realizar manualmente cada paso.


:::


1. Confirme los cambios del archivo. Desde la terminal VS Code ingrese:

```git
git add setup.sh --chmod=+x
git commit -m "Adding setup.sh from the codespace!"

```
6. Devuelva los cambios a su repositorio. Desde la terminal VS Code, ingrese:

```git
git push
```
7. Vuelva a la página de inicio de su repositorio y consulte setup.sh para verificar que el nuevo código se haya enviado a su repositorio.
8. Cierra la pestaña del navegador web de Codespace y crea otro codespace.
9. Verifique que el archivo setup.sh esté presente en su editor de VS Code.
10. Desde la terminal VS Code, escriba o pegue:

```powershell
/usr/games/sl
```
11. ¡Disfruta el espectáculo!




## GitHub Copilot
- GitHub Copilot usa OpenAI Codex para sugerir código y funciones completas en tiempo real, directamente desde el editor.
- GitHub Copilot es la primera herramienta para desarrolladores de inteligencia artificial a escala del mundo que puede ayudarle a escribir código más rápidamente y con menos trabajo. GitHub Copilot extrae el contexto de los comentarios y el código para sugerir líneas individuales y funciones completas al instante.
- GitHub Copilot ayuda a los desarrolladores a codificar con mayor rapidez, a centrarse en resolver problemas mayores, a mantenerse informados durante más tiempo y a sentirse más gratificado con su trabajo.
- GitHub Copilot usa la tecnología de OpenAI Codex (lo creo OpenAI).
- GitHub Copilot es un servicio que le proporciona a un programador una IA que funciona con todos los lenguajes de programación conocidos y acelera considerablemente la productividad general de los desarrolladores. 
- Con este servicio, logramos que:
    -	El 46 % del código nuevo ahora está escrito mediante inteligencia artificial.
    -	La productividad general de los desarrolladores es un 55 % más rápida.
    -	El 74 % de los desarrolladores se sienten más centrados en hacer el trabajo que les gusta.
- Desarrollado en colaboración con OpenAI, GitHub Copilot cuenta con la tecnología de OpenAI Codex, un sistema de inteligencia artificial creado por OpenAI. OpenAI Codex tiene un amplio conocimiento de cómo las personas usan código, y es más capaz que GPT-3 en la generación de código, en parte, porque se entrenó en un conjunto de datos que incluye una mayor concentración de código fuente público.
- GitHub Copilot está disponible como una extensión para Visual Studio Code, Visual Studio, Neovim y el conjunto JetBrains de entornos de desarrollo integrados (IDE).


#### GitHub Copilot X
- GitHub Copilot te permite autocompletar los comentarios y el código.
- Sin embargo, autocompletar con inteligencia artificial fue solo el punto de partida. GitHub Copilot X es la visión del futuro del desarrollo de software con tecnología de IA que adopta los modelos GPT-4 más recientes de OpenAI.
- GitHub Copilot X se extiende más allá del editor y se convierte en un asistente de inteligencia artificial fácilmente accesible durante todo el ciclo de vida de desarrollo.
- Copilot X aporta una interfaz de chat al editor que se centra en escenarios de desarrollador y se integra de forma nativa con VS Code y Visual Studio. Reconoce qué código ha escrito un desarrollador, qué mensajes de error se muestran y está profundamente insertado en el IDE. Un desarrollador puede obtener análisis detallados y explicaciones de para qué están diseñados los bloques de código, generar pruebas unitarias e incluso obtener correcciones propuestas para errores.
- Esta nueva funcionalidad se basa en el nuevo modelo GPT-4 de OpenAI y agrega compatibilidad con etiquetas con tecnología de IA en descripciones de solicitudes de incorporación de cambios a través de una aplicación de GitHub que los administradores de la organización y los propietarios de repositorios individuales pueden instalar. 
- GitHub Copilot rellena automáticamente estas etiquetas en función del código cambiado. A continuación, los desarrolladores pueden revisar o modificar la descripción sugerida.

#### Respuestas generadas sobre la documentación
- GitHub lanza GitHub Copilot for Docs, una herramienta experimental que usa una interfaz de chat para proporcionar a los usuarios respuestas generadas por IA a preguntas sobre la documentación, incluidas las preguntas que los desarrolladores tienen sobre los lenguajes, marcos y tecnologías que usan.


#### Copilot para la interfaz de la línea de comandos (CLI)
- El terminal es el lugar donde los desarrolladores pasan más tiempo. Sin embargo, incluso los desarrolladores más expertos deben desplazarse a lo largo de muchas páginas para recordar la sintaxis de muchos comandos. La CLI de Copilot de GitHub puede crear comandos y bucles, y generar marcas de búsqueda ocultas para satisfacer la consulta.
#### Github Copilot para empresas
- GitHub Copilot está disponible a través de cuentas personales de GitHub con GitHub Copilot for Individuals o a través de cuentas empresariales o para organizaciones con GitHub Copilot for Business.
- Con Copilot para empresas, puede administrar el acceso a GitHub Copilot para organizaciones dentro de su empresa. Una vez que concede acceso a GitHub Copilot a una organización, los administradores de dicha organización pueden conceder acceso a sus usuarios y equipos.
- Con GitHub Copilot for Business, GitHub Copilot está abierto a todos los desarrolladores, equipos, organizaciones y empresas.
- Centrado en hacer que las organizaciones sean más productivas, seguras y satisfactorias, GitHub Copilot for Business permite a los desarrolladores codificar más rápido y les permite centrarse en un trabajo que les guste más.
-  A continuación, se muestran algunas de las características que observará en Copilot para empresas:
   -	Un modelo de IA más eficaz: los nuevos algoritmos de modelado mejoran la calidad de las sugerencias de código.
   -	Filtrado de vulnerabilidades de seguridad basado en inteligencia artificial: GitHub Copilot bloquea automáticamente las sugerencias de código no seguras comunes al enfocarse en problemas como credenciales codificadas de forma rígida, inyecciones de SQL e inyecciones de ruta de acceso.
   -	Compatibilidad con proxy VPN: GitHub Copilot funciona con VPN, incluidos los certificados autofirmados, para que los desarrolladores puedan usarlo en cualquier entorno de trabajo.
   -	Registro sencillo: cualquier empresa puede comprar rápidamente licencias de Copilot para empresas en línea y asignar fácilmente puestos, incluso si no usan la plataforma de GitHub para su código fuente.


#### Registro en GitHub Copilot
- Para poder empezar a usar GitHub Copilot, es preciso configurar una evaluación gratuita o una suscripción para tu cuenta personal.
- Para ello, seleccione su **foto de perfil** y, después, seleccione **Configuración**. Copilot está en el menú de la izquierda en **Código, planeamiento y automatización**.
- Después de registrarse, deberá instalar una extensión para su entorno preferido. GitHub Copilot admite GitHub.com, Visual Studio Code, Visual Studio, los entornos de desarrollo integrado de JetBrains y Neovim como una extensión discreta.




#### Incorporación de la extensión de Visual Studio Code
1.	En Visual Studio Code Marketplace, vaya a la [página de la extensión de GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) y seleccione **Instalar**.
2.	Aparecerá un elemento emergente que le solicita abrir Visual Studio Code. Seleccione **Open** (Abrir).
3.	En la pestaña **Extensión: GitHub Copilot** de Visual Studio Code, seleccione **Instalar**.
4.	Si no ha autorizado previamente Visual Studio Code en su cuenta de GitHub, se le pedirá que inicie sesión en GitHub en Visual Studio Code. Seleccione **Iniciar sesión en GitHub**.
- GitHub Copilot puede autocompletar el código a medida que lo escribe cuando usa Visual Studio Code. Después de la instalación, puede habilitar o deshabilitar GitHub Copilot, y puede configurar opciones avanzadas en Visual Studio Code.


:::tip
- Visual Studio Code, Visual Studio, Neovim y JetBrains tienen extensiones para poder usar Copilot.
- Aunque se admite GitHub.com, este no necesita una extensión para usar la IA.
:::


#### Habilitación o  deshabilitación de GitHub Copilot en visual studio code
- Para habilitar o deshabilitar GitHub Copilot, seleccione el icono de estado del panel inferior de la ventana de Visual Studio Code:

![Icono de estado](https://learn.microsoft.com/es-mx/training/github/introduction-to-github-copilot/media/status-icon-visual-studio-code.png)

- Al deshabilitar GitHub Copilot, se le pregunta si desea deshabilitar las sugerencias globalmente, o bien para el idioma del archivo que está editando en ese momento.
- Para deshabilitar las sugerencias de GitHub Copilot globalmente, seleccione Deshabilitar globalmente.
- Para deshabilitar las sugerencias de GitHub Copilot para un idioma especificado, seleccione Deshabilitar para IDIOMA.


:::tip
- Las sugerencias son los “completions”.

:::


#### Otra forma
1. En el menú **Archivo**, vaya a **Preferencias** y seleccione **Configuración**.
2. En el panel izquierdo de la pestaña de configuración, seleccione **Extensiones** y, después, seleccione **Copilot**.
3. Ahí puedes habilitar o inhabilitar el **Automatically show inline completions** (que te sugiera).
4. Debajo de esta opcion , podes   especificar los idiomas para los que desea habilitar o deshabilitar GitHub Copilot.


#### Solución de problemas
- En Visual Studio Code, los archivos de registro son útiles para diagnosticar problemas de conexión. La extensión GitHub Copilot almacena los archivos de registro en la ubicación de registro estándar para las extensiones de Visual Studio Code. Puede encontrar los archivos de registro por medio de la opción de desarrollador y abrir la carpeta de registros de extensión dentro de Visual Studio Code.
- En algunos casos, es posible que los errores no se registren en las ubicaciones normales. Si encuentra errores y no hay nada en los registros, puede intentar verlos en el proceso que ejecuta Visual Studio Code y la extensión. Este proceso le permite ver los registros de Electron. Puede encontrar estos registros en "Desarrollador" y en Ayuda>Activar herramientas de desarrollo en Visual Studio Code.
- Al conectarse a GitHub Copilot, pueden producirse restricciones de red, firewalls o un proxy. Si esto ocurriera, siga estos pasos para abrir un nuevo editor con información pertinente que puede inspeccionar o compartir con el equipo de soporte técnico:



1.	Abra la paleta de comandos Visual Studio Code:
     - En Mac, use **Mayús+Comando+P**
     - En Windows o Linux, use **Ctrl+ Shift +P**
2. Escriba **Diagnósticos** y, después, seleccione **GitHub Copilot: Recopilar diagnósticos** en la lista.


:::tip
- La sección "Desarrollador" en Visual Studio Code no se encuentra en la interfaz del usuario principal. En su lugar, se refiere a un conjunto de funcionalidades y herramientas que están disponibles para los desarrolladores dentro del editor, pero no se encuentra en una ubicación específica de la interfaz.
:::
## Resumen
- GitHub Copilot es un asociado de codificación de IA que proporciona sugerencias de autocompletar mientras se codifica. Obtenga sugerencias escribiendo código o describiéndolo en lenguaje natural.
- Copilot analiza su archivo y los archivos relacionados, ofreciendo sugerencias en su editor de texto. Usa OpenAI Codex, un nuevo sistema de inteligencia artificial desarrollado por OpenAI para ayudar a detectar el contexto del código y los comentarios escritos y, a continuación, sugiere nuevas líneas o funciones completas.
- Como desarrollador, querrá ser más productivo escribiendo código más rápido tanto para los nuevos proyectos netos como para los existentes. Para esta tarea, esperará que una inteligencia artificial asistente sea lo que necesita para mejorar flujos de trabajo de desarrollador en la escritura de código, documentación, pruebas y mucho más.

#### Codespaces
- GitHub Codespaces es un entorno de desarrollo hospedado que funciona en la nube que se puede ejecutar con Visual Studio Code. Puede personalizar la experiencia de desarrollo para cualquier proyecto de GitHub, preinstalar dependencias, bibliotecas e, incluso, extensiones y configuraciones de Visual Studio Code.
- Habilite el servicio [GitHub Codespaces](https://docs.github.com/en/codespaces) en su cuenta de GitHub. Codespaces ofrece 60 horas de uso gratuito al mes.

:::tip
- Los alumnos pueden reclamar el GitHub Student Developer Pack de GitHub en [GitHub Student Developer Pack - GitHub Education](https://education.github.com/pack). Esta oferta incluye acceso a Codespaces, GitHub Copilot y Azure for Students y otras ventajas.

:::


#### Github Copilot
- A menudo, al escribir código, debe consultar documentación oficial u otras páginas web para recordar la sintaxis o cómo resolver un problema. También puede dedicar horas a intentar resolver un problema cuando el código no funciona. Además, también dedica tiempo a escribir pruebas y documentación. Todas estas tareas consumen mucho tiempo y, para ser más eficaces, podría usar fragmentos de código(snippet) o confiar en herramientas en el IDE (entorno de desarrollo integrado) pero, ¿hay una mejor manera?
- GitHub Copilot es un asistente de inteligencia artificial que se usa desde el IDE y que es capaz de generar código y mucho más. GitHub Copilot usa solicitudes, lenguaje natural y proporciona sugerencias basadas en lo que usted escribe. Una solicitud puede, por ejemplo, tener el siguiente aspecto:

```js
// Create a web API using express and JavaScript with routes for products and customers
```

- Después, Copilot va a generar una respuesta que puede aceptar o rechazar. Una respuesta a la solicitud podría ser similar a la siguiente:

```js
const express = require(“express”);

app = express();
app.path(“/products”, () => “products”);
app.listen(3000, () => “app runs”);

```

- Otro ejemplo:


```python
# Create a web API using FastAPI with a route to products.
```
- Después, Copilot va a generar una respuesta que puede aceptar o rechazar. Una respuesta a la solicitud podría ser similar a la siguiente:

```python
from fastapi import FastAPI
app = FastAPI()

@app.get("/products")
def read_products():
    return []

```
#### Como reconoce las solicitudes
- Copilot puede decir que algo es una solicitud, una instrucción, si:
   - Se escribe como un comentario en un archivo de código.
   - Se escribe como texto en un archivo Markdown y espera a que Copilot devuelva una respuesta en unos segundos.
#### Aceptación de sugerencias
- Lo que recibe de Copilot es una sugerencia, texto que se muestra como código gris, si usa negro como color de texto. Para aceptar la sugerencia, deberá presionar la tecla "Tabulador".
- Copilot puede sugerir más de una opción y es posible desplazarse entre las sugerencias mediante la tecla "**ctrl +  enter** " y seleccionar la más adecuada.
#### Cómo configurar GitHub Copilot
- Para usar GitHub Copilot, necesita lo siguiente:
1. Cree una cuenta de GitHub. Ya que Copilot es un servicio de GitHub, necesita una cuenta de GitHub para usar el servicio.
2. Regístrese. Debe registrarse en Copilot a través de su [página web](https://github.com/settings/copilot):
     - En GitHub, seleccione su perfil y, a continuación, vaya a la configuración de Copilot, donde puede habilitar el acceso o registrarse para obtener una prueba gratuita.

:::tip
- Los educadores, los alumnos y los mantenedores de código abierto pueden registrarse de forma gratuita en Copilot, descubra cómo hacerlo en este [sitio web](https://aka.ms/Copilot4Students).

:::
3. Para usar GitHub Copilot, debe instalarlo como una extensión en el IDE. Las extensiones están disponibles para los IDE principales, como Visual Studio, Visual Studio Code.
#### Desarrollo con GitHub Copilot
- A menudo, cuando compilamos proyectos, es necesario asegurarnos de que nuestro código esté actualizado y sea actualizado continuamente. Además, es posible que tengamos que corregir los errores que surjan o agregar nuevas características para mejorar su funcionalidad y facilidad de uso. Vamos a explorar algunas maneras de realizar actualizaciones con GitHub Copilot.
#### Ingeniería rápida
- Aunque GitHub Copilot puede sugerir código a medida que escribe, también puede crear consultas para generar sugerencias útiles. Una consulta, que sería nuestra entrada, es una colección de instrucciones o directrices que ayudan a generar código. La consulta es útil para generar respuestas específicas de Copilot. La consulta puede ser un comentario que dirija a Copilot para que genere código por usted o escribir código para que Copilot lo autocomplete.
- La calidad de la salida de Copilot depende de la forma en que se elabora la consulta. El diseño de una consulta eficaz es, por lo tanto, fundamental para garantizar lograr los resultados deseados. Por ejemplo, si hace la consulta siguiente:

```js
// Create an API endpoint
```
O
```python
# Create an API endpoint
```

- Dado que la consulta es ambigua y vaga, es posible que el resultado de GitHub Copilot no sea lo que necesita. Por ejemplo, podría usar un marco que no conozca o un punto de conexión que requiera datos que no reconozca. Por ejemplo, si hace la consulta siguiente:

```js
// Create an API endpoint using the React framework that accepts a JSON payload in a POST request
```
O
```python
# Create an API endpoint using the FastAPI framework that accepts a JSON payload in a POST request
```
- Esta última consulta es específica, clara y permite a GitHub Copilot comprender el objetivo y el ámbito de la tarea. 
- También puede proporcionar contexto y ejemplos a Copilot mediante comentarios y código. Hacer una buena consulta garantiza que el modelo genere una salida de alta calidad.

#### Procedimientos recomendados con GitHub Copilot
- Copilot impulsa la productividad, pero requiere algunos procedimientos recomendados para garantizar la calidad. Algunos procedimientos recomendados al usar Copilot son:
1. Mantenga las consultas simples y agregue componentes más elaborados a medida que va avanzando, por ejemplo:
```js
//create an HTML form with a text field and button
```
- Luego, profundice más en la consulta para obtener sugerencias más específicas:
```js
// Add an event listen to the button to send a POST request to /generate endpoint and display response in a div with id "result"
```
2. Alterne entre sugerencias, puede hacerlo mediante **Ctrl+Enter** (o Cmd+Enter en un equipo Mac). Obtendrá varias sugerencias de Copilot y puede elegir la mejor salida.
3. Si no logra avanzar o no obtiene los resultados que desea, puede replantear la consulta o empezar a escribir código para que Copilot lo autocomplete.
4. Diseñar una consulta de forma eficaz es, por lo tanto, fundamental para garantizar lograr los resultados deseados. Es necesario detallar el aviso(consulta) tanto como sea posible.


:::tip
- GitHub Copilot usa los archivos abiertos en el editor de texto como contexto adicional. Esto es útil porque proporciona información adicional a la consulta o al código que podría estar escribiendo. Si necesita que GitHub Copilot proporcione sugerencias basadas en otros archivos, recuerde abrirlos para obtener sugerencias más precisas.
:::


## Github Copilot y VS Code
- GitHub Copilot puede ayudarte a codificar ofreciendo sugerencias de estilo autocompletar. GitHub Copilot analiza el contexto del archivo que estás editando, así como los archivos relacionados, y ofrece sugerencias desde tu editor de texto. GitHub Copilot funciona con OpenAI Codex, un nuevo sistema de inteligencia artificial creado por OpenAI.


#### Codespace con VS Code para Copilot
- GitHub Copilot es un programador de pares de IA que te ayuda a escribir código más rápido y con menos trabajo. Extrae contexto de comentarios y código para sugerir líneas individuales y funciones completas al instante. GitHub Copilot funciona con OpenAI Codex, un modelo de lenguaje generativo previamente entrenado creado por OpenAI.
- Copilot funciona con muchos editores de código, incluidos VS Code, Visual Studio, JetBrains IDE y Neovim.
- Además, GitHub Copilot está capacitado en todos los idiomas que aparecen en los repositorios públicos. Para cada idioma, la calidad de las sugerencias que reciba puede depender del volumen y la diversidad de datos de capacitación para ese idioma.
- El uso de Copilot dentro de un Codespace muestra lo fácil que es poner en marcha el conjunto de herramientas de codificación colaborativa de GitHub.
#### Habilitar Copilot dentro de un codespace
- Antes de abrir un codespaces en un repositorio, puede crear un contenedor de desarrollo y definir extensiones o configuraciones específicas que se usarán o instalarán en su espacio de código.
-  Creemos este contenedor de desarrollo y agreguemos copiloto a la lista de extensiones:
1. En el repositorio, creamos un nuevo archivo:
    - Nombre del archivo : .devcontainer/devcontainer.json
    - Contenido del archivo:  

```json
{
    // Name this configuration
    "name": "Codespace for Skills!",
    "customizations": {
        "vscode": {
            "extensions": [
                "GitHub.copilot"
            ]
        }
    }
}

```
2. Lo confirmamos directamente en la rama main.
3. Creamos un codespace.
4. La extensión copilot debería aparecer en la lista de extensiones VS Code.


#### Ver sugerencias de código AI en un archivo Javascript
- GitHub Copilot proporciona sugerencias para numerosos lenguajes y una amplia variedad de marcos, pero funciona especialmente bien para Python, JavaScript, TypeScript, Ruby, Go, C# y C++. Los siguientes ejemplos están en JavaScript, pero otros lenguajes funcionarán de manera similar.
- Entonces para ver sugerencias de Javascript:
1. Dentro del codespace, creamos un nuevo archivo llamado skills.js
2. En el archivo skills.js, escriba el siguiente encabezado de función:

```js
function calculateNumbers(var1, var2)
```
3. GitHub Copilot sugerirá automáticamente el cuerpo de una función completa en texto atenuado. 
4. Pulsa **Tab** para aceptar la sugerencia.

:::tip
- Con **Control + I** podés pedirle a GitHub Copilot Chat que haga algo.
:::

5. Enviamos el código al repositorio desde el codespace:


```git
git add skills.js
git commit -m "Copilot first commit"
git push

```

#### Ver la pestaña GitHub Copilot con múltiples sugerencias
1. Utilice la terminal VS Code para extraer el código más reciente:

```git
git pull
```
2. Creamos un nuevo archivo llamado member.js
3. En el archivo  member.js, escriba el siguiente encabezado de función:

```js
function skillsMember()
```
4. Deje de escribir y presione **Control + Enter** (Abrira Open Completions Panel).  Copilot sintetizará alrededor de 10 sugerencias de código diferentes.


:::tip
- Pasando por el “código sugerido”, podes ver 3 sugerencias.
:::
5. Encuentre una solución que le guste y haga clic en **Accept Solution**.
6. Su archivo member.js se actualizará con su solución.
7. Enviamos el código al repositorio desde el codespace:

```git
git add member.js
git commit -m "Copilot second commit"
git push

```
#### Usar comentarios para generar código con Copilot
- ¡Ahora veamos cómo puedes aprovechar los comentarios para generar sugerencias de Copilot!
1. Utilice la terminal VS Code para extraer el código más reciente:
```git
git pull
```
2. Creamos un archivo llamado comments.js
3. Escriba el siguiente comentario en el archivo:

```js
// Create web server
```
4. Presione enter para ir a una nueva línea.
5. Copilot sugerirá un bloque de código.

:::tip
- También podemos ingresar **control + enter** para poder ver 10 sugerencias diferentes.
:::

6. Encuentre una solución que le guste y haga clic en **Accept Solution**.
7. Enviamos el código al repositorio desde el codespace:

```git
git add comments.js
git commit -m "Copilot third commit"
git push

```

## Subir un repositorio a GitHub

#### Paso 1 - Registrar un usuario y email en git 
- Para registrar  el usuario:
```git
git config --global user.name "mi nombre" 
```
:::danger
No colocar como nombre de usuario el correo de su cuenta de Github, podría traer problemas a futuro.
:::

- Para registrar el correo:

```git
git config --global user.email "myemail@example.com"  
```

:::tip
 - Es recomendable utilizar el correo asociado a Github.
:::





- Para ver usuarios y email registrados:

```git
git config user.name
git config user.email 
```


:::tip
- Esto es para trabajar de forma local.
- Los comandos los puedes ejecutar en cualquier ubicación, ya que son credenciales globales (las usaran todos los proyectos a menos que indique una diferente dentro de uno).
:::


#### Paso 2 - Crear un repositorio en GitHub
1. Creamos una cuenta en Github (Si ya la tenemos, iniciamos sesión).
2. Creamos un nuevo repositorio, haciendo clic en el botón "New" que esta en color verde.
3. Ingresamos el nombre del repositorio.
4. Puede ser publico o privado.
5. Salteamos todo por ahora.
6. Te genera dos secuencias de comandos: Una para crear un nuevo repositorio(local) y otra para importar un repositorio existente(local). Los comandos hacelos en la ubicación del proyecto.
7. Te debería aparecer una solicitud de credenciales si lo hiciste bien.


:::tip
- Panel de control – Cuentas de usuario – Administrar credenciales – Quitar el de git.
- Hacelo si la PC ya venia con git configurado.

:::


:::tip Observación de los comandos
- Las secuencias de comandos las debes conocer.
- Podes cambiar el nombre de la rama.
:::

:::tip Github
- Setting - Delete this repository para eliminar el repositorio.

:::


:::tip
- Esto es para trabajar en la nube.
:::

## Recuperar un repositorio de GitHub
1. Crea una carpeta.
2. Usa el siguiente comando:

```git
Git clone link
```

-  Para ver el link remoto de donde estamos conectados, usamos el siguiente comando:

```git
Git remote -v
```