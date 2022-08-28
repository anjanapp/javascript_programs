var arr=[10,1,12,2,3,13,4,200,300]
//arr.sort((n1,n2)=>n1-n2) //ascending
//arr.sort((n1,n2)=>n2-n1) //descending
//arr.sort((n1,n2)=>n1<n2?1:-1)//descending
arr.sort((n1,n2)=>n1<n2?-1:1) //ascending
console.log(arr);

