var phone="123456781a"

try{
    if((phone.length!=10) || (isNaN(phone))){
        throw new Error("number invalid");
    }
}
catch(e){
    console.log(e.message);
}
