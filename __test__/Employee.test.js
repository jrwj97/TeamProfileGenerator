const { test, expect } = require("@jest/globals")
const Employee = require("../lib/Employee.js")

test("creates an employee object", function() {
  const employee = new Employee

  expect(typeof(employee)).toBe("object");
})

tets("")