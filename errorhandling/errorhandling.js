// try,catch,throw,throws,finally

// try{
//     doubtful code
// }
// catch{
//     handling code
// }

var expr="%12+3*15/10"

try{
    console.log(eval(expr));
}
catch(e){
    console.log("exception occured");

}

console.log("file transaction");
console.log("database commit");