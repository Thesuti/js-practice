const numbers = [3,4,5,6,7];

let sum = 0;
sum = numbers.reduce((ac,cu) => ac+cu,sum);

console.log(sum);