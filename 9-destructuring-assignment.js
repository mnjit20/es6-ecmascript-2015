//destructuring objects 
var {
  color,
  age
} = {
  color: 'red',
  age: 20,
  name: 'John'
}

console.log(color);
console.log(age);
console.log('----------------------');

//

function generateObject() {
  return {
    color: 'red',
    age: 20,
    name: 'John',
    company: 'Software Development'
  }
}

// this example look for the same named object key in the object
var {
  company
} = generateObject();
console.log(company);

//this will lookup company and asign it to workSpace 

var {
  company: workSpace,
  age: howOld
} = generateObject();

console.log(workSpace, howOld);