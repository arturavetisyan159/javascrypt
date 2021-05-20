// условия
// const abs = num =>{
//     if (num > 0){
//         return num;
//     }
//     else if (num < 0){
//         return -num;
//     }
//     else {
//         return 0;
//     }
// };
// console.log(abs(3));

// Используем три простых операции AND, OR, NOT.
// AND используется когда нам нужно чтобы оба утверждения были истины (я человек and мой сосед человек). в js это &&
// OR используется когда нам нужно чтобы хотя бы одно условие было true (я человек OR лошадь человек). в js это ||
// NOT - это противоположное. NOT true это false, NOT false это true. (NOT свиньи умеют летать - true). в js это !


// const abs = num =>{
//     if (num === 0 || num > 0){
//         return num;
//     }
//     else{
//         return -num;
//     }
// }

const studentMark = (exam, projects) =>{
    if (exam >= 90 || projects > 10){
        return 100;
    }
    else if (exam >= 75 && projects >= 5){
        return 90;
    }
    else if (exam >= 50 && projects >= 2){
        return 75;
    }
    else {
        return 0;
    }
};
console.log(studentMark(100, 0));