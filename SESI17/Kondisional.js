//Contoh Conditional
console.log("//Contoh Conditional")
var nilai = 85
if(nilai >= 85){
    console.log(`Nilai Anda ${nilai}: Kategori A+`)
}else if (nilai >= 80){
    console.log(`Nilai Anda ${nilai}: Kategori A-`)
}else if (nilai >= 75 ){
    console.log(`Nilai Anda ${nilai}: Kategori B+`)
}else if (nilai >= 70 ){
    console.log(`Nilai Anda ${nilai}: Kategori B`)
}else if (nilai >= 65 ){
    console.log(`Nilai Anda ${nilai}: Kategori B-`)
}else{
    console.log(`Nilai kurang dari batas`)
}


//Contoh Operasi Logika
console.log("//Contoh Operasi Logika")
var nilai2 = 81
var pengajar = 'guru'
if(nilai2 >= 85){
    console.log(`Nilai Anda ${nilai2}: Kategori A+`)
}else if (nilai2 >= 80 && pengajar == 'guru'){
    console.log(`Nilai Anda ${nilai2}: Kategori A-`)
}else if (nilai2 >= 75 ){
    console.log(`Nilai Anda ${nilai2}: Kategori B+`)
}else if (nilai2 >= 70 ){
    console.log(`Nilai Anda ${nilai2}: Kategori B`)
}else if (nilai2 >= 65 ){
    console.log(`Nilai Anda ${nilai2}: Kategori B-`)
}else{
    console.log(`Nilai kurang dari batas`)
}