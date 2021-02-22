

let menu_button = document.querySelector('.header__burger');
let menu_itself = document.querySelector('.header__menu');
let menu_list = document.querySelector('.header__list');
let body = document.querySelector('body');

menu_button.onclick = function() {
  menu_button.classList.toggle('active');
  menu_itself.classList.toggle('active');
};

menu_list.onclick = function() {
  menu_button.classList.toggle('active');
  menu_itself.classList.toggle('active');
};

    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    });;
/*с подключением библиотеки jquery:

$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

// закрытие меню при клике на ссылку
$(document).ready(function() {
    $('.header__list').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});*/



var swiper = new Swiper('.swiper-container', {
  centeredSlides: true,
      autoplay: {
        delay: 10000,
        disableOnInteraction: false,
      },
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Закройте выпадающее меню, если пользователь щелкает за его пределами
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };;
  
  
  function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show2");
  };
  
  // Закройте выпадающее меню, если пользователь щелкает за его пределами
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn2')) {
      var dropdowns2 = document.getElementsByClassName("dropdown-content2");
      var i;
      for (i = 0; i < dropdowns2.length; i++) {
        var openDropdown2 = dropdowns2[i];
        if (openDropdown2.classList.contains('show2')) {
          openDropdown2.classList.remove('show2');
        }
      }
    }
  };;
  
  function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show3");
  };
  
  // Закройте выпадающее меню, если пользователь щелкает за его пределами
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn3')) {
      var dropdowns3 = document.getElementsByClassName("dropdown-content3");
      var i;
      for (i = 0; i < dropdowns3.length; i++) {
        var openDropdown3 = dropdowns3[i];
        if (openDropdown3.classList.contains('show3')) {
          openDropdown3.classList.remove('show3');
        }
      }
    }
  };;
  