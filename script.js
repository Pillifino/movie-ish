let movies = [];
​
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