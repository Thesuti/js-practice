function findMatchingIndexes(num:number,nums:number[]){
    let array:number[] = [];
for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 10 == num) {
        array.push(nums[i]);
    }
}
console.log(array);
}


findMatchingIndexes(1,[1, 11, 34, 52, 61]);
findMatchingIndexes(7,[1, 11, 34, 52, 61]);

module.exports