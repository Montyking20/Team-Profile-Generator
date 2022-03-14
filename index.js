// Imports
const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const templateHelper = require('./src/templateHelper')

// Questions 
const questionsManager = [
    {
        type: 'input',
        name: 'name',
        message: "What is the Managers name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the Managers id?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the Managers email?",
    },
    {
        type: 'input',
        name: 'officeNum',
        message: "What is the Managers office number?",
    }
]

const menuQuestion = [
    {
        type: 'checkbox',
        message: 'Add Employee',
        name: 'addTeam',
        choices: [
            new inquirer.Separator('### Employee ###'),
            {
                name: 'No more employees',
            },
            {
                name: 'Engineer',
            }, 
            {
                name: 'Intern',
            }
        ],     
        validate(answer) {
            if (answer.length < 1) {
              return 'You must choose a employee or none.';
            }
            return true;
          }
    }
]

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Name of intern?",
    },
    {
        type: 'input',
        name: 'id',
        message: "Intern ID?",
    },
    {
        type: 'input',
        name: 'email',
        message: "Intern email?",
    },
    {
        type: 'input',
        name: 'school',
        message: "School of Intern?",
    }
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the Engineers name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the Engineers id?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the Engineers email?",
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the Engineers Github username?",
    }
]

// Employee Addition functions 
const engineerAdd = async () => {
    const questions = await inquirer.prompt(engineerQuestions).then((answers) => {
        return answers
    });
    const engineer = await new Engineer(questions.name, questions.id, questions.email, questions.github)
    return engineer
}

const internAdd = async () => {
    const questions = await inquirer.prompt(internQuestions).then((answers) => {
        return answers
    });
    const intern = await new Intern(questions.name, questions.id, questions.email, questions.school)
    return intern
}

const manager = async () => {
    const questions = await inquirer.prompt(questionsManager).then((answers) => {
        return answers
    });
    const manager = await new Manager(questions.name, questions.id, questions.email, questions.officeNum)
    const managerHTML = `<div class="col">  
        <div class="card h-100" style="width: 20rem;">    
          <div class="card-color">
            <div class="card-body">
              <section class="card-header">  
              <h5 class="card-title">${manager.id}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${manager.getRole()}</h6>
              </section>
              <label>ID:</label>
                <a class="card-text">${manager.name}</a>
                <br>
              <label>Email:</label>
                <a href="mailto:${manager.email}" class="card-link">${manager.email}</a>
                <br>
              <label>Office number:</label>
               <a class="card-text"> ${manager.getOfficeNumber()}</a>
            </div>
          </div>
        </div>
      </div>`
      return managerHTML
}

const menu = async () => {
    const questions = await inquirer.prompt(menuQuestion).then((answers) => {
        return answers
    });
    const addTeamSelect = questions.addTeam[0]
    if(addTeamSelect === 'No more employees') {
        return 'None'
    }
    if(addTeamSelect === 'Intern') {
        let x = await internAdd()
        const internHTML = `<div class="col">
        <div class="card h-5" style="width: 20rem;">
          <div class="card-color">
            <div class="card-body">
              <section class="card-header">
              <h5 class="card-title">${x.id}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${x.getRole()}</h6>
              </section>
              <label>ID:</label>
                <a class="card-text">${x.name}</a>
                <br>
              <label>Email:</label>
                <a href="mailto:${x.email}" class="card-link">${x.email}</a>
                <br>
              <label>School:</label>
                <a class="card-text">${x.getSchool()}</a>
            </div>
          </div>
        </div>
      </div>`
      return internHTML
    }
    if(addTeamSelect === 'Engineer') {
        let x = await engineerAdd()
        const engineerHTML = `<div class="col"> 
        <div class="card h-100" style="width: 20rem;">   
          <div class="card-color" >
            <div class="card-body">
                <section class="card-header">
                <h5 class="card-title">${x.id}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${x.getRole()}</h6>
                </section>
                <label>ID:</label>
                  <a class="card-text"> ${x.name}</a>
                  <br>
                <label>Email:</label>  
                  <a href="mailto:${x.email}" class="card-link" style="background-color: #fff;">${x.email}</a> 
                  <br>
                <label>Github:</label>
                  <a href="https://github.com/${x.getGithub()}" class="card-link">${x.getGithub()}</a>
            </div>
          </div>
        </div>
      </div>`
         return engineerHTML
    } 
}

const writeHTML = async(html) => {
    const htmlContent = await templateHelper(html)
    fs.writeFile('./dist/index.html', htmlContent, err => {
        if (err) {
            console.error(err)
            return
        }
        console.info('HTML File Created ./dist/index.html')
    })
}

// Main Function 
const main = async () => {
    let html = ""
    const managerHTML = await manager()
    html += managerHTML
    // Use while loop to get all employees 
    let moreEmployees = await menu()
    // The html add sections to HTML string
    html += moreEmployees
    while (moreEmployees !== 'None') {
        moreEmployees = await menu()
        
        if(moreEmployees !== 'None') {
            html += moreEmployees
        }
    }

    writeHTML(html)
}

// Init Main
main()