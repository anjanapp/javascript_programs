// q2  2=2+22=24
//     3=3+33+333=369
//     4=4+44+444+4444=4396

var num=4,sum=0,temp

var i=1;
var str='' //str=0;
for(i=1;i<=num;i++){ //1<=2 2<=2 2<=3
    str=str+num // 2 22  //str=(str*10)+num
    var temp=Number(str)

    sum=sum+temp
    console.log(str);    
//     console.log();
    
}
console.log(sum);
