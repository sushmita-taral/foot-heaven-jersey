const products = [
    { id: 1, name: "Football Jersey A", price: 25, quality: "High", sizes: "S, M, L, XL", colors: "Red, Blue", category: "football" },
    { id: 2, name: "Basketball Jersey B", price: 30, quality: "Medium", sizes: "M, L, XL", colors: "Black, White", category: "basketball" },
    { id: 3, name: "Fitness Jersey C", price: 20, quality: "High", sizes: "S, M, L", colors: "Green, Yellow", category: "fitness" },
    // Add more products as needed
];

document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");
    const productDetail = document.getElementById("product-detail");
    const backToProducts = document.getElementById("back-to-products");
    const detailName = document.getElementById("detail-name");
    const detailPrice = document.getElementById("detail-price");
    const detailQuality = document.getElementById("detail-quality");
    const detailSizes = document.getElementById("detail-sizes");
    const detailColors = document.getElementById("detail-colors");
    const filterForm = document.getElementById("filterForm");

    function renderProducts(filteredProducts) {
        productList.innerHTML = "";
        filteredProducts.forEach(product => {
            const div = document.createElement("div");
            div.className = "product";
            div.innerHTML = `
                <img src="https://via.placeholder.com/150" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
            `;
            div.addEventListener("click", () => {
                detailName.textContent = product.name;
                detailPrice.textContent = `Price: $${product.price}`;
                detailQuality.textContent = `Quality: ${product.quality}`;
                detailSizes.textContent = `Sizes: ${product.sizes}`;
                detailColors.textContent = `Colors: ${product.colors}`;
                productList.classList.add("hidden");
                productDetail.classList.remove("hidden");
            });
            productList.appendChild(div);
        });
    }

    function applyFilters() {
        const category = document.getElementById("category").value;
        const priceSort = document.getElementById("price").value;

        let filteredProducts = products.filter(p => category === "all" || p.category === category);

        if (priceSort === "low-high") {
            filteredProducts.sort((a, b) => a.price - b.price);
        } else if (priceSort === "high-low") {
            filteredProducts.sort((a, b) => b.price - a.price);
        }

        renderProducts(filteredProducts);
    }

    filterForm.addEventListener("change", applyFilters);

    backToProducts.addEventListener("click", () => {
        productList.classList.remove("hidden");
        productDetail.classList.add("hidden");
    });

    applyFilters(); // Initial render
});
