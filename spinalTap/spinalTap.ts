// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str: String) {
    return str
        .trim()
        .replace(/[\W_]+/g, "-") // Replace all non-word characters and underscores with hyphen
        .replace(/([a-z])([A-Z])/g, "$1-$2") // Insert hyphen between lowercase and uppercase letters
        .toLowerCase(); // Convert the entire string to lowercase
}

console.log(spinalCase('This Is Spinal Tap')); //should print this-is-spinal-tap
