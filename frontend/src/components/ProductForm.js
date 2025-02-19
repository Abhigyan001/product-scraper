import React, { useState } from "react";

const ProductForm = ({ onScrape }) => {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url) {
      onScrape(url);
      setUrl("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group">
        <input
          type="url"
          className="form-control"
          placeholder="Enter product URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <button className="btn btn-primary" type="submit">
          Scrape
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
