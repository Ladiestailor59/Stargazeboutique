// ===== PRODUCT HOVER ZOOM =====
const products = document.querySelectorAll('.products-grid img');
products.forEach(product => {
  product.addEventListener('mouseenter', () => {
    product.style.transform = 'scale(1.05)';
    product.style.boxShadow = '0 15px 25px rgba(0,0,0,0.2)';
  });
  product.addEventListener('mouseleave', () => {
    product.style.transform = 'scale(1)';
    product.style.boxShadow = 'none';
  });
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// ===== AOS ANIMATION (FADE-UP) =====
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('aos-animate');
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => observer.observe(section));
});
