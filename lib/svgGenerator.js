// Function to generate SVG based on user input
function generateSVG(userInput) {
    // Extract user input
    const { shape, color, text } = userInput;

    // Generate SVG based on the selected shape
    let svgContent;
    switch (shape.toLowerCase()) {
        case 'circle':
            svgContent = generateCircleSVG(color, text);
            break;
        case 'triangle':
            svgContent = generateTriangleSVG(color, text);
            break;
        case 'square':
            svgContent = generateSquareSVG(color, text);
            break;
        default:
            throw new Error('Invalid shape selection.');
    }

    return svgContent;
}

// Function to generate SVG for a circle
function generateCircleSVG(color, text) {
    const svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="150" cy="100" r="50" fill="${color}" />
                    <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" font-size="24" fill="white">${text}</text>
                </svg>`;
    return svg;
}

// Function to generate SVG for a triangle
function generateTriangleSVG(color, text) {
    const svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="150,50 100,150 200,150" fill="${color}" />
                    <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" font-size="24" fill="white">${text}</text>
                </svg>`;
    return svg;
}

// Function to generate SVG for a square
function generateSquareSVG(color, text) {
    const svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                    <rect x="50" y="50" width="200" height="200" fill="${color}" />
                    <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" font-size="24" fill="white">${text}</text>
                </svg>`;
    return svg;
}

module.exports = { generateSVG };