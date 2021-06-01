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
const animals = ['cats', 'dogs', 'birds'];
delete animals[1]; // удалление элемента  с индексом 1. при таком удалении размер массива не меняется
console.log(animals); //  ['cats', 'empty item', 'birds']; и длина будет равна 3 все равно