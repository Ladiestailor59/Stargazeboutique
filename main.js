// ===== HERO SLIDER =====
let slideIndex = 0;
const slides = document.querySelectorAll('.hero-slider img');

function showSlides() {
  slides.forEach(slide => slide.style.display = 'none');
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex-1].style.display = 'block';
  setTimeout(showSlides, 5000);
}
if(slides.length > 0) showSlides();

// ===== MOBILE MENU =====
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});
