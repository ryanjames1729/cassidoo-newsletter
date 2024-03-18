// Given an integer array, write a function hills(arr) and a function valleys(arr) that return the number of hills and valleys, respectively, in the array.
function hills(arr) {
  let count = 0;
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      count++;
    }
  }
  return count;

}

function valleys(arr) {
  let count = 0;
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] < arr[i - 1] && arr[i] < arr[i + 1]) {
      count++;
    }
  }
  return count;
}


const arrayTest = [1,2,1]
const testFormat1 = "hills(" + JSON.stringify(arrayTest) + ")"
let outputFormat1 = hills(arrayTest);
const testFormat2 = "valleys(" + JSON.stringify(arrayTest) + ")"
let outputFormat2 = valleys(arrayTest);

console.log(testFormat1 + " -> \n" + outputFormat1);
console.log(testFormat2 + " -> \n" + outputFormat2);
document.getElementById("input1").innerHTML += testFormat1;
//document.getElementById("output1").innerHTML += outputFormat1;


const solution = `
function hills(arr) {
  let count = 0;
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      count++;
    }
  }
  return count;

}

function valleys(arr) {
  let count = 0;
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] < arr[i - 1] && arr[i] < arr[i + 1]) {
      count++;
    }
  }
  return count;
}
`;

document.getElementById("solution").innerHTML += solution;
