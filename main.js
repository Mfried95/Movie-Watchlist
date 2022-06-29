const form = document.getElementById("form")
const search = document.getElementById("search")
const results = document.getElementById("results")
const api = '2904de71'



form.addEventListener('submit', e =>{
    e.preventDefault()
    query = search.value
    searchMovie(query)
})



function searchMovie(query){
    fetch(`https://www.omdbapi.com/?s=${query}&apikey=${api}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
    });
}


