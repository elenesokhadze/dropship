import axios from "axios";

axios.interceptors.request.use((config) => {
 config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
 return config;
});

export const productsAPI = async () => {
 const results = await axios("https://fakestoreapi.com/products", {
  method: "GET",
  mode: "no-cors",
  headers: {
   "Access-Control-Allow-Origin": "*",
   "Content-Type": "application/json",
  },
 });
 return results.data;
};

// export const login = async (email, password) => {
//  try {
//   const results = await axios.post(WEB_URL + "login", {email, password});
//   localStorage.setItem("user", JSON.stringify(results.data.data));
//   localStorage.setItem("token", results.data.data.token);
//  } catch (error) {
//   throw new Error(error);
//  }
// };

// export const register = async (
//  firstName,
//  lastName,
//  email,
//  password,
//  passwordConfirmation
// ) => {
//  try {
//   const results = await axios.post(WEB_URL + "register", {
//    firstName,
//    lastName,
//    email,
//    password,
//    passwordConfirmation,
//   });
//   localStorage.setItem("user", JSON.stringify(results.data.data));
//   localStorage.setItem("token", results.data.data.token);
//  } catch (error) {
//   throw new Error(error);
//  }
// };
