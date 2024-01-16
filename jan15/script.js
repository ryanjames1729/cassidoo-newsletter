// Given a 2D array, write a function that flips it vertically or horizontally.
function flip(arr, dir) {
  let temp = [];
  if (dir === "horizontal") {
    for (let i = 0; i < arr.length; i++) {
      temp.push(arr[i].reverse());
    }
  }

  else if(dir === "vertical") {
    for (let i = arr.length - 1; i >= 0; i--) {
      temp.push(arr[i]);
    }
  }

  return temp;
}

const testArray = [[1,2,3],[4,5,6],[7,8,9]];

let testArrayFormat = "[[" + testArray.join("], [") + "]]";
let outputArrayFormat1 = "[[" + flip(testArray, "horizontal").join("], [") + "]]";
let outputArrayFormat2 = "[[" + flip(testArray, "vertical").join("], [") + "]]";

document.getElementById("input").innerHTML += testArrayFormat;
document.getElementById("output1").innerHTML += outputArrayFormat1;
document.getElementById("output2").innerHTML += outputArrayFormat2;

const solution = `function flip(arr, dir) {
  let temp = [];
  if (dir === "horizontal") {
    for (let i = 0; i < arr.length; i++) {
      temp.push(arr[i].reverse());
    }
  }

  else if(dir === "vertical") {
    for (let i = arr.length - 1; i >= 0; i--) {
      temp.push(arr[i]);
    }
  }

  return temp;
}`;

document.getElementById("solution").innerHTML += solution;
