import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useParams, useHistory} from "react-router";
import {getProducts} from "../redux/products/ProductActions";
import Product from "./product/Product";
import Modal from "./Modal.js";
import Spinner from "./Spinner";
import {CatalogContainer} from "./catalog.styled";

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

 const product = products.find((item) => item.id === id);

 if (spinner) {
  return <Spinner />;
 } else {
  return (
   <CatalogContainer>
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
    {product && <Modal product={product} onClose={onClose}></Modal>}
   </CatalogContainer>
  );
 }
};

export default Catalog;
