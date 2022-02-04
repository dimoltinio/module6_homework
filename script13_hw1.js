let array1 = [0,0,1,2,3,4,5,6,7,8,0,9,10,'skill','factory'+1];
console.log(array1);
let ev=0;
    od=0;
    nul=0;

function getArrSum(arr){
    for(i=0; i<arr.length; i++){
        if(typeof(arr[i])=='number'){
            if(arr[i]!=0){
                if(arr[i]%2==0){
                    ev++;
                }
                else{
                    od++;
                }
           }
           else if(arr[i]==0){
                nul++;
           }
        }
    }
    console.log('even ' + ev);
    console.log('odd ' + od);
    console.log('null ' + nul);
}
getArrSum(array1);
