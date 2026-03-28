// cart.js - Handles Cart display and checkout

document.addEventListener("DOMContentLoaded", () => {
    renderCart();

    const checkoutBtn = document.getElementById("checkoutBtn");
    if (checkoutBtn) {
        checkoutBtn.addEventListener("click", () => {
            const user = JSON.parse(localStorage.getItem("currentUser"));
            if (!user) {
                if(typeof showAlert === 'function') showAlert("Please login to checkout", "error");
                return;
            }
            const cartKey = `cart_${user.email}`;
            const cart = JSON.parse(localStorage.getItem(cartKey)) || [];
            if (cart.length === 0) {
                if(typeof showAlert === 'function') showAlert("Your cart is empty!", "error");
                return;
            }

            // Create Modal
            const modal = document.createElement("div");
            modal.style.position = "fixed";
            modal.style.top = "0"; modal.style.left = "0"; modal.style.width = "100%"; modal.style.height = "100%";
            modal.style.backgroundColor = "rgba(0,0,0,0.5)";
            modal.style.display = "flex"; modal.style.justifyContent = "center"; modal.style.alignItems = "center";
            modal.style.zIndex = "1000";

            const modalContent = document.createElement("div");
            modalContent.style.background = "white"; modalContent.style.padding = "30px"; modalContent.style.borderRadius = "10px";
            modalContent.style.textAlign = "center"; modalContent.style.maxWidth = "400px"; modalContent.style.width = "90%";
            
            modalContent.innerHTML = `
                <h3 style="margin-bottom: 20px;">Checkout Simulation</h3>
                <p>Select Payment Method:</p>
                <div style="display: flex; gap: 10px; justify-content: center; margin-top: 20px;">
                    <button class="btn btn-primary" id="payGpay">Google Pay</button>
                    <button class="btn btn-secondary" id="payCard">Credit Card</button>
                </div>
                <button class="btn" id="closeModal" style="margin-top: 20px; text-decoration: underline; background: transparent; color: #666; border: none; cursor: pointer;">Cancel</button>
            `;
            modal.appendChild(modalContent);
            document.body.appendChild(modal);

            document.getElementById("closeModal").addEventListener("click", () => modal.remove());

            const processPayment = () => {
                modalContent.innerHTML = `
                    <h3 style="margin-bottom: 20px;">Processing Payment...</h3>
                    <div style="margin: 20px auto; border: 4px solid #f3f3f3; border-top: 4px solid var(--primary); border-radius: 50%; width: 40px; height: 40px; animation: spin 1s linear infinite;"></div>
                    <style>@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }</style>
                `;

                setTimeout(() => {
                    modalContent.innerHTML = `
                        <h3 style="color: var(--primary); margin-bottom: 20px;">Payment Successful! 🎉</h3>
                        <p style="margin-bottom: 20px;">Your order has been placed successfully.</p>
                        <button class="btn btn-primary" id="downloadPdfBtn" style="width: 100%; margin-bottom: 10px;">Download PDF Receipt</button>
                        <button class="btn btn-secondary" id="finishBtn" style="width: 100%;">Return to Home</button>
                    `;

                    document.getElementById("downloadPdfBtn").addEventListener("click", () => {
                        try {
                            const { jsPDF } = window.jspdf;
                            const doc = new jsPDF();
                            
                            doc.setFontSize(22);
                            doc.text("PandaFoodCart Receipt", 105, 20, { align: "center" });
                            
                            doc.setFontSize(14);
                            doc.text(`Customer: ${user.name}`, 20, 40);
                            doc.text(`Email: ${user.email}`, 20, 50);
                            doc.text(`Date: ${new Date().toLocaleString()}`, 20, 60);

                            doc.setLineWidth(0.5);
                            doc.line(20, 65, 190, 65);

                            let y = 75;
                            let total = 0;
                            
                            doc.setFontSize(12);
                            doc.text("Item", 20, y);
                            doc.text("Qty", 130, y);
                            doc.text("Price", 160, y);
                            
                            y += 10;
                            doc.line(20, y-5, 190, y-5);
                            
                            cart.forEach(item => {
                                doc.text(item.name, 20, y);
                                doc.text(item.quantity.toString(), 130, y);
                                doc.text(`Rs ${(item.price * item.quantity).toFixed(2)}`, 160, y);
                                total += item.price * item.quantity;
                                y += 10;
                            });

                            doc.line(20, y, 190, y);
                            y += 10;
                            
                            doc.setFontSize(14);
                            doc.text("Total Amount:", 110, y);
                            doc.text(`Rs ${total.toFixed(2)}`, 160, y);

                            doc.save("PandaFoodCart_Receipt.pdf");
                        } catch (err) {
                            console.error(err);
                            alert("Error generating PDF. Please ensure jsPDF is loaded via internet connection.");
                        }
                    });

                    document.getElementById("finishBtn").addEventListener("click", () => {
                        localStorage.removeItem(cartKey);
                        window.location.href = "index.html";
                    });

                }, 2000);
            };

            document.getElementById("payGpay").addEventListener("click", processPayment);
            document.getElementById("payCard").addEventListener("click", processPayment);
        });
    }
});

function renderCart() {
    const container = document.getElementById("cartContainer");
    const totalEl = document.getElementById("cartTotal");
    if (!container) return;

    const user = JSON.parse(localStorage.getItem("currentUser"));
    const cartKey = user ? `cart_${user.email}` : "cart";
    
    // Read the cart array for the specific logged in user from localStorage
    let cart = JSON.parse(localStorage.getItem(cartKey)) || [];
    
    // Clear the container before we redraw everything
    container.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        container.innerHTML = "<p>Your cart is empty.</p>";
        if (totalEl) totalEl.textContent = "0.00";
        return;
    }

    cart.forEach((item, index) => {
        total += item.price * item.quantity;

        const div = document.createElement("div");
        div.style.display = "flex";
        div.style.justifyContent = "space-between";
        div.style.alignItems = "center";
        div.style.padding = "15px";
        div.style.marginBottom = "10px";
        div.style.background = "white";
        div.style.borderRadius = "8px";
        div.style.boxShadow = "var(--shadow)";

        div.innerHTML = `
            <div style="display: flex; align-items: center; gap: 15px;">
                <div style="width: 60px; height: 60px; border-radius: 8px; background-image: url('${item.image}'); background-size: cover; background-position: center;"></div>
                <div>
                    <h4 style="margin-bottom: 5px;">${item.name}</h4>
                    <span style="color: var(--primary); font-weight: bold;">₹${item.price.toFixed(2)}</span>
                </div>
            </div>
            <div style="display: flex; align-items: center; gap: 10px;">
                <button class="btn btn-secondary" style="padding: 5px 10px;" onclick="changeQty(${index}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="btn btn-secondary" style="padding: 5px 10px;" onclick="changeQty(${index}, 1)">+</button>
            </div>
        `;
        container.appendChild(div);
    });

    // Update the visual total on the screen
    if (totalEl) totalEl.textContent = total.toFixed(2);
}

window.changeQty = function(index, delta) {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (!user) {
        if(typeof showAlert === 'function') showAlert("Please login to manage cart", "error");
        else alert("Please login to manage cart");
        setTimeout(() => window.location.href = "login.html", 2000);
        return;
    }
    const cartKey = `cart_${user.email}`;
    let cart = JSON.parse(localStorage.getItem(cartKey)) || [];
    
    if (cart[index]) {
        cart[index].quantity += delta;
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }
        localStorage.setItem(cartKey, JSON.stringify(cart));
        renderCart();
        if(typeof updateCartIcon === 'function') updateCartIcon();
    }
}
