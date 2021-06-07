'use strict';
// МАССИВЫ
// const items = [];
// const animals = ['cats', 'dogs', 'birds'];
// console.log(animals[0]); // cats

// последний элемент массива = (length - 1)

// изменение элементов в массиве
// const name = 'Amazon';
// name.toUppercase(); // AMAZON
// console.log(name); // Amazon
// в строках такая тема не работает, а в массивах РАБОТАЕТ

// const animals = ['cats', 'dogs', 'birds'];
// animals[0] = 'horses';
// console.log(animals); // вместо cats будет horses
// здесь меняется константа вот это вызывает вопрос
// константы при работе с массиво хранят ссылку на данные а не сами данные, это и позвод=ляет изменить в массиве любой элемент


// animals.push('horses'); // добавляетт В КОНЕЦ элемент 'horses'
// const animals = ['cats', 'dogs', 'birds'];

// const animals = ['cats', 'dogs', 'birds'];
// animals.unshift('horses'); // Добавляет В НАЧАЛО элемент 'horses'

// УДАЛЕНИЕ
// const animals = ['cats', 'dogs', 'birds'];
// delete animals[1]; // удалление элемента  с индексом 1. при таком удалении размер массива не меняется
// console.log(animals); //  ['cats', 'empty item', 'birds']; и длина будет равна 3 все равно


// цикл for при работе с массивом
// перебираем все элемнты 
// const names = ['vasya', 'vanya', 'petya'];
// for(let i = 0; i < names.length; i++){
//     console.log(names[i]);
// }

// изменение
// const emails = ['VASYA@gmAil.com', 'IGOR@gmail.com', 'netiD@hOt.CoM'];
// console.log(emails);
// let res = [];
// for(let i = 0; i < emails.length; i +=1){
//     const email = emails[i];
//     const normalized = email.toLowerCase();
//     res.push(normalized);
// }
// console.log(res);

// Ссылки. let и const в js хранят два типа данных: примитивные и ссылочные
// 1) числа, строки, булеан и тд
// 2) объекты

// const items = [1,2];
// const items2 = items;
// items.push(3);

// items2 === items // true (потому что ссылка на один и тот же объект)

// console.log(items);
// console.log(items2);

// ЗАДАЧА. функция которая меняет местами 1 и последний эл массива. Если массив содержит <2 элементов, то возвращается как есть!

// const changeElements = n => {
//     if(n.length == 1 ){
//         return n;
//     }else{
//         const first = n[0];
//         const last = n[n.length - 1];
//         n[0] = last;
//         n[n.length - 1] = first;
//         return n;
//     }
    
// }

// console.log(changeElements([1, 2, 3, 4, 5]));

// const items = [2, 8, 1];
// items.sort();
// console.log(items);
// items.reverse();
// console.log(items);

// const array1 = [1, 2];
// const array2 = [3, 4];
// const array3 = array1.concat(array2); // [1, 2, 3, 4]


// ЗАДАЧА. Функция, которая принимает массив и строковый префикс и возвращает новый массив, в котором каждому элементу исходного массива добавляется префикс. функция предназначена для работы со строковыми элементами. для префикса автоматически добавляется пробел.
// const names = ['John', 'Misha', 'Kolya'];

// const addPrefix = (arr, prefix) => {
//     let newArray = [];
//     for(let i = 0; i < arr.length; i++){
//         newArray.push(`${prefix} ${arr[i]}`)
//     }
//     return newArray;
// }

// console.log(addPrefix(names, 'Mr'));

// ЗАДАЧА. Функция высчитывает сумму всех элементов массива, которые делятся без остатка на 3.
// const numbers = [1, 2, 4, 3, 5, 6, 9, 12];

// const isDivThree = arr => {
//     let sum = 0;
//     if(arr.length == 0){
//         return 0;
//     }else {
//         for(let i = 0; i < arr.length; i++){
//             if(arr[i] % 3 === 0){
//                 sum += arr[i];
//             }
//         }
//     }
//     return sum;    
// }
// console.log(isDivThree(numbers));


// for ... of
// const names = ['John', 'Misha', 'Kolya'];
// // name на каждой итерации свой собственный(локальный), поэтому используется const
// for(const name of names){
//     console.log(name);
// }

// можем строку посимвольно разобрать.
// const greeting = 'Hello';

// for(const symbol of greeting){
//     console.log(symbol);
// }

// УДАЛЕНИЕ ЭЛЕМЕНТА МАССИВА. delete - нежелательная операция. 
// Есть метод  .splice()
// Можно описать функцию удаления элемнта из массива
// const data = [0, 1, false, true, null, 'wow'];
// const compact = coll => {
//     const result = [];
//     for(const item of coll){
//         if(item != null){
//             result.push(item);
//         }
//     }
//     return result;
// }
// const newArray = compact(data);
// console.log(newArray);

// операторы break и continue.

// ГЕНЕРАЦИЯ СТРОК В ЦИКЛЕ (не оч удобно)
// const coll = ['milk', 'butter'];

// const buildHTMLList = coll => {
//     let result = '<ul>';
//     for (const item of coll){
//         result = `${result}<li>${item}</li>`;
//         result = `${result}</ul>`
//     }
//     return result;
// }
// console.log(buildHTMLList(coll));

// ГЕНЕРАЦИЯ СТРОК МЕТОДОМ .JOIN() - этот метод объединяет элементы массива в строку

// const coll = ['milk', 'butter'];

// const buildHTMLList = coll => {
//     const parts = [];
//     for(const item of coll){
//         parts.push(`<li>${item}</li>`)
//     }
//     const innerValue = parts.join('');
//     const result = `<ul>${innerValue}</ul>`;
//     return result; 
// }
// console.log(buildHTMLList(coll));

// const parts = ['JS', 'Python', 'Parts'];
// const output = parts.join(', '); // JS, Python, Parts
// console.log(output);

