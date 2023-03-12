function tambah() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var hasil = parseFloat(num1) + parseFloat(num2);
    document.getElementById("hasil").innerHTML = "Hasil: " + hasil;
} 
function kurang() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var hasil = parseFloat(num1) - parseFloat(num2);
    document.getElementById("hasil").innerHTML = "Hasil: " + hasil;
} 
function kali() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var hasil = parseFloat(num1) * parseFloat(num2);
    document.getElementById("hasil").innerHTML = "Hasil: " + hasil;
} 
function bagi() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var hasil = parseFloat(num1) / parseFloat(num2);
    document.getElementById("hasil").innerHTML = "Hasil: " + hasil;
}