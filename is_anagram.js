const isAnagram = (strA, strB) => {
    let frequencyA = {};
    let frequencyB = {};

    if(strA.length !== strB.length) {
        return false;
    }

    for(let i = 0; i < strA.length; i++) {
        if(frequencyA[strA[i]] === undefined) {
          frequencyA[strA[i]] = 1;
        } else {
          frequencyA[strA[i]] = frequencyA[strA[i]] + 1;
        }
    }
    for(let j = 0; j < strB.length; j++) {
        if(frequencyB[strB[j]] === undefined) {
          frequencyB[strB[j]] = 1;
        } else {
          frequencyB[strB[j]] = frequencyB[strB[j]] + 1;
        }
    }
    for(var key in frequencyA) {
        if(frequencyA[key] !== frequencyB[key]) {
          return false;
        }
    }

    return true;
}

//isAnagram('cinema', 'iceman'); //true
//isAnagram('tarp', 'part'); //true
//isAnagram('carp', 'craps'); //false
//isAnagram('car', 'cat'); //false