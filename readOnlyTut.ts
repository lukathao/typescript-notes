//add readonly into interface to make the property immutable

interface Hires {
    readonly employeeId: number;
    startDate: Date;
    name: string;
    department: string;
};

const worker: Hires = {
    employeeId: 777,
    startDate: new Date(),
    name: "Luka",
    department: "Finance",
};

worker.name = "Yee";
// worker.employeeId = 8;

console.log(worker);
