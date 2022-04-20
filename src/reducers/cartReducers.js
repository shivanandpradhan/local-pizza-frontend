import {
  ADD_TO_CART,
  REMOVE_CART_ITEM
} from "../constants/cartConstants";

export const cartReducer = (
  state = { cartItems: [] },
  action
) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;

      const isItemExist = state.cartItems.find(i => ((i.id === item.id) && (i.size.value === item.size.value)))
      
      if (isItemExist){
        return {
          ...state,
          cartItems : state.cartItems.map((i) => {
            return (((i.id === isItemExist.id) && (i.size.value === item.size.value)) ? item : i);
          })
        };
      }

      else{
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }      

    case REMOVE_CART_ITEM:
      const {id, size} = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => ((i.id !== id) || (i.size !== size))),
      };


    default:
      return state;
  }
};