import React from 'react';
import "./Banner.css"

function Banner() {
    return (
        <div>
            <div id="banner" className="banner-container">
                <div className="banner-image-1">
                    <img src={process.env.PUBLIC_URL + "pizza.png"} alt="" />
                </div>
                <div className='banner-image-2'>
                    <img src={process.env.PUBLIC_URL + "pizza.png"} alt="" />
                </div>
                <div className="banner-items-container">
                    <div className="banner-items">
                        <h2>
                            Welcome to Digital Pizza Shop.
                        </h2>
                        <div className="slogan">
                            <h4>We Offer You an Unforgettable</h4>
                            <h4>Delivery Experience</h4>
                        </div>

                        <a href="#container" className="btn-slide">
                            <button>Slide</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;