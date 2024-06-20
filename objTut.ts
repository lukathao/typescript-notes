//use interface to create blueprint for how an object should look
//enforce type definitions on object
//add ? after name of property to make nullable

interface UserInterface {
    id: number;
    name: string;
    age?: number;
    //defining functions in interfaces
    greet(message: string): void;
}
//union has two different sets of data and accepts either data type but not both, use pipe i.e. string | number
//opposite to a union is intersect which needs needs all data types there, use ampersand i.e. type C = A & B

//type keyword used to define a special single field, known as type alias
type IDFieldType = string | number;

const User: UserInterface = {
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
const printID = (id: IDFieldType) => {
    console.log("ID: " + id);
}


//intersection used when needed to combine types
interface BusinessPartner {
    name : string;
    creditScore: number;
}

interface UserIdentity {
    id: number;
    email: string;
}

type Employee = BusinessPartner & UserIdentity;

const signContract= (employee: Employee): void => {
    console.log("Congtract signed by" + employee.name + " with email: " + employee.email)
}

signContract(
    {
        name: "Luka",
        creditScore: 850,
        id: 7,
        email: "lukatest@gmail.com"
    }
)

