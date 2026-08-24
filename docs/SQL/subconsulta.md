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

