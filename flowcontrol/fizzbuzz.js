// var num=15;
// if(num%15==0){
//     console.log(`fizzbuzz`);
// }
// else if(num%5==0){
//     console.log(`buzz`);
// }
// else if(num%3==0){
//     console.log(`fizz`);
// }
var num=15;
var str="";

if(num%5==0){
    str+='fizz'
}
if(num%3==0){
    str+='buzz'
}
console.log(str);