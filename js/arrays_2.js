'use strict';
// МАССИВЫ 2 неделя
// Сортировка массивов
// const numbers = [8, 3, 10];

// numbers.sort((a, b) => a - b);
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);

// структура данных(это конкретный способ хранения и организации данных)

// списки
// хеш-таблицы
// деревья
// графы
// стек- упорядоченная коллекция элементов, в котором удаление старых и добавление новых элементов происходит с одного конца коллекции.
// очередь

// работа со стеком включает в себя следующие опреации:
// 1) добавить в стек (push);
// 2) взять из стека (pop);
// 3) вернуть элемент с вершины стека без удаления (peekBack);
// 4) проверить пустоту (isEmpty);
// 5) вернуть размер (size);

// const stack = [];

// stack.push(3);
// console.log(stack);

// stack.push('Hello');
// console.log(stack);

// stack.push(true);
// console.log(stack);

// const element1 = stack.pop(); // убираем верхний элемент из стека и записываем его в element1 
// console.log(element1);

// const element2 = stack.pop(); // убираем верхний элемент из стека и записываем его в element2 
// console.log(element2);

// console.log(stack);

// деструктуризация 
// const points = [3, 5];
// console.log(`${points[0]}:${points[1]}`);

// const x = points[0];
// const y = points[1];
// console.log(`${x}:${y}`);

// const [x,y] = points; // [x, y] = [3, 5]
// console.log(`${x}:${y}`);

// const points = [3, 5];
// const [x] = points; // 3
// console.log(x);

// const [, y]= points;
// console.log(y); // 5

// const [first, second, third] = 'two';
// console.log(first); // t
// console.log(second); // w
// console.log(third); // o

// const points = [
//     [4,3],
//     [0,-3]
// ];
// for (const [x, y] of points){
//     console.log([x, y]) // [4, 3] [0, -3]
// }

// rest-оператор 

// const fruits = ['apple', 'pineapple', 'banana', 'orange'];
// const [first, ...rest] = fruits; // сворачивает часть элементов и помещает их в массив с именем rest(или с именем какое вы захотите). rest-опреатор срабатывает в конце.
// console.log(first);
// console.log(rest);

// когда интересна только часть массива, и не важны первые элементы, используем метод slice()

// const fruits = ['apple', 'pineapple', 'banana', 'orange'];
// const rest = fruits.slice(1); // ['pineapple', 'banana', 'orange']
// console.log(rest);
// console.log(fruits);

// rest-оператор при деструктуризации строк
// const [first, second, ...rest] = 'some string'; // оператор слева от знака =, где происходит деструктуризация
// console.log(first); // 's'
// console.log(second); // 'o'
// console.log(rest); // после применения rest мы записали в rest массив строк

// spread- оператор. Он не сворачивает элементы, а растягивает их (с его помошью копируют или сливают массивы) (может появляться в любой части массива)
// const russianCities = ['moscow', 'kazan'];
// const cities = ['milan', 'rome', ...russianCities]; // опреатор справа от знака =, где массив формируется

// console.log(russianCities);
// console.log(cities);

// const cities = ['milan', 'paris'].concat(russianCities);
// console.log(cities);

// const russianCities = ['moscow', 'kazan'];
// const ukranianCities = ['kiev', 'odessa'];
// const cities = [...russianCities, ...ukranianCities];
// console.log(cities); // ['moscow', 'kazan', 'kiev', 'odessa']

// const russianCities = ['moscow', 'kazan'];
// const copy = [...russianCities];
// copy.push('samara'); // ['moscow', 'kazan', 'samara']

// то же самое без spread оператора методом slice
// const russianCities = ['moscow', 'kazan'];
// const copy = russianCities.slice();
// copy.push('samara');
// console.log(copy);

