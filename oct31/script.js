// Print the ASCII printable characters code page (0x20-0x7E), without any built-ins or functions that do it for you.

function hexAdd(hexVal) {
    let hex = parseInt(hexVal, 16);
    hex++;
    hex = hex.toString(16);
    return hex;
}

function printASCII(beg, end) {
    let output = "";

    while (beg <= end) {
        console.log(beg)
        let string = "&#x" + beg + ";";
        output += string;
        beg = hexAdd(beg);
    }

    return output;
}




let inputStr = "Print the ASCII printable characters code page (0x20-0x7E), without any built-ins or functions that do it for you";
document.getElementById("input").innerHTML += inputStr;

let outputStr = printASCII("20", "7E");
document.getElementById("output").innerHTML += outputStr;