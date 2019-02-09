-- ### Schema

-- CREATE DATABASE IF NOT EXISTS macaroons_db;
USE macaroons_db;

CREATE TABLE macaroons(

	id int NOT NULL AUTO_INCREMENT,
	macaroon_flavor varchar(255) NOT NULL,
	tasted BOOLEAN DEFAULT false,
	PRIMARY KEY (id),
);

-- INSERT INTO macaroons (macaroon_flavor, tasted) VALUES ('French Vanilla', true);
-- INSERT INTO macaroons (macaroon_flavor, tasted) VALUES ('Red Velvet', true);
-- INSERT INTO macaroons (macaroon_flavor, tasted) VALUES ('Coffee', false);
