// Write a function fromTo that produces a generator, that will produce values in a range.

function fromTo(start, end) { 
  return function() {
    let next = start;
    if (start <= end) {
      start += 1;
      return next;
    }
  }
}

function fromToRand(start, end) {
  let randArr = [];
  for (let i = start; i <= end; i++) {
    randArr.push(i);
  }
  const myStart = start;
  // shuffle randArr
  for (let i = randArr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [randArr[i], randArr[j]] = [randArr[j], randArr[i]];
  }
  return function() {
    let next = start;
    if (start <= end) {
      start += 1;
      return randArr[next-myStart];
    }
  }
}

let index = fromTo(5, 7);
console.log(index());
console.log(index());
console.log(index());
console.log(index());



index = fromToRand(5, 7);
console.log(index());
console.log(index());
console.log(index());
console.log(index());

let newTest = fromTo(5, 7);
let outputStr = "";
outputStr += newTest() + "\n";
outputStr += newTest() + "\n";
outputStr += newTest() + "\n";
outputStr += newTest() + "\n";

document.getElementById("output").innerHTML += outputStr;