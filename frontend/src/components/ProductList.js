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
  const productsByCategory = groupProductsByCategory(products);

  return (
    <div className="container">
      <h3>Scraped Products</h3>
      {Object.keys(productsByCategory).map((category) => (
        <div key={category}>
          <h4>{category}</h4>
          <div className="row">
            {productsByCategory[category].map((product) => (
              <div className="col-md-4 mb-4" key={product.id}>
                <div className="card">
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">Price: ₹{product.price}</p>
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
