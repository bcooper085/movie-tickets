// function Movie(movie, rating, runtime, info) {
//   this.movie = movie;
//   this.rating = rating;
//   this.runtime = runtime;
//   this.info = info;
// }
//
// Movie.prototype.fullMovie = function() {
//   return (this.movie + ' ' + this.rating + ' ' + this.runtime + ' ' + this.info);
// }
//
// var superman = new Movie("Superman", "PG-13", "2:10", "This movie is not that good.");
// var batman = new Movie("Batman", "R", "2:25", "This movie is better than Superman.");
// var transformers = new Movie("Transformers", "PG-13", "1:49", "Good luck on this one.");
// var spiderman = new Movie("Spider-Man", "PG-13", "2:05", "You should enjoy this film.")
// var avengers = new Movie("Avengers", "R", "2:15", "This is a good movie, watch it.");

// function myFunction(value) {
//   $('.movieInfo').text('test');
// }


function Ticket(age, showtime, quantity) {
  //this.movieTitle = movieTitle;
  this.age = age;
  this.showtime = showtime;
  //this.price = 0;
  this.quantity = quantity;
}

var price;

Ticket.prototype.calcCost = function() {
  if ((this.age === 1) || (this.age === 3) || (this.showtime === 1) || (this.showtime === 2)) {
    return price = 8 * this.quantity;
  } else {
    return price = 12 * this.quantity;
  }
}



$(function() {
  $('form').submit(function() {
    event.preventDefault();

    var myAge = parseInt($(".ages").val());
    var myShowtime = parseInt($(".times").val());
    var myQuantity = parseInt($("#quantity").val());

    var myTicket = new Ticket(myAge, myShowtime, myQuantity);

    $('#cost').text("The price of your movie is: "  +  "$ " + myTicket.calcCost());

  });
});
