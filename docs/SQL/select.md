---
sidebar_position: 2
---
# Select

- Para recuperar datos de una base de datos SQL, necesitamos usar SELECT, que a menudo se denomina coloquialmente como consulta.
- Una consulta  es solo una declaración que declara qué datos estamos buscando (SELECT), dónde encontrarlos en la base de datos (FROM) y, opcionalmente, cómo transformarlos antes de que sean devueltos. 
- Sin embargo, tiene una sintaxis específica.
- Una tabla en una Base de datos SQL es como una tabla de excel:
![Tabla de excel](https://cdn.exceltotal.com/0103/como-crear-una-tabla-en-excel-01.png)
- Puedes pensar en una tabla SQL como un conjunto de entidades que tienen algo en común (por ejemplo, perros; en POO sería una clase).
- Cada fila de esa tabla representa una entidad única (sería un objeto en POO) que pertenece a ese conjunto. Por ejemplo, un pug, un beagle o un pug de diferente color.
- Las columnas representan las propiedades que tienen en común todas las entidades de ese conjunto, como el color del pelaje, la longitud de la cola o la raza.

:::tip Entidad
Una entidad es cualquier objeto, persona, concepto o cosa que puede ser identificada de forma única frente a las demás.
:::





La consulta más básica consiste en seleccionar una o varias columnas de una tabla:

```sql
SELECT column, another_column, …
FROM mytable;
```

:::tip Observación
- SELECT: Esta es la palabra clave que indica que estamos realizando una consulta para recuperar datos.
- column, another_column, …: Estas son las columnas específicas que queremos recuperar de la tabla. En este caso, estamos seleccionando dos columnas: column y another_column. El símbolo de coma (,) se utiliza para separar las columnas que queremos seleccionar. Si queremos seleccionar todas las columnas de la tabla, podemos utilizar el asterisco (\*) en lugar de enumerar cada columna individualmente, por ejemplo: SELECT \* FROM mytable;.
- FROM: Esta palabra clave indica la tabla o tablas que queremos consultar. Indica en que tabla estan las "columnas" que especificamos.
- mytable: Este es el nombre de la tabla que queremos consultar. En este caso, la tabla se llama mytable. Es el nombre de la tabla que contiene las "columnas" que buscamos.
- En resumen, esta consulta SELECT está diciendo: "Recupera las columnas column y another_column de la tabla mytable".
:::
- El resultado de esta consulta será un conjunto  de filas y columnas, efectivamente una copia de la tabla, pero solo con las columnas que solicitamos.
- Si queremos recuperar absolutamente todas las columnas de datos de una tabla, podemos usar la abreviatura terisco (* ) en lugar de enumerar todos los nombres de las columnas individualmente.
- Con el asterisco, recuperamos todas las filas de la tabla:

```sql
SELECT * 
FROM mytable;
```
Ejemplos:

```sql
SELECT title FROM movies;
```
```sql
SELECT Director FROM movies;
```
```sql
SELECT title , Director FROM movies;
```
```sql
SELECT Title , Year FROM movies;
```
```sql
SELECT * FROM movies;
```