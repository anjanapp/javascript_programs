var a=[2,3,4,5]
var inp=8
for(i=0;i<a.length;i++){
    for(j=i+1;j<=a.length;j++){
        if(a[i]+a[j]==inp){ //2+3==8 2+4==8 2+5==8 //3+4==8 5+5==8....
            console.log(`pairs ${a[i]},${a[j]}`);
            break
        }
    }
    
}