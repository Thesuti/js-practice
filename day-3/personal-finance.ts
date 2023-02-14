let list:Array<number> = new Array(500,1000,1250,175,800,120);


let sum:number = list.reduce((temp,x) => temp+x,0);
let max:number = Math.max(...list);
let min:number = Math.min(...list);

let average:number = sum/list.length;
console.log(sum);
console.log(max);
console.log(min);
console.log(average);