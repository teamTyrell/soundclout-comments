
DROP DATABASE IF EXISTS soundclout;

CREATE DATABASE soundclout;

USE soundclout;

-- CREATE USER 'hrr49-user'@'localhost' IDENTIFIED BY 'hrr49';

GRANT ALL PRIVILEGES ON soundclout.* TO 'hrr49-user'@'localhost';
