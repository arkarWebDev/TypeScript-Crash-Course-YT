"use strict";
let getInfo = (name, age) => {
    console.log(`${name} is ${age} years old.`);
};
getInfo("arkar", 20);
let getFullInfo = (info) => {
    console.log(`${info.name} is ${info.age} years old and working at ${info.job}`);
};
getFullInfo({
    name: "arkar",
    age: 20,
    job: "code hub",
});
let getFullInfomation = (info) => {
    console.log(`${info.name} is ${info.age} years old and working at ${info.job}`);
};
getFullInfomation({
    name: "arkar",
    age: 20,
    job: "code hub",
});
