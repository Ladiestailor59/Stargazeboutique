
// Simple product loader and renderer
fetch('products.json')
  .then(res => res.json())
  .then(products => {
    const grid = document.getElementById('productGrid');
    products.forEach(p => {
      const card = document.createElement('div');
      card.className = 'card';
      const img = document.createElement('img');
      img.src = p.image;
      img.alt = p.name;
      card.appendChild(img);
      const title = document.createElement('h4'); title.textContent = p.name;
      card.appendChild(title);
      const desc = document.createElement('p'); desc.textContent = p.description;
      card.appendChild(desc);
      const price = document.createElement('p'); price.textContent = 'Price: ₹' + p.price;
      card.appendChild(price);
      // If video file exists, create a small play button (video playback requires real MP4 files)
      if(p.video){
        const vidNote = document.createElement('p');
        vidNote.textContent = 'Promo video available (upload real MP4 to /videos/ to enable playback).';
        vidNote.style.fontSize='12px';
        vidNote.style.color='#777';
        card.appendChild(vidNote);
      }
      grid.appendChild(card);
    });
  })
  .catch(err => {
    console.error('Failed to load products.json', err);
    const grid = document.getElementById('productGrid');
    grid.innerHTML = '<p>Products not available. Make sure products.json is present.</p>';
  });
