# PandaFoodCart Walkthrough

The project has been entirely revamped from a set of disconnected HTML files to a fully functional, stunning Single Page-like application using pure HTML, CSS, and JS (with LocalStorage).

## What Was Completed

### 1. Structural Overhaul
We removed all the confusingly named legacy files (e.g., `26-03-26(1).html`) and replaced them with standard nomenclature:
- [index.html](file:///c:/Users/Maria%20Kevin/OneDrive/Desktop/Project/index.html) (Home)
- [menu.html](file:///c:/Users/Maria%20Kevin/OneDrive/Desktop/Project/menu.html) (Food Listing)
- [cart.html](file:///c:/Users/Maria%20Kevin/OneDrive/Desktop/Project/cart.html) (Cart Overview)
- [login.html](file:///c:/Users/Maria%20Kevin/OneDrive/Desktop/Project/login.html) & [signup.html](file:///c:/Users/Maria%20Kevin/OneDrive/Desktop/Project/signup.html) (Authentication)
- Centralized [css/style.css](file:///c:/Users/Maria%20Kevin/OneDrive/Desktop/Project/css/style.css)
- Organized JS scripts into the [js/](file:///c:/Users/Maria%20Kevin/OneDrive/Desktop/Project/js/cart.js) directory ([common.js](file:///c:/Users/Maria%20Kevin/OneDrive/Desktop/Project/js/common.js), [auth.js](file:///c:/Users/Maria%20Kevin/OneDrive/Desktop/Project/js/auth.js), [menu.js](file:///c:/Users/Maria%20Kevin/OneDrive/Desktop/Project/js/menu.js), [cart.js](file:///c:/Users/Maria%20Kevin/OneDrive/Desktop/Project/js/cart.js)).

### 2. Premium Design
A cohesive, vibrant green aesthetic using the original style requests but upgraded massively with:
- **Glassmorphism:** The auth forms ([login.html](file:///c:/Users/Maria%20Kevin/OneDrive/Desktop/Project/login.html), [signup.html](file:///c:/Users/Maria%20Kevin/OneDrive/Desktop/Project/signup.html)) use beautiful glass effects over gradient backgrounds.
- **Dynamic Elements:** Buttons, cards, and headers have sleek hover animations (`transform: translateY(-5px)`).
- **Responsive Navigation:** The header and footer are consistent across all pages and adapt easily. They are injected logically via Javascript!

### 3. Fully Functional Logic (LocalStorage)
- **User Authentication:** You can now sign up and login. [common.js](file:///c:/Users/Maria%20Kevin/OneDrive/Desktop/Project/js/common.js) updates the header live: if you are logged in, you see "Hello, [Name]" and a "Logout" button. Otherwise, you see "Login" and "Sign Up" links.
- **Menu System:** Real dummy menu items with images, prices, and names are configured in [menu.js](file:///c:/Users/Maria%20Kevin/OneDrive/Desktop/Project/js/menu.js). The search bar natively filters them out seamlessly on keystroke!
- **Cart System:** You must be logged in to add to cart. Once logged in, items can be added, and in [cart.html](file:///c:/Users/Maria%20Kevin/OneDrive/Desktop/Project/cart.html), quantities can be adjusted with full price tabulation. Clicking "Checkout" clears the cart and simulates a successful order.

## How to Test
1. Open [index.html](file:///c:/Users/Maria%20Kevin/OneDrive/Desktop/Project/index.html) in your browser.
2. Go to **Sign Up** and create an account.
3. Once redirected to **Login**, enter your new credentials.
4. You will be greeted on the homepage, and your header will show your name.
5. Go to the **Menu**, use the search to find food, and click **Add to Cart**.
6. Visit the **Cart** in the header, adjust quantities with `+` and `-`. Total recalculates automatically!
7. **Checkout** and watch your order complete!