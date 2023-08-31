import axios from "axios";

const fetchProducts = () => {
  return axios.get("http://localhost:4440/products");
};

export default {
  fetchProducts,
};
