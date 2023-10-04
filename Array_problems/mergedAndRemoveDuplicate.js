// using Spread operator and Set method
let arra1 = [1, 2, 3, 4, 5];
let arr2 = [3, 5, 9, 1, 11];
let arr3 = [...arra1, ...arr2];
let result = [...new Set(arr3)];
console.log(result);
// concat and Set
let fruits1 = [1, 2, 9, 8];
let fruits2 = [11, 23, 1, 9];
let merged = fruits1.concat(fruits2);
let result2 = [...new Set(merged)];
console.log(result2);
