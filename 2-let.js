var aa = 'manjeet';


function print() {
  var aa = 'aa';
}


print();

console.log(aa);

{
  var aa = 'scope value';
}

console.log(aa);
print();
console.log(aa);