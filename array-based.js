//Qs2// for a given array with marks of students,[85, 97, 44, 37, 76, 60]. find the avg marks of the their class.
// let marks = [85, 97, 44, 37, 76, 60, 54];
// let sum = 0;      // initialize sum to 0
// for(let el of marks){  //looping of each element in the array
//     sum += el;   // adding each element to sum
// }
// let avg = sum / marks.length;  // calculating average by dividing sum by number of elements
// console.log("Average marks of the class is: ", avg);


// assignment No 3//
//Qs3// for a given array with marks of students,[85, 97, 44, 37, 76, 60]. find the highest marks in the class.

// Qs3//for a given array with prices of 5 items,[250,645,300,900,50]. all items have an 10% discount. find the final prices after discount and print them in an array.
//METHOD 1//
// let originalPrices = [250, 645, 300, 900, 50];
// for(let i = 0; i < originalPrices.length; i++) {
//     let offer = (originalPrices[i] * 10) / 100;  // calculating 10% discount
//     let finalPrice = originalPrices[i] - offer;  // calculating final price after discount
// console.log(finalPrice);

// }

//METHOD 2//
let originalPrices = [250, 645, 300, 900, 50];
for(let el of originalPrices) {
    let offere = el / 10;  // calculating 10% discount
    let finalPricee = el - offere;  // calculating final price after discount
console.log(finalPricee);

}
