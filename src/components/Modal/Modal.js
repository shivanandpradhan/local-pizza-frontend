import React, { useState } from "react";
import Select from 'react-select'
import ReactStars from 'react-rating-stars-component'
import { addItemsToCart } from "../../actions/cartActions";
import "./Modal.css";
import { useDispatch } from "react-redux";

function Modal({ setOpenModal, product }) {

    const dispatch = useDispatch();

    const sizeOptions = [];
    const toppingsOptions = [];

    product.size[0].items.forEach(item => {
        sizeOptions.push({ value: item.size, label: item.size })
    })

    product.toppings[0].items.forEach(item => {
        toppingsOptions.push({ value: item.name, label: item.name })
    })

    // state variable quantity;
    const [quantity, setQuantity] = useState(1);

    // increment quantity function. 
    const incrementquantity = (event) => {
        setQuantity(quantity + 1);
    }

    // decrement quantity function.
    const decrementquantity = (event) => {
        if (quantity <= 1){
            return;
        }
        setQuantity(quantity - 1);
    }

    // states for handling select box values.
    const [size, setSize] = useState("");
    const [toppings, setToppings] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const handleSizeSelector = (selectedOptions) => {
        setSize(selectedOptions)
    }

    const handleToppingsSelector = (selectedOptions) => {
        setToppings(selectedOptions)
    }

    const addCartItem = () => {
        if (size == "") {
            setErrorMessage("Size is Required.")
            return;
        }
        if (toppings == "") {
            setErrorMessage("Topping is required")
            return;
        }
        const cartProduct = {
            id : product.id,
            name : product.name,
            img_url : product.img_url,
            price : product.price,
            size,
            toppings,
            quantity
        }
        
        dispatch(addItemsToCart(cartProduct));
        setOpenModal(false)
    }


    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={() => setOpenModal(false)} > X </button>
                </div>
                <div className="modalContainer-card">
                    <div className='modalContainer-card-image'>
                        <img src={product.img_url} alt={product.name} />
                    </div>
                    <div className="body">
                        <div className="title">
                            <h1>{product.name}</h1>
                        </div>
                        <p>{product.description}</p>
                        <div className="product-rating">
                            <div className="rating">
                                <ReactStars edit={false} activeColor={"orange"} value={product.rating} color={"#dcdffd"} isHalf={true} />
                                <span>({product.rating})</span>
                            </div>
                            <div className="price">
                                <p>₹{product.price} <span className={product.isVeg ? "veg-type" : "non-veg-type"} >({product.isVeg ? "Veg" : "Non Veg"})</span></p>
                            </div>
                        </div>
                        <div className="select-size">
                            <p>Size</p>
                            <Select 
                                className="basic-multi-select"
                                classNamePrefix="select"
                                options={sizeOptions} 
                                onChange={handleSizeSelector}
                            />
                        </div>
                        <div className="select-toppings">
                            <p>Toppings</p>
                            <Select 
                                className="basic-multi-select"
                                classNamePrefix="select" 
                                isMulti={product.toppings[0].isRadio} 
                                options={toppingsOptions} 
                                onChange={handleToppingsSelector}
                            />
                        </div>
                        <div className="quantity-items-container">
                            <p>Items</p>
                            <div className="buttons">
                                <button className='decr-button' onClick={decrementquantity}>
                                    -
                                </button>
                                <h2>{quantity}</h2>
                                <button className='incr-button' onClick={incrementquantity}>
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                <div className="footer">
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                        id="cancelBtn"
                    >
                        Cancel
                    </button>
                    <button onClick={addCartItem}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;