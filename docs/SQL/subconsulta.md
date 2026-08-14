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


### Organización de archivos en la indexación
- La organización de archivos se refiere a cómo la base de datos organiza y guarda los datos y los índices en el disco.
- A continuación, se muestran algunos tipos comunes de organización de archivos utilizados en la indexación.

#### 1.Organización secuencial ordenada de archivos (Sequential Ordered File Organization)
- En este tipo de organización, los datos se guardan siguiendo un orden determinado. El índice también mantiene los valores ordenados para poder encontrar los datos más rápido.
- Los índices pueden ser **densos** o **dispersos**.
##### Índice denso
- Un índice denso guarda una referencia para cada registro de la tabla.
- Por ejemplo, si una tabla tiene 5 registros, el índice tendrá una referencia para cada uno de ellos, aunque algunos tengan el mismo valor.
##### Índice disperso
- Un índice disperso no tiene una referencia para cada registro de la tabla. En su lugar, tiene referencias para algunos registros.
- Para encontrar un registro, el índice nos indica aproximadamente dónde buscarlo.
- **Método de acceso:** Para encontrar un registro, buscamos una referencia que nos lleve al valor más cercano menor o igual al valor que buscamos. Luego, comenzamos a buscar desde esa posición hasta encontrar el registro.


#### 2. Organización de archivos hash (Hash File Organization)
- Utiliza una `función hash` para determinar dónde guardar cada dato.
- La `función hash` toma un valor, por ejemplo un `ID`, y determina dónde se encuentra el dato. Luego, guarda una referencia que permite encontrar ese dato.
- Cuando buscamos un valor, se utiliza nuevamente la `función hash` para encontrar rápidamente su ubicación.
- Es útil para buscar un valor específico, pero no para buscar valores dentro de un rango.


### Tipos de métodos de indexación
- Existen diferentes técnicas de indexación, y cada una está pensada para diferentes tipos de búsquedas.

#### 1. Indexación agrupada (Clustered Indexing)
- La indexación agrupada organiza los registros relacionados de forma que queden juntos, lo que permite encontrarlos más rápido.
- **Características:**
  - Los datos se ordenan y agrupan según una columna específica.
  - Los registros relacionados quedan juntos.
  - El índice contiene los valores de la columna utilizada para ordenar y referencias a un conjunto de registros.
  - Por ejemplo, los estudiantes del mismo semestre pueden quedar juntos.
  - Esto puede mejorar el rendimiento en la búsqueda de registros relacionados o al realizar operaciones de unión.
 
#### 2. Indexación primaria (Primary Indexing)
- La indexación primaria utiliza la `PRIMARY KEY` para ordenar los registros y facilitar su búsqueda.
- **Características:**
  - Los datos se ordenan según la `PRIMARY KEY`.
  - Cada registro tiene un valor único en la `PRIMARY KEY`.
  - El índice contiene los valores de la `PRIMARY KEY` y referencias a los registros correspondientes.
  - Los datos se almacenan en orden, lo que permite realizar búsquedas más rápidas.

#### 3. Indexación no agrupada o secundaria (Non-clustered or Secondary Indexing)
- La indexación no agrupada contiene referencias que indican dónde se encuentran los datos.
- Los datos no se ordenan, sino que mantienen su orden original.
- **Características:**
  - El índice contiene los valores y referencias a los registros correspondientes.
  - Se parece al índice de un libro, donde el índice indica en qué página se encuentra la información.
  - Es más lenta que la indexación agrupada, porque después de encontrar la referencia hay que ir a buscar el registro.
  - Solo utiliza índices densos.


#### 4. Indexación multinivel (Multilevel Indexing)
- Esto permite tener índices dentro de otros índices (multiniveles) para facilitar la búsqueda de datos y optimizar el almacenamiento.
- **Características:**
  - Un índice contiene referencias a otros índices.
  - Los niveles siguientes permiten llegar hasta los datos que estamos buscando.
  - Permite trabajar con índices grandes de forma más eficiente.
  - Esto permite encontrar los datos más rápido.


#### 5. Índice de almacenamiento en columnas (Column store Index)
- Este tipo de índice almacena solo los valores de las columnas especificadas en lugar de almacenar las filas completas.
- **Características:**
  - El índice solo almacena los valores de las columnas especificadas.
  - Los datos se almacenan en grupos comprimidos.
  - Permite leer solo las columnas necesarias para una consulta.
  - Es especialmente útil para consultas sobre grandes cantidades de datos.


#### 6. Índice filtrado (Filtered Index)
- Es un índice que se crea solo para los registros que cumplen una condición específica.
- **Características:**
  - El índice contiene solo los valores que cumplen esa condición.
  - Permite buscar más rápido dentro de ese conjunto de registros.
  - Al incluir solo algunos registros, utiliza menos espacio.

#### 7. Índice hash (Hash Index)
- Es un tipo de índice que utiliza una `función hash` para determinar dónde se encuentra cada dato.
- **Características:**
  - La `función hash` toma un valor y determina qué referencia utilizar para encontrarlo.
  - El índice guarda referencias que permiten encontrar los datos.
  - Permite encontrar rápidamente un valor específico.
  - No es adecuado para búsquedas por rangos.

#### 8. Índice único (Unique Index)
- Es un tipo de índice que no permite que se repitan los valores de una columna.
- **Características:**
  - El índice almacena los valores de las columnas especificadas y referencias a los registros correspondientes.
  - Verifica que los valores no estén duplicados.
  - Permite garantizar que cada valor sea único.
  - Ayuda a mantener la integridad de los datos.
  - También puede ayudar al optimizador de consultas a encontrar los datos más rápido.



### Crear un INDEX con SQL
- **Sintaxis:**
```SQL
CREATE INDEX nombre_indice
ON nombre_tabla (columna, columna, columna, ...);

PRAGMA index_list('nombre_tabla');
```
:::tip Observación
- `CREATE INDEX` es el comando para crear un **índice normal**. Con `CREATE UNIQUE INDEX` creamos un **índice único**.
- `nombre_indice`: es el nombre que tendrá el índice, por ejemplo, `idx_nombreTabla_columna`.
- `nombre_tabla`: el índice creado tendrá valores y referencias de filas de esta tabla.
- `columna`: es la columna cuyos valores se utilizarán para crear el índice. Los valores pueden estar repetidos y se pueden especificar más de una columna.
- El índice creado almacenará los valores de las columnas especificadas y referencias a los registros correspondientes.
- Por último, `PRAGMA index_list('nombre_tabla');` permite ver los índices de la tabla y comprobar si el nuestro se creó correctamente.
:::

#### Orden
- El orden de las columnas al crear un índice es **IMPORTANTE** porque el índice se organiza siguiendo ese mismo orden.
- SQL tiene en cuenta este orden al buscar los registros, por lo que puede afectar la búsqueda.
- Para entenderlo, imaginemos que tenemos la siguiente consulta:
```sql
CREATE INDEX idx_pedidos_cliente_fecha
ON pedidos (cliente_id, fecha, id);
```
- Podemos crear un índice para optimizar esta consulta:
```sql
CREATE INDEX idx_pedidos_cliente_fecha
ON pedidos (cliente_id, fecha, id);
```
- En este caso, el índice tiene el siguiente orden:
```txt
1. cliente_id
   └── 2. fecha
        └── 3. id
```
- Es decir, se agrupan todos los `id` que pertenecen a la misma fecha y se agrupan todas las fechas que pertenecen al mismo `cliente_id`.
- Nos quedaría una organización como esta:
| cliente_id | fecha      | id |
| ---------: | ---------- | -: |
|          1 | 2026-01-01 | 10 |
|          1 | 2026-01-03 | 15 |
|          1 | 2026-01-05 | 20 |
|          2 | 2026-01-01 | 11 |
|          2 | 2026-01-04 | 18 |

- Al ejecutar la consulta:
```sql
WHERE cliente_id = 1
ORDER BY fecha, id
```
- La BD aprovecha muy bien el índice: se accede directamente al grupo `cliente_id = 1` y, dentro de ese grupo, los registros ya están ordenados por `fecha` e `id` (por defecto, el índice los ordena teniendo en cuenta el valor de cada columna).

#### ¿Qué pasa si cambiamos el orden? (Seguir aca)
- Si hacemos:
```sql
CREATE INDEX idx_pedidos_fecha_cliente
ON pedidos (fecha, cliente_id, id);
```
- Ahora el orden es:
```txt
1. fecha
   └── 2. cliente_id
        └── 3. id
```
- Es decir se agrupan todas lass id que pertenecen al mismo cliente_id y se agrupan todos los cliente_id que pertenecen a la misma fecha.
- Nos quedaria una tabla como:
| fecha      | cliente_id | id |
| ---------- | ---------: | -: |
| 2026-01-01 |          1 | 10 |
| 2026-01-01 |          2 | 11 |
| 2026-01-03 |          1 | 15 |
| 2026-01-04 |          2 | 18 |
| 2026-01-05 |          1 | 20 |

- Ahora los registros de cliente_id = 1 ya no están juntos. Están repartidos entre diferentes fechas.
- Entonces, cuando hacemos:
```sql
WHERE cliente_id = 1
```
- El índice no puede simplemente ir al bloque donde están todos los registros que pertenecen al cliente 1, porque no existe un único bloque para ese cliente. Tiene que buscar entre diferentes fechas.
- De esta manera el indice en lugar de optimizar, estamos haciendo mas lenta la consulta.
- Por lo tanto es importante tener en cuenta cada parte de la consulta que se quiere optimizar antes de crear un indice.


:::tip
- `CREATE INDEX` ultimamente es compatible con la mayoria de las bases de datos pero por las dudas se recomienda leer la documentacion de como crear indices para optimizar las consultas.
:::


#### Ventajas

- **Consultas más rápidas:** permite encontrar datos más rápido.
- **Acceso eficiente:** permite encontrar los datos más rápido al evitar búsquedas innecesarias.
- **Ordenación mejorada:** facilita y acelera la ordenación de los datos.
- **Buen rendimiento:** permite mantener búsquedas rápidas incluso cuando aumenta la cantidad de datos.
- **Integridad de los datos:** los índices únicos evitan que se repitan valores en una columna.

#### Desventajas

- **Mayor espacio de almacenamiento:** los índices ocupan espacio adicional en la base de datos.
- **Mayor mantenimiento:** los índices deben actualizarse cuando cambian los datos.
- **Inserciones y actualizaciones más lentas:** agregar o modificar datos puede tomar más tiempo porque también se debe actualizar el índice.
- **Elección del índice:** elegir el índice adecuado puede ser complicado y depende de cómo se realizan las consultas.



:::tip info
- [Indexación en bases de datos](https://www.geeksforgeeks.org/dbms/indexing-in-databases-set-1/)
- [Tipos de índices en SQL Server](https://www.onlinemanipal.com/blogs/important-types-of-indexes-in-sql-server)
- [INDEX](https://aprendersql.es/glosario-sql/index/)
- [Índices en SQL: Qué son y cómo aceleran tus consultas](https://escueladeprogramacion.net/blog/indices-en-sql-que-son-y-como-aceleran-tus-consultas)
- [¿Qué es un índice de base de datos?](https://www.codecademy.com/article/sql-indexes)
:::