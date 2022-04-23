// TODO: Include packages needed for this application
const inq = require('inquirer');
const fs = require('fs');
const fetch = require('node-fetch');
const generateMarkdown = require('./utils/generateMarkdown')
var answers = require('./utils/answers');
const licenses = require('./utils/licenses');
const choices = licenses.map(license => license.spdx_id)

var name, language, license, license_url, description, username, repo

// Save data from my sample gh request so we dont bother gh servers during development
const data = require('./utils/data')

// TODO: Create an array of questions for user input
const questions = require('./utils/questions');

// First lets get their github repo info and try to generate stuff automatically
// then ask questions if we need to
const initialQuestions = [{
    type: 'input',
    name: 'ghUser',
    message: "Github Username",
},
{
    type: 'input',
    name: 'ghRepo',
    message: "Github Repo Name",
},]



// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inq.prompt(questions)
        .then(answers => {
            let fileData = generateMarkdown(answers)
            fs.writeFile('temp.md', fileData, 'utf-8', (err) => {
                console.log(err ? err : "Successfully wrote file")
            })

        })
    // inq.prompt(initialQuestions)
    //     .then(({ ghUser, ghRepo }) => fetch(`https://api.github.com/repos/${ghUser}/${ghRepo}`))
    //     .then(data => console.log(data))

    // fetch(`https://api.github.com/repos/odisclemons/09-good-readme-generator`)
    //     .then(response => response.json())
    return
    console.log('Here\'s what we got from github about your repo:')
    console.log(`Repo name: ${data.name}`)
    console.log(`language: ${data.language}`)
    console.log(`license: ${data.license.spdx_id}`)
    console.log(`description: ${data.description}`)

    fs.readFile('./package.json', 'utf-8', (err, fileData) => {
        if (err) {
            console.log(err)
            process.exit()
        } else {
            console.log("----------------------------------------")
            console.log("Here's what we got from your package.json:")
            let pkgJson = JSON.parse(fileData)
            console.log(pkgJson)
            console.log(`Name: ${name}`)
            console.log(`Version: ${version}`)
            console.log(`Description: ${description}`)
            console.log(`License: ${license}`)
            handleCheckAnswers(data, pkgJson)

        }
    })

}

function handleCheckAnswers(data) {
    // from package.json we get:
    // name, version, description, license

    // from gh repo fetch we get
    //name,  language, license, description



}


// Function call to initialize app
init();
