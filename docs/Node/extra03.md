---
sidebar_position: 10
---
# Extra #03
## Uso de la Carpeta "Service"
- La carpeta `service` en proyectos de Node.js y Express.js es una convención común utilizada para organizar el código. En ella se almacenan los archivos que contienen la lógica de negocio que puede ser utilizada en diferentes partes de la aplicación.
- Cada archivo representa un servicio dentro de la aplicación.

#### Función y Uso de la Carpeta "Service"
- Lógica de Negocio: Los archivos de la carpeta service se encargan de contener la lógica de negocio de la aplicación, como cálculos, validaciones y transformaciones de datos, separando estas tareas de los controladores y de la base de datos. Además, permiten exponer (hacer accesibles) solo los métodos necesarios, aplicando el principio de encapsulación.



:::tip Lógica de negocio
- La lógica de negocio es el conjunto de reglas, procesos y decisiones que definen cómo una aplicación o sistema debe funcionar para cumplir con los objetivos de la empresa o el propósito específico del software. Representa el "qué" y el "cómo":
    - "Qué": Son las acciones que la aplicación necesita realizar. Por ejemplo, en una tienda en línea, el "qué" podría ser calcular el precio total de una compra, aplicar un descuento, o verificar el stock. 
    - "Cómo": Es la manera en que esas acciones se llevan a cabo. Siguiendo con el ejemplo de la tienda en línea, el "cómo" sería la fórmula para calcular el precio total, las reglas específicas para aplicar el descuento (cuándo y cuánto), y los pasos para comprobar si hay suficiente stock disponible.
    - Es decir, la lógica de negocio define qué tareas son importantes para el negocio y cómo deben resolverse en el sistema.
- En una aplicación, la lógica de negocio se encarga de:
    - Procesar datos: Realiza cálculos, validaciones, transformaciones o combinaciones de datos que sean necesarios para el correcto funcionamiento de la aplicación.
    - Aplicar reglas específicas: Son las reglas o requisitos que la aplicación debe cumplir para funcionar correctamente en una situación específica. Por ejemplo, en un sistema bancario, la lógica de negocio puede incluir restricciones sobre la cantidad de dinero que se puede transferir entre cuentas.
    - Coordinar otras capas: La lógica de negocio es la encargada de coordinar la interacción entre la capa de presentación (front-end) y la capa de datos (base de datos).
    - Por ejemplo, si se trata de una aplicación de ventas en línea, la lógica de negocio podría incluir reglas sobre cómo calcular descuentos, cómo aplicar impuestos, verificar inventarios y procesar pagos.
- En resumen, la lógica de negocio define cómo el sistema debe comportarse para cumplir su propósito de manera efectiva y consistente con las necesidades del negocio.

:::
- División de la Lógica de Negocio:  Cada servicio se encarga de una tarea determinada, como realizar operaciones CRUD de una tabla especifica, aplicar reglas de negocio o manejar integraciones con servicios externos. Además, otros módulos no necesitan saber cómo funciona internamente el servicio, sino únicamente utilizar los métodos que este expone.
- Reutilización y Modularidad: Al separar la lógica de negocio en servicios independientes, el código puede reutilizarse en distintas partes de la aplicación. Por ejemplo, si una operación compleja se usa en varios controladores, puede colocarse dentro de un servicio y ser utilizada desde cada controlador. Esto evita repetir código y facilita el mantenimiento de la aplicación.
- Independencia y Coherencia: Cada servicio opera de manera independiente, lo cual promueve la coherencia y la separación de responsabilidades en tu código. Los servicios no necesitan conocer detalles internos de otros servicios o de cómo se maneja la interacción con la base de datos; simplemente exponen métodos que pueden ser invocados desde otras partes de la aplicación.
- Facilidad de Testing: Los servicios  pueden ser fácilmente probados de forma unitaria. Puedes escribir pruebas específicas para cada servicio para asegurarte de que cumple con las expectativas y maneja correctamente los diferentes casos de uso y situaciones.
- Interacción con la Capa de Datos: Los servicios suelen interactuar con los modelos o repositorios de datos para realizar operaciones CRUD (crear, leer, actualizar, eliminar) en la base de datos. Al encapsular  estas operaciones en servicios, los controladores no necesitan saber cómo se accede o manipulan los datos, solo necesitan invocar los métodos del servicio.
:::tip Capa de datos
- La capa de datos se refiere a la parte de la aplicación que interactúa directamente con la base de datos o cualquier fuente de datos. Es responsable de almacenar, recuperar y manipular los datos. Esto puede incluir modelos o repositorios que realizan operaciones CRUD (crear, leer, actualizar y eliminar) sobre la base de datos.
- La capa de datos se encarga de manejar cómo esos datos se almacenan o se obtienen de manera eficiente.
:::
- Reutilización de Código: Los servicios permiten reutilizar código en diferentes partes de la aplicación. Por ejemplo, si varios controladores necesitan realizar una operación similar, pueden invocar el mismo método del servicio, reduciendo la duplicación de código.
- Separación de Responsabilidades: Al utilizar servicios, se logra una clara separación de responsabilidades entre las diferentes capas de la aplicación (controladores, servicios, y datos). Esto sigue el principio de responsabilidad única (Single Responsibility Principle) de las arquitecturas limpias.

#### Ejemplo de Estructura de Proyecto con Carpeta "Service"
```plaintext
/my-app
├── controllers
│   ├── userController.js
├── services
│   ├── userService.js
├── models
│   ├── userModel.js
├── routes
│   ├── userRoutes.js
├── app.js
├── package.json
└── README.md

```
:::tip Observación
- controllers/: Contiene los controladores que manejan las solicitudes HTTP y responden a los clientes.
- services/: Contiene los servicios que encapsulan  la lógica de negocio.
- models/: Contiene los modelos que interactúan con la base de datos.
- routes/: Contiene los archivos de rutas que definen los endpoints de la API.

:::
### Libs vs Utils vs Services

#### Carpeta `libs`
- Esta carpeta, abreviatura de "biblioteca", contiene código bien estructurado y reutilizable que, en muchos casos, podría publicarse como un paquete o módulo independiente.
- Aquí se incluyen piezas de código más extensas y elaboradas, como una biblioteca personalizada para la manipulación de fechas, una biblioteca matemática o una copia local de un paquete de terceros.
- Suelen ser conjuntos de funciones o clases que resuelven un problema específico y están diseñadas para ser utilizadas en diferentes partes de la aplicación, e incluso en otros proyectos.
- Las bibliotecas son más completas que las utilidades (`utils`). Piensa en ellas como mini paquetes dentro de tu aplicación que podrían funcionar de forma independiente.
#### Carpeta `utils`
- Abreviatura de "utilidades", esta carpeta sirve para agrupar pequeñas funciones genéricas que pueden utilizarse en distintas partes del código, o fragmentos de lógica que no pertenecen a un módulo específico.
- Son funciones sin estado, es decir, no utilizan información externa ni dependen de datos que puedan cambiar con el tiempo. Siempre devuelven el mismo resultado si reciben los mismos parámetros.
- Aquí se incluyen funciones sencillas y sin estado, como formatear fechas, generar identificadores aleatorios o analizar URLs. Estas funciones suelen ser específicas de cada proyecto y no están lo suficientemente completas como para formar una biblioteca independiente.
- Se utilizan para código que se desea reutilizar, pero que no es lo suficientemente complejo ni amplio como para convertirse en una biblioteca. Si la carpeta de utilidades crece demasiado y se vuelve desordenada, podría ser una señal de que conviene replantear su estructura.
#### Carpeta `services`
- Esta carpeta contiene la lógica de negocio y las interacciones con servicios externos; básicamente, los "servicios" que proporciona o consume tu aplicación.
- Aquí se incluye todo aquello que interactúa con APIs, bases de datos, autenticación o sistemas externos. Por ejemplo, un `userService` que recupera o guarda datos de usuario, o un `emailService` que envía correos electrónicos.
- Los servicios se encargan de tareas específicas. En general, manejan la comunicación con el exterior de la aplicación (como APIs o bases de datos) y la lógica más importante del negocio. Se enfocan en realizar acciones concretas.

#### Resumen

| Tipo | En una palabra / idea clave | Qué hace |
|------|----------------------------|----------|
| Bibliotecas (`libs`) | Módulos independientes | Bloques de código completos que pueden usarse en varios proyectos |
| Utilidades (`utils`) | Funciones pequeñas | Funciones simples para tareas comunes |
| Servicios (`services`) | Lógica de la aplicación | Manejan la lógica e interactúan con servicios externos (APIs, bases de datos, etc.) |

**Regla rápida:**

- ¿Es un mini paquete o módulo? → bibliotecas  
- ¿Es una función simple? → utils  
- ¿Es lógica o interactúa con algo externo? → services




## Modelo Vista Controlador (MVC)
- El patrón Modelo Vista Controlador (MVC) es un enfoque arquitectónico que separa una aplicación en tres componentes principales: el Modelo, la Vista y el Controlador. Cada uno de estos componentes tiene responsabilidades específicas que ayudan a organizar y estructurar el código de manera modular y escalable.
- Modelo Vista Controlador (MVC) es un patrón de diseño arquitectónico ampliamente utilizado en el desarrollo de aplicaciones web y de software. Se divide en tres componentes principales:
    - Modelo: El Modelo representa los datos y la lógica de negocio de la aplicación. Es responsable de interactuar con la base de datos, realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) y aplicar las reglas de negocio. El Modelo no se preocupa por cómo se presentan los datos al usuario ni cómo se gestionan las interacciones con la interfaz de usuario.
    - Vista: La Vista es la capa de presentación que muestra la interfaz de usuario al usuario final. Se encarga de renderizar la información proveniente del Modelo de una manera que sea comprensible y accesible para el usuario. La Vista no realiza lógica de negocio ni interactúa directamente con la base de datos; su función principal es presentar la información de manera visual y responder a las acciones del usuario.
    - Controlador: El Controlador actúa como intermediario entre el Modelo y la Vista. Recibe las interacciones del usuario a través de la interfaz de usuario y las traduce en acciones que afectan al Modelo (como solicitudes para guardar o actualizar datos). Después de que el Modelo ha realizado las operaciones necesarias, el Controlador actualiza la Vista para reflejar los cambios al usuario. El Controlador también gestiona la navegación y el flujo de la aplicación.
#### Modelo
- Representa los datos y la lógica de negocio de la aplicación.
- Gestiona el acceso a los datos y las operaciones sobre ellos, como la lectura, escritura, validaciones y cálculos.
- No se preocupa por cómo se presentan los datos o cómo interactúa el usuario con ellos.

#### Vista
- Es la interfaz de usuario con la que interactúa el usuario final.
- Se encarga de presentar los datos del modelo de una manera adecuada para su visualización.
- Responde a las acciones del usuario y los eventos de la interfaz.

#### Controlador
- Actúa como intermediario entre el modelo y la vista.
- Recibe las interacciones del usuario desde la vista y las traduce en acciones sobre el modelo.
- Actualiza la vista con los cambios en el modelo y gestiona la lógica de navegación y flujo de la aplicación.

#### Analogía
- Imagina una aplicación de pedidos en línea:
    - Modelo: Es el almacén de datos y reglas de negocio. Incluye la gestión de inventario, cálculo de precios y procesamiento de pedidos en el sistema de gestión de base de datos.
    - Vista: Es la interfaz que ve el usuario. Puede ser la página web donde se muestran los productos con imágenes, descripciones y precios, y donde el usuario hace clic en "Agregar al carrito".
    - Controlador: Es el sistema de pedidos que recibe las acciones del usuario (como agregar productos al carrito), se comunica con el modelo (para verificar la disponibilidad del producto y actualizar el inventario) y actualiza la vista (mostrando el carrito actualizado al usuario).
#### Ejemplo de Implementación en Node.js con Express.js
```plaintext
/my-app
├── controllers
│   ├── productController.js
├── models
│   ├── productModel.js
├── views
│   ├── productView.ejs
├── routes
│   ├── productRoutes.js
├── app.js
├── package.json
└── README.md
```
:::tip Observación
- controllers/: Contiene los controladores que manejan las solicitudes HTTP y las respuestas.
- models/: Contiene los modelos que interactúan con la base de datos.
- views/: Contiene las vistas que son renderizadas y enviadas al cliente.
- routes/: Contiene los archivos de rutas que definen los endpoints de la API.
:::

## Microfrontends
- Microfrontends es un enfoque arquitectónico que consiste en dividir una aplicación frontend en pequeñas partes independientes, cada una desarrollada y desplegada de manera independiente. Cada microfrontend representa una funcionalidad específica de la interfaz de usuario y puede ser desarrollado por equipos diferentes utilizando tecnologías y frameworks diferentes. Esto permite a los equipos trabajar de manera independiente en sus respectivas partes del frontend, sin interferir con otros equipos, lo cual es especialmente útil en grandes organizaciones o proyectos complejos.
#### Componentes Independientes
-  En un entorno de microfrontends, cada parte de la interfaz de usuario se desarrolla como un componente separado y autónomo. Cada microfrontend puede tener su propio ciclo de vida de desarrollo, implementación y escalado. Esto facilita la actualización y mantenimiento sin afectar otras partes de la aplicación, lo que es crucial para aplicaciones grandes y complejas donde diferentes equipos trabajan en funcionalidades específicas.
#### Comunicación y Coordinación
- Los microfrontends se comunican entre sí a través de interfaces bien definidas y contratos de API. Pueden compartir estado global utilizando técnicas como eventos o servicios compartidos. La coordinación entre los microfrontends puede ser gestionada mediante un enrutamiento dinámico en el lado del cliente o mediante un gateway que dirige las solicitudes a los microservicios adecuados según las URL o los eventos del usuario.
#### Ejemplo de Implementación
- Un ejemplo común de microfrontends es una aplicación de comercio electrónico donde cada sección (como el catálogo de productos, el carrito de compras, y el proceso de pago) se desarrolla y despliega como un microfrontend separado. Cada equipo puede trabajar de forma independiente en su sección, utilizando las tecnologías más adecuadas para sus necesidades. Esto no solo mejora la eficiencia del desarrollo, sino que también facilita la escalabilidad y el mantenimiento a largo plazo de la aplicación.

#### Analogía
- Imagina una tienda departamental donde diferentes secciones de la tienda, como electrónica, ropa y comestibles, son gestionadas por equipos independientes con diferentes estilos de gestión y métodos de organización. Cada sección tiene su propio personal especializado que maneja sus productos y servicios de manera autónoma, pero todos ellos contribuyen a la experiencia general del cliente en la tienda. De manera similar, los microfrontends permiten que equipos de desarrollo trabajen de manera independiente en diferentes partes de una aplicación frontend, cada uno optimizado para sus propios requisitos y tecnologías preferidas.

#### Ejemplo de Implementación
- En un proyecto de microfrontends utilizando React y Vue.js, podrías tener la siguiente estructura:
```plaintext
/my-app
├── microfrontend1
│   ├── src
│   │   ├── components
│   │   │   ├── Microfrontend1Component1.vue
│   │   │   ├── Microfrontend1Component2.vue
│   │   ├── App.vue
│   │   ├── main.js
│   ├── package.json
├── microfrontend2
│   ├── src
│   │   ├── components
│   │   │   ├── Microfrontend2Component1.jsx
│   │   │   ├── Microfrontend2Component2.jsx
│   ├── package.json
├── gateway
│   ├── src
│   │   ├── App.jsx
│   │   ├── MainRouter.jsx
│   ├── package.json
└── README.md

```
:::tip Observación
- microfrontend1/ y microfrontend2/: Representan dos microfrontends diferentes desarrollados en Vue.js y React respectivamente. Cada uno tiene su propio conjunto de componentes y lógica de negocio específica.
- gateway/: Es el gateway o enrutador principal que gestiona la navegación y la integración entre los diferentes microfrontends. Puede utilizar enrutamiento dinámico en el lado del cliente para cargar dinámicamente los microfrontends según la URL solicitada por el usuario.
- En este ejemplo, cada microfrontend puede ser desarrollado y desplegado de manera independiente, utilizando herramientas y frameworks que mejor se adapten a los requisitos de cada equipo. El gateway coordina la navegación y la integración entre los microfrontends, ofreciendo una experiencia de usuario cohesiva y optimizada.
:::