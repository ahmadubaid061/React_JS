import React, { useState } from "react";

function Item({ item, onAddToCart, quantityInCart }) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(item);
    setAdded(true);
    setTimeout(() => setAdded(false), 700);
  };

  return (
    <div className={`item-card ${added ? "card-flash" : ""}`}>
      {item.badge && <span className="item-badge">{item.badge}</span>}
      <div className="item-emoji">{item.emoji}</div>
      <div className="item-category">{item.category}</div>
      <h3 className="item-name">{item.name}</h3>
      <div className="item-footer">
        <span className="item-price">${item.price.toFixed(2)}</span>
        <div className="item-actions">
          {quantityInCart > 0 && (
            <span className="in-cart-badge">× {quantityInCart}</span>
          )}
          <button
            className={`add-to-cart-btn ${added ? "btn-added" : ""}`}
            onClick={handleAdd}
          >
            {added ? "✓ Added!" : "+ Add"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
