#!/usr/bin/env node
// TODO: Include packages needed for this application
const inq = require("inquirer");
const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");
const generateMarkdown = require("./utils/generateMarkdown");
var prewrittenAnswers; //= require('./utils/answers');

const dist = path.join(__dirname, "dist");

// Save data from my sample gh request so we dont bother gh servers during development
const data = require("./utils/data");

// TODO: Create an array of questions for user input
const questions = require("./utils/questions");

// TODO: Create a function to write README file
function writeToFile(fileName, fileData) {
  if (!fs.existsSync(dist)) fs.mkdirSync(dist);
  fs.writeFile(fileName, fileData, "utf-8", (err) => {
    console.log(err ? err : "Successfully wrote file");
  });
}

// TODO: Create a function to initialize app
async function init() {
  if (prewrittenAnswers) {
    let fileData = generateMarkdown(prewrittenAnswers);
    writeToFile(path.join(dist, "README.md"), fileData);
    return;
  }
  const answers = await inq.prompt(questions);
  let fileData = generateMarkdown(answers);
  writeToFile(path.join(dist, "README.md"), fileData);
}

// Function call to initialize app
init();
