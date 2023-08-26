// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Title of Project',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a short description of the project?',
    },
    {
        type: 'input',
        name: 'run',
        message: 'How do I run the program?',
    },
    {
        type: 'input',
        name: 'repo',
        message: 'Github repo page url?',
    },
    {
        type: 'input',
        name: 'page',
        message: 'Share your Github deployed page',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license was assigned to project?',
        choices: [
        'Apache License 2.0', 
        'MIT License', 
        'Mozilla Public License', 
        'None',
    ],
    
    },
];

// TODO: Create a function to write README file
function writeToFile() {
    inquirer
        .prompt(questions)
        .then((response) => {
            const generate = generateMarkdown(response);
            if (generate === '') {
                console.log('README.md Issues, please try again.')
            } else {
                fs.writeFile('README.md', generate, (err) =>
                err ? console.log(err) : console.log('Success! File is created!')
                 )
            }
        })
}

// TODO: Create a function to initialize app
function init() { 
    writeToFile();
}

// Function call to initialize app
init();
