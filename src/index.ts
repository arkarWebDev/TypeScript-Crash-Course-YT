// interface
// extend / optional property
import { User } from "./interfaces/user";

let userOne: User = {
  name: "userOne",
  email: "userOne.com",
  isLogin: () => {
    return true;
  },
  getAge() {
    return 20;
  },
  isDriving() {
    return "userOne is driving now.";
  },
};

console.log(userOne);

let userTwo: User = {
  name: "userTwo",
  email: "userTwo.com",
  isLogin: () => {
    return false;
  },
  getAge: () => {
    return 22;
  },
  isDriving() {
    return "userTwo is drived 2min ago.";
  },
};

console.log(userTwo);
