# SVG Logo Generator
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Mozilla
This command-line application allows you to create simple SVG logos based on user input. The application prompts the user for a text, text color, shape type, and shape color, and then generates an SVG file named logo.svg that matches the entered criteria.
## User Story
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer

 ## Acceptance Criteria
GIVEN a command-line application that accepts user input <br>
WHEN I am prompted for text<br>
THEN I can enter up to three characters<br>
WHEN I am prompted for the text color<br>
THEN I can enter a color keyword (OR a hexadecimal number)<br>
WHEN I am prompted for a shape<br>
THEN I am presented with a list of shapes to choose from: circle, triangle, and square<br>
WHEN I am prompted for the shape's color<br>
THEN I can enter a color keyword (OR a hexadecimal number)<br>
WHEN I have entered input for all the prompts<br>
THEN an SVG file is created named `logo.svg`<br>
AND the output text "Generated logo.svg" is printed in the command line<br>
WHEN I open the `logo.svg` file in a browser<br>
THEN I am shown a 300x200 pixel image that matches the criteria I entered<br>
## Usage
When you run the application, you will be prompted for the following:

Text: Enter up to three characters.
Text Color: Enter a color keyword or a hexadecimal number.
Shape: Choose a shape from the options: circle, triangle, or square.
Shape’s Color: Enter a color keyword or a hexadecimal number.
After you have entered input for all the prompts, an SVG file named logo.svg is created and the output text “Generated logo.svg” is printed in the command line. When you open the logo.svg file in a browser, you will see a 300x200 pixel image that matches the criteria you entered.

## Project Structure
The project has the following structure:
.
├── examples/           // Example SVG files created with the app
├── lib/                // Folder for classes or functions
│   ├── shapes.js       // Exports `Triangle`, `Circle`, and `Square` classes
│   ├── shapes.test.js  // Jest tests for shapes
│   └── more...         // Additional files and tests
├── .gitignore          // Indicates which folders and files Git should ignore
├── index.js            // Runs the application using imports from lib/
├── package.json        // Defines project metadata and dependencies
└── README.md           // This file


## Installation
To install the application, you’ll need to have Node.js installed on your machine. Then, clone this repository to your local machine, navigate to the project directory in your terminal, and run npm install to install the necessary dependencies.

## Running Tests
Tests for this project are written using Jest. To run the tests, navigate to the project directory in your terminal and run npm test.
![Alt text](<lib/Images/SVG - imag- Test screenshot.png>)


## Final product
![Alt text](<lib/Images/SVG image Example.png>)

## lisence
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
MIT License

Copyright (c) 2023 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

## Link 




