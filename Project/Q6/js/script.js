
let name = prompt("Enter student name:");

let s1 = +prompt("Enter English marks:");
let s2 = +prompt("Enter Maths marks:");
let s3 = +prompt("Enter Science marks:");
let s4 = +prompt("Enter Computer marks:");
let s5 = +prompt("Enter Automobile marks:");

let total = s1 + s2 + s3 + s4 + s5;
let percentage = total / 5;
let grade;

if (percentage >= 90) {
    grade = "A";
} else if (percentage >= 80) {
    grade = "B";
} else if (percentage >= 70) {
    grade = "C";
} else if (percentage >= 50) {
    grade = "D";
} else {
    grade = "Fail";
}

console.log("Student Name: " + name);
console.log("Total Marks: " + total + " / 500");
console.log("Percentage: " + percentage + "%");
console.log("Grade: " + grade);