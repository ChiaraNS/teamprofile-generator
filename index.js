const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const teamList = [];
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

function managerPrompt() {
    inquirer.prompt(
        [
            {
                type: "input",
                name: "managerName",
                message: "Enter the Manager's name:",
            },
            {
                type: "input",
                name: "managerId",
                message: "Enter the Manager's ID:",
            },
            {
                type: "input",
                name: "managerEmail",
                message: "Enter the Manager's email:",
            },
            {
                type: "number",
                name: "managerNum",
                message: "Enter the Manager's office number:",
            },
        ]
    )
}

function engineerPrompt() {
    inquirer.prompt(
        [
            {
                type: "input",
                name: "engineerName",
                message: "Enter the Engineer's name:",
            },
            {
                type: "input",
                name: "engineerId",
                message: "Enter the Engineer's ID:",
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "Enter the Engineer's email:",
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "Enter the Engineer's GitHub username:",
            },
        ]
    )
}

function internPrompt() {
    inquirer.prompt(
        [
            {
                type: "input",
                name: "internName",
                message: "Enter the Intern's name:",
            },
            {
                type: "input",
                name: "internId",
                message: "Enter the Intern's ID:",
            },
            {
                type: "input",
                name: "internEmail",
                message: "Enter the Intern's email:",
            },
            {
                type: "input",
                name: "internSchool",
                message: "Enter the Intern's school:",
            },
        ]
    )
}

function memberPrompt() {
    inquirer.prompt(
        [
            {

            }
        ]
    )
}