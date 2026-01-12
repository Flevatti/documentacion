---
sidebar_position: 14
---
# Buenas practicas


- No se debe usar if/else ANIDADOS . En su lugar usamos la tecnica Guard Clauses.
  
:::tip Tecnica Guard Clauses
- Consiste en negar una condicion con el operador "!" y si es true lanzamos una excepcion.
- Por ejemplo: SI el usuario "NO EXISTE" , lanzamos una excepcion para que se deje de ejecutar el resto del codigo.  En el codigo seria ``if(!usuario) { lanzar excepcion}``
- Con las guard clauses vamos comprobando primero una a una todas las condiciones que se deben cumplir antes de hacer lo que la función tiene que hacer
- Si una de las condiciones no se cumple , se lanza una excepcion y se deja de ejecutar el codigo.
:::
- NO Comentar el codigo mas de la cuenta
-  Nombrar bien los metodos , variables y parametros para describir lo que estas haciendo.
  
