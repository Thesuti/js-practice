function diamond(number){
    for (let i = 0; i <= number; i++) {
            let re = "";
            for (let j = i; j < number; j++) {
                re+=" ";
            }
            for (let j = 1; j < i*2; j++) {
                re+="*";
            }
            
            console.log(re);
        }
    for (let i = number-1; i > 0; i--) {
        let re = "";
            for (let j = i; j < number; j++) {
                re+=" ";
            }
            for (let j = 1; j < i*2; j++) {
                re+="*";
            }
            console.log(re);
    }

        
    }
    
    diamond(5);