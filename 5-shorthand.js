let firstName = 'john';
let lastName = 'doe';

let person = {
  firstName,
  lastName
};

let mascot = 'Moose';

let team = {
  person,
  mascot
};

console.log(person);

console.log(team);


console.log("--------------------------");


var color = "red";
var speed = 10;
var drive = 'fun1';
var drive2 = 'fun2';

//defining objects with shorthand function declaration
var object = {
  color,
  speed,
  [drive]: function () {
    console.log('vroom');
  },
  [drive2]: function () {
    console.log('vroom2');
  },
  go() {
    console.log('go function');
  }
};

console.log(object.color);
console.log(object.speed);
object.fun1();
object.fun2();
object.go();