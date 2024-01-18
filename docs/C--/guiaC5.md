---
sidebar_position: 10
---
# Conceptos de "C#" - Parte 5

## Atributos
- En C#, los atributos son etiquetas de metadatos asignadas al código, incluidas clases, tipos, métodos y campos. 
- Los atributos son un mecanismo para agregar/asociar metadatos a un código, como instrucciones del compilador y otros datos sobre sus ensamblados, tipos de datos, métodos, propiedades, etc.
- Usando la reflexión, puede examinar las etiquetas para cambiar comportamientos en su programa. 


#### Sintaxis
- En pocas palabras, los atributos son etiquetas de metadatos que contienen cierta información. La sintaxis para ellos es el nombre del atributo entre corchetes sobre el código que se etiqueta, así:


```csharp
[Attribute]
void Command() 
```

- Se pueden adjuntar a prácticamente cualquier cosa: clases, métodos, campos, estructuras, tipos, etc. Incluso se les pueden dar parámetros de entrada, aunque están limitados a tipos básicos. 
- Puede establecer parámetros invocando el atributo como un método:

```csharp
[Attribute("name", Test=false, Number=42)]
```

#### Cómo crear atributos
- Para crear un atributo debemos crear una clase que herede de Attribute. Además, podemos especificar algunas propiedades utilizando el atributo AttributeUsage.
- Con este atributo podemos indicar:
   -	ValidOn: targets válidos para el atributo que vamos a crear.
   -	AllowMultiple: nos indica si el atributo se puede especificar más de una vez para un mismo elemento. Por defecto false.
   -	Inherited: nos indica si el atributo lo pueden heredar las clases derivadas. Por defecto false.
- Antes de seguir debemos hacer una diferenciación entre parámetros posicionales y parámetros con nombre:
    - Los parámetros posicionales son obligatorios y los especificaremos en el constructor del atributo mientras que los parámetros con nombre, que son opcionales, los especificaremos como propiedades y deberemos nombrarlos al usar el atributo.

:::tip
- Los parámetros de los atributos deben ser un valor constante de un tipo simple (string, enum, Type…).
:::


#### Crear el atributo Display Name
- En este ejemplo vamos a tener un solo parámetro posicional llamado DisplayName que será el texto a mostrar.
- Para crear nuestro atributo DisplayName debemos crear una clase que herede de Attribute. Como vamos a añadirle este atributo a cada valor de enumerado le indicaremos que el target es Field:


```csharp
[AttributeUsage(AttributeTargets.Field)]
public class DisplayNameAttribute : Attribute
{
  public readonly string DisplayName;

  public DisplayNameAttribute(string displayName)
  {
      DisplayName = displayName;
  }
}

public enum Fruit
{
   [DisplayName("Lemon")]
   Lemon,
   [DisplayName("Watermelon")]
   Watermelon,
   [DisplayName("Orange")]
   Orange,
   [DisplayName("Blood Orange")]
   BloodOrange,
   [DisplayName("Kiwi")]
   Kiwi,
   [DisplayName("Banana")]
   Banana
}

```

:::tip Observación
- El nombre del atributo es el nombre de la clase, pero sin el sufijo “Attribute”.
:::


#### Consultando los atributos
- Ahora que hemos enriquecido nuestro enumerado necesitamos tener una forma de poder consultar la nueva información. Para ello vamos a utilizar reflexión.
- Con el siguiente método obtenemos todos los atributos de un determinado tipo del enumerado pasado por parámetro:


```csharp
private static IEnumerable<T> GetAttributes<T>(Enum enumValue) where T : Attribute
{
  // Obtenemos el tipo
  var type = enumValue.GetType();
  // La información del valor concreto del enumerado
  var memberInfo = type.GetMember(enumValue.ToString());
  // Obtenemos todos los atributos del miembro
  var attributes = memberInfo[0].GetCustomAttributes(typeof(T), false);

  return attributes.Cast<T>();
} 

private static T GetFirstOrDefaultAttribute<T>(Enum enumValue) where T : Attribute
{
  var attributes = GetAttributes<T>(enumValue);
  return attributes.FirstOrDefault() as T;
}

```

- Para que sea más sencillo e intuitivo de utilizar vamos a crear un método de extensión que nos devuelva el display name. Simplemente una vez tenemos el atributo obtenemos el miembro público DisplayName:

```csharp
public static string GetDisplayName(this Enum enumValue)
{
  var attribute = GetFirstOrDefaultAttribute<DisplayNameAttribute>(enumValue);
  return attribute != null ? attribute.DisplayName : string.Empty;
}
```

- Ahora podemos utilizar el método GetDisplayName para obtener el DisplayName de un enumerado:


```csharp
Fruit.BloodOrange.GetDisplayName();
Fruit.Watermelon.GetDisplayName();
Fruit.Lemon.GetDisplayName();

```

#### Parámetros nombrados
- En este ejemplo vemos cómo definir atributos con nombre y cómo especificarlos a la hora de usarlo.

```csharp
[AttributeUsage(AttributeTargets.Field)]
public class CenturyDataAttribute : Attribute
{
  private int startYear;

  public int StartYear
  {
      get { return startYear; }
      set { startYear = value; }
  }

  private int endYear;

  public int EndYear
  {
      get { return endYear; }
      set { endYear = value; }
  }

  public readonly string DisplayName;

  public CenturyDataAttribute(string displayName)
  {
      DisplayName = displayName;
  }
}

```

- Como vemos, basta con añadir una propiedad en el atributo para definir un parámetro con nombre.
- A la hora de usarlo simplemente nombramos los parámetros y le asignamos un valor después de los parámetros posicionales:



```csharp
public enum Century
{
  [CenturyData("15th", StartYear = 1401, EndYear = 1500)]
  XV,
  [CenturyData("16th", StartYear = 1501, EndYear = 1600)]
  XVI,
  [CenturyData("17th", StartYear = 1601, EndYear = 1700)]
  XVII,
  [CenturyData("18th", StartYear = 1701, EndYear = 1800)]
  XVIII,
  [CenturyData("19th", StartYear = 1801, EndYear = 1900)]
  XIX,
  [CenturyData("20th", StartYear = 1901, EndYear = 2000)]
  XX
}

```

#### Múltiples atributos
- En este caso queremos mostrar por pantalla unas categorías para el filtrado de datos. Una vez el usuario seleccione una categoría se debe hacer una llamada a una API.
- Surgen dos problemas: por un lado, por pantalla se debe ver un texto amigable para cada categoría y por otro lado necesitamos saber el valor de cada categoría en el API (que además es un valor múltiple).
- Para poder mostrar un texto amigable por pantalla para cada categoría basta con añadir el atributo DisplayName que hemos creado antes. Y para obtener el valor que tiene en el API crearemos otro atributo llamado ApiValue. En este caso el atributo ApiValue se podrá asignar varias veces a un elemento:


```csharp
[AttributeUsage(AttributeTargets.Field, AllowMultiple = true)]
public class ApiValueAttribute : Attribute
{
  public readonly string ApiValue;

  public ApiValueAttribute(string apiValue)
  {
    ApiValue = apiValue;
  }
}

```

- Ahora simplemente en nuestro enumerado ya podemos especificar el nombre a mostrar y los diferentes valores que tienen las categorías en el API.

```csharp
public enum Category
{
  [DisplayName("Series")]
  [ApiValue("series")]
  [ApiValue("tv-series")]
  [ApiValue("tv-vod")]
  Series,
  [DisplayName("Films and Movies")]
  [ApiValue("movies")]
  [ApiValue("films")]
  Films,
  [DisplayName("Documentary")]
  [ApiValue("tv-documentary")]
  Documentary
}

```

- Al igual que antes obtenemos la información del enumerado gracias a su atributo:


```csharp
public static string GenerateQuery(this Enum enumValue)
{
  var attributes = GetAttributes<ApiValueAttribute>(enumValue);
  IEnumerable<string> values = attributes.Select(attribute => attribute.ApiValue);

  return $"{string.Join(",", values)}";
}

```
### Varios atributos 
- Se pueden agregar varios atributos  a un elemento en un corchete, para esto los atributos se separan con coma(",").
- El orden en que se especifican los atributos en los corchetes no es significativo.
- Ejemplo:

```csharp
[Author("Brian Kernighan"), Author("Dennis Ritchie")] 
class Class1
{
    ...
}
```

:::tip Observación
- En el elemento "Clase", especificamos dos atributos Author.
:::




#### Conclusiones
- Como hemos visto, los atributos son muy potentes para añadir información a elementos. En nuestro caso lo hemos visto para trabajar con enumerados, pero como hemos visto en los ejemplos del principio en C# se pueden utilizar para muchos usos.
- Por otro lado, no debemos abusar de su uso y siempre debemos plantearnos si tienen sentido o no. Como con todo, hay que tener cuidado al usarlos ya que tenemos que tener en cuenta el abuso de la reflexión, además del abuso de decoradores que dificultan la legibilidad del código.
- La otra cosa a tener en cuenta es que los parámetros de los atributos solo pueden ser valores constantes y en muchos casos nos puede limitar.






:::tip info
- [Atributos en C#](https://www.nocountryforgeeks.com/atributos-en-c/)
- [¿Cómo funcionan los atributos en C#?](https://es.linux-console.net/?p=7020#gsc.tab=0)
- [propiedades de C # (atributo)](https://www.w3big.com/es/csharp/csharp-attribute.html#gsc.tab=0)
- [C# - Apresentando Atributos](https://www.macoratti.net/18/04/c_atrib1.htm)
- [Acceso a atributos mediante reflexión](https://learn.microsoft.com/es-es/dotnet/csharp/advanced-topics/reflection-and-attributes/accessing-attributes-by-using-reflection)
- [Common Attributes (Visual Basic) (Atributos comunes [Visual Basic])](https://learn.microsoft.com/es-es/dotnet/visual-basic/programming-guide/concepts/attributes/common-attributes)
- [Atributos](https://learn.microsoft.com/es-es/dotnet/csharp/language-reference/language-specification/attributes)
- [Varios atributos interpretados por el compilador de C#](https://learn.microsoft.com/es-es/dotnet/csharp/language-reference/attributes/general)
- [Definición y lectura de atributos personalizados](https://learn.microsoft.com/es-es/dotnet/csharp/advanced-topics/reflection-and-attributes/attribute-tutorial)
- [Creación de atributos personalizados](https://learn.microsoft.com/es-es/dotnet/csharp/advanced-topics/reflection-and-attributes/creating-custom-attributes)
:::

## Using
- Cada lenguaje de programación cuenta con un conjunto de palabras claves que son utilizadas por el compilador. En esta sección te mostramos 5 formas de usar la palabra reservada using de C# con el clásico "Hola mundo".
- Un programa Hola Mundo sin la instrucción luce de la siguiente manera:


```csharp
namespace Using
{
    class Program
    {
        static void Main(string[] args)
        {
            System.Console.WriteLine("Hola Mundo : sin using");
        }
    }
}

```

:::tip Observación
- Básicamente se observa que es necesario escribir el nombre completo (incluyendo el espacio de nombre) de los tipos de datos que utiliza el programa, en este caso "System.Console.WriteLine".
- Esto no es un problema para programas simples y sin sentido como este, pero en un programa más complejo en el que se utilizan varias clases esto se vuelve un martirio.
:::



#### 1- Using para importar espacios de nombres
- Con la instrucción "using System" a principio del programa es posible reducir el enunciado "System.Console.WriteLine("Hola Mundo : sin using");" por "Console.WriteLine("using espacios de nombres");":

```csharp
using System;

namespace Using
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("using para importar espacios de nombres");
        }
    }
}

```
:::tip Observación
- En este caso permite usar el método estático WriteLine sin escribir el espacio de nombres de la clase Console.
:::


#### 2- Using static
- Se utiliza “using static” para importar miembros estáticos
- En la versión 6.0 de C#, liberada en 2015, agregaron esta nueva característica que es especialmente útil cuando nuestro programa hace un gran uso de miembros estáticos (métodos ,campos y propiedades) ya sea de un framework o codigo escrito por nosotros. 
- Ejemplo:
```csharp
using static System.Console;

namespace Using
{
    class Program
    {
        static void Main(string[] args)
        {
            WriteLine("Hello World!");
        }
    }
}

```

:::tip
-  La característica using static también funciona con enumeraciones.
-  [Ejemplo](https://twitter.com/STeplyakov/status/1075277979603722240/photo/1)

:::

#### 3- Using para crear alias
- En raras ocasiones, pero si pasa, dos o más tipos  de datos tienen el mismo nombre pero están en diferentes ensamblados, si ambos se usan en una clase ocurre una colisión de nombres y el compilador no sabe cuál tipo elegir y lo que es peor, using para importar espacio de nombres no ayuda.
- Podemos crear un alias para un tipo de dato usando la palabra using seguida del alias igualando con el nombre completo de la clase: "using Consola = System.Console;".
- Ejemplo:

```csharp
using Consola = System.Console;

namespace Using
{
    class Program
    {
        static void Main(string[] args)
        {
            Consola.WriteLine("using para crear un alias");
        }
    }
}

```
:::tip Observación
- Con el alias se resuelve el problemas de las colisión de nombres y la clase System.Console es identificada como Consola. Esto solo afecta la clase en la que se declara el alias.
:::


#### 4- Using para clases que implementar IDisponsable
- El ultimo caso es cuando una clase implementa la interfaz IDisposable esto asegura que tendrá el método Dispose que es utilizado para liberar recursos no administrados como un archivo, una conexión de red, una conexión con base de datos entre otros. 
- Ejemplo:


```csharp
namespace Using
{
    class Program
    {
        static void Main(string[] args)
        {
            using (System.IO.StreamReader lector = System.IO.File.OpenText("archivo.txt"))
            {
                System.Console.WriteLine(lector.ReadToEnd());
            }
        }
    }
}

```
:::tip Observación
- Esto asegura que se ejecute el método Dispose de la clase StreamReader al terminar el bloque de código encerrado por el enunciado using.
:::

#### 5- Declaraciones using C# 8.0
- Básicamente permite declarar una variable después de la palabra reservada using.
- Con esto se establece que el recurso declarado debe ser liberado al final del alcance(scope) donde se declaró.
- Por ejemplo, para declarar una conexion tenemos las siguientes dos opciones:

```csharp
static void Main(string[] args)
{
    using (SqlConnection connection = new SqlConnection()))
    {
      // Realizar operaciones con la conexión
    } // aquí se libera la conexion
}

```
- Con las declaraciones using de C# 8.0 el codigo se veria de la siguiente manera:


```csharp
static void Main(string[] args)
{
    using SqlConnection connection = new SqlConnection());
    // Realizar operaciones con la conexión  
}   // aquí se libera la conexion

```

:::tip info
- [Cuatro formas de usar la palabra clave using de C#](https://aspnetcoremaster.com/c%23/dotnet/using/2019/01/03/cuatro-formas-de-usar-la-palabra-clave-using-de-csharp.html)


:::


## Typeof
- Typeof es una palabra clave que se utiliza para obtener el tipo de dato en tiempo de compilación.  O en otras palabras, este operador se utiliza para obtener el objeto System.Type para un tipo de dato.
-  El argumento del operador typeof debe ser el nombre de un tipo de dato o un parámetro de tipo generico.
- El argumento no debe ser un tipo que requiera anotaciones de metadatos. Algunos tipos de ejemplo son:
   - dynamic.
   - string? (o cualquier tipo de referencia que acepte valores NULL).
   - Estos tipos no se representan directamente en los metadatos. Los tipos incluyen atributos que describen el tipo subyacente. En ambos casos se puede usar el tipo subyacente. En lugar de dynamic, se puede usar object. En lugar de string?, se puede usar string.
- Ejemplo:

```csharp

using System;
 
class GFG {
    static Type a = typeof(double);
    static void Main()
    {
        Console.WriteLine(a);
        Console.WriteLine(typeof(int));
        Console.WriteLine(typeof(Array));
        Console.WriteLine(typeof(char));
        Console.WriteLine(typeof(int[]));
        Console.WriteLine(typeof(string));
    }
}
```

- Devuelve:


```csharp
System.Double
System.Int32
System.Array
System.Char
System.Int32[]
System.String
```


#### Diferencia entre el operador typeof y el método GetType


| Operador typeof | Método GetType |
| - | - |
|Toma el tipo de dato  como argumento y devuelve el tipo de dato marcado en el  argumento.   | Solo se invoca en la instancia de un tipo de dato.  |
| Se utiliza para obtener un tipo de dato  en tiempo de compilación.   | Se utiliza para obtener el tipo de dato de un objeto en tiempo de ejecución.  |
| No se puede utilizar en una instancia.   | Se puede utilizar en una instancia.  |


- Ejemplo:


```csharp
using System;
 
public class GFG {
 
 
    static public void Main()
    {
        string s = "Geeks";
 
      
        Type a1 = typeof(string);
 
      
        Type a2 = s.GetType();
 
        // True
        Console.WriteLine(a1 == a2);
 
     
        object obj = "Hello";
 
  
        Type b1 = typeof(object);
 
     
        Type b2 = obj.GetType();
 
       // False
        Console.WriteLine(b1 == b2);
    }
}
```
- Devuelve:


```csharp
Verdadero
FALSO
```

:::tip Observación
- Aquí,  "b1 = typeof(object);"  devolverá "System.Object" pero "Type b2 = obj.GetType();" devolverá "System.String" .
- Como, en tiempo de compilación solo se crea la referencia de tipo  objeto, pero en tiempo de ejecución la cadena ("Hello") en realidad se almacena en ella.
:::

:::tip info
- [What is the typeof() method in C#?](https://www.educative.io/answers/what-is-the-typeof-method-in-c-sharp)
- [Operadores de prueba de tipos y expresión de conversión: is, as, typeof y conversiones](https://learn.microsoft.com/es-es/dotnet/csharp/language-reference/operators/type-testing-and-cast)
- [typeof Operador Palabra clave en C#](https://www.geeksforgeeks.org/typeof-operator-keyword-in-c-sharp/)
:::


## GetType
- Los tipos de datos en C# cuentan con una clase de representación (representa un tipo de dato) o delegada (se encarga de representar a un tipo de dato) conocida como System.Type, la cual se puede ver como una instancia que conoce todo acerca de un tipo de dato del Framework .NET o de los propios definidos por el usuario.
- GetType() obtiene el Type de la instancia actual (devuelve lo mismo que typeof).
- Entonces obtiene el Type que contiene una instancia en tiempo de ejecución.
- Ejemplo:

```csharp
	using System;    
	public class StringExample    
	{    
	    public static void Main(string[] args)    
	    {    
	      string s1 = "Hello C#";  
	      Console.WriteLine(s1.GetType());  
	    }    
	}    

```
- Devuelve:

```csharp
System.String
```

:::tip Observación
- Todos los tipos de datos son Objetos.


:::
:::tip info
- [C# String GetType()](https://www.javatpoint.com/csharp-string-gettype)
- [Object.GetType Method](https://learn.microsoft.com/en-us/dotnet/api/system.object.gettype?view=net-7.0)
- [Type.GetType Method](https://learn.microsoft.com/en-us/dotnet/api/system.type.gettype?view=net-7.0)
- [C# Object.GetType() Method with Examples](https://www.tutorialspoint.com/chash-object-gettype-method-with-examples)
- [C# get type of object](https://www.educba.com/c-sharp-get-type-of-object/)
- [El Método GetType y el Operador typeof en C#](https://ortizol.blogspot.com/2014/04/el-metodo-gettype-y-el-operador-typeof.html)
:::

## Volatil
- La palabra clave volatile se utiliza para indicar que el valor de un campo puede ser cambiado por varios subprocesos y el compilador o el hardware no debe optimizarlo ni almacenarlo en caché.
- Cuando un campo está marcado como volatile, el compilador garantiza que cada lectura y escritura en ese campo se realice directamente desde la memoria, evitando cualquier optimización que pueda generar un comportamiento inesperado en escenarios multiproceso.
- La palabra clave volatile asegura la visibilidad de una variable para todos los hilos. En términos simples, cuando marcamos un campo volatile, le declaramos al compilador que varios subprocesos accederán a este campo específico y, por lo tanto, no aplicara ciertas optimizaciones de reordenamiento de memoria en ese campo.
- Cuando un hilo lee un campo volatile, siempre lee el valor más reciente del campo ya que el compilador no reordena ninguna operación de memoria que se haya realizado en este campo. De manera similar, al escribir en un campo volatile, el compilador garantiza que las operaciones de memoria anteriores no se reordenen para aparecer después de la última operación de escritura.
Esto garantiza que un cambio realizado por un subproceso sea visible para todos los subprocesos en todo momento. 
- Ejemplo:

```csharp
public class ExampleClass
{
    public volatile int VolatileField;

  
     // Otros miembros y métodos de la clase van aquí.
}

```

- En este ejemplo, VolatileField está marcado como volatile, lo que indica que varios subprocesos pueden acceder a él y modificarlo simultáneamente sin ninguna optimización del compilador ni del hardware que pueda generar inconsistencia en los datos.


#### Puntos clave a tener en cuenta sobre volatile:
1.	La palabra clave volatile se utiliza normalmente en aplicaciones de subprocesos múltiples cuando se trata de campos compartidos a los que acceden varios subprocesos al mismo tiempo.
2.	Volatile no se utiliza para sincronización; solo garantiza la visibilidad y la atomicidad de las operaciones de lectura y escritura individuales. Si necesita sincronización para hacer cumplir el orden o la exclusión mutua, considere usar otros mecanismos de sincronización como lock, Monitor o Semaphore.


:::tip Atomicidad
- La atomicidad es la propiedad que asegura que una operación se ha realizado o no, y por lo tanto ante un fallo del sistema no puede quedar a medias.
- Si esta operación consiste en una serie de pasos, todos ellos ocurren o ninguno. Por ejemplo, en el caso de una transacción bancaria o se ejecuta tanto el depósito y la deducción o ninguna acción es realizada.
- El concepto es relevante cuando se programa con hilos de ejecución.

:::

3.	En C#, cuando se trabaja con datos compartidos en escenarios de subprocesos múltiples, generalmente se recomienda usar la palabra clave lock u otras construcciones de sincronización de subprocesos, ya que volatile por sí solas podrían no ser suficientes para requisitos de sincronización complejos.
- A continuación se muestra un ejemplo de uso volatile en un escenario de subprocesos múltiples:

```csharp
public class SharedData
{
    public volatile bool IsDataReady;

    public void LoadData()
    {
        // Simulando que se esta cargando datos..
        Thread.Sleep(1000);

        IsDataReady = true;
    }
}

public class Program
{
    static void Main()
    {
        SharedData sharedData = new SharedData();

        // Hilo 1: Carga datos.
        new Thread(sharedData.LoadData).Start();

        // Hilo 2: Esperando a que la data esta lista.
        while (!sharedData.IsDataReady)
        {
            Console.WriteLine("Esperando la data...");
            Thread.Sleep(100);
        }

        Console.WriteLine("¡Los datos están listos!");
    }
}

```
:::tip Observación
- En este ejemplo, tenemos una clase  SharedData con un campo  IsDataReadymarcado como volatile. 
- El hilo 1 carga datos y  establece IsDataReady en true. El hilo 2 comprueba continuamente el valor de IsDataReady hasta que se convierte en true. 
- La palabra clave volatile garantiza que el cambio realizado por el subproceso 1 sea inmediatamente visible para el subproceso 2 y que el programa genere "¡Los datos están listos!" cuando se cargan los datos.
:::


:::tip info
- [Understanding the 'volatile' Keyword in C#](https://www.techieclues.com/tutorials/csharp-keywords/volatile-keyword-in-csharp)
- [Why you should never use DateTime.Now directly - Dealing with Volatile Dependencies in C#](https://dev.to/rogeliogamez92/why-you-should-never-use-datetimenow-directly-dealing-with-volatile-dependencies-in-c-901)
- [Synchronization Mechanisms – Volatile vs Interlocked vs lock in C#](https://code-maze.com/csharp-volatile-interlocked-lock/)
- [volatile (C# Reference)](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/volatile)
:::

## Lock
- Una de las limitaciones que tenemos con volatile es que, si bien funciona bien para tipos de datos más simples como int, bool o char, no admite tipos de datos más grandes como long, double o decimal. Esto se debe a que los tipos de datos más grandes ocupan más de 32 bits de memoria, que es mayor que una palabra de CPU y, por lo tanto, pueden requerir múltiples instrucciones de CPU para una lectura/escritura. Hace que sea difícil garantizar la atomicidad en estos tipos. Esto se puede solucionar con la palabra clave Lock.
- En C#, la palabra clave lock nos proporciona un mecanismo tal que sólo un hilo puede acceder a un código particular a la vez. Una vez que un subproceso bloquea un recurso compartido para usarlo, todos los demás subprocesos que intentan acceder al recurso deben esperar hasta que el subproceso libere el bloqueo del recurso.
- Comencemos con un programa simple:

```csharp
int counter = 0;
void Increase()
{
    for (int i = 0; i < 1000000; i++)
    {
        counter++;
    }
    Console.WriteLine("The counter is " + counter);
}

Task.Run(() => Increase());
Task.Run(() => Increase());

Console.ReadLine();

```

- Creamos dos tareas que se ejecutan en subprocesos separados. Cada tarea ejecuta el método  Increase() para aumentar la variable counter.
- Debido a que ambas tareas modifican la variable counter al mismo tiempo, existe el riesgo de que se produzcan condiciones de carrera y problemas de sincronización.


:::tip Condición de carrera
- Una condición de carrera es una situación indeseable que ocurre cuando un dispositivo o sistema intenta realizar dos o más operaciones al mismo tiempo, pero debido a la naturaleza del dispositivo o sistema, las operaciones deben realizarse en la secuencia adecuada para que se realicen correctamente.
:::

- Cuando el programa aumenta la variable counter, lleva tres pasos:
  1. Leer el valor de la variable counter.
  2. Aumentarlo en uno.
  3. Escribe el nuevo valor nuevamente en la variable counter.
  - En otras palabras, el aumento de la variable counter no es una operación atómica .



:::tip Operación atómica
- Se dice que una operación es atómica cuando se completa de principio a fin sin interrupciones (no hay pasos intermedios).
:::
- Por lo tanto, una tarea puede leer el valor de counter antes de que la otra tarea haya terminado de actualizarlo, lo que resulta en un valor incorrecto o una actualización perdida.
- Por eso lock viene al rescate.
- La declaración  lock previene condiciones de carrera y garantiza la seguridad de los subprocesos cuando varios subprocesos acceden a la misma variable compartida.
- Para usar la declaración lock, crea un nuevo objeto que sirve como bloqueo, que también se conoce como mutex. El mutex significa exclusión mutua:


```csharp
lock(lockObject)
{
   // Acceso al recurso compartido
}

```
- Cuando un hilo ingresa a un bloque lock, intentará adquirir el bloqueo en el objeto mutex especificado (lockObject en este caso).
- Si otro subproceso ya ha adquirido el bloqueo, el subproceso actual se bloquea hasta que se libere el bloqueo.
- Una vez que se libera el bloqueo, el hilo actual puede adquirirlo y ejecutar el código del bloque lock que a menudo lee o escribe los recursos compartidos.
- El siguiente programa demuestra cómo utilizar una declaración  lock para evitar una condición de carrera entre dos subprocesos:


```csharp
int counter = 0;

object lockCounter = new();
void Increase()
{
    for (int i = 0; i < 1000000; i++)
    {
    
        lock (lockCounter)      // Intenta adquirir el bloqueo
        { 
            counter++; 
        } // Se libera el bloqueo

    }
    Console.WriteLine("The counter is " + counter);
}

Task.Run(() => Increase());
Task.Run(() => Increase());

Console.ReadLine();

```
- Este programa es similar al programa anterior, pero utiliza una declaración de bloqueo para sincronizar el acceso a la variable counter.
- La declaración lock garantiza que ambas tareas accedan a la variable counter de forma mutuamente excluyente.
- Esto significa que el valor final del contador es predecible y siempre igual a la suma de los incrementos llevados por ambas tareas, que es 2,000,000.
- Tenga en cuenta que el valor final del contador es siempre 2,000,000. Sin embargo, el valor inmediato (1,992,352) puede variar porque el programa se ejecuta simultáneamente, con dos subprocesos compitiendo para incrementar la variable del contador.


#### Mejores prácticas
- Las siguientes son algunas de las mejores prácticas al utilizar la declaración lock de C#:
   -	Mantenga el bloque lock lo más pequeño posible para minimizar el tiempo que otros subprocesos tienen que esperar hasta el bloqueo. Si un bloque  lock tarda mucho en ejecutarse, puede provocar contención entre subprocesos y reducir el rendimiento de la aplicación.
   -	Evite los bloqueos anidados porque pueden provocar un punto muerto . Los interbloqueos ocurren cuando varios subprocesos intentan adquirir bloqueos en un orden diferente.
   -	Utilice try...finally en el bloque para liberar el bloqueo correctamente cuando se produzca una excepción en el bloque lock. Además, garantiza que otros subprocesos no se bloqueen indefinidamente.
   -	Considere el uso de mecanismos de sincronización alternativos como SemaphoreSlimy y ReaderWriterLockSlim porque pueden proporcionar un mejor rendimiento y un control más detallado sobre la concurrencia.   

:::tip info
- [Synchronization Mechanisms – Volatile vs Interlocked vs lock in C#](https://code-maze.com/csharp-volatile-interlocked-lock/)
- [C# Lock](https://www.csharptutorial.net/csharp-concurrency/csharp-lock/)
- [Declaración de lock en C#](https://www.delftstack.com/es/howto/csharp/lock-statement-in-csharp/)
- [lock statement - ensure exclusive access to a shared resource](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/lock)
- [instrucción lock: asegúrese del acceso exclusivo a un recurso compartido](https://learn.microsoft.com/es-es/dotnet/csharp/language-reference/statements/lock)
- [Using C# to Demonstrate Lock in Thread](https://www.section.io/engineering-education/using-c-sharp-to-demonstrate-lock-in-thread/)
- [Lock en C#. Manejo de multiconcurrencia.](https://robertomiguelz.blogspot.com/2021/05/lock-en-c-manejo-de-multiconcurrencia.html)
- [	Thread Locking In C#](https://www.c-sharpcorner.com/UploadFile/1d42da/thread-locking-in-C-Sharp/)
:::

## Monitor
- Monitor es similar a lock, pero la clase monitor proporciona más control sobre la sincronización de varios subprocesos que intentan acceder al mismo bloque de código.
- Al utilizar un monitor, se puede garantizar que ningún otro hilo pueda acceder a una sección del código de la aplicación que está ejecutando el propietario del bloqueo, a menos que el otro hilo esté ejecutando el código utilizando un objeto bloqueo diferente.
- La clase Monitor tiene los siguientes métodos para sincronizar el acceso a una región de código tomando y liberando un bloqueo:
   - Enter(): Cuando invocamos el método Enter de la clase Monitor, éste adquiere un bloqueo exclusivo sobre el objeto especificado. Esto también marca el comienzo de una sección crítica o el comienzo de un recurso compartido.
   - Exit(): cuando se invoca el método Exit de la clase Monitor, libera el bloqueo en el objeto especificado. Esto también marca el final de una sección crítica o el final del recurso compartido protegido por el objeto bloqueado.
   - Pulse(): Cuando se invoca el método Pulse de la clase Monitor, envía una señal a un hilo en la cola de espera de un cambio en el estado del objeto bloqueado.
   - Wait(): cuando se invoca el método Wait de la clase Monitor, libera el bloqueo de un objeto y bloquea el hilo actual hasta que vuelve a adquirir el bloqueo.
   - PulseAll(): Cuando se invoca el método PulseAll de la clase Monitor, envía señales a todos los subprocesos en espera de un cambio en el estado del objeto bloqueado.
   - TryEnter():  cuando invocamos el método TryEnter de la clase Monitor, intenta adquirir un bloqueo exclusivo en el objeto especificado.

#### Ejemplo para comprender la clase Monitor en C# para proteger los recursos compartidos del acceso simultáneo



- El siguiente código es la sintaxis para usar los métodos Enter y Exit de la clase Monitor para proteger un recurso compartido en un entorno multiproceso del acceso simultáneo en C#. Todos los métodos de la clase Monitor son métodos estáticos. Entonces, puede ver aquí que estamos accediendo a los métodos Enter y Exit usando el nombre de clase, es decir, Monitor:



![codigo](https://dotnettutorials.net/wp-content/uploads/2019/07/Monitor-Class-in-C-Multithreading.jpg?ezimgfmt=ng:webp/ngcb1)

- En el siguiente ejemplo, tenemos un recurso compartido y accedemos a ese recurso simultáneamente mediante tres subprocesos diferentes. Luego utilizamos los métodos de entrada y salida de la clase Monitor para proteger el código de la sección critica. En este caso, los tres subprocesos intentarán adquirir un bloqueo exclusivo, pero en un momento dado, solo un subproceso obtiene un bloqueo exclusivo y entrará en la sección crítica y todos los demás subprocesos esperarán hasta que el subproceso libere el bloqueo:


```csharp
using System;
using System.Threading;
namespace MonitorDemo
{
    class Program
    {
        private static readonly object lockPrintNumbers = new object();

        public static void PrintNumbers()
        {
            Console.WriteLine(Thread.CurrentThread.Name + " Trying to enter into the critical section");
            
            try
            {
                Monitor.Enter(lockPrintNumbers);
                Console.WriteLine(Thread.CurrentThread.Name + " Entered into the critical section");
                for (int i = 0; i < 5; i++)
                {
                    Thread.Sleep(100);
                    Console.Write(i + ",");
                }
                Console.WriteLine();
            }
            finally
            {
                Monitor.Exit(lockPrintNumbers);
                Console.WriteLine(Thread.CurrentThread.Name + " Exit from critical section");
            }
        }

        static void Main(string[] args)
        {
            Thread[] Threads = new Thread[3];
            for (int i = 0; i < 3; i++)
            {
                Threads[i] = new Thread(PrintNumbers)
                {
                    Name = "Child Thread " + i
                };
            }

            foreach (Thread t in Threads)
            {
                t.Start();
            }

            Console.ReadLine();
        }
    }
}

```

#### ¿Cómo funciona la clase Monitor en C#?
- La clase Monitor en C# proporciona un mecanismo de sincronización que permite que solo un subproceso acceda al código de la sección crítica a la vez para evitar la condición de carrera. Todos los demás subprocesos tienen que esperar y detener la ejecución hasta que se libere el objeto bloqueado.
- Para comprender cómo funciona la clase Monitor en C#, consulte el siguiente diagrama. Como se muestra en la imagen a continuación, tan pronto como un subproceso ejecute el método Enter de la clase Monitor, estará en la cola Ready y, de la misma manera, muchos subprocesos pueden estar allí en la cola Ready. Luego, uno de los subprocesos de la cola lista adquirirá un bloqueo exclusivo en el objeto, ingresará dentro de la sección crítica y ejecutará el código, y en ese momento, ningún otro subproceso podrá tener la oportunidad de ingresar a la sección crítica. Y luego, cuando ejecutamos el método Exit de la clase Monitor, el hilo que se está ejecutando actualmente se moverá a la cola de espera y enviará una señal a los hilos que están en la cola Ready. y uno de los subprocesos de la cola Listo adquirirá el bloqueo, ingresará a la sección Crítica y comenzará a ejecutar el código de la Sección Crítica. Así es como funciona la clase Monitor en C#:

![Cola](https://dotnettutorials.net/wp-content/uploads/2019/07/Monitor-Class-in-C.jpg?ezimgfmt=ng:webp/ngcb1)


#### Método Monitor.Enter(lockObject, ref IslockTaken) en C#:
- Entendamos la otra versión sobrecargada del método Enter. 
- Monitor.Enter(lockObject, ref IslockTaken) adquiere un bloqueo exclusivo en el objeto especificado. Luego establece automáticamente un valor que indica si el bloqueo se realizó o no.
- El segundo parámetro, que es un parámetro booleano, devuelve verdadero si se adquiere el bloqueo; de lo contrario, devuelve falso. La sintaxis para utilizar esta versión sobrecargada se proporciona a continuación:

![Metodo enter](https://dotnettutorials.net/wp-content/uploads/2019/07/Monitor.EnterlockObject-ref-IslockTaken-Method-in-C-1.jpg?ezimgfmt=ng:webp/ngcb1)

- El siguiente ejemplo muestra cómo utilizar el método Enter(lockObject, ref IslockTaken) de la clase Monitor en C#. El siguiente ejemplo es el mismo que el ejemplo anterior excepto que aquí estamos usando la versión sobrecargada del método Enter que toma dos parámetros. El segundo parámetro booleano especifica si el hilo adquiere un bloqueo o no, true indica que adquiere un bloqueo en el objeto y false indica que no adquiere un bloqueo en el objeto y nuevamente en el bloque finalmente estamos comprobando el valor booleano y en consecuencia, estamos liberando el bloqueo:


```csharp
using System;
using System.Threading;
namespace MonitorDemo
{
    class Program
    {
        private static readonly object lockPrintNumberst = new object();

        public static void PrintNumbers()
        {
            Console.WriteLine(Thread.CurrentThread.Name + " Trying to enter into the critical section");
            bool IsLockTaken = false;
            
            try
            {
                Monitor.Enter(lockPrintNumberst, ref IsLockTaken);
                if(IsLockTaken)
                {
                    Console.WriteLine(Thread.CurrentThread.Name + " Entered into the critical section");
                    for (int i = 0; i < 5; i++)
                    {
                        Thread.Sleep(100);
                        Console.Write(i + ",");
                    }
                    Console.WriteLine();
                }
            }
            finally
            {
                if (IsLockTaken)
                {
                    Monitor.Exit(lockPrintNumberst);
                    Console.WriteLine(Thread.CurrentThread.Name + " Exit from critical section");
                }
            }
        }

        static void Main(string[] args)
        {
            Thread[] Threads = new Thread[3];
            for (int i = 0; i < 3; i++)
            {
                Threads[i] = new Thread(PrintNumbers)
                {
                    Name = "Child Thread " + i
                };
            }

            foreach (Thread t in Threads)
            {
                t.Start();
            }

            Console.ReadLine();
        }
    }
}

```
#### Ejemplo para comprender el método TryEnter(Object, TimeSpan, Boolean) de la clase Monitor en C#

- Este método intenta, durante un período de tiempo específico, adquirir un bloqueo exclusivo en el objeto especificado y establece automáticamente un valor que indica si el bloqueo se tomó o no. La sintaxis se proporciona a continuación para utilizar el método TryEnter(Object, TimeSpan, Boolean) de la clase Monitor en C#:


![Metodo EntryEnter](https://dotnettutorials.net/wp-content/uploads/2019/07/TryEnterObject-TimeSpan-Boolean-Method-of-Monitor-Class-in-C.jpg?ezimgfmt=ng:webp/ngcb1)

- Para una mejor comprensión, eche un vistazo al siguiente ejemplo que muestra cómo utilizar el método TryEnter(Object, TimeSpan, Boolean) de la clase Monitor en C#. En el siguiente ejemplo, hemos especificado el tiempo de espera en 1000 milisegundos o puede decir 1 segundo. Si dentro de 1 segundo el hilo no adquiere el bloqueo, entonces no ingresará a la sección crítica :

```csharp
using System;
using System.Threading;

namespace MonitorDemo
{
    class Program
    {
        private static readonly object lockPrintNumbers = new object();

        public static void PrintNumbers()
        {
            TimeSpan timeout = TimeSpan.FromMilliseconds(1000);
            bool lockTaken = false;

            try
            {
                Console.WriteLine(Thread.CurrentThread.Name + " Trying to enter into the critical section");
                Monitor.TryEnter(lockPrintNumbers, timeout, ref lockTaken);
                if (lockTaken)
                {
                    Console.WriteLine(Thread.CurrentThread.Name + " Entered into the critical section");
                    for (int i = 0; i < 5; i++)
                    {
                        Thread.Sleep(100);
                        Console.Write(i + ",");
                    }
                    Console.WriteLine();
                }
                else
                {
                    // El lock was no fue adquirido.
                    Console.WriteLine(Thread.CurrentThread.Name + " Lock was not acquired");
                }
            }
            finally
            {
                // Para asegurarse de que se libere el bloqueo.
                if (lockTaken)
                {
                    Monitor.Exit(lockPrintNumbers);
                    Console.WriteLine(Thread.CurrentThread.Name + " Exit from critical section");
                }
            }
        }

        static void Main(string[] args)
        {
            Thread[] Threads = new Thread[3];
            for (int i = 0; i < 3; i++)
            {
                Threads[i] = new Thread(PrintNumbers)
                {
                    Name = "Child Thread " + i
                };
            }

            foreach (Thread t in Threads)
            {
                t.Start();
            }

            Console.ReadLine();
        }
    }
}

```
:::tip Observación
- La salida puede variar en su máquina. Como puede ver, los tres subprocesos intentan adquirir un bloqueo en el objeto en 1 segundo, y de tres subprocesos, dos adquieren un bloqueo exclusivo en el objeto, mientras que un subproceso no puede adquirir un bloqueo exclusivo y, por lo tanto, ese subproceso no entrará en la sección crítica.
:::


#### Ejemplo para comprender los métodos Wait() y Pulse() de la clase Monitor en C#
- El método Wait() de la clase Monitor se utiliza para liberar el bloqueo de un objeto para permitir que otros subprocesos bloqueen y accedan al objeto. El hilo que llama espera mientras otro hilo accede al objeto. El hilo que llama a wait() permanece en una "cola de espera" , esperando a que alguien le notifique sobre un cambio en el objeto bloqueado para volver a la fila Ready.
- Pulse() se utiliza para notificar a los hilos en espera sobre cambios en el estado de un objeto bloqueado.
- Entendamos esto con un ejemplo en tiempo real. Nuestro requisito comercial es imprimir la secuencia de números pares e impares utilizando 2 subprocesos diferentes. Entonces, un hilo imprimirá los números pares y otro hilo imprimirá los números impares:
   - Hilo T1: 0,2,4,6,8…
   - Hilo T2: 1,3,5,7,9…
   - Salida: 0,1,2,3,4,5,6,7,8,9…
- Para resolver el problema anterior, usemos el mecanismo de señalización usando los métodos Monitor Class Wait() y Pulse() en C#. 
- En el siguiente ejemplo, utilizamos el método Monitor.Wait() para hacer que el subproceso esté en espera y el método Monitor.Pulse() para señalar otro subproceso. El proceso es el siguiente:
  1.	Primero, el hilo par comenzará a imprimir el número en la consola.
  2.	Luego, el hilo par indicará al hilo impar que esté listo para imprimir el número usando el método Monitor.Pulse().
  3.	Luego, el subproceso del evento llamará al método Monitor.Wait() que permitirá que el subproceso actual se bloquee y permitirá que el subproceso impar comience la ejecución.
  4.	Lo mismo también hará el Odd Thread.
  5.	El hilo impar comenzará a imprimir el número en la consola.
  6.	Luego, el hilo impar indicará al hilo par que esté listo para imprimir el número usando el método Monitor.Pulse().
  7.	Luego, el hilo impar llamará al método Monitor.Wait() que permitirá que el hilo actual se bloquee y permitirá que el hilo par comience la ejecución.
  8.	El mismo proceso está en marcha.
- Dado que los subprocesos pares e impares comparten la misma ventana de la consola para imprimir el número, necesitamos bloquear la E/S de la consola. Queremos que la secuencia comience con el número par, por lo que el hilo par debe ejecutarse primero. Una vez que iniciemos el hilo Par, luego debemos hacer una pausa por un momento antes de iniciar el hilo Impar usando el método Sleep() de la clase Thread en C# para evitar cualquier posibilidad de iniciar el hilo Impar primero:


```csharp
using System;
using System.Threading;

namespace odd_even_sequence
{
    class Program
    {
        //Hasta el límite de números se imprimirán en la consola.
        const int numberLimit = 20;

        static readonly object _lockMonitor = new object();

        static void Main(string[] args)
        {
            Thread EvenThread = new Thread(PrintEvenNumbers);
            Thread OddThread = new Thread(PrintOddNumbers);

            //Primero inicie el hilo par.
            EvenThread.Start();

            //Espera durante 10 ms para asegurarte de que se haya iniciado el hilo par.
            //De lo contrario, un hilo extraño puede comenzar primero y dar como resultado una secuencia diferente.
            Thread.Sleep(100);

            //A continuación, inicie el hilo impar.
            OddThread.Start();

            //Espere a que se completen todos los hilos hijos.
            OddThread.Join();
            EvenThread.Join();

            Console.WriteLine("\nMain method completed");
            Console.ReadKey();
        }

        //Función de impresión de números pares
        static void PrintEvenNumbers()
        {
            try
            {
                //Implementar bloqueo ya que la consola se comparte entre dos subprocesos.
                Monitor.Enter(_lockMonitor);
                for (int i = 0; i <= numberLimit; i = i + 2)
                {
                    //Impresión de números pares en la consola
                    Console.Write($"{i} ");

                    //Notificar al hilo extraño que ya terminé, tú haces tu trabajo.
                    //Notifica a un hilo en la cola de espera de un cambio en el
                    //estado del objeto bloqueado.
                    Monitor.Pulse(_lockMonitor);

           

                    bool isLast = false;
                    if (i == numberLimit)
                    {
                        isLast = true;
                    }

                    if (!isLast)
                    {
                        //Esperaré aquí hasta que Odd thread me notifique.
                        //Libera el bloqueo de un objeto y bloquea el hilo actual.
                        //hasta que recupere el  bloqueo.
                        Monitor.Wait(_lockMonitor);
                    }
                }
            }
            finally
            {
                //Libera el bloqueo
                Monitor.Exit(_lockMonitor);
            }

        }

        //Función de impresión de números impares
        static void PrintOddNumbers()
        {
            try
            {
                //Mantenga bloqueado ya que la consola se comparte entre dos subprocesos
                Monitor.Enter(_lockMonitor);
                for (int i = 1; i <= numberLimit; i = i + 2)
                {
                    //Imprimiendo los números impares en la consola
                    Console.Write($"{i} ");

                    //Notificar a un hilo que ya terminé, tú haces tu trabajo.
                    Monitor.Pulse(_lockMonitor);

            

                    bool isLast = false;
                    if (i == numberLimit - 1)
                    {
                        isLast = true;
                    }

                    if (!isLast)
                    {
                        //Esperaré aquí hasta que el hilo par me notifique
                        Monitor.Wait(_lockMonitor);
                    }
                }
            }
            finally
            {
                //liberar bloqueo
                Monitor.Exit(_lockMonitor);
            }
        }
    }
}

```

#### Importante
- La clase Monitor es una clase estática y su instancia no se puede crear.
- El objeto de clase Monitor utiliza los métodos Monitor.Enter, Monitor.TryEnter y Monitor.Exit. Una vez que haya bloqueado una región de código, puede usar los métodos Monitor.Wait, Monitor.Pulse y Monitor.PulseAll.
- Está asociado a un objeto bajo demanda.
- No está vinculado, lo que significa que se puede llamar directamente desde cualquier contexto.


:::tip info
- [Monitor And Lock In C#](https://www.c-sharpcorner.com/UploadFile/de41d6/monitor-and-lock-in-C-Sharp/)
- [Monitor and Lock in C#](https://www.codeproject.com/Tips/788402/Monitor-and-Lock-in-Csharp)
- [Monitor.TryEnter Método](https://learn.microsoft.com/es-es/dotnet/api/system.threading.monitor.tryenter?view=net-7.0)
- [C# Monitor class in multithreading (with examples)](https://www.shekhali.com/c-monitor-class-in-multithreading-with-examples/)
- [Thread.Start Method](https://learn.microsoft.com/en-us/dotnet/api/system.threading.thread.start?view=net-7.0)
- [Monitor Class in C#](https://dotnettutorials.net/lesson/multithreading-using-monitor/)
:::

## Semaphore
- El semáforo(Semaphore) de C# permite que solo un número limitado de subprocesos entren en una sección crítica.
- Semaphore se usa principalmente en escenarios donde tenemos una cantidad limitada de recursos y tenemos que limitar la cantidad de subprocesos que pueden usarlo.

#### ¿Cómo funciona?
- Los semáforos son variables Int32 almacenadas en los recursos de un sistema operativo. Cuando inicializamos el objeto semáforo, lo inicializamos con un número. Este número limita los subprocesos que pueden ingresar a la sección crítica.
- Cuando un hilo entra en una sección crítica, disminuye la variable Int32 en 1 y cuando un hilo sale de una sección crítica, aumenta la variable Int32 en 1.
- Cuando la variable Int32 es 0, ningún hilo puede entrar en una sección crítica.
- A continuación se muestra la sintaxis de la inicialización del semáforo de C#:



```csharp
Semaphore semaphoreObject = new Semaphore(initialCount: 0, maximumCount: 5);
```


- Inicializamos el objeto semáforo con dos parámetros:
  1.	Recuento inicial
  2.	Recuento máximo


- El recuento máximo define cuántos subprocesos máximos pueden ingresar en una sección crítica. InitialCount establece el valor de la variable Int32. Por ejemplo, si establecemos el recuento máximo de 3 y el recuento inicial de 0, eso significa que ya hay 3 subprocesos en la sección crítica. Si configuramos el recuento máximo de 3 y el recuento inicial de 3, eso significa que un máximo de 3 subprocesos puede ingresar a una sección crítica y no hay ningún subproceso actualmente en la sección crítica. 

#### Semáforo usado entre múltiples procesos
- Alternativamente, el semáforo tiene otro constructor que toma una cadena(string) adicional como parámetro. Este parámetro de cadena es una cadena única que se utiliza para usar el semáforo entre múltiples procesos.
- A continuación se muestra la sintaxis para crear un semáforo:

```csharp
Semaphore semaphoreObject = new Semaphore(initialCount: 0, maximumCount: 5, name: "MyUniqueNameApp");
```
#### Método WaitOne
- Los hilos pueden ingresar a la sección crítica utilizando el método WaitOne. Si la variable Int32 mantenida por el semáforo es mayor que 0, entonces permite que ingrese el hilo de llamada.
- A continuación, se muestra la sintaxis para llamar al método WaitOne:

```csharp
semaphoreObject.WaitOne();
```

- En otra sobrecarga del método WaitOne del semáforo, podemos pasar el intervalo de tiempo durante el cual un hilo puede esperar para recibir una señal del semáforo. Si el hilo no ha recibido la señal dentro de un tiempo interno especificado, devuelve   false:

```csharp
bool isSignalled = semaphoreObject.WaitOne(TimeSpan.FromSeconds(4));
```
:::tip Observación
- En el ejemplo anterior, si el hilo que llama no recibe la señal dentro de los 4 segundos especificados, devuelve false. Si recibe señal, devuelve true.
:::


#### Método de liberación
- Cuando un hilo sale de la sección crítica, debe llamar al método Release para incrementar el contador mantenido por el objeto semáforo. Permite que los hilos en espera entren en una sección crítica:

```csharp
semaphoreObject.Release();
```
- De forma predeterminada, el método Release solo incrementa el contador en 1. Eso significa que solo un hilo sale de la sección crítica. También podemos pasar un parámetro al método Release para definir cuántos subprocesos se salen realmente:

```csharp
semaphoreObject.Release(3);
```
:::tip Observación
- En el código anterior, le pasamos el numero  3 como  parámetro al método Release. Esto notificará al objeto semáforo que 3 subprocesos en realidad están saliendo de la sección crítica. Entonces el objeto semáforo incrementa el contador en 3.
:::


#### Ejemplo
- En el siguiente ejemplo se muestra cómo utilizar el objeto semáforo con el objeto Impresora. Tenemos que limitar la cantidad de subprocesos que pueden usar simultáneamente el objeto Impresora. Para eso utilizamos un objeto semáforo con un recuento máximo de 3:

```csharp
class Program
{
    static void Main(string[] args)
    {
        Semaphore semaphoreObject = new Semaphore(initialCount: 3, maximumCount: 3, name: "PrinterApp");
        Printer printerObject = new Printer();

        for (int i = 0; i < 20; ++i)
        {
            int j = i;
            Task.Factory.StartNew(() =>
                {
                    semaphoreObject.WaitOne();
                    printerObject.Print(j);
                    semaphoreObject.Release();
                });
        }
        Console.ReadLine();
    }
}

class Printer
{
    public void Print(int documentToPrint)
    {
        Console.WriteLine("Printing document: " + documentToPrint);
        Thread.Sleep(TimeSpan.FromSeconds(5));
    }
}

```

:::tip Observación
- Inicializamos el objeto de semáforo con 3 recuentos iniciales y un máximo de 3 y le damos un nombre único "PrinterApp". Iniciamos el bucle for con ejecuciones de 0 a 20. Iniciamos subprocesos usando Task.Factory.StartNew().
- Cada hilo llama al método WaitOne del objeto semáforo antes de usar el objeto Impresora. Esto limitará la cantidad de subprocesos que utilizan el objeto Impresora. Después de usar el objeto de impresora, cada hilo llama al método Release para incrementar el contador del semáforo. Esto permite que más hilos entren en una sección crítica.
:::


:::tip info
- [C# Semaphore](https://dotnetpattern.com/threading-semaphore)
- [Semaphore Clase](https://learn.microsoft.com/es-es/dotnet/api/system.threading.semaphore?view=net-7.0)
- [Threading with Semaphore in C#](https://www.c-sharpcorner.com/UploadFile/1d42da/threading-with-semaphore-in-C-Sharp/)
- [Semaphore Class in C#](https://dotnettutorials.net/lesson/semaphore-in-multithreading/)
:::

## ReaderWriterLockSlim
- A veces, tienes varios subprocesos que leen desde un recurso compartido, pero solo unos pocos subprocesos que escriben en él. En este caso, el uso de la declaración lock puede disminuir el rendimiento de la aplicación.
- La razón es que la declaración lock puede impedir que varios subprocesos lean el recurso compartido, aunque estos subprocesos no necesiten acceso exclusivo.
- La clase ReaderWriterLockSlim permite que varios subprocesos lean el recurso compartido simultáneamente, pero solo un subproceso escriba en él a la vez. Por lo tanto, ReaderWriterLockSlim puede ayudar a mejorar el rendimiento en comparación con la declaración lock.
- ReaderWriterLockSlim tiene  dos tipos de bloqueo:
   - Bloqueo de  escritura
   - Bloqueo de lectura
- ReaderWriterLockSlim permite que varios subprocesos adquieran el bloqueo de lectura al mismo tiempo, siempre que ningún subproceso adquiera el bloqueo de escritura.
- Además, solo permite que un subproceso adquiera el bloqueo de escritura a la vez y bloquea a otros subprocesos para que no intenten adquirir el bloqueo de lectura o de escritura.
- En la práctica, ReaderWriterLockSlim es útil para escenarios en los que sus aplicaciones tienen varios lectores y menos escritores.
- Debe usarlo cuando los beneficios del acceso concurrente sean mayores que el costo de adquirir y liberar el bloqueo.

#### Ejemplo
- El siguiente programa demuestra cómo utilizar el bjeto ReaderWriterLockSlimo para controlar el acceso simultáneo a una variable compartida con cinco lectores y dos escritores:

```csharp
using static System.Console;

int counter = 0;
ReaderWriterLockSlim _lock = new();

void Read()
{
    while (true)
    {

        try
        {
            _lock.EnterReadLock();
            WriteLine($"R: Thread {Thread.CurrentThread.ManagedThreadId} is reading: {counter}");
        }
        finally
        {
            _lock.ExitReadLock();
        }

        Thread.Sleep(500);
    }
}

void Write()
{
    while (true)
    {
        try
        {
            _lock.EnterWriteLock();
            WriteLine($"W: Thread {Thread.CurrentThread.ManagedThreadId} is writing: {counter++}");
        }
        finally
        {
            _lock.ExitWriteLock();
        }

        Thread.Sleep(2000);
    }
}



for (int i = 0; i < 5; i++)
{
    new Thread(() => Read()).Start();
}


for (int i = 0; i < 2; i++)
{
    new Thread(() => Write()).Start();
}

```
#### Explicación del ejemplo
- Primero, declara una variable int counter:

```csharp
int counter = 0;
```
- En segundo lugar, cree un nuevo objeto  ReaderWriterLockSlim llamado _lock:

```csharp
ReaderWriterLockSlim _lock = new();
```
- En tercer lugar, define el  método  Reader() que adquiere un bloqueo de lectura en el objeto _lock llamando al  método  EnterReadLock() en el bloque try:

```csharp
void Read()
{
    while (true)
    {

        try
        {
            _lock.EnterReadLock();
            WriteLine($"R: Thread {Thread.CurrentThread.ManagedThreadId} is reading: {counter}");
        }
        finally
        {
            _lock.ExitReadLock();
        }

        Thread.Sleep(500);
    }
}

```
:::tip Observación
- El método  Read() muestra el valor de la variable counter.
- Además, libera el bloqueo de lectura del objeto _lock en el bloque  finally llamando al método ExitReadLock().
- El método  Read() demora 500 milisegundos, que es medio segundo.
:::

- En cuarto lugar, define el método  Write para aumentar la variable compartida counter:

```csharp
void Write()
{
    while (true)
    {
        try
        {
            _lock.EnterWriteLock();
            WriteLine($"W: Thread {Thread.CurrentThread.ManagedThreadId} is writing: {counter++}");
        }
        finally
        {
            _lock.ExitWriteLock();
        }

        Thread.Sleep(2000);
    }
}

```
:::tip Observación
- El método Write adquiere un bloqueo de escritura en el objeto _lock del bloque try llamando al método EnterWriteLock().
- Después de eso, aumenta  counter en uno y muestra el valor  counter en la consola. El método Write libera el bloqueo de escritura en el bloque  finally llamando al método ExitWriteLock().
- El método Write tiene un retraso de 2000 milisegundos, que son 2 segundos.
:::

- Quinto, cree cinco hilos de lectura y dos hilos de escritura. Los subprocesos lectores ejecutan el método  Read mientras que los subprocesos escritores ejecutan el método Write:

```csharp

for (int i = 0; i < 5; i++)
{
    new Thread(() => Read()).Start();
}


for (int i = 0; i < 2; i++)
{
    new Thread(() => Write()).Start();
}

```

:::tip info

- [C# ReaderWriterLockSlim](https://www.csharptutorial.net/csharp-concurrency/csharp-readerwriterlockslim/)
- [When to Use ReaderWriterLockSlim Over lock in C#](https://code-maze.com/csharp-when-to-use-readerwriterlockslim-over-lock/)
- [Reader-writer lock](https://subscription.packtpub.com/book/programming/9781785286650/1/ch01lvl1sec10/reader-writer-lock)
- [	ReaderWriterLockSlim Class in C# Threading](https://www.c-sharpcorner.com/UploadFile/1d42da/readerwriterlockslim-class-in-C-Sharp-threading/)
- [ReaderWriterLockSlim Class](https://learn.microsoft.com/en-us/dotnet/api/system.threading.readerwriterlockslim?view=net-7.0)
- [ReaderWriterLockSlim Clase](https://learn.microsoft.com/es-es/dotnet/api/system.threading.readerwriterlockslim?view=net-7.0)
- [Reader/Writer Synchronized Threading Model](https://doc.postsharp.net/threading/reader-writer-synchronized)
:::


## SemaphoreSlim
#### Concepto Semáforo
- Un semáforo es un mecanismo para limitar la cantidad de subprocesos que pueden acceder a un recurso compartido simultáneamente.
- El concepto de semáforo se basa en un contador que especifica la cantidad de recursos disponibles.
- Para acceder al recurso compartido, un hilo necesita solicitar un permiso al semáforo.
- Si el permiso está disponible, el semáforo disminuirá el contador. Sin embargo, si el contador es cero, el semáforo se bloqueará hasta que esté disponible un permiso.
- Una vez que el subproceso completa el procesamiento del recurso compartido, debe liberar el permiso al semáforo para que otros subprocesos puedan obtener el permiso. Cuando el hilo libera el permiso, el semáforo incrementa el contador.
- C# tiene dos clases que implementan el concepto de semáforo: Semaphore y SemaphoreSlim.
- La clase Semaphore ha estado disponible desde la primera versión de .NET Framework.  La clase SemaphoreSlim es  más reciente introducida en .NET Framework 4.0 y .NET core.
- La clase SemaphoreSlim es una implementación ligera de la clase Semaphore. Es SemaphoreSlim más rápido y más eficiente en memoria que la clase Semaphore.
- La clase SemaphoreSlim representa una alternativa ligera a Semaphore que limita la cantidad de subprocesos que pueden acceder a un recurso o grupo de recursos simultáneamente.

#### ¿Por qué necesitamos SemaphoreSlim si ya tenemos Lock, Monitor, Mutex y Semaphore en C#?
- Al igual que Lock , Monitor , Mutex y Semaphore , la clase SemaphoreSlim en C# también se utiliza para proporcionar seguridad para subprocesos. El bloqueo(lock) y los monitores se utilizan básicamente para proporcionar seguridad a los subprocesos internos, es decir, los subprocesos generados por la propia aplicación. Por otro lado, Mutex y Semaphore garantizan la seguridad de los subprocesos generados por aplicaciones externas, es decir, subprocesos externos. Al usar Mutex, solo un hilo externo puede acceder al código de nuestra aplicación en un momento dado. Y, si queremos tener más control sobre la cantidad de subprocesos externos que pueden acceder al código de nuestra aplicación, entonces podemos usar Semaphore en C#.
- Al usar Lock and Monitor, solo un hilo interno puede acceder al código de nuestra aplicación en un momento dado. Pero, si queremos tener más control sobre la cantidad de subprocesos internos que pueden acceder al código de nuestra aplicación, entonces necesitamos usar la clase SemaphoreSlim en C#. 
#### ¿Qué es la clase SemaphoreSlim en C#?
- Se recomienda la clase SemaphoreSlim en C# para la sincronización dentro de una sola aplicación. 
- Es un semáforo ligero que controla el acceso a un conjunto de recursos locales de su aplicación. Representa una alternativa ligera a Semaphore que limita la cantidad de subprocesos que pueden acceder a un recurso o grupo de recursos al mismo tiempo.
- La clase SemaphoreSlim es liviana y más rápida que Semaphore, ya que se limita a un solo proceso. 
- El objeto SemaphoreSlim se utiliza para controlar el acceso a un recurso, como llamar a otra API o limitar las operaciones de E/S simultáneamente para evitar problemas innecesarios de red/hardware.
- La clase SemaphoreSlim es la alternativa ligera a Semaphore(nota "Slim"en el nombre). Al crear  una instancia de un nuevo objeto SemaphoreSlim, creamos un semáforo local. La localidad del semáforo indica que solo controla el acceso de otros subprocesos o procesos dentro de la aplicación


#### Cómo utilizar la clase SemaphoreSlim
- Primero, crea un objeto SemaphoreSlim y pasa el número inicial de permisos a su constructor:

```csharp
SemaphoreSlim semaphore = new(3);
```
:::tip Observación
- En este ejemplo, el objeto semáforo tiene un número inicial de 3. Significa que hasta tres subprocesos pueden acceder a recursos compartidos simultáneamente.
:::

- En segundo lugar, llame al método  WaitAsync() del objeto semáforo para solicitar un permiso:

```csharp
await semaphore.WaitAsync();
```
:::tip Observación
- El método  WaitAsync() devuelve un objeto Task que espera a que se conceda el permiso.

:::

- En tercer lugar, llame al método  Release() del objeto semáforo para liberar el permiso una vez que haya completado el acceso al recurso compartido:

```csharp
semaphore.Release();
```

- Es una buena práctica utilizar el bloque  try...finally para garantizar que siempre se llame al método Release()  incluso si se genera una excepción al acceder al recurso compartido:


```csharp
await semaphore.WaitAsync();

try
{
    // Accede al recurso compartido
}
finally
{
    semaphore.Release();
}

```

#### Ejemplo
- El siguiente ejemplo demuestra cómo utilizar la clase  SemaphoreSlim para permitir que un número limitado de tareas puedan acceder al recurso compartido simultáneamente:

```csharp
using static System.Console; 

SemaphoreSlim semaphore = new(3);
int amount = 0;

async Task AccessAsync(int id)
{
    WriteLine($"Task {id} is waiting to access the amount.");
    await semaphore.WaitAsync();

    try
    {
        WriteLine($"Task {id} is now accessing the amount.");


        // Simular algún trabajo
        await Task.Delay(TimeSpan.FromSeconds(1));
        
        // Aumentar el contador
        Interlocked.Increment(ref amount);


        // Completó el trabajo
        WriteLine($"Task {id} has completed accessing the amount {amount}");
    }
    finally
    {
        semaphore.Release();
    }
}


// Inicie 10 tareas para acceder a "amount" al mismo tiempo.
var  tasks = new List<Task>();

for (int i = 1; i <= 10; i++)
{
    tasks.Add(AccessAsync(i));
}

// Esperar a que se completen todas las tareas
await Task.WhenAll(tasks);

WriteLine("All tasks completed.");
ReadLine();

```

#### Cómo funciona
- Primero, cree un objeto SemaphoreSlim que permite que hasta tres tareas accedan al recurso compartido al mismo tiempo:

```csharp
SemaphoreSlim semaphore = new(3);
```

- A continuación, declare la variable  amount que actúa como recurso compartido:

```csharp
int amount = 0;
```
- Luego, defini un método asincrónico AccessAsync que tome un parámetro int id:

```csharp
async Task AccessAsync(int id)
{
    WriteLine($"Task {id} is waiting to access the amount.");
    await semaphore.WaitAsync();

    try
    {
        WriteLine($"Task {id} is now accessing the amount.");


       
        await Task.Delay(TimeSpan.FromSeconds(1));
        
     
        Interlocked.Increment(ref amount);


       
        WriteLine($"Task {id} has completed accessing the amount {amount}");
    }
    finally
    {
        semaphore.Release();
    }
}

```
:::tip Observación
- El método  AccessAsync() simula el acceso a la variable compartida amount utilizando el objeto semáforo.
- La llamada al método WaitAsync() del objeto semáforo es  para esperar a que haya un permiso disponible, incrementa la variable amount usando el método  Increment() de la clase Interlocked y devuelve el permiso al semáforo usando el método  Release() del objeto semáforo.
- El método  AccessAsync() también escribe algunos mensajes en la consola para indicar el inicio y el final de la tarea.
:::
- Después de eso, cree diez tareas que ejecuten el método  AccessAsync y espere a que se completen usando el método  Task.WhenAll():

```csharp

var  tasks = new List<Task>();

for (int i = 1; i <= 10; i++)
{
    tasks.Add(AccessAsync(i));
}


await Task.WhenAll(tasks);

```

- Finalmente, escribi un mensaje a la consola para notificar la finalización de todas las tareas y espere a que el usuario presione una tecla antes de finalizar el programa:


```csharp
WriteLine("All tasks completed.");
ReadLine();

```


:::tip info
- [C# SemaphoreSlim](https://www.csharptutorial.net/csharp-concurrency/csharp-semaphoreslim/)
- [SemaphoreSlim Class in C#](https://dotnettutorials.net/lesson/semaphoreslim-class-in-csharp/)
- [	Understanding Semaphore in .NET Core](https://www.c-sharpcorner.com/article/understanding-semaphore-in-net-core/)
- [SemaphoreSlim Clase](https://learn.microsoft.com/es-es/dotnet/api/system.threading.semaphoreslim?view=net-7.0)
- [SemaphoreSlim Class](https://learn.microsoft.com/en-us/dotnet/api/system.threading.semaphoreslim?view=net-7.0)
- [Interlocked Clase](https://learn.microsoft.com/es-es/dotnet/api/system.threading.interlocked?view=net-7.0)
- [How to Use SemaphoreSlim in C#](https://aaronbos.dev/posts/how-to-use-semaphoreslim-csharp)
:::

## Mutex
- Mutex en C# sirve para proteger recursos compartidos en subprocesos múltiples.

#### ¿Por qué Mutex si ya tenemos Lock and Monitor para la seguridad de subprocesos?

- Mutex también nos ayuda a garantizar que nuestro código sea seguro para subprocesos. Eso significa que cuando ejecutamos nuestro código en un entorno de subprocesos múltiples no terminamos con resultados inconsistentes. 
- Los bloqueos y monitores garantizan la seguridad de los subprocesos que están en proceso, es decir, los subprocesos generados por la propia aplicación, es decir, subprocesos internos. Pero si los subprocesos provienen de OutProcess, es decir, de aplicaciones externas, Locks and Monitors no tiene control sobre ellos.  
- Mutex garantiza la seguridad de los subprocesos para los subprocesos que están fuera de proceso, es decir, los subprocesos generados por las aplicaciones externas, es decir, subprocesos externos.
- Primero comprendamos qué es el proceso externo o los subprocesos externos y luego entenderemos Mutex en C#. Primero creemos una aplicación de consola y luego copiemos y peguemos el siguiente código en ella:

```csharp
using System;
namespace MutexDemo {
  class Program {
    static void Main(string[] args) {
      Console.WriteLine("Application Is Running.......");
      Console.ReadKey();
    }
  }
}

```

- Ahora, cree el proyecto y vaya al directorio bin\Debug del proyecto y allí encontrará el archivo EXE de la aplicación:

![Archivo exe](https://dotnettutorials.net/wp-content/uploads/2019/07/External-Threads-in-C.jpg?ezimgfmt=ng:webp/ngcb1)

- Cuando hace doble clic en el archivo EXE de la aplicación, un hilo externo ejecutará el código de la aplicación. Y ahora, si hace doble clic varias veces, cada vez se creará un nuevo hilo externo y se ejecutará el código de nuestra aplicación como se muestra en la imagen a continuación. Hago doble clic en el EXE tres veces, por lo que tres subprocesos externos acceden a nuestra aplicación al mismo tiempo:


![Ejecución](https://dotnettutorials.net/wp-content/uploads/2019/07/External-Threads-Executing-our-Application-Code.jpg?ezimgfmt=ng:webp/ngcb1)


- Ahora, reescribamos el ejemplo anterior usando la clase C# Mutex y veamos qué sucede cuando intentamos acceder al código de la aplicación varias veces desde afuera usando subprocesos externos.
- Modifique el código del archivo de clase Program.cs de la siguiente manera. Entonces, cuando un hilo externo accede a nuestro código, ningún hilo externo puede acceder al código. El siguiente ejemplo hace exactamente lo mismo usando la clase C# Mutex. Este es uno de los casos de uso de Mutex en C#:


```csharp
using System;
using System.Threading;
namespace MutexDemo {
  class Program {
    static void Main(string[] args) {
      using(Mutex mutex = new Mutex(false, "MutexDemo")) {
        //Comprobar si se está ejecutando otro hilo externo
        if (!mutex.WaitOne(5000, false)) {
          Console.WriteLine("An Instance of the Application is Already Running");
          Console.ReadKey();
          return;
        }
        Console.WriteLine("Application Is Running.......");
        Console.ReadKey();
      }
    }
  }
}

```
- Ahora cierre todas las instancias que se estén ejecutando. Luego cree el proyecto y vaya nuevamente al directorio bin\Debug de proyectos y nuevamente haga clic en el archivo Exe por primera vez. Obtendrá el siguiente resultado:

![Resultado](https://dotnettutorials.net/wp-content/uploads/2019/07/Understanding-Mutex-in-C.jpg?ezimgfmt=ng:webp/ngcb1)

- Ahora, vuelva a hacer clic en el archivo EXE. Esta vez esperará 5 segundos y luego te dará el siguiente mensaje. Esto garantiza que solo un hilo externo pueda acceder al código de nuestra aplicación en un momento dado:

![Segundo Resultado](https://dotnettutorials.net/wp-content/uploads/2019/07/Mutex-in-C-with-Examples.jpg?ezimgfmt=ng:webp/ngcb1)


#### ¿Qué es la clase Mutex en C#?
- Mutex funciona como un candado(lock), es decir, usa un bloqueo exclusivo en un recurso compartido que utilizan varios subprocesos de manera paralela.
- Mutex funciona en múltiples procesos.
- El bloqueo exclusivo se utiliza básicamente para garantizar que, en un momento dado, solo un subproceso pueda ingresar a la sección crítica.
- Cuando dos o más subprocesos necesitan acceder a un recurso compartido al mismo tiempo, el sistema necesita un mecanismo de sincronización para garantizar que solo un subproceso a la vez utilice el recurso. Mutex es un mecanismo de sincronización que otorga acceso exclusivo al recurso compartido a un solo hilo externo. Si un hilo adquiere un mutex, el segundo hilo que quiere adquirir ese mutex se suspende hasta que el primer hilo libere el mutex. 

#### Constructores
- La clase Mutex en C# proporciona los siguientes cuatro constructores que podemos usar para crear una instancia de la clase Mutex.
   1.	Mutex() : Inicializa una nueva instancia de la clase Mutex con propiedades predeterminadas.
   2.	Mutex (bool inicialmenteOwned) : inicializa una nueva instancia de la clase Mutex con un valor booleano que indica si el hilo que llama debe tener la propiedad inicial(bloqueo) del mutex. Si es true, el hilo va a intentar obtener el “bloqueo” que creamos al instanciar el objeto Mutex.
   3.	Mutex (bool inicialmenteOwned, nombre de cadena) : inicializa una nueva instancia de la clase System.Threading.Mutex con un valor booleano que indica si el subproceso que llama debe tener la propiedad inicial(bloqueo) del mutex y una cadena que es el nombre del mutex. 
   4.	Mutex (bool inicialmenteOwned, nombre de cadena, out bool creado Nuevo) : inicializa una nueva instancia de la clase System.Threading.Mutex con un valor booleano que indica si el hilo que llama debe tener la propiedad inicial(bloqueo) del mutex, una cadena que es el nombre. del mutex y un valor booleano que indica si al subproceso que realiza la llamada se le concedió la propiedad inicial(bloqueo) del mutex.


#### Métodos
- La clase Mutex en C# proporciona los siguientes métodos (entre muchos otros):
   -	OpenExisting (nombre de cadena): este método se utiliza para abrir el mutex con un nombre especificado si ya existe. Devuelve un objeto que representa el mutex del sistema nombrado. Aquí, el nombre del parámetro especifica el nombre del mutex del sistema que se abrirá. Lanzará ArgumentException si el nombre es una cadena vacía. -o- el nombre tiene más de 260 caracteres. Lanzará ArgumentNullException si el nombre es nulo.
   -	TryOpenExisting (nombre de cadena, resultado): este método se utiliza para abrir el mutex con nombre especificado, si ya existe, y devuelve un valor que indica si la operación se realizó correctamente. Aquí, el nombre del parámetro especifica el nombre del mutex del sistema que se abrirá. Cuando este método retorna algo, el resultado contiene un objeto Mutex que representa el mutex nombrado si la llamada se realizó correctamente, o nulo si la llamada falló. Este parámetro se trata como no inicializado. Devuelve verdadero si el mutex nombrado se abrió correctamente; en caso contrario, falso.
   - ReleaseMutex(): este método se utiliza para liberar  el Mutex.

#### Ejemplo para comprender Mutex en C# para proteger recursos compartidos en subprocesos múltiples

- El siguiente ejemplo muestra cómo se utiliza un objeto Mutex local para sincronizar el acceso a un recurso protegido. Debido a que cada subproceso que llama está bloqueado hasta que adquiere la propiedad del mutex, debe llamar al método ReleaseMutex para liberar la propiedad del mutex. El código se explica por sí mismo. Entonces, lea las líneas de comentarios:

```csharp
using System;
using System.Threading;

namespace MutexDemo
{
    class Program
    {
        private static Mutex mutex = new Mutex();

        static void Main(string[] args)
        {
            //Crea múltiples hilos para entender Mutex
            for (int i = 1; i <= 5; i++)
            {
                Thread threadObject = new Thread(MutexDemo)
                {
                    Name = "Thread " + i
                };
                threadObject.Start();
            }
            Console.ReadKey();
        }

        //Método para implementar la sincronización usando Mutex
        static void MutexDemo()
        {
            Console.WriteLine(Thread.CurrentThread.Name + " Wants to Enter Critical Section for processing");
            try
            {
                //Bloquea el hilo actual hasta que el método WaitOne actual reciba una señal.  
                //Espere hasta que sea seguro ingresar.. 
                mutex.WaitOne();
                Console.WriteLine("Success: " + Thread.CurrentThread.Name + " is Processing now");
                Thread.Sleep(2000);
                Console.WriteLine("Exit: " + Thread.CurrentThread.Name + " is Completed its task");
            }
            finally
            {
                //Llame al método ReleaseMutex para desbloquear y que otros hilos
                //Que están tratando de obtener la propiedad del mutex puedan ingresar  
                mutex.ReleaseMutex();
            }
        }
    }
}

```
:::tip Observación
- Se utiliza el metodo WaitOne() para obtener la propiedad(bloqueo) del Mutex.
- El subproceso se suspende hasta poder adquirir el bloqueo.

:::
- En el siguiente ejemplo, cada subproceso llama al método WaitOne(Int32) para adquirir el mutex. Si transcurre el intervalo de tiempo de espera, el método devuelve false y el subproceso no adquiere el mutex ni obtiene acceso al recurso. El método ReleaseMutex lo llama únicamente el subproceso que adquiere el mutex. En el siguiente ejemplo, llamamos al método Dispose desde el destructor:


```csharp
using System;
using System.Threading;

namespace MutexDemo
{
    class Program
    {
        private static Mutex mutex = new Mutex();

        static void Main(string[] args)
        {
            //Crea múltiples hilos para entender Mutex
            for (int i = 1; i <= 3; i++)
            {
                Thread threadObject = new Thread(MutexDemo)
                {
                    Name = "Thread " + i
                };
                threadObject.Start();
            }
            Console.ReadKey();
        }

        //Método para implementar la sincronización usando Mutex  
        static void MutexDemo()
        {
            // Espere hasta que sea seguro ingresar y no ingrese si la solicitud caduca..
            Console.WriteLine(Thread.CurrentThread.Name + " Wants to Enter Critical Section for processing");
            if (mutex.WaitOne(1000))
            {
                try
                {
                    Console.WriteLine("Success: " + Thread.CurrentThread.Name + " is Processing now");

                    Thread.Sleep(2000);

                    Console.WriteLine("Exit: " + Thread.CurrentThread.Name + " is Completed its task");
                }
                finally
                {
                    //Llame al método ReleaseMutex para desbloquear y que otros hilos
                    //que están tratando de obtener la propiedad del mutex puedan ingresar
                    mutex.ReleaseMutex();
                    Console.WriteLine(Thread.CurrentThread.Name + " Has Released the mutex");
                }
            }
            else
            {
                Console.WriteLine(Thread.CurrentThread.Name + " will not acquire the mutex");
            }
        }

        ~Program()
        {
            mutex.Dispose();
        }
    }
}

```
#### Ejemplo de método OpenExisting de clase Mutex en C#
- En el siguiente ejemplo, utilizamos el método OpenExisting de la clase Mutex en C#. Si este método genera una excepción, el Mutex  especificado no existe o es inaccesible. El método IsSingleInstance utiliza este comportamiento.
-  Primero, cree una aplicación de consola y copie y pegue el siguiente código:


```csharp
using System;
using System.Threading;
namespace MutexDemo
{
    class Program
    {
        static Mutex _mutex;
        
        static void Main()
        {
            //Si IsSingleInstance devuelve verdadero, continúe con el programa; de lo contrario, salga del programa.
            if (!IsSingleInstance())
            {
                Console.WriteLine("More than one instance"); // Salir del programa.
            }
            else
            {
                Console.WriteLine("One instance"); // Continuar con el programa.
            }
            // Mantente abierto.
            Console.ReadLine();
        }

        static bool IsSingleInstance()
        {
            try
            {
                // Intente abrir Mutex existente.
                //Si Mutex no se abre, se producirá una excepción.
                Mutex.OpenExisting("MyMutex");
            }
            catch
            {
                // Si se produjo una excepción, no existe tal exclusión mutua.
                _mutex = new Mutex(true, "MyMutex");

                // Solo una instancia.
                return true;
            }

            // Mas de una instancia.
            return false;
        }
    }
}

```

- Ahora, cree el proyecto y luego vaya al directorio bin\Debug de proyectos y haga clic en el archivo EXE de la aplicación tres veces y obtendrá los siguientes resultados:


![Resultado](https://dotnettutorials.net/wp-content/uploads/2019/07/Mutex.OpenExisting-Method-Example-in-C.jpg?ezimgfmt=ng:webp/ngcb1)


:::tip
- Mutex solo permite que un hilo externo acceda al código de nuestra aplicación. Pero si queremos tener más control sobre la cantidad de subprocesos externos para acceder al código de nuestra aplicación, entonces necesitamos usar la clase Semaphore en C#.
:::


:::tip info
- [Mutex Clase](https://learn.microsoft.com/es-es/dotnet/api/system.threading.mutex?view=net-7.0)
- [what does the "initial ownership" parameter do in mutex constructor?](https://forums.codeguru.com/showthread.php?389016-what-does-the-quot-initial-ownership-quot-parameter-do-in-mutex-constructor)
- [Mutex Class in C#](https://dotnettutorials.net/lesson/mutex-in-multithreading/)
- [How to Use Mutex in C#](https://code-maze.com/csharp-how-to-use-mutex-class/)
- [Mutex en C# .NET](https://hdeleon.net/mutex-en-c-net/)
- [	Threading with Mutex](https://www.c-sharpcorner.com/UploadFile/1d42da/threading-with-mutex/)

:::

## Atributo Synchronization
- Impone un dominio de sincronización para el contexto (scope) actual y todos los contextos que compartan la misma instancia.
- Realiza la misma función que Monitor, Lock , etc.

#### Problema de la concurrencia
- Cuando crea una aplicación multiproceso, su programa debe garantizar que los datos compartidos estén protegidos de la posibilidad de que varios subprocesos interactúen con su valor. ¿Qué pasaría si varios subprocesos accedieran a los datos en el mismo punto? El CLR puede suspender por un tiempo cualquier hilo que vaya a actualizar el valor o que esté en medio de actualizar el valor y al mismo tiempo un hilo llega a leer ese valor que no está completamente actualizado, ese hilo está leyendo datos incompletos/inestables.
- Para ilustrar el problema de la concurrencia, escribamos una línea de código:


```csharp
class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("----Synchronnization of Threads-----");
        Console.WriteLine("Main Thread {0}", Thread.CurrentThread.ManagedThreadId);
        Printer p = new Printer();

        Thread[] threads = new Thread[5];

        //Cola de 5 hilos
        for (int i = 0; i < 5; i++)
        {
            threads[i] = new Thread(new ThreadStart(p.PrintNumbersNonSync));
        }
        foreach (Thread t in threads)
        {
            t.Start();
        }
        Console.ReadLine();
    }
}

class Printer
{
    public void PrintNumbersNonSync()
    {
        Console.WriteLine(" ");
        Console.WriteLine("Executing Thread {0}", Thread.CurrentThread.ManagedThreadId);
        for (int i = 1; i <= 10; i++)
        {
            Console.Write(i + " ");
        }
    }
}

```
- Ejecute este programa varias veces y observe el resultado.
- Salida 1:

![Salida 1](https://n7b3p4s2.stackpathcdn.com/UploadFile/vendettamit/synchronizing-threads-in-a-multithreaded-application-in-net-C-Sharp/Images/Multithrdng1.gif)
- Salida 2:
  
![Salida 2](https://n7b3p4s2.stackpathcdn.com/UploadFile/vendettamit/synchronizing-threads-in-a-multithreaded-application-in-net-C-Sharp/Images/Multithrdng2.gif)


:::tip Observación
- Como puede ver, todos los resultados variarán cada vez que ejecute el programa.
- Lo que sucede aquí es que todos los subprocesos comparten el mismo objeto de la clase Impresora e intentan ejecutar la misma función al mismo tiempo, por lo que cada vez los datos compartidos se actualizan aleatoriamente, lo cual es un estado inestable.
:::


#### Solución
- Para solucionar este problema, se puede usar Lock:

```csharp
public void PrintNumbersSynchronized()
{
    //Hilo Synchronization 
    lock (this)
    {
        Console.WriteLine(" ");
        Console.WriteLine("Executing Thread {0}", Thread.CurrentThread.ManagedThreadId);

        for (int i = 1; i <= 10; i++)
        {
            Console.Write(i + " ");
        }

    }
}

```
- Sin embargo, si está bloqueando una región de código dentro de un miembro público, es más seguro (y la mejor práctica) declarar un  objeto privado para que sirva como token de bloqueo:


```csharp
class Printer
{
    //  Token Synchronization
    private Object ThreadLock = new object();

    public void PrintNumbersSynchronized()
    {
        //Hilo Synchronization 
        lock (ThreadLock)
        {
            Console.WriteLine(" ");
            Console.WriteLine("Executing Thread {0}", Thread.CurrentThread.ManagedThreadId);
            for (int i = 1; i <= 10; i++)
            {
                Console.Write(i + " ");
            }



        }
    }
}

```

- Se puede solucionar con Monitor:


```csharp
public void PrintNumbersSync()
{
    Monitor.Enter(ThreadLock);
    try
    {
        Console.WriteLine(" ");
        Console.WriteLine("Executing Thread {0}", Thread.CurrentThread.ManagedThreadId);
        for (int i = 1; i <= 10; i++)
        {
            Console.Write(i + " ");
        }
    }
    finally
    {
        Monitor.Exit(ThreadLock);
    }
}

```

#### Podemos usar el atributo Synchronization
- El atributo  Synchronization  es miembro del espacio de nombres System.Runtime.Remoting.Contexts. 
- En esencia, este atributo de nivel de clase, bloquea efectivamente todo el código de la instancia del objeto para la seguridad de los subprocesos. 
- Además, debe derivar su clase de ContextBoundObject para mantener su objeto dentro de los límites contextuales.
- Le indica al CLR que aplique el bloqueo automáticamente.
- Aquí está el código:

```csharp
class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("----Synchronnization of Threads-----");
        Console.WriteLine("Main Thread {0}", Thread.CurrentThread.ManagedThreadId);
        Printer p = new Printer();
        Thread[] threads = new Thread[5];

        //Cola de 5 hilos
        for (int i = 0; i < 5; i++)
        {
            threads[i] = new Thread(new ThreadStart(p.PrintNumbersNonSync));
        }
        foreach (Thread t in threads)
        {
            t.Start();
        }

        Console.ReadLine();
    }
}

[Synchronization]
class Printer : ContextBoundObject
{
    public void PrintNumbersNonSync()
    {
        Console.WriteLine(" ");
        Console.WriteLine("Executing Thread {0}", Thread.CurrentThread.ManagedThreadId);
        for (int i = 1; i <= 10; i++)
        {
            Console.Write(i + " ");
        }
    }
}

```
:::warning
- Este enfoque es una forma perezosa de escribir código seguro para subprocesos porque CLR puede bloquear datos confidenciales sin subprocesos y podría ser víctima de Overclocking. Así que elija este enfoque con prudencia y cuidado.
:::


#### Ejemplo

```csharp
using System;
using System.Threading;
using System.Runtime.Remoting.Contexts;
 
[Synchronization]
public class AutoLock : ContextBoundObject
{
  public void Demo()
  {
    Console.Write ("Start...");
    // Nosotros no nos podemos adelantar aquí
    // ¡Gracias al bloqueo automático!
    Thread.Sleep (1000); 
    Console.WriteLine ("end");     
  } 
}
 
public class Test
{
  public static void Main()
  {
    AutoLock safeInstance = new AutoLock();
    // Llamamos al mismo método tres veces
    new Thread (safeInstance.Demo).Start();     
    new Thread (safeInstance.Demo).Start();     
    safeInstance.Demo();                        
  }
}

```
#### Explicación del ejemplo
- CLR garantiza que solo un subproceso pueda ejecutar el código de la instancia safeInstance a la vez. 
- Para ello, crea un único objeto de sincronización y lo bloquea en cada llamada a cada uno de los métodos o propiedades de safeInstance. 
- El alcance del bloqueo (en este caso, el objeto safeInstance ) se denomina contexto(dominio) de sincronización .
- ContextBoundObject puede considerarse como un objeto "remoto", lo que significa que todas las llamadas a métodos son interceptadas. Para hacer posible esta interceptación, cuando creamos una instancia AutoLock, el CLR en realidad devuelve un proxy: un objeto con los mismos métodos y propiedades de un objeto  AutoLock , que actúa como intermediario. Es a través de este intermediario que se produce el bloqueo automático. En general, la interceptación agrega alrededor de un microsegundo a cada llamada al método.

:::tip Proxy
- Un proxy es un equipo informático que hace de intermediario entre las conexiones de un cliente y un servidor de destino, filtrando todos los paquetes entre ambos. Siendo tú el cliente, esto quiere decir que el proxy recibe tus peticiones de acceder a una u otra página, y se encarga de transmitírselas al servidor de la web para que esta no sepa que lo estás haciendo tú.
:::

- La sincronización automática no se puede utilizar para proteger miembros de tipos estáticos ni clases que no se deriven de ContextBoundObject (por ejemplo, un Windows Form).
- El bloqueo se aplica internamente de la misma manera. Es de esperar que el siguiente ejemplo produzca el mismo resultado que el anterior:


```csharp
[Synchronization]
public class AutoLock : ContextBoundObject
{
  public void Demo()
  {
    Console.Write ("Start...");
    Thread.Sleep (1000);
    Console.WriteLine ("end");
  }
 
  public void Test()
  {
    new Thread (Demo).Start();
    new Thread (Demo).Start();
    new Thread (Demo).Start();
    Console.ReadLine();
  }
 
  public static void Main()
  {
    new AutoLock().Test();
  }
}

```

:::tip Observación
- Nótese que hemos colado un Console.ReadLine  al final del Test(). Debido a que solo un hilo puede ejecutar código a la vez en un objeto de esta clase, los tres nuevos hilos permanecerán bloqueados en el método Demo hasta que Test finalice, lo que requiere que ReadLine se complete. Por lo tanto terminamos con el mismo resultado que antes, pero sólo después de presionar la tecla Enter. ¡Este es un martillo de seguridad para subprocesos casi lo suficientemente grande como para impedir cualquier subproceso múltiple útil dentro de una clase!
:::

#### Extender contexto de sincronización
- Todavia , no hemos resuelto un problema.
- Necesitaríamos un bloqueo alrededor de una declaración como la siguiente, suponiendo que se ejecutara desde otra clase:

```csharp
if (safeInstance.Count > 0) safeInstance.RemoveAt (0);
```

- Un contexto de sincronización (dominio de sincronización) puede extenderse más allá del alcance de un solo objeto. De forma predeterminada, si se crea una instancia de un objeto sincronizado desde el código de otro, ambos comparten el mismo contexto (en otras palabras, ¡un gran candado!). Este comportamiento se puede cambiar especificando un número entero como parámetro del atributo.
- El numero corresponde a una constante de la clase SynchronizationAttribute :

| Constante | Significado
| - | - |
|  NOT_SUPPORTED |  Es el equivalente a no usar el atributo Synchronized.  |
| SUPPORTED |  Se une al contexto de sincronización existente si se crea una instancia desde otro objeto sincronizado; de lo contrario, permanece sin sincronizar.  |
| REQUIRED (default) |  Se une al contexto de sincronización existente si se crea una instancia desde otro objeto sincronizado; de lo contrario, crea un nuevo contexto.  |
| REQUIRES_NEW | Siempre crea un nuevo contexto de sincronización.  |



- Entonces, si un objeto de clase SynchronizedA crea una instancia de un objeto de clase SynchronizedB, se les darán contextos de sincronización separados si SynchronizedB se declara de la siguiente manera:

```csharp
[Synchronization (SynchronizationAttribute.REQUIRES_NEW)]
public class SynchronizedB : ContextBoundObject { ...

```

- Cuanto mayor sea el alcance de un contexto de sincronización, más fácil será de gestionar, pero menor será la oportunidad de una concurrencia útil. En el otro extremo de la escala, los contextos de sincronización separados invitan a estancamientos . Por ejemplo:

```csharp
[Synchronization]
public class Deadlock : ContextBoundObject
{
  public DeadLock Other;
  public void Demo() { Thread.Sleep (1000); Other.Hello(); }
  void Hello()       { Console.WriteLine ("hello");        }
}
 
public class Test
{
  static void Main()
  {
    Deadlock dead1 = new Deadlock();
    Deadlock dead2 = new Deadlock();
    dead1.Other = dead2;
    dead2.Other = dead1;
    new Thread (dead1.Demo).Start();
    dead2.Demo();
  }
}

```

:::tip Observación
- Debido a que cada instancia de Deadlock se crea dentro de Test, una clase no sincronizada, cada instancia obtendrá su propio contexto de sincronización y, por lo tanto, su propio bloqueo. Cuando los dos objetos se invocan entre sí, se produce un punto muerto (¡un segundo, para ser precisos!). 

:::


#### Reentrada
- Un método seguro para subprocesos a veces se denomina reentrante, porque se puede pausar a mitad de su ejecución y luego volver a llamarlo en otro subproceso sin efectos negativos. 
- Se dice que un código es reentrante cuando puede ser utilizado concurrentemente por varios threads sin interferencias entre ellos.
- Se llama reentrante si puede ser interrumpido en medio de su ejecución y volver a llamarse de forma segura antes de que las invocaciones anteriores completen su ejecución.
- El  atributo  Synchronization  se tiene que aplicar con el argumento reentrant  en verdadero:


```csharp
[Synchronization(true)]
```
- Entonces el bloqueo del contexto de sincronización se liberará temporalmente cuando la ejecución abandone el contexto.
- En el ejemplo anterior, esto evitaría que se produjera el punto muerto; obviamente deseable. Sin embargo, un efecto secundario es que, durante este ínterin, cualquier subproceso es libre de llamar a cualquier método en el objeto original ("reingresar" al contexto de sincronización) y desatar las mismas complicaciones del subproceso múltiple que uno está tratando de evitar en primer lugar. Éste es el problema de la reentrada.
- Debido a que [Synchronization(true)] se aplica a nivel de clase, este atributo convierte cada llamada de un método fuera de contexto de la clase en un troyano para reentrada.



:::tip info
- [SynchronizationAttribute Clase](https://learn.microsoft.com/es-es/dotnet/api/system.runtime.remoting.contexts.synchronizationattribute?view=netframework-4.8)
- [Synchronization Attributes](https://bytes.com/topic/c-sharp/answers/830607-synchronization-attributes)
- [Synchronization Context](https://flylib.com/books/en/3.333.1.22/1/)
- [Multithreading in .NET](http://www.diranieh.com/NETThreading/MultithreadingBasics.htm)
- [The Problem "Concurrency"](https://www.c-sharpcorner.com/UploadFile/vendettamit/synchronizing-threads-in-a-multithreaded-application-in-net-C-Sharp/)
- [Synchronization Essentials](https://www.albahari.com/threading/part2.aspx)
:::

## Clase InterLocked
- La clase Interlocked proporciona un conjunto de métodos que le permiten realizar operaciones atómicas en variables compartidas.
- Por ejemplo, si varios subprocesos modifican una variable compartida al mismo tiempo, el valor final de la variable puede ser impredecible o incorrecto.
- La razón es que incrementar una variable no es una operación atómica porque el programa necesita realizar tres pasos:
   -	Primero, lea el valor actual de la variable compartida.
   -	En segundo lugar, aumente el valor.
   -	En tercer lugar, escriba el nuevo valor en la variable compartida.
- Si el subproceso uno está aumentando el valor, pero aún no escribe el nuevo valor en la variable compartida (en el paso 2), el subproceso dos puede leer el valor original y aumentarlo. Como resultado, es posible que se pierda la actualización del hilo uno.
- Para resolver este problema de sincronización, puede utilizar el método  Increment() de la  clase Interlocked para aumentar la variable compartida de forma atómica.
- A diferencia de los incrementos regulares, el método  Interlocked.Increament() incrementa la variable compartida de forma atómica, asegurando que la operación se complete antes de que otro subproceso pueda acceder a la variable.
- El siguiente programa demuestra cómo utilizar la clase  InterLocked para realizar incrementos atómicos de una variable counter compartida en dos subprocesos:


```csharp
int counter = 0;

void Increase()
{
    for (int i = 0; i < 1000000; i++)
    {
        Interlocked.Increment(ref counter);

    }
    Console.WriteLine("The counter is " + counter);
}

Task.Run(() => Increase());
Task.Run(() => Increase());

Console.ReadLine();

```

#### Cómo funciona
- Primero, declare una variable counter e inicialice su valor a cero:


```csharp
int counter = 0;
```
- En segundo lugar, defini una función  Increase() que incrementa  counter  con el método Increment()  de la clase Interlocked en un bucle y muestre el valor  counter en la consola:


```js
void Increase()
{
    for (int i = 0; i < 1000000; i++)
    {
        Interlocked.Increment(ref counter);

    }
    Console.WriteLine("The counter is " + counter);
}

```

- En tercer lugar, cree dos tareas que ejecuten el método  Increase() en subprocesos separados. Ambas tareas (o subprocesos) incrementarán la variable counter simultáneamente:

```csharp
Task.Run(() => Increase());
Task.Run(() => Increase());

```

- Finalmente, use Console.ReadLine() para pausar el programa y dejar suficiente tiempo para que se completen las dos tareas antes de presionar la tecla Intro (o la tecla Intro):

```csharp
Console.ReadLine();
```

#### Ejemplo para entender Interlocked en C#:
- En C#, las Condiciones de Carrera ocurren cuando tenemos una variable compartida por varios subprocesos y estos subprocesos quieren modificar la variable simultáneamente. 
- Una variable es problemática si accedemos a ella en un entorno multiproceso. Incluso aumentar una variable en 1 es problemático. Esto se debe a que la operación no es atómica. Un simple incremento de variable no es una operación atómica.
- De hecho, se divide en tres partes: Lectura, Aumento y Escritura. Dado que tenemos tres operaciones, dos hilos pueden ejecutarlas de tal manera que incluso si aumentamos el valor de una variable dos veces, solo tiene efecto un aumento.
- ¿Qué sucede si dos subprocesos intentan incrementar una variable secuencialmente? Entendamos esto con un ejemplo. Por favor, eche un vistazo a la siguiente tabla. Aquí, tenemos el Hilo 1 en la columna uno y el Hilo 2 en la columna 2. Y al final, una columna de valor representa el valor de la variable compartida. En este caso, el resultado podría ser que el valor final de la variable sea 1 o 2. Veamos una posibilidad:


![Posibilidad 1](https://dotnettutorials.net/wp-content/uploads/2022/06/word-image-27490-1.png?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-1)

![Posibilidad 1 explicación](https://dotnettutorials.net/wp-content/uploads/2022/06/word-image-27490-2.png?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-1)

- El subproceso 1 incrementa el valor, así como el subproceso 2, también incrementa el valor y ambos lo incrementan a 1 en la memoria. Para una mejor comprensión, eche un vistazo a la imagen a continuación:

![Imagen](https://dotnettutorials.net/wp-content/uploads/2022/06/word-image-27490-3.png?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-1)

- Una vez que ambos subprocesos incrementan el valor a 1 en la memoria. Luego, el subproceso 1 vuelve a escribir en la variable 1 y el subproceso 2 también vuelve a escribir en la variable 1, una vez más. Para una mejor comprensión, eche un vistazo a la imagen a continuación:


![imagen 2](https://dotnettutorials.net/wp-content/uploads/2022/06/word-image-27490-4.png?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-1)

- Esto significa que, como puedes ver, dependiendo del orden de ejecución de los métodos, vamos a determinar el valor de la variable. Aunque aumentamos el valor dos veces usando dos subprocesos diferentes porque estábamos en un entorno multiproceso, teníamos una condición de carrera, lo que significa que ahora no tenemos una operación determinista porque a veces podría ser uno y otras veces podría ser dos.
- Para solucionar la condición de carrera, usamos Interlocked o lock.


#### Clase interlocked
- Es una clase estática y, por lo tanto, proporciona muchos métodos estáticos.
- La clase Interlocked pertenece al espacio de nombres System.Threading.
- Entonces, en lugar de usar operadores de suma, resta y asignación, podemos usar los métodos Agregar(Add), Incrementar(Increment), Decrementar(Decrement), Intercambiar(Exchange) y "Comparar y intercambiar(CompareExhange)" de la clase.

#### Ejemplo con el método add()

```csharp
using System;
using System.Threading;
using System.Threading.Tasks;

namespace InterlockedDemo
{
    class Program
    {
        static void Main(string[] args)
        {
            long SumValueWithoutInterlocked = 0;
            long SumValueWithInterlocked = 0;
            Parallel.For(0, 100000, number =>
            {
                SumValueWithoutInterlocked = SumValueWithoutInterlocked + number;
                Interlocked.Add(ref SumValueWithInterlocked, number);
            });
            
            Console.WriteLine($"Sum Value Without Interlocked: {SumValueWithoutInterlocked}");
            Console.WriteLine($"Sum Value With Interlocked: {SumValueWithInterlocked}");
            
            Console.ReadKey();
        }
    }
}

```
:::tip Observación
- El valor de suma con  interlocked siempre le da el mismo resultado, mientras que el valor de suma sin Interlocked le da un resultado diferente. Eso significa que el método Interlocked.Add proporciona seguridad para subprocesos a la variable compartida.
- el bucle Parallel For utiliza subprocesos múltiples.
:::


#### Método Exchange y CompareExchange
- El método Exchange de Interlocked Class en C# consiste en intercambiar atómicamente los valores de las variables especificadas. El segundo valor podría ser un valor o una variable. Para una mejor comprensión, eche un vistazo a la imagen a continuación:

![Imagen 3](https://dotnettutorials.net/wp-content/uploads/2022/06/word-image-27490-9.png?ezimgfmt=ng:webp/ngcb1)

- El método CompareExchange de Interlocked Class en C# se utiliza para combinar dos operaciones. Compara dos valores y almacena el tercer valor en una de las variables. Si ambos valores comparados son iguales, reemplaza el valor de la variable del primer parámetro con el valor del segundo parámetro (tercer valor).
- Para una mejor comprensión, eche un vistazo a la imagen a continuación. Aquí, creamos una variable entera y luego le asignamos el valor 20. Luego llamamos al método Interlocked.CompareExchange para comparar la variable x con 20 y, dado que ambas son iguales, reemplazará x con DateTime.Now.Day, el día actual del mes:

![Imagen 4](https://dotnettutorials.net/wp-content/uploads/2022/06/word-image-27490-10.png?ezimgfmt=ng:webp/ngcb1)
- Ejemplo:


```csharp
using System;
using System.Threading;
namespace InterlockedDemo
{
    class Program
    {
        static long x;
        static void Main(string[] args)
        {
            Thread thread1 = new Thread(new ThreadStart(SomeMethod));
            thread1.Start();
            thread1.Join();

       
            Console.WriteLine(Interlocked.Read(ref Program.x));

            Console.ReadKey();
        }

        static void SomeMethod()
        {
           
            Interlocked.Exchange(ref Program.x, 20);

        
            long result = Interlocked.CompareExchange(ref Program.x, 50, 20);

       
            Console.WriteLine(result);
        }
    }
}

```

#### Interlocked vs lock
- Ambos permiten la sincronización de subprocesos y evitan condiciones de carrera cuando varios subprocesos intentan acceder a la misma variable compartida al mismo tiempo. Pero tienen algunas diferencias:
   -	Interlocked solo proporciona operaciones atómicas como Increment, Decrement,Exchange , etc. Estos métodos son útiles cuando necesita realizar operaciones en una variable compartida.
   -	La declaración lock proporciona exclusión mutua que permite que solo un subproceso pueda ejecutar un bloque crítico de código a la vez.
- Puede ejecutar lock en un bloque de código de forma atómica, mientras que Interlocked puede realizar operaciones limitadas en una variable compartida de forma atómica. En otras palabras, Interlocked es más liviano que el lock.
- Por lo tanto, si se logra la misma tarea usando ambos lock y  interlocked, se recomienda usar Interlocked en C#. Sin embargo, en algunas situaciones, Interlocked no funcionará y, en esas situaciones, necesitamos usar lock.
- Entendamos esto con un ejemplo. Por favor, eche un vistazo al siguiente código:

```csharp
using System;
using System.Threading;
using System.Threading.Tasks;

namespace InterlockedDemo
{
    class Program
    {
        static void Main(string[] args)
        {
            long IncrementValue= 0;
            long SumValue = 0;
            Parallel.For(0, 100000, number =>
            {
                Interlocked.Increment(ref IncrementValue);
                Interlocked.Add(ref SumValue, IncrementValue);
            });
            
            Console.WriteLine($"Increment Value With Interlocked: {IncrementValue}");
            Console.WriteLine($"Sum Value With Interlocked: {SumValue}");

            Console.ReadKey();
        }
    }
}

```

- Como puede ver en el resultado anterior, obtenemos diferentes valores de suma incluso después de usar Interlocked. ¿ Por qué ? Esto se debe a que existe una condición de carrera. Entonces podrías estar pensando que estamos usando el método Interlocked.Add y que no debería haber ninguna condición de carrera. ¿Bien? Pero existe una condición de carrera debido a lo siguiente.

![Imagen que explica](https://dotnettutorials.net/wp-content/uploads/2022/06/word-image-27490-13.png?ezimgfmt=ng:webp/ngcb1)

- Los métodos Increment y Add individualmente son seguros para subprocesos, pero la unión de estos dos métodos no es segura para subprocesos.
- Para una mejor comprensión, piense en el código de la siguiente manera. Un hilo comienza a ejecutar el método Increment. Mientras el subproceso viaja al método Add, otro subproceso podría tener la oportunidad de ejecutar el método Increment, que cambiará el IncrementValue nuevamente. Y por lo tanto, el valor de la variable IncrementValue ya se incrementó antes de que el primer hilo tuviera tiempo de hacer esa suma. Entonces, esta es la razón por la cual existe una condición de carrera.
- Entonces, existe una condición de carrera entre estas dos operaciones, es decir, Incrementar y Agregar. Individualmente, ambos son seguros para subprocesos, juntos, no son seguros para subprocesos porque mientras el subproceso uno viaja del método Increment al método Add, múltiples, múltiples, múltiples subprocesos podrían ejecutar el método Increment. Y es por eso que existe una condición de carrera.

#### ¿Cómo resolver la condición de carrera anterior?
- Como tenemos varias operaciones y queremos que sean ejecutadas solo por un hilo a la vez, podemos usar lock. Para utilizar lock, necesitamos crear una instancia de un objeto. Se recomienda tener un objeto dedicado para lock. La idea es que hagamos cerraduras(lock) a base de objetos. 
- Entonces, si hay, digamos, dos subprocesos intentando acceder al bloque de bloqueo, solo un subproceso podrá ingresar mientras el otro espera. Y cuando el subproceso uno sale del bloque de bloqueo, el subproceso dos podrá ingresar al bloque de bloqueo y ejecutar las dos líneas de código:

```csharp
using System;
using System.Threading.Tasks;

namespace InterlockedDemo
{
    class Program
    {
        static object lockObject = new object();

        static void Main(string[] args)
        {
            long IncrementValue= 0;
            long SumValue = 0;
            
            Parallel.For(0, 10000, number =>
            {
                //Before lock Parallel 

                lock(lockObject)
                {
                    IncrementValue++;
                    SumValue += IncrementValue;
                }

                //After lock Parallel 
            });
            
            Console.WriteLine($"Increment Value With lock: {IncrementValue}");
            Console.WriteLine($"Sum Value With lock: {SumValue}");

            Console.ReadKey();
        }
    }
}

```

:::tip info
- [C# Interlocked](https://www.csharptutorial.net/csharp-concurrency/c-interlocked/)
- [Interlocked Class](https://learn.microsoft.com/en-us/dotnet/api/system.threading.interlocked?view=net-7.0)
- [Interlocked Class in c# Threading](https://www.c-sharpcorner.com/UploadFile/1d42da/interlocked-class-in-C-Sharp-threading/)
- [Synchronization with Interlocked in C#](https://duongnt.com/interlocked-synchronization/)
- [Interlocked vs Lock in C#](https://dotnettutorials.net/lesson/interlocked-vs-lock-in-csharp/)
:::

## Region
- Visual Studio .NET nos brinda algunas herramientas muy útiles para mejorar la legibilidad de nuestro código. Una que me gusta especialmente es la directiva #region que nos permite contraer el código de forma personalizada.
- Las regiones se crean en este formato:


```csharp
#region NombreRegión

Tu código aquí

#endregion

```

:::tip Observación
- Todo lo que esté dentro de las directivas será colapsable.
:::

- Ejemplo:

![Ejemplo](https://n7b3p4s2.stackpathcdn.com/article/using-regions-to-improve-code-readability/Images/UsingRegnsImg1.gif)


:::tip Observación
- Todos los “textos en gris” son los nombres de la región. 
- A través del nombre podés desplegar el código que contiene la región.

:::