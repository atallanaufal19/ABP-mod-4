var nilai = parseInt(prompt("Masukkan nilai ujian Anda:"));
var kehadiran = parseInt(prompt("Masukkan jumlah kehadiran Anda:"));

if (nilai >= 80 && kehadiran >= 75) {
    console.log("Anda lulus dengan predikat A");
} else {
    if (nilai >= 70 && kehadiran >= 60) {
        console.log("Anda lulus dengan predikat B");
    } else {
        if (nilai >= 60 && kehadiran >= 50) {
            console.log("Anda lulus dengan predikat C");
        } else {
            console.log("Anda tidak lulus ujian");
        }
    }
}
