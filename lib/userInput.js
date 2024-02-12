const inquirer = require('inquirer');

// Function to collect user input
async function collectUserInput() {
    // Define questions for the user
    const questions = [
        {
            type: 'list',
            name: 'shape',
            message: 'Select a shape:',
            choices: ['Triangle', 'Circle', 'Square']
        },
        {
            type: 'input',
            name: 'color',
            message: 'Enter a color (keyword or hexadecimal):'
        },
        {
            type: 'input',
            name: 'text',
            message: 'Enter text for the logo (up to three characters):',
            validate: function (input) {
                return input.length <= 3 || 'Please enter up to three characters.';
            }
        }
    ];

    // Prompt the user with the questions and wait for their responses
    const answers = await inquirer.prompt(questions);

    // Return the user's answers
    return answers;
}

module.exports = { collectUserInput };
