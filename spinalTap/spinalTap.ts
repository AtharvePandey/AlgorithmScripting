// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str:String) {
    return str.trim().replace(/\W/, " ").split(" ").map(word => {//trim() removes any whitespaces, replace uses the regex \W\ to match any non-word charachter, split returns an array with words split by spaces
        return word.toLowerCase(); //map takes each word and makes it lowercase while the join concats all words in the array with a dash to convert into spinal tap...
    }).join("-"); 
  }
  
  console.log(spinalCase('This Is Spinal Tap')); //should print this-is-spinal-tap
