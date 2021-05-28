// ЗАДАЧА 2. Является ли билет счастливым?
const  isHappyTicket = (n) => {
    let half = n.length / 2;
    if (n.length % 2 != 0){
        return false;
    }
    let counter = 0;
    let first_half = 0;
    let second_half = 0;
    while (counter < half){
        first_half = first_half + Number(n[counter]);
        second_half = second_half + Number(n[ n.length - (counter + 1)  ]);
        counter++;
    }
    if (first_half == second_half){
        return true;
    } else{
        return false;
    }
}
console.log(isHappyTicket('1203'));