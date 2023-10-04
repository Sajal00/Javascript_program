let myarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// let result = myarray.slice(0, 4); // it will print first 4 elements
// console.log(result);
// another approch

function getelements(arr, n) {
  findelement = [];
  for (let i = 0; i < n && i < arr.length; i++) {
    findelement.push(arr[i]);
  }
  return findelement;
}
let result = getelements(myarray, 7);
console.log(result);
