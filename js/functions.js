'use strict';
// function declaration (никуда ничего не присваивается. если нет return, то выведет undefined)
// функ-ия, обьявленная таким способом будет видна во всех частях файла.
// function inc(a){
//     return a+1;
// }

// function expression - значение функционального типа присвоили в идентификатор sum.
// const sum = function (a,b) {
//     return a + b;
// }

// lambda expression (функция стрелка)
// const max = (a,b) => (a > b ? a: b);

// lambda function 
// const avg = (a, b) => {
//     const s = sum(a, b);
//     return s / 2;
// }

// console.log('inc(5) = ' + inc(5));
// console.log('sum(1,3) = ' + sum(1,3));
// console.log('max(8,6) = ' + max(8, 6));
// console.log('avg(8,6) = ' + avg(8, 6));

// область видимости. Контексты
// const cities =['Athens', 'Roma', 'London', 'Beijing', 'Kiev', 'Riga'];
// const f = s => s.length; // lambda expression

// //function declaration
// function f1(){
//     const cities = ['Athens', 'Roma'];
//     const f = s => s.toUpperCase();
//     console.dir({ cities });
//     console.dir(cities.map(f)); // метод массива. На выходе получаем массив этих же городов в верхнем регистре.

//     {
//         const f = s => s.toLowerCase(); // переопределение функции f. выводим базовый массив, но мелкими буквами
//         console.dir({ cities });
//         console.dir(cities.map(f));
//     }

//     {
//         const cities = ['London', 'Beijing', 'Kiev'];
//         console.dir({ cities });
//         console.dir(cities.map(f));
//     }
// }
// f1();
// console.dir({cities});
// console.dir(cities.map(f));

// this - происходит тогда, когда функция привязана к какому-то объекту и мы хотим обратиться к полям этого объекта их функции.

const context = function(){
    this.name = 'markus';

    const city = {
        name: 'Kiev',
        year: 482,
        f1: function (){
            return this.name;
        },
        f2: () => {
            return this.name
        },
        f3() {
            return this.name
        }
    };
    return city;
};

const city = new context();

console.log(city.f1());
console.log(city.f2());
console.log(city.f3());