DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured BOOLEAN,
PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured) VALUES ("cheeseburger", false);
INSERT INTO burgers (burger_name, devoured) VALUES ("baconburger", false);
INSERT INTO burgers (burger_name, devoured) VALUES ("bbq burger", false);

SELECT * FROM burgers;