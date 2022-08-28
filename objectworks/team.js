var ipl2k22=[
    {teamName:"MI",matches:7,won:0,loss:7,pts:0,lastFive:["l","l","l","l","l"]},
    {teamName:"GT",matches:6,won:5,loss:1,pts:10,lastFive:["w","w","l","w","w"]},
    {teamName:"csk",matches:7,won:2,loss:5,pts:4,lastFive:["w","l","w","l","l"]},
    {teamName:"RCB",matches:7,won:5,loss:2,pts:10,lastFive:["w","w","l","w","w"]},
    {teamName:"PBKS",matches:7,won:3,loss:4,pts:6,lastFive:["l","l","w","l","w"]},
    {teamName:"RR",matches:6,won:4,loss:2,pts:8,lastFive:["w","l","w","l","w"]},
    {teamName:"KKR",matches:7,won:3,loss:4,pts:6,lastFive:["l","l","l","w","w"]},
    {teamName:"LSG",matches:7,won:4,loss:3,pts:8,lastFive:["l","w","l","w","w"]},
    {teamName:"DC",matches:6,won:3,loss:3,pts:6,lastFive:["l","w","l","l","l"]},
    {teamName:"SRH",matches:6,won:4,loss:2,pts:8,lastFive:["w","w","w","w","w"]},

]

// total number of teams

// console.log(ipl2k22.length);

// sort teams wrt pts

// ipl2k22.sort((t1,t2)=>t2.pts-t1.pts)
// console.log(ipl2k22);

// which are the teams who won last two consecutives wins in recent matches

// ipl2k22.filter(t=>t.lastFive[3]=='w' && t.lastFive[4]=='w').forEach(t=>console.log(t.teamName))


// which team have highest points
// console.log(ipl2k22[0]);

//is there any team with no wins
// console.log(ipl2k22.some(t=>t.won==0))

//which team never won any matches
// ipl2k22.filter(t=>t.won==0).forEach(t=>console.log(t.teamName))

//which team never loss any matches
// ipl2k22.filter(t=>!(t.lastFive.includes("l"))).forEach(t=>console.log(t.teamName))






// match history of csk
// var csk=ipl2k22.find(t=>t.teamName=="csk")
// console.log(csk);


// pts difference btw GT and MI
// var gt=ipl2k22.find(t=>t.teamName=="GT")
// var MI=ipl2k22.find(t=>t.teamName=="MI")
// console.log(gt.pts-MI.pts);


//find csk point is ahead or behind than other teams
var cskpts=ipl2k22.find(t=>t.teamName=="csk").pts
ipl2k22.forEach(t=>{
    if(t.teamName=="csk"){
        return ""
    }
    if(t.pts<cskpts){
        console.log(`csk ahead ${cskpts-t.pts} points with ${t.teamName}`);

    }
    else{
        console.log(`csk behind ${t.pts-cskpts} points with ${t.teamName}`);
    }
})