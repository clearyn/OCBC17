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

//Cara create function
function getValue(obj, key) {
    return obj[key];
};
const getValueToo = function (obj, key) {};
const getValueArrowFunction = () => {};

console.log(getValue(kursi, 'harga'));

//Study Case
var text = 'AB C D E FG H';
var textToArray = text.split('');

function removeSpaces(text) {
    let result = '';
    text.forEach(element => {
        if (element != " ") 
            result = result + element; 
    });
    return result;
}

function reverseText(text) {
    let result = [];
    for(var i = text.length - 1; i >= 0; i--) {
        result.push(text[i]);
    }
    return removeSpaces(result);
}

function updateVowels(text) {
    let result = '';
    let split = (removeSpaces(text)).split('');
    split.forEach(element => {
        let push  = String.fromCharCode(element.charCodeAt(0) + 1);
        result = result + push; 
    });
    return result;
}

console.log(removeSpaces(textToArray));
console.log(reverseText(textToArray));
console.log(updateVowels(textToArray));