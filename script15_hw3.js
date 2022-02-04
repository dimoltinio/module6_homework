let a = 5;
let b = 6;
function getSum(num1, num2){
    return num1 + num2;
}

function numA(x){
    return x;
}

const result = getSum(numA(a), b);
console.log(result);