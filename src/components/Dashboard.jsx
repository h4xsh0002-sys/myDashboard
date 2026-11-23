import React, { useEffect, useState } from "react";
import Header from "./Header.jsx";
import ProductGrid from "./ProductGrid.jsx";

const PRODUCTS_API = "https://dummyjson.com/products?limit=150 ";

export default function Dashboard({ onLogout }) {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadProducts() {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(PRODUCTS_API);

      if (!response.ok) {
        throw new Error("Product request failed");
      }

      const data = await response.json();

      if (!Array.isArray(data.products)) {
        throw new Error("Invalid product data");
      }

      setProducts(
        data.products.map((product) => ({
          ...product,
          image: product.thumbnail || product.images?.[0] || "",
          rating: {
            rate: product.rating ?? "—",
            count: product.reviews?.length ?? 0,
          },
        }))
      );
    } catch (loadError) {
      console.error("Failed to load products:", loadError);
      setError(
        "We couldn't load products. Check your internet connection and try again."
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadProducts();
  }, []);

  const matchingProducts = products.filter((product) =>
    `${product.title || ""} ${product.category || ""}`
      .toLowerCase()
      .includes(searchText.trim().toLowerCase())
  );

  return (
    <main className="page">
      <Header
        searchText={searchText}
        onSearchChange={setSearchText}
        onLogout={onLogout}
      />

      <section className="dashboard" aria-label="Product dashboard">  
        <div className="section-heading">
          <div>
            <h1>Product dashboard</h1>
            <p>This  you love most.</p>
            
          </div>

          {!loading && !error && (
            <p className="product-count">
              {matchingProducts.length}{" "}
              {matchingProducts.length === 1 ? "item" : "items"}
            </p>
          )}
        </div>

        {loading && (
          <p className="status-message">Loading products...</p>
        )}

        {!loading && error && (
          <div className="status-message error-message">
            <p>{error}</p>
            <button onClick={loadProducts}>Try again</button>
          </div>
        )}

        {!loading && !error && matchingProducts.length === 0 && (
          <p className="status-message">
            No products found. Try another search.
          </p>
        )}

        {!loading && !error && matchingProducts.length > 0 && (
          <ProductGrid products={matchingProducts} />
        )}
      </section>
    </main>
  );
}