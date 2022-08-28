//linear search
//not efficient....each element is to be checked    complexity is more



var a=[10,11,12,2,3,4,5,6]
var element=12

for(let i=0;i<=a.length;i++){
    if(a[i]==element){
        flag=1;
        break
    }
    
}
console.log(flag==0?"not found":"found");