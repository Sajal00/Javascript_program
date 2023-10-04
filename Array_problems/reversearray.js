// let original_array = [0, 1, 2, 3, 4];
// console.log(original_array.length - 1);

function outerfunction(a) {
  function inner_function(b) {
    sum = a + b;
    return sum;
  }
  return inner_function;
}
let Saveddata = outerfunction(8);
console.log(Saveddata(5));
