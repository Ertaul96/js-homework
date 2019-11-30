//На садовом участке площадью 10 соток, разбили грядки
//15 на 25 метров. Сколько м2 осталось незанято?

let mainArea = 10,
    width = 15,
    leigth = 25;
let garden = width * leigth;
let res = (mainArea * 100) % garden;

console.log('Осталось свободно - ' + res + ' м2');


//Найдите площадь овального кольца, полученного из овала
//площадью 15 дм2 вырезанием овала площадью 600 см2.

let mainArea = 15,
    childArea = 600;
let res = (mainArea * 100) - childArea;
console.log('Площадь овального кольца - ' + res + ' см2')

//выбрать наименьшее число

let a = 3;
let b = 15;
let c = 2;

console.log(Math.min(a,b,c));

//Вывести в консоль ближайшее к 10 из двух чисел, записанных в переменные m и n.
//Например, среди чисел 8.5 и 11.45 ближайшее к десяти 11.45.

let m = 14.1,
    n = 5.9;
let minA = Math.abs(10 - m),
    minB = Math.abs(10 - n)
if (minA > minB) {
    console.log('Ближайшее к 10 - ' + n);
} else if (minB > minA) {
    console.log('Ближайшее к 10 - ' + m);
} else {
    console.log('Оба числа равноудалены от 10');
}   
