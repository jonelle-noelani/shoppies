// const OMDb = "http://www.omdbapi.com/?i=tt3896198&apikey=3c28a15d"
// const OMDb2 = "http://www.omdbapi.com/?s=inception&apikey=3c28a15d"

let form = document.querySelector('form')
form.addEventListener('submit', (e) => e.preventDefault(getValue()))

function getValue() {
    const val = document.querySelector('input').value
    getMovies(val)
}

function getMovies(title){
    console.log(title);
    fetch('http://www.omdbapi.com/?s='+title+'&apikey=3c28a15d')
    .then(res => res.json( ))
    // .then(movies => console.log(movies.Search))
    .then(movies => (movies.Search.map(movie => {
        console.log(movie)
    })))
}

function displayMovies(movie) {

}