var email="abc.@gmail"

try{
    if(!(email.endsWith("@gmail.com"))){
        throw new Error("mail invalid");

    }
}
catch (e){
    console.log((e.message));
}