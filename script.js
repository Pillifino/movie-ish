let movies = [];

movies = [
    {Title: 'Harry Potter'},
    {Title: 'Space Jam'},
    {Title: 'Shrek'},
    
]

function doFetch() {
        fetch('http://www.omdbapi.com/?apikey=91827673', {
            method: "get"
        }).then(function (response) {
            return response.text();
        }).then(function (text) {
            let json = JSON.parse(text);
            let data = { Title: json.Title, Plot: json.Plot }
            movies.push(data);
            console.log(movies);
        });
    }

    doFetch();