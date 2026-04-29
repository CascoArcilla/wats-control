CREATE DATABASE IF NOT EXISTS control_watts;
CREATE TABLE Factura (
  id               int NOT NULL AUTO_INCREMENT, 
  estimated_amount double NOT NULL, 
  watts_consumed   double NOT NULL,
  created          date NOT NULL, 
  start_date       date NOT NULL, 
  end_date         date NOT NULL, 
  meterid          int NOT NULL, 
  userid           int NOT NULL, 
  PRIMARY KEY (id));

CREATE TABLE `Group` (
  id   int NOT NULL AUTO_INCREMENT, 
  name varchar(255) NOT NULL, 
  PRIMARY KEY (id));

CREATE TABLE Measure (
  id         int NOT NULL AUTO_INCREMENT, 
  watts      int NOT NULL, 
  date_taken date NOT NULL, 
  take_by    int NOT NULL, 
  meter      int NOT NULL, 
  PRIMARY KEY (id));

CREATE TABLE Meter (
  id           int NOT NULL AUTO_INCREMENT, 
  number_meter int NOT NULL, 
  owner_meter  int NOT NULL,
  status_meter varchar(60) DEFAULT 'active' NOT NULL,
  PRIMARY KEY (id));

CREATE TABLE `User` (
  id       int NOT NULL AUTO_INCREMENT, 
  name     varchar(255) NOT NULL, 
  lastname varchar(255) NOT NULL, 
  username varchar(255) NOT NULL UNIQUE, 
  password varchar(255) NULL,
  created  date NOT NULL, 
  is_bloked boolean DEFAULT false NOT NULL,
  use_password boolean DEFAULT false NOT NULL,
  PRIMARY KEY (id));

CREATE TABLE User_meters (
  userid  int NOT NULL, 
  meterid int NOT NULL, 
  PRIMARY KEY (userid, meterid));

CREATE TABLE User_tokens (
  id         int NOT NULL AUTO_INCREMENT, 
  token      text NOT NULL, 
  expires_at date NOT NULL, 
  created_at date NOT NULL, 
  is_revoked boolean DEFAULT false NOT NULL, 
  userid     int NOT NULL, 
  PRIMARY KEY (id));

CREATE TABLE Users_groups (
  userid  int NOT NULL, 
  groupid int NOT NULL, 
  PRIMARY KEY (userid, 
  groupid));

ALTER TABLE User_tokens ADD CONSTRAINT FKUser_token253278 FOREIGN KEY (userid) REFERENCES `User` (id);
ALTER TABLE Factura ADD CONSTRAINT FKFactura604544 FOREIGN KEY (userid) REFERENCES `User` (id);
ALTER TABLE Factura ADD CONSTRAINT FKFactura463874 FOREIGN KEY (meterid) REFERENCES Meter (id);
ALTER TABLE Measure ADD CONSTRAINT FKMeasure968798 FOREIGN KEY (meter) REFERENCES Meter (id);
ALTER TABLE Meter ADD CONSTRAINT FKMeter49177 FOREIGN KEY (owner_meter) REFERENCES `User` (id);
ALTER TABLE Measure ADD CONSTRAINT FKMeasure817271 FOREIGN KEY (take_by) REFERENCES `User` (id);
ALTER TABLE Users_groups ADD CONSTRAINT FKUsers_grou7924 FOREIGN KEY (groupid) REFERENCES `Group` (id);
ALTER TABLE Users_groups ADD CONSTRAINT FKUsers_grou898823 FOREIGN KEY (userid) REFERENCES `User` (id);
ALTER TABLE User_meters ADD CONSTRAINT FKUser_meters123456 FOREIGN KEY (userid) REFERENCES `User` (id);
ALTER TABLE User_meters ADD CONSTRAINT FKUser_meters654321 FOREIGN KEY (meterid) REFERENCES Meter (id);