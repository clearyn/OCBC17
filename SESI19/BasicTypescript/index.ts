const hello: string = 'Hello World';
console.log(hello);

//Class
class Person {
    id: number;
    name: string | undefined;
    items: string[] = ['Buku', 'Laptop'];

    constructor(id: number, name:string) {
        this.id = id;
        this.name = name;
    }

    updateName(newName: string){
        this.name = newName;
    };

    addItem(newItem: string){
        this.items.push(newItem);
    };
}

//Multi
const anyMessage: string | number = 12345; 

//Multi array
const anyArray: (string | number)[] = [12345, ' '];

//Multi array object
const anyObjArray: (Person | number)[] = [new Person(1, 'Robert'), 12345];

//function | ?opsional
function greetParticipant(name:string, age?: number) {
    console.log(`Hello ${name}, your age ${age}`);
};
greetParticipant('Ryan', 24);

//Array multi
let students: (string | boolean)[][] = [
    ['Gusti', true],
    ['Gusti', true]
];

// Object

//Cara 1 declare type langsung
let studentObject: {
    name: string,
    age: number | string,
    score: number
} = {
    name: 'budi',
    age: 71,
    score: 100
};

//Cara 2 declare type lewat interface
interface StudentObject {
    name: string,
    age: number | string,
    score: number,
    address?: string
};

let newStudent: StudentObject = {
    name: 'budi',
    age: 71,
    score: 100
};

//Class - Implements
class NeoStudent implements StudentObject{
    private id: number | undefined;
    private mentors: string[] = [];

    public name: string = "budi";
    public age: number = 0;
    public score: number = 0;

    constructor(id: number, mentors:string[]) {
        this.id = id;
        this.mentors = mentors;
    }
}

//Anotasi tipe dalam class
class Customer {
    nama: string;
    age: number;
    money: number;
    items: string[] = ['buku', 'laptop'];

    constructor(nama: string, age:number, money:number) {
        this.nama = nama;
        this.age = age;
        this.money = money;
    }

    updateDataMoney(newMoney: number){
        this.money = newMoney;
    }

    addItem(itemName: any){
        this.items.push(itemName);
    }
}

const raihan = new Customer('Raihan', 12, 5000);
raihan.updateDataMoney(100000);
raihan.addItem('smartphone');
console.log(raihan);


//Anotasi tipe  dalam class
class Shop {
    customers: Customer[] = [];

    addCustomer(newCustomer: Customer) {
        this.customers.push(newCustomer);
    }
}

const shopE = new Shop();
shopE.addCustomer(raihan);
console.log(shopE);


//Data Modifier
class Employee {
    private code: string;
    protected gender;

    constructor(public name: string, code: string, gender: boolean) {
        this.name = name;
        this.code = code;
        this.gender = gender;
    }

    setCode(code: string){
        this.code = code;
    }

    getCode(){
        return this.code;
    }
}

class SalesEmployee extends Employee {
    getSalesCode(){
        return 'sales '+ this.name + this.getCode();
    }
}

let emp = new Employee('Mawar','012', true);
emp.setCode('123');
console.log(`Employee name: ${emp.name} and code: ${emp.getCode()}`);