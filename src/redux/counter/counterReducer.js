export default function counter(state = [], action) {
 switch (action.type) {
  case "ADD_COUNTER":
   if (state[action.id] === undefined) {
    state[action.id] = {id: action.id, count: 1};
   }
   return state;
  case "INCREMENT":
   if (action?.id !== state[action.id]?.id) {
    return state;
   }
   state[action.id].count = state[action.id].count + 1;
   return state;
  case "DECREMENT":
   if (action?.id !== state[action.id]?.id || state[action.id].count < 0) {
    return state;
   }
   state[action.id].count = state[action.id].count - 1;
   return state;
  default:
   return state;
 }
}
