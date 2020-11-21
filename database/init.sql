
DROP DATABASE IF EXISTS soundcloutComments;

CREATE DATABASE soundcloutComments;

USE soundcloutComments;

-- CREATE USER 'hrr49-user'@'localhost' IDENTIFIED BY 'hrr49';

GRANT ALL PRIVILEGES ON soundclout.* TO 'hrr49-user'@'localhost';
