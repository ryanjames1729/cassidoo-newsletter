// Write a function called daysBetween that takes in two dates, and returns the number of days between those dates.
function daysBetween(date1, date2) {
  
  date1 = new Date(date1);
  date2 = new Date(date2);
  console.log(date1);

  let difference = Math.abs(date1 - date2);
  let output = Math.ceil(difference / (1000 * 60 * 60 * 24));

  return output;
}



let testFormat = "daysBetween('Jan 1, 2024', 'Jan 29, 2024')";
let outputFormat1 = daysBetween("Jan 1, 2024", "Jan 29, 2024");;


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
