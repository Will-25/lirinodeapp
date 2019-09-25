var axios = require("axios");
var moment = require('moment');
var Spotify = require('node-spotify-api');
var fs = require('fs');
moment().format();
require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var input = []
input.push(process.argv[3] || "")
input.push(process.argv[4] || "")
input.push(process.argv[5] || "")
var string = input.toString(); 

switch (command) {
  case "concert-this":
    concert(string);
    break;

  case "spotify-this-song":
    stream(string);
    break;

  case "movie-this":
    movie(string)
    break;

  case "do-what-it-says":
    dowhat();
    break;
}

function concert() {
  
console.log(string)
  

  axios.get("https://rest.bandsintown.com/artists/" + string + "/events?app_id=codingbootcamp").then(
    function (response) {
      var date = moment(response.data[0].datetime).format('MM/DD/YYYY')
      console.log(`----------------
Venue Name: ${response.data[0].venue.name}
Venue Location: ${response.data[0].venue.city}, ${response.data[0].venue.country}
Date: ${date}
                `)
    }
  )
}

function movie(movie) {
  
  axios.get("http://www.omdbapi.com/?t=" + movie + "&apikey=trilogy").then(
    function (response) {
      console.log(`-------------------
Title: ${response.data.Title}
Year: ${response.data.Year}
IMDB Rating: ${response.data.Ratings[0].Value}
Tomatometer: ${response.data.Ratings[1].Value}
Country: ${response.data.Country}
Plot: ${response.data.Plot}
Actors: ${response.data.Actors}
              `)
    })
}

function stream(stream) {
 


 
spotify
  .search({ type: 'track', query: string })
  .then(function(response) {
    console.log(response.tracks.items[0]);
  })
  .catch(function(err) {
    console.log(err);
  });
    }
 

function dowhat() {

  fs.readFile('random.txt', "utf8", function (err, data) {
   
  var newres = data.split(",")
   
    switch (newres[0]) {
      case "concert-this":
        concert(newres[1]);
        break;
    
      case "spotify-this-song":
        stream(newres[1]);
        break;
    
      case "movie-this":
        movie(newres[1]);
        break;
    
      case "do-what-it-says":
        dowhat();
        break;
    }
  }
  )
};

