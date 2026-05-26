import React from "react";
import "./ProductList.css";

function ProductList() {
  // Array of 5 products 
  const products = [
    { id: 1, name: "Laptop", price: 999.99, category: "Electronics" },
    { id: 2, name: "Smartphone", price: 699.99, category: "Electronics" },
    { id: 3, name: "Running Shoes", price: 89.99, category: "Sports" },
    { id: 4, name: "Coffee Maker", price: 49.99, category: "Home & Kitchen" },
    { id: 5, name: "Backpack", price: 39.99, category: "Fashion" },
  ];

  return (
    <div className="products-container">
      <div className="products-card">
        <h1 className="products-title">Product Catalog</h1>

        {/* Heading showing total number of products */}
        <div className="total-products">
          <span className="total-badge">Total Products: {products.length}</span>
        </div>

        {/* Rendering products list using .map() */}
        <div className="products-list">
          {products.map((product) => (
            <div key={product.id} className="product-item">
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <span className="product-category">{product.category}</span>
              </div>
              <div className="product-price">${product.price.toFixed(2)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
