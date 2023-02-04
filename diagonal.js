function diagonal(number){
    for (let i = 0; i < number; i++) {
        let re = "";
        if (i == 0 || i == number-1) {
            for (let j = 0; j < number; j++) {
                re+= "%";
            }
        }else{
            re+= "%";
            for (let j = 0; j < number-2; j++) {
                if (i == j) {
                    re+= "%"
                }else{
                    re+= " ";
                }
                
            }
            re+= "%";
        }
        console.log(re);
    }
    
}


diagonal(6);