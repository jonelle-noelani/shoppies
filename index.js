const OMDb = "http://www.omdbapi.com/?i=tt3896198&apikey=3c28a15d"

const body = document.querySelector('body')
const p1 = document.createElement('p')

testThis("hello")

function testThis(words){
    p1.innerHTML = words
    body.appendChild(p1)
}

// getMovies(OMDb)

// function getMovies(OMDb){
//     console.log("hello");
    // fetch(OMDb)
    // .then(res => res.json( ))
    // .then(movies => movies.forEach(movie => {
    //     console.log(movie)
    // }))
// }