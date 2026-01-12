---
sidebar_position: 1
---
# "C#"
## Historia
#### .NET (en general)
- Es una plataforma de desarrollo para construir cualquier cosa:
   - Desktop
   - Web
   - Cloud
   - Mobile
   - Gaming
   - IOT
   - AI
   - Etc
- Ofrece una serie(conjunto) de librerías, entornos de progamación, lenguajes de progamacion, compiladores, herramientas de progamación, etc.
- Herramientas:
   - Visual studio
   - Visual studio for mac
   - Visual studio code
   - Command Line interface (CLI)
   - Etc
- Es open-source (gratis).
- Te permite progamar en varios lenguajes:
  -	C#
  -	VB.NET
  -	F#
  -	Etc
- C# Es una alternativa a Java.
- .Net es una alternativa a Java Enterprise Edition.
- Funciona como Java , crea un código intermedio (Bytecode) que se ejecuta en un CLR (maquina virtual).
#### .Net Framework
- Se desarrollo en el 2002.
- Compite con Java.
- Funciona solo en Windows.
- Es para crear aplicaciones web y Windows.
- Este viene con Windows.
- Contiene:
   - Linq (SQL de su plataforma) 
   - WinForms (Interfaces)  
   - Lenguaje C# (Utilizado)
   - Lenguaje Vb.Net (No utilizado) 
   - Lenguaje F#  (No utilizado) 
   - ASP.NET: Es un framework para desarollo web que corre sobre .NET
- En el 2016 aparecieron las APIS, empezo a ser todo multiplaforma , ya que se podia comunicar el backend (en cualquier lenguaje) con el frontend (en cualquier lenguaje)
y se dejo de utilizar.
- .NET Framework dejo de desarrollarse en su version 4.8 en 2019



#### .Net Core
- Se desarrollo en 2016.
- Es como .Net pero multiplataforma y mucho más ágil.
- Compite con Node.js.
- Se desarrollo para crear aplicaciones de terminales y APIs.
- Entonces .NET se dividio en dos
    - ASP.NET  = Framework para cumplir la misma función que .Net framework
    - ASP.Net Core  = Para APIs (Multiplataforma)
- ASP.NET y ASP.NET Core son incompatible. Lo que se  desarrollaba en una parte , no funciona en la otra.
#### Xamarin
- MONO: Una versión de .NET framework, multiplataforma que nunca tuvo el apoyo de microsoft.
- Xamarin es una plataforma para crear aplicaciones móviles (
iOS y Android) que está basada en Mono.
- La compro Microsoft en 2016. 

#### Net Standard
- Se desarrollo en 2017.
- Es una especificación NO UNA PLATAFORMA.
- Dice que debe tener una biblioteca de código para que funcione en Net Core, Net Framework y Xamarin.
- En .NET Standard,  podes ejecutar .NET y .NET Core al mismo tiempo. Es un conjunto de reglas para poder ejecutar las dos partes.
- Este se dejo de usar porque .NET Framework se dejo de actualizar.
#### .Net
- Se desarrollo en 2020.
- Microsoft junto todas las plataformas y lo llamo .NET
- Unifico todas las plataformas en una (Las que unió Net standard).
- Es una plataforma.
- Es un conjunto de tecnologias para desarollar diferentes frameworks.
- Salio en la versión 5.
- Ya dejo de ser de Microsoft (es uno de los desarrolladores igual) y paso a ser Open Source.
- Ahora La Maneja NET foundation (Microsoft esta en este grupo).
- [ASP.NET Core Developer Roadmap](https://github.com/MoienTajik/AspNetCore-Developer-Roadmap)


#### .Net Entity Framework
- Es un framework para acceso a datos desde .Net
- Es un ORM de Microsoft que te permite tener acceso a datos.
- Tiene dos versiones:
   - Versión 6 de Entity Framework (Se encontraba en .NET Framework)
   - Entity Framework Core (Se encuentra en .NET)

:::tip
- Ambas versiones son distintas, mientras entity framework core no supere la versión de entity framework . Luego se le quitara el core.
:::

#### Asp.Net MVC
- Es un framework que se basa en el desarrollo web.
- Al igual que la anterior tiene dos versiones:
  -	ASP.NET MVC
  -	ASP.NET CORE MVC


:::tip
- Ambas versiones son distintas, mientras ASP.NET CORE MVC no supere la versión de ASP.NET MVC. Luego se le quitara el core.
:::

#### Blazor
- Salio con .NET core 3.
- Permite crear aplicaciones web de una manera diferente a ASP.NET MVC.

#### .Net Maui
- Es el sucesor de xamarin.
- Es la versión de xamarin que va a estar dentro de .NET 6 para crear aplicaciones móviles (Android e iOS ) y de escritorio (Windows y linux).




## "C#"
- La logica de todos los lenguajes de progamación es la misma , asi que es probable que la mayoria de los conceptos ya los conozcas.

## Usos
- Lo podemos usar con Xamarin , con Unity y .NET
- Pero también podemos crear aplicaciones de escritorio con C#
#### IDE
- El IDE para progamar es Visual studio (No es el Code)


:::tip ¿Como descargarlo?
- [De este link , elige la Community](https://visualstudio.microsoft.com/es/downloads/)
- Seleccionamos Desarrollo de Escritorio .NET (Para aplicaciones de escritorio) y ASP.NET (Para aplicaciones web)
:::

- Al abrirlo , creamos un nuevo proyecto:
     - En los filtros:
        - Lenguaje : C#
        - Plataforma: Windows
      - Seleccionamos la plantilla: Aplicación de Windows forms
      - Siguiente – Siguiente – Crear

##### Explorador de Soluciones
- En el apartado explorador de soluciones, tenes acceso a la estructura del proyecto.
- El archivo Form1.cs al abrirlo, te muestra el diseño del formulario.
- Entonces el formulario esta dividido en dos partes:
   -	Lógica (Form1.Designer.cs)
   -	Diseño (Form1.cs)


#### Cuadro de herramienta

- Si no te aparece: Opcion ver – Cuadro de herramienta.
- Con el cuadro de herramienta podes añadirle elementos ( botón , input , label , etc) al formulario (al diseño).
- Todas las "etiquetas HTML" son elementos del formulario.

#### Label

:::tip ¿Que es un label?
- Un label o etiqueta es un texto que va asociado a un input con el que puede interactuar un usuario. 
- Su función es "decirle" al usuario que dato ingresar en el input.
:::


- Insertamos un label en el formulario
- Cuando lo seleccionas haciendo click , en el lado inferior derecho , te muestran las propiedades del elemento.
- En la propiedad “text” , especificamos el texto a mostrar.
- La propiedad “ForeColor” es para especificar el color.
- Hay muchas más propiedades para modificar el label , a averiguar!

:::tip
- Cada elemento del cuadro de herramienta , tiene sus propiedades.
:::

- Ahora si le das al boton “play (icono de reproducir en verde)”, ejecutamos el software en Windows.
- Al ejecutarlo, solo mostraría el label.


#### Botón
- Insertamos un boton (cámbiale el texto si queres)
- Hacemos click en el boton y nos mandra al código de lógica.
- Nos ubicaría en el “método (conjunto de código)” que se ejecutaría al hacer click en el button.
- Entonces escribimos:

```csharp
  private void button1_Click(object sender, EventArgs e)
        {
            label1.Text = "Texto cambiado";
        }

```

:::tip Observación
- Al hacer click, modificamos el texto del label.
- Con ElementoLabel.Text , obtenemos el texto del label
:::

## ¿Que es información?
- Es un conjunto de datos organizados, que al leerlo te produce algún significado.
- El dato es la mínima unidad dentro de la información
- Leyendo el dato, no sabemos que significa o a que nos estamos refiriendo.

#### Ejemplo

```csharp
1 dato = 87654567
2 dato = 01/05
3 dato = 10pm
```

- Información:
   -  Turno renovación de pasaporte para el día 01/05 a las 10pm . El ID del turno es 87654567


## ¿Qué es una variable?
- Es una especie de caja que te permite guardar datos.
- Esta caja se guarda en la memoria RAM.
- Cuando creamos un dato, lo guardamos en una variable.
- Este dato esta en la memoria RAM y la variable esta apuntando a la memoria RAM.
  
```csharp
A = 2
B = A + 1 
```

:::tip Observación
- El valor “A” representa “2”
- B = 2 + 1
- B tendría como valor “3”
:::

- La variable se usa para asignar un valor y después se reutiliza para procesar otro tipo de dato.
- Las variables se leen de arriba abajo y de izquierda a derecha


```csharp
A = 2
B = A + 1
B = 5

```

:::tip Observación
- B tiene el valor 5
:::


#### Constante
- Es una variable pero que no se le puede cambiar el valor.

## Variables
- Las variables son contenedores para almacenar valores.
- Sintaxis para crear una variable: "Tipo_de_variable Nombre_Variable = valor;"
  -  Tipo_de_variable es un tipo de dato de C# (como int o string). 
  - Nombre_Variable  es el nombre de la variable. 
  - El signo igual se utiliza para asignar valores a la variable.
- En C#, existen diferentes tipos de variables (definidas con diferentes palabras clave), por ejemplo:
  -	int- almacena enteros (números enteros), sin decimales, como 123 o -123
  -	double- almacena números de coma flotante, con decimales, como 19.99 o -19.99
  -	char- almacena caracteres individuales, como 'a' o 'B'. Los valores de char están entre comillas simples
  -	string- almacena texto, como "Hello World". Los valores de cadena están entre comillas dobles
  -	bool- almacena valores con dos estados: verdadero o falso


:::tip 
- [Los Tipos de variables son tipos de datos ](https://www.w3schools.com/cs/cs_data_types.php).
- Un tipo de dato puede ser un array, el nombre de una clase, etc.

:::
#### Para crear una variable que deba almacenar texto:

```csharp
string name = "John";
Console.WriteLine(name);

```

:::tip Observación
- Con el nombre de la variable, accedemos al valor de esta.

:::

#### Para crear una variable que deba almacenar un número:

```csharp
int myNum = 15;
Console.WriteLine(myNum);

```

#### También puede declarar una variable sin asignar el valor y asignar el valor más tarde:

```csharp
int myNum;
myNum = 15;
Console.WriteLine(myNum);

```

#### Sobrescribir
- Tenga en cuenta que, si asigna un nuevo valor a una variable existente, sobrescribirá el valor anterior:


```csharp
int myNum = 15;
myNum = 20; 
Console.WriteLine(myNum);

```
#### Const
- Si no desea que otros (o usted mismo) sobrescriban los valores existentes, puede agregar la palabra clave **const** atrás del tipo de variable.
- La palabra clave **const** es útil cuando desea que una variable almacene siempre el mismo valor, para que otros (o usted mismo) no arruinen su código. Un ejemplo: a menudo se denomina constante el número PI (3,14159...).
- La palabra clave **const** declarará la variable como "constante", lo que significa inmutable y de solo lectura:



```csharp
const int myNum = 15;
myNum = 20; // error

```

:::tip
 No puede declarar una variable constante sin asignar el valor. Si lo hace, se producirá un error: un campo const requiere que se proporcione un valor.
:::

#### Mostrar variable
- Con el nombre de la variable, podemos usar el valor que contiene esta.


```csharp
int x = 5;
int y = 6;
Console.WriteLine(x + y); 

```
:::tip Observación
- x almacena el valor 5
- y almacena el valor 6
- Luego usamos el método WriteLine() para mostrar el valor de x + y, que es 11
:::
#### Declarar muchas variables
- Para declarar más de una variable del **mismo tipo**, use una lista separada por comas:

```csharp
int x = 5, y = 6, z = 50;
Console.WriteLine(x + y + z);
```
- También puede asignar el **mismo valor** a múltiples variables en una línea:

```csharp
int x, y, z;
x = y = z = 50;
Console.WriteLine(x + y + z);

```
#### Identificadores
- Todas las variables de C# deben identificarse con nombres únicos.
- Los identificadores pueden ser nombres cortos (como x e y) o nombres más descriptivos (edad, suma, volumen total).
- Las reglas generales para nombrar variables son:
   -	Los nombres pueden contener letras, dígitos y el carácter de subrayado (_).
   -	Los nombres deben comenzar con una letra o guión bajo.
   -	Los nombres deben comenzar con una letra minúscula y no pueden contener espacios en blanco.
   -	Los nombres distinguen entre mayúsculas y minúsculas ("myVar" y "myvar" son variables diferentes).
   -	Las palabras reservadas (como las palabras clave de C#, como int o double) no se pueden usar como nombres.

:::tip
Se recomienda utilizar nombres descriptivos para crear un código comprensible y mantenible.

:::

:::tip info
- [Variables y Tipos en C#](https://desarrolloweb.com/articulos/variables-tipos-csharp)
- [Tipos de Variables en C# 9](https://blog.nubecolectiva.com/tipos-de-variables-en-c-9/#Todas_las_Variables_Juntas)
- [Variables en C#](https://estradawebgroup.com/Post/Variables-en-C-/20531)
:::
## Reglas para definir variables y constantes

#### 1- No puede tener espacios

- Ejemplo: Fecha de nacimiento

#### 2- No empezar con un número
- Ejemplo: 2doEmail

#### 3- No se puede usar una palabra reservada del lenguaje
- Ejemplo: if , while , for , etc


#### Convenciones
- Es la manera de escribir el código.
##### camelCase
- La primera palabra se pone en minúscula y las siguientes, solo la primera letra en mayúscula.
- Se utiliza para declarar variables.
- Ejemplo: fechaDeNacimiento.
##### snake_case
- En cada espacio, se le pone un guion bajo (“_”).
- Antes esta forma de escribir se utilizaba mucho, pero actualmente casi no se usa.
- Solo se utiliza en las bases de datos.
- Ejemplo: fecha_de_nacimiento.
##### screaming_snake_case
- Es igual que el snake_case pero se pone todo en mayúscula.
- Se utiliza para declarar constantes.
- Ejemplo: FECHA_DE_NACIMIENTO.
##### kebab-case
- Es como el snake_case , pero en lugar del “_” , ponemos guiones “-“.
- Se utiliza para las urls (path) y para el nombre de las carpetas.
- Ejemplo: fecha-de-nacimiento.
##### l33t
- Se utiliza para las contraseñas y se remplazan algunas letras por números.
- Ejemplo: P445W0RD.
##### notación húngara
- Se le asigna el tipo de variable al comienzo.
- Ejemplo: strNombre.


## Tipado fuerte

#### Tipado fuerte
- Al definir una variable, se declara el tipo de dato que se va a utilizar.
- Si en una variable, le asignas un tipo de dato que se no especifico, te lanza error.


#### Tipado debil
- Es todo lo contrario.
- Podes asignar cualquier tipo de dato en cualquier variable.


![Tipado fuerte y debil](https://www.estudioyobo.com/wp-content/uploads/2022/12/Clases-de-tipados-fuertes-y-debiles-Estudio-YOBO-diseno-y-desarrollo.png)

:::tip Observación
- Estático: Tenes que crear las variables antes de usarla.
- Dinámico: Es lo contrario al estático. Podes escribir cualquier nombre de variable sin haberla creado.
- C# Es un lenguaje de tipado fuerte.


:::

## Tipos de variables

- Los textos se definen entre comillas dobles.
- Los números se definen sin comillas dobles, van sueltos.
- Al final de cada sentencia(línea), se escribe un punto y coma (“;”).

### String
```csharp
     private void button1_Click(object sender, EventArgs e)
        {
            string prueba = "Soy un String , que en español significa cadena de caracteres o texto";
            label1.Text = prueba;
        }

```

- Un String almacena texto.
- Para concatenar (unir) texto, usamos el “+”.

```csharp
        private void button1_Click(object sender, EventArgs e)
        {
            string prueba = "Soy un texto,  ";
            string prueba2 = prueba + "Soy otro texto";
            label1.Text = prueba2;
        }

```
:::tip Observación
Una variable de tipo String aparte de almacenar texto, almacena espacios en blancos.

:::

##### Otro ejemplo

```csharp
   private void button1_Click(object sender, EventArgs e)
        {
            string prueba = "Soy un texto,  " + "Soy otro texto";
       
            label1.Text = prueba;
        }

```

- Para modificar una variable, solamente utilizamos el nombre de la misma (no hace falta especificar el tipo).

```csharp
  private void button1_Click(object sender, EventArgs e)
        {
            string prueba = "Soy un texto,  " + "Soy otro texto";
            prueba = "Modificamos el texto que almacena la variable prueba";
       
            label1.Text = prueba;
        }

```

:::tip Observación
- Solamente se declara el tipo, cuando se crea la variable.
- Luego en su reutilización, solamente usamos su nombre.
- El signo “=” sirve para asignarle un valor a una variable.
- Entonces la sintaxis para crear una variable es: TipoVariable nombre = valor;
:::

### Números
- Para almacenar números, utilizamos variables de tipo int y double.
- El tipo INT solo almacena números enteros.
- El tipo DOUBLE almacena números decimales.


```csharp
    private void button1_Click(object sender, EventArgs e)
        {
            int numero = 123;
            double numeroconComas = 5000.28;
            string prueba = "Numero entero :  " + numero + "  Numero con coma:  " + numeroconComas;
            label1.Text = prueba;
        }

```

:::tip Observación
- En ingles, el punto (“.”) representa la “coma”.
- Se puede concatenar un String con un número.


:::

### Operadores Aritméticos
| Descripción | Operador | Ejemplo |
| - | - | - |
| Sumar  | + |  10 + 1 = 11  |
| Restar  | - |  10 – 1 = 9  |
| Multiplicar  | * |  2 * 2 = 4  |
| Dividir  | / |  10 / 2 = 5  |
| Resto  | % |  11 % 3 = 1  |

:::tip  ¿Qué es el resto?
- El resto es lo que sobra de una división.
- Sirve para saber si un número es múltiplo de otro.
:::

### Booleano
- Un dato de tipo booleano (bool), solo puede tener dos valores: false o true.


```csharp
   private void button1_Click(object sender, EventArgs e)
        {
            int edad = 23;
            bool esMayorDeEdad = edad >= 18;
            label1.Text = "El usuario es menor de edad";
            if (esMayorDeEdad)
            {
                label1.Text = "El usuario es mayor de edad";
            }
           
        }

```
:::tip Observación
- En ese código, la variable esMayorDeEdad es true solo si el valor de la variable edad es mayor o igual que 18.
- El if comprueba si un valor booleano (el que se pasa por paréntesis) es true.
- Si es true, ejecuta el código que contienen las llaves (“{}”) que se ubican abajo.
- Las llaves (“{}”) indican que va a comenzar un pedazo de código que se puede ejecutar (o no).
:::


#### Otra forma de hacer lo mismo


```csharp
private void button1_Click(object sender, EventArgs e)
        {
            int edad = 7;
            bool esMayorDeEdad = edad >= 18;

            if (esMayorDeEdad)
            {
                label1.Text = "El usuario es mayor de edad";
            } else
            {
                label1.Text = "El usuario es menor de edad";
            }
           
        }

```

:::tip Observación
Si el valor que el if comprueba es false, se ejecuta el código que contienen las llaves (“{}”) que se ubican abajo del else.

:::

### Operadores Logicos y Relacionales

- Se utilizan para trabajar con if/else , bucles , etc.
- Son operaciones que devuelven un valor booleano (true o false).


:::tip info
- [Operaciones relacionales](https://fedeleva.github.io/documentacion/docs/Javascript/basico/#operadores-relacionales)
- [Operadores logicos](https://fedeleva.github.io/documentacion/docs/Javascript/basico/#operadores-logicos)
:::


:::tip 
- [Lista de operadores](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/)

:::

## Sistema de numeros

#### Sistema decimal
- El sistema decimal utiliza 10 números para contar.
- Los números que se utilizan son: del 0 al 9

#### Sistema octal
- El sistema octal utiliza 8 números para contar.
- Los números que se utilizan son: del 0 al 7

#### Sistema binario
- El sistema binario utiliza solo 2 números para contar.
- Los números que se utiliza son: El 0 y el 1.


#### Ejemplos
- Suponiendo que hay 8 manzanas:
  - En el sistema decimal se expresa: 8.
  - En el sistema octal se expresa: 10.
  - En el sistema binario se expresa: 1000.


#### Computación
- La computación funciona con el sistema binario.
- El hardware de una computadora funciona con corriente eléctrica.
- Si hay corriente, es un 1. Si no hay corriente es un 0.
- Esto cambia con las computadoras cuánticas.

#### Bit

- Un bit es la mínima unidad de información que puede tener una computadora (es como un dato).
- Almacena un 0 o un 1.

#### Byte
- Un Byte almacena 8 bits.
- Si lo pasamos al sistema decimal, es un número del 0 al 255.
- Con el byte podemos representar casi cualquier carácter de un teclado.


:::tip ¿Qué caractér representa?

- Busquen la tabla ASCII para saber que carácter representa cada byte.
- Si usamos Windows, podemos utilizar “ALT + Numero ” para escribir un carácter.
- Ese número  sería el valor del byte convertido a sistema decimal.

:::

## Unidades de Medidas

| Tipo | Abreviatura | Valor |
| - | - | - |
|  Bit |  b |  Puede ser 0 o 1 |
|  Byte |  B |  8 bits |
|  KiloByte |  KB |  1024 bytes |
|  MegaByte |  MB |  1024 kilobytes |
|  GigaByte |  GB |  1024 megabytes |
|  TeraByte |  TB |  1024 gigabytes |
|  PetaByte |  PT |  1024 terabytes |
|  ExaByte |  EB |  1024 petabytes |


## Tipo de datos


#### Enteros

| Tipo | .Net Type (Clase) | Tamaño | Rango numérico |
| - | - | - | - |
| sbyte  |  System.SByte |  1 byte |  -128 a 127  |
| byte  |  System.Byte |  1 byte |  0 a 255 |
| short  |  System.Int16 |  2 bytes |  -32,768 a 32,767 |
| ushort  |  System.UInt16 |  2 bytes |  0 a 65,535 |
| int  |  System.Int32 |  4 bytes |  -2,147,483,648 a 2,147,483,647  |
| uint  |  System.UInt32 |  4 bytes |  0 a 4,294,967,295|
| long  |  System.Int64 |  8 bytes |  -9,223,372,036,854,775,808 a 9,223,372,036,854,775,807|
| ulong  |  System.UInt64 |  8 bytes |  0 a 18,446,744,073,709,551,615|

:::tip Observación
- Cuando usamos la “U” al comienzo, hacemos referencia a que solo usamos valores positivos.
- Lo normal sería trabajar con int y long.

:::

:::tip ¿Qué pasa si el valor que le asignamos se excede del rango?
- Si byte contiene el valor 255 y le sumamos 1, su valor serio 0.
- Entonces si se excede de rango, da la vuelta completa (arrancaría al final o al comienzo del rango).


:::


#### Decimales

| Tipo | .Net Type (Clase) | Tamaño | Rango numérico |  |
| - | - | - | - | - |
| float  | System.Single |  4 bytes |  7 dígitos  | +-1.5 X 10-45 to + -3.4 X 1038 |
| double  | System.Double |  8 bytes |  15-16  dígitos  | +-5.0 x 10-324 to + -1.7 x 10308 |
| decimal  | System.Decimal |  16 bytes |  28-29 lugares decimales  | +-1.0 X 10-28 to + -7.9 x 1028 |

## Concatenar numeros y string

```csharp
    private void button1_Click(object sender, EventArgs e)
        {
            int numero = 123;
            double numeroconComas = 5000.28;
            string prueba = "Numero :  " + numeroconComas + numero;
            label1.Text = prueba;
        }

```
:::tip Observación
- En ese código, se termina concatenando los dos números también.
- Porque:
   - El código se lee de arriba abajo y de izquierda a derecha.
   - Como lo primero que lee (arranca en la izquierda) es un texto, el signo “+” lo toma como concatenación y no como suma.
   - A su vez, todos los valores que tenga del lado derecho, se convierten en texto.


:::


#### Y si invertimos el orden


```csharp
  private void button1_Click(object sender, EventArgs e)
        {
            int numero = 123;
            double numeroconComas = 5000.28;
            string prueba = numeroconComas + numero + "  Numero  ";
            label1.Text = prueba;
        }

```

:::tip Observación
- En ese código , se suma y luego se concatena.
- Porque:
  - El código se lee de arriba abajo y de izquierda a derecha
  - Como lo primero que lee es un número, el signo “+” lo toma como suma.
  - Cuando se encuentra con texto, el signo “+” se toma como concatenación y el “numero” se convierte en texto.


:::


## Practica -- Label , TextBox y Button

- En el formulario, añadimos dos label ,  un textbox  (sería un input) y un button.


#### Nombre de los elementos del formulario

- Una de las propiedades de un elemento del formulario es “Design”
- Ahí podes cambiar el Name.
- El Name es el “Nombre de la variable” que va a contener ese elemento.
- En los ejemplos anteriores teníamos un label llamado label1 (Nombre por defecto)


#### En este ejemplo
- Un label se va a llamar lblResultado y el otro lblEdad
- El textBox se va a llamar txtEdad

:::tip Observación
- Siempre ponemos un prefijo para identificar el tipo de elemento que es.

:::

#### Archivos en el explorador de soluciones
#### Form1.Designer.css

- Contiene los elementos del formulario que  se utilizo y sus nombres.


```csharp
       private Label lblEdad;
       private TextBox txtEdad;
       private Button button1;
       private Label lblResultado;

```
:::tip Observación
- El "Form1" es el nombre del formulario.
- Cuando se cambie el nombre , se cambiara el nombre del archivo
:::
#### Form1()
- Y adentro de este archivo (Form1.Designer.css) hay un Form1, por ultimo adentro de este , hacemos click en Form1()
  
:::tip Observación
- El "Form1" es el nombre del formulario.
- Cuando se cambie el nombre del formulario , se cambiara el nombre de todos los archivos/metodos/etc que utilicen su nombre.
:::

- Este archivo contiene la lógica de verdad, acá se encuentra el código de cuando hicimos click.
- En la lógica de hacer click en el botton:


```csharp

private void button1_Click_1(object sender, EventArgs e)
        {
            string textoEdad = txtEdad.Text;
            int edad = Int32.Parse(textoEdad);
            bool esMayorDeEdad = edad >= 18;
   
            if (esMayorDeEdad)
            {
                lblResultado.Text = "El usuario es mayor de edad";
            }
            else
            {
                lblResultado.Text = "El usuario es menor de edad";
            }
        }

```

:::tip Observación
- Con “txtEdad.Text” accedemos al texto que se encuentra en el elemento.
- Con elementoTextBox.Text accedemos al texto del elemento TexBox
- Lo que reciba Int32.Parse entre paréntesis (un String), se convertirá en un valor int.
- Si escribimos un numero con coma , rompemos el progama porque no se puede cambiar a “int”
:::


## Comentarios

```csharp
// Asi se escribe el comentario en una linea;

/* Todo esta parte
  esta comentada 
De esta forma comentas multilíneas.
 */

```


## Calculadora de Indice corporal

:::tip
Copiando y pegando multiplicas los elementos del formulario.
:::


#### Elementos del formulario

```csharp
   private Label lblAltura;
        private Label lblPeso;
        private TextBox txtAltura;
        private TextBox txtPeso;
        private Button btnCalcular;

```
#### Método InitializeComponent 
- En el método InitializeComponent (se encuentra en Form1.Designer.cs o adentro de  Form1 (esta adentro de Form1.Designer.cs)), se muestra el código que crea los elementos del formulario, su diseño (tamaño, texto, posición, etc) y también como se agregan eventos (al hacer click, etc).
- En las futuras prácticas, les estaré pasando el contenido de este método.

:::tip Observación
- El "Form1" es el nombre del formulario.
- Cuando se cambie el nombre del formulario , se cambiara el nombre de todos los archivos/metodos/etc que utilicen su nombre.
:::

- De este proyecto es así:

```csharp
   lblAltura = new Label();
            lblPeso = new Label();
            txtAltura = new TextBox();
            txtPeso = new TextBox();
            btnCalcular = new Button();
            SuspendLayout();
            // 
            // lblAltura
            // 
            lblAltura.AutoSize = true;
            lblAltura.Location = new Point(22, 118);
            lblAltura.Name = "lblAltura";
            lblAltura.Size = new Size(49, 20);
            lblAltura.TabIndex = 0;
            lblAltura.Text = "Altura";
            // 
            // lblPeso
            // 
            lblPeso.AutoSize = true;
            lblPeso.Location = new Point(22, 43);
            lblPeso.Name = "lblPeso";
            lblPeso.Size = new Size(39, 20);
            lblPeso.TabIndex = 1;
            lblPeso.Text = "Peso";
            lblPeso.Click += label2_Click;
            // 
            // txtAltura
            // 
            txtAltura.Location = new Point(92, 118);
            txtAltura.Name = "txtAltura";
            txtAltura.Size = new Size(125, 27);
            txtAltura.TabIndex = 2;
            // 
            // txtPeso
            // 
            txtPeso.Location = new Point(92, 43);
            txtPeso.Name = "txtPeso";
            txtPeso.Size = new Size(125, 27);
            txtPeso.TabIndex = 3;
            // 
            // btnCalcular
            // 
            btnCalcular.Location = new Point(76, 196);
            btnCalcular.Name = "btnCalcular";
            btnCalcular.Size = new Size(94, 29);
            btnCalcular.TabIndex = 4;
            btnCalcular.Text = "Calcular";
            btnCalcular.UseVisualStyleBackColor = true;
            // 
            // Form1
            // 
            AutoScaleDimensions = new SizeF(8F, 20F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(265, 328);
            Controls.Add(btnCalcular);
            Controls.Add(txtPeso);
            Controls.Add(txtAltura);
            Controls.Add(lblPeso);
            Controls.Add(lblAltura);
            Margin = new Padding(3, 4, 3, 4);
            Name = "Form1";
            Text = "Form1";
            Load += Form1_Load;
            ResumeLayout(false);
            PerformLayout();

```

:::tip Observación
Form1 hace referencia al formulario(“ventana de Windows de la aplicación”) .

:::

#### Lógica del botton al hacer click:

```csharp
     private void btnCalcular_Click(object sender, EventArgs e)
        {
            string textoPeso = txtPeso.Text;
            double peso = Double.Parse(textoPeso);
            string textoAltura = txtAltura.Text;
            double altura = Double.Parse(textoAltura);
            double imc = peso / (altura * altura);


            MessageBox.Show("El IMC es  :  " + imc);
        }

```

:::tip Observación
- Lo que reciba Double.Parse entre paréntesis (un String), se convertirá en un valor Double.
- Lo que reciba MessageBox.Show() entre paréntesis (Un String), lo mostrara como una “Notificacion”.
- Al ejecutarlo, se debe ingresar números con coma para que funcione correctamente.
:::


#### Ahora si mostramos el InitializeComponent() quedaría:

```csharp
lblAltura = new Label();
            lblPeso = new Label();
            txtAltura = new TextBox();
            txtPeso = new TextBox();
            btnCalcular = new Button();
            SuspendLayout();
            // 
            // lblAltura
            // 
            lblAltura.AutoSize = true;
            lblAltura.Location = new Point(22, 118);
            lblAltura.Name = "lblAltura";
            lblAltura.Size = new Size(49, 20);
            lblAltura.TabIndex = 0;
            lblAltura.Text = "Altura";
            // 
            // lblPeso
            // 
            lblPeso.AutoSize = true;
            lblPeso.Location = new Point(22, 43);
            lblPeso.Name = "lblPeso";
            lblPeso.Size = new Size(39, 20);
            lblPeso.TabIndex = 1;
            lblPeso.Text = "Peso";
            lblPeso.Click += label2_Click;
            // 
            // txtAltura
            // 
            txtAltura.Location = new Point(92, 118);
            txtAltura.Name = "txtAltura";
            txtAltura.Size = new Size(125, 27);
            txtAltura.TabIndex = 2;
            // 
            // txtPeso
            // 
            txtPeso.Location = new Point(92, 43);
            txtPeso.Name = "txtPeso";
            txtPeso.Size = new Size(125, 27);
            txtPeso.TabIndex = 3;
            // 
            // btnCalcular
            // 
            btnCalcular.Location = new Point(76, 196);
            btnCalcular.Name = "btnCalcular";
            btnCalcular.Size = new Size(94, 29);
            btnCalcular.TabIndex = 4;
            btnCalcular.Text = "Calcular";
            btnCalcular.UseVisualStyleBackColor = true;
            btnCalcular.Click += btnCalcular_Click;
            // 
            // Form1
            // 
            AutoScaleDimensions = new SizeF(8F, 20F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(265, 328);
            Controls.Add(btnCalcular);
            Controls.Add(txtPeso);
            Controls.Add(txtAltura);
            Controls.Add(lblPeso);
            Controls.Add(lblAltura);
            Margin = new Padding(3, 4, 3, 4);
            Name = "Form1";
            Text = "Form1";
            Load += Form1_Load;
            ResumeLayout(false);
            PerformLayout();


```

:::tip Observación
Muestra el nombre,  posición, el “evento click” , padding , etc de todos los elementos , incluyendo la ventana (Form1).

:::