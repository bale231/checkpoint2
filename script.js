const containerProduct = document.getElementById('productContainer');

async function fetchProduct() {
    const fetchURL = await fetch('https://fakestoreapi.com/products');
    const data = await fetchURL.json();
    console.log(data);
    data.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
        <div class="img-card">
            <img src="${product.image}" alt="${product.category}">
        </div>
        <div class="container-info">
            <h2>${product.title}</h2>
            <p>$${product.price}</p>
            <p>${product.description}</p>
            <button class="btn-${product.id}">Aggiungi al carrello</button>
        </div>     
        `;

        containerProduct.appendChild(card);
        
        const btn = document.querySelector(`.btn-${product.id}`)
        btn.addEventListener('click', () => {
            localStorage.setItem('nameProduct', product.title);
            localStorage.setItem('priceProduct', product.price);
            localStorage.setItem('description', product.description);

        });
    });

}

fetchProduct();