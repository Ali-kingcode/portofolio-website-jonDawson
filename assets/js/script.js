const toggleMenu = document.querySelector('.toggle-menu'),
      navList = document.querySelector('.nav-list');

toggleMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
    toggleMenu.classList.toggle('active-toggle');
    toggleMenu.style.zIndex = '1000';
})


/* =========== ScrollReveal ========= */
ScrollReveal().reveal('.text', {
  delay: 300,
});

ScrollReveal().reveal('.img-box', {
  delay: 450,
});

ScrollReveal().reveal('.socialMedia-icon', {
  delay: 500,
});
