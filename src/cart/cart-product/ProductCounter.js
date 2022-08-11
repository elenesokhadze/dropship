import {useSelector, useDispatch} from "react-redux";
import Button from "@material-ui/core/Button";
import {ButtonGroup} from "@material-ui/core";
import {
 increment,
 add_counter,
 decrement,
} from "../../redux/counter/counterActions";
import {ProductCounterContainer} from "./cartProduct.styled";

export const ProductCounter = ({id, qty}) => {
 const dispatch = useDispatch();

 const handleIncrement = () => {
  dispatch(add_counter(id));
  dispatch(increment(id));
 };
 const handleDecrement = () => {
  dispatch(add_counter(id));
  dispatch(decrement(id));
 };

 const count = useSelector((state) => state.counter[id]?.count);

 return (
  <ProductCounterContainer id="ProductCounterContainer">
   <ButtonGroup onClick={(e) => e.stopPropagation()} color="primary">
    <Button onClick={handleDecrement}>-</Button>
    <Button disabled style={{color: "grey"}}>
     {count ? count : qty}
    </Button>
    <Button onClick={handleIncrement}>+</Button>
   </ButtonGroup>
  </ProductCounterContainer>
 );
};
