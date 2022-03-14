const Employee = require('../lib/Employee')

describe("Employee", () => {
    describe("getName", () => {
        it("should return name value", () => {
            let employee = new Employee;
            employee.name = 'John Doe'
            expect(employee.name).toEqual(employee.getName())
        })
    })

    describe("getId", () => {
        it("should return id value", () => {
            let employee = new Employee;
            employee.id = 20
            expect(employee.id).toEqual(employee.getId())
        })
    })

    describe("getEmail", () => {
        it("should return name value", () => {
            let employee = new Employee;
            employee.email = 'employee@business.mail.com'
            expect(employee.email).toEqual(employee.getEmail())
        })
    })
})