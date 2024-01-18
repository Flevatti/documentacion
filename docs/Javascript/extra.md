---
sidebar_position: 15
---

# Extra

## Pagina primer plano
- Como detectar si tu web está en primer plano

```js
    // Primera Alternativa
    // Detecta si el usuario quito el sitio web del primer plano
    window.addEventListener("blur" , () => {
      document.title="Nadie nos mira"
    });
   // Detecta si el usuario  tiene el sitio web en primer plano
    window.addEventListener("focus" , () => {
      document.title = "Nos mira alguien";
    })
    // Segunda alternativa
    document.addEventListener("visibilitychange" , () => {
      document.title = document.visibilityState;
    })
```

## ¿Que es JSON?
- JSON es un formato de texto totalmente independiente del lenguaje de programación
- JSON, cuyas siglas significan en verdad JavaScript object notation que, en español se traducen como, notación de objetos de JavaScript.
- Es un formato de intercambio de datos que resulta muy fácil de leer y escribir para los programadores y sencillo de interpretar y crear para las máquinas.
- Se usa cuando se requiere que un sistema requiera mostrar o enviar información para que otros sistemas los lean e interpreten.
- Se utiliza principalmente para transferir datos entre un servidor y un cliente.



En resumen, JSON no es un lenguaje de programación sino un archivo que contiene datos estructurados, que se utiliza para transferir información entre sistemas.

Una de las características más significativas de JSON, al ser un formato independiente de los lenguajes de programación, es que los servicios que comparten información por este método no necesitan hablar el mismo idioma. Es decir que el emisor y el receptor pueden ser totalmente distintos, por ejemplo, Java y Python
Esto es así porque cada uno tiene su propia librería de codificación y decodificación para cadenas en este formato.

Es decir que JSON es un formato común para serializar y deserializar objetos en la mayoría de los idiomas

- Su funcionamiento se basa en la estructuración de una colección de pares  que contienen:
  - Una clave: que corresponde al identificador del contenido.
  - Un valor: que representa el contenido correspondiente.


#### ¿Cuáles son sus características?
-	JSON es solo un formato de datos.
-	Requiere usar comillas dobles para las cadenas y los nombres de propiedades. Las comillas simples no son válidas.
-	Una coma o dos puntos mal ubicados pueden producir que un archivo JSON no funcione.
-	A diferencia del código JavaScript, en el que las propiedades del objeto pueden no estar entre comillas, en JSON solo los Strings entre comillas pueden ser utilizadas como propiedades.

#### Sintaxis
- Un objeto JSON comienza y termina con llaves {}
- Hay dos elementos centrales en un objeto JSON: claves (Keys) y valores (Values).
- Las Keys deben ser cadenas de caracteres (strings). Como su nombre en español lo indica, estas contienen una secuencia de caracteres rodeados de comillas.
- Los Values son un tipo de datos JSON válido. Puede ser un arreglo (array), objeto, cadena (string), booleano, número o nulo.
- Puede tener dos o más pares de claves/valor dentro, con una coma para separarlos. Así mismo, cada key es seguida por dos puntos para distinguirla del valor.

```json
    {
        “key”:“value”,
        “key”:“value”,
        “key”:“value”.
      }

```
- La sintaxis de JSON funciona de modo similar a JavaScript. Por ejemplo:
  -	El arreglo de información se hace mediante claves (keys).
  -	La información se separa por comas.
  -	Las llaves agrupan objetos.
  -	Los corchetes agrupan arreglos de datos (array).
- Sin embargo, JSON se distingue de JavaScript porque sus claves tienen que ser strings (o secuencias de caracteres), mientras que sus valores deben ser strings, números, objetos, arreglos, boleados o null.


:::tip info
- [¿Qué es Json? ¿Por qué es importante conocerlo?](https://www.nextu.com/blog/que-es-json-por-que-es-importante-conocerlo-rc22/)
- [¿Qué es JSON?](https://www.hostinger.com.ar/tutoriales/que-es-json)
- [JSON para principiantes: qué es, para qué sirve y ejemplos](https://blog.hubspot.es/website/que-es-json)
:::