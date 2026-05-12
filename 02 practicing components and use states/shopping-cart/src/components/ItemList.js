import React from "react";
import Item from "./Item";

function ItemList({ products, onAddToCart, cartItems }) {
  return (
    <div className="products-grid">
      {products.map((product) => {
        const cartItem = cartItems.find((i) => i.id === product.id);
        return (
          <Item
            key={product.id}
            item={product}
            onAddToCart={onAddToCart}
            quantityInCart={cartItem ? cartItem.quantity : 0}
          />
        );
      })}
    </div>
  );
}

export default ItemList;
