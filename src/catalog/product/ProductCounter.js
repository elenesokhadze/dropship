import {useSelector, useDispatch} from "react-redux";
import Button from "@material-ui/core/Button";
import {ButtonGroup} from "@material-ui/core";
import {
 increment,
 decrement,
 add_counter,
} from "../../redux/counter/counterActions";
import {ProductCounterContainer} from "./product.styled";

export const ProductCounter = ({id, visibilityHidden}) => {
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
  <ProductCounterContainer
   id="ProductCounterContainer"
   visibilityHidden={visibilityHidden}
  >
   <ButtonGroup onClick={(e) => e.stopPropagation()} color="primary">
    <Button onClick={handleDecrement}>-</Button>
    <Button disabled style={{color: "grey"}}>
     {count ? count : 1}
    </Button>
    <Button onClick={handleIncrement}>+</Button>
   </ButtonGroup>
  </ProductCounterContainer>
 );
};
