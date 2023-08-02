// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
    return str.trim().replace(/\W/, " ").split(" ").map(function (word) {
        return word.toLowerCase(); //map takes each word and makes it lowercase while the join concats all words in the array with a dash to convert into spinal tap...
    }).join("-");
}
console.log(spinalCase('This Is Spinal Tap')); //should print this-is-spinal-tap
