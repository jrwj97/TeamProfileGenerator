const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager')
const inquirer = require("inquirer")
const path = require("path");
const fs = require("fs")
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const generateTeam = require("./lib/generateHTML")

teamArray = [];

function htmlBuilder() {
  console.log("Your team has been created!")

  fs.writeFileSync(outputPath, generateTeam(teamArray), "UTF-8")
}

function createTeam() {
  inquirer.prompt([{
    type: "list",
    message: "What type of employee would you like to add to your team?",
    name: "employeeType",
    choices: ["Manager", "Engineer", "Intern", "No more team members needed"]
  }]).then (function (userInput) {
    switch (userInput.employeeType) {
      case "Manager":
        addManager();
        break;
      case "Engineer":
        addEngineer();
        break;
      case "Intern":
        addIntern();
        break;
      
      case "No more team members needed":
        htmlBuilder();
    }
  })
}

function addManager() {
  inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is the name of the Manager?"
    },
    {
      type: "input",
      name: "managerId",
      message: "What is the Managers ID?"
    },
    {
      type: "input",
      name: "managerEmail",
      message: "What is the Managers email?"
    },
    {
      type: "input",
      name: "managerOfficeNumber",
      message: "What is the managers office number?"
    }
  ]).then(answers => {
    const manager = new Manager (answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
    teamArray.push(manager);
    createTeam();
  });
}

function addEngineer() {
  inquirer.prompt([
    {
      type: "input",
      name: "engineerName",
      message: "What is the engineers name?"
    },
    {
      type: "input",
      name: "engineerId",
      message: "What is the engineers ID?"
    },
    {
      type: "input",
      name: "engineerEmail",
      message: "What is the engineers email?"
    },
    {
      type: "input",
      name: "engineerGithub",
      message: "What is the engineers GitHub username?"
    }
  ]).then(answers => {
    const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub)
    teamArray.push(engineer);
    createTeam();
  });
}

function addIntern() {
  inquirer.prompt([
    {
      type: "input",
      name: "internName",
      message: "What is the interns name?"
    },
    {
      type: "input",
      name: "internId",
      message: "What is the interns ID?"
    },
    {
      type: "input",
      name: "internEmail",
      message: "What is the interns email?"
    },
    {
      type: "input",
      name: "internSchool",
      message: "What school does the intern currently attend?"
    }
  ]).then(answers => {
    const intern = new Intern (answers.internName, answers.internId, answers.internEmail, answers.internSchool);
    teamArray.push(intern);
    createTeam();
  })
}

createTeam ();













