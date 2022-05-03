// Import and require express
const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');
// Import and require Inquirer
const inquirer = require('inquirer');
// Import and require console.table
const cTable = require('console.table');
// Set PORT
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// // Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'company_db'
  },
  console.log(`Connected to the company_db database.`)
);

// Prompt Questions
var start = async function(){
  var answer = await inquirer.prompt([
     {
         type: 'list',
         message: 'What would you like to do?',
         name: 'options',
         choices:[
             'View All Departments',
             'View All Roles',
             'View All Employees',
             'Add Department',
             'Add Role',
             'Add Employee',
             'Update Employee Role',
             'Quit'
         ]
     }
 ])
 if (answer.options === 'View All Departments'){
  const showEmployees = function (){
    db.query('SELECT * FROM departments', function(err, results){
      console.table(results);
  })
  }
  showEmployees();
  start();
  } else if (answer.options === 'View All Roles'){
    const showRoles = function (){
      db.query('SELECT * FROM roles JOIN departments ON roles.department_id = departments.id', function(err, results){
        console.table(results);
    })
    }
    showRoles();
    start();
  } else if (answer.options === 'View All Employees'){
    const showEmployees = function (){
      db.query('SELECT * FROM employees JOIN roles ON employees.role_id = roles.id', function(err, results){
        console.table(results)
    })
    }
    showEmployees();
    start();
  } else if (answer.options === 'Add Department') {
    var addDepartment = async function(){
    const addPrompt = await inquirer.prompt([
      {
        type: 'input',
        message: 'What is the name of the department you would like to add?',
        name: 'newDepartment', 
    }
    ])
    var newDepartment = addPrompt.input
    const addName = function(){
      db.query('INSERT INTO deparments (name) VALUES' + newDepartment, function(err, results){
        console.table(results)
      })
    }
    addName();
  };
  addDepartment();
  }
}
start();
