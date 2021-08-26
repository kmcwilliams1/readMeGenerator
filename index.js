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

// 
// description, installation, usage, contributors, license, email, test, github, fact

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Please describe the application',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Please type installation instructions',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'How to use this application?',
      name: 'usage',
    },
    {
      type: 'list',
      message: 'Did you have any other contributors?',
      name: 'contributors',
      choices: ['Yes, someone else helped me' , 'No, I did it all on my own' ,]
    },
    {
      type: 'list',
      message: 'do you have a license',
      name: 'license',
      choices: ['MIT' , 'BSD3' , 'APACHE2.0' , 'none']
    }
    {
      type: 'input',
      message: 'How can people reach you?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'List testing instructions',
      name: 'test',
    },
    {
      type: 'input',
      message: 'What is your github webpage?',
      name: 'github',
    },
    {
      type: 'input',
      message: 'List a fun fact for people to learn',
      name: 'fact',
    }
  ]).then ((response) =>{
console.log(response)
  fs.writeFile('readme.md', generateMarkdown(response), (err) =>  
  err ? console.log(err) : console.log('Success!')
);
});

