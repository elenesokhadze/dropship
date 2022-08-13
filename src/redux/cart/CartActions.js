export const addToCart = (product, count) => {
 return {type: "ADD_TO_CART", product, count};
};

export const addSelectedToCart = (products, count) => {
 return {type: "ADD_SELECTED_TO_CART", products, count};
};

export const removeFromCart = (id) => {
 return {type: "REMOVE_FROM_CART", id};
};
