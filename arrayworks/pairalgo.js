var arr=[2,3,4,5]
arr.sort((n1,n2)=>n1-n2)



var inp=7
var cnt=1
var low=0,upp=arr.length-1
while(low<upp){
    let cursum=arr[low]+arr[upp]
    if(cursum<inp){
        low+=1
    }
    else if(cursum>inp){
        upp-=1
    }
    else if(cursum==inp){
        console.log(`pairs are ${arr[low]},${arr[upp]}`);
        //break  //to stop on one pair
        low++    //getting multiple pairs
    }
    cnt++
}
console.log("execution count",cnt);