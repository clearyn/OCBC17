//Contoh Array
const students = [
    'Andi',
    'Budi',
    'Cakra',
    'Dhany'
];

const anArray = [
    'Gusti',
    22,
    true
];

//Akses value array
console.log('//Akses value array');
console.log(students);
console.log(anArray[0]);

//Assign value array
console.log('\n//Assign value array');
students[0] = 'Michael';
console.log(students);

//Add Value to array
console.log('\n//Add Value to array');
students.push('Nelson' , 'Cahyadi');
console.log(students);

// Pop
console.log('\n//Pop');
students.pop();
console.log(students);

// Unshift
console.log('\n//Unshift');
students.unshift('Budi');
console.log(students);

// Shift
console.log('\n//Shift');
students.shift();
console.log(students);

// Join
console.log('\n//Join');
const studentString = students.join(' ');
console.log(studentString);

// Split
console.log('\n//Split');
console.log(studentString.split('a'));

// Split to array
console.log('\n//Split eto array');
console.log('Arif'.split(''));

//slice
console.log('\n//Slice');
console.log(process.argv);
console.log(process.argv.slice(2));

//splice
console.log('\n//splice');
console.log(process.argv.splice(1));

//sort
console.log('\n//sort');
const numbers = [1, 42, 11, 44, 75];
numbers.sort((a, b) => {
    return a - b
});
console.log(numbers);