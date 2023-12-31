// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).
// Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog
function myReplace(str, before, after) {
    var arr = str.split(" ");
  if (arr.indexOf(before) < 0) {
    return str; // If the word to replace is not in the sentence, return the original sentence.
  } else {
    var index = arr.indexOf(before);
    // Preserve the case of the first character in the original word
    if (/^[A-Z]/.test(before)) {
      after = after.charAt(0).toUpperCase() + after.slice(1);
    } else {
      after = after.charAt(0).toLowerCase() + after.slice(1);
    }
    arr.splice(index, 1, after);
    return arr.join(" ");
  }
}
console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")); //should return A quick brown fox leaped over the lazy dog...
