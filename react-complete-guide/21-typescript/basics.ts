// let age: number;
// age = 12;

// let userNameL: string;
// let isOlder: boolean;

// let hobbies: string[];
// hobbies = ["test"];

// let person: {
//   name: string;
//   age: number;
// };

// person = {
//   name: "Max",
//   age: 32,
// };

// let people: {
//   name: string;
//   age: number;
// }[];

// Type inference

// let course: string | number = "React";

// course = 12345;

// type Person = {
//   name: string;
//   age: number;
// };

// let person: Person;

// console.log(person);

// function multiply(a: number, b: number): number {
//   return a * b;
// }

// function print(value: any): void {
//   console.log(value);
// }

// Generics

function inserAtBeginning<T>(array: T[], value: T): T[] {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = inserAtBeginning(demoArray, -1);

console.log(updatedArray);
