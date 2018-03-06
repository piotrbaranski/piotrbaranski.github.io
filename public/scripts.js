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

function toggleMenu() {
  var item = document.getElementById('menu');
  if (item.className === 'hidden') {
    item.classList.remove('hidden');
    item.classList.add('show');
  } else {
    item.classList.remove('show');
    item.classList.add('hidden');
  }
}

function turnOffHamburger() {
  var windowWidth = window.innerWidth;
  var item = document.getElementById('menu');
  if (windowWidth > 767) {
    item.classList.remove('hidden', 'show');
  }
}

function turnOnHamburger() {
  var windowWidth = window.innerWidth;
  var item = document.getElementById('menu');
  if (windowWidth <= 767) {
    item.classList.add('hidden');
  }
}

function changeClass() {
  var hamburger = document.getElementById('burger-nav');
  hamburger.onclick = toggleMenu;
}


window.onload = function () {
  changeClass();
  turnOffHamburger();
}

window.onresize = function () {
  turnOffHamburger();
  turnOnHamburger()
}