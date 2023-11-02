const fs = require("fs");
const inquirer = require("inquirer");
const {Circle, Square, Triangle} = require("./lib/shapes");


const questions = [
    {
        type: "input",
        name: "text",
        message: "TEXT: Enter up to (3) Characters:",
    },
    {
        type: "input",
        name: "text-color",
        message: "TEXT COLOR: Enter a color keyword (OR a hexadecimal number):",
    },
    {
        type: "list",
        name: "shape-type",
        message: "Choose which Pixel Image you would like?",
        choices: ["Circle", "Square", "Triangle"],
    },
    
    {
        type: "input",
        name: "shape-color",
        message: "SHAPE COLOR: Enter a color keyword (OR a hexadecimal number):",
    },
    
];
inquirer.prompt(questions).then((answers) => {
    let shape;
    switch (answers['shape-type']) {
        case 'Circle':
            shape = new Circle();
            break;
        case 'Square':
            shape = new Square();
            break;
        case 'Triangle':
            shape = new Triangle();
            break;
    }

    shape.setColor(answers['shape-color']);

    let textElement = `<text x="150" y="145" font-size="60" text-anchor="middle" fill="${answers['text-color']}">${answers.text}</text>`;
    let svgData = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${shape.render()}${textElement}</svg>`;

    fs.writeFile('logo.svg', svgData, (err) => {
        if (err) throw err;
        console.log('Generated logo.svg');
    });
});
