var axios = require("axios");
var moment = require('moment');
var Spotify = require('node-spotify-api');
moment().format();
require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var command = process.argv[2];


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
  var artist = process.argv[3];
  axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
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

function movie() {
  var movie = process.argv[3];
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

function stream() {

}

function dowhat() {

}

  