DROP DATABASE IF EXISTS Glist;

CREATE DATABASE Glist;

USE Glist;

CREATE TABLE items(
  id INT AUTO_INCREMENT,
  item VARCHAR(20),
  PRIMARY KEY(id)
);

