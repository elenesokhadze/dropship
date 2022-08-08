export const increment = (id) => {
 return {type: "INCREMENT", id};
};

export const decrement = (id) => {
 return {type: "DECREMENT", id};
};

export const add_counter = (id) => {
 return {
  type: "ADD_COUNTER",
  id,
 };
};
