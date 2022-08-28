var age=16
try{
    if(age<18){
        throw new Error("age invalid")
    }
}
catch(e){
    console.log(e.message);
}
console.log("stmt1");
console.log("stmt2");