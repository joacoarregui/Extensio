CREATE DATABASE login;
USE login;

CREATE TABLE usuarios (
  id INT(11) NOT NULL AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO usuarios (username, password) VALUES
('usuario1', 'contrasena1'),
('usuario2', 'contrasena2'),
('usuario3', 'contrasena3');