// const factorial = (n) => {
//     let counter = 1;
//     let result = 1;
//     while (counter <= n){
//         result = result * counter;
//         counter = counter + 1; 
//     }
//     return result; 
// };
// console.log(factorial(3))
// const minDiv = (n) => {
//     if (n == 1){
//         return 1;
//     } else if (n % 2 == 0){
//         return 2;
//     } else{
//         let counter = 3;
//         let result = 0;
//         while (counter < n){
//             if (n % counter == 0){
//                 result = counter;
//                 return result;
//             } else if (n % counter != 0){
//                 counter = counter + 1;
//             }
//         }
//         return n;
//     }
// }
// console.log(minDiv(15));
let i = 1;
while (i < 100){
    console.log(i);
    i++;
}