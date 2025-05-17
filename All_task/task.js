// async function fetchCountriesStates() {
//   try {
//     // Making the GET request to the API
//     const response = await fetch('https://countriesnow.space/api/v0.1/countries/states');

//     // Checking if the response is successful
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     // Parsing the JSON data from the response
//     const data = await response.json();

//     // Log the fetched data
//     console.log("data", data)
//     // console.log(data.data);

//     // Optionally: You can process the data here, for example:
//     // Iterate over countries and print their states
//     data.data.forEach(country => {
//       console.log(`Country: ${country.name}`);
//       console.log('States:', country.states);
//     });
//   } catch (error) {
//     // Handling any errors
//     console.error('Error fetching data:', error);
//   }
// }

// fetchCountriesStates()

// function backgroundBlack(){
//   document.body.style.backgroundColor = "Black";
//   document.body.style.color = "White"
// }

// let score = prompt("enter your number (0-100)");
// let grade;

// if (score >= 90 && score <= 100) {
//   grade = "A";
// } else if (score >= 70 && score <= 89) {
//   grade = "B";
// } else if (score >= 60 && score >= 69) {
//   grade = "C";
// } else if (score >= 50 && score <= 59) {
//   grade = "D";
// } else if (score >= 0 && score <= 49) {
//   grade = "F";
// }

// console.log("according your number: ",grade);

// let fullName = prompt("enter the user name without space: ");
// let userName = "@" + fullName + fullName.length;
// console.log(userName);

// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toUTCString());
// console.log(typeof myDate)

// let myCreatedDate = new Date(2025, 0, 23);
// console.log(myCreatedDate.toDateString());

// let createdDate = new Date("01-05-2025")
// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(Date.now());

// let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getFullYear());

// let myArr = [12, 13, 2, 43, 4, 5];
// const num = [1, 23, 4, 3, 5];

// const myArray = new Array(1, 2, 4, 5);
// console.log(myArray[3]);

// myArr.push(9);
// myArr.push(4)
// myArr.pop();
// myArr.unshift(3)
// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(12));
// console.log(myArr.indexOf(4));

// const newArray = myArr.join()
// console.log(myArr);
// console.log(newArray);

// console.log("A",myArr);

// const myA1 = myArr.slice(1,3)
// console.log(myA1);
// console.log("B ",myArr);

// const myA2 = myArr.splice(1,3);
// console.log("C ",myArr);
// console.log(myA2);

// const fruits = ["apple", "mango", "banana"];
// const fruits1 = ["guava", "pineapple", "lichi"];

// fruits.push(fruits1);
// console.log(fruits);
// console.log(fruits[3][1]);

// const allHeros = fruits.concat(fruits1)
// console.log(allHeros);

// const allFruits = [...fruits,...fruits1];
// console.log(allFruits);

// const another_array = [1, 2, 3, [4, 3], 4, [8, 9, 8, [3, 5, 3]], 9];
// const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

// console.log(Array.isArray("trupti"));
// console.log(Array.from("trush"));
// console.log(Array.from({name:'trush'}));

// let score1 = 100;
// let score2 = 200;
// let score3 = 300;
// console.log(Array.of(score1,score2,score3));

const fruits = ["apple", "mango", "banana", "guava", "pineapple", "lichi"];

// for loop
// for (let index = 0; index < fruits.length; index++) {
//     console.log(fruits[index]);
// }

// for of

// for (let fruit of fruits) {
//   console.log(fruit);
// }

//practise

// let marks = [85, 97, 44, 37, 76, 60];

// let sum = 0;

// for (let val of marks) {
//   sum += val;
// }

// let avg = sum/marks.length
// console.log(`avg marks of: ${avg}`);

//practise

// let items = [250, 645, 300, 900, 50];

// let i = 0;
// for (let price of items) {
//   let offer = price/10;
//   items[i] = items[i]-offer;
//   console.log(`value after offer = ${items[i]}`);
//   i++;
// }

// let companies = ["bloomberg","microsoft","google","uber","IBM","netflix"];

// // companies.shift()
// // companies.splice(3,1,"ola")
// companies.push("amazon")

/// ================= object ================///

// const mySym = Symbol("key1");

// const JsUser = {
//   name: "trush",
//   age: "20",
//   [mySym]: "mykey1",
//   "full name": "trushhh",
//   location: "surat",
//   email: "123@gmail.com",
//   isLoogedIn: false,
//   lastLoginDays: ["monday", "friday"],
// };

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// JsUser.email="12345@gmail.com";
// Object.freeze(JsUser)
// JsUser.email="trush@gmail.com"
// console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("hello js user");
// }
// JsUser.greetingtwo = function(){
//     console.log(`hello from js user, ${this.name}`);

// }

// console.log(JsUser.greeting())
// console.log(JsUser.greetingtwo());

// const tinderUser = {};

// tinderUser.id = "1223ed";
// tinderUser.name = "Sammy";
// tinderUser.isLoogedIn = false

// console.log(tinderUser);

// const regularUser = {
//   email: "some@gmail.com",
//   fullName: {
//     userFullName: {
//       firstName: "123",
//       lastName: "456",
//     },
//   },
// };
// // console.log(regularUser.fullName?.userFullName)

// const obj1 = { 1: "a", 2: "b" };
// const obj2 = { 3: "a", 4: "b" };
// // const obj3 = { obj1, obj2 };
// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);




///======================= function ================//
// function sayMyName() {
//   console.log("H");
//   console.log("I");
//   console.log("T");
//   console.log("E");
//   console.log("S");
//   console.log("H");
// }

// // sayMyName()

// // function addTwoNumbers(number1, number2){

// //     console.log(number1 + number2);
// // }

// function addTwoNumbers(number1, number2) {
//   // let result = number1 + number2
//   // return result
//   return number1 + number2;
// }

// const result = addTwoNumbers(3, 5);

// // console.log("Result: ", result);

// function loginUserMessage(username = "sam") {
//   if (!username) {
//     console.log("PLease enter a username");
//     return;
//   }
//   return `${username} just logged in`;
// }

// // console.log(loginUserMessage("hitesh"))
// // console.log(loginUserMessage("hitesh"))

// function calculateCartPrice(val1, val2, ...num1) {
//   return num1;
// }

// // console.log(calculateCartPrice(200, 400, 500, 2000))

// const user = {
//   username: "hitesh",
//   prices: 199,
// };

// function handleObject(anyobject) {
//   console.log(
//     `Username is ${anyobject.username} and price is ${anyobject.price}`
//   );
// }

// // handleObject(user)
// handleObject({
//   username: "sam",
//   price: 399,
// });

// const myNewArray = [200, 400, 100, 600];

// function returnSecondValue(getArray) {
//   return getArray[1];
// }

// // console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));



// let a = 20;

// if(true){
//     let a = 10;
//     const b = 10;
    
// }