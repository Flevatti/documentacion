---
sidebar_position: 4
---
# Conceptos de POO - Parte 2

## Abstracción
- Si nuevamente nos vamos al diccionario tenemos que abstraer significa dejar de lado lo poco relevante y enfocarnos en lo más importante o relevante para un fin buscado.
- Trasponiendo este concepto hacia la programación orientada a objetos tenemos que este concepto establece que nos enfoquemos sólo en los campos que son relevantes para una clase.
- La abstracción de datos es el proceso de ocultar ciertos detalles y mostrar solo la información esencial al usuario.
- La abstracción se puede lograr con clases abstractas o interfaces.


#### Ejemplo

```csharp
	public class Cliente
{
    public int Id { get; set; }
    public string Nombres { get; set; }
    public string Apellidos { get; set; }
    public DateTime FechaRegistro { get; set; }
    public double Credito { get; set; }
}

```
:::tip Observación
- Un cliente puede tener miles de características, que traducidos a un lenguaje de programación orientada a objetos serían campos y propiedades, pero ¿Por qué sólo consideramos estos seis?
- La respuesta es fácil, porque la programación orientada a objetos nos indica mediante la Abstracción que sólo nos enfoquemos en aquello que es relevante para nuestro software, dejando de lado todo lo demás.


:::
## Herencia
- Es el mecanismo de la programación orientada orientada a objetos mediante el cual construímos una clase a partir de otra, compartiendo código de una hacia otra clase.
- A la clase que recibe los miembros de otra clase, es decir que hereda desde otra clase, se le llama clase hija.
- A la clase que da la herencia a su clase hija se le llama clase padre.
- En C#, es posible heredar campos y métodos de una clase a otra. Agrupamos el "concepto de herencia" en dos categorías:
  -	Clase derivada (hijo): la clase que hereda de otra clase
  -	Clase base (padre): la clase de la que se hereda
- Para heredar de una clase, use el  símbolo “**:**”.


#### Ejemplo
Clase padre:
```csharp
	public class DocumentoVenta
{
    public int Id { get; set; }
    public string Serie { get; set; }
    public string Correlativo { get; set; }
    public DateTime FechaEmision { get; set; }
    public double MontoTotal { get; set; }
}

```
Tiene dos clases hijas:

```csharp
	public class Boleta : DocumentoVenta
{
    public string Nombres { get; set; }
    public string Apellidos { get; set; }
}
	public class Factura : DocumentoVenta
{
    public string RazonSocial { get; set; }
}

```
:::tip Observación
Decimos que boleta y factura son hijas que heredan de su padre Documento venta ya que heredan todas las características de él, y le añaden sus propiedades particulares, con esto reducimos código redundante.

:::

#### Palara clave "sealed"
- Si no desea que otras clases hereden de una clase, use la palabra clave **sealed**.
- Si intenta acceder a una clase sealed, C# generará un error:


```csharp
sealed class Vehicle 
{
  ...
}

class Car : Vehicle 
{
  ...
}

```

#### Palara clave "base"

- La palabra clave “**base**” se usa para acceder a los constructores y métodos de la clase “padre”. 
- Úselo dentro del método , constructor, etc.

```csharp
using System;
public class Animal {
   public string repColor = "brown";
}
public class Reptile: Animal {
   string repColor = "green";
   public void display() {
      Console.WriteLine("Color: "+base.repColor);
      Console.WriteLine("Color: "+repColor);
   }
}
public class Demo {
   public static void Main() {
      Reptile rep = new Reptile();
      rep.display();
   }
}

```

:::tip
- Podemos usar los miembros de la clase base sin necesidad de utilizar la palabra clave base.
:::
### Herencia múltiple
- La herencia múltiple es cuando una clase hereda propiedades y métodos de más de una clase padre. En otras palabras, una clase hija puede tener múltiples clases padres. Este tipo de herencia es posible en algunos lenguajes de programación como C++, pero no en otros como Java.

#### ¿Por qué no se permite herencia múltiple en todos los lenguajes de programación?
- La herencia múltiple puede llevar a problemas de ambigüedad. En otras palabras, si dos clases padres tienen métodos o propiedades con el mismo nombre, puede no estar claro cuál de esos métodos o propiedades utilizar para la clase hija. 
- Por esta razón, algunos lenguajes de programación no permiten herencia múltiple.
#### Lista de lenguajes de programación que soportan herencia múltiple:
-	C++
-	Python
-	Ruby
#### Lista de lenguajes de programación que NO soportan herencia múltiple:
- Java
-	C#
-	PHP
#### Herencia simple y herencia múltiple
- La herencia simple y la herencia múltiple son dos conceptos clave en la programación orientada a objetos.
- La herencia simple implica que una clase hija solo puede heredar propiedades y métodos de una clase padre, mientras que la herencia múltiple implica que una clase hija puede heredar propiedades y métodos de más de una clase padre.
- Es importante tener en cuenta que no todos los lenguajes de programación permiten la herencia múltiple debido a la posible ambigüedad en los métodos y propiedades.
#### C# -- Herencia múltiple 
-  C# como otros lenguajes orientados a objetos, implementa herencia simple. Es decir, que solo podemos heredar de una clase padre.
- La manera de implementar herencia múltiple en C# es con interfaces. Ahora bien, esto es relativo, recordemos que una interfaz nos obliga a implementar cierto código, pero no nos proporciona una definición del mismo , al menos hasta C# 8 con los métodos default en interfaces. 
#### ¿cómo implemento herencia de una clase, y además implemento interfaces en C#?
- En C# primero debes indicar si heredas de una clase, y a continuación puedes implementar las interfaces que desees.
- Mientras que la herencia está limitada a una sola clase, el número de interfaces que puedes implementar no tiene límite. 
- Veamos un ejemplo para que nos quede más claro:


![Ejemplo](https://1.bp.blogspot.com/-k_INZV7rnKU/YH4Jkot-8ZI/AAAAAAABA1g/9vSeieRsRmULpnQbQX6WKY0MSlbmR5L3gCLcBGAsYHQ/s567/herenciC%2523.png)

:::tip Observación
- Aquí definí una clase llamada A. Una interfaz IEjemplo y otra interfaz IOperacion. Ambas son interfaces normales. Por ultimo definí una interfaz IDefault, en la implementó la nueva funcionalidad de C# 8, que es la de definir un método default. 
- Esta funcionalidad es sencilla, con ella las interfaces dejan de ser meros contratos y nos permiten implementar código como tal. En otras palabras, cada clase que implemente la interfaz tiene ya definido el comportamiento para los métodos default. Puede modificarlo si lo desea, pero si no, se usa el código que se especifico en la interfaz.
:::

- Ahora veamos como implementar herencia múltiple usando clases e interfaces:

![Ejemplo](https://1.bp.blogspot.com/-p_wL-533Gus/YH4KVnaGiII/AAAAAAABA1o/i7kbdZKNJN03R6oo-xv9X2Gm6pe4SALrACLcBGAsYHQ/s16000/clase%2BB.png)

:::tip Observación
- Como vemos B es una clase compleja. Primero hereda de A. Es importante recordar, en C# es indistinta la sintaxis para heredar de una clase o implementar una interfaz, pero lo primero que debe venir después de los “:” es la clase de la que se hereda. Es decir si cambio el orden, y pongo A en cualquier otra posición el compilador marcará error.
- Después de la clase de la que se hereda, pueden venir una serie de interfaces separadas por coma. Como dijimos antes una clase puede implementar cualquier número de Interfaces.
- En este caso, las primeras dos interfaces me obligan a implementar un método cada una. Lo interesante es la tercera: no implemente ningún método de la misma. Pero como sus métodos son default, no es necesario.
:::

-  Ahora veamos que puedo hacer con mi clase B:

![Ejemplo](https://1.bp.blogspot.com/-0wio5QDZFhQ/YH4PDoVoyvI/AAAAAAABA28/ERuOMB6e80MBVSydOOquNBxCo8ctgkp3ACLcBGAsYHQ/s16000/HerenciaMultipleC%2523.png)

:::tip Observación
- Como vemos cree un nuevo objeto B. Este objeto por supuesto puede usar los métodos nombrados como metodo1 y sumar, ya que los implemento. Hasta aquí todo muy sencillo, si la clase A tuviera sus propios métodos B podría usarlos, además de todos los que implemento obligado por las interfaces.
:::
- Pero con la nueva funcionalidad podemos hacer algo más. Bueno primero hay que admitir que tiene sus limitaciones, al momento de invocar los métodos default, debemos hacerlo desde un objeto de tipo de la interfaz que los contiene, no podemos hacerlo directo del objeto que la implementa. Veamos un ejemplo:


![Ejemplo](https://1.bp.blogspot.com/-ASWilh-eLHo/YH4QVmHic-I/AAAAAAABA3E/JYEGwXs_ZSQyUaxT1RQP_KH6tWLLN4hVACLcBGAsYHQ/s16000/InterfaceDefault.png)


:::tip Observación
- En este caso defino objeto2 como IDefault, pero le asigno el valor de new B(), es decir de un objeto B. Así puedo usar los métodos default de mi interfaz.
- En el segundo ejemplo, hago un casting. Ya tenía definido objeto como B, pero lo casteo a IDefault. De esa manera también puedo usar el método default multiplicar.
- Finalmente en la interfaz definí un método estático. Este es todavía más práctico, pues puedo ejecutarlo directamente usando IDefault, sin necesidad de tener ninguna instancia. 
:::

- Como vemos con los nuevos métodos default de interfaces se abre la puerta a una especie de herencia múltiple más completa en C#. Veamos un ejemplo:

![Ejemplo](https://1.bp.blogspot.com/-EeKEEzxwzCQ/YH4U6bDO8zI/AAAAAAABA3U/fo5j-aUJMVsMk2xMiNb924I-kw-Byf4oACLcBGAsYHQ/s16000/MultipleHerencia.png)


:::tip Observación
- Como vemos tengo 3 interfaces. Cada una tiene un método default diferente. Declaro IMultiAnimal como una nueva interfaz . Esta hereda de las otras 3 interfaces. 
- En las interfaces no tenemos limite, cada interfaz puede heredar de múltiples interfaces. 
- De esta manera hemos unido los 3 comportamientos en una sola interfaz. 
- Como vemos tengo 3 interfaces. Cada una tiene un método default diferente. Declaro IMultiAnimal como una nueva interfaz . Esta hereda de las otras 3 interfaces. En las interfaces no tenemos limite, cada interfaz puede heredar de múltiples interfaces. De esta manera hemos unido los 3 comportamientos en una sola interfaz.
-  Por última la clase MultiAnimal, implementa esta interfaz.
:::

- Ahora veamos como podemos usarla:

![Ejemplo](https://1.bp.blogspot.com/-hyGB7dLWsWs/YH4VumR0Y7I/AAAAAAABA3c/wED8lvBlVOULmO3p84C8P6jtJIT7nnxHQCLcBGAsYHQ/s16000/EJecutaAnimal.png)

:::tip Observación
- Como vemos hemos definido animal como IMultiAnimal, y lo creamos con new MultiAnimal(). Ahora nuestro objeto tiene los 3 métodos, puede maullar, ladrar y balar.
:::


:::tip info
- [Herencia múltiple en C#. Heredar de clase padre e implementar interfaz. Interfaces con métodos default.](https://robertomiguelz.blogspot.com/2021/04/herencia-multiple-en-c-heredar-de-clase.html)
- [Heredar de varias clases en C#](https://www.delftstack.com/es/howto/csharp/inherit-from-multiple-classes-in-csharp/)
- [Diferencia entre herencia simple y herencia multiple](https://tecnobits.com/diferencia-entre-herencia-simple-y-herencia-multiple/)
:::


## Encapsulamiento
- Especifica quien puede interactuar con los miembros de una clase.
- Este concepto puede ocultar los miembros de una clase hacia el exterior según sea conveniente.
- Este concepto está fuertemente relacionado con los [modificadores de acceso](./POO.md#modificadores-de-acceso)
- Para ver un ejemplo podemos utilizar la siguiente clase:

```csharp
	public class Cliente
{         
    public int Id { get; set; }
    public string Nombres { get; set; }
    public string Apellidos { get; set; }
    public DateTime FechaRegistro { get; set; }
    private double Credito { get; set; }
 
    public void AumentarCredito(double monto)
    {
        this.Credito += monto;
    }        
}

```
:::tip Observación
- Como notamos, podemos controlar el encapsulamiento con los modificadores de acceso, siendo que la clase Cliente es accesible desde cualquier parte de la aplicación, al igual que las propiedades Id, Nombres, Apellidos y FechaRegistro ya que todos estos son públicos.
- Sin embargo, el campo Credito sólo es accesible desde dentro de la clase (al ser privado) y si se quiere aumentar el crédito tenemos a nuestra disposición el método AumentarCredito ya que este sí que es público.
:::


## Polimorfismo
- Polimorfismo significa "muchas formas", y ocurre cuando tenemos muchas clases que están relacionadas entre sí.
- El polimorfismo es cuando se usa un método para realizar una tarea. Pero la misma acción(tarea) se puede hacer de diferentes maneras.
- Existen dos formas de  aplicar polimorfismo:
   -	Por interfaz
   -	Por herencia

#### Ejemplo de Herencia
Tenemos la clase padre Animal:
```csharp
	public abstract class Animal
{
    public abstract void EmitirSonido();
}

```
Y las clases hijas:
```csharp
	public class Perro : Animal
{
    public override void EmitirSonido()
    {
        Console.WriteLine("Guau guau!");
    }
}

	public class Gato : Animal
{
    public override void EmitirSonido()
    {
        Console.WriteLine("Miau miau!");
    }
}

```

#### Otro ejemplo
- Piense en una clase base llamada Animal que tiene un método llamado animalSound(). 
- Las clases derivadas de animales podrían ser cerdos, gatos, perros, pájaros, y también tienen su propia implementación de animalSound(el cerdo gruñe y el gato maúlla, etc.)


```csharp
class Animal  
{
  public void animalSound() 
  {
    Console.WriteLine("The animal makes a sound");
  }
}

class Pig : Animal 
{
  public void animalSound() 
  {
    Console.WriteLine("The pig says: wee wee");
  }
}

class Dog : Animal 
{
  public void animalSound() 
  {
    Console.WriteLine("The dog says: bow wow");
  }
}

class Program 
{
  static void Main(string[] args) 
  {
    Animal myAnimal = new Animal();  
    Animal myPig = new Pig();  
    Animal myDog = new Dog();  

    myAnimal.animalSound();
    myPig.animalSound();
    myDog.animalSound();
  }
}

```
- El resultado del ejemplo anterior probablemente no fue lo que esperaba. Esto se debe a que el método de la clase base anula el método de la clase derivada cuando comparten el mismo nombre.
- Sin embargo, C# proporciona una opción para anular el método de la clase base, agregando la palabra clave **virtual** al método dentro de la clase base y usando la palabra clave **override** para cada método de la clase derivada:

```csharp
class Animal  
{
  public virtual void animalSound() 
  {
    Console.WriteLine("The animal makes a sound");
  }
}

class Pig : Animal  
{
  public override void animalSound() 
  {
    Console.WriteLine("The pig says: wee wee");
  }
}

class Dog : Animal  
{
  public override void animalSound() 
  {
    Console.WriteLine("The dog says: bow wow");
  }
}

class Program 
{
  static void Main(string[] args) 
  {
    Animal myAnimal = new Animal(); 
    Animal myPig = new Pig();  
    Animal myDog = new Dog();  

    myAnimal.animalSound();
    myPig.animalSound();
    myDog.animalSound();
  }
}

```
## Propiedades
#### Encapsulación
 - El significado de Encapsulación es asegurarse de que los datos "sensibles" estén ocultos para los usuarios. Para lograr esto, debes:
   - Declarar campos/variables como private.
   - Proporcionar métodos public get y set, para acceder y actualizar el valor de un campo private .

#### ¿Por qué encapsulación?
-	Mejor control de los miembros de la clase (reduzca la posibilidad de que usted (u otros) estropeen el código).
-	Los campos se pueden hacer de solo lectura (si solo usa el método get) o de solo escritura (si solo usa el método set).
-	Flexible: el programador puede cambiar una parte del código sin afectar otras partes.
-	Mayor seguridad de los datos.

#### Propiedad
- Una propiedad es como una combinación de una variable y un método.
- Tiene dos métodos: un get y un  set.
- Ejemplo:

```csharp
class Person
{
  private string name; 

  public string Name   
{
    get { return name; }   
    set { name = value; }  
  }
}

```
:::tip Observación
- La propiedad Name está asociada con el campo name. Es una buena práctica usar el mismo nombre tanto para la propiedad como para el campo privado, pero con la primera letra en mayúscula.
- El método get devuelve el valor de la variable name.
- El método set asigna  value a la variable name. La palabra clave **value** representa el valor que le asignamos a la propiedad.



:::

- Usamos la propiedad Name que creamos

```csharp
class Program
{
  static void Main(string[] args)
  {
    Person myObj = new Person();
    myObj.Name = "Liam";
    Console.WriteLine(myObj.Name);
  }
}

```
:::tip
- A la propiedad se accede con un punto (".").

:::

#### Propiedades automáticas / auto implementadas
- C# también proporciona una forma de usar propiedades abreviadas/automáticas, donde no tiene que definir el campo para la propiedad, y solo tiene que escribir get; y set; dentro de la propiedad.
- El siguiente ejemplo producirá el mismo resultado que el ejemplo anterior. La única diferencia es que hay menos código:

```csharp
class Person
{
  public string Name  
  { get; set; }
}

class Program
{
  static void Main(string[] args)
  {
    Person myObj = new Person();
    myObj.Name = "Liam";
    Console.WriteLine(myObj.Name);
  }
}

```
### Valor por defecto
- En C# las propiedades o propiedades auto implementadas son ampliamente utilizadas en nuestras clases en lugar de campos, es decir, variables.
- Vamos a aprender 4 maneras diferentes de establecer el valor predeterminado de las propiedades utilizando ejemplos sencillos.

#### 1-	Usando inicializadores automáticos de propiedades
- En C# 6 podemos declarar la propiedad auto-implementada y establecer el valor por defecto en una sola línea de declaración.
- La sintaxis es:

```csharp
class Product{
    public string Name {get;set;} = "";
}

```
:::tip Observación
- Por defecto, las propiedades de cadena (String) tendrán el valor null, utilizando la declaración en línea, estamos estableciendo el valor por defecto como cadena vacía.
:::

#### 2-	Asignar valor por defecto en el constructor
- En las versiones anteriores de C#, C# 5 e inferiores es una buena práctica establecer los valores por defecto de las propiedades C# en el constructor de la clase:

```csharp
class Product 
{
    public string Name { get; set; }
    public Product()
    {
        Name = "";
    }
}

```

#### 3-	Utilizar el definidor de propiedades
- Podemos hacer uso de C# property setter para asignar un valor por defecto a las propiedades auto implementadas:

```csharp
class Product 
{
   
    // property setter
    private string _name = "";
    public string Name { 
        
        get { return _name;}
        set { _name = value;} 
    }
}

```

:::tip Property setter
- En español es "Propiedad Setter".
- Una Property setter es una "Propiedad" donde vos definís  que devuelve el get y que modifica el set.
- Una Property setter suele manipular una variable privada.
:::
#### 4-	Atributo DefaultValue y Property Setter
- En el ejemplo anterior hemos creado una variable privada y le hemos asignado un valor por defecto.
- En lugar de eso podemos usar el atributo DefaultValue para asignar un valor por defecto:


```csharp
class Product 
{
     // property setter
    private string _name;

    [DefaultValue("")]
    public string Name { 
        
        get { return _name;}
        set { _name = value;} 
    }
}

```
- El atributo DefaultValue  sólo funciona con la propiedad setter.
- El código de abajo no asignará un valor por defecto a la propiedad. El valor por defecto sigue siendo null:


```csharp
public class Product
{
    [DefaultValue("")]
    public string Name { get; set; }
}

```

:::tip info
- [Cómo establecer el valor por defecto a C# propiedad o C# auto implementado propiedad](https://www.arungudelli.com/es/csharp-tips/csharp-property-default-value/)
- [Propiedades autoimplementadas (Guía de programación de C#)](https://learn.microsoft.com/es-es/dotnet/csharp/programming-guide/classes-and-structs/auto-implemented-properties)
:::
## Enumeración
- Enum es una "clase" especial que representa un grupo de constantes (variables inalterables/de solo lectura).
- Para crear un enum, use la palabra clave **enum** (en lugar de class o interface) y entre llaves “{}” ponga las constantes separadas con comas.
- Sintaxis:  ``enum nombre{ valor1 , valor2 , ..}``.
- El nombre de un enum se utiliza como tipo de dato de una variable , que almacena algun valor que se especifico.
- Y cada valor es una “propiedad/campo” de la "clase especial", que se accede con el punto (“.”).

#### Ejemplo

```csharp
enum Level 
{
  Low,
  Medium,
  High
}

```
Puede acceder a elementos de un enum utilice la sintaxis de punto:

```csharp
Level myVar = Level.Medium;
Console.WriteLine(myVar);

```

:::tip
Enum es la abreviatura de "enumeraciones", que significa "listado específicamente".
:::

#### También puedes tener un enum dentro de una clase:

```csharp
class Program
{
  enum Level
  {
    Low,
    Medium,
    High
  }
  static void Main(string[] args)
  {
    Level myVar = Level.Medium;
    Console.WriteLine(myVar);
  }
}

```
#### Valor de una enumeración
- De forma predeterminada, el primer elemento de una enumeración tiene el valor 0. El segundo tiene el valor 1, y así sucesivamente.
- Para obtener el valor entero de un elemento, debe convertir explícitamente el elemento en un int:

```csharp
enum Months
{
  January,    // 0
  February,   // 1
  March,      // 2
  April,      // 3
  May,        // 4
  June,       // 5
  July        // 6
}

static void Main(string[] args)
{
  int myNum = (int) Months.April;
  Console.WriteLine(myNum);
}

```
- También puede asignar sus propios valores de enumeración y los siguientes elementos actualizarán sus números en consecuencia:

```csharp
enum Months
{
  January,    // 0
  February,   // 1
  March=6,    // 6
  April,      // 7
  May,        // 8
  June,       // 9
  July        // 10
}

static void Main(string[] args)
{
  int myNum = (int) Months.April;
  Console.WriteLine(myNum);
}

```

#### Enumeración en una instrucción Switch
- Las enumeraciones se usan a menudo en declaraciones switch para verificar los valores correspondientes:


```csharp
enum Level 
{
  Low,
  Medium,
  High
}

static void Main(string[] args) 
{
  Level myVar = Level.Medium;
  switch(myVar) 
  {
    case Level.Low:
      Console.WriteLine("Low level");
      break;
    case Level.Medium:
       Console.WriteLine("Medium level");
      break;
    case Level.High:
      Console.WriteLine("High level");
      break;
  }
}

```


:::tip ¿Por qué y cuándo usar enumeraciones?
Use enumeraciones cuando tenga valores que sepa que no van a cambiar, como meses, días, colores, baraja de cartas, etc.

:::

## This
- La palabra clave this hace referencia a la instancia(objeto) actual de la clase y también se usa como modificador del primer parámetro de un método de extensión.
- Podemos hacer referencia al objeto que estamos usando, con "this".

:::tip
- [Explicación en otro lenguaje](https://fedeleva.github.io/documentacion/docs/Javascript/objeto#this)

:::

#### Ejemplo:


```csharp
public class Employee
{
    private string alias;
    private string name;

    public Employee(string name, string alias)
    {
        this.name = name;
        this.alias = alias;
    }
}

```


:::tip info
- [POO en C#](https://oregoom.com/c-sharp/poo/)
- [POO En C# -- 2](https://www.discoduroderoer.es/poo-en-c-sharp/)
- [Fundamentos de la POO con C# [3/10]: Objetos y Clases](https://bravedeveloper.com/2022/06/27/fundamentos-de-la-poo-con-c-3-10-objetos-y-clases/)
- [Fundamentos de la POO con C# [5/10]: Los Constructores](https://bravedeveloper.com/2022/06/28/fundamentos-de-la-poo-con-c-5-10-los-constructores/)
- [Fundamentos de la POO con C# [6/10]: Signaturas e Interfaces](https://bravedeveloper.com/2022/08/02/fundamentos-de-la-poo-con-c-6-10-signaturas-e-interfaces/)
- [Fundamentos de la POO con C# [9/10]: Los 4 pilares](https://bravedeveloper.com/2022/09/13/fundamentos-de-la-poo-con-c-9-10-los-4-pilares/)
- [C# Constructors](https://www.w3schools.com/cs/cs_constructors.php)
- [C# - What is OOP?](https://www.w3schools.com/cs/cs_oop.php)
:::

## Constructor principal

- A partir de C# 12, puede definir un constructor principal como parte de la declaración de clase.
- Cuando usa un constructor principal, para instanciar un objeto se debe utilizar un inicializador de objeto.


#### Ejemplo

```csharp
public class Container(int capacity)
{
    private int _capacity = capacity;
}

```

:::tip Observación
- Estamos definiendo la clase y el constructor en la misma declaración.
- Agregar parámetros al nombre de clase define el constructor principal. Esos parámetros están disponibles en el cuerpo de la clase, que incluye sus miembros. Puede usarlos para inicializar campos o en cualquier otro lugar donde los necesite.
:::

- También puede usar el modificador required en una propiedad para obligar al programador que usen un inicializador de objeto para establecer el valor inicial de la propiedad:

```csharp
public class Person
{
    public required string LastName { get; set; }
    public required string FirstName { get; set; }
}

var p1 = new Person(); // Error! 
var p2 = new Person() { FirstName = "Grace", LastName = "Hopper" };

```

:::tip Observación
- Los inicializadores de objetos son las llaves “{}” que se encuentran despues del constructor y especifican que valor debe tener cada Propiedad.
- Puedes usar los inicializadores de objetos para instanciar cualquier objeto, siempre y cuando las propiedades de la clase tengan un set o init.


:::

:::tip info
- [Introducción a las clases](https://learn.microsoft.com/es-es/dotnet/csharp/fundamentals/types/classes)

:::

## Clases genéricas

#### ¿Qué son las clases genéricas en C#?

- Imagina que estás en una tienda de zapatos que sólo vende una talla. Este enfoque de talla única no sería muy popular, ¿verdad? Afortunadamente, los zapatos vienen en tallas variadas para adaptarse a todos.
- Del mismo modo, en el mundo de la programación, necesitamos herramientas que puedan adaptarse a diferentes tipos de datos, y ahí es donde entran las clases genéricas.
- En el sentido más básico, una clase genérica en C# es una clase que puede trabajar con varios tipos de datos, sin tener que ser reescrita para cada uno.
- Las clases genéricas nos permiten definir clases, interfaces y métodos con "parámetros de tipo", que funcionan como variables que almacenan tipos de datos. Esto nos permite trabajar con diferentes tipos de datos sin duplicar código, lo que hace que nuestro código sea más flexible y reutilizable.
- Una clase genérica en C# establece una estructura básica que puede usarse con diferentes tipos de datos. Por ejemplo, podrías tener una clase genérica "Lista" que puede manejar listas de enteros, listas de cadenas, listas de objetos de una clase personalizada, y así sucesivamente.
  
#### Estructura de una clase genérica.

```csharp
public class NombreClase<T>
{
    // Cuerpo de la clase
}

```

:::tip Observación
- En este ejemplo, NombreClase es el nombre de la clase y &lt;T> es el parámetro de tipo.
- Puedes pensar en T como una especie de variable que va a almacenar un tipo de dato.
- En lugar de especificar un tipo de dato específico como int, string o double, usamos T para mantener nuestro código flexible. 
- Cuando creamos una instancia de la clase genérica, le asignamos un valor (tipo de dato) a T.
:::

#### Ejemplo

```csharp
public class Caja<T>
{
    private T contenido;

    public T Contenido
    {
        get { return contenido; }
        set { contenido = value; }
    }
}

```
:::tip Observación
- En este ejemplo, hemos creado una clase genérica llamada Caja que puede contener cualquier tipo de dato. El tipo de dato es representado por T, que se utiliza en todo el cuerpo de la clase.
- Luego, cuando creamos una instancia de Caja, podemos especificar el tipo de dato que queremos que contenga.

:::

#### Otro ejemplo


```csharp
public class Caja<T>
{
    private T contenido;

    public T Contenido
    {
        get { return contenido; }
        set { contenido = value; }
    }

    public void MostrarContenido()
    {
        Console.WriteLine($"El contenido de la caja es: {contenido}");
    }
}

```
:::tip Observación
- La clase tiene una propiedad "Contenido" que puede contener cualquier tipo de dato y un método "MostrarContenido" que imprime el contenido de la caja en la consola.
:::

- Cuando creamos una instancia de "Caja", especificamos el tipo de datos que va a tener "T". Por ejemplo, podríamos crear una "Caja" para almacenar un string de esta manera:


```csharp
Caja<string> cajaDePalabras = new Caja<string>();
cajaDePalabras.Contenido = "Hola, Mundo!";
cajaDePalabras.MostrarContenido();  // Salida: El contenido de la caja es: Hola, Mundo!

```

:::tip  Observación
- Dentro del símbolo “&lt;>” especificamos los tipos de datos  que van a almacenar los parámetros de tipos. En este caso "T" contiene el tipo de dato "string".
- Luego del símbolo “&lt;>” vienen los paréntesis para invocar al constructor.
- En este ejemplo la clase generica se volveria en algo como:
```csharp
private string contenido
   public string Contenido
    {
        get { return contenido; }
        set { contenido = value; }
    }
```

:::

- O podríamos crear una "Caja" para almacenar un número entero:

```csharp
Caja<int> cajaDeNumeros = new Caja<int>();
cajaDeNumeros.Contenido = 42;
cajaDeNumeros.MostrarContenido();  // Salida: El contenido de la caja es: 42

```
#### Múltiples tipos de datos

- Las clases genéricas no se limitan a un solo tipo de dato. Pueden ser tan diversas como un equipo de superhéroes, cada uno con su propia habilidad especial.
- Puedes definir clases genéricas que trabajen con múltiples tipos de datos al mismo tiempo.
- Aquí tienes un ejemplo de cómo podrías hacer esto:


```csharp
public class Partido<Team1, Team2>
{
    public Team1 Local { get; set; }
    public Team2 Visitante { get; set; }

    public Partido(Team1 local, Team2 visitante)
    {
        Local = local;
        Visitante = visitante;
    }

    public void MostrarPartido()
    {
        Console.WriteLine($"Partido: {Local} VS {Visitante}");
    }
}

```

- Esta clase genérica "Partido" tiene dos parámetros de tipo: Team1 y Team2. Cada uno representa el equipo local y el equipo visitante del partido. Cuando creamos una nueva instancia de "Partido", especificamos los tipos de datos que queremos para cada equipo:

```csharp
Partido<string, string> partidoFutbol = new Partido<string, string>("Barcelona FC", "Real Madrid");
partidoFutbol.MostrarPartido();  // Salida: Partido: Barcelona FC VS Real Madrid

```

:::tip Observación
- Dentro del símbolo “&lt;>” especificamos que tipos de datos serán Team1 y Team2 (En el mismo orden que se especificó en la clase).
- Luego del símbolo “&lt;>”, se ubican los paréntesis con los parámetros del constructor.
:::


#### Restricciones
- Las restricciones en las clases genéricas son como reglas que estableces para tus amigos antes de prestarles tu preciada colección de cómics. Estas reglas definen lo que tus amigos pueden y no pueden hacer con tus cómics.
- Puedes aplicar restricciones a los parámetros de tipo en una definición de clase genérica utilizando la palabra clave where.
- Aquí tienes un ejemplo:


```csharp
public class Contenedor<T> where T : class
{
    private T contenido;

    public T Contenido
    {
        get { return contenido; }
        set { contenido = value; }
    }
}

```
:::tip Observación
- En este ejemplo, la clase genérica "Contenedor" tiene una restricción que indica que T debe ser una clase. Esto significa que sólo puedes utilizar tipos de referencia, no tipos de valor, cuando creas una instancia de "Contenedor".
:::

- Aquí tienes otro ejemplo:

```csharp
public class Comparador<T> where T : IComparable<T>
{
    public T Valor1 { get; set; }
    public T Valor2 { get; set; }

    public int Comparar()
    {
        return Valor1.CompareTo(Valor2);
    }
}

```
:::tip Observación
- En este ejemplo, la clase genérica "Comparador" tiene una restricción que indica que T debe implementar la interfaz IComparable&lt;T>. Esto nos permite usar el método CompareTo en Valor1 y Valor2, algo que no podríamos hacer sin la restricción.

:::


- C# permite varios tipos de restricciones, incluyendo restricciones de clase, de interfaz, de constructor sin parámetros y más. El uso de restricciones te permite obtener aún más poder y flexibilidad de las clases genéricas, y puede ser una herramienta útil en tus proyectos de programación.


:::tip info
- [Constraints on type parameters (C# Programming Guide)](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/generics/constraints-on-type-parameters)
- [Cómo utilizar las Clases Genéricas en C# para Mayor Flexibilidad y Reutilización del Código](https://estradawebgroup.com/Post/Como-utilizar-las-Clases-Genericas-en-C-para-Mayor-Flexibilidad-y-Reutilizacion-del-Codigo/20705)
:::

## Init
- A veces, desea instanciar un objeto y no desea cambiarlo después de eso. En otras palabras, desea que el objeto sea inmutable.
- Para hacer eso, puede usar la palabra clave init en una propiedad o en un  indexer de un objeto.
- La palabra clave init hará que el setter sea el setter que asigne un valor a la propiedad o al indexador solo durante la inicialización del objeto.
- Ejemplo:
```csharp
{
    public string Name { get; init; } = string.Empty;
    public sbyte Age { get; init; } = 1;
   
}

```
- En este ejemplo, definimos la clase  Person con dos propiedades Namey Age. Ambas propiedades utilizan la palabra clave init en lugar de set. Significa que solo puede establecer su valor durante la inicialización del objeto de esta manera:


```csharp
var person = new Person()
{
    Name = "John",
    Age = 22
};

```

:::tip 
Al usar el init , estas obligado a usar  los inicializadores de objetos para instanciar un objeto.

:::

- Si intenta asignar un valor a la propiedad de solo inicio, obtendrá un error de tiempo de compilación. Por ejemplo:


```csharp
person.Name = "Jane"; // error
```

:::tip info
- [C# init](https://www.csharptutorial.net/csharp-tutorial/csharp-init/)
- [C# 9.0 – Specification – Init-only Setters](https://geeks.ms/jorge/2020/09/28/c-9-0-specification-init-only-setters/)
:::

## Tipo de destino - New

- En las primeras versiones de C# era obligatorio indicar el tipo de dato de las variables al declararlas, incluso cuando las inicializábamos directamente. Antes de C# 3.0, teníamos que usar instrucciones como las siguientes para asignar nuevas instancias a variables:

```csharp
Invoice invoice = new Invoice(123);
Dictionary<string, Person> people = new Dictionary<string, Person>();

```
:::tip Observación
- Está claro que en las asignaciones del bloque anterior hay mucha redundancia: si ya sabemos que la variable invoice es de tipo Invoice o que people es un diccionario porque estamos usando su constructor, ¿para qué es necesario indicar el tipo de dato al definir las variables?
:::


- Esto se solucionó en 2007 con la llegada de C# 3, que entre otras muchas maravillas, introdujo las variables locales de tipado implícito. Esto nos permitió aprovechar la inferencia de tipos para simplificar el código sin restar legibilidad:

```csharp
var invoice = new Invoice(123);
var people = new Dictionary<string, Person>();

```

- Sin embargo, aún quedaban escenarios similares por mejorar, por ejemplo, en la declaración de campos o propiedades de una clase, donde también encontramos tradicionalmente mucha redundancia:


```csharp
public class MyClass
{
    private Invoice invoice = new Invoice(123);
    private Dictionary<string, Person> people = new Dictionary<string, Person>();
    ...
}

```

- Pues hemos tenido que esperar hasta C# 9 para ver simplificadas estas construcciones, y alguna más que veremos a continuación.


#### ¡Bienvenidas, target-typed new expressions!
- Las target-typed new expressions permiten omitir el nombre de la clase al usar su constructor, siempre que el compilador pueda identificar de forma inequívoca el tipo de dato de que se trata. Así pues, podemos escribir el código como el siguiente:


```csharp
public class MyClass
{
    private Invoice invoice = new (123);
    private Dictionary<string, Person> people = new ();
    ...
}

```
:::tip Observación
- Como podés ver, bastaría con utilizar la palabra reservada new() y, en su caso, los parámetros del constructor. No hace falta repetir el tipo de dato, ya que está claramente está identificado en la definición del campo, por lo que el resultado es un código menor verboso y, por lo tanto, más legible.
:::

- Por supuesto, esto sería aplicable también a variables locales, por lo que tendríamos ya tres fórmulas distintas para realizar asignaciones a nuevas instancias:

```csharp
Invoice invoice = new Invoice(123); // C# < 3
var invoice = new Invoice(123);     // C# < 9 
Invoice invoice = new (123);        // C# >= 9

```

- Además de  la declaración de variables o campos, esta capacidad de omitir el tipo de datos al usar el constructor puede utilizarse en todas aquellas expresiones en las que tenga sentido instanciar objetos, como en la invocación de métodos:


```csharp
// Antes: DoSomething(new Person("Pedro"));
DoSomething(new ("Pedro")); // Ok, el compilador puede inferir el tipo Person
...
public void DoSomething(Person person) { ... }

```

:::tip Observación
- Fijate que el ejemplo anterior es un uso posible de esta nueva característica, aunque, en esta ocasión, viendo la llamada a DoSomething(new ("Pedro")) no podemos intuir de qué tipo de objeto se trata. En este caso creo sería más conveniente usar el constructor de forma tradicional.
:::

- También podemos usarlo en expresiones throw como la siguiente, donde se asumirá que estamos instanciando un objeto Exception:

```csharp
throw new("Cachis!");
```

- O cuando aprovechamos la instanciación para inicializar propiedades:

```csharp
Invoice inv = new() { Id = 1, CustomerId=99, Amount=1000 };
Dictionary<string, Person> people = new()
{
    ["1234"] = new("Pedro"),
    ["5678"] = new("Juan"),
};

```

- En cambio, no será posible su uso en otros escenarios como los siguientes, aunque los motivos son bastante razonables:

```csharp
dynamic d = new();                // new dynamic() tampoco está permitido
string[] = new();                 // ¿Con qué tamaño se inicializaría?
var x = new { Property = new() }; // No se puede inferir el tipo

```

:::tip Observación
- [Expresiones new con el tipo de destino en C# 9](https://www.variablenotfound.com/2021/06/expresiones-new-con-el-tipo-de-destino.html)
- [operador new: el operador new crea una nueva instancia de un tipo](https://learn.microsoft.com/es-es/dotnet/csharp/language-reference/operators/new-operator)

:::


## Inicializadores de objetos
- Los inicializadores de objeto permiten asignar valores a cualquier campo o propiedad accesible de un objeto en el momento de su creación sin tener que invocar un constructor especifico.
- La sintaxis de inicializador de objetos permite especificar argumentos para un constructor u omitir los argumentos (y la sintaxis de paréntesis).
- Ejemplo:
```csharp
Ejemplo:
public class Cat
{
   
    public int Age { get; set; }
    public string? Name { get; set; }

    public Cat()
    {
    }

    public Cat(string name)
    {
        this.Name = name;
    }
}
// Instanciamos dos objetos con los mismos datos.
Cat cat = new Cat { Age = 10, Name = "Fluffy" };
Cat sameCat = new Cat("Fluffy"){ Age = 10 };

```

:::tip info
- [Inicializadores de objeto y de colección (Guía de programación de C#)](https://learn.microsoft.com/es-es/dotnet/csharp/programming-guide/classes-and-structs/object-and-collection-initializers)

:::

## Llamar al constructor de la clase Base
- Al declarar un constructor de una clase derivada, puede llamar a un constructor de una clase base. 
- Para hacer que el constructor de una clase C llame de forma explícita al constructor de la clase padre, usamos “dos puntos (“:”)” y luego la palabra base() , entre paréntesis se ubican los parámetros del constructor de la clase base:
```csharp
public C (int c): base(valor)
```
- Un ejemplo Completo:

```csharp
abstract class Shape
{
    public const double pi = Math.PI;
    protected double x, y;

    public Shape(double x, double y)
    {
        this.x = x;
        this.y = y;
    }

    public abstract double Area();
}

class Circle : Shape
{
    public Circle(double radius)
        : base(radius, 0)
    {  }

    public override double Area() => pi * x * x;
}

class Cylinder : Circle
{
    public Cylinder(double radius, double height)
        : base(radius)
    {
        y = height;
    }

    public override double Area() => (2 * base.Area()) + (2 * pi * x * y);
}

class Example
{
    static void Main()
    {
        double radius = 2.5;
        double height = 3.0;

        var ring = new Circle(radius);
        Console.WriteLine($"Area of the circle = {ring.Area():F2}");
        
        
        var tube = new Cylinder(radius, height);
        Console.WriteLine($"Area of the cylinder = {tube.Area():F2}");
        
    }
}

```

:::tip Observación
- Podemos usar los argumentos del constructor de la clase derivada para el constructor de la clase base.
:::


:::tip info
- [Orden de ejecución de los constructores con herencia](https://www.tutorialesprogramacionya.com/csharpya/detalleconcepto.php?codigo=153)
- [Constructores de instancias (guía de programación de C#)](https://learn.microsoft.com/es-es/dotnet/csharp/programming-guide/classes-and-structs/instance-constructors)
- [Llamar al constructor de la clase base desde el constructor de la clase secundaria en C#](https://www.delftstack.com/es/howto/csharp/csharp-call-base-constructor/)

:::

## Métodos default en interfaces
- Los miembros con cuerpos permiten que la interfaz proporcione una implementación "predeterminada" para el método en clases y estructuras que no proporcionan su propia implementación.
- Con esto ahora se permiten miembros estáticos pero los campos de instancia no están permitidos . Las propiedades automáticas de instancia no son compatibles , ya que declararían implícitamente un campo oculto.
- La forma más simple de esta característica es la capacidad de declarar un método concreto en una interfaz, que es un método con un cuerpo:

```csharp
interface IA
{
    void M() { WriteLine("IA.M"); }
}

```
- Una clase que implementa esta interfaz no necesita implementar su método concreto.

```csharp
class C : IA { } // OK
IA i = new C();
i.M(); // prints "IA.M"
```
- Tenga en cuenta que una clase no hereda miembros de sus interfaces:

```csharp
new C().M(); // error: class 'C' does not contain a member 'M'
```

:::tip Observación
- Para invocar el método por defecto, se necesita instanciar en una variable de tipo interfaz una instancia de una clase que implemente dicha interfaz.
:::


:::tip info
- [default interface methods](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/proposals/csharp-8.0/default-interface-methods)
- [Implementación de interfaz explícita (Guía de programación de C#)](https://learn.microsoft.com/es-es/dotnet/csharp/programming-guide/interfaces/explicit-interface-implementation)
:::