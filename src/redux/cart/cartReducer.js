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
  case "ADD_SELECTED_TO_CART":
   action.products.forEach((item) => {
    let oldItems = state.filter((product) => product?.product?.id === item.id);
    let foundID = state.indexOf(oldItems[0]);
    if (foundID !== -1) {
     state[foundID].count += 1;
    } else {
     state.push({product: item, count: 1});
    }
   });
   return state;
  case "REMOVE_FROM_CART":
   return state.filter((item) => item.product.id !== action.id);
  default:
   return state;
 }
}
