// menu.js - Handles displaying food and adding to cart

const menuItems = [
    { id: 1, name: "Margherita Pizza", price: 105.50, category: "pizza", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&auto=format&fit=crop&q=60" },
    { id: 2, name: "Classic Burger", price: 79.99, category: "burger", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60" },
    { id: 3, name: "Creamy Pasta", price: 175.50, category: "pizza", image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=500&q=60" },
    { id: 4, name: "Grilled Sandwich", price: 180.99, category: "burger", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&auto=format&fit=crop&q=60" },
    { id: 5, name: "Fried Chicken", price: 350.99, category: "chicken", image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&auto=format&fit=crop&q=60" },
    { id: 6, name: "French Fries", price: 139.99, category: "burger", image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=500&auto=format&fit=crop&q=60" },
    { id: 7, name: "Chicken Shawarma", price: 69.99, category: "chicken", image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=500&q=60" },
    { id: 8, name: "Chicken Biryani", price: 289.99, category: "chicken", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format&fit=crop&q=60" },
    { id: 9, name: "Chocolate Ice Cream", price: 90.50, category: "dessert", image: "https://images.unsplash.com/photo-1559703248-dcaaec9fab78?w=500&auto=format&fit=crop&q=60" }
];

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("foodContainer");
    const searchInput = document.getElementById("search");
    const categoryFilter = document.getElementById("categoryFilter");
    const priceFilter = document.getElementById("priceFilter");

    if (container) {
        displayMenu(menuItems);

        if (searchInput) {
            searchInput.addEventListener("keyup", filterMenu);
        }
        if (categoryFilter) {
            categoryFilter.addEventListener("change", filterMenu);
        }
        if (priceFilter) {
            priceFilter.addEventListener("change", filterMenu);
        }
    }
});

function filterMenu() {
    const searchTerm = document.getElementById("search").value.toLowerCase();
    const category = document.getElementById("categoryFilter").value;
    const priceRange = document.getElementById("priceFilter").value;

    const filtered = menuItems.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm);
        const matchesCategory = category === "all" || item.category === category;
        
        let matchesPrice = false;
        if (priceRange === "all") {
            matchesPrice = true;
        } else if (priceRange === "low") {
            matchesPrice = item.price < 100;
        } else if (priceRange === "mid") {
            matchesPrice = item.price >= 100 && item.price <= 200;
        } else if (priceRange === "high") {
            matchesPrice = item.price > 200;
        }

        return matchesSearch && matchesCategory && matchesPrice;
    });

    displayMenu(filtered);
}

function displayMenu(items) {
    const container = document.getElementById("foodContainer");
    container.innerHTML = "";

    if (items.length === 0) {
        container.innerHTML = "<p>No items found.</p>";
        return;
    }

    items.forEach(item => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
            <div class="card-img" style="background-image: url('${item.image}')"></div>
            <div class="card-body">
                <h3 class="card-title">${item.name}</h3>
                <p class="card-price">₹${item.price.toFixed(2)}</p>
                <button class="btn btn-primary" onclick="addToCart(${item.id})">Add to Cart</button>
            </div>
        `;
        container.appendChild(div);
    });
}

function addToCart(id) {
    // Check if user is logged in
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (!user) {
        if(typeof showAlert === 'function') showAlert("Please login to add items to cart", "error");
        else alert("Please login to add items to cart");
        setTimeout(() => window.location.href = "login.html", 2000);
        return;
    }

    const item = menuItems.find(m => m.id === id);
    if (!item) return;

    const cartKey = `cart_${user.email}`;
    let cart = JSON.parse(localStorage.getItem(cartKey)) || [];
    
    const existing = cart.find(c => c.id === id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    localStorage.setItem(cartKey, JSON.stringify(cart));
    
    if(typeof updateCartIcon === 'function') updateCartIcon();
    if(typeof showAlert === 'function') showAlert(`${item.name} added to cart!`);
}
