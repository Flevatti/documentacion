---
sidebar_position: 1
---

# Proyecto 1 
## React native
- React Native, es un framework de código abierto creado por Meta Platforms, Inc. Se utiliza para desarrollar aplicaciones para Android,  Android TV,  iOS, macOS,  tvOS, Web,  Windows y UWP al permitir que los desarrolladores usen React con las características nativas de estas plataformas.
- El código se ejecutara de manera nativa para Android y iOS.
- React native te permite  renderizar un componente especifico dependiendo en que sistema operativo estes.
- [Guia de instalación](https://reactnative.dev/docs/environment-setup)
#### ¿Qué es app nativa?
- Una app nativa es aquella que ha sido desarrollada en el lenguaje de programación específico de un sistema operativo. Es decir, si hablamos de Android, la app nativa habrá sido desarrollada con el lenguaje de programación Kotlin o Java
- La aplicación nativa está desarrollada y optimizada específicamente para el sistema operativo determinado y la plataforma de desarrollo del fabricante (Android, iOS, etc). 
- Este tipo de aplicaciones se adapta al 100% con las funcionalidades y características del dispositivo obteniendo así una mejor experiencia de uso

:::tip Info
- [¿Qué es una App Nativa? Características y ventajas](https://actualizatec.com/blog/app-nativa/#:~:text=Una%20app%20nativa%20es%20aquella,de%20programaci%C3%B3n%20Kotlin%20o%20Java)
- [¿App nativa, web o híbrida?](https://www.raona.com/aplicacion-nativa-web-hibrida/)
:::


## Instalación
- Vamos a utilizar [Expo](https://expo.dev/) , que es una plataforma que utiliza react native y que además le prevé diferentes librerías, bibliotecas y diferentes tipos de mejoras.
- Es la plataforma por defecto para desarollar en react native.
#### 1- Instalación
```powershell
npm install -g expo-cli 
```
#### 2- Iniciamos el Proyecto
```powershell
expo init Nombre_Proyecto
```
- Nombre_Proyecto es cualquier nombre.
- Nos va a preguntar que plantilla (template)  usar :
    - Uno vacio (este vamos a usar)
    - Uno vacio con typescripts
    - Uno con tabs (tiene paginas hechas) y typescript
    - Minimal (contiene lo esencial para arrancar) 
- Al terminar de ejecutar el comando, nos mostraría una serie de pasos para ejecutar el proyecto que creamos.

#### 3- Iniciamos el proyecto 
- Ejecutamos el siguiente comando dentro de la carpeta del proyecto
```powershell
npm start 
```
- Una vez ejecutado el proyecto, podes abrirlo desde el navegador, Android, iOS , emulador , etc.
- Todas estas opciones se muestran en la consola al ejecutar el “start”.

:::warning
- Te puede pedir que instales algunas dependencias para ejecutar el proyecto en alguna plataforma especifica.
:::


:::tip
- Con la opcion open Android podés simular un celular con Android Studio
- [Click aquí para ver la configuración y instalación necesaria…](https://reactnative.dev/docs/environment-setup) 

:::

:::tip
En un celular con “control + m” abrís un menu de expo
:::


#### Estructura del proyecto 

##### Package.json
- Hay scripts para todos los SO
- La depedencia react-native-web se utiliza para renderizar la app en la web.

##### App.js
- Es una app de React
- En el archivo estamos renderizando un componente VIEW con los estilos del objeto styles.container 
- Dentro del componente View, se renderiza Text y StatusBar.

## Componentes
- [Componentes Basicos y APIs](https://reactnative.dev/docs/components-and-apis)
#### Componente StatusBar
- Nos permite controlar la barra de estado de la app dependiendo del dispositivo. 
- La barra de estado es la zona, generalmente en la parte superior de la pantalla, que muestra la hora actual, la información de la red Wi-Fi y celular, el nivel de la batería y/u otros íconos de estado.
#### Componente Text
- El componente Text, tiene el texto que se va a mostrar.
- Text es el único componente de React Native, para renderizar texto
#### Componente View
- Es el componente básico para crear cualquier interfaz.
- Una vista (view) puede tener varios componentes adentro (incluso una vista)
- Se podría decir que es una etiqueta &lt;div> con flexbox.
#### Componente textInput
- Representa un input de HTML
#### Componente Touchable***
- Representa los botones.
- Hay varios tipos de botones , pero todos empiezan con la palabra “Touchable”
- Te permite capturar los eventos de cuando el usuario hace una especie de “click”.
- Touchable******* es el único componente que se puede hacer click (que es tocable)


#### Componente TouchableWithoutFeedback
- Es un boton que no hace ningún efecto cuando hace click (por eso “sin feedback)
- Solo puede contener un hijo.

App.js

```js
import { StyleSheet, Text, View , TouchableWithoutFeedback , Alert } from 'react-native';



export default function App() {
  console.log('Se ejecuta');
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={()=> {
        // El metodo alert(string) genera una alerta con el string en su interior
        Alert.alert('Hemos tocado el texto!')
      }}>
      <Text>Hola boludo!</Text>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

```
#### Componente TouchableNativeFeedback
- Es un componente que hace algún efecto cuando se hace click (tiene feedback)
- Es un contenedor para hacer que las vistas respondan correctamente a los toques (solo Android).
- Solo admite tener una única instancia de View como nodo secundario(hijo)


#### Componente alert
- Como su nombre lo dice, sirve para alertas


## Creamos una App

Src/components/Main.jsx
```js

import {Text , View} from 'react-native'

const Main = ()=> {
    return (
        <View>
            <Text>Aplicación</Text>
        </View>
    )
}

export default Main

```

App.js
```js
import {  View  } from 'react-native';
import Main from './src/components/Main';


export default function App() {
  console.log('Se ejecuta');
  return (
   <View>
      <Main></Main>
   </View>
  );
}

```
### expo-constants
- El codigo anterior tiene un problema: el texto se renderiza en el punto 0 0 y no se ve.
- Para solucionar el problema , tenemos que usar las constantes de expo-constants
- De forma nativa, no se puede usar CSS. Pero el componente View tiene la props style para manejar el “estilo” de la APP.
- Dependiendo de la plataforma en la que ejecutes el programa , los valores de las constantes de  expo-constants son diferentes. Estos valores son útiles para la props Style.
- Por ejemplo : la constante (propiedad) statusBarHeight es la altura predeterminada de la barra de estado para el dispositivo.

Main.jsx

```js
import Constants from 'expo-constants'

const Main = ()=> {
    return (
        <View style={{marginTop : Constants.statusBarHeight}}>
            <Text>Aplicación</Text>
        </View>
    )
}

```

## Mostrar datos 

data/data.js
```js
const repositories = [
  {
    id: 'jaredpalmer.formik',
    fullName: 'jaredpalmer/formik',
    description: 'Build forms in React, without the tears',
    language: 'TypeScript',
    forksCount: 1589,
    stargazersCount: 21553,
    ratingAverage: 88,
    reviewCount: 4,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
  },
  {
    id: 'rails.rails',
    fullName: 'rails/rails',
    description: 'Ruby on Rails',
    language: 'Ruby',
    forksCount: 18349,
    stargazersCount: 45377,
    ratingAverage: 100,
    reviewCount: 2,
    ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
  },
  {
    id: 'django.django',
    fullName: 'django/django',
    description: 'The Web framework for perfectionists with deadlines.',
    language: 'Python',
    forksCount: 21015,
    stargazersCount: 48496,
    ratingAverage: 73,
    reviewCount: 5,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
  },
  {
    id: 'reduxjs.redux',
    fullName: 'reduxjs/redux',
    description: 'Predictable state container for JavaScript apps',
    language: 'TypeScript',
    forksCount: 13902,
    stargazersCount: 52869,
    ratingAverage: 0,
    reviewCount: 0,
    ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
  },{
    id: 'reduxjs.redux2',
    fullName: 'reduxjs/redux',
    description: 'Predictable state container for JavaScript apps',
    language: 'TypeScript',
    forksCount: 13902,
    stargazersCount: 52869,
    ratingAverage: 0,
    reviewCount: 0,
    ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
  },{
    id: 'reduxjs.redux3',
    fullName: 'reduxjs/redux',
    description: 'Predictable state container for JavaScript apps',
    language: 'TypeScript',
    forksCount: 13902,
    stargazersCount: 52869,
    ratingAverage: 0,
    reviewCount: 0,
    ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
  },{
    id: 'reduxjs.redux4',
    fullName: 'reduxjs/redux',
    description: 'Predictable state container for JavaScript apps',
    language: 'TypeScript',
    forksCount: 13902,
    stargazersCount: 52869,
    ratingAverage: 0,
    reviewCount: 0,
    ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
  }
];

export default repositories;

```
src/components/RepositoryList.jsx
```js

import {View , Text} from 'react-native';
import repositories from '../../data/data';

const RepositoryList = () => {
  
    return (
        <View>
         
            {
                repositories.map(repo => (
                    <View key={repo.id}>
                         <Text>id: {repo.id}</Text>
                         <Text>Fullname: {repo.fullName}</Text>
                         <Text>Description : {repo.description}</Text>
                         <Text>Language: {repo.language}</Text>
                         <Text>Stars : {repo.stargazersCount}</Text>
                         <Text>Forks : {repo.forksCount}</Text>
                         <Text>Review : {repo.reviewCount}</Text>
                         <Text> Rating : {repo.ratingAverage}</Text>
                    </View>
                ))
            }
        </View>
    )
}

export default RepositoryList;

```

Main.jsx
```js
import {Text , View} from 'react-native'
import Constants from 'expo-constants'
import RepositoryList from './RepositoryList'

const Main = ()=> {
    return (
        <View style={{marginTop : Constants.statusBarHeight}}>
            <Text>Aplicación</Text>
            <RepositoryList />
        </View>
    )
}

export default Main

```

### Componente FlatList
- El codigo anterior tiene un problema: La información no “cabe / entra” en la pantalla / viewport y encima no se puede scrollear.
- El componente View NO TIENE SCROLL.
- Hay dos componentes que te permiten hacer scroll:
    - FlatList : Se utiliza para renderizar listas
    - ScrollView : Es una vista especial que te permite tener scroll.


#### FlatList
- Entonces el FlatList se utiliza para listas (cuando renderizas con map u otro método que recorre algún tipo de dato) . 
- Esto sirve para mejorar el rendimiento
- Si el contenido que queres renderizar no contiene una lista , tenes que utilizar el componente ScrollView para hacer scroll.

##### Props
- data : Especifica el “array / objeto / etc “ que queremos recorrer.
- renderItem 	: Recibe un método que indicara como renderizar cada item de data.  Como parámetro tiene el item de cada recorrido. Se podría decir que su valor es el parámetro de map().

RepositoryList.jsx

```js
import { View, Text, FlatList } from "react-native";
import repositories from "../../data/data";

const RepositoryList = () => {
  return (
    <View>
      <FlatList
        data={repositories}
        renderItem={({ item: repo }) => (
          <View key={repo.id}>
            <Text>id: {repo.id}</Text>
            <Text>Fullname: {repo.fullName}</Text>
            <Text>Description : {repo.description}</Text>
            <Text>Language: {repo.language}</Text>
            <Text>Stars : {repo.stargazersCount}</Text>
            <Text>Forks : {repo.forksCount}</Text>
            <Text>Review : {repo.reviewCount}</Text>
            <Text> Rating : {repo.ratingAverage}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default RepositoryList;

```

:::tip Observación
Ahora si se puede scrollear!
:::


#### props ItemSeparatorComponent 
- El componente FlatList también tiene la props ItemSeparatorComponent cuyo valor es una funcion que devuelve algo.
- Lo que devuelve es lo que se renderizara entre ítems para generar un “espacio”


```js
<FlatList
        data={repositories}
        ItemSeparatorComponent={ () => (<Text></Text>)}

```
:::tip Observación
Entre items , se renderizara un componente Text vacio , provocando que allá una línea en blanco entre componentes.
:::


## Props style
- La props style la tienen todos los componentes , sirven para dar estilos CSS.

RepositoryList

```js
const RepositoryList = () => {
  return (
    <View>
      <FlatList
      style = {{padding:20 , paddingBottom : 5 , paddingTop:5 }}
        data={repositories}
        ItemSeparatorComponent={ () => (<Text></Text>)}
        renderItem={({ item: repo }) => (
          <View key={repo.id}>
            <Text style={{fontWeight:'bold' , marginBottom:5}}>id: {repo.id}</Text>
            <Text>Fullname: {repo.fullName}</Text>
            <Text>Description : {repo.description}</Text>
            <Text>Language: {repo.language}</Text>
            <Text>Stars : {repo.stargazersCount}</Text>
            <Text>Forks : {repo.forksCount}</Text>
            <Text>Review : {repo.reviewCount}</Text>
            <Text> Rating : {repo.ratingAverage}</Text>
          </View>
        )}
      />
    </View>
  );
};

```

:::tip Observación
- En el padding ponemos un numero sin especificar la medida, pero son pixeles (react native se encarga de esto). Esto sucede con todas las propiedades que necesitan una medida.
- React native se encarga de especificar los pixeles naturales del dispositivo (cada dispositivo tiene un pixel especifico)
- Las propiedades con mas de una palabra , se especifica como camelCase
:::

## Componente Item

RepositoryList.jsx
```js
import {  Text, FlatList } from "react-native";
import repositories from "../../data/data";
import RepositoryItem from "./RepositoryItem";

const RepositoryList = () => {
  return (
      <FlatList
      style = {{padding:20 , paddingBottom : 5 , paddingTop:5 }}
        data={repositories}
        ItemSeparatorComponent={ () => (<Text></Text>)}
        renderItem={({ item: repo }) => (
         <RepositoryItem  {...repo}/>
        )}
      />
  );
};

export default RepositoryList;

```

Components/RepositoryItem.jsx
```js
import { View, Text } from "react-native";
const RepositoryItem = (props) => (
    <View key={props.id}>
            <Text style={{fontWeight:'bold' , marginBottom:5}}>id: {props.id}</Text>
            <Text>Fullname: {props.fullName}</Text>
            <Text>Description : {props.description}</Text>
            <Text>Language: {props.language}</Text>
            <Text>Stars : {props.stargazersCount}</Text>
            <Text>Forks : {props.forksCount}</Text>
            <Text>Review : {props.reviewCount}</Text>
            <Text> Rating : {props.ratingAverage}</Text>
          </View>
)

export default RepositoryItem;

```

## Stylesheet 

- React native tiene una forma de simular las hojas de estilos de la web.
- No son exactamente hojas de estilos porque no se pueden hacer global.
- Podes crear estas hojas de estilos fuera de un componente para que sea mas optimo y así evitar que se cree el objeto style por cada componente que se va a renderizar , afectando el rendimiento de la APP .
- Ejemplo:
  - Cada vez que se renderice RepositoryItem , se creara un objeto que pertenece a la props style , afectando el rendimiento de la APP.
  - Estas “hojas de estilos” solucionarían este problema, ya que se ubicarían afuera del componente.


#### ¿Cómo crear los estilos?

1. Importamos Stylesheet de react-native
2. Usamos el metodo create() que recibe un objeto , cuya estructura es:

```js
{
    container : {
        propiedadCSS : valor ,
        propiedadCSS : valor ,
    } , 
    NombreContenedor : {
      propiedadCSS : valor ,
        propiedadCSS : valor ,
    } ,
   …
}

```
- Podemos crear los NombreContenedor que quieras con el nombre que te plazca.
- Cada propiedad de primer nivel es un objeto (contenedor) que contiene propiedades CSS.
- Como podrás notar, las propiedades CSS se ubican adentro de algún contenedor (propiedad container u otra propiedad que creaste)
- El método create() devuelve un objeto que se utilizara en algun componente para aplicar alguna propiedad CSS que se especificó.
1. En la props style de algún componente , especificamos que propiedad CSS utilizar con el objeto que creamos . Si usamos alguna propiedad "contenedor", estaremos aplicando TODAS las propiedades que se definió adentro de esta.

```js
import { View, Text  , StyleSheet} from "react-native";



const RepositoryItem = (props) => (
    <View key={props.id} style={styles.container}>
            <Text style={styles.strong}>id: {props.id}</Text>
            <Text>Fullname: {props.fullName}</Text>
            <Text>Description : {props.description}</Text>
            <Text>Language: {props.language}</Text>
            <Text>Stars : {props.stargazersCount}</Text>
            <Text>Forks : {props.forksCount}</Text>
            <Text>Review : {props.reviewCount}</Text>
            <Text> Rating : {props.ratingAverage}</Text>
          </View>
)

const styles = StyleSheet.create({
    container : {
        padding:20,
        paddingBottom:5,
        paddingTop:5,
    } ,
    strong : {
        color : '#09f',
        fontWeight:'bold',
        marginBottom:5
    }
})
export default RepositoryItem;

```

:::tip Observación
- A la props style generalmente se le asigna un "contenedor" del objeto styles

:::
#### Se puede usar Arrays para estilos CSS

- Cada objeto del array seria un “contenedor” con propiedades CSS.
- Si especificamos el array completo en la props style, se aplicarían todas las propiedades CSS de todos los contenedores.


components/StyledText.jsx
```js
import { View, Text  , StyleSheet} from "react-native";

const styles = StyleSheet.create({
    text : {
        fontSize:12,
        color:'grey'
    } ,
    bold: {
        fontWeight:'bold'
    } ,
    blue : {
        color : 'blue'
    } ,
    big: {
        fontSize:20
    } , 
    small : {
        fontSize:10
    }
})

export default function StyleText ({blue , bold , children , big , small}) {

    const  textStyles = [
        styles.text , 
        blue && styles.blue ,
        big && styles.big ,
        small && styles.small ,
        bold && styles.bold
    ]

   
      return (
        <Text style={textStyles}>
            {children}
        </Text>
      )
} 

```

components/StyledText.jsx
```js
import { View, Text  , StyleSheet} from "react-native";

const styles = StyleSheet.create({
    text : {
        fontSize:12,
        color:'grey'
    } ,
    bold: {
        fontWeight:'bold'
    } ,
    blue : {
        color : 'blue'
    } ,
    big: {
        fontSize:20
    } , 
    small : {
        fontSize:10
    }
})

export default function StyleText ({blue , bold , children , big , small}) {

    const  textStyles = [
        styles.text , 
        blue && styles.blue ,
        big && styles.big ,
        small && styles.small ,
        bold && styles.bold
    ]

   
      return (
        <Text style={textStyles}>
            {children}
        </Text>
      )
} 

```

RepositoryItem.jsx

```js
import { View, Text  , StyleSheet} from "react-native";
import StyleText from "./StyledText";



const RepositoryItem = (props) => (
    <View key={props.id} style={styles.container}>
            <StyleText big bold>id: {props.id}</StyleText>
            <StyleText blue>Fullname: {props.fullName}</StyleText >
            <StyleText bold>Description : {props.description}</StyleText>
            <StyleText blue>Language: {props.language}</StyleText>
            <StyleText small>Stars : {props.stargazersCount}</StyleText>
            <StyleText small>Forks : {props.forksCount}</StyleText>
            <StyleText small>Review : {props.reviewCount}</StyleText>
            <StyleText small> Rating : {props.ratingAverage}</StyleText>
          </View>
)

const styles = StyleSheet.create({
    container : {
        padding:20,
        paddingBottom:5,
        paddingTop:5,
    } ,
})
export default RepositoryItem;

```

#### Tema
- Esto es una buena práctica.

Src/theme.js
```js
export default theme = {
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    primary: "#0366d6",
  },
  fontSizes: {
    body: 14,
    subHeading: 16,
  },
  fonts: {
    main: "System",
  },
  fontWeight: {
    normal: "400",
    bold: "700",
  },
};

```

StyleText.jsx

```js
import { View, Text, StyleSheet } from "react-native";

import theme from "../theme.js";
const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
    fontWeight: theme.fontWeight.normal,
  },
  colorPrimary: {
    color: theme.colors.textPrimary,
  },
  colorSecondary: {
    color: theme.colors.textSecondary,
  },
  bold: {
    fontWeight: theme.fontWeight.bold,
  },
  subHeading: {
    fontSize: theme.fontSizes.subHeading,
  },
});

export default function StyleText({children , color , fontSize , fontWeight , style , ...restOfProps }) {
  const textStyles = [
    styles.text,
    color === 'primary' && styles.colorPrimary,
    color === 'secondary' && styles.colorSecondary,
    fontSize === 'subheading' && styles.subHeading,
    fontWeight === 'bold' && styles.bold

  ];

  return <Text style={textStyles} {...restOfProps}>{children}</Text>;
}

```

RepositoryItems.jsx
```js
const RepositoryItem = (props) => (
    <View key={props.id} style={styles.container}>
            <StyleText fontWeight='bold' fontSize='subheading' >{props.fullName}</StyleText >
            <StyleText >{props.description}</StyleText>
            <StyleText >{props.language}</StyleText>
            <StyleText >Stars : {props.stargazersCount}</StyleText>
            <StyleText >Forks : {props.forksCount}</StyleText>
            <StyleText >Review : {props.reviewCount}</StyleText>
            <StyleText >Rating : {props.ratingAverage}</StyleText>
          </View>
)

const styles = StyleSheet.create({
    container : {
        padding:20,
        paddingBottom:5,
        paddingTop:5,
    } ,
})
export default RepositoryItem;

```
## Flex
- Flexbox es la base para estilar en React native.
- Todos los componentes View tiene por defecto un **"display : flex"** y **"flex-direction : column"**

RepositoryItem.jsx
```js
import { View, Text, StyleSheet } from "react-native";
import StyleText from "./StyledText";
import RepositoryStats from "./RepositoryStats";





const RepositoryItem = (props) => (
  <View key={props.id} style={styles.container}>
    <StyleText fontWeight="bold" fontSize="subheading">
      {props.fullName}
    </StyleText>
    <StyleText>{props.description}</StyleText>
    <StyleText>{props.language}</StyleText>
    <RepositoryStats {...props} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
});
export default RepositoryItem;

```
RepositoryStat.jsx
```js
import { View} from "react-native";
import StyleText from "./StyledText";
const parseThousands = value => {
    return value >= 1000 ? `${Math.round(value / 100) / 10} k ` : String(value)
}
const RepositoryStats = (props) => {
    return (
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <View>
        <StyleText align="center" fontWeight="bold">{parseThousands(props.stargazersCount)}</StyleText>
          <StyleText align="center" >
            Stars
          </StyleText>
        
        </View>
        <View>
        <StyleText align="center" fontWeight="bold">{parseThousands(props.forksCount)}</StyleText>
          <StyleText  align="center">
            Forks
          </StyleText>
         
        </View>
        <View>
        <StyleText align="center" fontWeight="bold">{parseThousands(props.reviewCount)}</StyleText>
          <StyleText align="center" >
            Review
          </StyleText>
         
        </View>
        <View>
        <StyleText align="center" fontWeight="bold">{parseThousands(props.ratingAverage)}</StyleText>
          <StyleText align="center" >
            Rating
          </StyleText>
         
        </View>
      </View>
    );
  };

  export default RepositoryStats;

```

StyleText.jsx
```js
import { View, Text, StyleSheet } from "react-native";

import theme from "../theme.js";
const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
    fontWeight: theme.fontWeight.normal,
  },
  colorPrimary: {
    color: theme.colors.textPrimary,
  },
  colorSecondary: {
    color: theme.colors.textSecondary,
  },
  bold: {
    fontWeight: theme.fontWeight.bold,
  },
  subHeading: {
    fontSize: theme.fontSizes.subHeading,
  },
  textAlignCenter: {
    textAlign:'center'
  }
});

export default function StyleText({children , color , fontSize , fontWeight , style ,align ,  ...restOfProps }) {
  const textStyles = [
    styles.text,
    align === 'center' && styles.textAlignCenter ,
    color === 'primary' && styles.colorPrimary,
    color === 'secondary' && styles.colorSecondary,
    fontSize === 'subheading' && styles.subHeading,
    fontWeight === 'bold' && styles.bold

  ];

  return <Text style={textStyles} {...restOfProps}>{children}</Text>;
}

```

## Cuestiones CSS
- La  propiedad CSS background no es valida
- Los shorthands (algunos funcionan) están prohibidos en react native. React native creo propiedades CSS para remplazar los shorthands.
- Si usas las palabras claves para especificar un “color” (ejemplo: blue), puede ser que react native ponga una tonalidad diferente en cada dispositivo
- Si moves un elemento flexbox (con alignSelf por ej) , el elemento solo ocupara el espacio del contenido (actuando como si fuera un elemento en linea) . Si no lo moves , el elemento ocupara todo el ancho (actuando como si fuera un elemento en bloque).
- Para que la propiedad border-radius haga efecto , se debe especificar un overflow:hidden (hay excepciones).


RepositoryItem
```js
import { View,  StyleSheet } from "react-native";
import StyleText from "./StyledText";
import RepositoryStats from "./RepositoryStats";
import theme from "../theme";




const RepositoryItem = (props) => (
  <View key={props.id} style={styles.container}>
    <StyleText fontWeight="bold" fontSize="subheading">
      {props.fullName}
    </StyleText>
    <StyleText>{props.description}</StyleText>
    <StyleText style={styles.language}>{props.language}</StyleText>
    <RepositoryStats {...props} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
  language: {
    padding:4,
    color: theme.colors.white ,
    backgroundColor:theme.colors.primary ,
    alignSelf : 'flex-start',
    borderRadius:4,
    overflow:'hidden'
  }
});
export default RepositoryItem;

```

StyledText
```js
import { View, Text, StyleSheet } from "react-native";

import theme from "../theme.js";
const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
    fontWeight: theme.fontWeight.normal,
  }, 
  colorPrimary: {
    color: theme.colors.textPrimary,
  },
  colorSecondary: {
    color: theme.colors.textSecondary,
  },
  bold: {
    fontWeight: theme.fontWeight.bold,
  },
  subHeading: {
    fontSize: theme.fontSizes.subHeading,
  },
  textAlignCenter: {
    textAlign:'center'
  }
});

export default function StyleText({children , color , fontSize , fontWeight , style ,align ,  ...restOfProps }) {
  const textStyles = [
    styles.text,
    align === 'center' && styles.textAlignCenter ,
    color === 'primary' && styles.colorPrimary,
    color === 'secondary' && styles.colorSecondary,
    fontSize === 'subheading' && styles.subHeading,
    fontWeight === 'bold' && styles.bold ,
    style

  ];

  return <Text style={textStyles} {...restOfProps}>{children}</Text>;
}

```
Theme.js
```js

export default theme = {
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    primary: "#0366d6",
    white : '#fefefe'
  },
  fontSizes: {
    body: 14,
    subHeading: 16,
  },
  fonts: {
    main: "System",
  },
  fontWeight: {
    normal: "400",
    bold: "700",
  },
};


```

## Imagen
- El componente Image (viene de react native) se encarga de las imágenes.
- Tambien tiene la props style para aplicar estilos CSS
- Tiene la props Source , la cual sirve para “importar” la imagen.
- La props Source recibe un objeto con :
   - Propiedad uri: Recibe la url de la imagen.

```js
  <Image style={styles.image} source={{uri:props.ownerAvatarUrl}}/>
```
- Si usamos el código anterior en el componente RepositoryItem , la imagen no se verá.
- React native no sabe que espacio debe ocupar una imagen, por lo tanto se debe especificar el width y height con CSS.
- Una vez que se especifica el espacio que ocupa la imagen, se mostrara.

RepositoryItem
```js
import { View,  StyleSheet, Image } from "react-native";
import StyleText from "./StyledText";
import RepositoryStats from "./RepositoryStats";
import theme from "../theme";




const RepositoryItem = (props) => (
  <View key={props.id} style={styles.container}>
    <Image style={styles.image} source={{uri:props.ownerAvatarUrl}}/>
    <StyleText fontWeight="bold" fontSize="subheading">
      {props.fullName}
    </StyleText>
    <StyleText>{props.description}</StyleText>
    <StyleText style={styles.language}>{props.language}</StyleText>
    <RepositoryStats {...props} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
  language: {
    padding:4,
    color: theme.colors.white ,
    backgroundColor:theme.colors.primary ,
    alignSelf : 'flex-start',
    borderRadius:4,
    overflow:'hidden'
  } ,
  image : {
    width:48,
    height:48,
    borderRadius:4
  }
});
export default RepositoryItem;

```

## Cuestiones CSS #2
- flex: 1  =  Hace que el elemento ocupe todo el espacio disponible y que haga salto de línea si es necesario.
- Estas dos propiedades no están en CSS, las crea React native:
  - marginVertical : numero  = Aplica los márgenes de arriba y abajo (en pixeles)
  - marginHorizontal : numero = Aplica los márgenes de izquierda y derecha (en pixeles)
- Hay varias propiedades CSS que crea react native para trabajar dos costados/lados con un solo valor.  Ej : paddingHorizontal.


RepositoryItem
```js
import { View, StyleSheet, Image } from "react-native";
import StyleText from "./StyledText";
import RepositoryStats from "./RepositoryStats";
import theme from "../theme";

const RepositoryItemHeader = ({
  ownerAvatarUrl,
  fullName,
  description,
  language,
}) => (
  <View style={{ flexDirection: "row", paddingBottom: 2 }}>
    <View style={{ paddingRight: 10 }}>
      <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
    </View>

    <View style={{ flex: 1 }}>
      <StyleText fontWeight="bold" >
        {fullName}
      </StyleText>
      <StyleText color='secondary'>{description}</StyleText>
      <StyleText style={styles.language}>{language}</StyleText>
    </View>
  </View>
);

const RepositoryItem = (props) => (
  <View key={props.id} style={styles.container}>
    <RepositoryItemHeader {...props} />
    <RepositoryStats {...props} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    borderRadius: 4,
    overflow: "hidden",
    marginVertical:4
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
});
export default RepositoryItem;


```

## AppBar

:::tip CSS
Podemos realizar operaciones matemáticas en las propiedades CSS sin necesidad de usar calc().
:::



components/Appbar.jsx

```js
import { StyleSheet, View } from "react-native";
import StyleText from "./StyledText";
import theme from "../theme";
import Constants from 'expo-constants'
const styles = StyleSheet.create({
    appBar : {
        backgroundColor : theme.appBar.primary,
        paddingTop:  Constants.statusBarHeight + 10 ,
        paddingBottom:10,
        paddingLeft:10 
    } ,
    text:{
        color: theme.appBar.textPrimary
    }
})

const AppBar = () => {

    return (
        <View style={styles.appBar}>
          <StyleText fontWeight='bold' style={styles.text}  >  Repositories </StyleText>
         
        </View>
    )
}

export default AppBar;

```
theme.js
```js
const theme = {
  appBar: {
    primary:'#24292e',
    textPrimary:'#fff'
  } , 
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    primary: "#0366d6",
    white : '#fefefe'
  },
  fontSizes: {
    body: 14,
    subHeading: 16,
  },
  fonts: {
    main: "System",
  },
  fontWeight: {
    normal: "400",
    bold: "700",
  },
};

export default theme;

```

Main.jsx
```js
import {  View} from 'react-native'
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'

const Main = ()=> {
    return (
        <View style={{ flew : 1}} >
      <AppBar/>
            <RepositoryList />
        </View>
    )
}

export default Main

```

## Router
- [Hay diferentes maneras de routear](https://docs.expo.dev/guides/routing-and-navigation/).
- En esta guía , usaremos react-router-native.

#### Instalación

```powershell
npm install react-router-native
```


- En lugar de usar BrowserRouter (de react-router) , usamos el NativeRouter


App.js
```js

import Main from './src/components/Main';
import { NativeRouter } from 'react-router-native';


export default function App() {
  return (
   <NativeRouter>
   <Main/>
   </NativeRouter>
 
  
  );
}

```
:::tip ¿Te tira un error?
- Es porque falta la dependencia @expo/webpack-config y configurarla.
- En las versiones nuevas no te debería tirar este error porque ya está instalada y configurada.
- ¡En caso contrario, a investigar!
:::

Main.jsx

- Son los mismos componentes que React Router básicamente.


```js
import React from "react";
import { View, Text } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import { Route, Link, Routes } from "react-router-native";

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />

      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<Text>Estamos trabajando</Text>} />
      </Routes>
    </View>
  );
};

export default Main;

```

#### ¿Para que sirve esto en un celular?
- ¡¡Lo normal que este tipo de “router”, solo sea útil en Navegadores ya que son path con url!!
- Pues en dispositivos móviles, son rutas en memoria, NO rutas de una página web.


Appbar.jsx
- Usamos el componente Link que nos permite llevar al usuario a una ruta especifica.

```js
import { StyleSheet, View } from "react-native";
import StyleText from "./StyledText";
import theme from "../theme";
import Constants from "expo-constants";
import { Link } from "react-router-native";
const styles = StyleSheet.create({
  appBar: {
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    flexDirection:'row'
  },
  text: {
    color: theme.appBar.textPrimary,
    // padding left y right
    paddingHorizontal : 10
  },
});
const AppBarTab = ({ active, children, to }) => {
  return (
    <Link to={to}>
     
      <StyleText fontWeight="bold" style={styles.text}>
        
       {children}
      </StyleText>
    </Link>
  );
};
const AppBar = () => {
  return <View style={styles.appBar}>
    <AppBarTab active to="/">Repositories</AppBarTab>
    <AppBarTab active to="/signin">Sign in</AppBarTab>
  </View>;
};

export default AppBar;

```

#### ¡Y listo ya tenemos un menu!


## Props del componente link
- Cuando haces click en un componente “Link” , se genera una opacidad y un background nuevo.
- Por defecto Link renderiza un “componente” cuando se hace click.
- Eso lo podemos configurar con la props component que recibe como valor un componente (que se renderizara al hacer click)
- Podemos usar algún componente de react native como valor de esta props.


```js
import { StyleSheet, View , TouchableHighlight  } from "react-native";
const AppBarTab = ({ active, children, to }) => {
  return (
    <Link to={to} component={TouchableHighlight}>
     
      <StyleText fontWeight="bold" style={styles.text}>
        
       {children}
      </StyleText>
    </Link>
  );
};

```

## ScrollView
- ¡Si creamos varios ítems en el menu, se sale del dispositivo!

```js
const AppBar = () => {
  return <View style={styles.appBar}>
    <AppBarTab active to="/">Repositories</AppBarTab>
    <AppBarTab active to="/signin">Sign in</AppBarTab>
    <AppBarTab active to="/signin">Register</AppBarTab>
    <AppBarTab active to="/signin">Lorem ipsum dolor</AppBarTab>
    <AppBarTab active to="/signin">Lorem ipsum dolor</AppBarTab>
    <AppBarTab active to="/signin">Lorem ipsum dolor</AppBarTab>
  </View>;
};

```
- Para solucionar esto , usamos el componente ScrollView
- El ScrollView ubica los elementos como columna (de arriba abajo) , para que los ubique como fila (de izquierda a derecha) tenemos que pasarle la props horizontal.

:::tip
Si le pasas la props sin ningún valor, se considera que contiene como valor true.
:::


```js
import { StyleSheet, View , TouchableWithoutFeedback  , ScrollView} from "react-native";
import StyleText from "./StyledText";
import theme from "../theme";
import Constants from "expo-constants";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
    flexDirection:'row'
  },
  text: {
    color: theme.appBar.textPrimary,
    // padding left y right
    paddingHorizontal : 10
  }, 
  scroll : {
    paddingBottom:15
  }
});
const AppBarTab = ({ active, children, to }) => {
    console.log(TouchableWithoutFeedback)
  return (
   
    <Link to={to} component={TouchableWithoutFeedback}>
      <StyleText fontWeight="bold" style={styles.text}>
       {children}
      </StyleText>
    </Link>
  
  );
};
const AppBar = () => {
  return <View style={styles.appBar}>
    <ScrollView horizontal style={styles.scroll}>
    <AppBarTab active to="/">Repositories</AppBarTab>
    <AppBarTab active to="/signin">Sign in</AppBarTab>
    <AppBarTab active to="/signin">Register</AppBarTab>
    <AppBarTab active to="/signin">Lorem ipsum dolor</AppBarTab>
    <AppBarTab active to="/signin">Lorem ipsum dolor</AppBarTab>
    <AppBarTab active to="/signin">Lorem ipsum dolor</AppBarTab>
    </ScrollView>
  </View>;
};

export default AppBar;

```

## Active

#### ¿Cómo saber en qué página estamos?

- Vamos a usar el hook useLocation
- El hook useLocation de React Router es un hook que podemos utilizar en cualquier componente. Este hook nos devuelve el objeto location. Dentro de este objeto, tenemos información sobre la URL actual, es decir, la que el usuario ha pedido recientemente. Esta información se guarda bajo la  propiedad pathname.
- Como es un “hook” , si cambia el valor (se navega a otra URL por ejemplo) , se vuelve a renderizar las partes que utilizar información de este.
- La propiedad pathname contiene la “url” actual, por lo tanto, podemos utilizar esta información para hacer una pequeña lógica:


```js
import { StyleSheet, View , TouchableWithoutFeedback  , ScrollView} from "react-native";
import StyleText from "./StyledText";
import theme from "../theme";
import Constants from "expo-constants";
import { Link, useLocation } from "react-router-native";

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
    flexDirection:'row'
  },
  text: {
    color: theme.appBar.textSecondary,
    // padding left y right
    paddingHorizontal : 10
  }, 
  scroll : {
    paddingBottom:15
  } , 
  active : {
    color: theme.appBar.textPrimary,
  }
});
const AppBarTab = ({  children, to }) => {
    const {pathname} = useLocation();
    const active = pathname === to
    const textStyles = [
        styles.text , 
        active && styles.active
    ]
    console.log(textStyles)
  return (
   
    <Link to={to} component={TouchableWithoutFeedback}>
      <StyleText fontWeight="bold" style={textStyles}>
       {children}
      </StyleText>
    </Link>
  
  );
};

const AppBar = () => {
  return <View style={styles.appBar}>
    <ScrollView horizontal style={styles.scroll}>
    <AppBarTab  to="/">Repositories</AppBarTab>
    <AppBarTab  to="/signin">Sign in</AppBarTab>
    </ScrollView>
  </View>;
};

export default AppBar;

```

## StatusBar
- Vamos a acomodar el estilo del “menu”.


App.js
- Vamos a importar StatusBar que viene de expo-status-bar (viene de expo).
- StatusBar es un “componente” que se renderiza arriba del NativeRouter y que maneja la barra de estado (donde se muestra el nivel de batería y otros iconos)
- La props style de Statusbar especifica el color de fondo y el de los iconos.
- El valor ‘light’ especifica fondo negro y los iconos blancos.
- [Más info](https://docs.expo.dev/versions/latest/sdk/status-bar/)

```js


import Main from './src/components/Main';
import { NativeRouter } from 'react-router-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
 
    <StatusBar style='light' />
   <NativeRouter>
   <Main/>
   </NativeRouter>
   </>
  
  );
}

```

## Como ejecutar codigo solo en Android
- Esto puede aplicar también para IOS.
  

### 1 Manera - Platform.OS
- Utilizaremos [Platform](https://reactnative.dev/docs/platform) de react-native.
- Es un objeto “especial” que tiene información de la plataforma en la que estas.
- Por ejemplo:
   - La propiedad OS devuelve el sistema operativo actual (Android o iOS)
   - La propiedad isPad devuelve true si es un iPad


RepositoryItem
```js
import { View, StyleSheet, Image , Platform } from "react-native";
const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: Platform.OS === 'android' ? 'red' : '#09f',
    alignSelf: "flex-start",
    borderRadius: 4,
    overflow: "hidden",
    marginVertical:4
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
});

```
:::tip Observación
Si esta en Android , el backgroundColor de language es ‘red’ , en caso contrario es ‘#09f’.
:::

### 2 Manera - Platform.select()

#### Método select()
- Recibe un objeto donde cada propiedad es el nombre de un dispositivo (Android , iOS , etc)  y su valor es lo que se va a aplicar si la APP se esta ejecutando en esa plataforma.

```js
language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: Platform.select({
      android:theme.colors.primary ,
      ios: 'orange' ,
      default : 'purple'
    }) ,
    alignSelf: "flex-start",
    borderRadius: 4,
    overflow: "hidden",
    marginVertical:4
  }

```

#### Otro ejemplo

RepositoryItem
```js
 backgroundColor: theme.colors.primary ,
```
theme.js
```js
import {  Platform } from "react-native";
const theme = {
  appBar: {
    primary:'#24292e',
    textPrimary:'#fff' ,
    textSecondary : '#999' ,
  } , 
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    primary: "#0366d6",
    white : '#fefefe'
  },
  fontSizes: {
    body: 14,
    subHeading: 16,
  },
  fonts: {

    main: Platform.select({
      ios:'Arial',
      android:'Roboto',
      default:'System'
    })
  },
  fontWeight: {
    normal: "400",
    bold: "700",
  },
};

export default theme;

```
StyledText
```js
const textStyles = [
    styles.text,
    align === 'center' && styles.textAlignCenter ,
    color === 'primary' && styles.colorPrimary,
    color === 'secondary' && styles.colorSecondary,
    fontSize === 'subheading' && styles.subHeading,
    fontWeight === 'bold' && styles.bold ,
    style , {
      fontFamily:theme.fonts.main
    }

  ];

```

### 3 Manera - Elegir entre dos componentes

- Se renderiza un componente en base al sistema operativo.
- En el ejemplo lo hare con Android, pero si tenes iOS podés probarlo con esa también (solo cambia un poco la lógica)



src\components\AndroidAppBar.jsx
```js
import { StyleSheet, View , TouchableWithoutFeedback  , ScrollView} from "react-native";
import StyleText from "./StyledText";
import theme from "../theme";
import Constants from "expo-constants";
import { Link, useLocation } from "react-router-native";

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: 'red',
    paddingTop: Constants.statusBarHeight + 10,
    flexDirection:'row'
  },
  text: {
    color: theme.appBar.textSecondary,
    // padding left y right
    paddingHorizontal : 10
  }, 
  scroll : {
    paddingBottom:15
  } , 
  active : {
    color: theme.appBar.textPrimary,
  }
});
const AppBarTab = ({  children, to }) => {
    const {pathname} = useLocation();
    const active = pathname === to
    const textStyles = [
        styles.text , 
        active && styles.active
    ]
    console.log(textStyles)
  return (
   
    <Link to={to} component={TouchableWithoutFeedback}>
      <StyleText fontWeight="bold" style={textStyles}>
       {children}
      </StyleText>
    </Link>
  
  );
};

const AppBar = () => {
  return <View style={styles.appBar}>
    <ScrollView horizontal style={styles.scroll}>
    <AppBarTab  to="/">Repositories</AppBarTab>
    <AppBarTab  to="/signin">Sign in</AppBarTab>
    </ScrollView>
  </View>;
};

export default AppBar;

```
:::tip Observación
Es el mismo menu, pero con el background rojo
:::


Main.jsx

- Utilizaremos el método Platform.select() para importar un componente.
- Los segundos paréntesis que se ubican en “Select ({objeto}) ()” son para ejecutar la funcion que devuelve el método Select. En pocas palabras es porque Select devuelve una funcion y los paréntesis son para ejecutarla.

```js
import React from "react";
import { View, Text , Platform } from "react-native";
import RepositoryList from "./RepositoryList";
import { Route,  Routes  } from "react-router-native";

const AppBar = Platform.select({
  // Utilizamos el .default porque estamos importando algo que se esta exportando de forma default
  android: () => require('./AndroidAppBar.jsx').default  , 
  default : ()=> require('./AppBar.jsx').default
})()
const Main = () => {

  return (
    <View style={{ flex: 1 }}>
      <AppBar />

      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<Text>Estamos trabajando</Text>} />
      </Routes>
    </View>
  );
};

export default Main;

```

:::tip

- No es la forma correcta si tu eres el que creas el fichero (componente).
- Se recomienda usar esta forma SOLO si son componentes que tu no hiciste.

:::

### 4 Manera - Elegir entre dos componentes #2
- Esta es la manera recomendada de hacerlo, si tu eres el que creas el fichero (el componente es local).
- Con esto logramos que:
   -  React native de forma automática (sin que haya código extra) elija que componente renderizar en base a la plataforma actual.


- Entonces:
  - AppBar.jsx se renderizaria por defecto.
  - Y al otro componente le cambiamos el nombre a :  AppBar.android.jsx


Main.jsx
```js
import AppBar from './AppBar';

const Main = () => {

  return (
    <View style={{ flex: 1 }}>
      <AppBar />
  
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<Text>Estamos trabajando</Text>} />
      </Routes>
    </View>
  );
};

export default Main;

```

:::tip Observación
- De forma automática, gracias a React native , AppBar renderiza uno de los dos ficheros en base a la plataforma en la que ejecutes la app
- Para que esto funcione , no TENES que poner la extensión al importar (Con la extensión le indicas exactamente que fichero se renderizaría).
- [info](https://reactnative.dev/docs/platform-specific-code#platform-specific-extensions)


:::

## Formulario con formik
- Formik te permite crear formularios con validaciones de forma sencilla.

#### Instalación
```powershell
 npm install formik
```



Main.jsx
```js
import React from "react";
import { View  } from "react-native";
import RepositoryList from "./RepositoryList";
import { Route,  Routes  } from "react-router-native";
import AppBar from './AppBar';
import LogInPage from "../pages/LogIn";

const Main = () => {

  return (
    <View style={{ flex: 1 }}>
      <AppBar />
  
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<LogInPage/>} />
      </Routes>
    </View>
  );
};

export default Main;

```
src\pages\LogIn.jsx



#### Componente formik
- Formik es un componente (contexto) que envuelve el formulario y te simplifica todo lo que va a contener (inputs , labels , etc) a través de React context.
- Formik tiene las props:
   - initialValues : Contiene un objeto con los valores por defecto del formulario. Cada propiedad es un nombre del input y su valor es el que va a contener por defecto.
- Tambien tiene el evento:
  -	onSubmit : Se ejecuta cuando el formulario es enviado . Recibe los valores de los inputs como parámetro.
- Formik funciona de una manera especial, te obliga a utilizar “render children” que es una funcion . En pocas palabras el “children” de Formik es una funcion.
- Lo que envuelve el componente Formik es una funcion (render children). La funcion se encargará de renderizar lo que va a contener un “formulario”. Todo lo que especificamos en la funcion se renderizara.
#### Componente TextInput
- Representa un input de tipo text.
- Eventos que contiene:
  - onChangeText : Se ejecuta cada vez que se modifique el valor del input.
- Props que contiene:
  - secureTextEntry  : Recibe un valor booleano . Si es true el input oculta el texto ingresado para que sea confidencial , como las contraseñas.
```js
import { Formik } from "formik";
import {  TextInput, View } from "react-native";

const initialValues = {
    email : '' ,
    password : ''
}
export default function LogInPage () {

    return ( <Formik initialValues={initialValues} 
    onSubmit={values => {
        console.log(values)
    }}>
     {() => {
        return <View>
            <TextInput></TextInput>
            <TextInput></TextInput>
        </View>
     }}
     </Formik> )
}

```
#### Render Children
- La funcion que se encuentra adentro de Formik retorna todo lo que se tienen que renderizar.
- Esto de utilizar una funcion como children era un patron que se usaba con React antes de usar Hooks , que te permitia insertar una funcionalidad a través de la funcion.
- La “funcionalidad” que recibía, la recibía en el parámetro de la funcion.

```js
export default function LogInPage () {

    return ( <Formik initialValues={initialValues} 
    onSubmit={values => {
        console.log(values)
    }}>
     {({handleChange , handleSubmit , values}) => {
        return <View>
            <TextInput></TextInput>
            <TextInput></TextInput>
        </View>
     }}
     </Formik> )
}

```
:::tip Observación
- handleChange , handleSubmit y values son “funcionalidades” que recibe la funcion.
- Las funcionalidades son del componente Formik y este se las pasa a la funcion que tiene en su interior.
- Esta manera de “pasar funcionalidades”  es un patron que se utilizaba antes de los Hooks .  
- Cuando salieron los hooks, esto se empezó a usar menos.
:::
#### Funcionalidades
```js
{handleChange , handleSubmit , values}
``` 
#### values 
- Es un objeto , su valor corresponde a la props initialValues al comienzo , luego se modifica en base al valor del input asignado.
#### handleChange() 
- Es una funcion que recibe un String con el nombre del input . Lo que se  le pasa es el nombre de una propiedad del objeto values. Basicamente asocia una propiedad del objeto values con el  value del input que especificamos.

#### handleSubmit() 
- Es la funcion que se debe ejecutar al hacer click en el boton de “Enviar”.


#### Componente Button
- Se utiliza para un boton.
- Eventos que contiene:
   - onPress : Se ejecuta cada vez que se hace click/toca el boron
- Props que contiene: 
  - Title: Recibe un string . Representa el texto que tenga adentro el boton.


```js
import { Formik } from "formik";
import {  Button, TextInput, View } from "react-native";

const initialValues = {
    email : '' ,
    password : ''
}
export default function LogInPage () {

    return ( <Formik initialValues={initialValues} 
    onSubmit={values => {
        console.log(values)
    }}>
     {({handleChange , handleSubmit , values}) => {
        return <View>
            <TextInput placeholder="E-mail" value={values.email}
            onChangeText={handleChange('email')}  
            ></TextInput>   
              <TextInput placeholder="Password" value={values.password}
            onChangeText={handleChange('password')}
            
            ></TextInput>
         <Button onPress={handleSubmit} title='Log In'/>
        </View>
     }}
     </Formik> )
}

```
:::tip Observación
- Cuando se hace click en el Button , se ejecuta la funcion handleSubmit.
- La funcion handleSubmit invoca el evento onSubmit del componente Formik
- El evento onSubmit ejecuta una funcion , que en este caso  es mostrar los valores por consola.


:::

### StyledTextInput

src\components\StyledTextInput.jsx
```js
import { StyleSheet, TextInput } from "react-native";

const styles = StyleSheet.create(
    {
       textInput: {
        borderRadius:5,
        borderWidth:1,
        borderColor: '#999' ,
        paddingHorizontal:20,
        paddingVertical:10 ,
        marginBottom:10
       } 
    }
)

const StyleTextInput = ({style = {}, ...props}) => {
   const inputStyle = {
     ...styles.textInput ,
     ...style
   }

   return <TextInput style={inputStyle} {...props}/>
}

export default StyleTextInput;

```

LogIn.jsx
```js
import { Formik } from "formik";
import { Button, StyleSheet, TextInput, View } from "react-native";
import StyleTextInput from "../components/StyledTextInput";

const initialValues = {
  email: "",
  password: "",
};

const styles = StyleSheet.create({
    form : {
        margin:12
    }
})
export default function LogInPage() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleChange, handleSubmit, values }) => {
        return (
          <View style={styles.form}>
            <StyleTextInput
              placeholder="E-mail"
              value={values.email}
              onChangeText={handleChange("email")}
            ></StyleTextInput>
            <StyleTextInput
              placeholder="Password"
              value={values.password}
              onChangeText={handleChange("password")}
            ></StyleTextInput>
            <Button onPress={handleSubmit} title="Log In" />
          </View>
        );
      }}
    </Formik>
  );
}

```
:::tip 
- En lugar de usar un componente View, podemos usar un componente Form en el render children , pero en este caso no funcionaría porque estamos en React Native.
- Hay varios componentes de Formik que no funcionan en React Native ya que renderizan elementos HTML no compatible en dispositivos móviles.


:::

### Hook useField
- Con los hooks, podemos gestionar la información de cualquier componente que se encuentra adentro de &lt;Formik>&lt;/Formik>
- El hook useField() recibe el “nombre (name)” de un input.  Lo que se le  pasa es el nombre de una propiedad del objeto values.
- Devuelve un array de tres posiciones:
  1.	field :  Informacion del campo/input . En field.value obtendremos el valor del input.
  2.	meta: Contiene metainformacion del campo/input . Contiene errores , validaciones , etc.
  3.	helpers :  Nos brinda varias herramientas para gestionar el input . Por ejemplo tenemos el setValue() para modificar el field.value .
- Conclusión: Nos devuelve un array con lo necesario para gestionar UN input y conectarlo a &lt;Formik>

LogIn.jsx
```js
import { Formik, useField } from "formik";
import { Button, StyleSheet, TextInput, View } from "react-native";
import StyleTextInput from "../components/StyledTextInput";

const initialValues = {
  email: "",
  password: "",
};

const styles = StyleSheet.create({
    form : {
        margin:12
    }
})

const FormikInputValue = ({name , ...props}) => {
    const [field , meta , helpers] = useField(name)
   

    return (
        <StyleTextInput
        value={field.value}
        onChangeText={value => helpers.setValue(value)}
        {...props}
      ></StyleTextInput>
    )
}

export default function LogInPage() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({  handleSubmit }) => {
        return (
          <View style={styles.form}>
          
            <FormikInputValue
            name='email'
              placeholder="E-mail"
              
            />  
              <FormikInputValue
              name='password'
              placeholder="Password"
              secureTextEntry 
            />
            <Button onPress={handleSubmit} title="Log In" />
          </View>
        );
      }}
    </Formik>
  );
}

```

:::tip Observación
Solamente usamos la funcionalidad handleSubmit , las otras dos no la necesitamos gracias al Hook 
:::


## Validaciones con Formik
- En Formik se puede validar en dos formas.
### 1 Forma

#### 1- Crear una funcion que recibe todos los valores del formulario.


- Esta funcion realizara las validaciones y retornara un objeto que va a contener los errores.
- Este objeto estará vacío si las validaciones se hicieron correctamente, en caso contrario tendrá mensajes.
- Cada propiedad de este objeto representa el name (nombre) del input. Las propiedades suelen coincidir con las del objeto que se le pasa a la props  initialValues de Formik.

```js
const validate = values => {
    errors = {}
    if (!values.email) {
        errors.email = 'Required';
    } else if (/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    console.log(errors);
    return errors
}

```
#### 2-  A través de la props validate de &lt;Formik>  especificamos que funcion se ejecutara para validar los campos (input) del formulario.

```js
  <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values);
      }}
      validate={validate}
    >

```
:::tip Observación
Si lo implementaste, te darás cuenta que las validaciones se hacen en tiempo real, cada vez que se modifique el valor del input se ejecutara la funcion validate.

:::

#### 3- Tenemos que comprobar si existe errores en el formulario, para poder mostrárselo al usuario.


LogIn.jsx
```js
import { Formik, useField } from "formik";
import { Button, StyleSheet, TextInput, View } from "react-native";
import StyleTextInput from "../components/StyledTextInput";
import StyleText from "../components/StyledText";
const initialValues = {
  email: "",
  password: "",
};

const styles = StyleSheet.create({
    form : {
        margin:12
    } ,
    error : {
        color:'red' ,
        fontSize:15,
        marginBottom:20,
        marginTop:-5
    }
})

const validate = values => {
    errors = {}
    if (!values.email) {
        errors.email = 'Obligatorio';
    } else if (!/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/.test(values.email)) {
        errors.email = 'Email invalido';
    }

    console.log(errors);
    return errors
}

const FormikInputValue = ({name , ...props}) => {
    const [field , meta , helpers] = useField(name)
   

    return (
        <>
        <StyleTextInput
        value={field.value}
        onChangeText={value => helpers.setValue(value)}
        {...props}
      ></StyleTextInput>
      {meta.error && <StyleText style={styles.error}> {meta.error}</StyleText>}
      </>
    )
}

export default function LogInPage() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values);
      }}
      validate={validate}
    >
      {({  handleSubmit }) => {
        return (
          <View style={styles.form}>
          
            <FormikInputValue
            name='email'
              placeholder="E-mail"
              
            />  
              <FormikInputValue
              name='password'
              placeholder="Password"
              secureTextEntry 
            />
            <Button onPress={handleSubmit} title="Log In" />
          </View>
        );
      }}
    </Formik>
  );
}

```
:::tip Observación
- Con meta.error comprobamos si existe un  error de validación.
- Si el objeto que retorna la funcion validate tiene mensajes, lo tendrá el valor de la propiedad error.
- Si el objeto que retorna la funcion validate no tiene mensajes (esta vacio), la propiedad error no existe.
- Solo tendrás acceso a los mensajes de un input  especifico (corresponde al nombre del input).


:::

#### Bordes del input
StyledTextInput.jsx
```js
import { StyleSheet, TextInput } from "react-native";

const styles = StyleSheet.create(
    {
       textInput: {
        borderRadius:5,
        borderWidth:1,
        borderColor: '#999' ,
        paddingHorizontal:20,
        paddingVertical:10 ,
        marginBottom:10
       } ,
       error : {
         borderColor:'red'
       }
    }
)

const StyleTextInput = ({style = {}, error , ...props}) => {
   const inputStyle = [
     styles.textInput ,
     style , 
     error && styles.error
   ]

   return <TextInput style={inputStyle} {...props}/>
}

export default StyleTextInput;

```
LogIn.jsx
```js
const FormikInputValue = ({name , ...props}) => {
    const [field , meta , helpers] = useField(name)
   

    return (
        <>
        <StyleTextInput
        error = {meta.error}
        value={field.value}
        onChangeText={value => helpers.setValue(value)}
        {...props}
        
      ></StyleTextInput>
      {meta.error && <StyleText style={styles.error}> {meta.error}</StyleText>}
      </>
    )
}

```

#### Esta forma es útil cuando:
-	Tenes las validaciones de otro formulario y la quieres reciclar.
-	Son campos (input) muy complejos
-	El formulario es muy sencillo

### 2 Forma
- En lugar de escribir las validaciones de forma manual como en la primera forma , formik  acepta bibliotecas de terceros para validar.
- La segunda forma es utilizar YUP para validar.
#### YUP
- YUP es un creador de esquema de validacion para formularios, objetos, etc.
- A través de un objeto indicas las validaciones de cada campo.

#### Pasos
#### 1- Instalación
```powershell
npm i yup
```
#### 2- Esquema
- Hay que construir una validacion para el esquema.
- El esquema es la información que queremos obtener del formulario . Por ejemplo email, password , etc.
#### yup.object().shape()
- El método yup.object().shape() define la forma del objeto.
- Recibe un objeto cuyas propiedades deberían ser igual que las del objeto initialValues ya que es la información que queremos obtener del formulario.
- El valor de cada propiedad es la validacion que se realiza en ese campo.
- Basicamente estas especificando “como debería ser” un objeto, especificando si una propiedad es obligatoria , si es String , etc.
#### Metodos de validación
- Los métodos de validacion lo tiene yup 
- Por defecto hay mensajes de errores establecidos por yup pero los podes modificar
- Los métodos de validacion pueden recibir un mensaje de error como String.

\src\validationSchemas\login.js
```js
import * as yup from 'yup'


export const loginValidationSchema = yup.object().shape({
    // El email debe ser string , un correo y es obligatorio
   email : yup
   .string()
   .email()
   .required("El Email es obligatorio"),
//    El password debe ser string , con un minimo de 5 caracteres , un maximo de 1000 caracteres y es obligatorio
   password:yup.
   string()
   .min(5 , "Minimo 5 caracteres")
   .max(1000 , "Muy largo!!")
   .required('El password es obligatorio')
})

```

:::tip Observación
- Lo que devuelve una validacion, se utiliza para realizar otra validacion.



:::
#### 3-  Formik tiene la props validationSchema , el cual recibe el esquema  de validación para usar en el formulario.

LogIn.jsx
- Lo que devuelve yup.object().shape() es un esquema de validación. 


```js
import { Formik, useField } from "formik";
import { Button, StyleSheet, TextInput, View } from "react-native";
import StyleTextInput from "../components/StyledTextInput";
import StyleText from "../components/StyledText";
import { loginValidationSchema } from "../validationSchemas/login";
const initialValues = {
  email: "",
  password: "",
};

const styles = StyleSheet.create({
    form : {
        margin:12
    } ,
    error : {
        color:'red' ,
        fontSize:15,
        marginBottom:20,
        marginTop:-5
    }
})



const FormikInputValue = ({name , ...props}) => {
    const [field , meta , helpers] = useField(name)
   

    return (
        <>
        <StyleTextInput
        error = {meta.error}
        value={field.value}
        onChangeText={value => helpers.setValue(value)}
        {...props}
        
      ></StyleTextInput>
      {meta.error && <StyleText style={styles.error}> {meta.error}</StyleText>}
      </>
    )
}

export default function LogInPage() {
  return (
    <Formik
    validationSchema={loginValidationSchema}
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({  handleSubmit }) => {
        return (
          <View style={styles.form}>
          
            <FormikInputValue
            name='email'
              placeholder="E-mail"
              
            />  
              <FormikInputValue
              name='password'
              placeholder="Password"
              secureTextEntry 
            />
            <Button onPress={handleSubmit} title="Log In" />
          </View>
        );
      }}
    </Formik>
  );
}

```
:::tip Observación
- Se comprueba que el objeto values (Contiene todos los inputs y valores del formulario) cumpla con el esquema de validación.
- Si el esquema no se cumple, se mostrarán los mensajes definidos por yup o el Desarollador
- Para que el método handleSubmit() (se encarga de enviar el formulario) se ejecute , el objeto values debe cumplir con TODO el esquema de validación.


:::

## Backend

- Para el proyecto utilizamos esto: [rate-repository-api](https://github.com/fullstack-hy2020/rate-repository-api)


#### Pasos
1. Se clona el repositorio 
2. Se entra al proyecto y instalas las dependencias con npm i
3. En Github:  Settings – Developer setting – Oauth Apps – New App
- Datos de la aplicación:
   - Application name : Rate Repository App
   - Homepage URL: cualquier url , en mi caso https://fede.dev
   - Authorization callback URL : Es el puerto en donde se inicia el backend , en mi caso http://localhost:5000
   - Registramos la App con estos datos
4. En el  proyecto creamos un .env con los datos de la App que creamos . Los datos que necesita el .env se encuentra en .env.template (Solo los dos github key) 
5. En el proyecto ejecutamos npm run build
6. Luego ejecutamos “npm run seed:run” para llenar la BD de datos aleatorios
7. Por ultimo ejecutamos npm start
8. Si hiciste todo bien , al hacer una solicitud get en http://localhost:5000/api/repositories , te debería responder el backend.


## Consumir backend
- Fetch y Axios están disponible en React native.


src\components\RepositoryList.jsx
```js
import {  Text, FlatList } from "react-native";
import RepositoryItem from "./RepositoryItem";
import { useState , useEffect } from "react";

const RepositoryList = () => {
  const [repositories , setRepositories] = useState(null)

  const fetchRepositories = async () => {
    const response = await globalThis.fetch('http://192.168.100.2:5000/api/repositories');
    const json = await response.json()
    setRepositories(json);
  }

  useEffect(()=> {
    fetchRepositories()
  } , [])

  const repositoriesNodes = repositories ? repositories.edges.map((edge)=> {
        return edge.node
  }) : []
  
  return (
      <FlatList
        data={repositoriesNodes}
        ItemSeparatorComponent={ () => (<Text></Text>)}
        renderItem={({ item: repo }) => (
         <RepositoryItem  {...repo}/>
        )}
      />
  );
};

export default RepositoryList;

```
:::warning
- Si no funciona el fetch con la url http://localhost:5000/api/repositories, remplazamos la palabra localhost por la IP del pc en la que está ejecutando el backend. 
- Abrir configuración de red e internet – Propiedades – Buscar la Dirección Ipv4 , esa sería la IP de la PC en la red local.
- También expo te muestra la ip de la PC en la que se esta ejecutando.
- Este problema suele pasar en Android, ya que el locahost seria el “propio dispositivo”.


:::

## Hook useRepositories

src\hooks\useRepositories.js
```js
import { useState , useEffect } from "react";
const useRepositories = () => {
    const [repositories , setRepositories] = useState(null);
    const fetchRepositories = async () => {
      const response = await globalThis.fetch('http://192.168.100.2:5000/api/repositories');
      const json = await response.json()
      setRepositories(json);
    }
  
    useEffect(()=> {
      fetchRepositories()
    } , [])
  
    const repositoriesNodes = repositories ? repositories.edges.map((edge)=> {
          return edge.node
    }) : []
  
  
    return {repositories : repositoriesNodes}
  }

  export default useRepositories;

```
src\components\RepositoryList.jsx
```js
import {  Text, FlatList } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";



const RepositoryList = () => {

  const {repositories} = useRepositories();
  
  return (
      <FlatList
        data={repositories}
        ItemSeparatorComponent={ () => (<Text></Text>)}
        renderItem={({ item: repo }) => (
         <RepositoryItem  {...repo}/>
        )}
      />
  );
};

export default RepositoryList;

```

:::tip hook
- Un hook debe ser una “caja negra” , no debemos saber nada de la “implementación” al ejecutarlo.
- En este ejemplo, el componente que lo usa, no sabe si se hace por axios , fetch , etc.
- Entonces los hooks se usan para realizar tareas sin saber “como” se hacen dichas tareas.


:::


:::tip
- Tambien podes utilizar Apollo y Graphql Para consumir un backend.
- Intenta adaptar este proyecto con el Apollo que te brinda la API....


:::