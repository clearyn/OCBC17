// Input
const input_array = process.argv.slice(2);
const a = parseInt([input_array[0]]);
const b = parseInt([input_array[1]]);

if (a && b) {
    // Output
    console.log(`Nilai pertama anda ${a} dan nilai kedua ${b}`);

    console.log(`\nSum (${a} + ${b}): ${a + b}`);

    if (a > b) {
        console.log(`Difference (${a} - ${b}): ${a - b}`);
    }else if (b > a){
        console.log(`Difference (${b} - ${a}): ${b - a}`);
    }else{
        console.log(`Difference (${a} dan ${b}): bernilai sama`);
    }

    console.log(`Product (${a} * ${b}): ${a * b}`);

    const new_a = (a > b ? a : (b > a) ? b : a);
    const new_b = (new_a == a ? b: a);
    console.log(`Quotinent (${new_a} / ${new_b}): ${new_a / new_b}`);
    console.log(`Remainder (${new_a} % ${new_b}): ${new_a % new_b}`);

    console.log(`Value of ${a} after + 1: ${a + 1}`);
    console.log(`Value of ${b} after - 1: ${b - 1}`);
    
}else{
    console.log(`Nilai a atau b tidak boleh kosong`);
}