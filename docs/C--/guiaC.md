---
sidebar_position: 7
---
# Conceptos de "C#"
- Los  apartados anteriores contienen los aspectos básicos de C#.
## Try Catch
- Al ejecutar código C#, pueden ocurrir diferentes errores: errores de codificación realizados por el programador, errores debido a una entrada incorrecta u otros imprevistos.
- Cuando ocurre un error, C# normalmente se detendrá y generará un mensaje de error. El término técnico para esto es: C# lanzará una **excepción** (arrojará un error).
- La declaración try le permite definir un bloque de código (bloque de prueba) que se va a ejecutar.
- La instrucción **catch** le permite definir un bloque de código que se ejecutará si ocurre un error en el bloque de prueba.
- Las palabras clave **try** y **catch** vienen en pares.
- Con try-catch , C# no se detendrá si ocurre un error ya que el "catch" solucionaría esta excepción(error).

```csharp
try 
{
  // Bloque de prueba
}
catch (Exception e)
{
  //  Código para manejar el error
}

```

####  Ejemplo
- Considere el siguiente ejemplo, donde creamos una matriz de tres enteros:
- Esto generará un error, porque myNumbers[10] no existe.

```csharp

int[] myNumbers = {1, 2, 3};
Console.WriteLine(myNumbers[10]); // error!

```

- Si ocurre un error, podemos usar try...catch para detectar el error y ejecutar algún código para manejarlo.
- En el siguiente ejemplo, usamos la variable dentro del bloque catch ( e) junto con la propiedad **Message**, que genera un mensaje que describe la excepción:

```csharp
try
{
  int[] myNumbers = {1, 2, 3};
  Console.WriteLine(myNumbers[10]);
}
catch (Exception e)
{
  Console.WriteLine(e.Message);
}

```
- También puede generar su propio mensaje de error:

```csharp

try
{
  int[] myNumbers = {1, 2, 3};
  Console.WriteLine(myNumbers[10]);
}
catch (Exception e)
{
  Console.WriteLine("Something went wrong.");
}

```

#### Finally
- La instrucción finally le permite ejecutar código después de try y catch, independientemente del resultado.

```csharp
try
{
  int[] myNumbers = {1, 2, 3};
  Console.WriteLine(myNumbers[10]);
}
catch (Exception e)
{
  Console.WriteLine("Something went wrong.");
}
finally
{
  Console.WriteLine("The 'try catch' is finished.");
}

```

#### Throw
- La declaración throw le permite crear un error personalizado.
- La instrucción throw se utiliza junto con una clase de excepción. Hay muchas clases de excepción disponibles en C#: ArithmeticException, FileNotFoundException, IndexOutOfRangeException, TimeOutException, etc.
- Sintaxis: throw new claseExcepcion(“mensaje”).
- El mensaje se accede con la propiedad **Message** en el catch.


```csharp
static void checkAge(int age)
{
  if (age < 18)
  {
    throw new ArithmeticException("Access denied - You must be at least 18 years old.");
  }
  else
  {
    Console.WriteLine("Access granted - You are old enough!");
  }
}

static void Main(string[] args)
{
  checkAge(15);
}

```

## Windows Forms
- Es una herramienta que te ayuda a desarrollar interfaces de usuario (UI).
-  Te permite crear aplicaciones  de escritorio para Windows.
- Te ofrece un amplio conjunto de características para el  desarrollo de aplicaciones, como controles, gráficos, enlace de datos y entrada del usuario.
- Windows Forms incluye un diseñador visual de arrastrar y colocar en Visual Studio para crear fácilmente aplicaciones de Windows Forms.
- Con el Diseñador de Windows Forms de arrastrar y colocar de Visual Studio, puede crear fácilmente aplicaciones de Windows Forms. Simplemente seleccione los controles con el cursor y colóquelos donde quiera en el formulario. 
- Puede usar los controles FlowLayoutPanel, TableLayoutPanel y SplitContainer para crear diseños de formularios avanzados en menos tiempo.
- Por último, si debe crear sus propios elementos de interfaz de usuario personalizados, el espacio de nombres System.Drawing contiene una gran selección de clases para representar líneas, círculos y otras formas directamente en un formulario.

:::tip
- Cada elemento de Windows Forms es una Clase y cada elemento que crea, es una instancia de esta clase.
- A través de sus métodos y propiedades se diseña el formulario y se crean los eventos como "hacer click" , "inicializar elemento" , etc.
- Generalmente Visual studio se encarga de instanciar y llamar a los métodos/propiedades, para que el usuario solo se enfoque en arrastrar y colocar elementos.


:::

:::tip
Consulte en la documentación de Microsoft para saber la función de cada elemento del Windows Forms.
:::
:::tip info
- [Guía de escritorio (.NET para Windows Forms)](https://learn.microsoft.com/es-es/dotnet/desktop/winforms/overview/?view=netdesktop-7.0)
- [System.Windows.Forms Espacio de nombres](https://learn.microsoft.com/es-es/dotnet/api/system.windows.forms?view=windowsdesktop-7.0)
- [Hasta la ventana/formulario es una clase y es la que se encarga que se ejecute la aplicación](https://learn.microsoft.com/es-es/dotnet/api/system.windows.forms.form?view=windowsdesktop-7.0)
- [Controles que se utilizan en formularios Windows Forms](https://learn.microsoft.com/es-es/dotnet/desktop/winforms/controls/controls-to-use-on-windows-forms?view=netframeworkdesktop-4.8)
- [Conceptos básicos de las aplicaciones de Windows Forms (Visual Basic)](https://learn.microsoft.com/es-es/dotnet/visual-basic/developing-apps/windows-forms/)
- [Procedimiento para agregar un formulario a un proyecto (Windows Forms para .NET)](https://learn.microsoft.com/es-es/dotnet/desktop/winforms/forms/how-to-add?view=netdesktop-7.0)
- [Posición y diseño de los controles (Windows Forms para .NET)](https://learn.microsoft.com/es-es/dotnet/desktop/winforms/controls/layout?view=netdesktop-7.0)
- [Tutorial: Proporcionar elementos de menú estándar a un formulario](https://learn.microsoft.com/es-es/dotnet/desktop/winforms/controls/walkthrough-providing-standard-menu-items-to-a-form?view=netframeworkdesktop-4.8)
- [Controles de formularios Windows Forms usados para mostrar opciones](https://learn.microsoft.com/es-es/dotnet/desktop/winforms/controls/windows-forms-controls-used-to-list-options?view=netframeworkdesktop-4.8)
- [Cómo: Alinear varios controles en formularios Windows Forms](https://learn.microsoft.com/es-es/dotnet/desktop/winforms/controls/how-to-align-multiple-controls-on-windows-forms?view=netframeworkdesktop-4.8)
:::


## Funciones / Métodos


- Las funciones son un conjunto de instrucciones que realizan una tarea específica.  Cuanto más organizado y estructurado es tu código, más fácil será de entender y mantener.
- Un método es un bloque de código que solo se ejecuta cuando se le llama.
- Puedes pasar datos, conocidos como parámetros, a un método.
- Los métodos se utilizan para realizar ciertas acciones y también se conocen como funciones
- ¿Por qué usar métodos? Para reutilizar el código: defina el código una vez y utilícelo muchas veces.
- Sintaxis para crear un método/función:

```csharp
[modificadores] tipoDeRetorno NombreDelMetodo([argumentos]) { 
// cuerpo del método 
}

```
:::tip Observación

-	modificadores: Son opcionales y modifican el comportamiento del método. Por ejemplo, static indica que el método es estático, , public indica que el método es visible fuera de la clase donde se define , private indica que el método solo es visible dentro de la clase.
-	tipoDeRetorno: Es el tipo de dato que devuelve el método. Puede ser cualquier tipo de dato válido en C#, o void si el método no devuelve ningún valor.
-	NombreDelMetodo: Es el nombre que se le da al método.
-	argumentos: Son variables que se pasan al método para que lo utilice durante su ejecución. Se especifican entre paréntesis y separados por comas. Son opcionales.
- El cuerpo del método contiene las instrucciones (código) que se ejecutan cuando se llama al método. Puede contener variables locales, declaraciones, estructuras de control de flujo, llamadas a otros métodos, etc.


:::

- Para llamar un método en C#, primero debemos tener definido el método en nuestra clase y luego podemos llamarlo utilizando el nombre del método seguido de paréntesis (“()”) y los  parametros requeridos (si es que los tiene)  adentro de los paréntesis.
  
#### Ejemplo
- Creamos un metodo con un argumento:

```csharp
public void Saludar(string nombre) {
   Console.WriteLine("¡Hola, " + nombre + "!");
    } 
```
- Lo llamamos con un parametro:

```csharp
Saludar("Juan");
```

#### Tipos de funciones
- En C#, existen diferentes tipos de funciones, cada uno con sus propias características y usos. Algunos de los tipos más comunes son:

#### Funciones estáticas
- Son funciones que pertenecen a una clase en lugar de a una instancia de esa clase. 
- No necesitan ser instanciadas para ser utilizadas y no pueden acceder a los miembros de instancia.

#### Funciones de instancia
- son funciones que pertenecen a una instancia de una clase en lugar de a la clase en sí. 
- Se pueden acceder a los miembros de instancia y a los miembros estáticos.

#### Funciones de extensión
- Son funciones adicionales que se pueden agregar a un tipo existente. 
- Estas funciones se escriben como funciones estáticas que toman como primer parámetro el tipo al que se desea extender.
#### Funciones lambda
- Son funciones anónimas que se utilizan a menudo con expresiones de Linq y eventos.
-  Son una forma más concisa de escribir funciones anónimas y pueden tomar cualquier número de argumentos.

#### Funciones asíncronas
- Son funciones que no bloquean el flujo del programa y permiten que el programa continue ejecutando otras tareas mientras se ejecuta la función. 
- Esto mejora la eficiencia del programa y reduce la necesidad de crear hilos adicionales.


#### Otros
- Por supuesto, estos son solo algunos ejemplos, hay más tipos de funciones en C#, pero estos son los más comunes y los que se utilizan con mayor frecuencia.


:::tip info
- [Introducción a las funciones en C# ](https://estradawebgroup.com/Post/Introduccion-a-las-funciones-en-C-%C2%A0/20596)
- [C# Methods](https://www.w3schools.com/cs/cs_methods.php)
- [Metodos de C#](https://oregoom.com/c-sharp/metodos/)
- [Crear métodos en C#](https://www.kyocode.com/2019/06/crear-metodos-en-c/)
- [Todo lo que debes saber sobre los Métodos en C#](https://elcamino.dev/metodos-en-c/)
:::
### Argumentos con nombres

- Los argumentos con nombre lo liberan de hacer coincidir el orden de los argumentos con el orden de los parámetros en las listas de parámetros de los métodos al llamarlos. 
- Se utiliza el nombre de los argumentos(variables) para especificar el parámetro.

#### Ejemplo

- Definimos el método PrintOrderDetails con tres argumentos:  sellerName (Nombre del vendedor) , orderNum (Orden del pedido)  Y productName (Nombre del producto)  , en ese orden exacto.


- Llamamos al método por posición:

```csharp
PrintOrderDetails("Gift Shop", 31, "Red Mug");
```

- Si no recuerda el orden de los argumentos, pero sabe sus nombres, puede enviar los argumentos en cualquier orden:

```csharp
PrintOrderDetails(orderNum: 31, productName: "Red Mug", sellerName: "Gift Shop");
PrintOrderDetails(productName: "Red Mug", sellerName: "Gift Shop", orderNum: 31);

```

:::tip
Puede usar las dos formas al invocar un método.

:::
:::tip info
- [Named arguments](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/named-and-optional-arguments#named-arguments)

:::
### Argumentos opcionales
- La definición de un método, constructor, indexador o delegado puede especificar que sus parámetros sean obligatorios u opcionales. 
- Cualquier llamada debe proporcionar parámetros para todos los argumentos requeridos, pero puede omitir parámetros para argumentos opcionales.
- Cada parámetro opcional tiene un valor predeterminado como parte de su definición. Si no se envía ningún argumento para ese parámetro, se utiliza el valor predeterminado.
- Con el signo “Igual” se asigna el valor por defecto.
- Los parámetros opcionales se definen al final de la lista de parámetros, después de los parámetros obligatorios. Si se proporciona un valor para un  parámetro opcional, se debe proporcionar un valor a todos los parametros  opcionales anteriores.
- Por ejemplo, en el siguiente código, el método de instancia ExampleMethod  define  un parámetro obligatorio y dos opcionales:

```csharp
public void ExampleMethod(int required, string optionalstr = "default string", int optionalint = 10)
```

- La siguiente llamada a ExampleMethod provoca un error del compilador, porque se proporciona un  parámetro para el tercer argumento, pero no para el segundo:

```csharp
anExample.ExampleMethod(3, ,4);
```
-  Sin embargo, si conoce el nombre del tercer parámetro, puede usar un argumento con nombre para realizar la tarea:


```csharp
anExample.ExampleMethod(3, optionalint: 4);
```
:::tip info
- [Optional arguments](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/named-and-optional-arguments#optional-arguments)
- [C# Optional Parameters](https://www.tutlane.com/tutorial/csharp/csharp-optional-parameters)
:::


## Tipos de datos
- Las variables pueden ser de diferentes tipos, como texto, números enteros, números decimales, valores booleanos, etc.
- Por lo tanto, necesitamos contenedores(cajas) de diferentes tipos(tamaño), ya que  un número como 10 ocupa menos espacio que un número muy grande, como 1,039,039,406,050,556,446,456.
- El poder manejar diferentes tipos de variables o contenedores nos va a servir para optimizar al máximo el espacio de la memoria del ordenador. ¿Para qué almacenar el valor 10 en una caja en la que cabe un número  1039039046050556546456?
- Ahora imagina un camión de mudanzas. Este representa la memoria RAM. El tamaño del camión es finito, por lo tanto, si no se aprovecha bien el espacio, se desperdicia.




#### Hay dos categorias según el tipo de dato
#### 1- Integrados
- Los tipos de datos primitivos en C# son objetos en el espacio de nombres System.
- Estos representan números enteros o decimales, expresiones booleanas, caracteres de texto, valores decimales y otros tipos de datos. También hay tipos string y object integrados.
- [Más información.](https://learn.microsoft.com/es-es/dotnet/csharp/language-reference/builtin-types/built-in-types)
![Primitivos](https://www.programacionfacil.org/images/cursos/c_sharp/xtipos_datos_c_sharp.png.pagespeed.ic.TRum5Bpa2G.webp)

#### 2- Personalizados
- Puedes usar las palabras clave : struct , class , interface , enum y record para crear tus propios tipos de datos personalizados.
- .NET te ofrece una colección de tipos personalizados que puede usar en tus propios programas.



#### Por valor o Referencia
-  Los tipos de datos en C# se pueden clasificar en dos categorías: tipos de valor y tipos de referencia.


#### 1- Tipos de valor
- Almacenan directamente el valor en la memoria y cada variable tiene una copia independiente del valor.
- Los tipos de valor almacenan directamente sus datos en la memoria. Cada variable de tipo de valor tiene su propia copia de los datos, lo que significa que no hay compartición entre diferentes variables. Si se asigna un tipo de valor a otra variable, se crea una copia independiente.
- Los tipos de valor son como cajas individuales que guardan sus propios datos. Cada vez que creas una nueva caja (variable), obtienes una copia separada. Por ejemplo, si tienes una caja con el número 10 y luego haces una copia de esa caja, la nueva caja tendrá también el número 10, pero son dos cajas distintas. Si cambias el número en una, no afectará a la otra.
- Los tipos de valor en C# incluyen:
   - Números enteros: int, long, short, byte
   - Números decimales: float, double, decimal
   - Booleanos: bool
   - Caracteres: char
   - Estructuras: struct





#### 2- Tipos de referencia:
- Los tipos de referencia almacenan una referencia (o dirección de memoria) a los datos en lugar de los datos en sí. Esto significa que múltiples variables pueden referirse al mismo objeto en memoria. Si se modifica el objeto a través de una variable, los cambios serán visibles a través de todas las variables que referencian ese objeto. Los tipos de referencia en C# incluyen:
- Los tipos de referencia en C# incluyen:
   - Cadenas: string
   - Arreglos: Array
   - Clases: class
   - Delegados: delegate
   - Interfaces: interface
- Son aquellos que se almacenan en la memoria dinámica (RAM) y se accede a ellos a través de una referencia. Esto significa que, en lugar de almacenar directamente el valor de un objeto en la memoria, se almacena una referencia a ese objeto.
- Cuando se asigna una referencia a un objeto a otra variable, ambas variables apuntan al mismo objeto en la memoria, por lo que los cambios realizados en una variable se reflejarán en la otra.
- Los tipos de referencia son como un grupo de personas que comparten un mismo mapa. Si una persona realiza una marca en el mapa, todas las demás que tienen acceso al mismo mapa verán esa marca. Por ejemplo, si una persona tiene un objeto de tipo string que contiene "Hola", y otras personas también están mirando el mismo mapa, si una de ellas cambia el contenido a "Hola, mundo", todas las personas verán "Hola, mundo".




:::tip info
- [Explicación en javascript](https://flevatti.github.io/documentacion/docs/Javascript/objeto#por-valor-vs-por-referencia)
- [El sistema de tipos de C#](https://learn.microsoft.com/es-es/dotnet/csharp/fundamentals/types/)
- [Los tipos de datos de C# y las variables](https://www.programacionfacil.org/cursos/c_sharp/c_sharp_capitulo_3_los_tipos_de_datos_y_variables.html)
- [Operadores, tipos de datos, variables en C# - Programación en C#. Net con Visual Studio 2013 (3-25)](https://www.incanatoit.com/2014/11/operadores-tipos-de-datos-variables-programacion-csharp-net.html)
- [Tipos numéricos enteros (referencia de C#)](https://learn.microsoft.com/es-es/dotnet/csharp/language-reference/builtin-types/integral-numeric-types)
- [Tipos integrados (referencia de C#)](https://learn.microsoft.com/es-es/dotnet/csharp/language-reference/builtin-types/built-in-types)
- [Tipos numéricos de punto flotante (referencia de C#)](https://learn.microsoft.com/es-es/dotnet/csharp/language-reference/builtin-types/floating-point-numeric-types)
- [Tipos de referencia integrados (referencia de C#)](https://learn.microsoft.com/es-es/dotnet/csharp/language-reference/builtin-types/reference-types)
- [Tipos de estructura (Referencia de C#)](https://learn.microsoft.com/es-es/dotnet/csharp/language-reference/builtin-types/struct)
- [Tipos de datos en C#](https://oregoom.com/c-sharp/tipos-de-datos/)
- [Tipos y miembros de C#](https://learn.microsoft.com/es-es/dotnet/csharp/tour-of-csharp/types)
- [Tipos y variables](https://learn.microsoft.com/es-es/dotnet/csharp/tour-of-csharp/#types-and-variables)
:::

## Struct
- Un struct en C# es una estructura de datos que se parece a la de una clase. Se utiliza para representar objetos que contienen datos relativamente simples y que no necesitan la flexibilidad de una clase (como herencia o métodos complejos como el polimorfismo).
- Funcionan de la misma manera que las clases.
- Es un [tipo de valor](#1--tipos-de-valor) que puede encapsular datos y funcionalidad relacionada.
- También puede tener miembros estáticos.

#### Características principales de un struct en C#
1.	Tipos por valor: Los structs se almacenan directamente en la pila (stack), lo que los hace más rápidos de crear y destruir en comparación con los objetos de tipo referencia (que se almacenan en el heap).
2.	Inmutabilidad recomendada: Aunque los structs pueden ser mutables (sus campos pueden cambiar), generalmente es una buena práctica que los structs sean inmutables (readonly) para evitar problemas de rendimiento y errores en la copia.
3.	No admiten herencia: Los structs no pueden heredar de otros structs o clases, ni pueden ser clases base de otros structs o clases. Sin embargo, todos los structs heredan implícitamente de System.ValueType, que a su vez hereda de Object.
4.	Adecuados para datos pequeños: Se recomienda usar structs cuando se tienen pequeñas cantidades de datos que no requieren comportamientos complejos. Para objetos más grandes y complejos, es preferible usar una clase.
5. Aunque puedes tener constructores en un struct, es importante recordar que un struct siempre tiene un constructor por defecto (sin parámetros), incluso si no lo defines explícitamente.
6. En un struct no puedes tener un constructor que no inicialice todos los campos.


#### Ejemplo
```csharp
public struct Coords
{
    public Coords(double x, double y)
    {
        X = x;
        Y = y;
    }

    public double X { get; }
    public double Y { get; }

    public override string ToString() => $"({X}, {Y})";
}

```
:::tip
Se crean “instancias” con el new , como si fuera una clase.
:::

#### Ejemplo

```csharp
public struct Punto
{
    public int X { get; set; }
    public int Y { get; set; }

    public Punto(int x, int y)
    {
        X = x;
        Y = y;
    }

    public void MostrarPunto()
    {
        Console.WriteLine($"Punto: ({X}, {Y})");
    }
}

```
:::tip Observación
- Se definen igual que una clase, solo que con la palabra clave “struct” en lugar de “class”.
:::


```csharp
class Program
{
    static void Main(string[] args)
    {
        // Creación de un struct Punto
        Punto punto1 = new Punto(5, 10);

        // Copiamos el contenido de punto1 a punto2
        Punto punto2 = punto1;

        // Cambiamos el valor de X en punto2
        punto2.X = 20;

        // Mostramos ambos puntos para ver las diferencias
        punto1.MostrarPunto(); // Muestra: Punto: (5, 10)
        punto2.MostrarPunto(); // Muestra: Punto: (20, 10)
    }
}

```
:::tip Observación
- Puedes crear instancias de un struct usando la palabra clave new, de manera similar a cómo lo harías con una clase.
:::

- A diferencia de las clases, en los structs puedes omitir el uso de new y aun así crear una instancia. Si omites new, no se llama al constructor, y los campos del struct deben inicializarse manualmente antes de usarlos, de lo contrario tendrás un error.
- Ejemplo de creación sin new:
```csharp

Punto punto2;
punto2.X = 3;
punto2.Y = 7;

Console.WriteLine($"Punto 2: X = {punto2.X}, Y = {punto2.Y}");

```
#### Diferencias
#### 1- Diferentes tipos
- Las structs son value types (tipos por valor), mientras que las clases son reference types (tipos por referencia).
#### 2- Las Structs se crean en el Stack, mientras que las Classes lo hacen en el Heap. 
- Tanto Stack como Heap son estructuras de datos utilizadas para la reserva de espacios de memoria en el software.
- En el caso del Stack (o pila de llamadas) cabe destacar que su ejecución es inmediata, controlada por la CPU. Es muy eficiente y rápido. Funciona bajo el concepto de LIFO (last in first out), de ahí su rapidez y eficiencia.
- El Heap (o almacenamiento libre) es una enorme pieza de memoria que el sistema puede solicitar reservar un trocito para su uso (mediante alloc). Añadir o borrar memoria del heap es un proceso más costoso y pesado.

#### Ref struct
- Las ref struct (estructuras de referencia) fueron introducidas en C# 7.2. Son un tipo especial de estructura que se utiliza principalmente para manejar la memoria y el rendimiento de manera más eficiente, especialmente en escenarios donde se requiere el uso de datos en stack (pila) en lugar de heap (montículo).
#### ¿Qué son las ref struct?
- Una ref struct es una estructura que:
   1.	Se almacena en la pila (stack):
      - A diferencia de las estructuras normales, que pueden ser almacenadas en el heap cuando se utilizan como parte de una clase, las ref struct siempre se almacenan en la pila. Esto les permite tener un ciclo de vida más corto y reducir la presión sobre el recolector de basura.
   2.	No se puede utilizar en campos de tipos de referencia:
      - No se puede usar una ref struct como campo en una clase, ni como parte de un tipo que esté en el heap. Esto significa que su uso está restringido a contextos donde se garantiza que no se copiarán innecesariamente o se mantendrán en el heap.
   3.	Se utilizan para trabajar con datos de forma eficiente:
      - Son útiles para trabajar con datos que necesitan ser manejados de manera rápida y eficiente, como al implementar ciertas operaciones en Span&lt;T> y ReadOnlySpan&lt;T>. Estas estructuras permiten un acceso rápido y seguro a datos en memoria sin la sobrecarga de asignación de heap.
- Las ref struct en C# tienen varias restricciones específicas que aseguran que se utilicen correctamente y que aprovechen sus ventajas de rendimiento. Aquí están las principales restricciones:
   -  No pueden ser utilizadas como campos de tipos de referencia:
      -	No puedes declarar una ref struct como un campo en una clase (tipo de referencia). Esto significa que no se pueden almacenar en el heap. Solo pueden ser utilizados en el contexto de una función o como parte de otras estructuras de valor.
   -  No pueden ser asignadas a una variable de tipo de referencia:
      -	No se pueden hacer boxing (encapsulación de un valor en un tipo de referencia) con ref struct. Esto significa que no puedes convertir una ref struct en un tipo de referencia, lo que evitaría su uso ineficiente en el heap.
   -  No pueden ser utilizadas como elementos de un array:
      -	No puedes crear un arreglo de ref struct. Esto significa que no puedes tener un ref struct[]. La razón detrás de esto es que los arreglos se almacenan en el heap, y las ref struct no deben ser movidas a ese tipo de almacenamiento.
   - No pueden ser utilizadas como parámetros de tipo de referencia:
      -	No se pueden pasar como argumentos a métodos que esperan un tipo de referencia. Las ref struct deben ser pasadas por valor y no pueden ser utilizadas en contextos donde se espera una referencia.
   -  No pueden tener destructores:
      -	No puedes definir destructores en ref struct. Esto se debe a que las ref struct no se gestionan a través del recolector de basura, y no necesitan tener un destructor para limpiar recursos.


#### Ejemplo
- Aquí tienes un ejemplo simple de una ref struct:
```csharp
public ref struct Point
{
    public int X;
    public int Y;

    public Point(int x, int y)
    {
        X = x;
        Y = y;
    }
}

// Uso de ref struct
Point p1 = new Point(10, 20);

```
#### Diferencia entre ref struct y struct
##### Almacenamiento en memoria
-	struct:
      -	Se pueden almacenar en la pila o en el heap. Si se utilizan como variables locales, se almacenan en la pila, pero si se declaran como campos dentro de una clase (tipo de referencia), se almacenan en el heap.
-	ref struct:
      -	Siempre se almacenan en la pila. No pueden ser utilizados en el heap, lo que asegura que su ciclo de vida esté controlado y sea más eficiente en términos de gestión de memoria.
##### Restricciones de uso
-	struct:
      - Pueden ser utilizadas como campos en clases y pueden ser asignadas a variables de tipo de referencia (pueden ser sujetas a boxing).
-	ref struct:
      - Tienen varias restricciones:
         -	No pueden ser utilizados como campos en tipos de referencia (clases).
         -	No se pueden asignar a variables de tipo de referencia (no se pueden hacer boxing).
         -	No pueden ser utilizados en arreglos.
         -	No pueden ser pasados como parámetros de tipo de referencia a métodos.
         -	No pueden tener destructores.
##### Propósito y uso
-	struct:
      - Son útiles para representar datos pequeños y simples. Son tipos de valor, lo que significa que se copian cuando se pasan a métodos o se asignan a otras variables. Se utilizan comúnmente para representar entidades simples, como puntos en un espacio 2D o colores.
-	ref struct:
      -	Se utilizan principalmente para optimizar el rendimiento y el manejo de memoria en situaciones donde es crítico evitar copias innecesarias. Son útiles para trabajar con datos en pila de forma eficiente, especialmente en operaciones que involucran Span&lt;T> y ReadOnlySpan&lt;T>, donde el acceso a la memoria debe ser rápido y seguro.
##### Boxing y Unboxing
-	struct:
      - Permiten el boxing, lo que significa que se pueden convertir en un tipo de referencia. Esto puede introducir sobrecarga y afectar el rendimiento.
-	ref struct:
      -	No permiten el boxing, lo que asegura que no se conviertan en un tipo de referencia y, por lo tanto, siempre se mantengan en la pila.


#### Struct genericos
- Puedes usar tipos genéricos con struct. Al igual que las clases genéricas, los struct genéricos te permiten definir estructuras que pueden trabajar con diferentes tipos de datos. Aquí hay un ejemplo básico de cómo se define y usa un struct genérico:
```csharp
public struct MiStructGenerico<T>
{
    public T Valor { get; set; }

    public MiStructGenerico(T valor)
    {
        Valor = valor;
    }

    public void MostrarValor()
    {
        Console.WriteLine(Valor);
    }
}

class Program
{
    static void Main(string[] args)
    {
        MiStructGenerico<int> structEntero = new MiStructGenerico<int>(10);
        structEntero.MostrarValor();  // Salida: 10

        MiStructGenerico<string> structCadena = new MiStructGenerico<string>("Hola");
        structCadena.MostrarValor();  // Salida: Hola
    }
}

```
:::tip Observación
- En este caso, MiStructGenerico&lt;T> es un struct genérico donde T es el tipo de dato.
- Puedes usar cualquier tipo de dato en lugar de T al crear una instancia de esta estructura genérica.


:::

## Colecciones genericas
### List&lt;T>
- La clase List&lt;T> representa una lista fuertemente tipada de objetos que se puede acceder por índice. Te permite almacenar tantos elementos como quieras, a diferencia de una matriz, que tiene un tamaño fijo.

```csharp
List<string> listaNombres = new List<string>();
listaNombres.Add("Ana");
listaNombres.Add("Juan");
listaNombres.Add("Sofía");

```

### Dictionary&lt;TKEY,TVALUE>
- El diccionario Dictionary&lt;TKey, TValue> es una colección de pares clave/valor. Cada clave es única y está asociada a un valor.


```csharp
Dictionary<string, int> edades = new Dictionary<string, int>();
edades.Add("Ana", 25);
edades.Add("Juan", 32);
edades.Add("Sofía", 29);

```

### Queue&lt;T>
- La cola Queue&lt;T> representa una colección de objetos de tipo First-In-First-Out (FIFO). Puedes agregar elementos al final de la cola y quitar elementos desde el principio.

```csharp
Queue<string> filaSupermercado = new Queue<string>();
filaSupermercado.Enqueue("Cliente 1");
filaSupermercado.Enqueue("Cliente 2");
filaSupermercado.Enqueue("Cliente 3");

```


### Stack&lt;T>
- La pila Stack&lt;T> es una colección de objetos de tipo Last-In-First-Out (LIFO). Puedes agregar elementos a la parte superior de la pila y quitar elementos desde la parte superior.

```csharp
Stack<string> pilaLibros = new Stack<string>();
pilaLibros.Push("Libro 1");
pilaLibros.Push("Libro 2");
pilaLibros.Push("Libro 3");

```

## Namespace
-  Se pueden considerar como un contenedor(carpeta) que contiene otros espacios de nombres (namespaces), clases, etc.
- Todo lo que contiene esta “carpeta”, son “miembros” del namespace.
- Un espacio de nombres puede contener tener los siguientes como miembros:
  -	Namespaces 
  -	Classes
  -	Interfaces
  -	Structures
  -	Delegates
- Los espacios de nombres no son obligatorios en un programa C#, pero juegan un papel importante en la escritura de códigos más limpios y la gestión de proyectos más grandes.
- Comprendamos el concepto de espacio de nombres con un escenario de la vida real. Tenemos una gran cantidad de archivos y carpetas en nuestro ordenador. Imagine lo difícil que sería administrarlos si se colocaran en un solo directorio (carpeta). Es por eso que colocamos los archivos y carpetas relacionados en un directorio separado. Esto nos ayuda a gestionar nuestros datos correctamente.
- El concepto de espacio de nombres es similar en C#. Nos ayuda a organizar diferentes miembros colocando miembros relacionados en el mismo espacio de nombres.
- El espacio de nombres también resuelve el problema del conflicto de nombres . Dos o más clases cuando se colocan en diferentes espacios de nombres pueden tener el mismo nombre.

#### Definición


```csharp
namespace nombre
{
    Cuerpo del namespace
}

```

- Ejemplo:
```csharp
namespace MyNamespace
{
    class MyClass
    {
        public void MyMethod()
        {
            System.Console.WriteLine("Creating my namespace");
		}
	}
}

```

:::tip Observación
En el ejemplo anterior, MyNamespace es un namespace. Contiene una clase MyClass como su miembro. MyMethod es un método de clase MyClass.

:::

#### Acceder a miembros del espacio de nombre

- Se puede acceder a los miembros de un espacio de nombre mediante el punto (“.”). La sintaxis para acceder al miembro del espacio de nombres es : "NameSpace-nombre.Miembro".

Ejemplo:

```csharp
using System;

namespace MyNamespace
{
    public class SampleClass
    {
        public static void myMethod()
        {
            Console.WriteLine("Creating my namespace");
        }
    }
}
 
namespace MyProgram
{
    public class MyClass
    {
        public static void Main()
        {
            MyNamespace.SampleClass.myMethod();
        }
    }
}

```

#### Palabra clave using
- Se puede incluir un espacio de nombres en un programa (archivo) utilizando la palabra clave **using**. 
- La sintaxis es: "using Namespace-nombre;"
- Ejemplo:

```csharp
using System;
```

:::tip Observación
Todo lo que contiene el namespace-nombre (System) se va a importar en el archivo.
:::


- La ventaja de este enfoque es que no tenemos que especificar el nombre completo de los miembros de ese espacio de nombres cada vez que accedemos a él.


#### Ejemplo
- Una vez que la línea “using System;” se incluye en la parte superior del programa (archivo).
- Podemos escribir:

```csharp
Console.WriteLine("¡Hola mundo!");
```
- En lugar del nombre completo, es decir

```csharp
System.Console.WriteLine("¡Hola mundo!");
```

:::tip info
- [Namespaces in C# Programming](https://www.programiz.com/csharp-programming/namespaces)
- [C# - Namespaces](https://www.tutorialspoint.com/csharp/csharp_namespaces.htm)

:::

#### Sin espacio de nombre
- En C# todos los tipos (clases, estructuras, interfaces, etc.) que se declaran sin un namespace explícito pertenecen al mismo espacio de nombre predeterminado. Esto puede tener algunas implicaciones importantes.
##### Espacio de Nombres Predeterminado
-	Sin Declaración de namespace:
      -	Cuando no especificas un namespace en tus archivos, los tipos definidos en ellos se colocan en el espacio de nombre predeterminado, que es simplemente un espacio de nombre vacío.
      -	Por lo tanto, todos los tipos definidos en diferentes archivos que no tienen namespace declarado se encuentran en el mismo espacio de nombre, lo que puede llevar a conflictos de nombres si hay tipos con el mismo nombre.
      - Cuando todos los tipos están en el mismo espacio de nombre, efectivamente puedes acceder a sus miembros (propiedades, métodos, etc.) sin especificar un prefijo de espacio de nombre. Esto facilita el acceso a los diferentes tipos y sus funcionalidades dentro del mismo contexto. Sin embargo, al no tener separación mediante namespace, se pueden presentar conflictos de nombres si tienes más de un tipo (clase, estructura, etc.) con el mismo nombre.



## Valores especiales
#### NaN
- Es una constante que representa un valor que no es un número.
- Un método u operador devuelve NaN cuando el resultado de una operación no está definido. 
- Ejemplo: 
```vsharp
public const double NaN = NaN;
```






:::tip info
- [Double.NaN Field](https://learn.microsoft.com/en-us/dotnet/api/system.double.nan?view=net-7.0)

:::

#### Símbolo infinito
- Infinity representa un infinito positivo. Es una constante:

```csharp
public const double PositiveInfinity = Infinity;
```

- Por otro lado -Infinity representa infinito negativo. Es una constante:

```csharp
public const double NegativeInfinity = -Infinity;
```


:::tip info
- [Double.PositiveInfinity Campo](https://learn.microsoft.com/es-es/dotnet/api/system.double.positiveinfinity?view=net-7.0)
- [Double.NegativeInfinity Campo](https://learn.microsoft.com/es-es/dotnet/api/system.double.negativeinfinity?view=net-7.0)
:::


## Delegates
- Un delegate en C# es un tipo de dato.
- Los delegates se encargan de referenciar métodos que tengan los mismos argumentos de entrada y tipo de retorno.
- Un delegado es un puntero a una función que puede hacer referencia a un método que tenga la misma firma que la del delegado. 
- Los delegados se utilizan para definir métodos de callback e implementar el manejo de eventos, y se declaran utilizando la palabra clave **delegate**. 

#### Como crear un Delegate
- Veamos como crear un tipo delegate, la siguiente sintaxis define su estructura:

```csharp
[Modificador de acceso] delegate [Tipo de retorno] [Nombre del Delegate]([Argumentos de entrada]); 
```

- Con base en la sintaxis anterior crearemos un delegate que apunte a métodos que coincidan con los  argumentos y el tipo de retorno:

```csharp
public delegate int CalculateDelegate(int x, int y);
```

:::tip
Algunos programadores agregan la palabra Delegate al final del nombre del tipo Delegate. Esto es muy común pero no es universal tampoco obligatorio.

:::

- Ahora necesitamos métodos para almacenar en nuestro tipo Delegate y hacer uso del tipo Delegate para referenciar esos métodos:


```csharp
public int Add(int x, int y)
{
   return x + y;
}

public int Multiply(int x, int y)
{
   return x * y;
}

public void TestDelegate()
{
   CalculateDelegate instanceDelegate= Add;
   Console.WriteLine(instanceDelegate(5, 4)); // Salida 9

   instanceDelegate = Multiply;
   Console.WriteLine(instanceDelegate(5, 4)); // Salida 20
}

```

:::tip Observación
- Tenemos una instancia del Delegate que creamos.
- A la instancia, le asignamos el nombre del método que coincide con el delegate (argumentos y tipo de retorno).
- Luego la “instancia” se vuelve un “método” y sirve para llamar a la función que le asignamos.
- Como podemos observar en el código anterior solo instanciamos una vez el tipo Delegate y la segunda vez asignamos un segundo método sin nada más, esto gracias a que desde C# 2.0 se agregó la creación automática de un nuevo delegate cuando se asigna un grupo de métodos a un tipo delegate.
:::




:::tip Crear una instancia
- Le podes asignar un método, con  el signo igual (“= metodo”) o creando una instancia de alguna clase Delegate (“= new nombreClaseDelegate<…>()”).
- "nombreClaseDelegate" puede ser el "nombre" de algún delegate que creamos también.
-  “<…>” se puede omitir en algunos casos (cuando no es genérico).
- Si creas una instancia, en el constructor se debe especificar el método que le vas a asignar.

:::

- Otra característica importante de los Delegates de C# es la multidifusión que permite combinar y anidar métodos a la lista de invocación de una instancia de tipo delegate, utilizamos el operador + o += para lograrlo.

```csharp
public void MethodOne()
{
   Console.WriteLine("Método 1");
} 

public void MethodTwo()
{
   Console.WriteLine("Método 2");
} 

// Definir el Tipo Delegate
public delegate void FunctionDelegate();

public void TestMulticast()
{
   FunctionDelegate d = MethodOne;
   d += MethodTwo;

   d();
}

// Salida:
// Método 1
// Método 2

```

:::tip Observación
- Con el + o += es como que creamos una lista de métodos en una instancia delegate (todos coinciden con el tipo de retorno y argumento).
- Cuando llamamos a la instancia, se ejecutan todos los métodos de la lista en orden.


:::


:::tip
La multidifusión de los Delegates es la característica que permite suscribirse a Eventos y manejadores de Eventos.
:::


:::tip info
- [Using Delegates (C# Programming Guide)](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/delegates/using-delegates)
- [Píldoras de C#: Delegates, Métodos Anónimos, Expresiones Lambda y Eventos](https://dev.to/ebarrioscode/pildoras-de-c-delegates-metodos-anonimos-expresiones-lambda-y-eventos-3ah8#:~:text=Un%20delegate%20en%20C%23%20es,entrada%20y%20tipo%20de%20retorno)
- [[.NET] Qué es un Delegate y su implementación en C# (I).](https://sparraguerra.wordpress.com/2015/07/13/net-que-es-un-delegate-y-su-implementacion-en-c-i/)
:::

## Indexer
- Los indexers son una propiedad que nos permite trabajar con un objeto como si fuera un array. 
- Recuerda que para acceder a los elementos de un array lo hacemos con [index(posición)]. 

#### Cómo definir un indexer en C#

```csharp
[modificador_acceso] [tipo_return] this [index]
{
  get 
  {
    return x[index]
  }
  set 
  {
    x[index] = value;
  }
}  

```
- Como vemos, un indexer debe contener los siguientes términos:
   -	Modificador de acceso:  puede ser público, privado, protected o internal. 
   -	Tipo de retorno: cualquier tipo de dato C# es válido.
   -	This: palabra clave que apunta al objeto de la clase actual.
   -	Index: indicamos la posición en la lista(array) al que vamos a acceder. No tiene por qué ser un entero como hacemos en los arrays, puede ser cualquier tipo de dato. 
   -	Get, set : propiedades de acceso a los elementos. 
   -	Cuando asignamos valor, lo hacemos a través de la palabra clave value. 

#### Ejemplo
```csharp
using System;

namespace IndexerApplication {
   
   class IndexedNames {
      private string[] namelist = new string[size];
      static public int size = 10;
      
      public IndexedNames() {
         for (int i = 0; i < size; i++)
         namelist[i] = "N. A.";
      }
      public string this[int index] {
         get {
            string tmp;
         
            if( index >= 0 && index <= size-1 ) {
               tmp = namelist[index];
            } else {
               tmp = "";
            }
            
            return ( tmp );
         }
         set {
            if( index >= 0 && index <= size-1 ) {
               namelist[index] = value;
            }
         }
      }
      static void Main(string[] args) {
         IndexedNames names = new IndexedNames();
         names[0] = "Zara";
         names[1] = "Riz";
         names[2] = "Nuha";
         names[3] = "Asif";
         names[4] = "Davinder";
         names[5] = "Sunil";
         names[6] = "Rubic";
         
         for ( int i = 0; i < IndexedNames.size; i++ ) {
            Console.WriteLine(names[i]);
         }
         Console.ReadKey();
      }
   }
}

```

#### Indexadores sobrecargados

- Los indexadores pueden estar sobrecargados. Los indexadores también se pueden declarar con varios parámetros y cada parámetro puede ser de un tipo diferente. 
- No es necesario que los índices tengan que ser números enteros. C# permite que los índices sean de otros tipos, por ejemplo, una cadena.

```csharp
using System;

namespace IndexerApplication {
   class IndexedNames {
      private string[] namelist = new string[size];
      static public int size = 10;
      
      public IndexedNames() {
         for (int i = 0; i < size; i++) {
            namelist[i] = "N. A.";
         }
      }
      public string this[int index] {
         get {
            string tmp;
            
            if( index >= 0 && index <= size-1 ) {
               tmp = namelist[index];
            } else {
               tmp = "";
            }
            
            return ( tmp );
         }
         set {
            if( index >= 0 && index <= size-1 ) {
               namelist[index] = value;
            }
         }
      }
      
      public int this[string name] {
         get {
            int index = 0;
            
            while(index < size) {
               if (namelist[index] == name) {
                return index;
               }
               index++;
            }
            return index;
         }
      }

      static void Main(string[] args) {
         IndexedNames names = new IndexedNames();
         names[0] = "Zara";
         names[1] = "Riz";
         names[2] = "Nuha";
         names[3] = "Asif";
         names[4] = "Davinder";
         names[5] = "Sunil";
         names[6] = "Rubic";
         
         //using the first indexer with int parameter
         for (int i = 0; i < IndexedNames.size; i++) {
            Console.WriteLine(names[i]);
         }
         
         //using the second indexer with the string parameter
         Console.WriteLine(names["Nuha"]);
         Console.ReadKey();
      }
   }
}

```

:::tip
- Hemos visto indexers de una dimensión, pero también podemos tener multidimensionales:
   - public String this[string searchField, string searchField2] 


:::



:::tip info
- [C# - Indexers](https://www.tutorialspoint.com/csharp/csharp_indexers.htm)
- [Indexers en C#](https://www.netmentor.es/entrada/indexer-csharp)
- [C# | Indexers](https://www.netmentor.es/entrada/indexer-csharp)
:::


## Operador ternario
- El operador ternario en C# es una herramienta útil para simplificar el código y tomar decisiones basadas en una condición booleana.
- En su forma más básica, el operador ternario(?) es una forma abreviada de escribir una sentencia if,else.
- Nos permite establecer un valor o una expresión basada en una condición booleana. La sintaxis del operador ternario es la siguiente:

```csharp
condición ? valorSiVerdadero : valorSiFalso
```

- En esta sintaxis, condición es la expresión booleana que se evalúa. Si la condición es verdadera, la expresión valorSiVerdadero se ejecuta (Si solo es un dato se retorna/devuelve). Si la condición es falsa, se ejecuta la expresión valorSiFalso (Si solo es un dato se retorna/devuelve). 
- En otras palabras, el operador ternario funciona como una expresión que devuelve un valor u otro dependiendo de la evaluación de la condición.
- Aquí hay un ejemplo de cómo se puede utilizar el operador ternario en C#:

```csharp
int edad = 23;
string comprobacionEdad = edad > 18 ? "Mayor de edad" : "Menor de edad";
Console.WriteLine($"El usuario es {comprobacionEdad}");

```

:::tip Observación
En este ejemplo, la variable edad se evalúa para ver si es mayor de edad. Si es así, la expresión "Mayor de edad" se devuelve como resultado y se asigna a la variable comprobacionEdad. Si edad es menor o igual a 18, la expresión "Menor de edad" se devuelve como resultado y se asigna a la variable comprobacionEdad.
:::

:::tip info
- [Operador Ternario en C#](https://dev.to/veronicaguamann/operador-ternario-en-c-35jp)
- [?: operator - the ternary conditional operator](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/conditional-operator)

:::

## Firma del metodo

- También se puede llamar signatura de un método.
- Los métodos se declaran en una clase, struct o interfaz especificando el nivel de acceso, como public o private, modificadores opcionales como abstract o sealed, el tipo de dato que retorna, el nombre del método y  los argumento/parametros del método. Todas estas partes forman la firma del método.
  

:::tip
El tipo de dato  devuelto de un método no forma parte de la firma del método para sobrecargar el método. Sin embargo, forma parte de la firma del método al determinar la compatibilidad entre un delegado y el método que señala.
:::

- Los argumentos de un método se encierran entre paréntesis y se separan por comas. Los paréntesis vacíos indican que el método no requiere parámetros.
-  Esta clase contiene cuatro métodos (firmas):


```csharp
abstract class Motorcycle
{
    public void StartEngine() { }

    protected void AddGas(int gallons) { }


    public virtual int Drive(int miles, int speed) { }

    public abstract double GetTopSpeed();
}

```

