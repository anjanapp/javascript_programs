//121  121 reverse palindrome
// 123
// 123%10=3
// 3
// Math.floor(123/10)  //12.3=12
// 12%10=2
// 2
// Math.floor(12/10) //1.2=1
// 1%10=1
//math.floor(1/10) //0.1=0

var num=123;
var inp=num;
var res='';
while(num!=0){
let lastDigit=num%10;
// console.log(lastDigit);  
 res=res+lastDigit
num=Math.floor(num/10);
}
console.log((res));

if(inp==res){
    console.log(`palindrome`);
}
else{
    console.log(`not palindrome`);
}

// ternary operator

// console.log(inp==res ? 'palindrome':'not palindrome');
