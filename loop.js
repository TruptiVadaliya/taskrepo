// . Controlling Flow with Conditions and Loops (if...elsle, for, while, do..while)

// 1. The if Statement

let age = 18;
if (age >= 18) {
    console.log("you are eligible to vote");
}


//2. Using Shorthand Conditional Expressions

let ages = 20;
let message = ages >= 18 ? "adult " : "minor";
console.log(message);


// 3. Testing Multiple Conditions with if and else

let score = 80;
if (score >= 90) {
    console.log("Grade :A");
} else if (score >= 80) {
    console.log("Grade : B");
} else {
    console.log("Grade: C");
}


//4. Using Multiple Conditions with switch

let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the workWeek");
        break;
    case "Friday":
        console.log("WeekEnd is near!");
    default:
        console.log("Regular Day.");
        break;
}

// 5. Using for Loops

for (let i = 1; i <= 5; i++) {
    console.log("Iteration " + i);
}


// 7. Using do...while Loops


let num = 1;
do {
    console.log("Number: " + num);
    num++;
} while (num <= 5)



//8. Working with Loops

let fruits = ["Apple", "Banana", "Cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// 9. Looping Through Object Properties

let person = { name: "John", age: 28, city: "New York" };
for (let key in person) {
    console.log(key + ": ", person[key]);
}



// 7. Responding to Events (click,blur,focus,hover)


// 1. Understanding Event Handlers
