// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./util/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your github username?'
    },
    {
    type: 'input',
    name: 'title',
    default: 'Project Title',
    message: 'What is the title of the project?',
     },
     {
      type: 'input',
      name: 'description',
      default: 'Project Description',
      message: 'Write a description of your project?'
     },
     
     {
      type: 'input',
      name: 'Installation',
      message: 'describe the steps required for project installation?'
     },
     {
      type: 'input',
      name: 'usage',
      message: 'can u provide details of your project for the users to understand better?'
     },
     {
         type: 'input',
         name: 'Contribution',
         message: 'Provide guidelines on how other developers can contribute to this project if needed?'

     },
     {
         type: 'input',
         name: 'Testing',
         message: 'how do you run tests for this project?'
     },
     {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ["MIT","Apache-2.0", "BSD-3-Clause", "BSD-2-Clause", "gpl-license","lgpl-license","MPL-2.0","EPL-2.0"],
        name: 'license'
    },
    {
        type: 'Input',
        message: 'What is your email?',
        name:'email'

    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName, data, err=> err? console.log(err): console.log('success! your readme file is generated')

      
)
}

// TODO: Create a function to initialize app
function init() {
    try{
 inquirer.prompt(questions).then(data=>{
   const readme = generateMarkdown.generateMarkDown(data)
   const badge  = generateMarkdown.renderLicenseBadge(data)
   const fileName = `${data.title.toLowerCase().split(" ").join("")}.md`

    writeToFile(fileName,readme,badge)
 })
    } catch(error){
        console.log(error)
    }
}

// Function call to initialize app
init();
