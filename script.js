// DOM Variables to populate Movie Titles and Plots
let firstMovie = document.querySelector("#firstMovie");
let firstPlot = document.querySelector("#firstPlot");

let secondMovie = document.querySelector("#secondMovie");
let secondPlot = document.querySelector("#secondPlot");

let thridMovie = document.querySelector("#thirdMovie");
let thirdPlot = document.querySelector("#thirdPlot");

let fourthMovie = document.querySelector("#fourthMovie");
let fourthPlot = document.querySelector("#fourthPlot");

let fifthMovie = document.querySelector("#fifthMovie");
let fifthPlot = document.querySelector("#fifthPlot");

let displayedVideo = document.querySelector("#ytplayer1");

let iframeArray = document.querySelectorAll("iframe");

// Empty Array for Movies
let movies = [];

// Object that holds Title of movies
movies = [
    {Title: 'Harry Potter'}, // good
    {Title: 'Space Jam'}, // good
    {Title: 'Shrek'}, // good
    {Title: "Naruto"}, // good
    {Title: "Requiem for a Dream"}, // good
    {Title: "Mother!"}, // good
    {Title: "Star Wars"}, // good
    {Title: "Star Trek"}, // good
    {Title: "Iron Man"}, // good
    {Title: "Crouching Tiger, Hidden Dragon"}, // good
    {Title: "Cast Away"}, // good
    {Title: "Goodfellas"}, // good
    {Title: "Pulp Fiction"}, // good
    {Title: "The Godfather"}, // good
    {Title: "Blades of Glory"}, // good
    {Title: "Fast and the Furious"}, // good
    {Title: "The Room"}, // good
    {Title: "Catwoman"}, // good
    {Title: "Shaolin Soccer"}, // good
    {Title: "The Shawshank Redemption"},
    {Title: "Schindler's List"},
    {Title: "Raging Bull"},
    {Title: "Casablanca"},
    {Title: "Citizen Kane"},
    {Title: "Vertigo"},
    {Title: "The Godfather: Part II"},
    {Title: "Forrest Gump"},
    {Title: "12 Angry Men"},
    {Title: "2001: A Space Odyssey"},
    {Title: "The Silence of the Lambs"},
    {Title: "Chinatown"},
    {Title: "The Bridge on the River Kwai"},
    {Title: "Singin' in the Rain"},
    {Title: "It's a Wonderful Life"},
    {Title: "Some Like It Hot"},
    {Title: "Apocalypse Now"},
    {Title: "Amadeus"},
    {Title: "Gladiator"},
    {Title: "A Clockwork Orange"},
    {Title: "Patton"},
    {Title: "The Good, the Bad and the Ugly"},
]

// API Keys for YouTube
  // API 1
  apiKey = "AIzaSyA6E94THYRkVvoGS9Fn3oee3kBBs6F_Nog";
  // API 2
// apiKey = "AIzaSyAE9pVyupEWgksOqzi0Ing5lRradWf4WcU";
  // API 3
// apiKey = "AIzaSyCGwkC8jggzkEbdPB2xyh_kOo_mcoZbWco";
  // API 4
// apiKey = "AIzaSyBauMJm8oz-n41rJ5UUTV3_hVuLZT_SEX0";
  // API 5
// apiKey = "AIzaSyATrXkKZS2DC7zkO4mN9TmPgRacw327OLs";
  // API Key 6
// apiKey = "AIzaSyCGwkC8jggzkEbdPB2xyh_kOo_mcoZbWco";

// Function that selects random movies from object
function randomMovie() {
  var movieArray = [];
  var selectedIndex = []; // Blank array that fills with the random indexes from movie object
  for (var i = 0; i < 5; i++){
      var randomIndex = Math.floor(Math.random() * movies.length); //Random index generator
      if (!selectedIndex.includes(randomIndex)) {
        movieArray.push(movies[randomIndex]);
        selectedIndex.push(randomIndex); // If The selected index is not a duplicate then we push the random index into selected index
      }else{
        i--; // This removes the duplicate so when the for loop runs again it tries to fill it with a non repeat
      }
  }
  return movieArray;
}

// Async function that allows moive data such as plot and title to be extracted from OMDb site
async function doFetchTitle(movieArray) {
  let resAll = [];
  for (var j = 0; j < 5; j++) {
    let res = await fetch('https://www.omdbapi.com/?apikey=91827673&t=' + movieArray[j].Title);
    let result = await res.json();
    movieArray[j]["Plot"] = result.Plot;
    resAll.push(result);
  }
  return resAll;
}

// Function to render both movie title and plots
function renderMovieTitle(movieArray) {
  var movieTitleBoxes = document.querySelectorAll('.movieTitle');
  var moviePlotBoxes = document.querySelectorAll('.moviePlot');
  for(var i = 0; i < movieArray.length; i++){
      movieTitleBoxes[i].textContent = movieArray[i].Title;
      moviePlotBoxes[i].textContent = movieArray[i].Plot;
  }
}

// Function to loop through trailers for each random movie 
function playTrailer(selectedID, index) {
  iframeArray[index].src = "https://www.youtube.com/embed/" + selectedID + "?autoplay=1&origin=http://example.com";
  
}

// Function to retrieve video data from youtube
async function getMovieTrailer(movieArray) {
  let resultAllVideoId = [];
  for (var i = 0; i < 5 ; i++) {
  let searchResults = await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=" + encodeURIComponent(`${movieArray[i].Title} Trailer`)
   + "&key=" + apiKey);
  let movie = await searchResults.json();
  resultAllVideoId.push(movie.items[0].id.videoId);
  }
  console.log("==== all video ID ====",resultAllVideoId);
  for(var i = 0; i < resultAllVideoId.length; i++){
      playTrailer(resultAllVideoId[i], i)
  }
}

// Function to reload the page
function refreshPage(){
  window.location.reload();
}

// Function to initialize all functions in sync
function init(){
  var movieArray = randomMovie();
  doFetchTitle(movieArray)
  .then(function(movieArray){
      renderMovieTitle(movieArray);
      getMovieTrailer(movieArray);
  })
}
init();

// Our Old code that helped us on this Journey

// // Locally storing the movies 
// // localStorage.setItem("movieArray", JSON.stringify(movieArray[0].Title));

// // Grabs videoId from search results
// async function getVideoID(idFromApi){
//   localStorage.setItem("selectedID", JSON.stringify(idFromApi))
//   var videolayerID = JSON.parse(localStorage.getItem('selectedId'));
//   console.log(videolayerID)
//   if (videolayerID) {
//     selectedID = videolayerID;
//   }
//   console.log(selectedID);
// }
// // getVideoID();

// // // Asyn function that allows us to access YouTube Data API to extract videos
// // let selectedID = '' // variable that holds json response for video ID
// // async function getMovieTrailer(getVideoID) {
// //     let resultAll = [];
// //     for (var k = 0; k < 1 ; k++) {
// //     let searchResults = await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=" + encodeURIComponent(`${movieArray[k].Title} Trailer`)
// //      + "&key=" + apiKey);
// //     let search = await searchResults.json();
// //     resultAll.push(search);
// //     console.log(search)
// //     }
// //     for (var i = 0; i < resultAll.length; i++) {
// //       // console.log(resultAll);
// //       // selectedVideoId = [];
// //       // var videoId = resultAll[i].items[Math.floor(Math.random() * resultAll[i].items.length)].id.videoId;
// //       // selectedVideoId.push(videoId);
// //       // console.log(selectedVideoId);
// //       // var searchItems = resultAll[i].items;
// //       var {items} = resultAll[i]; //object destructuring
// //       console.log(items);
// //         for (var i = 0; i < items.length; i++) {
// //         var {videoId} = items[i].id; //object destructuring
// //         console.log(videoId);
// //         localStorage.setItem("selectedID", JSON.stringify(videoId));
// //         var videolayerID = JSON.parse(localStorage.getItem('selectedID'));
// //         console.log(videolayerID)
// //         if (videolayerID) {
// //         selectedID = videolayerID;
// //         }
// //         console.log(selectedID);
// //         playTrailer(selectedID);
// //         //selectedID = videoId // used to replace video ID in url of embedded video API
// //         }
// //       }
// //     console.log(resultAll);
// // }
// // getMovieTrailer();

// // Function to reload the page
// function refreshPage() {
//   window.location.reload();
// }



// //pull video ID data from index 0 of each search result for 5 random mmovies



// let movieResultArray = [];
// function movieResults(movie) {
//   fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=" + encodeURIComponent(`${movie} Trailer`)
//   + "&key=" + apiKey).then(function(response) {
//     return response.json()
//   }) .then(function(response) {
//     console.log(response.items[0].id.videoId);
//     return response.items[0].id.videoId;
//   }) .then(function(response){
//     let movieId = response;
//     let plot = doFetchTitle(movie);
//     return {plot, movieId};
//   })
//      .then(function(response) {
//     let movieObject = {
//       title: movie,
//       plot: response.plot,
//       movieId: response.movieId
//     }
//     movieResultArray.push(movieObject);
//     // movieResultArray.push(response);
//   }) .then (function(response) {
//     console.log(movieResultArray);
//     playTrailer(movieResultArray);
//   })

//   // let search = await searchResults.json();
//   //   resultAll.push(search);
//   //   console.log(search)
// }


// function movieIdGenerator() {
//   console.log(movieArray[0]);
//   for (i = 0; i < movieArray.length; i++) {
//     var movieID = movieResults(movieArray[i].Title);
//     console.log(movieID);
// }
//   console.log(movieResultArray);
// }
// randomMovie(movies);
// movieIdGenerator();

// // Event Listener to play trailer
// // firstMovie.addEventListener('click', playTrailer)

// // Display selected trailer under movie
// // function displaySelectedTrailer(){
// //   displayedVideo.textContent("https://www.youtube.com/embed/" + videoId + "?autoplay=1&origin=http://example.com");
// // }


// // pull video ID data from index 0 of each search result from 5 random movies
// // >>>>>>> a2860a56489387e83e1328b7de7e1cdf746da709
// // >>>>>>> f2f7308eb8da20a9103c68a2f0ae50d33c8598ca

// // // Local storage and JSON of randomized movies
// // localStorage.setItem("videoId", JSON.stringify(videoId));
// // var videolayerID = JSON.parse(localStorage.getItem('videoId'));
// // console.log(videolayerID);
