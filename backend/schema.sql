-- schema.sql

CREATE TABLE roles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL UNIQUE,
  descripcion TEXT
);

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  correo VARCHAR(100) NOT NULL UNIQUE,
  rol INT,
  FOREIGN KEY (rol) REFERENCES roles(id)
);

CREATE TABLE tipos_activo (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion VARCHAR(255)
);

CREATE TABLE ubicaciones (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion VARCHAR(255)
);

CREATE TABLE activos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  tipo_id INT,
  estado VARCHAR(50),
  ubicacion_id INT,
  responsable_id INT,
  fecha_ingreso DATETIME,
  descripcion TEXT,
  FOREIGN KEY (tipo_id) REFERENCES tipos_activo(id),
  FOREIGN KEY (ubicacion_id) REFERENCES ubicaciones(id),
  FOREIGN KEY (responsable_id) REFERENCES usuarios(id)
);

CREATE TABLE historial_cambios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  activo_id INT,
  usuario_id INT,
  cambio TEXT,
  fecha DATETIME,
  FOREIGN KEY (activo_id) REFERENCES activos(id),
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);