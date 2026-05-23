import React from "react";

function Cart({ cartItems, onRemove, totalPrice, isOpen, onClose }) {
  return (
    <div className={`cart-drawer ${isOpen ? "open" : ""}`}>
      <div className="cart-header">
        <h3>Your Bag</h3>
        <button className="close-cart" onClick={onClose}>
          ✕
        </button>
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-cart-state">
          <span style={{ fontSize: "64px" }}>🛍️</span>
          <p style={{ fontWeight: 600 }}>Cart is empty</p>
          <span>Add some gear to start</span>
        </div>
      ) : (
        <>
          <div className="cart-items-list">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <span className="cart-item-emoji">{item.emoji}</span>
                <div className="cart-item-info">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">
                    ${item.price.toFixed(2)} × {item.quantity}
                  </div>
                </div>
                <div className="cart-item-right">
                  <div className="cart-total-price">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  <button
                    className="remove-item-btn"
                    onClick={() => onRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span style={{ color: "#10b981", fontWeight: 600 }}>Free</span>
            </div>
            <div className="summary-total">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button className="checkout-action">Checkout →</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
