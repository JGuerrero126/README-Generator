const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({ title, description, install, usage, license, contributing, tests, questions }) =>
  `# ${title}

  ## Description
  
  ${description}
  
  ## Installation
  
  ${install}
  
  ## Usage
  
  ${usage}
  
  ## License
  
  ${license}
  
  ## Contributing
  
  ${contributing}
  
  ## Tests
  
  ${tests}
  
  ## Questions
  
  ${questions}`;

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
      choices: ['','','','',''],
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
     name: 'questions',
     message: 'How can people reach you for questions?',
    },

  ])
  .then((answers) => {
    const newREADME = generateREADME(answers);

    fs.writeFile('README.md', newREADME, (err) =>
      err ? console.log(err) : console.log('Hot off the presses! A new README ready to go!')
    );
  });
