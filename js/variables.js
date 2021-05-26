// можно обьявлять переменные с помощью var.
// let и var по разному влияют на видимость переменной. Советуют использовать let, при обьявлении переменной, а не var.
const let1 = "they call him \"Tommy\" and he likes it "; // \..\ - это экраннирование, шоб не было ошибок.
// если нам в строке нужен обратный слэш , нам нужно его тоже экранировать.
// в строках "/t"- это таб, "/n"- это перенос строки.


// const skip = str => {
//     let i = 0;
//     let result = '';
//     while (i < str.length){
//         result = result + str[i];
//         i = i + 2;
//     }
//     return result;
// };
// console.log(skip('California'));


const name = "Alex";
const a = 5;
const b = 6;
console.log(`his name is ${name} and he is ${a+b} years old`); // вот такие ковычки испрльзуем (обратные), также используем знак $
