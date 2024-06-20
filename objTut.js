"use strict";
//use interface to create blueprint for how an object should look
//enforce type definitions on object
//add ? after name of property to make nullable
const User = {
    id: 2,
    name: "Luka",
    greet(message) {
        console.log(message);
    }
};
User.greet("Hello");
//returns undefined if not initiated
// console.log(User.age);
// use the | pipe to designate a union, meaning the argument here can be either string or number but not both
// const printID = (id: string | number) => {
//     console.log("ID: " + id);
// }
//this function is equivalent to function on line 30
const printID = (id) => {
    console.log("ID: " + id);
};
const signContract = (employee) => {
    console.log("Congtract signed by" + employee.name + " with email: " + employee.email);
};
signContract({
    name: "Luka",
    creditScore: 850,
    id: 7,
    email: "lukatest@gmail.com"
});
