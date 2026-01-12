---
sidebar_position: 4
---
# DOM 

### Dom / Dom Real / Arbol Dom
- El DOM Real (Document Object Model) es una representación de la estructura de un documento HTML o XML en la que los navegadores web crean un árbol de nodos que representan los elementos HTML  del documento. Este árbol permite que los scripts y el navegador interactúen con el contenido y la estructura de la página. Cuando se modifica el DOM Real, el navegador tiene que volver a renderizar la página, lo que puede ser costoso en términos de rendimiento, especialmente si hay muchas modificaciones.
- Piensa en una página web como una casa. Cada parte de la casa (puertas, ventanas, habitaciones) representa diferentes elementos en la página web, como textos, imágenes y botones.
#### El DOM Real como la Estructura de la Casa
- El DOM Real es como el plano de la casa que tiene una representación detallada de cada habitación y elemento:
    -	Habitaciones = Secciones de la página (como encabezados, párrafos, imágenes).
    -	Puertas y ventanas = Elementos HTML que permiten la interacción, como botones y enlaces.
- Cuando construyes o remodelas la casa, necesitas crear o actualizar el plano para asegurarte de que todo esté en orden. Cada vez que cambias algo (como agregar una habitación o mover una ventana), tienes que actualizar el plano de la casa. Esto es similar a cómo el navegador actualiza el DOM Real cada vez que se realizan cambios en la página.

#### ¿Qué pasa en el Navegador?
1.	Carga de la Página: Cuando abres un sitio web, el navegador descarga el código HTML, que es como un conjunto de instrucciones sobre cómo debe verse la página.
2.	Creación del DOM Real: A partir de ese código HTML, el navegador crea el DOM Real, que es una representación de la estructura de todos los elementos HTML de la página (textos, imágenes, botones, etc.). Piensa en esto como el plano de una casa que indica dónde están cada una de las habitaciones, que contienen y cómo se conectan.
3.	Renderizado: El navegador utiliza el DOM Real para renderizar (o dibujar) la página en la pantalla. Esto significa que toma el plano y lo convierte en algo visual que puedes ver e interactuar. Por ejemplo, muestra las imágenes, coloca los textos en sus lugares y dibuja los botones.
4.	Interacción del Usuario: Cuando interactúas con la página (por ejemplo, haciendo clic en un botón o desplazándote hacia abajo), puede que el contenido de la página necesite cambiar. Si haces clic en un botón para ver más información, el navegador puede modificar el DOM Real.
5.	Actualización del DOM Real: Si decides agregar, quitar o cambiar algo en la página, el navegador actualiza el DOM Real para reflejar esos cambios. Luego, vuelve a renderizar la página para que veas la nueva información.

#### Ejemplo
- Imagina que tienes un archivo HTML que representa una pequeña lista de tareas:
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Lista de Tareas</title>
</head>
<body>
    <h1>Mis Tareas</h1>
    <ul id="tareas">
        <li>Comprar frutas</li>
        <li>Hacer ejercicio</li>
        <li>Estudiar programación</li>
    </ul>
    <button id="agregar">Agregar Tarea</button>
    <input type="text" id="nueva-tarea" placeholder="Nueva tarea">
    
    <script>
        // Interacción con el DOM
        document.getElementById('agregar').onclick = function() {
            var nuevaTarea = document.getElementById('nueva-tarea').value;
            if (nuevaTarea) {
                var li = document.createElement('li'); // Crear un nuevo elemento de lista
                li.textContent = nuevaTarea; // Establecer el texto del nuevo elemento
                document.getElementById('tareas').appendChild(li); // Agregarlo a la lista
                document.getElementById('nueva-tarea').value = ''; // Limpiar el campo de entrada
            }
        };
    </script>
</body>
</html>

```
##### Cuando se carga esta página, el navegador crea el DOM a partir del HTML. La estructura del DOM sería algo como esto:
-	Nodo &lt;html>
    -	Nodo &lt;head>
        -	Nodo &lt;title> (Mis Tareas)
    -	Nodo &lt;body>
        -	Nodo &lt;h1> (Mis Tareas)
        -	Nodo &lt;ul> (Lista de tareas)
            -	Nodo &lt;li> (Comprar frutas)
            -	Nodo &lt;li> (Hacer ejercicio)
            -	Nodo &lt;li> (Estudiar programación)
        -	Nodo &lt;button> (Agregar Tarea)
        -	Nodo &lt;input> (Nueva tarea)

##### Interración
-	Cuando haces clic en el botón "Agregar Tarea", el script JavaScript se ejecuta:
    -	Captura el valor del campo de entrada (la nueva tarea).
    -	Crea un nuevo elemento &lt;li> (lista) en el DOM para la nueva tarea.
    -	Agrega este nuevo &lt;li> a la lista existente (&lt;ul>).
    -	Limpia el campo de entrada para que puedas escribir otra tarea.

#### Nodos
- Un nodo representa un elemento HTML, un atributo o un fragmento de texto en un documento HTML o XML. Los nodos se utilizan en el DOM y permiten que el navegador y los scripts interactúen con la estructura de la página web. 


#### Tipos de Nodos en el DOM
1.	Nodos de Elemento: Representan los elementos HTML en el documento. Cada etiqueta HTML, como &lt;div>, &lt;p>, &lt;h1>, &lt;ul>, etc., es un nodo de elemento.
    -	Ejemplo: En &lt;p>Hola&lt;/p>, el &lt;p> es un nodo de elemento.
2.	Nodos de Texto: Representan el texto dentro de un nodo de elemento. Cada fragmento de texto en un elemento se convierte en un nodo de texto.
    -	Ejemplo: En &lt;p>Hola&lt;/p>, "Hola" es un nodo de texto.
3.	Nodos de Atributo: Representan los atributos de un nodo de elemento, como id, class, src, etc. Aunque no se representan como nodos separados en la jerarquía, son parte del nodo de elemento y se pueden manipular.
    -	Ejemplo: En &lt;img src="imagen.jpg" alt="Descripción">, src y alt son atributos del nodo &lt;img>.
4.	Nodos de Comentario: Representan comentarios en el código HTML, que no se muestran en la página web pero están presentes en el código fuente.
    -	Ejemplo: <!-- Este es un comentario --> es un nodo de comentario.
5.	Nodos Documentales: Representan el documento completo y son el nodo raíz del DOM. 

- Los nodos pueden contener otros nodos, creando así una estructura jerárquica. La estructura jerárquica de nodos que se forma se conoce como Document Object Model (DOM) o algunos lo llaman Árbol de nodos.


#### Nodo Document y Elemento Raíz
- En el Document Object Model (DOM), hay un nodo especial llamado Document y, debajo de él, hay un nodo que representa el elemento raíz, que es &lt;html> en un documento HTML. 
- Nodo Document:
    -	Este es el nodo raíz (el nodo superior) del árbol DOM y representa el documento completo.
    -	Sirve para interactuar con el DOM y se accede a través del objeto document en JavaScript.
    -	Contiene información sobre el documento. 
-  Elemento Raíz (&lt;html>):
    -	Este es el primer nodo hijo del nodo Document.
    -	Representa el elemento &lt;html> en el archivo HTML y es el contenedor principal de todo el contenido de la página.
    -	A partir de este modo, se pueden acceder a otros nodos como &lt;head>, &lt;body>, y todos los demás elementos dentro de ellos.









- Ejemplo de un Árbol de nodo:

![ARBOL DOM](https://3.bp.blogspot.com/-08aop2nBOVc/We5H68rEhfI/AAAAAAAABFY/tLGK4qmKgNQmOCgItANKxZf5rNS0MKMswCPcBGAYYCw/s1600/arbolDOM.gif)
## Document
- Document viene del [objeto global de Javascript](./basico4.md#objeto-global) representa el documento HTML de la pagina y por lo tanto con este se puede manipular el DOM  o incluso obtener información de este:


```js
console.log(document);
```
### Propiedades

[Algunas propiedades](https://developer.mozilla.org/es/docs/Web/API/Document#properties)

```js
console.log(document.head);
console.log(document.title);
console.log(document.body);
console.log(document.domain);

```


- Podemos obtener referencias a nodos de elementos utilizando los métodos del objeto document. Estos métodos nos permiten seleccionar elementos de diferentes maneras según nuestras necesidades:
```js
  document.getElementById()  //Obtiene un elemento por su ID.
  document.getElementsByClassName()  //Obtiene todos los elementos que contenga las “clases” especificadas 
  document.getElementsByTagName()  //Obtiene todos los elementos node que corresponden a una etiqueta HTML especifica.
  document.querySelector()  //Selecciona el primer elemento que coincide con el selector CSS.
  document.querySelectorAll()  //Selecciona todos los elementos que coinciden con el selector CSS.
```





## [Console Table](https://developer.mozilla.org/es/docs/Web/API/Console/table)

### Metodos
[Algunos metodos](https://developer.mozilla.org/es/docs/Web/API/Document#methods)

```js
// Para obtener referencias a un node Elemento
document.getElementsByClassName(String className)
document.getElementsByTagName(String tagName)
document.getElementById(String id)
document.querySelector(String selector)
document.querySelectorAll(String selector)

// Crea un fragmento
document.createDocumentFragment()
// Para crear un node Elemento
document.createElement(String name)

```

:::tip
- Se puede usar la propiedad classlist para manipular las clases (eliminar , añadir)

- [className manipula todas las clases (como un todo), classlist las separa antes de manipularla (podes manipular la clase activo sin necesidad de afectar la clase inactivo).](https://stackoverflow.com/questions/69361432/difference-between-classname-and-classlist#:~:text=Using%20%22classList%22%2C%20you%20can,wipe%20out%20all%20of%20them).)
:::

## getElementById()

-  Devuelve una referencia de un nodo elemento  por su ID. Con esa referencia podemos manipular el elemento en el DOM.
- Como parámetro recibe un String con el nombre del id.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
 <h1 id="tituloWeb"> Lorem, ipsum dolor. </h1>


     <script src="app.js"></script>
</body>
</html>

```

```js
console.log(document.getElementById("tituloWeb"));
console.log(document.getElementById("tituloWeb"));
console.log(document.getElementById("tituloWeb").textContent);
console.log(document.getElementById("tituloWeb").innerHTML);

```
## Propiedad textContent
- La propiedad texContent te devuelve el texto del elemento.
- Tambien sirve para asignar un nuevo texto
## Propiedad innerHTML
- La propiedad innerHTML te devuelve el texto del elemento, te permite insertar código html pero no es recomendable porque podemos tener inyecciones.
- Hace lo mismo que textContent
- Acepta codigo html

## Etiqueta script
la etiqueta <script></script> debe ir antes de la etiqueta cierre del body así primero carga todo el DOM para luego poder manipularlo. En caso contrario al querer acceder a un elemento te dará null.

En este caso te da null:
```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="app.js"></script> <!-- Qué pasará?? -->
</head>

```
Pero si quieren dejar la etiqueta script aribba:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="app.js"></script>
</head>
<body>
 <h1 id="tituloWeb"> Lorem, ipsum dolor. </h1>


    
</body>
</html>

```
## DOMContentLoaded(EVENTO)
Se ejecuta cuando el navegador HTML está completamente cargado y el árbol DOM está construido, pero es posible que los recursos externos como &lt;img> y hojas de estilo aún no se hayan cargado. 
```js

document.addEventListener("DOMContentLoaded", () => {
    console.log(document.querySelector("h1"));
    console.log(document.querySelector("h1").textContent);
});

```
## Atributo defer
-	El atributo defer indica al navegador que no espere por el script. En lugar de ello, debe seguir procesando el HTML, construir el DOM. El script carga “en segundo plano” y se ejecuta cuando el DOM esta completo.
-	Los scripts con defer siempre se ejecutan cuando el DOM esta listo (pero antes del evento DOMContentLoaded).
-	defer no funciona igual en todos los navegadores.
- es nuevo y algunos navegadores no se pusieron de acuerdo en cómo funciona defer.
```html
	<!DOCTYPE html>
	<html lang="en">
	<head>
	    <meta charset="UTF-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    <title>Document</title>
	    <script src="app.js" defer></script>
	</head>
	<body>
	 <h1 id="tituloWeb"> Lorem, ipsum dolor. </h1>
	

	    
	</body>
	</html>

```

## querySelector()
Devuelve el primer nodo del documento que coincida con el selector CSS.

Parametro = Un String con selectores css

```html
<body>
 <h1 id="tituloWeb" class="text-primary"> Lorem, ipsum dolor. </h1>


 <script src="app.js" defer></script>
</body>

```

```js

console.log(document.querySelector("#tituloWeb"));
console.log(document.querySelector(".text-primary"));
console.log(document.querySelector("h1"));

```
Siempre selecciona al primero , ejemplo: 

```html
<body>
 <h1 id="tituloWeb" class="text-primary"> Lorem, ipsum dolor. </h1>

  <div class="container">
      <p class="text-danger">Lorem, ipsum dolor. 1</p>
      <p class="text-danger">Lorem, ipsum dolor. 2</p>
      <p class="text-danger">Lorem, ipsum dolor. 3</p>
  </div>

    <p class="text-danger">Esta fuera del container</p>
 <script src="app.js" defer></script>
</body>

```

```js
console.log(document.querySelector(".text-danger"));
```

## querySelectorAll()
- Devuelve todos los nodos del documento que coincida con el selector CSS.
- Parametro = Un String con selectores css
- Devuelve una NodeList (almacena un listado de Nodos).

```js
console.log(document.querySelectorAll(".text-danger"));
```

Ejemplo para seleccionar solo los párrafos del div

```js
console.log(document.querySelectorAll(".container .text-danger"));
```
##  querySelector vs getElementById
-	El método querySelector le permite recuperar un elemento mediante un selector CSS.
-	El método getElementById recupera un elemento por su ID.
-	Ambos métodos tienen una amplia compatibilidad con los navegadores. Debe optar por usar el método querySelector si necesita seleccionar elementos de una manera mas compleja. Si desea seleccionar un elemento por su ID, usar getElementById es una buena opción.
-	A menudo necesitará realizar selecciones más complejas en su HTML, y ahí es donde querySelector puede ser más útil; usarlo de manera constante también puede hacer que su código sea más fácil de leer para otros codificadores.
-	En otras palabras, el principal beneficio de usar querySelector o querySelectorAll es que podemos seleccionar elementos usando selectores CSS, lo que nos da una forma uniforme de manejar la selección de elementos, y eso lo convierte en una forma preferida de seleccionar elementos para muchos desarrolladores.
-	Si usa una herramienta como Babel para admitir navegadores más antiguos, entonces puede ser irrelevante, ya que las funciones más nuevas se pueden convertir a código compatible con versiones anteriores cuando compila su script.
-	En 800.000 selecciones por segundo, querySelector es aprox. 6% más lento.
- [mas info](https://beamtic.com/getelementbyid-vs-queryselector)

## Element
- Un Element es una referencia a un nodo elemento que podemos obtener con getElementById() , querySelector() , etc...

#### Métodos y propiedades generales
- Todos los nodos heredan de la clase “Element”, lo que significa que tienen varias propiedades y métodos comunes que te permiten manipularlos, por ejemplo:
    -	Propiedades comunes:
        -	nodeName: El nombre del nodo (por ejemplo, DIV, P).
        -	nodeType: El tipo del nodo, que es un número que representa el tipo de nodo (por ejemplo, 1 para un nodo de tipo Elemento).
        -	innerHTML: El contenido HTML dentro del nodo.
        -	outerHTML: El HTML completo del nodo, incluyendo la etiqueta misma.
        -	id: El identificador del elemento.
        -	classList: Permite manipular las clases CSS del elemento.
        -	style: Permite manipular el estilo en línea del elemento.
    -	Métodos comunes:
        -	setAttribute(): Establece un atributo de un elemento.
        -	getAttribute(): Obtiene el valor de un atributo de un elemento.
        -	appendChild(): Agrega un nodo hijo al nodo actual.
        -	removeChild(): Elimina un nodo hijo del nodo actual.
        -	cloneNode(): Clona el nodo, con o sin sus hijos.
        -	addEventListener(): Escucha un evento especifico.
        -	hasAttributes: Verifica si el elemento tiene o no algún atributo.





:::tip Info
- [link](https://developer.mozilla.org/es/docs/Web/API/Element)
- Propiedades de los elementos === Propiedades de Instancia
- Metodos de los elementos === Metodos de instancia
:::
#### Ejemplo

```js
const h1 = document.getElementById("tituloWeb");
//Muestra las clases
console.log(h1.className);
//Muestra la id
console.log(h1.id);
// Ver los estilos que tiene.
console.log(h1.style);
// Ver que etiqueta es
console.log(h1.tagName);
// Ver el texto
console.log(h1.textContent);

// Cambia el texto del elemento
h1.textContent = "nuevo texto desde js";

//manipular el css del elemento
// elemento.style.propiedadcss = "valor";
// si la propiedad tiene mas de una palabra , usa camelCase
h1.style.backgroundColor = "red";
h1.style.color = "white";

```

- En el contexto del DOM (Document Object Model) cada nodo Elemento implementa una interfaz. 
- Imagina que cada tipo de elemento HTML (como &lt;div>, &lt;input>, etc.) se representa como una clase en  programación orientada a objetos. Entonces para representar a un nodo en el DOM tenemos las siguientes clases:
    - Clase base “Node”: Representa cualquier Nodo en el DOM ya sea de texto, de comentario, de elemento, etc.
    - Clase “Element” (Hereda de Node): Es una subclase de “Node”. Representa todos los nodos de elementos HTML, como las etiquetas &lt;div>,&lt;p>, &lt;a>, etc. Los métodos y propiedades de esta clase son comunes en todos los elementos HTML.
    - Clases “específica” como  HTMLDivElement, HTMLInputElement, etc:
        - Cada tipo de elemento HTML (como &lt;div>, &lt;input>, &lt;h1>) tiene su propia clase que hereda de la clase Element, pero añade propiedades y métodos adicionales que son específicos para ese tipo de elemento. Estas clases específicas implementan las interfaces mencionadas anteriormente.
        - Por ejemplo, la clase HTMLDivElement representa un nodo de tipo &lt;div>. Esta clase hereda las propiedades y métodos de Element (como getAttribute() o innerHTML), pero también puede tener métodos específicos para un &lt;div> que no están disponibles en otros tipos de elementos.
        - De manera similar, un &lt;input> tiene su propia clase HTMLInputElement que hereda de Element, pero también agrega funcionalidades específicas para interactuar con los campos de formulario.

#### Ejemplo
-  Elemento de tipo &lt;input>:
    -	Propiedad value: Devuelve o establece el valor del campo de entrada.
    -	Propiedad checked: Para verificar o modificar el estado de un checkbox.
-  Elemento de tipo &lt;img>:
    -	Propiedad src: Establece o obtiene la fuente de la imagen.
    -	Propiedad alt: Establece o obtiene el texto alternativo de la imagen.


:::tip ¿Cómo buscar la documentación de una interfaz especifica?
- Si buscas un elemento HTML en [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML), hay una sección que te indica que interfaz DOM implementa ese elemento.
- [Click aquí para ver interfaces](https://web.dev/learn/html/apis?hl=es-419#available_element_interfaces)
:::


## Eventos
- En JavaScript, la interacción con el usuario se consigue mediante la "escucha" de los eventos que éste produce. Un evento es una acción del usuario  (por ejemplo, el cambio del valor de un formulario, o la pulsación de un enlace).
- El sistema de eventos de JavaScript es una forma de gestionar interacciones y cambios en la interfaz de usuario. Funciona siguiendo el modelo [Event-driven(basado en eventos)](../Node/arquitecturas.md#arquitectura-de-eventos-event-driven-architecture), donde el navegador “escucha” ciertas acciones del usuario (como hacer clic, mover el mouse o presionar teclas) o del sistema (como cargar la página) y ejecuta un código cuando esas “acciones” ocurren.
- Piensa en un evento como un timbre de una casa. Aquí está lo que pasa:
    1.	El timbre suena: Esto es como un evento que ocurre, por ejemplo, un clic o pulsar una tecla.
    2.	Una persona escucha el timbre: El navegador sabe que ocurrió una acción (evento)
    3.	La persona decide qué hacer: Aquí es donde entra el manejador del evento. Por ejemplo, al escuchar el timbre, decides abrir la puerta.
- En términos de JavaScript, tú creas el manejador de evento (es la acción que va a ocurrir o el código que se va a ejecutar) con addEventListener, para que cuando alguien toque el timbre (haga clic, mueva el mouse, etc.), suceda algo.



#### Flujo del sistema de eventos
1.	Evento: Ocurre una acción en el navegador (clic, scroll, cambio de un input, etc.).
2.	Objeto de evento: El navegador crea un objeto de tipo Event que contiene información sobre el evento (tipo, elemento objetivo, posición del cursor, etc.).
3.	Propagación del evento:
    -	Fase de captura: El evento se propaga desde la raíz del documento hacia el elemento objetivo. El evento "viaja" desde el documento raíz (document) hacia el elemento que lo generó.
    -	Fase de objetivo: El evento llega al elemento que lo originó. El evento llega al elemento donde ocurrió.
    -	Fase de burbuja: El evento se propaga hacia arriba en el árbol DOM (del elemento objetivo hacia sus ancestros). El evento "sube" de vuelta desde el elemento objetivo hasta la raíz.






## addEventListener()
- addEventListener es un método en JavaScript que se utiliza para registrar un manejador de evento en un elemento del DOM. Este método permite escuchar un tipo específico de evento (como click, keyup, etc.) y ejecutar una función cuando el evento ocurre.
- addEventListener es como decirle al navegador:
"Oye, si alguien toca el timbre (hace clic, mueve el mouse, etc.), quiero hacer esto."
- Sintaxis: 
```js
NodeElement.addEventListener(event, handler, options);
```
:::tip Parametros
-  event: El tipo de evento que va a escuchar el NodeElement, como "click", "submit", "mousemove".  Define que debe pasar para que se active el evento (click , pasar el mouse por encima , etc). Todas las acciones deben ocurrir en el NodeElement (hacer click en el NodeElement, pasar el mouse por encima de NodeElement , etc) para que se active.
-  handler: La función que se ejecutará cuando ocurra/escuche el evento. Debe ser un objeto implementando la interfaz EventListener o solo una función en JavaScript. Define el código que se ejecutara cuando el evento se active.
-  options (opcional): Un objeto o un valor booleano que define opciones como:
    -	capture: Si true, activa el evento en la fase de captura (por defecto es false).
    -	once: Si true, el manejador se ejecuta una sola vez.
    -	passive: Si true, indica que el evento no bloqueará el comportamiento predeterminado (útil para eventos de scroll).
:::

:::tip Ejemplo no técnico
- Imagina que tienes una fiesta en tu casa:
    -	La puerta principal (el document) escucha cuando alguien toca el timbre.
    -	Alguien más que esta cerca de la puerta en la fiesta también escucha (un elemento Node del DOM como un botón).
    -	Puedes decidir que solo una persona escuche el timbre (configurando ``{once: true}``), o que primero escuche la persona que vive más lejos en la casa (fase de captura) antes que la persona cerca del timbre (fase de burbuja).


:::


:::tip 
- [element.addEventListener](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener)
- [Tipo de eventos](https://developer.mozilla.org/es/docs/Web/Events#eventos_est%C3%A1ndar)
:::
## Click
Es un tipo de evento.
:::tip
Es una buena práctica primero seleccionar los elementos (las variables const) y luego manipularla.
:::

```html
 <h1 id="tituloWeb" class="text-primary"> Lorem, ipsum dolor. </h1>
 <button id="boton">Cambiar texto</button>

```
```js
const h1 = document.getElementById("tituloWeb");
const boton = document.getElementById("boton");

boton.addEventListener("click" , () => {
     h1.textContent = "texto desde js"
     h1.style.color = "red";
})

```

## Practica

```html
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Seleccionar Color</title>
    <link
      crossorigin="anonymous"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      rel="stylesheet"
    >
</head>

<body>

    <div class="container mt-5 text-center">
        <label
          class="form-label"
          for="inputColor"
        >Color picker</label>
        <input
          id="inputColor"
          class="form-control form-control-color mb-3 w-100"
          title="Seleccione un color"
          type="color"
          value="#563d7c"
        >
        <button
          id="boton"
          class="btn btn-primary w-100"
        >Visualizar</button>
    </div>
    <div class="container mt-5">

        <p
          id="textoHexa"
          class="lead text-center"
        >#563d7c</p>
        <div
          id="cardColor"
          class="card text-center p-5"
          style="background-color: #563d7c;"
        ></div>
    </div>

    <script src="app.js"></script>
</body>

</html>

```

```js
const inputColor = document.getElementById("inputColor");
const boton = document.getElementById("boton");
const textoHexa = document.getElementById("textoHexa");
const cardColor = document.getElementById("cardColor");

console.log(inputColor.value);

boton.addEventListener("click", () => {
    console.log(inputColor.value);
    textoHexa.textContent = inputColor.value;
    cardColor.style.backgroundColor = inputColor.value;
});

```
## Copiar en el portapapeles
### Extra
- Se realiza con navigator.clipboard

```js
const inputColor = document.getElementById("inputColor");
const boton = document.getElementById("boton");
const textoHexa = document.getElementById("textoHexa");
const cardColor = document.getElementById("cardColor");

console.log(inputColor.value);

boton.addEventListener("click", () => {
    console.log(inputColor.value);
    textoHexa.textContent = inputColor.value;
    cardColor.style.backgroundColor = inputColor.value;
    navigator.clipboard
        .writeText(inputColor.value)
        .then(() => console.log("texto copiado"))
        .catch((e) => console.log(e));

});

```

:::tip
ElementoInput.value = Te devuelve el valor del input.
:::

## createElement()

El método document.createElement() crea un elemento HTML especificado por su tagName.

En el parámetro va el nombre de la  etiqueta HTML que se va a crear.
```js
// Creamos una etiqueta <li></li>
const li = document.createElement('li');
li.textContent = "elemento desde js";
console.log(li);

```

## appendChild()

Agrega un nuevo nodo al final de la lista de elementos hijos de un elemento padre especificado.
```js
elementopadre.appenChild(nuevoHijo (child)).
```
- Le asigna un padre al elemento.
- Crea un nodo hijo (child).
- Ese nodo hijo queda como el ultimo hijo que tiene el elemento padre.

```html
  <ul id="lista">
    <li>Elemento estático</li>
  </ul>

```

```js

const lista = document.getElementById("lista")

// Creamos una etiqueta <li></li>
const li = document.createElement('li');
li.textContent = "elemento desde js";

//Se lo asignamos al ul
lista.appendChild(li);

```

:::warning


- Si el child hace una referencia a un nodo existente en el documento, el método appendChild se mueve de su posición actual a su nueva posición.
- Ésto significa que el nodo no puede estar en dos puntos del documento de manera simultánea.
- Así que si el nodo ya contiene un padre, primero es eliminado, y después se añade a la nueva posición.
- Se puede usar Node.cloneNode para hacer una copia del nodo antes de añadirlo debajo de su nuevo elemento padre.

:::

Ejemplo:
```js
const lista = document.getElementById("lista")

const paises = ["Perú", "Bolivia", "Colombia"];

paises.forEach(pais => {
    const li = document.createElement('li');
    li.textContent = pais;
    lista.appendChild(li);
})

```

Añade solo un elemento en la lista, eliminando el estático:
```js
const lista = document.getElementById("lista")

const paises = ["Perú", "Bolivia", "Colombia"];

// paises.forEach(pais => {
//     const li = document.createElement('li');
//     li.textContent = pais;
//     lista.appendChild(li);
// })


paises.forEach(pais => {
    lista.innerHTML = `<li>${pais}</li>`;
  
})

```
Para corregirlo , hay que concatenar:
```js
const lista = document.getElementById("lista")

const paises = ["Perú", "Bolivia", "Colombia"];

// paises.forEach(pais => {
//     const li = document.createElement('li');
//     li.textContent = pais;
//     lista.appendChild(li);
// })


paises.forEach(pais => {
    lista.innerHTML += `<li>${pais}</li>`;
  
})

```

:::tip
innerHTML hace lo mismo que textContent pero también permite código html.
:::

### Reflow
- El reprocesamiento (reflow) es el proceso en el que el navegador recalcula las posiciones y geometrías (tamaño, espaciado y relaciones con los otros elementos, posición , son las propiedades fisicas que determinan su posición y tamaño)  de los elementos en el documento para renderizarlo nuevamente. Esto ocurre cuando hay cambios en el DOM o estilos que afectan el diseño de la página, como:
    - Cambiar el tamaño de la ventana.
    - Agregar, eliminar o modificar elementos en el DOM.
    - Ajustar clases o estilos de elementos.
-   Ocurre cuando un navegador debe procesar y dibujar parte o la totalidad de una página web nuevamente, como después de una actualización en un sitio interactivo.
- Dado que el reprocesamiento puede ser costoso en términos de rendimiento (bloquea al usuario), es importante optimizarlo considerando factores como la profundidad del DOM, la eficiencia de las reglas CSS y el alcance de los cambios. Incluso un pequeño cambio en un elemento puede afectar a sus ancestros y elementos posteriores, incrementando el tiempo necesario para completar el proceso.
- [Más información](https://developers.google.com/speed/docs/insights/browser-reflow)
- En Los dos ejemplo en cada iterracion provoca reflow , afectando el rendimiento.

## Fragment
- Soluciona el reflow.
- Es una versión ligera de Document que actúa como un contenedor "ligero" para nodos, permitiendo trabajar con una estructura de nodos sin impactar directamente en el árbol del DOM activo hasta que sea necesario. 
- Características principales:
    - Un DocumentFragment no tiene padre, lo que significa que no forma parte del DOM principal hasta que se lo añade explícitamente.
    - Es útil para realizar modificaciones o construir estructuras de nodos fuera del DOM principal, evitando costosos reflows y repaints mientras se preparan los cambios.
    - Las modificaciones dentro de un DocumentFragment no desencadenan re-renderizados ni afectan al rendimiento hasta que los nodos se insertan en el DOM.
    - El fragmento es como un contenedor en memoria donde se crean nodos. Estos nodos solo se integran al DOM cuando se utiliza un método como appendChild() o append().
    - Permite crear una estructura de nodos completa (como listas o árboles) en segundo plano y luego insertarla en el DOM de una sola vez, mejorando la eficiencia.
- Se podría decir que un DocumentFragment es un "objeto document" que actúa como un DOM paralelo al real. En este DOM paralelo:
    - Puedes crear estructuras de nodos de manera independiente al DOM real, sin que estos nodos estén todavía conectados al documento principal.
    - Al finalizar la construcción de esa estructura, puedes insertarla en el DOM real en un solo paso, lo que evita múltiples modificaciones directas al DOM y mejora el rendimiento.






Ejemplo

```js
const lista = document.getElementById("lista")

const paises = ["Perú", "Bolivia", "Colombia"];

//Crear un fragmento
const fragment = document.createDocumentFragment();
// Tambien crea un fragmento
//const fragment = new DocumentFragment();

paises.forEach(pais => {
    const li = document.createElement('li');
    li.textContent = pais;
    fragment.appendChild(li);
})

lista.appendChild(fragment);

```
:::tip Observación
- La estructura de nodos que contiene fragment se va a insertar dentro de "lista", generando solo un renderizado.

:::
## elementoPadre.insertBefore()

- [Documentación](https://developer.mozilla.org/es/docs/Web/API/Node/insertBefore)
- El método elementoPadre.insertBefore() se utiliza para insertar un nuevo nodo en el DOM antes de un nodo  especificado, dentro de un elemento padre. Es similar a appendChild(), pero con la ventaja de que puedes elegir la posición exacta del nuevo nodo.
- Sintaxis:
```js
elementoPadre.insertBefore(nuevoNodo, nodoReferencia);

```
:::tip Parámetros
- nuevoNodo:
    - El nodo que deseas insertar en el DOM (por ejemplo, uno creado con document.createElement() o un nodo existente).
- nodoReferencia:
    - Un nodo hijo del elementoPadre. El nuevo nodo se insertará justo antes de este nodo.
    - Si nodoReferencia es null, el comportamiento es similar a appendChild(), ya que inserta el nuevo nodo al final del padre.
:::



## elemento.firstChild
- [firstChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/firstChild)
- Devuelve el primer hijo de un elemento

```js
const lista = document.getElementById("lista")

const paises = ["Perú", "Bolivia", "Colombia"];

//Crear un fragmento
const fragment = document.createDocumentFragment();
// Tambien crea un fragmento
//const fragment = new DocumentFragment();

paises.forEach(pais => {
    const li = document.createElement('li');
    li.textContent = pais;
    const referenceNode = fragment.firstChild;
    fragment.insertBefore(li, referenceNode);
})

lista.appendChild(fragment);

```
## Practica 2
```html
<ul id="lista">
    
</ul>

```

```js
const lista = document.getElementById("lista")

const paises = ["Perú", "Bolivia", "Colombia"];

//Crear un fragmento
const fragment = document.createDocumentFragment();
// Tambien crea un fragmento
//const fragment = new DocumentFragment();

paises.forEach(pais => {
    const li = document.createElement('li');
    // Añade la clase list
    li.className = "list";
    const b = document.createElement('b')
    b.textContent = "Pais:"
    const span = document.createElement('span');
    span.className = "text-primary";
    span.textContent = pais;

    li.appendChild(b);
    li.appendChild(span);
    fragment.appendChild(li);
})

lista.appendChild(fragment);




```
Con innerHTML: (Hace reflow)
```js
const lista = document.getElementById("lista")

const paises = ["Perú", "Bolivia", "Colombia"];

const fragment = document.createDocumentFragment();

paises.forEach(pais => {
    lista.innerHTML += `<li class="list">
    <b>Pais:</b>
    <span class="text-primary">${pais}</span>
 </li>`;
})
lista.appendChild(fragment);

```
Para que no lo haga:
:::warning
Ojo que aquí estamos reemplazando fragment por let template, por ende hace un efecto parecido y minimizamos el reflow, ya que solo una vez que tenemos nuestro templateString listo, lo incorporamos al HTML.
:::
```js
const lista = document.getElementById("lista")

const paises = ["Perú", "Bolivia", "Colombia"];

const fragment = document.createDocumentFragment();

let template = '';
paises.forEach(pais => {
    template += `<li class="list">
    <b>Pais:</b>
    <span class="text-primary">${pais}</span>
 </li>`;
})
lista.innerHTML = template;

```
## innerHTML vs createElement 

- [1](https://medium.com/@kevinchi118/innerhtml-vs-createelement-appendchild-3da39275a694)
- [2](https://stackoverflow.com/questions/49758867/which-is-better-to-use-doucment-fragment-or-string-concatenation-while-appendi)
- [3](https://stackoverflow.com/questions/15182402/javascript-document-createelement-or-html-tags)
- [4](https://stackoverflow.com/questions/2305654/innerhtml-vs-appendchildtxtnode)
- [5](https://stackoverflow.com/questions/2946656/advantages-of-createelement-over-innerhtml)
## template 

- Piensa en la plantilla como un fragmento de contenido que está siendo almacenado para un uso posterior en el documento.	
- es un mecanismo para mantener el contenido HTML del lado del cliente , el cual no se renderiza cuando se carga una página, pero que posteriormente puede ser instanciado durante el tiempo de ejecución empleando JavaScript.
- El analizador procesa el contenido del elemento &lt;elemento> durante la carga de la página, pero sólo lo hace para asegurar que esos contenidos son válidos; sin embargo, estos contenidos del elemento no se renderizan
- los elementos &lt;template> contienen un DocumentFragment en su propiedad HTMLTemplateElement.content.
### HTML
 - Adentro de la etiqueta témplate va el contenido que se va a repetir muchas veces.
- Debe estar en el body y antes de &lt;script>\&lt;/script>
- Puede haber muchos template
- Hay que ponerle una id a la etiqueta template.




```html

  <ul id="lista">
     
  
</ul>

<template id="liTemplate">
  <li class="list">
  <b>Pais:</b>
  <span class="text-primary">nombre del pais</span>
</li>
</template >

    <script src="app.js"></script>

```
### js
- Hay que clonarlo en JS al elemento template.
- Hay que saber donde van a ir los elementos del template (identificar el nodo padre).

```js
const lista = document.getElementById("lista")
const liTemplate = document.getElementById("liTemplate");
// Clonamos
const clone = liTemplate.content.cloneNode(true);

console.log(clone);

```
```js
const lista = document.getElementById("lista")
const liTemplate = document.getElementById("liTemplate");
// Clonamos
const clone = liTemplate.content.cloneNode(true);

clone.querySelector('.text-primary').textContent = "agrege a través de un template"

lista.appendChild(clone);

```  

### Fragment + template 

```js
const lista = document.getElementById("lista")
const liTemplate = document.getElementById("liTemplate");
const fragment = document.createDocumentFragment();
const paises = ["Perú", "Bolivia", "Colombia"];

paises.forEach( pais => {
    const clone = liTemplate.content.cloneNode(true);
    clone.querySelector('span').textContent = pais;
    fragment.appendChild(clone);
})

lista.appendChild(fragment);

```

:::tip
  HTMLTemplateElement tiene una propiedad content, que es de solo lectura y DocumentFragment contiene el subárbol DOM que representa la plantilla. Tenga en cuenta que el uso directo del valor de content podría provocar un comportamiento inesperado; consulte la sección Evitar el error de DocumentFragment a continuación

  [Errores](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template#avoiding_documentfragment_pitfall)
:::

### Los addEventListener no funcionaria:

```js
const lista = document.getElementById("lista")
const liTemplate = document.getElementById("liTemplate");
const fragment = document.createDocumentFragment();
const paises = ["Perú", "Bolivia", "Colombia"];

const clickPaises = () => console.log("me diste click");

paises.forEach( pais => {
    const clone = liTemplate.content.cloneNode(true);
    clone.querySelector('span').textContent = pais;
    clone.addEventListener('click',clickPaises);
    fragment.appendChild(clone);
})

lista.appendChild(fragment);

```
### Solucion:
#### Utilizar firstElementChild

```js
const lista = document.getElementById("lista")
const liTemplate = document.getElementById("liTemplate");
const fragment = document.createDocumentFragment();
const paises = ["Perú", "Bolivia", "Colombia"];

const clickPaises = () => console.log("me diste click");

paises.forEach( pais => {
    const clone = liTemplate.content.firstElementChild.cloneNode(true);
    clone.querySelector('span').textContent = pais;
    clone.addEventListener('click',clickPaises);
    fragment.appendChild(clone);
})

lista.appendChild(fragment);

```

## Objeto evento (e)
- El objeto evento en JavaScript es una instancia de la clase Event que se crea automáticamente cada vez que ocurre un evento (como un clic, una pulsación de tecla, o el movimiento del ratón). Este objeto contiene información detallada sobre el evento de modo que cada elemento determine que acción ejecutar en base a la información que contenga.
- El objeto evento en JavaScript es una instancia de la clase Event que se crea automáticamente cada vez que ocurre un evento (como un clic, una pulsación de tecla, o el movimiento del ratón). Este objeto contiene información detallada sobre el evento y permite interactuar con él.
- El manejador de evento (el parametro handler de addEventListener) siempre es una función con un parámetro. Este parámetro contiene el objeto evento.
#### ¿Qué contiene el objeto evento?
- El objeto evento proporciona:
1. Tipo del evento (type): Identifica qué tipo de evento ocurrió (como click, keydown, etc.).
2. Elemento objetivo (target): El elemento HTML donde ocurrió el evento.
3. Propiedades adicionales: Dependen del tipo de evento. Por ejemplo:
    - Coordenadas del mouse (clientX, clientY) para eventos del mouse.
    - Tecla presionada (key) para eventos de teclado.
4.	Métodos para controlar el evento:
    - preventDefault(): Cancela el comportamiento predeterminado del evento (como evitar que un enlace abra una nueva página).
    - stopPropagation(): Detiene la propagación del evento (para que no suba a los elementos padres.
#### Propiedades comunes del objeto evento
1.	type: El tipo de evento ("click", "keydown", etc.).
2.	target: El elemento donde ocurrió el evento.
3.	currentTarget: El elemento al que se le asignó el manejador de evento.
4.	clientX y clientY: Coordenadas del cursor durante eventos del mouse.
5.	key: La tecla presionada en eventos de teclado.
6.	defaultPrevented: Si se llamó a preventDefault() (es true o false).




:::tip
Se puede pasar el objeto evento como parámetro hacia otras funciones/metodos externa
:::

### propiedad target
 Es el elemento que activo el evento

```js
const lista = document.getElementById("lista")
const liTemplate = document.getElementById("liTemplate");
const fragment = document.createDocumentFragment();
const paises = ["Perú", "Bolivia", "Colombia"];

const clickPaises = e => console.log("me diste click" , e.target);

paises.forEach( pais => {
    const clone = liTemplate.content.firstElementChild.cloneNode(true);
    console.log(clone);
    clone.querySelector('span').textContent = pais;
    clone.addEventListener('click',clickPaises);
    fragment.appendChild(clone);
})

lista.appendChild(fragment);

```
## Crear Snippets
- [Ver info](https://pablocianes.com/guardar-snippets-personalizados-en-visual-studio-code/)
- Control + Shift + P  : Escribir snippet



- En html: 

```json
{
    // Place your snippets for html here. Each snippet is defined under a snippet name and has a prefix, body and 
    // description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
    // $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
    // same ids are connected.
    // Example:
    // "Print to console": {
    //  "prefix": "log",
    //  "body": [
    //      "console.log('$1');",
    //      "$2"
    //  ],
    //  "description": "Log output to console"
    // }

    "Template in HTML": {
        "prefix": "template",
        "body": ["<template>$1</template>"],
        "description": "Agrega el template en html"
    }
}

```

## atributo data-nombre
el atributo  data-nombre de los botones contiene un valor que puede ser leído por javascript.
```html
<button class="btn btn-primary" data-fruta="frutilla">Agregar</button>
<button class="btn btn-primary" data-fruta="banana">Agregar</button>
<button class="btn btn-primary" data-fruta="manzana">Agregar</button>

```
Devuelve un DOMSTRING con el nombre y el valor del atributo data-nombre del elemento.

fruta es el nombre del data-nombre (data-fruta = "valor")

```js
console.log(element.dataset);
```

Devuelve el valor del atributo data-nombre del elemento:

fruta es el nombre del data-nombre (data-fruta = "valor")

```js
    console.log(element.dataset.fruta);
```

## Practica 3

```html
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Super</title>
    <link
      crossorigin="anonymous"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      rel="stylesheet"
    >
</head>

<body>

  <main class="container mt-5">
    <div class="row text-center">
        <article class="col-sm-4 mb-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Frutilla 🍓</h5>
                    <button class="btn btn-primary" data-fruta="frutilla">Agregar</button>
                </div>
            </div>
        </article>
        <article class="col-sm-4 mb-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Banana 🍌</h5>
                    <button class="btn btn-primary" data-fruta="banana">Agregar</button>
                </div>
            </div>
        </article>
        <article class="col-sm-4 mb-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Manzana 🍏</h5>
                    <button class="btn btn-primary" data-fruta="manzana">Agregar</button>
                </div>
            </div>
        </article>
    </div>
</main>
<section class="container mt-3">
  <ul class="list-group" id="carrito">
   
  </ul>
</section>

<template id="template">
  <li class="list-group-item d-flex justify-content-between align-items-center">
      <span class="lead">A list item</span>
      <span class="badge bg-primary rounded-pill">14</span>
  </li>
</template>
    <script src="app.js"></script>
</body>

</html>

```

```js
const carrito = document.querySelector("#carrito");
const template = document.querySelector("#template");
const fragment = document.createDocumentFragment();
const agregar = document.querySelectorAll(".card button");

// Objeto
const carritoObjeto = {};

const agregarCarrito = (e) => {
    //    console.log(e.target.dataset);
    //  console.log(e.target.dataset.fruta);
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
    };

    if (carritoObjeto.hasOwnProperty(producto.id)) {
        producto.cantidad = carritoObjeto[producto.id].cantidad + 1;
    }

    // lo asignamos al carrito;
    // Es lo mismo que carritoObjeto.(valor de producto.id) = producto;
    // Estariamos creando una propiedad con los corchetes.
    // Dicha propiedad es un objeto.
    carritoObjeto[producto.id] = producto;
    pintarCarrito();
};

const pintarCarrito = () => {
       carrito.textContent = "";

    Object.values(carritoObjeto).forEach((item) => {
        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector(".lead").textContent = item.titulo;
        clone.querySelector(".rounded-pill").textContent = item.cantidad;
        fragment.appendChild(clone);
        
    });

    carrito.appendChild(fragment);
};

agregar.forEach((boton) => boton.addEventListener("click", agregarCarrito));

```

## El burbujeo y la captura
- El burbujeo y la captura de eventos son dos mecanismos que describen que sucede cuando dos elementos escuchan el mismo evento (timbre).
- Cuando dos “elementos” escuchan el mismo “timbre”, el mecanismo define que manejador de evento se ejecutara primero y cual segundo, y cual tercero (si hubiera más elementos escuchando el mismo evento).
- Si estás usando la fase de burbuja:
    - El manejador del elemento que activo el evento escucha primero.
    - Luego, el evento "sube" y los manejadores de los elementos ancestros se activan en orden.
- Si estás usando la fase de captura:
    - Es al revés que la burbuja. Los manejadores de los elementos que escuchan el mismo evento se ejecutan en orden inverso al de la burbuja.
    - El evento comienza en la raíz del documento (document) y "baja" hacia el elemento que lo activó.
    - El manejador del elemento más lejano que escucha el evento se ejecuta primero.
    - El evento “baja” hasta llegar al elemento que lo activó:
    - Pasa por cada elemento ancestro en el camino, ejecutando los manejadores configurados para captura ``({ capture: true })``.
    - La fase de captura termina al llegar al elemento objetivo:
        -	Si el elemento que activo el evento tiene un manejador:
            -	Este manejador se ejecutará inmediatamente.
        -	Después de la captura:
            -	Si no se ha detenido la propagación del evento, puede comenzar la fase de burbuja (si hay manejadores configurados para esta).
- Si tienes ambos (captura y burbuja):
    -	Primero se ejecutan los manejadores de captura (de la raíz al objetivo).
    -	Después se ejecutan los manejadores de burbuja (del objetivo a la raíz).





El burbujeo y la captura de eventos son dos mecanismos que describen lo que sucede cuando dos manejadores de eventos o mas se tienen que ejecutar al "mismo tiempo", suele ocurrir con elementos padre-hijo:

```html
<div class="container">
    <div class="border border-primary border-5 py-5 m-3">
        Lorem, ipsum dolor
        <div class="border border-secondary border-5 py-5 m-3">
            Lorem, ipsum dolor
            <div class="border border-danger border-5 py-5 m-3">
                Lorem, ipsum dolor
            </div>
        </div>
    </div>
</div>

```
### Por defecto se trabaja de la forma burbuja:
Fase de burbuja (bubbling): Se propaga desde el elemento hijo hasta el padre. (comportamiento por defecto)

```js

const padre = document.querySelector(".border-primary");
const hijo = document.querySelector(".border-secondary");
const nieto = document.querySelector(".border-danger");

padre.addEventListener("click", (e) => console.log("padre"));
hijo.addEventListener("click", (e) => console.log("hijo"));
nieto.addEventListener("click", (e) => console.log("nieto"));

```

### Fase de Captura 


Fase de captura: Se propaga desde el elemento padre hasta el hijo. (Al reves que la burbuja)

Para eso se utiliza un tercer parámetro en AddEventListener , que por defecto siempre es false (por eso no lo colocamos).

Pero si le ponemos true, se invierte y se propaga desde el elemento padre hasta el hijo.

```js
const padre = document.querySelector(".border-primary");
const hijo = document.querySelector(".border-secondary");
const nieto = document.querySelector(".border-danger");

padre.addEventListener("click", (e) => console.log("padre") , true);
hijo.addEventListener("click", (e) => console.log("hijo") , true);
nieto.addEventListener("click", (e) => console.log("nieto") , true);

```
## stopPropagation
- Sirve para evitar el burbujeo y la captura (Lo anterior)
- Evita que el evento viaje en las fases de captura y bubbling.
- Con el método stopPropagation() le decimos que deje de hacer la fase de burbujeo o captura , por lo tanto evita que se ejecute el proximo manejador de evento (si  hay uno).

```js
const cajas = document.querySelectorAll(".border");
cajas.forEach((item) => {
    item.addEventListener("click", (e) => {
        e.stopPropagation();
        console.log("click");
    });
});

```
## preventDefault
- Cancela el  comportamiento por defecto del elemento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, se sigue ejecutando el  manejador de evento.
- Cancela el comportamiento por defecto del elemento, pero sigue ejecutando el manejador de evento.

```html
<form>
    <input type="text" name="nombre">
    <button type="submit">Enviar</button>
</form>

```

```js
const formulario = document.querySelector("form");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("click");
});

```

```html

<a href="#">ancla</a>

```

```js
const ancla = document.querySelector("a");
ancla.addEventListener("click", (e) => e.preventDefault());

```
## Delegación de Eventos

La delegación de eventos es básicamente un patrón para manejar eventos de manera eficiente.

En lugar de agregar un manejador de evento(EventListener) a todos y cada uno de los elementos similares, podemos agregar un manejador de evento(EventListener) a un elemento principal(el padre/contenedor principal) y ejecutar una acción/un procedimiento  según el elemento(objetivo particular) que activo el evento , utilizando la propiedad .target del objeto de evento.

Así evitamos la propagación 👌

:::tip
La delegación de eventos sirve para añadir eventos a elementos que todavia no existen en el DOM.
:::

:::tip 
Con la delegación de eventos podemos acceder a eventos que no todavia no existen en el DOM.
:::


```html
<div class="container">
    <div
      id="padre"
      class="border border-primary border-5 py-5 m-3"
      data-div="divPadre"
    >
        Lorem, ipsum.
        <div
          id="hijo"
          class="border border-secondary border-5 py-5 m-3"
          data-div="divHijo"
        >
            Lorem, ipsum.
            <div
              id="nieto"
              class="border border-danger border-5 py-5 m-3"
              data-div="divNieto"
            >
                Lorem, ipsum.
            </div>
        </div>
    </div>
</div>

```

```js

const container = document.querySelector(".container");
container.addEventListener("click", (e) => {
    console.log(e.target);
});

```

A través de la propiedad target averiguamos que elemento ejecuto el evento y en base a eso ejecutamos un trozo de codigo determinado.

Podemos averiguar a que elemento pertenece por la id.

```js
const container = document.querySelector(".container");
container.addEventListener("click", (e) => {
    console.log(e.target.id);
});



const container = document.querySelector(".container");
container.addEventListener("click", (e) => {

    if (e.target.id === "padre") {
        console.log("diste click al padre");
    }
});

```
Podemos averiguar a que elemento pertenece por el método matches.
## Metodo Matches
El método matches() comprueba si el Elemento sería seleccionable por el selector CSS especificado en el parametro; en caso contrario, retorna false.

Comprueba si el elemento existe a través de un selector CSS.

```js
const container = document.querySelector(".container");
container.addEventListener("click", (e) => {

   console.log(e.target.matches(".border-secondary"));
});

```
```js
const container = document.querySelector(".container");
container.addEventListener("click", (e) => {

   
   if (e.target.matches(".border-secondary")) {
       console.log("Diste click al hijo");
   }
});

```
Podemos averiguar a que elemento pertenece atraves del dataset.
## data-nombre
El atributo data-nombre es para hacer algo con JavaScript

Podemos acceder al valor del atributo data a través del nombre.
:::tip
Un elemento puede tener varios dataset.
:::

:::tip
Se puede añadir el atributo data por javascript a un elemento.

elemento.dataset.nombre = valor;

el nombre y el valor puede ser cualquiera ya que es el que se va a crear


:::

```js
const container = document.querySelector(".container");
container.addEventListener("click", (e) => {

   console.log(e.target.dataset);

});

```

En el ejemplo de arriba , aparece un objeto con el nombre-valor del atributo data del elemento.

Se puede acceder al valor con el punto (dataset.nombre) o corchetes (dataset[‘nombre’])

```js
   console.log(e.target.dataset.div);

   console.log(e.target.dataset['div']);

```

```js
const container = document.querySelector(".container");
container.addEventListener("click", (e) => {

   if (e.target.dataset.div == "divNieto") {
       console.log("diste click en el nieto");
   }

});


```

:::tip
Puedes seleccionar todo el document, así no tienes que estar detectando el componente principal 🤙

document.addEventListener()
:::

## Práctica

:::tip
parseInt Para convertir un String a numero entero.
:::

:::tip
return se puede usar para no devolver nada  (Sirve para eliminar elementos dentro de filter).

return               no es lo mismo que    return item


Si un if devuelve algo en solo una línea, no hace falta las llaves ({}).


:::

:::tip
en el reduce, podes especificar qué tipo de valor va a devolver en el segundo parámetro.
:::

:::tip
En los ciclos(bucle) solo se usa el fragment .
:::


```html
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carrito Objeto</title>
    <link crossorigin="anonymous" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" rel="stylesheet">
</head>

<body>

    <main class="container mt-5">
        <div class="row text-center">
            <article class="col-sm-4 mb-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Frutilla 🍓</h5>
                        <p class="lead">$300</p>
                        <button class="btn btn-primary btn-sm" data-fruta="frutilla" data-precio="300">Agregar</button>
                    </div>
                </div>
            </article>
            <article class="col-sm-4 mb-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Banana 🍌</h5>
                        <p class="lead">$100</p>
                        <button class="btn btn-primary btn-sm" data-fruta="banana" data-precio="100">Agregar</button>
                    </div>
                </div>
            </article>
            <article class="col-sm-4 mb-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Manzana 🍏</h5>
                        <p class="lead">$200</p>
                        <button class="btn btn-primary btn-sm" data-fruta="manzana" data-precio="200">Agregar</button>
                    </div>
                </div>
            </article>
        </div>
    </main>

    <section class="container mt-3">
        <ul class="list-group" id="carrito"></ul>
    </section>

    <footer id="footer" class="container mt-3">
        <template id="templateFooter">
            <div class="card">
                <div class="card-body d-flex justify-content-between align-items-center">
                    <p class="lead mb-0">TOTAL: $<span>1500</span></p>
                    <button class="btn btn-outline-primary">Finalizar Compra</button>
                </div>
            </div>
        </template>
    </footer>

    <template id="template">
        <li class="list-group-item text-uppercase bg-secondary text-white">
            <span class="badge bg-primary rounded-pill align-middle">14</span>
            <span class="lead align-middle">A list item</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <div>
                <p class="lead mb-0">Total: $<span>200</span></p>
            </div>
            <div>
                <button class="btn btn-sm btn-success">Agregar</button>
                <button class="btn btn-sm btn-danger">Quitar</button>
            </div>
        </li>
    </template>

    <script src="app.js"></script>
</body>

</html>

```

```js

const carrito = document.querySelector("#carrito");
const template = document.querySelector("#template");
const footer = document.querySelector("#footer");
const templateFooter = document.querySelector("#templateFooter");
const fragment = document.createDocumentFragment();
let carritoArray = [];

// Delegación de eventos:
document.addEventListener("click", (e) => {
    // console.log(e);
    // console.log(e.target.dataset.fruta);
    // console.log(e.target.matches(".card button"));
    if (e.target.matches(".card button")) {
        agregarCarrito(e);
    }

    // console.log(e.target.matches(".list-group-item .btn-success"));
    if (e.target.matches(".list-group-item .btn-success")) {
        btnAumentar(e);
    }

    // console.log(e.target.matches(".list-group-item .btn-danger"));
    if (e.target.matches(".list-group-item .btn-danger")) {
        btnDisminuir(e);
    }
});

const agregarCarrito = (e) => {
    // console.log(e.target.dataset);
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
        precio: parseInt(e.target.dataset.precio),
    };

    // buscamos el indice
    const index = carritoArray.findIndex((item) => item.id === producto.id);

    // si no existe empujamos el nuevo elemento
    if (index === -1) {
        carritoArray.push(producto);
    } else {
        // en caso contrario aumentamos su cantidad
        carritoArray[index].cantidad++;
    }

    // console.log(carritoArray);
    pintarCarrito();
};

const pintarCarrito = () => {
    carrito.textContent = "";

    // recorremos el carrito y pintamos elementos:
    carritoArray.forEach((item) => {
        const clone = template.content.cloneNode(true);
        clone.querySelector(".text-white .lead").textContent = item.titulo;
        clone.querySelector(".rounded-pill").textContent = item.cantidad;
        clone.querySelector("div .lead span").textContent =
            item.precio * item.cantidad;
        clone.querySelector(".btn-success").dataset.id = item.id;
        clone.querySelector(".btn-danger").dataset.id = item.id;
        fragment.appendChild(clone);
    });
    carrito.appendChild(fragment);

    pintarFooter();
};

const pintarFooter = () => {
    footer.textContent = "";

    const total = carritoArray.reduce(
        // El 0 es para especificar que se devuelve un numero y no un String
        (acc, current) => acc + current.precio * current.cantidad,
        0
    );

    // console.log(total);

    const clone = templateFooter.content.cloneNode(true);
    clone.querySelector("p span").textContent = total;

    // fragment.appendChild(clone);
    footer.appendChild(clone);
};

const btnAumentar = (e) => {
    // console.log(e.target.dataset.id);
    carritoArray = carritoArray.map((item) => {
        if (item.id === e.target.dataset.id) {
            item.cantidad++;
        }
        return item;
    });
    pintarCarrito();
};

const btnDisminuir = (e) => {
    // console.log(e.target.dataset.id);
    carritoArray = carritoArray.filter((item) => {
        // console.log(item);
        if (item.id === e.target.dataset.id) {
            if (item.cantidad > 0) {
                item.cantidad--;
                // Si la cantidad es igual a 0 , no retorna nada y por lo tanto se elimina del array.
                // Si es una sola linea no hace falta las llaves
                if (item.cantidad === 0) return;
                // Si es mayor a 0 , retorna el elemento.
                return item;
            }
        } else {
            return item;
        }
    });
    pintarCarrito();
};


```