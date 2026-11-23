import React from "react";

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.title} loading="lazy" />
      </div>

      <div className="product-details">
        <h2 title={product.title}>{product.title}</h2>
        <p className="category">{product.category}</p>
        <p className="price">${product.price.toFixed(2)}</p>
        <p className="rating">
          ★★ {product.rating?.rate ?? "—"}
          <span> ({product.rating?.count ?? 0} reviews)</span>
        </p>
      </div>
    </article>
  );
}