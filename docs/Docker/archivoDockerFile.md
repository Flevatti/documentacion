---
sidebar_position: 2
---
# DockerFile
- DockerFile es un archivo que contiene las instrucciones  de como generar una imagen.
- Básicamente sirve para crear una imagen de tu aplicación.
- Es un archivo con "comandos" que especifican como crear una imagen.


## Shell and Exec form
- Las instrucciones RUN, CMD y ENTRYPOINT tienen dos formas posibles para especificar un comando: Shell and Exec form.


#### Exec Form
- Utiliza una lista de cadenas JSON y no invoca un shell, evitando problemas de manejo de variables y manejo de señales.
- Cuando decimos que un comando se ejecuta "sin manejar un shell" en el contexto de Docker, nos referimos a que el comando se ejecuta directamente como un proceso hijo del proceso Docker, sin pasar por un intérprete de comandos como /bin/sh (en sistemas Unix) o cmd.exe (en Windows).
- Los procesos iniciados directamente sin un shell pueden recibir y manejar señales del sistema operativo (como SIGTERM, SIGINT, etc.) de manera más directa y precisa. Esto es crucial para una correcta terminación de aplicaciones.
- Sin un shell, se evitan problemas relacionados con variables del shell, la ejecución de comandos adicionales no deseados y posibles inyecciones de comandos.
- De esta manera evitamos usar las variables de entorno que están definidas en el SO del localhost.
- Sintaxis:
```powershell
INSTRUCCION [ "comando", "argumento1", "argumento2", ..., "argumentoN"]
```
:::tip Observación
- INSTRUCCION puede ser RUN, CMD, ENTRYPOINT, etc.
- Comando:
    -	El primer elemento de la lista es el comando que deseas ejecutar.
    -	Ejemplo: "echo"
-  Argumentos:
    -	Los elementos siguientes son los argumentos que se pasan al comando.
    -	Ejemplo: "Hola, mundo"
- Entonces cada elemento del array en el exec form representa una palabra o un componente del comando que se va a ejecutar. 
:::

- Ejemplos con CMD (se pueden usar con otros comandos claramente):

```javascript
FROM ubuntu:20.04
CMD ["echo", "Hola, mundo"]

```
:::tip Observación
- Comando ejecutado: echo "Hola, mundo"
:::


```javascript
FROM ubuntu:20.04

# Usar CMD en exec form con varios argumentos
CMD ["ls", "-l", "/var/log"]
Comando ejecutado:  ls -l /var/log
FROM ubuntu:20.04

# Instalar curl
RUN apt-get update && apt-get install -y curl

# Usar CMD en exec form
CMD ["curl", "-L", "-o", "output.html", "https://www.example.com"]
Comando ejecutado: curl -L -o output.html https://www.example.com
FROM ubuntu:20.04

# Instalar curl
RUN apt-get update && apt-get install -y curl

# Definir una variable de entorno
ENV MY_URL="https://www.example.com"

# Usar ENTRYPOINT en exec form con referencia a una variable de entorno
ENTRYPOINT ["sh", "-c", "curl -L -o output.html $MY_URL"]


```
:::tip Observación
- Comando ejecutado: sh -c "curl -L -o output.html $MY_URL"
:::


- Un uso más avanzado del exec form combina ENTRYPOINT y CMD para proporcionar flexibilidad:
```javascript
FROM ubuntu:20.04

# Definir ENTRYPOINT en exec form
ENTRYPOINT ["/bin/sh", "-c"]

# Definir CMD en exec form para proporcionar argumentos predeterminados
CMD ["echo Hola, mundo"]


```
:::tip Observación
- Comando ejecutado: /bin/sh -c "echo Hola, mundo"
-  ENTRYPOINT especifica que se debe utilizar /bin/sh -c para ejecutar el comando. Esto significa que cualquier comando especificado en CMD o pasado en docker run se ejecutará a través de un shell.
-  CMD proporciona el comando y argumentos predeterminados (echo Hola, mundo).
:::

#### Shell form
- El "shell form" pasa el comando a un shell (/bin/sh -c en sistemas Unix), lo que puede llevar a diferencias en el comportamiento del comando, especialmente en cómo se manejan las variables de entorno y las señales.
- Para comandos simples que no requieren muchos argumentos, el shell form puede ser más conciso y fácil de escribir.
- Puedes aprovechar las características y funcionalidades del shell, como variables, la redirección de entrada/salida, el encadenamiento de comandos con && y ||, y los caracteres comodín.
- Sintaxis:
```powershell
INSTRUCTION command param1 param2
```
:::tip Observación
-  INSTRUCCION puede ser RUN, CMD, ENTRYPOINT, etc.
-  comando es el comando que deseas ejecutar.
-  argumento1, argumento2, ... son los argumentos que pasas al comando.
:::
- En la shell form, los comandos y sus argumentos se escriben como una cadena de texto, sin usar el formato de array JSON utilizado en el exec form.
- Ejemplos:

```javascript
FROM ubuntu:20.04

# Shell form usando RUN para instalar paquetes
RUN apt-get update && apt-get install -y nginx


```
:::tip Observación
- apt-get update && apt-get install -y nginx son los comandos que se ejecutan en la Shell (terminal de comando) para actualizar los repositorios y luego instalar el servidor web nginx.

:::

```javascript
FROM python:3.9

# Copiar el script al contenedor
COPY mi_script.py /usr/local/bin/mi_script.py

# Usar CMD en shell form para ejecutar el script
CMD python /usr/local/bin/mi_script.py

```
:::tip Observación
- Comando ejecutado: python /usr/local/bin/mi_script.py

:::

```javascript
FROM ubuntu:20.04

# Copiar el script de entrada al contenedor
COPY entrypoint.sh /entrypoint.sh

# Dar permisos de ejecución al script de entrada
RUN chmod +x /entrypoint.sh

# Usar ENTRYPOINT y CMD en shell form para ejecutar el script de entrada
ENTRYPOINT /entrypoint.sh
CMD ["World"]


```
:::tip Observación
- Comando ejecutado: /entrypoint.sh World

:::



## Comando ADD
- El comando ADD en un Dockerfile se utiliza para copiar archivos o directorios desde la ruta actual del proyecto (donde se encuentra el Dockerfile) hacia la imagen de Docker que se está creando.
- A diferencia del comando COPY, ADD tiene algunas características adicionales, como la capacidad de extraer automáticamente archivos tar y de obtener archivos remotos a través de URL.
- Sintaxis:

```js
ADD <src> <dest>
```
:::tip Observación
- &lt;src> es la ruta del archivo o directorio que se quiere copiar.
- &lt;dest> es la ruta dentro de la imagen de Docker donde se quiere copiar el archivo o directorio.
:::

#### Consejos / Advertencias
- El comando ADD puede sobreescribir archivos existentes en la imagen de Docker.
- Si se utiliza el comando ADD con un directorio como src, todos los archivos y subdirectorios dentro de ese directorio se copiarán recursivamente.
- El comando ADD también puede ser utilizado para copiar archivos desde una URL remota, utilizando la sintaxis ADD &lt;url> &lt;dest>.
- Es recomendable utilizar el comando COPY en lugar de ADD cuando se trata de copiar archivos locales, ya que COPY es más eficiente y seguro.
- Preferir COPY sobre ADD: Es una buena práctica utilizar COPY en lugar de ADD cuando no se necesita la funcionalidad adicional de ADD. COPY es más simple y explícito en cuanto a lo que está haciendo.
- Rutas relativas y absolutas: Las rutas src pueden ser relativas al contexto de construcción (normalmente el directorio donde se encuentra el Dockerfile) o absolutas en el sistema de archivos del host. La ruta dest siempre debe ser una ruta absoluta en el sistema de archivos del contenedor.
- Permisos: Asegúrese de que los permisos de los archivos y directorios copiados sean correctos. Puede que necesite ajustar los permisos usando RUN chmod después de usar ADD.

#### Ejemplos
- Copiar archivos y directorios locales:
```js
ADD localfile.txt /path/in/container/
ADD localdir /path/in/container/

```
:::tip Observación
- Esto copiará el archivo localfile.txt y el directorio localdir al contenedor en las rutas especificadas.
:::


- Extraer archivos tar:
```js
ADD archive.tar.gz /path/in/container/
```
:::tip Observación
- Si archive.tar.gz es un archivo tar comprimido, ADD lo descomprimirá automáticamente en /path/in/container/.
:::

- 
Descargar archivos desde URL:
```js
ADD http://example.com/file.tar.gz /path/in/container/
```

:::tip Observación
- Esto descargará file.tar.gz desde la URL especificada y lo colocará en /path/in/container/.
:::

:::tip
[Más información](https://docs.docker.com/reference/dockerfile/#add)
:::

## Comando ARG
- El comando ARG se utiliza para definir una variable de entorno en un Dockerfile. Las variables definidas con ARG se pueden utilizar en el Dockerfile para personalizar la construcción de la imagen.
- Estas variables pueden ser utilizadas durante el proceso de construcción de la imagen Docker, pero no estarán disponibles en tiempo de ejecución del contenedor.
- La sintaxis básica del comando ARG es la siguiente:

```js
ARG <nombre_variable>[=<valor_predeterminado>]
```
:::tip Observación
- &lt;nombre_variable> es el nombre de la variable que se desea definir.
- &lt;valor_predeterminado> es el valor predeterminado que se asignará a la variable si no se proporciona un valor externo.
:::

#### Ejemplos
- Definir una variable sin valor predeterminado:
```js
ARG MY_VAR
```
:::tip Observación
- En este caso, la variable MY_VAR se define, pero no se asigna un valor predeterminado. Debe proporcionarse un valor externo cuando se construye la imagen.

:::
- Definir una variable con un valor predeterminado:
```js
ARG MY_VAR=hello
```
:::tip Observación
- En este caso, la variable MY_VAR se define con un valor predeterminado de hello. Si no se proporciona un valor externo, se utilizará el valor predeterminado.
:::

#### Usar variables
- Las variables definidas con ARG pueden ser referenciadas en las siguientes instrucciones del Dockerfile usando la sintaxis:
```js
${MI_VARIABLE} o $MI_VARIABLE
```
- Ejemplo:

```js
ARG MY_VAR
RUN echo $MY_VAR > myfile.txt
```

:::tip Observación
- En este caso, se utiliza la variable MY_VAR en el comando RUN para crear un archivo con el contenido de la variable.
:::

- Otro ejemplo:

```js
# Usar una imagen base
FROM ubuntu:20.04

# Definir una variable de construcción
ARG MI_VARIABLE

# Mostrar el valor de la variable (útil para debugging)
RUN echo "El valor de MI_VARIABLE es: ${MI_VARIABLE}"

# Utilizar la variable para instalar un paquete o realizar alguna configuración
RUN apt-get update && \
    apt-get install -y ${MI_VARIABLE}

# Comando para ejecutar el contenedor
CMD ["bash"]


```
:::tip
- Las variables definidas con ARG solo están disponibles durante la construcción de la imagen y no se conservan en la imagen final. Si se desea conservar una variable en la imagen final, se debe utilizar el comando ENV en su lugar.

:::




#### Construcción de la imagen
- Para construir esta imagen Docker pasando un valor para MI_VARIABLE, se usa el flag --build-arg:
```powershell
docker build --build-arg MI_VARIABLE=curl -t mi_imagen .
```
:::tip Observación
- En este ejemplo, el valor de MI_VARIABLE se establece en curl, por lo que el comando RUN apt-get install -y ${MI_VARIABLE} se traduce a RUN apt-get install -y curl.
:::

#### Combinación de ARG y ENV
- Es común combinar ARG y ENV para que las variables definidas en tiempo de construcción también estén disponibles en tiempo de ejecución:
```js
Combinación de ARG y ENV
# Usar una imagen base
FROM ubuntu:20.04

# Definir una variable de construcción con un valor por defecto
ARG MI_VARIABLE=default_value

# Asignar la variable de construcción a una variable de entorno
ENV MI_VARIABLE=${MI_VARIABLE}

# Utilizar la variable en el Dockerfile
RUN echo "El valor de MI_VARIABLE es: ${MI_VARIABLE}"

# Comando para ejecutar el contenedor
CMD ["bash"]



```

:::tip Observación
- De esta forma, la variable MI_VARIABLE estará disponible tanto en tiempo de construcción como en tiempo de ejecución del contenedor.
:::


#### Ventajas

- Permite personalizar la construcción de la imagen según las necesidades específicas.
- Facilita la reutilización de Dockerfiles para diferentes entornos o configuraciones.

#### Consejos
-	Utiliza nombres de variables descriptivos y coherentes para evitar confusiones.
-	Documenta las variables definidas con ARG en el Dockerfile para que otros desarrolladores puedan entender cómo se utiliza la variable.
-	Utiliza valores predeterminados razonables para evitar errores de construcción.


:::tip
[Más información](https://docs.docker.com/reference/dockerfile/#arg)
:::

## Comando FROM
- Especifica la imagen base. 
- Esta imagen base es el punto de partida.
- Cumple con la función de establecer la imagen sobre la que los pasos e imágenes siguientes se ejecutan. Proporciona el sistema operativo y otras herramientas como el entorno de ejecución que va a necesitar la aplicación para ejecutarse.
- La elección de la imagen base es crucial porque define el entorno de ejecución y las herramientas disponibles para tu aplicación.


#### Resumen
- El comando FROM en un Dockerfile es el primer comando que se utiliza y define la imagen base a partir de la cual se construirá la nueva imagen Docker. Cada Dockerfile debe comenzar con un comando FROM, y puedes tener múltiples comandos FROM en un Dockerfile si deseas utilizar Multistage Builds

:::tip Multistage Builds
- Multistage Builds en Docker es una técnica avanzada que permite definir múltiples etapas de construcción en un solo Dockerfile. Esta técnica es útil para crear imágenes pequeñas y copiar solo los artefactos necesarios de una etapa a otra. Multistage Builds se usa para lenguajes compilados donde el proceso de compilación requiere muchas dependencias, pero el binario final es pequeño y autónomo.
- Ventajas de Multistage Builds:
    1.	Imágenes Más Pequeñas: Al copiar solo los archivos necesarios para la etapa final, se eliminan las dependencias y herramientas de construcción innecesarias.
    2.	Mayor Seguridad: Al excluir herramientas y dependencias de construcción, se reduce la superficie de ataque de la imagen final.
    3.	Simplicidad en el Dockerfile: Todo el proceso de construcción se define en un solo archivo, lo que facilita el mantenimiento y la comprensión del flujo de construcción.
:::

- Sintaxis:

```js
FROM <imagen>[:<etiqueta>|@<digest>]
```
:::tip Observación
- Donde:
    -	&lt;imagen> es el nombre de la imagen base.
    -	&lt;etiqueta> es opcional y especifica una versión o variante específica de la imagen. Si no se proporciona, se usará latest.
    -	&lt;digest> es opcional y especifica una imagen exacta basada en su hash de contenido.


:::
#### Ejemplos
- Usar una Imagen Base:
```js
FROM ubuntu:20.04
```
:::tip Observación
- Este ejemplo utiliza la imagen base ubuntu con la etiqueta 20.04.
:::
- Usar la Imagen Base más Reciente:
```js
FROM nginx
```
:::tip Observación
- En este ejemplo, se usa la última versión de la imagen nginx.
:::
- Usar una Imagen por Digest:
```js
FROM ubuntu@sha256:5d7b4db94e05...
```
:::tip Observación
- Este ejemplo usa una imagen base específica de Ubuntu identificada por su digest SHA-256.
:::

#### Múltiples FROM para Multistage Builds
- Los multistage builds permiten construir imágenes en etapas, lo que es útil para reducir el tamaño de las imágenes finales al copiar solo los artefactos necesarios de una etapa a otra.
- Ejemplo:

```js
# Primera etapa: construcción
FROM golang:1.16 AS builder
WORKDIR /app
COPY . .
RUN go build -o myapp .

# Segunda etapa: imagen final
FROM alpine:latest
WORKDIR /app
COPY --from=builder /app/myapp .
CMD ["./myapp"]


```
:::tip Observación
- En este ejemplo:
    1.	La primera etapa (builder) usa la imagen golang:1.16 para compilar una aplicación Go.
    2.	La segunda etapa usa la imagen alpine:latest y copia el binario construido desde la primera etapa (builder) a la imagen final.
- En un Dockerfile que utiliza Multistage Builds, solo la última etapa define la imagen resultante que se utilizará para ejecutar los contenedores. Las etapas anteriores se utilizan únicamente para realizar operaciones de construcción, como compilar aplicaciones, preparar recursos, etc. Esto es una de las características clave y ventajas de Multistage Builds en Docker: optimizar el tamaño y la eficiencia de las imágenes finales al separar las fases de construcción de las capas de la imagen final. 
- Es un concepto avanzado, pero si te intereso te invito a investigarlo en profundidad.
:::

:::tip
[Más información](https://docs.docker.com/reference/dockerfile/#from)
:::
## Comando WORKDIR 
- Se utiliza para establecer el directorio de trabajo dentro del contenedor en el que se ejecutarán los comandos posteriores. 
- Es similar a ejecutar el comando cd en la terminal para cambiar de directorio.
- Este comando acepta una ruta como argumento y define el directorio de trabajo para cualquier instrucción que se ejecute después en el Dockerfile. 
- Si el directorio especificado en el comando WORKDIR no existe en la imagen base o en cualquier punto anterior del Dockerfile, Docker lo creará automáticamente al ejecutar un comando que necesite acceder a ese directorio. 
- Si no especificas un comando WORKDIR en tu Dockerfile, Docker utilizará un directorio por defecto como directorio de trabajo. Por lo general, este directorio por defecto suele ser el directorio raíz del contenedor, es decir, "/".
#### Resumen
- El comando WORKDIR en un Dockerfile establece el directorio de trabajo para cualquier instrucción RUN, CMD, ENTRYPOINT, COPY, y ADD que siga en el Dockerfile. Si el directorio especificado no existe, será creado.
- El comando WORKDIR en un Dockerfile establece el directorio de trabajo para cualquier instrucción RUN, CMD, ENTRYPOINT, COPY, y ADD que siga en el Dockerfile. Esto significa que cualquier comando ejecutado después del comando WORKDIR se ejecutará en el directorio especificado.
- El comando WORKDIR es como usar cd en la terminal: cambia el directorio de trabajo para las siguientes instrucciones.
- Sintaxis:
```js
WORKDIR /ruta/al/directorio
```
:::tip Observación
- /ruta/al/directorio es la ruta donde deseas establecer el directorio de trabajo dentro del contenedor.
:::


#### Ejemplo
```js
# Utilizar una imagen base de Node.js
FROM node:14

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar el archivo package.json al directorio de trabajo
COPY package.json .

# Instalar las dependencias
RUN npm install

# Copiar todo el código fuente al directorio de trabajo
COPY . .

# Exponer el puerto de la aplicación
EXPOSE 3000

# Definir el comando por defecto para ejecutar la aplicación
CMD ["node", "app.js"]
```
:::tip Explicación
1.	FROM node:14: Utiliza la imagen base de Node.js versión 14.
2.	WORKDIR /app: Establece /app como el directorio de trabajo. Todas las siguientes instrucciones se ejecutarán en este directorio.
3.	COPY package.json .: Copia el archivo package.json desde el contexto de construcción al directorio /app en el contenedor.
4.	RUN npm install: Ejecuta npm install en el directorio /app, instalando todas las dependencias listadas en package.json.
5.	COPY . .: Copia todo el contenido del contexto de construcción (directorio donde se ejecuta el comando docker build) al directorio /app en el contenedor.
6.	EXPOSE 3000: Expone el puerto 3000 para que pueda ser accesible externamente cuando se ejecute el contenedor.
7.	CMD ["node", "app.js"]: Define el comando por defecto que se ejecutará cuando se inicie el contenedor. En este caso, se ejecuta node app.js en el directorio /app.
:::

#### Uso de Múltiples WORKDIR
- Puedes utilizar múltiples WORKDIR en un Dockerfile. Cada uso de WORKDIR cambiará el directorio de trabajo actual a la ruta especificada.
- Ejemplo:
```js
# Utilizar una imagen base de Node.js
FROM node:14

# Establecer el primer directorio de trabajo
WORKDIR /app

# Copiar el archivo package.json al primer directorio de trabajo
COPY package.json .

# Establecer el segundo directorio de trabajo
WORKDIR /app/src

# Copiar el código fuente al segundo directorio de trabajo
COPY . .

# Volver al primer directorio de trabajo para ejecutar el comando de instalación
WORKDIR /app

# Instalar las dependencias
RUN npm install

# Exponer el puerto de la aplicación
EXPOSE 3000

# Definir el comando por defecto para ejecutar la aplicación
CMD ["node", "src/app.js"]

```
:::tip Observación
- En este ejemplo, cambiamos el directorio de trabajo varias veces para mostrar cómo puedes organizar diferentes partes del proceso de construcción.
:::
#### Ventajas de Usar WORKDIR
-	Organización: Mantiene el Dockerfile limpio y organizado al no tener que especificar rutas absolutas en cada instrucción.
-	Mantenimiento: Facilita el mantenimiento y las actualizaciones del Dockerfile.
-	Reducción de Errores: Ayuda a evitar errores al asegurarse de que todas las instrucciones posteriores se ejecuten en el directorio correcto.

:::tip
[Más información](https://docs.docker.com/reference/dockerfile/#workdir)
:::

## Comando COPY
- Sirve para copiar archivos a la carpeta que especificamos con WORKDIR, este directorio lo maneja docker. 
- La sintaxis para mover un archivo: 
```powershell
COPY nombreDelArchivoACopiar UbicacionAPegar
```
:::tip Observación
- Si UbicacionAPegar es un punto “.” significa que es en la carpeta que se especifico en WORKDIR o en el directorio raiz del contenedor.
:::

#### Resumen
- El comando COPY en un Dockerfile se utiliza para copiar archivos y directorios desde el sistema de archivos del host (la máquina donde se está construyendo la imagen) al sistema de archivos de la imagen Docker que se está construyendo. Este comando es fundamental para incluir contenido necesario en la imagen, como el código fuente de la aplicación, archivos de configuración, bibliotecas, etc.
- La sintaxis básica del comando COPY es:

```js
COPY <origen>... <destino>
```
:::tip Observación
- Donde:
    -	&lt;origen> puede ser uno o más archivos o directorios en el sistema de archivos del host.
    -	&lt;destino> es la ubicación en el sistema de archivos de la imagen donde se copiarán los archivos o directorios.
:::

#### Ejemplo
- Para copiar un archivo específico desde el host a la imagen:

```js
COPY archivo.txt /app/archivo.txt
```
:::tip Observación
- Este comando copiará todo el contenido de  archivo.txt del host al directorio /app/directorio en la imagen.
:::

#### Copiar Múltiples Archivos
- Puedes copiar múltiples archivos de una sola vez:
```js
COPY archivo1.txt archivo2.txt /app/
```
:::tip Observación
- Este comando copiará archivo1.txt y archivo2.txt del host al directorio /app en la imagen.
:::

#### Uso de Wildcards 
- El comando COPY también admite el uso de wildcards (comodines) para especificar múltiples archivos o patrones de archivos:
```js
COPY *.txt /app/
```
:::tip Observación
- Este comando copiará todos los archivos con la extensión .txt del directorio actual del host al directorio /app en la imagen.
:::
#### Cambiar el nombre del archivo
- Es posible cambiar el nombre del archivo al "pegarlo" utilizando el comando COPY.
- Puedes indicar el nuevo nombre del archivo al especificar la ruta de destino. Por ejemplo:
```js
COPY app.py /app/renamed_app.py
```
:::tip Observación
- En este caso, el archivo app.py se copiará desde el contexto de construcción hacia el directorio /app en el contenedor, y se renombrará como renamed_app.py.
- Ten en cuenta que, si no especificas un nombre de archivo de destino, el archivo se copiará con el mismo nombre que tenía en el contexto de construcción.s
:::


#### Consideraciones
- Permisos: Los permisos de los archivos y directorios copiados son preservados. Asegúrate de que los archivos tengan los permisos adecuados.
- Contexto de Construcción: El origen debe estar dentro del contexto de construcción de Docker, que es el directorio donde se ejecuta el comando docker build. No puedes copiar archivos desde fuera del contexto de construcción.
- Eficiencia: Minimiza el uso de COPY para reducir el tamaño de la imagen y mejorar la eficiencia de la caché. Solo copia los archivos necesarios para la construcción y ejecución de tu aplicación.
- El comando COPY es esencial para incluir todos los archivos necesarios en tu imagen Docker de manera controlada y reproducible.

#### ADD VS COPY
- Tanto el comando COPY como el comando ADD en un Dockerfile se utilizan para copiar archivos y directorios desde el sistema de archivos del host al sistema de archivos de la imagen Docker. Sin embargo, hay diferencias importantes entre ellos en términos de funcionalidad y uso recomendado.
- El comando COPY simplemente copia archivos y directorios desde el host al contenedor sin ninguna funcionalidad adicional. Es directo y predecible, y solo realiza una copia de archivos.
- El comando ADD tiene funcionalidades adicionales además de copiar archivos. Puede:
    1.	Copiar Archivos y Directorios: Similar a COPY.
    2.	Extraer Archivos Comprimidos: Si el origen es un archivo tar (por ejemplo, .tar, .tar.gz, .tgz, .bzip2, etc.), Docker lo extraerá automáticamente en el destino.
    3.	Descargar Archivos desde URL: ADD puede descargar archivos desde URLs y copiarlos al contenedor.
- Por lo tanto:
    -	Usa COPY para copias simples de archivos y directorios.
    -	Usa ADD solo cuando necesites sus funcionalidades adicionales, como la extracción de archivos comprimidos o la descarga de archivos desde URLs.

#### Diferencias Clave y Buenas Prácticas
- Funcionalidad: COPY solo copia archivos y directorios, mientras que ADD puede extraer archivos comprimidos y descargar archivos desde URLs.
- Previsibilidad: COPY es más predecible y explícito. Solo copia archivos y no realiza ninguna acción adicional.
- Recomendación: Es preferible usar COPY cuando solo necesitas copiar archivos y directorios, ya que es más explícito sobre su propósito. Usa ADD solo cuando necesites sus funcionalidades adicionales (como la extracción automática de archivos tar o la descarga de archivos desde URLs).

:::tip
[Más información](https://docs.docker.com/reference/dockerfile/#copy)
:::

## Comando RUN
- Especifica los comandos que se van ejecutar durante el proceso de construcción de la imagen. 
- Cada instrucción RUN en el Dockerfile ejecuta comandos dentro de un contenedor temporal, y los cambios resultantes se registran en una nueva capa que se agrega a la imagen. Estas capas son inmutables, lo que significa que no pueden modificarse después de ser creadas. 
- Cuando se crea una nueva capa en una instrucción RUN, Docker solo incluye en la imagen final los cambios realizados en esa capa específica. Esto significa que si, por ejemplo, instalas un paquete en una capa con RUN apt-get install, solo los archivos relacionados con la instalación de ese paquete se incluirán en esa capa de la imagen. Los archivos y directorios que no se ven afectados por esa instrucción RUN no se incluirán en esa capa y permanecerán inalterados.
- Supongamos que tienes el siguiente Dockerfile:

```js
FROM ubuntu:20.04
RUN mkdir /app
RUN echo "Hello, World!" > /app/hello.txt
```
- En este ejemplo, estamos creando un directorio llamado /app y luego escribiendo "Hello, World!" en un archivo llamado hello.txt dentro de ese directorio.
- Cuando construyes la imagen Docker utilizando este Dockerfile, se crearán dos capas: una para la creación del directorio /app y otra para la creación del archivo hello.txt. 


#### ¿Por qué pasa esto?
- Cuando construyes una imagen Docker, cada instrucción en el Dockerfile crea una capa de esa imagen. Cada capa representa un estado del sistema de archivos del contenedor en un momento particular durante el proceso de construcción de la imagen. Cada capa es como una instantánea del sistema de archivos en un punto dado.
- Estas capas son como capas de una torta, apiladas unas sobre otras.
- Sin embargo, cuando ejecutas un contenedor a partir de esa imagen, Docker agrega una capa adicional que permite que el contenedor realice cambios en el sistema de archivos. Esta capa adicional, llamada "capa de escritura" o "capa de contenedor", es donde se realizan los cambios mientras el contenedor está en ejecución.

#### Resumen
- El comando RUN es una instrucción fundamental en Docker que te permite ejecutar comandos durante el proceso de construcción de tu imagen Docker. Cuando creas una nueva imagen Docker a partir de un Dockerfile, cada instrucción RUN agrega una nueva capa a la imagen. 
- El propósito principal de RUN es ejecutar comandos durante la construcción de la imagen Docker. Esto te permite instalar paquetes, configurar el entorno, y realizar otras acciones que necesites para preparar tu imagen antes de que se convierta en un contenedor en ejecución.
- La sintaxis básica del comando RUN en un Dockerfile es:

```powershell
RUN comando
```
:::tip Observación
- Donde comando puede ser cualquier comando que se ejecutaría en el shell de tu sistema operativo. Por ejemplo:
```js
RUN apt-get update && apt-get install -y nginx
```

:::
#### Capas de Imagen
- Cada instrucción RUN crea una nueva capa en la imagen Docker. Esto permite que Docker sea eficiente en términos de almacenamiento y caché. Las capas que no cambian (por ejemplo, las instalaciones de paquetes) se almacenan en caché y Docker puede reutilizar esa capa almacenada en caché en lugar de volver a ejecutar esa instrucción, lo cual acelera significativamente el tiempo de construcción de la imagen. 
- Si modificas una instrucción RUN o cualquier otra instrucción en el Dockerfile, Docker reconstruirá todas las capas afectadas por esos cambios y todas las capas que dependan de ellas. Sin embargo, las capas que no se vean afectadas directamente por los cambios no necesitarán ser reconstruidas y se recuperarán de la caché.

#### Shell por Defecto
- Por defecto, el comando RUN utiliza /bin/sh -c como shell para ejecutar los comandos. Puedes usar este shell para ejecutar múltiples comandos en una sola instrucción RUN, separándolos con && (para ejecución secuencial) o ; (para ejecución independiente).

#### Evitar Capas Innecesarias
- Para mantener las imágenes lo más delgadas posible, es buena práctica combinar múltiples comandos en una sola instrucción RUN cuando sea posible, limpiando también los archivos temporales y eliminando cachés de paquetes después de cada instalación.

#### Orden de las Instrucciones
- El orden de las instrucciones RUN en tu Dockerfile es importante. Docker construye la imagen en el orden en que se especifican las instrucciones. Las capas que cambian con más frecuencia deberían ir al final del Dockerfile para aprovechar la caché de capas de Docker.

#### Depuración
-  Si encuentras problemas durante la construcción de la imagen, puedes depurar añadiendo más instrucciones RUN con echo o printf para imprimir variables de entorno o resultados de comandos para entender mejor lo que está sucediendo en cada etapa de la construcción.

#### Ejemplo de Uso
- Supongamos que quieres crear una imagen Docker que instale Node.js y luego clone un repositorio de GitHub. Tu Dockerfile podría verse así:

```js
# Usa una imagen base que ya tenga Node.js instalado
FROM node:14

# Actualiza el sistema e instala git
RUN apt-get update \
    && apt-get install -y git

# Clona un repositorio de GitHub
RUN git clone https://github.com/usuario/repo.git /app

# Establece el directorio de trabajo
WORKDIR /app

# Instala las dependencias del proyecto
RUN npm install

# Expone el puerto 3000 para acceder a la aplicación
EXPOSE 3000

# Comando por defecto para iniciar la aplicación
CMD ["npm", "start"]


```

:::tip
[Más información](https://docs.docker.com/reference/dockerfile/#run)
:::

## Comando MAINTAINER
- El comando MAINTAINER en un Dockerfile se utiliza para especificar la información del mantenedor de la imagen. Sin embargo, es importante señalar que este comando ha quedado obsoleto y se recomienda usar la etiqueta LABEL para proporcionar esta información. El comando LABEL es más flexible y extensible, permitiendo agregar múltiples metadatos a la imagen.
- Sintaxis:
```js
MAINTAINER Nombre email@example.com
```
#### Ejemplo de Uso de MAINTAINER

```js
FROM ubuntu:20.04

# Información del mantenedor (obsoleto)
MAINTAINER Juan Perez <juan.perez@example.com>

RUN apt-get update && apt-get install -y curl
CMD ["bash"]
```

- En lugar de MAINTAINER, se recomienda usar LABEL para definir el mantenedor y otros metadatos relacionados con la imagen:

```js
LABEL maintainer="Nombre <email@example.com>"

```

#### Ventajas de Usar LABEL sobre MAINTAINER
-	Flexibilidad: LABEL permite agregar múltiples metadatos de forma más estructurada.
-	Compatibilidad: LABEL es el método recomendado y compatible con las prácticas actuales de Docker.
-	Estandarización: Permite seguir convenciones y estándares como los definidos por Open Containers Initiative (OCI).


:::tip
[Más información](https://docs.docker.com/reference/dockerfile/#maintainer-deprecated)
:::




## Comando CMD
- Se utiliza para especificar el comando predeterminado que se ejecutará cuando se inicie un contenedor basado en esa imagen. A diferencia de RUN, que se ejecuta durante la construcción de la imagen, CMD se ejecuta cuando se lanza el contenedor.
- El comando CMD en un Dockerfile se utiliza para especificar cuál será el comando predeterminado que se ejecutará cuando se inicie un contenedor a partir de la imagen que estás construyendo. Es importante entender cómo funciona y cómo se puede usar de diferentes maneras dependiendo de tus necesidades específicas.
- El CMD se define al final del Dockerfile y especifica el comando que se ejecutará por defecto cuando se inicie un contenedor. Aquí tienes un ejemplo básico:

```js
FROM ubuntu:20.04

# Comando CMD en shell form
CMD echo "Hola, mundo"

```
:::tip Observación
- CMD echo "Hola, mundo" establece que cuando se inicie un contenedor basado en esta imagen, se ejecutará el comando echo "Hola, mundo".
:::

- Ejemplo con Exec form:
```js
FROM ubuntu:20.04

# Comando CMD en exec form
CMD ["echo", "Hola, mundo"]


```
:::tip Observación
- CMD ["echo", "Hola, mundo"] también establece que se ejecutará echo "Hola, mundo", pero utilizando el exec form, que es preferido en la mayoría de los casos por ser más explícito y evitar problemas con la interpretación de caracteres especiales.
:::

#### Sobrescribiendo CMD al Ejecutar el Contenedor
- Puedes sobrescribir el comando CMD especificado en el Dockerfile al ejecutar el contenedor, lo cual es útil para personalizar la ejecución del contenedor sin necesidad de modificar el Dockerfile.
- Ejemplo de Sobrescritura:
```powershell
docker run mi_imagen echo "Hola desde fuera del CMD"
```
:::tip Observación
- En este ejemplo, el comando especificado después de docker run (echo "Hola desde fuera del CMD") sobrescribe el CMD especificado en el Dockerfile. Esto significa que se ejecutará echo "Hola desde fuera del CMD" en lugar del comando por defecto especificado en el Dockerfile.
:::


#### Uso de ENTRYPOINT y CMD Juntos
- Cuando se combinan ENTRYPOINT y CMD, CMD proporciona argumentos predeterminados al ENTRYPOINT. Esto es útil para definir un ejecutable principal y proporcionar opciones o argumentos que pueden cambiar fácilmente.
- Ejemplo:

```js
FROM ubuntu:20.04

# Definir el punto de entrada principal
ENTRYPOINT ["echo"]

# CMD proporciona argumentos predeterminados para ENTRYPOINT
CMD ["Hola, mundo"]


```
:::tip Observación
-	ENTRYPOINT ["echo"] establece echo como el punto de entrada principal.
-	CMD ["Hola, mundo"] proporciona el argumento "Hola, mundo" por defecto cuando se inicie el contenedor.
:::

:::tip
[Más información](https://docs.docker.com/reference/dockerfile/#cmd)
:::


## Comando ENTRYPOINT
- El comando ENTRYPOINT en un Dockerfile se utiliza para especificar el comando o el ejecutable que será ejecutado como punto de entrada cuando se inicie un contenedor a partir de la imagen que estás construyendo. Este comando es fundamental para definir el comportamiento predeterminado del contenedor y puede utilizarse de varias formas según tus necesidades específicas.
- El ENTRYPOINT se define al principio o en cualquier parte del Dockerfile, dependiendo de cómo deseas estructurar tu imagen. 
- A simple vista es igual a CMD pero tienen funciones distintas y se utilizan de manera complementaria para definir el comportamiento predeterminado de un contenedor Docker.

#### Diferencias entre ENTRYPOINT y CMD
##### Función Principal:
-	CMD: Proporciona los argumentos predeterminados para el ENTRYPOINT o especifica el comando que se ejecutará si no hay ENTRYPOINT definido. 
-	ENTRYPOINT: Especifica el comando o el ejecutable que se ejecutará como punto de entrada al iniciar el contenedor. Siempre se ejecutará.
##### Sobrescritura al Ejecutar el Contenedor:
-	CMD: Puede ser sobrescrito al ejecutar el contenedor
-	ENTRYPOINT: No puede ser sobrescrito al ejecutar el contenedor.
##### Formas de Definición:
-	CMD: Se puede definir solo una vez en un Dockerfile y se puede especificar tanto en forma de shell como en exec form.
-	ENTRYPOINT: Se puede definir solo una vez en un Dockerfile y también se puede especificar en forma de shell o exec form.

#### Para entender mejor cómo se complementan ENTRYPOINT y CMD, aquí hay un ejemplo que ilustra su uso conjunto:

```js
FROM ubuntu:20.04

# ENTRYPOINT en exec form
ENTRYPOINT ["echo"]

# CMD en shell form
CMD "Hola, mundo"


```
:::tip Observación
-  ENTRYPOINT ["echo"] establece que echo será el comando principal que se ejecutará al iniciar el contenedor.
-  CMD "Hola, mundo" proporciona el argumento "Hola, mundo" que se pasa al ENTRYPOINT, resultando en que el contenedor imprimirá "Hola, mundo" al iniciarse.
:::

#### Sobreescritura al Ejecutar el Contenedor
- 
Cuando ejecutas el contenedor, puedes sobrescribir el CMD, pero no el ENTRYPOINT:
```powershell
docker run --rm mi_imagen echo "¡Hola desde fuera del contenedor!"
```
:::tip Observación
- En este caso, echo "¡Hola desde fuera del contenedor!" sobrescribe al CMD, mostrando en la consola “"¡Hola desde fuera del contenedor!"
:::

#### Entendiendo ENTRYPOINT y CMD
-  ENTRYPOINT: Define el comando o el ejecutable que se ejecutará al iniciar el contenedor. Especifica el comando principal que no se sobrescribe.
-  CMD: Proporciona los argumentos predeterminados para el ENTRYPOINT o especifica el comando que se ejecutará si no hay ENTRYPOINT definido. Se puede sobrescribir al ejecutar el contenedor.

#### Sobrescribir
- Si solo quieres sobrescribir CMD al ejecutar el contenedor, asegúrate de que en tu Dockerfile no hayas definido un ENTRYPOINT. Aquí tienes un ejemplo.
- Ejemplo en Dockerfile:

```js
FROM ubuntu:20.04

# CMD en shell form
CMD echo "Hola, mundo"


```
:::tip Observación
- En este caso, echo "Hola, mundo" es el comando que se ejecutará por defecto al iniciar el contenedor.
:::
- Cuando ejecutas el contenedor, puedes sobrescribir CMD específicamente:
```powershell
docker run --rm mi_imagen echo "¡Hola desde fuera del contenedor!"
```
:::tip Observación
- echo "¡Hola desde fuera del contenedor!" sobrescribe el CMD especificado en el Dockerfile (echo "Hola, mundo").
-  No importa si ENTRYPOINT está definido o no, ya que CMD es lo único que se cambia.
:::

#### Otro ejemplo
- Supongamos que tienes un Dockerfile así:

```js
FROM ubuntu:20.04

# ENTRYPOINT en shell form
ENTRYPOINT echo "El punto de entrada es"

# CMD en shell form
CMD echo "CMD predeterminado"


```

:::tip Observación
-	ENTRYPOINT echo "El punto de entrada es" establece que echo "El punto de entrada es" será el punto de entrada principal del contenedor.
-	CMD echo "CMD predeterminado" es el comando predeterminado que se ejecutará después de ENTRYPOINT.
- Entonces primero se ejecuta el ENTRYPOINT y luego el CMD.
:::

#### Sobrescritura al Ejecutar el Contenedor
- Cuando ejecutas el contenedor y proporcionas un comando específico con docker run, sobrescribes el CMD definido en el Dockerfile. Sin embargo, el ENTRYPOINT seguirá ejecutándose antes del comando proporcionado:
```powershell
docker run --rm mi_imagen echo "¡Hola desde fuera del contenedor!"
```
:::tip Observación
-	echo "¡Hola desde fuera del contenedor!" sobrescribe el CMD definido en el Dockerfile (echo "CMD predeterminado").
-	ENTRYPOINT (echo "El punto de entrada es") se ejecutará antes del comando sobrescrito, por lo que la salida será algo como: El punto de entrada es ¡Hola desde fuera del contenedor!.
:::
#### Modificando Ambos ENTRYPOINT y CMD
- Si deseas modificar tanto ENTRYPOINT como CMD al ejecutar el contenedor, puedes proporcionar un comando completo al ejecutar el contenedor:

```powershell
docker run --rm --entrypoint "otro_punto_de_entrada.sh" mi_imagen arg1 arg2
```
:::tip Observación
-	--entrypoint "otro_punto_de_entrada.sh" reemplaza completamente el ENTRYPOINT definido en el Dockerfile.
-	arg1 arg2 son argumentos que se pasan al nuevo ENTRYPOINT y reemplazan CMD.
:::

:::tip
- Un archivo con extensión .sh en sistemas Unix y Linux es un script de shell, es decir, un archivo de texto plano que contiene comandos que pueden ser ejecutados por un intérprete de shell, como Bash (Bourne Again SHell) u otro shell compatible.

:::

:::tip
[Más información](https://docs.docker.com/reference/dockerfile/#entrypoint)
:::

## Comando ENV
- El comando ENV en un Dockerfile se utiliza para definir variables de entorno que estarán disponibles durante la construcción de la imagen Docker y, opcionalmente, cuando se ejecute un contenedor basado en esa imagen. 


:::tip
- Cuando se dice que las variables de entorno definidas con el comando ENV en un Dockerfile estarán disponibles "opcionalmente" durante la ejecución de un contenedor basado en esa imagen, significa que estas variables estarán disponibles de manera predeterminada durante la ejecución del contenedor, pero pueden ser sobrescritas o modificadas cuando se inicie el contenedor con docker run.
:::

- Las variables de entorno pueden ser útiles para configurar la aplicación o el entorno de ejecución sin necesidad de modificar el código fuente.
- La sintaxis básica del comando ENV es:

```js
ENV <clave> <valor>
```
:::tip Observación
- Donde:
    -	&lt;clave> es el nombre de la variable de entorno.
    -	&lt;valor> es el valor asignado a la variable de entorno.
:::

#### Ejemplos de Uso
#### Definir una Variable de Entorno
- Para definir una variable de entorno simple:
```js
ENV MI_VARIABLE valor
```
:::tip Observación
- Esto establecerá MI_VARIABLE con el valor valor.
:::

#### Usar Variables de Entorno en el Dockerfile
- Las variables definidas con ENV pueden ser referenciadas en las siguientes instrucciones del Dockerfile usando la sintaxis:
```js
${MI_VARIABLE} o $MI_VARIABLE
```
- Puedes usar variables de entorno definidas con ENV en otros comandos del Dockerfile:

```js
FROM ubuntu:20.04

# Definir variables de entorno
ENV USUARIO usuario1
ENV APP_HOME /home/usuario1/app

# Usar las variables de entorno
RUN useradd -m ${USUARIO} \
    && mkdir -p ${APP_HOME} \
    && chown -R ${USUARIO}:${USUARIO} ${APP_HOME}

WORKDIR ${APP_HOME}

```
:::tip Observación
- En este ejemplo:
    -	USUARIO se define como usuario1.
    -	APP_HOME se define como /home/usuario1/app.
    -	Las variables se utilizan en los comandos RUN, mkdir, chown y WORKDIR.
:::

#### Usar Múltiples Variables de Entorno en una Sola Línea
- Puedes definir varias variables de entorno en una sola línea usando la siguiente sintaxis:
```js
ENV MI_VARIABLE1=valor1 MI_VARIABLE2=valor2
```

#### Variables de Entorno durante la Ejecución del Contenedor
- Las variables definidas con ENV estarán disponibles tanto durante la construcción de la imagen como durante la ejecución del contenedor. Por ejemplo, un archivo Dockerfile que define una variable de entorno y la usa en un script:
```js
FROM ubuntu:20.04

# Definir la variable de entorno
ENV MENSAJE="Hola, mundo!"

# Copiar un script que usa la variable de entorno
COPY script.sh /usr/local/bin/script.sh

# Hacer el script ejecutable
RUN chmod +x /usr/local/bin/script.sh

# Ejecutar el script por defecto
CMD ["/usr/local/bin/script.sh"]

```
- script.sh podría ser algo como:

```sh
#!/bin/sh
echo $MENSAJE
```
:::tip Observación
- Cuando ejecutes el contenedor, verás el mensaje “Hola, mundo!".

:::
#### Variables de Entorno y Caché de Docker
- Cambiar una variable de entorno con ENV invalida la caché de Docker para las instrucciones siguientes en el Dockerfile. Esto significa que si modificas una variable de entorno, todas las capas subsiguientes se reconstruirán.
#### Buenas Prácticas
-	Valores Sensibles: No almacenes valores sensibles como contraseñas directamente en el Dockerfile usando ENV. En su lugar, usa mecanismos de gestión de secretos o inyección de variables de entorno en tiempo de ejecución.
-	Variables Reutilizables: Usa ENV para definir rutas y configuraciones reutilizables que puedan cambiar dependiendo del entorno (desarrollo, pruebas, producción).
-	Documentación: Documenta las variables de entorno en tu Dockerfile para que otros usuarios sepan qué configuraciones pueden ajustar.

:::warning
- Docker Compose permite cargar variables de entorno automáticamente desde un archivo .env, mientras que un Dockerfile no tiene esta funcionalidad integrada. Para usar variables de entorno desde un archivo .env con un Dockerfile, necesitas manejarlo explícitamente utilizando métodos como --build-arg  , --env-file o pasando las variables de entorno en tiempo de ejecución con docker run.
:::

:::tip
[Más información](https://docs.docker.com/reference/dockerfile/#env)
:::

## Comando EXPOSE
- El comando EXPOSE en un Dockerfile se utiliza para documentar los puertos en los que el contenedor escucha durante su ejecución. No hace que los puertos de red del host se usen para comunicarse con el contenedor (eso lo haría la opcion -d de docker run); simplemente informa a los usuarios del contenedor y a las herramientas de orquestación (como Docker Compose o Kubernetes) sobre los puertos que la aplicación en el contenedor está utilizando.
- La sintaxis básica del comando EXPOSE es:
```js
EXPOSE <puerto> [<puerto>/<protocolo>...]
```
:::tip Observación
- Donde:
    -	&lt;puerto> es el número de puerto en el que el contenedor escuchará.
    -	&lt;protocolo> es opcional y puede ser tcp o udp. Si no se especifica, el valor predeterminado es tcp.


:::

#### Ejemplos
- Exponer un Puerto TCP:

```js
FROM ubuntu:20.04

# Exponer el puerto 80 usando TCP (valor predeterminado)
EXPOSE 80

```
- Exponer un Puerto UDP:

```js
FROM ubuntu:20.04

# Exponer el puerto 53 usando UDP
EXPOSE 53/udp


```
- Exponer Múltiples Puertos:

```js
FROM ubuntu:20.04

# Exponer los puertos 80 y 443 usando TCP
EXPOSE 80 443

```


#### Publicar Puertos con docker run
- Para hacer que un puerto sea accesible desde el exterior del contenedor, debes usar la opción -p o --publish al ejecutar el contenedor con docker run.
- El comando EXPOSE no publica el puerto automáticamente. Para hacer que un puerto sea accesible desde el exterior del contenedor, debes usar la opción -p o --publish al ejecutar el contenedor con docker run.
- Supongamos que tienes el siguiente Dockerfile:
```js
FROM nginx:alpine
# Exponer el puerto 80
EXPOSE 80
```
- Construyes la imagen:
```powershell
docker build -t mi_nginx .
```
- Ejecutas el contenedor y publicas el puerto 80 en el host:
```powershell
docker run -d -p 8080:80 mi_nginx
```
:::tip Observación
- En este ejemplo:
    -	El contenedor escucha en el puerto 80 (documentado con EXPOSE).
    -	El puerto 80 del contenedor se publica en el puerto 8080 del host (-p 8080:80).
:::

#### Docker Compose
- Cuando se usa Docker Compose, los puertos expuestos en el Dockerfile se pueden mapear en el archivo docker-compose.yml usando la clave ports.
- Ejemplo de Docker Compose:
```js
version: '3.8'

services:
  web:
    image: mi_nginx
    ports:
      - "8080:80"

```
:::tip Observación
- Este archivo docker-compose.yml publica el puerto 80 del contenedor en el puerto 8080 del host.
:::

#### Buenas Prácticas
-	Documentación: Usa EXPOSE para documentar  qué puertos  va a utilizar tu contenedor, haciendo que tu Dockerfile sea más comprensible.
-	Publicación de Puertos: Utiliza la opción -p de docker run o la clave ports en Docker Compose para publicar los puertos y hacerlos accesibles desde el exterior del contenedor.



:::tip
[Más información](https://docs.docker.com/reference/dockerfile/#expose)
:::


## Comando HEALTHCHECK
-	El comando HEALTHCHECK en un Dockerfile se utiliza para definir cómo Docker debe verificar que un contenedor se encuentra en buen estado y funcionando correctamente. Al establecer un HEALTHCHECK, Docker puede realizar verificaciones periódicas de salud y determinar si el contenedor está saludable o no. Esto es útil para detectar problemas en aplicaciones y tomar medidas como reiniciar contenedores defectuosos automáticamente.
- La sintaxis básica del comando HEALTHCHECK es:

```js
HEALTHCHECK [opciones] CMD <comando>
```
:::tip Observación
- Opciones:
    -	--interval=DURATION: Tiempo entre cada chequeo (por defecto es 30s).
    -	--timeout=DURATION: Tiempo máximo que puede durar un chequeo antes de considerarse fallido (por defecto es 30s).
    -	--start-period=DURATION: Periodo de gracia después de iniciar el contenedor durante el cual las fallas no se cuentan (por defecto es 0s).
    -	--retries=N: Número de intentos antes de considerar que el contenedor no está saludable (por defecto es 3).
- El comando se ejecuta para verificar la salud del contenedor. Debe devolver un código de salida de 0 para indicar que el contenedor está saludable.
- Docker marca los contenedores como healthy, unhealthy, o starting según los resultados de los chequeos.
:::

- Ejemplo Básico:

```js
Ejemplo Básico:
FROM nginx:alpine

# Establecer el directorio de trabajo
WORKDIR /usr/share/nginx/html

# Copiar archivos al contenedor
COPY index.html .

# Exponer el puerto 80
EXPOSE 80

# Definir el comando para verificar la salud del contenedor
HEALTHCHECK --interval=30s --timeout=10s --retries=3 CMD curl -f http://localhost/ || exit 1

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]


```
:::tip Observación
- En este ejemplo:
    -	Se define un HEALTHCHECK que ejecuta el comando curl -f http://localhost/ cada 30 segundos.
    -	Si curl no puede acceder a la página (es decir, devuelve un código de estado HTTP no 2xx o 3xx), el contenedor se considera no saludable.
    -	Si falla 3 veces consecutivas, Docker marcará el contenedor como unhealthy.
:::

- Supongamos que tienes una aplicación Node.js que responde en el puerto 3000. Puedes definir un HEALTHCHECK para verificar un endpoint específico de salud:

```js

FROM node:14-alpine

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar archivos al contenedor
COPY package*.json ./
COPY . .

# Instalar dependencias
RUN npm install

# Exponer el puerto 3000
EXPOSE 3000

# Definir el comando para verificar la salud del contenedor
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 CMD curl -f http://localhost:3000/health || exit 1

# Comando para iniciar la aplicación
CMD ["node", "app.js"]


```
:::tip Observación
- En este ejemplo:
    -	El HEALTHCHECK verifica el endpoint /health de la aplicación cada 30 segundos.
    -	Si no recibe una respuesta satisfactoria dentro de los 10 segundos, considera que el chequeo ha fallado.
    -	Las primeras fallas dentro de los primeros 5 segundos después de iniciar el contenedor no se contarán.
    -	Después de 3 fallas consecutivas, el contenedor se marca como no saludable.
:::

#### Chequear el Estado de Salud
- Puedes verificar el estado de salud de un contenedor con el comando docker ps que mostrará el estado de salud en la columna STATUS:
```powershell
docker ps
```
:::tip
[Más información](https://docs.docker.com/reference/dockerfile/#healthcheck)
:::

## Comando LABEL
- El comando LABEL en un Dockerfile se utiliza para agregar metadatos a la imagen Docker. Estos metadatos son pares clave-valor que pueden proporcionar información adicional sobre la imagen, como el autor, la versión, la descripción, las etiquetas personalizadas, etc. Las etiquetas son útiles para organizar y gestionar imágenes Docker, especialmente en entornos de producción y CI/CD.
- Sintaxis

```js
LABEL clave1=valor1 clave2=valor2 ...
```
- También puedes utilizar comillas para valores que contienen espacios:

```js
LABEL clave1="valor con espacios" clave2="otro valor"
```
#### Ejemplos
- Ejemplo Básico:

```js
FROM ubuntu:20.04

# Agregar etiquetas
LABEL maintainer="tu_email@example.com" \
      version="1.0" \
      description="Esta es una imagen base de Ubuntu con algunas etiquetas."

# Otros comandos de Dockerfile
RUN apt-get update && apt-get install -y curl
CMD ["bash"]


```
:::tip Observación
- En este ejemplo:
    -	maintainer proporciona la información de contacto del mantenedor de la imagen.
    -	version especifica la versión de la imagen.
    -	description proporciona una breve descripción de la imagen.
- El carácter \ en un Dockerfile se utiliza para continuar una línea en la siguiente línea, permitiendo que los comandos largos o múltiples valores se dividan en varias líneas para mejorar la legibilidad. Es particularmente útil en comandos como LABEL, RUN, y otros donde puede haber múltiples elementos o una sintaxis extensa.
:::

- Ejemplo avanzado:

```js
FROM node:14-alpine

# Agregar etiquetas
LABEL org.opencontainers.image.title="Mi Aplicación Node.js" \
      org.opencontainers.image.description="Esta es una aplicación Node.js de ejemplo." \
      org.opencontainers.image.authors="tu_email@example.com" \
      org.opencontainers.image.version="1.0.0" \
      org.opencontainers.image.url="https://ejemplo.com" \
      org.opencontainers.image.documentation="https://ejemplo.com/docs" \
      org.opencontainers.image.source="https://github.com/usuario/repositorio"

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar archivos al contenedor
COPY package*.json ./
COPY . .

# Instalar dependencias
RUN npm install

# Exponer el puerto 3000
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "app.js"]
```
:::tip Observación
- En este ejemplo, se usan etiquetas que siguen las convenciones de Open Containers Initiative (OCI) para proporcionar metadatos estandarizados sobre la imagen.
:::

#### Ver Etiquetas
- Puedes ver las etiquetas(label/metadata) de una imagen usando el comando docker inspect:
```powershell
docker inspect <nombre_imagen> | grep "Labels" -A 10
```
:::tip Observación
- Este comando muestra las etiquetas agregadas a la imagen.
- Grep “Labels” : Sirve para obtener solamente las etiquetas del comando anterior.  El comando grep se utiliza para buscar patrones en el texto. En este caso, el patrón es "Labels", que es el nombre de la clave en la salida JSON del comando docker inspect que contiene las etiquetas de las imágenes.
- La opción -A se utiliza para especificar el número de líneas después de la coincidencia que se incluirán en la salida. En este caso, -A 10 indica que  se incluyan 10 líneas después de la línea "Labels" en la salida.
- Entonces, el comando  grep "Labels" -A 10 buscará la cadena "Labels" en la salida del comando docker inspect e imprimirá las 10 líneas que están después de la coincidencia, que deberían incluir los valores reales de las etiquetas.
:::

#### Uso de Etiquetas en Prácticas de CI/CD
- Las etiquetas son especialmente útiles en entornos de CI/CD para:
    1.	Versionado de Imágenes: Proporcionar versiones específicas y detalladas de las imágenes.
    2.	Automatización de Despliegues: Facilitar la automatización del despliegue de aplicaciones al etiquetar imágenes con información relevante.
    3.	Documentación y Trazabilidad: Mantener información detallada sobre el origen y la configuración de las imágenes, lo que facilita la trazabilidad y la depuración.

:::tip
[Más información](https://docs.docker.com/reference/dockerfile/#label)
:::

## Comando ONBUILD
- El comando ONBUILD en un Dockerfile se utiliza para definir una serie de instrucciones que se ejecutarán automáticamente cuando la imagen  se utilice como base para otra imagen. Es decir, ONBUILD permite configurar "gatillos" o "triggers" que se activarán en el momento de construcción de una imagen derivada.
- El uso típico de ONBUILD es en imágenes que están destinadas a ser utilizadas como bases para otras imágenes, como imágenes de construcción de aplicaciones donde quieres automatizar ciertos pasos comunes (por ejemplo, copiar código fuente, instalar dependencias).
- Sintaxis:
```js
ONBUILD <instrucción>
```
:::tip Observación
- &lt;instrucción> es cualquier comando Docker válido, como RUN, COPY, ADD, ENV, etc.
:::

#### Ejemplo Básico
- Dockerfile Base con ONBUILD:

```js
# Imagen base personalizada
FROM node:14-alpine

# Instalar dependencias globales
RUN npm install -g npm@latest

# Instrucciones que se ejecutarán en la construcción de una imagen derivada
ONBUILD COPY . /app
ONBUILD WORKDIR /app
ONBUILD RUN npm install

# Comando por defecto
CMD ["node"]


```
:::tip Observación
- En este ejemplo:
    -	La imagen base node:14-alpine se personaliza para instalar la versión más reciente de npm.
    -	Se añaden instrucciones ONBUILD para copiar el código fuente en el directorio /app, establecer el directorio de trabajo y ejecutar npm install cuando una imagen derivada se construya a partir de esta imagen.
:::

- Dockerfile Derivado:

```js
# Usar la imagen base personalizada
FROM my-node-base

# Agregar archivos adicionales o configurar la aplicación
COPY . .

# Comando para ejecutar la aplicación
CMD ["node", "server.js"]


```
:::tip Observación
- Las instrucciones ONBUILD se ejecutan inmediatamente después de que Docker procesa el comando FROM y antes de que continúe con las demás instrucciones del Dockerfile derivado.
- Al construir esta imagen derivada, Docker ejecutará automáticamente las instrucciones ONBUILD definidas en my-node-base:
    1.	COPY . /app
    2.	WORKDIR /app
    3.	RUN npm install
- Esto garantiza que el código fuente se copie y las dependencias se instalen en la imagen derivada.
:::

#### Ventajas
-	Reutilización de Código: Facilita la reutilización de pasos comunes de construcción en múltiples proyectos derivados.
-	Automatización: Simplifica el proceso de configuración de imágenes derivadas, asegurando que ciertos comandos se ejecuten automáticamente.

#### Desventajas
-	Complejidad: Puede hacer que el comportamiento de la imagen derivada sea menos transparente y más difícil de entender.
-	Mantenimiento: Las instrucciones ONBUILD pueden complicar el mantenimiento y la depuración, especialmente si se utilizan en exceso o de manera incorrecta.

:::tip
[Más información](https://docs.docker.com/reference/dockerfile/#onbuild)
:::
## Comando SHELL
- El comando SHELL en un Dockerfile se utiliza para definir el shell predeterminado que se usará en los comandos RUN posteriores. Esto permite cambiar del shell predeterminado /bin/sh -c a otro shell, como bash, o incluso a un estilo de comando exec form.
- Sintaxis:
```js
SHELL ["executable", "parameter1", "parameter2", ...]
```
####  Usar bash
- Por defecto, Docker utiliza /bin/sh -c como shell para ejecutar comandos RUN. Si deseas usar bash, puedes cambiar el shell predeterminado usando el comando SHELL.
- Dockerfile:
```js
FROM ubuntu:20.04

# Cambiar el shell a bash
SHELL ["/bin/bash", "-c"]

RUN echo "Esto se ejecuta con bash"
RUN source /etc/profile && echo "También esto"

```
:::tip Observación
- En este ejemplo:
    -	SHELL ["/bin/bash", "-c"] cambia el shell predeterminado a bash.
    -	Los comandos RUN subsecuentes se ejecutan usando bash en lugar de sh.
:::
#### Usar powershell o cmd
- Si estás construyendo una imagen de Windows, puedes cambiar el shell a powershell o cmd.
- Dockerfile:
```js
FROM mcr.microsoft.com/windows/servercore:ltsc2022

# Cambiar el shell a PowerShell
SHELL ["powershell", "-Command"]

RUN Write-Host "Esto se ejecuta con PowerShell"

```
:::tip Observación
- En este ejemplo:
    -	SHELL ["powershell", "-Command"] cambia el shell predeterminado a PowerShell en un contenedor de Windows.
    -	El comando RUN se ejecuta usando PowerShell.

:::
:::tip
- El comando SHELL es una herramienta poderosa para personalizar el entorno de construcción de Docker, permitiendo usar el shell más adecuado para tus necesidades.
- [Más información](https://docs.docker.com/reference/dockerfile/#shell)
:::



## Comando STOPSIGNAL
- El comando STOPSIGNAL en un Dockerfile se utiliza para especificar la señal del sistema que se enviará al contenedor para detenerlo de manera limpia. Esta señal se envía cuando se ejecuta el comando docker stop en el contenedor.

:::tip señales
- Una señal (también conocida como señal del sistema o signal en inglés) es un mensaje que un proceso envía a otro proceso o al sistema operativo para comunicarle un evento o solicitud.
- Algunos usos comunes de las señales incluyen:
    1.	Terminación de Procesos: La señal más comúnmente utilizada para terminar un proceso de manera ordenada es SIGTERM (señal número 15). Esta señal solicita al proceso que se detenga de manera limpia, permitiéndole realizar cualquier limpieza necesaria antes de finalizar.
    2.	Forzar la Terminación: En casos donde se necesita terminar un proceso inmediatamente y sin permitirle realizar ninguna acción de limpieza, se utiliza la señal SIGKILL (señal número 9). Esta señal termina el proceso de manera abrupta y puede resultar en pérdida de datos no guardados.
    3.	Recarga de Configuración: Algunos programas, como servidores web o aplicaciones de red, pueden recargar su configuración en respuesta a la señal SIGHUP (señal número 1). Esta señal les indica que deben volver a cargar su configuración sin detener completamente el proceso.
:::
- Define la señal que se enviará al proceso principal del contenedor cuando detenemos el contenedor. Esto asegura que el proceso principal tenga la oportunidad de manejar la señal y realizar cualquier limpieza necesaria antes de finalizar.
- El uso de STOPSIGNAL es útil para asegurarse de que el contenedor se detenga de manera ordenada, permitiendo que el proceso principal dentro del contenedor maneje la señal y realice cualquier limpieza necesaria antes de salir.
- Sintaxis:
```js
STOPSIGNAL signal
```
:::tip Observación
- Donde signal puede ser el nombre de la señal (como SIGTERM) o el número de la señal (como 15).
:::

- Ejemplo básico:
```js
FROM ubuntu:20.04

# Instalar Nginx
RUN apt-get update && apt-get install -y nginx

# Especificar la señal para detener el contenedor
STOPSIGNAL SIGTERM

# Iniciar Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]


```
:::tip Observación
- STOPSIGNAL SIGTERM especifica que la señal SIGTERM se enviará al proceso principal (Nginx) cuando se detenga el contenedor.
- nginx -g "daemon off;" inicia Nginx en primer plano para que Docker pueda gestionar adecuadamente el proceso.
:::

- También puedes especificar la señal por su número. Por ejemplo, SIGTERM es la señal número 15:
```js
FROM ubuntu:20.04

# Instalar Nginx
RUN apt-get update && apt-get install -y nginx

# Especificar la señal para detener el contenedor usando el número de señal
STOPSIGNAL 15

# Iniciar Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]

```

#### Señales Comunes
-	SIGTERM (15): Solicita al proceso que termine de manera ordenada. Esta es la señal por defecto que envía docker stop.
-	SIGKILL (9): Termina el proceso inmediatamente sin permitirle realizar ninguna limpieza. No es recomendable para un apagado ordenado.
-	SIGHUP (1): A menudo utilizada para recargar la configuración.

#### Ventajas de Usar STOPSIGNAL
-	Apagado Ordenado: Permite que los procesos dentro del contenedor manejen la señal y realicen cualquier limpieza antes de detenerse.
-	Configuración Personalizada: Puedes especificar una señal diferente si tu aplicación requiere una señal específica para detenerse correctamente.
-	Compatibilidad: Mejora la compatibilidad con aplicaciones que tienen requisitos específicos para la señal de apagado.

:::tip
- [Más información](https://docs.docker.com/reference/dockerfile/#stopsignal)
:::

## Comando USER
- El comando USER en un Dockerfile se utiliza para establecer el usuario y/o el grupo de usuario que se utilizará al ejecutar comandos RUN, CMD, y ENTRYPOINT dentro del contenedor Docker que se está construyendo. Esto permite definir bajo qué identidad se ejecutan los procesos dentro del contenedor, proporcionando control sobre la seguridad y los privilegios.
- La sintaxis básica del comando USER es la siguiente:
```js
USER <usuario>[:<grupo>]
```
:::tip Observación
-  &lt;usuario>: Especifica el nombre del usuario que se utilizará para ejecutar los comandos. Puede ser el nombre de usuario o su ID numérico.
-  &lt;grupo> (opcional): Especifica el grupo al que pertenece el usuario. Si no se especifica, el grupo primario del usuario se utiliza automáticamente.


:::

#### Uso de USER
- Especificar un Usuario por Nombre:
```js
FROM ubuntu:20.04

# Crear un nuevo usuario llamado 'appuser'
RUN useradd -ms /bin/bash appuser

# Establecer el usuario 'appuser' como el usuario por defecto para los comandos RUN, CMD, y ENTRYPOINT
USER appuser

# Comandos que se ejecutarán bajo el contexto de 'appuser'
CMD ["whoami"]

```
:::tip Observación
- En este ejemplo:
    -	useradd -ms /bin/bash appuser crea un nuevo usuario llamado appuser.
    -	USER appuser establece appuser como el usuario bajo el cual se ejecutarán los comandos RUN, CMD, y ENTRYPOINT posteriores en el Dockerfile.
    -	CMD ["whoami"] ejecutará el comando whoami bajo el contexto del usuario appuser dentro del contenedor.
:::

- También puedes especificar un usuario utilizando su ID numérico:
```js
FROM ubuntu:20.04

# Establecer el usuario '1000' (el usuario predeterminado en las imágenes de Ubuntu)
USER 1000

# Comandos que se ejecutarán bajo el contexto del usuario con ID 1000
CMD ["whoami"]

```
:::tip Observación
- En este ejemplo, USER 1000 establece que los comandos subsiguientes se ejecuten bajo el contexto del usuario con ID numérico 1000.
:::

- También puedes usar el comando USER en un Dockerfile especificando tanto un usuario como un grupo:

```js
FROM ubuntu:20.04

# Crear un nuevo usuario llamado 'appuser' y agregarlo al grupo 'appgroup'
RUN groupadd -r appgroup && useradd -r -g appgroup appuser

# Establecer el directorio de trabajo y cambiar la propiedad al usuario 'appuser' y grupo 'appgroup'
WORKDIR /app
RUN chown -R appuser:appgroup /app

# Cambiar al usuario 'appuser' y grupo 'appgroup' para los comandos RUN, CMD y ENTRYPOINT
USER appuser:appgroup

# Comando que se ejecutará bajo el contexto de 'appuser' y 'appgroup'
CMD ["whoami"]


```

#### Consideraciones
-  Cambios de Usuario: El comando USER solo afecta los comandos RUN, CMD, y ENTRYPOINT en el Dockerfile actual. Puedes cambiar de usuario varias veces dentro de un Dockerfile según sea necesario.
-  Seguridad y Privilegios: Es una buena práctica ejecutar aplicaciones en contenedores Docker bajo un usuario no privilegiado para minimizar el impacto de posibles vulnerabilidades de seguridad.
-  Especificación de Grupo: Si se especifica un grupo junto con el usuario (USER usuario:grupo), los comandos se ejecutarán bajo el contexto del grupo especificado.

:::tip
- [Más información](https://docs.docker.com/reference/dockerfile/#user)
:::

## Comando VOLUME 
- El comando VOLUME en un Dockerfile se utiliza para crear un punto de montaje en un contenedor Docker. Este punto de montaje puede ser utilizado para persistir datos generados por el contenedor o para permitir que otros contenedores o el host compartan datos con el contenedor en ejecución.
- En el contexto de Docker, un volumen es una ubicación que contiene una “carpeta” para almacenamiento persistente que existe fuera del contenedor. Los volúmenes son útiles para almacenar datos que deben persistir incluso si el contenedor se detiene o se elimina.
- En un Dockerfile, la instrucción VOLUME se usa para especificar un punto de montaje para un volumen dentro del contenedor. El volumen se creará cuando se construya el contenedor y los procesos que se ejecutan dentro del contenedor podrán acceder a él y modificarlo.
#### Propósito del volumen en Dockerfile
- Hay varias razones por las que es posible que desee utilizar un volumen en un Dockerfile:
    -	Datos persistentes: si tiene datos que deben persistir incluso si el contenedor se detiene o se elimina, puede almacenarlos en un volumen. Esto es útil para cosas como archivos de bases de datos o registros de aplicaciones.
    -	Compartir datos entre contenedores: si tiene varios contenedores que necesitan compartir datos, puede usar un volumen para permitirles acceder a los mismos datos. Esto puede resultar útil para cosas como almacenar archivos de configuración compartidos o datos utilizados por varios contenedores.
    -	Facilitar la gestión de datos: al separar los datos del propio contenedor, los volúmenes pueden facilitar la gestión de los datos. Por ejemplo, puede utilizar un volumen para almacenar datos generados por el contenedor y luego montar el volumen en un sistema host para acceder fácilmente a los datos.
- Desventajas de usar volúmenes en un Dockerfile:
    -	Riesgos potenciales de seguridad : si un volumen está montado en el sistema host, un atacante puede obtener acceso al sistema host a través del volumen. Es importante considerar cuidadosamente las implicaciones de seguridad del uso de volúmenes y tomar medidas para protegerlos si es necesario.
    -	Posibles problemas de rendimiento : según el backend de almacenamiento utilizado para el volumen, puede haber implicaciones de rendimiento al utilizar volúmenes. Por ejemplo, utilizar un volumen local en el sistema host puede ser más rápido que utilizar un volumen conectado a la red, pero puede que no sea tan portátil ni escalable.
    -	Complejidad : el uso de volúmenes puede agregar una capa de complejidad a la configuración de Docker, ya que necesita administrar tanto los contenedores como los volúmenes. Esto puede resultar especialmente complicado cuando se trabaja con varios contenedores y volúmenes.
- Tenga en cuenta que la instrucción VOLUME normalmente debe colocarse al principio del Dockerfile, antes de cualquier instrucción que modifique el contenido del contenedor. Esto garantiza que el volumen se cree antes de realizarle cambios.

:::tip Punto de montaje
- Un "punto de montaje" en Docker es como reservar un espacio de memoria dentro del contenedor donde puedes guardar y acceder a archivos importantes. Es como tener una carpeta especial dentro del contenedor donde guardas tus cosas más valiosas para usarlas siempre que las necesites, incluso si detienes y vuelves a iniciar el contenedor. Esto asegura que tus datos importantes estén siempre disponibles y seguros mientras tu aplicación está funcionando dentro del contenedor.
- Además de proporcionar un lugar seguro para almacenar y acceder a datos importantes dentro del contenedor, los puntos de montaje en Docker también facilitan la comunicación y el intercambio de datos con otros contenedores o con el sistema operativo host.

:::

- Sintaxis:

```js
VOLUME ["ruta_al_punto_de_montaje"]
```
:::tip Observación
-  “ruta_al_punto_de_montaje”: Especifica la ruta dentro del sistema de archivos del contenedor donde se creará el volumen. Puede ser una ruta absoluta o relativa.
:::

#### Uso de VOLUME
- Definir un Punto de Montaje:
```js
FROM ubuntu:20.04

# Definir un volumen en el directorio '/app/data' dentro del contenedor
VOLUME ["/app/data"]

# Otros comandos y configuraciones del Dockerfile...


```
:::tip Observación
- VOLUME ["/app/data"] define un volumen en el directorio /app/data dentro del contenedor. Este directorio será automáticamente creado como un volumen cuando se ejecute el contenedor a partir de la imagen construida con este Dockerfile.
:::

- Uso de Volumen en DockerFile:

```js
FROM nginx:latest

# Definir un volumen para almacenar archivos estáticos de Nginx
VOLUME /usr/share/nginx/html

# Copiar archivos estáticos al volumen definido
COPY index.html /usr/share/nginx/html/index.html

# Exponer el puerto 80 para Nginx
EXPOSE 80

# Comando por defecto al iniciar el contenedor
CMD ["nginx", "-g", "daemon off;"]


```
:::tip Observación
- En este ejemplo:
    -	Se define un volumen en /usr/share/nginx/html que se utilizará para almacenar archivos estáticos de Nginx.
    -	Se copia un archivo index.html al directorio del volumen dentro del Dockerfile para ser utilizado por Nginx.
    -	Cuando se construye y se ejecuta el contenedor a partir de esta imagen, cualquier cambio en los archivos estáticos se reflejará en el volumen definido.
:::


#### Características y Funcionamiento
-	Persistencia de Datos: Los datos escritos en un volumen persistirán incluso después de que el contenedor se detenga o se elimine.
-	Compartición de Datos: Los volúmenes pueden ser compartidos entre contenedores y con el host subyacente.
-	Gestión de Datos: Docker gestiona el montaje y desmontaje de los volúmenes, permitiendo a los desarrolladores y operadores centrarse en la aplicación en lugar de en la infraestructura subyacente.

#### Consideraciones
-	No se Almacenan en la Imagen: Los datos dentro de los volúmenes no se almacenan en la imagen de Docker misma, sino en el sistema de archivos del host o en un almacenamiento de Docker administrado.
-	Uso en Tiempo de Ejecución: Los volúmenes se utilizan principalmente durante el tiempo de ejecución del contenedor, no durante la construcción de la imagen.


#### Comunicación con el Volumen desde Otros Contenedores
- Al comunicarte con un volumen especificado en un Dockerfile desde otro contenedor, puedes realizar operaciones comunes de lectura, escritura y administración de datos.
- Ejemplo de Lectura y Escritura desde Otro Contenedor:

```powershell
# Crear un contenedor basado en la imagen con volumen definido
docker run -d --name mi_web -p 8080:80 mi_imagen
# Crea un segundo contenedor con el mismo volumen
docker run -it --name otro_contenedor --volumes-from mi_web mi_imagen /bin/bash
```
:::tip Observación
-	--volumes-from mi_web: Esta opción indica que el contenedor debe montar el mismo volumen que el contenedor mi_web. De esta manera, ambos contenedores comparten el mismo volumen. Ambos tienen el mismo volumen en la misma ubicación.
- Si desea cambiar la ubicación del volumen, puede usar la opcion -v en el comando docker run, con la siguiente sintaxis:
```powershell
docker run -v /ruta/nueva:/ruta/original --volumes-from mi_web otro_contenedor
```
- Donde:
    -	/ruta/nueva es la ruta donde se montará el volumen en el nuevo contenedor (otro_contenedor).
    -	/ruta/original es la ruta original del volumen en el contenedor mi_web.
    -	mi_web es el nombre del contenedor que se utiliza como fuente del volumen.
    -	otro_contenedor es el nombre del nuevo contenedor que se crea.

- /bin/bash: Este es el comando que se ejecutará dentro del contenedor cuando se inicie. En este caso, iniciará una shell de Bash.
:::

```powershell
# Escribir datos en el volumen desde otro contenedor
docker exec otro_contenedor sh -c 'echo "Hola desde otro contenedor" > /usr/share/nginx/html/saludo.txt'

# Leer datos desde el volumen desde el mismo contenedor
docker exec mi_web cat /usr/share/nginx/html/saludo.txt

```
:::tip Observación
- En este ejemplo:
    -	mi_web es el nombre del contenedor basado en la imagen mi_imagen que tiene el volumen /usr/share/nginx/html definido en su Dockerfile.
    -	Se escribe un archivo saludo.txt en el directorio del volumen desde otro contenedor utilizando docker exec.
    -	Se lee el contenido del archivo saludo.txt desde el mismo contenedor.
:::

#### Ubicación de los datos
- El comando VOLUME crea un punto de montaje donde los datos pueden ser almacenados. Sin embargo, es crucial comprender que:
    -  Ubicación de los Datos: Los datos en este volumen no se almacenan dentro de la imagen de Docker ni en el sistema de archivos del host en sí mismo.
    -  Persistencia: Los volúmenes definidos en un Dockerfile no se almacenan directamente en el host de la misma manera que cuando montas un directorio del host como un volumen. En su lugar, Docker gestiona internamente la persistencia de estos datos en una ubicación específica del sistema de archivos del host.

#### Gestión de Volúmenes por Docker
- Cuando creas un contenedor basado en una imagen que define volúmenes en su Dockerfile:
    -	Docker Administra el Almacenamiento: Docker asigna una ubicación en el sistema de archivos del host donde almacenará y gestionará los datos para ese volumen. Esta ubicación es específica de Docker y no necesariamente visible o manipulable directamente desde fuera del entorno Docker.
    -	Persistencia entre Contenedores: Los datos almacenados en volúmenes definidos de esta manera persisten incluso después de que el contenedor se detiene o se elimina. Esto facilita el intercambio de datos entre contenedores y asegura que los datos importantes permanezcan accesibles a pesar de los cambios en el estado del contenedor.

#### Comunicación y Acceso a los Datos
- Para interactuar con los datos almacenados en un volumen definido en un Dockerfile desde otro contenedor o desde el host:
    -	Desde Otro Contenedor: Puedes utilizar comandos como docker exec para leer y escribir archivos dentro del volumen desde otro contenedor que también tenga acceso al mismo volumen definido.
    -	Desde el Host: Aunque los datos no se almacenan directamente en una ruta visible del host, puedes utilizar comandos de Docker como docker cp para copiar archivos hacia y desde el contenedor que tiene el volumen definido.


:::tip
- [Más información](https://docs.docker.com/reference/dockerfile/#volume)
:::

## Ejecutar DockerFile
- En la ubicación del proyecto, se abre una consola y se ejecuta el comando build con la siguiente sintaxis:
```powershell
docker build  -t nombreImagen:nombreEtiqueta ruta-del-dockerfile
```

:::tip Observación
- Este comando crea una imagen con el nombre nombreImagen leyendo el archivo dockerfile que se encuentra en ruta-del-dockerfile
- Esta imagen está asociada a la etiqueta nombreEtiqueta especificada
:::