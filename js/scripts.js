
// function myFunction(value) {
//   $('.movieInfo').text('test');
// }


function Ticket(age, showtime, quantityA, quantityC, quantityS) {
  //this.movieTitle = movieTitle;
  this.age = age;
  this.showtime = showtime;
  //this.price = 0;
  this.quantityA = quantityA;
  this.quantityC = quantityC;
  this.quantityS = quantityS;
}

var price;

Ticket.prototype.calcCost = function() {
  if ((this.showtime === 1) || (this.showtime === 2)) {
    return price = ((8 * this.quantityC) + (8 * this.quantityS) + (8 * this.quantityA));
  } else {
    return price = ((8 * this.quantityC) + (8 * this.quantityS) + (12 * this.quantityA));
  }
}


function Movie(movieName, rating, runtime, info) {
  this.movieName = movieName;
  this.rating = rating;
  this.runtime = runtime;
  this.info = info;
}
var movieStuff
Movie.prototype.fullMovie = function() {
  if (this.movieName === 1) {
    return  movieStuff = (superman.movieName + ' ' + superman.rating + ' ' + superman.runtime + ' ' + superman.info);
  } else if (this.movieName === 2) {
    return  movieStuff = (batman.movieName + ' ' + batman.rating + ' ' + batman.runtime + ' ' + batman.info);
  } else if (this.movieName === 3) {
    return  movieStuff = (transformers.movieName + ' ' + transformers.rating + ' ' + transformers.runtime + ' ' + transformers.info);
  } else if (this.movieName === 4) {
    return  movieStuff = (spiderman.movieName + ' ' + spiderman.rating + ' ' + spiderman.runtime + ' ' + spiderman.info);
  } else if (this.movieName === 5) {
    return  movieStuff = (avengers.movieName + ' ' + avengers.rating + ' ' + avengers.runtime + ' ' + avengers.info);
  }
}

var superman = new Movie("Superman", "PG-13", "2:10", "This movie is not that good.");
var batman = new Movie("Batman", "R", "2:25", "This movie is better than Superman.");
var transformers = new Movie("Transformers", "PG-13", "1:49", "Good luck on this one.");
var spiderman = new Movie("Spider-Man", "PG-13", "2:05", "You should enjoy this film.")
var avengers = new Movie("Avengers", "R", "2:15", "This is a good movie, watch it.");



$(function() {
  $('form').submit(function() {
    event.preventDefault();

    var myAge = parseInt($(".ages").val());
    var myShowtime = parseInt($(".times").val());
    var myQuantityA = parseInt($("#quantityA").val());
    var myQuantityC = parseInt($("#quantityC").val());
    var myQuantityS = parseInt($("#quantityS").val());
    var myMovie = parseInt($(".names").val());

    var myTicket = new Ticket(myAge, myShowtime, myQuantityA, myQuantityC, myQuantityS);
    var myMovieChoice = new Movie(myMovie, this.rating, this.runtime, this.info);

    $('#cost').text("The price of your movie is: "  +  "$ " + myTicket.calcCost());
    $('.movieInfo').text(myMovieChoice.fullMovie());
    $('.result').show();
    $('.cost').show();
  });
});
