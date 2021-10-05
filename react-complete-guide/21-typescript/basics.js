// let age: number;
// age = 12;
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
function inserAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArray = [1, 2, 3];
var updatedArray = inserAtBeginning(demoArray, -1);
console.log(updatedArray);
