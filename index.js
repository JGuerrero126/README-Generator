const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({ title, description, install, usage, license, contributing, tests, email, username }) =>
`# ${title} ![license](https://img.shields.io/badge/license-${license}-green)
  
${description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)
  
## Installation
*****
  
${install}
  
## Usage
*****
  
${usage}
  
## Contributing
*****
  
${contributing}
  
## Tests
*****
  
${tests}
  
## Questions
*****

For any questions you can reach me at:

 Email: ${email}

 GitHub: https://github.com/${username}
  
## License
*****
  
This project is protected under the ${license} license and all relevant protections are granted.`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Can you give a brief description of the project?',
    },
    {
      type: 'input',
      name: 'install',
      message: 'How would you go about installing the project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Give some directions for the usage of your project.',
    },
    {
      type: 'list',
      name: 'license',
      choices: ['MIT','Apache','GPL'],
      message: 'What license does this project fall under?',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'How can people contribute if they so choose?',
    },
    {
     type: 'input',
     name: 'tests',
     message: 'What tests have you done with this project?',
    },
    {
     type: 'input',
     name: 'email',
     message: 'What Email can people use to reach you for questions?',
    },
    {
     type: 'input',
     name: 'username',
     message: 'What is your GitHub username?',
    },

  ])
  .then((answers) => {
    const newREADME = generateREADME(answers);

    fs.writeFile('README.md', newREADME, (err) =>
      err ? console.log(err) : console.log('Hot off the presses! A new README ready to go!')
    );
  });
