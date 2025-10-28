
// Enhanced script for the ultimate build
const state = {
  currency: localStorage.getItem('currency') || 'AED',
  rate: parseFloat(localStorage.getItem('aed_inr_rate')) || 22.6,
  lang: localStorage.getItem('lang') || 'en',
  theme: localStorage.getItem('theme') || 'light'
};

function applyTheme(t){
  document.documentElement.classList.remove('light','dark');
  document.documentElement.classList.add(t);
  document.body.classList.add('theme-root');
  localStorage.setItem('theme', t);
}
applyTheme(state.theme);

window.addEventListener('DOMContentLoaded', ()=>{
  const currencySelect = document.getElementById('currencySelect');
  if(currencySelect){
    currencySelect.value = state.currency;
    currencySelect.addEventListener('change', ()=>{
      state.currency = currencySelect.value;
      localStorage.setItem('currency', state.currency);
      renderProducts(window.productsData || []);
    });
  }
  document.getElementById('langToggle')?.addEventListener('click', ()=>{
    state.lang = (state.lang === 'en') ? 'hi' : 'en';
    localStorage.setItem('lang', state.lang);
    renderProducts(window.productsData || []);
  });
  document.getElementById('themeToggle')?.addEventListener('click', ()=>{
    state.theme = (state.theme === 'light') ? 'dark' : 'light';
    applyTheme(state.theme);
  });
  document.getElementById('whatsAppFloating')?.addEventListener('click', ()=>{ document.getElementById('contactModal').style.display='block'; });
  document.getElementById('contactCancel')?.addEventListener('click', ()=>document.getElementById('contactModal').style.display='none');
  document.getElementById('newsletter-form')?.addEventListener('submit', (e)=>{ e.preventDefault(); alert('Thanks! (Demo) You are subscribed.'); });
  document.getElementById('contactForm')?.addEventListener('submit', (e)=>{
    e.preventDefault();
    const fd = new FormData(e.target);
    const name = fd.get('name')||'';
    const phone = fd.get('phone')||'';
    const msg = fd.get('message')||'';
    const text = `Inquiry from ${name} (${phone}): ${msg}`;
    const url = 'https://wa.me/971500000000?text=' + encodeURIComponent(text);
    window.open(url,'_blank');
  });
});

async function loadProducts(){
  try{
    const res = await fetch('assets/products.json');
    const data = await res.json();
    window.productsData = data;
    renderProducts(data);
  }catch(e){ console.error('Failed to load products.json', e); }
}

function formatPrice(aed){
  const inr = Math.round(aed * state.rate * 100)/100;
  return `AED ${aed} (₹ ${inr})`;
}

function renderProducts(list){
  const grid = document.getElementById('productGrid');
  if(!grid) return;
  grid.innerHTML = '';
  list.forEach(p=>{
    const title = (typeof p.title==='object') ? (p.title[state.lang]||p.title.en) : p.title;
    const card = document.createElement('article'); card.className='product-card';
    const videoTag = `<video class="prod-video" playsinline muted loop preload="metadata" poster="${p.image}" onmouseover="this.play()" onmouseout="this.pause()" width="100%"><source src="${p.video}" type="video/mp4">Fallback</video>`;
    card.innerHTML = `
      <div class="media">${videoTag}<div class="badge">${p.badges && p.badges[0] ? p.badges[0] : ''}</div></div>
      <h3>${title}</h3>
      <p class="price">${formatPrice(p.price)}</p>
      <p class="sizes">Sizes: ${p.sizes}</p>
      <div class="product-actions"><a class="btn whatsapp" href="#" data-message="${encodeURIComponent(p.whatsapp_message||'Hello')}">WhatsApp Order</a></div>
    `;
    grid.appendChild(card);
  });
  document.querySelectorAll('.product-actions .whatsapp').forEach(a=>{
    a.addEventListener('click', (e)=>{
      e.preventDefault();
      const msg = decodeURIComponent(a.getAttribute('data-message'));
      const url = 'https://wa.me/971500000000?text=' + encodeURIComponent(msg);
      if(confirm('You will be redirected to WhatsApp to place your order. Continue?')) window.open(url,'_blank');
    });
  });
}

loadProducts();

// Simple slider and countdown (kept minimal)
let current = 0;
const slides = document.querySelectorAll('.slide');
const total = slides.length || 0;
function showSlide(i){ if(!slides.length) return; slides.forEach(s=>s.classList.remove('active')); slides[i].classList.add('active'); const container = document.querySelector('.slides'); if(container) container.style.transform = `translateX(-${i*100}%)`; }
document.getElementById('next')?.addEventListener('click', ()=>{ current = (current+1)%total; showSlide(current)});
document.getElementById('prev')?.addEventListener('click', ()=>{ current = (current-1+total)%total; showSlide(current)});
setInterval(()=>{ if(!slides.length) return; current = (current+1)%total; showSlide(current)}, 5000);

const cdTime = document.getElementById('cd-time');
const countdownDate = new Date(Date.now() + 7*24*60*60*1000);
function updateCountdown(){ const now=new Date(); let diff = countdownDate - now; if(diff<0){ cdTime.textContent='Sale ended'; return;} const hrs = Math.floor(diff/1000/60/60); const mins = Math.floor((diff - hrs*3600*1000)/1000/60); const secs = Math.floor((diff/1000)%60); cdTime.textContent = `${hrs.toString().padStart(2,'0')}:${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`; }
setInterval(updateCountdown,1000);
updateCountdown();
