const prompt = require("prompt-sync")({ sigint: true });
myarr = [12, 23, 32, 43, 45, 56, 7, 8, 11, 32];

function find_nth_smallest_element(arr, n) {
  n = prompt("enter nth value: ");
  let sorted_ascending = arr.sort(function (a, b) {
    return a - b;
  });
  console.log(sorted_ascending);
  for (let i = 0; i < n; i++) {
    return arr[n - 1];
  }
}
let result = find_nth_smallest_element(myarr);
console.log("smallest element", result);
