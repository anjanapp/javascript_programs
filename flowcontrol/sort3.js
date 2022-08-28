// sort 3 nos

var a=10,b=3,c=7;

if(a>b && a>c){
    fir=a;
    if(b>c){
       sec=b;
       thir=c;
    }
    else{
        sec=c;
        thir=b;
    }
}
else if(b>a && b>c){
    fir=b;
    if(a>c){
        sec=a;
        thir=c;
    }
    else{
        sec=c;
        thir=a;
    }
}
else 
if(c>a && c>b){
    fir=a;
    if(b>a){
        sec=b;
        thir=a;
    }
    else{
        sec=a;
        thir=b;
    }
}
console.log(`first=${fir},second=${sec},third=${thir}`);