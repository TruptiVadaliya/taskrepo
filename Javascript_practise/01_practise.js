// ///================== var ===================///

// function test() {
//   console.log("x");
//   var x = 1;
//   console.log(x);
// }

// ///================== let ===================///

// {
//   let b = 5;
//   console.log(b);
// }

// ///================== const ===================///

// const person = { name: "john" };
// person.name = "jane";

// ========= practise set ================//

// let person = "john";
// const accountId = 12134;
// var city = "surat";
// password = "1234";

// // accountId = "123";
// person = "doe";
// city = "xyz";
// password = "2121212";
// console.log(person, city, password);

///================= string ================//

// let str = "world";
// let greeting = `hello ${str}`;
// console.log(greeting);;

//================= number ==================//

// number = range of number is -2 to 53;

// let age = 20;
// let price = 10;
// let total = age + price;
// console.log(total);

///================== boolean ===============//

// let isActive = true;
// console.log(isActive);

//============== undefind ===================///

// let x;
// console.log(x);

//============= null ==================//

// let ab = "";
// console.log(ab);

//============= symbol ==============//

// const id = Symbol("id");
// const user = {
//   [id]: 1,
// };
// console.log(user[id]);

//================= bigint =================//

// const big = 123456765432123456765432213456754234567n;
// const another = BigInt("3245654323678");
// console.log(big, another);

// =================== object ===================//

// let person= {
//     name: "john",
//     age: 20,
// }
// console.log(person.name,person.age);

//===================== array ====================//

// let fruits=["apple","banana","guava"];
// console.log(fruits);

//==================== function =================//

// function fruits(name) {
//     return `Hello ${name}`;
// }

// let a = "hello";
// let b = 10;
// let c = true;
// let d = null;
// let e = undefined;
// let f = Symbol("id");
// let g = 10n;
// let h = {};
// let i = [];
// let j = function () {};

// console.table([typeof a, typeof b, typeof c, typeof d, typeof e, typeof f, typeof g, typeof h, typeof i, typeof j]);

//================ Operator ================= //

///=================== Arithmetic Operator ===================///

// let a = 10;
// let b = 3;

// console.log("Addition:", a + b); // Addition
// console.log("Subtraction:", a - b); //Subtraction
// console.log("Multiplication:", a * b); //Multiplication
// console.log("Division:", a / b); //Division
// console.log("Modulus:", a % b); //Modulus
// console.log("Exponentiation:", a ** b); //Exponentiation
// console.log("Increment:", ++a); // Increment
// console.log("Decrement:", --b); // Decrement

//=================== Assignment Operator ===================//

// let num = 10;

// num += 5; // num = num + 5 -> num = 15
// num -= 3; // num = num - 3 -> num = 12
// num *= 2; // num = num * 2 -> num = 24
// num /= 2; // num = num / 2 -> num = 12
// num %= 2; // num = num % 2 -> num = 0
// num **= 3; // num = num ** 3 -> num = 0

// console.log("Final value of num:", num);

//=================== Comparison Operator ===================//

// let x = 10;
// let y = "10";

// console.log("Equal (==):", x == y);
// console.log("Equal (===):", x === y);
// console.log("Not Equal (!=):", x != y);
// console.log("Not Equal (!==):", x !== y);
// console.log("Greater than (>):", x > y);
// console.log("Less than (<):", x < y);
// console.log("Greater than or Equal (>=):", x >= y);
// console.log("Less than or Equal (<=):", x <= y);

//=================== Logical Operator ===================//

// let age = 20;
// let hasId = true;

// console.log("AND:", age >=18 && hasId);;
// console.log("OR:", age >=18 || hasId);
// console.log("NOT:", !hasId);

//=================== Ternary Operator ===================//

// let marks = 80;
// let result = marks <= 10 ? "pass" : "fail";

// console.log("Rxam Result:",result);

//=================== Type Operator ===================//

// console.log(typeof "Hello");
// console.log(typeof 123);
// console.log(typeof true);
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof Symbol("id"));
// console.log(typeof 10n);

// let arr = [];
// let obj = {};
// console.log(arr instanceof Array);
// console.log(obj instanceof Object);
// console.log(typeof function () {});

///==================== if ==================///

// let age = 20;

// if (age >= 17) {
//   console.log("adult");
// }

//=================== if else ==================//

// let temp = 30;
// if(temp >30){
//     console.log("cold");
// }else{
//     console.log("hot");
// }

//=================== if else if ==================//

// let marks = 180;

// if (marks >= 90) {
//   console.log("A+");
// } else if (marks >= 80) {
//   console.log("A");
// } else {
//   console.log("b");
// }

//=================== switch ==================//

// let day = 1;

// switch (day) {
//   case 1:
//     console.log("monday");
//     break; // Exit the switch after executing this case
//   case 2:
//     console.log("tuesday");
//     break; // Exit the switch after executing this case
//   case 3:
//     console.log("wednesday");
//     break; // Exit the switch after executing this case
//   case 4:
//     console.log("thursday");
//     break; // Exit the switch after executing this case
//   case 5:
//     console.log("friday");
//     break; // Exit the switch after executing this case
//   case 6:
//     console.log("saturday");
//     break; // Exit the switch after executing this case
//   case 7:
//     console.log("sunday");
//     break; // Exit the switch after executing this case
// }

//===================  ternary ==================//

// let score = 80;

// let grade = (score >= 90) ? "A+":(score >= 80)? "A":(score >= 70)?"B":"F"
// console.log(grade);

//================  Function Declaration (Named Function) =============//

// function greet(name) {
//   return "Hello " + name + "!";
// }
// console.log(greet("john"));

//================  Function Expression (Anonymous Function) =============//

// const add = function (a, b) {
//   return a + b;
// };
// console.log(add(4, 2));

//================ Arrow Function (ES6+) =============//

// const multiply = (a, b) => a * b;
// console.log(multiply(3, 4));

// const square = (x) => x * x;
// console.log(square(5));

//====================  Function with Default Parameters ====================//

// function welcome(name = "Guest") {
//   console.log("Welcome, " + name);
// }
// welcome();
// welcome("john")

//==================== Returning Statements =====================//

// function sum(x, y) {
//   return x + y;
// }
// let result = sum(12, 3);
// console.log(result);

//=================  Function Invocation (Calling a Function) ================//

// sayHello();

// function sayHello() {
//   console.log("Hello, world");
// }

//================== Self-Invoking Function (IIFE) =================//

// (function () {
//   console.log("hello");
// })();

//================== Function Inside Function ==================//

// function outerFunction() {
//   console.log("outer Function");

//   function innerFunction() {
//     console.log("inner function");
//   }
//   innerFunction();
// }
// outerFunction();

///==================== for loop ==================///

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

///==================== while loop ==================///

// let i = 0;

// while (i <= 10) {
//   console.log(i);
//   i++;
// }

//==================== do while loop ==================///

// let i = 0;
// do {
//   console.log("dowhile:", i);
//   i++;
// } while (i <= 10);

//==================== forEach loop ==================///

// let fruits = ["apple", "banana", "guava"];

// fruits.forEach(fruits => {
//   console.log(fruits);
// });

//==================== for in loop ==================///

// let person = { name: "john", age: 20, city: "surat" };
// for (let key in person) {
//   console.log(key + ":", person[key]);
// }

//==================== for of loop ==================///

// let colors = ["green", "pink", "black"];
// for (let color of colors) {
//   console.log(color);
// }

