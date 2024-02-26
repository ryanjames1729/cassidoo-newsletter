// Given a number and a digit to remove from that number, maximize the resulting number after the digit has been removed and print it.
function removeDigit(number, digit) {
  let numStr = number.toString();
  let numberChoice = [];
  let indexArr = [];
  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] == digit) {
      indexArr.push(i);
    }
  }
  for (let i = 0; i < indexArr.length; i++) {
    numberChoice.push(numStr.slice(0, indexArr[i]) + numStr.slice(indexArr[i] + 1));
  }
  return Math.max(...numberChoice);
}
const testFormat = "removeDigit(1231, 1)"
let outputFormat1 = removeDigit(1231, 1);

console.log(testFormat + " -> \n" + outputFormat1);
document.getElementById("input").innerHTML += testFormat;
document.getElementById("output1").innerHTML += outputFormat1;


const solution = `
function removeDigit(number, digit) {
  let numStr = number.toString();
  let numberChoice = [];
  let indexArr = [];
  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] == digit) {
      indexArr.push(i);
    }
  }
  for (let i = 0; i < indexArr.length; i++) {
    numberChoice.push(numStr.slice(0, indexArr[i]) + numStr.slice(indexArr[i] + 1));
  }
  return Math.max(...numberChoice);
}
`;

document.getElementById("solution").innerHTML += solution;
