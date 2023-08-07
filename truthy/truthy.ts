// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
// In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.
// In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.
// Remember, you can access object properties through either dot notation or [] notation.

//my approach would be to write a helper method that checks if obj[pre] is truthy using switch case...will return false otherwise...

function truthCheck(collection:object[], pre:string):boolean {
    return collection.every(obj => {
        return istruthy(obj[pre]); 
    })
  }


  function istruthy(thing:any):boolean{
    switch (typeof thing) {
        case "boolean":
            return thing
            break;
        case "number":
            if(thing !== 0){
                return true;
            }
            if(Number.isNaN(thing)){
                return false; 
            }if(thing === null){
                return false; 
            }else{
                return false;
            }
            break;
        case "string":
            if(thing.length === 0){
                return false;
            }else{
                return true; 
            }
            break;
        case "function":
            return true;
            break;
        case "object":
            return true; 
            break; 
    
        default:
            return false;
            break;
    }
  }
  
  console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot")); //returns false because isBot for first and second objects was false, note all should be true...