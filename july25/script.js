function checkArray (arrayOne, arrayTwo) {
  if (arrayOne.length === arrayTwo.length) {
    for(var i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
    return true;
  }
  return false;
}

function intersection (arrayOne, arrayTwo) {
  var result = [];
  for (var i = 0; i < arrayOne.length; i++) {
    for (var j = 0; j < arrayTwo.length; j++) {
      if (arrayOne[i] === arrayTwo[j]) {
        result.push(i);
        result.push(j);
        if(checkArray(arrayOne.slice(i), arrayTwo.slice(j))) {
          return result;
        } else {
          result = [];
        }
      }
    }
  }
  return result;
}

let arrayOne = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayTwo = [3, 4, 5, 6, 7, 8, 9];

console.log(intersection(arrayOne, arrayTwo));


document.getElementById("input").innerHTML += '[' + arrayOne + ']' + ' ' + '[' + arrayTwo + ']' ;
document.getElementById("output").innerHTML += '[' + intersection(arrayOne, arrayTwo) + ']';