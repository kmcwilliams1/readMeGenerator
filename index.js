// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

//Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
      type: 'checkbox',
      message: 'What is your favorite animal?',
      name: 'animals',
      choices: ['dog' , 'cat' , 'fish']
    },
    {
      type: 'list',
      message: 'do you have a license',
      name: 'license',
      choices: ['MIT' , 'BSD3' , 'APACHE2.0' , 'none']
    }
  ]).then ((response) =>{
console.log(response)
  fs.writeFile('readme.md', generateMarkdown(response), (err) =>  
  err ? console.log(err) : console.log('Success!')
);
});

