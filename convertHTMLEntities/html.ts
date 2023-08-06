// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
// i.e convertHTML("Dolce & Gabbana") should return the string Dolce &amp; Gabbana

function convertHTML(str:string) {
    let obj = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
    }
    return str.replace(/[&<>"']/g,char => obj[char]); //basically the object defined above will act as a key to replace with some value;
    //the replace method uses regex to find instances of symbols in the array provided and then will replace that cahr with the obj.char value...
  }
  
  console.log(convertHTML("Dolce & Gabbana")); //should return Dolce &amp Gabbana...