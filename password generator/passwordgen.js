const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a",
"b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5",
 "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password = "";

 let randomBtn = document.getElementById("random-btn");
let passEl = document.getElementById("pass-el");
let scpassEl = document.getElementById("scpass-el");

function generateRandomNumber(){
    return Math.floor(Math.random()*characters.length)
}

randomBtn.addEventListener("click",function(){
    for (let i = 0; i < 15; i++) {
        password += characters[generateRandomNumber()]
        console.log(password);
    }
    passEl.textContent = password;
    password = "";
    for (let i = 0; i <= 15; i++) {
        password += characters[generateRandomNumber()]
        console.log(password);
    }
    scpassEl.textContent = password;
    password = "";
}) 


