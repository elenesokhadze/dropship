import {useSelector, useDispatch} from "react-redux";
import Button from "@material-ui/core/Button";
import {ButtonGroup} from "@material-ui/core";
import {
 increment,
 decrement,
 add_counter,
} from "../../redux/counter/counterActions";

export const ProductCounter = ({id}) => {
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
  <div>
   <ButtonGroup onClick={(e) => e.stopPropagation()} color="primary">
    <Button onClick={handleDecrement}>-</Button>
    <Button disabled style={{color: "grey"}}>
     {count ? count : 0}
    </Button>
    <Button onClick={handleIncrement}>+</Button>
   </ButtonGroup>
  </div>
 );
};
