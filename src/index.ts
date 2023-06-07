// Explicit type
let age: number = 20;
let fullName: string = "Nhathv";
let isMale: boolean = true;
let numberList: number[] = [1, 2, 3];
// Inferred type
let age2 = 20;
let fullName2 = "Nhathv";
let isMale2 = true;
let numberList2 = [1, 2, 3];
// Function
function add(a: number, b: number): number {
  return a + b;
}
// Arrray
let numberList3: number[] = [1, 2, 3];
let numberList4: Array<number> = [1, 2, 3]; //Generics
// Type alias vs interface
type User = {
  name: string;
  age: number;
  school: string;
  gender: string;
};
interface User2 {
  name: string;
  age: number;
  school: string;
  gender: string;
}
// Union type
type status = "active" | "inactive" | "pending";
type studentId = string | number;
const student1: studentId = 123;
const student2: studentId = "123";

// Intersection type
interface Home {
  address: string;
  city: string;
}
interface Contact {
  phone: string;
  email: string;
}
type HomeContact = Home & Contact;
const homeContact: HomeContact = {
  address: "123",
  city: "HCM",
  phone: "123",
  email: "123",
};

// Enum
enum Status {
  PENDING, // 0
  IN_PROGRESS, // 1
  DONE, // 2
  CANCELLED, // 3
}
const status1: Status = Status.PENDING; // 0
// Class
class PersonV1 {
  private name: string;
  public age: number;
  readonly money: number = 20;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  handle() {
    this.name;
  }
}
const nhathv = new PersonV1("Nhathv", 20);
// nhathv.name; // error
nhathv.age; // 20
// nhathv.money = 20 // error
nhathv.money; // 20
