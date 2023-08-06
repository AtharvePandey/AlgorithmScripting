// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
// i.e convertHTML("Dolce & Gabbana") should return the string Dolce &amp; Gabbana

function convertHTML(str) {
    let obj = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
    }
  }
  
  convertHTML("Dolce & Gabbana");ll