
const form = document.getElementById("form")
const searchInput = document.getElementById("search")
const searchButton = document.getElementById("search-btn")
const api = '2904de71'


let movieList = document.getElementById("movie-list")
let movieTitle = document.getElementById("movie-title")
let queryId = ""


form.addEventListener('submit', e =>{
    e.preventDefault()
    query = searchInput.value
    searchMovie(query)
})

function Refresh() {
    window.parent.location = window.parent.location.href;
}



searchButton.addEventListener("click", function(){
    movieTitle.innerHTML = ""
    query = ""
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
            .then(movie => {
                console.log(movie)
                movieTitle.innerHTML += `
    <div class="movie-container">
            <img src="${movie.Poster}" class="poster">
        <div class="movie-info">
            <h2 class="title">${movie.Title}<p>${movie.imdbRating}</p></h2>
            <p class="year">${movie.Year}</p>
            <p class="plot">${movie.Plot}</p>
            </div>
            
            
            </div>
            
            `
            })
          }
        })
}






// 








//Actors: "Mike Myers, Eddie Murphy, Cameron Diaz"
Awards: "Nominated for 2 Oscars. 18 wins & 52 nominations total"
BoxOffice: "$441,226,247"
Country: "United States"
DVD: "05 Nov 2004"
Director: "Andrew Adamson, Kelly Asbury, Conrad Vernon"
Genre: "Animation, Adventure, Comedy"
Language: "English"
Metascore: "75"
Plot: "Shrek and Fiona travel to the Kingdom of Far Far Away, where Fiona's parents are King and Queen, to celebrate their marriage. When they arrive, they find they are not as welcome as they thought they would be."
Poster: "https://m.media-amazon.com/images/M/MV5BMDJhMGRjN2QtNDUxYy00NGM3LThjNGQtMmZiZTRhNjM4YzUxL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
Production: "N/A"
Rated: "PG"
Ratings: (3) 
Released: "19 May 2004"
Response: "True"
Runtime: "93 min"
Title: "Shrek 2"
Type: "movie"
Website: "N/A"
Writer: "William Steig, Andrew Adamson, Joe Stillman"
Year: "2004"
imdbID: "tt0298148"
imdbRating: "7.3"
imdbVotes: "454,449" 