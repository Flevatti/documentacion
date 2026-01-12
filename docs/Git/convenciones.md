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
- `scope` (opcional): Indica qué parte del código se modificó (módulo, componente, archivo, etc.).
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
    - `build`: ambios en el proceso de compilación, instalación o despliegue del proyecto.
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