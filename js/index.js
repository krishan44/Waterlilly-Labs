var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // tailwind.config.js
module.exports = {
  // Other Tailwind config options
  plugins: [
    require('@tailwindcss/forms'),
    // other plugins (if any)
  ],
}

  