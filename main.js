const form = document.getElementById("form")
const searchInput = document.getElementById("search")
const api = '2904de71'
let movieList = document.getElementById("movie-list")
let movieTitle = document.getElementById("movie-title")
let queryId = ""


form.addEventListener('submit', e =>{
    e.preventDefault()
    query = searchInput.value
    searchMovie(query)
})


function searchMovie(query){
    fetch(`https://www.omdbapi.com/?s=${query}&apikey=${api}`)
    .then(response => response.json())
    .then(data => {
        movieList = ""
        for (let i = 0; i < query.length; i++) {
            let movieItems = data.Search[i]
            console.log(movieItems)
            let movieId = movieItems.imdbID

            fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=${api}`)
            .then(response => response.json())
            .then(movieId => {
                console.log(movieId)
                movieTitle.innerHTML += `
            <div class="movie-container">
            <img src="${movieItems.Poster}" class="poster">
            <p>${movieId.Plot}</p>
            <h2 class="title">${movieItems.Title}</h2>
            <p class="year">${movieItems.Year}</p>
            
            </div>
            `
            })

          }
        })
}





