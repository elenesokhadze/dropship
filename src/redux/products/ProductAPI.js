import axios from "axios";

const ProductAPI = (query) => {
 return axios.create({
  baseURL: query,
  headers: {
   Authorization: "Bearer" + localStorage.getItem("token"),
  },
 });
};

export default ProductAPI;
