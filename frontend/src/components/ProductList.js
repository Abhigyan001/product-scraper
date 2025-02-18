import React from "react";

const ProductList = ({ products }) => {
  return (
    <div>
      <h3>Scraped Products</h3>
      <ul className="list-group">
        {products.map((product) => (
          <li key={product.id} className="list-group-item">
            <strong>{product.title}</strong> - ₹{product.price} <br />
            <span className="text-muted">
              Category: {product.category.name}
            </span>{" "}
            <br />
            <a href={product.url} target="_blank" rel="noopener noreferrer">
              View Product
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
