const { expect, test } = require("@jest/globals");
const Engineer = require("../lib/Engineer.js");

test("can create a github link", () => {
  const github = "githubprofile"
  const engineer = new Engineer("Joe", 123, "Joe@example.com", github)
  

  expect(engineer.github).toBe(github)
})

test("getGithub will return a github link", () => {
  const github = "githubprofile"
  const engineer = new Engineer("Joe", 123, "Joe@example.com", github)

  expect(engineer.getGithub()).toBe(github)
})

test("test role using gitRole", () => {
  const testRole = "Engineer"
  const engineer = new Engineer("Joe", 123, "Joe@example.com", "githubprofile")

  expect(engineer.getRole()).toBe(testRole)
})