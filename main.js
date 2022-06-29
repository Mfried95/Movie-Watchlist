const form = document.getElementById("form")
const searchInput = document.getElementById("search")
const results = document.getElementById("results")
const api = '2904de71'



form.addEventListener('submit', e =>{
    e.preventDefault()
    query = searchInput.value
    searchMovie(query)
})



function searchMovie(query){
    fetch(`https://www.omdbapi.com/?s=${query}&apikey=${api}`)
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < query.length; i++) {
            console.log(data.Search[i])
          }
    });
}


