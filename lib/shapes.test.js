const { Circle, Square, Triangle } = require('./shapes'); 

describe('Shape classes', () => {
  test('Circle class', () => {
    const circle = new Circle();
    circle.setColor('red');
    expect(circle.render()).toBe(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="red" />`);
  });

  test('Square class', () => {
    const square = new Square();
    square.setColor('blue');
    expect(square.render()).toBe(`<rect x="50" y="50" height="200" width="200" fill="blue" />`);
  });

  test('Triangle class', () => {
    const triangle = new Triangle();
    triangle.setColor('green');
    expect(triangle.render()).toBe(`<polygon points="0,200 300,200 150,0" fill="green" />`);
  });
});