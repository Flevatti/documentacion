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
- En el contexto de una API (Interfaz de Programación de Aplicaciones), un "endpoint" se refiere a un punto final o una URL específica que se puede usar para realizar operaciones sobre recursos o servicios.
- En otras palabras, un endpoint es una interfaz expuesta por una API, a través de la cual los clientes pueden realizar solicitudes y obtener respuestas.
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