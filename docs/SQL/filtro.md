---
sidebar_position: 4
---
# Distinct  / Order By / Limit / Offset

## Distinct
- En algunas consultas, es posible que varias filas tengan el mismo valor en una determinada columna. Por ejemplo, varias películas pueden haberse estrenado en el mismo año.
- Para evitar que aparezcan resultados repetidos, SQL proporciona la palabra clave `DISTINCT`:
    - Si se selecciona una sola columna, `DISTINCT` elimina los valores repetidos. El resultado es un conjunto de valores únicos.
    - Si se seleccionan varias columnas (por ejemplo, nombre y año de la película), `DISTINCT` elimina únicamente las filas que sean exactamente iguales. El resultado son todas las filas cuya combinación de valores es única.


```sql
SELECT DISTINCT column, another_column, …
FROM mytable
WHERE condition(s);
```




## Order By 


Los datos almacenados en una base de datos no suelen guardarse en un orden específico. Por este motivo, los resultados de una consulta pueden aparecer desordenados y ser difíciles de analizar, especialmente cuando una tabla contiene miles o millones de filas.

Para solucionar esto, SQL proporciona la cláusula `ORDER BY`, que permite ordenar los resultados de una consulta de forma ascendente o descendente según los valores de una o varias columnas.

```sql
SELECT column, another_column, …
FROM mytable
WHERE condition(s)
ORDER BY column ASC/DESC;

```

:::tip
Cuando se utiliza `ORDER BY`, las filas se ordenan según los valores de la columna indicada. Algunas bases de datos permiten configurar cómo se ordenan los textos de distintos idiomas.
:::
## LIMIT -- OFFSET


Las cláusulas `LIMIT` y `OFFSET` permiten controlar qué filas se muestran en el resultado de una consulta.

- `LIMIT` indica la cantidad de filas que devolverá la consulta.
- `OFFSET` indica desde qué fila comenzar a contar para aplicar el `LIMIT`.
```sql
SELECT column, another_column, …
FROM mytable
WHERE condition(s)
ORDER BY column ASC/DESC
LIMIT num_limit OFFSET num_offset;
```
Ejemplos:

```sql
select DISTINCT Director from Movies ORDER BY Director ASC
```

```sql
select * from Movies  order by Year DESC limit 4
```

```sql
select * from Movies  order by title ASC limit 5
```

```sql
select * from Movies  order by title ASC limit 5 OFFSET 5
```
