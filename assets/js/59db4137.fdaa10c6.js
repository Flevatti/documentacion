"use strict";(self.webpackChunkdocumentacion=self.webpackChunkdocumentacion||[]).push([[9577],{3905:(e,a,n)=>{n.d(a,{Zo:()=>p,kt:()=>u});var t=n(7294);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),c=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},p=function(e){var a=c(e.components);return t.createElement(s.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,v=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return n?t.createElement(v,r(r({ref:a},p),{},{components:n})):t.createElement(v,r({ref:a},p))}));function u(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3313:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=n(7462),o=(n(7294),n(3905));const i={sidebar_position:2},r="Extra",l={unversionedId:"React-Native/extra",id:"React-Native/extra",title:"Extra",description:"MapView",source:"@site/docs/React-Native/extra.md",sourceDirName:"React-Native",slug:"/React-Native/extra",permalink:"/documentacion/docs/React-Native/extra",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/React-Native/extra.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"ReactNative",previous:{title:"Proyecto 1",permalink:"/documentacion/docs/React-Native/"}},s={},c=[{value:"MapView",id:"mapview",level:2},{value:"Instalaci\xf3n",id:"instalaci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"React Navigation",id:"react-navigation",level:2},{value:"Instalaci\xf3n",id:"instalaci\xf3n-1",level:4},{value:"Tabs Navigator",id:"tabs-navigator",level:3},{value:"Instalaci\xf3n",id:"instalaci\xf3n-2",level:4},{value:"Views",id:"views",level:4},{value:"Navigation",id:"navigation",level:4},{value:"PROPS de tab.navigator",id:"props-de-tabnavigator",level:4},{value:"Prop initialRouteName",id:"prop-initialroutename",level:5},{value:"Prop screenOptions",id:"prop-screenoptions",level:5},{value:"Props de tab.screen",id:"props-de-tabscreen",level:4},{value:"Prop options",id:"prop-options",level:5},{value:"Stack Navigator",id:"stack-navigator",level:3},{value:"Instalaci\xf3n",id:"instalaci\xf3n-3",level:4},{value:"Navigation",id:"navigation-1",level:4},{value:"Redireccionar",id:"redireccionar",level:3},{value:"Botones",id:"botones",level:4},{value:"Hook useNavigation()",id:"hook-usenavigation",level:4}],p={toc:c};function m(e){let{components:a,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"extra"},"Extra"),(0,o.kt)("h2",{id:"mapview"},"MapView"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"react-native-maps proporciona un componente MapView que utiliza Google Maps en Android y Apple Maps o Google Maps en iOS."),(0,o.kt)("li",{parentName:"ul"},"No se requiere configuraci\xf3n adicional al probar su proyecto con Expo Go. Sin embargo, para implementar el binario de la aplicaci\xf3n en las tiendas de aplicaciones, ",(0,o.kt)("a",{parentName:"li",href:"https://docs.expo.dev/versions/latest/sdk/map-view/#deploy-app-with-google-maps"},"se requieren pasos adicionales para Google Maps"),".")),(0,o.kt)("h4",{id:"instalaci\xf3n"},"Instalaci\xf3n"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"npx expo install react-native-maps\n")),(0,o.kt)("h4",{id:"ejemplo"},"Ejemplo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { StyleSheet, Text, View } from "react-native";\nimport MapView from "react-native-maps";\nexport default function App() {\n  return (\n    <View style={styles.container}>\n      <Text>MapView</Text>\n      <MapView style={styles.map} />\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: "#fff",\n    alignItems: "center",\n    justifyContent: "center",\n  },\n  map: {\n    width: "100%",\n    height: "100%",\n  },\n});\n\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Observaci\xf3n")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Implementa Google Maps en Android."))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/react-native-maps/react-native-maps#component-api"},"Lista de todos los componentes que brinda  react-native-maps")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/react-native-maps/react-native-maps/blob/master/docs/mapview.md"},"Listado de props y eventos del componente MapView")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/react-native-maps/react-native-maps"},"Documentaci\xf3n"))))),(0,o.kt)("h2",{id:"react-navigation"},"React Navigation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://reactnavigation.org/docs/getting-started/s"},"Documentaci\xf3n"))),(0,o.kt)("h4",{id:"instalaci\xf3n-1"},"Instalaci\xf3n"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"npm install @react-navigation/native\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Tambi\xe9n  tenemos que instala las dependencias utilizadas por la mayor\xeda de los navegadores.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"npx expo install react-native-screens react-native-safe-area-context\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ahora tenemos que instalar \u201clibrer\xedas\u201d de React navigation."),(0,o.kt)("li",{parentName:"ul"},"React Navigation nos permite navegar por la App de diferentes maneras, por ejemplo: Stack ,  Tabs , Modal , Drawer Y Deep linking."),(0,o.kt)("li",{parentName:"ul"},"Cada manera puede requerir algunas librer\xedas o no.")),(0,o.kt)("h3",{id:"tabs-navigator"},"Tabs Navigator"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Primero vamos a usar ",(0,o.kt)("a",{parentName:"li",href:"https://reactnavigation.org/docs/tab-based-navigation/"},"Tabs Navigator")),(0,o.kt)("li",{parentName:"ul"},"Luego implementaremos ",(0,o.kt)("a",{parentName:"li",href:"https://reactnavigation.org/docs/stack-navigator/"},"Stack Navigator"))),(0,o.kt)("h4",{id:"instalaci\xf3n-2"},"Instalaci\xf3n"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"npm install @react-navigation/bottom-tabs\nnpm install @react-navigation/stack\nnpx expo install react-native-gesture-handler\n")),(0,o.kt)("h4",{id:"views"},"Views"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Creamos los componentes que se van a mostrar en una "url" o pantalla.'),(0,o.kt)("li",{parentName:"ul"},"Los ubicamos en una carpeta llamada screens")),(0,o.kt)("p",null,"screens\\HomeScreen.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { View, Text } from "react-native";\n\nconst HomeScreen = () => {\n  return (\n    <View>\n      <Text style={{ fontSize: 30, textAlign: "center", marginTop: "20%" }}>\n        Home Screen\n      </Text>\n    </View>\n  );\n};\n\nexport default HomeScreen;\n\n')),(0,o.kt)("p",null,"screens\\SettingsScreen.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { View, Text } from "react-native";\n\nconst SettingsScreen = () => {\n  return (\n    <View>\n      <Text style={{ fontSize: 30, textAlign: "center", marginTop: "20%" }}>\n        Settings Screen\n      </Text>\n    </View>\n  );\n};\n\nexport default SettingsScreen;\n\n')),(0,o.kt)("p",null,"screens\\StackScreen.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { View, Text } from "react-native";\n\nconst StackScreen = () => {\n  return (\n    <View>\n      <Text style={{ fontSize: 30, textAlign: "center", marginTop: "20%" }}>\n        Stack Screen\n      </Text>\n    </View>\n  );\n};\n\nexport default StackScreen;\n\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Al terminar este apartado, te reto a modificar lo que hicimos para poner este componente en el menu con un stack navigator."))),(0,o.kt)("h4",{id:"navigation"},"Navigation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Es importante que la navegaci\xf3n este en un solo archivo.")),(0,o.kt)("p",null,"Navigation.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";\nimport { NavigationContainer } from "@react-navigation/native";\nimport HomeScreen from "./screens/HomeScreen";\nimport SettingsScreen from "./screens/SettingsScreen";\n\n// Creamos una Tab Navigator con el metodo createBottomTabNavigator\n// De esta manera la variable Tab contiene toda la informacion de tabs\nconst Tab = createBottomTabNavigator();\n\n// Creamos el componente MyTabs\n\nconst MyTabs = () => {\n  return (\n    <Tab.Navigator>\n      <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>\n      <Tab.Screen name="Settings" component={SettingsScreen}></Tab.Screen>\n    </Tab.Navigator>\n  );\n};\n\nexport default function Navigation() {\n  return (\n    <NavigationContainer>\n      <MyTabs />\n    </NavigationContainer>\n  );\n}\n\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Explicaci\xf3n")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"Toda la navegaci\xf3n se debe encontrar adentro del componente NavigationContainer"),(0,o.kt)("li",{parentName:"ul"},"Con el m\xe9todo createBottomTabNavigator() creamos un Tab Navigator"),(0,o.kt)("li",{parentName:"ul"},"Debemos crear un componente que renderice los tabs (en este caso MyTabs) , este debe contener:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"El componente Tab.Navigator , adentro de este se ubican los componentes Tab.Screen"),(0,o.kt)("li",{parentName:"ul"},"El Componente Tab.Screen tiene dos props:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Name: El \u201cnombre\u201d de la pantalla, este se mostrar\xe1 como el titulo arriba de todo."),(0,o.kt)("li",{parentName:"ul"},"Component: El componente a renderizar en la pantalla con el nombre X (especificado en la prop name)."))))),(0,o.kt)("li",{parentName:"ul"},"Este componente que render\xedce los tabs , no se debe exportar."),(0,o.kt)("li",{parentName:"ul"},"Debemos crear un componente \u201cNavigation\u201d , este si se debe exportar para su posterior uso."),(0,o.kt)("li",{parentName:"ul"},'El componente "Navigation" , debe contener:',(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"El componente NavigationContainer , que debe \u201cenvolver\u201d toda la navegaci\xf3n ."),(0,o.kt)("li",{parentName:"ul"},"Adentro del componente NavigationContainer , ponemos el componente que renderiza los tabs.")))))),(0,o.kt)("p",null,"App.js"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Renderizamos en la App el componente \u201cNavigation\u201d que creamos.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import Navigation from "./Navigation";\n\nexport default function App() {\n  return <Navigation />;\n}\n\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"LISTO")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Y Con esto ya tenemos un menu con tabs."))),(0,o.kt)("h4",{id:"props-de-tabnavigator"},"PROPS de tab.navigator"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Vamos a usar ",(0,o.kt)("a",{parentName:"li",href:"https://reactnavigation.org/docs/bottom-tab-navigator/"},"las Props del Tab.Navigator"))),(0,o.kt)("h5",{id:"prop-initialroutename"},"Prop initialRouteName"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Recibe un string con el nombre de la ruta"),(0,o.kt)("li",{parentName:"ul"},"Especifica la ruta inicial")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},' <Tab.Navigator initialRouteName="Settings">\n')),(0,o.kt)("h5",{id:"prop-screenoptions"},"Prop screenOptions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Recibe un objeto"),(0,o.kt)("li",{parentName:"ul"},'Especifica las opciones de la "pantalla" del navigator'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://reactnavigation.org/docs/bottom-tab-navigator/#options"},"Click Aqu\xed para ver las opciones "))),(0,o.kt)("p",null,"Ejemplo"),(0,o.kt)("p",null,"tabBarActiveTintColor : El color del icono y del texto de la pesta\xf1a activa."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},' <Tab.Navigator\n      initialRouteName="Home"\n      screenOptions={{ tabBarActiveTintColor: "red" }}\n    >\n\n')),(0,o.kt)("h4",{id:"props-de-tabscreen"},"Props de tab.screen"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Las props name y component son obligatorias en el tab.screen"),(0,o.kt)("li",{parentName:"ul"},"Pero aparte de estas dos, se le puede agregar una prop m\xe1s.")),(0,o.kt)("h5",{id:"prop-options"},"Prop options"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Recibe un objeto"),(0,o.kt)("li",{parentName:"ul"},"Son Opciones, contiene ",(0,o.kt)("a",{parentName:"li",href:"https://reactnavigation.org/docs/bottom-tab-navigator#options"},"los mismo valores que la prop screenOptions"))),(0,o.kt)("p",null,"Ejemplo"),(0,o.kt)("p",null,"tabBarLabel : El String (titulo) de una pesta\xf1a que se muestra en la barra de pesta\xf1as."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},' <Tab.Screen\n        options={{\n          tabBarLabel: "Casa",\n        }}\n        name="Home"\n        component={HomeScreen}\n      ></Tab.Screen>\n\n')),(0,o.kt)("p",null,"tabBarIcon :  Un componente React (funci\xf3n) ."),(0,o.kt)("p",null,"Este componente React , sera el \u201cicono\u201d en la barra de pesta\xf1as."),(0,o.kt)("p",null,"Esta funcion recibe como props el color , size y focused"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},' <Tab.Screen\n        options={{\n          tabBarLabel: "Casa",\n          tabBarIcon: ({ color, size, focused }) => {\n            console.log(focused);\n            return <Entypo name="home" size={size} color={color} />;\n          },\n        }}\n        name="Home"\n        component={HomeScreen}\n      ></Tab.Screen>\n\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Componentes iconos")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"Expo nos ofrecer una ",(0,o.kt)("a",{parentName:"li",href:"https://docs.expo.dev/guides/icons/"},"biblioteca de iconos"),"  para usar en el proyecto."),(0,o.kt)("li",{parentName:"ul"},"Ac\xe1 tenes un ",(0,o.kt)("a",{parentName:"li",href:"https://icons.expo.fyi/"},"listado de todos los iconos")," ")))),(0,o.kt)("p",null,"tabBarBadge: Numero . Es para las notificaciones o algo no visto."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},' options={{\n          tabBarLabel: "Casa",\n          tabBarIcon: ({ color, size, focused }) => {\n            console.log(focused);\n            return <Entypo name="home" size={size} color={color} />;\n          },\n          tabBarBadge: 3,\n        }}\n\n')),(0,o.kt)("p",null,"headerShown: valor booleano. Es para ocultar o mostrar el encabezado de la pantalla."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},' <Tab.Screen\n        options={{\n          tabBarLabel: "Casa",\n          tabBarIcon: ({ color, size, focused }) => {\n            console.log(focused);\n            return <Entypo name="home" size={size} color={color} />;\n          },\n          tabBarBadge: 3,\n          headerShown: false,\n        }}\n        name="Home"\n        component={HomeScreen}\n      ></Tab.Screen>\n\n')),(0,o.kt)("h3",{id:"stack-navigator"},"Stack Navigator"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ahora vamos a implementar ",(0,o.kt)("a",{parentName:"li",href:"https://reactnavigation.org/docs/stack-navigator/"},"stack navigator"))),(0,o.kt)("h4",{id:"instalaci\xf3n-3"},"Instalaci\xf3n"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"npm install @react-navigation/stack\nnpx expo install react-native-gesture-handler\n")),(0,o.kt)("h4",{id:"navigation-1"},"Navigation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"El proceso es casi lo mismo que con Tabs navigator.")),(0,o.kt)("p",null,"Navigation.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";\nimport { NavigationContainer } from "@react-navigation/native";\nimport HomeScreen from "./screens/HomeScreen";\nimport SettingsScreen from "./screens/SettingsScreen";\nimport { createStackNavigator } from "@react-navigation/stack";\nconst Tab = createBottomTabNavigator();\n// Creamos el stack navigator\nconst HomeStackNavigator = createStackNavigator();\n\n// Creamos el componente MyStack\nconst MyStack = () => {\n  return (\n    <HomeStackNavigator.Navigator initialRouteName="HomeScreen">\n      <HomeStackNavigator.Screen\n        name="HomeScreen"\n        component={HomeScreen}\n      ></HomeStackNavigator.Screen>\n      <HomeStackNavigator.Screen\n        name="Settings"\n        component={SettingsScreen}\n      ></HomeStackNavigator.Screen>\n    </HomeStackNavigator.Navigator>\n  );\n};\n\nconst MyTabs = () => {\n  return (\n    <Tab.Navigator\n      initialRouteName="Home"\n      screenOptions={{ tabBarActiveTintColor: "red" }}\n    >\n      <Tab.Screen\n        name="Home"\n        component={MyStack}\n        options={{\n          headerShown: false,\n        }}\n      ></Tab.Screen>\n      <Tab.Screen name="Settings" component={SettingsScreen}></Tab.Screen>\n    </Tab.Navigator>\n  );\n};\n\nexport default function Navigation() {\n  return (\n    <NavigationContainer>\n      <MyTabs />\n    </NavigationContainer>\n  );\n}\n\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Explicaci\xf3n")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"En lugar de usar Tab.Navigator usamos HomeStackNavigator.Navigator"),(0,o.kt)("li",{parentName:"ul"},"En lugar de usar Tab.Screen usamos HomeStackNavigator.Screen"),(0,o.kt)("li",{parentName:"ul"},"En lugar de usar createBottomTabNavigator() usamos createStackNavigator()"),(0,o.kt)("li",{parentName:"ul"},"En ambos creamos un componente que se encarga de renderizar su \u201cmenu\u201d (navigator). Este componente no se exporta."),(0,o.kt)("li",{parentName:"ul"},"Tienen las mismas props y ",(0,o.kt)("a",{parentName:"li",href:"https://reactnavigation.org/docs/stack-navigator#header-related-options"},"otras nuevas")," "),(0,o.kt)("li",{parentName:"ul"},"El componente que renderiza el stack navigator, se renderizara en una pantalla de tab.screen (Home)")))),(0,o.kt)("h3",{id:"redireccionar"},"Redireccionar"),(0,o.kt)("h4",{id:"botones"},"Botones"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Como Stack Navigator no te ofrece un menu para navegar, solo te ofrece un boton para volver atr\xe1s, tenemos que crear nosotros los botones o links que te lleven a otra pantalla."),(0,o.kt)("li",{parentName:"ul"},"Le a\xf1adimos botones a las dos pantallas.")),(0,o.kt)("p",null,"screens\\SettingsScreen.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'const SettingsScreen = () => {\n  return (\n    <View>\n      <Text style={{ fontSize: 30, textAlign: "center", marginTop: "20%" }}>\n        Settings Screen\n      </Text>\n      <TouchableOpacity\n        style={{\n          backgroundColor: "purple",\n          padding: 10,\n          width: "50%",\n          alignSelf: "center",\n          borderRadius: 10,\n          marginTop: "20%",\n        }}\n      >\n        <Text\n          style={{\n            fontSize: 15,\n            textAlign: "center",\n            color: "white",\n          }}\n        >\n          {" "}\n          Ir a Home\n        </Text>\n      </TouchableOpacity>\n    </View>\n  );\n};\n\n')),(0,o.kt)("p",null,"screens\\HomeScreen.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'const HomeScreen = () => {\n  return (\n    <View>\n      <Text style={{ fontSize: 30, textAlign: "center", marginTop: "20%" }}>\n        Home Screen\n      </Text>\n      <TouchableOpacity\n        style={{\n          backgroundColor: "purple",\n          padding: 10,\n          width: "50%",\n          alignSelf: "center",\n          borderRadius: 10,\n          marginTop: "20%",\n        }}\n      >\n        <Text\n          style={{\n            fontSize: 15,\n            textAlign: "center",\n            color: "white",\n          }}\n        >\n          {" "}\n          Ir a Ajustes\n        </Text>\n      </TouchableOpacity>\n    </View>\n  );\n};\n\n')),(0,o.kt)("h4",{id:"hook-usenavigation"},"Hook useNavigation()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ahora usamos el hook ",(0,o.kt)("a",{parentName:"li",href:"https://reactnavigation.org/docs/use-navigation/"},"useNavigation"),"  para navegar entre pantallas."),(0,o.kt)("li",{parentName:"ul"},"Tiene el m\xe9todo navigate() que recibe el nombre de la ruta (que se especifico con la props name) a redireccionar.")),(0,o.kt)("p",null,"screens\\HomeScreen.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'const HomeScreen = () => {\n  const navigation = useNavigation();\n  return (\n    <View>\n      <Text style={{ fontSize: 30, textAlign: "center", marginTop: "20%" }}>\n        Home Screen\n      </Text>\n      <TouchableOpacity\n        onPress={() => {\n          navigation.navigate("Settings");\n        }}\n        style={{\n          backgroundColor: "purple",\n          padding: 10,\n          width: "50%",\n          alignSelf: "center",\n          borderRadius: 10,\n          marginTop: "20%",\n        }}\n      >\n        <Text\n          style={{\n            fontSize: 15,\n            textAlign: "center",\n            color: "white",\n          }}\n        >\n          {" "}\n          Ir a Ajustes\n        </Text>\n      </TouchableOpacity>\n    </View>\n  );\n};\n\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"observaci\xf3n")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"Y con esto, podes moverte a la ruta settings."),(0,o.kt)("li",{parentName:"ul"},"Y gracias al stack navigator , podes irte hacia atr\xe1s (al home) tambi\xe9n.")))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Lo que devuelve este hook, se puede conseguir a trav\xe9s de una ",(0,o.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/navigating"},"prop del componente")," "))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/navigation-prop"},"Un listado con todos los m\xe9todos/eventos")," que contiene useNavigator() o la props navigation "))))}m.isMDXComponent=!0}}]);