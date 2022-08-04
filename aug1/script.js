// Function counts the number of ones for all integers in the range [1,n]
function numberOfOnes(n) {
  var count = 0;
  var inc = 1;  
  while (inc <= n) {
    const incStr = inc.toString();
    for(var i = 0; i < incStr.length; i++) {
      if(incStr[i] === '1') {
        count++;
      }
    }
    inc++;
  }  
  return count;
}

const testInteger = 14;

document.getElementById("input").innerHTML += testInteger;
document.getElementById("output").innerHTML += numberOfOnes(testInteger);
