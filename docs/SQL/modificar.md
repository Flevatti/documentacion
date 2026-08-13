---
sidebar_position: 7
---

# Manipulacion de tablas

## ¿Qué es un esquema?

En SQL, el esquema de la base de datos describe la estructura de cada tabla (es decir, cómo está formada y qué columnas tiene) y los tipos de datos que puede contener cada columna.

Esta estructura fija permite que la base de datos sea eficiente y consistente, incluso al almacenar millones o miles de millones de filas.

## Insert

Para insertar datos en una base de datos, necesitamos usar la declaración `INSERT` e indicar en qué tabla insertar los datos, las columnas que estamos llenando y una o más filas de datos para insertar.

Podemos insertar varias filas a la vez simplemente enumerándolas secuencialmente, separándolas con comas:

```sql

INSERT INTO mytable
VALUES (value_or_expr, another_value_or_expr, …),
       (value_or_expr_2, another_value_or_expr_2, …),
       …;

```

En algunos casos, si tiene datos incompletos y la tabla contiene columnas con valores predeterminados, puede insertar una fila especificando solo las columnas que desea llenar.

```sql
INSERT INTO mytable
(column, another_column, …)
VALUES (value_or_expr, another_value_or_expr, …),
      (value_or_expr_2, another_value_or_expr_2, …),
      …;

```

En estos casos, el número de valores debe coincidir con el número de columnas especificadas.

Aunque esta forma de insertar datos requiere escribir un poco más, tiene la ventaja de seguir funcionando si la tabla cambia. Por ejemplo, si se agrega una nueva columna con un valor predeterminado, no es necesario modificar la declaración `INSERT`.

También podemos usar expresiones y funciones matemáticas o de cadena al insertar valores.

Esto puede ser útil para asegurarse de que todos los datos insertados tengan un formato determinado.

```sql
INSERT INTO boxoffice
(movie_id, rating, sales_in_millions)
VALUES (1, 9.9, 283742034 / 1000000);

```

```sql
INSERT INTO movies VALUES (4, "Toy Story 4", "El Directore", 2015, 90);
```

```sql
INSERT INTO boxoffice VALUES (4, 8.7, 340000000, 270000000);
```

## UPDATE

Además de agregar nuevos datos, también podemos actualizar los datos existentes mediante la declaración `UPDATE`.

Al igual que con `INSERT`, debemos especificar qué tabla, columnas y filas queremos actualizar.

Los nuevos valores deben coincidir con el tipo de datos definido para cada columna en la tabla.

```sql
UPDATE mytable
SET column = value_or_expr,
    other_column = another_value_or_expr,
    …
WHERE condition;

```

La declaración funciona tomando pares de columnas y valores y aplicando esos cambios a todas las filas que cumplen la condición de la cláusula `WHERE`.

:::warning Teniendo cuidado
Es común cometer errores al actualizar datos con SQL. Por ejemplo, podemos actualizar las filas incorrectas o incluso olvidarnos de la cláusula `WHERE`, haciendo que la actualización se aplique a todas las filas.

Un consejo útil es escribir primero la condición del `WHERE` y probarla con una consulta `SELECT`. De esta forma, podemos comprobar que estamos seleccionando las filas correctas antes de realizar la actualización.
:::

```sql
UPDATE movies
SET director = "John Lasseter"
WHERE id = 2;


```

```sql
UPDATE movies
SET year = 1999
WHERE id = 3;


```

```sql

UPDATE movies
SET title = "Toy Story 3", director = "Lee Unkrich"
WHERE id = 11;


```

:::tip
Para modificar un dato se recomienda usar la ID (WHERE ID = identificador)
:::

## Delete

- Cuando necesitemos eliminar datos de una tabla, podemos utilizar la declaración `DELETE`, indicando la tabla y las filas que queremos eliminar mediante la cláusula `WHERE`.
- La declaración funciona eliminando todas las filas que cumplen la condición de la cláusula `WHERE`.
```sql
DELETE FROM mytable
WHERE condition;

```

:::warning
Si omitimos la cláusula `WHERE`, se eliminarán todas las filas de la tabla.
:::

:::warning Teniendo especial cuidado
Al igual que con `UPDATE`, se recomienda probar primero la condición con una consulta `SELECT` para asegurarnos de que estamos seleccionando las filas correctas.

Una vez eliminados los datos, puede ser difícil recuperarlos, por lo que debemos revisar las declaraciones `DELETE` antes de ejecutarlas.
:::

```sql
DELETE FROM movies
where year < 2005;

```

```sql

DELETE FROM movies
where year < 2005;

```

## Create table

Podemos crear una nueva tabla utilizando la declaración `CREATE TABLE`:

```sql
CREATE TABLE IF NOT EXISTS mytable (
    column DataType TableConstraint DEFAULT default_value,
    another_column DataType TableConstraint DEFAULT default_value,
    …
);

```

- Entre los paréntesis se indica la estructura de la tabla.
- La estructura especifica el nombre de cada columna, el tipo de dato que contiene y, opcionalmente, restricciones y un valor predeterminado.

:::tip
Si ya existe una tabla con el mismo nombre, SQL generará un error.

Para evitarlo y crear la tabla solo si no existe, podemos utilizar la cláusula `IF NOT EXISTS`.
:::

### Tipos de datos de tabla

Las diferentes bases de datos admiten distintos tipos de datos. Algunos de los más comunes son números, cadenas (`strings`), fechas, valores booleanos y datos binarios.

A continuación, se muestran algunos de los más comunes:

| Tipo de dato | Descripción |
| :---: | :--- |
| `INTEGER` | Almacena números enteros, es decir, números sin decimales, como cantidades o edades. |
| `BOOLEAN` | Almacena valores booleanos, como `TRUE` o `FALSE`. En algunas bases de datos, se representan como `0` y `1`. |
| `FLOAT`, `DOUBLE`, `REAL` | Almacenan números que pueden tener decimales, como medidas o valores fraccionarios. Los diferentes tipos permiten trabajar con distintos niveles de precisión. |
| `CHARACTER(num_chars)`, `VARCHAR(num_chars)`, `TEXT` | Almacenan cadenas de caracteres (`strings`). `CHARACTER` y `VARCHAR` permiten especificar una cantidad máxima de caracteres, mientras que `TEXT` permite almacenar textos de mayor longitud. |
| `DATE`, `DATETIME` | Almacenan fechas y horas, por ejemplo, para registrar cuándo ocurrió un evento. |
| `BLOB` | Permite almacenar datos binarios directamente en la base de datos, como archivos o imágenes. |

### Restricciones de la tabla

No vamos a profundizar demasiado en las restricciones de las tablas en esta lección, pero cada columna puede tener restricciones que limitan los valores que se pueden insertar en ella.

A continuación, veremos algunas de las restricciones más comunes.

| Restricción | Descripción |
| :---: | :--- |
| `PRIMARY KEY` | Indica que los valores de esta columna son únicos (no pueden repetirse) dentro de esta tabla y que cada valor puede utilizarse para identificar una sola fila de la tabla. |
| `AUTO_INCREMENT` | Asigna automáticamente un valor entero a la columna. [Más información](index.md#auto-increment) |
| `UNIQUE` | Indica que los valores de esta columna deben ser únicos, por lo que no se puede insertar una fila con un valor que ya exista en otra fila. |
| `NOT NULL` | Indica que la columna no puede contener valores `NULL`. |
| `CHECK (expression)` | Permite comprobar que los valores insertados cumplan una condición. Por ejemplo, que sean positivos, mayores que un valor determinado o que comiencen con un prefijo específico. |
| `FOREIGN KEY` | Verifica que cada valor de esta columna exista en una columna de otra tabla. Por ejemplo, puede garantizar que cada fila de una tabla de pedidos corresponda a un cliente válido. |

```sql
CREATE TABLE movies (
    id INTEGER PRIMARY KEY,
    title TEXT,
    director TEXT,
    year INTEGER,
    length_minutes INTEGER
);

```

```sql
CREATE TABLE Database (
    Name TEXT,
    Version FLOAT,
    Download_count INTEGER
);

```

## Alter table

### Modificación de tablas

A medida que los datos cambian con el tiempo, podemos actualizar la estructura de las tablas mediante la declaración `ALTER TABLE`, que permite agregar, eliminar o modificar columnas y restricciones.

### ALTER TABLE ADD

La sintaxis para agregar una nueva columna es similar a la utilizada en `CREATE TABLE`.

Debemos especificar el nombre de la columna, su tipo de dato y, opcionalmente, sus restricciones y valor predeterminado.

En algunas bases de datos, como MySQL, también podemos indicar dónde colocar la nueva columna usando `FIRST` o `AFTER`, aunque esta característica no es estándar.

```sql
ALTER TABLE mytable
ADD column  nameColumn DataType OptionalTableConstraint
    DEFAULT default_value;

```

```sql
ALTER TABLE Movies
  ADD COLUMN Aspect_ratio FLOAT DEFAULT 2.39;

```

```sql
ALTER TABLE Movies
  ADD COLUMN Language TEXT DEFAULT "English";
```

### ALTER TABLE DROP

Para eliminar una columna, solo debemos especificar qué columna queremos eliminar. Sin embargo, algunas bases de datos, como SQLite, no admiten esta función.

En estos casos, puede ser necesario crear una nueva tabla y migrar los datos.

```sql
ALTER TABLE mytable
DROP column_to_be_deleted;
```

### ALTER TABLE RENAME TO

Si necesitamos cambiar el nombre de una tabla, podemos hacerlo utilizando la cláusula `RENAME TO`:

```sql
ALTER TABLE mytable
RENAME TO new_table_name;

```

### ALTER TABLE Otros

Cada base de datos admite diferentes formas de modificar sus tablas, por lo que es recomendable consultar su documentación antes de realizar cambios.

## DROP TABLE

En algunos casos, puede ser necesario eliminar una tabla completa junto con sus datos y estructura. Para esto, podemos utilizar la declaración `DROP TABLE`.

A diferencia de `DELETE`, que elimina filas de una tabla, `DROP TABLE` elimina la tabla completa:

```sql
DROP TABLE IF EXISTS mytable;
```

:::tip
Si la tabla no existe, la base de datos puede arrojar un error. Para evitarlo, podemos utilizar la cláusula `IF EXISTS`.

Si otra tabla depende de la tabla que queremos eliminar, por ejemplo mediante una `FOREIGN KEY`, primero debemos actualizar la tabla dependiente.
:::

```sql
DROP TABLE Movies;
```

```sql
DROP TABLE BoxOffice;
```

## Añadir llave foranea
- Sintaxis para agregar una `FOREIGN KEY`:
```sql
ALTER TABLE `nombre_tabla`
ADD CONSTRAINT `nombre_llave_foranea`
FOREIGN KEY (`columna`)
REFERENCES `tabla_referenciada`(`columna_referenciada`)
ON DELETE CASCADE
ON UPDATE CASCADE;
```

:::tip Observación
- `nombre_tabla`: tabla donde se agrega la `FOREIGN KEY`.
- `nombre_llave_foranea`: nombre de la restricción. Suele ser `fk_nombreTabla_tablaReferenciada`.
- `columna`: columna que contendrá la restricción `FOREIGN KEY`.
- `tabla_referenciada` y `columna_referenciada`: especifican en qué tabla y columna debe existir el valor para que sea válido.
:::

- Ejemplo:

```sql
ALTER TABLE `veterinaria` ADD CONSTRAINT `fk_veterinaria_localidad` FOREIGN KEY (`id_localidad`) REFERENCES `localidad`(`id_localidad`) ON DELETE CASCADE ON UPDATE CASCADE;
```

## Restricciones para modificar y eliminar

- La restricción `FOREIGN KEY` tiene las cláusulas `ON DELETE` y `ON UPDATE`, que son opcionales.
- Estas cláusulas especifican qué hacer cuando se elimina o modifica un valor de la tabla "padre".

:::tip En una relación puede existir un "padre" y un "hijo"
- La tabla que contiene la `FOREIGN KEY` es la **tabla hija**.
- La tabla que contiene la `PRIMARY KEY` es la **tabla padre**.
:::

- Las opciones de estas cláusulas son:
    - `NO ACTION` o `RESTRICT`: si intentamos eliminar o actualizar un valor que tiene la restricción `PRIMARY KEY` y se está usando en alguna `FOREIGN KEY` de otra tabla, se genera un error y la acción no se realiza. Es la opción predeterminada.
    - `CASCADE`: si eliminamos o actualizamos un valor que tiene la restricción `PRIMARY KEY` y se está usando en alguna `FOREIGN KEY` de otra tabla, también se eliminan o actualizan los valores de esas `FOREIGN KEY`.
    - `SET NULL`: si eliminamos o actualizamos un valor que tiene la restricción `PRIMARY KEY` y se está usando en alguna `FOREIGN KEY` de otra tabla, los valores de esas `FOREIGN KEY` se establecen como `NULL`.
    - `SET DEFAULT`: si eliminamos o actualizamos un valor que tiene la restricción `PRIMARY KEY` y se está usando en alguna `FOREIGN KEY` de otra tabla, los valores de esas `FOREIGN KEY` se establecen con su valor predeterminado.

:::tip
- `ON DELETE`: especifica qué hacer cuando se elimina un valor que tiene la restricción `PRIMARY KEY` y se está usando en alguna `FOREIGN KEY` de otra tabla.
- `ON UPDATE`: especifica qué hacer cuando se actualiza un valor que tiene la restricción `PRIMARY KEY` y se está usando en alguna `FOREIGN KEY` de otra tabla.
- Ambas tienen las mismas opciones.
:::