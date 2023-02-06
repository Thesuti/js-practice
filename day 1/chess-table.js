function drawChessTable(num){
for (let i = 0; i < num; i++) {
    let re = "";
    if (i%2==0) {
        for (let j = 0; j < 4; j++) {
            re+= "% ";
        }
    }
    else{
        for (let j = 0; j < 4; j++) {
            re+= " %";
        }
    }
    console.log(re);
}
}

drawChessTable(8);