const init = () => {
    const inputForm = document.querySelector("form");
  
    inputForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Stop default refresh
  
      const input = document.querySelector("input#searchByID");
      const movieId = input.value.trim(); // Get user input
  
      // Check if input is empty
      if (!movieId) {
        alert("Please enter a valid Movie ID!");
        return;
      }
  
      // Fetch movie data
      fetch(`http://localhost:3000/movies/${movieId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Movie not found");
          }
          return response.json();
        })
        .then((data) => {
          // Select elements and update content
          const title = document.querySelector("section#movieDetails h4");
          const summary = document.querySelector("section#movieDetails p");
  
          title.innerText = data.title;
          summary.innerText = data.summary;
        })
        .catch((error) => {
          // Handle errors (e.g., invalid ID)
          const title = document.querySelector("section#movieDetails h4");
          const summary = document.querySelector("section#movieDetails p");
  
          title.innerText = "Movie Not Found";
          summary.innerText = "Please enter a valid Movie ID.";
        });
    });
  };
  
  // Ensure script runs after DOM loads
  document.addEventListener("DOMContentLoaded", init);
  