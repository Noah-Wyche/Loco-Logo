// Function to collect user input
async function collectUserInput() {
    // Import inquirer module using dynamic import
    const { default: inquirer } = await import('inquirer');

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
            name: 'shapeColor',
            message: 'Enter a color for the shape (keyword or hexadecimal):'
        },
        {
            type: 'input',
            name: 'text',
            message: 'Enter text for the logo (up to three characters):',
            validate: function (input) {
                return input.length <= 3 || 'Please enter up to three characters.';
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter a color for the text (keyword or hexadecimal):'
        }
    ];

    // Prompt the user with the questions and wait for their responses
    const answers = await inquirer.prompt(questions);

    // Return the user's answers
    return answers;
}

module.exports = { collectUserInput };
