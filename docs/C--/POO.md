---
sidebar_position: 3
---
# Poo
## Progamación Orientada a Objetos
- Primero surgió la “Progamación Estructurada” que consistía en crear programas en base a variables y funciones. 
- La evolución de este paradigma es la “Progamación Orientada a Objetos” (POO).
- Ventajas:
   -	Permite reutilizar código
   -	Agiliza el desarrollo de software
   -	El código es más parecido al mundo real.
   -	Facilita el trabajo en equipo

- La "Progamación Orientada a Objetos" se basa en clases y objetos.

#### Clase
- Una clase permite guardar variables y funciones.
- A las variables se le llama “propiedades”.
- A las funciones se le llama “métodos”.
- Con la clase podemos crear “instancias” de la clase.
- Estas instancias son conocidas como “objetos”.


:::tip
- Una “Clase” es un tipo de dato.
- Se puede crear Arreglos de una “Clase”.
:::


:::tip
- Todo lo que trabajamos hasta ahora son clases.
- String es una clase, Int es una clase, Bool es una clase, Los elementos del formulario son clases, etc.
:::

#### Herencia
- Con “Poo” podemos usar las “herencias”, que consiste que una “clase hija” pueda usar las propiedades y métodos de una “clase padre”.
- Cuando solo se crean “Instancias de las clases hijas”, la “clase padre” se denomina abstracta.


#### Polimorfismo
- Consiste en que cada “clase hija” responda de diferente manera a un mismo método.
- Por ejemplo, si en la clase padre creamos un método para mostrar información, y tiene dos clases hijas que manejan diferentes propiedades. Al ejecutar (llamar /invocar) el método, tendría un comportamiento diferente según la clase que lo llamo.

#### Principio de encapsulamiento
- Es el  “modificador” de una función/método y propiedad.
- Puede ser:
   -	Publico (public): Se puede acceder desde otros lugares aparte de la clase misma.
   -	Protegido (Averiguar)
   -	Privado (private) : Solo se utilizan dentro de la misma clase.
- El principio de encapsulamiento consiste:
  - Crear variables de tipo privado.
  - Crear métodos “públicos” para gestionar el valor que contiene la variable privada.
  - Para acceder al valor de la variable privada, los métodos se llaman “getter”
  - Para modificar el valor de la propiedad privada, los métodos se llaman “setter”.


#### 4 Pilares
- Los 4 pilares de la progamación orientada a objetos son:
  - Herencia
  - Abstracción
  - Polimorfismo
  - Encapsulamiento.

:::tip
- Para que entienda los conceptos les recomiendo estas dos guías de javascript:
  - [Objetos](https://fedeleva.github.io/documentacion/docs/Javascript/objeto) 
  - [Poo](https://fedeleva.github.io/documentacion/docs/Javascript/poo)
- Ambos lenguajes de progamación utilizan los mismos conceptos, pero Javascript no es orientado a objeto basado en clases.
:::


:::tip info
- [POO en C#](https://oregoom.com/c-sharp/poo/)
- [Fundamentos de la POO con C# [1/10]: La Programación y el Diseño Orientado a Objetos](https://bravedeveloper.com/2022/06/27/fundamentos-de-la-poo-con-c-la-programacion-poo-y-el-diseno-orientado-a-objetos-ddo/)
:::

## Ejemplo - Gestion de Cliente
- Creamos un nuevo proyecto

#### Creamos un nuevo formulario

1. Click derecho en el nombre del proyecto (En el explorador de soluciones) -- Agregar (Add) –  Form (Windows Forms) 
2. En la pantalla que nos aparece:
   - Tiene que estar marcado Form (Windows Form) y le damos a add (agregar)
- Le podés cambiar el nombre al formulario, solo cambiando el nombre del archivo en Explorador de soluciones
  
:::tip
- Por lo general en el explorador de soluciones figuran como NombreDelFormulario.cs
:::

- Como tenemos dos formularios, Quedaría asi: 
   - Menu.cs
   - GestionUsuarios.cs


####  Menu.cs
#### Diseño
```csharp
private void InitializeComponent()
        {
            button1 = new Button();
            SuspendLayout();
            // 
            // button1
            // 
            button1.Location = new Point(143, 128);
            button1.Name = "button1";
            button1.Size = new Size(139, 29);
            button1.TabIndex = 0;
            button1.Text = "Gestionar Clientes";
            button1.UseVisualStyleBackColor = true;
            // 
            // Menu
            // 
            AutoScaleDimensions = new SizeF(8F, 20F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(428, 281);
            Controls.Add(button1);
            Name = "Menu";
            Text = "Form1";
            ResumeLayout(false);
        }

        #endregion

        private Button button1;

```
#### Lógica de click

```csharp
  private void button1_Click(object sender, EventArgs e)
        {
            GestionUsuarios ventanaGestionCliente = new GestionUsuarios();
            ventanaGestionCliente.ShowDialog();
        }

```

:::tip Observación
- El tipo de dato es el nombre de una clase.
- El nombre del “formulario” es una clase y estamos creando una instancia de esta.
- Con el new nombreClase() estamos creando una instancia( un “objeto”) de nombreClase.
- El objeto solo se puede guardar en una variable cuyo tipo de dato es la clase con la que se creó (Aunque también puede asignarse en una variable cuyo tipo de dato es la clase “padre”).
- Ese “objeto” tiene las propiedades y métodos que guarda la clase.
- Con ese objeto llamamos (ejecutamos) al metodo ShowDialog().
- A través del punto (“.”), invocamos las propiedades y métodos. Si termina con paréntesis (“()”) es un método.
- Con el metodo ShowDialog() abrimos el formulario que esta asociado a la clase (GestionUsuarios).
:::


#### GestionUsuarios.cs
#### Diseño
```csharp
  private void InitializeComponent()
        {
            listClientes = new ListBox();
            label1 = new Label();
            txtNombre = new TextBox();
            btnGuardar = new Button();
            btnEliminar = new Button();
            SuspendLayout();
            // 
            // listClientes
            // 
            listClientes.FormattingEnabled = true;
            listClientes.ItemHeight = 20;
            listClientes.Location = new Point(29, 28);
            listClientes.Name = "listClientes";
            listClientes.Size = new Size(325, 324);
            listClientes.TabIndex = 0;
            // 
            // label1
            // 
            label1.AutoSize = true;
            label1.Location = new Point(371, 28);
            label1.Name = "label1";
            label1.Size = new Size(64, 20);
            label1.TabIndex = 1;
            label1.Text = "Nombre";
            // 
            // txtNombre
            // 
            txtNombre.Location = new Point(450, 28);
            txtNombre.Name = "txtNombre";
            txtNombre.Size = new Size(125, 27);
            txtNombre.TabIndex = 2;
            // 
            // btnGuardar
            // 
            btnGuardar.Location = new Point(403, 72);
            btnGuardar.Name = "btnGuardar";
            btnGuardar.Size = new Size(94, 29);
            btnGuardar.TabIndex = 3;
            btnGuardar.Text = "Guardar";
            btnGuardar.UseVisualStyleBackColor = true;
            btnGuardar.Click += btnGuardar_Click;
            // 
            // btnEliminar
            // 
            btnEliminar.Location = new Point(260, 386);
            btnEliminar.Name = "btnEliminar";
            btnEliminar.Size = new Size(94, 29);
            btnEliminar.TabIndex = 4;
            btnEliminar.Text = "Eliminar";
            btnEliminar.UseVisualStyleBackColor = true;
            btnEliminar.Click += button1_Click;
            // 
            // GestionUsuarios
            // 
            AutoScaleDimensions = new SizeF(8F, 20F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(597, 450);
            Controls.Add(btnEliminar);
            Controls.Add(btnGuardar);
            Controls.Add(txtNombre);
            Controls.Add(label1);
            Controls.Add(listClientes);
            Name = "GestionUsuarios";
            Text = "Form2";
            Load += GestionUsuarios_Load;
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private ListBox listClientes;
        private Label label1;
        private TextBox txtNombre;
        private Button btnGuardar;
        private Button btnEliminar;

```

#### Lógica al hacer click en Guardar

```csharp
   private void btnGuardar_Click(object sender, EventArgs e)
        {
            string nombre = txtNombre.Text;
            listClientes.Items.Add(nombre);
        }

```

#### Lógica al hacer click en Eliminar

```csharp
     private void button1_Click(object sender, EventArgs e)
        {
            listClientes.Items.RemoveAt(listClientes.SelectedIndex);
        }

```
:::tip Observación
- Con elementoListBox.SelectedIndex obtenemos el índice (la posición, como si fuera un array) del valor que seleccionamos a traves del ListBox.
- Con elementoListBox.Items.RemoveAt(índice) , borramos de la lista del ListBox el valor que contiene el índice.


:::


#### Y si quisieramos cargar mas datos.
#### GestionUsuarios.cs
#### Diseño
```csharp
private void InitializeComponent()
        {
            listClientes = new ListBox();
            label1 = new Label();
            txtNombre = new TextBox();
            btnGuardar = new Button();
            btnEliminar = new Button();
            label2 = new Label();
            txtApellido = new TextBox();
            lblTelefono = new Label();
            txtTelefono = new TextBox();
            label4 = new Label();
            txtTarjeta = new TextBox();
            SuspendLayout();
            // 
            // listClientes
            // 
            listClientes.FormattingEnabled = true;
            listClientes.ItemHeight = 20;
            listClientes.Location = new Point(29, 28);
            listClientes.Name = "listClientes";
            listClientes.Size = new Size(325, 324);
            listClientes.TabIndex = 0;
            // 
            // label1
            // 
            label1.AutoSize = true;
            label1.Location = new Point(371, 28);
            label1.Name = "label1";
            label1.Size = new Size(64, 20);
            label1.TabIndex = 1;
            label1.Text = "Nombre";
            // 
            // txtNombre
            // 
            txtNombre.Location = new Point(450, 28);
            txtNombre.Name = "txtNombre";
            txtNombre.Size = new Size(125, 27);
            txtNombre.TabIndex = 2;
            // 
            // btnGuardar
            // 
            btnGuardar.Location = new Point(418, 264);
            btnGuardar.Name = "btnGuardar";
            btnGuardar.Size = new Size(94, 29);
            btnGuardar.TabIndex = 3;
            btnGuardar.Text = "Guardar";
            btnGuardar.UseVisualStyleBackColor = true;
            btnGuardar.Click += btnGuardar_Click;
            // 
            // btnEliminar
            // 
            btnEliminar.Location = new Point(260, 387);
            btnEliminar.Name = "btnEliminar";
            btnEliminar.Size = new Size(94, 29);
            btnEliminar.TabIndex = 4;
            btnEliminar.Text = "Eliminar";
            btnEliminar.UseVisualStyleBackColor = true;
            btnEliminar.Click += button1_Click;
            // 
            // label2
            // 
            label2.AutoSize = true;
            label2.Location = new Point(371, 82);
            label2.Name = "label2";
            label2.Size = new Size(66, 20);
            label2.TabIndex = 5;
            label2.Text = "Apellido";
            // 
            // txtApellido
            // 
            txtApellido.Location = new Point(450, 79);
            txtApellido.Name = "txtApellido";
            txtApellido.Size = new Size(125, 27);
            txtApellido.TabIndex = 6;
            // 
            // lblTelefono
            // 
            lblTelefono.AutoSize = true;
            lblTelefono.Location = new Point(371, 144);
            lblTelefono.Name = "lblTelefono";
            lblTelefono.Size = new Size(67, 20);
            lblTelefono.TabIndex = 7;
            lblTelefono.Text = "Telefono";
            // 
            // txtTelefono
            // 
            txtTelefono.Location = new Point(450, 137);
            txtTelefono.Name = "txtTelefono";
            txtTelefono.Size = new Size(125, 27);
            txtTelefono.TabIndex = 8;
            // 
            // label4
            // 
            label4.AutoSize = true;
            label4.Location = new Point(371, 202);
            label4.Name = "label4";
            label4.Size = new Size(53, 20);
            label4.TabIndex = 9;
            label4.Text = "Tarjeta";
            // 
            // txtTarjeta
            // 
            txtTarjeta.Location = new Point(450, 195);
            txtTarjeta.Name = "txtTarjeta";
            txtTarjeta.Size = new Size(125, 27);
            txtTarjeta.TabIndex = 10;
            // 
            // GestionUsuarios
            // 
            AutoScaleDimensions = new SizeF(8F, 20F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(597, 450);
            Controls.Add(txtTarjeta);
            Controls.Add(label4);
            Controls.Add(txtTelefono);
            Controls.Add(lblTelefono);
            Controls.Add(txtApellido);
            Controls.Add(label2);
            Controls.Add(btnEliminar);
            Controls.Add(btnGuardar);
            Controls.Add(txtNombre);
            Controls.Add(label1);
            Controls.Add(listClientes);
            Name = "GestionUsuarios";
            Text = "Form2";
            Load += GestionUsuarios_Load;
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private ListBox listClientes;
        private Label label1;
        private TextBox txtNombre;
        private Button btnGuardar;
        private Button btnEliminar;
        private Label label2;
        private TextBox txtApellido;
        private Label lblTelefono;
        private TextBox txtTelefono;
        private Label label4;
        private TextBox txtTarjeta;

```
#### Creamos una clase

1. Click derecho sobre el nombre del proyecto – Add (Agregar) – Class (Clase)
2. En la ventana que aparece:
   - En el nombre ponemos Cliente , quedando : Cliente.cs


:::tip Observación
- La extensión de una clase es .cs
- Y esa extensión la vimos en muchos otros archivos, por lo tanto, casi todo se trabaja con clases.
:::
:::tip
Para evitar los Arrays multidimensionales, se usan las clases.
:::

#### Clase Cliente

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GestionDeFacturas
{
    internal class Cliente
    {
        // Definimos las propiedades
        // Sintaxis: Modificador tipo-de-dato  nombrePropiedad;
        private string nombre;



        // Creamos los metodos getter y setter de la propiedad nombre
        // Estos metodos figuran como la  propiedad "Nombre" del objeto.
        public string Nombre
        {
            // Obtenemos el valor de la propiedad nombre (get)
            get { return nombre; }
                // Modificamos el valor de la propiedad nombre (set)
                // El argumento "value" se genera solo , no hace falta especificarlo.
             
            set { nombre = value; }
        }


        // Otra alternativa de crear los metedos getter y setter
        // De esta forma creamos el get y set de la propiedad apellido.
        // Estos metodos figuran como la  propiedad "Apellido" del objeto.
        // Cuando lo definimos con esta alternativa , no hace falta declarar la variable/propiedad.
        public string Apellido { get; set; }
        public string Telefono { get; set; }
        public string TarjetaCredito { get; set; }
        // Un getter solo
        //Figura como la propiedad "NombreCompleto" del objeto.
        public string NombreCompleto
        {
            get { return nombre + " " + Apellido; }
        }
    }


}

```

:::tip Observación
- Aplicamos los principios de encapsulamiento: 
  - Las propiedades son privadas.
  - Utilizamos métodos públicos para leer o escribir en las propiedades privadas.





:::

:::tip
- Para usar los getter y set
- Obtener valor = Instancia.NombrePropiedad 
- Modificar el valor = Instancia.NombrePropiedad = Valor 

:::


#### Logica del click Guardar

```csharp
   private void btnGuardar_Click(object sender, EventArgs e)
        {
             // Creamos un objeto a partir de la clase Cliente
            Cliente cliente = new Cliente();
            // Usamos los get que creamos
            cliente.Nombre = txtNombre.Text;
            cliente.Apellido = txtApellido.Text;
            cliente.TarjetaCredito = txtTarjeta.Text;
            cliente.Telefono = txtTelefono.Text;

            listClientes.Items.Add(cliente);
        }

```


#### Si añadís un usuario te debe aparecer: NombreDelProyecto.Cliente

##### ¿Por qué pasa esto?
  - Porque toda clase tiene el método ToString() que convierte un “valor” a Texto (String).
  - Cuando a una “instancia” de la clase, la tratamos de mostrar en un listado o en una alerta, se ejecuta ToString() y por defecto te muestra el nombre del proyecto y de la clase.


#### Para solucionar esto modificamos el ToString () de la clase.
#### Clase Cliente
```csharp
   public string NombreCompleto
        {
            get { return nombre + " " + Apellido; }
        }
         
        // Con la palabra "override" especificamos que  remplazamos(modificamos)  el metodo que ya estaba definido(creado) (en este caso remplazamos
        // ToString() que ya venia incluido por defecto , con el nuevo (el que definimos abajo))
                public override string ToString()
        {
            return NombreCompleto;
        }

```
## Conceptos de POO
- La programación orientada a objetos (POO) es un paradigma de programación que se basa en la definición de clases y objetos para representar entidades del mundo real.
- En este enfoque, los datos (propiedades) y las funciones (métodos) que operan sobre esos datos se agrupan en unidades llamadas clases.
- Los objetos son instancias de una clase y contienen datos y métodos que actúan en esos datos.
- En la programación orientada a objetos, los objetos son la unidad básica de estructuración y se utilizan para representar conceptos y entidades del mundo real, como clientes, cuentas bancarias, automóviles, animales, etc.
- Los objetos pueden interactuar entre sí mediante el intercambio de mensajes que activan los métodos.
- Las clases y los objetos son elementos fundamentales de la POO, y se utilizan para modelar y representar objetos del mundo real y sus interacciones en el software
- Haciendo una analogía con el trabajo de un ingeniero, la CLASE se correspondería con el plano de un motor y e OBJETO serían los diferentes motores que se construyen a partir de ese plano. Crear un OBJETO a partir de un una clase es lo que se llama INSTANCIAR.

### Clase
- En C#, una clase es una plantilla o un modelo a partir del cual se crean objetos. Define los datos(propiedades) y el comportamiento (métodos) de los objetos.
- Define un conjunto de propiedades y métodos que tendrán todos los objetos que se creen de esta clase.
- Una clase define la estructura, los campos, las propiedades, los métodos y los eventos que pertenecen a un objeto en particular. En resumen, una clase proporciona una descripción de cómo se comportará un objeto.
- Un ejemplo de una clase en la vida real podría ser un modelo de coche. El modelo de coche es la plantilla a partir de la cual se crean los objetos  coche.
- El modelo de coche define los datos (propiedades) y el comportamiento (métodos) de los objetos de coche, como el tamaño, el color, la marca, la potencia, la velocidad máxima, la capacidad de carga, el consumo de combustible, etc. Todos los objetos de coche creados a partir del modelo de coche tendrán estas características.
- Es una plantilla a partir de la cual se crean los objetos.
- En términos prácticos es una porción de código que nos permite crear objetos personalizados.
- Una clase está conformada por sus miembros, los cuales son:
  -	Campos
  -	Propiedades
  -	Métodos

### Objeto
- Un objeto es una instancia de una clase que representa un elemento del mundo real o un concepto abstracto. En términos más simples, un objeto es una entidad que tiene un estado y un comportamiento asociado con él.
- Por ejemplo, considera un objeto de la vida real,  un coche. Un coche es una entidad que tiene un estado, como su modelo, año de fabricación, kilometraje, nivel de gasolina, etc.
- Además, un coche también tiene un comportamiento asociado, como acelerar, frenar, cambiar de marcha, etc.
- En términos prácticos viene a ser una variable creada a partir de una clase, la cual permite utilizar todo lo que hemos definido en la clase, como por ejemplo sus atributos (propiedades) o métodos.
- Ejemplos:
   -	El alumno Pedro Solís creado a partir de la clase Alumnos, otro objeto de la misma clase sería la alumna María Sánchez.




:::tip
En C# se crean objetos con la palabra reservada new
:::

### Crear una clase
- Para crear una clase en C#, se utiliza la palabra clave **class**, seguida del nombre de la clase y un bloque de código entre llaves. Dentro de este bloque de código, se pueden definir las propiedades y métodos de la clase.
- Sintaxis:
```csharp

[atributos] [modificadores] [parcial] class NombreDeLaClase [ : clase base , interfaz1, interfaz2, ...]  {
	Código de la clase
}

```
#### Modificadores
- Para determinar la visibilidad el lenguaje cuenta con las siguientes palabras clave como “modificadores”:
  -	public: la clase puede ser utilizada en cualquier proyecto.
  -	internal: la clase está limitada al proyecto en el cual está definida.
  -	private: la clase sólo puede usarse en el módulo en la que está definida.
  -	protected: la clase sólo puede ser utilizada  en el módulo en la que está definida o en una subclase. Es decir sólo se puede utilizar protected para una clase declarada en otra clase.
  -	protected internal: lo mismo que internal + protected.
  -	abstract: no permite crear instancias de esta clase, sólo sirve para ser heredada como clase base. 
  -	sealed: cuando una clase es la última de una jerarquía, por lo que no podrá ser utilizada como base de otra clase.


#### Ejemplo
```csharp

public class Persona {
  // Propiedades
  public string Nombre;
  public int Edad;

  // Método
  public void Saludar() {
    Console.WriteLine("Hola, mi nombre es " + Nombre + " y tengo " + Edad + " años.");
  }
}

```
:::tip Observación
- En este ejemplo, hemos creado una clase llamada Persona que tiene dos propiedades (Nombre y Edad) y un método (Saludar). La propiedad Nombre es una cadena de texto, y la propiedad Edad es un número entero.
- El método Saludar es un método que escribe en la consola una cadena de texto que incluye el nombre y la edad de la persona.
- Con esta clase definida, podemos crear objetos de la clase Persona en nuestro código y utilizar sus propiedades y métodos.


:::


:::tip
- Cuando una variable se declara directamente en una clase, a menudo se  puede  denominar: campo , atributo o propiedad.
- No es obligatorio, pero es una buena práctica comenzar con una primera letra mayúscula al nombrar clases. 
- Es común que el nombre del archivo C# y la clase coincidan, ya que hace que nuestro código esté organizado. Sin embargo, no es obligatorio (como en Java).


:::

#### Uso de varias clases en C#
- En C#, es común utilizar varias clases en un programa para organizar el código y separar las funcionalidades. Cada clase puede tener sus propios métodos y propiedades, y se pueden crear instancias de estas clases para trabajar con sus objetos.
- Para utilizar varias clases en un programa de C#, se pueden seguir los siguientes pasos:
  1.	Crear cada una de las clases con sus métodos y atributos correspondientes.
  2.	Crear una clase principal que utilizará las otras clases y que será el punto de entrada del programa.
  3.	Crear instancias de las otras clases dentro de la clase principal.
  4.	Utilizar los métodos y atributos de las instancias de las otras clases para realizar las tareas deseadas.

###### Ejemplo
```csharp
using System;

public class Persona {
  public string Nombre {
    get;
    set;
  }
  public int Edad {
    get;
    set;
  }

  public void ImprimirDetalles() {
    Console.WriteLine("Nombre: " + Nombre);
    Console.WriteLine("Edad: " + Edad);
  }
}

public class Program {
  static void Main(string[] args) {
    // Crear instancias de la clase Persona
    Persona persona1 = new Persona();
    persona1.Nombre = "Juan";
    persona1.Edad = 25;

    Persona persona2 = new Persona();
    persona2.Nombre = "Maria";
    persona2.Edad = 30;

    // Imprimir los detalles de las personas
    persona1.ImprimirDetalles();
    Console.WriteLine();

    persona2.ImprimirDetalles();
    Console.WriteLine();
  }
}

```

:::tip Observación
En este ejemplo, se crean dos instancias de la clase «Persona» dentro de la clase «Program«, se establecen sus atributos con valores y se llaman a sus métodos para imprimir sus detalles. Este es un ejemplo sencillo de cómo se pueden utilizar varias clases en un programa de C#.

:::

### Crear un objeto en C#

- Para crear un objeto en C#, primero necesitas tener una clase definida que defina las propiedades y métodos que tendrá el objeto. Luego, puedes crear una instancia de esa clase, lo que crea el objeto.
- Para crear un objeto de Persona, especifique el nombre de la clase como tipo de dato, seguido del nombre del objeto y use la palabra clave **new**.
- Sintaxis para crear un objeto: "new nombreClase()" , donde:
  - El nombreClase() es un constructor.
  - La palabra **new** sirve para crear una instancia de la clase.
- Aquí hay un ejemplo básico de cómo crear una clase Persona y luego crear un objeto persona1 de esa clase:

```csharp
using System;

public class Persona {
  public string Nombre;
  public int Edad;

  public void Presentarse() {
    Console.WriteLine("Hola, mi nombre es " + Nombre + " y tengo " + Edad + " años.");
  }
}

public class Program {
  public static void Main() {
    // Crear un objeto Persona
    Persona persona1 = new Persona();

    // Asignar valores a las propiedades
    persona1.Nombre = "Juan";
    persona1.Edad = 25;

    // Llamar al método Presentarse
    persona1.Presentarse();
  }
}

```

:::tip Observación
- En este ejemplo, primero se define la clase Persona con dos propiedades Nombre y Edad y un método Presentarse. Luego, en la función Main, se crea una instancia de la clase Persona llamada persona1. Después se asignan valores a las propiedades Nombre y Edad de persona1.
- Por último, se llama al método Presentarse del objeto persona1, que muestra un mensaje que incluye el nombre y la edad de la persona.
:::

:::tip
Tenga en cuenta que usamos la sintaxis de punto (".") para acceder a variables/campos dentro de una clase (persona1.Nombre). 
:::


#### Varios objetos en C#

- En C#, es posible crear varios objetos de una misma clase, lo que permite trabajar con diferentes instancias de la misma clase de manera independiente.
- Cada objeto tiene sus propias propiedades y métodos, y puede ser manipulado de forma separada de los demás objetos.
- Para crear varios objetos de una clase en C#, se utiliza la sintaxis new para asignar una instancia de la clase a cada objeto.
- Por ejemplo, si tenemos una clase llamada Persona que tiene una propiedad nombre, podemos crear varios objetos de la clase Persona con diferentes nombres de la siguiente manera:

```csharp
Persona persona1 = new Persona();
persona1.nombre = "Juan";

Persona persona2 = new Persona();
persona2.nombre = "María";

```

### Miembros de la clase

- Los miembros de una clase en C# son las propiedades, campos y métodos que pertenecen a esa clase.
- Campos: Son los datos(variables) que contiene una clase.
- Propiedades: Son métodos especiales dedicados solamente a lectura (se llaman get) o escritura (se llaman set) de los campos de la clase. En palabras sencillas podría decirse que una propiedad es la puerta de entrada a los campos de una clase.
- Metodos: Son funciones o acciones que una clase puede realizar.


:::tip
Al conjunto de campos y propiedades se les conoce como Atributos.

:::

:::tip
Existen convenciones entre desarrolladores para nombrar los miembros de una clase, por ejemplo: Las propiedades deben empezar con mayúsculas, los métodos también.

:::


:::tip

Todo miembro de una clase debe implementar el PascalCase, en otras palabras si el miembro tiene un nombre con varias palabras, todas deben estar unidas y cada palabra debe empezar con mayúscula.
:::


- Estos miembros se utilizan para definir la estructura de una clase y su comportamiento.
- Los campos, se utilizan para almacenar datos.
- Cada objeto que se crea a partir de una clase tiene su propia copia de las variables de la clase.
- Los métodos de clase son funciones que se utilizan para realizar operaciones específicas con los datos que se almacenan en la instancia (objeto). Cada objeto que se crea a partir de una clase tiene acceso a todos los métodos de la clase.
- Además de los campos y los métodos de instancia, una clase también puede tener campos y métodos estáticos.
- Los campos estáticos son variables que se comparten entre todos los objetos que se crean a partir de la clase, mientras que los métodos estáticos son funciones que se pueden llamar sin tener que crear primero un objeto.

### Campos
- Las variables dentro de una clase se llaman campos y que puede acceder a ellos creando un objeto de la clase y usando la sintaxis de punto ( “.”).
- El siguiente ejemplo creará un objeto de la clase Car, con el nombre myObj. Luego imprimimos el valor de los campos color y maxSpeed: 


```csharp
class Car 
{
  string color = "red";
  int maxSpeed = 200;

  static void Main(string[] args)
  {
    Car myObj = new Car();
    Console.WriteLine(myObj.color);
    Console.WriteLine(myObj.maxSpeed);
  }
}

```
- También puede dejar los campos en blanco y modificarlos al crear el objeto:


```csharp
class Car 
{
  string color;
  int maxSpeed;

  static void Main(string[] args)
  {
    Car myObj = new Car();
    myObj.color = "red";
    myObj.maxSpeed = 200;
    Console.WriteLine(myObj.color);
    Console.WriteLine(myObj.maxSpeed);
  }

```
:::tip
Esto es especialmente útil cuando se crean múltiples objetos de una clase

:::

### Métodos
- Los métodos de objetos en C# son funciones que se definen dentro de una clase y que permiten que los objetos de esa clase realicen operaciones específicas.
- Los métodos se usan para realizar ciertas acciones.
- Los métodos normalmente pertenecen a una clase y definen cómo se comporta un objeto de una clase.
- Estos métodos pueden ser llamados desde un objeto de la clase y pueden tener diferentes tipos de argumentos y valores de retorno.
- Sintaxis:


```csharp
public < tipo_retorno > < nombre_del_método > ( < tipo_parametro1 > < nombre_parametro1 > , < tipo_parametro2 > < nombre_parametro2 > , ...) {
  // Código del método / Cuerpo del método
}

```

- Donde:
  -	public: un modificador de acceso que determina la visibilidad del método. public significa que el método es accesible desde cualquier parte del código.
  -	&lt;tipo_retorno>: el tipo de dato que devuelve el método. Puede ser cualquier tipo de dato válido en C#, incluyendo tipos primitivos, objetos y tipos definidos por el usuario.
  -	&lt;nombre_del_método>: el nombre del método, que debe ser único dentro de la clase.
  -	&lt;tipo_parametro1> &lt;nombre_parametro1>, &lt;tipo_parametro2> &lt;nombre_parametro2>, ...: los parámetros (argumentos ) que se pasan al método. Pueden ser cualquier tipo de dato válido en C#.


  #### Ejemplo
  ```csharp
  public int Sumar(int num1, int num2) {
  int resultado = num1 + num2;
  return resultado;
}

```


-  Al igual que con los campos, puede acceder a los métodos con la sintaxis de puntos (“.”). Sin embargo, tenga en cuenta que el método debe ser public. Y recuerda que usamos el nombre del método seguido de dos paréntesis (“()”) y un punto y coma (“;”) para llamar (ejecutar) el método.
-  Entre los paréntesis , van los parámetros del método.
-  Este método se puede llamar desde un objeto de la clase que lo contiene de la siguiente manera:

```csharp
MiClase objeto = new MiClase();
int resultado = objeto.Sumar(3, 5);

```

### Modificadores de acceso
- Los modificadores de acceso son palabras clave que se utilizan en la programación orientada a objetos para indicar la accesibilidad de los  miembros de una clase.
-  En C#, hay varios  modificadores de acceso que se pueden utilizar:

#### public
- El modificador de acceso público permite que una clase, un método o una propiedad sean accesibles desde cualquier parte del código. 
- Por ejemplo:
```csharp
public class Persona {
  public string Nombre;
  public int Edad;

  public void Saludar() {
    Console.WriteLine("¡Hola!");
  }
}

```
#### private
- El modificador de acceso privado restringe el acceso a la clase en la que se define. Los campos y métodos privados sólo son accesibles desde dentro de la clase. 
- Por ejemplo:


```csharp
public class CuentaBancaria {
  private double Saldo;

  public void Depositar(double cantidad) {
    Saldo += cantidad;
  }

  public void Retirar(double cantidad) {
    if (Saldo >= cantidad) {
      Saldo -= cantidad;
    } else {
      Console.WriteLine("No hay suficiente saldo para retirar esa cantidad.");
    }
  }
}

```
#### protected
- El modificador de acceso protegido permite el acceso a miembros de una clase desde la misma clase o clases que heredan de ella. 
- Por ejemplo:

```csharp
public class Vehiculo {
  protected string Modelo;
  protected int Anio;

  public Vehiculo(string modelo, int anio) {
    Modelo = modelo;
    Anio = anio;
  }
}

public class Coche: Vehiculo {
  public Coche(string modelo, int anio): base(modelo, anio) {
    // Constructor de la clase Coche
  }

  public void MostrarDatos() {
    Console.WriteLine("Modelo: " + Modelo);
    Console.WriteLine("Año: " + Anio);
  }
}

```
#### internal
- El modificador de acceso interno permite que una clase o miembro sea accesible desde dentro del mismo ensamblado. 
- Por ejemplo:


```csharp
internal class ClaseInterna {
  // Miembros de la clase
}

public class Programa {
  static void Main(string[] args) {
    ClaseInterna ci = new ClaseInterna(); // Se puede crear una instancia de la clase interna aquí
  }
}

```
#### protected internal
- El modificador de acceso protegido interno es una combinación de los dos modos anteriores y permite el acceso desde cualquier lugar dentro del mismo ensamblado o desde clases que heredan de la clase. 
- Por ejemplo:

```csharp
protected internal class ClaseProtegidaInterna {
  // Miembros de la clase
}

public class Programa {
  static void Main(string[] args) {
    ClaseProtegidaInterna cpi = new ClaseProtegidaInterna(); // Se puede crear una instancia de la clase protegida interna aquí
  }
}

public class ClaseHija: ClaseProtegidaInterna {
  // La clase hija puede acceder a los miembros protegidos de la clase protegida interna
}

```
### Clase parcial
- Nos permite definir una clase en varias declaraciones.
- Podemos definir(crear) una clase en varias declaraciones, pudiendo así utilizar varios archivos para declarar una clase. 
- Se utiliza normalmente para permitir la personalización de clases generadas automáticamente. el código generado suele colocarse en un archivo llamado .designer.cs; y durante la compilación se agrupan todas las definiciones parciales para obtener el código fuente de la clase.

#### Ejemplo

```csharp
// Una declaración de la clase
public partial class Empleado {
    public void HacerTrabajo(){
      ... lo que sea ...
    }
}
// Otra declaración de la clase
public partial class Empleado {
    public void IrAComer() {
      ... lo que sea ...
    } 
}

```

### Lectura y Escritura
- Se pueden restringir los accesos a una propiedad, si sólo incluimos la opción “get” lo que estamos haciendo es dando permisos de lectura; en cambio si incluimos la opción “set” lo que hacemos es dar permisos de escritura.

```csharp
public class Persona {
  private String elApellido;
  private String elNombre;
  private DateTime laFechaNac;
  private String laClave;
  public String Apellido {
    get {return elApellido;}
    set {elApellido=value.ToUpper();}
  }
  public String Nombre{
    get {return elNombre;}
    set {elNombre=value.ToLower();}
  }
  public DateTime FechaNac{
    get {return laFechaNac;}
    set { 
      if (value.Year >= 1900) {
        laFechaNac = value;}
    }
  }
  public int Edad {
    get { return DateTime.Now.Year - laFechaNac.Year;}
  }  
  public String Clave {
    set { laClave = value;}
  }
}

```

### Sobrecarga y Sobrescritura

#### Sobrecarga
- La sobrecarga es la creación dentro de la clase, de un grupo de métodos que tienen el mismo nombre, pero con un número de parámetros distinto y/o bien distintos tipos de datos.

##### Ejemplos
```csharp
public void visualización () {
  MessageBox.Show("Sr. "+Apellido+" "+Nombre+" nacido el "+FechaNac); 
}

public void visualización (string idioma) {
  switch (idioma) {
    case "es":  MessageBox.Show("Sr. "+Apellido+" "+Nombre+" nacido el "+FechaNac); break;
    case "en":  MessageBox.Show("Mr. "+Apellido+" "+Nombre+" was born "+FechaNac); break;
  }
}

```

#### Sobrescritura
- Sabemos que las clases derivadas heredan las propiedades y métodos de su clase base. Se pueden usar los métodos sin ninguna modificación, pero sí el método no está adaptado a la nueva clase podemos sobrescribirlo. Para ello utilizamos la palabra reservada **override** en la clase hija. 
- También es obligatorio permitir la sobrescritura mediante el uso de  la palabra reservada **virtual** en la clase padre. Esto se utiliza para asegurar el polimorfismo entre las clases.

##### Ejemplo
```csharp
public override void visualización () {
  MessageBox.Show("Sr. "+Apellido+" "+Nombre+" nacido el "+FechaNac+" cobra "+Salario+".-€uros/mes."); 
}

public sealead override void visualización () {
  base.visualizacion();
  MessageBox.Show("y cobra "+Salario+".-€uros/mes."); 
}

```

### Constructor
- Es un método especial que nos garantiza una correcta instanciamiento de una clase.
- Un constructor es un método especial que se utiliza para inicializar objetos. La ventaja de un constructor es que se llama cuando se crea un objeto de una clase. Se puede utilizar para establecer valores iniciales para los campos.
- Este método se ejecuta de forma automática cuando creamos un objeto, o lo que es lo mismo, al instanciar una clase.
- Lo que se ejecuta después del “new” (nombreClase()) , es el constructor.
- En una misma clase podemos tener más de un constructor o podemos no especificarlo, en ese caso el entorno .NET creará uno por defecto.
- Aquel constructor que no tiene parámetros se le conoce como constructor por defecto.

#### Ejemplo
- Imaginemos que tenemos la clase Alumno:
```csharp
public class Alumno
{
    public int Id { get; set; }
    public string Nombre { get; set; }
    public DateTime FechaMatricula { get; set; }        
}

```
- Tal como está podemos hacer uso de ella, ya que, como hemos mencionado .NET creará un constructor por defecto si no lo hemos definido, pero vamos a definirlo explícitamente, entonces nuestra clase lucirá así ahora:

```csharp
public class Alumno
{
    /* CONSTRUCTOR */
    public Alumno()
    {
        Console.WriteLine("Un objeto de la clase Alumno se ha creado");
    }
 
    public int Id { get; set; }
    public string Nombre { get; set; }
    public DateTime FechaMatricula { get; set; }        
}

```
- Para poder probar, he añadido un Console.WriteLine, ahora vamos a instanciar nuestra clase Alumno desde el método Main de la clase Program:

```csharp
class Program
{
    static void Main()
    {
        var alumno = new Alumno();
    }    
}

```

:::tip
- Tenga en cuenta que el nombre del constructor debe coincidir con el nombre de la clase y no puede tener un tipo de retorno (como void o int).
- También tenga en cuenta que se llama al constructor cuando se crea el objeto.
- Todas las clases tienen constructores de forma predeterminada: si no crea un constructor de clase usted mismo, C# crea uno para usted. Sin embargo, no podrá establecer valores iniciales para los campos.


:::

#### Multiples constructores
- Es posible tener tantos constructores como necesitemos, siempre y cuando los parámetros sean distintos.
- Los constructores también pueden tomar parámetros, que se utilizan para inicializar campos.

##### Ejemplo

```csharp
public class Alumno
{
    /* CONSTRUCTORES */
    public Alumno()
    {
        Console.WriteLine("Un objeto de la clase Alumno se ha creado");
    }
    public Alumno(int id, string Nombre, DateTime fechaMatricula)
    {
        this.Id = id;
        this.Nombre = Nombre;
        this.FechaMatricula = fechaMatricula;
    }
 
    public int Id { get; set; }
    public string Nombre { get; set; }
    public DateTime FechaMatricula { get; set; }        
}

class Car
{
  public string model;

  // Create a class constructor with a parameter
  public Car(string modelName)
  {
    model = modelName;
  }

  static void Main(string[] args)
  {
    Car Ford = new Car("Mustang");
    Console.WriteLine(Ford.model);
  }
}

```

:::tip Observación

Gracias al concepto en POO llamado Sobrecarga u Overloading, al crear un objeto de la clase C# me presenta 2 opciones para hacerlo 
:::

#### Ventajas

- Dentro de las ventajas que ofrecen los constructores destacan:
  -	Inicializar variables, esto es especialmente útil cuando la variable es de tipo por referencia ya que inicializarla previene el error: NullReferenceException.
  -	Dar comportamiento personalizado o ejecutar lógica de negocio al crear objetos de cualquier clase.




  ### Interfaces

- Es un CONTRATO que obliga a una clase “hija” a implementar lo que la interfaz defina.
- Una clase que implementa la palabra clave “**interface**” solo puede contener métodos y propiedades abstractos (con cuerpos vacíos).

#### Ejemplo
```csharp
interface IAnimal 
{
  void animalSound(); 
  void run(); 
}

```

:::tip
- Se considera una buena práctica comenzar con la letra "I" al comienzo de una interfaz, ya que le facilita a usted y a los demás recordar que se trata de una interfaz y no de una clase.
- De forma predeterminada, los miembros de una interfaz son abstract y public.
- Las interfaces pueden contener propiedades y métodos, pero no campos.

:::

- Para acceder a los métodos de la interfaz, la interfaz debe ser "implementada" (algo así como heredada) por otra clase. 
- Para implementar una interfaz, use el símbolo “**:**” (al igual que con la herencia). 
- El cuerpo del método de la interfaz lo proporciona la clase que lo "implementa". 
- Tenga en cuenta que no tiene que usar la palabra clave override  al implementar una interfaz:


```csharp
// Interface
interface IAnimal 
{
  void animalSound(); 
}


class Pig : IAnimal 
{
  public void animalSound() 
  {
   
    Console.WriteLine("The pig says: wee wee");
  }
}

class Program 
{
  static void Main(string[] args) 
  {
    Pig myPig = new Pig(); 
    myPig.animalSound();
  }
}

```

#### Notas sobre las interfaces
-	Al igual que las clases abstractas , las interfaces no se pueden usar para crear objetos (en el ejemplo anterior, no es posible crear un objeto "IAnimal" en la clase Programa).
-	Los métodos de interfaz no tienen cuerpo: el cuerpo lo proporciona la clase que lo "implementa".
-	En la implementación de una interfaz, debe anular (completar el cuerpo) todos sus métodos.
-	Las interfaces pueden contener propiedades y métodos, pero no campos/variables.
-	Los miembros de la interfaz son por defecto abstract y public.
-	Una interfaz no puede contener un constructor (ya que no se puede usar para crear objetos).

#### ¿Por qué y cuándo usar interfaces?
-  Para lograr la seguridad, oculte ciertos detalles y solo muestre los detalles importantes de un objeto (interfaz).
-  C# no admite "herencia múltiple" (una clase solo puede heredar de una clase base). Sin embargo, se puede lograr con interfaces, porque la clase puede implementar múltiples interfaces. Nota: Para implementar múltiples interfaces, sepárelas con una coma.


#### Otro ejemplo


- Aquí tenemos la interfaz llamada ILogger


```csharp
internal interface ILogger
{
    void Log(string mensaje);
    void LogException(Exception ex);
}

```
- Y crearé dos clases que implementan la interfaz ILogger, la primera clase la llamaré LoggerArchivo:

```csharp
public class LoggerArchivo : ILogger
 {
     public void Log(string mensaje)
     {
         var rutaArchivo = @$"{Directory.GetCurrentDirectory()}\Log.txt";
         using (StreamWriter sw = new StreamWriter(rutaArchivo, append: true))
         {
             sw.WriteLine($"{DateTime.Now} : {mensaje}");
         }
     }
     public void LogException(Exception ex)
     {
         string error = $"ERROR: {ex.Message}";
         Log(error);
     }
 }

```
- De igual forma la otra clase que implemente dicha interfaz la llamaré LoggerConsola y tendría esta apariencia:


```csharp
public class LoggerConsola : ILogger
 {
     public void Log(string mensaje)
     {
         Console.WriteLine($"{DateTime.Now} : {mensaje}");
     }
     public void LogException(Exception ex)
     {
         SetColor(ConsoleColor.Red);
         string error = $"ERROR: {ex.Message}";
         Log(error);
         SetColor(ConsoleColor.White);
     }
 
     private void SetColor(ConsoleColor color)
     {
         Console.ForegroundColor = color;
     }
 }

```

:::tip Observación

Como podrás notar crack, las clases que implementaron la interfaz tuvieron que definir los métodos que ella define.
:::

#### Implementar varias interfaces
- Para implementar varias interfaces, sepárelas con una coma:

```csharp
interface IFirstInterface 
{
  void myMethod(); // interface method
}

interface ISecondInterface 
{
  void myOtherMethod(); // interface method
}

// Implement multiple interfaces
class DemoClass : IFirstInterface, ISecondInterface 
{
  public void myMethod() 
  {
    Console.WriteLine("Some text..");
  }
  public void myOtherMethod() 
  {
    Console.WriteLine("Some other text...");
  }
}

class Program 
{
  static void Main(string[] args)
  {
    DemoClass myObj = new DemoClass();
    myObj.myMethod();
    myObj.myOtherMethod();
  }
}

```

### Clases estaticas
- Las clases normales, por así decirlo, tienen miembros (campos, propiedades y métodos) los cuales  pueden ser utilizados cuando nosotros instanciamos un objeto de esa clase.
- Esto es posible gracias al encapsulamiento, mediante el cual un objeto, es decir, la instancia de una clase, tiene miembros relacionados a dicho objeto. Si creo otra instancia, ésta tendrá su propio objeto con miembros distintos a los de la primera instancia.
- En el caso de las clases estáticas, éstas tienen un comportamiento diferente, porque no pueden ser instanciadas, es decir los miembros (campos, propiedades y métodos) pueden ser utilizados sin necesidad de crear un objeto . Por lo tanto, no tiene miembros asociados a una instancia en particular.
- Toda clase estática debe tener miembros estáticos, esto quiere decir que una clase estática debe tener campos, propiedades y métodos declarados como estáticos, esto incluye a su constructor.
- Recordemos estas características de las clases estáticas:
  - No pueden implementar interfaces.
  - No pueden heredar ni ser heredadas.
- En síntesis, las clases estáticas se utilizan para organizar funcionalidades o métodos los cuales no están asociados a objetos particulares.
- Se utilizan para métodos generales, o utilitarios que queramos utilizar desde cualquier parte de nuestra aplicación.


#### Ejemplo
- Se utiliza la palabra clave **static**
```csharp
public static class HashHelper
{
    public static string MD5(string word)
    {
        MD5 md5 = MD5CryptoServiceProvider.Create();
        ASCIIEncoding encoding = new ASCIIEncoding();
        byte[] stream = null;
        StringBuilder sb = new StringBuilder();
        stream = md5.ComputeHash(encoding.GetBytes(word));
        for (int i = 0; i < stream.Length; i++) sb.AppendFormat("{0:x2}", stream[i]);
        return sb.ToString();
    }
}

```

### Clases abstractas
- Son aquellas que se utilizan como clases base para otras clases.
- Este tipo de clases no se pueden instanciar.
- Las clases abstractas pueden tener métodos con una definición por defecto, pero si queremos que su clase hija la modifique debemos hacer uso de la palabra reservada **virtual**.
- Las clases que implementan una clase abstracta, es decir las clases hijas, no están obligadas a implementar los métodos que ésta define.


- La palabra clave **abstract** se utiliza para clases y métodos:
  -	Clase abstracta: es una clase restringida que no se puede usar para crear objetos (para acceder a ella, se debe heredar de otra clase).
  -	Método abstracto: solo se puede usar en una clase abstracta y no tiene cuerpo. El cuerpo lo proporciona la clase derivada (heredada de).


#### Ejemplo
```csharp
class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Clases abstractas!");
        var cuadrado = new Cuadrado(10);
        Console.WriteLine($"El lado es {cuadrado.Lado}, el área es {cuadrado.CalcularArea()}, el perimetro es {cuadrado.CalcularPerimetro()} y el valor es {cuadrado.metodoEjemplo()}");
    }
}
public abstract class Poligono
{
    public abstract double CalcularArea();
    public abstract double CalcularPerimetro();
    public virtual bool metodoEjemplo()
    {
        return true;
    }
}
 
public class Cuadrado : Poligono
{
    //Propiedad
    public int Lado { get; }
    //Constructor
    public Cuadrado(int lado)
    {
        Lado = lado;
    }
    //Métodos
    public override double CalcularArea()
    {
        return Math.Pow(this.Lado, 2);
    }
    public override double CalcularPerimetro()
    {
        return this.Lado * 4;
    }
    public override bool metodoEjemplo()
    {
        return false; //sobreescribimos la funcionalidad de la clase base
    }
}

```

#### Otro ejemplo
```csharp
abstract class Animal 
{
  public abstract void animalSound();
  public void sleep() 
  {
    Console.WriteLine("Zzz");
  }
}

```
- Del ejemplo anterior, no es posible crear un objeto de la clase Animal.
- Para acceder a la clase abstracta, se debe heredar de otra clase. 

```csharp

// Abstract class
abstract class Animal
{
  // Abstract method (does not have a body)
  public abstract void animalSound();
  // Regular method
  public void sleep()
  {
    Console.WriteLine("Zzz");
  }
}

// Derived class (inherit from Animal)
class Pig : Animal
{
  public override void animalSound()
  {
    // The body of animalSound() is provided here
    Console.WriteLine("The pig says: wee wee");
  }
}

class Program
{
  static void Main(string[] args)
  {
    Pig myPig = new Pig(); // Create a Pig object
    myPig.animalSound();  // Call the abstract method
    myPig.sleep();  // Call the regular method
  }
}

```