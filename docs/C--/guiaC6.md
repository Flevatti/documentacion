---
sidebar_position: 11
---
# Conceptos de "C#" - Parte 6

## Palabra clave virtual
- La palabra clave virtual en C# se utiliza para permitir que un método, propiedad, índice o evento en una clase base pueda ser anulado (sobrescrito) en una clase derivada. Esto es parte del mecanismo de polimorfismo en la programación orientada a objetos y permite que una clase derivada proporcione una implementación específica de un método que ya está definido en su clase base.

#### ¿Por qué usar virtual?
-	Flexibilidad: Permite que las clases derivadas personalicen el comportamiento de los métodos de la clase base. Esto es especialmente útil cuando deseas que las subclases se comporten de manera diferente sin cambiar la implementación de la clase base.
-	Polimorfismo: La palabra clave virtual es esencial para el polimorfismo, ya que permite que se invoquen métodos de las clases derivadas a través de referencias de la clase base.

#### Cómo funciona virtual
- Cuando declaras un método como virtual en una clase base, cualquier clase que herede de esa clase puede anular (sobrescribir) ese método usando la palabra clave override. Esto significa que puedes cambiar el comportamiento del método en la clase derivada.
- Aquí hay un ejemplo que ilustra cómo se utiliza la palabra clave virtual:
```csharp
public class Animal
{
    public virtual void HacerSonido()
    {
        Console.WriteLine("El animal hace un sonido.");
    }
}

public class Perro : Animal
{
    public override void HacerSonido()
    {
        Console.WriteLine("El perro ladra.");
    }
}

public class Gato : Animal
{
    public override void HacerSonido()
    {
        Console.WriteLine("El gato maulla.");
    }
}

class Programa
{
    static void Main()
    {
        Animal miAnimal;

        miAnimal = new Perro();
        miAnimal.HacerSonido(); // Imprime "El perro ladra."

        miAnimal = new Gato();
        miAnimal.HacerSonido(); // Imprime "El gato maulla."
    }
}

```
:::tip Detalles del ejemplo
-	Clase Base: La clase Animal tiene un método HacerSonido() marcado como virtual. Esto significa que cualquier clase que herede de Animal puede anular(sobrescribir) este método.
-	Clases Derivadas: Las clases Perro y Gato heredan de Animal y anulan (sobrescriben) el método HacerSonido() con la palabra clave override, proporcionando su propia implementación.
-	Uso en el Programa Principal: En el método Main, se declara una variable de tipo Animal, pero se le asignan instancias de Perro y Gato. Cuando se llama a HacerSonido(), se invoca la implementación correcta del método en función del tipo real del objeto (Perro o Gato), demostrando el concepto de polimorfismo.


:::


## Minimal API
- Las Minimal APIs en C# son una forma simplificada de construir APIs utilizando ASP.NET Core. Se introdujeron en .NET 6 y permiten crear aplicaciones HTTP de manera más ligera y menos estructurada que el enfoque tradicional basado en controladores. 
- Las Minimal APIs permiten construir aplicaciones HTTP sin la necesidad de crear un controlador y una clase de configuración separada. En su lugar, puedes definir endpoints de manera directa en el archivo de inicio de tu aplicación, lo que resulta en menos código y una sintaxis más concisa.

#### Ventajas de las Minimal APIs
1.	Simplicidad: Permiten un enfoque más directo para definir rutas y manejadores de solicitudes sin la sobrecarga de los controladores.
2.	Menos Código: Reducen la cantidad de código necesario para crear una API, lo que puede ser especialmente útil para prototipos o aplicaciones pequeñas.
3.	Desarrollo Rápido: Facilitan un desarrollo más rápido al eliminar la necesidad de la estructura tradicional de controladores.


#### Diferencias con los Controladores

|  Aspecto | Controladores | Minimal APIs |
| - | - | - |
|  Estructura | Requiere clases de controlador.  |  Directamente en el archivo de inicio. | 
|  Código | Más código, ya que cada acción es un método en un controlador. |  Menos código, usando una sintaxis más directa. | 
|  Uso | Ideal para aplicaciones más grandes y complejas. |  Ideal para aplicaciones pequeñas o prototipos. | 
|  Configuración | Necesita un archivo de configuración más elaborado. |  Configuración sencilla y directa. | 



#### Ejemplo de Minimal API
```csharp
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);

// Agregar servicios al contenedor, si es necesario
builder.Services.AddEndpointsApiExplorer();

var app = builder.Build();

// Definición de un endpoint
app.MapGet("/saludo", () => "¡Hola, mundo!");

app.MapGet("/persona/{nombre}", (string nombre) => 
{
    return $"¡Hola, {nombre}!";
});

app.Run();


```
:::tip Explicación del ejemplo
1.	Configuración del Servidor: Se inicia creando un WebApplicationBuilder y configurando los servicios. Aquí puedes añadir servicios si es necesario, aunque para este ejemplo no se necesitan.
2.	Creación de la Aplicación: Se crea la instancia de la aplicación web con builder.Build().
3.	Definición de Endpoints:
    -	app.MapGet("/saludo", () => "¡Hola, mundo!"); define un endpoint que responde a solicitudes GET en la ruta /saludo y devuelve un saludo simple.
    -	app.MapGet("/persona/{nombre}", (string nombre) => ...) define un segundo endpoint que toma un parámetro en la URL (nombre) y devuelve un saludo personalizado.
4.	Ejecutar la Aplicación: Finalmente, app.Run(); inicia el servidor web.
5. Para ejecutar esta Minimal API, necesitarás un entorno de desarrollo de ASP.NET Core. Al iniciar la aplicación y hacer una solicitud GET a http://localhost:&lt;puerto>/saludo, recibirás la respuesta "¡Hola, mundo!". Si accedes a http://localhost:&lt;puerto>/persona/Ana, obtendrás "¡Hola, Ana!".

:::


## Subconjuntos/rangos
- En C#, los subconjuntos o rangos (subranges) son una característica que permite trabajar con partes de una colección (como arrays o listas) de manera más sencilla y expresiva. Esta funcionalidad se introdujo en C# 8.0 y ofrece una manera compacta de seleccionar una porción de una secuencia de elementos usando un índice de inicio y un índice de final.
#### Características Clave de los Rangos y Subconjuntos
1.	Rangos: Los rangos permiten seleccionar un subconjunto de una colección usando la sintaxis de “..” para definir el rango de índices. Por ejemplo, 1..4 selecciona los elementos desde el índice 1 hasta el índice 3 (el final es exclusivo).
2.	Índices: Los índices en C# ahora tienen una nueva funcionalidad llamada Index. Con la sintaxis de ^, puedes contar los elementos desde el final de la colección. Por ejemplo, ^1 es el último elemento, ^2 es el penúltimo, y así sucesivamente.
3.	Sintaxis Limpia: Utilizando rangos e índices, puedes crear subconjuntos de una colección de manera más clara y concisa que utilizando bucles o llamadas a métodos como Array.Copy.


#### Cómo Trabajar con Rangos e Índices
- Con la nueva funcionalidad de rangos, puedes crear subconjuntos fácilmente de arrays o listas utilizando la sintaxis `.. `:
```csharp
int[] numeros = { 1, 2, 3, 4, 5, 6 };

// Extraer un subconjunto desde el índice 1 al índice 3 (no inclusivo del índice 4)
int[] subset = numeros[1..4]; // Resultado: { 2, 3, 4 }

foreach (var num in subset)
{
    Console.WriteLine(num);
}

```
#### Uso de Índices desde el Final
- El operador ^ te permite contar índices desde el final de la colección. Esto es útil cuando necesitas acceder a elementos al final de una lista sin conocer su longitud exacta:
```csharp
int[] numeros = { 1, 2, 3, 4, 5, 6 };

// Acceder al último elemento
int ultimo = numeros[^1]; // Resultado: 6

// Acceder al penúltimo elemento
int penultimo = numeros[^2]; // Resultado: 5

```
#### Combinar Índices y Rangos
- Puedes combinar rangos con índices negativos para obtener subconjuntos que empiecen desde el principio o el final de la colección:
```csharp

int[] numeros = { 1, 2, 3, 4, 5, 6 };

// Seleccionar desde el tercer elemento hasta el último
int[] subsetDesdeElTercero = numeros[2..^0]; // Resultado: { 3, 4, 5, 6 }

// Seleccionar desde el primer elemento hasta el penúltimo
int[] subsetSinElUltimo = numeros[0..^1]; // Resultado: { 1, 2, 3, 4, 5 }

```


## Desestructuración
- La desestructuración en C# es una característica que permite descomponer (o desestructurar) una instancia de un objeto o una tupla en variables individuales, de manera que puedes acceder a las propiedades o valores de forma más sencilla. Esto es especialmente útil cuando estás trabajando con objetos complejos o tuplas, ya que te permite acceder rápidamente a sus valores sin necesidad de referencias explícitas a las propiedades o índices.
#### ¿Cómo Funciona la Desestructuración?
- En C#, puedes desestructurar:
    1.	Tuplas.
    2.	Objetos personalizados, como records o clases, siempre y cuando implementen un método de desestructuración.

#### Desestructuración de Tuplas
- Una de las formas más comunes de desestructuración es con tuplas. Las tuplas son colecciones de valores agrupados, y puedes descomponerlas en variables individuales de forma muy sencilla:
```csharp
// Crear una tupla con tres elementos
(string nombre, int edad, string ciudad) persona = ("Juan", 30, "Madrid");

// Desestructuración de la tupla
var (nombre, edad, ciudad) = persona;

// Ahora tenemos tres variables individuales
Console.WriteLine($"Nombre: {nombre}, Edad: {edad}, Ciudad: {ciudad}");

```
:::tip Observación
1.	Tupla: Se define una tupla con los valores "Juan", 30, y "Madrid".
2.	Desestructuración: Con la línea var (nombre, edad, ciudad) = persona;, descomponemos la tupla en tres variables: nombre, edad, y ciudad.
3.	Uso: Ahora puedes usar estas variables de manera individual.
:::


#### Desestructuración en Records
- Otra forma de desestructuración en C# es cuando trabajas con records, que son tipos de objetos inmutables introducidos en C# 9.0. Los records proporcionan una funcionalidad integrada para la desestructuración:
```csharp
public record Persona(string Nombre, int Edad, string Ciudad);

var persona = new Persona("Ana", 25, "Barcelona");

// Desestructurar el record en variables individuales
var (nombre, edad, ciudad) = persona;

Console.WriteLine($"Nombre: {nombre}, Edad: {edad}, Ciudad: {ciudad}");

```
:::tip Observación
1.	Record: Se define el record Persona con tres propiedades: Nombre, Edad, y Ciudad.
2.	Desestructuración: Al utilizar var (nombre, edad, ciudad) = persona;, descomponemos el record persona en variables individuales, como si estuviéramos trabajando con una tupla.
3.	Uso: Las variables nombre, edad, y ciudad ahora contienen los valores de la instancia del record.
:::

#### Desestructuración con Clases Personalizadas
- 
Puedes habilitar la desestructuración en tus propias clases implementando un método llamado Deconstruct. Este método se encarga de descomponer la instancia en varios componentes. Aquí tienes un ejemplo:
```csharp
public class Punto
{
    public int X { get; }
    public int Y { get; }

    public Punto(int x, int y)
    {
        X = x;
        Y = y;
    }

    // Método Deconstruct
    public void Deconstruct(out int x, out int y)
    {
        x = X;
        y = Y;
    }
}

class Program
{
    static void Main()
    {
        var punto = new Punto(5, 10);

        // Desestructurar la instancia de Punto
        var (x, y) = punto;

        Console.WriteLine($"X: {x}, Y: {y}");
    }
}

```
:::tip Observación
-	Clase Punto: Creamos una clase con dos propiedades: X y Y.
-	Método Deconstruct: Este método toma dos parámetros out, uno para cada valor que queremos desestructurar. Cuando desestructuramos, este método es invocado implícitamente para extraer las propiedades.
- Los parámetros del método Deconstruct representan los miembros que quieres extraer (ya sean propiedades o campos) de la clase, y eso es lo que especificas entre paréntesis cuando realizas la desestructuración. Dentro del método, tú decides qué valor se asignará a cada uno de esos “miembros”.
- Al hacer la desestructuración, puedes extraer cualquiera de las variables out que se definieron en el método Deconstruct. Dentro de ese método, se especifica el valor que va a contener cada una de esas variables.
- Cuando se usa la desestructuración, el compilador sabe que tiene que llamar al método Deconstruct para obtener los valores de los miembros de la clase y asignarlos a las variables correspondientes.


:::



## ReadOnlySpan&lt;T>
- ReadOnlySpan&lt;T> se introdujo en C# 7.2 y es parte de las mejoras en el manejo de memoria y rendimiento en el lenguaje.
#### ¿Qué es ReadOnlySpan&lt;T>?
- ReadOnlySpan&lt;T> es un tipo de dato que representa una secuencia de elementos de un tipo determinado (T), pero solo proporciona acceso de lectura a esos elementos. Esto significa que no puedes modificar los datos a través de un ReadOnlySpan&lt;T>, lo que lo convierte en una opción segura para pasar datos sin permitir modificaciones.
- Cuando se utiliza ReadOnlySpan&lt;T>, no se crea una copia de los datos en memoria; en cambio, se crea una referencia a esos datos. Esto significa que el ReadOnlySpan&lt;T> actúa como una "ventana" que permite ver y acceder a los elementos que ya están en la memoria, sin duplicar o mover esos datos. La estructura ReadOnlySpan&lt;T> simplemente apunta a la misma ubicación en la memoria donde están almacenados los datos originales.
#### Características principales
1.	Eficiencia de memoria:
    - ReadOnlySpan&lt;T> permite trabajar con datos de forma eficiente sin hacer copias innecesarias. Se puede usar para referenciar porciones de arreglos, cadenas, o cualquier otra estructura de datos en memoria de manera eficiente.
2.	No necesita asignación de heap:
    - A diferencia de otras colecciones como List&lt;T>, ReadOnlySpan&lt;T> no requiere la asignación de memoria en el heap, lo que reduce la presión del recolector de basura y mejora el rendimiento en escenarios de alto rendimiento.
3.	Seguridad:
    - Al ser de solo lectura, ReadOnlySpan&lt;T> ayuda a prevenir modificaciones accidentales a los datos. Esto puede ser útil en situaciones donde la integridad de los datos es crítica.
4.	Operaciones seguras sobre datos:
    - Se puede usar en lugar de arreglos o listas cuando solo se necesita acceso de lectura, permitiendo operaciones como iteraciones y acceso a elementos sin riesgo de alteraciones.


#### Ejemplo
- Imagina que tienes un arreglo de enteros:
```csharp
int[] numeros = { 1, 2, 3, 4, 5 };
```

- Si deseas trabajar con esos números sin modificarlos, puedes crear un ReadOnlySpan&lt;int> que referencie el mismo bloque de memoria que el arreglo numeros:
```csharp
ReadOnlySpan<int> spanNumeros = numeros;
```
:::tip Observación
- En este caso, spanNumeros ahora actúa como una vista de solo lectura sobre el arreglo numeros, permitiéndote iterar sobre él o acceder a sus elementos sin permitir cambios en el contenido del arreglo original.
:::


## expression-bodied member
- Los expression-bodied members (miembros con cuerpo de expresión) en C# son una característica que permite simplificar la sintaxis de los métodos, propiedades y otros miembros de una clase o estructura utilizando una “expresión única” en lugar de un bloque de código. Esta característica fue introducida en C# 6 y se ha mejorado en versiones posteriores, como C# 7.0 y C# 8.0, para incluir más tipos de miembros.
- Los expression-bodied members en C# son similares a las funciones flecha (arrow functions) en JavaScript. 
- Los expression-bodied members en C# están específicamente diseñados para métodos, propiedades y otros miembros de clases o estructuras.
- Los expression-bodied members en C# pueden aplicarse a propiedades, constructores y operadores, además de métodos.

#### Métodos
- Puedes definir un método que retorna un valor utilizando una expresión simple:
```csharp
public class MathUtils
{
    public int Sumar(int a, int b) => a + b; // Método de cuerpo de expresión
}


```
:::tip Comparación con Javascript
- Permiten definir funciones o métodos en una sola línea.
- En javascript seria: 
```js
const sumar = (a, b) => a + b;
```
- Tanto en C# como en JavaScript, no es necesario usar la palabra clave return si la función retorna en una sola línea.
:::

#### Propiedades
- Las propiedades también pueden ser definidas usando esta sintaxis, permitiendo que el valor de una propiedad se calcule de manera concisa:
```csharp
public class Rectangulo
{
    public int Ancho { get; }
    public int Alto { get; }

    public Rectangulo(int ancho, int alto)
    {
        Ancho = ancho;
        Alto = alto;
    }

    public int Area => Ancho * Alto; // Propiedad con cuerpo de expresión
}


```

#### Operadores
- Puedes usar cuerpos de expresión para definir operadores sobrecargados:

```csharp
public static Rectangulo operator +(Rectangulo r1, Rectangulo r2) =>
    new Rectangulo(r1.Ancho + r2.Ancho, r1.Alto + r2.Alto);

```

#### Constructores
- En versiones más recientes, también puedes definir constructores usando la sintaxis de cuerpo de expresión:
```csharp
public class Punto
{
    public int X { get; }
    public int Y { get; }

    public Punto(int x, int y) => (X, Y) = (x, y); // Constructor con cuerpo de expresión
}

```

:::tip Observación
- La sintaxis `(X, Y) = (x, y)` es una asignación de tuplas. En este contexto, está asignando el valor de x al campo o propiedad X y el valor de y al campo o propiedad Y. Esto permite una asignación más compacta y clara.

:::

## Span&lt;T>
- Span&lt;T> en C# es un tipo introducido en C# 7.2 que permite trabajar con secuencias de datos que están almacenados de forma continua, uno tras otro, en la memoria. Es decir, los elementos de esa secuencia están físicamente organizados en celdas consecutivas de memoria.
#### Características clave de Span&lt;T>
1.	No crea copias de datos: Permite trabajar con partes de arreglos o buffers sin duplicar la información. Esto es útil cuando necesitas procesar solo una porción de un arreglo, sin la sobrecarga de crear un nuevo arreglo.
2.	Eficiente en términos de memoria y rendimiento: Al evitar la creación de copias adicionales de datos, Span&lt;T> es muy eficiente cuando se trabaja con grandes cantidades de datos o cuando se requiere un procesamiento rápido.
3.	Soporte para memoria gestionada y no gestionada: Span&lt;T> puede referenciar tanto memoria gestionada (como arreglos) como memoria no gestionada (como buffers de memoria fuera del control de la recolección de basura).
4.	Pila (stack) en lugar de heap: Span&lt;T> generalmente se asigna en la pila, lo que significa que se puede recolectar cuando sale del alcance, lo que evita la presión sobre la recolección de basura (GC). Esto es diferente de los arreglos tradicionales, que se asignan en el heap.
5.	Versatilidad: Puedes usar Span&lt;T> con tipos como byte, char, int, o cualquier otro tipo de dato para manipular datos binarios o buffers de texto de forma eficiente.



#### Ejemplo básico de Span&lt;T>
```csharp
public class Ejemplo
{
    public static void Main()
    {
        int[] array = { 1, 2, 3, 4, 5, 6 };

        // Crear un Span que apunte(referencie) a una porción del arreglo
        Span<int> span = array.AsSpan(1, 3);  // Desde el índice 1, tomar 3 elementos

        foreach (var item in span)
        {
            Console.WriteLine(item);  // Salida: 2, 3, 4
        }

        // Modificar el Span modifica el arreglo original
        span[0] = 100;
        Console.WriteLine(array[1]);  // Salida: 100
    }
}

```

#### Span&lt;T> vs ReadOnlySpan&lt;T>
- La diferencia clave entre Span&lt;T> y ReadOnlySpan&lt;T> es que mientras ambos permiten trabajar con secuencias contiguas de datos en memoria, con ReadOnlySpan&lt;T> no puedes modificar los datos subyacentes, ya que es de solo lectura.

##### Diferencias principales
1.	Mutabilidad:
    -	Span&lt;T>: Te permite leer y modificar los datos en la secuencia contigua de memoria.
    -	ReadOnlySpan&lt;T>: Te permite solo leer los datos. No puedes modificarlos, garantizando que los datos subyacentes no cambien.
2.	Seguridad:
    -	ReadOnlySpan&lt;T> proporciona una capa adicional de seguridad porque asegura que los datos a los que apunta no serán alterados accidentalmente. Esto es útil cuando necesitas pasar referencias a datos que no deben ser modificados, como constantes o datos sensibles.
3.	Uso previsto:
    -	Span&lt;T>: Útil cuando necesitas manipular los datos, como al procesar o actualizar partes de un arreglo.
    -	ReadOnlySpan&lt;T>: Adecuado cuando solo necesitas acceder a los datos sin necesidad de modificarlos, como al realizar operaciones de lectura.

## Operadores sobrecargados
- Los operadores sobrecargados en C# permiten redefinir la funcionalidad de los operadores para tipos definidos por el usuario, como clases o estructuras. Esto significa que puedes hacer que operadores como +, -, ==, !=, entre otros, se comporten de una manera específica cuando se usan con tus propios tipos.
- En C#, los operadores son símbolos que realizan operaciones sobre variables o valores. Al sobrecargar un operador, le dices al compilador cómo debe comportarse ese operador cuando se aplica a instancias de un tipo definido por el usuario.
- Por ejemplo, puedes sobrecargar el operador + para una clase Punto, de manera que sumar dos objetos de tipo Punto combine sus coordenadas en un nuevo punto.

#### ¿Cómo se crea un operador sobrecargado?
-  Debe declararse como un método estático.
-  Debe usar la palabra clave operator seguida del operador a sobrecargar.
-  Debe devolver un valor y tomar al menos un parámetro del mismo tipo que la clase o estructura donde se define.

#### Operadores que se pueden sobrecargar
- Algunos de los operadores que puedes sobrecargar en C# incluyen:
    -	Aritméticos: +, -, *, /, %
    -	Comparación: ==, !=, <, >, <=, >=
    -	Unarios: +, -, !, ~, ++, --
    -	Otros: [] (indexación), true, false, &, |, ^, <<, >>

#### Restricciones
-	No se pueden sobrecargar algunos operadores, como &&, ||, ? : (ternario), =.
-	El operador == y != deben ser sobrecargados juntos, es decir, si sobrecargas uno, debes sobrecargar el otro.
-	Al sobrecargar operadores, también es recomendable sobrecargar los métodos Equals y GetHashCode para garantizar una correcta comparación de objetos en escenarios más amplios.


#### Ejemplo de sobrecarga de operadores
- Supongamos que tienes una clase Punto que representa un punto en un plano cartesiano:
```csharp
public class Punto
{
    public int X { get; set; }
    public int Y { get; set; }

    public Punto(int x, int y)
    {
        X = x;
        Y = y;
    }

    // Sobrecarga del operador +
    public static Punto operator +(Punto p1, Punto p2)
    {
        return new Punto(p1.X + p2.X, p1.Y + p2.Y);
    }

    // Sobrecarga del operador ==
    public static bool operator ==(Punto p1, Punto p2)
    {
        return p1.X == p2.X && p1.Y == p2.Y;
    }

    // Sobrecarga del operador !=
    public static bool operator !=(Punto p1, Punto p2)
    {
        return !(p1 == p2);  // Reutilizamos la sobrecarga de ==
    }

    // Es necesario sobreescribir Equals y GetHashCode cuando se sobrecargan == y !=
    public override bool Equals(object obj)
    {
        if (obj is Punto)
        {
            var punto = (Punto)obj;
            return this == punto;
        }
        return false;
    }

    public override int GetHashCode()
    {
        return (X, Y).GetHashCode();
    }
}

```
:::tip Explicación del código
- Operador +: Se sobrecarga el operador + para que cuando sumes dos instancias de Punto, las coordenadas X y Y de ambos puntos se sumen y devuelvan un nuevo objeto Punto con las coordenadas resultantes.
- Operadores == y !=: Se sobrecargan los operadores de igualdad para comparar si dos puntos son iguales o diferentes, comparando sus coordenadas. Si las coordenadas X y Y de ambos puntos son iguales, se considera que los puntos son iguales.
- Overrides de Equals y GetHashCode: Al sobrecargar == y !=, es una buena práctica también sobrescribir los métodos Equals y GetHashCode para que la comparación funcione correctamente en otras partes de la API de .NET, como colección.


:::