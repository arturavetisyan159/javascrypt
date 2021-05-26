// можно обьявлять переменные с помощью var.
// let и var по разному влияют на видимость переменной. Советуют использовать let, при обьявлении переменной, а не var.
const let1 = "they call him \"Tommy\" and he likes it "; // \..\ - это экраннирование, шоб не было ошибок.
// если нам в строке нужен обратный слэш , нам нужно его тоже экранировать.
const skip = str => {
    let i = 0;
    let result = '';
    while (i < str.length){
        result = result + str[i];
        i = i + 2;
    }
    return result;
};
console.log(skip('California'));