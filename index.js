// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// Create an array of questions for user input and generate a ReadMe file
function responses() {
inquirer
    .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a brief description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions for this project:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Is there any usage information?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide any contribution guidelines:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide test instructions:',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Pick a license (MIT, Apache, or IBM):',
    },
    {
        type: 'input',
        name: 'Github',
        message: 'What is your GitHub profile user name?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    }
]) .then (function(results) {
    const outputText = generateMarkdown(results);
    console.log(outputText);
    console.log(results);
    license = results.license;
    fs.writeFile("GENERATEDREADME.md", outputText, (error) => {
        if (error) {
            console.error(error);
        } else {
            console.log("Success!");
        }
    })
})
};

// Create a function to initialize app
function init() {
    responses();
}

// Function call to initialize app
init();


// ${license}
