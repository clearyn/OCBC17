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