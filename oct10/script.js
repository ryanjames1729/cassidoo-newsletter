// Given two integers, generate a “fibonacci-like” sequence of n digits (where the next number in the pattern is the sum of the previous two numbers).

function truncate(str, n) {
    let count = 0;
    temp = "";
    let endOfStr = false;
    for(let i = 0; i < str.length; i++) {
        if (str[i].match(/[a-z]/i) && count < n) {
            count++;
            temp += str[i];
            if (count == n) {
                endOfStr = true;
            }
        }
        else if (!str[i].match(/[a-z]/i)) {
            temp += str[i];
            if (endOfStr) {
                count = 0;
            }
        }
    }
    return temp;
}


let inputStr = "'*hello* darkness, my ~old_friend'"
document.getElementById("input").innerHTML += inputStr;


let outputStr = ""
outputStr += truncate(inputStr, 3)


document.getElementById("output").innerHTML += outputStr;


