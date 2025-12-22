//Qs1 // create a function using 'function' keyword that takes a string as an argument and returns the number of vowels in that string.
// method 1

// function countvowels(str) {
//     const vowels = 'aeiouAEIOU';
//     let count = 0;
//     for (let char of str) {
//         if (vowels.includes(char)) {
//             count++;
//         }
//     }
//     return count;
// }
// method 2

// function countvowels(str) {
//   let count = 0;
//   for (let el of str) {
//     if (
//       el === "a" ||
//       el === "e" ||
//       el === "i" ||
//       el === "o" ||
//       el === "u" ||
//       el === "A" ||
//       el === "E" ||
//       el === "I" ||
//       el === "O" ||
//       el === "U"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// }


let countvowels = (str) => {
let vowels = 'aeiouAEIOU';
 let count = 0;
 for (let el of str ){
    if (vowels.includes(el)) {
        count++;
    }
    }
    return count;
}

console.log(countvowels("in function we need to write after the block of code is colon"));
