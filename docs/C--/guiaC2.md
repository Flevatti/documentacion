---
sidebar_position: 7
---
# Conceptos de "C#" - Parte 2

## Action, Func Y Predicate

#### Func y Action
- Los delegados más comunes en C# son el delegado Func y el delegado Action.
- Estas herramientas son extremadamente útiles a la hora de reducir código duplicado, pero para aplicarlas con sabiduría debemos comprenderlas.
- Ambos son tipos de referencia que encapsulan un método. 
- Ambos aceptarán cero o muchos parámetros, y podemos utilizarlos con expresiones lambda o métodos anónimos.

#### Action
- Action&lt;T>, es un delegado genérico que encapsula un método que posee un solo argumento y no retorna un valor. 
- Analicemos la parte simple de la oración, "un método que tiene un solo argumento y no retorna un valor". Es decir, un método void.
- Es decir, un Action&lt;T> nos permite crear un delegado especificando solo el tipo de dato del argumento.
- Ejemplo:
```csharp
delegate void PrintResult(double num);

void EjemploMetodo(double num){
 Console.WriteLine("El resultado es:{0}",num);
}


PrintResult operation = EjemploMetodo;


```

- En cambio, con un action, solo necesitas especificar el tipo de dato del argumento:
```csharp
Action<double> op = EjemploMetodo;
```

#### Func
- Func, es un delegado que encapsula un método con (o sin) parámetros que devuelve un valor.
- Una Func es muy parecida a una action&lt;T>, de hecho, ambos son delegados genéricos, la diferencia es que en el caso de la Func&lt;T>, esta devuelve un valor.
- Veámoslo en un ejemplo:

```csharp
public class Calculator
{
    public int Add(int a, int b) => a + b;
    public int Subtract(int a, int b) => a - b;
    public int Multiply(int a, int b) => a * b;
    public int Divide(int a, int b) => a / b;
}

var FuncCalculator = new Calculator();

Func<int, int, int> add = FuncCalculator.Add;
Func<int, int, int> subtract = FuncCalculator.Subtract;
Func<int, int, int> multiply = FuncCalculator.Multiply;
Func<int, int, int> divide = FuncCalculator.Divide;

Console.WriteLine($"Addition result: {add(4, 2)}");
Console.WriteLine($"Subtraction result: {subtract(4, 2)}");
Console.WriteLine($"Multiplication result: {multiply(4, 2)}");
Console.WriteLine($"Division result: {divide(4, 2)}");

```

:::tip Observación
- El ultimo tipo de dato que especificamos será el tipo de dato que devuelve la función.
- Si solo hay un tipo de dato, es porque no hay parámetros y solo se especifica el tipo de dato que se devuelve.
:::


#### ¿Cuántos parámetros como máximo puede tener un Action&lt;> o Func&lt;>?

- Es posible incluir tantos parámetros como necesitemos.
- Por ejemplo, si quisiéramos guardar la referencia de un método que recibe dos parámetros, una cadena y una fecha, pero no devuelve ningún valor, nuestro delegado seria así por ejemplo:

```csharp
Action<string,DateTime> metodo = (x,y) => Console.WriteLine(x);
```
- Sin embargo, si quisiéramos guardar la referencia a una operación aritmética:

```csharp
Func<int,int,double> operacion = (x,y) => return x/y;
```
:::tip Observación
Como puedes ver, en el caso del delegado Func&lt;>, el ultimo tipo de dato que especificamos será el tipo de dato de retorno de la función y el resto serán los tipos de datos de los parámetros.

:::


:::tip info
- [Entendiendo los delegados Func&lt;> y Action&lt;>](https://www.somostechies.com/entendiendo-los-delegados-func-action/)
- [Action&lt;T> Delegate](https://learn.microsoft.com/en-us/dotnet/api/system.action-1?view=net-7.0)
- [Func&lt;T,TResult> Delegate](https://learn.microsoft.com/en-us/dotnet/api/system.func-2?view=net-7.0)
- [C# - Action Delegate](https://www.tutorialsteacher.com/csharp/csharp-action-delegate)
- [Action and Func Delegates in C# – Explained with Examples](https://www.freecodecamp.org/news/action-and-func-delegates-in-c-sharp/)
:::

#### Predicate
- Un predicado es un delegado que acepta uno o más parámetros genéricos y devuelve un valor booleano.
- Los delegados de predicado se utilizan normalmente para realizar operaciones de búsqueda basadas en un conjunto de criterios.
- Esta es la sintaxis de un delegado de predicado:

```csharp
Predicate<T>
```

- Tenga en cuenta que Predicate&lt;T> es básicamente equivalente a Func&lt;T,bool>.
- Ejemplo:

```csharp
class PredicateExample {
  
    public static bool fun(string mystring)
    {
        if (mystring.Length < 7)
        {
            return true;
        }
        else 
        {
            return false;
        }
    }
  
    static public void Main()
    {
        Predicate<string> val = fun;
        Console.WriteLine(val("This is an Example"));
    }
}

```

:::tip info
- [How to work with Action, Func, and Predicate delegates in C#](https://www.infoworld.com/article/3057152/how-to-work-with-action-func-and-predicate-delegates-in-c-sharp.html)
- [Predicate](https://www.dotnetperls.com/predicate)
- [Cómo trabajar con delegados Action, Func y Predicate en C#.](https://bytespider.eu/como-trabajar-con-delegados-action-func-y-predicate-en-c/)
- [Variance in Delegates (C#)](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/covariance-contravariance/variance-in-delegates)
- [C# Predicate Delegate](https://www.codingninjas.com/studio/library/c-predicate-delegate)
- [Predicate&lt;T> Delegate](https://learn.microsoft.com/en-us/dotnet/api/system.predicate-1?view=net-7.0)
:::


## Métodos anónimos Y Lambda


#### Método anónimo

- Un método anónimo es un método, el cual carece de un nombre.
- Lo que contiene es el cuerpo del método que es lo que ejecutaremos. 
- De hecho, un método anónimo nos ofrece la posibilidad de pasar un bloque de código a un delegado.
- Para lograr todo esto, declararemos el delegado y su firma, y posteriormente indicaremos el código del mismo.
- También debemos tener en cuenta que no tenemos por qué especificar el tipo de dato que devolverá, ya que será inferido dentro del cuerpo del método que lancemos.
- A continuación, la sintaxis correcta para crear un método anónimo:
```csharp
delegate([parámetros de entrada]){ Código; }
```
- Ejemplo con un Predicate:

```csharp
public void TestPredicate()
{
   Predicate<string> predicate = new Predicate<string>(
                     delegate(string email)
                     {
                       string pattern = @"^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$";
                       return Regex.IsMatch(email, pattern);
                      });

   var validEmails = emails.FindAll(predicate);

   foreach (var item in validEmails)
   {
     Console.WriteLine(item);
   }
}

```
:::tip Observación
- Usamos el constructor de la clase Predicate para crear una instancia de esta.
- En el constructor, especificamos el método anónimo que contendrá el predicate.
- El método anónimo tiene el argumento email y el bloque de código definido por las llaves (“{}”).


:::

:::tip

Puede tener la cantidad de argumentos que quieras.
:::

- Otro ejemplo:

```csharp
using System;

namespace AnonymousMethods
{

    public class Program
    {

        private delegate double Mathematical(double value);

        public static void Main(string[] args)
        {
            Console.WriteLine("Started");
            Console.WriteLine();

            Mathematical doublePower = delegate (double value) { return Math.Pow(value, 2); };
            Mathematical halfValue = delegate (double value) { return value / 2; };

            Console.WriteLine(doublePower(3));
            Console.WriteLine(halfValue(3));

            Console.WriteLine();
            Console.WriteLine("Press any key to close");
            Console.ReadKey();
        }

    }

}

```

:::tip Observación
Si observamos este ejemplo, veremos que hemos declarado un delegado (Mathematical), y hemos declarado dos métodos dentro de Main que utilizan el mismo delegado, realiza dos cálculos diferentes. Uno el valor elevado a 2, y otro el valor dividido por 2, obteniendo 9 y 1.5.

:::


#### Lambda
- Una expresión lambda es una función o método anónimo con el que podemos crear  delegados y árboles de expresiones.
- Las expresiones lambda suelen usarse para crear expresiones LINQ.
- Como características generales a la hora de utilizar y crear expresiones lambda, hay que tener en cuenta que debemos indicar los parámetros de entrada.
- Las expresiones lambda nos permiten utilizar una sintaxis concisa y más corta para escribir métodos anónimos.
- A continuación la sintaxis correcta para escribir una expresión lambda:


```csharp
() => expression;
```
:::tip Observación
- Los paréntesis vacíos representan la lista de argumentos del método anónimo (en este caso no tiene argumentos ya que esta vacía).
- “=>” Indica que se trata de una expresión lambda.
- En este caso la expresión lambda es de una sola instrucción.

:::


- Si el método necesita más de una instrucción se deben agregar “{} “de la siguiente manera:


```csharp
() => 
{
  // Instrucción 1;
  // Instrucción 2;
}

```

:::tip Observación
- Pasar parámetros de entrada a un método anónimo con sintaxis de expresión lambda es sumamente sencillo, debemos agregar los argumentos dentro de los paréntesis de la expresión.
- Cuando es un solo argumento podemos omitir los paréntesis y escribir únicamente el nombre del único argumento.
- Otro punto importante es el tipo de los argumentos, podemos agregarlos o dejar que la característica de inferencia de tipos de C# haga el trabajo.
:::

##### Ejemplo

```csharp
// Pasando un solo parámetro
Action<string> action1 = (nombre) => Console.WriteLine($"Hola {nombre}");

// Pasando un solo parámetro sin los paréntesis
Action<string> action2 = nombre => Console.WriteLine($"Hola {nombre}");

// Pasando dos parámetros sin especificar el tipo
Action<int, int> action3 = (a, b) => Console.WriteLine(a + b);

// Pasando dos parámetros especificando el tipo
Action<int, int> action4 = (int a, int b) => Console.WriteLine(a + b);

```

:::tip Mejores Prácticas
Incluir los paréntesis, aunque solo necesitemos un parámetro de entrada para una expresión lambda es una buena práctica ya que hace más legible el código. Naturalmente las expresiones lambda ya son bastante confusas por lo que muchos desarrolladores las incluyen, aunque no sean necesarias.

:::

##### Otro  ejemplo

```csharp
using System;

namespace AnonymousMethods
{

    public class Program
    {

        private delegate double Mathematical(double value);

        public static void Main(string[] args)
        {
            Console.WriteLine("Started");
            Console.WriteLine();

            Mathematical doublePower = (double value) => { return Math.Pow(value, 2); };
            Mathematical halfValue = (double value) => { return value / 2; };

            Console.WriteLine(doublePower(3));
            Console.WriteLine(halfValue(3));

            Console.WriteLine();
            Console.WriteLine("Press any key to close");
            Console.ReadKey();
        }

    }

}

```

- No obstante, las expresiones lambda de este ejemplo, también podrían ser sustituidas por estas otras:

```js
Mathematical doublePower = value => Math.Pow(value, 2);
Mathematical halfValue = value => value / 2;

```

:::tip Observación
[Básicamente son parecidas a las funciones flechas de Javascript.](https://fedeleva.github.io/documentacion/docs/Javascript/basico-2/#arrow-functions)

:::


:::tip info
- [Métodos anónimos y expresiones lambda en C#](https://geeks.ms/jorge/2017/09/21/metodos-anonimos-y-expresiones-lambda-en-c/#:~:text=Un%20m%C3%A9todo%20an%C3%B3nimo%20es%20un,como%20un%20par%C3%A1metro%20de%20delegado)
- [Píldoras de C#: Delegates, Métodos Anónimos, Expresiones Lambda y Eventos](https://dev.to/ebarrioscode/pildoras-de-c-delegates-metodos-anonimos-expresiones-lambda-y-eventos-3ah8)
- [C # método anónimo](https://www.w3big.com/es/csharp/csharp-anonymous-methods.html#gsc.tab=0)
:::


## Dynamic
- C# o .net implementa un tipo de dato llamado Dynamic el cual, como su propio nombre indica nos permite asignarle un valor de forma dinámica. 
- Como sabemos, cuando creamos una variable debemos indicar el tipo de variable que va a ser, o podemos utilizar la palabra clave “var”, la cual se convertirá en tiempo de compilación en el tipo de variable - la cual denominamos variable implícita.
- En el caso de las variables dinámicas, en vez de determinar su valor en tiempo de compilación se determina durante el tiempo de ejecución, o runtime. 

#### Usos
- Para declarar una variable dinámica es tan fácil como indicar la palabra clave dynamic, el nombre de la variable y su asignación:

```csharp
dynamic variableTest = 1;
```
- Del mismo modo, podemos asignarle un string o cualquier otro tipo de dato a una variable de tipo dynamic, como podemos observar.

```csharp
dynamic variableTest = 1;
variableTest = “test”;

```

- Cuando el compilador pasa por la variable lo que hace es convertir ese tipo de dato en Object en la gran mayoría de los casos. 
- Lo que quiere decir que cada vez que le asignamos un valor, cambiará también el tipo de variable(clase) que utiliza el objeto, podemos verlo utilizando la siguiente línea de código:

```csharp
dynamicVariable.GetType().ToString();
```

#### Objeto dinamico
- La palabra clave Dynamic se puede usar para un objeto anónimo.


```csharp
dynamic user = new
{
    Name = "John Doe",
    Age = 42
};
Console.WriteLine(user.Name + " is " + user.Age + " years old");

```

:::tip Observación
- Esto le permite crear un objeto sin definir primero una clase para él. 
- La palabra clave dynamic se puede utilizar para contenerla, pero también la palabra clave var , que podría ser más adecuada en muchas situaciones.
:::

- Con dynamic, puedes agregarle propiedades más adelante, de esta manera:


```csharp

dynamic user = new
{
    Name = "John Doe",
    Age = 42
};
user.HomeTown = "New York";

```


:::warning
- Como no se realiza ninguna comprobación en tiempo de compilación en un tipo de dato dynamic, este código realmente se ejecuta, porque el compilador no valida la existencia de la propiedad HomeTown, pero tan pronto como se alcanza la última línea, te lanzará una excepción. 
- Un tipo dinámico ES muy dinámico, pero no le permite agregar dinámicamente nuevas propiedades. Para eso, puede usar un ExpandObject.
::::


:::tip info
- [Tipo dinámico en C#](https://www.netmentor.es/entrada/dynamic-type-csharp)
- [El tipo dinámico](https://csharp.net-tutorials.com/es/405/tipos-de-datos-/el-tipo-dinamico/)
- [Dynamic Type in C#](https://www.geeksforgeeks.org/dynamic-type-in-c-sharp/)
- [https://www.geeksforgeeks.org/dynamic-type-in-c-sharp/](https://learn.microsoft.com/en-us/dotnet/csharp/advanced-topics/interop/using-type-dynamic)
:::


## Expresiones Linq
- Como programadores, es muy habitual tener que trabajar sobre colecciones de datos por un motivo u otro, seleccionar datos, agruparlos, sumarlos ...
- Una manera muy socorrida de trabajar con este tipo de dato es recorrer la colección. De hecho, es la solución para la gran mayoría de los lenguajes y la que mejor rendimiento nos ofrece.
- Suponiendo que tenemos una lista de enteros, si queremos sumarlos podríamos hacer algo así:
```csharp
var valores = new List<int> {1,2,3,4,5,6,7,8,9};
var suma = 0;
foreach (var valor in valores)
{
    suma += valor;
}

```
- O si por ejemplo, queremos buscar los números que sean pares:

```csharp
var valores = new List<int> {1,2,3,4,5,6,7,8,9};
var pares = new List<int>();
foreach (var valor in valores)
{
    if (valor % 2 == 0)
    {
        pares.Add(valor);
    }
}

```

#### ¿Qué es LINQ?
- Dicho de manera sencilla, LINQ (Language Integrated Query) es un conjunto de extensiones integradas en el lenguaje C#, que nos permite trabajar de manera cómoda y rápida con colecciones de datos, como si de una base de datos se tratase. Es decir, podemos llevar a cabo inserciones, selecciones y borrados, así como operaciones sobre sus elementos.
- Todas estas operaciones las vamos a conseguir muy fácilmente gracias a los métodos de extensión para colecciones que nos ofrece el espacio de nombres "System.Linq" y a las expresiones lambda. Sin ir más lejos, los dos ejemplos anteriores se podrían hacer así:

```csharp
var valores = new List<int> {1,2,3,4,5,6,7,8,9};
var suma = valores.Sum();
var pares = valores.Where(x => x % 2 == 0).ToList();

```
:::tip Observación
- Seguramente te hayas fijado en el ToList() del segundo caso. Esto es porque LINQ siempre nos va a devolver un objeto de tipo IEnumerable&lt;T>, el cual debemos iterar. 
- Hasta que no lo iteremos, la consulta no se ha ejecutado todavía, y solo tenemos una expresión sobre una colección, por eso invocamos ToList() para forzar la ejecución de la consulta.
:::

- Usaremos este ejemplo para explicar las operaciones que se puede hacer con LINQ:

```csharp
public class Alumno
{
    public string Nombre { get; set; }

    public int Nota { get; set; }
}
var alumnos = new List<Alumno>
{
    new Alumno {Nombre = "Pedro",Nota = 5},
    new Alumno {Nombre = "Jorge",Nota = 8},
    new Alumno {Nombre = "Andres",Nota = 3}
};

```

#### Select
- Nos va a permitir hacer una selección sobre la colección de datos, ya sea seleccionándolos todos, solo una parte o transformándolos:

```csharp
var nombresAlumnos = alumnos.Select(x => x.Nombre).ToList();
```

#### Where
- Nos permite seleccionar una colección que cumpla las condiciones especificadas:

```csharp
var alumnosAprobados = alumnos.Where(x => x.Nota >= 5).ToList();
```

#### First/Last
- Esta extensión nos va a permitir obtener respectivamente el primer y el último objeto de la colección. 
- Esto es especialmente útil si la colección está ordenada:

```csharp
var primero = alumnos.First();
var ultimo = alumnos.Last();

```
#### OrderBy

- Gracias a este método, vamos a poder ordenar la colección en base a un criterio de ordenación que le indicamos mediante una expresión lambda. 
- Análogamente, también existe OrderByDescending, el cual va a ordenar la colección de manera inversa según el criterio:

```csharp
var ordenadoMenorAMayor = alumnos.OrderBy(x => x.Nota).ToList();
var ordenadoMayorAMenos = alumnos.OrderByDescending(x => x.Nota).ToList();

```

#### Sum
- Como hemos visto más arriba, nos va a permitir sumar la colección:

```csharp
var sumaNotas = alumnos.Sum(x => x.Nota);
```

#### Max/Min
- Gracias a esta extensión, vamos a poder obtener los valores máximo y mínimo de la colección:

```csharp
var notaMaxima = alumnos.Max(x => x.Nota);
var notaMinima = alumnos.Min(x => x.Nota);

```

#### Average
- Este método nos va a devolver la media aritmética de los valores (numéricos) de los elementos que le indiquemos de la colección:

```csharp
var media = alumnos.Average(x => x.Nota);
```


#### All/Any
- Con este último operador, vamos a poder comprobar si todos o alguno de los valores de la colección cumplen el criterio que le indiquemos:


```csharp
var todosAprobados = alumnos.All(x => x.Nota >= 5);
var algunAprobado = alumnos.Any(x => x.Nota >= 5);

```

#### Sintaxis integrada
- Aunque en los ejemplos anteriores hemos visto el uso directo de los métodos de extensión, otra de las grandes ventajas que tiene LINQ es que permite crear expresiones directamente en el código, de manera similar a si escribiésemos SQL directamente en C#. Por ejemplo:

```csharp
var resultado = from alumno in alumnos
                where alumno.Nota >= 5
                orderby alumno.Nota
                select alumno;

```

:::tip Observación
- Nos devolverá la lista de alumnos que tienen una nota superior a o igual a 5, ordenados por nota ascendentemente.
:::


:::tip SQL
- Sí está familiarizado con SQL, habrá observado que el orden de las cláusulas se invierte respecto al orden de SQL. 
- La cláusula from especifica que “variable” va a contener cada “fila(elemento)” de la colección.
- La cláusula in especifica el origen de datos (la colección), la cláusula where aplica el filtro y la cláusula select especifica que datos queremos obtener de la colección (es como un getter).
:::


#### Ventajas y Desventajas
##### Desventajas
- La principal y única desventaja que tiene, es que es un poco más lenta que si utilizásemos bucles for o foreach para iterar la colección y hacer la operación. 
- Por supuesto esto no es apreciable en prácticamente ninguna situación convencional, pero en entornos donde cada milisegundo cuenta, debes conocer que tiene un impacto.

##### Ventajas
- Por otro lado, las ventajas que nos aporta LINQ son principalmente que el código es más legible, ya que utiliza una sintaxis muy declarativa de lo que está haciendo, y sobre todo, nos ofrece una manera unificada de acceder a datos, sean el tipo que sean, y tengan el origen que tengan. Por ejemplo, podemos utilizar LINQ para trabajar con bases de datos, con XML, con Excel, con objetos en memoria, ¡y hasta con Twitter!

#### Resumiendo
- Pese a que en esta sección solo hemos hecho una pequeña introducción con un resumen reducido de las extensiones más frecuentes que nos aporta LINQ (créeme que muy pequeño... te recomiendo mirar el espacio de nombres y ver todas sus opciones), es una herramienta muy potente. Tanto, que otros lenguajes la han implementado también.


:::tip info
- [Introducción rápida a LINQ con C#: manejar información en memoria nunca fue tan sencillo](https://www.campusmvp.es/recursos/post/introduccion-rapida-a-linq-con-c-sharp.aspx)
- [Conceptos básicos de las expresiones de consultas](https://learn.microsoft.com/es-es/dotnet/csharp/linq/query-expression-basics)
- [Introducción a las consultas LINQ (C#)](https://learn.microsoft.com/es-es/dotnet/csharp/programming-guide/concepts/linq/introduction-to-linq-queries)
- [Escribir consultas LINQ en C#](https://learn.microsoft.com/es-es/dotnet/csharp/linq/write-linq-queries)
- [Language-Integrated Query (LINQ)](https://learn.microsoft.com/es-es/dotnet/csharp/linq/)
:::


## Tipo anónimo

- Un tipo anónimo es una clase que no tiene nombre, lo cual quiere decir que no tenemos esa clase como tal en el código. 
- La gran mayoría de las veces, utilizaremos tipos anónimos cuando realizamos queries. Pero también podemos utilizarlos fuera de las queries, para crear un tipo anónimo.
- Un tipo anónimo se inicializa usando el operador new, en combinación con un inicializador de objetos - en ese sentido, es muy parecido a instanciar una clase, sólo que se omite el nombre de la clase.


#### Ejemplo

```csharp
var equipo = new { Nombre = "Real Betis", Ligas = 1 };
```

:::tip Observación
- Como podemos observar el objeto que hemos creado es un objeto llamado equipo el cual tiene dos propiedades, Nombre y Ligas.
- Cuando asignamos un valor a estas propiedades, el compilador automáticamente detecta el tipo que van a ser basándose en el valor que asignamos a la propiedad. En este caso nombre será un string y Ligas será un int.
:::

- Posteriormente si queremos acceder a sus propiedades únicamente debemos escribir el nombre de la variable y su propiedad utilizando el punto:


```csharp
string nombreEquipo = Equipo.Nombre;
```


#### Enviar un tipo anónimo como parametro


- Los tipos anónimos no tienen tipo como tal, por lo que, para enviarlo a un método, debemos utilizar en ese método el tipo dynamic pero nos puede dar muchos errores en tiempo de ejecución, ya que el compilador no comprueba que el tipo que pasemos sea el correcto. 
- Ejemplo:

```csharp
public void test(dynamic equipo)
{
    var t = equipo.Nombre;
}

```



:::warning
 - Enviar tipos anónimos como parámetro no es una buena práctica que se deba hacer. 
:::

#### Limitaciones
- Hay varias limitaciones que debe tener en cuenta cuando considere la posibilidad de utilizar un tipo anónimo en lugar de definir una clase:
  -	A diferencia de una clase real, un tipo anónimo no puede tener campos o métodos - sólo propiedades.
  -	Una vez que el objeto ha sido inicializado, no puedes añadirle nuevas propiedades.
  -	Las propiedades son de sólo lectura - tan pronto como el objeto se ha inicializado, no se pueden cambiar sus valores.


- Pero dicho esto, los tipos anónimos siguen siendo extremadamente prácticos para muchas tareas. Un escenario de uso común es cuando se tiene un objeto complejo (de una clase definida) y se necesita simplificarlo, por ejemplo, porque que tengas que mantener el objeto lo más pequeño posible para enviarlo a un navegador o tal vez porque el objeto completo tiene información sensible que no se quiere exponer al consumidor. Los tipos anónimos son excelentes para esto, como se ilustra en el siguiente ejemplo:


```csharp
using System;
using System.IO;

namespace AnonymousTypes
{
    class Program
    {
    static void Main(string[] args)
    {
        string pathOfExe = System.Reflection.Assembly.GetEntryAssembly().Location;
        FileInfo fileInfo = new FileInfo(pathOfExe);
        var simpleFileInfo = new
        {
        Filename = fileInfo.Name,
        FileSize = fileInfo.Length
        };
        Console.WriteLine("File name: " + simpleFileInfo.Filename + ". Size: " + simpleFileInfo.FileSize + " bytes");
    }
    }
}

```

:::tip Observación
- La primera línea simplemente nos dará el nombre del archivo que se está ejecutando actualmente, es decir, nuestra propia aplicación. 
- Lo usamos para crear una instancia de la clase FileInfo, que luego contendrá MUCHA información sobre este archivo específico. 
- No queremos toda esa información, así que creamos una versión simplificada de la misma con un tipo anónimo, usando la información de la instancia original de FileInfo. 
- En la última línea, usamos esta información para obtener una salida básica.


:::


- Probablemente han notado que damos un nombre a cada una de las propiedades definidas en nuestro tipo anónimo (Filename and FileSize) - eso tiene bastante sentido, ya que queremos acceder a ellas más tarde.
-  Sin embargo, cuando basamos nuestro objeto en información de un objeto existente, podemos dejar de lado nuestro propio nombre y dejar que el compilador utilice el nombre de la propiedad que le asignamos, así:


```csharp
var simpleFileInfo = new
{
    fileInfo.Name,
    fileInfo.Length
};

```

:::tip Observación
Ahora, tenemos dos propiedades llamadas Name y Length, en lugar de Filename y FileSize. Una muy buena conveniencia, si no te importan los nombres o tal vez más probable: Si realmente prefieres los mismos nombres que el objeto original.
:::


:::tip info
- [Tipos anónimos en C#](https://www.netmentor.es/entrada/tipos-anonimos-csharp)
- [Anonymous types](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/types/anonymous-types)
- [Tipos Anónimos](https://csharp.net-tutorials.com/es/410/tipos-de-datos-/tipos-anonimos-/)
- [Tipos anónimos en C#](https://thatcsharpguy.com/post/tipos-anonimos-en-c)
- [Conversión de un tipo anónimo en clase](https://learn.microsoft.com/es-es/visualstudio/ide/reference/convert-anonymous-type-to-class?view=vs-2022)
:::


## Arboles de expresiones
- El tipo de dato **Expression** no es un tipo de dato convencional, no es algo que le mostrarás al usuario final de tu app en la pantalla. Más bien es un tipo de dato diseñado para ser usado por otros desarrolladores. 
- Este tipo de dato fue introducido junto con LINQ en .NET 3.5. Seguramente tu mismo lo has usado sin darte cuenta, el lugar más común para encontrarlo es como parámetro del método de extensión Where de cualquier colección que implementa la interfaz IQueryable:


![Expression](https://thatcsharpguy.github.io/postimages//aprende-c-sharp/expressions/inwhere.jpg)


:::tip ¿No es una expresión lambda?
“¡Pero si eso es una expresión lambda!” podrías decirme… y tendrías toda la razón, sin embargo, existe una conversión implícita entre Expression&lt;TipoDeDelegate> y una expresión lambda, que es lo que generalmente vemos nosotros como desarrolladores.
:::

#### ¿Y luego?

- Las expresiones permiten inspeccionar el código que forma determinada expresión lambda. Por ejemplo, de la imagen anterior podríamos saber que la expresión lambda recibe un parámetro llamado a que es del tipo entero, que se realiza una operación y que se compara contra cero el resultado. Todo esto sin necesidad de compilar el código ni nada por el estilo.

#### Trabajando con la expresión
- Los tipos Expression fueron creados con la intención de ser usados con delegados, así que para comenzar a usarlos es necesario especificar qué tipo de delegado está esperando la expresión.
-  Por ahora nosotros vamos a crear un método que inspeccione una expresión lambda que recibe un entero como argumento y devuelve un valor booleano:

```csharp
void Inspecciona(Expression<Func<int, bool>> expression)
{
    Console.WriteLine("== Examinando \"" + expression + "\" ==");
    Console.WriteLine("Expresión: " + expression.NodeType);
    var binaryExpression = expression.Body as BinaryExpression;
    if(binaryExpression != null)
    {
        Console.WriteLine("La expresión es " + binaryExpression.NodeType); 					
        Console.WriteLine("Sus componentes son:");
        Console.WriteLine("\tLeft: " + binaryExpression.Left + 
                          " (" +binaryExpression.Left.NodeType  +")");
        Console.WriteLine("\tRight: " + binaryExpression.Right +
                          " (" + binaryExpression.Right.NodeType + ")");
        return;
    }
    var constantExpression = expression.Body as ConstantExpression;
    if(constantExpression != null)
    {
        Console.WriteLine("El cuerpo de la expresión es constante");
        Console.WriteLine("\tValor: " + constantExpression.Value);
        return;
    }
}

```
:::tip Observación
- Lo sé, en el código de arriba ocurren muchas cosas, vamos a ver las más importantes:
   - La expresión  Expression<&lt;Func&lt;int, bool>>  en el argumento del método indica que el método recibe una expresión que envuelva a una expresión lambda con la firma Func<int, bool>
   - Con la propiedad NodeType podemos conocer con qué tipo de expresión estamos trabajando. Esta propiedad está disponible para cualquier tipo de Expression
   - La propiedad Body nos permite acceder al cuerpo de una expresión lambda. Y a su vez, Body es también una expresión, es por eso que primero intento convertirla en una BinaryExpression y luego en una ConstantExpression. Existe una gran lista de tipos de expresiones con los que puedes trabajar.
   - Ahora, después de saber si nuestra expresión es de determinado tipo, se puede acceder a las propiedades de ese tipo en específico. Por ejemplo, las expresiones binarias tienen dos propiedades Left y Right que almacenan referencias a las expresiones que la forman, mientras que una expresión constante tiene la propiedad Value que almacena su verdadero valor.
:::

#### Arboles de expresiones
- En este punto es cuando surgen los árboles de expresiones, si te das cuenta, podemos ir formando un árbol a partir de una expresión lambda, para tratar de demostrar este punto, mira los siguientes ejemplos:


```csharp
Inspecciona((a) => true);
// Resultado:
//== Examinando "a => True" ==
//Expresión: Lambda
//El cuerpo de la expresión es constante
//	Valor: True

```

![Ejemplo 1](https://thatcsharpguy.github.io/postimages//aprende-c-sharp/expressions/constant.png)


```csharp
Inspecciona((a) => a % 2 == 0);
// Resultado:
//== Examinando "a => ((a % 2) == 0)" ==
//Expresión: Lambda
//La expresión es Equal
//Sus componentes son:
//	Left: (a % 2) (Modulo)
//	Right: 0 (Constant)


```

![Ejemplo 2](https://thatcsharpguy.github.io/postimages//aprende-c-sharp/expressions/binarysimple.png)


```csharp
Inspecciona((a) => a % 5 == 0 && Math.Pow(a, 2) % 3 == 0);
// Resultado:
//== Examinando "a => (((a % 5) == 0) AndAlso ((Pow(Convert(a, Double), 2) % 3) == 0))" ==
//Expresión: Lambda
//La expresión es AndAlso
//Sus componentes son:
//	Left: ((a % 5) == 0) (Equal)
//	Right: ((Pow(Convert(a, Double), 2) % 3) == 0) (Equal)


```

![Ejemplo 3](https://thatcsharpguy.github.io/postimages//aprende-c-sharp/expressions/binarycomplex.png)


#### Usos en la vida real

- Sí, ya sé que tal vez no vayas por la vida escribiendo métodos que inspeccionen expresiones lambda. Pero tan solo es necesario que te pongas a pensar que gracias a los árboles de expresiones existen cosas como LINQ to SQL, Entity Framework, LinqToTwitter, entre otros.
- Lo que hacen estas librerías es tomar tu código C# en forma de expresiones, inspeccionarlo y “traducirlo” a SQL para hacer que tus consultas sean lo más eficientes posible aprovechando el poder de la base de datos. En el caso de LinqToTwitter sucede algo similar, solo que la “traducción” transforma tu código C# en una URL lista para ser consumida.
- En cierto sentido podrías ver a una Expression&lt;TipoDeDelegate> como un bloque de código no compilado del que podemos obtener información acerca de cómo se comporta en tiempo de ejecución. Algo parecido a lo que se puede lograr con la reflexión pero con la certidumbre de que el código con el que estás trabajando, es válido.


:::tip info
- [Árboles de expresiones en C#](https://thatcsharpguy.github.io/post/expression-trees-c-sharp/)
- [Los árboles de expresiones en C# 3.0](https://www.elguille.info/net/futuro/firmas_octavio_ArbolesExpresiones.htm)
- [Creación de árboles de expresión](https://learn.microsoft.com/es-es/dotnet/csharp/advanced-topics/expression-trees/expression-trees-building)
:::

## Palabra clave "Var"

- A partir de la versión 3.0 de C #, puede usar la palabra clave var, en lugar de declarar explícitamente el tipo de la variable.
- La palabra clave var permite declarar una variable local (dentro de un método, un bucle, etc) sin indicar explícitamente el tipo de dato.
- La inicialización de la variable le indicara a C# qué tipo de dato es la variable.
- Esto solo es posible dentro de un método, no a nivel de clase, donde siempre se debe especificar el tipo. Veamos cómo se ve cuando usa la palabra clave var:


```csharp
int age = 42; 

var name = "John Doe"; 

```
:::tip Observación
- Dos variables - la primera es declarada con el tipo int, mientras que la segunda es declarada con la palabra clave var, en vez de especificarla como string. 
- Observe que en ambos casos se asigna un valor:
  - Esto no es requerido cuando se declara un tipo específico.
  - Es requerido cuando se usa la palabra clave var.  La razón es que el compilador de C# deducirá el tipo de dato, mirando lo que está tratando de asignar a la variable durante la compilación y luego cambia la palabra clave var al tipo apropiado.

:::

:::tip
No hay gastos generales cuando se usa la palabra clave var - es tan rápido durante el tiempo de ejecución como una variable declarada explícitamente, porque eso es esencialmente lo que es cuando .NET Framework ejecuta su código.

:::

- Una vez que el compilador identifica el tipo de dato, es fijo e inmutable.  Por ejemplo, no puedes asignar un número entero a la variable message que  es de tipo  String:

```csharp
var message = "Hola";
message = 100; // error

```
- C# solo permite usar la palabra clave var con una variable que incluye una inicialización. Lo siguiente resultará en un error:

```csharp
var amount;
```

#### Tipos anónimos
- Hasta ahora, los ejemplos que hemos visto con la palabra clave var son agradables de tener y más cortos de escribir, pero no son realmente un requisito. Sin embargo, cuando se trabaja con tipos anónimos, tiene sentido declarar sus objetos con la palabra clave var:


```csharp
var myObj = new
{
    Name = "John Doe",
    Age = 42
};
Console.WriteLine(myObj.Name);

```

:::tip info
- [Implicitly typed local variables (C# Programming Guide)](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/implicitly-typed-local-variables)
- [Introducción a la palabra clave var de C#](https://estradawebgroup.com/Post/-Que-tipo-de-variable-es-var-en-C--y-cuando-usar-/20548#:~:text=Introducci%C3%B3n%20a%20la%20palabra%20clave%20var%20de%20C%23&text=La%20palabra%20clave%20var%20permite,parte%20derecha%20de%20la%20declaraci%C3%B3n)
- [Implicitly typed local variables (C# Programming Guide)](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/implicitly-typed-local-variables)
- [Variables de tipo Implícito (la palabra clave var)](https://csharp.net-tutorials.com/es/402/tipos-de-datos-/variables-de-tipo-implicito-la-palabra-clave-var/)
:::


## Foreach

- El foreach es una herramienta utilizada mayoritariamente para recuperar la información que contiene las colecciones, arrays o listas, es decir objetos que pueden contener más de un valor almacenado, veamos su sintaxis:


```csharp
foreach(tipoDato nombre in array/coleccion/lista/etc)
{
... instrucciones ...
}

```

- Primero definiremos una variable con un tipo de dato que debe coincidir con el tipo de dato que vamos a recuperar (obtener), por ejemplo, si el array fuera de tipo int la variable debe ser de tipo int, si tuvieramos una lista deberiamos respetar el tipo que le asignamos a la lista, por ejemplo si fuera de tipo string, es decir:

```csharp
List<string> milista;
```

- Cuando usemos el foreach debería ser de la siguiente manera:

```csharp
foreach(string elemento in milista) { 
... instrucciones ... 
}

```

- Su uso es bien simple, un poco menos complejo que en for pero más limitado ya que solo se usa para recuperar elementos de una colección.


#### Ejemplo


```csharp
string[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
foreach (string i in cars) 
{
  Console.WriteLine(i);
}

```


:::tip info
- [C# Foreach Loop](https://www.w3schools.com/cs/cs_foreach_loop.php)
- [C# / foreach](https://tinchicus.com/2020/09/16/c-foreach/)
:::


## Métodos de extensión

- Un método extensor es una forma de “añadirle (extender)“ métodos a una clase sin necesidad de hacerlo en la original o en alguna instancia/copia de la misma. No es un reemplazo de la técnica formal por medio de herencia, si no una pequeña “trampa” que nos permite obtener un resultado muy similar.
- Son métodos estáticos, pero se les llama como un método de instancia.
- Los métodos de extensión deben definirse en una clase estática no genérica y estos métodos deben de ser estáticos. El primer argumento especifica en que clase funciona el método, y el argumento debe estar precedido del modificador this. Nuestro método de extensión no debe coincidir en nombre ni en firma con los métodos de la propia clase que estamos extendiendo.
- A la hora de definirlos, los métodos de extensión tienen el mismo aspecto que los métodos estáticos, con la diferencia de que su primer argumento lleva antepuesta la palabra clave this (que en este contexto no tiene nada que ver con el this que habitualmente utilizamos para tomar una referencia a la instancia actual).
- A la hora de llamar al método, no escribimos ese parámetro. En su lugar, el compilador toma la instancia del objeto sobre la que estamos llamando al método. 


#### Ejemplo

- Creamos la Clase Persona:


```csharp
public class Persona
 {
     public string Nombre { get; set; }
     public int Edad { get; set; }
 }

```

- Ahora creamos una clase de comprobaciones en donde generaré el método  que se llamará esCorrecto, recibiendo como parámetro un objeto del tipo Persona. Como verás, la primera validación que debo realizar es que persona no sea un objeto nulo. Para ello hago algo tan simple como retornar si el objeto no es nulo:



```csharp
public class Comprobaciones
    {
        public bool esCorrecto(Persona persona)
        {
            return persona != null;
        }
    }

```

###### Extendiendo a Persona
- Crearemos una clase estática llamada Extensores en donde voy a especificar un método estático que tiene la particularidad de extender la clase Persona.

```csharp
public static class Extensores
    {
        public static Boolean IsNotNull(this Persona persona)
        {
            return persona != null;
        }
    }

```
:::tip Observación
- El método IsNotNull extiende (le añade este método) a la clase Persona (lo indicamos mediante la palabra clave this y el nombre de la clase a extender)
- Entonces seria: “this nombreClase nombre”. Con el nombre accedemos a un objeto de nombreClase.
- Todo esto, se ubica como primer argumento.
- Ahora un objeto de la clase Persona, puede llamar a IsNotNull() como si fuera un método de instancia.
:::


:::tip
- A parte del argumento que extiende, se pueden seguir utilizando los argumentos “normales”

:::



- Para llamar al método no se necesita especificar el primer parámetro (el que contiene el this).
- El compilador le asigna la instancia con el cual se llama al método, como valor.

```csharp
   public class Comprobaciones
    {
        public bool esCorrecto(Persona persona)
        {
            return persona.IsNotNull();
        }
    }

```

- Pero si lo piensas un poco, el saber si una clase es nula o no me puede venir muy bien en toda la aplicación en donde tendré muchos más objetos a los que hacer la misma comprobación. O sea que con muy poco esfuerzo puedo extender el propio tipo object y así TODOS mis objetos serán capaces de devolverme si son nulos o no. Incluyendo todas las clases, estructuras, enumeradores, etc. Ya que en C# todo hereda de object:


```csharp
        public static Boolean IsNotNull(this Object objeto)
        {
            return objeto != null;
        }

```
- Así, con un solo método extensor puedo comprobar si la edad o el nombre son nulos de una forma, no solamente sencilla si no muy legible:

```csharp
  public class Comprobaciones
    {
        public bool esCorrecto(Persona persona)
        {
            return persona.Edad.IsNotNull();
        }
    }

```

- Pero vamos a darle una pequeña vuelta de tuerca extendiendo otra vez a la clase Persona para realizar la comprobación de que tiene un nombre válido. Como todos sabemos, en la última versión del framework de .NET podemos hacer dos comprobaciones diferenciadas que nos digan si la cadena de texto es nula, está vacía o es un espacio en blanco. Por lo cual si quiero comprobar si el nombre es válido debo hacer dos llamadas diferenciadas:


```csharp
    public class Comprobaciones
    {
        public bool esCorrecto(Persona persona)
        {
            return string.IsNullOrEmpty(persona.Nombre) == false 
                   && string.IsNullOrWhiteSpace(persona.Nombre);
        }
    }

```

- Ahora creo este método extensor:


```csharp
  public static Boolean NoTieneNombre(this Persona persona)
        {
            return string.IsNullOrEmpty(persona.Nombre) 
                   && string.IsNullOrWhiteSpace(persona.Nombre);
        }

```

- La legibilidad de mi código aumenta mucho y además tengo encapsulado en un solo sitio la lógica de comprobación del campo.
- Es más, así cumplo a rajatabla el concepto de que mi método no debe saber cómo se hacen las cosas, solamente esperar la respuesta adecuada; en este caso un valor booleano:


```csharp
  public class Comprobaciones
    {
        public bool esCorrecto(Persona persona)
        {
            return persona.NoTieneNombre();
        }
    }

```

:::warning
Todo método de extensión debe ser static y debe estar declarado dentro de una clase static:

:::


:::tip
- Se puede extender una clase genérica.
- El método puede ser genérico.


:::



:::tip info
- [Métodos de extensión en C#](https://www.genbeta.com/desarrollo/metodos-de-extension-en-c)
- [Métodos de extensión](https://www.tutorialesprogramacionya.com/csharpya/detalleconcepto.php?codigo=220)
- [Métodos de extensión para C#](https://itblogsogeti.com/2017/07/20/metodos-de-extension-para-c/)
- [Métodos de Extensión en C#](https://www.campusmvp.es/recursos/post/Metodos-de-Extension-en-C.aspx)
- [Extension methods en C#](https://www.netmentor.es/entrada/extension-methods)
:::

## As
- En muchos casos, los desarrolladores necesitan convertir un Objeto (De una clase) en otro Objeto (De otra clase) y, a veces, pueden obtener InvalidCastException.
- Por lo tanto, para superar este tipo de excepciones, C# proporciona la palabra clave as.
- El operador As en C# se utiliza para convertir un tipo (objeto de clase X) en otro tipo (objeto de otra clase).
- Este operador devuelve el objeto cuando es compatible con el tipo(clase) dado y devuelve nulo si la conversión no es posible en lugar de generar una excepción.


#### Sintaxis

```csharp
Expresión(variable/valor) as type(tipo de dato , como una clase , etc).
```
:::tip Observación
- Convierte la expresión en type si es compatible.
- En caso contrario, devuelve null.
:::

- La sintaxis anterior es equivalente al código siguiente. Pero la variable de expresión se evaluará sólo una vez:


```csharp
expression is type ? (type)expression : (type)null
```

#### Ejemplo

```csharp
using System;
using System.Text;
using System.Collections.Generic;
 
class GFG {
     
    
    public static void Main() {
         
        // Una variable con un string
        string str1 = "GFG";
         
        // Una variable con un Object
        object obj1 = str1;
         
        // Convertirmos el Object de la variable obj1 a String
        string str2 = obj1 as string;
         
        // Chequeamos si la conversión fue exitosa
        if(str2 != null)
        {
            Console.WriteLine("Successfully Cast");
        }
         
        // Ahora intentamos convertir el obj1 a una List<String>
        List<string> mylist = obj1 as List<string>;
         
        // // Chequeamos si la conversión fue exitosa
        if(mylist != null)
        {
            Console.WriteLine("Successfully Cast");
        }
        else
        {
            Console.WriteLine("Not Successful");
        }
         
    }
}

```

#### Otro ejemplo

```csharp
var bessie = new Cow();
var bessieAnimal = bessie as Animal;
Console.WriteLine(bessieAnimal is not null);

```

:::tip info
- [C# | as Operator Keyword](https://www.geeksforgeeks.org/c-sharp-as-operator-keyword/)
- [As Operator in C#](https://www.c-sharpcorner.com/uploadfile/mahesh/as-operator-in-C-Sharp/)
- [It Is What It Is and As It Is: Using the Is and As Operators in C#](https://www.pluralsight.com/guides/csharp-is-as-operators-is-expressions)
- [As and Is Operators in C#](https://code-maze.com/csharp-as-is-operators/)
:::

## Reflexión

- La reflexión nos permite acceder a la información de un tipo (tipo de dato) en tiempo de ejecución.
- En C#, la reflexión nos permite inspeccionar y manipular clases, constructores, métodos y campos en tiempo de ejecución.
- Cuando estamos escribiendo el código, somos nosotros quienes tenemos una idea general del sistema: sabemos los tipos de dato de las variables, los métodos que contienen las clases, los miembros de estas y un sin fin de cosas más. Otro elemento que conoce todo de nuestro programa es el compilador, ya que sabe si estamos usando los tipos correctos para llamar a los métodos o tenemos permiso para acceder a determinado miembro de una clase.
- Sin embargo, una vez que se compila, el programa no tiene idea de los tipos de dato, métodos y demás complejidades del programa, por ejemplo, el siguiente programa no sabe que zero es del tipo string:

```csharp
var zero = "0";
```
- No es sino hasta que empleamos la reflexión que el programa tiene acceso a esta información a través de un tipo Type:

```csharp
Type type = zero.GetType();
Console.WriteLine(type); // System.String

```
:::tip Observación
- Con el método GetType() Obtenemos el Type de una instancia o un valor.
:::


:::tip Type
- Type es una clase que representa: tipos de clase, tipos de interfaz, tipos de matriz, tipos de datos, tipos de enumeración, parámetros de tipo, etc.
- Esta clase describe tipos de datos. Almacena información de tipos en una (o varias) variable(s), propiedad(es) o campo(s). La clase Type representa los metadatos del programa (su estructura).
- [Type Class](https://learn.microsoft.com/en-us/dotnet/api/system.type?view=net-7.0)

:::

- También se puede acceder al ensamblado al que pertenece el tipo String:


```csharp
Assembly assembly = type.Assembly;
Console.WriteLine(type.Assembly); // mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089

```

- Y a partir de un ensamblado podemos obtener todos sus tipos con el método GetTypes, en este caso, además de obteneros, también los estamos filtrando, seleccionando solo aquellos cuyo nombre comience con “Int32”:


```csharp
foreach (var ty in assembly.GetTypes()
    .Where(ty.Name.StartsWith("Int32")))
{
    Console.WriteLine(ty);
}

```

:::tip ¿Qué es un assembly? 
Pues dicho con palabras sencillas, es la unidad mínima que el CLR puede ejecutar. Contiene las los módulos, las clases, los tipos… y lo más importante, el manifiesto, que es donde se registran todos los metadatos.
:::

- Otro de las cosas que podemos hacer empleando la reflexión, es instanciar tipos de dato a partir de una instancia de Type y la clase Activator:


```csharp
var int32Type = assembly.GetType("System.Int32");

var createdInt  = Activator.CreateInstance(int32Type);
Console.WriteLine(createdInt); // 0

```

- También podemos obtener todos los atributos de una propiedad. Ejemplo:


```csharp
var phone = new Smartphone();
phone.IsLocked = true;
phone.Carrier = "Entel";

var t = phone.GetType();

var carrierProperty = t.GetProperty("Carrier");

foreach (var att in carrierProperty.GetCustomAttributes())
{
    Console.WriteLine(att);
}

```
- El resultado de ejecutar el código anterior es:

```csharp
RequiredAttribute
ValidCarrierAttribute
DisplayAttribute
```

:::tip Observación
Son los atributos que tiene la propiedad Carrier.

:::

:::tip
- Con los atributos en C# podemos proveer a los programas de metadatos.
- ¡Investigue!


:::

- Y si queremos, podemos hacer cosas un poco más complejas. Por ejemplo, si deseamos encontrar todas las propiedades que tengan DisplayAttribute podemos buscarlas con Linq:


```csharp
var propertiesWithDisplayName = from prop in t.GetProperties()
where prop.GetCustomAttributes<DisplayAttribute>().Any()
select prop;

```

- Para luego mostrar los valores de una manera “amigable”:

```csharp
foreach (var property in propertiesWithDisplayName)
{
    var attr = property.GetCustomAttribute<DisplayAttribute>();
    Console.WriteLine(attr.Name + ": " + property.GetValue(phone));
}

```

- Ejecutar el código anterior dará como resultado:

```csharp
Compañía: Entel
Bloqueado: true

```

- Ya para terminar, otra de las posibilidades que nos da la reflexión en C# es la de modificar los valores de una variable o propiedad en tiempo de ejecución con solo tener su nombre. 
- Toma en cuenta el código siguiente, en donde se solicita al usuario ingresar el nombre de una propiedad y se busca dicha propiedad en el tipo Smartphone:


```csharp
Console.WriteLine("Escribe el nombre de la propiedad a modificar:");
var propertyName = Console.ReadLine();
var propertyToModify = phoneType.GetProperty(propertyName);

```

- Después se verifica que la propiedad exista (el método GetProperty regresa null si no encuentra una propiedad con el nombre indicado) y si existe, solicitamos el nuevo valor para la propiedad:

```csharp
if (propertyToModify != null)
{
    Console.WriteLine("Escribe el valor:");
    var value = Console.ReadLine();
    // Efectuar conversión ... 
}
else
{
    Console.WriteLine("La propiedad " + propertyName + " no existe");
}

```
- Para efectuar la conversión debemos recurrir, nuevamente, a la reflexión. A través del método SetValue y la clase Convert:


```csharp
propertyToModify.SetValue(phone, Convert.ChangeType(value, propertyToModify.PropertyType));
```

#### Otros ejemplos

- Un código como este nos permitiría saber la versión que estamos ejecutando:


```csharp
using System;
using System.Reflection;

namespace PostReflexion
{
    class Program
    {
        static void Main(string[] args)
        {
            var assembly = Assembly.GetAssembly(typeof(Program));
            Console.WriteLine($"Versión: {assembly.GetName().Version}");
        }
    }
}

```
:::tip Observación
- Obtenemos el assembly de otra forma (a traves de la clase estatica Assembly el metodo GetAssembly recibiendo el nombre del progama)


:::
- También podemos obtener todos los tipos (clases, interfaces, enumeraciones….):


```csharp
using System;
using System.Reflection;

namespace PostReflexion
{
    class Program
    {
        static void Main(string[] args)
        {
            var assembly = Assembly.GetAssembly(typeof(Program));
            foreach (var type in assembly.DefinedTypes)
            {
                Console.WriteLine(type);
            }
        }
    }
}

```

- Creamos instancia de clases:

```csharp
var assembly = Assembly.LoadFile("ruta a la librería");
            
//Creamos el objeto de manera dinámica
var formDinamico = assembly.CreateInstance("Nombre completo de la clase") as Form;

//Si hemos podido crear la instancia, abrimos el formulario
formDinamico?.ShowDialog();

```
:::tip Observación
- Con un assembly podemos crear una instancia (con el metodo CreateInstance).
- Con la clase estatica  Assembly podemos crear un assembly y mucho mas!


:::
- Obtenemos información sobre el Enumerable:


```csharp
using System;
using System.Reflection;
class Program
{
    static void Main()
    {
        // get typeof Enumerable and load it to Type variable t     
        Type t = typeof(Enumerable);

        // the Type class properties return information about the Enumerable Type 
        Console.WriteLine("Name : {0}", t.Name);
        Console.WriteLine("Namespace : {0}", t.Namespace);
        Console.WriteLine("Base Type : {0}", t.BaseType);

    }
}

```
:::tip Observación
- Obtenemos el Type de otra forma (Asignándole  el nombre del tipo de dato a una variable de tipo Type)


:::
- Obtenemos información sobre un string:


```csharp
using System;
using System.Reflection;
class Program
{
    static void Main()
    {
        // get typeof String and load it to Type variable t     
        Type t = typeof(String);

        // the Type class properties return information about the String Type 
        Console.WriteLine("Name : {0}", t.Name);
        Console.WriteLine("Namespace : {0}", t.Namespace);
        Console.WriteLine("Base Type : {0}", t.BaseType);

    }
}

```

#### Usos de la reflexión
- Si tu trabajo es el de ser un desarrollador de aplicaciones para usuario final, tal vez no le veas mucho uso a esta poderosa característica, sin embargo, usándola se puede:
   -	Acceder a los metadatos y conocer los atributos de cada uno de los componentes de un programa.
   -	Instanciar clases en tiempo de ejecución.
   -	Tener acceso a métodos, propiedades y cualquier otro miembro privado de los tipos de dato.


:::tip
Es importante señalar que en esta guía doy apenas una mínima introducción a lo que se puede hacer, esperando despertar tu interés. También debes saber que hacer uso de la reflexión hará que un programa se ejecute un poco más lento que si no se usara, ya que se realizan operaciones un poco más complejas.

:::


:::tip info
- [Reflexión en C#](https://thatcsharpguy.github.io/post/reflexion-c-sharp-es/)
- [La potencia de la Reflexión en C# (Parte 2: Ensamblados)](https://www.fixedbuffer.com/la-potencia-de-la-reflexion-en-c-parte-2-ensamblados/)
- [C # reflexión (Reflexión)](https://www.w3big.com/es/csharp/csharp-reflection.html#gsc.tab=0)
- [C# Reflection](https://www.programiz.com/csharp-programming/reflection)
- [How C# Reflection Works With Code Examples](https://stackify.com/what-is-c-reflection/)
:::


## ExpandObject
- ExpandoObject es una clase en C# que proporciona una forma de crear objetos con propiedades dinámicas en tiempo de ejecución. 
- Pertenece al espacio de nombres System.Dynamic. El nombre "ExpandoObject" se deriva de "objeto expandible", lo que indica su capacidad de crecer agregando propiedades y métodos dinámicamente.
- La clase ExpandoObject implementa las interfaces IDictionary&lt;string, object> e ICollection&lt;KeyValuePair&lt;string, object>>, que le permiten comportarse como un diccionario o una colección de pares clave-valor. Proporciona métodos para agregar, eliminar y acceder a propiedades de forma dinámica.
- Una vez que haya agregado propiedades al ExpandoObject, podrá acceder a ellas como si sacara cosas de una bolsa. 
- Puede leer los valores de las propiedades o asignarles nuevos valores. Le brinda la flexibilidad de trabajar con datos que pueden cambiar o tener una estructura desconocida.


#### Adición de propiedades dinámicas
- Puede agregar propiedades a un ExpandoObject dinámicamente usando la notación de puntos (expandoObject.PropertyName = valor).
- Ejemplo:


```csharp
using System;
using System.Dynamic;

class Program
{
    static void Main()
    {
        // Creamos un objeto con ExpandoObject
        dynamic expandoObject = new ExpandoObject();

        // Le añadimos propiedades
        expandoObject.Name = "John";
        expandoObject.Age = 25;

        // Añadimos propiedades con un get personalizado
        ((IDictionary<string, object>)expandoObject).Add("FullName", "John Doe");
        ((IDictionary<string, object>)expandoObject).Add("Greeting", new Func<string>(() => $"Hello, {expandoObject.FullName}!"));

        Console.WriteLine(expandoObject.Name);
        Console.WriteLine(expandoObject.Age);
        Console.WriteLine(expandoObject.FullName);
        Console.WriteLine(expandoObject.Greeting());
    }
}

```

- De la misma forma, podes añadir métodos:

```csharp
employee.SayHello = new Action(() =>
{
    Console.WriteLine($"Hello, {expando.FirstName }!");
});

```
#### Acceso dinámico a la propiedad
- Puede acceder a las propiedades de un ExpandoObject dinámicamente utilizando la notación de puntos (expandoObject.PropertyName).
- Ejemplo:
  
```csharp
using System;
using System.Dynamic;

class Program
{
    static void Main()
    {
        dynamic employee = new ExpandoObject();

        // Añadimos propiedades
        employee.FirstName = "John";
        employee.LastName = "Doe";
        employee.Age = 30;

        // Accedemos a una propedad
        Console.WriteLine($"Employee: {employee.FirstName} {employee.LastName}");
        Console.WriteLine($"Age: {employee.Age}");

        // Añadimos una propiedad que contiene un objeto
        employee.Address = new ExpandoObject();
        employee.Address.Street = "123 Main St";
        employee.Address.City = "New York";
        employee.Address.Country = "USA";

        Console.WriteLine($"Address: {employee.Address.Street}, {employee.Address.City}, {employee.Address.Country}");
    }
}

```

#### Eliminación dinámica de propiedades
- Puede eliminar dinámicamente propiedades de un ExpandoObject utilizando el método Remove de la interfaz IDictionary&lt;cadena, objeto>.
- Ejemplo:

```csharp
using System;
using System.Dynamic;

class Program
{
    static void Main()
    {
        dynamic expandoObject = new ExpandoObject();

    
        expandoObject.Name = "John";
        expandoObject.Age = 25;

        // Borramos una propiedad
        ((IDictionary<string, object>)expandoObject).Remove("Name");

        Console.WriteLine(((IDictionary<string, object>)expandoObject).ContainsKey("Name")); // false
        Console.WriteLine(expandoObject.Age);
    }
}

```
#### Enumeración dinámica de propiedades
- Puede enumerar las propiedades de un ExpandoObject usando foreach o tratándolo como un diccionario o colección.
- Ejemplo:


```csharp
using System;
using System.Collections.Generic;
using System.Dynamic;

class Program
{
    static void Main()
    {
        dynamic employee = new ExpandoObject();

        employee.FirstName = "John";
        employee.LastName = "Doe";
        employee.Age = 30;

        

        IDictionary<string, object> employeeDictionary = (IDictionary<string, object>)employee;
        foreach (KeyValuePair<string, object> property in employeeDictionary)
        {
            Console.WriteLine($"{property.Key}: {property.Value}");
        }
    }
}

```



:::tip
Tiene todos los métodos/propiedades/caracteristicas de las dos interfaces.
:::


#### Resumen
- Un ExpandoObject es como una bolsa flexible donde puedes agregar, eliminar y acceder dinámicamente a diferentes piezas de información sin tener una estructura predefinida. Es útil cuando necesita trabajar con datos que pueden cambiar o desea tener la libertad de personalizar objetos. Ya sea que trabaje con API dinámicas, personalice objetos en tiempo de ejecución o se ocupe de transformaciones de datos dinámicas, ExpandoObject puede ser una herramienta valiosa en su programación en C#.



:::tip info
- [ExpandoObject in C#](https://www.c-sharpcorner.com/blogs/expandoobject-in-c-sharp2)
- [C#: The ExpandoObject](https://mbarkt3sto.hashnode.dev/c-the-expandoobject)
- [Dynamic ExpandoObject in C#](https://coding-examples.com/csharp/dynamic-expandoobject-in-c/)
:::


## Genérico

#### Parametro de tipo genérico

- Es un contenedor para un tipo de dato específico usado al crear una instancia de un objeto. Por convención, los parámetros de tipo genérico vienen prefijados con la letra T y deben ser únicos en la declaración para evitar conflictos de nombres en la implementación.
- Por ejemplo:

```csharp
public class List<T> {
   private T[] elements;
}
```

- Como podemos observar, se puede usar el parámetro de tipo genérico (en nuestro caso T) en cualquier parte en la que se espera un tipo específico.
- En este ejemplo la letra es T, pero puede ser cualquiera. 
- Así, si definimos una lista de enteros de la siguiente forma:

```csharp
List<int> miLista = new List<int>();
```

- Dentro de la implementación, nuestro parámetro de tipo genérico se sustituye por el tipo específico int.

```csharp
private int[] elements;
```



#### Características

#### 1- Default values
- No es posible asignar null a tipos genéricos. La razón es que un tipo genérico también puede ser instanciado como un tipo por valor, y null está permitido solamente con tipos por referencia.
- Para evitar este problema, puede utilizar la palabra clave default. Con la palabra clave default, se asigna null a los reference types y un 0 a los value types.
- Ejemplo:

```csharp
public class MiClase<T> {
    private T value;
 
    public T MiMetodo()
    {
        value = default(T);
        return value;
    }
}

```

#### 2- Constraints
- Se pueden usar restricciones a la hora de definir el parámetro de tipo genérico para cuando se instancie  objetos de la clase genérica.
-  Si a la hora de instanciar una clase, el parámetro de tipo genérico no cumple la restricción establecida, tendremos un error en tiempo de compilación. 
-  Las restricciones se especifican mediante la palabra clave where.
- En la tabla siguiente se muestran los seis tipos de restricción.

| Restricción | Explicación |
| - | - |
|  where T: struct |  El parámetro de tipo debe ser un tipo de valor. |
| where T : class |  El parámetro de tipo debe ser un tipo de referencia. |
| where T : new() | El parámetro de tipo debe tener un constructor público sin parámetros. |
| where T : base_class_name | El parámetro de tipo debe ser la clase base especificada, o bien debe derivarse de la misma. |
| where T : interface_name | El parámetro de tipo debe ser o implementar la interfaz especificada. |
| where T : U | El parámetro de tipo proporcionado para T debe ser o derivar del parámetro proporcionado para U. |


- Se pueden combinar varias restricciones, en el siguiente código tenemos que el parámetro de tipo genérico debe implementar el interfaz IEjemplo y debe tener un constructor sin parámetros:


```csharp
public class MiClase<T> where T: IEjemplo, new() {}
```
#### 3- Inheritance
- Una clase puede implementar un interfaz:

```csharp
public class MiClase<T>: IEnumerable<T> {}
```
- Una clase genérica puede derivar de una clase base genérica a su vez:


```csharp
public class Base<T> {}
public class MiClase<T>: Base<T> {}

```
- El tipo de la clase base también puede especificarse:

```csharp
public class Base<T> {}
public class MiClase<T>: Base<string> {}

```
- Se permite definir una clase abstract como clase genérica base que es implementada con un tipo concreto en la clase derivada:

```csharp
public abstract class Calc<T>;
{
    public abstract T Add(T x, T y);
    public abstract T Sub(T x, T y);
}
public class MiClase: Calc<int>
{
    public override int Add(int x, int y)
    {
        return x + y;
    }
    public override int Sub(int x, int y)
    {
        return x — y;
    }
}

```

#### 4- Static members

- Lo miembros estáticos de clases genéricas requieren especial atención. Sólo se comparten miembros estáticos de una clase genérica con **una** instancia de la clase. Un ejemplo de esto es el siguiente código:

```csharp
public class MiClase<T>	
{
    public static int x;
}
 
MiClase<string>.x = 4; // Es la primera instancia.
MiClase<int>.x = 5; // No afecta , ya que no es la primera  instancia.
Console.WriteLine(MiClase<string>.x); // escribe 4

```

#### Ejemplos
- Los parámetros de tipo genérico, se pueden usar en métodos, interfaces, clases (como el ejemplo anterior), etc.
- Ejemplo con una Clase:

```csharp
public class MiClase<T>
{
   T value;
 
   public MiClase(T t)
   {
      this.value = t;
   }
 
   public void Write()
   {
     Console.WriteLine(this.value);
   }
}

```
:::tip Observación
- Como se puede observar, esta clase tiene un método Write() que nos da igual el tipo de dato sobre el que actuar, escribirá la representación en texto del parámetro enviado al constructor.

:::

##### Interfaces
- Se pueden definir interfaces que tienen métodos con parámetros de tipo genérico.
- Cuando una interfaz tiene una restricción en un parámetro de tipo, sólo se pueden utilizar los tipos que implementan la interfaz. 
- Las clases que implementan un interfaz genérico pueden definirse de las siguientes formas:

```csharp
public interface IEjemplo<T>
{
   public T MiMetodo();
}
public class MiClase: IEjemplo<int> {}
public class MiClase2<T>: IEjemplo<T> {}

```

- Una clase puede implementar varios interfaces genéricos:

```csharp
public interface IEjemplo<T> {}
public interface IEjemplo2<T> {}
public class MiClase<T> where T : IEjemplo<T>, IEjemplo2<T> {}

```

- Se puede aplicar la herencia entre interfaces genéricos:

```csharp
public interface IEjemplo<T> {}
public interface IEjemplo2 : IEjemplo<int> {}
public interface IEjemplo3<T> : IEjemplo<int> {}
public interface IEjemplo4<T> : IEjemplo<T> {}

```

##### Métodos
- Un método genérico es aquel que en su declaración emplea parámetros de tipo genérico.
- Ejemplo:


```csharp
public static void MiMetodoGenerico<T>(T t)
{
   Console.WriteLine(t);
}
 
// para probarlo hacemos
int a = 0;
string b = "Esto es una prueba";
 
MiMetodoGenerico<int>(a);
MiMetodoGenerico<string>(b);

```
- Está permitido crear métodos genéricos en clases no genéricas:

```csharp
public class MiClase
{
   public static void MiMetodoGenerico<T>(T t)
   {
      Console.WriteLine(t);
   }
}
 
// para probarlo hacemos
int a = 0;
string b = "Esto es una prueba";
MiClase miClase = new MiClase();
 
miClase.MiMetodoGenerico<int>(a);
miClase.MiMetodoGenerico<string>(b);


```
- Se pueden usar restricciones en los métodos para que sean más especializados:

```csharp
public interface IEjemplo<T> {}
public static void MiMetodoGenerico<T>(T t) where T : IEjemplo<T>
{
   Console.WriteLine(t);
}

```

##### Delegados
- Un delegado puede definir sus propios parámetros de tipo genérico pero el código que hace referencia al delegado genérico debe especificar el tipo. 
- Supongamos que tenemos un delegado definido de la siguiente manera:


```csharp
public delegate string GenericDelegate<T>(T t);
```
- Ahora definimos dos métodos para que lo maneje nuestro delegado genérico:


```csharp
public static string DecimalToString(decimal d)
{
  return d.ToString();
}  
 
public static string IntegerToString(int i)
{
  return i.ToString();
}

```

- Como veremos en el siguiente ejemplo, instanciamos dos delegados especificando los tipos:

```csharp
GenericDelegate<decimal> genericDelegateForDecimal = new GenericDelegate<decimal>(DecimalToString);
Console.WriteLine(genericDelegateForDecimal(99.78));  
 
GenericDelegate<int> genericDelegateForInt = new GenericDelegate<int>(IntegerToString);
Console.WriteLine(genericDelegateForInt(6));

```


:::tip info
- [[.NET] Qué son los Generics y su implementación en C# (y II).](https://sparraguerra.wordpress.com/2015/07/01/net-que-son-los-generics-y-su-implementacion-en-c-y-ii/)
- [Ejemplo de Generics en C#](https://www.netmentor.es/entrada/generics-csharp#mcetoc_1eg052ei9i)
- [Métodos genéricos en C#](https://thatcsharpguy.com/post/metodos-genericos-en-c)
- [Métodos genéricos en C#](https://desarrolloweb.com/articulos/metodos-genericos-c.html)
:::

## Is
- El operador is se utiliza para comprobar si el tipo (tipo de dato) es compatible con otro tipo.
- Toda esta comprobación se hace en tiempo de ejecución.
- Devuelve verdadero si el objeto  es del mismo tipo (de la misma clase); de lo contrario, devuelve falso. También devuelve falso para objetos nulos (null).
- También puede utilizar el operador is para hacer coincidir una expresión con un patrón.


#### Sintaxis
```csharp
Expresión (ej: una instancia de alguna clase) is type/patrón(tipo de dato , como una clase / un patrón)
```

#### Ejemplo


```csharp
using System;
 
class Author {
 
    public string name;
    public int rank;
 
    
    public void details(string n, int r)
    {
        name = n;
        rank = r;
    }
}
 
class Work {
 
    public int articl_no;
    public int improv_no;
 
    
    public void totalno(int a, int i)
    {
        articl_no = a;
        improv_no = i;
    }
}
 
public class GFG {
 
    static public void Main()
    {
 
        Author a = new Author();
 
        a.details("Ankita", 5);
 
        Work w = new Work();
 
        w.totalno(80, 50);
 
        bool result;
 
        // la variable “a” es de la clase “Author”?
        result = a is Author;
        Console.WriteLine("Is a is Author? : {0}", result);
 
         // la variable “w” es de la clase “Author”?
        result = w is Author;
        Console.WriteLine("Is w is Author? : {0}", result);
 
        // Le asigno null a la variable “a”
        a = null;
 
    // la variable “a” es de la clase “Author”?
        result = a is Author;
        Console.WriteLine("Is a is Author? : {0}", result);
    }
}

```

:::tip info
- [C# | is Operator Keyword](https://www.geeksforgeeks.org/c-sharp-is-operator-keyword/)
- [It Is What It Is and As It Is: Using the Is and As Operators in C#](https://www.pluralsight.com/guides/csharp-is-as-operators-is-expressions)
- [is operator (C# reference)](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/is)
:::


## Coincidencia de patrones
- La coincidencia de patrones es el proceso de tomar una expresión y probar si cumple con ciertos criterios, como "ser un tipo específico" o "coincidir con un valor constante específico".
- Existen varios patrones diferentes, pero todos los patrones tienen en común que trabajan con valores booleanos (coincide o no con el patrón)
- Las declaraciones is y switch (declaración y expresión) admiten la coincidencia de patrones.

#### Patrones
- Hay varias formas diferentes de definir un patrón.
- Estas son las clases que usaremos en los ejemplos:


```csharp
public class Rectangle
{
  public double Length { get; init; }
  public double Height {get; init; }
}

public class Triangle
{
  public double Base { get; init; }
  public double Height { get; init; }
}

public class Circle
{
  public double Radius { get; init; }
}

public class Square
{
  public double Length { get; init; }
}

```

#### Patrón constante
- El patrón constante se puede utilizar para probar si una expresión es igual a una constante(valor) especificada.
- Un caso de uso popular para el patrón constante es la comprobación de nulos.
- El método del siguiente ejemplo utiliza el patrón constante para determinar si un objeto Rectangle es null:

```csharp
Rectangle rectangle = new Rectangle { Height = 7, Length = 3 };

public void IsShapeNull(Rectangle rectangle)
{
  if (rectangle is null)
  {
    throw new ArgumentNullException(nameof(rectangle));
  }
}

```
#### Patrón de declaración
- El patrón de declaración se puede utilizar para determinar en tiempo de ejecución si una expresión es de un tipo determinado.
- Opcionalmente, se puede incluir una declaración de variable en el patrón de declaración. 
- Si la expresión de prueba coincide con el tipo especificado, la expresión se convertirá a este tipo y luego se asignará a la variable (que es opcional).
- El método del siguiente ejemplo prueba si shape es de tipo Square. Si shape es Square se convertirá de object a Square y luego se asignará a una variable denominada square. Si no hay una coincidencia de tipo, la  variable square no se crea:


```csharp
object shape = new Square { Length = 5 };

public void IsShapeSquare(object shape)
{
  if (shape is Square square)
  {
    Console.WriteLine($"Shape is a square with a side of length {square.Length}");
  }
  else
  {
    Console.WriteLine($"{shape} is not a square");
  }
}

```
#### Patrón de propiedad
- La coincidencia de patrones se mejoró aún más en C# 8.0 y una nueva incorporación fue el patrón de propiedad.
- El patrón de propiedad se puede utilizar para comprobar y comparar valores de propiedades.
- El patrón de propiedad prueba si las propiedades/campos de una expresión coinciden con los valores de las propiedades/campos especificados.
- Cada propiedad o campo correspondiente debe coincidir y la expresión no debe ser nula.
- El siguiente ejemplo muestra un patrón de propiedad que inspecciona las propiedades Base y Height de un objeto Triangle.
Comienza verificando si la entrada es de un tipo específico. 
Una vez que el patrón de propiedad afirma que es un Triangle inspeccionará la propiedad Base y la propiedad Height de la entrada. El patrón coincidirá con la expresión si la entrada es un Triangle con  Base de 4 y  Height de 6:


```csharp
Triangle triangle = new Triangle { Base = 4, Height = 6 };

public void IsSpecificTriangle(Triangle triangle)
{
  if (triangle is Triangle { Base: 4, Height: 6 } specificTriangle)
  {
    Console.WriteLine($"Shape is a triangle wih a base of {specificTriangle.Base} and a height of {specificTriangle.Height}");
  }
}

```
#### Patrón var
- El patrón var se puede utilizar para hacer coincidir cualquier expresión y luego asignarla a una nueva variable declarada.
- El propósito de un patrón var es asignar una expresión a una variable, en lugar de probar una expresión en un patrón.
- Es útil si desea almacenar valores de propiedades en una variable para usarla en otros patrones o expresiones.
- El método del siguiente ejemplo prueba si la entrada shape es un Rectangle y su propiedad Length es múltiplo de 3. Aquí, asignamos el valor de la propiedad Length a una variable length y luego probamos esta variable en una expresión booleana:

```csharp
object shape = new Rectangle { Length = 9, Height = 4};

public void IsLengthMultipleOfThree(object shape)
{
  if (shape is Rectangle { Length: var length } rect && length % 3 == 0)
  {
    Console.WriteLine("This shape is a rectangle with a length which is a multiple of 3");
  }
}

```
#### Patrón posicional
- El patrón posicional es útil cuando se prueba un tipo que se puede deconstruir.   La deconstrucción es un proceso de descomprimir tipos en partes y almacenarlas en nuevas variables (deconstrucción de objetos).
- El patrón posicional puede deconstruir una expresión de entrada y luego probar si las variables resultantes coinciden con un patrón especificado entre paréntesis.
- C# ofrece soporte integrado para deconstruir los tipos record y tuple. Sin embargo, para otros tipos, el compilador requiere la implementación del método Deconstruct.
- Por ejemplo, podemos cambiar el tipo Rectangle para incluir un método Deconstruct personalizado. Cada valor que se va a deconstruir se específica mediante el parámetro out. El método Deconstruct divide el tipo Rectangle y devuelve una variable length y una variable height:

```csharp
public struct Rectangle
{
  public double Length { get; init; }
  public double Height {get; init; }

  public void Deconstruct(out double length, out double height)
  {
    length = Length;
    height = Height;
  }
}

```

- Luego, puedes deconstruir una instancia de la clase Rectangle nombrada rectangle con una asignación, como se muestra a continuación:

```csharp
Rectangle rectangle = new Rectangle { Length = 20, Height = 40 };
var (l, h) = rectangle;

```

- El patrón respeta la posición que tiene cada parámetro dentro del método Deconstruct. Entonces, el primer valor que sale del método Deconstruct es el primer valor que vamos a hacer coincidir y así sucesivamente. 
- En el siguiente ejemplo, se deconstruye rectangle y length. Luego lenght se prueba con un patrón  constante y height se prueba con  "_(patrón de descarte)" . Entonces, el patrón coincidirá si rectangle tiene un length de 20 y un  height de cualquier valor:

```csharp
if (rectangle is (20, _) rect)
{
  Console.WriteLine("The rectangle has a length of 20");
}

```

:::tip
- Se puede utilizar el patron de descarte (con el signo “_”) cuando se acepta cualquier valor en una posición.

:::

#### Patrón de tuplas
- El patrón de tupla se puede utilizar para hacer coincidir múltiples valores de entrada.
- El patrón de tupla es una forma particular de utilizar el patrón posicional, pero el objeto que emparejamos no se deconstruye porque ya es una tupla.
- Utilizamos La expresión switch  en el siguiente ejemplo  para usar el patrón de tupla para seleccionar una “descripción de forma (String)” basada en los valores de la tupla de entrada (lo que contiene los paréntesis atrás de la expresión switch):

```csharp
public string ReturnDescriptionOfShape(string shape, int length, int height)
{
  return (shape, length, height) switch 
  {
    ("Rectangle", 2, 1) => "This is a small rectangle",
    ("Circle", 4, 2) => "This is a medium circle",
    ("Square", 8, 4) => "This is a large square",
    (_,_,_) => "This not a valid input"
  };
}

```

#### Patrón relacional
- El patrón relacional se puede utilizar para comparaciones.
- Se compara un valor con una constante utilizando operadores de comparación (>, <, >=, <=).
- El siguiente ejemplo muestra un patrón relacional que inspecciona la propiedad Radius de un objeto Circle. El patrón coincidirá con la expresión si la entrada es Circle y  Radius   es mayor  igual a 100:


```csharp
object shape = new Circle {Radius = 110};

public void IsBigCircle(object shape)
{
  if (shape is Circle { Radius: >= 100 })
  {
    Console.WriteLine($"This is a big circle");
  }
}

```

#### Tipo patrón
- Al igual que el patrón de declaración, puede utilizar un patrón de tipo para determinar en tiempo de ejecución si una expresión es de un tipo determinado. 
- Con el patrón de tipo, no se especifica ninguna variable. El método del siguiente ejemplo prueba si shape es de tipo Square:

```csharp
object shape = new Square { Length = 5 };

public void IsShapeSquare(object shape)
{
  if (shape is Square)
  {
    Console.WriteLine($"{shape} is a square");
  }
  else
  {
    Console.WriteLine($"{shape} is not a square");
  }
}

```

#### Patrones lógicos
- C# 9.0 también introdujo patrones lógicos, que es la capacidad de utilizar combinaciones de patrones or ,  not y and para crear patrones lógicos.
- La negación o el patrón not se pueden utilizar para comprobaciones nulas.
- Se puede comprobar si un objeto no es null utilizando el patrón lógico not en C# 9.0 de la siguiente manera:

```csharp
if (shape is not null)
```
- Que es lo mismo que:

```csharp
if (shape != null)
```

- Se Puede utilizar la conjuntiva o el patrón and para comprobar si la expresión de entrada coincide con más de un patrón.
- El método del siguiente ejemplo muestra un   patrón que coincidirá con la expresión si la entrada es Circle con un Radius mayor o igual a 100 y menor o igual a 200. La expresión debe coincidir con ambos patrones para que haya una coincidencia.


```csharp
object shape = new Circle {Radius = 110};

public void IsBigCircleRange(object shape)
{
  if (shape is Circle { Radius: >= 100 and <= 200 })
  {
    Console.WriteLine($"This is a big circle");
  }
}

```
- Se puede utilizar la disyuntiva o el patrón or para comprobar si la expresión de entrada coincide con cualquiera de los patrones especificados.
- En el siguiente ejemplo, el patrón coincidirá con la expresión si la entrada es un Circle con Radius igual a 100 o 200. Solo uno de estos patrones necesita coincidir con la expresión para que haya una coincidencia:


```csharp
object shape = new Circle {Radius = 100};

public void IsBigCircleValue(object shape)
{
  if (shape is Circle { Radius: 100 or 200 })
  {
    Console.WriteLine($"This is a big circle");
  }
}

```


#### ¿Cuáles son las diferentes formas de hacer coincidir patrones?
- La expresión is, declaración switch y expresión switch (introducida en C# 8.0) admiten la coincidencia de patrones. Los ejemplos anteriores se centraron en cómo hacer coincidir el patrón con la expresión is, y la expresión switch se abordó en el ejemplo de coincidencia de patrones de tupla.


#### Declaración switch
- A partir de C# 7.0, la declaración switch se mejoró para facilitar la coincidencia de patrones.
- La declaración switch ahora puede admitir cualquier tipo de dato, mientras que anteriormente solo se admitían tipos integrados y constantes de cadena (string).
- Cada uno de los case  puede ser ahora un patrón y no un valor constante.  Finalmente, se incluyó soporte de la palabra clave when para expresar y especificar aún más la condición para la coincidencia de patrones.
- El método del siguiente ejemplo calcula el área de una forma utilizando la declaración  switch que usa el patrón var para seleccionar la fórmula correcta para este cálculo:


```csharp
public double CalculateAreaSwitchStatement(T shape)
{
  switch (shape)
  {
    case null:
        throw new ArgumentNullException(nameof(shape));

    case Square { Length: var l }:
        return l * l;

    case Circle { Radius: var r }:
        return r * r * Math.PI;

    case Rectangle { Length: var l, Height: var h }:
        return l * h;

    case Triangle { Base: var b, Height: var h}:
        return b * h / 2;

    default:
        throw new NotSupportedException();
  }
}

```

#### Expresión switch
- C# 8.0 introdujo la expresión switch para evaluar una expresión frente a un conjunto de patrones.
- La expresión switch proporciona una sintaxis más concisa para la coincidencia de patrones.
- Hay varias mejoras de sintaxis en la expresión switch en comparación con la declaración switch:
    - En primer lugar, la variable de entrada está antes de la palabra clave switch. 
    - La palabra clave case y los dos puntos (:) se reemplazan con flechas (=>), lo que hace que el código sea más legible y conciso. 
    - El caso default ahora se reemplaza con un descarte (_).
    - Finalmente, el cuerpo es una expresión, no una serie de enunciados.


- Una de las grandes diferencias entre una expresión  switch y una declaración switch es que una expresión switch le indicará si no ha cubierto todas las posibilidades.
- Con una declaración switch, el comportamiento se especifica sólo para algunos de los casos, siendo el valor predeterminado "no hacer nada". Sin embargo, una expresión switch tiene que producir algún tipo de resultado cuando se evalúa. Esto es útil ya que el compilador le avisará si ha olvidado algo. 
- El método en el siguiente ejemplo es el mismo que el ejemplo anterior pero usando la expresión switch. En este ejemplo, el patrón de descarte (_) se utiliza para hacer coincidir cualquier expresión, incluida null. El patrón de descarte garantiza que la expresión SWITCH maneje todos los valores de entrada posibles. Si no se utiliza el patrón de descarte y el valor de entrada no coincide con ninguno de los patrones en la expresión, el tiempo de ejecución generará una excepción:

```csharp
public double CalculateAreaSwitchExpression(T shape)
{
  return shape switch
  {
    null => throw new ArgumentNullException(nameof(shape)),

    Square { Length: var l } => l * l,
    Circle { Radius: var r } => r * r * Math.PI,
    Rectangle { Height: var h, Length: var l } => h * l,
    Triangle { Base: var b, Height: var h } => b * h / 2,

    _ => throw new NotSupportedException()
  };
}

```

:::tip info
- [Pattern Matching in C#](https://endjin.com/blog/2022/02/pattern-matching-in-csharp)
- [C# Pattern Matching Explained](https://blog.ndepend.com/c-pattern-matching-explained/)
- [Pattern Matching in C#](https://blog.ndepend.com/c-pattern-matching-explained/)
- [Pattern Matching Examples in C#](https://timdeschryver.dev/blog/pattern-matching-examples-in-csharp)
- [C# Pattern Matching: Full Guide](https://www.bytehide.com/blog/pattern-matching-csharp)
- [Pattern Matching in C#](https://code-maze.com/csharp-pattern-matching/)
:::

## Switch
#### Declaración
- El elemento Switch nos permite evaluar una variable y realizar diferentes cosas según el resultado de esta.
- Es parecido a usar múltiples IF de manera secuencial, aunque se podría decir que con Switch puedes lograr un código más ordenado.
- Sintaxis:

```csharp
switch(variable) {
    case valor1:
         Instrucciones
         break;
    case valor2:
         Instrucciones
         break;
    case valor3:
         Instrucciones
         break;
    …
  default:
          Instrucciones
          break;
}

```
:::tip Observación
- Luego de la palabra clave switch entre paréntesis indicamos una variable.
- Con una serie de case verificamos si dicha variable almacena un valor igual a [valor1, valor2, valor3 , ...] en el caso de ser igual se ejecutan las instrucciones contenidas en dicho case (luego de los “:”).
- Si todos los case son falsos,  se ejecutan las instrucciones contenidas después de la palabra default (luego de los “:”).
- Por último, debemos tener en cuenta la palabra clave “break” que se usa para indicar que el “case” ya ha terminado y se puede continuar con el siguiente. Es obligatorio usarlo, o si no, el sistema lo marcará como error.


:::

#### Ejemplo

```csharp
string number;
int opt = 2;
 
switch(opt)
{
    case 1: 
        number = "One";
        break;
    case 2: 
        number = "Two";
        break;
    default:
        number = "Error";
        break;
}
Console.WriteLine("El número es: " + number);

```

:::tip Observación
- En el ejemplo anterior, lo que estamos haciendo es evaluar la variable “opt” (dentro de switch), la cual es numérica (también podemos evaluar variables tipo texto, booleanos y caracteres).
- Luego definimos los diferentes valores que puede tener la variable “opt” con case. En ese caso, estamos indicando que cuando el número sea uno (case 1), vamos a guardar en la variable number la palabra “One”. En el caso que la variable sea dos (case 2), vamos a guardar en la variable number la palabrea “Two”. 
- Por último, tenemos un comodín llamado “Default “, este se usa si queremos hacer algo cuando la evaluación no ha caído en ninguna condición previamente programada (no se ejecutó ningún case). En nuestro ejemplo, si la variable opt no es ni uno ni dos, irá a “default” y guardará en la variable number la palabra “Error”.



:::


#### Podes hacer la misma acción en diferentes case

```csharp
using System;

namespace multiple_case_switch
{
    class Program
    {
        static void Main(string[] args)
        {
            int x = 3;
            switch (x)
            {
                case 1:
                case 2:
                case 3:
                    Console.WriteLine("The value is between 1 and 3");
                    break;
                case 4:
                case 5:
                case 6:
                    Console.WriteLine("The value is between 4 and 6");
                    break;
            }
        }
    }
}

```


:::tip info
- [CONDICIONAL SWITCH EN C#](https://clase13.com/2021/08/27/condicional-switch-csharp/)
- [The switch statement](https://csharp.net-tutorials.com/es/111/control-structures/the-switch-statement/)
- [Declaración de switch de varios case en C#](https://www.delftstack.com/es/howto/csharp/multiple-case-switch-in-csharp/)
- [Estructura condicional switch](https://www.tutorialesprogramacionya.com/csharpya/detalleconcepto.php?codigo=184)
:::

#### Expresión
- En las expresiones Switch, todos los casos son expresiones, por lo que es una versión más "ligera" que la declaración.
- Sus caracteristicas son:
   -	La variable utilizada en la expresión switch ahora aparece antes de la palabra clave switch.
   -	Los dos puntos (:) y la palabra clave case se reemplazan con flechas (=>). Lo que hace que el código sea más compacto y legible.
   -	El caso predeterminado ahora se reemplaza con un descarte (_).
   -	Y el cuerpo del cambio es una expresión, no una declaración.
- En el siguiente código, cualquiera puede analizar qué está haciendo exactamente.:

```csharp
	var operation = 2;  
	  
	var result = operation switch  
	{  
	    1 => "Case 1",  
	    2 => "Case 2",  
	    3 => "Case 3",  
	    4 => "Case 4",  
	    _ => "No case availabe"  
	};  
	  
	Console.WriteLine(result);  

```

:::tip Observación
- En el código anterior, cualquiera puede encontrar que no hay ninguna declaración de "case", "break" (o return). En las expresiones Switch, estas palabras clave no son necesarias. Los dos puntos (:) se reemplazan con la flecha (=>). 
- Hay una palabra clave más, es decir, "default". También se reemplaza por "_" (guión bajo).



:::


#### Ejemplo
##### Con declaración

```csharp

using System;
  
public class GFG {
  
 
    public static void Main(String[] args)
    {
        int gitem = 8;
  
        switch (gitem) {
  
        case 2:
            Console.WriteLine("Hello");
            break;
  
        case 4:
            Console.WriteLine("Bonjour");
  
            break;
        case 6:
            Console.WriteLine("Konnichiwa");
            break;
  
        case 8:
            Console.WriteLine("Namaste");
            break;
  
        case 10:
            Console.WriteLine("Anyoung haseyo");
            break;
  
        default:
            Console.WriteLine("No greeting found");
            break;
        }
    }
}

```

##### Con expresión

```csharp

using System;
  
public class GFG {
  
  
    public static void Main(String[] args)
    {
        var gitem = 4;
  
        var res = gitem switch {
            2 => "Hello",
            4 => "Bonjour",
            6 => "Namaste",
            8 => "Anyoung haseyo",
            _ => "No greeting found",
  
        };
  
        Console.WriteLine(res);
    }
}

```


:::tip info
- [What is a Switch Expression in C#?](https://www.c-sharpcorner.com/article/c-sharp-8-0-new-feature-swtich-expression/)
- [C# 9.0: Pattern Matching in Switch Expressions](https://www.thomasclaudiushuber.com/2021/02/25/c-9-0-pattern-matching-in-switch-expressions/)
- [Switch Expression in C# 8.0](https://www.geeksforgeeks.org/switch-expression-in-c-sharp-8-0/)
- [C# 8 Switch Expressions](https://codebuns.com/csharp-advanced/csharp-8-switch-expressions/)
:::


## Tuplas
- Seguramente te ha pasado, alguna vez has pensado "Ojalá pudiera devolver dos cosas desde este método" y si bien recuerdas que los métodos en C# únicamente pueden tener un solo tipo de retorno, es posible devolver más de dos valores haciendo uso de la clase genérica Tuple.
- Podemos ver a Tuple (o tupla) como un auxiliar para el programador, que permite "agrupar" uno o varios valores dentro de uno solo, para así tratarlos como uno solo, esto, a través de varias clases genéricas definidas de la siguiente manera:
   -	Tuple&lt;T1>
   -	Tuple&lt;T1, T2>
   -	Tuple&lt;T1, T2, T3>
   -	Tuple&lt;T1, T2, T3, T4>
   -	Tuple&lt;T1, T2, T3, T4, T5>
   -	Tuple&lt;T1, T2, T3, T4, T5, T6>
   -	Tuple&lt;T1, T2, T3, T4, T5, T6, T7>
   -	Tuple&lt;T1, T2, T3, T4, T5, T6, T7, TRest>


#### Creando tuplas
- Es una clase genérica, así que para crear una tupla que contiene un entero y dos cadenas debemos usar:
```csharp
var t = new Tuple<int, string, string>(1, "A", "B");
```
- O, por ejemplo, si quisiéramos crear algo más complejo como una variable que contiene un entero, un decimal, un objeto, otro entero, un booleano y un flotante, tendríamos que hacer algo como esto:

```csharp
var t1 = new Tuple<int, decimal, object, int, bool, float>(3, 1.5m, new { emoji = ":grin:" }, 5, true, 7.5f);
```

- Uhhmm, la sintaxis se pone un poco complicada, ¿no? para eliminar esta sintaxis complicada, podemos usar el método estático Create de la clase Tuple para crear tuplas:

```csharp
var t1 = Tuple.Create(3, 1.5m, new { emoji = ":grin:" }, 5, true, 7.5f);
```
:::tip Observación
Este método, inferirá  los tipos de dato a partir de los parámetros.

:::


#### Accediento a los miembros
- Una vez creada la tupla (ya sea con el constructor o el método estático), podemos acceder a cada uno de los datos a través de las propiedades llamadas Item#, donde # es el número de la propiedad a la que nos referimos.
- Ósea para acceder a un dato es como un array, donde # es el índice(index) pero empieza en 1:


```csharp
Console.WriteLine(t.Item1); // 1 -> int
Console.WriteLine(t.Item2 + " - " + t.Item3 ); // "A - B" -> string

```
- Es importante señalar que las propiedades de la clase Tuple son de solo lectura, y que una vez asignadas en el constructor, no pueden ser modificadas:

```csharp
t1.Item4 = 7; // Error, solo lectura
```
#### Tuplas de 8 elementos
- Si volvemos a las definiciones de las clases Tuple puedes ver que existen hasta 8 versiones genéricas disponibles. Sin embargo, la octava una peculiaridad: el octavo valor no se almacena dentro de "Item8", sino dentro de otra tupla (a la que accedemos desde la propiedad Rest):


```csharp
var megaTuple = Tuple.Create(1, 2, 3, 4, 5, 6, 7, 8);
//Console.WriteLine(miniTuple.Item8); // Item8 no existe, entonces tenemos que usar Rest:
Console.WriteLine(megaTuple.Rest.Item1);

```
#### Ejemplos de usos
- Como parámetro de un método:

```csharp
string MegaMetodoTuple(Tuple<int, int, string, decimal, bool> args)
var tuple = Tuple.Create(10, 3, "MX", 3.1m, true);
MegaMetodoTuple(tuple);  

```
- Como valores de retorno:

```csharp
private static Tuple<int, int, int> SplitColors(string hex)
{
    int r = Int32.Parse(hex.Substring(0, 2), NumberStyles.HexNumber);
    int g = Int32.Parse(hex.Substring(2, 2), NumberStyles.HexNumber);
    int b = Int32.Parse(hex.Substring(4, 2), NumberStyles.HexNumber);
    return Tuple.Create(r, g, b);
}
string color = "3C8A3F";
var colors = SplitColors(color);
Console.WriteLine("{0} es R:{1} G:{2} B:{3}", color, colors.Item1, colors.Item2, colors.Item3);

```

:::tip info
- [Tipos de tupla (referencia de C#)](https://learn.microsoft.com/es-es/dotnet/csharp/language-reference/builtin-types/value-tuples)
- [Tuple&lt;T1,T2> Clase](https://learn.microsoft.com/es-es/dotnet/api/system.tuple-2?view=net-7.0)
- [Deconstruir tuplas y otros tipos](https://learn.microsoft.com/es-es/dotnet/csharp/fundamentals/functional/deconstruct)
- [C# y .NET: Tuplas y cómo devolver más de un objeto como retorno de una función](https://www.campusmvp.es/recursos/post/c-y-net-tuplas-y-como-devolver-mas-de-un-objeto-como-retorno-de-una-funcion.aspx)
- [Tuple y ValueTuple en C# | Devuelve múltiples tipos de un método](https://www.netmentor.es/entrada/tuple-valuetuple)
- [Tuples en C#](https://thatcsharpguy.com/post/tuples-en-c)
- [Tuples In C#](https://www.c-sharpcorner.com/article/tuples-in-c-sharp/)
- [C# - Tuple](https://www.tutorialsteacher.com/csharp/csharp-tuple#google_vignette)
- [C# Tuples](https://www.programiz.com/csharp-programming/tuple)
- [Tuples in C#: Full Guide](https://www.bytehide.com/blog/tuple-csharp)
- [C# Tuples](https://www.csharptutorial.net/csharp-tutorial/csharp-tuples/)
:::


## Palabra clave Where
-  El Where proporcionará(usará) cada elemento de un conjunto de datos como entrada y luego proporcionará la lógica que decide si el elemento es incluido (devuelve verdadero) o excluido (devuelve falso) del resultado final. Aquí hay un ejemplo básico:

```csharp
List<int> numbers = new List<int>()
{
    1, 2, 4, 8, 16, 32
};
var smallNumbers = numbers.Where(n => n < 10);
foreach (var n in smallNumbers)
    Console.WriteLine(n);

```

:::tip Observación
- El parámetro del where es una expresión lambda que devuelve false o true.
- En este método anónimo, el primer argumento es la variable cuyo valor será el elemento de entrada (En este caso, es un numero).
- En este ejemplo, cada número se compara con nuestra expresión, que devolverá verdadero si el número es menor que 10 y falso si es 10 o mayor. Como resultado, obtenemos una versión de la lista original, donde solo hemos incluido números por debajo de 10, que luego se envían a la consola.
:::

- Pero la expresión no tiene que ser tan simple como eso: podemos agregarle fácilmente más requisitos, como si fuera una declaración if regular:

```csharp
List<int> numbers = new List<int>()
{
    1, 2, 4, 8, 16, 32
};
var smallNumbers = numbers.Where(n => n > 1 && n != 4 &&  n < 10);
foreach (var n in smallNumbers)
    Console.WriteLine(n);

```
:::tip Observación
- Especificamos que el número debe ser mayor que 1, pero no debe ser el número 4 y debe ser menor que 10.
:::

- Por supuesto, también puede usar varios métodos, siempre que el resultado final sea un valor booleano, de modo que el método Where() sepa si desea incluir el elemento en cuestión o no. Aquí hay un ejemplo:


```csharp
List<int> numbers = new List<int>()
{
    1, 2, 4, 7, 8, 16, 29, 32, 64, 128
};
List<int> excludedNumbers = new List<int>()
{
    7, 29
};
var validNumbers = numbers.Where(n => !excludedNumbers.Contains(n));
foreach (var n in validNumbers)
    Console.WriteLine(n);

```

:::tip Observación
- En este ejemplo, declaramos una segunda lista de números, ¡una especie de lista negra de números que no queremos incluir! En el método Where (), utilizamos el método Contains () en la lista negra, para decidir si un número se puede incluir en la lista final de números o no.

:::

- Y, por supuesto, funciona para objetos más complejos que los números y las cadenas, y sigue siendo muy fácil de usar. Solo eche un vistazo a este ejemplo, donde usamos objetos con información del usuario en lugar de números, y usamos el método Where () para obtener una lista de usuarios con nombres que comienzan con la letra "J", a la edad de 39 años o menos:


```csharp
using System;
using System.Collections.Generic;
using System.Linq;

namespace LinqWhere2
{
    class Program
    {
    static void Main(string[] args)
    {
        List<User> listOfUsers = new List<User>()
        {
        new User() { Name = "John Doe", Age = 42 },
        new User() { Name = "Jane Doe", Age = 34 },
        new User() { Name = "Joe Doe", Age = 8 },
        new User() { Name = "Another Doe", Age = 15 },
        };

        var filteredUsers = listOfUsers.Where(user => user.Name.StartsWith("J") && user.Age < 40);
        foreach (User user in filteredUsers)
        Console.WriteLine(user.Name + ": " + user.Age);
    }


    class User
    {
        public string Name { get; set; }
        public int Age { get; set; }

    }
    }
}

```
- Se puede encadenar multiples métodos where:

```csharp
List<int> numbers = new List<int>()
{
    1, 2, 4, 8, 16, 32
};
var smallNumbers = numbers.Where(n => n > 1).Where(n => n != 4).Where(n => n < 10);
foreach (var n in smallNumbers)
    Console.WriteLine(n);

```
:::tip Observación
- Especificamos que el número debe ser mayor que 1, pero no debe ser el número 4 y debe ser menor que 10.
- El resultado es exactamente el mismo que un ejemplo anterior, y aunque la primera versión podría no haber sido lo suficientemente compleja como para justificar la división en múltiples llamadas al método Where (), es probable que se encuentre con situaciones en las que tenga sentido hacerlo. 
- Quiero enfatizar que esto no cuesta más, en términos de rendimiento, porque las operaciones reales de "where" no se llevan a cabo hasta la parte en la que hacemos un bucle sobre el resultado; para entonces, el compilador y el intérprete tendrán optimizado su consulta para que sea lo más rápida posible, sin importar cómo la haya escrito.

:::

:::tip info
- [Filtrar datos: el método Where ().](https://csharp.net-tutorials.com/es/425/linq-/filtrar-datos-el-metodo-where-/)
- [Where](https://www.dotnetperls.com/where)
- [C# Linq Where Method](https://www.tutorialspoint.com/chash-linq-where-method)
- [where clause (C# Reference)](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/where-clause)
:::