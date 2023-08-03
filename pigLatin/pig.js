// Pig Latin is a way of altering English Words. The rules are as follows:
// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
// - If a word begins with a vowel, just add way at the end.
function translatePigLatin(str) {
    if (['a', 'e', 'i', 'o', 'u'].includes(str.charAt(0))) {
        return str.concat("way");
    }
    else {
        var tempArr = stringToArr(str);
        var j = 0;
        while (!(['a', 'e', 'i', 'o', 'u'].includes(tempArr[j]))) {
            if (j == tempArr.length) { //used to deal with words without vowels...
                return str.concat("ay");
            }
            var tempChar = tempArr.shift();
            tempArr.push(tempChar);
            j++;
        }
        tempArr.push("a");
        tempArr.push("y");
        return tempArr.join("");
    }
}
function stringToArr(str) {
    var tempArr = [];
    for (var i = 0; i < str.length; i++) {
        tempArr[i] = str.charAt(i);
    }
    return tempArr;
}
console.log(translatePigLatin("consonant")); //should print onsonantcay to the console...
