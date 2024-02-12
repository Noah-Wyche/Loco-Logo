// Import necessary modules
const inquirer = require('inquirer');
const { generateSVG } = require('./lib/svgGenerator');
const { saveToFile } = require('./lib/fileWriter');
const { collectUserInput } = require('./lib/userInput');

// Main function to run the application
async function run() {
    try {
        // Collect user input
        const userInput = await collectUserInput();

        // Generate SVG based on user input
        const svgContent = generateSVG(userInput);

        // Save SVG to file
        await saveToFile(svgContent, 'logo.svg');

        // Print success message
        console.log('Generated logo.svg');
    } catch (error) {
        // Handle errors
        console.error('An error occurred:', error);
    }
}

// Invoke the main function
run();