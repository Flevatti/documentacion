---
sidebar_position: 8
---
# Conceptos de "C#" - Parte 3

## Palabra clave nameof
- La palabra clave nameof genera el nombre de una variable, un tipo de dato  , un miembro , un espacio de nombre , etc como un String.
- La expresión nameof se evalúa en tiempo de compilación y no tiene efecto en tiempo de ejecución.
- Cuando el operando es un tipo de dato o un espacio de nombre, el nombre generado no está completo:


```csharp
Console.WriteLine(nameof(System.Collections.Generic));  // output: Generic
Console.WriteLine(nameof(List<int>));  // output: List
Console.WriteLine(nameof(List<int>.Count));  // output: Count
Console.WriteLine(nameof(List<int>.Add));  // output: Add

var numbers = new List<int> { 1, 2, 3 };
Console.WriteLine(nameof(numbers));  // output: numbers
Console.WriteLine(nameof(numbers.Count));  // output: Count
Console.WriteLine(nameof(numbers.Add));  // output: Add

```

:::tip info
- [Expresión nameof (referencia de C#)](https://learn.microsoft.com/es-es/dotnet/csharp/language-reference/operators/nameof)
- [La expresión nameof en C#](https://www.delftstack.com/es/howto/csharp/csharp-nameof/#google_vignette)
:::

## Record
- Antes solo podíamos trabajar con dos tipos de estructuras para almacenar información: class y struct.
- Con C# 9 o posterior disponemos de un tercer elemento para almacenar información: record, también conocido como registro.

#### ¿Y cuál es la diferencia con los dos anteriores que seguramente ya conoces?

- Con las clases y las estructuras tenemos el problema de que pueden ser alterados. Los objetos de tipo clase son tipos por referencia, mientras que las estructuras son tipos por valor, que lo más que se podían acercar a un objeto inmutable era declarándolas como readonly.
- Los objetos de tipo record, son objetos por referencia que vienen a solucionar el problema existente a la hora de generar objetos inmutables, esto es, objetos que no pueden variar. Por otro lado están "a caballo" entre clases y estructuras, puesto que tienen características de los dos.
- Las similitudes con ambos elementos, los vemos inmediatamente al realizar una comparación entre dos registros:
   -	Podremos emplear el operador de igualdad ==, puesto que al ser tipos por referencia nos va a indicar si se tratan de objetos con la misma referencia o no.
   -	Al igual que con las estructuras, el método Equals nos va a decir si son iguales o no, en función de los valores que tiene.
- Los records son datos inmutables que básicamente se usan como transporte de datos.
- Vienen a sustituir a los objetos conocidos como DTOs que básicamente no tienen comportamiento solamente traen las propiedades  para transportar datos.
- Puedes establecer miembros estáticos en un Record.


#### Declarar un record
- Para que declarar un récord con propiedades inmutables puedes usar una sintaxis similar a la de una clase, por ejemplo:

```csharp
public record Person
{
    public string FirstName { get; init; }
    public string LastName { get; init; }
}

```
- Tambien se puede declarar un record con propiedades inmutables con una nueva sintaxis conocida como parámetros posicionales:

```csharp
public record Person(string FirstName, string LastName);
```

-	Un record puede ser partial(parcial), es decir que lo puedes dividir en varios archivos.
-	Los records soportan herencia.

#### Manejar herencia
- Los records pueden heredar unicamente de otro record. Un record no puede extender una clase diferente a object.


#### Record Structs
- A partir de C# 10 puedes declarar un record usando record struct o readonly record struct.


#### Ejemplo

```csharp
public record Persona {
    public string Nombre { get; set; }
    public string Apellidos { get; set; }

    public Persona (string nombre, string apellidos) {
        Nombre = nombre;
        Apellidos = apellidos;
    }
}

```
- Una vez tenemos nuestro registro, vamos crear varios objetos de este tipo:
  - Dos de ellos serán copias uno del otro.
  - Un tercer objeto nuevo, pero con los mismos valores.
  - Un último objeto con diferentes valores.

```csharp
var persona1 = new Persona ("Rubén", "Rubio");
var persona2 = persona1;
var persona3 = new Persona ("Rubén", "Rubio");
var persona4 = new Persona ("Rubén", "R.");

```

#### Registros posicionales
- Al principio decíamos que vienen a solucionar la definición de tipos inmutables, pero... con lo que hemos visto hasta ahora es posible modificar su contenido, por lo que no son inmutables 🤔.
- La declaración mediante registros posicionales nos va a permitir, por un lado, simplificar el cuerpo del registro y, por otro, crear un registro realmente inmutable, siendo el propio compilador el que genere por nosotros toda la fontanería de constructor, deconstructores y propiedades.
- Veamos cómo reescribiríamos el registro Persona para hacerlo inmutable:

```csharp
public record Persona (string Nombre, string Apellidos);
```
- El ejemplo anterior sería equivalente a este otro código:

```csharp
public record Persona {
    public string Nombre { get; init; }
    public string Apellidos { get; init; }

    public Persona (string nombre, string apellidos) {
        Nombre = nombre;
        Apellidos = apellidos;
    }

    public void Deconstruct (out string nombre, out string apellidos) {
        nombre = Nombre;
        apellidos = Apellidos;
    }
}

```

:::tip Observación
- Si lo observamos detenidamente, las propiedades no tienen un set, sino que son accesibles únicamente en la inicialización, puesto que son propiedades inicializadoras. De esta forma, ya no podremos alterar el registro siendo realmente inmutable.
- Además, es considerable la reducción de código, puesto que hemos reducido toda la declaración a una única línea de código.
:::

#### Pero, ¿y si necesitásemos constructores adicionales?

- Para añadir más constructores a nuestro registro, bastará con añadirlos entre llaves a continuación de la declaración y siempre llamando al constructor base mediante el empleo de this:

```csharp
public record Persona (string Nombre, string Apellidos) {
    public Persona (string Nombre): this (Nombre, "") {}
};

```
:::tip Observación
- En ese ejemplo se creó dos constructores:
  - Persona(String Nombre , String Apellidos).
  - Persona(String Nombre).


:::

#### With
- Por último, veremos cómo podemos instanciar registros con ayuda de with, que no es más que una forma de generar un registro a partir de otro, previamente existente, al que indicaremos que alguna de sus propiedades debe tener un valor diferente.
- En primer lugar, declararemos un registro a partir del cual copiar:
```csharp
var persona1 = new Persona ("Rubén", "Rubio");
```

- A continuación, realizaremos la copia mediante igualdad, pero añadiremos la palabra clave with seguida de la declaración, entre llaves, de los valores que deben ser modificados:

```csharp
var persona2 = persona1 with { Nombre = "Fernando" };
```
- De esta forma tendremos una copia de persona1 en persona2 pero variando la propiedad Nombre:


```csharp
var persona1 = new Persona ("Rubén", "Rubio");
var persona2 = persona1 with { Nombre = "Fernando" };
Console.WriteLine ($"Persona 1: {persona1}");
Console.WriteLine ($"Persona 2: {persona2}");

```

:::tip info
- [C# Records](https://aspnetcoremaster.com/csharp/csharp-records.html)
- [Introducción a los registros (record) y los objetos inmutables de C# 9](https://www.campusmvp.es/recursos/post/introduccion-a-los-registros-record-y-los-objetos-inmutables-de-csharp-9.aspx)
- [Create record types](https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/tutorials/records)
- [¿Qué son los record types en C#?](https://happydevops.com/2022/05/07/que-son-los-record-types-en-c/)
- [C# 9.0 – Specification – Records](https://geeks.ms/jorge/2020/09/25/c-9-0-specification-records/)
:::


## Readonly
- El modificador **readonly** indica que la asignación del valor de un campo se puede realizar en la propia declaración del campo, o bien, en un constructor de la misma clase. Una vez que el constructor de la clase finaliza, no se puede cambiar.
- Si el modificador de solo lectura se usa con un campo de tipo valor, entonces el campo es inmutable. 
- Si el modificador de solo lectura se usa con un campo de tipo de referencia, entonces el modificador de solo lectura evita que el campo sea reemplazado por diferentes instancias del mismo tipo, aquí el modificador de solo lectura no impide que los datos de la instancia se modifiquen.

#### Ejemplo

```csharp
using System;
  
class GFG {
  
    
    public readonly string str1;
    public readonly string str2;
  
    public readonly string str3 = "gfg";
  
    public GFG(string a, string b)
    {
  
        str1 = a;
        str2 = b;
        Console.WriteLine("Display value of string 1 {0}, "
                         + "and string 2 {1}", str1, str2);
    }
  
    static public void Main()
    {
        GFG ob = new GFG("GeeksforGeeks", "GFG");
    }
}

```


:::tip info
- [Poner una propiedad a readonly no te asegura que sea readonly II](https://geeks.ms/jorge/2019/07/17/poner-una-propiedad-a-readonly-no-te-asegura-que-sea-readonly-ii/)
- [How to use const, readonly, and static in C#](https://www.infoworld.com/article/3546242/how-to-use-const-readonly-and-static-in-csharp.html)
- [Readonly in C#](https://www.geeksforgeeks.org/readonly-in-c-sharp/)
- [readonly (C# Reference)](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/readonly)
:::

## Eventos
#### Qué son los eventos
- El concepto event en .NET es muy similar a lo que podría ser un evento en una empresa. Por ejemplo, Google indica que va a haber un evento para enseñar el último producto. La empresa notificará a los usuarios a través de un email que hay un nuevo producto.
- En este escenario Google es el editor, el cual crea un evento y los usuarios se convierten en suscriptores los cuales participaran en el evento.
- Los eventos son acciones como pueden ser pulsar un botón, mover el ratón etcétera. Pero no solo tenemos los eventos que vienen predefinidos de lo que sería la interfaz, sino, que podemos crear eventos propios. 
- Otra forma de describir los eventos es que un evento es un mensaje que es enviado por un objeto para indicar que cierta acción va a ocurrir. 
- En C# los eventos, siguen el patrón editor-suscriptor.

#### Editor
- En C# lo que determinamos como editor (publisher) es el elemento que determina cuando un evento se lanza. Por lo tanto, es el objeto que contiene la definición de un evento y de su delegado.
- La clase editora invocará el evento (el método que contiene el delegado).
- Les notificara a todos los suscriptores, cuando el evento se lance.


:::tip

El evento es un Delegate.
:::

#### Suscriptor
- Es un objeto que se registra al evento y provee un event handler, que va a ser el método el cual va a ser ejecutado cuando ese evento ocurre. 
- El que recibe el evento, debe suscribirse(registrarse) y para ello debe informar que método quiere que sea llamado cuando se lance el evento. Es decir, debe proporcionar al evento un delegate con el método que se ejecutara.

#### Evento
- Es una variable de tipo delegate , te permite  suscribirte al evento.
  

#### Declaración de un evento
- En términos generales un evento no es más que un delegado encapsulado.
- Por ello lo primero que tenemos que hacer es declarar un delegado. Para cumplir un poco con la estructura de clases he creado una clase llamada Editor y en ella crearemos nuestro delegado.


```csharp
public class Editor
{
    public delegate void EjemploEvento();
    public EjemploEvento ejemploEvento;
}

```
- Para indicar que es un evento, únicamente debemos utilizar la palabra clave event antes de la declaración de la variable del tipo de delegado:


```csharp
public class Editor
{
    public delegate void EjemploEvento();
    public event EjemploEvento ejemploEvento;
}

```

:::tip Evento
- Para subscribirnos a un evento debemos utilizar “+=” y para darnos de baja “-=”.
:::


#### Creación del editor
- Como ejemplo vamos a utilizar una lógica de lo que podría ser una calculadora.
- Para simplificar el uso, veremos simplemente sumar y restar:


```csharp
public class EditorCalculadora
{
    public delegate void EjemploDelegado();
    public event EjemploDelegado ejemploEvento;

    public void sumar(int a, int b)
    {
        if (ejemploEvento != null)
        {
            ejemploEvento();
            Console.WriteLine("La suma es: {0}", a + b);
        }
        else
        {
            Console.WriteLine("No estas suscrito a los eventos");
        }
    }

    public void Restar(int a, int b)
    {
        if (ejemploEvento != null)
        {
            ejemploEvento();
            Console.WriteLine("La resta es: {0}", a - b);
        }
        else
        {
            Console.WriteLine("No estas suscrito a los eventos");
        }
    }
}

```
:::tip Observación
- Como podemos observar disponemos de la clase EditorCalculadora la cual contiene un delegado y un event, además de estos dos elementos, disponemos de dos métodos uno para sumar y otro para restar. 
- Si miramos dentro de cualquiera de ellos, veremos que lo primero que hacemos es comprobar que el evento no es null, osea que existe, antes de ejecutarlo. 


:::

#### Creación del suscriptor
- Para el suscriptor creamos una clase llamada SuscriptorCalculadoraVirtual la cual, va a suscribirse a los eventos. 
- Primero debemos definir las variables y el constructor, así como los métodos que vamos a querer utilizar. 
- Para suscribirnos a los eventos, debemos crear un método que encaje con el delegado de la clase Editor para ello crearemos un método que no reciba parámetros y devuelva void. Este método será ejecutado cada vez que el Editor lance un evento.


```csharp
public class SuscriptorCalculadoraVirutal
{
    EditorCalculadora editor;
    private readonly int A;
    private readonly int B;

    public void EjemploEventHandler()
    {
        Console.WriteLine("Se va a imprimir el resultado:");
    }

    public SuscriptorCalculadoraVirutal(int a, int b)
    {
        editor = new EditorCalculadora();
        A = a;
        B = b;
    }

    public void ResultadoSuma()
    {
        editor.sumar(A, B);
    }

    public void ResultadoResta()
    {
        editor.Restar(A, B);
    }

}

```

:::tip Observación
- Como vemos en el constructor definimos las variables y el Editor.

:::

- Ahora probamos a ejecutar el código:


```csharp
SuscriptorCalculadoraVirutal calculadoraVirutal = new SuscriptorCalculadoraVirutal(3, 2);
calculadoraVirutal.ResultadoSuma();
calculadoraVirutal.ResultadoResta();

```

:::tip Observación
- Como podemos observar nuestro código va a imprimir No estas suscrito a los eventos.
- Y esto es porque no nos hemos suscrito a los eventos. 
:::


#### Cómo Suscribirse
- Para suscribirnos a un evento en C# debemos enlazar el evento y el método (que se ejecutara  cuando se invoca el evento), utilizando += con el método que hemos creado en nuestra clase suscriptor que coincide con el delegado del editor. 
- En nuestro ejemplo cambiamos el constructor de la clase suscriptora por lo siguiente:


```csharp
public SuscriptorCalculadoraVirutal(int a, int b)
{
    editor = new EditorCalculadora();
    A = a;
    B = b;
    editor.ejemploEvento += EjemploEventHandler;
}

```

- Y si ejecutamos el código vemos la siguiente respuesta:


```csharp
Se va a imprimir el resultado:
La suma es: 5
Se va a imprimir el resultado:
La resta es: 1
```


:::tip Observación
- [Eventos en C#](https://www.netmentor.es/entrada/events-chsarp)
- [C# Básico: Eventos](https://geeks.ms/etomas/2012/01/05/c-bsico-eventos/)
- [Events en C#](https://thatcsharpguy.com/post/events-en-c)
- [Eventos (Guía de programación de C#)](https://learn.microsoft.com/es-es/dotnet/csharp/programming-guide/events/)
- [Procedimiento Suscribir y cancelar la suscripción a eventos (Guía de programación de C#)](https://learn.microsoft.com/es-es/dotnet/csharp/programming-guide/events/how-to-subscribe-to-and-unsubscribe-from-events)
- [Control y generación de eventos](https://learn.microsoft.com/es-es/dotnet/standard/events/)
:::


## Casting
- Cuando el valor de una variable de un tipo de dato se cambia a otro tipo de dato, se conoce como conversión de tipo(casting).
- La conversión de tipo solo es posible si ambos tipos de datos son compatibles entre sí; de lo contrario, obtendremos un error en tiempo de compilación que indica que no se puede convertir implícitamente un tipo a otro.
- El tipo de dato de una variable no se puede cambiar, por ejemplo, una variable de tipo String solo almacena texto y no puede guardar números.
- Entendamos esto con un ejemplo. Aquí, estamos creando una variable de tipo de dato int. No Por lo tanto, si declaramos la variable “a” como int, no podemos asignarle como valor el String “Hola”.

```csharp
int a;
a = “Hola”; // error CS0029: no se puede convertir implícitamente el tipo de String a int

```
- Sin embargo, se puede usar el valor de una variable para diferentes tipos de datos. Esto se logra mediante la conversión de tipos. 
- Entonces, el proceso de convertir el valor de un tipo de dato (int, float, double, etc.) a otro tipo de dato ((int, float, double, etc.)) se conoce como conversión de tipos.


#### En C#, podemos realizar diferentes tipos de conversiones.
- La conversión de tipos  la realiza automáticamente el compilador o incluso como desarrollador también podemos hacerlo explícitamente y, por lo tanto, la conversión de tipos en C# se clasifica en dos tipos.
-  Son los siguientes:
   -	Conversión implícita: Conversión de un tipo más pequeño a un tipo más grande. 
   -	Conversión explícita: Conversión de un tipo más grande a un tipo más pequeño. 

#### Conversión implícita
- El compilador realiza automáticamente la conversión implícita en C# y, en este caso, no habrá pérdida de datos. Aquí, la conversión de tipos se realiza de un tipo de datos más pequeño a un tipo de datos más grande. Este tipo de conversión de tipos es segura.
- Generalmente, en el caso de la conversión de tipo implícita, los tipos de datos más pequeños como int (que tienen menos tamaño de memoria) se convierten automáticamente a tipos de datos más grandes como long (que tienen un tamaño de memoria mayor).
- La conversión de tipos implícita ocurre cuando:
   -	Los dos tipos de datos son compatibles.
   -	Cuando asignamos un valor de un tipo de dato más pequeño a un tipo de datos más grande.
- Por ejemplo, en C#, los tipos de datos numéricos como byte, short, int, long, double, float, decimal, etc. son compatibles entre sí, pero no se admite ninguna conversión automática de tipo numérico a tipo char o tipo booleano. Además, char y bool no son compatibles entre sí. Entonces, antes de convertir, el compilador primero verificará la compatibilidad de tipos y luego decidirá si es bueno convertir o arrojar algún error.
- El siguiente diagrama muestra los tipos implícitos de conversión que admite C#:

![diagrama](https://dotnettutorials.net/wp-content/uploads/2022/07/implicit-types-of-conversion-that-are-supported-by-1.png?ezimgfmt=ng:webp/ngcb1)

##### Ejemplo

```csharp
int myInt = 9;
double myDouble = myInt;       // El int se convierte en double

Console.WriteLine(myInt);      // Outputs 9
Console.WriteLine(myDouble);   // Outputs 9

```

##### Otro ejemplo
```csharp
using System;
namespace TypeCastingDemo
{
    class Program
    {
        static void Main(string[] args)
        {
            int numInt = 1500;

        Type numIntType = numInt.GetType();

            // Conversión implicita
            double numDouble = numInt;

            
            Type numDoubleType = numDouble.GetType();

             Valor antes de la conversión
            Console.WriteLine($"numInt value: {numInt}" );
            Console.WriteLine($"numInt Type: {numIntType}");
            Console.WriteLine($"Int Size: {sizeof(int)} Bytes");

            // Valor después de la conversión
            Console.WriteLine($"numDouble value: {numDouble}");
            Console.WriteLine($"numDouble Type: {numDoubleType}");
            Console.WriteLine($"double Size: {sizeof(double)} Bytes");

            Console.ReadKey();
        }
    }
}

```

:::tip Observación
- En el siguiente ejemplo, hemos creado una variable entera con el nombre numInt, es decir, int numInt = 1500;. 
- Observe la línea  double numDouble = numInt; Aquí, asignamos el valor de la variable de tipo int a una variable de tipo double. En este caso, el compilador convertirá automáticamente el valor de tipo int a tipo double.
- Esto se debe a que tanto int como double son tipos numéricos y, por tanto, los tipos son compatibles. Y además, int ocupa 4 bytes de memoria y double ocupa 8 bytes de memoria y, por lo tanto, no hay problema para almacenar 4 bytes de datos dentro de una ubicación de memoria de 8 bytes. 
- Además, aquí hemos utilizado el método GetType() para verificar el tipo de datos de las variables numInt y numDouble y también estamos usando la función sizeof para verificar el tamaño de los tipos de datos int y double.



:::

#### Casting explícito

- Obtendrá errores de compilación cuando los tipos no sean compatibles entre sí. Por ejemplo, asignar un valor double a un tipo de dato int genera un error en tiempo de compilación, como se muestra en el siguiente ejemplo:


```csharp
using System;
namespace TypeCastingDemo
{
class Program
{
static void Main(string[] args)
{
double numDouble = 1.23;
int numInt = numDouble;
Console.WriteLine("Original double Value: " + numDouble);
Console.WriteLine("Converted int Value: " + numInt);
Console.ReadKey();
}
}
}

```
- Como puede ver, aparece un error de compilación que indica que no se puede convertir implícitamente el tipo 'double' a 'int'. 
- Eso significa que, si desea este tipo de conversión, debe utilizar explícitamente el operador de conversión.
- Entonces, si queremos asignar un valor de un tipo de dato más grande a un tipo de datos más pequeño, entonces debemos realizar una conversión de tipos explícita en C#. Esto es útil para tipos de datos compatibles donde el compilador no puede realizar la conversión automática de tipos. 
- Vea, ya sea que se trate de una conversión de tipos implícita o una conversión de tipos explícita, los tipos de tipos deben ser compatibles, entonces solo será posible la conversión de tipos.

##### Uso
- La conversión explícita se debe realizar manualmente colocando el tipo de dato entre paréntesis atrás del valor:

```csharp
double myDouble = 9.78;
int myInt = (int) myDouble;    // El double se convierte en int

Console.WriteLine(myDouble);   // Outputs 9.78
Console.WriteLine(myInt);      // Outputs 9

```

##### Ejemplo
- En el siguiente ejemplo, hemos creado una variable double llamada numDouble, es decir, double numDouble = 1,23 ;. 
- Observe la línea ,  int numInt = (int)numDouble. Aquí, (int) es una expresión de conversión que convierte explícitamente el valor de tipo double 1,23 a tipo int:
```csharp
using System;
namespace TypeCastingDemo
{
class Program
{
static void Main(string[] args)
{
double numDouble = 1.23;
// Conversión explicita
int numInt = (int)numDouble;
// Valor antes de la conversión
Console.WriteLine("Original double Value: " + numDouble);
// Valor después de la conversión
Console.WriteLine("Converted int Value: " + numInt);
Console.ReadKey();
}
}
}

```

:::tip Observación
Aquí puede ver que el valor original es 1,23 mientras que el valor convertido es 1. Eso significa que hemos perdido algunos datos durante la conversión de tipo. Esto se debe a que estamos convirtiendo explícitamente el tipo de dato más grande double al tipo más pequeño int.

:::

#### ¿Siempre perdemos datos cuando convertimos un tipo más grande a un tipo más pequeño en C#?
- La respuesta es no. Básicamente depende del valor que estemos convirtiendo y del tamaño del tipo de dato que va a almacenar el valor convertido. Para una mejor comprensión, eche un vistazo al siguiente código.

![Código](https://dotnettutorials.net/wp-content/uploads/2022/07/word-image-27425-5-3.png?ezimgfmt=ng:webp/ngcb1)

- En el caso anterior no perderemos ningún dato. Esto se debe a que la variable entera contiene el valor 100 y en el tipo de dato byte, podemos almacenar los valores de 0 a 255, y 100 está dentro de este rango y, por lo tanto, no se pierden datos. Ahora, observe el siguiente código.

![Código](https://dotnettutorials.net/wp-content/uploads/2022/07/word-image-27425-6-5.png?ezimgfmt=ng:webp/ngcb1)

- En el caso anterior, perderemos los datos. Esto se debe a que la variable entera contiene el valor 500 y en el tipo de datos byte, podemos almacenar los valores de 0 a 255, y 500 no está dentro de este rango y, por lo tanto, hay pérdida de datos. El código de ejemplo completo se proporciona a continuación:


```csharp
using System;
namespace TypeCastingDemo
{
class Program
{
static void Main(string[] args)
{
int IntNum1 = 100;
byte ByteNum1 = (byte)IntNum1; 
Console.WriteLine($"Original Value:{IntNum1} and Converted Value:{ByteNum1}");
int IntNum2 = 500;
byte ByteNum2 = (byte)IntNum2; 
Console.WriteLine($"Original Value:{IntNum2} and Converted Value:{ByteNum2}");
Console.ReadKey();
}
}
}

```


#### Métodos de conversión de tipos

- Ahora, observe el siguiente ejemplo. Aquí tenemos una variable de cadena que contiene el valor 100 e intentamos convertir ese valor a un tipo entero. Pero esto no es posible con el operador de conversión.
- Porque el operador de conversión primero verificará la compatibilidad de tipos y descubrió que string e int no son compatibles entre sí porque la cadena se usa para almacenar datos textuales que contienen tanto alfanuméricos como números y int   solo contiene datos numéricos.


```csharp
using System;
namespace TypeCastingDemo
{
class Program
{
static void Main(string[] args)
{
string str= "100";
int i1 = (int)str;
Console.ReadKey();
}
}
}

```
- Entonces, para la conversión entre tipos no compatibles como enteros  y  cadenas, .NET Framework nos proporcionó la clase Convert, el método Parse y el método TryParse. Entendamos estas cosas una por una y veamos cómo podemos convertir tipos no compatibles en C# con ejemplos.


#### Clase Convert
- La clase Convert proporciona algunos métodos para convertir un valor a un tipo de dato específico. Los  métodos convertirán el valor independientemente de la compatibilidad de tipos. Significa que, si los tipos son compatibles, se convertirá y si los tipos no son compatibles, también intentará convertir.
- Entre sus métodos se encuentran:
   - Convert.ToBoolean
   - Convert.ToDouble
   - Convert.ToString
   - Convert.ToInt32(int) 
   - Convert.ToInt64(long)

![Convert](https://dotnettutorials.net/wp-content/uploads/2022/07/conversion-with-the-helper-class-in-c-1.png?ezimgfmt=ng:webp/ngcb1)

- Por ejemplo, si desea convertir una cadena a un tipo Int, debe usar Convert.ToInt16 , Convert.ToInt32 o Convert.ToInt64 . Estos métodos auxiliares se implementan como métodos estáticos dentro de la clase Convert y, por lo tanto, puede acceder a ellos directamente. Para una mejor comprensión, eche un vistazo al siguiente ejemplo:

```csharp
using System;
namespace TypeCastingDemo
{
class Program
{
static void Main(string[] args)
{
string str = "100";
int i1 = Convert.ToInt32(str); //Convierte un String a Int
double d = 123.45;
int i2 = Convert.ToInt32(d); //Convierte un double a int
float f = 45.678F;
string str2 = Convert.ToString(f); //Convierte un double a string
Console.WriteLine($"Original value str: {str} and Converted Value i1:{i1}");
Console.WriteLine($"Original value d: {d} and Converted Value i2:{i2}");
Console.WriteLine($"Original value f: {f} and Converted Value str2:{str2}");
Console.ReadKey();
}
}
}

```

- Cuando utilizamos el método auxiliar de la clase Convert para convertir un valor a un tipo de dato específico, si los tipos no son compatibles, no arrojará ningún error en el momento de la compilación. En tiempo de ejecución, intentará convertir el valor a ese tipo particular y si el valor es compatible, lo convertirá y si el valor no es compatible, arrojará un error en tiempo de ejecución. Para una mejor comprensión, eche un vistazo al siguiente ejemplo:


```csharp
using System;
namespace TypeCastingDemo
{
class Program
{
static void Main(string[] args)
{
string str = "Hello";
int i1 = Convert.ToInt32(str); //Convertimos un String a int
Console.WriteLine($"Original value str: {str} and Converted Value i1:{i1}");
Console.ReadKey();
}
}
}

```

:::tip Observación
Cuando ejecutamos el código anterior, obtendremos un error de ejecución. Esto se debe a que en tiempo de ejecución intenta convertir el valor Hola a un tipo entero, lo cual no es posible y, por lo tanto, generará una excepción en tiempo de ejecución.

:::

#### Parse()
- En C#, también podemos usar el método Parse() integrado para realizar la conversión de tipos.
- Ahora, si va a la definición de tipos de datos integrados como int, short, long, bool, etc., verá que el método Parse se implementa como un método estático en esos tipos de datos de valores integrados.  Entonces, usando la clase del tipo de dato, podemos llamar al método Parse.
- Para una mejor comprensión, eche un vistazo al siguiente ejemplo. En el siguiente ejemplo, estamos realizando dos conversiones de tipos incompatibles. Primero, convertimos el valor de cadena 100 a tipo entero y en la segunda conversión, convertimos la cadena a booleano.


```csharp
using System;
namespace TypeCastingDemo
{
class Program
{
static void Main(string[] args)
{
string str1 = "100";
//Convertimos un String a int
int i = int.Parse(str1);
Console.WriteLine($"Original String value: {str1} and Converted int value: {i}");
string str2 = "TRUE";
//Convertimos un String a booleano
bool b= bool.Parse(str2);
Console.WriteLine($"Original String value: {str2} and Converted bool value: {b}");
Console.ReadKey();
}
}
}

```

:::tip Observación
Ahora, cuando ejecute el código anterior, obtendrá el siguiente resultado. Aquí, los valores son compatibles con el tipo, es decir, el valor 100 es compatible con el tipo int y el valor TRUE es compatible con el tipo bool y, por lo tanto, en tiempo de ejecución, estas conversiones de tipos se realizaron correctamente.
:::


- Al igual que el método auxiliar de la clase Convert, si el valor no es compatible con el tipo de destino, también obtendrá un error en tiempo de ejecución. Para una mejor comprensión, eche un vistazo al siguiente ejemplo en el que intentamos almacenar el valor de cadena Hola en la variable entera:


```csharp
using System;
namespace TypeCastingDemo
{
class Program
{
static void Main(string[] args)
{
string str1 = "Hello";
int i = int.Parse(str1);
Console.WriteLine($"Original String value: {str1} and Converted int value: {i}");
Console.ReadKey();
}
}
} 

```


#### TryParse()
- Cuando usamos el método Parse, si la conversión no es posible, en tiempo de ejecución obtendremos una excepción, lo cual no es bueno. Porque si la conversión no es posible, entonces deberíamos mostrar cierta información al usuario y continuar.
- Para hacerlo, las clases de tipos de datos integrados en C# proporcionan el método TryParse.
- Veamos cómo utilizar el método TryParse en C#. Supongamos que queremos convertir una cadena a un tipo entero, podemos usar el método TryParse de la siguiente manera:


```csharp
bool IsConverted = int.TryParse(“100”, out int I1);
```

:::tip Observación
- Aquí, lo que hará el método TryParse es intentar convertir el valor de cadena 100 a un tipo entero. Si la conversión es exitosa, hará dos cosas. Primero, almacenará el valor convertido en la variable I1 y luego devolverá verdadero. Por otro lado, si la conversión falla, no almacenará nada en la variable I1 y devolverá falso.
:::


##### Ejemplo
- En el siguiente ejemplo, la primera conversión es exitosa y, por lo tanto, devolverá verdadero y almacenará el valor convertido 100 en la variable I1. En la segunda conversión, la conversión falló y, por lo tanto, no almacenará nada en la variable I2 y esta vez devolverá falso:

```csharp
using System;
namespace TypeCastingDemo
{
class Program
{
static void Main(string[] args)
{
string str1 = "100";
bool IsConverted1 = int.TryParse(str1, out int I1);
if (IsConverted1)
{
Console.WriteLine($"Original String value: {str1} and Converted int value: {I1}");
}
else
{
Console.WriteLine($"Try Parse Failed to Convert {str1} to integer");
}
string str2 = "Hello";
bool IsConverted2 = int.TryParse(str2, out int I2);
if (IsConverted2)
{
Console.WriteLine($"Original String value: {str2} and Converted int value: {I2}");
}
else
{
Console.WriteLine($"Try Parse Failed to Convert {str2} to integer");
}
Console.ReadKey();
}
}
}

```


:::tip info
- [C# Type Casting](https://www.w3schools.com/cs/cs_type_casting.php)
- [Type Casting in C#](https://dotnettutorials.net/lesson/type-casting-in-csharp/#google_vignette)
- [C# Casting](https://www.csharptutorial.net/csharp-tutorial/csharp-casting/)
- [Casting in C# — Do type conversion the proper way](https://betterprogramming.pub/casting-in-c-b0cdb21e6048)
- [Casting: implicit y explicit en C#](https://thatcsharpguy.com/post/casting-implicit-y-explicit-en-c)
- [C# | Type Casting](https://www.geeksforgeeks.org/c-sharp-type-casting/)
:::

## If/Else
- Use "if" para especificar un bloque de código que se ejecutará, si una condición especificada es verdadera.
- Use "else" para especificar un bloque de código que se ejecutará, si la misma condición es falsa.
- Use "else if" para especificar una nueva condición para probar, si la primera condición es falsa.


#### If
- La declaración if contiene una condición booleana seguida de un bloque de código de una o varias líneas.
- Si la condición booleana se evalúa como verdadera, entonces el bloque de código se ejecutará en tiempo de ejecución; de lo contrario, no.
- En Resumen, la sentencia if es una estructura de control de flujo en C# que permite ejecutar un bloque de código solo si se cumple una condición dada.


```csharp
if (condición)
{
    // bloque de código que se ejecutará cuando la condición se evalúe como verdadera
}

```
:::tip Observación

- En la condición que se evalúa en el bloque if, se puede especificar cualquier expresión que devuelva un valor booleano (true o false). Si la condición se evalúa como true, se ejecutará el bloque de código que está dentro de las llaves {} del if.
- Si la condición se evalúa como false, se saltará el bloque de código del if y se continuará ejecutando el código que sigue después de la sentencia if.
:::

- Aquí hay un ejemplo de código que ilustra el uso de una sentencia if en C#:


```csharp
int number = 42; 
if (number > 0) { 
Console.WriteLine("The number is positive."); 
} 

```

:::tip Observación
- En este ejemplo, se evalúa si el número es mayor que cero. Si la condición se cumple (number > 0 ), se evalúa como true y se escribirá en la consola el mensaje «The number is positive.».
- Si la condición no se cumple, se saltará el bloque de código del if y se continuará ejecutando el código que sigue después de la sentencia if.
:::

##### Mas ejemplos

```csharp
int i = 10, j = 20;

if (i < j)
{
    Console.WriteLine("i is less than j");
}        

if (i > j)
{
    Console.WriteLine("i is greater than j");
}

```

```csharp
static void Main(string[] args)
{
    int i = 10, j = 20;

    if (isGreater(i, j))
    {
        Console.WriteLine("i is less than j");
    }        

    if (isGreater(j, i))
    {
        Console.WriteLine("j is greater than i");
    }
}

static bool isGreater(int i, int j)
{
    return i > j;                    
}

```

#### If - Else
- La sentencia if-else es una estructura de control de flujo en C# que permite ejecutar un bloque de código si se cumple una condición y otro bloque de código si no se cumple la condición. La sintaxis de una sentencia if-else en C# es la siguiente:


```csharp
if (condición) { 
// Código a ejecutar si se cumple la condición 
} else 
{ 
// Código a ejecutar si no se cumple la condición 
}

```

:::tip Observación
- En la condición que se evalúa en el bloque if, se puede especificar cualquier expresión que devuelva un valor booleano (true o false). Si la condición se evalúa como true, se ejecutará el bloque de código que está dentro de las llaves {} del if.
- Si la condición se evalúa como false, se ejecutará el bloque de código que está dentro de las llaves {} del else.



:::

- Aquí hay un ejemplo de código que ilustra el uso de una sentencia if-else en C#:

```csharp
int number = 42; 
if (number > 0) {
 Console.WriteLine("The number is positive."); 
} else { 
Console.WriteLine("The number is not positive.");
 }

```

:::tip Observación
- En este ejemplo, se evalúa si el número es mayor que cero. Si la condición se cumple (number > 0 ), se evalúa como true y se escribirá en la consola el mensaje «The number is positive.».
- Si la condición no se cumple (number > 0 ), se evalúa como false y se escribirá en la consola el mensaje «The number is not positive.».


:::


#### If anidados
- La sentencia if anidada es una estructura de control de flujo en C# que permite evaluar varias condiciones y ejecutar diferentes bloques de código en función de ellas. La sintaxis de una sentencia if anidada en C# es la siguiente:


```csharp
if (condición1) {
 // Código a ejecutar si se cumple la condición1 
if (condición2) { 
// Código a ejecutar si se cumple la condición2 
} 
else {
 // Código a ejecutar si no se cumple la condición2 
} 
} else {
 // Código a ejecutar si no se cumple la condición1 
} 

```

:::tip Observación
- En el ejemplo anterior, primero se evalúa la condición1. Si se cumple (se evalúa como true), se ejecutará el bloque de código que está dentro de las llaves {} del primer if.
- Si la condición1 no se cumple (se evalúa como false), se ejecutará el bloque de código que está dentro de las llaves {} del else. 
- Si la condición1 se cumple, se evaluará la condición2.
- Si la condición2 se cumple (se evalúa como true), se ejecutará el bloque de código que está dentro de las llaves {} del segundo if.
- Si la condición2 no se cumple (se evalúa como false), se ejecutará el bloque de código que está dentro de las llaves {} del segundo else.


:::

- Aquí tienes un ejemplo de código que ilustra cómo usar la sentencia de if anidados en C#:


```csharp
using System;
namespace ConsoleApp {
  class Program {
    static void Main(string[] args) {
      int number = 10;
      if (number > 0) {
        Console.WriteLine("El número es positivo.");
        if (number % 2 == 0) {
          Console.WriteLine("El número es par.");
        }
        Else {
          Console.WriteLine("El número es impar.");
        }
      } else {
        Console.WriteLine("El número es negativo.");
      }
      Console.ReadLine();
    }
  }
}

```

:::tip Observación
- En este ejemplo, se define una variable number con el valor 10. Luego, se comprueba si number es mayor que cero. Si se cumple esta condición, se imprime en la consola «El número es positivo».
- A continuación, se comprueba si number es par. Si es par, se imprime en la consola «El número es par». Si no es par, se imprime en la consola «El número es impar».
- Si number no es mayor que cero, se imprime en la consola «El número es negativo».


:::


#### Else if
- La estructura else if en C# se utiliza para comprobar múltiples condiciones.
- Se pueden utilizar varias declaraciones “else if” después de una declaración “if”.
- Sólo se ejecutará cuando la condición “if” se evalúe como falsa y la condición de “else if” se evalué como verdadera. Por lo tanto, se puede ejecutar un “if” o una de las declaraciones “else if”, pero no ambas.
- La sintaxis de la estructura else if es la siguiente:


```csharp
if (condición 1) {
  // Código a ejecutar si se cumple la condición 1
}
else if (condición 2) {
  // Código a ejecutar si se cumple la condición 2 y no se cumple la condición 1
}
else if (condición 3) {
  // Código a ejecutar si se cumple la condición 3 y no se cumple ninguna de las condiciones anteriores
}...
else {
  // Código a ejecutar si ninguna de las condiciones anteriores se cumple
}

```

:::tip Observación
- En cada bloque if o else if, se comprueba una condición. Si la condición es verdadera, se ejecuta el código correspondiente. Si ninguna de las condiciones es verdadera, se ejecuta el código en el bloque else.

:::

- Aquí tienes un ejemplo de código que ilustra cómo usar la estructura else if en C#:

```csharp
using System;

namespace ConsoleApp {
  class Program {
    static void Main(string[] args) {
      int number = 10;
      if (number > 0) {
        Console.WriteLine("El número es positivo.");
      }
      else if (number < 0) {
        Console.WriteLine("El número es negativo.");
      }
      else {
        Console.WriteLine("El número es cero.");
      }
      Console.ReadLine();
    }
  }
}

```

:::tip Observación
- En este ejemplo, se define una variable number con el valor 10. Luego, se comprueba si number es mayor que cero. Si se cumple esta condición, se imprime en la consola «El número es positivo».
- Si no se cumple esta condición, se comprueba si number es menor que cero. Si se cumple esta condición, se imprime en la consola «El número es negativo». Si ninguna de las dos condiciones se cumple, se imprime en la consola «El número es cero».


:::


##### Ejemplo

```csharp
int i = 10, j = 20;

if (i == j)
{
    Console.WriteLine("i is equal to j");
}
else if (i > j)
{
    Console.WriteLine("i is greater than j");
}
else if (i < j)
{
    Console.WriteLine("i is less than j");
}

```

:::tip
- Puedes usar la cantidad que quieras de declaraciones “else if”.

:::

#### Else
- La declaración else solo puede venir después de la declaración “if” o “else if” y solo se puede usar una vez en las declaraciones “if-else”. 
- La declaración else no puede contener ninguna condición y se ejecutará cuando todas las condiciones anteriores “if” o  “else if” sean  falsas.
- Ejemplo:


```csharp
int i = 20, j = 20;

if (i > j)
{
    Console.WriteLine("i is greater than j");
}
else if (i < j)
{
    Console.WriteLine("i is less than j");
}
else
{
    Console.WriteLine("i is equal to j");
}

```

#### Declaraciones If anidadas
- Se pueden anidar todas las declaraciones anteriores.
- Sintaxis:

```csharp
if(condición1) 
{ 
   if(condición2) 
    { 
        // bloque de código que se ejecutará cuando 
        // condición1 y condición2 se evalúan como verdaderas 
    } 
    else if(condición3) 
    { 
        if(condición4) 
        { 
            // bloque de código que se ejecutará cuando 
            // sólo condición1 , condición3 y condición4 se evalúan como verdaderas 
        } 
        else if(condición5) 
        { 
            // bloque de código que se ejecutará cuando 
            // solo condición1, condición3 y condición5 se evalúan como verdaderas 
        } 
        else 
        {
            // bloque de código que se ejecutará cuando 
            // condición1 y condición3 se evalúen como verdadero 
            // condición4 y condición5 se evalúen como falso 
        } 
    } 
}

```
- Ejemplo:


```csharp
int i = 10, j = 20;

if (i != j)
{
    if (i < j)
    {
        Console.WriteLine("i is less than j");
    }
    else if (i > j)
    {
       Console.WriteLine("i is greater than j");
    }
}
Else {
    Console.WriteLine("i is equal to j");
}

```


:::tip info
- [C# - if, else if, else Statements](https://www.tutorialsteacher.com/csharp/csharp-if-else#google_vignette)
- [Instrucciones de selección if, if-else y switch](https://learn.microsoft.com/es-es/dotnet/csharp/language-reference/statements/selection-statements)
- [Else / Else if](https://www.aulafacil.com/cursos/programacion/en-c/else-else-if-l17108)
- [C# if, if...else, if...else if and Nested if Statement](https://www.programiz.com/csharp-programming/if-else-statement)
- [C# If Else Statement](https://www.c-sharpcorner.com/article/c-sharp-if-else-statement/)
- [C# if-else](https://www.javatpoint.com/c-sharp-if-else)
- [If-else en C#](https://oregoom.com/c-sharp/if-else/)
:::

## Crear una excepción personalizada
- Para crear una excepción personalizada, únicamente debemos crear una clase que implemente la clase Exception e indicar un constructor, como vemos en el ejemplo:


```csharp
public class FacturaDiferenteClienteException : Exception
{
    public FacturaDiferenteClienteException(string message) : base(message)
    {
        Console.WriteLine(message);
        Util.EnviarEmailAlerta("Intento de hackeo", message);
    }
}

```

:::tip Observación
- Como te puedes dar cuenta, estamos llamando al constructor de la clase base pasándole un mensaje (hay otro constructor que también recibe una instancia de Exception que podemos emplear para adjuntar cualquier otra excepción que hayamos atrapado para mayor información).
- Para simular un sistema he creado una clase Util que contiene un método EnviarEmailAlerta, ya que este ejemplo en concreto es o bien un bug muy gordo o un intento de hackeo.
:::

#### Utilizar una excepción personalizada
- Para utilizar nuestra excepción que acabamos de crear, debemos instanciarla manualmente, para ello, y para agilizar el ejemplo he creado una clase llamada Repository  que tiene un método de instancia al que le pasamos dos ids, y simplemente devuelve true o false.
- Vamos al lio, hacemos la llamada, y si nos devuelve false, es que, en este caso, el cliente y el dueño de la factura no coinciden, con lo que lanzaremos nuestra excepción, como vemos en el siguiente código:


```csharp
if(!repo.ClienteYFacturaDuenoSonElMismo(clienteId, facturaId))
{
    throw new FacturaDiferenteClienteException($"El cliente {clienteId} esta intentando acceder a la factura {facturaId} que no le corresponde.");
}

```

:::tip info
- [Crear excepciones en C#](https://www.netmentor.es/entrada/Crear-excepciones-csharp)
- [EXCEPCIONES PERSONALIZADAS O DEFINIDAS POR EL USUARIO C#](https://gherbust.wordpress.com/2016/07/12/excepciones-personalizadas-o-definidas-por-el-usuario-c/)
- [Excepciones en C#](https://thatcsharpguy.github.io/post/excepciones-c-sharp/)
- [Creación de excepciones definidas por el usuario con mensajes de excepción localizados](https://learn.microsoft.com/es-es/dotnet/standard/exceptions/how-to-create-localized-exception-messages)
:::

## String interpolation

-  Es un método para concatenar, formatear y manipular cadenas (Strings).
-   Esta característica se introdujo en C# 6. Al utilizar la interpolación de cadenas, podemos usar objetos, variables y expresiones como parte de un String.
-   La sintaxis de la interpolación de cadenas comienza con un símbolo '$' y las expresiones/objetos/variables se definen entre  llaves "{}".
- En este ejemplo, utilizamos el valor de la variable autor en el String:


```csharp
string author = "Mahesh Chand";
string hello = $"Hello {author} !";
Console.WriteLine(hello);

```

- Otro ejemplo:

```csharp
double price = 19.99;
int quantity = 3;
string total = $ "Total cost for {quantity} items is {price * quantity}.";
Console.WriteLine(total); // Outputs: Total cost for 3 items is 59.97.

```

#### Sintaxis completa
- Pero podemos hacer más cosas con el String interpolation, podemos añadirle caracteres y/o formatear el valor de la variable o expresión.
- La sintaxis es asi:


```csharp
{<expresión/variable >[,<alineación >][:<formatString >]}
```
- Alineación: es  una expresión constante cuyo valor define el número mínimo de caracteres en la representación de cadena(String) de la expresión/variable. Si es positivo, la representación de la cadena está alineada a la derecha (genera espacio en blanco para que el texto este a la derecha); si es negativo, está alineado a la izquierda (genera espacio en blanco para que el texto este a la izquierda).
- FormatString: un String de formato compatible con el tipo de dato de la expresión/variable.

#### Ejemplo con la opción alineación
- Las opciones de alineación le permiten alinear su cadena de salida dentro de un ancho específico. 
- La alineación siempre comienza con una coma “,” seguido de un número que represente el ancho del campo. He aquí un ejemplo:


```csharp
string name = "John";
int age = 30;
string message = $"{name,-10} is {age} years old."; // Output: "John       is 030 years old."

```

:::tip Observación
En este ejemplo, hemos alineado la variable nombre a la izquierda con un ancho de 10 caracteres.
:::

- El siguiente ejemplo de código, creamos una cadena con espaciado y agrega 20 caracteres después de la variable autor:

```csharp
Console.WriteLine($"{author}{book, 20}");
```
:::tip Observación
- El espaciado se agrega antes del valor de book ya que esta alineado a la derecha el texto (valor positivo).
:::


#### Ejemplo con formatString
- Los especificadores de formato(formatString) son “caracteres especiales” que le permiten formatear el valor de la expresión/variable con reglas específicas. 
- Estos caracteres se colocan después de la variable.
- Los caracteres siempre comienzan con dos puntos “:”.
- En este ejemplo, hemos utilizado el especificador de formato D para formatear la fecha como un patrón de fecha larga:

```csharp
DateTime date = DateTime.Now;
string formattedDate = $"{date:D}"; // Output: Tuesday, August 31, 2021

```
- Formateamos el numero pi para que solo tenga 3 decimales:

```csharp
double pi = 3.141592653589793;
string formatted = $ "Value of pi to 3 decimal places: {pi:0.###}";
Console.WriteLine(formatted); // Outputs: Value of pi to 3 decimal places: 3.142

```

- Ejemplo con los dos:

```csharp
isTrue?  $"{data,9: N2}”: $"{data, -9: N2}";
```


:::tip info
- [CSharp String Interpolation And Its Usage](https://marketsplash.com/tutorials/c-sharp/csharp-string-interpolation/)
- [C# String Interpolation](https://www.w3schools.com/cs/cs_strings_interpol.php)
- [String interpolation using $](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/tokens/interpolated)
- [String Interpolation In C#](https://www.c-sharpcorner.com/article/understanding-string-interpolation-in-c-sharp/)
- [C# String Interpolation](https://code-maze.com/csharp-string-interpolation/)
- [Understanding the Proper Way to Implement the String Interpolation Feature in .NET C#](https://reintech.io/blog/understanding-proper-way-to-implement-string-interpolation-feature-in-net-csharp)
- [C# Tip: Format Interpolated Strings](https://www.code4it.dev/csharptips/format-interpolated-strings/)
- [C# String Interpolation – Syntax, Examples, and Performance](https://www.shekhali.com/csharp-string-interpolation-with-examples/)
:::

## Funciones asíncronas
#### Termino asíncrono
- El término asíncrono se refiere al concepto de que más de una cosa ocurre al mismo tiempo, o múltiples cosas relacionadas ocurren sin esperar a que la previa se haya completado.


#### ¿Qué es la progamación asíncrona?
- Como su nombre indica nos permite crear código que se va a ejecutar de una forma paralela.
- Un fallo muy común cuando empezamos a programar es pensar que Task significa multihilo, o que cada Task será un hilo nuevo (Threads), cuando no tiene porqué ser siempre así. Cuando invocamos Task estamos invocando la librería Task parallel la cual se va a encargar de toda la administración de los hilos por nosotros. 
#### Introducción a Async/Await
- Una de las cosas que más te pueden frustrar cuando empiezas en el mundo de la programación es ver que, cuando a base de mucho esfuerzo has conseguido que tu programa funcione, el resultado es que funciona... pero se bloquea la interfaz, no escala bien, etc.
- Has oído o leído algo sobre "hilos de ejecución" y te decides a probarlos, pero ves que tienes que manejarlos, que sincronizarlos, preguntarles qué tal están de vez en cuando... Un trabajo tedioso y que muchas veces no es necesario porque existe una herramienta para ello.

:::tip hilos de ejecución
- Un hilo de ejecución, en los sistemas operativos, representan una secuencia simple de instrucciones ejecutada en paralelo con otras secuencias. 
- Los hilos permiten dividir un programa en dos o más tareas que corren simultáneamente, por medio de la multiprogramación.
:::

-  Desde hace ya mucho tiempo (desde la versión 5.0 de C#) tenemos a nuestra disposición 2 palabras clave que nos permiten manejar estas situaciones multi-hilo con una lógica y una sintaxis verdaderamente asíncrona.
-  Utilizar async / await nos permite escribir de una forma muy fácil y sencilla código que se ejecuta de forma paralela. 


:::tip multi-hilo
- La técnica conocida como multihilo te permite procesar varias tareas de forma simultánea.

:::
:::tip
- En realidad el asincronismo estaba disponible antes con los métodos .Begin() y .End() que implementaban algunas clases, pero era difícil de seguir y de mantener, o también mediante el uso de la clase Task y su método ContinueWith().
:::
- Estas dos palabras reservadas, en combinación con la clase genérica Task, nos permiten disponer de una sintaxis mucho más fluida en nuestro código. 
- Tan solo es necesario que añadamos async en la firma de los métodos asíncronos, usar await en una expresión (adentro del método async) que puede demorar en ejecutarse y devolver un Task (generico o no) para especificar que retorna una "tarea" que se esta ejecutando en paralelo con las otras secuencias de código.



```csharp
//Asíncrono C# >= 5
public async Task<int> ExecuteCommandAsync(string command)
{
    using (SqlCommand sqlCommand = new SqlCommand(command, sqlConnection))
    {
        return await sqlCommand.ExecuteNonQueryAsync();
    }
}


//Síncrono
public int ExecuteCommand(string command)
{
    using (SqlCommand sqlCommand = new SqlCommand(command, sqlConnection))
    {
        return sqlCommand.ExecuteNonQuery();
    }
}

```

:::tip
- Cuando queremos usar un tipo de dato que devuelve una tarea(Task) , debemos esperar a que se termine de procesar la tarea (acordate que se esta ejecutando en paralelo) para poder usar el tipo, para esto usamos await.
- Si usamos un método async (tienen el prefijo Async) , generalmente usamos await.
:::

#### ¿De que sirve?
- Puedes (y debes) usarlo siempre que consumas un recurso externo a tu código (un fichero, una base de datos, un servicio online...). En general cualquier operación que pueda llegar a tardar por algún motivo ajeno a tu código y que por lo tanto pueda bloquear tu aplicación.
- También puedes usarlo siempre que quieras ejecutar algo en segundo plano dejando disponibles los recursos mientras lo haces.
- Con esto, vas a poder conseguir que no se bloquee una interfaz, que tu aplicación ASP.NET o ASP.NET Core sean capaces de responder a más peticiones (y por tanto escalar mejor), o simplemente lograrás optimizar tus recursos.
- Debemos utilizar programación asíncrona siempre que podamos, así de claro, los beneficios que nos trae son muy buenos, sobre todo en rendimiento y respuesta.
- Podemos ver un ejemplo muy claro, si llamamos, desde nuestro programa a 3 apis, y lo hacemos de una en una forma síncrona, el gráfico de la llamada es similar al siguiente: 

![Ejemplo](https://www.netmentor.es/Imagen/1a055ee9-68cc-4c9f-b6d7-d5534be4c166.jpg)

- Como vemos las llamadas a los 3 servicios externos llevan un total de 15.5 segundos.
- Mientras que si hacemos las llamadas de forma asíncrona tardamos 6 segundos.

![Ejempo](https://www.netmentor.es/Imagen/abbfd82f-b332-41e3-b042-e052fac4a52e.jpg)

- Esta lógica, la podemos aplicar para todos los servicios, por ejemplo una llamada a la base de datos, si tienes que consultar diferentes tablas, puedes hacer todas las llamadas de forma asíncrona. 

#### Tipo de retorno
- Una cosa a tener en cuenta es que no siempre se puede utilizar la palabra clave async (y por tanto tampoco await). Los métodos que la utilicen deben tener un tipo de retorno muy concreto.
-  Los tipos de retorno que permite usar async son:
   - void
   - Task
   - Task&lt;T>
- Esto tiene lógica porque lo que devuelves realmente es una tarea (o nada en el caso de void, que se añadió para poder usarlo en los manejadores de eventos).
- También conviene tener en cuenta que existe una convención de nombres de métodos a la hora de crear métodos asíncronos. Éstos tienen que terminar su nombre con el sufijo "Async" para poder diferenciarlos fácilmente (es decir, no es obligatorio, pero sí muy recomendable).
- Si queremos usar el tipo de dato que se obtiene de un metodo con el prefijo Async , debemos usamos await.

#### Ejemplo
- Disponemos del siguiente código que hemos decidido convertir en asíncrono: 

```csharp
public Articulo GetArticulo(int id)
{
    using(MySqlConnection conexion = new MySqlConnection(conexionString))
    {
        //Codigo para el select
        conexion.Open();
        MySqlCommand comando = new MySqlCommand();
        comando.CommandText = "select * from articulo where id = ?articuloId;";
        comando.Parameters.Add("?articuloId", MySqlDbType.Int32).Value = id;
        comando.Connection = conexion;

        Articulo articulo = new Articulo();
        using (var reader = comando.ExecuteReader())
        {
            while (reader.Read())
            {
                articulo.Id = Convert.ToInt32(reader["Id"]);
                articulo.Titulo = reader["Titulo"].ToString();
                articulo.Contenido = reader["Contenido"].ToString();
            }

            return articulo;
        }
    }
}

```
- Como podemos observar es el código de consultar en la base de datos. La forma de convertir este método a asíncrono es muy fácil, para ello únicamente debemos indicar que en vez de devolver una clase Articulo nos devuelve Task&lt;T>  donde como vimos en genéricos T es un parámetro de tipo genérico y por lo tanto T es Articulo:


```csharp
public Task<Articulo> GetArticulo(int id){...}
```

- Como vemos nos indicará varios errores, el primero es que debemos utilizar la librería System.Threading.Tasks y el segundo es que no estamos utilizando las tareas(Task) dentro de nuestro método.
- Si hemos indicado el método con Task&lt;T> es porque queremos que corra de una forma asíncrona. En este escenario podemos llamar a la base de datos de forma asíncrona, vamos a ver cómo.
- Lo primero es abrir la conexión, lo cual lo podemos hacer de forma asíncrona, actualmente lo hacemos llamando a conexion.Open();. Una forma muy común cuando se escriben librerías es que si un método es asíncrono, le ponemos async al final del nombre, por lo tanto, podemos abrir la conexión a la base de datos con el metodo conexion.OpenAsync().
- El método  conexion.OpenAsync() NO abre la conexión como tal, para abrir la conexión debemos esperar a que se abra. Para ello utilizaremos la palabra clave await. Por lo que luce de la siguiente manera:

```csharp
await conexion.OpenAsync();
```
- Cuando utilizamos await, debemos utilizar la palabra clave async en la cabecera del método, por lo que el método luce de la siguiente manera:

```csharp
public async Task<Articulo> GetArticulo(int id){...}
```
- Y de esta forma ya tenemos nuestro método asíncrono:

```csharp
public async Task<Articulo> GetArticuloAsync(int id)
{
    using(MySqlConnection conexion = new MySqlConnection(conexionString))
    {
        //Codigo para el select
        await conexion.OpenAsync();
        MySqlCommand comando = new MySqlCommand();
        comando.CommandText = "select * from articulo where id = ?articuloId;";
        comando.Parameters.Add("?articuloId", MySqlDbType.Int32).Value = id;
        comando.Connection = conexion;

        Articulo articulo = new Articulo();
        using (var reader = await comando.ExecuteReaderAsync())
        {
            while (reader.Read())
            {
                articulo.Id = Convert.ToInt32(reader["Id"]);
                articulo.Titulo = reader["Titulo"].ToString();
                articulo.Contenido = reader["Contenido"].ToString();
            }

            return articulo;
        }
    }
}

```
:::tip Observación
- Todo metodo asíncrono debe tener el prefijo Async en el nombre.

:::
- Pero realizar el método de forma asíncrona no es suficiente, cuando utilizamos Task&lt;> en una parte del proceso debemos ejecutar todo el proceso de forma asíncrona, por lo que todos los métodos del proceso deberán contener Task&lt;T> (ser asíncrono).
- Entonces todos los metodos que  utilicen metodos asíncrono deben ser asíncrono.
- Como por ejemplo el método que llama a nuestro método que acabamos de modificar, lo convertiremos de: 

```csharp
public Articulo ConsultarArticulo(int id)
{
    return _articuloRepository.GetArticuloAsync(id);
}

```

- Al siguiente:

```csharp
public async Task<Articulo> ConsultarArticulo(int id)
{
    return await _articuloRepository.GetArticuloAsync(id);
}

```

:::tip Observación
- Si usamos un método async (tienen el prefijo Async) , generalmente usamos await.
:::

- Y  como este, todos los metodos que utilicen el metodo GetArticuloAsync.


#### Await
- Como acabo de comentar para recibir el objeto que deseamos de un método que devuelve Task&lt;T> debemos esperar y para ello indicamos la palabra clave await.
- Entonces con el await , esperamos a que se ejecute una expresión  y una vez que se termino de ejecutar , seguimos con el código.
- Debemos ser cuidadosos, ya que podemos convertir nuestro código asíncrono en sincrono de una manera muy sencilla. Por ejemplo el siguiente código:


```csharp
Articulo articulo1 = await _articuloRepository.GetArticulo(1);
Articulo articulo2 = await _articuloRepository.GetArticulo(2);
Articulo articulo3 = await _articuloRepository.GetArticulo(3);

```

:::tip Observación
- Ejecuta las instrucciones una por una y en orden, espera a que la primera con el id 1 termine, para empezar la segunda y así sucesivamente.


:::

- Para ejecutar dichas acciones de forma asíncrona debemos llamar al método que devuelve Task, y una vez tenemos esta Task en una variable, hacer el await:


```csharp
Task<Articulo> taskArticulo1 =  _articuloRepository.GetArticulo(1);
Task<Articulo> taskArticulo2 =  _articuloRepository.GetArticulo(2);
Task<Articulo> taskArticulo3 =  _articuloRepository.GetArticulo(3);

Articulo articulo3 = await taskArticulo3;
Articulo articulo2 = await taskArticulo2;
Articulo articulo1 = await taskArticulo1;

```

#### Método alternativo
- Alternativamente al caso que acabamos de ver cuando tenemos múltiples tareas para ejecutar. C# nos provee un método llamado Task.WhenAll(IEnumerable&lt;Task>) el cual como observamos nos permite indicar una lista de Task para ejecutar:


```csharp
Task<Articulo> taskArticulo1 = _articuloRepository.GetArticulo(1);
Task<Articulo> taskArticulo2 = _articuloRepository.GetArticulo(2);
Task<Autor> taskAutor1 = _autorRepository.GetAutor(1);

_ = Task.WhenAll(taskArticulo1, taskArticulo2, taskAutor1);

Articulo articulo1 = taskArticulo1.Result;
Articulo articulo2 = taskArticulo2.Result;
Autor autor1 = taskAutor1.Result;

```
:::tip Observación
- Como podemos observar, podemos introducir cualquier tipo de Task dentro de nuestra lista, y posteriormente accedemos al resultado con la propiedad. Result;
- Si intentamos acceder a la propiedad Result antes de esperar con await, no podremos, ya que la tarea no estará ejecutada. 



:::

- Debemos priorizar la utilización de Task.WhenAll sobre await  varias veces y esto es por varios motivos:
  -	El código luce más limpio.
  -	Propaga los errores correctamente, si tenemos, 10 tareas con await, y uno de los primeros falla puedes perder el error. 
  -	Utilizar WhenAll espera hasta que TODAS las tareas terminan, incluso si hay errores. es posible que, programando tu, tengas un try{}cath() y si uno falla, saltes una excepción, en ese caso parte de tu código querrá ir a la excepción y otra parte esperar, y puede dar errores y cuelgues. 



:::tip info
- [async y await en C#: cómo manejar asincronismo en .Net de manera fácil](https://www.campusmvp.es/recursos/post/async-y-await-en-c-como-manejar-asincronismo-en-net-de-manera-facil.aspx)
- [Programación asíncrona en C#](https://www.netmentor.es/entrada/programacion-asincrona)
- [Programación asincrónica](https://learn.microsoft.com/es-es/dotnet/csharp/asynchronous-programming/async-scenarios)
:::


## Descarte independiente
- Un descarte es una variable de solo escritura con el nombre “_”. Es posible asignar todos los valores que queramos descartar a esta variable. 
- No puede usarse en el código (excepto en la instrucción de asignación).
- Los descartes se admiten en los escenarios siguientes:
  -	Al deconstruir tuplas o tipos definidos por el usuario.
  -	Al realizar llamadas a métodos mediante parámetros out.
  -	En una operación de coincidencia de patrones con las instrucciones is y switch.
  -	Como un identificador independiente cuando quiera identificar explícitamente el valor de una asignación como descarte.


- Por ejemplo, la siguiente llamada al método devuelve una tupla de tres donde el primer y el segundo valor se descartan y area es una variable declarada previamente para establecerse en el tercer componente correspondiente devuelto por GetCityInformation: 

```csharp
(_, _, area) = city.GetCityInformation(cityName);
```

- En el ejemplo siguiente se llama al método DateTime.TryParse(String, out DateTime) para determinar si la representación de cadena(string) de una fecha es válida en la referencia cultural actual. Dado que al ejemplo solo le interesa validar la cadena de fecha, y no analizarla para extraer la fecha, el argumento out para el método es un descarte: 


```csharp
string[] dateStrings = {"05/01/2018 14:57:32.8", "2018-05-01 14:57:32.8",
                      "2018-05-01T14:57:32.8375298-04:00", "5/01/2018",
                      "5/01/2018 14:57:32.80 -07:00",
                      "1 May 2018 2:57:32.8 PM", "16-05-2018 1:00:32 PM",
                      "Fri, 15 May 2018 20:10:57 GMT" };
foreach (string dateString in dateStrings)
{
    if (DateTime.TryParse(dateString, out _))
        Console.WriteLine($"'{dateString}': valid");
    else
        Console.WriteLine($"'{dateString}': invalid");
}
// The example displays output like the following:
//       '05/01/2018 14:57:32.8': valid
//       '2018-05-01 14:57:32.8': valid
//       '2018-05-01T14:57:32.8375298-04:00': valid
//       '5/01/2018': valid
//       '5/01/2018 14:57:32.80 -07:00': valid
//       '1 May 2018 2:57:32.8 PM': valid
//       '16-05-2018 1:00:32 PM': invalid
//       'Fri, 15 May 2018 20:10:57 GMT': invalid

```

- Puede usar un descarte independiente para indicar cualquier variable que decida omitir. Un uso típico es usar una asignación para asegurarse de que un argumento no sea NULL:


```csharp
public static void Method(string arg)
{
    _ = arg ?? throw new ArgumentNullException(paramName: nameof(arg), message: "arg can't be null");

    // Do work with arg.
}

```


:::tip info
- [Versiones C# 7: todas las novedades que ha aportado cada una](https://imaginaformacion.com/tutoriales/c-sharp-7-novedades)
- [Descartes: aspectos básicos de C#](https://learn.microsoft.com/es-es/dotnet/csharp/fundamentals/functional/discards)
:::

## Operadores "??" , "?." y "?"

#### Operador ??

- El operador en cuestión, expresado cómo “?? (dos cierres de interrogación)”, permite devolver un valor si no es nulo, o devolver otro valor alternativo ante la nulidad del primero. En otras palabras, un código como:



```csharp
if (s !=null)
    return s;
else {
    return "por defecto";
}

```
- Quedaría, utilizando el nuevo operador, como:


```csharp
return s ?? "por defecto";
```


:::tip info
- [El operador ?? en C# (Null coalescing operator)](https://desarrolloweb.com/articulos/operador-null-coalescing.html)

:::

#### Condicional ?.

- En el desarrollo de software, una buena práctica antes de invocar a los miembros de un objeto es comprobar si el mismo fue instanciado correctamente. 
- El Operador Condicional ?. es una forma abreviada de comprobar si el valor de un objeto es null, antes de tener acceso a sus miembros y hacer uso de ellos. La sintaxis es la siguiente:

```csharp
Objeto?.Miembro
```
- Que es equivalente a:


```csharp
if (Objeto != null) {
   Objeto.Miembro
}

```

- En el siguiente ejemplo tenemos una clase llamada Persona, con una sola propiedad: Nombre. El método MostrarNombre muestra en pantalla el nombre de la persona:


```csharp
static void MostrarNombre(Persona persona)
{
    if (persona != null)
       Console.WriteLine(persona.Nombre);
}

```
Con el uso del operador condicional ?. el resultado es el mismo:

```csharp
static void MostrarNombre(Persona persona)
{
    Console.WriteLine(persona?.Nombre);
}

```

- Podemos también usar múltiples operadores condicionales de forma combinada. El siguiente código es válido:

```csharp
static void MostrarCiudadDireccion(Persona persona)
{
    Console.WriteLine(persona?.Direccion?.Ciudad);
}

```

:::tip Observación
- En el caso de que persona sea null, el operador ?. no permite el acceso a Direccion ni Ciudad.
:::

#### Es diferente a usar "?" en un tipo de dato
- El carácter “?” se usa en tipos de datos de para indicar que el valor es nulleable, ósea que puede ser un valor valido o puede ser null.
- Básicamente se utiliza el carácter “?” para aceptar el valor null en tipos de datos integrados.
- En la práctica son instancias de la estructura System.Nullable&lt;T> por lo tanto cuenta con algunos métodos.
- Ejemplo:

```csharp
int? num = null;

// Tiene valor num?
if (num.HasValue)
{
    System.Console.WriteLine("num = " + num.Value);
}
else
{
    System.Console.WriteLine("num = Null");
}

```

:::tip info
- [Operador Condicional NULL ?. en C#](https://joffremoncayo.com/blog/operador-condicional-null-en-csharp/)
- [Tipos de valor que admiten valores NULL (referencia de C#)](https://learn.microsoft.com/es-es/dotnet/csharp/language-reference/builtin-types/nullable-value-types)
:::

## Out
- Se puede llamar palabra clave out o parámetro out
- out es una palabra clave en C# que se utiliza para pasar parámetros a métodos como tipo de referencia. Generalmente se usa cuando un método devuelve múltiples valores.
- Cuando un parámetro se pasa con la palabra clave/parámetro Out en el método, ese método funciona con el mismo valor de variable que se pasa en la llamada al método. Si el valor de la variable cambia, el valor del parámetro del método también cambia. Si el método modifica el valor, el valor de la variable que le pasamos como parámetro out cambia.
- 'out' es una palabra clave en C#, que se utiliza para pasar argumentos a un método como tipo de referencia. Las variables pasadas a un método como parámetros externos no necesitan declararse ni inicializarse antes de pasarse a la llamada al método. Se requiere que el método llamado asigne valores a las variables de los parámetros antes de que el control abandone el método llamado y antes de que el método llamado devuelva cualquier valor al método que llama.
-  Es posible pasar múltiples parámetros a un método y el método devuelve múltiples valores.

#### Puntos importantes
-	Es similar a la palabra clave ref. Pero la principal diferencia entre la palabra clave ref y out es que ref necesita que la variable se inicialice antes de pasar al método. Pero nuestro parámetro out no requiere que las variables se inicialicen antes de pasar al método. Pero antes de que devuelva un valor el método que llama, la variable debe inicializarse en el método llamado.
-	También es similar a la palabra clave in, pero la palabra clave in no permite que el método que llamó cambie el valor del argumento, pero ref lo permite.
-	Para usar la palabra clave out como parámetro, tanto la definición del método como el método de llamada deben usar la palabra clave out explícitamente.
-	No se permite el uso de parámetros out en métodos asincrónicos.
-	No se permite el uso de parámetros out en métodos iteradores.
-	Puede haber más de un parámetro out en un método.
-	En el momento de la llamada al método, el parámetro out se puede declarar en línea. Pero solo se puede acceder a los parámetros out en línea en el mismo bloque de código donde se llama.
-	La sobrecarga de métodos también se puede realizar utilizando estos parámetros.
-	Las propiedades no se pueden pasar como parámetros out ya que no son variables.
-	Hasta C# 6.0, un usuario primero declara la variable y luego solo puede pasarla como argumento out. Pero a partir de C# 7.0, a excepción de una declaración de variable separada, el usuario también puede declarar la variable out en la lista de argumentos de la llamada al método.

#### Sintaxis
- Al llamar al método usando el parámetro out, la sintaxis será la siguiente:


```csharp
nombre_método(out  tipo_dato nombre_variable);
```
:::tip Observación
- Aquí, nombre_método es el nombre del método, 'out' es la palabra clave utilizada para expresar que la variable pasada al método es un parámetro out, tipo_dato puede ser cualquier tipo de datos de la variable y nombre_variable es el nombre de la variable.

:::

- La sintaxis del método que se llamará es la siguiente:


```csharp
especificador_acceso  return_type Method_name(out data_type variable_name);
```
:::tip Observación
- Aquí, especificador_acceso puede ser cualquier especificador de acceso entre los cinco especificadores de acceso admitidos por C#, como público o privado. Luego, return_type es el tipo de datos que devuelve este método seguido del nombre del método y la lista de parámetros "out".

:::

#### Resumen
- La diferencia entre las palabras clave 'out' y 'in' es que los valores de los parámetros 'out' se pueden modificar dentro del método llamado, mientras que los valores de los parámetros 'in' no se pueden modificar dentro del método llamado.
- Un método puede tener más de un parámetro "out", como por ejemplo: Display(out x, out y);.
- Para trabajar con parámetros 'out', el usuario debe usar explícitamente la palabra clave 'out' en la definición del método y también en el método de llamada. Al mismo tiempo, no es necesario que los nombres dados a los parámetros 'out' en la definición y llamada del método sean los mismos.
- Los parámetros 'out' se pasan por referencia a un método, por lo tanto, no crean una nueva ubicación de almacenamiento en la memoria y utilizan la misma ubicación de almacenamiento ocupada por las variables en la invocación del método. Como el método que utiliza los parámetros 'out' puede devolver múltiples valores, ayuda al usuario a obtener múltiples valores procesados del método llamado. Pero antes de que el método devuelva cualquier valor al método que lo llama, a los parámetros 'out' se les deben asignar alguno valor en el método.
- No podemos trabajar con parámetros 'out' en todos los tipos de métodos, como no podemos usar parámetros 'out' en métodos asincrónicos que definimos usando el modificador 'async' y tampoco podemos usar parámetros 'out' en métodos 'iteradores'. Como las propiedades no son variables, no podemos pasarlas como parámetros 'out’  a un método.
- El parámetro 'out' se puede definir utilizando un tipo genérico.
- Junto con esto, el parámetro 'out' se utiliza en los métodos TryParse() para diferentes tipos de datos en C#. El método TryParse() devuelve un valor booleano que especifica el éxito o el fracaso y, en caso de éxito, el resultado viene dado por el parámetro 'out'.


#### Abreviación

```csharp
// No se necesita inicializar la variable
data_type variable_name;
Method_Name(out variable_name);


// Puedes convertir las dos lineas anteriores en solo una
Method_Name(out data_type variable_name);
```


#### Ejemplo


 ```csharp

using System;

class GFG {


	static public void Main()
	{
		int i;
		Addition(out i);
		Console.WriteLine("The addition of the value is: {0}", i);
	}

	public static void Addition(out int i)
	{
		i = 30;
		i += i;
	}
}

 ```
:::tip Observación
- El valor de la variable “i” es 60.


:::


#### Otro ejemplo:

```csharp
using System;
namespace ConsoleApp4 {
  public class Program {
    public static void Main() {
      float area,
      perimeter;
      Calculate(5, 10, out area, out perimeter);
      Console.WriteLine("The area of rectangle is: {0}", area);
      Console.WriteLine("The perimeter of rectangle is: {0}", perimeter);
      Console.ReadLine();
    }
    public static void Calculate(int length, int breadth, out float area, out float
    perimeter) {
      area = length * breadth;
      perimeter = 2 * (length + breadth);
    }
  }
}
```

:::tip info
- [Out Parameter With Examples in C#](https://www.geeksforgeeks.org/out-parameter-with-examples-in-c-sharp/)
- [out Parameter In C#](https://www.c-sharpcorner.com/article/out-parameter-in-c-sharp-7/)
- [C# Out Parameter](https://www.educba.com/c-sharp-out-parameter/)
- [How to use the in, out, and ref keywords in .NET Core](https://www.infoworld.com/article/3678688/how-to-use-the-in-out-and-ref-keywords-in-net-core.html)
- [What is the 'out' parameter in C#?](https://www.educative.io/answers/what-is-the-out-parameter-in-c-sharp)
- [out parameter modifier (C# Reference)](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/out-parameter-modifier)
- [Modificador del parámetro out (Referencia de C#)](https://learn.microsoft.com/es-es/dotnet/csharp/language-reference/keywords/out-parameter-modifier)
:::


## In
- La palabra clave in hace que los parámetros se pasen por referencia, pero garantiza que el parámetro no se modifique.
- Es como el modificador out, el modificador in sirve para que el parámetro sea pasado como una referencia en vez de como una copia del valor, pero a diferencia del modificador out, el modificador in le prevendrá de hacer cualquier cambio a la variable dentro del método.
- Ejemplo:
```csharp
int readonlyArgument = 44;
InArgExample(readonlyArgument);
Console.WriteLine(readonlyArgument);     // value is still 44

void InArgExample(in int number)
{
    // Errror
    number = 19;
}

```
:::tip Observación
- En el ejemplo anterior se muestra que el modificador in no suele ser necesario cuando se llama el método, solo lo es en la declaración del método.
- Si intentamos modificar el parámetro in , el compilador se quejara.
- Las variables que se han pasado como parametro in deben inicializarse antes de pasarse en una llamada de método. 

:::


:::tip
- Además, la palabra clave in puede usarse con un parámetro de tipo genérico para especificar que el parámetro de tipo es contravariante (contravariance), parte de una instrucción foreach o de una cláusula join de una consulta de LINQ. 
:::


:::tip Covarianza y contravarianza en genéricos
- Covarianza y contravarianza son términos que hacen referencia a la capacidad de usar un tipo más derivado (más específico) o menos derivado (menos específico) que el indicado originalmente.
- [Mas información](https://learn.microsoft.com/es-es/dotnet/standard/generics/covariance-and-contravariance#generic-interfaces-with-contravariant-type-parameters)
:::


- Las variables que se han pasado como argumentos in deben inicializarse antes de pasarse en una llamada de método. Sin embargo, es posible que el método llamado no asigne ningún valor o modifique el argumento.
- Los métodos no pueden sobrecargarse si la única diferencia es que un método toma un argumento ref o out y el otro toma un argumento in. Por ejemplo, el código siguiente, no se compilará:


```csharp
class CS0663_Example
{
    // Compiler error CS0663: "Cannot define overloaded
    // methods that differ only on in, ref and out".
    public void SampleMethod(in int i) { }
    public void SampleMethod(ref int i) { }
}

```

- Está permitida la sobrecarga en función de la presencia de in:


```csharp

class InOverloads
{
    public void SampleMethod(in int i) { }
    public void SampleMethod(int i) { }
}

```

:::tip info
- [Modificador del parámetro in (referencia de C#)](https://learn.microsoft.com/es-es/dotnet/csharp/language-reference/keywords/in-parameter-modifier)
- [Métodos con parámetros](https://csharp.net-tutorials.com/es/547/clases/metodos-con-parametros/)

:::

## Ref
- La palabra clave ref hace que un argumento se pase por referencia, no por valor. El efecto de pasar por referencia es que cualquier cambio en el parámetro del método llamado se refleja en el método que llama.
- Esto significa que si pasamos cualquier parámetro de método (ya sea tipo de valor o tipo de referencia) usando el parámetro ref, cualquier cambio en el valor del parámetro dentro del método se reflejará en el valor real del parámetro.

#### Ejemplo
- Tenemos un método llamado GetData que toma un parámetro entero. Dentro del método, actualizaremos este valor. Luego, llamamos a este método e imprimimos el valor del parámetro: antes de la llamada al método, dentro del método y después de la ejecución del método. Entonces, el código se verá así:


```csharp
static void Main(string[] args)
{
    int a = 4;
    Console.WriteLine("Value before method call is: " + a);
    GetData(a);
    Console.WriteLine("Value after method call is: " + a);
    Console.ReadKey();
}

public static void GetData(int a)
{
    a = a + 999;
    Console.WriteLine("Value inside method is: " + a);
}

```

- Ejecute la aplicación y vea los resultados. El valor del parámetro es diferente dentro del método, pero es el mismo que antes y después de la llamada al método. La salida será :


```csharp
Value before method call is: 4
Value inside method is: 1003
Value after method call is: 4

```
- Ahora, le asociamos la palabra clave ref a la definición del método y al parámetro. Nuevamente llamamos a este método e imprimimos sus valores. Entonces, el código se verá así.  


```csharp
 GetData(ref a);

public static void GetData(ref int a)
{
    a = a + 999;
    Console.WriteLine("Value inside method is: " + a);
}

```

:::tip
- 
Para usar un parámetro ref, la definición del método y el parámetro del método deben utilizar la palabra clave ref.

:::

- Ejecute la aplicación y vea la diferencia entre este resultado y los resultados de la primera ejecución:


```csharp
Value before method call is: 4
Value inside method is: 1003
Value after method call is: 1003

```

:::tip Observación
- Esta vez, el valor de la variable que se pasó como parámetro es el mismo que se estableció dentro del método.
- La razón detrás es que el uso de la palabra clave ref hace que el parámetro se pase por referencia y no por valor real. En otras palabras, el valor real del parámetro se compartió con el método debido al uso de la palabra clave ref. Entonces, cualquier cambio en el valor del parámetro dentro del método también actualiza el valor original.
:::

#### Otro ejemplo
- Ahora, intentemos ver lo mismo con un tipo de referencia. Agregamos una nueva clase llamada TestClass y agregamos dos propiedades llamadas Id y Nombre. Cambiamos la firma del método para pasar un parámetro de tipo TestClass, sin la palabra clave ref. Dentro del método, reinicializamos el tipo de clase TestClass y actualizamos los valores de las propiedades. Nuevamente imprimimos los valores antes de la llamada al método, dentro del método y después de la llamada al método. Entonces el código se verá así:

```csharp
static void Main(string[] args)
{
    TestClass testClass = new TestClass()
    {
        Id = 1,
        Name = "Test User"
    };
    Console.WriteLine("Before method call Name is: " + testClass.Name + " and ID is:" + testClass.Id);
    GetData(testClass);
    Console.WriteLine("After method call Name is: " + testClass.Name + " and ID is:" + testClass.Id);
    Console.ReadKey();
}

public static void GetData(TestClass testClass)
{
    testClass = new ConsoleApplication1.Program.TestClass();
    testClass.Id += 999;
    testClass.Name += "_Updated";
    Console.WriteLine("Inside method call Name is: " + testClass.Name + " and ID is:" + testClass.Id);
}

public class TestClass
{
    public int Id
    {
        get;
        set;
    }

    public String Name
    {
        get;
        set;
    }
}

```

- Ejecute el código y vea los resultados.
   -	Antes de la llamada al método, el nombre es: Usuario de prueba y el ID es:1  
   -	Llamada al método interno El nombre es: _Updated y el ID es: 999  
   -	Después de la llamada al método, el nombre es: usuario de prueba y el ID es: 1   


- Como sabemos que las variables de tipo de referencia contienen un puntero a los datos y no los datos reales, cuando pasamos el parámetro al método, en realidad compartimos una copia del puntero con el método y no el puntero real. Cuando el parámetro se reinicializa dentro del método, creamos un nuevo puntero que reemplaza la copia del puntero (recibida en la llamada al método). Entonces, los datos cambiaron dentro del método pero permanecieron iguales después de la ejecución del método. Ahora cambiemos el método para pasar el puntero de dato usando la palabra clave ref:


```csharp
static void Main(string[] args)
{
    TestClass testClass = new TestClass()
    {
        Id = 1,
        Name = "Test User"
    };
    Console.WriteLine("Before method call Name is: " + testClass.Name + " and ID is:" + testClass.Id);
    GetData(ref testClass);
    Console.WriteLine("After method call Name is: " + testClass.Name + " and ID is:" + testClass.Id);
    Console.ReadKey();
}

public static void GetData(ref TestClass testClass)
{
    testClass = new ConsoleApplication1.Program.TestClass();
    testClass.Id += 999;
    testClass.Name += "_Updated";
    Console.WriteLine("Inside method call Name is: " + testClass.Name + " and ID is:" + testClass.Id);
}

```

- Ejecute el código y vea la diferencia en los resultados.
  -	Antes de la llamada al método, el nombre es: Usuario de prueba y el ID es:1  
  -	Llamada al método interno El nombre es: _Updated y el ID es: 999  
  -	Después de la llamada al método, el nombre es: _Updated y el ID es: 999  


:::tip Observación
- Esta vez, los valores también cambiaron después de la ejecución del método. La razón es que esta vez compartimos el puntero real con el método y no su copia. 
- Entonces, los cambios en el puntero (mediante la reinicialización de TestClass dentro del método) actualizaron el puntero original (instancia de testClass en el método principal).
- Entonces se imprimieron nuevos valores después de la ejecución del método. Esto es lo que dice msdn, es decir, la palabra clave ref hace que un argumento se pase por referencia, no por valor.
- El efecto de pasar por referencia es que cualquier cambio en el parámetro del método llamado se refleja en el método que llama.
:::


#### Diferencias con out
- Si bien las dos palabras claves se utilizan para lo mismo, tienen algunas diferencias.


#### 1- Actualización de las variables Ref y Out
- Cuando llamamos a un método con la variable "out", el método tiene que actualizar la variable out dentro de la función y es obligatorio. Pero esto no es obligatorio si utiliza la variable ref. 
- Por ejemplo, eche un vistazo al siguiente código. Aquí, comentamos la segunda declaración de actualización dentro de las funciones MathRef y MathOut. Si observa dentro de la función MathRef, no obtenemos ningún error de tiempo de compilación. Pero dentro del método MathOut, recibimos un error en tiempo de compilación que dice "El parámetro ‘out’ debe asignarse antes de que el control abandone el método actual", como se muestra a continuación:


![código](https://dotnettutorials.net/wp-content/uploads/2022/07/word-image-28463-5.png?ezimgfmt=ng:webp/ngcb1)


#### 2- Inicializar variables Ref y Out
- Cuando pasamos el parámetro ref , es obligatorio inicializar el parámetro ref antes de pasarlo al método; de lo contrario, obtendremos un error de tiempo de compilación. 
- Esto se debe a que con el parámetro ref, actualizar el valor dentro del método es opcional. Entonces, antes de pasar el parámetro ref, se debe inicializar. Por otro lado, inicializar un parámetro de  out es opcional. Si no está inicializando el parámetro out, no hay problema, porque el parámetro out se inicializa o actualiza obligatoriamente dentro del método. 
- Para una mejor comprensión, eche un vistazo al siguiente código. Aquí no estamos inicializando el segundo parámetro. Para el parámetro SubtractionOut, no recibimos ningún error, pero para SubtractionRef, recibimos un error del compilador que dice Uso de la variable local no asignada 'SubtractionRef' Como se muestra abajo:

![código](https://dotnettutorials.net/wp-content/uploads/2022/07/word-image-28463-6.png?ezimgfmt=ng:webp/ngcb1)


#### 3- ¿Cuándo es útil?
- Debe utilizar los parámetros ref cuando desee pasar algunos valores a la función y espera que la función modifique o actualice los valores y se los devuelva. 
- Debo utilizar los parámetros out, cuando no queremos pasar ningún valor a la función y esperamos que la función actualice la variable y devuelva un valor.
- Entonces la palabra clave ref se usa para pasar datos en forma bidireccional y la palabra clave out se usa para pasar los datos de forma  unidireccional, es decir, devolver los datos.

#### Resumen

| Ref | Out |
| - | - |
| Los parámetros deben inicializarse antes de pasarlos a "ref".  | No es necesario inicializar los parámetros antes de pasarlos a "out".  |
| No es necesario inicializar el valor de un parámetro antes de devolverlo en el método de llamada. | Es necesario inicializar el valor de un parámetro antes de devolverlo en el método de llamada. |
| Pasar un valor a través del parámetro "ref" es útil cuando el método llamado necesita cambiar el valor de ese parámetro.| Útil cuando un método devuelve múltiples valores. |
| Cuando se utiliza "ref", el paso de datos es bidireccional.| Cuando se utiliza la palabra clave "out", los datos fluyen en una dirección. |


:::tip info
- [C# ref Keyword](https://www.c-sharpcorner.com/article/ref-keyword-in-c-sharp/)
- [Difference Between Ref and Out keywords in C#](https://code-maze.com/cshrap-ref-out-keywords/)
- [ref (Referencia de C#)](https://learn.microsoft.com/es-es/dotnet/csharp/language-reference/keywords/ref)
- [Ref vs Out in C#](https://dotnettutorials.net/lesson/ref-vs-out-in-csharp/#google_vignette)
:::

## Métodos iteradores
- Prácticamente todos los programas que escriba tendrán alguna necesidad de recorrer una colección. Va a escribir código que examine cada elemento de una colección.
- Para esto tendrá que crear un iterador que es un objeto que recorre un conjunto de datos (listas, colecciones, etc).
- También va a tener que crear métodos para un iterador, que son los métodos que contiene un iterador para recorrer los elementos de una clase.
- Los iteradores se pueden usar para:
   -	Enumerar una colección personalizada.
   -	Extender LINQ u otras bibliotecas.
   -	Crear una canalización de datos en la que los datos fluyan de forma eficaz mediante métodos de iterador.


#### Iteración con Foreach
- Recorrer una colección es sencillo: la palabra clave foreach recorre una colección, ejecutando la instrucción que contiene adentro una vez para cada elemento de la colección:


```csharp
foreach (var item in collection)
{
    Console.WriteLine(item?.ToString());
}

```

- La instrucción foreach no es mágica. Depende de dos interfaces genéricas definidas en la biblioteca de .NET Core para generar el código necesario para recorrer en iteración una colección: IEnumerable&lt;T> e IEnumerator&lt;T>. 

:::tip
- Ambas interfaces tienen también una versión no genérica: IEnumerable e IEnumerator. Para el código moderno se prefieren las versiones genéricas.
:::


- Cuando se genera una secuencia de forma asincrónica, puede usar la instrucción await foreach para consumir la secuencia de forma asincrónica:

```csharp
await foreach (var item in asyncSequence)
{
Console.WriteLine(item?.ToString());
}

```


:::tip
- Cuando una secuencia es System.Collections.Generic.IEnumerable&lt;T>, se usa foreach. 
- Cuando una secuencia es System.Collections.Generic.IAsyncEnumerable&lt;T>, se usa await foreach. En el último caso, la secuencia se genera de forma asincrónica.

:::


#### Método iterador
- Otra magnífica característica del lenguaje C# permite generar métodos que crean un origen para una colección.
- Estos métodos se conocen como métodos de iterador.
- Un método de iterador define cómo generar/mostrar los elementos de una secuencia (conjunto de datos como por ejemplo listas) cuando se solicita.
- Para definir un método de iterador se usan las palabras clave yield return.
- Podría escribir este método para generar la secuencia de enteros de 0 a 9:

```csharp
public IEnumerable<int> GetSingleDigitNumbers()
{
    yield return 0;
    yield return 1;
    yield return 2;
    yield return 3;
    yield return 4;
    yield return 5;
    yield return 6;
    yield return 7;
    yield return 8;
    yield return 9;
}

```

:::tip Observación
- El código anterior resaltar el hecho de que se pueden usar varias palabras claves yield return en un método de iterador. 

:::

- Se puede simplificar el código de un método de iterador. La definición del método siguiente genera la misma secuencia de números:


```csharp
public IEnumerable<int> GetSingleDigitNumbersLoop()
{
    int index = 0;
    while (index < 10)
        yield return index++;
}

```

- No tiene que elegir entre una y otra. Puede tener tantas instrucciones yield return como sea necesario para satisfacer las necesidades del método:


```csharp
public IEnumerable<int> GetSetsOfNumbers()
{
    int index = 0;
    while (index < 10)
        yield return index++;

    yield return 50;

    index = 100;
    while (index < 110)
        yield return index++;
}

```

- Todos estos ejemplos anteriores tendrían una versión asincrónica. En cada caso, reemplazaría el tipo de valor devuelto de IEnumerable&lt;T> por un elemento IAsyncEnumerable&lt;T>. Por ejemplo, el ejemplo anterior tendría la siguiente versión asincrónica:


```csharp

public async IAsyncEnumerable<int> GetSetsOfNumbersAsync()
{
    int index = 0;
    while (index < 10)
        yield return index++;
    await Task.Delay(500);
    yield return 50;
    await Task.Delay(500);
    index = 100;
    while (index < 110)
        yield return index++;
}

```
- Hay una restricción importante en los métodos de iterador: no puede tener una instrucción return y una instrucción yield return en el mismo método. El código siguiente no se compilará:


```csharp
public IEnumerable<int> GetSingleDigitNumbers()
{
    int index = 0;
    while (index < 10)
        yield return index++;

    yield return 50;

    //Genera un errror
    var items = new int[] {100, 101, 102, 103, 104, 105, 106, 107, 108, 109 };
    return items;
}

```
- Normalmente esta restricción no supone un problema. Tiene la opción de usar yield return en todo el método o de separar el método original en varios métodos, unos con return y otros con yield return.
- A veces, la respuesta correcta es dividir un método de iterador en dos métodos distintos. Uno que use return y un segundo que use yield return. Imagine una situación en la que quiera devolver una colección vacía, o los cinco primeros números impares, basándose en un argumento booleano. Eso se podría escribir como estos dos métodos:

```csharp
public IEnumerable<int> GetSingleDigitOddNumbers(bool getCollection)
{
    if (getCollection == false)
        return new int[0];
    else
        return IteratorMethod();
}

private IEnumerable<int> IteratorMethod()
{
    int index = 0;
    while (index < 10)
    {
        if (index % 2 == 1)
            yield return index;
        index++;
    }
}

```

:::tip Observación
- Observe los métodos anteriores. El primero usa la instrucción estándar return para devolver una colección vacía o el iterador creado por el segundo método. El segundo método usa la instrucción yield return para crear la secuencia solicitada.
:::


#### Profundizar Foreach
- La instrucción foreach se expande en un elemento estándar que usa las interfaces IEnumerable&lt;T> e IEnumerator&lt;T> para recorrer en iteración todos los elementos de una colección. También minimiza los errores cometidos por los desarrolladores al no administrar correctamente los recursos.
- El compilador traduce el bucle foreach que se muestra en el primer ejemplo en algo similar a esta construcción:

```csharp
IEnumerator<int> enumerator = collection.GetEnumerator();
while (enumerator.MoveNext())
{
    var item = enumerator.Current;
    Console.WriteLine(item.ToString());
}

```


- El código exacto generado por el compilador es más complicado y controla las situaciones en las que el objeto devuelto por GetEnumerator() implementa la interfaz IDisposable. La expansión completa genera código más parecido al siguiente:

```csharp
{
    var enumerator = collection.GetEnumerator();
    try
    {
        while (enumerator.MoveNext())
        {
            var item = enumerator.Current;
            Console.WriteLine(item.ToString());
        }
    }
    finally
    {
        // dispose of enumerator.
    }
}

```

- El compilador traduce el primer ejemplo asincrónico en algo similar a esta construcción:


```csharp
{
    var enumerator = collection.GetAsyncEnumerator();
    try
    {
        while (await enumerator.MoveNextAsync())
        {
            var item = enumerator.Current;
            Console.WriteLine(item.ToString());
        }
    }
    finally
    {
        // dispose of async enumerator.
    }
}

```


- La manera en que el enumerador se elimina depende de las características del tipo de enumerator. En el caso sincrónico general, la cláusula finally se expande a:

```csharp
finally
{
   (enumerator as IDisposable)?.Dispose();
}

```

- El caso asincrónico general se expande a:

```csharp
finally
{
    if (enumerator is IAsyncDisposable asyncDisposable)
        await asyncDisposable.DisposeAsync();
}

```

- Sin embargo, si el tipo de enumerator es un tipo  sealed y no hay conversión implícita del tipo de enumerator a IDisposable o IAsyncDisposable, la cláusula finally se expande en un bloque vacío:


```csharp
finally
{
}

```

- Si hay una conversión implícita del tipo de enumerator a IDisposable, y enumerator es un tipo de valor que no acepta valores Null, la cláusula finally se expande en:

```csharp
finally
{
   ((IDisposable)enumerator).Dispose();
}

```


:::tip
- Afortunadamente, no es necesario recordar todos estos detalles. La instrucción foreach controla todos esos matices. El compilador generará el código correcto para cualquiera de estas construcciones.

:::


#### Ejemplo iterador

```csharp
static void Main()
{
    foreach (int number in SomeNumbers())
    {
        Console.Write(number.ToString() + " ");
    }
    // Output: 3 5 8
    Console.ReadKey();
}

public static System.Collections.IEnumerable SomeNumbers()
{
    yield return 3;
    yield return 5;
    yield return 8;
}

```


:::tip info
- [Iterators](https://learn.microsoft.com/es-es/dotnet/csharp/iterators)
- [Iteradores (C#)](https://learn.microsoft.com/es-es/dotnet/csharp/programming-guide/concepts/iterators)
:::


