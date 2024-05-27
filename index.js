const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

//15 characters long
const LENGTH = 15;

let generatePwBtnEl = document.getElementById("generate-pw-btn");
let pw1El = document.getElementById("pw-1");
let pw2El = document.getElementById("pw-2");

generatePwBtnEl.addEventListener("click", function () {
    pw1El.textContent="";
    pw2El.textContent="";
    for (let cnt=0; cnt < LENGTH; cnt++){
        pw1El.textContent += characters[randomNumber()];
        pw2El.textContent += characters[randomNumber()];
    }
})

function randomNumber(){
    return Math.floor(Math.random()*91);
}
