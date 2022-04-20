import React, { useEffect, useState } from "react";
import "./CartContainer.css";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";
import { addItemsToCart, removeItemsFromCart } from "../../actions/cartActions";
import EmptyCartImage from '../../images/empty-cart.png';

function CartContainer() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const handleCartFeature = (cartItem) => {
    dispatch(addItemsToCart(cartItem));
  };

  const deleteCartItem = (deleteProduct) => {
    dispatch(removeItemsFromCart(deleteProduct));
  };
  return (
    <>
      <div className="cart-container">
        <div className="cart-heading">
          <h1>My Cart</h1>
        </div>
        <div className="cart-main-block">
          {cartItems.length > 0 ? (
            <div className="cart-items-container">
              {cartItems.map((item) => (
                <CartItem
                  key={item.size + item.id}
                  item={item}
                  handleCartFeature={handleCartFeature}
                  deleteCartItem={deleteCartItem}
                />
              ))}
            </div>
          ) : (<div className="cart-empty-container"> 
              <img src={EmptyCartImage} alt="Cart is Empty" />
            </div>)}
          {(cartItems.length > 0) && <div className="cart-checkout-container">
            <div>
              <div className="cart-checkout-heading">
                <h1>Cart Summary</h1>
              </div>
              <div className="cart-price-container">
                <div className="items-quantity">
                  <p>
                    Price : (
                    {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                    items)
                  </p>
                </div>
                <h2>
                  ₹
                  {cartItems.reduce(
                    (acc, item) => acc + item.quantity * item.price,
                    0
                  )}
                </h2>
              </div>
              <button className="checkout-button">Proceed to Checkout</button>
            </div>
          </div>}
        </div>
      </div>
    </>
  );
}

export default CartContainer;
