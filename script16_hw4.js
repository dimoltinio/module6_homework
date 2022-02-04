let a = +prompt('1)Введите данные ');
    b = +prompt('2)Введите данные ');
let i = a-1;

function getNums(k,l){
    i++;
    console.log(i);
}

const intervalId = setInterval(getNums,1000, a, b);

setTimeout(function(){
    clearInterval(intervalId);
}, ((b-a)+2)*1000 );
