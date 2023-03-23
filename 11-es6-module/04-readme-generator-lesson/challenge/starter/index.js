
//external packages 
const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const util= require('util');

//internal packages
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
// break down ReadMe sections into objects in array.
const questions = [
    {
        type: 'input',
        message: 'Enter your github useraname',
        name: 'username',
        default: 'Username',
        validate: (answer) => {
            if (answer.length <1 ) {
                return console.log("A valid github username is required.");
            }
            return true;
        }
    },
    {
        type:'input',
        message: "Enter the name of your github repo title",
        name: 'repo',
        default: 'Repository Title',
        validate: (answer) => {
            if (answer.length < 1) {
                return console.log(" A valid github repo is required")
            }
            return true;
        }
    },
    {
        type:'input',
        message: "Enter the title of your project",
        name: 'title',
        default: 'Project Title',
        validate: (answer) => {
            if (answer.length < 1) {
                return console.log(" Your project currently has no title")
            }
            return true;
        }
    },
    {
        type:'input',
        message: "Describe your project",
        name: 'abstract',
        default: 'Abstract',
        validate: (answer) => {
            if (answer.length < 1) {
                return console.log(" A valid project description is required")
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'Describe the installation process of your application',
        name: 'installtion'
    },
    {
        type: 'input',
        message: 'Describe the best way to use your application',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Give instructions for how to contribute to your applciation',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Credit collaborators or references used int he making of this project',
        name: 'credits'
    },
    {
        type: 'input',
        message: 'GIve intructions for testing the programme/any tests written for it',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'Choose a license for your application',
        choice: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license'
    }
];

// function to write README file
// write ternary oeprator for writing file or throwing error
function writeToFile(fileName, data) {
    fs.writeToFile(fileName, data);
    error ? console.log(err) : console.log("your newly generated readMe awaits!");

}

const writeFileAsync = util.promisify(writeToFile);

// function to initialize program
//use inquirer prompt function 
init= () => {
    inquirer.prompt(questions)
    .then((answers) => {
        const newReadMe = generateMarkdown(answers)
    })

}

// function call to initialize program
init();



