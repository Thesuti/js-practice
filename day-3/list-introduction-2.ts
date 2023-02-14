let listA:Array<string> = new Array("Apple","Avocado","BlueBerries","Durian","Lychee");

let listB:Array<String> = listA;



console.log(listA.includes("Durian"));

listB = listB.filter(x => x !== "Durian");



listA.splice(4,0,"Kiwi");



console.log(listA.indexOf("Avocado"));
console.log(listB.indexOf("Durian"));
listB.push("Passion Fruit","Pomelo");
console.log(listA.slice(2,3));
console.log(listA);
console.log(listB);

