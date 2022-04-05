let movies = [];

movies = [
    {Title: 'Harry Potter'},
    {Title: 'Space Jam'},
    {Title: 'Shrek'},
    {Title: "Naruto"},
    {Title: "Requiem for a Dream"},
    {Title: "Mother!"},
    {Title: "Star Wars"},
    {Title: "Star Trek"},
    {Title: "Iron Man"},
    {Title: "Crouching Tiger, Hidden Dragon"}
]

var movieArray = []

function randomMovie(movies) {
  // if (doFetch)
  var selectedIndex = [] // Blank array that fills with the random indexes from movie object
  for (var i = 0; i < 5; i++){
      var randomIndex = Math.floor(Math.random() * movies.length) //Random index generator
      if (!selectedIndex.includes(randomIndex)){
        movieArray.push(movies[randomIndex])
        selectedIndex.push(randomIndex); // If The selected index is not a duplicate then we push the random index into selected index
      }else{
        i--; // This removes the duplicate so when the for loop runs again it tries to fill it with a non repeat
      }
  }
  console.log(movieArray)
}

function doFetch() {
        var movieTitle = 'Blade Runner 2049' // Use this to pace the movie title we want in the API URL
        fetch('http://www.omdbapi.com/?apikey=91827673&t=' + movieTitle, {
            method: "get"
        }).then(function (response) {
            return response.json();
        }).then(function (json) {
            // let json = JSON.parse(text);
            console.log(json)
            let data = { Title: json.Title, Plot: json.Plot }
            movies.push(data);
            console.log(movies);
            randomMovie(movies)
        });
    }

    doFetch();