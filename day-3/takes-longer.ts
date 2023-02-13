"use strict";

export function takesLonger() {
    let quote:string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;
    
    quote = quote.replace("Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.","Hofstadter's Law: It always takes longer than you expect, even when you take into account Hofstadter's Law.");
    console.log(quote);
}


takesLonger();