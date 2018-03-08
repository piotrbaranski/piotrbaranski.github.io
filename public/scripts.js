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

$('a:not(#burger-nav)').click(function () {
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 1000);
  return false;
});

setInterval(function () {
  $('.learn-more').toggleClass('toggle', 1000);
}, 2000);

function topButtonFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    $('#top-button').addClass('active');
  } else {
    $('#top-button').removeClass('active');
  }
}

function displayMenu() {
  var menu = document.getElementById('menu');
  if (menu.className === 'hidden') {
    menu.classList.remove('hidden');
    menu.classList.add('show');
  } else {
    menu.classList.remove('show');
    menu.classList.add('hidden');
  }
}

function displayHamburger() {
  var windowWidth = window.innerWidth;
  var menu = document.getElementById('menu');
  windowWidth > 767 ? menu.classList.remove('hidden', 'show') : menu.classList.add('hidden');
}

function changeMenuClass() {
  var hamburger = document.getElementById('burger-nav');
  hamburger.onclick = displayMenu;
}

window.onload = function () {
  changeMenuClass();
  displayHamburger();
}

window.onresize = displayHamburger;

window.onscroll = topButtonFunction;