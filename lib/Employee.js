const { ModuleMocker } = require("jest-mock");

function Employee (name = "", id, email, role) {
  this.name = name;
  this.id = id;
  this.email = email;
  this.role = role;
}


module.exports = Employee;