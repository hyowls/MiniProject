let movieInfo = []
// input 필드값 지우기
let clearInput =  () =>{
  document.getElementById('search-input').value="";
}
let fetchMovies = () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NjI1NWU1N2NkNDVlZmI1NGUyYTkyOGI1MzYzMWQ3NyIsInN1YiI6IjY2MmEyZTg1ZDRkNTA5MDBiYWUxZDIzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-gz61Tz5WKVvECy0fnKBgP76ma1677m0vxtIz86h2rY'
    }
  }
  return fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => response.json())
} 
fetchMovies()
  .then(response => {
    response.results.forEach(movie => {
        let movieTitle = movie.title
        let movieImage = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        let movieOverview = movie.overview
        let movieId = movie.id
        movieInfo.push({title : movieTitle, image : movieImage, overview : movieOverview, id : movieId})
    });
    // 처음에 모든 영화를 렌더링
    render(movieInfo)
  })
  .catch(err => console.error(err));
console.log(movieInfo)

// 렌더링
let render = (movies) => {
  let addHTML = ''
  if(movies.length === 0 ){
    movies = movieInfo;
  }
  movies.forEach(movie => {
    addHTML += `<div class="m-card" onclick="alertId(${movie.id})" id=${movie.id}>
                  <img src="${movie.image}" alt="" class="m-image">
                  <div class="m-intro">
                    <p>${movie.title}</p>
                    <textarea class="m-view" readonly="readonly">${movie.overview}</textarea>
                  </div>
                </div>`
  });
  document.getElementById('movies').innerHTML = addHTML
}
// alert 아이디 띄우기
let alertId = (id) => {
  alert(`영화 id : ${id}`)
}

// 검색
let searchMovie = ()=>{
  let searchInput = document.getElementById('search-input').value.toLowerCase()
  let filteredMovie = movieInfo.filter(movie => {
    return movie.title.toLowerCase().includes(searchInput);
  })
  if (filteredMovie.length === 0 ){
    alert('해당 영화가 없습니다')
  } else {
    render(filteredMovie)
  }
}
