---
sidebar_position: 7
---
# Pseudo-elementos

## After y Before
- Son pseudos-elementos
- Te permite insertar contenido en una página sin necesidad de que esté en el HTML .
-  El "Contenido" que se inserta no está realmente en el DOM, pero aparece en la página como si lo estuviera
- Conclusión : Te permite crear contenido que se muestra en el sitio web pero que no se encuentra en el DOM.
- Tienen la propiedad content que es obligatoria.
- La propiedad content contiene como valor  el "contenido" que se va a insertar en la pagina.


```html
<style>
        div::before {
          content : "before"
        }  
        div::after {
          content : "after"
        }
     </style>
  </head>
  <body>
      <div>
         Contenido
      </div>
  </body>
```
- Before inserta contenido "antes"
- After inserta contenido "despues"

Por lo tanto , el codigo anterior es lo mismo que:

```html
 <div>
        before
         Contenido
         after
 </div>
```

#### Ejemplo
```html
  <style>
   p::after {
  content: " - Remember this";
  background-color: yellow;
  color: red;
  font-weight: bold;
}
     </style>
  </head>
  <body>
      <p>
         Contenido
      </p>
  </body>
```



:::tip Observacion
- El css se aplica al "contenido" que se inserta (el valor de content).
:::

:::tip
La mayoria de las animaciones utiliza esto

:::



