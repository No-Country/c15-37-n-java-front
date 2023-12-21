CREATE TABLE [IF NOT EXISTS] usuarios (
    id BIGINT NOT NULL auto_increment,
    nombre VARCHAR(25) NOT NULL
    apellido VARCHAR(25) NOT NULL,
    email VARCHAR(35) NOT NULL UNIQUE,
    password VARCHAR(300) NOT NULL UNIQUE,
    telefono VARCHAR(10) NOT NULL UNIQUE,
    amdin BOOLEAN,
    PRIMARY KEY(email)
)