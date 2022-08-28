//print second repeatitive character
//most recursive character
pattern="AABABCCCDE"

var wc={}
//console.log(Array.from(pattern));
var recursivechar=new Set()
//to print recursive chars
// Array.from(pattern).map(char=>char in wc ? recursivechar.push(char):wc[char]=1)
// console.log(recursivechar);

//to print second recursive char
for(let char of pattern){
    if(char in wc){
        recursivechar.add(char)
        wc[char]+=1
    }
    else{
        wc[char]=1
    }
}
// console.log(recursivechar[1]);index is not possible in set
// console.log(Array.from(recursivechar[1]));//to convert set to array
 console.log(wc);
//to print second recursive
// console.log([...recursivechar][1]);//spread operator  ... is used convert to array


//to print most recursive element
console.log(Object.entries(wc).sort((a1,a2)=>a2[1]-a1[1])[0]);