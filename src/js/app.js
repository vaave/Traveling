const body = document.querySelector('body');
const header = document.querySelector('.header');
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
  body.classList.toggle('lock');
});

window.addEventListener("scroll", function() {
   let scrollPos = window.scrollY;
   
   if (scrollPos > 0) {
      header.classList.add("scroll");
   } else {
      header.classList.remove("scroll");
   };  
});

const accordionItems = document.querySelectorAll('.accordion__item');

accordionItems.forEach(el => {
   el.addEventListener("click", (e) => {
      const self = e.currentTarget;
      const control = self.querySelector('.accordion__control');
      const content = self.querySelector('.accordion__content');

      self.classList.toggle('open');

      if (self.classList.contains('open')) {
         control.setAttribute('aria-expanded', true);
         content.setAttribute('aria-hidden', false);
         content.style.maxHeight = content.scrollHeight + 'px';
      } else {
         control.setAttribute('aria-expanded', false);
         content.setAttribute('aria-hidden', true);
         content.style.maxHeight = null;
      }
   })
});

$(document).ready(function(){
   $('.review__inner').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: false,
      speed: 1500,
      responsive: [
         {
           breakpoint: 1024,
           settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
           }
         },
         {
            breakpoint: 768,
            settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
            }
          },
      ]
   });
});


