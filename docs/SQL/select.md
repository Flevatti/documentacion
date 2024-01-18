---
sidebar_position: 2
---
# Select

- Para recuperar datos de una base de datos SQL, necesitamos usar SELECT, que a menudo se denomina coloquialmente como consulta.
- Una consulta  es solo una declaración que declara qué datos estamos buscando, dónde encontrarlos en la base de datos y, opcionalmente, cómo transformarlos antes de que sean devueltos. 
- Sin embargo, tiene una sintaxis específica.
- Una tabla en una Base de datos SQL es como una tabla de excel:
![Tabla de excel](https://cdn.exceltotal.com/0103/como-crear-una-tabla-en-excel-01.png)
- Puede pensar en una tabla de SQL como un tipo de entidad (es decir, perros , en POO es una clase) que guarda datos sobre algo (personas , perros , etc), y cada fila en esa tabla como una instancia(un objeto en POO) específica de ese tipo (es decir, un pug, un beagle, un pug de diferente color, etc.). Esto significa que las columnas entonces representarían las propiedades comunes compartidas por todas las instancias de esa entidad (es decir, el color del pelaje, la longitud de la cola, etc.).

:::tip En POO
- Entidad : Clase
- Instancia: Un objeto de la clase
:::


Y dada una tabla de datos, la consulta más básica que podríamos escribir sería una que seleccione un par de columnas (propiedades) por fila (instancia)

```sql
SELECT column, another_column, …
FROM mytable;
```
El resultado de esta consulta será un conjunto bidimensional de filas y columnas, efectivamente una copia de la tabla, pero solo con las columnas que solicitamos.

:::tip
Si queremos recuperar absolutamente todas las columnas de datos de una tabla, podemos usar la abreviatura asterisco (* ) en lugar de enumerar todos los nombres de las columnas individualmente.

Con el asterisco, recuperamos todas las filas de la tabla
:::

```sql
SELECT * 
FROM mytable;
```
Ejemplos

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