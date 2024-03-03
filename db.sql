SET sql_mode = 'STRICT_ALL_TABLES';

CREATE TABLE USERS(
    id INT AUTO_INCREMENT PRIMARY KEY,
    password VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    phone_no VARCHAR(16) NOT NULL UNIQUE,
    address VARCHAR(128)
);

CREATE TABLE GOOGLE_USERS(

    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(50) NOT NULL UNIQUE,
    phone_no VARCHAR(16) NOT NULL UNIQUE,
    address VARCHAR(128)

);

-- Insert example users with realistic-looking email addresses and simple passwords
INSERT INTO USERS (password, email, phone_no, address) VALUES ('password1', 'haluk.altunel@example.com', '1234567890', '101 Example Lane');
INSERT INTO USERS (password, email, phone_no, address) VALUES ('password2', 'john.smith@example.com', '1234567891', '102 Example Lane');
INSERT INTO USERS (password, email, phone_no, address) VALUES ('password3', 'alex.johnson@example.com', '1234567892', '103 Example Lane');
INSERT INTO USERS (password, email, phone_no, address) VALUES ('password4', 'samantha.brown@example.com', '1234567893', '104 Example Lane');
INSERT INTO USERS (password, email, phone_no, address) VALUES ('password5', 'michael.davis@example.com', '1234567894', '105 Example Lane');
INSERT INTO GOOGLE_USERS (email, phone_no, address) VALUES ('ab8059165@gmail.com', '5332119347', '106 Example Lane');
