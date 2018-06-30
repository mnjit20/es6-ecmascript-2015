const func = function (name, message = 'How are you') {
  console.log(message, name);
}

func('manjeet');

console.log('---------------------------------');

//arrow function set as default function in the argument
function receive(func = () => console.log('this is default function')) {
  func();
}

receive();
receive(function () {
  console.log('this is non default function');
});