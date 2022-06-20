const passValue = document.querySelector(".pass-value");
const generateBtn = document.querySelector(".generate-btn");
const copyClipboard = document.querySelector(".button");
const copyTxt = document.querySelector(".copy-text");
const showMessage = document.querySelector(".show-message");
const lengthValue = document.querySelector(".lengthvalue");

passValue.addEventListener("click" , ()=>{
    showMessage.style.display = "block";
})

const createPass = ()=>{
    const length = +lengthValue.value;
    console.log(length);
    const upperWords = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","K","R","S","T","U","V","W","X","Y","Z"];
    const lowerWords = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const symbol = ["!","@","$","&","_"]
    const numbers = [0,1,2,3,4,5,6,7,8,9];
    let x = Math.floor((Math.random() * upperWords.length));
    let y = Math.floor((Math.random() * lowerWords.length));
    let z = Math.floor((Math.random() * numbers.length));
    let m = Math.floor((Math.random() * symbol.length));
    const resultPass = upperWords[x] + lowerWords[y] + numbers[z] +  symbol[m];
    passValue.value = resultPass;
}

generateBtn.addEventListener("click" , ()=>{
    createPass();
    generateBtn.innerHTML = "Generated !";
    setTimeout(() => { generateBtn.innerHTML = "Generate Password"; }, 3000);
})

copyClipboard.addEventListener("click" , ()=>{
    navigator.clipboard.writeText(passValue.value).then(() => {
    });
    copyTxt.innerHTML = "Copied !";
    setTimeout(() => { copyTxt.innerHTML = "Copy to Clipboard"; }, 3000);
})

showMessage.addEventListener("click" , ()=>{
    showMessage.style.display = "none";
})