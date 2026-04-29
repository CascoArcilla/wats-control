# Eletrican Control

## Descripción
Es un proyecto personal para llevar el control del consumo de KW/h y el pago del servicio de luz, está pensado para ser usado por miembros de una familia para administrar el consumo de KW/h de sus medidores de luz. El modelo de entidad relacion podra cambiar a lo largo del desarrollo y por ende algunos aspectos de la aplicación tambien pueden cambiar.

## Features
- [x] Autenticación
- [x] Gestión de medidores (el medidor pertenece a un usuario propietario, puede ser seleccionado por el admin)
- [x] Gestión de clientes (usuarios)
- [x] Gestión de consumos (el consumo es registrado por el usuario en base a un medidor asociado)
- [x] Generación de facturas (estimadas en base a los consumos registrados)
- [x] Historial de consumos (lista de consumos registrados, filtros por fecha y por medidor)
- [x] Revisar consumo por día segun el consumo del día anterior (tiene que ser un cálculo basado en la diferencia de los últimos consumos registrados)

## Tecnologías
- Node.js
- Express.js
- Tailwind CSS
- MySQL
- JWT (con refresh tokens)
- React con Vite
