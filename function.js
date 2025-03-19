//=========== 1. function declaration (Named Function) ===============//

function sayHello() {
    console.log("Hello");
}

//============== 2. Function Expression (Anonymous Function) ===============//


const greet = function () {
    console.log("Hello from funtion");
};
greet();


//============== 3. Arrow Functions ===============//


const add = (a, b) => {
    return a + b;
};
console.log(2 + 8);


const multiply = (a, b) => a * b;
console.log(2 * 3);


//============== 4. Parameters and Arguments===============//


function greetPerson(name) {
    console.log("Hello, " + name);
}
greetPerson("Alice")


//============== 5. Return Statement ===============//

function addd(a, b) {
    return a + b;
}
const result = addd(2, 4);

//============== 6. Default Parameters ===============//


