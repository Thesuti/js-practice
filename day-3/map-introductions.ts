let myMap = new Map<number,string>();
console.log(myMap.size >= 0)

myMap.set(97,"a");
myMap.set(98,"b");
myMap.set(99,"c");
myMap.set(65,"A");
myMap.set(66,"B");
myMap.set(67,"C");

console.log(myMap.keys());
console.log(myMap.values());


myMap.set(68,"D");

console.log(myMap.size);

myMap.clear();

console.log(myMap.size);