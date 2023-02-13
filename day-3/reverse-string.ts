"use strict";

// Create a function "reverseString" which takes a string input and returns it's reverse
// Use it on the reversed string below to check it!

// add your code here
function reverseString(){
    let toBeReversed:string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;
    let reversed:string = "";
    for (let i = toBeReversed.length; i > 0; i--) {
        reversed += toBeReversed.charAt(i);
    }
    console.log(reversed);
}
reverseString();



export { reverseString };