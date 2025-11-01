
// Load products from products.json
fetch('products.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('products');
        data.forEach(product => {
            const div = document.createElement('div');
            div.className = 'product';
            div.innerHTML = `
                <img src="images/product${product.id}.jpg" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>AED ${product.price_AED} | INR ${product.price_INR}</p>
                <p>${product.discount}</p>
                <p>${product.tags.join(', ')}</p>
            `;
            container.appendChild(div);
        });
    })
    .catch(err => console.error('Error loading products:', err));
