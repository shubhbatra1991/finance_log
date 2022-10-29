//function 1
// let greet: Function;

// greet = () => {
//     console.log('hello, again');
// }

// const add = (a: number, b: number, c: number|string=10) => {
//     console.log(a+b);
//     console.log(c);
// }

// add(5,3);


// const minus = (a: number, b: number): number => {
//     return a-b;
// }

// let result = minus(10,7);

// console.log(result);


//function 2
// type StringOrNum= string | number; //type alias and use it further
// type objWithName={ name: string, uid: StringOrNum };

// const logDetails = (uid:StringOrNum, item: string) => {
//     console.log(`${item} has a uid of ${uid}`);
// }

// const greet = (user: objWithName) => {
//     console.log(`${user.name} says hello`);
// }


//Function signatures
// let greet: Function;

//example 1
// let greet: (a: string, b:string) => void;
// greet = (name:string, greeting:string )=> {
//     console.log(`${name} says ${greeting}`);
// }


//example2
// let calc: (a:number, b:number, c:string) => number;

// calc = (numOne:number, numTwo: number, action: string) => {
//     if(action ==='add'){
//         return numOne+numTwo;
//     } else {
//         return numOne-numTwo;
//     }
// }
//example 3
let logDetails: (obj:{name:string,age:number}) => void;

logDetails= (ninja: {name:string,age:number}) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
}
console.log(logDetails);
