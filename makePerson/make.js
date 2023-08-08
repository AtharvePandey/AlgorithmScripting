// Fill in the object constructor with the following methods below:
// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(first, last)
// Run the tests to see the expected output for each method. These methods must be the only 
// available means of interacting with the object. Each test will declare a new Person instance as new Person('Bob', 'Ross').
var Person = function (first, last) {
    var _this = this;
    this.getFullName = function () {
        return first + last;
    };
    this.getFirstName = function () {
        return first;
    };
    this.getLastName = function () {
        return last;
    };
    this.setFirstName = function (name) {
        _this.first = name;
    };
    this.setLastName = function (name) {
        _this.last = name;
    };
    this.setFullName = function (fn, ln) {
        _this.first = fn;
        _this.last = ln;
    };
    return this;
};
