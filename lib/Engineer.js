const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(id, name, email, github){
        super(id, name, email)
        this.github = github
    }

    getGithub() {
        return this.github
    }

    getRole() {
        return 'Engineer'
    }

    getRoleItem() {
        return `GitHub: <a href="https://github.com/${this.github}" target="_blank">${this.github}</a>`
    }
}

module.exports = Engineer;