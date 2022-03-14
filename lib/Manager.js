const Employee = require('./Employee')

class Manager extends Employee{
    constructor(id, name, email, officeNumber){
        super(id, name, email)
        this.officeNumber = officeNumber
    }
    getOfficeNumber() {
        return this.officeNumber
    }
    
    getRole() {
        return 'Manager'
    }

    getRoleItem() {
        return `Office Number: ${this.officeNumber}`
    }
}

module.exports = Manager;