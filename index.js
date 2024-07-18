// include packages
const inquirer = require('inquirer');
const fs = require('fs');

let logo;
let textColor;
let shape;
let shapeColor;


// write to file
function writeToFile(data) {
    fs.writeFile('examples/test.svg', data, (err) =>
    err ? console.error(err) : console.log('Success!'));
}

// initialize app 
function init() {
    // collect user input
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'enter up to three characters',
                name: 'characters'
            },
            {
                type: 'input',
                message: 'enter text color',
                name: 'text_color'
            },
            {
                type: 'list',
                message: 'choose a shape',
                choices: ['circle', 'triangle', 'square'],
                name: 'shape'
            },
            {
                type: 'input',
                message: 'enter shape color',
                name: 'shape_color'
            }
        ])
        // generate svg
        .then((response) => {
            logo = response.characters;
            textColor = response.text_color;
            shape = response.shape;
            shapeColor = response.shape_color;
            writeToFile(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><${shape} cx="150" cy="100" r="80" fill="${shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${logo}</text></svg>`);
        })
    
}

// Function call to initialize app
init();
