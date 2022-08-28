// function add(...args){  //... using this any no of arg will accept
//     console.log((args));
// }
// add(10)
// add(10,20)
// add(10,20,30)

// var arr=[10,20]
// arr.push(10,20,20)
// console.log(arr);

function add(...items){
    return items.reduce((n1,n2)=>n1+n2)
}
console.log(add(10,20));
console.log(add(10,11,12,13));

function findmax(...items){
    return items.reduce((n1,n2)=>n1>n2?n1:n2)
}
console.log(findmax(10,11,3,30));