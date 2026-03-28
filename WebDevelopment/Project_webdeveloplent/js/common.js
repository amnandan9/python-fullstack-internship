// common.js - Handles Header, Footer, and Global State

document.addEventListener("DOMContentLoaded", () => {
    renderHeader();
    renderFooter();
    updateCartIcon();
});

function renderHeader() {
    const headerContainer = document.getElementById("header-container");
    if (!headerContainer) return;

    const user = JSON.parse(localStorage.getItem("currentUser"));
    
    let userLinks = `
        <a href="login.html">Login</a>
        <a href="signup.html" class="btn btn-primary" style="width: auto; padding: 8px 15px;">Sign Up</a>
    `;

    if (user) {
        userLinks = `
            <span>👤 Hello, ${user.name.split(' ')[0]}</span>
            <a href="#" id="logoutBtn" style="color: #dc3545;">Logout</a>
        `;
    }

    const headerHTML = `
        <nav class="navbar">
            <a href="index.html" class="nav-brand">
                🐼 PandaFoodCart
            </a>
            <div class="nav-links">
                <a href="index.html">Home</a>
                <a href="menu.html">Menu</a>
                <a href="cart.html" class="cart-icon">
                    🛒 Cart <span class="cart-count" id="header-cart-count">0</span>
                </a>
                ${userLinks}
            </div>
        </nav>
    `;

    headerContainer.innerHTML = headerHTML;

    // Attach logout event
    if (user) {
        document.getElementById("logoutBtn").addEventListener("click", (e) => {
            e.preventDefault();
            localStorage.removeItem("currentUser");
            window.location.reload();
        });
    }
}

function renderFooter() {
    const footerContainer = document.getElementById("footer-container");
    if (!footerContainer) return;

    footerContainer.innerHTML = `
        <footer class="footer">
            <p>&copy; ${new Date().getFullYear()} PandaFoodCart. All rights reserved.</p>
            <p>Made with ❤️ for food lovers.</p>
        </footer>
    `;
}

function updateCartIcon() {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    const cartKey = user ? `cart_${user.email}` : "cart";
    const cart = JSON.parse(localStorage.getItem(cartKey)) || [];
    const countEl = document.getElementById("header-cart-count");
    if (countEl) {
        countEl.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    }
}

function showAlert(message, type="success") {
    // Check if alert container exists
    let alertDiv = document.getElementById("alert-container");
    if (!alertDiv) {
        alertDiv = document.createElement("div");
        alertDiv.id = "alert-container";
        alertDiv.style.position = "fixed";
        alertDiv.style.top = "20px";
        alertDiv.style.left = "50%";
        alertDiv.style.transform = "translateX(-50%)";
        alertDiv.style.zIndex = "2000";
        alertDiv.style.width = "90%";
        alertDiv.style.maxWidth = "400px";
        document.body.appendChild(alertDiv);
    }

    const alertMsg = document.createElement("div");
    alertMsg.className = `alert ${type}`;
    alertMsg.textContent = message;
    
    alertDiv.appendChild(alertMsg);

    setTimeout(() => {
        alertMsg.remove();
    }, 3000);
}
