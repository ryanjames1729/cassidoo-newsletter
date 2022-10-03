// Given two integers, generate a “fibonacci-like” sequence of n digits (where the next number in the pattern is the sum of the previous two numbers).

function fibLike(a, b, n) {
    var result = [a, b];
    for (var i = 2; i < n; i++) {
        result.push(result[i - 2] + result[i - 1]);
    }
    return result;
}

let inputStr = "fibLike(10,20,5) returns:"
document.getElementById("input").innerHTML += inputStr;


let outputStr = ""
outputStr += fibLike(10, 20, 5).join(", ")


document.getElementById("output").innerHTML += outputStr;


// BONUS: determine if a sequence is fibLike or not
function isFibLike(arr) {
    for (var i = 2; i < arr.length; i++) {
        if (arr[i] != arr[i - 2] + arr[i - 1]) {
            return false;
        }
    }
    return true;
}

let testArr = [10, 20, 30, 50, 70];
let testOutput = isFibLike(testArr);
console.log(testOutput);
