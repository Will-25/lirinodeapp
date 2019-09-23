var axios = require("axios");
require("dotenv").config();
var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var input = process.argv[3];

switch (command) {
    case "concert-this":
        concert();
      break;
    
    case "spotify-this-song":
        stream();
      break;
    
    case "movie-this":
       movie(); 
      break;
    
    case "do-what-it-says":
      dowhat();
      break;
    }

    function concert() {

    }
    
    function movie() {
        axios.get("http://www.omdbapi.com/?t=" + input + "&apikey=trilogy").then(
            function(response) {
              console.log("Title: " + response.data.Title);
              console.log("Year: " + response.data.Year);
              console.log("The IMDB rating is: " + response.data.Ratings[0].Value);
              console.log("The Rotten Tomatoes score is: " + response.data.Ratings[1].Value);
              console.log("This movie was made in: " + response.data.Country) 
              console.log("The plot of this movie is: " + response.data.Plot)
              console.log("This movie starred: " + response.data.Actors)
            })
    }

    function stream() {

    }

    function dowhat() {

    }