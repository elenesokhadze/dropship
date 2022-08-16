import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useParams, useHistory} from "react-router";
import {getProducts} from "../redux/products/ProductActions";
import Product from "./product/Product";
import Modal from "./modal/Modal.js";
import {CatalogContainer} from "./catalog.styled";
import Spinner from "../spinner/Spinner";

const Catalog = () => {
 const [spinner, setSpinner] = useState(true);

 const products = useSelector((state) => state.product.products);
 const dispatch = useDispatch();
 const {id} = useParams();
 const history = useHistory();
 useEffect(() => {
  setTimeout(() => setSpinner(false), 1000);
 }, []);

 const onClose = (event) => {
  event.stopPropagation();
  history.push(`/catalog`);
 };

 const onOpen = (id) => {
  history.push(`/catalog/${id}`);
 };

 useEffect(() => {
  dispatch(getProducts());
 }, [dispatch]);

 if (spinner) {
  return <Spinner />;
 } else {
  return (
   <CatalogContainer id="CatalogContainer">
    {products.map((product, index) => (
     <Product
      key={product.id}
      id={product.id}
      index={index}
      title={product.title}
      price={product.price}
      image={product.image}
      product={product}
      onOpen={onOpen}
     />
    ))}
    {products[id - 1] && (
     <Modal product={products[id - 1]} onClose={onClose}></Modal>
    )}
   </CatalogContainer>
  );
 }
};

export default Catalog;
