var arr1=[10,11,12,17,20]
var arr2=[12,14,16,20,21]
cnt=1;

// for(let i=0;i<arr1.length;i++){
//     for(let j=0;j<arr2.length;j++){
//         if(arr1[i]==arr2[j]){
//             console.log(`common ${arr1[i]}`);
//         }
//         cnt++;
//     }
// }

for(let n1 of arr1){
    for(let n2 of arr2){
        if(n1==n2){
            console.log("common",n1);
        }
    }
}