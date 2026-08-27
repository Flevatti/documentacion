---
sidebar_position: 1
---
# SQL / Inicio

- SQL  o Structured Query Language, es un lenguaje diseñado para permitir que los usuarios técnicos y no técnicos consulten, manipulen y transformen datos de una base de datos relacional. 
- Debido a su simplicidad, las bases de datos que utilizan SQL ofrecen un almacenamiento seguro y escalable para millones de sitios web y aplicaciones móviles.
:::tip
¿Sabías?

Existen diferentes bases de datos populares que utilizan SQL, como SQLite, MySQL, PostgreSQL, Oracle y Microsoft SQL Server.
Todas utilizan el lenguaje SQL como base, aunque cada una puede agregar características propias y manejar los datos de forma diferente.
:::

## Bases de datos Relacionales
- Una base de datos relacional organiza la información en tablas relacionadas entre sí.
- Cada una de las tablas funciona de forma similar a una hoja de cálculo de Excel, con un número fijo de columnas con nombres definidos (los atributos o propiedades de la tabla) y una cantidad de filas que contienen los datos.
- Por ejemplo, si el Departamento de Vehículos Motorizados tuviera una base de datos, podría existir una tabla que almacene información sobre los vehículos registrados en el estado. Esta tabla podría contener datos como el nombre del modelo, el tipo de vehículo, la cantidad de ruedas y el número de puertas de cada vehículo.
- En dicha base de datos, también podrían existir tablas relacionadas que contengan información adicional, como los conductores registrados en el estado, los tipos de licencias de conducir disponibles o las infracciones asociadas a cada conductor.



 Al aprender SQL, el objetivo es aprender a responder preguntas específicas sobre estos datos.



## Crear BD
- El comando para crear una BD es:
```sql
CREATE DATABASE <nombre_bd>;
```

:::tip Observación
- Reemplaza &lt;nombre_bd> con el nombre deseado para tu base de datos.

:::
- Cuando se ejecuta este comando, el sistema de gestión de bases de datos crea una nueva base de datos con el nombre especificado y la asocia con un conjunto de archivos en el disco duro donde se almacenarán los datos y las estructuras de la base de datos.
- Es importante mencionar que antes de crear una base de datos, debes asegurarte de tener los permisos adecuados para hacerlo. En general, solo los usuarios con privilegios de administrador pueden crear nuevas bases de datos en un sistema de gestión de bases de datos.


## Comando use
- El comando para seleccionar una BD es:
```sql
USE <nombre_bd>;
```
:::tip Observación
- Donde &lt;nombre_bd> es el nombre de la base de datos que deseas seleccionar como base de datos activa.

:::
- Cuando se ejecuta este comando, el sistema de gestión de bases de datos establece la base de datos especificada como la base de datos activa, lo que significa que todas las sentencias SQL posteriores se ejecutarán en esa base de datos hasta que se seleccione una base de datos diferente o se cierre la conexión con el servidor de bases de datos.
- Es importante mencionar que antes de poder seleccionar una base de datos, debes tener permisos de acceso a esa base de datos. En general, solo los usuarios con privilegios de lectura y escritura pueden seleccionar y trabajar con una base de datos en un sistema de gestión de bases de datos.

## Punto y coma 
- En algunos sistemas de gestión de bases de datos, como MySQL, el punto y coma es opcional y se puede omitir si solo se ejecuta una sentencia(comando) SQL a la vez. Sin embargo, en otros sistemas de gestión de bases de datos, como PostgreSQL, el punto y coma es obligatorio y se debe incluir al final de cada sentencia SQL para indicar que la sentencia ha terminado.
- El uso del punto y coma es importante por varias razones:
  - Claridad: El punto y coma ayuda a separar las sentencias SQL y a hacerlas más fáciles de leer y entender.
  - Ejecución de sentencias múltiples: Si se ejecutan varias sentencias SQL a la vez, el punto y coma ayuda a separarlas y a indicar dónde termina una sentencia y comienza la siguiente.
  - Compatibilidad: Algunos sistemas de gestión de bases de datos requieren el uso del punto y coma para ejecutar sentencias SQL, por lo que es importante incluirlo para garantizar la compatibilidad con diferentes sistemas.
- En resumen, el punto y coma es un carácter especial en SQL que se utiliza para separar sentencias SQL y para indicar el final de una sentencia. Aunque en algunos sistemas de gestión de bases de datos es opcional, es importante incluirlo para garantizar la claridad, la ejecución de sentencias múltiples y la compatibilidad con diferentes sistemas.

##  UUID / Auto Increment 
- Al diseñar una nueva base de datos SQL, una de las primeras decisiones es elegir qué tipo de `primary key` utilizar.
- Generalmente, las opciones más utilizadas son `UUID` y `Auto Increment`.


#### UUID
- Un UUID (Identificador Universalmente Único) es un número de 128 bits (una secuencia de 128 ceros y unos) utilizado para identificar un elemento.
- Está diseñado para ser único, por lo que la probabilidad de que dos UUID sean iguales es extremadamente baja.
- Los UUID suelen utilizarse como `primary key` en bases de datos y en otras situaciones donde se necesita un identificador único.
- Aunque internamente está formado por 128 bits, normalmente se representa como una cadena (`string`) de caracteres hexadecimales separados por guiones para facilitar su lectura. Por ejemplo:
``` powershell
1b4e67cd-bd2c-4ea8-8c8d-a0495f0c9ef3
```

:::tip Hexadecimal
- Al igual que el sistema decimal, es una manera de contar. La diferencia es que utiliza los números del `0` al `9` y además agrega 6 caracteres más:
  - `A`: 10 en decimal.
  - `B`: 11 en decimal.
  - `C`: 12 en decimal.
  - `D`: 13 en decimal.
  - `E`: 14 en decimal.
  - `F`: 15 en decimal.
- Por ejemplo:
  - `25`: En sistema decimal representa el número 25.
  - `1A`: En sistema hexadecimal representa el número 26 en decimal.
- Si convertimos 128 bits a hexadecimal:
  - Cada carácter hexadecimal representa 4 bits.
  - `128 bits ÷ 4 bits = 32 caracteres hexadecimales`.
  - Por lo tanto, un UUID se representa utilizando 32 caracteres hexadecimales.
  - Estos caracteres suelen separarse en grupos de `8-4-4-4-12`: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`.
:::


:::tip Observación
- Los UUID se generan mediante algoritmos que utilizan diferentes datos para crear identificadores únicos, reduciendo la posibilidad de que dos UUID sean iguales.
:::

- Actualmente existen 5 versiones de UUID. Las más utilizadas son la versión 4 (`UUID` aleatorio) y la versión 1 (`UUID` basado en una marca de tiempo).
- Algunas características:
  - Son únicos a nivel mundial, por lo que la posibilidad de que dos UUID sean iguales es extremadamente baja.
  - No dependen de un sistema centralizado, por lo que pueden generarse en cualquier momento.
  - Son difíciles de adivinar, lo que puede aportar una capa adicional de privacidad. Sin embargo, no deben utilizarse como único mecanismo de seguridad.
  - La versión 1 del UUID incluye información relacionada con la marca de tiempo, lo que puede ser útil en algunos casos.
  - No se pueden ordenar según el momento de creación.
  - En algunas bases de datos, como MySQL u Oracle, utilizar UUID aleatorios como `primary key` puede afectar el rendimiento de inserción debido a la forma en que se organizan los índices.


#### Auto Increment
- Permite asignar automáticamente el valor de una columna utilizando como referencia el valor anterior (de la fila anterior) y sumándole `1` (este valor puede personalizarse).
- Por ejemplo, si tenemos una tabla de usuarios con una columna `id` configurada como `auto-incremental`, el primer usuario que se cree recibirá el valor `1`, el segundo recibirá el valor `2` y así sucesivamente. De esta forma, cada usuario obtiene automáticamente un identificador único.
- La forma de configurar un campo como `auto-incremental` depende del sistema de gestión de bases de datos utilizado. Generalmente, se realiza mediante una declaración SQL o mediante las herramientas que proporciona el sistema.
- Es una característica muy común y está soportada por los principales motores de bases de datos.
- Algunas características:
  - Son fáciles de leer, especialmente si el identificador se muestra externamente. Por ejemplo, una `id` como `123` es más simple de entender que un UUID como `b1e92c3b-a44a-4856-9fe3-925444ac4c23`.
  - Utilizan menos espacio de almacenamiento que un UUID.
  - No son adecuados para sistemas distribuidos, ya que diferentes sistemas podrían generar el mismo identificador.
  - Necesitan consultar a la base de datos para saber qué valor asignar.
  - Pueden revelar información sobre la cantidad de registros existentes. Por ejemplo, una `id` alta podría indicar aproximadamente cuántos elementos hay almacenados.

## Crear usuario
- La sintaxis para crear un usuario puede variar según el sistema de gestión de bases de datos utilizado. Por eso, es recomendable consultar la documentación oficial.
#### SQL
```sql
CREATE USER 'nombre_usuario'@'localhost' IDENTIFIED BY 'contraseña';
```
:::tip Observación
- `nombre_usuario`: Es el nombre del usuario que se desea crear.
- `localhost`: Indica desde qué host (equipo desde donde se realiza la conexión) puede conectarse el usuario. Puede reemplazarse por `%` para permitir conexiones desde cualquier host.
- `contraseña`: Es la contraseña asignada al usuario.
:::

#### PostgreSQL
```sql
CREATE ROLE nombre_usuario WITH PASSWORD 'contraseña' LOGIN;
```
:::tip Observación
- nombre_usuario es el nombre del usuario que deseas crear.
- contraseña es la contraseña del usuario.
- LOGIN indica que el usuario tendrá permiso para conectarse a la base de datos.
:::

#### Microsoft SQL Server
```sql
CREATE LOGIN nombre_usuario WITH PASSWORD = 'contraseña';
```
:::tip Observación
- nombre_usuario es el nombre del usuario que deseas crear.
- contraseña es la contraseña del usuario.
:::
#### Oracle
```sql
CREATE USER nombre_usuario IDENTIFIED BY contraseña;
```
:::tip Observación
- nombre_usuario es el nombre del usuario que deseas crear.
- contraseña es la contraseña del usuario.
:::
#### DB2
```sql
CREATE USER nombre_usuario USING contraseña;
```
:::tip Observación
- nombre_usuario es el nombre del usuario que deseas crear.
- contraseña es la contraseña del usuario.
:::

### Permisos y roles
- Una vez creado el usuario, es importante asignarle permisos y roles adecuados para que pueda interactuar con la base de datos de manera segura y controlada.
#### Roles
- Un rol es un conjunto de permisos que se pueden asignar a un usuario o a otro rol. Hay dos tipos de roles: roles de servidor y roles de base de datos.
#### Roles de servidor
- Los roles de servidor se utilizan para asignar permisos a nivel de servidor. Puedes crear roles de servidor personalizados utilizando la instrucción CREATE SERVER ROLE [nombreRol]. Por ejemplo:
```sql
CREATE SERVER ROLE serverrole
```
- Luego, puedes asignar permisos al rol utilizando la instrucción GRANT. Por ejemplo:
```sql
GRANT ALTER ANY DATABASE TO serverrole
```
:::tip Observación
- Después del comando `GRANT` se indica el permiso que se desea asignar.
- `ALTER ANY DATABASE` significa que el usuario puede modificar cualquier base de datos.
:::


- Finalmente, puedes agregar un usuario al rol utilizando la instrucción ALTER SERVER ROLE. Por ejemplo:
```sql
ALTER SERVER ROLE serverrole ADD MEMBER [testexampleuser]
```

#### Roles de base de datos
- Los roles de base de datos se utilizan para asignar permisos a nivel de base de datos. Puedes crear roles de base de datos personalizados utilizando la instrucción CREATE ROLE. Por ejemplo:
```sql
CREATE ROLE dbrole
```
- Luego, puedes asignar permisos al rol utilizando la instrucción GRANT. Por ejemplo:
```sql
GRANT SELECT ON DATABASE::TestDatabase TO dbrole
```
- Finalmente, puedes agregar un usuario al rol utilizando la instrucción ALTER ROLE. Por ejemplo:
```sql
ALTER ROLE dbrole ADD MEMBER exampleuser2
```
#### Permisos
- Los permisos controlan qué acciones puede realizar un usuario o rol dentro de una base de datos.
- Existen tres formas principales de gestionarlos:
  - `GRANT`: Otorga un permiso.
  - `DENY`: Niega un permiso.
  - `REVOKE`: Elimina un permiso asignado o denegado previamente.

#### Ejemplos
- Recuerda que la sintaxis cambia entre diferentes sistemas de gestión de bases de datos (DBMS).
#### MySQL
```sql
CREATE USER 'newuser'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON database_name.* TO 'newuser'@'localhost';
```
:::tip Observación
- En este ejemplo, se crea un nuevo usuario llamado newuser con la contraseña password. Se le otorgan todos los privilegios en la base de datos database_name.

:::

#### PostgreSQL
```sql
CREATE USER newuser WITH PASSWORD 'password';
GRANT ALL PRIVILEGES ON DATABASE database_name TO newuser;
```
:::tip Observación
- En este ejemplo, se crea un nuevo usuario llamado newuser con la contraseña password. Se le otorgan todos los privilegios en la base de datos database_name.

:::
#### SQL Server
```sql
CREATE USER newuser FOR LOGIN newuser;
ALTER ROLE db_datareader ADD MEMBER newuser;
```
:::tip Observación
- En este ejemplo, se crea un nuevo usuario llamado  newuser  y se le agrega el rol db_datareader. Este rol tiene acceso de solo lectura a todas las tablas de usuario en la base de datos.
:::


#### Oracle
```sql
CREATE USER newuser IDENTIFIED BY password;
GRANT CREATE SESSION TO newuser;
GRANT SELECT ANY TABLE TO newuser;
```
:::tip Observación
- En este ejemplo, se crea un nuevo usuario llamado newuser con la contraseña password. Se le otorgan los privilegios CREATE SESSION,  y SELECT ANY TABLE.
- El privilegio CREATE SESSION permite al usuario newuser conectarse al servidor de base de datos y abrir una sesión. Sin embargo, este privilegio no le da al usuario newuser acceso a ninguna base de datos o tabla en particular.
- El privilegio SELECT ANY TABLE le da al usuario newuser permiso para seleccionar (leer) cualquier tabla en cualquier base de datos en el servidor de base de datos. Sin embargo, este privilegio no le da al usuario newuser permiso para crear o modificar tablas o bases de datos.
- Si bien el privilegio SELECT ANY TABLE es muy amplio y otorga acceso de lectura a todas las tablas en el servidor de base de datos, no significa que el usuario newuser tenga acceso a todas las bases de datos en el servidor. Dependiendo del DBMS específico, es posible que se necesiten privilegios adicionales para acceder a bases de datos específicas o realizar otras operaciones en ellas.
- Por lo tanto, es importante tener cuidado al otorgar privilegios a usuarios en un servidor de base de datos y solo otorgar los privilegios mínimos necesarios para realizar las tareas requeridas.
:::

:::tip
- Tenga en cuenta que los privilegios específicos que otorga a un usuario dependerán de los requisitos de su aplicación. Es importante seguir el principio de privilegio mínimo, lo que significa otorgar solo los privilegios que son necesarios para que el usuario realice su trabajo.
:::

## Sintaxis

:::tip Sabias?

 SQL no requiere que escriba las palabras clave en mayúsculas, pero como convención, ayuda a las personas a distinguir las palabras clave SQL de los nombres de columnas y tablas, y hace que la consulta sea más fácil de leer.
:::

```sql

SELECT column, another_column, …
FROM mytable
WHERE condition(s)
ORDER BY column ASC/DESC
LIMIT num_limit OFFSET num_offset;

```

:::tip ¿Sabías?
- Siempre utiliza la `ID` como referencia para obtener datos.
- Por ejemplo, si buscas información de una persona, utiliza su `ID` para encontrar sus datos, sin importar en qué tabla se encuentren.
:::

## Orden
### Orden de ejecución de una consulta

```sql
SELECT DISTINCT column, AGG_FUNC(column_or_expression), …
FROM mytable
    JOIN another_table
      ON mytable.column = another_table.column
    WHERE constraint_expression
    GROUP BY column
    HAVING constraint_expression
    ORDER BY column ASC/DESC
    LIMIT count OFFSET COUNT;

```
### 1. FROM y JOINs

 FROM y  JOIN se ejecutan primero para determinar el conjunto de datos que se está consultando. 

### 2. WHERE
Una vez que tenemos el conjunto de datos , las restricciones  WHERE  se aplican a las filas individuales y las filas que no satisfacen la restricción se descartan.

###  3. GROUP BY
Después de aplicar WHERE, las filas se agrupan según los valores de la columna indicada en GROUP BY, obteniendo una fila por cada valor único. Generalmente, GROUP BY se utiliza junto con funciones agregadas como `COUNT`, `SUM`, `AVG`, `MIN` o `MAX`.

###  4. HAVING
Si la consulta tiene una cláusula GROUP BY, las restricciones de la cláusula HAVING se aplican a las filas agrupadas; descarta las filas agrupadas que no satisfacen la restricción.

###  5. SELECT
Finalmente, se seleccionan los campos indicados.

### 6.DISTINCT
De las filas obtenidas, elimina aquellas que tienen valores duplicados en la columna indicada con DISTINCT.

###  7. ORDER BY
Ordena las filas del resultado según el campo indicado, ya sea en orden ascendente (`ASC`) o descendente (`DESC`).

###  8. LIMIT/OFFSET
Finalmente, `LIMIT` y `OFFSET` permiten especificar qué filas del resultado se obtienen, descartando las que quedan fuera del rango indicado.


:::tip
No todas las consultas deben incluir todas las partes mencionadas anteriormente. Una de las razones por las que SQL es tan flexible es que permite a los desarrolladores y analistas de datos manipular rápidamente la información utilizando estas cláusulas, sin necesidad de escribir código adicional.
:::

## Cheatsheet
- [SQL CHEATSHEET](../../static/img/SQL.jpg)