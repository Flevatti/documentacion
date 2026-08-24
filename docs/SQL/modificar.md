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
  - **Con índice:** el motor puede saber dónde están los datos.

:::


#### Cómo funciona un índice por dentro: el árbol B
- La mayoría de los índices en MySQL, PostgreSQL, SQL Server y Oracle utilizan internamente una estructura llamada **árbol B** (*B-tree*).
- Un árbol B es una estructura que organiza los valores de forma **ordenada y balanceada**, permitiendo encontrar los datos rápidamente.

:::tip
- Un árbol B tiene un grupo principal que contiene subgrupos (ramas).
- Esas ramas pueden tener otras ramas.
- Cuando decimos que es balanceado, significa que cada rama tiene una cantidad similar de subgrupos.
:::

Para entenderlo, imaginemos que tenemos que buscar el número `42` entre 1 millón de números.

- **Sin índice:** la base de datos tendría que revisar los valores uno por uno hasta encontrar `42`. En el peor caso, tendría que revisar 1.000.000 de valores.
- **Con un árbol B:** los valores están organizados de forma que la base de datos puede descartar grandes grupos de valores en cada paso. Por eso, puede encontrar `42` en muchos menos pasos, aproximadamente 20 en este ejemplo.
- Ejemplo:

```txt
Funcionamiento de un árbol B para buscar email='m@mail.com'
Los valores están ordenados en el árbol.

                    [g@mail.com]
                   /            \
        [b@mail.com]            [s@mail.com]
        /         \              /         \
     [a...]      [d...]       [m@mail.com]  [z...]
                                  ↑
                         ¡Encontrado en 3 pasos!

```

:::tip Observación
- 1.er paso: Comparamos `m@mail.com` con `g@mail.com`. Como `m` es mayor que `g`, seguimos por la rama derecha.
- 2.º paso: Ahora comparamos `m@mail.com` con `s@mail.com`. Como `m` es menor que `s`, seguimos por la rama izquierda.
- 3.er paso: Lo comparamos con `m@mail.com` y encontramos el dato.
- Sin índice, habría que revisar las filas una por una.
- Esta estructura permite buscar datos mucho más rápido, incluso con millones de registros. Una búsqueda de 46 segundos puede tardar solo 15 milisegundos.
:::



:::tip En tu base de datos ya tienes índices

- Antes de crear tus índices de forma manual, debes saber que **la base de datos** crea índices automáticamente en dos situaciones:
  - **Primary Key:** Cuando definís una `Primary Key`, la base de datos crea automáticamente un índice único (no permite valores repetidos) de esa columna. Por eso, buscar por `ID` es muy rápido.
  - **Restricción UNIQUE:** Las restricciones `UNIQUE` también crean un índice automáticamente.
:::




#### Características de la indexación
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
  - El índice contiene los valores de la columna específica y referencias a un conjunto de registros.
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
  - Cada índice descarta un gran grupo de datos.
  - Permite trabajar con índices grandes de forma más eficiente.
  - Esto permite encontrar los datos más rápido.


#### 5. Índice de almacenamiento en columnas (Column store Index)
- Este tipo de índice almacena solo los valores de las columnas especificadas en lugar de almacenar las filas completas.
- **Características:**
  - El índice solo almacena los valores de las columnas especificadas.
  - Los datos se agrupan para ocupar menos espacio.
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


```
:::tip Observación
- `CREATE INDEX` es el comando para crear un **índice normal**. Con `CREATE UNIQUE INDEX` creamos un **índice único**.
- `nombre_indice`: es el nombre que tendrá el índice, por ejemplo, `idx_nombreTabla_columna`.
- `nombre_tabla`: el índice creado tendrá valores y referencias de filas de esta tabla.
- `columna`: es la columna cuyos valores se utilizarán para crear el índice. Los valores pueden estar repetidos y se pueden especificar más de una columna.
- El índice creado almacenará los valores de las columnas especificadas y referencias a los registros correspondientes.
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


:::tip Observación
- Todas las filas que tienen `cliente_id` con el mismo valor pertenecen al mismo grupo.
- Dentro de ese grupo hay subgrupos: las filas que tienen `fecha` con el mismo valor pertenecen al mismo subgrupo.
- Dentro de ese subgrupo hay otros subgrupos: las filas que tienen `id` con el mismo valor pertenecen al mismo subgrupo.
:::


- Al ejecutar la consulta:
```sql
WHERE cliente_id = 1
ORDER BY fecha, id
```
- La BD aprovecha muy bien el índice: se accede directamente al grupo `cliente_id = 1` y, dentro de ese grupo, los registros ya están ordenados por `fecha` e `id` (por defecto, el índice los ordena teniendo en cuenta el valor de cada columna).

#### ¿Qué pasa si cambiamos el orden? 
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
- Es decir, se agrupan todas las `id` que pertenecen al mismo `cliente_id` y se agrupan todos los `cliente_id` que pertenecen a la misma `fecha`.
- Nos quedaría una organización como esta:

| fecha      | cliente_id | id |
| ---------- | ---------: | -: |
| 2026-01-01 |          1 | 10 |
| 2026-01-01 |          2 | 11 |
| 2026-01-03 |          1 | 15 |
| 2026-01-04 |          2 | 18 |
| 2026-01-05 |          1 | 20 |

:::tip Observación
- Todas las filas que tienen `fecha` con el mismo valor pertenecen al mismo grupo.
- Dentro de ese grupo hay subgrupos: las filas que tienen `cliente_id` con el mismo valor pertenecen al mismo subgrupo.
- Dentro de ese subgrupo hay otros subgrupos: las filas que tienen `id` con el mismo valor pertenecen al mismo subgrupo.
:::


- Ahora los registros de `cliente_id = 1` ya no están juntos. Están repartidos entre diferentes fechas (grupos).
- Entonces, cuando hacemos:
```sql
WHERE cliente_id = 1
```
- El índice no puede simplemente ir al grupo donde están todos los registros que pertenecen al `cliente_id = 1`, porque no existe un grupo que contenga todos los registros de ese cliente. Tiene que buscar entre diferentes fechas.
- De esta manera, el índice en lugar de optimizar la búsqueda, puede hacer que la consulta sea menos eficiente.
- Por lo tanto, es importante tener en cuenta cada parte de la consulta que se quiere optimizar antes de crear un índice.


:::tip
- `CREATE INDEX` ultimamente es compatible con la mayoria de las bases de datos pero por las dudas se recomienda leer la documentacion de como crear indices para optimizar las consultas.
:::



#### Búsqueda de texto largo
- Para buscar palabras dentro de **textos largos**, usamos la palabra clave `FULLTEXT`.
- Primero creamos el índice sobre las columnas de texto:
```sql
CREATE FULLTEXT INDEX idx_articulos_contenido
ON articulos(titulo, contenido);
```
- Luego podemos realizar una búsqueda de texto:
```sql
SELECT * FROM articulos
WHERE MATCH(titulo, contenido) AGAINST('inteligencia artificial' IN BOOLEAN MODE);
```
:::tip Observación
- `MATCH` indica las columnas donde se realizará la búsqueda.
- `AGAINST` indica el texto que queremos buscar. En este caso `'inteligencia artificial'` es el texto que queremos buscar.
- `IN BOOLEAN MODE` nos permite usar operadores dentro de `AGAINST`, como `+` (la palabra debe aparecer), `-` (la palabra no debe aparecer) o `*` (permite buscar palabras que comiencen con el texto indicado).
- Esta sintaxis puede variar según la base de datos, así que conviene consultar su documentación.
:::
#### Implementar el WHERE
- Se puede crear un índice que solo contenga las filas que cumplen una condición. Esta característica no está disponible en todas las bases de datos:
```sql
-- Solo incluye en el índice las filas que cumplen la condición.
-- Soportado en PostgreSQL y SQL Server, pero no en MySQL.
CREATE INDEX idx_pedidos_pendientes
ON pedidos(fecha)
WHERE estado = 'pendiente';
```
:::tip Observación
- En este caso, el índice solo contiene la `fecha` de los pedidos cuyo `estado` es `'pendiente'`.
:::


#### Ver y eliminar índices
- Esto varía según la base de datos, así que se recomienda consultar la documentación.

```sql
-- MySQL: ver los índices de una tabla
SHOW INDEX FROM nombreTabla;
SHOW INDEX FROM productos;

-- PostgreSQL: ver los índices de una tabla
SELECT indexname, indexdef
FROM pg_indexes
WHERE tablename = 'nombreTabla';

SELECT indexname, indexdef
FROM pg_indexes
WHERE tablename = 'productos';

-- Eliminar un índice

-- MySQL
DROP INDEX nombre_indice ON nombreTabla;
DROP INDEX idx_clientes_apellido ON clientes;

-- PostgreSQL / SQL Server
DROP INDEX nombre_indice;
DROP INDEX idx_clientes_apellido;              
```

#### Comando EXPLAIN
- `EXPLAIN` es un comando muy útil para saber si tus índices están siendo utilizados.
- Te indica cómo la base de datos ejecuta tu consulta.
- **Sintaxis:**
```sql
EXPLAIN consulta;
```
- Ejemplo:
```sql
-- Antes de crear el índice
EXPLAIN SELECT * FROM clientes WHERE ciudad = 'Madrid';

-- Resultado típico sin índice:
-- +----+-------------+----------+------+-------+---------+-------------+
-- | id | select_type | table    | type | key   | rows    | Extra       |
-- +----+-------------+----------+------+-------+---------+-------------+
-- |  1 | SIMPLE      | clientes | ALL  | NULL  | 1000000 | Using where |
-- +----+-------------+----------+------+-------+---------+-------------+

-- ↑ type=ALL significa FULL TABLE SCAN:
--   revisa las 1,000,000 filas ❌


-- Después de crear el índice
CREATE INDEX idx_clientes_ciudad ON clientes(ciudad);

EXPLAIN SELECT * FROM clientes WHERE ciudad = 'Madrid';

-- Resultado con índice:
-- +----+-------------+----------+------+----------------------+------+
-- | id | select_type | table    | type | key                  | rows |
-- +----+-------------+----------+------+----------------------+------+
-- |  1 | SIMPLE      | clientes | ref  | idx_clientes_ciudad  | 847  |
-- +----+-------------+----------+------+----------------------+------+

-- ↑ type=ref y key=idx_clientes_ciudad:
--   usa el índice y estima revisar solo 847 filas ✅
```
- Los valores de la columna `type` de mejor a peor:

| `type` | ¿Qué significa? | ¿Es bueno? |
|---|---|---|
| `const` | Se accedió a una fila a través de una columna que contiene una `Primary Key` o `UNIQUE`. Devuelve solo 1 fila. | Óptimo (lo ideal) |
| `eq_ref` | Se realizó un `JOIN` utilizando una `Primary Key` o un índice `UNIQUE`. Devuelve una fila por cada unión. | Muy bueno |
| `ref` | Usa un índice no único (los valores pueden repetirse). Puede devolver varias filas. | Bueno |
| `range` | Usa el índice para buscar un rango de valores (`BETWEEN`, `>`, `<`, etc.). | Aceptable |
| `index` | Recorre el índice completo. Es mejor que `ALL`, pero todavía puede ser lento. | Regular |
| `ALL` | `Full Table Scan`: revisa toda la tabla fila por fila. | Evitar |

:::warning
- Si ves `type: ALL` en una tabla grande, casi siempre es señal de que falta un índice.
:::


#### ¿Cuándo usarlo?
- Los índices optimizan las consultas para obtener datos, pero también tienen algunas desventajas: hacen que las operaciones `INSERT`, `UPDATE` y `DELETE` sean ligeramente más lentas y ocupan espacio adicional en el disco.
- Esto no significa que no debas usar índices; significa que debes crearlos con criterio, solo en las columnas que realmente los necesitan.
#### 5 reglas para crear índices
##### 1- Siempre indexá las Foreign Keys (claves foráneas)
```sql
-- Las claves foráneas se usan frecuentemente en JOINs
-- Sin índice, cada JOIN puede hacer un FULL TABLE SCAN de la tabla hija
CREATE INDEX idx_pedidos_cliente ON pedidos(cliente_id);
CREATE INDEX idx_detalle_pedido ON detalle_pedidos(pedido_id);
CREATE INDEX idx_detalle_producto ON detalle_pedidos(producto_id);
```
##### 2- Indexá columnas que aparecen frecuentemente en `WHERE`

```sql
-- Si esta consulta se ejecuta miles de veces al día, conviene crear un índice
SELECT * FROM usuarios WHERE email = ?;
SELECT * FROM pedidos WHERE estado = 'pendiente';
SELECT * FROM logs WHERE fecha >= ? AND fecha < ?;

CREATE INDEX idx_usuarios_email ON usuarios(email);
CREATE INDEX idx_pedidos_estado ON pedidos(estado);
CREATE INDEX idx_logs_fecha ON logs(fecha);
```

##### 3- Indexá las columnas usadas en `ORDER BY` y `GROUP BY`

```sql
-- Sin un índice, la base de datos puede tener que ordenar o agrupar los resultados
SELECT producto_id, SUM(total) FROM ventas
GROUP BY producto_id ORDER BY SUM(total) DESC;

-- Con un índice, la operación puede ser más eficiente
CREATE INDEX idx_ventas_producto ON ventas(producto_id);
```
##### 4- **NO** indexes columnas de baja cardinalidad (es decir, columnas que tienen pocos valores únicos posibles).

```sql
-- BAJA CARDINALIDAD = pocos valores únicos posibles
-- Ejemplo: columna "activo" con solo valores TRUE/FALSE
-- El índice puede ayudar poco porque muchos registros tienen el mismo valor.

-- ❌ Índice poco útil — activo solo tiene 2 valores posibles
CREATE INDEX idx_usuarios_activo ON usuarios(activo);

-- ✅ Mejor opción: índice parcial (si la mayoría son activos y buscas inactivos)
CREATE INDEX idx_usuarios_inactivos
ON usuarios(email)
WHERE activo = FALSE;
```
##### 5- **NO** indexes todas las columnas por si acaso.

```sql
-- ❌ Sobreindexación: 8 índices en una tabla con muchas escrituras
CREATE INDEX idx1 ON productos(nombre);
CREATE INDEX idx2 ON productos(precio);
CREATE INDEX idx3 ON productos(stock);
CREATE INDEX idx4 ON productos(categoria_id);
CREATE INDEX idx5 ON productos(proveedor_id);
CREATE INDEX idx6 ON productos(peso);
CREATE INDEX idx7 ON productos(color);
CREATE INDEX idx8 ON productos(fecha_creacion);
-- Cada INSERT/UPDATE/DELETE debe mantener actualizados los índices ← puede ser más lento

-- ✅ Solo crea índices para las columnas que realmente se necesitan
CREATE INDEX idx_productos_categoria ON productos(categoria_id);  -- JOIN frecuente
CREATE INDEX idx_productos_nombre ON productos(nombre);            -- búsqueda frecuente
```
  
  

#### Errores comunes

- Hay situaciones donde tienes un índice, pero la base de datos no lo usa.

##### 1- Usar funciones sobre la columna indexada

```sql
-- ❌ El índice en fecha NO se usa porque la función YEAR() se aplica sobre la columna
SELECT * FROM pedidos WHERE YEAR(fecha) = 2026;

-- ✅ Reescribir usando un rango para que el índice pueda usarse
SELECT * FROM pedidos
WHERE fecha >= '2026-01-01' AND fecha < '2027-01-01';
```
##### 2- Usar `LIKE` con comodín al inicio

```sql
-- ❌ El índice NO se usa: el % al inicio impide la búsqueda por el árbol B
SELECT * FROM productos WHERE nombre LIKE '%laptop%';

-- ✅ El índice SÍ se usa: el % está solo al final (busca por prefijo)
SELECT * FROM productos WHERE nombre LIKE 'laptop%';

-- Para búsquedas dentro del texto, usa un índice FULLTEXT
SELECT * FROM productos
WHERE MATCH(nombre) AGAINST('laptop' IN BOOLEAN MODE);
```

##### 3- Operaciones matemáticas sobre la columna indexada

```sql
-- ❌ El índice en precio NO se usa porque hacemos una operación sobre la columna
SELECT * FROM productos WHERE precio * 1.21 > 100;

-- ✅ Mover la operación al otro lado de la comparación
SELECT * FROM productos WHERE precio > 100 / 1.21;
```

##### 4- Conversiones de tipo

```sql
-- ❌ Si cliente_id es INT pero pasas un string, el índice puede no usarse
SELECT * FROM pedidos WHERE cliente_id = '101';  -- '101' es string

-- ✅ Usar el tipo correcto
SELECT * FROM pedidos WHERE cliente_id = 101;    -- 101 es integer
```
##### 5- Usar `OR` en lugar de `UNION` para columnas diferentes

```sql
-- ❌ OR entre columnas diferentes puede hacer un FULL TABLE SCAN aunque haya índices
SELECT * FROM clientes
WHERE ciudad = 'Madrid' OR email = 'ana@mail.com';

-- ✅ UNION permite aprovechar cada índice por separado
SELECT * FROM clientes WHERE ciudad = 'Madrid'
UNION
SELECT * FROM clientes WHERE email = 'ana@mail.com';
```




#### Tipos de índices

| **Tipo de índice** | **¿Para qué sirve?** | **¿Cuándo usarlo?** | **Sintaxis** |
|---|---|---|---|
| **Simple (B-tree)** | Búsquedas exactas y rangos de valores en una columna | Columnas frecuentes en `WHERE`, `JOIN`, `ORDER BY` | `CREATE INDEX nombre ON tabla(columna);` |
| **UNIQUE** | Garantiza unicidad y acelera búsquedas | Email, DNI, código de producto | `CREATE UNIQUE INDEX nombre ON tabla(columna);` |
| **Compuesto** | Consultas que utilizan varias columnas para filtrar | `WHERE col1 = ? AND col2 = ?` | `CREATE INDEX nombre ON tabla(col1, col2);` |
| **FULLTEXT** | Búsqueda de palabras dentro de texto largo | Buscadores, artículos, descripciones | `CREATE FULLTEXT INDEX nombre ON tabla(columna);` |
| **Parcial** | Solo indexa filas que cumplen una condición | Cuando solo consultas un subconjunto | `CREATE INDEX nombre ON tabla(columna) WHERE condición;` |
| **Hash** | Búsquedas exactas muy rápidas (no funciona para rangos de valores) | Búsquedas exactas por hash | `CREATE INDEX nombre ON tabla USING HASH (columna);` |

:::tip
- La sintaxis y disponibilidad de algunos tipos de índices pueden variar según la base de datos. Por eso, conviene consultar la documentación de la base de datos que estés utilizando.
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