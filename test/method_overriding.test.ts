describe("Method Overriding", () => {
  class Employee {
    name: string;
    constructor(name: string) {
      this.name = name;
    }

    sayHello(name: string): void {
      console.log(`Hello ${name}, my name is ${this.name}`);
    }
  }

  class Manager extends Employee {
    sayHello(name: string): void {
      console.log(`Hello ${name}, my name is ${this.name}, I'm your manager`);
      
    }
  }

  it("Should can override method", () => {
    const employee: Employee = new Employee("Aldi");
    employee.sayHello("Tegar");

    const manager: Manager = new Manager("Aldi");
    manager.sayHello("Tegar");
  });
});
