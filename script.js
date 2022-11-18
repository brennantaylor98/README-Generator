const inquirer = require('inquirer')
const fs = require('fs')

const generateString = (resp) => 
`# Title
${resp.title}
![${resp.license}](https://img.shields.io/badge/license-${resp.license}-blue)

## Description
${resp.description} 

[Alt text](./"Link to attached video file of your project)

## Table of Contents
1.  [title](#title)
2.  [description](#description)
3.  [installation](#installation)
4.  [useage](#useage)
5.  [license](#license)
6.  [contributing](#contributing)
7.  [tests](#tests)
8.  [questions](#questions)

## Installation
${resp.installation}

## Usage
${resp.useage}

## License
![${resp.license}](https://img.shields.io/badge/license-${resp.license}-blue)

## Contributing
${resp.contributing}

## Tests 
${resp.tests}

## Questions
[${resp.username}](https://github.com/${resp.username})
`


function start() {
    inquirer.prompt([
        {
            name:"title",
            type: 'input',
            message: 'What is the title of your project?',

        },

        {
            name:"description",
            type: 'input',
            message: 'Please provide a short description of your project.',
        },

        {
            name:"tableOfContents",
            type: 'checkbox',
            message: 'Include a table of contents?',
            choices: ['yes', 'no']
        },

        {
            name:"installation",
            type: 'input',
            message: 'Please describe the steps required to install your project, provide step by step instructions.',
        },

        {
            name:"useage",
            type: 'input',
            message: 'Please provide instructions and examples for use.',
        },

        {
            name:"license",
            type: 'list',
            message: 'Which license are you using?',
            default: 'MIT',
            choices: ['Apache License 2.0','MIT', 'Boost Software License 1.0', 'Mozilla Public License 2.0'] 
        },

        {
            name:"contributing",
            type: 'input',
            message: 'Please list your contributuors to your project; persons or sites used.',
        },

        {
            name:"tests",
            type: 'input',
            message: 'Please write the tests for your code.(optional)',
        },

        {
            name:"username",
            type: 'input',
            message: 'Please enter your GitHub username.',
        },
    ]).then ((resp) => {
fs.writeFile('ReadME.md', generateString(resp), (err) => {
    if(err) {
        return console.log(err)
    }

    return console.log('generated')
})
    })
}



start()