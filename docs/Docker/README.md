---
sidebar_position: 1
---
# Docker
## Contenedor
- Antes de descubrir Docker, hay que entender qué es un contenedor.
- Los contenedores de Docker son una tecnología que permite empaquetar aplicaciones y sus dependencias en un entorno aislado y consistente. Esto garantiza que la aplicación se ejecutará de la misma manera en cualquier entorno, ya sea en una máquina de desarrollo local, un servidor de pruebas, o en producción.
- Los contenedores proporcionan un entorno aislado que incluye el código, las librerías y las dependencias necesarias para ejecutar una aplicación. Esto asegura que los contenedores no interfieran entre sí y que el entorno de ejecución sea el mismo en cualquier sistema.
- Se trata de un entorno de ejecución ligero y una alternativa a las máquinas virtuales. 
-  Una de las prácticas clave en el desarrollo de software moderno es aislar las aplicaciones instaladas en el mismo servidor o clúster. Así se evita que interfieran entre sí.
- Los contenedores de Docker son como pequeñas cajas que contienen todo lo necesario para que una aplicación funcione correctamente, sin importar dónde se ejecute. A diferencia de las máquinas virtuales, que necesitan un sistema operativo completo, los contenedores comparten el sistema operativo del anfitrión, lo que los hace más ligeros y rápidos. Esto permite que las aplicaciones sean más fáciles de mover entre diferentes entornos, iniciar y gestionar, ahorrando tiempo y recursos.
- Los contenedores permiten ejecutar aplicaciones de manera aislada y consistente.
- Debido a que los contenedores encapsulan todo lo necesario para ejecutar una aplicación, pueden moverse fácilmente entre diferentes entornos sin necesidad de cambios en la configuración.
- Los contenedores pueden ser replicados y escalados horizontalmente de manera eficiente. Docker proporciona herramientas y servicios para orquestar y gestionar múltiples contenedores, facilitando el despliegue de aplicaciones a gran escala.
- Al contener todas las dependencias y configuraciones dentro del contenedor, se garantiza que la aplicación se comportará de manera idéntica en cualquier entorno donde se ejecute el contenedor, eliminando los problemas de "funciona en mi máquina".

## Docker
- Docker es una plataforma de contenedores que permite a los desarrolladores empacar aplicaciones y sus dependencias en unidades llamadas “contenedores”. Cada contenedor es una instancia virtualizada y aislada de una aplicación que incluye todo lo necesario para que funcione de manera independiente. Estos contenedores son ligeros, portátiles y pueden ejecutarse en cualquier entorno que admita Docker, como sistemas locales, servidores en la nube o clusters de contenedores.
- Uno de los principales beneficios de Docker es que permite a los desarrolladores trabajar con un entorno aislado y reproducible. Esto significa que los desarrolladores pueden probar y perfeccionar su aplicación en un entorno local que es idéntico al entorno de producción, lo que reduce significativamente los problemas de compatibilidad y ayuda a evitar problemas de configuración.
- Además, esta plataforma también facilita la implementación y el despliegue de aplicaciones. Ya que las aplicaciones se ejecutan en contenedores, los desarrolladores pueden desplegar fácilmente sus aplicaciones en diferentes entornos, ya sea en un servidor local, en la nube o en un entorno de contenedores.
#### Parecido a una máquina virtual
- Las maquinas virtuales se crearon para que varios Sistemas operativos se ejecuten en una sola maquina física. Su objetivo es crear entornos virtuales donde se aíslen el “hardware”.
- Los Docker sirven para crear contenedores donde podamos ejecutar nuestra aplicación independiente del sistema operativo.
- La principal diferencia es que los contenedores Docker comparten el sistema operativo del anfitrión, mientras que las máquinas virtuales también tienen un sistema operativo invitado que se ejecuta sobre el sistema anfitrión. Este método de funcionamiento afecta al rendimiento, las necesidades de hardware y la compatibilidad con el sistema operativo. 
#### Conceptos fundamentales

#### DockerFile
- Los Dockerfiles son instrucciones detalladas para crear imágenes de Docker.
- Un Dockerfile es un archivo de texto plano que contiene una serie de instrucciones sobre cómo construir una imagen de Docker. Especifica la imagen base con la que comenzar, los comandos a ejecutar, los archivos a copiar y las variables de entorno a establecer.
- Aquí tienes un ejemplo simple de Dockerfile:

```js
FROM ubuntu:latest
RUN apt update && apt install -y python
COPY app.py /app/
WORKDIR /app
CMD [“python”, “app.py”]
```
:::tip Observación
- En este ejemplo, comenzamos con la última imagen de Ubuntu, instalamos Python, copiamos el archivo app.py en el directorio /app, establecemos el directorio de trabajo en /app y especificamos el comando a ejecutar cuando se inicie el contenedor.
:::

#### Comando build
- Lee el Dockerfile y crea un Docker Image.
- Esta imagen se presenta como un archivo extraíble que indica qué software se ejecutará en el contenedor y cómo lo hará.

#### Docker Image
- Es un paquete que contiene todo lo necesario para ejecutar una aplicación, incluyendo el código fuente, las dependencias y el sistema operativo base.
- Se utiliza para crear un contenedor.

#### Comando run
- Crea y ejecuta un contenedor a partir de un Docker image
- Cuando ejecutas docker run, estás iniciando un contenedor que ejecuta una aplicación según la configuración y las instrucciones definidas en la imagen de Docker.


#### Cuando se usa Docker
- Con microservicios: Docker es ideal para arquitecturas de microservicios, donde cada microservicio puede ejecutarse en su propio contenedor, permitiendo un desarrollo, despliegue y escalado independientes.
- Integración y entrega continuos: Docker se integra bien con sistemas de CI/CD, permitiendo la construcción, prueba y despliegue automatizado de aplicaciones en contenedores. Esto acelera el ciclo de desarrollo y despliegue.
- Procesamiento de datos: Docker permite crear entornos reproducibles para ejecutar scripts de análisis de datos y modelos de machine learning. Cada contenedor puede contener una configuración específica de librerías y herramientas necesarias para un análisis en particular, asegurando que los resultados sean consistentes independientemente del entorno.
- Contenedores como servicio: Permite a los desarrolladores y empresas gestionar, desplegar y escalar aplicaciones contenedorizadas sin preocuparse por la infraestructura subyacente. Para esto se usa plataformas como Kubernetes y de este modo las organizaciones se centran en el desarrollo y la entrega continua de software mientras la plataforma maneja la gestión de los contenedores.

## Instalación
- Instálalo desde el [sitio web oficial](https://www.docker.com/get-started/). 

:::tip Observación
- Al instalarlo, debemos tener la opcion WSL 2 seleccionada, esto nos permitirá usar Linux en Windows.
- Debemos tener activo el Hyper-V o la virtualización, asique debemos verificar en la BIOS si lo tenemos activado.
- Si lo instalaste bien, tenes la aplicación Docker Desktop instalada. Es importante aclarar que esta app no es Docker, es una interfaz que te permite comunicar con docker.
- Al iniciar la aplicación, también estas iniciando Docker Daemon que es esencial para crear y ejecutar contenedores.
- Para poder instalarlo en otro sistema operativo tenes que mirar que la [documentación](https://docs.docker.com/desktop/install/linux-install/).


:::

#### Lo probamos
- Una vez que iniciamos sesión, lo probamos con el siguiente comando en una consola de Windows:

```cmd
docker run hello-world
```
:::tip Observación
- Cuando ejecutamos este comando, busca la imagen hello-world en nuestra máquina, como no la encuentra la descarga.
- La segunda vez que ejecutes este comando no la va a descargar porque ya está en nuestra maquina.
- Crea un contenedor de la imagen y lo inicia/ejecuta.
- Ejecutamos una imagen “remota” en un contenedor.
- Ósea que las imágenes se pueden guardar en internet y se hace un “docker pull” para obtenerla de manera local y ejecutarla.
- En la sección Containers de la App figuran los contenedores que se están ejecutando.

:::



:::tip Docker Hub
-  [Docker hub](https://hub.docker.com/) es el GitHub de imagenes  , a estas las podemos traer a nuestra máquina y usarlas para crear contenedores.


:::


#### Play with Docker
- Podemos ejecutar contenedores directamente desde el navegador con este [sitio web](https://labs.play-with-docker.com/).
- Sirve para trabajar con docker sin necesidad de descargarlo.
- Al ser gratis tenes un tiempo limitado.

#### Docker Hub
- Seria como el github de Docker. 
- [Sitio web](https://hub.docker.com/).
- En este sitio web están todas las imágenes que crearon otras personas para que las puedas usar para crear tus contenedores.
- Cada imagen te brinda información de como usarla y un comando “Docker pull X* , este sirve para descargar la imagen directamente a tu pc.
- Obviamente podés publicar tus imágenes para que otras personas lo usen.


## Imágenes vs Contenedor
- Usamos el comando pull de alguna imagen pública, por ejemplo:
```powershell
docker pull mongo
```
:::tip Explicación
- Se conecta a internet y verifica si la imagen se encuentra en nuestra máquina.
- Si no lo está, la descarga.
- Entonces con el comando “Docker pull X”, podemos descargar X imagen en nuestra máquina.
- En la sección “Images” de la app o con el comando “docker images”, podemos ver las imágenes descargadas.
:::
- Con la imagen podemos crear un contenedor usando el comando “docker container create X”, ejemplo:
```powershell
  docker container create mongo
```

:::tip Explicación
- El comando lee la imagen X para crear un contenedor y te devuelve un identificador.
- Es importante aclarar que con este comando creamos el contenedor, pero no lo ejecutamos.
:::
- Con el comando “docker start X” podemos ejecutar el contenedor.
- La “X” son los primeros cuatros (pueden ser más) caracteres del identificador.
- Por ejemplo:
```powershell
docker start 3444
```
:::tip Explicación
- Se ejecuta el contenedor cuyo identificador comience con 3444.
- Si el comando se ejecutó correctamente te devuelve el identificador que ingresaste en el comando.
- Podes usar el comando “docker ps” para ver que contenedores se están ejecutando o también lo podemos ver en la sección “Containers” de la app.
:::

- Podes crear dos contenedores a partir de la misma imagen. Por ejemplo:

```powershell
docker container create mongo
docker container create mongo
docker start 6e0b
docker ps
```

## Comandos básicos
- Listar imágenes:
```powershell
docker images
```
- Eliminar imagen:
```powershell
docker image rm X
docker rmi X 
```

:::tip Explicación
- Existen dos comandos para eliminar una imagen.
- X es el nombre de la imagen.
- No se puede eliminar una imagen que se usa en un contenedor.
:::

- Mostrar todos los contenedores que se están ejecutando (que ya se iniciaron):
```powershell
docker ps
```
- Obtener un listado de todos los contenedores:
```powershell
docker ps -a
```

- Para eliminar un contenedor:

```powershell
docker rm X
```

:::tip Explicación
- X puede ser el identificador del contenedor o el nombre del contenedor (lo veremos más adelante).
- No hace falta indicar el identificador completo, con los primeros cuatros caracteres alcanza. Si ingresas más de cuatros caracteres sigue siendo válido.
- Si el comando se ejecutó correctamente te devuelve X.
:::

- Para detener un contenedor que se está ejecutando:

```powershell
  docker stop X
```

:::tip Explicación
- X puede ser el identificador del contenedor o el nombre del contenedor (lo veremos más adelante).
- No hace falta indicar el identificador completo, con los primeros cuatros caracteres alcanza. Si ingresas más de cuatros caracteres sigue siendo válido.
- Si el comando se ejecutó correctamente te devuelve X.

:::

## Tags
- Al ejecutar el comando “docker pull” siempre usa la etiqueta “default“ por defecto que indica que descargue la última versión disponible.
- Cada imagen que está en docker hub tiene una sección de “tags” para poder ver todas sus versiones, desde la mas antigua hasta la más actual.
- Entonces los tags hacen referencia a la versión de la imagen y para descargar una versión especifica usamos: “docker pull nombreImagen:nombreEtiqueta”.
- Por ejemplo, para descargar la versión 7.0.11 de mongo usaría el siguiente comando:
```powershell
 docker pull mongo:7.0.11
```

:::tip 
- Si ya descargaste la última versión no se demora tanto la descarga ya que reutiliza algunas dependencias.
- Los comandos para descargar una versión especifica se encuentran en la sección tags de una imagen de docker hub.
:::

- O para la versión 6:
```powershell
docker pull mongo:6
```
:::tip
- Se demora mas en descargar ya que no se puede reutilizar los paquetes que descargamos de las otras versiones.
:::

- Ejecutamos el siguiente comando para ver las versiones:
```powershell
docker images
```
- Para eliminar una imagen usamos el comando “docker image rm nombreImagen:nombreEtiqueta” , por ejemplo:
```powershell
docker image rm mongo:latest
```
- Tambien podemos usar la abreviación:
```powershell
docker rmi mongo:6
```

#### Como eliminar dos imágenes en una sola línea
- Para eliminar varias imágenes, simplemente las separamos con un espacio en blanco:
```powershell
docker rmi mongo:latest mongo:7.0.11
```
#### Como eliminar varias imágenes
- Ejecutamos los siguientes comandos primero:
```powershell
docker pull mongo:latest
docker pull mongo:6.0.14
docker pull mongo:4.4.29
docker images
```

##### ¿Cómo eliminamos los tres con una sola línea?
- Primero ejecutamos el siguiente comando para ver solo el identificador de todas las imágenes:
```powershell
docker images -q
```

- Ahora usamos el siguiente comando para decirle a docker que elimine todas las imágenes que contengan los identificadores del comando anterior:
```powershell
docker rmi @(docker images -q)
```

:::tip Observación
- Eliminamos todas las imágenes. A través de @(X), usamos la respuesta de X comando para otro comando.
- En lugar de “@” podes usar el signo “$” .
- En Windows solo funciona con powershell.


:::

## Comandos para contenedores
- Primero instalamos mongo:

```powershell
docker pull mongo
```

- Con el comando “docker container create nombreImagen” creamos un contenedor, ejemplo:

```powershell
docker container create mongo
```

:::tip Observación
- Si el comando se ejecutó correctamente te devuelve el identificador del contenedor creado.
- Por defecto se le asigna un nombre aleatorio al contenedor creado.
- Es importante aclarar que el contenedor se crea, pero no se inicia/ejecuta.


:::

:::tip
- El contenedor seria una instancia de la imagen.
- El código se ejecuta en el contenedor.
:::

- Tambien podemos usar el comando “docker create nombreImagen” para crear un contenedor, por ejemplo:

```powershell
docker create mongo
```

- Para asignarle un nombre al contenedor usamos --name de esta forma:  "docker create  --name nombreContenedor  nombreImagen”.
- Por ejemplo:

```powershell
docker create --name mongodb mongo
```

:::tip Observación
- Creamos un contenedor que se llama mongodb.
:::

- Para ver el listado de todos los contenedores:
```powershell
docker ps -a
```
- Para iniciar un contenedor (ejecutar el código que contiene), usamos el comando “docker start identificadorContenedor”.
- El identificadorContenedor no tiene que ser el identificador completo, con los primeros cuatros caracteres alcanza. Si ingresas más de cuatros caracteres sigue siendo válido.
- Por ejemplo:
```powershell
docker start 11d6d
```
:::tip Observación
- Si el comando se ejecutó correctamente te devuelve el identificadorContenedor.
:::

- En lugar de usar el identificador podemos utilizar el nombre del contenedor para iniciarlo, entonces el comando quedaría “docker start nombreDelContenedor”.
- Por ejemplo:
```powershell
docker start mongodb
```
:::tip Observación
- Si el comando se ejecutó correctamente te devuelve el nombreDelContenedor.
:::

- Para ver los contenedores iniciados:
```powershell
docker ps
```

- Para detener un contenedor usamos el comando “docker stop identificadorContenedor/nombreDelContenedor”.
- Al detenerlo, estamos dejando de ejecuta el código que contiene, pero no estamos eliminando el contenedor, de esta manera lo podemos iniciar en otro momento.
- Por ejemplo: 
```powershell
docker stop mongodb
docker stop 11d6

```

:::tip Observación
- Si el comando se ejecutó correctamente te devuelve el nombreDelContenedor/ identificadorContenedor.
:::


:::tip
- Todas las operaciones que vimos hasta ahora las podés hacer directamente en la aplicación de docker.

:::


## Mapeo de puertos
- Podemos crear un contenedor y asignarle un puerto, de esta manera podemos acceder a él desde otro dispositivo.
- Para eso usamos la opcion -p en el comando: 
```powershell
docker create -pX:B  [opciones] nombreImagen
```
:::tip Observación
- X es el puerto que vas a exponer de tu computadora.
- B es el puerto del contenedor. Es un puerto interno que docker lo maneja.
- Esta opción especifica que se debe mapear el puerto B del contenedor al puerto X del host (la máquina que ejecuta Docker). Esto significa que cualquier solicitud que se envíe al puerto X del host se redirigirá al puerto B del contenedor.
- Entonces a través del puerto X accedemos al puerto B del contenedor.


:::
- Ejemplo:
```powershell
docker create -p27017:27017 --name mongodb mongo
docker start mongodb
docker ps

```

:::tip Observación
- -p 27017:27017: Esta opción especifica que se debe mapear el puerto 27017 del contenedor al puerto 27017 del host (la máquina que ejecuta Docker). Esto significa que cualquier solicitud que se envíe al puerto 27017 del host se redirigirá al puerto 27017 del contenedor, donde se ejecuta MongoDB.
- Entonces ahora con cualquier aplicación que nos permita gestionar bases de datos de mongoDB como Studio 3T, nos podemos conectar a localhost:27017 para tener acceso al servidor de mongoDB que contiene el contenedor.
:::

## Docker run
- El comando docker run ejecuta tres pasos:
    1.	Busca la imagen, si no la encuentra la descarga de docker hub (comando docker pull).
    2.	Crea un contenedor (comando docker create).
    3.	Inicia el contenedor (comando docker start).
- La sintaxis es:


```powershell
docker run [opciones] nombreImagen
```

- Tambien puede usar --name y -p.
- Por ejemplo:
```powershell
docker run -p27019:27017 --name mongodb3 mongo
```

:::tip Observación
- Al ejecutar este comando el contenedor se crea y se ejecuta en primer plano, lo que significa que el contenido del contenedor se ejecuta en la consola actual.
- El contenedor se inicia y se ejecuta, y la consola se bloquea esperando a que el contenedor termine su ejecución. Esto significa que no podrás ejecutar otros comandos en la consola hasta que el contenedor se detenga o se cierre.
- Mientras el contenedor se ejecuta, verás la salida del servidor de MongoDB en la consola, incluyendo mensajes de inicio, errores y otros registros. 

:::
#### Comportamiento de la consola
- Al ejecutar el comando anterior el contenedor se crea y se ejecuta en primer plano, lo que significa que el contenido del contenedor se ejecuta en la consola actual. La consola se bloquea esperando a que el contenedor termine su ejecución. Esto significa que no podrás ejecutar otros comandos en la consola hasta que el contenedor se detenga o se cierre.
- Para poder escribir otros comandos pulsamos “control + c” y detenemos la ejecución. 
- Al detener la ejecución, el contenedor se detiene.
- Para solucionar eso, usamos la opcion -d antes de especificar la imagen:

```powershell
docker run -p27020:27017 --name mongodb4 -d mongo
```
:::tip Observación
- Nos devuelve el identificador del contenedor.
- Si nos fijamos, creo el contenedor y lo inicio.
- La opción -d en docker run se utiliza para ejecutar el contenedor en segundo plano, es decir, en modo detached. Esto significa que el contenedor se ejecutará en segundo plano y no se bloqueará la sesión de la terminal.
- Es importante destacar que si no se especifica la opción -d, el contenedor se ejecutará en primer plano y la sesión de la terminal se bloqueará hasta que el contenedor se detenga.


:::

## Docker logs
- Para ver los logs que genera un contenedor usamos el comando “docker logs identificadorContenedor/nombreDelContenedor”.
- Por ejemplo:
```powershell
docker logs mongodb4
```
- Con la opcion --details obtenemos más información:
```powershell
docker logs mongodb4 –-details
```
- Para poder ver los logs en tiempo real usamos la opcion –-follow:
```powershell
docker logs  --follow mongodb4
```

:::tip Observación
- La consola se bloquea y te va a empezar a mostrar los logs en tiempo real a medida que se generan.
- Para detener el seguimiento pulsamos "Control + C".
:::

- En lugar de usar --follow podemos usar simplemente -f:
```powershell
docker logs -f mongodb4
```
- También tenemos la opcion --tail que nos permite mostrar las X ultimas lineas del log.
- La sintaxis seria: 
```powershell
docker logs [opciones] --tail X identificadorContenedor/nombreDelContenedor
```
- Por ejemplo:

```powershell
docker logs -f --tail 1 mongodb4
```

:::tip Observación
- Este comando muestra la última línea de los logs del contenedor mongodb4 y sigue mostrando los nuevos registros en tiempo real a medida que se generan.
:::

- Podemos usar la opcion  --since para obtener los  logs que surgieron partir de la fecha B
- La sintaxis seria: 
```powershell
docker logs [opciones] --since BBBB-BB-BB identificadorContenedor/nombreDelContenedor
```
- Ejemplo:
```powershell
docker logs --since 2024-06-06 mongodb4
```
- Pero también podemos usar  --since para obtener los logs de lo que paso hace X horas.
- La sintaxis seria: 
```powershell
docker logs [opciones]  --since Xh identificadorContenedor/nombreDelContenedor
```
- Ejemplo:
```powershell
docker logs --since 3h mongodb4
```
:::tip Observación
- La h sirve para especificar horas, pero también podemos usar otras medidas de tiempo, por ejemplo, “m” para minutos, “s” para segundos, etc.
:::

- Entonces con el --since especificamos el “desde”. Pero tambien podemos usar la opcion --until para especificar el “hasta”.
- Por ejemplo:
```powershell
docker logs --since 30m --until 3m mongodb4
```
:::tip Observación
- Obtiene los logs desde los últimos 30 minutos hasta los últimos 3 minutos.
- Entonces si combinamos los dos aplicamos un rango de logs a mostrar.
:::

## Variables de entorno
- Algunas imágenes requieren de variables de entorno.
- Ejecutamos el siguiente comando:
```powershell
docker run -p5433:5432 --name postgresdb postgres
```

:::tip Observación
- Se nos descarga la imagen postgres, pero obtenemos un error de que la BD no fue inicializada porque no especificamos el password.
:::

- Eliminamos el contenedor:
```powershell
docker rm postgresdb
```
- A la hora de ejecutar el “docker run” , usamos la opcion -e que sirve para especificar una variables de entorno.
-  La sintaxis sería algo como esto:
```powershell
docker run [opciones] -e VARIABLE=VALOR [opciones]  identificadorContenedor/nombreDelContenedor
```
:::tip Observación
- Después de la opcion -e se asigna una variable, pues esta es una variable de entorno que usara el contenedor al ejecutarse.
- En docker hub podes saber las variables de entorno que necesita cada imagen.
:::
- Entonces ahora ejecutamos el siguiente comando:
```powershell
docker run -p5433:5432  --name postgresdb -e POSTGRES_PASSWORD=123 POSTGRES_DB=demodb -d postgres
```
:::tip Observación
- Tenemos un pequeño error de formato invalido.
- Esto se debe a que la opcion -e se usa para definir una SOLA variable de entorno, pero podemos usar la opcion -e la cantidad de veces que queramos.
- Entonces si en un comando hay dos -e, es porque hay dos variables de entornos y así.
:::

- Corregimos el comando anterior:

```powershell
docker run -p5433:5432 --name postgresdb -e POSTGRES_PASSWORD=123 -e POSTGRES_DB=demodb -d postgres
```


## Subir imagen a Docker Hub
:::warning
- Debes leer el apartado de DockerFile para entender el comando build que usaremos en esta sección.
:::


- Para subir la imagen en el comando docker build tenes que usar la opcion -t con “/”:
```powershell
docker build -t nombreDeUsuario/nombreDeImagen  ruta-del-dockerfile
```

- Ahora tenemos que usar el siguiente comando para iniciar sesión en Docker Hub:
```powershell
docker login
```
- Luego de iniciar sesión para subir la imagen a Docker Hub ejecutamos lo siguiente:
```powershell
docker push nombreDeUsuario/nombreDeImagen  
```
## Archivo .dockerignore
- El archivo .dockerignore es un archivo de configuración utilizado en proyectos que emplean Docker. Su propósito principal es especificar qué archivos y directorios deben ser excluidos cuando Docker construye una imagen a partir del contexto de una aplicación (directorio  del proyecto). Este archivo es similar al .gitignore utilizado por Git para excluir archivos y directorios del control de versiones.
- El archivo .dockerignore debe colocarse en el mismo directorio donde se encuentra el archivo Dockerfile, que suele ser la raíz del proyecto.
- Cuando ejecutas docker build, Docker envía el contenido del directorio actual (o el directorio especificado) como el contexto de una aplicación. El archivo .dockerignore especifica qué archivos y directorios deben ser excluidos de este contexto. Esto significa que cualquier archivo o directorio listado en .dockerignore no estará disponible para los comandos en el Dockerfile porque no serán incluidos en el contexto que Docker utiliza para construir la imagen.

## Docker Daemon
- El Docker Daemon es un componente fundamental en la arquitectura de Docker. Se trata de un servicio que se ejecuta en segundo plano en el sistema operativo y gestiona la creación, ejecución y supervisión de contenedores Docker.
- Algunas de las funciones principales del Docker Daemon incluyen:
  1.	Gestión de contenedores: El Docker Daemon es responsable de la creación, inicio, detención, reinicio y eliminación de contenedores Docker según sea necesario.
  2.	Interfaz de red y almacenamiento: Administra la red y los volúmenes de almacenamiento para los contenedores Docker, incluyendo la asignación de direcciones IP, la gestión de puertos y la configuración de los volúmenes de almacenamiento.
  3.	Descarga y gestión de imágenes: El Daemon es responsable de la descarga y almacenamiento en caché de las imágenes Docker desde Docker Hub u otros registros de imágenes, así como de la gestión de estas imágenes en el sistema local.
  4.	Seguridad y aislamiento: Implementa las políticas de seguridad y aislamiento que garantizan que los contenedores se ejecuten de forma segura y no afecten negativamente a otros contenedores o al sistema anfitrión.
- El Docker Daemon es un servicio que se comunica con la API de Docker. Esta API es lo que permite la interacción con Docker, ya sea a través de la línea de comandos de Docker, herramientas de terceros o programas que utilicen la API de Docker.

#### La API de Docker y el Docker Daemon son dos módulos separados 
- Su comunicación proporciona funcionalidades y servicios relacionados con la gestión de contenedores, imágenes, redes y otros recursos de Docker.
- API de Docker: Este módulo proporciona una interfaz para que los clientes, como la línea de comandos de Docker, herramientas de terceros o aplicaciones personalizadas, interactúen con Docker. La API define los endpoints y métodos que pueden ser utilizados para realizar operaciones sobre los recursos de Docker, como crear contenedores, gestionar imágenes, redes, volúmenes, etc.
- Docker Daemon: Este módulo es el servicio central que implementa las operaciones definidas por la API de Docker. El Daemon recibe las solicitudes enviadas a través de la API, interpreta y procesa estas solicitudes, y lleva a cabo las acciones correspondientes en el sistema de Docker. Por ejemplo, cuando se envía una solicitud para crear un nuevo contenedor a través de la API de Docker, el Docker Daemon es el responsable de crear y ejecutar ese contenedor en el sistema.
- La comunicación entre la API de Docker y el Docker Daemon permite a los usuarios y aplicaciones interactuar con Docker de forma remota, lo que facilita la gestión y la automatización de los recursos de Docker. 

#### Proceso cuando usas comandos de Docker en la consola
##### 1- Envío de comando:
-	Cuando ejecutas un comando en la CLI de Docker, la CLI de Docker convierte este comando en una solicitud HTTP que se envía a la API de Docker.
-	Ejemplo: Ejecutas docker run hello-world. La CLI de Docker traduce esto a una solicitud HTTP POST a la API de Docker.
##### 2- Interacción con la API de Docker:
-	La solicitud HTTP generada por la CLI se envía a un endpoint de la API de Docker. Esta a su vez le manda la petición a Docker Daemon.
-	Ejemplo: La solicitud HTTP POST /containers/create llega al Docker Daemon a través de la API de Docker.
##### 3- Interpretación por parte del Docker Daemon:
-	El Docker Daemon recibe la solicitud HTTP a través de la API de Docker, interpreta el contenido de la solicitud y determina la acción requerida.
-	Ejemplo: El Daemon interpreta la solicitud POST a /containers/create y entiende que debe crear un nuevo contenedor.
##### 4- Acciones realizadas por el Docker Daemon:
-	El Docker Daemon ejecuta la acción solicitada. Crea, inicia, detiene o elimina contenedores, gestiona imágenes, redes o volúmenes, etc.
-	Ejemplo: El Daemon crea el contenedor hello-world.
##### 5- Respuesta al usuario:
- La API de Docker envía una respuesta HTTP de vuelta a la CLI de Docker, indicando el resultado de la operación.
- El Docker Daemon no se comunica directamente con la CLI, sino que la API de Docker actúa como intermediario entre ellos. La API de Docker recibe la respuesta del Docker Daemon y la devuelve a la CLI en forma de respuesta HTTP.
-	Ejemplo: La respuesta HTTP puede incluir el ID del contenedor creado o un mensaje de éxito.

#### Proceso cuando usas Docker desktop
##### 1-  Interacción con la interfaz de usuario de Docker Desktop: 
-	Utilizas la interfaz gráfica de usuario de Docker Desktop para realizar acciones como crear, iniciar, detener o eliminar contenedores, construir imágenes, gestionar volúmenes, redes, etc.
##### 2- Comunicación con el Docker Daemon: 
-	Cuando realizas una acción en la interfaz de usuario de Docker Desktop, como hacer clic en un botón para iniciar un contenedor, la aplicación Docker Desktop envía una solicitud a   la API de Docker. Esta a su vez le manda la petición a Docker Daemon.
##### 3- Procesamiento por parte del Docker Daemon:
-	El Docker Daemon recibe la solicitud enviada desde Docker Desktop y la procesa de acuerdo con la acción solicitada. Por ejemplo, si se solicitó iniciar un contenedor, el Daemon llevará a cabo el proceso de inicio del contenedor.
##### 4- Actualización de la interfaz de usuario de Docker Desktop:
- La API de Docker envía una respuesta HTTP de vuelta a la Docker Desktop, indicando el resultado de la operación.
- El Docker Daemon no se comunica directamente con Docker Desktop, sino que la API de Docker actúa como intermediario entre ellos. La API de Docker recibe la respuesta del Docker Daemon y la devuelve a Docker Desktop en forma de respuesta HTTP.


#### Relacion entre API Docker y Docker Daemon
- La relación entre la API de Docker y el Docker Daemon es fundamental para el funcionamiento de Docker. Aunque la API de Docker no ejecuta directamente las acciones (esa es la responsabilidad del Docker Daemon), desempeña un papel crucial al proporcionar una interfaz estandarizada para interactuar con el Docker Daemon. 

##### 1- Interfaz de Comunicación:
- API de Docker: La API actúa como una interfaz que debe implementar Docker Daemon. Define cómo deben estructurarse las solicitudes y qué operaciones se pueden realizar.
- Docker Daemon: El Daemon espera recibir solicitudes formateadas de la API de Docker

##### 2- Recepción y Procesamiento de Solicitudes:
- API de Docker: Cuando un cliente envía una solicitud a un endpoint de la API (por ejemplo, POST /containers/create), esta solicitud es transmitida al Docker Daemon.
- Docker Daemon: El Daemon recibe la solicitud a través de la API, la interpreta según las especificaciones de la API, y decide qué acción debe tomar.

##### 3- Ejecución de Acciones:
- API de Docker: No ejecuta las acciones por sí misma, sino que pasa las solicitudes al Docker Daemon.
- Docker Daemon: Lleva a cabo las acciones solicitadas (como crear, iniciar, detener contenedores, etc.) en el sistema Docker.

##### 4- Respuesta al Cliente:
-	API de Docker: Define el formato de las respuestas que se envían de vuelta al cliente.
-	Docker Daemon: Después de ejecutar la acción, el Daemon envía una respuesta a través de la API al cliente que hizo la solicitud, informando sobre el resultado de la operación.


## Volume
- Para entender el concepto de Volume, le sugiero leer el articulo [DockerFile Volume](./archivoDockerFile.md#comando-volume).
- En el comando rocker run podemos usar la opcion -v para vincular una carpeta del host con una carpeta del contenedor, dicho de otra forma, estamos montando un volumen (una especie de disco) para almacenar y leer datos persistentes.

#### Volume en el Sistema de Archivos del Host
##### 1- Crear un volumen en el host:
- Puedes montar un directorio del sistema de archivos del host como un volumen en Docker:
```powershell
# Crear un directorio en el host para datos
mkdir /datos_host

# Crear un contenedor que monte este directorio como volumen
docker run -d --name mi_contenedor -v /datos_host:/datos_contenedor nginx


```
:::tip Observación
-  En este ejemplo:
  -	/datos_host es el directorio en el host que se usara como volumen.
  -	/datos_contenedor es la ruta dentro del contenedor donde se accederán los datos de /datos_host
:::
##### 2- Comunicación con el volumen:
- Puedes copiar archivos, leer y escribir datos desde el host o desde otros contenedores.
```powershell
# Copiar archivos desde el host al volumen del contenedor
docker cp archivo.txt mi_contenedor:/datos_contenedor/nuevo_archivo.txt
```
:::tip observación
- Copia el archivo archivo.txt desde la máquina local al contenedor mi_contenedor en la ruta /datos_contenedor.
-  El comando docker cp permite copiar un archivo desde la máquina local al contenedor, y si no se especifica un nombre de archivo diferente, el archivo se copiará con el mismo nombre que tiene en la máquina local.
:::
```js
docker exec mi_contenedor cat /datos_contenedor/archivo.txt
```
:::tip Observación
- El comando docker exec mi_contenedor cat /datos_contenedor/archivo.txt se utiliza para ver el contenido del archivo archivo.txt que se encuentra en el directorio /datos_contenedor del contenedor mi_contenedor.
:::

#### Volume en Docker Volumes (Docker administrado)
##### 1-	Crea un Volumen en Docker
- Puedes crear y usar volúmenes administrados por Docker:
```powershell
# Crear un volumen en Docker
docker volume create datos_docker
```
:::tip Observación
- Este comando crea un nuevo volumen en Docker llamado datos_docker. Un volumen es un directorio que se puede compartir entre contenedores y la máquina host, lo que permite persistir datos incluso después de que un contenedor se detiene o se elimina.
:::

```powershell
# Crear un contenedor que use este volumen
docker run -d --name mi_otro_contenedor -v datos_docker:/datos_contenedor alpine
```
:::tip Observación
- Este comando crea un nuevo contenedor en segundo plano (-d significa "detach" o "desacoplado") con el nombre mi_otro_contenedor. El contenedor se basa en la imagen alpine, que es una imagen de Linux muy liviana y popular.
- La opción -v se utiliza para montar un volumen en el contenedor. En este caso, se monta el volumen datos_docker en el directorio /datos_contenedor dentro del contenedor. Esto significa que cualquier archivo o directorio creado en /datos_contenedor dentro del contenedor se almacenará en el volumen datos_docker.
:::
##### 2- Comunicación con el volumen:
- Puedes acceder y gestionar datos en el volumen desde diferentes contenedores:

```powershell
# Escribir datos en el volumen desde otro contenedor
docker exec mi_otro_contenedor sh -c 'echo "Hola desde otro contenedor" > /datos_contenedor/archivo.txt'

# Leer datos desde el volumen
docker exec mi_otro_contenedor cat /datos_contenedor/archivo.txt
```
#### Ejemplos
- Montaje en otro Contenedor:

```powershell
# Crear un contenedor con el volumen definido
docker run -d --name contenedor1 -v datos_volume:/datos mi_imagen
```
:::tip Observación
- Se crea un contenedor con el nombre contenedor1 a partir de la imagen mi_imagen. Se define un volumen llamado datos_volume que se monta en la ruta /datos dentro del contenedor.
:::

```powershell
# Crear otro contenedor que monte el mismo volumen
docker run -d --name contenedor2 --volumes-from contenedor1 mi_otra_imagen
```
:::tip Observación
- Se crea un contenedor con el nombre contenedor2 a partir de la imagen mi_otra_imagen. Se utiliza la opción --volumes-from para montar el mismo volumen  que se definió en contenedor1 (datos_volume).
:::

:::tip Explicación
- En este ejemplo:
  -	contenedor1 tiene el volumen datos_volume definido.
  -	contenedor2 monta el volumen datos_volume usando --volumes-from contenedor1, lo que le permite acceder a los mismos datos.
:::

#### Utilizando Volúmenes Nombrados
- Puedes crear volúmenes con nombres específicos y montarlos en múltiples contenedores:

```powershell
# Crear un volumen nombrado
docker volume create --name datos_compartidos

# Crear contenedores que monten el volumen nombrado
docker run -d --name contenedor3 -v datos_compartidos:/datos alpine
docker run -d --name contenedor4 -v datos_compartidos:/datos alpine

```
:::tip Observación
- Se crean dos contenedores (contenedor3 y contenedor4) que montan el mismo volumen nombrado datos_compartidos en la ruta /datos dentro de cada contenedor.
:::

#### Acceso desde el LocalHost
- Para acceder a datos de un volumen desde el host (localhost), puedes usar comandos de Docker para copiar archivos hacia y desde el contenedor que tiene el volumen montado:
```powershell
# Copiar archivos desde el host hacia el volumen del contenedor
docker cp archivo.txt contenedor1:/datos/archivo.txt
```
:::tip Observación
- Copia un archivo llamado archivo.txt desde el host hacia el volumen del contenedor contenedor1 en la ruta /datos/archivo.txt:
:::
```powershell
# Copiar archivos desde el volumen del contenedor hacia el host
docker cp contenedor1:/datos/archivo.txt archivo_recibido.txt
```
:::tip Observación
- Copia un archivo llamado archivo.txt desde el volumen del contenedor contenedor1 en la ruta /datos/archivo.txt hacia el host, y lo guarda en un archivo llamado archivo_recibido.txt.
:::

#### Montar Volumen directamente en el host
- Si deseas acceder a los datos de un volumen desde el host de manera más directa y continua, puedes montar el volumen del contenedor en una ubicación específica del host. Esto te permite acceder y manipular los archivos directamente desde el sistema de archivos del host.
- Identificar el Volumen y el Contenedor: Debes conocer el nombre o el ID del contenedor que tiene el volumen que deseas montar. Puedes obtener esta información usando docker ps.
- Montar el Volumen en el Host: Utiliza el comando docker run con la opción -v para montar el volumen del contenedor en una ubicación del sistema de archivos del host.
- Por ejemplo:
```powershell
# Montar el volumen del contenedor en una ruta del host
docker run -v /ruta/en/host:/ruta/en/contenedor -it alpine sh
```
:::tip Observación
-	docker run: Inicia un nuevo contenedor a partir de una imagen.
-	-v /ruta/en/host:/ruta/en/contenedor: Monta el volumen del host de la ruta /ruta/en/host en la ruta /ruta/en/contenedor dentro del contenedor.
-	-it: Asigna una sesión de terminal interactiva al contenedor, lo que permite interactuar con él de manera más cómoda.
-	alpine: Es la imagen base que se utiliza para crear el contenedor. En este caso, se utiliza la imagen oficial de Alpine Linux, que es una distribución de Linux muy ligera y minimalista.
-	sh: Es el comando que se ejecuta por defecto cuando se inicia el contenedor. En este caso, se inicia una shell de Bash.
- Una vez montado el volumen en el host, puedes navegar y manipular los archivos dentro del volumen directamente desde el sistema de archivos del host. Cualquier cambio que hagas en los archivos dentro de esta ruta se reflejará en el volumen del contenedor y viceversa.
:::

#### Formas de acceder a otro contenedor
##### 1-	Utilizando --volumes-from en Docker
- Una forma común de compartir volúmenes entre contenedores es utilizando la opción --volumes-from al ejecutar un contenedor. Esto te permite montar los mismos volúmenes que están definidos en un contenedor existente en uno nuevo que estás creando.
- Ejemplo: Supongamos que tienes un contenedor contenedor1 que tiene un volumen datos_volume definido. Ahora deseas crear otro contenedor contenedor2 que pueda acceder a ese mismo volumen:

```powershell
# Crear contenedor1 con un volumen definido
docker run -d --name contenedor1 -v datos_volume:/datos mi_imagen1

# Crear contenedor2 utilizando --volumes-from para acceder al volumen de contenedor1
docker run -d --name contenedor2 --volumes-from contenedor1 mi_imagen2

```
:::tip Observación
- En este ejemplo:
  -	mi_imagen1 y mi_imagen2 son las imágenes utilizadas para crear contenedor1 y contenedor2, respectivamente.
  -	datos_volume es el nombre del volumen definido en contenedor1.
  -	contenedor2 utilizará --volumes-from contenedor1 para montar el volumen datos_volume, lo que permite a contenedor2 acceder a los mismos datos que contenedor1.
:::
##### 2- Utilizando --mount en Docker
- La opción --mount (o -v) de Docker te permite montar volúmenes de un contenedor existente en otro contenedor. Esto te da más flexibilidad para especificar cómo y dónde se montan los volúmenes en el contenedor destino.
- Ejemplo:
```powershell
# Crear contenedor1 con un volumen definido
docker run -d --name contenedor1 -v datos_volume:/datos mi_imagen1

# Crear contenedor2 y montar el volumen de contenedor1 utilizando --mount
docker run -d --name contenedor2 --mount source=datos_volume,target=/datos mi_imagen2

```
:::tip Observación
- En este caso:
  -	--mount source=datos_volume,target=/datos especifica que el volumen datos_volume del contenedor1 se montará en /datos dentro de contenedor2.
  -	mi_imagen1 y mi_imagen2 son las imágenes utilizadas para crear contenedor1 y contenedor2, respectivamente.
:::

#### Consideraciones
-	Persistencia: Los datos en el volumen persistirán incluso después de detener o eliminar los contenedores. Esto asegura que los datos importantes estén siempre disponibles.
-	Permisos: Asegúrate de configurar correctamente los permisos de acceso a los volúmenes para que los contenedores puedan escribir y leer datos según sea necesario.
-	Seguridad: Ten en cuenta las prácticas de seguridad al compartir y acceder a datos entre contenedores, especialmente en entornos de producción.

#### Explicar código
```powershell
docker run -d --name contenedor1 -v datos_volume:/datos mi_imagen1
```

:::tip Explicación
-  docker run: Comando para crear y ejecutar un nuevo contenedor.
-  -d: Opción para ejecutar el contenedor en segundo plano (detached mode).
-  --name contenedor1: Asigna el nombre contenedor1 al contenedor que se está creando.
-  -v datos_volume:/datos: Define y monta un volumen en el contenedor.
  -	datos_volume: Especifica el nombre del volumen. Docker creará un volumen con este nombre si no existe, o utilizará un volumen existente con el mismo nombre.
  -	:/datos: Mapea el volumen datos_volume en el directorio /datos dentro del contenedor.
-  mi_imagen1: Especifica la imagen desde la cual se creará el contenedor.
- Explicación:
  -	Este comando crea un contenedor llamado contenedor1 a partir de la imagen mi_imagen1.
  -	Se define un volumen llamado datos_volume que está disponible en el directorio /datos dentro del contenedor contenedor1. Este volumen puede almacenar datos persistentes que serán accesibles incluso después de que se detenga el contenedor.
  -	El contenedor se ejecuta en segundo plano (-d), lo que significa que seguirá ejecutándose incluso después de que el script Docker se complete, a menos que se detenga explícitamente.
:::

```powershell
docker run -d --name contenedor2 --mount source=datos_volume,target=/datos mi_imagen2
```
:::tip Explicación
-  docker run: Comando para crear y ejecutar un nuevo contenedor.
-  -d: Opción para ejecutar el contenedor en segundo plano (detached mode).
-  --name contenedor2: Asigna el nombre contenedor2 al contenedor que se está creando.
-  --mount source=datos_volume,target=/datos: Monta un volumen en el contenedor.
  -	source=datos_volume: Especifica el nombre del volumen a montar, que en este caso es datos_volume.
  -	target=/datos: Especifica la ruta dentro del contenedor donde se montará el volumen, en este caso /datos.
-  mi_imagen2: Especifica la imagen desde la cual se creará el contenedor.
- Explicación:
  -	Este comando crea un segundo contenedor llamado contenedor2 a partir de la imagen mi_imagen2.
  -	Utiliza la opción --mount para montar el volumen datos_volume del contenedor1 en el directorio /datos dentro del contenedor2.
  -	Al montar el mismo volumen en ambos contenedores (contenedor1 y contenedor2), cualquier cambio realizado en el volumen desde uno de los contenedores será visible para el otro contenedor, lo que facilita el intercambio de datos entre ellos.
:::

#### Volumen Anónimo o con Nombre Específico
- Cuando utilizas la instrucción VOLUME en un Dockerfile, no estás creando un volumen con un nombre específico como lo harías al usar el comando -v durante la ejecución del contenedor. En lugar de eso, estás especificando un punto de montaje dentro del sistema de archivos del contenedor donde se pueden almacenar datos persistentes.
- Cuando ejecutas un contenedor a partir de una imagen que tiene la instrucción VOLUME, Docker asigna automáticamente un volumen anónimo o genera un nombre de volumen único para ese punto de montaje.
- Para acceder y gestionar datos dentro de este volumen, puedes utilizar comandos como docker volume ls, docker volume inspect, y docker volume prune para listar, inspeccionar y limpiar volúmenes respectivamente. Sin embargo, no especificas un nombre de volumen fijo en el Dockerfile; eso se determina durante la ejecución del contenedor.

#### Ejemplo Usando un Volumen Anónimo
- En este ejemplo, simplemente usaremos el volumen definido en el Dockerfile sin especificar un nombre de volumen. Docker asignará un nombre automáticamente al volumen cuando se ejecute el contenedor:
```js
# Dockerfile

# Usar la imagen oficial de Node.js como base
FROM node:14

# Crear un directorio de trabajo en el contenedor
WORKDIR /app

# Copiar el código fuente de la aplicación al contenedor
COPY . .

# Definir un volumen para almacenar archivos de datos
VOLUME /app/data

# Instalar dependencias
RUN npm install

# Comando por defecto al iniciar el contenedor
CMD ["node", "app.js"]
```
:::tip Observación
- En este Dockerfile:
  -	Se define un volumen en el directorio /app/data del contenedor.
  -	Cuando ejecutes un contenedor a partir de esta imagen, Docker asignará un nombre automáticamente al volumen asociado a /app/data.
  -	Este volumen será utilizado para almacenar datos persistentes, como archivos generados por la aplicación o datos que necesiten persistencia más allá del ciclo de vida del contenedor.
:::

#### Ejemplo: Montando un Volumen con Nombre Específico
- En este segundo ejemplo, vamos a montar un volumen con un nombre específico al ejecutar el contenedor. Esto te da más control sobre el nombre y la gestión del volumen:

```js
# Dockerfile

# Usar la imagen oficial de Node.js como base
FROM node:14

# Crear un directorio de trabajo en el contenedor
WORKDIR /app

# Copiar el código fuente de la aplicación al contenedor
COPY . .

# Instalar dependencias
RUN npm install

# Comando por defecto al iniciar el contenedor
CMD ["node", "app.js"]

```
- Luego, cuando ejecutes el contenedor, puedes usar la opción -v o --mount para montar un volumen con un nombre específico en el directorio /app/data:

```powershell
docker run -d --name mi_contenedor -v nombre_del_volumen:/app/data mi_imagen
```

:::tip Observación
- En este caso:
  -	nombre_del_volumen es el nombre específico del volumen que estás creando y montando en el contenedor.
  -	El volumen nombre_del_volumen estará asociado al directorio /app/data dentro del contenedor.
  -	Este enfoque te permite gestionar y referenciar volúmenes específicos de manera más controlada y persistente.
:::

#### Consideraciones
-	Volumen Anónimo vs. Volumen con Nombre Específico: Utiliza un volumen anónimo cuando no necesitas un control específico sobre el nombre del volumen. Utiliza un volumen con nombre específico cuando necesitas gestionar los volúmenes de manera más estructurada y persistente.
-	Persistencia de Datos: Los datos almacenados en volúmenes persisten incluso si detienes o eliminas el contenedor. Esto es útil para datos que necesitan persistencia más allá del ciclo de vida del contenedor.


#### Comunicación entre Contenedores con Volumen Anónimo
- En este ejemplo, vamos a utilizar un volumen anónimo para compartir datos entre dos contenedores. Un volumen anónimo no tiene un nombre específico asignado por el usuario; Docker genera uno automáticamente.
- Dockerfile 1: Contenedor A:
```js
# Dockerfile para Contenedor A

# Usar una imagen base, por ejemplo, Alpine
FROM alpine:latest

# Crear un directorio de trabajo
WORKDIR /app

# Crear un archivo de datos dentro del contenedor A
RUN echo "Datos de prueba" > /app/datos.txt

# Comando por defecto al iniciar el contenedor
CMD ["tail", "-f", "/dev/null"]


```
:::tip Observación
- En este Dockerfile:
  -	Se usa la imagen base Alpine.
  -	Se crea un directorio de trabajo /app y se añade un archivo de datos datos.txt con contenido de prueba.
:::
- Dockerfile 2: Contenedor B:

```js
# Usar una imagen base, por ejemplo, Alpine
FROM alpine:latest

# Crear un directorio de trabajo
WORKDIR /app

# Instalar un editor de texto para modificar el archivo de datos
RUN apk add --no-cache nano

# Comando por defecto al iniciar el contenedor
CMD ["tail", "-f", "/dev/null"]

```
:::tip Observación
- En este Dockerfile:
  -	También se usa la imagen base Alpine.
  -	Se instala el editor de texto nano para poder modificar el archivo de datos desde el contenedor B.
:::

- A continuación, ejecutaremos ambos contenedores y montaremos un volumen anónimo para compartir el archivo de datos entre ellos:

```powershell
# Ejecutar Contenedor A con un volumen anónimo
docker run -d --name contenedor_a --mount source=/app,target=/app alpine:latest

# Ejecutar Contenedor B con el mismo volumen anónimo
docker run -it --name contenedor_b --mount source=/app,target=/app alpine:latest

```
:::tip Observación
- La opción -d en el primer comando hace que el contenedor se ejecute en segundo plano, mientras que la opción -it en el segundo comando permite la interacción con el contenedor mediante la consola.
- La opción --mount se utiliza para montar un volumen en ambos contenedores. En este caso, se está montando un volumen anónimo en la ruta /app dentro de cada contenedor. El parámetro source=/app indica que el volumen se llama /app, y el parámetro target=/app indica que se montará en la ruta /app dentro del contenedor.
- Entonces cuando el nombre del volumen es una ruta es anónima, si contiene un nombre pues no.
:::

##### Comunicación entre Contenedores
- Ahora que ambos contenedores están ejecutándose y comparten el mismo volumen anónimo, puedes realizar las siguientes operaciones para comunicarte entre ellos.
- Desde Contenedor A: Escribir en el archivo de datos:
```powershell
docker exec -it contenedor_a sh -c "echo 'Datos nuevos desde Contenedor A' > /app/datos.txt"
```
- Desde Contenedor B: Leer y modificar el archivo de datos:
```powershell
docker exec -it contenedor_b nano /app/datos.txt
```
- Desde Contenedor A: Leer el archivo de datos para verificar los cambios:
```powershell
docker exec -it contenedor_a cat /app/datos.txt
```

:::tip
-  Si se utiliza el mismo volumen anónimo (/app en este ejemplo) en dos contenedores, entonces sí hay comunicación entre ellos a través del volumen anónimo compartido. Pero si se utiliza un volumen anónimo diferente para cada contenedor, entonces no hay comunicación entre ellos.

:::

#### Comunicación entre Contenedores con Nombre
- En este segundo ejemplo, utilizaremos un volumen con nombre específico para compartir datos entre dos contenedores. Este enfoque proporciona más control sobre el nombre del volumen y facilita la gestión persistente de los datos.

##### Definición del Volumen con Nombre Específico
- Primero, crea un volumen con nombre específico utilizando el comando docker volume create:
```powershell
docker volume create datos_volume
```
- Dockerfile para Contenedor A:
```js
# Usar una imagen base, por ejemplo, Alpine
FROM alpine:latest

# Crear un directorio de trabajo
WORKDIR /app

# Comando por defecto al iniciar el contenedor
CMD ["tail", "-f", "/dev/null"]
Dockerfile 2: Contenedor B	
# Dockerfile para Contenedor B

# Usar una imagen base, por ejemplo, Alpine
FROM alpine:latest

# Crear un directorio de trabajo
WORKDIR /app

# Instalar un editor de texto para modificar el archivo de datos
RUN apk add --no-cache nano

# Comando por defecto al iniciar el contenedor
CMD ["tail", "-f", "/dev/null"]

```
##### Ejecución de los Contenedores con Volumen de Nombre Específico
- Ahora, ejecutaremos ambos contenedores utilizando el volumen con nombre específico datos_volume que creamos anteriormente:

```powershell
# Ejecutar Contenedor A con el volumen de nombre específico
docker run -d --name contenedor_a --mount source=datos_volume,target=/app alpine:latest

# Ejecutar Contenedor B con el mismo volumen de nombre específico
docker run -it --name contenedor_b --mount source=datos_volume,target=/app alpine:latest

```
:::tip Observación
- Con los contenedores en funcionamiento y utilizando el mismo volumen con nombre específico, puedes seguir los mismos pasos descritos anteriormente para comunicarte entre ellos. Las operaciones para escribir, modificar y leer archivos de datos serían las mismas que en el ejemplo anterior con volumen anónimo.

:::

## Docker inspect
- El comando docker inspect se utiliza para obtener información detallada acerca de un contenedor de Docker. Para utilizarlo, necesitas conocer el nombre o el ID del contenedor que deseas inspeccionar. El comando general es:
```powershell
docker inspect <nombreDelContenedor>
```
:::tip Observación
- Donde &lt;nombreDelContenedor> es el nombre o el ID del contenedor que deseas inspeccionar.

:::
- Ejemplo:

```powershell
docker inspect nodedocker-app-1
```
:::tip Observación
- Esto te proporcionará una salida en formato JSON con detalles sobre el contenedor, como su configuración, estado, volúmenes montados, redes conectadas, entre otros.

:::

- Si deseas filtrar y ver solo información específica, puedes utilizar la opcion --format para manipular el formato de salida. Por ejemplo:
```powershell
docker inspect --format='{{.NetworkSettings.IPAddress}}' nodedocker-app-1
```
:::tip Observación
- Esto mostrará solo la dirección IP del contenedor en lugar de toda la información.
:::

:::tip Explicación
- En el contexto de docker inspect, el punto "." representa el objeto JSON completo que describe el contenedor. Puedes acceder a sus campos directamente utilizando {{.Field}}.
- Por ejemplo:
  - {{.State}} accede al objeto State del contenedor.
  - {{.NetworkSettings}} accede al objeto NetworkSettings del contenedor.
  - {{.Config}} accede al objeto Config del contenedor.
:::

- Puedes usar la funcion "json" para que la salida sea en formato JSON. Por ejemplo:

```powershell
docker inspect --format='{{json .State}}' nodedocker-app-1
```

:::tip
- Este comando solo funciona en powershell.

:::

## Docker Network
- Docker incluye un sistema de red para gestionar las comunicaciones entre contenedores, su host Docker y el mundo exterior. Se admiten varios tipos de redes diferentes, lo que facilita una variedad de casos de uso comunes.

:::tip Host docker
- El host Docker es la máquina física o virtual donde está instalado y ejecutándose el software Docker. Este host es el entorno en el cual los contenedores Docker son desplegados y gestionados. 
:::
- Las redes Docker configuran las comunicaciones entre contenedores vecinos y servicios externos. Los contenedores deben estar conectados a una red Docker para recibir cualquier conectividad de red. 
- El comando docker network proporciona una interfaz para gestionar las redes que Docker usa para la comunicación entre contenedores. 
#### Aquí hay un desglose de los subcomandos más comunes:
- Crea una nueva red llamada X:
```powershell
docker network create X
## Ejemplo
docker network create my_network
```
- Lista todas las redes existentes:
```powershell
docker network ls
## Ejemplo
docker network ls
```
- Muestra información detallada sobre la red cuyo nombre es X:
```powershell
docker network inspect X
## Ejemplo
docker network inspect my_network
```
- Conecta el contenedor B a la red X:
```powershell
docker network connect X B
## Ejemplo
docker network connect my_network my_container
```
- Desconecta el contenedor B de la red X:
```powershell
docker network disconnect X B
## Ejemplo
docker network disconnect my_network my_container
```
- Elimina la red llamada X:
```powershell
docker network rm X
## Ejemplo
docker network rm my_network
```
#### Docker viene con varios tipo de redes 
####  1-	Bridge
- Es la predeterminada de Docker.
- Una red de puente(bridge) en Docker es una red privada interna creada en el host Docker. Los contenedores conectados a esta red pueden comunicarse entre sí mediante el uso de nombres de contenedores o direcciones IP.
- Características:
  -	Aislamiento de Contenedores: Los contenedores en una red de puente pueden comunicarse entre sí, pero están aislados de contenedores que no están en la misma red.
  -	Conmutador Virtual: Actúa como un conmutador virtual (switch) que conecta los contenedores a nivel de capa 2 (enlace de datos).
  -	NAT (Network Address Translation): Los contenedores pueden acceder a la red externa (Internet) a través de NAT proporcionado por el host.
  -	Resolución de Nombres: Docker proporciona un servicio de DNS para la resolución de nombres de contenedores.
- Uso Común:
  -	Despliegue de microservicios en un solo host.
  -	Aplicaciones que requieren comunicación interna entre varios contenedores.
##### Comando para crearlo:
```powershell
docker network create --driver bridge my_bridge_network
```
:::tip Observación
- La opcion --driver sirve para especificar el tipo de red que se va a crear.
:::
##### Ejemplo
- Crear una Red de puente:
```powershell
docker network create my_bridge_network
```
- Iniciar contenedores en la Red de Puente:
```powershell
docker run -d --name web --network my_bridge_network nginx
docker run -d --name db --network my_bridge_network mysql
```
:::tip Observación
- Con la opcion  --network especificamos que red va a usar el contenedor.
:::
- Verificar Conectividad:
```powershell
docker exec -it web ping db
```
####  2-	Host
- En una red de host, los contenedores comparten la pila de red del host Docker. Esto significa que los contenedores utilizan la dirección IP del host y los puertos expuestos del contenedor son los mismos que los del host.
- Características:
  -	Sin Aislamiento de Red: El contenedor no tiene su propia dirección IP.
  -	Rendimiento Mejorado: Ideal para aplicaciones que necesitan rendimiento de red muy alto.
  -	Acceso Directo: Los servicios en el contenedor son accesibles a través de los puertos del host.
- Uso Común:
  -	Aplicaciones que requieren un rendimiento de red óptimo.
  -	Servicios que necesitan interactuar directamente con aplicaciones en el host.
##### Ejemplo
```powershell
docker network create --driver host my_host_network
docker run -d --name nginx --network host nginx
```

:::tip Observación
- Cuando usa la opción --network host con docker run, no conecta el contenedor a una red llamada "host". En cambio, le dice a Docker que use la pila de red del host directamente, sin pasar por las funciones de red de Docker. Esto significa que el contenedor compartirá el espacio de nombres de la red del host y no podrá aislar el tráfico de red del contenedor  del host.
- El servicio NGINX estará disponible en el puerto 80 del host.
:::

####  3-	Overlay
- Las redes superpuestas permiten la comunicación entre contenedores en diferentes hosts Docker en un clúster Docker Swarm. Utilizan una red de túneles que conecta varios hosts.

:::tip Docker Swarm
- Un clúster Docker Swarm es un conjunto de computadoras que trabajan juntas para ejecutar aplicaciones de manera más eficiente y confiable. Piensa en ello como un equipo de personas trabajando en un proyecto. Cada persona tiene su tarea específica, pero todos colaboran para alcanzar el mismo objetivo.
- Componentes Clave de un Clúster Docker Swarm:
  1.	Nodos:
   -	Nodos Gerentes (Managers): Son como los jefes de equipo. Deciden quién hace qué, supervisan el progreso y aseguran que todo el mundo esté en sintonía.
  -	Nodos Trabajadores (Workers): Son los miembros del equipo que realizan las tareas asignadas por los jefes. Ejecutan las aplicaciones y hacen el trabajo diario.
  2.	Servicios:
  o	Un servicio es como un proyecto en el que trabaja el equipo. Define qué tareas se deben hacer, cuántas personas se necesitan y cómo se deben realizar.
  3.	Tareas:
o	Una tarea es una porción específica del trabajo dentro de un proyecto. Es una unidad de trabajo que necesita ser realizada, como un contenedor en ejecución que lleva a cabo una parte de la aplicación.
- Imagina que tienes una aplicación que quieres que esté siempre disponible y que pueda manejar muchas solicitudes. En lugar de ejecutarla en una sola computadora, la ejecutas en varias computadoras (nodos) que están trabajando juntas (clúster). Docker Swarm organiza estas computadoras para que si una falla, otra pueda tomar el relevo, asegurando que tu aplicación siempre esté en funcionamiento y pueda escalar para manejar más trabajo cuando sea necesario.
- Piensa en un restaurante:
  -	Nodos Gerentes (Managers): Son los gerentes del restaurante. Deciden qué mesas atender primero y supervisan a los meseros.
  -	Nodos Trabajadores (Workers): Son los meseros. Llevan la comida a las mesas según las instrucciones de los gerentes.
  -	Servicios: Es el menú del restaurante. Define qué platos se van a servir y cómo deben ser preparados.
  -	Tareas: Son las órdenes específicas que cada mesero lleva a las mesas.
  -  Al tener varios meseros y gerentes, el restaurante puede atender a más clientes y asegurar que el servicio sea rápido y eficiente, incluso si un mesero se enferma (falla un nodo), otros meseros pueden hacerse cargo sin que los clientes lo noten.
- En resumen, un clúster Docker Swarm es como un equipo bien organizado que asegura que las aplicaciones se ejecuten sin interrupciones y puedan manejar más carga cuando sea necesario, distribuyendo el trabajo entre varias computadoras.
:::
- Características:
  -	Multi-Host: Los contenedores pueden comunicarse entre hosts diferentes.
  -	Cifrado: Proporciona cifrado del tráfico entre contenedores.
  -	Escalabilidad: Ideal para aplicaciones distribuidas.
- Uso Común:
  -	Aplicaciones distribuidas y de microservicios que se ejecutan en un clúster.
  -	Servicios en Docker Swarm.

##### Ejemplo de Creación:
```powershell
docker network create --driver overlay my_overlay_network
```
##### Ejemplo de Uso:
Iniciar Docker Swarm:
```powershell
docker swarm init
```
- Crear una Red Superpuesta:
```powershell
docker network create --driver overlay my_overlay_network
```
- Desplegar Servicios en la Red Superpuesta:
```powershell
docker service create --name web --network my_overlay_network nginx
docker service create --name db --network my_overlay_network mysql
```

:::tip Observación
- Los contenedores de los servicios web y db podrán comunicarse entre sí a través de la red superpuesta, incluso si se ejecutan en diferentes nodos del clúster.
:::


####  4-	None
- En una red none, el contenedor no tiene configurada ninguna interfaz de red, lo que significa que no puede comunicarse con otros contenedores ni con el host.
- Características:
  -	Aislamiento Completo: El contenedor está completamente aislado en términos de red.
  -	Sin Conectividad: No hay acceso a Internet ni a otras redes.
- Uso Común:
  -	Contenedores que no necesitan comunicación de red.
  -	Ambientes de prueba y desarrollo con requisitos de aislamiento extremo.


##### Ejemplo de Creación:
```powershell
docker network create --driver none my_none_network
```
##### Ejemplo de Uso:
- Iniciar un Contenedor en la Red None:
```powershell
docker run -d --name isolated --network none busybox
```
:::tip Observación
- La opción --network none le indica a Docker que deshabilite la red para el contenedor, lo que significa que el contenedor no tendrá ninguna interfaz de red ni acceso a la red.
- Tanto con la opción none como  host, no hace falta crear una red de ese tipo para poder usarla.
:::
#### Comunicación entre contenedores
- Cada contenedor tiene su propio localhost y por lo tanto entre contenedores no hay una comunicación directa.
- Para que se puedan comunicar, en lugar de usar localhost, usa el nombre del contenedor.
- Ejemplo: postgresdb:5432
- Luego hay que crear una red, eso se hace con el siguiente comando: "docker network create nombreConexion”.
- Ejemplo:
```powershell
docker network create mitonetwork
```
- A la hora de crear y ejecutar los contenedores con el comando run, usamos la opcion --network=nombreConexion para hacer que los contenedores permanezcan en la misma red y puedan comunicarse.

## Docker exec
- El comando docker exec se utiliza para ejecutar un comando dentro de un contenedor Docker que ya está en ejecución. Este comando es muy útil para interactuar con un contenedor en ejecución sin detenerlo ni afectar su estado actual.
- Funcionalidades Clave del Comando docker exec:
  -	Ejecutar Comandos dentro del Contenedor:
      - Puedes ejecutar cualquier comando o script dentro del contenedor. 
      - Ejemplo: Ver el contenido de un directorio dentro del contenedor.
  -	Abrir una Sesión Interactiva:
      -	Puedes iniciar una sesión interactiva dentro del contenedor, similar a abrir una terminal.
      -	Abrir una sesión interactiva dentro de un contenedor Docker significa iniciar una terminal dentro del contenedor, similar a cómo abrirías una terminal en tu computadora. Esto te permite ejecutar comandos directamente dentro del contenedor como si estuvieras trabajando en un sistema operativo normal.
      -	Ejemplo: Iniciar una shell Bash para inspeccionar el contenedor.
#### Sintaxis del Comando docker exec
```powershell
docker exec [opciones] <nombre_o_id_del_contenedor> <comando> [argumentos]
```
:::tip Observación
- Opciones Comunes:
  -	-i (interactive): Mantiene la conexión abierta para que puedas interactuar con el contenedor. Mantiene la entrada estándar (stdin) abierta en el contenedor. Esto permite que el contenedor pueda recibir datos de entrada de forma continua desde tu terminal.
  -	-t (tty): Crea una terminal virtual dentro del contenedor.
  -	-e (env): Establece variables de entorno.
  -	-it : Combina -i y -t para abrir una sesión interactiva con una terminal virtual.
:::

#### Ejemplos
- Ejecutar un Comando Simple dentro del Contenedor:
```powershell
docker exec my_container ls /
```
:::tip Observación
- Este comando lista los archivos en el directorio / del contenedor my_container.
:::
- Abrir una Sesión Interactiva con Bash:
```powershell
docker exec -it my_container bash
```
:::tip Observación
- Este comando inicia una sesión de terminal interactiva dentro del contenedor my_container utilizando Bash.
:::
- Ejecutar un Comando con Variables de Entorno:
```powershell
docker exec -e ENV_VAR=value my_container printenv ENV_VAR
```
:::tip Observación
- Este comando establece una variable de entorno ENV_VAR antes de ejecutar el comando.
:::
- Ejecutar un Script dentro del Contenedor:
```powershell
docker exec my_container /path/to/script.sh
```
:::tip Observación
- Si tienes un script en el contenedor, puedes ejecutarlo directamente.
:::

## Docker cp
- El comando docker cp se utiliza para copiar archivos o directorios entre el sistema de archivos de un contenedor Docker y el sistema de archivos del host (la máquina donde Docker está corriendo). Este comando es útil para transferir datos hacia y desde contenedores sin necesidad de crear volúmenes compartidos o realizar otras configuraciones más complejas.
#### Sintaxis del Comando docker cp
```powershell
docker cp [opciones] <fuente> <destino>
```
:::tip Observación
- &lt;fuente>: La ubicación del archivo o directorio que quieres copiar. Puede estar en el host o dentro del contenedor.
- &lt;destino>: La ubicación donde quieres copiar el archivo o directorio. Puede estar en el host o dentro del contenedor.
:::

#### Ejemplos de Uso
##### Si tienes un archivo en tu máquina host y quieres copiarlo dentro de un contenedor:
```powershell
docker cp /ruta/en/el/host/archivo.txt <nombre_o_id_del_contenedor>:/ruta/en/el/contenedor/archivo.txt
```
- Ejemplo:
```powershell
docker cp /home/user/data.txt my_container:/root/data.txt
```
:::tip Observación
- En este ejemplo, el archivo data.txt se copiará desde el directorio /home/user/ en el host al directorio /root/ en el contenedor my_container.
:::
##### Copiar un Archivo desde el Contenedor hacia el Host:
- Si tienes un archivo dentro de un contenedor y quieres copiarlo a tu máquina host:
```powershell
docker cp <nombre_o_id_del_contenedor>:/ruta/en/el/contenedor/archivo.txt /ruta/en/el/host/archivo.txt
```
- Ejemplo:
```powershell
docker cp my_container:/root/data.txt /home/user/data.txt
```
:::tip Observación
- En este ejemplo, el archivo data.txt se copiará desde el directorio /root/ en el contenedor my_container al directorio /home/user/ en el host.
:::
##### Copiar un Directorio Completo:
- El comando docker cp también puede copiar directorios completos de la misma manera.
- Desde el host al contenedor:
```powershell
docker cp /home/user/directory my_container:/root/directory
```
- Desde el contenedor al host:
```powershell
docker cp my_container:/root/directory /home/user/directory
```
##### Copiar un Archivo desde el Host al Contenedor y Cambiar el Nombre:
- También es posible cambiar el nombre del archivo cuando se usa el comando docker cp. Al especificar una ruta de destino que incluye un nombre de archivo diferente, el archivo copiado tomará el nuevo nombre en el destino.
- Supongamos que tienes un archivo en tu máquina host llamado archivo_original.txt y quieres copiarlo a un contenedor llamado my_container, pero con un nombre diferente, como archivo_nuevo.txt:
```powershell
docker cp /ruta/en/el/host/archivo_original.txt my_container:/ruta/en/el/contenedor/archivo_nuevo.txt
```
- Ejemplo:
```powershell
docker cp /home/user/archivo_original.txt my_container:/root/archivo_nuevo.txt
```
:::tip Observación
- En este ejemplo, el archivo archivo_original.txt se copiará desde el directorio /home/user/ en el host al directorio /root/ en el contenedor my_container con el nuevo nombre archivo_nuevo.txt.
:::
##### Copiar un Archivo desde el Contenedor al Host y Cambiar el Nombre
- Del mismo modo, si tienes un archivo dentro de un contenedor que deseas copiar a tu máquina host con un nombre diferente, puedes hacerlo especificando el nuevo nombre en la ruta de destino:
```powershell
docker cp my_container:/ruta/en/el/contenedor/archivo_original.txt /ruta/en/el/host/archivo_nuevo.txt
```
- Ejemplo:
```powershell
docker cp my_container:/root/archivo_original.txt /home/user/archivo_nuevo.txt
```
:::tip Observación
- En este ejemplo, el archivo archivo_original.txt se copiará desde el directorio /root/ en el contenedor my_container al directorio /home/user/ en el host con el nuevo nombre archivo_nuevo.txt.
:::
#### Consideraciones
-	Permisos: Asegúrate de tener los permisos necesarios tanto en el host como en el contenedor para leer y escribir los archivos o directorios involucrados.
-	Rutas Relativas y Absolutas: Especifica rutas absolutas para mayor claridad y evitar problemas con rutas relativas.
-	Sobreescritura: Si un archivo o directorio ya existe en el destino, será sobrescrito sin advertencia.
#### Beneficios
-	Facilidad de Uso: Copiar archivos entre el host y el contenedor es simple y directo.
-	Flexibilidad: Funciona tanto para archivos individuales como para directorios completos.
-	Sin Interrupciones: No es necesario detener el contenedor para copiar archivos.
## Docker Volume
- El comando docker volume se utiliza para gestionar volúmenes en Docker. Los volúmenes son una forma de persistir datos generados por y utilizados por contenedores. A diferencia de los contenedores y las imágenes, los volúmenes son completamente manejados por Docker y están diseñados específicamente para almacenar datos.
#### ¿Qué es un Volumen en Docker?
- Un volumen es un área de almacenamiento (se podría decir que es un espacio de memoria) externa al sistema de archivos de los contenedores. Los volúmenes son útiles porque:
  -	Persisten datos incluso después de que un contenedor se ha detenido o eliminado.
  -	Pueden compartirse entre múltiples contenedores.
  -	Son manejados y respaldados por Docker, facilitando su gestión.
#### Comandos Principales de docker volumen
#### Crear un Volumen
```powershell
docker volume create [nombre_del_volumen]
```
:::tip Observación
- Crea un nuevo volumen con el nombre especificado. Si no se proporciona un nombre, Docker generará uno automáticamente.
:::
- Ejemplo:
```powershell
docker volume create mi_volumen
```
#### Listar Volúmenes
```powershell
docker volume ls
```
:::tip Observación
- Lista todos los volúmenes creados en Docker.
:::
- Ejemplo:
```powershell
docker volume ls
```
#### Inspeccionar un Volumen
```powershell
docker volume inspect [nombre_del_volumen]
```
:::tip Observación
- Muestra información detallada sobre un volumen específico, como su ubicación en el host y los contenedores que lo utilizan.
:::
- Ejemplo:
```powershell
docker volume inspect mi_volumen
```
#### Eliminar un Volumen
```powershell
docker volume rm [nombre_del_volumen]
```
:::tip Observación
- Elimina un volumen específico. El volumen debe estar sin usar (no debe estar montado en ningún contenedor activo) para que pueda ser eliminado.
:::
- Ejemplo:
```powershell
docker volume rm mi_volumen
```
#### Eliminar Volúmenes Sin Uso
```powershell
docker volume prune
```
:::tip Observación
- Elimina todos los volúmenes que no están en uso por al menos un contenedor.
:::
- Ejemplo:
```powershell
docker volume prune
```

#### Beneficios de Usar Volúmenes
-	Persistencia de Datos: Los datos en volúmenes persisten incluso si el contenedor se elimina.
-	Compartir Datos: Los volúmenes pueden ser montados en múltiples contenedores simultáneamente, permitiendo compartir datos entre ellos.
-	Mejora del Rendimiento: Los volúmenes pueden proporcionar mejor rendimiento en comparación con el uso de bind mounts (montajes vinculados) debido a optimizaciones internas de Docker.
-	Gestión Sencilla: Docker gestiona los volúmenes, lo que simplifica la administración de los datos en comparación con manejar los archivos directamente en el sistema de archivos del host.

## Manejar la espera de servicios
- La espera de servicios se refiere a una técnica utilizada en entornos de desarrollo y despliegue de software para garantizar que un servicio esté completamente disponible antes de continuar con otro proceso(servicio) que depende de él. Esto es especialmente relevante en entornos como Docker, donde múltiples contenedores pueden estar ejecutándose y dependiendo unos de otros.
#### Principios Básicos
- Cuando se dockeriza una aplicación que depende de otros servicios (como bases de datos, servicios de cache, APIs, etc.), es crucial asegurarse de que estos servicios estén listos para aceptar conexiones antes de que la aplicación que depende de ellos comience a ejecutarse. La espera de servicios se encarga de manejar esta secuencia de inicialización.

#### Problemas Comunes sin Espera de Servicios
- Si no se implementa correctamente la espera de servicios, pueden surgir problemas como:
  -	Conexiones Fallidas: La aplicación puede intentar conectar con un servicio que aún no ha terminado de inicializarse, lo que resulta en errores de conexión.
  -	Inconsistencia de Datos: Si un servicio escribe datos necesarios para otro servicio antes de que este último esté listo para procesarlos, puede llevar a inconsistencias en los datos o fallos en la operación.
- Hay varios tipos de técnicas para manejar la espera de servicio: Scripts de espera como wait-for-it.sh y dockerize, depends_on (no garantiza que el servicio este completamente listo, solo altera el orden), polling y retries , pero la mayoría son scripts.

#### wait-for-it.sh 
- wait-for-it.sh es un script de shell popular utilizado para esperar a que un servicio esté disponible antes de continuar con otro proceso. Es especialmente útil en entornos como Docker, donde las aplicaciones pueden tener dependencias que deben estar completamente inicializadas y listas para aceptar conexiones antes de que la aplicación principal pueda funcionar correctamente.
- Características Principales de wait-for-it.sh:
  1.	Espera de Servicios: El propósito principal de wait-for-it.sh es esperar hasta que un servicio (especificado por un host y un puerto) esté listo para aceptar conexiones antes de proceder con el siguiente paso en un script o en la secuencia de comandos de inicio de una aplicación.
  2.	Implementación en Shell Script: Está implementado como un script de shell (wait-for-it.sh) que utiliza comandos estándar de Unix/Linux como nc (netcat) o telnet para verificar la disponibilidad del servicio.
  3.	Uso en Docker y Otros Contextos: Se utiliza comúnmente en entornos Docker para asegurar que los contenedores esperen hasta que todos sus servicios dependientes estén completamente inicializados antes de iniciar la aplicación principal. También puede ser útil en scripts de inicio de servicios o configuración de servidores.
  4.	Timeout Configurable: Permite configurar un tiempo máximo de espera (timeout), después del cual el script devuelve un error si el servicio no se vuelve disponible dentro del tiempo especificado.
- El script wait-for-it.sh fue creado originalmente por el usuario GitHub vishnubob, y es mantenido como un proyecto de código abierto en su repositorio en GitHub: [wait-for-it](https://github.com/vishnubob/wait-for-it).

##### Origen y Mantenimiento
-	Autor Original: El script fue creado por Jeff Bogitsh (vishnubob) y ha sido ampliamente utilizado y contribuido por la comunidad de desarrolladores.
-	Código Abierto: Como proyecto de código abierto, cualquier persona puede contribuir al desarrollo del script, realizar correcciones de errores, agregar funcionalidades nuevas o adaptarlo para diferentes necesidades de uso.
-	Licencia: El repositorio está bajo la licencia MIT, lo que significa que puedes usar, modificar y distribuir el script según los términos de esta licencia.

##### Características y Funcionalidades
-	Espera de Servicios: Proporciona una forma conveniente de esperar hasta que un servicio (especificado por un host y un puerto) esté disponible antes de continuar con otro proceso.
-	Implementación en Shell Script: Está escrito en shell script utilizando comandos estándar de Unix/Linux como nc (netcat) o telnet para verificar la disponibilidad del servicio.
-	Configurable: Permite configurar un tiempo máximo de espera (timeout), después del cual el script devuelve un error si el servicio no se vuelve disponible dentro del tiempo especificado.

##### Uso Comunitario
-	Contribuciones: A lo largo del tiempo, la comunidad de usuarios y desarrolladores ha contribuido con mejoras, correcciones y adaptaciones del script para diversos entornos y casos de uso específicos.
-	Adaptaciones y Uso Generalizado: Debido a su utilidad y simplicidad, wait-for-it.sh se ha convertido en una herramienta comúnmente utilizada en scripts de inicio de servicios, configuraciones de Docker, y en cualquier escenario donde sea necesario gestionar dependencias de servicio de manera eficiente.
##### Ejemplo de Uso
- Aquí hay un ejemplo típico de cómo se usaría wait-for-it.sh en un script de inicio de Docker Compose para esperar a que un servicio de base de datos (como MySQL) esté listo antes de iniciar una aplicación backend:
```yml
version: '3'
services:
  db:
    image: mysql:5.7
    ports:
      - "3306:3306"
    environment:
      MYSQL_ROOT_PASSWORD: rootpassword
      MYSQL_DATABASE: mydatabase

  backend:
    build: ./backend
    ports:
      - "3000:3000"
    depends_on:
      - db
    command: ["./wait-for-it.sh", "db:3306", "--", "npm", "start"]

```
:::tip Observación
-	El servicio backend depende del servicio db.
-	./wait-for-it.sh db:3306 -- npm start espera a que el servicio de base de datos (MySQL en el puerto 3306) esté listo antes de iniciar el comando npm start para ejecutar la aplicación backend.
:::

:::tip Script
- Es un archivo de texto que contiene una serie de instrucciones o comandos que pueden ser ejecutados por un intérprete o un entorno específico. Estos comandos se escriben en un lenguaje de scripting (como bash, Python, Perl, etc.) y están diseñados para realizar tareas específicas de manera automatizada.
- Características de un Script:
  -	Secuencia de Comandos: Un script consiste en una secuencia ordenada de comandos que se ejecutan en el orden especificado dentro del archivo.
  -	Lenguaje de Scripting: Puede estar escrito en diferentes lenguajes de scripting dependiendo de la tarea que se desee automatizar o del entorno en el que se va a ejecutar.
  -	Interpretación: Los scripts son interpretados por un programa o entorno de ejecución específico. Por ejemplo, los scripts de shell son interpretados por el intérprete de shell (como bash), los scripts de Python por el intérprete de Python, etc.
  -	Automatización: Su propósito principal es automatizar tareas repetitivas o complejas que de otro modo requerirían intervención manual.
  -	Versatilidad: Pueden abarcar desde tareas simples como la manipulación de archivos hasta operaciones complejas como la gestión de servidores o la configuración de redes.
  - Los scripts tienen la capacidad de aceptar argumentos que les permiten recibir datos o instrucciones específicas cuando son ejecutados. Estos argumentos son proporcionados en la línea de comandos al invocar el script, y el script puede acceder a ellos para realizar acciones diferentes según la información recibida.

:::

#### Dockerize
- Se debe instalar a través de su [repositorio de Github](https://github.com/jwilder/dockerize).
- Dockerize es una herramienta utilizada para simplificar y automatizar el proceso de despliegue y la configuración de aplicaciones dentro de contenedores Docker. Ayuda a manejar la espera de servicios, la sustitución de plantillas, y otras tareas de configuración que son comunes en entornos contenerizados.
##### Funcionalidades Principales de Dockerize
-	Esperar a Servicios: Dockerize puede esperar a que uno o más servicios estén disponibles antes de iniciar una aplicación. Esto es útil cuando tu aplicación depende de otros servicios como bases de datos o APIs que necesitan estar en funcionamiento primero.
-	Sustitución de Variables en Plantillas: Dockerize puede procesar archivos de plantillas y sustituir variables de entorno en esos archivos, lo que facilita la configuración dinámica basada en el entorno.
-	Integración Sencilla: Dockerize se puede integrar fácilmente en el proceso de arranque de un contenedor Docker mediante comandos en un Dockerfile o un script de inicio.
##### Esperar a que un Servicio esté Disponible
- Dockerize puede esperar a que un servicio (como una base de datos) esté disponible antes de ejecutar el comando principal de tu aplicación.
- Ejemplo: espera a que un servicio MySQL esté disponible en db:3306 antes de iniciar una aplicación Node.js:
```powershell
dockerize -wait tcp://db:3306 -timeout 60s npm start
```
:::tip Observación
-	-wait tcp://db:3306: Espera a que el servicio MySQL esté disponible en db:3306.
-	-timeout 60s: Tiempo máximo de espera de 60 segundos.
-	npm start: Comando a ejecutar una vez que el servicio esté disponible.
:::

##### Sustitución de Variables en Plantillas
- Dockerize también puede sustituir variables de entorno con un archivo de plantillas. Esto es útil para configurar aplicaciones dinámicamente en función del entorno.
- Archivo de plantilla config.tmpl:
```json
{
  "database": {
    "host": "{{.DB_HOST}}",
    "port": {{.DB_PORT}}
  }
}

```
- Comando para procesar la plantilla:
```powershell
dockerize -template config.tmpl:config.json
```

:::tip Observación
- Si tienes las variables de entorno DB_HOST y DB_PORT establecidas en config.tmpl, Dockerize las sustituirá y usara en config.json.
:::


##### Integración en Docker
- Dockerize se puede integrar en el proceso de arranque de un contenedor Docker mediante un Dockerfile o un script de inicio.
- Ejemplo de Dockerfile:
```yml
FROM node:14

# Copiar los archivos de la aplicación
WORKDIR /usr/src/app
COPY . .

# Instalar dependencias
RUN npm install

# Instalar Dockerize
RUN wget https://github.com/jwilder/dockerize/releases/download/v0.6.1/dockerize-linux-amd64-v0.6.1.tar.gz && \
    tar -C /usr/local/bin -xzvf dockerize-linux-amd64-v0.6.1.tar.gz

# Exponer el puerto
EXPOSE 3000

# Comando de inicio que espera a MySQL y luego inicia la aplicación
CMD ["dockerize", "-wait", "tcp://db:3306", "-timeout", "60s", "npm", "start"]

```
:::tip Observación
-	Se descarga e instala Dockerize.
-	Se utiliza Dockerize en el comando de inicio (CMD) para esperar a que MySQL esté disponible antes de ejecutar npm start.
:::

##### Beneficios de Dockerize
-	Sincronización de Servicios: Asegura que los servicios dependientes estén disponibles antes de iniciar la aplicación principal.
-	Configuración Dinámica: Facilita la configuración dinámica y el uso de variables de entorno.
-	Simplificación del Proceso de Arranque: Simplifica el proceso de arranque y despliegue de aplicaciones en entornos contenerizados.


#### wait-for
- El script wait-for es una herramienta ligera y sencilla utilizada para esperar a que un servicio específico esté disponible antes de continuar con otro proceso. Es similar a wait-for-it.sh y dockerize, pero está diseñado para ser más simple y fácil de usar en escenarios donde necesitas esperar a que un servicio (como una base de datos o una API) esté listo.
##### Características Principales de wait-for
-	Simplicidad: Está diseñado para ser fácil de usar con una sintaxis mínima.
-	Ligero: Es un script pequeño que no requiere muchas dependencias.
-	Versatilidad: Puede utilizarse en una variedad de entornos y con diferentes servicios.
##### Cómo Implementar wait-for
- Puedes crear el script wait-for manualmente. Aquí te dejo un ejemplo de cómo se puede escribir este script en Bash:
##### 1-	Crear el archivo wait-for:
```powershell
touch wait-for
chmod +x wait-for
```
##### 2-	Editar el archivo wait-for con el siguiente contenido:
```powershell
#!/bin/bash

TIMEOUT=15
QUIET=0

usage()
{
    echo "Usage: wait-for host:port [-t timeout] [-q]"
    exit 1
}

wait_for()
{
    for i in `seq $TIMEOUT` ; do
        nc -z $HOST $PORT > /dev/null 2>&1
        result=$?
        if [ $result -eq 0 ] ; then
            if [ $QUIET -ne 1 ] ; then
                echo "$HOST:$PORT is available after $i seconds"
            fi
            return 0
        fi
        sleep 1
    done
    echo "Timeout: $HOST:$PORT is not available after $TIMEOUT seconds"
    return 1
}

while getopts "t:q" opt; do
    case $opt in
        t) TIMEOUT=$OPTARG;;
        q) QUIET=1;;
        *) usage;;
    esac
done

shift $((OPTIND -1))

if [ $# -ne 1 ]; then
    usage
fi

HOSTPORT=($1)
IFS=: read HOST PORT <<< "${HOSTPORT[0]}"

if [ "$HOST" = "" ] || [ "$PORT" = "" ]; then
    usage
fi

wait_for

```
:::tip Observación
- Para utilizar el script wait-for, necesitas proporcionar la dirección del servicio (host y puerto) y opcionalmente un tiempo de espera y una opción de modo silencioso.

:::

##### 3-	Esperar a que un servicio esté disponible:
```powershell
./wait-for localhost:3306 -t 30
```
:::tip Observación
-  localhost:3306 es la dirección del servicio que estamos esperando (por ejemplo, una base de datos MySQL).
-  -t 30 establece un tiempo de espera de 30 segundos. Si el servicio no está disponible después de 30 segundos, el script saldrá con un error.
:::

##### Ejecutar un comando después de que el servicio esté disponible:
```powershell
./wait-for localhost:3306 -t 30 -- echo "MySQL está listo"
```
:::tip Observación
- En este caso, una vez que el servicio en localhost:3306 esté disponible, el script ejecutará echo "MySQL está listo".
:::

##### Integración en Docker
- Puedes usar wait-for en un Dockerfile o un script de inicio para asegurarte de que los servicios estén disponibles antes de iniciar tu aplicación.
- Ejemplo de Dockerfile:
```yml
FROM node:14

WORKDIR /usr/src/app
COPY . .

RUN npm install

# Copiar el script wait-for al contenedor
COPY wait-for /usr/local/bin/wait-for
RUN chmod +x /usr/local/bin/wait-for

EXPOSE 3000

# Comando de inicio que espera a MySQL y luego inicia la aplicación
CMD ["wait-for", "db:3306", "-t", "60", "--", "npm", "start"]

```
:::tip Observación
-	El script wait-for se copia al contenedor y se hace ejecutable.
-	El comando de inicio (CMD) utiliza wait-for para esperar a que el servicio MySQL esté disponible antes de ejecutar npm start.
:::

##### Script wait-for
- El script wait-for no es un estándar oficial ni un código que todos ya conocen de manera uniforme. En cambio, es un script que puedes encontrar en varias formas y versiones en diferentes repositorios de GitHub y en blogs técnicos, creado y compartido por desarrolladores que necesitan una herramienta simple para esperar a que los servicios estén listos.
- wait-for-it.sh es una implementación específica del concepto de "wait-for". Es un script diseñado para esperar a que un servicio (identificado por una combinación de host y puerto) esté disponible antes de proceder con la ejecución de otro comando o script.

##### Beneficios de wait-for
-	Control de Dependencias: Permite que las aplicaciones gestionen dependencias de manera eficiente, asegurando que los servicios necesarios estén listos antes de iniciar.
-	Flexibilidad: Funciona en una variedad de entornos y puede integrarse fácilmente en scripts de inicio y Dockerfiles.
-	Simplicidad y Ligereza: Fácil de entender y utilizar, con una sintaxis mínima y sin necesidad de muchas dependencias.
