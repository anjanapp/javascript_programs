function one(){
    console.log("inside one");
}
function two(){
    one()
    console.log("here in two");

}
function three(){
    //two()
    console.log("here in three");
    // three() recursive function

}
three()

//call stack  lifo
//javascript is interpreted language
//hoisting