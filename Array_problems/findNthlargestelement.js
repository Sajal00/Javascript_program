// Find nth largest element
const prompt = require("prompt-sync")({ sigint: true });
myarray = [12, 32, 43, 54, 21, 65, 78];
function find_Nth_largest(arr, n) {
  n = prompt("enter the nth value: ");
  let sorted_array_descending = arr.sort(function (a, b) {
    return b - a;
  });
  console.log(sorted_array_descending);
  for (let i = 0; i < n; i++) {
    return arr[n - 1]; //reason n-1>>>count start from 0 ,if only n , it will return next element
  }
}
let result = find_Nth_largest(myarray);
console.log(result);
