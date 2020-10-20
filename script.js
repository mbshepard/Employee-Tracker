var mysql = require("mysql")
var inquirer = require("inquirer")
var cTable = require("console.table")


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Downtown830+!+",
    database: "company_db"
});

connection.connect(function(err) {
    if(err) throw err;
    start ()
})

function start () {
    inquirer
    .prompt({
        name: "options",
        type: "list",
        message: "What would you like to do?",
        choices: ["View Departments", "View Roles", "View Employees", "Add Departments", "Add Roles", "Add Employees", "Update Employee Roles"]

    })
    .then(function(answer){
        if (answer.options === "View Departments"){
            var query = "SELECT * FROM department";
            connection.query(query, function(err,res){
                console.table(res)
            })
        }
        else if (answer.options === "View Roles"){
            var query = "SELECT * FROM role";
            connection.query(query, function(err,res){
                console.table(res)
            })
        }
        else if (answer.options === "View Employees"){
            var query = "SELECT * FROM employee";
            connection.query(query, function(err,res){
                console.table(res)
            })
        }
        else if (answer.options === "Add Departments"){
            addDepartment()
        }
        else if (answer.options === "Add Roles"){
            addRole()
        }
        else if (answer.options === "Add Employees"){
            addEmployee()
        }
        else if (answer.options === "Update Employee Roles"){
            updateEERole()
        }
    })
}

function addDepartment () {
    inquirer
    .prompt({
        name: "departments",
        type: "input",
        message: "What department would you like to add?",
    })
    .then(function(answer){
        var query = `INSERT INTO department (department_name) VALUES ("${answer.departments}")`
        connection.query(query, function(err, res){
            if (err) throw err
            console.table(answer.departments + " has been added to the database")
        })
        
    })
}

function addRole () {
    inquirer
    .prompt({
        name: "roles",
        type: "input",
        message: "What role would you like to add?",
    })
    .then(function(answer){
        var query = `INSERT INTO role (title) VALUES ("${answer.roles}")`
        connection.query(query,{roles: answer.roles}, function(err, res){
            console.table(answer.roles + " has been added to the database")
        })
        
    })
}

function addEmployee () {
    inquirer
    .prompt([
        {
            name: "employee_first",
            type: "input",
            message: "What is the employee's first name?",
        },
        {
            name: "employee_last",
            type: "input",
            message: "What is the employee's last name?",
        }
    ]).then(function(answer){
        var query = `INSERT INTO employee (first_name, last_name) VALUES ("${answer.employee_first}", "${answer.employee_last}")`
        connection.query(query,{employee_first: answer.employee_first, employee_last: answer.employee_last}, function(err, res){
            console.table(answer.employee_first + answer.employee_last + " has been added to the database")
        })
        
    })
}


function updateEERole() {
    inquirer
    .prompt([
        {
            name: "targetRole",
            type: "input",
            message: "What role id you would like to change?",
        },
        {
            name: "updatedRole",
            type: "input",
            message: "What is the new role?",
        }]).then(function(answer){
        var query = `UPDATE role SET title = "${answer.updatedRole}" WHERE role_id = ${answer.targetRole}`
        connection.query(query,{targetRole: answer.targetRole, updatedRole: answer.updatedRole}, function(err, res){
            console.table(answer.updatedRole + " has replaced " + answer.targetRole)    
        })
        
    })
}
