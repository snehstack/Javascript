let birthYear = +prompt("Enter your birth year:");

let age = 2026 - birthYear;
let category;

if (age <= 12) {
    category = "Child";
} else if (age <= 19) {
    category = "Teenager";
} else if (age < 60) {
    category = "Adult";
} else {
    category = "Senior Citizen";
}

console.log("Your Age: " + age);
console.log("Category: " + category);