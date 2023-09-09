// interface
// extend / optional property

interface User {
  name: string;
  readonly email: string;
  phone_number?: number;
  //   isLogin: () => boolean;
  isLogin(): boolean;
  getAge(age: number): number;
}

interface User {
  isDriving(status: boolean): string;
}

interface Editor extends User {
  deleteUser(): string;
}

interface Admin extends User, Editor {
  addUser(): string;
}

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

console.log(userOne.email);

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

// let adminOne: Admin = {};
