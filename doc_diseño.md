# Titulo: Template de documento de diseño
---
## Overview: Problema a resolver
Spotplay es una nueva compañía de música online que tiene como objetivo proporcionar mejores relaciones con los artistas y fans.

Su producto es Spotplay, una plataforma en la que las personas pueden generar listas de reproducción para sus artistas favoritos y gustos musicales.

### Alcance(Scope)
    -La aplicacion tendra acceso para usuarios consumidores, a traves de su registro.
    - La aplicación tentra acceso para usuarios editores, para darle mantenimiento a la aplicación.
    -

#### Casos de uso
DescripciÃ³n...
* Caso de uso 1
El usuario lector puede crear una nueva lista con un un nombre dato.(crear test para verificar si se cumple con este requerimiento) 
* Caso de uso 2
El usuario lector puede obtener las listas de reproduccion de los usuarios.
* * Caso de uso 3

#### Out of Scope (casos de uso No Soportados)
DescripciÃ³n...
* Caso de uso 1
El usuario no puede acceder con cuentas de tercros como Facebook, Google.
* Caso de uso 2
* ...
---
## Arquitectura

### Diagramas
poner diagramas de secuencia, uml, etc

### Modelo de datos
Poner diseÃ±o de entidades, Jsons, tablas, diagramas entidad relaciÃ³n, etc..

---
## Limitaciones
Lista de limitaciones conocidas. Puede ser en formato de lista.
Ej.
* Llamadas del API tienen latencia X
* No se soporta mas de X llamadas por segundo
---
## Costo
DescripciÃ³n/AnÃ¡lisis de costos
Ejemplo:
"Considerando N usuarios diarios, M llamadas a X servicio/baseDatos/etc"
* 1000 llamadas diarias a serverless functions. $XX.XX
* 1000 read/write units diarias a X Database on-demand. $XX.XX
Total: $xx.xx (al mes/dia/aÃ±o)