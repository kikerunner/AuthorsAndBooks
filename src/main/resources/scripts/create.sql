create table IF NOT EXISTS USER(
	dni varchar(25) PRIMARY KEY,
	nombre varchar(25),
	apellido varchar(25)
);

create table IF NOT EXISTS accounts(
	numAccount INT,
	balance INT,
);