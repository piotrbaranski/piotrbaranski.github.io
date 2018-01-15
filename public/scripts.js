$("#contact-button").click(function () {
  $('html, body').animate({
    scrollTop: $("#contact").offset().top
  }, 1000);
});

$("#learn-more-button").click(function () {
  $('html, body').animate({
    scrollTop: $("#skills").offset().top
  }, 1000);
});


setInterval(function () {
  $('.learn-more').toggleClass('toggle', 1000);
}, 2000);
