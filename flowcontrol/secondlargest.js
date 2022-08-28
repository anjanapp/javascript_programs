// second largest among 3
// sort these 3 nos

var a=10,b=3,c=7;

if(a>b && a>c){
    if(b>c){
        console.log(b); 
    }
    else{
        console.log(c);
    }
}
else if(b>a && b>c){
    if(a>c){
        console.log(a);
    }
    else{
        console.log(c);
    }
}
else 
if(c>a && c>b){
    if(b>a){
        console.log(b);
    }
    else{
        console.log(a);
    }
}