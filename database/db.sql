CREATE DATABASE alquileres_xalapa;

USE alquileres_xalapa;

CREATE TABLE agencia(
	id_agencia INT PRIMARY KEY AUTO_INCREMENT,
	rfc VARCHAR(13) NOT NULL,
	colonia VARCHAR(20) NOT NULL,
	calle VARCHAR(20) NOT NULL,
	num INT NOT NULL,
	cod_postal INT(5),
	telefono VARCHAR(10) NOT NULL
);
	
CREATE TABLE propietario(
	id_propietario INT PRIMARY KEY AUTO_INCREMENT,
	nombre VARCHAR(20) NOT NULL,
	apellidos VARCHAR(30) NOT NULL,
	colonia VARCHAR(20) NOT NULL,
	calle VARCHAR(20) NOT NULL,
	num INT NOT NULL,
	cod_postal INT(5)
);
	
CREATE TABLE vivienda(
	id_vivienda INT PRIMARY KEY AUTO_INCREMENT,
	agencia INT NOT NULL,
	propietario INT NOT NULL,
	calle VARCHAR(20) NOT NULL,
	num INT NOT NULL,
	cod_postal INT(5),
	poblacion INT NOT NULL,
	FOREIGN KEY(agencia) REFERENCES agencia(id_agencia),
	FOREIGN KEY(propietario) REFERENCES propietario(id_propietario)
);

CREATE TABLE alquiler(
	id_alquiler INT PRIMARY KEY AUTO_INCREMENT,
	vivienda INT NOT NULL,
	fianza FLOAT NOT NULL,
	import_men FLOAT NOT NULL,
	fecha_firma DATE NOT NULL,
	fecha_inicio DATE NOT NULL,
	fecha_fin DATE NOT NULL,
	FOREIGN KEY(vivienda) REFERENCES vivienda(id_vivienda)
);

CREATE TABLE inquilino(
	id_inquilino INT PRIMARY KEY AUTO_INCREMENT,
	alquiler INT NOT NULL,
	nombre VARCHAR(20) NOT NULL,
	apellidos VARCHAR(30) NOT NULL,
	fecha_nacimiento DATE,
	FOREIGN KEY(alquiler) REFERENCES alquiler(id_alquiler)
);

CREATE TABLE renovacion(
	id_renov INT PRIMARY KEY AUTO_INCREMENT,
	alquiler INT NOT NULL,
	es_renovacion BOOL NOT NULL,
	FOREIGN KEY(alquiler) REFERENCES alquiler(id_alquiler)
);

CREATE TABLE emailPropi(
	propietario INT NOT NULL,
	email VARCHAR(50) NOT NULL,
	FOREIGN KEY(propietario) REFERENCES propietario(id_propietario)
);

CREATE TABLE telefPropi(
	propietario INT NOT NULL,
	telefono VARCHAR(10) NOT NULL,
	FOREIGN KEY(propietario) REFERENCES propietario(id_propietario)
);

CREATE TABLE telefInqui(
	inquilino INT NOT NULL,
	telefono VARCHAR(10) NOT NULL,
	FOREIGN KEY(inquilino) REFERENCES inquilino(id_inquilino)
);