"use strict";
let userOne = {
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
console.log(userOne.email);
let userTwo = {
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
