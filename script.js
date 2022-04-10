// Variables to populate Movie Titles and Plots
let firstMovie = document.querySelector("#firstMovie");
let firstPlot = document.querySelector("#firstPlot");

let secondMovie = document.querySelector("#secondMovie");
let secondPlot = document.querySelector("#secondPlot");

let thirdMovie = document.querySelector("#thirdMovie");
let thirdPlot = document.querySelector("#thirdPlot");

let fourthMovie = document.querySelector("#fourthMovie");
let fourthPlot = document.querySelector("#fourthPlot");

let fifthMovie = document.querySelector("#fifthMovie");
let fifthPlot = document.querySelector("#fifthPlot");

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
    {Ttile: "Batman"},
    {Title: "Cast Away"}, // good
    {Title: "Goodfellas"}, // good
    {Title: "Pulp Fiction"}, // good
    {Title: "The Godfather"}, // good
    {Title: "Blades of Glory"}, // good
    {Title: "Fast and the Furions"},
    {Title: "The Room"}, // good
    {Title: "Catwoman"}, // good
    {Title: "Shaolin Soccer"} // good
]

// Blank Array to store randonly generated movies
var movieArray = [];

// Function that selects random movies from object
function randomMovie(movies) {
  var selectedIndex = [] // Blank array that fills with the random indexes from movie object
  for (var i = 0; i < 5; i++){
      var randomIndex = Math.floor(Math.random() * movies.length); //Random index generator
      if (!selectedIndex.includes(randomIndex)) {
        movieArray.push(movies[randomIndex]);
        selectedIndex.push(randomIndex); // If The selected index is not a duplicate then we push the random index into selected index
      }else{
        i--; // This removes the duplicate so when the for loop runs again it tries to fill it with a non repeat
      }
  }
  console.log(movieArray);
}


  // Async function that allows moive data such as plot and title to be extracted from OMDb site
  async function doFetchTitle() {
    randomMovie(movies);
    let resAll = [];
    for (var j = 0; j < 5; j++) {
      let res = await fetch('http://www.omdbapi.com/?apikey=91827673&t=' + movieArray[j].Title);
      let result = await res.json();
      movieArray[j]["Plot"] = result.Plot;
      console.log(result);
      resAll.push(result);
    }
    console.log(resAll);
    firstMovie.textContent = movieArray[0].Title;
    firstPlot.textContent = movieArray[0].Plot;

    secondMovie.textContent = movieArray[1].Title;
    secondPlot.textContent = movieArray[1].Plot;

    thirdMovie.textContent = movieArray[2].Title;
    thirdPlot.textContent = movieArray[2].Plot;

    fourthMovie.textContent = movieArray[3].Title;
    fourthPlot.textContent = movieArray[3].Plot;

    fifthMovie.textContent = movieArray[4].Title;
    fifthPlot.textContent = movieArray[4].Plot;
}
doFetchTitle();

// API Keys for YouTube
  // API 1
// apiKey = "AIzaSyA6E94THYRkVvoGS9Fn3oee3kBBs6F_Nog";
  // API 2
// apiKey = "AIzaSyAE9pVyupEWgksOqzi0Ing5lRradWf4WcU";
  // API 3
// apiKey = "AIzaSyCGwkC8jggzkEbdPB2xyh_kOo_mcoZbWco";
  // API 4
// apiKey = "AIzaSyBauMJm8oz-n41rJ5UUTV3_hVuLZT_SEX0";

// Asyn function that allows us to access YouTube Data API to extract videos 
async function getMovieTrailer() {
    let resultAll = [];
    for (var k = 0; k < 5; k++) {
    let searchResults = await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=" + encodeURIComponent(`${movieArray[k].Title} Trailer`)
     + "&key=" + apiKey);
    let search = await searchResults.json();
    resultAll.push(search);
    }
    for (var i = 0; i < resultAll.length; i++) {
      console.log(resultAll);
      var videoId = resultAll[i].items[Math.floor(Math.random() * resultAll[i].items.length)].id.videoId;
      selectedVideoId.push(videoId);
      console.log(selectedVideoId);
      // var searchItems = resultAll[i].items
      // var {items} = resultAll[i]; //object destructuring 
      // console.log(items);
      //   for (var j = 0; i < items.length; i++) {
      //   var {videoId} = items[i].id; //object destructuring
      //   console.log(videoId);
      //   }
      }
    console.log(resultAll);
}
getMovieTrailer();

// //Embedded Player
// loadVideoById({'videoId': videoId,
//                'startSeconds': 5,
//                'endSeconds': 60});

// Local Storage Item to store videoId and be extracted
localStorage.setItem("videoId", JSON.stringify(videoId))
var videolayerID = JSON.parse(localStorage.getItem('videoId'));
console.log(videolayerID);