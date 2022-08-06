import "./header.css";
import Search from "./Search";
import Sort from "./Sort";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {selectAll} from "../redux/products/ProductActions";
import {removeAll} from "../redux/products/ProductActions";
import {PrimaryButton} from "../button/PrimaryButton";

const Header = () => {
 const products = useSelector((state) => state.product.products);
 const selectedProducts = useSelector(
  (state) => state.product.selectedProducts
 );
 const dispatch = useDispatch();
 const selectAllHandler = () => {
  const allProductsId = products.map((product) => product.id);
  dispatch(selectAll(allProductsId));
 };
 const clearAllHandler = () => {
  const clearProducts = [];
  dispatch(removeAll(clearProducts));
 };
 return (
  <header className="header">
   <div className="header__container">
    <div className="header__nav">
     <div className="header__select">
      <PrimaryButton onClick={selectAllHandler}>select all</PrimaryButton>

      <div className="header__text">
       selected {selectedProducts.length} out of {products.length} products
      </div>
      {selectedProducts.length > 0 ? (
       <PrimaryButton onClick={clearAllHandler}>clear selected</PrimaryButton>
      ) : (
       ""
      )}
     </div>
    </div>
    <Search />
   </div>
   <Sort />
  </header>
 );
};

export default Header;
