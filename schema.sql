CREATE DATABASE company_db;

use company_db;

CREATE TABLE department(
    department_id int not null AUTO_INCREMENT,
    department_name VARCHAR(30),
    PRIMARY KEY (department_id)
);

CREATE TABLE role(
    role_id int not null AUTO_INCREMENT,
    department_id int,
    title VARCHAR(30),
    salary DECIMAL,
    FOREIGN KEY (department_id) references department (department_id),
    PRIMARY KEY (role_id)
);

CREATE TABLE employee(
    employee_id int not null AUTO_INCREMENT,
    role_id int,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    manager_id INT,
    PRIMARY KEY (employee_id),
    FOREIGN KEY (role_id) references role (role_id)
);
