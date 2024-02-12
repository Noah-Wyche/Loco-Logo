// Importing the Shapes classes
const { Triangle, Circle, Square } = require('./shapes');

// Triangle Test
describe('Triangle', () => {
    test('renders triangle with specified color', () => {
        const triangle = new Triangle();
        triangle.setColor('blue');
        expect(triangle.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="blue" />');
    });
});

// Circle Test
describe('Circle', () => {
    test('renders circle with specified color', () => {
        const circle = new Circle();
        circle.setColor('green');
        expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
    });
});

// Square
describe('Square', () => {
    test('renders square with specified color', () => {
        const square = new Square();
        square.setColor('red');
        expect(square.render()).toEqual('<rect x="50" y="50" width="200" height="200" fill="red" />');
    });
});
