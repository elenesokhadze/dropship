export const addToCart = (product, count) => {
 return {type: "ADD_TO_CART", product, count};
};

export const removeFromCart = (id) => {
 return {type: "REMOVE_FROM_CART", id};
};
