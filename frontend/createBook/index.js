const createNoteButton = document.querySelector(".create-note-button");

const apiUrl = "http://localhost:5000";

createNoteButton.addEventListener("click", () => {
  const name = document.querySelector(".create-note-name").value;
  const author = document.querySelector(".create-note-author").value;
  const startDate = document.querySelector(".create-note-startDate").value;

  const data = {
    name: name,
    author: author,
    startDate: startDate,
  };
    fetch(`${apiUrl}/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          location.href = "/frontend/dashboard/home.html";
        }
      })
      .catch((err) => {
        alert("Error Creating Note!! Re-try....");
        console.log(err);
      });
});
