CREATE DATABASE `mesima_3_oren_sayag`;

USE `mesima_3_oren_sayag`;

CREATE TABLE companies(
    id INT AUTO_INCREMENT,
    name VARCHAR(255),
    PRIMARY KEY (id)
);


CREATE TABLE servers(
    id INT AUTO_INCREMENT,
    name VARCHAR(255),
    ip VARCHAR(255),
    hosting_company INT,
    active BOOLEAN DEFAULT TRUE,
    creation_datetime DATETIME DEFAULT NOW(),
    PRIMARY KEY (id),
    FOREIGN KEY (hosting_company) REFERENCES companies(id)
);

INSERT INTO companies (name)
VALUES ("Microsoft"), ("IBM"), ("GoDaddy"), ("DigitalIO");

INSERT INTO servers(name, ip, hosting_company, creation_datetime)
VALUES ("Samanta", "216.126.148.116", 1, "1702-10-02 00:00:00"),
("Ceolmund", "21.102.86.132", 1, "1908-11-29
 00:00:00"),
("Marta", "227.112.179.188", 2, "2029-05-11 00:00:00"),
("Jamar", "167.212.169.208", 2, "2532-01-21 00:00:00"),
("Rúben", "68.127.169.65", 3, "2661-02-18 00:00:00"),
("Arif", "207.108.63.76", 3, "2710-11-20 00:00:00"),
("Alondra", "68.149.122.158", 4, "2905-07-10"),
("Fionn", "14.235.226.86", 4, "2963-03-06");



-- CREATE TABLE teams(
-- 	id INT AUTO_INCREMENT,
--     name VARCHAR(255),
--     PRIMARY KEY (id)
-- );

-- CREATE TABLE meetings(
-- 	id INT AUTO_INCREMENT,
--     team_id INT,
--     start_date DATETIME,
--     end_date DATETIME,
--     descp VARCHAR(255),
--     room_name VARCHAR(255),
--     PRIMARY KEY (id),
--     FOREIGN KEY (team_id) REFERENCES teams(id)
-- );

-- INSERT INTO teams(name)
-- VALUES ('Machine Learning and AI'),('Hardware'),('Software and Services'),('Deisgn'),('Marketing')

