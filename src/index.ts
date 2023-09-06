// Explicit Types
let person: string;
person = "arkar";
// person=true;

let num: number;
num = 10;
// num = "10"

let bool: boolean;
bool = true;
bool = false;
// bool = "true"

// array
let workers: string[];
// workers = ["arkar",10,true]

let nums: number[];
nums = [1, 2, 3, 4];

let bools: boolean[];
bools = [true, false];

// union type
let mixed: (boolean | string)[];
mixed = [true, "arkar", false, "abcd"];

// object
let personOne: {
  name: string;
  age: number;
  passed: boolean;
};

personOne = {
  name: "arkar",
  age: 20,
  passed: true,
};
