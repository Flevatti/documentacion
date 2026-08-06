---
sidebar_position: 6
---
# Expresiones y funciones

## Expresiones/funciones
Las expresiones permiten modificar los valores devueltos por una consulta. Para ello, podemos utilizar operadores aritméticos y funciones matemáticas o de cadena de texto, como se muestra en el siguiente ejemplo:
```sql
SELECT particle_speed / 2.0 AS half_particle_speed
FROM physics_data
WHERE ABS(particle_position) * 10.0 > 500;	

```
:::tip Función `ABS()`
- La función `ABS()` devuelve el valor absoluto de un número, es decir, elimina su signo (positivo o negativo) y obtiene su valor numérico.
- El resultado siempre es un número positivo o cero.
:::


:::tip
Se pueden usar funciones y operaciones aritméticas en las consultas 
:::
## As
Cada base de datos tiene sus propias funciones matemáticas, de cadena y de fecha que se pueden utilizar en una consulta. Estas funciones se pueden consultar en la documentación de cada motor.

El uso de expresiones puede ahorrar tiempo y evitar un procesamiento adicional de los datos obtenidos, pero también puede hacer que la consulta sea más difícil de leer. Por eso, cuando se utilicen expresiones en `SELECT`, se recomienda asignarles un alias más descriptivo utilizando la palabra clave `AS`.

```sql
SELECT col_expression AS expr_description, …
FROM mytable;

```
Además de las expresiones, las columnas e incluso las tablas también pueden tener alias para simplificar consultas más complejas:

```sql
SELECT column AS better_column_name, …
FROM a_long_widgets_table_name AS mywidgets
INNER JOIN widget_sales
  ON mywidgets.id = widget_sales.widget_id;
```
:::tip
Se utiliza el punto para acceder a una columna específica de una tabla.

Sirve para evitar ambigüedades cuando dos tablas tienen una columna con el mismo nombre.

`tabla.columna`

También podemos utilizar el alias como reemplazo del nombre de una tabla:

`alias.columna`
:::

```sql
SELECT title, (domestic_sales + international_sales) / 1000000 AS gross_sales_millions
FROM movies
  JOIN boxoffice
    ON movies.id = boxoffice.movie_id;

```
```sql

SELECT title, rating * 10 AS rating_percent
FROM movies
  JOIN boxoffice
    ON movies.id = boxoffice.movie_id;

```
```sql
SELECT title, year
FROM movies
WHERE year % 2 = 0;

```
## Funciones de grupo 
SQL también admite funciones agregadas o de grupo, que permiten resumir la información de un grupo de filas.

```sql
SELECT AGG_FUNC(column_or_expression) AS aggregate_description, …
FROM mytable
WHERE constraint_expression;

```

Sin una agrupación especificada por `GROUP BY` (lo veremos en la siguiente sección), la función agregada se ejecuta utilizando todas las filas devueltas por la consulta y devuelve un único valor.

Al igual que con las expresiones, asignar un alias a una función agregada facilita la lectura de los resultados.

:::tip
La función utiliza un conjunto de filas y devuelve un único valor.
:::

#### Estas son algunas de las funciones agregadas más usadas:

| Función | Descripción |
| :------: | :---------- |
| `COUNT(*)`, `COUNT(columna)` | Si no se especifica ninguna columna (`COUNT(*)`), cuenta el número de filas del grupo. De lo contrario (`COUNT(columna)`), cuenta únicamente las filas cuyo valor en la columna especificada no es `NULL`. |
| `MIN(columna)` | Devuelve el valor numérico más pequeño de la columna especificada en el grupo de filas. |
| `MAX(columna)` | Devuelve el valor numérico más grande de la columna especificada en el grupo de filas. |
| `AVG(columna)` | Devuelve el valor numérico promedio de la columna especificada en el grupo de filas. |
| `SUM(columna)` | Devuelve la suma de todos los valores numéricos de la columna especificada en el grupo de filas. |

## Group By 
Además de aplicar una función agregada en todas las filas de una tabla, se  puede aplicar las funciones agregadas a grupos  de datos dentro de ese grupo (es decir, ventas de taquilla para películas de acción y comedias).

Esto generaría tantos resultados como grupos definidos por la cláusula GROUP BY.

```sql
SELECT AGG_FUNC(column_or_expression) AS aggregate_description, …
FROM mytable
WHERE constraint_expression
GROUP BY column;
```
:::tip Group By
La cláusula GROUP BY funciona agrupando filas que tienen el mismo valor en la columna especificada.
:::

```sql
SELECT max(Years_employed) FROM employees;
SELECT role, AVG(years_employed) as Average_years_employed
FROM employees
GROUP BY role;

```

```sql
SELECT building, SUM(years_employed) as Total_years_employed
FROM employees
GROUP BY building;

```

## Having 
si la cláusula  GROUP BY se ejecuta después de la cláusula WHERE (que filtra las filas), ¿cómo filtramos exactamente las filas agrupadas(grupo)?

Afortunadamente, SQL nos permite hacer esto agregando una  cláusula HAVING adicional que se usa específicamente con la  cláusula GROUP BY para permitirnos filtrar grupos de filas.

:::tip
WHERE = Filtra las filas

Los que pasen el WHERE, forman grupos (segun la columna especificada)

HAVING = Filtra los grupos (conjuntos de filas).

Para que el grupo no se descarte, la condición debe ser true.
:::

```sql
SELECT group_by_column, AGG_FUNC(column_expression) AS aggregate_result_alias, …
FROM mytable
WHERE condition
GROUP BY column
HAVING group_condition;

```

 HAVING se escribe de la misma forma que WHERE y se aplican a las filas agrupadas.  A menudo es necesario poder aplicar restricciones adicionales para entender rápidamente los datos.

:::tip ¿Sabías?
Si no está utilizando la cláusula `GROUP BY`, una cláusula simple como ` WHERE` será suficiente.
:::

 ```sql
SELECT role, COUNT(*) as Number_of_artists
FROM employees
WHERE role = "Artist";

 ```
  ```sql
  SELECT role, COUNT(*)
FROM employees
GROUP BY role;

 
 ```
  ```sql
 SELECT role, SUM(years_employed)
FROM employees
GROUP BY role
HAVING role = "Engineer";

 ```