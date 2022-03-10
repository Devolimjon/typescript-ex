"use strict";
// ikkita sonni summasi
// let a: number = 5;
// let b 
// this function is a plas a and b so degree of c
function plus(a, b, c) {
    console.log("Javobi :" + ((a + b) ** c));
}
plus(9, 24, 3);
console.log('___________________________________________');
// kaysi son kataligi topadigan function
function max(a, b) {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
}
const num = max(5, 4);
console.log(num);
console.log('______________________________________________');
// jup va toq soni topadigan function
function isOdd(a) {
    if (a % 2 == 1) {
        return true;
    }
    else {
        return false;
    }
}
let odd = isOdd(5);
console.log(odd);
console.log('_____________________________________________');
// bu function ism va familya qaytarsin
function fullName(name, surname) {
    return name + surname;
}
const fullname = fullName('Olimjon ', 'Mahmudov ');
console.log(fullname);
console.log('_____________________________________________');
// satr qabul qiluvchi function
function welcome(a) {
    return "welcome, " + a;
}
const long_name = welcome(fullname);
console.log(long_name);
console.log('_________________________________________________');
