var num=21;
var flag=0;

if(num==2){
    console.log(`number is prime`);
}
else{
    for(let i=2;i<num;i++){

        if(num%i==0){
    
            flag=1;
            
        }
    }
    console.log(flag==0?"prime":"not prime");

}

//print multiplication table of 5 from 1 to 15
// 1*5=5..  15*5=75

// q2  2=2+22=24
//     3=3+33+333=369
//     4=4+44+444+4444=4396
