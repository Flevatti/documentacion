---
sidebar_position: 9
---
# Extra #02


## Controlador
- En el contexto de una API REST, un controlador es una parte del software que gestiona las solicitudes HTTP entrantes y se encarga de procesarlas. Los controladores son una parte fundamental de la arquitectura de una aplicación web basada en REST.
- En el patrón de diseño Modelo-Vista-Controlador (MVC), que es comúnmente utilizado en el desarrollo web, un controlador es responsable de recibir las solicitudes del cliente, procesar la lógica de la aplicación y luego enviar una respuesta al cliente.
- En el caso específico de una API REST, el controlador maneja las solicitudes HTTP como GET, POST, PUT o DELETE, y decide qué acción tomar en función de la operación solicitada y de los parámetros proporcionados.
- Un controlador en una API REST puede ser responsable de realizar diversas tareas, como validar los datos de entrada, interactuar con la capa de modelo para acceder a la base de datos, ejecutar la lógica de negocio y formatear la respuesta que se enviará al cliente. 
- En resumen, el controlador actúa como un intermediario entre la entrada HTTP (solicitud del cliente) y la lógica de la aplicación.
- Por ejemplo, en un sistema de gestión de tareas basado en una API REST, un controlador podría manejar solicitudes para crear una nueva tarea, obtener la lista de tareas, actualizar una tarea existente o eliminar una tarea.
- En diferentes marcos de desarrollo para aplicaciones web, como Express.js para Node.js, Spring MVC para Java o Django para Python, los controladores suelen implementarse de manera específica según la sintaxis y las convenciones del marco utilizado.

## Endpoint
- En el contexto de una API (Interfaz de Programación de Aplicaciones), un "endpoint" se refiere a un punto final o una URL específica que se puede usar para realizar una operación sobre un recurso o servicio.
- En otras palabras, un endpoint es una interfaz expuesta por una API, a través de la cual los clientes pueden realizar solicitudes y obtener respuestas.

:::tip interfaz
Decir que un endpoint es una interfaz significa que es un punto de acceso(URL) que la API expone para que los clientes puedan interactuar con ella. A través de ese endpoint, los clientes envían solicitudes (como GET, POST, etc.) y obtienen respuestas, pero no conocen los detalles internos de cómo la API maneja esas solicitudes, solo saben qué pueden solicitar y qué recibirán como respuesta, al igual que una interfaz en programación.
:::

- Cada endpoint está asociado con una operación particular y representa una acción específica que se puede realizar en la API. Los cuatro métodos HTTP principales utilizados en los endpoints de una API REST son:
    - GET: Utilizado para recuperar información de un recurso.
    - POST: Utilizado para crear un nuevo recurso.
    - PUT o PATCH: Utilizados para actualizar un recurso existente.
    - DELETE: Utilizado para eliminar un recurso.
- Por ejemplo, en una API de gestión de usuarios, podrías tener endpoints como:
    - GET /users: Para obtener la lista de usuarios.
    - GET /users/{id}: Para obtener detalles de un usuario específico.
    - POST /users: Para crear un nuevo usuario.
    - PUT /users/{id}: Para actualizar un usuario existente.
    - DELETE /users/{id}: Para eliminar un usuario.

:::tip Observación
- Cada uno de estos ejemplos representa un endpoint diferente que permite realizar una operación específica en la API. La estructura y la semántica de los endpoints suelen seguir convenciones y patrones definidos por el diseño de la API y las mejores prácticas RESTful.
:::

## Endpoint y controlador
- Un endpoint y un controlador son conceptos relacionados en el contexto de una API REST, pero representan conceptos ligeramente diferentes.

#### Controlador
-	El controlador es una componente de la aplicación que maneja las solicitudes HTTP.
-	Es responsable de procesar la lógica de la aplicación y decidir cómo responder a las solicitudes.
-	En el contexto de un marco de desarrollo web (por ejemplo, Express.js, Spring MVC, Django), el controlador puede ser una clase o función específica que se encarga de manejar un conjunto particular de rutas o URL.

#### Endpoint
-	Un endpoint es una URL específica a la que se puede enviar una solicitud HTTP para interactuar con la API.
-	Cada endpoint está asociado con una operación específica, como obtener datos, crear recursos, actualizar recursos o eliminar recursos.
-	Los endpoints son las rutas específicas que un cliente puede utilizar para realizar operaciones sobre recursos en la API.
-	Por ejemplo, en una API de gestión de tareas, podrías tener endpoints como /tasks para obtener la lista de tareas, /tasks/:id para obtener detalles de una tarea específica, etc.


#### Resumen
- En resumen, el controlador es la lógica que maneja las solicitudes HTTP y decide cómo responder, mientras que el endpoint es la URL específica que representa una operación o recurso dentro de la API. 
- En muchos casos, en el desarrollo de una API REST, hay una correspondencia directa entre los controladores y los endpoints, ya que cada endpoint suele ser manejado por un controlador específico.

## Bucle de eventos
- Al usar Node.js, se introduce un un curioso componente denominado el bucle de eventos que constituye un elemento básico en la plataforma.
- No es algo exclusivo de Node.js. También el browser tiene su propio bucle de eventos que, aunque con distinta implementación, básicamente funciona igual que el de Node.js.
- Las instrucciones de un programa son ejecutadas secuencialmente, de manera que hay que esperar a que una instrucción finalice para que comience la siguiente. 
- Cuando llamamos a funciones, de la propia aplicación o de APIs externas, tenemos que esperar hasta que finalice su ejecución y se devuelva el control al elemento que la llamó. 
- Una llamada a una función significa colocar dicha función en la pila de llamadas del proceso. Cuando la función termina su ejecución y devuelve el control al elemento que la llamó, se elimina de la pila.
- Si la función que se llama requiere mucho tiempo en resolverse, ya sea porque realice cálculos pesados y utilice mucho tiempo de CPU o por que se trate de una función de entrada/salida, las cuales suelen ser bastante lentas, el hilo donde se ejecuta quedará bloqueado durante todo ese tiempo. Dependiendo del tipo de aplicación esto puede ser admisible o no.
- Pensemos en una aplicación de escritorio que obtiene datos mediante peticiones a un servicio web. No sabemos cuánto tiempo tardará en resolverse las peticiones que hagamos, en ocasiones puede que sea inmediato, pero otras veces puede tardar varios segundos. Hasta puede que dé un fallo por timeout y tengamos que esperar unos minutos.
- Pensemos ahora en un servidor web que lanza frecuentemente peticiones SQL a una base de datos. Tampoco podemos saber si se resolverán rápidamente o tardarán un tiempo considerable. Si durante el tiempo que está consultando la base de datos no puede atender a ninguna petición más, mal asunto.
- Ninguna de las aplicaciones anteriores estaría bien diseñada si su fluidez dependiera de los tiempos invertidos en las peticiones. Es decir, si las llamadas de entrada/salida (peticiones) se ejecutaran en el hilo principal de la aplicación.
- La solución, obviamente, pasa por la creación de hilos adicionales que traten dichas llamadas de entrada/salida. Existen dos estrategias fundamentales para la creación de dichos hilos adicionales.
#### Creación de hilos adicionales (Primera opción)
- La primera, llamémosla “clásica”, consiste en crear nuevos hilos (o procesos) donde se ejecutarán las funciones “lentas” de entrada/salida, liberando al hilo principal que puede continuar con su tarea; recibir nuevas peticiones en el caso del servidor o atender las órdenes del usuario en el caso de la aplicación de escritorio. El resultado de las operaciones de entrada/salida, una vez resueltas, se pasarán al hilo principal mediante algún mecanismo de comunicación entre hilos. Teniendo en cuenta que los hilos de un proceso comparten la memoria no es difícil colocar el resultado en el hilo principal.
- Esta estrategia ha sido ampliamente usada en el diseño de servidores. El hilo principal del proceso escucha en un socket y cuando entra una nueva petición crea un nuevo hilo para procesarla y vuelve a escuchar en el socket para repetir el proceso con las sucesivas peticiones. El problema de este enfoque es la escalabilidad, es decir, cuando el número de peticiones (casi) simultáneas aumenta, también lo hace el número de hilos secundarios, pudiendo llegar a colapsar el servidor por sobrecarga de la CPU o por agotamiento de la memoria. 
- Para evitar este problema los servidores diseñados con esta estrategia suelen limitar el máximo número de hilos secundarios que el servidor puede crear. 
- También suelen crear, al arrancar el servidor, un pool de hilos (o procesos) para eliminar el tiempo que se tarda en crear un hilo cuando llega una nueva petición.
-

#### Pool de hilos
- Un "pool de hilos" es un conjunto predefinido o dinámico de hilos de ejecución que están disponibles para realizar tareas en un programa o sistema. 
- La idea detrás de un pool de hilos es tener un grupo de hilos listos para ser utilizados, en lugar de crear y destruir hilos cada vez que se necesita realizar una tarea.
- Cuando un servidor (o cualquier programa) necesita manejar múltiples solicitudes simultáneas, puede ser ineficiente crear un nuevo hilo para cada solicitud, ya que la creación y destrucción de hilos conlleva un costo en términos de tiempo y recursos del sistema. En lugar de eso, se puede utilizar un pool de hilos para tener un conjunto de hilos ya creados y disponibles para gestionar solicitudes entrantes.
- Cuando llega una nueva solicitud, el sistema toma un hilo disponible del pool y lo utiliza para manejar esa solicitud. Una vez que se completa la tarea, el hilo se devuelve al pool en lugar de ser destruido. Esto ayuda a reducir la sobrecarga asociada con la creación y destrucción repetitiva de hilos, mejorando la eficiencia del sistema.
- Es importante destacar que también existen "pools de procesos", que funcionan de manera similar, pero en lugar de hilos, utilizan procesos independientes. La elección entre un pool de hilos o un pool de procesos depende de la arquitectura y los requisitos específicos del sistema.
#### Creación de hilos adicionales (Segunda opción)
- La segunda solución no implica la creación de un nuevo hilo por cada nueva llamada a una operación de entrada/salida. 
- Se trata de registrar handlers o funciones callbacks asociados a eventos que se producen en la interfaz gráfica. Dicho registro se lleva a cabo en un hilo distinto al principal. Cuando se produce un evento dicho hilo notifica al hilo principal que ejecute la función de callback asociada al evento.
- Es una estrategia utilizada desde hace mucho tiempo en el diseño de interfaces gráficas. 
- De esta forma las llamadas a una operación de entrada/salida devuelven el control inmediatamente sin necesidad de haber completado la operación de lectura o escritura en el recurso. Cuando finalizan generan un evento que notifica al hilo que las llamó para que las procese. Como vemos el mecanismo es similar al de los eventos generados por los widgets de una interfaz gráfica, solo que la generación de eventos la realiza el sistema operativo cuando la operación ha concluido.
- El siguiente gráfico proporciona un modelo que sirve para explicar el funcionamiento del bucle de eventos en ambas tecnologías:

![Bucle de eventos](https://juandarodriguez.es/images/bucle_de_eventos.png)


- Cuando se lleva a cabo la ejecución de la aplicación, cada vez que se invoca una función se añade a la pila de llamadas. Cuando las funciones terminan y devuelven el control, se sacan de la pila. Si todas las llamadas fuesen bloqueantes (síncronas), llega un momento en que la pila se vacía completamente que se corresponderá con el fin del programa.
- Pero tanto en Node.js como en Chrome desde cualquiera de las funciones de la pila puede ocurrir que se realicen llamadas que responden al siguiente patrón:
```js
function funcionX(){
     // código síncrono

     funcAsincrona(callback(data), args);

     // código síncrono
 }

```
:::tip Observación
- Lo normal es que la función asíncrona funcAsícrona() sea mucho más lenta que la propia función funcionX(), y como es no bloqueante el código sigue ejecutándose finalizando la función funcionX() antes que la función funcAsincrona().
-  La función funcionX() desaparece de la pila y se ejecuta la que queda en su cima. 
- Por otro lado, la función asíncrona se está ejecutando en otro hilo y cuando finaliza se añade su función callback asociada a la cola de eventos, pasándole como argumento el resultado de la función asíncrona.
- Mientras tanto, el bucle de eventos vigila por un lado que no haya más funciones en la pila de llamadas y por otro la existencia de callbacks en la cola de eventos. Cuando la pila esté vacía, el bucle de eventos colocará en dicha pila el primer callback de la cola de eventos. Por supuesto, las funciones de callback, que no dejan de ser funciones de Javascript, también pueden hacer llamadas asíncronas a la API.
- El proceso se repite indefinidamente hasta que no haya más elementos en el hilo donde residen las API’s (Es el cuadrado que dice Web Apis Chrome o Node.js API, es el hijo “secundario” de la segunda solución). Es decir, hasta que no haya más posibilidades de generación de eventos. 
- Puede ocurrir que el proceso se repita indefinidamente y sólo finalice abortando o cerrando la aplicación. Es el caso de las aplicaciones de escritorio y los servidores.
:::


## Conceptos de Node
- Node, trabaja con un solo hilo. Esto significa que solo ejecutará un proceso a la vez.
- Como desarrolladores de Javascript debemos tener mucho cuidado al programar de no bloquear este único hilo. Aquí entra la parte de Blocking y Non-Blocking.
### Blocking
- Es básicamente esperar a que un proceso termine para después continuar con la ejecución del programa. Esto se hace usando operaciones síncronas, ciclos infinitos, etc.
### Non-Blocking
- Permite que tu programa siga corriendo sin la obligación de esperar a que un proceso termine su ejecución. Esto se lleva a cabo usando operaciones asíncronas.
### Operaciones síncronas y asíncronas
- Las operaciones síncronas nos obligan a esperar a que la tarea termine por completo su ejecución. En la librería de nodejs, muchas de las operaciones cuentan con métodos síncronos y asíncronos a la vez.
- Las operaciones asíncronas nos dan la capacidad de diferir una tarea para seguir ejecutando las demás. Es decir, el programa se encuentra con una operación que va a llevar tiempo en completarse, entonces deja que esta corra y continua con lo demás. Una vez se complete la operación en espera, la ejecuta.
### Callbacks
- Los callbacks son funciones que se pasan como parámetro de otra función. Son parte esencial de las operaciones asíncronas.
- Por ejemplo, al escribir una función que se encarga de leer un archivo del disco duro, puedo pasarle una función o mejor llamado callback, el cual va a ser llamado una vez termine de leer el archivo y va a ejecutar lo que esté dentro de él. Por ello, el nombre callback.
### Event loop
- El event loop es el que se encarga de implementar las operaciones asíncronas o el non-blocking. El event loop corre en el único hilo que existe en Node y como mencionamos anteriormente, al bloquear el único hilo de node, estamos bloqueando el event loop.

:::tip
- Importante: Libuv (una librería escrita en C), es el que permite que el event loop funcione y todo el comportamiento asíncrono en Node. Puedes conocer más sobre esta librería ingresando a su sitio oficial.
:::

### Call stack
- Cada vez que una función va a ser ejecutada pasa por el call stack (pila de llamadas) . Como ya sabemos, al trabajar con operaciones asíncronas, estas poseen callbacks, que se ejecutarán una vez el proceso de la operación haya terminado y que se irán añadiendo al callback queue.
### Callback Queque
- Aquí se agregan los callback o funciones que se ejecutan una vez las operaciones asíncronas hayan terminado. Se utiliza el método FIFO (first input, first output), traducido, primero en entrar, primero en salir.
- El event loop es el que se encarga de revisar que el call stack este vacío para añadir lo que está dentro del callback queue y ejecutarlo.

#### Ejemplo

![callback queque](https://miro.medium.com/v2/resize:fit:828/format:webp/1*Wa6DuSyM3yzvDWqc43-ejA.png)

:::tip Explicación
-	Linea 1: Obtenemos la librería File System de Nodejs para poder leer un archivo del disco duro.
-	Linea 3: Implementamos la operación asíncrona readFile, el cual recibirá como parámetros la ruta del archivo y el callback.
-	Linea 4: Se encuentra un timer, en este caso, setTimeout la cual es una operación asíncrona y posee una función llamada timeout2 que se ejecutará después de 4 segundos.
-	Linea 9: Operación síncrona que imprimirá en consola el mensaje correspondiente.
-	Linea 11: Un timer que posee una función llamada timeout que se ejecutará después de 5 segundos.


:::

#### Brevemente explicaré que hace el snippet de código mostrado.

- Bueno, pasemos a explicar todo el trabajo que Nodejs hace para correr el programa que escribimos con el siguiente gráfico:

##### Fase 1
![Fase 1 del proceso](https://miro.medium.com/v2/resize:fit:640/format:webp/1*_vTb8PdvbS9bYy03duP0Pw.png)

- Primeramente, se agrega la operación readFile al call stack, debido a que es la primera del programa.
- Al ser una operación asíncrona, esta se mueve a la sección de APIs donde ahi esperaremos a que las herramientas encargadas hagan lo necesario para completar la tarea.

##### Fase 2
![Fase 2 del proceso](https://miro.medium.com/v2/resize:fit:640/format:webp/1*0UcfZpRNXp-OEjJSsqcaLg.png)

- El programa estará esperando a que el archivo termine de leerse, pero él continuará con la ejecución del programa. En este caso, se encuentra una operación síncrona (se ejecuta de manera muy rápida) que imprime en consola el mensaje.

##### Fase 3
![Fase 3 del proceso](https://miro.medium.com/v2/resize:fit:640/format:webp/1*_NhUtsMan3PQhEKNOCDQnA.png)
- Ahora, vemos que la operación de leer el archivo terminó. Por lo tanto, pasa al callback queue. También, vemos que en el call stack se encuentra un timer. Esto porque es lo que esta después del console.log anterior.

##### Fase 4
![Fase 4 del proceso](https://miro.medium.com/v2/resize:fit:640/format:webp/1*ZQ72pbgAO383hNjxvmNtEA.png)
- El timer posee una función llamada timeout que se va a ejecutar después de 5 segundos e imprimirá en consola un mensaje. Por ello, pasa a la sección de APIs y espera los 5 segundos. Ahora, el event loop revisa si esta vacío el call stack para ejecutar el callback de la operación readFile.


##### Fase 5
![Fase 5 del proceso](https://miro.medium.com/v2/resize:fit:640/format:webp/1*6tGSp9iraXieXS_NSrAOwg.png)
- Al ejecutar el callback de la operación readFile nos encontramos con otra operación asíncrona. Un timer, con una función llamada timeout2, la cual se ejecutará dentro de 4 segundos. Seguimos esperando a que pasen los 5 segundos del primer timer.



##### Fase 6
![Fase 6 del proceso](https://miro.medium.com/v2/resize:fit:640/format:webp/1*D8u5VYiddpdEH5Fds4bzIQ.png)
- Se agrega la función timeout2 a la sección de APIs a esperar que los segundos pasen.


##### Fase 7
![Fase 7 del proceso](https://miro.medium.com/v2/resize:fit:640/format:webp/1*ZmaLd4mE5n4YjTCI1ChouA.png)
- Podemos observar que la función timeout2 ya terminó su tiempo. Por lo tanto, pasa al callback queue y como el call stack no contiene ninguna operación en ejecución, lo ejecuta.


##### Fase 8
![Fase 8 del proceso](https://miro.medium.com/v2/resize:fit:640/format:webp/1*2egjCVogk59WODAzrydwIg.png)
- Se ejecuta el callback de la funcion timeout2, el cual imprime en consola el archivo en formato JSON. También, vemos que la operación timeout culmino y se agrega al callback queue.


##### Fase 9
![Fase 9 del proceso](https://miro.medium.com/v2/resize:fit:640/format:webp/1*uriotJoRdulyfvOOQCFhVg.png)
- Finalmente, el event loop vuelve a revisar el call stack y ejecuta el callback de la función que estaba en el callback queue.


##### Fase 10
- Al no encontrar nada más, el programa se acaba. El resultado final del programa sería el siguiente:

```powershell
Hello Event Loop
{name: Fernando Hernández, age: 21}
Hi, I’m executed

```

## Conceptos de redes

### IP
- Una dirección IP (Internet Protocol) es un identificador único asignado a cada dispositivo conectado a una red que utiliza el Protocolo de Internet para comunicarse. Las direcciones IP permiten que los dispositivos en una red local o en Internet puedan encontrarse y comunicarse entre sí. Existen dos versiones principales de direcciones IP: IPv4 e IPv6.
- Una dirección IP es como la dirección de tu casa, pero para dispositivos en una red (como computadoras, teléfonos, impresoras, etc.). Es un número único que permite que los dispositivos se encuentren y se comuniquen entre sí, ya sea en una red local (como tu casa o oficina) o en Internet.
- Imagina que envías una carta. Necesitas saber la dirección exacta para que el cartero sepa dónde entregar la carta. Lo mismo sucede en una red: si quieres enviar un mensaje o datos a otro dispositivo, necesitas su dirección IP para que sepa a dónde ir.
##### Direcciones IPv4
- Las direcciones IPv4 se representan como cuatro números decimales separados por puntos, cada uno de los cuales puede variar de 0 a 255. Esto proporciona un total de aproximadamente 4.3 mil millones direcciones únicas. Aquí está el formato básico:
    - Formato: xxx.xxx.xxx.xxx (donde cada "xxx" es un número entre 0 y 255)
    - Ejemplo: 192.168.1.1
- Piensa en una dirección IP como una dirección postal:
    - Una dirección postal: "123 Calle Principal, Ciudad, País"
    - Una dirección IP: "192.168.1.1"
- Las direcciones IPv4 tienen cuatro partes separadas por puntos. Cada parte puede ser un número entre 0 y 255.
##### Direcciones IPv6
- Debido al crecimiento de Internet y la escasez de direcciones IPv4, se introdujeron las direcciones IPv6, que son mucho más largas y permiten una cantidad mucho mayor de direcciones únicas:
    - Formato: Se representan como ocho grupos de cuatro dígitos hexadecimales, separados por dos puntos.
    - Ejemplo: 2001:0db8:85a3:0000:0000:8a2e:0370:7334

##### Componentes de una dirección IP
- Parte de la red: Identifica la red a la que pertenece el dispositivo:
    - Identifica la red específica a la que pertenece el dispositivo.
    - Ejemplo en IPv4: En la dirección 192.168.1.5 con una máscara de subred 255.255.255.0, la parte de la red es 192.168.1.
    - Ejemplo en IPv6: En la dirección 2001:0db8:85a3:0000:0000:8a2e:0370:7334, los primeros segmentos podrían ser la parte de la red, dependiendo de la máscara de subred.
- Parte del host: Identifica el dispositivo específico dentro de esa red:
    - Identifica el dispositivo específico dentro de esa red.
    - Ejemplo en IPv4: En la dirección 192.168.1.5 con una máscara de subred 255.255.255.0, la parte del host es 5.
    - Ejemplo en IPv6: En la dirección 2001:0db8:85a3:0000:0000:8a2e:0370:7334, los últimos segmentos podrían ser la parte del host, dependiendo de la máscara de subred.
- La proporción de bits utilizados para la parte de la red y la parte del host se determina mediante una máscara de subred.

##### Máscara de subred
- La máscara de subred se utiliza para dividir una dirección IP en su componente de red y su componente de host. Se representa de la misma manera que una dirección IP, y define qué parte de la dirección IP corresponde a la red y qué parte a los hosts.
- Una máscara de subred ayuda a dividir una red grande en partes más pequeñas, como dividir una ciudad en barrios. Esto hace que sea más fácil manejar y organizar las direcciones IP.
- Ejemplo de IPv4: 255.255.255.0
- Ejemplo en notación CIDR: /24
- Las direcciones IPv4 son números de 32 bits, divididos en cuatro octetos (cada octeto tiene 8 bits). Una máscara de subred también tiene 32 bits y se usa para determinar qué parte de la dirección IP se usa para la red y cuál para los hosts.
- Ejemplo de Máscara de Subred en IPv4
    - Dirección IP: 192.168.1.1
    - Máscara de Subred: 255.255.255.0
- En binario, esto sería:
    - Dirección IP: 11000000.10101000.00000001.00000001
    - Máscara de Subred: 11111111.11111111.11111111.00000000
- La máscara de subred 255.255.255.0 significa que los primeros 24 bits (los tres primeros octetos) son la parte de la red, y los últimos 8 bits (el último octeto) son la parte del host.
- Ejemplo: 192.168.1.1/24 significa que los primeros 24 bits son la parte de la red.
- Ejemplo de Máscara de Subred en IPv6:
    - Dirección IP: 2001:0db8:85a3:0000:0000:8a2e:0370:7334
    - Máscara de Subred: /64
    - Esto significa que los primeros 64 bits son la parte de la red, y los últimos 64 bits son la parte del host.
- Entonces, La máscara de subred define cuántos bits están reservados para la red y cuántos para los hosts. Esto a su vez determina el número de subredes y hosts posibles.
- Ejemplo en IPv4 con Máscara /24:
    - Máscara: 255.255.255.0 (/24)
    - Bits para la red: 24
    - Bits para los hosts: 8
    - Con 8 bits para los hosts, podemos tener 2<sup>8</sup> = 256 direcciones IP posibles en esta subred. Sin embargo, una dirección se usa para la red y otra para el broadcast, así que quedan 254 direcciones utilizables para hosts.
- Ejemplo en IPv6 con Máscara /64
    - Máscara: /64
    - Bits para la red: 64
    - Bits para los hosts: 64
- Con 64 bits para los hosts, el número de direcciones IP posibles es 2<sup>64</sup>, lo que es un número extremadamente grande, mucho más que suficiente para cualquier red.

##### Notación CIDR
- En lugar de escribir la máscara de subred completa, a menudo se usa la notación CIDR (Classless Inter-Domain Routing), que simplemente cuenta el número de bits que son parte de la red.
- Ejemplo: 192.168.1.1/24 significa que los primeros 24 bits son la parte de la red.



##### Tipos de direcciones IP
- Dirección pública: Utilizada para identificar dispositivos en Internet. Deben ser únicas en todo el mundo. Direcciones IP únicas en todo el mundo, usadas para dispositivos en Internet. Ejemplo: Cuando visitas un sitio web, tu dispositivo usa una dirección IP pública.
- Dirección privada: Utilizadas dentro de redes locales (LAN) y no son únicas globalmente. Las direcciones IP son únicas dentro de tu red, pero no en todo el mundo. Ejemplo: 192.168.1.x (donde x puede ser cualquier número entre 1 y 254). Ejemplo: Tu red doméstica.

##### Ejemplo de red local
- Imagina que tienes una red en casa con la dirección base 192.168.1.0 y una máscara de subred de 255.255.255.0. Esto significa que puedes tener direcciones IP desde 192.168.1.1 hasta 192.168.1.254 para tus dispositivos.
##### Funciones de las direcciones IP
- Identificación de host o red: Cada dispositivo en una red debe tener una dirección IP única para ser identificable.
- Localización de host: Permite encontrar la ubicación de un dispositivo dentro de una red y establecer la ruta para la comunicación.

### Subnet
- Una subnet o subred es una subdivisión de una red IP. El propósito principal de una subred es mejorar la eficiencia de la red y facilitar su administración. Aquí hay algunos puntos clave sobre las subnets:
    - División de redes grandes: Las subnets permiten dividir una red IP grande en segmentos más pequeños y manejables. Esto ayuda a mejorar la organización y el rendimiento de la red.
    - Mejor uso del espacio de direcciones: Al subdividir una red, las subnets pueden ayudar a hacer un uso más eficiente del espacio de direcciones IP disponibles. Esto es especialmente útil para evitar el desperdicio de direcciones IP.
    - Mejora de la seguridad y control de tráfico: Al segmentar la red, se puede controlar mejor el flujo de tráfico entre diferentes subnets y aplicar políticas de seguridad específicas para cada segmento.
    - Reducción del tráfico de difusión: Las subnets ayudan a contener el tráfico de difusión dentro de límites específicos, lo que reduce la carga en la red y mejora el rendimiento.
    - Facilidad de administración: La segmentación de una red en subnets facilita su administración, ya que cada segmento puede ser gestionado de forma independiente.
- En términos técnicos, una subred se define mediante una máscara de subred (subnet mask), que especifica qué porción de la dirección IP corresponde a la red y qué porción corresponde a los hosts dentro de esa red. Por ejemplo, en la dirección IP 192.168.1.0 con una máscara de subred 255.255.255.0, los primeros tres octetos (192.168.1) representan la parte de la red y el último octeto (0) representa la parte del host.
- La notación 172.20.0.0/16 se utiliza para describir una subred en el formato CIDR (Classless Inter-Domain Routing). Desglosémoslo:
    - 172.20.0.0: Esta es la dirección base de la subred.
    - /16: Este es el prefijo de la subred y representa la longitud de la máscara de subred en bits.
    - Rango de direcciones: La subred 172.20.0.0/16 abarca desde 172.20.0.0 hasta 172.20.255.255.
    - Número de direcciones: Con 16 bits disponibles para los hosts, hay 2<sup>16</sup>=65,536 direcciones posibles dentro de esta subred. Sin embargo, dos direcciones están reservadas: una para la dirección de red (172.20.0.0) y otra para la dirección de broadcast (172.20.255.255). Esto deja 65,534 direcciones utilizables para hosts.

##### Calcular subredes y hosts
- El número de subredes que puedes crear es 2<sup>n</sup>, donde n es el número de bits adicionales que has tomado.
- Supongamos que tienes una red con una máscara de subred original de /24 (255.255.255.0).
- Decides utilizar 2 bits adicionales para subredes. Esto significa que la nueva máscara de subred será /26 (24 + 2 = 26).
- En este caso, 2<sup>2</sup> = 4 subredes
- El número de hosts por subred se calcula con los bits restantes: 2<sup>h</sup> - 2, donde h es el número de bits restantes para los hosts.
- Con una máscara /26, te quedan 6 bits para los hosts (32 - 26 = 6).
- El número de hosts por subred es 2<sup>6</sup> - 2 = 64 - 2 = 62 hosts



### DNS
- El DNS (Domain Name System) es un sistema jerárquico y descentralizado que traduce nombres de dominio legibles por humanos (como www.example.com) en direcciones IP numéricas (como 192.0.2.1) que las computadoras usan para identificar y comunicarse con otros dispositivos en la red. DNS es esencial para el funcionamiento de Internet, ya que facilita la localización y el acceso a sitios web y otros recursos en línea.
- Cuando decimos que el DNS es descentralizado, nos referimos a que no hay un único servidor o una única entidad que controle toda la información del sistema. En cambio, la responsabilidad de manejar las consultas y almacenar la información está distribuida entre muchos servidores alrededor del mundo. 
- DNS (Sistema de Nombres de Dominio) es como una guía telefónica para Internet. Traducimos nombres fáciles de recordar, como www.google.com, en direcciones numéricas que las computadoras usan para encontrarse entre sí, como 172.217.11.174. Sin DNS, tendríamos que recordar largas series de números para visitar nuestros sitios web favoritos.
##### Componentes Clave de DNS
- Nombres de Dominio:
    - Estructura Jerárquica: Los nombres de dominio se estructuran en una jerarquía de varios niveles, separados por puntos. Un nombre de dominio está organizado como una dirección postal, con partes específicas que indican diferentes niveles.  Ejemplo: www.example.com.
    - Dominio de Nivel Superior (TLD): Como el país en una dirección postal, el último segmento, como .com, .org, .net.
    - Dominio de Segundo Nivel:  Como la calle en una dirección, Justo antes del TLD, como example.
    - Subdominio: Como el número de casa o departamento. Opcional y aparece antes del dominio de segundo nivel, como www.
- Servidores DNS:
    - Servidores Raíz: Los servidores raíz manejan las solicitudes iniciales de resolución de nombres y dirigen a los servidores TLD. Son como los conserjes del edificio que te indican en qué piso está la oficina que buscas.
    - Servidores TLD: Administran los dominios de nivel superior y redirigen a los servidores autoritativos de dominios específicos. Son como los recepcionistas de cada piso que te indican en qué oficina específica se encuentra lo que buscas.
    - Servidores Autorizativos: Contienen la información real sobre los nombres de dominio y sus correspondientes direcciones IP.  Son como las oficinas específicas que tienen la información exacta que necesitas.
    - Servidores de Caché (Resolutores): Almacenan temporalmente respuestas DNS recientes para acelerar futuras consultas.
- Proceso de Resolución DNS:
    - Consulta Recursiva: El resolutor de DNS actúa en nombre del cliente para realizar todas las consultas necesarias y devolver la respuesta final. Es como si le preguntaras a un amigo y él hiciera todas las averiguaciones por ti y te diera la respuesta final.
    - Consulta Iterativa: El cliente debe realizar cada paso de la consulta a varios servidores DNS hasta obtener la respuesta final.Es como si tú mismo fueras a cada oficina a preguntar hasta encontrar la información.


### Puerto
- Un puerto es un número  utilizado por el Protocolo de Control de Transmisión (TCP) y el Protocolo de Datagramas de Usuario (UDP) para identificar aplicaciones o servicios específicos en un dispositivo que usa una dirección IP en una red. 
- Los puertos permiten que un solo dispositivo maneje múltiples conexiones de red simultáneamente al diferenciar las comunicaciones destinadas a diferentes aplicaciones o servicios.
- Un puerto es como una puerta numerada en un edificio que tiene muchas habitaciones. Imagina que tu computadora es ese edificio, y cada aplicación o servicio es una habitación diferente. Los puertos ayudan a dirigir el tráfico de la red a la habitación (aplicación) correcta.
- Componentes Clave de los Puertos:
    - Puertos Bien Conocidos (0-1023): Reservados para servicios y aplicaciones estándar (por ejemplo, HTTP usa el puerto 80, HTTPS usa el puerto 443). Estas son las puertas principales del edificio, reservadas para servicios muy comunes y populares. Por ejemplo, la puerta 80 es para el servicio de internet (HTTP), y la puerta 443 es para conexiones seguras (HTTPS).
    - Puertos Registrados (1024-49151): Usados por aplicaciones de usuario o servicios registrados. Estas puertas pueden ser usadas por otras aplicaciones y servicios que necesitan su propia entrada.
    - Puertos Dinámicos o Privados (49152-65535): Usados temporalmente por aplicaciones para conexiones efímeras.  Estas puertas son usadas temporalmente por aplicaciones cuando se necesita una entrada rápida y temporal.
- Puertos en TCP y UDP:
    - TCP (Protocolo de Control de Transmisión): Proporciona una comunicación confiable, orientada a la conexión. Los puertos TCP se usan para servicios que requieren una entrega confiable de datos, como HTTP, FTP, y SSH. Es como un servicio de mensajería que garantiza que tus cartas (datos) lleguen en orden y sin pérdidas. Usa puertas (puertos) que aseguran la entrega confiable de datos.
    - UDP (Protocolo de Datagramas de Usuario): Proporciona una comunicación no confiable, sin conexión. Los puertos UDP se usan para servicios que no requieren una entrega confiable, como DNS, streaming de video, y VoIP. Es como enviar postales que pueden llegar en cualquier orden y algunas podrían perderse. Usa puertas (puertos) que no aseguran la entrega de datos, pero son más rápidas.
- Funcionamiento de los Puertos:
    - Encabezados de Paquetes: Los números de puerto se incluyen en los encabezados de los paquetes TCP o UDP. Esto permite que el sistema operativo de un dispositivo enrute el tráfico  al proceso o aplicación correcta. Equivale a la dirección de las puertas: Los números de puerto están escritos en las etiquetas de los paquetes de datos, lo que permite a la computadora saber a qué habitación (aplicación) dirigir los datos.
    - Sockets: Un socket es una combinación de una dirección IP y un número de puerto, lo que permite identificar una conexión específica. Por ejemplo, un socket TCP se define como una combinación de una dirección IP, un puerto de origen y un puerto de destino. Un socket es como una combinación de una dirección postal y una puerta específica, permitiendo identificar una conexión exacta. Por ejemplo, un socket TCP se define como una combinación de una dirección IP, una puerta de origen y una puerta de destino.

##### ¿Para Qué Sirven los Puertos?
- Identificación de Servicios: Los puertos permiten que diferentes servicios y aplicaciones se ejecuten simultáneamente en una sola dirección IP. Cada servicio se identifica y accede a través de su número de puerto específico.
- Gestión de Conexiones: Los puertos ayudan a gestionar múltiples conexiones de red al mismo tiempo. Por ejemplo, puedes estar navegando por la web (HTTP en el puerto 80) mientras escuchas música en streaming (puerto diferente) y revisas tu correo electrónico (IMAP en el puerto 143 o 993).
- Seguridad: Los puertos también juegan un papel importante en la seguridad de la red. Los firewalls y otras herramientas de seguridad pueden bloquear o permitir tráfico basado en números de puerto, protegiendo así los servicios y aplicaciones de accesos no autorizados.


#### ¿Qué Significa Mapear un Puerto? 
- Mapear un puerto, también conocido como port forwarding o redirección de puertos, es el proceso de configurar un dispositivo de red, como un enrutador, para que redirija el tráfico entrante destinado a un puerto y IP específico  a un puerto y dirección IP interno en una red privada.
- Mapear un puerto es como configurar una puerta especial en tu edificio (red) que redirige a las personas (datos) que vienen a esa puerta a una habitación específica dentro del edificio.
##### ¿Cómo Funciona el Mapeo de Puertos?
1. Configuración del Enrutador:
    - Entrada de Redirección: Configuras una entrada en el enrutador que especifica qué tráfico entrante en un puerto particular debe ser redirigido a una dirección IP interna y un puerto interno específico.
    - Regla de Redirección: Por ejemplo, puedes configurar el enrutador para redirigir todo el tráfico entrante en el puerto 8080 de la IP pública del enrutador a la dirección IP interna 192.168.1.100 en el puerto 80.
    - Siguiendo la analogía: Le dices al portero (enrutador) que si alguien toca la puerta 8080 (un puerto específico), debe llevar a esa persona a la habitación 100 (una dirección IP interna) y entrar por la puerta de esa habitación (un puerto interno específico, como 80).
2. Proceso de Redirección:
    - Solicitud Entrante: Cuando una solicitud llega a la IP pública del enrutador en el puerto especificado (por ejemplo, puerto 8080). Imagina que alguien llega a la puerta principal del edificio (la IP pública) y toca la puerta 8080.
    - Redirección Interna: El enrutador toma esa solicitud y la redirige al dispositivo interno configurado (por ejemplo, 192.168.1.100) en el puerto correspondiente (por ejemplo, puerto 80). El portero (enrutador) sabe que debe llevar a esa persona a la habitación 100 (dirección IP interna) y asegurarse de que entre por la puerta correcta de esa habitación (puerto 80).
    - Respuesta: La respuesta del dispositivo interno sigue el camino inverso: pasa por el enrutador y vuelve al origen de la solicitud. Cuando la habitación 100 responde, el portero (enrutador) lleva la respuesta de vuelta a la entrada principal para que la persona que tocó la puerta 8080 reciba la respuesta.


##### ¿Para Qué Sirve Mapear un Puerto?
- Acceso Remoto a Servicios Internos: Permite que los dispositivos externos (fuera de tu red local) accedan a servicios y aplicaciones dentro de tu red local. Por ejemplo, puedes acceder a una cámara de seguridad en tu casa desde tu teléfono móvil cuando estás fuera.
- Alojamiento de Servicios: Si estás ejecutando un servidor web, servidor de juegos o cualquier otro tipo de servidor en tu red local, puedes hacer que sea accesible desde Internet mapeando el puerto correspondiente.
- Solución de Problemas de Conexión: En algunos casos, puede ser necesario mapear puertos para solucionar problemas de conexión con ciertas aplicaciones o servicios que requieren acceso específico a puertos.


## allowPublicKeyRetrieval 
- allowPublicKeyRetrieval es una opción de configuración que se puede usar en la cadena de conexión al conectar una aplicación Node.js a una base de datos MySQL. Esta opción permite la recuperación de la clave pública del servidor MySQL cuando se utiliza la autenticación basada en la clave pública.
- En MySQL, si se está utilizando la autenticación con claves públicas, el cliente necesita la clave pública del servidor para establecer una conexión segura. Por razones de seguridad, la recuperación de esta clave pública está deshabilitada por defecto. Sin embargo, en ciertos entornos, puede ser necesario habilitar esta opción.
- Es una opción en las cadenas de conexión de MySQL que permite al cliente recuperar la clave pública del servidor MySQL si esta es necesaria para la autenticación.
- Contexto:
    - Autenticación con Clave Pública: MySQL puede utilizar autenticación basada en claves públicas para asegurar las conexiones entre el cliente y el servidor.
    - Seguridad: De forma predeterminada, la recuperación de la clave pública está deshabilitada por razones de seguridad. Esto evita que la clave pública del servidor sea expuesta innecesariamente.
    - Configuración: Al establecer una conexión a MySQL desde una aplicación Node.js usando mysql2 o un cliente similar, puedes incluir allowPublicKeyRetrieval: true en la configuración de la conexión para permitir la recuperación de la clave pública si es necesario.
#### Analogía
- Imagina que tienes un club privado muy exclusivo (el servidor MySQL) y quieres entrar (conectar tu aplicación Node.js a la base de datos). Para entrar, necesitas una tarjeta de miembro especial (la clave pública) que te permita identificarte y demostrar que tienes permiso para ingresar.

##### Situación sin allowPublicKeyRetrieval:
- Normalmente, el club no entrega tarjetas de miembro a cualquiera por razones de seguridad. Solo los miembros conocidos ya tienen sus tarjetas (claves públicas) de antemano. Esto es para evitar que extraños obtengan las tarjetas y traten de entrar.

##### Situación con allowPublicKeyRetrieval:
- Imagina que, en algunos casos, el club permite a los nuevos miembros potenciales (nuevos clientes) pedir una tarjeta de miembro directamente en la puerta. Esto es porque, para ciertos nuevos miembros, es más seguro y conveniente recibir la tarjeta en el momento en lugar de haberla recibido previamente.
- allowPublicKeyRetrieval es como una política del club que permite que los nuevos visitantes (clientes) pidan una tarjeta de miembro (clave pública) directamente en la puerta (cuando se conectan al servidor MySQL). Esto facilita la entrada, especialmente si el nuevo miembro no tenía una tarjeta antes.


#### Uso en una cadena de conexión

```js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test',
  password: 'password',
  ssl: {
    rejectUnauthorized: true
  },
  allowPublicKeyRetrieval: true
});

```
:::tip Observación
- En este ejemplo, la opción allowPublicKeyRetrieval: true está incluida en la configuración de la conexión. Esto permite al cliente recuperar la clave pública del servidor MySQL si es necesario para la autenticación.
:::

##  Plantillas Go (Golang templates) 
- Las plantillas en Go son una forma poderosa de generar contenido dinámico a partir de datos estructurados. 
- Go proporciona dos paquetes principales para trabajar con plantillas: text/template y html/template. El primero se usa para generar texto sin formato, y el segundo se usa para generar HTML seguro.
- Componentes Clave:
    - Definición de Plantilla: Una plantilla en Go se define con marcadores de posición, también llamados acciones, que luego se reemplazan con datos específicos en tiempo de ejecución.
    - Parsear Plantilla: El contenido de la plantilla se analiza (parsea) para crear un objeto de plantilla.
    - Datos: Un conjunto de datos que se pasará a la plantilla para reemplazar los marcadores de posición.
    - Ejecución de Plantilla: La plantilla se ejecuta con los datos proporcionados, generando el contenido final.

#### Analogía
- Imagina que estás organizando una fiesta y necesitas enviar invitaciones personalizadas a cada uno de tus amigos. En lugar de escribir cada invitación desde cero, decides crear una plantilla de invitación que puedes rellenar con los detalles específicos de cada amigo.
- Creas una plantilla con espacios en blanco para el nombre del invitado, la fecha y la hora de la fiesta. Algo así como:
```cs
Hola [Nombre],

Te invito a mi fiesta de cumpleaños el [Fecha] a las [Hora].

¡Espero verte allí!

Saludos,
[Tu Nombre]

```
- Para cada amigo, solo necesitas rellenar los espacios en blanco con la información específica.
- Por ejemplo para Juan:
```cs
Hola Juan,

Te invito a mi fiesta de cumpleaños el 10 de julio a las 6 PM.

¡Espero verte allí!

Saludos,
Carlos

```
- En Golang, las plantillas funcionan de manera similar a tu plantilla de invitación. Las plantillas te permiten definir un formato general con marcadores de posición que puedes rellenar dinámicamente con datos específicos.
#### Ejemplo Técnico Paso a Paso:
##### 1- Definir una Plantilla
- Una plantilla en Go se define como una cadena con acciones delimitadas por {{  }}.
```go
const tmpl = `Hello, {{.Name}}! Welcome to {{.Place}}.`
```
##### 2- Definir una Plantilla
- Usamos el paquete text/template para crear una nueva plantilla y analizar (parsear) su contenido.
```go
package main

import (
    "os"
    "text/template"
)

func main() {
    // Definir la plantilla como una cadena
    const tmpl = `Hello, {{.Name}}! Welcome to {{.Place}}.`

    // Crear una nueva plantilla y parsear su contenido
    t, err := template.New("greeting").Parse(tmpl)
    if err != nil {
        panic(err)
    }

    // Definir los datos que se pasarán a la plantilla
    data := struct {
        Name  string
        Place string
    }{
        Name:  "Alice",
        Place: "Wonderland",
    }

    // Ejecutar la plantilla con los datos
    err = t.Execute(os.Stdout, data)
    if err != nil {
        panic(err)
    }
}

```
##### 3- Ejecutar la Plantilla
- Al ejecutar la plantilla con los datos proporcionados, se generan los resultados finales con los marcadores de posición reemplazados por los valores correspondientes.
```shell
Hello, Alice! Welcome to Wonderland.
```

##### Detalles Técnicos
##### Definición de Marcadores de Posición:
- {{.Name}}: Hace referencia al campo Name en los datos pasados.
- {{.Place}}: Hace referencia al campo Place en los datos pasados.
##### Parsear Plantilla:
- template.New("greeting").Parse(tmpl): Crea un nuevo objeto de plantilla con el nombre "greeting" y analiza el contenido de tmpl.
##### Datos:
- Definimos una estructura con los campos Name y Place que se utilizarán para reemplazar los marcadores de posición en la plantilla.
##### Ejecución de Plantilla:
- t.Execute(os.Stdout, data): Ejecuta la plantilla t usando data y escribe el resultado en os.Stdout (la salida estándar).

## Client-Side Rendering (CSR)
- El Client-Side Rendering (CSR) es una técnica en el desarrollo web donde el navegador del cliente es responsable de generar y renderizar el contenido de la aplicación. En lugar de recibir HTML pre-renderizado desde el servidor, el navegador descarga un archivo HTML mínimo y los archivos JavaScript necesarios para construir la interfaz de usuario en el lado del cliente.
#### Proceso de CSR
- Carga Inicial: Al iniciar la aplicación, el navegador recibe un HTML mínimo junto con archivos JavaScript, CSS y otros recursos necesarios.
- Renderizado en el Cliente: El JavaScript ejecutado en el navegador construye y manipula el Document Object Model (DOM) para generar la interfaz de usuario.
- Interactividad: Todas las interacciones del usuario, como hacer clic en botones o enlaces, se manejan en el lado del cliente, a menudo utilizando técnicas como AJAX para comunicarse con el servidor y actualizar el contenido dinámicamente sin recargar la página.
#### Ventajas de CSR
- Interactividad Fluida: Las aplicaciones CSR pueden proporcionar una experiencia de usuario muy interactiva y fluida, ya que las actualizaciones de la interfaz de usuario se manejan directamente en el cliente sin necesidad de recargar la página.
- Menor Carga en el Servidor: El servidor solo envía los archivos estáticos (HTML, JavaScript, CSS), reduciendo la carga y permitiendo que el cliente maneje la mayoría del procesamiento.
- Desarrollo Modular: CSR facilita la construcción de aplicaciones con componentes reutilizables y una arquitectura modular.
#### Desventajas de CSR
- SEO: Los motores de búsqueda pueden tener dificultades para indexar el contenido generado dinámicamente en el cliente, lo que puede afectar el SEO.
- Tiempo de Carga Inicial: La carga inicial puede ser más lenta, ya que el navegador necesita descargar y ejecutar los archivos JavaScript antes de mostrar el contenido.
- Accesibilidad: Los usuarios con dispositivos más antiguos o conexiones lentas pueden experimentar tiempos de carga más largos y una experiencia menos óptima.
#### Analogía
- Imagina construir una casa:
    - CSR (Client-Side Rendering): Recibes un plano básico y todos los materiales necesarios, y construyes la casa tú mismo en el lugar. Todo el trabajo de construcción se realiza en el sitio.
    - SSR (Server-Side Rendering): La casa ya está construida y terminada, y simplemente te la entregan lista para usar.

#### Ejemplo de Estructura de Proyecto en React
```plaintext
/CSRApp
├── public
│   ├── index.html
│   └── favicon.ico
├── src
│   ├── components
│   │   ├── Header.js
│   │   ├── Sidebar.js
│   │   └── MainContent.js
│   ├── pages
│   │   ├── Home.js
│   │   ├── About.js
│   │   └── Contact.js
│   ├── App.js
│   ├── index.js
│   └── App.css
└── package.json

```
:::tip Observación
- public/index.html: El archivo HTML mínimo que se carga inicialmente.
- src/components/: Componentes reutilizables como Header, Sidebar y MainContent.
- src/pages/: Páginas de la aplicación, cada una representada por un componente React.
- src/App.js: Componente raíz de la aplicación.
- src/index.js: Punto de entrada donde React monta la aplicación en el DOM.
- src/App.css: Archivo CSS para estilos globales.

:::