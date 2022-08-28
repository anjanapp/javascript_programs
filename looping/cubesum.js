//''''''''123=1**3+2**3+3**3=1+8+27=36

// armstrong if adding cube of number is the number itself eg 153

var num=153;
var inp=num;
let sum=0;

while(num!=0){ //123!=0 12!=0 1!=0 0!0
    let lastDigit=num%10; //123%10=3 12%10=2 1%10=1
    let cube=lastDigit**3 //3**3=27 2**3=8 1**3=1
    sum=sum+cube  //sum=0+27=27 27+8=35 35+1=36
    num=Math.floor((num/10))
}
console.log(sum); //36
console.log(inp==sum?'armstrong':'not armstrong');

//gcd 0r hcf    num1=12  num2=24     12