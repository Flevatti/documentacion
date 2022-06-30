"use strict";(self.webpackChunkdocumentacion=self.webpackChunkdocumentacion||[]).push([[9122],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(t),g=a,d=m["".concat(l,".").concat(g)]||m[g]||u[g]||o;return t?r.createElement(d,i(i({ref:n},p),{},{components:t})):r.createElement(d,i({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8213:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const o={sidebar_position:4},i="Try Catch",c={unversionedId:"Java/excepciones",id:"Java/excepciones",title:"Try Catch",description:"Multiple excepciones",source:"@site/docs/Java/excepciones.md",sourceDirName:"Java",slug:"/Java/excepciones",permalink:"/documentacion/docs/Java/excepciones",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Java/excepciones.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"Java",previous:{title:"Interfaz Grafica",permalink:"/documentacion/docs/Java/interfaz"}},l={},s=[{value:"Multiple excepciones",id:"multiple-excepciones",level:2},{value:"new throw and finally",id:"new-throw-and-finally",level:2},{value:"Throws y Excepcion Propia",id:"throws-y-excepcion-propia",level:2}],p={toc:s};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"try-catch"},"Try Catch"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'    try {\n                Sistema sis = new Sistema(Integer.parseInt(textCarnet.getText()) , textNombre.getText() , textCarrera.getText() ,\n                        Integer.parseInt(textIngreso.getText())); \n            \n            if (dao.modificar(sis)) {\n                JOptionPane.showMessageDialog(null, "Exito");\n            } else {\n                JOptionPane.showMessageDialog(null, "Error al modificar");\n            }\n                }catch(Exception e) {\n                    System.out.println("EXCEPCION TIRADA");\n                    System.out.print(e.getMessage());\n                    System.out.println(e.getCause());\n                    System.out.println(e.getStackTrace());\n                    \n                }\n')),(0,a.kt)("h2",{id:"multiple-excepciones"},"Multiple excepciones"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Generalmente va del mas especifico al mas general")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'    try {\n                Sistema sis = new Sistema(Integer.parseInt(textCarnet.getText()) , textNombre.getText() , textCarrera.getText() ,\n                        Integer.parseInt(textIngreso.getText())); \n            \n            if (dao.modificar(sis)) {\n                JOptionPane.showMessageDialog(null, "Exito");\n            } else {\n                JOptionPane.showMessageDialog(null, "Error al modificar");\n            }\n            \n                }\n                catch(NumberFormatException e) {\n                    System.out.println("Mas especifico");\n                }\n                catch(Exception e) {\n                    System.out.println("EXCEPCION TIRADA");\n                    System.out.print(e.getMessage());\n                    System.out.println(e.getCause());\n                    System.out.println(e.getStackTrace());\n                    \n                }\n')),(0,a.kt)("h2",{id:"new-throw-and-finally"},"new throw and finally"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'try {\n                    throw new Exception("ERROR GENERADO POR EL DESARROLLADOR");\n                } catch (Exception e) {\n                    System.out.println(e.getMessage());\n                } finally {\n                    System.out.println("Se ejecuta al final \\n");\n                }\n')),(0,a.kt)("h2",{id:"throws-y-excepcion-propia"},"Throws y Excepcion Propia"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Throws: Para avisar/especificar que el metodo puede lanzar una excepcion ")),(0,a.kt)("p",null,"Excepcion Propia: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package vistas;\n\npublic class ExcepcionPropia extends Exception {\n\n    ExcepcionPropia(String mensaje) {\n        \n        super(mensaje);\n        System.out.println("Salto mi excepcion Propia")\n    }\n    \n    \n}\n\n')),(0,a.kt)("p",null,"Un metodo que lanza esa excepcion "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'    public void  generarError() throws ExcepcionPropia {\n        throw new ExcepcionPropia("ERROR ESPECIALIZADO");\n    }\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"    try {\n                    generarError();\n                } catch (ExcepcionPropia e1) {\n                    System.out.println(e1.getMessage());\n                }\n")))}u.isMDXComponent=!0}}]);