"use strict";
//add readonly into interface to make the property immutable
;
const worker = {
    employeeId: 777,
    startDate: new Date(),
    name: "Luka",
    department: "Finance",
};
worker.name = "Yee";
// worker.employeeId = 8;
console.log(worker);
