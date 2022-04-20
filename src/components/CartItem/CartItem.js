import React, { Fragment } from "react";
import "./CartItem.css";
import { useDispatch } from 'react-redux'

function CartItem({ item, handleCartFeature, deleteCartItem }) {

  const dispatch = useDispatch();

  const decrementCount = (event) => {
    if (item.quantity <= 1){
      return ;
    }
    item.quantity = item.quantity - 1;
    handleCartFeature(item);
  };

  const incrementCount = (event) => {
    item.quantity = item.quantity + 1;
    handleCartFeature(item)
  };

  const deleteItem = (event) => {
    deleteCartItem({id : item.id, size : item.size});
  }

  return (
    <Fragment>
      <div className="cartItem-container">
        <div className="cartItem-left-container">
          <img src={item.img_url} alt={item.name} />
        </div>
        <div className="cartItem-right-container">
          <h1 className="cartItem-name">{item.name}</h1>
          <p>
            Size : <span>{item.size.value}</span>
          </p>
          <p>
            Toppings : { item.toppings.value ? 
             <span>{item.toppings.value}</span> : 
              item.toppings.map( item => (<span key={item.value+Date.now()} className="toppings-right-border">{item.value}, </span>))
            }
          </p>
          <p className="cartItem-price">
            Price : <span>₹{item.price * item.quantity}</span>
          </p>
          <div className="buttons-delete-container">
            <div className="buttons">
              <button className="decr-button" onClick={decrementCount}>
                -
              </button>
              <h2>{item.quantity}</h2>
              <button className="incr-button" onClick={incrementCount}>
                +
              </button>
            </div>
            <div className="delete-button">
              <button onClick={deleteItem}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default CartItem;
