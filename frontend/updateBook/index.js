const urlParams = new URLSearchParams(window.location.search);
const bookId = urlParams.get("bookId");
console.log(bookId)
const updateBookButton = document.querySelector(".create-note-button");

const apiUrl = "http://localhost:5000";

updateBookButton.addEventListener("click", () => {
  const endDate = document.querySelector(".create-note-endDate").value;
  const summary = document.querySelector(".create-note-input").value;
  const data = {
    endDate: endDate,
    summary: summary
  }

    fetch(`${apiUrl}/books/${bookId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data) {
          location.href = "/frontend/dashboard/home.html";
        }
      })
      .catch((err) => {
        alert("Error Creating Book!! Retry....");
        console.log(err);
      });
});