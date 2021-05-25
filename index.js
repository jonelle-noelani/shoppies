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
        if (movie['Type'] === "movie") {
            displayMovie(movie)
        }
    })))
}

function displayMovie(movie) {
    const searchDiv = document.getElementById('search')
    const movieCard = document.createElement('div')
    movieCard.className = "movieCard"

    let h4 = document.createElement('h4')
    h4.textContent = movie['Title']

    let p = document.createElement('p')
    p.textContent = movie['Year']

    movieCard.append(h4, p)
    searchDiv.append(movieCard)
    //
    const nomBtn = document.createElement('button')
    nomBtn.innerText = 'Nominate'
    movieCard.append(nomBtn)
    nomBtn.addEventListener('click', (e) => e.preventDefault(console.log(movie)))
}