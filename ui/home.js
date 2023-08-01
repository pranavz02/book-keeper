// Supposing you already have queried the API and have your data
let data = [
// fetch from backend
]

data.forEach(res => {
    let card = document.createElement("div");

    let name = document.createTextNode('Name:' + res.name + ', ');
    card.appendChild(name);

    let description = document.createTextNode('Description:' + res.description + ', ');
    card.appendChild(description);

    let date = document.createTextNode('date:' + res.date);
    card.appendChild(date);

    let container = document.querySelector("#card");
    container.appendChild(card);
});