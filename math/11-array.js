//array in array fromc

console.log('array');

//wrapping with Array.from gives a array
//in older approach it use to return node list 
const products = Array.from(document.querySelectorAll('.product'));
console.log(products);
products.filter(product => parseFloat(product.innerHTML) < 10)
  .forEach(product => product.style.color = "red");