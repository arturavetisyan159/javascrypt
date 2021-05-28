// ЗАДАЧА 3. Совершенное ли чсило?
const isPerfect = n => {
    let div = '';
    let res = 0;
    for (let i = 1; i < n; i++ ){
        if (n % i == 0){
            res = res + i;
        }
    }
    if (res == n) {
        return true;
    } else {
        return false;
    }

}


console.log(isPerfect(496));