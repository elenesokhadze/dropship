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

 return (
  <SearchContainer>
   <SearchInputContainer onSubmit={handleSearch}>
    <SearchInput
     itemID="searchQuery"
     type="text"
     placeholder="Search..."
     value={input}
     onChange={(e) => setInput(e.target.value)}
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
