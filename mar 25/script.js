
function findIsland(row, col, arr) {
  if(row < 0 || row >= arr.length || col < 0 || col >= arr[row].length || arr[row][col] === 0) {
    return 0;
  }
  else {
    arr[row][col] = 0;
    return 1 + findIsland(row + 1, col, arr) + findIsland(row, col + 1, arr) + findIsland(row - 1, col, arr) + findIsland(row, col - 1, arr);
  }
  
}

function largestIsland(arr){
  let islandCount = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == 1) {
        islandCount.push(findIsland(i, j, arr));
      }
    }
  }
  return Math.max(...islandCount);
}

const testFormat1 = [
  [0,1,1,1,0,0,0,1,1],
  [0,1,1,1,0,1,0,0,0],
  [0,1,0,0,0,0,1,1,0],
  [0,0,1,1,0,1,1,1,0],
  ]

const islandData = [
  [0,1,1,1,0,0,0,1,1],
  [0,1,1,1,0,1,0,0,0],
  [0,1,0,0,0,0,1,1,0],
  [0,0,1,1,0,1,1,1,0],
]

let outputFormat1 = largestIsland(islandData);

document.getElementById("input1").innerHTML += testFormat1;
document.getElementById("output1").innerHTML += outputFormat1;


const solution = `
function findIsland(row, col, arr) {
  if(row < 0 || row >= arr.length || col < 0 || col >= arr[row].length || arr[row][col] === 0) {
    return 0;
  }
  else {
    arr[row][col] = 0;
    return 1 + findIsland(row + 1, col, arr) + findIsland(row, col + 1, arr) + findIsland(row - 1, col, arr) + findIsland(row, col - 1, arr);
  }
  
}

function largestIsland(arr){
  let islandCount = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == 1) {
        islandCount.push(findIsland(i, j, arr));
      }
    }
  }
  return Math.max(...islandCount);
}

const islandData = [
  [0,1,1,1,0,0,0,1,1],
  [0,1,1,1,0,1,0,0,0],
  [0,1,0,0,0,0,1,1,0],
  [0,0,1,1,0,1,1,1,0],
]

const islandNumbers = largestIsland(islandData);

`;

document.getElementById("solution").innerHTML += solution;
