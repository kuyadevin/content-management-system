// Import and require express
const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');
// Import and require Inquirer
const inquirer = require('inquirer');
// Set PORT
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'movies_db'
  },
  console.log(`Connected to the company_db database.`)
);