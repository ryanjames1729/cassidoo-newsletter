// Write a function called honeycomb that prints an ascii honeycomb to the screen.
function honeycomb(n) {
  if(n % 2 != 0){
    return "Invalid input";
  }

  let output = "";
  // if n=2 widest is 10 characters
  // if n=4 widest is 20 characters
  // widest is n*3 + n*4
  let widest = n*3 + n*4/2;
  output += " ".repeat(widest/2-(n/2)) + "_".repeat(n) + "\n";
  output += " ".repeat(n/2) + "_".repeat(n) + "/" + " ".repeat(n) + "\\" + "_".repeat(n) + "\n";
  for(let i = 0; i < n/2; i++){
    output += " ".repeat(n/2-i) + "_".repeat(n) + "/" + " ".repeat(n) + "\\" + "_".repeat(n) + "\n";
  }
  for(let i = 0; i < n/2; i++){
    output += " ".repeat(i) + "\\" + "_".repeat(n) + "/" + " ".repeat(n) + "\\" + "_".repeat(n) + "\n";
  }
  
  output += "/" + " ".repeat(n) + "\\" + "_".repeat(n) + "/" + " ".repeat(n) + "\\" + "\n";
  output += "\\" + "_".repeat(n) + "/" + " ".repeat(n) + "\\" + "_".repeat(n) + "/" + "\n";
  output += " ".repeat(n/2) + " ".repeat(n) + "\\" + "_".repeat(n) + "/" + "\n";
  

  return output;
}



let testFormat = "honeycomb(4)";
let outputFormat1 = honeycomb(4);;
console.log(testFormat + " -> \n" + outputFormat1);


document.getElementById("input").innerHTML += testFormat;
document.getElementById("output1").innerHTML += outputFormat1;


const solution = `
function daysBetween(date1, date2) {
  
  date1 = new Date(date1);
  date2 = new Date(date2);
  console.log(date1);

  let difference = Math.abs(date1 - date2);
  let output = Math.ceil(difference / (1000 * 60 * 60 * 24));

  return output;
}
`;

document.getElementById("solution").innerHTML += solution;
