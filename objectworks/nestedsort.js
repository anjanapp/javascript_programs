var wc=[
    ["a",3],
    ["b",2],
    ["c",4]
]
wc.sort((a1,a2)=>a2[1]-a1[1])
// console.log(wc[0]); //to print greater element
console.log(Object.entries(wc));  