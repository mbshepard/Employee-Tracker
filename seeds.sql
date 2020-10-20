--- Populate the department table within the company database ----

use company_db;

INSERT INTO department (department_id, department_name)
VALUES (1, "Finance");

INSERT INTO department (department_id, department_name)
VALUES (2, "Accounting");

INSERT INTO department (department_id, department_name)
VALUES (3, "Technology");

INSERT INTO department (department_id, department_name)
VALUES (4, "Operations");

INSERT INTO department (department_id, department_name)
VALUES (5, "Human Resources");

SELECT * FROM department

-- Populate the Employee Data Base

use company_db;

INSERT INTO employee (employee_id, role_id,first_name,last_name,manager_id) VALUES (1, 1, "Kelly", "Slater", 1);

--- Inner Join Syntax -----


SELECT * FROM department 
INNER JOIN role ON role.department_id = department.department_id
INNER JOIN employee ON employee.role_id = role.role_id;