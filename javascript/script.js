// ------------------ BASICS ------------------

console.log("Hello World");

// var, let, const
var a;
a = 10;
var a;   // allowed with var
a = 20;

let b = 10;   // block scope
b = 20;       // reassign allowed

const c = 30; // cannot reassign

console.log(a);
console.log(b);
console.log(c);

// ------------------ DATA TYPES ------------------

var num = 10;
var str = "thanu";
var bool = true;
var un;
var nu = null;
var big = 123456789079n;
var symbol = Symbol("li");

console.log(typeof num);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof un);
console.log(typeof nu);   // object (JS bug)
console.log(typeof big);
console.log(typeof symbol);

// Array
var arr = [1,2,3,4,5];
console.log(arr);
console.log(typeof arr); // object
console.log(Array.isArray(arr)); // true

// Object
var Obj = {
    name: "revanth",
    dept: "ds"
};
console.log(Obj);
console.log(typeof Obj);

// ------------------ ARITHMETIC OPERATORS ------------------

var x = 10;
var y = "2";

console.log(x + y);
console.log(x - y);
console.log(x % y);
console.log(x * y);
console.log(x ** y);

// ------------------ RELATIONAL OPERATORS ------------------

var r1 = 10;
var r2 = 10;

console.log(r1 == r2);
console.log(r1 === r2);
console.log(r1 != r2);
console.log(r1 !== r2);
console.log(r1 > r2);
console.log(r1 < r2);
console.log(r1 <= r2);
console.log(r1 >= r2);

// ------------------ LOGICAL OPERATORS ------------------

var l1 = true;
var l2 = true;

console.log(l1 && l2);
console.log(l1 || l2);
console.log(!l2);

// ------------------ CONDITIONAL STATEMENTS ------------------

var num1 = 10;

if(num1 % 2 === 0){
    console.log("Even");
}
else{
    console.log("Odd");
}

var marks = 80;

if(marks > 90){
    console.log("O+ Grade");
}
else if(marks > 80){
    console.log("A Grade");
}
else if(marks > 70){
    console.log("B Grade");
}
else{
    console.log("Fail");
}

// Ternary
var value = 5;
const result1 = (value % 2 === 0) ? `${value} is even` : `${value} is odd`;
console.log(result1);

// Switch
var day = 6;
switch(day){
    case 1: console.log("Sunday"); break;
    case 2: console.log("Monday"); break;
    case 3: console.log("Tuesday"); break;
    case 4: console.log("Wednesday"); break;
    case 5: console.log("Thursday"); break;
    case 6: console.log("Friday"); break;
    case 7: console.log("Saturday"); break;
    default: console.log("Invalid Day");
}

// ------------------ LOOPS ------------------

for(let i=0; i<=5; i++){
    console.log(i);
}

var number = 1234;
var count = 0;
while(number > 0){
    count++;
    number = Math.floor(number/10);
}
console.log("Digit count:", count);

// ------------------ FUNCTIONS ------------------

// Normal function
function add1(a,b){
    return a+b;
}
console.log(add1(10,20));

// Arrow function
const add2 = (a,b) => a+b;
console.log(add2(5,15));

// Callback function
const add3 = (a,b,callback)=>{
    const sum = a+b;
    callback(sum);
};

const display = (res)=>{
    console.log("Callback Result:", res);
};

add3(10,20,display);

// ------------------ SPREAD OPERATOR ------------------

var arr1 = [1,2,3];
var arr2 = [...arr1,4,5,6];
console.log(arr2);

// ------------------ DESTRUCTURING ------------------

var [m1,m2,m3] = [99,98,97];
console.log(m1,m2,m3);

var {name,age} = {
    name:"usha",
    age:24
};
console.log(name,age);

// ------------------ MAP FILTER REDUCE ------------------

var arr3 = [1,2,3,4,5];

// map
var double = arr3.map(val => val*2);
console.log(double);

// filter
var even = arr3.filter(val => val % 2 === 0);
console.log(even);

// reduce
var total = arr3.reduce((sum,val)=> sum+val,0);
console.log(total);

// chaining
var finalResult = arr3
    .map(val => val**2)
    .filter(val => val % 2 === 0)
    .reduce((sum,val)=> sum+val,0);

console.log("Final Result:", finalResult);