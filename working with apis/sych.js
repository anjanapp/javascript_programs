console.log("line1");

setTimeout(()=>{
    console.log("line2");
},2000
)
setTimeout(()=>{
    console.log("line1.x");
},0)
console.log("line3");

//multithreading