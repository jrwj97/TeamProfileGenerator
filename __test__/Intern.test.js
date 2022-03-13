const { test, expect } = require("@jest/globals");
const Intern = require("../lib/Intern.js");

test("can create a school", () => {
  const testSchool = "schoolname"
  const intern = new Intern("Joe", 123, "joe@example.com", testSchool)

  expect(intern.school).toBe(testSchool)
})

test("running getSchool method will return school", () => {
  const testSchool = "schoolname"
  const intern = new Intern("Joe", 123, "joe@example.com", testSchool)

  expect(intern.getSchool()).toBe(testSchool)
})

test("running getRol function iwll return role", () => {
  const testRole = "Intern"
  const intern = new Intern("Joe", 123, "joe@example.com", "schoolname")

  expect(intern.getRole()).toBe(testRole)
})