DROP DATABASE IF EXISTS bugme;
CREATE DATABASE bugme;
USE bugme;


DROP TABLE IF EXISTS Users;
CREATE TABLE Users(
    id int(20) NOT NULL AUTO_INCREMENT,
    firstname varchar(50) DEFAULT NULL,    lastname varchar(50) DEFAULT NULL,
    password varchar(50),
    email varchar(50),
    date_joined date DEFAULT NULL,
    PRIMARY KEY(id)
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

insert into Users(firstname,lastname,password,email,date_joined) VALUES ('boe','cleo',MD5('password123'),'admin@bugme.com','2019-11-21');

DROP TABLE IF EXISTS Issues;
CREATE TABLE Issues (
    id int(20) NOT NULL AUTO_INCREMENT,
    titlevarchar(10) DEFAULT NULL,
    description varchar(500) DEFAULT NULL,
    type varchar(30) DEFAULT NULL,
    priority int DEFAULT NULL,
    status varchar(15) DEFAULT NULL,
    assigned_to archar(50) DEFAULT NULL,
    created_by varchar(50) DEFAULT NULL,
    created date DEFAULT NULL,
    updated date DEFAULT NULL,
    PRIMARY KEY(id)
)ENGINE=InnoDB DEFAULT CHARSET=latin1;
