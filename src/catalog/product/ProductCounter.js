import {useSelector, useDispatch} from "react-redux";
import Button from "@material-ui/core/Button";
import {ButtonGroup} from "@material-ui/core";
import {increment, decrement} from "../../redux/counter/counterActions";

export const ProductCounter = () => {
 const count = useSelector((state) => state.counter);
 const dispatch = useDispatch();

 return (
  <div>
   <ButtonGroup onClick={(e) => e.stopPropagation()} color="primary">
    <Button
     onClick={() => {
      dispatch(decrement());
     }}
    >
     -
    </Button>
    <Button disabled style={{color: "grey"}}>
     {count}
    </Button>
    <Button
     onClick={() => {
      dispatch(increment());
     }}
    >
     +
    </Button>
   </ButtonGroup>
  </div>
 );
};
