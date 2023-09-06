const add = (a: number, b: number, c?: number): void => {
  console.log(a + b);
};

add(2, 4);

const minus = (a: number, b: number): number => {
  console.log(a - b);
  return a - b;
};

minus(3, 2);
