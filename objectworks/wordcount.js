var text="hello hai hello hai"

var words=text.split(" ")
// // words=[ 'hello', 'hai', 'hello', 'hai' ]
console.log(words);

var wc={}

for(let word of words){
    if(word in wc){
        wc[word]+=1

    }
    else{
        wc[word]=1

    }
}
console.log(wc);

// or

// text.split(" ").map(w=>w in wc?wc[w]+=1:wc[w]=1)
// console.log(wc);


