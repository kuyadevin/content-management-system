# Employee Management System
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
This app is an Employee Managment System that is ran completely from the command line. It allows one to see a "Departments" table, "Roles" table, and "Employees" table which contain various information such as salary, manager, and title.

## Getting Started

To start this application, clone the repository from GitHub. Once cloned, you want to go to the folder and install all of the node modules by running 
```
npm install
```
Then you want to run MySQL by typing 
```
mySQL -u root -p
```
You will then be asked for a password which will be "password". Once in mySQL, you want to copy the contents from the sechema.sql page, and paste that into mySQL and hit enter. It should give a response saying "Query OK". Repeat this process with the seeds.sql and query.sql files. Once done, you can type quit to exit mySQL. Then, you can type
```
node server.js
```
This will start the prompts

### Prequisties

To run this application you need to install the node modules listed at the top of the server.js file and to follow the steps previously stated.


## Built With

* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Express](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs)
* [Inquirer](https://www.npmjs.com/package/inquirer)
* [Console.table](https://www.w3schools.com/jsref/met_console_table.asp)
* mySQL

## Demo

* [Repository Link](https://github.com/kuyadevin/employee-management-system)

![Demo](./assets/Employee%20Management%20System.mp4)

## Problems Faced

I encountered a few problems adding new content to the tables. In the future, that is a feature i definitely plan on developing. THe table columns also appear off in the console.

## Authors

* Devin Nguyen
- [Link to Github](https://github.com/kuyadevin)
- [Link to LinkedIn](https://www.linkedin.com/in/devin-nguyen-9a0676212/)

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
This project is licensed under the MIT License 
