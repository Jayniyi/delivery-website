window.onload = function(){
    window.addEventListener('scroll', function (e){
      if (window.pageYOffset > 100){
        document.querySelector("header").classList.add('is-scrolling');
      } else {
        document.querySelector("header").classList.remove('is-scrolling');
      }
    });
  const menu_btn = document.querySelector('.hamburger');
  
  const mobile_menu = document.querySelector('.mobile-nav');
  menu_btn.addEventListener('click', function () {
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
  });
}

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

ScrollReveal().reveal('.headline');
 ScrollReveal().reveal('.tagline', { delay: 500 });
ScrollReveal().reveal('.punchline', { delay: 500 });
ScrollReveal().reveal('.items');
ScrollReveal().reveal('.sidebar .items', { container: '#sidebar' });
ScrollReveal().reveal('.tagline', { easing: 'ease-in' }, { reset: true }, );

// accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("start");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" activ", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " activ";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();