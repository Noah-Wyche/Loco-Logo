const fs = require('fs');

// Function to save SVG content to a file
async function saveToFile(svgContent, filename) {
    try {
        // Write SVG content to the specified file
        await fs.promises.writeFile(filename, svgContent);
    } catch (error) {
        // Handle any errors that occur during file writing
        throw new Error(`Unable to write to file ${filename}: ${error}`);
    }
}

module.exports = { saveToFile };
