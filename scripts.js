
function registerUser(){ 
  const name = document.getElementById('reg-name').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const pass = document.getElementById('reg-pass').value;
  if(!email||!pass){ alert('Please enter email and password'); return; }
  let users = JSON.parse(localStorage.getItem('sg_users')||'{}');
  if(users[email]){ alert('User already exists'); return; }
  users[email] = {name:name||email.split('@')[0], email: email, password: pass};
  localStorage.setItem('sg_users', JSON.stringify(users));
  alert('Registered! Please login.');
  window.location.href='account/login.html';
}
function loginUser(){
  const email = document.getElementById('login-email').value.trim();
  const pass = document.getElementById('login-pass').value;
  let users = JSON.parse(localStorage.getItem('sg_users')||'{}');
  if(users[email] && users[email].password === pass){
    localStorage.setItem('sg_current', email);
    window.location.href='account/my-account.html';
  } else { alert('Invalid credentials'); }
}
function logoutUser(){ localStorage.removeItem('sg_current'); window.location.href='/index.html'; }
function saveSubscription(){ const email = document.getElementById('subscribe-email').value.trim(); if(!email){alert('Enter email');return;} let subs = JSON.parse(localStorage.getItem('sg_subs')||'[]'); if(subs.indexOf(email)===-1) subs.push(email); localStorage.setItem('sg_subs', JSON.stringify(subs)); alert('Subscribed!'); }
function toggleTheme(){ const body=document.body; if(body.classList.contains('theme-gold-pink')){ body.classList.remove('theme-gold-pink'); body.classList.add('theme-gold-white'); localStorage.setItem('sg_theme','theme-gold-white'); } else { body.classList.remove('theme-gold-white'); body.classList.add('theme-gold-pink'); localStorage.setItem('sg_theme','theme-gold-pink'); } }
window.addEventListener('DOMContentLoaded', ()=>{ const t=localStorage.getItem('sg_theme')||'theme-gold-white'; document.body.classList.add(t); const cur=localStorage.getItem('sg_current'); const el=document.getElementById('account-link'); if(el) el.textContent = cur ? 'My Account' : 'Login / Register'; });
