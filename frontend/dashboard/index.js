const cardContainer = document.querySelector(".card-container");
const createBookButton = document.querySelector(".new-book");
const deleteBookButton = document.querySelector(".delete-button")

const apiUrl = "http://localhost:5000";

createBookButton.addEventListener("click", () => {
  location.href = "/frontend/createBook/createBook.html";
});
let cardData = [];

function extractDate(fullDate) {
  if (!fullDate) {
    return ''; // Return an empty string or some other default value if fullDate is undefined
  }

  const dateOnly = fullDate.split("T")[0];
  return dateOnly;
}



const createBooks = (array) => {
  cardContainer.innerHTML = "";

  array.forEach((cardObj) => {
    const { _id, name, author, startDate, endDate, summary } = cardObj;
    const card = document.createElement("div");
    card.classList.add("card");
    card.id = _id;

    const insideHtml = `
    <div style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${author}</h6>
      <div class="row">
        <div class="col-md-6">
          <p class="text-black"><strong>Start Date:</strong> ${extractDate(startDate)}</p>
        </div>
        <div class="col-md-6">
          <p class="text-black"><strong>End Date:</strong> ${extractDate(endDate)}</p>
        </div>
      </div>
      <p class="card-text text-black">${summary ? summary : "Summary not available"}</p>
      <div class="d-grid gap-2">
        <a type="button" class="btn btn-success update-button" href="/frontend/updateBook/updateBook.html?bookId=${_id}">Update</a>
        <button type="button" class="btn btn-danger delete-button" submit>Delete</button>
      </div>
    </div>
  </div> `

    card.innerHTML = insideHtml;

    cardContainer.appendChild(card);

    // Add event listener to the "Delete" button for each card
    const deleteButton = card.querySelector(".delete-button");
    deleteButton.addEventListener("click", () => {
      const confirmation = window.confirm("Are you sure you want to delete the book?");

      if (confirmation) {
        // Call the function to delete the respective book
        deleteBook(_id);
      } else {
        // If the user cancels, do nothing
        console.log("Deletion canceled.");
      }
    });
  });
};

const deleteBook = (bookId) => {
  fetch(`${apiUrl}/books/${bookId}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      // Filter out the deleted book from the cardData array
      cardData = cardData.filter((card) => card._id !== bookId);
      // Recreate the cards without the deleted book
      createBooks(cardData);
    })
    .catch((err) => {
      alert("Error deleting book");
      console.log(err);
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