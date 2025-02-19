import { render, screen } from "@testing-library/react";
import ProductList from "../components/ProductList";

describe("ProductList", () => {
  const products = [
    {
      id: 1,
      title: "Product A",
      price: 100,
      rating: 4,
      created_at: "2023-01-01",
      image_url: "http://example.com/imageA.jpg",
      url: "http://example.com/productA",
      category: { name: "Electronics" },
    },
    {
      id: 2,
      title: "Product B",
      price: 150,
      rating: 5,
      created_at: "2023-01-02",
      image_url: "http://example.com/imageB.jpg",
      url: "http://example.com/productB",
      category: { name: "Clothing" },
    },
  ];

  it("renders products grouped by category", () => {
    render(<ProductList products={products} />);
    expect(screen.getByText("Scraped Products")).toBeInTheDocument();
    expect(screen.getByText("Electronics")).toBeInTheDocument();
    expect(screen.getByText("Product A")).toBeInTheDocument();
    expect(screen.getByText("Clothing")).toBeInTheDocument();
    expect(screen.getByText("Product B")).toBeInTheDocument();
  });

  it("displays no products message when no products are provided", () => {
    render(<ProductList products={[]} />);
    expect(screen.getByText("Scraped Products")).toBeInTheDocument();
    expect(screen.queryByText("Electronics")).not.toBeInTheDocument();
    expect(screen.queryByText("Clothing")).not.toBeInTheDocument();
  });

  it("handles products with missing category gracefully", () => {
    const productsWithMissingCategory = [
      {
        id: 1,
        title: "Product A",
        price: 100,
        rating: 4,
        created_at: "2023-01-01",
        image_url: "http://example.com/imageA.jpg",
        url: "http://example.com/productA",
        category: {},
      },
    ];
    render(<ProductList products={productsWithMissingCategory} />);
    expect(screen.getByText("Product A")).toBeInTheDocument();
    expect(screen.getByText("Category:")).toBeInTheDocument();
  });
});
