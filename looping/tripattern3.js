// 123    4-1   where 1,2,3 are rows
// 12     4-2
// 1      4-3

for(let row=1;row<=3;row++){
    let str=""
    for(let col=1;col<=(4-row);col++){
        str+=col
    }
    console.log(str);
}