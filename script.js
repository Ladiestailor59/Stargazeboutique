
// Load products from products.json and render
fetch('products.json')
  .then(r=>r.json())
  .then(data=>{
    const out = document.getElementById('products');
    data.forEach(p=>{
      const div = document.createElement('div');
      div.className='card';
      div.innerHTML = `
        <img src="images/product${p.id}.jpg" alt="${p.name}">
        <h3>${p.name}</h3>
        <div class="price">AED ${p.price_AED} · INR ${p.price_INR}</div>
        <div class="tags">${p.tags.join(' · ')}</div>
        <div class="discount">${p.discount}</div>
      `;
      out.appendChild(div);
    });
  }).catch(e=>console.error('products error',e));
