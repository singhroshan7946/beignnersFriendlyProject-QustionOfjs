//Qs1// prompt the user to enter their fullname.genrate a username for them based on the input start username with @ , followed by their fullname and ending woth the fullname's length.
let fullName = prompt("Enter your full name");
let userName = '@' + fullName + fullName.length;

// Space not allowed !!
if (fullName.includes(' ')) {
    console.log(" space not allowed");
// Capital letter not allowed !!    
}else if (fullName !== fullName.toLowerCase()) {
    console.log(" capital letter not allowed");

}else{
    console.log(userName);
}

