---
sidebar_position: 6
---
#  CMD VS  POWERSHELL
## CMD
- Mas antiguo.
- Mas limitado.
- Reconoce los espacios en blancos.
## POWERSHELL
- Tiene mas comandos que CMD.
- Es para uso avanzado.
- No reconoce los espacios en blancos.
- Algunos comandos que reconoce son MV , PWD , CLEAR y NI.

## Ambos
 - No distinguen  mayuscula y minuscula .
 - Por ejemplo : OK == ok es false.

## Comandos
- Sirve para moverte entre carpetas:
``` powershell
CD
```

:::tip Trucos
- Arrastra una carpeta a la consola para saber la ubicación.
- En el explorador de archivo, escribí cmd en la barra de navegación y se abrirá una consola con la ubicación.
:::
- Para Retroceder un nivel de tu ubicacion actual:
``` powershell
CD ..
```


:::tip
- Evita poner espacios en blanco en archivos/carpetas , en caso contrario para especificarlo usa las comillas doble("").
:::
- Muestra los directorios:
``` powershell
DIR
```
- Limpia la consola:
``` powershell
CLS
```
Para crear carpetas:
``` powershell
MKDIR / MD
```
:::tip
- Puedes crear muchas carpetas en una línea, separando las carpetas con espacios.
:::

- Sirve para mover los archivos a otras carpetas (cortar - pegar):
``` powershell
MOVE   ubicacion_archivo   ubicacion_destino
```
- Sirve para cancelar las ejecuciones:
``` powershell
CTRL + C
```

:::tip
- Podés usar ambas y configurarlas en visual studio code (En la opción Configure Terminal Setting / Configurar valores de terminal).
:::

