# KPI RRHH 333

Herramientas de RRHH de 333, publicadas con GitHub Pages en
https://333avicola-byte.github.io/333Recursos-Humanos/

La portada arma sus tarjetas leyendo la tabla de abajo. Para agregar, cambiar o sacar una
herramienta, editá una fila de esta tabla y subí el archivo HTML al repositorio: no hay que
tocar nada más.

## Herramientas

| Herramienta | Link | Descripción | Datos |
|---|---|---|---|
| Tablero RPE | rpe.html | Revenue per Employee: cuánto aporta cada FTE a la facturación mensual. | Excel "RPE KPI" · SharePoint |
| Índice de rotación | rotacion.html | Altas, bajas, rotación voluntaria, bajas tempranas y proyección anualizada. | Excel "Rotacion 333" · SharePoint |
| Pirámide de jerarquías | piramide.html | Los cinco niveles de responsabilidad y las posiciones típicas de cada uno. | Contenido fijo en el archivo |

Columnas: **Herramienta** es el título de la tarjeta, **Link** el archivo, **Descripción** el
texto y **Datos** la etiqueta gris de abajo. El orden de las filas es el orden de las tarjetas.

## Actualización mensual

1. Cargar el mes en el Excel correspondiente, en SharePoint (333 Recruitment › GESTION INTERNA › KPI COSTOS).
2. En "Rotacion 333", actualizar además el último mes cerrado en la hoja Parametros.
3. Los tableros releen el Excel solos cada pocos minutos; no hay que tocar GitHub.

## Acceso

Los tableros conectados a SharePoint piden iniciar sesión con la cuenta de 333 y solo muestran
datos a quien tenga acceso al archivo. La pirámide y la portada son públicas.

## Notas técnicas

- El inicio de sesión usa la aplicación "Tablero RPE 333 LATAM" registrada en Entra ID.
- Cada página nueva que use ese inicio de sesión necesita su dirección cargada como URI de
  redirección SPA en esa aplicación.
- Si un Excel cambia de nombre o de carpeta, hay que actualizar su dirección interna dentro del
  HTML del tablero (bloque CONFIG).
