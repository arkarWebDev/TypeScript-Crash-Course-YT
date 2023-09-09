// without eums
let drive = (direction: 0 | 1 | 2 | 3): void => {
  if (direction === 0) {
    console.log("driving to up.");
  } else if (direction === 1) {
    console.log("driving to down.");
  } else if (direction === 2) {
    console.log("driving to left.");
  } else if (direction === 3) {
    console.log("driving to right.");
  }
};

// drive(0);

// with emun
enum Direction {
  Up, //0
  Down, //1
  Left, //2
  Right, //3
}

let eDrive = (direction: 0 | 1 | 2 | 3): void => {
  if (direction === Direction.Up) {
    console.log("driving to up.");
  } else if (direction === Direction.Down) {
    console.log("driving to down.");
  } else if (direction === Direction.Left) {
    console.log("driving to left.");
  } else if (direction === Direction.Right) {
    console.log("driving to right.");
  }
};

eDrive(Direction.Right);
console.log(Direction.Right);
