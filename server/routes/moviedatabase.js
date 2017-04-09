var express = require('express');
var mongoose = require('mongoose');

var router = express.Router();

var MovieSchema = mongoose.Schema(
  {
      Title: String,
      Year: Number,
      Rated: String,
      Released: String,
      Runtime: String,
      Genre: String,
      Director: String,
      Writer: String,
      Actors: String,
      Plot: String,
      Language: String,
      Country: String,
      Awards: String,
      Poster: String,
      Ratings: Array,
      Metascore: String,
      imdbRating: String,
      imdbVotes: String,
      imdbID: String,
      Type: String,
      BoxOffice: String,
      Production: String,
      Website: String,
  }
);

var Movie = mongoose.model('movie', MovieSchema, 'movies');

router.get('/collection', function (req, res) {
  Movie.find({},function (err, movieCollection) {
    if (err) {
      res.send(err);
    }
    console.log(movieCollection);
    res.send(movieCollection);
  });
});

router.post('/collection/add', function (req, res) {
  var movieToAdd = new Movie( {
    Title: req.body.Title,
    Year: parseInt( req.body.Year),
    Rated: req.body.Rated,
    Released: req.body.Released,
    Runtime: req.body.Runtime,
    Genre: req.body.Genre,
    Director: req.body.Director,
    Writer: req.body.Writer,
    Actors: req.body.Actors,
    Plot: req.body.Plot,
    Language: req.body.Language,
    Country: req.body.Country,
    Awards: req.body.Awards,
    Poster: req.body.Poster,
    Ratings: req.body.Ratings,
    Metascore: req.body.Metascore,
    imdbRating: req.body.imdbRating,
    imdbVotes: req.body.imdbVotes,
    imdbID: req.body.imdbID,
    Type: req.body.Type,
    BoxOffice: req.body.BoxOffice,
    Production: req.body.Production,
    Website: req.body.Website,
  });

  movieToAdd.save(function (err, savedMovie) {
    if (err) {
      res.send(err);
    }
    res.send(savedMovie);
  });
});

router.delete('/collection/delete/:id', function (req, res) {
  var id = req.params.id;
  Movie.findByIdAndRemove(id, function (err, deletedMovie) {
    if (err) {
      res.send(err);
    }
    res.send(deletedMovie);
  });
});

module.exports = router;
