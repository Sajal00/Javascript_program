//Q1: remove duplicate array

// let myarray = ["apple", "mango", "orange", "Banana", "orange", "mango"];
// function removeduplicate(arr) {
//   Fresh_array = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!Fresh_array.includes(arr[i])) {
//       Fresh_array.push(arr[i]);
//     }
//   }
//   return Fresh_array;
// }
// let result = removeduplicate(myarray);
// console.log(result);

// make an array with duplicates element

// myarray=["a",'d','a','r','d','f','p']
// function findduplicate(arr){
//     duplicatearray=[];
//     for (let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]===arr[j]&& !duplicatearray.includes(arr[i])){
//                duplicatearray.push(arr[i])
//             }
//         }
//     }
//     return duplicatearray;

// }
// let result=findduplicate(myarray);
// console.log(result)

//Q2.Find the peak element
// Myarray = [1, 3, 4, 5, 3, 8, 9, 11, 8];
// function peakelement(arr) {
//   const peakIndices = [];
//   if (arr.length === 1) {
//     return 0;
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (i === 0 && arr[i] >= arr[i + 1]) {
//       peakIndices.push(i);
//     } else if (i === arr.length - 1 && arr[i] >= arr[i - 1]) {
//       peakIndices.push(i);
//     } else if (arr[i] > arr[i + 1] && arr[i] >= arr[i - 1]) {
//       peakIndices.push(i);
//     }
//   }
//   return peakIndices;
// }
// let myresult = peakelement(Myarray);
// console.log(myresult);

//Q.3>> find element from array
// Myarray=[1,2,3,4,5,6,7]
// function findelement(arr){
//     let thatelement=[];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==4){
//          thatelement.push(i);
//         }
//     }
//     return thatelement;
// }
// let myresult=(findelement(Myarray));
// console.log(myresult);

// another way
// let myresult=(findelement(Myarray));
// console.log(myresult);
// let result = Myarray.indexOf(4);
// console.log(result);

//q.4> How to get n number of element?
// let myarray=[1,2,3,4,5]
// function array(arr){
//     let n=3;
//     let desiredarray=[];
//     for(i=0;i<3;i++){
//         desiredarray.push(i)
//     }
//     return desiredarray;

// }
// #### another way
// var myresult=array(myarray)
// console.log(myresult)

//Q.5 how to copy value array by value in js?
// Myarray = [3, 4, 5, 6, 8];
// newarray = [...Myarray];
// console.log(newarray);

//Q.6 How to merge two arrays and remove duplicate items in JavaScript ?
// let array1 = [1, 2, 3, 4, 5, 6];
// let array2 = [2, 12, 32, 4, 6, 8];
// let newarray = [...array1, ...array2];

// let remove_duplicate = [...new Set(newarray)];
// console.log(remove_duplicate);

//Q.7>>How do I check if an Array includes a value in JavaScript?
// let myarray4 = [1, 2, 3, 4, 54, 34, 23, 21, 32, 44, 57];
// // findres = myarray4.includes(88);
// // console.log(findres);
// // using function call
// function checkelement(element) {
//   for (let i = 0; i < myarray4.length; i++) {
//     if (myarray4[i] == element) {
//       return element + " is in the array";
//     }
//   }
//   return element + " not in array";
// }
// console.log(checkelement(55));

//Q.8>>
//How to Flattern an array ?
// function Flattern_array(arr) {
//   let simple_array = [];
//   for (let element of arr) {
//     if (Array.isArray(element)) {
//       simple_array = simple_array.concat(Flattern_array(element));
//     } else {
//       simple_array.push(element);
//     }
//   }
//   return simple_array;
// }
// let complexarr = [1, 2, 3, [4, 5, 6], 7, 8];
// let result = Flattern_array(complexarr);
// console.log("make it simle array from nested", result);
