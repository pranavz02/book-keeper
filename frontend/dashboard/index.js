const cardContainer = document.querySelector(".card-container");
const createBookButton = document.querySelector(".new-book");
// const updateBookButton = document.querySelector(".update-button");
const deleteBookButton = document.querySelector(".delete-button")

const apiUrl = "http://localhost:5000";

// deleteBookButton.addEventListener("click", () => {
//     window.confirm("Are you sure you want to delete the book?")
//     const bookId = deleteBookButton.getAttribute("submit");
//     fetch(`${apiUrl}/book/${bookId}`, {
//         method: "DELETE",
//         headers: {
//         // authorization: token,
//         },
//     })
//         .then((res) => res.json())
//         .then((data) => {
//         if (data.message) {
//             location.href = "home.html";
//         }
//         })
//         .catch((err) => {
//         alert("Error Deleting Book!! Retry....");
//         console.log(err);
//         });
// });



createBookButton.addEventListener("click", () => {
    location.href = "/frontend/createBook/createBook.html";
  });
let cardData = [];

const createBooks = (array) => {
    cardContainer.innerHTML = "";

    array.forEach((cardObj) => {
      const { _id, name, author, startDate, endDate, summary } = cardObj;
      // const id = cardObj._id;
      const card = document.createElement("div");
      card.classList.add("card");
      card.id = _id;
  
      const insideHtml = `
      <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${author}</h6>
          <div class="row mt-3">
            <div class="col-md-6">
                <p><strong>Start Date:</strong>${startDate}</p>
            </div>
            <div class="col-md-6">
                <p><strong>End Date:</strong>${endDate}</p>
            </div>
        </div>
        <p class="card-text">${summary}</p>
        <div class="card-buttons row mt-3">
            <div class="col-md-6">
                <a type="button" class="btn btn-success update-button" href="/frontend/updateBook/updateBook.html?bookId=${_id}">Update</a>
            </div>
            <div class="col-md-6">
                <button type="button" class="btn btn-danger delete-button" submit=>Delete</button>
            </div>
      </div>
      </div>`
  
      card.innerHTML = insideHtml;
  
      cardContainer.appendChild(card);
    });
  };
  
  const body = document.querySelector("body");
  
  window.addEventListener("load", () => {
    body.classList.add("visible");
  
      fetch(`${apiUrl}/books`, {
        method: "GET",
        headers: {
          'Accept': 'application/json'
       }
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          cardData = data;
          createBooks(data);
        })
        .catch((err) => {
          alert("Error Fetching data");
          console.log(err);
        });
  });

  // updateBookButton.addEventListener("click", () => {
  //   locattion.href = `/frontend/updateBook/updateBook.html?bookId=${_id}`
  // });