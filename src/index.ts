class Details {
  name: string;
  readonly age: number; // read only in class and outside
  private job: string; // read / assign only work in class

  constructor(x: string, y: number, z: string) {
    this.name = x;
    this.age = y;
    this.job = z;
  }

  getDetails() {
    console.log(`${this.name} is ${this.age} years old and a ${this.job}`);
  }
}

const arkarDetails = new Details("arkar", 20, "mern dev");
arkarDetails.getDetails();

const kyawkyawDetails = new Details("kyaw kyaw", 21, "designer");
kyawkyawDetails.getDetails();

const testDetails = {
  name: "test",
  age: 22,
  job: "test",
};

let detailArray: Details[] = [];
detailArray.push(arkarDetails);
detailArray.push(kyawkyawDetails);

console.log(detailArray);
console.log(arkarDetails.age);
