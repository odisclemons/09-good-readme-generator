// TODO: Include packages needed for this application
const inq = require('inquirer');
const fs = require('fs');
const fetch = require('node-fetch');
const generateMarkdown = require('./utils/generateMarkdown')
var prewrittenAnswers //= require('./utils/answers');

// Save data from my sample gh request so we dont bother gh servers during development
const data = require('./utils/data')

// TODO: Create an array of questions for user input
const questions = require('./utils/questions');

// TODO: Create a function to write README file
function writeToFile(fileName, fileData) {
    fs.writeFile(fileName, fileData, 'utf-8', (err) => {
        console.log(err ? err : "Successfully wrote file")
    })
}

// TODO: Create a function to initialize app
function init() {

    if (prewrittenAnswers) {
        let fileData = generateMarkdown(prewrittenAnswers)
        writeToFile('README.md', fileData)
        return
    }
    inq.prompt(questions)
        .then(answers => {
            let fileData = generateMarkdown(answers)
            writeToFile('README.md', fileData)
        })
}

// Function call to initialize app
init();
