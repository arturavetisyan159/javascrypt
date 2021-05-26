// console.log("hello");

//const pi = 3.14; // создаю константу pi (const- ключевое слово)
//R = 3390;
//const S = 4 * pi * R * R;

//console.log(S)

//const weight = 65;
//const c = 300000000;
//const E = weight * c * c;
//есть константы, а есть также переменные- "let", которые в отличие от констант можно изменять. 
//console.log(E);
// есть такое понятие как арность- это количество аргуметов, например + - * это бинарные операторы, так как им нужно 2 операнда, следовательно их арность = 2.

//const pi = 3.14;
//const surfaceOfMars = 4 * pi * 3390 * 3390;
//const surfaceOfMercury = 4 * pi * 2440 * 2440;

//const surfaceOfMercury = surfaceAreaCalculator(2440);

//const surfaceAreaCalculator = (radius) => {
    //return 4 * pi * radius * radius;
//};
//const surfaceOfMars = surfaceAreaCalculator(3390);
//const surfaceOfMercury = surfaceAreaCalculator(2440);
//console.log(surfaceOfMars);
//console.log(surfaceOfMercury);

// const percentageCalculator = (number, total) => {
//     return number * 100 / total
// };

// console.log(percentageCalculator(40, 80))

// const squareOfSum = (x, y) => (x + y) ** 2;
// const firstNum = 2;
// const secondNum = 3; 
// console.log(squareOfSum(firstNum, secondNum));

// формальные и фактические параметры функций
// формальные - имена переменных в определении функции (a, b).
// фактические - это те, которые были переданы в функцию в момент вызова (5, 3).


//есть рекурсивный процесс, а есть итеративный процесс:
// const factorial = (n) => {
//     if (n == 0){
//         return 1;
//     }
//     const iter = (counter, acc) =>{
//         if (counter == 1){
//             return acc; // в этот момент acc = конечному ответу
//         }
//         return iter(counter - 1, counter * acc);
//     };
//     return iter(n, 1);
// }
// console.log(factorial(3))
// counter отслеживает движение от n до 1, acc - текущий результат умножения
// // задача: описать функцию, используя итеративный процесс. Она должна находить наименьший делитель заданного числа. Число, передаваемое в функцию должно быть больше 0. делитель должен быть больше 1, за исключением случая, когда аррументом является 1.
// //алгоритм решения такой задачи : 
// // 1)попробовать разделить число на 2
// // 2)если делится без остатка это наименьший делитель
// // 3) если нет, то попробуйте следующий делитель
// // 4) если ничего не делит число без остатка, то переданное число является простым
// const minDiv = n => {
//     if (n < 0){
//         return 'Error';
//     } else if (n == 1){
//         return 1;
//     } else if ((n % 2) == 0){
//         return 2;
//     }
//     const iter = (counter, acc) =>{
//         if ((acc % counter == 0) && (counter != acc)){
//             return counter;
//         } else if(acc % counter != 0){
//             return iter(counter + 1, n);
//         }
//         else{
//             return acc;
//         }
//     }

//     return iter(3, n);
// }
// console.log(minDiv(25)); 