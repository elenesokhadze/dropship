import {
 Fetch_Products,
 SEARCH_PRODUCTS,
 SORT_PRODUCTS,
 FILTER_PRODUCTS_BY_PRICE,
 SELECT_ONE_PRODUCT,
 REMOVE_ONE_PRODUCT,
 SELECT_ALL_PRODUCT,
 REMOVE_ALL_PRODUCT,
} from "./ProductActionTypes";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
 const products = await axios("https://fakestoreapi.com/products", {
  method: "GET",
  mode: "no-cors",
  headers: {
   "Access-Control-Allow-Origin": "*",
   "Content-Type": "application/json",
  },
 });
 localStorage.setItem("Products", JSON.stringify(products));
 let storageProducts = JSON.parse(localStorage.getItem("Products") || products);
 dispatch({
  type: Fetch_Products,
  payload: {
   productData: storageProducts.data,
  },
 });
};

export const sortProducts = (sortType) => {
 return {
  type: SORT_PRODUCTS,
  payload: {
   sortBy: sortType,
  },
 };
};

export const searchProducts = (searchTerm) => {
 return {
  type: SEARCH_PRODUCTS,
  payload: {
   searchTerm,
  },
 };
};

export const filterProducts = (filtered) => {
 return {
  type: FILTER_PRODUCTS_BY_PRICE,
  payload: filtered,
 };
};

export const selectOne = (item) => {
 return {
  type: SELECT_ONE_PRODUCT,
  payload: item,
 };
};

export const removeOne = (id) => {
 return {
  type: REMOVE_ONE_PRODUCT,
  payload: id,
 };
};

export const selectAll = (data) => {
 return {
  type: SELECT_ALL_PRODUCT,
  payload: data,
 };
};

export const removeAll = () => {
 return {
  type: REMOVE_ALL_PRODUCT,
  payload: [],
 };
};
