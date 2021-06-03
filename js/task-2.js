// ЗАДАНИЕ 2. Сумма элементов в массиве

const calculateSum = arr => {
    if(arr.length == 0){
        return null;
    }
    let sum = 0;
    for(const element of arr){
        sum = sum + element;
    }
    return sum;
}

console.log(calculateSum([3, 2, -10, 38]));