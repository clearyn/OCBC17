//Inisialisai Objek
const kursi = {
    warna: "Putih Salju",
    bahan: "Kain",
    merk: "FSD OCBC",
    jumlahKaki: 40,
    kategori: "gaming",
    harga: 750000,
    bebanMaksimal: 200,
    400: "oke",
    "nilai-100": "oke"
};

console.log(kursi);

//cara 1: object.property
console.log(kursi.warna);

//cara 2: object['property]
console.log(kursi['kategori']);
console.log(kursi[400]);
console.log(kursi["nilai-100"]);

//cara 3: via variable
let cariCiri = 'bebanMaksimal';
console.log(kursi[cariCiri]);

//Object array
const kursiArray = [
    ['warna', 'Putih Salju'],
    ['bahan', 'kain']
]

//Menambah property
kursi.distribusi = ['Jakarta', 'Bandung', 'Surabaya'];
console.log(kursi);

//Mengubah property
kursi.bahan = 'titanium';
console.log(kursi);

//Menghapus property
delete kursi.kategori;
console.log(kursi);