"use strict";(self.webpackChunkdocumentacion=self.webpackChunkdocumentacion||[]).push([[5889],{3905:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>p});var t=n(7294);function s(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){s(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,s=function(e,a){if(null==e)return{};var n,t,s={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(s[n]=e[n]);return s}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var r=t.createContext({}),d=function(e){var a=t.useContext(r),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},c=function(e){var a=d(e.components);return t.createElement(r.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,s=e.mdxType,o=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(n),p=s,N=m["".concat(r,".").concat(p)]||m[p]||u[p]||o;return n?t.createElement(N,i(i({ref:a},c),{},{components:n})):t.createElement(N,i({ref:a},c))}));function p(e,a){var n=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var r in a)hasOwnProperty.call(a,r)&&(l[r]=a[r]);l.originalType=e,l.mdxType="string"==typeof e?e:s,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1652:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>r,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var t=n(7462),s=(n(7294),n(3905));const o={sidebar_position:5},i="Join",l={unversionedId:"SQL/join",id:"SQL/join",title:"Join",description:"Normalizacion",source:"@site/docs/SQL/join.md",sourceDirName:"SQL",slug:"/SQL/join",permalink:"/documentacion/docs/SQL/join",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/SQL/join.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"SQL",previous:{title:"Distinct  / Order By / Limit / Offset",permalink:"/documentacion/docs/SQL/filtro"},next:{title:"Expresiones y funciones",permalink:"/documentacion/docs/SQL/expresiones"}},r={},d=[{value:"Normalizacion",id:"normalizacion",level:2},{value:"Normalizaci\xf3n de la base de datos",id:"normalizaci\xf3n-de-la-base-de-datos",level:3},{value:"Inner Join",id:"inner-join",level:2},{value:"Outer Join",id:"outer-join",level:2},{value:"Left / Right / Full",id:"left--right--full",level:2},{value:"Valores Null",id:"valores-null",level:2},{value:"Uniones, intersecciones y excepciones",id:"uniones-intersecciones-y-excepciones",level:2}],c={toc:d};function u(e){let{components:a,...n}=e;return(0,s.kt)("wrapper",(0,t.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"join"},"Join"),(0,s.kt)("h2",{id:"normalizacion"},"Normalizacion"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Es cuando los datos de una entidad se dividen en partes y se almacenan en m\xfaltiples tablas independientes ")),(0,s.kt)("h3",{id:"normalizaci\xf3n-de-la-base-de-datos"},"Normalizaci\xf3n de la base de datos"),(0,s.kt)("p",null,"La normalizaci\xf3n de la base de datos es \xfatil porque minimiza los datos duplicados en una sola tabla y permite que los datos de la base de datos crezcan independientemente unos de otros (es decir, los tipos de motores de autom\xf3vil pueden crecer independientemente de cada tipo de autom\xf3vil)"),(0,s.kt)("p",null,"Como compensaci\xf3n, las consultas se vuelven un poco m\xe1s complejas, ya que tienen que poder encontrar datos de diferentes partes de la base de datos, y pueden surgir problemas de rendimiento cuando se trabaja con muchas tablas grandes.\nPara responder preguntas sobre una entidad que tiene datos que abarcan varias tablas en una base de datos normalizada, debemos aprender a escribir una consulta que pueda combinar todos esos datos y extraer exactamente la informaci\xf3n que necesitamos."),(0,s.kt)("h2",{id:"inner-join"},"Inner Join"),(0,s.kt)("p",null,"Cada fila de una tabla debe tener una clave principal que identifique esa entidad de forma \xfanica en la base de datos. Es una clave primaria  que puede ser un entero que se incrementa autom\xe1ticamente (porque ahorran espacio), pero tambi\xe9n puede ser una cadena, valor hash, siempre que sea \xfanico."),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"cl\xe1usula ON")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Al usar la cl\xe1usula JOIN en una consulta, podemos combinar filas de dos tablas (o m\xe1s) separadas usando esta clave \xfanica. "))),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Uniones")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Se puede  hacer dos join a la misma tabla pero con diferente relaci\xf3n (el pa\xeds de un empleado y de un cliente)."))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT column, another_table_column, \u2026\nFROM mytable\nINNER JOIN another_table \n    ON mytable.fk = another_table.pk\nWHERE condition(s)\nORDER BY column, \u2026 ASC/DESC\nLIMIT num_limit OFFSET num_offset;\n\n")),(0,s.kt)("p",null,"El INNER JOIN es un proceso que hace coincidir las filas de la primera tabla y las filas de la segunda tabla que tienen  una columna (cada una de las tablas) con el mismo valor (Las columnas que deben tener el mismo valor la establece la restricci\xf3n ON) para crear una fila  con las columnas combinadas de ambas tablas. Despu\xe9s de unir las tablas, se aplican las otras cl\xe1usulas."),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\xbfSab\xedas?")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Es posible que vea consultas en las que INNER JOIN se escribe simplemente como JOIN. Estos dos son equivalentes, pero continuaremos refiri\xe9ndonos a estas uniones como uniones internas porque hacen que la consulta sea m\xe1s f\xe1cil de leer una vez que comience a usar otros tipos de uniones, que se presentar\xe1n en la siguiente lecci\xf3n."))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM movies JOIN Boxoffice  ON (Id = Movie_id);\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM movies INNER JOIN Boxoffice  ON (Id = Movie_id) \nWHERE  International_sales > Domestic_sales;\n\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM movies INNER JOIN Boxoffice  ON (Id = Movie_id) \nORDER BY Rating DESC\n\n")),(0,s.kt)("h2",{id:"outer-join"},"Outer Join"),(0,s.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"INNER JOIN  solo contiene datos que pertenecen a ambas tablas."))),(0,s.kt)("p",null,"Si las dos tablas tienen datos asim\xe9tricos, lo que puede suceder f\xe1cilmente cuando los datos se ingresan en diferentes etapas, entonces tendr\xedamos que usar a LEFT JOIN, RIGHT JOIN o en su lugar FULL JOIN para asegurarnos de que los datos que necesita no se queden fuera de los resultados."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT column, another_column, \u2026\nFROM mytable\nINNER/LEFT/RIGHT/FULL JOIN another_table \n    ON mytable.id = another_table.matching_id\nWHERE condition(s)\nORDER BY column, \u2026 ASC/DESC\nLIMIT num_limit OFFSET num_offset;\n\n")),(0,s.kt)("h2",{id:"left--right--full"},"Left / Right / Full"),(0,s.kt)("p",null,"Al igual que INNER JOIN\nestas tres nuevas uniones, deben especificar en qu\xe9 columna se unir\xe1n los datos(que columnas (una de cada tabla) tendran el mismo valor)."),(0,s.kt)("p",null,"Al unir la tabla A a la tabla B,  LEFT JOIN simplemente incluye filas de A independientemente de si se encuentra una fila coincidente en B. RIGHT JOIN es lo mismo, pero invertido, incluyendo filas en B independientemente de si se encuentra una coincidencia en A. Finalmente tenemos,  FULL JOIN en donde  las filas de ambas tablas se mantienen, independientemente de si existe una fila coincidente en la otra tabla."),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Cuando use cualquiera de estas nuevas uniones, probablemente tendr\xe1 que escribir l\xf3gica adicional para lidiar con NULLs en el resultado y las restricciones"))),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\xbfSab\xedas?")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Es posible que vea las consultas con estas uniones se escriban como LEFT OUTER JOIN, RIGHT OUTER JOIN o FULL OUTER JOIN, pero la palabra clave OUTER mantiene la compatibilidad de SQL-92 y estas consultas son simplemente equivalente a LEFT JOIN, RIGHT JOIN y FULL JOIN respectivamente."))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT DISTINCT building_name, role \nFROM buildings \n  LEFT JOIN employees\n    ON building_name = building;\n\n")),(0,s.kt)("h2",{id:"valores-null"},"Valores Null"),(0,s.kt)("p",null,"Siempre es bueno reducir la posibilidad de valores NULL en las bases de datos porque requieren una atenci\xf3n especial al construir consultas, restricciones (ciertas funciones se comportan de manera diferente con valores nulos) y al procesar los resultados."),(0,s.kt)("p",null,"Una alternativa a los valores NULL en su base de datos es tener valores predeterminados, como 0 para datos num\xe9ricos, cadenas vac\xedas para datos de texto, etc. Pero si su base de datos necesita almacenar datos incompletos, entonces los valores NULL pueden ser apropiados si los valores predeterminados sesgar\xe1n el an\xe1lisis posterior (por ejemplo, al tomar promedios de datos num\xe9ricos)."),(0,s.kt)("p",null,"A veces, tampoco es posible evitar valores NULL, al unir dos tablas con datos asim\xe9tricos. En estos casos, puede buscar valores NULL con la cl\xe1usula WHERE mediante la restricci\xf3n IS NULL o IS NOT NULL."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT column, another_column, \u2026\nFROM mytable\nWHERE column IS/IS NOT NULL\nAND/OR another_condition\nAND/OR \u2026;\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT Name , Role FROM employees WHERE building IS  NULL;\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT DISTINCT building_name\nFROM buildings \n  LEFT JOIN employees\n    ON building_name = building\nWHERE role IS NULL;\n\n")),(0,s.kt)("h2",{id:"uniones-intersecciones-y-excepciones"},"Uniones, intersecciones y excepciones"),(0,s.kt)("p",null,"Cuando se trabaja con varias tablas, el operador UNION y UNION ALL permite agregar los resultados de una consulta a otra asumiendo que tienen el mismo recuento de columnas, orden y tipo de datos(no verifica). Si usa UNION sin el ALL, las filas duplicadas entre las tablas se eliminar\xe1n del resultado."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT column, another_column\n   FROM mytable\nUNION / UNION ALL / INTERSECT / EXCEPT\nSELECT other_column, yet_another_column\n   FROM another_table\nORDER BY column DESC\nLIMIT n;\n")),(0,s.kt)("p",null,"UNION ocurre antes de ORDER BY y LIMIT. No es com\xfan usar UNION, pero si tiene datos en diferentes tablas que no se pueden unir y procesar, puede ser una alternativa a realizar m\xfaltiples consultas en la base de datos."),(0,s.kt)("p",null,"De manera similar a UNION, el operador  INTERSECT se asegurar\xe1 de que solo se devuelvan las filas que sean id\xe9nticas en ambos conjuntos de resultados, y el  operador EXCEPT se asegurar\xe1 de que solo se devuelvan las filas del primer conjunto de resultados que no est\xe1n en el segundo."),(0,s.kt)("p",null,"Ambos INTERSECT y EXCEPT tambi\xe9n descartan filas duplicadas despu\xe9s de sus respectivas operaciones, aunque algunas bases de datos tambi\xe9n admiten INTERSECT ALL y EXCEPT ALL permiten que los duplicados no se descarten."))}u.isMDXComponent=!0}}]);