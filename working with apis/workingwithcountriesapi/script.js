fetch(`https://restcountries.com/v2/all`).then(res=>res.json()).then(data=>populateselectbox(data))//to display all country names in selectbox


function populateselectbox(data){ //select box this needed ,  if textbox no need of this
    let selectbox=document.querySelector("#id_select")
    data.forEach(country=>{
        let option=document.createElement("option")
        option.text=country.name
        option.value=country.name
        selectbox.appendChild(option)

    }

    )

}





function fetchcountrydetails(){
    let countryname=id_select.value
    fetch(`https://restcountries.com/v2/name/${countryname}?fullText=true`).
    then(res=>res.json()).
    then(data=>populatevalue(data))
}
function populatevalue(data){
    console.log(data[0].name);
    let countryname=data[0].name
    let capital=data[0].capital
    let population=data[0].population
    let curname=data[0].currencies[0].name
    let languagename=data[0].languages[0].name
    let flag=data[0].flag
    let htmlData=`
    <div class="card" style="width: 18rem;">
  <img src="${flag}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Country name${countryname}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">capital${capital}</li>
    <li class="list-group-item">population${population}</li>
    <li class="list-group-item">currency${curname}</li>
    <li class="list-group-item">language${languagename}</li>


  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>



    `
   result.innerHTML=htmlData
}

//weather app hw