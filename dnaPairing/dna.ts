// Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, 
//which form building blocks of the DNA double helix.
// The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the 
//provided DNA strand. For each character in the provided string, find the base pair character. Return the 
//results as a 2d array.
// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]
// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str:string) {
    let retArr = [[]];
  }
  
  pairElement("GCG");


  
  function getCompliment(nucleotide: string):string{
    switch (nucleotide) {
        case "A":
            return "T";
        case "C":
            return "G";
        case "T":
            return "A";
        case "G": 
            return "C";
        default:
            return "";
    }
  }