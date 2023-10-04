let array1 = [11, 12, 32, 33, 43, 54, 4, 56, 77];
result = array1.indexOf(12);
console.log(result);
//using loop
function Checkvalue(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (value === arr[i]) {
      return i;
    }
  }
  return "no element in that array";
}
result1 = Checkvalue(array1, 110);
console.log(result1);
