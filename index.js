const OMDb = "http://www.omdbapi.com/?i=tt3896198&apikey=3c28a15d"
const OMDb2 = "http://www.omdbapi.com/?s=inception&apikey=3c28a15d"

const body = document.querySelector('body')
const p1 = document.createElement('p')

testThis("hello")

function testThis(words){
    p1.innerHTML = words
    body.appendChild(p1)
}

getMovies('inception')

function getMovies(title){
    console.log("hello");
    fetch('http://www.omdbapi.com/?s='+title+'&apikey=3c28a15d')
    .then(res => res.json( ))
    .then(movies => console.log(movies))
    // .then(movies => movies.forEach(movie => {
    //     console.log(movie)
    // }))
}