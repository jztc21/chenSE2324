// FileName: BranchDemo.js
//Author: James Chen
//Objective: Demonstrate how to use GitHub branches

const months = ["January", "February", "March", "April", 
"May", "June", "July", "August",
 "September", "November", "December"]
const d = new Date()
let day = d.getDay()
let year = d.getFullYear()
let currentDate = "The current date is "+month+" "+day+", "+year
//getMonth() returns the month as an integer (0-11)
let month = months[d.getMonth()]

console.log(d)
console.log(currentDate)