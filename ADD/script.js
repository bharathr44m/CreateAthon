const cart = [];

function addToCart(productId) {
    const productElement = document.querySelector(`.product[data-id='${productId}']`);
    const name = productElement.getAttribute('data-name');
    const price = parseFloat(productElement.getAttribute('data-price'));

    cart.push({ name, price });
    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    cartItemsElement.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ₹${item.price}`;
        cartItemsElement.appendChild(listItem);
        total += item.price;
    });

    totalPriceElement.textContent = total.toFixed(2);
}

function confirmOrder() {
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = 'order-summary.html';
}