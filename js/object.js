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