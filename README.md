# KPI 333

Herramientas de RRHH de 333, publicadas con GitHub Pages en
https://333avicola-byte.github.io/333Recursos-Humanos/

La portada arma sus tarjetas leyendo la tabla de abajo. Para agregar, cambiar o sacar una
herramienta, editá una fila de esta tabla y subí el archivo HTML al repositorio: no hay que
tocar nada más.

## Herramientas

| Herramienta | Link | Descripción | Datos |
|---|---|---|---|
| Tablero RPE | rpe.html | Revenue per Employee anual por filial: 2025 real vs 2026 proyectado. | Excel "RPE Anual 333" · SharePoint |
| Índice de rotación | rotacion.html | Rotación independiente por filial, con semáforo vs Mercer: sana, cuidado o corregir. | Excel "Rotacion 333" · SharePoint |
| Equipo con Futuro | teambuilding.html | Las 8 dimensiones del equipo medidas cada 6 meses: qué mejoró, qué bajó y qué atacar en capacitación. | Excel "Equipo con Futuro 333" · SharePoint |
| Pirámide de jerarquías | piramide.html | Los cinco niveles de responsabilidad y las posiciones típicas de cada uno. | Contenido fijo en el archivo |

Columnas: **Herramienta** es el título de la tarjeta, **Link** el archivo, **Descripción** el
texto y **Datos** la etiqueta gris de abajo. El orden de las filas es el orden de las tarjetas.

## Actualización mensual

1. Cargar el mes en el Excel correspondiente, en SharePoint (333 Recruitment › GESTION INTERNA › KPI COSTOS).
2. En "Rotacion 333", actualizar además el último mes cerrado en la hoja Parametros.
3. Los tableros releen el Excel solos cada pocos minutos; no hay que tocar GitHub.

## Actualización anual (RPE)

1. En el Excel "RPE Anual 333" (SharePoint › KPI COSTOS), hoja **Anual**: cargar la facturación en USD de cada filial.
2. Hoja **FTE mensual**: cargar el FTE de cada mes por filial (el año en curso: meses reales + dotación prevista).
3. Al cerrar el año, cambiar Tipo de "Proyectado" a "Real" y cargar el cierre. Para un año nuevo, sumar sus filas copiando el formato.
4. El tablero compara el último año contra el anterior. Colores de la variación: verde si sube; si cae, de amarillo suave a rojo (−10% o más).

## Rotación: cómo se lee

- Cada filial se mide por separado (Corporate, LATAM, Argentina, Brasil); no hay total combinado.
- Filiales con menos personas que el umbral de Parametros muestran igual el porcentaje, con la etiqueta «base chica».
- Semáforo (rotación voluntaria anualizada): Sana < 13% · Cuidado 13–20% · Corregir > 20%.
  Referencia: Mercer, US Turnover Survey 2025 (promedio voluntario 13%). El corte de 20% es criterio interno.
  Los valores están en el bloque `REF` de rotacion.html.

## Actualización semestral (Equipo con Futuro)

1. Exportar el resultado de Mentimeter y copiar la hoja "Voters" completa.
2. Pegarla en A1 de la siguiente solapa "Ola" libre de "Equipo con Futuro 333" y completar nombre y sesión válida en la hoja Olas.
3. El tablero la suma solo al histórico.

## Acceso

Los tableros conectados a SharePoint piden iniciar sesión con la cuenta de 333 y solo muestran
datos a quien tenga acceso al archivo. La pirámide y la portada son públicas.

## Notas técnicas

- El inicio de sesión usa la aplicación "Tablero RPE 333 LATAM" registrada en Entra ID.
- Cada página nueva que use ese inicio de sesión necesita su dirección cargada como URI de
  redirección SPA en esa aplicación.
- Si un Excel cambia de nombre o de carpeta, hay que actualizar su dirección interna dentro del
  HTML del tablero (bloque CONFIG).

## App en el teléfono

El sitio se instala como app (ícono propio, pantalla completa, sin barra del navegador). Es una
sola vez por teléfono:

- **Android:** abrir el link en Chrome › menú ⋮ › **Instalar app**.
- **iPhone:** abrir el link en Safari › Compartir › **Agregar a pantalla de inicio**.

En iPhone la app guarda su propia sesión: la primera vez pide iniciar sesión con la cuenta de 333.
Manteniendo apretado el ícono (Android) aparecen accesos directos a cada tablero; se definen en
`manifest.webmanifest`. Las páginas nuevas tienen que llevar el bloque «App instalable (PWA)» del
`<head>` de index.html.
