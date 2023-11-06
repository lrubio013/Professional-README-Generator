// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {  
        type: "input",
        name: "github",
        message: "what is your github username?",
    },
    {
        type: "input",
        name: "email",
        message: "what is your email address?",
    },
    {
        type: "input",
        name: "title",
        message: "what is your project name?",
    },
    {
        type: "input",
        name: "Description",
        message: "what is the description of you project?",
    },
    {
        type: "input",
        name: "installation",
        message: "what are the installation instructions of the project?",
    },
    {
        type: "input",
        name: "usage",
        message: "what is the usage of the project?",
    },
    {
        type: "input",
        name: "contribution",
        message: "How could a user help contribute to the project?",
    },
    {
        type: "input",
        name: "tests",
        message: "How could we use the application to run tests?",
    },
    {
        type: "list",
        name: "license",
        message: "what is the license of the project?",
        choices: ["MIT","BSD", "Apache 2.0 license", "none"],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
  .then((data) => {
    writeToFile("user-README.md", data);
  });
}  

// Function call to initialize app
init();
