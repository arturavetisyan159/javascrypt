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

// const createPrinter = () => {
//     const name = 'King';

//     const printName = () => {
//         console.log(name);
//     }
//     return printName;
// }
//  const myPrinter = createPrinter();
//  myPrinter();

// const x = 7;
// const f = (x) => () => () => x;
// console.log(f(10)()()); // 10

// const isRightNum = num => {
//     const res = (num > 3) && (num ** 2 < 26) && (num != 5);
//     return res;
// };

// console.log(isRightNum(4)); // true

// const value = 777;
// const func = value => value + 1;
// console.log(func(5)); // 6

// Преобразование ДНК в РНК. Задача
// Четыре нуклеотид в ДНК- это аденин (A), цитозин (C), гуанин (G), тимин(T);
// Четыре нуклеотид в РНК- это аденин (A), цитозин (C), гуанин (G), урацил(T);

const dnaToRna = dna => {
    if (dna.length === 0){
        return '';
    }
    let rna = '';
    for (let i = 0; i < dna.length; i++){
        if ((dna[i] != 'A') && (dna[i] != 'G') && (dna[i] != 'C') && (dna[i] != 'T')){
            rna = null;
            break;
        } else if (dna[i] === 'A') {
            rna = rna + 'U';
        } else if (dna[i] === 'G') {
            rna = rna + 'C';
        } else if (dna[i] === 'T') {
            rna = rna + 'A';
        } else if (dna[i] === 'C') {
            rna = rna + 'G';
        }
    }
    return rna;
}

console.log('Получившееся РНК= ' + dnaToRna('ADCTGU'));