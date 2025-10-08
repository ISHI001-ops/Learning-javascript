// Browser <-- Html <--- JS 
//css -> link tag
//JS -> script tag 
// = ko hum assignment operator kehte hai = right side ki value ko left side ki value mai jaa ke save ker raha hai
// curly brases jaha se shuru hote hai vaha se naya code shuru hota hai
// apan ko pure collection ko change karna hoga ek object ko change karne ke liye
// let.. ko hum update ker sakte hai, const ko nahi, but const obj-->key ko ker sakte hai
// syntax --> rules
// string is a sequence of characters used to represent text
// --> \n for next line   
// strings are immutable in JS.... immutable=joh chize change nahi hoti
// arrays --> collection of items
// object ke ander hame her ek key ko alag naam dena padta hai but array mai hum sare items ko ek single naam ke ander store ker ke rakh sakte hai
// property vo hoti hai joh bs kuch value de deti hai or method vo hota hai joh kuch kaam kar raha hota hai
// array ka koi type nahi hota vo ek object hai
// arrays are mutable in JS 
// array methods --> push() = add , pop() = delete


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
let u = 5;

console.log("cond3 || cond4 =",h < u || h === 6 ); // || -> pipe symbol

// -->logical NOT
let j = 6;
let k = 5;

console.log("!(6<5) = ", !(u < k) );



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
// let num = 10;

// if(num % 2 === 0) {
//    console.log(num, "is even");
// } else {
//    console.log(num, "is odd")
// }

// -->else-if statement
// let mode = "dark";
// let color;

// if(mode === "dark") {
//    color = "black";
// } else if(mode === "blue") {
//    color = "blue";
// } else if(mode === "pink") {
//    color = "pink";
// } else{
//    color = "white";
// }

// console.log(color);

// if(mode === "dark") {
//    console.log(mode);
// }

// -->ternary operators
let age = 15;

let result = age >= 18 ? "adult" : "not adult";
console.log(result);



// practice question 1

// let num = prompt("enter a number");

// if(num % 5 === 0) {
//    console.log(num, "is a multiple of 5");
// } else {
//    console.log(num,"is NOT a multiple of 5");
// }
  
// practice question 2

let score = 75;
let grade;

if(score >= 90 && score <= 100) {
   grade = "A";
} else if(score >= 70 && score <= 89) {
   grade = "B";
} else if(score >= 60 && score <= 69) {
   grade = "C";
} else if(score >= 50 && score <= 59) {
   grade = "D";
} else if(score >= 0 && score <= 49) {
   grade = "F"
}

console.log("according to your scores, your grade was : ", grade)


//for loops 

// for (let count = 1; count <= 10000; count++) {
//    console.log("ISHI JAIN");  //5 execute
// }


//Calculate sum of 1 to 5
let sum = 0
for(let i = 1; i <= 5; i++) {
   sum = sum + i;
}
console.log("sum = ",sum);
console.log("loop has ended");

// infinite loop --> a loop that never ends

// while loops

let i = 1;
while(i <= 5) {
   console.log("i=", i);
   i++;
}

// do while loop

let v = 20
do {
   console.log("ISHI JAIN");
   v++
} while (v<=10);

// for-of loop



// let str = "JAVASCRIPT";

// let size = 0;
// for(let s of str) {
//    console.log("s=",s);
//    size++;
// }  

// console.log("string size = ", size);  //10 characters in JS spelling
 

//for in loop

let student = {
   name: "ishi jain",
   age: 20,
   cgpa: 7.5,
   ispass: true
};

for (let key in student) {
   console.log("key=",key, "value=",student[key]);
}


// practice ques.
for(let num=0; num <= 100; num++) {
   if(num%2 === 0) {      //even number
      console.log("num =",num);

   }  

}


// practice ques.
// let gameNum = 25;

// let userNum = prompt("Guess the game number : ");

// while(userNum != gameNum) {
//    userNam = prompt("You entered wrong number . Guess again : ");
// }
// console.log("congratulations, you entered the right number");






//Strings
// let str = "Ishi jain";
//  console.log(str[5]);

//Template Literals
 let specialString = `this is a template literal`;
 console.log(typeof specialString);


 let obj = {
   item: "pen",
   price: 10,
 };

 let output = `the cost of ${obj.item} is ${obj.price} rupees`;
 console.log(output);

 console.log("the cost of", obj.item, "is", obj.price, "rupees");


 let str = "01234567"
 console.log(str.slice(1,6));


 let str1 = "Ishi";
 let str2 = "Jain";
  
let res = "hello" + 123 
console.log(res);


let str3 = "hello";

console.log(str3.replace("lo","p"));


let str4 = "IloveJS";

console.log(str4.charAt(3));


//practice question
let fullName = prompt("enter your fullName without spaces");

let username = "@" + fullName + fullName.length;
console.log(username);




// Arrays
let marks = [97,82,45,67,77]
console.log(marks);
console.log(marks.length); //property

 
// Array Indices

// Looping over an Array

let heroes = ["ironman","thor","hulk","shaktiman","spiderman","loki"];
 // -->for loop
// for(let i = 0; id < heroes.length; i++) {
//    console.log(heroes[i]);
// }

// -->for of 
for(let hero of heroes) {
   console.log(hero);
}
   
let cities = ["delhi","ahmedabad","mumbai","udaipur","pune"]

for(let city of cities) {
   console.log(city.toUpperCase());
}

// practice ques 
let markstwo = [85,97,44,37,76,60];
let sum1 = 0;

for(let val of markstwo) {
   sum1 += val;
}

let avg = sum1 / markstwo.length;
console.log(`avg marks of the class = ${avg}`);



//practice ques

let items = [240,645,300,900,50];

// let idx = 0;
// for (let val of items) {
  
//    let offer = val / 10;
//    items[idx] = items[idx] - offer;
//    console.log(`value after offer = ${items[idx]}`)
//    i++;
// }

for (let idx = 0; idx < items.length; idx++) {
   let offer = items[idx] / 10;
   items[idx] -= offer;
}

console.log(items); 


//Array Methods

// --> push()
let foodItems = ["potato","apple","litchi","tomato"];

foodItems.push("chips","burger","paneer");

console.log(foodItems);

