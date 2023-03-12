

function tambah() {
    return a + b;
}
  
function kurang() {
    return a - b;
}
  
function kali() {
    return a * b;
}
  
function bagi() {
    return a / b;
}

var a = parseInt(prompt("nilai a :"));
var b = parseInt(prompt("nilai b :"));
var operation = prompt("pilih(+, -, *, /) : ");
if (operation == "+"){
    console.log("hasil "+ a +" + " + b + " : "+tambah());
}else if (operation == "-"){
    console.log("hasil "+ a +" - " + b + " : "+kurang());
}else if (operation == "*"){
    console.log("hasil "+ a +" * " + b + " : "+kali());    
}else if (operation == "/"){
    console.log("hasil "+ a +" / " + b + " : "+bagi());    
}