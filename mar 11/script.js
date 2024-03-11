// Given an integer array arr, return the maximum difference between two successive elements in arr's sorted form.
function maxGap(arr) {
  let diff = 0;
  if (arr.length < 2) {
    return diff;
  }
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] > diff) {
      diff = arr[i + 1] - arr[i];
    }
  }
  return diff;
}


const testFormat = "maxGap([3,6,9,1,2])"
let outputFormat1 = maxGap([3,6,9,1,2]);

console.log(testFormat + " -> \n" + outputFormat1);
document.getElementById("input").innerHTML += testFormat;
document.getElementById("output1").innerHTML += outputFormat1;


const solution = `
function maxGap(arr) {
  let diff = 0;
  if (arr.length < 2) {
    return diff;
  }
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] > diff) {
      diff = arr[i + 1] - arr[i];
    }
  }
  return diff;
}
`;

document.getElementById("solution").innerHTML += solution;
