var pattern="ABAB"
// find the first recursive character
var wc={} //{A:1,B:1}

for(let char of pattern){
    if(char in wc){
        console.log(`${char} is recursive character`);
        break

    }
    else{
        wc[char]=1
    }
}

//print second repeatitive character
//most recursive character
//pattern=" ABABCCC"

var wc={}
var recursivechar=[]