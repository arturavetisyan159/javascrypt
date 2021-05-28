// ЗАДАЧА 4. Функция Аккермана
const accermann = (m, n) =>  {
    if (m == 0) {
        return (n + 1);
    } else if(m > 0 && n == 0){
        return accermann (m -1, 1);
    } else if (m > 0 && n > 0){
        return accermann(m - 1, accermann(m, n - 1));
    }
}
console.log(accermann(2, 2));