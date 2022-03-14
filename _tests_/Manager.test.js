const Manager = require('../lib/Manager')

describe("Manager", () => {
    describe("getGithub", () => {
        it("should return github value", () => {
            let manager = new Manager;
            manager.officeNumber = '2201'
            expect(manager.officeNumber).toEqual(manager.getOfficeNumber())
        })
    })
})