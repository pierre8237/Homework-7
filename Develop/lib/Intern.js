// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');
class Intern extends Employee {
    constructor(id, name, email, school) {
      super(id, name, email);
      this.school = school;
    }
    getName() {
      return this.name;
    }

    getId() {
      return this.id;
    }

    getEmail() {
      return this.email;
    }    

    getRole() {
      return "Intern";
    }   
    getSchool() {
      return this.school;
    }
    }; 

    const intern = new Employee()

    module.exports = Intern;
