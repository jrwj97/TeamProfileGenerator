const { test, expect } = require("@jest/globals");
const Intern = require("../lib/Intern.js");

test("can create a school", () => {
  const testSchool = "schoolname"
  const intern = new Intern("Joe", 123, "joe@example.com", testSchool)

  expect(intern.school).toBe(testSchool)
})