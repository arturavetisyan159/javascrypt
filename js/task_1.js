//  ЗАДАЧА 1. Функция, которая определяет, является ли переданное число натуральной степенью тройки
const isPowerOfThree = (n) => {
    if (n == 1){
        return 0;
    }
    for (let i = 1; i < Infinity; i++){
        if (3 ** i == n) {
            return true;
        }
        else if (3 ** i > n){
            return false;
        }
    }
}
console.log(isPowerOfThree(3));