// Qs1 // create a color changer webiste via using of HTML,CSS,JS. 

const btn = document.getElementById("btn"); // here i am connect button via btn to js
        const randomColor= () => {
            let val = "0123456789ABCDEF";
            let randomHasCode = "#";
            for ( let i = 0; i < 6; i++) { // use of condintion hascode must be 6 code that's why i < 6 or index = 5
               randomHasCode = randomHasCode + val[Math.floor(Math.random()* 16)];  // this is logic syantax for run js
            }
            return randomHasCode;  // it also a logic to use "# for" every color change.
        };
        console.log(randomColor());

    function changeRandomColor(){
        document.body.style.backgroundColor = randomColor();// i am giving to randomcolor style in js i am not giving bgc in style file 
    }
    btn.addEventListener("click",changeRandomColor); // you can use " dbclick" as of "click" 






// first order function / high order function 

// const me = (anyAboutMe) => {
//     return anyAboutMe.repeat(10);

// }
// console.log(me, "my friends love me a lots");


// const powerTwo = (n) => {
//     return n ** 3 ;

// }

// function powercube(powerTwo ,n) {
//     return powerTwo(n) * n;
// }
// console.log(powercube(powerTwo, 4));


// function myLine() {
//     return () => {
//         console.log(" sorry, bro but you are gay");
//     }

// }
// let guessWhatIsWriten = myLine()
// console.log(guessWhatIsWriten);

// guessWhatIsWriten();




// .map is array method, map goes individualy on every elements given in a array.
// .from is arguments that's convert arroy to objects.

// let nums = [2,4,6,7,8]
// let sumTotalOfNums = nums.map((n) => {
//     return n + 10;
// });
// console.log(sumTotalOfNums)



