//gcd 0r hcf    num1=12  num2=24     12

var num1=12,num2=24,i=1,gcd=0;


while(i<=num1){    
    if(num1%i==0 && num2%i==0){
        gcd=i;
       
       
    }
    i++;

   

}
console.log(gcd);

