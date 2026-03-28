# PandaFoodCart 🐼🍕🍔

Welcome to PandaFoodCart - A delicious and simple web application for viewing food items, searching, filtering, and ordering your favorite meals!

## Features 🚀

- **Account Management**: Simple Login and Signup pages to manage user details securely using `localStorage`.
- **Dynamic Menu**: Comprehensive food menu displaying items with their images, names, and prices.
- **Search and Filters**: Easily find your favorite food:
  - **Text Search**: Type into the search bar to find specific meals (case-insensitive).
  - **Category Filter**: Restrict results by `Pizza`, `Burger`, `Chicken`, or `Dessert`.
  - **Price Filter**: Filter out foods based on their value `Below ₹100`, `₹100–₹200`, or `Above ₹200`.
- **Cart Mechanism**: Add items to your cart dynamically.
- **Multi-step Checkout**: Interactive and professional cart checkout modal with credit card processing and a GPay payment simulation.
- **Receipt System**: Enjoy beautifully generated PDF bills with QR codes.

## Setup Instructions 🛠️

To locally setup the project, no installation packages are required as the styling and functionality rely on Vanilla HTML, CSS, and JS. 

1. **Clone the repository** (if you have downloaded via Git).
2. Open the directory containing the HTML files.
3. Simply launch `index.html` in your favorite web browser!

## Code Structure 📂

- `index.html`: The home page of the website.
- `menu.html / js/menu.js`: The central menu engine.
- `login.html / signup.html`: Simple authentication endpoints.
- `cart.html`: Multi-stage checkout process.
- `/css`: All stylings inside beautifully themed dark-mode friendly css wrappers.
- `/js`: Global utilities and application logic.

## Usage 💡

1. **Sign Up**: Create an account via `signup.html`.
2. **Login**: Authenticate at `login.html`.
3. **Menu Browsing**: Head to `menu.html`. Search your favorites by names, select *Pizza*, or limit your price to *Below ₹100*. The system uses an AND logic condition combining all values.
4. **Checkout**: Finalize your purchases in `cart.html` checking out natively via your simulated choice of payments!

Enjoy your food! 🎈
