"use strict";
let id = 5;
let company = "Acme Corp";
let isPublished = true;
let ids = [1, 2, 3, 4, 5];
//use any when don't want to identify data type, avoid unless needed
let x = "Luka";
let xArr = ["Luka", 1, true];
//function defined with const keyword, pass in arguments, return type, and then define method
const concatValues = (a, b) => {
    return a + b;
};
console.log(concatValues("hello", "world"));
console.log(concatValues("5", "10"));
//compile with tsc
//run the outputed .js file i.e. "node tut.js"
