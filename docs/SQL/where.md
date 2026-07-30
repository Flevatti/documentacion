---
sidebar_position: 3
---
# Where
## Consultas con restricciones
- Si una tabla tuviera millones de filas, leer todos los datos sería ineficiente.
- Para obtener solo los datos que necesitamos, utilizamos la cláusula `WHERE` en la consulta. Esta evalúa cada fila y, si cumple la condición indicada, la incluye en el resultado; de lo contrario, la descarta.

:::tip
- Las condiciones son [operadores relacionales](https://flevatti.github.io/documentacion/docs/Javascript/basico#operadores-relacionales)

:::


```sql
SELECT column, another_column, …
FROM mytable
WHERE condition
    AND/OR another_condition
    AND/OR …;
```

- Se pueden construir cláusulas más complejas utilizando las palabras clave `AND` u `OR` (por ejemplo: ruedas `>= 4` `AND` puertas `<= 2`).


:::tip AND Y OR
- [¿Cómo se usa AND?](https://flevatti.github.io/documentacion/docs/Javascript/basico4#-and)
- [¿Cómo se usa OR?](https://flevatti.github.io/documentacion/docs/Javascript/basico4#-or)
:::


- A continuación, se muestran algunos operadores útiles que se pueden utilizar con datos numéricos (de cualquier tipo):

| Operador | Condición | Ejemplo |
| :---: | :--- | :--- |
| `=`, `!=`, `<`, `<=`, `>`, `>=` | Operadores numéricos estándar | `col_name != 4` |
| `BETWEEN ... AND ...` | El número está dentro del rango indicado (incluyendo ambos valores) | `col_name BETWEEN 1.5 AND 10.5` |
| `NOT BETWEEN ... AND ...` | El número no está dentro del rango indicado (incluyendo ambos valores) | `col_name NOT BETWEEN 1.5 AND 10.5` |
| `IN (...)` | El número existe dentro de una lista de valores | `col_name IN (2,4,6)` |
| `NOT IN (...)` | El número no existe dentro de una lista de valores | `col_name NOT IN (2,4,6)` |

:::tip
Utilizar cláusulas para filtrar las filas devueltas permite obtener únicamente los datos necesarios y también puede mejorar el rendimiento de la consulta al evitar procesar información innecesaria.
:::

Ejemplos:

```sql
SELECT * FROM movies where id = 6
```
```sql

SELECT * FROM movies where Year between 2000 AND 2010

```
```sql
SELECT * FROM movies where Year NOT between 2000 AND 2010
```
```sql
SELECT * FROM movies where ID in (1,2,3,4,5)
```
##  Operadores de String
- Al escribir cláusulas `WHERE`, SQL admite una serie de operadores útiles para realizar comparaciones de texto y coincidencia de patrones (buscar una secuencia específica de caracteres dentro de un texto). A continuación, se muestran algunos operadores comunes para trabajar con datos de texto:


| Operador | Condición | Ejemplo |
| :---: | :--- | :--- |
| `=` | Funciona como el `===` de JavaScript. Distingue entre mayúsculas y minúsculas. | `col_name = "abc"` |
| `!=` o `<>` | Funciona como el `!==` de JavaScript. Distingue entre mayúsculas y minúsculas. | `col_name != "abc"` |
| `LIKE` | Es similar al operador `=`, pero permite utilizar comodines para realizar búsquedas más flexibles. | `col_name LIKE "ABC"` |
| `NOT LIKE` | Es similar al operador `!=`, pero permite utilizar comodines para realizar búsquedas más flexibles. | `col_name NOT LIKE "ABC"` |
| `%` | Representa cero o más caracteres dentro de un texto (se utiliza con `LIKE` o `NOT LIKE`). | `col_name LIKE "%at%"` |
| `_` | Representa un único carácter dentro de un texto (se utiliza con `LIKE` o `NOT LIKE`). | `col_name LIKE "AN_"` |
| `IN (...)` | La cadena coincide con alguno de los valores dentro de una lista. | `col_name IN ("a","b","c")` |
| `NOT IN (...)` | La cadena no coincide con ninguno de los valores dentro de una lista. | `col_name NOT IN ("a","b","c")` |





:::tip
Para optimizar el LIKE, trata que no arranque con un comodín (% o _)
:::


:::tip ¿Sabías?

Todas las cadenas deben estar entre comillas para que el analizador de consultas pueda distinguir las palabras de la cadena de las palabras clave SQL.


:::

Ejemplos:

```sql
SELECT * FROM movies WHERE Title LIKE 'Toy Story%'
```

```sql
SELECT * FROM movies WHERE Director = "John Lasseter"
```
```sql
SELECT * FROM movies WHERE Director != "John Lasseter"
```
```sql

SELECT * FROM movies WHERE Title LIKE 'WALL-%'

```