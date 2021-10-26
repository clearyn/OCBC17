var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var hello = 'Hello World';
console.log(hello);
//Class
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.items = ['Buku', 'Laptop'];
        this.id = id;
        this.name = name;
    }
    Person.prototype.updateName = function (newName) {
        this.name = newName;
    };
    ;
    Person.prototype.addItem = function (newItem) {
        this.items.push(newItem);
    };
    ;
    return Person;
}());
//Multi
var anyMessage = 12345;
//Multi array
var anyArray = [12345, ' '];
//Multi array object
var anyObjArray = [new Person(1, 'Robert'), 12345];
//function | ?opsional
function greetParticipant(name, age) {
    console.log("Hello " + name + ", your age " + age);
}
;
greetParticipant('Ryan', 24);
//Array multi
var students = [
    ['Gusti', true],
    ['Gusti', true]
];
// Object
//Cara 1 declare type langsung
var studentObject = {
    name: 'budi',
    age: 71,
    score: 100
};
;
var newStudent = {
    name: 'budi',
    age: 71,
    score: 100
};
//Class - Implements
var NeoStudent = /** @class */ (function () {
    function NeoStudent(id, mentors) {
        this.mentors = [];
        this.name = "budi";
        this.age = 0;
        this.score = 0;
        this.id = id;
        this.mentors = mentors;
    }
    return NeoStudent;
}());
//Anotasi tipe dalam class
var Customer = /** @class */ (function () {
    function Customer(nama, age, money) {
        this.items = ['buku', 'laptop'];
        this.nama = nama;
        this.age = age;
        this.money = money;
    }
    Customer.prototype.updateDataMoney = function (newMoney) {
        this.money = newMoney;
    };
    Customer.prototype.addItem = function (itemName) {
        this.items.push(itemName);
    };
    return Customer;
}());
var raihan = new Customer('Raihan', 12, 5000);
raihan.updateDataMoney(100000);
raihan.addItem('smartphone');
console.log(raihan);
//Anotasi tipe  dalam class
var Shop = /** @class */ (function () {
    function Shop() {
        this.customers = [];
    }
    Shop.prototype.addCustomer = function (newCustomer) {
        this.customers.push(newCustomer);
    };
    return Shop;
}());
var shopE = new Shop();
shopE.addCustomer(raihan);
console.log(shopE);
//Data Modifier
var Employee = /** @class */ (function () {
    function Employee(name, code) {
        this.name = name;
        this.name = name;
        this.code = code;
    }
    Employee.prototype.setCode = function (code) {
        this.code = code;
    };
    Employee.prototype.getCode = function () {
        return this.code;
    };
    return Employee;
}());
var SalesEmployee = /** @class */ (function (_super) {
    __extends(SalesEmployee, _super);
    function SalesEmployee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SalesEmployee.prototype.getSalesCode = function () {
        return 'sales ' + this.name + this.getCode();
    };
    return SalesEmployee;
}(Employee));
var emp = new Employee('Mawar', '012');
emp.setCode('123');
console.log("Employee name: " + emp.name + " and code: " + emp.getCode());
