const Intern = require('../lib/Intern')

describe("Intern", () => {
    describe("getGithub", () => {
        it("should return github value", () => {
            let intern = new Intern;
            intern.school = 'Denver University'
            expect(intern.school).toEqual(intern.getSchool())
        })
    })
})