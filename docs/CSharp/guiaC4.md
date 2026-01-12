---
sidebar_position: 9
---
# Conceptos de "C#" - Parte 4

## Params
- Params es una palabra clave importante en C# . Se utiliza como un argumento que puede tomar los valores de varias variables que se pasan como parámetro. Ósea puede tratar varios parámetros como un array (matriz).
- Al usar "Params", el compilador convierte los parámetros pasados a un método a una matriz temporal, y esta matriz luego se usa para recuperar los parámetros del método.
- Punto importante sobre la palabra clave Params:
   -	Es útil cuando el programador no tiene conocimientos previos sobre la cantidad de parámetros a utilizar.
   -	Solo se permite una palabra clave Params y no se permitirán parámetros adicionales en la declaración de función después de una palabra clave params.
   -	La longitud del params será cero si no se pasan argumentos.
- Por ejemplo, una clase Student con un método TotalMarks que devuelve la suma de todas las calificaciones. Cada grado podrá tener un número diferente de materias y sus respectivas calificaciones. El 3er grado podrá tener 3 materias solamente. El octavo grado puede tener 4 materias mientras que el noveno grado puede tener 5 materias. Podemos usar params en este caso y pasar 3, 4 y 5 valores separados por comas.  

#### ¿Por qué usamos params?
- La palabra clave params en C# se usa para declarar un método que no conoce la cantidad de parámetros. 
- En lugar de utilizar varios métodos sobrecargados para pasar múltiples valores, podemos simplemente crear una matriz y pasarla como un argumento o una lista de valores separados por comas.
- Digamos que tenemos una clase, Estudiante. Tiene dos métodos, TotalMarks y AllSubjects. Cada uno de estos métodos toma un parámetro de tipo params. Como puede ver en el código siguiente, params es una matriz:


```csharp
public class Students
{
    public static int TotalMarks(params int[] list)
    {
        int total = 0;
        for (int i = 0; i < list.Length; i++)
            total += list[i];
        return total;
    }

    public static string AllSubjects(params string[] subjects)
    {
        System.Text.StringBuilder builder = new System.Text.StringBuilder();
        for (int i = 0; i < subjects.Length; i++)
        {
            builder.Append(subjects[i]);
            builder.Append(" ");
        }
        return builder.ToString();
    }
}

```

- Ahora, para llamar a estos métodos, podemos crear una matriz y pasarla como parámetro. Alternativamente, también podemos pasar valores separados por comas como  parámetros. El siguiente fragmento de código muestra ambos ejemplos:



```csharp
// Total for 3rd grade. Pass 3 comma separate values as params
Console.WriteLine("Params with 3 parameters");
int total3 = Students.TotalMarks(8, 9, 8);
// Print result
Console.WriteLine(total3);
// Create an array of strings
string[] subs = {"English", "Reading", "Writing"};
// Pass array of strings as a params and print result
Console.WriteLine(Students.AllSubjects(subs));

```

#### Ejemplo

```csharp

using System;
namespace Examples {
      
class Geeks {
      

    public static int Add(params int[] ListNumbers)
    {
        int total = 0;
          
       
        foreach(int i in ListNumbers) 
        {
            total += i;
        }
        return total;
    }
          
// Driver Code    
static void Main(string[] args)
{
      
 
    int y = Add(12,13,10,15,56);
      
   
    Console.WriteLine(y);
}
}
}

```


:::tip Explicación
- No es necesario definir el tamaño de la matriz porque al usar la palabra clave params en el programa anterior, los datos enteros tendrán el formato:
   - [0] = 12
   - [1] = 13
   - [2] = 10
   - [3] = 15
   - [4] = 56



:::


#### Otro ejemplo
- Los params de tipo objeto permitirán cualquier tipo de argumentos y cualquier número de argumentos de la siguiente manera:


```csharp

using System; 
  
namespace Example2 {
class Geeks {
      

        public void result(params object[] array) 
        { 
            for (int i = 0; i < array.Length; i++) 
            { 
                  
                // Display result
                Console.WriteLine(array[i]); 
            }     
        } 
  

    static void Main(string[] args) 
    { 
        Geeks gfg = new Geeks(); 
          
   
        gfg.result("Geeks", "GFG",
                   "ProGeek Cup 2.0",
                        "G4G", "100");
    } 
  
} 
} 

```


:::tip info
- [Params Keyword in C#](https://www.c-sharpcorner.com/UploadFile/c63ec5/use-params-keyword-in-C-Sharp/)
- [C# | Params](https://www.geeksforgeeks.org/c-sharp-params/)
- [Ultimate Guide to Use C# params Keyword](https://linuxhint.com/params-csharp/)
- [Params Keyword in C# With Examples](https://www.shekhali.com/csharp-params-keyword/)
- [Params performance in C#](https://dotneteers.net/params-performance-in-c/)
- [C# Params](https://www.educba.com/c-sharp-params/)
- [params (C# Reference)](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/params)
:::


## Arrays
- Un array en C# es una estructura de datos que permite almacenar una colección de elementos(valores) del mismo tipo en una única variable.
- Estos elementos están organizados de manera secuencial y pueden ser accedidos mediante un índice (index), que indica su posición dentro del array. El primer elemento del array siempre tiene el índice 0, el segundo tiene el índice 1, y así sucesivamente.
- Los arreglos (arrays) en C# son fundamentales en la programación, ya que permiten almacenar y manipular grandes cantidades de información de manera estructurada y eficiente.
- Por ejemplo, pueden usarse para almacenar una lista de números enteros, una colección de objetos o incluso otros arrays.
- Los vectores/Arrays/matrices en C# pueden clasificarse en varias categorías principales.

#### Arrays unidimensionales

- Son arrays de una sola dimensión, que se pueden visualizar como una lista o un vector. Pueden almacenar elementos de cualquier tipo (primitivo, objeto o estructura) y se accede a sus elementos utilizando un único índice.
- Ejemplo:


```csharp
int[] numeros = new int[5]; // Un array de 5 enteros
string[] nombres = new string[3]; // Un array de 3 cadenas

```
#### Arrays multidimensionales
- Son arrays que tienen más de una dimensión y pueden visualizarse como un cubo o una tabla.
- Los arrays multidimensionales también pueden almacenar elementos de cualquier tipo y se accede a sus elementos utilizando múltiples índices, uno por cada dimensión.
- Cada dimensión es un array.
- En un array de dos dimensiones: En las posiciones de un array tiene otro array.
- En un array de tres dimensiones: En las posiciones de un array tiene un array y ese también en sus posiciones tiene otro array
- Y de la misma forma, se pueden crear Arrays de 4 dimensiones o más.
- Entonces es multidimensional cuando hay varios Arrays anidados.
- Ejemplo:


```csharp
string[, ,] cubo = new string[2, 2, 2]; // Un cubo de 2x2x2
int[,] array2DDeclaration = new int[4, 2];

```

:::tip Observación
- La cantidad de “comas” dentro del corchete, indican la cantidad de dimensiones que tiene el array.
- Una coma (“,”): Dos dimensiones
- Dos comas (“,”): Tres dimensiones
- Y asi…
:::


#### Arrays en forma de estrella(jagged Arrays)
- Son arrays de arrays, donde cada elemento es a su vez un array unidimensional. Estos arrays permiten crear estructuras de datos irregulares, como matrices de diferentes longitudes. Se accede a sus elementos utilizando dos índices: el primero para el array exterior y el segundo para el array interior.
- Ejemplo:


```csharp
int[][] matrizIrregular = new int[3][]; // Un array de 3 arrays unidimensionales
matrizIrregular[0] = new int[4]; // El primer array tiene 4 elementos
matrizIrregular[1] = new int[2]; // El segundo array tiene 2 elementos
matrizIrregular[2] = new int[5]; // El tercer array tiene 5 elementos

```


#### Declaración de arrays
- Un array en C# se declara especificando el tipo de dato de sus elementos seguido de corchetes vacíos y el nombre del array.
- Para crear un array en C#, se utiliza la palabra clave new seguida del tipo de dato y la cantidad de elementos(tamaño) que va a tener la “lista (array)” entre corchetes.
- Veamos un ejemplo básico:

```csharp
int[] numeros;   // Declaración de un array de enteros
numeros = new int[5]; // Creación de un array de 5 elementos

```

#### Inicialización
- Existen dos formas de inicializar un array en C#: implícita y explícita.

#### 1- Implicita
- La inicialización implícita permite asignar los valores directamente en la declaración del array sin especificar su tamaño. El compilador determina automáticamente el tamaño del array según la cantidad de elementos proporcionados.


```csharp
int[] numeros = {1, 2, 3, 4, 5}; // Inicialización implícita
```

:::tip Observación
- Entre llaves ponemos los valores que van a tener el array.
- Cada valor se separa con una coma (“,”).
:::


:::tip
- Podes especificar el tamaño del array (como si fuera explícita), pero es opcional.

:::


#### 2- Explícita
- En la inicialización explícita, se especifica el tamaño del array y se asignan los valores a cada elemento individualmente. Esto se puede hacer utilizando la notación de corchetes y el índice del elemento.
- Con esta sintaxis asignamos un valor a una “posición (índice)” del array: Variable[índice] = valor;.
- Ejemplo:


```csharp
int[] numeros = new int[5]; // Inicialización explícita de un array de 5 elementos.
numeros[0] = 1;
numeros[1] = 2;
numeros[2] = 3;
numeros[3] = 4;
numeros[4] = 5;

```

#### Asignación de valores
- Para asignar valores a elementos individuales de un array, se utiliza la notación de corchetes junto con el índice del elemento.
- Es importante recordar que los índices de los arrays en C# comienzan en 0.
- Con esta sintaxis asignamos un valor a una “posición (índice)” del array: Variable[índice] = valor;.
- Ejemplo:


```csharp
string[] palabras = {
  "hola",
  "mundo"
}; // Inicialización implícita
palabras[1] = "C#"; // Modificando el segundo elemento del array

```

#### Arrays de objetos y estructuras personalizadas
- Los arrays en C# también pueden contener objetos de clases o estructuras personalizadas. Por ejemplo, si tenemos una clase llamada Persona, podemos crear un array de objetos Persona de la siguiente manera:


```csharp
class Persona {
  public string Nombre;
  public int Edad;
}

// Declaración y creación de un array de objetos Persona
Persona[] personas = new Persona[3];

// Inicializando objetos en el array
personas[0] = new Persona {
  Nombre = "Ana",
  Edad = 30
};
personas[1] = new Persona {
  Nombre = "Juan",
  Edad = 25
};
personas[2] = new Persona {
  Nombre = "Laura",
  Edad = 28
};

```


:::tip
- Recuerda que, al tratarse de objetos, es necesario inicializar cada elemento del array para evitar errores en tiempo de ejecución al intentar acceder a elementos no inicializados.
:::

#### Acceder a elementos de array
- Para acceder a un elemento específico de un arreglo en C#, debes usar el índice del elemento. El índice es un número entero que representa la posición del elemento en el arreglo. Los índices en C# comienzan en cero, lo que significa que el primer elemento tiene un índice  cero.
- Para acceder a un elemento de un arreglo en C#, debes usar la siguiente sintaxis:
```csharp
nombreArreglo[indice]
```
:::tip Observación
- nombreArreglo es el nombre del arreglo y indice es el número de índice del elemento que deseas acceder.

:::

- Por ejemplo, si tienes un arreglo de nombres de frutas y deseas acceder al segundo elemento, que tiene un índice de 1, puedes usar la siguiente sintaxis:


```csharp
string[] frutas = {
  "manzana",
  "banana",
  "naranja",
  "piña",
  "fresa"
};
string segundaFruta = frutas[1]; // "banana"

```


:::tip Observación
- En este ejemplo, frutas[1] accede al segundo elemento del arreglo frutas, que es “banana”, y lo almacena en la variable segundaFruta.
:::


#### Cambiar elementos de un array
- La sintaxis es la misma que se utiliza para asignarle un valor a un indice del array.
- Para modificar un elemento en un arreglo (array) en C#, primero debes acceder al elemento que deseas cambiar, y luego asignarle un nuevo valor. Puedes hacer esto de la siguiente manera.
- Supongamos que tenemos un arreglo de enteros llamado numeros con 5 elementos y queremos cambiar el segundo elemento por un nuevo valor:


```csharp
int[] numeros = {
  10,
  20,
  30,
  40,
  50
};

numeros[1] = 25;

Console.WriteLine(numeros[1]); // Imprime: 25

```

:::tip Observación
- En este ejemplo, hemos cambiado el valor del segundo elemento (numeros[1]) a 25. Luego, hemos utilizado la función Console.WriteLine para imprimir el nuevo valor del segundo elemento.

:::


#### Cómo recorrer un array
- Existen varias formas de recorrer un arreglo (array) en C#. Aquí te presento algunas de ellas.


#### 1- For
- Puedes recorrer un vector en C# con un bucle for, utilizando el índice de cada elemento para acceder a ellos.
- Por ejemplo:


```csharp
using System;

class Program {
  static void Main() {
    int[] numeros = {
      1,
      2,
      3,
      4,
      5
    };

    for (int i = 0; i < numeros.Length; i++) {
      Console.WriteLine(numeros[i]);
    }
  }
}

```
:::tip Observación
- La propiedad Lenght de un Array, te devuelve la cantidad de elementos que tiene.
- En el ejemplo anterior te devuelve 5


:::


#### 2- Foreach
- El bucle foreach es otra forma común de recorrer un arreglo (array). En este caso, no necesitas utilizar un índice para acceder a cada elemento, sino que puedes hacerlo directamente con una variable.
- Por ejemplo:

```csharp
using System;

class Program {
  static void Main() {
    int[] numeros = {
      1,
      2,
      3,
      4,
      5
    };

    foreach(int numero in numeros) {
      Console.WriteLine(numero);
    }
  }
}

```
#### 3- Iteradores de la clase Array
- La clase Array de .NET Framework proporciona varios métodos para recorrer los elementos de un array. Por ejemplo, el método GetEnumerator() devuelve un iterador que permite recorrer el array con un bucle while.
- Por ejemplo:

```csharp
using System;

class Program {
  static void Main() {

    int[] numeros = {
      1,
      2,
      3,
      4,
      5
    };
    IEnumerator enumerador = numeros.GetEnumerator();

    while (enumerador.MoveNext()) {
      Console.WriteLine(enumerador.Current);
    }

  }
}

```
#### 4- Método Array.ForEach()
- El método Array.ForEach() es un método estático de la clase Array que toma un array y una acción (representada por un delegado) como argumentos.
- La acción se ejecuta para cada elemento en el array. El método Array.ForEach() es útil cuando deseas aplicar una función o acción a cada elemento en el array sin preocuparte por los índices.
- El único argumento que tiene el delegado, contiene el valor de cada elemento (valor) de la lista.
- Sin embargo, al igual que el bucle foreach, no permite acceder al índice del elemento actual en el array directamente.
- Ejemplo:


```csharp
using System;

class Program {
  static void Main() {
    int[] numeros = {
      1,
      2,
      3,
      4,
      5
    };

    Array.ForEach(numeros, numero =>Console.WriteLine(numero));
  }
}

```

:::tip
- Cada uno de estos métodos tiene sus propias ventajas y desventajas. Por ejemplo, el bucle for te permite acceder a los índices de los elementos, mientras que el bucle foreach y Array.ForEach() son más simples y fáciles de leer, pero no permiten acceder a los índices directamente.


:::


#### Longitud de un array
- La longitud de un array en C# se refiere al número de elementos que contiene el array. La propiedad Length se utiliza para obtener la longitud de un array, y es de solo lectura.
- Esta propiedad es especialmente útil cuando necesitas iterar sobre todos los elementos del array o cuando necesitas realizar operaciones basadas en el tamaño del array.
- Por ejemplo:



```csharp
using System;

class Program {
  static void Main() {

    int[] numeros = {
      1,
      2,
      3,
      4,
      5
    };
    int longitud = numeros.Length;
    Console.WriteLine("La longitud del array es: " + longitud);

  }
}

```

#### Cómo ordenar un array
- Ordenar un vector (array) en C# es una tarea común en la programación, y hay varias formas de hacerlo. En este caso, me centraré en dos métodos principales: utilizando el método Array.Sort() proporcionado por la clase Array, y ordenando manualmente el array mediante un algoritmo de ordenamiento como el “Bubble Sort”.

#### 1- Array.Sort()
- La forma más fácil y rápida de ordenar un array en C# es utilizando el método Array.Sort() proporcionado por la clase Array.
- Este método utiliza un algoritmo de ordenamiento eficiente y es apropiado para la mayoría de los casos.
- Ejemplo:

```csharp
using System;

class Program {
  static void Main() {
    int[] numeros = {
      5,
      3,
      8,
      1,
      4
    };
    Console.WriteLine("Array original:");

    foreach(int numero in numeros) {
      Console.Write(numero + " ");
    }

    // Ordenar el array
    Array.Sort(numeros);

    Console.WriteLine("\nArray ordenado:");

    foreach(int numero in numeros) {
      Console.Write(numero + " ");
    }
  }

```

- Este ejemplo ordena un array de enteros en orden ascendente utilizando Array.Sort(). Si necesitas ordenar en orden descendente, puedes utilizar Array.Reverse() después de Array.Sort():

```csharp
using System;

class Program {
  static void Main() {
    int[] numeros = {
      5,
      3,
      8,
      1,
      4
    };
    Console.WriteLine("Array original:");

    foreach(int numero in numeros) {
      Console.Write(numero + " ");
    }

    // Ordenar el array en orden ascendente
    Array.Sort(numeros);

    // Invertir el array para obtener el orden descendente
    Array.Reverse(numeros);

    Console.WriteLine("\nArray ordenado en orden descendente:");

    foreach(int numero in numeros) {
      Console.Write(numero + " ");
    }
  }
}

```

:::tip Observación
- En este ejemplo, primero se ordena el array en orden ascendente utilizando Array.Sort(). Luego, se invierte el array utilizando Array.Reverse() para obtener el orden descendente.
-  El resultado final es un array ordenado en orden descendente.
:::

#### 2- Bubble sort
- Bubble Sort es un algoritmo simple de ordenamiento que compara y cambia elementos adyacentes si están en el orden incorrecto. Aunque no es el algoritmo más eficiente, es fácil de entender e implementar.
- Ejemplo:


```csharp
using System;

class Program {
  static void Main() {
    int[] numeros = {
      5,
      3,
      8,
      1,
      4
    };
    Console.WriteLine("Array original:");

    foreach(int numero in numeros) {
      Console.Write(numero + " ");
    }

    // Ordenar el array usando Bubble Sort
    for (int i = 0; i < numeros.Length - 1; i++) {
             
      for (int j = 0; j < numeros.Length - 1 - i; j++) {
        if (numeros[j] > numeros[j + 1]) {
          // Intercambiar elementos
          int temp = numeros[j];
          numeros[j] = numeros[j + 1];
          numeros[j + 1] = temp;
        }
      }
    }

    Console.WriteLine("\nArray ordenado:");

    foreach(int numero in numeros) {
      Console.Write(numero + " ");
    }
  }
}

```
:::tip Observación
- Este ejemplo ordena un array de enteros en orden ascendente utilizando el algoritmo Bubble Sort. 
- Puedes modificar la condición en el bucle interno para cambiar el criterio de ordenamiento (por ejemplo, ordenar en orden descendente).
:::


:::tip
- En general, se recomienda utilizar el método Array.Sort() para ordenar arrays en C#, ya que es más eficiente y fácil de usar que implementar manualmente un algoritmo de ordenamiento.
:::


#### Buscar elementos en un array
- En C#, hay varias formas de buscar elementos en un array. Aquí te muestro tres métodos diferentes: Array.IndexOf(), Array.Find() y Array.Exists().


#### 1- Array.indexOf()
- Este método busca la primera aparición de un elemento específico en un array y devuelve el índice del elemento. Si no se encuentra el elemento, devuelve -1.
- Ejemplo:

```csharp
using System;

class Program {
  static void Main() {
    int[] numeros = {
      10,
      20,
      30,
      40,
      50
    };

    int elementoABuscar = 30;
    int indice = Array.IndexOf(numeros, elementoABuscar);

    if (indice >= 0) {
      Console.WriteLine($ "Elemento {elementoABuscar} encontrado en el índice: {indice}");
    } else {
      Console.WriteLine($ "Elemento {elementoABuscar} no encontrado.");
    }
  }
}

```


#### 2- Array.Find()
- Este método busca el primer elemento que cumple con un criterio especificado por un delegado Predicate&lt;T> y devuelve el elemento.
- Si no se encuentra ningún elemento que cumpla con el criterio, se devuelve el valor predeterminado del tipo del array (como null para referencias o 0 para números).
- Ejemplo:
```csharp
using System;

class Program {
  static void Main() {
    int[] numeros = {
      10,
      20,
      30,
      40,
      50
    };

    int elementoEncontrado = Array.Find(numeros, x =>x > 20);

    if (elementoEncontrado != 0) {
      Console.WriteLine($ "Elemento encontrado: {elementoEncontrado}");
    } else {
      Console.WriteLine("Elemento no encontrado.");
    }
  }
}

```
#### 3- Array.Exists()
- Este método verifica si algún elemento del array cumple con un criterio especificado por un delegado Predicate&lt;T> y devuelve un valor booleano true si existe un elemento que cumpla con el criterio, o false en caso contrario.
- Ejemplo:


```csharp
using System;

class Program {
  static void Main() {
    int[] numeros = {
      10,
      20,
      30,
      40,
      50
    };

    bool existeElemento = Array.Exists(numeros, x =>x > 20);

    if (existeElemento) {
      Console.WriteLine("Existe un elemento que cumple con el criterio.");
    } else {
      Console.WriteLine("No existe ningún elemento que cumpla con el criterio.");
    }
  }
}

```


#### Filtrar , transformar y agregar 
- Language Integrated Query (LINQ) es una característica poderosa en C# que te permite trabajar con colecciones de datos de manera eficiente y expresiva. LINQ proporciona una serie de operadores de consulta para filtrar, transformar y agregar datos en arrays y otras colecciones.


#### Filtrar

- Filtrar se refiere a seleccionar elementos de una colección que cumplan con una condición específica. La función Where es el operador de filtrado más utilizado en LINQ:


```csharp
using System;
using System.Linq;

class Program {
  static void Main() {
    int[] numeros = {
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    };

    // Filtrar números pares
    var numerosPares = numeros.Where(x =>x % 2 == 0);

    Console.WriteLine("Números pares:");
    foreach(var numero in numerosPares) {
      Console.WriteLine(numero);
    }
  }
}

```

#### Transformar
- Transformar se refiere a aplicar una función a cada elemento de la colección y generar una nueva colección con los resultados. La función Select es el operador de transformación más utilizado en LINQ:


```csharp
using System;
using System.Linq;

class Program {
  static void Main() {
    int[] numeros = {
      1,
      2,
      3,
      4,
      5
    };

    // Elevar al cuadrado cada número
    var cuadrados = numeros.Select(x =>x * x);

    Console.WriteLine("Cuadrados:");
    foreach(var cuadrado in cuadrados) {
      Console.WriteLine(cuadrado);
    }
  }

```


#### Agregar Elementos

- Agregar se refiere a realizar operaciones en una colección que resulten en un único valor. Algunos ejemplos de agregación incluyen calcular la suma, el promedio, el máximo o el mínimo de una colección. LINQ proporciona operadores de agregación, como Sum, Average, Max y Min:


```csharp
using System;
using System.Linq;

class Program {
  static void Main() {
    int[] numeros = {
      1,
      2,
      3,
      4,
      5
    };

    // Calcular la suma, el promedio, el máximo y el mínimo
    int suma = numeros.Sum();
    double promedio = numeros.Average();
    int maximo = numeros.Max();
    int minimo = numeros.Min();

    Console.WriteLine($ "Suma: {suma}");
    Console.WriteLine($ "Promedio: {promedio}");
    Console.WriteLine($ "Máximo: {maximo}");
    Console.WriteLine($ "Mínimo: {minimo}");
  }
}

```
- Es importante mencionar que estos operadores pueden combinarse en consultas más complejas. Por ejemplo, aquí tienes un ejemplo, donde se aplican más operaciones de filtrado, transformación y agregación en una sola consulta:


```csharp
using System;
using System.Linq;

class Program {
  static void Main() {
    int[] numeros = {
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    };

    // Filtrar números pares, elevar al cuadrado y calcular la suma
    int sumaCuadradosPares = numeros.Where(x =>x % 2 == 0).Select(x =>x * x).Sum();
    Console.WriteLine($ "Suma de cuadrados de números pares: {sumaCuadradosPares}");

    // Filtrar números impares, multiplicar por 3 y calcular el promedio
    double promedioImparesTriple = numeros.Where(x =>x % 2 != 0).Select(x =>x * 3).Average();
    Console.WriteLine($ "Promedio del triple de números impares: {promedioImparesTriple}");

    // Filtrar números menores a 6, elevar al cubo y calcular el máximo
    int maximoCubosMenoresSeis = numeros.Where(x =>x < 6).Select(x =>x * x * x).Max();
    Console.WriteLine($ "Máximo de los cubos de números menores a 6: {maximoCubosMenoresSeis}");
  }
}

```

:::tip Observación
- Este ejemplo muestra cómo combinar múltiples operadores de LINQ en una sola consulta para realizar operaciones más complejas en arrays. En este caso, se aplican diferentes operaciones a números pares, impares y números menores a 6, utilizando los operadores Where, Select, Sum, Average y Max.
:::


#### Eliminar elementos
- En C#, los arrays tienen un tamaño fijo y no se pueden eliminar elementos una vez que se asignan. Si deseas eliminar un elemento de un array, en su lugar puedes crear un nuevo array sin el elemento que deseas eliminar.
- Una forma de hacer esto es utilizar LINQ y el método Where para filtrar el elemento que deseas eliminar.
- A continuación se muestra un ejemplo:


```csharp
using System;
using System.Linq;

class Program {
  static void Main() {
    int[] numeros = {
      1,
      2,
      3,
      4,
      5
    };
    int elementoAEliminar = 3;

    // Eliminar el elemento del array
    int[] nuevoArray = numeros.Where(x =>x != elementoAEliminar).ToArray();

    // Mostrar el nuevo array
    Console.WriteLine("Nuevo array sin el elemento 3:");
    foreach(int numero in nuevoArray) {
      Console.WriteLine(numero);
    }
  }
}

```

:::tip Observación
- En este ejemplo, se crea un nuevo array llamado nuevoArray que contiene todos los elementos de numeros, excepto el elemento con el valor 3.
- Ten en cuenta que este enfoque crea un nuevo array y no modifica el array original. Si deseas trabajar con colecciones que permitan agregar o eliminar elementos de manera más flexible, considera usar List&lt;T> en lugar de arrays. La clase List&lt;T> proporciona métodos como Add, Remove y RemoveAt para agregar y eliminar elementos fácilmente.
:::

#### Ejemplos
#### 2 Dimensiones

```csharp
int[,] numbers = { {1, 4, 2}, {3, 6, 8} };
Console.WriteLine(numbers[0, 2]);  // Outputs 2

```
#### Multidimensional

```csharp
using System;
namespace geeksforgeeks {
     
class GFG {
     
   
    public static void Main()
    {
         

        int[, ] intarray = new int[, ] { { 1, 2 },
                                         { 3, 4 },
                                         { 5, 6 },
                                         { 7, 8 } };
                                          

        int[, ] intarray_d = new int[4, 2] { { 1, 2 }, { 3, 4 },
                                             { 5, 6 }, { 7, 8 } };
 
  
        string[, ] str = new string[4, 2] { { "one", "two" },
                                            { "three", "four" },
                                            { "five", "six" },
                                            { "seven", "eight" } };
 
   
        int[,, ] intarray3D = new int[,, ] { { { 1, 2, 3 },
                                             { 4, 5, 6 } },
                                             { { 7, 8, 9 },
                                           { 10, 11, 12 } } };
                                             
                                             
   
        int[,, ] intarray3Dd = new int[2, 2, 3] { { { 1, 2, 3 },
                                                  { 4, 5, 6 } },
                                                  { { 7, 8, 9 },
                                                { 10, 11, 12 } } };
 
       
        Console.WriteLine("2DArray[0][0] : " + intarray[0, 0]);
        Console.WriteLine("2DArray[0][1] : " + intarray[0, 1]);
        Console.WriteLine("2DArray[1][1] : " + intarray[1, 1]);
        Console.WriteLine("2DArray[2][0] " + intarray[2, 0]);
 
        Console.WriteLine("2DArray[1][1] (other) : "
                                 + intarray_d[1, 1]);
                                  
        Console.WriteLine("2DArray[1][0] (other)"
                             + intarray_d[1, 0]);
 
        Console.WriteLine("3DArray[1][0][1] : "
                           + intarray3D[1, 0, 1]);
                            
        Console.WriteLine("3DArray[1][1][2] : "
                          + intarray3D[1, 1, 2]);
 
        Console.WriteLine("3DArray[0][1][1] (other): "
                             + intarray3Dd[0, 1, 1]);
                              
        Console.WriteLine("3DArray[1][0][2] (other): "
                             + intarray3Dd[1, 0, 2]);
 

        Console.WriteLine("To String element");
        for (int i = 0; i < 4; i++)
            for (int j = 0; j < 2; j++)
                Console.Write(str[i, j] + " ");
    }
}
}
```


:::tip info
- [Single-dimensional arrays](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/arrays#single-dimensional-arrays)
- [Matrices](https://learn.microsoft.com/es-es/dotnet/csharp/language-reference/builtin-types/arrays)
- [Arrays](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/arrays)
- [Arrays en C#](https://oregoom.com/c-sharp/array/)
- [Arrays](https://www.codecademy.com/resources/docs/c-sharp/arrays)
- [C# Multidimensional Arrays](https://www.w3schools.com/cs/cs_arrays_multi.php)
- [C# | Arrays](https://www.geeksforgeeks.org/c-sharp-arrays/)
- [Guía práctica para trabajar con Arrays y colecciones en C#](https://estradawebgroup.com/Post/Guia-practica-para-trabajar-con-Arrays-y-colecciones-en-C/20641#google_vignette)
- [	Working with Arrays in C#](https://www.c-sharpcorner.com/article/working-with-arrays-in-C-Sharp/)
- [Arrays in C#](https://www.educba.com/arrays-in-c-sharp/)
- [Manipulación avanzada de arrays en C#](https://estradawebgroup.com/Post/Manipulacion-avanzada-de-arrays-en-C/20653)
- [C# Array: How To Declare, Initialize And Access An Array In C#?](https://www.softwaretestinghelp.com/c-sharp/csharp-arrays/)
- [Arrays in C#: In-Depth Guide with Examples](https://www.bytehide.com/blog/array-csharp)
:::


## Colecciones
- Para muchas aplicaciones, puede que desee crear y administrar grupos de datos relacionados. Existen dos formas de agrupar datos: mediante la creación de matrices (Arrays) de objetos y con la creación de colecciones de objetos.
- Las matrices (Arrays) son muy útiles para crear y trabajar con un número fijo de objetos fuertemente tipados (de un tipo de dato especifico).
- Las colecciones proporcionan una manera más flexible de trabajar con grupos de objetos. A diferencia de las matrices, el grupo de objetos con el que trabaja puede aumentar y reducirse de manera dinámica a medida que cambian las necesidades de la aplicación.
- Para algunas colecciones, puede asignar una clave a cualquier objeto que incluya en la colección para, de este modo, recuperar rápidamente el objeto con la clave.
- Una colección es una clase, por lo que debe declarar una instancia de la clase para poder agregar elementos a dicha colección.
- Los tipos de colección implementan la siguiente funcionalidad: 
   -	Agregar e insertar elementos a una colección.
   -	Eliminar elementos de una colección.
   -	Encontrar, clasificar y buscar elementos.
   -	Reemplazo de elementos.
   -	Copiar y clonar colecciones y elementos.
   -	Propiedades de capacidad y recuento para encontrar la capacidad de la colección y el número de elementos de la colección.
- .NET admite dos tipos de colecciones, colecciones genéricas y colecciones no genéricas:

| No Generica | Generica |
| - | - |
| ArrayList       |  List |
| HashTable         |  Dictionary |
| SortedList            |  SortedList   |
| Stack                       |  Stack              |
| Queue                                |  Queue              |


#### No generica
- Las contiene el espacio de nombre System.Collections.
- Funcionan con referencias de objetos, por lo que puede manejar cualquier tipo de objeto.
- En colecciones no genéricas, cada elemento puede representar un valor de un tipo de dato diferente. 
- El tamaño de la colección no es fijo. Los elementos de la colección se pueden agregar o eliminar en tiempo de ejecución.
-  Ejemplos: ArrayList , HashTable , SortedList , Stack , Queue , etc.


:::warning
- Microsoft no recomienda que se implemente este tipo de colecciones, porque son muy costosas de implementar.

:::


#### Genérico
- Las contiene el espacio de nombre System.Collections.Generic
- Las colecciones genéricas almacenan elementos solo del tipo de dato especificado:
  -	Tipo específico.
  -	El tamaño de la matriz no es fijo.
  -	Los elementos se pueden agregar o eliminar en tiempo de ejecución.
- En la mayoría de los casos, se recomienda utilizar colecciones genéricas porque funcionan más rápido que las colecciones no genéricas y también minimizan las excepciones al generar errores en tiempo de compilación.
- Ejemplos: List , Dictionary , SortedList , Stack , Queue , etc.

#### Concurrent
- Entro en .NET Framework Version 4 y siguió. Proporciona varias clases de colección seguras para subprocesos que se utilizan cuando varios subprocesos acceden a la colección simultáneamente.
-  Ejemplos: BlockingCollection , ConcurrentBag , ConcurrentDictionary , etc.

:::warning
Estas son de uso avanzado, por lo tanto, no las explicaremos, aunque puede leer la documentación para más información.
:::


#### Resumen

![Diagrama](https://media.geeksforgeeks.org/wp-content/uploads/Untitled-Diagram-20.jpg)


#### 4 Tipos

- Las colecciones se clasifican en 4 tipos: basadas en indexación, pares clave-valor, colecciones priorizadas y colecciones especializadas. 
- Para una mejor comprensión, eche un vistazo al siguiente diagrama:


![Diagrama](https://dotnettutorials.net/wp-content/uploads/2021/09/word-image-157.png?ezimgfmt=ng:webp/ngcb1)


#### Indexed Based
- En este tipo, se utiliza un índice para acceder a cada elemento de la colección.
- Ejemplo: ArrayList.
#### Key Value Pair
- En este tipo, usamos una clave para identificar un elemento de la colección.
- Ejemplo: Dictionary.
#### Prioritized Collection
- Las Colecciones Priorizadas le ayudan a acceder a los elementos en una secuencia particular.
- Si desea acceder a primero en entrar, primero en salir (FIFO) a los elementos de una colección, debe utilizar la colección Queue. Por otro lado, si desea acceder al último en entrar, primero en salir (LIFO) a los elementos de una colección, debe utilizar la colección Stack.
#### Specialized Collections
- Las Colecciones Especializadas están diseñadas específicamente para un propósito específico. Por ejemplo, un  HybridDictionary comienza como una lista y luego se convierte en una tabla hash.
- En este apartado no se explicará ninguna colección de este tipo porque es de uso avanzado.


#### Caracteristicas

- Las colecciones proporcionan una forma flexible de trabajar con grupos de objetos. Puedes clasificar diferentes colecciones por estas características:
   -	Acceso a elementos: Algunas colecciones acceden a los elementos por índice (la posición del elemento en una colección ordenada). El ejemplo más común es System.Collections.Generic.List&lt;T> . Otras colecciones acceden a los elementos por clave, donde un valor está asociado con una única clave. El ejemplo más común es System.Collections.Generic.Dictionary&lt;TKey,TValue> . Usted elige entre estos tipos de colección según cómo su aplicación accede a los elementos.
   -	Perfil de rendimiento : cada colección tiene diferentes perfiles de rendimiento para acciones como agregar un elemento, buscar un elemento o eliminar un elemento. Puede elegir un tipo de colección según las operaciones más utilizadas en su aplicación.
   -	Crecer y reducir dinámicamente : la mayoría de las colecciones admiten agregar o eliminar elementos dinámicamente. En particular, Array , System.Span&lt;T> y System.Memory&lt;T> no lo hacen. 
 
##### Excepciones
- Las matrices(arrays) se representan mediante System.Array y presentan compatibilidad con la sintaxis en el lenguaje C#. 
- System.Span&lt;T> es un tipo ref struct que proporciona una instantánea(snapshot) sobre una secuencia de elementos sin copiar esos elementos. El compilador aplica reglas de seguridad para garantizar que no se pueda acceder a Span después de que la secuencia a la que hace referencia ya no esté en el ámbito. Memory&lt;T> proporciona un comportamiento similar cuando no se puede usar un tipo ref struct.



:::tip
- [Todos los tipos de colecciones](https://learn.microsoft.com/en-us/dotnet/api/?term=collection)
:::


#### Tipos de colecciones
- C# nos permite trabajar con varios tipos de colecciones:
   -	IEnumerable
   -	ICollection
   -	IList
   -	IQueryable

![TipoColecciones](https://miro.medium.com/v2/resize:fit:720/format:webp/1*VVhsT-wGh4NjAuwmmx1WeQ.jpeg)

:::tip Observación
- Como puedes ver IEnumerable es la clase base de todas las demás.
- Te estarás preguntando por qué IQueryable no se encuentra en la misma columna y es que en realidad esta clase se encuentra en un namespace diferente.
- Mientras que IEnumerable, ICollection e IList se encuentran en System.Collections, IQueryable está en System.Linq.



:::

#### IEnumerable
- Es el tipo más básico de colección. Proporciona un enumerador que ayuda a iterar sobre los elementos.
- Qué puede hacer:
    -  Permite recorrer mediante iteración (foreach) cada uno de los elementos de la colección y ejecutar filtros de búsqueda con la clausula where.
- Qué NO puede hacer: 
   - No permite operaciones de edición sobre los elementos de la colección (Agregar, eliminar, actualizar, etc.). 
   - Tampoco proporciona un recuento de dichos elementos por tanto si quieres saber la cantidad total debes obtenerla manualmente mediante un foreach.
 - Cuándo usarla: 
    - Puedes usar IEnumerable cuando no necesites hacer modificaciones sobre tu lista de elementos y no te importe conocer el total de ellos.

#### ICollection
- Es otro tipo de colección que deriva directamente de IEnumerable y amplía su funcionalidad.
- Qué puede hacer:
    -  Con esta clase podemos agregar, editar, eliminar y contar los elementos de la colección (el famoso .Count).
 - Cuándo usarla: 
    -  Por lo general verás este tipo de colección al trabajar con Entity Framework ya que no tiene tanto sobrecoste.


#### IList
- IList deriva directamente de ICollection. Es decir, reúne todos los poderes de IEnumerable e ICollection en un solo lugar además de alguna funcionalidad adicional como insertar o eliminar un elemento en el centro de una lista. 
- Es probablemente la colección más utilizada.

#### IQueryable
- La diferencia entre IEnumerable y IQueryble es que si, por ejemplo, realizamos una consulta a la tabla PERSONA en nuestra base de datos para obtener todos los registros y guardamos el resultado en una variable del tipo IEnumerable esta guardará los datos en memoria.
- Por otro lado, si almacenásemos el resultado de la misma consulta en una variable tipo IQueryable esta guardará la consulta SQL en sí, es decir: SELECT * FROM PERSONA la cual se “materializará” únicamente cuando coloquemos a nuestra variable el famoso .ToList() o iteremos la colección con un foreach.



#### Colecciones indexables

- Una colección indexable es aquella en la que puede acceder a cada elemento utilizando su índice. Su índice es el número de elementos que están antes en la secuencia. Por tanto, el índice 0 es el primer elemento, el índice 1 es el segundo, y así sucesivamente.
-  Estos ejemplos utilizan la clase List&lt;T> . Es la colección indexable más común:

```csharp

var salmons = new List<string> { "chinook", "coho", "pink", "sockeye" };


foreach (var salmon in salmons)
{
    Console.Write(salmon + " ");
}

salmons.Remove("coho");



for (var index = 0; index < salmons.Count; index++)
{
    Console.Write(salmons[index] + " ");
}
// Output: chinook pink sockeye


salmons.Add("coho");

foreach (var salmon in salmons)
{
    Console.Write(salmon + " ");
}
// Output: chinook pink sockeye coho

```
- El siguiente ejemplo elimina elementos de una lista por índice.
- El método RemoveAt hace que los elementos después de un elemento eliminado tengan un valor de índice más bajo.

```csharp
var numbers = new List<int> { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };


for (var index = numbers.Count - 1; index >= 0; index--)
{
    if (numbers[index] % 2 == 1)
    {
    
        numbers.RemoveAt(index);
    }
}


numbers.ForEach(
    number => Console.Write(number + " "));
// Output: 0 2 4 6 8

```

- Para el tipo de elementos en List&lt;T> , también puede definir su propia clase. En el siguiente ejemplo, la clase Galaxy que utiliza List&lt;T> se define en el código:

```csharp
private static void IterateThroughList()
{
    var theGalaxies = new List<Galaxy>
    {
        new (){ Name="Tadpole", MegaLightYears=400},
        new (){ Name="Pinwheel", MegaLightYears=25},
        new (){ Name="Milky Way", MegaLightYears=0},
        new (){ Name="Andromeda", MegaLightYears=3}
    };

    foreach (Galaxy theGalaxy in theGalaxies)
    {
        Console.WriteLine(theGalaxy.Name + "  " + theGalaxy.MegaLightYears);
    }

    // Output:
    //  Tadpole  400
    //  Pinwheel  25
    //  Milky Way  0
    //  Andromeda  3
}

public class Galaxy
{
    public string Name { get; set; }
    public int MegaLightYears { get; set; }
}

```

#### Colecciones de pares-valor
- Estos ejemplos usan la clase Dictionary&lt;TKey,TValue>. Es la colección de diccionarios más común. Una colección de diccionarios permite acceder a los elementos de la colección mediante la clave de cada elemento. Cada adición al diccionario consta de un valor y de su clave asociada.
- En el ejemplo siguiente se crea una colección Dictionary y se recorre en iteración el diccionario usando una instrucción foreach:


```csharp
private static void IterateThruDictionary()
{
    Dictionary<string, Element> elements = BuildDictionary();

    foreach (KeyValuePair<string, Element> kvp in elements)
    {
        Element theElement = kvp.Value;

        Console.WriteLine("key: " + kvp.Key);
        Console.WriteLine("values: " + theElement.Symbol + " " +
            theElement.Name + " " + theElement.AtomicNumber);
    }
}

public class Element
{
    public required string Symbol { get; init; }
    public required string Name { get; init; }
    public required int AtomicNumber { get; init; }
}

private static Dictionary<string, Element> BuildDictionary() =>
    new ()
    {
        {"K",
            new (){ Symbol="K", Name="Potassium", AtomicNumber=19}},
        {"Ca",
            new (){ Symbol="Ca", Name="Calcium", AtomicNumber=20}},
        {"Sc",
            new (){ Symbol="Sc", Name="Scandium", AtomicNumber=21}},
        {"Ti",
            new (){ Symbol="Ti", Name="Titanium", AtomicNumber=22}}
    };

```

#### Iteradores

- Los iteradores se usan para efectuar una iteración personalizada en una colección. Un iterador usa una instrucción yield return para devolver cada elemento de la colección a la vez.
- Llame a un iterador mediante una instrucción foreach. Cada iteración del bucle foreach llama al iterador. Cuando se alcanza una instrucción yield return en el iterador, se devuelve una expresión y se conserva la ubicación actual en el código. La ejecución se llama desde esa ubicación la próxima vez que se llama al iterador.
- El siguiente ejemplo usa un iterador (es un método). El método del iterador tiene una instrucción yield return que se encuentra dentro de un bucle for. En el método ListEvenNumbers, cada iteración del cuerpo de la instrucción foreach crea una llamada al método iterador, que continúa con la siguiente instrucción yield return:


```csharp
private static void ListEvenNumbers()
{
    foreach (int number in EvenSequence(5, 18))
    {
        Console.Write(number.ToString() + " ");
    }
    Console.WriteLine();
    // Output: 6 8 10 12 14 16 18
}

private static IEnumerable<int> EvenSequence(
    int firstNumber, int lastNumber)
{
    // Yield even numbers in the range.
    for (var number = firstNumber; number <= lastNumber; number++)
    {
        if (number % 2 == 0)
        {
            yield return number;
        }
    }
}

```
#### Linq y Colecciones
- Language Integrated Query (LINQ) se puede usar para acceder a las colecciones. Las consultas LINQ proporcionan capacidades de filtrado, ordenación y agrupación. 
- El ejemplo siguiente ejecuta una consulta LINQ en una List genérica. La consulta LINQ devuelve otra colección que contiene los resultados:


```csharp
private static void ShowLINQ()
{
    List<Element> elements = BuildList();

    // LINQ Query.
    var subset = from theElement in elements
                 where theElement.AtomicNumber < 22
                 orderby theElement.Name
                 select theElement;

    foreach (Element theElement in subset)
    {
        Console.WriteLine(theElement.Name + " " + theElement.AtomicNumber);
    }

    // Output:
    //  Calcium 20
    //  Potassium 19
    //  Scandium 21
}

private static List<Element> BuildList() => new()
    {
        { new(){ Symbol="K", Name="Potassium", AtomicNumber=19}},
        { new(){ Symbol="Ca", Name="Calcium", AtomicNumber=20}},
        { new(){ Symbol="Sc", Name="Scandium", AtomicNumber=21}},
        { new(){ Symbol="Ti", Name="Titanium", AtomicNumber=22}}
    };

```

#### En C# existen muchas colecciones para usar, a continuación, explicaremos algunas.

### List&lt;t>
- La clase List&lt;T> es una colección ordenada que permite almacenar elementos del mismo tipo. Para declarar e inicializar una lista en C#, se utiliza la siguiente sintaxis:

```csharp
List<tipoDeDato> nombreLista = new List<tipoDeDato>();
```

:::tip Observación
- tipoDeDato representa el tipo de dato que se almacenará en la lista. Por ejemplo, si se desea almacenar enteros, se utilizará List&lt;int>, si se desea almacenar cadenas de texto, se utilizará List&lt;string>, etc.
- Es una clase genérica.
:::

- También se puede inicializar una lista con elementos utilizando la siguiente sintaxis:


```csharp
List<T> lista = new List<T>() { elemento1, elemento2, elemento3, ... };
```

:::tip Observación
- elemento1, elemento2, elemento3, etc. son los elementos que se desean agregar a la lista.
:::


- La primera es usando la palabra clave new y la segunda es usando la sintaxis de inicialización de colección. Aquí hay un ejemplo de cada una:


#### Sintaxis con new
- Por ejemplo, para declarar e inicializar una lista de enteros en C#, se utiliza la siguiente sintaxis:

```csharp
List<int> miLista = new List<int>();
```
- Para agregar elementos a una lista en C#, se utiliza el método Add:

```csharp
miLista.Add(1);
miLista.Add(2);
miLista.Add(3);
```

#### Sintaxis de inicialización de colección

```csharp
List<int> miLista = new List<int> { 1, 2, 3, 4, 5 };
```

:::tip Observación
- En este ejemplo, se crea una nueva lista de tipo int utilizando la sintaxis de inicialización de colección. Los elementos se agregan directamente dentro de los corchetes y separados por comas. La lista resultante contendrá cinco elementos con los valores del 1 al 5.
:::


#### Add()
- Para añadir elementos a una lista en C#, podemos usar el método Add que pertenece a la clase List&lt;T>. Este método añade un elemento al final de la lista.
- Aquí tienes un ejemplo de cómo añadir elementos a una lista en C#:

```csharp
using System;
using System.Collections.Generic;

class Program {
  static void Main(string[] args) {
    // Crear una lista de enteros vacía
    List < int > numeros = new List < int > ();

    // Añadir elementos a la lista
    numeros.Add(1);
    numeros.Add(2);
    numeros.Add(3);

    // Mostrar los elementos de la lista
    foreach(int numero in numeros) {
      Console.WriteLine(numero);
    }
  }
}

```

:::tip Observación
- En este ejemplo, creamos una lista vacía llamada numeros que va a contener enteros. Luego añadimos tres elementos a la lista usando el método Add. Finalmente, recorremos la lista con un bucle foreach y mostramos cada elemento por pantalla.
:::

#### Remove()
- Elimina la primera aparición de un elemento en la lista.
- Ejemplo:


```csharp
List < string > lista = new List < string > {
  "manzana",
  "naranja",
  "pera",
  "uva"
};
lista.Remove("pera");

```
#### RemoveAt()
-  Elimina el elemento de un índice específico.
-  Ejemplo:

```csharp
List < string > lista = new List < string > {
  "manzana",
  "naranja",
  "pera",
  "uva"
};
lista.RemoveAt(2);

```
#### RemoveRange()
- Elimina una sección de la lista que incluye un rango de elementos, comenzando en un índice específico.
- Ejemplo:

```csharp
List < string > lista = new List < string > {
  "manzana",
  "naranja",
  "pera",
  "uva"
};
lista.RemoveRange(1, 2);

```

#### Clear()
- Elimina todos los elementos de la lista.
- Ejemplo:

```csharp
List < string > lista = new List < string > {
  "manzana",
  "naranja",
  "pera",
  "uva"
};
lista.Clear();

```
#### RemoveAll()
- Elimina todos los elementos de la lista que cumplen con un predicado específico.
- Ejemplo:
```csharp
List < int > lista = new List < int > {
  1,
  2,
  3,
  4,
  5
};
lista.RemoveAll(n =>n % 2 == 0);

```
#### Sort()
- El método Sort() ordena los elementos de la lista según un valor. 
- El método Sort() admite una sobrecarga que te permite especificar un comparador personalizado para determinar el orden de los elementos.
- Aquí te dejo un ejemplo de cómo utilizar el método Sort() para ordenar una lista de números enteros en orden ascendente:

```csharp
List < int > numeros = new List < int > {
  3,
  1,
  4,
  1,
  5,
  9,
  2,
  6,
  5
};

numeros.Sort(); // Ordenar en orden ascendente

foreach(int numero in numeros) {
  Console.WriteLine(numero);
}

```
:::tip Observación
- Este código primero crea una lista de números enteros y luego llama al método Sort() para ordenarlos en orden ascendente. Finalmente, se utiliza un bucle foreach para imprimir los números ordenados en la consola.
:::
- También puedes utilizar el método Reverse() para ordenar los elementos de una lista en orden descendente:

```csharp
numeros.Sort(); // Ordenar en orden ascendente
numeros.Reverse(); // Ordenar en orden descendente

foreach(int numero in numeros) {
  Console.WriteLine(numero);
}

```
:::tip Observación
- Este código primero ordena los números en orden ascendente y luego invierte el orden de los elementos utilizando el método Reverse(). Finalmente, se utiliza un bucle foreach para imprimir los números en orden descendente en la consola.
:::

#### Indice
- Para acceder a los elementos de una lista en C#, se utiliza la siguiente sintaxis:
```csharp
miLista[indice];
```

:::tip Observación
- Es como un array

:::

- Por ejemplo, para acceder al elemento en la primera posición de una lista de enteros llamada miLista, se utiliza la siguiente sintaxis:

```csharp
int elemento = miLista[0];
```

:::tip
- Para una lista más compleja, existe LinkedList&lt;T>. 
:::

### Queue&lt;t>
- La clase Queue&lt;T> es una colección que implementa una estructura de cola, donde el primer elemento en entrar es el primer elemento en salir (FIFO). Para declarar e inicializar una cola en C#, se utiliza la siguiente sintaxis:
```csharp
Queue<T> nombreCola = new Queue<T>();
```
- Por ejemplo, para declarar e inicializar una cola de enteros en C#, se utiliza la siguiente sintaxis:

```csharp
Queue<int> miCola = new Queue<int>();
```
- Para agregar elementos a una cola en C#, se utiliza el método Enqueue:

```csharp
nombreCola.Enqueue(elemento);
```
- Por ejemplo, para agregar elementos a una cola de enteros llamada miCola, se utiliza la siguiente sintaxis:
  
```csharp
miCola.Enqueue(1);
miCola.Enqueue(2);
miCola.Enqueue(3);
```

- Para acceder al primer elemento de una cola en C#, se utiliza el método Peek:
```csharp
nombreCola.Peek();
```
- Por ejemplo, para acceder al primer elemento de una cola de enteros llamada miCola, se utiliza la siguiente sintaxis:

```csharp
int primerElemento = miCola.Peek();
```

- Para eliminar y devolver el primer elemento de una cola en C#, se utiliza el método Dequeue:

```csharp
nombreCola.Dequeue();
```

- Por ejemplo, para eliminar y devolver el primer elemento de una cola de enteros llamada miCola, se utiliza la siguiente sintaxis:


```csharp
int primerElemento = miCola.Dequeue();
```

### Stack&lt;T>
- La clase Stack&lt;T> es una colección que implementa una estructura de pila, donde el último elemento en entrar es el primer elemento en salir (LIFO). Para declarar e inicializar una pila en C#, se utiliza la siguiente sintaxis:

```csharp
Stack<T> nombrePila = new Stack<T>();
```
- Por ejemplo, para declarar e inicializar una pila de enteros en C#, se utiliza la siguiente sintaxis:

```csharp
Stack<int> miPila = new Stack<int>();
```
- Para agregar elementos a una pila en C#, se utiliza el método Push:

```csharp
nombrePila.Push(elemento);
```

- Por ejemplo, para agregar elementos a una pila de enteros llamada miPila, se utiliza la siguiente sintaxis:

```csharp
miPila.Push(1);
miPila.Push(2);
miPila.Push(3);
```

- Para acceder al primer elemento de una pila en C#, se utiliza el método Peek:

```csharp
int ultimoElemento = miPila.Peek();
```

- Para eliminar y devolver el último elemento de una pila en C#, se utiliza el método Pop:

```csharp
int ultimoElemento = miPila.Pop();
```


### Dictionary&lt;TKey,TValue>

- La clase Dictionary&lt;TKey, TValue> es una colección de pares clave-valor, donde la clave y el valor pueden ser de tipos diferentes. Para declarar e inicializar un diccionario en C#, se utiliza la siguiente sintaxis:

```csharp
Dictionary<TKey, TValue> nombreDiccionario = new Dictionary<TKey, TValue>();
```
- Por ejemplo, para declarar e inicializar un diccionario donde las claves son de tipo string y los valores son de tipo int en C#, se utiliza la siguiente sintaxis:
  
```csharp
Dictionary<string, int> miDiccionario = new Dictionary<string, int>();
```

- Para agregar elementos a un diccionario en C#, se utiliza la siguiente sintaxis:

```csharp
nombreDiccionario.Add(clave, valor);
```

- Por ejemplo, para agregar un par clave-valor a un diccionario de tipo string e int llamado miDiccionario, se utiliza la siguiente sintaxis:


```csharp
miDiccionario.Add("uno", 1);
miDiccionario.Add("dos", 2);
miDiccionario.Add("tres", 3);

```

- Para acceder a los valores de un diccionario en C#, se utiliza la siguiente sintaxis:

```csharp
nombreDiccionario[clave];
```

:::tip Observación
- Es lo mismo que un array.
- Por lo tanto, se modifica su valor con la  [clave].
:::

- Por ejemplo, para acceder al valor asociado a la clave "dos" de un diccionario de tipo string e int llamado miDiccionario, se utiliza la siguiente sintaxis:


```csharp
int valor = miDiccionario["dos"];
```

### HashSet&lt;T>
- HashSet&lt;T> almacena un conjunto de valores distintos sin ningún orden en particular. A diferencia de un List&lt;T>,  HashSet&lt;T> no tiene ningún índice que pueda usarse para almacenar y recuperar un elemento de la colección.
- La clase HashSet&lt;T> es una colección que no permite duplicados y proporciona operaciones rápidas de búsqueda, inserción y eliminación. Para declarar e inicializar un conjunto en C#, se utiliza la siguiente sintaxis:

```csharp
HashSet<T> nombreConjunto = new HashSet<T>();
```

- Por ejemplo, para declarar e inicializar un conjunto de enteros en C#, se utiliza la siguiente sintaxis:

```csharp
HashSet<int> miConjunto = new HashSet<int>();
```

- Para agregar elementos a un conjunto en C#, se utiliza el método Add:

```csharp
nombreConjunto.Add(elemento);
```

- Por ejemplo, para agregar elementos a un conjunto de enteros llamado miConjunto, se utiliza la siguiente sintaxis:

```csharp
miConjunto.Add(1);
miConjunto.Add(2);
miConjunto.Add(3);

```

- Para verificar si un elemento está en un conjunto en C#, se utiliza el método Contains:

```csharp
nombreConjunto.Contains(elemento);
```
- Por ejemplo, para verificar si el elemento 2 está en un conjunto de enteros llamado miConjunto, se utiliza la siguiente sintaxis:

```csharp
bool resultado = miConjunto.Contains(2);
```

- Para eliminar un elemento de un conjunto en C#, se utiliza el método Remove:

```csharp
nombreConjunto.Remove(elemento);
```

- Por ejemplo, para eliminar el elemento 2 de un conjunto de enteros llamado miConjunto, se utiliza la siguiente sintaxis:

```csharp
miConjunto.Remove(2);
```
- También es posible realizar operaciones de conjunto en C#, como unión, intersección y diferencia, utilizando los métodos Union, Intersect y Except, respectivamente.
- Por ejemplo, para realizar la unión de dos conjuntos de enteros llamados conjunto1 y conjunto2, se utiliza la siguiente sintaxis:

```csharp
HashSet<int> union = new HashSet<int>(conjunto1);
union.UnionWith(conjunto2);

```

#### Ejemplo
```csharp
using System;
using System.Collections.Generic;
 
public class Example
{
    public static void Main()
    {
        HashSet<int> numbers = new HashSet<int>() { 1, 2, 3, 4 };
        int target = 2;
 
        int item;
        bool found = numbers.TryGetValue(target, out item);
 
        Console.WriteLine(found);        // True
    }
}

```
:::tip Observación
- El método TryGetValue() busca en el conjunto un valor específico y devuelve un valor booleano que indica si la búsqueda fue exitosa. Tenga en cuenta que se necesita un  parámetro out  para almacenar el valor coincidente o un valor predeterminado si la búsqueda no produjo ninguna coincidencia.
:::


:::tip info
- [Recuperar un elemento de un HashSet en C#](https://www.techiedelight.com/es/retrieve-an-item-from-a-hashset-in-csharp/)

:::

### ArrayList
- Es un array especial.
- Veamos algunas diferencias entre los ArrayList y los arrays normales:
  -	Cambiar de tamaño: Los ArrayList pueden cambiar de tamaño fácilmente, mientras que los arrays normales no pueden.
  -	Guardar elementos diferentes: En un ArrayList, puedes guardar elementos de diferentes tipos, como números y letras juntos. En un array normal, solo puedes guardar elementos del mismo tipo.
  -	Hacer cosas con ellos: Con un ArrayList, puedes hacer muchas cosas útiles, como agregar cosas al final, quitar cosas en el medio y buscar información. Algunas de estas cosas son más difíciles de hacer con un array normal.
- Entonces, si necesitas una forma flexible de guardar y organizar información en tu programa de C#, un ArrayList puede ser una excelente opción. 
- Se ubica en el namespace System.Collections
- Crear un ArrayList en C# es fácil. Piensa en él como una caja vacía donde guardarás cosas:

```csharp
using System.Collections; // Añadimos la librería necesaria para usar ArrayList
ArrayList miArrayList = new ArrayList(); // Creamos un ArrayList llamado "miLista"

```
:::tip Observación
- En este ejemplo, se está creando un ArrayList vacío llamado miArrayList utilizando el operador new y el constructor predeterminado de la clase ArrayList.
:::

- Por ejemplo, si queremos crear un ArrayList en C# con los nombres de algunos países, podríamos hacer lo siguiente:

```csharp
using System;
using System.Collections;

class Program {
  static void Main(string[] args) {
    ArrayList paises = new ArrayList() {
      "España",
      "Francia",
      "Italia",
      "Alemania",
      "Reino Unido"
    };

    foreach(string pais in paises) {
      Console.WriteLine(pais);
    }
  }
}

```
:::tip Observación
- En este ejemplo, estamos creando un ArrayList llamado paises con cinco elementos, que son los nombres de algunos países europeos. Luego, utilizamos un bucle foreach para recorrer el ArrayList y mostrar cada uno de los nombres de los países en la consola.
:::

#### Método Add y AddRange
- Para añadir un elemento a un ArrayList en C#, se puede utilizar el método Add() de la clase ArrayList, el cual acepta un valor como argumento y lo añade al final de la lista.


```csharp
ArrayList myArrayList = new ArrayList(); // crear un ArrayList vacío
myArrayList.Add("elemento1"); // añadir un elemento

```

- Si quieres agregar varios elementos a la vez, usa el método AddRange():

```csharp
int[] numeros = {
  10,
  20,
  30
};
miArrayList.AddRange(numeros); // Agrega los números 10, 20 y 30 al ArrayList

```

#### Indice
- Para acceder a un elemento específico en un ArrayList, utilizamos el operador [] (corchetes) junto con el índice del elemento que deseamos obtener. 
- Para modificar un elemento, simplemente asignamos un nuevo valor al índice correspondiente.
- Ejemplo:


```csharp
using System;
using System.Collections;

class Program {
  static void Main() {
    ArrayList miLista = new ArrayList();
    miLista.Add(5);
    miLista.Add("Hola");

    // Acceder al primer elemento (índice 0)
    Console.WriteLine("Primer elemento: " + miLista[0]);

    // Modificar el segundo elemento (índice 1)
    miLista[1] = "Mundo";
    Console.WriteLine("Segundo elemento: " + miLista[1]);
  }
}

```

#### Propiedad count
- La propiedad Count nos permite obtener el número de elementos en un ArrayList:


```csharp
int cantidad = miArrayList.Count;
```

#### Eliminar elementos
- Remove() elimina el primer elemento que coincide con el valor especificado. 
- RemoveAt() elimina el elemento en el índice especificado.
- RemoveRange() elimina un rango de elementos comenzando en el índice especificado y con la cantidad especificada.
- Ejemplo:


```csharp
using System;
using System.Collections;

class Program {
  static void Main() {
    ArrayList miArrayList = new ArrayList() {
      "Uno",
      "Dos",
      "Tres",
      "Cuatro",
      "Cinco"
    };

    // Eliminar un elemento específico
    miArrayList.Remove("Tres");

    // Eliminar el elemento en el índice 1
    miArrayList.RemoveAt(1);

    // Eliminar un rango de elementos comenzando en el índice 1 y eliminando 2 elementos
    miArrayList.RemoveRange(1, 2);

    foreach(var elemento in miArrayList) {
      Console.WriteLine(elemento);
    }
  }
}

```

#### Insertar elementos
- Insert() añade un elemento en el índice especificado. 
- InsertRange() añade una colección de elementos en el índice especificado.
- Ejemplo:
```csharp
using System;
using System.Collections;

class Program {
  static void Main() {
    ArrayList miArrayList = new ArrayList() {
      "Uno",
      "Dos",
      "Tres"
    };

    // Insertar un elemento en el índice 1
    miArrayList.Insert(1, "Nuevo elemento");

    // Insertar una colección de elementos en el índice 2
    string[] nuevosElementos = {
      "Cuatro",
      "Cinco"
    };
    miArrayList.InsertRange(2, nuevosElementos);

    foreach(var elemento in miArrayList) {
      Console.WriteLine(elemento);
    }
  }
}

```

#### Buscar elementos
- IndexOf() devuelve el índice de la primera aparición de un elemento. 
- LastIndexOf() devuelve el índice de la última aparición de un elemento. 
- Contains() devuelve true si el ArrayList contiene el elemento especificado.
- Ejemplo:


```csharp
using System;
using System.Collections;

class Program {
  static void Main() {
    ArrayList miArrayList = new ArrayList() {
      "Uno",
      "Dos",
      "Tres",
      "Dos"
    };

    // Buscar el índice de la primera aparición de "Dos"
    int primerIndice = miArrayList.IndexOf("Dos");
    Console.WriteLine("Primer índice de 'Dos': " + primerIndice);

    // Buscar el índice de la última aparición de "Dos"
    int ultimoIndice = miArrayList.LastIndexOf("Dos");
    Console.WriteLine("Último índice de 'Dos': " + ultimoIndice);

    // Verificar si el ArrayList contiene el elemento "Tres"
    bool contieneTres = miArrayList.Contains("Tres");
    Console.WriteLine("¿Contiene 'Tres'? " + contieneTres);
  }
}

```

#### Ordenar
- Sort() ordena los elementos del ArrayList según su valor. 
- Reverse() invierte el orden de los elementos en el ArrayList.
- Ejemplo:


```csharp
using System;
using System.Collections;

class Program {
  static void Main() {
    ArrayList miArrayList = new ArrayList() {
      3,
      1,
      4,
      5,
      2
    };

    // Ordenar los elementos del ArrayList
    miArrayList.Sort();
    Console.WriteLine("ArrayList ordenado:");
    foreach(var elemento in miArrayList) {
      Console.WriteLine(elemento);
    }

    // Revertir el orden de los elementos en el ArrayList
    miArrayList.Reverse();
    Console.WriteLine("ArrayList invertido:");
    foreach(var elemento in miArrayList) {
      Console.WriteLine(elemento);
    }
  }
}

```

:::tip info
- [ArrayList en C#](https://oregoom.com/c-sharp/arraylist/)

:::


### SortedSet&lt;T>
- En C#, SortedSet es una colección de objetos ordenados. Es de colección de tipo genérico.
- Puntos importantes:
   -	La clase SortedSet implementa las interfaces ICollection , IEnumerable , IReadOnlyCollection , ISet , ICollection , IEnumerable , IDeserializationCallback e ISerializable .
   -	En SortedSet, los elementos deben ser únicos.
   - La cantidad de elementos que puede contener SortedSet se denomina capacidad de SortedSet.
   -	En SortedSet, el orden de los elementos es ascendente (se puede cambiar mediante un constructor especifico).
   -	Generalmente se usa cuando queremos almacenar elementos únicos y mantener el orden ascendente (u otro tipo de orden).
   -	En SortedSet, el usuario solo puede almacenar elementos del mismo tipo.
- Ejemplo:


```csharp
using System;
using System.Collections.Generic;
 
class GFG {
 
  
    static public void Main()
    {
 
    
        SortedSet<int> my_Set1 = new SortedSet<int>();
 
   
        my_Set1.Add(101);
        my_Set1.Add(1001);
        my_Set1.Add(10001);
        my_Set1.Add(100001);
        Console.WriteLine("Elements of my_Set1:");
 
 
        foreach(var val in my_Set1)
        {
            Console.WriteLine(val);
        }
 
     
        SortedSet<int> my_Set2 = new SortedSet<int>() {
                                202,2002,20002,200002};
                 
  
        Console.WriteLine("Elements of my_Set2:");
        foreach(var value in my_Set2)
        {
            Console.WriteLine(value);
        }
    }
}

```

### HashTable
- Hashtable es una colección no genérica que almacena pares clave-valor, similar a la colección genérica Dictionary&lt;TKey, TValue> . Optimiza las búsquedas calculando el código hash de cada clave y lo almacena en un depósito diferente internamente y luego hace coincidir el código hash de la clave especificada en el momento de acceder a los valores.
- Características de la tabla hash
  -	Hashtable almacena pares clave-valor.
  -	Viene bajo el espacio de nombres System.Collections. 
  -	Implementa la interfaz IDictionary .
  -	Las claves deben ser únicas y no pueden ser nulas.
  -	Los valores pueden ser nulos o duplicados.
  -	Se puede acceder a los valores pasando la clave asociada en el indexador, por ejemplo, myHashtable[key]
  -	Los elementos se almacenan como objetos DictionaryEntry.

#### Ejemplo
- Crear:

```csharp
Hashtable numberNames = new Hashtable();
numberNames.Add(1,"One"); 
numberNames.Add(2,"Two");
numberNames.Add(3,"Three");



foreach(DictionaryEntry de in numberNames)
    Console.WriteLine("Key: {0}, Value: {1}", de.Key, de.Value);
		

var cities = new Hashtable(){
	{"UK", "London, Manchester, Birmingham"},
	{"USA", "Chicago, New York, Washington"},
	{"India", "Mumbai, New Delhi, Pune"}
};
		
foreach(DictionaryEntry de in cities)
    Console.WriteLine("Key: {0}, Value: {1}", de.Key, de.Value);

```

- Actualizar:

```csharp
var cities = new Hashtable(){
	{"UK", "London, Manchester, Birmingham"},
	{"USA", "Chicago, New York, Washington"},
	{"India", "Mumbai, New Delhi, Pune"}
};
    
string citiesOfUK = (string) cities["UK"]; 
string citiesOfUSA = (string) cities["USA"]; 

Console.WriteLine(citiesOfUK);
Console.WriteLine(citiesOfUSA);

cities["UK"] = "Liverpool, Bristol"; 
cities["USA"] = "Los Angeles, Boston"; 

if(!cities.ContainsKey("France")){
    cities["France"] = "Paris";
}


```

- Eliminar:


```csharp
var cities = new Hashtable(){
	{"UK", "London, Manchester, Birmingham"},
	{"USA", "Chicago, New York, Washington"},
	{"India", "Mumbai, New Delhi, Pune"}
};

cities.Remove("UK"); 

if(cities.ContainsKey("France")){ 
    cities.Remove("France");
}

cities.Clear(); 

```

:::tip info
- [C# - Hashtable](https://www.tutorialsteacher.com/csharp/csharp-hashtable)

:::

### SortedList
- Representa una colección de pares de clave y valor ordenados por las claves. Por ejemplo, si las claves son de tipos primitivos, se ordenan en orden ascendente de claves.
- A los valores se puede tener acceso por clave y por índice.
- En el código siguiente se muestra cómo crear e inicializar un SortedList objeto y cómo imprimir sus claves y valores:


```csharp
using System;
using System.Collections;

public class SamplesSortedList2
{
    public static void Main()
    {
       
        SortedList mySL = new SortedList();
        mySL.Add("Third", "!");
        mySL.Add("Second", "World");
        mySL.Add("First", "Hello");

       
        Console.WriteLine("mySL");
        Console.WriteLine("  Count:    {0}", mySL.Count);
        Console.WriteLine("  Capacity: {0}", mySL.Capacity);
        Console.WriteLine("  Keys and Values:");
        PrintKeysAndValues(mySL);
    }

    public static void PrintKeysAndValues(SortedList myList)
    {
        Console.WriteLine("\t-KEY-\t-VALUE-");
        for (int i = 0; i < myList.Count; i++)
        {
            Console.WriteLine("\t{0}:\t{1}", myList.GetKey(i), myList.GetByIndex(i));
        }
        Console.WriteLine();
    }
}
/*


mySL
  Count:    3
  Capacity: 16
  Keys and Values:
    -KEY-    -VALUE-
    First:    Hello
    Second:    World
    Third:    !
*/

```

### SortedList&lt;TKey, TValue>
- Es lo mismo que SortedList pero es genérico.
- Características de tener una lista ordenada:
  -	SortedList&lt;TKey, TValue> es una matriz de pares clave-valor ordenados por  la clave.
  -	Ordena los elementos tan pronto como se agregan. Ordena las claves de tipo primitivo en orden ascendente y las claves de objeto según IComparer&lt;T> .
  -	Viene bajo el espacio de nombres System.Collection.Generic.
  -	Una clave debe ser única y no puede ser nula.
  -	Un valor puede ser nulo o duplicado.
  -	Se puede acceder a un valor pasando la clave asociada en el indexador mySortedList[key].
  -	Contiene elementos de tipo KeyValuePair&lt;TKey, TValue>.
  -	Utiliza menos memoria que SortedDictionary&lt;TKey,TValue>.
  -	Es más rápido en la recuperación de datos una vez ordenados, mientras que SortedDictionary&lt;TKey, TValue>es más rápido en la inserción y eliminación de pares clave-valor.  
- Ejemplo:

```csharp
//SortedList of int keys, string values 
SortedList<int, string> numberNames = new SortedList<int, string>();
numberNames.Add(3, "Three");
numberNames.Add(1, "One");
numberNames.Add(2, "Two");
numberNames.Add(4, null);
numberNames.Add(10, "Ten");
numberNames.Add(5, "Five");


```

### Stack
- Representa una colección de objetos no genérica de tipo "último en entrar primero en salir" (LIFO).
- Es lo mismo que Stack&lt;T> solamente que no es genérica.
- Ejemplo:

```csharp
using System;
using System.Collections;
public class SamplesStack  {

   public static void Main()  {

 
      Stack myStack = new Stack();
      myStack.Push("Hello");
      myStack.Push("World");
      myStack.Push("!");

  
      Console.WriteLine( "myStack" );
      Console.WriteLine( "\tCount:    {0}", myStack.Count );
      Console.Write( "\tValues:" );
      PrintValues( myStack );
   }

   public static void PrintValues( IEnumerable myCollection )  {
      foreach ( Object obj in myCollection )
         Console.Write( "    {0}", obj );
      Console.WriteLine();
   }
}


/*


myStack
    Count:    3
    Values:    !    World    Hello
*/

```

### Queue
- Representa una colección de objetos de tipo "primero en entrar, primero en salir".
- Es lo mismo que Queue&lt;T> solamente que no es genérica.
- Ejemplo:


```csharp
using System;
 using System.Collections;
 public class SamplesQueue  {

    public static void Main()  {

       // Creates and initializes a new Queue.
       Queue myQ = new Queue();
       myQ.Enqueue("Hello");
       myQ.Enqueue("World");
       myQ.Enqueue("!");

       // Displays the properties and values of the Queue.
       Console.WriteLine( "myQ" );
       Console.WriteLine( "\tCount:    {0}", myQ.Count );
       Console.Write( "\tValues:" );
       PrintValues( myQ );
    }

    public static void PrintValues( IEnumerable myCollection )  {
       foreach ( Object obj in myCollection )
          Console.Write( "    {0}", obj );
       Console.WriteLine();
    }
 }
 /*
 This code produces the following output.

 myQ
     Count:    3
     Values:    Hello    World    !
*/

```

### Otros
- Existen millones de colecciones más.
- La mayoría de las colecciones tienen los mismos métodos para modificar/leer/crear/eliminar elementos de la lista. Existen algunas excepciones, pero solo cambiaria el “nombre del método”.
- Por lo tanto, la mayoría de las colecciones tienen las mismas acciones (modificar / leer / crear / eliminar elementos de la lista).
- Una colección puede realizar acciones "específicas" que no se puede hacer con otras, por eso es importante seleccionar una colección que se adecue a tus necesidades.
- Por estas “diferencias” entre colecciones, se recomienda ver la documentación de cada colección para ver sus métodos y propiedades.
- Cuando accedes a un elemento de una colección , te devuelve un tipo de dato  especifico . Averigua que tipo de dato devuelve antes de usar una colección.


:::tip info
- [Colecciones](https://www.tutorialesprogramacionya.com/csharpya/detalleconcepto.php?codigo=212)
- [Colecciones](https://learn.microsoft.com/es-es/dotnet/csharp/language-reference/builtin-types/collections)
- [Colecciones y estructuras de datos](https://learn.microsoft.com/es-es/dotnet/standard/collections/)
- [Tipos de colección utilizados normalmente](https://learn.microsoft.com/es-es/dotnet/standard/collections/commonly-used-collection-types)
- [Guía práctica para trabajar con Arrays y colecciones en C#](https://estradawebgroup.com/Post/Guia-practica-para-trabajar-con-Arrays-y-colecciones-en-C/20641)
- [Aprenda a administrar colecciones de datos mediante List&lt;T> en C#](https://learn.microsoft.com/es-es/dotnet/csharp/tour-of-csharp/tutorials/arrays-and-collections)
- [Listas en C#](https://oregoom.com/c-sharp/listas/)
- [Colecciones en C#](https://jonaes.medium.com/colecciones-en-c-328664c45019)
- [Collections in C#](https://www.c-sharpcorner.com/UploadFile/736bf5/collection-in-C-Sharp/)
- [C# Generic & Non-generic Collections](https://www.tutorialsteacher.com/csharp/csharp-collection#google_vignette)
- [Collections in C#](https://www.geeksforgeeks.org/collections-in-c-sharp/)
- [C# - Collections](https://www.tutorialspoint.com/csharp/csharp_collections.htm)
- [Collections in C#](https://dotnettutorials.net/lesson/collections-csharp/#google_vignette)
- [C# Collections](https://www.javatpoint.com/c-sharp-collections)
:::