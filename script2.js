// https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=Venom&key=[YOUR_API_KEY]
apiKey = "AIzaSyCGwkC8jggzkEbdPB2xyh_kOo_mcoZbWco";

async function getMovieTrailer() {
    let resultAll = [];
    for (var k = 0; k < 5; k++) {
    let searchResults = await fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=" + movieArray[k].Title + "&key=" + apiKey);
    let search = await searchResults.json();
    resultAll.push(search);
    }
    console.log(resultAll);
}
getMovieTrailer();