// Given a string array, find the maximum product of word lengths where the words don't share any letters.
function wordLengthProduct(wordList){
  let maxProduct = 0;
  for(let i = 0; i < wordList.length; i++){
    for(let j = i + 1; j < wordList.length; j++){
      let word1 = wordList[i];
      let word2 = wordList[j];
      let shareLetters = false;
      for(let k = 0; k < word1.length; k++){
        if(word2.includes(word1[k])){
          shareLetters = true;
          break;
        }
      }
      if(!shareLetters){
        maxProduct = Math.max(maxProduct, word1.length * word2.length);
      }
    }
  }
  return maxProduct;
}

let testFormat = '["fish", "fear", "boo", "egg", "cake", "abcdef"]';
let outputFormat1 = wordLengthProduct(["fish", "fear", "boo", "egg", "cake", "abcdef"]);

console.log(testFormat + " -> \n" + outputFormat1);
document.getElementById("input").innerHTML += testFormat;
document.getElementById("output1").innerHTML += outputFormat1;


const solution = `
function wordLengthProduct(wordList){
  let maxProduct = 0;
  for(let i = 0; i < wordList.length; i++){
    for(let j = i + 1; j < wordList.length; j++){
      let word1 = wordList[i];
      let word2 = wordList[j];
      let shareLetters = false;
      for(let k = 0; k < word1.length; k++){
        if(word2.includes(word1[k])){
          shareLetters = true;
          break;
        }
      }
      if(!shareLetters){
        maxProduct = Math.max(maxProduct, word1.length * word2.length);
      }
    }
  }
  return maxProduct;
}
`;

document.getElementById("solution").innerHTML += solution;
