const { test, expect } = require("@jest/globals")
const Employee = require("../lib/Employee.js")

test("creates an employee object", function() {
  const employee = new Employee

  expect(typeof(employee)).toBe("object");
})

test("checks for employee name", () => {
  const  name = "Joe"
  const employee = new Employee(name)

  expect(employee.name).toBe("Joe")
})

test("checks for employee ID", () => {
  const id = "123"
  const employee = new Employee("Joe", id)

  expect(employee.id).toBe("123")
})

test("test for employee email", () => {
  const email = "Joe@example.com"
  const employee = new Employee("Joe", 123, email)

  expect(employee.email).toBe("Joe@example.com")
})

test("gets name through getName method", () => {
  const testName = "Joe"
  const employee = new Employee(testName)

  expect(employee.getName()).toBe(testName);
})

test("gets id through getId method", () => {
  const testId = "123"
  const employee = new Employee("Joe", testId)

  expect(employee.getId()).toBe("123")
})

test("gets email through getEmail method", () => {
  const testEmail = "Joe@example.com"
  const employee = new Employee("Joe", 123, testEmail)

  expect(employee.getEmail()).toBe(testEmail)
})

test("tests role through getRule function", () => {
  const role = "Employee"
  const employee = new Employee("Joe", 123, "Joe@example.com", role)

  expect(employee.getRole()).toBe(role)
})