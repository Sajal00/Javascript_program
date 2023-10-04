const MyArray = [1, 2, 3, 4, 5];
const MyArray2 = [1, 2, 3, 4, 5];
const MyArray3 = [1, 2, 3];

// Example 1::

ConvertedString = MyArray.toString(); // converting this array to string using toString method
console.log(ConvertedString);

// Example 2:

let b = MyArray.join("@"); // Here Something will join with existing String using  join method
console.log(b, typeof b);

// Example : 3

let c = MyArray.pop(); //pop method removes last element
console.log(MyArray, c); // after pop modify new array and  return which element removed

//Example 4:

let d = MyArray2.push(23); // push method modify the new array and return length
console.log(d);
console.log(MyArray2);
//Example 5:

let E = MyArray2.shift(); // using shift method remove 1st element and return this removed element
console.log(E);
//Example 6:

let f = MyArray3.unshift(32); // unshift method add element at first and return length
console.log(f);
console.log(MyArray3);
//Example 7

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi"; // The length property provides an easy way to append new elements to an array without using the push() method:
console.log(fruits);
const myscored = [32, 23, 43, 44, 55];
myscored[myscored.length] = 65;
console.log(myscored);

// Example 8
const mygarden = ["rose", "tulip", "sandal"];
delete mygarden[0];
console.log(mygarden);

//Example 9 Merging (Concatenating) Arrays

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren2 = arr1.concat(arr2, arr3);
console.log(myChildren2);
//Example 10
const baby = ["Cecilie", "Lone"];
const nextbaby = baby.concat("Sani"); // The concat() method can also take strings as arguments:
console.log(nextbaby);

//Example 11
const expense = [0, 1, 2, 3, 4, 5, 6, 7];
let expense2 = expense.slice(0, 2);
console.log(expense2, expense);
console.log(expense);

//Example 12

const complexarray = [1, 2, 3, 4, [5, 4, 7, 9], 11, 21, 22];
let makeeasy = complexarray.flat(); // map() method flattern an array
console.log(makeeasy);
