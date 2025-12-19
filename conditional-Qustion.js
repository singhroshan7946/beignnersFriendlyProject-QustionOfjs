//Qs1 //get user to input a number using prompt("Enter a numbers"). check if the number is a multiple of 5 or not.

// const num = prompt("Enter a numbers")
// if(num%5 === 0){
//     console.log(num, "is a multiple of 5")
// }
// else{
//     console.log(num, "is not a multiple of 5")
// }
// solve this assignment first before moving to next
//Qs2 //get user to input a number using prompt("Enter a numbers"). check if the number is even or odd.






//Qs3 // write a code which can give grade to students according to their marks.
//90-100 A
//70-89 B
//60-69 C
//50-59 D
//0-49 FAIL

const marks = prompt("Enter your marks");
if(marks >= 90 && marks <= 100){
    console.log("grade:A");
}else if (marks>= 70 && marks <= 89){
    console.log("grade:B");
}else if (marks >= 60 && marks <= 69){
    console.log("grade:C");
}else if (marks >= 50 && marks <= 59){
    console.log("grade:D");
}else{
    console.log("FAIL");
}