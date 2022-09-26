// Write a function to output the ordinal suffix of a positive integer concatenated to an inputted number.

const dictionary = {
  1 : "st",
  2 : "nd",
  3 : "rd",
}

function ordinal(number) {
  let lastDigit = number % 10;
  return lastDigit > 3 ? number + "th" : number + dictionary[lastDigit];
}

let numbers = [1, 2, 3, 4, 5, 101, 493, 1729];
let outputStr = "";
numbers.map(number => outputStr += ordinal(number) + " ");

document.getElementById("output").innerHTML += outputStr;
