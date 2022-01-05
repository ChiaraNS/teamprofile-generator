const inquirer = require("inquirer");
const fs = require("fs");
//const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const teamList = [];


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
    .then(function(answers) {
        let name = answers.managerName;
        let id = answers.managerId;
        let email = answers.managerEmail;
        let number = answers.mangerNum;
        let manager = new Manager(name, id, email, number);
        teamList.push(manager);
        memberPrompt();
    })
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
    .then(function(answers) {
        let name = answers.engineerName;
        let id = answers.engineerId;
        let email = answers.engineerEmail;
        let github = answers.engineerGithub;
        let engineer = new Engineer(name, id, email, github);
        teamList.push(engineer);
        memberPrompt();
    })
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
    .then(function(answers) {
        let name = answers.internName;
        let id = answers.internId;
        let email = answers.internEmail;
        let school = answers.internSchool;
        let intern = new Intern(name, id, email, school);
        teamList.push(intern);
        memberPrompt();
    })
}

function memberPrompt() {
    inquirer.prompt(
        [
            {
                type: "list",
                name: "newMember",
                message: "Are there any other team members?",
                choices: ["Add Engineer", "Add Intern", "No, finish building my team!"],
            }
        ]
    )
    .then(memberPrompt => {
        if (memberPrompt.newMember === 'Add Engineer') {
            engineerPrompt();
        } else if (memberPrompt.newMember === 'Add Intern') {
            internPrompt();
        } else if (memberPrompt.newMember === 'No, finish building my team!') {
            createProfile();
        }
    })
}

function createProfile() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profiles</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha256-YvdLHPgkqJ8DVUxjjnGVlMMJtNimJ6dYkowFFvp4kKs=" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 mb-4 jumbotron">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        
        <div class="container">`;
        fs.writeFile()
},

// function init() {
//     managerPrompt();
// },

//fs.writeFile(`./)
//init();