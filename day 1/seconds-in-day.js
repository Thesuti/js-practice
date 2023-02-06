"use strict"

const currentHours = 14;
const currentMin = 34;
const currentSeconds = 42;

let time = 24*60*60;
let currentTime = currentHours*60*60+currentMin*60+currentSeconds;
console.log(time-currentTime);