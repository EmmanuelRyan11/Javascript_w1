if (true) {
    console.log("dijalankan jika benar");
} else {
    console.log("dijalankan jika salah");
}

let nilai = 100;
let standard = 60;
let baik = "Lulus";
let gagal = "Tidak Lulus";
let batasatas = 100;
let batasbawah = 0;
let peringatan = "Nilai Salah";

if (nilai <= batasatas && nilai >= batasbawah) {
    if (nilai >= standard) {
    console.log(baik)
    } else {
    console.log(gagal)
    }
} else {
    console.log(peringatan)
}
