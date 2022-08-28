fetch("https://jsonplaceholder.typicode.com/users").
then(res=>res.json()).
then(users=>displayvalues(users))

function displayvalues(users){
    let htmlData=``
    users.forEach(user=>{
        htmlData+=`
        <tr>
    <td>${user.name}</td>
    <td>${user.email}</td>
    <td>${user.company.name}</td>
    <td><button type="button" class="btn btn-outline-primary" value=${user.id} onclick="fetchUser(event)">VIEW DETAILS</button></td>
    </tr>
        
        
        `
    result.innerHTML=htmlData
    })
}
function fetchUser(event){
    let datas=event.target.value;//click element will select
    fetch(`https://jsonplaceholder.typicode.com/users/${datas}`).then(res=>res.json()).
    then(data=>populateUser(data))
    





    
    
    
}
function populateUser(user){ //to display as cards
    let image="C:\Users\User\Desktop\mearn\javascript\working with apis\workingwithuser\pi7rn8LdT.png"
    let htmlData=`
    <div class="card" style="width: 18rem;">
  <img src="${image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${user.name}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${user.email}</li>
    <li class="list-group-item">${user.username}</li>
    <li class="list-group-item">${user.address.street}</li>
    <li class="list-group-item">${user.address.city}</li>
    <li class="list-group-item">${user.company.name}</li>


  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
    
    `
    id_user.innerHTML=htmlData

}
// function populateUser(user){ //to display as cards in another page
//     let image="C:\Users\User\Desktop\mearn\javascript\working with apis\workingwithuser\pi7rn8LdT.png"
//     let htmlData=`
//     <div class="card" style="width: 18rem;">
//   <img src="${image}" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${user.name}</h5>
//   </div>
//   <ul class="list-group list-group-flush">
//     <li class="list-group-item">${user.email}</li>
//     <li class="list-group-item">${user.username}</li>
//     <li class="list-group-item">${user.address.street}</li>
//     <li class="list-group-item">${user.address.city}</li>
//     <li class="list-group-item">${user.company.name}</li>


//   </ul>
//   <div class="card-body">
//     <a href="#" class="card-link">Card link</a>
//     <a href="#" class="card-link">Another link</a>
//   </div>
// </div>
    
//     `
//     document.querySelector(".my-div").style.display='none'
//     id_myuser.innerHTML=htmlData

// }


// function populateUser(user){ //display as table--html first col-2
//     let htmlData=`
//     <tr>
//     <td>${user.name}</td>
//     <td>${user.email}</td>

//     </tr>
    
    
//     `
//     id_person.innerHTML=htmlData
// }