// Make a function that looks through an array of objects(first argument) and returns an array of all objects that have 
//matching name and value pairs(second argument).Each name and value pair of the source object has to be present in the object from the collection 
//if it is to be included in the returned array.
// For example, if the first argument is[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, 
//then you must return the third object from the array(the first argument), because it contains the name and its value, that was passed on as the second argument.

//so the second argument will always be an object while the first will always be an array... 

function whatIsInAName(collection, source) {
    let retArr = []; 
    retArr = collection.filter(obj => { //for each obj in the array of collection filter such that, for each key in source, the key in obj is equal to the key in source
        return Object.keys(source).every(key => {
            obj[key] === source[key]
        });
    });
    return retArr; 
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });


// [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }] this is the array to be searched through

// { last: "Capulet" } //this is the thing we're searching for... remember to add if found to the return array