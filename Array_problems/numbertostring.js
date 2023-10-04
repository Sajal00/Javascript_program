function convertSumToString(num1, num2) {
  const digiToWord = [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];
  result = num1 + num2;
  resultToString = result.toString();
  splitString = resultToString.split("");
  mapfunction = splitString.map((val) => digiToWord[val]); // [ 'Four', 'Two' ]
  joinresult = mapfunction.join(" "); // Four Two
  return joinresult;
}
let adding = convertSumToString(100, 32);
console.log(adding);
