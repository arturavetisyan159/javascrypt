// область видимости - как интерпретатор в разных местах кода видит разные штуки
// лексическая область видимости - сам механизм поиска значений: смотрим в текущей области, если нет идем на уровень выше

// const age = 29; // глобальная бласть видимости
// const multiplier = num =>{ // глобальная область видимости
//     const x = 10; // у x локальная область видимости
//     return num * x;
// };
// const x = 13;
// console.log(x); // это глобальная область видимости, поэтому выводит 13, а не 10, как в функции

// let result = true; // глобальная область видимости\

const createPrinter = () => {
    const name = 'King';

    const printName = () => {
        console.log(name);
    }
    return printName;
}
 const myPrinter = createPrinter();
 myPrinter();
 