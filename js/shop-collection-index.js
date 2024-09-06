document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners to buttons
    document.querySelectorAll('.wishlist-button').forEach(button => {
        button.addEventListener('click', () => {
            alert('Added to Wishlist!');
        });
    });

    document.querySelectorAll('.cart-button').forEach(button => {
        button.addEventListener('click', () => {
            alert('Added to Cart!');
        });
    });
});
