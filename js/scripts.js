function Movie(movie, rating, runtime, info) {
  this.movie = movie;
  this.rating = rating;
  this.runtime = runtime;
  this.info = info;
}

var superman = new Movie("Superman", "PG-13", "2:10", "This movie is not that good.");
var batman = new Movie("Batman", "R", "2:25", "This movie is better than Superman.");
var transformers = new Movie("Transformers", "PG-13", "1:49", "Good luck on this one.");
var spiderman = new Movie("Spider-Man", "PG-13", "2:05", "You should enjoy this film.")
var avengers = new Movie("Avengers", "R", "2:15", "This is a good movie, watch it.");



$(function() {
  ('form.options').submit(function() {
    event.preventDefault();
  })
})
