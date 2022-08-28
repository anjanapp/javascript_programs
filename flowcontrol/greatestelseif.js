var num1=10,num2=20,num3=30;
var largest=0;

if(num1>num2 && num1>num3){
    largest=num1;

}
else if(num2>num1 && num2>num3){
    largest=num2;
}
else if(num3>num1 && num3>num2){
    largest=num3;
}
else if(num1==num2 && num1==num3){
    console.log(`all numbers are equal`);
}
console.log(largest);

