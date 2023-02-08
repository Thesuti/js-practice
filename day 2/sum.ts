function sum(num: number){
    let sum: number = 0;
for (let i = 0; i <= num; i++) {
    sum += i;
}
return sum;
}

console.log(sum(5));

module.exports