
let a = +prompt("Enter first number:");
let b = +prompt("Enter second number:");


console.log("Before Swapping");
console.log(`A : ${a}`);
console.log(`B : ${b}`);


a = a * b;
b = a / b;
a = a / b;


console.log("After Swapping");
console.log(`A : ${a}`);
console.log(`B : ${b}`);