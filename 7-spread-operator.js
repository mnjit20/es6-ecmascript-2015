//spread operator

let first = [1, 2, 3];
let secound = [4, 5, 6];

first.push(...secound);

console.log(first);

function sum(a, b, c) {
  let result = a + b + c;
  console.log(result);

}


//returning the sum of the values into the array
sum(...secound);