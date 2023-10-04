let array1 = [10, 23, 43, 56, 24, 56];
function findindex(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return "not in array";
}
result = findindex(array1, 56);
console.log(result);
