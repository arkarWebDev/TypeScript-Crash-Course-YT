"use strict";
let drive = (direction) => {
    if (direction === 0) {
        console.log("driving to up.");
    }
    else if (direction === 1) {
        console.log("driving to down.");
    }
    else if (direction === 2) {
        console.log("driving to left.");
    }
    else if (direction === 3) {
        console.log("driving to right.");
    }
};
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
let eDrive = (direction) => {
    if (direction === Direction.Up) {
        console.log("driving to up.");
    }
    else if (direction === Direction.Down) {
        console.log("driving to down.");
    }
    else if (direction === Direction.Left) {
        console.log("driving to left.");
    }
    else if (direction === Direction.Right) {
        console.log("driving to right.");
    }
};
eDrive(Direction.Right);
console.log(Direction.Right);
