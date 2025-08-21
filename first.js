// Browser <-- Html <--- JS 
//css -> link tag
//JS -> script tag 
// = ko hum assignment operator kehte hai = right side ki value ko left side ki value mai jaa ke save ker raha hai
// curly brases jaha se shuru hote hai vaha se naya code shuru hota hai
// apan ko pure collection ko change karna hoga ek object ko change karne ke liye
// let.. ko hum update ker sakte hai, const ko nahi, but const obj-->key ko ker sakte hai
// syntax --> rules

const profile = {
   fullName:"ishi jain",
   followers:569,
   following:4,
   likes : 456,


}; 
console.log(profile)

// console.log("hljhjf")

//Arithmetic Operators

let a = 5;
let b = 2;
console.log("a =",a,"& b =",b);
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b); 
// inrement operator means ++ or decrement means --


//Unary Operator
// let c = 4;
// let d = 8;

// console.log("c =",c,"& d =",d)
// c = c-1;
// console.log("c=",c);
//a++(post) , ++a(pre)
//a--(post) , --a(pre)

// let e = 5;
// let f = 2;

// console.log("a=",a,"&b=",b);

// console.log("++a=",++a)

//Assigment operators

// let g = 5;
// let h = 2;  

// g += 4;  // g = g + 4
// console.log("a=",a); 

// comparison operators 

 let c = 5; //number
 let d = "5"; //string -> number

 console.log("5===2",c===d);


 // logical operators


// -->logiacl AND
let e = 6;
let f = 5;

let cond1 = e > f; //true
let cond2 = e === 6; //true 
console.log("cond1 && cond2", cond1 && cond2);

// -->logical OR
let h = 6;
let i = 5;

console.log("cond3 || cond4 =",h < i || h === 6 ); // || -> pipe symbol

// -->logical NOT
let j = 6;
let k = 5;

console.log("!(6<5) = ", !(i < k) );



// Conditional Statements

// -->if statement
// let mode = "light";
// let color;

// if(mode === "dark") {
//    color = "black"
// }

// if(mode === "light") {
//    color = "white"
// }

// console.log(color);

// let age = 16;

// if (age >= 18) {
//    console.log("you can vote");
// }

// if (age < 18) {
//    console.log("you CANNOT vote");
// }

// -->if-else statement
let num = 10;

if(num % 2 === 0) {
   console.log(num, "is even");
} else {
   console.log(num, "is odd")
}

// -->else-if statement
let mode = "dark";
let color;

if(mode === "dark") {
   color = "black";
} else if(mode === "blue") {
   color = "blue";
} else if(mode === "pink") {
   color = "pink";
} else{
   color = "white";
}

console.log(color);

if(mode === "dark") {
   console.log(mode);
}








