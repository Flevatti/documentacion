---
sidebar_position: 5
---
# Consumir API
## Empezamos el proyecto 
```powershell
npx create-react-app consumir-api
cd consumir-api
```
1. Empezamos el proyecto
2. Borramos toda los archivos de la carpeta src excepto el index.js
3. Ponemos Bootstrap en el index.html
4. Creamos App.jsx

### API A UTILIZAR
- [link](https://rickandmortyapi.com/)
- [ruta](https://rickandmortyapi.com/api/)

## useEffect
- [Explicación.](./hookcss.md#useeffect)
- El Hook useEffect en React te permite manejar efectos secundarios en los componentes. 
- Los efectos secundarios (o side effects en inglés) se refieren a cualquier operación que afecta a algo que se encuentra fuera de la función o componente, o que depende de algo que no se puede garantizar que sea constante entre las ejecuciones. En el contexto de React, los efectos secundarios son aquellas acciones que ocurren cuando un componente se muestra en el DOM (confirmación) y que afectan o interactúan con algún sistema o elemento que no es accesible durante el renderizado.
- El propósito principal de useEffect es observar un elemento específico (como una variable o estado del componente) y ejecutar una acción automáticamente cuando este cambie.
-	Sirven para estar pendiente de cierto elemento del  componente y que cuando cambie , ejecute algo.
- Si conoces los métodos del ciclo de vida en clases de React, useEffect combina las funcionalidades de componentDidMount, componentDidUpdate y componentWillUnmount.
- Con la introducción de los Hooks, los métodos de ciclo de vida, que solo funcionaban en componentes de clase, han sido reemplazados, permitiendo que los componentes funcionales también gestionen estados y efectos secundarios de forma más sencilla.

:::tip 


- Si estás familiarizado con el ciclo de vida de las clases de React y sus métodos, el Hook useEffect equivale a componentDidMount, componentDidUpdate y componentWillUnmount combinados.
- Los métodos que corresponden al ciclo de vida solo se pueden usar en las [clases de React.](https://flevatti.github.io/documentacion/docs/React/otros2#reactcomponent) ya que en la actualidad fueron remplazados por los hooks.
:::




### Efectos sin saneamiento
- En algunos casos, queremos ejecutar código después de que React haya renderizado un componente en el DOM. Ejemplos comunes de efectos que no requieren saneamiento incluyen:
  -	Peticiones HTTP : Generalmente, las peticiones de red se hacen una vez y no necesitan limpieza después de que se completan, ya que no dependen del ciclo de vida del componente. La respuesta de la petición (como un fetch o axios) se maneja una vez que llega y no deja recursos abiertos que necesiten ser limpiados. Si la petición se realiza y la respuesta llega, no hay necesidad de eliminar o revertir la acción.
  -	Modificaciones directas al DOM: Cuando modificamos el DOM directamente, como agregar un elemento o cambiar un estilo, React ya maneja su propio sistema de actualización del DOM. Si bien React suele encargarse de las actualizaciones de manera eficiente, las mutaciones del DOM que hacemos explícitamente generalmente no requieren limpieza porque no dejamos elementos o estados "colgados" que puedan afectar el rendimiento o el comportamiento del componente. Si la mutación es puntual (como un cambio de clase o el estilo), no es necesario limpiarlo.
  -	Registros (de eventos o estadísticas):
      - Los registros, como los logs en la consola o el seguimiento de métricas, suelen ser efectos que no dependen del ciclo de vida del componente. Una vez que se ejecutan, no dejan recursos que necesiten ser liberados o saneados. Por ejemplo, si registras un evento de clic o una acción, simplemente registras esa información y no necesitas deshacer la acción una vez que se haya completado.

- En resumen, estos efectos no requieren saneamiento porque no están dejando recursos abiertos, suscripciones o conexiones que continúen afectando al componente después de ejecutarse. React maneja la mayoría de las actualizaciones y efectos de manera automática, lo que hace innecesario realizar limpieza en estos casos.
- Estos efectos pueden ejecutarse sin necesidad de limpiar o "sanear" recursos después de que el componente se desmonte o actualice. Esto se debe a que una vez ejecutados, no necesitan ser limpiados ni revertidos, ya que no dejan recursos o suscripciones abiertas que puedan afectar al rendimiento o provocar errores.






App.jsx
```js
import React, { useEffect, useState } from 'react'

const App = () => {
    const [contador , setContador] = useState(0);
  // useEffect(callback)
    useEffect(() => { console.log("renderizado")});
  return (
    <div>
        <h1>App Rick and Morty</h1>
        <h3>{contador}</h3>
        <button onClick={()=> {setContador(contador+1)}}>Aumentar</button>
    </div>
  )
}

export default App

```
:::tip Observacion
- useEffect  ejecuta el callback cuando:
  - Se renderiza el componente por primera vez.
  - Ocurre un cambio en el componente.
:::

### ¿Qué hace useEffect?
- Cuando usas el Hook useEffect, le estás indicando a React que el componente debe realizar una acción después de que se haya renderizado.
- React guarda la función que le pasas a useEffect (a la que llamaremos "efecto") y la ejecutará más tarde, justo después de que haya actualizado el DOM.
- ¿Se ejecuta useEffect después de cada renderizado? Sí, por defecto, useEffect se ejecuta después del primer renderizado y luego se ejecuta nuevamente después de cada actualización del componente.
- Esto quiere decir que, cada vez que el componente se renderiza, el "efecto" se ejecutará una vez que React haya completado la actualización del DOM. Si no se le indica ninguna condición específica, el efecto se ejecutará después de todos los renderizados del componente.
### Consejo: Omite efectos para optimizar el rendimiento
- En ciertos casos, ejecutar el efecto después de cada renderizado (y de cada actualización del componente) puede afectar el rendimiento del proyecto.
- Para evitar esto, puedes indicarle a React que solo ejecute el efecto si ciertos valores han cambiado entre renderizados. Es decir, solo quieres que el efecto se aplique cuando un valor específico cambie.
- Para lograrlo, puedes pasar un array como segundo argumento opcional a useEffect. Este array debe contener las variables o estados que quieres que React observe. El efecto solo se ejecutará si alguno de esos valores cambia entre renderizados.
- Si pasas un array vacío ([]) como segundo argumento en useEffect, el efecto solo se ejecutará una vez, justo después del primer renderizado del componente, y no se volverá a ejecutar en actualizaciones posteriores:
```js
	// useEffect(callback , [array])
	    useEffect(() => { console.log("renderizado")} , []);

```

### En el Array podemos poner los estados(valores) a los que estamos pendiente
- Cuando pasas un array como segundo argumento en useEffect, este array sirve para indicar a React qué estados o valores debe observar para decidir si el efecto debe ejecutarse nuevamente.
- En el array, puedes poner las variables o estados que quieres que React observe. Si alguno de esos valores cambia, el efecto se ejecutará de nuevo:

```js
// useEffect(callback , [array])
    useEffect(() => { console.log(`contador  ${contador}`)} , [contador]);

```
:::tip Observacion
- Lo que está sucediendo es lo siguiente:
  1.	Callback (función del efecto):
      - El primer argumento de useEffect es una función para mostrar por consola el valor de contador.
  2.	Array de dependencias ([contador]):
      - El segundo argumento es un array que contiene contador. Esto le indica a React que solo debe ejecutar la función del efecto cuando contador cambie. Si contador no cambia entre renderizados, el efecto no se ejecutará.
- El efecto se ejecutará una vez al principio (después del primer renderizado) y luego cada vez que el valor de contador cambie.
- Si contador no cambia, el efecto no se ejecutará nuevamente, lo que optimiza el rendimiento al evitar ejecuciones innecesarias.

:::
:::tip 
- Se Pueden crear varios useEffect.
:::
:::tip 
Más adelante conoceremos los [Efectos con saneamiento.](https://es.reactjs.org/docs/hooks-effect.html#effects-with-cleanup) 
:::

## Formulario
src/components/Formulario.js
```js
import React from 'react'

const Formulario = () => {
  return (
    <div>Formulario</div>
  )
}

export default Formulario

```
:::tip 
los componentes empiezan en mayuscula
:::

App.jsx
```js
import React from 'react'
import Formulario from './components/Formulario';

const App = () => {
  return (
    <div>
        <h1>App Rick and Morty</h1>
         <Formulario/>
    </div>
  )
}

export default App

```
src/hooks/useFormulario.js
:::tip 
- Los hooks  sirven para varios proyectos, como en este caso
- No los borres
:::
```js
import React, { useState } from 'react'

export const useFormulario = ( initialState = {}) => {
    const [inputs , setInputs] = useState(initialState)
    const handleChange = e => {
        const { name, value, checked, type } = e.target;
        setInputs((old) => ({
            ...old,
            [name]: type === "checkbox" ? checked : value
        }))
    }
    const reset = () => {
         setInputs(initialState);
    }
  return [inputs , handleChange , reset];
}

```
src/components/Formulario.js
```js
import React from 'react'
import { useFormulario } from '../hooks/useFormulario'

const Formulario = () => {
    const [inputs , handleChange , reset] = useFormulario({
        nombre:''
    })
    const {nombre} = inputs;
    const handleSubmit = e => {
        e.preventDefault();
        
        reset();
    }
  return (
    <form onSubmit={handleSubmit}>
       <input
          type="text"
          placeholder="Ingrese personaje"
          className="form-control mb-2"
           value={nombre}
           onChange={handleChange}
           name="nombre"
          />
          <button  className="btn btn-dark"
          type="submit"
          >Buscar</button>
    </form>
  )
}

export default Formulario

```
## Comunicacion entre Componentes
-1 Usamos [sweet alert 2](https://sweetalert2.github.io/#download) para las alertas 
```powershell
npm install sweetalert2
```
App.jsx
```js
import React, { useState } from 'react'
import Formulario from './components/Formulario';
import PintarDatos from './components/PintarDatos';

const App = () => {
    const [nombrePersonaje , setNombrePersonaje] = useState('');
  return (
    <div>
        <h1>App Rick and Morty</h1>
         <Formulario setNombrePersonaje={setNombrePersonaje}/>
         <PintarDatos nombrePersonaje={nombrePersonaje}/>
    </div>
  )
}

export default App

```
src/components/Formulario.jsx
```js
import React from 'react'
import Swal from 'sweetalert2'
import { useFormulario } from '../hooks/useFormulario'

const Formulario = ({setNombrePersonaje}) => {
    const [inputs , handleChange , reset] = useFormulario({
        nombre:''
    })
    const {nombre} = inputs;
    const handleSubmit = e => {
        e.preventDefault();
        // Si esta vacio
        if (!nombre.trim()) {
            return Swal.fire({
                title: 'Error!',
                text: 'Escriba algo por favor',
                icon: 'error',
              })
        }
        setNombrePersonaje(nombre.trim().toLowerCase());
        reset();
    }
  return (
    <form onSubmit={handleSubmit}>
       <input
          type="text"
          placeholder="Ingrese personaje"
          className="form-control mb-2"
           value={nombre}
           onChange={handleChange}
           name="nombre"
          />
          <button  className="btn btn-dark"
          type="submit"
          >Buscar</button>
    </form>
  )
}

export default Formulario

```
## Componentes
src/components/PintarDatos.jsx
```js
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import Personaje from './Personaje';
const PintarDatos = ({nombrePersonaje}) => {
  const [personajes,setPersonajes] = useState([]);
   useEffect(() => {
    consumirAPI(nombrePersonaje);
   } , [nombrePersonaje])
   const consumirAPI = async(nombre) => {
      try {
          const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}&status=alive`)
          if (!res.ok) {
            return Swal.fire({
              title: 'Error!',
              text: 'Personaje no encontrado',
              icon: 'error',
            })

           
          }
          const datos = await res.json();
          setPersonajes(datos.results);
      } catch(error) {
        console.log(error);
      } finally {

      }
   }

  return (
    <div className="row mt-2">
       {
         personajes.map(item => (
            <Personaje key={item.id}  personaje={item} />
         ))
       }
    </div>
  )
}

export default PintarDatos

```
src/components/Personaje.jsx
```js
import React from 'react'

const Personaje = ({personaje}) => {
    const {name , species , image} = personaje
  return (
    <div className="col-md-4 mb-2">
        <div className="card">
            <img src={image} alt={`imagen-${name}`} className="card-img-top" />
            <h5>{name}</h5>
            <p>{species}</p>
        </div>
    </div>
  )
}

export default Personaje

```
## Spinner de carga
src/components/Loading.jsx
```js
import React from 'react'

const Loading = () => {
  return (
    <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
  )
}

export default Loading

```
src/components/PintarDatos.jsx
:::tip Observacion
- Depende del estado del componente retorna el componente de cargando o los componentes de Personajes.
:::
```js
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import Loading from './Loading';
import Personaje from './Personaje';
const PintarDatos = ({nombrePersonaje}) => {
  const [personajes,setPersonajes] = useState([]);
  const [loading , setLoading] = useState(false);
   useEffect(() => {
    consumirAPI(nombrePersonaje);
   } , [nombrePersonaje])
   const consumirAPI = async(nombre) => {
     setLoading(true);
      try {
          const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}&status=alive`)
          if (!res.ok) {
            return Swal.fire({
              title: 'Error!',
              text: 'Personaje no encontrado',
              icon: 'error',
            })

           
          }
          const datos = await res.json();
          setPersonajes(datos.results);
      } catch(error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
   }
   if (loading) {
     return <Loading/>
   }

  return (
    <div className="row mt-2">
       {
         personajes.map(item => (
            <Personaje key={item.id}  personaje={item} />
         ))
       }
    </div>
  )
}

export default PintarDatos

```
## customHook opcional
```js

import Swal from "sweetalert2";
import { useEffect, useState } from "react";

export const useFetch = (nombre) => {
    const [personajes, setPersonajes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        obtenerCharacter(nombre);
    }, [nombre]);

    const obtenerCharacter = async (nombre) => {
        setLoading(true);
        try {
            const res = await fetch(
                `https://rickandmortyapi.com/api/character/?name=${nombre}&status=alive`
            );

            if (!res.ok) {
                console.log(res);
                return Swal.fire({
                    title: "Error!",
                    text: `no existe ${nombre}`,
                    icon: "error",
                });
            }

            const data = await res.json();
            console.log([...data.results]);
            setPersonajes([...data.results]);
        } catch (error) {
            console.log(error);
            return Swal.fire({
                title: "Error!",
                text: `Error de servidor`,
                icon: "error",
            });
        } finally {
            setLoading(false);
        }
    };

    return [personajes, loading];
};

```
## LocalStorage

App.jsx
```js
import React, { useEffect, useState } from 'react'
import Formulario from './components/Formulario';
import PintarDatos from './components/PintarDatos';

const App = () => {
    const [nombrePersonaje , setNombrePersonaje] = useState('');
    useEffect(() => {
          if (localStorage.getItem('nombreAPI')) {
            setNombrePersonaje(JSON.parse(localStorage.getItem('nombreAPI')))
          }
    } , [])
    useEffect(() => {
      localStorage.setItem('nombreAPI' , JSON.stringify(nombrePersonaje))
    } , [nombrePersonaje])
  return (
    <div>
        <h1>App Rick and Morty</h1>
         <Formulario setNombrePersonaje={setNombrePersonaje}/>
         <PintarDatos nombrePersonaje={nombrePersonaje}/>
    </div>
  )
}

export default App

```
