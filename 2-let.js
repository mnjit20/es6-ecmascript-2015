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