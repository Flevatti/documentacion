---
sidebar_position: 3
---
# Docker compose
- Te simplifica el proceso de crear contenedores, conectarlos en una red y configurar como almacenar los datos.
- Es una herramienta que viene integrada con dockers desktop.
- Es  un archivo que se llama docker-compose.yml o docker-composer.yaml
- Docker Compose es una herramienta versátil que te permite definir y gestionar aplicaciones multi-contenedor de forma sencilla. Con Docker Compose, puedes describir la configuración de tu entorno de desarrollo en un archivo YAML, especificando los servicios, volúmenes y redes necesarios para tu aplicación. Luego, con un solo comando, puedes crear y ejecutar todos los contenedores definidos en tu archivo de configuración.
- Docker Compose es una herramienta para definir y gestionar aplicaciones Docker con múltiples contenedores. Permite describir la configuración de una aplicación en un archivo YAML, llamado docker-compose.yml, y luego ejecutar comandos para crear y administrar todos los contenedores (servicios) especificados en ese archivo de manera conjunta.
#### ¿Cuál es la diferencia entre Docker y Docker Compose?
- Docker es una plataforma de contenedores que te permite empaquetar y distribuir aplicaciones en entornos aislados llamados contenedores. Proporciona una forma eficiente y consistente de ejecutar aplicaciones en diferentes sistemas operativos. Por otro lado, Docker Compose es una herramienta que complementa a Docker, permitiéndote definir y gestionar múltiples contenedores para crear un entorno de desarrollo completo.
- Mientras que Docker se centra en la ejecución y creación de contenedores individuales, Docker Compose se encarga de coordinar y gestionar múltiples contenedores que trabajan juntos para formar una aplicación.
#### ¿Cuándo usar Docker Compose?
- Docker Compose es especialmente útil cuando necesitas configurar un entorno de desarrollo que involucra múltiples servicios (contenedores). Te permite definir la estructura de tu aplicación y sus dependencias en un solo archivo YAML, simplificando la creación y gestión de tu entorno de desarrollo.
- Al utilizar Docker Compose en lugar de Docker solo, obtienes beneficios como la capacidad de definir volúmenes y redes personalizadas, la posibilidad de escalar servicios y la facilidad de compartir y replicar tu entorno de desarrollo con otros miembros del equipo. Docker Compose ofrece una solución más completa y eficiente para configurar y orquestar aplicaciones multi-contenedor en tu entorno de desarrollo.
#### ¿Qué se necesita para utilizar Docker Compose?
- Para utilizar Docker Compose, necesitarás tener instalado Docker en tu máquina. Docker Compose viene incluido como parte del paquete de instalación de Docker, por lo que no es necesario instalarlo por separado. Asegúrate de tener una versión compatible de Docker según tu sistema operativo. 
- Además, necesitarás un archivo de configuración docker-compose.yml en el directorio de tu proyecto. Este archivo es donde definirás los servicios, volúmenes y redes necesarios para tu entorno de desarrollo. Puedes crearlo desde cero o utilizar plantillas y ejemplos disponibles en la documentación de Docker Compose y en la comunidad de Docker. 
- El archivo que se utiliza para gestionar aplicaciones multi-contenedores con Docker Compose se llama docker-compose.yml. Aunque Docker Compose soporta la extensión .yaml debido a la flexibilidad del formato YAML, el nombre más comúnmente utilizado y el que encontrarás en la documentación oficial es docker-compose.yml.
#### Características Principales de Docker Compose
1.	Configuración Declarativa: Define todos los servicios, redes y volúmenes necesarios en un archivo YAML (docker-compose.yml), lo que facilita la configuración y reutilización.
2.	Simplificación del Despliegue: Con un solo comando (docker-compose up), puedes desplegar una aplicación completa, lo que es muy útil para entornos de desarrollo, pruebas y producción.
3.	Gestión de Múltiples Contenedores: Docker Compose permite gestionar y coordinar varios contenedores como una sola unidad lógica, simplificando la interconexión entre ellos.
4.	Escalabilidad: Facilita la escalabilidad horizontal de los servicios, permitiendo aumentar o disminuir el número de instancias de un servicio específico con el comando docker-compose scale.
5.	Compatibilidad con Volúmenes y Redes: Permite definir volúmenes persistentes y redes personalizadas para facilitar la comunicación entre los contenedores y la persistencia de datos.
#### Comandos Comunes de Docker Compose
- Crea y arranca todos los contenedores definidos en el archivo docker-compose.yml:
```powershell
docker-compose up
```
- Detiene y elimina los contenedores, redes y volúmenes creados por up:
```powershell
docker-compose down
```
- Construye o reconstruye las imágenes de los servicios definidos:
```powershell
docker-compose build
```
- Lista los contenedores en ejecución definidos por el archivo Compose:
```powershell
docker-compose ps
```
- Muestra los logs de los servicios en ejecución:
```powershell
docker-compose logs
```
#### Beneficios de Usar Docker Compose
-	Facilita el Desarrollo: Al definir toda la infraestructura de la aplicación en un solo archivo, los desarrolladores pueden levantar rápidamente entornos de desarrollo completos y consistentes.
-	Reproducibilidad: Garantiza que los entornos sean consistentes en diferentes sistemas y etapas del ciclo de vida del desarrollo, desde el desarrollo local hasta la producción.
-	Portabilidad: Al empaquetar la configuración de la aplicación en un archivo, es fácil mover y compartir la aplicación completa entre diferentes entornos y equipos.
- El archivo docker-compose.yml tiene varios campos que se utilizan para definir y configurar los servicios, redes, volúmenes y otras características de una aplicación multi-contenedor. 
## Campo version
- Esta obsoleta, pero la puedes encontrar en ciertos archivos de configuración o especificaciones, se incluyó originalmente para indicar la versión de la sintaxis y mantener la compatibilidad con versiones anteriores de un software o sistema. 
- Básicamente, se usaba para asegurarse de que el sistema pudiera funcionar con configuraciones antiguas. A partir de Docker Compose v3.9 y versiones posteriores, Docker ha dejado de requerir la propiedad version en los archivos docker-compose.yml. 
- En lugar de requerir una declaración explícita de la versión, Docker Compose ahora puede detectar automáticamente la “versión de sintaxis”y manejar las diferencias de sintaxis y características entre versiones. 
- Esto significa que puedes omitir la propiedad version en tus archivos docker-compose.yml, y Docker Compose aplicará las reglas y comportamientos adecuados en función de las características y sintaxis presentes en el archivo.
## Campo name
- El campo name se utiliza para definir el nombre del proyecto. Este nombre se usará si no se establece explícitamente de otra manera. Sirve como una forma de identificar y agrupar todos los recursos (contenedores, redes, volúmenes, etc.) creados por Docker Compose para un proyecto específico.
- Si no se establece un nombre a través de la propiedad name, Docker Compose generará un nombre de proyecto predeterminado basado en el nombre del directorio que contiene el archivo docker-compose.yml.
- Una vez que se ha definido el nombre del proyecto, ya sea mediante la propiedad name o un mecanismo personalizado, este nombre se expone como la variable COMPOSE_PROJECT_NAME. Esto permite usar el nombre del proyecto en otros lugares dentro del archivo docker-compose.yml mediante interpolación (sustitución de variables) y también se puede acceder a él como una variable de entorno en los contenedores.
- Por lo tanto:
    - El campo name en un archivo docker-compose.yml define el nombre del proyecto que se usará si no se especifica otro nombre. Docker Compose permite sobrescribir este nombre mediante mecanismos personalizados, como variables de entorno o parámetros de línea de comandos. Si no se configura la propiedad name, Compose establece un nombre de proyecto predeterminado basado en el nombre del directorio que contiene el archivo.
    - El nombre del proyecto, una vez definido, se expone como la variable COMPOSE_PROJECT_NAME, que puede usarse para la interpolación dentro del archivo docker-compose.yml y como una variable de entorno en los contenedores.


## Campo services
- Especifica los múltiples contenedores que se van a usar.
- Cada contenedor tiene un nombre (puede ser cualquiera) y le podemos especificar varios campos.
- En Docker Compose, el campo services define los contenedores que conforman tu aplicación. Cada servicio se describe con una serie de opciones que especifican cómo se debe construir y configurar el contenedor correspondiente. Los servicios pueden depender unos de otros, compartir redes, volúmenes y establecer variables de entorno.
- El campo services contiene una colección de contenedores, y cada contenedor (se le llama servicio) tiene un nombre que puedes definir libremente. A cada uno de estos servicios se le pueden especificar varios campos para configurar su comportamiento y entorno.
- Algunos campos que les podemos especificar a cada servicio son:
#### image
- Especifica la imagen Docker a utilizar para el contenedor.
#### build
- En lugar de usar el campo image, podes usar este campo para especificar en donde está el archivo dockerfile. De esta manera podés crear una imagen “personalizada” de tu aplicación y ejecutarla en un contenedor.
#### command
- Sobrescribe el comando por defecto que se ejecuta en el contenedor. Permite especificar un comando que reemplaza el comando CMD de un DockerFile.
#### ports
- Mapea puertos del host a puertos del contenedor.

#### volumes
- Se utiliza para definir dónde y cómo los contenedores de tus servicios pueden acceder a datos que se ubican fuera del contenedor. Puedes usar volumes para configurar diferentes tipos de conexiones:
    -  Volumen: Es un espacio de almacenamiento dedicado que puede ser compartido entre múltiples contenedores.
    -  Enlace (bind): Monta una carpeta o archivo específico desde el sistema host directamente en el contenedor.
    -  tmpfs: Monta una memoria temporal en el contenedor, útil para datos que no necesitan persistencia.
    -  npipe: Monta un named pipe (tubería nombrada) en el contenedor para la comunicación entre procesos.
#### Ejemplo de uso de Volumen
- Un volumen es un espacio de almacenamiento dedicado que puede ser compartido entre varios contenedores. En este ejemplo, creamos un volumen nombrado db-data que puede ser utilizado por varios servicios:
```js
version: '3.8'

services:
  backend:
    image: backend-image
    volumes:
      - db-data:/var/lib/data

volumes:
  db-data:
    driver: local

```
:::tip Explicación
-	volumes a nivel de servicios: Define que el servicio backend utiliza el volumen db-data montado en /var/lib/data. Esto se hace para especificar cómo y dónde los datos externos estarán disponibles dentro del contenedor de ese servicio específico.
-	volumes a nivel superior: Declara el volumen nombrado db-data, usando el driver local por defecto. Esto se hace para definir volúmenes que pueden ser compartidos y reutilizados por varios servicios en tu configuración de Docker Compose.
:::

:::tip Driver
- Un "driver" en Docker actúa como un traductor especializado que facilita la comunicación entre los contenedores Docker y los diferentes tipos de almacenamiento de datos disponibles. Aquí tienes una analogía para entenderlo mejor:
    -	Almacenamiento como diferentes idiomas: Imagina que cada tipo de almacenamiento (tu disco duro local, un servicio en la nube como AWS o Azure, o una red compartida como NFS) tiene su propio idioma o manera particular de trabajar con los datos.
    -	El driver como intérprete: Cada driver en Docker funciona como un intérprete experto que conoce cómo interactuar con ese tipo específico de almacenamiento. Como un buen intérprete, el driver traduce las solicitudes y operaciones que los contenedores Docker necesitan hacer hacia el idioma o formato correcto que ese almacenamiento particular entiende.
    -	Eficiencia y compatibilidad: Esta traducción garantiza que Docker pueda utilizar eficientemente el almacenamiento deseado sin importar dónde esté ubicado o cómo esté configurado. Esto significa que puedes usar Docker con confianza, sabiendo que tus contenedores pueden almacenar y acceder a datos de manera efectiva, independientemente del tipo de almacenamiento que elijas utilizar.
- Driver local: Este es como tu propio disco duro personal dentro de Docker. Almacena los datos directamente en el mismo lugar donde Docker está corriendo, como si fuera una carpeta especial que solo Docker puede ver y usar.
- Driver nfs: Similar a conectarte a una carpeta compartida en una red de computadoras. Permite a múltiples Docker compartir datos a través de la red, como tener una carpeta que todos pueden ver y modificar desde diferentes computadoras.
- Driver azure_file: Es como tener una carpeta especial en Microsoft Azure (un servicio en la nube). Puedes guardar y acceder a datos desde allí, útil si estás usando Azure para tu infraestructura.
- Driver aws: Funciona como un lugar especial en Amazon Web Services (AWS) donde puedes guardar datos. Es útil si usas AWS para alojar tus aplicaciones y necesitas guardar información importante.
- Driver gce: Es como una carpeta especial en Google Compute Engine (GCE), otro servicio en la nube. Guarda datos de la misma manera, pero en Google Cloud, útil si estás usando GCE para tus aplicaciones.

:::
#### Ejemplo de uso de Enlace (bind)
- Un enlace (bind) monta una carpeta o archivo específico desde el sistema host directamente en el contenedor. Aquí montamos el directorio actual (.) del host en /code dentro del contenedor:
```yml
version: '3.8'

services:
  frontend:
    image: frontend-image
    volumes:
      - type: bind
        source: .
        target: /code

```
:::tip Explicación
- type: bind: Especifica que es un montaje bind.
-	volumes: Define que el servicio frontend utiliza un montaje bind.
-	source: Especifica la ruta del sistema host que se va a montar (. indica el directorio actual , Cuando se refiere al "directorio actual" (en inglés, "current working directory"), se está hablando del directorio en el que se encuentra el archivo docker-compose.yml que se está ejecutando.)
-	target: Especifica la ruta dentro del contenedor donde se montará el volumen (/code).
:::


#### Ejemplo de Uso de tmpfs
- tmpfs monta una memoria temporal en el contenedor, útil para datos que no necesitan persistencia. En este ejemplo, creamos un montaje tmpfs para almacenar archivos temporales:
```yml
version: '3.8'

services:
  app:
    image: app-image
    volumes:
      - type: tmpfs
        target: /tmp



```
:::tip Explicación
- volumes: Define que el servicio app utiliza un montaje tmpfs.
- type: tmpfs: Especifica que es un montaje tmpfs.
- target: Especifica la ruta dentro del contenedor donde se montará la memoria temporal (/tmp en este caso).
- La información almacenada en ese volumen se elimina cuando el contenedor se detiene o se reinicia.
:::
#### Ejemplo de Uso de npipe
- npipe monta un named pipe (tubería nombrada) en el contenedor para la comunicación entre procesos. A continuación, se muestra cómo podrías configurar un servicio para utilizar un named pipe:
```yml
version: '3.8'

services:
  backend:
    image: backend-image
    volumes:
      - type: npipe
        source: /path/to/namedpipe
        target: /var/run/namedpipe
```
:::tip Explicación
- volumes: Define que el servicio backend utiliza un montaje de tipo npipe.
- type: npipe: Especifica que es un montaje npipe.
- source: Especifica la ruta de la named pipe en el sistema host (/path/to/namedpipe).
- target: Especifica la ruta dentro del contenedor donde se montará la named pipe (/var/run/namedpipe).

:::

:::tip NamedPipe
- Los Named Pipes (también conocidos como FIFOs, First-In-First-Out) son un mecanismo de comunicación entre procesos que permite la comunicación entre procesos que se ejecutan en diferentes espacios de nombres (como contenedores o máquinas virtuales).
- Un Named Pipe es un archivo especial que actúa como una cola de mensajes. Los procesos que desean comunicarse a través del Named Pipe pueden escribir en él (como si fuera un archivo) y otros procesos pueden leer desde él. Los datos escritos en el Named Pipe se almacenan en una cola y se leen en el orden en que se escribieron.
- Aquí hay algunas características importantes de los archivos de Named Pipes:
    -	No contiene datos: A diferencia de un archivo regular, un Named Pipe no contiene datos en sí mismo. En su lugar, actúa como una cola de mensajes que se almacenan en memoria.
    -	No tiene tamaño: Los Named Pipes no tienen un tamaño fijo, ya que los datos se almacenan en memoria y se eliminan cuando se leen.
    -	No se pueden buscar: Los Named Pipes no permiten buscar en ellos, ya que los datos se leen en el orden en que se escribieron.
    -	No se pueden truncar: Los Named Pipes no se pueden truncar, ya que los datos se eliminan cuando se leen.
-	Imagina que tienes una caja de correo donde puedes dejar mensajes para alguien más. Cuando alguien escribe un mensaje y lo deja en la caja, el mensaje se queda ahí hasta que alguien más lo lee.
-	Un Named Pipe es como esa caja de correo, pero para la comunicación entre programas o procesos en una computadora. Es un lugar especial en el sistema de archivos donde los programas pueden dejar mensajes para otros programas.
-	Cuando un programa escribe un mensaje en el Named Pipe, el mensaje se queda ahí hasta que otro programa lo lee. Los mensajes se leen en el orden en que se escribieron, como si fueran cartas en una caja de correo.
-	Los Named Pipes son útiles cuando necesitas que dos programas se comuniquen entre sí, pero no están en el mismo lugar o no pueden hablar directamente entre sí. Es como una forma de dejar un mensaje para alguien más, y ellos pueden leerlo cuando estén listos.
-	Por ejemplo, imagina que tienes un programa que necesita enviar información a otro programa que se ejecuta en una máquina virtual. - En lugar de tratar de comunicarse directamente, puedes crear un Named Pipe y que el primer programa escriba la información en él. Luego, el segundo programa puede leer la información del Named Pipe cuando esté listo.
- Los archivos de Named Pipes no tienen una extensión particular como .txt, .doc, .jpg, etc. En su lugar, se identifican por su nombre y ruta en el sistema de archivos.
- Cuando se crea un Named Pipe, se asigna un nombre y una ruta en el sistema de archivos, como /tmp/mypipe o /var/run/myfifo. El nombre y la ruta se utilizan para identificar el Named Pipe y permitir que los programas se comuniquen con él.
- Sí, en la salida de la comando ls -l en Unix-like systems, la primera columna indica el tipo de archivo y sus permisos. La "p" mayúscula en la primera columna indica que el archivo es un Named Pipe (también conocido como FIFO, First-In-First-Out).
:::

#### environment
- Define variables de entorno para el contenedor.

#### depends_on
- Establece dependencias entre servicios, asegurando que ciertos servicios se inicien antes que otros. De este modo primero se van a iniciar los servicios “independientes” (que generalmente lo consume otro servicio, como una bd que es consumida por una app) y luego los “dependientes”.
- En resumen, sirve para controlar el orden de inicio de los controladores, pero no garantiza que los servicios estén completamente listo. Para garantizar que esta listo podes usar el comando wait de docker como wait-for-it.sh O  dockerize.
#### networks
- Asigna una o mas redes en el contenedor. Estas debes deben estar definidas en el “campo networks superior”.
#### restart
- Configura las políticas de reinicio del contenedor. Sirve para especificar que se va a hacer cuando el contenedor “sale”. Cuando se habla de que un contenedor "sale" (o "exits" en inglés), se refiere a que el proceso principal del contenedor termina su ejecución.
#### links (Obsoleto)
- Se utiliza para definir enlaces entre contenedores, permitiendo que un contenedor se conecte a otro utilizando un “link” que usa el DNS interno de Docker.
-  Sin embargo, es importante notar que links está considerado en desuso (deprecated) en las versiones más recientes de Docker Compose, ya que Docker Compose ahora usa una red predeterminada donde todos los contenedores pueden comunicarse entre sí por el nombre de servicio.
#### env_file
- Sirve para especificar el archivo con las variables de entorno (.env) que se va a usar en el contenedor. Sirve para especificar uno o varios archivos que contienen variables de entorno. Estas variables se pasan al contenedor durante su ejecución.
- La aplicación y por ende la imagen usaran las variables de entorno que hay en el proyecto. Docker Compose automáticamente carga las variables de entorno desde un archivo .env ubicado en el mismo directorio que el archivo docker-compose.yml. Por lo tanto no es necesario el campo .env_file.
- Aunque no es necesario especificar env_file si estás utilizando un archivo .env en el mismo directorio, hay casos en los que podría ser útil. Por ejemplo, si deseas utilizar múltiples archivos de variables de entorno o tener más control sobre qué variables se cargan para cada servicio específico.


:::tip
- El uso de un archivo .env en Docker Compose permite definir variables de entorno que se pueden usar dentro del archivo docker-compose.yml utilizando la sintaxis de interpolación: ${NOMBRE_VARIABLE}. Sin embargo, la utilización del campo env_file dentro de un servicio en docker-compose.yml tiene una funcionalidad ligeramente diferente y no permite el uso directo de las variables de entorno definidas en ese campo en el archivo docker-compose.yml.
:::

#### [Ver más campos](https://docs.docker.com/compose/compose-file/05-services/)
## Campo networks
- Es donde defines las redes con nombre que pueden ser utilizadas por los servicios dentro de tu aplicación Docker. Este elemento te permite especificar y configurar diferentes redes que pueden ser compartidas entre múltiples servicios, proporcionando un medio para controlar cómo se comunican esos servicios y en qué entorno de red operan.
- Aquí están los aspectos clave del elemento networks:
    -	Definición de Redes con Nombre:
        -	Dentro del bloque networks, puedes definir varias redes con nombres descriptivos (mynetwork, backend, frontend, etc.).
        -	Cada red puede tener configuraciones específicas como el tipo de driver (bridge, overlay, macvlan, etc.), configuración IPAM (para la gestión de direcciones IP), opciones de enrutamiento, entre otras.
    -	Reutilización de Redes:
        -	Una vez definida una red con nombre, puedes asignarla a múltiples servicios dentro de tu archivo docker-compose.yml.
        -	Esto permite que varios servicios se conecten a la misma red, facilitando la comunicación entre ellos a través de nombres de servicio en lugar de direcciones IP directas.
    -	Configuraciones Avanzadas:
        -	El elemento networks también soporta configuraciones avanzadas que permiten un control más granular sobre cómo se gestionan las comunicaciones y los recursos de red dentro de tu aplicación Docker.
#### Ejemplo Básico:
```yml
networks:
  mynetwork:
    driver: bridge
    ipam:
      config:
        - subnet: 172.20.0.0/16

```
:::tip Observación
- En este ejemplo, se define una red llamada mynetwork con el controlador de red bridge y se especifica un rango de direcciones IP usando IPAM.
-	driver: bridge: Este indica que la red utilizará el driver de puente (bridge) de Docker. El driver de puente es el driver de red predeterminado de Docker, que permite que los contenedores se comuniquen entre sí y con la red externa.
-	ipam: Esta sección configura la gestión de direcciones IP (IPAM) para la red.
-	config: Esta sección define una lista de configuraciones de IPAM.
-	- subnet: 172.20.0.0/16: Esta línea define una configuración de subnet para la red. La dirección de subnet es 172.20.0.0/16, lo que significa que la red tendrá una dirección de subnet de 172.20.0.0 y una máscara de subnet de 255.255.0.0 (equivalente a una longitud de prefijo de 16 bits).
-	Cuando se crea un contenedor y se une a esta red, Docker asignará automáticamente una dirección IP disponible en la subnet 172.20.0.0/16 al contenedor.
:::



:::tip
 [Ver más información](https://docs.docker.com/compose/compose-file/06-networks/)
:::

## Campo volumes
- Te permite definir volúmenes que pueden ser utilizados por los servicios dentro de tu aplicación Docker. Los volúmenes en Docker Compose son utilizados para persistir datos generados por los contenedores, compartir datos entre contenedores o almacenar configuraciones y archivos que deben persistir más allá del ciclo de vida de un contenedor.
- Definición de Volúmenes:
    -	Dentro del bloque volumes, puedes definir varios volúmenes con nombres descriptivos (data, config, logs, etc.).
    -	Los volúmenes pueden ser de diferentes tipos, como volúmenes de host, volúmenes anónimos o volúmenes nombrados.
- Reutilización de Volúmenes:
    -	Una vez definido un volumen, puedes asignarlo a múltiples servicios dentro de tu archivo docker-compose.yml.
    -	Esto permite que varios servicios compartan el mismo volumen para acceder y persistir datos de manera consistente.
-  Configuraciones Avanzadas:
    -	El campo volumes también soporta configuraciones avanzadas como la especificación de rutas de host para volúmenes de host, configuración de permisos y modos de montaje, entre otros.
#### Ejemplo Básico
```yml
volumes:
  - /var/www/html
```
:::tip Observación
- En este caso, se define un volumen con la ruta /var/www/html del host, el cual por defecto será un volumen anónimo.
:::


#### Uso en Servicios
- Para que un servicio use un volumen definido en el nivel superior, se especifica el volumen en el bloque de configuración del servicio utilizando el atributo volumes:
```yml
version: '3.8'

services:
  nginx:
    image: nginx
    volumes:
      - /var/www/html:/usr/share/nginx/html

```
:::tip Observación
- En este ejemplo:
    -	/var/www/html es una ruta del sistema de archivos del host.
    -	/usr/share/nginx/html es el directorio dentro del contenedor donde se montará la ruta del host.
:::


#### Definición de un Volumen con Nombre
```yml
version: '3.8'
services:
  myservice:
    image: nginx
    volumes:
      - mydata:/usr/share/nginx/html
volumes:
  mydata:
    driver: local

```
:::tip Observación
-	Se define un servicio (myservice) que utiliza la imagen de nginx.
-	Se especifica que el volumen mydata se montará en el directorio /usr/share/nginx/html dentro del contenedor del servicio myservice.
-	En el bloque volumes, se define el volumen mydata con el atributo driver establecido en local, lo que indica que el volumen se gestionará localmente en el host donde se ejecuta Docker.
:::


#### Uso en Servicios
```yml
version: '3.8'
services:
  myservice:
    image: nginx
    volumes:
      - mydata:/usr/share/nginx/html
volumes:
  mydata:
    driver: local

```
:::tip Observación
- En este caso, el volumen mydata se montará en el directorio /usr/share/nginx/html del contenedor myservice, permitiendo que el servicio nginx acceda y persista datos en ese directorio.

:::

#### Entonces hay dos tipos de volúmenes
- Anónimo: Un volumen anónimo se define simplemente como una ruta en el sistema de archivos del host. Los volúmenes anónimos son útiles cuando solo necesitas montar una ruta específica del sistema de archivos del host dentro de un contenedor, sin necesidad de gestionar ese volumen de manera explícita a nivel global.
- Con Nombre: Un volumen con nombre se define cuando se le asigna explícitamente un nombre dentro del campo volumes.

#### Uso de Volumen Anónimo en un Servicio
- No es necesario definir un volumen anónimo en el campo volumes a nivel superior antes de utilizarlo en servicios dentro de tu archivo docker-compose.yml. En Docker Compose, puedes especificar volúmenes anónimos directamente en la sección volumes de cualquier servicio sin necesidad de definirlos previamente a nivel global.
- Aquí tienes un ejemplo donde se usa un volumen anónimo directamente en la configuración de un servicio sin definirlo a nivel superior:
```yml
version: '3.8'

services:
  nginx:
    image: nginx
    volumes:
      - /var/www/html:/usr/share/nginx/html

```
:::tip Explicación
- /var/www/html es una ruta del sistema de archivos del host que se monta directamente en /usr/share/nginx/html dentro del contenedor de nginx.
- No se define volumes a nivel superior en este archivo docker-compose.yml.
:::

#### Gestión de Volúmenes
-	Gestión en el Host:
    -	Cuando defines un volumen en Docker, ya sea anónimo o con nombre, Docker se encarga de gestionar este volumen en el sistema de archivos del host. Esto significa que Docker crea una ubicación específica en el sistema de archivos del host (generalmente en /var/lib/docker/volumes en sistemas Linux) donde se almacenan los datos asociados con ese volumen.
    -	Docker se asegura de que los datos en estos volúmenes persistan incluso si los contenedores que los utilizan se detienen o se eliminan.
- Docker gestiona la creación, montaje y desmontaje de los volúmenes dentro del entorno del contenedor. Cuando especificas un volumen en un archivo docker-compose.yml o al ejecutar un contenedor con docker run -v, Docker se encarga de montar el volumen especificado en el contenedor desde la ubicación en el host.

:::tip
 [Ver más información](https://docs.docker.com/compose/compose-file/06-networks/)
:::


## Campo configs
- Permite definir configuraciones que luego pueden ser referenciadas y usadas por los servicios.
- Estas configuraciones son útiles para manejar archivos de configuración, certificados, o cualquier otro tipo de datos sensibles que necesitas distribuir a tus contenedores.
#### Estructura Básica
- La estructura básica para definir configs a nivel superior es la siguiente:

```yml
version: '3.8'

configs:
  my_config:
    file: ./my_config_file.txt

```
:::tip observación
- En este ejemplo, my_config es una configuración que toma el contenido del archivo ./my_config_file.txt en el sistema de archivos del host.
:::

#### Campos Disponibles
-	file: Especifica la ruta del archivo en el sistema de archivos del host que contiene la configuración.
-	external: Indica si la configuración es externa al archivo docker-compose.yml. Se refiere a una configuración que no se define directamente en tu archivo docker-compose.yml, sino que ya existe fuera de este archivo, normalmente gestionada por el sistema de Docker, especialmente en entornos de orquestación como Docker Swarm. Utilizar configuraciones externas es útil cuando tienes configuraciones centralizadas que necesitas compartir entre múltiples aplicaciones o servicios sin duplicarlas en cada archivo docker-compose.yml.
-	name: Opcional. Permite asignar un nombre personalizado a la configuración.
#### Ejemplos Detallados
#### Definición de una Configuración con un Archivo
```yml
version: '3.8'

configs:
  my_config:
    file: ./my_config_file.txt

```
:::tip Observación
- my_config se define con el contenido proveniente de ./my_config_file.txt.
:::

#### Configuración Externa
- Puedes definir configuraciones que son externas a tu archivo docker-compose.yml. Esto es útil cuando gestionas configuraciones centralizadas en Docker Swarm o Docker Configs:
```yml
version: '3.8'

configs:
  my_external_config:
    external: true

```
:::tip Observación
- my_external_config se refiere a una configuración que ya existe y es gestionada externamente a tu archivo docker-compose.yml.
:::


#### ¿Cómo usar configuraciones externas?
- Para las configuraciones externas en Docker, debes asegurarte de que estas configuraciones ya estén definidas y gestionadas por Docker antes de referenciarlas en tu archivo docker-compose.yml. Docker sabe dónde buscar estas configuraciones porque se almacenan y gestionan a nivel del sistema Docker, especialmente cuando se usa Docker Swarm.
#### Paso 1: Crear la Configuración Externa
- Primero, necesitas crear y gestionar la configuración externa usando el comando docker config. Este comando se utiliza para crear configuraciones que luego pueden ser utilizadas por servicios en Docker Swarm:
```powershell
docker config create my_external_config ./path/to/my_config_file.txt
```
:::tip Observación
-	my_external_config es el nombre que le das a la configuración.
-	./path/to/my_config_file.txt es la ruta al archivo de configuración en tu sistema local.
:::
#### Paso 2: Referenciar la Configuración Externa en Docker Compose
- Una vez que la configuración externa está creada y gestionada por Docker, puedes referenciarla en tu archivo docker-compose.yml utilizando el "campo external: true": 
```yml
version: '3.8'

configs:
  my_external_config:
    external: true

services:
  myservice:
    image: nginx
    configs:
      - source: my_external_config
        target: /etc/nginx/conf.d/my_config_file.txt

```
:::tip Observación
-	La configuración my_external_config se define con external: true, lo que indica que Docker debe buscar una configuración que se llame my_external_config en sus configuraciones gestionadas externamente.
-	El servicio myservice monta my_external_config en /etc/nginx/conf.d/my_config_file.txt dentro del contenedor.
-	Docker sabe dónde buscar la configuración porque las configuraciones externas se almacenan y gestionan a nivel del sistema Docker (especialmente en Docker Swarm). Cuando creas una configuración externa con docker config create, Docker almacena esta configuración en su almacén de configuraciones.
-	Cuando un archivo docker-compose.yml hace referencia a una configuración externa con external: true, Docker busca en este almacén de configuraciones para encontrar la configuración especificada.
:::


#### Comandos Útiles para Gestionar Configuraciones Externas
- Crear Configuración:
```powershell
docker config create my_external_config ./path/to/my_config_file.txt
```
- Listar Configuraciones:
```powershell
docker config ls
```
- Ver Detalles de una Configuración:
```powershell
docker config inspect name_config
```
- Eliminar Configuración:
```powershell
docker config rm my_external_config
```
#### Configuración con Nombre Personalizado 
```yml
version: '3.8'

configs:
  custom_config:
    name: my_custom_config
    file: ./another_config_file.txt
```
:::tip Observación
-	custom_config se define con un nombre personalizado my_custom_config.
-	El contenido proviene de ./another_config_file.txt.
:::

#### Referencia en Servicios
- Así se implementa una configuración en un servicio:
```yml
version: '3.8'

configs:
  my_config:
    file: ./my_config_file.txt

services:
  myservice:
    image: nginx
    configs:
      - source: my_config
        target: /etc/nginx/my_config_file.txt

```
#### ¿Para qué sirven las configuraciones?
- Las configuraciones se utilizan para inyectar archivos de configuración o datos específicos en los contenedores de manera segura y gestionada. Estos archivos pueden ser utilizados por las aplicaciones dentro del contenedor para personalizar su comportamiento sin necesidad de reconstruir la imagen del contenedor.
#### ¿Qué pasa por dentro cuando se usa una configuración? 
- Cuando defines una configuración en un servicio:
    1.	Montaje del Archivo: Docker monta el archivo de configuración en una ruta específica dentro del contenedor.
    2.	Lectura por la Aplicación: La aplicación dentro del contenedor lee este archivo y utiliza su contenido para ajustar su comportamiento según lo configurado.
    3.	Consistencia: Permite que todas las instancias del contenedor utilicen la misma configuración, garantizando un comportamiento consistente.
#### Ejemplo de Uso Práctico:
```yml
version: '3.8'

configs:
  my_config:
    file: ./my_config_file.txt

services:
  web:
    image: nginx
    configs:
      - source: my_config
        target: /etc/nginx/conf.d/my_config_file.txt

```
:::tip Observación
-	Definición: my_config se define a nivel superior con el archivo ./my_config_file.txt.
-	Referencia: El servicio web monta my_config en /etc/nginx/conf.d/my_config_file.txt dentro del contenedor de nginx.
-	Uso Interno: Nginx, al arrancar, leerá el archivo de configuración montado en /etc/nginx/conf.d/my_config_file.txt y aplicará las configuraciones especificadas en ese archivo.
:::

#### Beneficios
-	Seguridad: Mantienes configuraciones sensibles fuera de las imágenes de los contenedores.
-	Flexibilidad: Puedes cambiar configuraciones sin necesidad de reconstruir imágenes.
-	Consistencia: Aseguras que todas las instancias de un servicio utilicen las mismas configuraciones.

:::tip
 [Ver más información](https://docs.docker.com/compose/compose-file/08-configs/)
:::
## Campo secrets
- Permite definir secretos que luego pueden ser referenciados y utilizados por los servicios. Estos secretos son gestionados de manera segura por Docker, y se aseguran de que nunca se expongan en texto plano dentro de los contenedores.
- Los secretos en Docker son datos sensibles que necesitan ser protegidos, como contraseñas, claves API, certificados, y cualquier otra información confidencial. Docker proporciona una forma segura de gestionar estos datos mediante el uso de secretos, asegurándose de que no se expongan en texto plano dentro de los contenedores.
#### Características de los Secretos en Docker
-	Gestión Segura: Los secretos se almacenan y gestionan de manera segura por Docker. No se exponen en el entorno del contenedor ni en los logs.
-	Acceso Controlado: Los secretos solo pueden ser accedidos por los servicios que tienen permiso para usarlos.
-	Montaje en Contenedores: Los secretos se montan en los contenedores como archivos en una ubicación segura, típicamente en /run/secrets/.
#### Cómo Funcionan los Secretos
-	Definición: Los secretos se definen en el archivo docker-compose.yml o mediante comandos de Docker CLI.
-	Referencia: Los servicios que necesitan acceder a los secretos los referencian en su configuración.
-	Uso: Los secretos se montan en una ruta específica dentro del contenedor, donde la aplicación puede leerlos como archivos.
#### Estructura Básica
- La estructura básica para definir secrets a nivel superior es la siguiente:
```yml
version: '3.8'

secrets:
  my_secret:
    file: ./my_secret_file.txt

```
:::tip Observación
- my_secret es un secreto definido a nivel superior que toma su contenido del archivo ./my_secret_file.txt en el sistema de archivos del host.
:::

#### Campos Disponibles
-	file: Especifica la ruta del archivo en el sistema de archivos del host que contiene el secreto.
-	external: Indica si el secreto es externo al archivo docker-compose.yml.
-	name: Opcional. Permite asignar un nombre personalizado al secreto.

#### Secreto Externo
- Puedes definir secretos que son externos a tu archivo docker-compose.yml. Esto es útil cuando gestionas secretos centralizados en Docker Swarm o Docker Secrets:
```yml
version: '3.8'

secrets:
  my_external_secret:
    external: true


```
:::tip Observación
-	my_external_secret se refiere a un secreto que ya existe y es gestionado externamente a tu archivo docker-compose.yml.
-	Aca pasa lo mismo que con una configuración externa, lo gestionas con el comando “docker secret”
:::
#### Secreto con Nombre Personalizado
```yml
version: '3.8'

secrets:
  custom_secret:
    name: my_custom_secret
    file: ./another_secret_file.txt


```
:::tip Observación
-	custom_secret se define con un nombre personalizado my_custom_secret.
-	El contenido proviene de ./another_secret_file.txt.
:::

#### Referencia en Servicios
- Para utilizar los secretos en un servicio, los defines dentro del bloque services de la siguiente manera:
```yml
version: '3.8'

secrets:
  my_secret:
    file: ./my_secret_file.txt

services:
  myservice:
    image: nginx
    secrets:
      - my_secret

```
:::tip Observación
- El servicio myservice referencia el secreto my_secret, permitiendo que el contenedor tenga acceso a su contenido de manera segura.
:::

#### Montaje del Secreto en el Contenedor
- Docker monta los secretos en una ubicación especial dentro del contenedor, generalmente en /run/secrets/
- Ejemplo:
```yml
version: '3.8'

secrets:
  my_secret:
    file: ./my_secret_file.txt

services:
  myservice:
    image: nginx
    secrets:
      - source: my_secret
        target: /run/secrets/my_secret

```
:::tip Observación
- my_secret se monta en /run/secrets/my_secret dentro del contenedor del servicio myservice.
:::


#### Variables de entornos vs Secretos
1.	Seguridad:
    -	Variables de Entorno: Menos seguras. Se pueden exponer fácilmente dentro del contenedor y pueden ser visibles en los logs de procesos si no se manejan adecuadamente.
    -	Secretos: Más seguras. Se almacenan y gestionan de manera segura por Docker. No se exponen en los logs y se montan en ubicaciones específicas con permisos restringidos.
2.	Gestión:
    -	Variables de Entorno: Simple de usar y gestionar. Ideal para configuraciones que no son críticas.
    -	Secretos: Requieren un paso adicional para su creación y gestión, pero ofrecen una mejor seguridad para datos sensibles.
3.	Acceso en Contenedor:
    -	Variables de Entorno: Accesibles a través del entorno del contenedor (env).
    -	Secretos: Accesibles como archivos en una ruta específica (/run/secrets/).

#### Cuándo Usar Cada Uno
-	Variables de Entorno:
    -	Información de configuración general no sensible.
    -	Modos de operación, configuraciones de servicio no críticas.
-	Secretos:
    -	Contraseñas, claves API, certificados, y cualquier dato sensible.
    -	Información que necesita estar protegida contra accesos no autorizados.

#### Acceso a Secretos en Docker
- Montaje de Secretos: Cuando defines un secreto en Docker Compose o Docker Swarm, Docker se encarga de montar el secreto en una ubicación específica dentro del contenedor. Por defecto, los secretos se montan en /run/secrets/nombre_del_secreto.
- Acceso desde la Aplicación:
    -	Desde la aplicación dentro del contenedor, puedes acceder al secreto como un archivo en la ruta especificada (/run/secrets/nombre_del_secreto).
    -	Por ejemplo, para leer el contenido de un secreto en un contenedor que corre Nginx, podrías usar un comando como cat /run/secrets/my_secret_password.
- Seguridad del Acceso:
    -	Docker asegura que solo los procesos que tienen acceso al contenedor y que conocen la ruta del secreto puedan acceder a su contenido.
    -	Los permisos del sistema de archivos dentro del contenedor están configurados de tal manera que solo el usuario o proceso adecuado puede leer el contenido del archivo de secreto.
#### Consideraciones de Seguridad Adicionales
-	No se expone en texto plano: Docker asegura que el contenido del secreto no sea visible en texto plano dentro del sistema operativo del contenedor.
-	Gestión de Acceso: Solo los procesos dentro del contenedor que tienen acceso al sistema de archivos /run/secrets pueden leer el secreto.
#### Seguridad de los Secretos en Docker
-	Montaje Seguro: Docker monta los secretos como archivos en una ubicación específica dentro del sistema de archivos del contenedor, generalmente en /run/secrets/.
-	Acceso Restringido:
    -	Permisos de Acceso: Docker establece permisos de acceso restrictivos en la carpeta /run/secrets/ dentro del contenedor. Solo el proceso o los procesos que tienen los permisos adecuados pueden acceder a los archivos de secreto.
    -	Usuario y Grupo: Los archivos de secreto se asignan a un usuario y grupo específicos dentro del contenedor, asegurando que solo ese usuario y los procesos que corren bajo ese contexto puedan acceder al secreto.
-	No Exposición en Texto Plano: Docker toma medidas para asegurarse de que el contenido del secreto no sea visible en texto plano dentro del contenedor. Esto significa que el secreto no es accesible directamente a través de comandos que podrían exponer su contenido en los logs o en otros lugares dentro del contenedor.
- Lectura del Secreto: La aplicación puede leer el secreto desde la ubicación montada usando operaciones de lectura de archivos estándar en el lenguaje de programación utilizado (por ejemplo, abrir y leer el archivo).


:::tip
 [Ver más información](https://docs.docker.com/compose/compose-file/09-secrets/)
:::

## Ejecutar docker compose
- En la ubicación del proyecto y del archivo docker-composer , ejecutamos el comando:

```powershell
docker compose up
```

:::tip Observación
- Lee el archivo docker-composer y crea o ejecuta las imágenes/contenedores necesarios para realizar todo lo que se especifica en el archivo.
- Todos los contenedores que crea y ejecuta los agrupa con un nombre.
- Al ejecutar el comando se bloquea la consola, por lo tanto, si pulsamos "control + c" se detiene. Para evitar esto puedes usar la [opción -d del comando docker run](./README.md#comportamiento-de-la-consola).
:::

- Para eliminar el grupo que contiene todos los contenedores que creamos:

```powershell
docker compose down
```

- Tambien podemos usar la opcion --build  para arrancar los servicios definidos en un archivo docker-compose.yml. La opción --build añade un paso adicional: fuerza la construcción de las imágenes de los servicios antes de arrancarlos. Esto es útil cuando has realizado cambios en los Dockerfiles o en el contexto de construcción y necesitas que se reflejen esos cambios en las imágenes.
- Sin --build: Docker Compose usa las imágenes que ya están disponibles  y solo las construye si no existen.
- Con --build: Fuerza la construcción de las imágenes para todos los servicios, asegurando que cualquier cambio reciente en el Dockerfile o en el contexto de construcción se aplique.
- Ejemplo:
```powershell
docker compose up  --build
```