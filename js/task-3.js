// ЗАДАНИЕ 3. Функция, которая принимает на вход в виде массива кошелёк с деньгами и название валюты и возвращает сумму денег указанной валюты.

const money1 = ['eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5'];
const money2 = ['eur 10', 'usd 1', 'eur 5', 'rub 100', 'eur 20', 'eur 100', 'rub 200'];
const money3 = ['eur 10', 'rub 50', 'eur 5', 'rub 10', 'rub 10', 'eur 100', 'rub 200'];

const totalAmount = (wallet, str) => {
    let res = 0;
    const newWallet = []; // (здесь будут храниться элементы wallet с соответствующей входу в функцию валютой)
    const nums = [];
    let sum = 0;

    for (let i = 0; i < wallet.length; i++){ // цикл, добавляет в newWallet значения входного массива с соответствующей валютой
        if (wallet[i][0] == str[0]){
            newWallet.push(wallet[i]);
        }
    }

    for (let j = 0; j < newWallet.length; j++){ // цикл, перебирает элементы newWallet 
        let num = '';
        for (let k = 4; k < newWallet[j].length; k++){ // в соответствующем элементе newWallet вытаскивает число и добавляет в nums
            num = num + newWallet[j][k]
            if (k == newWallet[j].length - 1){
                nums.push(num)
            }
        }
    }
    
    for (const value of nums){ // цикл , считает сумму чисел в nums
        sum += Number(value);
    }

    return sum;
}

console.log(totalAmount(money1, 'usd'));
console.log(totalAmount(money2, 'eur'));
console.log(totalAmount(money3, 'rub'));