function calculateFactorial(num:number){
let fac:number = 1;
for (let i = 1; i <= num; i++) {
    fac *=i;
}
return fac;
}

console.log(calculateFactorial(5));

module.exports