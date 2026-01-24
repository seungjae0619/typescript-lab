/**
 * 접슨 제어자
 * access modigier
 * => public private protected
 */

class Employee {
  constructor(
    private name: string,
    protected age: number,
    public position: string,
  ) {}

  work() {
    console.log("일함");
  }
}

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number,
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  // 메서드
  func() {
    this.age;
    this.position;
  }
}

const employee = new Employee("박승재", 23, "developer");

console.log(employee);
