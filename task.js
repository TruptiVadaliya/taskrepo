// // /** =============Even or odd number ===============*/


// // let number = prompt("Enter an integer: ");

// // if (number % 2 === 0) {
// //     console.log("Even");
// // } else {
// //     console.log("Odd");
// // }

// // let number = prompt("enter a number");
// // if (number % 2 === 0) {
// //     console.log("even");
// // } else {
// //     console.log("odd");
// // }




// // /** =============== check tempeture ================== */

// // let temperature = 30;

// // if (temperature >= 0) {
// //     console.log("Freezing");
// // } else if (temperature >= 0 - 20) {
// //     console.log("Cold");
// // } else if (temperature >= 20 - 35) {
// //     console.log("Warm");
// // } else if (temperature >= 35) {
// //     console.log("Hot");
// // } else {
// //     console.log("It's cold outside! Stay warm.");
// // }


// // let temp = 30;
// // if (temp < 0) {
// //     console.log("freezing");
// // } else {
// //     if (temp >= 0 && temp <= 20) {
// //         console.log("cold");
// //     } else {
// //         if (temp >= 21 && temp <= 35) {
// //             console.log("cold");
// //         } else {
// //             console.log("hot");
// //         }
// //     }
// // }


// // /*============ leap year =========== */

// // let year = 2024;

// // if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
// //     console.log(year + " is a Leap Year");
// // } else {
// //     console.log(year + " Not a Leap Year");
// // }


// // let years = 2024;

// // if (years % 4 === 0) {
// //     if (years % 100 === 0) {
// //         if (years % 400 === 0) {
// //             console.log(years + " is a Leap Year");
// //         } else {
// //             console.log(years + " is NOT a Leap Year");
// //         }
// //     } else {
// //         console.log(years + " is a Leap Year");
// //     }
// // } else {
// //     console.log(years + " is NOT a Leap Year");
// // }



// // /**========= number sign =========== */

// // let numbers = prompt("enter a number: ");

// // if (numbers > 0) {
// //     console.log("the nuber is positive");
// // } else if (numbers < 0) {
// //     console.log("the number is negative");
// // } else {
// //     console.log("the number is zero");
// // }


// // /**========= Simple Calculator =========== */

// // let num1 = prompt("Enter the first number:");
// // let num2 = prompt("Enter the second number:");
// // let operator = prompt("Enter an operator (+, -, *, /):");

// // let result;


// // if (operator === "+") {
// //     result = num1 + num2;
// // } else if (operator === "-") {
// //     result = num1 - num2;
// // } else if (operator === "*") {
// //     result = num1 * num2;
// // } else if (operator === "/") {
// //     if (num2 !== 0) {
// //         result = num1 / num2;
// //     } else {
// //         result = "Error! Division by zero is not allowed.";
// //     }
// // } else {
// //     result = "Invalid operator! Please enter +, -, *, or /.";
// // }

// // alert("Result: " + result);



// // switch (operator) {
// //     case "+":
// //         result = num1 + num2;
// //         break;
// //     case "-":
// //         result = num1 - num2;
// //         break;
// //     case "*":
// //         result = num1 * num2;
// //         break;
// //     case "/":
// //         if (num2 !== 0)  {
// //             result = num1 / num2;
// //         } else {
// //             result = "Error! Division by zero is not allowed.";
// //         }
// //         break;

// //     default:
// //         result = "Invalid operator! Please enter +, -, *, or /.";
// //         break;
// // }



// /**========= Max of Three =========== */


// // let num1 = prompt("Enter the first number: ");
// // let num2 = prompt("Enter the second number: ");
// // let num3 = prompt("Enter the third number: ");


// // let largest;

// // if (num1 >= num2 && num1 >= num3) {
// //     largest = num1;
// // } else if (num2 >= num1 && num2 >= num3) {
// //     largest = num2;
// // } else {
// //     largest = num3;
// // }
// // alert ("the largest number is: " + largest);


// /**========= Day of the Week =========== */

// // let day = 2;
// // switch (day) {
// //     case 1:
// //         console.log("Monday");
// //         break;
// //     case 2:
// //         console.log("Tuesday");
// //         break;
// //     case 3:
// //         console.log("Wednesday");
// //         break;
// //     case 4:
// //         console.log("Thursday");
// //         break;
// //     case 5:
// //         console.log("Friday");
// //         break;
// //     case 6:
// //         console.log("Saturday");
// //         break;
// //     case 7:
// //         console.log("Sunday");
// //         break;
// //     default:
// //         console.log("Invalid day");
// // }

// /**=========  Login Validation =========== */

// // let username = prompt("Enter the username: ");
// // let password = prompt("Enter the password: ");

// // if (username === "admin" && password === "password123") {
// //     alert("Login Succesful");
// // }else{
// //     alert("Invalid credentials")
// // }


// /**=========  Multiple Conditions =========== */

// // let age = prompt("Enter your age: ");

// // if (age >= 18) {
// //     alert("You are eligible to vote.");
// // } else {
// //     alert("You are not eligible to vote.");
// // }

// /**=========  Fizz Buzz =========== */


// // for (let i = 1; i <= 100; i++) {
// //     if (i % 3 === 0 && i % 5 === 0) {
// //         console.log("FizzBuzz");
// //     } else if (i % 3 === 0) {
// //         console.log("Fizz")
// //     } else if (i % 5 === 0) {
// //         console.log("Buzz");
// //     } else {
// //         console.log(i);
// //     }
// // }







// //==================== Arrays =================//

// //=========== problem 1 =============//

// function sumEvenNumber(arr) {
//     return arr.reduce((sum, num) => num % 2 === 0 ? sum + num : sum, 0);
// }

// console.log(sumEvenNumber([1, 2, 3, 4, 5]));



// //=========== problem 2 =============//


// function reversedArray(arr) {
//     let reversed = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         reversed.push(arr[i]);
//     } return reversed
// }
// console.log(reversedArray([1, 2, 3, 4]));



// //==================== Objects =================//

// //=========== problem 1 =============//


// function greetPerson(person) {
//     return `Hello, ${person.firstName} ${person.lastName}! You are ${person.age} years old`;
// }

// const person = { firstName: 'john', lastName: 'doe', age: 30 };
// console.log(greetPerson(person));


// //=========== problem 2 =============//


// function count(str) {
//     let charCount = {};
//     for (let char of str) {
//         charCount[char] = (charCount[char] || 0) + 1;
//     }
//     return charCount;
// }
// console.log(count("banana"));




// //==================== Function =================//


// //=========== problem 1 =============//


// function factorial(n) {
//     let res = 1;
//     for (let i = 2; i <= n; i++) {
//         res *= i;
//     }
//     return res;
// }
// console.log(factorial(6));


// //=========== problem 2 =============//


// function isPrime(n) {
//     if (n < 2) return false;
//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) return false;
//     }
//     return true;
// }
// console.log(isPrime(7));





// //==================== Map, Reduce, Filter, Find =================//


// //=========== problem 1 =============//


// function double(arr) {
//     return arr.map(num => num * 2);
// }
// console.log(double([1, 2, 3, 4]));


// //=========== problem 2 =============//


// function productArray(arr) {
//     return arr.reduce((product, num) => product * num, 1);
// }
// console.log(productArray([1, 2, 3, 4]));


// //=========== problem 3 =============//


// function filtergreaterThanTen(arr) {
//     return arr.filter(num => num > 10);
// }
// console.log(filtergreaterThanTen([5, 10, 15, 20]));


// //=========== problem 4 =============//


// function findFirstEven(arr) {
//     return arr.find(num => num % 2 === 0);
// }
// console.log(findFirstEven([1, 3, 5, 6, 7]));



// //====================  If-Else & Switch-Case =================//


// function checkNumber(n) {
//     if (n > 0) {
//         return "Positive";
//     } else if (n < 0) {
//         return "negative";
//     } else {
//         return "zero";
//     }
// }
// console.log(checkNumber(-5));
// console.log(checkNumber(10));
// console.log(checkNumber(0));


// //=============== problem 2 in switch case ============//

// function getDayName(day) {
//     switch (day) {
//         case 1:
//             return "Monday";
//         case 2:
//             return "Tuesday";
//         case 3:
//             return "Wednesday";
//         case 4:
//             return "Thursday";
//         case 5:
//             return "Friday";
//         case 6:
//             return "Saturday";
//         case 7:
//             return "Sunday";

//         default:
//             return "Invalid day";
//     }
// }

// console.log(getDayName(3));
// console.log(getDayName(7));
// console.log(getDayName(10));


// //====================  Loops =================//


// //============ problem 1 ============//


// function printEven() {
//     let result = [];
//     for (let i = 2; i <= 50; i += 2) {
//         result.push(i);
//     }
//     console.log(result.join(","));
// }
// printEven();


// //============ problem 2 ============//


// function sumOddNumber() {
//     let sum = 0;
//     let i = 1;
//     while (i <= 100) {
//         sum += i;
//         i += 2;
//     }
//     return sum;
// }
// console.log(sumOddNumber());


// //============ problem 3 ============//


// function printCharacter(str) {
//     console.log(str.split("").join(" "));
// }
// printCharacter("hello")



// //================ Bonus Challenge ================//


// function sumofSqureOfEven(arr) {
//     return arr
//         .filter(num => num % 2 === 0)
//         .map(num => num ** 2)
//         .reduce((sum, num) => sum + num, 0);
// }
// console.log(sumofSqureOfEven([1, 2, 3, 4, 5, 6]));






// //================= javascript doc ===============//



// //============ problem 1 ============//


// const students = [
//     {
//         name: "a",
//         age: 22,
//         className: "java"
//     },
//     {
//         name: "aa",
//         age: 22,
//         className: "java"
//     },
//     {
//         name: "aaa",
//         age: 22,
//         className: "java"
//     },
//     {
//         name: "ab",
//         age: 21,
//         className: "Node Js"
//     },
//     {
//         name: "abb",
//         age: 21,
//         className: "Node Js"
//     },
//     {
//         name: "abbb",
//         age: 21,
//         className: "Node Js"
//     },
// ];


// // 1. Get all Node Js students and print in console.

// const nodeJsStudent = students.filter(student => student.className === "Node Js");

// console.log("Node Js Students:", nodeJsStudent);




// // 2. Get student whose name is aaa and print in console.


// const studetAaa = students.find(student => student.name === "aaa");

// console.log("Student With name 'aaa':", studetAaa);



// // 3.console array of classes. no matters how many calsses are exists in array. e.g ["java", "Node Js"]


// const classNames = [...new Set(students.map(student => student.className))];

// console.log("Class names: ", classNames);



// // 4. get all keys of student object and print in console. e.g. ["name", "age", "className"]


// const studentKeys = Object.keys(students[0]);
// console.log("Student Object Keys: ", studentKeys);





// // ============== problem 2 ==================//



// const worksDuration = [
//     {
//         'name': 'Write tutorials',
//         'duration': 120
//     },
//     {
//         'name': 'Running',
//         'duration': 60
//     },
//     {
//         'name': 'Proccess',
//         'duration': 240
//     }
// ];

// // 1. Add another element to the end of the worksDuration list.

// worksDuration.push({ name: "Reading", duration: 90 });

// // 2. Add another element to the beginning of the worksDuration list.

// worksDuration.unshift({ name: "Meditation", duration: 30 });


// // 3. Print the length of the worksDuration to the console.

// console.log("Length of worksDuration: ", worksDuration.length);


// // 4. Remove the last element from the end of the list, and then print the length of the array.


// worksDuration.pop();
// console.log("Length after removing last element: ", worksDuration.length);


// // 5. Write a for loop to iterate through every element and print index + value.


// for (let i = 0; i < worksDuration.length; i++) {
//     console.log(`Index ${i}:`, worksDuration[i]);
// }

// // 6. Transform array of objects into an array of strings using map().

// const workStrings = worksDuration.map(work => `${work.name}- ${work.duration}mins`);

// console.log("Transformed array of strings: ", workStrings);

// // 7. Sort the worksDuration by duration and print.

// worksDuration.sort((a, b) => a.duration - b.duration);
// console.log("Sorted worksDuration by duration:", worksDuration);




let myObject = {
    character: "McPenguinFace",
    origin: "Donald Duck",
    notes: "Classic 1939 cartoon .",
    canFly: true,

    chirp: function () {
        console.log("CHIRP CHIRP! Is this what penguins sound like?");
    },

    sayHello: function () {
        console.log("Hello, I'm a penguin and my name is " + this.character + "!");
    },

    fly: function () {
        if (this.canFly) {
            console.log("I can fly!");
        } else {
            console.log("No flying for me!");
        }
    }
};




// 1. Add a new property called favoriteFoods with an array of three strings

myObject.favouriteFoods = ["fish", "shrimp", "krill"];

// 2. Access the second favorite food and print it to the console

console.log(myObject.favouriteFoods[1]);


// 3. Create a variable firstFavFood and set it to the first item in favoriteFoods

let firstFavFood = myObject.favouriteFoods[0];


// 4. Add another food to the end of the list

myObject.favouriteFoods.push("squid");

//5. Print the length of the favoriteFoods array

console.log(myObject.favouriteFoods.length);


// 6. Change the last item in the list to "pineapples"

myObject.favouriteFoods[myObject.favouriteFoods.length - 1] = "pineapples";


// 7. Create lastFavFood that always points to the last item


let lastFavFood = myObject.favouriteFoods[myObject.favouriteFoods.length - 1];


// 8. Use a for loop to print each favorite food
for (let food of myObject.favouriteFoods) {
    console.log(food);
}


// 9. Add an outfit property with nested properties


myObject.outfit = {
    hat: "basball cap",
    shirt: "Haeaiian shirt",
    pants: "cargo shorts",
    shoes: "flip-flops"
};


// 10. Create a variable for the hat type and print it

let penguinHatType = myObject.outfit.hat;
console.log(penguinHatType);


// 11. Add an accessory property to the outfit

myObject.outfit.accessory = "pocket watch";


// 12. Change the hat value to "top hat"

myObject.outfit.hat = "top hat";


// 13. Delete the pants property from outfit

delete myObject.outfit.pants;


// 14. Use a for...in loop to print all outfit values

for (let item in myObject.outfit) {
    console.log(myObject.outfit[item]);
}       