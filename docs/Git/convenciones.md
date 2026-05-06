---
sidebar_position: 7
---
# Estándar
## Nombre de Proyecto
#### Reglas generales
- Usar siempre nombres en minúsculas y en slug-case (palabras separadas por guiones).​
- Estructura sugerida: 
```txt
{project}-{general|service}-{service-name}-{type}
```
#### Tipos específicos:
- Backend general:
```txt
{project}-general-api (ej. example-general-api)
```
- Microservicios:
```txt
{project}-service-{service-name}-{api|cron} (ej. example-service-user-api)
```
- Frontend web:
```txt
{project}-fe o  example-{service}-fe (ej. example-user-fe)
```
- Mobile:
```txt
{project}-mobile-{platform} (ej. example-mobile-flutter)
```
- Desktop:
```txt
 {project}-desktop-{framework} (ej. example-desktop-electron)
```
- Fullstack (monorepo):
```txt
{project}-app (ej. example-app)
```
- Templates:
```txt
{framework}-{type}-template (ej. nestjs-api-template)
```
- Sitios web estáticos (con algo de backend con PHP):
```txt
{project}-website (ej. example-website)
```
- Documentación / Guías técnicas:
```txt
guide-{project | name} (ej. guide-example)
```
            
#### Ejemplos
- API monolítica del proyecto ecommerce (no basada en microservicios):
```txt
ecommerce-general-api
```
- Microservicio de cuentas en el proyecto banking:
```txt
banking-service-accounts-api
```
- Tarea programada (cron) para gestionar citas en el servicio scheduler del proyecto healthcare:
```txt
healthcare-service-scheduler-cron
```
- Microservicio de autenticación para la plataforma educativa:
```txt
edu-platform-service-auth-api
```
- API general (monolito) para gestión logística:
```txt
logistics-general-api
```
- Microservicio que maneja búsquedas de vuelos/hoteles en travel:
```txt
travel-service-search-api
```
- Tarea programada que envía notificaciones en el proyecto media:
```txt
media-service-notifications-cron
```
- API del microservicio de tablas de clasificación en gaming:
```txt
gaming-service-leaderboard-api
```
- Microservicio para gestionar reclamaciones en el proyecto insurance:
```txt
insurance-service-claims-api
```
- Sitio web estático del proyecto ecommerce, con estructura básica en HTML/CSS/JS y uso limitado de PHP:
```txt
ecommerce-website
```
- Documentación técnica del proyecto ecommerce:
```txt
guide-ecommerce
```

## Nombres de commit
### Las 7 reglas de oro
#### 1. Separar el asunto (subject) del cuerpo (body) con una línea en blanco
- Asunto: Breve resumen (ej: “Corregir error de autenticación”).
- Cuerpo: Detalles y contexto (opcional para cambios simples).
- Ejemplo:
```txt
Optimizar carga de imágenes

Se redujo el tamaño de las imágenes usando WebP en lugar de PNG,
mejorando el tiempo de carga en un 40%.
```

:::tip observación
- Si se analiza la estructura, es muy similar a un correo electrónico. Esto es porque git permite enviar emails con el contenido de los mensajes de los commits a los diversos colaboradores del proyecto.
:::
#### 2. Limitar el asunto a 50 caracteres
- Objetivo: Ser conciso y legible en herramientas como `git log --oneline`.
- Límite máximo: 72 caracteres.

:::warning
- Si tu explicación supera esa cantidad de caracteres, deberías separar tus commit en commits más pequeños. 
- Un commit debería tener cambios pequeños que sean más sencillos de visualizar/trackear, además de mejorar la legibilidad de una pull request.
:::

#### 3. Capitalizar el asunto
- Inicia la parte del subject con mayúscula.
- Correcto ✅: “`Agregar` validación de formulario”.
- Incorrecto ❌: “`agregar` validación de formulario”.



#### 4. No termines el asunto con un punto.
- Correcto ✅: “Actualizar documentación de la `API`”.
- Incorrecto ❌: “Actualizar documentación de la `API.`”.

#### 5. Usar modo imperativo en el asunto
- Un asunto para un commit bien formateado debería ser capaz de completar la siguiente oración:
    - `Este commit debe: [asunto]` .
    - O dicho en inglés: “`If applied, this commit will [subject]`”.
- Ejemplos:
    - If applied, this commit will Merge branch 'myfeature'
    - If applied, this commit will Derezz the master control program
    - If applied, this commit will Fix typo in introduction to user guide
    - If applied, this commit will Release version 1.0.0

#### 6. Limitar el cuerpo a 72 caracteres por línea
- Git no ajusta el texto automáticamente. Al escribir el body del commit, debes ajustar el texto manualmente.
- Se recomienda no superar los 72 caracteres por línea, así Git puede formatear correctamente el texto dentro del límite de 80 caracteres.
- Un buen editor puede ayudar en esta tarea, mi recomendación es configurar uno para redactar los commits o configurar VIM para que rompa el texto a los 72 caracteres cuando se escriba un commit.
- Objetivo: Mantener legibilidad en terminales y herramientas de revisión.


#### 7. Enfocar el cuerpo en el “qué” y “por qué”, no el “cómo”
- El body debe responder las preguntas ¿qué cambió? y ¿por qué? en vez del ¿cómo cambió?
- Evitar detalles técnicos: El código ya muestra el “cómo”; usar comentarios en el código si es necesario.

#### Ejemplo
```txt
Simplify serialize.h's exception handling

Remove redundant 'state' and 'exceptmask' variables. Direct exception
throwing replaces convoluted error handling, reducing code complexity
and potential bugs.
```

###  Conventional Commits
- Es una especificación que define un formato estándar para los mensajes de commit en Git.
- Su objetivo es:
    - Hacer el historial de commits más legible y claro.
    - Permitir automatización, como generar changelogs o versionado semántico.
    - Mejorar la colaboración en equipos al seguir un mismo estilo.
#### Estructura básica
```txt
<type>([optional scope]): <subject>

[optional body]

[optional footer(s)]
```


:::tip observación
- `type` : Indica la intención del cambio (qué tipo de cambio es).
- `scope` (opcional): Indica qué parte del código se modificó (módulo, componente, archivo, etc.). También podemos especificar que ticket se trabajó (aplica en Aplicaciones como Jira).
- `subject` : Describe de forma breve y clara el cambio realizado (en presente e imperativo).
- `body` (opcional): Aporta contexto adicional o detalles técnicos, explica el por qué del cambio.
- `footer` (opcional): se usa para breaking changes, referencias a issues, tickets o revisiones.
:::


#### Primera línea del mensaje `type, scope y subject`
- La primera línea del mensaje contiene información corta y concisa acerca del cambio realizado. Esta línea se encuentra compuesta por tres partes principales:
    - Type: Indica el tipo de cambio realizado
    - Scope: Indica qué parte del proyecto fue modificada
    - Subject: Indica de forma concisa el cambio realizado
- Como regla primordial, esta línea **no debe rebasar los 100 caracteres**, esto con el fin de que sea fácil de leer en github y en la mayoría de clientes GUI para git. Si no te es posible respetar este límite o suele ser una tarea complicada, lo más probable es que estés englobando demasiados cambios en un solo commit, para solucionar esto haz uso de commits atómicos, los cuales tratan, a grandes rasgos, de hacer un commit por cada feature o fix.

#### `Type`
- Como se mencionaba anteriormente, `type` se utiliza para indicar el tipo de cambio realizado. 
- Los más comunes son:
    - `feat`: Agrega una nueva funcionalidad para el usuario
    - `fix`: Corrige un bug que afecta al usuario.
    - `docs`: Cambios en la documentación.
    - `style`: Cambios de formato, tabulaciones, espacios o puntos y coma, etc; sin afectar lógica. Se usa para cambios puramente estéticos o de formato.
    - `refactor`: Reestructuración de código sin cambiar comportamiento. Se usa cuando reestructurás o mejorás el código existente sin cambiar su comportamiento externo. El objetivo es mejorar legibilidad, mantenibilidad o estructura interna.
    - `test`: Agrega o modifica tests.
    - `chore`: Se usa para indicar tareas de mantenimiento que no impactan directamente en el código de negocio (lógica). No agregan funcionalidades ni corrigen bugs visibles para el usuario final. Son cambios necesarios para mantener el proyecto en funcionamiento y organizado. Ejemplos:
        - Actualizar dependencias.
        - Cambiar configuraciones de ESLint, Prettier o TypeScript.
        - Modificar scripts de npm/yarn.
        - Ajustar archivos de configuración (`.gitignore`, `.env.example`, etc.).
    - `perf`: Cambios que mejoran el rendimiento del sitio.
    - `build`: Cambios en el proceso de compilación, instalación o despliegue del proyecto.
    - `ci`: Cambios en configuración de CI/CD (Integración continua)
    - `revert`: Reversión de un commit anterior.

#### `Scope`
- El `scope` indica qué sección, funcionalidad o lógica del proyecto se ha modificado. Dado que cada proyecto puede variar bastante uno del otro, asignar este valor se puede tornar un poco complicado, es por esto que se recomienda siempre tener en mente contestar la pregunta **¿qué parte cambio?**, para poder asignar este valor.

#### `Subject`
- En el `subject` se describe de la manera más clara y concisa posible qué fue lo que se modificó. Podemos considerar al subject como una de las partes más importantes del mensaje, por esa razón, además de pensar bastante bien lo que vamos a escribir, es necesario seguir ciertas reglas ([ver las 7 reglas de oro](#las-7-reglas-de-oro))

#### `Body`
- En el `body` encontramos una descripción extensa y detalla del cambio realizado. Esta sección se encuentra separada del **subject** por medio de un **salto de línea**, la separación es muy importante ya que delimita el texto que aparece cuando hacemos uso del comando `git log`. Aquí también se debe seguir ciertas reglas ([ver las 7 reglas de oro](#las-7-reglas-de-oro)).
- Existen ocaciones las que no será necesario agregar el `body`. Éstas se pueden dar porque los cambios, adiciones o refactorizaciónes realizadas son tan pequeñas o sencillas que la primera línea del mensaje es más que suficiente para indicar qué es lo que sucedió, si te encuentras en una situación como esta, siéntete libre de omitir el `body`.



#### `Footer`
- Como última sección tenemos al `footer`. Aquí se deben indicar todos aquellos cambios críticos realizados y que pueden romper cosas, así como la forma en la que se deben realizar las migraciones correspondientes.
- Esta sección, al igual que el `body`, debe respetar la regla de los 72 caracteres y puede ser omitida.

##### Breaking changes
- Un breaking change es un cambio que rompe la compatibilidad con versiones anteriores del proyecto. Es decir, algo que antes funcionaba deja de funcionar o funciona de otra manera, y obliga a quien usa el proyecto a modificar su código.
- Ejemplos de breaking changes:
    - Eliminar una función o endpoint existente.
    - Cambiar la firma de una función (parámetros distintos).
    - Modificar el formato de una respuesta de una API.
    - Cambiar una configuración obligatoria.
- Cómo se indica en el footer:
```txt
BREAKING CHANGE: the /login endpoint was removed
```
- También puedes indicar un breaking change usando el signo `!` después del `type` o del `scope`. Ejemplo:
```text
feat(auth)!: remove legacy authentication method
```

##### Referencias a issues
- Un issue es un problema, bug o mejora registrada en un sistema de seguimiento (GitHub Issues, GitLab Issues, Jira, etc.).
- Se usa para vincular el commit con el problema que resuelve.
- Ejemplo:
```txt
fix(auth): handle expired token

Closes #123
```

:::tip observación
- `#123` es el número del issue.
- Palabras como `Closes`, `Fixes`, `Resolves` permiten que la plataforma cierre el issue automáticamente.
:::

##### Tickets
- Un ticket es similar a un issue, pero suele usarse en herramientas de gestión como Jira, Trello o Azure DevOps.
- Representa una tarea, bug o requerimiento asignado a alguien.
- Ejemplo:
```txt
feat(payment): add refund support

Refs: PAY-456
```
:::tip observación
- `PAY-456` es el identificador del ticket.
- `Refs`: indica que el commit está relacionado, aunque no lo cierre automáticamente.
:::

##### Revisiones
- Cuando hablamos de revisiones, nos referimos a una modificación, observación o validación realizada sobre un cambio de código.
- Por lo general, se hace referencia a:
    - un Pull Request (PR)
    - un Merge Request (MR)
    - un Code review realizado por otra persona.
- Ejemplo:
```txt
refactor(auth): simplify token validation

Improve readability and remove duplicated logic.

Refs: PR #42
Reviewed-by: Juan Pérez
```

:::tip observación
- `PR #42` es el identificador del Pull Request donde se revisó e integró el cambio.
- `Refs` : indica que el commit está relacionado con ese Pull Request, pero no lo cierra ni lo finaliza automáticamente.
- `Reviewed-by` : indica quién realizó la revisión de código, dejando constancia de que el cambio fue revisado.
:::

#####  Preguntas / Problemas frecuentes
#### El mensaje se redacto mal
- Si redactamos mal un mensaje y hicimos un commit incorrecto, podemos reescribir el mensaje del commit usando [`git commit --amend`](https://docs.github.com/en/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/changing-a-commit-message).

#### ¿Qué pasa si uso un tipo incorrecto?
- Si todavía no has publicado, puedes hacer `git rebase -i` y editar el mensaje.
- Si ya lo publicaste, el daño no es fatal. Solo perderás algo de automatización (como el changelog).

#### ¿Puedo inventar mis propios tipos?
- Sí, pero solo `feat`, `fix` y `BREAKING CHANGE` afectan directamente la gestión semántica de versiones. Los demás son personalizables.

#### ¿Todos deben seguir esta convención?
- No necesariamente. Si el equipo trabaja con `pull requests` y utiliza `squash & merge`, el mensaje final del commit se define al momento del merge. Esto permite ajustar o corregir el mensaje sin cargar al resto del equipo.


## Herramientas recomendadas
#### commitlint
- Valida que los commits cumplan la convención.
- [commitlint Lint commit messages](https://commitlint.js.org/)
####  Commitizen
- Es una herramienta que te permite crear mensajes de confirmación sencillos y fáciles de entender con solo responder preguntas.
- [commitizen](https://commitizen-tools.github.io/commitizen/)
#### Husky
- Es un hook que te permite ejecutar un script antes de un commit o push para validar o testear.
- [Husky](https://typicode.github.io/husky/)


## Plantilla de commit
- En el desarrollo de software, la consistencia es fundamental, y uno de los aspectos más importantes donde esto se refleja es en los mensajes de commit: Git permite construir un historial claro de cambios que sirve como documentación y referencia durante la colaboración, pero si cada miembro del equipo escribe sus commits con estilos distintos, se vuelve difícil rastrear y entender esos cambios.
- Por eso, si estás configurando tu repositorio, implementar una plantilla de commit es una excelente práctica: te ayudará a crear mensajes claros y consistentes, asegurando que siempre respeten la convención que estés siguiendo.
- Estos tres puntos son las principales razones por las que vale la pena usar una plantilla de commit:
    1. Consistencia → Evita el caos. Si todos escriben commits con el mismo estilo (por ejemplo: feat: agregar login), es mucho más fácil leer el historial y saber qué hizo cada persona.
    2. Claridad → No necesitas adivinar qué cambió. Un formato claro te dice de un vistazo si fue una mejora, un bug fix o un cambio de documentación.
    3. Automatización → La plantilla puede recordarte cosas importantes: “¿Olvidaste el número del ticket?” o “¿Incluiste una descripción breve?”. Esto evita errores y mejora la trazabilidad del trabajo.

#### Configuración de Plantilla
#### 1- Crea un archivo ``txt`` para tu plantilla
- Puedes nombrarlo como quieras, aunque generalmente se usa un nombre descriptivo como ``commit_template.txt``.
#### 2- Modifica el archivo ``txt``
- El archivo puede contener:
    - Texto que luego será modificado en cada commit.
    - Comentarios de una línea que comienzan con el carácter ``#``. Por lo general, las líneas comentadas no se incluyen en el mensaje final del commit.
- Ejemplo:
```txt
[tipo](scope): Descripción

cuerpo

footer

# === INSTRUCCIONES ===
# • Descripción: breve resumen del cambio en imperativo y presente
#   (máx. 50 caracteres, primera letra en mayúscula, sin punto final).
#   Ejemplos: "Agregar validación de email", "Corregir error al guardar perfil"
# • Scope: parte del código o módulo afectado (ej: auth, ui, api, config).
#   Opcional pero recomendado.
# • Cuerpo: explica el "por qué" y el "cómo" del cambio.
#   Usa líneas de ≤72 caracteres. Deja una línea vacía antes y después.
# • Footer: metadatos técnicos como:
#     - Referencias: "Closes #123", "Fixes PROJ-456"
#     - Breaking changes: comienza con "BREAKING CHANGE:"
#
# ⚠️ Nota: El cuerpo y el footer son opcionales.
#          La línea de descripción es obligatoria.
#          Las líneas que comienzan con '#' se ignoran en el commit final.

# === TIPOS COMUNES ===
# feat:     Nueva funcionalidad visible para el usuario
# fix:      Corrección de un bug que afecta al usuario
# docs:     Cambios en documentación (README, comentarios, guías)
# style:    Cambios de formato sin alterar la lógica (espacios, tabulaciones, etc.)
# refactor: Reescritura o mejora de código sin cambiar comportamiento externo.
# perf:     Mejoras de rendimiento (velocidad, memoria, etc.).
# test:     Adición o corrección de pruebas.
# chore:    Cambios para mantener el proyecto en funcionamiento sin impacto en el usuario.
# build:    Cambios en el proceso de compilación, instalación o despliegue del proyecto.
# ci:       Cambios en configuración de CI/CD (Integración continua)
# revert:   Reversión total o parcial de un commit anterior
``` 

#### 3- Configurar Git
- Para que Git muestre esa plantilla cada vez que hagamos un commit, debemos ejecutar el siguiente comando:
```powershell
git config commit.template ubicacion_del_archivo.txt
```
:::tip
- 💡 Nota: Asegúrate de reemplazar ``ubicacion_del_archivo.txt`` con la ruta relativa o absoluta del archivo de tu plantilla (por ejemplo: ``.gitmessage``, ``./commit_template.txt``, etc.).
- Si quieres establecer la plantilla para **TODOS** tus repositorios, añade ``--global``.
- Puedes comprobar si ya se ha definido una plantilla para un repositorio mediante: ``git config --get commit.template``.  Si el comando no devuelve nada, es que no se ha definido ninguna plantilla para el repositorio actual.
:::


#### 4- Testear la plantilla
- Generalmente, cuando vamos a hacer un commit tras añadir los archivos a la zona de staging, utilizamos la instrucción: ``git commit -m "Mi mensaje de commit"``
- Lo que no todo el mundo tiene claro es que, si omitimos el parametro ``-m`` y ejecutamos simplemente:
```powershell
git commit
```
- Lo que ocurre es que se abre nuestro editor de código predeterminado, con una plantilla de texto (que puede ser la de por defecto o la que configuramos anteriormente):
```txt title="COMMIT_EDITMSG"
[tipo](scope): Descripción

cuerpo

footer

# === INSTRUCCIONES ===
# • Descripción: breve resumen del cambio en imperativo y presente
#   (máx. 50 caracteres, primera letra en mayúscula, sin punto final).
#   Ejemplos: "Agregar validación de email", "Corregir error al guardar perfil"
# • Scope: parte del código o módulo afectado (ej: auth, ui, api, config).
#   Opcional pero recomendado.
# • Cuerpo: explica el "por qué" y el "cómo" del cambio.

#   Usa líneas de ≤72 caracteres. Deja una línea vacía antes y después.
# • Footer: metadatos técnicos como:
#     - Referencias: "Closes #123", "Fixes PROJ-456"
#     - Breaking changes: comienza con "BREAKING CHANGE:"
#
# ⚠️ Nota: El cuerpo y el footer son opcionales.
#          La línea de descripción es obligatoria.
#          Las líneas que comienzan con '#' se ignoran en el commit final.

# === TIPOS COMUNES ===
# feat:     Nueva funcionalidad visible para el usuario
# fix:      Corrección de un bug que afecta al usuario
# docs:     Cambios en documentación (README, comentarios, guías)
# style:    Cambios de formato sin alterar la lógica (espacios, tabulaciones, etc.)
# refactor: Reescritura o mejora de código sin cambiar comportamiento externo.
# perf:     Mejoras de rendimiento (velocidad, memoria, etc.).
# test:     Adición o corrección de pruebas.
# chore:    Cambios para mantener el proyecto en funcionamiento sin impacto en el usuario.
# build:    Cambios en el proceso de compilación, instalación o despliegue del proyecto.
# ci:       Cambios en configuración de CI/CD (Integración continua)
# revert:   Reversión total o parcial de un commit anterior
```

- O el por defecto:
```txt title="COMMIT_EDITMSG"
# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# On branch main
#
# Initial commit
#
# Changes to be committed:
#	new file:   New Text Document.txt
#
```
- Una vez que modifiquemos el archivo `COMMIT_EDITMSG` que se abre con el editor de texto al ejecutar `git commit`, solo tenemos que guardar los cambios y cerrar el archivo. Al hacerlo, Git realizará el commit utilizando como mensaje todo el contenido del archivo que no esté comentado (es decir, las líneas que no comiencen con `#`).



## Nombres de ramas
- Una buena nomenclatura de ramas en Git es esencial para una gestión eficaz del proyecto.

#### Tipos de ramas de Git
- Las ramas en Git se pueden clasificar en dos tipos según su longevidad y el tipo de cambio que introducen:
    - Ramas regulares 
    - Ramas temporales 



#### Ramas regulares de Git
- Las ramas regulares en Git son ramas de larga duración que se utilizan como base para organizar el proyecto.
- Su función principal es mantener una estructura estable y predecible del repositorio, ya que suelen representar etapas importantes del desarrollo del proyecto.
- Estas ramas existen de forma permanente en el repositorio y no se eliminan después de un merge, a diferencia de las ramas temporales (como ``feature``, ``bugfix`` o ``hotfix``).
- Por convención, sus nombres son simples y bien conocidos, lo que facilita su identificación y uso por parte de todos los desarrolladores.
- Las Ramas Principales son:
    - ``master`` o ``main``: Es la rama principal del proyecto, donde el código fuente refleja el estado actual y estable del sistema. Cualquier commit en esta rama debería ser apto para desplegarse en producción sin riesgos. En proyectos modernos, se prefiere el nombre ``main`` por convención, ya que es el valor por defecto en plataformas como GitHub.
    - ``develop`` o ``dev``: En algunos flujos de trabajo —especialmente en Git Flow— se utiliza una rama de desarrollo que agrupa todas las nuevas funcionalidades en curso. Esta rama representa el estado más reciente del software en desarrollo, pero aún no está listo para producción. Habitualmente, cada nueva característica se desarrolla en ramas derivadas de ``develop`` y luego se reintegra en ella. Cuando se alcanza un hito o una versión estable, el contenido de ``develop`` se fusiona (merge) en ``main``.
    - ``qa`` o ``testing``: En algunos flujos de trabajo se utiliza una rama dedicada al control de calidad y pruebas. Esta rama agrupa el código que ya fue desarrollado e integrado y que se considera funcionalmente completo, pero que aún debe ser validado antes de llegar a producción. En ella se ejecutan pruebas manuales y automatizadas para detectar errores, validar funcionalidades y asegurar la estabilidad del sistema. Solo los cambios que superan correctamente esta etapa se fusionan (merge) en ``main`` o en la rama de lanzamiento correspondiente, reduciendo el riesgo de fallos en el entorno productivo.


#### Ramas temporales
- Las ramas temporales son efímeras y desechables. Cumplen funciones específicas a corto plazo y suelen eliminarse posteriormente.
- Algunas de las ramas temporales en Git son:
    - Rama de corrección de errores: Se utiliza para solucionar errores que deben corregirse antes de llegar a la rama de producción correspondiente.
    - Rama de revisión: Permite aplicar una solución rápida y temporal en situaciones de emergencia, sin seguir el flujo habitual. Generalmente, se fusiona primero en producción y luego en desarrollo.
    - Rama de características: Se usa para agregar, modificar o eliminar una funcionalidad específica. Parte de la rama de desarrollo y, una vez finalizada, se fusiona nuevamente en ella.
    - Rama experimental: Se utiliza para probar ideas o tecnologías nuevas que no forman parte del plan actual. No siempre se integran al proyecto principal.
    - Rama WIP (Work In Progress): Se utiliza para trabajo en curso o pruebas parciales que aún no están terminadas. Estas ramas suelen ser informales, definidas por el propio equipo según sus necesidades, y no siguen un estándar ni reglas globales. Generalmente, no están pensadas para integrarse directamente al flujo principal, sino como un espacio temporal para experimentar o avanzar en tareas incompletas.
    - Rama de fusión: Es una rama temporal creada para resolver conflictos al combinar otras ramas. Se elimina una vez que los conflictos están resueltos y los cambios verificados.

:::tip
- La lista anterior no es completa. Existen otras convenciones y formatos para nombrar ramas temporales, que pueden variar según el proyecto.
:::


####  Ramas de Características (Feature Branches)
- Las ramas de características se utilizan para desarrollar nuevas funcionalidades, mejoras o cambios significativos en el código sin afectar la rama principal (``main`` o ``develop``). 
- Cada funcionalidad nueva se desarrolla de forma aislada en su propia rama, lo que permite trabajar de manera segura, hacer pruebas y recibir revisiones antes de integrarla al proyecto.
- Generalmente, estas ramas se crean a partir de ``develop`` (en Git Flow) o directamente desde ``main`` en flujos más simples.
- Una vez que la funcionalidad está terminada, probada y aprobada, se fusiona (merge) nuevamente en la rama de desarrollo correspondiente.
- Se suele usar el prefijo ``feature/`` seguido de una descripción clara y concisa de la funcionalidad. Por ejemplo:
    - ``feature/login-authentication``
    - ``feature/new-ui-layout``
    - ``feature/add-user-profile``
#### Ramas de Corrección de Errores (Bugfix Branches)
- Las ramas de corrección de errores se utilizan exclusivamente para solucionar fallos detectados durante el desarrollo o las pruebas.
- Permiten corregir problemas sin mezclar estos cambios con nuevas funcionalidades, lo que facilita la revisión del código y el control de versiones.
- Normalmente se crean desde ``develop``, ya que suelen corregir errores de funcionalidades que aún no están en producción.
- Una vez solucionado el problema, la rama se fusiona nuevamente en ``develop``.
- Se usa el prefijo ``bugfix/`` seguido de una breve descripción del error corregido. Por ejemplo:
    - ``bugfix/login-error``
    - ``bugfix/missing-icons``
    - ``bugfix/404-page-not-found``
#### Ramas de Lanzamiento (Release Branches)
- Las ramas de lanzamiento se crean cuando el proyecto alcanza un estado cercano a una versión estable que está lista para publicarse.
- Su objetivo es preparar el release (lanzamiento), realizando tareas finales como:
    - Correcciones menores
    - Ajustes de configuración
    - Actualización de documentación
    - Versionado
- Mientras esta rama existe, no se agregan nuevas funcionalidades; solo se hacen ajustes necesarios para estabilizar la versión.
- Una vez lista, se fusiona en ``main`` (para producción) y también en ``develop`` para mantener ambos sincronizados.
- Se nombran generalmente con el prefijo ``release/`` seguido del número de versión. Por ejemplo:
    - ``release/v1.2.0``
    - ``release/v1.2.1``
#### Ramas de Mantenimiento o Parches (Hotfix Branches)
- Las ramas hotfix se utilizan para corregir errores críticos en producción que requieren una solución inmediata.
- Se crean directamente desde ``main``, ya que el problema existe en la versión productiva.
- Estas correcciones suelen ser pequeñas, urgentes y enfocadas únicamente en resolver el error.
- Una vez solucionado el problema:
    - Se fusionan en ``main`` para desplegar el parche.
    - También se fusionan en ``develop`` para que el arreglo no se pierda en futuras versiones.
- Se utiliza el prefijo ``hotfix/`` seguido de una descripción clara del problema crítico. Por ejemplo:
    - ``hotfix/critical-login-issue``
    - ``hotfix/payment-processing-error``
#### Ramas Personales o de Experimentación
- Estas ramas se usan para pruebas, prototipos o experimentos, donde el código puede no estar listo para integrarse al proyecto principal.
- Son útiles para evaluar nuevas tecnologías, frameworks, ideas o enfoques sin comprometer la estabilidad del código base.
- No siempre terminan fusionándose; muchas veces se eliminan una vez finalizado el experimento.
- Pueden tener nombres más libres o incluir el nombre del desarrollador para identificar al autor del trabajo.
- Ejemplos:
    - ``experiment/new-framework-test``
    - ``john/prototype-new-feature``

#### Buenas Prácticas
- Usá nombres de ramas cortos pero descriptivos: El nombre debe permitir entender rápidamente qué se está desarrollando o corrigiendo, sin necesidad de revisar el contenido de la rama.
- Utilizá letras minúsculas y guiones para separar palabras: Esto mejora la legibilidad y evita problemas de compatibilidad entre sistemas. Ejemplo: ``feature/add-user-profile``
- Evitá el uso de espacios y caracteres especiales: Los espacios y símbolos pueden generar errores o confusiones al trabajar desde la línea de comandos o con distintas herramientas.
- Incluí un identificador de tarea o ticket cuando sea posible: Si el proyecto utiliza un sistema de seguimiento (como Jira, Trello o GitHub Issues), es recomendable agregar el ID de la tarea en el nombre de la rama. Ejemplo: ``feature/JIRA-123-add-login`` o ``wip/8712-add-login-moduleCopiar``.
- Las barras diagonales ``(/)`` se usan para definir prefijos en los nombres de las ramas, permitiendo organizarlas de forma jerárquica y agruparlas por tipo o propósito, como ``feature/``, ``bugfix/``, ``hotfix/``.
- A veces es una buena práctica usar el nombre del autor en el nombre de la rama de Git para indicar qué desarrollador está trabajando en ella. De esta forma, es más fácil identificar al responsable de una funcionalidad y hacer su seguimiento. Ejemplo: ``johndoe/feature/add-user-profile``.

## Git branching strategy
- Una estrategia de ramificación en Git (Git branching strategy) es el conjunto de reglas, convenciones y prácticas que define cómo y cuándo se crean, usan, fusionan y eliminan las ramas dentro de un repositorio Git.
- No es necesario crear una estrategia de ramificación en Git desde cero; existen muchas estrategias conocidas y ampliamente utilizadas que pueden adaptarse a las necesidades de cada proyecto o equipo.

### Trunk-Based Development
- Esta estrategia de branching minimiza el uso de ramas. En este enfoque, los desarrolladores integran sus cambios directamente en la rama tronco (central o principal), que suele ser ``main`` o ``master``, generalmente al menos una vez al día.
-  Esta rama central debe mantenerse siempre estable y lista para su despliegue en cualquier momento.
- Generalmente, los desarrolladores trabajan en ramas temporales —como ramas de características, correcciones, etc— y, cuando los cambios están listos, los integran al tronco y eliminan esas ramas para mantener el repositorio limpio.
-  Como curiosidad, el nombre trunk-based proviene de la idea de que el proyecto debe asemejarse a un árbol: el tronco representa la parte principal y más robusta del desarrollo, mientras que las ramas son pequeñas desviaciones temporales que deben mantenerse cortas o “podarse” rápidamente.
- Esta metodología está estrechamente relacionada con el concepto de **feature flags** (o indicadores de características). Estos permiten activar o desactivar funcionalidades específicas mediante una condición o configuración. Gracias a esto, es posible integrar código nuevo incluso cuando una funcionalidad aún no está completa, con la seguridad de que permanecerá deshabilitada hasta que esté lista para usarse.
#### Rama release
- Imaginemos que queremos lanzar una versión mensual de nuestro producto. Unos días antes del despliegue, y para no interferir en dicha release, crearíamos la nueva rama ``release`` que saldría del trunk (tronco).
- Éste sería un lugar estable donde probar y testear la release, protegiéndola del despliegue continuo al que se ve sometida la rama trunk. Durante el trabajo en la rama de release, pueden realizarse correcciones o ajustes mediante nuevos commits, que posteriormente se llevan a la rama principal mediante un cherry-pick.

:::tip cherry-pick
- Un cherry-pick en Git es una operación que permite copiar uno o varios commits específicos de una rama y aplicarlos en otra, sin fusionar la rama completa.
- Se realiza con el comando ``git cherry-pick``.
:::

#### Resumen
- La estrategia se basa en una única rama principal, llamada tronco, que en Git suele denominarse ``main`` o ``master``.
- El objetivo es que el tronco se mantenga siempre “saludable”, es decir, listo para desplegarse en producción en cualquier momento.
- Para el versionado y la preparación de lanzamientos, se utiliza una rama de ``release``.
- Está basada en desarrollar cambios pequeños y frecuentes, lo que facilita revisiones más simples y permite a los equipos mantener conversaciones claras y tomar decisiones rápidas al analizar áreas limitadas de código.
- Utiliza el concepto de **feature flags**, que permiten activar o desactivar funcionalidades específicas mediante una condición o configuración.
- En esta estrategia, las pruebas automatizadas son esenciales para mantener el tronco saludable; por ello, las revisiones de código deben realizarse de forma inmediata y continua.
- Al minimizar el uso de ramas, se recomienda fusionar las ramas de características, correcciones y otros cambios al tronco al menos una vez al día, y eliminarlas una vez integradas.
- Salvo la rama principal y la rama de ``release``, no existen otras ramas de larga duración.


#### Ventajas
- Es una estrategia muy rápida que reduce la distancia entre los miembros del equipo. Los desarrolladores siempre van poder trabajar con el código más reciente.
- El equipo se vuelve mas eficiente y mas ágil para entregar código.
- Produce menos conflictos en comparación con otras metodologías.
- Evita la existencia de ramas largas que nunca terminan de fusionarse.
- Mantiene un historial de cambios limpio, claro y fácil de leer.
#### Desventajas
- Requiere un equipo muy maduro y con experiencia para que la metodología se aplique correctamente.
- Es necesario contar con un sistema de CI/CD sólido y bien implementado.
- Existe una ausencia de entornos de preproducción tradicionales. Es posible lograr un entorno de PRE, pero requiere un trabajo de DevOps muy cuidadoso. Generalmente, esto se resuelve mediante feature flags, lo que puede ser beneficioso porque evita mezclar cambios en los que distintos desarrolladores están trabajando. Sin embargo, también añade complejidad al sistema.
- Desde mi punto de vista, la necesidad de mantener feature flags representa un inconveniente importante, ya que pueden convertirse en una fuente de errores o en un overhead de complejidad que no siempre compensa los beneficios de la metodología.
### GitHub Flow
- Esta metodología, al igual que otras estrategias modernas, se apoya en una **única rama principal**, a partir de la cual se crean ramas de características (*feature branches*) o de corrección de errores (*bugfix branches*).
- Cada nueva funcionalidad o corrección de errores se desarrolla de forma aislada en su propia rama, y el equipo trabaja en ella hasta que el cambio está completamente terminado.
- Durante el desarrollo, la rama de la feature o del bugfix puede desplegarse para validar su funcionamiento en un entorno real, aun cuando no esté fusionada con la rama principal.
- Este enfoque encaja muy bien con entornos de despliegue continuo, ya que prioriza la agilidad y la rapidez al momento de liberar nuevas funcionalidades.
- Una vez que la funcionalidad o corrección está totalmente estable y validada, la rama correspondiente se fusiona (merge) con la rama principal.
- Los entornos previos a producción, como staging o testing, también pueden desplegarse desde la rama de la feature o del bugfix, lo que permite probar los cambios antes del despliegue final en producción.






:::tip
- La aplicación puede desplegarse de diferentes maneras.
- **Desde `main`:**
    - Es lo más común.
    - Representa el estado estable y validado del código.
    - Normalmente es lo que se despliega a producción de forma “oficial”.
- **Desde una `feature` o  `bugfix`:**
    - Se utiliza para probar, validar o revisar cambios.
    - Puede desplegarse en:
        - *staging* (entorno que replica el estado actual del proyecto en producción para validar nuevos cambios antes de publicarlos)
        - *testing* (entorno destinado a pruebas funcionales y automatizadas)
        - entornos temporales (entornos creados solo para validar una feature específica)
        - o incluso en producción de forma controlada (*feature flags*, usuarios limitados, *canary* —despliegue gradual a un pequeño porcentaje de usuarios—).
    - No reemplaza a `main` como referencia estable.
:::

:::tip
- Además de los prefijos `feature` y `bugfix` al crear ramas, se pueden utilizar otros según las necesidades del proyecto, como `hotfix` o `docs` por ejemplo.
- Lo más importante es que todas las ramas se creen a partir de la rama principal y, una vez completadas, se fusionen nuevamente en ella.
:::
##### Ejemplo
```powershell
# Nos aseguramos de estar en la rama principal
git checkout main

# Traemos los últimos cambios del repositorio remoto
git pull origin main

# Creamos y nos movemos a una nueva rama de feature
git checkout -b feature/perfil-de-usuario

# --- Luego de agregar una interfaz ---

# Agregamos los archivos modificados al staging
git add .

# Creamos un commit con los cambios
git commit -m "Añadir interfaz de usuario a la página de perfil de usuario"

# Subimos la rama de feature al repositorio remoto
git push origin feature/perfil-de-usuario

# --- Luego de recibir comentarios o hacer más cambios ---

# Agregamos los nuevos cambios
git add .

# Commit con correcciones
git commit -m "Abordar comentarios de la revisión"

# Subimos los commits a la misma rama
git push

# --- Antes de integrar la feature ---

# Volvemos a la rama de la feature
git checkout feature/perfil-de-usuario

# Traemos los últimos cambios remotos
git fetch origin

# Rebaseamos la feature sobre el main actualizado
git rebase origin/main
```

:::tip
- La fusión final (`git merge feature/perfil-de-usuario`) normalmente se hace vía Pull Request, no desde consola.
:::

#### Ventajas
- Es una estrategia simple y fácil de entender para todo el equipo.
- Funciona muy bien con despliegue continuo, ya que los cambios se integran rápido.
- Reduce la cantidad de ramas, lo que facilita su mantenimiento.
- Fomenta la colaboración mediante Pull Requests, donde se revisa el código antes de integrarlo.
- Mantiene un historial de cambios limpio y fácil de leer.
- La rama master (o main) se mantiene estable y confiable, lista para producción y permite volver atrás (rollback) de forma segura si algo falla.
- Al salir todas las ramas desde un mismo punto, se evitan conflictos innecesarios y el repositorio se mantiene ordenado.
#### Desventajas
- Tiene poco soporte para la gestión de múltiples versiones del producto.
- No define de forma clara etapas de pruebas o integración separadas.
- Puede resultar riesgosa si no se cuenta con pruebas automatizadas sólidas.
- Es difícil mantener varias versiones activas al mismo tiempo.
- Requiere un equipo de operaciones experimentado, ya que depende de automatización sólida, buenos procesos de CI/CD y mecanismos confiables de despliegue y rollback.
### GitFlow 
-  Es la metodología más conocida de todas y también la más completa.
- A diferencia del Trunk-Based Development, Gitflow trabaja con más ramas y con cambios que tardan más tiempo en integrarse.
- En Gitflow, cuando se crea una rama de una funcionalidad, esa rama se mantiene separada durante bastante tiempo mientras se desarrolla toda la feature. Durante ese período, la rama principal de desarrollo sigue avanzando con cambios de otros desarrolladores. Como resultado, cuando finalmente se intenta unir la feature, es común que aparezcan conflictos o diferencias importantes, lo que hace que la integración requiera más trabajo y coordinación.
- Gitflow es especialmente útil en proyectos con ciclos de lanzamiento planificados, ya que establece de forma clara qué ramas se utilizan para el desarrollo, la preparación de versiones, la corrección de errores y el mantenimiento de producción (es decir, arreglos o ajustes sobre versiones que ya están desplegadas). No introduce nuevos comandos de Git, sino que establece reglas claras sobre cómo y cuándo usar las ramas, lo que ayuda al equipo a trabajar mejor, organizar las versiones y seguir los cambios.

#### Ramas principales 
- En lugar de utilizar una única rama principal, este flujo de trabajo emplea dos ramas de larga duración para registrar el historial del proyecto:
    - `main` / `master`: Contiene el código más estable y listo para ser lanzado a producción. Cada commit suele estar asociado a una versión del sistema, por ejemplo: `v0.1`.
    - `develop`: Es la rama que contiene todas las funcionalidades que todavía no están en producción y siguen en desarrollo. En esta rama se van uniendo las distintas ramas de trabajo para comprobar que las funcionalidades funcionen correctamente juntas antes de pasar a producción.
- Lo primero que se hace en el proyecto es:
```powershell
# Creamos la rama develop a partir de la rama actual (normalmente main)
git branch develop

# Subimos la rama develop al repositorio remoto y la establecemos como upstream
git push -u origin develop
```
- La rama develop acumula todo el historial del desarrollo del proyecto, incluyendo la integración de nuevas funcionalidades y cambios intermedios. En cambio, la rama main solo refleja las versiones estables que se han publicado.
- A partir de ese momento, los demás desarrolladores deben clonar el repositorio y trabajar siguiendo la rama develop, creando ramas locales que la tomen como referencia.


:::tip Git flow
- Git Flow es una herramienta complementaria de Git que permite ejecutar comandos específicos para trabajar siguiendo la estrategia Gitflow. En Windows suele venir incluida con Git, mientras que en otros sistemas operativos puede ser necesario instalarla manualmente.
- Para verificar que Git Flow esté instalado, se puede ejecutar el comando `git flow version`.
- Al comienzo del proyecto, al ejecutar el comando `git flow init`, se inicializa Git Flow en el repositorio, se crea la rama `develop` y se configuran las ramas principales y los prefijos que se utilizarán durante el desarrollo.
:::


#### Ramas de función
- Todas las nuevas funcionalidades deben desarrollarse en su propia rama, la cual puede subirse al repositorio central para respaldo o colaboración.
- A diferencia de otros flujos, estas ramas de funcionalidades no se crean desde `main`, sino desde `develop`, que actúa como rama base.
- Una vez que la funcionalidad está completa, se fusiona nuevamente en `develop`.
- Las ramas de funcionalidades nunca se integran directamente en `main`.
- Suelen utilizar el prefijo `feature/` y se crean a partir de la versión más reciente de la rama `develop`.
##### Creación de una rama de función
- Sin git-flow:
```powershell
git checkout develop
git checkout -b feature_branch
```
- Con git-flow:
```powershell
git flow feature start feature_branch
```
##### Finalización de una rama de función
- Cuando hayas terminado con el trabajo de desarrollo en la función, el siguiente paso es fusionar `feature_branch` en `develop`.
- Sin git-flow:
```powershell
git checkout develop
git merge feature_branch
```
- Con git-flow:
```powershell
git flow feature finish feature_branch
```
#### Ramas de publicación
- Cuando la rama `develop` ya reúne suficientes funcionalidades para una nueva versión —o se acerca una fecha de lanzamiento— se crea una rama `release` a partir de `develop`. Esta rama marca el inicio del proceso de publicación: a partir de ese momento no se agregan nuevas funcionalidades, sino que solo se permiten correcciones de errores, ajustes finales y tareas relacionadas con la publicación (como documentación o versionado).
- Una vez que la versión está lista, la rama `release` se fusiona en `main` y se etiqueta con el **número de versión correspondiente**. Luego, esos mismos cambios se vuelven a fusionar en `develop`, para que el desarrollo continúe sobre una base actualizada.
- El uso de ramas `release` permite que un equipo prepare y estabilice una versión mientras otros desarrolladores siguen trabajando en nuevas funcionalidades para lanzamientos futuros. Además, hace que las distintas etapas del desarrollo sean claras y visibles en la estructura del repositorio.
- Las ramas `release`, al igual que las ramas `feature`, se crean siempre a partir de la rama `develop`.
##### Creación de una rama de publicación
- Sin git-flow:
```powershell
git checkout develop
git checkout -b release/0.1.0
```
- Con git-flow:
```powershell
git flow release start 0.1.0
```
- Cuando la versión está lista para su lanzamiento, la rama release se fusiona tanto en main como en develop, y luego se elimina. Es importante integrarla nuevamente en develop, ya que durante la preparación de la versión pueden haberse realizado correcciones o ajustes relevantes que deben estar disponibles para las nuevas funcionalidades en desarrollo.
- Si en la organización se le da mucha importancia a la revisión de código, este momento es ideal para realizar una solicitud de incorporación de cambios (pull request).
##### Finalización de una rama de publicación
- Sin git-flow:
```powershell
git checkout main
git merge release/0.1.0
```
- Con git-flow:
```powershell
git flow release finish '0.1.0'
```

#### Ramas de corrección
- Las ramas de `hotfix` (o mantenimiento) se utilizan para corregir errores urgentes detectados en producción. A diferencia de las ramas `feature` o `release`, las ramas `hotfix` se crean directamente desde la rama `main`, ya que parten del código que está actualmente en producción. Esta es la única situación en Gitflow en la que se trabaja directamente a partir de `main`.
- Una vez aplicada y validada la corrección, la rama `hotfix` se fusiona nuevamente en `main` y también en `develop` (o en la rama `release` activa, si existe), para asegurar que el arreglo no se pierda en futuros desarrollos. Luego, la rama `main` se etiqueta con un nuevo número de versión.
- Este enfoque permite solucionar problemas críticos sin interrumpir el desarrollo de nuevas funcionalidades ni esperar al próximo ciclo de publicación. En la práctica, las ramas `hotfix` funcionan como ramas `release` puntuales que actúan directamente sobre la versión en producción.
##### Creación de una rama de corrección
- Sin git-flow:
```powershell
git checkout main
git checkout -b hotfix_branch
```
- Con git-flow:
```powershell
git flow hotfix start hotfix_branch
```
- Al igual que al finalizar una rama `release`, una rama `hotfix` se fusiona tanto en `main` como en `develop`:
```powershell
# Sin git-flow
git checkout main
git merge hotfix_branch
git checkout develop
git merge hotfix_branch
git branch -D hotfix_branch
# Con git-flow
git flow hotfix finish hotfix_branch
```

#### Ramas de corrección de errores
- Las ramas `bugfix` se utilizan para corregir errores no críticos detectados durante el desarrollo (rama `develop`). A diferencia de las ramas `hotfix`, no parten de código en producción, sino del estado más reciente del desarrollo.
- Las ramas `bugfix` se crean a partir de `develop`, ya que corrigen problemas que aún no han sido liberados a producción. Esto permite resolver defectos sin afectar directamente la versión estable.
- Una vez aplicada y validada la corrección, la rama `bugfix` se fusiona nuevamente en `develop`.
- Este enfoque ayuda a mantener la estabilidad del flujo de desarrollo, evitando que errores menores lleguen a producción y sin interrumpir el trabajo en nuevas funcionalidades.
##### Creación de una rama de corrección (bugfix)
- Sin git-flow:
```powershell
git checkout develop
git checkout -b bugfix_branch
```
- Con git-flow:
```powershell
git flow bugfix start bugfix_branch
```
##### Finalización de una rama de corrección (bugfix)
```powershell
# Sin git-flow
git checkout develop
git merge bugfix_branch
git branch -D bugfix_branch
# Con git-flow
git flow bugfix finish bugfix_branch

```
:::tip Ramas `bugfix` en Git Flow AVH Edition
- Git Flow AVH Edition es una implementación extendida y mantenida de Git Flow que incorpora la rama  `bugfix `, inexistente en el Git Flow original de Vincent Driessen.
- En Git Flow AVH Edition, las ramas `bugfix` permiten corregir errores no críticos y ofrecen mayor flexibilidad respecto al destino de la corrección.
- Por defecto, una rama `bugfix` se crea a partir de `develop` y se fusiona nuevamente en esta rama, lo que la hace ideal para correcciones generales del desarrollo.
- De forma opcional, puede indicarse una rama `release` como origen y destino cuando el error se detecta durante QA o pruebas sobre una versión en preparación.
- En ningún caso una rama `bugfix` se fusiona directamente en `main`.

| Comando |  Rama de origen | Destino al finalizar |
| - | - | - |
| `bugfix start fix1` |  `develop` (por defecto) |  Se fusiona en `develop` |
| `bugfix start fix1 release/*` |  `release/` (sobrescribe) |  Se fusiona en  `release/*` |
:::



#### Ramas de soporte 
- La rama `support` no forma parte del Git Flow original propuesto por Vincent Driessen; es una extensión utilizada en algunas implementaciones (como Git Flow AVH Edition).
- Las ramas `support` se utilizan para dar soporte y mantenimiento a versiones antiguas del software (versiones legacy), permitiendo aplicar correcciones o pequeñas actualizaciones sin afectar el desarrollo actual.
- Esta rama se crea a partir de una versión específica etiquetada (tag) que ya fue liberada en `main`.
- La rama `support` se mantiene en paralelo a `main`, lo que facilita mantener múltiples líneas de soporte para clientes que utilizan versiones antiguas mientras el desarrollo principal continúa en `develop`.
- En resumen: Sirve para arreglar y mantener versiones viejas sin tocar la versión actual del sistema.
##### Flujo general
1. Se crea la rama  `support ` a partir de un tag existente (una versión ya liberada).
2. Se realizan los cambios necesarios (parches, fixes, mantenimiento).
3. Al finalizar, los cambios se propagan a las ramas principales ( `main ` y  `develop `).
##### Comandos
```powershell
# Iniciar una rama support
# git flow support start <nombre> <tag>
# Crea una rama support basada en el tag v1.2.0.
git flow support start soporte-v1.2 v1.2.0

# Finalizar una rama support
# git flow support finish <nombre>
git flow support finish soporte-v1.2
```

##### Al finalizar una rama `support`, ¿Dónde se fusionan los cambios?
- Los cambios de una rama  `support` se fusionan en  `main` y  `develop`.
- Flujo de fusión:
    -  `main `: recibe el parche para los usuarios de la versión actual en soporte.
    -  `develop `: recibe el mismo parche para que forme parte de las próximas versiones.
- Esto asegura que:
    - Los usuarios de versiones legacy reciban correcciones.
    - El equipo no tenga que reaplicar manualmente los mismos fixes en el futuro.

##### ¿Se utiliza la rama `support` para hacer deploy?
- Sí, puede usarse, pero es importante entender cómo y en qué momento.
- Por lo general, al iniciar una rama `support`, se aplican los fixes necesarios sobre una versión legacy y luego se crea un tag que representa esa versión parcheada:
```powershell
git tag -a v2.7.1
```
- Con ese tag, se puede iniciar un deploy específico para los clientes que utilizan esa versión en particular.
- Este deploy es opcional y depende de la estrategia de entrega del proyecto.
- Alternativamente, también es posible finalizar la rama `support` (`git flow support finish`) y realizar el deploy desde:
    - El nuevo tag generado en `main` como parte del proceso de finalización.

#### Ventajas
- Proporciona una estructura clara y ordenada para el control de versiones.
- Aísla el desarrollo de nuevas funcionalidades del código ya terminado.
- Es ideal para lanzamientos programados y procesos formales de control de calidad.
- Permite el desarrollo en paralelo de distintas versiones.
- Es sólido y robusto para despliegues con múltiples versiones activas.
- Permite contar con más de un entorno previo a producción.
- Ideal para desarrollos largos.
- Alienta el uso de pull request.
- Control estricto de los cambios, porque normalmente solo algunos desarrolladores esta autorizados para aprobar los pull request.
- Después de entender como funciona, es simple de utilizar.
#### Desventajas
- Puede resultar complejo de gestionar debido a la gran cantidad de ramas.
- Introduce un sobrecosto innecesario en proyectos pequeños.
- No es ideal para entornos de integración o despliegue continuo.
- Puede generar conflictos de fusión grandes y difíciles de resolver.
- Resulta poco adecuado para proyectos ágiles y de ritmo rápido.
- La estructura de ramas puede ralentizar la llegada de cambios a producción.
- Es más propenso a conflictos que otras metodologías, ya que los commits provienen de ramas que evolucionan en paralelo.
- Un control excesivo del proceso puede generar dependencia de pocas personas para aprobar cambios y, en algunos casos, derivar en prácticas de micro-management.


### GitLab Flow
- GitLab Flow es un modelo de trabajo con Git que combina:
    - La simplicidad de GitHub Flow
    - Con la estructura de Git Flow
- GitLab Flow prioriza los distintos entornos por los que pasa un sistema antes de desplegarse, por sobre las versiones del software.
#### Estructura de ramas
#### Rama principal
- `main`:
    - Es la rama central del proyecto.
    - Siempre contiene código estable y listo para ser desplegado.
#### Ramas de entorno
- Representan entornos reales donde el código se ejecuta:
    - `production`: Entorno en el que se ejecuta la aplicación para los usuarios reales. Cualquier cambio impacta directamente en el sistema en uso.
    - `staging`: Replica el entorno de producción (estado de la aplicación) para realizar pruebas funcionales, QA y validaciones generales. Sirve para responder la pregunta: ¿Luego de aplicar los nuevos cambios, la aplicación funciona correctamente?
    - `pre-production`(opcional) : Entorno previo a producción. También replica el entorno de producción, pero está orientado a validar que el proceso de despliegue funcione correctamente (configuraciones, migraciones, variables de entorno, etc.). Es útil en sistemas con despliegues complejos. Responde a la pregunta: ¿Podemos desplegar esto en producción sin problemas?

:::tip
- Estas ramas no se desarrollan directamente.
- Solo reciben cambios desde `main` cuando se decide desplegar.
:::

#### Ramas de características (feature)
- Se crean desde `main`.
- Se usan para cualquier trabajo nuevo:
    - nuevas funcionalidades.
    - mejoras.
    - correcciones.
- Ejemplo:
```powershell
feature/login
feature/payment-validation
```

#### Flujo de trabajo
##### 1. Creación de ramas de entorno
- Al inicio del proyecto, se crean las ramas que representan los entornos reales (`staging`, `pre-production`, `production`) a partir de `main`.
- Estas ramas se crean una sola vez y no se usan para desarrollar.

##### 2. Desarrollo de funcionalidades
- Cada nueva funcionalidad o corrección se desarrolla en una rama `feature`, creada desde `main`.

##### 3. Integración a la rama principal
- Al finalizar el desarrollo, se abre una Merge Request hacia `main`.
- Una vez aprobada, la rama se fusiona en `main`, que siempre debe permanecer estable.

##### 4. Promoción a entornos
- Cuando se decide desplegar, el código se promueve entre entornos mediante merges:
    - `main → staging`
    - `staging → production`
    - (`y pre-production`, si existe, se utiliza como paso intermedio).
##### 5. Despliegue
- Cada merge hacia una rama de entorno representa un despliegue o una preparación de despliegue en ese entorno.

#### Ventajas
- Equilibra la simplicidad con una estructura clara.
- Define etapas de despliegue bien diferenciadas.
- Permite tanto entrega continua como lanzamientos versionados.
- Mantiene el foco en el entorno de producción.

#### Desventajas
- Es más complejo que GitHub Flow.
- Puede causar que los entornos no estén sincronizados.
- No es ideal para trabajar con varias versiones al mismo tiempo.
- Puede generar confusión sobre dónde aplicar las correcciones (rama principal o ramas de entorno).


### Otros
#### Ramificación de características
- La ramificación de características se basa en aislar todo el trabajo relacionado con una funcionalidad específica en una rama separada, lo que proporciona un alto nivel de aislamiento y control.
- Estructura:
    - Rama principal:
        - `main`: contiene código estable y siempre listo para producción.
    - Ramas de características:
        - Una rama por cada funcionalidad, corrección de errores o mejora.
- Flujo de trabajo:
    1. Crear una nueva rama para cada funcionalidad o tarea, a partir de `main`.
    2. Desarrollar y probar la función de forma aislada.
    3. Abrir una Pull Request / Merge Request al finalizar el trabajo.
    4. Revisar, probar y fusionar la rama con `main` cuando esté lista.
    5. Eliminar la rama de la funcionalidad después de la fusión.
- Ventajas:
    - Aislamiento claro del trabajo.
    - Funcionalidades fáciles de rastrear.
    - Permite la experimentación de forma segura.
    - Facilita el trabajo paralelo e independiente entre equipos.
- Contras:
    - Desafíos de integración cuando las ramas son de larga duración.
    - Riesgo de acumular demasiadas ramas activas.
    - Puede retrasar la detección de problemas de integración.
    - Se vuelve más complejo cuando las funcionalidades son interdependientes.
#### Ramificación del entorno
- La ramificación de entorno utiliza ramas dedicadas para representar los distintos entornos donde se despliega la aplicación dentro de la infraestructura.
- Estructura:
    - `development`: Contiene el trabajo en curso y la integración de nuevas funcionalidades.
    - `staging`: Entorno de preproducción utilizado para pruebas y validaciones.
    - `production`: Entorno en vivo utilizado por los usuarios finales.
- Ramas de características:
    - Se crean a partir de `development` y se fusionan nuevamente en `development` una vez finalizado el trabajo.
- Flujo de trabajo:
    1. El desarrollo se realiza en ramas de características creadas desde `development`.
    2. Cuando una funcionalidad está lista, se fusiona en `development`.
    3. Los cambios se promueven entre entornos mediante merges:
        - `development → staging`
        - `staging → production`
    4. Cada promoción de entorno se realiza mediante una operación de fusión.
- Ventajas:
    - Representación clara del proceso de despliegue.
    - Seguimiento visual del estado de cada entorno.
    - Posibilidad de revertir cambios fácilmente.
    - Se adapta bien a procesos de despliegue controlados.
- Contras:
    - Puede generar merges complejos con el tiempo.
    - Riesgo de desalineación entre ramas de entorno.
    - Mayor esfuerzo de mantenimiento por múltiples ramas activas.
    - No es ideal para despliegues muy frecuentes o continuos.
#### Ramificación de versiones (Release Branching)
- La ramificación de versiones se centra en mantener versiones específicas del software, mientras el desarrollo continúa en paralelo para futuras versiones.
- Estructura:
    - Rama principal:
        - `main`: contiene código estable y siempre listo para producción.
    - Ramas de lanzamiento:
        - `release/x.y.z`:Una rama por cada versión de lanzamiento planificada.
- Flujo de trabajo:
    1. El desarrollo ocurre en `main` y/o en ramas de características.
    2. Cuando comienza un ciclo de lanzamiento, se crea una rama `release/x.y.z` desde `main`.
    3. En la rama de `release` solo se incorporan correcciones de errores y ajustes finales.
    4. Las nuevas funcionalidades continúan desarrollándose en `main` y/o en ramas de características.
    5. Cuando la versión es estable, se crea un tag sobre el commit de la `release` y, según la estrategia del proyecto, la rama `release` se fusiona nuevamente en `main`.
    6. Las correcciones importantes realizadas en la rama de `release` se propagan nuevamente a `main` (por `merge` o `cherry-pick`).
- Ventajas:
    - Permite trabajar en paralelo sobre múltiples versiones.
    - Proporciona ramas estables para pruebas y validaciones.
    - Ofrece un esquema claro de control de versiones.
    - Facilita el mantenimiento de versiones antiguas.
- Contras:
    - Requiere un seguimiento cuidadoso de las correcciones en todas las ramas.
    - Puede generar escenarios de fusión complejos.
    - Existe riesgo de que algunos fixes no se propaguen correctamente.
    - Resolver problemas urgentes en múltiples versiones puede ser más desafiante.
#### Flujo de trabajo de bifurcación (Forking Workflow)
- El flujo de trabajo de bifurcación es diferente a otros enfoques, ya que cada desarrollador trabaja sobre su propio repositorio remoto, en lugar de hacerlo directamente sobre el repositorio principal.
- Estructura:
    - Repositorio principal:
        - Repositorio oficial del proyecto, mantenido por el equipo central.
    - Forks (bifurcaciones):
        - Copias (personales) del repositorio principal en las cuentas de cada colaborador.
    - Ramas de trabajo::
        - Ramas creadas dentro del fork de cada colaborador para desarrollar cambios.
- Flujo de trabajo:
    1. Los desarrolladores crean un fork del repositorio principal en su cuenta.
    2. El trabajo se realiza en ramas dentro de ese fork personal.
    3. Los cambios se suben al fork del desarrollador.
    4. Cuando el cambio está listo, se abre una Pull Request / Merge Request desde el fork hacia el repositorio principal.
    5. Tras la revisión y aprobación, los cambios se fusionan en el repositorio principal.
- Ventajas:
    - Ofrece un alto nivel de aislamiento entre colaboradores.
    - No requiere acceso de escritura directo al repositorio principal.
    - Ideal para proyectos de código abierto.
    - Fomenta y obliga a revisiones de código.
- Contras:
    - Configuración inicial y gestión más complejas.
    - Mayor esfuerzo para mantener los forks sincronizados con el repositorio principal.
    - Puede resultar excesivo para equipos pequeños.
    - Requiere un mayor conocimiento de Git por parte de los colaboradores.

## Merge commit
- Los merge commits (commits de fusión) son un concepto fundamental en Git, ya que permiten integrar cambios de una rama en otra manteniendo el historial completo del proyecto (historial de commits).
- Un merge commit se crea cuando se fusiona una rama en otra y Git genera un nuevo commit en la rama destino que conecta los historiales de ambas ramas.
- A diferencia de estrategias como `rebase` o `squash`, el `merge commit` no reescribe el historial: conserva todos los commits originales y deja explícito cuándo se unieron las ramas.
- Este enfoque facilita entender el contexto de los cambios, seguir las decisiones de desarrollo y depurar problemas, ya que el historial refleja fielmente el flujo real de trabajo del equipo.
- El comando `git merge` crea automaticamente una confirmacion de fusion a menos que se deshabilite explícitamente su comportamiento por defecto mediante opciones como `--no-commit` o `--squash`.
#### Ejemplo práctico
- Supongamos el siguiente escenario:
    - Rama principal:  `main `
    - Rama de trabajo:  `feature/login `
- En la rama  `feature/login ` se realizaron varios commits:
```txt
A --- B --- C   (main)
      \
       D --- E   (feature/login)
```
- Para integrar la funcionalidad en  `main`:
```powershell
git checkout main
git merge feature/login
```
- Git crea automáticamente un merge commit:
```txt
A --- B --- C -------- F   (main)
      \              /
       D --- E ------     (feature/login)

```
- F es el merge commit.
- Este commit tiene dos padres: el último commit de  `main` (C) y el último commit de  `feature/login`(E).
- El historial de ambas ramas queda intacto.

:::tip
- Al realizar un commit de fusión, el historial de commits de ambas ramas se conserva en la rama destino (en este caso, `main`). Por eso, aunque se elimine la rama `feature-login`, el historial no se pierde.
- Al hacer un `merge`, Git agrega los commits de la rama origen (`feature-login`) al final del historial de la rama destino y crea un commit de fusión que indica que se utilizó `git merge` para conectar ambas ramas:
```txt
A --- B --- C --- D --- E --- F   (main)
```
:::


## Squash Merge
- **Merge Squash** es un método que consiste en combinar (aplastar) varios commits en uno solo.
-  Se utiliza para integrar los cambios de una rama (generalmente de características) en otra rama (normalmente `main`) mediante un único commit.
- El código final queda exactamente igual; lo único que cambia es el historial.
- El resultado es un historial más limpio, ordenado y fácil de leer, donde la rama principal refleja cambios relevantes en lugar de todos los pasos pequeños del desarrollo.



####  ¿Qué significa “aplastar” en Git?
- Significa que Git:
    - Toma muchos commits pequeños
    - Los combina
    - Y crea un único commit que los representa a todos
- Los commits originales no pasan a la rama destino como commits separados.
- Ejemplo simple:
    - Antes (rama de características):
    ```txt
    A --- B --- C --- D   (feature-login)
    ```
   - Después de un merge squash:
    ```txt
    A --- S   (main)
    ```
    - S = un solo commit que contiene todos los cambios de B, C y D
    - Los commits B, C y D no aparecen en main
#### ¿Se pierde información?
- No se pierde código.
- Se pierden los commits intermedios, es decir, los pasos pequeños que se hicieron durante el desarrollo.
- El historial queda más simple y ordenado, con menos commits para revisar.
#### ¿Por qué aplastar (squash) los commits?
- Aplastar commits tiene varias ventajas que mejoran el trabajo diario y la calidad del repositorio:
    - Historial más limpio y fácil de entender:
        - En lugar de muchos commits pequeños y desordenados, queda un único commit que resume claramente qué se hizo. Esto facilita la lectura y el seguimiento de cambios.
    - Mejores revisiones de código:
        - Los revisores pueden enfocarse en el resultado final del cambio, sin tener que analizar cada paso intermedio del desarrollo.
    - Depuración más sencilla:
        - Herramientas como git bisect funcionan mejor con menos commits, lo que ayuda a encontrar errores más rápido.
    - Flujo de trabajo más profesional:
        - Es una práctica común en equipos y proyectos open source. Presentar cambios consolidados demuestra prolijidad y buenas prácticas.
    
#### ¿Cuándo deberías usar Git Squash?
- Git Squash es especialmente útil en ciertas situaciones. Conviene usarlo cuando:
    - Tenés muchos commits pequeños para una misma funcionalidad
        - Si una rama acumula commits intermedios (ajustes, fixes menores, pruebas), squashing permite agrupar todo en un solo commit que represente el cambio completo.
    - Estás por crear una Pull Request / Merge Request
        - Antes de enviar los cambios a revisión, aplicar squash ayuda a que la integración sea más clara y fácil de revisar.
    - Querés mantener un historial limpio y coherente
        - Es ideal en proyectos donde el historial debe ser fácil de leer y entender, como repositorios empresariales, educativos o de largo mantenimiento.

:::warning
- Evitá hacer squash sobre commits que ya fueron compartidos en ramas usadas por otros. Como el squash reescribe el historial, puede generar conflictos o problemas en el trabajo del equipo. Si es necesario hacerlo, debe ser coordinado previamente.
:::

#### Cómo funciona Git Squash
- Git Squash permite combinar varios commits en uno solo antes de integrar una rama, y puede hacerse principalmente de dos maneras.

#### Rebase interactivo ( `git rebase -i `)
- Es la forma más común y flexible de hacer squash:
    - Se realiza localmente, antes de fusionar la rama.
    - Permite editar, reordenar o combinar commits de una rama.
    - El historial se reescribe de forma controlada, sin afectar ramas remotas mientras no se haga push.
- Arma un solo commit a partir de varios commits pequeños, de manera local, y luego la rama se mergea manualmente en la rama destino.

#### Merge con squash (`git merge --squash`)
- Esta opción combina los commits de la rama origen (la rama que contiene los cambios, por ejemplo una feature) y los integra en la rama destino (la rama donde se quieren aplicar esos cambios, por ejemplo main) en un solo paso:
    - Los commits individuales de la rama origen no aparecen en la rama destino; en su lugar, se crea un solo commit que contiene todos los cambios.
    - Todos los cambios se aplican juntos y se registra un solo commit nuevo en la rama destino.
    - No se genera un commit de fusión tradicional.
- En este caso, Git toma el estado final de la rama origen, lo aplica sobre la rama destino y permite crear un solo commit que representa todo el trabajo realizado.


:::tip Mergear
- Mergear significa aplicar los cambios que contiene una rama origen en una rama destino.
- Dicho de forma simple: es traer los cambios de una rama y aplicarlos sobre otra rama.
:::

#### Diferencias

| Aspecto | Rebase interactivo | Merge con squash |
| - | - | - |
|  ¿Cuándo se usa? |  Antes de integrar la rama |   Al momento de integrar la rama |
|  ¿Dónde se ejecuta? |  En la rama de origen (local) | En la rama destino   |
|  ¿Qué hace con los commits? |  Combina varios commits pequeños en uno solo |  Ignora los commits individuales de la rama origen  |
| ¿Se reescribe el historial?  | Sí, el historial de la rama origen  |    No reescribe historial existente|
|  ¿Se conservan los commits originales? | No, se reemplazan por uno nuevo  |  No, solo se aplica el resultado final  |
| ¿Se crea commit de fusión?  | Sí, al hacer luego un `git merge` normal  |  No  |
| ¿Cuántos commits llegan a la rama destino?  | Uno (el commit creado con rebase)  |  Uno (commit nuevo creado en la rama destino)  |
| Nivel de control  |  Alto (editar, reordenar, combinar commits) |  Bajo (todo se integra como un solo cambio)  |
| Uso típico  |  Limpiar el historial antes de hacer merge |   Integrar rápido una rama sin importar su historial |




### Rebase interactivo
- El rebase interactivo te permite reescribir y ajustar el historial de commits antes de integrar los cambios.
#### ¿Como hacerlo?
#### 1. Buscar un repositorio
- El repositorio debe tener varios commits para poder combinarlos.
- En la rama que contiene esos commits, ejecutamos el siguiente comando para ver el primer commit de la rama:
```powershell
git log --oneline --reverse main..[nombreRama]
```
:::tip Observacion
- `main..[nombreRama]`: muestra solo los commits que están en `[nombreRama]` y no en `main`.
- `--reverse` : Ordena los commits del más antiguo al más reciente.
- `--oneline` : Muestra cada commit en una sola línea.
- Lo ideal es que haya entre 3 y 5 commits para poder experimentar.
:::

###### Ejemplo
```powershell
git log --oneline --reverse main..feature/new_menu
```



#### 2. Ejecutamos el rebase interactivo
- Ejecutamos el siguiente comando:
```powershell
git rebase -i [base]
```

:::tip Observación 
- `-i`: indica que el rebase es interactivo, es decir, Git te permite decidir qué hacer con cada commit que se va a recorrer.
- `[base]`: indica desde qué punto del historial se van a recorrer los commits. Puede tomar los siguientes valores:
    - `HEAD~[X]`: Recorre los ultimos X commit
    - `[ID del commit (hash)]`: Recorre todos los commits posteriores a ese commit (sin incluirlo).
    - `[Rama]`: Recorre todos los commits que están en la rama actual y no están en esa rama (por ejemplo main).
     - `[Etiqueta]`: Recorre los commits hechos después de esa versión (sin incluirla).
     - También se pueden combinar referencias, por ejemplo: `main~2`.
:::

###### Ejemplo
```powershell
git rebase -i HEAD~3
```




#### 3. Seleccionar una opcion por commit
- Al ejecutar el comando del paso 2, se abrirá el editor de texto predeterminado, mostrando una lista similar a la siguiente:
```txt
pick a1b2c3d Primer mensaje de confirmación
pick e4f5g6h Segundo mensaje de confirmación
pick i7j8k9l Tercer mensaje de confirmación
```
- Esta es la lista de commits que Git va a recorrer durante el rebase interactivo, de arriba hacia abajo.
- Cada línea representa un commit y tiene tres partes:
    - `pick` : Es la acción que Git va a ejecutar sobre ese commit. `pick` significa: dejar el commit tal como está.
    - `a1b2c3d`,`e4f5g6h`,`i7j8k9l` : Es el hash corto del commit, su identificador único.
    - El mensaje del commit : Describe qué cambios se hicieron en ese commit.


##### Encabezado
- El primer comentario que aparece debajo de la lista de commits es el encabezado. Se ve similar a esto:
```powershell
# Rebase f7dfe42..4327a8f onto f7dfe42 (3 commands)
```
- Este encabezado indica, en pocas palabras, qué commits va a rehacer Git y sobre qué base:
    - `f7dfe42..4327a8f`:
        - Git va a rehacer los commits posteriores a `f7dfe42` (ese commit no se incluye).
        - El último commit que se va a procesar es `4327a8f`.
    - `(3 commands)` : 
        - En total, Git va a ejecutar 3 acciones, una por cada commit listado/indicado.
    - `onto f7dfe42` : 
        - Todos esos commits se van a volver a construir encima de `f7dfe42`, que actúa como el punto de partida (base) del rebase.


##### Opciones que se pueden aplicar a cada commit
- La primera parte de cada línea se puede modificar para indicar qué acción queremos realizar:
    - `p` o `pick` : Indica que el commit se deja tal cual está.
    - `r` o `reword` :Indica que el commit se deja tal cual está, pero permite cambiar el mensaje.
    - `e` o `edit` : Se detiene en ese commit para que puedas modificar su contenido (`git commit --amend`).
    - `s` o `squash`:Combina el commit con el commit anterior. Abre el editor para que decidas cómo queda el mensaje final. Podés combinar, editar o escribir un mensaje nuevo. 
    - `f` o `fixup` : Combina el commit con el commit anterior. Descarta el mensaje del commit actual automáticamente. Se queda solo con el mensaje del commit anterior. No abre el editor.
    - `d` o  `drop`: Elimina el commit del historial.
##### Operaciones avanzadas disponibles
- Además de las opciones más comunes, el rebase interactivo permite:
    - Ejecutar comandos automáticamente con `exec`.
    - Crear etiquetas temporales con `label`.
    - Mover el HEAD a una etiqueta usando `reset`.
    - Crear un commit de merge interno con `merge (m)`, para unir dos líneas de commits que se separan desde un punto común.
    - Crear o actualizar referencias con `update-ref` al finalizar el rebase.
    - Detener temporalmente el rebase con  `break `, para continuarlo más adelante usando el comando  `git rebase --continue `.


###### Ejemplo de archivo sin modificar
```powershell
pick 182bd06 Add login button 
pick 8ee44b0 Fix login button styling 
pick 4327a8f Rename login button ID 

# Rebase f7dfe42..4327a8f onto f7dfe42 (3 commands)
#
# Commands:
# ....
```

#### 4. Confirmar las operaciones
- Una vez que hayas modificado el archivo indicando las acciones que querés ejecutar en cada commit, ya sean básicas como `pick`, `squash` o `reword`, o avanzadas como `exec`, `label`, `reset`, `merge` o `break`, guardá el archivo y cerrá el editor.
- Git recorrerá los commits en el orden indicado y ejecutará todas las instrucciones definidas en el archivo.
:::tip
- Si el archivo está vacío, Git cancelará el rebase.
- Si borras una línea que representa un commit, Git eliminará ese commit del historial.
- Git procesa los commits en el orden en que aparecen en el archivo, por lo que el orden es muy importante; cambiarlo puede afectar el historial o el resultado final.
- Todas las operaciones se realizan localmente, antes de hacer push al repositorio remoto.
:::

###### Ejemplo de archivo modificado
```powershell
pick 182bd06 Add login button 
squash 8ee44b0 Fix login button styling 
squash 4327a8f Rename login button ID 

# Rebase f7dfe42..4327a8f onto f7dfe42 (3 commands)
#
# Commands:
# ....
```

:::tip
- Por lo general, para realizar un squash, el primer commit se deja como `pick` y los commits siguientes se marcan como `squash` (o `fixup`), de modo que todos se combinen con el primer commit y terminen formando un único commit final.
:::

##### Otro ejemplo
```powershell
pick 6307b4c commit3
squash f7dfe42 commmit4
pick c402e88 commit5

# Rebase 6d62f96..c402e88 onto 6d62f96 (3 commands)
#
# Commands:
# ....
```
:::tip observación 
- `commit4` se fusiona con el commit anterior (`commit3`), formando un solo commit.
- `commit5` se mantiene intacto y no se ve afectado por el squash.
:::







#### 5. Definir un mensaje final
- Si usaste `squash`, al cerrar el archivo anterior Git abrirá nuevamente el editor con un nuevo archivo.
- En este paso se te pedirá definir el mensaje del nuevo commit que se crea al combinar (squash) varios commits en uno solo.
- Por defecto, Git intentará combinar los mensajes de todos los commits involucrados (excepto los marcados como `fixup`), mostrando algo similar a esto:
```txt
# This is a combination of 3 commits. 
# The first commit’s message is: 
Add login button 

# The commit messages from the other commits: 
Fix login button styling 
Rename login button ID 
```
###### Ejemplo Por defecto
```powershell
# This is a combination of 3 commits.
# This is the 1st commit message:

Add login button 

# This is the commit message #2:

Fix login button styling 

# This is the commit message #3:

Rename login button ID

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# Date:      Mon Jan 5 12:37:51 2026 -0300
#
# interactive rebase in progress; onto f7dfe42
# Last commands done (3 commands done):
#    squash 8ee44b0 Fix login button styling 
#    squash 4327a8f Rename login button ID 
# No commands remaining.
# You are currently rebasing branch 'feature/new_menu' on 'f7dfe42'.
#
# Changes to be committed:
#	new file:   X
#	deleted:    X
#	new file:   X
#	renamed:    X
#	renamed:    X
#	renamed:    X
#	renamed:    X
#	renamed:    X
#	new file:   X
#	renamed:    X
#	deleted:    X
#	deleted:    X
#	deleted:    X
#	deleted:    X
#	modified:   X
#	modified:   X
#	deleted:    X
#	modified:   X
#	modified:   X
#	modified:   X
#	modified:   X
#
```
:::tip Observacion
- En los comentarios, hay metadata e información que Git muestra para ayudarte a entender el estado del rebase y del commit que se va a crear:
    - `# Date: Mon Jan 5 12:37:51 2026 -0300`: Indica la fecha y hora en la que se va a crear el commit resultante del squash. Es una fecha nueva, ya que el commit final no existía previamente.
    - `# interactive rebase in progress; onto f7dfe42` :  Indica que Git se encuentra en la etapa final del rebase interactivo, reconstruyendo los commits sobre el commit `f7dfe42`, que actúa como la base del rebase. El proceso todavía no termina porque Git está esperando que confirmes el mensaje del commit resultante.
    - `# Last commands done (3 commands done): *` :  Muestra cuántas acciones ejecutó Git durante el rebase hasta ese momento. Aunque indica el número total de comandos procesados (3 en este caso), solo lista aquellos que fueron relevantes, es decir, los que modificaron el historial o tuvieron un efecto especial (como `squash`, `fixup`, `reword`, etc.). Los `pick` no suelen mostrarse porque son la acción por defecto y no alteran el historial.
    - `# No commands remaining.` : Indica que no quedan más commits ni acciones por procesar.
    - `# You are currently rebasing branch 'feature/new_menu' on 'f7dfe42'.` : Indica qué rama está siendo modificada (`feature/new_menu`) y sobre qué commit base (`f7dfe42`) se está realizando el rebase.
    - `# Changes to be committed:` : Lista todos los cambios que quedarán incluidos en el commit final, es decir, la suma de los cambios de todos los commits que fueron combinados.
:::


- Lo recomendable es editar ese contenido para que el mensaje represente el cambio completo como si fuera un solo commit:
```txt
Add login button with proper styling and updated ID
```
###### Ejemplo
```powershell
Add login button with proper styling and updated ID 

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# Date:      Mon Jan 5 12:37:51 2026 -0300
#
# interactive rebase in progress; onto f7dfe42
# Last commands done (3 commands done):
#    squash 8ee44b0 Fix login button styling 
#    squash 4327a8f Rename login button ID 
# No commands remaining.
# You are currently rebasing branch 'feature/new_menu' on 'f7dfe42'.
#
# Changes to be committed:
#	new file:   X
#	deleted:    X
#	new file:   X
#	renamed:    X
#	renamed:    X
#	renamed:    X
#	renamed:    X
#	renamed:    X
#	new file:   X
#	renamed:    X
#	deleted:    X
#	deleted:    X
#	deleted:    X
#	deleted:    X
#	modified:   X
#	modified:   X
#	deleted:    X
#	modified:   X
#	modified:   X
#	modified:   X
#	modified:   X
#
```
:::tip
- Todo el texto sin `#` será el mensaje del commit.
- Las líneas con `#` son solo comentarios y Git las ignora.
:::

- Una vez definido el mensaje final, guardá el archivo y cerrá el editor.
- Si todo sale correctamente, Git mostrará un mensaje de éxito similar al siguiente:
```txt
[detached HEAD 1a2b3c4] Add login button with proper styling and updated ID
Successfully rebased and updated refs/heads/feature-branch.
```

###### Ejemplo
```powershell
[detached HEAD c402e88] Add login button with proper styling and updated ID
 Date: Mon Jan 5 12:37:51 2026 -0300
 21 files changed, 527 insertions(+), 2061 deletions(-)
 create mode 100644 X
 delete mode 160000 X
 create mode 100644 X
 rename X (98%)
 rename {X (100%)
 rename X (100%)
 rename X (100%)
 rename X (100%)
 create X
 rename X (100%)
 delete mode 100644 X
 delete mode 100644 X
 delete mode 100644 X
 delete mode 100644 X
 delete mode 100644 X
Successfully rebased and updated refs/heads/feature/new_menu.
```
:::tip Observacion
-  `[detached HEAD c402e88]`: 
    - Indica que Git se despega temporalmente de la rama actual para recrear los commits uno por uno durante el rebase.
    -  Al finalizar, vuelve a apuntar a la rama correspondiente.
    - `c402e88` es el nuevo hash del commit creado, cuyo mensaje es: `Add login button with proper styling and updated ID`.
- A continuación se muestra:
    - La fecha del commit.
    - El resumen de cambios (archivos modificados, inserciones y eliminaciones). En esta sección se indica:
        - El archivo que se modificó, eliminó o creó.
        - Un porcentaje que indica qué tan similar es el archivo nuevo al anterior. Cuanto más cerca del 100%, menos cambios hubo. 100% significa que solo se renombró, sin cambios en el contenido.
        - `mode [numero]`: Indica el tipo de archivo y qué permisos tiene en Git. Por lo general, `100644` corresponde a un archivo normal (lectura/escritura para el dueño y solo lectura para otros).
        - La operación realizada sobre el archivo (create, delete, rename, etc.).
- Por último, el mensaje `Successfully rebased and updated refs/heads/feature/new_menu` indica que:
    - Todos los commits fueron reaplicados correctamente.
    - La rama `feature/new_menu` ahora apunta a un nuevo historial de commits.
:::


### Git merge (Con Squash) 
- Mientras que el rebase interactivo permite reescribir y ajustar el historial de commits antes de integrar los cambios, existe una alternativa más simple para unificar el trabajo:  `git merge --squash`.
- Este comando permite tomar todos los cambios de una rama (por ejemplo, una rama de funcionalidades) y convertirlos en un único commit que se aplica en otra rama, sin conservar los commits individuales de esa rama.
#### ¿Cuándo es útil este método?
- Este enfoque es especialmente útil cuando:
    - Querés que la rama principal tenga un solo commit que resuma todo el trabajo de una funcionalidad.
    - No te interesa conservar  los commits intermedios o pequeños de la rama de características.
    - Preferís un flujo más simple, sin rebase interactivo ni edición manual de múltiples mensajes de commit.
#### ¿Como hacerlo?

##### 0. Crear proyecto y rama de prueba
- Ejecutamos los siguientes comandos para crear un repositorio y una rama de funcionalidades con varios commits:
```powershell
mkdir git-squash-test && cd git-squash-test
git init --initial-branch=main

echo "Archivo inicial" > archivo.txt
git add .
git commit -m "Commit 1: Inicial"

git checkout -b feature/login-form

echo "Cambio 2" >> archivo.txt
git add .
git commit -m "Commit 2: Primer cambio"

echo "Cambio 3" >> archivo.txt
git add .
git commit -m "Commit 3: Segundo cambio"

echo "Cambio 4" >> archivo.txt
git add .
git commit -m "Commit 4: Tercer cambio"

```
:::tip observación
- En este punto:
    - La rama `main` tiene un solo commit inicial.
    - La rama `feature/login-form` contiene varios commits con cambios incrementales.
:::


#### 1. Cambiar a la rama destino
- Primero, cambiá a la rama donde querés aplicar los cambios (generalmente `main` o `develop`).
- Por ejemplo:
```powershell
git checkout main
```
#### 2. Ejecutar el merge con squash
- Ahora usá el comando `git merge --squash [nombreRama]` para tomar todos los cambios de `[nombreRama]` y aplicarlos a la rama actual sin traer su historial de commits.
- Por ejemplo:
```powershell
git merge --squash feature/login-form 
```
:::tip observación
- Git aplica todos los cambios de `feature/login-form` como si se hubieran hecho directamente en la rama actual, pero todavía no crea ningún commit.
- El historial de commits de la rama `feature/login-form` no se incorpora a la rama actual.
:::


- Veremos una salida como:
```powershell
Updating ac7ab60..816867e
Fast-forward
Squash commit -- not updating HEAD
 archivo.txt | 3 +++
 1 file changed, 3 insertions(+)
```
:::tip observación
- `Updating ac7ab60..816867e`:
    - `ac7ab60` es el hash del commit base, es decir, el commit en la rama destino (`main`) sobre el cual se van a aplicar los cambios de la rama `feature/login-form`.
    - `816867e` es el hash del último commit de la rama `feature/login-form` que estás incorporando.
    - El commit base es el último commit común entre ambas ramas. Git lo utiliza como referencia para determinar qué cambios se realizaron en la rama `feature/login-form` y así poder aplicarlos correctamente en la rama destino.
- `Fast-forward (Fusión de avance rápido)` → Como no hay conflictos y el historial es lineal, Git aplica los cambios directamente en la rama destino sin crear un commit de merge tradicional.
- `Squash commit -- not updating HEAD` → Todos los cambios fueron preparados en el staging area, pero aún no se creó el commit final.
- `archivo.txt | 3 +++` → Muestra que el archivo archivo.txt se modificó con 3 líneas nuevas.
-  `1 file changed, 3 insertions(+)` → Resumen: 1 archivo modificado con 3 líneas añadidas.
- En resumen, Git dejó todos los cambios preparados en el staging area (el área donde se colocan los archivos al ejecutar `git add`) y espera que ejecutes `git commit` para crear el commit final.
:::

- En caso de una fusión de 3 vías:
```powershell
mkdir git-squash-test && cd git-squash-test
git init --initial-branch=main

# Commit inicial en main
echo "Archivo inicial" > archivo.txt
git add .
git commit -m "Commit 1: Inicial"

# Creamos la rama feature
git checkout -b feature/login-form

# Cambios en la rama feature
echo "Cambio 2" >> archivo.txt
git add .
git commit -m "Commit 2: Primer cambio"

echo "Cambio 3" >> archivo.txt
git add .
git commit -m "Commit 3: Segundo cambio"

echo "Cambio 4" >> archivo.txt
git add .
git commit -m "Commit 4: Tercer cambio"

# Volvemos a main y hacemos cambios allí para que no sea fast-forward
git checkout main

echo "Cambio en main" >> archivo.txt
git add .
git commit -m "Commit 5: Cambio en main"
```
- Ahora, si hacemos:
```powershell
git merge --squash feature/login-form
```
- Veremos una salida como:
```powershell
Auto-merging archivo.txt
CONFLICT (content): Merge conflict in archivo.txt
Squash commit -- not updating HEAD
Automatic merge failed; fix conflicts and then commit the result.
```
:::tip observación
- `Auto-merging archivo.txt` → Git intentó integrar automáticamente los cambios del archivo `archivo.txt`.
- `CONFLICT (content): Merge conflict in archivo.txt` → Git detectó un conflicto de contenido en ese archivo, es decir, no pudo decidir automáticamente qué cambios conservar.
- `Squash commit -- not updating HEAD` → Aunque el merge se está realizando con `squash`, Git todavía no creó ningún commit ni movió el HEAD.
- `Automatic merge failed; fix conflicts and then commit the result.` → El proceso se detuvo porque hay conflictos. Primero tenés que resolverlos manualmente, luego agregar los archivos resueltos (`git add`) y finalmente crear el commit (`git commit`).
- En resumen, Git intentó aplicar todos los cambios de la rama origen como un solo commit, pero al haber conflictos necesita intervención manual para poder continuar y finalizar el proceso.
:::


#### 3. Confirmar los cambios 
- En este punto, Git ya dejó todos los cambios listos en el staging area. Solo falta registrarlos en el historial de commits.
- Para eso, tenemos que crear un commit con todos los cambios realizados:
```powershell
git commit -m "Actualizar archivo.txt con cambios sucesivos" 
```
:::tip observación
- Este único commit contiene todos los cambios realizados en la rama `feature/login-form`, pero resumidos en una sola confirmación (commit) clara y ordenada.
- En el historial de `main` aparecerá un solo commit nuevo, en lugar de los múltiples commits originales de la rama `feature/login-form`.
:::

- Si durante el proceso hubo conflictos de contenido, primero debés resolverlos manualmente en el editor.
- Una vez resueltos, tenés que marcar los archivos como solucionados usando `git add`:
```powershell
git add archivo.txt
```
- Finalmente, creás el commit con:
```powershell
git commit -m "Actualizar archivo.txt con cambios sucesivos" 
```









## ¿Cada cuánto debería hacer "commit"