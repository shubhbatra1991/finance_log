// const character = 'Lee';

// console.log(character);

// const inputs = document.querySelectorAll('input');

// inputs.forEach(input => {
//   console.log(input);
// });
// let character = 'mario';
// let age =30;
// let isBlackBelt = false;

// const circ = (diameter: number) => {
//   return diameter*Math.PI;
// }

// console.log(circ(20));
//array
// let names = ['sam','shefali','anu'];
// names.push('toad');

// let numbers = [10,20,30,40];
// numbers.push(50);

// //we cant do this:
// // number[2]= 'shaun';

// //but this can be done

// let mixed = ['ken', 4, 'chun-li', 8,9];
// mixed.push('ryu');
// mixed.push(10);
// mixed[0]=3;




// //object
// let ninja = {
//   name: 'mario',
//   belt:'black',
//   age : 30
// };
// // to update the ninja we will do this:

// ninja = {
//   name: 'shaun',
//   belt: 'orange',
//   age: 40
// };

// explicit types
// let character: string;
// let age: number;
// let isLoggedIn: boolean;


// age =30;
// isLoggedIn = true;
// character ='sam';


//array
// let ninjas: string[] = [];
// ninjas.push('shaun');


//union types
// let mixed: (string|number)[] =[];

// mixed.push('hello');
// mixed.push(20);
// console.log(mixed);

// let uid: string|number;
// uid = '123';
// uid= 123;


//objects
// let ninja1:object;
// ninja1 = { name:'sam', age:30};


// let ninja2: {
//   name: string,
//   age: number,
//   beltColour: string
// }

// ninja2 = { name:'mario', age:20, beltColour:'black' }

//any type

// let age: any=25;
// age =true;
// console.log(age);
// age='hello';
// console.log(age);
// age={name:'sam'};
// console.log(age);
//it can be used for anything but with causion

// let mixed:any[]=[];

// mixed.push(5);
// mixed.push('mario');
// mixed.push(false);
// console.log(mixed);

//Function type






