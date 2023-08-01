// Supposing you already have queried the API and have your data
let data = [
// fetch from backend
]

data.forEach(res => {
    let card = document.createElement("div");

    let name = document.createTextNode('Name:' + res.name + ', ');
    card.appendChild(name);

    let author = document.createTextNode('Author:' + res.author + ', ');
    card.appendChild(author);

    let description = document.createTextNode('Description:' + res.description + ', ');
    card.appendChild(description);

    let startDate = document.createTextNode('Start Date:' + res.startDate);
    card.appendChild(startDate);

    let endDate = document.createTextNode('Start Date:' + res.endDate);
    card.appendChild(endDate);

    let container = document.querySelector("#card");
    container.appendChild(card);
});