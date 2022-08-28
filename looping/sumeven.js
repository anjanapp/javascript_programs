//total sum of even nums range of 20-50
//loop from 20-50
//conditn for check
//total
// "use strict" to work in strict mode
var sum=0;
for(let i=20;i<=50;i++){
    if(i%2==0){
        sum=sum+i;
    }
}
console.log(sum);

