const generateHtml = function generateWeb (teamList) {

const generateManagerHtml = function (manager) {
    return `
    <div class="row card col-4">
    <div class="card-header text-center">
        <h2 class="card-title">${manager.getName()}</h2>
        <h3 class="card-title">${manager.getRole()}</h3>
    </div>
    <div class="card-body">
        <h4 class="list-group-item">iD: ${manager.getId()}</h4>
        <h4 class="list-group-item">email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></h4>
        <h4 class="list-group-item">Office #: ${manager.getOfficeNumber()}</h4>
    </div>
</div>`
};

const generateEngineerHtml = function (engineer) {
    return ` 
    <div class="row card col-4">
    <div class="card-header text-center">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title">${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <h4 class="list-group-item">iD: ${engineer.getId()}</h4>
        <h4 class="list-group-item">email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></h4>
        <h4 class="list-group-item">Github: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></h4>
    </div>
</div>`
};

const generateInternHtml = function (intern) {
    return `
    <div class="row card col-4">
    <div class="card-header text-center">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title">${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <h4 class="list-group-item">iD: ${intern.getId()}</h4>
        <h4 class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></h4>
        <h4 class="list-group-item">School: ${intern.getSchool()}</h4>
    </div>
</div>`
};
const data = [];
data.push(teamList.filter(employee => employee.getRole() == "Manager").map(manager => generateManagerHtml(manager)));
data.push(teamList.filter(employee => employee.getRole() == "Engineer").map(engineer => generateEngineerHtml(engineer)));
data.push(teamList.filter(employee => employee.getRole() == "Intern").map(intern => generateInternHtml(intern)));
return data.flat().join("");
}

module.exports = team => {
    return `
    <!DOCTYPE html>
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
        
        <div class="container">
            ${generateHtml(team)}
        </div>
    </body>
    </html>`
}