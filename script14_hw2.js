let inputNum = prompt('Введите данные ')
inputNum = Number(inputNum);
let ans = true;

function SimpleNum(num){
    for(let i=2; i<=num/2; i++){
        // console.log(`${num} % ${i} = ${num%i}`)
        if(num%i==0){
            ans=false;
            break;
        }
    }
    if(ans==true){
        return console.log(`Число ${num} простое`);
    }
    else{
        return console.log(`Число ${num} не простое`);
    } 
}

if(inputNum > 1000){
    console.log('Данные неверны')
}
else{
    SimpleNum(inputNum);
}