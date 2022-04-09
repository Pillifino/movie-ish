let movies = [];

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
    {Ttile: "Hitman"},
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

var movieArray = [];

function randomMovie(movies) {
  // if (doFetch)
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
  
  async function doFetchTitle() {
    randomMovie(movies);
    let resAll = [];
    for (var j = 0; j < 5; j++) {
      let res = await fetch('http://www.omdbapi.com/?apikey=91827673&t=' + movieArray[j].Title);
      let result = await res.json();
      console.log(result);
      resAll.push(result);
    }
    console.log(resAll);
}
doFetchTitle();

// https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=Venom&key=[YOUR_API_KEY]
// https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key={YOUR
apiKey = "AIzaSyCGwkC8jggzkEbdPB2xyh_kOo_mcoZbWco";

async function getMovieTrailer() {
    let resultAll = [];
    for (var k = 0; k < 5; k++) {
    let searchResults = await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q" + movieArray[k].Title + "&key=" + apiKey);
    let search = await searchResults.json();
    resultAll.push(search);
    }
    console.log(resultAll);
}
getMovieTrailer();