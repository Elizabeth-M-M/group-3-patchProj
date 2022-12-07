
    fetch("http://localhost:3000/movies")
        .then(response => response.json())
        .then(data => data.forEach(data => displayData(data)))


function displayData(data){
    const container = document.querySelector(".card-container")
    const card = document.createElement("div")
    card.innerHTML = `
    <img src="${data.image}" style = "width:200px; height:200px" alt="...">
    <h5 class="card-title">${data.title}</h5>
    <p class="card-text">${data.summary}</p>
    <p><button class="btn"></button><span>likes</span><span id='dataLikes'>${data.likes}</span></p>`
    container.appendChild(card)
    card.querySelector(".btn").addEventListener("click", (e) => {
        e.preventDefault()
        data.likes += 1
        card.querySelector("#dataLikes").innerHTML = data.likes
        updateLikes(data)

    })
}
function updateLikes(data){
    fetch(`http://localhost:3000/movies/${data.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({"likes": data.likes})
    })
    .then(response => response.json())
    .then(data => console.log(data) )
}

