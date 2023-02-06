function triangle(number){
    for (let i = 0; i <= number; i++) {
        let triangle = "";
        for (let j = 0; j < i; j++) {
            triangle+="*"
        }
        console.log(triangle);
    }
}

triangle(4);
