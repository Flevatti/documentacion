---
sidebar_position: 1
---
# SQL

SQL  o Structured Query Language, es un lenguaje diseñado para permitir que los usuarios técnicos y no técnicos consulten, manipulen y transformen datos de una base de datos relacional. Y debido a su simplicidad, las bases de datos SQL brindan almacenamiento seguro y escalable para millones de sitios web y aplicaciones móviles.

:::tip
¿Sabías?
Hay muchas bases de datos SQL populares, incluidas SQLite, MySQL, Postgres, Oracle y Microsoft SQL Server. Todos ellos admiten el estándar de lenguaje SQL común, que es lo que enseñará este sitio, pero cada implementación puede diferir en las características adicionales y los tipos de almacenamiento que admite.
:::

## Bases de datos Relacionales
Una base de datos relacional representa una colección de tablas relacionadas (bidimensionales). Cada una de las tablas es similar a una hoja de cálculo de Excel, con un número fijo de columnas nombradas (los atributos o propiedades de la tabla) y cualquier número de filas de datos.

Por ejemplo, si el Departamento de Vehículos Motorizados tuviera una base de datos, es posible que encuentre una tabla que contenga todos los vehículos conocidos que conducen las personas en el estado. Esta tabla puede necesitar almacenar el nombre del modelo, el tipo, el número de ruedas y el número de puertas de cada vehículo.

En dicha base de datos, puede encontrar tablas relacionadas adicionales que contengan información como una lista de todos los conductores registrados en el estado, los tipos de licencias de conducir que se pueden otorgar o incluso infracciones de conducción para cada conductor.


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
- Una de las primeras cosas al diseñar un nuevo esquema de base de datos SQL es decidir qué tipo de primary key utilizar. Y el 99% de las veces, los desarrolladores deben elegir entre UUID o Auto Increment.


#### UUID
- Un UUID (Identificador Universalmente Único) es un número de 128 bits que se utiliza para identificar información en sistemas informáticos. Los UUID están diseñados para ser únicos en todo el espacio y el tiempo, lo que significa que la probabilidad de que dos UUID sean los mismos es extremadamente baja. Los UUID a menudo se utilizan como primary key en las bases de datos, así como en otras situaciones donde se requiere un identificador único.
- Los UUID suelen representarse como una cadena de dígitos hexadecimales, separados por guiones. Aquí hay un ejemplo de un UUID:
``` powershell
1b4e67cd-bd2c-4ea8-8c8d-a0495f0c9ef3
```
:::tip Observación
- Los UUID se generan utilizando algoritmos que toman en cuenta diferentes fuentes de información, como la dirección MAC del adaptador de red, el tiempo actual y otros datos. Esto garantiza que los UUID generados en diferentes sistemas sean únicos.
:::

- Actualmente existen 5 formatos UUID estándar. La mayoría de las veces, la gente elige v4 (UUID aleatorio) o v1 (UUID de marca de tiempo).
- Algunas características:
  - Único a nivel mundial. Por ejemplo, no hay falsos positivos al encontrar elementos utilizando el registro. Fácil para migrar datos entre sistemas ya que la colisión sólo es teóricamente posible.
  - Sin estado, se puede generar sobre la marcha.
  - Una sensación de seguridad ya que un usuario malintencionado no puede adivinar la identificación. Sin embargo, su equipo de seguridad siempre insistirá en que una ruta UUID accesible al público no cumple con el estándar de seguridad.
  - La versión 1 del UUID almacena información de marca de tiempo, lo que a veces puede resultar útil.
  - No se puede ordenar naturalmente según el tiempo de creación.
  - Para bases de datos como MySQL, Oracle utiliza una  primary key agrupada, el UUID generado aleatoriamente de la versión 4 afectará el rendimiento de inserción si se usa como clave primaria. Esto se debe a que requiere reordenar las filas para colocar la fila recién insertada en la posición correcta dentro del índice agrupado. Por otro lado, PostgreSQL usa un heap en lugar de una  primary key agrupada, por lo que usar UUID como clave primaria no afectará el rendimiento de inserción de PostgreSQL.

#### Auto Increment
-  Permite que el valor de una columna se incremente en "uno" (se puede personalizar) cada vez que se inserta una nueva fila en la tabla.
- Por ejemplo, supongamos que tenemos una tabla de usuarios en una base de datos, y queremos asignar un identificador único a cada usuario. Podemos crear una columna "id" en la tabla y marcarla como auto-incremental. Cuando insertamos una nueva fila en la tabla, el valor de la columna "id" se incrementará automáticamente en uno, garantizando así que cada usuario tenga un identificador único.
- La configuración de un campo como auto-incremental varía dependiendo del sistema de gestión de bases de datos que se esté utilizando, pero generalmente se puede hacer mediante una declaración SQL o mediante una interfaz de usuario proporcionada por el sistema.
- Es bastante común y todos los principales motores de bases de datos brindan soporte nativo. 
- Algunas características:
  - Legible. Esto es especialmente valioso si lo expusiéramos externamente. Obviamente, la id 123 es mucho más legible que la id -b1e92c3b-a44a-4856-9fe3-925444ac4c23.
  - Menos espacio. UUID siempre ocupa 16 bytes. Para Auto Increment, cuando se almacena en formato largo, ocupa 8 bytes.
  - No se puede utilizar en el sistema distribuido ya que es muy probable que diferentes hosts puedan producir exactamente el mismo número.
  - No se puede generar sobre la marcha. En lugar de ello, debemos consultar la base de datos para determinar la siguiente clave primaria disponible. En un sistema distribuido, esto a menudo significa introducir un servicio separado para producir este número secuencial. Y ese servicio se convierte en un punto único de falla (SPOF).
  - Algunos datos comerciales pueden quedar expuestos, ya que la última identificación podría representar la cantidad total de inventario. Los atacantes también pueden escanear el rango de números enteros para explorar fugas (aunque esto no debería suceder si ACL se implementa correctamente).

## Crear usuario
- La sintaxis para crear un usuario puede variar dependiendo de la versión del sistema de gestión de bases de datos que estés utilizando, así que es importante consultar la documentación oficial para obtener más información.
#### SQL
```sql
CREATE USER 'nombre_usuario'@'localhost' IDENTIFIED BY 'contraseña';
```
:::tip Observación
- nombre_usuario es el nombre del usuario que deseas crear.
- localhost es el host desde el que se conectará el usuario (puedes reemplazarlo por % para permitir conexiones desde cualquier host).
- contraseña es la contraseña del usuario.
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
- Los roles de servidor se utilizan para asignar permisos a nivel de servidor. Puedes crear roles de servidor personalizados utilizando la instrucción CREATE SERVER ROLE. Por ejemplo:
```sql
CREATE SERVER ROLE serverrole
```
- Luego, puedes asignar permisos al rol utilizando la instrucción GRANT. Por ejemplo:
```sql
GRANT ALTER ANY DATABASE TO serverrole
```
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
- Los permisos son los tipos de acceso que se pueden asignar a un usuario o a un rol. Hay tres formas de controlar los permisos:
  - GRANT: Asigna un permiso a un usuario o rol.
  - DENY: Niega un permiso a un usuario o rol.
  - REVOKE: Revoca un permiso previamente asignado o denegado.

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

:::tip Sabias?
Siempre fijarse en la ID para conseguir los datos.

Si se busca información de una persona, busca la ID de la persona sin importar en que tabla esta.


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
Las filas restantes después de WHERE se agrupan en función de los valores comunes en la columna especificada en la cláusula GROUP BY. Como resultado de la agrupación, solo habrá tantas filas como valores únicos haya en esa columna. Implícitamente, esto significa que solo debería necesitar usar esto cuando tenga funciones agregadas en su consulta.

###  4. HAVING
Si la consulta tiene una cláusula GROUP BY, las restricciones de la cláusula HAVING se aplican a las filas agrupadas; descarta las filas agrupadas que no satisfacen la restricción.

###  5. SELECT
Finalmente, se calcula cualquier expresión en la parte de la consulta.

### 6.DISTINCT
De las filas restantes, las filas con valores duplicados en la columna marcada como DISTINCT se descartarán.

###  7. ORDER BY
Si la cláusula ORDER BY especifica un orden , las filas se ordenan según los datos especificados en orden ascendente o descendente

###  8. LIMIT/OFFSET
Finalmente, las filas que caen fuera del rango especificado por LIMITy OFFSET se descartan, dejando el conjunto final de filas para ser devuelto por la consulta.


:::tip 
No todas las consultas deben tener todas las partes que enumeramos anteriormente, pero una parte de por qué SQL es tan flexible es que permite a los desarrolladores y analistas de datos manipular rápidamente los datos sin tener que escribir código adicional, todo simplemente usando las cláusulas anteriores.

:::

## Cheatsheet
- [SQL CHEATSHEET](../../static/img/SQL.jpg)