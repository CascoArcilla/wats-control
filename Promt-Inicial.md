# Objetivo

Quiero que me ayudes a crear una aplicación web para detalles ver [README.md](./README.md)

## Base de datos

La base de datos será MySQL, esta db ya esta creada y las credenciales estan en el archivo .env:

- EC_DB_HOST: Host de la base de datos (por defecto localhost)
- EC_DB_PASSWORD: Password de la base de datos (por defecto "12345678")
- EC_DB_NAME: Nombre de la base de datos (por defecto "control_watts")
- EC_DB_PORT: Puerto de la base de datos (por defecto 3306)
- EC_SECRET_KEY: Secret key para JWT

## Modelo Entidad Relación

- Usuario:
  - id: int NOT NULL AUTO_INCREMENT
  - name: varchar(255) NOT NULL
  - lastname: varchar(255) NOT NULL
  - username: varchar(255) NOT NULL UNIQUE
  - password: varchar(255) NOT NULL
  - created: date NOT NULL
  - is_bloked: boolean DEFAULT false NOT NULL
  - use_password: boolean DEFAULT false NOT NULL
  - PRIMARY KEY (id)

- Meter:
  - id: int NOT NULL AUTO_INCREMENT
  - number_meter: int NOT NULL
  - owner_meter: int NOT NULL
  - PRIMARY KEY (id)

- Factura:
  - id: int NOT NULL AUTO_INCREMENT
  - estimated_amount: double NOT NULL
  - watts_consumed: double NOT NULL
  - created: date NOT NULL
  - start_date: date NOT NULL
  - end_date: date NOT NULL
  - meterid: int NOT NULL
  - userid: int NOT NULL
  - PRIMARY KEY (id)

- Measure:
  - id: int NOT NULL AUTO_INCREMENT
  - watts: int NOT NULL
  - date_taken: date NOT NULL
  - take_by: int NOT NULL
  - meter: int NOT NULL
  - PRIMARY KEY (id)

- Group:
  - id: int NOT NULL AUTO_INCREMENT
  - name: varchar(255) NOT NULL
  - PRIMARY KEY (id)

- Users_groups:
  - userid: int NOT NULL
  - groupid: int NOT NULL
  - PRIMARY KEY (userid, groupid)

## Relaciones:

- Factura:
  - meterid: int NOT NULL -> Meter.id
  - userid: int NOT NULL -> User.id

- Measure:
  - take_by: int NOT NULL -> User.id
  - meter: int NOT NULL -> Meter.id

- Meter:
  - owner_meter: int NOT NULL -> User.id

- Users_groups:
  - userid: int NOT NULL -> User.id
  - groupid: int NOT NULL -> Group.id

## User_tokens:
  - id: int NOT NULL AUTO_INCREMENT
  - token: text NOT NULL
  - expires_at: date NOT NULL
  - created_at: date NOT NULL
  - is_revoked: boolean DEFAULT false NOT NULL
  - userid: int NOT NULL
  - PRIMARY KEY (id)

- Relación:
  - userid: int NOT NULL -> User.id

## Requerimientos:

- El proyecto deberá estar organizado en carpetas:
  - backend
  - frontend

- El backend deberá estar organizado en carpetas:
  - routes
  - controllers
  - models
  - middleware
  - config
  - utils

- El frontend deberá estar organizado en carpetas:
  - components
  - pages
  - services
  - utils
