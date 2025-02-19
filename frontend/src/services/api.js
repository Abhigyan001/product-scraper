import axios from "axios";

const API_URL = "http://localhost:3001/api/v1";

export const fetchProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};

export const scrapeProduct = async (url) => {
  const response = await axios.post(`${API_URL}/products`, { url });
  return response.data;
};
