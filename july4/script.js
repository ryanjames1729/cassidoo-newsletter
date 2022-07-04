const tileCreator = (color, n) =>{
    const obj = {
        color: color,
        value: n,
        wildcard: false
    }
    return obj;
}

function createGameTiles() {
    const colors = ['red', 'blue', 'green', 'yellow', 'red', 'blue', 'green', 'yellow'];
    const gameTiles = [];
    for (let i = 0; i < colors.length; i++) {
        for (let j = 1; j <= 13; j++) {
            gameTiles.push(tileCreator(colors[i], j))
        }
    }
    const wildcard = {
        color: 'wildcard',
        value: 0,
        wildcard: true
    }
    for (let i = 0; i < 4; i++) {
        gameTiles.push(wildcard);
    }
    return gameTiles
}

const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

const createHand = (arr, number) => {
    const hand = [];
    for (let i = 0; i < number; i++) {
        hand.push(arr.pop());
    }
    return hand;
}

const valueSort = (a, b) => {
    let comparison = 0;
    if(a.value > b.value) {
        comparison = 1;
    } else if (a.value < b.value) {
        comparison = -1;
    } 
    return comparison;
}

const wildcardNumbers = () => {
    let count = 0;
    for (let i = 0; i < currentHand.length; i++) {
        if (currentHand[i].wildcard) {
            count++;
        }
    }
    return count;
}

function setsByRuns () {
    // number sort
    let possibleSets = [];
    currentHand.sort(valueSort);

    for(let i = 0; i < currentHand.length-3; i++) {
        let set = [];
        let nextA, nextB, nextC;
        for(let j = i; j < currentHand.length-2; j++) {
            if(currentHand[j].value === currentHand[i].value + 1 && currentHand[j].color === currentHand[i].color) {
                nextA = currentHand[j];
                if(wildcardNumbers() > 0) {
                    set.push(currentHand[i]);
                    set.push(nextA);
                    set.push(currentHand[0]);
                    wildcardNumbers() > 1 ? set.push(currentHand[1]) : null;
                    possibleSets.push(set);
                    set= [];
                }
                for(let k = j; k < currentHand.length-1; k++) {
                    if(currentHand[k].value === currentHand[i].value + 2 && currentHand[k].color === currentHand[i].color) {
                        nextB = currentHand[k];
                        set.push(currentHand[i]);
                        set.push(nextA);
                        set.push(nextB);
                        wildcardNumbers() > 0 ? set.push(currentHand[0]) : null;
                        possibleSets.push(set);
                        set = [];
                        if(wildcardNumbers() > 1){
                            nextB = currentHand[k];
                            set.push(currentHand[i]);
                            set.push(nextA);
                            set.push(nextB);
                            set.push(currentHand[1]);
                            possibleSets.push(set);
                            set = [];
                        }
                        for(let l = k; l < currentHand.length; l++) {
                            if(currentHand[l].value === currentHand[i].value + 3 && currentHand[l].color === currentHand[i].color) {
                                nextC = currentHand[l];
                                set.push(currentHand[i]);
                                set.push(nextA);
                                set.push(nextB);
                                set.push(nextC);
                                possibleSets.push(set);
                                set = [];
                            }
                        }
                    }
                }
            }
        }
    }
    if(wildcardNumbers > 1) {
        for(let i = 2; i < currentHand.length; i++) {
            set = [];
            set.push(currentHand[i]);
            set.push(currentHand[0]);
            set.push(currentHand[1]);
            possibleSets.push(set);
        }
    }
    return possibleSets;
}

function setsByNumbers () {
    let possibleSets = [];
    for(let i = 0; i < currentHand.length-2; i++) {
        let set = [];
        let nextA, nextB, nextC;
        for(let j = i + 1; j < currentHand.length-1; j++) {
            if(currentHand[i].value === currentHand[j].value){
                nextA = currentHand[j];
                if(wildcardNumbers() > 0) {
                    set.push(currentHand[i]);
                    set.push(nextA);
                    set.push(currentHand[0]);
                    wildcardNumbers() > 1 ? set.push(currentHand[1]) : null;
                    possibleSets.push(set);
                    set= [];
                }
                if(wildcardNumbers() > 1) {
                    set.push(currentHand[i]);
                    set.push(nextA);
                    set.push(currentHand[1]);
                    possibleSets.push(set);
                    set= [];
                }
                for(let k = j + 1; k < currentHand.length; k++) {
                    if(currentHand[i].value === currentHand[k].value){
                        nextB = currentHand[k];
                        set.push(currentHand[i]);
                        set.push(nextA);
                        set.push(nextB);
                        possibleSets.push(set);
                        set = [];
                        if(wildcardNumbers() > 0) {
                            set.push(currentHand[i]);
                            set.push(nextA);
                            set.push(nextB);
                            set.push(currentHand[0]);
                            possibleSets.push(set);
                            set = [];
                        }
                        if(wildcardNumbers() > 0) {
                            set.push(currentHand[i]);
                            set.push(nextA);
                            set.push(nextB);
                            set.push(currentHand[1]);
                            possibleSets.push(set);
                            set = [];
                        }
                        for(let l = k+1; l < currentHand.length; l++) {
                            if(currentHand[i].value === currentHand[l].value){
                                nextC = currentHand[l];
                                set.push(currentHand[i]);
                                set.push(nextA);
                                set.push(nextB);
                                set.push(nextC);
                                possibleSets.push(set);
                                set = [];
                            }
                        }
                    }
                }
            }
        }
    }
    return possibleSets;
}

// Game flow
let currentGameTiles = shuffle(createGameTiles());
let currentHand = createHand(currentGameTiles, 14);
let runSets = setsByRuns();
let multiplesSets = setsByNumbers();
let currentPossibleSets = [];
for (let i = 0; i < runSets.length; i++) {
    currentPossibleSets.push(runSets[i]);
}
for (let i = 0; i < multiplesSets.length; i++) {
    currentPossibleSets.push(multiplesSets[i]);
}

console.log(currentHand)

console.log(currentPossibleSets)

document.getElementById("input").innerHTML = "Hand Dealt: " + JSON.stringify(currentHand, null, 2);
document.getElementById("output").innerHTML = "Possible Sets: (" + currentPossibleSets.length + ") " + JSON.stringify(currentPossibleSets, null, 2);



