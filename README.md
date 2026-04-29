# Eletrican Control

## Descripción
Es un proyecto personal para llevar el control del consumo de KW/h, está pensado para ser usado por miembros de una familia para administrar el consumo de KW/h de sus medidores de luz.

## Caracteristicas:

- Login
- Gestión de medidores (registro, edición y eliminación)
- Gestión de clientes (registro, edición y eliminación)
- Gestión de consumos (registro, edición y eliminación)
- Generación de facturas (a partir de una fecha hasta otra fecha o del mes en curso)
- Historial de consumos
- Revisar consumo por día segun el consumo del día anterior

## Grupo de Usuarios

- Medidor:
  - Puede ver medidores y consumos
  - Puede ver facturas
  - Puede ver historial de consumo
  - Puede ver consumo del día
  - Puede registrar consumos
  - Puede actualizar consumos que solo sean suyos
  - Puede eliminar consumos que solo sean suyos

- Admin, además de los permisos de medidor:
  - Puede gestionar medidores (registro, edición y eliminación)
  - Puede gestionar clientes (registro, edición y eliminación)
  - Puede gestionar consumos (registro, edición y eliminación)
  - Puede generar facturas
  - Puede ver historial de consumos
  - Puede ver consumo del día

## Tecnologias utilizadas:
- Node.js
- Express.js
- Tailwind CSS
- MySQL
- JWT (con refresh tokens)
- React con Vite