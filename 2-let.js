var fs = [];

for (let i = 0; i < 10; i++) {
  var I = i;
  console.log('i : ', i, fs.length);
  fs.push(function () {
    console.log('let i : ', i, ' ---  var I : ', I);
  })
}

fs.forEach(function (aa) {
  aa();
});

console.log('---------------');
console.log('---------------');
// different function defined.

function varFunction() {
  var previous = 0;
  var current = 1;
  var i;
  var temp;
  for (i = 0; i < 10; i += 1) {
    temp = previous;
    previous = current;
    current = temp + current;
    console.log('temp :', temp, 'previous: ', previous, ' current : ', current);
    console.log();
  }
}


function letFunction() {
  let previous = 0;
  let current = 1;
  let i;
  //  let temp;
  for (i = 0; i < 10; i += 1) {
    let temp = previous;
    previous = current;
    current = temp + current;
    console.log('temp :', temp, 'previous: ', previous, ' current : ', current);
    console.log();
  }
}

varFunction();
console.log('---------------');
letFunction();