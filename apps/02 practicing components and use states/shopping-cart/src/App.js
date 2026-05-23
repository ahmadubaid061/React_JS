import React, { useState } from "react";
import ItemList from "./components/ItemList";
import Cart from "./components/Cart";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Nike Phantom GX Elite",
    category: "Boots",
    price: 229.99,
    emoji: "⚡",
    badge: "Pro Pick",
  },
  {
    id: 2,
    name: "Adidas Champions League Ball",
    category: "Match Ball",
    price: 149.99,
    emoji: "🏆",
    badge: "Official",
  },
  {
    id: 3,
    name: "Nike Dri-FIT Strike Jersey",
    category: "Jersey",
    price: 64.99,
    emoji: "🔥",
    badge: null,
  },
  {
    id: 4,
    name: "Adidas Predator League GK",
    category: "Goalkeeper Gloves",
    price: 44.99,
    emoji: "🧤",
    badge: "Best Seller",
  },
  {
    id: 5,
    name: "Puma Ultra Lightweight Guards",
    category: "Protection",
    price: 29.99,
    emoji: "🛡️",
    badge: null,
  },
  {
    id: 6,
    name: "Nike Team Training Bag",
    category: "Accessories",
    price: 54.99,
    emoji: "🎒",
    badge: "New",
  },
];

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-container">
          <div className="logo-area">
            <span className="logo-icon">🏆</span>
            <span className="logo-text">
              APEX<span style={{ color: "#e31e24" }}>FC</span>
            </span>
          </div>
          <nav className="nav-menu">
            <a href="#shop">Shop</a>
            <a href="#shop">Boots</a>
            <a href="#shop">Kits</a>
            <a href="#shop">Accessories</a>
          </nav>
          <button className="cart-button" onClick={() => setCartOpen(true)}>
            <span>🛒</span>
            <span>Cart</span>
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </button>
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-left">
            <span className="hero-tag">⚡ 2025 EDITION</span>
            <h1>
              Built for
              <br />
              <span className="hero-highlight">Victory</span>
            </h1>
            <p className="hero-desc">
              Elite-grade gear trusted by pros. Unleash your potential on the
              pitch.
            </p>
            <button
              className="hero-button"
              onClick={() =>
                document
                  .getElementById("shop")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Now →
            </button>
          </div>
          <div className="hero-right">
            <div className="floating-ball">⚽</div>
          </div>
        </div>
      </section>

      <main id="shop" className="main-shop">
        <div className="section-header">
          <h2>Featured Products</h2>
          <span className="product-count">{products.length} items</span>
        </div>
        <ItemList
          products={products}
          onAddToCart={addToCart}
          cartItems={cartItems}
        />
      </main>

      <Cart
        cartItems={cartItems}
        onRemove={removeFromCart}
        totalPrice={totalPrice}
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
      />

      {cartOpen && (
        <div className="cart-overlay" onClick={() => setCartOpen(false)} />
      )}

      <footer className="app-footer">
        © 2025 Apex FC — Premium Football Equipment. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
