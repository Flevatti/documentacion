---
sidebar_position: 2
---
# Extra
## MapView
- react-native-maps proporciona un componente MapView que utiliza Google Maps en Android y Apple Maps o Google Maps en iOS.
- No se requiere configuración adicional al probar su proyecto con Expo Go. Sin embargo, para implementar el binario de la aplicación en las tiendas de aplicaciones, [se requieren pasos adicionales para Google Maps](https://docs.expo.dev/versions/latest/sdk/map-view/#deploy-app-with-google-maps).


#### Instalación
```powershell
npx expo install react-native-maps
```
#### Ejemplo
```js
import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
export default function App() {
  return (
    <View style={styles.container}>
      <Text>MapView</Text>
      <MapView style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

```
:::tip Observación
Implementa Google Maps en Android.
:::

:::tip
- [Lista de todos los componentes que brinda  react-native-maps](https://github.com/react-native-maps/react-native-maps#component-api )
- [Listado de props y eventos del componente MapView](https://github.com/react-native-maps/react-native-maps/blob/master/docs/mapview.md )
- [Documentación](https://github.com/react-native-maps/react-native-maps )
:::

## React Navigation
- [Documentación](https://reactnavigation.org/docs/getting-started/s)


#### Instalación
```powershell
npm install @react-navigation/native
```
- También  tenemos que instala las dependencias utilizadas por la mayoría de los navegadores.

```powershell
npx expo install react-native-screens react-native-safe-area-context
```
- Ahora tenemos que instalar “librerías” de React navigation.
- React Navigation nos permite navegar por la App de diferentes maneras, por ejemplo: Stack ,  Tabs , Modal , Drawer Y Deep linking.
- Cada manera puede requerir algunas librerías o no.


### Tabs Navigator
- Primero vamos a usar [Tabs Navigator](https://reactnavigation.org/docs/tab-based-navigation/)
- Luego implementaremos [Stack Navigator](https://reactnavigation.org/docs/stack-navigator/)

#### Instalación
```powershell
npm install @react-navigation/bottom-tabs
npm install @react-navigation/stack
npx expo install react-native-gesture-handler
```

#### Views
- Creamos los componentes que se van a mostrar en una "url" o pantalla.
- Los ubicamos en una carpeta llamada screens

screens\HomeScreen.js
```jsx
import { View, Text } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text style={{ fontSize: 30, textAlign: "center", marginTop: "20%" }}>
        Home Screen
      </Text>
    </View>
  );
};

export default HomeScreen;

```
screens\SettingsScreen.js
```jsx
import { View, Text } from "react-native";

const SettingsScreen = () => {
  return (
    <View>
      <Text style={{ fontSize: 30, textAlign: "center", marginTop: "20%" }}>
        Settings Screen
      </Text>
    </View>
  );
};

export default SettingsScreen;

```
screens\StackScreen.js

```jsx
import { View, Text } from "react-native";

const StackScreen = () => {
  return (
    <View>
      <Text style={{ fontSize: 30, textAlign: "center", marginTop: "20%" }}>
        Stack Screen
      </Text>
    </View>
  );
};

export default StackScreen;

```

:::tip
Al terminar este apartado, te reto a modificar lo que hicimos para poner este componente en el menu con un stack navigator.
:::


#### Navigation
- Es importante que la navegación este en un solo archivo.

Navigation.js

```js
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";

// Creamos una Tab Navigator con el metodo createBottomTabNavigator
// De esta manera la variable Tab contiene toda la informacion de tabs
const Tab = createBottomTabNavigator();

// Creamos el componente MyTabs

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
      <Tab.Screen name="Settings" component={SettingsScreen}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

```

:::tip Explicación
- Toda la navegación se debe encontrar adentro del componente NavigationContainer
- Con el método createBottomTabNavigator() creamos un Tab Navigator
- Debemos crear un componente que renderice los tabs (en este caso MyTabs) , este debe contener:
    - El componente Tab.Navigator , adentro de este se ubican los componentes Tab.Screen
    - El Componente Tab.Screen tiene dos props:
         - Name: El “nombre” de la pantalla, este se mostrará como el titulo arriba de todo.
         - Component: El componente a renderizar en la pantalla con el nombre X (especificado en la prop name).
- Este componente que renderíce los tabs , no se debe exportar.
- Debemos crear un componente “Navigation” , este si se debe exportar para su posterior uso.
- El componente "Navigation" , debe contener:
     -	El componente NavigationContainer , que debe “envolver” toda la navegación .
     -	Adentro del componente NavigationContainer , ponemos el componente que renderiza los tabs.

:::

App.js
- Renderizamos en la App el componente “Navigation” que creamos.
```jsx
import Navigation from "./Navigation";

export default function App() {
  return <Navigation />;
}

```

:::tip LISTO
Y Con esto ya tenemos un menu con tabs.

:::


#### PROPS de tab.navigator
- Vamos a usar [las Props del Tab.Navigator](https://reactnavigation.org/docs/bottom-tab-navigator/)

##### Prop initialRouteName
- Recibe un string con el nombre de la ruta
- Especifica la ruta inicial

```jsx
 <Tab.Navigator initialRouteName="Settings">
```
##### Prop screenOptions
- Recibe un objeto
- Especifica las opciones de la "pantalla" del navigator
- [Click Aquí para ver las opciones ](https://reactnavigation.org/docs/bottom-tab-navigator/#options)


Ejemplo

tabBarActiveTintColor : El color del icono y del texto de la pestaña activa.


```jsx
 <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ tabBarActiveTintColor: "red" }}
    >

```

#### Props de tab.screen
- Las props name y component son obligatorias en el tab.screen
- Pero aparte de estas dos, se le puede agregar una prop más.

##### Prop options
- Recibe un objeto
- Son Opciones, contiene [los mismo valores que la prop screenOptions](https://reactnavigation.org/docs/bottom-tab-navigator#options)


Ejemplo


tabBarLabel : El String (titulo) de una pestaña que se muestra en la barra de pestañas.

```jsx
 <Tab.Screen
        options={{
          tabBarLabel: "Casa",
        }}
        name="Home"
        component={HomeScreen}
      ></Tab.Screen>

```

tabBarIcon :  Un componente React (función) .

Este componente React , sera el “icono” en la barra de pestañas.

Esta funcion recibe como props el color , size y focused


```jsx
 <Tab.Screen
        options={{
          tabBarLabel: "Casa",
          tabBarIcon: ({ color, size, focused }) => {
            console.log(focused);
            return <Entypo name="home" size={size} color={color} />;
          },
        }}
        name="Home"
        component={HomeScreen}
      ></Tab.Screen>

```

:::tip Componentes iconos
- Expo nos ofrecer una [biblioteca de iconos](https://docs.expo.dev/guides/icons/)  para usar en el proyecto.
- Acá tenes un [listado de todos los iconos](https://icons.expo.fyi/) 
:::


tabBarBadge: Numero . Es para las notificaciones o algo no visto.

```jsx
 options={{
          tabBarLabel: "Casa",
          tabBarIcon: ({ color, size, focused }) => {
            console.log(focused);
            return <Entypo name="home" size={size} color={color} />;
          },
          tabBarBadge: 3,
        }}

```

headerShown: valor booleano. Es para ocultar o mostrar el encabezado de la pantalla.
```jsx
 <Tab.Screen
        options={{
          tabBarLabel: "Casa",
          tabBarIcon: ({ color, size, focused }) => {
            console.log(focused);
            return <Entypo name="home" size={size} color={color} />;
          },
          tabBarBadge: 3,
          headerShown: false,
        }}
        name="Home"
        component={HomeScreen}
      ></Tab.Screen>

```
### Stack Navigator
- Ahora vamos a implementar [stack navigator](https://reactnavigation.org/docs/stack-navigator/)
#### Instalación

```powershell
npm install @react-navigation/stack
npx expo install react-native-gesture-handler
```
#### Navigation
 - El proceso es casi lo mismo que con Tabs navigator.


Navigation.js

```jsx
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { createStackNavigator } from "@react-navigation/stack";
const Tab = createBottomTabNavigator();
// Creamos el stack navigator
const HomeStackNavigator = createStackNavigator();

// Creamos el componente MyStack
const MyStack = () => {
  return (
    <HomeStackNavigator.Navigator initialRouteName="HomeScreen">
      <HomeStackNavigator.Screen
        name="HomeScreen"
        component={HomeScreen}
      ></HomeStackNavigator.Screen>
      <HomeStackNavigator.Screen
        name="Settings"
        component={SettingsScreen}
      ></HomeStackNavigator.Screen>
    </HomeStackNavigator.Navigator>
  );
};

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ tabBarActiveTintColor: "red" }}
    >
      <Tab.Screen
        name="Home"
        component={MyStack}
        options={{
          headerShown: false,
        }}
      ></Tab.Screen>
      <Tab.Screen name="Settings" component={SettingsScreen}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

```
:::tip Explicación
- En lugar de usar Tab.Navigator usamos HomeStackNavigator.Navigator
- En lugar de usar Tab.Screen usamos HomeStackNavigator.Screen
- En lugar de usar createBottomTabNavigator() usamos createStackNavigator()
- En ambos creamos un componente que se encarga de renderizar su “menu” (navigator). Este componente no se exporta.
- Tienen las mismas props y [otras nuevas](https://reactnavigation.org/docs/stack-navigator#header-related-options) 
- El componente que renderiza el stack navigator, se renderizara en una pantalla de tab.screen (Home)
:::

### Redireccionar

#### Botones
- Como Stack Navigator no te ofrece un menu para navegar, solo te ofrece un boton para volver atrás, tenemos que crear nosotros los botones o links que te lleven a otra pantalla.
- Le añadimos botones a las dos pantallas.


screens\SettingsScreen.js
```jsx
const SettingsScreen = () => {
  return (
    <View>
      <Text style={{ fontSize: 30, textAlign: "center", marginTop: "20%" }}>
        Settings Screen
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: "purple",
          padding: 10,
          width: "50%",
          alignSelf: "center",
          borderRadius: 10,
          marginTop: "20%",
        }}
      >
        <Text
          style={{
            fontSize: 15,
            textAlign: "center",
            color: "white",
          }}
        >
          {" "}
          Ir a Home
        </Text>
      </TouchableOpacity>
    </View>
  );
};

```
screens\HomeScreen.js
```jsx
const HomeScreen = () => {
  return (
    <View>
      <Text style={{ fontSize: 30, textAlign: "center", marginTop: "20%" }}>
        Home Screen
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: "purple",
          padding: 10,
          width: "50%",
          alignSelf: "center",
          borderRadius: 10,
          marginTop: "20%",
        }}
      >
        <Text
          style={{
            fontSize: 15,
            textAlign: "center",
            color: "white",
          }}
        >
          {" "}
          Ir a Ajustes
        </Text>
      </TouchableOpacity>
    </View>
  );
};

```

#### Hook useNavigation()
- Ahora usamos el hook [useNavigation](https://reactnavigation.org/docs/use-navigation/)  para navegar entre pantallas.
- Tiene el método navigate() que recibe el nombre de la ruta (que se especifico con la props name) a redireccionar.

screens\HomeScreen.js
```jsx
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={{ fontSize: 30, textAlign: "center", marginTop: "20%" }}>
        Home Screen
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Settings");
        }}
        style={{
          backgroundColor: "purple",
          padding: 10,
          width: "50%",
          alignSelf: "center",
          borderRadius: 10,
          marginTop: "20%",
        }}
      >
        <Text
          style={{
            fontSize: 15,
            textAlign: "center",
            color: "white",
          }}
        >
          {" "}
          Ir a Ajustes
        </Text>
      </TouchableOpacity>
    </View>
  );
};

```
:::tip observación
- Y con esto, podes moverte a la ruta settings.
- Y gracias al stack navigator , podes irte hacia atrás (al home) también.
:::

:::tip
Lo que devuelve este hook, se puede conseguir a través de una [prop del componente](https://reactnavigation.org/docs/navigating) 
:::

:::tip
[Un listado con todos los métodos/eventos](https://reactnavigation.org/docs/navigation-prop) que contiene useNavigator() o la props navigation 

:::