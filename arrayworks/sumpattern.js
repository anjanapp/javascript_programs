// inp1   var arr=[2,4,6]
//op [10,8,6]

//inp2 var arr=[3,4,5]
//op [9,8,7]

var arr=[3,4,5]
var total=0
var op=[]
for(let n of arr){
    total+=n
}
// for(let n of arr){
//     console.log(total-n);
// }
for(let n of arr){           
    op.push((total-n))
}
console.log(op);

//q2 arr1=[10,0,8,7,9,0,2,0]

//op=[2,7,8,9,10,0,0,0]