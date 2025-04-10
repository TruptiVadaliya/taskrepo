/* ================== 1. Creating an Array ==================== */


let arr = [1, 2, 3, 4];
let arr2 = new Array(3);
console.log(arr);



/* ================== 2. Adding/Removing Elements ==================== */


let numbers = [1, 2, 3];


//push
numbers.push(4);
console.log(numbers);


//pop

numbers.pop();
console.log(numbers);


//unshift

numbers.unshift(0);
console.log(numbers);


//shift

numbers.shift();
console.log(numbers);


//splice

numbers.splice(1, 1, 10);
console.log(numbers);


//slice

let newArr = numbers.slice(1, 3);
console.log(newArr);


/* ================== 3. Iterating Over Arrays ==================== */


let number = [1, 2, 3, 4, 5];


// foreach
number.forEach(num => console.log(num * 2));

//map

let double = number.map(num => num * 2);
console.log(double);


//filter

let even = number.filter(num => num % 2 === 0);
console.log(even);


//reduce

let sum = number.reduce((acc, num) => acc + num, 0);
console.log(sum);

//some

let hasEven = number.some(num => num % 2 === 0);
console.log(hasEven);


/* ================== 4. Sorting & Reversing ==================== */

//sort

let words = ["banana", "apple", "cherry"];
words.sort()
console.log(words);


let num = [5, 10, 2, 4];
num.sort((a, b) => a - b);
console.log(num);


num.reverse();
console.log(num);


/* ================== 5. Converting & Joining ==================== */


let chars = ['a', 'b', 'c'];
console.log(chars.join(","));
console.log(chars.toString());

let arra1 = [1, 2];
let arra2 = [3, 4];
console.log(arra1.concat(arra2));



// // function outerFunction(){
// //   let count = 0;
// //   return function innerFunction(){
// //     count++;
// //     console.log(count);
// //   }
// // }const counter= outerFunction()
// // counter()
// // counter()


// console.log(this);

// const obj = {
//   name:"abc",
//   greet:
//     function(){
//       console.log(this.name);
//     }
// }
// obj.greet()


// const obj = {
//   name: "Alice",
//   greet: function () {
//     console.log(this.name);
//   },
// };
// obj.greet()



function debounce(fn, delay) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn(...args), delay);
    };
  }
  
  window.addEventListener("resize", debounce(() => console.log("Resized!"), 500));
  