const { expect, test } = require("@jest/globals");
const Manager = require("../lib/Manager")

test("is able to create an office number", () => {
  const testOffice = 123;
  const manager = new Manager("Joe", 123, "Joe@example.com", testOffice)

  expect(manager.officeNumber).toBe(testOffice);
})

test("getOfficeNumber will return office number", () => {
  const testOffice = 123;
  const manager = new Manager("Joe", 123, "Joe@example.com", testOffice)

  expect(manager.getOfficeNumber()).toBe(testOffice);
})

test("tests role when usinf getRole", () => {
  const testRole = "Manager"
  const manager = new Manager("Joe", 123, "Joe@example.com", 123)

  expect(manager.getRole()).toBe("Manager")
})