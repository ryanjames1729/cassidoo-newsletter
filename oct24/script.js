// Given an integer n, print a balanced binary tree with n leaf nodes using the characters /, , and \.

function printTree(n) {
    let output = "\n"
    const rows = Math.ceil(Math.log2(n))
    const finalRow = Math.pow(2, rows)
  
    for (let i = 1; i <= rows; i++) {
        let rowChar = Math.pow(2,i)
        let sides = (finalRow - rowChar) / 2
        if(i < rows) {
            output += " ".repeat(sides) + "/\\".repeat(Math.pow(2,i-1)) + "\n"
        } else {
            if(n % 2 == 0) {
                output += "/" + "\\/".repeat(Math.floor(Math.log2(n))-1) + " ".repeat(finalRow - n) + "\\/\\" + "\n"
            } else {
                if (n / 2 < finalRow / 2 - 1) {
                    output += "/\\".repeat(Math.log2(Math.ceil(n/2))) + "/" + " ".repeat(finalRow-n)  + "/\\".repeat(Math.log2(Math.ceil(n/2))) + "\n"
                } else {
                    output += "/\\".repeat(Math.log2(Math.ceil(n/2))) + " ".repeat(finalRow-n)  + "\\" + "/\\".repeat(Math.log2(Math.ceil(n/2))-1) + "\n"
                }
                
            }
        }
    }   
    return output;

}

let branches = 7
console.log(printTree(branches))




let inputStr = "\n7 Branches";
document.getElementById("input").innerHTML += inputStr;

let outputStr = printTree(branches).replace("\n", "<br>");
document.getElementById("output").innerHTML += outputStr;