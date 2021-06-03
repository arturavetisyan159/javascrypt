// ЗАДАНИЕ 1. Найти максимальное значение в массиве. 

const calculateMax = arr => {
    if(arr.length == 0){
        return null;
    }
    let max = arr[0];
    for(const value of arr){
        if (value > max){
            max = value;
        }
    }
    return max;
}

console.log(calculateMax([3, 2, -10, 38, 0]));