let a = +prompt("Enter a value of the first number:");
let b = +prompt("Enter a value of the second number:");
let c = +prompt("Enter a value of the third number:");
let d = +prompt("Enter a value of the fourth number:");

if (a > b) {
    if (a > c) {
        if (a > d) {
            console.log("The maximum value is: " + a);
        } else {
            console.log("The maximum value is: " + d);
        }
    } else {
        if (c > d) {
            console.log("The maximum value is: " + c);
        } else {
            console.log("The maximum value is: " + d);
        }
    }
} else {
    if (b > c) {
        if (b > d) {
            console.log("The maximum value is: " + b);
        } else {
            console.log("The maximum value is: " + d);
        }
    } else {
        if (c > d) {
            console.log("The maximum value is: " + c);
        } else {
            console.log("The maximum value is: " + d);
        }
    }
}