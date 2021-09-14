const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'directory_db'
})



'use strict';
const inquirer = require('inquirer');
function viewDepartments() {
    connection.query(
        'SELECT * FROM departments',
        function (err, results) {
            console.log(results);
        }
    );
}
inquirer
    .prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What do you want to do?',
            choices: [
                'View all Departments?',
                'View all Roles?',
                'View all Employees?',
                'Add a Department?',
                'Add a Role?',
                'Add an Employee?',
                'Update an Employee Role?',
                'Done',
                new inquirer.Separator(),
            ],
        },
    ])
    .then((answers) => {
        // switch (answers.choice) {
        //     case 'View all Departments?':
        //         viewDepartments()
        //         break;
        //     case 'View all Roles?':
        //         // code block
        //         break;
        //     case 'View all Employees?':
        //         // code block
        //         break;
        //     case 'Add a Department?':
        //         // code block
        //         break;
        //     case 'Add a Role?':
        //         // code block
        //         break;a
        //     case 'Add an Employee?':
        //         // code block
        //         break;
        //     case 'Update an Employee Role?':
        //         // code block
        //         break;
        //     default:
        //         console.log('Ash')
        // }
        console.log(JSON.stringify(answers, null, '  '));
    }).catch((error) => console.log(error))