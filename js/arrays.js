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

const changeElements = n => {
    if(n.length == 1 ){
        return n;
    }else{
        const first = n[0];
        const last = n[n.length - 1];
        n[0] = last;
        n[n.length - 1] = first;
        return n;
    }
    
}

console.log(changeElements([1, 2, 3, 4, 5]));