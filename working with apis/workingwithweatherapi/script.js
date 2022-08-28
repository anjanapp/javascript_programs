function fetchweatherdetails(){
    let placeName=id_place.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${placeName}&appid=6fa99e1f96f024f79970c5a3532b2ac6&units=metric`).
    then(res=>res.json()).
    then(data=>populatevalue(data))
}
function populatevalue(data){
    let coordinate=data.coord.lon
    let weather=data.weather[0].main
    let temperature=data.main.temp
    let visibility=data.visibility
    let degree=data.wind.deg
    let name=data.name
    let country=data.sys.country
    let htmlData=`
    
    <div class="card" style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">longitude ${coordinate}</li>
    <li class="list-group-item">weather ${weather}</li>
    <li class="list-group-item">temperature ${temperature}</li>
    <li class="list-group-item">visibility ${visibility}</li>
    <li class="list-group-item">degree ${degree}</li>
    <li class="list-group-item">name ${name}</li>
    <li class="list-group-item">country ${country}</li>



  </ul>
  
</div>
    `

   result.innerHTML=htmlData

}