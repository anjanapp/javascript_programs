var weather=[
    {district:"tvm",temp:25},
    {district:"ekm",temp:25},
    {district:"kty",temp:25},
    {district:"idk",temp:25},
    {district:"tsr",temp:25},
    {district:"pkd",temp:25},
    {district:"tvm",temp:29},
    {district:"ekm",temp:31},
    {district:"kty",temp:23},
    {district:"idk",temp:14},
    {district:"tsr",temp:28},
    {district:"pkd",temp:30},


    
]

// op=create a new object with districtname : highest temp
var weatherOut={}
for(let data of weather){
    let districtname=data.district
    let curtemp=data.temp;
    if(districtname in weatherOut){
        let oldTemp=weatherOut[districtname]
        if(curtemp>oldTemp){
            weatherOut[districtname]=curtemp
        }

    }
    else{
        weatherOut[districtname]=curtemp
    }
}
console.log(weatherOut);
// q1 out={"tvm":29,"ekm":31,"kty":25,"idk":25,"tsr":28}

//to print the key 
// for(let k in weatherOut){
//     console.log(k);
// }

//to print district with highest temp
console.log(Object.entries(weatherOut).sort((d1,d2)=>d2[1]-d1[1])[0])



