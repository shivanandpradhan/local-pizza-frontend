import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
} from "../constants/cartConstants";

// Add to Cart
export const addItemsToCart = (cartItem) => async (dispatch, getState) => {
  
    const data = {
        id : cartItem.id,
        name : cartItem.name,
        price : cartItem.price,
        quantity : cartItem.quantity,
        img_url : cartItem.img_url,
        size : cartItem.size,
        toppings : cartItem.toppings
    }
    
  dispatch({
    type: ADD_TO_CART,
    payload: data
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// REMOVE FROM CART
export const removeItemsFromCart = (deleteProduct) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_CART_ITEM,
    payload: deleteProduct,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};