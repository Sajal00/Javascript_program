let Array1 = [1, 2, 3, 4, 5, 11, 21, 32, 12, 65, 45, 76];
let Array2 = [2, 4, 5, 11, 32, 10, 76, 22, 65, 31];
function getIntersectionArray(arr1, arr2) {
  newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        newArr.push(arr1[i]);
      }
    }
  }
  return newArr;
}
let result = getIntersectionArray(Array1, Array2);
console.log(result);
