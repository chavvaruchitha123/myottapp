// api keys from tmdb
const api="api_key=406c0f1cbc5247356141b20d1ef703e1"
// base url of the site 
const base_url="https://api.themoviedb.org/3"
const banner_url="https://image.tmdb.org/t/p/original"
 const img_url="https://image.tmdb.org/t/p/w300"


// requests for movies data
const requests={
    fetchTrending:`${base_url}/trending/all/week?${api}&language=en-US`, 
    fetchNetflixOriginals:`${base_url}/discover/tv?${api}&with_networks=213`,
    fetchActionMovies:`${base_url}/discover/movie?${api}&with_genres=28`,
    fetchComedyMovies:`${base_url}/discover/movie?${api}&with_genres=35`,
    fetchHorrorMovies:`${base_url}/discover/movie?${api}&with_genres=27`,
    fetchRomanceMovies:`${base_url}/discover/movie?${api}&with_genres=10749`,
    fetchDocumentaries:`${base_url}/discover/movie?${api}&with_genres=99`,
    searchOnYoutube: (query) => `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=AIzaSyA_eZ5WJhmYhRQOM8-jAyVIzzdfWUlp_P0`
    }







    let currentMovieIndex = 0;
const bannerInterval = 5000; // Interval between banner transitions in milliseconds

function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}


function updateBanner(movie) {
    const banner = document.getElementById("banner");
    const bannerTitle = document.getElementById("banner-title");
    const bannerDesc = document.getElementById("banner-description");

    banner.style.backgroundImage = "url(" + banner_url + movie.backdrop_path + ")";
    bannerDesc.innerText = truncate(movie.overview, 150);
    bannerTitle.innerText = movie.name;
}

// Function to change banner to the next movie
function changeBanner() {
    fetch(requests.fetchNetflixOriginals)
        .then((res) => res.json())
        .then((data) => {
            const movies = data.results;
            const nextMovieIndex = (currentMovieIndex + 1) % movies.length;
            const nextMovie = movies[nextMovieIndex];
            updateBanner(nextMovie);
            currentMovieIndex = nextMovieIndex;
        })
        .catch((error) => {
            console.error("Error fetching movies:", error);
        });
}

// Initial banner setup
fetch(requests.fetchNetflixOriginals)
    .then((res) => res.json())
    .then((data) => {
        const movies = data.results;
        updateBanner(movies[currentMovieIndex]);
        setInterval(changeBanner, bannerInterval); // Start the carousel
    })
    .catch((error) => {
        console.error("Error fetching movies:", error);
    });


// Function to create a movie element with title
function createMovieElement(movie) {
  const movieElement = document.createElement("div");
  movieElement.className = "movie";

  const poster = document.createElement("img");
  poster.className = "rowposterlarge";
  poster.src = img_url + movie.backdrop_path;
  movieElement.appendChild(poster);

  const title = document.createElement("p");
  title.className = "movie-title";
  title.innerText = movie.title || movie.name; // Use title or name based on the API response
  movieElement.appendChild(title);

  return movieElement;
}

// Fetch and display movies with titles
fetch(requests.fetchNetflixOriginals)
.then((res) => res.json())
.then((data) => {
  const headrow = document.getElementById("headrow");
  const row = document.createElement("div");
  row.className = "row netflixrow";
  headrow.appendChild(row);

  const title = document.createElement("h2");
  title.className = "row-title";
  title.innerText = "NETFLIX ORIGINALS";
  row.appendChild(title);

  const rowposter = document.createElement("div");
  rowposter.className = "rowposter";
  row.appendChild(rowposter);

  data.results.forEach((movie) => {
      const movieElement = createMovieElement(movie);
      rowposter.appendChild(movieElement);
  });
})
.catch((error) => {
  console.error("Error fetching Netflix Originals:", error);
});

// trending
// top rated

// Function to create a movie element with title
function createMovieElement(movie) {
  const movieElement = document.createElement("div");
  movieElement.className = "movie";

  const poster = document.createElement("img");
  poster.className = "rowposterlarge";
  poster.src = img_url + movie.backdrop_path;
  movieElement.appendChild(poster);

  const title = document.createElement("p");
  title.className = "movie-title";
  title.innerText = movie.title || movie.name; // Use title or name based on the API response
  movieElement.appendChild(title);

  return movieElement;
}

// Fetch and display top-rated movies
fetch(requests.fetchTrending)
.then((res) => res.json())
.then((data) => {
  const headrow = document.getElementById("headrow");
  const row = document.createElement("div");
  row.className = "row";
  headrow.appendChild(row);

  const title = document.createElement("h2");
  title.className = "row-title";
  title.innerText = "TOP RATED";
  row.appendChild(title);

  const rowposter = document.createElement("div");
  rowposter.className = "rowposter";
  row.appendChild(rowposter);

  data.results.forEach((movie) => {
      const movieElement = createMovieElement(movie);
      rowposter.appendChild(movieElement);
  });
})
.catch((error) => {
  console.error("Error fetching Top Rated movies:", error);
});

// action


// Function to create a movie element with title
function createMovieElement(movie) {
  const movieElement = document.createElement("div");
  movieElement.className = "movie";

  const poster = document.createElement("img");
  poster.className = "rowposterlarge";
  poster.src = img_url + movie.backdrop_path;
  movieElement.appendChild(poster);

  const title = document.createElement("p");
  title.className = "movie-title";
  title.innerText = movie.title || movie.name; // Use title or name based on the API response
  movieElement.appendChild(title);

  return movieElement;
}

// Fetch and display action movies
fetch(requests.fetchActionMovies)
.then((res) => res.json())
.then((data) => {
  const headrow = document.getElementById("headrow");
  const row = document.createElement("div");
  row.className = "row";
  headrow.appendChild(row);

  const title = document.createElement("h2");
  title.className = "row-title";
  title.innerText = "ACTION MOVIES";
  row.appendChild(title);

  const rowposter = document.createElement("div");
  rowposter.className = "rowposter";
  row.appendChild(rowposter);

  data.results.forEach((movie) => {
      const movieElement = createMovieElement(movie);
      rowposter.appendChild(movieElement);
  });
})
.catch((error) => {
  console.error("Error fetching Action movies:", error);
});


// comedy

// Function to create a movie element with title
function createMovieElement(movie) {
  const movieElement = document.createElement("div");
  movieElement.className = "movie";

  const poster = document.createElement("img");
  poster.className = "rowposterlarge";
  poster.src = img_url + movie.backdrop_path;
  movieElement.appendChild(poster);

  const title = document.createElement("p");
  title.className = "movie-title";
  title.innerText = movie.title || movie.name; // Use title or name based on the API response
  movieElement.appendChild(title);

  return movieElement;
}

// Fetch and display comedy movies
fetch(requests.fetchComedyMovies)
.then((res) => res.json())
.then((data) => {
  const headrow = document.getElementById("headrow");
  const row = document.createElement("div");
  row.className = "row";
  headrow.appendChild(row);

  const title = document.createElement("h2");
  title.className = "row-title";
  title.innerText = "COMEDY MOVIES";
  row.appendChild(title);

  const rowposter = document.createElement("div");
  rowposter.className = "rowposter";
  row.appendChild(rowposter);

  data.results.forEach((movie) => {
      const movieElement = createMovieElement(movie);
      rowposter.appendChild(movieElement);
  });
})
.catch((error) => {
  console.error("Error fetching Comedy movies:", error);
});




// horror
// Function to create a movie element with title
function createMovieElement(movie) {
  const movieElement = document.createElement("div");
  movieElement.className = "movie";

  const poster = document.createElement("img");
  poster.className = "rowposterlarge";
  poster.src = img_url + movie.backdrop_path;
  movieElement.appendChild(poster);

  const title = document.createElement("p");
  title.className = "movie-title";
  title.innerText = movie.title || movie.name; // Use title or name based on the API response
  movieElement.appendChild(title);

  return movieElement;
}

// Fetch and display horror movies
fetch(requests.fetchHorrorMovies)
.then((res) => res.json())
.then((data) => {
  const headrow = document.getElementById("headrow");
  const row = document.createElement("div");
  row.className = "row";
  headrow.appendChild(row);

  const title = document.createElement("h2");
  title.className = "row-title";
  title.innerText = "HORROR MOVIES";
  row.appendChild(title);

  const rowposter = document.createElement("div");
  rowposter.className = "rowposter";
  row.appendChild(rowposter);

  data.results.forEach((movie) => {
      const movieElement = createMovieElement(movie);
      rowposter.appendChild(movieElement);
  });
})
.catch((error) => {
  console.error("Error fetching Horror movies:", error);
});

// romance

// Function to create a movie element with title
function createMovieElement(movie) {
  const movieElement = document.createElement("div");
  movieElement.className = "movie";

  const poster = document.createElement("img");
  poster.className = "rowposterlarge";
  poster.src = img_url + movie.backdrop_path;
  movieElement.appendChild(poster);

  const title = document.createElement("p");
  title.className = "movie-title";
  title.innerText = movie.title || movie.name; // Use title or name based on the API response
  movieElement.appendChild(title);

  return movieElement;
}

// Fetch and display romance movies
fetch(requests.fetchRomanceMovies)
.then((res) => res.json())
.then((data) => {
  const headrow = document.getElementById("headrow");
  const row = document.createElement("div");
  row.className = "row";
  headrow.appendChild(row);

  const title = document.createElement("h2");
  title.className = "row-title";
  title.innerText = "ROMANCE MOVIES";
  row.appendChild(title);

  const rowposter = document.createElement("div");
  rowposter.className = "rowposter";
  row.appendChild(rowposter);

  data.results.forEach((movie) => {
      const movieElement = createMovieElement(movie);
      rowposter.appendChild(movieElement);
  });
})
.catch((error) => {
  console.error("Error fetching Romance movies:", error);
});



// documentry



// Function to create a movie element with title
// function createMovieElement(movie) {
//     const movieElement = document.createElement("div");
//     movieElement.className = "movie";

//     const poster = document.createElement("img");
//     poster.className = "rowposterlarge";
//     poster.src = img_url + movie.backdrop_path;
//     movieElement.appendChild(poster);

//     const title = document.createElement("p");
//     title.className = "movie-title";
//     title.innerText = movie.title || movie.name; // Use title or name based on the API response
//     movieElement.appendChild(title);

//     return movieElement;
// }

// // Fetch and display documentary movies
// fetch(requests.fetchDocumentaries)
// .then((res) => res.json())
// .then((data) => {
//     const headrow = document.getElementById("headrow");
//     const row = document.createElement("div");
//     row.className = "row";
//     headrow.appendChild(row);

//     const title = document.createElement("h2");
//     title.className = "row-title";
//     title.innerText = "DOCUMENTARIES";
//     row.appendChild(title);

//     const rowposter = document.createElement("div");
//     rowposter.className = "rowposter";
//     row.appendChild(rowposter);

//     data.results.forEach((movie) => {
//         const movieElement = createMovieElement(movie);
//         rowposter.appendChild(movieElement);
//     });
// })
// .catch((error) => {
//     console.error("Error fetching Documentary movies:", error);
// });



 