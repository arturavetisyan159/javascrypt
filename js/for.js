// постфиксная инкремента: фактическое сложение произойдет после того, как значение вернется
// a = 3
// b = a++ // b = 3, a = 4
// префиксная инкремента: фактическое сложение произойдет перед тем, как значение вернется
// a = 3
// b = ++a // b = 4, a = 4 

// const factorial = n => {
//     result = 1; 
//     for (let counter = 1; counter <= n; counter++ ) {
//         result  *= counter;
//     }
//     return result;
// }
// console.log(factorial(10));

// SWITCH - оператор похожий на if, else if, else.
switch(num){
    case 1: //if (num === 1)
    answer = "One";
    break; // нужен для выхода из блока SWITCH
    
    case 2: // if (num === 2){
    case 4: // if (num === 4){
    case 3: // if (num === 3){
    answer = "Two";
    break;

    default:
    answer = "Nothing";
    break;
}