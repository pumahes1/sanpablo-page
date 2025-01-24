// Seleccionamos el menú principal, el ícono del menú y todos los dropdowns
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const dropdownItems = document.querySelectorAll('.dropdown__item');

// Función para cerrar todos los menús desplegables (dropdowns)
const closeAllDropdowns = () => {
  dropdownItems.forEach((item) => {
    item.classList.remove('active'); // Cierra todos los dropdowns
  });
};

// Función para cerrar el menú principal
const closeNavMenu = () => {
  navMenu.classList.remove('show-menu'); // Cierra el menú principal
};

// Evento para mostrar/ocultar el menú principal
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
  });
}

// Manejar clic en cada dropdown
dropdownItems.forEach((item) => {
  const dropdownLink = item.querySelector('.nav__link');

  dropdownLink.addEventListener('click', (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del enlace

    // Alternar el dropdown seleccionado
    if (item.classList.contains('active')) {
      item.classList.remove('active'); // Si ya está abierto, lo cierra
    } else {
      closeAllDropdowns(); // Cierra los demás dropdowns
      item.classList.add('active'); // Abre el dropdown actual
    }
  });
});

// Detectar clic fuera del menú principal y los dropdowns
document.addEventListener('click', (e) => {
  // Si el clic no es en el menú principal ni en los dropdowns
  if (!e.target.closest('.nav__menu') && !e.target.closest('#nav-toggle')) {
    closeNavMenu(); // Cierra el menú principal
    closeAllDropdowns(); // Cierra los dropdowns
  }
});

/*=================== REMOVE MENU MOBILE ====================== */

/*=================== ADD SHADOW HEADER ====================== */
const shadowHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);

/*=================== SWIPER ====================== */
var swiper = new Swiper(".mySwiperGallery", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  initialSlide: 2,
  speed: 600,
  preventClicks: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 80,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
  on: {
    click(event) {
      swiper.slideTo(this.clickedIndex);
    },
  },
  pagination:{
    el:".swiper-pagination",
  },
});

var swiper = new Swiper(".mySwiperDocuments", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  initialSlide: 0,
  speed: 600,
  preventClicks: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 1,
    slideShadows: false,
  },
  on: {
    click(event) {
      swiper.slideTo(this.clickedIndex);
    },
  },
  navigation:{
    nextEl:".swiper-button-next",
    prevEl:".swiper-button-prev",
  }
});

/*=================== Typed ====================== */
var typed = new Typed("#element", {
  strings: ["Formando Futuros Brillantes"],
  typeSpeed: 65,
  showCursor: false,
  cursorChar: "",
});

