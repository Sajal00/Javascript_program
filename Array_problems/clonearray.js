myarray = [1, 2, 3, 4, 5, 6];
newarray = [...myarray];
console.log("Using Spread operator", newarray);

array1 = [9, 8, 7, 6, 5, 4];
newarray2 = Array.from(array1);
console.log("Using Array.from method", newarray2);

array3 = [12, 23, 32, 43, 54, 76];
newarra3 = [].concat(array3);
console.log("concat method", newarra3);

array4 = [233, 433, 544, 988, 123];
clonedarraay = [];
for (let i = 0; i < array4.length; i++) {
  clonedarraay.push(array4[i]);
}
console.log("Cloned array using loop : ", clonedarraay);
