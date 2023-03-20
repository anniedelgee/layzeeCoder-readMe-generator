const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
//and array of objects
// const questions = [
//     {
//         type: 'input',
//         message: 'Enter your github useraname',
//         name: 'username',
//         default: 'Username',
//         validate: (answer) => {
//             if (answer.length <1 ) {
//                 return console.log("A valid github username is required.");
//             }
//             return true;
//         }
//     },
//     {
//         type:'input',
//         message: "Enter the name of your github repo",
//         name: 'repo',
//         default: 'Repository Title',
//         validate: (answer) => {
//             if (answer.length < 1) {
//                 return console.log(" A valid github repo is required")
//             }
//             return true;
//         }
//     },
//     {
//         type:'input',
//         message: "Enter the title of your project",
//         name: 'title',
//         default: 'Project Title',
//         validate: (answer) => {
//             if (answer.length < 1) {
//                 return console.log(" Your project currently has no title")
//             }
//             return true;
//         }
//     },
//     {
//         type:'input',
//         message: "Describe your project",
//         name: 'abstract',
//         default: 'Abstract',
//         validate: (answer) => {
//             if (answer.length < 1) {
//                 return console.log(" A valid project description is required")
//             }
//             return true;
//         }
//     },
//     {
//         type: 'input',
//         message: 'Describe the installation process of your application',
//         name: 'installtion'
//     },
//     {
//         type: 'input',
//         message: 'Describe the best way to use your application',
//         name: 'usage'
//     },
//     {
//         type: 'input',
//         message: 'Credit collaborators or references used int he making of this project',
//         name: 'credits'
//     },
//     {
//         type: 'input',
//         message: 'Choose a license for your application',
//         choice: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
//         name: 'license'
//     }
// ];

// function to write README file
function writeToFile(fileName, data) {

}

// function to initialize program
function init() {

}

// function call to initialize program
init();
