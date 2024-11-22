document.addEventListener('DOMContentLoaded', () => {
    const addToCartButton = document.getElementById('add-to-cart');
    if (addToCartButton) {
        addToCartButton.addEventListener('click', () => {
            const productId = new URLSearchParams(window.location.search).get('id');
            cart.push({ id: productId });
            alert('Товар добавлен в корзину!');
        });
    }

    const checkoutButton = document.getElementById('checkout');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', () => {
            alert('Оформление заказа...');
            // Реализуйте процесс оформления заказа
        });
    }

    const cartItems = document.getElementById('cart-items');
    if (cartItems) {
        cart.forEach(item => {
            const div = document.createElement('div');
            div.textContent = `Товар ID: ${item.id}`;
            cartItems.appendChild(div);
        });
    }
});