import React, { useEffect, useState } from "react";
import { fetchProducts, scrapeProduct } from "../services/api";
import ProductList from "../components/ProductList";
import ProductForm from "../components/ProductForm";
import SearchBar from "../components/SearchBar";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [searchQuery, products]);

  const loadProducts = async () => {
    const data = await fetchProducts();
    setProducts(data);
    setFilteredProducts(data);
  };

  const handleScrape = async (url) => {
    await scrapeProduct(url);
    loadProducts();
  };

  const filterProducts = () => {
    if (!searchQuery) {
      setFilteredProducts(products);
    } else {
      const lowerCaseQuery = searchQuery.toLowerCase();
      setFilteredProducts(
        products.filter(
          (product) =>
            product.title.toLowerCase().includes(lowerCaseQuery) ||
            product.category.name.toLowerCase().includes(lowerCaseQuery)
        )
      );
    }
  };

  return (
    <div className="container mt-4">
      <div className="border border-success rounded bg-dark p-3">
        <h3 className="mb-4 text-white">Product Scraper</h3>
        <ProductForm onScrape={handleScrape} />
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default HomePage;
