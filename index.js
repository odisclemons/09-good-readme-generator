// TODO: Include packages needed for this application
const inq = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: "Full Name",
    },
    {
        type: 'input',
        name: 'email',
        message: "Email",
    },
    {
        type: 'input',
        name: 'title',
        message: "Project Title",
    },
    {
        type: 'editor',
        name: 'description',
        message: "Description",
    },
    {
        type: 'editor',
        name: 'instructions',
        message: "Instructions",
    },
    {
        type: 'editor',
        name: 'credits',
        message: "Credits",
    },
    {
        type: 'editor',
        name: 'license',
        message: "License",
    },
    {
        type: 'editor',
        name: 'contribute',
        message: "How to contribute",
    },


];

const answers = {
    name: 'Odis Clemons',
    email: 'odis.clemons@gmail.com',
    title: 'Sfdafda',
    description: 'This is my preferred editor!\n\nTake it or leave it fellas!!!\n',
    instructions: 'Here are instructions on how to do the thing.\n',
    credits: 'Here are all the flippin credits.\n',
    license: 'GPL 3 license.\n\n',
    contribute: 'Heres how you do it.\n'
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    // inq.prompt(questions)
    //     .then((answers) => console.log(answers))


}

// Function call to initialize app
init();
