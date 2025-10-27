// main.js - basic interactions
document.addEventListener('DOMContentLoaded', function(){
  // simple slider autoplay (very lightweight)
  const slider = document.querySelector('.hero-slider');
  if(slider && slider.dataset.autoplay==='true'){
    const slides = Array.from(slider.querySelectorAll('.slide'));
    let idx=0;
    function show(i){
      slides.forEach((s,j)=> s.style.display = j===i ? 'flex' : 'none');
    }
    show(0);
    setInterval(()=>{ idx = (idx+1)%slides.length; show(idx); }, parseInt(slider.dataset.delay)||4000);
  }
  // menu toggle
  const toggle = document.getElementById('menuToggle');
  if(toggle) toggle.addEventListener('click', ()=> document.body.classList.toggle('show-menu'));
  // subscribe form demo (no backend)
  const sub = document.getElementById('subscribeForm');
  if(sub) sub.addEventListener('submit', e=>{ e.preventDefault(); alert('Thanks! Check your email for a 10% code.'); sub.reset();});
});
