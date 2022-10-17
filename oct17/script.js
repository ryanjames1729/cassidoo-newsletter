// Let’s say you have n doors that start out as closed. With the first pass across the doors, you toggle every door open. With the second pass, you toggle every second door. With the third, every third door, and so on. Write a function that takes in an integer numberOfPasses, and returns how many doors are open after the number of passes.

function formatOutput(doorArray) {
    let output = "";

    for(let i = 0; i < doorArray.length; i++) {
        if(doorArray[i]) {
            output += "1 ";
        } else {
            output += "0 ";
        }
    }
    return output;
}

function passDoors(doors, passes) {
    let output = "";
    let doorArray = [];

    for(let i = 0; i < doors; i++) {
        doorArray.push(true);
    }
    output += "Initial state: " + formatOutput(doorArray) + "</br>";

    for(let i = 2; i <= passes+1; i++) {
        for(let j = i; j <= doors; j += i) {
            doorArray[j - 1] = !doorArray[j - 1];
        }
        output += "After pass " + (i-1) + ": " + formatOutput(doorArray) + "</br>";
    }
    return output;
}


let numberOfDoors = 7;
let numberOfPasses = 3;

let inputStr = "</br>Number of Doors: " + numberOfDoors + " Number of Passes: " + numberOfPasses;
document.getElementById("input").innerHTML += inputStr;


let outputStr = "</br>"
outputStr += passDoors(numberOfDoors, numberOfPasses);



document.getElementById("output").innerHTML += outputStr;


