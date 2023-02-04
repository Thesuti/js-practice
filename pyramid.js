function triangle(number){
for (let i = 0; i <= number; i++) {
        let re = "";
        for (let j = number; j > i; j--) {
            re+=" ";
        }
        for (let j = 0; j < i; j++) {
            re+="*";
        }
        
        console.log(re);
    }
}

triangle(4);