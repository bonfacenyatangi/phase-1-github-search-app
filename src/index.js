// Your code here

//Function for fetching the movies
function fetchMovies (id) {
    fetch(`http://localhost:3000/films/${id}`)
    .then(response => response.json())
    .then(movie => {
        document.querySelector('#poster').src = movie.poster;
        document.querySelector('#title').innerHTML = movie.title;
        document.querySelector('#runtime').innerHTML = movie.runtime;
        document.querySelector('#film-info').innerHTML = movie.description;
        document.querySelector('#showtime').innerHTML = movie.showtime;
        document.querySelector('#ticket-num').innerHTML = movie.capacity - movie.tickets_sold;
    })
}
//Fetch movie titles
function fetchMovieTitles () {
    return fetch('http://localhost:3000/films')
    .then(response => response.json())

}

fetchMovieTitles().then(movies => {
    movies.forEach(movie => {
        renderMovieTitles(movie);
    })
})

//Rendering the movie titles to our HTML body
function renderMovieTitles (movieTitles) {
    const movieList = document.getElementById("films");
    const movies = document.createElement("li");
    movies.innerHTML = movieTitles.title.toUpperCase();
    movieList.appendChild(movies);
}

// Create a function for buying tickets of movies
function buyingTicketOfMovie() {
    const buyingTicketOfMovie =document.getElementById("buy-ticket")
    const ticketNum =document.getElementById("ticket-num")
        buyingTicketOfMovie.addEventListener('click', (e) => {
        let count = parseInt(ticketNum.textContent.split(""));
       if(count > 1){
        ticketNum.textContent = `${count - 1}`
      } else {
        ticketNum.innerHTML = ''
        ticketNum.textContent = "SOLD OUT"
      }
      })
  }
document.addEventListener("DOMContentLoaded", function () {
    fetchMovies(1);
    fetchMovieTitles();
    buyingTicketOfMovie()
})