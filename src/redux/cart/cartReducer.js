export default function cart(state = [], action) {
 switch (action.type) {
  case "ADD_TO_CART":
   let unique = true;
   state.forEach((item) => {
    if (item.product === action.product) {
     unique = false;
     item.count = item.count + 1;
     return item;
    }
   });
   if (unique === false) {
    return state;
   }
   return [...state, {product: action.product, count: action.count}];
  case "REMOVE_FROM_CART":
   return state.filter((item) => item.product.id !== action.id);
  default:
   return state;
 }
}
