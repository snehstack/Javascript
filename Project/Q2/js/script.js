let baseSalary = +prompt("Enter base salary:");
const HRA = 10;
const DA = 5;
const TA = 8;

let grossSalary = baseSalary + (baseSalary * HRA / 100 ) +  (baseSalary * DA / 100 ) + (baseSalary * TA / 100 );

console.log("Gross Salary: Rs.", grossSalary);