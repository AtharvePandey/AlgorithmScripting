// Return an English translated sentence of the passed binary string.
// The binary string will be space separated.

//might write a helper function that converts each sequence into a word

function binaryAgent(str:string) {
    let retSentence = "";
    str.split(" ").forEach(sequence => {
        retSentence += binaryToText(sequence)
    });
    return retSentence; 
}


function binaryToText(str:string):string{
    return String.fromCharCode(parseInt(str,2)); //this line is from the library for JS...
}


console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111")); //should return 'Aren't bonfires fun?'