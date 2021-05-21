const secuenceSum = (begin, end) => {
    if (begin > end){
        return 'Nan'
    } else if (begin == end){
        return begin
    } 
    else{
        return end + secuenceSum(begin, (end - 1))
    }
};

const answer = secuenceSum(1, 5);
console.log(answer)