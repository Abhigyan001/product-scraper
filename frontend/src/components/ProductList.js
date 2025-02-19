import React from "react";

const groupProductsByCategory = (products) => {
  return products.reduce((acc, product) => {
    const categoryName = product.category.name;
    if (!acc[categoryName]) {
      acc[categoryName] = [];
    }
    acc[categoryName].push(product);
    return acc;
  }, {});
};

const ProductList = ({ products }) => {
  const sortedProducts = [...products].sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );

  const productsByCategory = groupProductsByCategory(sortedProducts);

  return (
    <div className="mt-4">
      <h4 className="mb-4">Scraped Products</h4>
      {Object.keys(productsByCategory).map((category) => (
        <div key={category}>
          <h5>{category}</h5>
          <div className="row">
            {productsByCategory[category].map((product) => (
              <div className="col-md-4 mb-4" key={product.id}>
                <div className="card">
                  <img
                    src={product.image_url}
                    className="card-img-top w-25 mx-auto mt-3"
                    alt={product.title}
                  />
                  <div className="card-body">
                    <h6 className="card-title">{product.title}</h6>
                    <p className="card-text">Price: ₹{product.price}</p>
                    <p className="card-text">Rating: {product.rating}★</p>
                    <p className="card-text">
                      <small className="text-muted">
                        Category: {product.category.name}
                      </small>
                    </p>
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      View Product
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
