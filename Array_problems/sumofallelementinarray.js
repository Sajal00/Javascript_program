myarray = [1, 2, 3, 4, 5, 6, 7, 8];

function sumOfAllElement(arr) {
  let sum = 0;
  for (let i in arr) {
    sum = sum + arr[i];
  }
  return sum;
}
result = sumOfAllElement(myarray);
console.log(result);
