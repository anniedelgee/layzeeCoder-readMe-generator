const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
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
        message: "Enter the name of your github repo",
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
        name: 'desription',
        default: 'Project Description',
        validate: (answer) => {
            if (answer.length < 1) {
                return console.log(" A valid project description is required")
            }
            return true;
        }
    },
    
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
