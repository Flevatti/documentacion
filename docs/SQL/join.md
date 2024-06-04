---
sidebar_position: 5
---
# Join

## Normalizacion

- Es cuando los datos de una entidad se dividen en partes y se almacenan en múltiples tablas independientes 

### Normalización de la base de datos

La normalización de la base de datos es útil porque minimiza los datos duplicados en una sola tabla y permite que los datos de la base de datos crezcan independientemente unos de otros (es decir, los tipos de motores de automóvil pueden crecer independientemente de cada tipo de automóvil)

Como compensación, las consultas se vuelven un poco más complejas, ya que tienen que poder encontrar datos de diferentes partes de la base de datos, y pueden surgir problemas de rendimiento cuando se trabaja con muchas tablas grandes.
Para responder preguntas sobre una entidad que tiene datos que abarcan varias tablas en una base de datos normalizada, debemos aprender a escribir una consulta que pueda combinar todos esos datos y extraer exactamente la información que necesitamos.

##  Inner Join

Cada fila de una tabla debe tener una clave principal que identifique esa entidad de forma única en la base de datos. Es una clave primaria  que puede ser un entero que se incrementa automáticamente (porque ahorran espacio), pero también puede ser una cadena, valor hash, siempre que sea único.



:::tip cláusula ON
Al usar la cláusula JOIN en una consulta, podemos combinar filas de dos tablas (o más) separadas usando esta clave única. 

:::
:::tip Uniones
Se puede  hacer dos join a la misma tabla pero con diferente relación (el país de un empleado y de un cliente).
:::


```sql
SELECT column, another_table_column, …
FROM mytable
INNER JOIN another_table 
    ON mytable.fk = another_table.pk
WHERE condition(s)
ORDER BY column, … ASC/DESC
LIMIT num_limit OFFSET num_offset;

```

El INNER JOIN es un proceso que hace coincidir las filas de la primera tabla y las filas de la segunda tabla que tienen  una columna (cada una de las tablas) con el mismo valor (Las columnas que deben tener el mismo valor la establece la restricción ON) para crear una fila  con las columnas combinadas de ambas tablas. Después de unir las tablas, se aplican las otras cláusulas.


:::tip ¿Sabías?
Es posible que vea consultas en las que INNER JOIN se escribe simplemente como JOIN. Estos dos son equivalentes, pero continuaremos refiriéndonos a estas uniones como uniones internas porque hacen que la consulta sea más fácil de leer una vez que comience a usar otros tipos de uniones, que se presentarán en la siguiente lección.
:::


```sql
SELECT * FROM movies JOIN Boxoffice  ON (Id = Movie_id);
```
```sql
SELECT * FROM movies INNER JOIN Boxoffice  ON (Id = Movie_id) 
WHERE  International_sales > Domestic_sales;

```
```sql
SELECT * FROM movies INNER JOIN Boxoffice  ON (Id = Movie_id) 
ORDER BY Rating DESC

```

## Outer Join
:::warning
INNER JOIN  solo contiene datos que pertenecen a ambas tablas.
::: 
Si las dos tablas tienen datos asimétricos, lo que puede suceder fácilmente cuando los datos se ingresan en diferentes etapas, entonces tendríamos que usar a LEFT JOIN, RIGHT JOIN o en su lugar FULL JOIN para asegurarnos de que los datos que necesita no se queden fuera de los resultados.

```sql
SELECT column, another_column, …
FROM mytable
INNER/LEFT/RIGHT/FULL JOIN another_table 
    ON mytable.id = another_table.matching_id
WHERE condition(s)
ORDER BY column, … ASC/DESC
LIMIT num_limit OFFSET num_offset;

```
## Left / Right / Full
Al igual que INNER JOIN
estas tres nuevas uniones, deben especificar en qué columna se unirán los datos(que columnas (una de cada tabla) tendran el mismo valor).

Al unir la tabla A a la tabla B,  LEFT JOIN simplemente incluye filas de A independientemente de si se encuentra una fila coincidente en B. RIGHT JOIN es lo mismo, pero invertido, incluyendo filas en B independientemente de si se encuentra una coincidencia en A. Finalmente tenemos,  FULL JOIN en donde  las filas de ambas tablas se mantienen, independientemente de si existe una fila coincidente en la otra tabla.

:::tip
Cuando use cualquiera de estas nuevas uniones, probablemente tendrá que escribir lógica adicional para lidiar con NULLs en el resultado y las restricciones
:::

:::tip ¿Sabías?
Es posible que vea las consultas con estas uniones se escriban como LEFT OUTER JOIN, RIGHT OUTER JOIN o FULL OUTER JOIN, pero la palabra clave OUTER mantiene la compatibilidad de SQL-92 y estas consultas son simplemente equivalente a LEFT JOIN, RIGHT JOIN y FULL JOIN respectivamente.

:::

```sql
SELECT DISTINCT building_name, role 
FROM buildings 
  LEFT JOIN employees
    ON building_name = building;

```


## Valores Null

Siempre es bueno reducir la posibilidad de valores NULL en las bases de datos porque requieren una atención especial al construir consultas, restricciones (ciertas funciones se comportan de manera diferente con valores nulos) y al procesar los resultados.

Una alternativa a los valores NULL en su base de datos es tener valores predeterminados, como 0 para datos numéricos, cadenas vacías para datos de texto, etc. Pero si su base de datos necesita almacenar datos incompletos, entonces los valores NULL pueden ser apropiados si los valores predeterminados sesgarán el análisis posterior (por ejemplo, al tomar promedios de datos numéricos).

A veces, tampoco es posible evitar valores NULL, al unir dos tablas con datos asimétricos. En estos casos, puede buscar valores NULL con la cláusula WHERE mediante la restricción IS NULL o IS NOT NULL.

```sql
SELECT column, another_column, …
FROM mytable
WHERE column IS/IS NOT NULL
AND/OR another_condition
AND/OR …;
```

```sql
SELECT Name , Role FROM employees WHERE building IS  NULL;
```

```sql
SELECT DISTINCT building_name
FROM buildings 
  LEFT JOIN employees
    ON building_name = building
WHERE role IS NULL;

```

## Uniones, intersecciones y excepciones
Cuando se trabaja con varias tablas, el operador UNION y UNION ALL permite agregar los resultados de una consulta a otra asumiendo que tienen el mismo recuento de columnas, orden y tipo de datos(no verifica). Si usa UNION sin el ALL, las filas duplicadas entre las tablas se eliminarán del resultado.

```sql
SELECT column, another_column
   FROM mytable
UNION / UNION ALL / INTERSECT / EXCEPT
SELECT other_column, yet_another_column
   FROM another_table
ORDER BY column DESC
LIMIT n;
```
UNION ocurre antes de ORDER BY y LIMIT. No es común usar UNION, pero si tiene datos en diferentes tablas que no se pueden unir y procesar, puede ser una alternativa a realizar múltiples consultas en la base de datos.



De manera similar a UNION, el operador  INTERSECT se asegurará de que solo se devuelvan las filas que sean idénticas en ambos conjuntos de resultados, y el  operador EXCEPT se asegurará de que solo se devuelvan las filas del primer conjunto de resultados que no están en el segundo.

Ambos INTERSECT y EXCEPT también descartan filas duplicadas después de sus respectivas operaciones, aunque algunas bases de datos también admiten INTERSECT ALL y EXCEPT ALL permiten que los duplicados no se descarten.

## Join Lateral
- Una unión lateral en PostgreSQL es como ese amigo que siempre trae otro amigo a la fiesta. En términos de SQL, permite que una subconsulta en la cláusula FROM haga referencia a columnas  de las filas de la tabla anterior en la cláusula FROM. Esto es muy útil cuando deseas generar una serie de valores para cada fila de una tabla.
- En otras palabras, LATERAL JOIN te permite crear una subconsulta que se evalúa por cada fila de la tabla anterior, lo que significa que la subconsulta puede utilizar valores de la fila actual de la tabla anterior en su consulta.
- Esto es útil en situaciones en las que necesitas realizar una consulta compleja que depende de los valores de la fila actual de la tabla anterior.
- La sintaxis de LATERAL JOIN es la siguiente:

```sql
SELECT *
FROM table1,
     LATERAL (
       SELECT *
       FROM table2
       WHERE table2.column = table1.column
     ) AS subquery_alias;
```
:::tip Observación
- En este ejemplo, table1 es la tabla anterior y table2 es la tabla que se une a table1 utilizando una subconsulta. La subconsulta se evalúa por cada fila de table1, y la cláusula WHERE se utiliza para relacionar las filas de table1 y table2.
- El AS se utiliza para asignar un alias a la subconsulta. En este caso, el alias es subquery_alias. El alias se utiliza para referirse a la subconsulta en la cláusula SELECT o en otras partes de la consulta.
- Entonces sería como: FROM table1 , [Resultado de la subconsulta]. Él [Resultado de la subconsulta] cambia por cada fila de table1. Por lo tanto, es como si se nos permitiera especificar dos tablas en el FROM.
:::

- Aquí hay otro ejemplo de un joint lateral en PostgreSQL:

```sql
SELECT main.id, sub.sub_value
FROM main_table AS main
JOIN LATERAL (
  SELECT sub_value
  FROM sub_table
  WHERE sub_table.main_id = main.id
) AS sub ON TRUE;
```
:::tip observación
- En este ejemplo, la subconsulta en la cláusula FROM (sub) hace referencia a la columna id de la tabla main_table (main). La palabra clave LATERAL permite que esta referencia sea válida.
- El joint lateral puede ser útil en situaciones en las que necesita realizar una subconsulta correlacionada, que es una subconsulta que depende de valores de la consulta exterior. Al utilizar un joint lateral, puede evitar la necesidad de repetir la misma subconsulta para cada fila de la consulta exterior.
:::



- LATERAL JOIN es una característica que PostgreSQL  implemento, sin embargo, luego surgieron otros motores de base de datos también la han adoptado.
- Es posible que otros motores de base de datos, como SQL Server, admitan características similares, aunque no necesariamente con el mismo nombre.
- aquí hay un ejemplo de una característica similar en SQL Server, llamada "APPLY":


```sql
SELECT *
FROM main_table m
CROSS APPLY (
  SELECT sub_value
  FROM sub_table
  WHERE sub_table.main_id = m.id
) sub;
```

:::tip
- Aunque el LATERAL JOIN se originó en PostgreSQL, no es exclusivo de este motor de base de datos y otros motores de base de datos también lo han adoptado o tienen características similares.
- Es importante destacar que LATERAL JOIN solo está disponible en algunos sistemas de bases de datos, como PostgreSQL y SQL Server. Si estás utilizando otro sistema de base de datos, como MySQL o Oracle, deberás utilizar una subconsulta tradicional o una consulta más compleja para lograr el mismo resultado.
:::