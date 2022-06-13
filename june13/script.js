function extraVowels(str, n) {
    const vowels = "aeiouAEIOU";
    let output = "";
    [...str].forEach(letter => {
        if (vowels.includes(letter)) {
            for(let i = 0; i < n; i++) {
                output += letter;
            }
        }
        else{
            output += letter;
        }
    })
    document.getElementById("output").innerHTML = "Programming Output: " + output;
  return output;
}

let wordInput = document.getElementById("input").innerHTML.split(":")[1].trim();

console.log(extraVowels(wordInput, 3));