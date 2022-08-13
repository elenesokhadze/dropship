import {sortProducts} from "../redux/products/ProductActions";
import {useDispatch} from "react-redux";
import SortIcon from "@material-ui/icons/Sort";
import {SortContainer, SortSelect, SortOption} from "./header.styled";

const Sort = () => {
 const dispatch = useDispatch();

 const handleSort = (e) => {
  e.preventDefault();
  dispatch(sortProducts(e.target.value));
 };

 return (
  <SortContainer>
   <SortIcon fontSize="small" style={{color: "#aba7a7"}} />
   <SortSelect onChange={handleSort}>
    <SortOption value="sort">Sort By: New Arrivals</SortOption>
    <SortOption value="asc">Price: High to Low </SortOption>
    <SortOption value="desc">Price: Low to High</SortOption>
    <SortOption value="alphAsc">Alphabet: A-Z</SortOption>
    <SortOption value="alphDesc">Alphabet: Z-A</SortOption>
   </SortSelect>
   <i className="fas fa-sort" style={{color: "#aba7a7"}}></i>
  </SortContainer>
 );
};

export default Sort;
