// Write a function that produces a generator that produces values in a range.
function fromTo(start, end) {
  return function() {
    if (start < end) {
      return start++;
    }
    return null;
  }
}

const n = 5
let range = fromTo(0,n);

let testFormat = "let range = fromTo(0," + n + "): ";
function outputFormat() {
  let output = "";
  for (let i = 0; i <= n; i++) {
    output += range() + "\n";
  }
  return output;
}
let outputFormat1 = outputFormat();

console.log(testFormat + " -> \n" + outputFormat1);
document.getElementById("input").innerHTML += testFormat;
document.getElementById("output1").innerHTML += outputFormat1;


const solution = `
function fromTo(start, end) {
  return function() {
    if (start < end) {
      return start++;
    }
    return null;
  }
}

const n = 5
let range = fromTo(0,n);
`;

document.getElementById("solution").innerHTML += solution;
