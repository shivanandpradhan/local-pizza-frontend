import React, { Fragment, useState } from 'react';
import ReactStars from 'react-rating-stars-component'
import './ProductItem.css'
import Modal from '../Modal/Modal';

function Product({ product }) {

    const [openModal, setOpenModal] = useState(false);

    return (
        <Fragment>
        <div className="product-card">
            <div className='product-card-image'>
            <div className="image-overlay"></div>
                <img src={product.img_url} alt={product.name} />
            </div>
            <div className="product-body-container">
                <h2>{product.name}</h2>
                <p>{product.description}</p>

                <div className="product-rating">
                    <div className="rating">
                        <ReactStars edit={false} activeColor={"orange"} value={product.rating} color={"#dcdffd"} isHalf={true} />
                        <span>({product.rating})</span>
                    </div>
                    <div className="price">
                        <p>₹{product.price} <span className= { product.isVeg ? "veg-type" : "non-veg-type" } >({product.isVeg ? "Veg" : "Non Veg"})</span></p>
                    </div>
                </div>

                <div className="order-button">
                    <button className='decr-button' onClick={() => setOpenModal(true)}>
                        Order Now
                    </button>
                </div>
            </div>
        </div>
        {openModal && <Modal setOpenModal={setOpenModal} product={product} />}
        </Fragment>
    )
}

export default Product;