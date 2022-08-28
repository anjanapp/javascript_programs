// var baleno={
//     brand:"nexa",
//     colors:["grey","blue","red","white"],
//     price:"10lac",
//     transmissions:["manual","auto"],
//     fueltypes:["petrol","EV"],
//     breakes:"ABS",
//     getprice(){
//         return this.price  //this is used to access current object property
//     }
// }
// var glanza={
//     brand:"toyotta",
//     price:"11lac"
// }
// glanza.__proto__=baleno
// console.log(glanza.transmissions);
// console.log(baleno.getprice());
// console.log(glanza.getprice());


var parents={
    gold:"10kg",
    cash:50,
    groom:"gopal",
    mrg(){
        console.log(`mrg with ${this.groom} *****${this.cash}`)
    }

}
var child={
    groom:"rahul"  //overriding
}
child.__proto__=parents
child.mrg()

//hw submission monday may2
