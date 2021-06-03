// ЗАДАЧА 4. функция принимает на вход массив и выпрямляет его: если элементами массива являются массивы, то функция сводит всё к одному массиву, раскрывая один уровень вложенности.

const flatten = arr => {
    if (arr == []){
        return [];
    }
    const res = [];
    for (const item of arr){
        if (typeof(item) === 'object'){
            res.push(...item); // метод spread.
        } else{
            res.push(item);
        }
    }
    return res;
}

console.log(flatten([1, [3, 2], 9]));
console.log(flatten([1, [[2], [3]], [9]]))
