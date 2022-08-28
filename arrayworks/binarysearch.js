
var arr=[10,11,12,13,14,15,20,21,22]
//        0  1  2  3  4  5  6  7  8
//        l           m           u
//step low=0 upp=last
var flag=0;
var elem=21;
//var mid;
var low=0,upp=arr.length-1;
var cnt=0;
while(low<upp){  //0<8  5<8  7<8
    let mid=Math.floor((low+upp)/2)  //  0+8/2=4  13/2=6.5=6  7+8/2=7
    if(elem<arr[mid]){ //21<arr[6] 21<20 21<21
        upp=mid-1;
    }
    else if(elem>arr[mid]){  //21>20 21>21
        low=mid+1 //7
    }
    else if(elem==arr[mid]){ //21==21
        flag=1;
        break

    }
    cnt++
    //low++

}
console.log(flag==0?"nf":"found");
console.log(cnt);

