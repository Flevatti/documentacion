---
sidebar_position: 8
---
# SubConsultas
- A veces necesitamos tanta información que una sola consulta no es suficiente.
- En estos casos, podemos realizar varias consultas y procesar los datos nosotros mismos, o utilizar subconsultas para crear una consulta más compleja.



:::tip Ejemplo
Supongamos que su empresa tiene una lista de todos los **vendedores**, con información sobre los ingresos que genera cada uno y su salario.

Los tiempos son ajustados y ahora desea saber cuáles de sus **vendedores** le cuestan a la empresa más que el ingreso promedio de todos los vendedores.
:::

1. Calcular el ingreso promedio generado por todos los vendedores.
```sql
SELECT AVG(revenue_generated)
FROM sales_associates;

```
2. Luego, usando ese resultado, podemos comparar el salario de cada vendedor con ese valor. Para usarlo como una subconsulta, podemos escribirlo directamente en la cláusula `WHERE` de la consulta:

```sql
SELECT *
FROM sales_associates
WHERE salary > 
   (SELECT AVG(revenue_generated)
    FROM sales_associates);

```
A medida que se ejecuta la consulta, el salario de cada vendedor se comparará con el valor obtenido por la subconsulta interna.


:::tip Paréntesis()
Las subconsultas pueden utilizarse en diferentes partes de una consulta, como `WHERE`, `SELECT`, `FROM` o `HAVING`, dependiendo de lo que necesitemos obtener. 

Como las subconsultas pueden anidarse, cada una debe estar encerrada entre paréntesis para indicar dónde comienza y termina.
:::

## Subconsultas correlacionadas
- Una subconsulta correlacionada es una subconsulta que utiliza información de la consulta externa (anterior) para poder ejecutarse.
- A diferencia de las subconsultas anteriores, la subconsulta se ejecuta por cada fila de la consulta externa, ya que utiliza información de la fila.


:::tip Ejemplo
Ahora supongamos que tenemos una lista de empleados de toda la empresa, junto con su departamento, los ingresos que generan y su salario.

Ahora queremos encontrar los empleados que tienen un salario mayor al salario promedio de su departamento.
:::

Para cada empleado, necesitamos comparar su salario con el ingreso promedio de las personas de su departamento. Para calcular ese promedio, la subconsulta necesita saber en qué departamento se encuentra cada empleado:

```sql
SELECT *
FROM employees
WHERE salary > 
   (SELECT AVG(revenue_generated)
    FROM employees AS dept_employees
    WHERE dept_employees.department = employees.department);

```
:::tip
Las subconsultas correlacionadas pueden ser útiles, pero también pueden hacer que una consulta sea más difícil de entender.

- Es recomendable usar alias descriptivos para facilitar la lectura.
- El rendimiento puede variar según la base de datos.
- Este tipo de subconsultas puede ser más difícil de optimizar.
:::

## Pruebas de existencia

El operador `IN` se utiliza para comprobar si el valor de una columna se encuentra dentro de una lista de valores.

En consultas más complejas, podemos utilizar subconsultas para obtener una lista de valores y comprobar si el valor de la columna se encuentra en ella.

```sql
SELECT *, …
FROM mytable
WHERE column
    IN/NOT IN (SELECT another_column
               FROM another_table);

```

:::tip
La subconsulta debe seleccionar columnas o usar expresiones para generar una lista que usará el `IN`.

Este tipo de restricción es útil cuando la condición depende de los datos actuales.
:::

## Indexación 
- Es una técnica que utilizan las bases de datos para encontrar datos más rápido. De manera resumida, un índice contiene:
  - Los valores de una o más columnas específicas.
  - Referencias que apuntan a las filas donde se encuentran dichos valores.
  - Permite una búsqueda más rápida sin necesidad de recorrer **toda la tabla**.

:::tip Analogía
- La analogía más usada para entender la indexación es el **índice de un libro**. Si quieres encontrar el capítulo sobre "normalización" en un libro de 600 páginas, tienes dos opciones:
  - 📖 **Sin índice:** leer el libro hasta encontrarlo (`full table scan`).
  - 📑 **Con índice:** buscar `"normalización → página 342"` en el índice e ir directamente a esa página.

- En las bases de datos ocurre algo similar:
  - **Sin índice:** el motor revisa las filas una por una.
  - **Con índice:** el motor puede encontrar directamente dónde están los datos.
:::


#### Características de la indexación

- Pueden afectar la velocidad y el espacio que utiliza un índice.

1. **Tipos de acceso:** indica cómo se pueden buscar los datos, por ejemplo, por un valor específico o por un rango de valores.
2. **Tiempo de acceso:** tiempo que tarda el índice en encontrar los datos.
3. **Tiempo de inserción:** tiempo que tarda en agregar nuevos datos y actualizar el índice.
4. **Tiempo de eliminación:** tiempo que tarda en eliminar datos y actualizar el índice.
5. **Espacio adicional:** espacio que ocupa el índice en la base de datos.








:::tip info
- [Indexación en bases de datos](https://www.geeksforgeeks.org/dbms/indexing-in-databases-set-1/)
- [Tipos de índices en SQL Server](https://www.onlinemanipal.com/blogs/important-types-of-indexes-in-sql-server)
- [INDEX](https://aprendersql.es/glosario-sql/index/)
- [Índices en SQL: Qué son y cómo aceleran tus consultas](https://escueladeprogramacion.net/blog/indices-en-sql-que-son-y-como-aceleran-tus-consultas)
- [¿Qué es un índice de base de datos?](https://www.codecademy.com/article/sql-indexes)
:::