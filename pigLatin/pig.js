// Pig Latin is a way of altering English Words. The rules are as follows:
// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
// - If a word begins with a vowel, just add way at the end.
function translatePigLatin(str) {
    var char = str.charAt(0);
    return str.slice(1).concat(char + "ay");
}
console.log(translatePigLatin("consonant")); //should print onsonantcay to the console...
