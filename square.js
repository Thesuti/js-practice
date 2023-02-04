function square(number){
    for (let i = 0; i < number; i++) {
        let re = "";
        if(i == 0 || i == number-1){
            for (let j = 0; j < number; j++) {
                re += "%";
            }
        }else{
            re+="%";
            for (let j = 0; j < number-2; j++) {
                re+=" ";
            }
            re+="%";
        }
        console.log(re);
    }
}

square(6);