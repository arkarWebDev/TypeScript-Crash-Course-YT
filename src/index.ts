type strOrNum = number | string;
type infoObj = { name: string; age: strOrNum; job: string };

let getInfo = (name: string, age: strOrNum): void => {
  console.log(`${name} is ${age} years old.`);
};
getInfo("arkar", 20);

let getFullInfo = (info: infoObj) => {
  console.log(
    `${info.name} is ${info.age} years old and working at ${info.job}`
  );
};
getFullInfo({
  name: "arkar",
  age: 20,
  job: "code hub",
});

let getFullInfomation = (info: infoObj) => {
  console.log(
    `${info.name} is ${info.age} years old and working at ${info.job}`
  );
};
getFullInfomation({
  name: "arkar",
  age: 20,
  job: "code hub",
});
