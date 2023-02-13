function findUniqeItems(nums:number[]){
let array: number[] = [];
for (let i = 0; i < nums.length; i++) {
    let count: number = 0;
    for (let j = 0; j < array.length; j++) {
        if (nums[i] == array[j]) {
            count++;
        }
        
    }
    if (count == 0) {
        array.push(nums[i]);
    }
}
return array;
}

console.log(findUniqeItems([1, 11, 34, 11, 52, 61, 1, 34]));

module.exports