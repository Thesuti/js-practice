const numbers = [2,3,7,9,11,0];


function sumAndAverage(numbers){
    let temp = 0;

    for (let i = 0; i < numbers.length; i++) {
        temp+=numbers[i];
    }
    console.log("Sum: "+temp);
    console.log("Average: "+temp/numbers.length);
}

sumAndAverage(numbers);