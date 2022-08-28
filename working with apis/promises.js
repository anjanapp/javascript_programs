// var mypromise=new Promise((res,rej)=>{
//     let watchtime=0
//     if(watchtime<1){
//         rej("promise fulfilled")
//     }
// })
// mypromise.then(msg=>console.log("fetch session")).catch(er=>console.log("retake promise session"))




// var mypromise=new Promise((res,rej)=>{
//     let watchtime=Math.floor(Math.random()*10)
//     if(watchtime>3){
//         res("you are ready")
//     }
// })
// mypromise.then(msg=>console.log(msg))




var myjspromise=new Promise((res,rej)=>{
    let rating=Math.floor(Math.random()*10)
    if(rating >5){
        res("here to gooooo")
    }
})

myjspromise.then(msg=>console.log("lets start angular"))