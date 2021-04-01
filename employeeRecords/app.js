// // First Run

// const employees = []

// function Employee(name, job, salary, status = "Full Time") {
//     this.name = name
//     this.job = job
//     this.salary = salary
//     this.status = status
// }

// Employee.prototype.printEmployeeForm = function(){
//     console.log("Name: " + this.name + "," , "Job Status: " + this.job + "," , "Salary: " + this.salary + "," , "Status: " + this.status)
// }

// const employee1 = new Employee("Rick", "Warehouse", "$50,000", "Part Time")
// employee1.printEmployeeForm()
// employees.push(employee1)

// const employee2 = new Employee("Rack", "Manager", "$15,000", "Contract")
// employee2.printEmployeeForm()
// employees.push(employee2)

// const employee3 = new Employee("Reck", "Salesman", "$200,000")
// employee3.printEmployeeForm()
// employees.push(employee3)

// console.log(employees)

// // Second Run

const employees = []

function Employee(name, job, salary, status = "Full Time"){
    this.name = name;
    this.job = job;
    this.salary = salary;
    this.status = status;
}

Employee.prototype.printEmployeeForm = function(){
    employees.push(this)
}

let employee1 = new Employee("Rick", "Manager", "$50,000")
employee1.printEmployeeForm()

let employee2 = new Employee ("Mick", "Cashier", "$30,000", "Part Time")
employee2.printEmployeeForm()

let employee3 = new Employee ("Brick", "Loader", "$40,000", "Contract")
employee3.printEmployeeForm()

console.log(employees)