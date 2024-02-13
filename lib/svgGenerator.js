// Function to generate SVG based on user input
function generateSVG(userInput) {
    // Extract user input
    const { shape, shapeColor, text, textColor } = userInput;

    // Generate SVG based on the selected shape
    let svgContent;
    switch (shape.toLowerCase()) {
        case 'circle':
            svgContent = generateCircleSVG(shapeColor, text, textColor);
            break;
        case 'triangle':
            svgContent = generateTriangleSVG(shapeColor, text, textColor);
            break;
        case 'square':
            svgContent = generateSquareSVG(shapeColor, text, textColor);
            break;
        default:
            throw new Error('Invalid shape selection.');
    }

    return svgContent;
}

// Function to generate SVG for a circle
function generateCircleSVG(shapeColor, text, textColor) {
    const svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="150" cy="100" r="50" fill="${shapeColor}" />
                    <text x="150" y="100" text-anchor="middle" alignment-baseline="middle" font-size="32" fill="${textColor}">${text}</text>
                </svg>`;
    return svg;
}

// Function to generate SVG for a triangle
function generateTriangleSVG(shapeColor, text, textColor) {
    const svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="150,50 100,150 200,150" fill="${shapeColor}" />
                    <text x="150" y="130" text-anchor="middle" alignment-baseline="middle" font-size="32" fill="${textColor}">${text}</text>
                </svg>`;
    return svg;
}

// Function to generate SVG for a square
function generateSquareSVG(shapeColor, text, textColor) {
    const svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                    <rect x="50" y="50" width="200" height="200" fill="${shapeColor}" />
                    <text x="150" y="150" text-anchor="middle" alignment-baseline="middle" font-size="32" fill="${textColor}">${text}</text>
                </svg>`;
    return svg;
}

module.exports = { generateSVG };