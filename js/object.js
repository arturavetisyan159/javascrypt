'use strict';
// ОБЪЕКТЫ - тип данных, с помощью которого представляют связанный тип данных.

// const user = {
//     name : 'Vasya', // ключ (property) : значение
//     married: false, 
//     age: 28,
// };

// const rectangle = {width: 10, height: 5};

// console.log(user.name);
// console.log(rectangle.width);

// console.log(user['name']) // vasya
// console.log(rectangle['width']); // 10

// let propertyName = 'name';
// console.log(user[propertyName]); // Vasya
// propertyName = 'married';
// console.log(user[propertyName]); // false

// const user = {
//     name : 'Vasya', 
//     married: false, 
//     age: 28,
// };
// user.married = true;
// то же самое 
// user['married'] = true;

// user.surname = 'Petrov';
// то же самое
// user['surname'] = 'Petrov';

// console.log(user);

// удаление

// const user = {
//     name: 'Vasya',
//     wrongProp: 'bug',
// }
// delete user.wrongProp; // все удаляется корректно
// console.log(user);

// Ссылки

// const company = {};

// поменять обьект можно
// company.name = 'Amazon';
// console.log(company);

// заменить обьект нельзя!
// company = {}; // ошибка. Так писать нельзя!

// Сравнение объектов (объекты равны между собой не тогда, когда у них одинаковая структура, а когда это один и тот же объект)
// const company = {name: 'Amazon'};

// console.log(company === {name: 'Amazon'}); // false

// const copyOfCompany = company;
// console.log(copyOfCompany === company); // true (т.к ссылка на один и тот же объект)

// hasOwnProperty();

// Обдход свойств объекта

// const course = {name: 'Javascript', slug: 'js-vanilla'};
// for (const prop in course){
//     console.log(`course.${prop} = ${course[prop]}`); // for...in выводит свойства не только самого объекта, но и свойства, добавленные в прототип объекта (объекты могут быть связаны друг с другом, и обращение к свойству в одном объектае может приводить к обращению в другом)
// }

// более распространенный способ Object.keys(obj)- позволяет получить массив всех ключей объекта
// const course = {name: 'Javascript', slug: 'js-vanilla'};
// const keys = Object.keys(course); 
// console.log(keys); 

// for (const key of keys){
//     console.log(course[key]);
// }

// если ключи в процессе обхода то можно сразу полуить массив значений обьекта. 
// const course = {name: 'Javascript', slug: 'js-vanilla'};
// const values = Object.values(course); // есть метод Object.values(obj)
// console.log(values); 

// for (const value of values){
//     console.log(value);
// }

// возврат ключей и значений объекта (Object.entries(obj)) // [key, value]
// const course = {name: 'Javascript', slug: 'js-vanilla'};

// const entries = Object.entries(course);
// console.log(entries) // [ [name, Javascript], [slug, js-vanilla] ]

// for (const [key, value] of entries){
//     console.log(`${key} - ключ`);
//     console.log(`${value} - значение`);
// }

// надо реализовать функцию, которая возвращает список ключей объекта, значение которых равно переданному значению.
// const lessonMembers = {
//     syntax: 3,
//     using: 2, 
//     foreach: 10, 
//     operations: 10,
//     destructing: 2,
//     array: 2,
// }

// const findKeys = (obj, value) => {
//     let result = [];
//     const entries = Object.entries(obj);
//     for (const [key, val] of entries){
//         if (val === value){
//             result.push(key);
//         } else {
//             continue
//         }
//     }
//     return result;
// }

// console.log(findKeys(lessonMembers, 3));

// Слияние (merge) - операция над объектами, выполняет объединение. 
// const user = {
//     name : 'Tirion',
//     email: 'support@yandex.ru',
//     age: 44,
// };
// const data = {name:'Tirion2', age: 46,}

// для слияния воспользуемся методом Object.assign
// Object.assign(user, data);
// console.log(user);

// const user = {
//     name : 'Tirion',
//     email: 'support@yandex.ru',
//     age: 44,
// };

// const data = {name:'Tirion2', age: 46,};
// const copyOfUser = Object.assign({}, user, data);
// console.log(copyOfUser);

// поверхностное копирование с помощью спреда
// const copyOfUser = {...user};
// console.log(copyOfUser);

//расширение нового объекта с новыми данными
// const user = {name: 'Vasya', age: 11};
// const user2 = {name: 'Irina', surname: 'Petrova'};
// const mergedObject = {...user, ...user2};

// const newUser = {...user, married: true, age: 28}; // все, что находится справа от spread имеет приоритет при слиянии. Все что слева- имеет низкиий приоритет.
// console.log(newUser);

// console.log(mergedObject);

// const newUser ={...user, married: true, ...user2};
// console.log(newUser);



// Деструктуризация с вложенными объектами
// есть такая структура user.company.name

// перепишем на более понятный код с помощью констант
// const company = user.company;
// тогда вот это user.company.name будет равно вот этому company.name

// const person = {firstName: 'Rasmus', lastName: 'Lerdorf', manager: true,};

// const {firstName, manager} = person;
// console.log(firstName); // 'Rasmus'
// console.log(manager); // 'true'

// const person = {firstName: 'Rasmus', lastName: 'Lerdorf',};
// const {manager = false} = person;
// console.log(manager);// false

// ...rest
const newUser = {name: 'Artur', married: true, age: 28};
const {name, ...rest} = newUser; // { married: true, age: 28 }
console.log(rest);