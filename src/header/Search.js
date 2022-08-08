import {useDispatch} from "react-redux";
import {searchProducts} from "../redux/products/ProductActions";
import {useState} from "react";
import SearchIcon from "@material-ui/icons/Search";
import {PrimaryButton} from "../button/PrimaryButton";
import {
 SearchContainer,
 SearchButton,
 SearchInputContainer,
 SearchInput,
} from "./header.styled";

const Search = () => {
 const [input, setInput] = useState("");
 const dispatch = useDispatch();

 const handleSearch = (e) => {
  e.preventDefault();
  dispatch(searchProducts(input));
 };

 const handleSearchInput = (e) => {
  setTimeout(() => {
   setInput(e.target.value);
  }, 2000);
 };

 return (
  <SearchContainer>
   <SearchInputContainer onSubmit={handleSearch}>
    <SearchInput
     itemID="searchQuery"
     type="text"
     placeholder="Search..."
     onChange={handleSearchInput}
    />
    <SearchButton>
     <SearchIcon />
    </SearchButton>
   </SearchInputContainer>
   <PrimaryButton>add to cart</PrimaryButton>
  </SearchContainer>
 );
};

export default Search;
