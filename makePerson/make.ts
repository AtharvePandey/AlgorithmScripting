// Fill in the object constructor with the following methods below:
// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(first, last)
// Run the tests to see the expected output for each method. These methods must be the only 
// available means of interacting with the object. Each test will declare a new Person instance as new Person('Bob', 'Ross').

const Person = function (first: string, last: string) {
    this.getFullName = function () {
        return first + last;
    };
    this.getFirstName = () => {
        return first;
    }
    this.getLastName = () => {
        return last;
    }
    this.setFirstName = (name: string) => {
        this.first = name;
    }
    this.setLastName = (name: string) => {
        this.last = name;
    }
    this.setFullName = (fn: string, ln: string) => {
        this.first = fn;
        this.last = ln;
    }
    return this;
};