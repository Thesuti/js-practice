import { reverse } from "dns";

let nameList:Array<string> = new Array();
nameList.forEach(x => console.log(x));
nameList.push("William");
console.log(nameList.length < 0);
nameList.push("John");
nameList.push("Amanda");
console.log(nameList.length);
console.log(nameList[2]);

nameList.forEach((x,index) => console.log(index+1+". "+x));

delete nameList[1];

let reversed = nameList.reverse();
reversed.forEach(x => console.log(x));

nameList = [];

console.log(nameList.length);