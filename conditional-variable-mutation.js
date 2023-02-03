const a = 24;
let outputOne = 0;
if(a%2 === 0){
    outputOne++;
}
console.log(outputOne);

const b = 13;

let outputTwo = "";

if (b > 10 && b < 20) {
    outputTwo = "Sweet!";
}
else if(b < 10){
    outputTwo = "Less!";
}else{
    outputTwo = "More!";
}

console.log(outputTwo);

let c = 123;
const credits = 100;
const isBonus = false;
if (credits >= 50 && isBonus === false) {
    c-=2;
}else if(credits < 50 && isBonus === false){
    c--;
}

console.log(c);

const d = 8;
const time = 120;
let outputThree = "";

if(d%4 == 0 && time<200){
outputThree = "check";
}else if(time > 200){
outputThree = "Time out";
}else{
    outputThree = "Run Forest Run!"
}

console.log(outputThree);